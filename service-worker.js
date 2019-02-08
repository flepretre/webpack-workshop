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
    "revision": "fddc6e90c4a776a215090b41fc2e9e11"
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
    "url": "assets/js/11.69f7fbe7.js",
    "revision": "9b6bce0e3ad319e5333ac18075451107"
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
    "url": "assets/js/3.38024873.js",
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
    "url": "assets/js/app.9ebe27d7.js",
    "revision": "215c9188931b63cac58c3b4c5f7989dd"
  },
  {
    "url": "assets/js/vendors~docsearch.d932dc62.js",
    "revision": "d04cdaedc0417584670fe05179d38dd6"
  },
  {
    "url": "index.html",
    "revision": "11f6c1b518728b4a3d69152c31c8bee8"
  },
  {
    "url": "webpack.png",
    "revision": "afd4bdae0a6e044c13265facddc23e4f"
  },
  {
    "url": "workshops/index.html",
    "revision": "6e47fb9b598d76d2cc570a857dd8aadf"
  },
  {
    "url": "workshops/intermediate/babel.html",
    "revision": "ad494c5539ae9214adf261fcd9bc4c1a"
  },
  {
    "url": "workshops/intermediate/dev.html",
    "revision": "c40bacb131e3c460b57870902927d7fc"
  },
  {
    "url": "workshops/intermediate/index.html",
    "revision": "a2e31c33d5367ddd0ea0923657f00a4a"
  },
  {
    "url": "workshops/intermediate/intermediate-koans.html",
    "revision": "90e311266321fb5d9b527ee05f9e24b9"
  },
  {
    "url": "workshops/intermediate/style.html",
    "revision": "b837038422a6ecde588da79cdc671145"
  },
  {
    "url": "workshops/novice/basics.html",
    "revision": "7a22416b7826437c861ec424aaec7509"
  },
  {
    "url": "workshops/novice/code-assets.html",
    "revision": "dc4d1b5240616545694581547c48454a"
  },
  {
    "url": "workshops/novice/index.html",
    "revision": "f9f593c1a972e9dc9796e40a78e689a9"
  },
  {
    "url": "workshops/novice/novice-koans.html",
    "revision": "f6bef7b9d469e840051c52795ddbbc56"
  },
  {
    "url": "workshops/novice/outputs.html",
    "revision": "e254f13fa95eb3e9b5360360b856ad2f"
  },
  {
    "url": "workshops/novice/static-assets.html",
    "revision": "52cf80b9c2ffc6642237334edf3e5943"
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
