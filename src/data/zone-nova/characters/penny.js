// Penny Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const pennyData = {
  // Basic Character Information
  name: 'Penny',
  image: 'https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/zone-nova/characters/penny.png', // Use full path
  rarity: 'SSR', // SSR, SR, R
  element: 'Wind', // Fire, Ice, Wind, Holy, Chaos
  class: 'Tank', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
  role: 'Tank', // Tank, DPS, Supporter, Disruptor, Healer - Functional description
  faction: 'Safir', // Savir, etc.

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
        materials: [{"name": "Energy Vial", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_1.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}],
        gold: 5000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "ATK +15%, HP +15%",
        materials: [{"name": "Energy Vial", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_1.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 20000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "ATK +20%, HP +20%",
        materials: [{"name": "Energy Vial", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_1.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 160000,
      },
    ],
    statNodes: [
      {
        node: "N1",
        stat: "HP +3.2%",
        unlock: "After E1",
        materials: [{"name": "Energy Vial", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
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
        materials: [{"name": "Energy Vial", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 10000,
      },
      {
        node: "N4",
        stat: "ATK +3.2%",
        unlock: "After N1",
        materials: [{"name": "Energy Vial", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 10000,
      },
      {
        node: "N5",
        stat: "DEF +7.2%",
        unlock: "After N2",
        materials: [{"name": "Energy Vial", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 20000,
      },
      {
        node: "N6",
        stat: "ATK +4.8%",
        unlock: "After N2",
        materials: [{"name": "Energy Vial", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 160000,
      },
      {
        node: "N7",
        stat: "HP +4.8%",
        unlock: "After E2",
        materials: [{"name": "Energy Vial", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 45000,
      },
      {
        node: "N8",
        stat: "DEF +7.2%",
        unlock: "After E2",
        materials: [{"name": "Energy Vial", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 45000,
      },
      {
        node: "N9",
        stat: "DEF +9.6%",
        unlock: "Lv 80",
        materials: [{"name": "Energy Vial", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 160000,
      },
      {
        node: "N10",
        stat: "HP +6.4%",
        unlock: "Lv 75",
        materials: [{"name": "Energy Vial", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
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
        materials: [{"name": "Storm Aether", "amount": 3, "icon": "Icon_Talent_Rankup_Wind_1.png"}],
      },
      {
        level: 4,
        gold: 10000,
        materials: [{"name": "Storm Aetherstone", "amount": 3, "icon": "Icon_Talent_Rankup_Wind_2.png"}],
      },
      {
        level: 5,
        gold: 20000,
        materials: [{"name": "Storm Aetherstone", "amount": 5, "icon": "Icon_Talent_Rankup_Wind_2.png"}],
      },
      {
        level: 6,
        gold: 30000,
        materials: [{"name": "Storm Aetherstone", "amount": 7, "icon": "Icon_Talent_Rankup_Wind_2.png"}],
      },
      {
        level: 7,
        gold: 45000,
        materials: [{"name": "Storm Aether Lany.", "amount": 3, "icon": "Icon_Talent_Rankup_Wind_3.png"}],
      },
      {
        level: 8,
        gold: 80000,
        materials: [{"name": "Storm Aether Lany.", "amount": 5, "icon": "Icon_Talent_Rankup_Wind_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}],
      },
      {
        level: 9,
        gold: 160000,
        materials: [{"name": "Storm Aether Lany.", "amount": 8, "icon": "Icon_Talent_Rankup_Wind_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 300000,
        materials: [{"name": "Storm Aether Lany.", "amount": 14, "icon": "Icon_Talent_Rankup_Wind_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },

  // Skills
  skills: {
    normal:     {
      name: "Shield Impact",
      cooldown: "2.0s",
      description: "Deals 120% Defense as wind damage to the targeted enemy unit",
      template: "Deals {0} Defense as wind damage to the targeted enemy unit",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Aegis Storm",
      cooldown: "5.0s",
      description: "Deals 120% Defense as wind damage to the targeted enemy unit And reduces self damage taken by 24% for 10 seconds",
      template: "Deals {0} Defense as wind damage to the targeted enemy unit And reduces self damage taken by {1} for 10 seconds",
      levelValues: [["55%", "11%"], ["60%", "12%"], ["65%", "13%"], ["70%", "14%"], ["75%", "15%"], ["80%", "16%"], ["85%", "17%"], ["90%", "18%"], ["95%", "19%"], ["100%", "20%"], ["105%", "21%"], ["110%", "22%"], ["115%", "23%"], ["120%", "24%"]],
    },
    ultimate:     {
      name: "Aegis Shield",
      energyCost: "5",
      cooldown: "1.0s",
      description: "Grants all allied units a shield equal to 60% Defense And reduces damage taken by 24% for 10 seconds",
      template: "Grants all allied units a shield equal to {0} Defense And reduces damage taken by {1} for 10 seconds",
      levelValues: [["27.5%", "11%"], ["30%", "12%"], ["32.5%", "13%"], ["35%", "14%"], ["37.5%", "15%"], ["40%", "16%"], ["42.5%", "17%"], ["45%", "18%"], ["47.5%", "19%"], ["50%", "20%"], ["52.5%", "21%"], ["55%", "22%"], ["57.5%", "23%"], ["60%", "24%"]],
    },
    passive:     {
      name: "Aegis Resolve",
      description: "After taking damage, gains 1 stack of [Fortitude], increasing self Defense by 4.8%, up to 30 stacks",
      template: "After taking damage, gains 1 stack of [Fortitude], increasing self Defense by {0}, up to 30 stacks",
      levelValues: [["2.2%"], ["2.4%"], ["2.6%"], ["2.8%"], ["3%"], ["3.2%"], ["3.4%"], ["3.6%"], ["3.8%"], ["4%"], ["4.2%"], ["4.4%"], ["4.6%"], ["4.8%"]],
    },
  },

  // Team Skill
  teamSkill: {
    name: "Combo Skill",
    description: "Self Defense increases by 15%\nAt battle start, every 500 Defense reduces team damage taken by 1.5%, up to 6 times",
    requirements: {
      faction: "Safir",
      element: "Wind",
      alternativeConditions: "Team contains 2 Safir characters or 2 Wind characters",
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect: "After taking damage, gain one stack of [Fortitude]",
    },
    {
      level: 2,
      effect: "When [Fortitude] reaches 30 stacks, all allies instantly gain an ULT's shield and damage reduction effect And triggers once per battle",
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
      effect: "All resistances increase by 15% And Storm resistance increases by an additional 15%",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "Her Trainer",
    image: "pennycard",
    stats: {
      hp: "6,600",
      attack: "480",
      defense: "690",
    },
    effects: [  // awakening levels 1-5
      "Defense increases by 36%, after using an ULT, the wearer's damage taken decreases by 6% for 5 seconds, Shield applied by ULT increases by 10%",
      "Defense increases by 42%, after using an ULT, the wearer's damage taken decreases by 7% for 5 seconds, Shield applied by ULT increases by 12.5%",
      "Defense increases by 48%, after using an ULT, the wearer's damage taken decreases by 8% for 5 seconds, Shield applied by ULT increases by 15%",
      "Defense increases by 54%, after using an ULT, the wearer's damage taken decreases by 9% for 5 seconds, Shield applied by ULT increases by 17.5%",
      "Defense increases by 60%, after using an ULT, the wearer's damage taken decreases by 10% for 5 seconds, Shield applied by ULT increases by 20%",
    ],
    restriction: "Only effective for Tank",
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Def-Scale', 'Shield', 'Damage Reduction', 'Buff', 'Melee'],
};

// SEO data for Penny
export const pennySEO = {
  title: `${pennyData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${pennyData.name}, a ${pennyData.rarity} ${pennyData.element} ${pennyData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default pennyData;
