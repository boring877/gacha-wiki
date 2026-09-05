// Lyra Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const lyraData = {
  // Basic Character Information
  name: 'Lyra',
  image: 'Lyra.png',
  rarity: 'SSR',
  element: 'Fire',
  class: 'Destroyer', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
  role: 'DPS', // Tank, DPS, Supporter, Disruptor, Healer - Functional description
  faction: 'Safir',

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
      name: "Final Blade Combo",
      cooldown: "2.0s",
      description: "Deals 120% Attack as fire damage to the targeted enemy unit",
      template: "Deals {0} Attack as fire damage to the targeted enemy unit",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Dual-Wield: Final Blade Barrage",
      cooldown: "8.0s",
      description: "Deals 480% Attack as fire damage to the targeted enemy unit And applies [fire Mark] for 10 seconds",
      template: "Deals {0} Attack as fire damage to the targeted enemy unit And applies [fire Mark] for 10 seconds",
      levelValues: [["220%"], ["240%"], ["260%"], ["280%"], ["300%"], ["320%"], ["340%"], ["360%"], ["380%"], ["400%"], ["420%"], ["440%"], ["460%"], ["480%"]],
    },
    ultimate:     {
      name: "Dual-Wield: Final Blade Phantom Slash",
      energyCost: "5",
      cooldown: "1.0s",
      description: "Deals 360% fire damage to the targeted enemy unit\nIf the target has [fire Mark], consumes [fire Mark] And deals 360% fire damage to the target and enemies behind it",
      template: "Deals {0} fire damage to the targeted enemy unit\nIf the target has [fire Mark], consumes [fire Mark] And deals {1} fire damage to the target and enemies behind it",
      levelValues: [["165%", "165%"], ["180%", "180%"], ["195%", "195%"], ["210%", "210%"], ["225%", "225%"], ["240%", "240%"], ["255%", "255%"], ["270%", "270%"], ["285%", "285%"], ["300%", "300%"], ["315%", "315%"], ["330%", "330%"], ["345%", "345%"], ["360%", "360%"]],
    },
    passive:     {
      name: "Black Armor Propulsion",
      description: "For each enemy unit on the field, increases 19% Attack, up to 4 times",
      template: "For each enemy unit on the field, increases {0} Attack, up to 4 times",
      levelValues: [["6%"], ["7%"], ["8%"], ["9%"], ["10%"], ["11%"], ["12%"], ["13%"], ["14%"], ["15%"], ["16%"], ["17%"], ["18%"], ["19%"]],
    },
  },

  // Team Skill
  teamSkill: {
    name: "Combo Skill",
    description: "Self Critical Rate increases by 7.5%\nAt battle start, every 15% Critical Rate increases self Critical Damage by 7.5%, up to 6 times",
    requirements: {
      faction: "Safir",
      element: "Fire",
      alternativeConditions: "Team contains 2 Safir characters or 2 Fire characters",
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
      effect: "Skill cooldown time decreases by 40%",
    },
    {
      level: 3,
      effect: "[Skill] and [Normal Attack] level and level cap +4",
    },
    {
      level: 4,
      effect: "<color=#c90d0d>Blaze</color> damage increases by 35%",
    },
    {
      level: 5,
      effect: "[ULT] and [Passive] level and level cap +4",
    },
    {
      level: 6,
      effect: "ULT damage ignores 20% of the target's Blaze resistance",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "Self-Indulgence",
    image: "Lyracard",
    stats: {
      hp: "5,040",
      attack: "780",
      defense: "474",
    },
    effects: [  // awakening levels 1-5
      "ULT damage increases by 24%, for each enemy on the field, ULT damage increases by an additional 6%, up to 4 times",
      "ULT damage increases by 28%, for each enemy on the field, ULT damage increases by an additional 7%, up to 4 times",
      "ULT damage increases by 32%, for each enemy on the field, ULT damage increases by an additional 8%, up to 4 times",
      "ULT damage increases by 36%, for each enemy on the field, ULT damage increases by an additional 9%, up to 4 times",
      "ULT damage increases by 40%, for each enemy on the field, ULT damage increases by an additional 10%, up to 4 times",
    ],
    restriction: "Only effective for Destroyer",
  },

  // Character Tags - Reusable across multiple characters
  tags: [
    'Melee',
    'Crit Rate',
    'Crit Dmg',
    'Enhanced Ultimate',
    'Cooldown Reduction',
    'Increase Attack',
  ],
};

// SEO data for Lyra
export const lyraSEO = {
  title: `${lyraData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${lyraData.name}, a ${lyraData.rarity} ${lyraData.element} ${lyraData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default lyraData;
