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
    "revision": "9507152b53449bc2ee3a1680a6748398"
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
    "url": "assets/js/11.0c180065.js",
    "revision": "83cad96c9dfa45f34a1fba5670e3b3b4"
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
    "url": "assets/js/app.83baa13a.js",
    "revision": "b814a7d41c4bda10d536ce5022d9bda3"
  },
  {
    "url": "assets/js/vendors~docsearch.d932dc62.js",
    "revision": "d04cdaedc0417584670fe05179d38dd6"
  },
  {
    "url": "index.html",
    "revision": "0b5289f72d228f4640812018883b1aa7"
  },
  {
    "url": "webpack.png",
    "revision": "afd4bdae0a6e044c13265facddc23e4f"
  },
  {
    "url": "workshops/index.html",
    "revision": "5f6c49d6c63ef3b0d3a22da1b0ad5a51"
  },
  {
    "url": "workshops/intermediate/babel.html",
    "revision": "c73e9f3d1c14b392fd3fdab7e7d11b9f"
  },
  {
    "url": "workshops/intermediate/dev.html",
    "revision": "cca7ecb0ffc6882a444f8d7870e2f5cc"
  },
  {
    "url": "workshops/intermediate/index.html",
    "revision": "549fee842c981847615cbb9a1699154b"
  },
  {
    "url": "workshops/intermediate/intermediate-koans.html",
    "revision": "15966b9ec138c8a7d2ef4197c738547a"
  },
  {
    "url": "workshops/intermediate/style.html",
    "revision": "8561c9249817e1aa86be66b4ed0b0b45"
  },
  {
    "url": "workshops/novice/basics.html",
    "revision": "df8cde429290aef4516933043bd096c4"
  },
  {
    "url": "workshops/novice/code-assets.html",
    "revision": "bba429bcf8cc039d2d39456f9e6a1038"
  },
  {
    "url": "workshops/novice/index.html",
    "revision": "ba11e6512dd32f7d2105b66175a606cb"
  },
  {
    "url": "workshops/novice/novice-koans.html",
    "revision": "5d66d74ad4526b490342ab429b9fabc1"
  },
  {
    "url": "workshops/novice/outputs.html",
    "revision": "f617eacdd8515569da2f0017329dd203"
  },
  {
    "url": "workshops/novice/static-assets.html",
    "revision": "1a441e96e3add577c44855a2da7fd442"
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
