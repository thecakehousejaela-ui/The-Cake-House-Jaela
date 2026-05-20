const CACHE_NAME = 'cake-house-blogger-v1';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', e => {
  // Blogger සයිට් එකේ දේවල් සාමාන්‍ය විදිහට ලෝඩ් වෙන්න හරින්න
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
