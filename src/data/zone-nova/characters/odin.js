// Odin Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const odinData = {
  // Basic Character Information
  name: 'Odin',
  image: 'Odin.png', // charactername
  rarity: 'SSR', // SSR, SR, R
  element: 'Fire', // Fire, Ice, Wind, Holy, Chaos
  class: 'Attacker', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
  role: 'DPS', // Tank, DPS, Supporter, Disruptor, Healer - Functional description
  faction: 'Asa', // Should match faction names in factions.js

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
    hp: '7,308',
    attack: '1,305',
    defense: '530',
  },
  talentTree: {
    totals: ["ATK +67.4%", "HP +45%", "Fire DMG +14.4%", "DEF +12%"],
    enhancementNodes: [
      {
        name: "Enhancement I",
        rank: 2,
        bonus: "ATK +10%, HP +10%",
        materials: [{"name": "Dragon Scale", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_6.png"}, {"name": "Mother's Hovercharm", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_4.png"}],
        gold: 5000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "ATK +15%, HP +15%",
        materials: [{"name": "Dragon Scale", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_6.png"}, {"name": "Mother's Hovercharm", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_4.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 20000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "ATK +20%, HP +20%",
        materials: [{"name": "Dragon Scale", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_6.png"}, {"name": "Mother's Hovercharm", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_4.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 160000,
      },
    ],
    statNodes: [
      {
        node: "N1",
        stat: "Fire DMG +3.2%",
        unlock: "After E1",
        materials: [{"name": "Dragon Scale", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
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
        materials: [{"name": "Dragon Scale", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 10000,
      },
      {
        node: "N4",
        stat: "DEF +4.8%",
        unlock: "After N1",
        materials: [{"name": "Dragon Scale", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 10000,
      },
      {
        node: "N5",
        stat: "ATK +4.8%",
        unlock: "After N2",
        materials: [{"name": "Dragon Scale", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 20000,
      },
      {
        node: "N6",
        stat: "DEF +7.2%",
        unlock: "After N2",
        materials: [{"name": "Dragon Scale", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 160000,
      },
      {
        node: "N7",
        stat: "Fire DMG +4.8%",
        unlock: "After E2",
        materials: [{"name": "Dragon Scale", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 45000,
      },
      {
        node: "N8",
        stat: "ATK +4.8%",
        unlock: "After E2",
        materials: [{"name": "Dragon Scale", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 45000,
      },
      {
        node: "N9",
        stat: "ATK +6.4%",
        unlock: "Lv 80",
        materials: [{"name": "Dragon Scale", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 160000,
      },
      {
        node: "N10",
        stat: "Fire DMG +6.4%",
        unlock: "Lv 75",
        materials: [{"name": "Dragon Scale", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
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
        materials: [{"name": "Blaze Aether Lany.", "amount": 5, "icon": "Icon_Talent_Rankup_Fire_3.png"}, {"name": "Mother's Hovercharm", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_4.png"}],
      },
      {
        level: 9,
        gold: 160000,
        materials: [{"name": "Blaze Aether Lany.", "amount": 8, "icon": "Icon_Talent_Rankup_Fire_3.png"}, {"name": "Mother's Hovercharm", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_4.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 300000,
        materials: [{"name": "Blaze Aether Lany.", "amount": 14, "icon": "Icon_Talent_Rankup_Fire_3.png"}, {"name": "Mother's Hovercharm", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_4.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },

  // Skills
  skills: {
    normal:     {
      name: "Soul Harvest",
      cooldown: "1.0s",
      description: "Deals 120% attack power as fire damage to the targeted enemy unit.",
      template: "Deals {0} attack power as fire damage to the targeted enemy unit.",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Fallen Divine Flame",
      cooldown: "5.0s",
      description: "Deals 3 instances of 120% attack power as fire damage to the targeted enemy unit and applies 1 stack of [Divine Flame].",
      template: "Deals 3 instances of {0} attack power as fire damage to the targeted enemy unit and applies 1 stack of [Divine Flame].",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    ultimate:     {
      name: "Judgment Strike",
      energyCost: "2",
      cooldown: "1.0s",
      description: "After casting an ultimate skill, the next stage skill can be cast within 4 seconds.\nFirst Stage: Move to the target location, dealing 480% attack power as fire damage to the targeted enemy unit and applying [Divine Flame].\nSecond Stage: Leap backward, dealing 480% attack power as fire damage to the targeted enemy unit and applying [Divine Flame].\nThird Stage: Leap in place to charge, dealing 480% attack power as fire damage to the targeted enemy unit. For each stack of damage over time on the target, damage is increased by an additional 48% attack power as fire damage, up to 20 times.",
      template: "After casting an ultimate skill, the next stage skill can be cast within 4 seconds.\nFirst Stage: Move to the target location, dealing {0} attack power as fire damage to the targeted enemy unit and applying [Divine Flame].\nSecond Stage: Leap backward, dealing {1} attack power as fire damage to the targeted enemy unit and applying [Divine Flame].\nThird Stage: Leap in place to charge, dealing {2} attack power as fire damage to the targeted enemy unit. For each stack of damage over time on the target, damage is increased by an additional {3} attack power as fire damage, up to 20 times.",
      levelValues: [["220%", "220%", "220%", "22%"], ["240%", "240%", "240%", "24%"], ["260%", "260%", "260%", "26%"], ["280%", "280%", "280%", "28%"], ["300%", "300%", "300%", "30%"], ["320%", "320%", "320%", "32%"], ["340%", "340%", "340%", "34%"], ["360%", "360%", "360%", "36%"], ["380%", "380%", "380%", "38%"], ["400%", "400%", "400%", "40%"], ["420%", "420%", "420%", "42%"], ["440%", "440%", "440%", "44%"], ["460%", "460%", "460%", "46%"], ["480%", "480%", "480%", "48%"]],
    },
    passive:     {
      name: "Raven’s Insight",
      description: "All of Odin's damage is considered damage over time, which cannot crit.\nBefore entering battle, every 1% critical rate converts to 1% increased fire damage, and every 2% critical damage converts to 1% increased attack power.\nSkills and ultimate skills can apply [Divine Flame].\n[Divine Flame]: Deals 36% attack power as fire damage every 3 seconds, up to 10 stacks, lasting 10 seconds.",
      template: "All of Odin's damage is considered damage over time, which cannot crit.\nBefore entering battle, every 1% critical rate converts to 1% increased fire damage, and every 2% critical damage converts to 1% increased attack power.\nSkills and ultimate skills can apply [Divine Flame].\n[Divine Flame]: Deals {0} attack power as fire damage every 3 seconds, up to 10 stacks, lasting 10 seconds.",
      levelValues: [["16.5%"], ["18%"], ["19.5%"], ["21%"], ["22.5%"], ["24%"], ["25.5%"], ["27%"], ["28.5%"], ["30%"], ["31.5%"], ["33%"], ["34.5%"], ["36%"]],
    },
  },

  // Team Skill
  teamSkill: {
    name: "Combo Skill",
    description: "Self Attack increases by 10%\nAt battle start, every 500 Attack increases self Penetration by 3%, up to 6 times",
    requirements: {
      faction: "Asa",
      element: "Fire",
      alternativeConditions: "Team contains 2 Asa characters or 2 Fire characters",
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect: "When attacking a target without [Divine Flame], immediately apply 5 stacks of [Divine Flame].\nDamage over time increases by 20% for 5 seconds after casting an ultimate skill.\nDamage taken is reduced by 50% during ultimate skill casting.",
    },
    {
      level: 2,
      effect: "The extra damage from the third stage of the ultimate skill now increases up to 30 times.\nTargets with [Divine Flame] take 20% increased damage over time from Odin.",
    },
    {
      level: 3,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 4,
      effect: "<color=#c90d0d>Blaze</color> damage increases by 30%.",
    },
    {
      level: 5,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 6,
      effect: "After Odin casts an ultimate skill 3 times, the next normal attack becomes a skill.\nOdin's damage over time penetrates 20% Blaze resistance.",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "Shared Bath Time",
    image: "Odincard",
    stats: {
      hp: "5,040",
      attack: "780",
      defense: "474",
    },
    effects: [  // awakening levels 1-5
      "Attack power increases by 24%, and all damage increases by 24% when casting an ultimate skill.\nAfter the equipped character casts an ultimate skill, gain 1 stack of [Charge]. After dealing damage to any target, consume [Charge] to apply 1 stack of [Final Flame].\n[Final Flame]: Deals 9% <color=#c90d0d>Blaze</color> damage every 2 seconds, up to 5 stacks, lasting 10 seconds.",
      "Attack power increases by 28%, and all damage increases by 28% when casting an ultimate skill.\nAfter the equipped character casts an ultimate skill, gain 1 stack of [Charge]. After dealing damage to any target, consume [Charge] to apply 1 stack of [Final Flame].\n[Final Flame]: Deals 10.5% <color=#c90d0d>Blaze</color> damage every 2 seconds, up to 5 stacks, lasting 10 seconds.",
      "Attack power increases by 32%, and all damage increases by 32% when casting an ultimate skill.\nAfter the equipped character casts an ultimate skill, gain 1 stack of [Charge]. After dealing damage to any target, consume [Charge] to apply 1 stack of [Final Flame].\n[Final Flame]: Deals 12% <color=#c90d0d>Blaze</color> damage every 2 seconds, up to 5 stacks, lasting 10 seconds.",
      "Attack power increases by 36%, and all damage increases by 36% when casting an ultimate skill.\nAfter the equipped character casts an ultimate skill, gain 1 stack of [Charge]. After dealing damage to any Roshi, consume [Charge] to apply 1 stack of [Final Flame].\n[Final Flame]: Deals 13.5% <color=#c90d0d>Blaze</color> damage every 2 seconds, up to 5 stacks, lasting 10 seconds.",
      "Attack power increases by 40%, and all damage increases by 40% when casting an ultimate skill.\nAfter the equipped character casts an ultimate skill, gain 1 stack of [Charge]. After dealing damage to any target, consume [Charge] to apply 1 stack of [Final Flame].\n[Final Flame]: Deals 15% <color=#c90d0d>Blaze</color> damage every 2 seconds, up to 5 stacks, lasting 10 seconds.",
    ],
    restriction: "Only effective for Attacker",
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Range', 'DOT', 'Damage Reduction', 'Penetration'],
};

// SEO data for Odin
export const odinSEO = {
  title: `${odinData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${odinData.name}, a ${odinData.rarity} ${odinData.element} ${odinData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default odinData;
