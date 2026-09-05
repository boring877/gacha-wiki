// Sharin - Zone Nova Character Data
// Fire Supporter character from Monochrome Realm faction

export const sharinData = {
  name: 'Sharin',
  image: 'Sharin.png',
  rarity: 'SSR',
  element: 'Fire',
  class: 'Supporter',
  role: 'Supporter',
  faction: 'Monochrome Realm',

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
        materials: [{"name": "Dragon Scale", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_6.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}],
        gold: 5000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "ATK +15%, HP +15%",
        materials: [{"name": "Dragon Scale", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_6.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 20000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "ATK +20%, HP +20%",
        materials: [{"name": "Dragon Scale", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_6.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 160000,
      },
    ],
    statNodes: [
      {
        node: "N1",
        stat: "DEF +4.8%",
        unlock: "After E1",
        materials: [{"name": "Dragon Scale", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
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
        materials: [{"name": "Dragon Scale", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 10000,
      },
      {
        node: "N4",
        stat: "HP +3.2%",
        unlock: "After N1",
        materials: [{"name": "Dragon Scale", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 10000,
      },
      {
        node: "N5",
        stat: "ATK +4.8%",
        unlock: "After N2",
        materials: [{"name": "Dragon Scale", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 20000,
      },
      {
        node: "N6",
        stat: "HP +4.8%",
        unlock: "After N2",
        materials: [{"name": "Dragon Scale", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 160000,
      },
      {
        node: "N7",
        stat: "DEF +7.2%",
        unlock: "After E2",
        materials: [{"name": "Dragon Scale", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 45000,
      },
      {
        node: "N8",
        stat: "ATK +4.8%",
        unlock: "After E2",
        materials: [{"name": "Dragon Scale", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 45000,
      },
      {
        node: "N9",
        stat: "ATK +6.4%",
        unlock: "Lv 80",
        materials: [{"name": "Dragon Scale", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 160000,
      },
      {
        node: "N10",
        stat: "DEF +9.6%",
        unlock: "Lv 75",
        materials: [{"name": "Dragon Scale", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
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

  skills: {
    normal:     {
      name: "Fire Dance",
      cooldown: "2.0s",
      description: "Fires a blazing beam at the enemy, dealing blazing damage equal to 120% attack power to the designated enemy unit.",
      template: "Fires a blazing beam at the enemy, dealing blazing damage equal to {0} attack power to the designated enemy unit.",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Brilliant",
      cooldown: "7.0s",
      description: "The allied unit with the highest attack power gains [Invigorate], increasing attack power by 61.1% for 10 seconds, up to 4 stacks. The allied unit with the highest defense power gains [Fortify], increasing defense by 48.9% for 10 seconds, up to 4 stacks.",
      template: "The allied unit with the highest attack power gains [Invigorate], increasing attack power by {0} for 10 seconds, up to 4 stacks. The allied unit with the highest defense power gains [Fortify], increasing defense by {1} for 10 seconds, up to 4 stacks.",
      levelValues: [["25%", "20%"], ["27.8%", "22.2%"], ["30.6%", "24.4%"], ["33.3%", "26.7%"], ["36.1%", "28.9%"], ["38.9%", "31.1%"], ["41.7%", "33.3%"], ["44.4%", "35.6%"], ["47.2%", "37.8%"], ["50%", "40%"], ["52.8%", "42.2%"], ["55.6%", "44.4%"], ["58.3%", "46.7%"], ["61.1%", "48.9%"]],
    },
    ultimate:     {
      name: "Monthly Agreement",
      energyCost: "3",
      cooldown: "1.0s",
      description: "The ally with the highest attack power gains [Extreme Battle Spirit], increasing attack power by 171.1% and critical hit damage by 86.1%, lasting 10 seconds. The ally with the highest defense power also gains [Tank Heart], increasing defense by 146.7% and maximum health by 85.6%, lasting 10 seconds.",
      template: "The ally with the highest attack power gains [Extreme Battle Spirit], increasing attack power by {0} and critical hit damage by {1}, lasting 10 seconds. The ally with the highest defense power also gains [Tank Heart], increasing defense by {2} and maximum health by {3}, lasting 10 seconds.",
      levelValues: [["70%", "50%", "60%", "35%"], ["77.8%", "52.8%", "66.7%", "38.9%"], ["85.6%", "55.6%", "73.3%", "42.8%"], ["93.3%", "58.3%", "80%", "46.7%"], ["101.1%", "61.1%", "86.7%", "50.6%"], ["108.9%", "63.9%", "93.3%", "54.4%"], ["116.7%", "66.7%", "100%", "58.3%"], ["124.4%", "69.4%", "106.7%", "62.2%"], ["132.2%", "72.2%", "113.3%", "66.1%"], ["140%", "75%", "120%", "70%"], ["147.8%", "77.8%", "126.7%", "73.9%"], ["155.6%", "80.6%", "133.3%", "77.8%"], ["163.3%", "83.3%", "140%", "81.7%"], ["171.1%", "86.1%", "146.7%", "85.6%"]],
    },
    passive:     {
      name: "Azure Motion",
      description: "At the start of battle, all allies gain 1 stack of [Qi] every 5 seconds. Each stack of [Qi] increases healing received by 12.2%, shield received by 12.2%, damage dealt by 12.2%, and energy recovery efficiency by 3.4%, up to a maximum of 10 stacks.",
      template: "At the start of battle, all allies gain 1 stack of [Qi] every 5 seconds. Each stack of [Qi] increases healing received by {0}, shield received by {1}, damage dealt by {2}, and energy recovery efficiency by {3}, up to a maximum of 10 stacks.",
      levelValues: [["5%", "5%", "5%", "2%"], ["5.6%", "5.6%", "5.6%", "2.1%"], ["6.1%", "6.1%", "6.1%", "2.2%"], ["6.7%", "6.7%", "6.7%", "2.3%"], ["7.2%", "7.2%", "7.2%", "2.4%"], ["7.8%", "7.8%", "7.8%", "2.6%"], ["8.3%", "8.3%", "8.3%", "2.7%"], ["8.9%", "8.9%", "8.9%", "2.8%"], ["9.4%", "9.4%", "9.4%", "2.9%"], ["10%", "10%", "10%", "3%"], ["10.6%", "10.6%", "10.6%", "3.1%"], ["11.1%", "11.1%", "11.1%", "3.2%"], ["11.7%", "11.7%", "11.7%", "3.3%"], ["12.2%", "12.2%", "12.2%", "3.4%"]],
    },
  },

  teamSkill: {
    name: "Combo Skill",
    description: "At the start of battle, the entire team's damage is increased by 20%. For every 500 attack power, the entire team's attack power and defense increase by 5%, up to a maximum of 8 times.",
    requirements: {
      faction: "Monochrome Realm",
      element: "Fire",
      alternativeConditions: "Team contains 2 Monochrome Realm characters or 2 Fire characters",
    },
  },

  awakenings: [
    {
      level: 1,
      effect: "The ultimate skill’s [Extreme Battle Spirit] and [Tank Heart] now target two friendly units instead of one, and the first ultimate skill used after entering the battlefield no longer consumes energy.",
    },
    {
      level: 2,
      effect: "The character's skills [Invigorate] and [Fortify] have a maximum stack of 6. Upon entering the battlefield, all allies immediately gain 5 stacks of [Qi].",
    },
    {
      level: 3,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 4,
      effect: "When using the ultimate skill, all allies gain the [Hold the Line] buff, increasing defense by 80% and maximum HP by 25% for 10 seconds.",
    },
    {
      level: 5,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 6,
      effect: "Our entire party gains 20% increased all resistances, and the duration of the [Hold the Line] buff is extended to indefinitely when using the ultimate skill.",
    },
  ],

  memoryCard: {
    name: "Bath Time",
    image: "Sharincard",
    stats: {
      hp: "6,000",
      attack: "600",
      defense: "600",
    },
    effects: [  // awakening levels 1-5
      "Increases the attack and defense of all allies by 16%. Each time the wearer uses a skill, the maximum HP of all allies increases by 2% (up to 10 stacks).",
      "Increases the attack and defense of all allies by 20%. Each time the wearer uses a skill, the maximum HP of all allies increases by 3% (up to 10 stacks).",
      "Increases the attack and defense of all allies by 24%. Each time the wearer uses a skill, the maximum HP of all allies increases by 4% (up to 10 stacks).",
      "Increases the attack and defense of all allies by 28%. Each time the wearer uses a skill, the maximum HP of all allies increases by 5% (up to 10 stacks).",
      "Increases the attack and defense of all allies by 32%. Each time the wearer uses a skill, the maximum HP of all allies increases by 6% (up to 10 stacks).",
    ],
    restriction: "Only effective for Supporter",
  },

  tags: ['Ranged', 'Buff', 'Attack Boost', 'Defense Boost', 'HP Boost', 'Energy', 'Team Buff'],
};

export const sharinSEO = {
  title: `${sharinData.name} - Zone Nova Character Guide | GachaWiki`,
  description: `Complete guide for ${sharinData.name} in Zone Nova. Learn about her fire support abilities, team buffing capabilities, Qi stacking mechanics, and optimal build strategies for this powerful Monochrome Realm buffer.`,
};

export default sharinData;
