(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".split-carousel[data-v-d65c36fb]{display:flex;width:100%;align-items:center;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.split-carousel__viewport[data-v-d65c36fb]{flex-grow:1;overflow:hidden;align-self:stretch;position:relative}.split-carousel__viewport--static[data-v-d65c36fb]{display:flex;align-items:center;justify-content:space-between}.split-carousel__viewport--static[data-v-d65c36fb] .split-carousel__item{align-self:stretch}.split-carousel__left[data-v-d65c36fb],.split-carousel__right[data-v-d65c36fb]{align-self:center;padding:5px}.split-carousel__left-button[data-v-d65c36fb],.split-carousel__right-button[data-v-d65c36fb]{height:30px;width:30px;text-align:center;line-height:30px;border:1px solid #dcdfe6;border-radius:50%;cursor:pointer;background-color:#fff;transition:border-color,background-color .15s;display:flex;align-items:center;justify-content:center}.split-carousel__left-button[data-v-d65c36fb]:hover,.split-carousel__right-button[data-v-d65c36fb]:hover{border-color:#c6e2ff;background-color:#ecf5ff}.split-carousel__left-button:hover .arrow[data-v-d65c36fb],.split-carousel__right-button:hover .arrow[data-v-d65c36fb]{border-top-color:#c6e2ff;border-left-color:#c6e2ff}.arrow[data-v-d65c36fb]{height:6px;width:6px;border:2px solid;transition:border-color .15s;border-top-color:#dcdfe6;border-left-color:#dcdfe6;border-right-color:transparent;border-bottom-color:transparent}.arrow.left[data-v-d65c36fb]{transform:translate(2px) rotate(-45deg)}.arrow.right[data-v-d65c36fb]{transform:translate(-2px) rotate(135deg)}.split-carousel__item[data-v-e39df7ff]{display:none;transition-property:transform;will-change:transfrom}.split-carousel__item--transition[data-v-e39df7ff]{position:absolute;left:0;top:0;height:100%}.split-carousel__item--stag[data-v-e39df7ff]{display:block}")),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
(function(c,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],t):(c=typeof globalThis<"u"?globalThis:c||self,t(c.VueSplitCarousel={},c.Vue))})(this,function(c,t){"use strict";const F=t.defineComponent({name:"SplitCarousel",props:{autoplay:{type:Boolean,default:!0},speed:{type:Number,default:500},interval:{type:Number,default:3e3},loop:{type:Boolean,default:!0},displayAmount:{type:Number,default:4},height:{type:[Number,String],default:80},itemWidth:{type:Number,default:120},pauseOnHover:{type:Boolean,default:!0},timingFunction:{type:String,default:"ease"},arrowVisible:{type:String,validator:e=>["default","always"].includes(e),default:"default"}},setup(e,i){const a=t.ref(null),o=t.ref([]),f=n=>o.value.push(n),h=n=>{const r=o.value.findIndex(A=>A.uid===n);r!==-1&&o.value.splice(r,1)},l=t.ref(0),v=t.computed(()=>{const n=(l.value-e.itemWidth*e.displayAmount)/(e.displayAmount-1),r=n+e.itemWidth;return{isStatic:o.value.length<=e.displayAmount,gapWidth:n,viewportWidth:l.value,itemWidth:e.itemWidth,itemBlockWidth:r,prependPosition:-1*r,appendPostion:l.value+n}}),u=t.ref(0),b=t.computed(()=>u.value+e.displayAmount===o.value.length),y=t.computed(()=>u.value===0),w=t.computed(()=>e.displayAmount+2>=o.value.length),p=t.reactive({resetting:!1,action:"next"}),I=t.computed(()=>{var N,W;const n=u.value,r=o.value,A=r.length-1,H=Array.from({length:e.displayAmount}).map((X,G)=>{var M;return(M=r[(n+G)%r.length])==null?void 0:M.uid}),_={prependUid:(N=r[y.value?A:n-1])==null?void 0:N.uid,stagUids:H,appendUid:(W=r[(n+e.displayAmount)%r.length])==null?void 0:W.uid};return _.prependUid===_.appendUid&&(p.action==="prev"&&(_.prependUid=-1),p.action==="next"&&(_.appendUid=-1)),_}),$=t.toRefs(e);t.provide("injectCarouselScope",{speed:$.speed,timingFunction:$.timingFunction,stag:I,reset:p,addItem:f,removeItem:h,layout:v});const g=t.computed(()=>!(e.arrowVisible==="default"&&(v.value.isStatic||y.value&&!e.loop))),k=t.computed(()=>!(e.arrowVisible==="default"&&(v.value.isStatic||b.value&&!e.loop))),C=n=>{if(v.value.isStatic||!e.loop&&(n==="next"&&b.value||n==="prev"&&y.value))return;const r=()=>{n==="next"&&(u.value=(u.value+1)%o.value.length),n==="prev"&&(u.value=y.value?o.value.length-1:u.value-1)};if(!w.value){r();return}p.resetting=!0,p.action=n,requestAnimationFrame(()=>{requestAnimationFrame(()=>{p.resetting=!1,r()})})};let s;const m=()=>{clearTimeout(s),C("next"),e.autoplay&&(s=setTimeout(()=>m(),e.interval))},d=()=>{clearTimeout(s),C("prev"),e.autoplay&&(s=setTimeout(()=>d(),e.interval))},S=()=>{e.autoplay&&e.pauseOnHover&&clearTimeout(s)},z=()=>{e.autoplay&&e.pauseOnHover&&(clearTimeout(s),s=setTimeout(()=>m(),e.interval))};t.watch(()=>e.autoplay,n=>{n?s=setTimeout(()=>m(),e.interval):clearTimeout(s)});const B=()=>{document.visibilityState==="hidden"&&clearTimeout(s),document.visibilityState==="visible"&&e.autoplay&&(s=setTimeout(()=>m(),e.interval))};return t.onMounted(()=>{t.nextTick(()=>{a.value!==null&&(l.value=a.value.clientWidth),e.autoplay&&(s=setTimeout(()=>m(),e.interval)),document.addEventListener("visibilitychange",B)})}),t.onUnmounted(()=>{clearTimeout(s),document.removeEventListener("visibilitychange",B)}),{prev:d,next:m,enter:S,leave:z,layout:v,viewportDOMRef:a,hasLeftSlot:i.slots.left!==void 0,hasRightSlot:i.slots.right!==void 0,isLeftArrowVisiable:g,isRightArrowVisiable:k,activeIndex:u,items:o}}}),J="",T=(e,i)=>{const a=e.__vccOpts||e;for(const[o,f]of i)a[o]=f;return a},V=e=>(t.pushScopeId("data-v-d65c36fb"),e=e(),t.popScopeId(),e),R={key:1,class:"split-carousel__left-button"},x=[V(()=>t.createElementVNode("div",{class:"arrow left"},null,-1))],P={key:1,class:"split-carousel__right-button"},L=[V(()=>t.createElementVNode("div",{class:"arrow right"},null,-1))];function O(e,i,a,o,f,h){return t.openBlock(),t.createElementBlock("div",{class:"split-carousel",style:t.normalizeStyle({height:`${typeof e.height=="string"?e.height:`${e.height}px`}`})},[t.createElementVNode("div",{class:"split-carousel__left",onClick:i[0]||(i[0]=(...l)=>e.prev&&e.prev(...l))},[t.withDirectives(t.createElementVNode("div",null,[e.hasLeftSlot?t.renderSlot(e.$slots,"left",{key:0},void 0,!0):(t.openBlock(),t.createElementBlock("button",R,x))],512),[[t.vShow,e.isLeftArrowVisiable]])]),t.createElementVNode("div",{ref:"viewportDOMRef",class:t.normalizeClass(["split-carousel__viewport",{"split-carousel__viewport--static":e.layout.isStatic}]),onMouseenter:i[1]||(i[1]=(...l)=>e.enter&&e.enter(...l)),onMouseleave:i[2]||(i[2]=(...l)=>e.leave&&e.leave(...l))},[t.renderSlot(e.$slots,"default",{},void 0,!0)],34),t.createElementVNode("div",{class:"split-carousel__right",onClick:i[3]||(i[3]=(...l)=>e.next&&e.next(...l))},[t.withDirectives(t.createElementVNode("div",null,[e.hasRightSlot?t.renderSlot(e.$slots,"right",{key:0},void 0,!0):(t.openBlock(),t.createElementBlock("button",P,L))],512),[[t.vShow,e.isRightArrowVisiable]])])],4)}const U=T(F,[["render",O],["__scopeId","data-v-d65c36fb"]]),j=t.defineComponent({name:"SplitCarouselItem",setup(){let e=t.getCurrentInstance(),i=Math.random();const a=t.inject("injectCarouselScope"),o=t.ref(!1);if(!e||!a)throw new Error("SplitCarouselItem Must include by SplitCarousel");const{layout:f,stag:h,reset:l,addItem:v,removeItem:u}=a;t.onMounted(()=>{v({uid:i}),requestAnimationFrame(()=>{requestAnimationFrame(()=>{o.value=!0})})}),t.onUnmounted(()=>{u(i)});const b=t.computed(()=>i===h.value.prependUid),y=t.computed(()=>i===h.value.appendUid),w=t.computed(()=>h.value.stagUids.findIndex(g=>g===i)),p=t.computed(()=>w.value!==-1),I=t.computed(()=>!!(!o.value||l.resetting));return{itemStyle:t.computed(()=>{const{itemWidth:g,isStatic:k,itemBlockWidth:C,appendPostion:s,prependPosition:m}=f.value;let d={width:`${g}px`,transitionDuration:`${I.value?0:a.speed.value}ms`,transitionTimingFunction:a.timingFunction.value};if(k)return d.display="block",d;if(p.value&&(d={...d,display:"block",transform:`translateX(${w.value*C}px)`}),b.value){const S=l.resetting&&l.action==="next";d={...d,display:"block",transform:`translateX(${S?s:m}px)`}}if(y.value){const S=l.resetting&&l.action==="prev";d={...d,display:"block",transform:`translateX(${S?m:s}px)`}}return d}),layout:f}}}),Y="";function q(e,i,a,o,f,h){return t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(["split-carousel__item",{"split-carousel__item--transition":!e.layout.isStatic}]),style:t.normalizeStyle(e.itemStyle)},[t.renderSlot(e.$slots,"default",{},void 0,!0)],6)}const E=T(j,[["render",q],["__scopeId","data-v-e39df7ff"]]),D=(e,i)=>{const a=(i==null?void 0:i.prefix)||"";e.component(`${a}SplitCarousel`,U),e.component(`${a}SplitCarouselItem`,E)};c.SplitCarousel=U,c.SplitCarouselItem=E,c.default=D,Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
