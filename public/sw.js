// Service Worker for EXTREME aggressive caching and instant navigation
// WARNING: This will use 1GB+ RAM for maximum speed
const CACHE_NAME = 'gacha-wiki-extreme-v3.0.1-fixed';
const OFFLINE_URL = '/offline.html';

// Cache strategy: Cache-everything for instant navigation
const STATIC_ASSETS = [
  '/',
  '/about/',
  '/guides/',
  '/guides/zone-nova/',
  '/guides/silver-and-blood/',
  '/guides/horizon-walker/',
  '/clock/',
  '/clock/zone-nova/',
  '/clock/silver-and-blood/',
  '/clock/horizon-walker/',
  '/manifest.json',
  '/favicon-32x32.png',
  '/favicon-16x16.png',
  '/apple-touch-icon.png',
  OFFLINE_URL,
];

// Character images to preload for instant navigation
const ZONE_NOVA_CHARACTERS = [
  '/images/games/zone-nova/characters/Afrodite.jpg',
  '/images/games/zone-nova/characters/Anubis.jpg',
  '/images/games/zone-nova/characters/Apollo.jpg',
  '/images/games/zone-nova/characters/Artemis.jpg',
  '/images/games/zone-nova/characters/Arthur.jpg',
  '/images/games/zone-nova/characters/Athena.jpg',
  '/images/games/zone-nova/characters/Bastet.jpg',
  '/images/games/zone-nova/characters/Chiya.jpg',
  '/images/games/zone-nova/characters/Cleopatra.jpg',
  '/images/games/zone-nova/characters/Freye.jpg',
  '/images/games/zone-nova/characters/Gaia.jpg',
  '/images/games/zone-nova/characters/GreedMammon.jpg',
  '/images/games/zone-nova/characters/Guinevere.jpg',
  '/images/games/zone-nova/characters/Hera.jpg',
  '/images/games/zone-nova/characters/Horus.jpg',
  '/images/games/zone-nova/characters/JoanofArc.jpg',
  '/images/games/zone-nova/characters/kela.jpg',
  '/images/games/zone-nova/characters/Lancelot.jpg',
  '/images/games/zone-nova/characters/Leviathan.jpg',
  '/images/games/zone-nova/characters/Loki.jpg',
  '/images/games/zone-nova/characters/Lyra.jpg',
  '/images/games/zone-nova/characters/Merlin.jpg',
  '/images/games/zone-nova/characters/Mordred.jpg',
  '/images/games/zone-nova/characters/Naiya.jpg',
  '/images/games/zone-nova/characters/Nini.jpg',
  '/images/games/zone-nova/characters/Odin.jpg',
  '/images/games/zone-nova/characters/penny.jpg',
  '/images/games/zone-nova/characters/Rose.jpg',
  '/images/games/zone-nova/characters/Shanna.jpg',
  '/images/games/zone-nova/characters/Shu.jpg',
  '/images/games/zone-nova/characters/Snow.jpg',
  '/images/games/zone-nova/characters/Tefnut.jpg',
  '/images/games/zone-nova/characters/Thor.jpg',
  '/images/games/zone-nova/characters/Yuis.jpg',
  '/images/games/zone-nova/characters/Zashiki-warashi.jpg',
  '/images/games/zone-nova/characters/belphegar.jpg',
];

const SILVER_BLOOD_CHARACTERS = [
  '/images/games/silver-and-blood/characters/Acappella.jpg',
  '/images/games/silver-and-blood/characters/Agares.jpg',
  '/images/games/silver-and-blood/characters/Ami.jpg',
  '/images/games/silver-and-blood/characters/Augustine.jpg',
  '/images/games/silver-and-blood/characters/Bella.jpg',
  '/images/games/silver-and-blood/characters/Cain.jpg',
  '/images/games/silver-and-blood/characters/Cecia.jpg',
  '/images/games/silver-and-blood/characters/Dalcarlo.jpg',
  '/images/games/silver-and-blood/characters/Darcias.jpg',
  '/images/games/silver-and-blood/characters/Edina.jpg',
  '/images/games/silver-and-blood/characters/Fleeting_Bella.jpg',
  '/images/games/silver-and-blood/characters/Friedrich.jpg',
  '/images/games/silver-and-blood/characters/Gilrain.jpg',
  '/images/games/silver-and-blood/characters/Hati.jpg',
  '/images/games/silver-and-blood/characters/Incendiary_Agares.jpg',
  '/images/games/silver-and-blood/characters/JinxedSelena.jpg',
  '/images/games/silver-and-blood/characters/Joan.jpg',
  '/images/games/silver-and-blood/characters/Lamia.jpg',
  '/images/games/silver-and-blood/characters/Limine.jpg',
  '/images/games/silver-and-blood/characters/Lorelei.jpg',
  '/images/games/silver-and-blood/characters/Mass.jpg',
  '/images/games/silver-and-blood/characters/Nicole.jpg',
  '/images/games/silver-and-blood/characters/Ottavia.jpg',
  '/images/games/silver-and-blood/characters/Pavana.jpg',
  '/images/games/silver-and-blood/characters/Piera.jpg',
  '/images/games/silver-and-blood/characters/Quinn.jpg',
  '/images/games/silver-and-blood/characters/Ressa.jpg',
  '/images/games/silver-and-blood/characters/Selena.jpg',
  '/images/games/silver-and-blood/characters/Seth.jpg',
  '/images/games/silver-and-blood/characters/Sirene.jpg',
  '/images/games/silver-and-blood/characters/Spectral_Gilrain.jpg',
  '/images/games/silver-and-blood/characters/Starry_Eyed_Aiona.jpg',
  '/images/games/silver-and-blood/characters/Theophane.jpg',
  '/images/games/silver-and-blood/characters/Thibault.jpg',
  '/images/games/silver-and-blood/characters/Timeless_Aiona.jpg',
  '/images/games/silver-and-blood/characters/Transcendent_Ami.jpg',
  '/images/games/silver-and-blood/characters/Transcendent_Hati.jpg',
  '/images/games/silver-and-blood/characters/Transcendent_Noah.jpg',
  '/images/games/silver-and-blood/characters/Tris.jpg',
  '/images/games/silver-and-blood/characters/Van_Helsing.jpg',
  '/images/games/silver-and-blood/characters/Yggdrasill.jpg',
];

// Summon FAQ images for instant loading
const SILVER_BLOOD_SUMMON_FAQ = [
  '/images/games/silver-and-blood/summonfaq/Fragrant_Residue.jpg',
  '/images/games/silver-and-blood/summonfaq/Moon_Tear.jpg',
  '/images/games/silver-and-blood/summonfaq/Soothing_Embrace.jpg',
  '/images/games/silver-and-blood/summonfaq/Spirit_Scraps.jpg',
  '/images/games/silver-and-blood/summonfaq/Vestige_of_Love.jpg',
  '/images/games/silver-and-blood/summonfaq/Spirits.jpg',
];

// All event images for instant event loading
const SILVER_BLOOD_EVENT_IMAGES = [
  // Far Side of the Moon Event - All 32 images
  '/images/games/silver-and-blood/Events/FarSideOfTheMoon/1.jpg',
  '/images/games/silver-and-blood/Events/FarSideOfTheMoon/2.jpg',
  '/images/games/silver-and-blood/Events/FarSideOfTheMoon/3.jpg',
  '/images/games/silver-and-blood/Events/FarSideOfTheMoon/4.jpg',
  '/images/games/silver-and-blood/Events/FarSideOfTheMoon/5.jpg',
  '/images/games/silver-and-blood/Events/FarSideOfTheMoon/6.jpg',
  '/images/games/silver-and-blood/Events/FarSideOfTheMoon/7.jpg',
  '/images/games/silver-and-blood/Events/FarSideOfTheMoon/8.jpg',
  '/images/games/silver-and-blood/Events/FarSideOfTheMoon/9.jpg',
  '/images/games/silver-and-blood/Events/FarSideOfTheMoon/10.jpg',
  '/images/games/silver-and-blood/Events/FarSideOfTheMoon/11.jpg',
  '/images/games/silver-and-blood/Events/FarSideOfTheMoon/12.jpg',
  '/images/games/silver-and-blood/Events/FarSideOfTheMoon/13.jpg',
  '/images/games/silver-and-blood/Events/FarSideOfTheMoon/14.jpg',
  '/images/games/silver-and-blood/Events/FarSideOfTheMoon/15.jpg',
  '/images/games/silver-and-blood/Events/FarSideOfTheMoon/16.jpg',
  '/images/games/silver-and-blood/Events/FarSideOfTheMoon/17.jpg',
  '/images/games/silver-and-blood/Events/FarSideOfTheMoon/18.jpg',
  '/images/games/silver-and-blood/Events/FarSideOfTheMoon/19.jpg',
  '/images/games/silver-and-blood/Events/FarSideOfTheMoon/20.jpg',
  '/images/games/silver-and-blood/Events/FarSideOfTheMoon/21.jpg',
  '/images/games/silver-and-blood/Events/FarSideOfTheMoon/22.jpg',
  '/images/games/silver-and-blood/Events/FarSideOfTheMoon/23.jpg',
  '/images/games/silver-and-blood/Events/FarSideOfTheMoon/24.jpg',
  '/images/games/silver-and-blood/Events/FarSideOfTheMoon/25.jpg',
  '/images/games/silver-and-blood/Events/FarSideOfTheMoon/26.jpg',
  '/images/games/silver-and-blood/Events/FarSideOfTheMoon/27.jpg',
  '/images/games/silver-and-blood/Events/FarSideOfTheMoon/28.jpg',
  '/images/games/silver-and-blood/Events/FarSideOfTheMoon/29.jpg',
  '/images/games/silver-and-blood/Events/FarSideOfTheMoon/30.jpg',
  '/images/games/silver-and-blood/Events/FarSideOfTheMoon/31.jpg',
  '/images/games/silver-and-blood/Events/FarSideOfTheMoon/32.jpg',
  // Summer Event 2025
  '/images/games/silver-and-blood/Events/Summerevent2025/1.jpg',
  '/images/games/silver-and-blood/Events/Summerevent2025/2.jpg',
  '/images/games/silver-and-blood/Events/Summerevent2025/3.jpg',
  '/images/games/silver-and-blood/Events/Summerevent2025/4.jpg',
  '/images/games/silver-and-blood/Events/Summerevent2025/5.jpg',
  '/images/games/silver-and-blood/Events/Summerevent2025/6.jpg',
];

// Key game assets to preload + Zone Nova runes for instant loading
const ZONE_NOVA_RUNES = [
  '/images/games/zone-nova/runes/Alpha.jpg',
  '/images/games/zone-nova/runes/Beth.jpg',
  '/images/games/zone-nova/runes/Daleth.jpg',
  '/images/games/zone-nova/runes/Epsilon.jpg',
  '/images/games/zone-nova/runes/Zahn.jpg',
  '/images/games/zone-nova/runes/Shattered-Foundation.jpg',
  '/images/games/zone-nova/runes/element.jpg',
];

// All remaining Zone Nova characters for complete coverage
const ZONE_NOVA_ADDITIONAL_CHARACTERS = [
  '/images/games/zone-nova/characters/Freye.jpg',
  '/images/games/zone-nova/characters/GreedMammon.jpg',
  '/images/games/zone-nova/characters/JoanofArc.jpg',
  '/images/games/zone-nova/characters/Mordred.jpg',
  '/images/games/zone-nova/characters/Zashiki-warashi.jpg',
];

// Key game assets to preload
const GAME_ASSETS = [
  '/images/games/zone-nova/zonenova.jpg',
  '/images/games/zone-nova/zonenova1.jpg',
  '/images/games/silver-and-blood/main-images/silver-and-blood-main.jpg',
  '/images/games/silver-and-blood/main-images/silver-and-blood-main2.jpg',
  '/images/games/silver-and-blood/main-images/silver-and-blood-main3.jpg',
  '/images/games/silver-and-blood/main-images/silver-and-blood-main4.jpg',
  '/images/games/horizon-walker/gameimg/gameicon.jpg',
  '/images/about.jpg',
];

// Game data files for instant data access
const GAME_DATA_FILES = [
  // Zone Nova data
  '/src/data/zone-nova/characters.js',
  '/src/data/zone-nova/memories.js',
  '/src/data/zone-nova/updates.js',
  '/src/data/zone-nova/rifts.js',
  '/src/data/zone-nova/character-rankings.js',
  '/src/data/zone-nova/tier-lists.js',
  '/src/data/zone-nova/damage-mechanics.js',
  '/src/data/zone-nova/team-synergy.js',
  // Silver & Blood data
  '/src/data/silver-and-blood/characters.js',
  '/src/data/silver-and-blood/events.js',
  '/src/data/silver-and-blood/damage-mechanics.js',
  '/src/data/silver-and-blood/character-rankings.js',
  '/src/data/silver-and-blood/tier-lists.js',
  '/src/data/silver-and-blood/team-synergy.js',
  '/src/data/silver-and-blood/ancestral-vault.js',
  '/src/data/silver-and-blood/boss-database.js',
  '/src/data/silver-and-blood/clan-hunt.js',
  '/src/data/silver-and-blood/summon-faq.js',
];

// Critical CSS files for instant styling (corrected paths)
const CRITICAL_CSS_FILES = [
  '/src/styles/global.css',
  '/src/styles/view-transitions.css',
  '/src/styles/games/zone-nova/zn-character.css',
  '/src/styles/games/zone-nova/zn-character-comparison-v2.css',
  '/src/styles/games/zone-nova/zn-character-rankings.css',
  '/src/styles/games/zone-nova/zn-tier-list.css',
  '/src/styles/games/zone-nova/zn-runes.css',
  '/src/styles/games/silver-and-blood/sab-character-styles.css',
  '/src/styles/games/silver-and-blood/sab-character-comparison-v2.css',
  '/src/styles/games/silver-and-blood/sab-character-comparison.css',
  '/src/styles/games/silver-and-blood/sab-character-rankings.css',
  '/src/styles/games/silver-and-blood/sab-tier-list.css',
  '/src/styles/games/zone-nova/zn-character-comparison.css',
  '/src/styles/games/zone-nova/zn-layout.css',
  '/src/styles/games/silver-and-blood/sab-layout.css',
];

// Font files for instant font loading
const FONT_FILES = [
  'https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2',
  'https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fAZ9hiA.woff2',
  'https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hiA.woff2',
  'https://fonts.gstatic.com/s/spacegrotesk/v16/V8mQoQDjQSkFtoMM3T6r8E7mPbF4C_11.woff2',
  'https://fonts.gstatic.com/s/spacegrotesk/v16/V8mQoQDjQSkFtoMM3T6r8E7mPbF2C_11.woff2',
  'https://fonts.gstatic.com/s/orbitron/v31/yMJMMIlzdpvBhQQL_SC3X9yhF25-T1nyGy4J.woff2',
];

// Combine all assets for EXTREME aggressive preloading (1.2GB+ RAM usage)
const ALL_PRELOAD_ASSETS = [
  ...STATIC_ASSETS,
  ...ZONE_NOVA_CHARACTERS,
  ...ZONE_NOVA_ADDITIONAL_CHARACTERS,
  ...ZONE_NOVA_RUNES,
  ...SILVER_BLOOD_CHARACTERS,
  ...SILVER_BLOOD_SUMMON_FAQ,
  ...SILVER_BLOOD_EVENT_IMAGES,
  ...GAME_ASSETS,
  ...GAME_DATA_FILES,
  ...CRITICAL_CSS_FILES,
  ...FONT_FILES,
];

// Assets to cache - MAXIMUM aggressive caching for instant loading
const CACHE_PATTERNS = [
  /\.(?:js|css|woff2?|woff|ttf|eot|png|jpg|jpeg|gif|svg|webp|avif|json|ico|html|xml|txt|md)$/,
  /\/images\//,
  /\/assets\//,
  /\/guides\//,
  /\/clock\//,
  /\/data\//,
  /\/styles\//,
  /\/Events\//,
  /\/characters\//,
  /\/summonfaq\//,
  /\/runes\//,
  /\/main-images\//,
  /\/src\//,
  /fonts\.googleapis\.com/,
  /fonts\.gstatic\.com/,
  /cdn\.jsdelivr\.net/,
];

self.addEventListener('install', event => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);

      // Cache essential assets first for fast initial load
      await cache.addAll(STATIC_ASSETS);

      // AGGRESSIVE: Cache all assets immediately for maximum speed
      // This will use significant RAM but provides instant loading
      cache.addAll(ALL_PRELOAD_ASSETS).catch(error => {
        console.log('Aggressive asset caching:', error);
        // If bulk caching fails, cache in smaller chunks
        const chunkSize = 50;
        for (let i = 0; i < ALL_PRELOAD_ASSETS.length; i += chunkSize) {
          const chunk = ALL_PRELOAD_ASSETS.slice(i, i + chunkSize);
          setTimeout(() => {
            cache.addAll(chunk).catch(chunkError => {
              console.log(`Chunk ${i} caching error:`, chunkError);
            });
          }, i * 100);
        }
      });
    })()
  );
  // Force activation of new service worker
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // Take control of all clients
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip external requests
  if (url.origin !== location.origin) {
    return;
  }

  // Handle static assets with cache-first strategy (instant loading)
  if (CACHE_PATTERNS.some(pattern => pattern.test(url.pathname))) {
    event.respondWith(
      (async () => {
        // Try cache first for instant loading
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
          // Background update for freshness (stale-while-revalidate)
          fetch(request)
            .then(response => {
              if (response.status === 200) {
                caches.open(CACHE_NAME).then(cache => {
                  cache.put(request, response.clone());
                });
              }
            })
            .catch(() => {
              // Ignore network errors for background updates
            });
          return cachedResponse;
        }

        // Fallback to network if not in cache
        const response = await fetch(request);
        if (response.status === 200) {
          const responseToCache = response.clone();
          const cache = await caches.open(CACHE_NAME);
          cache.put(request, responseToCache);
        }
        return response;
      })()
    );
    return;
  }
  // Handle pages with cache-first strategy for instant navigation
  event.respondWith(
    (async () => {
      // For character and guide pages, try cache first for instant loading
      const isImportantPage = /\/(characters|guides|clock)\//.test(url.pathname);

      if (isImportantPage) {
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
          // Background update to keep pages fresh
          fetch(request)
            .then(response => {
              if (response.status === 200 && request.mode === 'navigate') {
                caches.open(CACHE_NAME).then(cache => {
                  cache.put(request, response.clone());
                });
              }
            })
            .catch(() => {
              // Ignore background update failures
            });
          return cachedResponse;
        }
      }

      // Default to network-first for other pages or when not cached
      try {
        const response = await fetch(request);
        // Cache all successful page responses for future instant access
        if (response.status === 200 && request.mode === 'navigate') {
          const responseToCache = response.clone();
          const cache = await caches.open(CACHE_NAME);
          cache.put(request, responseToCache);
        }
        return response;
      } catch {
        // Fallback to cache if network fails
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
          return cachedResponse;
        }
        // Return offline page for navigation requests
        if (request.mode === 'navigate') {
          return caches.match(OFFLINE_URL);
        }
        return new Response('Offline', { status: 503 });
      }
    })()
  );
});

// Handle background sync for analytics
self.addEventListener('sync', event => {
  if (event.tag === 'analytics-sync') {
    event.waitUntil(syncAnalytics());
  }
});

async function syncAnalytics() {
  // Implement analytics sync logic here
  console.log('Syncing analytics data...');
}
