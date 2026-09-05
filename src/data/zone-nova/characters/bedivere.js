// Bedivere - Zone Nova Character Data
// SSR Disruptor from Avalon faction with Ice element
// Generated from live master data; skill/passive values at max awakened level 14
export const bedivereData = {
  name: "Bedivere",
  image: "Bedivere.png",
  rarity: 'SSR',
  element: 'Ice',
  class: 'Disruptor',
  role: "Disruptor",
  faction: 'Avalon',
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
    hp: '9,564',
    attack: '1,004',
    defense: '672',
  },
  talentTree: {
    totals: ["ATK +67.4%", "HP +59.4%", "DEF +12%"],
    enhancementNodes: [
      {
        name: "Enhancement I",
        rank: 2,
        bonus: "ATK +10%, HP +10%",
        materials: [{"name": "Holy Grail Teardrop", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_5.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}],
        gold: 5000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "ATK +15%, HP +15%",
        materials: [{"name": "Holy Grail Teardrop", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_5.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 20000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "ATK +20%, HP +20%",
        materials: [{"name": "Holy Grail Teardrop", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_5.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
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
        stat: "ATK +3.2%",
        unlock: "Start",
        materials: [],
        gold: 2500,
      },
      {
        node: "N3",
        stat: "ATK +3.2%",
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
        stat: "ATK +4.8%",
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
        stat: "ATK +4.8%",
        unlock: "After E2",
        materials: [{"name": "Holy Grail Teardrop", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_5.png"}],
        gold: 45000,
      },
      {
        node: "N9",
        stat: "ATK +6.4%",
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
        materials: [{"name": "Frost Aether Lany.", "amount": 5, "icon": "Icon_Talent_Rankup_Ice_3.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}],
      },
      {
        level: 9,
        gold: 160000,
        materials: [{"name": "Frost Aether Lany.", "amount": 8, "icon": "Icon_Talent_Rankup_Ice_3.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 300000,
        materials: [{"name": "Frost Aether Lany.", "amount": 14, "icon": "Icon_Talent_Rankup_Ice_3.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },
  skills: {
    normal:     {
      name: "Edge Testing",
      cooldown: "2.0s",
      description: "Deals ice DMG equal to 120% ATK to the target enemy unit",
      template: "Deals ice DMG equal to {0} ATK to the target enemy unit",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Frost Edge Breaker",
      cooldown: "6.0s",
      description: "Deals ice DMG equal to 235.6% ATK to all enemy units in a fan-shaped area toward the target enemy unit and reduces DEF by 64.8% for 6s.",
      template: "Deals ice DMG equal to {0} ATK to all enemy units in a fan-shaped area toward the target enemy unit and reduces DEF by {1} for {2}s.",
      levelValues: [["120%", "33%", "6"], ["128.9%", "35.4%", "6"], ["137.8%", "37.9%", "6"], ["146.7%", "40.3%", "6"], ["155.6%", "42.8%", "6"], ["164.4%", "45.2%", "6"], ["173.3%", "47.7%", "6"], ["182.2%", "50.1%", "6"], ["191.1%", "52.6%", "6"], ["200%", "55%", "6"], ["208.9%", "57.4%", "6"], ["217.8%", "59.9%", "6"], ["226.7%", "62.3%", "6"], ["235.6%", "64.8%", "6"]],
    },
    ultimate:     {
      name: "Winter Domain",
      energyCost: "3",
      cooldown: "3.0s",
      description: "After a brief action it deals ice DMG equal to 647.8% ATK to all enemy units in a 7m rectangle toward the highest-ATK enemy and reduces Total DMG dealt by 123.7% for 5s.\nCreates [Winter Domain] with a radius of 2.5m around self for 5s.\n[Winter Domain]: Every 0.5s deals ice DMG equal to 64.8% ATK to all enemy units in the area and inflicts [Snow Prison]. Max 3 stacks. Lasts 5s.\n[Snow Prison]: DEF -59.9%. CRIT Rate -27%. CRIT DMG -42.2%.",
      template: "After a brief action it deals ice DMG equal to {1} ATK to all enemy units in a {0}m rectangle toward the highest-ATK enemy and reduces Total DMG dealt by {2} for {3}s.\nCreates [Winter Domain] with a radius of {4}.{5}m around self for {6}s.\n[Winter Domain]: Every 0.5s deals ice DMG equal to {7} ATK to all enemy units in the area and inflicts [Snow Prison]. Max {8} stacks. Lasts {9}s.\n[Snow Prison]: DEF -{10}. CRIT Rate -{11}. CRIT DMG -{12}.",
      levelValues: [["7", "330%", "63%", "5", "2", "5", "5", "33%", "3", "5", "31%", "14%", "22%"], ["7", "354.4%", "67.7%", "5", "2", "5", "5", "35.4%", "3", "5", "33.2%", "15%", "23.6%"], ["7", "378.9%", "72.3%", "5", "2", "5", "5", "37.9%", "3", "5", "35.4%", "16%", "25.1%"], ["7", "403.3%", "77%", "5", "2", "5", "5", "40.3%", "3", "5", "37.7%", "17%", "26.7%"], ["7", "427.8%", "81.7%", "5", "2", "5", "5", "42.8%", "3", "5", "39.9%", "18%", "28.2%"], ["7", "452.2%", "86.3%", "5", "2", "5", "5", "45.2%", "3", "5", "42.1%", "19%", "29.8%"], ["7", "476.7%", "91%", "5", "2", "5", "5", "47.7%", "3", "5", "44.3%", "20%", "31.3%"], ["7", "501.1%", "95.7%", "5", "2", "5", "5", "50.1%", "3", "5", "46.6%", "21%", "32.9%"], ["7", "525.6%", "100.3%", "5", "2", "5", "5", "52.6%", "3", "5", "48.8%", "22%", "34.4%"], ["7", "550%", "105%", "5", "2", "5", "5", "55%", "3", "5", "51%", "23%", "36%"], ["7", "574.4%", "109.7%", "5", "2", "5", "5", "57.4%", "3", "5", "53.2%", "24%", "37.6%"], ["7", "598.9%", "114.3%", "5", "2", "5", "5", "59.9%", "3", "5", "55.4%", "25%", "39.1%"], ["7", "623.3%", "119%", "5", "2", "5", "5", "62.3%", "3", "5", "57.7%", "26%", "40.7%"], ["7", "647.8%", "123.7%", "5", "2", "5", "5", "64.8%", "3", "5", "59.9%", "27%", "42.2%"]],
    },
    passive:     {
      name: "Return the Blow",
      description: "When our side is hit, the attacker gains 1 stacks of [ice Lock].\nEach stack of [ice Lock] increases the attacker's Basic Attack and Skill cooldown by 5.4%.\nWhen [ice Lock] accumulates to 30 stacks, reduce the enemy’s Energy by 2 points and remove all [ice Lock] stacks from them.\nAdditionally, each time the [ice Lock] stack count increases, there is a 4% chance to trigger the following effect:\nReduce the enemy’s Energy by 1 points and remove all [ice Lock] from them.",
      template: "When our side is hit, the attacker gains {0} stacks of [ice Lock].\nEach stack of [ice Lock] increases the attacker's Basic Attack and Skill cooldown by {1}.\nWhen [ice Lock] accumulates to {2} stacks, reduce the enemy’s Energy by {3} points and remove all [ice Lock] stacks from them.\nAdditionally, each time the [ice Lock] stack count increases, there is a {4} chance to trigger the following effect:\nReduce the enemy’s Energy by {5} points and remove all [ice Lock] from them.",
      levelValues: [["1", "2.5%", "30", "2", "4%", "1"], ["1", "2.7%", "30", "2", "4%", "1"], ["1", "2.9%", "30", "2", "4%", "1"], ["1", "3.2%", "30", "2", "4%", "1"], ["1", "3.4%", "30", "2", "4%", "1"], ["1", "3.6%", "30", "2", "4%", "1"], ["1", "3.8%", "30", "2", "4%", "1"], ["1", "4.1%", "30", "2", "4%", "1"], ["1", "4.3%", "30", "2", "4%", "1"], ["1", "4.5%", "30", "2", "4%", "1"], ["1", "4.7%", "30", "2", "4%", "1"], ["1", "4.9%", "30", "2", "4%", "1"], ["1", "5.2%", "30", "2", "4%", "1"], ["1", "5.4%", "30", "2", "4%", "1"]],
    },
  },
  teamSkill: {
    name: "Combo Skill",
    description: "At the start of battle all enemy units lose 8% DEF.\nThis effect gains 100% for every 800 ATK this character has up to a maximum of 500%.",
    requirements: {
      faction: "Avalon",
      element: "Ice",
      alternativeConditions: "Team contains 2 Avalon characters or 2 Ice characters",
    },
  },
  awakenings: [
    {
      level: 1,
      effect: "When [Frost Lock] reaches 30 stacks the current attacker's Energy Recovery Efficiency is additionally reduced by 50% for 6s.",
    },
    {
      level: 2,
      effect: "[Winter Domain] additionally inflicts [Frostbite] on all enemy units in the area every second. Max 3 stacks. Lasts 5s.\n[Frostbite]: DMG Taken +17%.",
    },
    {
      level: 3,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 4,
      effect: "Skill effects additionally reduce the target's All Resistance by 38%.",
    },
    {
      level: 5,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 6,
      effect: "All enemies lose 20% Resistance Penetration and 19% Defense Penetration Rate.",
    },
  ],
  memoryCard: {
    name: "The Knight and the Fuzzy",
    image: "Bediverecard.png",
    stats: {
      hp: "6,000",
      attack: "600",
      defense: "600",
    },
    effects: [  // awakening levels 1-5
      "ATK +24%.\nEnemies hit by the Ultimate gain [Frontline Edict] for 7s. Targets within 3m also gain [Enhanced Frontline Edict].\n[Frontline Edict]: DEF -7.5%. Energy Gain Efficiency -6%.\n[Enhanced Frontline Edict]: DEF -27%. Energy Gain Efficiency -18%.",
      "ATK +28%.\nEnemies hit by the Ultimate gain [Frontline Edict] for 7s. Targets within 3m also gain [Enhanced Frontline Edict].\n[Frontline Edict]: DEF -8.5%. Energy Gain Efficiency -7%.\n[Enhanced Frontline Edict]: DEF -31.5%. Energy Gain Efficiency -21%.",
      "ATK +32%.\nEnemies hit by the Ultimate gain [Frontline Edict] for 7s. Targets within 3m also gain [Enhanced Frontline Edict].\n[Frontline Edict]: DEF -10%. Energy Gain Efficiency -8%.\n[Enhanced Frontline Edict]: DEF -36%. Energy Gain Efficiency -24%.",
      "ATK +36%.\nEnemies hit by the Ultimate gain [Frontline Edict] for 7s. Targets within 3m also gain [Enhanced Frontline Edict].\n[Frontline Edict]: DEF -11%. Energy Gain Efficiency -9%.\n[Enhanced Frontline Edict]: DEF -40.5%. Energy Gain Efficiency -27%.",
      "ATK +40%.\nEnemies hit by the Ultimate gain [Frontline Edict] for 7s. Targets within 3m also gain [Enhanced Frontline Edict].\n[Frontline Edict]: DEF -12.5%. Energy Gain Efficiency -10%.\n[Enhanced Frontline Edict]: DEF -45%. Energy Gain Efficiency -30%.",
    ]] for 7s. Targets within 3m also gain [Enhanced Frontline Edict].",
      "[Frontline Edict]: DEF -12.5%. Energy Gain Efficiency -10%.",
      "[Enhanced Frontline Edict]: DEF -45%. Energy Gain Efficiency -30%.",
    ],
    restriction: "Only effective for Disruptor",
  },
  tags: [
    "Crit Rate",
    "Crit",
    "Energy",
    "DEF",
    "Ice Damage",
  ],
};

export const bedivereSEO = {
  title: `Bedivere - Zone Nova Character Guide | GachaWiki`,
  description: `Complete guide for Bedivere, a SSR Ice Disruptor in Zone Nova. Includes skills, awakenings, the The Knight and the Fuzzy memory card, and optimal build strategies.`,
};

export default bedivereData;