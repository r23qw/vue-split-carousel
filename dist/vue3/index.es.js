(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".split-carousel[data-v-4a4bcbbd]{display:flex;width:100%;align-items:center;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.split-carousel__viewport[data-v-4a4bcbbd]{flex-grow:1;overflow:hidden;align-self:stretch;position:relative}.split-carousel__viewport--static[data-v-4a4bcbbd]{display:flex;align-items:center;justify-content:space-between}.split-carousel__viewport--static[data-v-4a4bcbbd] .split-carousel__item{align-self:stretch}.split-carousel__left[data-v-4a4bcbbd],.split-carousel__right[data-v-4a4bcbbd]{align-self:center;padding:5px}.split-carousel__left-button[data-v-4a4bcbbd],.split-carousel__right-button[data-v-4a4bcbbd]{height:30px;width:30px;text-align:center;line-height:30px;border:1px solid #dcdfe6;border-radius:50%;cursor:pointer;background-color:#fff;transition:border-color,background-color .15s;display:flex;align-items:center;justify-content:center}.split-carousel__left-button[data-v-4a4bcbbd]:hover,.split-carousel__right-button[data-v-4a4bcbbd]:hover{border-color:#c6e2ff;background-color:#ecf5ff}.split-carousel__left-button:hover .arrow[data-v-4a4bcbbd],.split-carousel__right-button:hover .arrow[data-v-4a4bcbbd]{border-top-color:#c6e2ff;border-left-color:#c6e2ff}.arrow[data-v-4a4bcbbd]{height:6px;width:6px;border:2px solid;transition:border-color .15s;border-top-color:#dcdfe6;border-left-color:#dcdfe6;border-right-color:transparent;border-bottom-color:transparent}.arrow.left[data-v-4a4bcbbd]{transform:translate(2px) rotate(-45deg)}.arrow.right[data-v-4a4bcbbd]{transform:translate(-2px) rotate(135deg)}.split-carousel__item[data-v-a1465d65]{display:none;transition-property:transform;will-change:transfrom}.split-carousel__item--transition[data-v-a1465d65]{position:absolute;left:0;top:0;height:100%}.split-carousel__item--stag[data-v-a1465d65]{display:block}")),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import { defineComponent as M, ref as b, computed as r, reactive as J, toRefs as K, provide as Q, watch as Y, onMounted as N, nextTick as Z, onUnmounted as P, openBlock as w, createElementBlock as I, normalizeStyle as O, createElementVNode as y, withDirectives as B, renderSlot as A, vShow as L, normalizeClass as j, pushScopeId as ee, popScopeId as te, inject as ie } from "vue";
const ne = M({
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
    const o = b(null), n = b([]), c = (i) => n.value.push(i), v = (i) => {
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
    }), d = b(0), $ = r(
      () => d.value + e.displayAmount === n.value.length
    ), p = r(() => d.value === 0), k = r(
      () => e.displayAmount + 2 >= n.value.length
    ), m = J({
      resetting: !1,
      action: "next"
    }), W = r(() => {
      var F, R;
      const i = d.value, s = n.value, U = s.length - 1, X = Array.from({ length: e.displayAmount }).map(
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
      addItem: c,
      removeItem: v,
      layout: f
    });
    const C = r(() => !(e.arrowVisible === "default" && (f.value.isStatic || p.value && !e.loop))), T = r(() => !(e.arrowVisible === "default" && (f.value.isStatic || $.value && !e.loop))), S = (i) => {
      if (f.value.isStatic || !e.loop && (i === "next" && $.value || i === "prev" && p.value))
        return;
      const s = () => {
        i === "next" && (d.value = (d.value + 1) % n.value.length), i === "prev" && (d.value = p.value ? n.value.length - 1 : d.value - 1);
      };
      if (!k.value) {
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
    }, E = () => {
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
      enter: E,
      leave: H,
      layout: f,
      viewportDOMRef: o,
      hasLeftSlot: t.slots.left !== void 0,
      hasRightSlot: t.slots.right !== void 0,
      isLeftArrowVisiable: C,
      isRightArrowVisiable: T,
      activeIndex: d,
      items: n
    };
  }
});
const q = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, c] of t)
    o[n] = c;
  return o;
}, D = (e) => (ee("data-v-4a4bcbbd"), e = e(), te(), e), le = {
  key: 1,
  class: "split-carousel__left-button"
}, ae = /* @__PURE__ */ D(() => /* @__PURE__ */ y("div", { class: "arrow left" }, null, -1)), se = [
  ae
], oe = {
  key: 1,
  class: "split-carousel__right-button"
}, ue = /* @__PURE__ */ D(() => /* @__PURE__ */ y("div", { class: "arrow right" }, null, -1)), re = [
  ue
];
function de(e, t, o, n, c, v) {
  return w(), I("div", {
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
        e.hasLeftSlot ? A(e.$slots, "left", { key: 0 }, void 0, !0) : (w(), I("button", le, se))
      ], 512), [
        [L, e.isLeftArrowVisiable]
      ])
    ]),
    y("div", {
      ref: "viewportDOMRef",
      class: j(["split-carousel__viewport", { "split-carousel__viewport--static": e.layout.isStatic }]),
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
        e.hasRightSlot ? A(e.$slots, "right", { key: 0 }, void 0, !0) : (w(), I("button", oe, re))
      ], 512), [
        [L, e.isRightArrowVisiable]
      ])
    ])
  ], 4);
}
const ce = /* @__PURE__ */ q(ne, [["render", de], ["__scopeId", "data-v-4a4bcbbd"]]), ve = M({
  name: "SplitCarouselItem",
  setup() {
    let e = Math.random();
    const t = ie(
      "injectCarouselScope"
    ), o = b(!1), { layout: n, stag: c, reset: v, addItem: u, removeItem: f } = t;
    N(() => {
      u({ uid: e }), requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          o.value = !0;
        });
      });
    }), P(() => {
      f(e);
    });
    const d = r(() => e === c.value.prependUid), $ = r(() => e === c.value.appendUid), p = r(() => c.value.stagUids.findIndex((h) => h === e)), k = r(() => p.value !== -1), m = r(() => !!(!o.value || v.resetting));
    return {
      itemStyle: r(() => {
        const {
          itemWidth: h,
          isStatic: C,
          itemBlockWidth: T,
          appendPostion: S,
          prependPosition: l
        } = n.value;
        let a = {
          width: `${h}px`,
          transitionDuration: `${m.value ? 0 : t.speed.value}ms`,
          transitionTimingFunction: t.timingFunction.value
        };
        if (C)
          return a.display = "block", a;
        if (k.value && (a = {
          ...a,
          display: "block",
          transform: `translateX(${p.value * T}px)`
        }), d.value) {
          const g = v.resetting && v.action === "next";
          a = {
            ...a,
            display: "block",
            transform: `translateX(${g ? S : l}px)`
          };
        }
        if ($.value) {
          const g = v.resetting && v.action === "prev";
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
function me(e, t, o, n, c, v) {
  return w(), I("div", {
    class: j(["split-carousel__item", { "split-carousel__item--transition": !e.layout.isStatic }]),
    style: O(e.itemStyle)
  }, [
    A(e.$slots, "default", {}, void 0, !0)
  ], 6);
}
const fe = /* @__PURE__ */ q(ve, [["render", me], ["__scopeId", "data-v-a1465d65"]]), ye = (e, t) => {
  const o = (t == null ? void 0 : t.prefix) || "";
  e.component(`${o}SplitCarousel`, ce), e.component(`${o}SplitCarouselItem`, fe);
};
export {
  ce as SplitCarousel,
  fe as SplitCarouselItem,
  ye as default,
  ye as install
};
