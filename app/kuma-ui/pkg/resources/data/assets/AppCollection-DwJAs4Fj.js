import{d as j}from"./kong-icons.es245-D__pBg9D.js";import{d as q,y as F,N as L,J as u,c as V,R as h,h as D,o as i,a as g,P as C,w as l,j as T,a8 as E,k as r,t as d,z as m,b as S,F as w,e as N,O as K,B as W,i as $,n as X,ab as H,A as J}from"./index-CMlVV7ds.js";const U={key:0,class:"app-collection-toolbar"},A=5,G=q({__name:"AppCollection",props:{isSelectedRow:{type:[Function,null],default:null},total:{default:0},pageNumber:{default:0},pageSize:{default:30},items:{},headers:{},error:{default:void 0},emptyStateTitle:{default:void 0},emptyStateMessage:{default:void 0},emptyStateCtaTo:{default:void 0},emptyStateCtaText:{default:void 0}},emits:["change"],setup(x,{emit:z}){const{t:R}=F(),e=x,M=z,O=L(),v=u(e.items),b=u(0),f=u(0),y=u(e.pageNumber),k=u(e.pageSize),B=V(()=>{const t=e.headers.filter(n=>["details","warnings","actions"].includes(n.key));if(t.length>4)return"initial";const a=100-t.length*A,o=e.headers.length-t.length;return`calc(${a}% / ${o})`});h(()=>e.items,(t,a)=>{t!==a&&(b.value++,v.value=e.items)}),h(()=>e.pageNumber,function(){e.pageNumber!==y.value&&f.value++}),h(()=>e.headers,function(){f.value++});function I(t){if(!t)return{};const a={};return e.isSelectedRow!==null&&e.isSelectedRow(t)&&(a.class="is-selected"),a}const P=t=>{const a=t.target.closest("tr");if(a){const o=["td:first-child a","[data-action]"].reduce((n,s)=>n===null?a.querySelector(s):n,null);o!==null&&o.closest("tr, li")===a&&o.click()}};return(t,a)=>{var n;const o=D("XAction");return i(),g(m(H),{key:f.value,"data-testid":"app-collection",class:"app-collection",style:X(`--column-width: ${B.value}; --special-column-width: ${A}%;`),"has-error":typeof e.error<"u","pagination-total-items":e.total,"initial-fetcher-params":{page:e.pageNumber,pageSize:e.pageSize},headers:e.headers,"fetcher-cache-key":String(b.value),fetcher:({page:s,pageSize:c,query:_})=>{const p={};return y.value!==s&&(p.page=s),k.value!==c&&(p.size=c),y.value=s,k.value=c,Object.keys(p).length>0&&M("change",p),{data:v.value}},"cell-attrs":({headerKey:s})=>({class:`${s}-column`}),"row-attrs":I,"disable-sorting":"","disable-pagination":e.pageNumber===0,"hide-pagination-when-optional":"","onRow:click":P},C({_:2},[((n=e.items)==null?void 0:n.length)===0?{name:"empty-state",fn:l(()=>[T(E,null,C({title:l(()=>[r(d(e.emptyStateTitle??m(R)("common.emptyState.title")),1)]),default:l(()=>[r(),e.emptyStateMessage?(i(),S(w,{key:0},[r(d(e.emptyStateMessage),1)],64)):N("",!0),r()]),_:2},[e.emptyStateCtaTo?{name:"action",fn:l(()=>[typeof e.emptyStateCtaTo=="string"?(i(),g(o,{key:0,type:"docs",href:e.emptyStateCtaTo},{default:l(()=>[r(d(e.emptyStateCtaText),1)]),_:1},8,["href"])):(i(),g(m(K),{key:1,appearance:"primary",to:e.emptyStateCtaTo},{default:l(()=>[T(m(j)),r(" "+d(e.emptyStateCtaText),1)]),_:1},8,["to"]))]),key:"0"}:void 0]),1024)]),key:"0"}:void 0,W(Object.keys(m(O)),s=>({name:s,fn:l(({row:c,rowValue:_})=>[s==="toolbar"?(i(),S("div",U,[$(t.$slots,"toolbar",{},void 0,!0)])):(i(),S(w,{key:1},[(e.items??[]).length>0?$(t.$slots,s,{key:0,row:c,rowValue:_},void 0,!0):N("",!0)],64))])}))]),1032,["style","has-error","pagination-total-items","initial-fetcher-params","headers","fetcher-cache-key","fetcher","cell-attrs","disable-pagination"])}}}),Z=J(G,[["__scopeId","data-v-7084bb16"]]);export{Z as A};