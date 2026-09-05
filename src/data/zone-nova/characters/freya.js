// Freya - Zone Nova Character Data
// Ice Destroyer character from Asa faction

export const freyaData = {
  // Basic Character Information
  name: 'Freya',
  image: 'Freya.png',
  rarity: 'SSR',
  element: 'Ice',
  class: 'Destroyer', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
  role: 'DPS', // Tank, DPS, Supporter, Disruptor, Healer - Functional description
  faction: 'Asa',

  // Base Stats (Level 80)
  stats: {
    hp: "5,040",
    attack: "780",
    defense: "474",
    energyRecovery: '0.25/s',
    critRate: '0%',
    critDmg: '50%',
    maxCritRate: '16.8%',
    maxCritDmg: '50%',
  },
  maxStats: {
    hp: '7,308',
    attack: '1,193',
    defense: '474',
  },
  talentTree: {
    totals: ["ATK +53%", "HP +45%", "Crit Rate +16.8%", "Ice DMG +14.4%"],
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
        stat: "Ice DMG +3.2%",
        unlock: "After E1",
        materials: [{"name": "Holy Grail Teardrop", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_5.png"}],
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
        materials: [{"name": "Holy Grail Teardrop", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_5.png"}],
        gold: 10000,
      },
      {
        node: "N4",
        stat: "ATK +3.2%",
        unlock: "After N1",
        materials: [{"name": "Holy Grail Teardrop", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_5.png"}],
        gold: 10000,
      },
      {
        node: "N5",
        stat: "Crit Rate +3.6%",
        unlock: "After N2",
        materials: [{"name": "Holy Grail Teardrop", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_5.png"}],
        gold: 20000,
      },
      {
        node: "N6",
        stat: "ATK +4.8%",
        unlock: "After N2",
        materials: [{"name": "Holy Grail Teardrop", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_5.png"}],
        gold: 160000,
      },
      {
        node: "N7",
        stat: "Ice DMG +4.8%",
        unlock: "After E2",
        materials: [{"name": "Holy Grail Teardrop", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_5.png"}],
        gold: 45000,
      },
      {
        node: "N8",
        stat: "Crit Rate +3.6%",
        unlock: "After E2",
        materials: [{"name": "Holy Grail Teardrop", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_5.png"}],
        gold: 45000,
      },
      {
        node: "N9",
        stat: "Crit Rate +4.8%",
        unlock: "Lv 80",
        materials: [{"name": "Holy Grail Teardrop", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_5.png"}],
        gold: 160000,
      },
      {
        node: "N10",
        stat: "Ice DMG +6.4%",
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
        materials: [{"name": "Frost Aether Lany.", "amount": 5, "icon": "Icon_Talent_Rankup_Ice_3.png"}, {"name": "Mother's Hovercharm", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_4.png"}],
      },
      {
        level: 9,
        gold: 160000,
        materials: [{"name": "Frost Aether Lany.", "amount": 8, "icon": "Icon_Talent_Rankup_Ice_3.png"}, {"name": "Mother's Hovercharm", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_4.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 300000,
        materials: [{"name": "Frost Aether Lany.", "amount": 14, "icon": "Icon_Talent_Rankup_Ice_3.png"}, {"name": "Mother's Hovercharm", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_4.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },

  // Character Skills
  skills: {
    normal:     {
      name: "Golden Wind Assault",
      cooldown: "2.0s",
      description: "Deal 72% attack damage of ice damage to the designated enemy unit.",
      template: "Deal {0} attack damage of ice damage to the designated enemy unit.",
      levelValues: [["33%"], ["36%"], ["39%"], ["42%"], ["45%"], ["48%"], ["51%"], ["54%"], ["57%"], ["60%"], ["63%"], ["66%"], ["69%"], ["72%"]],
    },
    auto:     {
      name: "Golden Wind Rhapsody",
      cooldown: "5.0s",
      description: "Deal 120% attack damage of ice damage to the designated enemy unit and other targets within a 3-meter radius around the target.\nThis damage is considered normal attack damage.",
      template: "Deal {0} attack damage of ice damage to the designated enemy unit and other targets within a 3-meter radius around the target.\nThis damage is considered normal attack damage.",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    ultimate:     {
      name: "Golden Wind Bind",
      energyCost: "3",
      cooldown: "1.0s",
      description: "Enter the [Golden Desire] state, lasting 8 seconds:\nNormal attacks deal an additional 60% of original normal attack damage to the target and other targets within a 5-meter radius around the target.\nBase attack speed increases by 50%.\nAttack speed increases by 60%.\n\nWhile in the [Golden Desire] state, skills cannot be used, but [Frozen Star] can be used\n[Frozen Star]: Deal 480% attack damage of ice damage to the designated enemy unit. This damage is considered normal attack damage.",
      template: "Enter the [Golden Desire] state, lasting 8 seconds:\nNormal attacks deal an additional 60% of original normal attack damage to the target and other targets within a 5-meter radius around the target.\nBase attack speed increases by 50%.\nAttack speed increases by {0}.\n\nWhile in the [Golden Desire] state, skills cannot be used, but [Frozen Star] can be used\n[Frozen Star]: Deal {1} attack damage of ice damage to the designated enemy unit. This damage is considered normal attack damage.",
      levelValues: [["27.5%", "220%"], ["30%", "240%"], ["32.5%", "260%"], ["35%", "280%"], ["37.5%", "300%"], ["40%", "320%"], ["42.5%", "340%"], ["45%", "360%"], ["47.5%", "380%"], ["50%", "400%"], ["52.5%", "420%"], ["55%", "440%"], ["57.5%", "460%"], ["60%", "480%"]],
    },
    passive:     {
      name: "Deity War Dance",
      description: "All normal attack damage can additionally inflict 24% attack damage of ice damage.\n\nAfter every 10 normal attacks or skill casts, the user's normal attacks targeting the primary target become 5 segmented hits, each dealing 20% of the original normal attack damage, lasting 5 seconds.",
      template: "All normal attack damage can additionally inflict {0} attack damage of ice damage.\n\nAfter every 10 normal attacks or skill casts, the user's normal attacks targeting the primary target become 5 segmented hits, each dealing 20% of the original normal attack damage, lasting 5 seconds.",
      levelValues: [["11%"], ["12%"], ["13%"], ["14%"], ["15%"], ["16%"], ["17%"], ["18%"], ["19%"], ["20%"], ["21%"], ["22%"], ["23%"], ["24%"]],
    },
  },

  // Team Skill
  teamSkill: {
    name: "Combo Skill",
    description: "Self Critical Rate increases by 7.5%\nAt battle start, every 15% Critical Rate increases self Critical Damage by 7.5%, up to 6 times",
    requirements: {
      faction: "Asa",
      element: "Ice",
      alternativeConditions: "Team contains 2 Asa characters or 2 Ice characters",
    },
  },

  // Awakening Effects
  awakenings: [
    {
      level: 1,
      effect: "While in the [Golden Desire] state, attack power increases by 30%, and damage taken is reduced by 30%.",
    },
    {
      level: 2,
      effect: "Upon entering battle, immediately enter the [Golden Desire] state.\nUsing [Frozen Star] also refreshes the duration of the [Golden Desire] state.\nThe additional damage in the [Golden Desire] state increases from 60% of original normal attack damage to 80%.",
    },
    {
      level: 3,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 4,
      effect: "<color=#1ec1ff>Frost</color> damage increases by 30%.",
    },
    {
      level: 5,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 6,
      effect: "Freya's normal attack damage penetrates 20% of frost resistance.\nAfter every 10 normal attacks or skill casts, deal 100% attack damage as <color=#1ec1ff>frost</color> damage to the designated enemy unit and other targets within a 3-meter radius around the target.",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "The Servant's Aspiration",
    image: "Freyacard",
    stats: {
      hp: "5,040",
      attack: "780",
      defense: "474",
    },
    effects: [  // awakening levels 1-5
      "Critical Damage increases by 36%.\nFor each enemy unit present on the field, normal attack damage increases by 6%, up to a maximum of 4 times.",
      "Critical Damage increases by 45%. \nFor each enemy unit present on the field, normal attack damage increases by 7.5%, up to a maximum of 4 times.",
      "Critical Damage increases by 54%. \nFor each enemy unit present on the field, normal attack damage increases by 9%, up to a maximum of 4 times.",
      "Critical Damage increases by 63%. \nFor each enemy unit present on the field, normal attack damage increases by 10.5%, up to a maximum of 4 times.",
      "Critical Damage increases by 72%. \nFor each enemy unit present on the field, normal attack damage increases by 12%, up to a maximum of 4 times.",
    ],
    restriction: "Only effective for Destroyer",
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Ranged', 'Crit Damage', 'Crit Rate', 'Normal Attack', 'Attack Speed', 'AOE'],
};

// SEO data for Freya
export const freyaSEO = {
  title: 'Freya - Zone Nova Character Guide | GachaWiki',
  description:
    'Complete guide for Freya in Zone Nova. Learn about her Golden Desire state, ice damage abilities, critical rate synergies, and optimal build strategies for this powerful Asa faction ice mage.',
};

// Export default for easy importing
export default freyaData;
