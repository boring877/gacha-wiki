// Homepage Games Configuration
// Centralized configuration for clock timers and showcase features

export const homepageGames = [
  {
    id: 'zone-nova',
    name: 'Zone Nova',
    description: 'Strategic RPG with stunning visuals and deep mechanics',
    image: '/images/games/zone-nova/zonenova1.jpg',
    url: '/guides/zone-nova/',
    resetHour: 20, // UTC time for daily reset
    resetMinute: 0, // UTC minute for daily reset
    timerDescription: 'Daily reset timer',
    features: ['30+ Characters', 'Active Rifts', 'Memory System', 'Strategic Combat'],
    active: true, // Show in clock and showcase
  },
  {
    id: 'silver-blood',
    name: 'Silver & Blood',
    description: 'Dark fantasy gacha with rich storytelling and immersive lore',
    image: '/images/games/silver-and-blood/main-images/silver-and-blood-main3.jpg',
    url: '/guides/silver-and-blood/',
    resetHour: 12, // UTC time for daily reset (20:00 UTC+8)
    resetMinute: 0, // UTC minute for daily reset
    timerDescription: 'Daily reset timer',
    features: ['35+ Heroes', 'Rich Story', "Dutchman's Revenge", 'Dark Fantasy'],
    active: true, // Show in clock and showcase
  },
  // Add more games here as needed
  // {
  //   id: 'game-id',
  //   name: 'Game Name',
  //   description: 'Game description',
  //   image: '/images/games/game-folder/image.jpg',
  //   url: '/guides/game-slug/',
  //   resetHour: 0, // UTC time (0-23)
  //   features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
  //   active: false // Set to true to show in clock and showcase
  // }
];

// Get only active games for display
export function getActiveHomepageGames() {
  return homepageGames.filter(game => game.active);
}

// Get games for clock display (can have different logic if needed)
export function getClockGames() {
  return getActiveHomepageGames();
}

// Get games for showcase display (can have different logic if needed)
export function getShowcaseGames() {
  return getActiveHomepageGames();
}
