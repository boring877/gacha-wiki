// Ibaraki-doji - Zone Nova Character Data
// Fire Disruptor character from Heikyo Castle faction

export const ibarakiDojiData = {
  // Basic Character Information
  name: 'Ibaraki-doji',
  image: 'Ibaraki-doji.png',
  rarity: 'SSR',
  element: 'Fire',
  class: 'Disruptor', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
  role: 'Disruptor', // Tank, DPS, Supporter, Disruptor, Healer - Functional description
  faction: 'Heikyo Castle',

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
        materials: [{"name": "Blaze Aether Lany.", "amount": 5, "icon": "Icon_Talent_Rankup_Fire_3.png"}, {"name": "Mother's Hovercharm", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_4.png"}],
      },
      {
        level: 9,
        gold: 160000,
        materials: [{"name": "Blaze Aether Lany.", "amount": 8, "icon": "Icon_Talent_Rankup_Fire_3.png"}, {"name": "Mother's Hovercharm", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_4.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 300000,
        materials: [{"name": "Blaze Aether Lany.", "amount": 14, "icon": "Icon_Talent_Rankup_Fire_3.png"}, {"name": "Mother's Hovercharm", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_4.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },

  // Character Skills
  skills: {
    normal:     {
      name: "Flame Arrow",
      cooldown: "2.0s",
      description: "Deals 120% of attack power as fire damage to the designated enemy unit.",
      template: "Deals {0} of attack power as fire damage to the designated enemy unit.",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Arrow of the Curse",
      cooldown: "5.0s",
      description: "Deals fire damage equal to 244.4% of attack power to the target and a 4-meter radius, and applies 1 stack of [Curse Covenant], reducing energy gain efficiency by 36.7% and increasing damage taken by 38.9% for 10 seconds.",
      template: "Deals fire damage equal to {0} of attack power to the target and a 4-meter radius, and applies 1 stack of [Curse Covenant], reducing energy gain efficiency by {1} and increasing damage taken by {2} for 10 seconds.",
      levelValues: [["100%", "15%", "10%"], ["111.1%", "16.7%", "12.2%"], ["122.2%", "18.3%", "14.4%"], ["133.3%", "20%", "16.7%"], ["144.4%", "21.7%", "18.9%"], ["155.6%", "23.3%", "21.1%"], ["166.7%", "25%", "23.3%"], ["177.8%", "26.7%", "25.6%"], ["188.9%", "28.3%", "27.8%"], ["200%", "30%", "30%"], ["211.1%", "31.7%", "32.2%"], ["222.2%", "33.3%", "34.4%"], ["233.3%", "35%", "36.7%"], ["244.4%", "36.7%", "38.9%"]],
    },
    ultimate:     {
      name: "Fire Phoenix Curse",
      energyCost: "3",
      cooldown: "1.0s",
      description: "Unleashes a Fire Phoenix in the direction of the enemy target, dealing 360% fire damage to all enemies in its path. Enemies hit by the damage will be inflicted with 1 stack of [Flame Curse], increasing their damage taken from ultimate skills by 88.3% for 10 seconds. This damage can [interrupt] any skill being cast by the target.",
      template: "Unleashes a Fire Phoenix in the direction of the enemy target, dealing {0} fire damage to all enemies in its path. Enemies hit by the damage will be inflicted with 1 stack of [Flame Curse], increasing their damage taken from ultimate skills by {1} for 10 seconds. This damage can [interrupt] any skill being cast by the target.",
      levelValues: [["165%", "45%"], ["180%", "48.3%"], ["195%", "51.7%"], ["210%", "55%"], ["225%", "58.3%"], ["240%", "61.7%"], ["255%", "65%"], ["270%", "68.3%"], ["285%", "71.7%"], ["300%", "75%"], ["315%", "78.3%"], ["330%", "81.7%"], ["345%", "85%"], ["360%", "88.3%"]],
    },
    passive:     {
      name: "Deboning",
      description: "All attacks inflict [Eviscerate] upon damaging enemies, increasing damage taken from ultimate skills by 3.9%, up to 10 stacks, lasting 5 seconds.",
      template: "All attacks inflict [Eviscerate] upon damaging enemies, increasing damage taken from ultimate skills by {0}, up to 10 stacks, lasting 5 seconds.",
      levelValues: [["1%"], ["1.2%"], ["1.4%"], ["1.7%"], ["1.9%"], ["2.1%"], ["2.3%"], ["2.6%"], ["2.8%"], ["3%"], ["3.2%"], ["3.4%"], ["3.7%"], ["3.9%"]],
    },
  },

  // Team Skill
  teamSkill: {
    name: "Combo Skill",
    description: "After battle starts, reduces total damage dealt by all enemy units by 2.5%.\nFor every 1000 Attack Power , the effect increases by 100%, up to a maximum of 300%.",
    requirements: {
      faction: "Heikyo Castle",
      element: "Fire",
      alternativeConditions: "Team contains 2 Heikyo Castle characters or 2 Fire characters",
    },
  },

  // Awakening Effects
  awakenings: [
    {
      level: 1,
      effect: "At the start of battle, the first use of a Ultimate Skill does not consume energy.",
    },
    {
      level: 2,
      effect: "When your ultimate skill hits an enemy, it inflicts [Flame Pressure], reducing the enemy's attack power by 35% for 3 seconds.",
    },
    {
      level: 3,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 4,
      effect: "Attack power increased by 30%",
    },
    {
      level: 5,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 6,
      effect: "Targets affected by ultimate skills have their all resistances reduced by an additional 20% for 5 sec.",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "A perfect makeup look?",
    image: "Ibaraki-dojicard",
    stats: {
      hp: "6,000",
      attack: "600",
      defense: "600",
    },
    effects: [  // awakening levels 1-5
      "Attack power increased by 24%. When a Ultimate Skill deals damage, the target takes 20% more damage and receives 24% less healing, lasting 5 seconds.",
      "Attack power increased by 28%. When a Ultimate Skill deals damage, the target takes 24% more damage and receives 28% less healing, lasting 5 seconds.",
      "Attack power increased by 32%. When a Ultimate Skill deals damage, the target takes 28% more damage and receives 32% less healing, lasting 5 seconds.",
      "Attack power increased by 36%. When a Ultimate Skill deals damage, the target takes 32% more damage and receives 36% less healing, lasting 5 seconds.",
      "Attack power increased by 40%. When a Ultimate Skill deals damage, the target takes 36% more damage and receives 40% less healing for 5 seconds.",
    ],
    restriction: "Only effective for Disruptor",
  },

  // Character Tags - Reusable across multiple characters
  tags: [
    'Debuff',
    'Ranged',
    'Fire Damage',
    'Ultimate Damage Amp',
    'Energy Drain',
    'Resistance Reduction',
    'Attack Reduction',
    'Interrupt',
    'AoE',
  ],

  // Damage Taken Debuff Analysis
  damageAnalysis: {
    title: 'Total Damage Taken Debuffs',
    description:
      'Ibaraki-doji has alot of damage taken debuffs, however she need alot of investment to be effective. like full dupe and memory, and the damage difference between her and Supporter is like 60% to 80% at best.',
    breakdown: [
      {
        source: 'Skill: Arrow of the Curse',
        value: '+38.6%',
        type: 'All damage taken',
        duration: '10s',
      },
      {
        source: 'ULT: Fire Phoenix Curse',
        value: '+87.9%',
        type: 'Ultimate damage taken',
        duration: '10s',
      },
      {
        source: 'Passive: Deboning (max 10 stacks)',
        value: '+36% (3.6% x 10)',
        type: 'Ultimate damage taken',
        duration: '5s',
      },
      {
        source: 'Memory: A Perfect Makeup Look?',
        value: '+36%',
        type: 'All damage taken (on ULT hit)',
        duration: '5s',
      },
      {
        source: 'Awakening 6',
        value: '-20% All Resistances',
        type: 'Multiplicative damage increase',
        duration: '5s',
      },
    ],
    totals: [
      {
        label: 'Ultimate Skill Damage Taken',
        value: '+198.5%',
        calculation: '38.6% + 87.9% + 36% + 36%',
        note: 'Nearly triples damage from teammate ultimates',
      },
      {
        label: 'All Damage Taken',
        value: '+74.6%',
        calculation: '38.6% + 36%',
        note: 'Inculdes DOT Damage too',
      },
    ],
  },
};

// SEO data for Ibaraki-doji
export const ibarakiDojiSEO = {
  title: 'Ibaraki-doji - Zone Nova Character Guide | GachaWiki',
  description:
    'Complete guide for Ibaraki-doji in Zone Nova. Learn about her fire debuffer abilities, curse mechanics, ultimate damage amplification, and optimal build strategies for this powerful Heikyo Castle ranged archer.',
};

// Export default for easy importing
export default ibarakiDojiData;
