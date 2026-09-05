// Shanna Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js
// Instructions: Copy this file to the same directory as your character's .astro file

export const shannaData = {
  // Basic Character Information
  name: 'Shanna',
  image: 'Shanna.png',
  rarity: 'SR', // SSR, SR, R
  element: 'Fire', // Fire, Ice, Wind, Holy, Chaos
  class: 'Attacker', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
  role: 'DPS', // Tank, DPS, Supporter, Disruptor, Healer - Functional description
  faction: 'Safir', // Savir, etc.

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
        materials: [{"name": "Energy Vial", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_1.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}],
        gold: 4000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "ATK +15%, HP +15%",
        materials: [{"name": "Energy Vial", "amount": 2, "icon": "Icon_Talent_Rankup_Rare_1.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 16000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "ATK +20%, HP +20%",
        materials: [{"name": "Energy Vial", "amount": 8, "icon": "Icon_Talent_Rankup_Rare_1.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 128000,
      },
    ],
    statNodes: [
      {
        node: "N1",
        stat: "HP +3.2%",
        unlock: "After E1",
        materials: [{"name": "Energy Vial", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
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
        materials: [{"name": "Energy Vial", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 8000,
      },
      {
        node: "N4",
        stat: "DEF +4.8%",
        unlock: "After N1",
        materials: [{"name": "Energy Vial", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 8000,
      },
      {
        node: "N5",
        stat: "ATK +4.8%",
        unlock: "After N2",
        materials: [{"name": "Energy Vial", "amount": 2, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 16000,
      },
      {
        node: "N6",
        stat: "DEF +7.2%",
        unlock: "After N2",
        materials: [{"name": "Energy Vial", "amount": 8, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 128000,
      },
      {
        node: "N7",
        stat: "HP +4.8%",
        unlock: "After E2",
        materials: [{"name": "Energy Vial", "amount": 4, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 36000,
      },
      {
        node: "N8",
        stat: "ATK +4.8%",
        unlock: "After E2",
        materials: [{"name": "Energy Vial", "amount": 4, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 36000,
      },
      {
        node: "N9",
        stat: "ATK +6.4%",
        unlock: "Lv 80",
        materials: [{"name": "Energy Vial", "amount": 8, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 128000,
      },
      {
        node: "N10",
        stat: "HP +6.4%",
        unlock: "Lv 75",
        materials: [{"name": "Energy Vial", "amount": 8, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
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
        materials: [{"name": "Blaze Aether", "amount": 2, "icon": "Icon_Talent_Rankup_Fire_1.png"}],
      },
      {
        level: 4,
        gold: 8000,
        materials: [{"name": "Blaze Aetherstone", "amount": 2, "icon": "Icon_Talent_Rankup_Fire_2.png"}],
      },
      {
        level: 5,
        gold: 16000,
        materials: [{"name": "Blaze Aetherstone", "amount": 4, "icon": "Icon_Talent_Rankup_Fire_2.png"}],
      },
      {
        level: 6,
        gold: 24000,
        materials: [{"name": "Blaze Aetherstone", "amount": 6, "icon": "Icon_Talent_Rankup_Fire_2.png"}],
      },
      {
        level: 7,
        gold: 36000,
        materials: [{"name": "Blaze Aether Lany.", "amount": 2, "icon": "Icon_Talent_Rankup_Fire_3.png"}],
      },
      {
        level: 8,
        gold: 64000,
        materials: [{"name": "Blaze Aether Lany.", "amount": 4, "icon": "Icon_Talent_Rankup_Fire_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}],
      },
      {
        level: 9,
        gold: 128000,
        materials: [{"name": "Blaze Aether Lany.", "amount": 6, "icon": "Icon_Talent_Rankup_Fire_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 240000,
        materials: [{"name": "Blaze Aether Lany.", "amount": 11, "icon": "Icon_Talent_Rankup_Fire_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },

  // Skills
  skills: {
    normal:     {
      name: "Light Art Strike",
      cooldown: "2.0s",
      description: "Deals 120% Attack as fire damage to the targeted enemy unit",
      template: "Deals {0} Attack as fire damage to the targeted enemy unit",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Great! Greater! Greatest! Sword!",
      cooldown: "5.0s",
      description: "Deals 240% Attack as fire damage to the targeted enemy unit",
      template: "Deals {0} Attack as fire damage to the targeted enemy unit",
      levelValues: [["110%"], ["120%"], ["130%"], ["140%"], ["150%"], ["160%"], ["170%"], ["180%"], ["190%"], ["200%"], ["210%"], ["220%"], ["230%"], ["240%"]],
    },
    ultimate:     {
      name: "Invincible Blade",
      energyCost: "3",
      cooldown: "1.0s",
      description: "Dashes to the targeted enemy unit And deals 480% Attack as fire damage",
      template: "Dashes to the targeted enemy unit And deals {0} Attack as fire damage",
      levelValues: [["220%"], ["240%"], ["260%"], ["280%"], ["300%"], ["320%"], ["340%"], ["360%"], ["380%"], ["400%"], ["420%"], ["440%"], ["460%"], ["480%"]],
    },
    passive:     {
      name: "Heroes Never Retreat!",
      description: "When a Normal Attack hits the same target, adds 1 stack of [Focus], each stack increasing Critical Rate by 3.7%, up to 10 stacks",
      template: "When a Normal Attack hits the same target, adds 1 stack of [Focus], each stack increasing Critical Rate by {0}, up to 10 stacks",
      levelValues: [["1.5%"], ["1.7%"], ["1.8%"], ["2%"], ["2.2%"], ["2.3%"], ["2.5%"], ["2.7%"], ["2.8%"], ["3%"], ["3.2%"], ["3.3%"], ["3.5%"], ["3.7%"]],
    },
  },

  // Team Skill
  teamSkill: {
    name: "Combo Skill",
    description: "Self damage dealt increases by 20%",
    requirements: {
      faction: "Safir",
      element: "Fire",
      alternativeConditions: "Team contains 2 Safir characters or 2 Fire characters",
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect: "When [Focus] reaches 10 stacks, normal attacks deal an additional 20% Attack as <color=#c90d0d>Blaze</color> damage",
    },
    {
      level: 2,
      effect: "Each normal attack on the same target adds one stack of [Focus]",
    },
    {
      level: 3,
      effect: "[Skill] and [Normal Attack] level and level cap +4",
    },
    {
      level: 4,
      effect: "Skill damage increases by 30%",
    },
    {
      level: 5,
      effect: "[ULT] and [Passive] level and level cap +4",
    },
    {
      level: 6,
      effect: "When [Focus] reaches 10 stacks, normal attack critical damage increases by 50%",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "Hero Never Resting",
    image: "Shannacard",
    stats: {
      hp: "4,200",
      attack: "650",
      defense: "395",
    },
    effects: [  // awakening levels 1-5
      "When there are fewer than 2 enemies on the field, Critical Damage increases by 36%",
      "When there are fewer than 2 enemies on the field, Critical Damage increases by 45%",
      "When there are fewer than 2 enemies on the field, Critical Damage increases by 54%",
      "When there are fewer than 2 enemies on the field, Critical Damage increases by 63%",
      "When there are fewer than 2 enemies on the field, Critical Damage increases by 72%",
    ],
    restriction: "Only effective for Attacker",
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Melee', 'Normal Attack', 'Crit Rate', 'Crit Dmg', 'Buff'],
};

// SEO data for Shanna
export const shannaSEO = {
  title: `${shannaData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${shannaData.name}, a ${shannaData.rarity} ${shannaData.element} ${shannaData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default shannaData;

/*
USAGE INSTRUCTIONS:

1. This file has been created for Shanna character
2. All placeholder values have been replaced with actual character data from shanna.astro
3. The export names are: shannaData, shannaSEO

4. In your .astro file, import like this:
   import { shannaData, shannaSEO } from './shanna.js';

5. Use the data:
   const characterData = shannaData;
   const title = shannaSEO.title;
   const description = shannaSEO.description;

Based on the successful implementation in penny.js and penny.astro
*/
