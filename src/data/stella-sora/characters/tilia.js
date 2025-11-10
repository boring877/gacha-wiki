// Tilia Character Data
export const tiliaData = {
  id: 10,
  name: 'Tilia',
  slug: 'tilia',
  detailUrl: '/guides/stella-sora/characters/tilia',
  image: 'Tilia.jpg',
  icon: 'Tilia.jpg',
  rarity: '4-Star',
  element: 'Lux',
  role: 'Support',
  faction: 'Imperial Guard',
  trekkerStyle: 'Steady',
  level: 90,

  // Essential table stats (Level max)
  stats: {
    hp: 79602,
    attack: 5286,
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
    maxEnergy: 190,
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
      name: 'Guard Style: Melee',
      type: 'Attack',
      level: 10,
      cooldown: 0,
      energyCost: 0,
      description:
        'Wields the shield and lance to launch consecutive attacks.\n\n- **Strike 1**: **33.4% of ATK** as **Lux DMG**.\n- **Strike 2**: **29% of ATK** as **Lux DMG**.\n- **Strike 3**: **47.2% of ATK** as **Lux DMG**.\n- **Strike 4**: **47.2% of ATK** as **Lux DMG**.',
    },
    {
      name: 'Aegis Protection',
      type: 'Main Skill',
      level: 10,
      cooldown: 8,
      energyCost: 0,
      description:
        "Hold the button to enter Fortify Stance for up to **8s**, during which **DEF** is increased by **500**. Upon entering Fortify Stance, becomes immune to all DMG. When Fortify Stance ends, casts a counterattack that deals **386% of ATK** as **AoE Lux DMG** and inflicts **Lux Mark: Light** while boosting the squad's **ATK** by **43%** for **10s**.",
    },
    {
      name: 'Aegis Intervention',
      type: 'Support Skill',
      level: 10,
      cooldown: 12,
      energyCost: 0,
      description:
        "Tilia throws the Aegis of Light, dealing **94% of ATK** as **Lux DMG** and stunning the target for **2s**, while inflicting **Lux Mark: Light**. When this skill deals DMG, increases the squad's **ATK** by **53%** for **10s**.",
    },
    {
      name: 'Glorious Smite',
      type: 'Ultimate',
      level: 10,
      cooldown: 20,
      energyCost: 190,
      description:
        'Leaps and slams down onto the ground, dealing **771% of ATK** as **Lux DMG** in a large area. Meanwhile, creates a sphere that deals **41.3% of ATK** as **AoE Lux DMG** and inflicts **Lux Mark: Light** for **8s**.',
    },
  ],

  // Talents (Dupes)
  talents: [
    {
      id: '01',
      name: 'Divine Punishment',
      description:
        'When a squadmate deals DMG to a target with **Lux Mark**, increases **ATK** by **8.4%** for **6s**.',
    },
    {
      id: '02',
      name: 'Ward of Honor',
      description:
        'After a main Trekker casts an Ultimate, her **ATK** is increased by **24%** for **15s**.',
    },
    {
      id: '03',
      name: "Knight's Yearning",
      description:
        "When Tilia inflicts **Lux Mark: Light** on a target, increases the squad's **Ultimate DMG** by **28%** for **6s**.",
    },
    {
      id: '04',
      name: 'Legend Silhouette',
      description:
        "When **Lux Mark** is triggered, increases the main Trekker's **Ultimate DMG** by **12%** for **6s**.",
    },
    {
      id: '05',
      name: 'Justice in You',
      description:
        "When there are **3 Lux Trekkers** in the squad, increases the squad's **Skill DMG** by **13%**.",
    },
  ],

  // Potentials - Main Position
  mainPotentials: [
    // === BUILD 1: SHIELD COUNTER BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Tilia: Main Build 1',
      buildSubtitle: 'Shield Counter Build',
      buildDescription:
        'A build that grants powerful shields through enhanced counterattacks and enhances the moment of shield-raising.',
    },
    {
      name: 'Shield Counter',
      description:
        "When Tilia is immune to damage in Fortify Stance, increases her Counterattack DMG. Tilia deals **562% of ATK** as **AoE Lux Skill DMG**, inflicts **Lux Mark: Light**, and reduces the target's **DEF** by **110**, lasting for **8s**.",
      image: 'shield_counter.jpg',
    },
    {
      name: 'Perfect Triangle Formation',
      description:
        'When Tilia is immune to DMG in Fortify Stance, she gains **3 Aegis** when the stance ends, lasting for **8s**. When taking DMG, consumes **1 Aegis** to grant **immunity** to that DMG.',
      image: 'perfect_triangle_formation.jpg',
    },
    {
      name: 'Bright Counter',
      level: 'Lv. 1',
      description:
        "After casting Aegis Protection (Main Skill), when Tilia deals DMG with the next **12 Auto Attacks**, increases the squad's **ATK** by **7.3%** for **5s**, up to **12 stacks**.",
      image: 'bright_counter.jpg',
    },
    {
      name: 'Block Enhancement: Lux',
      level: 'Lv. 1',
      description:
        "When Tilia is immune to DMG in Fortify Stance, increases the squad's **ATK** by **33%** for **8s**.",
      image: 'block_enhancement_lux.jpg',
    },
    {
      name: 'Block Enhancement: ATK',
      level: 'Lv. 1',
      description:
        'When Tilia is immune to damage in Fortify Stance, deals **154% of ATK** as **AoE Lux Skill DMG** and stuns targets for **3s**.',
      image: 'block_enhancement_atk.jpg',
    },

    // === BUILD 2: CONTINUOUS DEBUFF BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Tilia: Main Build 2',
      buildSubtitle: 'Continuous Debuff Build',
      buildDescription:
        'A build that continuously weakens enemies, deals DMG, and enhances the shield-raising duration.',
    },
    {
      name: 'Unity of Offense and Defense',
      description:
        'When Tilia is in Fortify Stance, deals **23.2% of ATK** as **AoE Lux Skill DMG** every **0.25s** and increases **Lux DMG taken** by the target by **3.2%** for **8s**, stacking up to **10 times**.',
      image: 'unity_of_offense_and_defense.jpg',
    },
    {
      name: 'Holy Domain',
      description:
        'When Tilia is in Fortify Stance, increases the **Skill DMG taken** by nearby targets by **6%s** for a total of **8s**, up to **4 stacks**.',
      image: 'holy_domain.jpg',
    },
    {
      name: 'Unyielding Will',
      level: 'Lv. 6',
      description:
        'When Tilia takes fatal DMG, grants **immunity** to the DMG and restores **80% of her Max HP**. This effect can only be triggered once per battle.',
      image: 'unyielding_will.jpg',
    },
    {
      name: 'Aegis Blessing',
      level: 'Lv. 6',
      description:
        "When Aegis Protection (Main Skill) deals DMG, there is a **50% chance** to increase the squad's **ATK** by **7.3%** for **10s**, up to **5 stacks**.",
      image: 'aegis_blessing.jpg',
    },
    {
      name: 'Strike Back',
      level: 'Lv. 6',
      description:
        "When Fortify Stance reaches its full duration, increases the squad's **Skill DMG** by **83%** for **10s**.",
      image: 'strike_back.jpg',
    },

    // === GENERIC MAIN ROLE CARDS ===
    {
      isBuildHeader: true,
      buildTitle: 'Tilia: Main Generic Cards',
      buildSubtitle: 'Universal Enhancements',
      buildDescription: 'General purpose cards that work well in any Main role setup.',
    },
    {
      name: 'Light Curtain',
      level: 'Lv. 6',
      description:
        'When Tilia inflicts **Lux Mark: Light** on a target, increases the **Mark DMG taken** by the target by **480%** for **6s**.',
      image: 'light_curtain.jpg',
    },
    {
      name: 'Wild Spirit',
      level: 'Lv. 6',
      description:
        "When Tilia deals DMG to an elite or boss target, increases the squad's **Skill DMG** by **53%** for **8s**. This effect can only be triggered once every **10s**.",
      image: 'wild_spirit.jpg',
    },
    {
      name: 'Revolt Call',
      level: 'Lv. 6',
      description: "When Tilia's HP is below **50%**, increases her **DEF** by **332**.",
      image: 'revolt_call.jpg',
    },
    {
      name: 'Knight Oath: Skyfall',
      level: 'Lv. 6',
      description:
        'Increases the **Ultimate DMG** of Glorious Smite by **149%** and stuns the target for **2s**.',
      image: 'knight_oath_skyfall.jpg',
    },
    {
      name: 'Knight Oath: Chalk Armor',
      level: 'Lv. 6',
      description:
        "When Glorious Smite (Ultimate) deals DMG, the main Trekker gains a shield equal to **11.1% of Tilia's Max HP**, lasting for **7s**.",
      image: 'knight_oath_chalk_armor.jpg',
    },
    {
      name: 'Knight Oath: Courage',
      level: 'Lv. 6',
      description:
        "When casting Glorious Smite (Ultimate), increases the squad's **ATK** by **98%** for **10s**.",
      image: 'knight_oath_courage.jpg',
    },
  ],

  // Support Potentials - Support Position
  supportPotentials: [
    // === BUILD 1: MARK APPLICATION BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Tilia: Support Build 1',
      buildSubtitle: 'Mark Application Build',
      buildDescription: 'A build that hurls shields, continuously applying Marks to targets hit.',
    },
    {
      name: 'Holy Inscription',
      description:
        'When Aegis of Light hits a target, summons a **Lux sphere** lasting for **8s**, up to **4 Lux spheres** can be created. Increases the **Lux DMG taken** by targets within the sphere by **18%** and inflicts **Lux Mark: Light** on them.',
      image: 'holy_inscription.jpg',
    },
    {
      name: 'Renewed Spectrum',
      description:
        'When Aegis of Light deals DMG, reduces **Support Skill Cooldown** by **1s**. This effect can only be triggered **3 times** per Support Skill cast.',
      image: 'renewed_spectrum.jpg',
    },
    {
      name: 'Enemy Counter',
      level: 'Lv. 6',
      description:
        'When Aegis of Light hits a target immune to stun, deals **15.2% of ATK** as **AoE Lux Skill DMG** and increases the **Lux DMG taken** by the target by **57%** for **10s**.',
      image: 'enemy_counter.jpg',
    },
    {
      name: 'Blinding Beam',
      level: 'Lv. 6',
      description:
        'When Tilia inflicts **Lux Mark: Light** on a target, increases the **Mark DMG taken** by the target by **300%** for **5s**.',
      image: 'blinding_beam.jpg',
    },
    {
      name: "Knight's Seal",
      level: 'Lv. 6',
      description:
        "When an ally triggers a **Lux Mark**, increases the squad's **ATK** by **47%** for **3s**, and grants Tilia **5 Energy**.",
      image: 'Knight_seal.jpg',
    },

    // === BUILD 2: RICOCHET BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Tilia: Support Build 2',
      buildSubtitle: 'Ricochet Build',
      buildDescription: 'A build that hurls shields at all nearby enemies and the main Trekker.',
    },
    {
      name: 'Perfect Spiral',
      description:
        "Aegis of Light will shield the main Trekker before ricocheting. When it reaches the main Trekker, deals **20.2% of Tilia's ATK** as **AoE Lux Skill DMG** and increases the **Skill DMG taken** by nearby enemies by **4.6%**, lasting for **10s**, up to **4 stacks**.",
      image: 'perfect_spiral.jpg',
    },
    {
      name: 'Mystery of Gyration',
      description:
        'When casting Aegis Intervention (Support Skill), Tilia throws Aegis of Light at up to **5 targets** simultaneously.',
      image: 'mystery_of_gyration.jpg',
    },
    {
      name: 'Brilliant Relay',
      level: 'Lv. 6',
      description:
        'When Aegis of Light reaches the main Trekker, increases their **ATK** by **15%** for **15s**, up to **4 stacks**.',
      image: 'brilliant_relay.jpg',
    },
    {
      name: 'Trick Boost',
      level: 'Lv. 6',
      description:
        "When Aegis of Light ricochets, increases the squad's **ATK** by **15%** for **6s**, up to **6 stacks**.",
      image: 'trick_boost.jpg',
    },
    {
      name: 'Revealed Flaw',
      level: 'Lv. 6',
      description:
        'Aegis of Light deals an additional **20.2% of ATK** as **AoE Lux Skill DMG** to targets whose HP are below **85%**. Also increases the **Skill DMG they take** by **4.6%** for **10s**, stacking up to **4 times**. This effect can only be triggered once every **7s**.',
      image: 'revealed_flaw.jpg',
    },

    // === GENERIC SUPPORT CARDS ===
    {
      isBuildHeader: true,
      buildTitle: 'Tilia: Support Generic Cards',
      buildSubtitle: 'Universal Enhancements',
      buildDescription: 'General purpose cards that work well in any Support role setup.',
    },
    {
      name: 'Banner of Glory',
      level: 'Lv. 6',
      description: "Increases the main Trekker's **DEF** by **211**.",
      image: 'banner_of_glory.jpg',
    },
    {
      name: "Guardian's Resolve",
      level: 'Lv. 6',
      description:
        "When Tilia enters combat, increases the main Trekker's **ATK** by **41%** for **10s**.",
      image: 'Guardian_resolve.jpg',
    },
    {
      name: 'Creed of Fortification',
      level: 'Lv. 6',
      description: "Increases Tilia's **ATK** by **36%**.",
      image: 'creed_of_fortification.jpg',
    },
    {
      name: 'Knight Oath: Skyfall',
      level: 'Lv. 6',
      description:
        'Increases the **Ultimate DMG** of Glorious Smite by **149%** and stuns the target for **2s**.',
      image: 'knight_oath_skyfall.jpg',
    },
    {
      name: 'Knight Oath: Chalk Armor',
      level: 'Lv. 6',
      description:
        "When Glorious Smite (Ultimate) deals DMG, the main Trekker gains a shield equal to **11.1% of Tilia's Max HP**, lasting for **7s**.",
      image: 'knight_oath_chalk_armor.jpg',
    },
    {
      name: 'Knight Oath: Courage',
      level: 'Lv. 6',
      description:
        "When casting Glorious Smite (Ultimate), increases the squad's **ATK** by **98%** for **10s**.",
      image: 'knight_oath_courage.jpg',
    },
  ],

  // Disc Information
  disc: {
    name: 'Good Night',
    image: 'Good_night.jpg',
    rarity: '4-Star',
    element: 'Lux',
    tags: ['Lux', 'Element', 'Skills'],
    stats: {
      baseHP: 5620,
      baseATK: 1077,
    },
    skills: {
      melody: {
        name: 'Light Lullaby',
        effect:
          "Increases the Skill DMG of Lux Trekkers in the squad by 15%. If the main Trekker's HP is above 80% when any Lux Trekker deals Skill DMG, increases the DMG of this hit by 16%.",
      },
      harmony: {
        name: 'Tranquil Light',
        level: 5,
        effect:
          "When a support Lux Trekker is on the battlefield, increases the main Lux Trekker's Skill DMG dealt by 40%.",
        requirements: {
          'Melody of Focus': '≥ Lv.70',
          'Melody of Stamina': '≥ Lv.70',
          'Melody of Skill': '≥ Lv.70',
        },
      },
    },
    support: {
      musicalNotesSource: 'Monolith Ascension',
      melodies: {
        burst: {
          baseEffect: 'Crit DMG +0.46%',
          maxEffect: 'Crit DMG +45.54%',
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
      name: 'Lux Mark: Light',
      description:
        'A special status applied to the target by some Lux Trekkers, lasting for **10s**. Can be triggered by the attacks of specific Lux Trekkers. When triggered, deals DMG.',
    },
    {
      name: 'Lux Mark',
      description:
        "The generic name for all Lux Marks. When triggered by specific Lux Trekkers' attacks, the status is removed, and a special effect is activated.",
    },
  ],

  // Generic Cards (duplicate from supportPotentials for compatibility)
  genericCards: [
    {
      name: 'Banner of Glory',
      level: 'Lv. 6',
      description: "Increases the main Trekker's **DEF** by **211**.",
      image: 'banner_of_glory.jpg',
    },
    {
      name: "Guardian's Resolve",
      level: 'Lv. 6',
      description:
        "When Tilia enters combat, increases the main Trekker's **ATK** by **41%** for **10s**.",
      image: 'Guardian_resolve.jpg',
    },
    {
      name: 'Creed of Fortification',
      level: 'Lv. 6',
      description: "Increases Tilia's **ATK** by **36%**.",
      image: 'creed_of_fortification.jpg',
    },
    {
      name: 'Knight Oath: Skyfall',
      level: 'Lv. 6',
      description:
        'Increases the **Ultimate DMG** of Glorious Smite by **149%** and stuns the target for **2s**.',
      image: 'knight_oath_skyfall.jpg',
    },
    {
      name: 'Knight Oath: Chalk Armor',
      level: 'Lv. 6',
      description:
        "When Glorious Smite (Ultimate) deals DMG, the main Trekker gains a shield equal to **11.1% of Tilia's Max HP**, lasting for **7s**.",
      image: 'knight_oath_chalk_armor.jpg',
    },
    {
      name: 'Knight Oath: Courage',
      level: 'Lv. 6',
      description:
        "When casting Glorious Smite (Ultimate), increases the squad's **ATK** by **98%** for **10s**.",
      image: 'knight_oath_courage.jpg',
    },
  ],

  story:
    '"Tilia will always be charging at the forefront, using her shield to protect everyone. Guess only another Imperial Knight might break through her defense."',

  fullStats: {
    speed: 100,
  },
};

export const tiliaSEO = {
  title: 'Tilia - Stella Sora Character Guide',
  description:
    'Complete guide for Tilia, an 4-Star Lux Support in Stella Sora. Stats, skills, talents, potentials, and detailed information.',
  keywords: [
    'Tilia',
    'Stella Sora',
    '4-Star',
    'Lux',
    'Support',
    'character guide',
    'Good Night',
    'Imperial Guard',
    'Steady',
    'Aegis Protection',
  ],
};
