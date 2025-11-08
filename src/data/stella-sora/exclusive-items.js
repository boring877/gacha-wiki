/**
 * Stella Sora Exclusive Items Data
 * Contains information about exclusive items available through events and special passes
 */

export const stellaSoraExclusiveItems = [
  {
    id: 'exclusive-runic-disc',
    name: 'Summer Sanctuary',
    type: 'disc',
    image: 'Summer_sanctuary.jpg',
    source: {
      type: 'event',
      eventTitle: 'The Ghost Ship Haunts the Deep',
      startDate: '2025-10-27',
      endDate: '2025-11-10',
      description: 'Only obtainable during the Ghost Ship event',
    },
    description: 'Limited-time exclusive runic disc with special effects',
  },
  {
    id: 'royal-pass-skin',
    name: 'Royal Grant Pass Skin',
    type: 'skin',
    image: 'Tipsy_Daydream.jpg',
    source: {
      type: 'royal-pass',
      passTitle: 'Royal Grant Pass',
      startDate: '2025-10-19',
      endDate: '2025-11-29',
      description: 'Available by purchasing Royal Grant Pass',
    },
    description: 'Exclusive skin available through Royal Grant Pass purchase',
  },
];

/**
 * Get exclusive item by ID
 * @param {string} id - Item ID
 * @returns {Object|null} Item object or null if not found
 */
export const getExclusiveItemById = id => {
  return stellaSoraExclusiveItems.find(item => item.id === id) || null;
};

/**
 * Get all exclusive items
 * @returns {Array} Array of exclusive items
 */
export const getAllExclusiveItems = () => {
  return stellaSoraExclusiveItems;
};
