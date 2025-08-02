// Clock Games Configuration - Enhanced with multiple timers per game
// Supports daily reset, maintenance, events, and other timed activities

export const clockGames = [
  {
    id: 'zone-nova',
    name: 'Zone Nova',
    description: 'Strategic RPG with stunning visuals and deep mechanics',
    image: '/images/games/zone-nova/zonenova1.jpg',
    url: '/guides/zone-nova/',
    themeColor: '#ffb74d',
    active: true,
    timers: [
      {
        id: 'maintenance',
        name: 'Maintenance',
        description: 'Scheduled Server Maintenance',
        type: 'maintenance',
        startDate: '2025-08-05T06:00:00Z',
        endDate: '2025-08-05T08:00:00Z',
        priority: 0, // Highest priority
        icon: '🔧',
        enabled: false, // Enable when maintenance is scheduled
      },
      {
        id: 'daily-reset',
        name: 'Daily Reset',
        description: 'Dailies • Energy • Shop Reset',
        type: 'daily',
        resetHour: 20, // UTC
        resetMinute: 0,
        priority: 1,
        icon: '🔄',
      },
      {
        id: 'weekly-reset',
        name: 'Weekly Reset',
        description: 'Weekly Missions • Arena Reset',
        type: 'weekly',
        resetDay: 1, // Monday = 1, Sunday = 0
        resetHour: 20,
        resetMinute: 0,
        priority: 2,
        icon: '📅',
      },
      {
        id: 'rift-time',
        name: 'Rift Time',
        description: 'Dimensional Rift • Special Dungeons',
        type: 'daily',
        resetHour: 12, // UTC (Different from daily reset)
        resetMinute: 0,
        priority: 3,
        icon: '🌀',
      },
      {
        id: 'pvp-timer',
        name: 'PvP Season',
        description: 'Arena Season • Ranking Rewards',
        type: 'season',
        endDate: '2025-08-30T20:00:00Z',
        priority: 4,
        icon: '⚔️',
      },
      {
        id: 'event-timer',
        name: 'Limited Event',
        description: 'Special Event • Exclusive Rewards',
        type: 'event',
        endDate: '2025-08-15T20:00:00Z',
        priority: 5,
        icon: '🌟',
        enabled: false, // Enable when event is active
      },
    ],
  },
  {
    id: 'silver-blood',
    name: 'Silver & Blood',
    description: 'Dark fantasy gacha with rich storytelling and immersive lore',
    image: '/images/games/silver-and-blood/main-images/silver-and-blood-main3.jpg',
    url: '/guides/silver-and-blood/',
    themeColor: '#5a7ba7',
    active: true,
    timers: [
      {
        id: 'daily-reset',
        name: 'Daily Reset',
        description: 'Dailies • Stamina • Guild Activities',
        type: 'daily',
        resetHour: 12, // UTC (20:00 UTC+8)
        resetMinute: 0,
        priority: 1,
        icon: '🔄',
      },
      {
        id: 'maintenance',
        name: 'Maintenance',
        description: 'Scheduled Server Maintenance',
        type: 'maintenance',
        startDate: '2025-08-05T06:00:00Z',
        endDate: '2025-08-05T08:00:00Z',
        priority: 0, // Highest priority
        icon: '🔧',
        enabled: false, // Enable when maintenance is scheduled
      },
      {
        id: 'pvp-season',
        name: 'PvP Season End',
        description: 'Arena Season • Ranking Rewards',
        type: 'season',
        endDate: '2025-08-30T12:00:00Z',
        priority: 2,
        icon: '⚔️',
      },
    ],
  },
];

/**
 * Get all active games for clock display
 * @returns {Array} Active games with their timers
 */
export function getActiveClockGames() {
  return clockGames.filter(game => game.active);
}

/**
 * Get active timers for a specific game
 * @param {string} gameId - Game identifier
 * @returns {Array} Active timers sorted by priority
 */
export function getActiveTimers(gameId) {
  const game = clockGames.find(g => g.id === gameId);
  if (!game) return [];

  return game.timers
    .filter(timer => timer.enabled !== false)
    .sort((a, b) => a.priority - b.priority);
}

/**
 * Get the primary timer for a game (highest priority active timer)
 * @param {string} gameId - Game identifier
 * @returns {Object|null} Primary timer or null
 */
export function getPrimaryTimer(gameId) {
  const timers = getActiveTimers(gameId);
  return timers.length > 0 ? timers[0] : null;
}

/**
 * Calculate time remaining for different timer types
 * @param {Object} timer - Timer configuration
 * @returns {Object} Time remaining in hours, minutes, seconds
 */
export function calculateTimeRemaining(timer) {
  const now = new Date();
  let targetTime;

  switch (timer.type) {
    case 'daily':
      targetTime = new Date();
      targetTime.setUTCHours(timer.resetHour, timer.resetMinute || 0, 0, 0);

      // If reset time has passed today, set it for tomorrow
      if (targetTime <= now) {
        targetTime.setUTCDate(targetTime.getUTCDate() + 1);
      }
      break;

    case 'weekly': {
      targetTime = new Date();
      const currentDay = targetTime.getUTCDay();
      const daysUntilReset = (timer.resetDay - currentDay + 7) % 7;

      targetTime.setUTCDate(targetTime.getUTCDate() + daysUntilReset);
      targetTime.setUTCHours(timer.resetHour, timer.resetMinute || 0, 0, 0);

      // If it's the same day but time has passed, set for next week
      if (daysUntilReset === 0 && targetTime <= now) {
        targetTime.setUTCDate(targetTime.getUTCDate() + 7);
      }
      break;
    }

    case 'event':
    case 'maintenance':
    case 'season':
      if (timer.type === 'maintenance' && timer.startDate && now < new Date(timer.startDate)) {
        targetTime = new Date(timer.startDate);
      } else {
        targetTime = new Date(timer.endDate);
      }
      break;

    default:
      return { hours: 0, minutes: 0, seconds: 0, expired: true };
  }

  const timeDiff = targetTime.getTime() - now.getTime();

  if (timeDiff <= 0) {
    return { hours: 0, minutes: 0, seconds: 0, expired: true };
  }

  const hours = Math.floor(timeDiff / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  return {
    hours: Math.max(0, hours),
    minutes: Math.max(0, minutes),
    seconds: Math.max(0, seconds),
    expired: false,
  };
}
