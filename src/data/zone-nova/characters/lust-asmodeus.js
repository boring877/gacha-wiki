// Zone Nova data for the Lust - Asmodeus character guide page.

export const lustAsmodeusData = {
  // Basic Character Information
  name: 'Lust - Asmodeus',
  image: 'Asmodeus.png',
  rarity: 'SSR',
  element: 'Wind',
  class: 'Attacker',
  role: 'DPS',
  faction: 'Bikta',

  // Base Stats (Level 80)
  stats: {
    hp: "5,040",
    attack: "780",
    defense: "474",
    energyRecovery: '0.25/s',
    critRate: '0%',
    critDmg: '50%',
    maxCritRate: '10.8%',
    maxCritDmg: '62%',
  },
  maxStats: {
    hp: '7,308',
    attack: '1,305',
    defense: '474',
  },
  talentTree: {
    totals: ["ATK +67.4%", "HP +45%", "Crit DMG +12%", "Crit Rate +10.8%"],
    enhancementNodes: [
      {
        name: "Enhancement I",
        rank: 2,
        bonus: "ATK +10%, HP +10%",
        materials: [{"name": "Canopic Jar", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_3.png"}, {"name": "Mother's Hovercharm", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_4.png"}],
        gold: 5000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "ATK +15%, HP +15%",
        materials: [{"name": "Canopic Jar", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_3.png"}, {"name": "Mother's Hovercharm", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_4.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 20000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "ATK +20%, HP +20%",
        materials: [{"name": "Canopic Jar", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_3.png"}, {"name": "Mother's Hovercharm", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_4.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 160000,
      },
    ],
    statNodes: [
      {
        node: "N1",
        stat: "Crit Rate +2.4%",
        unlock: "After E1",
        materials: [{"name": "Canopic Jar", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
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
        materials: [{"name": "Canopic Jar", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 10000,
      },
      {
        node: "N4",
        stat: "Crit DMG +4.8%",
        unlock: "After N1",
        materials: [{"name": "Canopic Jar", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 10000,
      },
      {
        node: "N5",
        stat: "ATK +4.8%",
        unlock: "After N2",
        materials: [{"name": "Canopic Jar", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 20000,
      },
      {
        node: "N6",
        stat: "Crit DMG +7.2%",
        unlock: "After N2",
        materials: [{"name": "Canopic Jar", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 160000,
      },
      {
        node: "N7",
        stat: "Crit Rate +3.6%",
        unlock: "After E2",
        materials: [{"name": "Canopic Jar", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 45000,
      },
      {
        node: "N8",
        stat: "ATK +4.8%",
        unlock: "After E2",
        materials: [{"name": "Canopic Jar", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 45000,
      },
      {
        node: "N9",
        stat: "ATK +6.4%",
        unlock: "Lv 80",
        materials: [{"name": "Canopic Jar", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 160000,
      },
      {
        node: "N10",
        stat: "Crit Rate +4.8%",
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
        materials: [{"name": "Storm Aether", "amount": 3, "icon": "Icon_Talent_Rankup_Wind_1.png"}],
      },
      {
        level: 4,
        gold: 10000,
        materials: [{"name": "Storm Aetherstone", "amount": 3, "icon": "Icon_Talent_Rankup_Wind_2.png"}],
      },
      {
        level: 5,
        gold: 20000,
        materials: [{"name": "Storm Aetherstone", "amount": 5, "icon": "Icon_Talent_Rankup_Wind_2.png"}],
      },
      {
        level: 6,
        gold: 30000,
        materials: [{"name": "Storm Aetherstone", "amount": 7, "icon": "Icon_Talent_Rankup_Wind_2.png"}],
      },
      {
        level: 7,
        gold: 45000,
        materials: [{"name": "Storm Aether Lany.", "amount": 3, "icon": "Icon_Talent_Rankup_Wind_3.png"}],
      },
      {
        level: 8,
        gold: 80000,
        materials: [{"name": "Storm Aether Lany.", "amount": 5, "icon": "Icon_Talent_Rankup_Wind_3.png"}, {"name": "Mother's Hovercharm", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_4.png"}],
      },
      {
        level: 9,
        gold: 160000,
        materials: [{"name": "Storm Aether Lany.", "amount": 8, "icon": "Icon_Talent_Rankup_Wind_3.png"}, {"name": "Mother's Hovercharm", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_4.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 300000,
        materials: [{"name": "Storm Aether Lany.", "amount": 14, "icon": "Icon_Talent_Rankup_Wind_3.png"}, {"name": "Mother's Hovercharm", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_4.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },

  // Skills
  skills: {
    normal:     {
      name: "Wind cutter",
      cooldown: "2.0s",
      description: "Deals 120% attack power as wind damage to the designated enemy unit.",
      template: "Deals {0} attack power as wind damage to the designated enemy unit.",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Wind attack",
      cooldown: "5.0s",
      description: "Deals 5 instances of damage to the target enemy unit, each dealing 156.7% attack power as a wind damage and inflicting [Armor Shatter], reducing their defense by 7.3% for 10 seconds, stacking up to 10 times.",
      template: "Deals 5 instances of damage to the target enemy unit, each dealing {0} attack power as a wind damage and inflicting [Armor Shatter], reducing their defense by {1} for 10 seconds, stacking up to 10 times.",
      levelValues: [["70%", "3%"], ["76.7%", "3.3%"], ["83.3%", "3.7%"], ["90%", "4%"], ["96.7%", "4.3%"], ["103.3%", "4.7%"], ["110%", "5%"], ["116.7%", "5.3%"], ["123.3%", "5.7%"], ["130%", "6%"], ["136.7%", "6.3%"], ["143.3%", "6.7%"], ["150%", "7%"], ["156.7%", "7.3%"]],
    },
    ultimate:     {
      name: "Wind Devour",
      energyCost: "3",
      cooldown: "1.0s",
      description: "Deals 1077.8% of ATK as wind Damage to the target enemy and inflicts the [Wind Damage] debuff, reducing the enemy's incoming healing by 30% and incoming shield value by 50% for 8 seconds. After using her ultimate skill, Asmodeus gains 1 stack of [Desire], reducing Normal Attack cooldown by 25% and Skill cooldown by 10%, up to a maximum of 2 stacks.",
      template: "Deals {0} of ATK as wind Damage to the target enemy and inflicts the [Wind Damage] debuff, reducing the enemy's incoming healing by 30% and incoming shield value by 50% for 8 seconds. After using her ultimate skill, Asmodeus gains 1 stack of [Desire], reducing Normal Attack cooldown by 25% and Skill cooldown by 10%, up to a maximum of 2 stacks.",
      levelValues: [["500%"], ["544.4%"], ["588.9%"], ["633.3%"], ["677.8%"], ["722.2%"], ["766.7%"], ["811.1%"], ["855.6%"], ["900%"], ["944.4%"], ["988.9%"], ["1033.3%"], ["1077.8%"]],
    },
    passive:     {
      name: "Wind Desire",
      description: "When the [Desire] stack is 2, damage taken is reduced by 61.1%.",
      template: "When the [Desire] stack is 2, damage taken is reduced by {0}.",
      levelValues: [["25%"], ["27.8%"], ["30.6%"], ["33.3%"], ["36.1%"], ["38.9%"], ["41.7%"], ["44.4%"], ["47.2%"], ["50%"], ["52.8%"], ["55.6%"], ["58.3%"], ["61.1%"]],
    },
  },

  // Team Skill
  teamSkill: {
    name: "Combo Skill",
    description: "Attack power increased by 20%. At the start of battle, every 15% critical hit rate increases critical hit damage by 8%, up to a maximum of 6 times.",
    requirements: {
      faction: "Bikta",
      element: "Wind",
      alternativeConditions: "Team contains 2 Bikta characters or 2 Wind characters",
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect: "Critical hit rate increased by 10%, first ultimate skill used after entering the arena does not consume energy\nAsmodeus gains 1 stack of [Pleasure] after using a skill, increasing critical hit damage by 12.5%, up to 4 stacks.",
    },
    {
      level: 2,
      effect: "Critical hit damage increased by 30%. When [Desire] stacks are at 2, skill damage is increased by 30%. When [Pleasure] stacks are at 4, damage is increased by 30%.",
    },
    {
      level: 3,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 4,
      effect: "Attack power increased by 20%. When the [Pleasure] stacks reach 4, Asmodeus enters the [Climax] state, increasing skill damage by 30%.",
    },
    {
      level: 5,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 6,
      effect: "The damage dealt ignores 15% of the target's elemental resistance.",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "King of Lust",
    image: "KingOfLust.png",
    stats: {
      hp: "5,040",
      attack: "780",
      defense: "474",
    },
    effects: [  // awakening levels 1-5
      "Critical hit rate increased by 20%, attack power increased by 24%. Each time the wearer's attack hits an enemy, they accumulate 1 stack of [Battle Spirit]. Once [Battle Spirit] reaches 10 stacks, all [Battle Spirit] will be consumed, and the [Penetrating] effect will be gained, increasing critical hit damage dealt by 50% for 5 seconds. [Battle Spirit] will not accumulate while the [Penetrating] effect is active.",
      "Critical hit rate increased by 25%, attack power increased by 28%. Each time the wearer's attack hits an enemy, they accumulate 1 stack of [Battle Spirit]. Once [Battle Spirit] reaches 10 stacks, all [Battle Spirit] will be consumed, and the [Penetrating] effect will be gained, increasing critical hit damage dealt by 50% for 5 seconds. [Battle Spirit] will not accumulate while the [Penetrating] effect is active.",
      "Critical hit rate increased by 30%, attack power increased by 32%. Each time the wearer's attack hits an enemy, they accumulate 1 stack of [Battle Spirit]. Upon reaching 10 stacks of [Battle Spirit], all [Battle Spirit] will be consumed, and the [Penetrating] effect will be gained, increasing critical hit damage dealt by 50% for 5 seconds. [Battle Spirit] will not accumulate while the [Penetrating] effect is active.",
      "Critical hit rate increased by 35%, attack power increased by 36%. Each time the wearer's attack hits an enemy, they accumulate 1 stack of [Battle Spirit]. Once [Battle Spirit] reaches 10 stacks, all [Battle Spirit] will be consumed, and the [Penetrating] effect will be gained, increasing critical hit damage dealt by 50% for 5 seconds. [Battle Spirit] will not accumulate while the [Penetrating] effect is active.",
      "Critical hit rate increased by 40%, attack power increased by 40%. Each time the wearer's attack hits an enemy, they accumulate 1 stack of [Battle Spirit]. Once [Battle Spirit] reaches 10 stacks, all [Battle Spirit] will be consumed, and the [Penetrating] effect will be gained, increasing critical hit damage dealt by 50% for 5 seconds. [Battle Spirit] will not accumulate while the [Penetrating] effect is active.",
    ]]. Once [Battle Spirit] reaches 10 stacks, all [Battle Spirit] will be consumed, and the [Penetrating] effect will be gained, increasing critical hit damage dealt by 50% for 5 seconds. [Battle Spirit] will not accumulate while the [Penetrating] effect is active.",
    ],
    restriction: "Only effective for Attacker",
  },

  // Character Tags - For search and filtering
  tags: ['Crit Rate', 'Crit Damage', 'Defense Reduction', 'Debuff', 'Skill Damage'],
};

export const lustAsmodeusSEO = {
  title: `${lustAsmodeusData.name} - Zone Nova Character Guide | King of Lust`,
  description: `Complete guide for ${lustAsmodeusData.name}, a ${lustAsmodeusData.rarity} ${lustAsmodeusData.element} ${lustAsmodeusData.class} in Zone Nova. Includes skills, awakenings, and the King of Lust memory card.`,
  keywords:
    'Lust - Asmodeus, Zone Nova, King of Lust, Bikta, Wind Warrior, character guide, skills, awakenings',
};

export default lustAsmodeusData;
