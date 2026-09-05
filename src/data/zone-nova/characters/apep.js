// Apep - Zone Nova Character Data
// Warrior/Tank character from Wind element

export const apepData = {
  // Basic Character Information
  name: 'Apep',
  image: 'Apep.png',
  rarity: 'SSR',
  element: 'Wind',
  class: 'Warrior', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
  role: 'DPS', // Tank, DPS, Supporter, Disruptor, Healer - Functional description
  faction: 'Kemich',

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
    attack: '696',
    defense: '1,004',
  },
  talentTree: {
    totals: ["HP +59.4%", "DEF +45.6%", "ATK +45%"],
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
        stat: "DEF +4.8%",
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
        stat: "DEF +7.2%",
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
        materials: [{"name": "Storm Aether Lany.", "amount": 5, "icon": "Icon_Talent_Rankup_Wind_3.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}],
      },
      {
        level: 9,
        gold: 160000,
        materials: [{"name": "Storm Aether Lany.", "amount": 8, "icon": "Icon_Talent_Rankup_Wind_3.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 300000,
        materials: [{"name": "Storm Aether Lany.", "amount": 14, "icon": "Icon_Talent_Rankup_Wind_3.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },

  // Character Skills
  skills: {
    normal:     {
      name: "Gale Strike",
      cooldown: "2.0s",
      description: "Deals wind damage equal to 120% of the user's own defense to the designated enemy unit.",
      template: "Deals wind damage equal to {0} of the user's own defense to the designated enemy unit.",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Wind-covered wall",
      cooldown: "5.0s",
      description: "Increases self-protection by a shield equal to 120% defense.",
      template: "Increases self-protection by a shield equal to {0} defense.",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    ultimate:     {
      name: "Kazeyu",
      energyCost: "2",
      cooldown: "1.0s",
      description: "When HP is below 50%, deals wind damage equal to 120% of the user's defense to targets in front and recovers HP equal to 120% of the user's defense. When HP is above 50%, an enhanced ultimate skill can be used, dealing wind damage equal to 240% of the user's defense to all targets within a 4-meter radius.",
      template: "When HP is below 50%, deals wind damage equal to {0} of the user's defense to targets in front and recovers HP equal to {1} of the user's defense. When HP is above 50%, an enhanced ultimate skill can be used, dealing wind damage equal to {2} of the user's defense to all targets within a 4-meter radius.",
      levelValues: [["55%", "55%", "110%"], ["60%", "60%", "120%"], ["65%", "65%", "130%"], ["70%", "70%", "140%"], ["75%", "75%", "150%"], ["80%", "80%", "160%"], ["85%", "85%", "170%"], ["90%", "90%", "180%"], ["95%", "95%", "190%"], ["100%", "100%", "200%"], ["105%", "105%", "210%"], ["110%", "110%", "220%"], ["115%", "115%", "230%"], ["120%", "120%", "240%"]],
    },
    passive:     {
      name: "Feng Hui",
      description: "Before entering combat, every 1000 defense increases maximum HP by 4000, up to a maximum of 20000. While holding a shield, damage taken is reduced by 24%, and damage dealt is increased by 48%.",
      template: "Before entering combat, every 1000 defense increases maximum HP by 4000, up to a maximum of 20000. While holding a shield, damage taken is reduced by {0}, and damage dealt is increased by {1}.",
      levelValues: [["11%", "22%"], ["12%", "24%"], ["13%", "26%"], ["14%", "28%"], ["15%", "30%"], ["16%", "32%"], ["17%", "34%"], ["18%", "36%"], ["19%", "38%"], ["20%", "40%"], ["21%", "42%"], ["22%", "44%"], ["23%", "46%"], ["24%", "48%"]],
    },
  },

  // Team Skill
  teamSkill: {
    name: "Combo Skill",
    description: "Self Defense increases by 15%\nAt battle start, every 500 Defense reduces team damage taken by 1.5%, up to 6 times",
    requirements: {
      faction: "Kemich",
      element: "Wind",
      alternativeConditions: "Team contains 2 Kemich characters or 2 Wind characters",
    },
  },

  // Awakening Effects
  awakenings: [
    {
      level: 1,
      effect: "Each time you deal normal attack damage, your defense increases by 5% for 10 seconds, stacking up to a maximum of 30%.",
    },
    {
      level: 2,
      effect: "Using enhanced Ultimate Skills also has a healing effect, with the healing amount being equal to that of the Ultimate Skill itself.",
    },
    {
      level: 3,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 4,
      effect: "Defense increased by 45%",
    },
    {
      level: 5,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 6,
      effect: "All resistances increased by 10%, storm resistance increased by an additional 10%\nAll damage dealt penetrates 10% of storm resistance",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "Wrong time of appearance",
    image: "Apepcard",
    stats: {
      hp: "6,600",
      attack: "480",
      defense: "690",
    },
    effects: [  // awakening levels 1-5
      "Defense increased by 48%\nWhen HP is below 50%, the wearer recovers 1% of maximum HP after attacking\nWhen HP is above 50%, damage taken is reduced by 6% and damage dealt is increased by 24%.",
      "Defense increased by 52%\nWhen HP is below 50%, the wearer recovers 1.2% of maximum HP after attacking\nWhen HP is above 50%, damage taken is reduced by 7% and damage dealt is increased by 28%.",
      "Defense increased by 56%\nWhen HP is below 50%, the wearer recovers 1.4% of maximum HP after attacking\nWhen HP is above 50%, damage taken is reduced by 8% and damage dealt is increased by 32%.",
      "Defense increased by 60%\nWhen HP is below 50%, the wearer recovers 1.6% of maximum HP after attacking\nWhen HP is above 50%, damage taken is reduced by 9% and damage dealt is increased by 36%.",
      "Defense increased by 64%\nWhen HP is below 50%, the wearer recovers 2% of maximum HP after attacking\nWhen HP is above 50%, damage taken is reduced by 10%, and damage dealt is increased by 40%.",
    ],
    restriction: "Only effective for Warrior",
  },

  // Character Tags - Reusable across multiple characters
  tags: [
    'Defense Scale',
    'Shield',
    'Tank',
    'Self Healing',
    'Wind Damage',
    'HP Scaling',
    'Conditional Enhancement',
  ],
};

// SEO and Metadata
export const apepSEO = {
  title: '【Warrior】Apep - Zone Nova Character Guide | GachaWiki',
  description:
    'Complete guide for 【Warrior】Apep in Zone Nova. Learn about his wind-based tank abilities, Wind Gang Wall shield, conditional healing, awakening effects, and optimal build strategies for this powerful Kemich faction defender.',
};
