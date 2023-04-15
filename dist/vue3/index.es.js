(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".split-carousel[data-v-4a4bcbbd]{display:flex;width:100%;align-items:center;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.split-carousel__viewport[data-v-4a4bcbbd]{flex-grow:1;overflow:hidden;align-self:stretch;position:relative}.split-carousel__viewport--static[data-v-4a4bcbbd]{display:flex;align-items:center;justify-content:space-between}.split-carousel__viewport--static[data-v-4a4bcbbd] .split-carousel__item{align-self:stretch}.split-carousel__left[data-v-4a4bcbbd],.split-carousel__right[data-v-4a4bcbbd]{align-self:center;padding:5px}.split-carousel__left-button[data-v-4a4bcbbd],.split-carousel__right-button[data-v-4a4bcbbd]{height:30px;width:30px;text-align:center;line-height:30px;border:1px solid #dcdfe6;border-radius:50%;cursor:pointer;background-color:#fff;transition:border-color,background-color .15s;display:flex;align-items:center;justify-content:center}.split-carousel__left-button[data-v-4a4bcbbd]:hover,.split-carousel__right-button[data-v-4a4bcbbd]:hover{border-color:#c6e2ff;background-color:#ecf5ff}.split-carousel__left-button:hover .arrow[data-v-4a4bcbbd],.split-carousel__right-button:hover .arrow[data-v-4a4bcbbd]{border-top-color:#c6e2ff;border-left-color:#c6e2ff}.arrow[data-v-4a4bcbbd]{height:6px;width:6px;border:2px solid;transition:border-color .15s;border-top-color:#dcdfe6;border-left-color:#dcdfe6;border-right-color:transparent;border-bottom-color:transparent}.arrow.left[data-v-4a4bcbbd]{transform:translate(2px) rotate(-45deg)}.arrow.right[data-v-4a4bcbbd]{transform:translate(-2px) rotate(135deg)}.split-carousel__item[data-v-e39df7ff]{display:none;transition-property:transform;will-change:transfrom}.split-carousel__item--transition[data-v-e39df7ff]{position:absolute;left:0;top:0;height:100%}.split-carousel__item--stag[data-v-e39df7ff]{display:block}")),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import { defineComponent as N, ref as b, computed as u, reactive as J, toRefs as K, provide as Q, watch as Y, onMounted as P, nextTick as Z, onUnmounted as O, openBlock as A, createElementBlock as C, normalizeStyle as E, createElementVNode as y, withDirectives as B, renderSlot as k, vShow as L, normalizeClass as j, pushScopeId as ee, popScopeId as te, getCurrentInstance as ie, inject as ne } from "vue";
const le = N({
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
    const a = b(null), l = b([]), v = (i) => l.value.push(i), m = (i) => {
      const o = l.value.findIndex((x) => x.uid === i);
      o !== -1 && l.value.splice(o, 1);
    }, n = b(0), p = u(() => {
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
    }), d = b(0), w = u(
      () => d.value + e.displayAmount === l.value.length
    ), h = u(() => d.value === 0), I = u(
      () => e.displayAmount + 2 >= l.value.length
    ), f = J({
      resetting: !1,
      action: "next"
    }), T = u(() => {
      var R, V;
      const i = d.value, o = l.value, x = o.length - 1, X = Array.from({ length: e.displayAmount }).map(
        (z, G) => {
          var M;
          return (M = o[(i + G) % o.length]) == null ? void 0 : M.uid;
        }
      ), _ = {
        prependUid: (R = o[h.value ? x : i - 1]) == null ? void 0 : R.uid,
        stagUids: X,
        appendUid: (V = o[(i + e.displayAmount) % o.length]) == null ? void 0 : V.uid
      };
      return _.prependUid === _.appendUid && (f.action === "prev" && (_.prependUid = -1), f.action === "next" && (_.appendUid = -1)), _;
    }), U = K(e);
    Q("injectCarouselScope", {
      speed: U.speed,
      timingFunction: U.timingFunction,
      stag: T,
      reset: f,
      addItem: v,
      removeItem: m,
      layout: p
    });
    const g = u(() => !(e.arrowVisible === "default" && (p.value.isStatic || h.value && !e.loop))), W = u(() => !(e.arrowVisible === "default" && (p.value.isStatic || w.value && !e.loop))), $ = (i) => {
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
    }, S = () => {
      e.autoplay && e.pauseOnHover && clearTimeout(s);
    }, H = () => {
      e.autoplay && e.pauseOnHover && (clearTimeout(s), s = setTimeout(() => c(), e.interval));
    };
    Y(
      () => e.autoplay,
      (i) => {
        i ? s = setTimeout(() => c(), e.interval) : clearTimeout(s);
      }
    );
    const F = () => {
      document.visibilityState === "hidden" && clearTimeout(s), document.visibilityState === "visible" && e.autoplay && (s = setTimeout(() => c(), e.interval));
    };
    return P(() => {
      Z(() => {
        a.value !== null && (n.value = a.value.clientWidth), e.autoplay && (s = setTimeout(() => c(), e.interval)), document.addEventListener(
          "visibilitychange",
          F
        );
      });
    }), O(() => {
      clearTimeout(s), document.removeEventListener(
        "visibilitychange",
        F
      );
    }), {
      prev: r,
      next: c,
      enter: S,
      leave: H,
      layout: p,
      viewportDOMRef: a,
      hasLeftSlot: t.slots.left !== void 0,
      hasRightSlot: t.slots.right !== void 0,
      isLeftArrowVisiable: g,
      isRightArrowVisiable: W,
      activeIndex: d,
      items: l
    };
  }
});
const q = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [l, v] of t)
    a[l] = v;
  return a;
}, D = (e) => (ee("data-v-4a4bcbbd"), e = e(), te(), e), ae = {
  key: 1,
  class: "split-carousel__left-button"
}, se = /* @__PURE__ */ D(() => /* @__PURE__ */ y("div", { class: "arrow left" }, null, -1)), oe = [
  se
], ue = {
  key: 1,
  class: "split-carousel__right-button"
}, re = /* @__PURE__ */ D(() => /* @__PURE__ */ y("div", { class: "arrow right" }, null, -1)), de = [
  re
];
function ce(e, t, a, l, v, m) {
  return A(), C("div", {
    class: "split-carousel",
    style: E({
      height: `${typeof e.height == "string" ? e.height : `${e.height}px`}`
    })
  }, [
    y("div", {
      class: "split-carousel__left",
      onClick: t[0] || (t[0] = (...n) => e.prev && e.prev(...n))
    }, [
      B(y("div", null, [
        e.hasLeftSlot ? k(e.$slots, "left", { key: 0 }, void 0, !0) : (A(), C("button", ae, oe))
      ], 512), [
        [L, e.isLeftArrowVisiable]
      ])
    ]),
    y("div", {
      ref: "viewportDOMRef",
      class: j(["split-carousel__viewport", { "split-carousel__viewport--static": e.layout.isStatic }]),
      onMouseenter: t[1] || (t[1] = (...n) => e.enter && e.enter(...n)),
      onMouseleave: t[2] || (t[2] = (...n) => e.leave && e.leave(...n))
    }, [
      k(e.$slots, "default", {}, void 0, !0)
    ], 34),
    y("div", {
      class: "split-carousel__right",
      onClick: t[3] || (t[3] = (...n) => e.next && e.next(...n))
    }, [
      B(y("div", null, [
        e.hasRightSlot ? k(e.$slots, "right", { key: 0 }, void 0, !0) : (A(), C("button", ue, de))
      ], 512), [
        [L, e.isRightArrowVisiable]
      ])
    ])
  ], 4);
}
const ve = /* @__PURE__ */ q(le, [["render", ce], ["__scopeId", "data-v-4a4bcbbd"]]), fe = N({
  name: "SplitCarouselItem",
  setup() {
    let e = ie(), t = Math.random();
    const a = ne(
      "injectCarouselScope"
    ), l = b(!1);
    if (!e || !a)
      throw new Error("SplitCarouselItem Must include by SplitCarousel");
    const { layout: v, stag: m, reset: n, addItem: p, removeItem: d } = a;
    P(() => {
      p({ uid: t }), requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          l.value = !0;
        });
      });
    }), O(() => {
      d(t);
    });
    const w = u(() => t === m.value.prependUid), h = u(() => t === m.value.appendUid), I = u(() => m.value.stagUids.findIndex((g) => g === t)), f = u(() => I.value !== -1), T = u(() => !!(!l.value || n.resetting));
    return {
      itemStyle: u(() => {
        const {
          itemWidth: g,
          isStatic: W,
          itemBlockWidth: $,
          appendPostion: s,
          prependPosition: c
        } = v.value;
        let r = {
          width: `${g}px`,
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
          const S = n.resetting && n.action === "next";
          r = {
            ...r,
            display: "block",
            transform: `translateX(${S ? s : c}px)`
          };
        }
        if (h.value) {
          const S = n.resetting && n.action === "prev";
          r = {
            ...r,
            display: "block",
            transform: `translateX(${S ? c : s}px)`
          };
        }
        return r;
      }),
      layout: v
    };
  }
});
function me(e, t, a, l, v, m) {
  return A(), C("div", {
    class: j(["split-carousel__item", { "split-carousel__item--transition": !e.layout.isStatic }]),
    style: E(e.itemStyle)
  }, [
    k(e.$slots, "default", {}, void 0, !0)
  ], 6);
}
const pe = /* @__PURE__ */ q(fe, [["render", me], ["__scopeId", "data-v-e39df7ff"]]), he = (e, t) => {
  const a = (t == null ? void 0 : t.prefix) || "";
  e.component(`${a}SplitCarousel`, ve), e.component(`${a}SplitCarouselItem`, pe);
};
export {
  ve as SplitCarousel,
  pe as SplitCarouselItem,
  he as default,
  he as install
};
