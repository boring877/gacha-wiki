// Last Origin Global Clock Configuration
// Pre-registration and Global Launch Countdowns

const LO_GLOBAL_PREREG_END = '2026-05-21T23:59:00Z';

export const lastOriginGlobalConfig = {
  id: 'last-origin-global',
  name: 'Last Origin',
  shortName: 'LO',
  image: null,
  openBetaDate: LO_GLOBAL_PREREG_END,
  displayDate: 'May 21, 2026 23:59 UTC',
  timerDescription: 'Pre-Registration Ends',

  server: {
    name: 'Global Server',
    timezone: 'UTC',
    status: 'Pre-Registration Open - Ends May 21, 2026',
  },

  prereg: {
    startDate: '2026-04-30T00:00:00Z',
    startDisplay: 'April 30, 2026',
    endDate: LO_GLOBAL_PREREG_END,
    endDisplay: 'May 21, 2026',
    subtitle: 'Pre-Registration Period',
  },
};
