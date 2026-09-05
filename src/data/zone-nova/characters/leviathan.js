// Leviathan Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const leviathanData = {
  // Basic Character Information
  name: 'Leviathan',
  image: 'Leviathan.png',
  rarity: 'SR',
  element: 'Wind',
  class: 'Attacker', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
  role: 'DPS', // Tank, DPS, Supporter, Disruptor, Healer - Functional description
  faction: 'Bikta',

  // Base Stats (Level 80)
  stats: {
    hp: "4,200",
    attack: "650",
    defense: "395",
    energyRecovery: '0.25/s',
    critRate: '0%',
    critDmg: '50%',
    maxCritRate: '0%',
    maxCritDmg: '50%',
  },
  maxStats: {
    hp: '6,694',
    attack: '1,088',
    defense: '442',
  },
  talentTree: {
    totals: ["ATK +67.4%", "HP +59.4%", "DEF +12%"],
    enhancementNodes: [
      {
        name: "Enhancement I",
        rank: 2,
        bonus: "ATK +10%, HP +10%",
        materials: [{"name": "High-Precision Chip", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_2.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}],
        gold: 4000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "ATK +15%, HP +15%",
        materials: [{"name": "High-Precision Chip", "amount": 2, "icon": "Icon_Talent_Rankup_Rare_2.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 16000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "ATK +20%, HP +20%",
        materials: [{"name": "High-Precision Chip", "amount": 8, "icon": "Icon_Talent_Rankup_Rare_2.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 128000,
      },
    ],
    statNodes: [
      {
        node: "N1",
        stat: "HP +3.2%",
        unlock: "After E1",
        materials: [{"name": "High-Precision Chip", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 4000,
      },
      {
        node: "N2",
        stat: "ATK +3.2%",
        unlock: "Start",
        materials: [],
        gold: 2000,
      },
      {
        node: "N3",
        stat: "ATK +3.2%",
        unlock: "After N1",
        materials: [{"name": "High-Precision Chip", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 8000,
      },
      {
        node: "N4",
        stat: "DEF +4.8%",
        unlock: "After N1",
        materials: [{"name": "High-Precision Chip", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 8000,
      },
      {
        node: "N5",
        stat: "ATK +4.8%",
        unlock: "After N2",
        materials: [{"name": "High-Precision Chip", "amount": 2, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 16000,
      },
      {
        node: "N6",
        stat: "DEF +7.2%",
        unlock: "After N2",
        materials: [{"name": "High-Precision Chip", "amount": 8, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 128000,
      },
      {
        node: "N7",
        stat: "HP +4.8%",
        unlock: "After E2",
        materials: [{"name": "High-Precision Chip", "amount": 4, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 36000,
      },
      {
        node: "N8",
        stat: "ATK +4.8%",
        unlock: "After E2",
        materials: [{"name": "High-Precision Chip", "amount": 4, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 36000,
      },
      {
        node: "N9",
        stat: "ATK +6.4%",
        unlock: "Lv 80",
        materials: [{"name": "High-Precision Chip", "amount": 8, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 128000,
      },
      {
        node: "N10",
        stat: "HP +6.4%",
        unlock: "Lv 75",
        materials: [{"name": "High-Precision Chip", "amount": 8, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 128000,
      },
    ],
    levels: [
      {
        level: 2,
        gold: 2000,
        materials: [],
      },
      {
        level: 3,
        gold: 4000,
        materials: [{"name": "Storm Aether", "amount": 2, "icon": "Icon_Talent_Rankup_Wind_1.png"}],
      },
      {
        level: 4,
        gold: 8000,
        materials: [{"name": "Storm Aetherstone", "amount": 2, "icon": "Icon_Talent_Rankup_Wind_2.png"}],
      },
      {
        level: 5,
        gold: 16000,
        materials: [{"name": "Storm Aetherstone", "amount": 4, "icon": "Icon_Talent_Rankup_Wind_2.png"}],
      },
      {
        level: 6,
        gold: 24000,
        materials: [{"name": "Storm Aetherstone", "amount": 6, "icon": "Icon_Talent_Rankup_Wind_2.png"}],
      },
      {
        level: 7,
        gold: 36000,
        materials: [{"name": "Storm Aether Lany.", "amount": 2, "icon": "Icon_Talent_Rankup_Wind_3.png"}],
      },
      {
        level: 8,
        gold: 64000,
        materials: [{"name": "Storm Aether Lany.", "amount": 4, "icon": "Icon_Talent_Rankup_Wind_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}],
      },
      {
        level: 9,
        gold: 128000,
        materials: [{"name": "Storm Aether Lany.", "amount": 6, "icon": "Icon_Talent_Rankup_Wind_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 240000,
        materials: [{"name": "Storm Aether Lany.", "amount": 11, "icon": "Icon_Talent_Rankup_Wind_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },

  // Skills
  skills: {
    normal:     {
      name: "Kiss of Leviathan",
      cooldown: "2.0s",
      description: "Deals 120% Attack as wind damage to the targeted enemy unit",
      template: "Deals {0} Attack as wind damage to the targeted enemy unit",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Roar of the Abyss",
      cooldown: "5.0s",
      description: "Deals 120% Attack as wind damage to the targeted enemy unit And gains 2 stacks of [Mark]",
      template: "Deals {0} Attack as wind damage to the targeted enemy unit And gains 2 stacks of [Mark]",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    ultimate:     {
      name: "Seven Sins: Envy",
      energyCost: "5",
      cooldown: "1.0s",
      description: "Deals 600% Attack as wind damage to the targeted enemy unit And instantly triggers 1 Pursue attack without consuming [Mark]",
      template: "Deals {0} Attack as wind damage to the targeted enemy unit And instantly triggers 1 Pursue attack without consuming [Mark]",
      levelValues: [["275%"], ["300%"], ["325%"], ["350%"], ["375%"], ["400%"], ["425%"], ["450%"], ["475%"], ["500%"], ["525%"], ["550%"], ["575%"], ["600%"]],
    },
    passive:     {
      name: "Chains of Resentment",
      description: "When an allied unit's skill hits an enemy, consumes 1 stack of [Mark] And triggers a Pursue attack, dealing 143.9% Attack as wind damage",
      template: "When an allied unit's skill hits an enemy, consumes 1 stack of [Mark] And triggers a Pursue attack, dealing {0} Attack as wind damage",
      levelValues: [["82.5%"], ["87.2%"], ["91.9%"], ["96.7%"], ["101.4%"], ["106.1%"], ["110.8%"], ["115.6%"], ["120.3%"], ["125%"], ["129.7%"], ["134.4%"], ["139.2%"], ["143.9%"]],
    },
  },

  // Team Skill
  teamSkill: {
    name: "Combo Skill",
    description: "Self damage dealt increases by 20%",
    requirements: {
      faction: "Bikta",
      element: "Wind",
      alternativeConditions: "Team contains 2 Bikta characters or 2 Wind characters",
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect: "Self-casting [Skill] also triggers passive effects",
    },
    {
      level: 2,
      effect: "[Pursue] critical rate increases by 20%",
    },
    {
      level: 3,
      effect: "[Skill] and [Normal Attack] level and level cap +4",
    },
    {
      level: 4,
      effect: "[Pursue] damage increases by 20%",
    },
    {
      level: 5,
      effect: "[ULT] and [Passive] level and level cap +4",
    },
    {
      level: 6,
      effect: "When casting an ULT, Pursue attacks increase from 1 to 2 times",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "Perverted Little Nurse",
    image: "Leviathancard",
    stats: {
      hp: "4,200",
      attack: "650",
      defense: "395",
    },
    effects: [  // awakening levels 1-5
      "After dealing Pursue Damage, Critical Rate increases by 18% for 10 seconds",
      "After dealing Pursue Damage, Critical Rate increases by 22.5% for 10 seconds",
      "After dealing Pursue Damage, Critical Rate increases by 27% for 10 seconds",
      "After dealing Pursue Damage, Critical Rate increases by 31.5% for 10 seconds",
      "After dealing Pursue Damage, Critical Rate increases by 36% for 10 seconds",
    ],
    restriction: "Only effective for Attacker",
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Melee', 'Crit Rate', 'Extra Attack'],
};

// SEO data for Leviathan
export const leviathanSEO = {
  title: `${leviathanData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${leviathanData.name}, a ${leviathanData.rarity} ${leviathanData.element} ${leviathanData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default leviathanData;
