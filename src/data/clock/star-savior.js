/**
 * Star Savior Game Configuration
 * UTC+9 timezone (JST/KST) - Two server regions
 * Korea/Japan Launch: November 20, 2025
 * Global Launch: March 19, 2026
 * Daily Reset: 04:00 UTC+9 (19:00 UTC previous day)
 */

const SS_RESET_HOUR_UTC = 19;
const SS_RESET_MINUTE_UTC = 0;

const SS_KR_LAUNCH_DATE = '2025-11-19T19:00:00Z';
const SS_GLOBAL_LAUNCH_DATE = '2026-03-18T19:00:00Z';

export const starSaviorConfig = {
  id: 'star-savior',
  name: 'Star Savior',
  shortName: 'SS',
  image: null,
  launchDate: SS_GLOBAL_LAUNCH_DATE,
  krLaunchDate: SS_KR_LAUNCH_DATE,
  globalLaunchDate: SS_GLOBAL_LAUNCH_DATE,
  krDisplayDate: 'November 20, 2025',
  globalDisplayDate: 'March 19, 2026',
  timerDescription: 'Server Reset',
  weeklyResetDay: 4,
  hasRegions: true,
  currentRegion: 'global',

  regions: {
    'korea-japan': {
      name: 'Korea/Japan Server (UTC+9)',
      resetHour: SS_RESET_HOUR_UTC,
      resetMinute: SS_RESET_MINUTE_UTC,
      status: 'Server Resets at 04:00 JST',
      launchDate: SS_KR_LAUNCH_DATE,
      displayDate: 'November 20, 2025',
    },
    global: {
      name: 'Global Server (UTC+9)',
      resetHour: SS_RESET_HOUR_UTC,
      resetMinute: SS_RESET_MINUTE_UTC,
      status: 'Server Resets at 04:00 UTC+9',
      launchDate: SS_GLOBAL_LAUNCH_DATE,
      displayDate: 'March 19, 2026',
    },
  },

  maintenance: {
    subtitle: 'No scheduled maintenance',
  },
};
