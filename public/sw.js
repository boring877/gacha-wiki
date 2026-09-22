// Kill-switch service worker: purges caches left behind by the retired 2025
// "extreme caching" worker and unregisters itself. No page registers service
// workers anymore, so this only ever activates on stale installations.
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      for (const name of await caches.keys()) {
        await caches.delete(name);
      }
      await self.clients.claim();
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: 'window' });
      for (const client of clients) {
        if (client.url) {
          try {
            await client.navigate(client.url);
          } catch {}
        }
      }
    })()
  );
});
