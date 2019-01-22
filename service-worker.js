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
    "revision": "6bbbe59ba21cf7770fbe3eb8b5325bee"
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
    "url": "assets/js/app.5bc60186.js",
    "revision": "148cf571f7de4adb9e75f4829928645f"
  },
  {
    "url": "index.html",
    "revision": "8219f70eb227bf4ee35cc052665ef064"
  },
  {
    "url": "webpack.png",
    "revision": "b8cffda2ad951731e4eec9b1e7372454"
  },
  {
    "url": "workshops/index.html",
    "revision": "16d9bc1b4afe840706dec57418762881"
  },
  {
    "url": "workshops/intermediate/dev.html",
    "revision": "fa7b96f18ac6bb4cf8ef98c6d606175d"
  },
  {
    "url": "workshops/intermediate/index.html",
    "revision": "e12c7dbf2f37fd143dfa5ea0a76b0230"
  },
  {
    "url": "workshops/novice/basics.html",
    "revision": "009a749a40c8c1ba160ce6d7266b5f6a"
  },
  {
    "url": "workshops/novice/code-assets.html",
    "revision": "1296bba51b55db8fb12e4bab28d62326"
  },
  {
    "url": "workshops/novice/index.html",
    "revision": "11deb86565ffe836bcd361e37389a223"
  },
  {
    "url": "workshops/novice/novice-koans.html",
    "revision": "aea0ecf795506a924c41f3c0ee8a2375"
  },
  {
    "url": "workshops/novice/outputs.html",
    "revision": "b82c0c7cbce3a5fbab4d552b36a2b656"
  },
  {
    "url": "workshops/novice/static-assets.html",
    "revision": "a6861142501a5195f00bbfbf6ed5ec66"
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
