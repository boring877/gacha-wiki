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
      icon: ''
    }
  },
  {
    id: 'silver-and-blood',
    name: 'Silver & Blood',
    description: 'Dark fantasy gacha',
    image: '/images/games/silver-and-blood/main-images/silver-and-blood-main3.jpg',
    url: '/clock/silver-blood',
    themeColor: 'var(--sab-calm-red)',
    active: true,
    primaryTimer: {
      name: 'Daily Reset',
      type: 'daily',
      resetHour: 20, // UTC (APAC default)
      resetMinute: 0,
      icon: ''
    }
  }
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
  let targetTime = new Date();
  
  if (timer.type === 'daily') {
    targetTime.setUTCHours(timer.resetHour, timer.resetMinute || 0, 0, 0);
    
    // If reset time has passed today, set it for tomorrow
    if (targetTime <= now) {
      targetTime.setUTCDate(targetTime.getUTCDate() + 1);
    }
  }
  
  const timeDiff = targetTime.getTime() - now.getTime();
  
  if (timeDiff <= 0) {
    return { 
      hours: 0, 
      minutes: 0, 
      display: '0h 0m',
      expired: true 
    };
  }
  
  const hours = Math.floor(timeDiff / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  
  return {
    hours,
    minutes,
    display: `${hours}h ${minutes}m`,
    expired: false
  };
}