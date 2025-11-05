// Chixia Character Data
export const chixiaData = {
  id: 13,
  name: 'Chixia',
  slug: 'chixia',
  detailUrl: '/guides/stella-sora/characters/chixia',
  image: 'Chixia.jpg',
  icon: 'Chixia.jpg',
  rarity: '5-Star',
  element: 'Ignis',
  role: 'Versatile',
  faction: 'Yunji Studio',
  trekkerStyle: 'Collector',
  level: 90,
  tags: [],

  // Essential table stats (Level max)
  stats: {
    hp: 49164,
    attack: 7254,
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
    maxEnergy: 285,
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
      name: 'Mystic Brushstrokes',
      type: 'Attack',
      level: 10,
      cooldown: 0,
      energyCost: 0,
      description:
        'Wields the writing brush and inflicts Ink.\n\n- **Strike 1**: 34% of ATK as Ignis DMG\n\n- **Strike 2**: 41.1% of ATK as Ignis DMG\n\n- **Strike 3**: 20.1% of ATK × 4 as Ignis DMG\n\n- **Strike 4**: 18.8% of ATK × 3 as Ignis DMG\n\n- **Strike 5**: 62.5% of ATK as Ignis DMG',
    },
    {
      name: 'Purifying Flames',
      type: 'Main Skill',
      level: 10,
      cooldown: 7,
      energyCost: 0,
      description:
        'Spreads out a torrent of flames, dealing 34% of ATK as AoE Ignis DMG every 0.2s for a total of 3s. When dealing DMG to targets with Ink, inflicts Ignite.\n\nPurifying Flames (Main Skill) can trigger Ignis Mark, dealing 95% of ATK as AoE Ignis Mark DMG.',
    },
    {
      name: 'Awakening: Crimson Dragon',
      type: 'Support Skill',
      level: 10,
      cooldown: 18,
      energyCost: 0,
      description:
        'Summons a Crimson Dragon every 2s, up to 3 times. Each Crimson Dragon lasts for 8s and spits Ink at the target, dealing 109% of ATK as Ignis DMG. Upon vanishing, it charges toward the target, dealing 158% of ATK as AoE Ignis DMG.\n\nWhen Crimson Dragon deals DMG, inflicts Ignis Mark: Divine Flame.\n\nMinions summoned by Awakening: Crimson Dragon will be removed when casting the Support Skill again.',
    },
    {
      name: "Dragon's Ascension",
      type: 'Ultimate',
      level: 10,
      cooldown: 30,
      energyCost: 285,
      description:
        'Summons a Fire Dragon to circle around the target, dealing 244% of ATK as Ignis DMG in a large area every 0.3s for a total of 5s.',
    },
  ],

  // Talents (Dupes)
  talents: [
    {
      id: '01',
      name: 'Blaze Tome',
      description:
        "Increases allies' **Ignis DMG** dealt to targets inflicted with **Ignis Mark** by **14%**.",
    },
    {
      id: '02',
      name: 'Blaze Unbound',
      description:
        "Increases **Crit Rate** by **10%** and **Crit DMG** by **10%** for Chixia's **Ultimate**.",
    },
    {
      id: '03',
      name: 'Prime Advantage',
      description:
        "When Chixia casts her **Ultimate**, increases squadmates' **ATK** by **28%** for **15s**.",
    },
    {
      id: '04',
      name: 'Trial of Growth',
      description:
        'When **Ignis Mark** is triggered, increases the **ATK** of Chixia and her minions by **20%** for **12s**.',
    },
    {
      id: '05',
      name: 'Qualified Xuan Shi',
      description:
        'Increases the **Ignis DMG** dealt by Chixia and her minions to **elite** or higher-tier targets by **24%**.',
    },
  ],

  // Potentials - Position Based
  mainPotentials: [
    // === BUILD 1: FLAME DURATION BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Chixia: Main Build 1',
      buildSubtitle: 'Flame Duration Enhancement',
      buildDescription:
        'A build that extends the duration of flames and enhances Auto Attacks when there is enough heat.',
    },
    {
      name: 'Sleepless Flame',
      description:
        'Increases the duration of Purifying Flames (Main Skill) by **3s** and Skill DMG by **45%**.',
      image: 'sleepless_flame.jpg',
    },
    {
      name: 'Shooting Star',
      description:
        "When casting Purifying Flames (Main Skill), generates 1 stack of heat every second. Once full, enhances Chixia's Auto Attacks, dealing **28.3% of ATK × 8/93.5% of ATK × 2** as AoE Ignis DMG. Each enhanced Auto Attack consumes 1 stack of heat. When an enhanced Auto Attack deals damage to targets with Ink, inflicts Ignite.",
      image: 'shooting_star.jpg',
    },
    {
      name: 'Ashes of the Firepit',
      level: 'Lv. 6',
      description:
        'When a target inflicted with Ignite is killed, leaves behind lingering flames, dealing **124% of ATK** as AoE Ignis Skill DMG per second for a total of 8s.',
      image: 'ashes_of_the_firepit.jpg',
    },
    {
      name: 'Blistering Flame Corrosion',
      level: 'Lv. 6',
      description: 'Reduces the ATK of targets inflicted with Ignite by **18%**.',
      image: 'blistering_flame_corrosion.jpg',
    },
    {
      name: 'Flame Resonance',
      level: 'Lv. 6',
      description:
        "While Purifying Flames (Main Skill) is active, increases the squad's ATK by **93%**.",
      image: 'flame_resonance.jpg',
    },

    // === BUILD 2: DPS BURST BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Chixia: Main Build 2',
      buildSubtitle: 'DPS Burst Enhancement',
      buildDescription: 'A DPS build that boosts the burst DMG of flames.',
    },
    {
      name: 'Flame-Stained Ink',
      description:
        'Ink can stack up to **4** times on targets. When a target with 4 stacks of Ink triggers Ignite, deals **349% of ATK** as AoE Ignis Skill DMG.',
      image: 'flame_stained_ink.jpg',
    },
    {
      name: 'Blazing Rainbow Array',
      description:
        'Increases the Attack Range of Purifying Flames (Main Skill). Increases Skill DMG by **272%**. This effect gradually diminishes over 3s.',
      image: 'blazing_rainbow_array.jpg',
    },
    {
      name: 'Flame-Ink Matrix',
      level: 'Lv. 6',
      description:
        'When casting Purifying Flames (Main Skill), deals an additional **365% of ATK** as AoE Ignis Skill DMG and inflicts Ink.',
      image: 'Flame-ink_matrix.jpg',
    },
    {
      name: 'Scorching Ink',
      level: 'Lv. 6',
      description:
        'For each stack of Ink on the target, increases the Ignis DMG taken by the target by **17%**.',
      image: 'scorching_ink.jpg',
    },
    {
      name: 'Infernal Ember',
      level: 'Lv. 6',
      description:
        'When Chixia casts Purifying Flames (Main Skill), she gains a shield equal to **19%** of her Max HP.',
      image: 'infernal_ember.jpg',
    },

    // === GENERIC MAIN ROLE CARDS ===
    {
      isBuildHeader: true,
      buildTitle: 'Chixia: Main Generic Cards',
      buildSubtitle: 'Universal Enhancements',
      buildDescription: 'General purpose cards that work well in any Main role setup.',
    },
    {
      name: 'Ink Brilliance',
      level: 'Lv. 6',
      description:
        "Can dodge one more time. When casting Purifying Flames (Main Skill), increases ATK by **115%** for 3s. While the Main Skill is active, each Crit Hit increases the skill's duration by 1s, up to a total of 3s.",
      image: 'ink_brilliance.jpg',
    },
    {
      name: 'Inkburn Stroke',
      level: 'Lv. 6',
      description:
        "Dragon's Ascension (Ultimate) can trigger Ignis Mark, dealing **95% of ATK** as AoE Ignis Mark DMG. Each time the mark is triggered, increases Chixia's ATK by **33%** for 10s, up to 5 stacks.",
      image: 'Inkburn_storke.jpg',
    },
    {
      name: 'Finishing Touch',
      level: 'Lv. 6',
      description:
        'When Chixia triggers Ignis Mark, increases the Ignis DMG taken by the target by **15%** for 10s, stacking up to 3 times.',
      image: 'finishing_touch.jpg',
    },
    {
      name: 'Dragon Blaze',
      level: 'Lv. 6',
      description:
        "When Dragon's Ascension (Ultimate) lands a Crit Hit, increases Chixia's ATK by **65%** for 10s, up to 5 stacks.",
      image: 'dragon_blaze.jpg',
    },
    {
      name: 'Blazing Vortex',
      level: 'Lv. 6',
      description:
        "When casting Dragon's Ascension, creates a blaze vortex, dealing **195% of ATK** as AoE Ignis Ultimate DMG every 0.5s for a total of 8s.",
      image: 'blazing_vortex.jpg',
    },
    {
      name: 'Dragon Breath',
      level: 'Lv. 6',
      description:
        "When Dragon's Ascension ends, the mighty dragon possesses the main Trekker, dealing **495% of ATK** as AoE Ignis Ultimate DMG every 2s for a total of 8s.",
      image: 'dragon_breath.jpg',
    },
  ],

  supportPotentials: [
    // === BUILD 1: MULTIPLE CRIMSON DRAGONS BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Chixia: Support Build 1',
      buildSubtitle: 'Multiple Crimson Dragons',
      buildDescription:
        'A build that allows skills to summon multiple Crimson Dragons for ranged attacks.',
    },
    {
      name: 'Crimson Dragon: Convergence',
      description:
        "Increases Crimson Dragon's ATK by **43%**. Chixia can summon **1** additional Crimson Dragon.",
      image: 'crimson_dragon_convergence.jpg',
    },
    {
      name: 'Crimson Dragon: Chant',
      description:
        "When Chixia has more than 1 minion, increases all of her minions' ATK by **35%** and their Attack Speed by **35%**.",
      image: 'crimson_dragon_chant.jpg',
    },
    {
      name: 'Ink Sigil: Trail Seeker',
      level: 'Lv. 6',
      description:
        'When a squadmate casts a Main Skill, Crimson Dragon deals an additional **477% of ATK** as Ignis Minion DMG to the target.',
      image: 'ink_sigil_trail_seeker.jpg',
    },
    {
      name: 'Ink Sigil: Horn Call',
      level: 'Lv. 6',
      description: "Each of Chixia's minions increases all friendly units' ATK by **27%**.",
      image: 'Ink_sigil_horn_cal.jpg',
    },
    {
      name: 'Ink Sigil: Barrier Construct',
      level: 'Lv. 6',
      description:
        "Chixia's minions increase the Crit DMG of nearby allies by **3.3%**, up to 6 times.",
      image: 'ink_sigil_barrier_construct.jpg',
    },

    // === BUILD 2: TIGER OF THE EAST BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Chixia: Support Build 2',
      buildSubtitle: 'Tiger of the East Enhancement',
      buildDescription:
        'A build that allows skills to summon a Tiger of the East for melee attacks.',
    },
    {
      name: 'Sigil Unleashed: Tiger of the East',
      description:
        'Crimson Dragon enhances into Tiger of the East. Increases its ATK by **50%** every 2s. Tiger of the East lasts for 15s, dealing **319% of ATK/426% of ATK/284% of ATK × 2** as AoE Ignis Minion DMG, and inflicting Ignis Mark: Divine Flame.',
      image: 'sigil_unleashed_tiger_of_the_east.jpg',
    },
    {
      name: 'Tiger of the East: Blazing Scales',
      description:
        'The first minion summoned by Awakening: Crimson Dragon (Support Skill) is inflicted with Blazing Barrier, dealing **105.1% of ATK** as AoE Ignis Minion DMG to nearby targets every 0.5s.',
      image: 'tiger_of_the_east_blazing_scales.jpg',
    },
    {
      name: 'Ink Sigil: Ambush',
      level: 'Lv. 6',
      description:
        "When Chixia's minions deal DMG, increases all friendly units' ATK near the target by **60%** for 4s.",
      image: 'ink_sigil_ambush.jpg',
    },
    {
      name: 'Ink Sigil: Blood Fed',
      level: 'Lv. 6',
      description: "Increases the DMG of Chixia's minions by **24.6%** per second, up to 15 times.",
      image: 'ink_sigil_blood_fed.jpg',
    },
    {
      name: 'Ink Sigil: Raid',
      level: 'Lv. 6',
      description:
        "Increases the Minion DMG dealt by Chixia's minions to close-by targets by **135%**.",
      image: 'ink_sigil_raid.jpg',
    },

    // === GENERIC SUPPORT CARDS ===
    {
      isBuildHeader: true,
      buildTitle: 'Chixia: Support Generic Cards',
      buildSubtitle: 'Universal Enhancements',
      buildDescription: 'General purpose cards that work well in any Support role setup.',
    },
    {
      name: 'Sigil Unleashed: Flame Glow',
      level: 'Lv. 6',
      description: "Increases all Ignis squadmates' Ignis DMG by **60%**.",
      image: 'sigil_unleashed_flame_glow.jpg',
    },
    {
      name: 'Majestic Stride',
      level: 'Lv. 6',
      description: "Increases Chixia's Minion DMG by **65%**.",
      image: 'majestic_stride.jpg',
    },
    {
      name: 'Prayer of Raging Flame',
      level: 'Lv. 6',
      description:
        "Dragon's Ascension (Ultimate) can inflict Ignis Mark: Divine Flame. When dealing DMG to a target, increases all friendly units' ATK by **71%** for 10s, stacking up to 5 times.",
      image: 'prayer_of_raging_flame.jpg',
    },
    {
      name: 'Dragon Blaze',
      level: 'Lv. 6',
      description:
        "When Dragon's Ascension (Ultimate) lands a Crit Hit, increases Chixia's ATK by **65%** for 10s, up to 5 stacks.",
      image: 'dragon_blaze.jpg',
    },
    {
      name: 'Blazing Vortex',
      level: 'Lv. 6',
      description:
        "When casting Dragon's Ascension, creates a blaze vortex, dealing **195% of ATK** as AoE Ignis Ultimate DMG every 0.5s for a total of 8s.",
      image: 'blazing_vortex.jpg',
    },
    {
      name: 'Dragon Breath',
      level: 'Lv. 6',
      description:
        "When Dragon's Ascension ends, the mighty dragon possesses the main Trekker, dealing **495% of ATK** as AoE Ignis Ultimate DMG every 2s for a total of 8s.",
      image: 'dragon_breath.jpg',
    },
  ],

  // Disc Information
  disc: {
    name: 'Mystic Brushstrokes',
    image: 'Mystic_brushstrokes.jpg',
    rarity: '5-Star',
    element: 'Ignis',
    tags: ['Ignis', 'Element', 'Skills', 'Minion'],
    stats: {
      basicAtk: 1582,
      ignisDmg: '15%',
    },
    skills: {
      melody: {
        name: 'Mystic Brushstrokes',
        effect:
          "Increases the squad's Ignis DMG by **20%**. When any character triggers Ignis Mark, increases Ignis squadmates' Skill DMG by **30%** for 4s.",
      },
      harmony: {
        name: 'Wild Brushstrokes',
        level: 5,
        effect:
          "Increases Ignis squadmates' Skill DMG by **20%**. When the target is inflicted with Ignite, increases by an additional **20%**.",
        requirements: {
          'Melody of Ignis': '≥ Lv.70',
          'Melody of Skill': '≥ Lv.70',
        },
      },
      skill: {
        name: 'Power Unleashed',
        level: 5,
        effect:
          'When any Ignis Trekker casts a Support Skill, increases the ATK of the main Ignis Trekker and minions by **15%** for 8s.',
        requirements: {
          'Melody of Ultimate': '≥ Lv.75',
          'Melody of Ignis': '≥ Lv.75',
          'Melody of Skill': '≥ Lv.75',
        },
      },
    },
    support: {
      musicalNotesSource: 'Monolith Ascension',
      melodies: {
        skill: {
          baseEffect: 'Skill DMG +0.46% per level',
          maxEffect: 'Skill DMG +45.54%',
        },
        pummel: {
          baseEffect: 'ATK +0.3% per level',
          maxEffect: 'ATK +29.7%',
        },
      },
    },
  },

  // Status Effects
  statusEffects: [
    {
      name: 'Ignis Mark: Divine Flame',
      description:
        'A special status applied to the target by some Ignis Trekkers, lasting for **10s**. Can be triggered by the attacks of specific Ignis Trekkers. When triggered, deals large AoE DMG.',
    },
    {
      name: 'Ignite',
      description:
        "Chixia's flames ignite the Ink applied on the target, dealing DMG pers for **8s**. Her flames deal Ignis DMG equal to **95% of ATK** in total.",
    },
    {
      name: 'Ignis Mark',
      description:
        "The generic name for all Ignis Marks. When triggered by specific Ignis Trekkers' attacks, the status is removed, and a special effect is activated.",
    },
  ],

  // Generic Cards
  genericCards: [
    {
      name: 'Ink Brilliance',
      description:
        "Can dodge one more time. When casting Purifying Flames (Main Skill), increases ATK by **115%** for 3s. While the Main Skill is active, each Crit Hit increases the skill's duration by 1s, up to a total of 3s.",
      image: 'ink_brilliance.jpg',
    },
    {
      name: 'Inkburn Stroke',
      description:
        "Dragon's Ascension (Ultimate) can trigger Ignis Mark, dealing **95% of ATK** as AoE Ignis Mark DMG. Each time the mark is triggered, increases Chixia's ATK by **33%** for 10s, up to 5 stacks.",
      image: 'Inkburn_storke.jpg',
    },
    {
      name: 'Finishing Touch',
      description:
        'When Chixia triggers Ignis Mark, increases the Ignis DMG taken by the target by **15%** for 10s, stacking up to 3 times.',
      image: 'finishing_touch.jpg',
    },
    {
      name: 'Dragon Blaze',
      description:
        "When Dragon's Ascension (Ultimate) lands a Crit Hit, increases Chixia's ATK by **65%** for 10s, up to 5 stacks.",
      image: 'dragon_blaze.jpg',
    },
    {
      name: 'Blazing Vortex',
      description:
        "When casting Dragon's Ascension, creates a blaze vortex, dealing **195% of ATK** as AoE Ignis Ultimate DMG every 0.5s for a total of 8s.",
      image: 'blazing_vortex.jpg',
    },
    {
      name: 'Dragon Breath',
      description:
        "When Dragon's Ascension ends, the mighty dragon possesses the main Trekker, dealing **495% of ATK** as AoE Ignis Ultimate DMG every 2s for a total of 8s.",
      image: 'dragon_breath.jpg',
    },
  ],

  story:
    'Nobody would expect a Xuan Shi to be so timid. Her giant writing brush is a modified flamethrower and also her instrument in drawing powerful talismans.',

  fullStats: {
    speed: 100,
  },
};

export const chixiaSEO = {
  title: 'Chixia - Stella Sora Character Guide',
  description:
    'Complete guide for Chixia, an 5-Star Ignis Versatile in Stella Sora. Stats, skills, and detailed information.',
  keywords: ['Chixia', 'Stella Sora', '5-Star', 'Ignis', 'Versatile', 'character guide'],
};
