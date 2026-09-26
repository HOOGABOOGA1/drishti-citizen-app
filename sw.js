// CivicEye BEL Mobile Platform Service Worker (Dashcam & Citizen App)
const CACHE_NAME = 'civiceye-bel-v3';
const ASSETS_TO_CACHE = [
  '/phone',
  '/citizen',
  '/static/manifest.json',
  '/static/citizen_manifest.json',
  '/static/assets/app_icon_192.png',
  '/static/assets/app_icon_512.png',
  '/static/assets/sample_pothole.jpg',
  '/static/assets/sample_repaired_road.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch(() => {});
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Pass-through API and dynamic camera posts
  if (event.request.url.includes('/api/')) {
    return;
  }
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
