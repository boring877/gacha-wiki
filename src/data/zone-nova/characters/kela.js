// Kela Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const kelaData = {
  // Basic Character Information
  name: 'Kela',
  image: 'kela.png', // Character image identifier
  rarity: 'SR',
  element: 'Holy',
  class: 'Healer', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
  role: 'Healer', // Tank, DPS, Supporter, Disruptor, Healer - Functional description
  faction: 'Safir',

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
    hp: '7,650',
    attack: '837',
    defense: '608',
  },
  talentTree: {
    totals: ["ATK +67.4%", "HP +53%", "DEF +21.6%"],
    enhancementNodes: [
      {
        name: "Enhancement I",
        rank: 2,
        bonus: "ATK +10%, HP +10%",
        materials: [{"name": "High-Precision Chip", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_2.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}],
        gold: 4000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "ATK +15%, HP +15%",
        materials: [{"name": "High-Precision Chip", "amount": 2, "icon": "Icon_Talent_Rankup_Rare_2.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 16000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "ATK +20%, HP +20%",
        materials: [{"name": "High-Precision Chip", "amount": 8, "icon": "Icon_Talent_Rankup_Rare_2.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 128000,
      },
    ],
    statNodes: [
      {
        node: "N1",
        stat: "DEF +4.8%",
        unlock: "After E1",
        materials: [{"name": "High-Precision Chip", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
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
        materials: [{"name": "High-Precision Chip", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 8000,
      },
      {
        node: "N4",
        stat: "HP +3.2%",
        unlock: "After N1",
        materials: [{"name": "High-Precision Chip", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 8000,
      },
      {
        node: "N5",
        stat: "ATK +4.8%",
        unlock: "After N2",
        materials: [{"name": "High-Precision Chip", "amount": 2, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 16000,
      },
      {
        node: "N6",
        stat: "HP +4.8%",
        unlock: "After N2",
        materials: [{"name": "High-Precision Chip", "amount": 8, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 128000,
      },
      {
        node: "N7",
        stat: "DEF +7.2%",
        unlock: "After E2",
        materials: [{"name": "High-Precision Chip", "amount": 4, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 36000,
      },
      {
        node: "N8",
        stat: "ATK +4.8%",
        unlock: "After E2",
        materials: [{"name": "High-Precision Chip", "amount": 4, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 36000,
      },
      {
        node: "N9",
        stat: "ATK +6.4%",
        unlock: "Lv 80",
        materials: [{"name": "High-Precision Chip", "amount": 8, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 128000,
      },
      {
        node: "N10",
        stat: "DEF +9.6%",
        unlock: "Lv 75",
        materials: [{"name": "High-Precision Chip", "amount": 8, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
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
        materials: [{"name": "Holy Aether", "amount": 2, "icon": "Icon_Talent_Rankup_Light_1.png"}],
      },
      {
        level: 4,
        gold: 8000,
        materials: [{"name": "Holy Aetherstone", "amount": 2, "icon": "Icon_Talent_Rankup_Light_2.png"}],
      },
      {
        level: 5,
        gold: 16000,
        materials: [{"name": "Holy Aetherstone", "amount": 4, "icon": "Icon_Talent_Rankup_Light_2.png"}],
      },
      {
        level: 6,
        gold: 24000,
        materials: [{"name": "Holy Aetherstone", "amount": 6, "icon": "Icon_Talent_Rankup_Light_2.png"}],
      },
      {
        level: 7,
        gold: 36000,
        materials: [{"name": "Holy Aether Lany.", "amount": 2, "icon": "Icon_Talent_Rankup_Light_3.png"}],
      },
      {
        level: 8,
        gold: 64000,
        materials: [{"name": "Holy Aether Lany.", "amount": 4, "icon": "Icon_Talent_Rankup_Light_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}],
      },
      {
        level: 9,
        gold: 128000,
        materials: [{"name": "Holy Aether Lany.", "amount": 6, "icon": "Icon_Talent_Rankup_Light_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 240000,
        materials: [{"name": "Holy Aether Lany.", "amount": 11, "icon": "Icon_Talent_Rankup_Light_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },

  // Skills
  skills: {
    normal:     {
      name: "Charged Bombardment",
      cooldown: "2.0s",
      description: "Deals 120% Attack as holy damage to the targeted enemy unit",
      template: "Deals {0} Attack as holy damage to the targeted enemy unit",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Emergency Healing",
      cooldown: "5.0s",
      description: "Heals the allied unit with the lowest HP percentage, restoring 69% Attack + 140 HP",
      template: "Heals the allied unit with the lowest HP percentage, restoring {0} Attack + {1} HP",
      levelValues: [["49.5%", "140"], ["51%", "140"], ["52.5%", "140"], ["54%", "140"], ["55.5%", "140"], ["57%", "140"], ["58.5%", "140"], ["60%", "140"], ["61.5%", "140"], ["63%", "280"], ["64.5%", "140"], ["66%", "140"], ["67.5%", "140"], ["69%", "140"]],
    },
    ultimate:     {
      name: "Elder Sister's Care",
      energyCost: "3",
      cooldown: "1.0s",
      description: "Heals the allied unit with the lowest HP percentage, restoring 128% Attack + 279 HP",
      template: "Heals the allied unit with the lowest HP percentage, restoring {0} Attack + {1} HP",
      levelValues: [["102%", "279"], ["104%", "279"], ["106%", "279"], ["108%", "279"], ["110%", "279"], ["112%", "279"], ["114%", "279"], ["116%", "279"], ["118%", "279"], ["120%", "558"], ["122%", "279"], ["124%", "279"], ["126%", "279"], ["128%", "279"]],
    },
    passive:     {
      name: "Jack-of-All-Trades Power",
      description: "When healing an allied unit below 50% HP, healing increases by 24%",
      template: "When healing an allied unit below 50% HP, healing increases by {0}",
      levelValues: [["11%"], ["12%"], ["13%"], ["14%"], ["15%"], ["16%"], ["17%"], ["18%"], ["19%"], ["20%"], ["21%"], ["22%"], ["23%"], ["24%"]],
    },
  },

  // Team Skill
  teamSkill: {
    name: "Combo Skill",
    description: "Self Attack increases by 10%, Healing increases by 12.5%",
    requirements: {
      faction: "Safir",
      element: "Holy",
      alternativeConditions: "Team contains 2 Safir characters or 2 Holy characters",
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect: "After an ULT heals an ally, the target's damage taken decreases by 5% for 5 seconds",
    },
    {
      level: 2,
      effect: "When HP falls below 20% after taking damage, instantly recover 50% of Attack as HP And triggers once per battle",
    },
    {
      level: 3,
      effect: "[Skill] and [Normal Attack] level and level cap +4",
    },
    {
      level: 4,
      effect: "Healing increases by 20%",
    },
    {
      level: 5,
      effect: "[ULT] and [Passive] level and level cap +4",
    },
    {
      level: 6,
      effect: "Skill healing on allies also triggers Awakening 1's effect And Awakening 1's effect increases by 100%",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "Realm of Solitude",
    image: "kelacard",
    stats: {
      hp: "5,000",
      attack: "500",
      defense: "500",
    },
    effects: [  // awakening levels 1-5
      "Healing increases by 14%, when healing a target with less than 50% max HP, their damage taken decreases by 4% for 10 seconds",
      "Healing increases by 18%, when healing a target with less than 50% max HP, their damage taken decreases by 5% for 10 seconds",
      "Healing increases by 22%, when healing a target with less than 50% max HP, their damage taken decreases by 6% for 10 seconds",
      "Healing increases by 26%, when healing a target with less than 50% max HP, their damage taken decreases by 7% for 10 seconds",
      "Healing increases by 30%, when healing a target with less than 50% max HP, their damage taken decreases by 8% for 10 seconds",
    ],
    restriction: "Only effective for Healer",
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Range', 'Healing', 'Reduce Damage'],
};

// SEO data for Kela
export const kelaSEO = {
  title: `${kelaData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${kelaData.name}, a ${kelaData.rarity} ${kelaData.element} ${kelaData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default kelaData;
