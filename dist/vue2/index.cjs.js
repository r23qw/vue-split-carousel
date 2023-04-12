(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".split-carousel[data-v-95170b3e]{display:flex;width:100%;align-items:center;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.split-carousel__viewport[data-v-95170b3e]{flex-grow:1;overflow:hidden;align-self:stretch;position:relative}.split-carousel__viewport--static[data-v-95170b3e]{display:flex;align-items:center;justify-content:space-between}.split-carousel__viewport--static[data-v-95170b3e] :deep(.split-carousel__item){align-self:stretch}.split-carousel__left[data-v-95170b3e],.split-carousel__right[data-v-95170b3e]{align-self:center;padding:5px}.split-carousel__left-button[data-v-95170b3e],.split-carousel__right-button[data-v-95170b3e]{height:30px;width:30px;text-align:center;line-height:30px;border:1px solid #dcdfe6;border-radius:50%;cursor:pointer;background-color:#fff;transition:border-color,background-color .15s;display:flex;align-items:center;justify-content:center}.split-carousel__left-button[data-v-95170b3e]:hover,.split-carousel__right-button[data-v-95170b3e]:hover{border-color:#c6e2ff;background-color:#ecf5ff}.split-carousel__left-button:hover .arrow[data-v-95170b3e],.split-carousel__right-button:hover .arrow[data-v-95170b3e]{border-top-color:#c6e2ff;border-left-color:#c6e2ff}.arrow[data-v-95170b3e]{height:6px;width:6px;border:2px solid;transition:border-color .15s;border-top-color:#dcdfe6;border-left-color:#dcdfe6;border-right-color:transparent;border-bottom-color:transparent}.arrow.left[data-v-95170b3e]{transform:translate(2px) rotate(-45deg)}.arrow.right[data-v-95170b3e]{transform:translate(-2px) rotate(135deg)}.split-carousel__item[data-v-10e86606]{display:none;transition-property:transform;will-change:transfrom}.split-carousel__item--transition[data-v-10e86606]{position:absolute;left:0;top:0;height:100%}.split-carousel__item--stag[data-v-10e86606]{display:block}")),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const I=require("vue"),t=require("@vue/composition-api/dist/vue-composition-api.mjs");function B(e){e=e||I,e&&!e.__composition_api_installed__&&e.use(t)}B(I);I.version;const X=t.defineComponent({name:"SplitCarousel",props:{autoplay:{type:Boolean,default:!0},speed:{type:Number,default:500},interval:{type:Number,default:3e3},loop:{type:Boolean,default:!0},displayAmount:{type:Number,default:4},height:{type:[Number,String],default:80},itemWidth:{type:Number,default:120},pauseOnHover:{type:Boolean,default:!0},timingFunction:{type:String,default:"ease"},arrowVisible:{type:String,validator:e=>["default","always"].includes(e),default:"default"}},setup(e,n){const i=t.ref(null),r=t.ref([]),f=s=>r.value.push(s),_=s=>{const u=r.value.findIndex(A=>A.uid===s);u!==-1&&r.value.splice(u,1)},d=t.ref(0),m=t.computed(()=>{const s=(d.value-e.itemWidth*e.displayAmount)/(e.displayAmount-1),u=s+e.itemWidth;return{isStatic:r.value.length<=e.displayAmount,gapWidth:s,viewportWidth:d.value,itemWidth:e.itemWidth,itemBlockWidth:u,prependPosition:-1*u,appendPostion:d.value+s}}),a=t.ref(0),c=t.computed(()=>a.value+e.displayAmount===r.value.length),h=t.computed(()=>a.value===0),g=t.computed(()=>e.displayAmount+2>=r.value.length),l=t.reactive({resetting:!1,action:"next"}),S=t.computed(()=>{var U,M;const s=a.value,u=r.value,A=u.length-1,q=Array.from({length:e.displayAmount}).map((E,j)=>{var V;return(V=u[(s+j)%u.length])==null?void 0:V.uid}),w={prependUid:(U=u[h.value?A:s-1])==null?void 0:U.uid,stagUids:q,appendUid:(M=u[(s+e.displayAmount)%u.length])==null?void 0:M.uid};return w.prependUid===w.appendUid&&(l.action==="prev"&&(w.prependUid=-1),l.action==="next"&&(w.appendUid=-1)),w}),y=t.toRefs(e);t.provide("injectCarouselScope",{speed:y.speed,timingFunction:y.timingFunction,stag:S,reset:l,addItem:f,removeItem:_,layout:m});const C=t.computed(()=>!(e.arrowVisible==="default"&&(m.value.isStatic||h.value&&!e.loop))),$=t.computed(()=>!(e.arrowVisible==="default"&&(m.value.isStatic||c.value&&!e.loop))),x=s=>{if(m.value.isStatic||!e.loop&&(s==="next"&&c.value||s==="prev"&&h.value))return;const u=()=>{s==="next"&&(a.value=(a.value+1)%r.value.length),s==="prev"&&(a.value=h.value?r.value.length-1:a.value-1)};if(!g.value){u();return}l.resetting=!0,l.action=s,requestAnimationFrame(()=>{requestAnimationFrame(()=>{l.resetting=!1,u()})})};let o;const p=()=>{clearTimeout(o),x("next"),e.autoplay&&(o=setTimeout(()=>p(),e.interval))},v=()=>{clearTimeout(o),x("prev"),e.autoplay&&(o=setTimeout(()=>v(),e.interval))},b=()=>{e.autoplay&&e.pauseOnHover&&clearTimeout(o)},O=()=>{e.autoplay&&e.pauseOnHover&&(clearTimeout(o),o=setTimeout(()=>p(),e.interval))};t.watch(()=>e.autoplay,s=>{s?o=setTimeout(()=>p(),e.interval):clearTimeout(o)});const T=()=>{document.visibilityState==="hidden"&&clearTimeout(o),document.visibilityState==="visible"&&e.autoplay&&(o=setTimeout(()=>p(),e.interval))};t.onMounted(()=>{t.nextTick(()=>{i.value!==null&&(d.value=i.value.clientWidth),e.autoplay&&(o=setTimeout(()=>p(),e.interval)),document.addEventListener("visibilitychange",T)})}),t.onUnmounted(()=>{clearTimeout(o),document.removeEventListener("visibilitychange",T)});const R=t.ref(!1);return t.onMounted(()=>{R.value=!0}),{prev:v,next:p,enter:b,leave:O,layout:m,viewportDOMRef:i,hasLeftSlot:n.slots.left!==void 0,hasRightSlot:n.slots.right!==void 0,isLeftArrowVisiable:C,isRightArrowVisiable:$,activeIndex:a,items:r,isMounted:R}}});var D=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"split-carousel",style:{height:`${typeof e.height=="string"?e.height:`${e.height}px`}`,visibility:e.isMounted?"visible":"hidden"}},[i("div",{staticClass:"split-carousel__left",on:{click:e.prev}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.isLeftArrowVisiable,expression:"isLeftArrowVisiable"}]},[e.hasLeftSlot?e._t("left"):i("button",{staticClass:"split-carousel__left-button"},[i("div",{staticClass:"arrow left"})])],2)]),i("div",{ref:"viewportDOMRef",staticClass:"split-carousel__viewport",class:{"split-carousel__viewport--static":e.layout.isStatic},on:{mouseenter:e.enter,mouseleave:e.leave}},[e._t("default")],2),i("div",{staticClass:"split-carousel__right",on:{click:e.next}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.isRightArrowVisiable,expression:"isRightArrowVisiable"}]},[e.hasRightSlot?e._t("right"):i("button",{staticClass:"split-carousel__right-button"},[i("div",{staticClass:"arrow right"})])],2)])])},H=[];function k(e,n,i,r,f,_,d,m){var a=typeof e=="function"?e.options:e;n&&(a.render=n,a.staticRenderFns=i,a._compiled=!0),r&&(a.functional=!0),_&&(a._scopeId="data-v-"+_);var c;if(d?(c=function(l){l=l||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!l&&typeof __VUE_SSR_CONTEXT__<"u"&&(l=__VUE_SSR_CONTEXT__),f&&f.call(this,l),l&&l._registeredComponents&&l._registeredComponents.add(d)},a._ssrRegister=c):f&&(c=m?function(){f.call(this,(a.functional?this.parent:this).$root.$options.shadowRoot)}:f),c)if(a.functional){a._injectStyles=c;var h=a.render;a.render=function(S,y){return c.call(y),h(S,y)}}else{var g=a.beforeCreate;a.beforeCreate=g?[].concat(g,c):[c]}return{exports:e,options:a}}const F={};var z=k(X,D,H,!1,G,"95170b3e",null,null);function G(e){for(let n in F)this[n]=F[n]}const N=function(){return z.exports}(),J=t.defineComponent({name:"SplitCarouselItem",setup(){let e=t.getCurrentInstance(),n=Math.random();const i=t.inject("injectCarouselScope"),r=t.ref(!1);if(!e||!i)throw new Error("SplitCarouselItem Must include by SplitCarousel");const{layout:f,stag:_,reset:d,addItem:m,removeItem:a}=i;t.onMounted(()=>{m({uid:n}),requestAnimationFrame(()=>{requestAnimationFrame(()=>{r.value=!0})})}),t.onUnmounted(()=>{a(n)});const c=t.computed(()=>n===_.value.prependUid),h=t.computed(()=>n===_.value.appendUid),g=t.computed(()=>_.value.stagUids.findIndex(C=>C===n)),l=t.computed(()=>g.value!==-1),S=t.computed(()=>!!(!r.value||d.resetting));return{itemStyle:t.computed(()=>{const{itemWidth:C,isStatic:$,itemBlockWidth:x,appendPostion:o,prependPosition:p}=f.value;let v={width:`${C}px`,transitionDuration:`${S.value?0:i.speed.value}ms`,transitionTimingFunction:i.timingFunction.value};if($)return v.display="block",v;if(l.value&&(v={...v,display:"block",transform:`translateX(${g.value*x}px)`}),c.value){const b=d.resetting&&d.action==="next";v={...v,display:"block",transform:`translateX(${b?o:p}px)`}}if(h.value){const b=d.resetting&&d.action==="prev";v={...v,display:"block",transform:`translateX(${b?p:o}px)`}}return v}),layout:f}}});var K=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"split-carousel__item",class:{"split-carousel__item--transition":!e.layout.isStatic},style:e.itemStyle},[e._t("default")],2)},Q=[];const W={};var Y=k(J,K,Q,!1,Z,"10e86606",null,null);function Z(e){for(let n in W)this[n]=W[n]}const P=function(){return Y.exports}(),L=(e,n)=>{const i=(n==null?void 0:n.prefix)||"";e.component(`${i}SplitCarousel`,N),e.component(`${i}SplitCarouselItem`,P)};exports.SplitCarousel=N;exports.SplitCarouselItem=P;exports.default=L;exports.install=L;
