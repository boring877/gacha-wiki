// Lancelot Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const lancelotData = {
  // Basic Character Information
  name: 'Lancelot',
  image: 'Lancelot.png', // Character image identifier
  rarity: 'SR',
  element: 'Holy',
  class: 'Tank', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
  role: 'Tank', // Tank, DPS, Supporter, Disruptor, Healer - Functional description
  faction: 'Avalon',

  // Base Stats (Level 80)
  stats: {
    hp: "5,500",
    attack: "400",
    defense: "575",
    energyRecovery: '0.25/s',
    critRate: '0%',
    critDmg: '50%',
    maxCritRate: '0%',
    maxCritDmg: '50%',
  },
  maxStats: {
    hp: '9,207',
    attack: '612',
    defense: '699',
  },
  talentTree: {
    totals: ["HP +67.4%", "ATK +53%", "DEF +21.6%"],
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
        stat: "HP +3.2%",
        unlock: "Start",
        materials: [],
        gold: 2000,
      },
      {
        node: "N3",
        stat: "HP +3.2%",
        unlock: "After N1",
        materials: [{"name": "High-Precision Chip", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 8000,
      },
      {
        node: "N4",
        stat: "ATK +3.2%",
        unlock: "After N1",
        materials: [{"name": "High-Precision Chip", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 8000,
      },
      {
        node: "N5",
        stat: "HP +4.8%",
        unlock: "After N2",
        materials: [{"name": "High-Precision Chip", "amount": 2, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 16000,
      },
      {
        node: "N6",
        stat: "ATK +4.8%",
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
        stat: "HP +4.8%",
        unlock: "After E2",
        materials: [{"name": "High-Precision Chip", "amount": 4, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 36000,
      },
      {
        node: "N9",
        stat: "HP +6.4%",
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
      name: "Sword of the Lake",
      cooldown: "2.0s",
      description: "Deals holy damage to the targeted enemy unit equal to 12% of self max HP",
      template: "Deals holy damage to the targeted enemy unit equal to {0} of self max HP",
      levelValues: [["5.5%"], ["6%"], ["6.5%"], ["7%"], ["7.5%"], ["8%"], ["8.5%"], ["9%"], ["9.5%"], ["10%"], ["10.5%"], ["11%"], ["11.5%"], ["12%"]],
    },
    auto:     {
      name: "Holy Shield of the Lake",
      cooldown: "4.0s",
      description: "Grants self a [Shield] equal to 6.1% max HP\n[Shield] can stack up to 30% of max HP",
      template: "Grants self a [Shield] equal to {0} max HP\n[Shield] can stack up to 30% of max HP",
      levelValues: [["2.5%"], ["2.8%"], ["3.1%"], ["3.3%"], ["3.6%"], ["3.9%"], ["4.2%"], ["4.4%"], ["4.7%"], ["5%"], ["5.3%"], ["5.6%"], ["5.8%"], ["6.1%"]],
    },
    ultimate:     {
      name: "Blooming Knight's Flower",
      energyCost: "3",
      cooldown: "3.0s",
      description: "Instantly moves to the targeted enemy unit\nAll allied units' damage taken decreases by 24% for 15 seconds",
      template: "Instantly moves to the targeted enemy unit\nAll allied units' damage taken decreases by {0} for 15 seconds",
      levelValues: [["11%"], ["12%"], ["13%"], ["14%"], ["15%"], ["16%"], ["17%"], ["18%"], ["19%"], ["20%"], ["21%"], ["22%"], ["23%"], ["24%"]],
    },
    passive:     {
      name: "Blessing of the Lake Spirit",
      description: "When HP falls below 50% after taking damage, restores 4.8% max HP every 3 seconds for 15 seconds\nTriggers once per battle",
      template: "When HP falls below 50% after taking damage, restores {0} max HP every 3 seconds for 15 seconds\nTriggers once per battle",
      levelValues: [["2.2%"], ["2.4%"], ["2.6%"], ["2.8%"], ["3%"], ["3.2%"], ["3.4%"], ["3.6%"], ["3.8%"], ["4%"], ["4.2%"], ["4.4%"], ["4.6%"], ["4.8%"]],
    },
  },

  // Team Skill
  teamSkill: {
    name: "Combo Skill",
    description: "Self max HP increases by 10%, Defense increases by 10%",
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
      effect: "Defense increases by 45%",
    },
    {
      level: 2,
      effect: "When attacked while holding a shield, damage taken decreases by 10%",
    },
    {
      level: 3,
      effect: "[Skill] and [Normal Attack] level and level cap +4",
    },
    {
      level: 4,
      effect: "HP increases by 30%",
    },
    {
      level: 5,
      effect: "[ULT] and [Passive] level and level cap +4",
    },
    {
      level: 6,
      effect: "Passive effect's recovery amount increases by 100%",
    },
  ],
  // Memory Card
  memoryCard: {
    name: "Drowning Lake Knight",
    image: "Lancelotcard",
    stats: {
      hp: "5,500",
      attack: "400",
      defense: "575",
    },
    effects: [  // awakening levels 1-5
      "Defense increases by 18%, after entering battle, all team members' damage taken decreases by 4%, identical skills do not stack",
      "Defense increases by 22.5%, after entering battle, all team members' damage taken decreases by 5%, identical skills do not stack",
      "Defense increases by 27%, after entering battle, all team members' damage taken decreases by 6%, identical skills do not stack",
      "Defense increases by 31.5%, after entering battle, all team members' damage taken decreases by 7%, identical skills do not stack",
      "Defense increases by 36%, after entering battle, all team members' damage taken decreases by 8%, identical skills do not stack",
    ],
    restriction: "Only effective for Tank",
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Melee', 'HP-Scale', 'Shield', 'Damage Reduction', 'Healing'],
};

// SEO data for Lancelot
export const lancelotSEO = {
  title: `${lancelotData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${lancelotData.name}, a ${lancelotData.rarity} ${lancelotData.element} ${lancelotData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default lancelotData;
