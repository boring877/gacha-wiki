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
        date: null, // No maintenance scheduled
        duration: null,
        subtitle: 'Waiting for next announcement',
      },
      rifts: [
        { name: 'Rift Surge VII', endDate: '2025-08-18T20:00:00Z' }, // August 18, 20:00 UTC (from rifts data)
        { name: 'Rift Tide VI', endDate: '2025-08-04T20:00:00Z' }, // August 4, 20:00 UTC (from rifts data)
      ],
      events: [
        {
          name: 'Thor Event',
          startDate: '2025-08-05T06:15:00Z', // August 5, 14:15 UTC+8 = August 5, 06:15 UTC
          endDate: '2025-08-18T19:59:00Z', // August 19, 03:59 UTC+8 = August 18, 19:59 UTC
          startDisplay: 'August 5, 14:15 UTC+8',
          endDisplay: 'August 19, 03:59 UTC+8',
        },
      ],
      Doubledrop_2x: [
        {
          name: '2x Materials Event',
          description: '2x Material Rewards',
          startDate: '2025-07-28T20:00:00Z', // July 29, 04:00 UTC+8 (server reset) = July 28, 20:00 UTC
          endDate: '2025-08-04T20:00:00Z', // August 5, 04:00 UTC+8 (server reset) = August 4, 20:00 UTC
          startDisplay: 'July 29, 04:00 UTC+8',
          endDisplay: 'August 5, 04:00 UTC+8',
          duration: 7,
          reward: '2x Material Drop Rewards',
        },
      ],
    },
  },
};
