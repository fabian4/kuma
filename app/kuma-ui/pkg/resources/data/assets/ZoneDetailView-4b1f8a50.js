import{d as _,u as d,r as i,v as u,o,j as c,b as l,g as k}from"./index-cf9e12ba.js";import{_ as w}from"./ZoneDetails.vue_vue_type_script_setup_true_lang-c9de99cf.js";import{_ as z}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-91fe498f.js";import{E as h}from"./ErrorBlock-f147fd04.js";import{_ as y}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-5e706f96.js";import{u as g}from"./store-c0b578db.js";import{u as B}from"./index-c02aa084.js";import"./kongponents.es-761ff71a.js";import"./AccordionList-30d20d9d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-cd0df392.js";import"./DefinitionListItem-c6a0a3cd.js";import"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-e05c9e9a.js";import"./TabsWidget-49feb8bb.js";import"./datadogLogEvents-302eea7b.js";import"./QueryParameter-70743f73.js";import"./WarningsWidget.vue_vue_type_script_setup_true_lang-eaf509c4.js";const E={class:"zone-details"},$={key:3,class:"kcard-border"},G=_({__name:"ZoneDetailView",setup(b){const p=B(),e=d(),f=g(),a=i(null),n=i(!0),r=i(null);u(()=>e.params.mesh,function(){e.name==="zone-detail-view"&&s()}),u(()=>e.params.name,function(){e.name==="zone-detail-view"&&s()}),v();function v(){f.dispatch("updatePageTitle",e.params.zone),s()}async function s(){n.value=!0,r.value=null;const m=e.params.zone;try{a.value=await p.getZoneOverview({name:m})}catch(t){a.value=null,t instanceof Error?r.value=t:console.error(t)}finally{n.value=!1}}return(m,t)=>(o(),c("div",E,[n.value?(o(),l(y,{key:0})):r.value!==null?(o(),l(h,{key:1,error:r.value},null,8,["error"])):a.value===null?(o(),l(z,{key:2})):(o(),c("div",$,[k(w,{"zone-overview":a.value},null,8,["zone-overview"])]))]))}});export{G as default};