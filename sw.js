/**
 * 青春音樂時光機 - Service Worker
 * 提供離線快取、快速加載與 PWA 安裝支援
 */

const CACHE_NAME = 'youth-music-v1';

const STATIC_ASSETS = [
  './',
  './index.html',
  './css/style.css',
  './js/data.js',
  './js/app.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  './icons/apple-touch-icon-180.png',
  './icons/favicon.png'
];

// 安裝階段：快取核心靜態檔案
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// 啟動階段：清理舊版本快取
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// 擷取階段：優先回應快取，背景更新 (Stale-While-Revalidate)
self.addEventListener('fetch', (event) => {
  // 只處理 GET 請求
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // 對於外部音樂平台跳轉連結（YouTube、Spotify、Apple Music）不進行快取攔截
  if (url.origin !== self.location.origin) {
    // 若為 Google Fonts 等 CDN，可快取優化體驗
    if (url.hostname.includes('googleapis.com') || url.hostname.includes('gstatic.com')) {
      event.respondWith(
        caches.open(CACHE_NAME).then((cache) => {
          return cache.match(event.request).then((cachedResponse) => {
            return (
              cachedResponse ||
              fetch(event.request).then((networkResponse) => {
                if (networkResponse.status === 200) {
                  cache.put(event.request, networkResponse.clone());
                }
                return networkResponse;
              }).catch(() => cachedResponse)
            );
          });
        })
      );
    }
    return;
  }

  // 本地資源：Cache-First 搭配網路回退
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // 背景嘗試抓取最新版本更新快取
        fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse);
            });
          }
        }).catch(() => {
          // 離線狀態靜默略過
        });
        return cachedResponse;
      }

      // 未命中快取時發起網路請求並存入快取
      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }

        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return networkResponse;
      }).catch(() => {
        // 離線回退
        if (event.request.headers.get('accept') && event.request.headers.get('accept').includes('text/html')) {
          return caches.match('./index.html');
        }
      });
    })
  );
});
