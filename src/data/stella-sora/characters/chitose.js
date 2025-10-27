// Chitose Character Data
export const chitoseData = {
  id: 1,
  name: 'Chitose',
  slug: 'chitose',
  detailUrl: '/guides/stella-sora/characters/chitose',
  image: 'Chitose.jpg',
  rarity: 'SSR',
  element: 'Aqua',
  role: 'Vanguard',
  faction: 'Freelance Trekker',
  trekkerStyle: 'Inquisitive',
  level: 90,
  tags: [],

  // Essential table stats (Level max)
  stats: {
    hp: 87563,
    attack: 7542,
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
    Aqua: {
      dmg: 100.0,
      pen: 0,
      ignoreRes: 0.0,
    },
  },

  // Skills
  skills: [
    {
      name: 'Aeroflow',
      type: 'Attack',
      level: 10,
      description: 'Wields the odachi to deal DMG multiple times.',
      damage: {
        type: 'Aqua DMG',
        strikes: [
          '25.6% of **ATK** × 2 as **Aqua DMG**',
          '37.2% of **ATK** as **Aqua DMG**',
          '31.4% of **ATK** and 73% of **ATK** as **Aqua DMG**',
          '26.1% of **ATK** × 2 as **Aqua DMG**',
          '28.2% of **ATK** × 2 and 56.4% of **ATK** as **Aqua DMG**',
          '160% of **ATK** and 86% of **ATK** as **Aqua DMG**',
        ],
      },
    },
    {
      name: 'Torrent Flash',
      type: 'Main Skill',
      level: 10,
      cooldown: 8,
      description:
        'Dashes forward to attack multiple times, transforming into Torrent Flash: Scale after a few casts.',
      damage: {
        type: 'Aqua DMG',
        normalCast: '305% of **ATK** × 2 as **AoE Aqua DMG**',
        scaleVariant: '356% of **ATK** × 3 as **AoE Aqua DMG**',
      },
      effects: [
        {
          type: 'trigger',
          description:
            '**Torrent Flash** (Main Skill) and **Torrent Flash: Scale** can trigger **Aqua Mark** (dealing 104% of **ATK** as **AoE Aqua Mark DMG** and inflicting **Chill**)',
        },
      ],
    },
    {
      name: 'Water Surge',
      type: 'Support Skill',
      level: 10,
      cooldown: 12,
      description: 'Delivers 3 rounds of rapid slashes with Mirror Images that assist in combat.',
      damage: {
        type: 'Aqua DMG',
        normalCast: '27.3% of **ATK** × 4 as **AoE Aqua DMG** (3 rounds)',
      },
      effects: [
        {
          type: 'summon',
          description:
            'When casting the **Support Skill**, generates multiple **Mirror Images** nearby, dealing 51.5% of **ATK** as **Aqua DMG**. This effect can only be triggered up to 3 times.',
        },
        {
          type: 'trigger',
          description:
            '**Water Surge** (Support Skill) can trigger **Aqua Mark** (dealing 104% of **ATK** as **AoE Aqua Mark DMG** and inflicting **Chill**)',
        },
      ],
    },
    {
      name: 'Waves of Naraka',
      type: 'Ultimate',
      level: 10,
      cooldown: 30,
      energyCost: 285,
      description:
        'Dual-wields katanas in a large area, then summons a Coiling Serpent for massive damage.',
      damage: {
        type: 'Aqua DMG',
        initialAttack: '193% of **ATK** × 11 as **Aqua DMG** in a large area',
        coilingSerpent: '908% of **ATK** as **Aqua DMG** in a large area',
      },
      effects: [
        {
          type: 'trigger',
          description:
            '**Naraka Waves** (Ultimate) can trigger **Aqua Mark** (dealing 104% of **ATK** as **AoE Aqua Mark DMG** and inflicting **Chill**)',
        },
      ],
    },
  ],

  // Talents (Dupes)
  talents: [
    {
      id: '01',
      name: 'Tideweaver',
      description:
        'When Chitose casts her **Ultimate**, increases her **ATK** by **30%** for **20s**.',
    },
    {
      id: '02',
      name: 'Blade in Sleeves',
      description: '**Aqua DMG** +**20%** for **8s** when Chitose triggers **Aqua Mark**.',
    },
    {
      id: '03',
      name: 'Tideborn Shadow',
      description:
        'When Chitose deals DMG to a target with **Mirror Images**, increases her **ATK** by **1%** for **8s**, stacking up to **20** times.',
    },
    {
      id: '04',
      name: 'Afterrain Clarity',
      description:
        'When Chitose triggers **Aqua Mark**, increases her **Ultimate DMG** by **2.2%**, stacking up to **10** times. This effect is removed after she casts her **Ultimate**.',
    },
    {
      id: '05',
      name: "Cloudstrider's Melody",
      description:
        "Increases Chitose's **Aqua DMG** dealt to **elite** or higher - tier targets by **24%**.",
    },
  ],

  // Potentials - Position Based
  mainPotentials: [
    // === BUILD 1: AUTO ATTACK FOCUS ===
    {
      isBuildHeader: true,
      buildTitle: 'Chitose: Main Build 1',
      buildSubtitle: 'Auto Attack Focus',
      buildDescription:
        'An Auto Attack build that generates Coiling Serpents and Mirror Images upon skill activation.',
    },
    {
      name: "Serpent's Glide",
      description:
        "After Chitose casts Torrent Flash (Main Skill), her Auto Attack will summon a Coiling Serpent, dealing **42.3% of ATK** as AoE Aqua Auto Attack DMG. Can trigger **Aqua Mark**. Additionally, Chitose's resistance to interruption is increased for 12s.",
      image: "serpent's_glide.jpg",
    },
    {
      name: 'Mirror Blade',
      description:
        "After Chitose casts Torrent Flash (Main Skill), her Auto Attack will summon a Mirror Image with **60% of Chitose's ATK** that performs Auto Attacks. Chitose's resistance to interruption is also increased for 12s.",
      image: 'mirror_blade.jpg',
    },
    {
      name: 'Aqueous Phantasm',
      level: 'Lv. 6',
      description:
        'When the Coiling Serpent hits a target, another Coiling Serpent is summoned, dealing **148% of ATK** as Aqua Auto Attack DMG. This effect can only be triggered 3 times every 3s and can trigger **Aqua Mark**.',
      image: 'aqueous_phantasm.jpg',
    },
    {
      name: 'Tremble and Fall',
      level: 'Lv. 6',
      description:
        'Auto Attack DMG is increased by **49%**. After dodging or casting Torrent Flash (Main Skill), Chitose can deliver the last strike of her Auto Attack immediately.',
      image: 'tremble_and_fall.jpg',
    },
    {
      name: 'Dance of Elegance',
      level: 'Lv. 6',
      description:
        'When the Coiling Serpent deals DMG, Auto Attack DMG is increased by **6.6% for 3s**, stacking up to 10 times.',
      image: 'dance_of_elegance.jpg',
    },

    // === BUILD 2: SKILL DAMAGE FOCUS ===
    {
      isBuildHeader: true,
      buildTitle: 'Chitose: Main Build 2',
      buildSubtitle: 'Skill Damage Focus',
      buildDescription:
        'A skill-focused build that enhances Torrent Flash damage and reduces cooldowns.',
    },
    {
      name: 'Cascade of Ruin',
      description:
        'Chitose may unleash Torrent Flash: Scale after one Torrent Flash cast. Also enhances Torrent Flash: Scale, dealing **273% of ATK × 4** as AoE Aqua Skill DMG.',
      image: 'cascade_of_ruin.jpg',
    },
    {
      name: 'Against the Flow',
      description:
        "Reduces the cooldown of Torrent Flash (Main Skill) by 50%. When casting Torrent Flash, summons a Mirror Image that has **50% of Chitose's ATK**. The Mirror Image can cast Skills and trigger **Aqua Mark**.",
      image: 'against_the_flow.jpg',
    },
    {
      name: 'Flowing Circle',
      level: 'Lv. 6',
      description:
        "Increases Chitose's Skill DMG by **75%**. Also increases Torrent Flash (Main Skill)'s initial uses by 1.",
      image: 'flowing_circle.jpg',
    },
    {
      name: 'Serpent in Tide',
      level: 'Lv. 6',
      description:
        "When casting Torrent Flash (Main Skill), increases Chitose's Skill DMG by **20% for 6s**, stacking up to 3 times.",
      image: 'serpent_in_tide.jpg',
    },
    {
      name: 'Returning Tide',
      level: 'Lv. 6',
      description:
        "Increases Chitose's Skill DMG by **48%**. After Torrent Flash: Scale kills a target, the next Torrent Flash becomes Torrent Flash: Scale.",
      image: 'returning_tide.jpg',
    },

    // === GENERIC MAIN ROLE CARDS ===
    {
      isBuildHeader: true,
      buildTitle: 'Chitose: Main Generic Cards',
      buildSubtitle: 'Universal Enhancements',
      buildDescription: 'General purpose cards that work well in any Main role setup.',
    },
    {
      name: 'Azure Embrace',
      level: 'Lv. 6',
      description:
        "When an Aqua squadmate is on the battlefield, increase Chitose's ATK by **60%**.",
      image: 'azure_embrace.jpg',
    },
    {
      name: 'Waltz of Ripples',
      level: 'Lv. 6',
      description:
        'Chitose can dodge through barriers. After dodging, increases her ATK by **43%** for 6s.',
      image: 'waltz_of_ripples.jpg',
    },
    {
      name: 'Adamant Scales',
      level: 'Lv. 6',
      description:
        "Increases Chitose's ATK by **24%**. When hit, increases Chitose's ATK by an additional **33%** for 8s.",
      image: 'adamant_scales.jpg',
    },
    {
      name: "Serpent's Saliva",
      level: 'Lv. 6',
      description:
        "Increases Chitose's Ultimate DMG by **233%**. When Naraka Waves (Ultimate) triggers Aqua Mark, there is a **50%** chance to convert 1 stack of Chill.",
      image: "serpent's_saliva.jpg",
    },
    {
      name: 'Serpent Dance',
      level: 'Lv. 6',
      description:
        "When casting Waves of Naraka (Ultimate), increases Chitose's ATK by **98%** for 20s.",
      image: 'serpent_dance.jpg',
    },
    {
      name: 'Tide of Serpent Bones',
      level: 'Lv. 6',
      description:
        "Increases Waves of Naraka (Ultimate)'s DMG to targets inflicted with Chill/Freeze by **291%**.",
      image: 'tide_of_serpent_bones.jpg',
    },
  ],

  supportPotentials: [
    // === BUILD 1: CRIT BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Chitose: Support Build 1',
      buildSubtitle: 'Crit Build',
      buildDescription:
        'A Crit build that increases skill activation count and DMG upon Crit Hits.',
    },
    {
      name: 'Submerged Fang',
      description:
        'Water Surge (Support Skill) can deliver 2 additional rounds of rapid slashes, and their Crit Rate is increased by **15%**.',
      image: 'submerged_fang.jpg',
    },
    {
      name: 'Whirl Blade',
      description:
        'When casting Water Surge (Support Skill), increases the Crit Rate of the rapid slashes by **35%**. When Chitose lands a Crit Hit with a rapid slash, she delivers another round of rapid slash immediately, dealing **5.9% of ATK × 4** as AoE Aqua Skill DMG. This extra slash cannot trigger this effect again.',
      image: 'whirl_blade.jpg',
    },
    {
      name: 'Luminous Blade Song',
      level: 'Lv. 6',
      description:
        "Increases Chitose's Skill Crit DMG by **167%**. Water Surge (Support Skill) can cast 1 more round of rapid combo slashes.",
      image: 'luminous_blade_song.jpg',
    },
    {
      name: 'Blink Combo Slash',
      level: 'Lv. 6',
      description:
        "When the rapid combo slashes from Water Surge (Support Skill) land a Crit Hit, increases the following rapid combo slashes' Crit DMG by **24%**. This effect can only be triggered once per 0.5s.",
      image: 'blink_combo_slash.jpg',
    },
    {
      name: 'Sing with Steel',
      level: 'Lv. 6',
      description:
        'Every time Water Surge (Support Skill) casts rapid combo slashes, increases their DMG by **8%**.',
      image: 'sing_with_steel.jpg',
    },

    // === BUILD 2: MIRROR IMAGE DPS BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Chitose: Support Build 2',
      buildSubtitle: 'Mirror Image DPS Build',
      buildDescription:
        'A sustained DPS build that allows skills to consecutively generate Mirror Images and inflict Blade Mark, dealing DMG multiple times.',
    },
    {
      name: 'Blade of the Deep',
      description:
        'When casting Water Surge (Support Skill), generates Mirror Images dealing **66% of ATK** as Aqua DMG. Up to **6** Mirror Images can be generated through this effect.',
      image: 'blade_of_the_deep.jpg',
    },
    {
      name: 'Where Shadows Drown',
      description:
        'Mirror Images of Water Surge (Support Skill) explode upon hits, dealing **48% of ATK** as additional AoE Aqua DMG. They can trigger Aqua Mark.',
      image: 'where_shadows_drown.jpg',
    },
    {
      name: 'Shattered Breath',
      level: 'Lv. 6',
      description: "Increases Mirror Images' DMG to targets at less than **70% HP** by **138%**.",
      image: 'shattered_breath.jpg',
    },
    {
      name: 'Shadow Cutter',
      level: 'Lv. 6',
      description:
        "Increases Mirror Images' Skill DMG by **42%**. When a Mirror Image kills a target, increases other Mirror Images' Skill DMG by **83%**.",
      image: 'shadow_cutter.jpg',
    },
    {
      name: 'Mirror Tide',
      level: 'Lv. 6',
      description:
        "When a Mirror Image kills a target, increases Mirror Images' ATK by **25%**. Resets when the Support Skill ends.",
      image: 'mirror_tide.jpg',
    },

    // === GENERIC SUPPORT CARDS ===
    {
      isBuildHeader: true,
      buildTitle: 'Chitose: Support Generic Cards',
      buildSubtitle: 'Universal Enhancements',
      buildDescription: 'General purpose cards that work well in any Support role setup.',
    },
    {
      name: 'Unseen Aquatic Blade',
      level: 'Lv. 6',
      description: "For each Aqua Trekker on the squad, increases Chitose's Aqua DMG by **20%**.",
      image: 'unseen_aquatic_blade.jpg',
    },
    {
      name: 'Water Edge',
      level: 'Lv. 6',
      description: "Increases Chitose and the Mirror Image's Mark DMG by **189%**.",
      image: 'water_edge.jpg',
    },
    {
      name: 'Waterflow Blade',
      level: 'Lv. 6',
      description: "Increases Chitose's ATK by **40%**.",
      image: 'waterflow_blade.jpg',
    },
    {
      name: "Serpent's Saliva",
      level: 'Lv. 6',
      description:
        "Increases Chitose's Ultimate DMG by **233%**. When Naraka Waves (Ultimate) triggers Aqua Mark, there is a **50%** chance to convert 1 stack of Chill.",
      image: "serpent's_saliva.jpg",
    },
    {
      name: 'Serpent Dance',
      level: 'Lv. 6',
      description:
        "When casting Waves of Naraka (Ultimate), increases Chitose's ATK by **98%** for 20s.",
      image: 'serpent_dance.jpg',
    },
    {
      name: 'Tide of Serpent Bones',
      level: 'Lv. 6',
      description:
        "Increases Waves of Naraka (Ultimate)'s DMG to targets inflicted with Chill/Freeze by **291%**.",
      image: 'tide_of_serpent_bones.jpg',
    },
  ],

  // Disc Information
  disc: {
    name: 'Sword Against Stream',
    image: 'sword_against_stream.jpg',
    rarity: 'SSR',
    element: 'Aqua',
    tags: ['Aqua', 'Element', 'Skills', 'ATK'],
    stats: {
      basicAtk: 1631,
      aquaDmg: '15%',
    },
    skills: {
      melody: {
        name: 'Sword Against Stream',
        effect:
          "Increases the squad's Aqua DMG by **30%**. When any Trekker triggers **Aqua Mark**, increases the squad's Aqua DMG by **30%** for 4 seconds.",
      },
      harmony: {
        name: 'Splashing Moves',
        level: 5,
        effect:
          "After the main Aqua Trekker deals damage **20** times in total, increases Aqua squadmates' ATK by **70%** for **10** seconds. This effect can only be triggered once every **15** seconds.",
        requirements: {
          'Melody of Pummel': '≥ Lv.70',
          'Melody of Aqua': '≥ Lv.70',
        },
      },
      skill: {
        name: 'Water Mirror',
        level: 5,
        effect:
          "Increases Aqua squadmates' Skill DMG dealt to elite or higher - tier targets by **60%**.",
        requirements: {
          'Melody of Luck': '≥ Lv.75',
          'Melody of Pummel': '≥ Lv.75',
          'Melody of Aqua': '≥ Lv.75',
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
        ultimate: {
          baseEffect: 'Ultimate DMG +1%',
          maxEffect: 'Ultimate DMG +99%',
        },
      },
    },
  },

  // Status Effects
  statusEffects: [
    {
      name: 'Aqua Mark',
      description:
        "The generic name for all **Aqua Marks**. When triggered by specific **Aqua Trekkers'** attacks, the status is removed, and a special effect is activated.",
    },
    {
      name: 'Chill',
      description:
        'Reduces movement speed by **25%** for **10s**, up to **3** stacks. At **3** stacks, it converts into **Freeze** for **3s**.',
    },
    {
      name: 'Freeze',
      description: '**Frozen** and incapacitated. Unable to take action.',
    },
  ],

  // Generic Cards
  genericCards: [
    {
      name: 'Azure Embrace',
      description:
        "When an Aqua squadmate is on the battlefield, increase Chitose's ATK by **60%**.",
      image: 'azure_embrace.jpg',
    },
    {
      name: 'Waltz of Ripples',
      description:
        'Chitose can dodge through barriers. After dodging, increases her ATK by **43%** for 6s.',
      image: 'waltz_of_ripples.jpg',
    },
    {
      name: 'Adamant Scales',
      description:
        "Increases Chitose's ATK by **24%**. When hit, increases Chitose's ATK by an additional **33%** for 8s.",
      image: 'adamant_scales.jpg',
    },
    {
      name: "Serpent's Saliva",
      description:
        "Increases Chitose's Ultimate DMG by **233%**. When Naraka Waves (Ultimate) triggers Aqua Mark, there is a **50%** chance to convert 1 stack of Chill.",
      image: "serpent's_saliva.jpg",
    },
    {
      name: 'Serpent Dance',
      description:
        "When casting Waves of Naraka (Ultimate), increases Chitose's ATK by **98%** for 20s.",
      image: 'serpent_dance.jpg',
    },
    {
      name: 'Tide of Serpent Bones',
      description:
        "Increases Waves of Naraka (Ultimate)'s DMG to targets inflicted with Chill/Freeze by **291%**.",
      image: 'tide_of_serpent_bones.jpg',
    },
  ],

  story:
    'Chitose is a formidable warrior who sees herself as the blade, with a presence as sharp as steel. Her blade can summon flowing currents, shaping them into water serpents that crash through enemy lines.',

  fullStats: {
    speed: 100,
  },
};

export const chitoseSEO = {
  title: 'Chitose - Stella Sora Character Guide',
  description:
    'Complete guide for Chitose, an SSR Aque Vanguard in Stella Sora. Stats, skills, and detailed information.',
  keywords: ['Chitose', 'Stella Sora', 'SSR', 'Aqua', 'Vanguard', 'character guide'],
};
