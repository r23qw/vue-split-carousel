!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vueSplitCarousel=e():t.vueSplitCarousel=e()}(window,function(){return i={},r.m=n=[function(t,e){t=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)},function(t,e,n){t.exports=!n(2)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var d=n(0),m=n(15),v=n(29),y=n(30),g=n(8),x="prototype",b=function(t,e,n){var i,r,o,s=t&b.F,a=t&b.G,u=t&b.S,c=t&b.P,l=t&b.B,f=a?d:u?d[e]||(d[e]={}):(d[e]||{})[x],p=a?m:m[e]||(m[e]={}),h=p[x]||(p[x]={});for(i in n=a?e:n)r=((o=!s&&f&&void 0!==f[i])?f:n)[i],o=l&&o?g(r,d):c&&"function"==typeof r?g(Function.call,r):r,f&&y(f,i,r,t&b.U),p[i]!=r&&v(p,i,o),c&&h[i]!=r&&(h[i]=r)};d.core=m,b.F=1,b.G=2,b.S=4,b.P=8,b.B=16,b.W=32,b.U=64,b.R=128,t.exports=b},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var i=n(3);t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var o=n(40);t.exports=function(i,r,t){if(o(i),void 0===r)return i;switch(t){case 1:return function(t){return i.call(r,t)};case 2:return function(t,e){return i.call(r,t,e)};case 3:return function(t,e,n){return i.call(r,t,e,n)}}return function(){return i.apply(r,arguments)}}},function(t,e,n){var i=n(10),r=n(11);t.exports=function(t){return i(r(t))}},function(t,e,n){var i=n(6);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==i(t)?t.split(""):Object(t)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(3);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var i=n(25),r=Math.min;t.exports=function(t){return 0<t?r(i(t),9007199254740991):0}},function(t,e,n){var i=n(15),r=n(0),o="__core-js_shared__",s=r[o]||(r[o]={});(t.exports=function(t,e){return s[t]||(s[t]=void 0!==e?e:{})})("versions",[]).push({version:i.version,mode:n(43)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,e){t=t.exports={version:"2.6.12"};"number"==typeof __e&&(__e=t)},function(t,e){var n=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+i).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var i=n(7),r=n(22),o=n(12),s=Object.defineProperty;e.f=n(1)?Object.defineProperty:function(t,e,n){if(i(t),e=o(e,!0),i(n),r)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var i=n(20),r=n(21),o=n(9),s=n(12),a=n(5),u=n(22),c=Object.getOwnPropertyDescriptor;e.f=n(1)?c:function(t,e){if(t=o(t),e=s(e,!0),u)try{return c(t,e)}catch(t){}if(a(t,e))return r(!i.f.call(t,e),t[e])}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){t.exports=!n(1)&&!n(2)(function(){return 7!=Object.defineProperty(n(23)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var i=n(3),r=n(0).document,o=i(r)&&i(r.createElement);t.exports=function(t){return o?r.createElement(t):{}}},function(t,e,n){var s=n(5),a=n(9),u=n(42)(!1),c=n(27)("IE_PROTO");t.exports=function(t,e){var n,i=a(t),r=0,o=[];for(n in i)n!=c&&s(i,n)&&o.push(n);for(;e.length>r;)s(i,n=e[r++])&&(~u(o,n)||o.push(n));return o}},function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(0<t?i:n)(t)}},function(t,e,n){var i=n(25),r=Math.max,o=Math.min;t.exports=function(t,e){return(t=i(t))<0?r(t+e,0):o(t,e)}},function(t,e,n){var i=n(14)("keys"),r=n(16);t.exports=function(t){return i[t]||(i[t]=r(t))}},function(t,e,n){var o=n(4),i=n(11),s=n(2),a=n(31),n="["+a+"]",r=RegExp("^"+n+n+"*"),u=RegExp(n+n+"*$"),n=function(t,e,n){var i={},r=s(function(){return!!a[t]()||"​"!="​"[t]()}),e=i[t]=r?e(c):a[t];n&&(i[n]=e),o(o.P+o.F*r,"String",i)},c=n.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(r,"")),t=2&e?t.replace(u,""):t};t.exports=n},function(t,e,n){var i=n(18),r=n(21);t.exports=n(1)?function(t,e,n){return i.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var o=n(0),s=n(29),a=n(5),u=n(16)("src"),i=n(44),r="toString",c=(""+i).split(r);n(15).inspectSource=function(t){return i.call(t)},(t.exports=function(t,e,n,i){var r="function"==typeof n;r&&(a(n,"name")||s(n,"name",e)),t[e]!==n&&(r&&(a(n,u)||s(n,u,t[e]?""+t[e]:c.join(String(e)))),t===o?t[e]=n:i?t[e]?t[e]=n:s(t,e,n):(delete t[e],s(t,e,n)))})(Function.prototype,r,function(){return"function"==typeof this&&this[u]||i.call(this)})},function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,e,n){var i=n(24),r=n(17);t.exports=Object.keys||function(t){return i(t,r)}},function(t,e,n){n=n(0).document;t.exports=n&&n.documentElement},function(t,e,n){var i=n(11);t.exports=function(t){return Object(i(t))}},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";function i(t){if("string"==typeof(e=c(t,!1))&&2<e.length){var e,n,i,r=(e=g?e.trim():h(e,3)).charCodeAt(0);if(43===r||45===r){if(88===(t=e.charCodeAt(2))||120===t)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+e}for(var o,s=e.slice(2),a=0,u=s.length;a<u;a++)if((o=s.charCodeAt(a))<48||i<o)return NaN;return parseInt(s,n)}}return+e}var r=n(0),o=n(5),s=n(6),a=n(38),c=n(12),u=n(2),l=n(41).f,f=n(19).f,p=n(18).f,h=n(28).trim,d="Number",m=b=r[d],v=b.prototype,y=s(n(45)(v))==d,g="trim"in String.prototype;if(!b(" 0o1")||!b("0b1")||b("+0x1")){for(var x,b=function(t){var t=arguments.length<1?0:t,e=this;return e instanceof b&&(y?u(function(){v.valueOf.call(e)}):s(e)!=d)?a(new m(i(t)),e,b):i(t)},S=n(1)?l(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;S.length>w;w++)o(m,x=S[w])&&!o(b,x)&&p(b,x,f(m,x));(b.prototype=v).constructor=b,n(30)(r,d,b)}},function(t,e,n){var r=n(3),o=n(39).set;t.exports=function(t,e,n){var i,e=e.constructor;return e!==n&&"function"==typeof e&&(i=e.prototype)!==n.prototype&&r(i)&&o&&o(t,i),t}},function(t,e,r){function o(t,e){if(i(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")}var n=r(3),i=r(7);t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,i){try{(i=r(8)(Function.call,r(19).f(Object.prototype,"__proto__").set,2))(t,[]),n=!(t instanceof Array)}catch(t){n=!0}return function(t,e){return o(t,e),n?t.__proto__=e:i(t,e),t}}({},!1):void 0),check:o}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var i=n(24),r=n(17).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,r)}},function(t,e,n){var u=n(9),c=n(13),l=n(26);t.exports=function(a){return function(t,e,n){var i,r=u(t),o=c(r.length),s=l(n,o);if(a&&e!=e){for(;s<o;)if((i=r[s++])!=i)return!0}else for(;s<o;s++)if((a||s in r)&&r[s]===e)return a||s||0;return!a&&-1}}},function(t,e){t.exports=!1},function(t,e,n){t.exports=n(14)("native-function-to-string",Function.toString)},function(t,e,n){function i(){}var r=n(7),o=n(46),s=n(17),a=n(27)("IE_PROTO"),u="prototype",c=function(){var t=n(23)("iframe"),e=s.length;for(t.style.display="none",n(33).appendChild(t),t.src="javascript:",(t=t.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;e--;)delete c[u][s[e]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(i[u]=r(t),n=new i,i[u]=null,n[a]=t):n=c(),void 0===e?n:o(n,e)}},function(t,e,n){var s=n(18),a=n(7),u=n(32);t.exports=n(1)?Object.defineProperties:function(t,e){a(t);for(var n,i=u(e),r=i.length,o=0;o<r;)s.f(t,n=i[o++],e[n]);return t}},function(t,e,n){var i=n(4),n=n(48);i(i.S+i.F*(Number.parseInt!=n),"Number",{parseInt:n})},function(t,e,n){var i=n(0).parseInt,r=n(28).trim,n=n(31),o=/^[-+]?0[xX]/;t.exports=8!==i(n+"08")||22!==i(n+"0x16")?function(t,e){t=r(String(t),3);return i(t,e>>>0||(o.test(t)?16:10))}:i},function(t,e,n){"use strict";var i=n(4),r=n(50)(2);i(i.P+i.F*!n(55)([].filter,!0),"Array",{filter:function(t){return r(this,t,arguments[1])}})},function(t,e,n){var x=n(8),b=n(10),S=n(34),w=n(13),i=n(51);t.exports=function(f,t){var p=1==f,h=2==f,d=3==f,m=4==f,v=6==f,y=5==f||v,g=t||i;return function(t,e,n){for(var i,r,o=S(t),s=b(o),a=x(e,n,3),u=w(s.length),c=0,l=p?g(t,u):h?g(t,0):void 0;c<u;c++)if((y||c in s)&&(r=a(i=s[c],c,o),f))if(p)l[c]=r;else if(r)switch(f){case 3:return!0;case 5:return i;case 6:return c;case 2:l.push(i)}else if(m)return!1;return v?-1:d||m?m:l}}},function(t,e,n){var i=n(52);t.exports=function(t,e){return new(i(t))(e)}},function(t,e,n){var i=n(3),r=n(53),o=n(54)("species");t.exports=function(t){var e;return r(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!r(e.prototype)||(e=void 0),i(e)&&null===(e=e[o])&&(e=void 0)),void 0===e?Array:e}},function(t,e,n){var i=n(6);t.exports=Array.isArray||function(t){return"Array"==i(t)}},function(t,e,n){var i=n(14)("wks"),r=n(16),o=n(0).Symbol,s="function"==typeof o;(t.exports=function(t){return i[t]||(i[t]=s&&o[t]||(s?o:r)("Symbol."+t))}).store=i},function(t,e,n){"use strict";var i=n(2);t.exports=function(t,e){return!!t&&i(function(){e?t.call(null,function(){},1):t.call(null)})}},function(t,e,n){"use strict";var i=n(4),r=n(33),u=n(6),c=n(26),l=n(13),f=[].slice;i(i.P+i.F*n(2)(function(){r&&f.call(r)}),"Array",{slice:function(t,e){var n=l(this.length),i=u(this);if(e=void 0===e?n:e,"Array"==i)return f.call(this,t,e);for(var r=c(t,n),n=c(e,n),o=l(n-r),s=new Array(o),a=0;a<o;a++)s[a]="String"==i?this.charAt(r+a):this[r+a];return s}})},function(t,e,n){"use strict";n(35)},function(t,e,n){var i=n(4);i(i.S+i.F,"Object",{assign:n(59)})},function(t,e,n){"use strict";var p=n(1),h=n(32),d=n(60),m=n(20),v=n(34),y=n(10),r=Object.assign;t.exports=!r||n(2)(function(){var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach(function(t){e[t]=t}),7!=r({},t)[n]||Object.keys(r({},e)).join("")!=i})?function(t,e){for(var n=v(t),i=arguments.length,r=1,o=d.f,s=m.f;r<i;)for(var a,u=y(arguments[r++]),c=o?h(u).concat(o(u)):h(u),l=c.length,f=0;f<l;)a=c[f++],p&&!s.call(u,a)||(n[a]=u[a]);return n}:r},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){"use strict";n(36)},function(t,e,n){"use strict";n.r(e),n.d(e,"SplitCarousel",function(){return o}),n.d(e,"SplitCarouselItem",function(){return s});n(37),n(47),n(49),n(56);var i={props:{speed:{type:Number,default:500},autoplay:{type:Boolean,default:!0},hoverCancelPlay:{type:Boolean,default:!0},playDirection:{default:"ltr",validator:function(t){return-1!==["rtl","ltr"].indexOf(t)}},interval:{type:Number,default:3e3},loop:{type:Boolean,default:!0},initialIndex:{type:Number,default:0},cssUnit:{type:String,default:"px"},height:{type:Number,default:80},arrowAreaWidth:{type:Number,default:50},arrowVisible:{type:String,default:"enable",validator:function(t){return-1!==["enable","always"].indexOf(t)}},timingFunction:{type:String,default:"ease"},displayAmount:{type:Number,default:4},itemWidth:{type:Number,default:120},itemAlign:{validator:function(t){return-1!==["center","left","right"].indexOf(t)},default:"center"}},mounted:function(){var t=this;this.initCarousel(),setTimeout(function(){t.isInit=!0,t.autoplay&&t.play()},16),document.addEventListener("visibilitychange",this.handlePageVisiblityChange)},destroyed:function(){this.cancelPlay(),clearTimeout(this.timer),document.removeEventListener("visibilitychange",this.handlePageVisiblityChange)},data:function(){return{itemSpace:0,itemList:[],itemStageIndexList:[],index:this.initialIndex,containerWidth:"auto",isReseting:!1,isUnavailable:!1,isInit:!1,timer:null,autoplayTimer:null,isPageVisible:!0}},computed:{itemAmount:function(){return this.itemList.length},itemWidthWithSpace:function(){return this.itemWidth+this.itemSpace},isStaticMode:function(){return this.itemAmount<=this.displayAmount},isNeedReset:function(){return this.itemAmount>this.displayAmount&&this.itemAmount===this.displayAmount+1},isLeftArrowEnable:function(){var t=!0;return t="enable"===this.arrowVisible&&(this.isStaticMode||!1===this.loop&&this.index<=0)?!1:t},isRightArrowEnable:function(){var t=!0;return t="enable"===this.arrowVisible&&(this.isStaticMode||!1===this.loop&&this.index>=this.itemAmount-this.displayAmount)?!1:t}},watch:{autoplay:function(){this.autoplay?this.play():this.cancelPlay()},displayAmount:function(){this.initCarousel()},itemWidth:function(){this.initCarousel()},arrowAreaWidth:function(){this.initCarousel()}},methods:{initCarousel:function(){var t=window.getComputedStyle(this.$el).width,e=((t=Number.parseInt(t))-this.displayAmount*this.itemWidth)/(this.displayAmount-1);Math.abs(t-this.itemWidth)<1&&(e=0),this.itemSpace=e},getItems:function(){var t=[];void 0!==this.$slots.default&&(t=this.$slots.default.filter(function(t){return void 0!==t.tag})),this.itemList=t},setIndex:function(t){var e;this.isReseting||this.isUnavailable||(e=t>this.index,!this.loop&&(t<0||t>this.itemAmount-this.displayAmount)||((t=t<0?this.itemAmount-1:t)>=this.itemAmount&&(t%=this.itemAmount),this.index=t,this.updateStageIndexList(e)))},updateItems:function(){this.getItems(),this.updateStageIndexList()},updateStageIndexList:function(t){var e=this;if(!this.isStaticMode){for(var n=[],i=0;i<this.displayAmount+2;i++)n[i]=this.index-1+i,n[i]<0&&(n[i]+=this.itemAmount),n[i]>=this.itemAmount&&(n[i]%=this.itemAmount);this.isNeedReset&&this.isInit?(clearTimeout(this.timer),this.isReseting=!0,this.isUnavailable=!0,t?(this.itemStageIndexList.splice(0,1,-1),this.timer=setTimeout(function(){e.itemStageIndexList=n,e.isReseting=!1,e.isUnavailable=!1},16)):((t=n.slice())[0]=-1,this.itemStageIndexList=t,this.isReseting=!1,this.timer=setTimeout(function(){e.isReseting=!0,e.itemStageIndexList=n,e.timer=setTimeout(function(){e.isReseting=!1,e.isUnavailable=!1},16)},this.speed))):(this.isInit&&this.$emit("change",this.index),this.itemStageIndexList=n)}},play:function(){var t=this;clearTimeout(this.autoplayTimer),this.autoplayTimer=setTimeout(function(){"ltr"===t.playDirection?t.setIndex(t.index+1):t.setIndex(t.index-1),t.play()},this.interval)},cancelPlay:function(){clearTimeout(this.autoplayTimer)},handleControl:function(t){var e=this;"right"===t?this.setIndex(this.index+1):this.setIndex(this.index-1),this.autoplay&&(this.cancelPlay(),this.autoplayTimer=setTimeout(function(){e.autoplay&&e.play()},this.interval))},handlePageVisiblityChange:function(){var t=this;"hidden"===document.visibilityState&&(this.isPageVisible=!1),"visible"===document.visibilityState&&setTimeout(function(){t.isPageVisible=!0})}}};n(57);function r(t,e,n,i,r,o,s,a){var u,c,l="function"==typeof t?t.options:t;return e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),s?l._ssrRegister=u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)}:r&&(u=a?function(){r.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:r),u&&(l.functional?(l._injectStyles=u,c=l.render,l.render=function(t,e){return u.call(e),c(t,e)}):(a=l.beforeCreate,l.beforeCreate=a?[].concat(a,u):[u])),{exports:t,options:l}}var o=r(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"split-carousel",style:{padding:"0 "+e.arrowAreaWidth+e.cssUnit}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.isLeftArrowEnable,expression:"isLeftArrowEnable"}],staticClass:"split-carousel--arrow split-carousel--arrow__left",on:{click:function(t){return e.handleControl("left")}}},[void 0===e.$slots["left-arrow"]?n("div",{staticClass:"split-carousel--arrow--left"}):e._t("left-arrow")],2),e._v(" "),n("div",{staticClass:"split-carousel--content",on:{mouseenter:function(t){e.autoplay&&e.hoverCancelPlay&&e.cancelPlay()},mouseleave:function(t){e.autoplay&&e.hoverCancelPlay&&e.play()}}},[n("div",{staticClass:"split-carousel--content--container",class:((t={})["split-carousel--content--container__"+e.itemAlign]=e.isStaticMode,t),style:{width:e.isStaticMode?"auto":""+e.itemWidthWithSpace*(e.displayAmount+2)+e.cssUnit,"margin-left":""+(e.isStaticMode?0:-e.itemWidthWithSpace)+e.cssUnit,height:""+e.height+e.cssUnit}},[e._t("default")],2)]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isRightArrowEnable,expression:"isRightArrowEnable"}],staticClass:"split-carousel--arrow split-carousel--arrow__right",on:{click:function(t){return e.handleControl("right")}}},[void 0===e.$slots["right-arrow"]?n("div",{staticClass:"split-carousel--arrow--right"}):e._t("right-arrow")],2)])},[],!1,null,null,null).exports,i=(n(58),{created:function(){this.$parent&&this.$parent.updateItems()},destroyed:function(){this.$parent&&this.$parent.updateItems()},data:function(){return{prevIndex:-1,isMounted:!1}},mounted:function(){var t=this;this.prevIndex=this.stageIndex,this.$nextTick(function(){t.isMounted=!0})},computed:{itemIndex:function(){return this.$parent.itemList.indexOf(this.$vnode)},stageIndex:function(){return this.$parent.itemStageIndexList.indexOf(this.itemIndex)},noMarginRight:function(){return this.$parent.isStaticMode&&this.itemIndex===this.$parent.itemAmount-1},inStage:function(){return this.$parent.isStaticMode||-1!==this.stageIndex},noAnimate:function(){var t=this.$parent.itemStageIndexList.length-1;return this.$parent.isReseting||!this.$parent.isPageVisible||!this.isMounted||0===this.prevIndex&&this.stageIndex===t||this.prevIndex===t&&0===this.stageIndex||this.prevIndex===this.stageIndex},itemStyle:function(){var t={"margin-right":"".concat(this.noMarginRight?0:this.$parent.itemSpace).concat(this.$parent.cssUnit),width:"".concat(this.$parent.itemWidth).concat(this.$parent.cssUnit),"transition-timing-function":this.$parent.timingFunction};return t=!this.$parent.isStaticMode?Object.assign(t,{left:"".concat(this.stageIndex*this.$parent.itemWidthWithSpace).concat(this.$parent.cssUnit),"transition-duration":"".concat(this.noAnimate?0:this.$parent.speed,"ms")}):t}},watch:{stageIndex:function(t,e){this.prevIndex=void 0===e?this.stageIndex:e}}}),s=(n(61),r(i,function(){var t=this,e=t.$createElement,e=t._self._c||e;return t.inStage?e("div",{directives:[{name:"show",rawName:"v-show",value:t.isMounted,expression:"isMounted"}],staticClass:"split-carousel-item",class:{"is-static":t.$parent.isStaticMode},style:t.itemStyle},[e("div",{staticClass:"split-carousel-item--content"},[t._t("default")],2)]):t._e()},[],!1,null,null,null).exports),i=function(t){t.component("split-carousel",o),t.component("split-carousel-item",s)};"undefined"!=typeof window&&window.Vue&&i(window.Vue);e.default={install:i}}],r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=62);function r(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}var n,i});