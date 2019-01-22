/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "cc3de5ae06e03f3961e31e95511dcc37"
  },
  {
    "url": "assets/css/0.styles.98e9d09f.css",
    "revision": "7710e3731cb6a17ca216f61b6f241790"
  },
  {
    "url": "assets/img/elias-arnar-1309173-unsplash.9f515127.jpg",
    "revision": "9f515127f88325714cbe59740f5b99bc"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2196e543.js",
    "revision": "e9af2232cdcd83a9f17f757fb32f4869"
  },
  {
    "url": "assets/js/11.0e8aa73a.js",
    "revision": "3d21b3e0d75ba9fba8288474025858c0"
  },
  {
    "url": "assets/js/12.c2215e05.js",
    "revision": "948ac4af0704fe55cd2b0d334b6fd371"
  },
  {
    "url": "assets/js/13.7004b56f.js",
    "revision": "d5d7797d2432b32f87b3d09c38e018f5"
  },
  {
    "url": "assets/js/2.83b44d2f.js",
    "revision": "e43022a54e9006f030812fafd79af1d1"
  },
  {
    "url": "assets/js/3.e91540fe.js",
    "revision": "629f1822c9e42a4a13b12fcd702a5ecb"
  },
  {
    "url": "assets/js/4.7d56a664.js",
    "revision": "8209604e33b84d43412636f8eaf88f3c"
  },
  {
    "url": "assets/js/5.ffb58344.js",
    "revision": "445c60016ca4a6bde41008e2130a7dc2"
  },
  {
    "url": "assets/js/6.5bc0512f.js",
    "revision": "c64dd1833c8ada6daf7a12b3bcbf15f2"
  },
  {
    "url": "assets/js/7.fb4204c2.js",
    "revision": "45980cfb826c5ff9a6748ef640fdd153"
  },
  {
    "url": "assets/js/8.cd30e278.js",
    "revision": "1bd8932b497e30a8975229a6282ba08c"
  },
  {
    "url": "assets/js/9.f88fca14.js",
    "revision": "29d3dfc4bf130cbd0541ca464262f725"
  },
  {
    "url": "assets/js/app.f48ed4de.js",
    "revision": "5bc30454fcb3e8012983201726a36265"
  },
  {
    "url": "index.html",
    "revision": "30462f68b92369ae87a7a7a0669ef7db"
  },
  {
    "url": "webpack.png",
    "revision": "b8cffda2ad951731e4eec9b1e7372454"
  },
  {
    "url": "workshops/index.html",
    "revision": "f180f0730c2fe3ca4b0191e7798afaf1"
  },
  {
    "url": "workshops/intermediate/dev.html",
    "revision": "7cc07be0c26a93bdd699221804403d19"
  },
  {
    "url": "workshops/intermediate/index.html",
    "revision": "3ae3812cdaa447ac568ad3780a40df31"
  },
  {
    "url": "workshops/novice/basics.html",
    "revision": "84961453526b3b9ea2bc82c8a18374d9"
  },
  {
    "url": "workshops/novice/code-assets.html",
    "revision": "d31892d1a0bc199e782ebf35e6848518"
  },
  {
    "url": "workshops/novice/index.html",
    "revision": "6c785f0c9b987ed1806473d913d5ffaa"
  },
  {
    "url": "workshops/novice/novice-koans.html",
    "revision": "c8438d408d64c3c7b2c1d1c5b70952c7"
  },
  {
    "url": "workshops/novice/outputs.html",
    "revision": "73db87eb14b0d389baf392e214767311"
  },
  {
    "url": "workshops/novice/static-assets.html",
    "revision": "35d78547a15b2a44775e637542b44d6b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
