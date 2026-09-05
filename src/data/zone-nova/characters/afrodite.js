// Afrodite Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js
// Instructions: Copy this file to the same directory as your character's .astro file

export const afroditeData = {
  // Basic Character Information
  name: 'Afrodite',
  image: 'Afrodite.png', // Use explicit PNG filename
  rarity: 'SSR', // SSR, SR, R
  element: 'Holy', // Fire, Ice, Wind, Holy, Chaos
  class: 'Warrior', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
  role: 'DPS', // Tank, DPS, Supporter, Disruptor, Healer - Functional description
  faction: 'Otis', // Savir, etc.

  // Base Stats (Level 80)
  stats: {
    hp: "5,040",
    attack: "780",
    defense: "474",
    energyRecovery: '0.25/s',
    critRate: '0%',
    critDmg: '50%',
    maxCritRate: '0%',
    maxCritDmg: '50%',
  },
  maxStats: {
    hp: '8,033',
    attack: '1,305',
    defense: '530',
  },
  talentTree: {
    totals: ["ATK +67.4%", "HP +59.4%", "DEF +12%"],
    enhancementNodes: [
      {
        name: "Enhancement I",
        rank: 2,
        bonus: "ATK +10%, HP +10%",
        materials: [{"name": "Scarab Stone", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_4.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}],
        gold: 5000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "ATK +15%, HP +15%",
        materials: [{"name": "Scarab Stone", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_4.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 20000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "ATK +20%, HP +20%",
        materials: [{"name": "Scarab Stone", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_4.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 160000,
      },
    ],
    statNodes: [
      {
        node: "N1",
        stat: "HP +3.2%",
        unlock: "After E1",
        materials: [{"name": "Scarab Stone", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
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
        materials: [{"name": "Scarab Stone", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 10000,
      },
      {
        node: "N4",
        stat: "DEF +4.8%",
        unlock: "After N1",
        materials: [{"name": "Scarab Stone", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 10000,
      },
      {
        node: "N5",
        stat: "ATK +4.8%",
        unlock: "After N2",
        materials: [{"name": "Scarab Stone", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 20000,
      },
      {
        node: "N6",
        stat: "DEF +7.2%",
        unlock: "After N2",
        materials: [{"name": "Scarab Stone", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 160000,
      },
      {
        node: "N7",
        stat: "HP +4.8%",
        unlock: "After E2",
        materials: [{"name": "Scarab Stone", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 45000,
      },
      {
        node: "N8",
        stat: "ATK +4.8%",
        unlock: "After E2",
        materials: [{"name": "Scarab Stone", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 45000,
      },
      {
        node: "N9",
        stat: "ATK +6.4%",
        unlock: "Lv 80",
        materials: [{"name": "Scarab Stone", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 160000,
      },
      {
        node: "N10",
        stat: "HP +6.4%",
        unlock: "Lv 75",
        materials: [{"name": "Scarab Stone", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
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
        materials: [{"name": "Holy Aether", "amount": 3, "icon": "Icon_Talent_Rankup_Light_1.png"}],
      },
      {
        level: 4,
        gold: 10000,
        materials: [{"name": "Holy Aetherstone", "amount": 3, "icon": "Icon_Talent_Rankup_Light_2.png"}],
      },
      {
        level: 5,
        gold: 20000,
        materials: [{"name": "Holy Aetherstone", "amount": 5, "icon": "Icon_Talent_Rankup_Light_2.png"}],
      },
      {
        level: 6,
        gold: 30000,
        materials: [{"name": "Holy Aetherstone", "amount": 7, "icon": "Icon_Talent_Rankup_Light_2.png"}],
      },
      {
        level: 7,
        gold: 45000,
        materials: [{"name": "Holy Aether Lany.", "amount": 3, "icon": "Icon_Talent_Rankup_Light_3.png"}],
      },
      {
        level: 8,
        gold: 80000,
        materials: [{"name": "Holy Aether Lany.", "amount": 5, "icon": "Icon_Talent_Rankup_Light_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}],
      },
      {
        level: 9,
        gold: 160000,
        materials: [{"name": "Holy Aether Lany.", "amount": 8, "icon": "Icon_Talent_Rankup_Light_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 300000,
        materials: [{"name": "Holy Aether Lany.", "amount": 14, "icon": "Icon_Talent_Rankup_Light_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },

  // Skills
  skills: {
    normal:     {
      name: "Fist of the Love Deity",
      cooldown: "2.0s",
      description: "Deals 120% Attack as holy damage to the targeted enemy unit",
      template: "Deals {0} Attack as holy damage to the targeted enemy unit",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Enchanting Rush Punch",
      cooldown: "8.0s",
      description: "Deals 816% Attack as holy damage to the targeted enemy unit And increases self Attack Speed by 58%",
      template: "Deals {0} Attack as holy damage to the targeted enemy unit And increases self Attack Speed by {1}",
      levelValues: [["374%", "32%"], ["408%", "34%"], ["442%", "36%"], ["476%", "38%"], ["510%", "40%"], ["544%", "42%"], ["578%", "44%"], ["612%", "46%"], ["646%", "48%"], ["680%", "50%"], ["714%", "52%"], ["748%", "54%"], ["782%", "56%"], ["816%", "58%"]],
    },
    ultimate:     {
      name: "Waltz of Love and Beauty",
      energyCost: "8",
      cooldown: "1.0s",
      description: "Deals 1800% Attack as holy damage to the targeted enemy unit\nEvery 10 Normal Attacks enables one [Enhanced ULT]\n[Enhanced ULT]: Deals 2160% Attack as holy damage to the targeted enemy unit, with the final hit restoring 2 energy\nDamage is considered Normal Attack damage",
      template: "Deals {0} Attack as holy damage to the targeted enemy unit\nEvery 10 Normal Attacks enables one [Enhanced ULT]\n[Enhanced ULT]: Deals {1} Attack as holy damage to the targeted enemy unit, with the final hit restoring 2 energy\nDamage is considered Normal Attack damage",
      levelValues: [["825%", "990%"], ["900%", "1080%"], ["975%", "1170%"], ["1050%", "1260%"], ["1125%", "1350%"], ["1200%", "1440%"], ["1275%", "1530%"], ["1350%", "1620%"], ["1425%", "1710%"], ["1500%", "1800%"], ["1575%", "1890%"], ["1650%", "1980%"], ["1725%", "2070%"], ["1800%", "2160%"]],
    },
    passive:     {
      name: "Beautiful Killing Intent",
      description: "When HP is above 50%, Critical Rate increases by 48% when dealing damage\nWhen HP is below 50%, Defense increases by 96% when taking damage",
      template: "When HP is above 50%, Critical Rate increases by {0} when dealing damage\nWhen HP is below 50%, Defense increases by {1} when taking damage",
      levelValues: [["22%", "44%"], ["24%", "48%"], ["26%", "52%"], ["28%", "56%"], ["30%", "60%"], ["32%", "64%"], ["34%", "68%"], ["36%", "72%"], ["38%", "76%"], ["40%", "80%"], ["42%", "84%"], ["44%", "88%"], ["46%", "92%"], ["48%", "96%"]],
    },
  },

  // Team Skill
  teamSkill: {
    name: "Combo Skill",
    description: "Self Attack increases by 10%\nAt battle start, every 500 Attack increases self holy damage by 5%, up to 6 times",
    requirements: {
      faction: "Otis",
      element: "Holy",
      alternativeConditions: "Team contains 2 Otis characters or 2 Holy characters",
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect: "Casting a skill accumulates 4 times the normal attack count needed for an [Enhanced ULT]",
    },
    {
      level: 2,
      effect: "When casting an ULT or skill, damage taken decreases by 10%",
    },
    {
      level: 3,
      effect: "[Skill] and [Normal Attack] level and level cap +4",
    },
    {
      level: 4,
      effect: "Normal attack damage increases by 35%",
    },
    {
      level: 5,
      effect: "[ULT] and [Passive] level and level cap +4",
    },
    {
      level: 6,
      effect: "[Enhanced ULT] ignores 20% of the target's elemental resistance",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "Secret Garden",
    image: "Afroditecard",
    stats: {
      hp: "5,040",
      attack: "780",
      defense: "474",
    },
    effects: [  // awakening levels 1-5
      "Attack increases by 24%, when the wearer's ULT consumes 8 or more energy, damage increases by 24% for 10 seconds",
      "Attack increases by 28%, when the wearer's ULT consumes 8 or more energy, damage increases by 28% for 10 seconds",
      "Attack increases by 32%, when the wearer's ULT consumes 8 or more energy, damage increases by 32% for 10 seconds",
      "Attack increases by 36%, when the wearer's ULT consumes 8 or more energy, damage increases by 36% for 10 seconds",
      "Attack increases by 40%, when the wearer's ULT consumes 8 or more energy, damage increases by 40% for 10 seconds",
    ],
    restriction: "Only effective for Warrior",
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Crit Rate', 'Atk Speed', 'Normal Atk', 'Melee'],
};

// SEO data for Afrodite
export const afroditeSEO = {
  title: `${afroditeData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${afroditeData.name}, a ${afroditeData.rarity} ${afroditeData.element} ${afroditeData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default afroditeData;
