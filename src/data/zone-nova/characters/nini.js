// Nini Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const niniData = {
  // Basic Character Information
  name: 'Nini',
  image: 'Nini.png', // Character image identifier
  rarity: 'SR',
  element: 'Ice',
  class: 'Disruptor', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
  role: 'Disruptor', // Tank, DPS, Supporter, Disruptor, Healer - Functional description
  faction: 'Monochrome Realm',

  // Base Stats (Level 80)
  stats: {
    hp: "5,000",
    attack: "500",
    defense: "500",
    energyRecovery: '0.25/s',
    critRate: '0%',
    critDmg: '50%',
    maxCritRate: '0%',
    maxCritDmg: '50%',
  },
  maxStats: {
    hp: '7,970',
    attack: '837',
    defense: '560',
  },
  talentTree: {
    totals: ["ATK +67.4%", "HP +59.4%", "DEF +12%"],
    enhancementNodes: [
      {
        name: "Enhancement I",
        rank: 2,
        bonus: "ATK +10%, HP +10%",
        materials: [{"name": "Scarab Stone", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_4.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}],
        gold: 4000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "ATK +15%, HP +15%",
        materials: [{"name": "Scarab Stone", "amount": 2, "icon": "Icon_Talent_Rankup_Rare_4.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 16000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "ATK +20%, HP +20%",
        materials: [{"name": "Scarab Stone", "amount": 8, "icon": "Icon_Talent_Rankup_Rare_4.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 128000,
      },
    ],
    statNodes: [
      {
        node: "N1",
        stat: "HP +3.2%",
        unlock: "After E1",
        materials: [{"name": "Scarab Stone", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
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
        materials: [{"name": "Scarab Stone", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 8000,
      },
      {
        node: "N4",
        stat: "DEF +4.8%",
        unlock: "After N1",
        materials: [{"name": "Scarab Stone", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 8000,
      },
      {
        node: "N5",
        stat: "ATK +4.8%",
        unlock: "After N2",
        materials: [{"name": "Scarab Stone", "amount": 2, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 16000,
      },
      {
        node: "N6",
        stat: "DEF +7.2%",
        unlock: "After N2",
        materials: [{"name": "Scarab Stone", "amount": 8, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 128000,
      },
      {
        node: "N7",
        stat: "HP +4.8%",
        unlock: "After E2",
        materials: [{"name": "Scarab Stone", "amount": 4, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 36000,
      },
      {
        node: "N8",
        stat: "ATK +4.8%",
        unlock: "After E2",
        materials: [{"name": "Scarab Stone", "amount": 4, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 36000,
      },
      {
        node: "N9",
        stat: "ATK +6.4%",
        unlock: "Lv 80",
        materials: [{"name": "Scarab Stone", "amount": 8, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 128000,
      },
      {
        node: "N10",
        stat: "HP +6.4%",
        unlock: "Lv 75",
        materials: [{"name": "Scarab Stone", "amount": 8, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
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
        materials: [{"name": "Frost Aether", "amount": 2, "icon": "Icon_Talent_Rankup_Ice_1.png"}],
      },
      {
        level: 4,
        gold: 8000,
        materials: [{"name": "Frost Aetherstone", "amount": 2, "icon": "Icon_Talent_Rankup_Ice_2.png"}],
      },
      {
        level: 5,
        gold: 16000,
        materials: [{"name": "Frost Aetherstone", "amount": 4, "icon": "Icon_Talent_Rankup_Ice_2.png"}],
      },
      {
        level: 6,
        gold: 24000,
        materials: [{"name": "Frost Aetherstone", "amount": 6, "icon": "Icon_Talent_Rankup_Ice_2.png"}],
      },
      {
        level: 7,
        gold: 36000,
        materials: [{"name": "Frost Aether Lany.", "amount": 2, "icon": "Icon_Talent_Rankup_Ice_3.png"}],
      },
      {
        level: 8,
        gold: 64000,
        materials: [{"name": "Frost Aether Lany.", "amount": 4, "icon": "Icon_Talent_Rankup_Ice_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}],
      },
      {
        level: 9,
        gold: 128000,
        materials: [{"name": "Frost Aether Lany.", "amount": 6, "icon": "Icon_Talent_Rankup_Ice_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 240000,
        materials: [{"name": "Frost Aether Lany.", "amount": 11, "icon": "Icon_Talent_Rankup_Ice_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },

  // Skills
  skills: {
    normal:     {
      name: "Suppressive Fire",
      cooldown: "2.0s",
      description: "Deals 120% Attack as ice damage to the targeted enemy unit",
      template: "Deals {0} Attack as ice damage to the targeted enemy unit",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Steel Charge",
      cooldown: "5.0s",
      description: "Deals 60% Attack as ice damage to enemies in front And applies 1 stack of [Weakness], reducing their damage dealt by 5.8% per stack, up to 3 stacks, for 10 seconds",
      template: "Deals {0} Attack as ice damage to enemies in front And applies 1 stack of [Weakness], reducing their damage dealt by {1} per stack, up to 3 stacks, for 10 seconds",
      levelValues: [["27.5%", "3.2%"], ["30%", "3.4%"], ["32.5%", "3.6%"], ["35%", "3.8%"], ["37.5%", "4%"], ["40%", "4.2%"], ["42.5%", "4.4%"], ["45%", "4.6%"], ["47.5%", "4.8%"], ["50%", "5%"], ["52.5%", "5.2%"], ["55%", "5.4%"], ["57.5%", "5.6%"], ["60%", "5.8%"]],
    },
    ultimate:     {
      name: "Glory of the Black Empire",
      energyCost: "3",
      cooldown: "1.0s",
      description: "Deals 84% Attack as ice damage to enemies in front And applies [ice Erosion], increasing damage taken by 38% for 10 seconds",
      template: "Deals {0} Attack as ice damage to enemies in front And applies [ice Erosion], increasing damage taken by {1} for 10 seconds",
      levelValues: [["38.5%", "12%"], ["42%", "14%"], ["45.5%", "16%"], ["49%", "18%"], ["52.5%", "20%"], ["56%", "22%"], ["59.5%", "24%"], ["63%", "26%"], ["66.5%", "28%"], ["70%", "30%"], ["73.5%", "32%"], ["77%", "34%"], ["80.5%", "36%"], ["84%", "38%"]],
    },
    passive:     {
      name: "Battle Zealot",
      description: "When attacking an enemy unit with a negative status, damage increases by 38%",
      template: "When attacking an enemy unit with a negative status, damage increases by {0}",
      levelValues: [["12%"], ["14%"], ["16%"], ["18%"], ["20%"], ["22%"], ["24%"], ["26%"], ["28%"], ["30%"], ["32%"], ["34%"], ["36%"], ["38%"]],
    },
  },

  // Team Skill
  teamSkill: {
    name: "Combo Skill",
    description: "Self damage dealt increases by 20%",
    requirements: {
      faction: "Monochrome Realm",
      element: "Ice",
      alternativeConditions: "Team contains 2 Monochrome Realm characters or 2 Ice characters",
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect: "When a skill attacks a target with negative effects, skill multiplier increases by 30%",
    },
    {
      level: 2,
      effect: "[Weakness] can stack up to 5 times",
    },
    {
      level: 3,
      effect: "[Skill] and [Normal Attack] level and level cap +4",
    },
    {
      level: 4,
      effect: "[Frost Erosion] additionally increases the target's received <color=#1ec1ff>Frost</color> damage by 10%",
    },
    {
      level: 5,
      effect: "[ULT] and [Passive] level and level cap +4",
    },
    {
      level: 6,
      effect: "When a skill attacks a target below 50% HP, instantly max out [Weakness] stacks",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "Flower of the Battlefield",
    image: "ninicard",
    stats: {
      hp: "5,000",
      attack: "500",
      defense: "500",
    },
    effects: [  // awakening levels 1-5
      "For each debuff on the attacked target, damage increases by 10%, stacks up to 3 times",
      "For each debuff on the attacked target, damage increases by 12.5%, stacks up to 3 times",
      "For each debuff on the attacked target, damage increases by 15%, stacks up to 3 times",
      "For each debuff on the attacked target, damage increases by 17.5%, stacks up to 3 times",
      "For each debuff on the attacked target, damage increases by 20%, stacks up to 3 times",
    ],
    restriction: "Only effective for Disruptor",
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Range', 'Disruptor', 'Vulnerability', 'Weakness'],
};

// SEO data for Nini
export const niniSEO = {
  title: `${niniData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${niniData.name}, a ${niniData.rarity} ${niniData.element} ${niniData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default niniData;
