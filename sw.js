const CACHE = 'wasteland-panzer-v3-1';
const FILES = ['index.html', 'training.html', 'supplements.html', 'quest.html', 'balance.html', 'data.html', 'log.html', 'manifest.json', 'icon-192.svg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(k => k !== CACHE).map(k => caches.delete(k))
  )));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(response => {
        // FIX 5: Only cache same-origin responses to avoid CORS errors
        if (response && response.status === 200 &&
            e.request.url.startsWith(self.location.origin)) {
          const clone = response.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return response;
      }).catch(() => {
        return caches.match(e.request) || caches.match('./index.html');
      });
    })
  );
});
