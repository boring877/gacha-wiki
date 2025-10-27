/**
 * Stella Sora Events Data
 * Contains information about game events, updates, and special occasions
 */

export const stellaSoraEvents = [
  {
    id: 'ghost-ship-event-shop',
    title: 'The Ghost Ship Haunts the Deep - Event Shop',
    date: '2025-10-27',
    startDate: '2025-10-27',
    endDate: '2025-11-27',
    summary:
      'Visit the Ghost Ship Event Shop to exchange spectral currency for exclusive rewards, limited-time Trekkers, and haunting cosmetics.',
    description:
      'The Ghost Ship Event Shop offers a variety of exclusive rewards that can be purchased using Spectral Doubloons earned during the event. Browse through special Trekkers, cosmetic sets, energy refills, and other valuable items available only during this haunting event.',
    url: '/guides/stella-sora/events/ghost-ship-event-shop/',
    image: '/images/games/stella-sora/events/1/1.jpg',
    rewards: [
      'Exclusive Ghost Ship Trekker: Phantom Captain',
      'Spectral Doubloons (Event Currency)',
      'Haunted Ship Cosmetic Set',
      'Ethereal Energy Refills',
      'Phantom Map Fragments',
    ],
    featuredImage: '/images/games/stella-sora/events/1/1.jpg',
  },
  {
    id: 'ghost-ship-event-details',
    title: 'The Ghost Ship Haunts the Deep - Event Details',
    date: '2025-10-27',
    startDate: '2025-10-27',
    endDate: '2025-11-27',
    summary:
      'Explore the mysterious ghost ship, face supernatural challenges, and discover the haunting story behind this spectral vessel.',
    description:
      'The Ghost Ship Haunts the Deep event challenges players to explore a mysterious phantom vessel that has emerged from the depths. Face supernatural challenges, battle spectral enemies, and collect ethereal rewards. Uncover the dark secrets of the ghost ship and its cursed crew through engaging story missions and special gameplay modes.',
    url: '/guides/stella-sora/events/ghost-ship-event-details/',
    image: '/images/games/stella-sora/events/2/1.jpg',
    rewards: [
      'Enhanced Ghost Ship Trekker: Soul Reaper',
      'Ancient Spectral Coins',
      'Cursed Ship Cosmetic Set',
      'Void Energy Refills',
      'Ethereal Map Fragments',
    ],
    featuredImage: '/images/games/stella-sora/events/2/1.jpg',
  },
];

/**
 * Get event by slug or ID
 * @param {string} slug - Event slug from URL or event ID
 * @returns {Object|null} Event object or null if not found
 */
export const getEventBySlug = slug => {
  return stellaSoraEvents.find(event => event.url?.includes(slug) || event.id === slug) || null;
};
