"use strict";(self.webpackChunkpaint_your_dreams=self.webpackChunkpaint_your_dreams||[]).push([[5199],{67875:(D,n,e)=>{e.d(n,{Z:()=>a});const a=()=>null},94699:(D,n,e)=>{e.d(n,{Z:()=>r});var t=e(67294),a=e(45697),s=e.n(a),l=e(86896),g=e(41580),d=e(29728),o=e(89597),c=e(64289);const u=({displayedFilters:i})=>{const[A,C]=(0,t.useState)(!1),{formatMessage:I}=(0,l.Z)(),h=(0,t.useRef)(),y=()=>{C(L=>!L)};return t.createElement(t.Fragment,null,t.createElement(g.x,{paddingTop:1,paddingBottom:1},t.createElement(d.z,{variant:"tertiary",ref:h,startIcon:t.createElement(o.Z,null),onClick:y,size:"S"},I({id:"app.utils.filters",defaultMessage:"Filters"})),A&&t.createElement(c.J5,{displayedFilters:i,isVisible:A,onToggle:y,source:h})),t.createElement(c.W$,{filtersSchema:i}))};u.propTypes={displayedFilters:s().arrayOf(s().shape({name:s().string.isRequired,metadatas:s().shape({label:s().string}),fieldSchema:s().shape({type:s().string})})).isRequired};const r=u},4214:(D,n,e)=>{e.d(n,{Z:()=>c});var t=e(67294),a=e(86896),s=e(45697),l=e.n(s),g=e(29728),d=e(23293);const o=({onClick:u})=>{const{formatMessage:r}=(0,a.Z)();return t.createElement(g.z,{onClick:u,startIcon:t.createElement(d.Z,null),size:"S"},r({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}))};o.propTypes={onClick:l().func.isRequired};const c=o},57338:(D,n,e)=>{e.d(n,{Z:()=>a});const a={firstname:"",lastname:"",email:"",roles:[]}},55867:(D,n,e)=>{e.d(n,{Z:()=>a});const a=[]},37735:(D,n,e)=>{e.r(n),e.d(n,{default:()=>et});var t=e(67294),a=e(64289),s=e(87751),l=e(15861),g=e(4942),d=e(70885),o=e(64687),c=e.n(o),u=e(14087),r=e(185),i=e(53979),A=e(36989),C=e(49066),I=e(16550),h=e(86896),y=e(88767),L=e(45697),p=e.n(L),se=e(15234),J=e(79031),ne=e(37909),pe=e(92155),S=e(75515),H=e(11047),de=e(12028),j=e(41580),fe=e(4585),Me=e(20022),R=e(19631);const ve=({canDelete:m,headers:M,entriesToDelete:v,onClickDelete:P,onSelectRow:b,withMainAction:Y,withBulkActions:$,rows:oe})=>{const{push:N,location:{pathname:Q}}=(0,I.k6)(),{formatMessage:W}=(0,h.Z)();return t.createElement(se.p,null,oe.map(E=>{const V=v.findIndex(K=>K===E.id)!==-1;return t.createElement(J.Tr,{key:E.id,...(0,a.X7)({fn:()=>N(`${Q}/${E.id}`),condition:$})},Y&&t.createElement(ne.Td,{...a.UW},t.createElement(pe.C,{"aria-label":W({id:"app.component.table.select.one-entry",defaultMessage:"Select {target}"},{target:(0,R.Pp)(E.firstname,E.lastname)}),checked:V,onChange:()=>{b({name:E.id,value:!V})}})),M.map(({key:K,cellFormatter:w,name:Z,...k})=>t.createElement(ne.Td,{key:K},typeof w=="function"?w(E,{key:K,name:Z,formatMessage:W,...k}):t.createElement(S.Z,{textColor:"neutral800"},E[Z]||"-"))),$&&t.createElement(ne.Td,null,t.createElement(H.k,{justifyContent:"end"},t.createElement(de.h,{onClick:()=>N(`${Q}/${E.id}`),label:W({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:(0,R.Pp)(E.firstname,E.lastname)}),noBorder:!0,icon:t.createElement(fe.Z,null)}),m&&t.createElement(j.x,{paddingLeft:1,...a.UW},t.createElement(de.h,{onClick:()=>P(E.id),label:W({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:(0,R.Pp)(E.firstname,E.lastname)}),noBorder:!0,icon:t.createElement(Me.Z,null)})))))}))};ve.defaultProps={canDelete:!1,entriesToDelete:[],onClickDelete(){},onSelectRow(){},rows:[],withBulkActions:!1,withMainAction:!1},ve.propTypes={canDelete:p().bool,entriesToDelete:p().array,headers:p().array.isRequired,onClickDelete:p().func,onSelectRow:p().func,rows:p().array,withBulkActions:p().bool,withMainAction:p().bool};const Be=ve;var Ue=e(94699),ce=e(87462),Pe=e(29728),Ie=e(42866),Se=e(24969),Te=e(2407),We=e(59946),Ae=e(11276),_e=e(74571),Ke=e(36856),Ze=e(41054),xe=e(81288);const Fe=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0}]];var re=e(87561);const je=re.Ry().shape({firstname:re.Z_().trim().required(a.I0.required),lastname:re.Z_(),email:re.Z_().email(a.I0.email).required(a.I0.required),roles:re.IX().min(1,a.I0.required).required(a.I0.required)}),be={create:{buttonSubmitLabel:{id:"app.containers.Users.ModalForm.footer.button-success",defaultMessage:"Invite user"},isDisabled:!1,next:"magic-link"},"magic-link":{buttonSubmitLabel:{id:"global.finish",defaultMessage:"Finish"},isDisabled:!0,next:null}};var $e=function(){return window&&window.strapi&&window.strapi.isEE?e(97083).Z:e(57338).Z}(),Ne=function(){return window&&window.strapi&&window.strapi.isEE?e(810).Z:e(55867).Z}(),ze=function(){return window&&window.strapi&&window.strapi.isEE?e(12201).Z:e(31605).Z}(),Ce=function(M){var v=M.queryName,P=M.onToggle,b=(0,t.useState)("create"),Y=(0,d.Z)(b,2),$=Y[0],oe=Y[1],N=(0,t.useState)(!1),Q=(0,d.Z)(N,2),W=Q[0],E=Q[1],V=(0,t.useState)(null),K=(0,d.Z)(V,2),w=K[0],Z=K[1],k=(0,y.useQueryClient)(),ue=(0,h.Z)(),z=ue.formatMessage,Oe=(0,a.lm)(),q=(0,a.o1)(),Ee=q.lockApp,ee=q.unlockApp,he=(0,a.kY)(),le=he.post,te=(0,y.useMutation)(function(_){return le("/admin/users",_)},{onSuccess:function(x){return(0,l.Z)(c().mark(function X(){var F;return c().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return F=x.data,Z(F.data.registrationToken),f.next=4,k.refetchQueries(v);case 4:return f.next=6,k.refetchQueries(["ee","license-limit-info"]);case 6:ge(),E(!1);case 8:case"end":return f.stop()}},X)}))()},onError:function(x){throw E(!1),Oe({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),x},onSettled:function(){ee()}}),B=z({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}),ye=function(){var _=(0,l.Z)(c().mark(function x(X,F){var G,f;return c().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return G=F.setErrors,Ee(),E(!0),T.prev=3,T.next=6,te.mutateAsync(X);case 6:T.next=12;break;case 8:T.prev=8,T.t0=T.catch(3),ee(),(T.t0===null||T.t0===void 0||(f=T.t0.response)===null||f===void 0||(f=f.data)===null||f===void 0?void 0:f.error.message)==="Email already taken"&&G({email:T.t0.response.data.error.message});case 12:case"end":return T.stop()}},x,null,[[3,8]])}));return function(X,F){return _.apply(this,arguments)}}(),ge=function(){U?oe(U):P()},ae=be[$],ie=ae.buttonSubmitLabel,O=ae.isDisabled,U=ae.next,Re=$==="create"?t.createElement(Pe.z,{type:"submit",loading:W},z(ie)):t.createElement(Pe.z,{type:"button",loading:W,onClick:P},z(ie));return t.createElement(Ie.P,{onClose:P,labelledBy:"title"},t.createElement(Se.x,null,t.createElement(Te.O,{label:B},t.createElement(Te.$,null,B))),t.createElement(Ze.J9,{initialValues:$e,onSubmit:ye,validationSchema:je,validateOnChange:!1},function(_){var x=_.errors,X=_.handleChange,F=_.values;return t.createElement(a.l0,null,t.createElement(We.f,null,t.createElement(H.k,{direction:"column",alignItems:"stretch",gap:6},$!=="create"&&t.createElement(ze,{registrationToken:w}),t.createElement(j.x,null,t.createElement(S.Z,{variant:"beta",as:"h2"},z({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"User details"})),t.createElement(j.x,{paddingTop:4},t.createElement(H.k,{direction:"column",alignItems:"stretch",gap:1},t.createElement(Ae.r,{gap:5},Fe.map(function(G){return G.map(function(f){return t.createElement(_e.P,(0,ce.Z)({key:f.name},f.size),t.createElement(a.jm,(0,ce.Z)({},f,{disabled:O,error:x[f.name],onChange:X,value:F[f.name]})))})}))))),t.createElement(j.x,null,t.createElement(S.Z,{variant:"beta",as:"h2"},z({id:"global.roles",defaultMessage:"User's role"})),t.createElement(j.x,{paddingTop:4},t.createElement(Ae.r,{gap:5},t.createElement(_e.P,{col:6,xs:12},t.createElement(xe.Z,{disabled:O,error:x.roles,onChange:X,value:F.roles})),Ne.map(function(G){return G.map(function(f){return t.createElement(_e.P,(0,ce.Z)({key:f.name},f.size),t.createElement(a.jm,(0,ce.Z)({},f,{disabled:O,onChange:X,value:F[f.name]})))})})))))),t.createElement(Ke.m,{startActions:t.createElement(Pe.z,{variant:"tertiary",onClick:P,type:"button"},z({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:Re}))}))};Ce.propTypes={onToggle:p().func.isRequired,queryName:p().array.isRequired};const Xe=Ce,De=({pagination:m})=>t.createElement(j.x,{paddingTop:4},t.createElement(H.k,{alignItems:"flex-end",justifyContent:"space-between"},t.createElement(a.v4,null),t.createElement(a.tU,{pagination:m})));De.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},De.propTypes={pagination:p().shape({page:p().number,pageCount:p().number,pageSize:p().number,total:p().number})};const He=De,Qe=async(m,M)=>{const{get:v}=(0,a.tg)(),{data:{data:P}}=await v(`/admin/users${m}`);return M(),P},Ve=async m=>{const{post:M}=(0,a.tg)();await M("/admin/users/batch-delete",{ids:m})},Ge=[{name:"firstname",metadatas:{label:"Firstname"},fieldSchema:{type:"string"}},{name:"lastname",metadatas:{label:"Lastname"},fieldSchema:{type:"string"}},{name:"email",metadatas:{label:"Email"},fieldSchema:{type:"email"}},{name:"username",metadatas:{label:"Username"},fieldSchema:{type:"string"}},{name:"isActive",metadatas:{label:"Active user"},fieldSchema:{type:"boolean"}}],Je=[{name:"firstname",key:"firstname",metadatas:{label:{id:"Settings.permissions.users.firstname",defaultMessage:"Firstname"},sortable:!0}},{name:"lastname",key:"lastname",metadatas:{label:{id:"Settings.permissions.users.lastname",defaultMessage:"Lastname"},sortable:!0}},{key:"email",name:"email",metadatas:{label:{id:"Settings.permissions.users.email",defaultMessage:"Email"},sortable:!0}},{key:"roles",name:"roles",metadatas:{label:{id:"Settings.permissions.users.roles",defaultMessage:"Roles"},sortable:!1},cellFormatter({roles:m},{formatMessage:M}){return t.createElement(S.Z,{textColor:"neutral800"},m.map(v=>M({id:`Settings.permissions.users.${v.code}`,defaultMessage:v.name})).join(`,
`))}},{key:"username",name:"username",metadatas:{label:{id:"Settings.permissions.users.username",defaultMessage:"Username"},sortable:!0}},{key:"isActive",name:"isActive",metadatas:{label:{id:"Settings.permissions.users.user-status",defaultMessage:"User status"},sortable:!1},cellFormatter({isActive:m},{formatMessage:M}){return t.createElement(H.k,null,t.createElement(a.qb,{isActive:m,variant:m?"success":"danger"}),t.createElement(S.Z,{textColor:"neutral800"},M({id:m?"Settings.permissions.users.active":"Settings.permissions.users.inactive",defaultMessage:m?"Active":"Inactive"})))}}];function Le(m,M){var v=Object.keys(m);if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(m);M&&(P=P.filter(function(b){return Object.getOwnPropertyDescriptor(m,b).enumerable})),v.push.apply(v,P)}return v}function me(m){for(var M=1;M<arguments.length;M++){var v=arguments[M]!=null?arguments[M]:{};M%2?Le(Object(v),!0).forEach(function(P){(0,g.Z)(m,P,v[P])}):Object.getOwnPropertyDescriptors?Object.defineProperties(m,Object.getOwnPropertyDescriptors(v)):Le(Object(v)).forEach(function(P){Object.defineProperty(m,P,Object.getOwnPropertyDescriptor(v,P))})}return m}var Ye=function(){return window&&window.strapi&&window.strapi.isEE?e(49823).Z:e(4214).Z}(),we=function(){return window&&window.strapi&&window.strapi.isEE?e(94018).Z:e(67875).Z}(),ke=function(){var M=(0,a.So)(),v=M.formatAPIError,P=(0,t.useState)(!1),b=(0,d.Z)(P,2),Y=b[0],$=b[1],oe=(0,a.ss)(s.Z.settings.users),N=oe.allowedActions,Q=N.canCreate,W=N.canDelete,E=N.canRead,V=(0,y.useQueryClient)(),K=(0,a.lm)(),w=(0,h.Z)(),Z=w.formatMessage,k=(0,I.TH)(),ue=k.search;(0,a.go)(),we();var z=(0,u.G)(),Oe=z.notifyStatus,q=["users",ue],Ee=Je.map(function(O){return me(me({},O),{},{metadatas:me(me({},O.metadatas),{},{label:Z(O.metadatas.label)})})}),ee=Z({id:"global.users",defaultMessage:"Users"}),he=function(){Oe(Z({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:ee}))},le=(0,y.useQuery)(q,function(){return Qe(ue,he)},{enabled:E,retry:!1,onError:function(U){K({type:"warning",message:{id:"notification.error",message:v(U),defaultMessage:"An error occured"}})}}),te=le.status,B=le.data,ye=le.isFetching,ge=function(){$(function(U){return!U})},ae=(0,y.useMutation)(function(O){return Ve(O)},{onSuccess:function(){return(0,l.Z)(c().mark(function U(){return c().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,V.refetchQueries(q);case 2:return _.next=4,V.refetchQueries(["ee","license-limit-info"]);case 4:case"end":return _.stop()}},U)}))()},onError:function(U){K({type:"warning",message:{id:"notification.error",message:v(U),defaultMessage:"An error occured"}})}}),ie=te!=="success"&&te!=="error"||te==="success"&&ye;return t.createElement(r.o,{"aria-busy":ie},t.createElement(a.SL,{name:"Users"}),t.createElement(i.T,{primaryAction:Q&&t.createElement(Ye,{onClick:ge}),title:ee,subtitle:Z({id:"Settings.permissions.users.listview.header.subtitle",defaultMessage:"All the users who have access to the Strapi admin panel"})}),E&&t.createElement(A.Z,{startActions:t.createElement(t.Fragment,null,t.createElement(a.m,{label:Z({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:ee})}),t.createElement(Ue.Z,{displayedFilters:Ge}))}),t.createElement(C.D,{canRead:E},!E&&t.createElement(a.ZF,null),te==="error"&&t.createElement("div",null,"TODO: An error occurred"),E&&t.createElement(t.Fragment,null,t.createElement(a.tM,{contentType:"Users",isLoading:ie,onConfirmDeleteAll:ae.mutateAsync,onConfirmDelete:function(U){return ae.mutateAsync([U])},headers:Ee,rows:B?.results,withBulkActions:!0,withMainAction:W},t.createElement(Be,{canDelete:W,headers:Ee,rows:B?.results||[],withBulkActions:!0,withMainAction:W})),t.createElement(He,{pagination:B?.pagination}))),Y&&t.createElement(Xe,{onToggle:ge,queryName:q}))};const qe=ke,et=()=>t.createElement(a.O4,{permissions:s.Z.settings.users.main},t.createElement(qe,null))},82464:(D,n,e)=>{e.d(n,{Z:()=>i});var t=e(67294),a=e(45697),s=e.n(a),l=e(12028),g=e(64289),d=e(65186),o=e(74855),c=e.n(o),u=e(86896);const r=({children:A,target:C})=>{const I=(0,g.lm)(),{formatMessage:h}=(0,u.Z)(),y=()=>{I({type:"info",message:{id:"notification.link-copied"}})},L=h({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"});return t.createElement(g.Y_,{endAction:t.createElement(o.CopyToClipboard,{onCopy:y,text:C},t.createElement(l.h,{label:L,noBorder:!0,icon:t.createElement(d.Z,null)})),title:C,titleEllipsis:!0,subtitle:A,icon:t.createElement("span",{style:{fontSize:32}},"\u2709\uFE0F"),iconBackground:"neutral100"})};r.propTypes={children:s().oneOfType([s().element,s().string]).isRequired,target:s().string.isRequired};const i=r},31605:(D,n,e)=>{e.d(n,{Z:()=>c});var t=e(67294),a=e(86896),s=e(45697),l=e.n(s),g=e(63871),d=e(82464);const o=({registrationToken:u})=>{const{formatMessage:r}=(0,a.Z)(),i=`${window.location.origin}${g.Z}auth/register?registrationToken=${u}`;return t.createElement(d.Z,{target:i},r({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"}))};o.defaultProps={registrationToken:""},o.propTypes={registrationToken:l().string};const c=o},81288:(D,n,e)=>{e.d(n,{Z:()=>y});var t=e(67294),a=e(45697),s=e.n(a),l=e(86896),g=e(40619),d=e(82562),o=e(88767),c=e(88972),u=e(86647),r=e(64289);const i=(0,c.F4)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,A=c.ZP.div`
  animation: ${i} 2s infinite linear;
`,C=()=>t.createElement(A,null,t.createElement(u.Z,null)),I=async()=>{const{get:L}=(0,r.tg)(),{data:p}=await L("/admin/roles");return p.data},h=({disabled:L,error:p,onChange:se,value:J})=>{const{status:ne,data:pe}=(0,o.useQuery)(["roles"],I,{staleTime:5e4}),{formatMessage:S}=(0,l.Z)(),H=p?S({id:p,defaultMessage:p}):"",de=S({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),j=S({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),fe=S({id:"app.components.Select.placeholder",defaultMessage:"Select"}),Me=ne==="loading"?t.createElement(C,null):void 0;return t.createElement(g.P,{id:"roles",disabled:L,error:H,hint:j,label:de,name:"roles",onChange:R=>{se({target:{name:"roles",value:R}})},placeholder:fe,multi:!0,startIcon:Me,value:J.map(R=>R.toString()),withTags:!0,required:!0},(pe||[]).map(R=>t.createElement(d.W,{key:R.id,value:R.id.toString()},S({id:`global.${R.code}`,defaultMessage:R.name}))))};h.defaultProps={disabled:!1,error:void 0},h.propTypes={disabled:s().bool,error:s().string,onChange:s().func.isRequired,value:s().array.isRequired};const y=h},49823:(D,n,e)=>{e.d(n,{Z:()=>h});var t=e(67294),a=e(86896),s=e(45697),l=e.n(s),g=e(11047),d=e(84495),o=e(52624),c=e(29728),u=e(51277),r=e(23293),i=e(14293),A=e.n(i),C=e(69483);const I=({onClick:y})=>{const{formatMessage:L}=(0,a.Z)(),{license:p}=(0,C.q5)(),{permittedSeats:se,shouldStopCreate:J}=p?.data??{};return t.createElement(g.k,{gap:2},!A()(se)&&J&&t.createElement(d.u,{description:L({id:"Settings.application.admin-seats.at-limit-tooltip",defaultMessage:"At limit: add seats to invite more users"}),position:"left"},t.createElement(o.J,{width:`${14/16}rem`,height:`${14/16}rem`,color:"danger500",as:u.Z})),t.createElement(c.z,{"data-testid":"create-user-button",onClick:y,startIcon:t.createElement(r.Z,null),size:"S",disabled:J},L({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"})))};I.propTypes={onClick:l().func.isRequired};const h=I},97083:(D,n,e)=>{e.d(n,{Z:()=>l});var t=e(57338);const a=strapi.features.isEnabled(strapi.features.SSO)?{useSSORegistration:!0}:{},l={...t.Z,...a}},810:(D,n,e)=>{e.d(n,{Z:()=>a});const a=strapi.features.isEnabled(strapi.features.SSO)?[[{intlLabel:{id:"Settings.permissions.users.form.sso",defaultMessage:"Connect with SSO"},hint:{id:"Settings.permissions.users.form.sso.description",defaultMessage:"When enabled (ON), users can login via SSO"},name:"useSSORegistration",type:"bool",size:{col:6,xs:12}}]]:[]},12201:(D,n,e)=>{e.d(n,{Z:()=>c});var t=e(67294),a=e(86896),s=e(45697),l=e.n(s),g=e(63871),d=e(82464);const o=({registrationToken:u})=>{const{formatMessage:r}=(0,a.Z)();return u?t.createElement(d.Z,{target:`${window.location.origin}${g.Z}auth/register?registrationToken=${u}`},r({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})):t.createElement(d.Z,{target:`${window.location.origin}${g.Z}auth/login`},r({id:"app.components.Users.MagicLink.connect.sso",defaultMessage:"Send this link to the user, the first login can be made via a SSO provider."}))};o.defaultProps={registrationToken:""},o.propTypes={registrationToken:l().string};const c=o},2407:(D,n,e)=>{e.d(n,{$:()=>u,O:()=>r});var t=e(85893),a=e(16405),s=e(88972),l=e(63237),g=e(11047),d=e(41580),o=e(75515);const c=(0,s.ZP)(g.k)`
  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
    path {
      fill: ${({theme:i})=>i.colors.neutral500};
    }
  }
  :last-of-type ${d.x} {
    display: none;
  }
  :last-of-type ${o.Z} {
    color: ${({theme:i})=>i.colors.neutral800};
    font-weight: ${({theme:i})=>i.fontWeights.bold};
  }
`,u=({children:i})=>(0,t.jsxs)(c,{inline:!0,as:"li",children:[(0,t.jsx)(o.Z,{variant:"pi",textColor:"neutral600",children:i}),(0,t.jsx)(d.x,{"aria-hidden":!0,paddingLeft:3,paddingRight:3,children:(0,t.jsx)(a.Z,{})})]});u.displayName="Crumb";const r=({children:i,label:A,...C})=>(0,t.jsxs)(g.k,{...C,children:[(0,t.jsx)(l.T,{children:A}),(0,t.jsx)("ol",{"aria-hidden":!0,children:i})]});r.displayName="Breadcrumbs"},36989:(D,n,e)=>{e.d(n,{Z:()=>u});var t=e(85893),a=e(67294),s=e(45697),l=e(88972),g=e(11047),d=e(41580);const o=(0,l.ZP)(g.k)`
  & > * + * {
    margin-left: ${({theme:r})=>r.spaces[2]};
  }

  margin-left: ${({pullRight:r})=>r?"auto":void 0};
`,c=(0,l.ZP)(o)`
  flex-shrink: 0;
`,u=({startActions:r,endActions:i})=>r||i?(0,t.jsx)(d.x,{paddingLeft:10,paddingRight:10,children:(0,t.jsx)(d.x,{paddingBottom:4,children:(0,t.jsxs)(g.k,{justifyContent:"space-between",alignItems:"flex-start",children:[r&&(0,t.jsx)(o,{wrap:"wrap",children:r}),i&&(0,t.jsx)(c,{pullRight:!0,children:i})]})})}):null;u.defaultProps={endActions:void 0,startActions:void 0},u.propTypes={endActions:s.node,startActions:s.node}},23293:(D,n,e)=>{e.d(n,{Z:()=>s});var t=e(85893);const a=l=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...l,children:[(0,t.jsx)("path",{fill:"#32324D",d:"M0 2.8A.8.8 0 0 1 .8 2h22.4a.8.8 0 0 1 .8.8v2.71a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2.8Z"}),(0,t.jsx)("path",{fill:"#32324D",d:"M1.922 7.991C.197 6.675 0 6.252 0 5.289h23.953c.305 1.363-1.594 2.506-2.297 3.125-1.953 1.363-6.253 4.36-7.828 5.45-1.575 1.09-3.031.455-3.562 0-2.063-1.41-6.62-4.557-8.344-5.873ZM22.8 18H1.2c-.663 0-1.2.471-1.2 1.053v1.894C0 21.529.537 22 1.2 22h21.6c.663 0 1.2-.471 1.2-1.053v-1.894c0-.582-.537-1.053-1.2-1.053Z"}),(0,t.jsx)("path",{fill:"#32324D",d:"M0 9.555v10.972h24V9.554c-2.633 1.95-8.367 6.113-9.96 7.166-1.595 1.052-3.352.438-4.032 0L0 9.555Z"})]}),s=a}}]);