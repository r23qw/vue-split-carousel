(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".split-carousel[data-v-95170b3e]{display:flex;width:100%;align-items:center;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.split-carousel__viewport[data-v-95170b3e]{flex-grow:1;overflow:hidden;align-self:stretch;position:relative}.split-carousel__viewport--static[data-v-95170b3e]{display:flex;align-items:center;justify-content:space-between}.split-carousel__viewport--static[data-v-95170b3e] :deep(.split-carousel__item){align-self:stretch}.split-carousel__left[data-v-95170b3e],.split-carousel__right[data-v-95170b3e]{align-self:center;padding:5px}.split-carousel__left-button[data-v-95170b3e],.split-carousel__right-button[data-v-95170b3e]{height:30px;width:30px;text-align:center;line-height:30px;border:1px solid #dcdfe6;border-radius:50%;cursor:pointer;background-color:#fff;transition:border-color,background-color .15s;display:flex;align-items:center;justify-content:center}.split-carousel__left-button[data-v-95170b3e]:hover,.split-carousel__right-button[data-v-95170b3e]:hover{border-color:#c6e2ff;background-color:#ecf5ff}.split-carousel__left-button:hover .arrow[data-v-95170b3e],.split-carousel__right-button:hover .arrow[data-v-95170b3e]{border-top-color:#c6e2ff;border-left-color:#c6e2ff}.arrow[data-v-95170b3e]{height:6px;width:6px;border:2px solid;transition:border-color .15s;border-top-color:#dcdfe6;border-left-color:#dcdfe6;border-right-color:transparent;border-bottom-color:transparent}.arrow.left[data-v-95170b3e]{transform:translate(2px) rotate(-45deg)}.arrow.right[data-v-95170b3e]{transform:translate(-2px) rotate(135deg)}.split-carousel__item[data-v-10e86606]{display:none;transition-property:transform;will-change:transfrom}.split-carousel__item--transition[data-v-10e86606]{position:absolute;left:0;top:0;height:100%}.split-carousel__item--stag[data-v-10e86606]{display:block}")),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import R from "vue";
import q, { defineComponent as L, ref as S, computed as c, reactive as D, toRefs as H, provide as z, watch as G, onMounted as T, nextTick as J, onUnmounted as P, getCurrentInstance as K, inject as Q } from "@vue/composition-api/dist/vue-composition-api.mjs";
function Y(e) {
  e = e || R, e && !e.__composition_api_installed__ && e.use(q);
}
Y(R);
R.version;
const Z = L({
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
    const t = S(null), o = S([]), f = (a) => o.value.push(a), p = (a) => {
      const r = o.value.findIndex((I) => I.uid === a);
      r !== -1 && o.value.splice(r, 1);
    }, u = S(0), m = c(() => {
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
    }), n = S(0), d = c(
      () => n.value + e.displayAmount === o.value.length
    ), h = c(() => n.value === 0), y = c(
      () => e.displayAmount + 2 >= o.value.length
    ), s = D({
      resetting: !1,
      action: "next"
    }), C = c(() => {
      var F, W;
      const a = n.value, r = o.value, I = r.length - 1, B = Array.from({ length: e.displayAmount }).map(
        (X, j) => {
          var k;
          return (k = r[(a + j) % r.length]) == null ? void 0 : k.uid;
        }
      ), x = {
        prependUid: (F = r[h.value ? I : a - 1]) == null ? void 0 : F.uid,
        stagUids: B,
        appendUid: (W = r[(a + e.displayAmount) % r.length]) == null ? void 0 : W.uid
      };
      return x.prependUid === x.appendUid && (s.action === "prev" && (x.prependUid = -1), s.action === "next" && (x.appendUid = -1)), x;
    }), g = H(e);
    z("injectCarouselScope", {
      speed: g.speed,
      timingFunction: g.timingFunction,
      stag: C,
      reset: s,
      addItem: f,
      removeItem: p,
      layout: m
    });
    const b = c(() => !(e.arrowVisible === "default" && (m.value.isStatic || h.value && !e.loop))), A = c(() => !(e.arrowVisible === "default" && (m.value.isStatic || d.value && !e.loop))), $ = (a) => {
      if (m.value.isStatic || !e.loop && (a === "next" && d.value || a === "prev" && h.value))
        return;
      const r = () => {
        a === "next" && (n.value = (n.value + 1) % o.value.length), a === "prev" && (n.value = h.value ? o.value.length - 1 : n.value - 1);
      };
      if (!y.value) {
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
    }, w = () => {
      e.autoplay && e.pauseOnHover && clearTimeout(l);
    }, E = () => {
      e.autoplay && e.pauseOnHover && (clearTimeout(l), l = setTimeout(() => _(), e.interval));
    };
    G(
      () => e.autoplay,
      (a) => {
        a ? l = setTimeout(() => _(), e.interval) : clearTimeout(l);
      }
    );
    const U = () => {
      document.visibilityState === "hidden" && clearTimeout(l), document.visibilityState === "visible" && e.autoplay && (l = setTimeout(() => _(), e.interval));
    };
    T(() => {
      J(() => {
        t.value !== null && (u.value = t.value.clientWidth), e.autoplay && (l = setTimeout(() => _(), e.interval)), document.addEventListener(
          "visibilitychange",
          U
        );
      });
    }), P(() => {
      clearTimeout(l), document.removeEventListener(
        "visibilitychange",
        U
      );
    });
    const V = S(!1);
    return T(() => {
      V.value = !0;
    }), {
      prev: v,
      next: _,
      enter: w,
      leave: E,
      layout: m,
      viewportDOMRef: t,
      hasLeftSlot: i.slots.left !== void 0,
      hasRightSlot: i.slots.right !== void 0,
      isLeftArrowVisiable: b,
      isRightArrowVisiable: A,
      activeIndex: n,
      items: o,
      isMounted: V
    };
  }
});
var ee = function() {
  var e = this, i = e.$createElement, t = e._self._c || i;
  return t("div", {
    staticClass: "split-carousel",
    style: {
      height: `${typeof e.height == "string" ? e.height : `${e.height}px`}`,
      visibility: e.isMounted ? "visible" : "hidden"
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
}, te = [];
function O(e, i, t, o, f, p, u, m) {
  var n = typeof e == "function" ? e.options : e;
  i && (n.render = i, n.staticRenderFns = t, n._compiled = !0), o && (n.functional = !0), p && (n._scopeId = "data-v-" + p);
  var d;
  if (u ? (d = function(s) {
    s = s || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !s && typeof __VUE_SSR_CONTEXT__ < "u" && (s = __VUE_SSR_CONTEXT__), f && f.call(this, s), s && s._registeredComponents && s._registeredComponents.add(u);
  }, n._ssrRegister = d) : f && (d = m ? function() {
    f.call(
      this,
      (n.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : f), d)
    if (n.functional) {
      n._injectStyles = d;
      var h = n.render;
      n.render = function(C, g) {
        return d.call(g), h(C, g);
      };
    } else {
      var y = n.beforeCreate;
      n.beforeCreate = y ? [].concat(y, d) : [d];
    }
  return {
    exports: e,
    options: n
  };
}
const M = {};
var ie = /* @__PURE__ */ O(
  Z,
  ee,
  te,
  !1,
  ne,
  "95170b3e",
  null,
  null
);
function ne(e) {
  for (let i in M)
    this[i] = M[i];
}
const ae = /* @__PURE__ */ function() {
  return ie.exports;
}(), se = L({
  name: "SplitCarouselItem",
  setup() {
    let e = K(), i = Math.random();
    const t = Q(
      "injectCarouselScope"
    ), o = S(!1);
    if (!e || !t)
      throw new Error("SplitCarouselItem Must include by SplitCarousel");
    const { layout: f, stag: p, reset: u, addItem: m, removeItem: n } = t;
    T(() => {
      m({ uid: i }), requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          o.value = !0;
        });
      });
    }), P(() => {
      n(i);
    });
    const d = c(() => i === p.value.prependUid), h = c(() => i === p.value.appendUid), y = c(() => p.value.stagUids.findIndex((b) => b === i)), s = c(() => y.value !== -1), C = c(() => !!(!o.value || u.resetting));
    return {
      itemStyle: c(() => {
        const {
          itemWidth: b,
          isStatic: A,
          itemBlockWidth: $,
          appendPostion: l,
          prependPosition: _
        } = f.value;
        let v = {
          width: `${b}px`,
          transitionDuration: `${C.value ? 0 : t.speed.value}ms`,
          transitionTimingFunction: t.timingFunction.value
        };
        if (A)
          return v.display = "block", v;
        if (s.value && (v = {
          ...v,
          display: "block",
          transform: `translateX(${y.value * $}px)`
        }), d.value) {
          const w = u.resetting && u.action === "next";
          v = {
            ...v,
            display: "block",
            transform: `translateX(${w ? l : _}px)`
          };
        }
        if (h.value) {
          const w = u.resetting && u.action === "prev";
          v = {
            ...v,
            display: "block",
            transform: `translateX(${w ? _ : l}px)`
          };
        }
        return v;
      }),
      layout: f
    };
  }
});
var le = function() {
  var e = this, i = e.$createElement, t = e._self._c || i;
  return t("div", {
    staticClass: "split-carousel__item",
    class: {
      "split-carousel__item--transition": !e.layout.isStatic
    },
    style: e.itemStyle
  }, [e._t("default")], 2);
}, oe = [];
const N = {};
var re = /* @__PURE__ */ O(
  se,
  le,
  oe,
  !1,
  ue,
  "10e86606",
  null,
  null
);
function ue(e) {
  for (let i in N)
    this[i] = N[i];
}
const de = /* @__PURE__ */ function() {
  return re.exports;
}(), fe = (e, i) => {
  const t = (i == null ? void 0 : i.prefix) || "";
  e.component(`${t}SplitCarousel`, ae), e.component(`${t}SplitCarouselItem`, de);
};
export {
  ae as SplitCarousel,
  de as SplitCarouselItem,
  fe as default,
  fe as install
};
