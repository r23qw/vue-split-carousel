module.exports = (function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  return (
    (n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 2))
  );
})([
  function(e, t, n) {},
  function(e, t, n) {
    "use strict";
    var r = n(0);
    n.n(r).a;
  },
  function(e, t, n) {
    "use strict";
    n.r(t);
    var r = { name: "VueSplitCaousel", beforeCreate() {} };
    n(1);
    var o = (function(e, t, n, r, o, i, u, s) {
      var l,
        a = "function" == typeof e ? e.options : e;
      if (
        (t && ((a.render = t), (a.staticRenderFns = n), (a._compiled = !0)),
        r && (a.functional = !0),
        i && (a._scopeId = "data-v-" + i),
        u
          ? ((l = function(e) {
              (e =
                e ||
                (this.$vnode && this.$vnode.ssrContext) ||
                (this.parent &&
                  this.parent.$vnode &&
                  this.parent.$vnode.ssrContext)) ||
                "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                (e = __VUE_SSR_CONTEXT__),
                o && o.call(this, e),
                e && e._registeredComponents && e._registeredComponents.add(u);
            }),
            (a._ssrRegister = l))
          : o &&
            (l = s
              ? function() {
                  o.call(this, this.$root.$options.shadowRoot);
                }
              : o),
        l)
      )
        if (a.functional) {
          a._injectStyles = l;
          var c = a.render;
          a.render = function(e, t) {
            return l.call(t), c(e, t);
          };
        } else {
          var f = a.beforeCreate;
          a.beforeCreate = f ? [].concat(f, l) : [l];
        }
      return { exports: e, options: a };
    })(
      r,
      function() {
        this.$createElement;
        this._self._c;
        return this._m(0);
      },
      [
        function() {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("div", [t("h3", [this._v("\n    TEST\n  ")])]);
        }
      ],
      !1,
      null,
      null,
      null
    ).exports;
    n.d(t, "install", function() {
      return i;
    });
    let i = e => {
      e.Component("vue-split-carousel", o);
    };
    t.default = i;
  }
]);
