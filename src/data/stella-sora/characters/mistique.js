// Mistique Character Data
export const mistiqueData = {
  id: 6,
  name: 'Mistique',
  slug: 'mistique',
  detailUrl: '/guides/stella-sora/characters/mistique',
  image: 'Mistique.jpg',
  icon: 'Mistique.jpg',
  rarity: '5-Star',
  element: 'Umbra',
  role: 'Versatile',
  faction: 'Scarlet Sights Media',
  trekkerStyle: 'Creative',
  level: 90,

  // Essential table stats (Level max)
  stats: {
    hp: 48761,
    attack: 7311,
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
    maxEnergy: 275,
    chargeEfficiencyMain: 100.0,
    chargeEfficiencySupport: 75.0,
  },

  // Elemental damage stats
  elementalStats: {
    Umbra: {
      dmg: 100.0,
      pen: 0,
      ignoreRes: 0.0,
    },
  },

  // Skills
  skills: [
    {
      name: 'Comet Sweep',
      type: 'Attack',
      level: 10,
      description: 'Sweeps her broom to attack repeatedly.',
      damage: {
        type: 'Umbra DMG',
        strikes: [
          '15.3% of **ATK** as **Umbra DMG**',
          '10.9% of **ATK** as **Umbra DMG**',
          '12% of **ATK** as **Umbra DMG**',
          '16.9% of **ATK** as **Umbra DMG**',
        ],
      },
    },
    {
      name: 'Pumpka Pummel',
      type: 'Main Skill',
      level: 10,
      cooldown: 11,
      description:
        "Mistique takes a photo to deal 91.6% of ATK as AoE Umbra Skill DMG, then enters Exposure status: Summons one Pumpka Phantom every 3s for 15s. Pumpka Phantoms automatically attack the target, dealing 9.1% of ATK and 7.8% of ATK as Umbra Minion DMG. Each Pumpka Phantom has 25% of Mistique's Base Max HP, 100% of her ATK, and lasts for 15s. Up to 4 Pumpka Phantoms can be present at the same time.",
      damage: {
        type: 'Umbra DMG',
        strikes: [
          '91.6% of **ATK** as AoE **Umbra Skill DMG**',
          '9.1% of **ATK** as **Umbra Minion DMG** (Phantom attacks)',
          '7.8% of **ATK** as **Umbra Minion DMG** (Phantom attacks)',
        ],
      },
      effects: [
        {
          type: 'trigger',
          description:
            'Pumpka Pummel (Main Skill) and Pumpka Phantoms can trigger **Umbra Mark**, dealing **24% of ATK** as Umbra Mark DMG and inflicting Umbra Burn, which deals DMG to the target every 0.5s for 5s, totaling to **4.1% of ATK** as Umbra Mark DMG.',
        },
        {
          type: 'mechanic',
          description:
            'When Pumpka Pummel (Main Skill) is interrupted, its cooldown is partially reduced.',
        },
      ],
    },
    {
      name: 'Summoning Circle',
      type: 'Support Skill',
      level: 10,
      cooldown: 12,
      description:
        "Draws a magic circle on the ground, summoning a Lanterna Phantom every 0.5s for 6s. Lanterna Phantom will explode, dealing 220% of ATK as Umbra Minion DMG and inflicting **Umbra Mark: Dark Shadow**. Each Lanterna Phantom has 3% of Mistique's Base Max HP and 100% of her ATK, lasting for 8s.",
      effects: [
        {
          type: 'explosion',
          description:
            'Lanterna Phantom explodes, dealing **220% of ATK** as **Umbra Minion DMG** and inflicting **Umbra Mark: Dark Shadow**.',
        },
      ],
    },
    {
      name: 'Midnight Terror',
      type: 'Ultimate',
      level: 10,
      cooldown: 30,
      energyCost: 275,
      description:
        'Summons a massive phantom, dealing 407% of ATK x8/814% of ATK as Umbra DMG in a large area.',
      damage: {
        type: 'Umbra DMG',
        normalCast: '407% of **ATK** x8/**814% of ATK** as AoE **Umbra DMG**',
      },
    },
  ],

  // Talents (Dupes)
  talents: [
    {
      id: '01',
      name: 'Harmful Rumors',
      description:
        "When Mistique summons a phantom, increases squadmates' Umbra DMG by **14%** for 15s.",
    },
    {
      id: '02',
      name: 'Secondary Slander',
      description: 'Increases the Minion DMG of phantoms summoned by Mistique by **26%**.',
    },
    {
      id: '03',
      name: 'Communication Psychology',
      description:
        "When a phantom summoned by Mistique disappears, the squad's ATK is increased by **3.5%** for 15s, stacking up to 4 times.",
    },
    {
      id: '04',
      name: 'Social Engineering',
      description:
        "When a phantom summoned by Mistique's skill hits a target, increases the ATK of Mistique and summoned phantoms by **20%** for 5s.",
    },
    {
      id: '05',
      name: 'Truth As You Wish',
      description:
        'After Mistique summons 5 phantoms, increases the Minion DMG of subsequent phantoms summoned by Mistique by **26%** for 12s. This effect can only be triggered once per 12s.',
    },
  ],

  // Potentials - Position Based
  mainPotentials: [
    // === BUILD 1: AOE BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Mistique: Main Build 1',
      buildSubtitle: 'AoE Build',
      buildDescription:
        'An AoE build that increases skill range and DMG, causing phantoms to deal Explosion DMG to enemies upon disappearance.',
    },
    {
      name: 'Defiance Before Deletion',
      description:
        'Reduces the Cooldown of Pumpka Pummel (Main Skill) by **2s**. Pumpka Phantom will explode upon vanishing, dealing **74% of ATK** as AoE Umbra Minion DMG.',
      image: 'Defiance_before_deletion.jpg',
    },
    {
      name: 'Multi-Shot',
      description:
        'Pumpka Pummel (Main Skill) deals an additional **185% of ATK** as AoE Umbra DMG. When cast, removes all Pumpka Phantoms from the battlefield and summons them again.',
      image: 'Multi_shot.jpg',
    },
    {
      name: 'Cursed Screech',
      level: 'Lv. 6',
      description:
        'When a Pumpka Phantom vanishes, increases the Umbra DMG Taken of nearby targets by **15%** for 4s, up to 4 stacks.',
      image: 'Cursed_screech.jpg',
    },
    {
      name: 'Lingering Grudge: Demon Barrier',
      level: 'Lv. 6',
      description:
        'When a Pumpka Phantom vanishes, Mistique gains a shield equal to **6.4% of her Base Max HP**, lasting for 10s, up to 4 stacks.',
      image: 'Lingering_grudge_demon_barrier.jpg',
    },
    {
      name: 'Lingering Grudge: Onslaught',
      level: 'Lv. 6',
      description:
        "When a Pumpka Phantom vanishes, increases Mistique's ATK by **10%** for 8s, up to 4 stacks.",
      image: 'Lingering_grudge_onslaught.jpg',
    },

    // === BUILD 2: CONSECUTIVE SKILL BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Mistique: Main Build 2',
      buildSubtitle: 'Consecutive Skill Enhancement',
      buildDescription:
        'A build that enhances the two-phase attacks of skills, enabling consecutive skill casting for sustained DPS.',
    },
    {
      name: 'Board Tricks',
      description:
        'Increases the damage of Pumpka Pummel (Main Skill) by **430%**. When **Umbra Mark** is triggered, increases the Skill DMG taken by the target by **27%** for 8s.',
      image: 'Board_tricks.jpg',
    },
    {
      name: 'No Respite',
      description:
        'Adds additional phantom attacks and their damage is increased by **47%**. When cast within 2s after Pumpka Pummel, deals an additional **184% of ATK** as AoE Umbra Skill DMG with each attack.',
      image: 'No_respite.jpg',
    },
    {
      name: 'Light Burn',
      level: 'Lv. 6',
      description:
        'Reduces the Cooldown of Pumpka Pummel (Main Skill) by **4s**. When casting, increases Skill DMG by **81%** for 5s.',
      image: 'Light_burn.jpg',
    },
    {
      name: 'Radiant Glow',
      level: 'Lv. 6',
      description:
        'When Pumpka Pummel (Main Skill) hits a target, deals an additional **626% of ATK** as AoE Umbra Skill DMG.',
      image: 'Radiant_glow.jpg',
    },
    {
      name: 'Nebulous Reverb',
      level: 'Lv. 6',
      description:
        'Midnight Terror (Ultimate) can trigger **Umbra Mark**, dealing **301% of ATK** as Umbra Mark DMG. After casting the Ultimate, increases Skill DMG by **364%** for 5s.',
      image: 'Nebulous_reverb.jpg',
    },

    // === GENERIC MAIN ROLE CARDS ===
    {
      isBuildHeader: true,
      buildTitle: 'Mistique: Main Generic Cards',
      buildSubtitle: 'Universal Enhancements',
      buildDescription: 'General purpose cards that work well in any Main role setup.',
    },
    {
      name: 'Full Frame Focus',
      level: 'Lv. 6',
      description:
        "Midnight Terror (Ultimate) can trigger **Umbra Mark**. When it triggers an **Umbra Mark**, increases Mistique's ATK by **189%** for 15s.",
      image: 'Full_frame_focus.jpg',
    },
    {
      name: 'Spotlight Craving',
      level: 'Lv. 6',
      description: 'Increases the ATK of the Pumpka Phantoms near Mistique by **63%**.',
      image: 'Spotlight_craving.jpg',
    },
    {
      name: 'Decisive Moment',
      level: 'Lv. 6',
      description:
        'Mistique can dodge one more time. When dodging, increases the ATK of Mistique and the Pumpka Phantoms on the battlefield by **40%** for 5s.',
      image: 'Decisive_moment.jpg',
    },
    {
      name: 'Darkness Devourer',
      level: 'Lv. 6',
      description:
        'When Mistique casts Midnight Terror, sacrifices all of her minions, each increasing Ultimate DMG by **29%** for 10s, up to 6 stacks.',
      image: 'Darkness_devourer.jpg',
    },
    {
      name: 'Quick Nightfall',
      level: 'Lv. 6',
      description:
        'Energy Charge Efficiency **+29%** for 10s when Mistique casts the Main Skill or Support Skill.',
      image: 'Quick_nightfall.jpg',
    },
    {
      name: 'Chaos Frenzy',
      level: 'Lv. 6',
      description:
        'When Mistique deals DMG with Midnight Terror (Ultimate), increases her Ultimate DMG by **43%** for 2s, up to 9 stacks.',
      image: 'Chaos_frenzy.jpg',
    },
  ],

  supportPotentials: [
    // === BUILD 1: EXTENDED DURATION BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Mistique: Support Build 1',
      buildSubtitle: 'Extended Duration Build',
      buildDescription:
        "A build that extends skill duration and continuously boosts phantoms' DMG on the battlefield.",
    },
    {
      name: 'Stay Happy',
      description:
        'Increases the duration of the magic circle by **3s**. Also increases the Minion DMG of Lanterna Phantoms by **24%**.',
      image: 'Stay_happy.jpg',
    },
    {
      name: 'Reality Erosion',
      description:
        'Increases the Minion DMG of the Lanterna Phantoms summoned by the same magic circle by **17.1%** each time, up to 10 times. The summoned Lanterna Phantoms also grow larger over time.',
      image: 'Reality_erosion.jpg',
    },
    {
      name: 'The Conjuring',
      level: 'Lv. 6',
      description: 'Reduces the intervals between each summon of a Lanterna Phantom by **30%**.',
      image: 'The_conjuring.jpg',
    },
    {
      name: 'Wraith Haunting',
      level: 'Lv. 6',
      description: "Increases Lanterna Phantoms' Minion DMG by **80%**.",
      image: 'Wraith_haunting.jpg',
    },
    {
      name: 'Twin Born',
      level: 'Lv. 6',
      description:
        'There is a **21% chance** the Support Skill can summon one more Lanterna Phantom.',
      image: 'Twin_born.jpg',
    },

    // === BUILD 2: PULL BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Mistique: Support Build 2',
      buildSubtitle: 'Pull Enhancement',
      buildDescription:
        'A build that allows skills to pull enemies and boosts the Explosion DMG of phantoms, ideal for the melee main Trekker.',
    },
    {
      name: 'Slumber Invitation',
      description:
        "The magic circle's radius is increased, and it can pull in weak enemies. When a Lanterna Phantom in the circle explodes, increases its DMG by **43%**.",
      image: 'Slumber_invitation.jpg',
    },
    {
      name: 'Lucky Constitution',
      description:
        'The magic circle will follow targets. When a Lanterna Phantom in the circle explodes, increases its DMG by **43%**.',
      image: 'Lucky_constitution.jpg',
    },
    {
      name: 'Malice',
      level: 'Lv. 6',
      description:
        "Summoning Circle (Support Skill)'s magic circle deals **187% of ATK** as AoE Umbra Skill DMG per sec.",
      image: 'Malice.jpg',
    },
    {
      name: 'Shadow Shackle',
      level: 'Lv. 6',
      description:
        'When Mistique summons a Lanterna Phantom, increases her Minion DMG by **18.6%** for 5s, up to 10 stacks.',
      image: 'Shadow_shackle.jpg',
    },
    {
      name: 'Solar Absorption',
      level: 'Lv. 6',
      description: 'Increases the Umbra DMG Taken of targets within the magic circle by **53%**.',
      image: 'Solar_absorption.jpg',
    },

    // === GENERIC SUPPORT CARDS ===
    {
      isBuildHeader: true,
      buildTitle: 'Mistique: Support Generic Cards',
      buildSubtitle: 'Universal Enhancements',
      buildDescription: 'General purpose cards that work well in any Support role setup.',
    },
    {
      name: 'Trending Lock',
      level: 'Lv. 6',
      description:
        'Midnight Terror (Ultimate) can inflict **Umbra Mark: Dark Shadow** and its DMG is increased by **160%**.',
      image: 'Trending_lock.jpg',
    },
    {
      name: 'Extra Perk',
      level: 'Lv. 6',
      description:
        "When casting Summoning Circle (Support Skill), the main Trekker gains a shield equal to **19% of Mistique's Base Max HP** for 10s.",
      image: 'Extra_perk.jpg',
    },
    {
      name: 'Behind the Scenes',
      level: 'Lv. 6',
      description: "Increases Umbra Trekkers' DEF by **307**.",
      image: 'Behind_the_scenes.jpg',
    },
    {
      name: 'Darkness Devourer',
      level: 'Lv. 6',
      description:
        'When Mistique casts Midnight Terror, sacrifices all of her minions, each increasing Ultimate DMG by **29%** for 10s, up to 6 stacks.',
      image: 'Darkness_devourer.jpg',
    },
    {
      name: 'Quick Nightfall',
      level: 'Lv. 6',
      description:
        'Energy Charge Efficiency **+29%** for 10s when Mistique casts the Main Skill or Support Skill.',
      image: 'Quick_nightfall.jpg',
    },
    {
      name: 'Chaos Frenzy',
      level: 'Lv. 6',
      description:
        'When Mistique deals DMG with Midnight Terror (Ultimate), increases her Ultimate DMG by **43%** for 2s, up to 9 stacks.',
      image: 'Chaos_frenzy.jpg',
    },
  ],

  // Disc Information
  disc: {
    name: "Witch's Swing",
    image: "Witch's_swing.jpg",
    rarity: '5-Star',
    element: 'Umbra',
    tags: ['Umbra', 'Element', 'Ultimate', 'Minion'],
    stats: {
      basicAtk: 1582,
      umbraDmg: '15%',
    },
    skills: {
      melody: {
        name: "Witch's Swing",
        effect:
          "Increases the squad's Umbra DMG by **20%**. When any Umbra Trekker casts a Support Skill, increases the effect by an additional **30%** for 8s.",
      },
      harmony: {
        name: 'Spectral Fragrance',
        level: 5,
        effect:
          "When any Umbra Trekker casts a Support Skill, increases Umbra squadmates' ATK by **12.5%** for 8s. For every minion summoned by an Umbra squadmate, increases the DMG of all allied Umbra minions on the battlefield by **2.5%** for 10s, stacking up to 10 times.",
        requirements: {
          'Melody of Umbra': '≥ Lv.70',
          'Melody of Skill': '≥ Lv.70',
        },
      },
      skill: {
        name: 'Dark Trace',
        level: 5,
        effect:
          "Increases Umbra squadmates' Ultimate DMG by **30%**. When any character triggers **Umbra Mark**, increases this effect by an additional **25%** and the DMG of all allied Umbra minions on the battlefield by an additional **12.5%** for 4s.",
        requirements: {
          'Melody of Ultimate': '≥ Lv.75',
          'Melody of Umbra': '≥ Lv.75',
          'Melody of Skill': '≥ Lv.75',
        },
      },
    },
    support: {
      musicalNotesSource: 'Monolith Ascension',
      melodies: {
        skill: {
          baseEffect: 'Skill DMG +0.46%',
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
      name: 'Umbra Mark',
      description:
        "The generic name for all Umbra Marks. When triggered by specific Umbra Trekkers' attacks, the status is removed, and a special effect is activated.",
    },
    {
      name: 'Umbra Mark: Dark Shadow',
      description:
        'A special status applied to the target by some Umbra Trekkers, lasting for 10s. Can be triggered by the attacks of specific Umbra Trekkers. When triggered, removes the status and activates special effects.',
    },
  ],

  // Generic Cards
  genericCards: [
    {
      name: 'Trending Lock',
      level: 'Lv. 6',
      description:
        'Midnight Terror (Ultimate) can inflict **Umbra Mark: Dark Shadow** and its DMG is increased by **160%**.',
      image: 'Trending_lock.jpg',
    },
    {
      name: 'Extra Perk',
      level: 'Lv. 6',
      description:
        "When casting Summoning Circle (Support Skill), the main Trekker gains a shield equal to **19% of Mistique's Base Max HP** for 10s.",
      image: 'Extra_perk.jpg',
    },
    {
      name: 'Behind the Scenes',
      level: 'Lv. 6',
      description: "Increases Umbra Trekkers' DEF by **307**.",
      image: 'Behind_the_scenes.jpg',
    },
    {
      name: 'Darkness Devourer',
      level: 'Lv. 6',
      description:
        'When Mistique casts Midnight Terror, sacrifices all of her minions, each increasing Ultimate DMG by **29%** for 10s, up to 6 stacks.',
      image: 'Darkness_devourer.jpg',
    },
    {
      name: 'Quick Nightfall',
      level: 'Lv. 6',
      description:
        'Energy Charge Efficiency **+29%** for 10s when Mistique casts the Main Skill or Support Skill.',
      image: 'Quick_nightfall.jpg',
    },
    {
      name: 'Chaos Frenzy',
      level: 'Lv. 6',
      description:
        'When Mistique deals DMG with Midnight Terror (Ultimate), increases her Ultimate DMG by **43%** for 2s, up to 9 stacks.',
      image: 'Chaos_frenzy.jpg',
    },
  ],

  story:
    'Mistique is the witch of Scarlet Sights Media. She has two summons that help her strike down her enemies in exchange for their "sustenance": Real news and truth',

  fullStats: {
    speed: 100,
  },
};

export const mistiqueSEO = {
  title: 'Mistique - Stella Sora Character Guide',
  description:
    'Complete guide for Mistique, an 5-Star Umbra Versatile in Stella Sora. Stats, skills, talents, potentials, and detailed information.',
  keywords: [
    'Mistique',
    'Stella Sora',
    '5-Star',
    'Umbra',
    'Versatile',
    'character guide',
    "Witch's Swing",
    'Scarlet Sights Media',
  ],
};
