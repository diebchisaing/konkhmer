'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7826bc1e8a1b3ff59b8efd4ba89955d2",
"version.json": "ce5702d7cd54fdafd93caa1a1f5d134e",
"index.html": "9139d80687da7a8389f3acba89cba562",
"/": "9139d80687da7a8389f3acba89cba562",
"main.dart.js": "d2937cc57982adb662aa0bf134f55639",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "da41d691f6e5df10ca497044f1e5ff5c",
"assets/AssetManifest.json": "5fa0dbfad7e84301057b2812dd6860ae",
"assets/NOTICES": "e4d93d80cd5cf97dbe6e12947ddb6f9c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "27c9bf55728f7175ee54c24b5f8294b4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/lib/assets/pp_more/Bassac_lane.jpg": "f08d4aeaa2d7e23052d2a648d0f6295f",
"assets/lib/assets/pp_more/national_muserm.png": "6a4274501e09b439a05734126e2e69d9",
"assets/lib/assets/pp_more/wat_pnhom.png": "25d486bdc8399ab17129a89143613476",
"assets/lib/assets/pp_more/royal_palace.png": "7bb88a41f71c4c5d1b1852a4d970a700",
"assets/lib/assets/angkorwat.png": "4982a17913008512250877699512a268",
"assets/lib/assets/pnhom_penh.png": "5e26b9a7c46f931ceddb2b753fed9c50",
"assets/lib/assets/main_bg.png": "43416149bec60c7a264eed18d09ee838",
"assets/lib/assets/siemreab/pub_street.png": "86505164393147615c5fe3c785747553",
"assets/lib/assets/siemreab/Kampong_Phluk.png": "fe993c2953ccca0fc3e2a056473131a6",
"assets/lib/assets/siemreab/angkorwat.png": "4982a17913008512250877699512a268",
"assets/lib/assets/siemreab/pnhom_kulen.png": "f364e70b0045c35cb161dccbe7f68628",
"assets/lib/assets/kompot.png": "4a4404660b7e3110940dbf6516f967fb",
"assets/lib/assets/sihanuk_ville/ream_national_park.png": "1dbb9f3bc52581611cc6c94d7cccb4c9",
"assets/lib/assets/sihanuk_ville/koh_rong_sonlim.png": "27bf662eab2d742bbc4a6487177a0ff2",
"assets/lib/assets/sihanuk_ville/koh_rong.png": "3f67b202279c6655a8f1c64e55ee4a21",
"assets/lib/assets/sihanuk_ville/otres_beach.png": "a5c2746e0611ebe4952e26463e531264",
"assets/lib/assets/koh_rong.png": "dfe41e5d5bb269cc58643fce3e782102",
"assets/lib/assets/Kompot/teuk_chhou.png": "96283534f78519e0166d12ea4a59e8c0",
"assets/lib/assets/Kompot/tada.png": "8d8df32d99c9bff41548d24baff3283d",
"assets/lib/assets/Kompot/bokor.png": "45a3a38518d1d348adb01e8f3d9d420b",
"assets/lib/assets/Kompot/KEP.png": "d252c8109b8563762c704ffd2f724681",
"assets/lib/assets/sihanuk_ville.png": "17daa126bb6eacfbde2e5d894416abcd",
"assets/lib/assets/siem_reab.png": "7123fbad25fa929b054c844134be0f56",
"assets/AssetManifest.bin": "8232f0638360a2fb03c74f822d287b3b",
"assets/fonts/MaterialIcons-Regular.otf": "7c22d69c0ab46ec3cf79fe64087a0177",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
