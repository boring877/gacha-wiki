// Horus Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const horusData = {
  // Basic Character Information
  name: 'Horus',
  image: 'Horus.png', // Character image identifier
  rarity: 'SSR',
  element: 'Holy',
  class: 'Disruptor', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
  role: 'Disruptor', // Tank, DPS, Supporter, Disruptor, Healer - Functional description
  faction: 'Kemich',

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
        materials: [{"name": "Scarab Stone", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_4.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}],
        gold: 5000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "ATK +15%, HP +15%",
        materials: [{"name": "Scarab Stone", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_4.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 20000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "ATK +20%, HP +20%",
        materials: [{"name": "Scarab Stone", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_4.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 160000,
      },
    ],
    statNodes: [
      {
        node: "N1",
        stat: "HP +3.2%",
        unlock: "After E1",
        materials: [{"name": "Scarab Stone", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
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
        materials: [{"name": "Scarab Stone", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 10000,
      },
      {
        node: "N4",
        stat: "DEF +4.8%",
        unlock: "After N1",
        materials: [{"name": "Scarab Stone", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 10000,
      },
      {
        node: "N5",
        stat: "ATK +4.8%",
        unlock: "After N2",
        materials: [{"name": "Scarab Stone", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 20000,
      },
      {
        node: "N6",
        stat: "DEF +7.2%",
        unlock: "After N2",
        materials: [{"name": "Scarab Stone", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 160000,
      },
      {
        node: "N7",
        stat: "HP +4.8%",
        unlock: "After E2",
        materials: [{"name": "Scarab Stone", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 45000,
      },
      {
        node: "N8",
        stat: "ATK +4.8%",
        unlock: "After E2",
        materials: [{"name": "Scarab Stone", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 45000,
      },
      {
        node: "N9",
        stat: "ATK +6.4%",
        unlock: "Lv 80",
        materials: [{"name": "Scarab Stone", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 160000,
      },
      {
        node: "N10",
        stat: "HP +6.4%",
        unlock: "Lv 75",
        materials: [{"name": "Scarab Stone", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
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
        materials: [{"name": "Holy Aether", "amount": 3, "icon": "Icon_Talent_Rankup_Light_1.png"}],
      },
      {
        level: 4,
        gold: 10000,
        materials: [{"name": "Holy Aetherstone", "amount": 3, "icon": "Icon_Talent_Rankup_Light_2.png"}],
      },
      {
        level: 5,
        gold: 20000,
        materials: [{"name": "Holy Aetherstone", "amount": 5, "icon": "Icon_Talent_Rankup_Light_2.png"}],
      },
      {
        level: 6,
        gold: 30000,
        materials: [{"name": "Holy Aetherstone", "amount": 7, "icon": "Icon_Talent_Rankup_Light_2.png"}],
      },
      {
        level: 7,
        gold: 45000,
        materials: [{"name": "Holy Aether Lany.", "amount": 3, "icon": "Icon_Talent_Rankup_Light_3.png"}],
      },
      {
        level: 8,
        gold: 80000,
        materials: [{"name": "Holy Aether Lany.", "amount": 5, "icon": "Icon_Talent_Rankup_Light_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}],
      },
      {
        level: 9,
        gold: 160000,
        materials: [{"name": "Holy Aether Lany.", "amount": 8, "icon": "Icon_Talent_Rankup_Light_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 300000,
        materials: [{"name": "Holy Aether Lany.", "amount": 14, "icon": "Icon_Talent_Rankup_Light_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },

  // Skills
  skills: {
    normal:     {
      name: "Holy Radiance Arrow",
      cooldown: "2.0s",
      description: "Deals 120% Attack as holy damage to the targeted enemy unit",
      template: "Deals {0} Attack as holy damage to the targeted enemy unit",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Arrow of Atum",
      cooldown: "5.0s",
      description: "Launches a rain of arrows at the target\nDeals 120% Attack as holy damage to the target and enemies within a 2-meter radius And applies 1 stack of [Celestial Judgment]",
      template: "Launches a rain of arrows at the target\nDeals {0} Attack as holy damage to the target and enemies within a 2-meter radius And applies 1 stack of [Celestial Judgment]",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    ultimate:     {
      name: "Eye of Wadjet",
      energyCost: "3",
      cooldown: "1.0s",
      description: "Deals 480% Attack as holy damage to the target And applies 1 stack of [Celestial Judgment] and 1 stack of [Crown Seal]\nThis damage can [Interrupt] the target's casting skill",
      template: "Deals {0} Attack as holy damage to the target And applies 1 stack of [Celestial Judgment] and 1 stack of [Crown Seal]\nThis damage can [Interrupt] the target's casting skill",
      levelValues: [["220%"], ["240%"], ["260%"], ["280%"], ["300%"], ["320%"], ["340%"], ["360%"], ["380%"], ["400%"], ["420%"], ["440%"], ["460%"], ["480%"]],
    },
    passive:     {
      name: "Solar Judgment",
      description: "When a skill deals damage to a target with [Crown Seal], consumes 1 stack of [Crown Seal] And deals 120% Attack as holy damage to the target and enemies within a 4-meter radius, applying 1 stack of [Celestial Judgment] to hit targets And increasing damage over time taken by 24% for 10 seconds\n[Celestial Judgment]: Deals 19.2% Attack as holy damage every 3 seconds, up to 10 stacks",
      template: "When a skill deals damage to a target with [Crown Seal], consumes 1 stack of [Crown Seal] And deals {0} Attack as holy damage to the target and enemies within a 4-meter radius, applying 1 stack of [Celestial Judgment] to hit targets And increasing damage over time taken by {1} for 10 seconds\n[Celestial Judgment]: Deals {2} Attack as holy damage every 3 seconds, up to 10 stacks",
      levelValues: [["55%", "11%", "8.8%"], ["60%", "12%", "9.6%"], ["65%", "13%", "10.4%"], ["70%", "14%", "11.2%"], ["75%", "15%", "12%"], ["80%", "16%", "12.8%"], ["85%", "17%", "13.6%"], ["90%", "18%", "14.4%"], ["95%", "19%", "15.2%"], ["100%", "20%", "16%"], ["105%", "21%", "16.8%"], ["110%", "22%", "17.6%"], ["115%", "23%", "18.4%"], ["120%", "24%", "19.2%"]],
    },
  },

  // Team Skill
  teamSkill: {
    name: "Combo Skill",
    description: "Self Attack increases by 10%\nAt battle start, every 500 Attack increases self Penetration by 3%, up to 6 times",
    requirements: {
      faction: "Kemich",
      element: "Holy",
      alternativeConditions: "Team contains 2 Kemich characters or 2 Holy characters",
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect: "Attack increases by 20%",
    },
    {
      level: 2,
      effect: "When dealing damage over time, the target's received damage over time increases by 20% for 3 seconds, refreshing duration on repeat triggers",
    },
    {
      level: 3,
      effect: "[Skill] and [Normal Attack] level and level cap +4",
    },
    {
      level: 4,
      effect: "[Damage Over Time] damage increases by 35%",
    },
    {
      level: 5,
      effect: "[ULT] and [Passive] level and level cap +4",
    },
    {
      level: 6,
      effect: "When dealing damage to targets with [Damage Over Time], gain 20% Holy resistance penetration",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "Cute Little Things",
    image: "CuteLittleThing.png",
    stats: {
      hp: "5,040",
      attack: "780",
      defense: "474",
    },
    effects: [  // awakening levels 1-5
      "Attack increases by 24%, when dealing Damage Over Time, the target's damage taken increases by 12% for 3 seconds",
      "Attack increases by 28%, when dealing Damage Over Time, the target's damage taken increases by 15% for 3 seconds",
      "Attack increases by 32%, when dealing Damage Over Time, the target's damage taken increases by 18% for 3 seconds",
      "Attack increases by 36%, when dealing Damage Over Time, the target's damage taken increases by 21% for 3 seconds",
      "Attack increases by 40%, when dealing Damage Over Time, the target's damage taken increases by 24% for 3 seconds",
    ],
    restriction: "Only effective for Disruptor",
  },

  // Character Tags - Reusable across multiple characters
  tags: [
    'Range',
    'DOT',
    'AOE',
    'Interrupt',
    'Debuff',
    'DOT Intake Increases',
    'Penetration',
    'Damage Increases',
  ],
};

// SEO data for Horus
export const horusSEO = {
  title: `${horusData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${horusData.name}, a ${horusData.rarity} ${horusData.element} ${horusData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default horusData;
