// Nina Character Data - Zone Nova
// Halloween Candy themed Ice Warrior with Frost Ash mechanics

export const ninaData = {
  // Basic Character Information
  name: 'Nina',
  image: 'Nina.png', // Use format: charactername (e.g., 'penny')
  rarity: 'SSR', // SSR, SR, R
  element: 'Ice', // Fire, Ice, Wind, Holy, Chaos
  class: 'Warrior', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
  role: 'DPS', // Tank, DPS, Supporter, Disruptor, Healer - Functional description
  faction: 'Safir', // Safir faction for combination skill compatibility

  // Base Stats (Level 80)
  stats: {
    hp: "6,000",
    attack: "600",
    defense: "600",
    energyRecovery: '0.25/s',
    critRate: '0%',
    critDmg: '50%',
    maxCritRate: '6%',
    maxCritDmg: '50%',
  },
  maxStats: {
    hp: '8,700',
    attack: '1,004',
    defense: '729',
  },
  talentTree: {
    totals: ["ATK +67.4%", "HP +45%", "DEF +21.6%", "Crit Rate +6%"],
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
        stat: "Crit Rate +2.4%",
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
        stat: "Crit Rate +3.6%",
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
        materials: [{"name": "Frost Aether", "amount": 3, "icon": "Icon_Talent_Rankup_Ice_1.png"}],
      },
      {
        level: 4,
        gold: 10000,
        materials: [{"name": "Frost Aetherstone", "amount": 3, "icon": "Icon_Talent_Rankup_Ice_2.png"}],
      },
      {
        level: 5,
        gold: 20000,
        materials: [{"name": "Frost Aetherstone", "amount": 5, "icon": "Icon_Talent_Rankup_Ice_2.png"}],
      },
      {
        level: 6,
        gold: 30000,
        materials: [{"name": "Frost Aetherstone", "amount": 7, "icon": "Icon_Talent_Rankup_Ice_2.png"}],
      },
      {
        level: 7,
        gold: 45000,
        materials: [{"name": "Frost Aether Lany.", "amount": 3, "icon": "Icon_Talent_Rankup_Ice_3.png"}],
      },
      {
        level: 8,
        gold: 80000,
        materials: [{"name": "Frost Aether Lany.", "amount": 5, "icon": "Icon_Talent_Rankup_Ice_3.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}],
      },
      {
        level: 9,
        gold: 160000,
        materials: [{"name": "Frost Aether Lany.", "amount": 8, "icon": "Icon_Talent_Rankup_Ice_3.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 300000,
        materials: [{"name": "Frost Aether Lany.", "amount": 14, "icon": "Icon_Talent_Rankup_Ice_3.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },

  // Skills with Frost Ash state mechanics
  skills: {
    normal:     {
      name: "Frostblood Thorn",
      cooldown: "2.0s",
      description: "Deals ice damage equal to 120% of your own attack power to the designated enemy unit and restores 12% of your maximum health.\n\n[ice Burning] Status:\nEach attack deducts 5% of your maximum health and deals ice damage equal to 240% of your own attack power to the designated enemy unit.",
      template: "Deals ice damage equal to {0} of your own attack power to the designated enemy unit and restores {1} of your maximum health.\n\n[ice Burning] Status:\nEach attack deducts 5% of your maximum health and deals ice damage equal to {2} of your own attack power to the designated enemy unit.",
      levelValues: [["55%", "5.5%", "110%"], ["60%", "6%", "120%"], ["65%", "6.5%", "130%"], ["70%", "7%", "140%"], ["75%", "7.5%", "150%"], ["80%", "8%", "160%"], ["85%", "8.5%", "170%"], ["90%", "9%", "180%"], ["95%", "9.5%", "190%"], ["100%", "10%", "200%"], ["105%", "10.5%", "210%"], ["110%", "11%", "220%"], ["115%", "11.5%", "230%"], ["120%", "12%", "240%"]],
    },
    auto:     {
      name: "Cinder Burst",
      cooldown: "5.0s",
      description: "Deals ice damage equal to 480% of your attack power to the designated enemy unit and the unit behind it, and restores 12% of your maximum health.\n\n[ice Burning] Status:\nEach attack deducts 5% of your maximum health, and deals ice damage equal to 960% of your attack power to the designated enemy unit and the unit behind it.",
      template: "Deals ice damage equal to {0} of your attack power to the designated enemy unit and the unit behind it, and restores {1} of your maximum health.\n\n[ice Burning] Status:\nEach attack deducts 5% of your maximum health, and deals ice damage equal to {2} of your attack power to the designated enemy unit and the unit behind it.",
      levelValues: [["220%", "5.5%", "440%"], ["240%", "6%", "480%"], ["260%", "6.5%", "520%"], ["280%", "7%", "560%"], ["300%", "7.5%", "600%"], ["320%", "8%", "640%"], ["340%", "8.5%", "680%"], ["360%", "9%", "720%"], ["380%", "9.5%", "760%"], ["400%", "10%", "800%"], ["420%", "10.5%", "840%"], ["440%", "11%", "880%"], ["460%", "11.5%", "920%"], ["480%", "12%", "960%"]],
    },
    ultimate:     {
      name: "Frost Embers Release",
      energyCost: "1",
      cooldown: "1.0s",
      description: "Enter the [ice Burning] state\nBasic attack speed increased by 50%\nBasic skill colddown decreased to 3s\nCritical hit rate increased by 60%\nAutomatically exit the [ice Burning] state when health drops below 30%\nYou can cast Ultimate Skills again in the [ice Burning] state to exit the [ice Burning] state",
      template: "Enter the [ice Burning] state\nBasic attack speed increased by 50%\nBasic skill colddown decreased to 3s\nCritical hit rate increased by {0}\nAutomatically exit the [ice Burning] state when health drops below 30%\nYou can cast Ultimate Skills again in the [ice Burning] state to exit the [ice Burning] state",
      levelValues: [["27.5%"], ["30%"], ["32.5%"], ["35%"], ["37.5%"], ["40%"], ["42.5%"], ["45%"], ["47.5%"], ["50%"], ["52.5%"], ["55%"], ["57.5%"], ["60%"]],
    },
    passive:     {
      name: "Immortal Frost Scars",
      description: "In [ice Burning] mode, damage received is reduced by 50%. In [ice Burning] mode, each attack increases your attack speed by 12%, lasting 5 seconds, and can be stacked up to 5 times.",
      template: "In [ice Burning] mode, damage received is reduced by 50%. In [ice Burning] mode, each attack increases your attack speed by {0}, lasting 5 seconds, and can be stacked up to 5 times.",
      levelValues: [["5.5%"], ["6%"], ["6.5%"], ["7%"], ["7.5%"], ["8%"], ["8.5%"], ["9%"], ["9.5%"], ["10%"], ["10.5%"], ["11%"], ["11.5%"], ["12%"]],
    },
  },

  // Team Skill (Combination Skill)
  teamSkill: {
    name: "Combo Skill",
    description: "Self Attack increases by 10%\nAt battle start, every 500 Attack increases self Critical Damage by 7.5%, up to 6 times",
    requirements: {
      faction: "Safir",
      element: "Ice",
      alternativeConditions: "Team contains 2 Safir characters or 2 Ice characters",
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect: "After killing an enemy, immediately recover 20% of your maximum health. After entering combat, immediately enter the [Frost Burning] state. While in the [Frost Burning] state, all damage is increased by 20%.",
    },
    {
      level: 2,
      effect: "When HP drops to 35% or below, 50% of the maximum HP is immediately restored. This condition can be triggered once per battle. In the [Frost Burning] state, the critical hit rate is increased by an additional 15%.",
    },
    {
      level: 3,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 4,
      effect: "Increases <color=#1ec1ff>frost</color> damage by 30%",
    },
    {
      level: 5,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 6,
      effect: "In the [Frost Burning] state, all damage penetrates 20% of frost resistance",
    },
  ],

  // Memory Card - Halloween Candy
  memoryCard: {
    name: "Halloween candy",
    image: "Ninacard",
    stats: {
      hp: "6,000",
      attack: "600",
      defense: "600",
    },
    effects: [  // awakening levels 1-5
      "Increases critical damage by 36%. When HP is above 30%, the wearer recovers 1% of their maximum HP after attacking, and all damage is increased by 24%.",
      "Increases critical damage by 42%. When HP is above 30%, the wearer recovers 1.2% of their maximum HP after attacking, and all damage is increased by 28%.",
      "Increases critical damage by 48%. When HP is above 30%, the wearer recovers 1.4% of their maximum HP after attacking, and all damage is increased by 32%.",
      "Increases critical damage by 54%. When HP is above 30%, the wearer recovers 1.6% of their maximum HP after attacking, and all damage is increased by 36%.",
      "Increases critical hit damage by 60%. When HP is above 30%, the wearer recovers 2% of their maximum HP after attacking, and all damage is increased by 40%.",
    ],
    restriction: "Only effective for Warrior",
  },

  // Character Tags - For search and filtering
  tags: [
    'Ice',
    'Critical',
    'Self-Heal',
    'Burst Damage',
    'Mode Switch',
    'Attack Speed',
    'Warrior',
    'SSR',
  ],
};

// SEO data for Nina
export const ninaSEO = {
  title: `${ninaData.name} - Zone Nova Character Guide | Halloween Candy`,
  description: `Complete guide for ${ninaData.name}, a ${ninaData.rarity} ${ninaData.element} ${ninaData.class} in Zone Nova. Includes Frost Ash mechanics, skills, awakenings, Halloween Candy memory card, and optimal team compositions.`,
  keywords: `Nina, Zone Nova, Halloween Candy, Frost Ash, Ice Warrior, ${ninaData.rarity}, character guide, skills, awakenings`,
};

// Export default for easy importing
export default ninaData;
