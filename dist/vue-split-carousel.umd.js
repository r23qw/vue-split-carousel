!(function(t, n) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = n())
    : "function" == typeof define && define.amd
    ? define([], n)
    : "object" == typeof exports
    ? (exports.vueSplitCarousel = n())
    : (t.vueSplitCarousel = n());
})(window, function() {
  return (function(t) {
    var n = {};
    function r(e) {
      if (n[e]) return n[e].exports;
      var o = (n[e] = { i: e, l: !1, exports: {} });
      return t[e].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
    }
    return (
      (r.m = t),
      (r.c = n),
      (r.d = function(t, n, e) {
        r.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: e });
      }),
      (r.r = function(t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (r.t = function(t, n) {
        if ((1 & n && (t = r(t)), 8 & n)) return t;
        if (4 & n && "object" == typeof t && t && t.__esModule) return t;
        var e = Object.create(null);
        if (
          (r.r(e),
          Object.defineProperty(e, "default", { enumerable: !0, value: t }),
          2 & n && "string" != typeof t)
        )
          for (var o in t)
            r.d(
              e,
              o,
              function(n) {
                return t[n];
              }.bind(null, o)
            );
        return e;
      }),
      (r.n = function(t) {
        var n =
          t && t.__esModule
            ? function() {
                return t.default;
              }
            : function() {
                return t;
              };
        return r.d(n, "a", n), n;
      }),
      (r.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n);
      }),
      (r.p = ""),
      r((r.s = 70))
    );
  })([
    function(t, n, r) {
      var e = r(16)("wks"),
        o = r(11),
        i = r(1).Symbol,
        u = "function" == typeof i;
      (t.exports = function(t) {
        return e[t] || (e[t] = (u && i[t]) || (u ? i : o)("Symbol." + t));
      }).store = e;
    },
    function(t, n) {
      var r = (t.exports =
        "undefined" != typeof window && window.Math == Math
          ? window
          : "undefined" != typeof self && self.Math == Math
          ? self
          : Function("return this")());
      "number" == typeof __g && (__g = r);
    },
    function(t, n) {
      t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t;
      };
    },
    function(t, n, r) {
      t.exports = !r(12)(function() {
        return (
          7 !=
          Object.defineProperty({}, "a", {
            get: function() {
              return 7;
            }
          }).a
        );
      });
    },
    function(t, n, r) {
      var e = r(5),
        o = r(17);
      t.exports = r(3)
        ? function(t, n, r) {
            return e.f(t, n, o(1, r));
          }
        : function(t, n, r) {
            return (t[n] = r), t;
          };
    },
    function(t, n, r) {
      var e = r(6),
        o = r(25),
        i = r(27),
        u = Object.defineProperty;
      n.f = r(3)
        ? Object.defineProperty
        : function(t, n, r) {
            if ((e(t), (n = i(n, !0)), e(r), o))
              try {
                return u(t, n, r);
              } catch (t) {}
            if ("get" in r || "set" in r)
              throw TypeError("Accessors not supported!");
            return "value" in r && (t[n] = r.value), t;
          };
    },
    function(t, n, r) {
      var e = r(2);
      t.exports = function(t) {
        if (!e(t)) throw TypeError(t + " is not an object!");
        return t;
      };
    },
    function(t, n, r) {
      var e = r(1),
        o = r(4),
        i = r(8),
        u = r(11)("src"),
        c = r(44),
        f = ("" + c).split("toString");
      (r(10).inspectSource = function(t) {
        return c.call(t);
      }),
        (t.exports = function(t, n, r, c) {
          var s = "function" == typeof r;
          s && (i(r, "name") || o(r, "name", n)),
            t[n] !== r &&
              (s && (i(r, u) || o(r, u, t[n] ? "" + t[n] : f.join(String(n)))),
              t === e
                ? (t[n] = r)
                : c
                ? t[n]
                  ? (t[n] = r)
                  : o(t, n, r)
                : (delete t[n], o(t, n, r)));
        })(Function.prototype, "toString", function() {
          return ("function" == typeof this && this[u]) || c.call(this);
        });
    },
    function(t, n) {
      var r = {}.hasOwnProperty;
      t.exports = function(t, n) {
        return r.call(t, n);
      };
    },
    function(t, n) {
      t.exports = {};
    },
    function(t, n) {
      var r = (t.exports = { version: "2.6.5" });
      "number" == typeof __e && (__e = r);
    },
    function(t, n) {
      var r = 0,
        e = Math.random();
      t.exports = function(t) {
        return "Symbol(".concat(
          void 0 === t ? "" : t,
          ")_",
          (++r + e).toString(36)
        );
      };
    },
    function(t, n) {
      t.exports = function(t) {
        try {
          return !!t();
        } catch (t) {
          return !0;
        }
      };
    },
    function(t, n, r) {
      var e = r(43),
        o = r(18);
      t.exports = function(t) {
        return e(o(t));
      };
    },
    function(t, n, r) {
      var e = r(45);
      t.exports = function(t, n, r) {
        if ((e(t), void 0 === n)) return t;
        switch (r) {
          case 1:
            return function(r) {
              return t.call(n, r);
            };
          case 2:
            return function(r, e) {
              return t.call(n, r, e);
            };
          case 3:
            return function(r, e, o) {
              return t.call(n, r, e, o);
            };
        }
        return function() {
          return t.apply(n, arguments);
        };
      };
    },
    function(t, n, r) {},
    function(t, n, r) {
      var e = r(10),
        o = r(1),
        i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
      (t.exports = function(t, n) {
        return i[t] || (i[t] = void 0 !== n ? n : {});
      })("versions", []).push({
        version: e.version,
        mode: r(24) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
      });
    },
    function(t, n) {
      t.exports = function(t, n) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: n
        };
      };
    },
    function(t, n) {
      t.exports = function(t) {
        if (null == t) throw TypeError("Can't call method on  " + t);
        return t;
      };
    },
    function(t, n, r) {
      "use strict";
      var e = r(24),
        o = r(30),
        i = r(7),
        u = r(4),
        c = r(9),
        f = r(46),
        s = r(22),
        a = r(52),
        p = r(0)("iterator"),
        l = !([].keys && "next" in [].keys()),
        v = function() {
          return this;
        };
      t.exports = function(t, n, r, h, y, d, _) {
        f(r, n, h);
        var x,
          g,
          b,
          S = function(t) {
            if (!l && t in E) return E[t];
            switch (t) {
              case "keys":
              case "values":
                return function() {
                  return new r(this, t);
                };
            }
            return function() {
              return new r(this, t);
            };
          },
          m = n + " Iterator",
          O = "values" == y,
          j = !1,
          E = t.prototype,
          w = E[p] || E["@@iterator"] || (y && E[y]),
          T = w || S(y),
          M = y ? (O ? S("entries") : T) : void 0,
          P = ("Array" == n && E.entries) || w;
        if (
          (P &&
            (b = a(P.call(new t()))) !== Object.prototype &&
            b.next &&
            (s(b, m, !0), e || "function" == typeof b[p] || u(b, p, v)),
          O &&
            w &&
            "values" !== w.name &&
            ((j = !0),
            (T = function() {
              return w.call(this);
            })),
          (e && !_) || (!l && !j && E[p]) || u(E, p, T),
          (c[n] = T),
          (c[m] = v),
          y)
        )
          if (
            ((x = {
              values: O ? T : S("values"),
              keys: d ? T : S("keys"),
              entries: M
            }),
            _)
          )
            for (g in x) g in E || i(E, g, x[g]);
          else o(o.P + o.F * (l || j), n, x);
        return x;
      };
    },
    function(t, n) {
      var r = Math.ceil,
        e = Math.floor;
      t.exports = function(t) {
        return isNaN((t = +t)) ? 0 : (t > 0 ? e : r)(t);
      };
    },
    function(t, n, r) {
      var e = r(16)("keys"),
        o = r(11);
      t.exports = function(t) {
        return e[t] || (e[t] = o(t));
      };
    },
    function(t, n, r) {
      var e = r(5).f,
        o = r(8),
        i = r(0)("toStringTag");
      t.exports = function(t, n, r) {
        t &&
          !o((t = r ? t : t.prototype), i) &&
          e(t, i, { configurable: !0, value: n });
      };
    },
    function(t, n, r) {
      "use strict";
      var e = r(42),
        o = r(28),
        i = r(9),
        u = r(13);
      (t.exports = r(19)(
        Array,
        "Array",
        function(t, n) {
          (this._t = u(t)), (this._i = 0), (this._k = n);
        },
        function() {
          var t = this._t,
            n = this._k,
            r = this._i++;
          return !t || r >= t.length
            ? ((this._t = void 0), o(1))
            : o(0, "keys" == n ? r : "values" == n ? t[r] : [r, t[r]]);
        },
        "values"
      )),
        (i.Arguments = i.Array),
        e("keys"),
        e("values"),
        e("entries");
    },
    function(t, n) {
      t.exports = !1;
    },
    function(t, n, r) {
      t.exports =
        !r(3) &&
        !r(12)(function() {
          return (
            7 !=
            Object.defineProperty(r(26)("div"), "a", {
              get: function() {
                return 7;
              }
            }).a
          );
        });
    },
    function(t, n, r) {
      var e = r(2),
        o = r(1).document,
        i = e(o) && e(o.createElement);
      t.exports = function(t) {
        return i ? o.createElement(t) : {};
      };
    },
    function(t, n, r) {
      var e = r(2);
      t.exports = function(t, n) {
        if (!e(t)) return t;
        var r, o;
        if (n && "function" == typeof (r = t.toString) && !e((o = r.call(t))))
          return o;
        if ("function" == typeof (r = t.valueOf) && !e((o = r.call(t))))
          return o;
        if (!n && "function" == typeof (r = t.toString) && !e((o = r.call(t))))
          return o;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    function(t, n) {
      t.exports = function(t, n) {
        return { value: n, done: !!t };
      };
    },
    function(t, n) {
      var r = {}.toString;
      t.exports = function(t) {
        return r.call(t).slice(8, -1);
      };
    },
    function(t, n, r) {
      var e = r(1),
        o = r(10),
        i = r(4),
        u = r(7),
        c = r(14),
        f = function(t, n, r) {
          var s,
            a,
            p,
            l,
            v = t & f.F,
            h = t & f.G,
            y = t & f.S,
            d = t & f.P,
            _ = t & f.B,
            x = h ? e : y ? e[n] || (e[n] = {}) : (e[n] || {}).prototype,
            g = h ? o : o[n] || (o[n] = {}),
            b = g.prototype || (g.prototype = {});
          for (s in (h && (r = n), r))
            (p = ((a = !v && x && void 0 !== x[s]) ? x : r)[s]),
              (l =
                _ && a
                  ? c(p, e)
                  : d && "function" == typeof p
                  ? c(Function.call, p)
                  : p),
              x && u(x, s, p, t & f.U),
              g[s] != p && i(g, s, l),
              d && b[s] != p && (b[s] = p);
        };
      (e.core = o),
        (f.F = 1),
        (f.G = 2),
        (f.S = 4),
        (f.P = 8),
        (f.B = 16),
        (f.W = 32),
        (f.U = 64),
        (f.R = 128),
        (t.exports = f);
    },
    function(t, n, r) {
      var e = r(6),
        o = r(47),
        i = r(34),
        u = r(21)("IE_PROTO"),
        c = function() {},
        f = function() {
          var t,
            n = r(26)("iframe"),
            e = i.length;
          for (
            n.style.display = "none",
              r(51).appendChild(n),
              n.src = "javascript:",
              (t = n.contentWindow.document).open(),
              t.write("<script>document.F=Object</script>"),
              t.close(),
              f = t.F;
            e--;

          )
            delete f.prototype[i[e]];
          return f();
        };
      t.exports =
        Object.create ||
        function(t, n) {
          var r;
          return (
            null !== t
              ? ((c.prototype = e(t)),
                (r = new c()),
                (c.prototype = null),
                (r[u] = t))
              : (r = f()),
            void 0 === n ? r : o(r, n)
          );
        };
    },
    function(t, n, r) {
      var e = r(48),
        o = r(34);
      t.exports =
        Object.keys ||
        function(t) {
          return e(t, o);
        };
    },
    function(t, n, r) {
      var e = r(20),
        o = Math.min;
      t.exports = function(t) {
        return t > 0 ? o(e(t), 9007199254740991) : 0;
      };
    },
    function(t, n) {
      t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
        ","
      );
    },
    function(t, n, r) {
      var e = r(29),
        o = r(0)("toStringTag"),
        i =
          "Arguments" ==
          e(
            (function() {
              return arguments;
            })()
          );
      t.exports = function(t) {
        var n, r, u;
        return void 0 === t
          ? "Undefined"
          : null === t
          ? "Null"
          : "string" ==
            typeof (r = (function(t, n) {
              try {
                return t[n];
              } catch (t) {}
            })((n = Object(t)), o))
          ? r
          : i
          ? e(n)
          : "Object" == (u = e(n)) && "function" == typeof n.callee
          ? "Arguments"
          : u;
      };
    },
    function(t, n, r) {
      var e = r(7);
      t.exports = function(t, n, r) {
        for (var o in n) e(t, o, n[o], r);
        return t;
      };
    },
    function(t, n) {
      t.exports = function(t, n, r, e) {
        if (!(t instanceof n) || (void 0 !== e && e in t))
          throw TypeError(r + ": incorrect invocation!");
        return t;
      };
    },
    function(t, n, r) {
      var e = r(14),
        o = r(59),
        i = r(60),
        u = r(6),
        c = r(33),
        f = r(61),
        s = {},
        a = {};
      ((n = t.exports = function(t, n, r, p, l) {
        var v,
          h,
          y,
          d,
          _ = l
            ? function() {
                return t;
              }
            : f(t),
          x = e(r, p, n ? 2 : 1),
          g = 0;
        if ("function" != typeof _) throw TypeError(t + " is not iterable!");
        if (i(_)) {
          for (v = c(t.length); v > g; g++)
            if ((d = n ? x(u((h = t[g]))[0], h[1]) : x(t[g])) === s || d === a)
              return d;
        } else
          for (y = _.call(t); !(h = y.next()).done; )
            if ((d = o(y, x, h.value, n)) === s || d === a) return d;
      }).BREAK = s),
        (n.RETURN = a);
    },
    function(t, n, r) {
      var e = r(11)("meta"),
        o = r(2),
        i = r(8),
        u = r(5).f,
        c = 0,
        f =
          Object.isExtensible ||
          function() {
            return !0;
          },
        s = !r(12)(function() {
          return f(Object.preventExtensions({}));
        }),
        a = function(t) {
          u(t, e, { value: { i: "O" + ++c, w: {} } });
        },
        p = (t.exports = {
          KEY: e,
          NEED: !1,
          fastKey: function(t, n) {
            if (!o(t))
              return "symbol" == typeof t
                ? t
                : ("string" == typeof t ? "S" : "P") + t;
            if (!i(t, e)) {
              if (!f(t)) return "F";
              if (!n) return "E";
              a(t);
            }
            return t[e].i;
          },
          getWeak: function(t, n) {
            if (!i(t, e)) {
              if (!f(t)) return !0;
              if (!n) return !1;
              a(t);
            }
            return t[e].w;
          },
          onFreeze: function(t) {
            return s && p.NEED && f(t) && !i(t, e) && a(t), t;
          }
        });
    },
    function(t, n, r) {
      var e = r(2);
      t.exports = function(t, n) {
        if (!e(t) || t._t !== n)
          throw TypeError("Incompatible receiver, " + n + " required!");
        return t;
      };
    },
    function(t, n, r) {
      for (
        var e = r(23),
          o = r(32),
          i = r(7),
          u = r(1),
          c = r(4),
          f = r(9),
          s = r(0),
          a = s("iterator"),
          p = s("toStringTag"),
          l = f.Array,
          v = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
          },
          h = o(v),
          y = 0;
        y < h.length;
        y++
      ) {
        var d,
          _ = h[y],
          x = v[_],
          g = u[_],
          b = g && g.prototype;
        if (b && (b[a] || c(b, a, l), b[p] || c(b, p, _), (f[_] = l), x))
          for (d in e) b[d] || i(b, d, e[d], !0);
      }
    },
    function(t, n, r) {
      var e = r(0)("unscopables"),
        o = Array.prototype;
      null == o[e] && r(4)(o, e, {}),
        (t.exports = function(t) {
          o[e][t] = !0;
        });
    },
    function(t, n, r) {
      var e = r(29);
      t.exports = Object("z").propertyIsEnumerable(0)
        ? Object
        : function(t) {
            return "String" == e(t) ? t.split("") : Object(t);
          };
    },
    function(t, n, r) {
      t.exports = r(16)("native-function-to-string", Function.toString);
    },
    function(t, n) {
      t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t;
      };
    },
    function(t, n, r) {
      "use strict";
      var e = r(31),
        o = r(17),
        i = r(22),
        u = {};
      r(4)(u, r(0)("iterator"), function() {
        return this;
      }),
        (t.exports = function(t, n, r) {
          (t.prototype = e(u, { next: o(1, r) })), i(t, n + " Iterator");
        });
    },
    function(t, n, r) {
      var e = r(5),
        o = r(6),
        i = r(32);
      t.exports = r(3)
        ? Object.defineProperties
        : function(t, n) {
            o(t);
            for (var r, u = i(n), c = u.length, f = 0; c > f; )
              e.f(t, (r = u[f++]), n[r]);
            return t;
          };
    },
    function(t, n, r) {
      var e = r(8),
        o = r(13),
        i = r(49)(!1),
        u = r(21)("IE_PROTO");
      t.exports = function(t, n) {
        var r,
          c = o(t),
          f = 0,
          s = [];
        for (r in c) r != u && e(c, r) && s.push(r);
        for (; n.length > f; ) e(c, (r = n[f++])) && (~i(s, r) || s.push(r));
        return s;
      };
    },
    function(t, n, r) {
      var e = r(13),
        o = r(33),
        i = r(50);
      t.exports = function(t) {
        return function(n, r, u) {
          var c,
            f = e(n),
            s = o(f.length),
            a = i(u, s);
          if (t && r != r) {
            for (; s > a; ) if ((c = f[a++]) != c) return !0;
          } else
            for (; s > a; a++)
              if ((t || a in f) && f[a] === r) return t || a || 0;
          return !t && -1;
        };
      };
    },
    function(t, n, r) {
      var e = r(20),
        o = Math.max,
        i = Math.min;
      t.exports = function(t, n) {
        return (t = e(t)) < 0 ? o(t + n, 0) : i(t, n);
      };
    },
    function(t, n, r) {
      var e = r(1).document;
      t.exports = e && e.documentElement;
    },
    function(t, n, r) {
      var e = r(8),
        o = r(53),
        i = r(21)("IE_PROTO"),
        u = Object.prototype;
      t.exports =
        Object.getPrototypeOf ||
        function(t) {
          return (
            (t = o(t)),
            e(t, i)
              ? t[i]
              : "function" == typeof t.constructor && t instanceof t.constructor
              ? t.constructor.prototype
              : t instanceof Object
              ? u
              : null
          );
        };
    },
    function(t, n, r) {
      var e = r(18);
      t.exports = function(t) {
        return Object(e(t));
      };
    },
    function(t, n, r) {
      "use strict";
      var e = r(35),
        o = {};
      (o[r(0)("toStringTag")] = "z"),
        o + "" != "[object z]" &&
          r(7)(
            Object.prototype,
            "toString",
            function() {
              return "[object " + e(this) + "]";
            },
            !0
          );
    },
    function(t, n, r) {
      "use strict";
      var e = r(56)(!0);
      r(19)(
        String,
        "String",
        function(t) {
          (this._t = String(t)), (this._i = 0);
        },
        function() {
          var t,
            n = this._t,
            r = this._i;
          return r >= n.length
            ? { value: void 0, done: !0 }
            : ((t = e(n, r)), (this._i += t.length), { value: t, done: !1 });
        }
      );
    },
    function(t, n, r) {
      var e = r(20),
        o = r(18);
      t.exports = function(t) {
        return function(n, r) {
          var i,
            u,
            c = String(o(n)),
            f = e(r),
            s = c.length;
          return f < 0 || f >= s
            ? t
              ? ""
              : void 0
            : (i = c.charCodeAt(f)) < 55296 ||
              i > 56319 ||
              f + 1 === s ||
              (u = c.charCodeAt(f + 1)) < 56320 ||
              u > 57343
            ? t
              ? c.charAt(f)
              : i
            : t
            ? c.slice(f, f + 2)
            : u - 56320 + ((i - 55296) << 10) + 65536;
        };
      };
    },
    function(t, n, r) {
      "use strict";
      var e = r(58),
        o = r(40);
      t.exports = r(63)(
        "Map",
        function(t) {
          return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0);
          };
        },
        {
          get: function(t) {
            var n = e.getEntry(o(this, "Map"), t);
            return n && n.v;
          },
          set: function(t, n) {
            return e.def(o(this, "Map"), 0 === t ? 0 : t, n);
          }
        },
        e,
        !0
      );
    },
    function(t, n, r) {
      "use strict";
      var e = r(5).f,
        o = r(31),
        i = r(36),
        u = r(14),
        c = r(37),
        f = r(38),
        s = r(19),
        a = r(28),
        p = r(62),
        l = r(3),
        v = r(39).fastKey,
        h = r(40),
        y = l ? "_s" : "size",
        d = function(t, n) {
          var r,
            e = v(n);
          if ("F" !== e) return t._i[e];
          for (r = t._f; r; r = r.n) if (r.k == n) return r;
        };
      t.exports = {
        getConstructor: function(t, n, r, s) {
          var a = t(function(t, e) {
            c(t, a, n, "_i"),
              (t._t = n),
              (t._i = o(null)),
              (t._f = void 0),
              (t._l = void 0),
              (t[y] = 0),
              null != e && f(e, r, t[s], t);
          });
          return (
            i(a.prototype, {
              clear: function() {
                for (var t = h(this, n), r = t._i, e = t._f; e; e = e.n)
                  (e.r = !0), e.p && (e.p = e.p.n = void 0), delete r[e.i];
                (t._f = t._l = void 0), (t[y] = 0);
              },
              delete: function(t) {
                var r = h(this, n),
                  e = d(r, t);
                if (e) {
                  var o = e.n,
                    i = e.p;
                  delete r._i[e.i],
                    (e.r = !0),
                    i && (i.n = o),
                    o && (o.p = i),
                    r._f == e && (r._f = o),
                    r._l == e && (r._l = i),
                    r[y]--;
                }
                return !!e;
              },
              forEach: function(t) {
                h(this, n);
                for (
                  var r,
                    e = u(t, arguments.length > 1 ? arguments[1] : void 0, 3);
                  (r = r ? r.n : this._f);

                )
                  for (e(r.v, r.k, this); r && r.r; ) r = r.p;
              },
              has: function(t) {
                return !!d(h(this, n), t);
              }
            }),
            l &&
              e(a.prototype, "size", {
                get: function() {
                  return h(this, n)[y];
                }
              }),
            a
          );
        },
        def: function(t, n, r) {
          var e,
            o,
            i = d(t, n);
          return (
            i
              ? (i.v = r)
              : ((t._l = i = {
                  i: (o = v(n, !0)),
                  k: n,
                  v: r,
                  p: (e = t._l),
                  n: void 0,
                  r: !1
                }),
                t._f || (t._f = i),
                e && (e.n = i),
                t[y]++,
                "F" !== o && (t._i[o] = i)),
            t
          );
        },
        getEntry: d,
        setStrong: function(t, n, r) {
          s(
            t,
            n,
            function(t, r) {
              (this._t = h(t, n)), (this._k = r), (this._l = void 0);
            },
            function() {
              for (var t = this._k, n = this._l; n && n.r; ) n = n.p;
              return this._t && (this._l = n = n ? n.n : this._t._f)
                ? a(0, "keys" == t ? n.k : "values" == t ? n.v : [n.k, n.v])
                : ((this._t = void 0), a(1));
            },
            r ? "entries" : "values",
            !r,
            !0
          ),
            p(n);
        }
      };
    },
    function(t, n, r) {
      var e = r(6);
      t.exports = function(t, n, r, o) {
        try {
          return o ? n(e(r)[0], r[1]) : n(r);
        } catch (n) {
          var i = t.return;
          throw (void 0 !== i && e(i.call(t)), n);
        }
      };
    },
    function(t, n, r) {
      var e = r(9),
        o = r(0)("iterator"),
        i = Array.prototype;
      t.exports = function(t) {
        return void 0 !== t && (e.Array === t || i[o] === t);
      };
    },
    function(t, n, r) {
      var e = r(35),
        o = r(0)("iterator"),
        i = r(9);
      t.exports = r(10).getIteratorMethod = function(t) {
        if (null != t) return t[o] || t["@@iterator"] || i[e(t)];
      };
    },
    function(t, n, r) {
      "use strict";
      var e = r(1),
        o = r(5),
        i = r(3),
        u = r(0)("species");
      t.exports = function(t) {
        var n = e[t];
        i &&
          n &&
          !n[u] &&
          o.f(n, u, {
            configurable: !0,
            get: function() {
              return this;
            }
          });
      };
    },
    function(t, n, r) {
      "use strict";
      var e = r(1),
        o = r(30),
        i = r(7),
        u = r(36),
        c = r(39),
        f = r(38),
        s = r(37),
        a = r(2),
        p = r(12),
        l = r(64),
        v = r(22),
        h = r(65);
      t.exports = function(t, n, r, y, d, _) {
        var x = e[t],
          g = x,
          b = d ? "set" : "add",
          S = g && g.prototype,
          m = {},
          O = function(t) {
            var n = S[t];
            i(
              S,
              t,
              "delete" == t
                ? function(t) {
                    return !(_ && !a(t)) && n.call(this, 0 === t ? 0 : t);
                  }
                : "has" == t
                ? function(t) {
                    return !(_ && !a(t)) && n.call(this, 0 === t ? 0 : t);
                  }
                : "get" == t
                ? function(t) {
                    return _ && !a(t) ? void 0 : n.call(this, 0 === t ? 0 : t);
                  }
                : "add" == t
                ? function(t) {
                    return n.call(this, 0 === t ? 0 : t), this;
                  }
                : function(t, r) {
                    return n.call(this, 0 === t ? 0 : t, r), this;
                  }
            );
          };
        if (
          "function" == typeof g &&
          (_ ||
            (S.forEach &&
              !p(function() {
                new g().entries().next();
              })))
        ) {
          var j = new g(),
            E = j[b](_ ? {} : -0, 1) != j,
            w = p(function() {
              j.has(1);
            }),
            T = l(function(t) {
              new g(t);
            }),
            M =
              !_ &&
              p(function() {
                for (var t = new g(), n = 5; n--; ) t[b](n, n);
                return !t.has(-0);
              });
          T ||
            (((g = n(function(n, r) {
              s(n, g, t);
              var e = h(new x(), n, g);
              return null != r && f(r, d, e[b], e), e;
            })).prototype = S),
            (S.constructor = g)),
            (w || M) && (O("delete"), O("has"), d && O("get")),
            (M || E) && O(b),
            _ && S.clear && delete S.clear;
        } else
          (g = y.getConstructor(n, t, d, b)), u(g.prototype, r), (c.NEED = !0);
        return (
          v(g, t),
          (m[t] = g),
          o(o.G + o.W + o.F * (g != x), m),
          _ || y.setStrong(g, t, d),
          g
        );
      };
    },
    function(t, n, r) {
      var e = r(0)("iterator"),
        o = !1;
      try {
        var i = [7][e]();
        (i.return = function() {
          o = !0;
        }),
          Array.from(i, function() {
            throw 2;
          });
      } catch (t) {}
      t.exports = function(t, n) {
        if (!n && !o) return !1;
        var r = !1;
        try {
          var i = [7],
            u = i[e]();
          (u.next = function() {
            return { done: (r = !0) };
          }),
            (i[e] = function() {
              return u;
            }),
            t(i);
        } catch (t) {}
        return r;
      };
    },
    function(t, n, r) {
      var e = r(2),
        o = r(66).set;
      t.exports = function(t, n, r) {
        var i,
          u = n.constructor;
        return (
          u !== r &&
            "function" == typeof u &&
            (i = u.prototype) !== r.prototype &&
            e(i) &&
            o &&
            o(t, i),
          t
        );
      };
    },
    function(t, n, r) {
      var e = r(2),
        o = r(6),
        i = function(t, n) {
          if ((o(t), !e(n) && null !== n))
            throw TypeError(n + ": can't set as prototype!");
        };
      t.exports = {
        set:
          Object.setPrototypeOf ||
          ("__proto__" in {}
            ? (function(t, n, e) {
                try {
                  (e = r(14)(
                    Function.call,
                    r(67).f(Object.prototype, "__proto__").set,
                    2
                  ))(t, []),
                    (n = !(t instanceof Array));
                } catch (t) {
                  n = !0;
                }
                return function(t, r) {
                  return i(t, r), n ? (t.__proto__ = r) : e(t, r), t;
                };
              })({}, !1)
            : void 0),
        check: i
      };
    },
    function(t, n, r) {
      var e = r(68),
        o = r(17),
        i = r(13),
        u = r(27),
        c = r(8),
        f = r(25),
        s = Object.getOwnPropertyDescriptor;
      n.f = r(3)
        ? s
        : function(t, n) {
            if (((t = i(t)), (n = u(n, !0)), f))
              try {
                return s(t, n);
              } catch (t) {}
            if (c(t, n)) return o(!e.f.call(t, n), t[n]);
          };
    },
    function(t, n) {
      n.f = {}.propertyIsEnumerable;
    },
    function(t, n, r) {
      "use strict";
      var e = r(15);
      r.n(e).a;
    },
    function(t, n, r) {
      "use strict";
      r.r(n);
      r(41), r(23), r(54), r(55), r(57);
      var e = {
        name: "SplitCarousel",
        beforeCreate: function() {
          var t = new Map();
          t.set("a", "1234"), console.log(t);
        }
      };
      r(69);
      var o = (function(t, n, r, e, o, i, u, c) {
          var f,
            s = "function" == typeof t ? t.options : t;
          if (
            (n && ((s.render = n), (s.staticRenderFns = r), (s._compiled = !0)),
            e && (s.functional = !0),
            i && (s._scopeId = "data-v-" + i),
            u
              ? ((f = function(t) {
                  (t =
                    t ||
                    (this.$vnode && this.$vnode.ssrContext) ||
                    (this.parent &&
                      this.parent.$vnode &&
                      this.parent.$vnode.ssrContext)) ||
                    "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                    (t = __VUE_SSR_CONTEXT__),
                    o && o.call(this, t),
                    t &&
                      t._registeredComponents &&
                      t._registeredComponents.add(u);
                }),
                (s._ssrRegister = f))
              : o &&
                (f = c
                  ? function() {
                      o.call(this, this.$root.$options.shadowRoot);
                    }
                  : o),
            f)
          )
            if (s.functional) {
              s._injectStyles = f;
              var a = s.render;
              s.render = function(t, n) {
                return f.call(n), a(t, n);
              };
            } else {
              var p = s.beforeCreate;
              s.beforeCreate = p ? [].concat(p, f) : [f];
            }
          return { exports: t, options: s };
        })(
          e,
          function() {
            this.$createElement;
            this._self._c;
            return this._m(0);
          },
          [
            function() {
              var t = this.$createElement,
                n = this._self._c || t;
              return n("div", [n("h3", [this._v("\n    TEST123\n  ")])]);
            }
          ],
          !1,
          null,
          null,
          null
        ).exports,
        i = {
          install: function(t) {
            t.component("split-carousel", o);
          }
        };
      n.default = i;
    }
  ]);
});
