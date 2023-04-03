(function(f,g){typeof exports=="object"&&typeof module<"u"?g(exports,require("vue"),require("@vue/composition-api/dist/vue-composition-api.mjs")):typeof define=="function"&&define.amd?define(["exports","vue","@vue/composition-api/dist/vue-composition-api.mjs"],g):(f=typeof globalThis<"u"?globalThis:f||self,g(f.VueSplitCarousel={},f.Vue,f.VueCompositionAPI))})(this,function(f,g,t){"use strict";function E(e){e=e||g,e&&!e.__composition_api_installed__&&e.use(t)}E(g),g.version;const B=t.defineComponent({name:"SplitCarousel",props:{autoplay:{type:Boolean,default:!0},speed:{type:Number,default:500},interval:{type:Number,default:3e3},loop:{type:Boolean,default:!0},displayAmount:{type:Number,default:4},height:{type:[Number,String],default:80},itemWidth:{type:Number,default:120},pauseOnHover:{type:Boolean,default:!0},timingFunction:{type:String,default:"ease"},arrowVisible:{type:String,validator:e=>["default","always"].includes(e),default:"default"}},setup(e,n){const i=t.ref(null),u=t.ref([]),m=l=>u.value.push(l),h=l=>{const o=u.value.findIndex(F=>F.uid===l);o!==-1&&u.value.splice(o,1)},d=t.ref(0),_=t.computed(()=>{const l=(d.value-e.itemWidth*e.displayAmount)/(e.displayAmount-1),o=l+e.itemWidth;return{isStatic:u.value.length<=e.displayAmount,gapWidth:l,viewportWidth:d.value,itemWidth:e.itemWidth,itemBlockWidth:o,prependPosition:-1*o,appendPostion:d.value+l}}),a=t.ref(0),c=t.computed(()=>a.value+e.displayAmount===u.value.length),y=t.computed(()=>a.value===0),S=t.computed(()=>e.displayAmount+2>=u.value.length),s=t.reactive({resetting:!1,action:"next"}),w=t.computed(()=>{var L,O;const l=a.value,o=u.value,F=o.length-1,I=Array.from({length:e.displayAmount}).map((V,P)=>{var q;return(q=o[(l+P)%o.length])==null?void 0:q.uid}),T={prependUid:(L=o[y.value?F:l-1])==null?void 0:L.uid,stagUids:I,appendUid:(O=o[(l+e.displayAmount)%o.length])==null?void 0:O.uid};return T.prependUid===T.appendUid&&(s.action==="prev"&&(T.prependUid=-1),s.action==="next"&&(T.appendUid=-1)),T}),b=t.toRefs(e);t.provide("injectCarouselScope",{speed:b.speed,timingFunction:b.timingFunction,stag:w,reset:s,addItem:m,removeItem:h,layout:_});const x=t.computed(()=>!(e.arrowVisible==="default"&&(_.value.isStatic||y.value&&!e.loop))),U=t.computed(()=>!(e.arrowVisible==="default"&&(_.value.isStatic||c.value&&!e.loop))),R=l=>{if(_.value.isStatic||!e.loop&&(l==="next"&&c.value||l==="prev"&&y.value))return;const o=()=>{l==="next"&&(a.value=(a.value+1)%u.value.length),l==="prev"&&(a.value=y.value?u.value.length-1:a.value-1)};if(!S.value){o();return}s.resetting=!0,s.action=l,requestAnimationFrame(()=>{requestAnimationFrame(()=>{s.resetting=!1,o()})})};let r;const p=()=>{clearTimeout(r),R("next"),e.autoplay&&(r=setTimeout(()=>p(),e.interval))},v=()=>{clearTimeout(r),R("prev"),e.autoplay&&(r=setTimeout(()=>v(),e.interval))},$=()=>{e.autoplay&&e.pauseOnHover&&clearTimeout(r)},A=()=>{e.autoplay&&e.pauseOnHover&&(clearTimeout(r),r=setTimeout(()=>p(),e.interval))};t.watch(()=>e.autoplay,l=>{l?r=setTimeout(()=>p(),e.interval):clearTimeout(r)});const C=()=>{document.visibilityState==="hidden"&&clearTimeout(r),document.visibilityState==="visible"&&e.autoplay&&(r=setTimeout(()=>p(),e.interval))};return t.onMounted(()=>{t.nextTick(()=>{i.value!==null&&(d.value=i.value.clientWidth),e.autoplay&&(r=setTimeout(()=>p(),e.interval)),document.addEventListener("visibilitychange",C)})}),t.onUnmounted(()=>{clearTimeout(r),document.removeEventListener("visibilitychange",C)}),{prev:v,next:p,enter:$,leave:A,layout:_,viewportDOMRef:i,hasLeftSlot:n.slots.left!==void 0,hasRightSlot:n.slots.right!==void 0,isLeftArrowVisiable:x,isRightArrowVisiable:U,activeIndex:a,items:u}}});var X=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"split-carousel",style:{height:`${typeof e.height=="string"?e.height:`${e.height}px`}`}},[i("div",{staticClass:"split-carousel__left",on:{click:e.prev}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.isLeftArrowVisiable,expression:"isLeftArrowVisiable"}]},[e.hasLeftSlot?e._t("left"):i("button",{staticClass:"split-carousel__left-button"},[i("div",{staticClass:"arrow left"})])],2)]),i("div",{ref:"viewportDOMRef",staticClass:"split-carousel__viewport",class:{"split-carousel__viewport--static":e.layout.isStatic},on:{mouseenter:e.enter,mouseleave:e.leave}},[e._t("default")],2),i("div",{staticClass:"split-carousel__right",on:{click:e.next}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.isRightArrowVisiable,expression:"isRightArrowVisiable"}]},[e.hasRightSlot?e._t("right"):i("button",{staticClass:"split-carousel__right-button"},[i("div",{staticClass:"arrow right"})])],2)])])},D=[];const ee="";function W(e,n,i,u,m,h,d,_){var a=typeof e=="function"?e.options:e;n&&(a.render=n,a.staticRenderFns=i,a._compiled=!0),u&&(a.functional=!0),h&&(a._scopeId="data-v-"+h);var c;if(d?(c=function(s){s=s||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!s&&typeof __VUE_SSR_CONTEXT__<"u"&&(s=__VUE_SSR_CONTEXT__),m&&m.call(this,s),s&&s._registeredComponents&&s._registeredComponents.add(d)},a._ssrRegister=c):m&&(c=_?function(){m.call(this,(a.functional?this.parent:this).$root.$options.shadowRoot)}:m),c)if(a.functional){a._injectStyles=c;var y=a.render;a.render=function(w,b){return c.call(b),y(w,b)}}else{var S=a.beforeCreate;a.beforeCreate=S?[].concat(S,c):[c]}return{exports:e,options:a}}const k={};var H=W(B,X,D,!1,z,"2c54b47a",null,null);function z(e){for(let n in k)this[n]=k[n]}const M=function(){return H.exports}(),G=t.defineComponent({name:"SplitCarouselItem",setup(){let e=t.getCurrentInstance(),n=Math.random();const i=t.inject("injectCarouselScope"),u=t.ref(!1);if(!e||!i)throw new Error("SplitCarouselItem Must include by SplitCarousel");const{layout:m,stag:h,reset:d,addItem:_,removeItem:a}=i;t.onMounted(()=>{_({uid:n}),requestAnimationFrame(()=>{requestAnimationFrame(()=>{u.value=!0})})}),t.onUnmounted(()=>{a(n)});const c=t.computed(()=>n===h.value.prependUid),y=t.computed(()=>n===h.value.appendUid),S=t.computed(()=>h.value.stagUids.findIndex(x=>x===n)),s=t.computed(()=>S.value!==-1),w=t.computed(()=>!!(!u.value||d.resetting));return{itemStyle:t.computed(()=>{const{itemWidth:x,isStatic:U,itemBlockWidth:R,appendPostion:r,prependPosition:p}=m.value;let v={width:`${x}px`,transitionDuration:`${w.value?0:i.speed.value}ms`,transitionTimingFunction:i.timingFunction.value};if(U)return v.display="block",v;if(s.value&&(v={...v,display:"block",transform:`translateX(${S.value*R}px)`}),c.value){const $=d.resetting&&d.action==="next";v={...v,display:"block",transform:`translateX(${$?r:p}px)`}}if(y.value){const $=d.resetting&&d.action==="prev";v={...v,display:"block",transform:`translateX(${$?p:r}px)`}}return v}),layout:m}}});var J=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"split-carousel__item",class:{"split-carousel__item--transition":!e.layout.isStatic},style:e.itemStyle},[e._t("default")],2)},K=[];const te="",N={};var Q=W(G,J,K,!1,Y,"10e86606",null,null);function Y(e){for(let n in N)this[n]=N[n]}const j=function(){return Q.exports}(),Z=(e,n)=>{const i=(n==null?void 0:n.prefix)||"";e.component(`${i}SplitCarousel`,M),e.component(`${i}SplitCarouselItem`,j)};f.SplitCarousel=M,f.SplitCarouselItem=j,f.install=Z,Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});
