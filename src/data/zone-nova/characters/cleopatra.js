// Cleopatra Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const cleopatraData = {
  // Basic Character Information
  name: 'Cleopatra',
  image: 'Cleopatra.png', // Character image identifier
  rarity: 'SSR',
  element: 'Chaos',
  class: 'Destroyer', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
  role: 'DPS', // Tank, DPS, Supporter, Disruptor, Healer - Functional description
  faction: 'Kemich',

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
        stat: "HP +3.2%",
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
        stat: "DEF +4.8%",
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
        stat: "DEF +7.2%",
        unlock: "After N2",
        materials: [{"name": "Canopic Jar", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 160000,
      },
      {
        node: "N7",
        stat: "HP +4.8%",
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
        stat: "HP +6.4%",
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
        materials: [{"name": "Chaos Aether", "amount": 3, "icon": "Icon_Talent_Rankup_Dark_1.png"}],
      },
      {
        level: 4,
        gold: 10000,
        materials: [{"name": "Chaos Aetherstone", "amount": 3, "icon": "Icon_Talent_Rankup_Dark_2.png"}],
      },
      {
        level: 5,
        gold: 20000,
        materials: [{"name": "Chaos Aetherstone", "amount": 5, "icon": "Icon_Talent_Rankup_Dark_2.png"}],
      },
      {
        level: 6,
        gold: 30000,
        materials: [{"name": "Chaos Aetherstone", "amount": 7, "icon": "Icon_Talent_Rankup_Dark_2.png"}],
      },
      {
        level: 7,
        gold: 45000,
        materials: [{"name": "Chaos Aether Lany.", "amount": 3, "icon": "Icon_Talent_Rankup_Dark_3.png"}],
      },
      {
        level: 8,
        gold: 80000,
        materials: [{"name": "Chaos Aether Lany.", "amount": 5, "icon": "Icon_Talent_Rankup_Dark_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}],
      },
      {
        level: 9,
        gold: 160000,
        materials: [{"name": "Chaos Aether Lany.", "amount": 8, "icon": "Icon_Talent_Rankup_Dark_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 300000,
        materials: [{"name": "Chaos Aether Lany.", "amount": 14, "icon": "Icon_Talent_Rankup_Dark_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },

  // Skills
  skills: {
    normal:     {
      name: "Mad Shadow Corruption",
      cooldown: "2.0s",
      description: "Deals 120% Attack as chaos damage to the targeted enemy unit",
      template: "Deals {0} Attack as chaos damage to the targeted enemy unit",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Hymn of the Sinister",
      cooldown: "5.0s",
      description: "Deals 168% Attack as chaos damage to the target and enemies within a 4-meter radius And applies 1 stack of [Foul Harvest]",
      template: "Deals {0} Attack as chaos damage to the target and enemies within a 4-meter radius And applies 1 stack of [Foul Harvest]",
      levelValues: [["77%"], ["84%"], ["91%"], ["98%"], ["105%"], ["112%"], ["119%"], ["126%"], ["133%"], ["140%"], ["147%"], ["154%"], ["161%"], ["168%"]],
    },
    ultimate:     {
      name: "Dominion Authority: Supreme Rule",
      energyCost: "8",
      cooldown: "1.0s",
      description: "After a 4-second cast, deals 480% Attack as chaos damage to all targets\nFor each stack of damage over time on the target, deals an additional 48% Attack as chaos damage, up to 20 times\nULT damage is considered damage over time",
      template: "After a 4-second cast, deals {0} Attack as chaos damage to all targets\nFor each stack of damage over time on the target, deals an additional {1} Attack as chaos damage, up to 20 times\nULT damage is considered damage over time",
      levelValues: [["220%", "22%"], ["240%", "24%"], ["260%", "26%"], ["280%", "28%"], ["300%", "30%"], ["320%", "32%"], ["340%", "34%"], ["360%", "36%"], ["380%", "38%"], ["400%", "40%"], ["420%", "42%"], ["440%", "44%"], ["460%", "46%"], ["480%", "48%"]],
    },
    passive:     {
      name: "Foul Whispers",
      description: "Each skill cast gains 2 stacks of [Foul Whispers], up to 5 stacks\nWhen an ally's ULT deals damage, consumes [Foul Whispers] to deal 120% Attack as chaos damage to the target And applies 1 stack of [Foul Harvest]\nArea attacks can trigger multiple marks simultaneously\n[Foul Harvest]: Deals 19.2% Attack as chaos damage every 3 seconds, up to 10 stacks",
      template: "Each skill cast gains 2 stacks of [Foul Whispers], up to 5 stacks\nWhen an ally's ULT deals damage, consumes [Foul Whispers] to deal {0} Attack as chaos damage to the target And applies 1 stack of [Foul Harvest]\nArea attacks can trigger multiple marks simultaneously\n[Foul Harvest]: Deals {1} Attack as chaos damage every 3 seconds, up to 10 stacks",
      levelValues: [["55%", "8.8%"], ["60%", "9.6%"], ["65%", "10.4%"], ["70%", "11.2%"], ["75%", "12%"], ["80%", "12.8%"], ["85%", "13.6%"], ["90%", "14.4%"], ["95%", "15.2%"], ["100%", "16%"], ["105%", "16.8%"], ["110%", "17.6%"], ["115%", "18.4%"], ["120%", "19.2%"]],
    },
  },

  // Team Skill
  teamSkill: {
    name: "Combo Skill",
    description: "Self Attack increases by 10%\nAt battle start, every 500 Attack increases self Penetration by 3%, up to 6 times",
    requirements: {
      faction: "Kemich",
      element: "Chaos",
      alternativeConditions: "Team contains 2 Kemich characters or 2 Chaos characters",
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect: "Attack increases by 20%",
    },
    {
      level: 2,
      effect: "When casting an ULT, damage taken decreases by 20% And recover 2 energy after casting",
    },
    {
      level: 3,
      effect: "[Skill] and [Normal Attack] level and level cap +4",
    },
    {
      level: 4,
      effect: "[Damage Over Time] damage increases by 35%",
    },
    {
      level: 5,
      effect: "[ULT] and [Passive] level and level cap +4",
    },
    {
      level: 6,
      effect: "Damage over time ignores 20% of the target's Chaos resistance",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "Reorganizing Revolution",
    image: "Cleopatracard",
    stats: {
      hp: "5,040",
      attack: "780",
      defense: "474",
    },
    effects: [  // awakening levels 1-5
      "Attack increases by 24%, after a skill hits a target, applies one stack of [Corrosion], [Corrosion]: Deals 9% <color=#9754d5>Chaos</color> Damage every 2 seconds, stacks up to 5 times, lasts 10 seconds",
      "Attack increases by 28%, after a skill hits a target, applies one stack of [Corrosion], [Corrosion]: Deals 10.5% <color=#9754d5>Chaos</color> Damage every 2 seconds, stacks up to 5 times, lasts 10 seconds",
      "Attack increases by 32%, after a skill hits a target, applies one stack of [Corrosion], [Corrosion]: Deals 12% <color=#9754d5>Chaos</color> Damage every 2 seconds, stacks up to 5 times, lasts 10 seconds",
      "Attack increases by 36%, after a skill hits a target, applies one stack of [Corrosion], [Corrosion]: Deals 13.5% <color=#9754d5>Chaos</color> Damage every 2 seconds, stacks up to 5 times, lasts 10 seconds",
      "Attack increases by 40%, after a skill hits a target, applies one stack of [Corrosion], [Corrosion]: Deals 15% <color=#9754d5>Chaos</color> Damage every 2 seconds, stacks up to 5 times, lasts 10 seconds",
    ]], [Corrosion]: Deals 15% <color=#9754d5>Chaos</color> Damage every 2 seconds, stacks up to 5 times, lasts 10 seconds",
    ],
    restriction: "Only effective for Destroyer",
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Range', 'DOT', 'AOE', 'Penetration', 'Energy'],
};

// SEO data for Cleopatra
export const cleopatraSEO = {
  title: `${cleopatraData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${cleopatraData.name}, a ${cleopatraData.rarity} ${cleopatraData.element} ${cleopatraData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default cleopatraData;
