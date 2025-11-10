// Jinglin Character Data
export const jinglinData = {
  id: 11,
  name: 'Jinglin',
  slug: 'jinglin',
  detailUrl: '/guides/stella-sora/characters/jinglin',
  image: 'Jinglin.jpg',
  icon: 'Jinglin.jpg',
  rarity: '4-Star',
  element: 'Lux',
  role: 'Versatile',
  faction: 'Fenghuang Diner',
  trekkerStyle: 'Inquisitive',
  level: 90,

  // Essential table stats (Level max)
  stats: {
    hp: 44695,
    attack: 6437,
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
    Lux: {
      dmg: 100.0,
      pen: 0,
      ignoreRes: 0.0,
    },
  },

  // Skills
  skills: [
    {
      name: 'Thunder Palm',
      type: 'Attack',
      level: 10,
      cooldown: 0,
      energyCost: 0,
      description:
        'Unleashes lightning from the palm to strike the target.\n\n- **Strike 1**: **19.1% of ATK** as **Lux DMG**.\n- **Strike 2**: **19.1% of ATK** as **Lux DMG**.\n- **Strike 3**: **47.8% of ATK** as **Lux DMG**.',
    },
    {
      name: 'Thunder Strike',
      type: 'Main Skill',
      level: 10,
      cooldown: 6,
      energyCost: 0,
      description:
        'Summons a thunderbolt, dealing **210% of ATK** as **Lux DMG**. Store up to **4** thunderbolts. Thunder Strike (Main Skill) can trigger **Lux Mark: Light**, dealing **191% of ATK** as **Lux DMG**.',
    },
    {
      name: 'Static Discharge',
      type: 'Support Skill',
      level: 10,
      cooldown: 16,
      energyCost: 0,
      description:
        'Creates a Lightning Domain that deals **41.6% of ATK** as **Lux DMG** and inflicts **Lux Mark: Light** every **0.5s** for a total of **8s**.',
    },
    {
      name: 'Roar of the Qilin',
      type: 'Ultimate',
      level: 10,
      cooldown: 25,
      energyCost: 237,
      description:
        'Summons a massive Lightning Qilin that lasts for **10s** and attacks **3** random enemies every **0.5s**. Each hit deals **139% of ATK** as **Lux DMG**.',
    },
  ],

  // Talents (Dupes)
  talents: [
    {
      id: '01',
      name: 'Thunder Wrath',
      description:
        "When the Lightning Qilin summoned by Jinglin's Ultimate is on the battlefield, the squad's **ATK** is increased by **26%**.",
    },
    {
      id: '02',
      name: 'Qilin Roar',
      description:
        "Increases Jinglin's Ultimate DMG dealt to targets with **Lux Mark: Light** by **20%**.",
    },
    {
      id: '03',
      name: 'Good Business',
      description:
        "When Jinglin's Ultimate hits a target, the **Lux DMG** it takes is increased by **9%** for **5s**.",
    },
    {
      id: '04',
      name: 'Meeting Ends',
      description:
        "When **Lux Mark** is triggered, increases Jinglin's **ATK** by **8.4%** for **6s**.",
    },
    {
      id: '05',
      name: 'Triple Revenue',
      description:
        'When Jinglin kills a target, her Ultimate DMG is increased by **5%**, stacking up to **4** times. This effect is removed after Jinglin casts her Ultimate.',
    },
  ],

  // Potentials - Main Position
  mainPotentials: [
    // === BUILD 1: SINGLE TARGET ENHANCE BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Jinglin: Main Build 1',
      buildSubtitle: 'Single Target Enhance Build',
      buildDescription: 'A build that progressively enhances single-target thunderbolt DMG.',
    },
    {
      name: 'Energy Storage: Bind',
      description:
        'Reduces the Cooldown of Thunder Strike (Main Skill) by **2s**. Casting the Main Skill will automatically launch continuous attacks on the target until available charges run out.',
      image: 'energy_storage_bind.jpg',
    },
    {
      name: 'Energy Storage: Knot',
      description:
        'After casting Thunder Strike (Main Skill), increases the DMG of the next Skill by **32%**, up to **3 stacks**.',
      image: 'energy_storage_knot.jpg',
    },
    {
      name: 'Integrated Energy Storage',
      level: 'Lv. 6',
      description:
        'When Thunder Strike (Main Skill) hits a target, increases the Skill DMG taken by the target by **27%** for **2s**, up to **5 stacks**.',
      image: 'integrated_energy_storage.jpg',
    },
    {
      name: 'Charge Cycle',
      level: 'Lv. 6',
      description:
        'When Thunder Strike (Main Skill) deals damage to a target with **Lux Mark: Light**, deals an additional **82% of ATK** as **Lux Skill DMG**. This effect can only be triggered once every **3s**.',
      image: 'charge_cycle.jpg',
    },
    {
      name: 'Discharge Test',
      level: 'Lv. 6',
      description:
        'When Jinglin deals DMG with an Auto Attack, increases DMG of her next Thunder Strike by **7.3%**, stacking up to **12 times.',
      image: 'discharge_test.jpg',
    },

    // === BUILD 2: CHAIN LIGHTNING BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Jinglin: Main Build 2',
      buildSubtitle: 'Chain Lightning Build',
      buildDescription: 'A build that casts chain lightning after unleashing a thunderbolt.',
    },
    {
      name: 'Energy Storage: Channel',
      description:
        'When Thunder Strike (Main Skill) deals damage to a target with **Lux Mark: Light**, summons Chain Lightning, dealing **26.1% of ATK** as **Lux Skill DMG**, bouncing up to **5 stacks**.',
      image: 'energy_storage_channel.jpg',
    },
    {
      name: 'Energy Storage: Ascend',
      description:
        'After casting Thunder Strike (Main Skill), deals **44.8% of ATK** as **Lux Skill DMG** to nearby targets per second for a total of **6s**.',
      image: 'energy_storage_ascend.jpg',
    },
    {
      name: 'Recycle and Reuse',
      level: 'Lv. 6',
      description:
        'When Thunder Strike (Main Skill) deals DMG to a target with **Lux Mark: Light**, increases Auto Attack Damage by **306%** for **8s**.',
      image: 'recycle_and_reuse.jpg',
    },
    {
      name: 'Heat Management',
      level: 'Lv. 6',
      description:
        'Thunder Strike (Main Skill) will always Crit Hit against targets with **Lux Mark: Light**. Also increases Crit DMG by **370%**. This effect can only be triggered once every **8s**.',
      image: 'heat_management.jpg',
    },
    {
      name: 'Power Distribution',
      level: 'Lv. 6',
      description:
        'When Thunder Strike (Main Skill) kills a target, increases Auto Attack Damage by **287%** for **4s**.',
      image: 'power_distribution.jpg',
    },

    // === GENERIC MAIN ROLE CARDS ===
    {
      isBuildHeader: true,
      buildTitle: 'Jinglin: Main Generic Cards',
      buildSubtitle: 'Universal Enhancements',
      buildDescription: 'General purpose cards that work well in any Main role setup.',
    },
    {
      name: 'Conductor Conversion',
      level: 'Lv. 6',
      description:
        'When Jinglin triggers **Lux Mark: Light**, increases her Mark DMG by **136%** for **8s**, stacking up to **3 times.',
      image: 'conductor_conversion.jpg',
    },
    {
      name: 'Leakage Protection',
      level: 'Lv. 6',
      description:
        'Roar of the Qilin (Ultimate) can trigger **Lux Mark: Light**, dealing **191% of ATK** as **Lux Mark DMG**. When the mark is triggered, increases **ATK** by **13.4%** for **10s**, up to **5 stacks**.',
      image: 'leakage_protection.jpg',
    },
    {
      name: 'Neutral Left, Live Right, Ground Below',
      level: 'Lv. 6',
      description:
        'When taking Melee DMG, Jinglin knocks back targets and deals **144% of ATK** as **Lux Skill DMG**. This effect can only be triggered once every **6s**.',
      image: 'neutral_left_live_right_ground_below.jpg',
    },
    {
      name: 'Heavenly Kirin',
      level: 'Lv. 6',
      description:
        "When the Lightning Qilin is on the field, Jinglin's **ATK** is increased by **225%**.",
      image: 'heavenly_kirin.jpg',
    },
    {
      name: 'Lord of Beasts',
      level: 'Lv. 6',
      description:
        "Increases Lightning Qilin's DMG by **99%**, and reduces its Attack Interval by **50%**.",
      image: 'lord_of_beasts.jpg',
    },
    {
      name: 'Auspicious Spirit',
      level: 'Lv. 6',
      description:
        'When the Lightning Qilin hits a target with **Lux Mark: Light**, increases **ATK** by **6.7%** for **10s**, up to **20 stacks**.',
      image: 'auspicious_spirit.jpg',
    },
  ],

  // Support Potentials - Support Position
  supportPotentials: [
    // === BUILD 1: LIGHTNING DOMAIN BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Jinglin: Support Build 1',
      buildSubtitle: 'Lightning Domain Build',
      buildDescription: 'A build that summons a Thunder Domain to deal AoE high-frequency DMG.',
    },
    {
      name: 'Thunderbolt: Dragon',
      description: "Increases Lightning Domain's Attack Range by **50%** and its DMG by **6%**.",
      image: 'thunderbolt_dragon.jpg',
    },
    {
      name: 'Thunderbolt: Bamboo',
      description:
        "Increases Lightning Domain's DMG by **5%**, and reduces its Attack Interval by **30%**.",
      image: 'thunderbolt_bamboo.jpg',
    },
    {
      name: 'Self-drawn Concealed Hand',
      level: 'Lv. 6',
      description: "Increases Lightning Domain's duration by **2s** and its DMG by **79%**.",
      image: 'self_drawn_concealed_hand.jpg',
    },
    {
      name: 'Sequential Triplets',
      level: 'Lv. 6',
      description:
        'When the Lightning Domain deals DMG to elite or higher-tier targets, increases Skill DMG by **80%**.',
      image: 'sequential_triplets.jpg',
    },
    {
      name: 'Win upon a Kong',
      level: 'Lv. 6',
      description:
        'For every second the Lightning Domain remains active, increases its DMG by **24%**.',
      image: 'win_upon_a_kong.jpg',
    },

    // === BUILD 2: CONTROL BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Jinglin: Support Build 2',
      buildSubtitle: 'Control Build',
      buildDescription:
        'A build that summons a Thunder Domain to control enemies and deal burst DMG.',
    },
    {
      name: 'Thunderbolt: Character',
      description:
        'When targets enter or leave the Lightning Domain, stuns them for **1s**, and increases the **Lux DMG** they take by **8%** for **8s**.',
      image: 'thunderbolt_character.jpg',
    },
    {
      name: 'Thunderbolt: Circle',
      description:
        'When the Lightning Domain emerges, deals an additional **165% of ATK** as **Lux Skill DMG**, and continues to deal **165% of ATK** as **Lux Skill DMG** every **3s**.',
      image: 'thunderbolt_circle.jpg',
    },
    {
      name: 'Complete Sequence',
      level: 'Lv. 6',
      description:
        'Reduces the Cooldown of Static Discharge (Support Skill) by **2s**, and increases its DMG by **63%**.',
      image: 'complete_sequence.jpg',
    },
    {
      name: 'Triple Chows',
      level: 'Lv. 6',
      description:
        "When the Lightning Domain deals DMG, there is a **30%** chance to increase the main Trekker's **ATK** by **37%** for **8s**.",
      image: 'triple_chows.jpg',
    },
    {
      name: 'No Ones No Nines',
      level: 'Lv. 6',
      description:
        'While the main Trekker is inside the Lightning Domain, increases their **ATK** by **53%**.',
      image: 'no_ones_no_nines.jpg',
    },

    // === GENERIC SUPPORT CARDS ===
    {
      isBuildHeader: true,
      buildTitle: 'Jinglin: Support Generic Cards',
      buildSubtitle: 'Universal Enhancements',
      buildDescription: 'General purpose cards that work well in any Support role setup.',
    },
    {
      name: 'Social Butterfly',
      level: 'Lv. 6',
      description: "Increases Lux Trekkers' Crit Rate by **9.5%**.",
      image: 'social_butterfly.jpg',
    },
    {
      name: 'Effortless Mastery',
      level: 'Lv. 6',
      description:
        'Roar of the Qilin (Ultimate) can inflict **Lux Mark: Light**. Also increases its DMG by **119%**.',
      image: 'effortless_mastery.jpg',
    },
    {
      name: 'Little Manager',
      level: 'Lv. 6',
      description: 'Increases Skill DMG by **38%**.',
      image: 'little_manager.jpg',
    },
    {
      name: 'Heavenly Kirin',
      level: 'Lv. 6',
      description:
        "When the Lightning Qilin is on the field, Jinglin's **ATK** is increased by **225%**.",
      image: 'heavenly_kirin.jpg',
    },
    {
      name: 'Lord of Beasts',
      level: 'Lv. 6',
      description:
        "Increases Lightning Qilin's DMG by **99%**, and reduces its Attack Interval by **50%**.",
      image: 'lord_of_beasts.jpg',
    },
    {
      name: 'Auspicious Spirit',
      level: 'Lv. 6',
      description:
        'When the Lightning Qilin hits a target with **Lux Mark: Light**, increases **ATK** by **6.7%** for **10s**, up to **20 stacks**.',
      image: 'auspicious_spirit.jpg',
    },
  ],

  // Disc Information
  disc: {
    name: 'Bam Bam Girl',
    image: 'Bam_Bam_Girl.jpg',
    rarity: '4-Star',
    element: 'Lux',
    tags: ['Lux', 'Ultimate'],
    stats: {
      baseHP: 5620,
      baseATK: 1077,
    },
    skills: {
      melody: {
        name: 'Glimmer Bubbles',
        effect:
          "Increases the ATK of Lux Trekkers in the squad by 10%. When a Lux Trekker casts a skill, increases Lux Trekkers' Ultimate DMG by 50% for 5s.",
      },
      harmony: {
        name: 'Shining Burst',
        level: 5,
        effect: "When any Trekker triggers Lux Mark, increases Lux squadmates' ATK by 20% for 4s.",
        requirements: {
          'Melody of Burst': '≥ Lv.70',
          'Melody of Focus': '≥ Lv.70',
          'Melody of Stamina': '≥ Lv.70',
        },
      },
    },
    support: {
      musicalNotesSource: 'Monolith Ascension',
      melodies: {
        stamina: {
          baseEffect: 'Max HP +0.3%',
          maxEffect: 'Max HP +29.7%',
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
      name: 'Social Butterfly',
      level: 'Lv. 6',
      description: "Increases Lux Trekkers' Crit Rate by **9.5%**.",
      image: 'social_butterfly.jpg',
    },
    {
      name: 'Effortless Mastery',
      level: 'Lv. 6',
      description:
        'Roar of the Qilin (Ultimate) can inflict **Lux Mark: Light**. Also increases its DMG by **119%**.',
      image: 'effortless_mastery.jpg',
    },
    {
      name: 'Little Manager',
      level: 'Lv. 6',
      description: 'Increases Skill DMG by **38%**.',
      image: 'little_manager.jpg',
    },
    {
      name: 'Heavenly Kirin',
      level: 'Lv. 6',
      description:
        "When the Lightning Qilin is on the field, Jinglin's **ATK** is increased by **225%**.",
      image: 'heavenly_kirin.jpg',
    },
    {
      name: 'Lord of Beasts',
      level: 'Lv. 6',
      description:
        "Increases Lightning Qilin's DMG by **99%**, and reduces its Attack Interval by **50%**.",
      image: 'lord_of_beasts.jpg',
    },
    {
      name: 'Auspicious Spirit',
      level: 'Lv. 6',
      description:
        'When the Lightning Qilin hits a target with **Lux Mark: Light**, increases **ATK** by **6.7%** for **10s**, up to **20 stacks**.',
      image: 'auspicious_spirit.jpg',
    },
  ],

  story:
    'Jinglin can summon lightning and fill the area around her with golden strikes. Though there is no consensus on the origin of this power, Jinglin herself believes that it was granted to her by the Divine Tree in Cang Wu city.',

  fullStats: {
    speed: 100,
  },
};

export const jinglinSEO = {
  title: 'Jinglin - Stella Sora Character Guide',
  description:
    'Complete guide for Jinglin, an 4-Star Lux Versatile in Stella Sora. Stats, skills, talents, potentials, and detailed information.',
  keywords: [
    'Jinglin',
    'Stella Sora',
    '4-Star',
    'Lux',
    'Versatile',
    'character guide',
    'Bam Bam Girl',
    'Fenghuang Diner',
    'Inquisitive',
    'Lightning Qilin',
  ],
};
