const CACHE_NAME = 'cakehouse-v1';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// බ්ලොගර් එකෙන් එන Request වලට Cross-Origin අවසර දීම
self.addEventListener('fetch', (event) => {
    if (event.request.mode === 'navigate') {
        event.respondWith(fetch(event.request));
    }
});
