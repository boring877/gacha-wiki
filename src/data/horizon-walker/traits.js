// Horizon Walker General Traits Data - Organized by Functional Categories
export const hwTraits = {
  // HP & Vitality Traits
  'Health & Vitality': [
    {
      name: 'Resilient',
      effects: ['Max HP: +3%'],
    },
    {
      name: 'Stubborn',
      effects: ['Max HP: +4%'],
    },
    {
      name: 'Sturdy',
      effects: ['Max HP: +5%'],
    },
    {
      name: 'Righteous',
      effects: ['Melee ATK: +2%', 'Ranged ATK: +2%', 'Magic ATK: +2%', 'Max HP: +2%'],
    },
  ],

  // HP Penalty Traits
  'HP Penalties': [
    {
      name: 'Berserking',
      effects: ['SPD: +6%', 'Max HP: -4%'],
    },
    {
      name: 'Ferocious',
      effects: ['Melee ATK: +7%', 'Max HP: -5%'],
    },
    {
      name: 'Overworked',
      effects: ['AP Recovery: +4%', 'Max HP: -5%'],
    },
    {
      name: 'Doom',
      effects: ['Crit DMG: +12%', 'Max HP: -3%'],
    },
    {
      name: 'Gaunt',
      effects: ['Evade: +4%', 'Max HP: -3%'],
    },
    {
      name: 'Uncanny',
      effects: ['Magic ATK: +4%', 'Max HP: -3%'],
    },
    {
      name: 'Pitiful',
      effects: [
        'Heat DEF: +30',
        'Cold DEF: +30',
        'Electric DEF: +30',
        'Poison DEF: +30',
        'Immaterial DEF: +30',
        'Max HP: -3%',
      ],
    },
    {
      name: 'Weak',
      effects: ['Aggro Adjustment: -15', 'Max HP: -3%'],
    },
  ],

  // Melee Attack Traits
  'Melee Attack': [
    {
      name: 'Aggressive',
      effects: ['Melee ATK: +5%', 'Accuracy: -5%'],
    },
    {
      name: 'Powerful',
      effects: ['Melee ATK: +4%'],
    },
    {
      name: 'Strong',
      effects: ['Melee ATK: +3%'],
    },
    {
      name: 'Muscular',
      effects: ['Slash DEF: +30', 'Pierce DEF: +30', 'Crush DEF: +30', 'Melee ATK: +2%'],
    },
    {
      name: 'Ferocious',
      effects: ['Melee ATK: +7%', 'Max HP: -5%'],
    },
    {
      name: 'Radical',
      effects: ['Melee ATK: +3%', 'Ranged ATK: +3%', 'Magic ATK: +3%', 'Aggro Adjustment: +15'],
    },
    {
      name: 'Righteous',
      effects: ['Melee ATK: +2%', 'Ranged ATK: +2%', 'Magic ATK: +2%', 'Max HP: +2%'],
    },
  ],

  // Ranged Attack Traits
  'Ranged Attack': [
    {
      name: 'Barraging',
      effects: ['Ranged ATK: +5%', 'Accuracy: -2%'],
    },
    {
      name: 'Technical',
      effects: ['Ranged ATK: +3%'],
    },
    {
      name: 'Professional',
      effects: ['Ranged ATK: +2%', 'Accuracy: +3%'],
    },
    {
      name: 'Radical',
      effects: ['Melee ATK: +3%', 'Ranged ATK: +3%', 'Magic ATK: +3%', 'Aggro Adjustment: +15'],
    },
    {
      name: 'Righteous',
      effects: ['Melee ATK: +2%', 'Ranged ATK: +2%', 'Magic ATK: +2%', 'Max HP: +2%'],
    },
  ],

  // Magic Attack Traits
  'Magic Attack': [
    {
      name: 'Bookish',
      effects: ['Magic ATK: +3%', 'SPD: -2%'],
    },
    {
      name: 'Bright',
      effects: ['Magic ATK: +4%'],
    },
    {
      name: 'Intelligent',
      effects: ['Magic ATK: +3%'],
    },
    {
      name: 'Mysterious',
      effects: ['Magic ATK: +5%'],
    },
    {
      name: 'Rational',
      effects: ['Crit Rate: -2%', 'Magic ATK: +6%'],
    },
    {
      name: 'Uncanny',
      effects: ['Magic ATK: +4%', 'Max HP: -3%'],
    },
    {
      name: 'Radical',
      effects: ['Melee ATK: +3%', 'Ranged ATK: +3%', 'Magic ATK: +3%', 'Aggro Adjustment: +15'],
    },
    {
      name: 'Righteous',
      effects: ['Melee ATK: +2%', 'Ranged ATK: +2%', 'Magic ATK: +2%', 'Max HP: +2%'],
    },
  ],

  // Speed Traits
  Speed: [
    {
      name: 'Dashing',
      effects: ['SPD: +4%'],
    },
    {
      name: 'Swift',
      effects: ['SPD: +3%'],
    },
    {
      name: 'Berserking',
      effects: ['SPD: +6%', 'Max HP: -4%'],
    },
    {
      name: 'Rampaging',
      effects: ['SPD: +5%', 'Accuracy: -2%'],
    },
  ],

  // Accuracy Traits
  Accuracy: [
    {
      name: 'Accurate',
      effects: ['Accuracy: +4%'],
    },
    {
      name: 'Precise',
      effects: ['Accuracy: +5%'],
    },
    {
      name: 'Meticulous',
      effects: ['Starting AP: 3', 'Accuracy: +3%'],
    },
    {
      name: 'Paranoid',
      effects: ['Immaterial DEF: -100', 'Accuracy: +7%'],
    },
    {
      name: 'Professional',
      effects: ['Ranged ATK: +2%', 'Accuracy: +3%'],
    },
    {
      name: 'Sensitive',
      effects: ['Slash DEF: -30', 'Pierce DEF: -30', 'Crush DEF: -30', 'Accuracy: +7%'],
    },
    {
      name: 'Aggressive',
      effects: ['Melee ATK: +5%', 'Accuracy: -5%'],
    },
    {
      name: 'Barraging',
      effects: ['Ranged ATK: +5%', 'Accuracy: -2%'],
    },
    {
      name: 'Rampaging',
      effects: ['SPD: +5%', 'Accuracy: -2%'],
    },
  ],

  // Critical Traits
  Critical: [
    {
      name: 'Fortunate',
      effects: ['Crit Rate: +4%'],
    },
    {
      name: 'Lucky',
      effects: ['Crit Rate: +3%'],
    },
    {
      name: 'Heaven-sent',
      effects: ['Crit Rate: +5%'],
    },
    {
      name: 'Desperate',
      effects: ['Crit Rate: -5%', 'Crit DMG: +15%'],
    },
    {
      name: 'Doom',
      effects: ['Crit DMG: +12%', 'Max HP: -3%'],
    },
    {
      name: 'Rational',
      effects: ['Crit Rate: -2%', 'Magic ATK: +6%'],
    },
    {
      name: 'Peaceful',
      effects: ['Heat DEF: +40', 'Cold DEF: +40', 'Electric DEF: +40', 'Crit DMG: -10%'],
    },
  ],

  // Evasion Traits
  Evasion: [
    {
      name: 'Agile',
      effects: ['Evade: +5%'],
    },
    {
      name: 'Alert',
      effects: ['Evade: +4%'],
    },
    {
      name: 'Gaunt',
      effects: ['Evade: +4%', 'Max HP: -3%'],
    },
    {
      name: 'Nimble',
      effects: ['Evade: +3%'],
    },
    {
      name: 'Noble',
      effects: ['Slash DEF: +10', 'Pierce DEF: +10', 'Crush DEF: +10', 'Evade: +3%'],
    },
    {
      name: 'Charming',
      effects: ['Aggro Adjustment: +10', 'Evade: +3%'],
    },
    {
      name: 'Arrogant',
      effects: ['Knockback Resistance: +10', 'Evade: +5%'],
    },
  ],

  // Defense Traits
  Defense: [
    {
      name: 'Defensive',
      effects: ['Slash DEF: +30', 'Pierce DEF: +30', 'Crush DEF: +30'],
    },
    {
      name: 'Durable',
      effects: ['Slash DEF: +20', 'Pierce DEF: +20', 'Crush DEF: +20'],
    },
    {
      name: 'Safe',
      effects: ['Slash DEF: +20', 'Pierce DEF: +20', 'Crush DEF: +20', 'Aggro Adjustment: -5'],
    },
    {
      name: 'Muscular',
      effects: ['Slash DEF: +30', 'Pierce DEF: +30', 'Crush DEF: +30', 'Melee ATK: +2%'],
    },
    {
      name: 'Noble',
      effects: ['Slash DEF: +10', 'Pierce DEF: +10', 'Crush DEF: +10', 'Evade: +3%'],
    },
  ],

  // Specialized Defense Traits
  'Specialized Defense': [
    {
      name: 'Chainmail',
      effects: ['Slash DEF: +50'],
    },
    {
      name: 'Bulletproof',
      effects: ['Pierce DEF: +50'],
    },
    {
      name: 'Repelling',
      effects: ['Crush DEF: +50'],
    },
    {
      name: 'Toxin Resistant',
      effects: ['Poison DEF: +50'],
    },
    {
      name: 'Heat Resistant',
      effects: ['Heat DEF: +50'],
    },
    {
      name: 'Cold Resistant',
      effects: ['Cold DEF: +50'],
    },
    {
      name: 'Insulating',
      effects: ['Electric DEF: +50'],
    },
    {
      name: 'Faithful',
      effects: ['Poison DEF: +40', 'Immaterial DEF: +40'],
    },
    {
      name: 'Strong-Willed',
      effects: ['Immaterial DEF: +40', 'Knockback Resistance: +5'],
    },
  ],

  // Elemental Defense Traits
  'Elemental Defense': [
    {
      name: 'Peaceful',
      effects: ['Heat DEF: +40', 'Cold DEF: +40', 'Electric DEF: +40', 'Crit DMG: -10%'],
    },
    {
      name: 'Pitiful',
      effects: [
        'Heat DEF: +30',
        'Cold DEF: +30',
        'Electric DEF: +30',
        'Poison DEF: +30',
        'Immaterial DEF: +30',
        'Max HP: -3%',
      ],
    },
    {
      name: 'Urgent',
      effects: [
        'Heat DEF: +20',
        'Cold DEF: +20',
        'Electric DEF: +20',
        'Poison DEF: +20',
        'Immaterial DEF: +20',
      ],
    },
  ],

  // Attack Boost Traits
  'Attack Boosts': [
    {
      name: 'Acute',
      effects: ['Slash Boost: +8%'],
    },
    {
      name: 'Sharp',
      effects: ['Slash Boost: +6%'],
    },
    {
      name: 'Determined',
      effects: ['Slash Boost: +2%', 'Pierce Boost: +2%', 'Crush Boost: +2%'],
    },
    {
      name: 'Masterful',
      effects: ['Slash Boost: +4%', 'Pierce Boost: +4%', 'Crush Boost: +4%'],
    },
    {
      name: 'Renowned',
      effects: ['Slash Boost: +3%', 'Pierce Boost: +3%', 'Crush Boost: +3%'],
    },
    {
      name: 'Penetrating',
      effects: ['Pierce Boost: +8%'],
    },
    {
      name: 'Piercing',
      effects: ['Pierce Boost: +6%'],
    },
    {
      name: 'Heavy',
      effects: ['Crush Boost: +6%'],
    },
    {
      name: 'Sieging',
      effects: ['Crush Boost: +8%'],
    },
  ],

  // Elemental Boost Traits
  'Elemental Boosts': [
    {
      name: 'Blazing',
      effects: ['Heat Boost: +8%'],
    },
    {
      name: 'Scorching',
      effects: ['Heat Boost: +6%'],
    },
    {
      name: 'Cold',
      effects: ['Cold Boost: +6%'],
    },
    {
      name: 'Frozen',
      effects: ['Cold Boost: +8%'],
    },
    {
      name: 'Thunderous',
      effects: ['Electric Boost: +8%'],
    },
    {
      name: 'Tingling',
      effects: ['Electric Boost: +6%'],
    },
    {
      name: 'Harsh',
      effects: ['Poison Boost: +6%'],
    },
    {
      name: 'Venomous',
      effects: ['Poison Boost: +8%'],
    },
    {
      name: 'Evil',
      effects: ['Immaterial Boost: +8%'],
    },
    {
      name: 'Strange',
      effects: ['Immaterial Boost: +6%'],
    },
    {
      name: 'Ancient',
      effects: ['Poison Boost: +4%', 'Immaterial Boost: +4%'],
    },
  ],

  // Multi-Elemental Traits
  'Multi-Elemental': [
    {
      name: 'Magical',
      effects: [
        'Heat Boost: +3%',
        'Cold Boost: +3%',
        'Electric Boost: +3%',
        'Poison Boost: +3%',
        'Immaterial Boost: +3%',
      ],
    },
    {
      name: 'Natural',
      effects: ['Heat Boost: +4%', 'Cold Boost: +4%', 'Electric Boost: +4%'],
    },
    {
      name: 'Enlightened',
      effects: ['Enhance Elemental: +5%'],
    },
  ],

  // AP & Starting Traits
  'AP & Starting': [
    {
      name: 'Methodical',
      effects: ['Starting AP: 10', 'AP Recovery: -3%'],
    },
    {
      name: 'Prophetic',
      effects: ['Starting AP: 5'],
    },
    {
      name: 'Foreseeing',
      effects: ['Starting AP: 4'],
    },
    {
      name: 'Strict',
      effects: ['Starting AP: 4', 'Knockback Resistance: -5'],
    },
    {
      name: 'Prepared',
      effects: ['Starting AP: 3'],
    },
    {
      name: 'Meticulous',
      effects: ['Starting AP: 3', 'Accuracy: +3%'],
    },
    {
      name: 'Persistent',
      effects: ['Starting AP: -5', 'AP Recovery: +4%'],
    },
    {
      name: 'Improvising',
      effects: ['Starting AP: -3', 'AP Recovery: +3%'],
    },
  ],

  // AP Recovery Traits
  'AP Recovery': [
    {
      name: 'Overworked',
      effects: ['AP Recovery: +4%', 'Max HP: -5%'],
    },
    {
      name: 'Persistent',
      effects: ['Starting AP: -5', 'AP Recovery: +4%'],
    },
    {
      name: 'Improvising',
      effects: ['Starting AP: -3', 'AP Recovery: +3%'],
    },
    {
      name: 'Efficient',
      effects: ['Immaterial DEF: -50', 'AP Recovery: +3%'],
    },
    {
      name: 'Competent',
      effects: ['AP Recovery: +2%'],
    },
    {
      name: 'Useful',
      effects: ['AP Recovery: +1%'],
    },
    {
      name: 'Methodical',
      effects: ['Starting AP: 10', 'AP Recovery: -3%'],
    },
  ],

  // Aggro Management Traits
  'Aggro Management': [
    {
      name: 'Radical',
      effects: ['Melee ATK: +3%', 'Ranged ATK: +3%', 'Magic ATK: +3%', 'Aggro Adjustment: +15'],
    },
    {
      name: 'Prominent',
      effects: ['Aggro Adjustment: +10'],
    },
    {
      name: 'Charming',
      effects: ['Aggro Adjustment: +10', 'Evade: +3%'],
    },
    {
      name: 'Noticeable',
      effects: ['Aggro Adjustment: +6'],
    },
    {
      name: 'Weak',
      effects: ['Aggro Adjustment: -15', 'Max HP: -3%'],
    },
    {
      name: 'Blurry',
      effects: ['Aggro Adjustment: -10'],
    },
    {
      name: 'Hidden',
      effects: ['Aggro Adjustment: -6'],
    },
    {
      name: 'Safe',
      effects: ['Slash DEF: +20', 'Pierce DEF: +20', 'Crush DEF: +20', 'Aggro Adjustment: -5'],
    },
  ],

  // Knockback Resistance Traits
  'Knockback Resistance': [
    {
      name: 'Based',
      effects: ['Knockback Resistance: +20'],
    },
    {
      name: 'Arrogant',
      effects: ['Knockback Resistance: +10', 'Evade: +5%'],
    },
    {
      name: 'Unyielding',
      effects: ['Knockback Resistance: +10'],
    },
    {
      name: 'Strong-Willed',
      effects: ['Immaterial DEF: +40', 'Knockback Resistance: +5'],
    },
    {
      name: 'Slippery',
      effects: ['Knockback Resistance: -20'],
    },
    {
      name: 'Principled',
      effects: ['Knockback Resistance: -10'],
    },
    {
      name: 'Strict',
      effects: ['Starting AP: 4', 'Knockback Resistance: -5'],
    },
  ],

  // Special Defense Traits
  'Special Defense': [
    {
      name: 'Sensitive',
      effects: ['Slash DEF: -30', 'Pierce DEF: -30', 'Crush DEF: -30', 'Accuracy: +7%'],
    },
    {
      name: 'Efficient',
      effects: ['Immaterial DEF: -50', 'AP Recovery: +3%'],
    },
    {
      name: 'Paranoid',
      effects: ['Immaterial DEF: -100', 'Accuracy: +7%'],
    },
  ],
};

// Calculate unique trait count (removing duplicates across categories)
const uniqueTraitNames = new Set();
Object.values(hwTraits).forEach(categoryTraits => {
  categoryTraits.forEach(trait => {
    uniqueTraitNames.add(trait.name);
  });
});

export const totalTraits = uniqueTraitNames.size; // 98 unique traits
export const totalCategorizedEntries = Object.values(hwTraits).reduce(
  (sum, category) => sum + category.length,
  0
);
