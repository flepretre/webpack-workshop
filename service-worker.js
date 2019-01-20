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
    "revision": "c9d7388e102442bdee2569a599d4303e"
  },
  {
    "url": "assets/css/0.styles.36955c49.css",
    "revision": "e06cbb12ce4391928e23322a6cf2a5b5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.593c2786.js",
    "revision": "1c6b048b81dfea0ce9854bdbb68e1bc2"
  },
  {
    "url": "assets/js/3.ef465eb2.js",
    "revision": "10ea4533793f9ffec2b75157e6f7f778"
  },
  {
    "url": "assets/js/4.0e396f06.js",
    "revision": "08dcb943c69ebd0fe5c8dedd6eaf7dfa"
  },
  {
    "url": "assets/js/5.d5431cfa.js",
    "revision": "962511bd0e300640f3b584840e7e9517"
  },
  {
    "url": "assets/js/6.fec436bc.js",
    "revision": "dc33d3cc837d4cec980232a59a1eca6b"
  },
  {
    "url": "assets/js/app.2ed1a520.js",
    "revision": "b9f4d0b6b9db84b72408acfb097c87f1"
  },
  {
    "url": "index.html",
    "revision": "c28733055891219f41d3b9993b90e10d"
  },
  {
    "url": "workshops/basics.html",
    "revision": "d51b9ddd60eaf76996553490e6577eb5"
  },
  {
    "url": "workshops/index.html",
    "revision": "82eb5b3fff544d799b6f43399a2f6ad1"
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
