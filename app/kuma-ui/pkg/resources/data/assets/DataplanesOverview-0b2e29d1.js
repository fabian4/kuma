import{f as A}from"./kongponents.es-3ba46133.js";import{L as B}from"./LoadingBox-96212d17.js";import{O as S,a as T,b as F}from"./OnboardingPage-92514748.js";import{S as N}from"./StatusBadge-832cc4dd.js";import{u as E}from"./index-36b3783c.js";import{h as I}from"./production-554ae9d4.js";import{d as L,r as b,c as w,P as C,o as s,a as y,w as t,e as n,a4 as H,u as o,g as l,t as u,h as d,f as x,F as M}from"./runtime-dom.esm-bundler-9284044f.js";import{_ as R}from"./_plugin-vue_export-helper-c27b6911.js";import"./store-f2021894.js";const V={key:0,class:"status-loading-box mb-4"},z={key:1},K={class:"mb-4"},U=L({__name:"DataplanesOverview",setup(W){const m=E(),k=[{label:"Mesh",key:"mesh"},{label:"Name",key:"name"},{label:"Status",key:"status"}],e=b({total:0,data:[]}),i=b(null),D=w(()=>e.value.data.length>0?"Success":"Waiting for DPPs"),p=w(()=>e.value.data.length>0?"The following data plane proxies (DPPs) are connected to the control plane:":null);C(function(){f()}),v();function f(){i.value!==null&&window.clearTimeout(i.value)}async function v(){let r=!1;const c=[];try{const{items:a}=await m.getAllDataplanes({size:10});if(Array.isArray(a))for(const P of a){const{name:_,mesh:g}=P,O=await m.getDataplaneOverviewFromMesh({mesh:g,name:_}),h=I(O.dataplaneInsight);h==="offline"&&(r=!0),c.push({status:h,name:_,mesh:g})}}catch(a){console.error(a)}e.value.data=c,e.value.total=e.value.data.length,r&&(f(),i.value=window.setTimeout(v,1e3))}return(r,c)=>(s(),y(F,null,{header:t(()=>[n(S,null,H({title:t(()=>[l("p",null,u(o(D)),1)]),_:2},[o(p)!==null?{name:"description",fn:t(()=>[l("p",null,u(o(p)),1)]),key:"0"}:void 0]),1024)]),content:t(()=>[e.value.data.length===0?(s(),d("div",V,[n(B)])):(s(),d("div",z,[l("p",K,[l("b",null,"Found "+u(e.value.data.length)+" DPPs:",1)]),x(),n(o(A),{class:"mb-4",fetcher:()=>e.value,headers:k,"disable-pagination":""},{status:t(({rowValue:a})=>[a?(s(),y(N,{key:0,status:a},null,8,["status"])):(s(),d(M,{key:1},[x(`
              —
            `)],64))]),_:1},8,["fetcher"])]))]),navigation:t(()=>[n(T,{"next-step":"onboarding-completed","previous-step":"onboarding-add-services-code","should-allow-next":e.value.data.length>0},null,8,["should-allow-next"])]),_:1}))}});const ee=R(U,[["__scopeId","data-v-9ed5a755"]]);export{ee as default};