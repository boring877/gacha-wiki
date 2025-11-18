// Fuyuka Character Data
export const fuyukaData = {
  id: 11,
  name: 'Fuyuka',
  slug: 'fuyuka',
  detailUrl: '/guides/stella-sora/characters/fuyuka',
  image: 'Fuyuka.jpg',
  icon: 'Fuyuka.jpg',
  rarity: '5-Star',
  element: 'Ignis',
  role: 'Vanguard',
  faction: 'Petal Bloom Guild',
  trekkerStyle: 'Inquisitive',
  level: 90,
  tags: [],

  // Essential table stats (Level max)
  stats: {
    hp: 86216,
    attack: 7484,
    defense: 190,
    critRate: 5.0,
    critDmg: 150.0,
  },

  // Combat stats
  combatStats: {
    vulExploit: 0.0,
    defPen: 0,
    ignoreDef: 0.0,
  },

  // Energy stats
  energyStats: {
    maxEnergy: 325,
    chargeEfficiencyMain: 100.0,
    chargeEfficiencySupport: 75.0,
  },

  // Elemental damage stats
  elementalStats: {
    Ignis: {
      dmg: 100.0,
      pen: 0,
      ignoreRes: 0.0,
    },
  },

  // Skills
  skills: [
    {
      name: 'Blitz Combo',
      type: 'Attack',
      level: 10,
      description:
        'Punches and kicks the target.\n\n**Strike 1**: **28.5% of ATK ×2** as Ignis DMG\n\n**Strike 2**: **70% of ATK** as Ignis DMG\n\n**Strike 3**: **55.1% of ATK ×2** as Ignis DMG\n\n**Strike 4**: **24.7% of ATK ×5** as Ignis DMG\n\n**Strike 5**: **110% of ATK ×2** as Ignis DMG\n\nCasts Fiery Punches when ammo is available:\n\n- **Strike 1**: **220% of ATK** as Ignis DMG\n\n- **Strike 2**: **220% of ATK** as Ignis DMG\n\n- **Strike 3**: **322% of ATK** as Ignis DMG\n\nBlitz Combo and Fiery Punches deal **129% of ATK** as AoE Ignis DMG to other targets behind the target hit by them.',
    },
    {
      name: 'Ignis Infusion',
      type: 'Main Skill',
      level: 10,
      cooldown: 11,
      description:
        'Strikes a Soaring Dragon Punch, dealing **426% of ATK** as Ignis DMG, then slams the ground for an additional **639% of ATK** as Ignis DMG and fully reloads ammo. Magazine capacity: 3 rounds.\n\n**Ignis Infusion** (Main Skill) can trigger **Ignis Mark**, dealing **172% of ATK** as Ignis Mark DMG to nearby targets.',
    },
    {
      name: 'Eruption Punch',
      type: 'Support Skill',
      level: 10,
      cooldown: 14,
      description:
        'Charges at the target and strikes a gale-like punch, dealing **149% of ATK ×11** as AoE Ignis DMG.\n\n**Eruption Punch** (Support Skill) can trigger **Ignis Mark**, dealing **172% of ATK** as Ignis Mark DMG to nearby targets.',
    },
    {
      name: 'Blaze Unsealed',
      type: 'Ultimate',
      level: 10,
      cooldown: 40,
      energyCost: 325,
      description:
        'Fuyuka lifts the seal and fires her gauntlet, dealing **1153% of ATK** as Ignis DMG.\n\nThen, Fuyuka keeps attacking nearby targets, dealing **780% of ATK ×5** and **2465% of ATK** as Ignis DMG.\n\n**Blaze Unsealed** (Ultimate) can trigger **Ignis Mark**, dealing **172% of ATK** as Ignis Mark DMG to nearby targets.',
    },
  ],

  // Talents (Dupes)
  talents: [
    {
      id: '01',
      name: 'Natural Strength',
      description: 'When Fuyuka triggers an **Ignis Mark**, increases Crit DMG by **40%** for 8s.',
    },
    {
      id: '02',
      name: 'Fist of Awakening',
      description:
        'When Fuyuka casts a skill, her Ultimate DMG is increased by **33%**, stacking up to 2 times. This effect is removed after Fuyuka casts her Ultimate.',
    },
    {
      id: '03',
      name: 'Peerless Might',
      description: 'When Fuyuka casts the Ultimate, her Ignis DMG is increased by **25%** for 20s.',
    },
    {
      id: '04',
      name: 'Two Punch Hero',
      description:
        "When any Trekker applies an **Ignis Mark** to a target, Fuyuka's Ultimate DMG is increased by **66%** for 10s.",
    },
    {
      id: '05',
      name: 'Learned from the Best',
      description: "Increases Fuyuka's Ignis DMG dealt to elite or higher-tier targets by **24%**.",
    },
  ],

  // Potentials - Position Based
  mainPotentials: [
    // === BUILD 1: ENERGY CAP & AUTO ATTACK ENHANCEMENT ===
    {
      isBuildHeader: true,
      buildTitle: 'Fuyuka: Main Build 1',
      buildSubtitle: 'Energy Cap & Auto Attack Enhancement',
      buildDescription:
        'A build that raises the Energy Cap and strikes enemies with enhanced Auto Attacks.',
    },
    {
      name: 'Reload',
      description:
        "Fuyuka's Magazine now holds **9** ammo. When casting Ignis Infusion (Main Skill), deals an additional **275% of ATK ×3** as Ignis Skill DMG.",
      image: 'reload.jpg',
    },
    {
      name: 'Double Strike',
      description:
        'Fiery Punches deal additional damage. Strike 1: **200% of ATK** as Ignis Auto Attack DMG. Strike 2: **200% of ATK** as Ignis Auto Attack DMG. Strike 3: **400% of ATK** as Ignis Auto Attack DMG.',
      image: 'double_strike.jpg',
    },
    {
      name: 'Thunder Punch',
      level: 'Lv. 6',
      description:
        'The third strike of Fiery Punches deals an additional **432% of ATK** as AoE Ignis Auto Attack DMG.',
      image: 'thunder_punch.jpg',
    },
    {
      name: 'Pyro Mark',
      level: 'Lv. 6',
      description:
        'Increases the Auto Attack Damage dealt by Fiery Punches and Magma Burst by **48%**, and allows them to trigger **Ignis Mark**.',
      image: 'pyro_mark.jpg',
    },
    {
      name: 'All-Out Effort',
      level: 'Lv. 6',
      description:
        "When Fuyuka strikes with Fiery Punches, increases Fiery Punches' Auto Attack Damage by **41%** for 3s, up to 8 stacks. All stacks are removed when switching to other Trekkers.",
      image: 'all_out_effort.jpg',
    },

    // === BUILD 2: INSTANT ENERGY RELEASE ===
    {
      isBuildHeader: true,
      buildTitle: 'Fuyuka: Main Build 2',
      buildSubtitle: 'Instant Energy Release',
      buildDescription:
        'A build that instantly releases Energy, dealing massive DMG with high-frequency Auto Attacks.',
    },
    {
      name: 'Kitty Punch',
      description:
        'When Ignis Infusion (Main Skill) hits a target, inflicts Paw Print for **15s**. When Fuyuka deals Auto Attack DMG to a target inflicted with Paw Print, deals an additional **128% of ATK** as Ignis Skill DMG. This effect can trigger **Ignis Mark**.',
      image: 'kitty_punch.jpg',
    },
    {
      name: 'Multi-Shot',
      description:
        "After Fuyuka casts Ignis Infusion (Main Skill), her next Fiery Punches are enhanced into Magma Burst, consuming **3** ammo at once to deal **1207%** and **1568% of ATK** as AoE Ignis Auto Attack DMG. When Fuyuka's magazine is empty, increases her ATK SPD by **50%**.",
      image: 'multi_shot.jpg',
    },
    {
      name: 'Blast Pursuit',
      level: 'Lv. 6',
      description:
        'Every time Fuyuka deals DMG to a target 4 times, she launches an additional attack on the same target, dealing **756% of ATK** as Ignis Skill DMG.',
      image: 'blast_pursuit.jpg',
    },
    {
      name: 'Combo Punch',
      level: 'Lv. 6',
      description:
        "After casting Ignis Infusion (Main Skill), increases Fuyuka's ATK SPD by **20%** and her Skill DMG by **157%** for 8s.",
      image: 'combo_punch.jpg',
    },
    {
      name: 'Inertial Punch',
      level: 'Lv. 6',
      description:
        'Every 8s, increases the Auto Attack Damage of the next Fiery Punches and Magma Burst by **201%**.',
      image: 'inertial_punch.jpg',
    },

    // === GENERIC MAIN ROLE CARDS ===
    {
      isBuildHeader: true,
      buildTitle: 'Fuyuka: Main Generic Cards',
      buildSubtitle: 'Universal Enhancements',
      buildDescription: 'General purpose cards that work well in any Main role setup.',
    },
    {
      name: 'Finishing Blow',
      level: 'Lv. 6',
      description: "Increases Fuyuka's Ignis DMG to targets at less than **70%** HP by **85%**.",
      image: 'finishing_blow.jpg',
    },
    {
      name: 'Swirling Counterattack',
      level: 'Lv. 6',
      description: 'When Fuyuka squads up with Ignis Trekkers only, increases her ATK by **48%**.',
      image: 'swirling_counterattack.jpg',
    },
    {
      name: 'Bold Challenge',
      level: 'Lv. 6',
      description:
        'When Fuyuka lands a Crit Hit on an elite or higher-tier target, increases ATK by **11%** for 8s, up to 5 stacks.',
      image: 'bold_challenge.jpg',
    },
    {
      name: 'Blazing Heart',
      level: 'Lv. 6',
      description:
        'When Blaze Unsealed triggers an **Ignis Mark**, increases this Ultimate DMG by **19%**, up to 5 stacks.',
      image: 'blazing_heart.jpg',
    },
    {
      name: 'Ironfist Blow',
      level: 'Lv. 6',
      description:
        "Blaze Unsealed (Ultimate) delivers 4 additional punches. Also increases Fuyuka's Ultimate DMG by **279%**.",
      image: 'ironfist_blow.jpg',
    },
    {
      name: 'Peak Condition',
      level: 'Lv. 6',
      description:
        'When Fuyuka casts Blaze Unsealed (Ultimate), she gains 6 stacks of buff, each increasing her Ultimate DMG by **200%**, and then removes 1 stack of the buff per second.',
      image: 'peak_condition.jpg',
    },
  ],

  supportPotentials: [
    // === BUILD 1: SINGLE TARGET MASSIVE DMG ===
    {
      isBuildHeader: true,
      buildTitle: 'Fuyuka: Support Build 1',
      buildSubtitle: 'Single Target Massive DMG',
      buildDescription: 'A build that gathers power to deal massive single-target DMG.',
    },
    {
      name: 'Sky Crusher',
      description:
        'Eruption Punch (Support Skill) now delivers a single massive blow, dealing **1400% of ATK** as Ignis Skill DMG to nearby targets and stunning them for **3s**. It also deals **1082% of ATK** as Ignis Skill DMG to targets in a large area.',
      image: 'sky_crusher.jpg',
    },
    {
      name: 'Lightning Split',
      description:
        'When Eruption Punch (Support Skill) ends, Fuyuka strikes the nearby targets one more time, dealing **986% of ATK** as Ignis Skill DMG.',
      image: 'lightning_split.jpg',
    },
    {
      name: 'Shock Raid',
      level: 'Lv. 6',
      description:
        'When Fuyuka casts Eruption Punch (Support Skill), she charges at the target, dealing an additional **915% of ATK** as Ignis Skill DMG.',
      image: 'shock_raid.jpg',
    },
    {
      name: 'Frenzied Support',
      level: 'Lv. 6',
      description:
        "When casting Eruption Punch (Support Skill), increases Fuyuka's Ignis DMG by **43%** for 3s.",
      image: 'frenzied_support.jpg',
    },
    {
      name: 'Gaining Momentum',
      level: 'Lv. 6',
      description:
        'After Fuyuka casts her Eruption Punch (Support Skill) or Blaze Unsealed (Ultimate) and leaves the battlefield, increases the Skill DMG of the next Eruption Punch (Support Skill) by **4.7%** every second, up to 9 stacks. Resets after casting the Support Skill.',
      image: 'gaining_momentum.jpg',
    },

    // === BUILD 2: RAPID MULTI-HIT DMG ===
    {
      isBuildHeader: true,
      buildTitle: 'Fuyuka: Support Build 2',
      buildSubtitle: 'Rapid Multi-Hit DMG',
      buildDescription: 'A build that deals rapid, multi-hit DMG to targets over time.',
    },
    {
      name: 'Meteor Strike',
      description:
        "Increases the DMG of Eruption Punch (Support Skill) by **5%** and its Attack Range by **20%**. Also increases the shockwave's duration by **50%**.",
      image: 'meteor_strike.jpg',
    },
    {
      name: 'Fearless',
      description:
        'While Eruption Punch (Support Skill) is active, increases the Ignis DMG by **4%** every 0.5s.',
      image: 'fearless.jpg',
    },
    {
      name: 'Multi-Blow Impact',
      level: 'Lv. 6',
      description:
        'When Eruption Punch (Support Skill) deals damage, deals an additional **34.7% of ATK** as Ignis Skill DMG.',
      image: 'Multi-Blow_Impact.jpg',
    },
    {
      name: 'Lethal Boost',
      level: 'Lv. 6',
      description:
        "While Eruption Punch (Support Skill) is active, increases Fuyuka's Ignis DMG by **15.3%** every sec, stacking up to 4 times.",
      image: 'lethal_boost.jpg',
    },
    {
      name: 'Lightning Raid',
      level: 'Lv. 6',
      description:
        "Reduces Eruption Punch (Support Skill)'s Attack Interval by **40%** and increases its Skill DMG by **37%**.",
      image: 'lightning_raid.jpg',
    },

    // === GENERIC SUPPORT CARDS ===
    {
      isBuildHeader: true,
      buildTitle: 'Fuyuka: Support Generic Cards',
      buildSubtitle: 'Universal Enhancements',
      buildDescription: 'General purpose cards that work well in any Support role setup.',
    },
    {
      name: "Companion's Power",
      level: 'Lv. 6',
      description: "Increases Ignis Trekkers' Crit DMG by **51%**.",
      image: "Companion's_power.jpg",
    },
    {
      name: "Hero's Will",
      level: 'Lv. 6',
      description: "Increases Fuyuka's Ignis DMG by **57%** against elite or higher-tier targets.",
      image: "Hero's_Will.jpg",
    },
    {
      name: 'Prove of Strength',
      level: 'Lv. 6',
      description:
        "When Eruption Punch (Support Skill) kills a target, increases Fuyuka's ATK by **12%** for 10s, up to 4 stacks.",
      image: 'prove_of_strength.jpg',
    },
    {
      name: 'Blazing Heart',
      level: 'Lv. 6',
      description:
        'When Blaze Unsealed triggers an **Ignis Mark**, increases this Ultimate DMG by **19%**, up to 5 stacks.',
      image: 'blazing_heart.jpg',
    },
    {
      name: 'Ironfist Blow',
      level: 'Lv. 6',
      description:
        "Blaze Unsealed (Ultimate) delivers 4 additional punches. Also increases Fuyuka's Ultimate DMG by **279%**.",
      image: 'ironfist_blow.jpg',
    },
    {
      name: 'Peak Condition',
      level: 'Lv. 6',
      description:
        'When Fuyuka casts Blaze Unsealed (Ultimate), she gains 6 stacks of buff, each increasing her Ultimate DMG by **200%**, and then removes 1 stack of the buff per second.',
      image: 'peak_condition.jpg',
    },
  ],

  // Disc Information
  disc: {
    name: 'Fireworks',
    image: 'Fireworks.jpg',
    rarity: '5-Star',
    element: 'Ignis',
    tags: ['Ignis', 'VUL', 'Auto Attack', 'Skills'],
    stats: {
      basicAtk: 1631,
      ignisDmg: '15%',
    },
    skills: {
      melody: {
        name: 'Fireworks',
        effect:
          "The main Ignis Trekker gains 3 stacks of Explosive Flame after casting a skill. Each stack increases Auto Attack DMG by **14%**, stacking up to 10 times. Each ammo used by the main Ignis Trekker grants one additional stack.\n\nWhen Explosive Flame is at max stacks, increases the main Ignis Trekker's Ignis Auto Attack DMG to targets by **20%** for 12s. All Explosive Flame stacks are removed after 3s.",
      },
      harmony: {
        name: 'Warmth in the Arms',
        level: 5,
        effect:
          "Increases the squad's Ignis DMG by **20%**.\n\nWhen any Trekker triggers **Ignis Mark**, increases Ignis squadmates' Skill DMG by **20%** for 4s.",
        requirements: {
          'Melody of Ignis': '≥ Lv.70',
          'Melody of Pummel': '≥ Lv.70',
        },
      },
      skill: {
        name: 'Fervent Flames',
        level: 5,
        effect: 'Each stack of Explosive Flame additionally grants: Skill DMG +**7.5%**.',
        requirements: {
          'Melody of Pummel': '≥ Lv.75',
          'Melody of Luck': '≥ Lv.75',
          'Melody of Ignis': '≥ Lv.75',
        },
      },
    },
    support: {
      musicalNotesSource: 'Monolith Ascension',
      melodies: {
        luck: {
          baseEffect: 'Crit Rate +0.1% per level',
          maxEffect: 'Crit Rate +9.9%',
        },
        skill: {
          baseEffect: 'Skill DMG +0.46%',
          maxEffect: 'Skill DMG +45.54%',
        },
      },
    },
  },

  // Status Effects
  statusEffects: [
    {
      name: 'Ignis Mark',
      description:
        "The generic name for all Ignis Marks.\n\nWhen triggered by specific Ignis Trekkers' attacks, the status is removed, and a special effect is activated.",
    },
  ],

  // Generic Cards
  genericCards: [
    {
      name: 'Finishing Blow',
      description: "Increases Fuyuka's Ignis DMG to targets at less than **70%** HP by **85%**.",
      image: 'finishing_blow.jpg',
    },
    {
      name: 'Swirling Counterattack',
      description: 'When Fuyuka squads up with Ignis Trekkers only, increases her ATK by **48%**.',
      image: 'swirling_counterattack.jpg',
    },
    {
      name: 'Bold Challenge',
      description:
        'When Fuyuka lands a Crit Hit on an elite or higher-tier target, increases ATK by **11%** for 8s, up to 5 stacks.',
      image: 'bold_challenge.jpg',
    },
    {
      name: 'Blazing Heart',
      description:
        'When Blaze Unsealed triggers an **Ignis Mark**, increases this Ultimate DMG by **19%**, up to 5 stacks.',
      image: 'blazing_heart.jpg',
    },
    {
      name: 'Ironfist Blow',
      description:
        "Blaze Unsealed (Ultimate) delivers 4 additional punches. Also increases Fuyuka's Ultimate DMG by **279%**.",
      image: 'ironfist_blow.jpg',
    },
    {
      name: 'Peak Condition',
      description:
        'When Fuyuka casts Blaze Unsealed (Ultimate), she gains 6 stacks of buff, each increasing her Ultimate DMG by **200%**, and then removes 1 stack of the buff per second.',
      image: 'peak_condition.jpg',
    },
  ],

  story:
    'Though somewhat shy, she has formidable strength. It\'s hard to imagine that her heavy gauntlets are in fact "restraints" for her natural immense power.',

  fullStats: {
    speed: 100,
  },
};

export const fuyukaSEO = {
  title: 'Fuyuka - Stella Sora Character Guide',
  description:
    'Complete guide for Fuyuka, an 5-Star Ignis Vanguard in Stella Sora. Stats, skills, and detailed information.',
  keywords: ['Fuyuka', 'Stella Sora', '5-Star', 'Ignis', 'Vanguard', 'character guide'],
};
