(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".split-carousel[data-v-411ee54d]{display:flex;width:100%;align-items:center;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.split-carousel__viewport[data-v-411ee54d]{flex-grow:1;overflow:hidden;align-self:stretch;position:relative}.split-carousel__viewport--static[data-v-411ee54d]{display:flex;align-items:center;justify-content:space-between}.split-carousel__viewport--static[data-v-411ee54d] .split-carousel__item{align-self:stretch}.split-carousel__left[data-v-411ee54d],.split-carousel__right[data-v-411ee54d]{align-self:center;padding:5px}.split-carousel__left-button[data-v-411ee54d],.split-carousel__right-button[data-v-411ee54d]{height:30px;width:30px;text-align:center;line-height:30px;border:1px solid #dcdfe6;border-radius:50%;cursor:pointer;background-color:#fff;transition:border-color,background-color .15s;display:flex;align-items:center;justify-content:center}.split-carousel__left-button[data-v-411ee54d]:hover,.split-carousel__right-button[data-v-411ee54d]:hover{border-color:#c6e2ff;background-color:#ecf5ff}.split-carousel__left-button:hover .arrow[data-v-411ee54d],.split-carousel__right-button:hover .arrow[data-v-411ee54d]{border-top-color:#c6e2ff;border-left-color:#c6e2ff}.arrow[data-v-411ee54d]{height:6px;width:6px;border:2px solid;transition:border-color .15s;border-top-color:#dcdfe6;border-left-color:#dcdfe6;border-right-color:transparent;border-bottom-color:transparent}.arrow.left[data-v-411ee54d]{transform:translate(2px) rotate(-45deg)}.arrow.right[data-v-411ee54d]{transform:translate(-2px) rotate(135deg)}.split-carousel__item[data-v-e39df7ff]{display:none;transition-property:transform;will-change:transfrom}.split-carousel__item--transition[data-v-e39df7ff]{position:absolute;left:0;top:0;height:100%}.split-carousel__item--stag[data-v-e39df7ff]{display:block}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import O from "vue";
var n = {};
(function(e) {
  var t = O, i = t.default || t;
  e.Vue = i, e.Vue2 = i, e.isVue2 = !0, e.isVue3 = !1, e.install = function() {
  }, e.warn = i.util.warn, e.createApp = function(s, v) {
    var r, d = {}, m = {
      config: i.config,
      use: i.use.bind(i),
      mixin: i.mixin.bind(i),
      component: i.component.bind(i),
      provide: function(a, l) {
        return d[a] = l, this;
      },
      directive: function(a, l) {
        return l ? (i.directive(a, l), m) : i.directive(a);
      },
      mount: function(a, l) {
        return r || (r = new i(Object.assign({ propsData: v }, s, { provide: Object.assign(d, s.provide) })), r.$mount(a, l), r);
      },
      unmount: function() {
        r && (r.$destroy(), r = void 0);
      }
    };
    return m;
  }, Object.keys(t).forEach(function(s) {
    e[s] = t[s];
  });
})(n);
const P = n.defineComponent({
  name: "SplitCarousel",
  props: {
    autoplay: {
      type: Boolean,
      default: !0
    },
    speed: {
      type: Number,
      default: 500
    },
    interval: {
      type: Number,
      default: 3e3
    },
    loop: {
      type: Boolean,
      default: !0
    },
    displayAmount: {
      type: Number,
      default: 4
    },
    height: {
      type: [Number, String],
      default: 80
    },
    itemWidth: {
      type: Number,
      default: 120
    },
    pauseOnHover: {
      type: Boolean,
      default: !0
    },
    timingFunction: {
      type: String,
      default: "ease"
    },
    arrowVisible: {
      type: String,
      validator: (e) => ["default", "always"].includes(e),
      default: "default"
    }
  },
  setup(e, t) {
    const i = n.ref(null), s = n.ref([]), v = (u) => s.value.push(u), r = (u) => {
      const f = s.value.findIndex((x) => x.uid === u);
      f !== -1 && s.value.splice(f, 1);
    }, d = n.ref(0), m = n.computed(() => {
      const u = (d.value - e.itemWidth * e.displayAmount) / (e.displayAmount - 1), f = u + e.itemWidth;
      return {
        isStatic: s.value.length <= e.displayAmount,
        gapWidth: u,
        viewportWidth: d.value,
        itemWidth: e.itemWidth,
        itemBlockWidth: f,
        prependPosition: -1 * f,
        appendPostion: d.value + u
      };
    }), a = n.ref(0), l = n.computed(
      () => a.value + e.displayAmount === s.value.length
    ), h = n.computed(() => a.value === 0), g = n.computed(
      () => e.displayAmount + 2 >= s.value.length
    ), o = n.reactive({
      resetting: !1,
      action: "next"
    }), b = n.computed(() => {
      var R, V;
      const u = a.value, f = s.value, x = f.length - 1, M = Array.from({ length: e.displayAmount }).map(
        (k, N) => {
          var U;
          return (U = f[(u + N) % f.length]) == null ? void 0 : U.uid;
        }
      ), w = {
        prependUid: (R = f[h.value ? x : u - 1]) == null ? void 0 : R.uid,
        stagUids: M,
        appendUid: (V = f[(u + e.displayAmount) % f.length]) == null ? void 0 : V.uid
      };
      return w.prependUid === w.appendUid && (o.action === "prev" && (w.prependUid = -1), o.action === "next" && (w.appendUid = -1)), w;
    }), y = n.toRefs(e);
    n.provide("injectCarouselScope", {
      speed: y.speed,
      timingFunction: y.timingFunction,
      stag: b,
      reset: o,
      addItem: v,
      removeItem: r,
      layout: m
    });
    const S = n.computed(() => !(e.arrowVisible === "default" && (m.value.isStatic || h.value && !e.loop))), A = n.computed(() => !(e.arrowVisible === "default" && (m.value.isStatic || l.value && !e.loop))), $ = (u) => {
      if (m.value.isStatic || !e.loop && (u === "next" && l.value || u === "prev" && h.value))
        return;
      const f = () => {
        u === "next" && (a.value = (a.value + 1) % s.value.length), u === "prev" && (a.value = h.value ? s.value.length - 1 : a.value - 1);
      };
      if (!g.value) {
        f();
        return;
      }
      o.resetting = !0, o.action = u, requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          o.resetting = !1, f();
        });
      });
    };
    let c;
    const _ = () => {
      clearTimeout(c), $("next"), e.autoplay && (c = setTimeout(() => _(), e.interval));
    }, p = () => {
      clearTimeout(c), $("prev"), e.autoplay && (c = setTimeout(() => p(), e.interval));
    }, C = () => {
      e.autoplay && e.pauseOnHover && clearTimeout(c);
    }, W = () => {
      e.autoplay && e.pauseOnHover && (clearTimeout(c), c = setTimeout(() => _(), e.interval));
    };
    n.watch(
      () => e.autoplay,
      (u) => {
        u ? c = setTimeout(() => _(), e.interval) : clearTimeout(c);
      }
    );
    const T = () => {
      document.visibilityState === "hidden" && clearTimeout(c), document.visibilityState === "visible" && e.autoplay && (c = setTimeout(() => _(), e.interval));
    };
    n.onMounted(() => {
      n.nextTick(() => {
        i.value !== null && (d.value = i.value.clientWidth), e.autoplay && (c = setTimeout(() => _(), e.interval)), document.addEventListener(
          "visibilitychange",
          T
        );
      });
    }), n.onUnmounted(() => {
      clearTimeout(c), document.removeEventListener(
        "visibilitychange",
        T
      );
    });
    const I = n.ref(!1);
    return n.onMounted(() => {
      I.value = !0;
    }), {
      prev: p,
      next: _,
      enter: C,
      leave: W,
      layout: m,
      viewportDOMRef: i,
      hasLeftSlot: t.slots.left !== void 0,
      hasRightSlot: t.slots.right !== void 0,
      isLeftArrowVisiable: S,
      isRightArrowVisiable: A,
      activeIndex: a,
      items: s,
      isMounted: I
    };
  }
});
function F(e, t, i, s, v, r, d, m) {
  var a = typeof e == "function" ? e.options : e;
  t && (a.render = t, a.staticRenderFns = i, a._compiled = !0), s && (a.functional = !0), r && (a._scopeId = "data-v-" + r);
  var l;
  if (d ? (l = function(o) {
    o = o || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !o && typeof __VUE_SSR_CONTEXT__ < "u" && (o = __VUE_SSR_CONTEXT__), v && v.call(this, o), o && o._registeredComponents && o._registeredComponents.add(d);
  }, a._ssrRegister = l) : v && (l = m ? function() {
    v.call(
      this,
      (a.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : v), l)
    if (a.functional) {
      a._injectStyles = l;
      var h = a.render;
      a.render = function(b, y) {
        return l.call(y), h(b, y);
      };
    } else {
      var g = a.beforeCreate;
      a.beforeCreate = g ? [].concat(g, l) : [l];
    }
  return {
    exports: e,
    options: a
  };
}
var L = function() {
  var t = this, i = t._self._c;
  return t._self._setupProxy, i("div", { staticClass: "split-carousel", style: {
    height: `${typeof t.height == "string" ? t.height : `${t.height}px`}`,
    visibility: t.isMounted ? "visible" : "hidden"
  } }, [i("div", { staticClass: "split-carousel__left", on: { click: t.prev } }, [i("div", { directives: [{ name: "show", rawName: "v-show", value: t.isLeftArrowVisiable, expression: "isLeftArrowVisiable" }] }, [t.hasLeftSlot ? t._t("left") : i("button", { staticClass: "split-carousel__left-button" }, [i("div", { staticClass: "arrow left" })])], 2)]), i("div", { ref: "viewportDOMRef", staticClass: "split-carousel__viewport", class: { "split-carousel__viewport--static": t.layout.isStatic }, on: { mouseenter: t.enter, mouseleave: t.leave } }, [t._t("default")], 2), i("div", { staticClass: "split-carousel__right", on: { click: t.next } }, [i("div", { directives: [{ name: "show", rawName: "v-show", value: t.isRightArrowVisiable, expression: "isRightArrowVisiable" }] }, [t.hasRightSlot ? t._t("right") : i("button", { staticClass: "split-carousel__right-button" }, [i("div", { staticClass: "arrow right" })])], 2)])]);
}, j = [], q = /* @__PURE__ */ F(
  P,
  L,
  j,
  !1,
  null,
  "411ee54d",
  null,
  null
);
const B = q.exports, E = n.defineComponent({
  name: "SplitCarouselItem",
  setup() {
    let e = n.getCurrentInstance(), t = Math.random();
    const i = n.inject(
      "injectCarouselScope"
    ), s = n.ref(!1);
    if (!e || !i)
      throw new Error("SplitCarouselItem Must include by SplitCarousel");
    const { layout: v, stag: r, reset: d, addItem: m, removeItem: a } = i;
    n.onMounted(() => {
      m({ uid: t }), requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          s.value = !0;
        });
      });
    }), n.onUnmounted(() => {
      a(t);
    });
    const l = n.computed(() => t === r.value.prependUid), h = n.computed(() => t === r.value.appendUid), g = n.computed(() => r.value.stagUids.findIndex((S) => S === t)), o = n.computed(() => g.value !== -1), b = n.computed(() => !!(!s.value || d.resetting));
    return {
      itemStyle: n.computed(() => {
        const {
          itemWidth: S,
          isStatic: A,
          itemBlockWidth: $,
          appendPostion: c,
          prependPosition: _
        } = v.value;
        let p = {
          width: `${S}px`,
          transitionDuration: `${b.value ? 0 : i.speed.value}ms`,
          transitionTimingFunction: i.timingFunction.value
        };
        if (A)
          return p.display = "block", p;
        if (o.value && (p = {
          ...p,
          display: "block",
          transform: `translateX(${g.value * $}px)`
        }), l.value) {
          const C = d.resetting && d.action === "next";
          p = {
            ...p,
            display: "block",
            transform: `translateX(${C ? c : _}px)`
          };
        }
        if (h.value) {
          const C = d.resetting && d.action === "prev";
          p = {
            ...p,
            display: "block",
            transform: `translateX(${C ? _ : c}px)`
          };
        }
        return p;
      }),
      layout: v
    };
  }
});
var X = function() {
  var t = this, i = t._self._c;
  return t._self._setupProxy, i("div", { staticClass: "split-carousel__item", class: { "split-carousel__item--transition": !t.layout.isStatic }, style: t.itemStyle }, [t._t("default")], 2);
}, D = [], H = /* @__PURE__ */ F(
  E,
  X,
  D,
  !1,
  null,
  "e39df7ff",
  null,
  null
);
const z = H.exports, J = (e, t) => {
  const i = (t == null ? void 0 : t.prefix) || "";
  e.component(`${i}SplitCarousel`, B), e.component(`${i}SplitCarouselItem`, z);
};
export {
  B as SplitCarousel,
  z as SplitCarouselItem,
  J as default,
  J as install
};
