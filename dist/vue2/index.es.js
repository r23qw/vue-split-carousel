(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".split-carousel[data-v-f812babe]{display:flex;width:100%;align-items:center;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.split-carousel__viewport[data-v-f812babe]{flex-grow:1;overflow:hidden;align-self:stretch;position:relative}.split-carousel__viewport--static[data-v-f812babe]{display:flex;align-items:center;justify-content:space-between}.split-carousel__viewport--static[data-v-f812babe] :deep(.split-carousel__item){align-self:stretch}.split-carousel__left[data-v-f812babe],.split-carousel__right[data-v-f812babe]{align-self:center;padding:5px}.split-carousel__left-button[data-v-f812babe],.split-carousel__right-button[data-v-f812babe]{height:30px;width:30px;text-align:center;line-height:30px;border:1px solid #dcdfe6;border-radius:50%;cursor:pointer;background-color:#fff;transition:border-color,background-color .15s;display:flex;align-items:center;justify-content:center}.split-carousel__left-button[data-v-f812babe]:hover,.split-carousel__right-button[data-v-f812babe]:hover{border-color:#c6e2ff;background-color:#ecf5ff}.split-carousel__left-button:hover .arrow[data-v-f812babe],.split-carousel__right-button:hover .arrow[data-v-f812babe]{border-top-color:#c6e2ff;border-left-color:#c6e2ff}.arrow[data-v-f812babe]{height:6px;width:6px;border:2px solid;transition:border-color .15s;border-top-color:#dcdfe6;border-left-color:#dcdfe6;border-right-color:transparent;border-bottom-color:transparent}.arrow.left[data-v-f812babe]{transform:translate(2px) rotate(-45deg)}.arrow.right[data-v-f812babe]{transform:translate(-2px) rotate(135deg)}.split-carousel__item[data-v-be8f1d2c]{display:none;transition-property:transform;will-change:transfrom}.split-carousel__item--transition[data-v-be8f1d2c]{position:absolute;left:0;top:0;height:100%}.split-carousel__item--stag[data-v-be8f1d2c]{display:block}")),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import T from "vue";
import j, { defineComponent as k, ref as C, computed as d, reactive as q, toRefs as D, provide as H, watch as z, onMounted as N, nextTick as G, onUnmounted as L, inject as J } from "@vue/composition-api/dist/vue-composition-api.mjs";
function K(e) {
  e = e || T, e && !e.__composition_api_installed__ && e.use(j);
}
K(T);
T.version;
const Q = k({
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
  setup(e, n) {
    const i = C(null), r = C([]), v = (a) => r.value.push(a), f = (a) => {
      const u = r.value.findIndex((A) => A.uid === a);
      u !== -1 && r.value.splice(u, 1);
    }, m = C(0), _ = d(() => {
      const a = (m.value - e.itemWidth * e.displayAmount) / (e.displayAmount - 1), u = a + e.itemWidth;
      return {
        isStatic: r.value.length <= e.displayAmount,
        gapWidth: a,
        viewportWidth: m.value,
        itemWidth: e.itemWidth,
        itemBlockWidth: u,
        prependPosition: -1 * u,
        appendPostion: m.value + a
      };
    }), t = C(0), c = d(
      () => t.value + e.displayAmount === r.value.length
    ), p = d(() => t.value === 0), g = d(
      () => e.displayAmount + 2 >= r.value.length
    ), s = q({
      resetting: !1,
      action: "next"
    }), w = d(() => {
      var I, U;
      const a = t.value, u = r.value, A = u.length - 1, B = Array.from({ length: e.displayAmount }).map(
        (E, X) => {
          var V;
          return (V = u[(a + X) % u.length]) == null ? void 0 : V.uid;
        }
      ), b = {
        prependUid: (I = u[p.value ? A : a - 1]) == null ? void 0 : I.uid,
        stagUids: B,
        appendUid: (U = u[(a + e.displayAmount) % u.length]) == null ? void 0 : U.uid
      };
      return b.prependUid === b.appendUid && (s.action === "prev" && (b.prependUid = -1), s.action === "next" && (b.appendUid = -1)), b;
    }), h = D(e);
    H("injectCarouselScope", {
      speed: h.speed,
      timingFunction: h.timingFunction,
      stag: w,
      reset: s,
      addItem: v,
      removeItem: f,
      layout: _
    });
    const x = d(() => !(e.arrowVisible === "default" && (_.value.isStatic || p.value && !e.loop))), $ = d(() => !(e.arrowVisible === "default" && (_.value.isStatic || c.value && !e.loop))), S = (a) => {
      if (_.value.isStatic || !e.loop && (a === "next" && c.value || a === "prev" && p.value))
        return;
      const u = () => {
        a === "next" && (t.value = (t.value + 1) % r.value.length), a === "prev" && (t.value = p.value ? r.value.length - 1 : t.value - 1);
      };
      if (!g.value) {
        u();
        return;
      }
      s.resetting = !0, s.action = a, requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          s.resetting = !1, u();
        });
      });
    };
    let l;
    const o = () => {
      clearTimeout(l), S("next"), e.autoplay && (l = setTimeout(() => o(), e.interval));
    }, y = () => {
      clearTimeout(l), S("prev"), e.autoplay && (l = setTimeout(() => y(), e.interval));
    }, M = () => {
      e.autoplay && e.pauseOnHover && clearTimeout(l);
    }, O = () => {
      e.autoplay && e.pauseOnHover && (clearTimeout(l), l = setTimeout(() => o(), e.interval));
    };
    z(
      () => e.autoplay,
      (a) => {
        a ? l = setTimeout(() => o(), e.interval) : clearTimeout(l);
      }
    );
    const R = () => {
      document.visibilityState === "hidden" && clearTimeout(l), document.visibilityState === "visible" && e.autoplay && (l = setTimeout(() => o(), e.interval));
    };
    return N(() => {
      G(() => {
        i.value !== null && (m.value = i.value.clientWidth), e.autoplay && (l = setTimeout(() => o(), e.interval)), document.addEventListener(
          "visibilitychange",
          R
        );
      });
    }), L(() => {
      clearTimeout(l), document.removeEventListener(
        "visibilitychange",
        R
      );
    }), {
      prev: y,
      next: o,
      enter: M,
      leave: O,
      layout: _,
      viewportDOMRef: i,
      hasLeftSlot: n.slots.left !== void 0,
      hasRightSlot: n.slots.right !== void 0,
      isLeftArrowVisiable: x,
      isRightArrowVisiable: $,
      activeIndex: t,
      items: r
    };
  }
});
var Y = function() {
  var e = this, n = e.$createElement, i = e._self._c || n;
  return i("div", {
    staticClass: "split-carousel",
    style: {
      height: `${typeof e.height == "string" ? e.height : `${e.height}px`}`
    }
  }, [i("div", {
    staticClass: "split-carousel__left",
    on: {
      click: e.prev
    }
  }, [i("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: e.isLeftArrowVisiable,
      expression: "isLeftArrowVisiable"
    }]
  }, [e.hasLeftSlot ? e._t("left") : i("button", {
    staticClass: "split-carousel__left-button"
  }, [i("div", {
    staticClass: "arrow left"
  })])], 2)]), i("div", {
    ref: "viewportDOMRef",
    staticClass: "split-carousel__viewport",
    class: {
      "split-carousel__viewport--static": e.layout.isStatic
    },
    on: {
      mouseenter: e.enter,
      mouseleave: e.leave
    }
  }, [e._t("default")], 2), i("div", {
    staticClass: "split-carousel__right",
    on: {
      click: e.next
    }
  }, [i("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: e.isRightArrowVisiable,
      expression: "isRightArrowVisiable"
    }]
  }, [e.hasRightSlot ? e._t("right") : i("button", {
    staticClass: "split-carousel__right-button"
  }, [i("div", {
    staticClass: "arrow right"
  })])], 2)])]);
}, Z = [];
function P(e, n, i, r, v, f, m, _) {
  var t = typeof e == "function" ? e.options : e;
  n && (t.render = n, t.staticRenderFns = i, t._compiled = !0), r && (t.functional = !0), f && (t._scopeId = "data-v-" + f);
  var c;
  if (m ? (c = function(s) {
    s = s || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !s && typeof __VUE_SSR_CONTEXT__ < "u" && (s = __VUE_SSR_CONTEXT__), v && v.call(this, s), s && s._registeredComponents && s._registeredComponents.add(m);
  }, t._ssrRegister = c) : v && (c = _ ? function() {
    v.call(
      this,
      (t.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : v), c)
    if (t.functional) {
      t._injectStyles = c;
      var p = t.render;
      t.render = function(w, h) {
        return c.call(h), p(w, h);
      };
    } else {
      var g = t.beforeCreate;
      t.beforeCreate = g ? [].concat(g, c) : [c];
    }
  return {
    exports: e,
    options: t
  };
}
const F = {};
var ee = /* @__PURE__ */ P(
  Q,
  Y,
  Z,
  !1,
  te,
  "f812babe",
  null,
  null
);
function te(e) {
  for (let n in F)
    this[n] = F[n];
}
const ie = /* @__PURE__ */ function() {
  return ee.exports;
}(), ne = k({
  name: "SplitCarouselItem",
  setup() {
    let e = Math.random();
    const n = J(
      "injectCarouselScope"
    ), i = C(!1), { layout: r, stag: v, reset: f, addItem: m, removeItem: _ } = n;
    N(() => {
      m({ uid: e }), requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          i.value = !0;
        });
      });
    }), L(() => {
      _(e);
    });
    const t = d(() => e === v.value.prependUid), c = d(() => e === v.value.appendUid), p = d(() => v.value.stagUids.findIndex((h) => h === e)), g = d(() => p.value !== -1), s = d(() => !!(!i.value || f.resetting));
    return {
      itemStyle: d(() => {
        const {
          itemWidth: h,
          isStatic: x,
          itemBlockWidth: $,
          appendPostion: S,
          prependPosition: l
        } = r.value;
        let o = {
          width: `${h}px`,
          transitionDuration: `${s.value ? 0 : n.speed.value}ms`,
          transitionTimingFunction: n.timingFunction.value
        };
        if (x)
          return o.display = "block", o;
        if (g.value && (o = {
          ...o,
          display: "block",
          transform: `translateX(${p.value * $}px)`
        }), t.value) {
          const y = f.resetting && f.action === "next";
          o = {
            ...o,
            display: "block",
            transform: `translateX(${y ? S : l}px)`
          };
        }
        if (c.value) {
          const y = f.resetting && f.action === "prev";
          o = {
            ...o,
            display: "block",
            transform: `translateX(${y ? l : S}px)`
          };
        }
        return o;
      }),
      layout: r
    };
  }
});
var ae = function() {
  var e = this, n = e.$createElement, i = e._self._c || n;
  return i("div", {
    staticClass: "split-carousel__item",
    class: {
      "split-carousel__item--transition": !e.layout.isStatic
    },
    style: e.itemStyle
  }, [e._t("default")], 2);
}, se = [];
const W = {};
var le = /* @__PURE__ */ P(
  ne,
  ae,
  se,
  !1,
  oe,
  "be8f1d2c",
  null,
  null
);
function oe(e) {
  for (let n in W)
    this[n] = W[n];
}
const re = /* @__PURE__ */ function() {
  return le.exports;
}(), de = (e, n) => {
  const i = (n == null ? void 0 : n.prefix) || "";
  e.component(`${i}SplitCarousel`, ie), e.component(`${i}SplitCarouselItem`, re);
};
export {
  ie as SplitCarousel,
  re as SplitCarouselItem,
  de as default,
  de as install
};
