// Apollo Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js
// Instructions: Copy this file to the same directory as your character's .astro file

export const apolloData = {
  // Basic Character Information
  name: 'Apollo',
  image: 'Apollo.png', // Use format: charactername (e.g., 'penny')
  rarity: 'SSR', // SSR, SR, R
  element: 'Fire', // Fire, Ice, Wind, Holy, Chaos
  class: 'Supporter', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
  role: 'Supporter', // Tank, DPS, Supporter, Disruptor, Healer - Functional description
  faction: 'Otis', // Savir, etc.

  // Base Stats (Level 80)
  stats: {
    hp: "6,000",
    attack: "600",
    defense: "600",
    energyRecovery: '0.25/s',
    critRate: '0%',
    critDmg: '50%',
    maxCritRate: '0%',
    maxCritDmg: '50%',
  },
  maxStats: {
    hp: '9,564',
    attack: '1,004',
    defense: '672',
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
      name: "Solar Flash Strike",
      cooldown: "2.0s",
      description: "Deals 120% Attack as fire damage to the targeted enemy unit",
      template: "Deals {0} Attack as fire damage to the targeted enemy unit",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Kagura Blessing",
      cooldown: "5.0s",
      description: "All allied units' damage increases by 24%, [Pursue] damage additionally increases by 36%",
      template: "All allied units' damage increases by {0}, [Pursue] damage additionally increases by {1}",
      levelValues: [["11%", "16.5%"], ["12%", "18%"], ["13%", "19.5%"], ["14%", "21%"], ["15%", "22.5%"], ["16%", "24%"], ["17%", "25.5%"], ["18%", "27%"], ["19%", "28.5%"], ["20%", "30%"], ["21%", "31.5%"], ["22%", "33%"], ["23%", "34.5%"], ["24%", "36%"]],
    },
    ultimate:     {
      name: "Solar Chant",
      energyCost: "8",
      cooldown: "1.0s",
      description: "Enters [Corona] state, chanting for 10 seconds, during which all allied units' Attack increases by 120%, skill effects remain active, And when each ally casts an ULT, Apollo triggers one [Pursue] with 100% Critical Rate, dealing 360% Attack as fire damage, triggering up to once every 5 seconds per ally",
      template: "Enters [Corona] state, chanting for 10 seconds, during which all allied units' Attack increases by {0}, skill effects remain active, And when each ally casts an ULT, Apollo triggers one [Pursue] with 100% Critical Rate, dealing {1} Attack as fire damage, triggering up to once every 5 seconds per ally",
      levelValues: [["55%", "165%"], ["60%", "180%"], ["65%", "195%"], ["70%", "210%"], ["75%", "225%"], ["80%", "240%"], ["85%", "255%"], ["90%", "270%"], ["95%", "285%"], ["100%", "300%"], ["105%", "315%"], ["110%", "330%"], ["115%", "345%"], ["120%", "360%"]],
    },
    passive:     {
      name: "Scorching Verdict",
      description: "Each skill cast by Apollo grants all allied units 1 stack of [Scorching Light], each stack increasing Critical Rate by 2.4% and Critical Damage by 4.8%, up to 10 stacks\nAfter each ally deals [Pursue] damage, instantly grants all allied units 1 stack of [Scorching Light], And Apollo gains 1 stack of [Blazing Radiance]\nEvery 4 stacks of [Blazing Radiance] increases energy by 1, triggering up to once per second per unit",
      template: "Each skill cast by Apollo grants all allied units 1 stack of [Scorching Light], each stack increasing Critical Rate by {0} and Critical Damage by {1}, up to 10 stacks\nAfter each ally deals [Pursue] damage, instantly grants all allied units 1 stack of [Scorching Light], And Apollo gains 1 stack of [Blazing Radiance]\nEvery 4 stacks of [Blazing Radiance] increases energy by 1, triggering up to once per second per unit",
      levelValues: [["1.1%", "2.2%"], ["1.2%", "2.4%"], ["1.3%", "2.6%"], ["1.4%", "2.8%"], ["1.5%", "3%"], ["1.6%", "3.2%"], ["1.7%", "3.4%"], ["1.8%", "3.6%"], ["1.9%", "3.8%"], ["2%", "4%"], ["2.1%", "4.2%"], ["2.2%", "4.4%"], ["2.3%", "4.6%"], ["2.4%", "4.8%"]],
    },
  },

  // Team Skill
  teamSkill: {
    name: "Combo Skill",
    description: "At battle start, team damage increases by 10%\nFor every 500 Attack, team damage increases by an additional 5%, up to 6 times",
    requirements: {
      faction: "Otis",
      element: "Fire",
      alternativeConditions: "Team contains 2 Otis characters or 2 Fire characters",
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect: "After allies deal [Pursue] damage, gain one stack of [Scorching Light], triggering up to once per second per character",
    },
    {
      level: 2,
      effect: "In [Corona] state, damage taken decreases by 50%",
    },
    {
      level: 3,
      effect: "[Skill] and [Normal Attack] level and level cap +4",
    },
    {
      level: 4,
      effect: "In [Corona] state, all allies gain 10% elemental resistance penetration",
    },
    {
      level: 5,
      effect: "[ULT] and [Passive] level and level cap +4",
    },
    {
      level: 6,
      effect: "In [Corona] state, Apollo's [Pursue] gains an additional 50% critical damage",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "The Loneliest Moment",
    image: "Apollocard.png",
    stats: {
      hp: "6,000",
      attack: "600",
      defense: "600",
    },
    effects: [  // awakening levels 1-5
      "After entering battle, all team members' damage increases by 24%, Pursue Damage increases by an additional 24%, when the wearer's ULT consumes 8 or more energy, all team members' Energy Gain Efficiency increases by 50% for 10 seconds",
      "After entering battle, all team members' damage increases by 28%, Pursue Damage increases by an additional 28%, when the wearer's ULT consumes 8 or more energy, all team members' Energy Gain Efficiency increases by 62.5% for 10 seconds",
      "After entering battle, all team members' damage increases by 32%, Pursue Damage increases by an additional 32%, when the wearer's ULT consumes 8 or more energy, all team members' Energy Gain Efficiency increases by 75% for 10 seconds",
      "After entering battle, all team members' damage increases by 36%, Pursue Damage increases by an additional 36%, when the wearer's ULT consumes 8 or more energy, all team members' Energy Gain Efficiency increases by 87.5% for 10 seconds",
      "After entering battle, all team members' damage increases by 40%, Pursue Damage increases by an additional 40%, when the wearer's ULT consumes 8 or more energy, all team members' Energy Gain Efficiency increases by 100% for 10 seconds",
    ],
    restriction: "Only effective for Supporter",
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Ranged', 'Extra Attack', 'Buff', 'Energy Recovery'],
};

// SEO data for Apollo
export const apolloSEO = {
  title: `${apolloData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${apolloData.name}, a ${apolloData.rarity} ${apolloData.element} ${apolloData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default apolloData;
