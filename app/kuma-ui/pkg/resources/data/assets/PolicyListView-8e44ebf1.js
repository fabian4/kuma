import{d as C,r as x,o as n,e as h,h as a,b as e,g as s,q as r,t as l,u as I,w as o,F as L,s as B,n as E,G as $,a as m,Y as v,f as P,V as N,D as V,v as A,H as S}from"./index-0105b00b.js";import{A as q}from"./AppCollection-930d9b16.js";import{g as T,f as R,A as F,o as z,E as K,p as Y,q as D,_ as G}from"./RouteView.vue_vue_type_script_setup_true_lang-fff04e01.js";import{P as H}from"./PolicyTypeTag-4ed0d76d.js";import{n as O}from"./notEmpty-7f452b20.js";import{_ as j}from"./RouteTitle.vue_vue_type_script_setup_true_lang-d728f45f.js";const J=["href"],M={class:"visually-hidden"},Q=C({__name:"DocumentationLink",props:{href:{type:String,required:!0}},setup(f){const y=f,{t}=T();return(c,g)=>{const d=x("KIcon");return n(),h("a",{class:"docs-link",href:y.href,target:"_blank"},[a(d,{icon:"book",color:"currentColor",size:"16",title:e(t)("common.documentation")},null,8,["title"]),s(),r("span",M,l(e(t)("common.documentation")),1)],8,J)}}});const U=R(Q,[["__scopeId","data-v-909dce46"]]),W={class:"policy-list-content"},X={class:"policy-count"},Z={class:"policy-list"},ee={class:"stack"},te={class:"description"},oe={class:"description-content"},se={class:"description-actions"},ae={key:0},ie=C({__name:"PolicyList",props:{pageNumber:{},pageSize:{},policyTypes:{},currentPolicyType:{},policyCollection:{},policyError:{},meshInsight:{}},emits:["change"],setup(f,{emit:y}){const t=f,{t:c}=T(),g=I();return(d,u)=>{const k=x("RouterLink");return n(),h("div",W,[a(e($),{class:"policy-type-list","data-testid":"policy-type-list"},{body:o(()=>[(n(!0),h(L,null,B(t.policyTypes,(p,_)=>{var i,b,w;return n(),h("div",{key:_,class:E(["policy-type-link-wrapper",{"policy-type-link-wrapper--is-active":p.path===t.currentPolicyType.path}])},[a(k,{class:"policy-type-link",to:{name:"policies-list-view",params:{mesh:e(g).params.mesh,policyPath:p.path}},"data-testid":`policy-type-link-${p.name}`},{default:o(()=>[s(l(p.name),1)]),_:2},1032,["to","data-testid"]),s(),r("div",X,l(((w=(b=(i=t.meshInsight)==null?void 0:i.policies)==null?void 0:b[p.name])==null?void 0:w.total)??0),1)],2)}),128))]),_:1}),s(),r("div",Z,[r("div",ee,[a(e($),null,{body:o(()=>[r("div",te,[r("div",oe,[r("h3",null,[a(H,{"policy-type":t.currentPolicyType.name},{default:o(()=>[s(l(e(c)("policies.collection.title",{name:t.currentPolicyType.name})),1)]),_:1},8,["policy-type"])]),s(),r("p",null,l(e(c)("policies.collection.description")),1)]),s(),r("div",se,[t.currentPolicyType.isExperimental?(n(),m(e(v),{key:0,appearance:"warning"},{default:o(()=>[s(l(e(c)("policies.collection.beta")),1)]),_:1})):P("",!0),s(),t.currentPolicyType.isInbound?(n(),m(e(v),{key:1,appearance:"neutral"},{default:o(()=>[s(l(e(c)("policies.collection.inbound")),1)]),_:1})):P("",!0),s(),t.currentPolicyType.isOutbound?(n(),m(e(v),{key:2,appearance:"neutral"},{default:o(()=>[s(l(e(c)("policies.collection.outbound")),1)]),_:1})):P("",!0),s(),a(U,{href:e(c)("policies.href.docs",{name:t.currentPolicyType.name}),"data-testid":"policy-documentation-link"},null,8,["href"])])])]),_:1}),s(),a(e($),null,{body:o(()=>{var p,_;return[a(q,{class:"policy-collection","data-testid":"policy-collection","empty-state-title":e(c)("common.emptyState.title"),"empty-state-message":e(c)("common.emptyState.message",{type:`${t.currentPolicyType.name} policies`}),headers:[{label:"Name",key:"name"},t.currentPolicyType.isTargetRefBased?{label:"Target ref",key:"targetRef"}:void 0,{label:"Actions",key:"actions",hideLabel:!0}].filter(e(O)),"page-number":t.pageNumber,"page-size":t.pageSize,total:(p=t.policyCollection)==null?void 0:p.total,items:(_=t.policyCollection)==null?void 0:_.items,error:t.policyError,onChange:u[0]||(u[0]=i=>y("change",i))},{name:o(({rowValue:i})=>[a(k,{to:{name:"policy-detail-view",params:{mesh:e(g).params.mesh,policyPath:t.currentPolicyType.path,policy:i}}},{default:o(()=>[s(l(i),1)]),_:2},1032,["to"])]),targetRef:o(({row:i})=>[t.currentPolicyType.isTargetRefBased?(n(),m(e(v),{key:0,appearance:"neutral"},{default:o(()=>[s(l(i.spec.targetRef.kind),1),i.spec.targetRef.name?(n(),h("span",ae,[s(":"),r("b",null,l(i.spec.targetRef.name),1)])):P("",!0)]),_:2},1024)):(n(),h(L,{key:1},[s(l(e(c)("common.detail.none")),1)],64))]),actions:o(({row:i})=>[a(e(N),{class:"actions-dropdown","kpop-attributes":{placement:"bottomEnd",popoverClasses:"mt-5 more-actions-popover"},width:"150"},{default:o(()=>[a(e(V),{class:"non-visual-button",appearance:"secondary",size:"small"},{icon:o(()=>[a(e(A),{color:"var(--black-400)",icon:"more",size:"16"})]),_:1})]),items:o(()=>[a(e(S),{item:{to:{name:"policy-detail-view",params:{mesh:e(g).params.mesh,policyPath:t.currentPolicyType.path,policy:i.name}},label:e(c)("common.collection.actions.view")}},null,8,["item"])]),_:2},1024)]),_:1},8,["empty-state-title","empty-state-message","headers","page-number","page-size","total","items","error"])]}),_:1})])])])}}});const ne=R(ie,[["__scopeId","data-v-92df6b96"]]),de=C({__name:"PolicyListView",props:{page:{},size:{}},setup(f){const y=f,{t}=T();return(c,g)=>(n(),m(G,{name:"policies-list-view"},{default:o(({route:d})=>[a(F,null,{title:o(()=>[r("h2",null,[a(j,{title:e(t)("policies.routes.items.title"),render:!0},null,8,["title"])])]),default:o(()=>[s(),a(z,{src:"/*/policy-types"},{default:o(({data:u,error:k})=>[k?(n(),m(K,{key:0,error:k},null,8,["error"])):u===void 0?(n(),m(Y,{key:1})):u.policies.length===0?(n(),m(D,{key:2})):(n(),m(z,{key:3,src:`/meshes/${d.params.mesh}/policy-path/${d.params.policyPath}?page=${y.page}&size=${y.size}`},{default:o(({data:p,error:_})=>[a(z,{src:`/mesh-insights/${d.params.mesh}`},{default:o(({data:i})=>[a(ne,{"page-number":y.page,"page-size":y.size,"current-policy-type":u.policies.find(b=>b.path===d.params.policyPath)??u.policies[0],"policy-types":u.policies,"mesh-insight":i,"policy-collection":p,"policy-error":_,onChange:d.update},null,8,["page-number","page-size","current-policy-type","policy-types","mesh-insight","policy-collection","policy-error","onChange"])]),_:2},1032,["src"])]),_:2},1032,["src"]))]),_:2},1024)]),_:2},1024)]),_:1}))}});export{de as default};
