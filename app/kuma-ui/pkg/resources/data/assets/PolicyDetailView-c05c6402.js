import{d as r,u as i,c as s,o as c,b as n,f as l}from"./index-60be81af.js";import{_ as u}from"./PolicyDetails.vue_vue_type_script_setup_true_lang-cb70e32a.js";import{u as y}from"./store-94b94e8a.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-64732e7c.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-8cdc1d96.js";import"./kongponents.es-bdcd64fe.js";import"./ErrorBlock-4269be84.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-f8939fd0.js";import"./index-c896859e.js";import"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-f496c128.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-7c7e3e4e.js";import"./TextWithCopyButton-57b61144.js";import"./toYaml-4e00099e.js";import"./TabsWidget-cf802743.js";import"./QueryParameter-70743f73.js";const S=r({__name:"PolicyDetailView",props:{mesh:{},policyPath:{},policyName:{}},setup(p){const t=p,a=i(),o=y(),e=s(()=>o.state.policyTypesByPath[t.policyPath]);m();function m(){o.dispatch("updatePageTitle",a.params.policy)}return(h,f)=>e.value?(c(),n(u,{key:0,name:t.policyName,mesh:t.mesh,path:t.policyPath,type:e.value.name},null,8,["name","mesh","path","type"])):l("",!0)}});export{S as default};
