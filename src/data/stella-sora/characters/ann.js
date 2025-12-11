// Ann Character Data
export const annData = {
  id: 17,
  name: 'Ann',
  slug: 'ann',
  detailUrl: '/guides/stella-sora/characters/ann',
  image: 'Ann.jpg',
  icon: 'Ann.jpg',
  rarity: '4-Star',
  element: 'Ventus',
  role: 'Support',
  faction: 'Freelance Trekker',
  trekkerStyle: 'Adventurous',
  level: 90,

  // Essential table stats (Level max)
  stats: {
    hp: 73479,
    attack: 5391,
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
    maxEnergy: 237,
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
      name: 'Fierce Bite',
      type: 'Attack',
      level: 10,
      cooldown: 0,
      energyCost: 0,
      description:
        'Coco the Firefang pounces and bites multiple times.\n\n- **Strike 1**: **25% of ATK** as **Ventus DMG**.\n- **Strike 2**: **37.5% of ATK** as **Ventus DMG**.\n- **Strike 3**: **37.5% of ATK ×2** as **Ventus DMG**.\n- **Strike 4**: **50.1% of ATK** as **Ventus DMG**.',
    },
    {
      name: 'Puffloon Spits',
      type: 'Main Skill',
      level: 10,
      cooldown: 15,
      energyCost: 0,
      description:
        "Summons Bubble the Puffloon who spits wind bullets, dealing **17.5% of ATK** as **Ventus Minion DMG**. Bubble has **100%** Ann's ATK and lasts for **15s**. When Bubble deals DMG, there is a **25%** chance to create a Wind Burst, dealing **31.5% of ATK** as **Ventus Minion DMG**, and inflicting **Ventus Mark: Breeze**. This effect can only be triggered once per second. When Bubble is on the field, increases the squad's **ATK** by **53%**.",
    },
    {
      name: 'Wind Barrier',
      type: 'Support Skill',
      level: 10,
      cooldown: 16,
      energyCost: 0,
      description:
        "Raises a wall of wind, dealing **247% of ATK** as **Ventus Skill DMG**. The wind wall lasts for **8s**, constantly inflicts **Ventus Mark: Breeze** to nearby targets, and can block hostile projectiles **8 times**. When casting the Support Skill Wind Barrier, increases the squad's **ATK** by **66%** for **15s**.",
    },
    {
      name: 'Call of the Wild',
      type: 'Ultimate',
      level: 10,
      cooldown: 25,
      energyCost: 237.5,
      description:
        'Coco the Firefang lets forth a wild howl, repels hostile projectiles, and then fires wind bullets, dealing **1170% of ATK** as **AoE Ventus DMG** and inflicting **Ventus Mark: Breeze**.',
    },
  ],

  // Talents (Dupes)
  talents: [
    {
      id: '01',
      name: 'Sigh of Storm',
      description:
        "After Ann deals Ultimate DMG to a target, increases the squad's **ATK** by **14%** for **15s**.",
    },
    {
      id: '02',
      name: 'Rumbling Wind',
      description:
        "When Ann inflicts **Ventus Mark: Breeze**, increases the squad's **ATK** by **10.3%** for **6s**.",
    },
    {
      id: '03',
      name: 'The Watcher in the Rye',
      description:
        "If Ann's Ultimate destroys a hostile projectile, increases main Trekker's **Skill DMG** by **32%** for **15s**.",
    },
    {
      id: '04',
      name: 'Rippling Crops',
      description:
        "When **Ventus Mark** is triggered, increases the main Trekker's **Ventus DMG** by **12%** for **6s**.",
    },
    {
      id: '05',
      name: 'Ode to Earth',
      description:
        "When there are 3 Ventus Trekkers in the squad, the squad's **Skill DMG** is increased by **13%**.",
    },
  ],

  // Potentials - Main Position
  mainPotentials: [
    // === BUILD 1: WIND BURST BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Ann: Main Build 1',
      buildSubtitle: 'Wind Burst Build',
      buildDescription:
        'A build with a higher chance to trigger Wind Bursts, knocking back enemies and making them take increased DMG.',
    },
    {
      name: "Wind's Breath",
      description:
        "When Bubble is on the battlefield, if Ann deals DMG, there is a **25%** chance to create a Wind Burst. When a Wind Burst is created, increases the squad's **Mark DMG** by **51.6%** for **6s**.",
      image: "Wind's_Breath.jpg",
    },
    {
      name: 'Stone Dust Tempest',
      description:
        'The Wind Burst can blow away weak targets, and their **Ventus DMG Taken** is increased by **13.5%** for **2s**.',
      image: 'Stone_Dust_Tempest.jpg',
    },
    {
      name: 'Permeating Courage',
      level: 'Lv. 6',
      description:
        "When Bubble is on the battlefield, increases Ann's **DEF** by **134** and **ATK SPD** by **29%**.",
      image: 'Permeating_Courage.jpg',
    },
    {
      name: 'Victorious Pursuit',
      level: 'Lv. 6',
      description:
        "When a Wind Burst is created, increases the squad's **ATK** by **14.6%** for **4s**, up to **4 stacks**.",
      image: 'Victorious_Pursuit.jpg',
    },
    {
      name: 'Wind Chime',
      level: 'Lv. 6',
      description: 'There is **21%** more chance to generate a Wind Burst.',
      image: 'Wind_Chime.jpg',
    },

    // === BUILD 2: LASER BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Ann: Main Build 2',
      buildSubtitle: 'Laser Build',
      buildDescription:
        'A build that fires laser beams, dealing penetration DMG, and support Trekkers can activate additional laser beams by triggering marks.',
    },
    {
      name: 'Dazzling Vortex',
      description:
        'After Bubble is summoned, it will fire a laser beam within **5s**, dealing **60% of ATK** as **Ventus Minion DMG** and inflicting **Ventus Mark: Breeze**.',
      image: 'Dazzling_Vortex.jpg',
    },
    {
      name: 'Grand Debut',
      description:
        "When summoning Bubble, increases the squad's **Mark DMG** by **31.6%** for **5s**. When a squadmate triggers a **Ventus Mark**, Bubble will fire an additional laser, dealing **60% of ATK** as **Ventus Minion DMG**.",
      image: 'Grand_Debut.jpg',
    },
    {
      name: 'Wind Surge',
      level: 'Lv. 6',
      description:
        'When a squadmate casts a Support Skill, increases the **ATK** of Bubble and a random ally by **35%** for **5s**, stacking up to **2 times**.',
      image: 'Wind_Surge.jpg',
    },
    {
      name: 'Breeze Caress',
      level: 'Lv. 6',
      description:
        'When any Trekker in the squad triggers a Ventus Mark, there is a **30%** chance to restore **10.3% HP** to Ann. This effect can only be triggered once every **5s**.',
      image: 'Breeze_Caress.jpg',
    },
    {
      name: 'Smooth Rotation',
      level: 'Lv. 6',
      description:
        "When any Trekker in the squad triggers a **Ventus Mark**, there is a **70%** chance to reduce Puffloon Spits' Cooldown by **1s**, up to a total of **10s**.",
      image: 'Smooth_Rotation.jpg',
    },

    // === GENERIC MAIN ROLE CARDS ===
    {
      isBuildHeader: true,
      buildTitle: 'Ann: Main Generic Cards',
      buildSubtitle: 'Universal Enhancements',
      buildDescription: 'General purpose cards that work well in any Main role setup.',
    },
    {
      name: 'Tall Tree Attracts Wind',
      level: 'Lv. 6',
      description:
        'Ann can dodge one more time. When dodging, increases her **DEF** by **105** for **4s**.',
      image: 'Tall_Tree_Attracts_Wind.jpg',
    },
    {
      name: "Wind's Track",
      level: 'Lv. 6',
      description:
        "Ann can dodge through barriers. When Ann dodges through barriers, increases all other friendly units' **Skill DMG** by **69%** for **4s**.",
      image: "Wind's_Track.jpg",
    },
    {
      name: 'Zephyr Caress',
      level: 'Lv. 6',
      description:
        "When dodging, Ann creates **2 Wind Bursts** and increases squadmates' **ATK** by **43%** for **4s**.",
      image: 'Zephyr_Caress.jpg',
    },
    {
      name: "Overlord's Warcry",
      level: 'Lv. 6',
      description:
        "When casting Call of the Wild (Ultimate), the main Trekker gains a shield equal to **43%** of Ann's Base Max HP, lasting for **15s**.",
      image: "Overlord's_Warcry.jpg",
    },
    {
      name: "Mountain's Entice",
      level: 'Lv. 6',
      description:
        "Increases Ann's **Ultimate DMG** by **135%**. Call of the Wild (Ultimate) can pull in nearby targets.",
      image: "Mountain's_Entice.jpg",
    },
    {
      name: 'Impulsive Devourer',
      level: 'Lv. 6',
      description:
        'When Call of the Wild (Ultimate) blocks hostile projectiles, the main Trekker gains **22 Energy**.',
      image: 'Impulsive_Devourer.jpg',
    },
  ],

  // Support Potentials - Support Position
  supportPotentials: [
    // === BUILD 1: SHIELD/SURVIVABILITY BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Ann: Support Build 1',
      buildSubtitle: 'Shield/Survivability Build',
      buildDescription:
        "A build that increases the number of walls of wind and applies shields to them, improving the squad's survivability.",
    },
    {
      name: 'Gale Bastion',
      description: 'The Support Skill will summon **2** more walls of wind.',
      image: 'Gale_Bastion.jpg',
    },
    {
      name: 'Warm Wind Guard',
      description:
        "After passing through the wall of wind, the main Trekker gains a shield equal to **10%** of Ann's Base Max HP, and their **ATK** is increased by **20%** for **4s**. This effect can only be triggered once every **2s**.",
      image: 'Warm_Wind_Guard.jpg',
    },
    {
      name: 'Windgate Barrier',
      level: 'Lv. 6',
      description:
        "When casting Wind Barrier (Support Skill), increases the main Trekker's **ATK** by **66%** for **15s**.",
      image: 'Windgate_Barrier.jpg',
    },
    {
      name: 'Burdening Pressure',
      level: 'Lv. 6',
      description:
        "When Wind Barrier (Support Skill) deals DMG, reduces targets' **ATK** by **22%** for **6s**.",
      image: 'Burdening_Pressure.jpg',
    },
    {
      name: 'Leveraged Boost',
      level: 'Lv. 6',
      description:
        "When the wall of wind blocks hostile projectiles, increases the main Trekker's **ATK** by **137%** for **6s**.",
      image: 'Leveraged_Boost.jpg',
    },

    // === BUILD 2: DOT/RANGED BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Ann: Support Build 2',
      buildSubtitle: 'DoT/Ranged Build',
      buildDescription:
        'A build that allows walls of wind to deal DMG over time and enhances friendly projectiles that pass through them, ideal for pairing with a ranged main Trekker.',
    },
    {
      name: 'Wind Banish',
      description:
        "The wall of wind will constantly deal AoE DMG, with each hit dealing **39.3% of ATK** as **Ventus Skill DMG**. Also increases the targets' **Ventus DMG Taken** by **16%** for **6s**.",
      image: 'Wind_Banish.jpg',
    },
    {
      name: 'Downwind Journey',
      description:
        "When the main Trekker's projectiles pass through the wall of wind, increases their **Ventus DMG** by **22.5%**.",
      image: 'Downwind_Journey.jpg',
    },
    {
      name: 'Wind Erosion Havoc',
      level: 'Lv. 6',
      description:
        'For targets near the wall of wind summoned by Wind Barrier (Support Skill), increases their **Ventus DMG Taken** by **61%**.',
      image: 'Wind_Erosion_Havoc.jpg',
    },
    {
      name: 'Turbulent Flow',
      level: 'Lv. 6',
      description:
        "When Wind Barrier (Support Skill) deals DMG, increases targets' **Ventus DMG Taken** by **21%** for **8s**, stacking up to **2 times**.",
      image: 'Turbulent_Flow.jpg',
    },
    {
      name: 'Speed Surge',
      level: 'Lv. 6',
      description:
        'When the main Trekker passes through the wall of wind, increases her **ATK SPD** by **27%** and **Ventus DMG** by **16%** for **5s**.',
      image: 'Speed_Surge.jpg',
    },

    // === GENERIC SUPPORT CARDS ===
    {
      isBuildHeader: true,
      buildTitle: 'Ann: Support Generic Cards',
      buildSubtitle: 'Universal Enhancements',
      buildDescription: 'General purpose cards that work well in any Support role setup.',
    },
    {
      name: "Forest Princess' Blessing",
      level: 'Lv. 6',
      description:
        'There is a **35%** chance to increase the **Ventus DMG** dealt by a random ally by an additional **155%**.',
      image: "Forest_Princess'_Blessing.jpg",
    },
    {
      name: 'Storm Repel',
      level: 'Lv. 6',
      description: 'Increases the DMG of Wind Barrier (Support Skill) by **79%**.',
      image: 'Storm_Repel.jpg',
    },
    {
      name: 'Violent Current',
      level: 'Lv. 6',
      description:
        "When a wall of wind is on the battlefield, increases the main Trekker's **ATK** by **73%**.",
      image: 'Violent_Current.jpg',
    },
    {
      name: "Overlord's Warcry",
      level: 'Lv. 6',
      description:
        "When casting Call of the Wild (Ultimate), the main Trekker gains a shield equal to **43%** of Ann's Base Max HP, lasting for **15s**.",
      image: "Overlord's_Warcry.jpg",
    },
    {
      name: "Mountain's Entice",
      level: 'Lv. 6',
      description:
        "Increases Ann's **Ultimate DMG** by **135%**. Call of the Wild (Ultimate) can pull in nearby targets.",
      image: "Mountain's_Entice.jpg",
    },
    {
      name: 'Impulsive Devourer',
      level: 'Lv. 6',
      description:
        'When Call of the Wild (Ultimate) blocks hostile projectiles, the main Trekker gains **22 Energy**.',
      image: 'Impulsive_Devourer.jpg',
    },
  ],

  // Disc Information
  disc: {
    name: 'Emerald Dream',
    image: 'Emerald_Dream.jpg',
    rarity: '4-Star',
    element: 'Ventus',
    tags: ['Ventus', 'Ultimate'],
    stats: {
      baseHP: 5620,
      baseATK: 1077,
    },
    skills: {
      melody: {
        name: 'Emerald Dreamscape',
        effect:
          "Increases the **ATK** of Ventus Trekkers in the squad by **10%**. When a Ventus Trekker casts a skill, increases Ventus Trekkers' **Ultimate DMG** by **50%** for **5s**.",
      },
      harmony: {
        name: 'Evening Breeze',
        level: 5,
        effect:
          "When any Trekker triggers **Ventus Mark**, increases Ventus squadmates' **ATK** by **20%** for **4s**.",
        requirements: {
          'Melody of Focus': '≥ Lv.70',
          'Melody of Stamina': '≥ Lv.70',
          'Melody of Burst': '≥ Lv.70',
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
        stamina: {
          baseEffect: 'Max HP +0.3%',
          maxEffect: 'Max HP +29.7%',
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
    {
      name: 'Ventus Mark: Breeze',
      description:
        'A special status applied to the target by some Ventus Trekkers, lasting for **10s**. Can be triggered by the attacks of specific Ventus Trekkers. When triggered, removes the status and activates special effects.',
    },
  ],

  story:
    "Coco the Firefang is Ann's best friend. Wind is also Ann's friend. With help from these friends, Ann is the fastest Trekker around.",

  fullStats: {
    speed: 100,
  },
};

export const annSEO = {
  title: 'Ann - Stella Sora Character Guide',
  description:
    'Complete guide for Ann, a 4-Star Ventus Support in Stella Sora. Stats, skills, talents, potentials, and detailed information.',
  keywords: [
    'Ann',
    'Stella Sora',
    '4-Star',
    'Ventus',
    'Support',
    'character guide',
    'Emerald Dream',
    'Freelance Trekker',
    'Adventurous',
    'Fierce Bite',
    'Puffloon Spits',
    'Wind Barrier',
    'Call of the Wild',
  ],
};
