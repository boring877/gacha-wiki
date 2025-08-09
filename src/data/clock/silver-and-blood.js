/**
 * Silver and Blood Game Configuration
 * All timer and event data for Silver and Blood with regional support
 */

export const silverAndBloodConfig = {
  id: 'silver-and-blood',
  name: 'Silver and Blood',
  image: '/images/games/silver-and-blood/main-images/silver-and-blood-main4.jpg',
  hasRegions: true,
  currentRegion: 'us', // default region
  launchDate: '2025-06-26T00:00:00Z',
  displayDate: 'June 26, 2025',
  timerDescription: 'Server Reset',

  regions: {
    apac: {
      name: 'APAC Server',
      resetHour: 1, // 09:00 UTC+8 = 01:00 UTC
      resetMinute: 0,
      status: 'Daily reset timer<br />Resets at 01:00 UTC (09:00 UTC+8)',
      description: 'APAC Server with reset at 09:00 UTC+8',
      utcOffset: 8,
      utcLabel: 'UTC+8',
    },
    us: {
      name: 'US & Other Regions',
      resetHour: 12, // 05:00 UTC-8 with DST = 12:00 UTC
      resetMinute: 0,
      status: 'Daily reset timer<br />Resets at 12:00 UTC (05:00 UTC-8)',
      description: 'US & Other Regions with reset at 05:00 UTC-8',
      utcOffset: -8,
      utcLabel: 'UTC-8',
    },
  },

  // Game-specific timer data (region-specific)
  timers: {
    apac: {
      maintenance: {
        date: null,
        duration: 0,
        subtitle: 'No maintenance scheduled',
      },
      events: [
        {
          name: 'Summertime Ensemble Event',
          startDate: '2025-07-17T02:00:00Z', // July 17, 10:00 UTC+8 = 02:00 UTC
          endDate: '2025-08-06T19:00:00Z', // August 7, 03:00 UTC+8 = August 6, 19:00 UTC
          startDisplay: 'July 17, 10:00 UTC+8',
          endDisplay: 'August 7, 03:00 UTC+8',
        },
        {
          name: 'Daybreak Sonata',
          startDate: '2025-08-07T02:00:00Z', // August 7, 10:00 UTC+8 = 02:00 UTC
          endDate: '2025-08-20T19:00:00Z', // August 21, 03:00 UTC+8 = August 20, 19:00 UTC
          startDisplay: 'August 7, 10:00 UTC+8',
          endDisplay: 'August 21, 03:00 UTC+8',
        },
      ],
    },
    us: {
      maintenance: {
        date: null,
        duration: 0,
        subtitle: 'No maintenance scheduled',
      },
      events: [
        {
          name: 'Summertime Ensemble Event',
          startDate: '2025-07-17T12:00:00Z', // 05:00 UTC-8 with DST = 12:00 UTC
          endDate: '2025-08-07T11:00:00Z', // 04:00 UTC-8 with DST = 11:00 UTC
          startDisplay: 'July 17, 05:00 UTC-8',
          endDisplay: 'August 7, 04:00 UTC-8',
        },
        {
          name: 'Daybreak Sonata',
          startDate: '2025-08-07T12:00:00Z', // 05:00 UTC-8 with DST = 12:00 UTC
          endDate: '2025-08-21T11:00:00Z', // 04:00 UTC-8 with DST = 11:00 UTC
          startDisplay: 'August 7, 05:00 UTC-8',
          endDisplay: 'August 21, 04:00 UTC-8',
        },
      ],
    },
  },
};
