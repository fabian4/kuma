import{K as N}from"./index-52545d1d.js";import{d as Y,u as ee,m as D,a as _,o as i,b,w as e,e as n,$ as M,p as Z,f as s,t as u,c as w,F as k,J as R,v as x,q as S,V as te,az as ne,E as oe,C as se,_ as ae}from"./index-d015481a.js";import{A as ie}from"./AppCollection-47b71b41.js";import{_ as le}from"./DeleteResourceModal.vue_vue_type_script_setup_true_lang-53d9403f.js";import{E as re}from"./ErrorBlock-90874856.js";import{S as ce}from"./StatusBadge-ed77f93c.js";import{S as me}from"./SummaryView-a7a171ba.js";import{_ as pe}from"./WarningIcon.vue_vue_type_script_setup_true_lang-32f2be0a.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-b301e74b.js";import"./TextWithCopyButton-b83bb297.js";import"./CopyButton-7634543f.js";const ue=["data-testid"],de=Y({__name:"ZoneListView",setup(fe){const j=ee(),$=D(!1),T=D(!1),I=D(""),A=D({}),q=D({}),F=a=>{let m="offline";return a.length>0&&(m="online",typeof a[a.length-1].disconnectTime<"u"&&(m="offline")),m},G=a=>{const m="zoneIngress";A.value=a.items.reduce((l,d)=>{var f,g;const o=(f=d[m])==null?void 0:f.zone;if(typeof o<"u"){typeof l[o]>"u"&&(l[o]={online:[],offline:[]});const z=((g=d[`${m}Insight`])==null?void 0:g.subscriptions)||[],C=F(z);l[o][C].push(d)}return l},{})},O=a=>{const m="zoneEgress";q.value=a.items.reduce((l,d)=>{var f,g;const o=(f=d[m])==null?void 0:f.zone;if(typeof o<"u"){typeof l[o]>"u"&&(l[o]={online:[],offline:[]});const z=((g=d[`${m}Insight`])==null?void 0:g.subscriptions)||[],C=F(z);l[o][C].push(d)}return l},{})};function P(a){return a.map(m=>{var K;const{name:l}=m,d={name:"zone-cp-detail-view",params:{zone:l}};let o="",f="kubernetes",g=!1,z=!0;return(((K=m.zoneInsight)==null?void 0:K.subscriptions)??[]).forEach(y=>{if(y.version&&y.version.kumaCp){o=y.version.kumaCp.version;const{kumaCpGlobalCompatible:h=!0}=y.version.kumaCp;z=h}if(y.config){const h=JSON.parse(y.config);f=h.environment,g=h.store.type==="memory"}}),{detailViewRoute:d,name:l,status:m.state,zoneCpVersion:o,type:f,warnings:{version_mismatch:!z,store_memory:g}}})}async function U(){await j.deleteZone({name:I.value})}function B(){$.value=!$.value}function W(a){B(),I.value=a}function H(a){T.value=(a==null?void 0:a.items.length)>0}return(a,m)=>{const l=_("RouteTitle"),d=_("KButton"),o=_("DataSource"),f=_("RouterLink"),g=_("KTooltip"),z=_("KDropdownItem"),C=_("KDropdown"),K=_("KCard"),y=_("RouterView"),h=_("AppView"),Q=_("RouteView");return i(),b(o,{src:"/me"},{default:e(({data:J})=>[J?(i(),b(Q,{key:0,name:"zone-cp-list-view",params:{page:1,size:J.pageSize,zone:""}},{default:e(({route:p,t:r,can:V})=>[n(h,null,M({title:e(()=>[Z("h1",null,[n(l,{title:r("zone-cps.routes.items.title")},null,8,["title"])])]),default:e(()=>[s(),s(),n(o,{src:`/zone-cps?page=${p.params.page}&size=${p.params.size}`,onChange:H},{default:e(({data:v,error:E,refresh:X})=>[n(o,{src:"/zone-ingress-overviews?page=1&size=100",onChange:G}),s(),n(o,{src:"/zone-egress-overviews?page=1&size=100",onChange:O}),s(),n(K,null,{default:e(()=>[E!==void 0?(i(),b(re,{key:0,error:E},null,8,["error"])):(i(),b(ie,{key:1,class:"zone-cp-collection","data-testid":"zone-cp-collection",headers:[{label:"Name",key:"name"},{label:"Zone CP Version",key:"zoneCpVersion"},{label:"Type",key:"type"},{label:"Ingresses (online / total)",key:"ingress"},{label:"Egresses (online / total)",key:"egress"},{label:"Status",key:"status"},{label:"Warnings",key:"warnings",hideLabel:!0},{label:"Details",key:"details",hideLabel:!0},{label:"Actions",key:"actions",hideLabel:!0}],"page-number":parseInt(p.params.page),"page-size":parseInt(p.params.size),total:v==null?void 0:v.total,items:v?P(v.items):void 0,error:E,"empty-state-title":V("create zones")?r("zone-cps.empty_state.title"):void 0,"empty-state-message":V("create zones")?r("zone-cps.empty_state.message"):void 0,"empty-state-cta-to":V("create zones")?{name:"zone-create-view"}:void 0,"empty-state-cta-text":V("create zones")?r("zones.index.create"):void 0,"is-selected-row":t=>t.name===p.params.zone,onChange:p.update},M({name:e(({row:t})=>[n(f,{to:{name:"zone-cp-detail-view",params:{zone:t.name},query:{page:p.params.page,size:p.params.size}}},{default:e(()=>[s(u(t.name),1)]),_:2},1032,["to"])]),zoneCpVersion:e(({rowValue:t})=>[s(u(t||r("common.collection.none")),1)]),type:e(({rowValue:t})=>[s(u(t||r("common.collection.none")),1)]),ingress:e(({row:t})=>[(i(!0),w(k,null,R([A.value[t.name]||{online:[],offline:[]}],c=>(i(),w(k,null,[s(u(c.online.length)+" / "+u(c.online.length+c.offline.length),1)],64))),256))]),egress:e(({row:t})=>[(i(!0),w(k,null,R([q.value[t.name]||{online:[],offline:[]}],c=>(i(),w(k,null,[s(u(c.online.length)+" / "+u(c.online.length+c.offline.length),1)],64))),256))]),status:e(({rowValue:t})=>[n(ce,{status:t},null,8,["status"])]),warnings:e(({row:t})=>[Object.values(t.warnings).some(c=>c)?(i(),b(g,{key:0},{content:e(()=>[Z("ul",null,[(i(!0),w(k,null,R(t.warnings,(c,L)=>(i(),w(k,{key:L},[c?(i(),w("li",{key:0,"data-testid":`warning-${L}`},u(r(`zone-cps.list.${L}`)),9,ue)):x("",!0)],64))),128))])]),default:e(()=>[s(),n(pe,{"data-testid":"warning",class:"mr-1",size:S(N),"hide-title":""},null,8,["size"])]),_:2},1024)):(i(),w(k,{key:1},[s(u(r("common.collection.none")),1)],64))]),details:e(({row:t})=>[n(f,{class:"details-link","data-testid":"details-link",to:{name:"zone-cp-detail-view",params:{zone:t.name}}},{default:e(()=>[s(u(r("common.collection.details_link"))+" ",1),n(S(te),{display:"inline-block",decorative:"",size:S(N)},null,8,["size"])]),_:2},1032,["to"])]),_:2},[V("create zones")?{name:"actions",fn:e(({row:t})=>[n(C,{class:"actions-dropdown","kpop-attributes":{placement:"bottomEnd",popoverClasses:"mt-5 more-actions-popover"},width:"150"},{default:e(()=>[n(d,{class:"non-visual-button",appearance:"secondary","icon-only":""},{default:e(()=>[n(S(ne))]),_:1})]),items:e(()=>[n(z,{"has-divider":"",danger:"","data-testid":"dropdown-delete-item",onClick:c=>W(t.name)},{default:e(()=>[s(u(r("common.collection.actions.delete")),1)]),_:2},1032,["onClick"])]),_:2},1024)]),key:"0"}:void 0]),1032,["headers","page-number","page-size","total","items","error","empty-state-title","empty-state-message","empty-state-cta-to","empty-state-cta-text","is-selected-row","onChange"]))]),_:2},1024),s(),p.params.zone?(i(),b(y,{key:0},{default:e(t=>[n(me,{onClose:c=>p.replace({name:"zone-cp-list-view",query:{page:p.params.page,size:p.params.size}})},{default:e(()=>[(i(),b(oe(t.Component),{name:p.params.zone,"zone-overview":v==null?void 0:v.items.find(c=>c.name===p.params.zone)},null,8,["name","zone-overview"]))]),_:2},1032,["onClose"])]),_:2},1024)):x("",!0),s(),$.value?(i(),b(le,{key:1,"confirmation-text":I.value,"delete-function":U,"is-visible":"","action-button-text":r("common.delete_modal.proceed_button"),title:r("common.delete_modal.title",{type:"Zone"}),"data-testid":"delete-zone-modal",onCancel:B,onDelete:()=>{B(),X()}},{"body-content":e(()=>[Z("p",null,u(r("common.delete_modal.text1",{type:"Zone",name:I.value})),1),s(),Z("p",null,u(r("common.delete_modal.text2")),1)]),_:2},1032,["confirmation-text","action-button-text","title","onDelete"])):x("",!0)]),_:2},1032,["src"])]),_:2},[V("create zones")&&T.value?{name:"actions",fn:e(()=>[n(d,{appearance:"primary",to:{name:"zone-create-view"},"data-testid":"create-zone-link"},{default:e(()=>[n(S(se),{size:S(N)},null,8,["size"]),s(" "+u(r("zones.index.create")),1)]),_:2},1024)]),key:"0"}:void 0]),1024)]),_:2},1032,["params"])):x("",!0)]),_:1})}}});const Se=ae(de,[["__scopeId","data-v-70bab1c9"]]);export{Se as default};