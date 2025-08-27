/**
 * Horizon Walker Game Configuration
 * Simplified single-server configuration for KST timezone
 */

// Constants for Horizon Walker server
const HW_SERVER_TIMEZONE = 9; // KST (UTC+9)
const HW_RESET_HOUR_UTC = 1; // 01:00 UTC = 10:00 KST

export const horizonWalkerConfig = {
  id: 'horizon-walker',
  name: 'Horizon Walker',
  image: '/images/games/horizon-walker/gameimg/gameicon.jpg',
  launchDate: '2024-08-29T00:00:00Z',
  displayDate: 'August 29, 2024 (Korean Launch)',
  steamLaunchDate: '2025-08-27T00:00:00Z',
  steamDisplayDate: 'August 27, 2025',
  timerDescription: 'Server Reset',
  weeklyResetDay: 4, // Thursday (0 = Sunday, 4 = Thursday)

  // Single global server configuration
  server: {
    name: 'Global Server (KST)',
    timezone: HW_SERVER_TIMEZONE,
    resetHour: HW_RESET_HOUR_UTC,
    resetMinute: 0,
    status: 'Server Resets at 10:00 KST',
  },

  // Maintenance information
  maintenance: {
    date: null,
    duration: 0,
    subtitle: 'No maintenance scheduled',
  },
};
