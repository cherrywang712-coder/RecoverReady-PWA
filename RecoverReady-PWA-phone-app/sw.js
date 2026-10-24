const CACHE_NAME = 'recoverready-shell-v2';
const APP_SHELL = ['./', './index.html', './manifest.json', './icons/icon-192.png', './icons/icon-512.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('recoverready-shell-') && key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    if (request.mode === 'navigate') {
      try { const response = await fetch(request); if (response.ok) cache.put('./index.html', response.clone()); return response; }
      catch (_) { return (await cache.match(request)) || (await cache.match('./index.html')) || Response.error(); }
    }
    const cached = await cache.match(request);
    if (cached) return cached;
    try { const response = await fetch(request); if (response.ok) cache.put(request, response.clone()); return response; }
    catch (_) { return Response.error(); }
  })());
});
