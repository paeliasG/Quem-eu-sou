self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('app').then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './style.css',
        './script.js'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
