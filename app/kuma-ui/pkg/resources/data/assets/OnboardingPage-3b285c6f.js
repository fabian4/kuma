import{d as g,a7 as m,o as s,e as p,i as a,G as i,g as o,b as c,f as u,a as h,w as l,D as _,h as y,t as k,J as x,z as $,A as O}from"./index-596309d7.js";import{f as b,e as w}from"./RouteView.vue_vue_type_script_setup_true_lang-f07f5ccf.js";const N={class:"onboarding-heading"},B={class:"onboarding-title"},I={key:0,class:"onboarding-description"},q=g({__name:"OnboardingHeading",setup(n){const e=m();return(t,d)=>(s(),p("div",N,[a("h1",B,[i(t.$slots,"title",{},void 0,!0)]),o(),c(e).description?(s(),p("div",I,[i(t.$slots,"description",{},void 0,!0)])):u("",!0)]))}});const F=b(q,[["__scopeId","data-v-c37786ff"]]),C={class:"onboarding-actions"},V={class:"button-list"},A=g({__name:"OnboardingNavigation",props:{shouldAllowNext:{type:Boolean,required:!1,default:!0},showSkip:{type:Boolean,required:!1,default:!0},nextStep:{type:String,required:!0},previousStep:{type:String,required:!1,default:""},nextStepTitle:{type:String,required:!1,default:"Next"},lastStep:{type:Boolean,required:!1,default:!1}},setup(n){const e=n,t=w();function d(){t.dispatch("onboarding/completeOnboarding")}function v(f){t.dispatch("onboarding/changeStep",f)}return(f,r)=>(s(),p("div",C,[e.previousStep?(s(),h(c(_),{key:0,appearance:"secondary",to:{name:e.previousStep},"data-testid":"onboarding-previous-button",onClick:r[0]||(r[0]=S=>v(e.previousStep))},{default:l(()=>[o(`
      Back
    `)]),_:1},8,["to"])):u("",!0),o(),a("div",V,[e.showSkip?(s(),h(c(_),{key:0,appearance:"outline","data-testid":"onboarding-skip-button",to:{name:"home"},onClick:d},{default:l(()=>[o(`
        Skip setup
      `)]),_:1})):u("",!0),o(),y(c(_),{disabled:!e.shouldAllowNext,appearance:e.lastStep?"creation":"primary",to:{name:e.lastStep?"home":e.nextStep},"data-testid":"onboarding-next-button",onClick:r[1]||(r[1]=S=>e.lastStep?d():v(e.nextStep))},{default:l(()=>[o(k(e.nextStepTitle),1)]),_:1},8,["disabled","appearance","to"])])]))}});const K=b(A,[["__scopeId","data-v-b373c5a9"]]),D=n=>($("data-v-be6e4144"),n=n(),O(),n),H={class:"onboarding-container"},P={class:"onboarding-container__header"},T={class:"onboarding-container__inner-content"},z={class:"mt-4"},E=D(()=>a("div",{class:"background-image"},null,-1)),G=g({__name:"OnboardingPage",props:{withImage:{type:Boolean,required:!1,default:!1}},setup(n){const e=n;return(t,d)=>(s(),p("div",null,[a("div",H,[a("div",P,[i(t.$slots,"header",{},void 0,!0)]),o(),a("div",{class:x(["onboarding-container__content",{"onboarding-container__content--with-image":e.withImage}])},[a("div",T,[i(t.$slots,"content",{},void 0,!0)])],2),o(),a("div",z,[i(t.$slots,"navigation",{},void 0,!0)])]),o(),E]))}});const L=b(G,[["__scopeId","data-v-be6e4144"]]);export{L as O,F as a,K as b};