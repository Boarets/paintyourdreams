"use strict";(self.webpackChunkpaint_your_dreams=self.webpackChunkpaint_your_dreams||[]).push([[1092],{70621:(M,h,t)=>{t.r(h),t.d(h,{default:()=>L});var e=t(67294),d=t(86896),a=t(64593),m=t(52861),g=t(64289),p=t(17034),E=t(185),c=t(53979),x=t(29728),v=t(49066),j=t(41580),P=t(11276),C=t(74571),f=t(16364),n=t(40619),i=t(82562),s=t(75515),o=t(23620),u=t(85018);const y=[{value:"text-davinci-003",label:"higher quality, longer output, better instruction following"},{value:"text-curie-001",label:"faster and lower cost, suited for Q&A, translation, service bot"}],B=()=>{const{formatMessage:U}=(0,d.Z)(),O=(0,g.lm)(),[Z,A]=(0,e.useState)(!1),D=(0,e.useRef)(""),I=(0,e.useRef)("text-davinci-003"),K=(0,e.useRef)(2048),W=m.default.create({baseURL:"",headers:{Authorization:`Bearer ${g.I8.getToken()}`,"Content-Type":"application/json"}}),[T,S]=(0,e.useState)({apiKey:"",modelName:"text-davinci-003",maxTokens:2048}),G=r=>{S(r),D.current=r.apiKey,I.current=r.modelName,K.current=r.maxTokens},b=r=>l=>{switch(console.log("key",l),S(r==="modelName"?{...T,[r]:l}:{...T,[r]:l.target.value}),r){case"apiKey":D.current=l.target.value;break;case"modelName":I.current=l;break;case"maxTokens":K.current=l.target.value;break;default:break}};(0,e.useEffect)(()=>{A(!0),(async()=>{try{const{data:l}=await W.get("/strapi-chatgpt/config");G(l)}catch(l){console.log(l),O({type:"warning",message:{id:"chatgpt-config-fetch-error",defaultMessage:"Error while fetching the chatGPT configurations"}})}})(),A(!1)},[]);const H=async()=>{if(!{apiKey:D.current,modelName:I.current,maxTokens:K.current}.apiKey){O({type:"warning",message:{id:"chatgpt-config-api-key-required",defaultMessage:"Please enter the api key"}});return}A(!0);try{const{data:l}=await W.post("/strapi-chatgpt/config/update",{...T});l&&l.value&&G(JSON.parse(l.value)),A(!1),O({type:"success",message:{id:"chatgpt-config-save-success",defaultMessage:"ChatGPT configurations saved successfully"}})}catch(l){A(!1),console.log(l),O({type:"warning",message:{id:"chatgpt-config-save-error",defaultMessage:"Error while saving the chatGPT configurations"}})}};return e.createElement(p.A,null,e.createElement(a.q,{title:"Strapi ChatGPT Configuration"}),e.createElement(E.o,{"aria-busy":!1},e.createElement(c.T,{title:"ChatGPT Configurations",subtitle:U({id:"chatgpt-config-headder",defaultMessage:"Configure the api key, model name and other parameters"}),primaryAction:e.createElement(x.z,{startIcon:e.createElement(u.Z,null),onClick:H,loading:Z},"Save")}),e.createElement(v.D,null,e.createElement(j.x,{shadow:"tableShadow",background:"neutral0",paddingTop:6,paddingLeft:7,paddingRight:7,paddingBottom:6,hasRadius:!0},e.createElement(P.r,{gap:6},e.createElement(C.P,{col:6},e.createElement(f.o,{type:"text",id:"apiKey",name:"apiKey",placeholder:"sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",label:"API Key",refs:D,value:T.apiKey,onChange:b("apiKey")})),e.createElement(C.P,{col:6},e.createElement(f.o,{type:"text",id:"maxTokens",name:"maxTokens",label:"Max Tokens",placeholder:"2048",refs:K,value:T.maxTokens,onChange:b("maxTokens")})),e.createElement(C.P,null,e.createElement(n.P,{name:"modelName",id:"modelName",label:"Model Name",placeholder:"Select a model",refs:I,value:T.modelName,onChange:b("modelName")},y.map(r=>e.createElement(i.W,{key:r.value,value:r.value},r.value," - ",r.label))))),e.createElement(j.x,{paddingTop:5},e.createElement(s.Z,null,"You can set additional parameters"," (",e.createElement("span",null,e.createElement(o.r,{href:"https://platform.openai.com/docs/api-reference/completions",target:"_blank"},"ChatGPT doc")),") ","with the API Integration, available from Plugin > ChatGPT menu."))))))},L=()=>e.createElement(B,null)},49066:(M,h,t)=>{t.d(h,{D:()=>g});var e=t(85893),d=t(67294),a=t(45697),m=t(41580);const g=({children:p})=>(0,e.jsx)(m.x,{paddingLeft:10,paddingRight:10,children:p});g.propTypes={children:a.node.isRequired}},53979:(M,h,t)=>{t.d(h,{A:()=>f,T:()=>P});var e=t(85893),d=t(67294),a=t(45697),m=t(88972);const g=n=>{const i=(0,d.useRef)(null),[s,o]=(0,d.useState)(!0),u=([y])=>{o(y.isIntersecting)};return(0,d.useEffect)(()=>{const y=i.current,R=new IntersectionObserver(u,n);return y&&R.observe(i.current),()=>{y&&R.disconnect()}},[i,n]),[i,s]};var p=t(79698);const E=(n,i)=>{const s=(0,p.W)(i);(0,d.useLayoutEffect)(()=>{const o=new ResizeObserver(s);return Array.isArray(n)?n.forEach(u=>{u.current&&o.observe(u.current)}):n.current&&o.observe(n.current),()=>{o.disconnect()}},[n,s])};var c=t(41580),x=t(11047),v=t(75515);const j=()=>{const n=(0,d.useRef)(null),[i,s]=(0,d.useState)(null),[o,u]=g({root:null,rootMargin:"0px",threshold:0});return E(o,()=>{o.current&&s(o.current.getBoundingClientRect())}),(0,d.useEffect)(()=>{n.current&&s(n.current.getBoundingClientRect())},[n]),{containerRef:o,isVisible:u,baseHeaderLayoutRef:n,headerSize:i}},P=n=>{const{containerRef:i,isVisible:s,baseHeaderLayoutRef:o,headerSize:u}=j();return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:u?.height},ref:i,children:s&&(0,e.jsx)(f,{ref:o,...n})}),!s&&(0,e.jsx)(f,{...n,sticky:!0,width:u?.width})]})};P.displayName="HeaderLayout";const C=(0,m.ZP)(c.x)`
  width: ${n=>n.width}px;
  z-index: ${({theme:n})=>n.zIndices[1]};
`,f=d.forwardRef(({navigationAction:n,primaryAction:i,secondaryAction:s,subtitle:o,title:u,sticky:y,width:R,...B},N)=>{const L=typeof o=="string";return y?(0,e.jsx)(C,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:R,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(x.k,{justifyContent:"space-between",children:[(0,e.jsxs)(x.k,{children:[n&&(0,e.jsx)(c.x,{paddingRight:3,children:n}),(0,e.jsxs)(c.x,{children:[(0,e.jsx)(v.Z,{variant:"beta",as:"h1",...B,children:u}),L?(0,e.jsx)(v.Z,{variant:"pi",textColor:"neutral600",children:o}):o]}),s?(0,e.jsx)(c.x,{paddingLeft:4,children:s}):null]}),(0,e.jsx)(x.k,{children:i?(0,e.jsx)(c.x,{paddingLeft:2,children:i}):void 0})]})}):(0,e.jsxs)(c.x,{ref:N,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:n?6:8,background:"neutral100","data-strapi-header":!0,children:[n?(0,e.jsx)(c.x,{paddingBottom:2,children:n}):null,(0,e.jsxs)(x.k,{justifyContent:"space-between",children:[(0,e.jsxs)(x.k,{minWidth:0,children:[(0,e.jsx)(v.Z,{as:"h1",variant:"alpha",...B,children:u}),s?(0,e.jsx)(c.x,{paddingLeft:4,children:s}):null]}),i]}),L?(0,e.jsx)(v.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:o}):o]})});f.displayName="BaseHeaderLayout",f.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},f.propTypes={navigationAction:a.node,primaryAction:a.node,secondaryAction:a.node,sticky:a.bool,subtitle:a.oneOfType([a.string,a.node]),title:a.string.isRequired,width:a.number},P.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},P.propTypes={navigationAction:a.node,primaryAction:a.node,secondaryAction:a.node,subtitle:a.oneOfType([a.string,a.node]),title:a.string.isRequired}},17034:(M,h,t)=>{t.d(h,{A:()=>c});var e=t(85893),d=t(67294),a=t(45697),m=t(88972),g=t(41580);const p=(0,m.ZP)(g.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:x})=>x?"auto 1fr":"1fr"};
`,E=(0,m.ZP)(g.x)`
  overflow-x: hidden;
`,c=({sideNav:x,children:v})=>(0,e.jsxs)(p,{hasSideNav:!!x,children:[x,(0,e.jsx)(E,{paddingBottom:10,children:v})]});c.defaultProps={sideNav:void 0},c.propTypes={children:a.node.isRequired,sideNav:a.node}},185:(M,h,t)=>{t.d(h,{o:()=>g});var e=t(85893),d=t(88972),a=t(41580);const m=(0,d.ZP)(a.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,g=({labelledBy:p="main-content-title",...E})=>(0,e.jsx)(m,{"aria-labelledby":p,as:"main",id:"main-content",tabIndex:-1,...E})}}]);
