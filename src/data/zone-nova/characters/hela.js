// Hela Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const helaData = {
  // Basic Character Information
  name: 'Hela',
  chineseName: '海拉',
  title: 'Underworld Lord',
  chineseTitle: '冥界主宰',
  image: 'Hela.png', // Use format: charactername (e.g., 'Hela')
  rarity: 'SSR', // SSR, SR, R
  element: 'Chaos', // Fire, Ice, Wind, Holy, Chaos
  class: 'Attacker', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
  role: 'DPS', // Tank, DPS, Supporter, Disruptor, Healer - Functional description
  faction: 'Asa', // Asa (亚萨)

  // Base Stats (Level 80)
  stats: {
    hp: "5,040",
    attack: "780",
    defense: "474",
    energyRecovery: '0.25/s',
    critRate: '0%',
    critDmg: '50%',
    maxCritRate: '16.8%',
    maxCritDmg: '71.6%',
  },
  maxStats: {
    hp: '7,308',
    attack: '1,193',
    defense: '474',
  },
  talentTree: {
    totals: ["ATK +53%", "HP +45%", "Crit DMG +21.6%", "Crit Rate +16.8%"],
    enhancementNodes: [
      {
        name: "Enhancement I",
        rank: 2,
        bonus: "ATK +10%, HP +10%",
        materials: [{"name": "Dragon Scale", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_6.png"}, {"name": "Mother's Hovercharm", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_4.png"}],
        gold: 5000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "ATK +15%, HP +15%",
        materials: [{"name": "Dragon Scale", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_6.png"}, {"name": "Mother's Hovercharm", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_4.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 20000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "ATK +20%, HP +20%",
        materials: [{"name": "Dragon Scale", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_6.png"}, {"name": "Mother's Hovercharm", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_4.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 160000,
      },
    ],
    statNodes: [
      {
        node: "N1",
        stat: "Crit DMG +4.8%",
        unlock: "After E1",
        materials: [{"name": "Dragon Scale", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 5000,
      },
      {
        node: "N2",
        stat: "Crit Rate +2.4%",
        unlock: "Start",
        materials: [],
        gold: 2500,
      },
      {
        node: "N3",
        stat: "Crit Rate +2.4%",
        unlock: "After N1",
        materials: [{"name": "Dragon Scale", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 10000,
      },
      {
        node: "N4",
        stat: "ATK +3.2%",
        unlock: "After N1",
        materials: [{"name": "Dragon Scale", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 10000,
      },
      {
        node: "N5",
        stat: "Crit Rate +3.6%",
        unlock: "After N2",
        materials: [{"name": "Dragon Scale", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 20000,
      },
      {
        node: "N6",
        stat: "ATK +4.8%",
        unlock: "After N2",
        materials: [{"name": "Dragon Scale", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 160000,
      },
      {
        node: "N7",
        stat: "Crit DMG +7.2%",
        unlock: "After E2",
        materials: [{"name": "Dragon Scale", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 45000,
      },
      {
        node: "N8",
        stat: "Crit Rate +3.6%",
        unlock: "After E2",
        materials: [{"name": "Dragon Scale", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 45000,
      },
      {
        node: "N9",
        stat: "Crit Rate +4.8%",
        unlock: "Lv 80",
        materials: [{"name": "Dragon Scale", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 160000,
      },
      {
        node: "N10",
        stat: "Crit DMG +9.6%",
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
      name: "Hell Touch",
      cooldown: "2.0s",
      description: "[End] Mode\nDeal 120% attack power chaos damage to the designated enemy unit\n\n[Dead Silence] Mode\nMoves to the enemy unit with the highest attack power, dealing 120% attack power chaos damage to it",
      template: "[End] Mode\nDeal {0} attack power chaos damage to the designated enemy unit\n\n[Dead Silence] Mode\nMoves to the enemy unit with the highest attack power, dealing {1} attack power chaos damage to it",
      levelValues: [["55%", "55%"], ["60%", "60%"], ["65%", "65%"], ["70%", "70%"], ["75%", "75%"], ["80%", "80%"], ["85%", "85%"], ["90%", "90%"], ["95%", "95%"], ["100%", "100%"], ["105%", "105%"], ["110%", "110%"], ["115%", "115%"], ["120%", "120%"]],
    },
    auto:     {
      name: "Prelude to Deathly Silence",
      cooldown: "5.0s",
      description: "[End] Mode\nDeal 360% attack power chaos damage to the designated enemy unit\n\n[Dead Silence] Mode\nMove 5 meters towards the enemy unit with the highest attack power and deal 360% ​​attack power chaos damage to it",
      template: "[End] Mode\nDeal {0} attack power chaos damage to the designated enemy unit\n\n[Dead Silence] Mode\nMove 5 meters towards the enemy unit with the highest attack power and deal {1} ​​attack power chaos damage to it",
      levelValues: [["165%", "165%"], ["180%", "180%"], ["195%", "195%"], ["210%", "210%"], ["225%", "225%"], ["240%", "240%"], ["255%", "255%"], ["270%", "270%"], ["285%", "285%"], ["300%", "300%"], ["315%", "315%"], ["330%", "330%"], ["345%", "345%"], ["360%", "360%"]],
    },
    ultimate:     {
      name: "Domination Power: Chaos and Silence",
      energyCost: "1",
      cooldown: "1.0s",
      description: "Enter [End] mode after the battle begins.\n\nUltimate Skills can be switched between [End] and [Dead Silence] modes.\nSwitching changes all skills.\n\nWhen other allies cast Ultimate Skills, Hela gains an equal number of stacks of [Dominion Power: chaos and Dead Silence] based on the energy consumed, up to a maximum of 5 stacks at a time.\nWhen Hela gains 10 stacks of [Dominion Power: chaos and Dead Silence], she can consume all stacks and cast [Enhanced Ultimate Skill]. Stacks accumulate again after switching modes.\n\n[Enhanced Ultimate Skill]:\n[End] mode\nDeals 2160% attack power chaos damage to the designated enemy unit.\n\n[Dead Silence] mode\nMoves to the enemy unit with the highest attack power and continuously attacks it, dealing a total of 2160% attack power chaos damage.",
      template: "Enter [End] mode after the battle begins.\n\nUltimate Skills can be switched between [End] and [Dead Silence] modes.\nSwitching changes all skills.\n\nWhen other allies cast Ultimate Skills, Hela gains an equal number of stacks of [Dominion Power: chaos and Dead Silence] based on the energy consumed, up to a maximum of 5 stacks at a time.\nWhen Hela gains 10 stacks of [Dominion Power: chaos and Dead Silence], she can consume all stacks and cast [Enhanced Ultimate Skill]. Stacks accumulate again after switching modes.\n\n[Enhanced Ultimate Skill]:\n[End] mode\nDeals {0} attack power chaos damage to the designated enemy unit.\n\n[Dead Silence] mode\nMoves to the enemy unit with the highest attack power and continuously attacks it, dealing a total of {1} attack power chaos damage.",
      levelValues: [["990%", "990%"], ["1080%", "1080%"], ["1170%", "1170%"], ["1260%", "1260%"], ["1350%", "1350%"], ["1440%", "1440%"], ["1530%", "1530%"], ["1620%", "1620%"], ["1710%", "1710%"], ["1800%", "1800%"], ["1890%", "1890%"], ["1980%", "1980%"], ["2070%", "2070%"], ["2160%", "2160%"]],
    },
    passive:     {
      name: "Final Echo",
      description: "In [End] mode, all damage can penetrate the target's 24% resistance.\n\nIn [Dead Silence] mode, all damage can reduce the target's total damage by 36%.\n\nAt the start of combat, if there is at least one chaos character other than Hela in your team, Hela's critical damage increases by 60%",
      template: "In [End] mode, all damage can penetrate the target's {0} resistance.\n\nIn [Dead Silence] mode, all damage can reduce the target's total damage by {1}.\n\nAt the start of combat, if there is at least one chaos character other than Hela in your team, Hela's critical damage increases by {2}",
      levelValues: [["11%", "16.5%", "27.5%"], ["12%", "18%", "30%"], ["13%", "19.5%", "32.5%"], ["14%", "21%", "35%"], ["15%", "22.5%", "37.5%"], ["16%", "24%", "40%"], ["17%", "25.5%", "42.5%"], ["18%", "27%", "45%"], ["19%", "28.5%", "47.5%"], ["20%", "30%", "50%"], ["21%", "31.5%", "52.5%"], ["22%", "33%", "55%"], ["23%", "34.5%", "57.5%"], ["24%", "36%", "60%"]],
    },
  },

  // Team Skill
  teamSkill: {
    name: "Combo Skill",
    description: "Increases attack power by 10%. When starting a battle, every 500 attack power increases your own chaos damage by 5%, up to 6 times.",
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
      effect: "After starting a battle, attack power increases by 30%. When switching modes, damage received is reduced by 50%.",
    },
    {
      level: 2,
      effect: "In [End] mode, critical damage increases by 30%\n\nIn [Dead Silence] mode, damage received decreases by 20%",
    },
    {
      level: 3,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 4,
      effect: "<color=#9754d5>Chaos</color> damage increased by 30%",
    },
    {
      level: 5,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 6,
      effect: "All damage dealt by Hela penetrates 20% of all resistances",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "Weird eyes full of desire",
    image: "Helacard",
    stats: {
      hp: "5,040",
      attack: "780",
      defense: "474",
    },
    effects: [  // awakening levels 1-5
      "Increases critical hit rate by 18%. When other friendly units cast a Ultimate Skill, the wearer's damage increases by 12% for 5 seconds. It can be stacked up to 3 times.",
      "Increases critical hit rate by 22%. When other friendly units cast a Ultimate Skill, the wearer's damage increases by 15% for 5 seconds, and can be stacked up to 3 times.",
      "Increases critical hit rate by 26%. When other friendly units cast a Ultimate Skill, the wearer's damage increases by 18% for 5 seconds, and can be stacked up to 3 times.",
      "Increases critical hit rate by 30%. When other friendly units cast a Ultimate Skill, the wearer's damage increases by 21% for 5 seconds. It can be stacked up to 3 times.",
      "Increases critical hit rate by 34%. When other friendly units cast a Ultimate Skill, the wearer's damage increases by 24% for 5 seconds, and can be stacked up to 3 times.",
    ],
    restriction: "Only effective for Attacker",
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Enhanced Ultimate', 'Mode Switch', 'Crit Damage', 'Crit Rate', 'Ranged', 'Melee'],

  // Unique mechanics for Hela
  uniqueMechanics: {
    modeSwitching: {
      description: 'Hela can switch between Termination and Death Silence modes using her Ultimate',
      modes: ['Termination', 'Death Silence'],
    },
    enhancedUltimate: {
      description:
        'When reaching 10 layers from ally ultimates, can consume all layers to cast Enhanced Ultimate',
    },
    teamSynergy: {
      description: 'Chaos attribute team bonus increases Crit Damage',
    },
  },
};

// SEO data for Hela
export const helaSEO = {
  title: `${helaData.name} (${helaData.chineseName}) - Zone Nova Character Guide`,
  description: `Complete guide for ${helaData.name}, a ${helaData.rarity} ${helaData.element} ${helaData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export legacy structure for character registry compatibility
export const hela = {
  id: 'hela',
  name: 'Hela',
  chineseName: '海拉',
  rarity: 'SSR',
  element: 'Chaos',
  role: 'DPS',
  class: 'Attacker',
  faction: 'Asa',
  chineseFaction: '亚萨',
  maxLevel: 80,

  baseStats: {
    hp: 7308,
    attack: 1193,
    defense: 474,
    energyRecovery: 0.25,
    critRate: 16.8,
    critDamage: 71.6,
  },

  images: {
    portrait: 'https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/zone-nova/characters/Hela.png',
    card: 'https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/zone-nova/memories/Helacard.jpg',
  },

  tags: [
    'DPS',
    'Chaos',
    'Asa',
    'Enhanced Ultimate',
    'Mode Switch',
    'Crit Damage',
    'Crit Rate',
    'Ranged',
    'Melee',
  ],
};

// Export default for easy importing
export default helaData;
