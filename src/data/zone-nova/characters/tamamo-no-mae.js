// Tamamo-no-Mae - Zone Nova Character Data
// Fire Supporter (Supporter) character from Heikyo Castle faction

export const tamamoNoMaeData = {
  // Basic Character Information
  name: 'Tamamo-no-Mae',
  image: 'Tamamo-no-mae.png',
  rarity: 'SSR',
  element: 'Fire',
  class: 'Supporter', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
  role: 'Supporter', // Tank, DPS, Supporter, Disruptor, Healer - Functional description
  faction: 'Heikyo Castle',

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
        stat: "DEF +4.8%",
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
        stat: "HP +3.2%",
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
        stat: "HP +4.8%",
        unlock: "After N2",
        materials: [{"name": "Energy Vial", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 160000,
      },
      {
        node: "N7",
        stat: "DEF +7.2%",
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
        stat: "DEF +9.6%",
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
        materials: [{"name": "Blaze Aether Lany.", "amount": 5, "icon": "Icon_Talent_Rankup_Fire_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}],
      },
      {
        level: 9,
        gold: 160000,
        materials: [{"name": "Blaze Aether Lany.", "amount": 8, "icon": "Icon_Talent_Rankup_Fire_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 300000,
        materials: [{"name": "Blaze Aether Lany.", "amount": 14, "icon": "Icon_Talent_Rankup_Fire_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },

  // Character Skills
  skills: {
    normal:     {
      name: "Crimson Blade Dance",
      cooldown: "2.0s",
      description: "Deals 120% ATK fire DMG to a target enemy.",
      template: "Deals {0} ATK fire DMG to a target enemy.",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Bewitching Fire",
      cooldown: "5.0s",
      description: "Deals 142.2% ATK fire DMG to a target enemy and gains 1 stack of [Fox Flame] (max 9 stacks). Restores 1 Energy for every 2 Skills used.",
      template: "Deals {0} ATK fire DMG to a target enemy and gains 1 stack of [Fox Flame] (max 9 stacks). Restores 1 Energy for every 2 Skills used.",
      levelValues: [["70%"], ["75.6%"], ["81.1%"], ["86.7%"], ["92.2%"], ["97.8%"], ["103.3%"], ["108.9%"], ["114.4%"], ["120%"], ["125.6%"], ["131.1%"], ["136.7%"], ["142.2%"]],
    },
    ultimate:     {
      name: "Authority: Myriad Brilliance",
      energyCost: "4",
      cooldown: "12.0s",
      description: "After a short delay, recover 3 Energy. Increases all allies' Ultimate DMG by 29.4% and ignores 41.2% Fire Resistance for 5s (cannot stack).\nConsumes all [Fox Flame].\nEach consumed stack of [Fox Flame] further increases Ultimate DMG bonus by 5.9% and Ignore Resistance by 5.9%, and extends duration by 1s.\nEach consumed stack of [Fox Flame] deals 58.9% ATK fire DMG to a random enemy and applies [Jade Fox Mark] for 5s.\nIf 9 stacks of [Fox Flame] are consumed, additionally deploys [Hyakki Kitan] for 10s. During this period, allies recover 1 Energy after using Ultimate (max once every 0.1s).",
      template: "After a short delay, recover 3 Energy. Increases all allies' Ultimate DMG by {0} and ignores {1} Fire Resistance for 5s (cannot stack).\nConsumes all [Fox Flame].\nEach consumed stack of [Fox Flame] further increases Ultimate DMG bonus by {2} and Ignore Resistance by {3}, and extends duration by 1s.\nEach consumed stack of [Fox Flame] deals {4} ATK fire DMG to a random enemy and applies [Jade Fox Mark] for 5s.\nIf 9 stacks of [Fox Flame] are consumed, additionally deploys [Hyakki Kitan] for 10s. During this period, allies recover 1 Energy after using Ultimate (max once every 0.1s).",
      levelValues: [["15%", "21%", "3%", "3%", "30%"], ["16.1%", "22.6%", "3.2%", "3.2%", "32.2%"], ["17.2%", "24.1%", "3.4%", "3.4%", "34.4%"], ["18.3%", "25.7%", "3.7%", "3.7%", "36.7%"], ["19.4%", "27.2%", "3.9%", "3.9%", "38.9%"], ["20.6%", "28.8%", "4.1%", "4.1%", "41.1%"], ["21.7%", "30.3%", "4.3%", "4.3%", "43.3%"], ["22.8%", "31.9%", "4.6%", "4.6%", "45.6%"], ["23.9%", "33.4%", "4.8%", "4.8%", "47.8%"], ["25%", "35%", "5%", "5%", "50%"], ["26.1%", "36.6%", "5.2%", "5.2%", "52.2%"], ["27.2%", "38.1%", "5.4%", "5.4%", "54.4%"], ["28.3%", "39.7%", "5.7%", "5.7%", "56.7%"], ["29.4%", "41.2%", "5.9%", "5.9%", "58.9%"]],
    },
    passive:     {
      name: "Hyakki Kitan",
      description: "When other allies use Ultimate, gain 1 stack of [Fox Flame] (max 9 stacks). Each stack of [Fox Flame] increases self Energy Recovery Rate by 3% and reduces damage taken by all allies by 4.7%.\nDuring [Hyakki Kitan], apply 2 stacks of [Ten Ghost Marks] to enemies hit by Ultimate.\n[Ten Ghost Marks]: At 10 stacks, consume 10 stacks to deal 215.6% ATK fire DMG in a fan-shaped area behind the target and apply [Jade Fox Mark] (5s). All [Ten Ghost Marks] vanish when [Hyakki Kitan] ends.\n[Jade Fox Mark]: When allies' Ultimate hits the holder, DEF Penetration +104.7%. Consumed after triggering.",
      template: "When other allies use Ultimate, gain 1 stack of [Fox Flame] (max 9 stacks). Each stack of [Fox Flame] increases self Energy Recovery Rate by {1} and reduces damage taken by all allies by {0}.\nDuring [Hyakki Kitan], apply 2 stacks of [Ten Ghost Marks] to enemies hit by Ultimate.\n[Ten Ghost Marks]: At 10 stacks, consume 10 stacks to deal {2} ATK fire DMG in a fan-shaped area behind the target and apply [Jade Fox Mark] (5s). All [Ten Ghost Marks] vanish when [Hyakki Kitan] ends.\n[Jade Fox Mark]: When allies' Ultimate hits the holder, DEF Penetration +{3}. Consumed after triggering.",
      levelValues: [["2.5%", "3%", "100%", "57%"], ["2.7%", "3%", "108.9%", "60.7%"], ["2.8%", "3%", "117.8%", "64.3%"], ["3%", "3%", "126.7%", "68%"], ["3.2%", "3%", "135.6%", "71.7%"], ["3.3%", "3%", "144.4%", "75.3%"], ["3.5%", "3%", "153.3%", "79%"], ["3.7%", "3%", "162.2%", "82.7%"], ["3.8%", "3%", "171.1%", "86.3%"], ["4%", "3%", "180%", "90%"], ["4.2%", "3%", "188.9%", "93.7%"], ["4.3%", "3%", "197.8%", "97.3%"], ["4.5%", "3%", "206.7%", "101%"], ["4.7%", "3%", "215.6%", "104.7%"]],
    },
  },

  // Team Skill
  teamSkill: {
    name: "Combo Skill",
    description: "At the start of battle, all allies' DMG +10%; for every 500 ATK, all allies' Ultimate DMG +7.5% (max 6 stacks).",
    requirements: {
      faction: "Heikyo Castle",
      element: "Fire",
      alternativeConditions: "Team contains 2 Heikyo Castle characters or 2 Fire characters",
    },
  },

  // Awakening Effects
  awakenings: [
    {
      level: 1,
      effect: "Immediately gain 9 stacks of [Fox Flame] at the start of battle.",
    },
    {
      level: 2,
      effect: "When [Hyakki Kitan] ends, recover [Fox Flame] based on [Ten Ghost Marks] accumulated: recover 2 stacks of [Fox Flame] for every 10 stacks accumulated (max 6 stacks).",
    },
    {
      level: 3,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 4,
      effect: "During [Hyakki Kitan], allies' Resistance to non-<color=#c90d0d>Blaze</color> DMG increases by 56.5%.",
    },
    {
      level: 5,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 6,
      effect: "During [Hyakki Kitan], when allies' Ultimate hits an enemy, apply an additional 1 stack of [Ten Ghost Marks].\nEach stack of [Fox Flame] additionally increases all allies' DEF by 5%.",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "Hot Spring & Her ",
    image: "Tamamo-no-maecard",
    stats: {
      hp: "6,000",
      attack: "600",
      defense: "600",
    },
    effects: [  // awakening levels 1-5
      "Base Stats Boost: ATK +24%.\nPassive: After allies' Ultimate deals DMG, increases self Energy Recovery Rate by 120% (4s) and gains 1 stack of [Brilliance] (5s, max 50 stacks).\nEvery 5 stacks of [Brilliance] increases all allies' DMG by 5%.",
      "Base Stats Boost: ATK +28%.\nPassive: After allies' Ultimate deals DMG, increases self Energy Recovery Rate by 140% (4s) and gains 1 stack of [Brilliance] (5s, max 50 stacks).\nEvery 5 stacks of [Brilliance] increases all allies' DMG by 6%.",
      "Base Stats Boost: ATK +32%.\nPassive: After allies' Ultimate deals DMG, increases self Energy Recovery Rate by 160% (4s) and gains 1 stack of [Brilliance] (5s, max 50 stacks).\nEvery 5 stacks of [Brilliance] increases all allies' DMG by 7%.",
      "Base Stats Boost: ATK +36%.\nPassive: After allies' Ultimate deals DMG, increases self Energy Recovery Rate by 180% (4s) and gains 1 stack of [Brilliance] (5s, max 50 stacks).\nEvery 5 stacks of [Brilliance] increases all allies' DMG by 8%.",
      "Base Stats Boost: ATK +40%.\nPassive: After allies' Ultimate deals DMG, increases self Energy Recovery Rate by 200% (4s) and gains 1 stack of [Brilliance] (5s, max 50 stacks).\nEvery 5 stacks of [Brilliance] increases all allies' DMG by 9%.",
    ]] (5s, max 50 stacks).",
      "Every 5 stacks of [Brilliance] increases all allies' DMG by 9%.",
    ],
    restriction: "Only effective for Supporter",
  },

  // Character Tags - Reusable across multiple characters
  tags: [
    'Ranged',
    'Buff',
    'Energy Recovery',
    'Ultimate Damage Amp',
    'Defense Penetration',
    'Damage Reduction',
    'Fire Damage',
  ],
};

// SEO data for Tamamo-no-Mae
export const tamamoNoMaeSEO = {
  title: 'Tamamo-no-Mae - Zone Nova Character Guide | GachaWiki',
  description:
    'Complete guide for Tamamo-no-Mae in Zone Nova. Learn about her fire support abilities, Fox Flame mechanics, ultimate damage amplification, and optimal build strategies for this powerful Heikyo Castle buffer.',
};

// Export default for easy importing
export default tamamoNoMaeData;
