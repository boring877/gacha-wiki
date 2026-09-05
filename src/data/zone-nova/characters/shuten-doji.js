// Shuten-doji - Zone Nova Character Data
// Wind DPS Destroyer character from Heikyo Castle faction

export const shutenDojiData = {
  // Basic Character Information
  name: 'Shuten-doji',
  image: 'Shuten-doji.png',
  rarity: 'SSR',
  element: 'Wind',
  class: 'Destroyer', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
  role: 'DPS', // Tank, DPS, Supporter, Disruptor, Healer - Functional description
  faction: 'Heikyo Castle',

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
    hp: '7,711',
    attack: '1,305',
    defense: '474',
  },
  talentTree: {
    totals: ["ATK +67.4%", "HP +53%", "Wind DMG +14.4%"],
    enhancementNodes: [
      {
        name: "Enhancement I",
        rank: 2,
        bonus: "ATK +10%, HP +10%",
        materials: [{"name": "High-Precision Chip", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_2.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}],
        gold: 5000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "ATK +15%, HP +15%",
        materials: [{"name": "High-Precision Chip", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_2.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 20000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "ATK +20%, HP +20%",
        materials: [{"name": "High-Precision Chip", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_2.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 160000,
      },
    ],
    statNodes: [
      {
        node: "N1",
        stat: "Wind DMG +3.2%",
        unlock: "After E1",
        materials: [{"name": "High-Precision Chip", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
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
        materials: [{"name": "High-Precision Chip", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 10000,
      },
      {
        node: "N4",
        stat: "HP +3.2%",
        unlock: "After N1",
        materials: [{"name": "High-Precision Chip", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 10000,
      },
      {
        node: "N5",
        stat: "ATK +4.8%",
        unlock: "After N2",
        materials: [{"name": "High-Precision Chip", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 20000,
      },
      {
        node: "N6",
        stat: "HP +4.8%",
        unlock: "After N2",
        materials: [{"name": "High-Precision Chip", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 160000,
      },
      {
        node: "N7",
        stat: "Wind DMG +4.8%",
        unlock: "After E2",
        materials: [{"name": "High-Precision Chip", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 45000,
      },
      {
        node: "N8",
        stat: "ATK +4.8%",
        unlock: "After E2",
        materials: [{"name": "High-Precision Chip", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 45000,
      },
      {
        node: "N9",
        stat: "ATK +6.4%",
        unlock: "Lv 80",
        materials: [{"name": "High-Precision Chip", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_2.png"}],
        gold: 160000,
      },
      {
        node: "N10",
        stat: "Wind DMG +6.4%",
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
        materials: [{"name": "Storm Aether Lany.", "amount": 5, "icon": "Icon_Talent_Rankup_Wind_3.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}],
      },
      {
        level: 9,
        gold: 160000,
        materials: [{"name": "Storm Aether Lany.", "amount": 8, "icon": "Icon_Talent_Rankup_Wind_3.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 300000,
        materials: [{"name": "Storm Aether Lany.", "amount": 14, "icon": "Icon_Talent_Rankup_Wind_3.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },

  // Character Skills
  skills: {
    normal:     {
      name: "Storm Cannon",
      cooldown: "2.0s",
      description: "Deals 73.3% attack power as wind damage to the designated enemy unit and nearby enemy units.",
      template: "Deals {0} attack power as wind damage to the designated enemy unit and nearby enemy units.",
      levelValues: [["30%"], ["33.3%"], ["36.7%"], ["40%"], ["43.3%"], ["46.7%"], ["50%"], ["53.3%"], ["56.7%"], ["60%"], ["63.3%"], ["66.7%"], ["70%"], ["73.3%"]],
    },
    auto:     {
      name: "Piercing Gun",
      cooldown: "5.0s",
      description: "Targeting a designated enemy unit, deals 122.2% attack power as wind damage to a rectangular area in front of the target and inflicts 1 stack of [Wind Evil], lasting 10 seconds.\n[Wind Evil]: Deals 24.4% attack power as wind damage per second, stacking up to 4 times, lasting 10 seconds.",
      template: "Targeting a designated enemy unit, deals {0} attack power as wind damage to a rectangular area in front of the target and inflicts 1 stack of [Wind Evil], lasting 10 seconds.\n[Wind Evil]: Deals {1} attack power as wind damage per second, stacking up to 4 times, lasting 10 seconds.",
      levelValues: [["50%", "10%"], ["55.6%", "11.1%"], ["61.1%", "12.2%"], ["66.7%", "13.3%"], ["72.2%", "14.4%"], ["77.8%", "15.6%"], ["83.3%", "16.7%"], ["88.9%", "17.8%"], ["94.4%", "18.9%"], ["100%", "20%"], ["105.6%", "21.1%"], ["111.1%", "22.2%"], ["116.7%", "23.3%"], ["122.2%", "24.4%"]],
    },
    ultimate:     {
      name: "Scattered Flower Gun",
      energyCost: "2",
      cooldown: "1.0s",
      description: "Deals 244.4% attack damage as a wind to the designated enemy unit and nearby enemies.\nWhen the target has full stacks of [Wind Evil], additionally inflicts [Evil Bone]. If the target has less than 4 stacks of [Wind Evil], then 1 stack of [Wind Evil] will be applied.\n[Evil Bone]: Deals 222.2% attack damage per second as a wind, up to 1 stack, lasting 5 seconds.",
      template: "Deals {0} attack damage as a wind to the designated enemy unit and nearby enemies.\nWhen the target has full stacks of [Wind Evil], additionally inflicts [Evil Bone]. If the target has less than 4 stacks of [Wind Evil], then 1 stack of [Wind Evil] will be applied.\n[Evil Bone]: Deals {1} attack damage per second as a wind, up to 1 stack, lasting 5 seconds.",
      levelValues: [["100%", "150%"], ["111.1%", "155.6%"], ["122.2%", "161.1%"], ["133.3%", "166.7%"], ["144.4%", "172.2%"], ["155.6%", "177.8%"], ["166.7%", "183.3%"], ["177.8%", "188.9%"], ["188.9%", "194.4%"], ["200%", "200%"], ["211.1%", "205.6%"], ["222.2%", "211.1%"], ["233.3%", "216.7%"], ["244.4%", "222.2%"]],
    },
    passive:     {
      name: "Those who obey me live",
      description: "When dealing damage: If the opponent has the [Wind Evil] or [Evil Bone] effect, Shuten-dōji's damage dealt to them increases by 63.3%. When taking damage: If the opponent has the [Wind Evil] or [Evil Bone] effect, damage dealt to Shuten-dōji decreases by 48.9%.",
      template: "When dealing damage: If the opponent has the [Wind Evil] or [Evil Bone] effect, Shuten-dōji's damage dealt to them increases by {0}. When taking damage: If the opponent has the [Wind Evil] or [Evil Bone] effect, damage dealt to Shuten-dōji decreases by {1}.",
      levelValues: [["20%", "20%"], ["23.3%", "22.2%"], ["26.7%", "24.4%"], ["30%", "26.7%"], ["33.3%", "28.9%"], ["36.7%", "31.1%"], ["40%", "33.3%"], ["43.3%", "35.6%"], ["46.7%", "37.8%"], ["50%", "40%"], ["53.3%", "42.2%"], ["56.7%", "44.4%"], ["60%", "46.7%"], ["63.3%", "48.9%"]],
    },
  },

  // Team Skill
  teamSkill: {
    name: "Combo Skill",
    description: "Attack power increased by 15%. At the start of battle, every 500 attack power increases damage over time by 7%, up to a maximum of 10 times.",
    requirements: {
      faction: "Heikyo Castle",
      element: "Wind",
      alternativeConditions: "Team contains 2 Heikyo Castle characters or 2 Wind characters",
    },
  },

  // Awakening Effects
  awakenings: [
    {
      level: 1,
      effect: "At the start of battle, the first use of a Ultimate skill does not consume energy. Each time a character skill is used, it can apply 2 stacks of [Wind Evil]. After each use of a character skill, damage taken is reduced by 30% for 3 seconds. ",
    },
    {
      level: 2,
      effect: "Upon entering the battlefield, immediately deal 160% attack power as <color=#01d828>storm</color> damage to all enemies and apply 2 stacks of [Wind Evil]. At the same time, all allies gain 50% [Block] for 10 seconds. ",
    },
    {
      level: 3,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 4,
      effect: "<color=#01d828>Storm</color> damage increased by 30%.",
    },
    {
      level: 5,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 6,
      effect: "All damage dealt by Shuten-dōji ignores 25% of the target's elemental resistance.",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "Unreserved love",
    image: "Shuten-dojicard",
    stats: {
      hp: "5,040",
      attack: "780",
      defense: "474",
    },
    effects: [  // awakening levels 1-5
      "Attack power increased by 24%; damage over time increased by 24%. When dealing damage over time, the enemy takes 12% more damage for 3 seconds. Damage dealt to enemies with shields is increased by 35%.",
      "Attack power increased by 28%, damage over time increased by 28%. When dealing damage over time, the target takes 15% more damage for 3 seconds. Damage dealt to enemies with shields is increased by 35%.",
      "Attack power increased by 32%; damage over time increased by 32%. When dealing damage over time, the target takes 18% more damage for 3 seconds. Damage dealt to enemies with shields is increased by 35%.",
      "Attack power increased by 36%; damage over time increased by 36%. When dealing damage over time, the enemy takes 21% more damage for 3 seconds. Damage dealt to enemies with shields is increased by 35%.",
      "Attack power increased by 40%; damage over time increased by 40%. When dealing damage over time, the enemy takes 24% more damage for 3 seconds. Damage dealt to enemies with shields is increased by 35%.",
    ],
    restriction: "Only effective for Destroyer",
  },

  // Character Tags - Reusable across multiple characters
  tags: [
    'DoT',
    'Wind Evil',
    'Debuff',
    'Ranged',
    'AoE',
    'Wind Damage',
    'Damage Reduction',
    'Resistance Penetration',
  ],
};

// SEO data for Shuten-doji
export const shutenDojiSEO = {
  title: 'Shuten-doji - Zone Nova Character Guide | GachaWiki',
  description:
    'Complete guide for Shuten-doji in Zone Nova. Learn about her wind DPS abilities, Wind Evil DoT mechanics, ultimate damage potential, and optimal build strategies for this powerful Heikyo Castle mage.',
};

// Export default for easy importing
export default shutenDojiData;
