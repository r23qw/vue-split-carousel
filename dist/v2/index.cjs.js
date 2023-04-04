(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".split-carousel[data-v-2c54b47a]{display:flex;width:100%;align-items:center;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.split-carousel__viewport[data-v-2c54b47a]{flex-grow:1;overflow:hidden;align-self:stretch;position:relative}.split-carousel__viewport--static[data-v-2c54b47a]{display:flex;align-items:center;justify-content:space-between}.split-carousel__viewport--static[data-v-2c54b47a] :deep(.split-carousel__item){align-self:stretch}.split-carousel__left[data-v-2c54b47a],.split-carousel__right[data-v-2c54b47a]{align-self:center;padding:5px}.split-carousel__left-button[data-v-2c54b47a],.split-carousel__right-button[data-v-2c54b47a]{height:30px;width:30px;text-align:center;line-height:30px;border:1px solid #dcdfe6;border-radius:50%;cursor:pointer;background-color:#fff;transition:border-color,background-color .15s;display:flex;align-items:center;justify-content:center}.split-carousel__left-button[data-v-2c54b47a]:hover,.split-carousel__right-button[data-v-2c54b47a]:hover{border-color:#c6e2ff;background-color:#ecf5ff}.split-carousel__left-button:hover .arrow[data-v-2c54b47a],.split-carousel__right-button:hover .arrow[data-v-2c54b47a]{border-top-color:#c6e2ff;border-left-color:#c6e2ff}.arrow[data-v-2c54b47a]{height:6px;width:6px;border:2px solid;transition:border-color .15s;border-top-color:#dcdfe6;border-left-color:#dcdfe6;border-right-color:transparent;border-bottom-color:transparent}.arrow.left[data-v-2c54b47a]{transform:translate(2px) rotate(-45deg)}.arrow.right[data-v-2c54b47a]{transform:translate(-2px) rotate(135deg)}.split-carousel__item[data-v-10e86606]{display:none;transition-property:transform;will-change:transfrom}.split-carousel__item--transition[data-v-10e86606]{position:absolute;left:0;top:0;height:100%}.split-carousel__item--stag[data-v-10e86606]{display:block}")),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const I=require("vue"),t=require("@vue/composition-api/dist/vue-composition-api.mjs");function E(e){e=e||I,e&&!e.__composition_api_installed__&&e.use(t)}E(I);I.version;const j=t.defineComponent({name:"SplitCarousel",props:{autoplay:{type:Boolean,default:!0},speed:{type:Number,default:500},interval:{type:Number,default:3e3},loop:{type:Boolean,default:!0},displayAmount:{type:Number,default:4},height:{type:[Number,String],default:80},itemWidth:{type:Number,default:120},pauseOnHover:{type:Boolean,default:!0},timingFunction:{type:String,default:"ease"},arrowVisible:{type:String,validator:e=>["default","always"].includes(e),default:"default"}},setup(e,n){const i=t.ref(null),r=t.ref([]),f=s=>r.value.push(s),_=s=>{const u=r.value.findIndex(A=>A.uid===s);u!==-1&&r.value.splice(u,1)},c=t.ref(0),m=t.computed(()=>{const s=(c.value-e.itemWidth*e.displayAmount)/(e.displayAmount-1),u=s+e.itemWidth;return{isStatic:r.value.length<=e.displayAmount,gapWidth:s,viewportWidth:c.value,itemWidth:e.itemWidth,itemBlockWidth:u,prependPosition:-1*u,appendPostion:c.value+s}}),a=t.ref(0),d=t.computed(()=>a.value+e.displayAmount===r.value.length),h=t.computed(()=>a.value===0),g=t.computed(()=>e.displayAmount+2>=r.value.length),l=t.reactive({resetting:!1,action:"next"}),S=t.computed(()=>{var R,U;const s=a.value,u=r.value,A=u.length-1,L=Array.from({length:e.displayAmount}).map((O,q)=>{var V;return(V=u[(s+q)%u.length])==null?void 0:V.uid}),w={prependUid:(R=u[h.value?A:s-1])==null?void 0:R.uid,stagUids:L,appendUid:(U=u[(s+e.displayAmount)%u.length])==null?void 0:U.uid};return w.prependUid===w.appendUid&&(l.action==="prev"&&(w.prependUid=-1),l.action==="next"&&(w.appendUid=-1)),w}),y=t.toRefs(e);t.provide("injectCarouselScope",{speed:y.speed,timingFunction:y.timingFunction,stag:S,reset:l,addItem:f,removeItem:_,layout:m});const C=t.computed(()=>!(e.arrowVisible==="default"&&(m.value.isStatic||h.value&&!e.loop))),$=t.computed(()=>!(e.arrowVisible==="default"&&(m.value.isStatic||d.value&&!e.loop))),x=s=>{if(m.value.isStatic||!e.loop&&(s==="next"&&d.value||s==="prev"&&h.value))return;const u=()=>{s==="next"&&(a.value=(a.value+1)%r.value.length),s==="prev"&&(a.value=h.value?r.value.length-1:a.value-1)};if(!g.value){u();return}l.resetting=!0,l.action=s,requestAnimationFrame(()=>{requestAnimationFrame(()=>{l.resetting=!1,u()})})};let o;const p=()=>{clearTimeout(o),x("next"),e.autoplay&&(o=setTimeout(()=>p(),e.interval))},v=()=>{clearTimeout(o),x("prev"),e.autoplay&&(o=setTimeout(()=>v(),e.interval))},b=()=>{e.autoplay&&e.pauseOnHover&&clearTimeout(o)},P=()=>{e.autoplay&&e.pauseOnHover&&(clearTimeout(o),o=setTimeout(()=>p(),e.interval))};t.watch(()=>e.autoplay,s=>{s?o=setTimeout(()=>p(),e.interval):clearTimeout(o)});const T=()=>{document.visibilityState==="hidden"&&clearTimeout(o),document.visibilityState==="visible"&&e.autoplay&&(o=setTimeout(()=>p(),e.interval))};return t.onMounted(()=>{t.nextTick(()=>{i.value!==null&&(c.value=i.value.clientWidth),e.autoplay&&(o=setTimeout(()=>p(),e.interval)),document.addEventListener("visibilitychange",T)})}),t.onUnmounted(()=>{clearTimeout(o),document.removeEventListener("visibilitychange",T)}),{prev:v,next:p,enter:b,leave:P,layout:m,viewportDOMRef:i,hasLeftSlot:n.slots.left!==void 0,hasRightSlot:n.slots.right!==void 0,isLeftArrowVisiable:C,isRightArrowVisiable:$,activeIndex:a,items:r}}});var B=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"split-carousel",style:{height:`${typeof e.height=="string"?e.height:`${e.height}px`}`}},[i("div",{staticClass:"split-carousel__left",on:{click:e.prev}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.isLeftArrowVisiable,expression:"isLeftArrowVisiable"}]},[e.hasLeftSlot?e._t("left"):i("button",{staticClass:"split-carousel__left-button"},[i("div",{staticClass:"arrow left"})])],2)]),i("div",{ref:"viewportDOMRef",staticClass:"split-carousel__viewport",class:{"split-carousel__viewport--static":e.layout.isStatic},on:{mouseenter:e.enter,mouseleave:e.leave}},[e._t("default")],2),i("div",{staticClass:"split-carousel__right",on:{click:e.next}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.isRightArrowVisiable,expression:"isRightArrowVisiable"}]},[e.hasRightSlot?e._t("right"):i("button",{staticClass:"split-carousel__right-button"},[i("div",{staticClass:"arrow right"})])],2)])])},X=[];function M(e,n,i,r,f,_,c,m){var a=typeof e=="function"?e.options:e;n&&(a.render=n,a.staticRenderFns=i,a._compiled=!0),r&&(a.functional=!0),_&&(a._scopeId="data-v-"+_);var d;if(c?(d=function(l){l=l||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!l&&typeof __VUE_SSR_CONTEXT__<"u"&&(l=__VUE_SSR_CONTEXT__),f&&f.call(this,l),l&&l._registeredComponents&&l._registeredComponents.add(c)},a._ssrRegister=d):f&&(d=m?function(){f.call(this,(a.functional?this.parent:this).$root.$options.shadowRoot)}:f),d)if(a.functional){a._injectStyles=d;var h=a.render;a.render=function(S,y){return d.call(y),h(S,y)}}else{var g=a.beforeCreate;a.beforeCreate=g?[].concat(g,d):[d]}return{exports:e,options:a}}const F={};var D=M(j,B,X,!1,H,"2c54b47a",null,null);function H(e){for(let n in F)this[n]=F[n]}const k=function(){return D.exports}(),z=t.defineComponent({name:"SplitCarouselItem",setup(){let e=t.getCurrentInstance(),n=Math.random();const i=t.inject("injectCarouselScope"),r=t.ref(!1);if(!e||!i)throw new Error("SplitCarouselItem Must include by SplitCarousel");const{layout:f,stag:_,reset:c,addItem:m,removeItem:a}=i;t.onMounted(()=>{m({uid:n}),requestAnimationFrame(()=>{requestAnimationFrame(()=>{r.value=!0})})}),t.onUnmounted(()=>{a(n)});const d=t.computed(()=>n===_.value.prependUid),h=t.computed(()=>n===_.value.appendUid),g=t.computed(()=>_.value.stagUids.findIndex(C=>C===n)),l=t.computed(()=>g.value!==-1),S=t.computed(()=>!!(!r.value||c.resetting));return{itemStyle:t.computed(()=>{const{itemWidth:C,isStatic:$,itemBlockWidth:x,appendPostion:o,prependPosition:p}=f.value;let v={width:`${C}px`,transitionDuration:`${S.value?0:i.speed.value}ms`,transitionTimingFunction:i.timingFunction.value};if($)return v.display="block",v;if(l.value&&(v={...v,display:"block",transform:`translateX(${g.value*x}px)`}),d.value){const b=c.resetting&&c.action==="next";v={...v,display:"block",transform:`translateX(${b?o:p}px)`}}if(h.value){const b=c.resetting&&c.action==="prev";v={...v,display:"block",transform:`translateX(${b?p:o}px)`}}return v}),layout:f}}});var G=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"split-carousel__item",class:{"split-carousel__item--transition":!e.layout.isStatic},style:e.itemStyle},[e._t("default")],2)},J=[];const W={};var K=M(z,G,J,!1,Q,"10e86606",null,null);function Q(e){for(let n in W)this[n]=W[n]}const N=function(){return K.exports}(),Y=(e,n)=>{const i=(n==null?void 0:n.prefix)||"";e.component(`${i}SplitCarousel`,k),e.component(`${i}SplitCarouselItem`,N)};exports.SplitCarousel=k;exports.SplitCarouselItem=N;exports.default=Y;
