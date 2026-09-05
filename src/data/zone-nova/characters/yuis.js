// Yuis Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js
// Instructions: Copy this file to the same directory as your character's .astro file

export const yuisData = {
  // Basic Character Information
  name: 'Yuis',
  image: 'Yuis.png',
  rarity: 'SSR', // SSR, SR, R
  element: 'Holy', // Fire, Ice, Wind, Holy, Chaos
  class: 'Attacker', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
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
        materials: [{"name": "Energy Vial", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_1.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}],
        gold: 5000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "ATK +15%, HP +15%",
        materials: [{"name": "Energy Vial", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_1.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 20000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "ATK +20%, HP +20%",
        materials: [{"name": "Energy Vial", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_1.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 160000,
      },
    ],
    statNodes: [
      {
        node: "N1",
        stat: "HP +3.2%",
        unlock: "After E1",
        materials: [{"name": "Energy Vial", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
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
        materials: [{"name": "Energy Vial", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 10000,
      },
      {
        node: "N4",
        stat: "DEF +4.8%",
        unlock: "After N1",
        materials: [{"name": "Energy Vial", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 10000,
      },
      {
        node: "N5",
        stat: "ATK +4.8%",
        unlock: "After N2",
        materials: [{"name": "Energy Vial", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 20000,
      },
      {
        node: "N6",
        stat: "DEF +7.2%",
        unlock: "After N2",
        materials: [{"name": "Energy Vial", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 160000,
      },
      {
        node: "N7",
        stat: "HP +4.8%",
        unlock: "After E2",
        materials: [{"name": "Energy Vial", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 45000,
      },
      {
        node: "N8",
        stat: "ATK +4.8%",
        unlock: "After E2",
        materials: [{"name": "Energy Vial", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 45000,
      },
      {
        node: "N9",
        stat: "ATK +6.4%",
        unlock: "Lv 80",
        materials: [{"name": "Energy Vial", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 160000,
      },
      {
        node: "N10",
        stat: "HP +6.4%",
        unlock: "Lv 75",
        materials: [{"name": "Energy Vial", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
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
        materials: [{"name": "Holy Aether Lany.", "amount": 5, "icon": "Icon_Talent_Rankup_Light_3.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}],
      },
      {
        level: 9,
        gold: 160000,
        materials: [{"name": "Holy Aether Lany.", "amount": 8, "icon": "Icon_Talent_Rankup_Light_3.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 300000,
        materials: [{"name": "Holy Aether Lany.", "amount": 14, "icon": "Icon_Talent_Rankup_Light_3.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },

  // Skills
  skills: {
    normal:     {
      name: "Thunder Lash",
      cooldown: "2.0s",
      description: "Deals 120% Attack as holy damage to the targeted enemy unit",
      template: "Deals {0} Attack as holy damage to the targeted enemy unit",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Divine Thunder Punishment",
      cooldown: "5.0s",
      description: "Instantly charges 2 stacks of [Celestial Pivot] And launches 4 flying swords, dealing 720% Attack as holy damage to the current target",
      template: "Instantly charges 2 stacks of [Celestial Pivot] And launches 4 flying swords, dealing {0} Attack as holy damage to the current target",
      levelValues: [["330%"], ["360%"], ["390%"], ["420%"], ["450%"], ["480%"], ["510%"], ["540%"], ["570%"], ["600%"], ["630%"], ["660%"], ["690%"], ["720%"]],
    },
    ultimate:     {
      name: "Absolute Retribution",
      energyCost: "4",
      cooldown: "1.0s",
      description: "Instantly charges 2 stacks of [Celestial Pivot] And launches 1 large flying sword, dealing 720% Attack as holy damage to the current target\n[Enhanced ULT]: Consumes all [Celestial Pivot], continuously rains flying swords on the locked target, dealing 1440% Attack as holy damage, considered [Pursue] damage\nRepeatedly using [Enhanced ULT] on the target refreshes the duration",
      template: "Instantly charges 2 stacks of [Celestial Pivot] And launches 1 large flying sword, dealing {0} Attack as holy damage to the current target\n[Enhanced ULT]: Consumes all [Celestial Pivot], continuously rains flying swords on the locked target, dealing {1} Attack as holy damage, considered [Pursue] damage\nRepeatedly using [Enhanced ULT] on the target refreshes the duration",
      levelValues: [["330%", "660%"], ["360%", "720%"], ["390%", "780%"], ["420%", "840%"], ["450%", "900%"], ["480%", "960%"], ["510%", "1020%"], ["540%", "1080%"], ["570%", "1140%"], ["600%", "1200%"], ["630%", "1260%"], ["660%", "1320%"], ["690%", "1380%"], ["720%", "1440%"]],
    },
    passive:     {
      name: "",
      description: "When an ally uses an ULT, Zeus gains 2 stacks of [Celestial Pivot]\nWhen an ally triggers [Pursue], Zeus gains 2 stacks of [Celestial Pivot]\nAt 16 stacks of [Celestial Pivot], can cast [Enhanced ULT]\nAfter casting [Enhanced ULT], Critical Rate increases by 11% and Critical Damage by 22% for 20 seconds",
      template: "When an ally uses an ULT, Zeus gains 2 stacks of [Celestial Pivot]\nWhen an ally triggers [Pursue], Zeus gains 2 stacks of [Celestial Pivot]\nAt 16 stacks of [Celestial Pivot], can cast [Enhanced ULT]\nAfter casting [Enhanced ULT], Critical Rate increases by {0} and Critical Damage by {1} for 20 seconds",
      levelValues: [["11%", "22%"], ["11%", "22%"], ["11%", "22%"], ["11%", "22%"], ["11%", "22%"], ["11%", "22%"], ["11%", "22%"], ["11%", "22%"], ["11%", "22%"], ["11%", "22%"], ["11%", "22%"], ["11%", "22%"], ["11%", "22%"], ["11%", "22%"]],
    },
  },

  // Team Skill
  teamSkill: {
    name: "Combo Skill",
    description: "Self Attack increases by 10%\nAt battle start, every 500 Attack increases self Critical Damage by 7.5%, up to 6 times",
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
      effect: "At the start of battle, immediately gain 16 stacks of [Tianshu]\n[Enhanced Ultimate Skill] energy cost reduced to 3",
    },
    {
      level: 2,
      effect: "After casting Enhanced Ultimate Skill, immediately gain 4 stacks of [Tianshu] and increase Pursue Damage by 30% for 20 seconds",
    },
    {
      level: 3,
      effect: "[Skill] and [Normal Attack] level and level cap +4",
    },
    {
      level: 4,
      effect: "<color=#faba18>Holy</color> Damage increased by 30%",
    },
    {
      level: 5,
      effect: "[ULT] and [Passive] level and level cap +4",
    },
    {
      level: 6,
      effect: "After Zeus deals 12 Pursue Damages to the same target, an additional greatsword drops, dealing 150% Attack Power as <color=#faba18>Holy</color> Damage, treated as Pursue Damage\n\nZeus's Pursue Damage penetrates 20% Elemental Resistance",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "Frozen Heart",
    image: "Yuiscard",
    stats: {
      hp: "5,040",
      attack: "780",
      defense: "474",
    },
    effects: [  // awakening levels 1-5
      "Critical Rate increased by 18%\nPursue Damage dealt by the wearer increases Critical Damage by 36%",
      "Critical Rate increased by 22%\nPursue Damage dealt by the wearer increases Critical Damage by 44%",
      "Critical Rate increased by 26%\nPursue Damage dealt by the wearer increases Critical Damage by 52%",
      "Critical Rate increased by 30%\nPursue Damage dealt by the wearer increases Critical Damage by 60%",
      "Critical Rate increased by 34%\nPursue Damage dealt by the wearer increases Critical Damage by 68%",
    ],
    restriction: "Only effective for Attacker",
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Range', 'Crit Rate', 'Crit Dmg', 'Enhanced Ultimate', 'Extra Attack'],
};

// SEO data for Yuis
export const yuisSEO = {
  title: `${yuisData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${yuisData.name}, a ${yuisData.rarity} ${yuisData.element} ${yuisData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default yuisData;

/*
USAGE INSTRUCTIONS:

1. This file has been created for Yuis character
2. All placeholder values have been replaced with actual character data from yuis.astro
3. The export names are: yuisData, yuisSEO

4. In your .astro file, import like this:
   import { yuisData, yuisSEO } from './yuis.js';

5. Use the data:
   const characterData = yuisData;
   const title = yuisSEO.title;
   const description = yuisSEO.description;

Based on the successful implementation in penny.js and penny.astro
*/
