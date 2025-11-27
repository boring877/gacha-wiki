// Kasimira Character Data
export const kasimiraData = {
  id: 14,
  name: 'Kasimira',
  slug: 'kasimira',
  detailUrl: '/guides/stella-sora/characters/kasimira',
  image: 'Kasimira.jpg',
  icon: 'Kasimira.jpg',
  rarity: '4-Star',
  element: 'Ignis',
  role: 'Versatile',
  faction: 'White Cat Troupe',
  trekkerStyle: 'Adventurous',
  level: 90,

  // Essential table stats (Level max)
  stats: {
    hp: 77766,
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
      name: 'Purging Flames',
      type: 'Attack',
      level: 10,
      cooldown: 0,
      energyCost: 0,
      description:
        'Fires a volley of pellets, each dealing **8.5% of ATK** as **Ignis DMG**. Magazine capacity: 1.',
    },
    {
      name: 'Banishing Barrage',
      type: 'Main Skill',
      level: 10,
      cooldown: 5,
      energyCost: 0,
      description:
        'Each use of this skill loads 1 Incendiary Shell. Each shell deals **12.2% of ATK** as **Ignis DMG**. When Incendiary Shells (Main Skill) triggers **Ignis Mark: Sacred Flame**, deals **77% of ATK** as **AoE Ignis Mark DMG**. Up to 10 shells can be loaded.',
    },
    {
      name: 'Precision Strike',
      type: 'Support Skill',
      level: 10,
      cooldown: 15,
      energyCost: 0,
      description:
        'Drops 3 bombs, each dealing **272% of ATK** as **AoE Ignis DMG** and inflicting **Ignis Mark: Sacred Flame**.',
    },
    {
      name: 'Sweeping Blast',
      type: 'Ultimate',
      level: 10,
      cooldown: 25,
      energyCost: 285,
      description:
        'Continuously fires 6 rounds of pellets, each dealing **18.1% of ATK** as **Ignis DMG**. Concludes with a final full-blast salvo, with each pellet dealing **72% of ATK** as **Ignis DMG**.',
    },
  ],

  // Talents (Dupes)
  talents: [
    {
      id: '01',
      name: 'Joint Attack Command',
      description:
        "When Kasimira deals Ultimate DMG, there is a 10% chance to increase the squad's ATK by **3.2%** for 15s, stacking up to 15 times.",
    },
    {
      id: '02',
      name: 'Scarlet Gunfire',
      description:
        "Increases Kasimira's Skill DMG against targets inflicted with **Ignis Mark: Sacred Flame** by **17.5%**.",
    },
    {
      id: '03',
      name: 'Blazing Ambition',
      description:
        "After Kasimira deals DMG, there is a 20% chance to increase the squad's ATK by **1.7%** for 5s, stacking up to 5 times.",
    },
    {
      id: '04',
      name: 'Charred Lethality',
      description:
        'When Kasimira deals Skill DMG to a target, increases Skill DMG by **23%** for 3s. This effect can be triggered once every 15s.',
    },
    {
      id: '05',
      name: 'Rising Aspiration',
      description:
        "When a squadmate casts an Ultimate, Kasimira's Ultimate DMG is increased by **20%**. The effect is removed after Kasimira casts the Ultimate.",
    },
  ],

  // Potentials - Main Position
  mainPotentials: [
    // === BUILD 1: MASSIVE SINGLE-TARGET DMG BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Kasimira: Main Build 1',
      buildSubtitle: 'Massive Single-Target DMG Build',
      buildDescription: 'A build that loads flame bullets to deal massive single-target DMG.',
    },
    {
      name: 'Scatter Trigger',
      description:
        'Banishing Barrage (Main Skill) requires a **single** reload. After casting, the next shot fires more pellets and deals an additional **136% of ATK** as **AoE Ignis Skill DMG**.',
      image: 'Scatter_Trigger.jpg',
    },
    {
      name: 'Incendiary Warhead',
      description:
        'When Incendiary Shells deal damage, inflicts burn on targets hit, dealing damage once per s for 10s, with a total of **24.2% of ATK** as **Ignis Skill DMG**.',
      image: 'Incendiary_Warhead.jpg',
    },
    {
      name: 'Incendiary Ember',
      level: 'Lv. 6',
      description:
        'After casting Banishing Barrage (Main Skill), increases the DMG of the next shot by **157%**. This effect can only be triggered once every 4s.',
      image: 'Incendiary_Ember.jpg',
    },
    {
      name: 'Mercenary Instinct',
      level: 'Lv. 6',
      description:
        'When Incendiary Shells hit a target, increases the DMG of this shot by **15.3%**.',
      image: 'Mercenary_Instinct.jpg',
    },
    {
      name: 'Ammo Overload',
      level: 'Lv. 6',
      description:
        'When Kasimira lands 10 Crit Hits, increases her ATK by **11%** for 5s, stacking up to 5 times.',
      image: 'Ammo_Overload.jpg',
    },

    // === BUILD 2: DMG OVER TIME BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Kasimira: Main Build 2',
      buildSubtitle: 'DMG Over Time Build',
      buildDescription: 'A build that loads flame bullets to deal DMG over time.',
    },
    {
      name: 'Charged Bolt Action',
      description:
        'Increases the number of uses for Banishing Barrage (Main Skill) to **5**. When casting the Main Skill, there is a **15%** chance to grant **2** Incendiary Shells.',
      image: 'Charged_Blot_Action.jpg',
    },
    {
      name: 'Lucky Magazine',
      description:
        'When Incendiary Shells is fired, there is a **25%** chance that no ammo is consumed.',
      image: 'Lucky_Magazine.jpg',
    },
    {
      name: 'Battle Trumpet',
      level: 'Lv. 6',
      description:
        'When firing Incendiary Shells, increases Skill DMG by **12%** for 3s, up to 10 stacks.',
      image: 'Battle_Trumpet.jpg',
    },
    {
      name: 'Instant Combustion',
      level: 'Lv. 6',
      description:
        "When Incendiary Shells hit a target, increases the target's Ignis DMG Taken by **2.6%** for 2.5s, up to 10 stacks.",
      image: 'Instant_Combustion.jpg',
    },
    {
      name: 'Opportunistic Ambush',
      level: 'Lv. 6',
      description:
        "Increases the DMG of Incendiary Shells by **39%**. After firing 6 Incendiary Shells, reduces Banishing Barrage (Main Skill)'s Cooldown by 1s.",
      image: 'Opportunistic_Ambush.jpg',
    },

    // === GENERIC MAIN ROLE CARDS ===
    {
      isBuildHeader: true,
      buildTitle: 'Kasimira: Main Generic Cards',
      buildSubtitle: 'Universal Enhancements',
      buildDescription: 'General purpose cards that work well in any Main role setup.',
    },
    {
      name: 'Play with Fire',
      level: 'Lv. 6',
      description:
        'Sweeping Blast (Ultimate) can trigger **Ignis Mark: Sacred Flame**. When the mark is triggered, increases ATK by **49%** for 15s, up to 4 stacks.',
      image: 'Play_with_Fire.jpg',
    },
    {
      name: 'Prime Condition',
      level: 'Lv. 6',
      description: "When Kasimira's HP is above 80%, increases her Skill DMG by **79%**.",
      image: 'Prime_Condition.jpg',
    },
    {
      name: 'Gunfighting',
      level: 'Lv. 6',
      description: 'When Kasimira attacks close-by enemies, increases her Skill DMG by **79%**.',
      image: 'Gunfighting.jpg',
    },
    {
      name: 'Army Breaker',
      level: 'Lv. 6',
      description:
        'Increases the Ignis DMG Taken of targets hit by Sweeping Blast (Ultimate) by **15%** for 15s, up to 6 stacks.',
      image: 'Army_Breaker.jpg',
    },
    {
      name: 'Finale Sweep',
      level: 'Lv. 6',
      description: 'Increases the DMG of the final shot of Sweeping Blast (Ultimate) by **272%**.',
      image: 'Finale_Sweep.jpg',
    },
    {
      name: 'Blazing Sweep',
      level: 'Lv. 6',
      description:
        "After Sweeping Blast (Ultimate) kills a target, increases Kasimira's ATK by **44%** for 20s, up to 6 stacks.",
      image: 'Blazing_Sweep.jpg',
    },
  ],

  // Support Potentials - Support Position
  supportPotentials: [
    // === BUILD 1: SUSTAINED DMG ZONES BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Kasimira: Support Build 1',
      buildSubtitle: 'Sustained DMG Zones Build',
      buildDescription: 'A build that calls in bombardments to create sustained DMG zones.',
    },
    {
      name: 'Heated Battle',
      description:
        'After casting Precision Strike (Support Skill), a burning bomb crater remains on the battlefield, dealing **18.9% of ATK** as **AoE Ignis Skill DMG** every 0.5s for a total of 8s, and inflicting **Ignis Mark: Sacred Flame**.',
      image: 'Heated_Battle.jpg',
    },
    {
      name: 'Area Bombardment',
      description:
        'Precision Strike (Support Skill) calls in **5** rounds of bombardment. Also increases DMG by **11%**.',
      image: 'Area_Bombardment.jpg',
    },
    {
      name: 'Chain Reaction',
      level: 'Lv. 6',
      description:
        "When a target inflicted with **Ignis Mark: Sacred Flame** by Kasimira's is killed, deals **182% of ATK** as **AoE Ignis Skill DMG** and inflicts **Ignis Mark: Sacred Flame**. This effect can only be triggered once every 0.5s.",
      image: 'Chain_Reaction.jpg',
    },
    {
      name: 'Shocking Bombardment',
      level: 'Lv. 6',
      description:
        "When Precision Strike (Support Skill) hits a target, reduces the target's Movement SPD by 35%, and increases their Skill DMG Taken by **36%** for 10s.",
      image: 'Shocking_Bombardment.jpg',
    },
    {
      name: 'Weakness Mark',
      level: 'Lv. 6',
      description:
        "When casting Precision Strike (Support Skill), increases the squad's Skill DMG to stunned targets by **39%** for 10s.",
      image: 'Weakness_mark.jpg',
    },

    // === BUILD 2: PRECISION BOMBARDMENTS BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Kasimira: Support Build 2',
      buildSubtitle: 'Precision Bombardments Build',
      buildDescription: 'A build that calls in multiple rounds of precision bombardments.',
    },
    {
      name: 'Preemptive Strike',
      description:
        'Precision Strike (Support Skill) can **stun** the target for 3s. Increases Skill DMG by **38%**.',
      image: 'Preemptive_Strike.jpg',
    },
    {
      name: 'Precision Guidance',
      description:
        "Increases Precision Strike (Support Skill)'s bombing precision. Increases Skill DMG by **31%**.",
      image: 'Precision_Guidance.jpg',
    },
    {
      name: 'Lucky Blast',
      level: 'Lv. 6',
      description:
        "When casting Precision Strike (Support Skill), there is a 30% chance to call in a second round of bombardment. Increases Kasimira's Skill DMG by **33%**.",
      image: 'Lucky_Blast.jpg',
    },
    {
      name: 'Surprise Gift',
      level: 'Lv. 6',
      description:
        "After casting Precision Strike (Support Skill), there is a 30% chance to reset Skill Cooldown. Increases Kasimira's Skill DMG by **22%**.",
      image: 'Suprise_Gift.jpg',
    },
    {
      name: 'Insult to Injury',
      level: 'Lv. 6',
      description:
        "Increases Precision Strike (Support Skill)'s DMG dealt to stunned targets by **65%**.",
      image: 'Insult_to_Injury.jpg',
    },

    // === GENERIC SUPPORT CARDS ===
    {
      isBuildHeader: true,
      buildTitle: 'Kasimira: Support Generic Cards',
      buildSubtitle: 'Universal Enhancements',
      buildDescription: 'General purpose cards that work well in any Support role setup.',
    },
    {
      name: 'Meltdown Threshold',
      level: 'Lv. 6',
      description: "Increases all Ignis Trekkers' Skill Crit Rate by **18%**.",
      image: 'Meltdown_Threshold.jpg',
    },
    {
      name: 'Gradual Heat-Up',
      level: 'Lv. 6',
      description:
        "Sweeping Blast (Ultimate) can inflict **Ignis Mark: Sacred Flame**. Also increases Kasimira's Ultimate DMG by **51%**.",
      image: 'Gradual_Heat-UP.jpg',
    },
    {
      name: 'Perfect Ambience',
      level: 'Lv. 6',
      description: "Increases Kasimira's Ultimate DMG by **85%**.",
      image: 'Perfect_Ambience.jpg',
    },
    {
      name: 'Army Breaker',
      level: 'Lv. 6',
      description:
        'Increases the Ignis DMG Taken of targets hit by Sweeping Blast (Ultimate) by **15%** for 15s, up to 6 stacks.',
      image: 'Army_Breaker.jpg',
    },
    {
      name: 'Finale Sweep',
      level: 'Lv. 6',
      description: 'Increases the DMG of the final shot of Sweeping Blast (Ultimate) by **272%**.',
      image: 'Finale_Sweep.jpg',
    },
    {
      name: 'Blazing Sweep',
      level: 'Lv. 6',
      description:
        "After Sweeping Blast (Ultimate) kills a target, increases Kasimira's ATK by **44%** for 20s, up to 6 stacks.",
      image: 'Blazing_Sweep.jpg',
    },
  ],

  // Disc Information
  disc: {
    name: 'Twin Moon Mischief',
    image: 'Twin_Moon_Mischief.jpg',
    rarity: '4-Star',
    element: 'Ignis',
    tags: ['Ignis', 'Skills', 'Element'],
    stats: {
      baseHP: 5620,
      baseATK: 1077,
    },
    skills: {
      melody: {
        name: 'Ardent Twin Moons',
        effect:
          "Increases the Skill DMG of Ignis Trekkers in the squad by **15%**. If the main Trekker's HP is above 80% when any Ignis Trekker deals Skill DMG, increases the DMG of this hit by **16%**.",
      },
      harmony: {
        name: "Twin Moons' Waltz",
        level: 5,
        effect:
          "When a support Ignis Trekker is on the battlefield, increases the main Ignis Trekker's Skill DMG by **40%**.",
        requirements: {
          'Melody of Skill': '≥ Lv.70',
          'Melody of Focus': '≥ Lv.70',
          'Melody of Stamina': '≥ Lv.70',
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
        focus: {
          baseEffect: 'Auto Attack DMG +1.2%',
          maxEffect: 'Auto Attack DMG +118.8%',
        },
      },
    },
  },

  // Status Effects
  statusEffects: [
    {
      name: 'Ignis Mark',
      description:
        "The generic name for all Ignis Marks. When triggered by specific Ignis Trekkers' attacks, the status is removed, and a special effect is activated.",
    },
    {
      name: 'Ignis Mark: Sacred Flame',
      description:
        'A special status applied to the target by some Ignis Trekkers, lasting for **10s**. Can be triggered by the attacks of specific Ignis Trekkers. When triggered, deals large AoE DMG.',
    },
  ],

  story:
    'Kasimira wields a brutal shotgun. She often puts herself in the line of fire in order to get a hit on her enemies. No matter what, her enemy will fall first.',

  fullStats: {
    speed: 100,
  },
};

export const kasimiraSEO = {
  title: 'Kasimira - Stella Sora Character Guide',
  description:
    'Complete guide for Kasimira, a 4-Star Ignis Versatile in Stella Sora. Stats, skills, talents, potentials, and detailed information.',
  keywords: [
    'Kasimira',
    'Stella Sora',
    '4-Star',
    'Ignis',
    'Versatile',
    'character guide',
    'Twin Moon Mischief',
    'White Cat Troupe',
    'Adventurous',
    'Banishing Barrage',
    'Precision Strike',
    'Sweeping Blast',
  ],
};
