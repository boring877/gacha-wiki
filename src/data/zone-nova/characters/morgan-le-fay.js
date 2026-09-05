// Morgan Le Fay Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const morganLeFayData = {
  // Basic Character Information
  name: 'Morgan Le Fay',
  image: 'Morgan.png',
  rarity: 'SSR', // SSR, SR, R
  element: 'Holy', // Fire, Ice, Wind, Holy, Chaos
  class: 'Supporter', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
  role: 'Supporter', // Tank, DPS, Supporter, Disruptor, Healer - Functional description
  faction: 'Avalon', // Savir, etc.

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
        stat: "DEF +4.8%",
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
        stat: "HP +3.2%",
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
        stat: "HP +4.8%",
        unlock: "After N2",
        materials: [{"name": "Holy Grail Teardrop", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_5.png"}],
        gold: 160000,
      },
      {
        node: "N7",
        stat: "DEF +7.2%",
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
        stat: "DEF +9.6%",
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
        materials: [{"name": "Holy Aether", "amount": 3, "icon": "Icon_Talent_Rankup_Light_1.png"}],
      },
      {
        level: 4,
        gold: 10000,
        materials: [{"name": "Holy Aetherstone", "amount": 3, "icon": "Icon_Talent_Rankup_Light_2.png"}],
      },
      {
        level: 5,
        gold: 20000,
        materials: [{"name": "Holy Aetherstone", "amount": 5, "icon": "Icon_Talent_Rankup_Light_2.png"}],
      },
      {
        level: 6,
        gold: 30000,
        materials: [{"name": "Holy Aetherstone", "amount": 7, "icon": "Icon_Talent_Rankup_Light_2.png"}],
      },
      {
        level: 7,
        gold: 45000,
        materials: [{"name": "Holy Aether Lany.", "amount": 3, "icon": "Icon_Talent_Rankup_Light_3.png"}],
      },
      {
        level: 8,
        gold: 80000,
        materials: [{"name": "Holy Aether Lany.", "amount": 5, "icon": "Icon_Talent_Rankup_Light_3.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}],
      },
      {
        level: 9,
        gold: 160000,
        materials: [{"name": "Holy Aether Lany.", "amount": 8, "icon": "Icon_Talent_Rankup_Light_3.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 300000,
        materials: [{"name": "Holy Aether Lany.", "amount": 14, "icon": "Icon_Talent_Rankup_Light_3.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },

  // Skills
  skills: {
    normal:     {
      name: "Dawn Slash",
      cooldown: "2.0s",
      description: "Deals 120% attack power as holy damage to the designated enemy unit.",
      template: "Deals {0} attack power as holy damage to the designated enemy unit.",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Glory Song",
      cooldown: "5.0s",
      description: "All friendly units receive the [Blessing]. During the duration of the [Blessing], this character deals 36% more damage and takes 12% less damage. The [Blessing] will disappear after taking 5 instances of damage or after 10 seconds.",
      template: "All friendly units receive the [Blessing]. During the duration of the [Blessing], this character deals {0} more damage and takes {1} less damage. The [Blessing] will disappear after taking 5 instances of damage or after 10 seconds.",
      levelValues: [["16.5%", "5.5%"], ["18%", "6%"], ["19.5%", "6.5%"], ["21%", "7%"], ["22.5%", "7.5%"], ["24%", "8%"], ["25.5%", "8.5%"], ["27%", "9%"], ["28.5%", "9.5%"], ["30%", "10%"], ["31.5%", "10.5%"], ["33%", "11%"], ["34.5%", "11.5%"], ["36%", "12%"]],
    },
    ultimate:     {
      name: "Holy Sword Summoning",
      energyCost: "3",
      cooldown: "1.0s",
      description: "The [Destruction Sword] falls at the location of our unit with the highest attack power, dealing 240% attack power holy damage to all enemy units within a 5-meter radius, and increasing the attack power of all friendly units within the radius by 60% and their damage dealt by 48%, lasting for 10 seconds. The [Tank Sword] falls at the location of our unit with the highest defense power, dealing 240% attack power holy damage to all enemy units within a 5-meter radius, and increasing the defense of all friendly units within the radius by 60% and reducing damage taken by 19%, lasting for 10 seconds.",
      template: "The [Destruction Sword] falls at the location of our unit with the highest attack power, dealing {0} attack power holy damage to all enemy units within a 5-meter radius, and increasing the attack power of all friendly units within the radius by {1} and their damage dealt by {2}, lasting for 10 seconds. The [Tank Sword] falls at the location of our unit with the highest defense power, dealing {3} attack power holy damage to all enemy units within a 5-meter radius, and increasing the defense of all friendly units within the radius by {4} and reducing damage taken by {5}, lasting for 10 seconds.",
      levelValues: [["110%", "27.5%", "22%", "110%", "27.5%", "6%"], ["120%", "30%", "24%", "120%", "30%", "7%"], ["130%", "32.5%", "26%", "130%", "32.5%", "8%"], ["140%", "35%", "28%", "140%", "35%", "9%"], ["150%", "37.5%", "30%", "150%", "37.5%", "10%"], ["160%", "40%", "32%", "160%", "40%", "11%"], ["170%", "42.5%", "34%", "170%", "42.5%", "12%"], ["180%", "45%", "36%", "180%", "45%", "13%"], ["190%", "47.5%", "38%", "190%", "47.5%", "14%"], ["200%", "50%", "40%", "200%", "50%", "15%"], ["210%", "52.5%", "42%", "210%", "52.5%", "16%"], ["220%", "55%", "44%", "220%", "55%", "17%"], ["230%", "57.5%", "46%", "230%", "57.5%", "18%"], ["240%", "60%", "48%", "240%", "60%", "19%"]],
    },
    passive:     {
      name: "The king changed places.",
      description: "Upon entering combat, immediately gain 3 energy points and have your energy gain efficiency reduced by 30% for 10 seconds. Upon entering combat, Morgan le Fay's 29% attack/defense/health will be converted into the ally with the highest attack/defense/health respectively. Morgan le Fay immediately gains 1 energy point after each skill use.",
      template: "Upon entering combat, immediately gain 3 energy points and have your energy gain efficiency reduced by 30% for 10 seconds. Upon entering combat, Morgan le Fay's {0} attack/defense/health will be converted into the ally with the highest attack/defense/health respectively. Morgan le Fay immediately gains 1 energy point after each skill use.",
      levelValues: [["16%"], ["17%"], ["18%"], ["19%"], ["20%"], ["21%"], ["22%"], ["23%"], ["24%"], ["25%"], ["26%"], ["27%"], ["28%"], ["29%"]],
    },
  },

  // Team Skill
  teamSkill: {
    name: "Combo Skill",
    description: "At battle start, team damage increases by 10%\nFor every 500 Attack, team damage increases by an additional 5%, up to 6 times",
    requirements: {
      faction: "Avalon",
      element: "Holy",
      alternativeConditions: "Team contains 2 Avalon characters or 2 Holy characters",
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect: "The passive effect [Upon entering combat, immediately gain 3 energy points and reduce energy gain efficiency by 30% for 10 seconds] has been changed to Upon entering combat, immediately gain 5 energy points.",
    },
    {
      level: 2,
      effect: "Upon entering battle, all our units immediately receive the [Blessing].",
    },
    {
      level: 3,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 4,
      effect: "All allied units gain the passive effect of conversion ability.",
    },
    {
      level: 5,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 6,
      effect: "[Destruction Holy Sword] Grants all allied units within range an additional 10% all-resistance penetration.\n[Tank Holy Sword] Grants all allied units within range an additional 10% all-resistance.",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "Absolutely perfect buttocks",
    image: "AbsolutelyPerfectArms.png",
    stats: {
      hp: "6,000",
      attack: "600",
      defense: "600",
    },
    effects: [  // awakening levels 1-5
      "Attack power increased by 18%\nDefense power increased by 18%\nHP increased by 18%\nWhen the wearer is of the Holy attribute, after each normal attack, all allied characters' energy gain efficiency increases by 10%, stacking up to 4 times, lasting for 5 seconds.",
      "Attack power increased by 21%\nDefense power increased by 21%\nHP increased by 21%\nWhen the wearer is of the Holy attribute, after each normal attack, all allied characters' energy gain efficiency increases by 12%, stacking up to 4 times, lasting for 5 seconds.",
      "Attack power increased by 24%\nDefense power increased by 24%\nHP increased by 24%\nWhen the wearer is of the Holy attribute, after each normal attack, all allied characters' energy gain efficiency increases by 14%, stacking up to 4 times, lasting for 5 seconds.",
      "Attack power increased by 27%\nDefense power increased by 27%\nHP increased by 27%\nWhen the wearer is of the Holy attribute, after each normal attack, all allied characters' energy gain efficiency increases by 16%, stacking up to 4 times, lasting for 5 seconds.",
      "Attack power increased by 30%\nDefense power increased by 30%\nHealth increased by 30%\nWhen the wearer is of the Holy attribute, after each normal attack, all allied characters' energy gain efficiency increases by 18%, stacking up to 4 times, lasting for 5 seconds.",
    ],
    restriction: "Only effective for Supporter",
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Melee', 'Buff', 'Attack Boost', 'Defense Boost', 'Support', 'Holy'],
};

// SEO data for Morgan Le Fay
export const morganLeFaySEO = {
  title: `${morganLeFayData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${morganLeFayData.name}, a ${morganLeFayData.rarity} ${morganLeFayData.element} ${morganLeFayData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default morganLeFayData;
