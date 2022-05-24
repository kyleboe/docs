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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2368fa3631033db4f6265e7bb22dd522"
  },
  {
    "url": "assets/css/0.styles.3e4faf6e.css",
    "revision": "2b05a5f02b9af194ad3c8c9ceab42707"
  },
  {
    "url": "assets/img/activities.36116c16.png",
    "revision": "36116c16687c3473ca786d4c7d62e016"
  },
  {
    "url": "assets/img/add_circle_outline.c5b0d45d.svg",
    "revision": "c5b0d45d9ff3b78a9ac4ac72a70ea50c"
  },
  {
    "url": "assets/img/add.0e3e08bc.svg",
    "revision": "0e3e08bcb441c2cb39bdfff7f56f06a2"
  },
  {
    "url": "assets/img/address-bar.a15ff370.png",
    "revision": "a15ff370eed2f8f0b8219ea3d4976318"
  },
  {
    "url": "assets/img/address.8c163b8f.png",
    "revision": "8c163b8f3c49e340a7c9546af4ed690e"
  },
  {
    "url": "assets/img/content_copy.72dd793a.svg",
    "revision": "72dd793a97203adfad3c50ebad310ee4"
  },
  {
    "url": "assets/img/control_point_duplicate.0028d2cc.svg",
    "revision": "0028d2cca15e5c298bc49d9f8058a0d3"
  },
  {
    "url": "assets/img/delete_forever.01754524.svg",
    "revision": "017545249afd67806be943eae9f18bc2"
  },
  {
    "url": "assets/img/directions_car.c9b170b8.svg",
    "revision": "c9b170b848c5d4b8dd0e61f16bd75c75"
  },
  {
    "url": "assets/img/directions_walk.27f1ba22.svg",
    "revision": "27f1ba221570d364f986a1bc342c3e05"
  },
  {
    "url": "assets/img/done_all.28f39764.svg",
    "revision": "28f397644d2d6fe6c3fde0446891cf26"
  },
  {
    "url": "assets/img/done.89e6f120.svg",
    "revision": "89e6f1201212082536271f14401d3d41"
  },
  {
    "url": "assets/img/flight.1eb2837a.svg",
    "revision": "1eb2837abbb46c402e137802482339bc"
  },
  {
    "url": "assets/img/ledger_logo.8d1c9c23.svg",
    "revision": "8d1c9c23425c3b507e87663b24e54d0e"
  },
  {
    "url": "assets/img/link.98f4f684.svg",
    "revision": "98f4f6841f3d482b15c3a9d79c8db50f"
  },
  {
    "url": "assets/img/logoSync.7d4e71a5.svg",
    "revision": "7d4e71a555356bf3338258bfd8ba32b2"
  },
  {
    "url": "assets/img/menu.55f68494.svg",
    "revision": "55f6849429de279d473c459c7ead3249"
  },
  {
    "url": "assets/img/message.759cf5c9.svg",
    "revision": "759cf5c9195a7ba83dfe7b47cd809ffe"
  },
  {
    "url": "assets/img/more_horiz.d644ed95.svg",
    "revision": "d644ed957e2662b1d22adb890310e64f"
  },
  {
    "url": "assets/img/mpp.58a89201.png",
    "revision": "58a892017c66b562945baeee15505c80"
  },
  {
    "url": "assets/img/preview.2a0e91e4.svg",
    "revision": "2a0e91e455559dd783005560c3ffcbe0"
  },
  {
    "url": "assets/img/qr_code_2.b60a5eec.svg",
    "revision": "b60a5eec09a98201dd9a090a00e521bb"
  },
  {
    "url": "assets/img/query_builder.3c7597b2.svg",
    "revision": "3c7597b2a77f9fe763c44489b872ac31"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/search.db5d8122.svg",
    "revision": "db5d8122836517965b6e0247a3a9691c"
  },
  {
    "url": "assets/img/send.5b08a89d.svg",
    "revision": "5b08a89d2dd3351ce4ef110d2909cb23"
  },
  {
    "url": "assets/img/settings.d31d71f9.png",
    "revision": "d31d71f992404bd7970a450cfe4ec99c"
  },
  {
    "url": "assets/img/signing.d77cdae1.png",
    "revision": "d77cdae154a592744275a3b510bf722a"
  },
  {
    "url": "assets/img/unfold_more.52bd8411.svg",
    "revision": "52bd8411f8aea9dba1e636497a1c3d3e"
  },
  {
    "url": "assets/img/wallet-detail-activity.0f9d89a3.png",
    "revision": "0f9d89a34631323541d04818f4a00ac4"
  },
  {
    "url": "assets/img/wallet.08efbe38.png",
    "revision": "08efbe38b38fce44fa3542a9a0dd156d"
  },
  {
    "url": "assets/js/10.694ead51.js",
    "revision": "09d041d58b6c804f6d2fd250ea105fc1"
  },
  {
    "url": "assets/js/100.69de5222.js",
    "revision": "8413d037fda9e80114c3218a3bba2e56"
  },
  {
    "url": "assets/js/101.c112e028.js",
    "revision": "b1ff121aa338f91c7e80967b8fa04de2"
  },
  {
    "url": "assets/js/102.1b158bf6.js",
    "revision": "5540b81b99e3d8326e4987ad2321411c"
  },
  {
    "url": "assets/js/103.f6c70881.js",
    "revision": "a3cbe55278d81777602d4c3b8164d8c5"
  },
  {
    "url": "assets/js/104.9deaead9.js",
    "revision": "079bd7e431531aac94a408a27048fb8c"
  },
  {
    "url": "assets/js/105.f779af09.js",
    "revision": "0d91d38770719e7d2abf5e742c45ea75"
  },
  {
    "url": "assets/js/106.8b3fad22.js",
    "revision": "0f1ee0770958909f8d6e2096c50bc7c7"
  },
  {
    "url": "assets/js/107.1ff5dc39.js",
    "revision": "b164bcb8b6706cd6b33dbeccd98c0253"
  },
  {
    "url": "assets/js/11.2529a28e.js",
    "revision": "365518331d948df1d06327acded66bb8"
  },
  {
    "url": "assets/js/12.3fa1dc23.js",
    "revision": "fe6958cdb71fe5d18846dbc1d7f12e2f"
  },
  {
    "url": "assets/js/13.a59b6543.js",
    "revision": "0b5e3168ba301e1ee7539d876d761fa8"
  },
  {
    "url": "assets/js/14.e3667f8b.js",
    "revision": "804147f0327fd13226f28b1b408cc165"
  },
  {
    "url": "assets/js/15.66ef4414.js",
    "revision": "dd3073d17d9b4b4dca227c55158d06fd"
  },
  {
    "url": "assets/js/16.0f3f2c1a.js",
    "revision": "2818e05a66c9ff3bd74c6728128d54b2"
  },
  {
    "url": "assets/js/17.544f97dc.js",
    "revision": "2f6ecde9ca678b5401ec17684c50c786"
  },
  {
    "url": "assets/js/18.585cf9e3.js",
    "revision": "8f9e7ff3130ed7dee3406e2ad929d004"
  },
  {
    "url": "assets/js/19.56051040.js",
    "revision": "37cc76d573ab2836320c163af219f8ae"
  },
  {
    "url": "assets/js/20.e801da5b.js",
    "revision": "777261cc2a55e6d68d8a830fbaf8b673"
  },
  {
    "url": "assets/js/21.e55ea010.js",
    "revision": "83a3f3ca1b22299cff3c8fda2e02592f"
  },
  {
    "url": "assets/js/22.508702fa.js",
    "revision": "337b705d6034da52836a1f47744ecf68"
  },
  {
    "url": "assets/js/23.2ce8eb40.js",
    "revision": "a8fed7a8147b12097ded2fc1aa93ed85"
  },
  {
    "url": "assets/js/24.501d283d.js",
    "revision": "f9309852fb1b549d909a4a2780206996"
  },
  {
    "url": "assets/js/25.dbcd6f95.js",
    "revision": "517524ab9e62188778aaa6a833705145"
  },
  {
    "url": "assets/js/26.fb9e3edb.js",
    "revision": "a6bff89800bff397051cd92c80f750be"
  },
  {
    "url": "assets/js/27.99b1fecb.js",
    "revision": "179130ef7d736e0900e352df27c8359f"
  },
  {
    "url": "assets/js/28.69fad62f.js",
    "revision": "23b278233a9b8e24e14c0a9943729409"
  },
  {
    "url": "assets/js/29.347150de.js",
    "revision": "5660f07561db51d4282cae44997bf36d"
  },
  {
    "url": "assets/js/3.4d15505d.js",
    "revision": "7d72a9af271c050d3d8e6ab700ea9854"
  },
  {
    "url": "assets/js/30.b0ea5628.js",
    "revision": "f34f7439a6cda34c7e600987ff29c893"
  },
  {
    "url": "assets/js/31.9cfbaae0.js",
    "revision": "585008ab013bc1c629201f64823067e8"
  },
  {
    "url": "assets/js/32.112eabdd.js",
    "revision": "4581ee2b9d665f857ac49f0327f55aad"
  },
  {
    "url": "assets/js/33.172a48e0.js",
    "revision": "690631ca577e1be762cb08ab49c48903"
  },
  {
    "url": "assets/js/34.777c964e.js",
    "revision": "8ce7cb039e1a737b434282d93b21af98"
  },
  {
    "url": "assets/js/35.fe719197.js",
    "revision": "f02d94e1f8729b3e327c1b9e01329ca6"
  },
  {
    "url": "assets/js/36.ae6e0c34.js",
    "revision": "e0fe05736bcc6f24d1858bd2921ae426"
  },
  {
    "url": "assets/js/37.a6478f53.js",
    "revision": "462621eb549a1b54fe941fca868da8b2"
  },
  {
    "url": "assets/js/38.9615536d.js",
    "revision": "5d2733116da27255ca1d5947637de3ba"
  },
  {
    "url": "assets/js/39.f2a2ef74.js",
    "revision": "d7f0f54cee803a2f3e7014ba472b9118"
  },
  {
    "url": "assets/js/4.45804240.js",
    "revision": "d37909da2cc4ddfcfe2a6d162f965a58"
  },
  {
    "url": "assets/js/40.a2db98a8.js",
    "revision": "2f6240175a6f106adbf00b12081031ac"
  },
  {
    "url": "assets/js/41.bf13ef19.js",
    "revision": "6c82e2a6dabd018126aca8bda43e7eb4"
  },
  {
    "url": "assets/js/42.2137bbba.js",
    "revision": "4f8a5b671f3c70e5de1312f6dd537579"
  },
  {
    "url": "assets/js/43.d0cda2ca.js",
    "revision": "813baac19490bef9233f2dfce9302f1c"
  },
  {
    "url": "assets/js/44.5419475b.js",
    "revision": "3027ffa34f54e36fc6a6dfa0620884b1"
  },
  {
    "url": "assets/js/45.1d1169d8.js",
    "revision": "205240e0cb99048607da6708cbc79b8a"
  },
  {
    "url": "assets/js/46.8fc4c13d.js",
    "revision": "b8640562f2e0a24e597bfe0ea52b7e58"
  },
  {
    "url": "assets/js/47.18e13c2e.js",
    "revision": "0f271359cf689105feb28125f931d60f"
  },
  {
    "url": "assets/js/48.8e52e794.js",
    "revision": "8bfc7a08500dcb7ae0f09ed292322565"
  },
  {
    "url": "assets/js/49.f694ffb4.js",
    "revision": "b8723df091e7158d85b73dfe8668ae7c"
  },
  {
    "url": "assets/js/5.e43b6327.js",
    "revision": "75d615a6e3d743a593a676ac68ad514b"
  },
  {
    "url": "assets/js/50.682abf64.js",
    "revision": "c5d2b54eb99e2243c83741d57da9d0d7"
  },
  {
    "url": "assets/js/51.edf1e039.js",
    "revision": "35565af9d69c1eb83c6c14eafef30e17"
  },
  {
    "url": "assets/js/52.1d36ffc0.js",
    "revision": "83294a998ae72162d16de287802b8564"
  },
  {
    "url": "assets/js/53.29231573.js",
    "revision": "2abe529350dcb18cd15c409b416af651"
  },
  {
    "url": "assets/js/54.af3b3e82.js",
    "revision": "293dc0847d9c1673fdf95c593ba3e026"
  },
  {
    "url": "assets/js/55.379dbfae.js",
    "revision": "cde70196a7c47739d38c056267f3df7b"
  },
  {
    "url": "assets/js/56.f79c4db8.js",
    "revision": "73bb227ad99310f38d1b580273d9a443"
  },
  {
    "url": "assets/js/57.5937cc2e.js",
    "revision": "54803849f7df1f5b4810e847f9c9f23e"
  },
  {
    "url": "assets/js/58.39e4e0fc.js",
    "revision": "5ef693c6cfd3f2d7d9e169f4826b3186"
  },
  {
    "url": "assets/js/59.7b54f7f4.js",
    "revision": "f89af80789ab32210dc908f55769d9fa"
  },
  {
    "url": "assets/js/6.f5ca39ac.js",
    "revision": "b066328509c27ecff4a501ec4246bf13"
  },
  {
    "url": "assets/js/60.42d518c5.js",
    "revision": "6d8e797abcb04d98c96b54bad69e8f2c"
  },
  {
    "url": "assets/js/61.ce2cd750.js",
    "revision": "1eee08f4b7e05157f805e56a22e47175"
  },
  {
    "url": "assets/js/62.f56ccfc4.js",
    "revision": "c32f6344102b159303fb943dcb89e656"
  },
  {
    "url": "assets/js/63.7ff3688d.js",
    "revision": "5d05ca1a545f68896688b187395b94dc"
  },
  {
    "url": "assets/js/64.e0ffbed9.js",
    "revision": "85996f7d7e5d85798300b97aadec07c9"
  },
  {
    "url": "assets/js/65.b036c22f.js",
    "revision": "12c1dbd345d9a473afd978e62ca69193"
  },
  {
    "url": "assets/js/66.187673b2.js",
    "revision": "f5f3995ca8764ed72a3ec1f7c73a9f0c"
  },
  {
    "url": "assets/js/67.b72689ce.js",
    "revision": "71d8b8853c9fa23951fd2706dee697d1"
  },
  {
    "url": "assets/js/68.67973f73.js",
    "revision": "15ce60f81c069b06985f7c030cd5676c"
  },
  {
    "url": "assets/js/69.3c92b0ed.js",
    "revision": "2de4d9bf3cb8c42b0e751d192bc2dded"
  },
  {
    "url": "assets/js/7.408a4531.js",
    "revision": "c20d263cdbee12b911a236af4416d87e"
  },
  {
    "url": "assets/js/70.cf8b45c9.js",
    "revision": "c5fd5d0f9d0e2215661a27231a5cb7dc"
  },
  {
    "url": "assets/js/71.cb63eb13.js",
    "revision": "5f53ebc01a4a8c3b269fbc891e91a32d"
  },
  {
    "url": "assets/js/72.219193ea.js",
    "revision": "0f312f0ba7272d8753408bb930b01c9d"
  },
  {
    "url": "assets/js/73.16dfd38c.js",
    "revision": "d1d26572831be1b47bb3bc2a5e2cd1f3"
  },
  {
    "url": "assets/js/74.3307e1eb.js",
    "revision": "9cdbd17412459e4f49a0e7b7208d49f8"
  },
  {
    "url": "assets/js/75.09511393.js",
    "revision": "174866a59c7eb71e5648648ba7da4918"
  },
  {
    "url": "assets/js/76.dadd4e57.js",
    "revision": "f07098a0c59a1d471ee876fb914d5c7f"
  },
  {
    "url": "assets/js/77.f0318240.js",
    "revision": "9afd241b38b601a7b1dce262f6a8920b"
  },
  {
    "url": "assets/js/78.14f0b327.js",
    "revision": "8fa593661234215fe232985ec2c867a1"
  },
  {
    "url": "assets/js/79.e2eb56dc.js",
    "revision": "990857a1bf578c3b0cbc88b605f1a4ed"
  },
  {
    "url": "assets/js/8.ab6ca9a0.js",
    "revision": "6b39c2528cbd90c0e02da20927592a4d"
  },
  {
    "url": "assets/js/80.3157595b.js",
    "revision": "8e0b7e03ba57876d5dd0452773d015d1"
  },
  {
    "url": "assets/js/81.271fd932.js",
    "revision": "1fb5331ff44afbe32e670bf4197e6c92"
  },
  {
    "url": "assets/js/82.bed86073.js",
    "revision": "6d95541942f82ba1e646f687709bbc7f"
  },
  {
    "url": "assets/js/83.aeb05711.js",
    "revision": "e69f3a2a4597a28c0fa4126f1762d09c"
  },
  {
    "url": "assets/js/84.94e04a72.js",
    "revision": "bda2f596751f67ab12c0be6aa579b57f"
  },
  {
    "url": "assets/js/85.1adb920f.js",
    "revision": "373aa9947dcc8efca3312a4735cbd293"
  },
  {
    "url": "assets/js/86.4dcced12.js",
    "revision": "4cb3ebe8d332ea88fd1cd3a8338ba9fd"
  },
  {
    "url": "assets/js/87.6130bf31.js",
    "revision": "e44cc46aed9a8e9cfd2250a29ea0abda"
  },
  {
    "url": "assets/js/88.5adca661.js",
    "revision": "62fd1f56b0eb36c4d37d32ab999b5724"
  },
  {
    "url": "assets/js/89.4d7c5e9e.js",
    "revision": "e868f6863f736040cf6fb3d4b145b693"
  },
  {
    "url": "assets/js/9.5145463a.js",
    "revision": "8238e8f22a9ecca807c0a05db07f0b3c"
  },
  {
    "url": "assets/js/90.8ceed48c.js",
    "revision": "7244007fbe6b5b612fe46cc5b471eef2"
  },
  {
    "url": "assets/js/91.95568576.js",
    "revision": "73486377ba567d9a30fa6d6d792acb69"
  },
  {
    "url": "assets/js/92.f6a0befa.js",
    "revision": "0f068a07f3c2cc126afbbe5af4236d5e"
  },
  {
    "url": "assets/js/93.1738a0fe.js",
    "revision": "78156931d9a88947b4baa367ac27fc5a"
  },
  {
    "url": "assets/js/94.60238599.js",
    "revision": "cac77841f67ea1c847317fe07b7cbca9"
  },
  {
    "url": "assets/js/95.b840cd5e.js",
    "revision": "8d53e9ae8a956c168441e5c4e361f10f"
  },
  {
    "url": "assets/js/96.9dc1dbc0.js",
    "revision": "ea1a9268b68f766dfdceb758c916ebde"
  },
  {
    "url": "assets/js/97.ba98491f.js",
    "revision": "f1996806de05306ec786b745a3f67ecd"
  },
  {
    "url": "assets/js/98.928117ff.js",
    "revision": "fb83b75b4fd032b55c3119821a816849"
  },
  {
    "url": "assets/js/99.30d6a224.js",
    "revision": "e29d25d997136bb6f91ae5c1d24992ac"
  },
  {
    "url": "assets/js/app.3491748f.js",
    "revision": "be45d56c67c4922591277968cc216436"
  },
  {
    "url": "assets/js/vendors~docsearch.b15e65d3.js",
    "revision": "b74cf40fe83ff3b84902ef5b48bbc8f5"
  },
  {
    "url": "connex/api.html",
    "revision": "2fce347bee128a5cf8b89cb15fff5fcd"
  },
  {
    "url": "connex/index.html",
    "revision": "6509dbc7851986a1e871fb0cc50a97c4"
  },
  {
    "url": "icons/144.png",
    "revision": "ef022f52c54f8ee6ccc8f005d52b99de"
  },
  {
    "url": "icons/168.png",
    "revision": "cd596353879cab531903b1f9c0f8d6dc"
  },
  {
    "url": "icons/192.png",
    "revision": "6aaa85947b9a315ac47970a54c3a66f4"
  },
  {
    "url": "icons/48.png",
    "revision": "2d20f253068748053fc7082400c88f4b"
  },
  {
    "url": "icons/72.png",
    "revision": "02b333d138cc4764e770eb1d7274e7ea"
  },
  {
    "url": "icons/96.png",
    "revision": "b3240f2ffb00f383cbc3783370a782cc"
  },
  {
    "url": "index.html",
    "revision": "f3bafa43201604fe0a1143b77ec0a578"
  },
  {
    "url": "logo.png",
    "revision": "1f7569a7fb96e141f556669c77877f1f"
  },
  {
    "url": "others/development-resources.html",
    "revision": "585bd5d4adf8f183b2a4a8f0bf8bdf63"
  },
  {
    "url": "others/miscellaneous.html",
    "revision": "edd8afcc6173f0cc449af17b064355cc"
  },
  {
    "url": "pt/connex/api.html",
    "revision": "aea1ace7e4f2423eb173da15339e4ebf"
  },
  {
    "url": "pt/connex/index.html",
    "revision": "33fde08d9c116360370d5455d1144e9e"
  },
  {
    "url": "pt/index.html",
    "revision": "13d28b4734bdb38ab0ff5b65183c0c82"
  },
  {
    "url": "pt/others/development-resources.html",
    "revision": "7959c7c70b12beed5d5af68f09f693e3"
  },
  {
    "url": "pt/others/miscellaneous.html",
    "revision": "acacf5fc83ce427a84a1959b303a6ed6"
  },
  {
    "url": "pt/sync/download-and-install.html",
    "revision": "72d5d4b908824b1e0e7259e381bb3ffe"
  },
  {
    "url": "pt/sync/faq.html",
    "revision": "2b4e3603f5eb598fd8b0ed3498db667c"
  },
  {
    "url": "pt/sync/user-guide/activities.html",
    "revision": "14c1456bc2702048679cd129c19a7e77"
  },
  {
    "url": "pt/sync/user-guide/browse-dapp-and-web.html",
    "revision": "250dcb78aa5e051b0b15ac52f310f0ea"
  },
  {
    "url": "pt/sync/user-guide/contribute.html",
    "revision": "5193ae032048e99f40c722ccdc45cf08"
  },
  {
    "url": "pt/sync/user-guide/contributing.html",
    "revision": "6592603b9dd5e7e23154be5cd7e27232"
  },
  {
    "url": "pt/sync/user-guide/import-ledger.html",
    "revision": "bb500fe62504173395a565969fcb3f25"
  },
  {
    "url": "pt/sync/user-guide/index.html",
    "revision": "6dc0a85f2719d8fc8a5c0159e86535e3"
  },
  {
    "url": "pt/sync/user-guide/interact-with-dapps.html",
    "revision": "afad3c91d3bf50d122a570486c25a0d9"
  },
  {
    "url": "pt/sync/user-guide/report-issue.html",
    "revision": "0d208136f4bb1e25a42409e2adfc20a7"
  },
  {
    "url": "pt/sync/user-guide/settings.html",
    "revision": "c829f149156b2153dae865f5e3820444"
  },
  {
    "url": "pt/sync2/faq.html",
    "revision": "a721008c6310750b7f35e712d7e1449a"
  },
  {
    "url": "pt/sync2/get-started.html",
    "revision": "6c8f85e32472d4a46fc7c1c1c78a96c5"
  },
  {
    "url": "pt/sync2/user-guide/activities.html",
    "revision": "8016c71b045f33790b53c3452d31c3c5"
  },
  {
    "url": "pt/sync2/user-guide/index.html",
    "revision": "97cab7219a1f3d24e7a1ef04778d1777"
  },
  {
    "url": "pt/sync2/user-guide/settings.html",
    "revision": "f9b72177c9905713bd6a9fc6ae115261"
  },
  {
    "url": "pt/sync2/user-guide/signing.html",
    "revision": "4641f61a37343b65596e19e240ad46bc"
  },
  {
    "url": "pt/sync2/user-guide/wallet.html",
    "revision": "e9649e3fa6573508b1f4dc1215e9bb00"
  },
  {
    "url": "pt/thor/get-started/api.html",
    "revision": "06f48060610feb0781da48ad648d1378"
  },
  {
    "url": "pt/thor/get-started/custom-network.html",
    "revision": "685effa5a13cdff6c90ea679d562ce53"
  },
  {
    "url": "pt/thor/get-started/installation.html",
    "revision": "c00aebfa9ad7a5a12be4905f4aafe76b"
  },
  {
    "url": "pt/thor/learn/block.html",
    "revision": "084f38d1d25546f52ce979ed28296584"
  },
  {
    "url": "pt/thor/learn/builtin-contracts.html",
    "revision": "b030c9b05df779a1b3b719980a8ed989"
  },
  {
    "url": "pt/thor/learn/faq.html",
    "revision": "c974adfa458fbab29e68ed9a0c732c60"
  },
  {
    "url": "pt/thor/learn/fee-delegation.html",
    "revision": "ea73c0263782cb95db2cb9876fb32a00"
  },
  {
    "url": "pt/thor/learn/index.html",
    "revision": "4f2182bc53f5747f5293db49b5146916"
  },
  {
    "url": "pt/thor/learn/proof-of-authority.html",
    "revision": "f86d0dee2eb24743716c37c5a9b4ce36"
  },
  {
    "url": "pt/thor/learn/transaction-calculation.html",
    "revision": "cf4283a6fa3817c1b5803f8225b16eaf"
  },
  {
    "url": "pt/thor/learn/transaction-model.html",
    "revision": "2b58224822599389bef5b470f5280520"
  },
  {
    "url": "pt/thor/learn/two-token-design.html",
    "revision": "d1d2f9c50350c2f8a43f305f91cf28f0"
  },
  {
    "url": "pt/tutorials/Connex-upgrade-Connex2_en.html",
    "revision": "5790fa69feb69a3ce81bd5ed033bcbf8"
  },
  {
    "url": "pt/tutorials/Connex-upgrade-Connex2.html",
    "revision": "bca2c695920bc7adc2c58b0f3d6050b0"
  },
  {
    "url": "pt/tutorials/contribute.html",
    "revision": "6e0d9ce84f6175c35a72fb594b952d90"
  },
  {
    "url": "pt/tutorials/designated-fee-delegation.html",
    "revision": "6f029b77dd3a48814075b6ae48d5bc94"
  },
  {
    "url": "pt/tutorials/forcible-transaction-dependency.html",
    "revision": "e06b40fb1a34bca4f191e76e491a53cc"
  },
  {
    "url": "pt/tutorials/how-to-develop-a-dapp-on-vechain-1.html",
    "revision": "e78a1d7f4ea6f0e32de38121d4692fa2"
  },
  {
    "url": "pt/tutorials/how-to-develop-a-dapp-on-vechain-2.html",
    "revision": "ceee0f0a18a38c7f59c3dcf1d013f1cb"
  },
  {
    "url": "pt/tutorials/how-to-develop-a-dapp-on-vechain-3.html",
    "revision": "99447c62bc9eeb8ffa9175c154e3a9ad"
  },
  {
    "url": "pt/tutorials/how-to-integrate-VIP-191-1.html",
    "revision": "fa0f87228e5c38c27bfb846228397b24"
  },
  {
    "url": "pt/tutorials/how-to-integrate-VIP-191-2.html",
    "revision": "59a7aec2c76fdf0ef0a9a4656070fd14"
  },
  {
    "url": "pt/tutorials/how-to-integrate-VIP-191-3.html",
    "revision": "4f670ebb039b7d7a481410d7dded31cc"
  },
  {
    "url": "pt/tutorials/index.html",
    "revision": "77cb57ea299289b3e92be0f4716d6a2b"
  },
  {
    "url": "pt/tutorials/Useful-tips-for-building-a-dApp.html",
    "revision": "f473b2e81f2548691f8be185df4131c4"
  },
  {
    "url": "sync/download-and-install.html",
    "revision": "c1717bc4d142e9bf304ef1e2d30a6144"
  },
  {
    "url": "sync/faq.html",
    "revision": "4a5fcb6f0ac6ef7969979199341c05d4"
  },
  {
    "url": "sync/user-guide/activities.html",
    "revision": "1a87e492c2af0029d3b662cb3d6550e3"
  },
  {
    "url": "sync/user-guide/browse-dapp-and-web.html",
    "revision": "12d9dca1cf418c366ca2b11fe2429b14"
  },
  {
    "url": "sync/user-guide/contribute.html",
    "revision": "66d55adf745bcda0a3c9019fb48fbd28"
  },
  {
    "url": "sync/user-guide/contributing.html",
    "revision": "d5b065649f523ff3f4b074e2329d1ff0"
  },
  {
    "url": "sync/user-guide/import-ledger.html",
    "revision": "be8e3f3ff50a3c725ffceca22515d144"
  },
  {
    "url": "sync/user-guide/index.html",
    "revision": "93bf64eef6624ea8b0e85151dfd00d1d"
  },
  {
    "url": "sync/user-guide/interact-with-dapps.html",
    "revision": "63f0714c6102446c74b5ce3496e5ebc9"
  },
  {
    "url": "sync/user-guide/report-issue.html",
    "revision": "0ea1a5cb80ac70b075692b4790c29847"
  },
  {
    "url": "sync/user-guide/settings.html",
    "revision": "30c3c7cf3acabd8453c0d80b511f4dbd"
  },
  {
    "url": "sync2/faq.html",
    "revision": "58a1d9d63561bad0f91e81d97b0f438f"
  },
  {
    "url": "sync2/get-started.html",
    "revision": "ee54b75ba1741660caabcb3497e6673d"
  },
  {
    "url": "sync2/user-guide/activities.html",
    "revision": "3b89119a60cc44fbc7bbe176c28f05a0"
  },
  {
    "url": "sync2/user-guide/index.html",
    "revision": "2d7d8d02b05fc0a731ab8c277bd8e31b"
  },
  {
    "url": "sync2/user-guide/settings.html",
    "revision": "c04d85c4b36da0372fdaba2ff0bc5d80"
  },
  {
    "url": "sync2/user-guide/signing.html",
    "revision": "dd32c6b3cdcedef767d11182efd0988b"
  },
  {
    "url": "sync2/user-guide/wallet.html",
    "revision": "5879acfc065f907c64df1736ef9132f7"
  },
  {
    "url": "thor/get-started/api.html",
    "revision": "55b0d3a3c37699a8d5a80a7e328c33a8"
  },
  {
    "url": "thor/get-started/custom-network.html",
    "revision": "4b2567069374457c96882c5b8c4fe864"
  },
  {
    "url": "thor/get-started/installation.html",
    "revision": "767b1c374189064ad2634c1010979692"
  },
  {
    "url": "thor/learn/block.html",
    "revision": "bdcf085b70de58e03fe9cb6edd49b9cb"
  },
  {
    "url": "thor/learn/builtin-contracts.html",
    "revision": "4b4b121f66b0aade8b781d6c98b373bf"
  },
  {
    "url": "thor/learn/faq.html",
    "revision": "3aae053c18f24aa08112e65b08acb90a"
  },
  {
    "url": "thor/learn/fee-delegation.html",
    "revision": "8bcda3269b3f85d518ff54de9af74ed2"
  },
  {
    "url": "thor/learn/index.html",
    "revision": "eac6f7f01b554f5bad5c91ab2047de44"
  },
  {
    "url": "thor/learn/proof-of-authority.html",
    "revision": "09237f5443203e313a15d67b98d45065"
  },
  {
    "url": "thor/learn/transaction-calculation.html",
    "revision": "7319d81b9624f5356576412e4aca8d57"
  },
  {
    "url": "thor/learn/transaction-model.html",
    "revision": "e35e8d10472820e17c2155381d42d75a"
  },
  {
    "url": "thor/learn/two-token-design.html",
    "revision": "8b42c482f2f0c116c0ea176058d81bb3"
  },
  {
    "url": "tutorials/Connex-upgrade-Connex2_en.html",
    "revision": "cefd1d0bc5d681de6c202d19665f2ad7"
  },
  {
    "url": "tutorials/Connex-upgrade-Connex2.html",
    "revision": "6910c6ea3b85ad3206ac86a4a0cbadea"
  },
  {
    "url": "tutorials/contribute.html",
    "revision": "b16496ba6abae6f2dc56776d2e79a58e"
  },
  {
    "url": "tutorials/designated-fee-delegation.html",
    "revision": "18da790853292ea073aa83efdf2b977a"
  },
  {
    "url": "tutorials/forcible-transaction-dependency.html",
    "revision": "a2f1fd69623dc1a6791ec949b356f1f7"
  },
  {
    "url": "tutorials/how-to-connect-sync2-to-solo-node.html",
    "revision": "0b50e804f26306960801680a64d7413a"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-1.html",
    "revision": "0bd2da71135f2025b88c90305abda1d5"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-2.html",
    "revision": "a631c6c2d4e2b717e6aa164e169a93e8"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-3.html",
    "revision": "d21d83487b5ba7036fcb6414c019d5dd"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-1.html",
    "revision": "e6728e7733cf61ee049e111864230c22"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-2.html",
    "revision": "6ccc7646d339be626da84ce5d61f83b5"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-3.html",
    "revision": "a455feb2550c15b07ab5bfb7b34de54c"
  },
  {
    "url": "tutorials/index.html",
    "revision": "9319aba796e3959ba727498e1c8ea62e"
  },
  {
    "url": "tutorials/Useful-tips-for-building-a-dApp.html",
    "revision": "e9a2f792ecd9e2f1ff742c5cf3b7501a"
  }
].concat(self.__precacheManifest || []);
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
