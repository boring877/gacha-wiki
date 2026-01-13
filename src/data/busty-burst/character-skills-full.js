// Busty Burst Character Skills Data
// Auto-generated from ALL_CHAR_SKILLS.txt
// Contains skills for 76 characters

export const BUSTY_BURST_SKILLS_DATA = [
  {
    "skills": [
      {
        "slot": 2,
        "name": "Annoying!",
        "icon": "skill001/skill0005",
        "description": "Deals 235% ATK + 70 magic damage to the nearest enemy",
        "target": "Nearest Enemy",
        "castTime": "1.08s",
        "damageScaling": "235% ATK",
        "baseDamage": "+70",
        "levelGrowth": "+20",
        "lvl1": "235% + 70",
        "lvl90": "235% + 1850"
      },
      {
        "slot": 3,
        "name": "Mm-hmm, I’m the First Queen♪",
        "icon": "skill001/skill0011",
        "description": "Deals 188% ATK + 100 magic damage to the nearest enemy and inflicts Charm for 2 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.08s",
        "damageScaling": "188% ATK",
        "baseDamage": "+100",
        "levelGrowth": "+16",
        "lvl1": "188% + 100",
        "lvl90": "188% + 1524",
        "effect": "Charm for 2s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "I’ll eat you up!",
        "icon": "skill001/skill0006_1",
        "description": "Deals 300% ATK + 221 magic damage to the 3 nearest enemies and absorbs 6% of the damage dealt to restore own HP",
        "effect": "300% + 221 + 6% lifesteal"
      },
      {
        "rank": 2,
        "name": "I’ll eat you up!",
        "icon": "skill001/skill0006_2",
        "description": "Deals 360% ATK + 266 magic damage to the 3 nearest enemies and absorbs 6% of the damage dealt to restore own HP",
        "effect": "360% + 266 + 6% lifesteal"
      },
      {
        "rank": 3,
        "name": "I’ll eat you up!",
        "icon": "skill001/skill0006_3",
        "description": "Deals 405% ATK + 301 magic damage to the 3 nearest enemies and absorbs 6% of the damage dealt to restore own HP",
        "effect": "405% + 301 + 6% lifesteal"
      },
      {
        "rank": 4,
        "name": "I’ll eat you up!",
        "icon": "skill001/skill0006_4",
        "description": "Deals 434% ATK + 349 magic damage to the 3 nearest enemies and absorbs 6% of the damage dealt to restore own HP",
        "effect": "434% + 349 + 6% lifesteal"
      },
      {
        "rank": 5,
        "name": "I’ll eat you up!",
        "icon": "skill001/skill0006_5",
        "description": "Deals 465% ATK + 367 magic damage to the 3 nearest enemies and absorbs 6% of the damage dealt to restore own HP",
        "effect": "465% + 367 + 6% lifesteal"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Charm Resist",
        "icon": "skill001/skill1003",
        "effect": "Charm Resistance LvMax (+1)"
      },
      {
        "slot": 2,
        "name": "Self Magic ATK UP",
        "icon": "skill001/skill1001",
        "effect": "Magic Attack + (+130)"
      }
    ],
    "name": "Shamshel",
    "id": 2001,
    "rarity": "R",
    "element": "Dark",
    "role": "Attacker",
    "tags": [
      "Disrupt"
    ],
    "baseStats": {
      "HP": 1491,
      "ATK": 156,
      "MATK": 260,
      "DEF": 46,
      "MDEF": 117
    },
    "skillRotation": {
      "opening": "Skill3 → Basic → Basic → Basic → Skill2",
      "loop": "Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic → Basic → Skill2 → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "100% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "r-shamshel"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Edelrant-Style Swordsmanship: Earthstride",
        "icon": "skill001/skill0002",
        "description": "Deals 160% ATK + 100 physical damage to the 2 nearest enemies",
        "target": "Nearest Enemy",
        "castTime": "0.88s",
        "damageScaling": "160% ATK",
        "baseDamage": "+100",
        "levelGrowth": "+10",
        "lvl1": "160% + 100",
        "lvl90": "160% + 990"
      },
      {
        "slot": 3,
        "name": "Pride of the Royal Guards",
        "icon": "skill001/skill0019",
        "description": "Applies 7 seconds of Physical Defense + Lv2 (+15% / +100) and 7 seconds of Magic Defense+ Lv2 (+15% / +100) to self",
        "target": "Self",
        "castTime": "0.88s",
        "effect": "Physical Defense + Lv2 (+15 / +100) for 7s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Edelrant-Style Swordsmanship Ultimate: Aurora Blade",
        "icon": "skill001/skill0003_1",
        "description": "Deals 1300% ATK + 615 physical damage to the nearest enemy and inflicts Physical Attack (+108%) - (-10% / -50) Ultimate Lv1 (-10%) for 10 seconds",
        "effect": "1300% + 615 | Buff: Physical Attack (+108%) - (-10% / -50) Ultimate Lv1 (+-10) (10s)"
      },
      {
        "rank": 2,
        "name": "Edelrant-Style Swordsmanship Ultimate: Aurora Blade",
        "icon": "skill001/skill0003_2",
        "description": "Deals 1450% ATK + 706 physical damage to the nearest enemy and inflicts Physical Attack (+108%) - (-10% / -50) Ultimate Lv2 (-13%) for 10 seconds",
        "effect": "1450% + 706 | Buff: Physical Attack (+108%) - (-10% / -50) Ultimate Lv2 (+-13) (10s)"
      },
      {
        "rank": 3,
        "name": "Edelrant-Style Swordsmanship Ultimate: Aurora Blade",
        "icon": "skill001/skill0003_3",
        "description": "Deals 1570% ATK + 818 physical damage to the nearest enemy and inflicts Physical Attack (+108%) - (-10% / -50) Ultimate Lv3 (-16%) for 10 seconds",
        "effect": "1570% + 818 | Buff: Physical Attack (+108%) - (-10% / -50) Ultimate Lv3 (+-16) (10s)"
      },
      {
        "rank": 4,
        "name": "Edelrant-Style Swordsmanship Ultimate: Aurora Blade",
        "icon": "skill001/skill0003_4",
        "description": "Deals 1689% ATK + 951 physical damage to the nearest enemy and inflicts Physical Attack (+108%) - (-10% / -50) Ultimate Lv4 (-18%) for 10 seconds",
        "effect": "1689% + 951 | Buff: Physical Attack (+108%) - (-10% / -50) Ultimate Lv4 (+-18) (10s)"
      },
      {
        "rank": 5,
        "name": "Edelrant-Style Swordsmanship Ultimate: Aurora Blade",
        "icon": "skill001/skill0003_5",
        "description": "Deals 1750% ATK + 1064 physical damage to the nearest enemy and inflicts Physical Attack (+108%) - (-10% / -50) Ultimate Lv5 (-20%) for 10 seconds",
        "effect": "1750% + 1064 | Buff: Physical Attack (+108%) - (-10% / -50) Ultimate Lv5 (+-20) (10s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Physical DEF UP",
        "icon": "skill001/skill1002",
        "effect": "Physical Defense + (+70)"
      },
      {
        "slot": 2,
        "name": "Self Physical CRIT UP",
        "icon": "skill001/skill1001",
        "effect": "Physical Critical Damage+ (+59)"
      }
    ],
    "name": "Aysis",
    "id": 2002,
    "rarity": "R",
    "element": "Mind",
    "role": "Tank",
    "tags": [
      "Debuff"
    ],
    "baseStats": {
      "HP": 2313,
      "ATK": 114,
      "MATK": 68,
      "DEF": 117,
      "MDEF": 46
    },
    "skillRotation": {
      "opening": "Skill3 → Basic → Basic → Basic → Skill2",
      "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "100% ATK",
      "speedLabel": "Very Fast",
      "speedValue": "0.36"
    },
    "slug": "r-aysis"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Skillet Smash",
        "icon": "skill001/skill0011",
        "description": "Deals 233% ATK + 70 physical damage to the nearest enemy and inflicts Stun for 2 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.38s",
        "damageScaling": "233% ATK",
        "baseDamage": "+70",
        "levelGrowth": "+16",
        "lvl1": "233% + 70",
        "lvl90": "233% + 1494",
        "effect": "Stun for 2s"
      },
      {
        "slot": 3,
        "name": "Come Drink Some Milk",
        "icon": "skill001/skill0021",
        "description": "Restores HP by 3100% ATK + 652 to the ally with the lowest HP",
        "target": "Ally with Lowest HP",
        "castTime": "1.38s",
        "damageScaling": "3100% ATK",
        "baseDamage": "+652",
        "levelGrowth": "+50",
        "lvl1": "3100% + 652",
        "lvl90": "3100% + 5102"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Roxanne’s Special Thick Soup",
        "icon": "skill001/skill0022_1",
        "description": "Restores HP by 1800% ATK + 1712 to the 3 nearest allies and inflicts Physical Attack (+108%) + (+389) Ultimate Lv1 (+15%) for 10 seconds",
        "effect": "1800% + 1712 | Buff: Physical Attack (+108%) + (+389) Ultimate Lv1 (+15) (10s)"
      },
      {
        "rank": 2,
        "name": "Roxanne’s Special Thick Soup",
        "icon": "skill001/skill0022_2",
        "description": "Restores HP by 2150% ATK + 1833 to the 3 nearest allies and inflicts Physical Attack (+108%) + (+389) Ultimate Lv2 (+20%) for 10 seconds",
        "effect": "2150% + 1833 | Buff: Physical Attack (+108%) + (+389) Ultimate Lv2 (+20) (10s)"
      },
      {
        "rank": 3,
        "name": "Roxanne’s Special Thick Soup",
        "icon": "skill001/skill0022_3",
        "description": "Restores HP by 2400% ATK + 1945 to the 3 nearest allies and inflicts Physical Attack (+108%) + (+389) Ultimate Lv3 (+24%) for 10 seconds",
        "effect": "2400% + 1945 | Buff: Physical Attack (+108%) + (+389) Ultimate Lv3 (+24) (10s)"
      },
      {
        "rank": 4,
        "name": "Roxanne’s Special Thick Soup",
        "icon": "skill001/skill0022_4",
        "description": "Restores HP by 2600% ATK + 2056 to the 3 nearest allies and inflicts Physical Attack (+108%) + (+389) Ultimate Lv4 (+27%) for 10 seconds",
        "effect": "2600% + 2056 | Buff: Physical Attack (+108%) + (+389) Ultimate Lv4 (+27) (10s)"
      },
      {
        "rank": 5,
        "name": "Roxanne’s Special Thick Soup",
        "icon": "skill001/skill0022_5",
        "description": "Restores HP by 2750% ATK + 2134 to the 3 nearest allies and inflicts Physical Attack (+108%) + (+389) Ultimate Lv5 (+30%) for 10 seconds",
        "effect": "2750% + 2134 | Buff: Physical Attack (+108%) + (+389) Ultimate Lv5 (+30) (10s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Physical CRIT UP",
        "icon": "skill001/skill1001",
        "effect": "Physical Critical Damage+ (+59)"
      },
      {
        "slot": 2,
        "name": "Self Healing UP",
        "icon": "skill001/skill1004",
        "effect": "Healing Amount + (+10)"
      }
    ],
    "name": "Roxanne",
    "id": 2003,
    "rarity": "R",
    "element": "Mind",
    "role": "Support",
    "tags": [
      "Heal",
      "Buff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 2578,
      "ATK": 203,
      "MATK": 122,
      "DEF": 56,
      "MDEF": 22
    },
    "skillRotation": {
      "opening": "Skill2 → Basic → Basic → Skill3",
      "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "100% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "r-roxanne"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Heart Racing",
        "icon": "skill001/skill0019",
        "description": "Applies Physical Attack (+108%) + Lv2 (+12% / +25) to the 3 nearest allies for 8 seconds and Physical Defense + Lv2 (+15% / +100) for 8 seconds",
        "target": "Nearest Ally",
        "castTime": "1.38s",
        "effect": "Physical Attack (+108%) + Lv2 (+12 / +25) for 8s"
      },
      {
        "slot": 3,
        "name": "Mm, good idea!",
        "icon": "skill001/skill0021",
        "description": "Restores HP by 800% ATK + 500 to the 3 nearest allies and removes debuffs",
        "target": "Nearest Ally",
        "castTime": "1.38s",
        "damageScaling": "800% ATK",
        "baseDamage": "+500",
        "levelGrowth": "+12",
        "lvl1": "800% + 500",
        "lvl90": "800% + 1568",
        "effect": "Debuff Resistance LvMax (+1) for s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Super Breast Smothering",
        "icon": "skill001/skill0022_1",
        "description": "Restores HP by 1300% ATK + 1123 to the 3 nearest allies and inflicts Block+ (+10) Ultimate Lv1 (+10) for 10 seconds",
        "effect": "1300% + 1123 | Buff: Block+ (+10) Ultimate Lv1 (+10) (10s)"
      },
      {
        "rank": 2,
        "name": "Super Breast Smothering",
        "icon": "skill001/skill0022_2",
        "description": "Restores HP by 1600% ATK + 1239 to the 3 nearest allies and inflicts Block+ (+10) Ultimate Lv2 (+13) for 10 seconds",
        "effect": "1600% + 1239 | Buff: Block+ (+10) Ultimate Lv2 (+13) (10s)"
      },
      {
        "rank": 3,
        "name": "Super Breast Smothering",
        "icon": "skill001/skill0022_3",
        "description": "Restores HP by 1800% ATK + 1376 to the 3 nearest allies and inflicts Block+ (+10) Ultimate Lv3 (+16) for 10 seconds",
        "effect": "1800% + 1376 | Buff: Block+ (+10) Ultimate Lv3 (+16) (10s)"
      },
      {
        "rank": 4,
        "name": "Super Breast Smothering",
        "icon": "skill001/skill0022_4",
        "description": "Restores HP by 2000% ATK + 1555 to the 3 nearest allies and inflicts Block+ (+10) Ultimate Lv4 (+18) for 10 seconds",
        "effect": "2000% + 1555 | Buff: Block+ (+10) Ultimate Lv4 (+18) (10s)"
      },
      {
        "rank": 5,
        "name": "Super Breast Smothering",
        "icon": "skill001/skill0022_5",
        "description": "Restores HP by 2100% ATK + 1734 to the 3 nearest allies and inflicts Block+ (+10) Ultimate Lv5 (+20) for 10 seconds",
        "effect": "2100% + 1734 | Buff: Block+ (+10) Ultimate Lv5 (+20) (10s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Max HP UP",
        "icon": "skill001/skill1003",
        "effect": "Max HP + (+1447)"
      },
      {
        "slot": 2,
        "name": "Self Healing UP",
        "icon": "skill001/skill1004",
        "effect": "Healing Amount + (+10)"
      }
    ],
    "name": "Luceria",
    "id": 2004,
    "rarity": "R",
    "element": "Mind",
    "role": "Tank",
    "tags": [
      "Heal",
      "Buff",
      "Cleanse"
    ],
    "baseStats": {
      "HP": 2423,
      "ATK": 193,
      "MATK": 116,
      "DEF": 117,
      "MDEF": 46
    },
    "skillRotation": {
      "opening": "Skill2 → Basic → Skill3",
      "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "100% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "r-luceria"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Armor-Breaker Slash",
        "icon": "skill001/skill0002",
        "description": "Deals 276% ATK + 105 physical damage to the enemy with the lowest HP and applies Physical Attack (+108%) + Lv4 (+18% / +35) to self for 6 seconds",
        "target": "Enemy with Lowest HP",
        "castTime": "1.08s",
        "damageScaling": "276% ATK",
        "baseDamage": "+105",
        "levelGrowth": "+20",
        "lvl1": "276% + 105",
        "lvl90": "276% + 1885",
        "effect": "Physical Attack (+108%) + Lv4 (+18 / +35) for 6s"
      },
      {
        "slot": 3,
        "name": "Charging Slash",
        "icon": "skill001/skill0009",
        "description": "Deals 220% ATK + 83 physical damage to the enemy with the lowest HP and inflicts Physical Defense - Lv4 (-21% / -40) for 10 seconds",
        "target": "Enemy with Lowest HP",
        "castTime": "1.08s",
        "damageScaling": "220% ATK",
        "baseDamage": "+83",
        "levelGrowth": "+20",
        "lvl1": "220% + 83",
        "lvl90": "220% + 1863",
        "effect": "Physical Defense - Lv4 (+-21 / +-40) for 10s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Valkenheim-Style Ultimate: Samidare Thrust",
        "icon": "skill001/skill0003_1",
        "description": "Deals 1060% ATK + 820 physical damage to the enemy with the lowest HP and absorbs 6% of the damage dealt to restore own HP",
        "effect": "1060% + 820 + 6% lifesteal"
      },
      {
        "rank": 2,
        "name": "Valkenheim-Style Ultimate: Samidare Thrust",
        "icon": "skill001/skill0003_2",
        "description": "Deals 1270% ATK + 934 physical damage to the enemy with the lowest HP and absorbs 6% of the damage dealt to restore own HP",
        "effect": "1270% + 934 + 6% lifesteal"
      },
      {
        "rank": 3,
        "name": "Valkenheim-Style Ultimate: Samidare Thrust",
        "icon": "skill001/skill0003_3",
        "description": "Deals 1430% ATK + 1026 physical damage to the enemy with the lowest HP and absorbs 6% of the damage dealt to restore own HP",
        "effect": "1430% + 1026 + 6% lifesteal"
      },
      {
        "rank": 4,
        "name": "Valkenheim-Style Ultimate: Samidare Thrust",
        "icon": "skill001/skill0003_4",
        "description": "Deals 1537% ATK + 1187 physical damage to the enemy with the lowest HP and absorbs 6% of the damage dealt to restore own HP",
        "effect": "1537% + 1187 + 6% lifesteal"
      },
      {
        "rank": 5,
        "name": "Valkenheim-Style Ultimate: Samidare Thrust",
        "icon": "skill001/skill0003_5",
        "description": "Deals 1643% ATK + 1267 physical damage to the enemy with the lowest HP and absorbs 6% of the damage dealt to restore own HP",
        "effect": "1643% + 1267 + 6% lifesteal"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Max HP UP",
        "icon": "skill001/skill1003",
        "effect": "Max HP + (+2896)"
      },
      {
        "slot": 2,
        "name": "On enemy defeat，Self Physical ATK UP, Physical CRIT UP",
        "icon": "skill001/skill1001",
        "effect": "Physical Attack (+108%) + (+389)",
        "effect2": "Physical Critical Damage+ (+176)"
      }
    ],
    "name": "Gladys",
    "id": 2005,
    "rarity": "SR",
    "element": "Fire",
    "role": "Attacker",
    "tags": [
      "Debuff"
    ],
    "baseStats": {
      "HP": 1566,
      "ATK": 274,
      "MATK": 164,
      "DEF": 126,
      "MDEF": 50
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic → Basic",
      "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2 → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "110% ATK",
      "speedLabel": "Fast",
      "speedValue": "0.61"
    },
    "slug": "sr-gladys"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Looks like your luck isn’t so good",
        "icon": "skill001/skill0011",
        "description": "Deals 180% ATK + 110 magic damage to the farthest enemy and inflicts Confusion for 6 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.58s",
        "damageScaling": "180% ATK",
        "baseDamage": "+110",
        "levelGrowth": "+20",
        "lvl1": "180% + 110",
        "lvl90": "180% + 1890",
        "effect": "Confusion for 6s"
      },
      {
        "slot": 3,
        "name": "Seems you need a little punishment",
        "icon": "skill001/skill0011",
        "description": "Deals 150% ATK + 120 magic damage to the farthest enemy and inflicts Sleep for 5 seconds",
        "target": "Farthest Enemy",
        "castTime": "1.58s",
        "damageScaling": "150% ATK",
        "baseDamage": "+120",
        "levelGrowth": "+20",
        "lvl1": "150% + 120",
        "lvl90": "150% + 1900",
        "effect": "Sleep for 5s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Magic of Light and Shadow",
        "icon": "skill001/skill0012_1",
        "description": "Deals 409% ATK + 297 magic damage to all enemies and inflicts Fear Lv1 (-20) for 4 seconds",
        "effect": "409% + 297 | Buff: Fear (-100) Ultimate Lv1 (+-20) (4s)"
      },
      {
        "rank": 2,
        "name": "Magic of Light and Shadow",
        "icon": "skill001/skill0012_2",
        "description": "Deals 574% ATK + 365 magic damage to all enemies and inflicts Fear Lv2 (-40) for 4 seconds",
        "effect": "574% + 365 | Buff: Fear (-100) Ultimate Lv2 (+-25) (4s)"
      },
      {
        "rank": 3,
        "name": "Magic of Light and Shadow",
        "icon": "skill001/skill0012_3",
        "description": "Deals 697% ATK + 493 magic damage to all enemies and inflicts Fear Lv3 (-60) for 4 seconds",
        "effect": "697% + 493 | Buff: Fear (-100) Ultimate Lv3 (+-30) (4s)"
      },
      {
        "rank": 4,
        "name": "Magic of Light and Shadow",
        "icon": "skill001/skill0012_4",
        "description": "Deals 779% ATK + 532 magic damage to all enemies and inflicts Fear Lv4 (-70) for 4 seconds",
        "effect": "779% + 532 | Buff: Fear (-100) Ultimate Lv4 (+-35) (4s)"
      },
      {
        "rank": 5,
        "name": "Magic of Light and Shadow",
        "icon": "skill001/skill0012_5",
        "description": "Deals 819% ATK + 602 magic damage to all enemies and inflicts Fear Lv5 (-80) for 4 seconds",
        "effect": "819% + 602 | Buff: Fear (-100) Ultimate Lv5 (+-40) (4s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Physical DEF UP, Magic DEF UP",
        "icon": "skill001/skill1002",
        "effect": "Physical Defense + (+70)",
        "effect2": "Magic Defense+ (+70)"
      },
      {
        "slot": 2,
        "name": "Self Max HP UP, Magic ATK UP",
        "icon": "skill001/skill1003",
        "effect": "Max HP + (+1447)",
        "effect2": "Magic Attack + (+259)"
      }
    ],
    "name": "Emelaria",
    "id": 2006,
    "rarity": "SR",
    "element": "Dark",
    "role": "Attacker",
    "tags": [
      "Disrupt"
    ],
    "baseStats": {
      "HP": 2707,
      "ATK": 156,
      "MATK": 259,
      "DEF": 25,
      "MDEF": 65
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic",
      "loop": "Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2 → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "110% ATK",
      "speedLabel": "Slow",
      "speedValue": "1.11"
    },
    "slug": "sr-emelaria"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Queen’s Rejection",
        "icon": "skill001/skill0019",
        "description": "Applies Physical Critical Damage+ Lv1 (+20) to all allies for 8 seconds",
        "target": "All Allies",
        "castTime": "1.78s",
        "effect": "Physical Critical Damage+ Lv1 (+20) for 8s"
      },
      {
        "slot": 3,
        "name": "Queen’s Reward",
        "icon": "skill001/skill0013",
        "description": "Applies Physical Attack (+108%) + Lv1 (+10% / +20) to all allies for 8 seconds",
        "target": "All Allies",
        "castTime": "1.78s",
        "effect": "Physical Attack (+108%) + Lv1 (+10 / +20) for 8s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "The Continent’s Shining Treasure",
        "icon": "skill001/skill0022_1",
        "description": "Restores HP by 2400% ATK + 309 to all allies and inflicts Hit-Based Shield (+30% / +1) Ultimate Lv1 (+20% / +999) for 10 seconds",
        "effect": "2400% + 309 | Buff: Hit-Based Shield (+30% / +1) Ultimate Lv1 (+20 / +999) (10s)"
      },
      {
        "rank": 2,
        "name": "The Continent’s Shining Treasure",
        "icon": "skill001/skill0022_2",
        "description": "Restores HP by 2760% ATK + 339 to all allies and inflicts Hit-Based Shield (+30% / +1) Ultimate Lv2 (+25% / +999) for 10 seconds",
        "effect": "2760% + 339 | Buff: Hit-Based Shield (+30% / +1) Ultimate Lv2 (+25 / +999) (10s)"
      },
      {
        "rank": 3,
        "name": "The Continent’s Shining Treasure",
        "icon": "skill001/skill0022_3",
        "description": "Restores HP by 3000% ATK + 380 to all allies and inflicts Hit-Based Shield (+30% / +1) Ultimate Lv3 (+25% / +999) for 10 seconds",
        "effect": "3000% + 380 | Buff: Hit-Based Shield (+30% / +1) Ultimate Lv3 (+25 / +999) (10s)"
      },
      {
        "rank": 4,
        "name": "The Continent’s Shining Treasure",
        "icon": "skill001/skill0022_4",
        "description": "Restores HP by 3240% ATK + 414 to all allies and inflicts Hit-Based Shield (+30% / +1) Ultimate Lv4 (+30% / +999) for 10 seconds",
        "effect": "3240% + 414 | Buff: Hit-Based Shield (+30% / +1) Ultimate Lv4 (+30 / +999) (10s)"
      },
      {
        "rank": 5,
        "name": "The Continent’s Shining Treasure",
        "icon": "skill001/skill0022_5",
        "description": "Restores HP by 3360% ATK + 498 to all allies and inflicts Hit-Based Shield (+30% / +1) Ultimate Lv5 (+30% / +999) for 10 seconds",
        "effect": "3360% + 498 | Buff: Hit-Based Shield (+30% / +1) Ultimate Lv5 (+30 / +999) (10s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Block UP",
        "icon": "skill001/skill1001",
        "effect": "Block+ (+10)"
      },
      {
        "slot": 2,
        "name": "Self Healing UP",
        "icon": "skill001/skill1002",
        "effect": "Healing Amount + (+10)"
      }
    ],
    "name": "Aphrodia",
    "id": 2007,
    "rarity": "R",
    "element": "Mind",
    "role": "Support",
    "tags": [
      "Buff",
      "Heal"
    ],
    "baseStats": {
      "HP": 1957,
      "ATK": 275,
      "MATK": 165,
      "DEF": 117,
      "MDEF": 46
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic",
      "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "100% ATK",
      "speedLabel": "Very Slow",
      "speedValue": "1.36"
    },
    "slug": "r-aphrodia"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Shockwave",
        "icon": "skill001/skill0005",
        "description": "Deals 320% ATK + 120 magic damage to the nearest enemy",
        "target": "Farthest Enemy",
        "castTime": "1.08s",
        "damageScaling": "320% ATK",
        "baseDamage": "+120",
        "levelGrowth": "+25",
        "lvl1": "320% + 120",
        "lvl90": "320% + 2345"
      },
      {
        "slot": 3,
        "name": "Light Orb",
        "icon": "skill001/skill0010",
        "description": "Deals 280% ATK + 100 magic damage to the nearest enemy and inflicts Magic Defense- Lv4 (-21% / -40) for 10 seconds",
        "target": "Farthest Enemy",
        "castTime": "1.08s",
        "damageScaling": "280% ATK",
        "baseDamage": "+100",
        "levelGrowth": "+20",
        "lvl1": "280% + 100",
        "lvl90": "280% + 1880",
        "effect": "Magic Defense- Lv4 (+-21 / +-40) for 10s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Shining Spear",
        "icon": "skill001/skill0012_1",
        "description": "Deals 600% ATK + 500 magic damage to the 2 nearest enemies and inflicts Stun for 3 seconds",
        "effect": "600% + 500 | Buff: Stun (3s)"
      },
      {
        "rank": 2,
        "name": "Shining Spear",
        "icon": "skill001/skill0012_2",
        "description": "Deals 720% ATK + 524 magic damage to the 2 nearest enemies and inflicts Stun for 3 seconds",
        "effect": "720% + 524 | Buff: Stun (3s)"
      },
      {
        "rank": 3,
        "name": "Shining Spear",
        "icon": "skill001/skill0012_3",
        "description": "Deals 810% ATK + 599 magic damage to the 2 nearest enemies and inflicts Stun for 3 seconds",
        "effect": "810% + 599 | Buff: Stun (3s)"
      },
      {
        "rank": 4,
        "name": "Shining Spear",
        "icon": "skill001/skill0012_4",
        "description": "Deals 869% ATK + 653 magic damage to the 2 nearest enemies and inflicts Stun for 3 seconds",
        "effect": "869% + 653 | Buff: Stun (3s)"
      },
      {
        "rank": 5,
        "name": "Shining Spear",
        "icon": "skill001/skill0012_5",
        "description": "Deals 930% ATK + 707 magic damage to the 2 nearest enemies and inflicts Stun for 3 seconds",
        "effect": "930% + 707 | Buff: Stun (3s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "On enemy defeat，Self MP Recovery (+100)",
        "icon": "skill001/skill1003",
        "effect": "MP Recovery (+100)+ (+21)"
      },
      {
        "slot": 2,
        "name": "Self Magic ATK UP, Magic DEF UP",
        "icon": "skill001/skill1001",
        "effect": "Magic Attack + (+259)"
      }
    ],
    "name": "Nerys",
    "id": 2008,
    "rarity": "SR",
    "element": "Wind",
    "role": "Attacker",
    "tags": [
      "Disrupt",
      "Debuff"
    ],
    "baseStats": {
      "HP": 2062,
      "ATK": 132,
      "MATK": 221,
      "DEF": 25,
      "MDEF": 65
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic",
      "loop": "Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2 → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "110% ATK",
      "speedLabel": "Fast",
      "speedValue": "0.61"
    },
    "slug": "sr-nerys"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Even though you want to get so close…",
        "icon": "skill001/skill0002",
        "description": "Deals 225% ATK + 100 physical damage to the enemy with the highest Physical ATK",
        "target": "Enemy with Highest Physical ATK",
        "castTime": "1.38s",
        "damageScaling": "225% ATK",
        "baseDamage": "+100",
        "levelGrowth": "+20",
        "lvl1": "225% + 100",
        "lvl90": "225% + 1880"
      },
      {
        "slot": 3,
        "name": "Drowatt just doesn’t knooow♪",
        "icon": "skill001/skill0011",
        "description": "Deals 178% ATK + 90 physical damage to the enemy with the highest Physical ATK and inflicts Charm for 3 seconds",
        "target": "Enemy with Highest Physical ATK",
        "castTime": "1.38s",
        "damageScaling": "178% ATK",
        "baseDamage": "+90",
        "levelGrowth": "+16",
        "lvl1": "178% + 90",
        "lvl90": "178% + 1514",
        "effect": "Charm for 3s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Alluring Bounce♪",
        "icon": "skill001/skill0003_1",
        "description": "Deals 750% ATK + 650 physical damage to the enemy with the highest Physical ATK and inflicts Physical Attack (+108%) - (-10% / -50) Ultimate Lv1 (-10%) for 10 seconds",
        "effect": "750% + 650 | Buff: Physical Attack (+108%) - (-10% / -50) Ultimate Lv1 (+-5) (10s)"
      },
      {
        "rank": 2,
        "name": "Alluring Bounce♪",
        "icon": "skill001/skill0003_2",
        "description": "Deals 900% ATK + 730 physical damage to the enemy with the highest Physical ATK and inflicts Physical Attack (+108%) - (-10% / -50) Ultimate Lv2 (-13%) for 10 seconds",
        "effect": "900% + 730 | Buff: Physical Attack (+108%) - (-10% / -50) Ultimate Lv2 (+-8) (10s)"
      },
      {
        "rank": 3,
        "name": "Alluring Bounce♪",
        "icon": "skill001/skill0003_3",
        "description": "Deals 1050% ATK + 790 physical damage to the enemy with the highest Physical ATK and inflicts Physical Attack (+108%) - (-10% / -50) Ultimate Lv3 (-16%) for 10 seconds",
        "effect": "1050% + 790 | Buff: Physical Attack (+108%) - (-10% / -50) Ultimate Lv3 (+-11) (10s)"
      },
      {
        "rank": 4,
        "name": "Alluring Bounce♪",
        "icon": "skill001/skill0003_4",
        "description": "Deals 1150% ATK + 850 physical damage to the enemy with the highest Physical ATK and inflicts Physical Attack (+108%) - (-10% / -50) Ultimate Lv4 (-18%) for 10 seconds",
        "effect": "1150% + 850 | Buff: Physical Attack (+108%) - (-10% / -50) Ultimate Lv4 (+-14) (10s)"
      },
      {
        "rank": 5,
        "name": "Alluring Bounce♪",
        "icon": "skill001/skill0003_5",
        "description": "Deals 1200% ATK + 900 physical damage to the enemy with the highest Physical ATK and inflicts Physical Attack (+108%) - (-10% / -50) Ultimate Lv5 (-20%) for 10 seconds",
        "effect": "1200% + 900 | Buff: Physical Attack (+108%) - (-10% / -50) Ultimate Lv5 (+-15) (10s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Physical DEF UP",
        "icon": "skill001/skill1002",
        "effect": "Physical Defense + (+70)"
      },
      {
        "slot": 2,
        "name": "Self Physical ATK UP",
        "icon": "skill001/skill1001",
        "effect": "Physical Attack (+108%) + (+130)"
      }
    ],
    "name": "Drowatt",
    "id": 2009,
    "rarity": "R",
    "element": "Wind",
    "role": "Attacker",
    "tags": [
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 1491,
      "ATK": 314,
      "MATK": 188,
      "DEF": 117,
      "MDEF": 46
    },
    "skillRotation": {
      "opening": "Skill3 → Basic → Basic → Basic → Skill2",
      "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Basic → Skill3 → Skill2"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "100% ATK",
      "speedLabel": "Slow",
      "speedValue": "1.11"
    },
    "slug": "r-drowatt"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "I want to make you feel even better",
        "icon": "skill001/skill0005",
        "description": "Deals 270% ATK + 100 magic damage to the enemy with the highest Magical ATK",
        "target": "Enemy with Highest Magic ATK",
        "castTime": "1.08s",
        "damageScaling": "270% ATK",
        "baseDamage": "+100",
        "levelGrowth": "+20",
        "lvl1": "270% + 100",
        "lvl90": "270% + 1880"
      },
      {
        "slot": 3,
        "name": "As you like it♪",
        "icon": "skill001/skill0011",
        "description": "Deals 216% ATK + 90 magic damage to the enemy with the highest Magical ATK and inflicts Blind (-50% / -100) for 8 seconds",
        "target": "Enemy with Highest Magic ATK",
        "castTime": "1.08s",
        "damageScaling": "216% ATK",
        "baseDamage": "+90",
        "levelGrowth": "+16",
        "lvl1": "216% + 90",
        "lvl90": "216% + 1514",
        "effect": "Blind (+-50 / +-100) for 8s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Seductive Bounce♪",
        "icon": "skill001/skill0006_1",
        "description": "Deals 1035% ATK + 711 magic damage to the enemy with the highest Magical ATK and inflicts Petrify for 2 seconds",
        "effect": "1035% + 711 | Buff: Petrify (2s)"
      },
      {
        "rank": 2,
        "name": "Seductive Bounce♪",
        "icon": "skill001/skill0006_2",
        "description": "Deals 1242% ATK + 802 magic damage to the enemy with the highest Magical ATK and inflicts Petrify for 2 seconds",
        "effect": "1242% + 802 | Buff: Petrify (2s)"
      },
      {
        "rank": 3,
        "name": "Seductive Bounce♪",
        "icon": "skill001/skill0006_3",
        "description": "Deals 1400% ATK + 892 magic damage to the enemy with the highest Magical ATK and inflicts Petrify for 2 seconds",
        "effect": "1400% + 892 | Buff: Petrify (2s)"
      },
      {
        "rank": 4,
        "name": "Seductive Bounce♪",
        "icon": "skill001/skill0006_4",
        "description": "Deals 1502% ATK + 952 magic damage to the enemy with the highest Magical ATK and inflicts Petrify for 2 seconds",
        "effect": "1502% + 952 | Buff: Petrify (2s)"
      },
      {
        "rank": 5,
        "name": "Seductive Bounce♪",
        "icon": "skill001/skill0006_5",
        "description": "Deals 1605% ATK + 1032 magic damage to the enemy with the highest Magical ATK and inflicts Petrify for 2 seconds",
        "effect": "1605% + 1032 | Buff: Petrify (2s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Magic DEF UP",
        "icon": "skill001/skill1002",
        "effect": "Magic Defense+ (+70)"
      },
      {
        "slot": 2,
        "name": "Self Magic ATK UP",
        "icon": "skill001/skill1001",
        "effect": "Magic Attack + (+130)"
      }
    ],
    "name": "Aristera",
    "id": 2010,
    "rarity": "R",
    "element": "Mind",
    "role": "Attacker",
    "tags": [
      "Disrupt"
    ],
    "baseStats": {
      "HP": 1452,
      "ATK": 126,
      "MATK": 210,
      "DEF": 79,
      "MDEF": 199
    },
    "skillRotation": {
      "opening": "Skill3 → Basic → Basic → Basic → Skill2 → Basic",
      "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2 → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "100% ATK",
      "speedLabel": "Fast",
      "speedValue": "0.61"
    },
    "slug": "r-aristera"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Princess Pirate’s Strike",
        "icon": "skill001/skill0007",
        "description": "Deals 265% ATK + 80 physical damage to the nearest enemy and inflicts Physical Defense - Lv3 (-18% / -30) for 8 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.08s",
        "damageScaling": "265% ATK",
        "baseDamage": "+80",
        "levelGrowth": "+16",
        "lvl1": "265% + 80",
        "lvl90": "265% + 1504",
        "effect": "Physical Defense - Lv3 (+-18 / +-30) for 8s"
      },
      {
        "slot": 3,
        "name": "Women are full of love and mystery, you know",
        "icon": "skill001/skill0019",
        "description": "Applies Block+ Lv1 (+5) to all allies for 10 seconds and Physical Defense + Lv1 (+10% / +50) for 10 seconds",
        "target": "All Allies",
        "castTime": "1.08s",
        "effect": "Block+ Lv1 (+5) for 10s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Let me punish you",
        "icon": "skill001/skill0012_1",
        "description": "Deals 310% ATK + 266 physical damage to the nearest enemy and inflicts Stun for 3 seconds",
        "effect": "310% + 266 | Buff: Stun (3s)"
      },
      {
        "rank": 2,
        "name": "Let me punish you",
        "icon": "skill001/skill0012_2",
        "description": "Deals 370% ATK + 307 physical damage to the nearest enemy and inflicts Stun for 3 seconds",
        "effect": "370% + 307 | Buff: Stun (3s)"
      },
      {
        "rank": 3,
        "name": "Let me punish you",
        "icon": "skill001/skill0012_3",
        "description": "Deals 416% ATK + 346 physical damage to the nearest enemy and inflicts Stun for 3 seconds",
        "effect": "416% + 346 | Buff: Stun (3s)"
      },
      {
        "rank": 4,
        "name": "Let me punish you",
        "icon": "skill001/skill0012_4",
        "description": "Deals 447% ATK + 379 physical damage to the nearest enemy and inflicts Stun for 3 seconds",
        "effect": "447% + 379 | Buff: Stun (3s)"
      },
      {
        "rank": 5,
        "name": "Let me punish you",
        "icon": "skill001/skill0012_5",
        "description": "Deals 478% ATK + 402 physical damage to the nearest enemy and inflicts Stun for 3 seconds",
        "effect": "478% + 402 | Buff: Stun (3s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Physical DEF UP",
        "icon": "skill001/skill1002",
        "effect": "Physical Defense + (+70)"
      },
      {
        "slot": 2,
        "name": "Self Physical CRIT UP",
        "icon": "skill001/skill1001",
        "effect": "Physical Critical Damage+ (+59)"
      }
    ],
    "name": "Rosalyn",
    "id": 2011,
    "rarity": "R",
    "element": "Water",
    "role": "Attacker",
    "tags": [
      "Buff",
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 1452,
      "ATK": 210,
      "MATK": 126,
      "DEF": 199,
      "MDEF": 79
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic → Basic → Basic → Basic",
      "loop": "Basic → Skill3 → Basic → Basic → Basic → Skill2 → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "100% ATK",
      "speedLabel": "Fast",
      "speedValue": "0.61"
    },
    "slug": "r-rosalyn"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Torlild Schuthein",
        "icon": "skill001/skill0007",
        "description": "Deals 180% ATK + 90 physical damage to the nearest enemy and inflicts Physical Attack (+108%) - Lv2 (-7% / -15) for 8 seconds and Magic Attack - Lv2 (-7% / -15) for 8 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.78s",
        "damageScaling": "180% ATK",
        "baseDamage": "+90",
        "levelGrowth": "+12",
        "lvl1": "180% + 90",
        "lvl90": "180% + 1158",
        "effect": "Physical Attack (+108%) - Lv2 (+-7 / +-15) for 8s"
      },
      {
        "slot": 3,
        "name": "Will of the Queen of Nordrant",
        "icon": "skill001/skill0019",
        "description": "Applies Taunt to self for 10 seconds and Physical Defense + Lv3 (+20% / +140) for 10 seconds",
        "target": "Self",
        "castTime": "1.78s",
        "effect": "Taunt for 10s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Supreme Orb that Resonates Across the World",
        "icon": "skill001/skill0003_1",
        "description": "Deals 700% ATK + 527 physical damage to the nearest enemy and applies HP Regeneration+ (+2%) Ultimate Lv1 (+10%) to self for 3 seconds",
        "effect": "700% + 527 | Buff: HP Regeneration+ (+2%) Ultimate Lv1 (+10) (3s)"
      },
      {
        "rank": 2,
        "name": "Supreme Orb that Resonates Across the World",
        "icon": "skill001/skill0003_2",
        "description": "Deals 840% ATK + 709 physical damage to the nearest enemy and applies HP Regeneration+ (+2%) Ultimate Lv2 (+13%) to self for 3 seconds",
        "effect": "840% + 709 | Buff: HP Regeneration+ (+2%) Ultimate Lv2 (+13) (3s)"
      },
      {
        "rank": 3,
        "name": "Supreme Orb that Resonates Across the World",
        "icon": "skill001/skill0003_3",
        "description": "Deals 955% ATK + 787 physical damage to the nearest enemy and applies HP Regeneration+ (+2%) Ultimate Lv3 (+16%) to self for 3 seconds",
        "effect": "955% + 787 | Buff: HP Regeneration+ (+2%) Ultimate Lv3 (+16) (3s)"
      },
      {
        "rank": 4,
        "name": "Supreme Orb that Resonates Across the World",
        "icon": "skill001/skill0003_4",
        "description": "Deals 1025% ATK + 863 physical damage to the nearest enemy and applies HP Regeneration+ (+2%) Ultimate Lv4 (+18%) to self for 3 seconds",
        "effect": "1025% + 863 | Buff: HP Regeneration+ (+2%) Ultimate Lv4 (+18) (3s)"
      },
      {
        "rank": 5,
        "name": "Supreme Orb that Resonates Across the World",
        "icon": "skill001/skill0003_5",
        "description": "Deals 1100% ATK + 939 physical damage to the nearest enemy and applies HP Regeneration+ (+2%) Ultimate Lv5 (+20%) to self for 3 seconds",
        "effect": "1100% + 939 | Buff: HP Regeneration+ (+2%) Ultimate Lv5 (+20) (3s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Physical DEF UP",
        "icon": "skill001/skill1002",
        "effect": "Physical Defense + (+70)"
      },
      {
        "slot": 2,
        "name": "Self Max HP UP",
        "icon": "skill001/skill1003",
        "effect": "Max HP + (+1447)"
      }
    ],
    "name": "Estria",
    "id": 2012,
    "rarity": "R",
    "element": "Mind",
    "role": "Tank",
    "tags": [
      "Debuff",
      "Taunt"
    ],
    "baseStats": {
      "HP": 2159,
      "ATK": 258,
      "MATK": 155,
      "DEF": 317,
      "MDEF": 126
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic → Basic → Basic",
      "loop": "Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "100% ATK",
      "speedLabel": "Very Slow",
      "speedValue": "1.36"
    },
    "slug": "r-estria"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Curient Kon Lemolinos",
        "icon": "skill001/skill0008",
        "description": "Deals 220% ATK + 100 magic damage to the enemy with the highest Magical ATK and inflicts Magic Attack - Lv3 (-9% / -20) for 8 seconds",
        "target": "Enemy with Highest Magic ATK",
        "castTime": "1.78s",
        "damageScaling": "220% ATK",
        "baseDamage": "+100",
        "levelGrowth": "+16",
        "lvl1": "220% + 100",
        "lvl90": "220% + 1524",
        "effect": "Magic Attack - Lv3 (+-9 / +-20) for 8s"
      },
      {
        "slot": 3,
        "name": "Abresa El Agua",
        "icon": "skill001/skill0021",
        "description": "Restores own HP by 2203% ATK + 1010 and inflicts Block+ Lv3 (+9) for 8 seconds",
        "target": "Self",
        "castTime": "1.78s",
        "damageScaling": "2203% ATK",
        "baseDamage": "+1010",
        "levelGrowth": "+50",
        "lvl1": "2203% + 1010",
        "lvl90": "2203% + 5460",
        "effect": "Block+ Lv3 (+9) for 8s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Sea’s Love that Leads to Calamity",
        "icon": "skill001/skill0006_1",
        "description": "Deals 240% ATK + 329 magic damage to the 3 nearest enemies and inflicts Action Speed - (-50% / -50) Ultimate Lv1 (-8% / -8) for 8 seconds",
        "effect": "240% + 329 | Buff: Action Speed - (-50% / -50) Ultimate Lv1 (+-8 / +-8) (8s)"
      },
      {
        "rank": 2,
        "name": "Sea’s Love that Leads to Calamity",
        "icon": "skill001/skill0006_2",
        "description": "Deals 300% ATK + 381 magic damage to the 3 nearest enemies and inflicts Action Speed - (-50% / -50) Ultimate Lv2 (-10% / -10) for 8 seconds",
        "effect": "300% + 381 | Buff: Action Speed - (-50% / -50) Ultimate Lv2 (+-10 / +-10) (8s)"
      },
      {
        "rank": 3,
        "name": "Sea’s Love that Leads to Calamity",
        "icon": "skill001/skill0006_3",
        "description": "Deals 350% ATK + 428 magic damage to the 3 nearest enemies and inflicts Action Speed - (-50% / -50) Ultimate Lv3 (-12% / -12) for 8 seconds",
        "effect": "350% + 428 | Buff: Action Speed - (-50% / -50) Ultimate Lv3 (+-12 / +-12) (8s)"
      },
      {
        "rank": 4,
        "name": "Sea’s Love that Leads to Calamity",
        "icon": "skill001/skill0006_4",
        "description": "Deals 385% ATK + 465 magic damage to the 3 nearest enemies and inflicts Action Speed - (-50% / -50) Ultimate Lv4 (-14% / -14) for 8 seconds",
        "effect": "385% + 465 | Buff: Action Speed - (-50% / -50) Ultimate Lv4 (+-14 / +-14) (8s)"
      },
      {
        "rank": 5,
        "name": "Sea’s Love that Leads to Calamity",
        "icon": "skill001/skill0006_5",
        "description": "Deals 470% ATK + 501 magic damage to the 3 nearest enemies and inflicts Action Speed - (-50% / -50) Ultimate Lv5 (-15% / -15) for 8 seconds",
        "effect": "470% + 501 | Buff: Action Speed - (-50% / -50) Ultimate Lv5 (+-15 / +-15) (8s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Magic ATK UP",
        "icon": "skill001/skill1001",
        "effect": "Magic Attack + (+130)"
      },
      {
        "slot": 2,
        "name": "Self Healing Power UP",
        "icon": "skill001/skill1004",
        "effect": "Healing Received + (+20)"
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
    "slug": "r-celebria"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Punishment for the servants of the demon",
        "icon": "skill001/skill0008",
        "description": "Deals 210% ATK + 110 magic damage to the enemy with the highest Physical ATK and inflicts Physical Attack (+108%) - Lv4 (-11% / -25) for 10 seconds",
        "target": "Enemy with Highest Physical ATK",
        "castTime": "1.58s",
        "damageScaling": "210% ATK",
        "baseDamage": "+110",
        "levelGrowth": "+20",
        "lvl1": "210% + 110",
        "lvl90": "210% + 1890",
        "effect": "Physical Attack (+108%) - Lv4 (+-11 / +-25) for 10s"
      },
      {
        "slot": 3,
        "name": "Blessing to the brave",
        "icon": "skill001/skill0021",
        "description": "Restores HP by 3000% ATK + 852 to the ally with the lowest HP3000% ATK + 852 and inflicts HP Regeneration+ Lv3 (+5% / +150) for 3 seconds",
        "target": "Ally with Lowest HP",
        "castTime": "1.58s",
        "damageScaling": "3000% ATK",
        "baseDamage": "+852",
        "levelGrowth": "+60",
        "lvl1": "3000% + 852",
        "lvl90": "3000% + 6192",
        "effect": "HP Regeneration+ Lv3 (+5 / +150) for 3s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "A helping hand to the devout",
        "icon": "skill001/skill0022_1",
        "description": "Restores HP by 2600% ATK + 788 to all allies and inflicts Debuff Resistance Lv2 (+0.3%) for 6 seconds",
        "effect": "2600% + 788 | Buff: Debuff Resistance Lv2 (30%) (6s)"
      },
      {
        "rank": 2,
        "name": "A helping hand to the devout",
        "icon": "skill001/skill0022_2",
        "description": "Restores HP by 3000% ATK + 842 to all allies and inflicts Debuff Resistance Lv2 (+0.3%) for 6 seconds",
        "effect": "3000% + 842 | Buff: Debuff Resistance Lv2 (30%) (6s)"
      },
      {
        "rank": 3,
        "name": "A helping hand to the devout",
        "icon": "skill001/skill0022_3",
        "description": "Restores HP by 3250% ATK + 910 to all allies and inflicts Debuff Resistance Lv2 (+0.3%) for 6 seconds",
        "effect": "3250% + 910 | Buff: Debuff Resistance Lv2 (30%) (6s)"
      },
      {
        "rank": 4,
        "name": "A helping hand to the devout",
        "icon": "skill001/skill0022_4",
        "description": "Restores HP by 3500% ATK + 962 to all allies and inflicts Debuff Resistance Lv2 (+0.3%) for 6 seconds",
        "effect": "3500% + 962 | Buff: Debuff Resistance Lv2 (30%) (6s)"
      },
      {
        "rank": 5,
        "name": "A helping hand to the devout",
        "icon": "skill001/skill0022_5",
        "description": "Restores HP by 3640% ATK + 1008 to all allies and inflicts Debuff Resistance Lv2 (+0.3%) for 6 seconds",
        "effect": "3640% + 1008 | Buff: Debuff Resistance Lv2 (30%) (6s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Healing Power UP",
        "icon": "skill001/skill1004",
        "effect": "Healing Amount + (+15)"
      },
      {
        "slot": 2,
        "name": "Front Row AlliesPhysical DEF UP, Magic DEF UP",
        "icon": "skill001/skill1006",
        "effect": "Physical Defense + (+70)",
        "effect2": "Magic Defense+ (+70)"
      }
    ],
    "name": "Irina",
    "id": 2014,
    "rarity": "SR",
    "element": "Holy",
    "role": "Support",
    "tags": [
      "Debuff",
      "Heal",
      "Cleanse"
    ],
    "baseStats": {
      "HP": 2001,
      "ATK": 156,
      "MATK": 259,
      "DEF": 83,
      "MDEF": 208
    },
    "skillRotation": {
      "opening": "Skill2 → Basic → Basic → Skill3",
      "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "110% ATK",
      "speedLabel": "Slow",
      "speedValue": "1.11"
    },
    "slug": "sr-irina"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Double Strike",
        "icon": "skill001/skill0002",
        "description": "Deals 180% ATK + 150 physical damage to the nearest enemy, guaranteed to hit and guaranteed to crit",
        "target": "Nearest Enemy",
        "castTime": "1.08s",
        "damageScaling": "180% ATK",
        "baseDamage": "+150",
        "levelGrowth": "+11",
        "lvl1": "180% + 150",
        "lvl90": "180% + 1129"
      },
      {
        "slot": 3,
        "name": "Instinct",
        "icon": "skill001/skill0019",
        "description": "Applies Physical Attack (+108%) + Lv3 (+15% / +30) to self for 12 seconds and Block+ Lv3 (+9) for 12 seconds",
        "target": "Self",
        "castTime": "1.08s",
        "effect": "Physical Attack (+108%) + Lv3 (+15 / +30) for 12s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Sword Slash",
        "icon": "skill001/skill0003_1",
        "description": "Deals 700% ATK + 400 physical damage to the nearest enemy, guaranteed to hit and guaranteed to crit",
        "effect": "700% + 400"
      },
      {
        "rank": 2,
        "name": "Sword Slash",
        "icon": "skill001/skill0003_2",
        "description": "Deals 840% ATK + 500 physical damage to the nearest enemy, guaranteed to hit and guaranteed to crit",
        "effect": "840% + 500"
      },
      {
        "rank": 3,
        "name": "Sword Slash",
        "icon": "skill001/skill0003_3",
        "description": "Deals 950% ATK + 550 physical damage to the nearest enemy, guaranteed to hit and guaranteed to crit",
        "effect": "950% + 550"
      },
      {
        "rank": 4,
        "name": "Sword Slash",
        "icon": "skill001/skill0003_4",
        "description": "Deals 1030% ATK + 580 physical damage to the nearest enemy, guaranteed to hit and guaranteed to crit",
        "effect": "1030% + 580"
      },
      {
        "rank": 5,
        "name": "Sword Slash",
        "icon": "skill001/skill0003_5",
        "description": "Deals 1100% ATK + 600 physical damage to the nearest enemy, guaranteed to hit and guaranteed to crit",
        "effect": "1100% + 600"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Physical ATK UP",
        "icon": "skill001/skill1001",
        "effect": "Physical Attack (+108%) + (+130)"
      },
      {
        "slot": 2,
        "name": "Self Max HP UP",
        "icon": "skill001/skill1003",
        "effect": "Max HP + (+1447)"
      }
    ],
    "name": "Xevia",
    "id": 2015,
    "rarity": "R",
    "element": "Wind",
    "role": "Tank",
    "tags": [
      "Sure-hit",
      "Guaranteed Crit"
    ],
    "baseStats": {
      "HP": 2313,
      "ATK": 181,
      "MATK": 108,
      "DEF": 117,
      "MDEF": 46
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic → Basic → Basic → Skill2",
      "loop": "Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic → Skill2 → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "100% ATK",
      "speedLabel": "Fast",
      "speedValue": "0.61"
    },
    "slug": "r-xevia"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Scattering Claws",
        "icon": "skill001/skill0002",
        "description": "Deals 270% ATK + 80 physical damage to the nearest enemy",
        "target": "Nearest Enemy",
        "castTime": "1.08s",
        "damageScaling": "270% ATK",
        "baseDamage": "+80",
        "levelGrowth": "+20",
        "lvl1": "270% + 80",
        "lvl90": "270% + 1860"
      },
      {
        "slot": 3,
        "name": "Temptation",
        "icon": "skill001/skill0007",
        "description": "Deals 125% ATK + 60 physical damage to the 2 nearest enemies and inflicts Physical Attack (+108%) - Lv2 (-7% / -15) for 10 seconds and Magic Attack - Lv2 (-7% / -15) for 10 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.08s",
        "damageScaling": "125% ATK",
        "baseDamage": "+60",
        "levelGrowth": "+6",
        "lvl1": "125% + 60",
        "lvl90": "125% + 594",
        "effect": "Physical Attack (+108%) - Lv2 (+-7 / +-15) for 10s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Temptation Leading to Glory and Pleasure",
        "icon": "skill001/skill0003_1",
        "description": "Deals 1030% ATK + 692 physical damage to the nearest enemy and absorbs 6% of the damage dealt to restore own HP",
        "effect": "1030% + 692 + 6% lifesteal"
      },
      {
        "rank": 2,
        "name": "Temptation Leading to Glory and Pleasure",
        "icon": "skill001/skill0003_2",
        "description": "Deals 1236% ATK + 785 physical damage to the nearest enemy and absorbs 6% of the damage dealt to restore own HP",
        "effect": "1236% + 785 + 6% lifesteal"
      },
      {
        "rank": 3,
        "name": "Temptation Leading to Glory and Pleasure",
        "icon": "skill001/skill0003_3",
        "description": "Deals 1390% ATK + 864 physical damage to the nearest enemy and absorbs 6% of the damage dealt to restore own HP",
        "effect": "1390% + 864 + 6% lifesteal"
      },
      {
        "rank": 4,
        "name": "Temptation Leading to Glory and Pleasure",
        "icon": "skill001/skill0003_4",
        "description": "Deals 1490% ATK + 923 physical damage to the nearest enemy and absorbs 6% of the damage dealt to restore own HP",
        "effect": "1490% + 923 + 6% lifesteal"
      },
      {
        "rank": 5,
        "name": "Temptation Leading to Glory and Pleasure",
        "icon": "skill001/skill0003_5",
        "description": "Deals 1600% ATK + 1005 physical damage to the nearest enemy and absorbs 6% of the damage dealt to restore own HP",
        "effect": "1600% + 1005 + 6% lifesteal"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Charm Resist",
        "icon": "skill001/skill1003",
        "effect": "Charm Resistance LvMax (+1)"
      },
      {
        "slot": 2,
        "name": "Self Physical CRIT UP",
        "icon": "skill001/skill1001",
        "effect": "Physical Critical Damage+ (+59)"
      }
    ],
    "name": "Shahar",
    "id": 2016,
    "rarity": "R",
    "element": "Dark",
    "role": "Attacker",
    "tags": [
      "Debuff"
    ],
    "baseStats": {
      "HP": 1491,
      "ATK": 210,
      "MATK": 126,
      "DEF": 117,
      "MDEF": 46
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic",
      "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2 → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "100% ATK",
      "speedLabel": "Fast",
      "speedValue": "0.61"
    },
    "slug": "r-shahar"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Thrust",
        "icon": "skill001/skill0002",
        "description": "Deals 260% ATK + 100 physical damage to the enemy with the highest Physical ATK",
        "target": "Enemy with Lowest HP",
        "castTime": "1.08s",
        "damageScaling": "260% ATK",
        "baseDamage": "+100",
        "levelGrowth": "+20",
        "lvl1": "260% + 100",
        "lvl90": "260% + 1880"
      },
      {
        "slot": 3,
        "name": "Lionheart",
        "icon": "skill001/skill0019",
        "description": "Applies Accuracy + Lv1 (+5) to all allies for 10 seconds and Physical Attack (+108%) + Lv1 (+10% / +20) for 10 seconds",
        "target": "All Allies",
        "castTime": "1.08s",
        "effect": "Accuracy + Lv1 (+5) for 10s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Proud Maiden’s Strike",
        "icon": "skill001/skill0003_1",
        "description": "Deals 950% ATK + 811 physical damage to the enemy with the lowest HP and inflicts Blind (-50% / -100) for 7 seconds",
        "effect": "950% + 811 | Buff: Blind (+-50 / +-100) (7s)"
      },
      {
        "rank": 2,
        "name": "Proud Maiden’s Strike",
        "icon": "skill001/skill0003_2",
        "description": "Deals 1140% ATK + 1092 physical damage to the enemy with the lowest HP and inflicts Blind (-50% / -100) for 7 seconds",
        "effect": "1140% + 1092 | Buff: Blind (+-50 / +-100) (7s)"
      },
      {
        "rank": 3,
        "name": "Proud Maiden’s Strike",
        "icon": "skill001/skill0003_3",
        "description": "Deals 1280% ATK + 1212 physical damage to the enemy with the lowest HP and inflicts Blind (-50% / -100) for 7 seconds",
        "effect": "1280% + 1212 | Buff: Blind (+-50 / +-100) (7s)"
      },
      {
        "rank": 4,
        "name": "Proud Maiden’s Strike",
        "icon": "skill001/skill0003_4",
        "description": "Deals 1380% ATK + 1252 physical damage to the enemy with the lowest HP and inflicts Blind (-50% / -100) for 7 seconds",
        "effect": "1380% + 1252 | Buff: Blind (+-50 / +-100) (7s)"
      },
      {
        "rank": 5,
        "name": "Proud Maiden’s Strike",
        "icon": "skill001/skill0003_5",
        "description": "Deals 1470% ATK + 1292 physical damage to the enemy with the lowest HP and inflicts Blind (-50% / -100) for 7 seconds",
        "effect": "1470% + 1292 | Buff: Blind (+-50 / +-100) (7s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Block UP",
        "icon": "skill001/skill1002",
        "effect": "Block+ (+10)"
      },
      {
        "slot": 2,
        "name": "Self Physical CRIT UP",
        "icon": "skill001/skill1001",
        "effect": "Physical Critical Damage+ (+59)"
      }
    ],
    "name": "Elythia",
    "id": 2017,
    "rarity": "R",
    "element": "Wind",
    "role": "Attacker",
    "tags": [
      "Buff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 1491,
      "ATK": 210,
      "MATK": 126,
      "DEF": 117,
      "MDEF": 46
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic",
      "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "100% ATK",
      "speedLabel": "Fast",
      "speedValue": "0.61"
    },
    "slug": "r-elythia"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Lightning",
        "icon": "skill001/skill0011",
        "description": "Deals 240% ATK + 110 magic damage to the enemy with the highest MP and inflicts Burn Lv3 (-80) for 10 seconds",
        "target": "Enemy with Highest MP",
        "castTime": "1.38s",
        "damageScaling": "240% ATK",
        "baseDamage": "+110",
        "levelGrowth": "+20",
        "lvl1": "240% + 110",
        "lvl90": "240% + 1890",
        "effect": "Burn Lv3 (+-80) for 10s"
      },
      {
        "slot": 3,
        "name": "Flame Lightning",
        "icon": "skill001/skill0019",
        "description": "Applies Physical Defense + Lv1 (+10% / +50) to all allies for 10 seconds and Magic Defense+ Lv1 (+10% / +50) for 10 seconds",
        "target": "All Allies",
        "castTime": "1.38s",
        "effect": "Physical Defense + Lv1 (+10 / +50) for 10s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Behold the Radiance of Nobility",
        "icon": "skill001/skill0006_1",
        "description": "Deals 450% ATK + 300 magic damage to all enemies and inflicts Burn (-1500) Ultimate Lv1 (-800) for 12 seconds",
        "effect": "450% + 300 | Buff: Burn (-1500) Ultimate Lv1 (+-800) (12s)"
      },
      {
        "rank": 2,
        "name": "Behold the Radiance of Nobility",
        "icon": "skill001/skill0006_2",
        "description": "Deals 630% ATK + 401 magic damage to all enemies and inflicts Burn (-1500) Ultimate Lv2 (-1000) for 12 seconds",
        "effect": "630% + 401 | Buff: Burn (-1500) Ultimate Lv2 (+-1000) (12s)"
      },
      {
        "rank": 3,
        "name": "Behold the Radiance of Nobility",
        "icon": "skill001/skill0006_3",
        "description": "Deals 765% ATK + 485 magic damage to all enemies and inflicts Burn (-1500) Ultimate Lv3 (-1200) for 12 seconds",
        "effect": "765% + 485 | Buff: Burn (-1500) Ultimate Lv3 (+-1200) (12s)"
      },
      {
        "rank": 4,
        "name": "Behold the Radiance of Nobility",
        "icon": "skill001/skill0006_4",
        "description": "Deals 855% ATK + 576 magic damage to all enemies and inflicts Burn (-1500) Ultimate Lv4 (-1400) for 12 seconds",
        "effect": "855% + 576 | Buff: Burn (-1500) Ultimate Lv4 (+-1400) (12s)"
      },
      {
        "rank": 5,
        "name": "Behold the Radiance of Nobility",
        "icon": "skill001/skill0006_5",
        "description": "Deals 900% ATK + 655 magic damage to all enemies and inflicts Burn (-1500) Ultimate Lv5 (-1500) for 12 seconds",
        "effect": "900% + 655 | Buff: Burn (-1500) Ultimate Lv5 (+-1500) (12s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Max HP UP",
        "icon": "skill001/skill1003",
        "effect": "Max HP + (+1447)"
      },
      {
        "slot": 2,
        "name": "Self Magic CRIT UP",
        "icon": "skill001/skill1001",
        "effect": "Magic Critical Damage+ (+59)"
      }
    ],
    "name": "Nadine",
    "id": 2018,
    "rarity": "R",
    "element": "Fire",
    "role": "Attacker",
    "tags": [
      "Buff"
    ],
    "baseStats": {
      "HP": 1964,
      "ATK": 167,
      "MATK": 279,
      "DEF": 22,
      "MDEF": 56
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic",
      "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Skill2"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "100% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "r-nadine"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Gentle Slap",
        "icon": "skill001/skill0002",
        "description": "Deals 240% ATK + 120 physical damage to the nearest enemy",
        "target": "Nearest Enemy",
        "castTime": "1.38s",
        "damageScaling": "240% ATK",
        "baseDamage": "+120",
        "levelGrowth": "+20",
        "lvl1": "240% + 120",
        "lvl90": "240% + 1900"
      },
      {
        "slot": 3,
        "name": "It is my honor to be of assistance to you",
        "icon": "skill001/skill0019",
        "description": "Applies Physical Critical Damage+ Lv2 (+30) to the 3 nearest allies for 12 seconds and Physical Defense + Lv2 (+15% / +100) for 12 seconds",
        "target": "Nearest Ally",
        "castTime": "1.38s",
        "effect": "Physical Critical Damage+ Lv2 (+30) for 12s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Angering a merfolk is a frightening thing, you know!",
        "icon": "skill001/skill0012_1",
        "description": "Deals 320% ATK + 286 physical damage to the 3 nearest enemies and inflicts Stun for 2.5 seconds",
        "effect": "320% + 286 | Buff: Stun (2.5s)"
      },
      {
        "rank": 2,
        "name": "Angering a merfolk is a frightening thing, you know!",
        "icon": "skill001/skill0012_2",
        "description": "Deals 380% ATK + 327 physical damage to the 3 nearest enemies and inflicts Stun for 2.5 seconds",
        "effect": "380% + 327 | Buff: Stun (2.5s)"
      },
      {
        "rank": 3,
        "name": "Angering a merfolk is a frightening thing, you know!",
        "icon": "skill001/skill0012_3",
        "description": "Deals 426% ATK + 366 physical damage to the 3 nearest enemies and inflicts Stun for 2.5 seconds",
        "effect": "426% + 366 | Buff: Stun (2.5s)"
      },
      {
        "rank": 4,
        "name": "Angering a merfolk is a frightening thing, you know!",
        "icon": "skill001/skill0012_4",
        "description": "Deals 458% ATK + 399 physical damage to the 3 nearest enemies and inflicts Stun for 2.5 seconds",
        "effect": "458% + 399 | Buff: Stun (2.5s)"
      },
      {
        "rank": 5,
        "name": "Angering a merfolk is a frightening thing, you know!",
        "icon": "skill001/skill0012_5",
        "description": "Deals 488% ATK + 422 physical damage to the 3 nearest enemies and inflicts Stun for 2.5 seconds",
        "effect": "488% + 422 | Buff: Stun (2.5s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Physical DEF UP",
        "icon": "skill001/skill1002",
        "effect": "Physical Defense + (+70)"
      },
      {
        "slot": 2,
        "name": "Self Physical CRIT UP",
        "icon": "skill001/skill1001",
        "effect": "Physical Critical Damage+ (+59)"
      }
    ],
    "name": "Lorelia",
    "id": 2019,
    "rarity": "R",
    "element": "Water",
    "role": "Attacker",
    "tags": [
      "Buff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 1491,
      "ATK": 279,
      "MATK": 167,
      "DEF": 117,
      "MDEF": 46
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic",
      "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "100% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "r-lorelia"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "This is an order from your superior",
        "icon": "skill001/skill0021",
        "description": "Restores HP by 3300% ATK + 834 to the ally with the lowest HP and inflicts Block+ Lv3 (+9) for 8 seconds",
        "target": "Ally with Lowest HP",
        "castTime": "1.58s",
        "damageScaling": "3300% ATK",
        "baseDamage": "+834",
        "levelGrowth": "+60",
        "lvl1": "3300% + 834",
        "lvl90": "3300% + 6174",
        "effect": "Block+ Lv3 (+9) for 8s"
      },
      {
        "slot": 3,
        "name": "Lacking self-awareness",
        "icon": "skill001/skill0019",
        "description": "Applies Physical Defense + Lv3 (+20% / +140) to the ally with the lowest HP for 8 seconds and Magic Defense+ Lv3 (+20% / +140) for 8 seconds",
        "target": "Ally with Lowest HP",
        "castTime": "1.58s",
        "effect": "Physical Defense + Lv3 (+20 / +140) for 8s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "It’s break time now",
        "icon": "skill001/skill0022_1",
        "description": "Restores HP by 2300% ATK + 698 to all allies and inflicts Debuff Resistance Lv2 (+0.3%) for 6 seconds",
        "effect": "2300% + 698 | Buff: Debuff Resistance Lv2 (30%) (6s)"
      },
      {
        "rank": 2,
        "name": "It’s break time now",
        "icon": "skill001/skill0022_2",
        "description": "Restores HP by 2645% ATK + 752 to all allies and inflicts Debuff Resistance Lv2 (+0.3%) for 6 seconds",
        "effect": "2645% + 752 | Buff: Debuff Resistance Lv2 (30%) (6s)"
      },
      {
        "rank": 3,
        "name": "It’s break time now",
        "icon": "skill001/skill0022_3",
        "description": "Restores HP by 2875% ATK + 810 to all allies and inflicts Debuff Resistance Lv2 (+0.3%) for 6 seconds",
        "effect": "2875% + 810 | Buff: Debuff Resistance Lv2 (30%) (6s)"
      },
      {
        "rank": 4,
        "name": "It’s break time now",
        "icon": "skill001/skill0022_4",
        "description": "Restores HP by 3105% ATK + 862 to all allies and inflicts Debuff Resistance Lv2 (+0.3%) for 6 seconds",
        "effect": "3105% + 862 | Buff: Debuff Resistance Lv2 (30%) (6s)"
      },
      {
        "rank": 5,
        "name": "It’s break time now",
        "icon": "skill001/skill0022_5",
        "description": "Restores HP by 3220% ATK + 908 to all allies and inflicts Debuff Resistance Lv2 (+0.3%) for 6 seconds",
        "effect": "3220% + 908 | Buff: Debuff Resistance Lv2 (30%) (6s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Healing Power UP",
        "icon": "skill001/skill1004",
        "effect": "Healing Amount + (+15)"
      },
      {
        "slot": 2,
        "name": "Front Row AlliesPhysical DEF UP, Magic DEF UP",
        "icon": "skill001/skill1006",
        "effect": "Physical Defense + (+70)",
        "effect2": "Magic Defense+ (+70)"
      }
    ],
    "name": "Sobrina",
    "id": 2020,
    "rarity": "SR",
    "element": "Mind",
    "role": "Support",
    "tags": [
      "Heal",
      "Buff",
      "Cleanse"
    ],
    "baseStats": {
      "HP": 2707,
      "ATK": 167,
      "MATK": 279,
      "DEF": 25,
      "MDEF": 65
    },
    "skillRotation": {
      "opening": "Skill3 → Basic → Skill2",
      "loop": "Basic → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "110% ATK",
      "speedLabel": "Slow",
      "speedValue": "1.11"
    },
    "slug": "sr-sobrina"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Rhythm and Beat",
        "icon": "skill001/skill0007",
        "description": "Deals 280% ATK + 110 physical damage to the enemy with the lowest HP and inflicts Action Speed - Lv3 (-14% / -14) for 5 seconds",
        "target": "Enemy with Lowest HP",
        "castTime": "1.08s",
        "damageScaling": "280% ATK",
        "baseDamage": "+110",
        "levelGrowth": "+20",
        "lvl1": "280% + 110",
        "lvl90": "280% + 1890",
        "effect": "Action Speed - Lv3 (+-14 / +-14) for 5s"
      },
      {
        "slot": 3,
        "name": "Dance of Resistance",
        "icon": "skill001/skill0021",
        "description": "Restores HP by 1350% ATK + 301 to all allies and inflicts Action Speed + Lv1 (+7% / +7) for 8 seconds",
        "target": "All Allies",
        "castTime": "1.08s",
        "damageScaling": "1350% ATK",
        "baseDamage": "+301",
        "levelGrowth": "+35",
        "lvl1": "1350% + 301",
        "lvl90": "1350% + 3416",
        "effect": "Action Speed + Lv1 (+7 / +7) for 8s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Wish Upon the Soaring Stars",
        "icon": "skill001/skill0012_1",
        "description": "Deals 450% ATK + 352 physical damage to all enemies and inflicts Burn (-1500) Ultimate Lv1 (-800) for 15 seconds",
        "effect": "450% + 352 | Buff: Burn (-1500) Ultimate Lv1 (+-1000) (15s)"
      },
      {
        "rank": 2,
        "name": "Wish Upon the Soaring Stars",
        "icon": "skill001/skill0012_2",
        "description": "Deals 540% ATK + 472 physical damage to all enemies and inflicts Burn (-1500) Ultimate Lv2 (-1000) for 15 seconds",
        "effect": "540% + 472 | Buff: Burn (-1500) Ultimate Lv2 (+-1300) (15s)"
      },
      {
        "rank": 3,
        "name": "Wish Upon the Soaring Stars",
        "icon": "skill001/skill0012_3",
        "description": "Deals 620% ATK + 554 physical damage to all enemies and inflicts Burn (-1500) Ultimate Lv3 (-1200) for 15 seconds",
        "effect": "620% + 554 | Buff: Burn (-1500) Ultimate Lv3 (+-1600) (15s)"
      },
      {
        "rank": 4,
        "name": "Wish Upon the Soaring Stars",
        "icon": "skill001/skill0012_4",
        "description": "Deals 700% ATK + 625 physical damage to all enemies and inflicts Burn (-1500) Ultimate Lv4 (-1400) for 15 seconds",
        "effect": "700% + 625 | Buff: Burn (-1500) Ultimate Lv4 (+-1800) (15s)"
      },
      {
        "rank": 5,
        "name": "Wish Upon the Soaring Stars",
        "icon": "skill001/skill0012_5",
        "description": "Deals 750% ATK + 714 physical damage to all enemies and inflicts Burn (-1500) Ultimate Lv5 (-1500) for 15 seconds",
        "effect": "750% + 714 | Buff: Burn (-1500) Ultimate Lv5 (+-2000) (15s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Block UP",
        "icon": "skill001/skill1002",
        "effect": "Block+ (+15)"
      },
      {
        "slot": 2,
        "name": "All AlliesBlock UP",
        "icon": "skill001/skill1006",
        "effect": "Block+ (+8)"
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
      "opening": "Skill2 → Basic → Skill3 → Basic → Basic",
      "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "110% ATK",
      "speedLabel": "Fast",
      "speedValue": "0.61"
    },
    "slug": "sr-messeria"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Poison (-50%) Mushroom!",
        "icon": "skill001/skill0011",
        "description": "Deals 267% ATK + 110 physical damage to the nearest enemy and inflicts Poison Lv5 (-200) for 10 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.38s",
        "damageScaling": "267% ATK",
        "baseDamage": "+110",
        "levelGrowth": "+20",
        "lvl1": "267% + 110",
        "lvl90": "267% + 1890",
        "effect": "Poison Lv5 (+-200) for 10s"
      },
      {
        "slot": 3,
        "name": "Lady Medusa’s Mushroom!",
        "icon": "skill001/skill0019",
        "description": "Applies Debuff Resistance Lv1 (+0.15%) to all allies for 8 seconds and Accuracy + Lv2 (+7) for 8 seconds",
        "target": "All Allies",
        "castTime": "1.38s",
        "effect": "Debuff Resistance Lv1 (15%) for 8s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Battle Mushroom!",
        "icon": "skill001/skill0022_1",
        "description": "Restores HP by 2450% ATK + 785 to all allies and inflicts Block+ (+10) Ultimate Lv1 (+10) for 11 seconds",
        "effect": "2450% + 785 | Buff: Block+ (+10) Ultimate Lv1 (+10) (11s)"
      },
      {
        "rank": 2,
        "name": "Battle Mushroom!",
        "icon": "skill001/skill0022_2",
        "description": "Restores HP by 2817% ATK + 822 to all allies and inflicts Block+ (+10) Ultimate Lv2 (+13) for 11 seconds",
        "effect": "2817% + 822 | Buff: Block+ (+10) Ultimate Lv2 (+13) (11s)"
      },
      {
        "rank": 3,
        "name": "Battle Mushroom!",
        "icon": "skill001/skill0022_3",
        "description": "Restores HP by 3062% ATK + 923 to all allies and inflicts Block+ (+10) Ultimate Lv3 (+16) for 11 seconds",
        "effect": "3062% + 923 | Buff: Block+ (+10) Ultimate Lv3 (+16) (11s)"
      },
      {
        "rank": 4,
        "name": "Battle Mushroom!",
        "icon": "skill001/skill0022_4",
        "description": "Restores HP by 3310% ATK + 1027 to all allies and inflicts Block+ (+10) Ultimate Lv4 (+18) for 11 seconds",
        "effect": "3310% + 1027 | Buff: Block+ (+10) Ultimate Lv4 (+18) (11s)"
      },
      {
        "rank": 5,
        "name": "Battle Mushroom!",
        "icon": "skill001/skill0022_5",
        "description": "Restores HP by 3429% ATK + 1091 to all allies and inflicts Block+ (+10) Ultimate Lv5 (+20) for 11 seconds",
        "effect": "3429% + 1091 | Buff: Block+ (+10) Ultimate Lv5 (+20) (11s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Block UP",
        "icon": "skill001/skill1002",
        "effect": "Block+ (+15)"
      },
      {
        "slot": 2,
        "name": "Self Poison (-50%) Resist, Self Magic DEF UP",
        "icon": "skill001/skill1002",
        "effect": "Poison (-50%) Resistance LvMax (+1)",
        "effect2": "Magic Defense+ (+70)"
      }
    ],
    "name": "Paia",
    "id": 2022,
    "rarity": "SR",
    "element": "Fire",
    "role": "Support",
    "tags": [
      "Heal",
      "Buff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 2707,
      "ATK": 279,
      "MATK": 167,
      "DEF": 65,
      "MDEF": 25
    },
    "skillRotation": {
      "opening": "Skill2 → Skill3",
      "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "110% ATK",
      "speedLabel": "Slow",
      "speedValue": "1.11"
    },
    "slug": "sr-paia"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Great Cleave",
        "icon": "skill001/skill0007",
        "description": "Deals 270% ATK + 120 physical damage to the nearest enemy and inflicts Physical Attack (+108%) - Lv3 (-9% / -20) for 8 seconds and Physical Defense - Lv3 (-18% / -30) for 8 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.38s",
        "damageScaling": "270% ATK",
        "baseDamage": "+120",
        "levelGrowth": "+15",
        "lvl1": "270% + 120",
        "lvl90": "270% + 1455",
        "effect": "Physical Attack (+108%) - Lv3 (+-9 / +-20) for 8s"
      },
      {
        "slot": 3,
        "name": "You can at least do something, right?",
        "icon": "skill001/skill0019",
        "description": "Applies HP Regeneration+ Lv1 (+3% / +50) to self for 10 seconds and Taunt for 10 seconds",
        "target": "Self",
        "castTime": "1.38s",
        "effect": "HP Regeneration+ Lv1 (+3 / +50) for 10s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Steelbreaker Twin Blades",
        "icon": "skill001/skill0003_1",
        "description": "Deals 1050% ATK + 1010 physical damage to the nearest enemy and applies Physical Critical Damage+ (+108%) Ultimate Lv1 (+300) to self for 12 seconds",
        "effect": "1050% + 1010 | Buff: Physical Critical Damage+ (+108%) Ultimate Lv1 (+300) (12s)"
      },
      {
        "rank": 2,
        "name": "Steelbreaker Twin Blades",
        "icon": "skill001/skill0003_2",
        "description": "Deals 1260% ATK + 1166 physical damage to the nearest enemy and applies Physical Critical Damage+ (+108%) Ultimate Lv2 (+400) to self for 12 seconds",
        "effect": "1260% + 1166 | Buff: Physical Critical Damage+ (+108%) Ultimate Lv2 (+400) (12s)"
      },
      {
        "rank": 3,
        "name": "Steelbreaker Twin Blades",
        "icon": "skill001/skill0003_3",
        "description": "Deals 1418% ATK + 1253 physical damage to the nearest enemy and applies Physical Critical Damage+ (+108%) Ultimate Lv3 (+450) to self for 12 seconds",
        "effect": "1418% + 1253 | Buff: Physical Critical Damage+ (+108%) Ultimate Lv3 (+450) (12s)"
      },
      {
        "rank": 4,
        "name": "Steelbreaker Twin Blades",
        "icon": "skill001/skill0003_4",
        "description": "Deals 1522% ATK + 1342 physical damage to the nearest enemy and applies Physical Critical Damage+ (+108%) Ultimate Lv4 (+500) to self for 12 seconds",
        "effect": "1522% + 1342 | Buff: Physical Critical Damage+ (+108%) Ultimate Lv4 (+500) (12s)"
      },
      {
        "rank": 5,
        "name": "Steelbreaker Twin Blades",
        "icon": "skill001/skill0003_5",
        "description": "Deals 1628% ATK + 1456 physical damage to the nearest enemy and applies Physical Critical Damage+ (+108%) Ultimate Lv5 (+550) to self for 12 seconds",
        "effect": "1628% + 1456 | Buff: Physical Critical Damage+ (+108%) Ultimate Lv5 (+550) (12s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Max HP UP",
        "icon": "skill001/skill1002",
        "effect": "Max HP + (+2896)"
      },
      {
        "slot": 2,
        "name": "Self Physical ATK UP, Physical CRIT UP",
        "icon": "skill001/skill1001",
        "effect": "Physical Attack (+108%) + (+259)",
        "effect2": "Physical Critical Damage+ (+90)"
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
      "opening": "Skill3 → Skill2 → Basic",
      "loop": "Basic → Basic → Basic → Skill2 → Basic → Skill3 → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "110% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "sr-azura"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Dark vortex!",
        "icon": "skill001/skill0008",
        "description": "Deals 114% ATK + 80 magic damage to the 2 nearest enemies and inflicts Physical Attack (+108%) - Lv3 (-9% / -20) for 10 seconds and Magic Attack - Lv3 (-9% / -20) for 10 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.78s",
        "damageScaling": "114% ATK",
        "baseDamage": "+80",
        "levelGrowth": "+7",
        "lvl1": "114% + 80",
        "lvl90": "114% + 703",
        "effect": "Physical Attack (+108%) - Lv3 (+-9 / +-20) for 10s"
      },
      {
        "slot": 3,
        "name": "Grant me an unbreakable soul!",
        "icon": "skill001/skill0019",
        "description": "Applies Debuff Resistance Lv4 (+0.7%) to self for 12 seconds and Block+ Lv3 (+9) for 12 seconds",
        "target": "Self",
        "castTime": "1.78s",
        "effect": "Debuff Resistance Lv4 (70%) for 12s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Fall into Tartarus!",
        "icon": "skill001/skill0012_1",
        "description": "Deals 700% ATK + 826 magic damage to the nearest enemy and inflicts Fear Lv1 (-20) for 3 seconds and Confusion for 6 seconds",
        "effect": "700% + 826 | Buff: Fear (-100) Ultimate Lv1 (+-20) (3s)"
      },
      {
        "rank": 2,
        "name": "Fall into Tartarus!",
        "icon": "skill001/skill0012_2",
        "description": "Deals 840% ATK + 952 magic damage to the nearest enemy and inflicts Fear Lv2 (-40) for 3 seconds and Confusion for 6 seconds",
        "effect": "840% + 952 | Buff: Fear (-100) Ultimate Lv2 (+-25) (3s)"
      },
      {
        "rank": 3,
        "name": "Fall into Tartarus!",
        "icon": "skill001/skill0012_3",
        "description": "Deals 944% ATK + 1045 magic damage to the nearest enemy and inflicts Fear Lv3 (-60) for 3 seconds and Confusion for 6 seconds",
        "effect": "944% + 1045 | Buff: Fear (-100) Ultimate Lv3 (+-30) (3s)"
      },
      {
        "rank": 4,
        "name": "Fall into Tartarus!",
        "icon": "skill001/skill0012_4",
        "description": "Deals 1015% ATK + 1121 magic damage to the nearest enemy and inflicts Fear Lv4 (-70) for 3 seconds and Confusion for 6 seconds",
        "effect": "1015% + 1121 | Buff: Fear (-100) Ultimate Lv4 (+-35) (3s)"
      },
      {
        "rank": 5,
        "name": "Fall into Tartarus!",
        "icon": "skill001/skill0012_5",
        "description": "Deals 1085% ATK + 1237 magic damage to the nearest enemy and inflicts Fear Lv5 (-80) for 3 seconds and Confusion for 6 seconds",
        "effect": "1085% + 1237 | Buff: Fear (-100) Ultimate Lv5 (+-40) (3s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Physical DEF UP, Magic DEF UP",
        "icon": "skill001/skill1002",
        "effect": "Physical Defense + (+70)",
        "effect2": "Magic Defense+ (+70)"
      },
      {
        "slot": 2,
        "name": "Self Magic ATK UP, Block UP",
        "icon": "skill001/skill1001",
        "effect": "Magic Attack + (+259)",
        "effect2": "Block+ (+15)"
      }
    ],
    "name": "Zoe",
    "id": 2024,
    "rarity": "SR",
    "element": "Dark",
    "role": "Tank",
    "tags": [
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 4210,
      "ATK": 163,
      "MATK": 271,
      "DEF": 7,
      "MDEF": 18
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic → Basic",
      "loop": "Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "110% ATK",
      "speedLabel": "Very Slow",
      "speedValue": "1.36"
    },
    "slug": "sr-zoe"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Sestertius’s Weight",
        "icon": "skill001/skill0019",
        "description": "Applies Physical Attack (+108%) + Lv2 (+12% / +25) to all allies for 8 seconds and Magic Attack + Lv2 (+12% / +25) for 8 seconds",
        "target": "All Allies",
        "castTime": "1.58s",
        "effect": "Physical Attack (+108%) + Lv2 (+12 / +25) for 8s"
      },
      {
        "slot": 3,
        "name": "Denarius’s Stride",
        "icon": "skill001/skill0019",
        "description": "Applies Action Speed + Lv2 (+11% / +11) to all allies for 10 seconds and Accuracy + Lv2 (+7) for 10 seconds",
        "target": "All Allies",
        "castTime": "1.58s",
        "effect": "Action Speed + Lv2 (+11 / +11) for 10s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Aureus’s Radiance",
        "icon": "skill001/skill0020_1",
        "description": "Applies Magic Defense+ (+20%) Ultimate Lv1 (+20% / +150) to all allies for 10 seconds and Physical Defense + (+5000%) Ultimate Lv1 (+20% / +150) for 10 seconds",
        "effect": "0% + 0 | Buff: Magic Defense+ (+20%) Ultimate Lv1 (+20 / +150) (10s)"
      },
      {
        "rank": 2,
        "name": "Aureus’s Radiance",
        "icon": "skill001/skill0020_2",
        "description": "Applies Magic Defense+ (+20%) Ultimate Lv2 (+25% / +250) to all allies for 10 seconds and Physical Defense + (+5000%) Ultimate Lv2 (+25% / +250) for 10 seconds",
        "effect": "0% + 0 | Buff: Magic Defense+ (+20%) Ultimate Lv2 (+25 / +250) (10s)"
      },
      {
        "rank": 3,
        "name": "Aureus’s Radiance",
        "icon": "skill001/skill0020_3",
        "description": "Applies Magic Defense+ (+20%) Ultimate Lv3 (+30% / +300) to all allies for 10 seconds and Physical Defense + (+5000%) Ultimate Lv3 (+30% / +300) for 10 seconds",
        "effect": "0% + 0 | Buff: Magic Defense+ (+20%) Ultimate Lv3 (+30 / +300) (10s)"
      },
      {
        "rank": 4,
        "name": "Aureus’s Radiance",
        "icon": "skill001/skill0020_4",
        "description": "Applies Magic Defense+ (+20%) Ultimate Lv4 (+35% / +350) to all allies for 10 seconds and Physical Defense + (+5000%) Ultimate Lv4 (+35% / +350) for 10 seconds",
        "effect": "0% + 0 | Buff: Magic Defense+ (+20%) Ultimate Lv4 (+35 / +350) (10s)"
      },
      {
        "rank": 5,
        "name": "Aureus’s Radiance",
        "icon": "skill001/skill0020_5",
        "description": "Applies Magic Defense+ (+20%) Ultimate Lv5 (+40% / +400) to all allies for 10 seconds and Physical Defense + (+5000%) Ultimate Lv5 (+40% / +400) for 10 seconds",
        "effect": "0% + 0 | Buff: Magic Defense+ (+20%) Ultimate Lv5 (+40 / +400) (10s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Action Speed UP, Block UP",
        "icon": "skill001/skill1003",
        "effect": "Action Speed + (+10 / +10)",
        "effect2": "Block+ (+20)"
      },
      {
        "slot": 2,
        "name": "Front Row AlliesMax HP UP, Physical DEF UP",
        "icon": "skill001/skill1007",
        "effect": "Max HP + (+955)",
        "effect2": "Physical Defense + (+70)"
      }
    ],
    "name": "Constantia",
    "id": 2025,
    "rarity": "SR",
    "element": "Water",
    "role": "Support",
    "tags": [
      "Buff"
    ],
    "baseStats": {
      "HP": 1831,
      "ATK": 240,
      "MATK": 144,
      "DEF": 326,
      "MDEF": 130
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic",
      "loop": "Basic → Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "110% ATK",
      "speedLabel": "Slow",
      "speedValue": "1.11"
    },
    "slug": "sr-constantia"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Blizzard",
        "icon": "skill001/skill0011",
        "description": "Deals 270% ATK + 120 magic damage to the enemy with the highest Physical ATK and inflicts Freeze Lv5 (-650) for 2 seconds",
        "target": "Enemy with Highest Physical ATK",
        "castTime": "1.38s",
        "damageScaling": "270% ATK",
        "baseDamage": "+120",
        "levelGrowth": "+20",
        "lvl1": "270% + 120",
        "lvl90": "270% + 1900",
        "effect": "Freeze Lv5 (+-650) for 2s"
      },
      {
        "slot": 3,
        "name": "Avalanche",
        "icon": "skill001/skill0019",
        "description": "Applies Magic Attack + Lv4 (+18% / +35) to self for 10 seconds and Physical Defense + Lv4 (+25% / +170) for 10 seconds",
        "target": "Self",
        "castTime": "1.38s",
        "effect": "Magic Attack + Lv4 (+18 / +35) for 10s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "A Prison of Lament for the Loveless",
        "icon": "skill001/skill0012_1",
        "description": "Deals 1000% ATK + 943 magic damage to the enemy with the highest Physical ATK and inflicts Freeze (-2500) Ultimate Lv1 (-2500) for 3 seconds and Magic Defense- (-15% / -200) Ultimate Lv1 (-15%) for 12 seconds",
        "effect": "1000% + 943 | Buff: Freeze (-2500) Ultimate Lv1 (+-2500) (3s)"
      },
      {
        "rank": 2,
        "name": "A Prison of Lament for the Loveless",
        "icon": "skill001/skill0012_2",
        "description": "Deals 1200% ATK + 1020 magic damage to the enemy with the highest Physical ATK and inflicts Freeze (-2500) Ultimate Lv2 (-3500) for 3 seconds and Magic Defense- (-15% / -200) Ultimate Lv2 (-20%) for 9 seconds",
        "effect": "1200% + 1020 | Buff: Freeze (-2500) Ultimate Lv2 (+-3500) (3s)"
      },
      {
        "rank": 3,
        "name": "A Prison of Lament for the Loveless",
        "icon": "skill001/skill0012_3",
        "description": "Deals 1350% ATK + 1082 magic damage to the enemy with the highest Physical ATK and inflicts Freeze (-2500) Ultimate Lv3 (-4000) for 3 seconds and Magic Defense- (-15% / -200) Ultimate Lv3 (-24%) for 9 seconds",
        "effect": "1350% + 1082 | Buff: Freeze (-2500) Ultimate Lv3 (+-4000) (3s)"
      },
      {
        "rank": 4,
        "name": "A Prison of Lament for the Loveless",
        "icon": "skill001/skill0012_4",
        "description": "Deals 1450% ATK + 1155 magic damage to the enemy with the highest Physical ATK and inflicts Freeze (-2500) Ultimate Lv4 (-4500) for 3 seconds and Magic Defense- (-15% / -200) Ultimate Lv4 (-27%) for 9 seconds",
        "effect": "1450% + 1155 | Buff: Freeze (-2500) Ultimate Lv4 (+-4500) (3s)"
      },
      {
        "rank": 5,
        "name": "A Prison of Lament for the Loveless",
        "icon": "skill001/skill0012_5",
        "description": "Deals 1550% ATK + 1249 magic damage to the enemy with the highest Physical ATK and inflicts Freeze (-2500) Ultimate Lv5 (-5000) for 3 seconds and Magic Defense- (-15% / -200) Ultimate Lv5 (-30%) for 9 seconds",
        "effect": "1550% + 1249 | Buff: Freeze (-2500) Ultimate Lv5 (+-5000) (3s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Freeze (-2500) Resist",
        "icon": "skill001/skill1003",
        "effect": "Freeze (-2500) Resistance LvMax (+1)"
      },
      {
        "slot": 2,
        "name": "Self Magic CRIT UP, Self Block UP",
        "icon": "skill001/skill1001",
        "effect": "Magic Critical Damage+ (+118)",
        "effect2": "Block+ (+15)"
      }
    ],
    "name": "Farneria",
    "id": 2026,
    "rarity": "SR",
    "element": "Water",
    "role": "Attacker",
    "tags": [
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 1524,
      "ATK": 188,
      "MATK": 314,
      "DEF": 83,
      "MDEF": 208
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic",
      "loop": "Basic → Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "110% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "sr-farneria"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Just a little…",
        "icon": "skill001/skill0002",
        "description": "Deals 240% ATK + 90 physical damage to the nearest enemy, and applies Taunt to self for 8 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.78s",
        "damageScaling": "240% ATK",
        "baseDamage": "+90",
        "levelGrowth": "+16",
        "lvl1": "240% + 90",
        "lvl90": "240% + 1514",
        "effect": "Taunt for 8s"
      },
      {
        "slot": 3,
        "name": "Please come with me～♪",
        "icon": "skill001/skill0021",
        "description": "Restores own HP by 2500% ATK + 950",
        "target": "Self",
        "castTime": "1.78s",
        "damageScaling": "2500% ATK",
        "baseDamage": "+950",
        "levelGrowth": "+50",
        "lvl1": "2500% + 950",
        "lvl90": "2500% + 5400"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Now, let us head to Hades’s realm♪",
        "icon": "skill001/skill0003_1",
        "description": "Deals 220% ATK + 304 physical damage to the 3 nearest enemies and inflicts Physical Defense - (-15% / -200) Ultimate Lv1 (-10%) for 10 seconds",
        "effect": "220% + 304 | Buff: Physical Defense - (-15% / -200) Ultimate Lv1 (+-10) (10s)"
      },
      {
        "rank": 2,
        "name": "Now, let us head to Hades’s realm♪",
        "icon": "skill001/skill0003_2",
        "description": "Deals 275% ATK + 409 physical damage to the 3 nearest enemies and inflicts Physical Defense - (-15% / -200) Ultimate Lv2 (-13%) for 10 seconds",
        "effect": "275% + 409 | Buff: Physical Defense - (-15% / -200) Ultimate Lv2 (+-13) (10s)"
      },
      {
        "rank": 3,
        "name": "Now, let us head to Hades’s realm♪",
        "icon": "skill001/skill0003_3",
        "description": "Deals 320% ATK + 453 physical damage to the 3 nearest enemies and inflicts Physical Defense - (-15% / -200) Ultimate Lv3 (-16%) for 10 seconds",
        "effect": "320% + 453 | Buff: Physical Defense - (-15% / -200) Ultimate Lv3 (+-16) (10s)"
      },
      {
        "rank": 4,
        "name": "Now, let us head to Hades’s realm♪",
        "icon": "skill001/skill0003_4",
        "description": "Deals 352% ATK + 488 physical damage to the 3 nearest enemies and inflicts Physical Defense - (-15% / -200) Ultimate Lv4 (-18%) for 10 seconds",
        "effect": "352% + 488 | Buff: Physical Defense - (-15% / -200) Ultimate Lv4 (+-18) (10s)"
      },
      {
        "rank": 5,
        "name": "Now, let us head to Hades’s realm♪",
        "icon": "skill001/skill0003_5",
        "description": "Deals 374% ATK + 512 physical damage to the 3 nearest enemies and inflicts Physical Defense - (-15% / -200) Ultimate Lv5 (-20%) for 10 seconds",
        "effect": "374% + 512 | Buff: Physical Defense - (-15% / -200) Ultimate Lv5 (+-20) (10s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Physical ATK UP",
        "icon": "skill001/skill1001",
        "effect": "Physical Attack (+108%) + (+130)"
      },
      {
        "slot": 2,
        "name": "Self Max HP UP",
        "icon": "skill001/skill1003",
        "effect": "Max HP + (+1447)"
      }
    ],
    "name": "Destra",
    "id": 2027,
    "rarity": "R",
    "element": "Dark",
    "role": "Tank",
    "tags": [
      "Debuff",
      "Taunt"
    ],
    "baseStats": {
      "HP": 4010,
      "ATK": 241,
      "MATK": 145,
      "DEF": 9,
      "MDEF": 3
    },
    "skillRotation": {
      "opening": "Skill2 → Basic → Basic → Skill3",
      "loop": "Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "100% ATK",
      "speedLabel": "Very Slow",
      "speedValue": "1.36"
    },
    "slug": "r-destra"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "I’m very busy",
        "icon": "skill001/skill0002",
        "description": "Deals 280% ATK + 110 physical damage to the nearest enemy",
        "target": "Nearest Enemy",
        "castTime": "1.78s",
        "damageScaling": "280% ATK",
        "baseDamage": "+110",
        "levelGrowth": "+20",
        "lvl1": "280% + 110",
        "lvl90": "280% + 1890"
      },
      {
        "slot": 3,
        "name": "Fall♪",
        "icon": "skill001/skill0019",
        "description": "Applies Block+ Lv4 (+11) to self for 10 seconds",
        "target": "Self",
        "castTime": "1.78s",
        "effect": "Block+ Lv4 (+11) for 10s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Prepare yourself♪",
        "icon": "skill001/skill0003_1",
        "description": "Deals 225% ATK + 404 physical damage to the 3 nearest enemies and inflicts Accuracy - (-40) Ultimate Lv1 (-10) for 10 seconds",
        "effect": "225% + 404 | Buff: Accuracy - (-40) Ultimate Lv1 (+-10) (10s)"
      },
      {
        "rank": 2,
        "name": "Prepare yourself♪",
        "icon": "skill001/skill0003_2",
        "description": "Deals 280% ATK + 509 physical damage to the 3 nearest enemies and inflicts Accuracy - (-40) Ultimate Lv2 (-12) for 10 seconds",
        "effect": "280% + 509 | Buff: Accuracy - (-40) Ultimate Lv2 (+-12) (10s)"
      },
      {
        "rank": 3,
        "name": "Prepare yourself♪",
        "icon": "skill001/skill0003_3",
        "description": "Deals 325% ATK + 553 physical damage to the 3 nearest enemies and inflicts Accuracy - (-40) Ultimate Lv3 (-13) for 10 seconds",
        "effect": "325% + 553 | Buff: Accuracy - (-40) Ultimate Lv3 (+-13) (10s)"
      },
      {
        "rank": 4,
        "name": "Prepare yourself♪",
        "icon": "skill001/skill0003_4",
        "description": "Deals 358% ATK + 568 physical damage to the 3 nearest enemies and inflicts Accuracy - (-40) Ultimate Lv4 (-14) for 10 seconds",
        "effect": "358% + 568 | Buff: Accuracy - (-40) Ultimate Lv4 (+-14) (10s)"
      },
      {
        "rank": 5,
        "name": "Prepare yourself♪",
        "icon": "skill001/skill0003_5",
        "description": "Deals 380% ATK + 602 physical damage to the 3 nearest enemies and inflicts Accuracy - (-40) Ultimate Lv5 (-15) for 10 seconds",
        "effect": "380% + 602 | Buff: Accuracy - (-40) Ultimate Lv5 (+-15) (10s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Magic DEF UP",
        "icon": "skill001/skill1002",
        "effect": "Magic Defense+ (+70)"
      },
      {
        "slot": 2,
        "name": "Self Block UP",
        "icon": "skill001/skill1002",
        "effect": "Paralysis Resistance LvMax (+1)"
      }
    ],
    "name": "Eskelda",
    "id": 2028,
    "rarity": "R",
    "element": "Water",
    "role": "Tank",
    "tags": [
      "Debuff"
    ],
    "baseStats": {
      "HP": 1966,
      "ATK": 208,
      "MATK": 124,
      "DEF": 199,
      "MDEF": 79
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic → Basic → Basic → Skill3",
      "loop": "Basic → Basic → Skill2 → Basic → Basic → Skill3 → Skill2"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "100% ATK",
      "speedLabel": "Very Slow",
      "speedValue": "1.36"
    },
    "slug": "r-eskelda"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Iokaela",
        "icon": "skill001/skill0002",
        "description": "Deals 170% ATK + 100 physical damage to the nearest enemy and guaranteed to hit and guaranteed to crit",
        "target": "Nearest Enemy",
        "castTime": "1.38s",
        "damageScaling": "170% ATK",
        "baseDamage": "+100",
        "levelGrowth": "+15",
        "lvl1": "170% + 100",
        "lvl90": "170% + 1435"
      },
      {
        "slot": 3,
        "name": "Aporosa",
        "icon": "skill001/skill0017",
        "description": "Applies Physical Attack (+108%) + Lv4 (+18% / +35) to self for 10 seconds and Action Speed + Lv3 (+14% / +14) for 10 seconds",
        "target": "Self",
        "castTime": "1.38s",
        "effect": "Physical Attack (+108%) + Lv4 (+18 / +35) for 10s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "The Maiden Goddess’s Arrow that Purges Impurity",
        "icon": "skill001/skill0003_1",
        "description": "Deals 600% ATK + 785 physical damage to the nearest enemy with guaranteed hit and guaranteed crit, and when activating the Ultimate, applies Wind Type Defense - Ultimate Lv1 (-15%) for 8 seconds",
        "effect": "600% + 785 | Buff: Wind Type Defense - Ultimate Lv1 (+-15) (8s)"
      },
      {
        "rank": 2,
        "name": "The Maiden Goddess’s Arrow that Purges Impurity",
        "icon": "skill001/skill0003_2",
        "description": "Deals 660% ATK + 912 physical damage to the nearest enemy with guaranteed hit and guaranteed crit, and when activating the Ultimate, applies Wind Type Defense - Ultimate Lv2 (-20%) for 8 seconds",
        "effect": "660% + 912 | Buff: Wind Type Defense - Ultimate Lv2 (+-20) (8s)"
      },
      {
        "rank": 3,
        "name": "The Maiden Goddess’s Arrow that Purges Impurity",
        "icon": "skill001/skill0003_3",
        "description": "Deals 700% ATK + 1033 physical damage to the nearest enemy with guaranteed hit and guaranteed crit, and when activating the Ultimate, applies Wind Type Defense - Ultimate Lv3 (-24%) for 8 seconds",
        "effect": "700% + 1033 | Buff: Wind Type Defense - Ultimate Lv3 (+-24) (8s)"
      },
      {
        "rank": 4,
        "name": "The Maiden Goddess’s Arrow that Purges Impurity",
        "icon": "skill001/skill0003_4",
        "description": "Deals 740% ATK + 1137 physical damage to the nearest enemy with guaranteed hit and guaranteed crit, and when activating the Ultimate, applies Wind Type Defense - Ultimate Lv4 (-27%) for 8 seconds",
        "effect": "740% + 1137 | Buff: Wind Type Defense - Ultimate Lv4 (+-27) (8s)"
      },
      {
        "rank": 5,
        "name": "The Maiden Goddess’s Arrow that Purges Impurity",
        "icon": "skill001/skill0003_5",
        "description": "Deals 770% ATK + 1201 physical damage to the nearest enemy with guaranteed hit and guaranteed crit, and when activating the Ultimate, applies Wind Type Defense - Ultimate Lv5 (-30%) for 8 seconds",
        "effect": "770% + 1201 | Buff: Wind Type Defense - Ultimate Lv5 (+-30) (8s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Physical ATK UP",
        "icon": "skill001/skill1001",
        "effect": "Physical Attack (+108%) + (+259)"
      },
      {
        "slot": 2,
        "name": "Self 攻擊Speed UP, Skill DMG UP",
        "icon": "skill001/skill1001",
        "effect": "Action Speed + (+10 / +10)",
        "effect2": "Skill Damage + (+10)"
      }
    ],
    "name": "Artemis",
    "id": 2029,
    "rarity": "SR",
    "element": "Wind",
    "role": "Attacker",
    "tags": [
      "Debuff",
      "Sure-hit",
      "Guaranteed Crit"
    ],
    "baseStats": {
      "HP": 1566,
      "ATK": 293,
      "MATK": 176,
      "DEF": 126,
      "MDEF": 50
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic",
      "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "110% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "artemis"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Poliucos",
        "icon": "skill001/skill0007",
        "description": "Deals 280% ATK + 90 physical damage to the nearest enemy and inflicts Physical Attack (+108%) - Lv3 (-9% / -20) for 5 seconds and Magic Attack - Lv3 (-9% / -20) for 5 seconds",
        "target": "Nearest Enemy",
        "castTime": "0.88s",
        "damageScaling": "280% ATK",
        "baseDamage": "+90",
        "levelGrowth": "+15",
        "lvl1": "280% + 90",
        "lvl90": "280% + 1425",
        "effect": "Physical Attack (+108%) - Lv3 (+-9 / +-20) for 5s"
      },
      {
        "slot": 3,
        "name": "Palladion",
        "icon": "skill001/skill0021",
        "description": "Restores own HP by 2000% ATK + 416 and inflicts Block+ Lv5 (+13) for 10 seconds",
        "target": "Self",
        "castTime": "0.88s",
        "damageScaling": "2000% ATK",
        "baseDamage": "+416",
        "levelGrowth": "+60",
        "lvl1": "2000% + 416",
        "lvl90": "2000% + 5756",
        "effect": "Block+ Lv5 (+13) for 10s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Knowledge That Brings Regret to Fools",
        "icon": "skill001/skill0012_1",
        "description": "Deals 1200% ATK + 1000 physical damage to the nearest enemy and inflicts Silence for 5 seconds and inflicts Dispel for 2 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration)",
        "effect": "1200% + 1000 | Buff: Silence (5s)"
      },
      {
        "rank": 2,
        "name": "Knowledge That Brings Regret to Fools",
        "icon": "skill001/skill0012_2",
        "description": "Deals 1440% ATK + 1146 physical damage to the nearest enemy and inflicts Silence for 5 seconds and inflicts Dispel for 2 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration)",
        "effect": "1440% + 1146 | Buff: Silence (5s)"
      },
      {
        "rank": 3,
        "name": "Knowledge That Brings Regret to Fools",
        "icon": "skill001/skill0012_3",
        "description": "Deals 1520% ATK + 1296 physical damage to the nearest enemy and inflicts Silence for 5 seconds and inflicts Dispel for 2 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration)",
        "effect": "1520% + 1296 | Buff: Silence (5s)"
      },
      {
        "rank": 4,
        "name": "Knowledge That Brings Regret to Fools",
        "icon": "skill001/skill0012_4",
        "description": "Deals 1639% ATK + 1385 physical damage to the nearest enemy and inflicts Silence for 5 seconds and inflicts Dispel for 2 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration)",
        "effect": "1639% + 1385 | Buff: Silence (5s)"
      },
      {
        "rank": 5,
        "name": "Knowledge That Brings Regret to Fools",
        "icon": "skill001/skill0012_5",
        "description": "Deals 1760% ATK + 1515 physical damage to the nearest enemy and inflicts Silence for 5 seconds and inflicts Dispel for 2 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration)",
        "effect": "1760% + 1515 | Buff: Silence (5s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Physical DEF UP, Magic DEF UP",
        "icon": "skill001/skill1002",
        "effect": "Physical Defense + (+70)",
        "effect2": "Magic Defense+ (+70)"
      },
      {
        "slot": 2,
        "name": "Self Max HP UP",
        "icon": "skill001/skill1003",
        "effect": "Max HP + (+1447)",
        "effect2": "Block+ (+15)"
      }
    ],
    "name": "Athena",
    "id": 2030,
    "rarity": "SR",
    "element": "Holy",
    "role": "Tank",
    "tags": [
      "Heal",
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 2267,
      "ATK": 163,
      "MATK": 97,
      "DEF": 326,
      "MDEF": 130
    },
    "skillRotation": {
      "opening": "Skill2 → Basic → Basic → Skill3",
      "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2 → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "110% ATK",
      "speedLabel": "Very Fast",
      "speedValue": "0.36"
    },
    "slug": "sr-athena"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "I’m going to curse you～!",
        "icon": "skill001/skill0011",
        "description": "Deals 90% ATK + 50 magic damage to the 3 nearest enemies and inflicts Paralysis for 6 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.38s",
        "damageScaling": "90% ATK",
        "baseDamage": "+50",
        "levelGrowth": "+7",
        "lvl1": "90% + 50",
        "lvl90": "90% + 673",
        "effect": "Paralysis for 6s"
      },
      {
        "slot": 3,
        "name": "Aauyaaahhh!",
        "icon": "skill001/skill0018",
        "description": "Applies Magic Attack + Lv4 (+18% / +35) to self for 10 seconds and Action Speed + Lv3 (+14% / +14) for 10 seconds",
        "target": "Self",
        "castTime": "1.38s",
        "effect": "Magic Attack + Lv4 (+18 / +35) for 10s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "All of you, turn to stone～～～!",
        "icon": "skill001/skill0012_1",
        "description": "Deals 450% ATK + 398 magic damage to all enemies and inflicts Petrify for 3 seconds",
        "effect": "450% + 398 | Buff: Petrify (3s)"
      },
      {
        "rank": 2,
        "name": "All of you, turn to stone～～～!",
        "icon": "skill001/skill0012_2",
        "description": "Deals 630% ATK + 499 magic damage to all enemies and inflicts Petrify for 3 seconds",
        "effect": "630% + 499 | Buff: Petrify (3s)"
      },
      {
        "rank": 3,
        "name": "All of you, turn to stone～～～!",
        "icon": "skill001/skill0012_3",
        "description": "Deals 765% ATK + 583 magic damage to all enemies and inflicts Petrify for 3 seconds",
        "effect": "765% + 583 | Buff: Petrify (3s)"
      },
      {
        "rank": 4,
        "name": "All of you, turn to stone～～～!",
        "icon": "skill001/skill0012_4",
        "description": "Deals 855% ATK + 677 magic damage to all enemies and inflicts Petrify for 3 seconds",
        "effect": "855% + 677 | Buff: Petrify (3s)"
      },
      {
        "rank": 5,
        "name": "All of you, turn to stone～～～!",
        "icon": "skill001/skill0012_5",
        "description": "Deals 900% ATK + 752 magic damage to all enemies and inflicts Petrify for 3 seconds",
        "effect": "900% + 752 | Buff: Petrify (3s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Petrify Resist, Self Physical DEF UP",
        "icon": "skill001/skill1003",
        "effect": "Petrify Resistance LvMax (+1)"
      },
      {
        "slot": 2,
        "name": "Self Magic CRIT UP, Magic DEF UP",
        "icon": "skill001/skill1001",
        "effect": "Magic Critical Damage+ (+118)",
        "effect2": "Magic Defense+ (+141)"
      }
    ],
    "name": "Medusa",
    "id": 2031,
    "rarity": "SR",
    "element": "Dark",
    "role": "Attacker",
    "tags": [
      "Disrupt"
    ],
    "baseStats": {
      "HP": 1566,
      "ATK": 151,
      "MATK": 252,
      "DEF": 50,
      "MDEF": 126
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic → Basic",
      "loop": "Basic → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "110% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "sr-medusa"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Hypnotic Embrace",
        "icon": "skill001/skill0007",
        "description": "Deals 210% ATK + 80 physical damage to the nearest enemy and inflicts Physical Defense - Lv4 (-21% / -40) for 15 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.38s",
        "damageScaling": "210% ATK",
        "baseDamage": "+80",
        "levelGrowth": "+16",
        "lvl1": "210% + 80",
        "lvl90": "210% + 1504",
        "effect": "Physical Defense - Lv4 (+-21 / +-40) for 15s"
      },
      {
        "slot": 3,
        "name": "Trance Embrace",
        "icon": "skill001/skill0011",
        "description": "Deals 170% ATK + 60 physical damage to the nearest enemy and absorbs 6% of the damage dealt to restore own HP and inflicts Charm for 3 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.38s",
        "damageScaling": "170% ATK",
        "baseDamage": "+60",
        "levelGrowth": "+12",
        "lvl1": "170% + 60",
        "lvl90": "170% + 1128",
        "effect": "Charm for 3s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Divine Enchanting Embrace",
        "icon": "skill001/skill0012_1",
        "description": "Deals 800% ATK + 685 physical damage to the nearest enemy and inflicts Paralysis for 6 seconds",
        "effect": "800% + 685 | Buff: Paralysis (6s)"
      },
      {
        "rank": 2,
        "name": "Divine Enchanting Embrace",
        "icon": "skill001/skill0012_2",
        "description": "Deals 960% ATK + 922 physical damage to the nearest enemy and inflicts Paralysis for 6 seconds",
        "effect": "960% + 922 | Buff: Paralysis (6s)"
      },
      {
        "rank": 3,
        "name": "Divine Enchanting Embrace",
        "icon": "skill001/skill0012_3",
        "description": "Deals 1080% ATK + 1023 physical damage to the nearest enemy and inflicts Paralysis for 6 seconds",
        "effect": "1080% + 1023 | Buff: Paralysis (6s)"
      },
      {
        "rank": 4,
        "name": "Divine Enchanting Embrace",
        "icon": "skill001/skill0012_4",
        "description": "Deals 1160% ATK + 1057 physical damage to the nearest enemy and inflicts Paralysis for 6 seconds",
        "effect": "1160% + 1057 | Buff: Paralysis (6s)"
      },
      {
        "rank": 5,
        "name": "Divine Enchanting Embrace",
        "icon": "skill001/skill0012_5",
        "description": "Deals 1240% ATK + 1091 physical damage to the nearest enemy and inflicts Paralysis for 6 seconds",
        "effect": "1240% + 1091 | Buff: Paralysis (6s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Physical DEF UP",
        "icon": "skill001/skill1002",
        "effect": "Physical Defense + (+70)"
      },
      {
        "slot": 2,
        "name": "Self Block UP",
        "icon": "skill001/skill1002",
        "effect": "Block+ (+10)"
      }
    ],
    "name": "Lucrezia",
    "id": 2032,
    "rarity": "R",
    "element": "Water",
    "role": "Attacker",
    "tags": [
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 1964,
      "ATK": 279,
      "MATK": 167,
      "DEF": 56,
      "MDEF": 22
    },
    "skillRotation": {
      "opening": "Skill2 → Basic → Basic → Skill3 → Basic",
      "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Basic → Skill3 → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "100% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "sr-lucrezia"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Charming Smile",
        "icon": "skill001/skill0019",
        "description": "Applies Physical Critical Damage+ Lv3 (+40) to Front Row allies for 8 seconds and Magic Critical Damage+ Lv3 (+40) for 8 seconds",
        "target": "Frontmost Ally",
        "castTime": "1.58s",
        "effect": "Physical Critical Damage+ Lv3 (+40) for 8s"
      },
      {
        "slot": 3,
        "name": "Blessing of the Love Goddess",
        "icon": "skill001/skill0019",
        "description": "Applies Physical Defense + Lv3 (+20% / +140) to Front Row allies for 8 seconds and Magic Defense+ Lv3 (+20% / +140) for 8 seconds",
        "target": "Frontmost Ally",
        "castTime": "1.58s",
        "effect": "Physical Defense + Lv3 (+20 / +140) for 8s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Grace Granted by the Love Goddess",
        "icon": "skill001/skill0020_1",
        "description": "Applies Physical Attack (+108%) + (+389) Ultimate Lv1 (+15%) to Front Row allies for 10 seconds and Magic Attack + (+20%) Ultimate Lv1 (+20%) for 10 seconds",
        "effect": "N/A | Buff: Physical Attack (+108%) + (+389) Ultimate Lv1 (+20) (10s)"
      },
      {
        "rank": 2,
        "name": "Grace Granted by the Love Goddess",
        "icon": "skill001/skill0020_2",
        "description": "Applies Physical Attack (+108%) + (+389) Ultimate Lv2 (+20%) to Front Row allies for 10 seconds and Magic Attack + (+20%) Ultimate Lv2 (+25%) for 10 seconds",
        "effect": "N/A | Buff: Physical Attack (+108%) + (+389) Ultimate Lv2 (+25) (10s)"
      },
      {
        "rank": 3,
        "name": "Grace Granted by the Love Goddess",
        "icon": "skill001/skill0020_3",
        "description": "Applies Physical Attack (+108%) + (+389) Ultimate Lv3 (+24%) to Front Row allies for 10 seconds and Magic Attack + (+20%) Ultimate Lv3 (+29%) for 10 seconds",
        "effect": "N/A | Buff: Physical Attack (+108%) + (+389) Ultimate Lv3 (+29) (10s)"
      },
      {
        "rank": 4,
        "name": "Grace Granted by the Love Goddess",
        "icon": "skill001/skill0020_4",
        "description": "Applies Physical Attack (+108%) + (+389) Ultimate Lv4 (+27%) to Front Row allies for 10 seconds and Magic Attack + (+20%) Ultimate Lv4 (+32%) for 10 seconds",
        "effect": "N/A | Buff: Physical Attack (+108%) + (+389) Ultimate Lv4 (+32) (10s)"
      },
      {
        "rank": 5,
        "name": "Grace Granted by the Love Goddess",
        "icon": "skill001/skill0020_5",
        "description": "Applies Physical Attack (+108%) + (+389) Ultimate Lv5 (+30%) to Front Row allies for 10 seconds and Magic Attack + (+20%) Ultimate Lv5 (+35%) for 10 seconds",
        "effect": "N/A | Buff: Physical Attack (+108%) + (+389) Ultimate Lv5 (+35) (10s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "戰鬥開始30秒內Front Row AlliesPhysical ATK UP, Magic ATK UP",
        "icon": "skill001/skill1005",
        "effect": "Physical Attack (+108%) + (+300)",
        "effect2": "Magic Attack + (+300)"
      },
      {
        "slot": 2,
        "name": "戰鬥開始30秒內Front Row AlliesPhysical CRIT UP, Magic CRIT UP",
        "icon": "skill001/skill1005",
        "effect": "Physical Critical Damage+ (+120)",
        "effect2": "Magic Critical Damage+ (+120)"
      }
    ],
    "name": "Venus",
    "id": 2033,
    "rarity": "SR",
    "element": "Holy",
    "role": "Support",
    "tags": [
      "Buff"
    ],
    "baseStats": {
      "HP": 2707,
      "ATK": 156,
      "MATK": 259,
      "DEF": 25,
      "MDEF": 65
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic",
      "loop": "Basic → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "110% ATK",
      "speedLabel": "Slow",
      "speedValue": "1.11"
    },
    "slug": "venus"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "We must make lots of delicious food!",
        "icon": "skill001/skill0019",
        "description": "Applies Physical Attack (+108%) + Lv1 (+10% / +20) to all allies for 9 seconds and Magic Attack + Lv1 (+10% / +20) for 9 seconds",
        "target": "All Allies",
        "castTime": "1.38s",
        "effect": "Physical Attack (+108%) + Lv1 (+10 / +20) for 9s"
      },
      {
        "slot": 3,
        "name": "You must be thirsty, right?",
        "icon": "skill001/skill0019",
        "description": "Applies Physical Defense + Lv2 (+15% / +100) to all allies for 9 seconds and Magic Defense+ Lv2 (+15% / +100) for 9 seconds",
        "target": "All Allies",
        "castTime": "1.38s",
        "effect": "Physical Defense + Lv2 (+15 / +100) for 9s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Delicious Praise Punch",
        "icon": "skill001/skill0020_1",
        "description": "Applies MP Regeneration (+200) + (+50) Ultimate Lv1 (+25) to all allies for 5 seconds and Action Speed + (+5% / +5) Ultimate Lv1 (+8% / +8) for 8 seconds",
        "effect": "N/A | Buff: MP Regeneration (+200) + (+50) Ultimate Lv1 (+25) (5s)"
      },
      {
        "rank": 2,
        "name": "Delicious Praise Punch",
        "icon": "skill001/skill0020_2",
        "description": "Applies MP Regeneration (+200) + (+50) Ultimate Lv2 (+35) to all allies for 5 seconds and Action Speed + (+5% / +5) Ultimate Lv2 (+10% / +10) for 8 seconds",
        "effect": "N/A | Buff: MP Regeneration (+200) + (+50) Ultimate Lv2 (+35) (5s)"
      },
      {
        "rank": 3,
        "name": "Delicious Praise Punch",
        "icon": "skill001/skill0020_3",
        "description": "Applies MP Regeneration (+200) + (+50) Ultimate Lv3 (+40) to all allies for 5 seconds and Action Speed + (+5% / +5) Ultimate Lv3 (+12% / +12) for 8 seconds",
        "effect": "N/A | Buff: MP Regeneration (+200) + (+50) Ultimate Lv3 (+40) (5s)"
      },
      {
        "rank": 4,
        "name": "Delicious Praise Punch",
        "icon": "skill001/skill0020_4",
        "description": "Applies MP Regeneration (+200) + (+50) Ultimate Lv4 (+45) to all allies for 5 seconds and Action Speed + (+5% / +5) Ultimate Lv4 (+14% / +14) for 8 seconds",
        "effect": "N/A | Buff: MP Regeneration (+200) + (+50) Ultimate Lv4 (+45) (5s)"
      },
      {
        "rank": 5,
        "name": "Delicious Praise Punch",
        "icon": "skill001/skill0020_5",
        "description": "Applies MP Regeneration (+200) + (+50) Ultimate Lv5 (+50) to all allies for 5 seconds and Action Speed + (+5% / +5) Ultimate Lv5 (+15% / +15) for 8 seconds",
        "effect": "N/A | Buff: MP Regeneration (+200) + (+50) Ultimate Lv5 (+50) (5s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Block UP",
        "icon": "skill001/skill1002",
        "effect": "Block+ (+15)"
      },
      {
        "slot": 2,
        "name": "Middle Row AlliesPhysical DEF UP, Magic DEF UP",
        "icon": "skill001/skill1007",
        "effect": "Physical Defense + (+70)",
        "effect2": "Magic Defense+ (+70)"
      }
    ],
    "name": "Liesel",
    "id": 2035,
    "rarity": "SR",
    "element": "Mind",
    "role": "Support",
    "tags": [
      "Buff",
      "MP Recovery (+100)"
    ],
    "baseStats": {
      "HP": 2707,
      "ATK": 265,
      "MATK": 159,
      "DEF": 65,
      "MDEF": 25
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic",
      "loop": "Basic → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "110% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "liesel"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Receive the punishment of the gods",
        "icon": "skill001/skill0005",
        "description": "Deals 170% ATK + 100 magic damage to the enemy with the lowest HP, guaranteed to hit and guaranteed to crit",
        "target": "Enemy with Lowest HP",
        "castTime": "1.38s",
        "damageScaling": "170% ATK",
        "baseDamage": "+100",
        "levelGrowth": "+13",
        "lvl1": "170% + 100",
        "lvl90": "170% + 1257"
      },
      {
        "slot": 3,
        "name": "Divine Love",
        "icon": "skill001/skill0021",
        "description": "Restores HP by 2000% ATK + 600 to the ally with the lowest HP",
        "target": "Ally with Lowest HP",
        "castTime": "1.38s",
        "damageScaling": "2000% ATK",
        "baseDamage": "+600",
        "levelGrowth": "+35",
        "lvl1": "2000% + 600",
        "lvl90": "2000% + 3715"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Radiance of the Gods",
        "icon": "skill001/skill0006_1",
        "description": "Deals 810% ATK + 783 magic damage to the enemy with the lowest HP and inflicts Magic Defense- (-15% / -200) Ultimate Lv1 (-15%) for 10 seconds and inflicts Silence for 6 seconds",
        "effect": "810% + 783 | Buff: Magic Defense- (-15% / -200) Ultimate Lv1 (+-15) (10s)"
      },
      {
        "rank": 2,
        "name": "Radiance of the Gods",
        "icon": "skill001/skill0006_2",
        "description": "Deals 972% ATK + 920 magic damage to the enemy with the lowest HP and inflicts Magic Defense- (-15% / -200) Ultimate Lv2 (-20%) for 10 seconds and inflicts Silence for 6 seconds",
        "effect": "972% + 920 | Buff: Magic Defense- (-15% / -200) Ultimate Lv2 (+-20) (10s)"
      },
      {
        "rank": 3,
        "name": "Radiance of the Gods",
        "icon": "skill001/skill0006_3",
        "description": "Deals 1090% ATK + 1022 magic damage to the enemy with the lowest HP and inflicts Magic Defense- (-15% / -200) Ultimate Lv3 (-24%) for 10 seconds and inflicts Silence for 6 seconds",
        "effect": "1090% + 1022 | Buff: Magic Defense- (-15% / -200) Ultimate Lv3 (+-24) (10s)"
      },
      {
        "rank": 4,
        "name": "Radiance of the Gods",
        "icon": "skill001/skill0006_4",
        "description": "Deals 1175% ATK + 1115 magic damage to the enemy with the lowest HP and inflicts Magic Defense- (-15% / -200) Ultimate Lv4 (-27%) for 10 seconds and inflicts Silence for 6 seconds",
        "effect": "1175% + 1115 | Buff: Magic Defense- (-15% / -200) Ultimate Lv4 (+-27) (10s)"
      },
      {
        "rank": 5,
        "name": "Radiance of the Gods",
        "icon": "skill001/skill0006_5",
        "description": "Deals 1255% ATK + 1209 magic damage to the enemy with the lowest HP and inflicts Magic Defense- (-15% / -200) Ultimate Lv5 (-30%) for 10 seconds and inflicts Silence for 6 seconds",
        "effect": "1255% + 1209 | Buff: Magic Defense- (-15% / -200) Ultimate Lv5 (+-30) (10s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "On enemy defeat，Self MP Recovery (+100)",
        "icon": "skill001/skill1001",
        "effect": "MP Recovery (+100)+ (+21)"
      },
      {
        "slot": 2,
        "name": "Self Magic ATK UP, Magic DEF UP",
        "icon": "skill001/skill1001",
        "effect": "Magic Attack + (+259)",
        "effect2": "Magic Defense+ (+70)"
      }
    ],
    "name": "Ishtovia",
    "id": 2036,
    "rarity": "SR",
    "element": "Holy",
    "role": "Attacker",
    "tags": [
      "Heal",
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 2062,
      "ATK": 188,
      "MATK": 314,
      "DEF": 25,
      "MDEF": 65
    },
    "skillRotation": {
      "opening": "Skill2 → Basic → Basic → Skill3",
      "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "110% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "sr-ishtovia"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "This costs quite a bit, you know",
        "icon": "skill001/skill0007",
        "description": "Deals 240% ATK + 110 physical damage to the nearest enemy and inflicts Physical Defense - Lv3 (-18% / -30) for 12 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.58s",
        "damageScaling": "240% ATK",
        "baseDamage": "+110",
        "levelGrowth": "+20",
        "lvl1": "240% + 110",
        "lvl90": "240% + 1890",
        "effect": "Physical Defense - Lv3 (+-18 / +-30) for 12s"
      },
      {
        "slot": 3,
        "name": "I’m very fond of you",
        "icon": "skill001/skill0017",
        "description": "Applies Physical Critical Damage+ Lv4 (+50) to the 3 nearest allies for 12 seconds",
        "target": "Nearest Ally",
        "castTime": "1.58s",
        "effect": "Physical Critical Damage+ Lv4 (+50) for 12s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Financial Support!",
        "icon": "skill001/skill0020_1",
        "description": "Applies Physical Attack (+108%) + (+389) Ultimate Lv1 (+15%) to all allies for 12 seconds and Physical Defense + (+5000%) Ultimate Lv1 (+20% / +150) for 12 seconds",
        "effect": "0% + 0 | Buff: Physical Attack (+108%) + (+389) Ultimate Lv1 (+15) (12s)"
      },
      {
        "rank": 2,
        "name": "Financial Support!",
        "icon": "skill001/skill0020_2",
        "description": "Applies Physical Attack (+108%) + (+389) Ultimate Lv2 (+20%) to all allies for 12 seconds and Physical Defense + (+5000%) Ultimate Lv2 (+25% / +250) for 12 seconds",
        "effect": "0% + 0 | Buff: Physical Attack (+108%) + (+389) Ultimate Lv2 (+20) (12s)"
      },
      {
        "rank": 3,
        "name": "Financial Support!",
        "icon": "skill001/skill0020_3",
        "description": "Applies Physical Attack (+108%) + (+389) Ultimate Lv3 (+24%) to all allies for 12 seconds and Physical Defense + (+5000%) Ultimate Lv3 (+30% / +300) for 12 seconds",
        "effect": "0% + 0 | Buff: Physical Attack (+108%) + (+389) Ultimate Lv3 (+24) (12s)"
      },
      {
        "rank": 4,
        "name": "Financial Support!",
        "icon": "skill001/skill0020_4",
        "description": "Applies Physical Attack (+108%) + (+389) Ultimate Lv4 (+27%) to all allies for 12 seconds and Physical Defense + (+5000%) Ultimate Lv4 (+35% / +350) for 12 seconds",
        "effect": "0% + 0 | Buff: Physical Attack (+108%) + (+389) Ultimate Lv4 (+27) (12s)"
      },
      {
        "rank": 5,
        "name": "Financial Support!",
        "icon": "skill001/skill0020_5",
        "description": "Applies Physical Attack (+108%) + (+389) Ultimate Lv5 (+30%) to all allies for 12 seconds and Physical Defense + (+5000%) Ultimate Lv5 (+40% / +400) for 12 seconds",
        "effect": "0% + 0 | Buff: Physical Attack (+108%) + (+389) Ultimate Lv5 (+30) (12s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Physical DEF UP, Magic DEF UP",
        "icon": "skill001/skill1002",
        "effect": "Physical Defense + (+141)",
        "effect2": "Magic Defense+ (+141)"
      },
      {
        "slot": 2,
        "name": "Front Row AlliesPhysical ATK UP, Block UP",
        "icon": "skill001/skill1007",
        "effect": "Physical Attack (+108%) + (+130)",
        "effect2": "Block+ (+10)"
      }
    ],
    "name": "Veronica",
    "id": 2037,
    "rarity": "SR",
    "element": "Water",
    "role": "Support",
    "tags": [
      "Debuff",
      "Buff"
    ],
    "baseStats": {
      "HP": 2055,
      "ATK": 240,
      "MATK": 144,
      "DEF": 126,
      "MDEF": 50
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic",
      "loop": "Basic → Basic → Basic → Skill3 → Basic → Skill2 → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "110% ATK",
      "speedLabel": "Slow",
      "speedValue": "1.11"
    },
    "slug": "sr-veronica"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Protected by “Thorns”",
        "icon": "skill001/skill0009",
        "description": "Deals 240% ATK + 110 physical damage to the nearest enemy and inflicts Physical Defense - Lv3 (-18% / -30) for 5 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.58s",
        "damageScaling": "240% ATK",
        "baseDamage": "+110",
        "levelGrowth": "+20",
        "lvl1": "240% + 110",
        "lvl90": "240% + 1890",
        "effect": "Physical Defense - Lv3 (+-18 / +-30) for 5s"
      },
      {
        "slot": 3,
        "name": "Blessing to the brave",
        "icon": "skill001/skill0021",
        "description": "Restores HP by 1500% ATK + 310 to the 2 nearest allies",
        "target": "Nearest Ally",
        "castTime": "1.58s",
        "damageScaling": "1500% ATK",
        "baseDamage": "+310",
        "levelGrowth": "+25",
        "lvl1": "1500% + 310",
        "lvl90": "1500% + 2535"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "For the prosperity of the Sun and Moon",
        "icon": "skill001/skill0012_1",
        "description": "Deals 800% ATK + 590 physical damage to the nearest enemy and inflicts Paralysis for 8 seconds",
        "effect": "800% + 590 | Buff: Paralysis (8s)"
      },
      {
        "rank": 2,
        "name": "For the prosperity of the Sun and Moon",
        "icon": "skill001/skill0012_2",
        "description": "Deals 960% ATK + 754 physical damage to the nearest enemy and inflicts Paralysis for 8 seconds",
        "effect": "960% + 754 | Buff: Paralysis (8s)"
      },
      {
        "rank": 3,
        "name": "For the prosperity of the Sun and Moon",
        "icon": "skill001/skill0012_3",
        "description": "Deals 1080% ATK + 881 physical damage to the nearest enemy and inflicts Paralysis for 8 seconds",
        "effect": "1080% + 881 | Buff: Paralysis (8s)"
      },
      {
        "rank": 4,
        "name": "For the prosperity of the Sun and Moon",
        "icon": "skill001/skill0012_4",
        "description": "Deals 1160% ATK + 991 physical damage to the nearest enemy and inflicts Paralysis for 8 seconds",
        "effect": "1160% + 991 | Buff: Paralysis (8s)"
      },
      {
        "rank": 5,
        "name": "For the prosperity of the Sun and Moon",
        "icon": "skill001/skill0012_5",
        "description": "Deals 1240% ATK + 1085 physical damage to the nearest enemy and inflicts Paralysis for 8 seconds",
        "effect": "1240% + 1085 | Buff: Paralysis (8s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Paralysis Resist",
        "icon": "skill001/skill1003",
        "effect": "Paralysis Resistance LvMax (+1)"
      },
      {
        "slot": 2,
        "name": "Self Physical ATK UP, Max HP UP",
        "icon": "skill001/skill1001",
        "effect": "Physical Attack (+108%) + (+259)",
        "effect2": "Max HP + (+1447)"
      }
    ],
    "name": "Celestia",
    "id": 2038,
    "rarity": "SR",
    "element": "Wind",
    "role": "Support",
    "tags": [
      "Heal",
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 2707,
      "ATK": 279,
      "MATK": 167,
      "DEF": 65,
      "MDEF": 25
    },
    "skillRotation": {
      "opening": "Skill2 → Basic → Basic → Skill3 → Basic → Basic",
      "loop": "Basic → Skill2 → Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "110% ATK",
      "speedLabel": "Slow",
      "speedValue": "1.11"
    },
    "slug": "sr-celestia"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Anger",
        "icon": "skill001/skill0002",
        "description": "Deals 240% ATK + 125 physical damage to the nearest enemy",
        "target": "Nearest Enemy",
        "castTime": "1.38s",
        "damageScaling": "240% ATK",
        "baseDamage": "+125",
        "levelGrowth": "+25",
        "lvl1": "240% + 125",
        "lvl90": "240% + 2350"
      },
      {
        "slot": 3,
        "name": "Silence",
        "icon": "skill001/skill0013",
        "description": "Applies Physical Attack (+108%) + Lv4 (+18% / +35) to self for 10 seconds and Action Speed + Lv3 (+14% / +14) for 10 seconds",
        "target": "Self",
        "castTime": "1.38s",
        "effect": "Physical Attack (+108%) + Lv4 (+18 / +35) for 10s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Raise a Gale of Madness",
        "icon": "skill001/skill0003_1",
        "description": "Deals 800% ATK + 857 physical damage to the nearest enemy and inflicts Action Speed - (-50% / -50) Ultimate Lv1 (-8% / -8) for 10 seconds",
        "effect": "800% + 857 | Buff: Action Speed - (-50% / -50) Ultimate Lv1 (+-10 / +-10) (10s)"
      },
      {
        "rank": 2,
        "name": "Raise a Gale of Madness",
        "icon": "skill001/skill0003_2",
        "description": "Deals 960% ATK + 842 physical damage to the nearest enemy and inflicts Action Speed - (-50% / -50) Ultimate Lv2 (-10% / -10) for 10 seconds",
        "effect": "960% + 842 | Buff: Action Speed - (-50% / -50) Ultimate Lv2 (+-13 / +-13) (10s)"
      },
      {
        "rank": 3,
        "name": "Raise a Gale of Madness",
        "icon": "skill001/skill0003_3",
        "description": "Deals 1080% ATK + 933 physical damage to the nearest enemy and inflicts Action Speed - (-50% / -50) Ultimate Lv3 (-12% / -12) for 10 seconds",
        "effect": "1080% + 933 | Buff: Action Speed - (-50% / -50) Ultimate Lv3 (+-16 / +-16) (10s)"
      },
      {
        "rank": 4,
        "name": "Raise a Gale of Madness",
        "icon": "skill001/skill0003_4",
        "description": "Deals 1160% ATK + 1027 physical damage to the nearest enemy and inflicts Action Speed - (-50% / -50) Ultimate Lv4 (-14% / -14) for 10 seconds",
        "effect": "1160% + 1027 | Buff: Action Speed - (-50% / -50) Ultimate Lv4 (+-18 / +-18) (10s)"
      },
      {
        "rank": 5,
        "name": "Raise a Gale of Madness",
        "icon": "skill001/skill0003_5",
        "description": "Deals 1240% ATK + 1091 physical damage to the nearest enemy and inflicts Action Speed - (-50% / -50) Ultimate Lv5 (-15% / -15) for 10 seconds",
        "effect": "1240% + 1091 | Buff: Action Speed - (-50% / -50) Ultimate Lv5 (+-20 / +-20) (10s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Physical ATK UP",
        "icon": "skill001/skill1001",
        "effect": "Physical Attack (+108%) + (+259)"
      },
      {
        "slot": 2,
        "name": "Self Action Speed UP, Physical CRIT UP",
        "icon": "skill001/skill1001",
        "effect": "Action Speed + (+10 / +10)",
        "effect2": "Physical Critical Damage+ (+59)"
      }
    ],
    "name": "Guinevia",
    "id": 2039,
    "rarity": "SR",
    "element": "Dark",
    "role": "Attacker",
    "tags": [
      "Debuff"
    ],
    "baseStats": {
      "HP": 1566,
      "ATK": 314,
      "MATK": 188,
      "DEF": 126,
      "MDEF": 50
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2",
      "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "110% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "sr-guinevia"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Juuump—up we go～♪",
        "icon": "skill001/skill0005",
        "description": "Deals 110% ATK + 50 magic damage to the 3 nearest enemies",
        "target": "Nearest Enemy",
        "castTime": "1.08s",
        "damageScaling": "110% ATK",
        "baseDamage": "+50",
        "levelGrowth": "+10",
        "lvl1": "110% + 50",
        "lvl90": "110% + 940"
      },
      {
        "slot": 3,
        "name": "The noble princess makes her entrance～♪",
        "icon": "skill001/skill0011",
        "description": "Deals 90% ATK + 35 magic damage to the 3 nearest enemies and inflicts Charm for 3 seconds and Accuracy - Lv3 (-9) for 10 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.08s",
        "damageScaling": "90% ATK",
        "baseDamage": "+35",
        "levelGrowth": "+6",
        "lvl1": "90% + 35",
        "lvl90": "90% + 569",
        "effect": "Charm for 3s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "I’ll eat you up and bring peace to the world♪",
        "icon": "skill001/skill0006_1",
        "description": "Deals 360% ATK + 394 magic damage to the 3 nearest enemies and applies Magic Attack + (+20%) Ultimate Lv1 (+20%) to self for 10 seconds",
        "effect": "360% + 394 + 6% lifesteal | Buff: Magic Attack + (+20%) Ultimate Lv1 (+20) (10s)"
      },
      {
        "rank": 2,
        "name": "I’ll eat you up and bring peace to the world♪",
        "icon": "skill001/skill0006_2",
        "description": "Deals 450% ATK + 445 magic damage to the 3 nearest enemies and applies Magic Attack + (+20%) Ultimate Lv2 (+25%) to self for 10 seconds",
        "effect": "450% + 445 + 6% lifesteal | Buff: Magic Attack + (+20%) Ultimate Lv2 (+25) (10s)"
      },
      {
        "rank": 3,
        "name": "I’ll eat you up and bring peace to the world♪",
        "icon": "skill001/skill0006_3",
        "description": "Deals 522% ATK + 496 magic damage to the 3 nearest enemies and applies Magic Attack + (+20%) Ultimate Lv3 (+29%) to self for 10 seconds",
        "effect": "522% + 496 + 6% lifesteal | Buff: Magic Attack + (+20%) Ultimate Lv3 (+29) (10s)"
      },
      {
        "rank": 4,
        "name": "I’ll eat you up and bring peace to the world♪",
        "icon": "skill001/skill0006_4",
        "description": "Deals 579% ATK + 532 magic damage to the 3 nearest enemies and applies Magic Attack + (+20%) Ultimate Lv4 (+32%) to self for 10 seconds",
        "effect": "579% + 532 + 6% lifesteal | Buff: Magic Attack + (+20%) Ultimate Lv4 (+32) (10s)"
      },
      {
        "rank": 5,
        "name": "I’ll eat you up and bring peace to the world♪",
        "icon": "skill001/skill0006_5",
        "description": "Deals 612% ATK + 565 magic damage to the 3 nearest enemies and applies Magic Attack + (+20%) Ultimate Lv5 (+35%) to self for 10 seconds",
        "effect": "612% + 565 + 6% lifesteal | Buff: Magic Attack + (+20%) Ultimate Lv5 (+35) (10s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Charm Resist, Confusion Resist",
        "icon": "skill001/skill1003",
        "effect": "Charm Resistance LvMax (+1)",
        "effect2": "Confusion Resistance LvMax (+1)"
      },
      {
        "slot": 2,
        "name": "Self Magic ATK UP, Skill DMG UP",
        "icon": "skill001/skill1001",
        "effect": "Magic Attack + (+389)",
        "effect2": "Skill Damage + (+30)"
      }
    ],
    "name": "[Elegant Portrait] Shamshel",
    "id": 2040,
    "rarity": "SSR",
    "element": "Dark",
    "role": "Attacker",
    "tags": [
      "Debuff",
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
      "opening": "Skill3 → Basic → Basic → Skill2",
      "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic → Basic → Skill2"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "elegant-portrait-shamshel"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Magic: Explosion",
        "icon": "skill001/skill0011",
        "description": "Deals 110% ATK + 50 magic damage to the 3 nearest enemies and inflicts Burn LvMax (-200) for 10 seconds and Block- Lv4 (-11) for 5 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.38s",
        "damageScaling": "110% ATK",
        "baseDamage": "+50",
        "levelGrowth": "+6",
        "lvl1": "110% + 50",
        "lvl90": "110% + 584",
        "effect": "Burn LvMax (+-200) for 10s"
      },
      {
        "slot": 3,
        "name": "Magic: Healing",
        "icon": "skill001/skill0021",
        "description": "Restores HP by 1550% ATK + 300 to all allies",
        "target": "All Allies",
        "castTime": "1.38s",
        "damageScaling": "1550% ATK",
        "baseDamage": "+300",
        "levelGrowth": "+30",
        "lvl1": "1550% + 300",
        "lvl90": "1550% + 2970"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Magic: Shining Starlight",
        "icon": "skill001/skill0012_1",
        "description": "Deals 370% ATK + 410 magic damage to the 3 nearest enemies and inflicts Stun for 2 seconds and Burn (-1500) Ultimate Lv1 (-800) for 15 seconds",
        "effect": "370% + 410 | Buff: Stun (2s)"
      },
      {
        "rank": 2,
        "name": "Magic: Shining Starlight",
        "icon": "skill001/skill0012_2",
        "description": "Deals 459% ATK + 460 magic damage to the 3 nearest enemies and inflicts Stun for 2.5 seconds and Burn (-1500) Ultimate Lv2 (-1000) for 15 seconds",
        "effect": "459% + 460 | Buff: Stun (2.5s)"
      },
      {
        "rank": 3,
        "name": "Magic: Shining Starlight",
        "icon": "skill001/skill0012_3",
        "description": "Deals 530% ATK + 510 magic damage to the 3 nearest enemies and inflicts Stun for 2.5 seconds and Burn (-1500) Ultimate Lv3 (-1200) for 15 seconds",
        "effect": "530% + 510 | Buff: Stun (2.5s)"
      },
      {
        "rank": 4,
        "name": "Magic: Shining Starlight",
        "icon": "skill001/skill0012_4",
        "description": "Deals 590% ATK + 550 magic damage to the 3 nearest enemies and inflicts Stun for 3 seconds and Burn (-1500) Ultimate Lv4 (-1400) for 15 seconds",
        "effect": "590% + 550 | Buff: Stun (3s)"
      },
      {
        "rank": 5,
        "name": "Magic: Shining Starlight",
        "icon": "skill001/skill0012_5",
        "description": "Deals 620% ATK + 590 magic damage to the 3 nearest enemies and inflicts Stun for 3 seconds and Burn (-1500) Ultimate Lv5 (-1500) for 15 seconds",
        "effect": "620% + 590 | Buff: Stun (3s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self 攻擊Speed UP, Magic CRIT UP",
        "icon": "skill001/skill1001",
        "effect": "Action Speed + (+10 / +10)",
        "effect2": "Magic Critical Damage+ (+176)"
      },
      {
        "slot": 2,
        "name": "Self Max HP UP, Block UP",
        "icon": "skill001/skill1003",
        "effect": "Max HP + (+2896)",
        "effect2": "Block+ (+15)"
      }
    ],
    "name": "[Magical Princess] Luceria",
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
      "opening": "Skill2 → Basic → Skill3 → Basic → Basic",
      "loop": "Basic → Skill2 → Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "magical-princess-luceria"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Rage of the Giant Rock Soldier",
        "icon": "skill001/skill0007",
        "description": "Deals 110% ATK + 40 physical damage to the 3 nearest enemies and inflicts Action Speed - Lv5 (-20% / -20) for 8 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.58s",
        "damageScaling": "110% ATK",
        "baseDamage": "+40",
        "levelGrowth": "+8",
        "lvl1": "110% + 40",
        "lvl90": "110% + 752",
        "effect": "Action Speed - Lv5 (+-20 / +-20) for 8s"
      },
      {
        "slot": 3,
        "name": "Guardian of the Giant Rock Soldier",
        "icon": "skill001/skill0019",
        "description": "Applies Physical Healing Shield Lv4 (+350% / +25) to all allies for 12 seconds and Magic Healing Shield Lv4 (+350% / +25) for 12 seconds",
        "target": "All Allies",
        "castTime": "1.58s",
        "effect": "Physical Healing Shield Lv4 (+350 / +25) for 12s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Rampage of the Giant Rock Soldier",
        "icon": "skill001/skill0003_1",
        "description": "Deals 900% ATK + 920 physical damage to the nearest enemy and inflicts Physical Attack (+108%) - (-10% / -50) Ultimate Lv1 (-10%) for 10 seconds and Magic Attack - (-10% / -50) Ultimate Lv1 (-15%) for 10 seconds",
        "effect": "900% + 920 | Buff: Physical Attack (+108%) - (-10% / -50) Ultimate Lv1 (+-15) (10s)"
      },
      {
        "rank": 2,
        "name": "Rampage of the Giant Rock Soldier",
        "icon": "skill001/skill0003_2",
        "description": "Deals 1080% ATK + 950 physical damage to the nearest enemy and inflicts Physical Attack (+108%) - (-10% / -50) Ultimate Lv2 (-13%) for 10 seconds and Magic Attack - (-10% / -50) Ultimate Lv2 (-20%) for 10 seconds",
        "effect": "1080% + 950 | Buff: Physical Attack (+108%) - (-10% / -50) Ultimate Lv2 (+-20) (10s)"
      },
      {
        "rank": 3,
        "name": "Rampage of the Giant Rock Soldier",
        "icon": "skill001/skill0003_3",
        "description": "Deals 1210% ATK + 1200 physical damage to the nearest enemy and inflicts Physical Attack (+108%) - (-10% / -50) Ultimate Lv3 (-16%) for 10 seconds and Magic Attack - (-10% / -50) Ultimate Lv3 (-24%) for 10 seconds",
        "effect": "1210% + 1200 | Buff: Physical Attack (+108%) - (-10% / -50) Ultimate Lv3 (+-24) (10s)"
      },
      {
        "rank": 4,
        "name": "Rampage of the Giant Rock Soldier",
        "icon": "skill001/skill0003_4",
        "description": "Deals 1300% ATK + 1300 physical damage to the nearest enemy and inflicts Physical Attack (+108%) - (-10% / -50) Ultimate Lv4 (-18%) for 10 seconds and Magic Attack - (-10% / -50) Ultimate Lv4 (-27%) for 10 seconds",
        "effect": "1300% + 1300 | Buff: Physical Attack (+108%) - (-10% / -50) Ultimate Lv4 (+-27) (10s)"
      },
      {
        "rank": 5,
        "name": "Rampage of the Giant Rock Soldier",
        "icon": "skill001/skill0003_5",
        "description": "Deals 1390% ATK + 1400 physical damage to the nearest enemy and inflicts Physical Attack (+108%) - (-10% / -50) Ultimate Lv5 (-20%) for 10 seconds and Magic Attack - (-10% / -50) Ultimate Lv5 (-30%) for 10 seconds",
        "effect": "1390% + 1400 | Buff: Physical Attack (+108%) - (-10% / -50) Ultimate Lv5 (+-30) (10s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Magic DEF UP, Max HP UP",
        "icon": "skill001/skill1002",
        "effect": "Magic Defense+ (+141)",
        "effect2": "Max HP + (+3444)"
      },
      {
        "slot": 2,
        "name": "Self Physical ATK UP, Physical CRIT UP",
        "icon": "skill001/skill1001",
        "effect": "Physical Attack (+108%) + (+159)",
        "effect2": "Physical Critical Damage+ (+90)"
      }
    ],
    "name": "[Messenger of Stone Soldiers] Nerys",
    "id": 2042,
    "rarity": "SSR",
    "element": "Mind",
    "role": "Support",
    "tags": [
      "Buff",
      "Debuff"
    ],
    "baseStats": {
      "HP": 2965,
      "ATK": 263,
      "MATK": 158,
      "DEF": 82,
      "MDEF": 32
    },
    "skillRotation": {
      "opening": "Skill3 → Basic → Skill2 → Basic → Basic",
      "loop": "Basic → Skill3 → Basic → Basic → Basic → Skill2 → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Slow",
      "speedValue": "1.11"
    },
    "slug": "golem-summoner-nerys"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Light Beam by Instinct!",
        "icon": "skill001/skill0011",
        "description": "Deals 85% ATK + 60 magic damage to the 3 nearest enemies and inflicts Freeze Lv5 (-650) for 3 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.08s",
        "damageScaling": "85% ATK",
        "baseDamage": "+60",
        "levelGrowth": "+8",
        "lvl1": "85% + 60",
        "lvl90": "85% + 772",
        "effect": "Freeze Lv5 (+-650) for 3s"
      },
      {
        "slot": 3,
        "name": "Book Attack!",
        "icon": "skill001/skill0011",
        "description": "Deals 100% ATK + 90 magic damage to the 3 nearest enemies and inflicts Paralysis for 5 seconds and Accuracy - Lv4 (-11) for 8 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.08s",
        "damageScaling": "100% ATK",
        "baseDamage": "+90",
        "levelGrowth": "+8",
        "lvl1": "100% + 90",
        "lvl90": "100% + 802",
        "effect": "Paralysis for 5s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Eliminate you all",
        "icon": "skill001/skill0012_1",
        "description": "Deals 500% ATK + 350 magic damage to all enemies and inflicts Freeze (-2500) Ultimate Lv1 (-2500) for 3 seconds and inflicts Paralysis for 7 seconds",
        "effect": "500% + 350 | Buff: Freeze (-2500) Ultimate Lv1 (+-2500) (3s)"
      },
      {
        "rank": 2,
        "name": "Eliminate you all",
        "icon": "skill001/skill0012_2",
        "description": "Deals 700% ATK + 470 magic damage to all enemies and inflicts Freeze (-2500) Ultimate Lv2 (-3500) for 3 seconds and inflicts Paralysis for 8 seconds",
        "effect": "700% + 470 | Buff: Freeze (-2500) Ultimate Lv2 (+-3500) (3s)"
      },
      {
        "rank": 3,
        "name": "Eliminate you all",
        "icon": "skill001/skill0012_3",
        "description": "Deals 850% ATK + 522 magic damage to all enemies and inflicts Freeze (-2500) Ultimate Lv3 (-4000) for 3 seconds and inflicts Paralysis for 8 seconds",
        "effect": "850% + 522 | Buff: Freeze (-2500) Ultimate Lv3 (+-4000) (3s)"
      },
      {
        "rank": 4,
        "name": "Eliminate you all",
        "icon": "skill001/skill0012_4",
        "description": "Deals 950% ATK + 580 magic damage to all enemies and inflicts Freeze (-2500) Ultimate Lv4 (-4500) for 3 seconds and inflicts Paralysis for 9 seconds",
        "effect": "950% + 580 | Buff: Freeze (-2500) Ultimate Lv4 (+-4500) (3s)"
      },
      {
        "rank": 5,
        "name": "Eliminate you all",
        "icon": "skill001/skill0012_5",
        "description": "Deals 1000% ATK + 645 magic damage to all enemies and inflicts Freeze (-2500) Ultimate Lv5 (-5000) for 3 seconds and inflicts Paralysis for 9 seconds",
        "effect": "1000% + 645 | Buff: Freeze (-2500) Ultimate Lv5 (+-5000) (3s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Freeze (-2500) Resist, Paralysis Resist",
        "icon": "skill001/skill1003",
        "effect": "Freeze (-2500) Resistance LvMax (+1)",
        "effect2": "Paralysis Resistance LvMax (+1)"
      },
      {
        "slot": 2,
        "name": "Self Magic ATK UP, Skill DMG UP",
        "icon": "skill001/skill1001",
        "effect": "Magic Attack + (+389)",
        "effect2": "Skill Damage + (+30)"
      }
    ],
    "name": "[Swift-Chant Sorceress] Sobrina",
    "id": 2043,
    "rarity": "SSR",
    "element": "Mind",
    "role": "Attacker",
    "tags": [
      "Disrupt",
      "Debuff"
    ],
    "baseStats": {
      "HP": 2092,
      "ATK": 168,
      "MATK": 281,
      "DEF": 32,
      "MDEF": 82
    },
    "skillRotation": {
      "opening": "Skill2 → Basic → Basic → Skill3 → Basic",
      "loop": "Basic → Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "120% ATK",
      "speedLabel": "Fast",
      "speedValue": "0.61"
    },
    "slug": "mage-of-bastinton-sobrina"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Londo of Light",
        "icon": "skill001/skill0007",
        "description": "Deals 90% ATK + 50 physical damage to the 3 nearest enemies and inflicts Physical Defense - Lv4 (-21% / -40) for 10 seconds and Accuracy - Lv4 (-11) for 10 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.08s",
        "damageScaling": "90% ATK",
        "baseDamage": "+50",
        "levelGrowth": "+6",
        "lvl1": "90% + 50",
        "lvl90": "90% + 584",
        "effect": "Physical Defense - Lv4 (+-21 / +-40) for 10s"
      },
      {
        "slot": 3,
        "name": "Dancing Performance",
        "icon": "skill001/skill0019",
        "description": "Applies Physical Attack (+108%) + Lv3 (+15% / +30) to all allies for 10 seconds and Physical Critical Damage+ Lv3 (+40) for 10 seconds",
        "target": "All Allies",
        "castTime": "1.08s",
        "effect": "Physical Attack (+108%) + Lv3 (+15 / +30) for 10s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Prayer in the Sea of Stars",
        "icon": "skill001/skill0022_1",
        "description": "Restores HP by 2000% ATK + 1097 to all allies and inflicts Action Speed + (+5% / +5) Ultimate Lv1 (+8% / +8) for 12 seconds and Block+ (+10) Ultimate Lv1 (+10) for 12 seconds",
        "effect": "2000% + 1097 | Buff: Action Speed + (+5% / +5) Ultimate Lv1 (+10 / +10) (12s)"
      },
      {
        "rank": 2,
        "name": "Prayer in the Sea of Stars",
        "icon": "skill001/skill0022_2",
        "description": "Restores HP by 2300% ATK + 1250 to all allies and inflicts Action Speed + (+5% / +5) Ultimate Lv2 (+10% / +10) for 12 seconds and Block+ (+10) Ultimate Lv2 (+13) for 12 seconds",
        "effect": "2300% + 1250 | Buff: Action Speed + (+5% / +5) Ultimate Lv2 (+13 / +13) (12s)"
      },
      {
        "rank": 3,
        "name": "Prayer in the Sea of Stars",
        "icon": "skill001/skill0022_3",
        "description": "Restores HP by 2500% ATK + 1394 to all allies and inflicts Action Speed + (+5% / +5) Ultimate Lv3 (+12% / +12) for 12 seconds and Block+ (+10) Ultimate Lv3 (+16) for 12 seconds",
        "effect": "2500% + 1394 | Buff: Action Speed + (+5% / +5) Ultimate Lv3 (+16 / +16) (12s)"
      },
      {
        "rank": 4,
        "name": "Prayer in the Sea of Stars",
        "icon": "skill001/skill0022_4",
        "description": "Restores HP by 2700% ATK + 1489 to all allies and inflicts Action Speed + (+5% / +5) Ultimate Lv4 (+14% / +14) for 12 seconds and Block+ (+10) Ultimate Lv4 (+18) for 12 seconds",
        "effect": "2700% + 1489 | Buff: Action Speed + (+5% / +5) Ultimate Lv4 (+18 / +18) (12s)"
      },
      {
        "rank": 5,
        "name": "Prayer in the Sea of Stars",
        "icon": "skill001/skill0022_5",
        "description": "Restores HP by 2800% ATK + 1563 to all allies and inflicts Action Speed + (+5% / +5) Ultimate Lv5 (+15% / +15) for 12 seconds and Block+ (+10) Ultimate Lv5 (+20) for 12 seconds",
        "effect": "2800% + 1563 | Buff: Action Speed + (+5% / +5) Ultimate Lv5 (+20 / +20) (12s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "All AlliesPhysical ATK UP, Skill DMG UP",
        "icon": "skill001/skill1001",
        "effect": "Skill Damage + (+10)",
        "effect2": "Physical Attack (+108%) + (+130)"
      },
      {
        "slot": 2,
        "name": "All AlliesBlock UP, Speed UP",
        "icon": "skill001/skill1007",
        "effect": "Block+ (+10)",
        "effect2": "Action Speed + (+10 / +10)"
      }
    ],
    "name": "[Trance Dancer] Messeria",
    "id": 2044,
    "rarity": "SSR",
    "element": "Wind",
    "role": "Support",
    "tags": [
      "Heal",
      "Buff",
      "Debuff"
    ],
    "baseStats": {
      "HP": 1913,
      "ATK": 221,
      "MATK": 132,
      "DEF": 226,
      "MDEF": 90
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic",
      "loop": "Basic → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Fast",
      "speedValue": "0.61"
    },
    "slug": "hypnotic-dancer-messeria"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "O God, drive away evil with Your pure light",
        "icon": "skill001/skill0010",
        "description": "Deals 100% ATK + 40 magic damage to the 3 nearest enemies and inflicts Magic Attack - Lv3 (-9% / -20) for 12 seconds and Magic Defense- Lv3 (-18% / -30) for 12 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.38s",
        "damageScaling": "100% ATK",
        "baseDamage": "+40",
        "levelGrowth": "+6",
        "lvl1": "100% + 40",
        "lvl90": "100% + 574",
        "effect": "Magic Attack - Lv3 (+-9 / +-20) for 12s"
      },
      {
        "slot": 3,
        "name": "O God, save those possessed by darkness",
        "icon": "skill001/skill0021",
        "description": "Restores HP by 1700% ATK + 370 to all alliesand removes debuffs and inflicts Block+ Lv4 (+11) for 10 seconds",
        "target": "All Allies",
        "castTime": "1.38s",
        "damageScaling": "1700% ATK",
        "baseDamage": "+370",
        "levelGrowth": "+40",
        "lvl1": "1700% + 370",
        "lvl90": "1700% + 3930",
        "effect": "Block+ Lv4 (+11) for 10s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "O God, please guide us with Your light",
        "icon": "skill001/skill0022_1",
        "description": "Restores HP by 2700% ATK + 1239 to all allies and inflicts HP Regeneration+ (+2%) Ultimate Lv1 (+10%) for 6 seconds and Hit-Based Magic Healing Shield (+450% / +35) Ultimate Lv1 (+20% / +6) for 20 seconds",
        "effect": "2700% + 1239 | Buff: HP Regeneration+ (+2%) Ultimate Lv1 (+6) (6s)"
      },
      {
        "rank": 2,
        "name": "O God, please guide us with Your light",
        "icon": "skill001/skill0022_2",
        "description": "Restores HP by 3105% ATK + 1476 to all allies and inflicts HP Regeneration+ (+2%) Ultimate Lv2 (+13%) for 6 seconds and Hit-Based Magic Healing Shield (+450% / +35) Ultimate Lv2 (+26% / +6) for 20 seconds",
        "effect": "3105% + 1476 | Buff: HP Regeneration+ (+2%) Ultimate Lv2 (+7) (6s)"
      },
      {
        "rank": 3,
        "name": "O God, please guide us with Your light",
        "icon": "skill001/skill0022_3",
        "description": "Restores HP by 3375% ATK + 1606 to all allies and inflicts HP Regeneration+ (+2%) Ultimate Lv3 (+16%) for 6 seconds and Hit-Based Magic Healing Shield (+450% / +35) Ultimate Lv3 (+32% / +7) for 20 seconds",
        "effect": "3375% + 1606 | Buff: HP Regeneration+ (+2%) Ultimate Lv3 (+8) (6s)"
      },
      {
        "rank": 4,
        "name": "O God, please guide us with Your light",
        "icon": "skill001/skill0022_4",
        "description": "Restores HP by 3645% ATK + 1783 to all allies and inflicts HP Regeneration+ (+2%) Ultimate Lv4 (+18%) for 6 seconds and Hit-Based Magic Healing Shield (+450% / +35) Ultimate Lv4 (+36% / +7) for 20 seconds",
        "effect": "3645% + 1783 | Buff: HP Regeneration+ (+2%) Ultimate Lv4 (+9) (6s)"
      },
      {
        "rank": 5,
        "name": "O God, please guide us with Your light",
        "icon": "skill001/skill0022_5",
        "description": "Restores HP by 3779% ATK + 1960 to all allies and inflicts HP Regeneration+ (+2%) Ultimate Lv5 (+20%) for 6 seconds and Hit-Based Magic Healing Shield (+450% / +35) Ultimate Lv5 (+40% / +8) for 20 seconds",
        "effect": "3779% + 1960 | Buff: HP Regeneration+ (+2%) Ultimate Lv5 (+10) (6s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Magic ATK UP, Magic DEF UP",
        "icon": "skill001/skill1001",
        "effect": "Magic Attack + (+259)",
        "effect2": "Magic Defense+ (+141)"
      },
      {
        "slot": 2,
        "name": "Front Row AlliesMagic DEF UP, Max HP UP",
        "icon": "skill001/skill1007",
        "effect": "Magic Defense+ (+141)",
        "effect2": "Max HP + (+1447)"
      }
    ],
    "name": "[Pious Healer] Ishtovia",
    "id": 2045,
    "rarity": "SSR",
    "element": "Holy",
    "role": "Support",
    "tags": [
      "Heal",
      "Buff",
      "Debuff",
      "Cleanse"
    ],
    "baseStats": {
      "HP": 2745,
      "ATK": 151,
      "MATK": 253,
      "DEF": 32,
      "MDEF": 82
    },
    "skillRotation": {
      "opening": "Skill2 → Basic → Skill3 → Basic",
      "loop": "Basic → Basic → Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "pious-cleric-ishtovia"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Lightning Blade Strike",
        "icon": "skill001/skill0011",
        "description": "Deals 310% ATK + 160 magic damage to the nearest enemy and inflicts Stun for 1.5 seconds and Magic Defense- Lv4 (-21% / -40) for 8 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.38s",
        "damageScaling": "310% ATK",
        "baseDamage": "+160",
        "levelGrowth": "+20",
        "lvl1": "310% + 160",
        "lvl90": "310% + 1940",
        "effect": "Stun for 1.5s"
      },
      {
        "slot": 3,
        "name": "Winged Lightning",
        "icon": "skill001/skill0019",
        "description": "Applies Magic Attack + Lv4 (+18% / +35) to self for 10 seconds and Magic Critical Damage+ Lv4 (+50) for 10 seconds",
        "target": "Self",
        "castTime": "1.38s",
        "effect": "Magic Attack + Lv4 (+18 / +35) for 10s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Storm Claw",
        "icon": "skill001/skill0006_1",
        "description": "Deals 1000% ATK + 885 magic damage to the nearest enemy and applies Mind Type ATK + (+30%) Ultimate Lv1 (+10%) to self for 8 seconds",
        "effect": "1000% + 885 | Buff: Mind Type ATK + (+30%) Ultimate Lv1 (+10) (8s)"
      },
      {
        "rank": 2,
        "name": "Storm Claw",
        "icon": "skill001/skill0006_2",
        "description": "Deals 1200% ATK + 1022 magic damage to the nearest enemy and applies Mind Type ATK + (+30%) Ultimate Lv2 (+13%) to self for 8 seconds",
        "effect": "1200% + 1022 | Buff: Mind Type ATK + (+30%) Ultimate Lv2 (+13) (8s)"
      },
      {
        "rank": 3,
        "name": "Storm Claw",
        "icon": "skill001/skill0006_3",
        "description": "Deals 1350% ATK + 1153 magic damage to the nearest enemy and applies Mind Type ATK + (+30%) Ultimate Lv3 (+16%) to self for 9 seconds",
        "effect": "1350% + 1153 | Buff: Mind Type ATK + (+30%) Ultimate Lv3 (+16) (9s)"
      },
      {
        "rank": 4,
        "name": "Storm Claw",
        "icon": "skill001/skill0006_4",
        "description": "Deals 1450% ATK + 1307 magic damage to the nearest enemy and applies Mind Type ATK + (+30%) Ultimate Lv4 (+18%) to self for 9 seconds",
        "effect": "1450% + 1307 | Buff: Mind Type ATK + (+30%) Ultimate Lv4 (+18) (9s)"
      },
      {
        "rank": 5,
        "name": "Storm Claw",
        "icon": "skill001/skill0006_5",
        "description": "Deals 1500% ATK + 1461 magic damage to the nearest enemy and applies Mind Type ATK + (+30%) Ultimate Lv5 (+20%) to self for 10 seconds",
        "effect": "1500% + 1461 | Buff: Mind Type ATK + (+30%) Ultimate Lv5 (+20) (10s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Speed UP, Block UP",
        "icon": "skill001/skill1003",
        "effect": "Action Speed + (+10 / +10)",
        "effect2": "Block+ (+15)"
      },
      {
        "slot": 2,
        "name": "Self 想屬性攻擊UP, Magic ATK UP",
        "icon": "skill001/skill1001",
        "effect": "Mind Type ATK + (+10)",
        "effect2": "Magic Attack + (+389)"
      }
    ],
    "name": "Teresia",
    "id": 2046,
    "rarity": "SSR",
    "element": "Mind",
    "role": "Attacker",
    "tags": [
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 2092,
      "ATK": 206,
      "MATK": 343,
      "DEF": 32,
      "MDEF": 82
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic",
      "loop": "Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "theresia"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Shikomaru",
        "icon": "skill001/skill0011",
        "description": "Deals 350% ATK + 140 physical damage to the nearest enemyand inflicts Paralysis for 6 seconds and inflicts Silence for 6 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.08s",
        "damageScaling": "350% ATK",
        "baseDamage": "+140",
        "levelGrowth": "+20",
        "lvl1": "350% + 140",
        "lvl90": "350% + 1920",
        "effect": "Paralysis for 6s"
      },
      {
        "slot": 3,
        "name": "Millionfold",
        "icon": "skill001/skill0019",
        "description": "Applies Physical Defense + Lv5 (+30% / +190) to self for 10 seconds and Block+ Lv5 (+13) for 10 seconds",
        "target": "Self",
        "castTime": "1.08s",
        "effect": "Physical Defense + Lv5 (+30 / +190) for 10s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Iron Immortal Blossom",
        "icon": "skill001/skill0003_1",
        "description": "Deals 360% ATK + 338 physical damage to the 3 nearest enemies and inflicts Physical Defense - (-15% / -200) Ultimate Lv1 (-10%) for 10 seconds and Action Speed - (-50% / -50) Ultimate Lv1 (-8% / -8) for 10 seconds",
        "effect": "360% + 338 | Buff: Physical Defense - (-15% / -200) Ultimate Lv1 (+-15 / +-250) (10s)"
      },
      {
        "rank": 2,
        "name": "Iron Immortal Blossom",
        "icon": "skill001/skill0003_2",
        "description": "Deals 420% ATK + 379 physical damage to the 3 nearest enemies and inflicts Physical Defense - (-15% / -200) Ultimate Lv2 (-13%) for 10 seconds and Action Speed - (-50% / -50) Ultimate Lv2 (-10% / -10) for 10 seconds",
        "effect": "420% + 379 | Buff: Physical Defense - (-15% / -200) Ultimate Lv2 (+-20 / +-300) (10s)"
      },
      {
        "rank": 3,
        "name": "Iron Immortal Blossom",
        "icon": "skill001/skill0003_3",
        "description": "Deals 470% ATK + 421 physical damage to the 3 nearest enemies and inflicts Physical Defense - (-15% / -200) Ultimate Lv3 (-16%) for 10 seconds and Action Speed - (-50% / -50) Ultimate Lv3 (-12% / -12) for 10 seconds",
        "effect": "470% + 421 | Buff: Physical Defense - (-15% / -200) Ultimate Lv3 (+-24 / +-340) (10s)"
      },
      {
        "rank": 4,
        "name": "Iron Immortal Blossom",
        "icon": "skill001/skill0003_4",
        "description": "Deals 509% ATK + 465 physical damage to the 3 nearest enemies and inflicts Physical Defense - (-15% / -200) Ultimate Lv4 (-18%) for 10 seconds and Action Speed - (-50% / -50) Ultimate Lv4 (-14% / -14) for 10 seconds",
        "effect": "509% + 465 | Buff: Physical Defense - (-15% / -200) Ultimate Lv4 (+-27 / +-370) (10s)"
      },
      {
        "rank": 5,
        "name": "Iron Immortal Blossom",
        "icon": "skill001/skill0003_5",
        "description": "Deals 550% ATK + 501 physical damage to the 3 nearest enemies and inflicts Physical Defense - (-15% / -200) Ultimate Lv5 (-20%) for 10 seconds and Action Speed - (-50% / -50) Ultimate Lv5 (-15% / -15) for 10 seconds",
        "effect": "550% + 501 | Buff: Physical Defense - (-15% / -200) Ultimate Lv5 (+-30 / +-400) (10s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Physical ATK UP, Physical DEF UP",
        "icon": "skill001/skill1001",
        "effect": "Physical Attack (+108%) + (+159)",
        "effect2": "Physical Defense + (+211)"
      },
      {
        "slot": 2,
        "name": "Self Physical CRIT UP, Block UP",
        "icon": "skill001/skill1001",
        "effect": "Physical Critical Damage+ (+176)",
        "effect2": "Block+ (+15)"
      }
    ],
    "name": "Soltina",
    "id": 2047,
    "rarity": "SSR",
    "element": "Dark",
    "role": "Attacker",
    "tags": [
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 1200,
      "ATK": 281,
      "MATK": 168,
      "DEF": 343,
      "MDEF": 137
    },
    "skillRotation": {
      "opening": "Skill2 → Skill3 → Basic → Basic → Basic",
      "loop": "Basic → Basic → Skill3 → Basic → Basic → Basic → Basic → Skill2 → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Fast",
      "speedValue": "0.61"
    },
    "slug": "soltina"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Royal Knight’s Teachings",
        "icon": "skill001/skill0019",
        "description": "Restores own HP by 2500% ATK + 416 and inflicts Block+ LvMax (+15) for 10 seconds and Healing Shield Lv5 (+300% / +25) for 10 seconds",
        "target": "Self",
        "castTime": "1.58s",
        "damageScaling": "2500% ATK",
        "baseDamage": "+416",
        "levelGrowth": "+50",
        "lvl1": "2500% + 416",
        "lvl90": "2500% + 4866",
        "effect": "Block+ LvMax (+15) for 10s"
      },
      {
        "slot": 3,
        "name": "Beorn Holy Sword Arts: Heroic Strike",
        "icon": "skill001/skill0007",
        "description": "Deals 300% ATK + 100 physical damage to the nearest enemy and inflicts Accuracy - LvMax (-15) for 10 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.58s",
        "damageScaling": "300% ATK",
        "baseDamage": "+100",
        "levelGrowth": "+25",
        "lvl1": "300% + 100",
        "lvl90": "300% + 2325",
        "effect": "Accuracy - LvMax (+-15) for 10s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Meteor Trestias",
        "icon": "skill001/skill0003_1",
        "description": "Deals 300% ATK + 338 physical damage to the 3 nearest enemies and applies Hit-Based Shield (+30% / +1) Ultimate Lv1 (+20% / +999) to self for 8 seconds and Taunt for 8 seconds",
        "effect": "300% + 338 | Buff: Hit-Based Shield (+30% / +1) Ultimate Lv1 (+35 / +999) (8s)"
      },
      {
        "rank": 2,
        "name": "Meteor Trestias",
        "icon": "skill001/skill0003_2",
        "description": "Deals 360% ATK + 380 physical damage to the 3 nearest enemies and applies Hit-Based Shield (+30% / +1) Ultimate Lv2 (+25% / +999) to self for 10 seconds and Taunt for 10 seconds",
        "effect": "360% + 380 | Buff: Hit-Based Shield (+30% / +1) Ultimate Lv2 (+45 / +999) (10s)"
      },
      {
        "rank": 3,
        "name": "Meteor Trestias",
        "icon": "skill001/skill0003_3",
        "description": "Deals 405% ATK + 425 physical damage to the 3 nearest enemies and applies Hit-Based Shield (+30% / +1) Ultimate Lv3 (+25% / +999) to self for 11 seconds and Taunt for 11 seconds",
        "effect": "405% + 425 | Buff: Hit-Based Shield (+30% / +1) Ultimate Lv3 (+50 / +999) (11s)"
      },
      {
        "rank": 4,
        "name": "Meteor Trestias",
        "icon": "skill001/skill0003_4",
        "description": "Deals 434% ATK + 469 physical damage to the 3 nearest enemies and applies Hit-Based Shield (+30% / +1) Ultimate Lv4 (+30% / +999) to self for 12 seconds and Taunt for 12 seconds",
        "effect": "434% + 469 | Buff: Hit-Based Shield (+30% / +1) Ultimate Lv4 (+55 / +999) (12s)"
      },
      {
        "rank": 5,
        "name": "Meteor Trestias",
        "icon": "skill001/skill0003_5",
        "description": "Deals 450% ATK + 512 physical damage to the 3 nearest enemies and applies Hit-Based Shield (+30% / +1) Ultimate Lv5 (+30% / +999) to self for 13 seconds and Taunt for 13 seconds",
        "effect": "450% + 512 | Buff: Hit-Based Shield (+30% / +1) Ultimate Lv5 (+60 / +999) (13s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Physical DEF UP, Max HP UP",
        "icon": "skill001/skill1003",
        "effect": "Physical Attack (+108%) + (+159)",
        "effect2": "Max HP + (+3444)"
      },
      {
        "slot": 2,
        "name": "Front Row AlliesPhysical DEF UP, Block UP",
        "icon": "skill001/skill1006",
        "effect": "Physical Defense + (+141)",
        "effect2": "Block+ (+20)"
      }
    ],
    "name": "Artia",
    "id": 2048,
    "rarity": "SSR",
    "element": "Fire",
    "role": "Tank",
    "tags": [
      "Debuff",
      "Disrupt",
      "Taunt"
    ],
    "baseStats": {
      "HP": 2369,
      "ATK": 232,
      "MATK": 139,
      "DEF": 226,
      "MDEF": 90
    },
    "skillRotation": {
      "opening": "Skill3 → Basic → Skill2 → Basic",
      "loop": "Basic → Basic → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Slow",
      "speedValue": "1.11"
    },
    "slug": "artia"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Dual Demon Swords",
        "icon": "skill001/skill0010",
        "description": "Deals 210% ATK + 160 magic damage to the nearest enemy and inflicts Magic Defense- Lv4 (-21% / -40) for 10 seconds and Magic Type Defense - Lv5 (-20%) for 10 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.78s",
        "damageScaling": "210% ATK",
        "baseDamage": "+160",
        "levelGrowth": "+20",
        "lvl1": "210% + 160",
        "lvl90": "210% + 1940",
        "effect": "Magic Defense- Lv4 (+-21 / +-40) for 10s"
      },
      {
        "slot": 3,
        "name": "Enchantment Blade",
        "icon": "skill001/skill0008",
        "description": "Deals 240% ATK + 160 magic damage to the nearest enemy and inflicts Physical Attack (+108%) - Lv4 (-11% / -25) for 10 seconds and Magic Attack - Lv4 (-11% / -25) for 10 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.78s",
        "damageScaling": "240% ATK",
        "baseDamage": "+160",
        "levelGrowth": "+20",
        "lvl1": "240% + 160",
        "lvl90": "240% + 1940",
        "effect": "Physical Attack (+108%) - Lv4 (+-11 / +-25) for 10s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Taboo of the Calamity God of the Dead’s Sin Mark",
        "icon": "skill001/skill0012_1",
        "description": "Deals 300% ATK + 402 magic damage to the 3 nearest enemiesand inflicts Curse for 10 seconds and Fear (Lv1) for 3 seconds",
        "effect": "300% + 402 | Buff: Curse (10s)"
      },
      {
        "rank": 2,
        "name": "Taboo of the Calamity God of the Dead’s Sin Mark",
        "icon": "skill001/skill0012_2",
        "description": "Deals 360% ATK + 457 magic damage to the 3 nearest enemiesand inflicts Curse for 10 seconds and Fear (Lv2) for 3 seconds",
        "effect": "360% + 457 | Buff: Curse (10s)"
      },
      {
        "rank": 3,
        "name": "Taboo of the Calamity God of the Dead’s Sin Mark",
        "icon": "skill001/skill0012_3",
        "description": "Deals 405% ATK + 501 magic damage to the 3 nearest enemiesand inflicts Curse for 10 seconds and Fear (Lv3) for 3 seconds",
        "effect": "405% + 501 | Buff: Curse (10s)"
      },
      {
        "rank": 4,
        "name": "Taboo of the Calamity God of the Dead’s Sin Mark",
        "icon": "skill001/skill0012_4",
        "description": "Deals 434% ATK + 566 magic damage to the 3 nearest enemiesand inflicts Curse for 10 seconds and Fear (Lv4) for 3 seconds",
        "effect": "434% + 566 | Buff: Curse (10s)"
      },
      {
        "rank": 5,
        "name": "Taboo of the Calamity God of the Dead’s Sin Mark",
        "icon": "skill001/skill0012_5",
        "description": "Deals 450% ATK + 611 magic damage to the 3 nearest enemiesand inflicts Curse for 10 seconds and Fear (Lv5) for 3 seconds",
        "effect": "450% + 611 | Buff: Curse (10s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Magic CRIT UP, Speed UP",
        "icon": "skill001/skill1001",
        "effect": "Magic Critical Damage+ (+90)",
        "effect2": "Action Speed + (+10 / +10)"
      },
      {
        "slot": 2,
        "name": "Self 魔屬性攻擊UP, Magic ATK UP",
        "icon": "skill001/skill1001",
        "effect": "Magic Type ATK + (+10)",
        "effect2": "Magic Attack + (+389)"
      }
    ],
    "name": "The Dark Knight",
    "id": 2049,
    "rarity": "SSR",
    "element": "Dark",
    "role": "Attacker",
    "tags": [
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 1819,
      "ATK": 257,
      "MATK": 429,
      "DEF": 57,
      "MDEF": 143
    },
    "skillRotation": {
      "opening": "Skill2 → Skill3 → Basic",
      "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "120% ATK",
      "speedLabel": "Very Slow",
      "speedValue": "1.36"
    },
    "slug": "the-dark-knight"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Area Heal",
        "icon": "skill001/skill0021",
        "description": "Restores HP by 2500% ATK + 1000 to all allies and inflicts HP Regeneration+ Lv3 (+5% / +150) for 3 seconds",
        "target": "All Allies",
        "castTime": "1.38s",
        "damageScaling": "2500% ATK",
        "baseDamage": "+1000",
        "levelGrowth": "+40",
        "lvl1": "2500% + 1000",
        "lvl90": "2500% + 4560",
        "effect": "HP Regeneration+ Lv3 (+5 / +150) for 3s"
      },
      {
        "slot": 3,
        "name": "Cam",
        "icon": "skill001/skill0021",
        "description": "Restores HP by 1500% ATK + 500 to all alliesand removes debuffs",
        "target": "All Allies",
        "castTime": "1.38s",
        "damageScaling": "1500% ATK",
        "baseDamage": "+500",
        "levelGrowth": "+40",
        "lvl1": "1500% + 500",
        "lvl90": "1500% + 4060",
        "effect": "Debuff Resistance LvMax (+1) for s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Gentle White Lily’s Embrace",
        "icon": "skill001/skill0022_1",
        "description": "Restores HP by 4000% ATK + 1000 to all allies and inflicts Hit-Based Physical Healing Shield (+450% / +35) Ultimate Lv1 (+30% / +3) for 20 seconds and Hit-Based Magic Healing Shield (+450% / +35) Ultimate Lv1 (+20% / +6) for 20 seconds",
        "effect": "4000% + 1000 | Buff: Hit-Based Physical Healing Shield (+450% / +35) Ultimate Lv1 (+30 / +3) (20s)"
      },
      {
        "rank": 2,
        "name": "Gentle White Lily’s Embrace",
        "icon": "skill001/skill0022_2",
        "description": "Restores HP by 4800% ATK + 1500 to all allies and inflicts Hit-Based Physical Healing Shield (+450% / +35) Ultimate Lv2 (+36% / +3) for 20 seconds and Hit-Based Magic Healing Shield (+450% / +35) Ultimate Lv2 (+26% / +6) for 20 seconds",
        "effect": "4800% + 1500 | Buff: Hit-Based Physical Healing Shield (+450% / +35) Ultimate Lv2 (+36 / +3) (20s)"
      },
      {
        "rank": 3,
        "name": "Gentle White Lily’s Embrace",
        "icon": "skill001/skill0022_3",
        "description": "Restores HP by 5500% ATK + 2000 to all allies and inflicts Hit-Based Physical Healing Shield (+450% / +35) Ultimate Lv3 (+42% / +4) for 20 seconds and Hit-Based Magic Healing Shield (+450% / +35) Ultimate Lv3 (+32% / +7) for 20 seconds",
        "effect": "5500% + 2000 | Buff: Hit-Based Physical Healing Shield (+450% / +35) Ultimate Lv3 (+42 / +4) (20s)"
      },
      {
        "rank": 4,
        "name": "Gentle White Lily’s Embrace",
        "icon": "skill001/skill0022_4",
        "description": "Restores HP by 6000% ATK + 2300 to all allies and inflicts Hit-Based Physical Healing Shield (+450% / +35) Ultimate Lv4 (+46% / +4) for 20 seconds and Hit-Based Magic Healing Shield (+450% / +35) Ultimate Lv4 (+36% / +7) for 20 seconds",
        "effect": "6000% + 2300 | Buff: Hit-Based Physical Healing Shield (+450% / +35) Ultimate Lv4 (+46 / +4) (20s)"
      },
      {
        "rank": 5,
        "name": "Gentle White Lily’s Embrace",
        "icon": "skill001/skill0022_5",
        "description": "Restores HP by 6500% ATK + 2500 to all allies and inflicts Hit-Based Physical Healing Shield (+450% / +35) Ultimate Lv5 (+50% / +5) for 20 seconds and Hit-Based Magic Healing Shield (+450% / +35) Ultimate Lv5 (+40% / +8) for 20 seconds",
        "effect": "6500% + 2500 | Buff: Hit-Based Physical Healing Shield (+450% / +35) Ultimate Lv5 (+50 / +5) (20s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Front Row AlliesMagic DEF UP, Physical DEF UP",
        "icon": "skill001/skill1006",
        "effect": "Physical Defense + (+141)",
        "effect2": "Magic Defense+ (+141)"
      },
      {
        "slot": 2,
        "name": "Middle Row AlliesSkill DMG UP, Speed UP",
        "icon": "skill001/skill1005",
        "effect": "Skill Damage + (+10)",
        "effect2": "Action Speed + (+10 / +10)"
      }
    ],
    "name": "Frey",
    "id": 2051,
    "rarity": "SSR",
    "element": "Holy",
    "role": "Support",
    "tags": [
      "Heal",
      "Buff",
      "Cleanse"
    ],
    "baseStats": {
      "HP": 2588,
      "ATK": 253,
      "MATK": 151,
      "DEF": 82,
      "MDEF": 32
    },
    "skillRotation": {
      "opening": "Basic → Skill3 → Basic → Skill2 → Basic",
      "loop": "Basic → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2 → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "frey"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Don’t underestimate a treasure hunter!",
        "icon": "skill001/skill0002",
        "description": "Deals 400% ATK + 160 physical damage to the nearest enemy",
        "target": "Nearest Enemy",
        "castTime": "0.66s",
        "damageScaling": "400% ATK",
        "baseDamage": "+160",
        "levelGrowth": "+30",
        "lvl1": "400% + 160",
        "lvl90": "400% + 2830"
      },
      {
        "slot": 3,
        "name": "This isn’t something an idiot could pull off, you know?",
        "icon": "skill001/skill0009",
        "description": "Deals 120% ATK + 50 physical damage to the 3 nearest enemies and inflicts Physical Defense - Lv3 (-18% / -30) for 10 seconds and Accuracy - Lv4 (-11) for 10 seconds",
        "target": "Nearest Enemy",
        "castTime": "0.66s",
        "damageScaling": "120% ATK",
        "baseDamage": "+50",
        "levelGrowth": "+6",
        "lvl1": "120% + 50",
        "lvl90": "120% + 584",
        "effect": "Physical Defense - Lv3 (+-18 / +-30) for 10s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Cruel Destroyer",
        "icon": "skill001/skill0003_1",
        "description": "Deals 500% ATK + 500 physical damage to the 3 nearest enemies",
        "effect": "500% + 500"
      },
      {
        "rank": 2,
        "name": "Cruel Destroyer",
        "icon": "skill001/skill0003_2",
        "description": "Deals 600% ATK + 650 physical damage to the 3 nearest enemies",
        "effect": "600% + 650"
      },
      {
        "rank": 3,
        "name": "Cruel Destroyer",
        "icon": "skill001/skill0003_3",
        "description": "Deals 750% ATK + 750 physical damage to the 3 nearest enemies",
        "effect": "750% + 750"
      },
      {
        "rank": 4,
        "name": "Cruel Destroyer",
        "icon": "skill001/skill0003_4",
        "description": "Deals 800% ATK + 800 physical damage to the 3 nearest enemies",
        "effect": "800% + 800"
      },
      {
        "rank": 5,
        "name": "Cruel Destroyer",
        "icon": "skill001/skill0003_5",
        "description": "Deals 850% ATK + 850 physical damage to the 3 nearest enemies",
        "effect": "850% + 850"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Physical ATK UP, 攻擊Speed UP",
        "icon": "skill001/skill1001",
        "effect": "Physical Attack (+108%) + (+159)",
        "effect2": "Action Speed + (+10 / +10)"
      },
      {
        "slot": 2,
        "name": "Self Physical CRIT UP, Skill DMG UP",
        "icon": "skill001/skill1001",
        "effect": "Physical Critical Damage+ (+90)",
        "effect2": "Skill Damage + (+30)"
      }
    ],
    "name": "Gemini",
    "id": 2052,
    "rarity": "SSR",
    "element": "Fire",
    "role": "Attacker",
    "tags": [
      "Debuff"
    ],
    "baseStats": {
      "HP": 1819,
      "ATK": 190,
      "MATK": 114,
      "DEF": 143,
      "MDEF": 57
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic",
      "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Very Fast",
      "speedValue": "0.36"
    },
    "slug": "gemini"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Sylvesto",
        "icon": "skill001/skill0008",
        "description": "Deals 320% ATK + 150 magic damage to the farthest enemy and inflicts Physical Defense - Lv3 (-18% / -30) for 5 seconds and Magic Defense- Lv3 (-18% / -30) for 5 seconds",
        "target": "Farthest Enemy",
        "castTime": "1.38s",
        "damageScaling": "320% ATK",
        "baseDamage": "+150",
        "levelGrowth": "+25",
        "lvl1": "320% + 150",
        "lvl90": "320% + 2375",
        "effect": "Physical Defense - Lv3 (+-18 / +-30) for 5s"
      },
      {
        "slot": 3,
        "name": "Guardian of the Little Dwarves",
        "icon": "skill001/skill0019",
        "description": "Applies HP Regeneration+ Lv1 (+3% / +50) to all allies for 10 seconds and Block+ Lv2 (+7) for 10 seconds",
        "target": "All Allies",
        "castTime": "1.38s",
        "effect": "HP Regeneration+ Lv1 (+3 / +50) for 10s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "O spirits, dance Become the guiding wisdom of all things",
        "icon": "skill001/skill0006_1",
        "description": "Deals 550% ATK + 700 magic damage to all enemies and inflicts Action Speed - (-50% / -50) Ultimate Lv1 (-8% / -8) for 10 seconds and Block- (-15) Ultimate Lv1 (-10) for 10 seconds",
        "effect": "550% + 700 | Buff: Action Speed - (-50% / -50) Ultimate Lv1 (+-10 / +-10) (10s)"
      },
      {
        "rank": 2,
        "name": "O spirits, dance Become the guiding wisdom of all things",
        "icon": "skill001/skill0006_2",
        "description": "Deals 750% ATK + 500 magic damage to all enemies and inflicts Action Speed - (-50% / -50) Ultimate Lv2 (-10% / -10) for 10 seconds and Block- (-15) Ultimate Lv2 (-13) for 10 seconds",
        "effect": "750% + 500 | Buff: Action Speed - (-50% / -50) Ultimate Lv2 (+-13 / +-13) (10s)"
      },
      {
        "rank": 3,
        "name": "O spirits, dance Become the guiding wisdom of all things",
        "icon": "skill001/skill0006_3",
        "description": "Deals 900% ATK + 550 magic damage to all enemies and inflicts Action Speed - (-50% / -50) Ultimate Lv3 (-12% / -12) for 10 seconds and Block- (-15) Ultimate Lv3 (-16) for 10 seconds",
        "effect": "900% + 550 | Buff: Action Speed - (-50% / -50) Ultimate Lv3 (+-16 / +-16) (10s)"
      },
      {
        "rank": 4,
        "name": "O spirits, dance Become the guiding wisdom of all things",
        "icon": "skill001/skill0006_4",
        "description": "Deals 1000% ATK + 600 magic damage to all enemies and inflicts Action Speed - (-50% / -50) Ultimate Lv4 (-14% / -14) for 10 seconds and Block- (-15) Ultimate Lv4 (-18) for 10 seconds",
        "effect": "1000% + 600 | Buff: Action Speed - (-50% / -50) Ultimate Lv4 (+-18 / +-18) (10s)"
      },
      {
        "rank": 5,
        "name": "O spirits, dance Become the guiding wisdom of all things",
        "icon": "skill001/skill0006_5",
        "description": "Deals 1100% ATK + 680 magic damage to all enemies and inflicts Action Speed - (-50% / -50) Ultimate Lv5 (-15% / -15) for 10 seconds and Block- (-15) Ultimate Lv5 (-20) for 10 seconds",
        "effect": "1100% + 680 | Buff: Action Speed - (-50% / -50) Ultimate Lv5 (+-20 / +-20) (10s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Magic ATK UP, Action Speed UP",
        "icon": "skill001/skill1006",
        "effect": "Magic Attack + (+259)",
        "effect2": "Action Speed + (+10 / +10)"
      },
      {
        "slot": 2,
        "name": "All AlliesHealing Power UP, Block UP",
        "icon": "skill001/skill1003",
        "effect": "Healing Received + (+20)",
        "effect2": "Block+ (+10)"
      }
    ],
    "name": "Estiriel",
    "id": 2053,
    "rarity": "SSR",
    "element": "Wind",
    "role": "Attacker",
    "tags": [
      "Heal",
      "Buff",
      "Debuff"
    ],
    "baseStats": {
      "HP": 1457,
      "ATK": 166,
      "MATK": 276,
      "DEF": 90,
      "MDEF": 226
    },
    "skillRotation": {
      "opening": "Skill2 → Basic → Skill3 → Basic → Basic",
      "loop": "Basic → Skill2 → Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "estiriel"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Thunderfire",
        "icon": "skill001/skill0009",
        "description": "Deals 350% ATK + 150 physical damage to the nearest enemy and inflicts Physical Defense - Lv5 (-23% / -50) for 5 seconds and Burn Lv5 (-150) for 12 seconds",
        "target": "Nearest Enemy",
        "castTime": "0.66s",
        "damageScaling": "350% ATK",
        "baseDamage": "+150",
        "levelGrowth": "+20",
        "lvl1": "350% + 150",
        "lvl90": "350% + 1930",
        "effect": "Physical Defense - Lv5 (+-23 / +-50) for 5s"
      },
      {
        "slot": 3,
        "name": "Armor-Sleeve Touch",
        "icon": "skill001/skill0013",
        "description": "Applies Physical Attack (+108%) + Lv3 (+15% / +30) to self for 10 seconds and Action Speed + Lv4 (+17% / +17) for 10 seconds",
        "target": "Self",
        "castTime": "0.66s",
        "effect": "Physical Attack (+108%) + Lv3 (+15 / +30) for 10s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Heaven Sever",
        "icon": "skill001/skill0003_1",
        "description": "Deals 420% ATK + 390 physical damage to the 3 nearest enemies and inflicts Physical Defense - (-15% / -200) Ultimate Lv1 (-10%) for 8 seconds and Block- (-15) Ultimate Lv1 (-10) for 8 seconds",
        "effect": "420% + 390 | Buff: Physical Defense - (-15% / -200) Ultimate Lv1 (+-15) (8s)"
      },
      {
        "rank": 2,
        "name": "Heaven Sever",
        "icon": "skill001/skill0003_2",
        "description": "Deals 505% ATK + 450 physical damage to the 3 nearest enemies and inflicts Physical Defense - (-15% / -200) Ultimate Lv2 (-13%) for 8 seconds and Block- (-15) Ultimate Lv2 (-13) for 8 seconds",
        "effect": "505% + 450 | Buff: Physical Defense - (-15% / -200) Ultimate Lv2 (+-19) (8s)"
      },
      {
        "rank": 3,
        "name": "Heaven Sever",
        "icon": "skill001/skill0003_3",
        "description": "Deals 570% ATK + 515 physical damage to the 3 nearest enemies and inflicts Physical Defense - (-15% / -200) Ultimate Lv3 (-16%) for 8 seconds and Block- (-15) Ultimate Lv3 (-16) for 8 seconds",
        "effect": "570% + 515 | Buff: Physical Defense - (-15% / -200) Ultimate Lv3 (+-22) (8s)"
      },
      {
        "rank": 4,
        "name": "Heaven Sever",
        "icon": "skill001/skill0003_4",
        "description": "Deals 610% ATK + 562 physical damage to the 3 nearest enemies and inflicts Physical Defense - (-15% / -200) Ultimate Lv4 (-18%) for 8 seconds and Block- (-15) Ultimate Lv4 (-18) for 8 seconds",
        "effect": "610% + 562 | Buff: Physical Defense - (-15% / -200) Ultimate Lv4 (+-24) (8s)"
      },
      {
        "rank": 5,
        "name": "Heaven Sever",
        "icon": "skill001/skill0003_5",
        "description": "Deals 650% ATK + 610 physical damage to the 3 nearest enemies and inflicts Physical Defense - (-15% / -200) Ultimate Lv5 (-20%) for 8 seconds and Block- (-15) Ultimate Lv5 (-20) for 8 seconds",
        "effect": "650% + 610 | Buff: Physical Defense - (-15% / -200) Ultimate Lv5 (+-25) (8s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Max HP UP, Physical ATK UP",
        "icon": "skill001/skill1003",
        "effect": "Max HP + (+3444)",
        "effect2": "Physical Attack (+108%) + (+259)"
      },
      {
        "slot": 2,
        "name": "Front Row AlliesPhysical CRIT UP, Physical ATK UP",
        "icon": "skill001/skill1005",
        "effect": "Physical Critical Damage+ (+90)",
        "effect2": "Physical Attack (+108%) + (+130)"
      }
    ],
    "name": "Hildis",
    "id": 2054,
    "rarity": "SSR",
    "element": "Fire",
    "role": "Attacker",
    "tags": [
      "Buff",
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 2259,
      "ATK": 190,
      "MATK": 114,
      "DEF": 82,
      "MDEF": 32
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic",
      "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2 → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Very Fast",
      "speedValue": "0.36"
    },
    "slug": "hildis"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Goddess, grant me strength!",
        "icon": "skill001/skill0017",
        "description": "Applies Physical Attack (+108%) + Lv4 (+18% / +35) to self for 10 seconds and Physical Critical Damage+ Lv4 (+50) for 10 seconds",
        "target": "Self",
        "castTime": "1.08s",
        "effect": "Physical Attack (+108%) + Lv4 (+18 / +35) for 10s"
      },
      {
        "slot": 3,
        "name": "Do as you please, roa!",
        "icon": "skill001/skill0007",
        "description": "Deals 360% ATK + 160 physical damage to the nearest enemy and inflicts Physical Critical Damage- LvMax (-20% / -50) for 7 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.08s",
        "damageScaling": "360% ATK",
        "baseDamage": "+160",
        "levelGrowth": "+25",
        "lvl1": "360% + 160",
        "lvl90": "360% + 2385",
        "effect": "Physical Critical Damage- LvMax (+-20 / +-50) for 7s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Full-Power Strike!",
        "icon": "skill001/skill0003_1",
        "description": "Deals 450% ATK + 400 physical damage to the 3 nearest enemies and inflicts Physical Attack (+108%) - (-10% / -50) Ultimate Lv1 (-10%) for 10 seconds and Accuracy - (-40) Ultimate Lv1 (-10) for 10 seconds",
        "effect": "450% + 400 | Buff: Physical Attack (+108%) - (-10% / -50) Ultimate Lv1 (+-15) (10s)"
      },
      {
        "rank": 2,
        "name": "Full-Power Strike!",
        "icon": "skill001/skill0003_2",
        "description": "Deals 540% ATK + 470 physical damage to the 3 nearest enemies and inflicts Physical Attack (+108%) - (-10% / -50) Ultimate Lv2 (-13%) for 10 seconds and Accuracy - (-40) Ultimate Lv2 (-12) for 10 seconds",
        "effect": "540% + 470 | Buff: Physical Attack (+108%) - (-10% / -50) Ultimate Lv2 (+-20) (10s)"
      },
      {
        "rank": 3,
        "name": "Full-Power Strike!",
        "icon": "skill001/skill0003_3",
        "description": "Deals 605% ATK + 540 physical damage to the 3 nearest enemies and inflicts Physical Attack (+108%) - (-10% / -50) Ultimate Lv3 (-16%) for 10 seconds and Accuracy - (-40) Ultimate Lv3 (-13) for 10 seconds",
        "effect": "605% + 540 | Buff: Physical Attack (+108%) - (-10% / -50) Ultimate Lv3 (+-24) (10s)"
      },
      {
        "rank": 4,
        "name": "Full-Power Strike!",
        "icon": "skill001/skill0003_4",
        "description": "Deals 660% ATK + 600 physical damage to the 3 nearest enemies and inflicts Physical Attack (+108%) - (-10% / -50) Ultimate Lv4 (-18%) for 10 seconds and Accuracy - (-40) Ultimate Lv4 (-14) for 10 seconds",
        "effect": "660% + 600 | Buff: Physical Attack (+108%) - (-10% / -50) Ultimate Lv4 (+-27) (10s)"
      },
      {
        "rank": 5,
        "name": "Full-Power Strike!",
        "icon": "skill001/skill0003_5",
        "description": "Deals 700% ATK + 650 physical damage to the 3 nearest enemies and inflicts Physical Attack (+108%) - (-10% / -50) Ultimate Lv5 (-20%) for 10 seconds and Accuracy - (-40) Ultimate Lv5 (-15) for 10 seconds",
        "effect": "700% + 650 | Buff: Physical Attack (+108%) - (-10% / -50) Ultimate Lv5 (+-30) (10s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Physical ATK UP, Physical CRIT UP",
        "icon": "skill001/skill1001",
        "effect": "Physical Attack (+108%) + (+259)",
        "effect2": "Physical Critical Damage+ (+179)"
      },
      {
        "slot": 2,
        "name": "Front Row AlliesSkill DMG UP, Speed UP",
        "icon": "skill001/skill1005",
        "effect": "Skill Damage + (+20)",
        "effect2": "Action Speed + (+10 / +10)"
      }
    ],
    "name": "Luca",
    "id": 2055,
    "rarity": "SSR",
    "element": "Wind",
    "role": "Attacker",
    "tags": [
      "Buff",
      "Debuff"
    ],
    "baseStats": {
      "HP": 1819,
      "ATK": 222,
      "MATK": 133,
      "DEF": 143,
      "MDEF": 57
    },
    "skillRotation": {
      "opening": "Skill2 → Skill3 → Basic → Basic",
      "loop": "Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Fast",
      "speedValue": "0.61"
    },
    "slug": "luca"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Star Procession",
        "icon": "skill001/skill0007",
        "description": "Deals 100% ATK + 50 physical damage to the 3 nearest enemies and inflicts Action Speed - Lv5 (-20% / -20) for 6 seconds and Block- Lv5 (-13) for 6 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.08s",
        "damageScaling": "100% ATK",
        "baseDamage": "+50",
        "levelGrowth": "+6",
        "lvl1": "100% + 50",
        "lvl90": "100% + 584",
        "effect": "Action Speed - Lv5 (+-20 / +-20) for 6s"
      },
      {
        "slot": 3,
        "name": "Future Sight",
        "icon": "skill001/skill0019",
        "description": "對Applies to all allies 6 second Physical Critical Damage+ Lv3 (+40) and Magic Critical Damage+ Lv3 (+40) for 6 seconds",
        "target": "All Allies",
        "castTime": "1.08s",
        "effect": "Physical Critical Damage+ Lv3 (+40) for 6s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "La Roue de Fortune",
        "icon": "skill001/skill0020_1",
        "description": "對Applies to all allies 8 second Action Speed + (+5% / +5) Ultimate Lv1 (+8% / +8) and Hit-Based Shield (+30% / +1) Ultimate Lv1 (+20% / +999) for 4 seconds",
        "effect": "0% + 0 | Buff: Action Speed + (+5% / +5) Ultimate Lv1 (+10 / +10) (8s)"
      },
      {
        "rank": 2,
        "name": "La Roue de Fortune",
        "icon": "skill001/skill0020_2",
        "description": "對Applies to all allies 8 second Action Speed + (+5% / +5) Ultimate Lv2 (+10% / +10) and Hit-Based Shield (+30% / +1) Ultimate Lv2 (+25% / +999) for 4 seconds",
        "effect": "0% + 0 | Buff: Action Speed + (+5% / +5) Ultimate Lv2 (+13 / +13) (8s)"
      },
      {
        "rank": 3,
        "name": "La Roue de Fortune",
        "icon": "skill001/skill0020_3",
        "description": "對Applies to all allies 8 second Action Speed + (+5% / +5) Ultimate Lv3 (+12% / +12) and Hit-Based Shield (+30% / +1) Ultimate Lv3 (+25% / +999) for 5 seconds",
        "effect": "0% + 0 | Buff: Action Speed + (+5% / +5) Ultimate Lv3 (+16 / +16) (8s)"
      },
      {
        "rank": 4,
        "name": "La Roue de Fortune",
        "icon": "skill001/skill0020_4",
        "description": "對Applies to all allies 8 second Action Speed + (+5% / +5) Ultimate Lv4 (+14% / +14) and Hit-Based Shield (+30% / +1) Ultimate Lv4 (+30% / +999) for 5 seconds",
        "effect": "0% + 0 | Buff: Action Speed + (+5% / +5) Ultimate Lv4 (+18 / +18) (8s)"
      },
      {
        "rank": 5,
        "name": "La Roue de Fortune",
        "icon": "skill001/skill0020_5",
        "description": "對Applies to all allies 8 second Action Speed + (+5% / +5) Ultimate Lv5 (+15% / +15) and Hit-Based Shield (+30% / +1) Ultimate Lv5 (+30% / +999) for 6 seconds",
        "effect": "0% + 0 | Buff: Action Speed + (+5% / +5) Ultimate Lv5 (+20 / +20) (8s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Middle Row AlliesMagic CRIT UP, Magic ATK UP",
        "icon": "skill001/skill1006",
        "effect": "Physical Critical Damage+ (+90)",
        "effect2": "Magic Critical Damage+ (+90)"
      },
      {
        "slot": 2,
        "name": "Middle Row AlliesSkill DMG UP, Speed UP",
        "icon": "skill001/skill1005",
        "effect": "Skill Damage + (+20)",
        "effect2": "Action Speed + (+5 / +5)"
      }
    ],
    "name": "Marina",
    "id": 2056,
    "rarity": "SSR",
    "element": "Water",
    "role": "Support",
    "tags": [
      "Buff",
      "Debuff"
    ],
    "baseStats": {
      "HP": 2251,
      "ATK": 221,
      "MATK": 132,
      "DEF": 143,
      "MDEF": 57
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic → Basic",
      "loop": "Basic → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Fast",
      "speedValue": "0.61"
    },
    "slug": "marina"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Rock Burst",
        "icon": "skill001/skill0007",
        "description": "Deals 105% ATK + 60 physical damage to the 3 nearest enemies and inflicts Physical Critical Damage- Lv4 (-13% / -35) for 11 seconds and Magic Critical Damage- Lv4 (-13% / -35) for 11 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.78s",
        "damageScaling": "105% ATK",
        "baseDamage": "+60",
        "levelGrowth": "+6",
        "lvl1": "105% + 60",
        "lvl90": "105% + 594",
        "effect": "Physical Critical Damage- Lv4 (+-13 / +-35) for 11s"
      },
      {
        "slot": 3,
        "name": "Arm of Growth",
        "icon": "skill001/skill0019",
        "description": "Applies Physical Critical Damage+ Lv4 (+50) to the 3 nearest allies for 10 seconds and Healing Shield Lv5 (+300% / +25) for 10 seconds",
        "target": "Nearest Ally",
        "castTime": "1.78s",
        "effect": "Physical Critical Damage+ Lv4 (+50) for 10s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Gigant’s Hammer",
        "icon": "skill001/skill0012_1",
        "description": "Deals 450% ATK + 630 physical damage to all enemies and inflicts Stun for 2 seconds and Action Speed - (-50% / -50) Ultimate Lv1 (-8% / -8) for 10 seconds",
        "effect": "450% + 630 | Buff: Stun (2s)"
      },
      {
        "rank": 2,
        "name": "Gigant’s Hammer",
        "icon": "skill001/skill0012_2",
        "description": "Deals 630% ATK + 748 physical damage to all enemies and inflicts Stun for 2 seconds and Action Speed - (-50% / -50) Ultimate Lv2 (-10% / -10) for 10 seconds",
        "effect": "630% + 748 | Buff: Stun (2s)"
      },
      {
        "rank": 3,
        "name": "Gigant’s Hammer",
        "icon": "skill001/skill0012_3",
        "description": "Deals 765% ATK + 851 physical damage to all enemies and inflicts Stun for 2 seconds and Action Speed - (-50% / -50) Ultimate Lv3 (-12% / -12) for 10 seconds",
        "effect": "765% + 851 | Buff: Stun (2s)"
      },
      {
        "rank": 4,
        "name": "Gigant’s Hammer",
        "icon": "skill001/skill0012_4",
        "description": "Deals 855% ATK + 963 physical damage to all enemies and inflicts Stun for 2 seconds and Action Speed - (-50% / -50) Ultimate Lv4 (-14% / -14) for 10 seconds",
        "effect": "855% + 963 | Buff: Stun (2s)"
      },
      {
        "rank": 5,
        "name": "Gigant’s Hammer",
        "icon": "skill001/skill0012_5",
        "description": "Deals 900% ATK + 1076 physical damage to all enemies and inflicts Stun for 2 seconds and Action Speed - (-50% / -50) Ultimate Lv5 (-15% / -15) for 10 seconds",
        "effect": "900% + 1076 | Buff: Stun (2s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Max HP UP, Block UP",
        "icon": "skill001/skill1003",
        "effect": "Max HP + (+3444)",
        "effect2": "Block+ (+15)"
      },
      {
        "slot": 2,
        "name": "Front Row AlliesPhysical DEF UP, Magic DEF UP",
        "icon": "skill001/skill1006",
        "effect": "Physical Defense + (+141)",
        "effect2": "Magic Defense+ (+141)"
      }
    ],
    "name": "Nora",
    "id": 2057,
    "rarity": "SSR",
    "element": "Fire",
    "role": "Tank",
    "tags": [
      "Buff",
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 1951,
      "ATK": 258,
      "MATK": 155,
      "DEF": 343,
      "MDEF": 137
    },
    "skillRotation": {
      "opening": "Skill3 → Basic → Skill2 → Basic",
      "loop": "Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Very Slow",
      "speedValue": "1.36"
    },
    "slug": "nora"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Oboro Night",
        "icon": "skill001/skill0009",
        "description": "Deals 100% ATK + 40 physical damage to the 3 nearest enemies and inflicts Accuracy - Lv4 (-11) for 8 seconds and Block- Lv4 (-11) for 8 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.38s",
        "damageScaling": "100% ATK",
        "baseDamage": "+40",
        "levelGrowth": "+6",
        "lvl1": "100% + 40",
        "lvl90": "100% + 574",
        "effect": "Accuracy - Lv4 (+-11) for 8s"
      },
      {
        "slot": 3,
        "name": "Shadow Dance",
        "icon": "skill001/skill0017",
        "description": "Applies Physical Attack (+108%) + Lv4 (+18% / +35) to self for 12 seconds and Block+ Lv4 (+11) for 12 seconds",
        "target": "Self",
        "castTime": "1.38s",
        "effect": "Physical Attack (+108%) + Lv4 (+18 / +35) for 12s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Limit Arrow",
        "icon": "skill001/skill0003_1",
        "description": "Deals 500% ATK + 1400 physical damage to the nearest enemyand when activating the Ultimate, applies Damage + (+10% / +999) Ultimate Lv1 (+10% / +999) to self for 10 seconds",
        "effect": "500% + 1400 | Buff: Damage + (+10% / +999) Ultimate Lv1 (+100 / +3) (10s)"
      },
      {
        "rank": 2,
        "name": "Limit Arrow",
        "icon": "skill001/skill0003_2",
        "description": "Deals 540% ATK + 2000 physical damage to the nearest enemyand when activating the Ultimate, applies Damage + (+10% / +999) Ultimate Lv2 (+13% / +999) to self for 10 seconds",
        "effect": "540% + 2000 | Buff: Damage + (+10% / +999) Ultimate Lv2 (+130 / +4) (10s)"
      },
      {
        "rank": 3,
        "name": "Limit Arrow",
        "icon": "skill001/skill0003_3",
        "description": "Deals 570% ATK + 2400 physical damage to the nearest enemyand when activating the Ultimate, applies Damage + (+10% / +999) Ultimate Lv3 (+16% / +999) to self for 10 seconds",
        "effect": "570% + 2400 | Buff: Damage + (+10% / +999) Ultimate Lv3 (+160 / +4) (10s)"
      },
      {
        "rank": 4,
        "name": "Limit Arrow",
        "icon": "skill001/skill0003_4",
        "description": "Deals 600% ATK + 2700 physical damage to the nearest enemyand when activating the Ultimate, applies Damage + (+10% / +999) Ultimate Lv4 (+18% / +999) to self for 10 seconds",
        "effect": "600% + 2700 | Buff: Damage + (+10% / +999) Ultimate Lv4 (+180 / +5) (10s)"
      },
      {
        "rank": 5,
        "name": "Limit Arrow",
        "icon": "skill001/skill0003_5",
        "description": "Deals 630% ATK + 3000 physical damage to the nearest enemyand when activating the Ultimate, applies Damage + (+10% / +999) Ultimate Lv5 (+20% / +999) to self for 10 seconds",
        "effect": "630% + 3000 | Buff: Damage + (+10% / +999) Ultimate Lv5 (+200 / +5) (10s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Accuracy UP, Action Speed UP",
        "icon": "skill001/skill1004",
        "effect": "Accuracy + (+25)",
        "effect2": "Action Speed + (+10 / +10)"
      },
      {
        "slot": 2,
        "name": "Self Physical ATK UP, Ultimate DMG UP",
        "icon": "skill001/skill1001",
        "effect": "Physical Attack (+108%) + (+259)",
        "effect2": "Ultimate Damage + (+15)"
      }
    ],
    "name": "Meinias",
    "id": 2058,
    "rarity": "SSR",
    "element": "Wind",
    "role": "Attacker",
    "tags": [
      "Debuff"
    ],
    "baseStats": {
      "HP": 2183,
      "ATK": 343,
      "MATK": 206,
      "DEF": 143,
      "MDEF": 57
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic",
      "loop": "Basic → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "meinias"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Let Me Play With You♪",
        "icon": "skill001/skill0008",
        "description": "Deals 110% ATK + 60 physical damage to the 3 nearest enemies and inflicts Physical Attack (+108%) - Lv3 (-9% / -20) for 7 seconds and Magic Attack - Lv3 (-9% / -20) for 7 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.58s",
        "damageScaling": "110% ATK",
        "baseDamage": "+60",
        "levelGrowth": "+6",
        "lvl1": "110% + 60",
        "lvl90": "110% + 594",
        "effect": "Physical Attack (+108%) - Lv3 (+-9 / +-20) for 7s"
      },
      {
        "slot": 3,
        "name": "Become My Captive♪",
        "icon": "skill001/skill0011",
        "description": "Deals 300% ATK + 150 physical damage to the nearest enemy and inflicts Charm for 3 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.58s",
        "damageScaling": "300% ATK",
        "baseDamage": "+150",
        "levelGrowth": "+25",
        "lvl1": "300% + 150",
        "lvl90": "300% + 2375",
        "effect": "Charm for 3s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Phantom Nail",
        "icon": "skill001/skill0012_1",
        "description": "Deals 900% ATK + 850 physical damage to the nearest enemyand inflicts Paralysis for 6 seconds",
        "effect": "900% + 850 | Buff: Paralysis (6s)"
      },
      {
        "rank": 2,
        "name": "Phantom Nail",
        "icon": "skill001/skill0012_2",
        "description": "Deals 1080% ATK + 920 physical damage to the nearest enemyand inflicts Paralysis for 6 seconds",
        "effect": "1080% + 920 | Buff: Paralysis (6s)"
      },
      {
        "rank": 3,
        "name": "Phantom Nail",
        "icon": "skill001/skill0012_3",
        "description": "Deals 1170% ATK + 1010 physical damage to the nearest enemyand inflicts Paralysis for 7 seconds",
        "effect": "1170% + 1010 | Buff: Paralysis (7s)"
      },
      {
        "rank": 4,
        "name": "Phantom Nail",
        "icon": "skill001/skill0012_4",
        "description": "Deals 1260% ATK + 1150 physical damage to the nearest enemyand inflicts Paralysis for 7 seconds",
        "effect": "1260% + 1150 | Buff: Paralysis (7s)"
      },
      {
        "rank": 5,
        "name": "Phantom Nail",
        "icon": "skill001/skill0012_5",
        "description": "Deals 1350% ATK + 1300 physical damage to the nearest enemyand inflicts Paralysis for 8 seconds",
        "effect": "1350% + 1300 | Buff: Paralysis (8s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Max HP UP, Block UP",
        "icon": "skill001/skill1003",
        "effect": "Max HP + (+3444)",
        "effect2": "Block+ (+15)"
      },
      {
        "slot": 2,
        "name": "Self Skill DMG UP, Action Speed UP",
        "icon": "skill001/skill1003",
        "effect": "Skill Damage + (+20)",
        "effect2": "Action Speed + (+10 / +10)"
      }
    ],
    "name": "Yu Lima Elka",
    "id": 2060,
    "rarity": "SSR",
    "element": "Dark",
    "role": "Tank",
    "tags": [
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 4150,
      "ATK": 267,
      "MATK": 160,
      "DEF": 35,
      "MDEF": 14
    },
    "skillRotation": {
      "opening": "Skill2 → Basic → Basic → Basic → Skill3",
      "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Fast",
      "speedValue": "0.61"
    },
    "slug": "yu-lima-elka"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Pillar of Sanctity",
        "icon": "skill001/skill0005",
        "description": "Deals 150% ATK + 70 magic damage to the 3 nearest enemies",
        "target": "Nearest Enemy",
        "castTime": "0.66s",
        "damageScaling": "150% ATK",
        "baseDamage": "+70",
        "levelGrowth": "+10",
        "lvl1": "150% + 70",
        "lvl90": "150% + 960"
      },
      {
        "slot": 3,
        "name": "Feather Dance",
        "icon": "skill001/skill0008",
        "description": "Deals 130% ATK + 50 magic damage to the 3 nearest enemies and inflicts Physical Attack (+108%) - Lv3 (-9% / -20) for 10 seconds and Magic Attack - Lv3 (-9% / -20) for 10 seconds",
        "target": "Nearest Enemy",
        "castTime": "0.66s",
        "damageScaling": "130% ATK",
        "baseDamage": "+50",
        "levelGrowth": "+6",
        "lvl1": "130% + 50",
        "lvl90": "130% + 584",
        "effect": "Physical Attack (+108%) - Lv3 (+-9 / +-20) for 10s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Trail that Destroys Evil",
        "icon": "skill001/skill0006_1",
        "description": "Deals 430% ATK + 400 magic damage to the 3 nearest enemies and inflicts Physical Critical Damage- (-400) Ultimate Lv1 (-10%) for 10 seconds and Magic Critical Damage- (-400) Ultimate Lv1 (-10%) for 10 seconds",
        "effect": "430% + 400 | Buff: Physical Critical Damage- (-400) Ultimate Lv1 (+-10) (10s)"
      },
      {
        "rank": 2,
        "name": "Trail that Destroys Evil",
        "icon": "skill001/skill0006_2",
        "description": "Deals 480% ATK + 409 magic damage to the 3 nearest enemies and inflicts Physical Critical Damage- (-400) Ultimate Lv2 (-13%) for 10 seconds and Magic Critical Damage- (-400) Ultimate Lv2 (-13%) for 10 seconds",
        "effect": "480% + 409 | Buff: Physical Critical Damage- (-400) Ultimate Lv2 (+-13) (10s)"
      },
      {
        "rank": 3,
        "name": "Trail that Destroys Evil",
        "icon": "skill001/skill0006_3",
        "description": "Deals 540% ATK + 453 magic damage to the 3 nearest enemies and inflicts Physical Critical Damage- (-400) Ultimate Lv3 (-16%) for 10 seconds and Magic Critical Damage- (-400) Ultimate Lv3 (-16%) for 10 seconds",
        "effect": "540% + 453 | Buff: Physical Critical Damage- (-400) Ultimate Lv3 (+-16) (10s)"
      },
      {
        "rank": 4,
        "name": "Trail that Destroys Evil",
        "icon": "skill001/skill0006_4",
        "description": "Deals 580% ATK + 468 magic damage to the 3 nearest enemies and inflicts Physical Critical Damage- (-400) Ultimate Lv4 (-18%) for 10 seconds and Magic Critical Damage- (-400) Ultimate Lv4 (-18%) for 10 seconds",
        "effect": "580% + 468 | Buff: Physical Critical Damage- (-400) Ultimate Lv4 (+-18) (10s)"
      },
      {
        "rank": 5,
        "name": "Trail that Destroys Evil",
        "icon": "skill001/skill0006_5",
        "description": "Deals 600% ATK + 482 magic damage to the 3 nearest enemies and inflicts Physical Critical Damage- (-400) Ultimate Lv5 (-20%) for 10 seconds and Magic Critical Damage- (-400) Ultimate Lv5 (-20%) for 10 seconds",
        "effect": "600% + 482 | Buff: Physical Critical Damage- (-400) Ultimate Lv5 (+-20) (10s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Magic ATK UP, Action Speed UP",
        "icon": "skill001/skill1005",
        "effect": "Magic Attack + (+259)",
        "effect2": "Action Speed + (+10 / +10)"
      },
      {
        "slot": 2,
        "name": "Self Block UP, Skill DMG UP",
        "icon": "skill001/skill1006",
        "effect": "Block+ (+15)",
        "effect2": "Skill Damage + (+30)"
      }
    ],
    "name": "Stenlina",
    "id": 2061,
    "rarity": "SSR",
    "element": "Holy",
    "role": "Attacker",
    "tags": [
      "Debuff"
    ],
    "baseStats": {
      "HP": 1819,
      "ATK": 134,
      "MATK": 224,
      "DEF": 57,
      "MDEF": 143
    },
    "skillRotation": {
      "opening": "Skill3 → Basic → Basic → Basic → Skill2 → Basic",
      "loop": "Basic → Basic → Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "120% ATK",
      "speedLabel": "Very Slow",
      "speedValue": "1.36"
    },
    "slug": "stenlina"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Spinning Blade",
        "icon": "skill001/skill0002",
        "description": "Deals 110% ATK + 50 physical damage to the 3 nearest enemies and inflicts Action Speed - Lv5 (-20% / -20) for 8 seconds",
        "target": "Enemy with Lowest HP",
        "castTime": "0.88s",
        "damageScaling": "110% ATK",
        "baseDamage": "+50",
        "levelGrowth": "+8",
        "lvl1": "110% + 50",
        "lvl90": "110% + 762",
        "effect": "Action Speed - Lv5 (+-20 / +-20) for 8s"
      },
      {
        "slot": 3,
        "name": "Ring Blade",
        "icon": "skill001/skill0002",
        "description": "Deals 130% ATK + 60 physical damage to the 3 nearest enemies",
        "target": "Enemy with Lowest HP",
        "castTime": "0.88s",
        "damageScaling": "130% ATK",
        "baseDamage": "+60",
        "levelGrowth": "+10",
        "lvl1": "130% + 60",
        "lvl90": "130% + 950"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Eradicator",
        "icon": "skill001/skill0003_1",
        "description": "Deals 450% ATK + 400 physical damage to the 3 nearest enemies and applies Action Speed + (+5% / +5) Ultimate Lv1 (+8% / +8) to self for 12 seconds",
        "effect": "450% + 400 | Buff: Action Speed + (+5% / +5) Ultimate Lv1 (+20 / +20) (12s)"
      },
      {
        "rank": 2,
        "name": "Eradicator",
        "icon": "skill001/skill0003_2",
        "description": "Deals 550% ATK + 480 physical damage to the 3 nearest enemies and applies Action Speed + (+5% / +5) Ultimate Lv1 (+8% / +8) to self for 12 seconds",
        "effect": "550% + 480 | Buff: Action Speed + (+5% / +5) Ultimate Lv1 (+23 / +23) (12s)"
      },
      {
        "rank": 3,
        "name": "Eradicator",
        "icon": "skill001/skill0003_3",
        "description": "Deals 600% ATK + 560 physical damage to the 3 nearest enemies and applies Action Speed + (+5% / +5) Ultimate Lv1 (+8% / +8) to self for 12 seconds",
        "effect": "600% + 560 | Buff: Action Speed + (+5% / +5) Ultimate Lv1 (+26 / +26) (12s)"
      },
      {
        "rank": 4,
        "name": "Eradicator",
        "icon": "skill001/skill0003_4",
        "description": "Deals 650% ATK + 600 physical damage to the 3 nearest enemies and applies Action Speed + (+5% / +5) Ultimate Lv1 (+8% / +8) to self for 12 seconds",
        "effect": "650% + 600 | Buff: Action Speed + (+5% / +5) Ultimate Lv1 (+28 / +28) (12s)"
      },
      {
        "rank": 5,
        "name": "Eradicator",
        "icon": "skill001/skill0003_5",
        "description": "Deals 680% ATK + 640 physical damage to the 3 nearest enemies 、Applies Action Speed + (+5% / +5) Ultimate Lv1 (+8% / +8) to self for 12 seconds",
        "effect": "680% + 640 | Buff: Action Speed + (+5% / +5) Ultimate Lv1 (+30 / +30) (12s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "On enemy defeatSelf MP Recovery (+100), Physical ATK UP",
        "icon": "skill001/skill1004",
        "effect": "MP Recovery (+100)+ (+42)",
        "effect2": "Physical Attack (+108%) + (+420)"
      },
      {
        "slot": 2,
        "name": "Self Physical ATK UP, Ultimate DMG UP",
        "icon": "skill001/skill1001",
        "effect": "Physical Attack (+108%) + (+259)",
        "effect2": "Physical Critical Damage+ (+176)"
      }
    ],
    "name": "Hisara",
    "id": 2062,
    "rarity": "SSR",
    "element": "Wind",
    "role": "Attacker",
    "tags": [
      "Debuff"
    ],
    "baseStats": {
      "HP": 1972,
      "ATK": 300,
      "MATK": 180,
      "DEF": 82,
      "MDEF": 32
    },
    "skillRotation": {
      "opening": "Skill2 → Basic → Basic → Basic → Skill3",
      "loop": "Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Fast",
      "speedValue": "0.61"
    },
    "slug": "hisara"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Cross Slash",
        "icon": "skill001/skill0002",
        "description": "Deals 145% ATK + 100 physical damage to the 3 nearest enemies",
        "target": "Nearest Enemy",
        "castTime": "0.66s",
        "damageScaling": "145% ATK",
        "baseDamage": "+100",
        "levelGrowth": "+10",
        "lvl1": "145% + 100",
        "lvl90": "145% + 990"
      },
      {
        "slot": 3,
        "name": "Paladin’s Awakening",
        "icon": "skill001/skill0017",
        "description": "Applies Physical Attack (+108%) + Lv5 (+20% / +40) to self for 10 seconds and Mind Type ATK + Lv3 (+10%) for 10 seconds",
        "target": "Self",
        "castTime": "0.66s",
        "effect": "Physical Attack (+108%) + Lv5 (+20 / +40) for 10s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Oracle of the Demon-Slaying Goddess",
        "icon": "skill001/skill0003_1",
        "description": "Deals 560% ATK + 700 physical damage to all enemies and inflicts Silence for 6 seconds and inflicts Curse for 3 seconds",
        "effect": "560% + 700 | Buff: Silence (6s)"
      },
      {
        "rank": 2,
        "name": "Oracle of the Demon-Slaying Goddess",
        "icon": "skill001/skill0003_2",
        "description": "Deals 760% ATK + 500 physical damage to all enemies and inflicts Silence for 6 seconds and inflicts Curse for 3 seconds",
        "effect": "760% + 500 | Buff: Silence (6s)"
      },
      {
        "rank": 3,
        "name": "Oracle of the Demon-Slaying Goddess",
        "icon": "skill001/skill0003_3",
        "description": "Deals 930% ATK + 550 physical damage to all enemies and inflicts Silence for 6 seconds and inflicts Curse for 3 seconds",
        "effect": "930% + 550 | Buff: Silence (6s)"
      },
      {
        "rank": 4,
        "name": "Oracle of the Demon-Slaying Goddess",
        "icon": "skill001/skill0003_4",
        "description": "Deals 1019% ATK + 600 physical damage to all enemies and inflicts Silence for 6 seconds and inflicts Curse for 3 seconds",
        "effect": "1019% + 600 | Buff: Silence (6s)"
      },
      {
        "rank": 5,
        "name": "Oracle of the Demon-Slaying Goddess",
        "icon": "skill001/skill0003_5",
        "description": "Deals 1110% ATK + 680 physical damage to all enemies and inflicts Silence for 6 seconds and inflicts Curse for 3 seconds",
        "effect": "1110% + 680 | Buff: Silence (6s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Physical ATK UP, 攻擊Speed UP",
        "icon": "skill001/skill1001",
        "effect": "Physical Attack (+108%) + (+159)",
        "effect2": "Action Speed + (+15 / +15)"
      },
      {
        "slot": 2,
        "name": "Self 想屬性攻擊UP, Block UP",
        "icon": "skill001/skill1003",
        "effect": "Mind Type ATK + (+10)",
        "effect2": "Block+ (+20)"
      }
    ],
    "name": "Bianca",
    "id": 2063,
    "rarity": "SSR",
    "element": "Mind",
    "role": "Attacker",
    "tags": [
      "Disrupt"
    ],
    "baseStats": {
      "HP": 1819,
      "ATK": 257,
      "MATK": 154,
      "DEF": 143,
      "MDEF": 57
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic → Basic → Basic",
      "loop": "Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Very Fast",
      "speedValue": "0.36"
    },
    "slug": "bianca"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Shield (+30% / +9999) Bash",
        "icon": "skill001/skill0011",
        "description": "Deals 350% ATK + 130 physical damage to the nearest enemy and inflicts Stun for 2.5 seconds and Action Speed - Lv4 (-17% / -17) for 10 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.08s",
        "damageScaling": "350% ATK",
        "baseDamage": "+130",
        "levelGrowth": "+20",
        "lvl1": "350% + 130",
        "lvl90": "350% + 1910",
        "effect": "Stun for 2.5s"
      },
      {
        "slot": 3,
        "name": "Solid Defense",
        "icon": "skill001/skill0015",
        "description": "Applies Physical Defense + LvMax (+40% / +200) to self for 12 seconds and Taunt for 12 seconds",
        "target": "Self",
        "castTime": "1.08s",
        "effect": "Physical Defense + LvMax (+40 / +200) for 12s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Reflective Impact",
        "icon": "skill001/skill0020_1",
        "description": "Applies Physical Reflect Shield (+100% / +999) Ultimate Lv1 (+250% / +999) to self for 15 seconds、Physical Shield Lv1 (+200% / +20)",
        "effect": "0% + 0 | Buff: Physical Reflect Shield (+100% / +999) Ultimate Lv1 (+250 / +999) (15s)"
      },
      {
        "rank": 2,
        "name": "Reflective Impact",
        "icon": "skill001/skill0020_1",
        "description": "Applies Physical Reflect Shield (+100% / +999) Ultimate Lv2 (+350% / +999) to self for 15 seconds、Physical Shield Lv1 (+200% / +20)",
        "effect": "0% + 0 | Buff: Physical Reflect Shield (+100% / +999) Ultimate Lv2 (+350 / +999) (15s)"
      },
      {
        "rank": 3,
        "name": "Reflective Impact",
        "icon": "skill001/skill0020_1",
        "description": "Applies Physical Reflect Shield (+100% / +999) Ultimate Lv3 (+400% / +999) to self for 15 seconds、Physical Shield Lv1 (+200% / +20)",
        "effect": "0% + 0 | Buff: Physical Reflect Shield (+100% / +999) Ultimate Lv3 (+400 / +999) (15s)"
      },
      {
        "rank": 4,
        "name": "Reflective Impact",
        "icon": "skill001/skill0020_1",
        "description": "Applies Physical Reflect Shield (+100% / +999) Ultimate Lv4 (+450% / +999) to self for 15 seconds、Physical Shield Lv1 (+200% / +20)",
        "effect": "0% + 0 | Buff: Physical Reflect Shield (+100% / +999) Ultimate Lv4 (+450 / +999) (15s)"
      },
      {
        "rank": 5,
        "name": "Reflective Impact",
        "icon": "skill001/skill0020_1",
        "description": "Applies Physical Reflect Shield (+100% / +999) Ultimate Lv5 (+500% / +999) to self for 15 seconds、Physical Shield Lv1 (+200% / +20)",
        "effect": "0% + 0 | Buff: Physical Reflect Shield (+100% / +999) Ultimate Lv5 (+500 / +999) (15s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Physical DEF UP, Max HP UP",
        "icon": "skill001/skill1002",
        "effect": "Physical Defense + (+141)",
        "effect2": "Max HP + (+3444)"
      },
      {
        "slot": 2,
        "name": "Self Physical DEF UP, Healing Power UP",
        "icon": "skill001/skill1002",
        "effect": "Physical Defense + (+211)",
        "effect2": "Healing Received + (+30)"
      }
    ],
    "name": "Natasha",
    "id": 2064,
    "rarity": "SSR",
    "element": "Water",
    "role": "Tank",
    "tags": [
      "Debuff",
      "Disrupt",
      "Taunt"
    ],
    "baseStats": {
      "HP": 1951,
      "ATK": 181,
      "MATK": 108,
      "DEF": 343,
      "MDEF": 137
    },
    "skillRotation": {
      "opening": "Skill3 → Basic → Skill2 → Basic → Basic",
      "loop": "Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Fast",
      "speedValue": "0.61"
    },
    "slug": "natasha"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Annoying!",
        "icon": "skill001/skill0005",
        "description": "Deals 229% ATK + 80 magic damage to the nearest enemy",
        "target": "Nearest Enemy",
        "castTime": "1.38s",
        "damageScaling": "229% ATK",
        "baseDamage": "+80",
        "levelGrowth": "+30",
        "lvl1": "229% + 80",
        "lvl90": "229% + 2750"
      },
      {
        "slot": 3,
        "name": "Mm-hmm, I’m the First Queen♪",
        "icon": "skill001/skill0011",
        "description": "Deals 180% ATK + 110 magic damage to the nearest enemy and inflicts Charm for 3 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.38s",
        "damageScaling": "180% ATK",
        "baseDamage": "+110",
        "levelGrowth": "+25",
        "lvl1": "180% + 110",
        "lvl90": "180% + 2335",
        "effect": "Charm for 3s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "I’ll eat you up!",
        "icon": "skill001/skill0006_1",
        "description": "Deals 330% ATK + 300 magic damage to the 3 nearest enemies and absorbs 6% of the damage dealt to restore own HP",
        "effect": "330% + 300 + 6% lifesteal"
      },
      {
        "rank": 2,
        "name": "I’ll eat you up!",
        "icon": "skill001/skill0006_2",
        "description": "Deals 380% ATK + 380 magic damage to the 3 nearest enemies and absorbs 6% of the damage dealt to restore own HP",
        "effect": "380% + 380 + 6% lifesteal"
      },
      {
        "rank": 3,
        "name": "I’ll eat you up!",
        "icon": "skill001/skill0006_3",
        "description": "Deals 420% ATK + 450 magic damage to the 3 nearest enemies and absorbs 6% of the damage dealt to restore own HP",
        "effect": "420% + 450 + 6% lifesteal"
      },
      {
        "rank": 4,
        "name": "I’ll eat you up!",
        "icon": "skill001/skill0006_4",
        "description": "Deals 450% ATK + 490 magic damage to the 3 nearest enemies and absorbs 6% of the damage dealt to restore own HP",
        "effect": "450% + 490 + 6% lifesteal"
      },
      {
        "rank": 5,
        "name": "I’ll eat you up!",
        "icon": "skill001/skill0006_5",
        "description": "Deals 480% ATK + 520 magic damage to the 3 nearest enemies and absorbs 6% of the damage dealt to restore own HP",
        "effect": "480% + 520 + 6% lifesteal"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Charm Resist",
        "icon": "skill001/skill1003",
        "effect": "Charm Resistance LvMax (+1)"
      },
      {
        "slot": 2,
        "name": "Self Magic ATK UP",
        "icon": "skill001/skill1001",
        "effect": "Magic Attack + (+389)"
      }
    ],
    "name": "[Graceful Portrait] Shamshel",
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
      "opening": "Skill3 → Basic → Basic → Basic → Skill2",
      "loop": "Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic → Basic → Skill2 → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "110% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "noble-succubus-empress-shamshel"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Edelrant-Style Swordsmanship: Earthstride",
        "icon": "skill001/skill0002",
        "description": "Deals 170% ATK + 120 physical damage to the 2 nearest enemies",
        "target": "Nearest Enemy",
        "castTime": "0.88s",
        "damageScaling": "170% ATK",
        "baseDamage": "+120",
        "levelGrowth": "+15",
        "lvl1": "170% + 120",
        "lvl90": "170% + 1455"
      },
      {
        "slot": 3,
        "name": "Pride of the Royal Guards",
        "icon": "skill001/skill0019",
        "description": "Applies Physical Defense + Lv3 (+20% / +140) to self for 7 seconds and Magic Defense+ Lv3 (+20% / +140) for 7 seconds",
        "target": "Self",
        "castTime": "0.88s",
        "effect": "Physical Defense + Lv3 (+20 / +140) for 7s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Edelrant-Style Swordsmanship Ultimate: Aurora Blade",
        "icon": "skill001/skill0003_1",
        "description": "Deals 1300% ATK + 500 physical damage to the nearest enemy and inflicts Physical Attack (+108%) - (-10% / -50) Ultimate Lv1 (-10%) for 10 seconds",
        "effect": "1300% + 500 | Buff: Physical Attack (+108%) - (-10% / -50) Ultimate Lv1 (+-15) (10s)"
      },
      {
        "rank": 2,
        "name": "Edelrant-Style Swordsmanship Ultimate: Aurora Blade",
        "icon": "skill001/skill0003_2",
        "description": "Deals 1500% ATK + 600 physical damage to the nearest enemy and inflicts Physical Attack (+108%) - (-10% / -50) Ultimate Lv2 (-13%) for 10 seconds",
        "effect": "1500% + 600 | Buff: Physical Attack (+108%) - (-10% / -50) Ultimate Lv2 (+-20) (10s)"
      },
      {
        "rank": 3,
        "name": "Edelrant-Style Swordsmanship Ultimate: Aurora Blade",
        "icon": "skill001/skill0003_3",
        "description": "Deals 1700% ATK + 680 physical damage to the nearest enemy and inflicts Physical Attack (+108%) - (-10% / -50) Ultimate Lv3 (-16%) for 10 seconds",
        "effect": "1700% + 680 | Buff: Physical Attack (+108%) - (-10% / -50) Ultimate Lv3 (+-24) (10s)"
      },
      {
        "rank": 4,
        "name": "Edelrant-Style Swordsmanship Ultimate: Aurora Blade",
        "icon": "skill001/skill0003_4",
        "description": "Deals 1800% ATK + 750 physical damage to the nearest enemy and inflicts Physical Attack (+108%) - (-10% / -50) Ultimate Lv4 (-18%) for 10 seconds",
        "effect": "1800% + 750 | Buff: Physical Attack (+108%) - (-10% / -50) Ultimate Lv4 (+-27) (10s)"
      },
      {
        "rank": 5,
        "name": "Edelrant-Style Swordsmanship Ultimate: Aurora Blade",
        "icon": "skill001/skill0003_5",
        "description": "Deals 1900% ATK + 800 physical damage to the nearest enemy and inflicts Physical Attack (+108%) - (-10% / -50) Ultimate Lv5 (-20%) for 10 seconds",
        "effect": "1900% + 800 | Buff: Physical Attack (+108%) - (-10% / -50) Ultimate Lv5 (+-30) (10s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Physical DEF UP",
        "icon": "skill001/skill1002",
        "effect": "Physical Defense + (+211)"
      },
      {
        "slot": 2,
        "name": "Self Physical CRIT UP",
        "icon": "skill001/skill1001",
        "effect": "Physical Critical Damage+ (+90)"
      }
    ],
    "name": "[Graceful Portrait] Aysis",
    "id": 2066,
    "rarity": "SSR",
    "element": "Mind",
    "role": "Tank",
    "tags": [
      "Debuff"
    ],
    "baseStats": {
      "HP": 2660,
      "ATK": 132,
      "MATK": 79,
      "DEF": 143,
      "MDEF": 57
    },
    "skillRotation": {
      "opening": "Skill3 → Basic → Basic → Basic → Skill2",
      "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "110% ATK",
      "speedLabel": "Very Fast",
      "speedValue": "0.36"
    },
    "slug": "elegant-portrait-aysis"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Turn and—bam!",
        "icon": "skill001/skill0011",
        "description": "Deals 280% ATK + 150 physical damage to the nearest enemy and inflicts Stun for 2.5 seconds and Block- Lv5 (-13) for 10 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.38s",
        "damageScaling": "280% ATK",
        "baseDamage": "+150",
        "levelGrowth": "+20",
        "lvl1": "280% + 150",
        "lvl90": "280% + 1930",
        "effect": "Stun for 2.5s"
      },
      {
        "slot": 3,
        "name": "Bam-bam!",
        "icon": "skill001/skill0002",
        "description": "Deals 110% ATK + 70 physical damage to the 3 nearest enemies",
        "target": "Nearest Enemy",
        "castTime": "1.38s",
        "damageScaling": "110% ATK",
        "baseDamage": "+70",
        "levelGrowth": "+10",
        "lvl1": "110% + 70",
        "lvl90": "110% + 960"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Lorelia Attack!",
        "icon": "skill001/skill0012_1",
        "description": "Deals 400% ATK + 390 physical damage to the 3 nearest enemies and inflicts Stun for 3 seconds and Action Speed - (-50% / -50) Ultimate Lv1 (-8% / -8) for 10 seconds",
        "effect": "400% + 390 | Buff: Stun (3s)"
      },
      {
        "rank": 2,
        "name": "Lorelia Attack!",
        "icon": "skill001/skill0012_2",
        "description": "Deals 500% ATK + 450 physical damage to the 3 nearest enemies and inflicts Stun for 3 seconds and Action Speed - (-50% / -50) Ultimate Lv2 (-10% / -10) for 10 seconds",
        "effect": "500% + 450 | Buff: Stun (3s)"
      },
      {
        "rank": 3,
        "name": "Lorelia Attack!",
        "icon": "skill001/skill0012_3",
        "description": "Deals 550% ATK + 530 physical damage to the 3 nearest enemies and inflicts Stun for 3 seconds and Action Speed - (-50% / -50) Ultimate Lv3 (-12% / -12) for 10 seconds",
        "effect": "550% + 530 | Buff: Stun (3s)"
      },
      {
        "rank": 4,
        "name": "Lorelia Attack!",
        "icon": "skill001/skill0012_4",
        "description": "Deals 610% ATK + 560 physical damage to the 3 nearest enemies and inflicts Stun for 3 seconds and Action Speed - (-50% / -50) Ultimate Lv4 (-14% / -14) for 10 seconds",
        "effect": "610% + 560 | Buff: Stun (3s)"
      },
      {
        "rank": 5,
        "name": "Lorelia Attack!",
        "icon": "skill001/skill0012_5",
        "description": "Deals 650% ATK + 610 physical damage to the 3 nearest enemies and inflicts Stun for 3 seconds and Action Speed - (-50% / -50) Ultimate Lv5 (-15% / -15) for 10 seconds",
        "effect": "650% + 610 | Buff: Stun (3s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Max HP UP, DEBUFF抗性UP",
        "icon": "skill001/skill1003",
        "effect": "Max HP + (+2896)",
        "effect2": "Debuff Resistance (+0.5%) + (30%)"
      },
      {
        "slot": 2,
        "name": "Self Physical ATK UP, Accuracy UP",
        "icon": "skill001/skill1005",
        "effect": "Physical Attack (+108%) + (+389)",
        "effect2": "Accuracy + (+20)"
      }
    ],
    "name": "[Playful Mermaid Princess] Lorelia",
    "id": 2067,
    "rarity": "SSR",
    "element": "Water",
    "role": "Attacker",
    "tags": [
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 2092,
      "ATK": 299,
      "MATK": 179,
      "DEF": 82,
      "MDEF": 32
    },
    "skillRotation": {
      "opening": "Skill2 → Skill3 → Basic → Basic",
      "loop": "Basic → Skill3 → Basic → Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "mischievous-mermaid-princess-lorelia"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Higher than usual♪",
        "icon": "skill001/skill0014",
        "description": "Applies Magic Attack + Lv4 (+18% / +35) to self for 8 seconds and Accuracy + Lv4 (+11) for 8 seconds",
        "target": "Self",
        "castTime": "1.08s",
        "effect": "Magic Attack + Lv4 (+18 / +35) for 8s"
      },
      {
        "slot": 3,
        "name": "Faster than usual♪",
        "icon": "skill001/skill0005",
        "description": "Deals 90% ATK + 50 magic damage to the 3 nearest enemies and inflicts Action Speed + Lv5 (+20% / +20) for 6 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.08s",
        "damageScaling": "90% ATK",
        "baseDamage": "+50",
        "levelGrowth": "+8",
        "lvl1": "90% + 50",
        "lvl90": "90% + 762",
        "effect": "Action Speed + Lv5 (+20 / +20) for 6s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Dance with the princess in her gown♪",
        "icon": "skill001/skill0006_1",
        "description": "Deals 360% ATK + 394 magic damage to the 3 nearest enemies and inflicts Charm for 3 seconds and Magic Defense- (-15% / -200) Ultimate Lv1 (-15%) for 10 seconds",
        "effect": "360% + 394 | Buff: Charm (3s)"
      },
      {
        "rank": 2,
        "name": "Dance with the princess in her gown♪",
        "icon": "skill001/skill0006_2",
        "description": "Deals 450% ATK + 445 magic damage to the 3 nearest enemies and inflicts Charm for 3 seconds and Magic Defense- (-15% / -200) Ultimate Lv2 (-20%) for 10 seconds",
        "effect": "450% + 445 | Buff: Charm (3s)"
      },
      {
        "rank": 3,
        "name": "Dance with the princess in her gown♪",
        "icon": "skill001/skill0006_3",
        "description": "Deals 522% ATK + 496 magic damage to the 3 nearest enemies and inflicts Charm for 3 seconds and Magic Defense- (-15% / -200) Ultimate Lv3 (-24%) for 10 seconds",
        "effect": "522% + 496 | Buff: Charm (3s)"
      },
      {
        "rank": 4,
        "name": "Dance with the princess in her gown♪",
        "icon": "skill001/skill0006_4",
        "description": "Deals 579% ATK + 532 magic damage to the 3 nearest enemies and inflicts Charm for 3 seconds and Magic Defense- (-15% / -200) Ultimate Lv4 (-27%) for 10 seconds",
        "effect": "579% + 532 | Buff: Charm (3s)"
      },
      {
        "rank": 5,
        "name": "Dance with the princess in her gown♪",
        "icon": "skill001/skill0006_5",
        "description": "Deals 612% ATK + 565 magic damage to the 3 nearest enemies and inflicts Charm for 3 seconds and Magic Defense- (-15% / -200) Ultimate Lv5 (-30%) for 10 seconds",
        "effect": "612% + 565 | Buff: Charm (3s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Charm Resist, Self Magic ATK UP",
        "icon": "skill001/skill1003",
        "effect": "Charm Resistance LvMax (+1)",
        "effect2": "Magic Attack + (+259)"
      },
      {
        "slot": 2,
        "name": "Self Skill DMG UP, Accuracy UP",
        "icon": "skill001/skill1005",
        "effect": "Skill Damage + (+30)",
        "effect2": "Accuracy + (+20)"
      }
    ],
    "name": "[Festival Empress] Shamshel",
    "id": 2068,
    "rarity": "SSR",
    "element": "Fire",
    "role": "Attacker",
    "tags": [
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 1715,
      "ATK": 133,
      "MATK": 222,
      "DEF": 57,
      "MDEF": 143
    },
    "skillRotation": {
      "opening": "Skill2 → Skill3 → Basic → Basic",
      "loop": "Basic → Skill3 → Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "festival-empress-shamshel"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Ripples of the Abyss",
        "icon": "skill001/skill0021",
        "description": "Restores HP by 2000% ATK + 370 to all allies and inflicts Physical Defense + Lv2 (+15% / +100) for 8 seconds and Magic Defense+ Lv2 (+15% / +100) for 8 seconds",
        "target": "All Allies",
        "castTime": "1.38s",
        "damageScaling": "2000% ATK",
        "baseDamage": "+370",
        "levelGrowth": "+40",
        "lvl1": "2000% + 370",
        "lvl90": "2000% + 3930",
        "effect": "Physical Defense + Lv2 (+15 / +100) for 8s"
      },
      {
        "slot": 3,
        "name": "Slumber of the Seashell",
        "icon": "skill001/skill0019",
        "description": "Applies Action Speed + Lv3 (+14% / +14) to all allies for 6 seconds and Accuracy + Lv3 (+9) for 6 seconds",
        "target": "All Allies",
        "castTime": "1.38s",
        "effect": "Action Speed + Lv3 (+14 / +14) for 6s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Spirits, sing—offer blessings for this new birth",
        "icon": "skill001/skill0022_1",
        "description": "Restores HP by 2700% ATK + 1200 to all allies and inflicts Debuff Resistance (+0.5%) + (+0.5%) Ultimate Lv1 (+0.3%) for 7 seconds and Block+ (+10) Ultimate Lv1 (+10) for 7 seconds",
        "effect": "2700% + 1200 | Buff: Debuff Resistance (+0.5%) + (+0.5%) Ultimate Lv1 (30%) (7s)"
      },
      {
        "rank": 2,
        "name": "Spirits, sing—offer blessings for this new birth",
        "icon": "skill001/skill0022_2",
        "description": "Restores HP by 3100% ATK + 1400 to all allies and inflicts Debuff Resistance (+0.5%) + (+0.5%) Ultimate Lv2 (+0.4%) for 7 seconds and Block+ (+10) Ultimate Lv2 (+13) for 7 seconds",
        "effect": "3100% + 1400 | Buff: Debuff Resistance (+0.5%) + (+0.5%) Ultimate Lv2 (40%) (7s)"
      },
      {
        "rank": 3,
        "name": "Spirits, sing—offer blessings for this new birth",
        "icon": "skill001/skill0022_3",
        "description": "Restores HP by 3250% ATK + 1600 to all allies and inflicts Debuff Resistance (+0.5%) + (+0.5%) Ultimate Lv3 (+0.5%) for 7 seconds and Block+ (+10) Ultimate Lv3 (+16) for 7 seconds",
        "effect": "3250% + 1600 | Buff: Debuff Resistance (+0.5%) + (+0.5%) Ultimate Lv3 (50%) (7s)"
      },
      {
        "rank": 4,
        "name": "Spirits, sing—offer blessings for this new birth",
        "icon": "skill001/skill0022_4",
        "description": "Restores HP by 3500% ATK + 1750 to all allies and inflicts Debuff Resistance (+0.5%) + (+0.5%) Ultimate Lv4 (+0.55%) for 7 seconds and Block+ (+10) Ultimate Lv4 (+18) for 7 seconds",
        "effect": "3500% + 1750 | Buff: Debuff Resistance (+0.5%) + (+0.5%) Ultimate Lv4 (55%) (7s)"
      },
      {
        "rank": 5,
        "name": "Spirits, sing—offer blessings for this new birth",
        "icon": "skill001/skill0022_5",
        "description": "Restores HP by 3650% ATK + 1900 to all allies and inflicts Debuff Resistance (+0.5%) + (+0.5%) Ultimate Lv5 (+0.6%) for 7 seconds and Block+ (+10) Ultimate Lv5 (+20) for 7 seconds",
        "effect": "3650% + 1900 | Buff: Debuff Resistance (+0.5%) + (+0.5%) Ultimate Lv5 (60%) (7s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Action Speed UP, DEBUFF抗性UP",
        "icon": "skill001/skill1004",
        "effect": "Action Speed + (+15 / +15)",
        "effect2": "Debuff Resistance (+0.5%) + (30%)"
      },
      {
        "slot": 2,
        "name": "All AlliesMax HP UP, Block UP",
        "icon": "skill001/skill1006",
        "effect": "Max HP + (+1447)",
        "effect2": "Block+ (+15)"
      }
    ],
    "name": "[Festive Attire] Estiriel",
    "id": 2069,
    "rarity": "SSR",
    "element": "Holy",
    "role": "Support",
    "tags": [
      "Heal",
      "Buff"
    ],
    "baseStats": {
      "HP": 3352,
      "ATK": 151,
      "MATK": 253,
      "DEF": 14,
      "MDEF": 35
    },
    "skillRotation": {
      "opening": "Skill3 → Basic → Skill2 → Basic → Basic",
      "loop": "Basic → Skill3 → Basic → Basic → Basic → Basic → Skill2 → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "festival-attire-estiriel"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "The gown feels so light!",
        "icon": "skill001/skill0007",
        "description": "Deals 240% ATK + 125 physical damage to the nearest enemy and inflicts Action Speed - Lv4 (-17% / -17) for 8 seconds",
        "target": "Nearest Enemy",
        "castTime": "0.88s",
        "damageScaling": "240% ATK",
        "baseDamage": "+125",
        "levelGrowth": "+20",
        "lvl1": "240% + 125",
        "lvl90": "240% + 1905",
        "effect": "Action Speed - Lv4 (+-17 / +-17) for 8s"
      },
      {
        "slot": 3,
        "name": "I must keep it perfectly clean.",
        "icon": "skill001/skill0019",
        "description": "Applies Block+ Lv5 (+13) to self for 12 seconds and Taunt for 12 seconds",
        "target": "Self",
        "castTime": "0.88s",
        "effect": "Block+ Lv5 (+13) for 12s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "The princess stands for justice!",
        "icon": "skill001/skill0003_1",
        "description": "Deals 225% ATK + 404 physical damage to the 3 nearest enemies and inflicts Accuracy - (-40) Ultimate Lv1 (-10) for 10 seconds",
        "effect": "225% + 404 | Buff: Accuracy - (-40) Ultimate Lv1 (+-10) (10s)"
      },
      {
        "rank": 2,
        "name": "The princess stands for justice!",
        "icon": "skill001/skill0003_2",
        "description": "Deals 280% ATK + 509 physical damage to the 3 nearest enemies and inflicts Accuracy - (-40) Ultimate Lv2 (-12) for 10 seconds",
        "effect": "280% + 509 | Buff: Accuracy - (-40) Ultimate Lv2 (+-12) (10s)"
      },
      {
        "rank": 3,
        "name": "The princess stands for justice!",
        "icon": "skill001/skill0003_3",
        "description": "Deals 325% ATK + 553 physical damage to the 3 nearest enemies and inflicts Accuracy - (-40) Ultimate Lv3 (-13) for 10 seconds",
        "effect": "325% + 553 | Buff: Accuracy - (-40) Ultimate Lv3 (+-13) (10s)"
      },
      {
        "rank": 4,
        "name": "The princess stands for justice!",
        "icon": "skill001/skill0003_4",
        "description": "Deals 358% ATK + 568 physical damage to the 3 nearest enemies and inflicts Accuracy - (-40) Ultimate Lv4 (-14) for 10 seconds",
        "effect": "358% + 568 | Buff: Accuracy - (-40) Ultimate Lv4 (+-14) (10s)"
      },
      {
        "rank": 5,
        "name": "The princess stands for justice!",
        "icon": "skill001/skill0003_5",
        "description": "Deals 380% ATK + 602 physical damage to the 3 nearest enemies and inflicts Accuracy - (-40) Ultimate Lv5 (-15) for 10 seconds",
        "effect": "380% + 602 | Buff: Accuracy - (-40) Ultimate Lv5 (+-15) (10s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Action Speed UP, Magic ATK UP",
        "icon": "skill001/skill1002",
        "effect": "Physical Defense + (+141)"
      },
      {
        "slot": 2,
        "name": "Self Ultimate DMG UP, Magic CRIT UP",
        "icon": "skill001/skill1003",
        "effect": "Max HP + (+2896)",
        "effect2": "Healing Received + (+20)"
      }
    ],
    "name": "[Festive Costume] Natasha",
    "id": 2070,
    "rarity": "SR",
    "element": "Holy",
    "role": "Tank",
    "tags": [
      "Debuff",
      "Taunt"
    ],
    "baseStats": {
      "HP": 1781,
      "ATK": 152,
      "MATK": 91,
      "DEF": 326,
      "MDEF": 130
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic → Basic → Basic",
      "loop": "Basic → Basic → Basic → Skill3 → Basic → Skill2 → Basic → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "110% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "festival-dress-up-natasha"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Poison (-50%) Princess’s Embrace",
        "icon": "skill001/skill0011",
        "description": "Deals 250% ATK + 150 magic damage to the nearest enemyand inflicts Poison (-50%) for 10 seconds and Block- Lv5 (-13) for 8 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.78s",
        "damageScaling": "250% ATK",
        "baseDamage": "+150",
        "levelGrowth": "+20",
        "lvl1": "250% + 150",
        "lvl90": "250% + 1930",
        "effect": "Poison LvMax (+-300) for 10s"
      },
      {
        "slot": 3,
        "name": "Calamity of Serpent Venom",
        "icon": "skill001/skill0011",
        "description": "Deals 85% ATK + 70 magic damage to the 3 nearest enemiesand inflicts Curse for 5 seconds and Accuracy - Lv4 (-11) for 8 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.78s",
        "damageScaling": "85% ATK",
        "baseDamage": "+70",
        "levelGrowth": "+6",
        "lvl1": "85% + 70",
        "lvl90": "85% + 604",
        "effect": "Curse for 5s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Endless Wailing Black Lotus",
        "icon": "skill001/skill0012_1",
        "description": "Deals 450% ATK + 350 magic damage to all enemies",
        "effect": "450% + 350 | Buff: Confusion (5s)"
      },
      {
        "rank": 2,
        "name": "Endless Wailing Black Lotus",
        "icon": "skill001/skill0012_2",
        "description": "Deals 550% ATK + 450 magic damage to all enemies",
        "effect": "550% + 450 | Buff: Confusion (6s)"
      },
      {
        "rank": 3,
        "name": "Endless Wailing Black Lotus",
        "icon": "skill001/skill0012_3",
        "description": "Deals 630% ATK + 500 magic damage to all enemies",
        "effect": "630% + 500 | Buff: Confusion (6s)"
      },
      {
        "rank": 4,
        "name": "Endless Wailing Black Lotus",
        "icon": "skill001/skill0012_4",
        "description": "Deals 700% ATK + 550 magic damage to all enemies",
        "effect": "700% + 550 | Buff: Confusion (7s)"
      },
      {
        "rank": 5,
        "name": "Endless Wailing Black Lotus",
        "icon": "skill001/skill0012_5",
        "description": "Deals 750% ATK + 600 magic damage to all enemies",
        "effect": "750% + 600 | Buff: Confusion (8s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Action Speed UP, Magic ATK UP",
        "icon": "skill001/skill1001",
        "effect": "Action Speed + (+10 / +10)",
        "effect2": "Magic Attack + (+259)"
      },
      {
        "slot": 2,
        "name": "Self Ultimate DMG UP, Magic CRIT UP",
        "icon": "skill001/skill1001",
        "effect": "Ultimate Damage + (+15)",
        "effect2": "Magic Critical Damage+ (+90)"
      }
    ],
    "name": "Kaguya",
    "id": 2071,
    "rarity": "SSR",
    "element": "Dark",
    "role": "Attacker",
    "tags": [
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 2578,
      "ATK": 204,
      "MATK": 340,
      "DEF": 57,
      "MDEF": 143
    },
    "skillRotation": {
      "opening": "Skill2 → Basic → Skill3 → Basic → Basic",
      "loop": "Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "120% ATK",
      "speedLabel": "Very Slow",
      "speedValue": "1.36"
    },
    "slug": "kaguya"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Weakness Exploit",
        "icon": "skill001/skill0002",
        "description": "Deals 270% ATK + 150 physical damage to the farthest enemy, and when the skill activates, applies Wind Type ATK + Lv5 (+20%) to self for 6 seconds",
        "target": "Backmost Enemy",
        "castTime": "1.78s",
        "damageScaling": "270% ATK",
        "baseDamage": "+150",
        "levelGrowth": "+25",
        "lvl1": "270% + 150",
        "lvl90": "270% + 2375",
        "effect": "Wind Type ATK + Lv5 (+20) for 6s"
      },
      {
        "slot": 3,
        "name": "Analysis",
        "icon": "skill001/skill0011",
        "description": "Applies Wind Type Defense - Lv4 (-18%) to the farthest enemy for 8 seconds and Block- Lv4 (-11) for 8 seconds",
        "target": "Backmost Enemy",
        "castTime": "1.78s",
        "effect": "Wind Type Defense - Lv4 (+-18) for 8s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Stardust Radiance of Seven Colors",
        "icon": "skill001/skill0003_1",
        "description": "Deals 400% ATK + 1200 physical damage to the farthest enemy and applies Wind Type ATK + (+30%) Ultimate Lv1 (+25%) to self for 6 seconds and Hit-Based Damage + (+60% / +4) Ultimate Lv1 (+80% / +4) for 10 seconds when the ultimate is activated.",
        "effect": "400% + 1200 | Buff: Wind Type ATK + (+30%) Ultimate Lv1 (+25) (6s)"
      },
      {
        "rank": 2,
        "name": "Stardust Radiance of Seven Colors",
        "icon": "skill001/skill0003_2",
        "description": "Deals 450% ATK + 1600 physical damage to the farthest enemy and applies Wind Type ATK + (+30%) Ultimate Lv2 (+35%) to self for 6 seconds and Hit-Based Damage + (+60% / +4) Ultimate Lv2 (+100% / +5) for 10 seconds when the ultimate is activated.",
        "effect": "450% + 1600 | Buff: Wind Type ATK + (+30%) Ultimate Lv2 (+35) (6s)"
      },
      {
        "rank": 3,
        "name": "Stardust Radiance of Seven Colors",
        "icon": "skill001/skill0003_3",
        "description": "Deals 480% ATK + 1900 physical damage to the farthest enemy and applies Wind Type ATK + (+30%) Ultimate Lv3 (+40%) to self for 6 seconds and Hit-Based Damage + (+60% / +4) Ultimate Lv3 (+120% / +5) for 10 seconds when the ultimate is activated.",
        "effect": "480% + 1900 | Buff: Wind Type ATK + (+30%) Ultimate Lv3 (+40) (6s)"
      },
      {
        "rank": 4,
        "name": "Stardust Radiance of Seven Colors",
        "icon": "skill001/skill0003_4",
        "description": "Deals 509% ATK + 2200 physical damage to the farthest enemy and applies Wind Type ATK + (+30%) Ultimate Lv4 (+45%) to self for 6 seconds and Hit-Based Damage + (+60% / +4) Ultimate Lv4 (+130% / +6) for 10 seconds when the ultimate is activated.",
        "effect": "509% + 2200 | Buff: Wind Type ATK + (+30%) Ultimate Lv4 (+45) (6s)"
      },
      {
        "rank": 5,
        "name": "Stardust Radiance of Seven Colors",
        "icon": "skill001/skill0003_5",
        "description": "Deals 535% ATK + 2500 physical damage to the farthest enemy and applies Wind Type ATK + (+30%) Ultimate Lv5 (+50%) to self for 6 seconds and Hit-Based Damage + (+60% / +4) Ultimate Lv5 (+140% / +6) for 10 seconds when the ultimate is activated.",
        "effect": "535% + 2500 | Buff: Wind Type ATK + (+30%) Ultimate Lv5 (+50) (6s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Physical ATK UP, Accuracy UP",
        "icon": "skill001/skill1001",
        "effect": "Physical Attack (+108%) + (+259)",
        "effect2": "Accuracy + (+15)"
      },
      {
        "slot": 2,
        "name": "Self Ultimate DMG UP, Accuracy UP",
        "icon": "skill001/skill1001",
        "effect": "Ultimate Damage + (+15)",
        "effect2": "Accuracy + (+15)"
      }
    ],
    "name": "Shaty",
    "id": 2072,
    "rarity": "SSR",
    "element": "Wind",
    "role": "Attacker",
    "tags": [
      "Debuff"
    ],
    "baseStats": {
      "HP": 1964,
      "ATK": 429,
      "MATK": 257,
      "DEF": 143,
      "MDEF": 57
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic → Basic",
      "loop": "Basic → Skill2 → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "shaty"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Deep Freeze",
        "icon": "skill001/skill0011",
        "description": "Deals 85% ATK + 70 magic damage to the 3 nearest enemies and inflicts Freeze Lv5 (-650) for 1.5 seconds and Accuracy - Lv4 (-11) for 9 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.38s",
        "damageScaling": "85% ATK",
        "baseDamage": "+70",
        "levelGrowth": "+6",
        "lvl1": "85% + 70",
        "lvl90": "85% + 604",
        "effect": "Freeze Lv5 (+-650) for 1.5s"
      },
      {
        "slot": 3,
        "name": "Earth Tomb",
        "icon": "skill001/skill0011",
        "description": "Deals 280% ATK + 200 magic damage to the farthest enemy and inflicts Stun for 1 seconds and Magic Defense- Lv5 (-23% / -50) for 5 seconds",
        "target": "Farthest Enemy",
        "castTime": "1.38s",
        "damageScaling": "280% ATK",
        "baseDamage": "+200",
        "levelGrowth": "+20",
        "lvl1": "280% + 200",
        "lvl90": "280% + 1980",
        "effect": "Stun for 1s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Elemental Blast",
        "icon": "skill001/skill0006_1",
        "description": "Deals 370% ATK + 300 magic damage to all enemies and inflicts Action Speed - (-50% / -50) Ultimate Lv1 (-8% / -8) for 9 seconds and Block- (-15) Ultimate Lv1 (-10) for 9 seconds",
        "effect": "370% + 300 | Buff: Action Speed - (-50% / -50) Ultimate Lv1 (+-10 / +-10) (9s)"
      },
      {
        "rank": 2,
        "name": "Elemental Blast",
        "icon": "skill001/skill0006_2",
        "description": "Deals 480% ATK + 400 magic damage to all enemies and inflicts Action Speed - (-50% / -50) Ultimate Lv2 (-10% / -10) for 9 seconds and Block- (-15) Ultimate Lv2 (-13) for 9 seconds",
        "effect": "480% + 400 | Buff: Action Speed - (-50% / -50) Ultimate Lv2 (+-13 / +-13) (9s)"
      },
      {
        "rank": 3,
        "name": "Elemental Blast",
        "icon": "skill001/skill0006_3",
        "description": "Deals 560% ATK + 480 magic damage to all enemies and inflicts Action Speed - (-50% / -50) Ultimate Lv3 (-12% / -12) for 9 seconds and Block- (-15) Ultimate Lv3 (-16) for 9 seconds",
        "effect": "560% + 480 | Buff: Action Speed - (-50% / -50) Ultimate Lv3 (+-16 / +-16) (9s)"
      },
      {
        "rank": 4,
        "name": "Elemental Blast",
        "icon": "skill001/skill0006_4",
        "description": "Deals 600% ATK + 550 magic damage to all enemies and inflicts Action Speed - (-50% / -50) Ultimate Lv4 (-14% / -14) for 9 seconds and Block- (-15) Ultimate Lv4 (-18) for 9 seconds",
        "effect": "600% + 550 | Buff: Action Speed - (-50% / -50) Ultimate Lv4 (+-18 / +-18) (9s)"
      },
      {
        "rank": 5,
        "name": "Elemental Blast",
        "icon": "skill001/skill0006_5",
        "description": "Deals 630% ATK + 600 magic damage to all enemies and inflicts Action Speed - (-50% / -50) Ultimate Lv5 (-15% / -15) for 9 seconds and Block- (-15) Ultimate Lv5 (-20) for 9 seconds",
        "effect": "630% + 600 | Buff: Action Speed - (-50% / -50) Ultimate Lv5 (+-20 / +-20) (9s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Magic ATK UP, Magic CRIT UP",
        "icon": "skill001/skill1001",
        "effect": "Magic Attack + (+259)",
        "effect2": "Magic Critical Damage+ (+90)"
      },
      {
        "slot": 2,
        "name": "Self Ultimate DMG UP, Action Speed UP",
        "icon": "skill001/skill1001",
        "effect": "Ultimate Damage + (+10)",
        "effect2": "Action Speed + (+15 / +15)"
      }
    ],
    "name": "Ophelio",
    "id": 2076,
    "rarity": "SSR",
    "element": "Fire",
    "role": "Attacker",
    "tags": [
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 1670,
      "ATK": 206,
      "MATK": 343,
      "DEF": 90,
      "MDEF": 226
    },
    "skillRotation": {
      "opening": "Skill3 → Basic → Skill2 → Basic → Basic",
      "loop": "Skill3 → Basic → Basic → Skill2 → Basic → Skill3 → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "ophelio"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Won’t you taste my sweets?",
        "icon": "skill001/skill0011",
        "description": "Deals 330% ATK + 150 physical damage to the nearest enemy and inflicts Poison Lv5 (-200) for 8 seconds and Block- Lv4 (-11) for 6 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.08s",
        "damageScaling": "330% ATK",
        "baseDamage": "+150",
        "levelGrowth": "+20",
        "lvl1": "330% + 150",
        "lvl90": "330% + 1930",
        "effect": "Poison Lv5 (+-200) for 8s"
      },
      {
        "slot": 3,
        "name": "Come now, have some.",
        "icon": "skill001/skill0019",
        "description": "Applies Hit-Based Damage + Lv4 (+35% / +3) to all allies for 15 seconds and Debuff Resistance Lv2 (+0.3%) for 8 seconds",
        "target": "All Allies",
        "castTime": "1.08s",
        "effect": "Hit-Based Damage + Lv4 (+35 / +3) for 15s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Accept it—this is your reward.",
        "icon": "skill001/skill0003_1",
        "description": "Deals 1170% ATK + 800 physical damage to the nearest enemy and inflicts Action Speed - (-50% / -50) Ultimate Lv1 (-8% / -8) for 10 seconds and Block- (-15) Ultimate Lv1 (-10) for 10 seconds",
        "effect": "1170% + 800 | Buff: Action Speed - (-50% / -50) Ultimate Lv1 (+-15 / +-15) (10s)"
      },
      {
        "rank": 2,
        "name": "Accept it—this is your reward.",
        "icon": "skill001/skill0003_2",
        "description": "Deals 1400% ATK + 1000 physical damage to the nearest enemy and inflicts Action Speed - (-50% / -50) Ultimate Lv2 (-10% / -10) for 10 seconds and Block- (-15) Ultimate Lv2 (-13) for 10 seconds",
        "effect": "1400% + 1000 | Buff: Action Speed - (-50% / -50) Ultimate Lv2 (+-20 / +-20) (10s)"
      },
      {
        "rank": 3,
        "name": "Accept it—this is your reward.",
        "icon": "skill001/skill0003_3",
        "description": "Deals 1560% ATK + 1100 physical damage to the nearest enemy and inflicts Action Speed - (-50% / -50) Ultimate Lv3 (-12% / -12) for 10 seconds and Block- (-15) Ultimate Lv3 (-16) for 10 seconds",
        "effect": "1560% + 1100 | Buff: Action Speed - (-50% / -50) Ultimate Lv3 (+-24 / +-24) (10s)"
      },
      {
        "rank": 4,
        "name": "Accept it—this is your reward.",
        "icon": "skill001/skill0003_4",
        "description": "Deals 1670% ATK + 1200 physical damage to the nearest enemy and inflicts Action Speed - (-50% / -50) Ultimate Lv4 (-14% / -14) for 10 seconds and Block- (-15) Ultimate Lv4 (-18) for 10 seconds",
        "effect": "1670% + 1200 | Buff: Action Speed - (-50% / -50) Ultimate Lv4 (+-27 / +-27) (10s)"
      },
      {
        "rank": 5,
        "name": "Accept it—this is your reward.",
        "icon": "skill001/skill0003_5",
        "description": "Deals 1730% ATK + 1300 physical damage to the nearest enemy and inflicts Action Speed - (-50% / -50) Ultimate Lv5 (-15% / -15) for 10 seconds and Block- (-15) Ultimate Lv5 (-20) for 10 seconds",
        "effect": "1730% + 1300 | Buff: Action Speed - (-50% / -50) Ultimate Lv5 (+-30 / +-30) (10s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Physical ATK UP, Action Speed UP",
        "icon": "skill001/skill1001",
        "effect": "Physical Attack (+108%) + (+389)",
        "effect2": "Action Speed + (+10 / +10)"
      },
      {
        "slot": 2,
        "name": "Self Skill DMG UP, 想屬性攻擊UP",
        "icon": "skill001/skill1001",
        "effect": "Skill Damage + (+30)",
        "effect2": "Mind Type ATK + (+10)"
      }
    ],
    "name": "[Queen of Pies and Cookies] Aphrodia",
    "id": 2095,
    "rarity": "SSR",
    "element": "Mind",
    "role": "Attacker",
    "tags": [
      "Buff",
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 1715,
      "ATK": 242,
      "MATK": 145,
      "DEF": 143,
      "MDEF": 57
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic → Basic",
      "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "queen-of-pies-and-cookies-aphrodia"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Someone is waiting for me.",
        "icon": "skill001/skill0007",
        "description": "Deals 130% ATK + 100 physical damage to the 3 nearest enemies and inflicts Action Speed - Lv3 (-14% / -14) for 7 seconds and Accuracy - Lv4 (-11) for 7 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.38s",
        "damageScaling": "130% ATK",
        "baseDamage": "+100",
        "levelGrowth": "+7",
        "lvl1": "130% + 100",
        "lvl90": "130% + 723",
        "effect": "Action Speed - Lv3 (+-14 / +-14) for 7s"
      },
      {
        "slot": 3,
        "name": "Please… just for tonight.",
        "icon": "skill001/skill0019",
        "description": "Applies Hit-Based Healing Shield Lv5 (+30% / +9) to self for 15 seconds and Block+ Lv5 (+13) for 15 seconds",
        "target": "Self",
        "castTime": "1.38s",
        "effect": "Hit-Based Healing Shield Lv5 (+30 / +9) for 15s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "I, too, can make someone happy.",
        "icon": "skill001/skill0022_1",
        "description": "Restores HP by 2600% ATK + 1500 to all allies and inflicts Physical Defense + (+5000%) Ultimate Lv1 (+20% / +150) for 10 seconds and Magic Defense+ (+20%) Ultimate Lv1 (+20% / +150) for 10 seconds",
        "effect": "2600% + 1500 | Buff: Physical Defense + (+5000%) Ultimate Lv1 (+20 / +250) (10s)"
      },
      {
        "rank": 2,
        "name": "I, too, can make someone happy.",
        "icon": "skill001/skill0022_2",
        "description": "Restores HP by 3000% ATK + 1800 to all allies and inflicts Physical Defense + (+5000%) Ultimate Lv2 (+25% / +250) for 10 seconds and Magic Defense+ (+20%) Ultimate Lv2 (+25% / +250) for 10 seconds",
        "effect": "3000% + 1800 | Buff: Physical Defense + (+5000%) Ultimate Lv2 (+25 / +350) (10s)"
      },
      {
        "rank": 3,
        "name": "I, too, can make someone happy.",
        "icon": "skill001/skill0022_3",
        "description": "Restores HP by 3250% ATK + 2000 to all allies and inflicts Physical Defense + (+5000%) Ultimate Lv3 (+30% / +300) for 10 seconds and Magic Defense+ (+20%) Ultimate Lv3 (+30% / +300) for 10 seconds",
        "effect": "3250% + 2000 | Buff: Physical Defense + (+5000%) Ultimate Lv3 (+30 / +400) (10s)"
      },
      {
        "rank": 4,
        "name": "I, too, can make someone happy.",
        "icon": "skill001/skill0022_4",
        "description": "Restores HP by 3500% ATK + 2100 to all allies and inflicts Physical Defense + (+5000%) Ultimate Lv4 (+35% / +350) for 10 seconds and Magic Defense+ (+20%) Ultimate Lv4 (+35% / +350) for 10 seconds",
        "effect": "3500% + 2100 | Buff: Physical Defense + (+5000%) Ultimate Lv4 (+35 / +450) (10s)"
      },
      {
        "rank": 5,
        "name": "I, too, can make someone happy.",
        "icon": "skill001/skill0022_5",
        "description": "Restores HP by 3700% ATK + 2200 to all allies and inflicts Physical Defense + (+5000%) Ultimate Lv5 (+40% / +400) for 10 seconds and Magic Defense+ (+20%) Ultimate Lv5 (+40% / +400) for 10 seconds",
        "effect": "3700% + 2200 | Buff: Physical Defense + (+5000%) Ultimate Lv5 (+40 / +500) (10s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Healing Power UP, Max HP UP",
        "icon": "skill001/skill1003",
        "effect": "Healing Amount + (+15)",
        "effect2": "Max HP + (+3444)"
      },
      {
        "slot": 2,
        "name": "All AlliesPhysical DEF UP, Magic DEF UP",
        "icon": "skill001/skill1006",
        "effect": "Physical Defense + (+141)",
        "effect2": "Magic Defense+ (+141)"
      }
    ],
    "name": "[Magical Holy Night Festival] Kaguya",
    "id": 2096,
    "rarity": "SSR",
    "element": "Mind",
    "role": "Tank",
    "tags": [
      "Heal",
      "Buff",
      "Debuff"
    ],
    "baseStats": {
      "HP": 2369,
      "ATK": 207,
      "MATK": 124,
      "DEF": 226,
      "MDEF": 90
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic → Basic",
      "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "magical-holy-night-festival-kaguya"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Alright, this is for you.",
        "icon": "skill001/skill0011",
        "description": "Deals 100% ATK + 50 magic damage to the 3 nearest enemies and inflicts Burn Lv3 (-80) for 12 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.38s",
        "damageScaling": "100% ATK",
        "baseDamage": "+50",
        "levelGrowth": "+6",
        "lvl1": "100% + 50",
        "lvl90": "100% + 584",
        "effect": "Burn Lv3 (+-80) for 12s"
      },
      {
        "slot": 3,
        "name": "Even if Santa gets it, it’s fine, right?",
        "icon": "skill001/skill0011",
        "description": "Inflicts Charm on the 3 nearest enemies for 1 seconds and Magic Defense- Lv3 (-18% / -30) for 8 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.38s",
        "effect": "Charm for 1s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "The gift… is… me.",
        "icon": "skill001/skill0012_1",
        "description": "Deals 1100% ATK + 500 magic damage to the nearest enemyand inflicts Dispel for 1 seconds (Dispel effect: removes all active buffs and prevents gaining buffs for the duration) and absorbs 6% of the damage dealt to restore own HP",
        "effect": "1100% + 500 + 6% lifesteal | Buff: Cleanse (1s)"
      },
      {
        "rank": 2,
        "name": "The gift… is… me.",
        "icon": "skill001/skill0012_2",
        "description": "Deals 1300% ATK + 600 magic damage to the nearest enemyand inflicts Dispel for 2 seconds (Dispel effect: removes all active buffs and prevents gaining buffs for the duration) and absorbs 6% of the damage dealt to restore own HP",
        "effect": "1300% + 600 + 6% lifesteal | Buff: Cleanse (2s)"
      },
      {
        "rank": 3,
        "name": "The gift… is… me.",
        "icon": "skill001/skill0012_3",
        "description": "Deals 1430% ATK + 700 magic damage to the nearest enemyand inflicts Dispel for 2 seconds (Dispel effect: removes all active buffs and prevents gaining buffs for the duration) and absorbs 6% of the damage dealt to restore own HP",
        "effect": "1430% + 700 + 6% lifesteal | Buff: Cleanse (2s)"
      },
      {
        "rank": 4,
        "name": "The gift… is… me.",
        "icon": "skill001/skill0012_4",
        "description": "Deals 1500% ATK + 750 magic damage to the nearest enemyand inflicts Dispel for 3 seconds (Dispel effect: removes all active buffs and prevents gaining buffs for the duration) and absorbs 6% of the damage dealt to restore own HP",
        "effect": "1500% + 750 + 6% lifesteal | Buff: Cleanse (3s)"
      },
      {
        "rank": 5,
        "name": "The gift… is… me.",
        "icon": "skill001/skill0012_5",
        "description": "Deals 1550% ATK + 800 magic damage to the nearest enemyand inflicts Dispel for 3 seconds (Dispel effect: removes all active buffs and prevents gaining buffs for the duration) and absorbs 6% of the damage dealt to restore own HP",
        "effect": "1550% + 800 + 6% lifesteal | Buff: Cleanse (3s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Magic ATK UP",
        "icon": "skill001/skill1001",
        "effect": "Magic Attack + (+259)"
      },
      {
        "slot": 2,
        "name": "Self Skill DMG UP, Max HP UP",
        "icon": "skill001/skill1001",
        "effect": "Skill Damage + (+20)",
        "effect2": "Max HP + (+2896)"
      }
    ],
    "name": "[Holy Night Succubus] Yu Rima Elca",
    "id": 2097,
    "rarity": "SR",
    "element": "Dark",
    "role": "Attacker",
    "tags": [
      "Disrupt",
      "Debuff"
    ],
    "baseStats": {
      "HP": 2332,
      "ATK": 188,
      "MATK": 314,
      "DEF": 7,
      "MDEF": 18
    },
    "skillRotation": {
      "opening": "Skill2 → Skill3 → Basic → Basic",
      "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "110% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "holy-night-succubus-yu-rima-elca"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "You’re so shameless",
        "icon": "skill001/skill0011",
        "description": "Deals 120% ATK + 100 magic damage to the 3 nearest enemies and inflicts Petrify for 2 seconds and Block- Lv5 (-13) for 12 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.42s",
        "damageScaling": "120% ATK",
        "baseDamage": "+100",
        "levelGrowth": "+7",
        "lvl1": "120% + 100",
        "lvl90": "120% + 723",
        "effect": "Petrify for 2s"
      },
      {
        "slot": 3,
        "name": "Mmh~ haa~",
        "icon": "skill001/skill0019",
        "description": "Applies Hit-Based Magic Damage + LvMax (+60% / +4) to self for 15 seconds and Magic Attack + Lv5 (+20% / +40) for 12 seconds and silences all enemies for 1.5 seconds",
        "target": "Self",
        "castTime": "0.8s",
        "effect": "Hit-Based Magic Damage + LvMax (+60 / +4) for 15s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "You all should try it too!",
        "icon": "skill001/skill0012_1",
        "description": "Deals 950% ATK + 800 magic damage to the nearest enemy and inflicts Magic Type Damage Taken+ (+30%) Ultimate Lv1 (+10%) for 8 seconds and applies Action Speed + (+5% / +5) Ultimate Lv1 (+8% / +8) to self for 10 seconds",
        "effect": "950% + 800 | Buff: Magic Type Damage Taken+ (+30%) Ultimate Lv1 (+10) (8s)"
      },
      {
        "rank": 2,
        "name": "You all should try it too!",
        "icon": "skill001/skill0012_2",
        "description": "Deals 1130% ATK + 1000 magic damage to the nearest enemy and inflicts Magic Type Damage Taken+ (+30%) Ultimate Lv2 (+13%) for 8 seconds and applies Action Speed + (+5% / +5) Ultimate Lv2 (+10% / +10) to self for 10 seconds",
        "effect": "1130% + 1000 | Buff: Magic Type Damage Taken+ (+30%) Ultimate Lv2 (+13) (8s)"
      },
      {
        "rank": 3,
        "name": "You all should try it too!",
        "icon": "skill001/skill0012_3",
        "description": "Deals 1270% ATK + 1150 magic damage to the nearest enemy and inflicts Magic Type Damage Taken+ (+30%) Ultimate Lv3 (+16%) for 8 seconds and applies Action Speed + (+5% / +5) Ultimate Lv3 (+12% / +12) to self for 10 seconds",
        "effect": "1270% + 1150 | Buff: Magic Type Damage Taken+ (+30%) Ultimate Lv3 (+16) (8s)"
      },
      {
        "rank": 4,
        "name": "You all should try it too!",
        "icon": "skill001/skill0012_4",
        "description": "Deals 1350% ATK + 1250 magic damage to the nearest enemy and inflicts Magic Type Damage Taken+ (+30%) Ultimate Lv4 (+18%) for 8 seconds and applies Action Speed + (+5% / +5) Ultimate Lv4 (+14% / +14) to self for 10 seconds",
        "effect": "1350% + 1250 | Buff: Magic Type Damage Taken+ (+30%) Ultimate Lv4 (+18) (8s)"
      },
      {
        "rank": 5,
        "name": "You all should try it too!",
        "icon": "skill001/skill0012_5",
        "description": "Deals 1450% ATK + 1300 magic damage to the nearest enemy and inflicts Magic Type Damage Taken+ (+30%) Ultimate Lv5 (+20%) for 8 seconds and applies Action Speed + (+5% / +5) Ultimate Lv5 (+15% / +15) to self for 10 seconds",
        "effect": "1450% + 1300 | Buff: Magic Type Damage Taken+ (+30%) Ultimate Lv5 (+20) (8s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Magic CRIT UP, Action Speed UP",
        "icon": "skill001/skill1001",
        "effect": "Magic Critical Damage+ (+176)",
        "effect2": "Accuracy + (+20)"
      },
      {
        "slot": 2,
        "name": "Self Ultimate DMG UP, Magic ATK UP",
        "icon": "skill001/skill1001",
        "effect": "Ultimate Damage + (+15)",
        "effect2": "Magic Attack + (+259)"
      }
    ],
    "name": "[Dragon Crusher] Medusa",
    "id": 2099,
    "rarity": "SSR",
    "element": "Dark",
    "role": "Attacker",
    "tags": [
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 1715,
      "ATK": 207,
      "MATK": 345,
      "DEF": 57,
      "MDEF": 143
    },
    "skillRotation": {
      "opening": "Skill2 → Skill3 → Basic → Basic",
      "loop": "Skill2 → Basic → Basic → Skill3 → Basic → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "130% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "dragon-crusher-medusa"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "“Longevity”",
        "icon": "skill001/skill0019",
        "description": "Restores HP by 2000% ATK + 600 to all allies and inflicts Debuff Resistance Lv2 (+0.3%) for 10 seconds and Accuracy + Lv3 (+9) for 10 seconds",
        "target": "All Allies",
        "castTime": "1.58s",
        "damageScaling": "2000% ATK",
        "baseDamage": "+600",
        "levelGrowth": "+40",
        "lvl1": "2000% + 600",
        "lvl90": "2000% + 4160",
        "effect": "Debuff Resistance Lv2 (30%) for 10s"
      },
      {
        "slot": 3,
        "name": "“Crane and Turtle”",
        "icon": "skill001/skill0007",
        "description": "Deals 110% ATK + 120 physical damage to the 3 nearest enemies and inflicts Physical Attack (+108%) - Lv4 (-11% / -25) for 7 seconds and Magic Attack - Lv4 (-11% / -25) for 7 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.58s",
        "damageScaling": "110% ATK",
        "baseDamage": "+120",
        "levelGrowth": "+6",
        "lvl1": "110% + 120",
        "lvl90": "110% + 654",
        "effect": "Physical Attack (+108%) - Lv4 (+-11 / +-25) for 7s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "“Bird-and-Beast Caricatures”",
        "icon": "skill001/skill0012_1",
        "description": "Deals 380% ATK + 600 physical damage to all enemies and inflicts Dispel for 3 seconds and Action Speed - (-50% / -50) Ultimate Lv1 (-8% / -8) for 8 seconds",
        "effect": "380% + 600 | Buff: Cleanse (3s)"
      },
      {
        "rank": 2,
        "name": "“Bird-and-Beast Caricatures”",
        "icon": "skill001/skill0012_2",
        "description": "Deals 450% ATK + 800 physical damage to all enemies and inflicts Dispel for 4 seconds and Action Speed - (-50% / -50) Ultimate Lv2 (-10% / -10) for 8 seconds",
        "effect": "450% + 800 | Buff: Cleanse (4s)"
      },
      {
        "rank": 3,
        "name": "“Bird-and-Beast Caricatures”",
        "icon": "skill001/skill0012_3",
        "description": "Deals 509% ATK + 950 physical damage to all enemies and inflicts Dispel for 4 seconds and Action Speed - (-50% / -50) Ultimate Lv3 (-12% / -12) for 8 seconds",
        "effect": "509% + 950 | Buff: Cleanse (4s)"
      },
      {
        "rank": 4,
        "name": "“Bird-and-Beast Caricatures”",
        "icon": "skill001/skill0012_4",
        "description": "Deals 550% ATK + 1100 physical damage to all enemies and inflicts Dispel for 5 seconds and Action Speed - (-50% / -50) Ultimate Lv4 (-14% / -14) for 8 seconds",
        "effect": "550% + 1100 | Buff: Cleanse (5s)"
      },
      {
        "rank": 5,
        "name": "“Bird-and-Beast Caricatures”",
        "icon": "skill001/skill0012_5",
        "description": "Deals 580% ATK + 1200 physical damage to all enemies and inflicts Dispel for 5 seconds and Action Speed - (-50% / -50) Ultimate Lv5 (-15% / -15) for 8 seconds",
        "effect": "580% + 1200 | Buff: Cleanse (5s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Action Speed UP, Max HP UP",
        "icon": "skill001/skill1003",
        "effect": "Action Speed + (+10 / +10)",
        "effect2": "Max HP + (+3444)"
      },
      {
        "slot": 2,
        "name": "All AlliesBlock UP, Max HP UP",
        "icon": "skill001/skill1007",
        "effect": "Block+ (+15)",
        "effect2": "Max HP + (+2896)"
      }
    ],
    "name": "[New Year’s Calligraphy] Pastel",
    "id": 2100,
    "rarity": "SSR",
    "element": "Water",
    "role": "Support",
    "tags": [
      "Heal",
      "Buff",
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 2745,
      "ATK": 306,
      "MATK": 183,
      "DEF": 82,
      "MDEF": 32
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic → Basic",
      "loop": "Basic → Basic → Skill2 → Skill3 → Basic → Basic → Basic → Skill2 → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "new-years-calligraphy-pastel"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "New outfit for the new year",
        "icon": "skill001/skill0007",
        "description": "Inflicts Physical Attack (+108%) - Lv3 (-9% / -20) on the 3 nearest enemies for 8 seconds and Magic Attack - Lv3 (-9% / -20) for 8 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.38s",
        "effect": "Physical Attack (+108%) - Lv3 (+-9 / +-20) for 8s"
      },
      {
        "slot": 3,
        "name": "Beauty is a deadly weapon",
        "icon": "skill001/skill0007",
        "description": "Deals 250% ATK + 120 physical damage to the nearest enemy and inflicts Accuracy - Lv4 (-11) for 7 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.38s",
        "damageScaling": "250% ATK",
        "baseDamage": "+120",
        "levelGrowth": "+15",
        "lvl1": "250% + 120",
        "lvl90": "250% + 1455",
        "effect": "Accuracy - Lv4 (+-11) for 7s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Come, everyone — enjoy this New Year’s feast!",
        "icon": "skill001/skill0022_1",
        "description": "Restores HP by 2200% ATK + 1400 to all allies and inflicts Block+ (+10) Ultimate Lv1 (+10) for 8 seconds",
        "effect": "2200% + 1400 | Buff: Block+ (+10) Ultimate Lv1 (+10) (8s)"
      },
      {
        "rank": 2,
        "name": "Come, everyone — enjoy this New Year’s feast!",
        "icon": "skill001/skill0022_2",
        "description": "Restores HP by 2700% ATK + 1600 to all allies and inflicts Block+ (+10) Ultimate Lv2 (+13) for 8 seconds",
        "effect": "2700% + 1600 | Buff: Block+ (+10) Ultimate Lv2 (+13) (8s)"
      },
      {
        "rank": 3,
        "name": "Come, everyone — enjoy this New Year’s feast!",
        "icon": "skill001/skill0022_3",
        "description": "Restores HP by 3000% ATK + 1800 to all allies and inflicts Block+ (+10) Ultimate Lv3 (+16) for 8 seconds",
        "effect": "3000% + 1800 | Buff: Block+ (+10) Ultimate Lv3 (+16) (8s)"
      },
      {
        "rank": 4,
        "name": "Come, everyone — enjoy this New Year’s feast!",
        "icon": "skill001/skill0022_4",
        "description": "Restores HP by 3200% ATK + 1900 to all allies and inflicts Block+ (+10) Ultimate Lv4 (+18) for 8 seconds",
        "effect": "3200% + 1900 | Buff: Block+ (+10) Ultimate Lv4 (+18) (8s)"
      },
      {
        "rank": 5,
        "name": "Come, everyone — enjoy this New Year’s feast!",
        "icon": "skill001/skill0022_5",
        "description": "Restores HP by 3400% ATK + 2000 to all allies and inflicts Block+ (+10) Ultimate Lv5 (+20) for 8 seconds",
        "effect": "3400% + 2000 | Buff: Block+ (+10) Ultimate Lv5 (+20) (8s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self 治癒UP",
        "icon": "skill001/skill1004",
        "effect": "Healing Amount + (+15)"
      },
      {
        "slot": 2,
        "name": "All Allies治癒UP, Block UP",
        "icon": "skill001/skill1008",
        "effect": "Healing Received + (+20)",
        "effect2": "Block+ (+10)"
      }
    ],
    "name": "[Overflowing Jubako] Lynette",
    "id": 2101,
    "rarity": "SR",
    "element": "Mind",
    "role": "Support",
    "tags": [
      "Heal",
      "Buff",
      "Debuff"
    ],
    "baseStats": {
      "HP": 3060,
      "ATK": 231,
      "MATK": 138,
      "DEF": 18,
      "MDEF": 7
    },
    "skillRotation": {
      "opening": "Skill2 → Skill3 → Basic → Basic",
      "loop": "Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2 → Skill3 → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "110% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "overflowing-jubako-lynette"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Sand Storm",
        "icon": "skill001/skill0008",
        "description": "Deals 140% ATK + 80 magic damage to the 3 farthest enemies and inflicts Accuracy DOWN for 8 seconds and Physical Critical Damage DOWN for 8 seconds",
        "target": "3 Farthest Enemies",
        "castTime": "0.71s",
        "damageScaling": "140% ATK",
        "baseDamage": "+80",
        "levelGrowth": "+6",
        "lvl1": "140% + 80",
        "lvl90": "140% + 614",
        "effect": "Accuracy DOWN, Physical Crit Rate DOWN for 8s"
      },
      {
        "slot": 3,
        "name": "Sand Vortex",
        "icon": "skill001/skill0008",
        "description": "Deals 120% ATK + 60 magic damage to the 3 nearest enemies and inflicts Action Speed DOWN for 8 seconds and Block DOWN for 8 seconds",
        "target": "3 Nearest Enemies",
        "castTime": "0.71s",
        "damageScaling": "120% ATK",
        "baseDamage": "+60",
        "levelGrowth": "+6",
        "lvl1": "120% + 60",
        "lvl90": "120% + 594",
        "effect": "Action Speed DOWN, Block DOWN for 8s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Sunshine Shooter",
        "icon": "skill001/skill0012_1",
        "description": "Deals 1100% ATK + 800 magic damage to the nearest enemy and inflicts Cleanse for 4 seconds and Blind for 8 seconds",
        "effect": "1100% + 800 | Cleanse (4s), Blind (8s)"
      },
      {
        "rank": 2,
        "name": "Sunshine Shooter",
        "icon": "skill001/skill0012_2",
        "description": "Deals 1300% ATK + 950 magic damage to the nearest enemy and inflicts Cleanse for 5 seconds and Blind for 8 seconds",
        "effect": "1300% + 950 | Cleanse (5s), Blind (8s)"
      },
      {
        "rank": 3,
        "name": "Sunshine Shooter",
        "icon": "skill001/skill0012_3",
        "description": "Deals 1470% ATK + 1050 magic damage to the nearest enemy and inflicts Cleanse for 5 seconds and Blind for 9 seconds",
        "effect": "1470% + 1050 | Cleanse (5s), Blind (9s)"
      },
      {
        "rank": 4,
        "name": "Sunshine Shooter",
        "icon": "skill001/skill0012_4",
        "description": "Deals 1530% ATK + 1130 magic damage to the nearest enemy and inflicts Cleanse for 6 seconds and Blind for 9 seconds",
        "effect": "1530% + 1130 | Cleanse (6s), Blind (9s)"
      },
      {
        "rank": 5,
        "name": "Sunshine Shooter",
        "icon": "skill001/skill0012_5",
        "description": "Deals 1590% ATK + 1200 magic damage to the nearest enemy and inflicts Cleanse for 6 seconds and Blind for 10 seconds",
        "effect": "1590% + 1200 | Cleanse (6s), Blind (10s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Magic ATK UP, Magic CRIT UP",
        "icon": "skill001/skill1001",
        "effect": "Magic Attack + (+259)",
        "effect2": "Magic Critical Damage + (+90)"
      },
      {
        "slot": 2,
        "name": "Self Skill Damage UP, Max HP UP",
        "icon": "skill001/skill1001",
        "effect": "Skill Damage + (+30%)",
        "effect2": "Max HP + (+2896)"
      }
    ],
    "name": "[Seductive High-Cut Swimsuit] Nerys",
    "id": 2077,
    "rarity": "SSR",
    "element": "Light",
    "role": "Attacker",
    "tags": [
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 2092,
      "ATK": 145,
      "MATK": 242,
      "DEF": 32,
      "MDEF": 82
    },
    "skillRotation": {
      "opening": "Skill2 → Basic → Skill3 → Basic → Basic",
      "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "120% ATK",
      "speedLabel": "Slightly Fast",
      "speedValue": "0.61"
    },
    "slug": "seductive-high-cut-swimsuit-nerys"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Gotta Avoid the Sunburn!",
        "icon": "skill001/skill0011",
        "description": "Deals 120% ATK + 80 magic damage to the 3 nearest enemies and inflicts Stun for 1.2 seconds",
        "target": "3 Nearest Enemies",
        "castTime": "0.88s",
        "damageScaling": "120% ATK",
        "baseDamage": "+80",
        "levelGrowth": "+8",
        "lvl1": "120% + 80",
        "lvl90": "120% + 792",
        "effect": "Stun for 1.2s"
      },
      {
        "slot": 3,
        "name": "I'll Drive You Wild!",
        "icon": "skill001/skill0019",
        "description": "Applies Action Speed UP and Magic Critical Damage UP to all allies for 7 seconds",
        "target": "All Allies",
        "castTime": "0.88s",
        "effect": "Action Speed +14%, Magic Crit Rate UP for 7s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Killer☆Bikini Attack!",
        "icon": "skill001/skill0022_1",
        "description": "Restores HP to all allies and applies Magic Attack UP for 8 seconds",
        "effect": "Heal + Magic Attack UP (8s)"
      },
      {
        "rank": 2,
        "name": "Killer☆Bikini Attack!",
        "icon": "skill001/skill0022_2",
        "description": "Restores HP to all allies and applies Magic Attack UP for 8 seconds",
        "effect": "Heal + Magic Attack UP (8s)"
      },
      {
        "rank": 3,
        "name": "Killer☆Bikini Attack!",
        "icon": "skill001/skill0022_3",
        "description": "Restores HP to all allies and applies Magic Attack UP for 9 seconds",
        "effect": "Heal + Magic Attack UP (9s)"
      },
      {
        "rank": 4,
        "name": "Killer☆Bikini Attack!",
        "icon": "skill001/skill0022_4",
        "description": "Restores HP to all allies and applies Magic Attack UP for 9 seconds",
        "effect": "Heal + Magic Attack UP (9s)"
      },
      {
        "rank": 5,
        "name": "Killer☆Bikini Attack!",
        "icon": "skill001/skill0022_5",
        "description": "Restores HP to all allies and applies Magic Attack UP for 10 seconds",
        "effect": "Heal + Magic Attack UP (10s)"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Healing Power UP, MP Charge UP",
        "icon": "skill001/skill1004",
        "effect": "Healing Power + (+30)",
        "effect2": "MP Charge + (+18)"
      },
      {
        "slot": 2,
        "name": "All Allies Healing Received UP, HP UP",
        "icon": "skill001/skill1008",
        "effect": "Healing Received + (+25)",
        "effect2": "Max HP + (+3000)"
      }
    ],
    "name": "[Killer☆Bikini] Theresia",
    "id": 2078,
    "rarity": "SSR",
    "element": "Mind",
    "role": "Support",
    "tags": [
      "Buff",
      "Debuff",
      "Disrupt",
      "Heal"
    ],
    "baseStats": {
      "HP": 2588,
      "ATK": 151,
      "MATK": 253,
      "DEF": 32,
      "MDEF": 82
    },
    "skillRotation": {
      "opening": "Skill3 → Basic → Skill2 → Basic → Basic",
      "loop": "Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2 → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.88"
    },
    "slug": "killer-bikini-theresia"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Perfect Cast!",
        "icon": "skill001/skill0002",
        "description": "Deals 90% ATK + 60 physical damage to the 3 nearest enemies",
        "target": "3 Nearest Enemies",
        "castTime": "1.11s",
        "damageScaling": "90% ATK",
        "baseDamage": "+60",
        "levelGrowth": "+8",
        "lvl1": "90% + 60",
        "lvl90": "90% + 772"
      },
      {
        "slot": 3,
        "name": "Reeling In the Big One!",
        "icon": "skill001/skill0002",
        "description": "Deals 130% ATK + 80 physical damage to the nearest enemy and inflicts Physical Defense DOWN for 8 seconds",
        "target": "Nearest Enemy",
        "castTime": "1.11s",
        "damageScaling": "130% ATK",
        "baseDamage": "+80",
        "levelGrowth": "+10",
        "lvl1": "130% + 80",
        "lvl90": "130% + 970",
        "effect": "Physical Defense DOWN for 8s"
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Angler's Ultimate Technique!",
        "icon": "skill001/skill0003_1",
        "description": "Deals 800% ATK + 500 physical damage to the 3 nearest enemies",
        "effect": "800% + 500"
      },
      {
        "rank": 2,
        "name": "Angler's Ultimate Technique!",
        "icon": "skill001/skill0003_2",
        "description": "Deals 950% ATK + 600 physical damage to the 3 nearest enemies",
        "effect": "950% + 600"
      },
      {
        "rank": 3,
        "name": "Angler's Ultimate Technique!",
        "icon": "skill001/skill0003_3",
        "description": "Deals 1050% ATK + 680 physical damage to the 3 nearest enemies",
        "effect": "1050% + 680"
      },
      {
        "rank": 4,
        "name": "Angler's Ultimate Technique!",
        "icon": "skill001/skill0003_4",
        "description": "Deals 1130% ATK + 740 physical damage to the 3 nearest enemies",
        "effect": "1130% + 740"
      },
      {
        "rank": 5,
        "name": "Angler's Ultimate Technique!",
        "icon": "skill001/skill0003_5",
        "description": "Deals 1200% ATK + 800 physical damage to the 3 nearest enemies",
        "effect": "1200% + 800"
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Physical ATK UP, Physical CRIT UP",
        "icon": "skill001/skill1002",
        "effect": "Physical Attack + (+200)",
        "effect2": "Physical Critical Damage + (+60)"
      },
      {
        "slot": 2,
        "name": "Self Skill Damage UP, Action Speed UP",
        "icon": "skill001/skill1002",
        "effect": "Skill Damage + (+20%)",
        "effect2": "Action Speed + (+10%)"
      }
    ],
    "name": "[Epic Fishing] Meinias",
    "id": 2079,
    "rarity": "SR",
    "element": "Water",
    "role": "Attacker",
    "tags": [
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 2159,
      "ATK": 330,
      "MATK": 198,
      "DEF": 18,
      "MDEF": 7
    },
    "skillRotation": {
      "opening": "Skill2 → Basic → Skill3 → Basic",
      "loop": "Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic → Skill2 → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "110% ATK",
      "speedLabel": "Slightly Slow",
      "speedValue": "1.11"
    },
    "slug": "epic-fishing-meinias"
  }
];

// Helper functions
export function getCharacterSkillsById(id) {
  return BUSTY_BURST_SKILLS_DATA.find(c => c.id === id);
}

export function getAllCharacterSkills() {
  return BUSTY_BURST_SKILLS_DATA;
}

export function getCharactersByRarity(rarity) {
  return BUSTY_BURST_SKILLS_DATA.filter(c => c.rarity === rarity);
}

// Speed label mappings
export const SPEED_LABELS = {
  'Very Fast': { tipText: 6.3, freezeTime: '0.36s' },
  'Fast': { tipText: 5.1, freezeTime: '0.61s' },
  'Slightly Fast': { tipText: 4.3, freezeTime: '0.71s' },
  'Normal': { tipText: 4.3, freezeTime: '0.86s' },
  'Slightly Slow': { tipText: 3.9, freezeTime: '0.96s' },
  'Slow': { tipText: 3.7, freezeTime: '1.11s' },
  'Very Slow': { tipText: 3.3, freezeTime: '1.36s' }
};

// Status Effects & Debuffs Reference
export const STATUS_EFFECTS = {
  crowdControl: {
    petrify: { name: 'Petrify', description: 'Unable to act, Block reduced to 0' },
    stun: { name: 'Stun', description: 'Unable to act' },
    freeze: { name: 'Freeze', description: 'Unable to act + HP damage per second (-150 to -700/s depending on level)' },
    sleep: { name: 'Sleep', description: 'Unable to act. Wakes when damaged, but that hit is a guaranteed CRIT' },
  },
  control: {
    silence: { name: 'Silence', description: 'Can only normal attack, cannot use Skills or Ultimate' },
    confusion: { name: 'Confusion', description: 'Attacks random targets (allies or enemies), cannot use Ultimate' },
    charm: { name: 'Charm', description: 'Attacks allies instead of enemies, cannot use Ultimate' },
    taunt: { name: 'Taunt', description: 'Forces enemy to attack the taunter' },
  },
  dot: {
    poison: { name: 'Poison', description: 'HP damage per second (-80 to -300/s depending on level)' },
    burn: { name: 'Burn', description: 'HP damage per second (-50 to -200/s depending on level), STACKABLE' },
    bleed: { name: 'Bleed', description: 'HP damage per second (-1% HP + flat damage)' },
  },
  statReduction: {
    paralysis: { name: 'Paralysis', description: 'Action Speed -50%, Physical ATK -50%, Magic ATK -50%' },
    curse: { name: 'Curse', description: 'Cannot recover HP/MP, Action Speed -50%, Critical Rate = 0' },
    blind: { name: 'Blind', description: 'Block = 0, Accuracy -50%' },
    fear: { name: 'Fear', description: 'MP drain per second (-20 to -100/s depending on level)' },
  },
  other: {
    cleanse: { name: 'Cleanse/Dispel', description: 'Removes all buffs from target' },
  },
};

// Buff Level Values Reference
export const BUFF_LEVELS = {
  attack: {
    Lv1: { percent: 10, flat: 20 },
    Lv2: { percent: 12, flat: 25 },
    Lv3: { percent: 15, flat: 30 },
    Lv4: { percent: 18, flat: 35 },
    Lv5: { percent: 20, flat: 40 },
  },
  defense: {
    Lv1: { percent: 10, flat: 15 },
    Lv2: { percent: 12, flat: 20 },
    Lv3: { percent: 15, flat: 25 },
    Lv4: { percent: 18, flat: 30 },
    Lv5: { percent: 20, flat: 35 },
  },
  block: {
    Lv1: 5, Lv2: 7, Lv3: 9, Lv4: 11, Lv5: 13, LvMax: 15,
  },
  actionSpeed: {
    Lv1: 7, Lv2: 11, Lv3: 14, Lv4: 17, Lv5: 20,
  },
  critDamage: {
    physical: { Lv1: 300, Lv2: 400, Lv3: 450, Lv4: 500, Lv5: 550 },
    magic: { Lv1: 400, Lv2: 500, Lv3: 580, Lv4: 640, Lv5: 700 },
  },
  elementDamageTaken: {
    Lv1: 10, Lv2: 13, Lv3: 16, Lv4: 18, Lv5: 20,
  },
};
