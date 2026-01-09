const cacheName = "hello-beautiful-v1";
const filesToCache = [
  "./",
  "./index.html",
  "./taz.gif",
  "./manifest.json",
  "./style.css"  // optional if you move CSS to separate file
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(filesToCache))
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
