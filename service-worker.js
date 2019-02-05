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
    "revision": "8b7514f2b681f752365e0dd1b4abd819"
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
    "url": "assets/js/10.93f94409.js",
    "revision": "dacf68086e57d466488b421d15cca4ee"
  },
  {
    "url": "assets/js/11.b8ec93f4.js",
    "revision": "dd2f9400f2b702b76f229fa9dcc6a6ab"
  },
  {
    "url": "assets/js/12.5e118939.js",
    "revision": "61676b61a78f319c75650b5113dc8714"
  },
  {
    "url": "assets/js/13.b69df8fb.js",
    "revision": "94143849d5b55c1b4061049f2db33bc8"
  },
  {
    "url": "assets/js/14.1e8d6cad.js",
    "revision": "3b4f0aa763ca58752c5fcd45b31ffdee"
  },
  {
    "url": "assets/js/15.a1e29740.js",
    "revision": "1502e9a7a46e66654d023f4d73152797"
  },
  {
    "url": "assets/js/3.a939b26e.js",
    "revision": "f3d60492185ecd5365226fb3dc38cf6e"
  },
  {
    "url": "assets/js/4.c3292d69.js",
    "revision": "c0d2e21d373292dcdea86b50e573c32e"
  },
  {
    "url": "assets/js/5.f24e822f.js",
    "revision": "62c92c0c13f69fb936f9cb81a9d96cf0"
  },
  {
    "url": "assets/js/6.571fa7bb.js",
    "revision": "480941b3b4c38378d26485e76da8d7eb"
  },
  {
    "url": "assets/js/7.40d9ac77.js",
    "revision": "09947159df1581598928ae6c869f4916"
  },
  {
    "url": "assets/js/8.da4602b1.js",
    "revision": "970b55516735167a3e781a1b9bd7250e"
  },
  {
    "url": "assets/js/9.0b5d6e56.js",
    "revision": "b443bc4510ca9d996c49e76889823205"
  },
  {
    "url": "assets/js/app.a6601a13.js",
    "revision": "4e9133f8549a6b25bdfa12220dbb2968"
  },
  {
    "url": "assets/js/vendors~docsearch.d932dc62.js",
    "revision": "d04cdaedc0417584670fe05179d38dd6"
  },
  {
    "url": "index.html",
    "revision": "018eb484e086f72ac0f94f186af67c4d"
  },
  {
    "url": "webpack.png",
    "revision": "b8cffda2ad951731e4eec9b1e7372454"
  },
  {
    "url": "workshops/index.html",
    "revision": "5710b31ea89d9a1fa56357c7777adedf"
  },
  {
    "url": "workshops/intermediate/babel.html",
    "revision": "49b3d5841a303e9b4c03554c125f8438"
  },
  {
    "url": "workshops/intermediate/dev.html",
    "revision": "3226f847a4c0d467af261e276d294fb0"
  },
  {
    "url": "workshops/intermediate/index.html",
    "revision": "6241ce40025b01f9d14eb0f1d2c2b072"
  },
  {
    "url": "workshops/novice/basics.html",
    "revision": "8fb1f77abe5ad98aef44913872ae27ac"
  },
  {
    "url": "workshops/novice/code-assets.html",
    "revision": "e98c853d67302905063e9e596a7ca61f"
  },
  {
    "url": "workshops/novice/index.html",
    "revision": "2c31fba009b917e09b87fcb4431e0a6c"
  },
  {
    "url": "workshops/novice/novice-koans.html",
    "revision": "9a9b409f3933585dba76e6100f6290ce"
  },
  {
    "url": "workshops/novice/outputs.html",
    "revision": "fbfe83b266b5c0aaab6a9374def6a6ca"
  },
  {
    "url": "workshops/novice/static-assets.html",
    "revision": "b1a83ee49e75dafa8981c0d4e7a4098b"
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
