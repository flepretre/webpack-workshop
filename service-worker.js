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
    "revision": "76ed0cbafa6bd8bebdeea287dfd93b96"
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
    "url": "assets/js/10.0831797f.js",
    "revision": "c18ae9c35c3f33abc14f2f04eee2badb"
  },
  {
    "url": "assets/js/2.67cf5634.js",
    "revision": "49a5c34ff95438e5360e24658d039ddb"
  },
  {
    "url": "assets/js/3.6cbf8a08.js",
    "revision": "48be713f67c9b249db5bbc9f8b92b2e6"
  },
  {
    "url": "assets/js/4.19b22f25.js",
    "revision": "38e43bbdd34f4c68f904f7c3e5b64a89"
  },
  {
    "url": "assets/js/5.812caaa6.js",
    "revision": "1c491b7892b09be5ec036f9e0994bbbc"
  },
  {
    "url": "assets/js/6.23bec8a7.js",
    "revision": "0525d705ba144de62f0171347bdcde97"
  },
  {
    "url": "assets/js/7.67c00ad9.js",
    "revision": "a69e1e8c1b1bc6779598b6aacf0fb560"
  },
  {
    "url": "assets/js/8.e26cd481.js",
    "revision": "60f3cc452baac72292cafc710f2f2cf2"
  },
  {
    "url": "assets/js/9.664fe68d.js",
    "revision": "cfa5b86055ac6dd37a8809e4265df20b"
  },
  {
    "url": "assets/js/app.fbf0416b.js",
    "revision": "b084dbb0b7319fd75d90e88cfcbdc3f8"
  },
  {
    "url": "index.html",
    "revision": "6cd8f1b4c63a3a88888f2e3188cc3cb9"
  },
  {
    "url": "webpack.png",
    "revision": "b8cffda2ad951731e4eec9b1e7372454"
  },
  {
    "url": "workshops/basics.html",
    "revision": "98a6958233ab9d93b6891318d7e08e8f"
  },
  {
    "url": "workshops/code-assets.html",
    "revision": "d8867bdc463792d4f0215670527d47c1"
  },
  {
    "url": "workshops/index.html",
    "revision": "64c65583764bc90a25689195eda7b238"
  },
  {
    "url": "workshops/novice-koans.html",
    "revision": "72dceb475cc7fd4e6c3e6da2050c1872"
  },
  {
    "url": "workshops/outputs.html",
    "revision": "46aa861f527b707a0672594c55639334"
  },
  {
    "url": "workshops/static-assets.html",
    "revision": "63e3f6c6ea963eb461bdcb01ed1df27e"
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
