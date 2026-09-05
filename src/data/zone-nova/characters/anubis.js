// Anubis Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const anubisData = {
  // Basic Character Information
  name: 'Anubis',
  chineseName: '阿努比斯',
  image: 'Anubis.png', // Use format: charactername (e.g., 'Anubis')
  rarity: 'SSR', // SSR, SR, R
  element: 'Chaos', // Fire, Ice, Wind, Holy, Chaos
  class: 'Healer', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
  role: 'Healer', // Tank, DPS, Supporter, Disruptor, Healer - Functional description
  faction: 'Kemich', // Kaimique (凯米奇)

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
    hp: '9,180',
    attack: '1,004',
    defense: '729',
  },
  talentTree: {
    totals: ["ATK +67.4%", "HP +53%", "DEF +21.6%"],
    enhancementNodes: [
      {
        name: "Enhancement I",
        rank: 2,
        bonus: "ATK +10%, HP +10%",
        materials: [{"name": "Canopic Jar", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}],
        gold: 5000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "ATK +15%, HP +15%",
        materials: [{"name": "Canopic Jar", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 20000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "ATK +20%, HP +20%",
        materials: [{"name": "Canopic Jar", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 160000,
      },
    ],
    statNodes: [
      {
        node: "N1",
        stat: "DEF +4.8%",
        unlock: "After E1",
        materials: [{"name": "Canopic Jar", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
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
        materials: [{"name": "Canopic Jar", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 10000,
      },
      {
        node: "N4",
        stat: "HP +3.2%",
        unlock: "After N1",
        materials: [{"name": "Canopic Jar", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 10000,
      },
      {
        node: "N5",
        stat: "ATK +4.8%",
        unlock: "After N2",
        materials: [{"name": "Canopic Jar", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 20000,
      },
      {
        node: "N6",
        stat: "HP +4.8%",
        unlock: "After N2",
        materials: [{"name": "Canopic Jar", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 160000,
      },
      {
        node: "N7",
        stat: "DEF +7.2%",
        unlock: "After E2",
        materials: [{"name": "Canopic Jar", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 45000,
      },
      {
        node: "N8",
        stat: "ATK +4.8%",
        unlock: "After E2",
        materials: [{"name": "Canopic Jar", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 45000,
      },
      {
        node: "N9",
        stat: "ATK +6.4%",
        unlock: "Lv 80",
        materials: [{"name": "Canopic Jar", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 160000,
      },
      {
        node: "N10",
        stat: "DEF +9.6%",
        unlock: "Lv 75",
        materials: [{"name": "Canopic Jar", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
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
        materials: [{"name": "Chaos Aether", "amount": 3, "icon": "Icon_Talent_Rankup_Dark_1.png"}],
      },
      {
        level: 4,
        gold: 10000,
        materials: [{"name": "Chaos Aetherstone", "amount": 3, "icon": "Icon_Talent_Rankup_Dark_2.png"}],
      },
      {
        level: 5,
        gold: 20000,
        materials: [{"name": "Chaos Aetherstone", "amount": 5, "icon": "Icon_Talent_Rankup_Dark_2.png"}],
      },
      {
        level: 6,
        gold: 30000,
        materials: [{"name": "Chaos Aetherstone", "amount": 7, "icon": "Icon_Talent_Rankup_Dark_2.png"}],
      },
      {
        level: 7,
        gold: 45000,
        materials: [{"name": "Chaos Aether Lany.", "amount": 3, "icon": "Icon_Talent_Rankup_Dark_3.png"}],
      },
      {
        level: 8,
        gold: 80000,
        materials: [{"name": "Chaos Aether Lany.", "amount": 5, "icon": "Icon_Talent_Rankup_Dark_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}],
      },
      {
        level: 9,
        gold: 160000,
        materials: [{"name": "Chaos Aether Lany.", "amount": 8, "icon": "Icon_Talent_Rankup_Dark_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 300000,
        materials: [{"name": "Chaos Aether Lany.", "amount": 14, "icon": "Icon_Talent_Rankup_Dark_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },

  // Skills
  skills: {
    normal:     {
      name: "Touch of the Underworld",
      cooldown: "2.0s",
      description: "Deals 120% Attack as chaos damage to the targeted enemy unit",
      template: "Deals {0} Attack as chaos damage to the targeted enemy unit",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Rain of Divine Punishment",
      cooldown: "8.0s",
      description: "Summons a meteor to attack the targeted enemy unit, dealing 96% Attack as chaos damage to it and enemies within a 2-meter radius And applying 1 stack of [Underworld Burn]\n[Underworld Burn]: Deals 5.9% chaos damage every 3 seconds, up to 10 stacks",
      template: "Summons a meteor to attack the targeted enemy unit, dealing {0} Attack as chaos damage to it and enemies within a 2-meter radius And applying 1 stack of [Underworld Burn]\n[Underworld Burn]: Deals {1} chaos damage every 3 seconds, up to 10 stacks",
      levelValues: [["44%", "3%"], ["48%", "3.2%"], ["52%", "3.4%"], ["56%", "3.7%"], ["60%", "3.9%"], ["64%", "4.1%"], ["68%", "4.3%"], ["72%", "4.6%"], ["76%", "4.8%"], ["80%", "5%"], ["84%", "5.2%"], ["88%", "5.4%"], ["92%", "5.7%"], ["96%", "5.9%"]],
    },
    ultimate:     {
      name: "Fated Reversal",
      energyCost: "4",
      cooldown: "1.0s",
      description: "Restores 113.7% Attack + 278 HP to the allied unit with the lowest HP percentage\n[Enhanced ULT]: Restores 113.7% Attack + 278 HP to all allied units And reduces their damage taken by 10% for 10 seconds",
      template: "Restores {0} Attack + {1} HP to the allied unit with the lowest HP percentage\n[Enhanced ULT]: Restores {2} Attack + {3} HP to all allied units And reduces their damage taken by 10% for 10 seconds",
      levelValues: [["85.5%", "278", "85.5%", "278"], ["87.7%", "278", "87.7%", "278"], ["89.8%", "278", "89.8%", "278"], ["92%", "278", "92%", "278"], ["94.2%", "278", "94.2%", "278"], ["96.3%", "278", "96.3%", "278"], ["98.5%", "278", "98.5%", "278"], ["100.7%", "278", "100.7%", "278"], ["102.8%", "278", "102.8%", "278"], ["105%", "555", "105%", "555"], ["107.2%", "278", "107.2%", "278"], ["109.3%", "278", "109.3%", "278"], ["111.5%", "278", "111.5%", "278"], ["113.7%", "278", "113.7%", "278"]],
    },
    passive:     {
      name: "Soul Siphon",
      description: "When a skill attacks a target with 20 or more stacks of damage over time, heals all allied units, restoring 97.8% Attack + 185 HP And enables one [Enhanced ULT] within 8 seconds",
      template: "When a skill attacks a target with 20 or more stacks of damage over time, heals all allied units, restoring {0} Attack + {1} HP And enables one [Enhanced ULT] within 8 seconds",
      levelValues: [["72.5%", "185"], ["74.4%", "185"], ["76.4%", "185"], ["78.3%", "185"], ["80.3%", "185"], ["82.2%", "185"], ["84.2%", "185"], ["86.1%", "185"], ["88.1%", "185"], ["90%", "370"], ["91.9%", "185"], ["93.9%", "185"], ["95.8%", "185"], ["97.8%", "185"]],
    },
  },

  // Team Skill
  teamSkill: {
    name: "Combo Skill",
    description: "Self Attack increases by 10%\nAt battle start, every 500 Attack increases self Healing by 5%, up to 6 times",
    requirements: {
      faction: "Kemich",
      element: "Chaos",
      alternativeConditions: "Team contains 2 Kemich characters or 2 Chaos characters",
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect: "Passive skill's condition changes from 20 stacks to 15 stacks",
    },
    {
      level: 2,
      effect: "All healing effects from Anubis reduce the target's damage taken by 10% for 5 seconds",
    },
    {
      level: 3,
      effect: "[Skill] and [Normal Attack] level and level cap +4",
    },
    {
      level: 4,
      effect: "Healing increases by 37.5%",
    },
    {
      level: 5,
      effect: "[ULT] and [Passive] level and level cap +4",
    },
    {
      level: 6,
      effect: "Skills additionally summon a meteor for continuous attacks",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "Late-Night Work",
    image: "Anubiscard",
    stats: {
      hp: "6,000",
      attack: "600",
      defense: "600",
    },
    effects: [  // awakening levels 1-5
      "Healing increases by 30%, each time a target is healed, their Attack increases by 24% for 3 seconds",
      "Healing increases by 35%, each time a target is healed, their Attack increases by 28% for 3 seconds",
      "Healing increases by 40%, each time a target is healed, their Attack increases by 32% for 3 seconds",
      "Healing increases by 45%, each time a target is healed, their Attack increases by 36% for 3 seconds",
      "Healing increases by 50%, each time a target is healed, their Attack increases by 40% for 3 seconds",
    ],
    restriction: "Only effective for Healer",
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Healing', 'Ranged', 'Damage Reduction', 'DOT'],
};

// SEO data for Anubis
export const anubisSEO = {
  title: `${anubisData.name} (${anubisData.chineseName}) - Zone Nova Character Guide`,
  description: `Complete guide for ${anubisData.name}, a ${anubisData.rarity} ${anubisData.element} ${anubisData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default anubisData;
