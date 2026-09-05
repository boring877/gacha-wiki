// Greed Mammon Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const greedMammonData = {
  // Basic Character Information
  name: 'Greed Mammon',
  image: 'GreedMammon.png',
  rarity: 'SR',
  element: 'Chaos',
  class: 'Destroyer', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
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
        materials: [{"name": "Energy Vial", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_1.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}],
        gold: 4000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "ATK +15%, HP +15%",
        materials: [{"name": "Energy Vial", "amount": 2, "icon": "Icon_Talent_Rankup_Rare_1.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 16000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "ATK +20%, HP +20%",
        materials: [{"name": "Energy Vial", "amount": 8, "icon": "Icon_Talent_Rankup_Rare_1.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 128000,
      },
    ],
    statNodes: [
      {
        node: "N1",
        stat: "HP +3.2%",
        unlock: "After E1",
        materials: [{"name": "Energy Vial", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
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
        materials: [{"name": "Energy Vial", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 8000,
      },
      {
        node: "N4",
        stat: "DEF +4.8%",
        unlock: "After N1",
        materials: [{"name": "Energy Vial", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 8000,
      },
      {
        node: "N5",
        stat: "ATK +4.8%",
        unlock: "After N2",
        materials: [{"name": "Energy Vial", "amount": 2, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 16000,
      },
      {
        node: "N6",
        stat: "DEF +7.2%",
        unlock: "After N2",
        materials: [{"name": "Energy Vial", "amount": 8, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 128000,
      },
      {
        node: "N7",
        stat: "HP +4.8%",
        unlock: "After E2",
        materials: [{"name": "Energy Vial", "amount": 4, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 36000,
      },
      {
        node: "N8",
        stat: "ATK +4.8%",
        unlock: "After E2",
        materials: [{"name": "Energy Vial", "amount": 4, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 36000,
      },
      {
        node: "N9",
        stat: "ATK +6.4%",
        unlock: "Lv 80",
        materials: [{"name": "Energy Vial", "amount": 8, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 128000,
      },
      {
        node: "N10",
        stat: "HP +6.4%",
        unlock: "Lv 75",
        materials: [{"name": "Energy Vial", "amount": 8, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
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
        materials: [{"name": "Chaos Aether", "amount": 2, "icon": "Icon_Talent_Rankup_Dark_1.png"}],
      },
      {
        level: 4,
        gold: 8000,
        materials: [{"name": "Chaos Aetherstone", "amount": 2, "icon": "Icon_Talent_Rankup_Dark_2.png"}],
      },
      {
        level: 5,
        gold: 16000,
        materials: [{"name": "Chaos Aetherstone", "amount": 4, "icon": "Icon_Talent_Rankup_Dark_2.png"}],
      },
      {
        level: 6,
        gold: 24000,
        materials: [{"name": "Chaos Aetherstone", "amount": 6, "icon": "Icon_Talent_Rankup_Dark_2.png"}],
      },
      {
        level: 7,
        gold: 36000,
        materials: [{"name": "Chaos Aether Lany.", "amount": 2, "icon": "Icon_Talent_Rankup_Dark_3.png"}],
      },
      {
        level: 8,
        gold: 64000,
        materials: [{"name": "Chaos Aether Lany.", "amount": 4, "icon": "Icon_Talent_Rankup_Dark_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}],
      },
      {
        level: 9,
        gold: 128000,
        materials: [{"name": "Chaos Aether Lany.", "amount": 6, "icon": "Icon_Talent_Rankup_Dark_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 240000,
        materials: [{"name": "Chaos Aether Lany.", "amount": 11, "icon": "Icon_Talent_Rankup_Dark_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },

  // Skills
  skills: {
    normal:     {
      name: "The More You Fight, The Richer You Get!",
      cooldown: "2.0s",
      description: "Deals 120% Attack as chaos damage to the targeted enemy unit",
      template: "Deals {0} Attack as chaos damage to the targeted enemy unit",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Golden Curse",
      cooldown: "5.0s",
      description: "Deals 96% Attack as chaos damage to enemies within a 3-meter radius",
      template: "Deals {0} Attack as chaos damage to enemies within a 3-meter radius",
      levelValues: [["44%"], ["48%"], ["52%"], ["56%"], ["60%"], ["64%"], ["68%"], ["72%"], ["76%"], ["80%"], ["84%"], ["88%"], ["92%"], ["96%"]],
    },
    ultimate:     {
      name: "Seven Sins: Greed",
      energyCost: "5",
      cooldown: "1.0s",
      description: "Deals 180% Attack as chaos damage to the targeted enemy unit\nAfter a [Supporter] uses an ULT, can use 1 [Enhanced ULT] within 5 seconds\n[Enhanced ULT]: Deals 240% Attack as chaos damage to enemies within a 4-meter radius",
      template: "Deals {0} Attack as chaos damage to the targeted enemy unit\nAfter a [Supporter] uses an ULT, can use 1 [Enhanced ULT] within 5 seconds\n[Enhanced ULT]: Deals {1} Attack as chaos damage to enemies within a 4-meter radius",
      levelValues: [["82.5%", "110%"], ["90%", "120%"], ["97.5%", "130%"], ["105%", "140%"], ["112.5%", "150%"], ["120%", "160%"], ["127.5%", "170%"], ["135%", "180%"], ["142.5%", "190%"], ["150%", "200%"], ["157.5%", "210%"], ["165%", "220%"], ["172.5%", "230%"], ["180%", "240%"]],
    },
    passive:     {
      name: "Greed Tax",
      description: "After casting an [Enhanced ULT], damage increases by 29%",
      template: "After casting an [Enhanced ULT], damage increases by {0}",
      levelValues: [["16%"], ["17%"], ["18%"], ["19%"], ["20%"], ["21%"], ["22%"], ["23%"], ["24%"], ["25%"], ["26%"], ["27%"], ["28%"], ["29%"]],
    },
  },

  // Team Skill
  teamSkill: {
    name: "Combo Skill",
    description: "Self damage dealt increases by 20%",
    requirements: {
      faction: "Bikta",
      element: "Chaos",
      alternativeConditions: "Team contains 2 Bikta characters or 2 Chaos characters",
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect: "When self has a buff, ULT critical damage increases by 20%",
    },
    {
      level: 2,
      effect: "After casting an ULT, damage taken decreases by 10% for 10 seconds",
    },
    {
      level: 3,
      effect: "[Skill] and [Normal Attack] level and level cap +4",
    },
    {
      level: 4,
      effect: "ULT damage increases by 20%",
    },
    {
      level: 5,
      effect: "[ULT] and [Passive] level and level cap +4",
    },
    {
      level: 6,
      effect: "After successfully casting an [Enhanced ULT], gain an additional 1 energy",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "The Way of Revenge",
    image: "Greed-Mammon-card",
    stats: {
      hp: "4,200",
      attack: "650",
      defense: "395",
    },
    effects: [  // awakening levels 1-5
      "When a Supporter uses an ULT, self ULT damage increases by 30% for 10 seconds",
      "When a Supporter uses an ULT, self ULT damage increases by 37.5% for 10 seconds",
      "When a Supporter uses an ULT, self ULT damage increases by 45% for 10 seconds",
      "When a Supporter uses an ULT, self ULT damage increases by 52.5% for 10 seconds",
      "When a Supporter uses an ULT, self ULT damage increases by 60% for 10 seconds",
    ],
    restriction: "Only effective for Destroyer",
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Melee', 'AOE', 'Enhanced Ultimate', 'Crit Dmg', 'Energy', 'Damage Reduction'],
};

// SEO data for Greed Mammon
export const greedMammonSEO = {
  title: `${greedMammonData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${greedMammonData.name}, a ${greedMammonData.rarity} ${greedMammonData.element} ${greedMammonData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default greedMammonData;
