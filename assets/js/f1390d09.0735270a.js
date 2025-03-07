"use strict";(self.webpackChunkvisai_inference_api_documentation=self.webpackChunkvisai_inference_api_documentation||[]).push([[4549],{68560:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>y,default:()=>g,frontMatter:()=>d,metadata:()=>u,toc:()=>k});var i=a(87462),s=(a(67294),a(3905)),n=a(26389),r=a(94891),l=a(75190),p=a(47507),o=a(24310),c=a(63303),m=(a(75035),a(85162));const d={id:"ocr-license-plate",title:"OCR License Plate - AI Marketplace",description:"",sidebar_label:"OCR License Plate",hide_title:!0,hide_table_of_contents:!0,api:{tags:["ai-marketplace"],description:"",operationId:"ocrLicensePlateInfer",parameters:[{type:"apiKey",name:"X-API-Key",in:"header",description:"Your API key",required:!0,schema:{type:"string"}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{filename:{type:"string",description:"Name of the file"},status:{type:"string",description:"Status of request"},result:{type:"object",properties:{coord:{type:"array",description:"The bounding box of the license plate in the original image.",items:{type:"string"}},plate_id:{type:"object",properties:{transcription:{type:"string"},confidence:{type:"numbr"}}},province:{type:"object",properties:{transcription:{type:"string"},confidence:{type:"numbr"}}}}}}},title:"ApiResponse"}}}}},requestBody:{content:{"multipart/form-data":{schema:{type:"object",properties:{files:{type:"string",format:"binary",description:"Licence plate image file ('.jpg', '.jpeg', and '.png')"}},required:["files"]}}}},method:"post",path:"/predict",servers:[{url:"https://ocrlicenseplate.infer.visai.ai/predict",description:"Default server"}],securitySchemes:{"X-API-Key":{type:"apiKey",in:"header",name:"X-API-Key"}},fullURL:"https://ocrlicenseplate.infer.visai.ai/predict",postman:{name:"OCR License Plate Inference",method:"POST",body:{mode:"formdata",formdata:[{key:"files",value:"file",type:"file"}]}}},sidebar_class_name:"post api-method",custom_edit_url:null},y=void 0,u={unversionedId:"ai-marketplace/ocr-license-plate",id:"ai-marketplace/ocr-license-plate",title:"OCR License Plate - AI Marketplace",description:"",source:"@site/docs/ai-marketplace/ocr-license-plate.api.mdx",sourceDirName:"ai-marketplace",slug:"/ai-marketplace/ocr-license-plate",permalink:"/inference-api-documentation/docs/ai-marketplace/ocr-license-plate",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ocr-license-plate",title:"OCR License Plate - AI Marketplace",description:"",sidebar_label:"OCR License Plate",hide_title:!0,hide_table_of_contents:!0,api:{tags:["ai-marketplace"],description:"",operationId:"ocrLicensePlateInfer",parameters:[{type:"apiKey",name:"X-API-Key",in:"header",description:"Your API key",required:!0,schema:{type:"string"}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{filename:{type:"string",description:"Name of the file"},status:{type:"string",description:"Status of request"},result:{type:"object",properties:{coord:{type:"array",description:"The bounding box of the license plate in the original image.",items:{type:"string"}},plate_id:{type:"object",properties:{transcription:{type:"string"},confidence:{type:"numbr"}}},province:{type:"object",properties:{transcription:{type:"string"},confidence:{type:"numbr"}}}}}}},title:"ApiResponse"}}}}},requestBody:{content:{"multipart/form-data":{schema:{type:"object",properties:{files:{type:"string",format:"binary",description:"Licence plate image file ('.jpg', '.jpeg', and '.png')"}},required:["files"]}}}},method:"post",path:"/predict",servers:[{url:"https://ocrlicenseplate.infer.visai.ai/predict",description:"Default server"}],securitySchemes:{"X-API-Key":{type:"apiKey",in:"header",name:"X-API-Key"}},fullURL:"https://ocrlicenseplate.infer.visai.ai/predict",postman:{name:"OCR License Plate Inference",method:"POST",body:{mode:"formdata",formdata:[{key:"files",value:"file",type:"file"}]}}},sidebar_class_name:"post api-method",custom_edit_url:null},sidebar:"aiMarketplaceSidebar",previous:{title:"OCR Receipt",permalink:"/inference-api-documentation/docs/ai-marketplace/ocr-receipt"}},f={},k=[{value:"OCR License Plate API",id:"ocr-license-plate-api",level:2}],h={toc:k};function g(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"ocr-license-plate-api"},"OCR License Plate API"),(0,s.kt)("div",{className:"custom-url-container"},(0,s.kt)("span",{className:"custom-method"},"POST"),(0,s.kt)("span",{className:"custom-url"},"https://ocrlicenseplate.infer.visai.ai/predict")),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Header")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(l.Z,{className:"paramsItem",param:{name:"X-API-Key",in:"header",description:"Your API key",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)(r.Z,{mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"multipart/form-data",value:"multipart/form-data-schema",mdxType:"TabItem"},(0,s.kt)("p",{style:{marginLeft:"1rem",marginBottom:"0px",fontWeight:500,fontSize:"12px"}},"form-data body"),(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"files"),(0,s.kt)("span",{style:{opacity:"0.6"}}," File"),(0,s.kt)("span",{style:{color:"#FA383E",marginLeft:"0.25rem",fontWeight:"700"}},"required")),(0,s.kt)("p",null,"Licence plate image files in a form of multi-part form data using the key name ",(0,s.kt)("b",null,"files"),"."))))))),(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"filename",required:!1,schemaName:"string",schema:{description:"Name of the file",title:"filename"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:"`success` | `failed`",schema:{description:"Status of request",title:"image_size"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"result"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"plate_id"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"transcription",required:!1,schemaName:"string",qualifierMessage:"The plate number of the license plate",mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"confidence",required:!1,schemaName:"number",qualifierMessage:"The model's confidence in `plate_id` prediction, expressed as a value between 0 and 1.",mdxType:"SchemaItem"})))),(0,s.kt)(o.Z,{collapsible:!1,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"province"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"transcription",required:!1,schemaName:"string",qualifierMessage:"The province of the license plate (If there is no province, this will be an empty string)",mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"confidence",required:!1,schemaName:"number",qualifierMessage:"The model's confidence in `province` prediction, expressed as a value between 0 and 1.",mdxType:"SchemaItem"})))),(0,s.kt)(o.Z,{collapsible:!1,name:"coord",required:!1,schemaName:"Array [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]",qualifierMessage:void 0,schema:{type:"array",description:"The bounding box of the license plate in the original image."},mdxType:"SchemaItem"})))))),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'[\n    {\n        "filename": "filename.jpg",\n        "status": "success",\n        "result": [\n            {\n                "coord": [\n                    [\n                        79,\n                        77\n                    ],\n                    [\n                        172,\n                        83\n                    ],\n                    [\n                        173,\n                        127\n                    ],\n                    [\n                        82,\n                        120\n                    ]\n                ],\n                "plate_id": {\n                    "transcription": "\u0e01\u0e025555",\n                    "confidence": 0.9968664050102234\n                },\n                "province": {\n                    "transcription": "\u0e01\u0e23\u0e38\u0e07\u0e40\u0e17\u0e1e\u0e21\u0e2b\u0e32\u0e19\u0e04\u0e23",\n                    "confidence": 0.9998765587806702\n                }\n            }\n        ]\n    }\n]',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);