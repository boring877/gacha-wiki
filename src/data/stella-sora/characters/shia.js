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
      cooldown: 0,
      energyCost: 0,
      description:
        'Commands drones to attack the target in turn.\n\n- **Strike 1**: Snow Rabbit fires bullets in a sweeping motion, dealing 22.3% of ATK as Lux DMG\n\n- **Strike 2**: Night Rabbit fires missiles, dealing 44.5% of ATK as Lux DMG\n\n- **Strike 3**: Snow Rabbit fires bullets in a sweeping motion, dealing 21.7% of ATK as Lux DMG\n\n- **Strike 4**: Night Rabbit fires missiles, dealing 28.9% of ATK as Lux DMG',
    },
    {
      name: 'Whirling Waves',
      type: 'Main Skill',
      level: 10,
      cooldown: 14,
      energyCost: 0,
      description:
        'Calls for support. Commands 2 Snow Rabbits and 1 Night Rabbit to circle and attack the target for 10s.\n\nSnow Rabbits fire bullets in a sweeping motion, dealing 23.2% of ATK as Lux DMG\n\nNight Rabbit fires missiles, dealing 32.7% of ATK as Lux DMG, and then explodes, dealing 34% of ATK as AoE Lux DMG\n\nWhirling Waves (Main Skill) can trigger Lux Mark, dealing 241% of ATK as Lux DMG.',
    },
    {
      name: 'Surfing Rondo',
      type: 'Support Skill',
      level: 10,
      cooldown: 16,
      energyCost: 0,
      description:
        'Surfs 2 times, each dealing 215% of ATK ×2 as AoE Lux DMG.\n\nRide 1: Snow Rabbit fires bullets in a sweeping motion, dealing 100% of ATK as Lux DMG every 0.3s\n\nRide 2: Night Rabbit fires missiles, each dealing 133% of ATK as Lux DMG\n\nSurfing Rondo (Support Skill) can trigger Lux Mark, dealing 241% of ATK as Lux DMG.',
    },
    {
      name: 'Divine Deluge',
      type: 'Ultimate',
      level: 10,
      cooldown: 40,
      energyCost: 340,
      description:
        'Fires the laser cannon at the target, dealing 217% of ATK as Lux DMG multiple times for 5s.\n\nThe Ultimate Divine Deluge can trigger Lux Mark, dealing 241% of ATK as Lux DMG.',
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
        'When Shia triggers **Lux Mark**, increases her **Lux DMG** by **4%** for **6s**, stacking up to **5** times.',
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
        "When any Trekker inflicts **Lux Mark**, increases Shia's **Lux DMG** by **20%** for **6s**.",
    },
  ],

  // Potentials - Position Based
  mainPotentials: [
    // === BUILD 1: SNOW RABBIT FOCUS ===
    {
      isBuildHeader: true,
      buildTitle: 'Shia: Main Build 1',
      buildDescription:
        'A build that enhances the Snow Rabbit drone, ideal for fighting a single target.',
    },
    {
      name: 'Phantom Step Radiance',
      description:
        "When Snow Rabbit deals Auto Attack DMG, it inflicts Electro Music, stacking up to **20 times**. Upon reaching the max stack limit, Electro Music's stacks are removed, dealing **369% of ATK** as **Lux Skill DMG**.",
      image: 'Phantom_step_rediance.jpg',
    },
    {
      name: 'Rimecrystal Edge',
      description:
        "Whirling Waves (Main Skill) summons a Snow Rabbit, dealing **592% of ATK** as **Lux Skill DMG** upon entering combat. Every time Snow Rabbit deals Skill DMG, it inflicts Electro Music, stacking up to **20 times**. Upon reaching the max stack limit, Electro Music's stacks are removed, dealing **369% of ATK** as **Lux Skill DMG**.",
      image: 'Rimecrystal_edge.jpg',
    },
    {
      name: 'Subzero Dominion',
      level: 'Lv. 6',
      description:
        "Whirling Waves (Main Skill) summons **1 additional Snow Rabbit**. While the Main Skill is active, increases all Snow Rabbits' **Lux DMG** by **171%**.",
      image: 'Subzero_dominion.jpg',
    },
    {
      name: 'Glacial Dash',
      level: 'Lv. 6',
      description:
        "Increases Snow Rabbit's Auto Attack DMG by **603%**. Bullets from Auto Attacks can pierce through targets.",
      image: 'Glacial_dash.jpg',
    },
    {
      name: 'Rimeheart Pulse',
      level: 'Lv. 6',
      description:
        "When a Snow Rabbit triggers **Lux Mark**, increases all the Snow Rabbits' **ATK** by **22%** for **5s**, stacking up to **6 times**.",
      image: 'Rimeheart_pulse.jpg',
    },

    // === BUILD 2: NIGHT RABBIT FOCUS ===
    {
      isBuildHeader: true,
      buildTitle: 'Shia: Main Build 2',
      buildDescription:
        'A build that enhances the Night Rabbit drone, ideal for fighting multiple targets.',
    },
    {
      name: 'Moonlight Overflow',
      description:
        'During Auto Attacks, Night Rabbit locks up to **4 targets** and fires a tracking bullet at each, each dealing **118% of ATK** as **AoE Lux DMG**.',
      image: 'Moonlight_overflow.jpg',
    },
    {
      name: 'Astral Pirouette',
      description:
        'Night Rabbit summoned by the Main Skill locks up to **2 targets** and fires a tracking bullet at each, each dealing **120% of ATK** as **AoE Lux DMG**.',
      image: 'Astral_pirouette.jpg',
    },
    {
      name: 'Lunar Detonation',
      level: 'Lv. 6',
      description:
        "Night Rabbit's missile splits after hitting a target, dealing DMG to up to **3 nearby targets**, dealing **63% of ATK** as **Lux Skill DMG** to each.",
      image: 'Lunar_detonation.jpg',
    },
    {
      name: 'Final Crescent',
      level: 'Lv. 6',
      description:
        'During Auto Attacks, every time Night Rabbit deals DMG to a different target, increases the DMG of its next Auto Attack by **117%**, stacking up to **5 times**.',
      image: 'Final_crescent.jpg',
    },
    {
      name: 'Lunar Combo',
      level: 'Lv. 6',
      description:
        'Reduces the Attack Interval of Night Rabbits summoned by Whirling Waves (Main Skill) by **40%**, and increases Skill DMG by **73%**.',
      image: 'Lunar_combo.jpg',
    },

    // === GENERIC MAIN ROLE CARDS ===
    {
      isBuildHeader: true,
      buildTitle: 'Generic',
      buildDescription: 'Universal enhancements that work well in any Main role setup.',
    },
    {
      name: 'Leporine Gale',
      level: 'Lv. 6',
      description:
        "While Whirling Waves (Main Skill) is active, increases Shia's Movement Speed by **30%**. When there are no nearby targets, increases Shia's **Lux DMG** by **96%**.",
      image: 'Leporing_gale.jpg',
    },
    {
      name: "Hare's Pursuit",
      level: 'Lv. 6',
      description:
        'Shia can dodge one more time. When Shia triggers **Lux Mark**, increases her **ATK** by **19%** for **8s**, stacking up to **2 times**.',
      image: "Hare's_Pursuit.jpg",
    },
    {
      name: "Rabbit's Beam",
      level: 'Lv. 6',
      description: "Increases Shia's **Lux DMG** to a target with less than **50% HP** by **96%**.",
      image: "Rabbit's_Beam.jpg",
    },
    {
      name: 'Howl to the Moon',
      level: 'Lv. 6',
      description:
        "Every time Divine Deluge (Ultimate) lands a Crit Hit, increases Shia's **ATK** by **8%** for **10s**, stacking up to **20 times**.",
      image: 'Howl_to_the_moon.jpg',
    },
    {
      name: 'Silent Tide',
      level: 'Lv. 6',
      description:
        "When Shia casts Divine Deluge (Ultimate), if other squadmates' Ultimates are all on cooldown, increases this cast's Ultimate DMG by **129%**.",
      image: 'Silent_tide.jpg',
    },
    {
      name: 'Wave to Oblivion',
      level: 'Lv. 6',
      description:
        'Reduces the interval between bombs of Divine Deluge (Ultimate) by **30%** and increases its Ultimate DMG by **129%**.',
      image: 'Wave_to_oblivion.jpg',
    },
  ],

  supportPotentials: [
    // === BUILD 1: DRONE SUMMON BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Shia: Support Build 1',
      buildDescription:
        'A support build that summons multiple drones after the skill ends to deal continuous DMG.',
    },
    {
      name: 'Kindred Bound',
      description:
        'When Surfing Rondo (Support Skill) ends, summons **2 Snow Rabbits** that follow the main Trekker and fire bullets to attack targets, dealing **5.6% of ATK** as **Lux Skill DMG** for **8s**.',
      image: 'Kindred_bound.jpg',
    },
    {
      name: 'Twin Moons',
      description:
        'When Surfing Rondo (Support Skill) ends, summons **2 Night Rabbits** that fire missiles to attack targets, dealing **11.5% of ATK** as **Lux Skill DMG** for **4s**.',
      image: 'Twin_moons.jpg',
    },
    {
      name: 'Dance of the Riptide',
      level: 'Lv. 6',
      description: "For each drone on the battlefield, increases the drones' DMG by **32%**.",
      image: 'Dance_of_the_riptide.jpg',
    },
    {
      name: "Snowfall's Heartbeat",
      level: 'Lv. 6',
      description:
        "Every time Snow Rabbit deals DMG, increases Shia's Skill DMG by **5.4%**, stacking up to **24 times**. When casting Surfing Rondo (Support Skill), resets this effect.",
      image: "Snowfall's_heartbeat.jpg",
    },
    {
      name: 'Eclipse Blast',
      level: 'Lv. 6',
      description:
        'When Shia triggers Lux Mark, increases Skill DMG of Night Rabbit by **135%** for **5s**.',
      image: 'Eclipse_blast.jpg',
    },

    // === BUILD 2: SURFING BURST BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Shia: Support Build 2',
      buildDescription:
        'A support build that deals burst DMG by triggering more surfing attacks when the skill is active.',
    },
    {
      name: 'Bunny Torrent',
      description:
        'Increases the number of times Shia can surf by **100%** and the DMG dealt by each ride by **41%**.',
      image: 'Bunny_torrent.jpg',
    },
    {
      name: 'Rabbit Flip',
      description:
        'Shia leaves behind a charged area as she surfs, dealing **4.7% AoE Lux Skill DMG** every **0.3s**, lasting for **1s**.',
      image: 'Rabbit_flip.jpg',
    },
    {
      name: 'Flow Reversal',
      level: 'Lv. 6',
      description:
        'When Shia deals DMG with surfing, stuns the target for **3s**. Increases Skill DMG of her rides by **223%**.',
      image: 'Flow_reversal.jpg',
    },
    {
      name: 'Kick the Wave',
      level: 'Lv. 6',
      description:
        'When Shia deals DMG with surfing, increases the surfing DMG taken by the target by **95%** for **30s**, stacking up to **5 times**.',
      image: 'Kick_the_wave.jpg',
    },
    {
      name: 'Catch the Wave',
      level: 'Lv. 6',
      description:
        "While Surfing Rondo (Support Skill) is active, increases Shia's ATK by **4.6%** per second, stacking up to **12 times**.",
      image: 'Catch_the_wave.jpg',
    },

    // === GENERIC SUPPORT CARDS ===
    {
      isBuildHeader: true,
      buildTitle: 'Generic Cards',
      buildDescription: 'Universal enhancements that work well in any Support role setup.',
    },
    {
      name: 'Moonfall',
      level: 'Lv. 6',
      description: "Increases Lux Trekkers' Crit DMG by **120%**.",
      image: 'Moonfall.jpg',
    },
    {
      name: 'Tidal Charge',
      level: 'Lv. 6',
      description:
        'Every time Shia kills a target, increases her ATK by **6.7%** for **15s**, stacking up to **6 times**.',
      image: 'Tidal_charge.jpg',
    },
    {
      name: 'Counter Current',
      level: 'Lv. 6',
      description:
        'Every time Shia triggers Lux Mark, increases her ATK by **6.7%** for **15s**, stacking up to **6 times**.',
      image: 'Counter_current.jpg',
    },
    {
      name: 'Howl to the Moon',
      level: 'Lv. 6',
      description:
        "Every time Divine Deluge (Ultimate) lands a Crit Hit, increases Shia's ATK by **8%** for **10s**, stacking up to **20 times**.",
      image: 'Howl_to_the_moon.jpg',
    },
    {
      name: 'Silent Tide',
      level: 'Lv. 6',
      description:
        "When Shia casts Divine Deluge (Ultimate), if other squadmates' Ultimates are all on cooldown, increases this cast's Ultimate DMG by **129%**.",
      image: 'Silent_tide.jpg',
    },
    {
      name: 'Wave to Oblivion',
      level: 'Lv. 6',
      description:
        'Reduces the interval between bombs of Divine Deluge (Ultimate) by **30%** and increases its Ultimate DMG by **129%**.',
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
      name: 'Lux Mark',
      description:
        "The generic name for all Lux Marks. When triggered by specific Lux Trekkers' attacks, the status is removed, and a special effect is activated.",
    },
  ],

  // Generic Cards
  genericCards: [
    {
      name: 'Moonfall',
      level: 'Lv. 6',
      description: "Increases Lux Trekkers' Crit DMG by **120%**.",
      image: 'Moonfall.jpg',
    },
    {
      name: 'Tidal Charge',
      level: 'Lv. 6',
      description:
        'Every time Shia kills a target, increases her ATK by **6.7%** for **15s**, stacking up to **6 times**.',
      image: 'Tidal_charge.jpg',
    },
    {
      name: 'Counter Current',
      level: 'Lv. 6',
      description:
        'Every time Shia triggers Lux Mark, increases her ATK by **6.7%** for **15s**, stacking up to **6 times**.',
      image: 'Counter_current.jpg',
    },
    {
      name: 'Howl to the Moon',
      level: 'Lv. 6',
      description:
        "Every time Divine Deluge (Ultimate) lands a Crit Hit, increases Shia's ATK by **8%** for **10s**, stacking up to **20 times**.",
      image: 'Howl_to_the_moon.jpg',
    },
    {
      name: 'Silent Tide',
      level: 'Lv. 6',
      description:
        "When Shia casts Divine Deluge (Ultimate), if other squadmates' Ultimates are all on cooldown, increases this cast's Ultimate DMG by **129%**.",
      image: 'Silent_tide.jpg',
    },
    {
      name: 'Wave to Oblivion',
      level: 'Lv. 6',
      description:
        'Reduces the interval between bombs of Divine Deluge (Ultimate) by **30%** and increases its Ultimate DMG by **129%**.',
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
