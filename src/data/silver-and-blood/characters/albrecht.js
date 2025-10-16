import { baseStats } from '../base-stats.js';

export const albrecht = {
  id: 'albrecht',
  name: 'Albrecht',
  title: 'Crystal Sage',
  subtitle: '',
  description:
    'A powerful SSR enchanter from the Church faction who specializes in healing and debuff abilities through Silver Mist mechanics.',
  image: 'albrecht',
  tags: ['Ranged', 'Debuff', 'Healing'],

  // Game Mechanics
  rarity: 'SSR',
  class: 'Enchanter',
  faction: 'Church',
  equipmentType: 'Heavy',
  moonPhase: 'New Moon',
  attackType: 'M.DMG',

  // Base Stats (fetched from shared map)
  stats: baseStats['albrecht'],

  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Ground Water',
      type: 'Normal Attack',
      description: 'Deals 187.0% ATK (M. DMG) to the target.',
    },
    {
      name: "Wizard's Tincture",
      type: 'Special',
      description:
        'Activates once every 3 Basic ATK(s). Heals the ally with the lowest HP for 600.0% ATK and expands the range of Silver Mist once, up to 3 times maximum.',
    },
    {
      name: 'Osmosis',
      type: 'Passive',
      description:
        "When the battle begins, Albrecht generates the Silver Mist and stays in it. Allied units within the Silver Mist gain Healing equal to 2.0% of Albrecht's Max HP once every 2 sec.",
    },
    {
      name: 'Primary Elements',
      type: 'Ultimate',
      cost: 3,
      description:
        "Gathers Silver Mist toward a select location, healing allied units in range for 750.0% of Albrecht's ATK and granting Reinvigorate for 8 sec. Applies All DMG Taken Up (Moderate) and HP Recovery Down (Major) to enemies in range for 16 sec. The range of Primary Elements increases with the range of Silver Mist. If Silver Mist has expanded to maximum range, additionally inflicts HP Block on affected units for 8 sec. Silver Mist regenerates after the Ultimate ends.",
      effects: [
        {
          name: 'Reinvigorate',
          description: "Receives Healing equal to 5.0% of Albrecht's Max HP once every 2 sec.",
        },
        {
          name: 'All DMG Taken Up (Moderate)',
          description: 'All DMG Taken +30.0%. Does not stack with effects of the same type.',
        },
        {
          name: 'HP Recovery Down (Major)',
          description: 'HP Recovery -50.0%. Does not stack with effects of the same type.',
        },
        {
          name: 'Anti-Healing',
          description: 'HP cannot be restored.',
        },
      ],
    },
  ],

  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect:
      'New Moon: All DMG Bonus +20%, Enhanced magical healing and debuff application through Silver Mist.',
    attackTypeInfo:
      'M.DMG: Magical damage through crystal magic and Silver Mist. Reduced by M.DEF. Enhanced by healing synergies.',
    equipmentNote:
      'Heavy Equipment: Balanced gear providing durability and magical power, ideal for supportive battlefield presence.',
  },
};
