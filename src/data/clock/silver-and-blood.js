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
    },
    us: {
      name: 'US & Other Regions',
      resetHour: 12, // 05:00 UTC-8 with DST = 12:00 UTC
      resetMinute: 0,
      status: 'Daily reset timer<br />Resets at 12:00 UTC (05:00 UTC-8)',
      description: 'US & Other Regions with reset at 05:00 UTC-8',
    },
  },

  // Game-specific timer data (region-specific)
  timers: {
    apac: {
      maintenance: {
        date: '2025-08-05T06:00:00Z',
        duration: 2,
        subtitle: 'Waiting for game announcement',
      },
      // No rifts for Silver and Blood
      raids: [
        {
          name: 'Prophecy Unbound - Weathered Flames of War',
          startDate: '2025-08-16T20:00:00Z', // August 16, 12:00 UTC-8 = August 17, 04:00 UTC+8 = August 16, 20:00 UTC
          endDate: '2025-08-22T07:59:00Z', // August 21, 23:59 UTC-8 = August 22, 15:59 UTC+8 = August 22, 07:59 UTC
          startDisplay: 'August 17, 04:00 UTC+8',
          endDisplay: 'August 22, 15:59 UTC+8',
        },
      ],
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
      signinEvents: [
        {
          name: 'Path of the Blooming Lotus',
          startDate: '2025-07-24T12:00:00Z', // July 24, 04:00 UTC-8 = July 24, 20:00 UTC+8 = July 24, 12:00 UTC
          endDate: '2025-08-21T12:00:00Z', // August 21, 04:00 UTC-8 = August 21, 20:00 UTC+8 = August 21, 12:00 UTC
          startDisplay: 'July 24, 20:00 UTC+8',
          endDisplay: 'August 21, 20:00 UTC+8',
          totalDays: 28,
          description: '28-Day Login Reward Event',
          reward: 'Hati Outfit [Midnight Lotus]',
        },
        {
          name: "Selena's Agenda",
          startDate: '2025-07-17T13:00:00Z', // July 17, 05:00 UTC-8 = July 17, 21:00 UTC+8 = July 17, 13:00 UTC
          endDate: '2025-08-07T12:00:00Z', // August 7, 04:00 UTC-8 = August 7, 20:00 UTC+8 = August 7, 12:00 UTC
          startDisplay: 'July 17, 21:00 UTC+8',
          endDisplay: 'August 7, 20:00 UTC+8',
          totalDays: 21,
          description: 'Limited Sign-in Event',
          reward: "Selena's Special Rewards",
        },
      ],
      outfits: [
        {
          name: 'Pearlescent Dreams',
          character: 'Starry-Eyed Aiona',
          startDate: '2025-07-17T13:00:00Z', // July 17, 05:00 UTC-8 = July 17, 21:00 UTC+8 = July 17, 13:00 UTC
          endDate: '2025-08-07T12:00:00Z', // August 7, 04:00 UTC-8 = August 7, 20:00 UTC+8 = August 7, 12:00 UTC
          startDisplay: 'July 17, 21:00 UTC+8',
          endDisplay: 'August 7, 20:00 UTC+8',
        },
      ],
      specialEvents: [
        {
          name: 'Double Skill XP and Gear Week',
          description: '2x Reward Event',
          startDate: '2025-08-02T13:00:00Z', // Today's reset time for APAC (09:00 UTC+8 = 01:00 UTC + 12h DST adjustment = 13:00 UTC)
          endDate: '2025-08-09T13:00:00Z', // One week later
          startDisplay: 'August 2, 21:00 UTC+8',
          endDisplay: 'August 9, 21:00 UTC+8',
          duration: 7,
          reward: '2x Skill XP and Gear Rewards',
        },
      ],
    },
    us: {
      maintenance: {
        date: '2025-08-05T06:00:00Z',
        duration: 2,
        subtitle: 'Waiting for game announcement',
      },
      // No rifts for Silver and Blood
      raids: [
        {
          name: 'Prophecy Unbound - Weathered Flames of War',
          startDate: '2025-08-16T20:00:00Z', // August 16, 12:00 UTC-8 with DST = 20:00 UTC
          endDate: '2025-08-22T07:59:00Z', // August 21, 23:59 UTC-8 with DST = August 22, 07:59 UTC
          startDisplay: 'August 16, 12:00 UTC-8',
          endDisplay: 'August 21, 23:59 UTC-8',
        },
      ],
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
      signinEvents: [
        {
          name: 'Path of the Blooming Lotus',
          startDate: '2025-07-24T12:00:00Z', // July 24, 04:00 UTC-8 with DST = 12:00 UTC
          endDate: '2025-08-21T12:00:00Z', // August 21, 04:00 UTC-8 with DST = 12:00 UTC
          startDisplay: 'July 24, 04:00 UTC-8',
          endDisplay: 'August 21, 04:00 UTC-8',
          totalDays: 28,
          description: '28-Day Login Reward Event',
          reward: 'Hati Outfit [Midnight Lotus]',
        },
        {
          name: "Selena's Agenda",
          startDate: '2025-07-17T12:00:00Z', // July 17, 05:00 UTC-8 with DST = 12:00 UTC
          endDate: '2025-08-07T11:00:00Z', // August 7, 04:00 UTC-8 with DST = 11:00 UTC
          startDisplay: 'July 17, 05:00 UTC-8',
          endDisplay: 'August 7, 04:00 UTC-8',
          totalDays: 21,
          description: 'Limited Sign-in Event',
          reward: "Selena's Special Rewards",
        },
      ],
      outfits: [
        {
          name: 'Pearlescent Dreams',
          character: 'Starry-Eyed Aiona',
          startDate: '2025-07-17T12:00:00Z', // July 17, 05:00 UTC-8 with DST = 12:00 UTC
          endDate: '2025-08-07T11:00:00Z', // August 7, 04:00 UTC-8 with DST = 11:00 UTC
          startDisplay: 'July 17, 05:00 UTC-8',
          endDisplay: 'August 7, 04:00 UTC-8',
        },
      ],
      specialEvents: [
        {
          name: 'Double Skill XP and Gear Week',
          description: '2x Reward Event',
          startDate: '2025-08-02T12:00:00Z', // August 2, 05:00 UTC-8 with DST = 12:00 UTC
          endDate: '2025-08-09T12:00:00Z', // One week later
          startDisplay: 'August 2, 05:00 UTC-8',
          endDisplay: 'August 9, 05:00 UTC-8',
          duration: 7,
          reward: '2x Skill XP and Gear Rewards',
        },
      ],
    },
  },
};
