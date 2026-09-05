// Athena Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js
// Instructions: Copy this file to the same directory as your character's .astro file

export const athenaData = {
  // Basic Character Information
  name: 'Athena',
  image: 'Athena.png', // Use format: charactername (e.g., 'penny')
  rarity: 'SSR', // SSR, SR, R
  element: 'Wind', // Fire, Ice, Wind, Holy, Chaos
  class: 'Supporter', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
  role: 'Supporter', // Tank, DPS, Supporter, Disruptor, Healer - Functional description
  faction: 'Otis', // Savir, etc.

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
        materials: [{"name": "Storm Aether Lany.", "amount": 5, "icon": "Icon_Talent_Rankup_Wind_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}],
      },
      {
        level: 9,
        gold: 160000,
        materials: [{"name": "Storm Aether Lany.", "amount": 8, "icon": "Icon_Talent_Rankup_Wind_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 300000,
        materials: [{"name": "Storm Aether Lany.", "amount": 14, "icon": "Icon_Talent_Rankup_Wind_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },

  // Skills
  skills: {
    normal:     {
      name: "Shadowless Snipe",
      cooldown: "1.0s",
      description: "Deals 120% Attack Power as wind damage to a designated enemy unit",
      template: "Deals {0} Attack Power as wind damage to a designated enemy unit",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "War Deity's Command",
      cooldown: "5.0s",
      description: "Attacks a designated enemy unit 3 times, dealing 120% Attack Power as wind damage each time",
      template: "Attacks a designated enemy unit 3 times, dealing {0} Attack Power as wind damage each time",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    ultimate:     {
      name: "Athena's Aegis",
      energyCost: "3",
      cooldown: "1.0s",
      description: "Immediately gain 3 stacks of [Aegis]. While [Aegis] is active, Normal Attacks switch to full-auto mode, continuously firing enhanced bullets.\n\nEach stack of [Aegis] allows firing 12 enhanced bullets. Interrupting Normal Attacks requires consuming 1 stack of [Aegis] to reload.\n\nEach enhanced bullet deals 60% Attack Power as wind damage.\n\nEvery 5 hits with enhanced bullets increase all allied characters' critical rate by 2.4% and Normal Attack damage by 4.9%, stacking up to 10 times, lasting 10 seconds",
      template: "Immediately gain 3 stacks of [Aegis]. While [Aegis] is active, Normal Attacks switch to full-auto mode, continuously firing enhanced bullets.\n\nEach stack of [Aegis] allows firing 12 enhanced bullets. Interrupting Normal Attacks requires consuming 1 stack of [Aegis] to reload.\n\nEach enhanced bullet deals {0} Attack Power as wind damage.\n\nEvery 5 hits with enhanced bullets increase all allied characters' critical rate by {1} and Normal Attack damage by {2}, stacking up to 10 times, lasting 10 seconds",
      levelValues: [["27.5%", "1.1%", "2%"], ["30%", "1.2%", "2.2%"], ["32.5%", "1.3%", "2.4%"], ["35%", "1.4%", "2.7%"], ["37.5%", "1.5%", "2.9%"], ["40%", "1.6%", "3.1%"], ["42.5%", "1.7%", "3.3%"], ["45%", "1.8%", "3.6%"], ["47.5%", "1.9%", "3.8%"], ["50%", "2%", "4%"], ["52.5%", "2.1%", "4.2%"], ["55%", "2.2%", "4.4%"], ["57.5%", "2.3%", "4.7%"], ["60%", "2.4%", "4.9%"]],
    },
    passive:     {
      name: "",
      description: "All of Athena's damage is treated as <b>Normal Attack damage</b>.\n\nEvery 5 Normal Attack damages dealt by Athena increase all allied characters' attack speed by 2.2% and reduce skill cooldown by 1.1%, stacking up to 10 times, lasting 10 seconds.\n\nEvery 10 Normal Attack damages dealt by Athena grant her 1 stack of [Dianmai].\n\nWhen other allied characters deal Normal Attack damage, Athena gains 1 stack of [Dianmai], with a maximum of 1 trigger per character per second.\n\nEvery 10 stacks of [Dianmai] gained by Athena increase team energy by 1 point",
      template: "All of Athena's damage is treated as <b>Normal Attack damage</b>.\n\nEvery 5 Normal Attack damages dealt by Athena increase all allied characters' attack speed by {0} and reduce skill cooldown by {1}, stacking up to 10 times, lasting 10 seconds.\n\nEvery 10 Normal Attack damages dealt by Athena grant her 1 stack of [Dianmai].\n\nWhen other allied characters deal Normal Attack damage, Athena gains 1 stack of [Dianmai], with a maximum of 1 trigger per character per second.\n\nEvery 10 stacks of [Dianmai] gained by Athena increase team energy by 1 point",
      levelValues: [["2.2%", "1.1%"], ["2.2%", "1.1%"], ["2.2%", "1.1%"], ["2.2%", "1.1%"], ["2.2%", "1.1%"], ["2.2%", "1.1%"], ["2.2%", "1.1%"], ["2.2%", "1.1%"], ["2.2%", "1.1%"], ["2.2%", "1.1%"], ["2.2%", "1.1%"], ["2.2%", "1.1%"], ["2.2%", "1.1%"], ["2.2%", "1.1%"]],
    },
  },

  // Team Skill
  teamSkill: {
    name: "Combo Skill",
    description: "At battle start, team damage increases by 10%\nFor every 500 Attack, team damage increases by an additional 5%, up to 6 times",
    requirements: {
      faction: "Otis",
      element: "Wind",
      alternativeConditions: "Team contains 2 Otis characters or 2 Wind characters",
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect: "After any allied character deals Normal Attack damage, Athena deals an additional 50% Attack Power as <color=#01d828>Storm</color> Damage to the target, which cannot crit, triggering up to once per character per second",
    },
    {
      level: 2,
      effect: "Casting an Ultimate Skill grants 6 stacks of [Aegis]",
    },
    {
      level: 3,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 4,
      effect: "When Athena has [Aegis], all allied characters' Damage Taken is reduced by 10%, with Guerrilla and Assaulter classes gaining an additional 10% reduction",
    },
    {
      level: 5,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 6,
      effect: "Athena's Enhanced Bullets deal double damage",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "Awkward Appearance",
    image: "Athenacard",
    stats: {
      hp: "6,000",
      attack: "600",
      defense: "600",
    },
    effects: [  // awakening levels 1-5
      "At the start of battle, all allied characters' damage increases by 24%, with Normal Attack damage additionally increased by 24%\n\nEvery 5 Normal Attack damages dealt by the wearer increases team Attack Power by 24%, lasting 5 seconds",
      "At the start of battle, all allied characters' damage increases by 28%, with Normal Attack damage additionally increased by 28%\n\nEvery 5 Normal Attack damages dealt by the wearer increases team Attack Power by 28%, lasting 5 seconds",
      "At the start of battle, all allied characters' damage increases by 32%, with Normal Attack damage additionally increased by 32%\n\nEvery 5 Normal Attack damages dealt by the wearer increases team Attack Power by 32%, lasting 5 seconds",
      "At the start of battle, all allied characters' damage increases by 36%, with Normal Attack damage additionally increased by 36%\n\nEvery 5 Normal Attack damages dealt by the wearer increases team Attack Power by 36%, lasting 5 seconds",
      "At the start of battle, all allied characters' damage increases by 40%, with Normal Attack damage additionally increased by 40%\n\nEvery 5 Normal Attack damages dealt by the wearer increases team Attack Power by 40%, lasting 5 seconds",
    ],
    restriction: "Only effective for Supporter",
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Range', 'Cooldown Reduction', 'Normal Attack', 'Crit Rate', 'Energy', 'Damage Reduction'],
};

// SEO data for Athena
export const athenaSEO = {
  title: `${athenaData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${athenaData.name}, a ${athenaData.rarity} ${athenaData.element} ${athenaData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default athenaData;
