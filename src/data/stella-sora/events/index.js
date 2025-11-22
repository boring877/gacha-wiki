/**
 * Stella Sora Shop Events Aggregation
 * Imports and exports all individual event data files
 */

import { aFinaleEchoingEvent } from './a-finale-echoing.js';
import { theGhostShipHauntsTheDeepEvent } from './the-ghost-ship-haunts-the-deep.js';
import { guildSweetGuildEvent } from './guild-sweet-guild.js';

export const stellaSoraShopEvents = [
  aFinaleEchoingEvent,
  theGhostShipHauntsTheDeepEvent,
  guildSweetGuildEvent,
];

/**
 * Get shop event by slug or ID
 * @param {string} slug - Shop event slug from URL or event ID
 * @returns {Object|null} Shop event object or null if not found
 */
export const getShopEventBySlug = slug => {
  return stellaSoraShopEvents.find(event => event.url?.includes(slug) || event.id === slug) || null;
};

/**
 * Get all shop events sorted by date (newest first)
 * @returns {Array} Array of shop events
 */
export const getAllShopEvents = () => {
  return [...stellaSoraShopEvents].sort((a, b) => new Date(b.date) - new Date(a.date));
};

/**
 * Get featured shop events
 * @returns {Array} Array of featured shop events
 */
export const getFeaturedShopEvents = () => {
  return stellaSoraShopEvents.filter(event => event.featured !== false);
};

// Export individual events for direct access
export { aFinaleEchoingEvent } from './a-finale-echoing.js';
export { theGhostShipHauntsTheDeepEvent } from './the-ghost-ship-haunts-the-deep.js';
export { guildSweetGuildEvent } from './guild-sweet-guild.js';
