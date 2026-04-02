// Hiyori Build - Zone Nova Character Build
// SSR Chaos Mage DPS - Shield Destroy Nuker

export const hiyoriBuild = {
  name: 'Hiyori',
  role: 'DPS',
  buildType: 'Shield Destroy Chaos Nuker',
  description:
    'Hiyori is a ranged Chaos Mage built to counter Pride-Lucifer in PvP. She has the highest base ATK (1,683) and Crit Rate (57%) in the entire game. Her ult strips ALL shields off the target then slams them for 1060% ATK Chaos DMG with +114% Crit Rate on top -- basically deletes Pride-Lucifer\'s whole shield gimmick on the spot. Passive gives 26.5% extra damage to anyone with a shield, and when you break one it pops a 679.8% ATK AOE explosion. Mostly a PvP unit since shield-heavy comps are everywhere in arena, especially Lucifer teams. Needs at least A1 (ignore 74% DEF on ult) to really do her job against Lucifer.',
  skillPriority: [
    {
      skill: 'Ultimate: Operation: Dustless',
      priority: 1,
      level: 'Level 14',
      reason:
        'Core burst skill - destroys all shields, 1060% ATK damage, and 114% bonus Crit Rate during ultimate',
      description:
        'Energy Cost: 5\nInstantly dashes in front of the target and fires a vacuum compression shot at close range to knock the enemy back, while using the recoil to quickly perform a backflip. The vacuum compression shot explodes immediately upon landing, destroying all of the target\'s Shields and dealing Chaos DMG equal to 1060% of ATK. During the Ultimate, own CRIT Rate is additionally increased by 114%.',
    },
    {
      skill: 'Passive: Explosive Cleanup',
      priority: 2,
      level: 'Level 14',
      reason:
        'Essential for shield-targeting bonus damage and Shield Burst explosion',
      description:
        'All DMG dealt by Hiyori to enemy targets with a Shield is additionally increased by 26.5%. [Shield Burst]: When Hiyori\'s attack successfully breaks an enemy\'s Shield, it immediately triggers a powerful area explosion around the target, dealing Chaos DMG equal to 679.8% of ATK to enemies within the area.',
    },
    {
      skill: 'Auto Skill: Corridor Sweep',
      priority: 3,
      level: 'Level 14',
      reason:
        'Piercing line attack targeting lowest HP%, useful for picking off weak enemies',
      description:
        'Cooldown: 2.0s\nLocks onto the target with the lowest HP percentage on the field and launches a straight-line piercing attack, dealing Chaos DMG equal to 218.6% of ATK to all enemy targets in its path.',
    },
    {
      skill: 'Normal Attack: Attack',
      priority: 4,
      level: 'Level 7',
      reason: 'Basic filler attack, low priority for leveling',
      description:
        'Cooldown: 2.0s\nDeals Chaos DMG equal to 120% of ATK to an enemy.',
    },
  ],
  recommendedMemoryCards: [
    {
      name: "The maid's bath",
      effect:
        "Hiyori's exclusive memory card. CRIT Rate +20%, gains [Descale] state for 8s when attacking shielded enemies. While in [Descale], CRIT DMG +20% and Ultimate DMG +60% on targets without shields. Perfectly synergizes with her shield-breaking playstyle.",
      priority: 'Highly Recommended',
      characterSpecific: true,
      memoryImage: 'Hiyoricard.png',
      memoryStats: { hp: '5,040', attack: '780', defense: '474' },
      description:
        "CRIT Rate +20%, [Descale] state on attacking shielded enemies (8s), CRIT DMG +20% and Ultimate DMG +60% (on non-shielded targets) during [Descale]",
    },
  ],
  alternativeMemoryCards: [
    {
      name: "Slave's Original Wish",
      effect:
        "CRIT Damage +72%, Normal attack damage increases per enemy on field (max 48% at 4 enemies). Good general DPS option for Hiyori's frequent normal attacks.",
      characterSpecific: false,
      memoryImage: 'Freyacard.jpg',
      memoryStats: { hp: '5,040', attack: '780', defense: '474' },
      description:
        'Critical Damage increased by 72%, Normal attack damage increases by 12% per enemy (max 4 stacks)',
    },
    {
      name: 'Night of Bloody Storm',
      effect:
        "ATK +40%, Ultimate DMG +40% after ally buffer uses ultimate. Strong option if paired with buffer supports for amplified ultimate damage.",
      characterSpecific: false,
      memoryImage: 'Night-of-Bloody-Storm.png',
      memoryStats: { hp: '5,040', attack: '780', defense: '474' },
      description:
        'Attack +40%, Ultimate DMG +40% after ally buffer uses ultimate (5s)',
    },
  ],
  runes: {
    primary: 'Critical Damage',
    secondary: 'Critical Rate',
    stats: ['Crit DMG%', 'ATK%'],
    additionalStats: ['Crit Rate%', 'ATK', 'Penetration'],
    recommendedSets: [
      {
        name: 'Beth 4-piece + Alpha 2-piece',
        englishName: 'Beth 4-piece + Alpha 2-piece',
        mainRune: 'Beth',
        secondaryRune: 'Alpha',
        mainRune2Piece: '2-piece: Crit Rate +6%',
        mainRune4Piece: '4-piece: When HP >80%: Critical Hit Damage +24%',
        secondaryRuneEffect: '2-piece: Attack Power +8%',
      },
    ],
    alternativeSets: [
      {
        name: 'Beth 4-piece + Epsilon 2-piece',
        englishName: 'Beth 4-piece + Epsilon 2-piece',
        mainRune: 'Beth',
        secondaryRune: 'Epsilon',
        mainRune2Piece: '2-piece: Crit Rate +6%',
        mainRune4Piece: '4-piece: When HP >80%: Critical Hit Damage +24%',
        secondaryRuneEffect: '2-piece: Attack Power +8%',
      },
    ],
    buildNote:
      'Beth 4-piece is essential for crit damage scaling. Hiyori gets 114% bonus Crit Rate from her ultimate, so you can focus heavily on Crit DMG substats.',
  },
  mainStatsByPosition: {
    1: {
      name: 'Position 1 — Fixed Main Stat',
      stat: 'HP (Flat Value)',
      description: 'Always HP - no other options',
      isFixed: true,
    },
    2: {
      name: 'Position 2 — Fixed Main Stat',
      stat: 'Attack (Flat Value)',
      description: 'Always Attack - no other options',
      isFixed: true,
    },
    3: {
      name: 'Position 3 — Fixed Main Stat',
      stat: 'Defense (Flat Value)',
      description: 'Always Defense - no other options',
      isFixed: true,
    },
    4: {
      name: 'Position 4 — Variable Main Stats',
      recommendedStat: 'Critical Damage (%)',
      availableStats: [
        'Healing Effectiveness (%)',
        'Critical Rate (%)',
        'Critical Damage (%)',
        'Attack Penetration (%)',
        'Attack (%)',
        'HP (%)',
        'Defense (%)',
      ],
      description: 'Crit Damage % for maximum burst potential with ultimate',
    },
    5: {
      name: 'Position 5 — Variable Main Stats',
      recommendedStat: 'Chaos Attribute Damage (%)',
      availableStats: [
        'Chaos Attribute Damage (%)',
        'Fire Attribute Damage (%)',
        'Ice Attribute Damage (%)',
        'Holy Attribute Damage (%)',
        'Attack (%)',
        'HP (%)',
        'Defense (%)',
      ],
      description: 'Chaos Attribute Damage % for Chaos element scaling',
    },
    6: {
      name: 'Position 6 — Variable Main Stats',
      recommendedStat: 'Attack (%)',
      availableStats: ['Attack (%)', 'HP (%)', 'Defense (%)'],
      description: 'Attack % for maximum damage scaling on her 1060% ATK ultimate',
    },
  },
  awakenings: {
    keyMilestones: [
      {
        level: 1,
        effect: 'When using Ultimate, ignore 74% of the target\'s DEF',
        importance: 1,
        importanceLabel: 'Very Good',
      },
      {
        level: 2,
        effect: 'DMG dealt to enemies with current HP below 15% is increased by 70%',
        importance: 2,
        importanceLabel: 'Good',
      },
      {
        level: 3,
        effect: '[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2',
        importance: 3,
        importanceLabel: 'Mid',
      },
      {
        level: 4,
        effect: 'ATK +50%',
        importance: 1,
        importanceLabel: 'Very Good',
      },
      {
        level: 5,
        effect: '[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2',
        importance: 3,
        importanceLabel: 'Mid',
      },
      {
        level: 6,
        effect:
          '[Shield Burst] Chaos DMG multiplier is increased by 50%. Additionally, all attacks ignore an extra 40% of the target\'s Chaos Resistance.',
        importance: 1,
        importanceLabel: 'Very Good',
      },
    ],
  },
  teamSkill: {
    name: 'Combo',
    activationCondition: '2 [Monochrome Realm] characters or 2 [Chaos] characters',
    effects: [
      'ATK increases by 10%',
      'At the start of battle, for every 500 ATK, own Ultimate DMG increases by 5%, up to 6 times (max 30%)',
    ],
  },
  teamSynergy: {
    goodWith: [
      'Gaia',
      'Pride-Lucifer',
      'Other Chaos characters',
      'Morgan Le Fay',
      'Gluttony - Beelzebub',
    ],
    note: 'Hiyori is squishy so she needs to either survive long enough to ult or get her ult out super fast. Gaia is the best partner -- her passive gives the lowest DEF ally (Hiyori) 60% bonus HP and a revive on lethal damage, which means Hiyori gets a second chance to pop her ult. Running Lucifer on the same team gives her extra shield protection and activates the Chaos team skill. For energy, Morgan Le Fay or Gluttony-Beelzebub help charge her ult faster so she can blow up before dying. The idea is: protect Hiyori -> charge ult fast -> blow up the enemy shields -> win.',
  },
};
