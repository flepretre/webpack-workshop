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
    "revision": "c959740594fb4ef74c95010090722c86"
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
    "url": "assets/js/10.54add932.js",
    "revision": "8c47f3d8d07c595c80ee03b330c9e5fc"
  },
  {
    "url": "assets/js/11.2113ddb2.js",
    "revision": "832fe4c7aa962532c35c712e06abc6bc"
  },
  {
    "url": "assets/js/12.0e084f9e.js",
    "revision": "14d2f2898662ab6845adddc35053e94b"
  },
  {
    "url": "assets/js/13.d3b7237f.js",
    "revision": "3a4701683be8a3cbfc4af6ffa86766d1"
  },
  {
    "url": "assets/js/14.bbd4ceab.js",
    "revision": "5483331c2a403b22eb207bda9a4d14ae"
  },
  {
    "url": "assets/js/15.1693c71f.js",
    "revision": "073702b1301ae44a4ab08fb147386d6a"
  },
  {
    "url": "assets/js/16.55e1029e.js",
    "revision": "6197528e33c4fcdd5d65f08395f67535"
  },
  {
    "url": "assets/js/17.51534de7.js",
    "revision": "7886687effcd4a5eab5662bd2072094c"
  },
  {
    "url": "assets/js/3.e2981100.js",
    "revision": "b7f0ff77714f12e2aaa2f767802eac07"
  },
  {
    "url": "assets/js/4.91958876.js",
    "revision": "f8c98dc63530f5949e74b48c252dc21f"
  },
  {
    "url": "assets/js/5.a04b3ccc.js",
    "revision": "2cf1b787da788d06b796b8abdfbc02c3"
  },
  {
    "url": "assets/js/6.19008f46.js",
    "revision": "36b8c0f88ec25c36dca37068f018242f"
  },
  {
    "url": "assets/js/7.a9167aaa.js",
    "revision": "ecfcb5242f1f6e364110815aab12567d"
  },
  {
    "url": "assets/js/8.76224c5e.js",
    "revision": "220870b4cfe52dee80fd56ca3c072ea6"
  },
  {
    "url": "assets/js/9.a12690e8.js",
    "revision": "cfafea93979595d66198456b63bd6322"
  },
  {
    "url": "assets/js/app.2f4fe240.js",
    "revision": "4b32ddfa920550435151dc83e009fb0a"
  },
  {
    "url": "assets/js/vendors~docsearch.d932dc62.js",
    "revision": "d04cdaedc0417584670fe05179d38dd6"
  },
  {
    "url": "index.html",
    "revision": "48e53d09c4c496d975e9e5cb8523a655"
  },
  {
    "url": "webpack.png",
    "revision": "afd4bdae0a6e044c13265facddc23e4f"
  },
  {
    "url": "workshops/index.html",
    "revision": "87016bd038b3fdd34bf0532f8ba242c1"
  },
  {
    "url": "workshops/intermediate/babel.html",
    "revision": "3941b7eecee420ead3128d110984f117"
  },
  {
    "url": "workshops/intermediate/dev.html",
    "revision": "3312c38bfb8993751434b219c420376f"
  },
  {
    "url": "workshops/intermediate/index.html",
    "revision": "f75e3dbbf0655cc8046c28aa3f57d7ce"
  },
  {
    "url": "workshops/intermediate/intermediate-koans.html",
    "revision": "08db6d27c2eb378dde6b81a37d0421ea"
  },
  {
    "url": "workshops/intermediate/style.html",
    "revision": "c258d14a2f81dd63ecf600225432706e"
  },
  {
    "url": "workshops/novice/basics.html",
    "revision": "0fb0da5cc15cdefe085d752d0217df18"
  },
  {
    "url": "workshops/novice/code-assets.html",
    "revision": "5bd1b9f9a58408f255b143ca7dc4832d"
  },
  {
    "url": "workshops/novice/index.html",
    "revision": "312c31035abe46e5f02ffcade9837bef"
  },
  {
    "url": "workshops/novice/novice-koans.html",
    "revision": "e648c6b579f6e8f971cd29ddbf01ba0d"
  },
  {
    "url": "workshops/novice/outputs.html",
    "revision": "62323610b89c2ea568a40aef302da488"
  },
  {
    "url": "workshops/novice/static-assets.html",
    "revision": "e038e25f1b888527b4025688c361d556"
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
