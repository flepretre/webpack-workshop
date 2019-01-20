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
    "revision": "1314205700110541200c1588a6980bb8"
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
    "url": "assets/js/3.d69ac5d8.js",
    "revision": "1d964baf487781b86e9326518a48b89c"
  },
  {
    "url": "assets/js/4.19b22f25.js",
    "revision": "38e43bbdd34f4c68f904f7c3e5b64a89"
  },
  {
    "url": "assets/js/5.3dfffb4e.js",
    "revision": "8938d6bbc8484a67b3fe69bd06b76879"
  },
  {
    "url": "assets/js/6.23bec8a7.js",
    "revision": "0525d705ba144de62f0171347bdcde97"
  },
  {
    "url": "assets/js/7.789b6472.js",
    "revision": "4ec965c40be1605405ca2e31e81f738a"
  },
  {
    "url": "assets/js/8.2d2e06fd.js",
    "revision": "fadbc158d899c9d9b3172d9cd980ae8a"
  },
  {
    "url": "assets/js/9.7d5cc4ac.js",
    "revision": "1f7d64e683db05eb1dc587b15591d76d"
  },
  {
    "url": "assets/js/app.57d8d9bb.js",
    "revision": "97fc5b8307bc99361851f302123b6d74"
  },
  {
    "url": "index.html",
    "revision": "49bfeb25aac086552a1abdb43d3ce7e3"
  },
  {
    "url": "webpack.png",
    "revision": "b8cffda2ad951731e4eec9b1e7372454"
  },
  {
    "url": "workshops/basics.html",
    "revision": "f916cf3b87df66bb900e2f11ebefc6ab"
  },
  {
    "url": "workshops/code-assets.html",
    "revision": "4e1a971267cd3a5ccaee24d8b6f35404"
  },
  {
    "url": "workshops/index.html",
    "revision": "36ea94112b57af8ef76f23b829d7bbcb"
  },
  {
    "url": "workshops/outputs.html",
    "revision": "0020571e5ce58cb877b65a824e6115d4"
  },
  {
    "url": "workshops/static-assets.html",
    "revision": "c093d9b006bcf5df1ceaaa0ba054052f"
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
