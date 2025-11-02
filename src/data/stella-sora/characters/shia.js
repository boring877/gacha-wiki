// Shia Character Data
export const shiaData = {
  id: 2,
  name: 'Shia',
  slug: 'shia',
  detailUrl: '/guides/stella-sora/characters/shia',
  image: 'Shia.jpg',
  icon: 'Shia.jpg',
  rarity: '5-Star',
  element: 'Lux',
  role: 'Vanguard',
  faction: 'Freelance Trekker',
  trekkerStyle: 'Adventurous',
  level: 90,

  // Essential table stats (Level max)
  stats: {
    hp: 43962,
    attack: 6333,
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
    maxEnergy: 340,
    chargeEfficiencyMain: 100.0,
    chargeEfficiencySupport: 75.0,
  },

  // Elemental damage stats
  elementalStats: {
    Lux: {
      dmg: 100.0,
      pen: 0,
      ignoreRes: 0.0,
    },
  },

  // Skills
  skills: [
    {
      name: 'Sail of Twin Moons',
      type: 'Attack',
      level: 10,
      description:
        'Commands **Snow Rabbit** and **Night Rabbit** drones to attack the target in turn.',
      damage: {
        type: 'Lux DMG',
        strikes: [
          '22.3% of **ATK** as **Lux DMG** (Snow Rabbit)',
          '44.5% of **ATK** as **Lux DMG** (Night Rabbit)',
          '21.7% of **ATK** as **Lux DMG** (Snow Rabbit)',
          '28.9% of **ATK** as **Lux DMG** (Night Rabbit)',
        ],
      },
    },
    {
      name: 'Whirling Waves',
      type: 'Main Skill',
      level: 10,
      cooldown: 14,
      description:
        'Calls for support. Commands **2 Snow Rabbits** and **1 Night Rabbit** to circle and attack the target for **10s**.',
      damage: {
        type: 'Lux DMG',
        strikes: [
          '23.2% of **ATK** as **Lux DMG** (Snow Rabbits)',
          '32.7% of **ATK** as **Lux DMG** (Night Rabbit)',
          '34% of **ATK** as AoE **Lux DMG** (Night Rabbit explosion)',
        ],
      },
      effects: [
        {
          type: 'trigger',
          description:
            '**Whirling Waves** (Main Skill) can trigger **Sigil of Lux**, dealing **241% of ATK** as **Lux DMG**.',
        },
      ],
    },
    {
      name: 'Surfing Rondo',
      type: 'Support Skill',
      level: 10,
      cooldown: 16,
      description: '**Surfs 2 times**, each dealing **215% of ATK ×2 as AoE Lux DMG**.',
      damage: {
        type: 'Lux DMG',
        strikes: [
          '100% of **ATK** as **Lux DMG** every 0.3s (Ride 1 - Snow Rabbit)',
          '133% of **ATK** as **Lux DMG** (Ride 2 - Night Rabbit)',
        ],
      },
      effects: [
        {
          type: 'trigger',
          description:
            '**Surfing Rondo** (Support Skill) can trigger **Sigil of Lux**, dealing **241% of ATK** as **Lux DMG**.',
        },
      ],
    },
    {
      name: 'Divine Deluge',
      type: 'Ultimate',
      level: 10,
      cooldown: 40,
      energyCost: 340,
      description:
        'Fires the **laser cannon** at the target, dealing **217% of ATK** as **Lux DMG** multiple times for **5s**.',
      damage: {
        type: 'Lux DMG',
        normalCast: '217% of **ATK** as **Lux DMG** multiple times for 5s',
      },
      effects: [
        {
          type: 'trigger',
          description:
            'The Ultimate **Divine Deluge** can trigger **Sigil of Lux**, dealing **241% of ATK** as **Lux DMG**.',
        },
      ],
    },
  ],

  // Talents (Dupes)
  talents: [
    {
      id: '01',
      name: 'Sparkling Dawn',
      description:
        'Whenever Shia deals **Ultimate DMG** to a target, increases her **ATK** by **1.4%** for **25s**, stacking up to **30** times.',
    },
    {
      id: '02',
      name: "Tidecaller's Resonance",
      description:
        "Increases Shia's **Ultimate DMG** dealt to **elite** or higher - tier targets by **60%**.",
    },
    {
      id: '03',
      name: "Meteor's Guidance",
      description:
        'When Shia triggers **Sigil of Lux**, increases her **Lux DMG** by **4%** for **6s**, stacking up to **5** times.',
    },
    {
      id: '04',
      name: 'Beyond the Horizon',
      description:
        'After Shia deals **Skill DMG** to a target, her **Ultimate DMG** is increased by **1%**, stacking up to **50** times. This effect is removed after Shia casts her **Ultimate**.',
    },
    {
      id: '05',
      name: 'Last Tear',
      description:
        "When any Trekker inflicts **Sigil of Lux**, increases Shia's **Lux DMG** by **20%** for **6s**.",
    },
  ],

  // Potentials - Position Based
  mainPotentials: [
    // === BUILD 1: SNOW RABBIT FOCUS ===
    {
      isBuildHeader: true,
      buildTitle: 'Shia: Main Build 1',
      buildSubtitle: 'Snow Rabbit Focus',
      buildDescription:
        'A build that enhances the Snow Rabbit drone, ideal for fighting a single target.',
    },
    {
      name: 'Phantom Step Radiance',
      description:
        'When dealing **Auto Attack DMG**, **Snow Rabbit** inflicts **Electro Music** that deals additional DMG upon reaching the **max stack limit**.',
      image: 'Phantom_step_rediance.jpg',
    },
    {
      name: 'Rimecrystal Edge',
      description:
        'The **Main Skill** summons a **Snow Rabbit** that inflicts **Electro Music** when dealing **Skill DMG**, dealing additional DMG upon reaching the **max stack limit**.',
      image: 'Rimecrystal_edge.jpg',
    },
    {
      name: 'Subzero Dominion',
      level: 'Lv. 6',
      description:
        "The **Main Skill** summons **more Snow Rabbits**. While the **Main Skill** is active, increases all **Snow Rabbits' Lux DMG**.",
      image: 'Subzero_dominion.jpg',
    },
    {
      name: 'Glacial Dash',
      level: 'Lv. 6',
      description:
        "Increases Snow Rabbit's Auto Attack DMG. Bullets from Auto Attacks can pierce through targets.",
      image: 'Glacial_dash.jpg',
    },
    {
      name: 'Rimeheart Pulse',
      level: 'Lv. 6',
      description:
        "When a Snow Rabbit triggers **Sigil of Lux**, increases all the Snow Rabbits' ATK.",
      image: 'Rimeheart_pulse.jpg',
    },

    // === BUILD 2: NIGHT RABBIT FOCUS ===
    {
      isBuildHeader: true,
      buildTitle: 'Shia: Main Build 2',
      buildSubtitle: 'Night Rabbit Focus',
      buildDescription:
        'A build that enhances the Night Rabbit drone, ideal for fighting multiple targets.',
    },
    {
      name: 'Moonlight Overflow',
      description:
        'Night Rabbit fires tracking bullets at nearby targets during Auto Attacks. When the tracking bullets deal DMG, Night Rabbit gains Moongaze, increasing its DMG.',
      image: 'Moonlight_overflow.jpg',
    },
    {
      name: 'Astral Pirouette',
      description:
        'Night Rabbit summoned by the Main Skill fires tracking bullets at nearby targets when attacking. When the tracking bullets deal DMG, Night Rabbit gains Moongaze, increasing its DMG.',
      image: 'Astral_pirouette.jpg',
    },
    {
      name: 'Lunar Detonation',
      level: 'Lv. 6',
      description:
        "Night Rabbit's missile splits after hitting a target, dealing DMG to nearby targets.",
      image: 'Lunar_detonation.jpg',
    },
    {
      name: 'Final Crescent',
      level: 'Lv. 6',
      description:
        "Based on the number of targets hit by Night Rabbit's Auto Attack, increases the DMG of its next Auto Attack.",
      image: 'Final_crescent.jpg',
    },
    {
      name: 'Lunar Combo',
      level: 'Lv. 6',
      description:
        'Reduces the Attack Interval of Night Rabbits summoned by the Main Skill and increases Skill Damage.',
      image: 'Lunar_combo.jpg',
    },

    // === GENERIC MAIN ROLE CARDS ===
    {
      isBuildHeader: true,
      buildTitle: 'Shia: Main Generic Cards',
      buildSubtitle: 'Universal Enhancements',
      buildDescription: 'General purpose cards that work well in any Main role setup.',
    },
    {
      name: 'Leporine Gale',
      level: 'Lv. 6',
      description:
        "While **Whirling Waves** (Main Skill) is active, increases Shia's Movement Speed. When there are no nearby targets, increases Shia's Lux DMG.",
      image: 'Leporing_gale.jpg',
    },
    {
      name: "Hare's Pursuit",
      level: 'Lv. 6',
      description:
        'Shia can dodge one more time. When Shia triggers **Sigil of Lux**, increases her ATK.',
      image: "Hare's_Pursuit.jpg",
    },
    {
      name: "Rabbit's Beam",
      level: 'Lv. 6',
      description: "Increases Shia's Lux DMG to a target with less than 50% HP.",
      image: "Rabbit's_Beam.jpg",
    },
    {
      name: 'Howl to the Moon',
      level: 'Lv. 6',
      description: "Every time the Ultimate lands a Crit Hit, increases Shia's ATK.",
      image: 'Howl_to_the_moon.jpg',
    },
    {
      name: 'Silent Tide',
      level: 'Lv. 6',
      description:
        "When Shia casts the Ultimate, if other squadmates' Ultimates are all on cooldown, increases this cast's Ultimate DMG.",
      image: 'Silent_tide.jpg',
    },
    {
      name: 'Wave to Oblivion',
      level: 'Lv. 6',
      description: "Increases Shia's Ultimate DMG and reduces the Ultimate's Attack Interval.",
      image: 'Wave_to_oblivion.jpg',
    },
  ],

  supportPotentials: [
    // === BUILD 1: DRONE SUMMON BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Shia: Support Build 1',
      buildSubtitle: 'Drone Summon Build',
      buildDescription:
        'A support build that summons multiple drones after the skill ends to deal continuous DMG.',
    },
    {
      name: 'Kindred Bound',
      description:
        'After casting the Support Skill, summons Snow Rabbits that follow the main Shia and attack targets.',
      image: 'Kindred_bound.jpg',
    },
    {
      name: 'Twin Moons',
      description: 'After casting the Support Skill, summons Night Rabbits that attack targets.',
      image: 'Twin_moons.jpg',
    },
    {
      name: 'Dance of the Riptide',
      level: 'Lv. 6',
      description: "Increases the drones' DMG based on the number of drones on the battlefield.",
      image: 'Dance_of_the_riptide.jpg',
    },
    {
      name: "Snowfall's Heartbeat",
      level: 'Lv. 6',
      description: 'When Snow Rabbit deals DMG, increases Skill Damage.',
      image: "Snowfall's_heartbeat.jpg",
    },
    {
      name: 'Eclipse Blast',
      level: 'Lv. 6',
      description: "When Shia triggers **Sigil of Lux**, increases Night Rabbit's Skill Damage.",
      image: 'Eclipse_blast.jpg',
    },

    // === BUILD 2: SURFING BURST BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Shia: Support Build 2',
      buildSubtitle: 'Surfing Burst Build',
      buildDescription:
        'A support build that deals burst DMG by triggering more surfing attacks when the skill is active.',
    },
    {
      name: 'Bunny Torrent',
      description: 'Increases the number of times Shia can surf and the DMG dealt by each ride.',
      image: 'Bunny_torrent.jpg',
    },
    {
      name: 'Rabbit Flip',
      description: 'Shia leaves behind a charged area as she surfs, dealing DMG over time.',
      image: 'Rabbit_flip.jpg',
    },
    {
      name: 'Flow Reversal',
      level: 'Lv. 6',
      description:
        'When Shia deals DMG with surfing, stuns the target. Increases Skill Damage of her rides.',
      image: 'Flow_reversal.jpg',
    },
    {
      name: 'Kick the Wave',
      level: 'Lv. 6',
      description: 'When Shia deals DMG with surfing, increases the DMG taken by the target.',
      image: 'Kick_the_wave.jpg',
    },
    {
      name: 'Catch the Wave',
      level: 'Lv. 6',
      description: "While the Support Skill is active, increases Shia's ATK over time.",
      image: 'Catch_the_wave.jpg',
    },

    // === GENERIC SUPPORT CARDS ===
    {
      isBuildHeader: true,
      buildTitle: 'Shia: Support Generic Cards',
      buildSubtitle: 'Universal Enhancements',
      buildDescription: 'General purpose cards that work well in any Support role setup.',
    },
    {
      name: 'Moonfall',
      level: 'Lv. 6',
      description: "Increases Lux Trekkers' Crit DMG.",
      image: 'Moonfall.jpg',
    },
    {
      name: 'Tidal Charge',
      level: 'Lv. 6',
      description: 'Every time Shia kills a target, increases her ATK.',
      image: 'Tidal_charge.jpg',
    },
    {
      name: 'Counter Current',
      level: 'Lv. 6',
      description: 'Every time Shia triggers **Sigil of Lux**, increases her ATK.',
      image: 'Counter_current.jpg',
    },
    {
      name: 'Howl to the Moon',
      level: 'Lv. 6',
      description: "Every time the Ultimate lands a Crit Hit, increases Shia's ATK.",
      image: 'Howl_to_the_moon.jpg',
    },
    {
      name: 'Silent Tide',
      level: 'Lv. 6',
      description:
        "When Shia casts the Ultimate, if other squadmates' Ultimates are all on cooldown, increases this cast's Ultimate DMG.",
      image: 'Silent_tide.jpg',
    },
    {
      name: 'Wave to Oblivion',
      level: 'Lv. 6',
      description: "Increases Shia's Ultimate DMG and reduces the Ultimate's Attack Interval.",
      image: 'Wave_to_oblivion.jpg',
    },
  ],

  // Disc Information
  disc: {
    name: 'Ripples of Nostalgia',
    image: 'ripples_of_nostalgia.jpg',
    rarity: '5-Star',
    element: 'Lux',
    tags: ['Lux', 'Element', 'VUL', 'Skills'],
    stats: {
      basicAtk: 1631,
      luxDmg: '15%',
    },
    skills: {
      melody: {
        name: 'Ripples of Nostalgia',
        effect:
          "Increases the squad's Lux DMG by **30%**. When the main Lux Trekkers deals Ultimate DMG to a target, the target takes **5%** more Lux DMG for **15s**, stacking up to **9** times.",
      },
      harmony: {
        name: 'Dance of Shimmers',
        level: 5,
        effect:
          "Increases the main Lux Trekker's Auto Attack and Skill DMG by **25%**. When the main Lux Trekker deals Skill DMG, increases this effect by an additional **22.5%** for **6s**.",
        requirements: {
          'Melody of Lux': '≥ Lv.70',
          'Melody of Skill': '≥ Lv.70',
        },
      },
      skill: {
        name: 'Glaring Steps',
        level: 5,
        effect:
          "After the main Lux Trekker deals Skill DMG **30** times in total, increases the squad's Lux DMG by **45%** for **10s**.",
        requirements: {
          'Melody of Lux': '≥ Lv.75',
          'Melody of Skill': '≥ Lv.75',
          'Melody of Luck': '≥ Lv.75',
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
      name: 'Sigil of Lux',
      description:
        "The generic name for all Lux Marks. When triggered by specific Lux Trekkers' attacks, the status is removed, and a special effect is activated.",
    },
  ],

  // Generic Cards
  genericCards: [
    {
      name: 'Moonfall',
      description: "Increases Lux Trekkers' Crit DMG.",
      image: 'Moonfall.jpg',
    },
    {
      name: 'Tidal Charge',
      description: 'Every time Shia kills a target, increases her ATK.',
      image: 'Tidal_charge.jpg',
    },
    {
      name: 'Counter Current',
      description: 'Every time Shia triggers **Sigil of Lux**, increases her ATK.',
      image: 'Counter_current.jpg',
    },
    {
      name: 'Howl to the Moon',
      description: "Every time the Ultimate lands a Crit Hit, increases Shia's ATK.",
      image: 'Howl_to_the_moon.jpg',
    },
    {
      name: 'Silent Tide',
      description:
        "When Shia casts the Ultimate, if other squadmates' Ultimates are all on cooldown, increases this cast's Ultimate DMG.",
      image: 'Silent_tide.jpg',
    },
    {
      name: 'Wave to Oblivion',
      description: "Increases Shia's Ultimate DMG and reduces the Ultimate's Attack Interval.",
      image: 'Wave_to_oblivion.jpg',
    },
  ],

  story:
    'Shia is the definition of agility. Riding her surfboard alongside Snow Rabbit and Night Rabbit, she unleashes a tidal onslaught that crashes through everything in its path.',

  fullStats: {
    speed: 100,
  },
};

export const shiaSEO = {
  title: 'Shia - Stella Sora Character Guide',
  description:
    'Complete guide for Shia, an 5-Star Lux Vanguard in Stella Sora. Stats, skills, talents, potentials, and detailed information.',
  keywords: [
    'Shia',
    'Stella Sora',
    '5-Star',
    'Lux',
    'Vanguard',
    'character guide',
    'Ripples of Nostalgia',
  ],
};
