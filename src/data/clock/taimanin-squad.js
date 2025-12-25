/**
 * Taimanin Squad Game Configuration
 * Japan timezone (UTC+9) - Open Beta Countdown
 */

// Open Beta starts January 15, 2026 at 00:00 JST (UTC+9)
// Convert to UTC: January 14, 2026 at 15:00:00 UTC
const TS_OPEN_BETA_DATE = '2026-01-14T15:00:00Z';

export const taimaninSquadConfig = {
  id: 'taimanin-squad',
  name: 'Taimanin Squad',
  shortName: 'TS',
  image: null, // Set by page with imported image
  openBetaDate: TS_OPEN_BETA_DATE,
  displayDate: 'January 15, 2026 (JST)',
  timerDescription: 'Open Beta Countdown',

  // Server configuration (Japan timezone)
  server: {
    name: 'Japan Server',
    timezone: 'UTC+9',
    status: 'Open Beta - January 15, 2026',
  },

  // Open Beta configuration
  openBeta: {
    isActive: true,
    launchDateTime: TS_OPEN_BETA_DATE,
    subtitle: 'Open Beta Launch',
  },
};
