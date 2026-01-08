// Zone Nova Space-Time Rifts Data
// Centralized rifts management system

import { riftTide3Data } from './rifts/rift-tide-3.js';
import { riftTide4Data } from './rifts/rift-tide-4.js';
import { riftTide5Data } from './rifts/rift-tide-5.js';
import { riftTide6Data } from './rifts/rift-tide-6.js';
import { riftSurge7Data } from './rifts/rift-surge-7.js';
import { rift8Data } from './rifts/rift-8.js';
import { rift9Data } from './rifts/rift-9.js';
import { riftXData } from './rifts/rift-x.js';
import { rift11Data } from './rifts/rift-11.js';
import { rift12Data } from './rifts/rift-12.js';
import { rift13Data } from './rifts/rift-13.js';
import { rift14Data } from './rifts/rift-14.js';
import { rift15Data } from './rifts/rift-15.js';
import { rift16Data } from './rifts/rift-16.js';
import { riftSurge17Data } from './rifts/rift-surge-17.js';
import { riftSurge18Data } from './rifts/rift-surge-18.js';
import { riftSurge19Data } from './rifts/rift-surge-19.js';

// Rift status constants
export const RIFT_STATUS = {
  ACTIVE: 'active',
  UPCOMING: 'upcoming',
  ENDED: 'ended',
  SCHEDULED: 'scheduled',
};

// Main rifts data array - imported from individual files
export const zoneNovaRifts = [
  riftSurge19Data,
  riftSurge18Data,
  riftSurge17Data,
  rift16Data,
  rift15Data,
  rift14Data,
  rift13Data,
  rift12Data,
  rift11Data,
  riftXData,
  rift9Data,
  rift8Data,
  riftSurge7Data,
  riftTide6Data,
  riftTide5Data,
  riftTide4Data,
  riftTide3Data,
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
    originalStatus: rift.status, // Keep original for reference
  }));
}

// Get rift status display text
export function getRiftStatusText(status) {
  const statusTexts = {
    [RIFT_STATUS.ACTIVE]: 'ACTIVE NOW',
    [RIFT_STATUS.UPCOMING]: 'COMING SOON',
    [RIFT_STATUS.ENDED]: 'ENDED',
    [RIFT_STATUS.SCHEDULED]: 'SCHEDULED',
  };
  return statusTexts[status] || 'UNKNOWN';
}
