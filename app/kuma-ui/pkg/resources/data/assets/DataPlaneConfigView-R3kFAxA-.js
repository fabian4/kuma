import{_ as x}from"./ResourceCodeBlock.vue_vue_type_style_index_0_lang-owWKimIX.js";import{d as w,a as n,o as t,b as s,w as o,e as r,m as E,f as R,E as V,A as k,p as y}from"./index-1j9z4Egf.js";import"./CodeBlock-ejECcgv-.js";import"./toYaml-sPaYOD3i.js";const P=w({__name:"DataPlaneConfigView",setup(v){return($,F)=>{const m=n("RouteTitle"),l=n("DataSource"),_=n("KCard"),u=n("AppView"),f=n("RouteView");return t(),s(f,{name:"data-plane-config-view",params:{mesh:"",dataPlane:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:o(({route:e,t:g})=>[r(u,null,{title:o(()=>[E("h2",null,[r(m,{title:g("data-planes.routes.item.navigation.data-plane-config-view")},null,8,["title"])])]),default:o(()=>[R(),r(_,null,{default:o(()=>[r(l,{src:`/meshes/${e.params.mesh}/dataplanes/${e.params.dataPlane}`},{default:o(({data:p,error:d})=>[d?(t(),s(V,{key:0,error:d},null,8,["error"])):p===void 0?(t(),s(k,{key:1})):(t(),s(x,{key:2,resource:p.config,"is-searchable":"",query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:a=>e.update({codeSearch:a}),onFilterModeChange:a=>e.update({codeFilter:a}),onRegExpModeChange:a=>e.update({codeRegExp:a})},{default:o(({copy:a,copying:h})=>[h?(t(),s(l,{key:0,src:`/meshes/${e.params.mesh}/dataplanes/${e.params.dataPlane}/as/kubernetes?no-store`,onChange:c=>{a(i=>i(c))},onError:c=>{a((i,C)=>C(c))}},null,8,["src","onChange","onError"])):y("",!0)]),_:2},1032,["resource","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"]))]),_:2},1032,["src"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{P as default};