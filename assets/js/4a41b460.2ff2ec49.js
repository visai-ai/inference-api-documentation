"use strict";(self.webpackChunkvisai_inference_api_documentation=self.webpackChunkvisai_inference_api_documentation||[]).push([[6451],{93122:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>g,frontMatter:()=>d,metadata:()=>y,toc:()=>b});var s=a(87462),o=(a(67294),a(3905)),i=a(26389),n=a(94891),r=a(75190),c=a(47507),p=a(24310),l=a(63303),m=(a(75035),a(85162));const d={id:"cancel-job",title:"Asynchronous API - Speech to Text",description:"",sidebar_label:"Cancel Job",hide_title:!0,hide_table_of_contents:!0,api:{tags:["asynchronous"],description:"",operationId:"asynSTTCancelJobInfer",parameters:[{name:"X-API-Key",in:"header",description:"Your API key",required:!0,schema:{type:"string"}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{job_id:{type:"string",description:"Job ID of the inference"}},title:"ApiResponse"}}}}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{job_id:{type:"string",description:"Job ID"}}}}},required:!0},jsonRequestBodyExample:{job_id:"<job_id>"},method:"post",path:"/predict",servers:[{url:"https://longrun-api.visai.ai/v1/job/cancel",description:"Default server"}],securitySchemes:{"X-API-Key":{type:"apiKey",in:"header",name:"X-API-Key"}},fullURL:"https://longrun-api.visai.ai/v1/job/cancel",postman:{name:"Speech to Text Inference",header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",custom_edit_url:null},u=void 0,y={unversionedId:"ai-marketplace/speech-to-text/asynchronous-api/cancel-job",id:"ai-marketplace/speech-to-text/asynchronous-api/cancel-job",title:"Asynchronous API - Speech to Text",description:"",source:"@site/docs/ai-marketplace/speech-to-text/asynchronous-api/cancel-job.api.mdx",sourceDirName:"ai-marketplace/speech-to-text/asynchronous-api",slug:"/ai-marketplace/speech-to-text/asynchronous-api/cancel-job",permalink:"/inference-api-documentation/docs/ai-marketplace/speech-to-text/asynchronous-api/cancel-job",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"cancel-job",title:"Asynchronous API - Speech to Text",description:"",sidebar_label:"Cancel Job",hide_title:!0,hide_table_of_contents:!0,api:{tags:["asynchronous"],description:"",operationId:"asynSTTCancelJobInfer",parameters:[{name:"X-API-Key",in:"header",description:"Your API key",required:!0,schema:{type:"string"}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{job_id:{type:"string",description:"Job ID of the inference"}},title:"ApiResponse"}}}}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{job_id:{type:"string",description:"Job ID"}}}}},required:!0},jsonRequestBodyExample:{job_id:"<job_id>"},method:"post",path:"/predict",servers:[{url:"https://longrun-api.visai.ai/v1/job/cancel",description:"Default server"}],securitySchemes:{"X-API-Key":{type:"apiKey",in:"header",name:"X-API-Key"}},fullURL:"https://longrun-api.visai.ai/v1/job/cancel",postman:{name:"Speech to Text Inference",header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",custom_edit_url:null},sidebar:"aiMarketplaceSidebar",previous:{title:"List All Job",permalink:"/inference-api-documentation/docs/ai-marketplace/speech-to-text/asynchronous-api/list-jobs"},next:{title:"OCR Thai ID Card",permalink:"/inference-api-documentation/docs/ai-marketplace/ocr-thai-id-card"}},h={},b=[{value:"Asynchronous - Speech to Text API",id:"asynchronous---speech-to-text-api",level:2}],k={toc:b};function g(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,s.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"asynchronous---speech-to-text-api"},"Asynchronous - Speech to Text API"),(0,o.kt)("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"1rem"}},(0,o.kt)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,o.kt)("path",{d:"M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:"black","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),(0,o.kt)("h2",{style:{marginBottom:"0"}},"Cancel inference job")),(0,o.kt)("div",{className:"custom-url-container"},(0,o.kt)("span",{className:"custom-method"},"POST"),(0,o.kt)("span",{className:"custom-url"},"https://longrun-api.visai.ai/v1/job/cancel")),(0,o.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"Header")),(0,o.kt)("div",null,(0,o.kt)("ul",null,(0,o.kt)(r.Z,{className:"paramsItem",param:{name:"X-API-Key",in:"header",description:"Your API key",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,o.kt)(n.Z,{mdxType:"MimeTabs"},(0,o.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)("p",{style:{marginLeft:"1rem",marginBottom:"0px",fontWeight:500,fontSize:"12px"}},"Raw JSON body"),(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Request Body"),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," ","required")),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{}},(0,o.kt)("span",{style:{opacity:"0.6"}}," object")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{}},(0,o.kt)(p.Z,{collapsible:!1,name:"job_id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"ID of the job to be canceled."},mdxType:"SchemaItem"})))))))))),(0,o.kt)("div",null,(0,o.kt)(i.Z,{mdxType:"ApiTabs"},(0,o.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(l.Z,{mdxType:"SchemaTabs"},(0,o.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{}},(0,o.kt)("span",{style:{opacity:"0.6"}}," object")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)(p.Z,{collapsible:!1,name:"code",required:!1,schemaName:"string",schema:{description:"A unique error code identifying the specific issue.",title:"code"},mdxType:"SchemaItem"}),(0,o.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",schema:{description:"A descriptive message explaining the cancel process.",title:"message"},mdxType:"SchemaItem"})))),(0,o.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(c.Z,{responseExample:'{\n  "code": "EACP-01-000",\n  "message": "job is already cancelled"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);