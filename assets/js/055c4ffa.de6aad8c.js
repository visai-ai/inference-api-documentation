"use strict";(self.webpackChunkvisai_inference_api_documentation=self.webpackChunkvisai_inference_api_documentation||[]).push([[6803],{68853:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(67294),s=n(86010),a=n(39960);const r={longRunCardContainer:"longRunCardContainer_nttB"};function i(e){let{title:t,href:n}=e;return o.createElement(a.Z,{to:n,className:(0,s.Z)("",r.longRunCardContainer)},o.createElement("span",{className:(0,s.Z)("",r.longRunTitle)},t),o.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.createElement("g",{id:"arrow-right"},o.createElement("path",{id:"Icon",d:"M4.16699 10.0001H15.8337M15.8337 10.0001L10.0003 4.16675M15.8337 10.0001L10.0003 15.8334",stroke:"currentColor",strokeWidth:"1.66667",strokeLinecap:"round",strokeLinejoin:"round"}))))}},23831:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=n(87462),s=(n(67294),n(3905)),a=n(68853);const r={id:"speech-to-text",title:"Speech To Text",custom_edit_url:null},i="Speech To Text",c={unversionedId:"ai-marketplace/speech-to-text",id:"ai-marketplace/speech-to-text",title:"Speech To Text",description:"The API is highly scalable and supports a range of audio formats. User can choose between two primary API options based on the length of the audio input and the use case:",source:"@site/docs/ai-marketplace/stt.mdx",sourceDirName:"ai-marketplace",slug:"/ai-marketplace/speech-to-text",permalink:"/inference-api-documentation/docs/ai-marketplace/speech-to-text",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"speech-to-text",title:"Speech To Text",custom_edit_url:null}},u={},l=[{value:"Synchronous API",id:"synchronous-api",level:2},{value:"Asynchronous API",id:"asynchronous-api",level:2}],p={toc:l};function h(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"speech-to-text"},"Speech To Text"),(0,s.kt)("p",null,"The API is highly scalable and supports a range of audio formats. User can choose between two primary API options based on the length of the audio input and the use case:"),(0,s.kt)("h2",{id:"synchronous-api"},"Synchronous API"),(0,s.kt)("p",null,"Synchronous API returns the recognized text for short audio ",(0,s.kt)("strong",{parentName:"p"},"(less than 1 minutes)"),"."),(0,s.kt)("p",null,"To process a speech recognition request for audio longer than 1 minutes, use Asynchronous API."),(0,s.kt)(a.Z,{title:"Synchronous API",href:"/docs/ai-marketplace/speech-to-text/synchronous-api",mdxType:"LinkCard"}),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"asynchronous-api"},"Asynchronous API"),(0,s.kt)("p",null,"Asynchronous API starts a long running audio processing operation. Use asynchronous API to transcribe audio that is ",(0,s.kt)("strong",{parentName:"p"},"longer than 1 minutes"),". The upper limit for asynchronous API is ",(0,s.kt)("strong",{parentName:"p"},"300 minutes"),"."),(0,s.kt)("p",null,"For shorter audio,\xa0synchronous API\xa0is faster and simpler. The upper limit for asynchronous API is 300 minutes."),(0,s.kt)(a.Z,{title:"Asynchronous API",href:"/docs/ai-marketplace/speech-to-text/asynchronous",mdxType:"LinkCard"}))}h.isMDXComponent=!0}}]);