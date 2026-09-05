// Naiya Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const naiyaData = {
  // Basic Character Information
  name: 'Naiya',
  image: 'Naiya.png', // Character image identifier
  rarity: 'SSR',
  element: 'Ice',
  class: 'Supporter', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
  role: 'Supporter', // Tank, DPS, Supporter, Disruptor, Healer - Functional description
  faction: 'Safir',

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
        materials: [{"name": "Energy Vial", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_1.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}],
        gold: 5000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "ATK +15%, HP +15%",
        materials: [{"name": "Energy Vial", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_1.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 20000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "ATK +20%, HP +20%",
        materials: [{"name": "Energy Vial", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_1.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 160000,
      },
    ],
    statNodes: [
      {
        node: "N1",
        stat: "HP +3.2%",
        unlock: "After E1",
        materials: [{"name": "Energy Vial", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
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
        materials: [{"name": "Energy Vial", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 10000,
      },
      {
        node: "N4",
        stat: "DEF +4.8%",
        unlock: "After N1",
        materials: [{"name": "Energy Vial", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 10000,
      },
      {
        node: "N5",
        stat: "ATK +4.8%",
        unlock: "After N2",
        materials: [{"name": "Energy Vial", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 20000,
      },
      {
        node: "N6",
        stat: "DEF +7.2%",
        unlock: "After N2",
        materials: [{"name": "Energy Vial", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 160000,
      },
      {
        node: "N7",
        stat: "HP +4.8%",
        unlock: "After E2",
        materials: [{"name": "Energy Vial", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 45000,
      },
      {
        node: "N8",
        stat: "ATK +4.8%",
        unlock: "After E2",
        materials: [{"name": "Energy Vial", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 45000,
      },
      {
        node: "N9",
        stat: "ATK +6.4%",
        unlock: "Lv 80",
        materials: [{"name": "Energy Vial", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 160000,
      },
      {
        node: "N10",
        stat: "HP +6.4%",
        unlock: "Lv 75",
        materials: [{"name": "Energy Vial", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
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
        materials: [{"name": "Frost Aether", "amount": 3, "icon": "Icon_Talent_Rankup_Ice_1.png"}],
      },
      {
        level: 4,
        gold: 10000,
        materials: [{"name": "Frost Aetherstone", "amount": 3, "icon": "Icon_Talent_Rankup_Ice_2.png"}],
      },
      {
        level: 5,
        gold: 20000,
        materials: [{"name": "Frost Aetherstone", "amount": 5, "icon": "Icon_Talent_Rankup_Ice_2.png"}],
      },
      {
        level: 6,
        gold: 30000,
        materials: [{"name": "Frost Aetherstone", "amount": 7, "icon": "Icon_Talent_Rankup_Ice_2.png"}],
      },
      {
        level: 7,
        gold: 45000,
        materials: [{"name": "Frost Aether Lany.", "amount": 3, "icon": "Icon_Talent_Rankup_Ice_3.png"}],
      },
      {
        level: 8,
        gold: 80000,
        materials: [{"name": "Frost Aether Lany.", "amount": 5, "icon": "Icon_Talent_Rankup_Ice_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}],
      },
      {
        level: 9,
        gold: 160000,
        materials: [{"name": "Frost Aether Lany.", "amount": 8, "icon": "Icon_Talent_Rankup_Ice_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 300000,
        materials: [{"name": "Frost Aether Lany.", "amount": 14, "icon": "Icon_Talent_Rankup_Ice_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },

  // Skills
  skills: {
    normal:     {
      name: "Light Art Shot",
      cooldown: "2.0s",
      description: "Deals 120% Attack as ice damage to the targeted enemy unit",
      template: "Deals {0} Attack as ice damage to the targeted enemy unit",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Precision Deployment",
      cooldown: "5.0s",
      description: "The allied character with the highest Attack gains [Battle Intent]\nIncreases 168% Attack, up to 84% of self initial Attack, for 15 seconds",
      template: "The allied character with the highest Attack gains [Battle Intent]\nIncreases {0} Attack, up to {1} of self initial Attack, for 15 seconds",
      levelValues: [["77%", "38.5%"], ["84%", "42%"], ["91%", "45.5%"], ["98%", "49%"], ["105%", "52.5%"], ["112%", "56%"], ["119%", "59.5%"], ["126%", "63%"], ["133%", "66.5%"], ["140%", "70%"], ["147%", "73.5%"], ["154%", "77%"], ["161%", "80.5%"], ["168%", "84%"]],
    },
    ultimate:     {
      name: "Zero Lock",
      energyCost: "3",
      cooldown: "1.0s",
      description: "Deals 480% Attack as ice damage to the targeted enemy unit, [Interrupts] their casting skill\nAnd increases all allied units' Attack by 36% and Critical Damage by 53.9% for 10 seconds",
      template: "Deals {0} Attack as ice damage to the targeted enemy unit, [Interrupts] their casting skill\nAnd increases all allied units' Attack by {1} and Critical Damage by {2} for 10 seconds",
      levelValues: [["220%", "16.5%", "25%"], ["240%", "18%", "27.2%"], ["260%", "19.5%", "29.4%"], ["280%", "21%", "31.7%"], ["300%", "22.5%", "33.9%"], ["320%", "24%", "36.1%"], ["340%", "25.5%", "38.3%"], ["360%", "27%", "40.6%"], ["380%", "28.5%", "42.8%"], ["400%", "30%", "45%"], ["420%", "31.5%", "47.2%"], ["440%", "33%", "49.4%"], ["460%", "34.5%", "51.7%"], ["480%", "36%", "53.9%"]],
    },
    passive:     {
      name: "Battle Intent Synergy",
      description: "When a character with [Battle Intent] kills an enemy, damage increases by 17% for 10 seconds, up to 3 stacks\nAnd instantly restores 1 energy to the team, triggering up to once per second",
      template: "When a character with [Battle Intent] kills an enemy, damage increases by {0} for 10 seconds, up to 3 stacks\nAnd instantly restores 1 energy to the team, triggering up to once per second",
      levelValues: [["10.5%"], ["11%"], ["11.5%"], ["12%"], ["12.5%"], ["13%"], ["13.5%"], ["14%"], ["14.5%"], ["15%"], ["15.5%"], ["16%"], ["16.5%"], ["17%"]],
    },
  },

  // Team Skill
  teamSkill: {
    name: "Combo Skill",
    description: "At battle start, team damage increases by 10%\nFor every 500 Attack, team damage increases by an additional 5%, up to 6 times",
    requirements: {
      faction: "Safir",
      element: "Ice",
      alternativeConditions: "Team contains 2 Safir characters or 2 Ice characters",
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect: "After casting an ULT, all allies gain an additional 20% Attack for 20 seconds",
    },
    {
      level: 2,
      effect: "When a character with [Battle Intent] kills an enemy, restore 1 energy to the team, triggering up to once per second",
    },
    {
      level: 3,
      effect: "[Skill] and [Normal Attack] level and level cap +4",
    },
    {
      level: 4,
      effect: "Characters with [Battle Intent] deal additional <color=#1ec1ff>Frost</color> damage equal to 500% of Nia's Attack, triggering up to once every 10 seconds",
    },
    {
      level: 5,
      effect: "[ULT] and [Passive] level and level cap +4",
    },
    {
      level: 6,
      effect: "ULT duration extends to 20 seconds And damage multiplier increases by 100%",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "And Also Chocolate",
    image: "naiyacard",
    stats: {
      hp: "6,000",
      attack: "600",
      defense: "600",
    },
    effects: [  // awakening levels 1-5
      "Attack increases by 24%, after the wearer casts an ULT, team ULT damage increases by 24% for 5 seconds",
      "Attack increases by 28%, after the wearer casts an ULT, team ULT damage increases by 28% for 5 seconds",
      "Attack increases by 32%, after the wearer casts an ULT, team ULT damage increases by 32% for 5 seconds",
      "Attack increases by 36%, after the wearer casts an ULT, team ULT damage increases by 36% for 5 seconds",
      "Attack increases by 40%, after the wearer casts an ULT, team ULT damage increases by 40% for 5 seconds",
    ],
    restriction: "Only effective for Supporter",
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Range', 'Buff', 'Crit Dmg Increases', 'Energy', 'Atk Increases', 'Damage Increases'],
};

// SEO data for Naiya
export const naiyaSEO = {
  title: `${naiyaData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${naiyaData.name}, a ${naiyaData.rarity} ${naiyaData.element} ${naiyaData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default naiyaData;
