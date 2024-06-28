/*! For license information please see 8682.e376ccc9.js.LICENSE.txt */
"use strict";(self.webpackChunkvisai_inference_api_documentation=self.webpackChunkvisai_inference_api_documentation||[]).push([[8682],{77236:(e,t,r)=>{function n(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+e+(r.length?" "+r.map((function(e){return"'"+e+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function o(e){return!!e&&!!e[H]}function i(e){var t;return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;var r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===K}(e)||Array.isArray(e)||!!e[G]||!!(null===(t=e.constructor)||void 0===t?void 0:t[G])||d(e)||p(e))}function u(e,t,r){void 0===r&&(r=!1),0===a(e)?(r?Object.keys:X)(e).forEach((function(n){r&&"symbol"==typeof n||t(n,e[n],e)})):e.forEach((function(r,n){return t(n,r,e)}))}function a(e){var t=e[H];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:d(e)?2:p(e)?3:0}function c(e,t){return 2===a(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function s(e,t){return 2===a(e)?e.get(t):e[t]}function l(e,t,r){var n=a(e);2===n?e.set(t,r):3===n?(e.delete(t),e.add(r)):e[t]=r}function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function d(e){return z&&e instanceof Map}function p(e){return W&&e instanceof Set}function v(e){return e.o||e.t}function y(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=$(e);delete t[H];for(var r=X(t),n=0;n<r.length;n++){var o=r[n],i=t[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function b(e,t){return void 0===t&&(t=!1),m(e)||o(e)||!i(e)||(a(e)>1&&(e.set=e.add=e.clear=e.delete=h),Object.freeze(e),t&&u(e,(function(e,t){return b(t,!0)}),!0)),e}function h(){n(2)}function m(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function g(e){var t=Y[e];return t||n(18,e),t}function w(e,t){Y[e]||(Y[e]=t)}function S(){return q}function P(e,t){t&&(g("Patches"),e.u=[],e.s=[],e.v=t)}function O(e){E(e),e.p.forEach(j),e.p=null}function E(e){e===q&&(q=e.l)}function C(e){return q={p:[],l:q,h:e,m:!0,_:0}}function j(e){var t=e[H];0===t.i||1===t.i?t.j():t.O=!0}function A(e,t){t._=t.p.length;var r=t.p[0],o=void 0!==e&&e!==r;return t.h.g||g("ES5").S(t,e,o),o?(r[H].P&&(O(t),n(4)),i(e)&&(e=_(t,e),t.l||x(t,e)),t.u&&g("Patches").M(r[H].t,e,t.u,t.s)):e=_(t,r,[]),O(t),t.u&&t.v(t.u,t.s),e!==Z?e:void 0}function _(e,t,r){if(m(t))return t;var n=t[H];if(!n)return u(t,(function(o,i){return T(e,n,t,o,i,r)}),!0),t;if(n.A!==e)return t;if(!n.P)return x(e,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=4===n.i||5===n.i?n.o=y(n.k):n.o;u(3===n.i?new Set(o):o,(function(t,i){return T(e,n,o,t,i,r)})),x(e,o,!1),r&&e.u&&g("Patches").R(n,r,e.u,e.s)}return n.o}function T(e,t,r,n,u,a){if(o(u)){var s=_(e,u,a&&t&&3!==t.i&&!c(t.D,n)?a.concat(n):void 0);if(l(r,n,s),!o(s))return;e.m=!1}if(i(u)&&!m(u)){if(!e.h.F&&e._<1)return;_(e,u),t&&t.A.l||x(e,u)}}function x(e,t,r){void 0===r&&(r=!1),e.h.F&&e.m&&b(t,r)}function k(e,t){var r=e[H];return(r?v(r):e)[t]}function D(e,t){if(t in e)for(var r=Object.getPrototypeOf(e);r;){var n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=Object.getPrototypeOf(r)}}function N(e){e.P||(e.P=!0,e.l&&N(e.l))}function I(e){e.o||(e.o=y(e.t))}function R(e,t,r){var n=d(t)?g("MapSet").N(t,r):p(t)?g("MapSet").T(t,r):e.g?function(e,t){var r=Array.isArray(e),n={i:r?1:0,A:t?t.A:S(),P:!1,I:!1,D:{},l:t,t:e,k:null,o:null,j:null,C:!1},o=n,i=Q;r&&(o=[n],i=J);var u=Proxy.revocable(o,i),a=u.revoke,c=u.proxy;return n.k=c,n.j=a,c}(t,r):g("ES5").J(t,r);return(r?r.A:S()).p.push(n),n}function M(e){return o(e)||n(22,e),function e(t){if(!i(t))return t;var r,n=t[H],o=a(t);if(n){if(!n.P&&(n.i<4||!g("ES5").K(n)))return n.t;n.I=!0,r=L(t,o),n.I=!1}else r=L(t,o);return u(r,(function(t,o){n&&s(n.t,t)===o||l(r,t,e(o))})),3===o?new Set(r):r}(e)}function L(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return y(e)}function F(){function e(e,t){var r=i[e];return r?r.enumerable=t:i[e]=r={configurable:!0,enumerable:t,get:function(){var t=this[H];return Q.get(t,e)},set:function(t){var r=this[H];Q.set(r,e,t)}},r}function t(e){for(var t=e.length-1;t>=0;t--){var o=e[t][H];if(!o.P)switch(o.i){case 5:n(o)&&N(o);break;case 4:r(o)&&N(o)}}}function r(e){for(var t=e.t,r=e.k,n=X(r),o=n.length-1;o>=0;o--){var i=n[o];if(i!==H){var u=t[i];if(void 0===u&&!c(t,i))return!0;var a=r[i],s=a&&a[H];if(s?s.t!==u:!f(a,u))return!0}}var l=!!t[H];return n.length!==X(t).length+(l?0:1)}function n(e){var t=e.k;if(t.length!==e.t.length)return!0;var r=Object.getOwnPropertyDescriptor(t,t.length-1);if(r&&!r.get)return!0;for(var n=0;n<t.length;n++)if(!t.hasOwnProperty(n))return!0;return!1}var i={};w("ES5",{J:function(t,r){var n=Array.isArray(t),o=function(t,r){if(t){for(var n=Array(r.length),o=0;o<r.length;o++)Object.defineProperty(n,""+o,e(o,!0));return n}var i=$(r);delete i[H];for(var u=X(i),a=0;a<u.length;a++){var c=u[a];i[c]=e(c,t||!!i[c].enumerable)}return Object.create(Object.getPrototypeOf(r),i)}(n,t),i={i:n?5:4,A:r?r.A:S(),P:!1,I:!1,D:{},l:r,t:t,k:o,o:null,O:!1,C:!1};return Object.defineProperty(o,H,{value:i,writable:!0}),o},S:function(e,r,i){i?o(r)&&r[H].A===e&&t(e.p):(e.u&&function e(t){if(t&&"object"==typeof t){var r=t[H];if(r){var o=r.t,i=r.k,a=r.D,s=r.i;if(4===s)u(i,(function(t){t!==H&&(void 0!==o[t]||c(o,t)?a[t]||e(i[t]):(a[t]=!0,N(r)))})),u(o,(function(e){void 0!==i[e]||c(i,e)||(a[e]=!1,N(r))}));else if(5===s){if(n(r)&&(N(r),a.length=!0),i.length<o.length)for(var l=i.length;l<o.length;l++)a[l]=!1;else for(var f=o.length;f<i.length;f++)a[f]=!0;for(var d=Math.min(i.length,o.length),p=0;p<d;p++)i.hasOwnProperty(p)||(a[p]=!0),void 0===a[p]&&e(i[p])}}}}(e.p[0]),t(e.p))},K:function(e){return 4===e.i?r(e):n(e)}})}r.d(t,{xC:()=>Ae,oM:()=>xe,x0:()=>ke});var V,q,U="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),z="undefined"!=typeof Map,W="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,Z=U?Symbol.for("immer-nothing"):((V={})["immer-nothing"]=!0,V),G=U?Symbol.for("immer-draftable"):"__$immer_draftable",H=U?Symbol.for("immer-state"):"__$immer_state",K=("undefined"!=typeof Symbol&&Symbol.iterator,""+Object.prototype.constructor),X="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,$=Object.getOwnPropertyDescriptors||function(e){var t={};return X(e).forEach((function(r){t[r]=Object.getOwnPropertyDescriptor(e,r)})),t},Y={},Q={get:function(e,t){if(t===H)return e;var r=v(e);if(!c(r,t))return function(e,t,r){var n,o=D(t,r);return o?"value"in o?o.value:null===(n=o.get)||void 0===n?void 0:n.call(e.k):void 0}(e,r,t);var n=r[t];return e.I||!i(n)?n:n===k(e.t,t)?(I(e),e.o[t]=R(e.A.h,n,e)):n},has:function(e,t){return t in v(e)},ownKeys:function(e){return Reflect.ownKeys(v(e))},set:function(e,t,r){var n=D(v(e),t);if(null==n?void 0:n.set)return n.set.call(e.k,r),!0;if(!e.P){var o=k(v(e),t),i=null==o?void 0:o[H];if(i&&i.t===r)return e.o[t]=r,e.D[t]=!1,!0;if(f(r,o)&&(void 0!==r||c(e.t,t)))return!0;I(e),N(e)}return e.o[t]===r&&"number"!=typeof r&&(void 0!==r||t in e.o)||(e.o[t]=r,e.D[t]=!0,!0)},deleteProperty:function(e,t){return void 0!==k(e.t,t)||t in e.t?(e.D[t]=!1,I(e),N(e)):delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var r=v(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty:function(){n(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){n(12)}},J={};u(Q,(function(e,t){J[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),J.deleteProperty=function(e,t){return J.set.call(this,e,t,void 0)},J.set=function(e,t,r){return Q.set.call(this,e[0],t,r,e[0])};var ee=function(){function e(e){var t=this;this.g=B,this.F=!0,this.produce=function(e,r,o){if("function"==typeof e&&"function"!=typeof r){var u=r;r=e;var a=t;return function(e){var t=this;void 0===e&&(e=u);for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return a.produce(e,(function(e){var n;return(n=r).call.apply(n,[t,e].concat(o))}))}}var c;if("function"!=typeof r&&n(6),void 0!==o&&"function"!=typeof o&&n(7),i(e)){var s=C(t),l=R(t,e,void 0),f=!0;try{c=r(l),f=!1}finally{f?O(s):E(s)}return"undefined"!=typeof Promise&&c instanceof Promise?c.then((function(e){return P(s,o),A(e,s)}),(function(e){throw O(s),e})):(P(s,o),A(c,s))}if(!e||"object"!=typeof e){if(void 0===(c=r(e))&&(c=e),c===Z&&(c=void 0),t.F&&b(c,!0),o){var d=[],p=[];g("Patches").M(e,c,d,p),o(d,p)}return c}n(21,e)},this.produceWithPatches=function(e,r){if("function"==typeof e)return function(r){for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return t.produceWithPatches(r,(function(t){return e.apply(void 0,[t].concat(o))}))};var n,o,i=t.produce(e,r,(function(e,t){n=e,o=t}));return"undefined"!=typeof Promise&&i instanceof Promise?i.then((function(e){return[e,n,o]})):[i,n,o]},"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze)}var t=e.prototype;return t.createDraft=function(e){i(e)||n(8),o(e)&&(e=M(e));var t=C(this),r=R(this,e,void 0);return r[H].C=!0,E(t),r},t.finishDraft=function(e,t){var r=(e&&e[H]).A;return P(r,t),A(void 0,r)},t.setAutoFreeze=function(e){this.F=e},t.setUseProxies=function(e){e&&!B&&n(20),this.g=e},t.applyPatches=function(e,t){var r;for(r=t.length-1;r>=0;r--){var n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));var i=g("Patches").$;return o(e)?i(e,t):this.produce(e,(function(e){return i(e,t)}))},e}(),te=new ee,re=te.produce;te.produceWithPatches.bind(te),te.setAutoFreeze.bind(te),te.setUseProxies.bind(te),te.applyPatches.bind(te),te.createDraft.bind(te),te.finishDraft.bind(te);const ne=re;var oe=r(19800);function ie(e){return function(t){var r=t.dispatch,n=t.getState;return function(t){return function(o){return"function"==typeof o?o(r,n,e):t(o)}}}}var ue=ie();ue.withExtraArgument=ie;const ae=ue;r(25108),r(34155);var ce,se=(ce=function(e,t){return ce=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},ce(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}ce(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),le=function(e,t){var r,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,n=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(a){i=[6,a],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},fe=function(e,t){for(var r=0,n=t.length,o=e.length;r<n;r++,o++)e[o]=t[r];return e},de=Object.defineProperty,pe=Object.defineProperties,ve=Object.getOwnPropertyDescriptors,ye=Object.getOwnPropertySymbols,be=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable,me=function(e,t,r){return t in e?de(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},ge=function(e,t){for(var r in t||(t={}))be.call(t,r)&&me(e,r,t[r]);if(ye)for(var n=0,o=ye(t);n<o.length;n++){r=o[n];he.call(t,r)&&me(e,r,t[r])}return e},we=function(e,t){return pe(e,ve(t))},Se=function(e,t,r){return new Promise((function(n,o){var i=function(e){try{a(r.next(e))}catch(t){o(t)}},u=function(e){try{a(r.throw(e))}catch(t){o(t)}},a=function(e){return e.done?n(e.value):Promise.resolve(e.value).then(i,u)};a((r=r.apply(e,t)).next())}))},Pe="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"==typeof arguments[0]?oe.qC:oe.qC.apply(null,arguments)};"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;function Oe(e){if("object"!=typeof e||null===e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;for(var r=t;null!==Object.getPrototypeOf(r);)r=Object.getPrototypeOf(r);return t===r}var Ee=function(e){function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=e.apply(this,r)||this;return Object.setPrototypeOf(o,t.prototype),o}return se(t,e),Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return e.prototype.concat.apply(this,t)},t.prototype.prepend=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return 1===e.length&&Array.isArray(e[0])?new(t.bind.apply(t,fe([void 0],e[0].concat(this)))):new(t.bind.apply(t,fe([void 0],e.concat(this))))},t}(Array);function Ce(e){return i(e)?ne(e,(function(){})):e}function je(){return function(e){return function(e){void 0===e&&(e={});var t=e.thunk,r=void 0===t||t,n=(e.immutableCheck,e.serializableCheck,new Ee);r&&(!function(e){return"boolean"==typeof e}(r)?n.push(ae.withExtraArgument(r.extraArgument)):n.push(ae));0;return n}(e)}}function Ae(e){var t,r=je(),n=e||{},o=n.reducer,i=void 0===o?void 0:o,u=n.middleware,a=void 0===u?r():u,c=n.devTools,s=void 0===c||c,l=n.preloadedState,f=void 0===l?void 0:l,d=n.enhancers,p=void 0===d?void 0:d;if("function"==typeof i)t=i;else{if(!Oe(i))throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');t=(0,oe.UY)(i)}var v=a;"function"==typeof v&&(v=v(r));var y=oe.md.apply(void 0,v),b=oe.qC;s&&(b=Pe(ge({trace:!1},"object"==typeof s&&s)));var h=[y];Array.isArray(p)?h=fe([y],p):"function"==typeof p&&(h=p(h));var m=b.apply(void 0,h);return(0,oe.MT)(t,f,m)}function _e(e,t){function r(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];if(t){var o=t.apply(void 0,r);if(!o)throw new Error("prepareAction did not return an object");return ge(ge({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:r[0]}}return r.toString=function(){return""+e},r.type=e,r.match=function(t){return t.type===e},r}function Te(e){var t,r={},n=[],o={addCase:function(e,t){var n="string"==typeof e?e:e.type;if(n in r)throw new Error("addCase cannot be called with two reducers for the same action type");return r[n]=t,o},addMatcher:function(e,t){return n.push({matcher:e,reducer:t}),o},addDefaultCase:function(e){return t=e,o}};return e(o),[r,n,t]}function xe(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");var r,n="function"==typeof e.initialState?e.initialState:Ce(e.initialState),u=e.reducers||{},a=Object.keys(u),c={},s={},l={};function f(){var t="function"==typeof e.extraReducers?Te(e.extraReducers):[e.extraReducers],r=t[0],u=void 0===r?{}:r,a=t[1],c=void 0===a?[]:a,l=t[2],f=void 0===l?void 0:l,d=ge(ge({},u),s);return function(e,t,r,n){void 0===r&&(r=[]);var u,a="function"==typeof t?Te(t):[t,r,n],c=a[0],s=a[1],l=a[2];if(function(e){return"function"==typeof e}(e))u=function(){return Ce(e())};else{var f=Ce(e);u=function(){return f}}function d(e,t){void 0===e&&(e=u());var r=fe([c[t.type]],s.filter((function(e){return(0,e.matcher)(t)})).map((function(e){return e.reducer})));return 0===r.filter((function(e){return!!e})).length&&(r=[l]),r.reduce((function(e,r){if(r){var n;if(o(e))return void 0===(n=r(e,t))?e:n;if(i(e))return ne(e,(function(e){return r(e,t)}));if(void 0===(n=r(e,t))){if(null===e)return e;throw Error("A case reducer on a non-draftable value must not return undefined")}return n}return e}),e)}return d.getInitialState=u,d}(n,(function(e){for(var t in d)e.addCase(t,d[t]);for(var r=0,n=c;r<n.length;r++){var o=n[r];e.addMatcher(o.matcher,o.reducer)}f&&e.addDefaultCase(f)}))}return a.forEach((function(e){var r,n,o=u[e],i=t+"/"+e;"reducer"in o?(r=o.reducer,n=o.prepare):r=o,c[e]=r,s[i]=r,l[e]=n?_e(i,n):_e(i)})),{name:t,reducer:function(e,t){return r||(r=f()),r(e,t)},actions:l,caseReducers:c,getInitialState:function(){return r||(r=f()),r.getInitialState()}}}var ke=function(e){void 0===e&&(e=21);for(var t="",r=e;r--;)t+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return t},De=["name","message","stack","code"],Ne=function(e,t){this.payload=e,this.meta=t},Ie=function(e,t){this.payload=e,this.meta=t},Re=function(e){if("object"==typeof e&&null!==e){for(var t={},r=0,n=De;r<n.length;r++){var o=n[r];"string"==typeof e[o]&&(t[o]=e[o])}return t}return{message:String(e)}};!function(){function e(e,t,r){var n=_e(e+"/fulfilled",(function(e,t,r,n){return{payload:e,meta:we(ge({},n||{}),{arg:r,requestId:t,requestStatus:"fulfilled"})}})),o=_e(e+"/pending",(function(e,t,r){return{payload:void 0,meta:we(ge({},r||{}),{arg:t,requestId:e,requestStatus:"pending"})}})),i=_e(e+"/rejected",(function(e,t,n,o,i){return{payload:o,error:(r&&r.serializeError||Re)(e||"Rejected"),meta:we(ge({},i||{}),{arg:n,requestId:t,rejectedWithValue:!!o,requestStatus:"rejected",aborted:"AbortError"===(null==e?void 0:e.name),condition:"ConditionError"===(null==e?void 0:e.name)})}})),u="undefined"!=typeof AbortController?AbortController:function(){function e(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return e.prototype.abort=function(){0},e}();return Object.assign((function(e){return function(a,c,s){var l,f=(null==r?void 0:r.idGenerator)?r.idGenerator(e):ke(),d=new u;function p(e){l=e,d.abort()}var v=function(){return Se(this,null,(function(){var u,v,y,b,h,m;return le(this,(function(g){switch(g.label){case 0:return g.trys.push([0,4,,5]),b=null==(u=null==r?void 0:r.condition)?void 0:u.call(r,e,{getState:c,extra:s}),null===(w=b)||"object"!=typeof w||"function"!=typeof w.then?[3,2]:[4,b];case 1:b=g.sent(),g.label=2;case 2:if(!1===b||d.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return!0,h=new Promise((function(e,t){return d.signal.addEventListener("abort",(function(){return t({name:"AbortError",message:l||"Aborted"})}))})),a(o(f,e,null==(v=null==r?void 0:r.getPendingMeta)?void 0:v.call(r,{requestId:f,arg:e},{getState:c,extra:s}))),[4,Promise.race([h,Promise.resolve(t(e,{dispatch:a,getState:c,extra:s,requestId:f,signal:d.signal,abort:p,rejectWithValue:function(e,t){return new Ne(e,t)},fulfillWithValue:function(e,t){return new Ie(e,t)}})).then((function(t){if(t instanceof Ne)throw t;return t instanceof Ie?n(t.payload,f,e,t.meta):n(t,f,e)}))])];case 3:return y=g.sent(),[3,5];case 4:return m=g.sent(),y=m instanceof Ne?i(null,f,e,m.payload,m.meta):i(m,f,e),[3,5];case 5:return r&&!r.dispatchConditionRejection&&i.match(y)&&y.meta.condition||a(y),[2,y]}var w}))}))}();return Object.assign(v,{abort:p,requestId:f,arg:e,unwrap:function(){return v.then(Me)}})}}),{pending:o,rejected:i,fulfilled:n,typePrefix:e})}e.withTypes=function(){return e}}();function Me(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}Object.assign;var Le="listenerMiddleware";_e(Le+"/add"),_e(Le+"/removeAll"),_e(Le+"/remove");"function"==typeof queueMicrotask&&queueMicrotask.bind("undefined"!=typeof window?window:void 0!==r.g?r.g:globalThis);var Fe,Ve=function(e){return function(t){setTimeout(t,e)}};"undefined"!=typeof window&&window.requestAnimationFrame?window.requestAnimationFrame:Ve(10);F()},85162:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(67294),o=r(86010);const i="tabItem_Ymn6";function u(e){let{children:t,hidden:r,className:u}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,u),hidden:r},t)}},65130:(e,t,r)=>{r.d(t,{b:()=>u,k:()=>a});var n=r(67294),o=r(902);const i=n.createContext(null);function u(e){let{children:t,content:r}=e;const o=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(r);return n.createElement(i.Provider,{value:o},t)}function a(){const e=(0,n.useContext)(i);if(null===e)throw new o.i6("DocProvider");return e}},14353:(e,t,r)=>{r.d(t,{D:()=>a,f:()=>c});var n=r(67294),o=r(902);const i=Symbol("EmptyContext"),u=n.createContext(i);function a(e){let{children:t}=e;const[r,o]=(0,n.useState)(null),i=(0,n.useMemo)((()=>({expandedItem:r,setExpandedItem:o})),[r]);return n.createElement(u.Provider,{value:i},t)}function c(){const e=(0,n.useContext)(u);if(e===i)throw new o.i6("DocSidebarItemsExpandedStateProvider");return e}},2730:(e,t,r)=>{r.d(t,{a:()=>u});var n=r(67294),o=r(12466),i=r(85936);function u(e){let{threshold:t}=e;const[r,u]=(0,n.useState)(!1),a=(0,n.useRef)(!1),{startScroll:c,cancelScroll:s}=(0,o.Ct)();return(0,o.RF)(((e,r)=>{let{scrollY:n}=e;const o=r?.scrollY;o&&(a.current?a.current=!1:n>=o?(s(),u(!1)):n<t?u(!1):n+window.innerHeight<document.documentElement.scrollHeight&&u(!0))})),(0,i.S)((e=>{e.location.hash&&(a.current=!0,u(!1))})),{shown:r,scrollToTop:()=>c(0)}}},40894:(e,t,r)=>{r.r(t),r.d(t,{AnnouncementBarProvider:()=>T.pl,BlogPostProvider:()=>_.n,Collapsible:()=>c.z,ColorModeProvider:()=>d.S,DEFAULT_SEARCH_TAG:()=>i.HX,DocProvider:()=>A.b,DocSidebarItemsExpandedStateProvider:()=>E.D,DocsPreferredVersionContextProvider:()=>w.L5,DocsSidebarProvider:()=>j.b,DocsVersionProvider:()=>C.q,HtmlClassNameProvider:()=>f.FG,NavbarProvider:()=>z.V,NavbarSecondaryMenuFiller:()=>p.Zo,PageMetadata:()=>f.d,PluginHtmlClassNameProvider:()=>f.VC,ReactContextError:()=>l.i6,ScrollControllerProvider:()=>q.OC,SkipToContentFallbackId:()=>O.u,SkipToContentLink:()=>O.l,TabGroupChoiceProvider:()=>x.z,ThemeClassNames:()=>s.k,composeProviders:()=>l.Qc,containsLineNumbers:()=>I.nt,createStorageSlot:()=>o.W,docVersionSearchTag:()=>i.os,duplicates:()=>m.l,filterDocCardListItems:()=>u.MN,findFirstCategoryLink:()=>u.Wl,findSidebarCategory:()=>u.em,getPrismCssVariables:()=>I.QC,isActiveSidebarItem:()=>u._F,isDocsPluginEnabled:()=>u.cE,isMultiColumnFooterLinks:()=>b.a,isRegexpStringMatch:()=>h.F,isSamePath:()=>U.Mg,keyboardFocusedClassName:()=>Z.h,listStorageKeys:()=>o._,listTagsByLetters:()=>y.P,parseCodeBlockTitle:()=>I.bc,parseLanguage:()=>I.Vo,parseLines:()=>I.nZ,processAdmonitionProps:()=>P,splitNavbarItems:()=>z.A,translateTagsPageTitle:()=>y.M,uniq:()=>m.j,useAlternatePageUtils:()=>N.l,useAnnouncementBar:()=>T.nT,useBackToTopButton:()=>Q.a,useBlogPost:()=>_.C,useCodeWordWrap:()=>Y.F,useCollapsible:()=>c.u,useColorMode:()=>d.I,useContextualSearchFilters:()=>i._q,useCurrentSidebarCategory:()=>u.jA,useDoc:()=>A.k,useDocById:()=>u.xz,useDocRouteMetadata:()=>u.hI,useDocSidebarItemsExpandedState:()=>E.f,useDocsPreferredVersion:()=>w.J,useDocsPreferredVersionByPluginId:()=>w.Oh,useDocsSidebar:()=>j.V,useDocsVersion:()=>C.E,useDocsVersionCandidates:()=>u.lO,useEvent:()=>l.zX,useFilteredAndTreeifiedTOC:()=>V.b,useHideableNavbar:()=>B.c,useHistoryPopHandler:()=>F.R,useHomePageRoute:()=>U.Ns,useIsomorphicLayoutEffect:()=>l.LI,useKeyboardNavigation:()=>Z.t,useLayoutDoc:()=>u.vY,useLayoutDocsSidebar:()=>u.oz,useLocalPathname:()=>L.b,useLocationChange:()=>M.S,useLockBodyScroll:()=>G.N,useNavbarMobileSidebar:()=>k.e,useNavbarSecondaryMenu:()=>D.Y,usePluralForm:()=>a.c,usePrevious:()=>l.D9,usePrismTheme:()=>g.p,useScrollController:()=>q.sG,useScrollPosition:()=>q.RF,useScrollPositionBlocker:()=>q.o5,useSearchPage:()=>$,useSidebarBreadcrumbs:()=>u.s1,useSmoothScrollTo:()=>q.Ct,useTOCHighlight:()=>W.S,useTabGroupChoice:()=>x.U,useThemeConfig:()=>n.L,useTitleFormatter:()=>R.p,useTreeifiedTOC:()=>V.a,useWindowSize:()=>v.i});var n=r(86668),o=r(50012),i=r(43320),u=r(53438),a=r(88824),c=r(86043),s=r(35281),l=r(902),f=r(10833),d=r(92949),p=r(13102),v=r(87524),y=r(35155),b=r(42489),h=r(98022),m=r(67392),g=r(66412),w=r(60373),S=r(67294);function P(e){const{mdxAdmonitionTitle:t,rest:r}=function(e){const t=S.Children.toArray(e),r=t.find((e=>S.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),n=S.createElement(S.Fragment,null,t.filter((e=>e!==r)));return{mdxAdmonitionTitle:r?.props.children,rest:n}}(e.children),n=e.title??t;return{...e,...n&&{title:n},children:r}}var O=r(55225),E=r(14353),C=r(74477),j=r(1116),A=r(65130),_=r(9460),T=r(59689),x=r(7094),k=r(93163),D=r(76857),N=r(94711),I=r(37016),R=r(82128),M=r(85936),L=r(51753),F=r(91980),V=r(39665),q=r(12466),U=r(48596),z=r(58978),W=r(96841),B=r(99445),Z=r(19727),G=r(69800),H=r(16550),K=r(52263);const X="q";function $(){const e=(0,H.k6)(),{siteConfig:{baseUrl:t}}=(0,K.Z)(),[r,n]=(0,S.useState)("");(0,S.useEffect)((()=>{const e=new URLSearchParams(window.location.search).get(X)??"";n(e)}),[]);return{searchQuery:r,setSearchQuery:(0,S.useCallback)((t=>{const r=new URLSearchParams(window.location.search);t?r.set(X,t):r.delete(X),e.replace({search:r.toString()}),n(t)}),[e]),generateSearchPageLink:(0,S.useCallback)((e=>`${t}search?${X}=${encodeURIComponent(e)}`),[t])}}var Y=r(85448),Q=r(2730)},17937:(e,t,r)=>{r.d(t,{ZP:()=>i,ZS:()=>o});const n=(0,r(77236).oM)({name:"accept",initialState:{},reducers:{setAccept:(e,t)=>{e.value=t.payload}}}),{setAccept:o}=n.actions,i=n.reducer},10661:(e,t,r)=>{r.d(t,{OG:()=>o,ZP:()=>i});const n=(0,r(77236).oM)({name:"contentType",initialState:{},reducers:{setContentType:(e,t)=>{e.value=t.payload}}}),{setContentType:o}=n.actions,i=n.reducer},23211:(e,t,r)=>{r.d(t,{i:()=>i,z:()=>o});var n=r(9482);const o=()=>(0,n.I0)(),i=n.v9},63303:(e,t,r)=>{r.d(t,{Z:()=>S});var n=r(87462),o=r(67294),i=r(67392),u=r(72389),a=r(86010);const c="tabItem_es3Q",s="schemaTabActive_dWHR",l="schemaTabsTopSection_sc6Y",f="schemaTabsListContainer_wmy4",d="schemaTabLabel_clV0",p="schemaTabsContainer_HVyG",v="tabArrow_zmvw",y="tabArrowLeft_RzDG",b="tabArrowRight_X4Xu",h="marginVertical_VWja",{useScrollPositionBlocker:m,useTabGroupChoice:g}=r(40894);function w(e){const{lazy:t,block:r,defaultValue:u,values:w,groupId:S,className:P}=e,O=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),E=w??O.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),C=(0,i.l)(E,((e,t)=>e.value===t.value));if(C.length>0)throw new Error(`Docusaurus error: Duplicate values "${C.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const j=null===u?u:u??O.find((e=>e.props.default))?.props.value??O[0]?.props.value;if(null!==j&&!E.some((e=>e.value===j)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${j}" but none of its children has the corresponding value. Available values are: ${E.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:A,setTabGroupChoices:_}=g(),[T,x]=(0,o.useState)(j),k=[],{blockElementScrollPositionUntilNextRender:D}=m();if(null!=S){const e=A[S];null!=e&&e!==T&&E.some((t=>t.value===e))&&x(e)}const N=e=>{const t=e.currentTarget,r=k.indexOf(t),n=E[r].value;n!==T&&(D(t),x(n),null!=S&&_(S,n))},I=e=>{let t=null;switch(e.key){case"ArrowRight":{const r=k.indexOf(e.currentTarget)+1;t=k[r]||k[0];break}case"ArrowLeft":{const r=k.indexOf(e.currentTarget)-1;t=k[r]||k[k.length-1];break}}t?.focus()},R=(0,o.useRef)(null),[M,L]=(0,o.useState)(!1);(0,o.useEffect)((()=>{const e=new ResizeObserver((e=>{for(let t of e)t.target.offsetWidth<t.target.scrollWidth?L(!0):L(!1)}));return e.observe(R.current),()=>{e.disconnect()}}),[]);return o.createElement("div",{className:"tabs__container"},o.createElement("div",{className:l},o.createElement("div",{className:p},M&&o.createElement("button",{className:(0,a.Z)(v,y),onClick:()=>{R.current.scrollLeft-=90}}),o.createElement("div",{ref:R,role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)(f,"tabs",{"tabs--block":r},P)},E.map((e=>{let{value:t,label:r,attributes:i}=e;return o.createElement("div",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>k.push(e),onKeyDown:I,onFocus:N,onClick:N},i,{className:(0,a.Z)("tabs__item",c,i?.className,{[s]:T===t})}),o.createElement("span",{className:d},r??t))}))),M&&o.createElement("button",{className:(0,a.Z)(v,b),onClick:()=>{R.current.scrollLeft+=90}}))),o.createElement("hr",null),t?(0,o.cloneElement)(O.filter((e=>e.props.value===T))[0]??O.filter((e=>e.props.value===j))[0],{className:h}):o.createElement("div",{className:h},O.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function S(e){const t=(0,u.Z)();return o.createElement(w,(0,n.Z)({key:String(t)},e))}},9482:(e,t,r)=>{r.d(t,{zt:()=>l,I0:()=>y,v9:()=>g});var n=r(67294),o=n.createContext(null);var i=function(e){e()},u=function(){return i};var a={notify:function(){},get:function(){return[]}};function c(e,t){var r,n=a;function o(){c.onStateChange&&c.onStateChange()}function i(){r||(r=t?t.addNestedSub(o):e.subscribe(o),n=function(){var e=u(),t=null,r=null;return{clear:function(){t=null,r=null},notify:function(){e((function(){for(var e=t;e;)e.callback(),e=e.next}))},get:function(){for(var e=[],r=t;r;)e.push(r),r=r.next;return e},subscribe:function(e){var n=!0,o=r={callback:e,next:null,prev:r};return o.prev?o.prev.next=o:t=o,function(){n&&null!==t&&(n=!1,o.next?o.next.prev=o.prev:r=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}())}var c={addNestedSub:function(e){return i(),n.subscribe(e)},notifyNestedSubs:function(){n.notify()},handleChangeWrapper:o,isSubscribed:function(){return Boolean(r)},trySubscribe:i,tryUnsubscribe:function(){r&&(r(),r=void 0,n.clear(),n=a)},getListeners:function(){return n}};return c}var s="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?n.useLayoutEffect:n.useEffect;const l=function(e){var t=e.store,r=e.context,i=e.children,u=(0,n.useMemo)((function(){var e=c(t);return{store:t,subscription:e}}),[t]),a=(0,n.useMemo)((function(){return t.getState()}),[t]);s((function(){var e=u.subscription;return e.onStateChange=e.notifyNestedSubs,e.trySubscribe(),a!==t.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[u,a]);var l=r||o;return n.createElement(l.Provider,{value:u},i)};r(8679),r(72973);r(25108);r(87462);function f(){return(0,n.useContext)(o)}function d(e){void 0===e&&(e=o);var t=e===o?f:function(){return(0,n.useContext)(e)};return function(){return t().store}}var p=d();function v(e){void 0===e&&(e=o);var t=e===o?p:d(e);return function(){return t().dispatch}}var y=v(),b=function(e,t){return e===t};function h(e){void 0===e&&(e=o);var t=e===o?f:function(){return(0,n.useContext)(e)};return function(e,r){void 0===r&&(r=b);var o=t(),i=function(e,t,r,o){var i,u=(0,n.useReducer)((function(e){return e+1}),0)[1],a=(0,n.useMemo)((function(){return c(r,o)}),[r,o]),l=(0,n.useRef)(),f=(0,n.useRef)(),d=(0,n.useRef)(),p=(0,n.useRef)(),v=r.getState();try{if(e!==f.current||v!==d.current||l.current){var y=e(v);i=void 0!==p.current&&t(y,p.current)?p.current:y}else i=p.current}catch(b){throw l.current&&(b.message+="\nThe error may be correlated with this previous error:\n"+l.current.stack+"\n\n"),b}return s((function(){f.current=e,d.current=v,p.current=i,l.current=void 0})),s((function(){function e(){try{var e=r.getState();if(e===d.current)return;var n=f.current(e);if(t(n,p.current))return;p.current=n,d.current=e}catch(b){l.current=b}u()}return a.onStateChange=e,a.trySubscribe(),e(),function(){return a.tryUnsubscribe()}}),[r,a]),i}(e,r,o.store,o.subscription);return(0,n.useDebugValue)(i),i}}var m,g=h(),w=r(73935);m=w.unstable_batchedUpdates,i=m},88359:(e,t)=>{var r=60103,n=60106,o=60107,i=60108,u=60114,a=60109,c=60110,s=60112,l=60113,f=60120,d=60115,p=60116,v=60121,y=60122,b=60117,h=60129,m=60131;if("function"==typeof Symbol&&Symbol.for){var g=Symbol.for;r=g("react.element"),n=g("react.portal"),o=g("react.fragment"),i=g("react.strict_mode"),u=g("react.profiler"),a=g("react.provider"),c=g("react.context"),s=g("react.forward_ref"),l=g("react.suspense"),f=g("react.suspense_list"),d=g("react.memo"),p=g("react.lazy"),v=g("react.block"),y=g("react.server.block"),b=g("react.fundamental"),h=g("react.debug_trace_mode"),m=g("react.legacy_hidden")}function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case o:case u:case i:case l:case f:return e;default:switch(e=e&&e.$$typeof){case c:case s:case p:case d:case a:return e;default:return t}}case n:return t}}}},72973:(e,t,r)=>{r(88359)},19800:(e,t,r)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===n(t)?t:String(t)}function i(e,t,r){return(t=o(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,{md:()=>b,UY:()=>v,qC:()=>y,MT:()=>p});r(25108);function c(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var s="function"==typeof Symbol&&Symbol.observable||"@@observable",l=function(){return Math.random().toString(36).substring(7).split("").join(".")},f={INIT:"@@redux/INIT"+l(),REPLACE:"@@redux/REPLACE"+l(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+l()}};function d(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function p(e,t,r){var n;if("function"==typeof t&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw new Error(c(0));if("function"==typeof t&&void 0===r&&(r=t,t=void 0),void 0!==r){if("function"!=typeof r)throw new Error(c(1));return r(p)(e,t)}if("function"!=typeof e)throw new Error(c(2));var o=e,i=t,u=[],a=u,l=!1;function v(){a===u&&(a=u.slice())}function y(){if(l)throw new Error(c(3));return i}function b(e){if("function"!=typeof e)throw new Error(c(4));if(l)throw new Error(c(5));var t=!0;return v(),a.push(e),function(){if(t){if(l)throw new Error(c(6));t=!1,v();var r=a.indexOf(e);a.splice(r,1),u=null}}}function h(e){if(!d(e))throw new Error(c(7));if(void 0===e.type)throw new Error(c(8));if(l)throw new Error(c(9));try{l=!0,i=o(i,e)}finally{l=!1}for(var t=u=a,r=0;r<t.length;r++){(0,t[r])()}return e}function m(e){if("function"!=typeof e)throw new Error(c(10));o=e,h({type:f.REPLACE})}function g(){var e,t=b;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new Error(c(11));function r(){e.next&&e.next(y())}return r(),{unsubscribe:t(r)}}})[s]=function(){return this},e}return h({type:f.INIT}),(n={dispatch:h,subscribe:b,getState:y,replaceReducer:m})[s]=g,n}function v(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var o=t[n];0,"function"==typeof e[o]&&(r[o]=e[o])}var i,u=Object.keys(r);try{!function(e){Object.keys(e).forEach((function(t){var r=e[t];if(void 0===r(void 0,{type:f.INIT}))throw new Error(c(12));if(void 0===r(void 0,{type:f.PROBE_UNKNOWN_ACTION()}))throw new Error(c(13))}))}(r)}catch(a){i=a}return function(e,t){if(void 0===e&&(e={}),i)throw i;for(var n=!1,o={},a=0;a<u.length;a++){var s=u[a],l=r[s],f=e[s],d=l(f,t);if(void 0===d){t&&t.type;throw new Error(c(14))}o[s]=d,n=n||d!==f}return(n=n||u.length!==Object.keys(e).length)?o:e}}function y(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function b(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return function(){var r=e.apply(void 0,arguments),n=function(){throw new Error(c(15))},o={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},i=t.map((function(e){return e(o)}));return n=y.apply(void 0,i)(r.dispatch),a(a({},r),{},{dispatch:n})}}}}}]);