import{d as f,u as b,K as g,c as h,o as r,f as i,F as y,v as k,a as l,w as p,j as x,h as L,t as m,i as w,e as T,Y as B}from"./index-d6e04092.js";import{e as j}from"./RouteView.vue_vue_type_script_setup_true_lang-c4937c78.js";function z(o){return Object.entries(o??{}).map(([s,a])=>({label:s,value:a}))}const C={class:"tag-list"},R=f({__name:"TagList",props:{tags:{type:Object,required:!0}},setup(o){const s=o,a=b(),c=g(),d=h(()=>(Array.isArray(s.tags)?s.tags:z(s.tags)).map(n=>{const{label:t,value:u}=n,v=_(n);return{label:t,value:u,route:v}}));function _(e){if(e.value!=="*")try{switch(e.label){case"kuma.io/zone":return c.resolve({name:"zone-cp-detail-view",params:{zone:e.value}});case"kuma.io/service":return"mesh"in a.params?c.resolve({name:"service-detail-view",params:{mesh:a.params.mesh,service:e.value}}):void 0;default:return}}catch{return}}return(e,n)=>(r(),i("span",C,[(r(!0),i(y,null,k(d.value,(t,u)=>(r(),l(T(B),{key:u,class:"tag-badge"},{default:p(()=>[(r(),l(x(t.route?"router-link":"span"),{to:t.route},{default:p(()=>[L(m(t.label)+":",1),w("b",null,m(t.value),1)]),_:2},1032,["to"]))]),_:2},1024))),128))]))}});const F=j(R,[["__scopeId","data-v-94e5d380"]]);export{F as T};