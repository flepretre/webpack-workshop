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
    "revision": "b0d04496c6af02fa675766ba24b10309"
  },
  {
    "url": "assets/css/0.styles.446b2bb4.css",
    "revision": "4314c1c4356828b1865c269a2881831d"
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
    "url": "assets/js/10.2dfc897d.js",
    "revision": "26c7d667eda71e5a4447fc295aced34b"
  },
  {
    "url": "assets/js/11.3707c5b0.js",
    "revision": "232fd573c08afcebb61098810c7bed6a"
  },
  {
    "url": "assets/js/12.dd0eb162.js",
    "revision": "919afc3d5efeda18de393c7697738f0e"
  },
  {
    "url": "assets/js/13.d479527f.js",
    "revision": "6f36f5a15c1e36f0478e04ed2715d1ea"
  },
  {
    "url": "assets/js/14.d8e93366.js",
    "revision": "86a27a6d46aece321a077953788d08b3"
  },
  {
    "url": "assets/js/3.45ce1c89.js",
    "revision": "f3d60492185ecd5365226fb3dc38cf6e"
  },
  {
    "url": "assets/js/4.6bb2ea8f.js",
    "revision": "81d4851ed13a72d4d6dd3edf84d1bd7c"
  },
  {
    "url": "assets/js/5.28eedbfe.js",
    "revision": "f24c71abbe1c82899276175d6442741d"
  },
  {
    "url": "assets/js/6.680191ef.js",
    "revision": "1ea9b59ee44d1db6ccf5d5b91400f3f5"
  },
  {
    "url": "assets/js/7.10ef8351.js",
    "revision": "100821e8c4adff267ed13c05be32d4bb"
  },
  {
    "url": "assets/js/8.ba5180bd.js",
    "revision": "9f9c320b8ff152e31f3015cfe9fc97d3"
  },
  {
    "url": "assets/js/9.244343a2.js",
    "revision": "29540cc4354c4764581aeab988ad361c"
  },
  {
    "url": "assets/js/app.4157b0e4.js",
    "revision": "ab1c6fd347a831cf1aac68887d1b89fc"
  },
  {
    "url": "assets/js/vendors~docsearch.d932dc62.js",
    "revision": "d04cdaedc0417584670fe05179d38dd6"
  },
  {
    "url": "index.html",
    "revision": "f431836a6711c6e9b699440797cc36b0"
  },
  {
    "url": "webpack.png",
    "revision": "b8cffda2ad951731e4eec9b1e7372454"
  },
  {
    "url": "workshops/index.html",
    "revision": "9351b7065c986ef502e62266cd3f48a9"
  },
  {
    "url": "workshops/intermediate/dev.html",
    "revision": "8a3fe64e417740227b9297278ebb0a20"
  },
  {
    "url": "workshops/intermediate/index.html",
    "revision": "078f5d405383439d1cdf90e7bdaa9b3d"
  },
  {
    "url": "workshops/novice/basics.html",
    "revision": "cc29577bd8e294250e53bec52858616a"
  },
  {
    "url": "workshops/novice/code-assets.html",
    "revision": "e8f87d4053e1f715981396f9904b1bd1"
  },
  {
    "url": "workshops/novice/index.html",
    "revision": "75afc8e77e5f6e7b432a944ae8a96365"
  },
  {
    "url": "workshops/novice/novice-koans.html",
    "revision": "80e3a84c6149daddd9239b14581996bc"
  },
  {
    "url": "workshops/novice/outputs.html",
    "revision": "929fae1851edd05a90e28c525af947ed"
  },
  {
    "url": "workshops/novice/static-assets.html",
    "revision": "f3835ee8a6d864819d6ba91b75716b09"
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
