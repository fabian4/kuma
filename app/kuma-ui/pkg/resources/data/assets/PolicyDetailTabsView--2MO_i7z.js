import{d as x,h as a,o as i,a as l,w as t,j as o,z as D,aA as v,b as C,X as R,e as T,k as m,V as k,B as A,t as P,r as X}from"./index-9gITI0JG.js";const B={key:0},g=x({__name:"PolicyDetailTabsView",setup(S){return(L,N)=>{const p=a("RouteTitle"),_=a("XAction"),d=a("XTabs"),h=a("RouterView"),u=a("DataLoader"),f=a("AppView"),y=a("DataSource"),b=a("RouteView");return i(),l(b,{name:"policy-detail-tabs-view",params:{mesh:"",policy:"",policyPath:""}},{default:t(({route:e,t:c,uri:w})=>[o(y,{src:w(D(v),"/meshes/:mesh/policy-path/:path/policy/:name",{mesh:e.params.mesh,path:e.params.policyPath,name:e.params.policy})},{default:t(({data:s,error:V})=>[o(f,{breadcrumbs:[{to:{name:"mesh-detail-view",params:{mesh:e.params.mesh}},text:e.params.mesh},{to:{name:"policy-list-view",params:{mesh:e.params.mesh,policyPath:e.params.policyPath}},text:c("policies.routes.item.breadcrumbs")}]},{title:t(()=>[s?(i(),C("h1",B,[o(R,{text:s.name},{default:t(()=>[o(p,{title:c("policies.routes.item.title",{name:s.name})},null,8,["title"])]),_:2},1032,["text"])])):T("",!0)]),default:t(()=>[m(),o(u,{data:[s],errors:[V]},{default:t(()=>{var r;return[o(d,{selected:(r=e.child())==null?void 0:r.name},k({_:2},[A(e.children,({name:n})=>({name:`${n}-tab`,fn:t(()=>[o(_,{to:{name:n}},{default:t(()=>[m(P(c(`policies.routes.item.navigation.${n}`)),1)]),_:2},1032,["to"])])}))]),1032,["selected"]),m(),o(h,null,{default:t(n=>[(i(),l(X(n.Component),{data:s},null,8,["data"]))]),_:2},1024)]}),_:2},1032,["data","errors"])]),_:2},1032,["breadcrumbs"])]),_:2},1032,["src"])]),_:1})}}});export{g as default};
