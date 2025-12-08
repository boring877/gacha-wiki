// Clock Landing Games Data
// Simple data structure for the clock landing page

export const clockLandingGames = [
  {
    id: 'zone-nova',
    name: 'Zone Nova',
    description: 'Strategic RPG with Waifus',
    image: '/images/games/zone-nova/zonenova1.jpg',
    url: '/clock/zone-nova',
    themeColor: 'var(--zn-primary-amber)',
    active: true,
    // Simple timer info for preview
    primaryTimer: {
      name: 'Daily Reset',
      type: 'daily',
      resetHour: 20, // UTC
      resetMinute: 0,
      icon: '',
    },
  },
  {
    id: 'silver-and-blood',
    name: 'Silver & Blood',
    description: 'Dark fantasy gacha',
    image: '/images/games/silver-and-blood/main-images/silver-and-blood-main3.jpg',
    url: '/clock/silver-and-blood',
    themeColor: 'var(--sab-calm-red)',
    active: true,
    primaryTimer: {
      name: 'Daily Reset',
      type: 'daily',
      resetHour: 20, // UTC (APAC default)
      resetMinute: 0,
      icon: '',
    },
  },
  {
    id: 'horizon-walker',
    name: 'Horizon Walker',
    description: 'Post-apocalyptic RPG',
    image: '', // Image will be imported directly in the Astro page
    url: '/clock/horizon-walker',
    themeColor: 'var(--hw-primary-warm)',
    active: true,
    primaryTimer: {
      name: 'Daily Reset',
      type: 'daily',
      resetHour: 15, // UTC (00:00 UTC+9)
      resetMinute: 0,
      icon: '',
    },
  },
  {
    id: 'stella-sora',
    name: 'Stella Sora',
    description: 'Fantasy RPG with Trekkers',
    image: '/images/games/stella-sora/gameimg/Banner.jpg',
    url: '/clock/stella-sora',
    themeColor: 'var(--ss-primary)',
    active: true,
    // Simple timer info for preview
    primaryTimer: {
      name: 'Launch Countdown',
      type: 'launch',
      resetHour: 2, // Launch time (02:00 UTC = 19:00 UTC-7)
      resetMinute: 0,
      icon: '',
    },
  },
  {
    id: 'busty-burst',
    name: 'Busty Burst Fantasy',
    description: 'Adult fantasy RPG',
    image: '', // Image will be imported directly in the Astro page
    url: '/clock/busty-burst',
    themeColor: 'var(--bb-primary)',
    active: true,
    primaryTimer: {
      name: 'Daily Reset',
      type: 'daily',
      resetHour: 3, // UTC (03:00 UTC)
      resetMinute: 0,
      icon: '',
    },
  },
];

/**
 * Get all active games for the landing page
 * @returns {Array} Active games
 */
export function getActiveLandingGames() {
  return clockLandingGames.filter(game => game.active);
}

/**
 * Calculate time remaining until next reset for landing page preview
 * @param {Object} timer - Timer configuration
 * @returns {Object} Time remaining and formatted string
 */
export function calculatePreviewTime(timer) {
  const now = new Date();
  const targetTime = new Date();

  if (timer.type === 'daily') {
    targetTime.setUTCHours(timer.resetHour, timer.resetMinute || 0, 0, 0);

    // If reset time has passed today, set it for tomorrow
    if (targetTime <= now) {
      targetTime.setUTCDate(targetTime.getUTCDate() + 1);
    }
  } else if (timer.type === 'launch') {
    // For launch timer, use the specific launch date (Oct 20, 2025 at 02:00 UTC)
    targetTime.setUTCFullYear(2025, 9, 20); // October 20, 2025
    targetTime.setUTCHours(timer.resetHour, timer.resetMinute || 0, 0, 0);
  }

  const timeDiff = targetTime.getTime() - now.getTime();

  if (timeDiff <= 0) {
    return {
      hours: 0,
      minutes: 0,
      display: timer.type === 'launch' ? 'Launched!' : '0h 0m',
      expired: true,
    };
  }

  const hours = Math.floor(timeDiff / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

  return {
    hours,
    minutes,
    display:
      timer.type === 'launch' && hours > 24
        ? `${Math.floor(hours / 24)}d ${hours % 24}h`
        : `${hours}h ${minutes}m`,
    expired: false,
  };
}
