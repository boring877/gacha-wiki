// Nanoha Character Data
export const nanohaData = {
  id: 3,
  name: 'Nanoha',
  slug: 'nanoha',
  detailUrl: '/guides/stella-sora/characters/nanoha',
  image: 'Nanoha.jpg',
  icon: 'Nanoha.jpg',
  rarity: '5-Star',
  element: 'Ventus',
  role: 'Vanguard',
  faction: 'GoodWind Homecare',
  trekkerStyle: 'Inquisitive',
  level: 90,

  // Essential table stats (Level max)
  stats: {
    hp: 51179,
    attack: 7426,
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
    Ventus: {
      dmg: 100.0,
      pen: 0,
      ignoreRes: 0.0,
    },
  },

  // Skills
  skills: [
    {
      name: 'Flowers Scatter',
      type: 'Attack',
      level: 10,
      description: 'Throws **multiple darts**.',
      damage: {
        type: 'Ventus DMG',
        strikes: [
          '30.7% of **ATK** ×2 as **Ventus DMG**',
          '30.7% of **ATK** ×2 as **Ventus DMG**',
          '44.9% of **ATK** ×3 as **Ventus DMG**',
        ],
      },
    },
    {
      name: 'Flowers Dance',
      type: 'Main Skill',
      level: 10,
      cooldown: 10,
      description:
        'Throws **two sunflower shurikens** that strike the target and return for **4 times**. Each hit deals **13.5% of ATK** as **Ventus DMG**.',
      damage: {
        type: 'Ventus DMG',
        strikes: [
          '13.5% of **ATK** as **Ventus DMG** (each hit, 4 times)',
          '104% of **ATK** as **AoE Ventus Mark DMG** (trigger)',
        ],
      },
      effects: [
        {
          type: 'trigger',
          description:
            '**Flowers Dance** (Main Skill) can trigger **Ventus Mark**, dealing **104% of ATK** as AoE **Ventus Mark** DMG.',
        },
      ],
    },
    {
      name: 'Flowers Bloom',
      type: 'Support Skill',
      level: 10,
      cooldown: 12,
      description:
        'Conjures an **exploding sunflower** that fires **12 darts**, each dealing **72.3% of ATK** as **Ventus DMG**.',
      damage: {
        type: 'Ventus DMG',
        strikes: [
          '72.3% of **ATK** as **Ventus DMG** (each dart, 12 darts)',
          '104% of **ATK** as **AoE Ventus Mark DMG** (trigger)',
        ],
      },
      effects: [
        {
          type: 'trigger',
          description:
            '**Flowers Bloom** (Support Skill) can trigger **Ventus Mark**, dealing **104% of ATK** as AoE **Ventus Mark** DMG.',
        },
      ],
    },
    {
      name: 'Flowers Thrice',
      type: 'Ultimate',
      level: 10,
      cooldown: 30,
      energyCost: 285,
      description:
        'Generates **2 stationary clones** that attack enemies with **darts**, dealing multiple instances of damage as **Ventus Ultimate DMG**. Each clone lasts for **10s**. Up to **2 clones** can be present simultaneously.',
      damage: {
        type: 'Ventus Ultimate DMG',
        normalCast: 'Multiple damage instances as **Ventus Ultimate DMG** (clones)',
      },
      effects: [
        {
          type: 'trigger',
          description:
            'When a clone deals DMG, it can trigger **Ventus Mark**, dealing **104% of ATK as AoE Ventus Mark DMG**.',
        },
        {
          type: 'duration',
          description: 'Each clone lasts for 10s. Up to 2 clones can be present simultaneously.',
        },
      ],
    },
  ],

  // Talents (Dupes)
  talents: [
    {
      id: '01',
      name: 'Like a Dream',
      description:
        "When Nanoha's **clone** is on the battlefield, her **ATK** is increased by **47%**.",
    },
    {
      id: '02',
      name: 'Rejuvenating Spring',
      description:
        'When Nanoha triggers **Ventus Mark**, her **ATK** is increased by **20%** for **10s**.',
    },
    {
      id: '03',
      name: 'Esoteric Arts',
      description:
        'When Nanoha casts a **skill**, her **Ventus DMG** is increased by **40%** for **5s**.',
    },
    {
      id: '04',
      name: 'Circulation of Wind',
      description:
        'When Nanoha deals **Auto Attack DMG** to a target, increases her **Auto Attack DMG** by **22%** for **6s**.',
    },
    {
      id: '05',
      name: 'Ninja Creed',
      description:
        "Increases Nanoha's **Ventus DMG** dealt to **elite** or higher-tier targets by **24%**.",
    },
  ],

  // Potentials - Position Based
  mainPotentials: [
    // === BUILD 1: ATTACK SPEED BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Nanoha: Main Build 1',
      buildSubtitle: 'Attack Speed Build',
      buildDescription:
        'A build that increases Attack Speed and dart count, with consecutive hits triggering additional AoE DMG.',
    },
    {
      name: 'Growth Tempest',
      description:
        'After Nanoha deals DMG with **Auto Attacks 3 times**, deals an additional **26.2% of ATK** as **AoE Ventus DMG**.',
      image: 'growth_tempest.jpg',
    },
    {
      name: 'Blossom Flurry',
      description:
        'Within **10s** after casting **Flowers Dance (Main Skill)**, Nanoha fires **3 additional shurikens** with her **Auto Attacks** that can **pierce** through the target, each dealing **9.8% of ATK as Ventus Auto Attack DMG**.',
      image: 'blossom_flurry.jpg',
    },
    {
      name: 'Gale Rage',
      level: 'Lv. 6',
      description:
        'Each time Nanoha throws the **sunflower shuriken**, increases **Attack Speed by 7.2% and Auto Attack Damage by 24%** for **5s**, stacking up to **3** times.',
      image: 'gale_rage.jpg',
    },
    {
      name: 'Phantom Follower',
      level: 'Lv. 6',
      description:
        "Each mirror image on the battlefield increases Nanoha's Auto Attack Damage by 46%.",
      image: 'phantom_follower.jpg',
    },
    {
      name: 'Sun Chaser',
      level: 'Lv. 6',
      description:
        'When Nanoha deals DMG, there is a 30% chance to increase her Attack Speed by 33% and ATK by 39% for 5s.',
      image: 'sun_chaser.jpg',
    },

    // === BUILD 2: RANGE BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Nanoha: Main Build 2',
      buildSubtitle: 'Range Build',
      buildDescription:
        'A build that enhances dart attack range and enables multi-hit DMG, ideal for fighting large targets.',
    },
    {
      name: 'Whirling Blade',
      description:
        'The sunflower shuriken deals DMG multiple times, hitting targets once every 0.15s.',
      image: 'whirling_blade.jpg',
    },
    {
      name: 'Bloom Dance',
      description: "Increases sunflower shuriken's Attack Range by 50% and its Skill DMG by 66.7%.",
      image: 'bloom_dance.jpg',
    },
    {
      name: 'Blossom Shower',
      level: 'Lv. 6',
      description:
        "When casting Flowers Dance (Main Skill), the clones fire non-returning sunflower shurikens, each dealing 1264% of Nanoha's ATK as Ventus Ultimate DMG.",
      image: 'blossom_shower.jpg',
    },
    {
      name: 'Distant Prayer',
      level: 'Lv. 6',
      description:
        'The farther the sunflower shuriken is from Nanoha, the more DMG it deals, with a minimum increase of 65%.',
      image: 'Distant_prayer.jpg',
    },
    {
      name: 'Splendid Vortex',
      level: 'Lv. 6',
      description:
        'When Flowers Dance (Main Skill) triggers a Ventus Mark, increases Skill DMG by 130% for 3s, stacking up to 3 times.',
      image: 'splendid_vortex.jpg',
    },

    // === GENERIC MAIN ROLE CARDS ===
    {
      isBuildHeader: true,
      buildTitle: 'Nanoha: Main Generic Cards',
      buildSubtitle: 'Universal Enhancements',
      buildDescription: 'General purpose cards that work well in any Main role setup.',
    },
    {
      name: 'Sky Piercer',
      level: 'Lv. 6',
      description: 'When casting Flowers Dance (Main Skill), increases ATK by 60% for 10s.',
      image: 'sky_piercer.jpg',
    },
    {
      name: 'Blooming Flowers',
      level: 'Lv. 6',
      description:
        'When Nanoha triggers Ventus Mark, increases her ATK by 8% for 2s, stacking up to 6 times.',
      image: 'blooming_flowers.jpg',
    },
    {
      name: 'Starlit Dash',
      level: 'Lv. 6',
      description:
        'Nanoha can dodge one more time. When dodging, increases her ATK by 37.3% for 4s.',
      image: 'starlit_dash.jpg',
    },
    {
      name: 'Blossom Rhyme',
      level: 'Lv. 6',
      description:
        "The clones now follow the main Trekker into combat. Increases the clones' DMG by 39%.",
      image: 'blossom_rhyme.jpg',
    },
    {
      name: 'Infinite Shade',
      level: 'Lv. 6',
      description:
        "Increases Nanoha's Ultimate DMG by 136%. Flowers Thrice (Ultimate) will summon one additional mirror image. Up to 3 mirror images can exist at the same time.",
      image: 'infinite_shade.jpg',
    },
    {
      name: 'Wind Whispers',
      level: 'Lv. 6',
      description:
        "Increases Nanoha's ATK by 29%. Also increases the duration of mirror images by 6s.",
      image: 'wind_whispers.jpg',
    },
  ],

  supportPotentials: [
    // === BUILD 1: AOE BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Nanoha: Support Build 1',
      buildSubtitle: 'AoE Build',
      buildDescription:
        'An AoE build that triggers Ventus Marks when hitting multiple targets, reducing cooldown greatly.',
    },
    {
      name: 'Revitalizing Nourishment',
      description:
        'When casting Flowers Bloom (Support Skill), if the first round of shurikens deals DMG to 3 or more targets, Nanoha will fire 1 additional round of shurikens. This effect can only be triggered once per cast.',
      image: 'revitalizing_nourishment.jpg',
    },
    {
      name: 'Gentle Thaw',
      description:
        'When Flowers Bloom (Support Skill) triggers Ventus Mark, causes an explosion that deals 39.7% Ventus Skill DMG and reduces Skill Cooldown by 3s. This effect can only be triggered 1 time per Skill cast.',
      image: 'gentle_thaw.jpg',
    },
    {
      name: 'Shift Duty',
      level: 'Lv. 6',
      description:
        "When an exploding sunflower is conjured, the clones fire 12 shurikens at nearby targets, each dealing 84.5% of Nanoha's ATK as Ventus Minion DMG.",
      image: 'shift_duty.jpg',
    },
    {
      name: 'Tender Nurture',
      level: 'Lv. 6',
      description:
        'When casting Flowers Bloom (Support Skill), increases DMG dealt to targets with HP above 50% by 87%.',
      image: 'Tender_nurture.jpg',
    },
    {
      name: 'Troubleshooting',
      level: 'Lv. 6',
      description:
        "When Flowers Bloom (Support Skill) deals DMG for the first time, increases Nanoha's Skill DMG by 14.7% for 5s, stacking up to 5 times.",
      image: 'troubleshooting.jpg',
    },

    // === BUILD 2: SINGLE-TARGET BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Nanoha: Support Build 2',
      buildSubtitle: 'Single-Target Build',
      buildDescription:
        'A single-target build that continuously tracks and pursues targets, gradually increasing detonation DMG.',
    },
    {
      name: 'Floral Nexus',
      description:
        'Shurikens from Flowers Bloom (Support Skill) follow their targets, with DMG increased by 27.3%.',
      image: 'floral_nexus.jpg',
    },
    {
      name: 'Unfulfilled Enthusiasm',
      description:
        'Shurikens from Flowers Bloom (Support Skill) inflict Marks additionally, stacking up to 12 times. When the exploding sunflower disappears, it detonates all Marks, dealing 156.7% of ATK as Ventus Skill DMG. Each stack increases the DMG by 15%.',
      image: 'unfulfilled_enthusiasm.jpg',
    },
    {
      name: 'Tender Care',
      level: 'Lv. 6',
      description:
        "When an exploding sunflower disappears, the clones fire 5 shurikens forward, each dealing 88.7% of Nanoha's ATK as Ventus Skill DMG.",
      image: 'tender_care.jpg',
    },
    {
      name: 'VIP Focus',
      level: 'Lv. 6',
      description:
        'Increases the DMG Flowers Bloom (Support Skill) dealt to elite or higher-tier targets by 81%.',
      image: 'vip_focus.jpg',
    },
    {
      name: 'Regular Trim',
      level: 'Lv. 6',
      description:
        'Increases the Resilience Break Efficiency of Flowers Bloom (Support Skill) by an additional 136%.',
      image: 'regular_trim.jpg',
    },

    // === GENERIC SUPPORT CARDS ===
    {
      isBuildHeader: true,
      buildTitle: 'Nanoha: Support Generic Cards',
      buildSubtitle: 'Universal Enhancements',
      buildDescription: 'General purpose cards that work well in any Support role setup.',
    },
    {
      name: 'United in Times',
      level: 'Lv. 6',
      description:
        "When Flowers Bloom (Support Skill) triggers a Ventus Mark, increases the squad's ATK by 75% for 5s.",
      image: 'united_in_times.jpg',
    },
    {
      name: 'Dance of Scattering Petals',
      level: 'Lv. 6',
      description:
        "When the main Trekker casts the Main Skill, increases Nanoha's ATK by 40% for 6s.",
      image: 'dance_of_scattering_petals.jpg',
    },
    {
      name: 'Tender Trap',
      level: 'Lv. 6',
      description:
        'When an ally has full Energy, increases the DMG of Flowers Bloom (Support Skill) by 87%.',
      image: 'tender_trap.jpg',
    },
    {
      name: 'Blossom Rhyme',
      level: 'Lv. 6',
      description:
        "The clones now follow the main Trekker into combat. Increases the clones' DMG by 39%.",
      image: 'blossom_rhyme.jpg',
    },
    {
      name: 'Infinite Shade',
      level: 'Lv. 6',
      description:
        "Increases Nanoha's Ultimate DMG by 136%. Flowers Thrice (Ultimate) will summon one additional mirror image. Up to 3 mirror images can exist at the same time.",
      image: 'infinite_shade.jpg',
    },
    {
      name: 'Wind Whispers',
      level: 'Lv. 6',
      description:
        "Increases Nanoha's ATK by 29%. Also increases the duration of mirror images by 6s.",
      image: 'wind_whispers.jpg',
    },
  ],

  // Disc Information
  disc: {
    name: 'Daylight Garden',
    image: 'daylight_garden.jpg',
    rarity: '5-Star',
    element: 'Ventus',
    tags: ['Ventus', 'Auto Attack', 'Skills', 'Ultimate'],
    stats: {
      basicAtk: 1582,
      ventusDmg: '15%',
    },
    skills: {
      melody: {
        name: 'Daylight Garden',
        effect:
          "Increases the Auto Attack DMG & Skill DMG of the main Ventus character by **28%**. When any character triggers Ventus Mark, increases the main Ventus character's Ventus DMG by **24%** for **4s**.",
      },
      harmony: {
        name: 'Fragrant Illusion',
        level: 5,
        effect:
          "Increases Ventus squadmates' Ultimate DMG by **40%**. When the main Ventus character deals Ultimate DMG, increases her Ventus DMG by **24%** for **20s**.",
        requirements: {
          'Melody of Ultimate': '≥ Lv.70',
          'Melody of Ventus': '≥ Lv.70',
        },
      },
      skill: {
        name: 'Swaying Petals',
        level: 5,
        effect:
          'After the main Ventus Trekker deals DMG to the same target **10** times, increases the Ventus DMG the target takes by **20%** for **6s**. This effect can only be triggered once every **10s** for the same target.',
        requirements: {
          'Melody of Ultimate': '≥ Lv.75',
          'Melody of Ventus': '≥ Lv.75',
          'Melody of Skill': '≥ Lv.75',
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
        ventus: {
          baseEffect: 'Ventus DMG +0.3%',
          maxEffect: 'Ventus DMG +29.7%',
        },
      },
    },
  },

  // Status Effects
  statusEffects: [
    {
      name: 'Ventus Mark',
      description:
        "The generic name for all Ventus Marks. When triggered by specific Ventus Trekkers' attacks, the status is removed, and a special effect is activated.",
    },
  ],

  // Generic Cards (duplicate from supportPotentials for compatibility)
  genericCards: [
    {
      name: 'United in Times',
      level: 'Lv. 6',
      description:
        "When Flowers Bloom (Support Skill) triggers a Ventus Mark, increases the squad's ATK by 75% for 5s.",
      image: 'united_in_times.jpg',
    },
    {
      name: 'Dance of Scattering Petals',
      level: 'Lv. 6',
      description:
        "When the main Trekker casts the Main Skill, increases Nanoha's ATK by 40% for 6s.",
      image: 'dance_of_scattering_petals.jpg',
    },
    {
      name: 'Tender Trap',
      level: 'Lv. 6',
      description:
        'When an ally has full Energy, increases the DMG of Flowers Bloom (Support Skill) by 87%.',
      image: 'tender_trap.jpg',
    },
    {
      name: 'Blossom Rhyme',
      level: 'Lv. 6',
      description:
        "The clones now follow the main Trekker into combat. Increases the clones' DMG by 39%.",
      image: 'blossom_rhyme.jpg',
    },
    {
      name: 'Infinite Shade',
      level: 'Lv. 6',
      description:
        "Increases Nanoha's Ultimate DMG by 136%. Flowers Thrice (Ultimate) will summon one additional mirror image. Up to 3 mirror images can exist at the same time.",
      image: 'infinite_shade.jpg',
    },
    {
      name: 'Wind Whispers',
      level: 'Lv. 6',
      description:
        "Increases Nanoha's ATK by 29%. Also increases the duration of mirror images by 6s.",
      image: 'wind_whispers.jpg',
    },
  ],

  story:
    'Nanoha is a maid working at Goodwind who is also skilled in "Flower" Ninjutsu. She takes pride in her Sunflower Shuriken, which can hit its target while moving at high speed.',

  fullStats: {
    speed: 100,
  },
};

export const nanohaSEO = {
  title: 'Nanoha - Stella Sora Character Guide',
  description:
    'Complete guide for Nanoha, an 5-Star Ventus Vanguard in Stella Sora. Stats, skills, talents, potentials, and detailed information.',
  keywords: [
    'Nanoha',
    'Stella Sora',
    '5-Star',
    'Ventus',
    'Vanguard',
    'character guide',
    'Daylight Garden',
    'GoodWind Homecare',
    'Flower Ninjutsu',
  ],
};
