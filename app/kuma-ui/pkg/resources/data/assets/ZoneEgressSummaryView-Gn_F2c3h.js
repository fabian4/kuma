import{d as E,h as l,o as r,a as i,w as e,j as a,ae as V,k as t,t as n,g as m,b as u,F as d,B as x,a1 as p,S as C,e as B,X as R,A as b}from"./index-9gITI0JG.js";const v={class:"stack-with-borders"},A=E({__name:"ZoneEgressSummaryView",props:{items:{}},setup(_){const y=_;return(S,D)=>{const g=l("RouteTitle"),f=l("RouterLink"),z=l("AppView"),h=l("DataCollection"),k=l("RouteView");return r(),i(k,{name:"zone-egress-summary-view",params:{zoneEgress:""}},{default:e(({route:w,t:o})=>[a(h,{items:y.items,predicate:c=>c.id===w.params.zoneEgress,find:!0},{empty:e(()=>[a(V,null,{title:e(()=>[t(n(o("common.collection.summary.empty_title",{type:"ZoneEgress"})),1)]),default:e(()=>[t(),m("p",null,n(o("common.collection.summary.empty_message",{type:"ZoneEgress"})),1)]),_:2},1024)]),default:e(({items:c})=>[(r(!0),u(d,null,x([c[0]],s=>(r(),i(z,{key:s.id},{title:e(()=>[m("h2",null,[a(f,{to:{name:"zone-egress-detail-view",params:{zone:s.zoneEgress.zone,zoneEgress:s.id}}},{default:e(()=>[a(g,{title:o("zone-egresses.routes.item.title",{name:s.name})},null,8,["title"])]),_:2},1032,["to"])])]),default:e(()=>[t(),m("div",v,[a(p,{layout:"horizontal"},{title:e(()=>[t(n(o("http.api.property.status")),1)]),body:e(()=>[a(C,{status:s.state},null,8,["status"])]),_:2},1024),t(),s.namespace.length>0?(r(),i(p,{key:0,layout:"horizontal"},{title:e(()=>[t(n(o("data-planes.routes.item.namespace")),1)]),body:e(()=>[t(n(s.namespace),1)]),_:2},1024)):B("",!0),t(),a(p,{layout:"horizontal"},{title:e(()=>[t(n(o("http.api.property.address")),1)]),body:e(()=>[s.zoneEgress.socketAddress.length>0?(r(),i(R,{key:0,text:s.zoneEgress.socketAddress},null,8,["text"])):(r(),u(d,{key:1},[t(n(o("common.detail.none")),1)],64))]),_:2},1024)])]),_:2},1024))),128))]),_:2},1032,["items","predicate"])]),_:1})}}}),Z=b(A,[["__scopeId","data-v-60f695f5"]]);export{Z as default};
