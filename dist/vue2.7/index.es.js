(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".split-carousel[data-v-4a4bcbbd]{display:flex;width:100%;align-items:center;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.split-carousel__viewport[data-v-4a4bcbbd]{flex-grow:1;overflow:hidden;align-self:stretch;position:relative}.split-carousel__viewport--static[data-v-4a4bcbbd]{display:flex;align-items:center;justify-content:space-between}.split-carousel__viewport--static[data-v-4a4bcbbd] .split-carousel__item{align-self:stretch}.split-carousel__left[data-v-4a4bcbbd],.split-carousel__right[data-v-4a4bcbbd]{align-self:center;padding:5px}.split-carousel__left-button[data-v-4a4bcbbd],.split-carousel__right-button[data-v-4a4bcbbd]{height:30px;width:30px;text-align:center;line-height:30px;border:1px solid #dcdfe6;border-radius:50%;cursor:pointer;background-color:#fff;transition:border-color,background-color .15s;display:flex;align-items:center;justify-content:center}.split-carousel__left-button[data-v-4a4bcbbd]:hover,.split-carousel__right-button[data-v-4a4bcbbd]:hover{border-color:#c6e2ff;background-color:#ecf5ff}.split-carousel__left-button:hover .arrow[data-v-4a4bcbbd],.split-carousel__right-button:hover .arrow[data-v-4a4bcbbd]{border-top-color:#c6e2ff;border-left-color:#c6e2ff}.arrow[data-v-4a4bcbbd]{height:6px;width:6px;border:2px solid;transition:border-color .15s;border-top-color:#dcdfe6;border-left-color:#dcdfe6;border-right-color:transparent;border-bottom-color:transparent}.arrow.left[data-v-4a4bcbbd]{transform:translate(2px) rotate(-45deg)}.arrow.right[data-v-4a4bcbbd]{transform:translate(-2px) rotate(135deg)}.split-carousel__item[data-v-a1465d65]{display:none;transition-property:transform;will-change:transfrom}.split-carousel__item--transition[data-v-a1465d65]{position:absolute;left:0;top:0;height:100%}.split-carousel__item--stag[data-v-a1465d65]{display:block}")),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import O from "vue";
var a = {};
(function(e) {
  var t = O, i = t.default || t;
  e.Vue = i, e.Vue2 = i, e.isVue2 = !0, e.isVue3 = !1, e.install = function() {
  }, e.warn = i.util.warn, e.createApp = function(s, f) {
    var u, m = {}, p = {
      config: i.config,
      use: i.use.bind(i),
      mixin: i.mixin.bind(i),
      component: i.component.bind(i),
      provide: function(n, l) {
        return m[n] = l, this;
      },
      directive: function(n, l) {
        return l ? (i.directive(n, l), p) : i.directive(n);
      },
      mount: function(n, l) {
        return u || (u = new i(Object.assign({ propsData: f }, s, { provide: Object.assign(m, s.provide) })), u.$mount(n, l), u);
      },
      unmount: function() {
        u && (u.$destroy(), u = void 0);
      }
    };
    return p;
  }, Object.keys(t).forEach(function(s) {
    e[s] = t[s];
  });
})(a);
const P = a.defineComponent({
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
    const i = a.ref(null), s = a.ref([]), f = (o) => s.value.push(o), u = (o) => {
      const v = s.value.findIndex((A) => A.uid === o);
      v !== -1 && s.value.splice(v, 1);
    }, m = a.ref(0), p = a.computed(() => {
      const o = (m.value - e.itemWidth * e.displayAmount) / (e.displayAmount - 1), v = o + e.itemWidth;
      return {
        isStatic: s.value.length <= e.displayAmount,
        gapWidth: o,
        viewportWidth: m.value,
        itemWidth: e.itemWidth,
        itemBlockWidth: v,
        prependPosition: -1 * v,
        appendPostion: m.value + o
      };
    }), n = a.ref(0), l = a.computed(
      () => n.value + e.displayAmount === s.value.length
    ), _ = a.computed(() => n.value === 0), g = a.computed(
      () => e.displayAmount + 2 >= s.value.length
    ), r = a.reactive({
      resetting: !1,
      action: "next"
    }), C = a.computed(() => {
      var T, R;
      const o = n.value, v = s.value, A = v.length - 1, W = Array.from({ length: e.displayAmount }).map(
        (k, N) => {
          var V;
          return (V = v[(o + N) % v.length]) == null ? void 0 : V.uid;
        }
      ), S = {
        prependUid: (T = v[_.value ? A : o - 1]) == null ? void 0 : T.uid,
        stagUids: W,
        appendUid: (R = v[(o + e.displayAmount) % v.length]) == null ? void 0 : R.uid
      };
      return S.prependUid === S.appendUid && (r.action === "prev" && (S.prependUid = -1), r.action === "next" && (S.appendUid = -1)), S;
    }), h = a.toRefs(e);
    a.provide("injectCarouselScope", {
      speed: h.speed,
      timingFunction: h.timingFunction,
      stag: C,
      reset: r,
      addItem: f,
      removeItem: u,
      layout: p
    });
    const w = a.computed(() => !(e.arrowVisible === "default" && (p.value.isStatic || _.value && !e.loop))), $ = a.computed(() => !(e.arrowVisible === "default" && (p.value.isStatic || l.value && !e.loop))), b = (o) => {
      if (p.value.isStatic || !e.loop && (o === "next" && l.value || o === "prev" && _.value))
        return;
      const v = () => {
        o === "next" && (n.value = (n.value + 1) % s.value.length), o === "prev" && (n.value = _.value ? s.value.length - 1 : n.value - 1);
      };
      if (!g.value) {
        v();
        return;
      }
      r.resetting = !0, r.action = o, requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          r.resetting = !1, v();
        });
      });
    };
    let d;
    const c = () => {
      clearTimeout(d), b("next"), e.autoplay && (d = setTimeout(() => c(), e.interval));
    }, y = () => {
      clearTimeout(d), b("prev"), e.autoplay && (d = setTimeout(() => y(), e.interval));
    }, I = () => {
      e.autoplay && e.pauseOnHover && clearTimeout(d);
    }, F = () => {
      e.autoplay && e.pauseOnHover && (clearTimeout(d), d = setTimeout(() => c(), e.interval));
    };
    a.watch(
      () => e.autoplay,
      (o) => {
        o ? d = setTimeout(() => c(), e.interval) : clearTimeout(d);
      }
    );
    const x = () => {
      document.visibilityState === "hidden" && clearTimeout(d), document.visibilityState === "visible" && e.autoplay && (d = setTimeout(() => c(), e.interval));
    };
    return a.onMounted(() => {
      a.nextTick(() => {
        i.value !== null && (m.value = i.value.clientWidth), e.autoplay && (d = setTimeout(() => c(), e.interval)), document.addEventListener(
          "visibilitychange",
          x
        );
      });
    }), a.onUnmounted(() => {
      clearTimeout(d), document.removeEventListener(
        "visibilitychange",
        x
      );
    }), {
      prev: y,
      next: c,
      enter: I,
      leave: F,
      layout: p,
      viewportDOMRef: i,
      hasLeftSlot: t.slots.left !== void 0,
      hasRightSlot: t.slots.right !== void 0,
      isLeftArrowVisiable: w,
      isRightArrowVisiable: $,
      activeIndex: n,
      items: s
    };
  }
});
function U(e, t, i, s, f, u, m, p) {
  var n = typeof e == "function" ? e.options : e;
  t && (n.render = t, n.staticRenderFns = i, n._compiled = !0), s && (n.functional = !0), u && (n._scopeId = "data-v-" + u);
  var l;
  if (m ? (l = function(r) {
    r = r || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !r && typeof __VUE_SSR_CONTEXT__ < "u" && (r = __VUE_SSR_CONTEXT__), f && f.call(this, r), r && r._registeredComponents && r._registeredComponents.add(m);
  }, n._ssrRegister = l) : f && (l = p ? function() {
    f.call(
      this,
      (n.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : f), l)
    if (n.functional) {
      n._injectStyles = l;
      var _ = n.render;
      n.render = function(C, h) {
        return l.call(h), _(C, h);
      };
    } else {
      var g = n.beforeCreate;
      n.beforeCreate = g ? [].concat(g, l) : [l];
    }
  return {
    exports: e,
    options: n
  };
}
var L = function() {
  var t = this, i = t._self._c;
  return t._self._setupProxy, i("div", { staticClass: "split-carousel", style: {
    height: `${typeof t.height == "string" ? t.height : `${t.height}px`}`
  } }, [i("div", { staticClass: "split-carousel__left", on: { click: t.prev } }, [i("div", { directives: [{ name: "show", rawName: "v-show", value: t.isLeftArrowVisiable, expression: "isLeftArrowVisiable" }] }, [t.hasLeftSlot ? t._t("left") : i("button", { staticClass: "split-carousel__left-button" }, [i("div", { staticClass: "arrow left" })])], 2)]), i("div", { ref: "viewportDOMRef", staticClass: "split-carousel__viewport", class: { "split-carousel__viewport--static": t.layout.isStatic }, on: { mouseenter: t.enter, mouseleave: t.leave } }, [t._t("default")], 2), i("div", { staticClass: "split-carousel__right", on: { click: t.next } }, [i("div", { directives: [{ name: "show", rawName: "v-show", value: t.isRightArrowVisiable, expression: "isRightArrowVisiable" }] }, [t.hasRightSlot ? t._t("right") : i("button", { staticClass: "split-carousel__right-button" }, [i("div", { staticClass: "arrow right" })])], 2)])]);
}, M = [], j = /* @__PURE__ */ U(
  P,
  L,
  M,
  !1,
  null,
  "4a4bcbbd",
  null,
  null
);
const q = j.exports, B = a.defineComponent({
  name: "SplitCarouselItem",
  setup() {
    let e = Math.random();
    const t = a.inject(
      "injectCarouselScope"
    ), i = a.ref(!1), { layout: s, stag: f, reset: u, addItem: m, removeItem: p } = t;
    a.onMounted(() => {
      m({ uid: e }), requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          i.value = !0;
        });
      });
    }), a.onUnmounted(() => {
      p(e);
    });
    const n = a.computed(() => e === f.value.prependUid), l = a.computed(() => e === f.value.appendUid), _ = a.computed(() => f.value.stagUids.findIndex((h) => h === e)), g = a.computed(() => _.value !== -1), r = a.computed(() => !!(!i.value || u.resetting));
    return {
      itemStyle: a.computed(() => {
        const {
          itemWidth: h,
          isStatic: w,
          itemBlockWidth: $,
          appendPostion: b,
          prependPosition: d
        } = s.value;
        let c = {
          width: `${h}px`,
          transitionDuration: `${r.value ? 0 : t.speed.value}ms`,
          transitionTimingFunction: t.timingFunction.value
        };
        if (w)
          return c.display = "block", c;
        if (g.value && (c = {
          ...c,
          display: "block",
          transform: `translateX(${_.value * $}px)`
        }), n.value) {
          const y = u.resetting && u.action === "next";
          c = {
            ...c,
            display: "block",
            transform: `translateX(${y ? b : d}px)`
          };
        }
        if (l.value) {
          const y = u.resetting && u.action === "prev";
          c = {
            ...c,
            display: "block",
            transform: `translateX(${y ? d : b}px)`
          };
        }
        return c;
      }),
      layout: s
    };
  }
});
var X = function() {
  var t = this, i = t._self._c;
  return t._self._setupProxy, i("div", { staticClass: "split-carousel__item", class: { "split-carousel__item--transition": !t.layout.isStatic }, style: t.itemStyle }, [t._t("default")], 2);
}, D = [], E = /* @__PURE__ */ U(
  B,
  X,
  D,
  !1,
  null,
  "a1465d65",
  null,
  null
);
const H = E.exports, G = (e, t) => {
  const i = (t == null ? void 0 : t.prefix) || "";
  e.component(`${i}SplitCarousel`, q), e.component(`${i}SplitCarouselItem`, H);
};
export {
  q as SplitCarousel,
  H as SplitCarouselItem,
  G as default,
  G as install
};
