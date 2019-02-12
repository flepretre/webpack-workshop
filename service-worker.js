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
    "revision": "caed6880021f8057716f9837322187a0"
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
    "url": "assets/js/10.5b9bcf6c.js",
    "revision": "bac507b8aab1157d6f18f32b9cf36668"
  },
  {
    "url": "assets/js/11.9045ed81.js",
    "revision": "394147891680c7ce72097bf96e702b14"
  },
  {
    "url": "assets/js/12.c7f9bfc0.js",
    "revision": "b48a13d88498a8013a685dda83d469d7"
  },
  {
    "url": "assets/js/13.1e91b35f.js",
    "revision": "498e5b4b4be92b76d1301bbb58d57516"
  },
  {
    "url": "assets/js/14.460876df.js",
    "revision": "7cd67d9094d31dc19b1603df5dd123a8"
  },
  {
    "url": "assets/js/15.3718f7bb.js",
    "revision": "0980cc8ca43f2f12d2a250bb094fdca4"
  },
  {
    "url": "assets/js/16.58b2cd73.js",
    "revision": "936f2435fc43c5518e48468133270285"
  },
  {
    "url": "assets/js/17.35dc59c3.js",
    "revision": "b7dbfcaf0206390eaf481b865e926ccc"
  },
  {
    "url": "assets/js/18.6b059783.js",
    "revision": "99c19acec555454bafc76791ff8d1d1d"
  },
  {
    "url": "assets/js/3.1997f929.js",
    "revision": "f98b0982c11105adb38fb266fad7dd02"
  },
  {
    "url": "assets/js/4.91958876.js",
    "revision": "f8c98dc63530f5949e74b48c252dc21f"
  },
  {
    "url": "assets/js/5.f69e1dd5.js",
    "revision": "f24c71abbe1c82899276175d6442741d"
  },
  {
    "url": "assets/js/6.8a9b0e5a.js",
    "revision": "de53917b0ff840bcf0103e910e7272d8"
  },
  {
    "url": "assets/js/7.8abd1560.js",
    "revision": "ca2bddc699d4f29d03073978d30ffa14"
  },
  {
    "url": "assets/js/8.7bae7cd8.js",
    "revision": "50c66feff7532ce972518fa2915b8a30"
  },
  {
    "url": "assets/js/9.4f8d457a.js",
    "revision": "ceec9c60f99a88aa2d381b5c34977eac"
  },
  {
    "url": "assets/js/app.14ad7626.js",
    "revision": "3833d9cb5652cd9509d5252cdea1b8bb"
  },
  {
    "url": "assets/js/vendors~docsearch.d932dc62.js",
    "revision": "d04cdaedc0417584670fe05179d38dd6"
  },
  {
    "url": "index.html",
    "revision": "1729cf2cd10ef3aa62727df9549b8d52"
  },
  {
    "url": "webpack.png",
    "revision": "afd4bdae0a6e044c13265facddc23e4f"
  },
  {
    "url": "workshops/index.html",
    "revision": "0a2691b87bf0ed810a8c6bc19e0cb248"
  },
  {
    "url": "workshops/intermediate/babel.html",
    "revision": "dcd3c31416387b19d75d713b3d14b3ff"
  },
  {
    "url": "workshops/intermediate/dev.html",
    "revision": "9fab93e5ba32220bec12906cca886484"
  },
  {
    "url": "workshops/intermediate/index.html",
    "revision": "e5cda53800f918b08892708090060011"
  },
  {
    "url": "workshops/intermediate/intermediate-koans.html",
    "revision": "dfb41d8f4efb5116892b951484476ce4"
  },
  {
    "url": "workshops/intermediate/reduce-bundle-size.html",
    "revision": "8f994f6a8188e4a950bc29c043741ab8"
  },
  {
    "url": "workshops/intermediate/style.html",
    "revision": "bd0b7288014b007510e36db5da242d84"
  },
  {
    "url": "workshops/novice/basics.html",
    "revision": "1ec3fbdd67ca331393281f4b45de6483"
  },
  {
    "url": "workshops/novice/code-assets.html",
    "revision": "b774ae2adcaef86583c1274831772f52"
  },
  {
    "url": "workshops/novice/index.html",
    "revision": "70a996c1e32eead4f4a9e5945a02eafe"
  },
  {
    "url": "workshops/novice/novice-koans.html",
    "revision": "dc36f03ff10c03b643c908bcfc25b7ce"
  },
  {
    "url": "workshops/novice/outputs.html",
    "revision": "16459144ed655392b5c87060b5a90f5c"
  },
  {
    "url": "workshops/novice/static-assets.html",
    "revision": "58bd3ba4dec5497c35ca7527eb01d1e3"
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
