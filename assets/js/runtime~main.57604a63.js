(()=>{"use strict";var e,a,f,d,t,c={},r={};function o(e){var a=r[e];if(void 0!==a)return a.exports;var f=r[e]={id:e,loaded:!1,exports:{}};return c[e].call(f.exports,f,f.exports,o),f.loaded=!0,f.exports}o.m=c,e=[],o.O=(a,f,d,t)=>{if(!f){var c=1/0;for(i=0;i<e.length;i++){f=e[i][0],d=e[i][1],t=e[i][2];for(var r=!0,n=0;n<f.length;n++)(!1&t||c>=t)&&Object.keys(o.O).every((e=>o.O[e](f[n])))?f.splice(n--,1):(r=!1,t<c&&(c=t));if(r){e.splice(i--,1);var b=d();void 0!==b&&(a=b)}}return a}t=t||0;for(var i=e.length;i>0&&e[i-1][2]>t;i--)e[i]=e[i-1];e[i]=[f,d,t]},o.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return o.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,d){if(1&d&&(e=this(e)),8&d)return e;if("object"==typeof e&&e){if(4&d&&e.__esModule)return e;if(16&d&&"function"==typeof e.then)return e}var t=Object.create(null);o.r(t);var c={};a=a||[null,f({}),f([]),f(f)];for(var r=2&d&&e;"object"==typeof r&&!~a.indexOf(r);r=f(r))Object.getOwnPropertyNames(r).forEach((a=>c[a]=()=>e[a]));return c.default=()=>e,o.d(t,c),t},o.d=(e,a)=>{for(var f in a)o.o(a,f)&&!o.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((a,f)=>(o.f[f](e,a),a)),[])),o.u=e=>"assets/js/"+({53:"935f2afb",467:"7b711931",533:"154a7784",695:"126e8bfe",948:"8717b14a",1499:"3fbf28a6",1670:"2fa91edc",1893:"4c5e977b",1914:"d9f32620",2267:"59362658",2362:"e273c56f",2535:"814f3328",3007:"9d888104",3085:"1f391b9e",3089:"a6aa9e1f",3166:"2f5dfcfe",3199:"f71b298a",3242:"51cfbd44",3265:"bec2497f",3314:"8084b186",3364:"a47e8d0f",3514:"73664a40",3586:"8f2359df",3608:"9e4087bc",3751:"3720c009",4013:"01a85c17",4121:"55960ee5",4195:"c4f5d8e4",4339:"1fa0a8bd",4549:"f1390d09",4654:"9f2efc62",5070:"4df3a300",5254:"a6cc17db",5621:"e6fc5724",5625:"9e4b7f12",5639:"c4b76d43",5836:"e3874190",6059:"477a789f",6103:"ccc49370",6159:"3948da71",6898:"73553e4f",7414:"393be207",7494:"63257ab2",8350:"216138aa",8518:"249d739d",8592:"common",8610:"6875c492",8636:"f4f34a3a",9003:"925b3f96",9006:"1e7bfaed",9281:"a20f00d1",9505:"63dd74c5",9642:"7661071f",9652:"8d1d3151",9671:"0e384e19",9817:"14eb3368",9869:"3516a664",9924:"df203c0f"}[e]||e)+"."+{53:"14caa339",467:"611aa09a",533:"49d8d027",695:"f6a8e9d9",948:"afd4facf",1499:"ef6ef6de",1670:"5574800f",1893:"208bac77",1914:"1f863a23",2267:"d09150ed",2362:"b6c76d60",2535:"06ef177c",2695:"b01bdf2f",3007:"1f4c4acc",3085:"3fceb410",3089:"f1d9027d",3166:"b8191010",3199:"08e1422a",3242:"d36909a2",3265:"d4416cfe",3314:"8b9dcb1b",3364:"3ffb70de",3514:"4e9f9f0d",3586:"898b3a8a",3608:"a826a663",3751:"daa1abff",4013:"6a699773",4121:"f8ac8831",4195:"806180cc",4339:"1122ef94",4549:"7d3330e4",4654:"8ac209a5",4674:"05bd2bb9",4972:"2acd2590",5070:"2836af39",5254:"6783c374",5621:"1f64aa0e",5625:"59012055",5639:"78eed1b9",5836:"c3f4bb0a",6059:"5116ccd6",6103:"1a445a98",6159:"22a2398b",6882:"858805ed",6898:"b689e332",7414:"1cb3b9f8",7494:"e9d7c717",8350:"0f28fbbb",8490:"c97f2a58",8518:"09378e98",8592:"2335cbfb",8610:"f83adb3c",8636:"8db3b90d",8682:"e376ccc9",9003:"f20ee1c4",9006:"4902c3b5",9281:"61421da5",9505:"a5b3f79b",9642:"25a78eaf",9652:"1eac2d31",9671:"f842ef1d",9817:"fed09ff3",9869:"42d8de1b",9924:"c608df1f"}[e]+".js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),d={},t="visai-inference-api-documentation:",o.l=(e,a,f,c)=>{if(d[e])d[e].push(a);else{var r,n;if(void 0!==f)for(var b=document.getElementsByTagName("script"),i=0;i<b.length;i++){var u=b[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==t+f){r=u;break}}r||(n=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,o.nc&&r.setAttribute("nonce",o.nc),r.setAttribute("data-webpack",t+f),r.src=e),d[e]=[a];var l=(a,f)=>{r.onerror=r.onload=null,clearTimeout(s);var t=d[e];if(delete d[e],r.parentNode&&r.parentNode.removeChild(r),t&&t.forEach((e=>e(f))),a)return a(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=l.bind(null,r.onerror),r.onload=l.bind(null,r.onload),n&&document.head.appendChild(r)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),o.p="/inference-api-documentation/",o.gca=function(e){return e={59362658:"2267","935f2afb":"53","7b711931":"467","154a7784":"533","126e8bfe":"695","8717b14a":"948","3fbf28a6":"1499","2fa91edc":"1670","4c5e977b":"1893",d9f32620:"1914",e273c56f:"2362","814f3328":"2535","9d888104":"3007","1f391b9e":"3085",a6aa9e1f:"3089","2f5dfcfe":"3166",f71b298a:"3199","51cfbd44":"3242",bec2497f:"3265","8084b186":"3314",a47e8d0f:"3364","73664a40":"3514","8f2359df":"3586","9e4087bc":"3608","3720c009":"3751","01a85c17":"4013","55960ee5":"4121",c4f5d8e4:"4195","1fa0a8bd":"4339",f1390d09:"4549","9f2efc62":"4654","4df3a300":"5070",a6cc17db:"5254",e6fc5724:"5621","9e4b7f12":"5625",c4b76d43:"5639",e3874190:"5836","477a789f":"6059",ccc49370:"6103","3948da71":"6159","73553e4f":"6898","393be207":"7414","63257ab2":"7494","216138aa":"8350","249d739d":"8518",common:"8592","6875c492":"8610",f4f34a3a:"8636","925b3f96":"9003","1e7bfaed":"9006",a20f00d1:"9281","63dd74c5":"9505","7661071f":"9642","8d1d3151":"9652","0e384e19":"9671","14eb3368":"9817","3516a664":"9869",df203c0f:"9924"}[e]||e,o.p+o.u(e)},(()=>{var e={1303:0,532:0};o.f.j=(a,f)=>{var d=o.o(e,a)?e[a]:void 0;if(0!==d)if(d)f.push(d[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var t=new Promise(((f,t)=>d=e[a]=[f,t]));f.push(d[2]=t);var c=o.p+o.u(a),r=new Error;o.l(c,(f=>{if(o.o(e,a)&&(0!==(d=e[a])&&(e[a]=void 0),d)){var t=f&&("load"===f.type?"missing":f.type),c=f&&f.target&&f.target.src;r.message="Loading chunk "+a+" failed.\n("+t+": "+c+")",r.name="ChunkLoadError",r.type=t,r.request=c,d[1](r)}}),"chunk-"+a,a)}},o.O.j=a=>0===e[a];var a=(a,f)=>{var d,t,c=f[0],r=f[1],n=f[2],b=0;if(c.some((a=>0!==e[a]))){for(d in r)o.o(r,d)&&(o.m[d]=r[d]);if(n)var i=n(o)}for(a&&a(f);b<c.length;b++)t=c[b],o.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return o.O(i)},f=self.webpackChunkvisai_inference_api_documentation=self.webpackChunkvisai_inference_api_documentation||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();