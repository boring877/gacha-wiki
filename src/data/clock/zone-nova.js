/**
 * Zone Nova Game Configuration
 * All timer and event data for Zone Nova
 */

export const zoneNovaConfig = {
  id: 'zone-nova',
  name: 'Zone Nova',
  image: '/images/games/zone-nova/zonenova.jpg',
  hasRegions: true,
  currentRegion: 'ero-labs', // default region
  launchDate: '2025-04-29T00:00:00Z',
  displayDate: 'April 29, 2025',
  timerDescription: 'Server Reset',

  regions: {
    'ero-labs': {
      name: 'Ero-Labs (UTC+8)',
      resetHour: 20, // 20:00 UTC = 04:00 UTC+8 (next day)
      resetMinute: 0,
      status: 'Server Resets at 04:00 UTC+8',
      description: 'Ero-Labs Server with reset at 04:00 UTC+8',
    },
  },

  // Game-specific timer data (region-specific)
  timers: {
    'ero-labs': {
      maintenance: {
        startDate: '2025-08-19T06:00:00Z', // August 19, 14:00 UTC+8
        endDate: '2025-08-19T10:00:00Z', // August 19, 18:00 UTC+8
        duration: 4,
        subtitle: 'Scheduled August 19, 14:00-18:00 UTC+8',
      },
      rifts: [
        { name: 'Rift Surge VII', endDate: '2025-08-18T20:00:00Z' }, // August 18, 20:00 UTC (from rifts data)
        { name: 'Rift Tide VI', endDate: '2025-08-04T20:00:00Z' }, // August 4, 20:00 UTC (from rifts data)
      ],
    },
  },
};
