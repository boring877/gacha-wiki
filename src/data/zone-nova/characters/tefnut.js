// Tefnut Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js
// Instructions: Copy this file to the same directory as your character's .astro file

export const tefnutData = {
  // Basic Character Information
  name: 'Tefnut',
  image: 'Tefnut.png',
  rarity: 'SR', // SSR, SR, R
  element: 'Holy', // Fire, Ice, Wind, Holy, Chaos
  class: 'Attacker', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
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
        materials: [{"name": "Holy Aether Lany.", "amount": 4, "icon": "Icon_Talent_Rankup_Light_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}],
      },
      {
        level: 9,
        gold: 128000,
        materials: [{"name": "Holy Aether Lany.", "amount": 6, "icon": "Icon_Talent_Rankup_Light_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 240000,
        materials: [{"name": "Holy Aether Lany.", "amount": 11, "icon": "Icon_Talent_Rankup_Light_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },

  // Skills
  skills: {
    normal:     {
      name: "Rending Claw",
      cooldown: "2.0s",
      description: "Deals 120% Attack as holy damage to the targeted enemy unit",
      template: "Deals {0} Attack as holy damage to the targeted enemy unit",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Merciless Hunt",
      cooldown: "5.0s",
      description: "Deals 240% Attack as holy damage to the targeted enemy unit",
      template: "Deals {0} Attack as holy damage to the targeted enemy unit",
      levelValues: [["110%"], ["120%"], ["130%"], ["140%"], ["150%"], ["160%"], ["170%"], ["180%"], ["190%"], ["200%"], ["210%"], ["220%"], ["230%"], ["240%"]],
    },
    ultimate:     {
      name: "Bloodthirsty Slaughter",
      energyCost: "8",
      cooldown: "1.0s",
      description: "Jumps to the targeted enemy unit And deals 960% Attack as holy damage\nWhen the target has max stacks of [holy Corrosion], additionally applies [Light Scourge]\n[Light Scourge]: Deals 180% Attack as holy damage every 3 seconds, up to 1 stack",
      template: "Jumps to the targeted enemy unit And deals {0} Attack as holy damage\nWhen the target has max stacks of [holy Corrosion], additionally applies [Light Scourge]\n[Light Scourge]: Deals {1} Attack as holy damage every 3 seconds, up to 1 stack",
      levelValues: [["440%", "82.5%"], ["480%", "90%"], ["520%", "97.5%"], ["560%", "105%"], ["600%", "112.5%"], ["640%", "120%"], ["680%", "127.5%"], ["720%", "135%"], ["760%", "142.5%"], ["800%", "150%"], ["840%", "157.5%"], ["880%", "165%"], ["920%", "172.5%"], ["960%", "180%"]],
    },
    passive:     {
      name: "Beast's Bloodlust",
      description: "Skill can apply [holy Corrosion]\n[holy Corrosion]: Deals 24% Attack as holy damage every 2 seconds, up to 5 stacks",
      template: "Skill can apply [holy Corrosion]\n[holy Corrosion]: Deals {0} Attack as holy damage every 2 seconds, up to 5 stacks",
      levelValues: [["11%"], ["12%"], ["13%"], ["14%"], ["15%"], ["16%"], ["17%"], ["18%"], ["19%"], ["20%"], ["21%"], ["22%"], ["23%"], ["24%"]],
    },
  },

  // Team Skill
  teamSkill: {
    name: "Combo Skill",
    description: "Self damage dealt increases by 20%",
    requirements: {
      faction: "Kemich",
      element: "Holy",
      alternativeConditions: "Team contains 2 Kemich characters or 2 Holy characters",
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect: "When attacking targets with [Damage Over Time], penetration increases by 10%",
    },
    {
      level: 2,
      effect: "When self HP is 100%, Attack increases by 20%",
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
      effect: "[ULT] additionally increases the target's received [Damage Over Time] damage by 20% for 15 seconds",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "Secret Room Livestream",
    image: "Tefnutcard",
    stats: {
      hp: "4,200",
      attack: "650",
      defense: "395",
    },
    effects: [  // awakening levels 1-5
      "Damage Over Time Penetration increases by 18%",
      "Damage Over Time Penetration increases by 22.5%",
      "Damage Over Time Penetration increases by 27%",
      "Damage Over Time Penetration increases by 31.5%",
      "Damage Over Time Penetration increases by 36%",
    ],
    restriction: "Only effective for Attacker",
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Melee', 'DOT', 'Penetration', 'DOT Intake Increases'],
};

// SEO data for Tefnut
export const tefnutSEO = {
  title: `${tefnutData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${tefnutData.name}, a ${tefnutData.rarity} ${tefnutData.element} ${tefnutData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default tefnutData;

/*
USAGE INSTRUCTIONS:

1. This file has been created for Tefnut character
2. All placeholder values have been replaced with actual character data from tefnut.astro
3. The export names are: tefnutData, tefnutSEO

4. In your .astro file, import like this:
   import { tefnutData, tefnutSEO } from './tefnut.js';

5. Use the data:
   const characterData = tefnutData;
   const title = tefnutSEO.title;
   const description = tefnutSEO.description;

Based on the successful implementation in penny.js and penny.astro
*/
