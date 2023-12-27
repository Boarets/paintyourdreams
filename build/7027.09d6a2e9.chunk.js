"use strict";(self.webpackChunkpaint_your_dreams=self.webpackChunkpaint_your_dreams||[]).push([[7027],{27887:(U,f,e)=>{e.d(f,{r:()=>D});var o=e(67294),l=e(45697),u=e.n(l),h=e(99168),T=e(41580);function E(d,g,r){if(!d||!g)return{display:"none"};const{x:m,y:M}=r;return{transform:`translate(${m}px, ${M}px)`}}function D({renderItem:d}){const{itemType:g,isDragging:r,item:m,initialOffset:M,currentOffset:k,mouseOffset:N}=(0,h.useDragLayer)(P=>({item:P.getItem(),itemType:P.getItemType(),initialOffset:P.getInitialSourceClientOffset(),currentOffset:P.getSourceClientOffset(),isDragging:P.isDragging(),mouseOffset:P.getClientOffset()}));return r?o.createElement(T.x,{height:"100%",left:0,position:"fixed",pointerEvents:"none",top:0,zIndex:100,width:"100%"},o.createElement(T.x,{style:E(M,k,N)},d({type:g,item:m}))):null}D.propTypes={renderItem:u().func.isRequired}},99781:(U,f,e)=>{var o=e(67294);const l=(0,o.createContext)();var u=null},75642:(U,f,e)=>{e.d(f,{PL:()=>T,Y9:()=>Te.Y,zE:()=>X,Ky:()=>a,fi:()=>O,zH:()=>fe,r5:()=>Z});var o=e(67294),l=e(86706),u=e(21323);const T=()=>{const t=(0,l.v9)(u.Z),s=(0,o.useCallback)(n=>t?.components?.[n]??{},[t]);return{...t,getComponentLayout:s}};var E=e(52861),D=e(64289),d=e(50361),g=e.n(d),r=e(27361),m=e.n(r),M=e(36968),k=e.n(M),N=e(47815);const P=(t,s)=>s.find(n=>n.uid===t),J=(t,s)=>{const n=Y(t,s),i=V(n.contentType,s),v=q(n.contentType,n.components);return k()(n,["contentType","layouts","edit"],i),k()(n,["contentType","layouts","list"],v),Object.keys(n.components).forEach(y=>{const L=V(n.components[y],s);k()(n,["components",y,"layouts","edit"],L)}),n},Y=(t,s)=>{const n=(0,N.w8)(g()(t),s,"contentType"),{components:i,contentType:v}=n,y=L=>Object.keys(L.metadatas).reduce((W,I)=>{const B=m()(L,["attributes",I],{});let b=L.metadatas[I];if(B.type==="relation"){const me=P(B.targetModel,s),w=b.edit.mainField,_={name:w,schema:m()(me,["attributes",w])};b={list:{...b.list,mainField:_},edit:{...b.edit,mainField:_}}}return W[I]=b,W},{});return k()(n,["contentType","metadatas"],y(v)),Object.keys(i).forEach(L=>{const W=i[L],I=y(W);k()(n,["components",L,"metadatas"],I)}),n},V=(t,s)=>t.layouts.edit.reduce((n,i)=>{const v=i.map(y=>{const L=m()(t,["attributes",y.name],{}),W={...y,fieldSchema:L,metadatas:m()(t,["metadatas",y.name,"edit"],{})};if(L.type==="relation"){const B=P(L.targetModel,s).pluginOptions||{};k()(W,"targetModelPluginOptions",B),k()(W,"queryInfos",{shouldDisplayRelationLink:ae(t,y.name,s)})}return W});return n.push(v),n},[]),q=(t,s)=>t.layouts.list.reduce((i,v)=>{const y=m()(t,["attributes",v],{}),L=m()(t,["metadatas",v,"list"],{}),W=y.type;if(W==="relation")return i.push({key:`__${v}_key__`,name:v,fieldSchema:y,metadatas:L}),i;if(W==="component"){const I=s[y.component],B=I.settings.mainField,b=I.attributes[B];return i.push({key:`__${v}_key__`,name:v,fieldSchema:y,metadatas:{...L,mainField:{...b,name:B}}}),i}return i.push({key:`__${v}_key__`,name:v,fieldSchema:y,metadatas:L}),i},[]),ae=(t,s,n)=>{const i=m()(t,["attributes",s,"targetModel"],"");return ee(n).includes(i)},ee=t=>t.filter(s=>s.isDisplayed).map(({uid:s})=>s),z=J;var te=e(18172);const K={error:null,isLoading:!0,layout:{},layouts:{}},Q=(t,s)=>(0,te.ZP)(t,n=>{switch(s.type){case"GET_DATA":{n.isLoading=!0,n.error=null,n.layout={};break}case"GET_DATA_SUCCEEDED":{const i=s.data.contentType.uid;n.layout=s.data,n.layouts[i]=s.data,n.isLoading=!1;break}case"GET_DATA_ERROR":{n.isLoading=!1,n.error=s.error;break}case"SET_LAYOUT_FROM_STATE":{n.error=null,n.layout=t.layouts[s.uid];break}case"UPDATE_LAYOUT":{const i=t.layout;n.layout={...i,contentType:{uid:i.contentType.uid,...s.newLayout.contentType}},n.layouts[i.contentType.uid]={...i,contentType:{uid:i.contentType.uid,...s.newLayout.contentType}};break}default:return n}});var j=e(84668);const X=t=>{const[{error:s,isLoading:n,layout:i,layouts:v},y]=(0,o.useReducer)(Q,K),L=(0,o.useMemo)(j.Vo,[]),{schemas:W}=(0,l.v9)(w=>L(w),l.wU),I=(0,o.useRef)(!0),{get:B}=(0,D.kY)(),b=(0,o.useCallback)(async(w,_)=>{if(v[w]){y({type:"SET_LAYOUT_FROM_STATE",uid:w});return}y({type:"GET_DATA"});try{const oe=(0,N.IF)(`content-types/${w}/configuration`),{data:{data:Ee}}=await B(oe,{cancelToken:_.token});y({type:"GET_DATA_SUCCEEDED",data:z(Ee,W)})}catch(oe){if(E.default.isCancel(oe))return;I.current&&console.error(oe),I.current&&y({type:"GET_DATA_ERROR",error:oe})}},[v,W,B]);(0,o.useEffect)(()=>()=>{I.current=!1},[]),(0,o.useEffect)(()=>{const _=E.default.CancelToken.source();return b(t,_),()=>{_.cancel("Operation canceled by the user.")}},[t,b]);const me=(0,o.useCallback)(w=>{y({type:"UPDATE_LAYOUT",newLayout:z(w,W)})},[W]);return{error:s,isLoading:n,layout:i,updateLayout:me}},H=t=>t["content-manager_app"].collectionTypeLinks;var $=e(80129),le=e(13218),ye=e.n(le);const ie=(t,s)=>Object.keys(t).reduce((n,i)=>{const v=t[i],y=m()(s,[i],v);return ye()(v)?{...n,[i]:ie(v,y)}:(n[i]=y,n)},{}),pe=(t,s,n)=>{const i=t.find(({to:b})=>b.includes(s));if(!i)return"/";const{to:v,search:y}=i,L=(0,$.parse)(y),W=(0,$.parse)(n.substring(1)),I=ie(L,W);return`${v}?${(0,$.stringify)(I,{encode:!1})}`},a=t=>{const[{rawQuery:s}]=(0,D.Kx)(),n=(0,l.v9)(H);return pe(n,t,s)};var c=e(16550);const O=()=>{const{search:t}=(0,c.TH)(),s=t?(0,$.parse)(t.substring(1)):{};return s.plugins?(0,$.stringify)({plugins:s.plugins},{encode:!1}):""};var S=e(80015);const x=(t,s,n)=>({type:S.m,permissions:t,__meta__:{plugins:s,containerName:n}}),R=()=>({type:S.Q}),A=t=>t["content-manager_rbacManager"].permissions,C=t=>t.rbacProvider.collectionTypesRelatedPermissions,Z=(t,s,n="listView")=>{const i=(0,l.v9)(C),v=(0,l.v9)(A),y=(0,l.I0)(),L=i[s];return(0,o.useEffect)(()=>L?(y(x(L,t?t.plugins:null,n)),()=>{y(R())}):()=>{},[L,y,t,n]),v};var ue=e(99781);const G=()=>useContext(WysiwygContext),se=null,fe=t=>{const s=(0,o.useRef)();return(0,o.useEffect)(()=>{s.current=t},[t]),s.current};var Te=e(15699),De=e(40703)},15699:(U,f,e)=>{e.d(f,{Y:()=>T});var o=e(67294),l=e(99168),u=e.n(l),h=e(40703);const T=(E,{type:D="STRAPI_DND",index:d,item:g={},onStart:r,onEnd:m,onGrabItem:M,onDropItem:k,onCancel:N,onMoveItem:P,dropSensitivity:J="regular"})=>{const Y=(0,o.useRef)(null),[{handlerId:V},q]=(0,l.useDrop)({accept:D,collect(K){return{handlerId:K.getHandlerId()}},hover(K,re){if(!Y.current)return;const Q=K.index,j=d;if(Q!==j){if(J==="regular"){const ne=Y.current.getBoundingClientRect(),X=(ne.bottom-ne.top)/2,H=re.getClientOffset().y-ne.top;if(Q<j&&H<X||Q>j&&H>X)return}P(j,Q),K.index=j}}}),[{isDragging:ae},ee,z]=(0,l.useDrag)({type:D,item(){r&&r();const{width:K}=Y.current?.getBoundingClientRect()??{};return{index:d,width:K,...g}},end(){m&&m()},canDrag:E,isDragging:g.id?K=>g.id===K.getItem().id:void 0,collect:K=>({isDragging:K.isDragging()})}),te=(0,h.A)(E,d,{onGrabItem:M,onDropItem:k,onCancel:N,onMoveItem:P});return[{handlerId:V,isDragging:ae,handleKeyDown:te},Y,q,ee,z]}},40703:(U,f,e)=>{e.d(f,{A:()=>l});var o=e(67294);const l=(u,h,{onCancel:T,onDropItem:E,onGrabItem:D,onMoveItem:d})=>{const[g,r]=(0,o.useState)(!1),m=P=>{g&&(P==="UP"?d(h-1,h):P==="DOWN"&&d(h+1,h))},M=()=>{g?(E&&E(h),r(!1)):(D&&D(h),r(!0))},k=()=>{g&&(r(!1),T&&T(h))};return P=>{if(u&&!(P.key==="Tab"&&!g))switch(P.preventDefault(),P.key){case" ":case"Enter":M();break;case"Escape":k();break;case"ArrowDown":case"ArrowRight":m("DOWN");break;case"ArrowUp":case"ArrowLeft":m("UP");break;default:}}}},84668:(U,f,e)=>{e.d(f,{Jg:()=>d,KQ:()=>E,Vo:()=>D,Yg:()=>u});var o=e(20573),l=e(14506);const u=()=>r=>r["content-manager_app"]||l.E,h=()=>createSelector(u(),r=>r),T=()=>createSelector(u(),r=>r.models),E=()=>(0,o.P1)(u(),r=>({collectionTypeLinks:r.collectionTypeLinks,singleTypeLinks:r.singleTypeLinks})),D=()=>(0,o.P1)(u(),({components:r,models:m})=>({schemas:[...r,...m]})),d=(0,o.P1)(u(),r=>r.fieldSizes);var g=null},21323:(U,f,e)=>{e.d(f,{Z:()=>l});const l=u=>u["content-manager_editViewLayoutManager"].currentLayout},56723:(U,f,e)=>{e.d(f,{Z:()=>o});const o={COMPONENT:"component",EDIT_FIELD:"editField",FIELD:"field",DYNAMIC_ZONE:"dynamicZone",RELATION:"relation"}},69881:(U,f,e)=>{e.d(f,{Z:()=>l});const l=u=>`content-manager.${u}`},47815:(U,f,e)=>{e.d(f,{_Q:()=>H.Z,W3:()=>h,ko:()=>d,FE:()=>r,Di:()=>N,du:()=>V,TA:()=>ee,Ts:()=>re,Uo:()=>j,IF:()=>X,OB:()=>de.Z,w8:()=>ie,kc:()=>ge});var o=e(50361),l=e.n(o);const h=(a,c,p)=>{if(Array.isArray(a)&&c>=0&&p>=0&&c<=a.length-1&&p<=a.length-1){const O=l()(a),S=O.splice(c,1);return O.splice(p,0,S[0]),O}return a};var T=e(7334),E=e.n(T);const d=a=>{const c=a.type;return c==="relation"?!E()(a.relationType).includes("morph"):!["json","dynamiczone","richtext","password"].includes(c)&&!!c},g=(a,c)=>{typeof a=="function"?a(c):a!=null&&(a.current=c)},r=(...a)=>c=>a.forEach(p=>g(p,c));var m=e(27361),M=e.n(m);const k=(a,c)=>Object.keys(a).reduce((p,O)=>{const S=M()(a,[O],{}),{default:x,component:R,type:A,required:C,min:F,repeatable:Z}=S;if(x!==void 0&&(p[O]=x),A==="component"){const ue=c?.[R]?.attributes??{},G=k(ue,c);if(C===!0&&(p[O]=Z===!0?[]:G),F&&Z===!0&&C){p[O]=[];for(let se=0;se<F;se+=1)p[O].push(G)}}return A==="dynamiczone"&&C===!0&&(p[O]=[]),p},{}),N=k;var P=e(57557),J=e.n(P);const V=({layouts:a,metadatas:c,...p})=>{const O=a.list.map(R=>R.name?R.name:R),S=Object.keys(c).reduce((R,A)=>{const C=M()(c,[A],{});let F=C.edit;return F.mainField&&(F={...F,mainField:C.edit.mainField.name}),{...R,[A]:{edit:F,list:J()(C.list,["mainField"])}}},{}),x=a.edit.map(R=>R.map(({name:A,size:C})=>({name:A,size:C})));return{...p,layouts:{edit:x,list:O},metadatas:S}},q=(a,c)=>a.map(p=>({...p,subject:c})),ee=a=>{const c={create:[{action:"plugin::content-manager.explorer.create",subject:null}],delete:[{action:"plugin::content-manager.explorer.delete",subject:null}],publish:[{action:"plugin::content-manager.explorer.publish",subject:null}],read:[{action:"plugin::content-manager.explorer.read",subject:null}],update:[{action:"plugin::content-manager.explorer.update",subject:null}]};return Object.keys(c).reduce((p,O)=>(p[O]=q(c[O],a),p),{})};var z=e(7654),te=e.n(z);const re=a=>a.split(".").filter(c=>te()(parseInt(c,10))),j=a=>{if(a.length===0)return-1;const c=Math.max.apply(Math,a.map(p=>p.__temp_key__??0));return Number.isNaN(c)?-1:c},X=a=>`/content-manager/${a}`;var de=e(69881),H=e(56723),$=e(36968),le=e.n($);const ie=(a,c,p)=>{const O=A=>c.find(C=>C.uid===A),S=Object.assign({},a),x=a[p].uid,R=O(x);return le()(S,[p],{...a[p],...R}),Object.keys(a.components).forEach(A=>{const C=O(A);le()(S,["components",A],{...a.components[A],...C})}),S};var ce=e(64289);const ge=(a,c,p)=>{const O=(S,x)=>Object.keys(S).reduce((R,A)=>{const C=(0,ce.UN)(x,A),F=M()(S,A),Z=(0,ce.k2)(x,[A,"component"]),ue=(0,ce.k2)(x,[A,"repeatable"]);return C==="dynamiczone"?(R[A]=F.map(G=>O(G,p[G.__component])),R):C==="component"?(ue?R[A]=F&&F.map(G=>O(G,p[Z])):R[A]=F&&O(F,p[Z]),R):(C!=="password"&&(R[A]=F),R)},{});return O(a,c)}},75194:(U,f,e)=>{e.d(f,{K:()=>d});var o=e(67294),l=e(45697),u=e.n(l),h=e(5079),T=e(11047),E=e(75515),D=e(13037);function d({children:g,...r}){const{color:m}=r.data,{themeColorName:M}=(0,D.k)(m);return o.createElement(h.c.Option,{...r},o.createElement(T.k,{alignItems:"center",gap:2},o.createElement(T.k,{height:2,background:m,borderColor:M==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2}),o.createElement(E.Z,{textColor:"neutral800",ellipsis:!0},g)))}d.propTypes={children:u().node.isRequired,data:u().shape({color:u().string}).isRequired}},54878:(U,f,e)=>{e.d(f,{R:()=>d});var o=e(67294),l=e(45697),u=e.n(l),h=e(5079),T=e(11047),E=e(75515),D=e(13037);function d({children:g,...r}){const{color:m}=r.data,{themeColorName:M}=m?(0,D.k)(m):{};return o.createElement(h.c.SingleValue,{...r},o.createElement(T.k,{alignItems:"center",gap:2},o.createElement(T.k,{height:2,background:m,borderColor:M==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2}),o.createElement(E.Z,{textColor:"neutral800",ellipsis:!0},g)))}d.defaultProps={children:null},d.propTypes={children:u().node,data:u().shape({color:u().string}).isRequired}},53616:(U,f,e)=>{e.d(f,{$k:()=>D,FT:()=>g,Nj:()=>E,Ot:()=>T,QM:()=>u,lv:()=>d,sN:()=>l,uL:()=>r,x4:()=>h});var o=e(42675);const l="settings_review-workflows",u="Settings/Review_Workflows/SET_WORKFLOWS",h="Settings/Review_Workflows/WORKFLOW_DELETE_STAGE",T="Settings/Review_Workflows/WORKFLOW_ADD_STAGE",E="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE",D="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION",d={primary600:"Blue",primary200:"Lilac",alternative600:"Violet",alternative200:"Lavender",success600:"Green",success200:"Pale Green",danger500:"Cherry",danger200:"Pink",warning600:"Orange",warning200:"Yellow",secondary600:"Teal",secondary200:"Baby Blue",neutral400:"Gray",neutral0:"White"},g=o.W.colors.primary600,r={STAGE:"stage"}},53752:(U,f,e)=>{e.d(f,{n:()=>T});var o=e(88767),l=e(64289);const u="review-workflows",h="/admin/review-workflows";function T(E){const{get:D}=(0,l.kY)(),d=(0,o.useQueryClient)(),g=[u,E??"default"];async function r({params:k={populate:"stages"}}){try{const{data:{data:N}}=await D(`${h}/workflows/${E??""}`,{params:k});return N}catch{return null}}async function m(){await d.refetchQueries(g)}return{workflows:(0,o.useQuery)(g,r),refetchWorkflow:m}}},13037:(U,f,e)=>{e.d(f,{k:()=>u,s:()=>h});var o=e(42675),l=e(53616);function u(T){if(!T)return null;const D=Object.entries(o.W.colors).filter(([,d])=>d.toUpperCase()===T.toUpperCase()).reduce((d,[g])=>(l.lv?.[g]&&(d=g),d),null);return D?{themeColorName:D,name:l.lv[D]}:null}function h(){return Object.entries(l.lv).map(([T,E])=>({hex:o.W.colors[T].toUpperCase(),name:E}))}}}]);
