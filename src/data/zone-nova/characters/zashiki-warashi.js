// Zashiki-warashi Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js
// Instructions: Copy this file to the same directory as your character's .astro file

export const zashikiWarashiData = {
  // Basic Character Information
  name: 'Zashiki-warashi',
  image: 'Zashiki-warashi.png',
  rarity: 'SR', // SSR, SR, R
  element: 'Fire', // Fire, Ice, Wind, Holy, Chaos
  class: 'Supporter', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
  role: 'Supporter', // Tank, DPS, Supporter, Disruptor, Healer - Functional description
  faction: 'Heikyo Castle', // Savir, etc.

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
    hp: '7,970',
    attack: '837',
    defense: '560',
  },
  talentTree: {
    totals: ["ATK +67.4%", "HP +59.4%", "DEF +12%"],
    enhancementNodes: [
      {
        name: "Enhancement I",
        rank: 2,
        bonus: "ATK +10%, HP +10%",
        materials: [{"name": "High-Precision Chip", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_2.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}],
        gold: 4000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "ATK +15%, HP +15%",
        materials: [{"name": "High-Precision Chip", "amount": 2, "icon": "Icon_Talent_Rankup_Rare_2.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 16000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "ATK +20%, HP +20%",
        materials: [{"name": "High-Precision Chip", "amount": 8, "icon": "Icon_Talent_Rankup_Rare_2.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 128000,
      },
    ],
    statNodes: [
      {
        node: "N1",
        stat: "HP +3.2%",
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
        stat: "DEF +4.8%",
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
        stat: "DEF +7.2%",
        unlock: "After N2",
        materials: [{"name": "High-Precision Chip", "amount": 8, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 128000,
      },
      {
        node: "N7",
        stat: "HP +4.8%",
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
        stat: "HP +6.4%",
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
        materials: [{"name": "Blaze Aether Lany.", "amount": 4, "icon": "Icon_Talent_Rankup_Fire_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}],
      },
      {
        level: 9,
        gold: 128000,
        materials: [{"name": "Blaze Aether Lany.", "amount": 6, "icon": "Icon_Talent_Rankup_Fire_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 240000,
        materials: [{"name": "Blaze Aether Lany.", "amount": 11, "icon": "Icon_Talent_Rankup_Fire_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },

  // Skills
  skills: {
    normal:     {
      name: "Butler's Guidance",
      cooldown: "2.0s",
      description: "Deals 120% Attack as fire damage to the targeted enemy unit",
      template: "Deals {0} Attack as fire damage to the targeted enemy unit",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Abundant Harvest",
      cooldown: "5.0s",
      description: "All allied units gain 36% Attack, up to 36% of Zashiki Warashi's initial Attack, 1 stack max, for 15 seconds",
      template: "All allied units gain {0} Attack, up to {1} of Zashiki Warashi's initial Attack, 1 stack max, for 15 seconds",
      levelValues: [["16.5%", "16.5%"], ["18%", "18%"], ["19.5%", "19.5%"], ["21%", "21%"], ["22.5%", "22.5%"], ["24%", "24%"], ["25.5%", "25.5%"], ["27%", "27%"], ["28.5%", "28.5%"], ["30%", "30%"], ["31.5%", "31.5%"], ["33%", "33%"], ["34.5%", "34.5%"], ["36%", "36%"]],
    },
    ultimate:     {
      name: "Share Blessings, Share Burdens!",
      energyCost: "3",
      cooldown: "1.0s",
      description: "All allied units' damage dealt increases by 36% for 15 seconds",
      template: "All allied units' damage dealt increases by {0} for 15 seconds",
      levelValues: [["16.5%"], ["18%"], ["19.5%"], ["21%"], ["22.5%"], ["24%"], ["25.5%"], ["27%"], ["28.5%"], ["30%"], ["31.5%"], ["33%"], ["34.5%"], ["36%"]],
    },
    passive:     {
      name: "Child's Blessing",
      description: "After casting a skill, the allied unit with the highest Attack gains 1 stack of [Blessing], increasing Attack by 60% for 15 seconds",
      template: "After casting a skill, the allied unit with the highest Attack gains 1 stack of [Blessing], increasing Attack by {0} for 15 seconds",
      levelValues: [["27.5%"], ["30%"], ["32.5%"], ["35%"], ["37.5%"], ["40%"], ["42.5%"], ["45%"], ["47.5%"], ["50%"], ["52.5%"], ["55%"], ["57.5%"], ["60%"]],
    },
  },

  // Team Skill
  teamSkill: {
    name: "Combo Skill",
    description: "Team Attack increases by 10%, Defense increases by 10%",
    requirements: {
      faction: "Heikyo Castle",
      element: "Fire",
      alternativeConditions: "Team contains 2 Heikyo Castle characters or 2 Fire characters",
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect: "After entering battle, all allies' Attack increases by 15% for 30 seconds",
    },
    {
      level: 2,
      effect: "When using an ULT, characters with [Blessing] gain an additional 15% damage increase",
    },
    {
      level: 3,
      effect: "[Skill] and [Normal Attack] level and level cap +4",
    },
    {
      level: 4,
      effect: "After using a skill, all allies' critical rate increases by 10% for 5 seconds",
    },
    {
      level: 5,
      effect: "[ULT] and [Passive] level and level cap +4",
    },
    {
      level: 6,
      effect: "When using an ULT, characters with [Blessing] gain double ULT effects",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "Sleep Treasure",
    image: "Zashiki-warashicard",
    stats: {
      hp: "5,000",
      attack: "500",
      defense: "500",
    },
    effects: [  // awakening levels 1-5
      "After casting an ULT, team damage increases by 12% for 10 seconds; additionally, 50% chance to increase team Critical Damage by an extra 10% for 10 seconds",
      "After casting an ULT, team damage increases by 15% for 10 seconds; additionally, 50% chance to increase team Critical Damage by an extra 12.5% for 10 seconds",
      "After casting an ULT, team damage increases by 18% for 10 seconds; additionally, 50% chance to increase team Critical Damage by an extra 15% for 10 seconds",
      "After casting an ULT, team damage increases by 21% for 10 seconds; additionally, 50% chance to increase team Critical Damage by an extra 17.5% for 10 seconds",
      "After casting an ULT, team damage increases by 24% for 10 seconds; additionally, 50% chance to increase team Critical Damage by an extra 20% for 10 seconds",
    ],
    restriction: "Only effective for Supporter",
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Range', 'Buff', 'Atk Increase', 'Damage Increase', 'Crit Rate Increase'],
};

// SEO data for Zashiki-warashi
export const zashikiWarashiSEO = {
  title: `${zashikiWarashiData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${zashikiWarashiData.name}, a ${zashikiWarashiData.rarity} ${zashikiWarashiData.element} ${zashikiWarashiData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default zashikiWarashiData;

/*
USAGE INSTRUCTIONS:

1. This file has been created for Zashiki-warashi character
2. All placeholder values have been replaced with actual character data from zashiki-warashi.astro
3. The export names are: zashikiWarashiData, zashikiWarashiSEO

4. In your .astro file, import like this:
   import { zashikiWarashiData, zashikiWarashiSEO } from './zashiki-warashi.js';

5. Use the data:
   const characterData = zashikiWarashiData;
   const title = zashikiWarashiSEO.title;
   const description = zashikiWarashiSEO.description;

Based on the successful implementation in penny.js and penny.astro
*/
