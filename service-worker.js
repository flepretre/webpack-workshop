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
    "revision": "a17e98aeff3b9709b9f39b8f6971b092"
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
    "url": "assets/js/10.357d40c6.js",
    "revision": "a385c45ae43e969a337745848b4be10d"
  },
  {
    "url": "assets/js/11.5bcfe1b7.js",
    "revision": "a5b13f92d1145ad037fc4670c5aaedab"
  },
  {
    "url": "assets/js/2.67cf5634.js",
    "revision": "49a5c34ff95438e5360e24658d039ddb"
  },
  {
    "url": "assets/js/3.5ed9f21a.js",
    "revision": "2e473f2239200ff034495f039216f897"
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
    "url": "assets/js/6.95d721b9.js",
    "revision": "056331543f2413354efd53552c7f719b"
  },
  {
    "url": "assets/js/7.144835e1.js",
    "revision": "8fe721ea5b64197acaf85a568613b5fd"
  },
  {
    "url": "assets/js/8.1ed9c1a6.js",
    "revision": "6fa9b937380751303533347794a3d3cb"
  },
  {
    "url": "assets/js/9.b0dfb15a.js",
    "revision": "4ed16d36bf7615bad4644fd5a64137dc"
  },
  {
    "url": "assets/js/app.df404c31.js",
    "revision": "c871cc27319052bfd4308066d7132d37"
  },
  {
    "url": "index.html",
    "revision": "65c42e213d1ece6afcb0810d395ba7a1"
  },
  {
    "url": "webpack.png",
    "revision": "b8cffda2ad951731e4eec9b1e7372454"
  },
  {
    "url": "workshops/index.html",
    "revision": "0cb654507fcbacfecc2d2467061d7de0"
  },
  {
    "url": "workshops/novice/basics.html",
    "revision": "0d6e5aafa9fabe4592fdbcd350cf0c4b"
  },
  {
    "url": "workshops/novice/code-assets.html",
    "revision": "d2e99b5d9b718dc1d9992654fc807415"
  },
  {
    "url": "workshops/novice/index.html",
    "revision": "fc2fabf875fdfec7ba9d1575f040ee53"
  },
  {
    "url": "workshops/novice/novice-koans.html",
    "revision": "8ee3c9552a7a26ad420f3f196136ca76"
  },
  {
    "url": "workshops/novice/outputs.html",
    "revision": "c243ae4d15de09a8339635329e5d07a5"
  },
  {
    "url": "workshops/novice/static-assets.html",
    "revision": "4e2b824cf5305b12d004feacb3eeacde"
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
