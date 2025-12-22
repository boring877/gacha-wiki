// Skill Formulas and Stat Explanations for Busty Burst
// Reference guide for understanding skill calculations

export const SKILL_FORMULAS = {
  damage: {
    title: 'Damage Formula',
    description: 'How skill damage is calculated',
    formula: 'Skill Raw Damage = (ATK × Scale%) + Base + (Growth × Level)',
    code: '[X% ATK + Base (+Growth/lv)]',
    example: {
      text: 'Example: [350% ATK + 150 (+20/lv)] at Level 50 with 1000 ATK',
      calculation: 'Raw Damage = (1000 × 3.5) + 150 + (20 × 50) = 4,650',
    },
    notes: [
      'Final Damage = Raw Damage reduced by target DEF (exact formula unknown)',
      'Critical Hit = Final Damage × Crit Multiplier',
      'Physical damage uses ATK stat, reduced by Physical DEF',
      'Magic damage uses MATK stat, reduced by Magic DEF',
    ],
  },
  healing: {
    title: 'Healing Formula',
    description: 'How healing skills are calculated',
    formula: 'Heal = (Healing Power × Scale) + Base + (Growth × Level)',
    code: '(Healing Power × X) + Base (+Growth/lv)',
    example: {
      text: 'Example: [(Healing Power × 20) + 370 (+40/lv)] at Level 50 with 500 Healing Power',
      calculation: 'Heal = (500 × 20) + 370 + (40 × 50) = 12,370',
    },
    notes: [
      'Healing Power is a character stat that varies by character',
      'Some healers also scale with ATK or other stats',
      'Healing Amount +X% buffs multiply the final heal value',
    ],
  },
  buff: {
    title: 'Buff/Debuff Formula',
    description: 'How buff and debuff values scale with level',
    formula: 'Final Value = Base + (Growth × Character Level)',
    examples: [
      { stat: 'Physical/Magic ATK', format: '+X% +Y (grow: +Z)', result: '+X% + (Y + Z×Lv)' },
      { stat: 'Physical/Magic DEF', format: '+X% +Y (grow: +Z)', result: '+X% + (Y + Z×Lv)' },
      { stat: 'Accuracy/Block', format: '+Y (grow: +Z)', result: '+(Y + Z×Lv)' },
      { stat: 'Action Speed', format: '+X%', result: '+X% (no level scaling)' },
      { stat: 'Crit Damage', format: '+Y (grow: +Z)', result: '+(Y + Z×Lv)' },
    ],
    notes: [
      "Percentage buffs (+X%) are usually fixed and don't scale",
      'Flat bonuses (+Y) typically have growth values',
      'Duration is fixed and does not scale with level',
    ],
  },
};

export const STAT_CATEGORIES = [
  {
    category: 'Critical Stats',
    stats: [
      {
        name: 'Physical Critical',
        description: 'Base stat that affects critical physical damage chance and multiplier',
        note: 'Varies per character: 22-391',
      },
      {
        name: 'Magic Critical',
        description: 'Base stat that affects critical magical damage chance and multiplier',
        note: 'Varies per character: 22-234',
      },
      {
        name: 'Crit Damage +X',
        description: 'Adds flat bonus to critical damage multiplier',
        note: 'Stacks with base Physical/Magic Critical',
      },
    ],
  },
  {
    category: 'Accuracy & Evasion',
    stats: [
      {
        name: 'Accuracy',
        description: 'Increases chance to land attacks on enemies',
        note: 'Counters enemy Block stat',
      },
      {
        name: 'Block',
        description: 'Chance to completely avoid incoming attacks',
        note: 'Countered by enemy Accuracy stat',
      },
    ],
  },
  {
    category: 'Speed & Action',
    stats: [
      {
        name: 'Action Speed +X%+Y',
        description: 'Increases attack and skill execution speed',
        note: '+X% is percentage bonus, +Y is flat bonus',
      },
    ],
  },
  {
    category: 'Defensive Stats',
    stats: [
      {
        name: 'Shield -X% (N hits)',
        description: 'Absorbs damage, reducing it by X% for a set number of hits',
        note: 'Shield breaks after N hits are absorbed',
      },
      {
        name: 'Debuff Resistance +X%',
        description: 'Reduces the chance of being affected by enemy debuffs',
        note: 'Higher resistance = more likely to resist debuffs',
      },
    ],
  },
  {
    category: 'Healing Stats',
    stats: [
      {
        name: 'Healing Power',
        description: 'Base stat that determines healing skill effectiveness',
        note: 'Used in healing formula as multiplier',
      },
      {
        name: 'Healing Amount +X%',
        description: 'Increases all healing output by X%',
        note: 'For characters that heal others',
      },
      {
        name: 'Healing Received +X%',
        description: 'Increases healing received from all sources by X%',
        note: 'Applied to the target being healed',
      },
    ],
  },
  {
    category: 'Damage Stats',
    stats: [
      {
        name: 'Skill Damage +X%',
        description: 'Increases damage dealt by Action Skills 1 and 2',
        note: 'Does not affect basic attacks',
      },
      {
        name: 'Ultimate Damage +X%',
        description: 'Increases damage dealt by Ultimate skill only',
        note: 'Stacks with other damage bonuses',
      },
    ],
  },
  {
    category: 'Elemental Stats',
    stats: [
      {
        name: 'Type ATK +X%',
        description: 'Increases damage dealt to a specific element',
        note: 'Example: Fire ATK +X% increases damage vs Fire enemies',
      },
      {
        name: 'Type DEF -X%',
        description: "Reduces target's resistance to that element",
        note: 'Debuff that makes enemies take more elemental damage',
      },
    ],
  },
];

// Helper to get all stats as flat array
export const getAllStats = () => {
  return STAT_CATEGORIES.flatMap(cat => cat.stats);
};
