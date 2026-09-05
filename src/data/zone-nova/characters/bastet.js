// Bastet Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js
// Instructions: Copy this file to the same directory as your character's .astro file

export const bastetData = {
  // Basic Character Information
  name: 'Bastet',
  image: 'Bastet.png',
  rarity: 'SR', // SSR, SR, R
  element: 'Wind', // Fire, Ice, Wind, Holy, Chaos
  class: 'Destroyer', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
  role: 'DPS', // Tank, DPS, Supporter, Disruptor, Healer - Functional description
  faction: 'Kemich', // Savir, etc.

  // Base Stats (Level 80)
  stats: {
    hp: "4,200",
    attack: "650",
    defense: "395",
    energyRecovery: '0.25/s',
    critRate: '0%',
    critDmg: '50%',
    maxCritRate: '0%',
    maxCritDmg: '50%',
  },
  maxStats: {
    hp: '6,694',
    attack: '1,088',
    defense: '442',
  },
  talentTree: {
    totals: ["ATK +67.4%", "HP +59.4%", "DEF +12%"],
    enhancementNodes: [
      {
        name: "Enhancement I",
        rank: 2,
        bonus: "ATK +10%, HP +10%",
        materials: [{"name": "Canopic Jar", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}],
        gold: 4000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "ATK +15%, HP +15%",
        materials: [{"name": "Canopic Jar", "amount": 2, "icon": "Icon_Talent_Rankup_Rare_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 16000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "ATK +20%, HP +20%",
        materials: [{"name": "Canopic Jar", "amount": 8, "icon": "Icon_Talent_Rankup_Rare_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 128000,
      },
    ],
    statNodes: [
      {
        node: "N1",
        stat: "HP +3.2%",
        unlock: "After E1",
        materials: [{"name": "Canopic Jar", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
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
        materials: [{"name": "Canopic Jar", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 8000,
      },
      {
        node: "N4",
        stat: "DEF +4.8%",
        unlock: "After N1",
        materials: [{"name": "Canopic Jar", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 8000,
      },
      {
        node: "N5",
        stat: "ATK +4.8%",
        unlock: "After N2",
        materials: [{"name": "Canopic Jar", "amount": 2, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 16000,
      },
      {
        node: "N6",
        stat: "DEF +7.2%",
        unlock: "After N2",
        materials: [{"name": "Canopic Jar", "amount": 8, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 128000,
      },
      {
        node: "N7",
        stat: "HP +4.8%",
        unlock: "After E2",
        materials: [{"name": "Canopic Jar", "amount": 4, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 36000,
      },
      {
        node: "N8",
        stat: "ATK +4.8%",
        unlock: "After E2",
        materials: [{"name": "Canopic Jar", "amount": 4, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 36000,
      },
      {
        node: "N9",
        stat: "ATK +6.4%",
        unlock: "Lv 80",
        materials: [{"name": "Canopic Jar", "amount": 8, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 128000,
      },
      {
        node: "N10",
        stat: "HP +6.4%",
        unlock: "Lv 75",
        materials: [{"name": "Canopic Jar", "amount": 8, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
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
        materials: [{"name": "Storm Aether", "amount": 2, "icon": "Icon_Talent_Rankup_Wind_1.png"}],
      },
      {
        level: 4,
        gold: 8000,
        materials: [{"name": "Storm Aetherstone", "amount": 2, "icon": "Icon_Talent_Rankup_Wind_2.png"}],
      },
      {
        level: 5,
        gold: 16000,
        materials: [{"name": "Storm Aetherstone", "amount": 4, "icon": "Icon_Talent_Rankup_Wind_2.png"}],
      },
      {
        level: 6,
        gold: 24000,
        materials: [{"name": "Storm Aetherstone", "amount": 6, "icon": "Icon_Talent_Rankup_Wind_2.png"}],
      },
      {
        level: 7,
        gold: 36000,
        materials: [{"name": "Storm Aether Lany.", "amount": 2, "icon": "Icon_Talent_Rankup_Wind_3.png"}],
      },
      {
        level: 8,
        gold: 64000,
        materials: [{"name": "Storm Aether Lany.", "amount": 4, "icon": "Icon_Talent_Rankup_Wind_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}],
      },
      {
        level: 9,
        gold: 128000,
        materials: [{"name": "Storm Aether Lany.", "amount": 6, "icon": "Icon_Talent_Rankup_Wind_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 240000,
        materials: [{"name": "Storm Aether Lany.", "amount": 11, "icon": "Icon_Talent_Rankup_Wind_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },

  // Skills
  skills: {
    normal:     {
      name: "Shadow Cat Arrow",
      cooldown: "2.0s",
      description: "Deals 120% Attack as wind damage to the targeted enemy unit",
      template: "Deals {0} Attack as wind damage to the targeted enemy unit",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Kitty! Bomb!",
      cooldown: "5.0s",
      description: "Deals 72% Attack as wind damage to the targeted enemy unit and enemies within a 4-meter radius",
      template: "Deals {0} Attack as wind damage to the targeted enemy unit and enemies within a 4-meter radius",
      levelValues: [["33%"], ["36%"], ["39%"], ["42%"], ["45%"], ["48%"], ["51%"], ["54%"], ["57%"], ["60%"], ["63%"], ["66%"], ["69%"], ["72%"]],
    },
    ultimate:     {
      name: "Kitty Barrage!",
      energyCost: "5",
      cooldown: "1.0s",
      description: "Deals 120% Attack as wind damage to the targeted enemy unit and enemies within a 4-meter radius",
      template: "Deals {0} Attack as wind damage to the targeted enemy unit and enemies within a 4-meter radius",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    passive:     {
      name: "Feline Frenzy",
      description: "Every 5 Normal Attacks, the next Normal Attack deals 120% Attack as wind damage to the targeted enemy unit and enemies within a 4-meter radius",
      template: "Every 5 Normal Attacks, the next Normal Attack deals {0} Attack as wind damage to the targeted enemy unit and enemies within a 4-meter radius",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
  },

  // Team Skill
  teamSkill: {
    name: "Combo Skill",
    description: "Self damage dealt increases by 20%",
    requirements: {
      faction: "Kemich",
      element: "Wind",
      alternativeConditions: "Team contains 2 Kemich characters or 2 Wind characters",
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect: "When the target's HP is above 50%, all self-dealt damage increases by 20%",
    },
    {
      level: 2,
      effect: "Passive effect's required normal attack count changes to 4",
    },
    {
      level: 3,
      effect: "[Skill] and [Normal Attack] level and level cap +4",
    },
    {
      level: 4,
      effect: "ULT damage increases by 20%",
    },
    {
      level: 5,
      effect: "[ULT] and [Passive] level and level cap +4",
    },
    {
      level: 6,
      effect: "After casting an ULT, Attack increases by 20% for 5 seconds",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "Annoying Classroom",
    image: "AnnoyingClassroom.png",
    stats: {
      hp: "4,200",
      attack: "650",
      defense: "395",
    },
    effects: [  // awakening levels 1-5
      "When casting an ULT, for each enemy on the field, ULT damage increases by 6%, stacks up to 5 times, lasts 5 seconds",
      "When casting an ULT, for each enemy on the field, ULT damage increases by 7.5%, stacks up to 5 times, lasts 5 seconds",
      "When casting an ULT, for each enemy on the field, ULT damage increases by 9%, stacks up to 5 times, lasts 5 seconds",
      "When casting an ULT, for each enemy on the field, ULT damage increases by 10.5%, stacks up to 5 times, lasts 5 seconds",
      "When casting an ULT, for each enemy on the field, ULT damage increases by 12%, stacks up to 5 times, lasts 5 seconds",
    ],
    restriction: "Only effective for Destroyer",
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Range', 'Normal Attack', 'AOE'],
};

// SEO data for Bastet
export const bastetSEO = {
  title: `${bastetData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${bastetData.name}, a ${bastetData.rarity} ${bastetData.element} ${bastetData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default bastetData;
