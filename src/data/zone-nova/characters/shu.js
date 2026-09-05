// Shu Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js
// Instructions: Copy this file to the same directory as your character's .astro file

export const shuData = {
  // Basic Character Information
  name: 'Shu',
  image: 'Shu.png', // Use format: charactername (e.g., 'shu')
  rarity: 'SR', // SSR, SR, R
  element: 'Wind', // Fire, Ice, Wind, Holy, Chaos
  class: 'Disruptor', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
  role: 'Disruptor', // Tank, DPS, Supporter, Disruptor, Healer - Functional description
  faction: 'Kemich', // Savir, etc.

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
        materials: [{"name": "Scarab Stone", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_4.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}],
        gold: 4000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "ATK +15%, HP +15%",
        materials: [{"name": "Scarab Stone", "amount": 2, "icon": "Icon_Talent_Rankup_Rare_4.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 16000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "ATK +20%, HP +20%",
        materials: [{"name": "Scarab Stone", "amount": 8, "icon": "Icon_Talent_Rankup_Rare_4.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 128000,
      },
    ],
    statNodes: [
      {
        node: "N1",
        stat: "HP +3.2%",
        unlock: "After E1",
        materials: [{"name": "Scarab Stone", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
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
        materials: [{"name": "Scarab Stone", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 8000,
      },
      {
        node: "N4",
        stat: "DEF +4.8%",
        unlock: "After N1",
        materials: [{"name": "Scarab Stone", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 8000,
      },
      {
        node: "N5",
        stat: "ATK +4.8%",
        unlock: "After N2",
        materials: [{"name": "Scarab Stone", "amount": 2, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 16000,
      },
      {
        node: "N6",
        stat: "DEF +7.2%",
        unlock: "After N2",
        materials: [{"name": "Scarab Stone", "amount": 8, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 128000,
      },
      {
        node: "N7",
        stat: "HP +4.8%",
        unlock: "After E2",
        materials: [{"name": "Scarab Stone", "amount": 4, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 36000,
      },
      {
        node: "N8",
        stat: "ATK +4.8%",
        unlock: "After E2",
        materials: [{"name": "Scarab Stone", "amount": 4, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 36000,
      },
      {
        node: "N9",
        stat: "ATK +6.4%",
        unlock: "Lv 80",
        materials: [{"name": "Scarab Stone", "amount": 8, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 128000,
      },
      {
        node: "N10",
        stat: "HP +6.4%",
        unlock: "Lv 75",
        materials: [{"name": "Scarab Stone", "amount": 8, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
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
      name: "Gale Assault",
      cooldown: "2.0s",
      description: "Deals 120% Attack as wind damage to the targeted enemy unit",
      template: "Deals {0} Attack as wind damage to the targeted enemy unit",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Eye of the Storm",
      cooldown: "5.0s",
      description: "Deals 72% Attack as wind damage to the targeted enemy unit and enemies within a 4-meter radius",
      template: "Deals {0} Attack as wind damage to the targeted enemy unit and enemies within a 4-meter radius",
      levelValues: [["33%"], ["36%"], ["39%"], ["42%"], ["45%"], ["48%"], ["51%"], ["54%"], ["57%"], ["60%"], ["63%"], ["66%"], ["69%"], ["72%"]],
    },
    ultimate:     {
      name: "Depleting Tempest",
      energyCost: "3",
      cooldown: "1.0s",
      description: "Deals 120% Attack as wind damage to the targeted enemy unit and enemies within a 4-meter radius And applies [Vulnerability], increasing damage taken by 34% for 15 seconds",
      template: "Deals {0} Attack as wind damage to the targeted enemy unit and enemies within a 4-meter radius And applies [Vulnerability], increasing damage taken by {1} for 15 seconds",
      levelValues: [["55%", "14.5%"], ["60%", "16%"], ["65%", "17.5%"], ["70%", "19%"], ["75%", "20.5%"], ["80%", "22%"], ["85%", "23.5%"], ["90%", "25%"], ["95%", "26.5%"], ["100%", "28%"], ["105%", "29.5%"], ["110%", "31%"], ["115%", "32.5%"], ["120%", "34%"]],
    },
    passive:     {
      name: "Fierce Wind Burst",
      description: "Skill can apply [Wind Erosion]\n[Wind Erosion]: Deals 14.4% Attack as wind damage every 2 seconds, up to 5 stacks",
      template: "Skill can apply [Wind Erosion]\n[Wind Erosion]: Deals {0} Attack as wind damage every 2 seconds, up to 5 stacks",
      levelValues: [["6.6%"], ["7.2%"], ["7.8%"], ["8.4%"], ["9%"], ["9.6%"], ["10.2%"], ["10.8%"], ["11.4%"], ["12%"], ["12.6%"], ["13.2%"], ["13.8%"], ["14.4%"]],
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
      effect: "When dealing damage to targets with damage over time status, self Attack increases by 20%",
    },
    {
      level: 2,
      effect: "Damage over time's penetration increases by 10%",
    },
    {
      level: 3,
      effect: "[Skill] and [Normal Attack] level and level cap +4",
    },
    {
      level: 4,
      effect: "[Damage Over Time] damage increases by 25%",
    },
    {
      level: 5,
      effect: "[ULT] and [Passive] level and level cap +4",
    },
    {
      level: 6,
      effect: "ULT can also apply [Wind Erosion]",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "A Break Amidst the Hustle",
    image: "BusyOfficer.png",
    stats: {
      hp: "5,000",
      attack: "500",
      defense: "500",
    },
    effects: [  // awakening levels 1-5
      "When dealing Damage Over Time, the target's damage taken increases by 6% for 2 seconds",
      "When dealing Damage Over Time, the target's damage taken increases by 7.5% for 2 seconds",
      "When dealing Damage Over Time, the target's damage taken increases by 9% for 2 seconds",
      "When dealing Damage Over Time, the target's damage taken increases by 10.5% for 2 seconds",
      "When dealing Damage Over Time, the target's damage taken increases by 12% for 2 seconds",
    ],
    restriction: "Only effective for Disruptor",
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Range', 'DOT', 'Vulnerability', 'Debuff', 'AOE'],
};

// SEO data for Shu
export const shuSEO = {
  title: `${shuData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${shuData.name}, a ${shuData.rarity} ${shuData.element} ${shuData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default shuData;

/*
USAGE INSTRUCTIONS:

1. This file has been created for Shu character
2. All placeholder values have been replaced with actual character data from shu.astro
3. The export names are: shuData, shuSEO

4. In your .astro file, import like this:
   import { shuData, shuSEO } from './shu.js';

5. Use the data:
   const characterData = shuData;
   const title = shuSEO.title;
   const description = shuSEO.description;

Based on the successful implementation in penny.js and penny.astro
*/
