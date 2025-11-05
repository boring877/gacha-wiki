// Gerie Character Data
export const gerieData = {
  id: 8,
  name: 'Gerie',
  slug: 'gerie',
  detailUrl: '/guides/stella-sora/characters/gerie',
  image: 'Gerie.jpg',
  icon: 'Gerie.jpg',
  rarity: '5-Star',
  element: 'Terra',
  role: 'Vanguard',
  faction: 'Grace Imperium',
  trekkerStyle: 'Inquisitive',
  level: 90,

  // Essential table stats (Level max)
  stats: {
    hp: 88236,
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
    Terra: {
      dmg: 100.0,
      pen: 0,
      ignoreRes: 0.0,
    },
  },

  // Skills
  skills: [
    {
      name: 'Kiss of Death',
      type: 'Attack',
      level: 10,
      cooldown: 0,
      energyCost: 0,
      description:
        'Slings the chain shovel to deal DMG multiple times.\n\n- **Strike 1**: 42.8% of ATK as Terra DMG\n\n- **Strike 2**: 27.3% of ATK ×2 as Terra DMG\n\n- **Strike 3**: 39.2% of ATK as Terra DMG\n\n- **Strike 4**: 36% of ATK ×2 as Terra DMG\n\n- **Strike 5**: 63.8% of ATK / 46.8% of ATK as Terra DMG',
    },
    {
      name: 'Thorned Inferno',
      type: 'Main Skill',
      level: 10,
      cooldown: 14,
      energyCost: 0,
      description:
        'Leaps at the target, dealing 239% of ATK / 159% of ATK as AoE Terra DMG, and creates an Iron Cage.\n\nIron Cage: Links 2 nearby targets, dealing 70.2% of ATK as Terra DMG every second for 8s. When Gerie is near the Iron Cage, she enters the Lethal status, which increases her Auto Attack Damage by 30%.\n\nThorned Inferno (Main Skill) can trigger Terra Mark, dealing 125% of ATK as AoE Terra Mark DMG.',
    },
    {
      name: 'Immediate Execution',
      type: 'Support Skill',
      level: 10,
      cooldown: 12,
      energyCost: 0,
      description:
        'Slings the chain shovel and creates Seismic Waves, dealing 292% / 220% Terra DMG respectively.\n\nImmediate Execution (Support Skill) can trigger Terra Mark, dealing 125% of ATK as AoE Terra Mark DMG.',
    },
    {
      name: 'Divine: Retribution of Evil',
      type: 'Ultimate',
      level: 10,
      cooldown: 30,
      energyCost: 285,
      description:
        "Generates a huge chain shovel, dealing 1089% of ATK ×3 as Terra DMG to targets in its path.\n\nHeaven's Grace: Judgement of Doom (Ultimate) can trigger Terra Mark, dealing 125% of ATK as AoE Terra Mark DMG.",
    },
  ],

  // Talents (Dupes)
  talents: [
    {
      id: '01',
      name: 'Original Sin',
      description:
        'After Gerie deals Skill DMG, her ATK is increased by 2.5% for 5s, stacking up to 8 times. This effect can only be triggered once per sec.',
    },
    {
      id: '02',
      name: 'White Throne',
      description:
        'When Gerie triggers Terra Mark, her Terra DMG is increased by 2.5% for 4s, stacking up to 8 times.',
    },
    {
      id: '03',
      name: "Lazarus' Resurrection",
      description:
        'After Gerie deals Ultimate DMG to a target, her Skill DMG is increased by 8.3% for 20s, stacking up to 7 times.',
    },
    {
      id: '04',
      name: 'Shackled at Dusk',
      description: "When any Trekker inflicts Terra Mark, increases Gerie's ATK by 20% for 5s.",
    },
    {
      id: '05',
      name: "Messiah' Promise",
      description: "Increases Gerie's Terra DMG to elite or higher-tier targets by 24%.",
    },
  ],

  // Potentials - Position Based
  mainPotentials: [
    // === BUILD 1: AUTO ATTACK BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Gerie: Main Build 1',
      buildSubtitle: 'Auto Attack Build',
      buildDescription:
        'An Auto Attack build that increases Movement Speed, attack range, and DMG after casting a skill.',
    },
    {
      name: 'Beyond All Control',
      description:
        'When Gerie is in Lethal status, increases her Movement Speed by 15% and her Auto Attack Damage by 47%. Lethal is no longer limited to the vicinity of Iron Cage.',
      image: 'Beyond_all_control.jpg',
    },
    {
      name: 'Avalanche of Stone',
      description:
        'When Gerie is in Lethal status, increases the range of her Auto Attacks by 25%, and she can trigger Terra Mark. When an Auto Attack deals DMG, it also deals 49.7% of ATK as Terra Auto Attack DMG.',
      image: 'Avalanche_of_stone.jpg',
    },
    {
      name: 'Lingering Hunger',
      level: 'Lv. 6',
      description:
        "Increases Gerie's Auto Attack Damage by 107%. If Gerie is in Lethal status when the Iron Cage disappears, the status lasts 4s longer.",
      image: 'Lingering_hunger.jpg',
    },
    {
      name: 'Delight in Ruin',
      level: 'Lv. 6',
      description:
        'When Gerie deals DMG with an Auto Attack, increases her ATK by 8% for 8s, stacking up to 6 times.',
      image: 'Delight_in_Ruin.jpg',
    },
    {
      name: 'No Safeword',
      level: 'Lv. 6',
      description:
        "Increases Gerie's Auto Attack Damage by 72%. Increases her Auto Attack DMG to targets with Resilience Break by 140%.",
      image: 'No_safeword.jpg',
    },

    // === BUILD 2: SKILL BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Gerie: Main Build 2',
      buildSubtitle: 'Skill Build',
      buildDescription:
        'A skill build that increases the number of targets linked by skills and creates chain reactions with Trekkers.',
    },
    {
      name: 'Agony Cascade',
      description: 'The Iron Cage now links 4 targets and its Skill DMG is increased by 50%.',
      image: 'Agony_cascade.jpg',
    },
    {
      name: 'Endless Throes',
      description:
        'When Gerie deals Auto Attack DMG to targets linked by the Iron Cage, deals an additional 187% of ATK as Terra Skill DMG to these targets. This effect can only be triggered once per second. Can trigger Terra Mark.',
      image: 'Endless_throes.jpg',
    },
    {
      name: 'Piercing Sorrow',
      level: 'Lv. 6',
      description: "Increases Iron Cage's DMG by 71% and its duration by 50%.",
      image: 'Piercing_sorrow.jpg',
    },
    {
      name: 'Slanderous Strike',
      level: 'Lv. 6',
      description:
        "Reduces the Movement Speed of targets linked by the Iron Cage by 50%. Increases Gerie's DMG to slowed targets by 43%.",
      image: 'Slanderous_strike.jpg',
    },
    {
      name: "Everyone's Invited",
      level: 'Lv. 6',
      description: "Increases Iron Cage's DMG by 85% and its range by 100%.",
      image: "Everyone's_invited.jpg",
    },

    // === GENERIC MAIN ROLE CARDS ===
    {
      isBuildHeader: true,
      buildTitle: 'Gerie: Main Generic Cards',
      buildSubtitle: 'Universal Enhancements',
      buildDescription: 'General purpose cards that work well in any Main role setup.',
    },
    {
      name: 'Shared Sensation',
      level: 'Lv. 6',
      description: "For each Terra Trekker on the squad, increases Gerie's ATK by 20%.",
      image: 'Shared_sensation.jpg',
    },
    {
      name: 'Shadow Law',
      level: 'Lv. 6',
      description:
        "When a squadmate casts a Support Skill, increases Gerie's Skill DMG by 35% for 10s, up to 2 stacks.",
      image: 'Shadow_law.jpg',
    },
    {
      name: 'Hunt is On',
      level: 'Lv. 6',
      description: 'Gerie can dodge one more time. After dodging, increases her ATK by 37% for 8s.',
      image: 'Hunt_is_on.jpg',
    },
    {
      name: "Emberwing's Proclamation",
      level: 'Lv. 6',
      description:
        "Increases Gerie's Ultimate DMG by 21%. Divine Retribution of Evil now conjures up 2 additional gigantic chained spades, dealing 465% of ATK as Terra Ultimate DMG.",
      image: "Emberwing's_proclamation.jpg",
    },
    {
      name: "Quadrifrons' Lore",
      level: 'Lv. 6',
      description:
        "Increases Gerie's Ultimate DMG by 69%. When a squadmate triggers Terra Mark on a target, additionally increases Gerie's Ultimate DMG by 97% to the same target for 15s.",
      image: "Quadrifron's_lore.jpg",
    },
    {
      name: "Samsara's Judgment",
      level: 'Lv. 6',
      description:
        "When casting Divine Retribution of Evil (Ultimate), increases Gerie's DMG to nearby targets by 117% for 15s. Also inflicts Fear on normal targets for 2s.",
      image: "Samsara's_Judgment.jpg",
    },
  ],

  supportPotentials: [
    // === BUILD 1: BURST BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Gerie: Support Build 1',
      buildSubtitle: 'Burst Build',
      buildDescription:
        'A burst build that increases the number of chain shovels and allows chain shovel dragging to deal additional DMG.',
    },
    {
      name: 'Deeper into Sin',
      description:
        "Increases the damage of Immediate Execution (Support Skill)'s chained spades by 11%. When casting Immediate Execution, conjures up 2 additional chained spades, dealing 131% of ATK as Terra Skill DMG.",
      image: 'Deeper_into_sin.jpg',
    },
    {
      name: 'Curtain Call',
      description:
        "Increases the damage of Immediate Execution (Support Skill)'s chained spades by 11%. When the chained spades are withdrawn, each spade deals 43.8% of ATK as Terra Skill DMG. Can trigger Terra Mark.",
      image: 'Curtain_call.jpg',
    },
    {
      name: 'Hexacalamity: Hallowed Chains',
      level: 'Lv. 6',
      description:
        'When the chain shovel of Immediate Execution (Support Skill) hits a target, it deals 132% of ATK as Terra Skill DMG.',
      image: 'Hexacalamity_hallowed_chains.jpg',
    },
    {
      name: "Hexacalamity: Grief's Toll",
      level: 'Lv. 6',
      description:
        "When casting Immediate Execution (Support Skill), increases Gerie's Skill DMG by 69% for 3s.",
      image: "Hexacalamity_Grief's_toll.jpg",
    },
    {
      name: "Hexacalamity: Tyrant's March",
      level: 'Lv. 6',
      description:
        "Increases the DMG of Immediate Execution (Support Skill)'s chained spades to targets at less than 70% HP by 64%.",
      image: "Hexacalamity_tyrant's_march.jpg",
    },

    // === BUILD 2: SHOCKWAVE BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Gerie: Support Build 2',
      buildSubtitle: 'Shockwave Build',
      buildDescription:
        'A build that allows the Trekker to continuously generate shockwaves to deal DMG over time.',
    },
    {
      name: 'Sin-Bound Echo',
      description:
        "When casting Immediate Execution (Support Skill), Gerie remains on the battlefield for 6s and creates seismic waves at her and the chained spades' location once per second, each seismic wave dealing 30.7% of ATK as Terra Skill DMG.",
      image: 'Sin-Bound_echo.jpg',
    },
    {
      name: 'Earthshaker',
      description:
        "Increases the DMG of Immediate Execution (Support Skill)'s seismic waves by 32% and their Attack Range by 40%.",
      image: 'Earthshaker.jpg',
    },
    {
      name: 'Hexacalamity: Famine',
      level: 'Lv. 6',
      description:
        'When the seismic waves generated by Immediate Execution (Support Skill) end, they deal an additional 30.5% of ATK as AoE Terra Skill DMG.',
      image: 'Hexacalamity_famine.jpg',
    },
    {
      name: 'Hexacalamity: Erosion',
      level: 'Lv. 6',
      description:
        'When casting Immediate Execution (Support Skill), increases Skill DMG by 11% every second. Resets after the Skill ends.',
      image: 'Hexacalamity_erosion.jpg',
    },
    {
      name: 'Hexacalamity: Death',
      level: 'Lv. 6',
      description:
        'For the seismic waves generated by Immediate Execution (Support Skill), increases their DMG by 31% and Resilience Break Efficiency by 57%.',
      image: 'Hexacalamity_death.jpg',
    },

    // === GENERIC SUPPORT CARDS ===
    {
      isBuildHeader: true,
      buildTitle: 'Gerie: Support Generic Cards',
      buildSubtitle: 'Universal Enhancements',
      buildDescription: 'General purpose cards that work well in any Support role setup.',
    },
    {
      name: 'Anima Resonance',
      level: 'Lv. 6',
      description: "For each Terra Trekker on the squad, increases Gerie's ATK by 20%.",
      image: 'Anima_resonance.jpg',
    },
    {
      name: "Twilight's Verdict",
      level: 'Lv. 6',
      description:
        'When Gerie triggers a Terra Mark, increases her Terra DMG by 40% for 8s, up to 4 stacks.',
      image: "Twilight's_verdict.jpg",
    },
    {
      name: "Twilight's Hunt",
      level: 'Lv. 6',
      description:
        "When a squadmate casts a Skill or Ultimate, increases Gerie's ATK by 40% for 8s, stacking up to 2 times.",
      image: "Twilight's_hunt.jpg",
    },
    {
      name: "Emberwing's Proclamation",
      level: 'Lv. 6',
      description:
        "Increases Gerie's Ultimate DMG by 21%. Divine Retribution of Evil now conjures up 2 additional gigantic chained spades, dealing 465% of ATK as Terra Ultimate DMG.",
      image: "Emberwing's_proclamation.jpg",
    },
    {
      name: "Quadrifrons' Lore",
      level: 'Lv. 6',
      description:
        "Increases Gerie's Ultimate DMG by 69%. When a squadmate triggers Terra Mark on a target, additionally increases Gerie's Ultimate DMG by 97% to the same target for 15s.",
      image: "Quadrifron's_lore.jpg",
    },
    {
      name: "Samsara's Judgment",
      level: 'Lv. 6',
      description:
        "When casting Divine Retribution of Evil (Ultimate), increases Gerie's DMG to nearby targets by 117% for 15s. Also inflicts Fear on normal targets for 2s.",
      image: "Samsara's_Judgment.jpg",
    },
  ],

  // Disc Information
  disc: {
    name: 'The Lost Pilgrim',
    image: 'The_lost_pilgrim.jpg',
    rarity: '5-Star',
    element: 'Terra',
    tags: ['Terra', 'Element', 'Skills', 'ATK'],
    stats: {
      basicAtk: 1582,
      terraDmg: '15%',
    },
    skills: {
      melody: {
        name: 'The Lost Pilgrim',
        effect:
          "Increases the squad's Terra DMG by **20%**. When any Trekker triggers Terra Mark, increases the main Terra Trekker's Skill & Auto Attack DMG by **28%** for **4s**.",
      },
      harmony: {
        name: 'Iron Love Embrace',
        level: 5,
        effect:
          "Increases Terra squadmates' ATK by **12.5%**. When any Terra Trekker deals Skill DMG, if a support Terra Trekker is on the battlefield, increases the Skill DMG by **25%**.",
        requirements: {
          'Melody of Ultimate': '≥ Lv.70',
          'Melody of Terra': '≥ Lv.70',
        },
      },
      skill: {
        name: 'Prison of Passion',
        level: 5,
        effect:
          "When any Trekker triggers Terra Mark, increases Terra squadmates' ATK by **5%** for **5s**, stacking up to **4** times.",
        requirements: {
          'Melody of Ultimate': '≥ Lv.75',
          'Melody of Pummel': '≥ Lv.75',
          'Melody of Terra': '≥ Lv.75',
        },
      },
    },
    support: {
      musicalNotesSource: 'Monolith Ascension',
      melodies: {
        skill: {
          baseEffect: 'Skill DMG +0.46% per level',
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
      name: 'Terra Mark',
      description:
        "The generic name for all Terra Marks. When triggered by specific Terra Trekkers' attacks, the status is removed, and a special effect is activated.",
    },
    {
      name: 'Resilience Break',
      description: 'When Resilience decreases to 0, Superarmor effect is removed',
    },
    {
      name: 'Fear',
      description:
        'The target flees and cannot attack. effect only normal targets, no elite or bosses',
    },
  ],

  story:
    'Shia is the definition of agility. Riding her surfboard alongside Snow Rabbit and Night Rabbit, she unleashes a tidal onslaught that crashes through everything in its path.',

  fullStats: {
    speed: 100,
  },
};

export const gerieSEO = {
  title: 'Gerie - Stella Sora Character Guide',
  description:
    'Complete guide for Gerie, an 5-Star Terre Vanguard in Stella Sora. Stats, skills, talents, potentials, and detailed information.',
  keywords: [
    'Gerie',
    'Stella Sora',
    '5-Star',
    'Terre',
    'Vanguard',
    'character guide',
    'The Lost Pilgrim',
    'Grace Imperium',
  ],
};
