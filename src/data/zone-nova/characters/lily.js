// Lily Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const lilyData = {
  // Basic Character Information
  name: 'Lily',
  image: 'Lily.png',
  rarity: 'SSR',
  element: 'Ice', // Water element maps to Ice in Zone Nova
  class: 'Tank', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
  role: 'Tank', // Tank, DPS, Supporter, Disruptor, Healer - Functional description
  faction: 'Safir', // Based on combination skill mentioning "Safir" characters

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
    attack: '480',
    defense: '1,315',
  },
  talentTree: {
    totals: ["DEF +90.6%", "HP +59.4%"],
    enhancementNodes: [
      {
        name: "Enhancement I",
        rank: 2,
        bonus: "DEF +10%, HP +10%",
        materials: [{"name": "Dragon Scale", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_6.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}],
        gold: 5000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "DEF +15%, HP +15%",
        materials: [{"name": "Dragon Scale", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_6.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 20000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "DEF +20%, HP +20%",
        materials: [{"name": "Dragon Scale", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_6.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 160000,
      },
    ],
    statNodes: [
      {
        node: "N1",
        stat: "HP +3.2%",
        unlock: "After E1",
        materials: [{"name": "Dragon Scale", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
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
        stat: "DEF +7.2%",
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
        stat: "HP +4.8%",
        unlock: "After E2",
        materials: [{"name": "Dragon Scale", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 45000,
      },
      {
        node: "N8",
        stat: "DEF +7.2%",
        unlock: "After E2",
        materials: [{"name": "Dragon Scale", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 45000,
      },
      {
        node: "N9",
        stat: "DEF +9.6%",
        unlock: "Lv 80",
        materials: [{"name": "Dragon Scale", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 160000,
      },
      {
        node: "N10",
        stat: "HP +6.4%",
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

  // Skills
  skills: {
    normal:     {
      name: "Frost Armor Thorns",
      cooldown: "2.0s",
      description: "Deals ice damage equal to its own defense 120% to the designated enemy unit.",
      template: "Deals ice damage equal to its own defense {0} to the designated enemy unit.",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Flowing Frost Defense",
      cooldown: "5.0s",
      description: "Grants you a 58% chance to neutralize damage, lasting 5 seconds.\n\n[Neutralize]: Has a chance to reduce the damage by 30%. Critical damage ignores dispel checks.",
      template: "Grants you a {0} chance to neutralize damage, lasting 5 seconds.\n\n[Neutralize]: Has a chance to reduce the damage by 30%. Critical damage ignores dispel checks.",
      levelValues: [["32%"], ["34%"], ["36%"], ["38%"], ["40%"], ["42%"], ["44%"], ["46%"], ["48%"], ["50%"], ["52%"], ["54%"], ["56%"], ["58%"]],
    },
    ultimate:     {
      name: "Breaking the Formation: Final Scene",
      energyCost: "3",
      cooldown: "1.0s",
      description: "Deals ice damage equal to 240% of your own defense to the designated enemy unit, increases your [Resolve] by 1, and reduces your damage taken by 24% for 10 seconds.\n\n[Enhanced Ultimate Skill]: Clears all [Resolve], gains a shield equal to 24% of your maximum health, and increases your chance of neutralizing damage to 100% within 10 seconds. Removes all damage over time effects, deals ice damage equal to 480% of your own defense to the designated enemy unit, and reduces your damage taken by 24% for 10 seconds.",
      template: "Deals ice damage equal to {0} of your own defense to the designated enemy unit, increases your [Resolve] by 1, and reduces your damage taken by {1} for 10 seconds.\n\n[Enhanced Ultimate Skill]: Clears all [Resolve], gains a shield equal to {2} of your maximum health, and increases your chance of neutralizing damage to 100% within 10 seconds. Removes all damage over time effects, deals ice damage equal to {3} of your own defense to the designated enemy unit, and reduces your damage taken by {4} for 10 seconds.",
      levelValues: [["110%", "11%", "11%", "220%", "11%"], ["120%", "12%", "12%", "240%", "12%"], ["130%", "13%", "13%", "260%", "13%"], ["140%", "14%", "14%", "280%", "14%"], ["150%", "15%", "15%", "300%", "15%"], ["160%", "16%", "16%", "320%", "16%"], ["170%", "17%", "17%", "340%", "17%"], ["180%", "18%", "18%", "360%", "18%"], ["190%", "19%", "19%", "380%", "19%"], ["200%", "20%", "20%", "400%", "20%"], ["210%", "21%", "21%", "420%", "21%"], ["220%", "22%", "22%", "440%", "22%"], ["230%", "23%", "23%", "460%", "23%"], ["240%", "24%", "24%", "480%", "24%"]],
    },
    passive:     {
      name: "Hundred Battles Ice Bones",
      description: "After successfully [Neutralize], increase your defense by 60% within 5 seconds. Repeated activation can extend the duration.\n\nAfter successfully [Neutralize], increase [Resolve] by 1, gaining a maximum of 1 [Resolve] per second.\nWhen [Resolve] reaches 10 levels, you can cast [Enhanced Ultimate Skill].\n\nGain a shield upon entering combat or when your health drops to 70%/40%/10% or below. Each shield can be triggered once, with a shield value equal to 24% of your maximum health. The Neutralization chance increases to 100% within 10 seconds, removing all damage-over-time effects.\n\nEach time you gain a shield, you immediately recover 10% of your maximum health.",
      template: "After successfully [Neutralize], increase your defense by {0} within 5 seconds. Repeated activation can extend the duration.\n\nAfter successfully [Neutralize], increase [Resolve] by 1, gaining a maximum of 1 [Resolve] per second.\nWhen [Resolve] reaches 10 levels, you can cast [Enhanced Ultimate Skill].\n\nGain a shield upon entering combat or when your health drops to 70%/40%/10% or below. Each shield can be triggered once, with a shield value equal to {1} of your maximum health. The Neutralization chance increases to 100% within 10 seconds, removing all damage-over-time effects.\n\nEach time you gain a shield, you immediately recover 10% of your maximum health.",
      levelValues: [["27.5%", "11%"], ["30%", "12%"], ["32.5%", "13%"], ["35%", "14%"], ["37.5%", "15%"], ["40%", "16%"], ["42.5%", "17%"], ["45%", "18%"], ["47.5%", "19%"], ["50%", "20%"], ["52.5%", "21%"], ["55%", "22%"], ["57.5%", "23%"], ["60%", "24%"]],
    },
  },

  // Team Skill
  teamSkill: {
    name: "Combo Skill",
    description: "Self Defense increases by 15%\nAt battle start, every 500 Defense reduces team damage taken by 1.5%, up to 6 times",
    requirements: {
      faction: "Safir",
      element: "Ice",
      alternativeConditions: "Team contains 2 Safir characters or 2 Ice characters",
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect: "After successfully [Neutralize], you gain an additional 30% of your own defense for 5 seconds. Activating a normal Ultimate Skill grants you an additional layer of [Fighting Will]. Activating an enhanced Ultimate Skill grants you 2 layers of [Fighting Will].",
    },
    {
      level: 2,
      effect: "After entering battle, all allied units gain 20 layers of Frost Armor. Each time they take damage, they can remove a layer of Frost Armor, reducing the damage by 50%. Frost Armor expires after 20 seconds.",
    },
    {
      level: 3,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 4,
      effect: "Defense increased by 45%",
    },
    {
      level: 5,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 6,
      effect: "Increases all resistances by 15%, and frost resistance by an additional 15%.",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "Eating secretly in a cafe",
    image: "InTheCafeSneakingABite.png",
    stats: {
      hp: "6,600",
      attack: "480",
      defense: "690",
    },
    effects: [  // awakening levels 1-5
      "Increases defense by 48%. After successfully neutralizing the attack, damage taken is reduced by 6% for 5 seconds. When the wearer holds a shield, damage taken is reduced by 10%.",
      "Increases defense by 52%. After successfully neutralizing the attack, damage taken is reduced by 7% for 5 seconds. When the wearer holds a shield, damage taken is reduced by 12%.",
      "Increases defense by 56%. After successfully neutralizing the attack, damage taken is reduced by 8% for 5 seconds. When the wearer holds a shield, damage taken is reduced by 14%.",
      "Increases defense by 60%. After successfully neutralizing the attack, damage taken is reduced by 9% for 5 seconds. When the wearer holds a shield, damage taken is reduced by 16%.",
      "Increases defense by 64%. After successfully neutralizing the attack, damage taken is reduced by 10% for 5 seconds. When the wearer holds a shield, damage taken is reduced by 18%.",
    ],
    restriction: "Only effective for Tank",
  },

  // Character Tags - Reusable across multiple characters
  tags: [
    'Defense Scaling',
    'Shield',
    'Damage Reduction',
    'Enhanced Ultimate',
    'Mitigation',
    'Ice',
    'Tank',
  ],
};

// SEO data for Lily
export const lilySEO = {
  title: `${lilyData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${lilyData.name}, a ${lilyData.rarity} ${lilyData.element} ${lilyData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default lilyData;
