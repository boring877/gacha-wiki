import { baseStats } from '../base-stats.js';

export const lorelei = {
  id: 'lorelei',
  name: 'Lorelei',
  title: 'The Callous Sage',
  subtitle: '',
  description:
    'An SSR-ranked assassin vassal that excels at control and single-target elimination through sleep mechanics and form transformation.',
  image: '/images/games/silver-and-blood/characters/Lorelei.jpg',
  tags: ['Single-Target DMG', 'Control', 'Teleport'],

  // Game Mechanics
  rarity: 'SSR',
  class: 'Assassin',
  faction: 'Kingdom',
  equipmentType: 'Light',
  moonPhase: 'Crescent Moon',
  attackType: 'M.DMG',

  // Base Stats (fetched from shared map)
  stats: baseStats['lorelei'],

  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Dark Melody',
      type: 'Normal Attack',
      description:
        "Base Form: Deals 90.0% ATK (M. DMG) to enemies in a rectangular area ahead and applies 1 stack of Siren's Song.\n\nSiren Form: Swings her Scythe, dealing 525.0% ATK (M. DMG) to the target.\n\nSiren's Song: Cannot be purified. Permanent effect. When reaching 4 stacks, effect disappears, inflicting Sleep on the carrier for 5 sec.\n\nSleep: Control Strong. The carrier is unable to cast Ultimate, Specials, Basic ATK, or move during the effect. Effect is removed after Carrier takes DMG equal to 25.0% Max HP.",
    },
    {
      name: 'Sweetest Slumber',
      type: 'Special',
      description:
        "Base Form: Triggers when Lorelei applies Sleep to enemies. Deals 450.0% ATK (M. DMG) to a random awake enemy, applying 1 stack of Siren's Song.\n\nSiren Form: Triggers when Lorelei switches her target (except when using Ultimate). Teleports behind a random Sleeping enemy and set them as the target, dealing 525.0% ATK (M. DMG). If no Sleeping enemies, targets the enemy with the lowest HP Percentage instead.\n\nSiren's Song: Cannot be purified. Permanent effect. When reaching 4 stacks, effect disappears, inflicting Sleep on the carrier for 5 sec.\n\nSleep: Control Strong. The carrier is unable to cast Ultimate, Specials, Basic ATK, or move during the effect. Effect is removed after Carrier takes DMG equal to 25.0% Max HP.",
    },
    {
      name: 'Soul Devourer',
      type: 'Passive',
      description:
        "In Siren Form, Lorelei deals 50.0% increased DMG to Sleeping enemies, ignoring 30.0% of their M. DEF, and immune to Sleep. DMG dealt during this time won't wake Sleeping units.",
    },
    {
      name: "Shadow's Descent",
      type: 'Ultimate',
      cost: 4,
      description:
        "Lorelei transforms into her Siren Form, releasing mist for 11 sec, and Sleeping enemies won't wake up during this time. Then Lorelei Teleports behind the selected target, inflicting Sleep for 2 sec and dealing 1050.0% ATK (M. DMG). Each enemy eliminated increases the duration of Siren Form by 5 sec. When the duration ends, Lorelei returns to her Base Form and Teleports back to her original position.",
    },
  ],

  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect:
      'Crescent Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Enhanced effectiveness of control and transformation mechanics.',
    attackTypeInfo:
      'M.DMG: Magical damage through siren songs and scythe attacks. Reduced by M.DEF. Enhanced against sleeping targets.',
    equipmentNote:
      'Light Equipment: High mobility and attack speed, perfect for assassin playstyle and teleportation abilities.',
  },
};
