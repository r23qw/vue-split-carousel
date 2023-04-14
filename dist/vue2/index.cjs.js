(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".split-carousel[data-v-f812babe]{display:flex;width:100%;align-items:center;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.split-carousel__viewport[data-v-f812babe]{flex-grow:1;overflow:hidden;align-self:stretch;position:relative}.split-carousel__viewport--static[data-v-f812babe]{display:flex;align-items:center;justify-content:space-between}.split-carousel__viewport--static[data-v-f812babe] :deep(.split-carousel__item){align-self:stretch}.split-carousel__left[data-v-f812babe],.split-carousel__right[data-v-f812babe]{align-self:center;padding:5px}.split-carousel__left-button[data-v-f812babe],.split-carousel__right-button[data-v-f812babe]{height:30px;width:30px;text-align:center;line-height:30px;border:1px solid #dcdfe6;border-radius:50%;cursor:pointer;background-color:#fff;transition:border-color,background-color .15s;display:flex;align-items:center;justify-content:center}.split-carousel__left-button[data-v-f812babe]:hover,.split-carousel__right-button[data-v-f812babe]:hover{border-color:#c6e2ff;background-color:#ecf5ff}.split-carousel__left-button:hover .arrow[data-v-f812babe],.split-carousel__right-button:hover .arrow[data-v-f812babe]{border-top-color:#c6e2ff;border-left-color:#c6e2ff}.arrow[data-v-f812babe]{height:6px;width:6px;border:2px solid;transition:border-color .15s;border-top-color:#dcdfe6;border-left-color:#dcdfe6;border-right-color:transparent;border-bottom-color:transparent}.arrow.left[data-v-f812babe]{transform:translate(2px) rotate(-45deg)}.arrow.right[data-v-f812babe]{transform:translate(-2px) rotate(135deg)}.split-carousel__item[data-v-be8f1d2c]{display:none;transition-property:transform;will-change:transfrom}.split-carousel__item--transition[data-v-be8f1d2c]{position:absolute;left:0;top:0;height:100%}.split-carousel__item--stag[data-v-be8f1d2c]{display:block}")),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const A=require("vue"),t=require("@vue/composition-api/dist/vue-composition-api.mjs");function B(e){e=e||A,e&&!e.__composition_api_installed__&&e.use(t)}B(A);A.version;const E=t.defineComponent({name:"SplitCarousel",props:{autoplay:{type:Boolean,default:!0},speed:{type:Number,default:500},interval:{type:Number,default:3e3},loop:{type:Boolean,default:!0},displayAmount:{type:Number,default:4},height:{type:[Number,String],default:80},itemWidth:{type:Number,default:120},pauseOnHover:{type:Boolean,default:!0},timingFunction:{type:String,default:"ease"},arrowVisible:{type:String,validator:e=>["default","always"].includes(e),default:"default"}},setup(e,a){const n=t.ref(null),u=t.ref([]),v=s=>u.value.push(s),f=s=>{const d=u.value.findIndex($=>$.uid===s);d!==-1&&u.value.splice(d,1)},m=t.ref(0),p=t.computed(()=>{const s=(m.value-e.itemWidth*e.displayAmount)/(e.displayAmount-1),d=s+e.itemWidth;return{isStatic:u.value.length<=e.displayAmount,gapWidth:s,viewportWidth:m.value,itemWidth:e.itemWidth,itemBlockWidth:d,prependPosition:-1*d,appendPostion:m.value+s}}),i=t.ref(0),c=t.computed(()=>i.value+e.displayAmount===u.value.length),_=t.computed(()=>i.value===0),g=t.computed(()=>e.displayAmount+2>=u.value.length),l=t.reactive({resetting:!1,action:"next"}),C=t.computed(()=>{var I,R;const s=i.value,d=u.value,$=d.length-1,O=Array.from({length:e.displayAmount}).map((q,j)=>{var U;return(U=d[(s+j)%d.length])==null?void 0:U.uid}),b={prependUid:(I=d[_.value?$:s-1])==null?void 0:I.uid,stagUids:O,appendUid:(R=d[(s+e.displayAmount)%d.length])==null?void 0:R.uid};return b.prependUid===b.appendUid&&(l.action==="prev"&&(b.prependUid=-1),l.action==="next"&&(b.appendUid=-1)),b}),h=t.toRefs(e);t.provide("injectCarouselScope",{speed:h.speed,timingFunction:h.timingFunction,stag:C,reset:l,addItem:v,removeItem:f,layout:p});const w=t.computed(()=>!(e.arrowVisible==="default"&&(p.value.isStatic||_.value&&!e.loop))),x=t.computed(()=>!(e.arrowVisible==="default"&&(p.value.isStatic||c.value&&!e.loop))),S=s=>{if(p.value.isStatic||!e.loop&&(s==="next"&&c.value||s==="prev"&&_.value))return;const d=()=>{s==="next"&&(i.value=(i.value+1)%u.value.length),s==="prev"&&(i.value=_.value?u.value.length-1:i.value-1)};if(!g.value){d();return}l.resetting=!0,l.action=s,requestAnimationFrame(()=>{requestAnimationFrame(()=>{l.resetting=!1,d()})})};let o;const r=()=>{clearTimeout(o),S("next"),e.autoplay&&(o=setTimeout(()=>r(),e.interval))},y=()=>{clearTimeout(o),S("prev"),e.autoplay&&(o=setTimeout(()=>y(),e.interval))},P=()=>{e.autoplay&&e.pauseOnHover&&clearTimeout(o)},L=()=>{e.autoplay&&e.pauseOnHover&&(clearTimeout(o),o=setTimeout(()=>r(),e.interval))};t.watch(()=>e.autoplay,s=>{s?o=setTimeout(()=>r(),e.interval):clearTimeout(o)});const T=()=>{document.visibilityState==="hidden"&&clearTimeout(o),document.visibilityState==="visible"&&e.autoplay&&(o=setTimeout(()=>r(),e.interval))};return t.onMounted(()=>{t.nextTick(()=>{n.value!==null&&(m.value=n.value.clientWidth),e.autoplay&&(o=setTimeout(()=>r(),e.interval)),document.addEventListener("visibilitychange",T)})}),t.onUnmounted(()=>{clearTimeout(o),document.removeEventListener("visibilitychange",T)}),{prev:y,next:r,enter:P,leave:L,layout:p,viewportDOMRef:n,hasLeftSlot:a.slots.left!==void 0,hasRightSlot:a.slots.right!==void 0,isLeftArrowVisiable:w,isRightArrowVisiable:x,activeIndex:i,items:u}}});var X=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"split-carousel",style:{height:`${typeof e.height=="string"?e.height:`${e.height}px`}`}},[n("div",{staticClass:"split-carousel__left",on:{click:e.prev}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.isLeftArrowVisiable,expression:"isLeftArrowVisiable"}]},[e.hasLeftSlot?e._t("left"):n("button",{staticClass:"split-carousel__left-button"},[n("div",{staticClass:"arrow left"})])],2)]),n("div",{ref:"viewportDOMRef",staticClass:"split-carousel__viewport",class:{"split-carousel__viewport--static":e.layout.isStatic},on:{mouseenter:e.enter,mouseleave:e.leave}},[e._t("default")],2),n("div",{staticClass:"split-carousel__right",on:{click:e.next}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.isRightArrowVisiable,expression:"isRightArrowVisiable"}]},[e.hasRightSlot?e._t("right"):n("button",{staticClass:"split-carousel__right-button"},[n("div",{staticClass:"arrow right"})])],2)])])},D=[];function W(e,a,n,u,v,f,m,p){var i=typeof e=="function"?e.options:e;a&&(i.render=a,i.staticRenderFns=n,i._compiled=!0),u&&(i.functional=!0),f&&(i._scopeId="data-v-"+f);var c;if(m?(c=function(l){l=l||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!l&&typeof __VUE_SSR_CONTEXT__<"u"&&(l=__VUE_SSR_CONTEXT__),v&&v.call(this,l),l&&l._registeredComponents&&l._registeredComponents.add(m)},i._ssrRegister=c):v&&(c=p?function(){v.call(this,(i.functional?this.parent:this).$root.$options.shadowRoot)}:v),c)if(i.functional){i._injectStyles=c;var _=i.render;i.render=function(C,h){return c.call(h),_(C,h)}}else{var g=i.beforeCreate;i.beforeCreate=g?[].concat(g,c):[c]}return{exports:e,options:i}}const V={};var H=W(E,X,D,!1,z,"f812babe",null,null);function z(e){for(let a in V)this[a]=V[a]}const k=function(){return H.exports}(),G=t.defineComponent({name:"SplitCarouselItem",setup(){let e=Math.random();const a=t.inject("injectCarouselScope"),n=t.ref(!1),{layout:u,stag:v,reset:f,addItem:m,removeItem:p}=a;t.onMounted(()=>{m({uid:e}),requestAnimationFrame(()=>{requestAnimationFrame(()=>{n.value=!0})})}),t.onUnmounted(()=>{p(e)});const i=t.computed(()=>e===v.value.prependUid),c=t.computed(()=>e===v.value.appendUid),_=t.computed(()=>v.value.stagUids.findIndex(h=>h===e)),g=t.computed(()=>_.value!==-1),l=t.computed(()=>!!(!n.value||f.resetting));return{itemStyle:t.computed(()=>{const{itemWidth:h,isStatic:w,itemBlockWidth:x,appendPostion:S,prependPosition:o}=u.value;let r={width:`${h}px`,transitionDuration:`${l.value?0:a.speed.value}ms`,transitionTimingFunction:a.timingFunction.value};if(w)return r.display="block",r;if(g.value&&(r={...r,display:"block",transform:`translateX(${_.value*x}px)`}),i.value){const y=f.resetting&&f.action==="next";r={...r,display:"block",transform:`translateX(${y?S:o}px)`}}if(c.value){const y=f.resetting&&f.action==="prev";r={...r,display:"block",transform:`translateX(${y?o:S}px)`}}return r}),layout:u}}});var J=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"split-carousel__item",class:{"split-carousel__item--transition":!e.layout.isStatic},style:e.itemStyle},[e._t("default")],2)},K=[];const F={};var Q=W(G,J,K,!1,Y,"be8f1d2c",null,null);function Y(e){for(let a in F)this[a]=F[a]}const M=function(){return Q.exports}(),N=(e,a)=>{const n=(a==null?void 0:a.prefix)||"";e.component(`${n}SplitCarousel`,k),e.component(`${n}SplitCarouselItem`,M)};exports.SplitCarousel=k;exports.SplitCarouselItem=M;exports.default=N;exports.install=N;
