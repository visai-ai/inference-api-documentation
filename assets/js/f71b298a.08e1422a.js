"use strict";(self.webpackChunkvisai_inference_api_documentation=self.webpackChunkvisai_inference_api_documentation||[]).push([[3199],{12374:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>f,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>y,toc:()=>k});var a=i(87462),s=(i(67294),i(3905)),n=i(26389),o=i(94891),r=i(75190),p=i(47507),l=i(24310),c=i(63303),m=(i(75035),i(85162));const d={id:"text-classification",title:"Text Classification - Customized AI",description:"",sidebar_label:"Text Classification",hide_title:!0,hide_table_of_contents:!0,hide_send_button:!0,api:{tags:["customized-ai"],description:"",operationId:"textClassificationCustomizedInfer",parameters:[{name:"X-API-Key",in:"header",description:"Your API key",required:!0,schema:{type:"string"}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{results:{type:"array",description:"List of results",items:{type:"object",properties:{inputs:{type:"string",description:"Input sentence"},prediction:{type:"array",description:"List of prediction result",items:{type:"object",properties:{class_name:{type:"string",description:"Class name from dataset"},confidence:{type:"number","Confidence value":null}}}}}}}},title:"ApiResponse"}}}}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{inputs:{type:"array",description:"List of sentences",items:{type:"string"}}}}}},required:!0},jsonRequestBodyExample:{inputs:["\u0e23\u0e32\u0e04\u0e32\u0e14\u0e35\u0e21\u0e35\u0e04\u0e38\u0e13\u0e20\u0e32\u0e1e"]},method:"post",path:"/predict",servers:[{url:"https://{api_name}-{api_id}.infer.visai.ai/predict",description:"Default server"}],securitySchemes:{"X-API-Key":{type:"apiKey",in:"header",name:"X-API-Key"}},fullURL:"https://{api_name}-{api_id}.infer.visai.ai/predict",postman:{name:"Word Tokenization Inference",header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",custom_edit_url:null},u=void 0,y={unversionedId:"customized-ai/text-classification",id:"customized-ai/text-classification",title:"Text Classification - Customized AI",description:"",source:"@site/docs/customized-ai/text-classification.api.mdx",sourceDirName:"customized-ai",slug:"/customized-ai/text-classification",permalink:"/inference-api-documentation/docs/customized-ai/text-classification",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"text-classification",title:"Text Classification - Customized AI",description:"",sidebar_label:"Text Classification",hide_title:!0,hide_table_of_contents:!0,hide_send_button:!0,api:{tags:["customized-ai"],description:"",operationId:"textClassificationCustomizedInfer",parameters:[{name:"X-API-Key",in:"header",description:"Your API key",required:!0,schema:{type:"string"}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{results:{type:"array",description:"List of results",items:{type:"object",properties:{inputs:{type:"string",description:"Input sentence"},prediction:{type:"array",description:"List of prediction result",items:{type:"object",properties:{class_name:{type:"string",description:"Class name from dataset"},confidence:{type:"number","Confidence value":null}}}}}}}},title:"ApiResponse"}}}}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{inputs:{type:"array",description:"List of sentences",items:{type:"string"}}}}}},required:!0},jsonRequestBodyExample:{inputs:["\u0e23\u0e32\u0e04\u0e32\u0e14\u0e35\u0e21\u0e35\u0e04\u0e38\u0e13\u0e20\u0e32\u0e1e"]},method:"post",path:"/predict",servers:[{url:"https://{api_name}-{api_id}.infer.visai.ai/predict",description:"Default server"}],securitySchemes:{"X-API-Key":{type:"apiKey",in:"header",name:"X-API-Key"}},fullURL:"https://{api_name}-{api_id}.infer.visai.ai/predict",postman:{name:"Word Tokenization Inference",header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",custom_edit_url:null},sidebar:"customizedAISidebar",previous:{title:"Sentiment Analysis",permalink:"/inference-api-documentation/docs/customized-ai/sentiment-analysis"},next:{title:"Time Series Forecasting",permalink:"/inference-api-documentation/docs/customized-ai/time-series-forecasting"}},f={},k=[{value:"Text Classification API",id:"text-classification-api",level:2}],h={toc:k};function b(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"text-classification-api"},"Text Classification API"),(0,s.kt)("div",{class:"custom-url-container"},(0,s.kt)("span",{class:"custom-method"},"POST"),(0,s.kt)("span",{class:"custom-url"},"https://[api_name]-[api_id].infer.visai.ai/predict")),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Header")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"X-API-Key",in:"header",description:"Your API key",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Domain Name")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"api_name",in:"header",description:"Deployed API Name",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"api_id",in:"header",description:"Deployed API ID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)("div",null,"Get your deployed api in ",(0,s.kt)("a",{href:"https://console.visai.ai/library?tabActive=customized-ai",target:"_blank"},"Library | Console"),".")))),(0,s.kt)(o.Z,{mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," ","required")),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"inputs"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"List of sentence",title:""},mdxType:"SchemaItem"})))))))),(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"results"),(0,s.kt)("span",{style:{opacity:"0.6"}}," Array [")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"input",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"array",description:"Input sentence"},mdxType:"SchemaItem"})),(0,s.kt)(l.Z,{collapsible:!1,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"prediction"),(0,s.kt)("span",{style:{opacity:"0.6"}}," Array [")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"class_name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Class name from dataset"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"confidence",required:!1,schemaName:"float",qualifierMessage:void 0,schema:{type:"float",description:"Probability class of sentence"},mdxType:"SchemaItem"}))))),(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))),(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'{\n  "results": [\n    {\n      "input": "\u0e23\u0e32\u0e04\u0e32\u0e14\u0e35\u0e21\u0e35\u0e04\u0e38\u0e13\u0e20\u0e32\u0e1e",\n      "prediction": [\n          {\n            "class_name": "\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23",\n            "confidence": 0.5123007644462169\n          },\n          {\n            "class_name": "\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e02\u0e19\u0e2a\u0e48\u0e07",\n            "confidence": 0.475151361780465\n          },\n          {\n            "class_name": "\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e23\u0e32\u0e04\u0e32",\n            "confidence": 1\n          },\n          {\n            "class_name": "\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e04\u0e38\u0e13\u0e20\u0e32\u0e1e\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32",\n            "confidence": 0.6353219167629959\n          }\n        ]\n      }\n    ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);