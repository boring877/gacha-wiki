// Lavinia - Zone Nova Character Data
// Fire Healer character from Safir faction

export const laviniaData = {
  // Basic Character Information
  name: 'Lavinia',
  image: 'Lavinia.png',
  rarity: 'SSR',
  element: 'Fire',
  class: 'Healer', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
  role: 'Healer', // Tank, DPS, Supporter, Disruptor, Healer - Functional description
  faction: 'Safir',

  // Base Stats (Level 80)
  stats: {
    hp: "6,000",
    attack: "600",
    defense: "600",
    energyRecovery: '0.25/s',
    critRate: '0%',
    critDmg: '50%',
    maxCritRate: '16.8%',
    maxCritDmg: '50%',
  },
  maxStats: {
    hp: '8,700',
    attack: '956',
    defense: '672',
  },
  talentTree: {
    totals: ["ATK +59.4%", "HP +45%", "Crit Rate +16.8%", "DEF +12%"],
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
        stat: "ATK +3.2%",
        unlock: "After E1",
        materials: [{"name": "High-Precision Chip", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 5000,
      },
      {
        node: "N2",
        stat: "Crit Rate +2.4%",
        unlock: "Start",
        materials: [],
        gold: 2500,
      },
      {
        node: "N3",
        stat: "Crit Rate +2.4%",
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
        stat: "Crit Rate +3.6%",
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
        stat: "ATK +4.8%",
        unlock: "After E2",
        materials: [{"name": "High-Precision Chip", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 45000,
      },
      {
        node: "N8",
        stat: "Crit Rate +3.6%",
        unlock: "After E2",
        materials: [{"name": "High-Precision Chip", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 45000,
      },
      {
        node: "N9",
        stat: "Crit Rate +4.8%",
        unlock: "Lv 80",
        materials: [{"name": "High-Precision Chip", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 160000,
      },
      {
        node: "N10",
        stat: "ATK +6.4%",
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
        materials: [{"name": "Blaze Aether", "amount": 3, "icon": "Icon_Talent_Rankup_Fire_1.png"}],
      },
      {
        level: 4,
        gold: 10000,
        materials: [{"name": "Blaze Aetherstone", "amount": 3, "icon": "Icon_Talent_Rankup_Fire_2.png"}],
      },
      {
        level: 5,
        gold: 20000,
        materials: [{"name": "Blaze Aetherstone", "amount": 5, "icon": "Icon_Talent_Rankup_Fire_2.png"}],
      },
      {
        level: 6,
        gold: 30000,
        materials: [{"name": "Blaze Aetherstone", "amount": 7, "icon": "Icon_Talent_Rankup_Fire_2.png"}],
      },
      {
        level: 7,
        gold: 45000,
        materials: [{"name": "Blaze Aether Lany.", "amount": 3, "icon": "Icon_Talent_Rankup_Fire_3.png"}],
      },
      {
        level: 8,
        gold: 80000,
        materials: [{"name": "Blaze Aether Lany.", "amount": 5, "icon": "Icon_Talent_Rankup_Fire_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}],
      },
      {
        level: 9,
        gold: 160000,
        materials: [{"name": "Blaze Aether Lany.", "amount": 8, "icon": "Icon_Talent_Rankup_Fire_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 300000,
        materials: [{"name": "Blaze Aether Lany.", "amount": 14, "icon": "Icon_Talent_Rankup_Fire_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },

  // Character Skills
  skills: {
    normal:     {
      name: "Flame Kiss",
      cooldown: "2.0s",
      description: "Deal 120% attack fire damage to the designated enemy unit",
      template: "Deal {0} attack fire damage to the designated enemy unit",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Blazing Sequence Treatment",
      cooldown: "10.0s",
      description: "Deals 5 damage stages to the designated enemy unit, dealing a total of 720% attack power worth of Blazing Damage. After each damage, restore 24% attack power worth to the friendly unit with the lowest HP ratio.",
      template: "Deals 5 damage stages to the designated enemy unit, dealing a total of {0} attack power worth of Blazing Damage. After each damage, restore {1} attack power worth to the friendly unit with the lowest HP ratio.",
      levelValues: [["330%", "11%"], ["360%", "12%"], ["390%", "13%"], ["420%", "14%"], ["450%", "15%"], ["480%", "16%"], ["510%", "17%"], ["540%", "18%"], ["570%", "19%"], ["600%", "20%"], ["630%", "21%"], ["660%", "22%"], ["690%", "23%"], ["720%", "24%"]],
    },
    ultimate:     {
      name: "Final Flame Judgment",
      energyCost: "4",
      cooldown: "1.0s",
      description: "Deals 4 damage stages to the designated enemy unit, dealing a total of 960% attack power worth of Blazing Damage. After each damage, restore 72% attack power worth to the friendly unit with the lowest HP ratio. The first round of damage can interrupt the target's active skills. The last round of damage is treated as pursuit damage.",
      template: "Deals 4 damage stages to the designated enemy unit, dealing a total of {0} attack power worth of Blazing Damage. After each damage, restore {1} attack power worth to the friendly unit with the lowest HP ratio. The first round of damage can interrupt the target's active skills. The last round of damage is treated as pursuit damage.",
      levelValues: [["440%", "33%"], ["480%", "36%"], ["520%", "39%"], ["560%", "42%"], ["600%", "45%"], ["640%", "48%"], ["680%", "51%"], ["720%", "54%"], ["760%", "57%"], ["800%", "60%"], ["840%", "63%"], ["880%", "66%"], ["920%", "69%"], ["960%", "72%"]],
    },
    passive:     {
      name: "Blessings of Recovery",
      description: "Every 1% critical hit chance before Lavinia enters Resolve increase her healing by 0.5%.\nAfter a critical hit with a normal attack/skill/ultimate move, Lavinia will restore 24%% of her attack power to the friendly unit with the lowest health ratio.",
      template: "Every 1% critical hit chance before Lavinia enters Resolve increase her healing by 0.5%.\nAfter a critical hit with a normal attack/skill/ultimate move, Lavinia will restore {0}% of her attack power to the friendly unit with the lowest health ratio.",
      levelValues: [["11%"], ["12%"], ["13%"], ["14%"], ["15%"], ["16%"], ["17%"], ["18%"], ["19%"], ["20%"], ["21%"], ["22%"], ["23%"], ["24%"]],
    },
  },

  // Team Skill
  teamSkill: {
    name: "Combo Skill",
    description: "Increases your critical hit rate by 7.5%. When starting a battle, every 15% critical hit rate increases your healing by 5%, up to a maximum of 6 times.",
    requirements: {
      faction: "Safir",
      element: "Fire",
      alternativeConditions: "Team contains 2 Safir characters or 2 Fire characters",
    },
  },

  // Awakening Effects
  awakenings: [
    {
      level: 1,
      effect: "Critical rate increased by 12%\nAll healing effects from Lavinia can reduce the damage taken by the target by 10% for 5 seconds. Repeated triggers can extend the duration",
    },
    {
      level: 2,
      effect: "Ultimate skill cost reduced by 1.\nAfter Lavinia's normal attacks, skills, or ultimate skill critically hit, they deal an additional 20% attack damage as <color=#c90d0d>blaze</color> damage",
    },
    {
      level: 3,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 4,
      effect: "Healing increases by 37.5%.",
    },
    {
      level: 5,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 6,
      effect: "The final hit of the skill is considered [Pursue] damage. Lavinia's [Pursue] damage reduces the target's all resistances by 10% and increases the damage taken from pursue attacks by 20%, lasting 5 seconds.",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "Are the glasses the real thing?",
    image: "Laviniacard",
    stats: {
      hp: "6,000",
      attack: "600",
      defense: "600",
    },
    effects: [  // awakening levels 1-5
      "Increases critical hit rate by 18%. After each critical hit, increases self-healing by 30% for 3 seconds. After each heal, increases the attack power of all allied targets by 18% for 3 seconds.",
      "Increases critical hit rate by 22%. After each critical hit, self-healing increases by 35%, lasting 3 seconds. After each heal, all allied targets' attack power increases by 21%, lasting 3 seconds.",
      "Increases critical hit rate by 26%. After each critical hit, self-healing increases by 40%, lasting 3 seconds. After each heal, all allied targets' attack power increases by 24%, lasting 3 seconds.",
      "Increases critical hit rate by 30%. After each critical hit, self-healing increases by 45%, lasting 3 seconds. After each heal, all allied targets' attack power increases by 27%, lasting 3 seconds.",
      "Increases critical hit rate by 34%. After each critical hit, increases self-healing by 50% for 3 seconds. After each heal, increases the attack power of all allied targets by 30% for 3 seconds.",
    ],
    restriction: "Only effective for Healer",
  },

  // Character Tags - Reusable across multiple characters
  tags: [
    'Healing',
    'Melee',
    'Crit Damage',
    'Crit Rate',
    'Normal Attack',
    'Extra Attack',
    'Interrupt',
  ],
};

// SEO data for Lavinia
export const laviniaSEO = {
  title: 'Lavinia - Zone Nova Character Guide | GachaWiki',
  description:
    'Complete guide for Lavinia in Zone Nova. Learn about her fire healing abilities, critical rate synergies, damage reduction buffs, and optimal build strategies for this powerful Safir faction healer.',
};

// Export default for easy importing
export default laviniaData;
