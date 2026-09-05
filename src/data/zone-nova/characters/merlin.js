// Merlin Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const merlinData = {
  // Basic Character Information
  name: 'Merlin',
  image: 'Merlin.png',
  rarity: 'SSR',
  element: 'Fire',
  class: 'Attacker', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
  role: 'DPS', // Tank, DPS, Supporter, Disruptor, Healer - Functional description
  faction: 'Avalon',

  // Base Stats (Level 80)
  stats: {
    hp: "5,040",
    attack: "780",
    defense: "474",
    energyRecovery: '0.25/s',
    critRate: '0%',
    critDmg: '50%',
    maxCritRate: '0%',
    maxCritDmg: '50%',
  },
  maxStats: {
    hp: '8,033',
    attack: '1,305',
    defense: '530',
  },
  talentTree: {
    totals: ["ATK +67.4%", "HP +59.4%", "DEF +12%"],
    enhancementNodes: [
      {
        name: "Enhancement I",
        rank: 2,
        bonus: "ATK +10%, HP +10%",
        materials: [{"name": "High-Precision Chip", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_2.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}],
        gold: 5000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "ATK +15%, HP +15%",
        materials: [{"name": "High-Precision Chip", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_2.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 20000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "ATK +20%, HP +20%",
        materials: [{"name": "High-Precision Chip", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_2.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 160000,
      },
    ],
    statNodes: [
      {
        node: "N1",
        stat: "HP +3.2%",
        unlock: "After E1",
        materials: [{"name": "High-Precision Chip", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 5000,
      },
      {
        node: "N2",
        stat: "ATK +3.2%",
        unlock: "Start",
        materials: [],
        gold: 2500,
      },
      {
        node: "N3",
        stat: "ATK +3.2%",
        unlock: "After N1",
        materials: [{"name": "High-Precision Chip", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 10000,
      },
      {
        node: "N4",
        stat: "DEF +4.8%",
        unlock: "After N1",
        materials: [{"name": "High-Precision Chip", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 10000,
      },
      {
        node: "N5",
        stat: "ATK +4.8%",
        unlock: "After N2",
        materials: [{"name": "High-Precision Chip", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 20000,
      },
      {
        node: "N6",
        stat: "DEF +7.2%",
        unlock: "After N2",
        materials: [{"name": "High-Precision Chip", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 160000,
      },
      {
        node: "N7",
        stat: "HP +4.8%",
        unlock: "After E2",
        materials: [{"name": "High-Precision Chip", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 45000,
      },
      {
        node: "N8",
        stat: "ATK +4.8%",
        unlock: "After E2",
        materials: [{"name": "High-Precision Chip", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 45000,
      },
      {
        node: "N9",
        stat: "ATK +6.4%",
        unlock: "Lv 80",
        materials: [{"name": "High-Precision Chip", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 160000,
      },
      {
        node: "N10",
        stat: "HP +6.4%",
        unlock: "Lv 75",
        materials: [{"name": "High-Precision Chip", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 160000,
      },
    ],
    levels: [
      {
        level: 2,
        gold: 2500,
        materials: [],
      },
      {
        level: 3,
        gold: 5000,
        materials: [{"name": "Blaze Aether", "amount": 3, "icon": "Icon_Talent_Rankup_Fire_1.png"}],
      },
      {
        level: 4,
        gold: 10000,
        materials: [{"name": "Blaze Aetherstone", "amount": 3, "icon": "Icon_Talent_Rankup_Fire_2.png"}],
      },
      {
        level: 5,
        gold: 20000,
        materials: [{"name": "Blaze Aetherstone", "amount": 5, "icon": "Icon_Talent_Rankup_Fire_2.png"}],
      },
      {
        level: 6,
        gold: 30000,
        materials: [{"name": "Blaze Aetherstone", "amount": 7, "icon": "Icon_Talent_Rankup_Fire_2.png"}],
      },
      {
        level: 7,
        gold: 45000,
        materials: [{"name": "Blaze Aether Lany.", "amount": 3, "icon": "Icon_Talent_Rankup_Fire_3.png"}],
      },
      {
        level: 8,
        gold: 80000,
        materials: [{"name": "Blaze Aether Lany.", "amount": 5, "icon": "Icon_Talent_Rankup_Fire_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}],
      },
      {
        level: 9,
        gold: 160000,
        materials: [{"name": "Blaze Aether Lany.", "amount": 8, "icon": "Icon_Talent_Rankup_Fire_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 300000,
        materials: [{"name": "Blaze Aether Lany.", "amount": 14, "icon": "Icon_Talent_Rankup_Fire_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },

  // Skills
  skills: {
    normal:     {
      name: "Blazing Slash",
      cooldown: "2.0s",
      description: "Deals 120% Attack as fire damage to the targeted enemy unit",
      template: "Deals {0} Attack as fire damage to the targeted enemy unit",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Magic Swordsmanship: Molten Core Burst",
      cooldown: "5.0s",
      description: "Deals 780% Attack as fire damage to the targeted enemy unit And applies [Mark]\nWhen Merlin uses an ULT to attack a target with [Mark], damage increases by 20%",
      template: "Deals {0} Attack as fire damage to the targeted enemy unit And applies [Mark]\nWhen Merlin uses an ULT to attack a target with [Mark], damage increases by 20%",
      levelValues: [["357.5%", "100%"], ["390%", "100%"], ["422.5%", "100%"], ["455%", "100%"], ["487.5%", "100%"], ["520%", "100%"], ["552.5%", "100%"], ["585%", "100%"], ["617.5%", "100%"], ["650%", "100%"], ["682.5%", "100%"], ["715%", "100%"], ["747.5%", "100%"], ["780%", "100%"]],
    },
    ultimate:     {
      name: "Magic Swordsmanship: King's Blade",
      energyCost: "6",
      cooldown: "1.0s",
      description: "Deals 1080% Attack as fire damage to the targeted enemy unit\nAfter a [Supporter] uses an ULT, can use 1 [Enhanced ULT] within 5 seconds\n[Enhanced ULT]: Deals 1200% Attack as fire damage to the targeted enemy unit, with a 30% multiplier increase when only one enemy is present",
      template: "Deals {0} Attack as fire damage to the targeted enemy unit\nAfter a [Supporter] uses an ULT, can use 1 [Enhanced ULT] within 5 seconds\n[Enhanced ULT]: Deals {1} Attack as fire damage to the targeted enemy unit, with a 30% multiplier increase when only one enemy is present",
      levelValues: [["495%", "550%"], ["540%", "600%"], ["585%", "650%"], ["630%", "700%"], ["675%", "750%"], ["720%", "800%"], ["765%", "850%"], ["810%", "900%"], ["855%", "950%"], ["900%", "1000%"], ["945%", "1050%"], ["990%", "1100%"], ["1035%", "1150%"], ["1080%", "1200%"]],
    },
    passive:     {
      name: "Rune Oscillation",
      description: "When an ULT crits, deals an additional 120% Attack as fire damage",
      template: "When an ULT crits, deals an additional {0} Attack as fire damage",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
  },

  // Team Skill
  teamSkill: {
    name: "Combo Skill",
    description: "Self Critical Rate increases by 7.5%\nAt battle start, every 15% Critical Rate increases self Critical Damage by 7.5%, up to 6 times",
    requirements: {
      faction: "Avalon",
      element: "Fire",
      alternativeConditions: "Team contains 2 Avalon characters or 2 Fire characters",
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect: "Critical rate increases by 15%",
    },
    {
      level: 2,
      effect: "After a [Disruptor] uses an ULT, can use one [Enhanced ULT] within 5 seconds And when using an [Enhanced ULT], critical damage increases by 20%",
    },
    {
      level: 3,
      effect: "[Skill] and [Normal Attack] level and level cap +4",
    },
    {
      level: 4,
      effect: "ULT damage increases by 35%",
    },
    {
      level: 5,
      effect: "[ULT] and [Passive] level and level cap +4",
    },
    {
      level: 6,
      effect: "[Enhanced ULT] ignores 20% of the target's elemental resistance",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "Monster in the Dense Forest",
    image: "Merlincard",
    stats: {
      hp: "5,040",
      attack: "780",
      defense: "474",
    },
    effects: [  // awakening levels 1-5
      "Attack increases by 24%, when there is only one enemy on the field, ULT damage increases by 24%",
      "Attack increases by 28%, when there is only one enemy on the field, ULT damage increases by 28%",
      "Attack increases by 32%, when there is only one enemy on the field, ULT damage increases by 32%",
      "Attack increases by 36%, when there is only one enemy on the field, ULT damage increases by 36%",
      "Attack increases by 40%, when there is only one enemy on the field, ULT damage increases by 40%",
    ],
    restriction: "Only effective for Attacker",
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Melee', 'Crit Dmg', 'Enhanced Ultimate', 'Crit Rate', 'Damage Increase'],
};

// SEO data for Merlin
export const merlinSEO = {
  title: `${merlinData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${merlinData.name}, a ${merlinData.rarity} ${merlinData.element} ${merlinData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default merlinData;
