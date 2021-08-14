'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "804cde440038f4fab7f347860896b2b9",
"index.html": "1309cda088cdce7d019bff6ce0b5f1c4",
"/": "73be3445adc8d49407f4b36e21d3236c",
"main.dart.js": "d9fdc91baacae9cc4471021167114c1e",
"favicon.png": "a92fa95d26582876a6ab95d7fe3541e3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "83da42e17d7606f8e86057c2732d8f62",
".git/ORIG_HEAD": "25ecd3557c88db7b7e89d43d28737e0c",
".git/config": "dcab72d5e3ca211209aa5c686ff50489",
".git/objects/0c/d5aba5ca7b6e1798a280e53a333f04e3147a40": "8e06efcbd0a13cd4b3e5b9e9c517fa9f",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/4380efd027fa24622c7ef4670d389e3b024ec1": "d028948174a03628372bfa7f9f3eb238",
".git/objects/56/cb34b7f8bb9dfda46cb113ab3ed7677518d641": "e428c355ab4ee88e955cdd6288a897d4",
".git/objects/51/623d40d0efce72725ea7afd4bcf04042d786a8": "8de78b7f47107575fec726375b464dd0",
".git/objects/93/d74e4fdfac8a78c8966c7930a492c3c856ae14": "209665b68b478b99e60ad00349fe2b5c",
".git/objects/60/48620b540cefb67933521f17a1ed11edb6ff05": "52300020fc9c2d7b7f144b323626e672",
".git/objects/34/2b739af4b6f8e75f381a196ca791ebc5f6b057": "3d79355084bbf15da148c039323b484b",
".git/objects/9d/cc54211004b2c9a6d01168eb6b3bd2403bd1ba": "395b458e32bec4d1ca6cdad5ff105666",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
".git/objects/bd/72d765c3c84a5ddaa5717b62a90d073bc9e71c": "672f184e851d68ac71894b373f9fed12",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e3/c8a0a1fd169b87f4a74b31adfacc79648132db": "9fea5eea7192d602b408169cfb549ce3",
".git/objects/e4/bd6a9d6cebde0547aceecd7f27b4a226c57787": "62a827017deed7062672eb9970bb6bd7",
".git/objects/c6/050d3d72ec4ced3cbacc2f300e54e82f5e473e": "bee38e7b5477255f37b17232aea5ce01",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/72/7314779205df3f3f9c1f5214b79d90ae8ce7d5": "f7f4d5c7ef1d72c841fcd845a037c2e6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/37/e45826ccd7b527b159021253d0ae94592b6324": "3a75b0ef725bff8104ef26deef63b180",
".git/objects/37/bb108064d0d713682870a9fcae82261f55d676": "fd98e13b66ec2f74e9fddf4337456f24",
".git/objects/aa/ee7131a199a700f5965a807efcd923a87ae1b3": "418dfe6a87b35bfc3028f19b64c1eda2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e8/b94ed84c55c05c9e2a80f780c52abd576e4b95": "9bcd5de00c68642e0ef87acfa4e16dbe",
".git/objects/e0/296edf75cd01a8529d1cc4de9e3ef00ddcb708": "2980c77fe575487d0878e16737377210",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/1e/29669fdbce196fa3bf5cd9a73fbc48737f69c1": "2ec8c6409b48987d99478d7b940c26e9",
".git/objects/84/35287889704137bd2df97d40714a4c5c77c6af": "99f0df31c7729a8e1bb211fa95d2e4e1",
".git/objects/1d/f83d70aa48cc2b372eb59017868f4d0f9fa3c8": "fd6844781e125aebda54b3594c95ac5a",
".git/objects/71/1fd684ded5963a8fb0d94f0d6fd0f15c323f9f": "8925761e70faab99396c9e9362342ce7",
".git/objects/2e/04cac5587eb3bdb88328d0c9ef945e79df52dd": "edc90ef997d97d8777904980b49143a3",
".git/objects/8e/a2cbd2c0ad13448572f639cc2e49211b42e0ab": "6ccf383f23e7229a5e2e311fa7c303c8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0d0694b39c13ddd7a039ecb78c0ceed4",
".git/logs/refs/heads/main": "0d0694b39c13ddd7a039ecb78c0ceed4",
".git/logs/refs/remotes/origin/main": "e22406717dd75ef712b827df2918233c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/refs/heads/main": "ed544eb9f84af415ba464d544ac7175a",
".git/refs/remotes/origin/main": "ed544eb9f84af415ba464d544ac7175a",
".git/index": "8969e296cab67b995839f271479c373b",
".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/FETCH_HEAD": "4d2c7ba0e30b67fc7079a952e9cc7496",
"assets/AssetManifest.json": "6f7fa9a85b859fdc35e6a904efedc4fc",
"assets/NOTICES": "6f8ca43b07a3263acd251e1e9b6716da",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_tex/js/katex/index.html": "f0b07d87f116752c2c8de2882f9db878",
"assets/packages/flutter_tex/js/katex/katex.css": "cf85eb8b74953ecc5b3685c0969b4349",
"assets/packages/flutter_tex/js/katex/katex.js": "6a42d26befadf4cadea19a9978c48396",
"assets/packages/flutter_tex/js/katex/contrib/mhchem.mjs": "1aa580b655c87d45fda557609d6b557b",
"assets/packages/flutter_tex/js/katex/contrib/render-a11y-string.js": "b530f645e0fbb1735e0b24a308513f8e",
"assets/packages/flutter_tex/js/katex/contrib/mathtex-script-type.mjs": "23784275c921134bf5cfadac62822f7a",
"assets/packages/flutter_tex/js/katex/contrib/auto-render.mjs": "29c8c1d133e8c6b36f68ca003344b4f2",
"assets/packages/flutter_tex/js/katex/contrib/auto-render.min.js": "e6e57901eb546dfab76741c18a959c7b",
"assets/packages/flutter_tex/js/katex/contrib/copy-tex.mjs": "ebaff0c995dd5d7fbe9b9ed73711c67c",
"assets/packages/flutter_tex/js/katex/contrib/auto-render.js": "4fa680c20fb6bfbc75a9692f7be8caf4",
"assets/packages/flutter_tex/js/katex/contrib/mathtex-script-type.min.js": "807a75494d38fd506e8912a7c5009cbc",
"assets/packages/flutter_tex/js/katex/contrib/render-a11y-string.mjs": "d6f5ca2d31926cc539ed5dd85c1bac39",
"assets/packages/flutter_tex/js/katex/contrib/render-a11y-string.min.js": "796444d30a598d564f28cf5bfe15c2ba",
"assets/packages/flutter_tex/js/katex/contrib/copy-tex.css": "0ba86b0c9c4ca9b0294bfc1fe983d6f7",
"assets/packages/flutter_tex/js/katex/contrib/copy-tex.min.js": "1d34f04be48d9e25b6284ea3189a9850",
"assets/packages/flutter_tex/js/katex/contrib/copy-tex.js": "092e27b92653a287861050f925dfa39d",
"assets/packages/flutter_tex/js/katex/contrib/mathtex-script-type.js": "5d2eee4d7ce79d3aead902b0eb9a9909",
"assets/packages/flutter_tex/js/katex/contrib/mhchem.min.js": "5e402faffe96db63faa6d28c099c1237",
"assets/packages/flutter_tex/js/katex/contrib/mhchem.js": "76beb1e3cdde114598023538e2d0a18f",
"assets/packages/flutter_tex/js/katex/contrib/copy-tex.min.css": "d610c1e8a5e8a14a6fa9b2a1d9c58ce5",
"assets/packages/flutter_tex/js/katex/README.md": "6e27f1ffed27c889b4e644ccd9bc2340",
"assets/packages/flutter_tex/js/katex/katex.min.css": "f9417c96e906891af6c4153115f0e471",
"assets/packages/flutter_tex/js/katex/katex.min.js": "91c4a91ef515a0d911078b770345ac51",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Typewriter-Regular.woff2": "8073cf012f453ddf47d5b8776f6bb1e5",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-Regular.woff": "ab80a08c3c6915afb4b4a3300a55ef8f",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_AMS-Regular.ttf": "342a61e0c4dee016881d00d9fa69c335",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-BoldItalic.woff": "cd5eb9a8d163f765f01c4b1a44567f4c",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_AMS-Regular.woff2": "2c50d7a0caadcdd36b063bd9f9268291",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size3-Regular.woff2": "920b3023bec41ddd8a7d79ff9da70643",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-Regular.woff2": "6c094af9274ceccdc817400fdf49c5af",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Script-Regular.ttf": "781730b2f066b5268a8fb75b4f7c479b",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Caligraphic-Bold.woff2": "0f0d0935d51deac6c1f7f0dea7ffe886",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size3-Regular.ttf": "ee3e5bf4b1e08bb325312348661c276b",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Typewriter-Regular.woff": "b636fa487ef5e2f56bb3529bc9168be0",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Caligraphic-Regular.woff": "f7eb2b22569f8c8a9ad8b6d299d4f6a4",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Typewriter-Regular.ttf": "90f78c1075e0cdb56287589112f56011",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-Italic.woff": "4eee467e52c8113a7c48549dec426808",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Caligraphic-Bold.ttf": "b27e354b9a940cfabb1cdad2f5d35eb9",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_SansSerif-Bold.woff2": "f9ae435239a0933219b7dba4480141cc",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Math-Italic.woff2": "1aa96e4e339118aad4153041adbd9947",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size4-Regular.woff2": "83af4078518f26c4b62160f6565d6d86",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Fraktur-Bold.woff2": "e2c9ac8504a2e0f1ec22e5904087174f",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Caligraphic-Bold.woff": "9ae9058d9d744f501b41d1fe1236ed57",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_SansSerif-Bold.ttf": "362d94c68887ef3079e3fa04abc7b505",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Fraktur-Regular.woff": "98d5da581ba8efea0934c92794c6c56c",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-Bold.ttf": "ed829b5fabfded4f5f943df1012da1b1",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_SansSerif-Italic.woff2": "e7aabbc7a3b86d947d8ad4436a81b348",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-Bold.woff2": "233f218ee616854f491c7195cd8fffcf",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_SansSerif-Regular.woff2": "6f7840dc539b8786da712dc43a57051c",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Fraktur-Regular.ttf": "6b53a2db48b3bbde91ec9c85590ccc44",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-Regular.ttf": "c89c643655fabf99f2b78eb9cc5cf4b0",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size2-Regular.woff": "0d72ed102d351b453046ee3d9c4600fb",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-BoldItalic.woff2": "09fa2c8f6a5a787648fcf62022b9e5c6",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Fraktur-Regular.woff2": "a2be00f37608cf99fb1c0351dc4e9342",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Script-Regular.woff2": "5921f5ba7c02f3aeb478e4e87d2187bf",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size4-Regular.woff": "04dc70fcc38cd220b3129133310717ca",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size3-Regular.woff": "34ab65d6e933eaa143598aa54b5832d6",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_AMS-Regular.woff": "3392cf39311b42f70073c2732b99a24c",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-Bold.woff": "316611c7a4afe59d3bcbe9e0f1a41613",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_SansSerif-Italic.ttf": "2c74297808a50220aa64d435d69006bc",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Math-Italic.ttf": "f677173e00e38ef3151aa3156ef87507",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size1-Regular.woff": "aec6c2103821f67bc9f53dee3fbad982",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_SansSerif-Regular.woff": "e8735df90d494a81dfc1568c352b21bc",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-Italic.ttf": "14ff9c98a820d988c169e27ca3eb78b8",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Math-Italic.woff": "68f671df4bc4ab87b9f3e5111c28c49a",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Math-BoldItalic.woff2": "8bdd60921916168d5c53c2caf3931e86",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Fraktur-Bold.ttf": "359e1e974d07f534d0665dc5add72209",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size2-Regular.ttf": "24cbe093e557076be8c6c5ffee4aa61b",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_SansSerif-Italic.woff": "07ffaec68ea2d7c3428eec8b12969925",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-Italic.woff2": "4dc3271d3627578d951ecd3fcdb7f762",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size1-Regular.woff2": "3a5edc1620fc7a7a2e25112b7a8e6cf8",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Fraktur-Bold.woff": "314623ce54a8a2654fb5df3c9cec01aa",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Script-Regular.woff": "ced4ee620859978fa1921c87d6dbd774",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_SansSerif-Regular.ttf": "6087fc040fbe6c4e83da5ee2c1f8a803",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Math-BoldItalic.woff": "e1a2ff93bd15ea54164340e3d1b2f901",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size1-Regular.ttf": "54a80b37e92f14f32a33165c571f8e95",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Caligraphic-Regular.ttf": "bd18bae257a88cfa6a36310cd585d0a0",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size4-Regular.ttf": "b78c75bb4d0c95e4a87e006e83f187e4",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size2-Regular.woff2": "963980610d2663b7c04355bcf17d5bb8",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Caligraphic-Regular.woff2": "8a3d1df80c7d8618896f166336d89dce",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-BoldItalic.ttf": "ca23ba4b607268345b1f0b22bff41292",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_SansSerif-Bold.woff": "f1cea170c77d231b4ce249fcf850f3f4",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Math-BoldItalic.ttf": "7b481bb892d872c27234188b59ca8f10",
"assets/packages/flutter_tex/js/katex/katex.mjs": "6b03f74565c2fe5798f9abd557fdc556",
"assets/packages/flutter_tex/js/mathjax/index.html": "73be3445adc8d49407f4b36e21d3236c",
"assets/packages/flutter_tex/js/mathjax/LICENSE": "3b83ef96387f14655fc854ddc3c6bd57",
"assets/packages/flutter_tex/js/mathjax/MathJax.js": "b2c103388b71bb3d11cbf9aa45fe9b68",
"assets/packages/flutter_tex/js/mathjax/extensions/asciimath2jax.js": "ba4a24f0884938191d5cc8a719050c08",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/HTML.js": "dd05d732ce5a656edd0ef35488d236fe",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/extpfeil.js": "52e41797d7f6c1008c14e06b4bcf9a19",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/action.js": "b291ae5afcf2686e6007e2ad0ac5cb07",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/boldsymbol.js": "567c12ebe2987167bc8bb56382c8bb23",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/noUndefined.js": "133cd9dd68f0e555ecc1358fd707948f",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/autoload-all.js": "4bd547185b751a5499f7cb74b0975f19",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/verb.js": "0a894ca8fcced14fb954975530d125c2",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/unicode.js": "6d5c8e9a1069c920832efc089e987d41",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/cancel.js": "6b05f99b08bc0db84d1eedc95d4013ff",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/enclose.js": "c0b4bb3761086f90c82c5cde9a173af2",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/color.js": "81ada75a6f4efce1b3b317cbd693af67",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/AMSmath.js": "2a0d678068a6a80be023bad13a50d845",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/mhchem3/mhchem.js": "f29ec4834edb500aaf18d4a4ac5d94ba",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/begingroup.js": "ad78446e91555049457f3ee8e3330ec7",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/text-macros.js": "e26678d55796849a74bb32e2effe9403",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/newcommand.js": "3d30b98aa3e6f9304d8ddf2ded6def5c",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/bbox.js": "ea841d1b20ee93b7ef4268301ae0d6e2",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/noErrors.js": "83663e8d081cb5b405482e041be951e5",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/AMScd.js": "3688a0945311e1a2d4422674c3978f62",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/mediawiki-texvc.js": "bab41699c500f82c5e30f204689667bf",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/AMSsymbols.js": "aef5a6cdabcbb03c017905b91157999d",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/mathchoice.js": "da60bce2273c8f343a89f19dd334cb0b",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/autobold.js": "85c15711cd25778da413647db10806f5",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/mhchem.js": "e2471e4a8a4f434354af76a55feab242",
"assets/packages/flutter_tex/js/mathjax/extensions/MathML/content-mathml.js": "0ec4a3e1ad4484b0c68a6f757a244532",
"assets/packages/flutter_tex/js/mathjax/extensions/MathML/mml3.js": "d09efa633025b9964d1973933b847df6",
"assets/packages/flutter_tex/js/mathjax/extensions/MathMenu.js": "46871bab94870bbd170c994c28b99240",
"assets/packages/flutter_tex/js/mathjax/extensions/AssistiveMML.js": "39c008cb2bc669cf413f7dbec5eed5c6",
"assets/packages/flutter_tex/js/mathjax/extensions/HelpDialog.js": "a3a81636a5169e8d4bbfd6a91e0d1ce4",
"assets/packages/flutter_tex/js/mathjax/extensions/Safe.js": "43fcac7fb8b68b0e6026b260d29f52b9",
"assets/packages/flutter_tex/js/mathjax/extensions/fast-preview.js": "f82f1573916c74e598b02c0739a123c0",
"assets/packages/flutter_tex/js/mathjax/extensions/MathZoom.js": "0227892f0f35af73e37a7f7019bf366d",
"assets/packages/flutter_tex/js/mathjax/extensions/FontWarnings.js": "54dc42c1c40d7965a622fb01c66b9d61",
"assets/packages/flutter_tex/js/mathjax/extensions/tex2jax.js": "6313aa4e8b7edf452102de2729ec6aed",
"assets/packages/flutter_tex/js/mathjax/extensions/toMathML.js": "bb10d4f7465fa653bbe0dde8ab4a0ac1",
"assets/packages/flutter_tex/js/mathjax/extensions/mml2jax.js": "835e7b107ce67d0e09a002302b64d979",
"assets/packages/flutter_tex/js/mathjax/extensions/MathEvents.js": "1ba83b0ae280ef29dab5fcd2888f5992",
"assets/packages/flutter_tex/js/mathjax/extensions/jsMath2jax.js": "c0161a7cbc5e2b0ab68ec640b0aa8052",
"assets/packages/flutter_tex/js/mathjax/extensions/CHTML-preview.js": "ccd22964427efb2f7b8b5d47a81d0634",
"assets/packages/flutter_tex/js/mathjax/extensions/MatchWebFonts.js": "5ccc51f3e476e49f7dbe199707fb2111",
"assets/packages/flutter_tex/js/mathjax/jax/input/TeX/jax.js": "095f5949e9fcae675246f56a4fa5fa75",
"assets/packages/flutter_tex/js/mathjax/jax/input/TeX/config.js": "c6de0381e92b311e75264dac618de39d",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/jax.js": "addaed8cba00c8777540933e45cf9807",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/config.js": "cf85ea4a5bc5ac677243e755a7c31464",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/e.js": "c11b52d52968ce00245693c04c22d0e5",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/a.js": "997185dd1d2e45dc233bd6b4dd8e4958",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/y.js": "f9807dae1160344aa125404301c8bba0",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/x.js": "af4e41f5e5158b126edb92261a52918b",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/d.js": "9e5558405f28de118492d95d97441aea",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/o.js": "22baa9e0bbb7760311a193a6e0b10b99",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/w.js": "d3ba9e2084b7adf1866b70f6cb9dd413",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/k.js": "6414e632ff2cd2ec868d2976aee1018c",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/s.js": "99fb74daf2d1fd537f7ce35b916fc793",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/scr.js": "d7f570707643fba84335a507bc9a35cc",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/j.js": "8455021e272e277e99236b4a4fb0edd0",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/r.js": "8bf057da0768d9dbf0cfe4fef625f548",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/opf.js": "a241d729bce659ffed7d91c7f66c84ac",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/n.js": "59b4b5b42fb4304785c6212c59cbb82c",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/v.js": "c44170b66aa9a7287b1158006b3a0e16",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/i.js": "770ae1b26b8a2f1a593923ec33855889",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/q.js": "632221c21f96010d8bdc81bbc62b8526",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/m.js": "db49b39bfe1583819efdfce232b4d1e8",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/u.js": "4d765eac78c0046d5552654eea91e4c9",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/l.js": "80abb62bfbdba0bb9742ffac7b034895",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/t.js": "ac6fae5975acbc3a673f8547daa7973f",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/h.js": "3015ebd7f13c11e334c0a7a9ab308767",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/p.js": "ff073de21d6efae5f456d5e31c9cfc31",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/c.js": "4d5c64c1f1f43db2b180f499910dff56",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/fr.js": "eb79fa45457e18414aef18a99d622ea4",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/g.js": "5f51d546a5718a7fe99e89feba054276",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/f.js": "9277e2d9f1d4ac45b51c6aaad3c70bcb",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/b.js": "d973c36cb037c5514a73d0d9b6626966",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/z.js": "f1e3d439bf2837ef365dd1c39484fd1c",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/jax.js": "70c06ee3014f9b36027101a7ca1fdd0f",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/SuppMathOperators.js": "f8cc084aabc1d52fb0a94457d6d8e7e2",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/Latin1Supplement.js": "cb26901092cf263c18de37986141dc74",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/MathOperators.js": "08e26ceffc57907eb6f1f4ec8dc39cd2",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/GeometricShapes.js": "53a4eb7cee17491160e00656b97ea5be",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/LetterlikeSymbols.js": "509f92c99cab336ecf4adec735adfaac",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/Dingbats.js": "059600ef627ed3ed8bb2115b6994942a",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/BasicLatin.js": "cac9b2e71382e62270baa55fab07cc13",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/MiscMathSymbolsB.js": "34d5c8d0c0d1efa6051845cc0830dc85",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/SupplementalArrowsA.js": "4645a0b9cb5fba1b5d2ad7605e158dd1",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/Arrows.js": "cd22fc0311779024bdf280961e3e0da5",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/SupplementalArrowsB.js": "b38a7bc0f88379f31a11ae4f068b769a",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/CombDiactForSymbols.js": "a546cc2e04b694b272d3701d0574d8cc",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/GreekAndCoptic.js": "7c3c6d008598e331bae1e26fccfb7f5c",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/CombDiacritMarks.js": "f93aa0e2e266bd4c584135477a8c62ed",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/MiscMathSymbolsA.js": "234873cd2f7f069a8f5616c00f7437cc",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/SpacingModLetters.js": "a3f8559b799ecacc12683a39e2c29819",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/MiscTechnical.js": "19cd81efdd76cc0fed0c14c05560761c",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/GeneralPunctuation.js": "da9ce79f07efe980dfd5ca66f879e739",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/MiscSymbolsAndArrows.js": "e8402159215942989336661560724c92",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/jax.js": "983708db351371378d03356a7848f4d1",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/config.js": "2331dfa04ed33a371d8735e1798c4980",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/autoload/annotation-xml.js": "5c0a5ac13c601aaa920fe9a99eed23fa",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/autoload/ms.js": "d6a2a58b5b979b352c0fa9919772618c",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/autoload/mglyph.js": "2fed982e207e72c96899caf9d25dca64",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/autoload/mtable.js": "b8c87ca1398f29238deb7235a08508ca",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/autoload/mmultiscripts.js": "5f56f7566baf73e3e745f5f4325e6645",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/autoload/menclose.js": "7b2ea9eb6ab045b23927ad91ca7269e4",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/autoload/multiline.js": "dbf95bacbdf5b615b1c4c768aa13e192",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/autoload/maction.js": "6267f292f88b2f7a011d43e7b2288375",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Monospace/Regular/Main.js": "da942728fba8835448b144bf5978c64d",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Size4/Regular/Main.js": "b619df9dbc3d32cf4bf4050a9c0bd4f7",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Misc/Regular/Main.js": "83905891ae1c1ba5113af6dd20752d3f",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Size3/Regular/Main.js": "632d9bde1dfa761e0b8ca7f6ad528f99",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Alphabets/Regular/Main.js": "efe14a410f0f6068cc8f3295492e9c8a",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Size2/Regular/Main.js": "288e754ba2854b9523cbcea6ebbbb60c",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Size5/Regular/Main.js": "fddbbbcd462a8e11582c211334afea0f",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Variants/Regular/Main.js": "a0e179664a7f9c7429169f18c62423fa",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/SansSerif/Regular/Main.js": "3aa7be9c67f8d7964473e683c646a895",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Operators/Regular/Main.js": "dee87779bf7bd236dfa2582f5c67100e",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Marks/Regular/Main.js": "1ba4c71aae376a97764d6d987c352727",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Latin/Regular/Main.js": "6ea87ff970625b5e69720cea202b3d72",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Shapes/Regular/Main.js": "ace21a50708f5f803b02c659981bbb8f",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/fontdata.js": "df1b5ef97cf27cab4d02762d04df2b19",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/NonUnicode/Regular/Main.js": "405ada06bcbd00ce0d8bcbb25a090060",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Script/Regular/Main.js": "0a4bed2eb2cdd41e0ea0f0fba08bd761",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Size6/Regular/Main.js": "aeb0ccd2bd94068b57dbf4639961de84",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Size1/Regular/Main.js": "288666c04f3e95c93475786725e042aa",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Symbols/Regular/Main.js": "d0990851f00fd8c80cc70a31d016110d",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/DoubleStruck/Regular/Main.js": "05efb6ce00d94b5cf3837dff31b3f71c",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Normal/Regular/Main.js": "076ba0f589c1743a9c62aa91d42a0bef",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Arrows/Regular/Main.js": "665c0e57895adfb6966675bebdf83863",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Fraktur/Regular/Main.js": "e3614ebdb6144db9f6a7eaa8d28abfb9",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Main/Regular/Main.js": "18979444cbc184de17d8211badbde33a",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/fontdata-extra.js": "1f8deeefc60655afe9fa112bd0a0713d",
"assets/packages/flutter_tex/js/flutter_tex.css": "062a3279da48d0913eeeeb0d2266e26f",
"assets/packages/flutter_tex/js/flutter_tex.js": "9402d83f805bfc891b50ffd62c918def",
"assets/packages/flutter_chat_ui/assets/icon-seen.png": "b9d597e29ff2802fd7e74c5086dfb106",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-seen.png": "10c256cc3c194125f8fffa25de5d6b8a",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-attachment.png": "9c8f255d58a0a4b634009e19d4f182fa",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-error.png": "5a59dc97f28a33691ff92d0a128c2b7f",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-send.png": "2a7d5341fd021e6b75842f6dadb623dd",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-document.png": "e61ec1c2da405db33bff22f774fb8307",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-delivered.png": "b6b5d85c3270a5cad19b74651d78c507",
"assets/packages/flutter_chat_ui/assets/icon-attachment.png": "17fc0472816ace725b2411c7e1450cdd",
"assets/packages/flutter_chat_ui/assets/icon-error.png": "4fceef32b6b0fd8782c5298ee463ea56",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-seen.png": "684348b596f7960e59e95cff5475b2f8",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-attachment.png": "fcf6bfd600820e85f90a846af94783f4",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-error.png": "872d7d57b8fff12c1a416867d6c1bc02",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-send.png": "8e7e62d5bc4a0e37e3f953fb8af23d97",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-document.png": "4578cb3d3f316ef952cd2cf52f003df2",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-delivered.png": "28f141c87a74838fc20082e9dea44436",
"assets/packages/flutter_chat_ui/assets/icon-send.png": "34e43bc8840ecb609e14d622569cda6a",
"assets/packages/flutter_chat_ui/assets/icon-document.png": "b4477562d9152716c062b6018805d10b",
"assets/packages/flutter_chat_ui/assets/icon-delivered.png": "b064b7cf3e436d196193258848eae910",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/Vector.png": "6a34d934685b40686fd11dc4a2cf5144",
"assets/assets/images/logo.png": "13c4aac95f7ee530765baee16758fbf8",
"assets/assets/images/Frame.png": "584defe56d653cd31d7470d6843c0a67"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
