// Memaksa Service Worker langsung memperbarui versi aplikasi & logo
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
  // Biarkan request mengambil data langsung dari jaringan secara realtime
});
