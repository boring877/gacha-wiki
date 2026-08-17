// Clock Landing Games Data
// Live fields only: id, name, description, image, url, themeColor, active.
// (Timer config + calculatePreviewTime previously here were dead — no consumer read them.)

export const clockLandingGames = [
  {
    id: 'taimanin-squad',
    name: 'Taimanin Squad',
    description: 'Action RPG - Game Launch',
    image: '', // Image will be imported directly in the Astro page
    url: '/clock/taimanin-squad',
    themeColor: 'var(--ts-accent)',
    active: true,
  },
  {
    id: 'zone-nova',
    name: 'Zone Nova',
    description: 'Strategic RPG with Waifus',
    image: '/images/games/zone-nova/zonenova1.jpg',
    url: '/clock/zone-nova',
    themeColor: 'var(--zn-primary-amber)',
    active: true,
  },
  {
    id: 'silver-and-blood',
    name: 'Silver & Blood',
    description: 'Dark fantasy gacha',
    image: '/images/games/silver-and-blood/main-images/silver-and-blood-main3.jpg',
    url: '/clock/silver-and-blood',
    themeColor: 'var(--sab-calm-red)',
    active: true,
  },
  {
    id: 'horizon-walker',
    name: 'Horizon Walker',
    description: 'Post-apocalyptic RPG',
    image: '', // Image will be imported directly in the Astro page
    url: '/clock/horizon-walker',
    themeColor: 'var(--hw-primary-warm)',
    active: true,
  },
  {
    id: 'stella-sora',
    name: 'Stella Sora',
    description: 'Fantasy RPG with Trekkers',
    image: '/images/games/stella-sora/gameimg/Banner.jpg',
    url: '/clock/stella-sora',
    themeColor: 'var(--ss-primary)',
    active: true,
  },
  {
    id: 'star-savior',
    name: 'Star Savior',
    description: 'Tactical RPG with Saviors',
    image: '/images/games/star-savior/icon.png',
    url: '/clock/star-savior',
    themeColor: 'var(--ss-primary)',
    active: true,
  },
  {
    id: 'busty-burst',
    name: 'Busty Burst Fantasy',
    description: 'Adult fantasy RPG',
    image: '', // Image will be imported directly in the Astro page
    url: '/clock/busty-burst',
    themeColor: 'var(--bb-primary)',
    active: true,
  },
  {
    id: 'last-origin-global',
    name: 'Last Origin',
    description: 'Global Pre-Registration',
    image: '', // Image will be imported directly in the Astro page
    url: '/clock/last-origin-global',
    themeColor: '#f4a261',
    active: true,
  },
  {
    id: 'majo',
    name: 'MAJO: Witches Night',
    description: 'R18 witch-contract strategy gacha',
    image: 'https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/majo/icon.webp',
    url: '/clock/majo',
    themeColor: '#8577a8',
    active: true,
  },
];

/**
 * Get all active games for the landing page
 * @returns {Array} Active games
 */
export function getActiveLandingGames() {
  return clockLandingGames.filter(game => game.active);
}
