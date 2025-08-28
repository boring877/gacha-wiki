// Simple HW Service Worker - Cache what actually exists
const CACHE_NAME = 'horizon-walker-v1.1.0';

// Only cache assets that actually exist in both dev and prod
const HW_ESSENTIAL_ASSETS = [
  // HW Pages (these exist)
  '/',
  '/guides/horizon-walker/',
  '/clock/horizon-walker/',

  // HW Character images (these exist)
  '/images/games/horizon-walker/characters/Canisk.jpg',
  '/images/games/horizon-walker/characters/Erneste.jpg',
  '/images/games/horizon-walker/characters/Everette.jpg',
  '/images/games/horizon-walker/characters/Gridelda.jpg',
  '/images/games/horizon-walker/characters/Kalina.jpg',
  '/images/games/horizon-walker/characters/Kilon.jpg',
  '/images/games/horizon-walker/characters/Min_Eun_sol.jpg',
  '/images/games/horizon-walker/characters/Olivia.jpg',
  '/images/games/horizon-walker/characters/Osla.jpg',
  '/images/games/horizon-walker/characters/Platina.jpg',
  '/images/games/horizon-walker/characters/Yeon_Chae-Young.jpg',

  // HW Weapon images (these exist)
  '/images/games/horizon-walker/weapons/Everette_WP.jpg',
  '/images/games/horizon-walker/weapons/Gridelda_WP.jpg',
  '/images/games/horizon-walker/weapons/Kalina_WP.jpg',
  '/images/games/horizon-walker/weapons/Kilon_WP.jpg',
  '/images/games/horizon-walker/weapons/Min_Eun_sol_WP.jpg',
  '/images/games/horizon-walker/weapons/Olivia_WP.jpg',
  '/images/games/horizon-walker/weapons/Osla_WP.jpg',
  '/images/games/horizon-walker/weapons/Platina_WP.jpg',

  // Game images (these exist)
  '/images/games/horizon-walker/gameimg/gameicon.jpg',
  '/images/games/horizon-walker/gameimg/1.png',
  '/images/games/horizon-walker/gameimg/2.png',
  '/images/games/horizon-walker/gameimg/3.png',
  '/images/games/horizon-walker/gameimg/4.png',

  // Essential fonts
  'https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2',
];

// Install event - cache all HW assets for instant navigation
self.addEventListener('install', event => {
  console.log('🎮 HW Service Worker installing');
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(cache => {
        console.log(`📦 Pre-caching ${HW_ESSENTIAL_ASSETS.length} HW assets`);
        // Add assets one by one, skip if they fail
        return Promise.allSettled(
          HW_ESSENTIAL_ASSETS.map(url =>
            cache.add(url).catch(err => console.warn('Skip cache:', url, err.message))
          )
        );
      })
      .then(() => {
        console.log('✅ HW SW installed');
        self.skipWaiting();
      })
      .catch(error => console.error('❌ HW SW install failed:', error))
  );
});

// Activate event - cleanup old caches
self.addEventListener('activate', event => {
  console.log('🎮 Horizon Walker SW activated');
  event.waitUntil(
    caches
      .keys()
      .then(cacheNames =>
        Promise.all(
          cacheNames
            .filter(
              cacheName => cacheName.startsWith('horizon-walker-') && cacheName !== CACHE_NAME
            )
            .map(cacheName => caches.delete(cacheName))
        )
      )
      .then(() => self.clients.claim())
  );
});

// Fetch event - cache-first strategy for instant navigation
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle same-origin requests and fonts
  if (url.origin !== self.location.origin && !url.hostname.includes('fonts.g')) {
    return;
  }

  // HW-specific routes get aggressive caching
  if (
    url.pathname.includes('/horizon-walker/') ||
    url.pathname.includes('/guides/horizon-walker') ||
    url.pathname.includes('/clock/horizon-walker') ||
    url.pathname.includes('/hw-') ||
    url.pathname.includes('/images/games/horizon-walker/')
  ) {
    event.respondWith(
      caches
        .match(request)
        .then(cachedResponse => {
          if (cachedResponse) {
            console.log('⚡ Cache hit:', url.pathname);
            return cachedResponse;
          }

          // Network fallback with caching
          return fetch(request).then(response => {
            if (!response.ok) throw new Error(`Network error: ${response.status}`);

            const responseClone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(request, responseClone));

            return response;
          });
        })
        .catch(() => caches.match(OFFLINE_URL))
    );
  } else {
    // Standard caching for other resources
    event.respondWith(
      caches
        .match(request)
        .then(cachedResponse => cachedResponse || fetch(request))
        .catch(() => caches.match(OFFLINE_URL))
    );
  }
});

// Background sync for offline actions
self.addEventListener('sync', event => {
  if (event.tag === 'hw-background-sync') {
    event.waitUntil(
      // Handle any offline actions when back online
      console.log('🔄 HW background sync triggered')
    );
  }
});

console.log('🎮 Horizon Walker Service Worker loaded - ready for instant navigation!');
