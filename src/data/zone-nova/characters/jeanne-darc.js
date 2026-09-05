// Jeanne D Arc Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const jeanneDArcData = {
  // Basic Character Information
  name: 'Jeanne D Arc',
  chineseName: '贞德',
  image: 'JoanofArc.png', // Use explicit PNG filename
  rarity: 'SSR', // SSR, SR, R
  element: 'Wind', // Fire, Ice, Wind, Holy, Chaos
  class: 'Healer', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
  role: 'Healer', // Tank, DPS, Supporter, Disruptor, Healer - Functional description
  faction: 'Avalon', // Avalon (亚瓦隆)

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
    hp: '9,180',
    attack: '1,004',
    defense: '729',
  },
  talentTree: {
    totals: ["ATK +67.4%", "HP +53%", "DEF +21.6%"],
    enhancementNodes: [
      {
        name: "Enhancement I",
        rank: 2,
        bonus: "ATK +10%, HP +10%",
        materials: [{"name": "Scarab Stone", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_4.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}],
        gold: 5000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "ATK +15%, HP +15%",
        materials: [{"name": "Scarab Stone", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_4.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 20000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "ATK +20%, HP +20%",
        materials: [{"name": "Scarab Stone", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_4.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 160000,
      },
    ],
    statNodes: [
      {
        node: "N1",
        stat: "DEF +4.8%",
        unlock: "After E1",
        materials: [{"name": "Scarab Stone", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
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
        materials: [{"name": "Scarab Stone", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 10000,
      },
      {
        node: "N4",
        stat: "HP +3.2%",
        unlock: "After N1",
        materials: [{"name": "Scarab Stone", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 10000,
      },
      {
        node: "N5",
        stat: "ATK +4.8%",
        unlock: "After N2",
        materials: [{"name": "Scarab Stone", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 20000,
      },
      {
        node: "N6",
        stat: "HP +4.8%",
        unlock: "After N2",
        materials: [{"name": "Scarab Stone", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 160000,
      },
      {
        node: "N7",
        stat: "DEF +7.2%",
        unlock: "After E2",
        materials: [{"name": "Scarab Stone", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 45000,
      },
      {
        node: "N8",
        stat: "ATK +4.8%",
        unlock: "After E2",
        materials: [{"name": "Scarab Stone", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 45000,
      },
      {
        node: "N9",
        stat: "ATK +6.4%",
        unlock: "Lv 80",
        materials: [{"name": "Scarab Stone", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 160000,
      },
      {
        node: "N10",
        stat: "DEF +9.6%",
        unlock: "Lv 75",
        materials: [{"name": "Scarab Stone", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
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
        materials: [{"name": "Storm Aether Lany.", "amount": 5, "icon": "Icon_Talent_Rankup_Wind_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}],
      },
      {
        level: 9,
        gold: 160000,
        materials: [{"name": "Storm Aether Lany.", "amount": 8, "icon": "Icon_Talent_Rankup_Wind_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 300000,
        materials: [{"name": "Storm Aether Lany.", "amount": 14, "icon": "Icon_Talent_Rankup_Wind_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },

  // Skills
  skills: {
    normal:     {
      name: "Holy Banner Thrust",
      cooldown: "2.0s",
      description: "Deals 120% Attack as wind damage to the targeted enemy unit",
      template: "Deals {0} Attack as wind damage to the targeted enemy unit",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Banner of Holy Light",
      cooldown: "8.0s",
      description: "After a brief cast, heals the allied unit with the lowest HP percentage, restoring 81.2% Attack + 185 HP, 3 times consecutively",
      template: "After a brief cast, heals the allied unit with the lowest HP percentage, restoring {0} Attack + {1} HP, 3 times consecutively",
      levelValues: [["61%", "185"], ["62.6%", "185"], ["64.1%", "185"], ["65.7%", "185"], ["67.2%", "185"], ["68.8%", "185"], ["70.3%", "185"], ["71.9%", "185"], ["73.4%", "185"], ["75%", "370"], ["76.6%", "185"], ["78.1%", "185"], ["79.7%", "185"], ["81.2%", "185"]],
    },
    ultimate:     {
      name: "Divine Heavenly Revelation",
      energyCost: "8",
      cooldown: "1.0s",
      description: "Restores 91.7% Attack + 278 HP to all allied units And adds 3 stacks of [holy Healing] to self, up to 4 stacks",
      template: "Restores {0} Attack + {1} HP to all allied units And adds 3 stacks of [holy Healing] to self, up to 4 stacks",
      levelValues: [["70%", "278"], ["71.7%", "278"], ["73.3%", "278"], ["75%", "278"], ["76.7%", "278"], ["78.3%", "278"], ["80%", "278"], ["81.7%", "278"], ["83.3%", "278"], ["85%", "555"], ["86.7%", "278"], ["88.3%", "278"], ["90%", "278"], ["91.7%", "278"]],
    },
    passive:     {
      name: "Holy Blood Healing",
      description: "When an allied unit is attacked, consumes 1 stack of [holy Healing] to restore 119.8% Attack + 185 HP to that unit, with a 1-second cooldown per unit\nWhen an allied unit enters a dying state, revives them after 5 seconds, restoring 286.7% Attack + 1110 HP, once per battle",
      template: "When an allied unit is attacked, consumes 1 stack of [holy Healing] to restore {0} Attack + {1} HP to that unit, with a 1-second cooldown per unit\nWhen an allied unit enters a dying state, revives them after 5 seconds, restoring {2} Attack + {3} HP, once per battle",
      levelValues: [["88%", "185", "135%", "1110"], ["90.4%", "185", "146.7%", "1110"], ["92.9%", "185", "158.3%", "1110"], ["95.3%", "185", "170%", "1110"], ["97.8%", "185", "181.7%", "1110"], ["100.2%", "185", "193.3%", "1110"], ["102.7%", "185", "205%", "1110"], ["105.1%", "185", "216.7%", "1110"], ["107.6%", "185", "228.3%", "1110"], ["110%", "370", "240%", "2220"], ["112.4%", "185", "251.7%", "1110"], ["114.9%", "185", "263.3%", "1110"], ["117.3%", "185", "275%", "1110"], ["119.8%", "185", "286.7%", "1110"]],
    },
  },

  // Team Skill
  teamSkill: {
    name: "Combo Skill",
    description: "Self Attack increases by 10%\nAt battle start, every 500 Attack increases self Healing by 5%, up to 6 times",
    requirements: {
      faction: "Avalon",
      element: "Wind",
      alternativeConditions: "Team contains 2 Avalon characters or 2 Wind characters",
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect: "After casting an ULT, gain one stack of [Holy Healing]",
    },
    {
      level: 2,
      effect: "After consuming [Holy Healing] to heal a target, the target's damage taken decreases by 10% for 5 seconds, extending duration on repeat triggers",
    },
    {
      level: 3,
      effect: "[Skill] and [Normal Attack] level and level cap +4",
    },
    {
      level: 4,
      effect: "Healing increases by 37.5%",
    },
    {
      level: 5,
      effect: "[ULT] and [Passive] level and level cap +4",
    },
    {
      level: 6,
      effect: "Revival count increases by one",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "Her Truest Self",
    image: "JoanofArccard",
    stats: {
      hp: "6,000",
      attack: "600",
      defense: "600",
    },
    effects: [  // awakening levels 1-5
      "Healing increases by 30%, when casting a skill or ULT for 1/2/3 seconds, Healing increases by an additional 15/30/45%",
      "Healing increases by 35%, when casting a skill or ULT for 1/2/3 seconds, Healing increases by an additional 17.5/35/52.5%",
      "Healing increases by 40%, when casting a skill or ULT for 1/2/3 seconds, Healing increases by an additional 20/40/60%",
      "Healing increases by 45%, when casting a skill or ULT for 1/2/3 seconds, Healing increases by an additional 22.5/45/67.5%",
      "Healing increases by 50%, when casting a skill or ULT for 1/2/3 seconds, Healing increases by an additional 25/50/75%",
    ],
    restriction: "Only effective for Healer",
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Range', 'Healing', 'Revival', 'Reduced Damage', 'Continuously Heals'],
};

// SEO data for Jeanne D Arc
export const jeanneDArcSEO = {
  title: `${jeanneDArcData.name} (${jeanneDArcData.chineseName}) - Zone Nova Character Guide`,
  description: `Complete guide for ${jeanneDArcData.name}, a ${jeanneDArcData.rarity} ${jeanneDArcData.element} ${jeanneDArcData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export legacy structure for character registry compatibility
export const jeanneDArc = {
  id: 'jeanne-darc',
  name: 'Jeanne D Arc',
  chineseName: '贞德',
  rarity: 'SSR',
  element: 'Wind',
  role: 'Healer',
  faction: 'Avalon',
  chineseFaction: '亚瓦隆',
  maxLevel: 80,

  baseStats: {
    hp: 9180,
    attack: 1004,
    defense: 729,
    energyRecovery: 0.25,
    critRate: 0,
    critDamage: 50,
  },

  images: {
    portrait: '/images/characters/Jeanne-dArc.jpg',
    card: '/images/characters/Jeanne-dArccard.jpg',
  },

  tags: ['Healer', 'Support', 'Revival', 'Avalon', 'Wind'],
};

// Export default for easy importing
export default jeanneDArcData;
