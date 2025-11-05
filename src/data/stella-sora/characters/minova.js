// Minova Character Data
export const minovaData = {
  id: 5,
  name: 'Minova',
  slug: 'minova',
  detailUrl: '/guides/stella-sora/characters/minova',
  image: 'Minova.jpg',
  icon: 'Minova.jpg',
  rarity: '5-Star',
  element: 'Lux',
  role: 'Versatile',
  faction: 'Ashwind Clan',
  trekkerStyle: 'Steady',
  level: 90,

  // Essential table stats (Level max)
  stats: {
    hp: 83522,
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
      name: 'Bat and Skate',
      type: 'Attack',
      level: 10,
      cooldown: 0,
      energyCost: 0,
      description:
        'Swings the baseball bat and kickflips the skateboard to attack the target.\n\n- **Strike 1**: 43.1% of ATK as Lux DMG\n\n- **Strike 2**: 43.1% of ATK as Lux DMG\n\n- **Strike 3**: 72% of ATK as Lux DMG\n\n- **Strike 4**: 47.2% of ATK and 21.5% of ATK × 6 as Lux DMG\n\n- **Strike 5**: 112% of ATK as Lux DMG',
    },
    {
      name: 'Syou: Pulsar Streak',
      type: 'Main Skill',
      level: 10,
      cooldown: 14,
      energyCost: 0,
      description:
        'Swings the baseball bat, dealing 161% of ATK as Lux DMG. Then, activates the second phase, Two Base Hit: Charges at the target, delivering rapid strikes. Hold to deal 38.3% of ATK as Lux DMG every 0.3s for a total of 3s. Finishes with a powerful smash, dealing 174% of ATK as Lux DMG.\n\nBoth Syou: Pulsar Streak (Main Skill) and Two Base Hit can trigger Lux Mark☀, dealing 301% of ATK as Lux Mark DMG.',
    },
    {
      name: 'Gi: Supernova Burst',
      type: 'Support Skill',
      level: 10,
      cooldown: 16,
      energyCost: 0,
      description:
        'Radiates hyper concentrated starlight, dealing 847% of ATK as Lux DMG and inflicting 2 stacks of Astral Hex.\n\nEvery 3s, Astral Hex deals 473% of ATK as AoE Lux DMG and inflicts Lux Mark: Light☀.',
    },
    {
      name: 'Ketsu: Entropic Convergence',
      type: 'Ultimate',
      level: 10,
      cooldown: 25,
      energyCost: 237,
      description:
        'Commands the Ashwind Clan members to attack the target, dealing 195% of ATK as AoE Lux DMG every 0.3s for a total of 5s.',
    },
  ],

  // Talents (Dupes)
  talents: [
    {
      id: '01',
      name: 'Starry Night',
      description:
        "Whenever a target's **Lux Mark** is triggered, the target takes **14%** more Lux DMG for 10s.",
    },
    {
      id: '02',
      name: 'Where Wind Starts',
      description: 'When Minova casts her Ultimate, her ATK is increased by **25%** for 20s.',
    },
    {
      id: '03',
      name: 'Forsaken Memories',
      description:
        'Each time Minova deals Ultimate DMG to a target, increases the Lux DMG taken by the target by **1.75%** for 20s, stacking up to 10 times.',
    },
    {
      id: '04',
      name: 'Imperishable Belief',
      description: "After a squadmate casts a skill, Minova's ATK is increased by **20%** for 10s.",
    },
    {
      id: '05',
      name: 'Books, Skateboard and the Clan',
      description: "Increases Minova's Skill DMG dealt to elite or higher-tier targets by **30%**.",
    },
  ],

  // Potentials - Position Based
  mainPotentials: [
    // === BUILD 1: COMBO ENHANCEMENT ===
    {
      isBuildHeader: true,
      buildTitle: 'Minova: Main Build 1',
      buildSubtitle: 'Combo Enhancement',
      buildDescription:
        'A build that adds a 3rd attack to skills, synergizing Auto Attacks and skill combos for optimal DMG.',
    },
    {
      name: 'Ultimatum',
      description:
        'Adds a third phase to the Main Skill: Three Base Hit. Deals **320% of ATK ×2**/**479% of ATK** as AoE Lux Skill DMG. During this phase, Minova becomes **immune** to damage.',
      image: 'Ultimatum.jpg',
    },
    {
      name: 'Clan Clash Artistry',
      description:
        'When Syou: Pulsar Streak (Main Skill) triggers a **Lux Mark**, enhances Two Base Hit, increasing its DMG by **64.4%** and reducing its Attack Interval by **30%**.',
      image: 'Clan_clash_artistry.jpg',
    },
    {
      name: 'Ashwind Rhythm',
      level: 'Lv. 6',
      description:
        'After Minova casts the Main Skill, increases her Attack Speed by **20%** and Auto Attack DMG by **354%** for 6s.',
      image: 'ashwind_rhythm.jpg',
    },
    {
      name: 'Unyielding Strength',
      level: 'Lv. 6',
      description:
        "When Minova hits a target with an Auto Attack, increases her next Main Skill's DMG by **32%**, stacking up to 6 times.",
      image: 'unyielding_strength.jpg',
    },
    {
      name: 'On a Roll',
      level: 'Lv. 6',
      description:
        "While Minova's Main Skill is active, each strike increases its Skill DMG by **19.3%**, stacking up to 6 times.",
      image: 'on_a_roll.jpg',
    },

    // === BUILD 2: CONSECUTIVE SKILL BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Minova: Main Build 2',
      buildSubtitle: 'Consecutive Skill Enhancement',
      buildDescription:
        'A build that enhances the two-phase attacks of skills, enabling consecutive skill casting for sustained DPS.',
    },
    {
      name: 'Board Tricks',
      description:
        'Increases the damage of Syou: Pulsar Streak (Main Skill) by **430%**. When **Lux Mark** is triggered, increases the Skill DMG taken by the target by **27%** for 8s.',
      image: 'Board_tricks.jpg',
    },
    {
      name: 'No Respite',
      description:
        'Two Base Hit becomes a 3-hit combo and its damage is increased by **47%**. When cast within 2s after Syou: Pulsar Streak, deals an additional **184% of ATK** as AoE Lux Skill DMG with each hit.',
      image: 'No_respite.jpg',
    },
    {
      name: 'Light Burn',
      level: 'Lv. 6',
      description:
        'Reduces the Cooldown of Syou: Pulsar Streak (Main Skill) by **4s**. When casting, increases Skill DMG by **81%** for 5s.',
      image: 'Light_burn.jpg',
    },
    {
      name: 'Radiant Glow',
      level: 'Lv. 6',
      description:
        'When Syou: Pulsar Streak (Main Skill) hits a target, deals an additional **626% of ATK** as AoE Lux Skill DMG.',
      image: 'Radiant_glow.jpg',
    },
    {
      name: 'Nebulous Reverb',
      level: 'Lv. 6',
      description:
        'Ketsu: Entropic Convergence can trigger **Lux Mark**, dealing **301% of ATK** as Lux Mark DMG. After casting the Ultimate, increases Skill DMG by **364%** for 5s.',
      image: 'Nebulous_reverb.jpg',
    },

    // === GENERIC MAIN ROLE CARDS ===
    {
      isBuildHeader: true,
      buildTitle: 'Minova: Main Generic Cards',
      buildSubtitle: 'Universal Enhancements',
      buildDescription: 'General purpose cards that work well in any Main role setup.',
    },
    {
      name: 'Starlit Sky',
      level: 'Lv. 6',
      description:
        "When casting any Support Skill, increases Minova's ATK by **48%** for 10s, stacking up to 2 times.",
      image: 'Starlit_sky.jpg',
    },
    {
      name: 'More Than Just Pretty',
      level: 'Lv. 6',
      description:
        "When the fifth strike of Minova's Auto Attack deals DMG, increases the Lux DMG taken by the target by **40%** for 6s.",
      image: 'More_than_just_pretty.jpg',
    },
    {
      name: 'Home Court Advantage',
      level: 'Lv. 6',
      description:
        "After casting Syou: Pulsar Streak, (Main Skill) increases Minova's ATK by **100%** for 6s. This effect can only be triggered once every 8s.",
      image: 'Home_court_advantage.jpg',
    },
    {
      name: 'Urgent Reinforcement',
      level: 'Lv. 6',
      description:
        'Casting Ketsu: Entropic Convergence (Ultimate) requires **25%** more Energy and its DMG is increased by **127%**.',
      image: 'Urgent_reinforcement.jpg',
    },
    {
      name: 'Flash of Starlight',
      level: 'Lv. 6',
      description:
        'Reduces the Attack Interval of Ketsu: Entropic Convergence (Ultimate) by **30%** and increases its DMG by **83%**.',
      image: 'Flash_of_starlight.jpg',
    },
    {
      name: 'Weakness Strike',
      level: 'Lv. 6',
      description:
        'While Ketsu: Entropic Convergence is active, Vollara and Neuvira will help Minova attack the enemies, dealing **610% of ATK ×2**/**1221% of ATK** as AoE Lux Ultimate DMG.',
      image: 'Weakness_strike.jpg',
    },
  ],

  supportPotentials: [
    // === BUILD 1: STAR SCATTER BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Minova: Support Build 1',
      buildSubtitle: 'Star Scatter Build',
      buildDescription:
        'A build that scatters stars that attach to targets, dealing DMG over time.',
    },
    {
      name: 'Four-Star Wanted Level',
      description:
        'Increases the DMG of Gi: Supernova Burst (Support Skill) by **15%**. Gi: Supernova Burst will apply **4 stacks** of Astral Hex.',
      image: 'Four-Star_Wanted_Level.jpg',
    },
    {
      name: 'Shining Burst',
      description: 'Increases the Attack Range of Astral Hex by **50%** and its DMG by **44%**.',
      image: 'Shining_burst.jpg',
    },
    {
      name: 'Shutout Desire',
      level: 'Lv. 6',
      description:
        "When the main Trekker deals damage to a target inflicted with Astral Hex, deals an additional **148% of Minova's ATK** as Lux Skill DMG. This effect can only be triggered once per second.",
      image: 'Shutout_desire.jpg',
    },
    {
      name: 'Optimal Hit Zone',
      level: 'Lv. 6',
      description:
        'Increases the Skill DMG dealt to targets inflicted with Astral Hex. Each Astral Hex increases the Skill DMG by **25%**.',
      image: 'Optimal_hit_zone.jpg',
    },
    {
      name: 'Final Score',
      level: 'Lv. 6',
      description:
        'Each target inflicted with Astral Hex increases the exploding DMG of Astral Hex by **46%**, up to 4 stacks.',
      image: 'Final_score.jpg',
    },

    // === BUILD 2: SHIELD BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Minova: Support Build 2',
      buildSubtitle: 'Shield Enhancement',
      buildDescription:
        'A build that scatters stars that attach and weaken enemies, granting a shield to the main Trekker.',
    },
    {
      name: 'Oath Satellite',
      description:
        "When casting Gi: Supernova Burst (Support Skill), the main Trekker gains a shield equal to **15% of Minova's Max HP**, lasting for 6s.",
      image: 'Oath_satellite.jpg',
    },
    {
      name: 'Star Core Crumbled',
      description:
        'When Astral Hex deals DMG, summons a Meteor. When the main Trekker picks it up, gains a stack of Astral Hex, and their ATK is increased by **18%** for 8s.',
      image: 'Star_core_crumbled.jpg',
    },
    {
      name: 'Perfect Arc',
      level: 'Lv. 6',
      description:
        'When casting Gi: Supernova Burst (Support Skill), deals an additional **501% of ATK ×4** as Lux Skill DMG and inflicts Astral Hex.',
      image: 'Perfect_arc.jpg',
    },
    {
      name: 'Three Base Hit',
      level: 'Lv. 6',
      description:
        "When Gi: Supernova Burst (Support Skill) hits 3 or more targets, reduces the Skill Cooldown by **3s** and increases the squad's ATK by **85%** for 8s.",
      image: 'Three_base_hit.jpg',
    },
    {
      name: 'Fervent Applause',
      level: 'Lv. 6',
      description:
        'When Astral Hex deals DMG, increases the ATK of the main Trekker within its Attack Range by **25%** for 8s, up to 8 stacks.',
      image: 'Fervent_applause.jpg',
    },

    // === GENERIC SUPPORT CARDS ===
    {
      isBuildHeader: true,
      buildTitle: 'Minova: Support Generic Cards',
      buildSubtitle: 'Universal Enhancements',
      buildDescription: 'General purpose cards that work well in any Support role setup.',
    },
    {
      name: 'Radiant Synergy',
      level: 'Lv. 6',
      description:
        "For each Lux Trekker on the squad, increases the squad's ATK by **20%**, up to 3 stacks.",
      image: 'Radiant_synergy.jpg',
    },
    {
      name: "Ashwind's Wrath",
      level: 'Lv. 6',
      description:
        'Ketsu: Entropic Convergence (Ultimate) can inflict **Lux Mark: Light**. After casting Gi: Supernova Burst (Support Skill), increases the DMG of the next Ultimate by **37%**, up to 3 stacks.',
      image: "Ashwind's_wrath.jpg",
    },
    {
      name: 'Home Run State',
      level: 'Lv. 6',
      description: "Increases Minova's ATK by **40%**.",
      image: 'Home_run_state.jpg',
    },
    {
      name: 'Urgent Reinforcement',
      level: 'Lv. 6',
      description:
        'Casting Ketsu: Entropic Convergence (Ultimate) requires **25%** more Energy and its DMG is increased by **127%**.',
      image: 'Urgent_reinforcement.jpg',
    },
    {
      name: 'Flash of Starlight',
      level: 'Lv. 6',
      description:
        'Reduces the Attack Interval of Ketsu: Entropic Convergence (Ultimate) by **30%** and increases its DMG by **83%**.',
      image: 'Flash_of_starlight.jpg',
    },
    {
      name: 'Weakness Strike',
      level: 'Lv. 6',
      description:
        'While Ketsu: Entropic Convergence is active, Vollara and Neuvira will help Minova attack the enemies, dealing **610% of ATK ×2**/**1221% of ATK** as AoE Lux Ultimate DMG.',
      image: 'Weakness_strike.jpg',
    },
  ],

  // Disc Information
  disc: {
    name: 'Midnight Mayhem',
    image: 'Midnight_mayhem.jpg',
    rarity: '5-Star',
    element: 'Lux',
    tags: ['Lux', 'ATK', 'Skills', 'VUL'],
    stats: {
      basicAtk: 1582,
      luxDmg: '15%',
    },
    skills: {
      melody: {
        name: 'Midnight Mayhem',
        effect:
          "Increases the Skill DMG & Ultimate DMG of Lux Trekkers in the squad by **24%**. When any Trekker triggers **Lux Mark**, increases the main Lux Trekker' Auto Attack & Ultimate DMG by **27.5%** for 4s.",
      },
      harmony: {
        name: 'Decisive Strike',
        level: 5,
        effect:
          "When a Lux main Trekker hits a target, increases all Lux squadmates' ATK by **12.5%** for 15s. When any Lux Trekker hits a stunned target, increases this effect by an additional **12.5%** for 15s.",
        requirements: {
          'Melody of Lux': '≥ Lv.70',
          'Melody of Ultimate': '≥ Lv.70',
        },
      },
      skill: {
        name: 'Reach of Radiance',
        level: 5,
        effect:
          'When a Lux Support Skill hits a target, increases the Lux DMG taken by the target by **20%** for 10s.',
        requirements: {
          'Melody of Pummel': '≥ Lv.75',
          'Melody of Lux': '≥ Lv.75',
          'Melody of Ultimate': '≥ Lv.75',
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
    {
      name: 'Lux Mark: Light',
      description:
        'A special status applied to the target by some Lux Trekkers, lasting for 10s. Can be triggered by the attacks of specific Lux Trekkers. When triggered, deals DMG.',
    },
  ],

  // Generic Cards
  genericCards: [
    {
      name: 'Radiant Synergy',
      level: 'Lv. 6',
      description:
        "For each Lux Trekker on the squad, increases the squad's ATK by **20%**, up to 3 stacks.",
      image: 'Radiant_synergy.jpg',
    },
    {
      name: "Ashwind's Wrath",
      level: 'Lv. 6',
      description:
        'Ketsu: Entropic Convergence (Ultimate) can inflict **Lux Mark: Light**. After casting Gi: Supernova Burst (Support Skill), increases the DMG of the next Ultimate by **37%**, up to 3 stacks.',
      image: "Ashwind's_wrath.jpg",
    },
    {
      name: 'Home Run State',
      level: 'Lv. 6',
      description: "Increases Minova's ATK by **40%**.",
      image: 'Home_run_state.jpg',
    },
    {
      name: 'Urgent Reinforcement',
      level: 'Lv. 6',
      description:
        'Casting Ketsu: Entropic Convergence (Ultimate) requires **25%** more Energy and its DMG is increased by **127%**.',
      image: 'Urgent_reinforcement.jpg',
    },
    {
      name: 'Flash of Starlight',
      level: 'Lv. 6',
      description:
        'Reduces the Attack Interval of Ketsu: Entropic Convergence (Ultimate) by **30%** and increases its DMG by **83%**.',
      image: 'Flash_of_starlight.jpg',
    },
    {
      name: 'Weakness Strike',
      level: 'Lv. 6',
      description:
        'While Ketsu: Entropic Convergence is active, Vollara and Neuvira will help Minova attack the enemies, dealing **610% of ATK ×2**/**1221% of ATK** as AoE Lux Ultimate DMG.',
      image: 'Weakness_strike.jpg',
    },
  ],

  story:
    'As the leader of the Ashwind Clan, Minova rarely operates alone. Her greatest asset in battle is not her skateboard or baseball bat, but her companions.',

  fullStats: {
    speed: 100,
  },
};

export const minovaSEO = {
  title: 'Minova - Stella Sora Character Guide',
  description:
    'Complete guide for Minova, an 5-Star Lux Versatile in Stella Sora. Stats, skills, talents, potentials, and detailed information.',
  keywords: [
    'Minova',
    'Stella Sora',
    '5-Star',
    'Lux',
    'Versatile',
    'character guide',
    'Midnight Mayhem',
    'Ashwind Clan',
  ],
};
