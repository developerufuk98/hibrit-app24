/* Hibrit — çevrimdışı önbellek.
   Uygulama dosyaları cihazda saklanır; spor salonunda internet olmasa da açılır.
   Güncelleme yaptığında VERSION'ı değiştir, telefon yeni sürümü bir sonraki açılışta alır. */
const VERSION = "hibrit-v3";
const FILES = ["./", "./index.html", "./manifest.webmanifest",
  "./icons/icon-180.png", "./icons/icon-192.png", "./icons/icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
/* Önce cihazdaki kopya (anında açılır, zayıf çekimde takılmaz),
   arkada sessizce internetten günceller; yeni sürüm bir sonraki açılışta gelir. */
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(caches.open(VERSION).then(cache =>
    cache.match(e.request, { ignoreSearch: true }).then(hit => {
      const net = fetch(e.request).then(res => {
        if (res && res.ok) cache.put(e.request, res.clone());
        return res;
      }).catch(() => null);
      if (hit) { e.waitUntil(net); return hit; }
      return net.then(r => r || cache.match("./index.html"));
    })
  ));
});
