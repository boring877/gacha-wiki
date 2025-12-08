/**
 * Busty Burst Fantasy - Raid Drops Data
 */

// All accessory set types
const setTypes = ['Gold', 'Amethyst', 'Diamond', 'Pearl', 'Ruby', 'Sapphire', 'Amber', 'Emerald'];

export const raidDrops = [
  {
    slot: 'Tiara',
    slotImages: setTypes.map(set => `${set}_Tiara.png`),
    bosses: [
      { name: 'Boar Beast', image: 'Boar_Beast.png', element: 'Fire' },
      { name: 'The Dark Knight', image: 'The_Dark_Knight.png', element: 'Dark' },
    ],
  },
  {
    slot: 'Earrings',
    slotImages: [
      'Gold_Earrings.png',
      'Amethyst_Earring.png',
      'Diamond_Earrings.png',
      'Pearl_Earrings.png',
      'Ruby_Earring.png',
      'Sapphire_Earring.png',
      'Amber_Earring.png',
      'Emerald_Earrings.png',
    ],
    bosses: [
      { name: 'Canine Beast', image: 'Canine_Beast.png', element: 'Water' },
      { name: 'The Dark Knight', image: 'The_Dark_Knight.png', element: 'Dark' },
    ],
  },
  {
    slot: 'Necklace',
    slotImages: setTypes.map(set => `${set}_Necklace.png`),
    bosses: [
      { name: 'Avian Beast', image: 'Avian_Beast.png', element: 'Wind' },
      { name: 'The Dark Knight', image: 'The_Dark_Knight.png', element: 'Dark' },
    ],
  },
  {
    slot: 'Bracelet',
    slotImages: setTypes.map(set => `${set}_Bracelet.png`),
    bosses: [
      { name: 'Paladin', image: 'Paladin.png', element: 'Light' },
      { name: 'The Dark Knight', image: 'The_Dark_Knight.png', element: 'Dark' },
    ],
  },
  {
    slot: 'Ring',
    slotImages: setTypes.map(set => `${set}_Ring.png`),
    bosses: [
      { name: 'Assassin', image: 'Assassin.png', element: 'Mind' },
      { name: 'The Dark Knight', image: 'The_Dark_Knight.png', element: 'Dark' },
    ],
  },
];
