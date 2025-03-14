(function(){"use strict";var t={346:function(t,e,n){var r=n(5130),o=n(6768);const i={id:"app"};function a(t,e,n,r,a,s){const c=(0,o.g2)("SiteHeader"),l=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",i,[(0,o.bF)(c),(0,o.bF)(l)])}const s={class:"header"},c={class:"nav"};function l(t,e,n,r,i,a){const l=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("header",s,[e[4]||(e[4]=(0,o.Lk)("div",{class:"logo"},"Portfolio",-1)),(0,o.Lk)("nav",c,[(0,o.bF)(l,{to:"/",class:"nav-item"},{default:(0,o.k6)((()=>e[0]||(e[0]=[(0,o.eW)("소개")]))),_:1}),(0,o.bF)(l,{to:"/projects",class:"nav-item"},{default:(0,o.k6)((()=>e[1]||(e[1]=[(0,o.eW)("프로젝트")]))),_:1}),(0,o.bF)(l,{to:"/blog",class:"nav-item"},{default:(0,o.k6)((()=>e[2]||(e[2]=[(0,o.eW)("블로그")]))),_:1}),(0,o.bF)(l,{to:"/contact",class:"nav-item"},{default:(0,o.k6)((()=>e[3]||(e[3]=[(0,o.eW)("연락하기")]))),_:1})])])}var u={name:"SiteHeader"},d=n(1241);const f=(0,d.A)(u,[["render",l],["__scopeId","data-v-2bcc1f5f"]]);var p=f,h={name:"App",components:{SiteHeader:p}};const v=(0,d.A)(h,[["render",a]]);var g=v,m=n(1387),b=n(4232);const k={class:"home"},S={class:"hero"},y={class:"stacked-cards"},C=["src","alt"],j={class:"card-navigation"},x={class:"card-dots"},L=["onClick"];function E(t,e,n,r,i,a){return(0,o.uX)(),(0,o.CE)("div",k,[(0,o.Lk)("section",S,[e[2]||(e[2]=(0,o.Lk)("div",{class:"hero-content"},[(0,o.Lk)("h1",{class:"title"},[(0,o.eW)("정윤의 portfolio에 오신 것을"),(0,o.Lk)("br"),(0,o.eW)("환영합니다.")]),(0,o.Lk)("p",{class:"subtitle"},[(0,o.eW)("기획과 프론트에 중점을 두고 경험을 쌓고 있습니다."),(0,o.Lk)("br"),(0,o.eW)("항상 성장하는 사람이 되고 싶습니다.")])],-1)),(0,o.Lk)("div",y,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(i.photos,((t,e)=>((0,o.uX)(),(0,o.CE)("div",{key:e,class:(0,b.C4)(["card",{active:i.currentSlide===e}]),style:(0,b.Tr)(a.getCardStyle(e))},[(0,o.Lk)("img",{src:t.src,alt:t.alt,class:"card-image"},null,8,C)],6)))),128)),(0,o.Lk)("div",j,[(0,o.Lk)("button",{class:"nav-button prev",onClick:e[0]||(e[0]=(...t)=>a.prevSlide&&a.prevSlide(...t))},"❮"),(0,o.Lk)("div",x,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(i.photos,((t,e)=>((0,o.uX)(),(0,o.CE)("span",{key:e,class:(0,b.C4)(["dot",{active:i.currentSlide===e}]),onClick:t=>a.goToSlide(e)},null,10,L)))),128))]),(0,o.Lk)("button",{class:"nav-button next",onClick:e[1]||(e[1]=(...t)=>a.nextSlide&&a.nextSlide(...t))},"❯")])])]),e[3]||(e[3]=(0,o.Fv)('<section class="skills" data-v-27546e07><h2 data-v-27546e07>Skills</h2><div class="skills-grid" data-v-27546e07><div class="skill-item" data-v-27546e07><h3 data-v-27546e07>Frontend</h3><p data-v-27546e07>Vue.js, React, HTML5, CSS3, JavaScript</p></div><div class="skill-item" data-v-27546e07><h3 data-v-27546e07>Backend</h3><p data-v-27546e07>Node.js, Python</p></div><div class="skill-item" data-v-27546e07><h3 data-v-27546e07>Database</h3><p data-v-27546e07>MySQL</p></div></div></section>',1))])}var w={name:"HomePage",data(){return{currentSlide:0,slideInterval:null,photos:[{src:n(8333),alt:"사진 1"},{src:n(2402),alt:"사진 2"},{src:n(4111),alt:"사진 3"},{src:n(2676),alt:"사진 4"},{src:n(7009),alt:"사진 5"},{src:n(9254),alt:"사진 6"}]}},mounted(){this.startSlideshow()},beforeUnmount(){this.stopSlideshow()},methods:{startSlideshow(){this.slideInterval=setInterval((()=>{this.nextSlide()}),3e3)},stopSlideshow(){clearInterval(this.slideInterval)},nextSlide(){this.currentSlide=(this.currentSlide+1)%this.photos.length},prevSlide(){this.currentSlide=0===this.currentSlide?this.photos.length-1:this.currentSlide-1},goToSlide(t){this.currentSlide=t},getZIndex(t){if(t===this.currentSlide)return this.photos.length;const e=(t-this.currentSlide+this.photos.length)%this.photos.length;return this.photos.length-e},getCardStyle(t){const e=this.getZIndex(t);if(t===this.currentSlide)return{zIndex:e,opacity:1,transform:"translateX(0) scale(1)"};const n=(this.currentSlide-1+this.photos.length)%this.photos.length;if(t===n)return{zIndex:1,opacity:.7,transform:"translateX(-60%) scale(0.8)"};const r=(this.currentSlide+1)%this.photos.length;return t===r?{zIndex:1,opacity:.7,transform:"translateX(60%) scale(0.8)"}:{zIndex:e,opacity:0,transform:t<this.currentSlide?"translateX(-100%) scale(0.8)":"translateX(100%) scale(0.8)",pointerEvents:"none"}}}};const I=(0,d.A)(w,[["render",E],["__scopeId","data-v-27546e07"]]);var _=I;const O=[{path:"/",name:"Home",component:_},{path:"/projects",name:"Projects",component:()=>n.e(597).then(n.bind(n,9341))},{path:"/blog",name:"Blog",component:()=>n.e(19).then(n.bind(n,3901))},{path:"/contact",name:"Contact",component:()=>n.e(353).then(n.bind(n,553))}],A=(0,m.aE)({history:(0,m.LA)(),routes:O});var F=A;const T=(0,r.Ef)(g);T.use(F),T.mount("#app")},2402:function(t,e,n){t.exports=n.p+"img/photo2.dd990e1f.jpg"},2676:function(t,e,n){t.exports=n.p+"img/photo4.bba06c70.jpg"},4111:function(t,e,n){t.exports=n.p+"img/photo3.8cd407e9.jpg"},7009:function(t,e,n){t.exports=n.p+"img/photo5.5a0160aa.jpg"},8333:function(t,e,n){t.exports=n.p+"img/photo1.d9d99b18.jpg"},9254:function(t,e,n){t.exports=n.p+"img/photo6.05961d5d.jpg"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,i){if(!r){var a=1/0;for(u=0;u<t.length;u++){r=t[u][0],o=t[u][1],i=t[u][2];for(var s=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(s=!1,i<a&&(a=i));if(s){t.splice(u--,1);var l=o();void 0!==l&&(e=l)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[r,o,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+{19:"blog",353:"contact",597:"projects"}[t]+"."+{19:"e67f2f78",353:"7dac58ca",597:"a516e9ca"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+{19:"blog",353:"contact",597:"projects"}[t]+"."+{19:"e6d1f46b",353:"d62f15ed",597:"20bf0f6c"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="portfolio:";n.l=function(r,o,i,a){if(t[r])t[r].push(o);else{var s,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+i){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+i),s.src=r),t[r]=[o];var f=function(e,n){s.onerror=s.onload=null,clearTimeout(p);var o=t[r];if(delete t[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/jyp_deploy/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,r,o,i){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",n.nc&&(a.nonce=n.nc);var s=function(n){if(a.onerror=a.onload=null,"load"===n.type)o();else{var r=n&&n.type,s=n&&n.target&&n.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+": "+s+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=r,c.request=s,a.parentNode&&a.parentNode.removeChild(a),i(c)}};return a.onerror=a.onload=s,a.href=e,r?r.parentNode.insertBefore(a,r.nextSibling):document.head.appendChild(a),a},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===t||i===e))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===t||i===e)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),s=n.p+a;if(e(a,s))return o();t(r,s,null,o,i)}))},o={524:0};n.f.miniCss=function(t,e){var n={19:1,353:1,597:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}}(),function(){var t={524:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(e),s=new Error,c=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,o[1](s)}};n.l(a,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,a=r[0],s=r[1],c=r[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(c)var u=c(n)}for(e&&e(r);l<a.length;l++)i=a[l],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(u)},r=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(346)}));r=n.O(r)})();
//# sourceMappingURL=app.10df22b9.js.map