if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let o={};const u=s=>i(s,r),f={module:{uri:r},exports:o,require:u};e[r]=Promise.all(n.map((s=>f[s]||u(s)))).then((s=>(l(...s),o)))}}define(["./workbox-56a10583"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/Config-0a55963b.js",revision:null},{url:"assets/ConfigTitle-444aa920.js",revision:null},{url:"assets/Connections-5afb1fd0.js",revision:null},{url:"assets/global-17f3552d.js",revision:null},{url:"assets/index-57f146ce.js",revision:null},{url:"assets/index-6bf29083.css",revision:null},{url:"assets/index-99fc61fd.js",revision:null},{url:"assets/Logs-c21ef60d.js",revision:null},{url:"assets/Overview-ef28b0b6.js",revision:null},{url:"assets/Proxies-0b2a1ad0.js",revision:null},{url:"assets/Rules-f6b0d1e8.js",revision:null},{url:"assets/Setup-656f9c35.js",revision:null},{url:"assets/vendor-ec1fbc1a.js",revision:null},{url:"index.html",revision:"61775ac9acbdb9efeccb3806f6032e58"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon.svg",revision:"f5b3372f312fbbe60a6ed8c03741ff80"},{url:"pwa-192x192.png",revision:"c45f48fc59b5bf47e6cbf1626aff51fc"},{url:"pwa-512x512.png",revision:"a311504ae6a46bd29b5678a410aaafc6"},{url:"manifest.webmanifest",revision:"4d78c8bc6207146065400ff644fe5a13"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));