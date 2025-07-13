// Zone Nova Space-Time Rifts Data
// Centralized rifts management system

import { riftTide3Data } from './rifts/rift-tide-3.js';
import { riftTide4Data } from './rifts/rift-tide-4.js';
import { riftTide5Data } from './rifts/rift-tide-5.js';
import { riftTide6Data } from './rifts/rift-tide-6.js';

// Rift status constants
export const RIFT_STATUS = {
  ACTIVE: 'active',
  UPCOMING: 'upcoming', 
  ENDED: 'ended',
  SCHEDULED: 'scheduled'
};



// Main rifts data array - imported from individual files
export const zoneNovaRifts = [
  riftTide6Data,
  riftTide5Data,
  riftTide4Data,
  riftTide3Data
];

// Helper functions for rift management

// Get rifts by status (using dynamic status)
export function getRiftsByStatus(status) {
  const riftsWithDynamicStatus = getRiftsWithDynamicStatus();
  return riftsWithDynamicStatus.filter(rift => rift.status === status);
}

// Get active rifts (for current display)
export function getActiveRifts() {
  return getRiftsByStatus(RIFT_STATUS.ACTIVE);
}

// Get upcoming rifts
export function getUpcomingRifts() {
  return getRiftsByStatus(RIFT_STATUS.UPCOMING);
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

 