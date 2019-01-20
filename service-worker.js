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
    "revision": "596e560917a476ae7737727f35845970"
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
    "url": "assets/js/3.cd21fe9c.js",
    "revision": "66f8bd25f0c3b9fd24baa95e7b3966bd"
  },
  {
    "url": "assets/js/4.19b22f25.js",
    "revision": "38e43bbdd34f4c68f904f7c3e5b64a89"
  },
  {
    "url": "assets/js/5.3190e79d.js",
    "revision": "84d93d7293abea59ec5b2012372fb9f4"
  },
  {
    "url": "assets/js/6.1ebf4d01.js",
    "revision": "41fb81442a3543a9ad0bee1856cda3da"
  },
  {
    "url": "assets/js/7.789b6472.js",
    "revision": "4ec965c40be1605405ca2e31e81f738a"
  },
  {
    "url": "assets/js/8.35838317.js",
    "revision": "96e584c7b994a13aa55791c93c33f368"
  },
  {
    "url": "assets/js/app.aa51ebed.js",
    "revision": "1abae2a40a7a8dd978cbe4e33e9e4b7d"
  },
  {
    "url": "index.html",
    "revision": "6c4179767bf5a971112af6d8ed966405"
  },
  {
    "url": "webpack.png",
    "revision": "b8cffda2ad951731e4eec9b1e7372454"
  },
  {
    "url": "workshops/basics.html",
    "revision": "d6416bec96b5aefb3e29e664ca0d3645"
  },
  {
    "url": "workshops/code-assets.html",
    "revision": "d9acebb9f4ab896408f57be662d78455"
  },
  {
    "url": "workshops/index.html",
    "revision": "1f94022b18031bbf26a898c3eabaebb4"
  },
  {
    "url": "workshops/static-assets.html",
    "revision": "d1a436cc089461933cad721100eefaff"
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
