if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,a)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let n={};const t=s=>l(s,r),o={module:{uri:r},exports:n,require:t};e[r]=Promise.all(i.map((s=>o[s]||t(s)))).then((s=>(a(...s),n)))}}define(["./workbox-7f3026ab"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"db38b8c12b1f9e9170837674834cdc5b"},{url:"assets/2021-12-24-hello-word.html.18b45f24.js",revision:null},{url:"assets/2021-12-24-hello-word.html.81c0b2ec.js",revision:null},{url:"assets/2021-12-25-hello-word-with-header-image.html.71052872.js",revision:null},{url:"assets/2021-12-25-hello-word-with-header-image.html.971b28c1.js",revision:null},{url:"assets/2022-05-23-hello-word-with-header-image-with-long-title.html.262e0510.js",revision:null},{url:"assets/2022-05-23-hello-word-with-header-image-with-long-title.html.a39499b5.js",revision:null},{url:"assets/2022-05-24-hello-word-4.html.4f93ef7d.js",revision:null},{url:"assets/2022-05-24-hello-word-4.html.5a76369b.js",revision:null},{url:"assets/3.86b40545.js",revision:null},{url:"assets/404.77a5b675.js",revision:null},{url:"assets/404.html.849011d9.js",revision:null},{url:"assets/404.html.d341cb57.js",revision:null},{url:"assets/analytics.html.1b7c2e8d.js",revision:null},{url:"assets/analytics.html.3522fff3.js",revision:null},{url:"assets/analytics.html.85a7c961.js",revision:null},{url:"assets/analytics.html.d78f00cd.js",revision:null},{url:"assets/app.38956ca6.js",revision:null},{url:"assets/baidu-tongji.html.031c4e1d.js",revision:null},{url:"assets/baidu-tongji.html.0d1b1b7c.js",revision:null},{url:"assets/baidu-tongji.html.33bbdefe.js",revision:null},{url:"assets/baidu-tongji.html.a58e00df.js",revision:null},{url:"assets/chart.html.1981c953.js",revision:null},{url:"assets/chart.html.3b45eb4f.js",revision:null},{url:"assets/chart.html.449a4071.js",revision:null},{url:"assets/chart.html.5f08766b.js",revision:null},{url:"assets/chart.html.673f5a17.js",revision:null},{url:"assets/chart.html.6db4ef26.js",revision:null},{url:"assets/chart.html.efa2d712.js",revision:null},{url:"assets/chart.html.f35a5bb6.js",revision:null},{url:"assets/comment.html.2091ac29.js",revision:null},{url:"assets/comment.html.b3e022c1.js",revision:null},{url:"assets/comment.html.f5224547.js",revision:null},{url:"assets/comment.html.f98e55ae.js",revision:null},{url:"assets/Common.f2c55205.js",revision:null},{url:"assets/config.html.3d2e7007.js",revision:null},{url:"assets/config.html.c9debe71.js",revision:null},{url:"assets/config.html.d605ab0b.js",revision:null},{url:"assets/config.html.e82dc122.js",revision:null},{url:"assets/content.html.0f003382.js",revision:null},{url:"assets/content.html.53e1a962.js",revision:null},{url:"assets/content.html.69ff2327.js",revision:null},{url:"assets/content.html.db265cd6.js",revision:null},{url:"assets/deploy.html.1d8f8a04.js",revision:null},{url:"assets/deploy.html.aff09a9b.js",revision:null},{url:"assets/giscus.html.33558164.js",revision:null},{url:"assets/giscus.html.9b7750bd.js",revision:null},{url:"assets/giscus.html.c4924f16.js",revision:null},{url:"assets/giscus.html.d78be6b2.js",revision:null},{url:"assets/gungnir.29c91722.js",revision:null},{url:"assets/hitokoto-bubble.2bdc8979.js",revision:null},{url:"assets/hitokoto.html.53b780e9.js",revision:null},{url:"assets/hitokoto.html.6cdbdeec.js",revision:null},{url:"assets/hitokoto.html.db78285a.js",revision:null},{url:"assets/hitokoto.html.ec391c1d.js",revision:null},{url:"assets/HomePage.7dceed7f.js",revision:null},{url:"assets/icons.html.69147e43.js",revision:null},{url:"assets/icons.html.92e97ad1.js",revision:null},{url:"assets/icons.html.d1651e10.js",revision:null},{url:"assets/icons.html.d46c11aa.js",revision:null},{url:"assets/index.f5c716ba.js",revision:null},{url:"assets/index.html.140f8688.js",revision:null},{url:"assets/index.html.1477dbc4.js",revision:null},{url:"assets/index.html.19a1d8f8.js",revision:null},{url:"assets/index.html.250059e1.js",revision:null},{url:"assets/index.html.3c1c0db1.js",revision:null},{url:"assets/index.html.3d4b9e86.js",revision:null},{url:"assets/index.html.495f3bc0.js",revision:null},{url:"assets/index.html.4c6f9024.js",revision:null},{url:"assets/index.html.7bc3ce5f.js",revision:null},{url:"assets/index.html.7e9be091.js",revision:null},{url:"assets/index.html.80fe53bb.js",revision:null},{url:"assets/index.html.a019c88f.js",revision:null},{url:"assets/index.html.b28ff175.js",revision:null},{url:"assets/index.html.bd9f7e1d.js",revision:null},{url:"assets/index.html.c5abe02f.js",revision:null},{url:"assets/index.html.d080f048.js",revision:null},{url:"assets/index.html.d32216d6.js",revision:null},{url:"assets/index.html.f11cb022.js",revision:null},{url:"assets/installation.html.019959d9.js",revision:null},{url:"assets/installation.html.08e6029d.js",revision:null},{url:"assets/installation.html.148c6118.js",revision:null},{url:"assets/installation.html.788a41a8.js",revision:null},{url:"assets/intro.html.23255d51.js",revision:null},{url:"assets/intro.html.33e9f41e.js",revision:null},{url:"assets/intro.html.3f42335c.js",revision:null},{url:"assets/intro.html.6ea50e95.js",revision:null},{url:"assets/intro.html.7ba65f4c.js",revision:null},{url:"assets/intro.html.a44a5d54.js",revision:null},{url:"assets/intro.html.b2ae4cbe.js",revision:null},{url:"assets/intro.html.e513f532.js",revision:null},{url:"assets/KaTeX_AMS-Regular.0cdd387c.woff2",revision:null},{url:"assets/KaTeX_AMS-Regular.30da91e8.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Bold.1ae6bd74.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Bold.de7701e4.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular.3398dd02.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Regular.5d53e70a.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Bold.74444efd.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Bold.9be7ceb8.woff",revision:null},{url:"assets/KaTeX_Fraktur-Regular.51814d27.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular.5e28753b.woff",revision:null},{url:"assets/KaTeX_Main-Bold.0f60d1b8.woff2",revision:null},{url:"assets/KaTeX_Main-Bold.c76c5d69.woff",revision:null},{url:"assets/KaTeX_Main-BoldItalic.99cd42a3.woff2",revision:null},{url:"assets/KaTeX_Main-BoldItalic.a6f7ec0d.woff",revision:null},{url:"assets/KaTeX_Main-Italic.97479ca6.woff2",revision:null},{url:"assets/KaTeX_Main-Italic.f1d6ef86.woff",revision:null},{url:"assets/KaTeX_Main-Regular.c2342cd8.woff2",revision:null},{url:"assets/KaTeX_Main-Regular.c6368d87.woff",revision:null},{url:"assets/KaTeX_Math-BoldItalic.850c0af5.woff",revision:null},{url:"assets/KaTeX_Math-BoldItalic.dc47344d.woff2",revision:null},{url:"assets/KaTeX_Math-Italic.7af58c5e.woff2",revision:null},{url:"assets/KaTeX_Math-Italic.8a8d2445.woff",revision:null},{url:"assets/KaTeX_SansSerif-Bold.e99ae511.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold.ece03cfd.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic.00b26ac8.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Italic.91ee6750.woff",revision:null},{url:"assets/KaTeX_SansSerif-Regular.11e4dc8a.woff",revision:null},{url:"assets/KaTeX_SansSerif-Regular.68e8c73e.woff2",revision:null},{url:"assets/KaTeX_Script-Regular.036d4e95.woff2",revision:null},{url:"assets/KaTeX_Script-Regular.d96cdf2b.woff",revision:null},{url:"assets/KaTeX_Size1-Regular.6b47c401.woff2",revision:null},{url:"assets/KaTeX_Size1-Regular.c943cc98.woff",revision:null},{url:"assets/KaTeX_Size2-Regular.2014c523.woff",revision:null},{url:"assets/KaTeX_Size2-Regular.d04c5421.woff2",revision:null},{url:"assets/KaTeX_Size3-Regular.6ab6b62e.woff",revision:null},{url:"assets/KaTeX_Size4-Regular.99f9c675.woff",revision:null},{url:"assets/KaTeX_Size4-Regular.a4af7d41.woff2",revision:null},{url:"assets/KaTeX_Typewriter-Regular.71d517d6.woff2",revision:null},{url:"assets/KaTeX_Typewriter-Regular.e14fed02.woff",revision:null},{url:"assets/katex.html.03c086dc.js",revision:null},{url:"assets/katex.html.07a54adf.js",revision:null},{url:"assets/katex.html.bdf24f7c.js",revision:null},{url:"assets/katex.html.c4d97ac9.js",revision:null},{url:"assets/Layout.d2f5b716.js",revision:null},{url:"assets/link-card-without-site-domain.528eb78d.js",revision:null},{url:"assets/Links.54664da1.js",revision:null},{url:"assets/math.html.579eeff5.js",revision:null},{url:"assets/math.html.928443af.js",revision:null},{url:"assets/math.html.9c595978.js",revision:null},{url:"assets/math.html.cf95bd4d.js",revision:null},{url:"assets/md-plus.html.3acfa9fd.js",revision:null},{url:"assets/md-plus.html.87f6b6a0.js",revision:null},{url:"assets/md-plus.html.b9c2c3c5.js",revision:null},{url:"assets/md-plus.html.c9d6c3d3.js",revision:null},{url:"assets/mermaid.esm.min.25935048.js",revision:null},{url:"assets/mermaid.html.543dd353.js",revision:null},{url:"assets/mermaid.html.6e0c216d.js",revision:null},{url:"assets/mermaid.html.76b7b334.js",revision:null},{url:"assets/mermaid.html.b3f11cfb.js",revision:null},{url:"assets/mermaid.html.bf4c1ee3.js",revision:null},{url:"assets/mermaid.html.c11cc772.js",revision:null},{url:"assets/mermaid.html.e7b4a57e.js",revision:null},{url:"assets/mermaid.html.f46f7961.js",revision:null},{url:"assets/others.html.4eb0fa15.js",revision:null},{url:"assets/others.html.630b0f4e.js",revision:null},{url:"assets/others.html.a63c0237.js",revision:null},{url:"assets/others.html.e5af0dbb.js",revision:null},{url:"assets/Page.79a7042f.js",revision:null},{url:"assets/PageHeader.50a72f04.js",revision:null},{url:"assets/Pager.e5f2a11c.js",revision:null},{url:"assets/Post.f938e838.js",revision:null},{url:"assets/reading-time.html.3087cf8c.js",revision:null},{url:"assets/reading-time.html.358be083.js",revision:null},{url:"assets/reading-time.html.453972ce.js",revision:null},{url:"assets/reading-time.html.8228606a.js",revision:null},{url:"assets/reading-time.html.89bb6c0f.js",revision:null},{url:"assets/reading-time.html.d636a0b1.js",revision:null},{url:"assets/reading-time.html.e85fb64e.js",revision:null},{url:"assets/reading-time.html.fb5058f9.js",revision:null},{url:"assets/resolveTime.7e2957b0.js",revision:null},{url:"assets/resource.html.1c53c563.js",revision:null},{url:"assets/resource.html.cf974aea.js",revision:null},{url:"assets/rss.html.719781f4.js",revision:null},{url:"assets/rss.html.86f4b632.js",revision:null},{url:"assets/rss.html.ad70f54b.js",revision:null},{url:"assets/rss.html.addb24dd.js",revision:null},{url:"assets/rss.html.b4b02c35.js",revision:null},{url:"assets/rss.html.bc7ae56f.js",revision:null},{url:"assets/rss.html.c651721d.js",revision:null},{url:"assets/rss.html.f00987cf.js",revision:null},{url:"assets/search.html.3b0a2ffe.js",revision:null},{url:"assets/search.html.55fb8d4b.js",revision:null},{url:"assets/search.html.67c75ec2.js",revision:null},{url:"assets/search.html.6eeb82a4.js",revision:null},{url:"assets/style.8337b2f0.css",revision:null},{url:"assets/Tags.72923394.js",revision:null},{url:"docs/advanced/analytics.html",revision:"049bfd5450f86de97fff2e754cfe3092"},{url:"docs/advanced/comment.html",revision:"9e456f9947a514a1e9a1cf4717445399"},{url:"docs/advanced/hitokoto.html",revision:"8adbfc9591fb2acfc1454c646050e8d9"},{url:"docs/advanced/icons.html",revision:"54a5c598454bd398bdfbebc4170fbf76"},{url:"docs/advanced/reading-time.html",revision:"2e335931ae10bcafddadc3a8c1459d7f"},{url:"docs/advanced/rss.html",revision:"b414edfb619b9d77d6e9aafed75edfbc"},{url:"docs/basic/config.html",revision:"00f705750c7fd0b0425c59db06e4e6d8"},{url:"docs/basic/content.html",revision:"8ec175ca9034f34f2da130869f62918e"},{url:"docs/basic/installation.html",revision:"d9169cc03d32989284fdb82e32d220f4"},{url:"docs/basic/intro.html",revision:"28688ea2155f6ad62df44731424cdfd7"},{url:"docs/basic/search.html",revision:"d916c1af560fd8d9456fc7e8cbf9e4ca"},{url:"docs/md-enhance/chart.html",revision:"2fca08be7043c5f98f4fc91c0491a9fe"},{url:"docs/md-enhance/math.html",revision:"4eaafd3e1c4de2f5ba5e426402acbd93"},{url:"docs/md-enhance/mermaid.html",revision:"6ae1331ae38fe79ecddfc222094a14ae"},{url:"docs/md-enhance/others.html",revision:"695ea906eb86ba3e2981cafaadfa848e"},{url:"docs/plugins/baidu-tongji.html",revision:"30419d62e44cee92c6662f17f9b6699a"},{url:"docs/plugins/chart.html",revision:"d64868c4a12b6bc4c43b7c5b1588eed0"},{url:"docs/plugins/giscus.html",revision:"789378072c4935fff551384f9665aa8b"},{url:"docs/plugins/intro.html",revision:"82cb09da1551663a4c5568ba906dbf9a"},{url:"docs/plugins/katex.html",revision:"a44536b5eff8a62661867612b7f8f1e6"},{url:"docs/plugins/md-plus.html",revision:"ca0350bc4e3a75095947694f1af9ab63"},{url:"docs/plugins/mermaid.html",revision:"653459d28d6c6d2ecee60325444c3f69"},{url:"docs/plugins/reading-time.html",revision:"40907ee6235443e10417e7180bd664f0"},{url:"docs/plugins/rss.html",revision:"9359f3a2c59e399139ac718346f3a75f"},{url:"img/about-avatar.png",revision:"67b31a9ffd6cd15a2e16406042bdae6a"},{url:"img/avatar.jpeg",revision:"e51df4d9d134a2cdae57af8e539cb627"},{url:"img/avatar.jpg",revision:"fcb806f4409bb5fd776fe9b2b2c591f4"},{url:"img/docs/gungnir.jpg",revision:"f1646bceff4c99f25e74b545af881583"},{url:"img/docs/hitokoto-bubble.jpg",revision:"607b57bf2d8b6967163f308645f19eb6"},{url:"img/docs/link-card-without-site-domain.png",revision:"ce743c91170a8dc45105c6ac7e4fd905"},{url:"img/docs/preview-image.jpg",revision:"bcbf0363cd09a22745b0b1e3dd91add2"},{url:"img/docs/preview-text.jpg",revision:"828ea2011af47a8a0fc5c045aa170b02"},{url:"img/home-bg/1.jpg",revision:"8d1f45887a8da85b0e02ce88f6f4065f"},{url:"img/home-bg/2.jpg",revision:"e4a7faa11a6d32dedea5540711ed9d9d"},{url:"img/home-bg/3.jpg",revision:"f4884b29a1a4a9cc1cca1b8a60133c63"},{url:"img/home-bg/4.jpg",revision:"42a7bee009262496e4804f1c1fb29ac5"},{url:"img/in-post/2021-12-24/header.jpg",revision:"949c914cbc2d08465fe5a9e74c3697de"},{url:"img/in-post/2021-12-25/header.jpg",revision:"5cfdef69e771aea441d2a6d85223110c"},{url:"img/links/jekyll.png",revision:"99b9d0ff694ec2b7c0f29873e873eaa3"},{url:"img/links/me.png",revision:"6fe47400512187cfa95d15ddeb6c1ffe"},{url:"img/links/v1.svg",revision:"e7b29b89b03642036e47e4a02f39e58c"},{url:"img/logo/android-chrome-144x144.png",revision:"34488e396716e0c542bdd61ab4851273"},{url:"img/logo/android-chrome-192x192.png",revision:"882a4d64e89a260921ec6ee8fe386c8a"},{url:"img/logo/android-chrome-512x512.png",revision:"aec263bc77ce8c30d52543b33a3d2736"},{url:"img/logo/apple-touch-icon.png",revision:"8b6c77e20679663214bdd80eda2f4c07"},{url:"img/logo/favicon-16x16.png",revision:"2b8cf532a00466cfcecc405c30d204f5"},{url:"img/logo/favicon-32x32.png",revision:"5e057ebb31cd061d34ab8fb872b3d86c"},{url:"img/logo/logo.svg",revision:"b098fb9709f25d891e721b98f86ff4fa"},{url:"img/pages/links.jpg",revision:"e1e1797371d0a5e314a8b4ca863b5e35"},{url:"img/pages/tags.jpg",revision:"01df00817a4ca78b21d7fbcba91e3ebd"},{url:"index.html",revision:"7fda88b43011abc3d2904c5a356996fa"},{url:"links/index.html",revision:"79b3fcaa2b27cfd7b120d3ff8192ada3"},{url:"page/1/index.html",revision:"4fffca173870c3e145eae8fcd5df391f"},{url:"posts/2021-12-24-hello-word.html",revision:"32bb91683da0a5b7f978607a600541f3"},{url:"posts/2021-12-25-hello-word-with-header-image.html",revision:"2667615620595b12aee59bad52729483"},{url:"posts/2022-05-23-hello-word-with-header-image-with-long-title.html",revision:"8646b89421b7468490ab7ff99591cf36"},{url:"posts/2022-05-24-hello-word-4.html",revision:"3debdc7bb13bb066f1bf0e30a1929187"},{url:"tags/index.html",revision:"7e6a7c5a81140600a76a96f55690d993"},{url:"tags/tag-with-space/index.html",revision:"4e02cf4b8a9566af4c3395f71bc7ffc7"},{url:"tags/test/index.html",revision:"f7e878da7ad7b211b4cd5529af2a3917"},{url:"tags/中文标签/index.html",revision:"75f2c3ec81c6af1153d80dcb0697df8d"},{url:"zh/docs/advanced/analytics.html",revision:"5d1c8fa1ac6deb752805cbb011363159"},{url:"zh/docs/advanced/comment.html",revision:"acc754c93b1e442db26d87a2c221e017"},{url:"zh/docs/advanced/hitokoto.html",revision:"c1ad8d6b9ab9c9a6f3452b2052b350d4"},{url:"zh/docs/advanced/icons.html",revision:"c3038cf5eaa7611a6eccdf7ad4ec770a"},{url:"zh/docs/advanced/reading-time.html",revision:"32f2d8c6e51a329ef3b3f23e0d29aca9"},{url:"zh/docs/advanced/rss.html",revision:"6535de8e9ffd5ffcbdb88d3989bbd2a1"},{url:"zh/docs/basic/config.html",revision:"3ad5afdcd4254c3e78c601c71d4979ea"},{url:"zh/docs/basic/content.html",revision:"d4e5d32ea84b9caca100bbd37788ab6b"},{url:"zh/docs/basic/installation.html",revision:"bf9b843f7eac81e9b1c945896976b582"},{url:"zh/docs/basic/intro.html",revision:"424f76fe8965e65bf9e9e679cd32612f"},{url:"zh/docs/basic/search.html",revision:"8f9b32d05fde6e6b4befff758ec4453d"},{url:"zh/docs/extension/deploy.html",revision:"8c764550876ec151da8e4a38089ec82c"},{url:"zh/docs/extension/resource.html",revision:"4e6cff0027b3d740c14a2235201a4a61"},{url:"zh/docs/md-enhance/chart.html",revision:"674994fd0a230da8dcae49a4060ad77d"},{url:"zh/docs/md-enhance/math.html",revision:"bbaafdd012e557aa31f8e6d5e520ada3"},{url:"zh/docs/md-enhance/mermaid.html",revision:"4b47933b754ba4510cafd3e9d17b02b9"},{url:"zh/docs/md-enhance/others.html",revision:"49fdfac5176646f3d09a5ffe4820f91e"},{url:"zh/docs/plugins/baidu-tongji.html",revision:"cc208aa09bd9938d3156dca6a22664a5"},{url:"zh/docs/plugins/chart.html",revision:"350d62b95ac268f5af64480f713560fc"},{url:"zh/docs/plugins/giscus.html",revision:"b907b1e81364c778b4fda26a019e4319"},{url:"zh/docs/plugins/intro.html",revision:"1209a57bf65609b28e22d216ddf030d5"},{url:"zh/docs/plugins/katex.html",revision:"11503a2916b7f4ff29b4ab243dc5365f"},{url:"zh/docs/plugins/md-plus.html",revision:"54756a00bd134677cb8d2263e7ee853e"},{url:"zh/docs/plugins/mermaid.html",revision:"54406d3334d7eb60e0531aa7e67ce221"},{url:"zh/docs/plugins/reading-time.html",revision:"08cce938b92a12eaf905fc2f8d474886"},{url:"zh/docs/plugins/rss.html",revision:"d4055033ef98067622217dfb12fe1ad1"},{url:"zh/index.html",revision:"b7216c668747800728c522fd2eb2650c"},{url:"zh/tags/index.html",revision:"b64dc71c25b0e55352311b619c54b22d"}],{})}));
