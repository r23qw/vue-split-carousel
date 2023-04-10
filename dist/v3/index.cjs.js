(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".split-carousel[data-v-d65c36fb]{display:flex;width:100%;align-items:center;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.split-carousel__viewport[data-v-d65c36fb]{flex-grow:1;overflow:hidden;align-self:stretch;position:relative}.split-carousel__viewport--static[data-v-d65c36fb]{display:flex;align-items:center;justify-content:space-between}.split-carousel__viewport--static[data-v-d65c36fb] .split-carousel__item{align-self:stretch}.split-carousel__left[data-v-d65c36fb],.split-carousel__right[data-v-d65c36fb]{align-self:center;padding:5px}.split-carousel__left-button[data-v-d65c36fb],.split-carousel__right-button[data-v-d65c36fb]{height:30px;width:30px;text-align:center;line-height:30px;border:1px solid #dcdfe6;border-radius:50%;cursor:pointer;background-color:#fff;transition:border-color,background-color .15s;display:flex;align-items:center;justify-content:center}.split-carousel__left-button[data-v-d65c36fb]:hover,.split-carousel__right-button[data-v-d65c36fb]:hover{border-color:#c6e2ff;background-color:#ecf5ff}.split-carousel__left-button:hover .arrow[data-v-d65c36fb],.split-carousel__right-button:hover .arrow[data-v-d65c36fb]{border-top-color:#c6e2ff;border-left-color:#c6e2ff}.arrow[data-v-d65c36fb]{height:6px;width:6px;border:2px solid;transition:border-color .15s;border-top-color:#dcdfe6;border-left-color:#dcdfe6;border-right-color:transparent;border-bottom-color:transparent}.arrow.left[data-v-d65c36fb]{transform:translate(2px) rotate(-45deg)}.arrow.right[data-v-d65c36fb]{transform:translate(-2px) rotate(135deg)}.split-carousel__item[data-v-e39df7ff]{display:none;transition-property:transform;will-change:transfrom}.split-carousel__item--transition[data-v-e39df7ff]{position:absolute;left:0;top:0;height:100%}.split-carousel__item--stag[data-v-e39df7ff]{display:block}")),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const t=require("vue"),L=t.defineComponent({name:"SplitCarousel",props:{autoplay:{type:Boolean,default:!0},speed:{type:Number,default:500},interval:{type:Number,default:3e3},loop:{type:Boolean,default:!0},displayAmount:{type:Number,default:4},height:{type:[Number,String],default:80},itemWidth:{type:Number,default:120},pauseOnHover:{type:Boolean,default:!0},timingFunction:{type:String,default:"ease"},arrowVisible:{type:String,validator:e=>["default","always"].includes(e),default:"default"}},setup(e,i){const a=t.ref(null),o=t.ref([]),v=n=>o.value.push(n),f=n=>{const u=o.value.findIndex(k=>k.uid===n);u!==-1&&o.value.splice(u,1)},l=t.ref(0),p=t.computed(()=>{const n=(l.value-e.itemWidth*e.displayAmount)/(e.displayAmount-1),u=n+e.itemWidth;return{isStatic:o.value.length<=e.displayAmount,gapWidth:n,viewportWidth:l.value,itemWidth:e.itemWidth,itemBlockWidth:u,prependPosition:-1*u,appendPostion:l.value+n}}),d=t.ref(0),_=t.computed(()=>d.value+e.displayAmount===o.value.length),y=t.computed(()=>d.value===0),b=t.computed(()=>e.displayAmount+2>=o.value.length),m=t.reactive({resetting:!1,action:"next"}),I=t.computed(()=>{var T,U;const n=d.value,u=o.value,k=u.length-1,R=Array.from({length:e.displayAmount}).map((x,P)=>{var V;return(V=u[(n+P)%u.length])==null?void 0:V.uid}),S={prependUid:(T=u[y.value?k:n-1])==null?void 0:T.uid,stagUids:R,appendUid:(U=u[(n+e.displayAmount)%u.length])==null?void 0:U.uid};return S.prependUid===S.appendUid&&(m.action==="prev"&&(S.prependUid=-1),m.action==="next"&&(S.appendUid=-1)),S}),C=t.toRefs(e);t.provide("injectCarouselScope",{speed:C.speed,timingFunction:C.timingFunction,stag:I,reset:m,addItem:v,removeItem:f,layout:p});const h=t.computed(()=>!(e.arrowVisible==="default"&&(p.value.isStatic||y.value&&!e.loop))),$=t.computed(()=>!(e.arrowVisible==="default"&&(p.value.isStatic||_.value&&!e.loop))),w=n=>{if(p.value.isStatic||!e.loop&&(n==="next"&&_.value||n==="prev"&&y.value))return;const u=()=>{n==="next"&&(d.value=(d.value+1)%o.value.length),n==="prev"&&(d.value=y.value?o.value.length-1:d.value-1)};if(!b.value){u();return}m.resetting=!0,m.action=n,requestAnimationFrame(()=>{requestAnimationFrame(()=>{m.resetting=!1,u()})})};let s;const c=()=>{clearTimeout(s),w("next"),e.autoplay&&(s=setTimeout(()=>c(),e.interval))},r=()=>{clearTimeout(s),w("prev"),e.autoplay&&(s=setTimeout(()=>r(),e.interval))},g=()=>{e.autoplay&&e.pauseOnHover&&clearTimeout(s)},F=()=>{e.autoplay&&e.pauseOnHover&&(clearTimeout(s),s=setTimeout(()=>c(),e.interval))};t.watch(()=>e.autoplay,n=>{n?s=setTimeout(()=>c(),e.interval):clearTimeout(s)});const A=()=>{document.visibilityState==="hidden"&&clearTimeout(s),document.visibilityState==="visible"&&e.autoplay&&(s=setTimeout(()=>c(),e.interval))};return t.onMounted(()=>{t.nextTick(()=>{a.value!==null&&(l.value=a.value.clientWidth),e.autoplay&&(s=setTimeout(()=>c(),e.interval)),document.addEventListener("visibilitychange",A)})}),t.onUnmounted(()=>{clearTimeout(s),document.removeEventListener("visibilitychange",A)}),{prev:r,next:c,enter:g,leave:F,layout:p,viewportDOMRef:a,hasLeftSlot:i.slots.left!==void 0,hasRightSlot:i.slots.right!==void 0,isLeftArrowVisiable:h,isRightArrowVisiable:$,activeIndex:d,items:o}}});const E=(e,i)=>{const a=e.__vccOpts||e;for(const[o,v]of i)a[o]=v;return a},B=e=>(t.pushScopeId("data-v-d65c36fb"),e=e(),t.popScopeId(),e),O={key:1,class:"split-carousel__left-button"},j=B(()=>t.createElementVNode("div",{class:"arrow left"},null,-1)),q=[j],D={key:1,class:"split-carousel__right-button"},z=B(()=>t.createElementVNode("div",{class:"arrow right"},null,-1)),H=[z];function X(e,i,a,o,v,f){return t.openBlock(),t.createElementBlock("div",{class:"split-carousel",style:t.normalizeStyle({height:`${typeof e.height=="string"?e.height:`${e.height}px`}`})},[t.createElementVNode("div",{class:"split-carousel__left",onClick:i[0]||(i[0]=(...l)=>e.prev&&e.prev(...l))},[t.withDirectives(t.createElementVNode("div",null,[e.hasLeftSlot?t.renderSlot(e.$slots,"left",{key:0},void 0,!0):(t.openBlock(),t.createElementBlock("button",O,q))],512),[[t.vShow,e.isLeftArrowVisiable]])]),t.createElementVNode("div",{ref:"viewportDOMRef",class:t.normalizeClass(["split-carousel__viewport",{"split-carousel__viewport--static":e.layout.isStatic}]),onMouseenter:i[1]||(i[1]=(...l)=>e.enter&&e.enter(...l)),onMouseleave:i[2]||(i[2]=(...l)=>e.leave&&e.leave(...l))},[t.renderSlot(e.$slots,"default",{},void 0,!0)],34),t.createElementVNode("div",{class:"split-carousel__right",onClick:i[3]||(i[3]=(...l)=>e.next&&e.next(...l))},[t.withDirectives(t.createElementVNode("div",null,[e.hasRightSlot?t.renderSlot(e.$slots,"right",{key:0},void 0,!0):(t.openBlock(),t.createElementBlock("button",D,H))],512),[[t.vShow,e.isRightArrowVisiable]])])],4)}const N=E(L,[["render",X],["__scopeId","data-v-d65c36fb"]]),G=t.defineComponent({name:"SplitCarouselItem",setup(){let e=t.getCurrentInstance(),i=Math.random();const a=t.inject("injectCarouselScope"),o=t.ref(!1);if(!e||!a)throw new Error("SplitCarouselItem Must include by SplitCarousel");const{layout:v,stag:f,reset:l,addItem:p,removeItem:d}=a;t.onMounted(()=>{p({uid:i}),requestAnimationFrame(()=>{requestAnimationFrame(()=>{o.value=!0})})}),t.onUnmounted(()=>{d(i)});const _=t.computed(()=>i===f.value.prependUid),y=t.computed(()=>i===f.value.appendUid),b=t.computed(()=>f.value.stagUids.findIndex(h=>h===i)),m=t.computed(()=>b.value!==-1),I=t.computed(()=>!!(!o.value||l.resetting));return{itemStyle:t.computed(()=>{const{itemWidth:h,isStatic:$,itemBlockWidth:w,appendPostion:s,prependPosition:c}=v.value;let r={width:`${h}px`,transitionDuration:`${I.value?0:a.speed.value}ms`,transitionTimingFunction:a.timingFunction.value};if($)return r.display="block",r;if(m.value&&(r={...r,display:"block",transform:`translateX(${b.value*w}px)`}),_.value){const g=l.resetting&&l.action==="next";r={...r,display:"block",transform:`translateX(${g?s:c}px)`}}if(y.value){const g=l.resetting&&l.action==="prev";r={...r,display:"block",transform:`translateX(${g?c:s}px)`}}return r}),layout:v}}});function J(e,i,a,o,v,f){return t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(["split-carousel__item",{"split-carousel__item--transition":!e.layout.isStatic}]),style:t.normalizeStyle(e.itemStyle)},[t.renderSlot(e.$slots,"default",{},void 0,!0)],6)}const W=E(G,[["render",J],["__scopeId","data-v-e39df7ff"]]),M=(e,i)=>{const a=(i==null?void 0:i.prefix)||"";e.component(`${a}SplitCarousel`,N),e.component(`${a}SplitCarouselItem`,W)};exports.SplitCarousel=N;exports.SplitCarouselItem=W;exports.default=M;exports.install=M;
