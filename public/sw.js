// Service Worker for caching and performance optimization
const CACHE_NAME = 'gacha-wiki-v2.0.7';
const OFFLINE_URL = '/offline.html';

// Cache strategy: Cache first for assets, Network first for pages
const STATIC_ASSETS = [
  '/',
  '/about/',
  '/guides/',
  '/guides/zone-nova/',
  '/manifest.json',
  '/favicon-32x32.png',
  '/favicon-16x16.png',
  '/apple-touch-icon.png',
];

// Assets to cache
const CACHE_PATTERNS = [
  /\.(?:js|css|woff2?|png|jpg|jpeg|gif|svg|webp|avif)$/,
  /\/images\//,
  /\/assets\//,
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(STATIC_ASSETS);
    })
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

  // Handle static assets with cache-first strategy
  if (CACHE_PATTERNS.some(pattern => pattern.test(url.pathname))) {
    event.respondWith(
      caches.match(request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(request).then(response => {
          // Only cache successful responses
          if (response.status === 200) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(request, responseToCache);
            });
          }
          return response;
        });
      })
    );
    return;
  }
  // Handle pages with network-first strategy
  event.respondWith(
    (async () => {
      try {
        const response = await fetch(request);
        // Cache successful page responses
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
