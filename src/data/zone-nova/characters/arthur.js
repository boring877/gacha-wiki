// Arthur Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js
// Instructions: Copy this file to the same directory as your character's .astro file

export const arthurData = {
  // Basic Character Information
  name: 'Arthur',
  image: 'Arthur.png', // Use explicit PNG filename
  rarity: 'SSR', // SSR, SR, R
  element: 'Holy', // Fire, Ice, Wind, Holy, Chaos
  class: 'Destroyer', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
  role: 'DPS', // Tank, DPS, Supporter, Disruptor, Healer - Functional description
  faction: 'Avalon', // Savir, etc.

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
        materials: [{"name": "Energy Vial", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_1.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}],
        gold: 5000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "ATK +15%, HP +15%",
        materials: [{"name": "Energy Vial", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_1.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 20000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "ATK +20%, HP +20%",
        materials: [{"name": "Energy Vial", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_1.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
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
      name: "Sworn Victory Sword",
      cooldown: "2.0s",
      description: "Deals 120% Attack as holy damage to the targeted enemy unit",
      template: "Deals {0} Attack as holy damage to the targeted enemy unit",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "King's Blade",
      cooldown: "5.0s",
      description: "Deals 240% Attack as holy damage to enemies in front\nFor each target hit, Critical Damage increases by 12%, up to 4 stacks, for 5 seconds",
      template: "Deals {0} Attack as holy damage to enemies in front\nFor each target hit, Critical Damage increases by {1}, up to 4 stacks, for 5 seconds",
      levelValues: [["110%", "5.5%"], ["120%", "6%"], ["130%", "6.5%"], ["140%", "7%"], ["150%", "7.5%"], ["160%", "8%"], ["170%", "8.5%"], ["180%", "9%"], ["190%", "9.5%"], ["200%", "10%"], ["210%", "10.5%"], ["220%", "11%"], ["230%", "11.5%"], ["240%", "12%"]],
    },
    ultimate:     {
      name: "Imperial Sanctum",
      energyCost: "6",
      cooldown: "1.0s",
      description: "Deals 600% Attack as holy damage to enemies in front\nAfter a [Supporter] uses an ULT, can use 1 [Enhanced ULT] within 5 seconds\n[Enhanced ULT]: Increases Attack by 36% for 10 seconds And deals 720% Attack as holy damage to enemies in front",
      template: "Deals {0} Attack as holy damage to enemies in front\nAfter a [Supporter] uses an ULT, can use 1 [Enhanced ULT] within 5 seconds\n[Enhanced ULT]: Increases Attack by {1} for 10 seconds And deals {2} Attack as holy damage to enemies in front",
      levelValues: [["275%", "16.5%", "330%"], ["300%", "18%", "360%"], ["325%", "19.5%", "390%"], ["350%", "21%", "420%"], ["375%", "22.5%", "450%"], ["400%", "24%", "480%"], ["425%", "25.5%", "510%"], ["450%", "27%", "540%"], ["475%", "28.5%", "570%"], ["500%", "30%", "600%"], ["525%", "31.5%", "630%"], ["550%", "33%", "660%"], ["575%", "34.5%", "690%"], ["600%", "36%", "720%"]],
    },
    passive:     {
      name: "Royal Aura",
      description: "After each ULT cast, increases Attack by 12% and Defense by 6.6%, up to 3 stacks, for 10 seconds",
      template: "After each ULT cast, increases Attack by {0} and Defense by {1}, up to 3 stacks, for 10 seconds",
      levelValues: [["5.5%", "3%"], ["6%", "3.3%"], ["6.5%", "3.6%"], ["7%", "3.8%"], ["7.5%", "4.1%"], ["8%", "4.4%"], ["8.5%", "4.7%"], ["9%", "4.9%"], ["9.5%", "5.2%"], ["10%", "5.5%"], ["10.5%", "5.8%"], ["11%", "6.1%"], ["11.5%", "6.3%"], ["12%", "6.6%"]],
    },
  },

  // Team Skill
  teamSkill: {
    name: "Combo Skill",
    description: "Self Critical Rate increases by 7.5%\nAt battle start, every 15% Critical Rate increases self holy damage by 5%, up to 6 times",
    requirements: {
      faction: "Avalon",
      element: "Holy",
      alternativeConditions: "Team contains 2 Avalon characters or 2 Holy characters",
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect: "Critical rate increases by 15%",
    },
    {
      level: 2,
      effect: "When using an [Enhanced ULT], critical damage increases by 30%",
    },
    {
      level: 3,
      effect: "[Skill] and [Normal Attack] level and level cap +4",
    },
    {
      level: 4,
      effect: "ULT damage increases by 35%",
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
    name: "Night of Blood and Storm",
    image: "Night-of-Bloody-Storm",
    stats: {
      hp: "5,040",
      attack: "780",
      defense: "474",
    },
    effects: [  // awakening levels 1-5
      "Attack increases by 24%, after a team Supporter uses an ULT, the wearer's ULT damage increases by 24% for 5 seconds",
      "Attack increases by 28%, after a team Supporter uses an ULT, the wearer's ULT damage increases by 28% for 5 seconds",
      "Attack increases by 32%, after a team Supporter uses an ULT, the wearer's ULT damage increases by 32% for 5 seconds",
      "Attack increases by 36%, after a team Supporter uses an ULT, the wearer's ULT damage increases by 36% for 5 seconds",
      "Attack increases by 40%, after a team Supporter uses an ULT, the wearer's ULT damage increases by 40% for 5 seconds",
    ],
    restriction: "Only effective for Destroyer",
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Melee', 'Crit Rate', 'Crit Dmg', 'Buff'],
};

// SEO data for Arthur
export const arthurSEO = {
  title: `${arthurData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${arthurData.name}, a ${arthurData.rarity} ${arthurData.element} ${arthurData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default arthurData;
