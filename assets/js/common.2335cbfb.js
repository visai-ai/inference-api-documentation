(self.webpackChunkvisai_inference_api_documentation=self.webpackChunkvisai_inference_api_documentation||[]).push([[8592],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),i=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=i(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=i(n),d=r,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||c;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var i=2;i<c;i++)a[i]=n[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},170:(e,t,n)=>{"use strict";n.d(t,{Z:()=>O});var o=n(87462),r=n(67294),c=n(72389),a=n(86010),s=n(66412),l=n(35281),i=n(37016);const u="codeBlockContainer_Ckt0";function p(e){let{as:t,...n}=e;const c=(0,s.p)(),p=(0,i.QC)(c);return r.createElement(t,(0,o.Z)({},n,{style:p,className:(0,a.Z)(n.className,u,l.k.common.codeBlock)}))}const m={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function d(e){let{children:t,className:n}=e;return r.createElement(p,{as:"pre",tabIndex:0,className:(0,a.Z)(m.codeBlockStandalone,"thin-scrollbar",n)},r.createElement("code",{className:m.codeBlockLines},t))}var f=n(86668),g=n(85448),h=n(23746);const y="codeLine_lJS_",b="codeLineNumber_Tfdd",v="codeLineContent_feaV";function k(e){let{line:t,classNames:n,showLineNumbers:c,getLineProps:s,getTokenProps:l}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=s({line:t,className:(0,a.Z)(n,c&&y)}),u=t.map(((e,t)=>r.createElement("span",(0,o.Z)({key:t},l({token:e,key:t})))));return r.createElement("span",i,c?r.createElement(r.Fragment,null,r.createElement("span",{className:b}),r.createElement("span",{className:v},u)):u,r.createElement("br",null))}var E=n(95999);const N={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function B(e){let{code:t,className:n}=e;const[o,c]=(0,r.useState)(!1),s=(0,r.useRef)(void 0),l=(0,r.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const o=document.createElement("textarea"),r=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const c=document.getSelection();let a=!1;c.rangeCount>0&&(a=c.getRangeAt(0)),n.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}o.remove(),a&&(c.removeAllRanges(),c.addRange(a)),r&&r.focus()}(t),c(!0),s.current=window.setTimeout((()=>{c(!1)}),1e3)}),[t]);return(0,r.useEffect)((()=>()=>window.clearTimeout(s.current)),[]),r.createElement("button",{type:"button","aria-label":o?(0,E.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,E.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,E.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,a.Z)("clean-btn",n,N.copyButton,o&&N.copyButtonCopied),onClick:l},r.createElement("span",{className:N.copyButtonIcons,"aria-hidden":"true"},r.createElement("svg",{className:N.copyButtonIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),r.createElement("svg",{className:N.copyButtonSuccessIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const L="wordWrapButtonIcon_Bwma",C="wordWrapButtonEnabled_EoeP";function w(e){let{className:t,onClick:n,isEnabled:o}=e;const c=(0,E.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return r.createElement("button",{type:"button",onClick:n,className:(0,a.Z)("clean-btn",t,o&&C),"aria-label":c,title:c},r.createElement("svg",{className:L,viewBox:"0 0 24 24","aria-hidden":"true"},r.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function j(e){let{children:t,className:n="",metastring:c,title:l,showLineNumbers:u,language:d}=e;const{prism:{defaultLanguage:y,magicComments:b}}=(0,f.L)(),v=d??(0,i.Vo)(n)??y,E=(0,s.p)(),N=(0,g.F)(),L=(0,i.bc)(c)||l,{lineClassNames:C,code:j}=(0,i.nZ)(t,{metastring:c,language:v,magicComments:b}),O=u??(0,i.nt)(c);return r.createElement(p,{as:"div",className:(0,a.Z)(n,v&&!n.includes(`language-${v}`)&&`language-${v}`)},L&&r.createElement("div",{className:m.codeBlockTitle},L),r.createElement("div",{className:m.codeBlockContent},r.createElement(h.ZP,(0,o.Z)({},h.lG,{theme:E,code:j,language:v??"text"}),(e=>{let{className:t,tokens:n,getLineProps:o,getTokenProps:c}=e;return r.createElement("pre",{tabIndex:0,ref:N.codeBlockRef,className:(0,a.Z)(t,m.codeBlock,"thin-scrollbar")},r.createElement("code",{className:(0,a.Z)(m.codeBlockLines,O&&m.codeBlockLinesWithNumbering)},n.map(((e,t)=>r.createElement(k,{key:t,line:e,getLineProps:o,getTokenProps:c,classNames:C[t],showLineNumbers:O})))))})),r.createElement("div",{className:m.buttonGroup},(N.isEnabled||N.isCodeScrollable)&&r.createElement(w,{className:m.codeButton,onClick:()=>N.toggle(),isEnabled:N.isEnabled}),r.createElement(B,{className:m.codeButton,code:j}))))}function O(e){let{children:t,...n}=e;const a=(0,c.Z)(),s=function(e){return r.Children.toArray(e).some((e=>(0,r.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),l="string"==typeof s?j:d;return r.createElement(l,(0,o.Z)({key:String(a)},n),s)}},9460:(e,t,n)=>{"use strict";n.d(t,{C:()=>s,n:()=>a});var o=n(67294),r=n(902);const c=o.createContext(null);function a(e){let{children:t,content:n,isBlogPostPage:r=!1}=e;const a=function(e){let{content:t,isBlogPostPage:n}=e;return(0,o.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:n})),[t,n])}({content:n,isBlogPostPage:r});return o.createElement(c.Provider,{value:a},t)}function s(){const e=(0,o.useContext)(c);if(null===e)throw new r.i6("BlogPostProvider");return e}},85448:(e,t,n)=>{"use strict";n.d(t,{F:()=>s});var o=n(67294),r=n(902);const c={attributes:!0,characterData:!0,childList:!0,subtree:!0};function a(e,t){const[n,a]=(0,o.useState)(),s=(0,o.useCallback)((()=>{a(e.current?.closest("[role=tabpanel][hidden]"))}),[e,a]);(0,o.useEffect)((()=>{s()}),[s]),function(e,t,n){void 0===n&&(n=c);const a=(0,r.zX)(t),s=(0,r.Ql)(n);(0,o.useEffect)((()=>{const t=new MutationObserver(a);return e&&t.observe(e,s),()=>t.disconnect()}),[e,a,s])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),s())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}function s(){const[e,t]=(0,o.useState)(!1),[n,r]=(0,o.useState)(!1),c=(0,o.useRef)(null),s=(0,o.useCallback)((()=>{const n=c.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[c,e]),l=(0,o.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=c.current,n=e>t||c.current.querySelector("code").hasAttribute("style");r(n)}),[c]);return a(c,l),(0,o.useEffect)((()=>{l()}),[e,l]),(0,o.useEffect)((()=>(window.addEventListener("resize",l,{passive:!0}),()=>{window.removeEventListener("resize",l)})),[l]),{codeBlockRef:c,isEnabled:e,isCodeScrollable:n,toggle:s}}},66412:(e,t,n)=>{"use strict";n.d(t,{p:()=>c});var o=n(92949),r=n(86668);function c(){const{prism:e}=(0,r.L)(),{colorMode:t}=(0,o.I)(),n=e.theme,c=e.darkTheme||n;return"dark"===t?c:n}},96841:(e,t,n)=>{"use strict";n.d(t,{S:()=>l});var o=n(67294),r=n(86668);function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function a(e,t){let{anchorTopOffset:n}=t;const o=e.find((e=>c(e).top>=n));if(o){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(o))?o:e[e.indexOf(o)-1]??null}return e[e.length-1]??null}function s(){const e=(0,o.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,o.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function l(e){const t=(0,o.useRef)(void 0),n=s();(0,o.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:o,linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:s}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(o),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const o=[];for(let r=t;r<=n;r+=1)o.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(o.join()))}({minHeadingLevel:c,maxHeadingLevel:s}),i=a(l,{anchorTopOffset:n.current}),u=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===u)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}},37016:(e,t,n)=>{"use strict";n.d(t,{QC:()=>d,Vo:()=>p,bc:()=>i,nZ:()=>m,nt:()=>u});var o=n(87594),r=n.n(o);const c=/title=(?<quote>["'])(?<title>.*?)\1/,a=/\{(?<range>[\d,-]+)\}/,s={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function l(e,t){const n=e.map((e=>{const{start:n,end:o}=s[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${o})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function i(e){return e?.match(c)?.groups.title??""}function u(e){return Boolean(e?.includes("showLineNumbers"))}function p(e){return e.split(" ").find((e=>e.startsWith("language-")))?.replace(/language-/,"")}function m(e,t){let n=e.replace(/\n$/,"");const{language:o,magicComments:c,metastring:i}=t;if(i&&a.test(i)){const e=i.match(a).groups.range;if(0===c.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${i}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=c[0].className,o=r()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(o),code:n}}if(void 0===o)return{lineClassNames:{},code:n};const u=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return l(["js","jsBlock"],t);case"jsx":case"tsx":return l(["js","jsBlock","jsx"],t);case"html":return l(["js","jsBlock","html"],t);case"python":case"py":case"bash":return l(["bash"],t);case"markdown":case"md":return l(["html","jsx","bash"],t);default:return l(Object.keys(s),t)}}(o,c),p=n.split("\n"),m=Object.fromEntries(c.map((e=>[e.className,{start:0,range:""}]))),d=Object.fromEntries(c.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),f=Object.fromEntries(c.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),g=Object.fromEntries(c.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let r=0;r<p.length;){const e=p[r].match(u);if(!e){r+=1;continue}const t=e.slice(1).find((e=>void 0!==e));d[t]?m[d[t]].range+=`${r},`:f[t]?m[f[t]].start=r:g[t]&&(m[g[t]].range+=`${m[g[t]].start}-${r-1},`),p.splice(r,1)}n=p.join("\n");const h={};return Object.entries(m).forEach((e=>{let[t,{range:n}]=e;r()(n).forEach((e=>{h[e]??=[],h[e].push(t)}))})),{lineClassNames:h,code:n}}function d(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[o,r]=e;const c=t[o];c&&"string"==typeof r&&(n[c]=r)})),n}},35155:(e,t,n)=>{"use strict";n.d(t,{M:()=>r,P:()=>c});var o=n(95999);const r=()=>(0,o.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function c(e){const t={};return Object.values(e).forEach((e=>{const n=function(e){return e[0].toUpperCase()}(e.label);t[n]??=[],t[n].push(e)})),Object.entries(t).sort(((e,t)=>{let[n]=e,[o]=t;return n.localeCompare(o)})).map((e=>{let[t,n]=e;return{letter:t,tags:n.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}},39665:(e,t,n)=>{"use strict";n.d(t,{a:()=>c,b:()=>s});var o=n(67294);function r(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const o=n.slice(2,e.level);e.parentIndex=Math.max(...o),n[e.level]=t}));const o=[];return t.forEach((e=>{const{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):o.push(r)})),o}function c(e){return(0,o.useMemo)((()=>r(e)),[e])}function a(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:o}=e;return t.flatMap((e=>{const t=a({toc:e.children,minHeadingLevel:n,maxHeadingLevel:o});return function(e){return e.level>=n&&e.level<=o}(e)?[{...e,children:t}]:t}))}function s(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:c}=e;return(0,o.useMemo)((()=>a({toc:r(t),minHeadingLevel:n,maxHeadingLevel:c})),[t,n,c])}},88824:(e,t,n)=>{"use strict";n.d(t,{c:()=>u});var o=n(67294),r=n(52263),c=n(25108);const a=["zero","one","two","few","many","other"];function s(e){return a.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,o.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return c.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function u(){const e=i();return{selectMessage:(t,n)=>function(e,t,n){const o=e.split("|");if(1===o.length)return o[0];o.length>n.pluralForms.length&&c.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${o.length}: ${e}`);const r=n.select(t),a=n.pluralForms.indexOf(r);return o[Math.min(a,o.length-1)]}(n,t,e)}}},87594:(e,t)=>{function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,c]=t;if(o&&c){o=parseInt(o),c=parseInt(c);const e=o<c?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(c+=e);for(let t=o;t!==c;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},23746:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>f,lG:()=>a});var o=n(87410);const r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var c=n(67294),a={Prism:o.Z,theme:r};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l.apply(this,arguments)}var i=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},m=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=l({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=l({},n,{backgroundColor:null}),r};function d(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}const f=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?m(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,c=l({},d(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),a=t.getThemeDict(t.props);return void 0!==a&&(c.style=a.plain),void 0!==r&&(c.style=void 0!==c.style?l({},c.style,r):r),void 0!==n&&(c.key=n),o&&(c.className+=" "+o),c})),s(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,c=t.getThemeDict(t.props);if(void 0!==c){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return c[n[0]];var a=o?{display:"inline-block"}:{},s=n.map((function(e){return c[e]}));return Object.assign.apply(Object,[a].concat(s))}})),s(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,c=e.token,a=l({},d(e,["key","className","style","token"]),{className:"token "+c.types.join(" "),children:c.content,style:t.getStyleForToken(c),key:void 0});return void 0!==r&&(a.style=void 0!==a.style?l({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),s(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var c=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),c}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,c=this.getThemeDict(this.props),a=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],c=0,a=0,s=[],l=[s];a>-1;){for(;(c=o[a]++)<r[a];){var m=void 0,d=t[a],f=n[a][c];if("string"==typeof f?(d=a>0?d:["plain"],m=f):(d=p(d,f.type),f.alias&&(d=p(d,f.alias)),m=f.content),"string"==typeof m){var g=m.split(i),h=g.length;s.push({types:d,content:g[0]});for(var y=1;y<h;y++)u(s),l.push(s=[]),s.push({types:d,content:g[y]})}else a++,t.push(d),n.push(m),o.push(0),r.push(m.length)}a--,t.pop(),n.pop(),o.pop(),r.pop()}return u(s),l}(void 0!==a?this.tokenize(t,o,a,n):[o]),className:"prism-code language-"+n,style:void 0!==c?c.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(c.Component)}}]);