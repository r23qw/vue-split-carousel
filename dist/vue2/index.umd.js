(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".split-carousel[data-v-2c54b47a]{display:flex;width:100%;align-items:center;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.split-carousel__viewport[data-v-2c54b47a]{flex-grow:1;overflow:hidden;align-self:stretch;position:relative}.split-carousel__viewport--static[data-v-2c54b47a]{display:flex;align-items:center;justify-content:space-between}.split-carousel__viewport--static[data-v-2c54b47a] :deep(.split-carousel__item){align-self:stretch}.split-carousel__left[data-v-2c54b47a],.split-carousel__right[data-v-2c54b47a]{align-self:center;padding:5px}.split-carousel__left-button[data-v-2c54b47a],.split-carousel__right-button[data-v-2c54b47a]{height:30px;width:30px;text-align:center;line-height:30px;border:1px solid #dcdfe6;border-radius:50%;cursor:pointer;background-color:#fff;transition:border-color,background-color .15s;display:flex;align-items:center;justify-content:center}.split-carousel__left-button[data-v-2c54b47a]:hover,.split-carousel__right-button[data-v-2c54b47a]:hover{border-color:#c6e2ff;background-color:#ecf5ff}.split-carousel__left-button:hover .arrow[data-v-2c54b47a],.split-carousel__right-button:hover .arrow[data-v-2c54b47a]{border-top-color:#c6e2ff;border-left-color:#c6e2ff}.arrow[data-v-2c54b47a]{height:6px;width:6px;border:2px solid;transition:border-color .15s;border-top-color:#dcdfe6;border-left-color:#dcdfe6;border-right-color:transparent;border-bottom-color:transparent}.arrow.left[data-v-2c54b47a]{transform:translate(2px) rotate(-45deg)}.arrow.right[data-v-2c54b47a]{transform:translate(-2px) rotate(135deg)}.split-carousel__item[data-v-10e86606]{display:none;transition-property:transform;will-change:transfrom}.split-carousel__item--transition[data-v-10e86606]{position:absolute;left:0;top:0;height:100%}.split-carousel__item--stag[data-v-10e86606]{display:block}")),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
(function(f,g){typeof exports=="object"&&typeof module<"u"?g(exports,require("vue"),require("@vue/composition-api/dist/vue-composition-api.mjs")):typeof define=="function"&&define.amd?define(["exports","vue","@vue/composition-api/dist/vue-composition-api.mjs"],g):(f=typeof globalThis<"u"?globalThis:f||self,g(f.VueSplitCarousel={},f.Vue,f.VueCompositionAPI))})(this,function(f,g,t){"use strict";function B(e){e=e||g,e&&!e.__composition_api_installed__&&e.use(t)}B(g),g.version;const X=t.defineComponent({name:"SplitCarousel",props:{autoplay:{type:Boolean,default:!0},speed:{type:Number,default:500},interval:{type:Number,default:3e3},loop:{type:Boolean,default:!0},displayAmount:{type:Number,default:4},height:{type:[Number,String],default:80},itemWidth:{type:Number,default:120},pauseOnHover:{type:Boolean,default:!0},timingFunction:{type:String,default:"ease"},arrowVisible:{type:String,validator:e=>["default","always"].includes(e),default:"default"}},setup(e,n){const i=t.ref(null),u=t.ref([]),m=l=>u.value.push(l),p=l=>{const o=u.value.findIndex(F=>F.uid===l);o!==-1&&u.value.splice(o,1)},d=t.ref(0),_=t.computed(()=>{const l=(d.value-e.itemWidth*e.displayAmount)/(e.displayAmount-1),o=l+e.itemWidth;return{isStatic:u.value.length<=e.displayAmount,gapWidth:l,viewportWidth:d.value,itemWidth:e.itemWidth,itemBlockWidth:o,prependPosition:-1*o,appendPostion:d.value+l}}),a=t.ref(0),c=t.computed(()=>a.value+e.displayAmount===u.value.length),y=t.computed(()=>a.value===0),S=t.computed(()=>e.displayAmount+2>=u.value.length),s=t.reactive({resetting:!1,action:"next"}),w=t.computed(()=>{var O,q;const l=a.value,o=u.value,F=o.length-1,I=Array.from({length:e.displayAmount}).map((V,P)=>{var E;return(E=o[(l+P)%o.length])==null?void 0:E.uid}),T={prependUid:(O=o[y.value?F:l-1])==null?void 0:O.uid,stagUids:I,appendUid:(q=o[(l+e.displayAmount)%o.length])==null?void 0:q.uid};return T.prependUid===T.appendUid&&(s.action==="prev"&&(T.prependUid=-1),s.action==="next"&&(T.appendUid=-1)),T}),b=t.toRefs(e);t.provide("injectCarouselScope",{speed:b.speed,timingFunction:b.timingFunction,stag:w,reset:s,addItem:m,removeItem:p,layout:_});const $=t.computed(()=>!(e.arrowVisible==="default"&&(_.value.isStatic||y.value&&!e.loop))),U=t.computed(()=>!(e.arrowVisible==="default"&&(_.value.isStatic||c.value&&!e.loop))),R=l=>{if(_.value.isStatic||!e.loop&&(l==="next"&&c.value||l==="prev"&&y.value))return;const o=()=>{l==="next"&&(a.value=(a.value+1)%u.value.length),l==="prev"&&(a.value=y.value?u.value.length-1:a.value-1)};if(!S.value){o();return}s.resetting=!0,s.action=l,requestAnimationFrame(()=>{requestAnimationFrame(()=>{s.resetting=!1,o()})})};let r;const h=()=>{clearTimeout(r),R("next"),e.autoplay&&(r=setTimeout(()=>h(),e.interval))},v=()=>{clearTimeout(r),R("prev"),e.autoplay&&(r=setTimeout(()=>v(),e.interval))},x=()=>{e.autoplay&&e.pauseOnHover&&clearTimeout(r)},A=()=>{e.autoplay&&e.pauseOnHover&&(clearTimeout(r),r=setTimeout(()=>h(),e.interval))};t.watch(()=>e.autoplay,l=>{l?r=setTimeout(()=>h(),e.interval):clearTimeout(r)});const L=()=>{document.visibilityState==="hidden"&&clearTimeout(r),document.visibilityState==="visible"&&e.autoplay&&(r=setTimeout(()=>h(),e.interval))};return t.onMounted(()=>{t.nextTick(()=>{i.value!==null&&(d.value=i.value.clientWidth),e.autoplay&&(r=setTimeout(()=>h(),e.interval)),document.addEventListener("visibilitychange",L)})}),t.onUnmounted(()=>{clearTimeout(r),document.removeEventListener("visibilitychange",L)}),{prev:v,next:h,enter:x,leave:A,layout:_,viewportDOMRef:i,hasLeftSlot:n.slots.left!==void 0,hasRightSlot:n.slots.right!==void 0,isLeftArrowVisiable:$,isRightArrowVisiable:U,activeIndex:a,items:u}}});var D=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"split-carousel",style:{height:`${typeof e.height=="string"?e.height:`${e.height}px`}`}},[i("div",{staticClass:"split-carousel__left",on:{click:e.prev}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.isLeftArrowVisiable,expression:"isLeftArrowVisiable"}]},[e.hasLeftSlot?e._t("left"):i("button",{staticClass:"split-carousel__left-button"},[i("div",{staticClass:"arrow left"})])],2)]),i("div",{ref:"viewportDOMRef",staticClass:"split-carousel__viewport",class:{"split-carousel__viewport--static":e.layout.isStatic},on:{mouseenter:e.enter,mouseleave:e.leave}},[e._t("default")],2),i("div",{staticClass:"split-carousel__right",on:{click:e.next}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.isRightArrowVisiable,expression:"isRightArrowVisiable"}]},[e.hasRightSlot?e._t("right"):i("button",{staticClass:"split-carousel__right-button"},[i("div",{staticClass:"arrow right"})])],2)])])},H=[];const ee="";function W(e,n,i,u,m,p,d,_){var a=typeof e=="function"?e.options:e;n&&(a.render=n,a.staticRenderFns=i,a._compiled=!0),u&&(a.functional=!0),p&&(a._scopeId="data-v-"+p);var c;if(d?(c=function(s){s=s||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!s&&typeof __VUE_SSR_CONTEXT__<"u"&&(s=__VUE_SSR_CONTEXT__),m&&m.call(this,s),s&&s._registeredComponents&&s._registeredComponents.add(d)},a._ssrRegister=c):m&&(c=_?function(){m.call(this,(a.functional?this.parent:this).$root.$options.shadowRoot)}:m),c)if(a.functional){a._injectStyles=c;var y=a.render;a.render=function(w,b){return c.call(b),y(w,b)}}else{var S=a.beforeCreate;a.beforeCreate=S?[].concat(S,c):[c]}return{exports:e,options:a}}const M={};var z=W(X,D,H,!1,G,"2c54b47a",null,null);function G(e){for(let n in M)this[n]=M[n]}const k=function(){return z.exports}(),J=t.defineComponent({name:"SplitCarouselItem",setup(){let e=t.getCurrentInstance(),n=Math.random();const i=t.inject("injectCarouselScope"),u=t.ref(!1);if(!e||!i)throw new Error("SplitCarouselItem Must include by SplitCarousel");const{layout:m,stag:p,reset:d,addItem:_,removeItem:a}=i;t.onMounted(()=>{_({uid:n}),requestAnimationFrame(()=>{requestAnimationFrame(()=>{u.value=!0})})}),t.onUnmounted(()=>{a(n)});const c=t.computed(()=>n===p.value.prependUid),y=t.computed(()=>n===p.value.appendUid),S=t.computed(()=>p.value.stagUids.findIndex($=>$===n)),s=t.computed(()=>S.value!==-1),w=t.computed(()=>!!(!u.value||d.resetting));return{itemStyle:t.computed(()=>{const{itemWidth:$,isStatic:U,itemBlockWidth:R,appendPostion:r,prependPosition:h}=m.value;let v={width:`${$}px`,transitionDuration:`${w.value?0:i.speed.value}ms`,transitionTimingFunction:i.timingFunction.value};if(U)return v.display="block",v;if(s.value&&(v={...v,display:"block",transform:`translateX(${S.value*R}px)`}),c.value){const x=d.resetting&&d.action==="next";v={...v,display:"block",transform:`translateX(${x?r:h}px)`}}if(y.value){const x=d.resetting&&d.action==="prev";v={...v,display:"block",transform:`translateX(${x?h:r}px)`}}return v}),layout:m}}});var K=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"split-carousel__item",class:{"split-carousel__item--transition":!e.layout.isStatic},style:e.itemStyle},[e._t("default")],2)},Q=[];const te="",N={};var Y=W(J,K,Q,!1,Z,"10e86606",null,null);function Z(e){for(let n in N)this[n]=N[n]}const j=function(){return Y.exports}(),C=(e,n)=>{const i=(n==null?void 0:n.prefix)||"";e.component(`${i}SplitCarousel`,k),e.component(`${i}SplitCarouselItem`,j)};f.SplitCarousel=k,f.SplitCarouselItem=j,f.default=C,f.install=C,Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});