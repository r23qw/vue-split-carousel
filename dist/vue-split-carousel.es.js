(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".split-carousel[data-v-4723254a]{display:flex;width:100%;align-items:center;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.split-carousel__viewport[data-v-4723254a]{flex-grow:1;overflow:hidden;align-self:stretch;position:relative}.split-carousel__viewport--static[data-v-4723254a]{display:flex;align-items:center;justify-content:space-between}.split-carousel__viewport--static[data-v-4723254a] .split-carousel__item{align-self:stretch}.split-carousel__left[data-v-4723254a],.split-carousel__right[data-v-4723254a]{align-self:center;padding:5px}.split-carousel__left-button[data-v-4723254a],.split-carousel__right-button[data-v-4723254a]{height:30px;width:30px;text-align:center;line-height:30px;border:1px solid #dcdfe6;border-radius:50%;cursor:pointer;background-color:#fff;transition:border-color,background-color .15s;display:flex;align-items:center;justify-content:center}.split-carousel__left-button[data-v-4723254a]:hover,.split-carousel__right-button[data-v-4723254a]:hover{border-color:#c6e2ff;background-color:#ecf5ff}.split-carousel__left-button:hover .arrow[data-v-4723254a],.split-carousel__right-button:hover .arrow[data-v-4723254a]{border-top-color:#c6e2ff;border-left-color:#c6e2ff}.arrow[data-v-4723254a]{height:6px;width:6px;border:2px solid;transition:border-color .15s;border-top-color:#dcdfe6;border-left-color:#dcdfe6;border-right-color:transparent;border-bottom-color:transparent}.arrow.left[data-v-4723254a]{transform:translate(2px) rotate(-45deg)}.arrow.right[data-v-4723254a]{transform:translate(-2px) rotate(135deg)}.split-carousel__item[data-v-d7ce678a]{display:none;transition-property:transform;will-change:transfrom}.split-carousel__item--transition[data-v-d7ce678a]{position:absolute;left:0;top:0;height:100%}.split-carousel__item--stag[data-v-d7ce678a]{display:block}")),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import { defineComponent as M, ref as b, computed as r, reactive as J, toRefs as K, provide as Q, watch as Y, onMounted as N, nextTick as Z, onUnmounted as P, openBlock as I, createElementBlock as $, normalizeStyle as O, createElementVNode as y, withDirectives as B, renderSlot as A, vShow as L, normalizeClass as E, pushScopeId as ee, popScopeId as te, getCurrentInstance as ie, inject as ne } from "vue";
const le = M({
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
    const o = b(null), n = b([]), d = (i) => n.value.push(i), c = (i) => {
      const s = n.value.findIndex((U) => U.uid === i);
      s !== -1 && n.value.splice(s, 1);
    }, u = b(0), f = r(() => {
      const i = (u.value - e.itemWidth * e.displayAmount) / (e.displayAmount - 1), s = i + e.itemWidth;
      return {
        isStatic: n.value.length <= e.displayAmount,
        gapWidth: i,
        viewportWidth: u.value,
        itemWidth: e.itemWidth,
        itemBlockWidth: s,
        prependPosition: -1 * s,
        appendPostion: u.value + i
      };
    }), v = b(0), w = r(
      () => v.value + e.displayAmount === n.value.length
    ), p = r(() => v.value === 0), C = r(
      () => e.displayAmount + 2 >= n.value.length
    ), m = J({
      resetting: !1,
      action: "next"
    }), W = r(() => {
      var F, R;
      const i = v.value, s = n.value, U = s.length - 1, X = Array.from({ length: e.displayAmount }).map(
        (z, G) => {
          var V;
          return (V = s[(i + G) % s.length]) == null ? void 0 : V.uid;
        }
      ), _ = {
        prependUid: (F = s[p.value ? U : i - 1]) == null ? void 0 : F.uid,
        stagUids: X,
        appendUid: (R = s[(i + e.displayAmount) % s.length]) == null ? void 0 : R.uid
      };
      return _.prependUid === _.appendUid && (m.action === "prev" && (_.prependUid = -1), m.action === "next" && (_.appendUid = -1)), _;
    }), h = K(e);
    Q("injectCarouselScope", {
      speed: h.speed,
      timingFunction: h.timingFunction,
      stag: W,
      reset: m,
      addItem: d,
      removeItem: c,
      layout: f
    });
    const k = r(() => !(e.arrowVisible === "default" && (f.value.isStatic || p.value && !e.loop))), T = r(() => !(e.arrowVisible === "default" && (f.value.isStatic || w.value && !e.loop))), S = (i) => {
      if (f.value.isStatic || !e.loop && (i === "next" && w.value || i === "prev" && p.value))
        return;
      const s = () => {
        i === "next" && (v.value = (v.value + 1) % n.value.length), i === "prev" && (v.value = p.value ? n.value.length - 1 : v.value - 1);
      };
      if (!C.value) {
        s();
        return;
      }
      m.resetting = !0, m.action = i, requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          m.resetting = !1, s();
        });
      });
    };
    let l;
    const a = () => {
      clearTimeout(l), S("next"), e.autoplay && (l = setTimeout(() => a(), e.interval));
    }, g = () => {
      clearTimeout(l), S("prev"), e.autoplay && (l = setTimeout(() => g(), e.interval));
    }, D = () => {
      e.autoplay && e.pauseOnHover && clearTimeout(l);
    }, H = () => {
      e.autoplay && e.pauseOnHover && (clearTimeout(l), l = setTimeout(() => a(), e.interval));
    };
    Y(
      () => e.autoplay,
      (i) => {
        i ? l = setTimeout(() => a(), e.interval) : clearTimeout(l);
      }
    );
    const x = () => {
      document.visibilityState === "hidden" && clearTimeout(l), document.visibilityState === "visible" && e.autoplay && (l = setTimeout(() => a(), e.interval));
    };
    return N(() => {
      Z(() => {
        o.value !== null && (u.value = o.value.clientWidth), e.autoplay && (l = setTimeout(() => a(), e.interval)), document.addEventListener(
          "visibilitychange",
          x
        );
      });
    }), P(() => {
      clearTimeout(l), document.removeEventListener(
        "visibilitychange",
        x
      );
    }), {
      prev: g,
      next: a,
      enter: D,
      leave: H,
      layout: f,
      viewportDOMRef: o,
      hasLeftSlot: t.slots.left !== void 0,
      hasRightSlot: t.slots.right !== void 0,
      isLeftArrowVisiable: k,
      isRightArrowVisiable: T
    };
  }
});
const j = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, d] of t)
    o[n] = d;
  return o;
}, q = (e) => (ee("data-v-4723254a"), e = e(), te(), e), ae = {
  key: 1,
  class: "split-carousel__left-button"
}, se = /* @__PURE__ */ q(() => /* @__PURE__ */ y("div", { class: "arrow left" }, null, -1)), oe = [
  se
], ue = {
  key: 1,
  class: "split-carousel__right-button"
}, re = /* @__PURE__ */ q(() => /* @__PURE__ */ y("div", { class: "arrow right" }, null, -1)), de = [
  re
];
function ce(e, t, o, n, d, c) {
  return I(), $("div", {
    class: "split-carousel",
    style: O({
      height: `${typeof e.height == "string" ? e.height : `${e.height}px`}`
    })
  }, [
    y("div", {
      class: "split-carousel__left",
      onClick: t[0] || (t[0] = (...u) => e.prev && e.prev(...u))
    }, [
      B(y("div", null, [
        e.hasLeftSlot ? A(e.$slots, "left", { key: 0 }, void 0, !0) : (I(), $("button", ae, oe))
      ], 512), [
        [L, e.isLeftArrowVisiable]
      ])
    ]),
    y("div", {
      ref: "viewportDOMRef",
      class: E(["split-carousel__viewport", { "split-carousel__viewport--static": e.layout.isStatic }]),
      onMouseenter: t[1] || (t[1] = (...u) => e.enter && e.enter(...u)),
      onMouseleave: t[2] || (t[2] = (...u) => e.leave && e.leave(...u))
    }, [
      A(e.$slots, "default", {}, void 0, !0)
    ], 34),
    y("div", {
      class: "split-carousel__right",
      onClick: t[3] || (t[3] = (...u) => e.next && e.next(...u))
    }, [
      B(y("div", null, [
        e.hasRightSlot ? A(e.$slots, "right", { key: 0 }, void 0, !0) : (I(), $("button", ue, de))
      ], 512), [
        [L, e.isRightArrowVisiable]
      ])
    ])
  ], 4);
}
const ve = /* @__PURE__ */ j(le, [["render", ce], ["__scopeId", "data-v-4723254a"]]), me = M({
  name: "SplitCarouselItem",
  setup() {
    const e = ie(), t = ne(
      "injectCarouselScope"
    ), o = b(!1);
    if (!e || !t)
      throw new Error("SplitCarouselItem Must include by SplitCarousel");
    const { layout: n, stag: d, reset: c, addItem: u, removeItem: f } = t;
    N(() => {
      u({ uid: e.uid }), requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          o.value = !0;
        });
      });
    }), P(() => {
      f(e.uid);
    });
    const v = r(() => e.uid === d.value.prependUid), w = r(() => e.uid === d.value.appendUid), p = r(() => d.value.stagUids.findIndex((h) => h === e.uid)), C = r(() => p.value !== -1), m = r(() => !!(!o.value || c.resetting));
    return {
      itemStyle: r(() => {
        const {
          itemWidth: h,
          isStatic: k,
          itemBlockWidth: T,
          appendPostion: S,
          prependPosition: l
        } = n.value;
        let a = {
          width: `${h}px`,
          transitionDuration: `${m.value ? 0 : t.speed.value}ms`,
          transitionTimingFunction: t.timingFunction.value
        };
        if (k)
          return a.display = "block", a;
        if (C.value && (a = {
          ...a,
          display: "block",
          transform: `translateX(${p.value * T}px)`
        }), v.value) {
          const g = c.resetting && c.action === "next";
          a = {
            ...a,
            display: "block",
            transform: `translateX(${g ? S : l}px)`
          };
        }
        if (w.value) {
          const g = c.resetting && c.action === "prev";
          a = {
            ...a,
            display: "block",
            transform: `translateX(${g ? l : S}px)`
          };
        }
        return a;
      }),
      layout: n
    };
  }
});
function fe(e, t, o, n, d, c) {
  return I(), $("div", {
    class: E(["split-carousel__item", { "split-carousel__item--transition": !e.layout.isStatic }]),
    style: O(e.itemStyle)
  }, [
    A(e.$slots, "default", {}, void 0, !0)
  ], 6);
}
const pe = /* @__PURE__ */ j(me, [["render", fe], ["__scopeId", "data-v-d7ce678a"]]), he = (e, t) => {
  const o = (t == null ? void 0 : t.prefix) || "";
  e.component(`${o}SplitCarousel`, ve), e.component(`${o}SplitCarouselItem`, pe);
};
export {
  ve as SplitCarousel,
  pe as SplitCarouselItem,
  he as install
};
//# sourceMappingURL=vue-split-carousel.es.js.map
