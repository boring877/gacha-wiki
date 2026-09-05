// Belphegar Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js
// Instructions: Copy this file to the same directory as your character's .astro file

export const belphegarData = {
  // Basic Character Information
  name: 'Belphegar',
  image: 'belphegar.png',
  rarity: 'SR', // SSR, SR, R
  element: 'Chaos', // Fire, Ice, Wind, Holy, Chaos
  class: 'Disruptor', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
  role: 'Disruptor', // Tank, DPS, Supporter, Disruptor, Healer - Functional description
  faction: 'Bikta', // Savir, etc.

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
        materials: [{"name": "Scarab Stone", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_4.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}],
        gold: 4000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "ATK +15%, HP +15%",
        materials: [{"name": "Scarab Stone", "amount": 2, "icon": "Icon_Talent_Rankup_Rare_4.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 16000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "ATK +20%, HP +20%",
        materials: [{"name": "Scarab Stone", "amount": 8, "icon": "Icon_Talent_Rankup_Rare_4.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
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
      name: "Fatigue Bombardment",
      cooldown: "2.0s",
      description: "Deals 120% Attack as chaos damage to the targeted enemy unit",
      template: "Deals {0} Attack as chaos damage to the targeted enemy unit",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Power of the Blanket",
      cooldown: "5.0s",
      description: "Attacks the enemy with the highest Attack, dealing 120% Attack as chaos damage And reducing their Critical Rate and Critical Damage by 24% for 10 seconds",
      template: "Attacks the enemy with the highest Attack, dealing {0} Attack as chaos damage And reducing their Critical Rate and Critical Damage by {1} for 10 seconds",
      levelValues: [["55%", "11%"], ["60%", "12%"], ["65%", "13%"], ["70%", "14%"], ["75%", "15%"], ["80%", "16%"], ["85%", "17%"], ["90%", "18%"], ["95%", "19%"], ["100%", "20%"], ["105%", "21%"], ["110%", "22%"], ["115%", "23%"], ["120%", "24%"]],
    },
    ultimate:     {
      name: "Seven Sins: Sloth",
      energyCost: "3",
      cooldown: "1.0s",
      description: "Deals 120% Attack as chaos damage to all targets And increases their skill cooldown time by 58% for 10 seconds",
      template: "Deals {0} Attack as chaos damage to all targets And increases their skill cooldown time by {1} for 10 seconds",
      levelValues: [["55%", "32%"], ["60%", "34%"], ["65%", "36%"], ["70%", "38%"], ["75%", "40%"], ["80%", "42%"], ["85%", "44%"], ["90%", "46%"], ["95%", "48%"], ["100%", "50%"], ["105%", "52%"], ["110%", "54%"], ["115%", "56%"], ["120%", "58%"]],
    },
    passive:     {
      name: "Have a Good Nap~",
      description: "When dealing damage with a skill or ULT, additionally applies [Sloth], reducing the target's Attack Speed by 58% for 10 seconds",
      template: "When dealing damage with a skill or ULT, additionally applies [Sloth], reducing the target's Attack Speed by {0} for 10 seconds",
      levelValues: [["32%"], ["34%"], ["36%"], ["38%"], ["40%"], ["42%"], ["44%"], ["46%"], ["48%"], ["50%"], ["52%"], ["54%"], ["56%"], ["58%"]],
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
      effect: "When a skill attacks a target with negative effects, skill multiplier increases by 30%",
    },
    {
      level: 2,
      effect: "Normal attacks deal additional <color=#9754d5>Chaos</color> damage equal to 20% of Attack",
    },
    {
      level: 3,
      effect: "[Skill] and [Normal Attack] level and level cap +4",
    },
    {
      level: 4,
      effect: "Attack increases by 20%",
    },
    {
      level: 5,
      effect: "[ULT] and [Passive] level and level cap +4",
    },
    {
      level: 6,
      effect: "ULT additionally reduces the target's ULT damage by 20% for 5 seconds",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "The Reason for Slumber",
    image: "SleepyTank.png",
    stats: {
      hp: "5,000",
      attack: "500",
      defense: "500",
    },
    effects: [  // awakening levels 1-5
      "ULT reduces the target's Energy Gain Efficiency by 10%",
      "ULT reduces the target's Energy Gain Efficiency by 12%",
      "ULT reduces the target's Energy Gain Efficiency by 14%",
      "ULT reduces the target's Energy Gain Efficiency by 16%",
      "ULT reduces the target's Energy Gain Efficiency by 18%",
    ],
    restriction: "Only effective for Disruptor",
  },

  // Character Tags - Reusable across multiple characters
  tags: [
    'Range',
    'Reduce Crit Rate',
    'Reduce Crit Dmg',
    'Inc Skill Cooldown',
    'Reduce Attack Speed',
    'Reduce Ultimate Skill',
    'Debuff',
    'AOE',
  ],
};

// SEO data for Belphegar
export const belphegarSEO = {
  title: `${belphegarData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${belphegarData.name}, a ${belphegarData.rarity} ${belphegarData.element} ${belphegarData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default belphegarData;
