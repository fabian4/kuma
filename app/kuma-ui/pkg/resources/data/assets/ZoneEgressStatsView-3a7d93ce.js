import{_ as m}from"./EnvoyData.vue_vue_type_script_setup_true_lang-c2186470.js";import{d,a as t,o as l,b as _,w as a,e as s,m as g,f as u}from"./index-a04e4171.js";import"./index-fce48c05.js";import"./CodeBlock-1370eb60.js";import"./uniqueId-90cc9b93.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-89970193.js";import"./ErrorBlock-43034db1.js";import"./TextWithCopyButton-7e4c909e.js";import"./CopyButton-882edec4.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-9aa5665b.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-ea2db3d2.js";const B=d({__name:"ZoneEgressStatsView",setup(f){return(h,x)=>{const r=t("RouteTitle"),n=t("KCard"),p=t("AppView"),i=t("RouteView");return l(),_(i,{name:"zone-egress-stats-view",params:{zoneEgress:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:a(({route:e,t:c})=>[s(p,null,{title:a(()=>[g("h2",null,[s(r,{title:c("zone-egresses.routes.item.navigation.zone-egress-stats-view")},null,8,["title"])])]),default:a(()=>[u(),s(n,null,{default:a(()=>[s(m,{resource:"Zone",src:`/zone-egresses/${e.params.zoneEgress}/data-path/stats`,query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:o=>e.update({codeSearch:o}),onFilterModeChange:o=>e.update({codeFilter:o}),onRegExpModeChange:o=>e.update({codeRegExp:o})},null,8,["src","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{B as default};