import B, { defineComponent as V, ref as x, computed as c, reactive as X, toRefs as q, provide as E, watch as D, onMounted as W, nextTick as H, onUnmounted as k, getCurrentInstance as j, inject as z } from "vue2.7";
B.util.warn;
const G = V({
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
    const i = x(null), r = x([]), f = (a) => r.value.push(a), p = (a) => {
      const o = r.value.findIndex(($) => $.uid === a);
      o !== -1 && r.value.splice(o, 1);
    }, u = x(0), m = c(() => {
      const a = (u.value - e.itemWidth * e.displayAmount) / (e.displayAmount - 1), o = a + e.itemWidth;
      return {
        isStatic: r.value.length <= e.displayAmount,
        gapWidth: a,
        viewportWidth: u.value,
        itemWidth: e.itemWidth,
        itemBlockWidth: o,
        prependPosition: -1 * o,
        appendPostion: u.value + a
      };
    }), n = x(0), d = c(
      () => n.value + e.displayAmount === r.value.length
    ), h = c(() => n.value === 0), g = c(
      () => e.displayAmount + 2 >= r.value.length
    ), s = X({
      resetting: !1,
      action: "next"
    }), S = c(() => {
      var R, U;
      const a = n.value, o = r.value, $ = o.length - 1, L = Array.from({ length: e.displayAmount }).map(
        (O, M) => {
          var F;
          return (F = o[(a + M) % o.length]) == null ? void 0 : F.uid;
        }
      ), w = {
        prependUid: (R = o[h.value ? $ : a - 1]) == null ? void 0 : R.uid,
        stagUids: L,
        appendUid: (U = o[(a + e.displayAmount) % o.length]) == null ? void 0 : U.uid
      };
      return w.prependUid === w.appendUid && (s.action === "prev" && (w.prependUid = -1), s.action === "next" && (w.appendUid = -1)), w;
    }), y = q(e);
    E("injectCarouselScope", {
      speed: y.speed,
      timingFunction: y.timingFunction,
      stag: S,
      reset: s,
      addItem: f,
      removeItem: p,
      layout: m
    });
    const C = c(() => !(e.arrowVisible === "default" && (m.value.isStatic || h.value && !e.loop))), T = c(() => !(e.arrowVisible === "default" && (m.value.isStatic || d.value && !e.loop))), A = (a) => {
      if (m.value.isStatic || !e.loop && (a === "next" && d.value || a === "prev" && h.value))
        return;
      const o = () => {
        a === "next" && (n.value = (n.value + 1) % r.value.length), a === "prev" && (n.value = h.value ? r.value.length - 1 : n.value - 1);
      };
      if (!g.value) {
        o();
        return;
      }
      s.resetting = !0, s.action = a, requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          s.resetting = !1, o();
        });
      });
    };
    let l;
    const _ = () => {
      clearTimeout(l), A("next"), e.autoplay && (l = setTimeout(() => _(), e.interval));
    }, v = () => {
      clearTimeout(l), A("prev"), e.autoplay && (l = setTimeout(() => v(), e.interval));
    }, b = () => {
      e.autoplay && e.pauseOnHover && clearTimeout(l);
    }, P = () => {
      e.autoplay && e.pauseOnHover && (clearTimeout(l), l = setTimeout(() => _(), e.interval));
    };
    D(
      () => e.autoplay,
      (a) => {
        a ? l = setTimeout(() => _(), e.interval) : clearTimeout(l);
      }
    );
    const I = () => {
      document.visibilityState === "hidden" && clearTimeout(l), document.visibilityState === "visible" && e.autoplay && (l = setTimeout(() => _(), e.interval));
    };
    return W(() => {
      H(() => {
        i.value !== null && (u.value = i.value.clientWidth), e.autoplay && (l = setTimeout(() => _(), e.interval)), document.addEventListener(
          "visibilitychange",
          I
        );
      });
    }), k(() => {
      clearTimeout(l), document.removeEventListener(
        "visibilitychange",
        I
      );
    }), {
      prev: v,
      next: _,
      enter: b,
      leave: P,
      layout: m,
      viewportDOMRef: i,
      hasLeftSlot: t.slots.left !== void 0,
      hasRightSlot: t.slots.right !== void 0,
      isLeftArrowVisiable: C,
      isRightArrowVisiable: T,
      activeIndex: n,
      items: r
    };
  }
});
function N(e, t, i, r, f, p, u, m) {
  var n = typeof e == "function" ? e.options : e;
  t && (n.render = t, n.staticRenderFns = i, n._compiled = !0), r && (n.functional = !0), p && (n._scopeId = "data-v-" + p);
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
      n.render = function(S, y) {
        return d.call(y), h(S, y);
      };
    } else {
      var g = n.beforeCreate;
      n.beforeCreate = g ? [].concat(g, d) : [d];
    }
  return {
    exports: e,
    options: n
  };
}
var J = function() {
  var t = this, i = t._self._c;
  return t._self._setupProxy, i("div", { staticClass: "split-carousel", style: {
    height: `${typeof t.height == "string" ? t.height : `${t.height}px`}`
  } }, [i("div", { staticClass: "split-carousel__left", on: { click: t.prev } }, [i("div", { directives: [{ name: "show", rawName: "v-show", value: t.isLeftArrowVisiable, expression: "isLeftArrowVisiable" }] }, [t.hasLeftSlot ? t._t("left") : i("button", { staticClass: "split-carousel__left-button" }, [i("div", { staticClass: "arrow left" })])], 2)]), i("div", { ref: "viewportDOMRef", staticClass: "split-carousel__viewport", class: { "split-carousel__viewport--static": t.layout.isStatic }, on: { mouseenter: t.enter, mouseleave: t.leave } }, [t._t("default")], 2), i("div", { staticClass: "split-carousel__right", on: { click: t.next } }, [i("div", { directives: [{ name: "show", rawName: "v-show", value: t.isRightArrowVisiable, expression: "isRightArrowVisiable" }] }, [t.hasRightSlot ? t._t("right") : i("button", { staticClass: "split-carousel__right-button" }, [i("div", { staticClass: "arrow right" })])], 2)])]);
}, K = [], Q = /* @__PURE__ */ N(
  G,
  J,
  K,
  !1,
  null,
  "d65c36fb",
  null,
  null
);
const Y = Q.exports, Z = V({
  name: "SplitCarouselItem",
  setup() {
    let e = j(), t = Math.random();
    const i = z(
      "injectCarouselScope"
    ), r = x(!1);
    if (!e || !i)
      throw new Error("SplitCarouselItem Must include by SplitCarousel");
    const { layout: f, stag: p, reset: u, addItem: m, removeItem: n } = i;
    W(() => {
      m({ uid: t }), requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          r.value = !0;
        });
      });
    }), k(() => {
      n(t);
    });
    const d = c(() => t === p.value.prependUid), h = c(() => t === p.value.appendUid), g = c(() => p.value.stagUids.findIndex((C) => C === t)), s = c(() => g.value !== -1), S = c(() => !!(!r.value || u.resetting));
    return {
      itemStyle: c(() => {
        const {
          itemWidth: C,
          isStatic: T,
          itemBlockWidth: A,
          appendPostion: l,
          prependPosition: _
        } = f.value;
        let v = {
          width: `${C}px`,
          transitionDuration: `${S.value ? 0 : i.speed.value}ms`,
          transitionTimingFunction: i.timingFunction.value
        };
        if (T)
          return v.display = "block", v;
        if (s.value && (v = {
          ...v,
          display: "block",
          transform: `translateX(${g.value * A}px)`
        }), d.value) {
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
var ee = function() {
  var t = this, i = t._self._c;
  return t._self._setupProxy, i("div", { staticClass: "split-carousel__item", class: { "split-carousel__item--transition": !t.layout.isStatic }, style: t.itemStyle }, [t._t("default")], 2);
}, te = [], ie = /* @__PURE__ */ N(
  Z,
  ee,
  te,
  !1,
  null,
  "e39df7ff",
  null,
  null
);
const ne = ie.exports, se = (e, t) => {
  const i = (t == null ? void 0 : t.prefix) || "";
  e.component(`${i}SplitCarousel`, Y), e.component(`${i}SplitCarouselItem`, ne);
};
export {
  Y as SplitCarousel,
  ne as SplitCarouselItem,
  se as install
};
