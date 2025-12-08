/**
 * Busty Burst Fantasy Game Configuration
 * Global version - UTC timezone configuration
 * Launch Date: December 4, 2025
 * Daily Reset: 03:00 UTC
 */

// Game launches on Dec 4, 2025 at 00:00 UTC
const BB_LAUNCH_DATE_UTC = '2025-12-04T00:00:00Z';

// Daily reset time in UTC (03:00 UTC)
const BB_RESET_HOUR_UTC = 3;
const BB_RESET_MINUTE_UTC = 0;

export const bustyBurstConfig = {
  id: 'busty-burst',
  name: 'Busty Burst Fantasy',
  shortName: 'BBB',
  image: '/images/games/Busty_Burst/BG/gameLogo.webp',
  launchDate: BB_LAUNCH_DATE_UTC,
  displayDate: 'December 4, 2025 (Thu.)',
  timerDescription: 'Daily Server Reset',

  // Global server configuration (UTC timezone)
  server: {
    name: 'Global Server',
    timezone: 'UTC',
    resetHour: BB_RESET_HOUR_UTC,
    resetMinute: BB_RESET_MINUTE_UTC,
    status: 'Server Resets at 03:00 UTC',
  },

  // Pre-launch configuration
  preLaunch: {
    isActive: false, // Game has already launched
    launchDateTime: BB_LAUNCH_DATE_UTC,
    subtitle: 'Global Launch - Completed',
  },

  // Maintenance information
  maintenance: {
    start: '2025-12-09T03:00:00Z',
    end: '2025-12-09T06:00:00Z',
    duration: 3, // hours
    subtitle: 'Dec 9, 2025 03:00 – 06:00 UTC',
  },

  // Additional timers
  timers: {
    // Weekly reset timer (Mondays at 03:00 UTC)
    weeklyReset: {
      name: 'Weekly Reset',
      day: 1, // Monday
      hour: BB_RESET_HOUR_UTC,
      minute: BB_RESET_MINUTE_UTC,
      description: 'Weekly content reset',
    },

    // Monthly reset timer (1st of each month)
    monthlyReset: {
      name: 'Monthly Reset',
      day: 1,
      hour: BB_RESET_HOUR_UTC,
      minute: BB_RESET_MINUTE_UTC,
      description: 'Monthly events reset',
    },
  },
};
