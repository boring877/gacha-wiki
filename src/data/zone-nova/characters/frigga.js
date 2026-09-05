// Frigga Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js
// Instructions: Copy this file to the same directory as your character's .astro file

export const friggaData = {
  // Basic Character Information
  name: 'Frigga',
  image: 'Frigga.png', // Use format: charactername (e.g., 'frigga')
  rarity: 'SSR', // SSR, SR, R
  element: 'Chaos', // Fire, Ice, Wind, Holy, Chaos
  class: 'Disruptor', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
  role: 'Disruptor', // Tank, DPS, Supporter, Disruptor, Healer - Functional description
  faction: 'Asa', // Asa faction

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
        materials: [{"name": "Canopic Jar", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_3.png"}, {"name": "Mother's Hovercharm", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_4.png"}],
        gold: 5000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "ATK +15%, HP +15%",
        materials: [{"name": "Canopic Jar", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_3.png"}, {"name": "Mother's Hovercharm", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_4.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 20000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "ATK +20%, HP +20%",
        materials: [{"name": "Canopic Jar", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_3.png"}, {"name": "Mother's Hovercharm", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_4.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
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
        materials: [{"name": "Chaos Aether Lany.", "amount": 5, "icon": "Icon_Talent_Rankup_Dark_3.png"}, {"name": "Mother's Hovercharm", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_4.png"}],
      },
      {
        level: 9,
        gold: 160000,
        materials: [{"name": "Chaos Aether Lany.", "amount": 8, "icon": "Icon_Talent_Rankup_Dark_3.png"}, {"name": "Mother's Hovercharm", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_4.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 300000,
        materials: [{"name": "Chaos Aether Lany.", "amount": 14, "icon": "Icon_Talent_Rankup_Dark_3.png"}, {"name": "Mother's Hovercharm", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_4.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },

  // Skills
  skills: {
    normal:     {
      name: "Spindle Thrust",
      cooldown: "2.0s",
      description: "Deals 120% Attack Power as chaos damage to a designated enemy unit.",
      template: "Deals {0} Attack Power as chaos damage to a designated enemy unit.",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Causality Reversal",
      cooldown: "5.0s",
      description: "Applies a weakness attribute to a designated enemy unit, prioritizing the attribute of the 4th character in our formation, reducing the corresponding attribute resistance by 15% for 10 seconds.\n\nDeals 360% Attack Power as corresponding attribute damage to the target.",
      template: "Applies a weakness attribute to a designated enemy unit, prioritizing the attribute of the 4th character in our formation, reducing the corresponding attribute resistance by 15% for 10 seconds.\n\nDeals {0} Attack Power as corresponding attribute damage to the target.",
      levelValues: [["165%"], ["180%"], ["195%"], ["210%"], ["225%"], ["240%"], ["255%"], ["270%"], ["285%"], ["300%"], ["315%"], ["330%"], ["345%"], ["360%"]],
    },
    ultimate:     {
      name: "Spindle of Fate",
      energyCost: "3",
      cooldown: "1.0s",
      description: "Summons a miniature black hole, dealing 12 hits to a designated enemy unit and its 3-meter radius, with total damage of 60% chaos damage, increasing damage taken by 36% for 10 seconds. The next Ultimate Skill becomes an 【Enhanced Ultimate Skill】.\n\n【Enhanced Ultimate Skill】: \nSummons a large black hole, dealing 12 hits to a designated enemy unit and its 5-meter radius, with total damage of 180% chaos damage, increasing damage taken by 60% for 10 seconds. This effect cannot stack with the regular Ultimate Skill effect.\n\nWhen a large black hole exists, all enemy units’ Energy gain efficiency decreases by 50% and total defense decreases by 10%.",
      template: "Summons a miniature black hole, dealing 12 hits to a designated enemy unit and its 3-meter radius, with total damage of {0} chaos damage, increasing damage taken by {1} for 10 seconds. The next Ultimate Skill becomes an 【Enhanced Ultimate Skill】.\n\n【Enhanced Ultimate Skill】: \nSummons a large black hole, dealing 12 hits to a designated enemy unit and its 5-meter radius, with total damage of {2} chaos damage, increasing damage taken by {3} for 10 seconds. This effect cannot stack with the regular Ultimate Skill effect.\n\nWhen a large black hole exists, all enemy units’ Energy gain efficiency decreases by 50% and total defense decreases by 10%.",
      levelValues: [["27.5%", "16.5%", "82.5%", "27.5%"], ["30%", "18%", "90%", "30%"], ["32.5%", "19.5%", "97.5%", "32.5%"], ["35%", "21%", "105%", "35%"], ["37.5%", "22.5%", "112.5%", "37.5%"], ["40%", "24%", "120%", "40%"], ["42.5%", "25.5%", "127.5%", "42.5%"], ["45%", "27%", "135%", "45%"], ["47.5%", "28.5%", "142.5%", "47.5%"], ["50%", "30%", "150%", "50%"], ["52.5%", "31.5%", "157.5%", "52.5%"], ["55%", "33%", "165%", "55%"], ["57.5%", "34.5%", "172.5%", "57.5%"], ["60%", "36%", "180%", "60%"]],
    },
    passive:     {
      name: "Loom of Twilight",
      description: "After dealing damage with normal attacks or skills, applies one stack of 【Godfall】.\n\nAfter dealing damage to the same target 4 times with an Ultimate Skill, applies one stack of 【Godfall】.\n\n【Godfall】: Deals 19.2% Attack Power as chaos damage every 3 seconds, up to 10 stacks, lasting 10 seconds.",
      template: "After dealing damage with normal attacks or skills, applies one stack of 【Godfall】.\n\nAfter dealing damage to the same target 4 times with an Ultimate Skill, applies one stack of 【Godfall】.\n\n【Godfall】: Deals {0} Attack Power as chaos damage every 3 seconds, up to 10 stacks, lasting 10 seconds.",
      levelValues: [["8.8%"], ["9.6%"], ["10.4%"], ["11.2%"], ["12%"], ["12.8%"], ["13.6%"], ["14.4%"], ["15.2%"], ["16%"], ["16.8%"], ["17.6%"], ["18.4%"], ["19.2%"]],
    },
  },

  // Team Skill
  teamSkill: {
    name: "Combo Skill",
    description: "After battle starts, reduces total damage dealt by all enemy units by 2.5%.\nFor every 1000 Attack Power Frigga has, the effect increases by 100%, up to a maximum of 300%.",
    requirements: {
      faction: "Asa",
      element: "Chaos",
      alternativeConditions: "Team contains 2 Asa characters or 2 Chaos characters",
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect: "After battle starts,you can immediately cast 【Enhanced Ultimate Skill】.\n\nThe first target damaged by an Ultimate Skill takes an additional 100% <color=#9754d5>Chaos</color> damage,which cannot crit.",
    },
    {
      level: 2,
      effect: "Ultimate Skill damage increased by 20%.\n\n【Enhanced Ultimate Skill】 cost reduced to 1.\n\nWhen a large black hole exists, it changes to reduce all enemy units’ Energy gain efficiency by 100% and total defense by 20%.",
    },
    {
      level: 3,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 4,
      effect: "Attack Power increased by 30%",
    },
    {
      level: 5,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 6,
      effect: "Targets affected by Ultimate Skills have all resistances reduced by an additional 20%.",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "Reading by Lamplight",
    image: "Freyecard",
    stats: {
      hp: "6,000",
      attack: "600",
      defense: "600",
    },
    effects: [  // awakening levels 1-5
      "Attack Power increased by 24%.\nUltimate Skill damage can apply \u3010Fate Blossom\u3011, with each stack increasing damage taken by 2% for 10 seconds, up to 10 stacks.",
      "Attack Power increased by 28%.\nUltimate Skill damage can apply \u3010Fate Blossom\u3011, with each stack increasing damage taken by 2.4% for 10 seconds, up to 10 stacks.",
      "Attack Power increased by 32%.\nUltimate Skill damage can apply \u3010Fate Blossom\u3011, with each stack increasing damage taken by 2.8% for 10 seconds, up to 10 stacks.",
      "Attack Power increased by 36%.\nUltimate Skill damage can apply \u3010Fate Blossom\u3011, with each stack increasing damage taken by 3.2% for 10 seconds, up to 10 stacks.",
      "Attack Power increased by 40%.\nUltimate Skill damage can apply \u3010Fate Blossom\u3011, with each stack increasing damage taken by 3.6% for 10 seconds, up to 10 stacks.",
    ],
    restriction: "Only effective for Disruptor",
  },

  // Character Tags - Reusable across multiple characters
  tags: [
    'DOT',
    'Enhanced Ultimate',
    'Damage Taken Increase',
    'element weaknesses',
    'energy gain reduced',
    'debuff',
    'range',
  ],
};

// SEO data for Frigga
export const friggaSEO = {
  title: `${friggaData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${friggaData.name}, a ${friggaData.rarity} ${friggaData.element} ${friggaData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default friggaData;
