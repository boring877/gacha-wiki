// Nephthys - Zone Nova Character Data
// SSR Destroyer from Kemich faction with Fire element
// Generated from live master data; skill/passive values at max awakened level 14
export const nephthysData = {
  name: "Nephthys",
  image: "Nephthys.png",
  rarity: 'SSR',
  element: 'Fire',
  class: 'Destroyer',
  role: "DPS",
  faction: 'Kemich',
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
    hp: '6,300',
    attack: '1,368',
    defense: '474',
  },
  talentTree: {
    totals: ["ATK +75.4%", "Fire DMG +34.4%", "HP +25%"],
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
        bonus: "ATK +20%, Fire DMG +20%",
        materials: [{"name": "Canopic Jar", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 160000,
      },
    ],
    statNodes: [
      {
        node: "N1",
        stat: "Fire DMG +3.2%",
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
        stat: "ATK +3.2%",
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
        stat: "ATK +4.8%",
        unlock: "After N2",
        materials: [{"name": "Canopic Jar", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 160000,
      },
      {
        node: "N7",
        stat: "Fire DMG +4.8%",
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
        stat: "Fire DMG +6.4%",
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
        materials: [{"name": "Blaze Aether Lany.", "amount": 5, "icon": "Icon_Talent_Rankup_Fire_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}],
      },
      {
        level: 9,
        gold: 160000,
        materials: [{"name": "Blaze Aether Lany.", "amount": 8, "icon": "Icon_Talent_Rankup_Fire_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 300000,
        materials: [{"name": "Blaze Aether Lany.", "amount": 14, "icon": "Icon_Talent_Rankup_Fire_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },
  skills: {
    normal:     {
      name: "Pillar of Blazing Flame",
      cooldown: "2.0s",
      description: "Deals 93.3% attack damage as fire damage to all enemy units.",
      template: "Deals {0} attack damage as fire damage to all enemy units.",
      levelValues: [["50%"], ["53.3%"], ["56.7%"], ["60%"], ["63.3%"], ["66.7%"], ["70%"], ["73.3%"], ["76.7%"], ["80%"], ["83.3%"], ["86.7%"], ["90%"], ["93.3%"]],
    },
    auto:     {
      name: "Blazing Explosion",
      cooldown: "5.0s",
      description: "Deals 488.9% attack power as fire damage to all enemies and inflicts the [Hellfire Sin] debuff, reducing healing received by 5.5% and critical hit resistance by 5.5%, up to 5 stacks, lasting 10 seconds. Simultaneously grants self the [Fiery Avatar] debuff, increasing balze damage and ultimate skill damage by 4%, up to 5 stacks.",
      template: "Deals {0} attack power as fire damage to all enemies and inflicts the [Hellfire Sin] debuff, reducing healing received by 5.5% and critical hit resistance by 5.5%, up to 5 stacks, lasting 10 seconds. Simultaneously grants self the [Fiery Avatar] debuff, increasing balze damage and ultimate skill damage by 4%, up to 5 stacks.",
      levelValues: [["200%"], ["222.2%"], ["244.4%"], ["266.7%"], ["288.9%"], ["311.1%"], ["333.3%"], ["355.6%"], ["377.8%"], ["400%"], ["422.2%"], ["444.4%"], ["466.7%"], ["488.9%"]],
    },
    ultimate:     {
      name: "Blazing Rain",
      energyCost: "3",
      cooldown: "3.0s",
      description: "Summons a shower of meteors, dealing 90.6% attack power as fire damage to all enemies every 0.5 seconds. The channel lasts 6 seconds (can be interrupted during channeling). Each attack inflicts [Molten Armor], reducing the target's defense by 1.25%, stacking up to 20 times. If Nephthys successfully completes the entire cast without interruption, she will deal an additional 271.7% attack power as balze damage to all enemies at the end.",
      template: "Summons a shower of meteors, dealing {0} attack power as fire damage to all enemies every 0.5 seconds. The channel lasts 6 seconds (can be interrupted during channeling). Each attack inflicts [Molten Armor], reducing the target's defense by 1.25%, stacking up to 20 times. If Nephthys successfully completes the entire cast without interruption, she will deal an additional {1} attack power as balze damage to all enemies at the end.",
      levelValues: [["40%", "120%"], ["43.9%", "131.7%"], ["47.8%", "143.3%"], ["51.7%", "155%"], ["55.6%", "166.7%"], ["59.4%", "178.3%"], ["63.3%", "190%"], ["67.2%", "201.7%"], ["71.1%", "213.3%"], ["75%", "225%"], ["78.9%", "236.7%"], ["82.8%", "248.3%"], ["86.7%", "260%"], ["90.6%", "271.7%"]],
    },
    passive:     {
      name: "No self, no heaven",
      description: "All damage dealt to enemy units with a Shield is increased by 36.7%. When dealing damage: If the opponent has 5 stacks of [Infernal Sin], the damage you deal to them is increased by 75.6%. If you have 5 stacks of [Blazing Incarnation], you take less damage 48.9% and gain a shield equal to your attack power 24.4% when you take damage. The shield has a 4-second cooldown.",
      template: "All damage dealt to enemy units with a Shield is increased by {0}. When dealing damage: If the opponent has 5 stacks of [Infernal Sin], the damage you deal to them is increased by {1}. If you have 5 stacks of [Blazing Incarnation], you take less damage {2} and gain a shield equal to your attack power {3} when you take damage. The shield has a 4-second cooldown.",
      levelValues: [["15%", "25%", "20%", "10%"], ["16.7%", "28.9%", "22.2%", "11.1%"], ["18.3%", "32.8%", "24.4%", "12.2%"], ["20%", "36.7%", "26.7%", "13.3%"], ["21.7%", "40.6%", "28.9%", "14.4%"], ["23.3%", "44.4%", "31.1%", "15.6%"], ["25%", "48.3%", "33.3%", "16.7%"], ["26.7%", "52.2%", "35.6%", "17.8%"], ["28.3%", "56.1%", "37.8%", "18.9%"], ["30%", "60%", "40%", "20%"], ["31.7%", "63.9%", "42.2%", "21.1%"], ["33.3%", "67.8%", "44.4%", "22.2%"], ["35%", "71.7%", "46.7%", "23.3%"], ["36.7%", "75.6%", "48.9%", "24.4%"]],
    },
  },
  teamSkill: {
    name: "Combo Skill",
    description: "Increases own attack power by 20%, critical hit rate by 10%, and critical hit damage by 15%. At the start of battle, every 500 attack power increases the damage taken by the entire enemy team by 2%, up to 10 times. Every 15% critical hit rate increases own critical hit damage by 12%, up to 5 times.",
    requirements: {
      faction: "Kemich",
      element: "Fire",
      alternativeConditions: "Team contains 2 Kemich characters or 2 Fire characters",
    },
  },
  awakenings: [
    {
      level: 1,
      effect: "Attack power increased by 25%, and the first ultimate skill used after entering the arena does not consume energy. After using the skill, gain 1 stack of [Flame Power], which increases ultimate skill damage by 12.5%, up to a maximum of 5 stacks.",
    },
    {
      level: 2,
      effect: "Upon entering the arena, you immediately gain 3 stacks of [Blazing Avatar], increasing critical hit damage by 30%. When [Blazing Avatar] reaches 5 stacks, ultimate skill damage is increased by 50%.",
    },
    {
      level: 3,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 4,
      effect: "Attack power increased by 30%, critical hit damage increased by 30%. For the first 5 seconds upon entering the battlefield, all enemies' critical hit resistance is reduced by 30%.",
    },
    {
      level: 5,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 6,
      effect: "Ultimate skill damage ignores 25% of the target's elemental resistance.",
    },
  ],
  memoryCard: {
    name: "A Dream of Peace",
    image: "Nephthyscard.png",
    stats: {
      hp: "5,040",
      attack: "780",
      defense: "474",
    },
    effects: [  // awakening levels 1-5
      "Attack power increased by 30%, and ultimate skill damage increased by 24%. Ultimate skill penetration against enemy defense increased by 12%. If the enemy has a shield, ultimate skill damage against them is increased by 50%.",
      "Attack power increased by 35%, and ultimate skill damage increased by 28%. Ultimate skill penetration against enemy defense increased by 15%. If the enemy has a shield, ultimate skill damage against them is increased by 50%.",
      "Attack power increased by 40%, and ultimate skill damage increased by 32%. Ultimate skill penetration against enemy defense increased by 28%. If the enemy has a shield, ultimate skill damage against them is increased by 50%.",
      "Attack power increased by 50%, and ultimate skill damage increased by 36%. Ultimate skill penetration against enemy defense increased by 21%. If the enemy has a shield, ultimate skill damage against them is increased by 50%.",
      "Attack power increased by 60%, and ultimate skill damage increased by 50%. Ultimate skill penetration against enemy defense increases by 24%. If the enemy has a shield, ultimate skill damage against them is increased by 50%.",
    ],
    restriction: "Only effective for Destroyer",
  },
  tags: [
    "Shield",
    "Healing",
    "Interrupt",
    "Crit",
    "Energy",
    "Damage Reduction",
    "Fire Damage",
  ],
};

export const nephthysSEO = {
  title: `Nephthys - Zone Nova Character Guide | GachaWiki`,
  description: `Complete guide for Nephthys, a SSR Fire Destroyer in Zone Nova. Includes skills, awakenings, the A Dream of Peace memory card, and optimal build strategies.`,
};

export default nephthysData;