!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.vueSplitCarousel=n():t.vueSplitCarousel=n()}(window,function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=50)}([function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){t.exports=!e(4)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(2);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){},function(t,n,e){},function(t,n){var e=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=e)},function(t,n,e){var r=e(3),o=e(15),i=e(10),u=Object.defineProperty;n.f=e(1)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(2);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(39),o=e(23);t.exports=function(t){return r(o(t))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(0),o=e(8),i=e(14),u=e(18),c=e(21),f=function(t,n,e){var a,s,p,l,d=t&f.F,v=t&f.G,h=t&f.S,y=t&f.P,_=t&f.B,m=v?r:h?r[n]||(r[n]={}):(r[n]||{}).prototype,x=v?o:o[n]||(o[n]={}),g=x.prototype||(x.prototype={});for(a in v&&(e=n),e)p=((s=!d&&m&&void 0!==m[a])?m:e)[a],l=_&&s?c(p,r):y&&"function"==typeof p?c(Function.call,p):p,m&&u(m,a,p,t&f.U),x[a]!=p&&i(x,a,l),y&&g[a]!=p&&(g[a]=p)};r.core=o,f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},function(t,n,e){var r=e(9),o=e(17);t.exports=e(1)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){t.exports=!e(1)&&!e(4)(function(){return 7!=Object.defineProperty(e(16)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(2),o=e(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(0),o=e(14),i=e(5),u=e(19)("src"),c=e(31),f=(""+c).split("toString");e(8).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,e,c){var a="function"==typeof e;a&&(i(e,"name")||o(e,"name",n)),t[n]!==e&&(a&&(i(e,u)||o(e,u,t[n]?""+t[n]:f.join(String(n)))),t===r?t[n]=e:c?t[n]?t[n]=e:o(t,n,e):(delete t[n],o(t,n,e)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[u]||c.call(this)})},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){var r=e(8),o=e(0),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(32)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n,e){var r=e(33);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(13),o=e(23),i=e(4),u=e(24),c="["+u+"]",f=RegExp("^"+c+c+"*"),a=RegExp(c+c+"*$"),s=function(t,n,e){var o={},c=i(function(){return!!u[t]()||"​"!="​"[t]()}),f=o[t]=c?n(p):u[t];e&&(o[e]=f),r(r.P+r.F*c,"String",o)},p=s.trim=function(t,n){return t=String(o(t)),1&n&&(t=t.replace(f,"")),2&n&&(t=t.replace(a,"")),t};t.exports=s},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(38),o=e(17),i=e(11),u=e(10),c=e(5),f=e(15),a=Object.getOwnPropertyDescriptor;n.f=e(1)?a:function(t,n){if(t=i(t),n=u(n,!0),f)try{return a(t,n)}catch(t){}if(c(t,n))return o(!r.f.call(t,n),t[n])}},function(t,n,e){var r=e(5),o=e(11),i=e(41)(!1),u=e(29)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),f=0,a=[];for(e in c)e!=u&&r(c,e)&&a.push(e);for(;n.length>f;)r(c,e=n[f++])&&(~i(a,e)||a.push(e));return a}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(20)("keys"),o=e(19);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(13),o=e(34);r(r.S+r.F*(Number.parseInt!=o),"Number",{parseInt:o})},function(t,n,e){t.exports=e(20)("native-function-to-string",Function.toString)},function(t,n){t.exports=!1},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(0).parseInt,o=e(22).trim,i=e(24),u=/^[-+]?0[xX]/;t.exports=8!==r(i+"08")||22!==r(i+"0x16")?function(t,n){var e=o(String(t),3);return r(e,n>>>0||(u.test(e)?16:10))}:r},function(t,n,e){"use strict";var r=e(0),o=e(5),i=e(25),u=e(36),c=e(10),f=e(4),a=e(40).f,s=e(26).f,p=e(9).f,l=e(22).trim,d=r.Number,v=d,h=d.prototype,y="Number"==i(e(44)(h)),_="trim"in String.prototype,m=function(t){var n=c(t,!1);if("string"==typeof n&&n.length>2){var e,r,o,i=(n=_?n.trim():l(n,3)).charCodeAt(0);if(43===i||45===i){if(88===(e=n.charCodeAt(2))||120===e)return NaN}else if(48===i){switch(n.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+n}for(var u,f=n.slice(2),a=0,s=f.length;a<s;a++)if((u=f.charCodeAt(a))<48||u>o)return NaN;return parseInt(f,r)}}return+n};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof d&&(y?f(function(){h.valueOf.call(e)}):"Number"!=i(e))?u(new v(m(n)),e,d):m(n)};for(var x,g=e(1)?a(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),b=0;g.length>b;b++)o(v,x=g[b])&&!o(d,x)&&p(d,x,s(v,x));d.prototype=h,h.constructor=d,e(18)(r,"Number",d)}},function(t,n,e){var r=e(2),o=e(37).set;t.exports=function(t,n,e){var i,u=n.constructor;return u!==e&&"function"==typeof u&&(i=u.prototype)!==e.prototype&&r(i)&&o&&o(t,i),t}},function(t,n,e){var r=e(2),o=e(3),i=function(t,n){if(o(t),!r(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,r){try{(r=e(21)(Function.call,e(26).f(Object.prototype,"__proto__").set,2))(t,[]),n=!(t instanceof Array)}catch(t){n=!0}return function(t,e){return i(t,e),n?t.__proto__=e:r(t,e),t}}({},!1):void 0),check:i}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){var r=e(25);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(27),o=e(12).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(11),o=e(42),i=e(43);t.exports=function(t){return function(n,e,u){var c,f=r(n),a=o(f.length),s=i(u,a);if(t&&e!=e){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===e)return t||s||0;return!t&&-1}}},function(t,n,e){var r=e(28),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(28),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(3),o=e(45),i=e(12),u=e(29)("IE_PROTO"),c=function(){},f=function(){var t,n=e(16)("iframe"),r=i.length;for(n.style.display="none",e(47).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),f=t.F;r--;)delete f.prototype[i[r]];return f()};t.exports=Object.create||function(t,n){var e;return null!==t?(c.prototype=r(t),e=new c,c.prototype=null,e[u]=t):e=f(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(9),o=e(3),i=e(46);t.exports=e(1)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),c=u.length,f=0;c>f;)r.f(t,e=u[f++],n[e]);return t}},function(t,n,e){var r=e(27),o=e(12);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(0).document;t.exports=r&&r.documentElement},function(t,n,e){"use strict";var r=e(6);e.n(r).a},function(t,n,e){"use strict";var r=e(7);e.n(r).a},function(t,n,e){"use strict";e.r(n);e(30),e(35);var r={props:{speed:{type:Number,default:300},displayAmount:{type:Number,default:5},itemWidth:{type:String,default:"150px"},loop:{type:Boolean,default:!0}},data:function(){return{space:0}},mounted:function(){var t=window.getComputedStyle(this.$el).width,n=((t=Number.parseInt(t))-this.displayAmount*this.itemWidth)/(this.displayAmount-1);this.space=n},computed:{itemAmount:function(){return this.$slots.default.length},containerWidth:function(){var t=this.itemAmount/this.displayAmount;return"calc(".concat(100*t,"% + ").concat(this.itemBetweenSpace*this.displayAmount,"px)")}}};e(48);function o(t,n,e,r,o,i,u,c){var f,a="function"==typeof t?t.options:t;if(n&&(a.render=n,a.staticRenderFns=e,a._compiled=!0),r&&(a.functional=!0),i&&(a._scopeId="data-v-"+i),u?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},a._ssrRegister=f):o&&(f=c?function(){o.call(this,this.$root.$options.shadowRoot)}:o),f)if(a.functional){a._injectStyles=f;var s=a.render;a.render=function(t,n){return f.call(n),s(t,n)}}else{var p=a.beforeCreate;a.beforeCreate=p?[].concat(p,f):[f]}return{exports:t,options:a}}var i=o(r,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"split-carousel"},[e("div",{staticClass:"arrow-control left-arrow"},[t.$slots["left-arrow"]?t._e():e("div",[t._v("\n      left\n    ")]),t._v(" "),t._t("left-arrow")],2),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"item-container",style:{width:t.containerWidth}},[t._t("default")],2)]),t._v(" "),e("div",{staticClass:"arrow-control right-arrow"},[t._t("right-arrow"),t._v(" "),void 0===t.$slots["right-arrow"]?e("div",[t._v("\n      right\n    ")]):t._e()],2)])},[],!1,null,null,null).exports,u={data:function(){return{parent:this.$parent}}},c=(e(49),o(u,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"split-carousel-item",style:{"padding-right":this.parent.itemBetweenSpace+"px",width:""+this.parent.itemWidth}},[this._t("default")],2)},[],!1,null,null,null).exports),f={install:function(t){t.component("split-carousel",i),t.component("split-carousel-item",c)}};n.default=f}])});