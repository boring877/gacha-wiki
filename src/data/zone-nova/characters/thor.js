// Thor Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const thorData = {
  // Basic Character Information
  name: 'Thor',
  image: 'Thor.png', // Use format: charactername (e.g., 'penny')
  rarity: 'SSR', // SSR, SR, R
  element: 'Holy', // Fire, Ice, Wind, Holy, Chaos
  class: 'Tank', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
  role: 'Tank', // Tank, DPS, Supporter, Disruptor, Healer - Functional description
  faction: 'Asa', // Asa Norse mythology faction

  // Base Stats (Level 80)
  stats: {
    hp: "6,600",
    attack: "480",
    defense: "690",
    energyRecovery: '0.25/s',
    critRate: '0%',
    critDmg: '50%',
    maxCritRate: '0%',
    maxCritDmg: '50%',
  },
  maxStats: {
    hp: '10,520',
    attack: '696',
    defense: '1,004',
  },
  talentTree: {
    totals: ["HP +59.4%", "DEF +45.6%", "ATK +45%"],
    enhancementNodes: [
      {
        name: "Enhancement I",
        rank: 2,
        bonus: "ATK +10%, HP +10%",
        materials: [{"name": "Holy Grail Teardrop", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_5.png"}, {"name": "Mother's Hovercharm", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_4.png"}],
        gold: 5000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "ATK +15%, HP +15%",
        materials: [{"name": "Holy Grail Teardrop", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_5.png"}, {"name": "Mother's Hovercharm", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_4.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 20000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "ATK +20%, HP +20%",
        materials: [{"name": "Holy Grail Teardrop", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_5.png"}, {"name": "Mother's Hovercharm", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_4.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 160000,
      },
    ],
    statNodes: [
      {
        node: "N1",
        stat: "HP +3.2%",
        unlock: "After E1",
        materials: [{"name": "Holy Grail Teardrop", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_5.png"}],
        gold: 5000,
      },
      {
        node: "N2",
        stat: "DEF +4.8%",
        unlock: "Start",
        materials: [],
        gold: 2500,
      },
      {
        node: "N3",
        stat: "DEF +4.8%",
        unlock: "After N1",
        materials: [{"name": "Holy Grail Teardrop", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_5.png"}],
        gold: 10000,
      },
      {
        node: "N4",
        stat: "DEF +4.8%",
        unlock: "After N1",
        materials: [{"name": "Holy Grail Teardrop", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_5.png"}],
        gold: 10000,
      },
      {
        node: "N5",
        stat: "DEF +7.2%",
        unlock: "After N2",
        materials: [{"name": "Holy Grail Teardrop", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_5.png"}],
        gold: 20000,
      },
      {
        node: "N6",
        stat: "DEF +7.2%",
        unlock: "After N2",
        materials: [{"name": "Holy Grail Teardrop", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_5.png"}],
        gold: 160000,
      },
      {
        node: "N7",
        stat: "HP +4.8%",
        unlock: "After E2",
        materials: [{"name": "Holy Grail Teardrop", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_5.png"}],
        gold: 45000,
      },
      {
        node: "N8",
        stat: "DEF +7.2%",
        unlock: "After E2",
        materials: [{"name": "Holy Grail Teardrop", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_5.png"}],
        gold: 45000,
      },
      {
        node: "N9",
        stat: "DEF +9.6%",
        unlock: "Lv 80",
        materials: [{"name": "Holy Grail Teardrop", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_5.png"}],
        gold: 160000,
      },
      {
        node: "N10",
        stat: "HP +6.4%",
        unlock: "Lv 75",
        materials: [{"name": "Holy Grail Teardrop", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_5.png"}],
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
        materials: [{"name": "Holy Aether Lany.", "amount": 5, "icon": "Icon_Talent_Rankup_Light_3.png"}, {"name": "Mother's Hovercharm", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_4.png"}],
      },
      {
        level: 9,
        gold: 160000,
        materials: [{"name": "Holy Aether Lany.", "amount": 8, "icon": "Icon_Talent_Rankup_Light_3.png"}, {"name": "Mother's Hovercharm", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_4.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 300000,
        materials: [{"name": "Holy Aether Lany.", "amount": 14, "icon": "Icon_Talent_Rankup_Light_3.png"}, {"name": "Mother's Hovercharm", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_4.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },

  // Skills
  skills: {
    normal:     {
      name: "Justice Crush",
      cooldown: "2.0s",
      description: "Deals 120% defense power as holy damage to the targeted enemy unit.",
      template: "Deals {0} defense power as holy damage to the targeted enemy unit.",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Divine Judgment Echo",
      cooldown: "10.0s",
      description: "Raise the hammer to absorb lightning power, granting all allied characters a shield equal to 60% defense power and reducing their damage taken by 12%. Linked allies gain an additional 12% damage reduction.\nThor’s next three normal attacks after casting a skill can apply [Divine Judgment].",
      template: "Raise the hammer to absorb lightning power, granting all allied characters a shield equal to {0} defense power and reducing their damage taken by {1}. Linked allies gain an additional {1} damage reduction.\nThor’s next three normal attacks after casting a skill can apply [Divine Judgment].",
      levelValues: [["27.5%", "5.5%"], ["30%", "6%"], ["32.5%", "6.5%"], ["35%", "7%"], ["37.5%", "7.5%"], ["40%", "8%"], ["42.5%", "8.5%"], ["45%", "9%"], ["47.5%", "9.5%"], ["50%", "10%"], ["52.5%", "10.5%"], ["55%", "11%"], ["57.5%", "11.5%"], ["60%", "12%"]],
    },
    ultimate:     {
      name: "Hammer of Divine Punishment",
      energyCost: "2",
      cooldown: "1.0s",
      description: "Leap onto the target, charging for 1 second before dealing 120% defense power as holy damage to the current target and [interrupting] their casting skill.\n[Enhanced Ultimate Skill]: Leap onto the target, charging for 1 second before dealing 240% defense power as holy damage to the target and enemies within a 5-meter radius, [interrupting] their casting skill and increasing their damage taken by 24% for 10 seconds.\nAfter Thor casts an ultimate skill, all allied characters’ damage taken is reduced by 24% for 10 seconds.",
      template: "Leap onto the target, charging for 1 second before dealing {0} defense power as holy damage to the current target and [interrupting] their casting skill.\n[Enhanced Ultimate Skill]: Leap onto the target, charging for 1 second before dealing {1} defense power as holy damage to the target and enemies within a 5-meter radius, [interrupting] their casting skill and increasing their damage taken by {2} for 10 seconds.\nAfter Thor casts an ultimate skill, all allied characters’ damage taken is reduced by {3} for 10 seconds.",
      levelValues: [["55%", "110%", "11%", "11%"], ["60%", "120%", "12%", "12%"], ["65%", "130%", "13%", "13%"], ["70%", "140%", "14%", "14%"], ["75%", "150%", "15%", "15%"], ["80%", "160%", "16%", "16%"], ["85%", "170%", "17%", "17%"], ["90%", "180%", "18%", "18%"], ["95%", "190%", "19%", "19%"], ["100%", "200%", "20%", "20%"], ["105%", "210%", "21%", "21%"], ["110%", "220%", "22%", "22%"], ["115%", "230%", "23%", "23%"], ["120%", "240%", "24%", "24%"]],
    },
    passive:     {
      name: "Thunder Hub Light Trail",
      description: "Upon entering battle, immediately gain a shield equal to 30% of max HP and link with the allied unit with the lowest defense.\nWhen self or linked allies take damage, Thor gains 1 stack of [Thunder Hub], with each character triggering at most once per second.\nWhen [Thunder Hub] reaches 10 stacks, [Enhanced Ultimate Skill] can be cast, and [Thunder Hub] no longer stacks when the enhanced ultimate is available.\nDealing damage with an ultimate skill can apply [Divine Judgment].\n[Divine Judgment]: Deals 19.2% defense power as holy damage every 3 seconds, up to 5 stacks.\nShields can stack up to 30% of the character’s max HP.",
      template: "Upon entering battle, immediately gain a shield equal to 30% of max HP and link with the allied unit with the lowest defense.\nWhen self or linked allies take damage, Thor gains 1 stack of [Thunder Hub], with each character triggering at most once per second.\nWhen [Thunder Hub] reaches 10 stacks, [Enhanced Ultimate Skill] can be cast, and [Thunder Hub] no longer stacks when the enhanced ultimate is available.\nDealing damage with an ultimate skill can apply [Divine Judgment].\n[Divine Judgment]: Deals {0} defense power as holy damage every 3 seconds, up to 5 stacks.\nShields can stack up to 30% of the character’s max HP.",
      levelValues: [["8.8%"], ["9.6%"], ["10.4%"], ["11.2%"], ["12%"], ["12.8%"], ["13.6%"], ["14.4%"], ["15.2%"], ["16%"], ["16.8%"], ["17.6%"], ["18.4%"], ["19.2%"]],
    },
  },

  // Team Skill
  teamSkill: {
    name: "Combo Skill",
    description: "Self Defense increases by 15%\nAt battle start, every 500 Defense reduces team damage taken by 1.5%, up to 6 times",
    requirements: {
      faction: "Asa",
      element: "Holy",
      alternativeConditions: "Team contains 2 Asa characters or 2 Holy characters",
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect: "Immediately gain 10 stacks of [Thunder Hub] upon entering battle.\nLink with the two allied units with the lowest defense.",
    },
    {
      level: 2,
      effect: "Linked allied units gain 30% increased attack power.\nAfter casting an enhanced ultimate skill, grant all allied characters a shield equal to 10% of defense every 2 seconds for 10 seconds.",
    },
    {
      level: 3,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 4,
      effect: "Defense increases by 45%.",
    },
    {
      level: 5,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 6,
      effect: "All resistances increase by 15%, with an additional 15% holy resistance.\nTargets hit by Thor’s ultimate skill gain 1 stack of [Divine Judgment] per second for the next 5 seconds.",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "Suspect in the Night",
    image: "Thorcard",
    stats: {
      hp: "6,600",
      attack: "480",
      defense: "690",
    },
    effects: [  // awakening levels 1-5
      "Defense increases by 48%.\nWhen allied characters with a shield take damage, defense increases by 48%.\nAfter the equipped character deals damage over time to an enemy target, the target takes 5% increased damage for 5 seconds.",
      "Defense increases by 52%.\nWhen allied characters with a shield take damage, defense increases by 52%.\nAfter the equipped character deals damage over time to an enemy target, the target takes 7.5% increased damage for 5 seconds.",
      "Defense increases by 56%.\nWhen allied characters with a shield take damage, defense increases by 56%.\nAfter the equipped character deals damage over time to an enemy target, the target takes 10% increased damage for 5 seconds.",
      "Defense increases by 60%.\nWhen allied characters with a shield take damage, defense increases by 60%.\nAfter the equipped character deals damage over time to an enemy target, the target takes 12.5% increased damage for 5 seconds.",
      "Defense increases by 64%.\nWhen allied characters with a shield take damage, defense increases by 64%.\nAfter the equipped character deals damage over time to an enemy target, the target takes 15% increased damage for 5 seconds.",
    ],
    restriction: "Only effective for Tank",
  },

  // Character Tags - Reusable across multiple characters
  tags: [
    'Enhanced Ultimate',
    'Defense Scaling',
    'DOT',
    'Melee',
    'Interrupt',
    'Shield',
    'Continuous Shielding',
    'Damage Reduction',
    'Damage Taken Increase',
    'AOE Shielding',
  ],
};

// SEO data for Thor
export const thorSEO = {
  title: `${thorData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${thorData.name}, a ${thorData.rarity} ${thorData.element} ${thorData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default thorData;
