/**
 * Stella Sora Game Configuration
 * UTC-7 timezone configuration - Game Already Launched
 */

// Game launched on Oct 19, 2025 at 19:00 UTC-7
// Convert to UTC for consistency: Oct 20, 2025 at 02:00:00Z (UTC-7 + 7 hours)
const SS_LAUNCH_DATE_UTC_MINUS_7 = '2025-10-20T02:00:00Z';

// Daily reset time in UTC-7 (13:00 UTC-7)
const SS_RESET_HOUR_UTC_MINUS_7 = 13; // 13:00 UTC-7 (1 PM UTC-7)
const SS_RESET_MINUTE_UTC_MINUS_7 = 0;

// Maintenance period in UTC-7
// Start: Oct 27, 2025 20:00 UTC-7 = Oct 28, 2025 03:00:00Z (UTC)
// End: Oct 28, 2025 02:00 UTC-7 = Oct 28, 2025 09:00:00Z (UTC)
const SS_MAINTENANCE_START_UTC_MINUS_7 = '2025-10-28T03:00:00Z';
const SS_MAINTENANCE_END_UTC_MINUS_7 = '2025-10-28T09:00:00Z';

// A Finale Echoing Event periods in UTC-7
// Event Duration: Nov 10, 2025 after maintenance – Nov 17, 2025 12:59 (UTC-7) - Extended to align with Banner 1
// Event Shop & Reward Exchange: Nov 10, 2025 after maintenance – Nov 30, 2025 08:00 (UTC-7)
const SS_EVENT_START_UTC_MINUS_7 = '2025-11-10T19:00:00Z'; // Nov 10, 2025 after maintenance (estimated 12:00 UTC-7) = Nov 10, 2025 19:00:00Z (UTC)
const SS_EVENT_DURATION_END_UTC_MINUS_7 = '2025-11-17T19:59:00Z'; // Nov 17, 2025 12:59 UTC-7 = Nov 17, 2025 19:59:00Z (UTC) - Extended to match banner end
const SS_EVENT_SHOP_END_UTC_MINUS_7 = '2025-11-30T15:00:00Z'; // Nov 30, 2025 08:00 UTC-7 = Nov 30, 2025 15:00:00Z (UTC)

export const stellaSoraConfig = {
  id: 'stella-sora',
  name: 'Stella Sora',
  shortName: 'SS',
  image: '/images/games/stella-sora/gameimg/BG1.jpg',
  launchDate: SS_LAUNCH_DATE_UTC_MINUS_7,
  displayDate: 'October 19, 2025 at 19:00 (UTC-7)',
  timerDescription: 'Daily Server Reset',
  weeklyResetDay: 1, // Monday (0 = Sunday, 1 = Monday)

  // Global server configuration (UTC-7 timezone)
  server: {
    name: 'Global Server',
    timezone: 'UTC-7',
    resetHour: SS_RESET_HOUR_UTC_MINUS_7,
    resetMinute: SS_RESET_MINUTE_UTC_MINUS_7,
    status: 'Server Resets at 13:00 UTC-7',
  },

  // Pre-launch configuration
  preLaunch: {
    isActive: false, // Game has already launched
    launchDateTime: SS_LAUNCH_DATE_UTC_MINUS_7,
    subtitle: 'Global Launch - Completed',
  },

  // Maintenance information
  maintenance: {
    start: SS_MAINTENANCE_START_UTC_MINUS_7,
    end: SS_MAINTENANCE_END_UTC_MINUS_7,
    duration: 6, // 6 hours maintenance
    subtitle: 'Scheduled server maintenance',
  },

  // Event information
  event: {
    name: 'A Finale Echoing',
    start: SS_EVENT_START_UTC_MINUS_7,
    durationEnd: SS_EVENT_DURATION_END_UTC_MINUS_7,
    shopEnd: SS_EVENT_SHOP_END_UTC_MINUS_7,
    subtitle: 'Beta Event - Face Opera Ghost: Rovina in the Monolith',
  },

  // Banner information - centralized banner data for clock display
  banners: {
    // Banner 1: Fuyuka Fireworks Events (Active until Dec 8, 2025)
    banner1: {
      title: 'Fuyuka Fireworks Events',
      character: 'Fuyuka',
      disc: 'Fireworks',
      startDate: '2025-11-17T00:00:00-07:00',
      endDate: '2025-12-08T19:59:59-07:00', // Dec 8, 2025 19:59 UTC-7
      type: 'character-and-disc',
    },
    // Banner 2: A Fateful Encounter (Nanoha) & A Heart-Tuned Melody (Disc) (Active until Dec 1, 2025)
    banner2: {
      title: 'A Fateful Encounter & A Heart-Tuned Melody',
      character: 'Nanoha',
      disc: 'Daylight Garden',
      startDate: '2025-11-10T00:00:00-07:00',
      endDate: '2025-12-01T12:59:59-07:00', // Dec 1, 2025 12:59 UTC-7
      type: 'character-and-disc',
    },
  },

  // Additional timers
  timers: {
    // Weekly reset timer (Mondays at 13:00 UTC-7)
    weeklyReset: {
      name: 'Weekly Reset',
      day: 1, // Monday
      hour: SS_RESET_HOUR_UTC_MINUS_7,
      minute: SS_RESET_MINUTE_UTC_MINUS_7,
      description: 'Weekly content and challenge reset',
    },

    // Monthly reset timer (1st of each month)
    monthlyReset: {
      name: 'Monthly Reset',
      day: 1,
      hour: SS_RESET_HOUR_UTC_MINUS_7,
      minute: SS_RESET_MINUTE_UTC_MINUS_7,
      description: 'Monthly events and banner reset',
    },
  },
};
