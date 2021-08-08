'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "804cde440038f4fab7f347860896b2b9",
"index.html": "70904c2d0f149d7f56ef6d6a712c2cdc",
"/": "70904c2d0f149d7f56ef6d6a712c2cdc",
"main.dart.js": "bc1cf4bc7dc15e2091c3544139fcca75",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c0ca8fbfea3900395bcd44a3a54ae1c4",
".git/ORIG_HEAD": "470ca323bcfb3168bc4b8e9534b2ba06",
".git/config": "dcab72d5e3ca211209aa5c686ff50489",
".git/objects/0c/d5aba5ca7b6e1798a280e53a333f04e3147a40": "8e06efcbd0a13cd4b3e5b9e9c517fa9f",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/56/cb34b7f8bb9dfda46cb113ab3ed7677518d641": "e428c355ab4ee88e955cdd6288a897d4",
".git/objects/93/d74e4fdfac8a78c8966c7930a492c3c856ae14": "209665b68b478b99e60ad00349fe2b5c",
".git/objects/60/48620b540cefb67933521f17a1ed11edb6ff05": "52300020fc9c2d7b7f144b323626e672",
".git/objects/34/2b739af4b6f8e75f381a196ca791ebc5f6b057": "3d79355084bbf15da148c039323b484b",
".git/objects/9d/cc54211004b2c9a6d01168eb6b3bd2403bd1ba": "395b458e32bec4d1ca6cdad5ff105666",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
".git/objects/bd/72d765c3c84a5ddaa5717b62a90d073bc9e71c": "672f184e851d68ac71894b373f9fed12",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/c6/050d3d72ec4ced3cbacc2f300e54e82f5e473e": "bee38e7b5477255f37b17232aea5ce01",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/72/7314779205df3f3f9c1f5214b79d90ae8ce7d5": "f7f4d5c7ef1d72c841fcd845a037c2e6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/37/e45826ccd7b527b159021253d0ae94592b6324": "3a75b0ef725bff8104ef26deef63b180",
".git/objects/37/bb108064d0d713682870a9fcae82261f55d676": "fd98e13b66ec2f74e9fddf4337456f24",
".git/objects/aa/ee7131a199a700f5965a807efcd923a87ae1b3": "418dfe6a87b35bfc3028f19b64c1eda2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e8/b94ed84c55c05c9e2a80f780c52abd576e4b95": "9bcd5de00c68642e0ef87acfa4e16dbe",
".git/objects/e0/296edf75cd01a8529d1cc4de9e3ef00ddcb708": "2980c77fe575487d0878e16737377210",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/1e/29669fdbce196fa3bf5cd9a73fbc48737f69c1": "2ec8c6409b48987d99478d7b940c26e9",
".git/objects/1d/f83d70aa48cc2b372eb59017868f4d0f9fa3c8": "fd6844781e125aebda54b3594c95ac5a",
".git/objects/71/1fd684ded5963a8fb0d94f0d6fd0f15c323f9f": "8925761e70faab99396c9e9362342ce7",
".git/objects/2e/04cac5587eb3bdb88328d0c9ef945e79df52dd": "edc90ef997d97d8777904980b49143a3",
".git/objects/8e/a2cbd2c0ad13448572f639cc2e49211b42e0ab": "6ccf383f23e7229a5e2e311fa7c303c8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a7bf3a2cfe0b70155f343427734b50a4",
".git/logs/refs/heads/main": "a7bf3a2cfe0b70155f343427734b50a4",
".git/logs/refs/remotes/origin/main": "6c07628c3cb0925d6efb81bb87af9b3f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/refs/heads/main": "dad75540850464ebb2cf29fc913c40b2",
".git/refs/remotes/origin/main": "dad75540850464ebb2cf29fc913c40b2",
".git/index": "4d989d1bb118776a531a5b2c0fb00e90",
".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/FETCH_HEAD": "2effb2569a341331d97b3d1b9af75916",
"assets/AssetManifest.json": "466e1ff14ec445a2f6b5578be5c72370",
"assets/NOTICES": "85d15f90a6dca5d731c128857b82acb3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/Vector.png": "6a34d934685b40686fd11dc4a2cf5144",
"assets/assets/images/logo.png": "13c4aac95f7ee530765baee16758fbf8",
"assets/assets/images/Frame.png": "584defe56d653cd31d7470d6843c0a67"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
