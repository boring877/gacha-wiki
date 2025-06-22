// Zone Nova Space-Time Rifts Data
// Centralized rifts management system

import { riftTide3Data } from './rifts/rift-tide-3.js';
import { riftTide4Data } from './rifts/rift-tide-4.js';

// Rift status constants
export const RIFT_STATUS = {
  ACTIVE: 'active',
  UPCOMING: 'upcoming', 
  ENDED: 'ended',
  SCHEDULED: 'scheduled'
};

// Rift type constants
export const RIFT_TYPE = {
  TIDE: 'tide',
  STORM: 'storm',
  VORTEX: 'vortex',
  BREACH: 'breach'
};

// Main rifts data array - imported from individual files
export const zoneNovaRifts = [
  riftTide3Data,
  riftTide4Data
];

// Helper functions for rift management

// Get rifts by status (using dynamic status)
export function getRiftsByStatus(status) {
  const riftsWithDynamicStatus = getRiftsWithDynamicStatus();
  return riftsWithDynamicStatus.filter(rift => rift.status === status);
}

// Get rifts by type  
export function getRiftsByType(type) {
  return zoneNovaRifts.filter(rift => rift.type === type);
}

// Get featured rifts
export function getFeaturedRifts() {
  return zoneNovaRifts.filter(rift => rift.featured === true);
}

// Get active rifts (for current display)
export function getActiveRifts() {
  return getRiftsByStatus(RIFT_STATUS.ACTIVE);
}

// Get upcoming rifts
export function getUpcomingRifts() {
  return getRiftsByStatus(RIFT_STATUS.UPCOMING);
}

// Get rift by ID
export function getRiftById(id) {
  return zoneNovaRifts.find(rift => rift.id === id);
}

// Check if rift is currently active based on dates
export function isRiftCurrentlyActive(rift) {
  const now = new Date();
  const startDate = new Date(rift.startDate);
  const endDate = new Date(rift.endDate);
  return now >= startDate && now <= endDate;
}

// Determine dynamic status based on current date
export function getDynamicRiftStatus(rift) {
  const now = new Date();
  const startDate = new Date(rift.startDate);
  const endDate = new Date(rift.endDate);
  
  if (now < startDate) {
    return RIFT_STATUS.UPCOMING;
  } else if (now >= startDate && now <= endDate) {
    return RIFT_STATUS.ACTIVE;
  } else {
    return RIFT_STATUS.ENDED;
  }
}

// Get rifts with dynamic status applied
export function getRiftsWithDynamicStatus() {
  return zoneNovaRifts.map(rift => ({
    ...rift,
    status: getDynamicRiftStatus(rift),
    originalStatus: rift.status // Keep original for reference
  }));
}

// Get rift status display text
export function getRiftStatusText(status) {
  const statusTexts = {
    [RIFT_STATUS.ACTIVE]: 'ACTIVE NOW',
    [RIFT_STATUS.UPCOMING]: 'COMING SOON',
    [RIFT_STATUS.ENDED]: 'ENDED',
    [RIFT_STATUS.SCHEDULED]: 'SCHEDULED'
  };
  return statusTexts[status] || 'UNKNOWN';
}

// Get rift type display text
export function getRiftTypeText(type) {
  const typeTexts = {
    [RIFT_TYPE.TIDE]: 'Tide',
    [RIFT_TYPE.STORM]: 'Storm',
    [RIFT_TYPE.VORTEX]: 'Vortex',
    [RIFT_TYPE.BREACH]: 'Breach'
  };
  return typeTexts[type] || 'Rift';
}

// Format rift date range for display
export function formatRiftDateRange(startDate, endDate, timezone = 'UTC+8') {
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  const formatOptions = { 
    month: 'short', 
    day: 'numeric',
    timeZone: 'Asia/Shanghai' // For UTC+8
  };
  
  const startFormatted = start.toLocaleDateString('en-US', formatOptions);
  const endFormatted = end.toLocaleDateString('en-US', formatOptions);
  
  return `${startFormatted} - ${endFormatted}, ${startDate.substring(0, 4)} (${timezone})`;
}

// Get days remaining for active rifts
export function getDaysRemaining(endDate) {
  const now = new Date();
  const end = new Date(endDate);
  const diffTime = end - now;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 0;
}

// Get time remaining in detailed format
export function getTimeRemaining(endDate) {
  const now = new Date();
  const end = new Date(endDate);
  const diffTime = end - now;
  
  if (diffTime <= 0) {
    return { expired: true, text: 'Ended' };
  }
  
  const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
  
  if (days > 0) {
    return { expired: false, text: `${days}d ${hours}h remaining` };
  } else if (hours > 0) {
    return { expired: false, text: `${hours}h ${minutes}m remaining` };
  } else {
    return { expired: false, text: `${minutes}m remaining` };
  }
}

// Export rift count for quick reference (calculated dynamically)
export function getRiftCounts() {
  return {
    total: zoneNovaRifts.length,
    active: getActiveRifts().length,
    upcoming: getUpcomingRifts().length,
    ended: getRiftsByStatus(RIFT_STATUS.ENDED).length,
    featured: getFeaturedRifts().length
  };
} 