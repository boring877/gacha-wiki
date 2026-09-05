// Rose Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const roseData = {
  // Basic Character Information
  name: 'Rose',
  image: 'Rose.png',
  rarity: 'SR',
  element: 'Ice',
  class: 'Destroyer', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
  role: 'DPS', // Tank, DPS, Supporter, Disruptor, Healer - Functional description
  faction: 'Monochrome Realm',

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
        materials: [{"name": "Canopic Jar", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}],
        gold: 4000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "ATK +15%, HP +15%",
        materials: [{"name": "Canopic Jar", "amount": 2, "icon": "Icon_Talent_Rankup_Rare_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 16000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "ATK +20%, HP +20%",
        materials: [{"name": "Canopic Jar", "amount": 8, "icon": "Icon_Talent_Rankup_Rare_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
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
        materials: [{"name": "Frost Aether", "amount": 2, "icon": "Icon_Talent_Rankup_Ice_1.png"}],
      },
      {
        level: 4,
        gold: 8000,
        materials: [{"name": "Frost Aetherstone", "amount": 2, "icon": "Icon_Talent_Rankup_Ice_2.png"}],
      },
      {
        level: 5,
        gold: 16000,
        materials: [{"name": "Frost Aetherstone", "amount": 4, "icon": "Icon_Talent_Rankup_Ice_2.png"}],
      },
      {
        level: 6,
        gold: 24000,
        materials: [{"name": "Frost Aetherstone", "amount": 6, "icon": "Icon_Talent_Rankup_Ice_2.png"}],
      },
      {
        level: 7,
        gold: 36000,
        materials: [{"name": "Frost Aether Lany.", "amount": 2, "icon": "Icon_Talent_Rankup_Ice_3.png"}],
      },
      {
        level: 8,
        gold: 64000,
        materials: [{"name": "Frost Aether Lany.", "amount": 4, "icon": "Icon_Talent_Rankup_Ice_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}],
      },
      {
        level: 9,
        gold: 128000,
        materials: [{"name": "Frost Aether Lany.", "amount": 6, "icon": "Icon_Talent_Rankup_Ice_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 240000,
        materials: [{"name": "Frost Aether Lany.", "amount": 11, "icon": "Icon_Talent_Rankup_Ice_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },

  // Skills
  skills: {
    normal:     {
      name: "Bang! Bang! Bang!",
      cooldown: "4.0s",
      description: "Deals 96% Attack as ice damage to the targeted enemy unit\nEnhanced Normal Attack: Deals 96% Attack as ice damage to the targeted enemy unit and enemies within a 2-meter radius",
      template: "Deals {0} Attack as ice damage to the targeted enemy unit\nEnhanced Normal Attack: Deals {1} Attack as ice damage to the targeted enemy unit and enemies within a 2-meter radius",
      levelValues: [["44%", "44%"], ["48%", "48%"], ["52%", "52%"], ["56%", "56%"], ["60%", "60%"], ["64%", "64%"], ["68%", "68%"], ["72%", "72%"], ["76%", "76%"], ["80%", "80%"], ["84%", "84%"], ["88%", "88%"], ["92%", "92%"], ["96%", "96%"]],
    },
    auto:     {
      name: "Bullet Barrage",
      cooldown: "10.0s",
      description: "Deals 180% Attack as ice damage to the targeted enemy unit\nEnhanced Skill: Deals 180% Attack as ice damage to the targeted enemy unit and enemies within a 4-meter radius",
      template: "Deals {0} Attack as ice damage to the targeted enemy unit\nEnhanced Skill: Deals {1} Attack as ice damage to the targeted enemy unit and enemies within a 4-meter radius",
      levelValues: [["82.5%", "82.5%"], ["90%", "90%"], ["97.5%", "97.5%"], ["105%", "105%"], ["112.5%", "112.5%"], ["120%", "120%"], ["127.5%", "127.5%"], ["135%", "135%"], ["142.5%", "142.5%"], ["150%", "150%"], ["157.5%", "157.5%"], ["165%", "165%"], ["172.5%", "172.5%"], ["180%", "180%"]],
    },
    ultimate:     {
      name: "Elite Among Elites",
      energyCost: "8",
      cooldown: "1.0s",
      description: "Enters [ice Cannon] state, increasing Attack Speed by 58% And gaining Enhanced Normal Attack and Enhanced Skill for 10 seconds",
      template: "Enters [ice Cannon] state, increasing Attack Speed by {0} And gaining Enhanced Normal Attack and Enhanced Skill for 10 seconds",
      levelValues: [["32%"], ["34%"], ["36%"], ["38%"], ["40%"], ["42%"], ["44%"], ["46%"], ["48%"], ["50%"], ["52%"], ["54%"], ["56%"], ["58%"]],
    },
    passive:     {
      name: "Reckless Prodigy's Potential",
      description: "Each Normal Attack increases Critical Rate by 2.4%, up to 20 times",
      template: "Each Normal Attack increases Critical Rate by {0}, up to 20 times",
      levelValues: [["1.1%"], ["1.2%"], ["1.3%"], ["1.4%"], ["1.5%"], ["1.6%"], ["1.7%"], ["1.8%"], ["1.9%"], ["2%"], ["2.1%"], ["2.2%"], ["2.3%"], ["2.4%"]],
    },
  },

  // Team Skill
  teamSkill: {
    name: "Combo Skill",
    description: "Self damage dealt increases by 20%",
    requirements: {
      faction: "Monochrome Realm",
      element: "Ice",
      alternativeConditions: "Team contains 2 Monochrome Realm characters or 2 Ice characters",
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect: "In [Frost Cannon] state, critical rate increases by 15%",
    },
    {
      level: 2,
      effect: "In [Frost Cannon] state, damage taken decreases by 10%",
    },
    {
      level: 3,
      effect: "[Skill] and [Normal Attack] level and level cap +4",
    },
    {
      level: 4,
      effect: "Normal attack damage increases by 20%",
    },
    {
      level: 5,
      effect: "[ULT] and [Passive] level and level cap +4",
    },
    {
      level: 6,
      effect: "[Frost Cannon] state duration becomes 15 seconds",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "During Military Training",
    image: "DuringMilitaryAcademyTraining.png",
    stats: {
      hp: "4,200",
      attack: "650",
      defense: "395",
    },
    effects: [  // awakening levels 1-5
      "After using an ULT, Normal Attack and Skill Damage increase by 30% for 10 seconds",
      "After using an ULT, Normal Attack and Skill Damage increase by 37.5% for 10 seconds",
      "After using an ULT, Normal Attack and Skill Damage increase by 45% for 10 seconds",
      "After using an ULT, Normal Attack and Skill Damage increase by 52.5% for 10 seconds",
      "After using an ULT, Normal Attack and Skill Damage increase by 60% for 10 seconds",
    ],
    restriction: "Only effective for Destroyer",
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Range', 'AOE', 'Crit Rate', 'Normal Attack', 'Speed Attack'],
};

// SEO data for Rose
export const roseSEO = {
  title: `${roseData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${roseData.name}, a ${roseData.rarity} ${roseData.element} ${roseData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default roseData;
