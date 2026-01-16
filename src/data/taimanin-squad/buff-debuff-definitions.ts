// Taimanin Squad Buff/Debuff Definitions
// Maps buff/debuff type names to user-friendly explanations

export interface BuffDebuffDef {
  name: string;
  type: 'buff' | 'debuff';
  description: string;
  icon?: string;
}

// Buff definitions
export const buffDefinitions: Record<string, BuffDebuffDef> = {
  // Stat Buffs
  'ATK Up': {
    name: 'ATK Up',
    type: 'buff',
    description: 'Increases Attack power for the duration'
  },
  'DEF Up': {
    name: 'DEF Up',
    type: 'buff',
    description: 'Increases Defense for the duration'
  },
  'SPD Up': {
    name: 'SPD Up',
    type: 'buff',
    description: 'Increases Speed, affecting turn order and some skill damage'
  },
  'ACC Up': {
    name: 'ACC Up',
    type: 'buff',
    description: 'Increases Accuracy, reducing chance to miss attacks'
  },
  'EVD Up': {
    name: 'EVD Up',
    type: 'buff',
    description: 'Increases Evasion, increasing chance to dodge attacks'
  },
  'CRIT Rate Up': {
    name: 'CRIT Rate Up',
    type: 'buff',
    description: 'Increases Critical Hit Rate'
  },
  'CRIT DMG Up': {
    name: 'CRIT DMG Up',
    type: 'buff',
    description: 'Increases Critical Hit Damage multiplier'
  },

  // Defensive Buffs
  'Shield': {
    name: 'Shield',
    type: 'buff',
    description: 'Creates a barrier that absorbs damage before HP'
  },
  'Shield (DEF)': {
    name: 'Shield (DEF)',
    type: 'buff',
    description: 'Creates a defense-scaling barrier that absorbs damage'
  },
  'Damage Block': {
    name: 'Damage Block',
    type: 'buff',
    description: 'Negates incoming damage completely for a set number of hits'
  },
  'Damage Reflect': {
    name: 'Damage Reflect',
    type: 'buff',
    description: 'Reflects a portion of received damage back to the attacker'
  },
  'Debuff Block': {
    name: 'Debuff Block',
    type: 'buff',
    description: 'Prevents debuffs from being applied'
  },
  'Ally Protection': {
    name: 'Ally Protection',
    type: 'buff',
    description: 'Redirects damage from allies to this unit'
  },

  // Utility Buffs
  'Stealth': {
    name: 'Stealth',
    type: 'buff',
    description: 'Cannot be targeted by single-target attacks'
  },
  'Athanasia': {
    name: 'Athanasia',
    type: 'buff',
    description: 'Survives fatal damage with 1 HP (one time)'
  },
  'Counter Attack': {
    name: 'Counter Attack',
    type: 'buff',
    description: 'Automatically counter-attacks when hit'
  },
  'Strengthen': {
    name: 'Strengthen',
    type: 'buff',
    description: 'Increases overall damage dealt'
  },

  // Healing
  'Heal Over Time': {
    name: 'Heal Over Time',
    type: 'buff',
    description: 'Restores HP at the start of each turn'
  },
  'Turn Gauge': {
    name: 'Turn Gauge',
    type: 'buff',
    description: 'Fills action bar, allowing faster turns'
  }
};

// Debuff definitions
export const debuffDefinitions: Record<string, BuffDebuffDef> = {
  // Stat Debuffs
  'ATK Down': {
    name: 'ATK Down',
    type: 'debuff',
    description: 'Decreases Attack power for the duration'
  },
  'DEF Down': {
    name: 'DEF Down',
    type: 'debuff',
    description: 'Decreases Defense for the duration'
  },
  'SPD Down': {
    name: 'SPD Down',
    type: 'debuff',
    description: 'Decreases Speed, slowing turn order'
  },
  'ACC Down': {
    name: 'ACC Down',
    type: 'debuff',
    description: 'Decreases Accuracy, increasing miss chance'
  },
  'EVD Down': {
    name: 'EVD Down',
    type: 'debuff',
    description: 'Decreases Evasion, making attacks more likely to hit'
  },
  'CRIT Rate Down': {
    name: 'CRIT Rate Down',
    type: 'debuff',
    description: 'Decreases Critical Hit Rate'
  },
  'CRIT DMG Down': {
    name: 'CRIT DMG Down',
    type: 'debuff',
    description: 'Decreases Critical Hit Damage multiplier'
  },
  'CRIT RES Down': {
    name: 'CRIT RES Down',
    type: 'debuff',
    description: 'Decreases Critical Resistance, taking more crits'
  },

  // Damage Over Time
  'Poison': {
    name: 'Poison',
    type: 'debuff',
    description: 'Takes damage at the start of each turn (ignores DEF)'
  },
  'Burn': {
    name: 'Burn',
    type: 'debuff',
    description: 'Takes fire damage at the start of each turn'
  },
  'Bleeding': {
    name: 'Bleeding',
    type: 'debuff',
    description: 'Takes damage at the start of each turn'
  },
  'Electric Shock': {
    name: 'Electric Shock',
    type: 'debuff',
    description: 'Takes lightning damage at the start of each turn'
  },

  // Control Effects
  'Stun': {
    name: 'Stun',
    type: 'debuff',
    description: 'Cannot take any action for the duration'
  },
  'Freeze': {
    name: 'Freeze',
    type: 'debuff',
    description: 'Cannot take any action and takes increased damage'
  },
  'Sleep': {
    name: 'Sleep',
    type: 'debuff',
    description: 'Cannot take any action, wakes up when hit'
  },
  'Confuse': {
    name: 'Confuse',
    type: 'debuff',
    description: 'May attack allies instead of enemies'
  },
  'Restraint': {
    name: 'Restraint',
    type: 'debuff',
    description: 'Cannot move or take certain actions'
  },
  'Provocation': {
    name: 'Provocation',
    type: 'debuff',
    description: 'Forced to attack the provoking unit'
  },

  // Utility Debuffs
  'Heal Reduction': {
    name: 'Heal Reduction',
    type: 'debuff',
    description: 'Reduces healing received'
  },
  'HP Absorption': {
    name: 'HP Absorption',
    type: 'debuff',
    description: 'A portion of HP is drained each turn'
  },
  'Buff Block': {
    name: 'Buff Block',
    type: 'debuff',
    description: 'Prevents buffs from being applied'
  },
  'Active Skill Block': {
    name: 'Active Skill Block',
    type: 'debuff',
    description: 'Cannot use active skills'
  },
  'Passive Skill Block': {
    name: 'Passive Skill Block',
    type: 'debuff',
    description: 'Passive skills are disabled'
  },
  'Weaken': {
    name: 'Weaken',
    type: 'debuff',
    description: 'Reduces overall damage dealt'
  }
};

// Combined lookup
export const allDefinitions: Record<string, BuffDebuffDef> = {
  ...buffDefinitions,
  ...debuffDefinitions
};

// Search terms to match in skill descriptions (maps display text to definition key)
export const searchTerms: Record<string, string> = {
  // Buffs
  'ATK Up': 'ATK Up',
  'Attack Up': 'ATK Up',
  'DEF Up': 'DEF Up',
  'Defense Up': 'DEF Up',
  'SPD Up': 'SPD Up',
  'Speed Up': 'SPD Up',
  'ACC Up': 'ACC Up',
  'Accuracy Up': 'ACC Up',
  'EVD Up': 'EVD Up',
  'Evasion Up': 'EVD Up',
  'CRIT Rate': 'CRIT Rate Up',
  'CRIT DMG': 'CRIT DMG Up',
  'Critical Rate': 'CRIT Rate Up',
  'Critical Damage': 'CRIT DMG Up',
  'Shield': 'Shield',
  'Stealth': 'Stealth',
  'Counter': 'Counter Attack',
  'Athanasia': 'Athanasia',
  'Damage Block': 'Damage Block',
  'Damage Reflect': 'Damage Reflect',
  'Debuff Block': 'Debuff Block',
  'Turn Gauge': 'Turn Gauge',
  'Strengthen': 'Strengthen',

  // Debuffs
  'ATK Down': 'ATK Down',
  'Attack Down': 'ATK Down',
  'DEF Down': 'DEF Down',
  'Defense Down': 'DEF Down',
  'SPD Down': 'SPD Down',
  'Speed Down': 'SPD Down',
  'ACC Down': 'ACC Down',
  'Accuracy Down': 'ACC Down',
  'EVD Down': 'EVD Down',
  'Evasion Down': 'EVD Down',
  'CRIT Rate Down': 'CRIT Rate Down',
  'CRIT DMG Down': 'CRIT DMG Down',
  'CRIT RES Down': 'CRIT RES Down',
  'Poison': 'Poison',
  'Burn': 'Burn',
  'Bleeding': 'Bleeding',
  'Electric Shock': 'Electric Shock',
  'Stun': 'Stun',
  'Freeze': 'Freeze',
  'Sleep': 'Sleep',
  'Confuse': 'Confuse',
  'Restraint/Immobilize': 'Restraint',
  'Restraint': 'Restraint',
  'Restrain': 'Restraint',
  'Immobilize': 'Restraint',
  'Immobilized': 'Restraint',
  'Provocation': 'Provocation',
  'Heal Reduction': 'Heal Reduction',
  'HP Absorption': 'HP Absorption',
  'Buff Block': 'Buff Block',
  'Active Skill Block': 'Active Skill Block',
  'Passive Skill Block': 'Passive Skill Block',
  'Weaken': 'Weaken'
};
