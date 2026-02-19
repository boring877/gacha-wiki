// Suffocating Grace Memory Data - Zone Nova
// Associated with Wrath-Samael character - Tank class only

export const suffocatingGraceData = {
  // Basic Information
  name: 'Suffocating Grace',
  image: '/images/games/zone-nova/memories/Wrath_Samaelcard.jpg',
  character: 'Wrath-Samael',
  rarity: 'SSR',
  class: 'Guardian', // Tank class only
  restriction: 'This memory card is restricted to Tank class characters only',

  // Stats
  stats: {
    hp: 6800,
    attack: 480,
    defense: 890,
  },

  // Memory Effects
  effects: [
    'Defense +64%',
    'After successfully parry, Damage Taken is reduced by 10% for 5 seconds',
    'The wearer gains [Stigma] (max 400 stacks), lasting 3 seconds',
    'Every 40 stacks of [Stigma] increases All Resistances by 5%',
  ],

  // Character Synergy
  synergy: {
    character: 'Wrath-Samael',
    description:
      "Suffocating Grace perfectly complements Wrath-Samael's tank role with massive defense scaling (+64%) that synergizes with his defense-based shield generation and damage calculations. The parry-based damage reduction works alongside his Neutralize mechanics for layered damage mitigation. The [Stigma] stack system provides up to +50% All Resistances (400 stacks / 40 per 5% bonus), making Samael increasingly tanky as he absorbs attacks. This memory transforms Samael into an exceptionally durable frontline tank who can protect his team while building resistance stacks.",
  },
};

// SEO Data
export const suffocatingGraceSEO = {
  title: 'Suffocating Grace - Wrath-Samael Memory Card | Zone Nova',
  description:
    'Complete guide for Suffocating Grace memory card in Zone Nova. Learn about its defense scaling, parry mechanics, Stigma stack system, and tank optimization with Wrath-Samael.',
};
