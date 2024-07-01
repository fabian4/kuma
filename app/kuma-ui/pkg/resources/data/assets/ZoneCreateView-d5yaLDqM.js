import{d as L,I as G,c as y,o as l,a as z,w as a,b as _,t as s,e as w,n as pe,r as _e,p as fe,f as ve,g as n,s as be,y as A,K as J,k as t,z as o,j as r,R as ze,L as k,$ as D,h as p,F as $,B as he,a3 as H,a4 as W,a5 as j,U as ge,G as ke,a6 as ye,T as Ce,A as Ee}from"./index-9gITI0JG.js";import{f as we}from"./kong-icons.es265-Dbfo5oZ7.js";import{C}from"./CodeBlock-Cf4O5rWq.js";const Se=i=>(fe("data-v-a364b76f"),i=i(),ve(),i),Ne=["aria-hidden"],$e={key:0,"data-testid":"kui-icon-svg-title"},Ke=Se(()=>n("path",{d:"M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z",fill:"currentColor"},null,-1)),Ie=L({__name:"CheckCircleIcon",props:{title:{type:String,required:!1,default:""},color:{type:String,required:!1,default:"currentColor"},display:{type:String,required:!1,default:"block"},decorative:{type:Boolean,required:!1,default:!1},size:{type:[Number,String],required:!1,default:G,validator:i=>{if(typeof i=="number"&&i>0)return!0;if(typeof i=="string"){const e=String(i).replace(/px/gi,""),m=Number(e);if(m&&!isNaN(m)&&Number.isInteger(m)&&m>0)return!0}return!1}},as:{type:String,required:!1,default:"span"}},setup(i){const e=i,m=y(()=>{if(typeof e.size=="number"&&e.size>0)return`${e.size}px`;if(typeof e.size=="string"){const E=String(e.size).replace(/px/gi,""),u=Number(E);if(u&&!isNaN(u)&&Number.isInteger(u)&&u>0)return`${u}px`}return G}),f=y(()=>({boxSizing:"border-box",color:e.color,display:e.display,height:m.value,lineHeight:"0",width:m.value}));return(E,u)=>(l(),z(_e(i.as),{"aria-hidden":i.decorative?"true":void 0,class:"kui-icon check-circle-icon","data-testid":"kui-icon-wrapper-check-circle-icon",style:pe(f.value)},{default:a(()=>[(l(),_("svg",{"aria-hidden":i.decorative?"true":void 0,"data-testid":"kui-icon-svg-check-circle-icon",fill:"none",height:"100%",role:"img",viewBox:"0 0 24 24",width:"100%",xmlns:"http://www.w3.org/2000/svg"},[i.title?(l(),_("title",$e,s(i.title),1)):w("",!0),Ke],8,Ne))]),_:1},8,["aria-hidden","style"]))}}),Ve=be(Ie,[["__scopeId","data-v-a364b76f"]]),Le={class:"form-step-title"},Te=n("span",{class:"form-step-number"},"1",-1),qe={class:"instruction-list"},Ze={href:"https://helm.sh/docs/intro/install/"},xe={class:"form-step-title"},De=n("span",{class:"form-step-number"},"2",-1),Ae=n("p",null,"On your local machine, create a namespace in your Kubernetes cluster and pull down the kong Helm repo.",-1),Be={class:"instruction-list"},Re={class:"form-step-title"},Ue=n("span",{class:"form-step-number"},"3",-1),Pe={class:"form-step-title"},Xe=n("span",{class:"form-step-number"},"4",-1),Me={class:"field-group-label mt-4"},Oe={class:"mt-4"},Fe=L({__name:"ZoneCreateKubernetesInstructions",props:{zoneName:{type:String,required:!0},globalKdsAddress:{type:String,required:!0},zoneIngressEnabled:{type:Boolean,required:!0},zoneEgressEnabled:{type:Boolean,required:!0},token:{type:String,required:!0},base64EncodedToken:{type:String,required:!0}},setup(i){const{t:e}=A(),m=J(),f=i,E=y(()=>e("zones-crud.form.kubernetes.secret.createSecretCommand",{token:f.base64EncodedToken}).trim()),u=y(()=>{const h={zoneName:f.zoneName,globalKdsAddress:f.globalKdsAddress,zoneIngressEnabled:String(f.zoneIngressEnabled),zoneEgressEnabled:String(f.zoneEgressEnabled),controlPlaneId:typeof m.params.virtualControlPlaneId=="string"?m.params.virtualControlPlaneId:""};return e("zones-crud.form.kubernetes.connectZone.config",h).trim()});return(h,v)=>(l(),_("div",null,[n("h3",Le,[Te,t(" "+s(o(e)("zones-crud.form.kubernetes.prerequisites.title")),1)]),t(),n("ul",qe,[n("li",null,[n("b",null,s(o(e)("zones-crud.form.kubernetes.prerequisites.step1Label"))+s(f.zoneIngressEnabled?" "+o(e)("zones-crud.form.kubernetes.prerequisites.step1LabelAddendum"):""),1),t(`:
        `+s(o(e)("zones-crud.form.kubernetes.prerequisites.step1Description",{productName:o(e)("common.product.name")})),1)]),t(),n("li",null,[n("b",null,s(o(e)("zones-crud.form.kubernetes.prerequisites.step2Label")),1),t(`:
        `+s(o(e)("zones-crud.form.kubernetes.prerequisites.step2Description")),1)]),t(),n("li",null,[n("a",Ze,s(o(e)("zones-crud.form.kubernetes.prerequisites.step3LinkTitle")),1),t(" "+s(o(e)("zones-crud.form.kubernetes.prerequisites.step3Tail")),1)])]),t(),n("h3",xe,[De,t(" "+s(o(e)("zones-crud.form.kubernetes.helm.title")),1)]),t(),Ae,t(),n("ol",Be,[n("li",null,[n("b",null,s(o(e)("zones-crud.form.kubernetes.helm.step1Description")),1),t(),r(C,{class:"mt-2",code:o(e)("zones-crud.form.kubernetes.helm.step1Command"),language:"bash"},null,8,["code"])]),t(),n("li",null,[n("b",null,s(o(e)("zones-crud.form.kubernetes.helm.step2Description")),1),t(),r(C,{class:"mt-2",code:o(e)("zones-crud.form.kubernetes.helm.step2Command"),language:"bash"},null,8,["code"])]),t(),n("li",null,[n("b",null,s(o(e)("zones-crud.form.kubernetes.helm.step3Description")),1),t(),r(C,{class:"mt-2",code:o(e)("zones-crud.form.kubernetes.helm.step3Command"),language:"bash"},null,8,["code"])])]),t(),n("h3",Re,[Ue,t(" "+s(o(e)("zones-crud.form.kubernetes.secret.title")),1)]),t(),n("p",null,s(o(e)("zones-crud.form.kubernetes.secret.createSecretDescription")),1),t(),r(C,{class:"mt-4",code:E.value,language:"bash"},null,8,["code"]),t(),n("h3",Pe,[Xe,t(" "+s(o(e)("zones-crud.form.kubernetes.connectZone.title")),1)]),t(),n("p",null,s(o(e)("zones-crud.form.kubernetes.connectZone.configDescription")),1),t(),n("span",Me,s(o(e)("zones-crud.form.kubernetes.connectZone.configFileName")),1),t(),r(C,{"data-testid":"zone-kubernetes-config",code:u.value,language:"yaml"},null,8,["code"]),t(),n("p",Oe,s(o(e)("zones-crud.form.kubernetes.connectZone.connectDescription")),1),t(),r(C,{class:"mt-4",code:o(e)("zones-crud.form.kubernetes.connectZone.connectCommand").trim(),language:"bash"},null,8,["code"])]))}}),Ge={class:"form-step-title"},He=n("span",{class:"form-step-number"},"1",-1),We={class:"form-step-title"},je=n("span",{class:"form-step-number"},"2",-1),Je={class:"field-group-label mt-4"},Qe={class:"mt-4"},Ye=L({__name:"ZoneCreateUniversalInstructions",props:{zoneName:{type:String,required:!0},globalKdsAddress:{type:String,required:!0},token:{type:String,required:!0}},setup(i){const{t:e}=A(),m=J(),f=i,E=y(()=>e("zones-crud.form.universal.saveToken.saveTokenCommand",{token:f.token}).trim()),u=y(()=>{const h={zoneName:f.zoneName,globalKdsAddress:f.globalKdsAddress,controlPlaneId:typeof m.params.virtualControlPlaneId=="string"?m.params.virtualControlPlaneId:""};return e("zones-crud.form.universal.connectZone.config",h).trim()});return(h,v)=>(l(),_("div",null,[n("h3",Ge,[He,t(" "+s(o(e)("zones-crud.form.universal.saveToken.title")),1)]),t(),n("p",null,s(o(e)("zones-crud.form.universal.saveToken.saveTokenDescription")),1),t(),r(C,{class:"mt-4",code:E.value,language:"bash"},null,8,["code"]),t(),n("h3",We,[je,t(" "+s(o(e)("zones-crud.form.universal.connectZone.title")),1)]),t(),n("p",null,s(o(e)("zones-crud.form.universal.connectZone.configDescription")),1),t(),n("span",Je,s(o(e)("zones-crud.form.universal.connectZone.configFileName")),1),t(),r(C,{"data-testid":"zone-universal-config",class:"mt-4",code:u.value,language:"yaml"},null,8,["code"]),t(),n("p",Qe,s(o(e)("zones-crud.form.universal.connectZone.connectDescription")),1),t(),r(C,{class:"mt-4",code:o(e)("zones-crud.form.universal.connectZone.connectCommand").trim(),language:"bash"},null,8,["code"])]))}}),et={class:"form-wrapper"},tt={key:1},ot={key:2},nt={class:"form"},st={class:"form-header"},rt={class:"form-title"},at={class:"text-gradient"},lt={key:0},ct={key:0},it={class:"fact-list"},ut={class:"form-section"},dt={class:"form-section__header"},mt={class:"form-section-title"},pt={class:"form-section__content"},_t={class:"form-section","data-testid":"connect-zone-instructions"},ft={class:"form-section__header"},vt={class:"form-section-title"},bt={class:"form-section__content"},zt={class:"field-group-list"},ht={class:"field-group"},gt={class:"field-group-label"},kt={class:"radio-button-group"},yt={class:"field-group"},Ct={class:"field-group-label"},Et={class:"radio-button-group","data-testid":"ingress-input-switch"},wt={class:"field-group"},St={class:"field-group-label"},Nt={class:"radio-button-group","data-testid":"egress-input-switch"},$t={class:"form-section"},Kt={class:"form-section__header"},It={class:"form-section-title"},Vt={class:"form-section__content"},Lt={class:"form-section"},Tt={class:"form-section__header"},qt={class:"form-section-title"},Zt={class:"form-section__content"},xt={class:"mt-2"},Dt=L({__name:"ZoneCreateView",setup(i){const{t:e,tm:m}=A(),f=ze(),E=/^(?![-0-9])[a-z0-9-]{1,63}$/,u=k(null),h=k(!1),v=k(null),I=k(null),T=k(""),B=k(!1),b=k(""),N=k("kubernetes"),q=k(!0),Z=k(!0),K=y(()=>u.value!==null&&u.value.token?u.value.token:""),Q=y(()=>K.value!==""?window.btoa(K.value):""),Y=y(()=>b.value===""||h.value||u.value!==null),x=y(()=>{if(I.value!==null)return I.value;if(v.value instanceof D){const g=v.value.invalidParameters.find(d=>d.field==="name");if(g!==void 0)return g.reason}return null});async function ee(){h.value=!0,v.value=null,T.value="";try{if(!R(b.value))return;u.value=await f.createZone({name:b.value})}catch(g){g instanceof Error?(T.value=b.value,v.value=g):console.error(g)}finally{h.value=!1}}function R(g){const d=E.test(g);return d?I.value=null:I.value=e("zones-crud.create.invalidNameError"),d}function te(){B.value=!0}return(g,d)=>{const oe=p("RouteTitle"),V=p("KButton"),ne=p("KModal"),se=p("XTeleportTemplate"),re=p("XDisclosure"),ae=p("KAlert"),le=p("KLabel"),ce=p("KInput"),U=p("KRadio"),P=p("KInputSwitch"),X=p("DataSource"),ie=p("KEmptyState"),ue=p("KCard"),de=p("AppView"),me=p("RouteView");return l(),z(me,{name:"zone-create-view",attrs:{class:"is-fullscreen"}},{default:a(({route:M,id:O,uri:F})=>[r(de,{fullscreen:!0,breadcrumbs:[]},{title:a(()=>[n("h1",null,[r(oe,{title:o(e)("zones-crud.routes.create.title")},null,8,["title"])])]),actions:a(()=>[r(re,null,{default:a(({expanded:c,toggle:S})=>[r(V,{appearance:"tertiary","data-testid":"exit-button",onClick:()=>{K.value===""||B.value?M.back({name:"zone-cp-list-view"}):S()}},{default:a(()=>[t(s(o(e)("zones-crud.form.exit")),1)]),_:2},1032,["onClick"]),t(),r(se,{to:{name:"modal-layer"}},{default:a(()=>[r(ne,{visible:c,title:o(e)("zones-crud.form.confirm_modal.title"),"data-testid":"confirm-exit-modal",onCancel:S,onProceed:At=>M.replace({name:"zone-cp-list-view"})},{"footer-actions":a(()=>[r(V,{appearance:"primary",to:{name:"zone-cp-list-view"},"data-testid":"confirm-exit-button"},{default:a(()=>[t(s(o(e)("zones-crud.form.confirm_modal.action_button")),1)]),_:1})]),default:a(()=>[t(s(o(e)("zones-crud.form.confirm_modal.body"))+" ",1)]),_:2},1032,["visible","title","onCancel","onProceed"])]),_:2},1024)]),_:2},1024)]),default:a(()=>[t(),t(),n("div",et,[v.value!==null?(l(),z(ae,{key:0,appearance:"danger",class:"mb-4","data-testid":"create-zone-error"},{default:a(()=>[v.value instanceof o(D)&&[409,500].includes(v.value.status)?(l(),_($,{key:0},[n("p",null,s(o(e)(`zones-crud.create.status_error.${v.value.status}.title`,{name:T.value})),1),t(),n("p",null,s(o(e)(`zones-crud.create.status_error.${v.value.status}.description`)),1)],64)):v.value instanceof o(D)?(l(),_("p",tt,s(o(e)("common.error_state.api_error",{status:v.value.status,title:v.value.detail})),1)):(l(),_("p",ot,s(o(e)("common.error_state.default_error")),1))]),_:1})):w("",!0),t(),r(ue,{class:"form-card"},{default:a(()=>[n("div",nt,[n("div",st,[n("div",null,[n("h1",rt,[n("span",at,s(o(e)("zones-crud.form.title")),1)]),t(),o(e)("zones-crud.form.description")!==" "?(l(),_("p",lt,s(o(e)("zones-crud.form.description")),1)):w("",!0)]),t(),o(m)("zones-crud.form.facts").length>0?(l(),_("div",ct,[n("ul",it,[(l(!0),_($,null,he(o(m)("zones-crud.form.facts"),(c,S)=>(l(),_("li",{key:S,class:"fact-list__item"},[r(o(we),{class:"fact-list__icon",color:o(H)},null,8,["color"]),t(" "+s(c),1)]))),128))])])):w("",!0)]),t(),n("div",ut,[n("div",dt,[n("h2",mt,s(o(e)("zones-crud.form.section.name.title")),1),t(),n("p",null,s(o(e)("zones-crud.form.section.name.description")),1)]),t(),n("div",pt,[n("div",null,[r(le,{for:O,required:"","tooltip-attributes":{placement:"right"}},{tooltip:a(()=>[t(s(o(e)("zones-crud.form.name_tooltip")),1)]),default:a(()=>[t(s(o(e)("zones-crud.form.nameLabel"))+" ",1)]),_:2},1032,["for"]),t(),r(ce,{id:O,modelValue:b.value,"onUpdate:modelValue":d[0]||(d[0]=c=>b.value=c),type:"text",name:"zone-name","data-testid":"name-input","data-test-error-type":x.value!==null?"invalid-dns-name":void 0,error:x.value!==null,"error-message":x.value??void 0,disabled:u.value!==null,onBlur:d[1]||(d[1]=c=>R(b.value))},null,8,["id","modelValue","data-test-error-type","error","error-message","disabled"])]),t(),r(V,{appearance:"primary",class:"mt-4",disabled:Y.value,"data-testid":"create-zone-button",onClick:ee},{default:a(()=>[h.value?(l(),z(o(W),{key:0,color:o(j)},null,8,["color"])):(l(),z(o(ge),{key:1})),t(" "+s(o(e)("zones-crud.form.createZoneButtonLabel")),1)]),_:1},8,["disabled"])])]),t(),u.value!==null?(l(),_($,{key:0},[n("div",_t,[n("div",ft,[n("h2",vt,s(o(e)("zones-crud.form.section.configuration.title")),1),t(),n("p",null,s(o(e)("zones-crud.form.section.configuration.description")),1)]),t(),n("div",bt,[n("div",zt,[n("div",ht,[n("span",gt,s(o(e)("zones-crud.form.environmentLabel"))+` *
                      `,1),t(),n("div",kt,[r(U,{modelValue:N.value,"onUpdate:modelValue":d[2]||(d[2]=c=>N.value=c),"selected-value":"universal",name:"zone-environment","data-testid":"environment-universal-radio-button"},{default:a(()=>[t(s(o(e)("zones-crud.form.universalLabel")),1)]),_:1},8,["modelValue"]),t(),r(U,{modelValue:N.value,"onUpdate:modelValue":d[3]||(d[3]=c=>N.value=c),"selected-value":"kubernetes",name:"zone-environment","data-testid":"environment-kubernetes-radio-button"},{default:a(()=>[t(s(o(e)("zones-crud.form.kubernetesLabel")),1)]),_:1},8,["modelValue"])])]),t(),N.value==="kubernetes"?(l(),_($,{key:0},[n("div",yt,[n("span",Ct,s(o(e)("zones-crud.form.zoneIngressLabel"))+` *
                        `,1),t(),n("div",Et,[r(P,{modelValue:q.value,"onUpdate:modelValue":d[4]||(d[4]=c=>q.value=c)},{label:a(()=>[t(s(o(e)("zones-crud.form.zoneIngressEnabledLabel")),1)]),_:1},8,["modelValue"])])]),t(),n("div",wt,[n("span",St,s(o(e)("zones-crud.form.zoneEgressLabel"))+` *
                        `,1),t(),n("div",Nt,[r(P,{modelValue:Z.value,"onUpdate:modelValue":d[5]||(d[5]=c=>Z.value=c)},{label:a(()=>[t(s(o(e)("zones-crud.form.zoneEgressEnabledLabel")),1)]),_:1},8,["modelValue"])])])],64)):w("",!0)])])]),t(),n("div",$t,[n("div",Kt,[n("h2",It,s(o(e)("zones-crud.form.section.connect_zone.title")),1),t(),n("p",null,s(o(e)("zones-crud.form.section.connect_zone.description")),1)]),t(),n("div",Vt,[r(X,{src:F(o(ke),"/control-plane/addresses",{})},{default:a(({data:c})=>[typeof c<"u"?(l(),_($,{key:0},[N.value==="universal"?(l(),z(Ye,{key:0,"zone-name":b.value,token:K.value,"global-kds-address":c.kds},null,8,["zone-name","token","global-kds-address"])):(l(),z(Fe,{key:1,"zone-name":b.value,"zone-ingress-enabled":q.value,"zone-egress-enabled":Z.value,token:K.value,"base64-encoded-token":Q.value,"global-kds-address":c.kds},null,8,["zone-name","zone-ingress-enabled","zone-egress-enabled","token","base64-encoded-token","global-kds-address"]))],64)):w("",!0)]),_:2},1032,["src"])])]),t(),n("div",Lt,[r(X,{src:F(o(ye),"/zone-cps/online/:name",{name:b.value},{cacheControl:"no-cache"}),onChange:te},{default:a(({data:c,error:S})=>[n("div",Tt,[n("h2",qt,s(o(e)("zones-crud.form.section.scanner.title")),1),t(),n("p",null,s(o(e)("zones-crud.form.section.scanner.description")),1)]),t(),n("div",Zt,[S?(l(),z(Ce,{key:0,error:S,appearance:"danger","data-testid":"error"},null,8,["error"])):(l(),z(ie,{key:1},{icon:a(()=>[c===void 0?(l(),z(o(W),{key:0,"data-testid":"waiting",color:o(j)},null,8,["color"])):(l(),z(o(Ve),{key:1,"data-testid":"connected",color:o(H)},null,8,["color"]))]),title:a(()=>[t(s(c===void 0?o(e)("zones-crud.form.scan.waitTitle"):o(e)("zones-crud.form.scan.completeTitle")),1)]),default:a(()=>[t(),t(),typeof c<"u"?(l(),_($,{key:0},[n("p",null,s(o(e)("zones-crud.form.scan.completeDescription",{name:b.value})),1),t(),n("p",xt,[r(V,{appearance:"primary",to:{name:"zone-cp-detail-view",params:{zone:b.value}}},{default:a(()=>[t(s(o(e)("zones-crud.form.scan.completeButtonLabel",{name:b.value})),1)]),_:1},8,["to"])])],64)):w("",!0)]),_:2},1024))])]),_:2},1032,["src"])])],64)):w("",!0)])]),_:2},1024)])]),_:2},1024)]),_:1})}}}),Pt=Ee(Dt,[["__scopeId","data-v-d98a788b"]]);export{Pt as default};
