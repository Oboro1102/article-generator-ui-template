import{i as z,w as O,e as T,t as B}from"./index-Cs-zWUmp.js";import{B as V,D as j,K as M,a9 as $,av as Z,i as F,j as N,aw as U,ax as q,Z as W,W as D,ay as G,q as P,a3 as H,f,c as A,w as g,g as b,m as u,b as C,a5 as J,a8 as Q,r as w,F as X,a as m,C as Y,t as R,l as k,k as _,aq as ee,ag as y,ar as S,u as p,d as te,an as ne,ae as re,ad as ie}from"./index-CENZ57v8.js";import{u as oe}from"./LayoutPages.vue_vue_type_script_setup_true_lang-IFatEHVx.js";import"./index-r4VasSKp.js";var ae=`
    .p-drawer {
        display: flex;
        flex-direction: column;
        transform: translate3d(0px, 0px, 0px);
        position: relative;
        transition: transform 0.3s;
        background: dt('drawer.background');
        color: dt('drawer.color');
        border-style: solid;
        border-color: dt('drawer.border.color');
        box-shadow: dt('drawer.shadow');
    }

    .p-drawer-content {
        overflow-y: auto;
        flex-grow: 1;
        padding: dt('drawer.content.padding');
    }

    .p-drawer-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        padding: dt('drawer.header.padding');
    }

    .p-drawer-footer {
        padding: dt('drawer.footer.padding');
    }

    .p-drawer-title {
        font-weight: dt('drawer.title.font.weight');
        font-size: dt('drawer.title.font.size');
    }

    .p-drawer-full .p-drawer {
        transition: none;
        transform: none;
        width: 100vw !important;
        height: 100vh !important;
        max-height: 100%;
        top: 0px !important;
        left: 0px !important;
        border-width: 1px;
    }

    .p-drawer-left .p-drawer-enter-active {
        animation: p-animate-drawer-enter-left 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-left .p-drawer-leave-active {
        animation: p-animate-drawer-leave-left 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-right .p-drawer-enter-active {
        animation: p-animate-drawer-enter-right 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-right .p-drawer-leave-active {
        animation: p-animate-drawer-leave-right 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-top .p-drawer-enter-active {
        animation: p-animate-drawer-enter-top 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-top .p-drawer-leave-active {
        animation: p-animate-drawer-leave-top 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-bottom .p-drawer-enter-active {
        animation: p-animate-drawer-enter-bottom 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-bottom .p-drawer-leave-active {
        animation: p-animate-drawer-leave-bottom 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-full .p-drawer-enter-active {
        animation: p-animate-drawer-enter-full 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-full .p-drawer-leave-active {
        animation: p-animate-drawer-leave-full 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    
    .p-drawer-left .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-end-width: 1px;
    }

    .p-drawer-right .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-start-width: 1px;
    }

    .p-drawer-top .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-end-width: 1px;
    }

    .p-drawer-bottom .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-start-width: 1px;
    }

    .p-drawer-left .p-drawer-content,
    .p-drawer-right .p-drawer-content,
    .p-drawer-top .p-drawer-content,
    .p-drawer-bottom .p-drawer-content {
        width: 100%;
        height: 100%;
    }

    .p-drawer-open {
        display: flex;
    }

    .p-drawer-mask:dir(rtl) {
        flex-direction: row-reverse;
    }

    @keyframes p-animate-drawer-enter-left {
        from {
            transform: translate3d(-100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-left {
        to {
            transform: translate3d(-100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-right {
        from {
            transform: translate3d(100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-right {
        to {
            transform: translate3d(100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-top {
        from {
            transform: translate3d(0px, -100%, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-top {
        to {
            transform: translate3d(0px, -100%, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-bottom {
        from {
            transform: translate3d(0px, 100%, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-bottom {
        to {
            transform: translate3d(0px, 100%, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-full {
        from {
            opacity: 0;
            transform: scale(0.93);
        }
    }

    @keyframes p-animate-drawer-leave-full {
        to {
            opacity: 0;
            transform: scale(0.93);
        }
    }
`,se={mask:function(t){var n=t.position,i=t.modal;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:n==="left"?"flex-start":n==="right"?"flex-end":"center",alignItems:n==="top"?"flex-start":n==="bottom"?"flex-end":"center",pointerEvents:i?"auto":"none"}},root:{pointerEvents:"auto"}},le={mask:function(t){var n=t.instance,i=t.props,o=["left","right","top","bottom"],r=o.find(function(s){return s===i.position});return["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter-active":i.modal,"p-drawer-open":n.containerVisible,"p-drawer-full":n.fullScreen},r?"p-drawer-".concat(r):""]},root:function(t){var n=t.instance;return["p-drawer p-component",{"p-drawer-full":n.fullScreen}]},header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},de=V.extend({name:"drawer",style:ae,classes:le,inlineStyles:se}),ue={name:"BaseDrawer",extends:F,props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1},closeOnEscape:{type:Boolean,default:!0}},style:de,provide:function(){return{$pcDrawer:this,$parentInstance:this}}};function L(e){"@babel/helpers - typeof";return L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(e)}function E(e,t,n){return(t=ce(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ce(e){var t=fe(e,"string");return L(t)=="symbol"?t:t+""}function fe(e,t){if(L(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t);if(L(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var K={name:"Drawer",extends:ue,inheritAttrs:!1,emits:["update:visible","show","after-show","hide","after-hide","before-hide"],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,footerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,watch:{dismissable:function(t){t&&!this.modal?this.bindOutsideClickListener():this.unbindOutsideClickListener()}},updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&D.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&D.set("modal",this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings(),this.$emit("after-show")},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&G(this.mask,"p-overlay-mask-leave-active"),this.$emit("before-hide")},onLeave:function(){this.$emit("hide")},onAfterLeave:function(){this.autoZIndex&&D.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit("after-hide")},onMaskClick:function(t){this.dismissable&&this.modal&&this.mask===t.target&&this.hide()},focus:function(){var t=function(o){return o&&o.querySelector("[autofocus]")},n=this.$slots.header&&t(this.headerContainer);n||(n=this.$slots.default&&t(this.container),n||(n=this.$slots.footer&&t(this.footerContainer),n||(n=this.closeButton))),n&&W(n)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&q()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&U()},onKeydown:function(t){t.code==="Escape"&&this.closeOnEscape&&this.hide()},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},contentRef:function(t){this.content=t},headerContainerRef:function(t){this.headerContainer=t},footerContainerRef:function(t){this.footerContainer=t},closeButtonRef:function(t){this.closeButton=t?t.$el:void 0},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(n){t.isOutsideClicked(n)&&t.hide()},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},isOutsideClicked:function(t){return this.container&&!this.container.contains(t.target)}},computed:{fullScreen:function(){return this.position==="full"},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return N(E(E(E({"full-screen":this.position==="full"},this.position,this.position),"open",this.containerVisible),"modal",this.modal))}},directives:{focustrap:Z},components:{Button:$,Portal:M,TimesIcon:j}},pe=["data-p"],me=["role","aria-modal","data-p"];function he(e,t,n,i,o,r){var s=P("Button"),c=P("Portal"),l=H("focustrap");return f(),A(c,null,{default:g(function(){return[o.containerVisible?(f(),b("div",u({key:0,ref:r.maskRef,onMousedown:t[0]||(t[0]=function(){return r.onMaskClick&&r.onMaskClick.apply(r,arguments)}),class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position,modal:e.modal}),"data-p":r.dataP},e.ptm("mask")),[C(J,u({name:"p-drawer",onEnter:r.onEnter,onAfterEnter:r.onAfterEnter,onBeforeLeave:r.onBeforeLeave,onLeave:r.onLeave,onAfterLeave:r.onAfterLeave,appear:""},e.ptm("transition")),{default:g(function(){return[e.visible?Q((f(),b("div",u({key:0,ref:r.containerRef,class:e.cx("root"),style:e.sx("root"),role:e.modal?"dialog":"complementary","aria-modal":e.modal?!0:void 0,"data-p":r.dataP},e.ptmi("root")),[e.$slots.container?w(e.$slots,"container",{key:0,closeCallback:r.hide}):(f(),b(X,{key:1},[m("div",u({ref:r.headerContainerRef,class:e.cx("header")},e.ptm("header")),[w(e.$slots,"header",{class:Y(e.cx("title"))},function(){return[e.header?(f(),b("div",u({key:0,class:e.cx("title")},e.ptm("title")),R(e.header),17)):k("",!0)]}),e.showCloseIcon?w(e.$slots,"closebutton",{key:0,closeCallback:r.hide},function(){return[C(s,u({ref:r.closeButtonRef,type:"button",class:e.cx("pcCloseButton"),"aria-label":r.closeAriaLabel,unstyled:e.unstyled,onClick:r.hide},e.closeButtonProps,{pt:e.ptm("pcCloseButton"),"data-pc-group-section":"iconcontainer"}),{icon:g(function(d){return[w(e.$slots,"closeicon",{},function(){return[(f(),A(_(e.closeIcon?"span":"TimesIcon"),u({class:[e.closeIcon,d.class]},e.ptm("pcCloseButton").icon),null,16,["class"]))]})]}),_:3},16,["class","aria-label","unstyled","onClick","pt"])]}):k("",!0)],16),m("div",u({ref:r.contentRef,class:e.cx("content")},e.ptm("content")),[w(e.$slots,"default")],16),e.$slots.footer?(f(),b("div",u({key:0,ref:r.footerContainerRef,class:e.cx("footer")},e.ptm("footer")),[w(e.$slots,"footer")],16)):k("",!0)],64))],16,me)),[[l]]):k("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16,pe)):k("",!0)]}),_:3})}K.render=he;const I=z?window:void 0;function ve(e){var t;const n=S(e);return(t=n?.$el)!==null&&t!==void 0?t:n}function we(...e){const t=(i,o,r,s)=>(i.addEventListener(o,r,s),()=>i.removeEventListener(o,r,s)),n=y(()=>{const i=B(S(e[0])).filter(o=>o!=null);return i.every(o=>typeof o!="string")?i:void 0});return O(()=>{var i,o;return[(i=(o=n.value)===null||o===void 0?void 0:o.map(r=>ve(r)))!==null&&i!==void 0?i:[I].filter(r=>r!=null),B(S(n.value?e[1]:e[0])),B(p(n.value?e[2]:e[1])),S(n.value?e[3]:e[2])]},([i,o,r,s],c,l)=>{if(!i?.length||!o?.length||!r?.length)return;const d=T(s)?{...s}:s,x=i.flatMap(h=>o.flatMap(a=>r.map(v=>t(h,a,v,d))));l(()=>{x.forEach(h=>h())})},{flush:"post"})}function be(e){var t;const n=(t=e.rangeCount)!==null&&t!==void 0?t:0;return Array.from({length:n},(i,o)=>e.getRangeAt(o))}function ye(e={}){var t;const{window:n=I}=e,i=ee((t=n?.getSelection())!==null&&t!==void 0?t:null),o=y(()=>{var l,d;return(l=(d=i.value)===null||d===void 0?void 0:d.toString())!==null&&l!==void 0?l:""}),r=y(()=>i.value?be(i.value):[]),s=y(()=>r.value.map(l=>l.getBoundingClientRect()));function c(){i.value=null,n&&(i.value=n.getSelection())}return n&&we(n.document,"selectionchange",c,{passive:!0}),{text:o,rects:s,ranges:r,selection:i}}const ke={class:"w-full pt-0.5 pb-1"},ge=["textContent"],Ce=["textContent"],Le={class:"ml-auto flex flex-wrap justify-end gap-2.5"},Ee=te({__name:"SearchContent",props:{title:{},content:{}},setup(e){const t=e,{title:n,content:i}=ne(t),o=re(),r=oe(),s=ye(),c=ie(!1),l=y(()=>r.generateConfig.generateTextSource),d=y(()=>s.text.value.length>0),x=(h=!1)=>{if(h){const a=l.value+i.value;r.updateGenerateConfig({generateTextSource:a}),o.add({severity:"success",summary:"添加內容",detail:"已加入所有內容",life:3e3})}else{const a=l.value+s.text.value;r.updateGenerateConfig({generateTextSource:a}),o.add({severity:"success",summary:"添加內容",detail:"已加入選取內容",life:3e3})}};return(h,a)=>(f(),b("div",ke,[m("button",{type:"button",onClick:a[0]||(a[0]=v=>c.value=!0),class:"hover:text-main animate w-full text-left text-sm text-(--p-button-text-secondary-color)"},[a[4]||(a[4]=m("i",{class:"bi bi-book mr-1"},null,-1)),m("span",{textContent:R(p(n))},null,8,ge)]),C(p(K),{visible:c.value,"onUpdate:visible":a[3]||(a[3]=v=>c.value=v),header:p(n),class:"w-full! max-w-2/5 min-w-75"},{footer:g(()=>[m("div",Le,[C(p($),{severity:"secondary",label:"加入選取範圍",icon:"bi bi-copy",size:"small",disabled:!d.value,onClick:a[1]||(a[1]=v=>x(!1))},null,8,["disabled"]),C(p($),{label:"加入全文",icon:"bi bi-window-plus",size:"small",onClick:a[2]||(a[2]=v=>x(!0))})])]),default:g(()=>[m("p",{class:"whitespace-pre-wrap",textContent:R(p(i))},null,8,Ce)]),_:1},8,["visible","header"])]))}});export{Ee as default};
