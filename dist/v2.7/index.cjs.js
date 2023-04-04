"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const i=require("vue");i.util.warn;const L=i.defineComponent({name:"SplitCarousel",props:{autoplay:{type:Boolean,default:!0},speed:{type:Number,default:500},interval:{type:Number,default:3e3},loop:{type:Boolean,default:!0},displayAmount:{type:Number,default:4},height:{type:[Number,String],default:80},itemWidth:{type:Number,default:120},pauseOnHover:{type:Boolean,default:!0},timingFunction:{type:String,default:"ease"},arrowVisible:{type:String,validator:e=>["default","always"].includes(e),default:"default"}},setup(e,t){const n=i.ref(null),r=i.ref([]),v=l=>r.value.push(l),_=l=>{const u=r.value.findIndex(T=>T.uid===l);u!==-1&&r.value.splice(u,1)},d=i.ref(0),m=i.computed(()=>{const l=(d.value-e.itemWidth*e.displayAmount)/(e.displayAmount-1),u=l+e.itemWidth;return{isStatic:r.value.length<=e.displayAmount,gapWidth:l,viewportWidth:d.value,itemWidth:e.itemWidth,itemBlockWidth:u,prependPosition:-1*u,appendPostion:d.value+l}}),a=i.ref(0),c=i.computed(()=>a.value+e.displayAmount===r.value.length),h=i.computed(()=>a.value===0),g=i.computed(()=>e.displayAmount+2>=r.value.length),s=i.reactive({resetting:!1,action:"next"}),S=i.computed(()=>{var $,R;const l=a.value,u=r.value,T=u.length-1,N=Array.from({length:e.displayAmount}).map((P,M)=>{var U;return(U=u[(l+M)%u.length])==null?void 0:U.uid}),w={prependUid:($=u[h.value?T:l-1])==null?void 0:$.uid,stagUids:N,appendUid:(R=u[(l+e.displayAmount)%u.length])==null?void 0:R.uid};return w.prependUid===w.appendUid&&(s.action==="prev"&&(w.prependUid=-1),s.action==="next"&&(w.appendUid=-1)),w}),y=i.toRefs(e);i.provide("injectCarouselScope",{speed:y.speed,timingFunction:y.timingFunction,stag:S,reset:s,addItem:v,removeItem:_,layout:m});const C=i.computed(()=>!(e.arrowVisible==="default"&&(m.value.isStatic||h.value&&!e.loop))),A=i.computed(()=>!(e.arrowVisible==="default"&&(m.value.isStatic||c.value&&!e.loop))),x=l=>{if(m.value.isStatic||!e.loop&&(l==="next"&&c.value||l==="prev"&&h.value))return;const u=()=>{l==="next"&&(a.value=(a.value+1)%r.value.length),l==="prev"&&(a.value=h.value?r.value.length-1:a.value-1)};if(!g.value){u();return}s.resetting=!0,s.action=l,requestAnimationFrame(()=>{requestAnimationFrame(()=>{s.resetting=!1,u()})})};let o;const p=()=>{clearTimeout(o),x("next"),e.autoplay&&(o=setTimeout(()=>p(),e.interval))},f=()=>{clearTimeout(o),x("prev"),e.autoplay&&(o=setTimeout(()=>f(),e.interval))},b=()=>{e.autoplay&&e.pauseOnHover&&clearTimeout(o)},k=()=>{e.autoplay&&e.pauseOnHover&&(clearTimeout(o),o=setTimeout(()=>p(),e.interval))};i.watch(()=>e.autoplay,l=>{l?o=setTimeout(()=>p(),e.interval):clearTimeout(o)});const I=()=>{document.visibilityState==="hidden"&&clearTimeout(o),document.visibilityState==="visible"&&e.autoplay&&(o=setTimeout(()=>p(),e.interval))};return i.onMounted(()=>{i.nextTick(()=>{n.value!==null&&(d.value=n.value.clientWidth),e.autoplay&&(o=setTimeout(()=>p(),e.interval)),document.addEventListener("visibilitychange",I)})}),i.onUnmounted(()=>{clearTimeout(o),document.removeEventListener("visibilitychange",I)}),{prev:f,next:p,enter:b,leave:k,layout:m,viewportDOMRef:n,hasLeftSlot:t.slots.left!==void 0,hasRightSlot:t.slots.right!==void 0,isLeftArrowVisiable:C,isRightArrowVisiable:A,activeIndex:a,items:r}}});function F(e,t,n,r,v,_,d,m){var a=typeof e=="function"?e.options:e;t&&(a.render=t,a.staticRenderFns=n,a._compiled=!0),r&&(a.functional=!0),_&&(a._scopeId="data-v-"+_);var c;if(d?(c=function(s){s=s||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!s&&typeof __VUE_SSR_CONTEXT__<"u"&&(s=__VUE_SSR_CONTEXT__),v&&v.call(this,s),s&&s._registeredComponents&&s._registeredComponents.add(d)},a._ssrRegister=c):v&&(c=m?function(){v.call(this,(a.functional?this.parent:this).$root.$options.shadowRoot)}:v),c)if(a.functional){a._injectStyles=c;var h=a.render;a.render=function(S,y){return c.call(y),h(S,y)}}else{var g=a.beforeCreate;a.beforeCreate=g?[].concat(g,c):[c]}return{exports:e,options:a}}var O=function(){var t=this,n=t._self._c;return t._self._setupProxy,n("div",{staticClass:"split-carousel",style:{height:`${typeof t.height=="string"?t.height:`${t.height}px`}`}},[n("div",{staticClass:"split-carousel__left",on:{click:t.prev}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isLeftArrowVisiable,expression:"isLeftArrowVisiable"}]},[t.hasLeftSlot?t._t("left"):n("button",{staticClass:"split-carousel__left-button"},[n("div",{staticClass:"arrow left"})])],2)]),n("div",{ref:"viewportDOMRef",staticClass:"split-carousel__viewport",class:{"split-carousel__viewport--static":t.layout.isStatic},on:{mouseenter:t.enter,mouseleave:t.leave}},[t._t("default")],2),n("div",{staticClass:"split-carousel__right",on:{click:t.next}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isRightArrowVisiable,expression:"isRightArrowVisiable"}]},[t.hasRightSlot?t._t("right"):n("button",{staticClass:"split-carousel__right-button"},[n("div",{staticClass:"arrow right"})])],2)])])},q=[],B=F(L,O,q,!1,null,"d65c36fb",null,null);const V=B.exports,X=i.defineComponent({name:"SplitCarouselItem",setup(){let e=i.getCurrentInstance(),t=Math.random();const n=i.inject("injectCarouselScope"),r=i.ref(!1);if(!e||!n)throw new Error("SplitCarouselItem Must include by SplitCarousel");const{layout:v,stag:_,reset:d,addItem:m,removeItem:a}=n;i.onMounted(()=>{m({uid:t}),requestAnimationFrame(()=>{requestAnimationFrame(()=>{r.value=!0})})}),i.onUnmounted(()=>{a(t)});const c=i.computed(()=>t===_.value.prependUid),h=i.computed(()=>t===_.value.appendUid),g=i.computed(()=>_.value.stagUids.findIndex(C=>C===t)),s=i.computed(()=>g.value!==-1),S=i.computed(()=>!!(!r.value||d.resetting));return{itemStyle:i.computed(()=>{const{itemWidth:C,isStatic:A,itemBlockWidth:x,appendPostion:o,prependPosition:p}=v.value;let f={width:`${C}px`,transitionDuration:`${S.value?0:n.speed.value}ms`,transitionTimingFunction:n.timingFunction.value};if(A)return f.display="block",f;if(s.value&&(f={...f,display:"block",transform:`translateX(${g.value*x}px)`}),c.value){const b=d.resetting&&d.action==="next";f={...f,display:"block",transform:`translateX(${b?o:p}px)`}}if(h.value){const b=d.resetting&&d.action==="prev";f={...f,display:"block",transform:`translateX(${b?p:o}px)`}}return f}),layout:v}}});var E=function(){var t=this,n=t._self._c;return t._self._setupProxy,n("div",{staticClass:"split-carousel__item",class:{"split-carousel__item--transition":!t.layout.isStatic},style:t.itemStyle},[t._t("default")],2)},j=[],D=F(X,E,j,!1,null,"e39df7ff",null,null);const W=D.exports,H=(e,t)=>{const n=(t==null?void 0:t.prefix)||"";e.component(`${n}SplitCarousel`,V),e.component(`${n}SplitCarouselItem`,W)};exports.SplitCarousel=V;exports.SplitCarouselItem=W;exports.default=H;
