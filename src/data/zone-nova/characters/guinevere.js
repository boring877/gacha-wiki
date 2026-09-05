// Guinevere Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const guinevereData = {
  // Basic Character Information
  name: 'Guinevere',
  image: 'Guinevere.png', // Character image identifier
  rarity: 'SSR',
  element: 'Fire',
  class: 'Tank', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
  role: 'Tank', // Tank, DPS, Supporter, Disruptor, Healer - Functional description
  faction: 'Avalon',

  // Base Stats (Level 80)
  stats: {
    hp: "6,600",
    attack: "480",
    defense: "690",
    energyRecovery: '0.25/s',
    critRate: '0%',
    critDmg: '50%',
    maxCritRate: '0%',
    maxCritDmg: '50%',
  },
  maxStats: {
    hp: '10,520',
    attack: '734',
    defense: '921',
  },
  talentTree: {
    totals: ["HP +59.4%", "ATK +53%", "DEF +33.6%"],
    enhancementNodes: [
      {
        name: "Enhancement I",
        rank: 2,
        bonus: "ATK +10%, HP +10%",
        materials: [{"name": "Holy Grail Teardrop", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_5.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}],
        gold: 5000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "ATK +15%, HP +15%",
        materials: [{"name": "Holy Grail Teardrop", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_5.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 20000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "ATK +20%, HP +20%",
        materials: [{"name": "Holy Grail Teardrop", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_5.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 160000,
      },
    ],
    statNodes: [
      {
        node: "N1",
        stat: "HP +3.2%",
        unlock: "After E1",
        materials: [{"name": "Holy Grail Teardrop", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_5.png"}],
        gold: 5000,
      },
      {
        node: "N2",
        stat: "DEF +4.8%",
        unlock: "Start",
        materials: [],
        gold: 2500,
      },
      {
        node: "N3",
        stat: "DEF +4.8%",
        unlock: "After N1",
        materials: [{"name": "Holy Grail Teardrop", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_5.png"}],
        gold: 10000,
      },
      {
        node: "N4",
        stat: "ATK +3.2%",
        unlock: "After N1",
        materials: [{"name": "Holy Grail Teardrop", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_5.png"}],
        gold: 10000,
      },
      {
        node: "N5",
        stat: "DEF +7.2%",
        unlock: "After N2",
        materials: [{"name": "Holy Grail Teardrop", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_5.png"}],
        gold: 20000,
      },
      {
        node: "N6",
        stat: "ATK +4.8%",
        unlock: "After N2",
        materials: [{"name": "Holy Grail Teardrop", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_5.png"}],
        gold: 160000,
      },
      {
        node: "N7",
        stat: "HP +4.8%",
        unlock: "After E2",
        materials: [{"name": "Holy Grail Teardrop", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_5.png"}],
        gold: 45000,
      },
      {
        node: "N8",
        stat: "DEF +7.2%",
        unlock: "After E2",
        materials: [{"name": "Holy Grail Teardrop", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_5.png"}],
        gold: 45000,
      },
      {
        node: "N9",
        stat: "DEF +9.6%",
        unlock: "Lv 80",
        materials: [{"name": "Holy Grail Teardrop", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_5.png"}],
        gold: 160000,
      },
      {
        node: "N10",
        stat: "HP +6.4%",
        unlock: "Lv 75",
        materials: [{"name": "Holy Grail Teardrop", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_5.png"}],
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
        materials: [{"name": "Blaze Aether Lany.", "amount": 5, "icon": "Icon_Talent_Rankup_Fire_3.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}],
      },
      {
        level: 9,
        gold: 160000,
        materials: [{"name": "Blaze Aether Lany.", "amount": 8, "icon": "Icon_Talent_Rankup_Fire_3.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 300000,
        materials: [{"name": "Blaze Aether Lany.", "amount": 14, "icon": "Icon_Talent_Rankup_Fire_3.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },

  // Skills
  skills: {
    normal:     {
      name: "Entropy Flame",
      cooldown: "2.0s",
      description: "Deals 120% Defense as fire damage to the targeted enemy unit",
      template: "Deals {0} Defense as fire damage to the targeted enemy unit",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Supreme Might",
      cooldown: "5.0s",
      description: "Grants self 58% Block Rate for 10 seconds\n[Block]: Has a chance to reduce damage taken by 30%, damage over time ignores Block",
      template: "Grants self {0} Block Rate for 10 seconds\n[Block]: Has a chance to reduce damage taken by 30%, damage over time ignores Block",
      levelValues: [["32%"], ["34%"], ["36%"], ["38%"], ["40%"], ["42%"], ["44%"], ["46%"], ["48%"], ["50%"], ["52%"], ["54%"], ["56%"], ["58%"]],
    },
    ultimate:     {
      name: "Dominion Authority: Apocalyptic Blaze",
      energyCost: "3",
      cooldown: "1.0s",
      description: "Deals 240% Defense as fire damage to the targeted enemy unit, considered [Pursue] damage, adding 1 stack of [Domination Authority] And reducing self damage taken by 24% for 10 seconds\n[Enhanced ULT]: Clears all [Domination Authority], gains one passive HP recovery instance, deals 240% Defense as fire damage to enemies in front, considered [Pursue] damage, And reduces self damage taken by 24% for 10 seconds",
      template: "Deals {0} Defense as fire damage to the targeted enemy unit, considered [Pursue] damage, adding 1 stack of [Domination Authority] And reducing self damage taken by {1} for 10 seconds\n[Enhanced ULT]: Clears all [Domination Authority], gains one passive HP recovery instance, deals {2} Defense as fire damage to enemies in front, considered [Pursue] damage, And reduces self damage taken by {3} for 10 seconds",
      levelValues: [["110%", "11%", "110%", "11%"], ["120%", "12%", "120%", "12%"], ["130%", "13%", "130%", "13%"], ["140%", "14%", "140%", "14%"], ["150%", "15%", "150%", "15%"], ["160%", "16%", "160%", "16%"], ["170%", "17%", "170%", "17%"], ["180%", "18%", "180%", "18%"], ["190%", "19%", "190%", "19%"], ["200%", "20%", "200%", "20%"], ["210%", "21%", "210%", "21%"], ["220%", "22%", "220%", "22%"], ["230%", "23%", "230%", "23%"], ["240%", "24%", "240%", "24%"]],
    },
    passive:     {
      name: "Malefic Starburst",
      description: "After a successful [Block], increases self Defense by 60% for 10 seconds\nAfter a successful [Block], adds 1 stack of [Domination Authority], up to 1 stack per second\nWhen [Domination Authority] reaches 10 stacks, can cast [Enhanced ULT]\nWhen self HP falls to 40% or below, triggers HP recovery, restoring 58% max HP within 0.5 seconds, And increases Block Rate to 100%, increases 100% Critical Resistance for 10 seconds, this effect starts with 1 trigger and can accumulate up to 1 time",
      template: "After a successful [Block], increases self Defense by {0} for 10 seconds\nAfter a successful [Block], adds 1 stack of [Domination Authority], up to 1 stack per second\nWhen [Domination Authority] reaches 10 stacks, can cast [Enhanced ULT]\nWhen self HP falls to 40% or below, triggers HP recovery, restoring {1} max HP within 0.5 seconds, And increases Block Rate to 100%, increases 100% Critical Resistance for 10 seconds, this effect starts with 1 trigger and can accumulate up to 1 time",
      levelValues: [["27.5%", "32%"], ["30%", "34%"], ["32.5%", "36%"], ["35%", "38%"], ["37.5%", "40%"], ["40%", "42%"], ["42.5%", "44%"], ["45%", "46%"], ["47.5%", "48%"], ["50%", "50%"], ["52.5%", "52%"], ["55%", "54%"], ["57.5%", "56%"], ["60%", "58%"]],
    },
  },

  // Team Skill
  teamSkill: {
    name: "Combo Skill",
    description: "Self Defense increases by 15%\nAt battle start, every 500 Defense reduces team damage taken by 1.5%, up to 6 times",
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
      effect: "After a successful [Block], gain an additional 30% self Defense for 5 seconds And passive HP recovery can accumulate up to 2 times",
    },
    {
      level: 2,
      effect: "Using a normal ULT grants one stack of [Domination Authority] And using an [Enhanced ULT] instantly grants two stacks of [Domination Authority]",
    },
    {
      level: 3,
      effect: "[Skill] and [Normal Attack] level and level cap +4",
    },
    {
      level: 4,
      effect: "Defense increases by 45%",
    },
    {
      level: 5,
      effect: "[ULT] and [Passive] level and level cap +4",
    },
    {
      level: 6,
      effect: "All resistances increase by 15% And Blaze resistance increases by an additional 15%\nPassive HP recovery starts with 2 triggers",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "Simple Birdcage",
    image: "Guinevere-card.png",
    stats: {
      hp: "6,600",
      attack: "480",
      defense: "690",
    },
    effects: [  // awakening levels 1-5
      "Defense increases by 48%, after a successful Block, damage taken decreases by 6% for 5 seconds, grants a Shield equal to 22% of max HP upon entering battle",
      "Defense increases by 52%, after a successful Block, damage taken decreases by 7% for 5 seconds, grants a Shield equal to 24% of max HP upon entering battle",
      "Defense increases by 56%, after a successful Block, damage taken decreases by 8% for 5 seconds, grants a Shield equal to 26% of max HP upon entering battle",
      "Defense increases by 60%, after a successful Block, damage taken decreases by 9% for 5 seconds, grants a Shield equal to 28% of max HP upon entering battle",
      "Defense increases by 64%, after a successful Block, damage taken decreases by 10% for 5 seconds, grants a Shield equal to 30% of max HP upon entering battle",
    ],
    restriction: "Only effective for Tank",
  },

  // Character Tags - Reusable across multiple characters
  tags: [
    'Melee',
    'Extra Attack',
    'Block',
    'Damage Reduction',
    'Healing',
    'Enhanced Ultimate',
    'Shield',
  ],
};

// SEO data for Guinevere
export const guinevereSEO = {
  title: `${guinevereData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${guinevereData.name}, a ${guinevereData.rarity} ${guinevereData.element} ${guinevereData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default guinevereData;
