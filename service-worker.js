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
    "revision": "da71f35827feef9ca64db6af3d699e28"
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
    "url": "assets/js/app.07c40f1e.js",
    "revision": "c41d38b2b521a3e6c87d0382efd35cfe"
  },
  {
    "url": "assets/js/vendors~docsearch.d932dc62.js",
    "revision": "d04cdaedc0417584670fe05179d38dd6"
  },
  {
    "url": "index.html",
    "revision": "dadf4efe7e81fcf1a889866886cca068"
  },
  {
    "url": "webpack.png",
    "revision": "afd4bdae0a6e044c13265facddc23e4f"
  },
  {
    "url": "workshops/index.html",
    "revision": "7c4a6831cc11a60533e55eaa23ae999c"
  },
  {
    "url": "workshops/intermediate/babel.html",
    "revision": "f01048322773e6237e1eefbb7023492e"
  },
  {
    "url": "workshops/intermediate/dev.html",
    "revision": "0f789d2cc92e1ae3a5bef5ab79a97509"
  },
  {
    "url": "workshops/intermediate/index.html",
    "revision": "35482730b4ced5d0a1bae97d4e444140"
  },
  {
    "url": "workshops/intermediate/intermediate-koans.html",
    "revision": "3ce40d4c845cd37bc9b4e66c0d535c9f"
  },
  {
    "url": "workshops/intermediate/style.html",
    "revision": "849627da7f625515934d2f07ce93f6cc"
  },
  {
    "url": "workshops/novice/basics.html",
    "revision": "3ee4a1c045db539ee875c671359c4b60"
  },
  {
    "url": "workshops/novice/code-assets.html",
    "revision": "96b8d9c0c5d6204cc346e06d9a6da287"
  },
  {
    "url": "workshops/novice/index.html",
    "revision": "a05d191fc2a76f8be8c0ddb7d1d17cd7"
  },
  {
    "url": "workshops/novice/novice-koans.html",
    "revision": "4433d06aadffcb8b947b0ce7b4852e28"
  },
  {
    "url": "workshops/novice/outputs.html",
    "revision": "8ab59347537b005c971dd9ade493010f"
  },
  {
    "url": "workshops/novice/static-assets.html",
    "revision": "1fe36b5ca8c6ff6fecb6fd8e6d099962"
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
