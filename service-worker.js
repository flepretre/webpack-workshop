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
    "revision": "be6c65d14ed90cd942f17f460a34f0a5"
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
    "url": "assets/js/2.67cf5634.js",
    "revision": "49a5c34ff95438e5360e24658d039ddb"
  },
  {
    "url": "assets/js/3.05190f84.js",
    "revision": "69623d4eef83c9318c7395a36146942b"
  },
  {
    "url": "assets/js/4.19b22f25.js",
    "revision": "38e43bbdd34f4c68f904f7c3e5b64a89"
  },
  {
    "url": "assets/js/5.1e0ada2b.js",
    "revision": "f3ab508f111cb720d2c984eed914f03a"
  },
  {
    "url": "assets/js/6.1ebf4d01.js",
    "revision": "41fb81442a3543a9ad0bee1856cda3da"
  },
  {
    "url": "assets/js/7.df7ce8ba.js",
    "revision": "88bdf9974790814db583e9304a50f330"
  },
  {
    "url": "assets/js/app.8121dba8.js",
    "revision": "7860787d1b92367bc8a04f773c06cedd"
  },
  {
    "url": "index.html",
    "revision": "803b0c62cf0a6731db915804726345a2"
  },
  {
    "url": "webpack.png",
    "revision": "b8cffda2ad951731e4eec9b1e7372454"
  },
  {
    "url": "workshops/basics.html",
    "revision": "ab1b9a7abda70b2ad040553cfc312ee6"
  },
  {
    "url": "workshops/index.html",
    "revision": "af590fba99e25f302786f61455e5b69f"
  },
  {
    "url": "workshops/static-assets.html",
    "revision": "ae4b6eead9aeb598176276f6fcfd808c"
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
