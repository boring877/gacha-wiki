// Zone Nova data for the Gluttony - Beelzebub character guide page.

export const gluttonyBeelzebubData = {
  // Basic Character Information
  name: 'Gluttony - Beelzebub',
  image: 'Beelzebub.png',
  rarity: 'SSR',
  element: 'Ice',
  class: 'Disruptor',
  role: 'Disruptor',
  faction: 'Bikta',

  // Base Stats (Level 80)
  stats: {
    hp: "6,000",
    attack: "600",
    defense: "600",
    energyRecovery: '0.25/s',
    critRate: '0%',
    critDmg: '50%',
    maxCritRate: '0%',
    maxCritDmg: '50%',
  },
  maxStats: {
    hp: '10,044',
    attack: '870',
    defense: '672',
  },
  talentTree: {
    totals: ["HP +67.4%", "ATK +45%", "Ice DMG +14.4%", "DEF +12%"],
    enhancementNodes: [
      {
        name: "Enhancement I",
        rank: 2,
        bonus: "ATK +10%, HP +10%",
        materials: [{"name": "Canopic Jar", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}],
        gold: 5000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "ATK +15%, HP +15%",
        materials: [{"name": "Canopic Jar", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 20000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "ATK +20%, HP +20%",
        materials: [{"name": "Canopic Jar", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 160000,
      },
    ],
    statNodes: [
      {
        node: "N1",
        stat: "Ice DMG +3.2%",
        unlock: "After E1",
        materials: [{"name": "Canopic Jar", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 5000,
      },
      {
        node: "N2",
        stat: "HP +3.2%",
        unlock: "Start",
        materials: [],
        gold: 2500,
      },
      {
        node: "N3",
        stat: "HP +3.2%",
        unlock: "After N1",
        materials: [{"name": "Canopic Jar", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 10000,
      },
      {
        node: "N4",
        stat: "DEF +4.8%",
        unlock: "After N1",
        materials: [{"name": "Canopic Jar", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 10000,
      },
      {
        node: "N5",
        stat: "HP +4.8%",
        unlock: "After N2",
        materials: [{"name": "Canopic Jar", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 20000,
      },
      {
        node: "N6",
        stat: "DEF +7.2%",
        unlock: "After N2",
        materials: [{"name": "Canopic Jar", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 160000,
      },
      {
        node: "N7",
        stat: "Ice DMG +4.8%",
        unlock: "After E2",
        materials: [{"name": "Canopic Jar", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 45000,
      },
      {
        node: "N8",
        stat: "HP +4.8%",
        unlock: "After E2",
        materials: [{"name": "Canopic Jar", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 45000,
      },
      {
        node: "N9",
        stat: "HP +6.4%",
        unlock: "Lv 80",
        materials: [{"name": "Canopic Jar", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 160000,
      },
      {
        node: "N10",
        stat: "Ice DMG +6.4%",
        unlock: "Lv 75",
        materials: [{"name": "Canopic Jar", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
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
        materials: [{"name": "Frost Aether Lany.", "amount": 5, "icon": "Icon_Talent_Rankup_Ice_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}],
      },
      {
        level: 9,
        gold: 160000,
        materials: [{"name": "Frost Aether Lany.", "amount": 8, "icon": "Icon_Talent_Rankup_Ice_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 300000,
        materials: [{"name": "Frost Aether Lany.", "amount": 14, "icon": "Icon_Talent_Rankup_Ice_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },

  // Skills
  skills: {
    normal:     {
      name: "Cold Devour",
      cooldown: "2.0s",
      description: "Deals ice damage equal to 120% attack power to the designated enemy unit.",
      template: "Deals ice damage equal to {0} attack power to the designated enemy unit.",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Cold Deprivation",
      cooldown: "7.0s",
      description: "Deals 488.9% attack damage as ice damage to the designated enemy unit and reduces the enemy's energy by 1.",
      template: "Deals {0} attack damage as ice damage to the designated enemy unit and reduces the enemy's energy by 1.",
      levelValues: [["200%"], ["222.2%"], ["244.4%"], ["266.7%"], ["288.9%"], ["311.1%"], ["333.3%"], ["355.6%"], ["377.8%"], ["400%"], ["422.2%"], ["444.4%"], ["466.7%"], ["488.9%"]],
    },
    ultimate:     {
      name: "Frozen Feedback",
      energyCost: "3",
      cooldown: "1.0s",
      description: "Deals 733.3% ice damage to all enemies and inflicts [Gluttony], reducing their attack power 61.1%, defense power 73.3%, and energy recovery efficiency 10% for 5 seconds. At the same time, all allies gain [Return], increasing their attack power 61.1%, defense power 73.3%, and energy recovery efficiency 20% for 5 seconds.",
      template: "Deals {0} ice damage to all enemies and inflicts [Gluttony], reducing their attack power {1}, defense power {2}, and energy recovery efficiency {3} for 5 seconds. At the same time, all allies gain [Return], increasing their attack power {4}, defense power {5}, and energy recovery efficiency {6} for 5 seconds.",
      levelValues: [["300%", "25%", "30%", "10%", "25%", "30%", "20%"], ["333.3%", "27.8%", "33.3%", "10%", "27.8%", "33.3%", "20%"], ["366.7%", "30.6%", "36.7%", "10%", "30.6%", "36.7%", "20%"], ["400%", "33.3%", "40%", "10%", "33.3%", "40%", "20%"], ["433.3%", "36.1%", "43.3%", "10%", "36.1%", "43.3%", "20%"], ["466.7%", "38.9%", "46.7%", "10%", "38.9%", "46.7%", "20%"], ["500%", "41.7%", "50%", "10%", "41.7%", "50%", "20%"], ["533.3%", "44.4%", "53.3%", "10%", "44.4%", "53.3%", "20%"], ["566.7%", "47.2%", "56.7%", "10%", "47.2%", "56.7%", "20%"], ["600%", "50%", "60%", "10%", "50%", "60%", "20%"], ["633.3%", "52.8%", "63.3%", "10%", "52.8%", "63.3%", "20%"], ["666.7%", "55.6%", "66.7%", "10%", "55.6%", "66.7%", "20%"], ["700%", "58.3%", "70%", "10%", "58.3%", "70%", "20%"], ["733.3%", "61.1%", "73.3%", "10%", "61.1%", "73.3%", "20%"]],
    },
    passive:     {
      name: "Taotie taxation",
      description: "Upon entering battle, activate [Gluttony Authority] to immediately reduce the enemy's energy by 2 points, while your side gains 2 points of energy, but the energy acquisition efficiency is reduced by 15.6% for 7 seconds.",
      template: "Upon entering battle, activate [Gluttony Authority] to immediately reduce the enemy's energy by 2 points, while your side gains 2 points of energy, but the energy acquisition efficiency is reduced by {0} for 7 seconds.",
      levelValues: [["30%"], ["28.9%"], ["27.8%"], ["26.7%"], ["25.6%"], ["24.4%"], ["23.3%"], ["22.2%"], ["21.1%"], ["20%"], ["18.9%"], ["17.8%"], ["16.7%"], ["15.6%"]],
    },
  },

  // Team Skill
  teamSkill: {
    name: "Combo Skill",
    description: "At the start of battle, reduces the total damage dealt by all enemy units by 3%. For every 800 attack power a character has, this effect increases by 100%, up to a maximum of 500%.",
    requirements: {
      faction: "Bikta",
      element: "Ice",
      alternativeConditions: "Team contains 2 Bikta characters or 2 Ice characters",
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect: "Upon entering battle, the first ultimate skill does not consume energy.",
    },
    {
      level: 2,
      effect: "Beelzebub's skill effect is enhanced, reducing the enemy's energy by 2 and increasing our energy by 1.",
    },
    {
      level: 3,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 4,
      effect: "Our entire party's HP is increased by 20%, and the effects of our ultimate skills [Gluttony] and [Repayment] are increased from 5 seconds to 8 seconds.",
    },
    {
      level: 5,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 6,
      effect: "Our entire party gains 10% increased all resistances, while the enemy's entire party loses 10% increased all resistances.",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "Nutrition Studies",
    image: "NutritionStudies.png",
    stats: {
      hp: "6,000",
      attack: "600",
      defense: "600",
    },
    effects: [  // awakening levels 1-5
      "Increases HP by 24% and increases the attack power of the entire team by 12%. After the wearer uses the skill, they inflict the Drain debuff on all enemies. Drain reduces their energy regeneration efficiency by 6% and increases the energy regeneration efficiency of all allies by 6% for 4 seconds.",
      "Increases HP by 28% and increases the attack power of the entire team by 14%. After the wearer uses the skill, they inflict the Drain debuff on all enemies. Drain reduces their energy regeneration efficiency by 7% and increases the energy regeneration efficiency of all allies by 7% for 4 seconds.",
      "Increases HP by 32% and increases the attack power of the entire team by 16%. After the wearer uses the skill, they inflict the Drain debuff on all enemies. Drain reduces their energy regeneration efficiency by 8% and increases the energy regeneration efficiency of all allies by 8% for 4 seconds.",
      "Increases HP by 36% and increases the attack power of the entire team by 18%. After the wearer uses the skill, they inflict the Drain debuff on all enemies. Drain reduces their energy regeneration efficiency by 9% and increases the energy regeneration efficiency of all allies by 9% for 4 seconds.",
      "Increases HP by 40% and increases the attack power of the entire team by 20%. After the wearer uses the skill, they inflict the Drain debuff on all enemies. Drain reduces their energy regeneration efficiency by 10% and increases the energy regeneration efficiency of all allies by 10% for 4 seconds.",
    ],
    restriction: "Only effective for Disruptor",
  },

  // Character Tags - For search and filtering
  tags: ['Ranged', 'Debuff', 'Energy', 'AOE', 'Team Buff', 'Attack Reduction'],
};

export const gluttonyBeelzebubSEO = {
  title: `${gluttonyBeelzebubData.name} - Zone Nova Character Guide | Nutrition Studies`,
  description: `Complete guide for ${gluttonyBeelzebubData.name}, a ${gluttonyBeelzebubData.rarity} ${gluttonyBeelzebubData.element} ${gluttonyBeelzebubData.class} in Zone Nova. Includes skills, awakenings, and the Nutrition Studies memory card.`,
  keywords:
    'Gluttony - Beelzebub, Zone Nova, Nutrition Studies, Bikta, Ice Disruptor, character guide, skills, awakenings',
};

export default gluttonyBeelzebubData;
