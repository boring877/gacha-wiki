// Chiya Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js
// Instructions: Copy this file to the same directory as your character's .astro file

export const chiyaData = {
  // Basic Character Information
  name: 'Chiya',
  image: 'Chiya.png', // Use format: charactername (e.g., 'penny')
  rarity: 'SSR', // SSR, SR, R
  element: 'Ice', // Fire, Ice, Wind, Holy, Chaos
  class: 'Attacker', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
  role: 'DPS', // Tank, DPS, Supporter, Disruptor, Healer - Functional description
  faction: 'Safir', // Savir, etc.

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
        materials: [{"name": "High-Precision Chip", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_2.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}],
        gold: 5000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "ATK +15%, HP +15%",
        materials: [{"name": "High-Precision Chip", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_2.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 20000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "ATK +20%, HP +20%",
        materials: [{"name": "High-Precision Chip", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_2.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 160000,
      },
    ],
    statNodes: [
      {
        node: "N1",
        stat: "HP +3.2%",
        unlock: "After E1",
        materials: [{"name": "High-Precision Chip", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
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
        materials: [{"name": "High-Precision Chip", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 10000,
      },
      {
        node: "N4",
        stat: "DEF +4.8%",
        unlock: "After N1",
        materials: [{"name": "High-Precision Chip", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 10000,
      },
      {
        node: "N5",
        stat: "ATK +4.8%",
        unlock: "After N2",
        materials: [{"name": "High-Precision Chip", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 20000,
      },
      {
        node: "N6",
        stat: "DEF +7.2%",
        unlock: "After N2",
        materials: [{"name": "High-Precision Chip", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 160000,
      },
      {
        node: "N7",
        stat: "HP +4.8%",
        unlock: "After E2",
        materials: [{"name": "High-Precision Chip", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 45000,
      },
      {
        node: "N8",
        stat: "ATK +4.8%",
        unlock: "After E2",
        materials: [{"name": "High-Precision Chip", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 45000,
      },
      {
        node: "N9",
        stat: "ATK +6.4%",
        unlock: "Lv 80",
        materials: [{"name": "High-Precision Chip", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 160000,
      },
      {
        node: "N10",
        stat: "HP +6.4%",
        unlock: "Lv 75",
        materials: [{"name": "High-Precision Chip", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
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
        materials: [{"name": "Frost Aether Lany.", "amount": 5, "icon": "Icon_Talent_Rankup_Ice_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}],
      },
      {
        level: 9,
        gold: 160000,
        materials: [{"name": "Frost Aether Lany.", "amount": 8, "icon": "Icon_Talent_Rankup_Ice_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 300000,
        materials: [{"name": "Frost Aether Lany.", "amount": 14, "icon": "Icon_Talent_Rankup_Ice_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },

  // Skills
  skills: {
    normal:     {
      name: "Heavy Hammer Strike",
      cooldown: "2.0s",
      description: "Deals 120% Attack as ice damage to the targeted enemy unit",
      template: "Deals {0} Attack as ice damage to the targeted enemy unit",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Cold Steel Combo",
      cooldown: "5.0s",
      description: "Deals 480% Attack as ice damage to the targeted enemy unit",
      template: "Deals {0} Attack as ice damage to the targeted enemy unit",
      levelValues: [["220%"], ["240%"], ["260%"], ["280%"], ["300%"], ["320%"], ["340%"], ["360%"], ["380%"], ["400%"], ["420%"], ["440%"], ["460%"], ["480%"]],
    },
    ultimate:     {
      name: "Fist of Godslaying",
      energyCost: "3",
      cooldown: "1.0s",
      description: "Dashes to the target, dealing 600% Attack as ice damage\n[Enhanced ULT]: Gains 100% Critical Rate, dashes to the target, dealing 840% Attack as ice damage",
      template: "Dashes to the target, dealing {0} Attack as ice damage\n[Enhanced ULT]: Gains {2} Critical Rate, dashes to the target, dealing {1} Attack as ice damage",
      levelValues: [["275%", "385%", "100%"], ["300%", "420%", "100%"], ["325%", "455%", "100%"], ["350%", "490%", "100%"], ["375%", "525%", "100%"], ["400%", "560%", "100%"], ["425%", "595%", "100%"], ["450%", "630%", "100%"], ["475%", "665%", "100%"], ["500%", "700%", "100%"], ["525%", "735%", "100%"], ["550%", "770%", "100%"], ["575%", "805%", "100%"], ["600%", "840%", "100%"]],
    },
    passive:     {
      name: "Light Art Support Frame",
      description: "After killing an enemy, enters [Focus] state for 10 seconds, all attacks deal an additional 36% Attack as ice damage And gains one [Enhanced ULT]",
      template: "After killing an enemy, enters [Focus] state for 10 seconds, all attacks deal an additional {0} Attack as ice damage And gains one [Enhanced ULT]",
      levelValues: [["16.5%"], ["18%"], ["19.5%"], ["21%"], ["22.5%"], ["24%"], ["25.5%"], ["27%"], ["28.5%"], ["30%"], ["31.5%"], ["33%"], ["34.5%"], ["36%"]],
    },
  },

  // Team Skill
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
      effect: "Start with one [Enhanced ULT]",
    },
    {
      level: 2,
      effect: "In [Focus] state, attack speed increases by 50%",
    },
    {
      level: 3,
      effect: "[Skill] and [Normal Attack] level and level cap +4",
    },
    {
      level: 4,
      effect: "<color=#1ec1ff>Frost</color> damage increases by 30%",
    },
    {
      level: 5,
      effect: "[ULT] and [Passive] level and level cap +4",
    },
    {
      level: 6,
      effect: "After using a normal ULT, gain one [Enhanced ULT] And ULT damage increases by 30%",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "Lonely Dark Midnight",
    image: "LonelyDarkDeepNight.png",
    stats: {
      hp: "5,040",
      attack: "780",
      defense: "474",
    },
    effects: [  // awakening levels 1-5
      "Critical Damage increases by 36%, after the wearer kills an enemy, Attack increases by 6% for the battle, stacks up to 4 times",
      "Critical Damage increases by 42%, after the wearer kills an enemy, Attack increases by 7% for the battle, stacks up to 4 times",
      "Critical Damage increases by 48%, after the wearer kills an enemy, Attack increases by 8% for the battle, stacks up to 4 times",
      "Critical Damage increases by 54%, after the wearer kills an enemy, Attack increases by 9% for the battle, stacks up to 4 times",
      "Critical Damage increases by 60%, after the wearer kills an enemy, Attack increases by 10% for the battle, stacks up to 4 times",
    ],
    restriction: "Only effective for Attacker",
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Melee', 'Crit Rate', 'Crit Dmg', 'Enhanced Ultimate', 'Attack Speed'],
};

// SEO data for Chiya
export const chiyaSEO = {
  title: `${chiyaData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${chiyaData.name}, a ${chiyaData.rarity} ${chiyaData.element} ${chiyaData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default chiyaData;
