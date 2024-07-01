import{d as S,h as i,o as t,a,w as s,j as o,g as V,k as c,T as h,C as x,t as m,X as g,b as k,F as z,S as b,z as y,M as R,r as B,e as p,A as N}from"./index-9gITI0JG.js";import{e as D}from"./kong-icons.es249-VUMzy5J0.js";import{S as L}from"./SummaryView-uFb2OIQZ.js";const $=S({__name:"ZoneIngressListView",setup(T){return(Z,E)=>{const f=i("RouteTitle"),u=i("RouterLink"),w=i("KCard"),I=i("RouterView"),_=i("DataSource"),v=i("AppView"),C=i("RouteView");return t(),a(_,{src:"/me"},{default:s(({data:A})=>[A?(t(),a(C,{key:0,name:"zone-ingress-list-view",params:{zone:"",zoneIngress:""}},{default:s(({route:r,t:l})=>[o(v,null,{title:s(()=>[V("h2",null,[o(f,{title:l("zone-ingresses.routes.items.title")},null,8,["title"])])]),default:s(()=>[c(),o(_,{src:`/zone-cps/${r.params.zone}/ingresses?page=1&size=100`},{default:s(({data:n,error:d})=>[o(w,null,{default:s(()=>[d!==void 0?(t(),a(h,{key:0,error:d},null,8,["error"])):(t(),a(x,{key:1,class:"zone-ingress-collection","data-testid":"zone-ingress-collection",headers:[{label:"Name",key:"name"},{label:"Address",key:"socketAddress"},{label:"Advertised address",key:"advertisedSocketAddress"},{label:"Status",key:"status"},{label:"Details",key:"details",hideLabel:!0}],"page-number":1,"page-size":100,total:n==null?void 0:n.total,items:n==null?void 0:n.items,error:d,"empty-state-message":l("common.emptyState.message",{type:"Zone Ingresses"}),"empty-state-cta-to":l("zone-ingresses.href.docs"),"empty-state-cta-text":l("common.documentation"),"is-selected-row":e=>e.name===r.params.zoneIngress,onChange:r.update},{name:s(({row:e})=>[o(u,{to:{name:"zone-ingress-summary-view",params:{zone:r.params.zone,zoneIngress:e.id},query:{page:1,size:100}}},{default:s(()=>[c(m(e.name),1)]),_:2},1032,["to"])]),socketAddress:s(({row:e})=>[e.zoneIngress.socketAddress.length>0?(t(),a(g,{key:0,text:e.zoneIngress.socketAddress},null,8,["text"])):(t(),k(z,{key:1},[c(m(l("common.collection.none")),1)],64))]),advertisedSocketAddress:s(({row:e})=>[e.zoneIngress.advertisedSocketAddress.length>0?(t(),a(g,{key:0,text:e.zoneIngress.advertisedSocketAddress},null,8,["text"])):(t(),k(z,{key:1},[c(m(l("common.collection.none")),1)],64))]),status:s(({row:e})=>[o(b,{status:e.state},null,8,["status"])]),details:s(({row:e})=>[o(u,{class:"details-link","data-testid":"details-link",to:{name:"zone-ingress-detail-view",params:{zoneIngress:e.id}}},{default:s(()=>[c(m(l("common.collection.details_link"))+" ",1),o(y(D),{decorative:"",size:y(R)},null,8,["size"])]),_:2},1032,["to"])]),_:2},1032,["total","items","error","empty-state-message","empty-state-cta-to","empty-state-cta-text","is-selected-row","onChange"]))]),_:2},1024),c(),r.params.zoneIngress?(t(),a(I,{key:0},{default:s(e=>[o(L,{onClose:K=>r.replace({name:"zone-ingress-list-view",params:{zone:r.params.zone},query:{page:1,size:100}})},{default:s(()=>[typeof n<"u"?(t(),a(B(e.Component),{key:0,items:n.items},null,8,["items"])):p("",!0)]),_:2},1032,["onClose"])]),_:2},1024)):p("",!0)]),_:2},1032,["src"])]),_:2},1024)]),_:1})):p("",!0)]),_:1})}}}),M=N($,[["__scopeId","data-v-ead0e5f6"]]);export{M as default};
