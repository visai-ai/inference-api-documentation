"use strict";(self.webpackChunkvisai_inference_api_documentation=self.webpackChunkvisai_inference_api_documentation||[]).push([[5625],{8515:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>y,default:()=>h,frontMatter:()=>d,metadata:()=>u,toc:()=>g});var s=a(87462),i=(a(67294),a(3905)),r=a(26389),n=a(94891),p=a(75190),o=a(47507),l=a(24310),m=a(63303),c=(a(75035),a(85162));const d={id:"ocr-passport",title:"OCR Passport - AI Marketplace",description:"",sidebar_label:"OCR Passport",hide_title:!0,hide_table_of_contents:!0,api:{tags:["ai-marketplace"],description:"",operationId:"ocrPassportInfer",parameters:[{name:"X-API-Key",in:"header",description:"Your API key",required:!0,schema:{type:"string"}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{status:{type:"string",description:"Status of request"},data:{type:"object",properties:{confidence:{type:"number",description:"Confidence value"},fields:{type:"object",properties:{name:{type:"string"},surname:{type:"string"},date_of_birth:{type:"string"},gender:{type:"string"},country_code:{type:"string"},country_name:{type:"string"},identification_number:{type:"string"},passport_number:{type:"string"},passport_type:{type:"string"},date_of_expiry:{type:"string"}}}}}}},title:"ApiResponse"}}}}},requestBody:{content:{"multipart/form-data":{schema:{type:"object",properties:{files:{type:"string",format:"binary",description:"Passport image file ('.jpg', '.jpeg', and '.png')"}},required:["files"]}}}},method:"post",path:"/predict",servers:[{url:"https://ocrpassport.infer.visai.ai/predict",description:"Default server"}],securitySchemes:{"X-API-Key":{type:"apiKey",in:"header",name:"X-API-Key"}},postman:{name:"OCR Passport Inference",method:"POST",body:{mode:"formdata",formdata:[{key:"files",value:"file",type:"file"}]}}},sidebar_class_name:"post api-method",custom_edit_url:null},y=void 0,u={unversionedId:"ai-marketplace/ocr-passport",id:"ai-marketplace/ocr-passport",title:"OCR Passport - AI Marketplace",description:"",source:"@site/docs/ai-marketplace/ocr-passport.api.mdx",sourceDirName:"ai-marketplace",slug:"/ai-marketplace/ocr-passport",permalink:"/api/docs/ai-marketplace/ocr-passport",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ocr-passport",title:"OCR Passport - AI Marketplace",description:"",sidebar_label:"OCR Passport",hide_title:!0,hide_table_of_contents:!0,api:{tags:["ai-marketplace"],description:"",operationId:"ocrPassportInfer",parameters:[{name:"X-API-Key",in:"header",description:"Your API key",required:!0,schema:{type:"string"}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{status:{type:"string",description:"Status of request"},data:{type:"object",properties:{confidence:{type:"number",description:"Confidence value"},fields:{type:"object",properties:{name:{type:"string"},surname:{type:"string"},date_of_birth:{type:"string"},gender:{type:"string"},country_code:{type:"string"},country_name:{type:"string"},identification_number:{type:"string"},passport_number:{type:"string"},passport_type:{type:"string"},date_of_expiry:{type:"string"}}}}}}},title:"ApiResponse"}}}}},requestBody:{content:{"multipart/form-data":{schema:{type:"object",properties:{files:{type:"string",format:"binary",description:"Passport image file ('.jpg', '.jpeg', and '.png')"}},required:["files"]}}}},method:"post",path:"/predict",servers:[{url:"https://ocrpassport.infer.visai.ai/predict",description:"Default server"}],securitySchemes:{"X-API-Key":{type:"apiKey",in:"header",name:"X-API-Key"}},postman:{name:"OCR Passport Inference",method:"POST",body:{mode:"formdata",formdata:[{key:"files",value:"file",type:"file"}]}}},sidebar_class_name:"post api-method",custom_edit_url:null},sidebar:"aiMarketplaceSidebar",previous:{title:"OCR Thai ID Card",permalink:"/api/docs/ai-marketplace/ocr-thai-id-card"}},f={},g=[{value:"OCR Passport API",id:"ocr-passport-api",level:2}],k={toc:g};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"ocr-passport-api"},"OCR Passport API"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Header")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(p.Z,{className:"paramsItem",param:{name:"X-API-Key",in:"header",description:"Your API key",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)(n.Z,{mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"multipart/form-data",value:"multipart/form-data-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"files"),(0,i.kt)("span",{style:{opacity:"0.6"}}," File"),(0,i.kt)("span",{style:{color:"#FA383E",marginLeft:"0.25rem",fontWeight:"700"}},"required"))))))),(0,i.kt)("div",null,(0,i.kt)(r.Z,{mdxType:"ApiTabs"},(0,i.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(m.Z,{mdxType:"SchemaTabs"},(0,i.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:"`success` | `failed`",schema:{description:"Status of request",title:"image_size"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"data"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"confidence",required:!1,schemaName:"float",schema:{description:"The level of confidence",type:"float",minLength:1},mdxType:"SchemaItem"}),(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"fields"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"surname",required:!1,schemaName:"string",qualifierMessage:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"date_of_birth",required:!1,schemaName:"string",qualifierMessage:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"gender",required:!1,schemaName:"string",qualifierMessage:"`M` for male | `F` for female",mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"country_code",required:!1,schemaName:"string",qualifierMessage:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"country_name",required:!1,schemaName:"string",qualifierMessage:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"passport_number",required:!1,schemaName:"string",qualifierMessage:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"passport_type",required:!1,schemaName:"string",qualifierMessage:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"date_of_expiry",required:!1,schemaName:"string",qualifierMessage:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"identification_number",required:!1,schemaName:"string",qualifierMessage:"(Only Thai passport)",mdxType:"SchemaItem"})))))))),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'[\n  {\n      "status": "success",\n      "data": {\n          "fields": {\n              "name": "VISAI",\n              "surname": "AI",\n              "date_of_birth": "01 JUN 1997",\n              "gender": "M",\n              "country_code": "THA",\n              "country_name": "Thailand",\n              "identification_number": "1234567890123",\n              "passport_number": "R123456",\n              "passport_type": "P",\n              "date_of_expiry": "31 DEC 2025"\n          },\n          "confidence": 0.9566428661346436\n      }\n  }\n]',language:"json",mdxType:"ResponseSamples"}))))))))))}h.isMDXComponent=!0}}]);