import{d as k,u as z,q as l,s as p,o as a,a as s,w as _,h as c,b as f,g as b,k as h,e as y}from"./index-e8e69e62.js";import{_ as $}from"./ZoneDetails.vue_vue_type_script_setup_true_lang-b303b8b2.js";import{j as x,k as B,g,_ as E}from"./RouteView.vue_vue_type_script_setup_true_lang-b28dd8e7.js";import{_ as V}from"./RouteTitle.vue_vue_type_script_setup_true_lang-8f9a216a.js";import{_ as N}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-04152738.js";import{E as A}from"./ErrorBlock-63a54e88.js";import{_ as C}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-63e74df2.js";import"./kongponents.es-aa96ab2e.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-cc5f6631.js";import"./DefinitionListItem-86d63286.js";import"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-f4494a0b.js";import"./TabsWidget-5e831f58.js";import"./QueryParameter-70743f73.js";import"./TextWithCopyButton-73715a8a.js";import"./WarningsWidget.vue_vue_type_script_setup_true_lang-30ab40e6.js";const D={class:"zone-details"},O={key:3,class:"kcard-border","data-testid":"detail-view-details"},U=k({__name:"ZoneDetailView",setup(Z){const d=x(),e=z(),{t:m}=B(),t=l(null),n=l(!0),o=l(null);p(()=>e.params.mesh,function(){e.name==="zone-cp-detail-view"&&i()}),p(()=>e.params.name,function(){e.name==="zone-cp-detail-view"&&i()}),v();function v(){i()}async function i(){n.value=!0,o.value=null;const u=e.params.zone;try{t.value=await d.getZoneOverview({name:u})}catch(r){t.value=null,r instanceof Error?o.value=r:console.error(r)}finally{n.value=!1}}return(u,r)=>(a(),s(E,null,{default:_(({route:w})=>[c(V,{title:f(m)("zone-cps.routes.item.title",{name:w.params.zone})},null,8,["title"]),b(),c(g,{breadcrumbs:[{to:{name:"zone-cp-list-view"},text:f(m)("zone-cps.routes.item.breadcrumbs")}]},{default:_(()=>[h("div",D,[n.value?(a(),s(C,{key:0})):o.value!==null?(a(),s(A,{key:1,error:o.value},null,8,["error"])):t.value===null?(a(),s(N,{key:2})):(a(),y("div",O,[c($,{"zone-overview":t.value},null,8,["zone-overview"])]))])]),_:1},8,["breadcrumbs"])]),_:1}))}});export{U as default};