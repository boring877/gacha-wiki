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
        startDate: '2025-09-30T06:00:00Z', // September 30, 14:00 UTC+8
        endDate: '2025-09-30T08:00:00Z', // September 30, 16:00 UTC+8
        duration: 2,
        subtitle: 'Scheduled September 30, 14:00-16:00 UTC+8',
      },
      rifts: [
        { name: 'Rift Surge VII', endDate: '2025-08-18T20:00:00Z' }, // August 18, 20:00 UTC (from rifts data)
        { name: 'Rift Tide VI', endDate: '2025-08-04T20:00:00Z' }, // August 4, 20:00 UTC (from rifts data)
      ],
      guildWar: {
        // First Guild War starts September 8, 2025, 05:00:00 UTC+8 (September 7, 21:00:00 UTC)
        firstGuildWarStart: '2025-09-07T21:00:00Z',
        // 2-week cycle (14 days) between Guild Wars
        cycleDays: 14,
        // 12 battles per season, 2 battles per Guild War = 6 Guild Wars per season
        battlesPerSeason: 12,
        battlesPerGuildWar: 2,
        // Phase schedule (all times in UTC+8, converted to UTC for calculations)
        phases: {
          // Preparation Phase: Monday and Friday (05:00:00 - next day 03:59:59) UTC+8
          preparation: [
            { day: 1, startHour: 21, startMinute: 0, endHour: 19, endMinute: 59 }, // Monday 05:00 UTC+8 = Sunday 21:00 UTC
            { day: 5, startHour: 21, startMinute: 0, endHour: 19, endMinute: 59 }, // Friday 05:00 UTC+8 = Thursday 21:00 UTC
          ],
          // Battle Phase: Tuesday and Saturday (04:00:00 - next day 23:59:59) UTC+8
          battle: [
            { day: 2, startHour: 20, startMinute: 0, endHour: 15, endMinute: 59 }, // Tuesday 04:00 UTC+8 = Monday 20:00 UTC
            { day: 6, startHour: 20, startMinute: 0, endHour: 15, endMinute: 59 }, // Saturday 04:00 UTC+8 = Friday 20:00 UTC
          ],
          // Settlement Phase: Thursday and Monday (00:00:00 - 03:59:59) UTC+8
          settlement: [
            { day: 4, startHour: 16, startMinute: 0, endHour: 19, endMinute: 59 }, // Thursday 00:00 UTC+8 = Wednesday 16:00 UTC
            { day: 1, startHour: 16, startMinute: 0, endHour: 19, endMinute: 59 }, // Monday 00:00 UTC+8 = Sunday 16:00 UTC
          ],
        },
      },
    },
  },
};
