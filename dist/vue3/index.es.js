(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".split-carousel[data-v-411ee54d]{display:flex;width:100%;align-items:center;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.split-carousel__viewport[data-v-411ee54d]{flex-grow:1;overflow:hidden;align-self:stretch;position:relative}.split-carousel__viewport--static[data-v-411ee54d]{display:flex;align-items:center;justify-content:space-between}.split-carousel__viewport--static[data-v-411ee54d] .split-carousel__item{align-self:stretch}.split-carousel__left[data-v-411ee54d],.split-carousel__right[data-v-411ee54d]{align-self:center;padding:5px}.split-carousel__left-button[data-v-411ee54d],.split-carousel__right-button[data-v-411ee54d]{height:30px;width:30px;text-align:center;line-height:30px;border:1px solid #dcdfe6;border-radius:50%;cursor:pointer;background-color:#fff;transition:border-color,background-color .15s;display:flex;align-items:center;justify-content:center}.split-carousel__left-button[data-v-411ee54d]:hover,.split-carousel__right-button[data-v-411ee54d]:hover{border-color:#c6e2ff;background-color:#ecf5ff}.split-carousel__left-button:hover .arrow[data-v-411ee54d],.split-carousel__right-button:hover .arrow[data-v-411ee54d]{border-top-color:#c6e2ff;border-left-color:#c6e2ff}.arrow[data-v-411ee54d]{height:6px;width:6px;border:2px solid;transition:border-color .15s;border-top-color:#dcdfe6;border-left-color:#dcdfe6;border-right-color:transparent;border-bottom-color:transparent}.arrow.left[data-v-411ee54d]{transform:translate(2px) rotate(-45deg)}.arrow.right[data-v-411ee54d]{transform:translate(-2px) rotate(135deg)}.split-carousel__item[data-v-e39df7ff]{display:none;transition-property:transform;will-change:transfrom}.split-carousel__item--transition[data-v-e39df7ff]{position:absolute;left:0;top:0;height:100%}.split-carousel__item--stag[data-v-e39df7ff]{display:block}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { defineComponent as O, ref as g, computed as u, reactive as K, toRefs as Q, provide as Y, watch as Z, onMounted as M, nextTick as ee, onUnmounted as E, openBlock as A, createElementBlock as C, normalizeStyle as j, createElementVNode as y, withDirectives as N, renderSlot as k, vShow as P, normalizeClass as q, pushScopeId as te, popScopeId as ie, getCurrentInstance as ne, inject as le } from "vue";
const ae = O({
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
    const a = g(null), l = g([]), v = (i) => l.value.push(i), m = (i) => {
      const o = l.value.findIndex((F) => F.uid === i);
      o !== -1 && l.value.splice(o, 1);
    }, n = g(0), p = u(() => {
      const i = (n.value - e.itemWidth * e.displayAmount) / (e.displayAmount - 1), o = i + e.itemWidth;
      return {
        isStatic: l.value.length <= e.displayAmount,
        gapWidth: i,
        viewportWidth: n.value,
        itemWidth: e.itemWidth,
        itemBlockWidth: o,
        prependPosition: -1 * o,
        appendPostion: n.value + i
      };
    }), d = g(0), w = u(
      () => d.value + e.displayAmount === l.value.length
    ), h = u(() => d.value === 0), I = u(
      () => e.displayAmount + 2 >= l.value.length
    ), f = K({
      resetting: !1,
      action: "next"
    }), T = u(() => {
      var V, B;
      const i = d.value, o = l.value, F = o.length - 1, z = Array.from({ length: e.displayAmount }).map(
        (G, J) => {
          var L;
          return (L = o[(i + J) % o.length]) == null ? void 0 : L.uid;
        }
      ), b = {
        prependUid: (V = o[h.value ? F : i - 1]) == null ? void 0 : V.uid,
        stagUids: z,
        appendUid: (B = o[(i + e.displayAmount) % o.length]) == null ? void 0 : B.uid
      };
      return b.prependUid === b.appendUid && (f.action === "prev" && (b.prependUid = -1), f.action === "next" && (b.appendUid = -1)), b;
    }), U = Q(e);
    Y("injectCarouselScope", {
      speed: U.speed,
      timingFunction: U.timingFunction,
      stag: T,
      reset: f,
      addItem: v,
      removeItem: m,
      layout: p
    });
    const S = u(() => !(e.arrowVisible === "default" && (p.value.isStatic || h.value && !e.loop))), W = u(() => !(e.arrowVisible === "default" && (p.value.isStatic || w.value && !e.loop))), $ = (i) => {
      if (p.value.isStatic || !e.loop && (i === "next" && w.value || i === "prev" && h.value))
        return;
      const o = () => {
        i === "next" && (d.value = (d.value + 1) % l.value.length), i === "prev" && (d.value = h.value ? l.value.length - 1 : d.value - 1);
      };
      if (!I.value) {
        o();
        return;
      }
      f.resetting = !0, f.action = i, requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          f.resetting = !1, o();
        });
      });
    };
    let s;
    const c = () => {
      clearTimeout(s), $("next"), e.autoplay && (s = setTimeout(() => c(), e.interval));
    }, r = () => {
      clearTimeout(s), $("prev"), e.autoplay && (s = setTimeout(() => r(), e.interval));
    }, _ = () => {
      e.autoplay && e.pauseOnHover && clearTimeout(s);
    }, X = () => {
      e.autoplay && e.pauseOnHover && (clearTimeout(s), s = setTimeout(() => c(), e.interval));
    };
    Z(
      () => e.autoplay,
      (i) => {
        i ? s = setTimeout(() => c(), e.interval) : clearTimeout(s);
      }
    );
    const R = () => {
      document.visibilityState === "hidden" && clearTimeout(s), document.visibilityState === "visible" && e.autoplay && (s = setTimeout(() => c(), e.interval));
    };
    M(() => {
      ee(() => {
        a.value !== null && (n.value = a.value.clientWidth), e.autoplay && (s = setTimeout(() => c(), e.interval)), document.addEventListener(
          "visibilitychange",
          R
        );
      });
    }), E(() => {
      clearTimeout(s), document.removeEventListener(
        "visibilitychange",
        R
      );
    });
    const x = g(!1);
    return M(() => {
      x.value = !0;
    }), {
      prev: r,
      next: c,
      enter: _,
      leave: X,
      layout: p,
      viewportDOMRef: a,
      hasLeftSlot: t.slots.left !== void 0,
      hasRightSlot: t.slots.right !== void 0,
      isLeftArrowVisiable: S,
      isRightArrowVisiable: W,
      activeIndex: d,
      items: l,
      isMounted: x
    };
  }
});
const D = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [l, v] of t)
    a[l] = v;
  return a;
}, H = (e) => (te("data-v-411ee54d"), e = e(), ie(), e), se = {
  key: 1,
  class: "split-carousel__left-button"
}, oe = /* @__PURE__ */ H(() => /* @__PURE__ */ y("div", { class: "arrow left" }, null, -1)), ue = [
  oe
], re = {
  key: 1,
  class: "split-carousel__right-button"
}, de = /* @__PURE__ */ H(() => /* @__PURE__ */ y("div", { class: "arrow right" }, null, -1)), ce = [
  de
];
function ve(e, t, a, l, v, m) {
  return A(), C("div", {
    class: "split-carousel",
    style: j({
      height: `${typeof e.height == "string" ? e.height : `${e.height}px`}`,
      visibility: e.isMounted ? "visible" : "hidden"
    })
  }, [
    y("div", {
      class: "split-carousel__left",
      onClick: t[0] || (t[0] = (...n) => e.prev && e.prev(...n))
    }, [
      N(y("div", null, [
        e.hasLeftSlot ? k(e.$slots, "left", { key: 0 }, void 0, !0) : (A(), C("button", se, ue))
      ], 512), [
        [P, e.isLeftArrowVisiable]
      ])
    ]),
    y("div", {
      ref: "viewportDOMRef",
      class: q(["split-carousel__viewport", { "split-carousel__viewport--static": e.layout.isStatic }]),
      onMouseenter: t[1] || (t[1] = (...n) => e.enter && e.enter(...n)),
      onMouseleave: t[2] || (t[2] = (...n) => e.leave && e.leave(...n))
    }, [
      k(e.$slots, "default", {}, void 0, !0)
    ], 34),
    y("div", {
      class: "split-carousel__right",
      onClick: t[3] || (t[3] = (...n) => e.next && e.next(...n))
    }, [
      N(y("div", null, [
        e.hasRightSlot ? k(e.$slots, "right", { key: 0 }, void 0, !0) : (A(), C("button", re, ce))
      ], 512), [
        [P, e.isRightArrowVisiable]
      ])
    ])
  ], 4);
}
const fe = /* @__PURE__ */ D(ae, [["render", ve], ["__scopeId", "data-v-411ee54d"]]), me = O({
  name: "SplitCarouselItem",
  setup() {
    let e = ne(), t = Math.random();
    const a = le(
      "injectCarouselScope"
    ), l = g(!1);
    if (!e || !a)
      throw new Error("SplitCarouselItem Must include by SplitCarousel");
    const { layout: v, stag: m, reset: n, addItem: p, removeItem: d } = a;
    M(() => {
      p({ uid: t }), requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          l.value = !0;
        });
      });
    }), E(() => {
      d(t);
    });
    const w = u(() => t === m.value.prependUid), h = u(() => t === m.value.appendUid), I = u(() => m.value.stagUids.findIndex((S) => S === t)), f = u(() => I.value !== -1), T = u(() => !!(!l.value || n.resetting));
    return {
      itemStyle: u(() => {
        const {
          itemWidth: S,
          isStatic: W,
          itemBlockWidth: $,
          appendPostion: s,
          prependPosition: c
        } = v.value;
        let r = {
          width: `${S}px`,
          transitionDuration: `${T.value ? 0 : a.speed.value}ms`,
          transitionTimingFunction: a.timingFunction.value
        };
        if (W)
          return r.display = "block", r;
        if (f.value && (r = {
          ...r,
          display: "block",
          transform: `translateX(${I.value * $}px)`
        }), w.value) {
          const _ = n.resetting && n.action === "next";
          r = {
            ...r,
            display: "block",
            transform: `translateX(${_ ? s : c}px)`
          };
        }
        if (h.value) {
          const _ = n.resetting && n.action === "prev";
          r = {
            ...r,
            display: "block",
            transform: `translateX(${_ ? c : s}px)`
          };
        }
        return r;
      }),
      layout: v
    };
  }
});
function pe(e, t, a, l, v, m) {
  return A(), C("div", {
    class: q(["split-carousel__item", { "split-carousel__item--transition": !e.layout.isStatic }]),
    style: j(e.itemStyle)
  }, [
    k(e.$slots, "default", {}, void 0, !0)
  ], 6);
}
const ye = /* @__PURE__ */ D(me, [["render", pe], ["__scopeId", "data-v-e39df7ff"]]), ge = (e, t) => {
  const a = (t == null ? void 0 : t.prefix) || "";
  e.component(`${a}SplitCarousel`, fe), e.component(`${a}SplitCarouselItem`, ye);
};
export {
  fe as SplitCarousel,
  ye as SplitCarouselItem,
  ge as default,
  ge as install
};
