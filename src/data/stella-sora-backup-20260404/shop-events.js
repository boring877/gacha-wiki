/**
 * Stella Sora Shop Events Data (Legacy File)
 * This file now serves as a compatibility layer that imports from the new modular structure
 */

// Import all events from the new modular structure
import { stellaSoraShopEvents as newEvents } from './events/index.js';

// Re-export for backward compatibility
export const stellaSoraShopEvents = newEvents;

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
