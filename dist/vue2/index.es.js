(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".split-carousel[data-v-f812babe]{display:flex;width:100%;align-items:center;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.split-carousel__viewport[data-v-f812babe]{flex-grow:1;overflow:hidden;align-self:stretch;position:relative}.split-carousel__viewport--static[data-v-f812babe]{display:flex;align-items:center;justify-content:space-between}.split-carousel__viewport--static[data-v-f812babe] :deep(.split-carousel__item){align-self:stretch}.split-carousel__left[data-v-f812babe],.split-carousel__right[data-v-f812babe]{align-self:center;padding:5px}.split-carousel__left-button[data-v-f812babe],.split-carousel__right-button[data-v-f812babe]{height:30px;width:30px;text-align:center;line-height:30px;border:1px solid #dcdfe6;border-radius:50%;cursor:pointer;background-color:#fff;transition:border-color,background-color .15s;display:flex;align-items:center;justify-content:center}.split-carousel__left-button[data-v-f812babe]:hover,.split-carousel__right-button[data-v-f812babe]:hover{border-color:#c6e2ff;background-color:#ecf5ff}.split-carousel__left-button:hover .arrow[data-v-f812babe],.split-carousel__right-button:hover .arrow[data-v-f812babe]{border-top-color:#c6e2ff;border-left-color:#c6e2ff}.arrow[data-v-f812babe]{height:6px;width:6px;border:2px solid;transition:border-color .15s;border-top-color:#dcdfe6;border-left-color:#dcdfe6;border-right-color:transparent;border-bottom-color:transparent}.arrow.left[data-v-f812babe]{transform:translate(2px) rotate(-45deg)}.arrow.right[data-v-f812babe]{transform:translate(-2px) rotate(135deg)}.split-carousel__item[data-v-10e86606]{display:none;transition-property:transform;will-change:transfrom}.split-carousel__item--transition[data-v-10e86606]{position:absolute;left:0;top:0;height:100%}.split-carousel__item--stag[data-v-10e86606]{display:block}")),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import T from "vue";
import j, { defineComponent as N, ref as x, computed as d, reactive as q, toRefs as D, provide as H, watch as z, onMounted as L, nextTick as G, onUnmounted as M, getCurrentInstance as J, inject as K } from "@vue/composition-api/dist/vue-composition-api.mjs";
function Q(e) {
  e = e || T, e && !e.__composition_api_installed__ && e.use(j);
}
Q(T);
T.version;
const Y = N({
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
  setup(e, i) {
    const t = x(null), o = x([]), f = (a) => o.value.push(a), p = (a) => {
      const r = o.value.findIndex((I) => I.uid === a);
      r !== -1 && o.value.splice(r, 1);
    }, u = x(0), m = d(() => {
      const a = (u.value - e.itemWidth * e.displayAmount) / (e.displayAmount - 1), r = a + e.itemWidth;
      return {
        isStatic: o.value.length <= e.displayAmount,
        gapWidth: a,
        viewportWidth: u.value,
        itemWidth: e.itemWidth,
        itemBlockWidth: r,
        prependPosition: -1 * r,
        appendPostion: u.value + a
      };
    }), n = x(0), c = d(
      () => n.value + e.displayAmount === o.value.length
    ), h = d(() => n.value === 0), g = d(
      () => e.displayAmount + 2 >= o.value.length
    ), s = q({
      resetting: !1,
      action: "next"
    }), S = d(() => {
      var U, V;
      const a = n.value, r = o.value, I = r.length - 1, E = Array.from({ length: e.displayAmount }).map(
        (B, X) => {
          var F;
          return (F = r[(a + X) % r.length]) == null ? void 0 : F.uid;
        }
      ), w = {
        prependUid: (U = r[h.value ? I : a - 1]) == null ? void 0 : U.uid,
        stagUids: E,
        appendUid: (V = r[(a + e.displayAmount) % r.length]) == null ? void 0 : V.uid
      };
      return w.prependUid === w.appendUid && (s.action === "prev" && (w.prependUid = -1), s.action === "next" && (w.appendUid = -1)), w;
    }), y = D(e);
    H("injectCarouselScope", {
      speed: y.speed,
      timingFunction: y.timingFunction,
      stag: S,
      reset: s,
      addItem: f,
      removeItem: p,
      layout: m
    });
    const C = d(() => !(e.arrowVisible === "default" && (m.value.isStatic || h.value && !e.loop))), A = d(() => !(e.arrowVisible === "default" && (m.value.isStatic || c.value && !e.loop))), $ = (a) => {
      if (m.value.isStatic || !e.loop && (a === "next" && c.value || a === "prev" && h.value))
        return;
      const r = () => {
        a === "next" && (n.value = (n.value + 1) % o.value.length), a === "prev" && (n.value = h.value ? o.value.length - 1 : n.value - 1);
      };
      if (!g.value) {
        r();
        return;
      }
      s.resetting = !0, s.action = a, requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          s.resetting = !1, r();
        });
      });
    };
    let l;
    const _ = () => {
      clearTimeout(l), $("next"), e.autoplay && (l = setTimeout(() => _(), e.interval));
    }, v = () => {
      clearTimeout(l), $("prev"), e.autoplay && (l = setTimeout(() => v(), e.interval));
    }, b = () => {
      e.autoplay && e.pauseOnHover && clearTimeout(l);
    }, O = () => {
      e.autoplay && e.pauseOnHover && (clearTimeout(l), l = setTimeout(() => _(), e.interval));
    };
    z(
      () => e.autoplay,
      (a) => {
        a ? l = setTimeout(() => _(), e.interval) : clearTimeout(l);
      }
    );
    const R = () => {
      document.visibilityState === "hidden" && clearTimeout(l), document.visibilityState === "visible" && e.autoplay && (l = setTimeout(() => _(), e.interval));
    };
    return L(() => {
      G(() => {
        t.value !== null && (u.value = t.value.clientWidth), e.autoplay && (l = setTimeout(() => _(), e.interval)), document.addEventListener(
          "visibilitychange",
          R
        );
      });
    }), M(() => {
      clearTimeout(l), document.removeEventListener(
        "visibilitychange",
        R
      );
    }), {
      prev: v,
      next: _,
      enter: b,
      leave: O,
      layout: m,
      viewportDOMRef: t,
      hasLeftSlot: i.slots.left !== void 0,
      hasRightSlot: i.slots.right !== void 0,
      isLeftArrowVisiable: C,
      isRightArrowVisiable: A,
      activeIndex: n,
      items: o
    };
  }
});
var Z = function() {
  var e = this, i = e.$createElement, t = e._self._c || i;
  return t("div", {
    staticClass: "split-carousel",
    style: {
      height: `${typeof e.height == "string" ? e.height : `${e.height}px`}`
    }
  }, [t("div", {
    staticClass: "split-carousel__left",
    on: {
      click: e.prev
    }
  }, [t("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: e.isLeftArrowVisiable,
      expression: "isLeftArrowVisiable"
    }]
  }, [e.hasLeftSlot ? e._t("left") : t("button", {
    staticClass: "split-carousel__left-button"
  }, [t("div", {
    staticClass: "arrow left"
  })])], 2)]), t("div", {
    ref: "viewportDOMRef",
    staticClass: "split-carousel__viewport",
    class: {
      "split-carousel__viewport--static": e.layout.isStatic
    },
    on: {
      mouseenter: e.enter,
      mouseleave: e.leave
    }
  }, [e._t("default")], 2), t("div", {
    staticClass: "split-carousel__right",
    on: {
      click: e.next
    }
  }, [t("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: e.isRightArrowVisiable,
      expression: "isRightArrowVisiable"
    }]
  }, [e.hasRightSlot ? e._t("right") : t("button", {
    staticClass: "split-carousel__right-button"
  }, [t("div", {
    staticClass: "arrow right"
  })])], 2)])]);
}, ee = [];
function P(e, i, t, o, f, p, u, m) {
  var n = typeof e == "function" ? e.options : e;
  i && (n.render = i, n.staticRenderFns = t, n._compiled = !0), o && (n.functional = !0), p && (n._scopeId = "data-v-" + p);
  var c;
  if (u ? (c = function(s) {
    s = s || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !s && typeof __VUE_SSR_CONTEXT__ < "u" && (s = __VUE_SSR_CONTEXT__), f && f.call(this, s), s && s._registeredComponents && s._registeredComponents.add(u);
  }, n._ssrRegister = c) : f && (c = m ? function() {
    f.call(
      this,
      (n.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : f), c)
    if (n.functional) {
      n._injectStyles = c;
      var h = n.render;
      n.render = function(S, y) {
        return c.call(y), h(S, y);
      };
    } else {
      var g = n.beforeCreate;
      n.beforeCreate = g ? [].concat(g, c) : [c];
    }
  return {
    exports: e,
    options: n
  };
}
const W = {};
var te = /* @__PURE__ */ P(
  Y,
  Z,
  ee,
  !1,
  ie,
  "f812babe",
  null,
  null
);
function ie(e) {
  for (let i in W)
    this[i] = W[i];
}
const ne = /* @__PURE__ */ function() {
  return te.exports;
}(), ae = N({
  name: "SplitCarouselItem",
  setup() {
    let e = J(), i = Math.random();
    const t = K(
      "injectCarouselScope"
    ), o = x(!1);
    if (!e || !t)
      throw new Error("SplitCarouselItem Must include by SplitCarousel");
    const { layout: f, stag: p, reset: u, addItem: m, removeItem: n } = t;
    L(() => {
      m({ uid: i }), requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          o.value = !0;
        });
      });
    }), M(() => {
      n(i);
    });
    const c = d(() => i === p.value.prependUid), h = d(() => i === p.value.appendUid), g = d(() => p.value.stagUids.findIndex((C) => C === i)), s = d(() => g.value !== -1), S = d(() => !!(!o.value || u.resetting));
    return {
      itemStyle: d(() => {
        const {
          itemWidth: C,
          isStatic: A,
          itemBlockWidth: $,
          appendPostion: l,
          prependPosition: _
        } = f.value;
        let v = {
          width: `${C}px`,
          transitionDuration: `${S.value ? 0 : t.speed.value}ms`,
          transitionTimingFunction: t.timingFunction.value
        };
        if (A)
          return v.display = "block", v;
        if (s.value && (v = {
          ...v,
          display: "block",
          transform: `translateX(${g.value * $}px)`
        }), c.value) {
          const b = u.resetting && u.action === "next";
          v = {
            ...v,
            display: "block",
            transform: `translateX(${b ? l : _}px)`
          };
        }
        if (h.value) {
          const b = u.resetting && u.action === "prev";
          v = {
            ...v,
            display: "block",
            transform: `translateX(${b ? _ : l}px)`
          };
        }
        return v;
      }),
      layout: f
    };
  }
});
var se = function() {
  var e = this, i = e.$createElement, t = e._self._c || i;
  return t("div", {
    staticClass: "split-carousel__item",
    class: {
      "split-carousel__item--transition": !e.layout.isStatic
    },
    style: e.itemStyle
  }, [e._t("default")], 2);
}, le = [];
const k = {};
var oe = /* @__PURE__ */ P(
  ae,
  se,
  le,
  !1,
  re,
  "10e86606",
  null,
  null
);
function re(e) {
  for (let i in k)
    this[i] = k[i];
}
const ue = /* @__PURE__ */ function() {
  return oe.exports;
}(), ve = (e, i) => {
  const t = (i == null ? void 0 : i.prefix) || "";
  e.component(`${t}SplitCarousel`, ne), e.component(`${t}SplitCarouselItem`, ue);
};
export {
  ne as SplitCarousel,
  ue as SplitCarouselItem,
  ve as default,
  ve as install
};
