/**
 * Taimanin Squad Game Configuration
 * Japan timezone (UTC+9) - Open Beta & Game Launch Countdowns
 */

// Open Beta started: January 15, 2026 at 02:00 UTC
const TS_OPEN_BETA_START = '2026-01-15T02:00:00Z';

// Game Launch: March 1, 2026 at 13:00 UTC (22:00 JST)
const TS_LAUNCH_DATE = '2026-03-01T13:00:00Z';

export const taimaninSquadConfig = {
  id: 'taimanin-squad',
  name: 'Taimanin Squad',
  shortName: 'TS',
  image: null, // Set by page with imported image
  openBetaDate: TS_LAUNCH_DATE,
  displayDate: 'March 1, 2026 13:00 UTC',
  timerDescription: 'Game Launch Countdown',

  // Server configuration (Japan timezone)
  server: {
    name: 'Japan Server',
    timezone: 'UTC+9',
    status: 'Launch - March 1, 2026',
  },

  // Open Beta configuration
  openBeta: {
    isActive: true,
    launchDateTime: TS_LAUNCH_DATE,
    subtitle: 'Official Launch & Open Beta Ends',
  },

  // Open Beta Start
  openBetaStart: {
    date: TS_OPEN_BETA_START,
    displayDate: 'January 15, 2026 02:00 UTC',
  },
};
