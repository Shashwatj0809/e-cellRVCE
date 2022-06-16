/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */
! function(t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var i = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) n.d(r, i, function(e) {
                return t[e]
            }.bind(null, i));
        return r
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 98)
}([function(t, e) {
    t.exports = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
}, function(t, e) {
    var n = Array.isArray;
    t.exports = n
}, function(t, e, n) {
    "use strict";
    var r = {},
        i = {},
        o = [],
        a = window.Webflow || [],
        u = window.jQuery,
        c = u(window),
        s = u(document),
        l = u.isFunction,
        f = r._ = n(101),
        d = r.tram = n(53) && u.tram,
        p = !1,
        v = !1;

    function h(t) {
        r.env() && (l(t.design) && c.on("__wf_design", t.design), l(t.preview) && c.on("__wf_preview", t.preview)), l(t.destroy) && c.on("__wf_destroy", t.destroy), t.ready && l(t.ready) && function(t) {
            if (p) return void t.ready();
            if (f.contains(o, t.ready)) return;
            o.push(t.ready)
        }(t)
    }

    function g(t) {
        l(t.design) && c.off("__wf_design", t.design), l(t.preview) && c.off("__wf_preview", t.preview), l(t.destroy) && c.off("__wf_destroy", t.destroy), t.ready && l(t.ready) && function(t) {
            o = f.filter(o, function(e) {
                return e !== t.ready
            })
        }(t)
    }
    d.config.hideBackface = !1, d.config.keepInherited = !0, r.define = function(t, e, n) {
        i[t] && g(i[t]);
        var r = i[t] = e(u, f, n) || {};
        return h(r), r
    }, r.require = function(t) {
        return i[t]
    }, r.push = function(t) {
        p ? l(t) && t() : a.push(t)
    }, r.env = function(t) {
        var e = window.__wf_design,
            n = void 0 !== e;
        return t ? "design" === t ? n && e : "preview" === t ? n && !e : "slug" === t ? n && window.__wf_slug : "editor" === t ? window.WebflowEditor : "test" === t ? window.__wf_test : "frame" === t ? window !== window.top : void 0 : n
    };
    var E, m = navigator.userAgent.toLowerCase(),
        _ = r.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
        y = r.env.chrome = /chrome/.test(m) && /Google/.test(navigator.vendor) && parseInt(m.match(/chrome\/(\d+)\./)[1], 10),
        I = r.env.ios = /(ipod|iphone|ipad)/.test(m);
    r.env.safari = /safari/.test(m) && !y && !I, _ && s.on("touchstart mousedown", function(t) {
        E = t.target
    }), r.validClick = _ ? function(t) {
        return t === E || u.contains(t, E)
    } : function() {
        return !0
    };
    var w, b = "resize.webflow orientationchange.webflow load.webflow";

    function T(t, e) {
        var n = [],
            r = {};
        return r.up = f.throttle(function(t) {
            f.each(n, function(e) {
                e(t)
            })
        }), t && e && t.on(e, r.up), r.on = function(t) {
            "function" == typeof t && (f.contains(n, t) || n.push(t))
        }, r.off = function(t) {
            n = arguments.length ? f.filter(n, function(e) {
                return e !== t
            }) : []
        }, r
    }

    function O(t) {
        l(t) && t()
    }

    function A() {
        w && (w.reject(), c.off("load", w.resolve)), w = new u.Deferred, c.on("load", w.resolve)
    }
    r.resize = T(c, b), r.scroll = T(c, "scroll.webflow resize.webflow orientationchange.webflow load.webflow"), r.redraw = T(), r.location = function(t) {
        window.location = t
    }, r.env() && (r.location = function() {}), r.ready = function() {
        p = !0, v ? (v = !1, f.each(i, h)) : f.each(o, O), f.each(a, O), r.resize.up()
    }, r.load = function(t) {
        w.then(t)
    }, r.destroy = function(t) {
        t = t || {}, v = !0, c.triggerHandler("__wf_destroy"), null != t.domready && (p = t.domready), f.each(i, g), r.resize.off(), r.scroll.off(), r.redraw.off(), o = [], a = [], "pending" === w.state() && A()
    }, u(r.ready), A(), t.exports = window.Webflow = r
}, function(t, e, n) {
    "use strict";
    var r = n(14);
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = {
        IX2EngineActionTypes: !0,
        IX2EngineConstants: !0
    };
    e.IX2EngineConstants = e.IX2EngineActionTypes = void 0;
    var o = n(119);
    Object.keys(o).forEach(function(t) {
        "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: function() {
                return o[t]
            }
        }))
    });
    var a = n(120);
    Object.keys(a).forEach(function(t) {
        "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: function() {
                return a[t]
            }
        }))
    });
    var u = n(121);
    Object.keys(u).forEach(function(t) {
        "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: function() {
                return u[t]
            }
        }))
    });
    var c = r(n(122));
    e.IX2EngineActionTypes = c;
    var s = r(n(123));
    e.IX2EngineConstants = s
}, function(t, e, n) {
    var r = n(65),
        i = "object" == typeof self && self && self.Object === Object && self,
        o = r || i || Function("return this")();
    t.exports = o
}, function(t, e) {
    t.exports = function(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
    }
}, function(t, e, n) {
    var r = n(126),
        i = n(180),
        o = n(46),
        a = n(1),
        u = n(187);
    t.exports = function(t) {
        return "function" == typeof t ? t : null == t ? o : "object" == typeof t ? a(t) ? i(t[0], t[1]) : r(t) : u(t)
    }
}, function(t, e, n) {
    var r = n(138),
        i = n(143);
    t.exports = function(t, e) {
        var n = i(t, e);
        return r(n) ? n : void 0
    }
}, function(t, e) {
    t.exports = function(t) {
        return null != t && "object" == typeof t
    }
}, function(t, e, n) {
    "use strict";
    var r = n(14);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.IX2VanillaUtils = e.IX2VanillaPlugins = e.IX2ElementsReducer = e.IX2EasingUtils = e.IX2Easings = e.IX2BrowserSupport = void 0;
    var i = r(n(32));
    e.IX2BrowserSupport = i;
    var o = r(n(83));
    e.IX2Easings = o;
    var a = r(n(85));
    e.IX2EasingUtils = a;
    var u = r(n(194));
    e.IX2ElementsReducer = u;
    var c = r(n(87));
    e.IX2VanillaPlugins = c;
    var s = r(n(196));
    e.IX2VanillaUtils = s
}, function(t, e, n) {
    var r = n(16),
        i = n(139),
        o = n(140),
        a = "[object Null]",
        u = "[object Undefined]",
        c = r ? r.toStringTag : void 0;
    t.exports = function(t) {
        return null == t ? void 0 === t ? u : a : c && c in Object(t) ? i(t) : o(t)
    }
}, function(t, e, n) {
    var r = n(64),
        i = n(40);
    t.exports = function(t) {
        return null != t && i(t.length) && !r(t)
    }
}, function(t, e) {
    function n(t) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function r(e) {
        return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? t.exports = r = function(t) {
            return n(t)
        } : t.exports = r = function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : n(t)
        }, r(e)
    }
    t.exports = r
}, function(t, e, n) {
    "use strict";
    var r = n(103);

    function i(t, e) {
        var n = document.createEvent("CustomEvent");
        n.initCustomEvent(e, !0, !0, null), t.dispatchEvent(n)
    }
    var o = window.jQuery,
        a = {},
        u = {
            reset: function(t, e) {
                r.triggers.reset(t, e)
            },
            intro: function(t, e) {
                r.triggers.intro(t, e), i(e, "COMPONENT_ACTIVE")
            },
            outro: function(t, e) {
                r.triggers.outro(t, e), i(e, "COMPONENT_INACTIVE")
            }
        };
    a.triggers = {}, a.types = {
        INTRO: "w-ix-intro.w-ix",
        OUTRO: "w-ix-outro.w-ix"
    }, o.extend(a.triggers, u), t.exports = a
}, function(t, e) {
    t.exports = function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var n in t)
                if (Object.prototype.hasOwnProperty.call(t, n)) {
                    var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                    r.get || r.set ? Object.defineProperty(e, n, r) : e[n] = t[n]
                } return e.default = t, e
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    e.clone = c, e.addLast = f, e.addFirst = d, e.removeLast = p, e.removeFirst = v, e.insert = h, e.removeAt = g, e.replaceAt = E, e.getIn = m, e.set = _, e.setIn = y, e.update = I, e.updateIn = w, e.merge = b, e.mergeDeep = T, e.mergeIn = O, e.omit = A, e.addDefaults = S;
    /*!
     * Timm
     *
     * Immutability helpers with fast reads and acceptable writes.
     *
     * @copyright Guillermo Grau Panea 2016
     * @license MIT
     */
    var i = "INVALID_ARGS";

    function o(t) {
        throw new Error(t)
    }

    function a(t) {
        var e = Object.keys(t);
        return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e
    }
    var u = {}.hasOwnProperty;

    function c(t) {
        if (Array.isArray(t)) return t.slice();
        for (var e = a(t), n = {}, r = 0; r < e.length; r++) {
            var i = e[r];
            n[i] = t[i]
        }
        return n
    }

    function s(t, e, n) {
        var r = n;
        null == r && o(i);
        for (var u = !1, f = arguments.length, d = Array(f > 3 ? f - 3 : 0), p = 3; p < f; p++) d[p - 3] = arguments[p];
        for (var v = 0; v < d.length; v++) {
            var h = d[v];
            if (null != h) {
                var g = a(h);
                if (g.length)
                    for (var E = 0; E <= g.length; E++) {
                        var m = g[E];
                        if (!t || void 0 === r[m]) {
                            var _ = h[m];
                            e && l(r[m]) && l(_) && (_ = s(t, e, r[m], _)), void 0 !== _ && _ !== r[m] && (u || (u = !0, r = c(r)), r[m] = _)
                        }
                    }
            }
        }
        return r
    }

    function l(t) {
        var e = void 0 === t ? "undefined" : r(t);
        return null != t && ("object" === e || "function" === e)
    }

    function f(t, e) {
        return Array.isArray(e) ? t.concat(e) : t.concat([e])
    }

    function d(t, e) {
        return Array.isArray(e) ? e.concat(t) : [e].concat(t)
    }

    function p(t) {
        return t.length ? t.slice(0, t.length - 1) : t
    }

    function v(t) {
        return t.length ? t.slice(1) : t
    }

    function h(t, e, n) {
        return t.slice(0, e).concat(Array.isArray(n) ? n : [n]).concat(t.slice(e))
    }

    function g(t, e) {
        return e >= t.length || e < 0 ? t : t.slice(0, e).concat(t.slice(e + 1))
    }

    function E(t, e, n) {
        if (t[e] === n) return t;
        for (var r = t.length, i = Array(r), o = 0; o < r; o++) i[o] = t[o];
        return i[e] = n, i
    }

    function m(t, e) {
        if (!Array.isArray(e) && o(i), null != t) {
            for (var n = t, r = 0; r < e.length; r++) {
                var a = e[r];
                if (void 0 === (n = null != n ? n[a] : void 0)) return n
            }
            return n
        }
    }

    function _(t, e, n) {
        var r = null == t ? "number" == typeof e ? [] : {} : t;
        if (r[e] === n) return r;
        var i = c(r);
        return i[e] = n, i
    }

    function y(t, e, n) {
        return e.length ? function t(e, n, r, i) {
            var o = void 0,
                a = n[i];
            o = i === n.length - 1 ? r : t(l(e) && l(e[a]) ? e[a] : "number" == typeof n[i + 1] ? [] : {}, n, r, i + 1);
            return _(e, a, o)
        }(t, e, n, 0) : n
    }

    function I(t, e, n) {
        return _(t, e, n(null == t ? void 0 : t[e]))
    }

    function w(t, e, n) {
        return y(t, e, n(m(t, e)))
    }

    function b(t, e, n, r, i, o) {
        for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
        return u.length ? s.call.apply(s, [null, !1, !1, t, e, n, r, i, o].concat(u)) : s(!1, !1, t, e, n, r, i, o)
    }

    function T(t, e, n, r, i, o) {
        for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
        return u.length ? s.call.apply(s, [null, !1, !0, t, e, n, r, i, o].concat(u)) : s(!1, !0, t, e, n, r, i, o)
    }

    function O(t, e, n, r, i, o, a) {
        var u = m(t, e);
        null == u && (u = {});
        for (var c = arguments.length, l = Array(c > 7 ? c - 7 : 0), f = 7; f < c; f++) l[f - 7] = arguments[f];
        return y(t, e, l.length ? s.call.apply(s, [null, !1, !1, u, n, r, i, o, a].concat(l)) : s(!1, !1, u, n, r, i, o, a))
    }

    function A(t, e) {
        for (var n = Array.isArray(e) ? e : [e], r = !1, i = 0; i < n.length; i++)
            if (u.call(t, n[i])) {
                r = !0;
                break
            } if (!r) return t;
        for (var o = {}, c = a(t), s = 0; s < c.length; s++) {
            var l = c[s];
            n.indexOf(l) >= 0 || (o[l] = t[l])
        }
        return o
    }

    function S(t, e, n, r, i, o) {
        for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
        return u.length ? s.call.apply(s, [null, !0, !1, t, e, n, r, i, o].concat(u)) : s(!0, !1, t, e, n, r, i, o)
    }
    var x = {
        clone: c,
        addLast: f,
        addFirst: d,
        removeLast: p,
        removeFirst: v,
        insert: h,
        removeAt: g,
        replaceAt: E,
        getIn: m,
        set: _,
        setIn: y,
        update: I,
        updateIn: w,
        merge: b,
        mergeDeep: T,
        mergeIn: O,
        omit: A,
        addDefaults: S
    };
    e.default = x
}, function(t, e, n) {
    var r = n(4).Symbol;
    t.exports = r
}, function(t, e, n) {
    var r = n(28),
        i = 1 / 0;
    t.exports = function(t) {
        if ("string" == typeof t || r(t)) return t;
        var e = t + "";
        return "0" == e && 1 / t == -i ? "-0" : e
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }
}, function(t, e) {
    function n() {
        return t.exports = n = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        }, n.apply(this, arguments)
    }
    t.exports = n
}, function(t, e, n) {
    var r = n(128),
        i = n(129),
        o = n(130),
        a = n(131),
        u = n(132);

    function c(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c
}, function(t, e, n) {
    var r = n(33);
    t.exports = function(t, e) {
        for (var n = t.length; n--;)
            if (r(t[n][0], e)) return n;
        return -1
    }
}, function(t, e, n) {
    var r = n(7)(Object, "create");
    t.exports = r
}, function(t, e, n) {
    var r = n(152);
    t.exports = function(t, e) {
        var n = t.__data__;
        return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
    }
}, function(t, e, n) {
    var r = n(72),
        i = n(41),
        o = n(11);
    t.exports = function(t) {
        return o(t) ? r(t) : i(t)
    }
}, function(t, e, n) {
    var r = n(170),
        i = n(8),
        o = Object.prototype,
        a = o.hasOwnProperty,
        u = o.propertyIsEnumerable,
        c = r(function() {
            return arguments
        }()) ? r : function(t) {
            return i(t) && a.call(t, "callee") && !u.call(t, "callee")
        };
    t.exports = c
}, function(t, e, n) {
    var r = n(44);
    t.exports = function(t, e, n) {
        var i = null == t ? void 0 : r(t, e);
        return void 0 === i ? n : i
    }
}, function(t, e, n) {
    var r = n(1),
        i = n(45),
        o = n(181),
        a = n(78);
    t.exports = function(t, e) {
        return r(t) ? t : i(t, e) ? [t] : o(a(t))
    }
}, function(t, e, n) {
    var r = n(10),
        i = n(8),
        o = "[object Symbol]";
    t.exports = function(t) {
        return "symbol" == typeof t || i(t) && r(t) == o
    }
}, function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "ActionTypes", function() {
        return o
    }), n.d(e, "default", function() {
        return a
    });
    var r = n(55),
        i = n(114),
        o = {
            INIT: "@@redux/INIT"
        };

    function a(t, e, n) {
        var u;
        if ("function" == typeof e && void 0 === n && (n = e, e = void 0), void 0 !== n) {
            if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
            return n(a)(t, e)
        }
        if ("function" != typeof t) throw new Error("Expected the reducer to be a function.");
        var c = t,
            s = e,
            l = [],
            f = l,
            d = !1;

        function p() {
            f === l && (f = l.slice())
        }

        function v() {
            return s
        }

        function h(t) {
            if ("function" != typeof t) throw new Error("Expected listener to be a function.");
            var e = !0;
            return p(), f.push(t),
                function() {
                    if (e) {
                        e = !1, p();
                        var n = f.indexOf(t);
                        f.splice(n, 1)
                    }
                }
        }

        function g(t) {
            if (!Object(r.default)(t)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
            if (void 0 === t.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
            if (d) throw new Error("Reducers may not dispatch actions.");
            try {
                d = !0, s = c(s, t)
            } finally {
                d = !1
            }
            for (var e = l = f, n = 0; n < e.length; n++) e[n]();
            return t
        }
        return g({
            type: o.INIT
        }), (u = {
            dispatch: g,
            subscribe: h,
            getState: v,
            replaceReducer: function(t) {
                if ("function" != typeof t) throw new Error("Expected the nextReducer to be a function.");
                c = t, g({
                    type: o.INIT
                })
            }
        })[i.default] = function() {
            var t, e = h;
            return (t = {
                subscribe: function(t) {
                    if ("object" != typeof t) throw new TypeError("Expected the observer to be an object.");

                    function n() {
                        t.next && t.next(v())
                    }
                    return n(), {
                        unsubscribe: e(n)
                    }
                }
            })[i.default] = function() {
                return this
            }, t
        }, u
    }
}, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function(t, e, n) {
    "use strict";

    function r() {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        if (0 === e.length) return function(t) {
            return t
        };
        if (1 === e.length) return e[0];
        var r = e[e.length - 1],
            i = e.slice(0, -1);
        return function() {
            return i.reduceRight(function(t, e) {
                return e(t)
            }, r.apply(void 0, arguments))
        }
    }
    n.r(e), n.d(e, "default", function() {
        return r
    })
}, function(t, e, n) {
    "use strict";
    var r = n(0);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.TRANSFORM_STYLE_PREFIXED = e.TRANSFORM_PREFIXED = e.FLEX_PREFIXED = e.ELEMENT_MATCHES = e.withBrowser = e.IS_BROWSER_ENV = void 0;
    var i = r(n(61)),
        o = "undefined" != typeof window;
    e.IS_BROWSER_ENV = o;
    var a = function(t, e) {
        return o ? t() : e
    };
    e.withBrowser = a;
    var u = a(function() {
        return (0, i.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], function(t) {
            return t in Element.prototype
        })
    });
    e.ELEMENT_MATCHES = u;
    var c = a(function() {
        var t = document.createElement("i"),
            e = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];
        try {
            for (var n = e.length, r = 0; r < n; r++) {
                var i = e[r];
                if (t.style.display = i, t.style.display === i) return i
            }
            return ""
        } catch (t) {
            return ""
        }
    }, "flex");
    e.FLEX_PREFIXED = c;
    var s = a(function() {
        var t = document.createElement("i");
        if (null == t.style.transform)
            for (var e = ["Webkit", "Moz", "ms"], n = e.length, r = 0; r < n; r++) {
                var i = e[r] + "Transform";
                if (void 0 !== t.style[i]) return i
            }
        return "transform"
    }, "transform");
    e.TRANSFORM_PREFIXED = s;
    var l = s.split("transform")[0],
        f = l ? l + "TransformStyle" : "transformStyle";
    e.TRANSFORM_STYLE_PREFIXED = f
}, function(t, e) {
    t.exports = function(t, e) {
        return t === e || t != t && e != e
    }
}, function(t, e, n) {
    var r = n(7)(n(4), "Map");
    t.exports = r
}, function(t, e, n) {
    var r = n(144),
        i = n(151),
        o = n(153),
        a = n(154),
        u = n(155);

    function c(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c
}, function(t, e) {
    t.exports = function(t, e) {
        for (var n = -1, r = e.length, i = t.length; ++n < r;) t[i + n] = e[n];
        return t
    }
}, function(t, e, n) {
    (function(t) {
        var r = n(4),
            i = n(171),
            o = e && !e.nodeType && e,
            a = o && "object" == typeof t && t && !t.nodeType && t,
            u = a && a.exports === o ? r.Buffer : void 0,
            c = (u ? u.isBuffer : void 0) || i;
        t.exports = c
    }).call(this, n(73)(t))
}, function(t, e) {
    var n = 9007199254740991,
        r = /^(?:0|[1-9]\d*)$/;
    t.exports = function(t, e) {
        var i = typeof t;
        return !!(e = null == e ? n : e) && ("number" == i || "symbol" != i && r.test(t)) && t > -1 && t % 1 == 0 && t < e
    }
}, function(t, e, n) {
    var r = n(172),
        i = n(173),
        o = n(174),
        a = o && o.isTypedArray,
        u = a ? i(a) : r;
    t.exports = u
}, function(t, e) {
    var n = 9007199254740991;
    t.exports = function(t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n
    }
}, function(t, e, n) {
    var r = n(42),
        i = n(175),
        o = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        if (!r(t)) return i(t);
        var e = [];
        for (var n in Object(t)) o.call(t, n) && "constructor" != n && e.push(n);
        return e
    }
}, function(t, e) {
    var n = Object.prototype;
    t.exports = function(t) {
        var e = t && t.constructor;
        return t === ("function" == typeof e && e.prototype || n)
    }
}, function(t, e, n) {
    var r = n(176),
        i = n(34),
        o = n(177),
        a = n(178),
        u = n(75),
        c = n(10),
        s = n(66),
        l = s(r),
        f = s(i),
        d = s(o),
        p = s(a),
        v = s(u),
        h = c;
    (r && "[object DataView]" != h(new r(new ArrayBuffer(1))) || i && "[object Map]" != h(new i) || o && "[object Promise]" != h(o.resolve()) || a && "[object Set]" != h(new a) || u && "[object WeakMap]" != h(new u)) && (h = function(t) {
        var e = c(t),
            n = "[object Object]" == e ? t.constructor : void 0,
            r = n ? s(n) : "";
        if (r) switch (r) {
            case l:
                return "[object DataView]";
            case f:
                return "[object Map]";
            case d:
                return "[object Promise]";
            case p:
                return "[object Set]";
            case v:
                return "[object WeakMap]"
        }
        return e
    }), t.exports = h
}, function(t, e, n) {
    var r = n(27),
        i = n(17);
    t.exports = function(t, e) {
        for (var n = 0, o = (e = r(e, t)).length; null != t && n < o;) t = t[i(e[n++])];
        return n && n == o ? t : void 0
    }
}, function(t, e, n) {
    var r = n(1),
        i = n(28),
        o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        a = /^\w*$/;
    t.exports = function(t, e) {
        if (r(t)) return !1;
        var n = typeof t;
        return !("number" != n && "symbol" != n && "boolean" != n && null != t && !i(t)) || a.test(t) || !o.test(t) || null != e && t in Object(e)
    }
}, function(t, e) {
    t.exports = function(t) {
        return t
    }
}, function(t, e, n) {
    var r = n(190);
    t.exports = function(t) {
        var e = r(t),
            n = e % 1;
        return e == e ? n ? e - n : e : 0
    }
}, function(t, e, n) {
    var r = n(5),
        i = n(28),
        o = NaN,
        a = /^\s+|\s+$/g,
        u = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        s = /^0o[0-7]+$/i,
        l = parseInt;
    t.exports = function(t) {
        if ("number" == typeof t) return t;
        if (i(t)) return o;
        if (r(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = r(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(a, "");
        var n = c.test(t);
        return n || s.test(t) ? l(t.slice(2), n ? 2 : 8) : u.test(t) ? o : +t
    }
}, function(t, e, n) {
    "use strict";
    var r = n(0);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.mediaQueriesDefined = e.viewportWidthChanged = e.actionListPlaybackChanged = e.elementStateChanged = e.instanceRemoved = e.instanceStarted = e.instanceAdded = e.parameterChanged = e.animationFrameChanged = e.eventStateChanged = e.testFrameRendered = e.eventListenerAdded = e.clearRequested = e.stopRequested = e.playbackRequested = e.previewRequested = e.sessionStopped = e.sessionStarted = e.sessionInitialized = e.rawDataImported = void 0;
    var i = r(n(19)),
        o = n(3),
        a = n(9),
        u = o.IX2EngineActionTypes,
        c = u.IX2_RAW_DATA_IMPORTED,
        s = u.IX2_SESSION_INITIALIZED,
        l = u.IX2_SESSION_STARTED,
        f = u.IX2_SESSION_STOPPED,
        d = u.IX2_PREVIEW_REQUESTED,
        p = u.IX2_PLAYBACK_REQUESTED,
        v = u.IX2_STOP_REQUESTED,
        h = u.IX2_CLEAR_REQUESTED,
        g = u.IX2_EVENT_LISTENER_ADDED,
        E = u.IX2_TEST_FRAME_RENDERED,
        m = u.IX2_EVENT_STATE_CHANGED,
        _ = u.IX2_ANIMATION_FRAME_CHANGED,
        y = u.IX2_PARAMETER_CHANGED,
        I = u.IX2_INSTANCE_ADDED,
        w = u.IX2_INSTANCE_STARTED,
        b = u.IX2_INSTANCE_REMOVED,
        T = u.IX2_ELEMENT_STATE_CHANGED,
        O = u.IX2_ACTION_LIST_PLAYBACK_CHANGED,
        A = u.IX2_VIEWPORT_WIDTH_CHANGED,
        S = u.IX2_MEDIA_QUERIES_DEFINED,
        x = a.IX2VanillaUtils.reifyState;
    e.rawDataImported = function(t) {
        return {
            type: c,
            payload: (0, i.default)({}, x(t))
        }
    };
    e.sessionInitialized = function(t) {
        var e = t.hasBoundaryNodes;
        return {
            type: s,
            payload: {
                hasBoundaryNodes: e
            }
        }
    };
    e.sessionStarted = function() {
        return {
            type: l
        }
    };
    e.sessionStopped = function() {
        return {
            type: f
        }
    };
    e.previewRequested = function(t) {
        var e = t.rawData,
            n = t.defer;
        return {
            type: d,
            payload: {
                defer: n,
                rawData: e
            }
        }
    };
    e.playbackRequested = function(t) {
        var e = t.actionTypeId,
            n = void 0 === e ? o.ActionTypeConsts.GENERAL_START_ACTION : e,
            r = t.actionListId,
            i = t.actionItemId,
            a = t.eventId,
            u = t.allowEvents,
            c = t.immediate,
            s = t.testManual,
            l = t.verbose,
            f = t.rawData;
        return {
            type: p,
            payload: {
                actionTypeId: n,
                actionListId: r,
                actionItemId: i,
                testManual: s,
                eventId: a,
                allowEvents: u,
                immediate: c,
                verbose: l,
                rawData: f
            }
        }
    };
    e.stopRequested = function(t) {
        return {
            type: v,
            payload: {
                actionListId: t
            }
        }
    };
    e.clearRequested = function() {
        return {
            type: h
        }
    };
    e.eventListenerAdded = function(t, e) {
        return {
            type: g,
            payload: {
                target: t,
                listenerParams: e
            }
        }
    };
    e.testFrameRendered = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return {
            type: E,
            payload: {
                step: t
            }
        }
    };
    e.eventStateChanged = function(t, e) {
        return {
            type: m,
            payload: {
                stateKey: t,
                newState: e
            }
        }
    };
    e.animationFrameChanged = function(t, e) {
        return {
            type: _,
            payload: {
                now: t,
                parameters: e
            }
        }
    };
    e.parameterChanged = function(t, e) {
        return {
            type: y,
            payload: {
                key: t,
                value: e
            }
        }
    };
    e.instanceAdded = function(t) {
        return {
            type: I,
            payload: (0, i.default)({}, t)
        }
    };
    e.instanceStarted = function(t, e) {
        return {
            type: w,
            payload: {
                instanceId: t,
                time: e
            }
        }
    };
    e.instanceRemoved = function(t) {
        return {
            type: b,
            payload: {
                instanceId: t
            }
        }
    };
    e.elementStateChanged = function(t, e, n, r) {
        return {
            type: T,
            payload: {
                elementId: t,
                actionTypeId: e,
                current: n,
                actionItem: r
            }
        }
    };
    e.actionListPlaybackChanged = function(t) {
        var e = t.actionListId,
            n = t.isPlaying;
        return {
            type: O,
            payload: {
                actionListId: e,
                isPlaying: n
            }
        }
    };
    e.viewportWidthChanged = function(t) {
        var e = t.width,
            n = t.mediaQueries;
        return {
            type: A,
            payload: {
                width: e,
                mediaQueries: n
            }
        }
    };
    e.mediaQueriesDefined = function() {
        return {
            type: S
        }
    }
}, function(t, e, n) {
    var r = n(95),
        i = n(51);

    function o(t, e) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = void 0
    }
    o.prototype = r(i.prototype), o.prototype.constructor = o, t.exports = o
}, function(t, e) {
    t.exports = function() {}
}, function(t, e, n) {
    var r = n(95),
        i = n(51),
        o = 4294967295;

    function a(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = o, this.__views__ = []
    }
    a.prototype = r(i.prototype), a.prototype.constructor = a, t.exports = a
}, function(t, e, n) {
    "use strict";
    var r = n(0)(n(12));
    window.tram = function(t) {
        function e(t, e) {
            return (new F.Bare).init(t, e)
        }

        function n(t) {
            return t.replace(/[A-Z]/g, function(t) {
                return "-" + t.toLowerCase()
            })
        }

        function i(t) {
            var e = parseInt(t.slice(1), 16);
            return [e >> 16 & 255, e >> 8 & 255, 255 & e]
        }

        function o(t, e, n) {
            return "#" + (1 << 24 | t << 16 | e << 8 | n).toString(16).slice(1)
        }

        function a() {}

        function u(t, e, n) {
            s("Units do not match [" + t + "]: " + e + ", " + n)
        }

        function c(t, e, n) {
            if (void 0 !== e && (n = e), void 0 === t) return n;
            var r = n;
            return $.test(t) || !Z.test(t) ? r = parseInt(t, 10) : Z.test(t) && (r = 1e3 * parseFloat(t)), 0 > r && (r = 0), r == r ? r : n
        }

        function s(t) {
            H.debug && window && window.console.warn(t)
        }
        var l = function(t, e, n) {
                function i(t) {
                    return "object" == (0, r.default)(t)
                }

                function o(t) {
                    return "function" == typeof t
                }

                function a() {}
                return function r(u, c) {
                    function s() {
                        var t = new l;
                        return o(t.init) && t.init.apply(t, arguments), t
                    }

                    function l() {}
                    c === n && (c = u, u = Object), s.Bare = l;
                    var f, d = a[t] = u[t],
                        p = l[t] = s[t] = new a;
                    return p.constructor = s, s.mixin = function(e) {
                        return l[t] = s[t] = r(s, e)[t], s
                    }, s.open = function(t) {
                        if (f = {}, o(t) ? f = t.call(s, p, d, s, u) : i(t) && (f = t), i(f))
                            for (var n in f) e.call(f, n) && (p[n] = f[n]);
                        return o(p.init) || (p.init = u), s
                    }, s.open(c)
                }
            }("prototype", {}.hasOwnProperty),
            f = {
                ease: ["ease", function(t, e, n, r) {
                    var i = (t /= r) * t,
                        o = i * t;
                    return e + n * (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + .25 * t)
                }],
                "ease-in": ["ease-in", function(t, e, n, r) {
                    var i = (t /= r) * t,
                        o = i * t;
                    return e + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i)
                }],
                "ease-out": ["ease-out", function(t, e, n, r) {
                    var i = (t /= r) * t,
                        o = i * t;
                    return e + n * (.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * t)
                }],
                "ease-in-out": ["ease-in-out", function(t, e, n, r) {
                    var i = (t /= r) * t,
                        o = i * t;
                    return e + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i)
                }],
                linear: ["linear", function(t, e, n, r) {
                    return n * t / r + e
                }],
                "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(t, e, n, r) {
                    return n * (t /= r) * t + e
                }],
                "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(t, e, n, r) {
                    return -n * (t /= r) * (t - 2) + e
                }],
                "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(t, e, n, r) {
                    return (t /= r / 2) < 1 ? n / 2 * t * t + e : -n / 2 * (--t * (t - 2) - 1) + e
                }],
                "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(t, e, n, r) {
                    return n * (t /= r) * t * t + e
                }],
                "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(t, e, n, r) {
                    return n * ((t = t / r - 1) * t * t + 1) + e
                }],
                "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(t, e, n, r) {
                    return (t /= r / 2) < 1 ? n / 2 * t * t * t + e : n / 2 * ((t -= 2) * t * t + 2) + e
                }],
                "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(t, e, n, r) {
                    return n * (t /= r) * t * t * t + e
                }],
                "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(t, e, n, r) {
                    return -n * ((t = t / r - 1) * t * t * t - 1) + e
                }],
                "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(t, e, n, r) {
                    return (t /= r / 2) < 1 ? n / 2 * t * t * t * t + e : -n / 2 * ((t -= 2) * t * t * t - 2) + e
                }],
                "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(t, e, n, r) {
                    return n * (t /= r) * t * t * t * t + e
                }],
                "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(t, e, n, r) {
                    return n * ((t = t / r - 1) * t * t * t * t + 1) + e
                }],
                "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(t, e, n, r) {
                    return (t /= r / 2) < 1 ? n / 2 * t * t * t * t * t + e : n / 2 * ((t -= 2) * t * t * t * t + 2) + e
                }],
                "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(t, e, n, r) {
                    return -n * Math.cos(t / r * (Math.PI / 2)) + n + e
                }],
                "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(t, e, n, r) {
                    return n * Math.sin(t / r * (Math.PI / 2)) + e
                }],
                "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(t, e, n, r) {
                    return -n / 2 * (Math.cos(Math.PI * t / r) - 1) + e
                }],
                "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(t, e, n, r) {
                    return 0 === t ? e : n * Math.pow(2, 10 * (t / r - 1)) + e
                }],
                "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(t, e, n, r) {
                    return t === r ? e + n : n * (1 - Math.pow(2, -10 * t / r)) + e
                }],
                "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(t, e, n, r) {
                    return 0 === t ? e : t === r ? e + n : (t /= r / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + e : n / 2 * (2 - Math.pow(2, -10 * --t)) + e
                }],
                "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(t, e, n, r) {
                    return -n * (Math.sqrt(1 - (t /= r) * t) - 1) + e
                }],
                "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(t, e, n, r) {
                    return n * Math.sqrt(1 - (t = t / r - 1) * t) + e
                }],
                "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(t, e, n, r) {
                    return (t /= r / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + e : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
                }],
                "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(t, e, n, r, i) {
                    return void 0 === i && (i = 1.70158), n * (t /= r) * t * ((i + 1) * t - i) + e
                }],
                "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(t, e, n, r, i) {
                    return void 0 === i && (i = 1.70158), n * ((t = t / r - 1) * t * ((i + 1) * t + i) + 1) + e
                }],
                "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(t, e, n, r, i) {
                    return void 0 === i && (i = 1.70158), (t /= r / 2) < 1 ? n / 2 * t * t * ((1 + (i *= 1.525)) * t - i) + e : n / 2 * ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2) + e
                }]
            },
            d = {
                "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
            },
            p = document,
            v = window,
            h = "bkwld-tram",
            g = /[\-\.0-9]/g,
            E = /[A-Z]/,
            m = "number",
            _ = /^(rgb|#)/,
            y = /(em|cm|mm|in|pt|pc|px)$/,
            I = /(em|cm|mm|in|pt|pc|px|%)$/,
            w = /(deg|rad|turn)$/,
            b = "unitless",
            T = /(all|none) 0s ease 0s/,
            O = /^(width|height)$/,
            A = " ",
            S = p.createElement("a"),
            x = ["Webkit", "Moz", "O", "ms"],
            R = ["-webkit-", "-moz-", "-o-", "-ms-"],
            C = function(t) {
                if (t in S.style) return {
                    dom: t,
                    css: t
                };
                var e, n, r = "",
                    i = t.split("-");
                for (e = 0; e < i.length; e++) r += i[e].charAt(0).toUpperCase() + i[e].slice(1);
                for (e = 0; e < x.length; e++)
                    if ((n = x[e] + r) in S.style) return {
                        dom: n,
                        css: R[e] + t
                    }
            },
            N = e.support = {
                bind: Function.prototype.bind,
                transform: C("transform"),
                transition: C("transition"),
                backface: C("backface-visibility"),
                timing: C("transition-timing-function")
            };
        if (N.transition) {
            var L = N.timing.dom;
            if (S.style[L] = f["ease-in-back"][0], !S.style[L])
                for (var D in d) f[D][0] = d[D]
        }
        var P = e.frame = function() {
                var t = v.requestAnimationFrame || v.webkitRequestAnimationFrame || v.mozRequestAnimationFrame || v.oRequestAnimationFrame || v.msRequestAnimationFrame;
                return t && N.bind ? t.bind(v) : function(t) {
                    v.setTimeout(t, 16)
                }
            }(),
            M = e.now = function() {
                var t = v.performance,
                    e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
                return e && N.bind ? e.bind(t) : Date.now || function() {
                    return +new Date
                }
            }(),
            j = l(function(e) {
                function i(t, e) {
                    var n = function(t) {
                            for (var e = -1, n = t ? t.length : 0, r = []; ++e < n;) {
                                var i = t[e];
                                i && r.push(i)
                            }
                            return r
                        }(("" + t).split(A)),
                        r = n[0];
                    e = e || {};
                    var i = Q[r];
                    if (!i) return s("Unsupported property: " + r);
                    if (!e.weak || !this.props[r]) {
                        var o = i[0],
                            a = this.props[r];
                        return a || (a = this.props[r] = new o.Bare), a.init(this.$el, n, i, e), a
                    }
                }

                function o(t, e, n) {
                    if (t) {
                        var o = (0, r.default)(t);
                        if (e || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == o && e) return this.timer = new W({
                            duration: t,
                            context: this,
                            complete: a
                        }), void(this.active = !0);
                        if ("string" == o && e) {
                            switch (t) {
                                case "hide":
                                    l.call(this);
                                    break;
                                case "stop":
                                    u.call(this);
                                    break;
                                case "redraw":
                                    f.call(this);
                                    break;
                                default:
                                    i.call(this, t, n && n[1])
                            }
                            return a.call(this)
                        }
                        if ("function" == o) return void t.call(this, this);
                        if ("object" == o) {
                            var s = 0;
                            p.call(this, t, function(t, e) {
                                t.span > s && (s = t.span), t.stop(), t.animate(e)
                            }, function(t) {
                                "wait" in t && (s = c(t.wait, 0))
                            }), d.call(this), s > 0 && (this.timer = new W({
                                duration: s,
                                context: this
                            }), this.active = !0, e && (this.timer.complete = a));
                            var v = this,
                                h = !1,
                                g = {};
                            P(function() {
                                p.call(v, t, function(t) {
                                    t.active && (h = !0, g[t.name] = t.nextStyle)
                                }), h && v.$el.css(g)
                            })
                        }
                    }
                }

                function a() {
                    if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                        var t = this.queue.shift();
                        o.call(this, t.options, !0, t.args)
                    }
                }

                function u(t) {
                    var e;
                    this.timer && this.timer.destroy(), this.queue = [], this.active = !1, "string" == typeof t ? (e = {})[t] = 1 : e = "object" == (0, r.default)(t) && null != t ? t : this.props, p.call(this, e, v), d.call(this)
                }

                function l() {
                    u.call(this), this.el.style.display = "none"
                }

                function f() {
                    this.el.offsetHeight
                }

                function d() {
                    var t, e, n = [];
                    for (t in this.upstream && n.push(this.upstream), this.props)(e = this.props[t]).active && n.push(e.string);
                    n = n.join(","), this.style !== n && (this.style = n, this.el.style[N.transition.dom] = n)
                }

                function p(t, e, r) {
                    var o, a, u, c, s = e !== v,
                        l = {};
                    for (o in t) u = t[o], o in q ? (l.transform || (l.transform = {}), l.transform[o] = u) : (E.test(o) && (o = n(o)), o in Q ? l[o] = u : (c || (c = {}), c[o] = u));
                    for (o in l) {
                        if (u = l[o], !(a = this.props[o])) {
                            if (!s) continue;
                            a = i.call(this, o)
                        }
                        e.call(this, a, u)
                    }
                    r && c && r.call(this, c)
                }

                function v(t) {
                    t.stop()
                }

                function g(t, e) {
                    t.set(e)
                }

                function m(t) {
                    this.$el.css(t)
                }

                function _(t, n) {
                    e[t] = function() {
                        return this.children ? function(t, e) {
                            var n, r = this.children.length;
                            for (n = 0; r > n; n++) t.apply(this.children[n], e);
                            return this
                        }.call(this, n, arguments) : (this.el && n.apply(this, arguments), this)
                    }
                }
                e.init = function(e) {
                    if (this.$el = t(e), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, H.keepInherited && !H.fallback) {
                        var n = Y(this.el, "transition");
                        n && !T.test(n) && (this.upstream = n)
                    }
                    N.backface && H.hideBackface && z(this.el, N.backface.css, "hidden")
                }, _("add", i), _("start", o), _("wait", function(t) {
                    t = c(t, 0), this.active ? this.queue.push({
                        options: t
                    }) : (this.timer = new W({
                        duration: t,
                        context: this,
                        complete: a
                    }), this.active = !0)
                }), _("then", function(t) {
                    return this.active ? (this.queue.push({
                        options: t,
                        args: arguments
                    }), void(this.timer.complete = a)) : s("No active transition timer. Use start() or wait() before then().")
                }), _("next", a), _("stop", u), _("set", function(t) {
                    u.call(this, t), p.call(this, t, g, m)
                }), _("show", function(t) {
                    "string" != typeof t && (t = "block"), this.el.style.display = t
                }), _("hide", l), _("redraw", f), _("destroy", function() {
                    u.call(this), t.removeData(this.el, h), this.$el = this.el = null
                })
            }),
            F = l(j, function(e) {
                function n(e, n) {
                    var r = t.data(e, h) || t.data(e, h, new j.Bare);
                    return r.el || r.init(e), n ? r.start(n) : r
                }
                e.init = function(e, r) {
                    var i = t(e);
                    if (!i.length) return this;
                    if (1 === i.length) return n(i[0], r);
                    var o = [];
                    return i.each(function(t, e) {
                        o.push(n(e, r))
                    }), this.children = o, this
                }
            }),
            k = l(function(t) {
                function e() {
                    var t = this.get();
                    this.update("auto");
                    var e = this.get();
                    return this.update(t), e
                }

                function n(t) {
                    var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);
                    return (e ? o(e[1], e[2], e[3]) : t).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                }
                var i = 500,
                    a = "ease",
                    u = 0;
                t.init = function(t, e, n, r) {
                    this.$el = t, this.el = t[0];
                    var o = e[0];
                    n[2] && (o = n[2]), K[o] && (o = K[o]), this.name = o, this.type = n[1], this.duration = c(e[1], this.duration, i), this.ease = function(t, e, n) {
                        return void 0 !== e && (n = e), t in f ? t : n
                    }(e[2], this.ease, a), this.delay = c(e[3], this.delay, u), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = O.test(this.name), this.unit = r.unit || this.unit || H.defaultUnit, this.angle = r.angle || this.angle || H.defaultAngle, H.fallback || r.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + A + this.duration + "ms" + ("ease" != this.ease ? A + f[this.ease][0] : "") + (this.delay ? A + this.delay + "ms" : ""))
                }, t.set = function(t) {
                    t = this.convert(t, this.type), this.update(t), this.redraw()
                }, t.transition = function(t) {
                    this.active = !0, t = this.convert(t, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == t && (t = e.call(this))), this.nextStyle = t
                }, t.fallback = function(t) {
                    var n = this.el.style[this.name] || this.convert(this.get(), this.type);
                    t = this.convert(t, this.type), this.auto && ("auto" == n && (n = this.convert(this.get(), this.type)), "auto" == t && (t = e.call(this))), this.tween = new V({
                        from: n,
                        to: t,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }, t.get = function() {
                    return Y(this.el, this.name)
                }, t.update = function(t) {
                    z(this.el, this.name, t)
                }, t.stop = function() {
                    (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, z(this.el, this.name, this.get()));
                    var t = this.tween;
                    t && t.context && t.destroy()
                }, t.convert = function(t, e) {
                    if ("auto" == t && this.auto) return t;
                    var i, o = "number" == typeof t,
                        a = "string" == typeof t;
                    switch (e) {
                        case m:
                            if (o) return t;
                            if (a && "" === t.replace(g, "")) return +t;
                            i = "number(unitless)";
                            break;
                        case _:
                            if (a) {
                                if ("" === t && this.original) return this.original;
                                if (e.test(t)) return "#" == t.charAt(0) && 7 == t.length ? t : n(t)
                            }
                            i = "hex or rgb string";
                            break;
                        case y:
                            if (o) return t + this.unit;
                            if (a && e.test(t)) return t;
                            i = "number(px) or string(unit)";
                            break;
                        case I:
                            if (o) return t + this.unit;
                            if (a && e.test(t)) return t;
                            i = "number(px) or string(unit or %)";
                            break;
                        case w:
                            if (o) return t + this.angle;
                            if (a && e.test(t)) return t;
                            i = "number(deg) or string(angle)";
                            break;
                        case b:
                            if (o) return t;
                            if (a && I.test(t)) return t;
                            i = "number(unitless) or string(unit or %)"
                    }
                    return function(t, e) {
                        s("Type warning: Expected: [" + t + "] Got: [" + (0, r.default)(e) + "] " + e)
                    }(i, t), t
                }, t.redraw = function() {
                    this.el.offsetHeight
                }
            }),
            X = l(k, function(t, e) {
                t.init = function() {
                    e.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), _))
                }
            }),
            G = l(k, function(t, e) {
                t.init = function() {
                    e.init.apply(this, arguments), this.animate = this.fallback
                }, t.get = function() {
                    return this.$el[this.name]()
                }, t.update = function(t) {
                    this.$el[this.name](t)
                }
            }),
            U = l(k, function(t, e) {
                function n(t, e) {
                    var n, r, i, o, a;
                    for (n in t) i = (o = q[n])[0], r = o[1] || n, a = this.convert(t[n], i), e.call(this, r, a, i)
                }
                t.init = function() {
                    e.init.apply(this, arguments), this.current || (this.current = {}, q.perspective && H.perspective && (this.current.perspective = H.perspective, z(this.el, this.name, this.style(this.current)), this.redraw()))
                }, t.set = function(t) {
                    n.call(this, t, function(t, e) {
                        this.current[t] = e
                    }), z(this.el, this.name, this.style(this.current)), this.redraw()
                }, t.transition = function(t) {
                    var e = this.values(t);
                    this.tween = new B({
                        current: this.current,
                        values: e,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease
                    });
                    var n, r = {};
                    for (n in this.current) r[n] = n in e ? e[n] : this.current[n];
                    this.active = !0, this.nextStyle = this.style(r)
                }, t.fallback = function(t) {
                    var e = this.values(t);
                    this.tween = new B({
                        current: this.current,
                        values: e,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }, t.update = function() {
                    z(this.el, this.name, this.style(this.current))
                }, t.style = function(t) {
                    var e, n = "";
                    for (e in t) n += e + "(" + t[e] + ") ";
                    return n
                }, t.values = function(t) {
                    var e, r = {};
                    return n.call(this, t, function(t, n, i) {
                        r[t] = n, void 0 === this.current[t] && (e = 0, ~t.indexOf("scale") && (e = 1), this.current[t] = this.convert(e, i))
                    }), r
                }
            }),
            V = l(function(e) {
                function n() {
                    var t, e, r, i = c.length;
                    if (i)
                        for (P(n), e = M(), t = i; t--;)(r = c[t]) && r.render(e)
                }
                var r = {
                    ease: f.ease[1],
                    from: 0,
                    to: 1
                };
                e.init = function(t) {
                    this.duration = t.duration || 0, this.delay = t.delay || 0;
                    var e = t.ease || r.ease;
                    f[e] && (e = f[e][1]), "function" != typeof e && (e = r.ease), this.ease = e, this.update = t.update || a, this.complete = t.complete || a, this.context = t.context || this, this.name = t.name;
                    var n = t.from,
                        i = t.to;
                    void 0 === n && (n = r.from), void 0 === i && (i = r.to), this.unit = t.unit || "", "number" == typeof n && "number" == typeof i ? (this.begin = n, this.change = i - n) : this.format(i, n), this.value = this.begin + this.unit, this.start = M(), !1 !== t.autoplay && this.play()
                }, e.play = function() {
                    var t;
                    this.active || (this.start || (this.start = M()), this.active = !0, t = this, 1 === c.push(t) && P(n))
                }, e.stop = function() {
                    var e, n, r;
                    this.active && (this.active = !1, e = this, (r = t.inArray(e, c)) >= 0 && (n = c.slice(r + 1), c.length = r, n.length && (c = c.concat(n))))
                }, e.render = function(t) {
                    var e, n = t - this.start;
                    if (this.delay) {
                        if (n <= this.delay) return;
                        n -= this.delay
                    }
                    if (n < this.duration) {
                        var r = this.ease(n, 0, 1, this.duration);
                        return e = this.startRGB ? function(t, e, n) {
                            return o(t[0] + n * (e[0] - t[0]), t[1] + n * (e[1] - t[1]), t[2] + n * (e[2] - t[2]))
                        }(this.startRGB, this.endRGB, r) : function(t) {
                            return Math.round(t * s) / s
                        }(this.begin + r * this.change), this.value = e + this.unit, void this.update.call(this.context, this.value)
                    }
                    e = this.endHex || this.begin + this.change, this.value = e + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                }, e.format = function(t, e) {
                    if (e += "", "#" == (t += "").charAt(0)) return this.startRGB = i(e), this.endRGB = i(t), this.endHex = t, this.begin = 0, void(this.change = 1);
                    if (!this.unit) {
                        var n = e.replace(g, "");
                        n !== t.replace(g, "") && u("tween", e, t), this.unit = n
                    }
                    e = parseFloat(e), t = parseFloat(t), this.begin = this.value = e, this.change = t - e
                }, e.destroy = function() {
                    this.stop(), this.context = null, this.ease = this.update = this.complete = a
                };
                var c = [],
                    s = 1e3
            }),
            W = l(V, function(t) {
                t.init = function(t) {
                    this.duration = t.duration || 0, this.complete = t.complete || a, this.context = t.context, this.play()
                }, t.render = function(t) {
                    t - this.start < this.duration || (this.complete.call(this.context), this.destroy())
                }
            }),
            B = l(V, function(t, e) {
                t.init = function(t) {
                    var e, n;
                    for (e in this.context = t.context, this.update = t.update, this.tweens = [], this.current = t.current, t.values) n = t.values[e], this.current[e] !== n && this.tweens.push(new V({
                        name: e,
                        from: this.current[e],
                        to: n,
                        duration: t.duration,
                        delay: t.delay,
                        ease: t.ease,
                        autoplay: !1
                    }));
                    this.play()
                }, t.render = function(t) {
                    var e, n, r = !1;
                    for (e = this.tweens.length; e--;)(n = this.tweens[e]).context && (n.render(t), this.current[n.name] = n.value, r = !0);
                    return r ? void(this.update && this.update.call(this.context)) : this.destroy()
                }, t.destroy = function() {
                    if (e.destroy.call(this), this.tweens) {
                        var t;
                        for (t = this.tweens.length; t--;) this.tweens[t].destroy();
                        this.tweens = null, this.current = null
                    }
                }
            }),
            H = e.config = {
                debug: !1,
                defaultUnit: "px",
                defaultAngle: "deg",
                keepInherited: !1,
                hideBackface: !1,
                perspective: "",
                fallback: !N.transition,
                agentTests: []
            };
        e.fallback = function(t) {
            if (!N.transition) return H.fallback = !0;
            H.agentTests.push("(" + t + ")");
            var e = new RegExp(H.agentTests.join("|"), "i");
            H.fallback = e.test(navigator.userAgent)
        }, e.fallback("6.0.[2-5] Safari"), e.tween = function(t) {
            return new V(t)
        }, e.delay = function(t, e, n) {
            return new W({
                complete: e,
                duration: t,
                context: n
            })
        }, t.fn.tram = function(t) {
            return e.call(null, this, t)
        };
        var z = t.style,
            Y = t.css,
            K = {
                transform: N.transform && N.transform.css
            },
            Q = {
                color: [X, _],
                background: [X, _, "background-color"],
                "outline-color": [X, _],
                "border-color": [X, _],
                "border-top-color": [X, _],
                "border-right-color": [X, _],
                "border-bottom-color": [X, _],
                "border-left-color": [X, _],
                "border-width": [k, y],
                "border-top-width": [k, y],
                "border-right-width": [k, y],
                "border-bottom-width": [k, y],
                "border-left-width": [k, y],
                "border-spacing": [k, y],
                "letter-spacing": [k, y],
                margin: [k, y],
                "margin-top": [k, y],
                "margin-right": [k, y],
                "margin-bottom": [k, y],
                "margin-left": [k, y],
                padding: [k, y],
                "padding-top": [k, y],
                "padding-right": [k, y],
                "padding-bottom": [k, y],
                "padding-left": [k, y],
                "outline-width": [k, y],
                opacity: [k, m],
                top: [k, I],
                right: [k, I],
                bottom: [k, I],
                left: [k, I],
                "font-size": [k, I],
                "text-indent": [k, I],
                "word-spacing": [k, I],
                width: [k, I],
                "min-width": [k, I],
                "max-width": [k, I],
                height: [k, I],
                "min-height": [k, I],
                "max-height": [k, I],
                "line-height": [k, b],
                "scroll-top": [G, m, "scrollTop"],
                "scroll-left": [G, m, "scrollLeft"]
            },
            q = {};
        N.transform && (Q.transform = [U], q = {
            x: [I, "translateX"],
            y: [I, "translateY"],
            rotate: [w],
            rotateX: [w],
            rotateY: [w],
            scale: [m],
            scaleX: [m],
            scaleY: [m],
            skew: [w],
            skewX: [w],
            skewY: [w]
        }), N.transform && N.backface && (q.z = [I, "translateZ"], q.rotateZ = [w], q.scaleZ = [m], q.perspective = [y]);
        var $ = /ms/,
            Z = /s|\./;
        return t.tram = e
    }(window.jQuery)
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(29);
    n.d(e, "createStore", function() {
        return r.default
    });
    var i = n(57);
    n.d(e, "combineReducers", function() {
        return i.default
    });
    var o = n(59);
    n.d(e, "bindActionCreators", function() {
        return o.default
    });
    var a = n(60);
    n.d(e, "applyMiddleware", function() {
        return a.default
    });
    var u = n(31);
    n.d(e, "compose", function() {
        return u.default
    });
    n(58)
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(106),
        i = n(111),
        o = n(113),
        a = "[object Object]",
        u = Function.prototype,
        c = Object.prototype,
        s = u.toString,
        l = c.hasOwnProperty,
        f = s.call(Object);
    e.default = function(t) {
        if (!Object(o.default)(t) || Object(r.default)(t) != a) return !1;
        var e = Object(i.default)(t);
        if (null === e) return !0;
        var n = l.call(e, "constructor") && e.constructor;
        return "function" == typeof n && n instanceof n && s.call(n) == f
    }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(107).default.Symbol;
    e.default = r
}, function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "default", function() {
        return o
    });
    var r = n(29);
    n(55), n(58);

    function i(t, e) {
        var n = e && e.type;
        return "Given action " + (n && '"' + n.toString() + '"' || "an action") + ', reducer "' + t + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
    }

    function o(t) {
        for (var e = Object.keys(t), n = {}, o = 0; o < e.length; o++) {
            var a = e[o];
            0, "function" == typeof t[a] && (n[a] = t[a])
        }
        var u, c = Object.keys(n);
        try {
            ! function(t) {
                Object.keys(t).forEach(function(e) {
                    var n = t[e];
                    if (void 0 === n(void 0, {
                            type: r.ActionTypes.INIT
                        })) throw new Error('Reducer "' + e + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                    if (void 0 === n(void 0, {
                            type: "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".")
                        })) throw new Error('Reducer "' + e + "\" returned undefined when probed with a random type. Don't try to handle " + r.ActionTypes.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.')
                })
            }(n)
        } catch (t) {
            u = t
        }
        return function() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                e = arguments[1];
            if (u) throw u;
            for (var r = !1, o = {}, a = 0; a < c.length; a++) {
                var s = c[a],
                    l = n[s],
                    f = t[s],
                    d = l(f, e);
                if (void 0 === d) {
                    var p = i(s, e);
                    throw new Error(p)
                }
                o[s] = d, r = r || d !== f
            }
            return r ? o : t
        }
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        "undefined" != typeof console && "function" == typeof console.error && console.error(t);
        try {
            throw new Error(t)
        } catch (t) {}
    }
    n.r(e), n.d(e, "default", function() {
        return r
    })
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        return function() {
            return e(t.apply(void 0, arguments))
        }
    }

    function i(t, e) {
        if ("function" == typeof t) return r(t, e);
        if ("object" != typeof t || null === t) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === t ? "null" : typeof t) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
        for (var n = Object.keys(t), i = {}, o = 0; o < n.length; o++) {
            var a = n[o],
                u = t[a];
            "function" == typeof u && (i[a] = r(u, e))
        }
        return i
    }
    n.r(e), n.d(e, "default", function() {
        return i
    })
}, function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "default", function() {
        return o
    });
    var r = n(31),
        i = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        };

    function o() {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return function(t) {
            return function(n, o, a) {
                var u, c = t(n, o, a),
                    s = c.dispatch,
                    l = {
                        getState: c.getState,
                        dispatch: function(t) {
                            return s(t)
                        }
                    };
                return u = e.map(function(t) {
                    return t(l)
                }), s = r.default.apply(void 0, u)(c.dispatch), i({}, c, {
                    dispatch: s
                })
            }
        }
    }
}, function(t, e, n) {
    var r = n(62)(n(189));
    t.exports = r
}, function(t, e, n) {
    var r = n(6),
        i = n(11),
        o = n(24);
    t.exports = function(t) {
        return function(e, n, a) {
            var u = Object(e);
            if (!i(e)) {
                var c = r(n, 3);
                e = o(e), n = function(t) {
                    return c(u[t], t, u)
                }
            }
            var s = t(e, n, a);
            return s > -1 ? u[c ? e[s] : s] : void 0
        }
    }
}, function(t, e, n) {
    var r = n(20),
        i = n(133),
        o = n(134),
        a = n(135),
        u = n(136),
        c = n(137);

    function s(t) {
        var e = this.__data__ = new r(t);
        this.size = e.size
    }
    s.prototype.clear = i, s.prototype.delete = o, s.prototype.get = a, s.prototype.has = u, s.prototype.set = c, t.exports = s
}, function(t, e, n) {
    var r = n(10),
        i = n(5),
        o = "[object AsyncFunction]",
        a = "[object Function]",
        u = "[object GeneratorFunction]",
        c = "[object Proxy]";
    t.exports = function(t) {
        if (!i(t)) return !1;
        var e = r(t);
        return e == a || e == u || e == o || e == c
    }
}, function(t, e, n) {
    (function(e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.exports = n
    }).call(this, n(30))
}, function(t, e) {
    var n = Function.prototype.toString;
    t.exports = function(t) {
        if (null != t) {
            try {
                return n.call(t)
            } catch (t) {}
            try {
                return t + ""
            } catch (t) {}
        }
        return ""
    }
}, function(t, e, n) {
    var r = n(156),
        i = n(8);
    t.exports = function t(e, n, o, a, u) {
        return e === n || (null == e || null == n || !i(e) && !i(n) ? e != e && n != n : r(e, n, o, a, t, u))
    }
}, function(t, e, n) {
    var r = n(157),
        i = n(160),
        o = n(161),
        a = 1,
        u = 2;
    t.exports = function(t, e, n, c, s, l) {
        var f = n & a,
            d = t.length,
            p = e.length;
        if (d != p && !(f && p > d)) return !1;
        var v = l.get(t);
        if (v && l.get(e)) return v == e;
        var h = -1,
            g = !0,
            E = n & u ? new r : void 0;
        for (l.set(t, e), l.set(e, t); ++h < d;) {
            var m = t[h],
                _ = e[h];
            if (c) var y = f ? c(_, m, h, e, t, l) : c(m, _, h, t, e, l);
            if (void 0 !== y) {
                if (y) continue;
                g = !1;
                break
            }
            if (E) {
                if (!i(e, function(t, e) {
                        if (!o(E, e) && (m === t || s(m, t, n, c, l))) return E.push(e)
                    })) {
                    g = !1;
                    break
                }
            } else if (m !== _ && !s(m, _, n, c, l)) {
                g = !1;
                break
            }
        }
        return l.delete(t), l.delete(e), g
    }
}, function(t, e, n) {
    var r = n(36),
        i = n(1);
    t.exports = function(t, e, n) {
        var o = e(t);
        return i(t) ? o : r(o, n(t))
    }
}, function(t, e, n) {
    var r = n(168),
        i = n(71),
        o = Object.prototype.propertyIsEnumerable,
        a = Object.getOwnPropertySymbols,
        u = a ? function(t) {
            return null == t ? [] : (t = Object(t), r(a(t), function(e) {
                return o.call(t, e)
            }))
        } : i;
    t.exports = u
}, function(t, e) {
    t.exports = function() {
        return []
    }
}, function(t, e, n) {
    var r = n(169),
        i = n(25),
        o = n(1),
        a = n(37),
        u = n(38),
        c = n(39),
        s = Object.prototype.hasOwnProperty;
    t.exports = function(t, e) {
        var n = o(t),
            l = !n && i(t),
            f = !n && !l && a(t),
            d = !n && !l && !f && c(t),
            p = n || l || f || d,
            v = p ? r(t.length, String) : [],
            h = v.length;
        for (var g in t) !e && !s.call(t, g) || p && ("length" == g || f && ("offset" == g || "parent" == g) || d && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || u(g, h)) || v.push(g);
        return v
    }
}, function(t, e) {
    t.exports = function(t) {
        return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function() {
                return t.l
            }
        }), Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function() {
                return t.i
            }
        }), t.webpackPolyfill = 1), t
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return function(n) {
            return t(e(n))
        }
    }
}, function(t, e, n) {
    var r = n(7)(n(4), "WeakMap");
    t.exports = r
}, function(t, e, n) {
    var r = n(5);
    t.exports = function(t) {
        return t == t && !r(t)
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return function(n) {
            return null != n && n[t] === e && (void 0 !== e || t in Object(n))
        }
    }
}, function(t, e, n) {
    var r = n(79);
    t.exports = function(t) {
        return null == t ? "" : r(t)
    }
}, function(t, e, n) {
    var r = n(16),
        i = n(80),
        o = n(1),
        a = n(28),
        u = 1 / 0,
        c = r ? r.prototype : void 0,
        s = c ? c.toString : void 0;
    t.exports = function t(e) {
        if ("string" == typeof e) return e;
        if (o(e)) return i(e, t) + "";
        if (a(e)) return s ? s.call(e) : "";
        var n = e + "";
        return "0" == n && 1 / e == -u ? "-0" : n
    }
}, function(t, e) {
    t.exports = function(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r;) i[n] = e(t[n], n, t);
        return i
    }
}, function(t, e) {
    t.exports = function(t) {
        return function(e) {
            return null == e ? void 0 : e[t]
        }
    }
}, function(t, e) {
    t.exports = function(t, e, n, r) {
        for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;)
            if (e(t[o], o, t)) return o;
        return -1
    }
}, function(t, e, n) {
    "use strict";
    var r = n(0);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.inQuad = function(t) {
        return Math.pow(t, 2)
    }, e.outQuad = function(t) {
        return -(Math.pow(t - 1, 2) - 1)
    }, e.inOutQuad = function(t) {
        if ((t /= .5) < 1) return .5 * Math.pow(t, 2);
        return -.5 * ((t -= 2) * t - 2)
    }, e.inCubic = function(t) {
        return Math.pow(t, 3)
    }, e.outCubic = function(t) {
        return Math.pow(t - 1, 3) + 1
    }, e.inOutCubic = function(t) {
        if ((t /= .5) < 1) return .5 * Math.pow(t, 3);
        return .5 * (Math.pow(t - 2, 3) + 2)
    }, e.inQuart = function(t) {
        return Math.pow(t, 4)
    }, e.outQuart = function(t) {
        return -(Math.pow(t - 1, 4) - 1)
    }, e.inOutQuart = function(t) {
        if ((t /= .5) < 1) return .5 * Math.pow(t, 4);
        return -.5 * ((t -= 2) * Math.pow(t, 3) - 2)
    }, e.inQuint = function(t) {
        return Math.pow(t, 5)
    }, e.outQuint = function(t) {
        return Math.pow(t - 1, 5) + 1
    }, e.inOutQuint = function(t) {
        if ((t /= .5) < 1) return .5 * Math.pow(t, 5);
        return .5 * (Math.pow(t - 2, 5) + 2)
    }, e.inSine = function(t) {
        return 1 - Math.cos(t * (Math.PI / 2))
    }, e.outSine = function(t) {
        return Math.sin(t * (Math.PI / 2))
    }, e.inOutSine = function(t) {
        return -.5 * (Math.cos(Math.PI * t) - 1)
    }, e.inExpo = function(t) {
        return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
    }, e.outExpo = function(t) {
        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
    }, e.inOutExpo = function(t) {
        if (0 === t) return 0;
        if (1 === t) return 1;
        if ((t /= .5) < 1) return .5 * Math.pow(2, 10 * (t - 1));
        return .5 * (2 - Math.pow(2, -10 * --t))
    }, e.inCirc = function(t) {
        return -(Math.sqrt(1 - t * t) - 1)
    }, e.outCirc = function(t) {
        return Math.sqrt(1 - Math.pow(t - 1, 2))
    }, e.inOutCirc = function(t) {
        if ((t /= .5) < 1) return -.5 * (Math.sqrt(1 - t * t) - 1);
        return .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
    }, e.outBounce = function(t) {
        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
    }, e.inBack = function(t) {
        return t * t * ((o + 1) * t - o)
    }, e.outBack = function(t) {
        return (t -= 1) * t * ((o + 1) * t + o) + 1
    }, e.inOutBack = function(t) {
        var e = o;
        if ((t /= .5) < 1) return t * t * ((1 + (e *= 1.525)) * t - e) * .5;
        return .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
    }, e.inElastic = function(t) {
        var e = o,
            n = 0,
            r = 1;
        if (0 === t) return 0;
        if (1 === t) return 1;
        n || (n = .3);
        r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
        return -r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)
    }, e.outElastic = function(t) {
        var e = o,
            n = 0,
            r = 1;
        if (0 === t) return 0;
        if (1 === t) return 1;
        n || (n = .3);
        r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
        return r * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1
    }, e.inOutElastic = function(t) {
        var e = o,
            n = 0,
            r = 1;
        if (0 === t) return 0;
        if (2 == (t /= .5)) return 1;
        n || (n = .3 * 1.5);
        r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
        if (t < 1) return r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5;
        return r * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1
    }, e.swingFromTo = function(t) {
        var e = o;
        return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
    }, e.swingFrom = function(t) {
        return t * t * ((o + 1) * t - o)
    }, e.swingTo = function(t) {
        return (t -= 1) * t * ((o + 1) * t + o) + 1
    }, e.bounce = function(t) {
        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
    }, e.bouncePast = function(t) {
        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
    }, e.easeInOut = e.easeOut = e.easeIn = e.ease = void 0;
    var i = r(n(84)),
        o = 1.70158,
        a = (0, i.default)(.25, .1, .25, 1);
    e.ease = a;
    var u = (0, i.default)(.42, 0, 1, 1);
    e.easeIn = u;
    var c = (0, i.default)(0, 0, .58, 1);
    e.easeOut = c;
    var s = (0, i.default)(.42, 0, .58, 1);
    e.easeInOut = s
}, function(t, e) {
    var n = 4,
        r = .001,
        i = 1e-7,
        o = 10,
        a = 11,
        u = 1 / (a - 1),
        c = "function" == typeof Float32Array;

    function s(t, e) {
        return 1 - 3 * e + 3 * t
    }

    function l(t, e) {
        return 3 * e - 6 * t
    }

    function f(t) {
        return 3 * t
    }

    function d(t, e, n) {
        return ((s(e, n) * t + l(e, n)) * t + f(e)) * t
    }

    function p(t, e, n) {
        return 3 * s(e, n) * t * t + 2 * l(e, n) * t + f(e)
    }
    t.exports = function(t, e, s, l) {
        if (!(0 <= t && t <= 1 && 0 <= s && s <= 1)) throw new Error("bezier x values must be in [0, 1] range");
        var f = c ? new Float32Array(a) : new Array(a);
        if (t !== e || s !== l)
            for (var v = 0; v < a; ++v) f[v] = d(v * u, t, s);

        function h(e) {
            for (var c = 0, l = 1, v = a - 1; l !== v && f[l] <= e; ++l) c += u;
            var h = c + (e - f[--l]) / (f[l + 1] - f[l]) * u,
                g = p(h, t, s);
            return g >= r ? function(t, e, r, i) {
                for (var o = 0; o < n; ++o) {
                    var a = p(e, r, i);
                    if (0 === a) return e;
                    e -= (d(e, r, i) - t) / a
                }
                return e
            }(e, h, t, s) : 0 === g ? h : function(t, e, n, r, a) {
                var u, c, s = 0;
                do {
                    (u = d(c = e + (n - e) / 2, r, a) - t) > 0 ? n = c : e = c
                } while (Math.abs(u) > i && ++s < o);
                return c
            }(e, c, c + u, t, s)
        }
        return function(n) {
            return t === e && s === l ? n : 0 === n ? 0 : 1 === n ? 1 : d(h(n), e, l)
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = n(0)(n(86)),
        i = n(0),
        o = n(14);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.optimizeFloat = c, e.createBezierEasing = function(t) {
        return u.default.apply(void 0, (0, r.default)(t))
    }, e.applyEasing = function(t, e, n) {
        if (0 === e) return 0;
        if (1 === e) return 1;
        if (n) return c(e > 0 ? n(e) : e);
        return c(e > 0 && t && a[t] ? a[t](e) : e)
    };
    var a = o(n(83)),
        u = i(n(84));

    function c(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
            r = Math.pow(n, e),
            i = Number(Math.round(t * r) / r);
        return Math.abs(i) > 1e-4 ? i : 0
    }
}, function(t, e, n) {
    var r = n(191),
        i = n(192),
        o = n(193);
    t.exports = function(t) {
        return r(t) || i(t) || o()
    }
}, function(t, e, n) {
    "use strict";
    var r = n(0)(n(18));
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.isPluginType = function(t) {
        return t === o.ActionTypeConsts.PLUGIN_LOTTIE
    }, e.clearPlugin = e.renderPlugin = e.createPluginInstance = e.getPluginDestination = e.getPluginDuration = e.getPluginOrigin = e.getPluginConfig = void 0;
    var i = n(195),
        o = n(3),
        a = n(32),
        u = (0, r.default)({}, o.ActionTypeConsts.PLUGIN_LOTTIE, {
            getConfig: i.getPluginConfig,
            getOrigin: i.getPluginOrigin,
            getDuration: i.getPluginDuration,
            getDestination: i.getPluginDestination,
            createInstance: i.createPluginInstance,
            render: i.renderPlugin,
            clear: i.clearPlugin
        });
    var c = function(t) {
            return function(e) {
                if (!a.IS_BROWSER_ENV) return function() {
                    return null
                };
                var n = u[e];
                if (!n) throw new Error("IX2 no plugin configured for: ".concat(e));
                var r = n[t];
                if (!r) throw new Error("IX2 invalid plugin method: ".concat(t));
                return r
            }
        },
        s = c("getConfig");
    e.getPluginConfig = s;
    var l = c("getOrigin");
    e.getPluginOrigin = l;
    var f = c("getDuration");
    e.getPluginDuration = f;
    var d = c("getDestination");
    e.getPluginDestination = d;
    var p = c("createInstance");
    e.createPluginInstance = p;
    var v = c("render");
    e.renderPlugin = v;
    var h = c("clear");
    e.clearPlugin = h
}, function(t, e, n) {
    var r = n(89),
        i = n(202)(r);
    t.exports = i
}, function(t, e, n) {
    var r = n(200),
        i = n(24);
    t.exports = function(t, e) {
        return t && r(t, e, i)
    }
}, function(t, e, n) {
    "use strict";
    var r = n(206);
    e.__esModule = !0, e.default = void 0;
    var i = r(n(207)).default;
    e.default = i
}, function(t, e, n) {
    "use strict";
    var r = n(0)(n(86)),
        i = n(14),
        o = n(0);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.observeRequests = function(t) {
        D({
            store: t,
            select: function(t) {
                var e = t.ixRequest;
                return e.preview
            },
            onChange: tt
        }), D({
            store: t,
            select: function(t) {
                var e = t.ixRequest;
                return e.playback
            },
            onChange: rt
        }), D({
            store: t,
            select: function(t) {
                var e = t.ixRequest;
                return e.stop
            },
            onChange: it
        }), D({
            store: t,
            select: function(t) {
                var e = t.ixRequest;
                return e.clear
            },
            onChange: ot
        })
    }, e.startEngine = at, e.stopEngine = ut, e.stopAllActionGroups = ht, e.stopActionGroup = gt, e.startActionGroup = Et;
    var a = o(n(19)),
        u = o(n(210)),
        c = o(n(61)),
        s = o(n(26)),
        l = o(n(211)),
        f = o(n(217)),
        d = o(n(229)),
        p = o(n(230)),
        v = o(n(231)),
        h = o(n(234)),
        g = o(n(235)),
        E = o(n(90)),
        m = n(3),
        _ = n(9),
        y = n(49),
        I = i(n(238)),
        w = o(n(239)),
        b = m.IX2EngineConstants,
        T = b.COLON_DELIMITER,
        O = b.BOUNDARY_SELECTOR,
        A = b.HTML_ELEMENT,
        S = b.RENDER_GENERAL,
        x = b.W_MOD_IX,
        R = _.IX2VanillaUtils,
        C = R.getAffectedElements,
        N = R.getElementId,
        L = R.getDestinationValues,
        D = R.observeStore,
        P = R.getInstanceId,
        M = R.renderHTMLElement,
        j = R.clearAllStyles,
        F = R.getMaxDurationItemIndex,
        k = R.getComputedStyle,
        X = R.getInstanceOrigin,
        G = R.reduceListToGroup,
        U = R.shouldNamespaceEventParameter,
        V = R.getNamespacedParameterId,
        W = R.shouldAllowMediaQuery,
        B = R.cleanupHTMLElement,
        H = R.stringifyTarget,
        z = R.mediaQueriesEqual,
        Y = _.IX2VanillaPlugins,
        K = Y.isPluginType,
        Q = Y.createPluginInstance,
        q = Y.getPluginDuration,
        $ = navigator.userAgent,
        Z = $.match(/iPad/i) || $.match(/iPhone/),
        J = 12;

    function tt(t, e) {
        var n = t.rawData,
            r = function() {
                at({
                    store: e,
                    rawData: n,
                    allowEvents: !0
                }), et()
            };
        t.defer ? setTimeout(r, 0) : r()
    }

    function et() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }

    function nt(t) {
        return t && (0, h.default)(t, "_EFFECT")
    }

    function rt(t, e) {
        var n = t.actionTypeId,
            r = t.actionListId,
            i = t.actionItemId,
            o = t.eventId,
            a = t.allowEvents,
            u = t.immediate,
            c = t.testManual,
            s = t.verbose,
            l = void 0 === s || s,
            f = t.rawData;
        if (r && i && f && u) {
            var d = f.actionLists[r];
            d && (f = G({
                actionList: d,
                actionItemId: i,
                rawData: f
            }))
        }
        if (at({
                store: e,
                rawData: f,
                allowEvents: a,
                testManual: c
            }), r && n === m.ActionTypeConsts.GENERAL_START_ACTION || nt(n)) {
            gt({
                store: e,
                actionListId: r
            }), vt({
                store: e,
                actionListId: r,
                eventId: o
            });
            var p = Et({
                store: e,
                eventId: o,
                actionListId: r,
                immediate: u,
                verbose: l
            });
            l && p && e.dispatch((0, y.actionListPlaybackChanged)({
                actionListId: r,
                isPlaying: !u
            }))
        }
    }

    function it(t, e) {
        var n = t.actionListId;
        n ? gt({
            store: e,
            actionListId: n
        }) : ht({
            store: e
        }), ut(e)
    }

    function ot(t, e) {
        ut(e), j({
            store: e,
            elementApi: I
        })
    }

    function at(t) {
        var e, n = t.store,
            i = t.rawData,
            o = t.allowEvents,
            a = t.testManual,
            u = n.getState().ixSession;
        i && n.dispatch((0, y.rawDataImported)(i)), u.active || (n.dispatch((0, y.sessionInitialized)({
            hasBoundaryNodes: Boolean(document.querySelector(O))
        })), o && (function(t) {
            var e = t.getState().ixData.eventTypeMap;
            lt(t), (0, v.default)(e, function(e, n) {
                var i = w.default[n];
                i ? function(t) {
                    var e = t.logic,
                        n = t.store,
                        i = t.events;
                    ! function(t) {
                        if (Z) {
                            var e = {},
                                n = "";
                            for (var r in t) {
                                var i = t[r],
                                    o = i.eventTypeId,
                                    a = i.target,
                                    u = I.getQuerySelector(a);
                                e[u] || o !== m.EventTypeConsts.MOUSE_CLICK && o !== m.EventTypeConsts.MOUSE_SECOND_CLICK || (e[u] = !0, n += u + "{cursor: pointer;touch-action: manipulation;}")
                            }
                            if (n) {
                                var c = document.createElement("style");
                                c.textContent = n, document.body.appendChild(c)
                            }
                        }
                    }(i);
                    var o = e.types,
                        a = e.handler,
                        u = n.getState().ixData,
                        f = u.actionLists,
                        d = ft(i, pt);
                    if ((0, l.default)(d)) {
                        (0, v.default)(d, function(t, e) {
                            var o = i[e],
                                a = o.action,
                                l = o.id,
                                d = o.mediaQueries,
                                p = void 0 === d ? u.mediaQueryKeys : d,
                                v = a.config.actionListId;
                            if (z(p, u.mediaQueryKeys) || n.dispatch((0, y.mediaQueriesDefined)()), a.actionTypeId === m.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
                                var h = Array.isArray(o.config) ? o.config : [o.config];
                                h.forEach(function(e) {
                                    var i = e.continuousParameterGroupId,
                                        o = (0, s.default)(f, "".concat(v, ".continuousParameterGroups"), []),
                                        a = (0, c.default)(o, function(t) {
                                            var e = t.id;
                                            return e === i
                                        }),
                                        u = (e.smoothing || 0) / 100,
                                        d = (e.restingState || 0) / 100;
                                    a && t.forEach(function(t, i) {
                                        var o = l + T + i;
                                        ! function(t) {
                                            var e = t.store,
                                                n = t.eventStateKey,
                                                i = t.eventTarget,
                                                o = t.eventId,
                                                a = t.eventConfig,
                                                u = t.actionListId,
                                                c = t.parameterGroup,
                                                l = t.smoothing,
                                                f = t.restingValue,
                                                d = e.getState(),
                                                p = d.ixData,
                                                v = d.ixSession,
                                                h = p.events[o],
                                                g = h.eventTypeId,
                                                E = {},
                                                m = {},
                                                _ = [],
                                                y = c.continuousActionGroups,
                                                w = c.id;
                                            U(g, a) && (w = V(n, w));
                                            var b = v.hasBoundaryNodes && i ? I.getClosestElement(i, O) : null;
                                            y.forEach(function(t) {
                                                var e = t.keyframe,
                                                    n = t.actionItems;
                                                n.forEach(function(t) {
                                                    var n = t.actionTypeId,
                                                        o = t.config.target;
                                                    if (o) {
                                                        var a = o.boundaryMode ? b : null,
                                                            u = H(o) + T + n;
                                                        if (m[u] = function() {
                                                                var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                                                    n = arguments.length > 1 ? arguments[1] : void 0,
                                                                    i = arguments.length > 2 ? arguments[2] : void 0,
                                                                    o = (0, r.default)(e);
                                                                return o.some(function(e, r) {
                                                                    return e.keyframe === n && (t = r, !0)
                                                                }), null == t && (t = o.length, o.push({
                                                                    keyframe: n,
                                                                    actionItems: []
                                                                })), o[t].actionItems.push(i), o
                                                            }(m[u], e, t), !E[u]) {
                                                            E[u] = !0;
                                                            var c = t.config;
                                                            C({
                                                                config: c,
                                                                event: h,
                                                                eventTarget: i,
                                                                elementRoot: a,
                                                                elementApi: I
                                                            }).forEach(function(t) {
                                                                _.push({
                                                                    element: t,
                                                                    key: u
                                                                })
                                                            })
                                                        }
                                                    }
                                                })
                                            }), _.forEach(function(t) {
                                                var n = t.element,
                                                    r = t.key,
                                                    i = m[r],
                                                    a = (0, s.default)(i, "[0].actionItems[0]", {}),
                                                    c = a.actionTypeId,
                                                    d = K(c) ? Q(c)(n, a) : null,
                                                    p = L({
                                                        element: n,
                                                        actionItem: a,
                                                        elementApi: I
                                                    }, d);
                                                mt({
                                                    store: e,
                                                    element: n,
                                                    eventId: o,
                                                    actionListId: u,
                                                    actionItem: a,
                                                    destination: p,
                                                    continuous: !0,
                                                    parameterId: w,
                                                    actionGroups: i,
                                                    smoothing: l,
                                                    restingValue: f,
                                                    pluginInstance: d
                                                })
                                            })
                                        }({
                                            store: n,
                                            eventStateKey: o,
                                            eventTarget: t,
                                            eventId: l,
                                            eventConfig: e,
                                            actionListId: v,
                                            parameterGroup: a,
                                            smoothing: u,
                                            restingValue: d
                                        })
                                    })
                                })
                            }(a.actionTypeId === m.ActionTypeConsts.GENERAL_START_ACTION || nt(a.actionTypeId)) && vt({
                                store: n,
                                actionListId: v,
                                eventId: l
                            })
                        });
                        var p = function(t) {
                                var e = n.getState(),
                                    r = e.ixSession;
                                dt(d, function(e, o, c) {
                                    var s = i[o],
                                        l = r.eventState[c],
                                        f = s.action,
                                        d = s.mediaQueries,
                                        p = void 0 === d ? u.mediaQueryKeys : d;
                                    if (W(p, r.mediaQueryKey)) {
                                        var v = function() {
                                            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                i = a({
                                                    store: n,
                                                    element: e,
                                                    event: s,
                                                    eventConfig: r,
                                                    nativeEvent: t,
                                                    eventStateKey: c
                                                }, l);
                                            (0, E.default)(i, l) || n.dispatch((0, y.eventStateChanged)(c, i))
                                        };
                                        if (f.actionTypeId === m.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
                                            var h = Array.isArray(s.config) ? s.config : [s.config];
                                            h.forEach(v)
                                        } else v()
                                    }
                                })
                            },
                            h = (0, g.default)(p, J),
                            _ = function(t) {
                                var e = t.target,
                                    r = void 0 === e ? document : e,
                                    i = t.types,
                                    o = t.throttle;
                                i.split(" ").filter(Boolean).forEach(function(t) {
                                    var e = o ? h : p;
                                    r.addEventListener(t, e), n.dispatch((0, y.eventListenerAdded)(r, [t, e]))
                                })
                            };
                        Array.isArray(o) ? o.forEach(_) : "string" == typeof o && _(e)
                    }
                }({
                    logic: i,
                    store: t,
                    events: e
                }) : console.warn("IX2 event type not configured: ".concat(n))
            }), t.getState().ixSession.eventListeners.length && function(t) {
                var e = function() {
                    lt(t)
                };
                st.forEach(function(n) {
                    window.addEventListener(n, e), t.dispatch((0, y.eventListenerAdded)(window, [n, e]))
                }), e()
            }(t)
        }(n), -1 === (e = document.documentElement).className.indexOf(x) && (e.className += " ".concat(x)), n.getState().ixSession.hasDefinedMediaQueries && function(t) {
            D({
                store: t,
                select: function(t) {
                    return t.ixSession.mediaQueryKey
                },
                onChange: function() {
                    ut(t), j({
                        store: t,
                        elementApi: I
                    }), at({
                        store: t,
                        allowEvents: !0
                    }), et()
                }
            })
        }(n)), n.dispatch((0, y.sessionStarted)()), function(t, e) {
            ! function n(r) {
                var i = t.getState(),
                    o = i.ixSession,
                    a = i.ixParameters;
                o.active && (t.dispatch((0, y.animationFrameChanged)(r, a)), e ? function(t, e) {
                    var n = D({
                        store: t,
                        select: function(t) {
                            return t.ixSession.tick
                        },
                        onChange: function(t) {
                            e(t), n()
                        }
                    })
                }(t, n) : requestAnimationFrame(n))
            }(window.performance.now())
        }(n, a))
    }

    function ut(t) {
        var e = t.getState().ixSession;
        e.active && (e.eventListeners.forEach(ct), t.dispatch((0, y.sessionStopped)()))
    }

    function ct(t) {
        var e = t.target,
            n = t.listenerParams;
        e.removeEventListener.apply(e, n)
    }
    var st = ["resize", "orientationchange"];

    function lt(t) {
        var e = t.getState(),
            n = e.ixSession,
            r = e.ixData,
            i = window.innerWidth;
        if (i !== n.viewportWidth) {
            var o = r.mediaQueries;
            t.dispatch((0, y.viewportWidthChanged)({
                width: i,
                mediaQueries: o
            }))
        }
    }
    var ft = function(t, e) {
            return (0, f.default)((0, p.default)(t, e), d.default)
        },
        dt = function(t, e) {
            (0, v.default)(t, function(t, n) {
                t.forEach(function(t, r) {
                    e(t, n, n + T + r)
                })
            })
        },
        pt = function(t) {
            var e = {
                target: t.target
            };
            return C({
                config: e,
                elementApi: I
            })
        };

    function vt(t) {
        var e = t.store,
            n = t.actionListId,
            r = t.eventId,
            i = e.getState(),
            o = i.ixData,
            a = i.ixSession,
            u = o.actionLists,
            c = o.events[r],
            l = u[n];
        if (l && l.useFirstGroupAsInitialState) {
            var f = (0, s.default)(l, "actionItemGroups[0].actionItems", []),
                d = (0, s.default)(c, "mediaQueries", o.mediaQueryKeys);
            if (!W(d, a.mediaQueryKey)) return;
            f.forEach(function(t) {
                var i = t.config,
                    o = t.actionTypeId,
                    a = C({
                        config: i,
                        event: c,
                        elementApi: I
                    }),
                    u = K(o);
                a.forEach(function(i) {
                    var a = u ? Q(o)(i, t) : null;
                    mt({
                        destination: L({
                            element: i,
                            actionItem: t,
                            elementApi: I
                        }, a),
                        immediate: !0,
                        store: e,
                        element: i,
                        eventId: r,
                        actionItem: t,
                        actionListId: n,
                        pluginInstance: a
                    })
                })
            })
        }
    }

    function ht(t) {
        var e = t.store,
            n = e.getState().ixInstances;
        (0, v.default)(n, function(t) {
            if (!t.continuous) {
                var n = t.actionListId,
                    r = t.verbose;
                _t(t, e), r && e.dispatch((0, y.actionListPlaybackChanged)({
                    actionListId: n,
                    isPlaying: !1
                }))
            }
        })
    }

    function gt(t) {
        var e = t.store,
            n = t.eventId,
            r = t.eventTarget,
            i = t.eventStateKey,
            o = t.actionListId,
            a = e.getState(),
            u = a.ixInstances,
            c = a.ixSession.hasBoundaryNodes && r ? I.getClosestElement(r, O) : null;
        (0, v.default)(u, function(t) {
            var r = (0, s.default)(t, "actionItem.config.target.boundaryMode"),
                a = !i || t.eventStateKey === i;
            if (t.actionListId === o && t.eventId === n && a) {
                if (c && r && !I.elementContains(c, t.element)) return;
                _t(t, e), t.verbose && e.dispatch((0, y.actionListPlaybackChanged)({
                    actionListId: o,
                    isPlaying: !1
                }))
            }
        })
    }

    function Et(t) {
        var e = t.store,
            n = t.eventId,
            r = t.eventTarget,
            i = t.eventStateKey,
            o = t.actionListId,
            a = t.groupIndex,
            u = void 0 === a ? 0 : a,
            c = t.immediate,
            l = t.verbose,
            f = e.getState(),
            d = f.ixData,
            p = f.ixSession,
            v = d.events[n] || {},
            h = v.mediaQueries,
            g = void 0 === h ? d.mediaQueryKeys : h,
            E = (0, s.default)(d, "actionLists.".concat(o), {}),
            m = E.actionItemGroups,
            _ = E.useFirstGroupAsInitialState;
        if (!m || !m.length) return !1;
        u >= m.length && (0, s.default)(v, "config.loop") && (u = 0), 0 === u && _ && u++;
        var y = (0 === u || 1 === u && _) && nt(v.action && v.action.actionTypeId) ? v.config.delay : void 0,
            w = (0, s.default)(m, [u, "actionItems"], []);
        if (!w.length) return !1;
        if (!W(g, p.mediaQueryKey)) return !1;
        var b = p.hasBoundaryNodes && r ? I.getClosestElement(r, O) : null,
            T = F(w),
            A = !1;
        return w.forEach(function(t, a) {
            var s = t.config,
                f = t.actionTypeId,
                d = K(f),
                p = s.target;
            if (p) {
                var h = p.boundaryMode ? b : null;
                C({
                    config: s,
                    event: v,
                    eventTarget: r,
                    elementRoot: h,
                    elementApi: I
                }).forEach(function(s, p) {
                    var v = d ? Q(f)(s, t) : null,
                        h = d ? q(f)(s, t) : null;
                    A = !0;
                    var g = T === a && 0 === p,
                        E = k({
                            element: s,
                            actionItem: t
                        }),
                        m = L({
                            element: s,
                            actionItem: t,
                            elementApi: I
                        }, v);
                    mt({
                        store: e,
                        element: s,
                        actionItem: t,
                        eventId: n,
                        eventTarget: r,
                        eventStateKey: i,
                        actionListId: o,
                        groupIndex: u,
                        isCarrier: g,
                        computedStyle: E,
                        destination: m,
                        immediate: c,
                        verbose: l,
                        pluginInstance: v,
                        pluginDuration: h,
                        instanceDelay: y
                    })
                })
            }
        }), A
    }

    function mt(t) {
        var e = t.store,
            n = t.computedStyle,
            r = (0, u.default)(t, ["store", "computedStyle"]),
            i = !r.continuous,
            o = r.element,
            c = r.actionItem,
            s = r.immediate,
            l = r.pluginInstance,
            f = P(),
            d = e.getState(),
            p = d.ixElements,
            v = d.ixSession,
            h = N(p, o),
            g = (p[h] || {}).refState,
            E = I.getRefType(o),
            m = X(o, g, n, c, I, l);
        e.dispatch((0, y.instanceAdded)((0, a.default)({
            instanceId: f,
            elementId: h,
            origin: m,
            refType: E
        }, r))), yt(document.body, "ix2-animation-started", f), s ? function(t, e) {
            var n = t.getState().ixParameters;
            t.dispatch((0, y.instanceStarted)(e, 0)), t.dispatch((0, y.animationFrameChanged)(performance.now(), n)), It(t.getState().ixInstances[e], t)
        }(e, f) : (D({
            store: e,
            select: function(t) {
                return t.ixInstances[f]
            },
            onChange: It
        }), i && e.dispatch((0, y.instanceStarted)(f, v.tick)))
    }

    function _t(t, e) {
        yt(document.body, "ix2-animation-stopping", {
            instanceId: t.id,
            state: e.getState()
        });
        var n = t.elementId,
            r = t.actionItem,
            i = e.getState().ixElements[n] || {},
            o = i.ref;
        i.refType === A && B(o, r, I), e.dispatch((0, y.instanceRemoved)(t.id))
    }

    function yt(t, e, n) {
        var r = document.createEvent("CustomEvent");
        r.initCustomEvent(e, !0, !0, n), t.dispatchEvent(r)
    }

    function It(t, e) {
        var n = t.active,
            r = t.continuous,
            i = t.complete,
            o = t.elementId,
            a = t.actionItem,
            u = t.actionTypeId,
            c = t.renderType,
            s = t.current,
            l = t.groupIndex,
            f = t.eventId,
            d = t.eventTarget,
            p = t.eventStateKey,
            v = t.actionListId,
            h = t.isCarrier,
            g = t.styleProp,
            E = t.verbose,
            m = t.pluginInstance,
            _ = e.getState(),
            w = _.ixData,
            b = _.ixSession,
            T = (w.events[f] || {}).mediaQueries,
            O = void 0 === T ? w.mediaQueryKeys : T;
        if (W(O, b.mediaQueryKey) && (r || n || i)) {
            if (s || c === S && i) {
                e.dispatch((0, y.elementStateChanged)(o, u, s, a));
                var x = e.getState().ixElements[o] || {},
                    R = x.ref,
                    C = x.refType,
                    N = x.refState,
                    L = N && N[u];
                switch (C) {
                    case A:
                        M(R, N, L, f, a, g, I, c, m)
                }
            }
            if (i) {
                if (h) {
                    var D = Et({
                        store: e,
                        eventId: f,
                        eventTarget: d,
                        eventStateKey: p,
                        actionListId: v,
                        groupIndex: l + 1,
                        verbose: E
                    });
                    E && !D && e.dispatch((0, y.actionListPlaybackChanged)({
                        actionListId: v,
                        isPlaying: !1
                    }))
                }
                _t(t, e)
            }
        }
    }
}, function(t, e, n) {
    var r = n(93);
    t.exports = function(t, e, n) {
        "__proto__" == e && r ? r(t, e, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0
        }) : t[e] = n
    }
}, function(t, e, n) {
    var r = n(7),
        i = function() {
            try {
                var t = r(Object, "defineProperty");
                return t({}, "", {}), t
            } catch (t) {}
        }();
    t.exports = i
}, function(t, e) {
    t.exports = function(t, e, n) {
        return t == t && (void 0 !== n && (t = t <= n ? t : n), void 0 !== e && (t = t >= e ? t : e)), t
    }
}, function(t, e, n) {
    var r = n(5),
        i = Object.create,
        o = function() {
            function t() {}
            return function(e) {
                if (!r(e)) return {};
                if (i) return i(e);
                t.prototype = e;
                var n = new t;
                return t.prototype = void 0, n
            }
        }();
    t.exports = o
}, function(t, e, n) {
    var r = n(252),
        i = n(253),
        o = r ? function(t) {
            return r.get(t)
        } : i;
    t.exports = o
}, function(t, e, n) {
    var r = n(254),
        i = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        for (var e = t.name + "", n = r[e], o = i.call(r, e) ? n.length : 0; o--;) {
            var a = n[o],
                u = a.func;
            if (null == u || u == t) return a.name
        }
        return e
    }
}, function(t, e, n) {
    n(99), n(100), n(102), n(13), n(104), n(260), n(261), n(262), n(263), n(264), n(269), n(270), n(271), t.exports = n(272)
}, function(t, e, n) {
    "use strict";
    var r = n(0)(n(12));
    ! function() {
        if ("undefined" != typeof window) {
            var t = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
                e = !!t && parseInt(t[1], 10) >= 16;
            if (!("objectFit" in document.documentElement.style != !1) || e) {
                var n = function(t) {
                        var e = t.parentNode;
                        ! function(t) {
                            var e = window.getComputedStyle(t, null),
                                n = e.getPropertyValue("position"),
                                r = e.getPropertyValue("overflow"),
                                i = e.getPropertyValue("display");
                            n && "static" !== n || (t.style.position = "relative"), "hidden" !== r && (t.style.overflow = "hidden"), i && "inline" !== i || (t.style.display = "block"), 0 === t.clientHeight && (t.style.height = "100%"), -1 === t.className.indexOf("object-fit-polyfill") && (t.className += " object-fit-polyfill")
                        }(e),
                        function(t) {
                            var e = window.getComputedStyle(t, null),
                                n = {
                                    "max-width": "none",
                                    "max-height": "none",
                                    "min-width": "0px",
                                    "min-height": "0px",
                                    top: "auto",
                                    right: "auto",
                                    bottom: "auto",
                                    left: "auto",
                                    "margin-top": "0px",
                                    "margin-right": "0px",
                                    "margin-bottom": "0px",
                                    "margin-left": "0px"
                                };
                            for (var r in n) e.getPropertyValue(r) !== n[r] && (t.style[r] = n[r])
                        }(t), t.style.position = "absolute", t.style.height = "100%", t.style.width = "auto", t.clientWidth > e.clientWidth ? (t.style.top = "0", t.style.marginTop = "0", t.style.left = "50%", t.style.marginLeft = t.clientWidth / -2 + "px") : (t.style.width = "100%", t.style.height = "auto", t.style.left = "0", t.style.marginLeft = "0", t.style.top = "50%", t.style.marginTop = t.clientHeight / -2 + "px")
                    },
                    i = function(t) {
                        if (void 0 === t || t instanceof Event) t = document.querySelectorAll("[data-object-fit]");
                        else if (t && t.nodeName) t = [t];
                        else {
                            if ("object" !== (0, r.default)(t) || !t.length || !t[0].nodeName) return !1;
                            t = t
                        }
                        for (var i = 0; i < t.length; i++)
                            if (t[i].nodeName) {
                                var o = t[i].nodeName.toLowerCase();
                                if ("img" === o) {
                                    if (e) continue;
                                    t[i].complete ? n(t[i]) : t[i].addEventListener("load", function() {
                                        n(this)
                                    })
                                } else "video" === o ? t[i].readyState > 0 ? n(t[i]) : t[i].addEventListener("loadedmetadata", function() {
                                    n(this)
                                }) : n(t[i])
                            } return !0
                    };
                "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", i) : i(), window.addEventListener("resize", i), window.objectFitPolyfill = i
            } else window.objectFitPolyfill = function() {
                return !1
            }
        }
    }()
}, function(t, e, n) {
    "use strict";
    var r = n(2);
    r.define("brand", t.exports = function(t) {
        var e, n = {},
            i = document,
            o = t("html"),
            a = t("body"),
            u = ".w-webflow-badge",
            c = window.location,
            s = /PhantomJS/i.test(navigator.userAgent),
            l = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";

        function f() {
            var n = i.fullScreen || i.mozFullScreen || i.webkitIsFullScreen || i.msFullscreenElement || Boolean(i.webkitFullscreenElement);
            t(e).attr("style", n ? "display: none !important;" : "")
        }

        function d() {
            var t = a.children(u),
                n = t.length && t.get(0) === e,
                i = r.env("editor");
            n ? i && t.remove() : (t.length && t.remove(), i || a.append(e))
        }
        return n.ready = function() {
            var n, r, a, u = o.attr("data-wf-status"),
                p = o.attr("data-wf-domain") || "";
            /\.webflow\.io$/i.test(p) && c.hostname !== p && (u = !0), u && !s && (e = e || (n = t('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"), r = t("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg").attr("alt", "").css({
                marginRight: "8px",
                width: "16px"
            }), a = t("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg").attr("alt", "Made in Webflow"), n.append(r, a), n[0]), d(), setTimeout(d, 500), t(i).off(l, f).on(l, f))
        }, n
    })
}, function(t, e, n) {
    "use strict";
    var r = window.$,
        i = n(53) && r.tram;
    /*!
     * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
     * _.each
     * _.map
     * _.find
     * _.filter
     * _.any
     * _.contains
     * _.delay
     * _.defer
     * _.throttle (webflow)
     * _.debounce
     * _.keys
     * _.has
     * _.now
     *
     * http://underscorejs.org
     * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     * Underscore may be freely distributed under the MIT license.
     * @license MIT
     */
    t.exports = function() {
        var t = {
                VERSION: "1.6.0-Webflow"
            },
            e = {},
            n = Array.prototype,
            r = Object.prototype,
            o = Function.prototype,
            a = (n.push, n.slice),
            u = (n.concat, r.toString, r.hasOwnProperty),
            c = n.forEach,
            s = n.map,
            l = (n.reduce, n.reduceRight, n.filter),
            f = (n.every, n.some),
            d = n.indexOf,
            p = (n.lastIndexOf, Array.isArray, Object.keys),
            v = (o.bind, t.each = t.forEach = function(n, r, i) {
                if (null == n) return n;
                if (c && n.forEach === c) n.forEach(r, i);
                else if (n.length === +n.length) {
                    for (var o = 0, a = n.length; o < a; o++)
                        if (r.call(i, n[o], o, n) === e) return
                } else {
                    var u = t.keys(n);
                    for (o = 0, a = u.length; o < a; o++)
                        if (r.call(i, n[u[o]], u[o], n) === e) return
                }
                return n
            });
        t.map = t.collect = function(t, e, n) {
            var r = [];
            return null == t ? r : s && t.map === s ? t.map(e, n) : (v(t, function(t, i, o) {
                r.push(e.call(n, t, i, o))
            }), r)
        }, t.find = t.detect = function(t, e, n) {
            var r;
            return h(t, function(t, i, o) {
                if (e.call(n, t, i, o)) return r = t, !0
            }), r
        }, t.filter = t.select = function(t, e, n) {
            var r = [];
            return null == t ? r : l && t.filter === l ? t.filter(e, n) : (v(t, function(t, i, o) {
                e.call(n, t, i, o) && r.push(t)
            }), r)
        };
        var h = t.some = t.any = function(n, r, i) {
            r || (r = t.identity);
            var o = !1;
            return null == n ? o : f && n.some === f ? n.some(r, i) : (v(n, function(t, n, a) {
                if (o || (o = r.call(i, t, n, a))) return e
            }), !!o)
        };
        t.contains = t.include = function(t, e) {
            return null != t && (d && t.indexOf === d ? -1 != t.indexOf(e) : h(t, function(t) {
                return t === e
            }))
        }, t.delay = function(t, e) {
            var n = a.call(arguments, 2);
            return setTimeout(function() {
                return t.apply(null, n)
            }, e)
        }, t.defer = function(e) {
            return t.delay.apply(t, [e, 1].concat(a.call(arguments, 1)))
        }, t.throttle = function(t) {
            var e, n, r;
            return function() {
                e || (e = !0, n = arguments, r = this, i.frame(function() {
                    e = !1, t.apply(r, n)
                }))
            }
        }, t.debounce = function(e, n, r) {
            var i, o, a, u, c, s = function s() {
                var l = t.now() - u;
                l < n ? i = setTimeout(s, n - l) : (i = null, r || (c = e.apply(a, o), a = o = null))
            };
            return function() {
                a = this, o = arguments, u = t.now();
                var l = r && !i;
                return i || (i = setTimeout(s, n)), l && (c = e.apply(a, o), a = o = null), c
            }
        }, t.defaults = function(e) {
            if (!t.isObject(e)) return e;
            for (var n = 1, r = arguments.length; n < r; n++) {
                var i = arguments[n];
                for (var o in i) void 0 === e[o] && (e[o] = i[o])
            }
            return e
        }, t.keys = function(e) {
            if (!t.isObject(e)) return [];
            if (p) return p(e);
            var n = [];
            for (var r in e) t.has(e, r) && n.push(r);
            return n
        }, t.has = function(t, e) {
            return u.call(t, e)
        }, t.isObject = function(t) {
            return t === Object(t)
        }, t.now = Date.now || function() {
            return (new Date).getTime()
        }, t.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var g = /(.)^/,
            E = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            m = /\\|'|\r|\n|\u2028|\u2029/g,
            _ = function(t) {
                return "\\" + E[t]
            };
        return t.template = function(e, n, r) {
            !n && r && (n = r), n = t.defaults({}, n, t.templateSettings);
            var i = RegExp([(n.escape || g).source, (n.interpolate || g).source, (n.evaluate || g).source].join("|") + "|$", "g"),
                o = 0,
                a = "__p+='";
            e.replace(i, function(t, n, r, i, u) {
                return a += e.slice(o, u).replace(m, _), o = u + t.length, n ? a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : i && (a += "';\n" + i + "\n__p+='"), t
            }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
            try {
                var u = new Function(n.variable || "obj", "_", a)
            } catch (t) {
                throw t.source = a, t
            }
            var c = function(e) {
                    return u.call(this, e, t)
                },
                s = n.variable || "obj";
            return c.source = "function(" + s + "){\n" + a + "}", c
        }, t
    }()
}, function(t, e, n) {
    "use strict";
    var r = n(2);
    r.define("edit", t.exports = function(t, e, n) {
        if (n = n || {}, (r.env("test") || r.env("frame")) && !n.fixture && ! function() {
                try {
                    return window.top.__Cypress__
                } catch (t) {
                    return !1
                }
            }()) return {
            exit: 1
        };
        var i, o = t(window),
            a = t(document.documentElement),
            u = document.location,
            c = "hashchange",
            s = n.load || function() {
                i = !0, window.WebflowEditor = !0, o.off(c, f),
                    function(t) {
                        var e = window.document.createElement("iframe");
                        e.src = "https://webflow.com/site/third-party-cookie-check.html", e.style.display = "none", e.sandbox = "allow-scripts allow-same-origin";
                        var n = function n(r) {
                            "WF_third_party_cookies_unsupported" === r.data ? (E(e, n), t(!1)) : "WF_third_party_cookies_supported" === r.data && (E(e, n), t(!0))
                        };
                        e.onerror = function() {
                            E(e, n), t(!1)
                        }, window.addEventListener("message", n, !1), window.document.body.appendChild(e)
                    }(function(e) {
                        t.ajax({
                            url: g("https://editor-api.webflow.com/api/editor/view"),
                            data: {
                                siteId: a.attr("data-wf-site")
                            },
                            xhrFields: {
                                withCredentials: !0
                            },
                            dataType: "json",
                            crossDomain: !0,
                            success: d(e)
                        })
                    })
            },
            l = !1;
        try {
            l = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
        } catch (t) {}

        function f() {
            i || /\?edit/.test(u.hash) && s()
        }

        function d(t) {
            return function(e) {
                e ? (e.thirdPartyCookiesSupported = t, p(h(e.bugReporterScriptPath), function() {
                    p(h(e.scriptPath), function() {
                        window.WebflowEditor(e)
                    })
                })) : console.error("Could not load editor data")
            }
        }

        function p(e, n) {
            t.ajax({
                type: "GET",
                url: e,
                dataType: "script",
                cache: !0
            }).then(n, v)
        }

        function v(t, e, n) {
            throw console.error("Could not load editor script: " + e), n
        }

        function h(t) {
            return t.indexOf("//") >= 0 ? t : g("https://editor-api.webflow.com" + t)
        }

        function g(t) {
            return t.replace(/([^:])\/\//g, "$1/")
        }

        function E(t, e) {
            window.removeEventListener("message", e, !1), t.remove()
        }
        return l ? s() : u.search ? (/[?&](edit)(?:[=&?]|$)/.test(u.search) || /\?edit$/.test(u.href)) && s() : o.on(c, f).triggerHandler(c), {}
    })
}, function(t, e, n) {
    "use strict";
    var r = window.jQuery,
        i = {},
        o = [],
        a = {
            reset: function(t, e) {
                e.__wf_intro = null
            },
            intro: function(t, e) {
                e.__wf_intro || (e.__wf_intro = !0, r(e).triggerHandler(i.types.INTRO))
            },
            outro: function(t, e) {
                e.__wf_intro && (e.__wf_intro = null, r(e).triggerHandler(i.types.OUTRO))
            }
        };
    i.triggers = {}, i.types = {
        INTRO: "w-ix-intro.w-ix",
        OUTRO: "w-ix-outro.w-ix"
    }, i.init = function() {
        for (var t = o.length, e = 0; e < t; e++) {
            var n = o[e];
            n[0](0, n[1])
        }
        o = [], r.extend(i.triggers, a)
    }, i.async = function() {
        for (var t in a) {
            var e = a[t];
            a.hasOwnProperty(t) && (i.triggers[t] = function(t, n) {
                o.push([e, n])
            })
        }
    }, i.async(), t.exports = i
}, function(t, e, n) {
    "use strict";
    var r = n(2),
        i = n(105);
    i.setEnv(r.env), r.define("ix2", t.exports = function() {
        return i
    })
}, function(t, e, n) {
    "use strict";
    var r = n(14),
        i = n(0);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.setEnv = function(t) {
        t() && (0, u.observeRequests)(s)
    }, e.init = function(t) {
        l(), (0, u.startEngine)({
            store: s,
            rawData: t,
            allowEvents: !0
        })
    }, e.destroy = l, e.actions = e.store = void 0;
    var o = n(54),
        a = i(n(117)),
        u = n(91),
        c = r(n(49));
    e.actions = c;
    var s = (0, o.createStore)(a.default);

    function l() {
        (0, u.stopEngine)(s)
    }
    e.store = s
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(56),
        i = n(109),
        o = n(110),
        a = "[object Null]",
        u = "[object Undefined]",
        c = r.default ? r.default.toStringTag : void 0;
    e.default = function(t) {
        return null == t ? void 0 === t ? u : a : c && c in Object(t) ? Object(i.default)(t) : Object(o.default)(t)
    }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(108),
        i = "object" == typeof self && self && self.Object === Object && self,
        o = r.default || i || Function("return this")();
    e.default = o
}, function(t, e, n) {
    "use strict";
    n.r(e),
        function(t) {
            var n = "object" == typeof t && t && t.Object === Object && t;
            e.default = n
        }.call(this, n(30))
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(56),
        i = Object.prototype,
        o = i.hasOwnProperty,
        a = i.toString,
        u = r.default ? r.default.toStringTag : void 0;
    e.default = function(t) {
        var e = o.call(t, u),
            n = t[u];
        try {
            t[u] = void 0;
            var r = !0
        } catch (t) {}
        var i = a.call(t);
        return r && (e ? t[u] = n : delete t[u]), i
    }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = Object.prototype.toString;
    e.default = function(t) {
        return r.call(t)
    }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(112),
        i = Object(r.default)(Object.getPrototypeOf, Object);
    e.default = i
}, function(t, e, n) {
    "use strict";
    n.r(e), e.default = function(t, e) {
        return function(n) {
            return t(e(n))
        }
    }
}, function(t, e, n) {
    "use strict";
    n.r(e), e.default = function(t) {
        return null != t && "object" == typeof t
    }
}, function(t, e, n) {
    "use strict";
    n.r(e),
        function(t, r) {
            var i, o = n(116);
            i = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : r;
            var a = Object(o.default)(i);
            e.default = a
        }.call(this, n(30), n(115)(t))
}, function(t, e) {
    t.exports = function(t) {
        if (!t.webpackPolyfill) {
            var e = Object.create(t);
            e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function() {
                    return e.l
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function() {
                    return e.i
                }
            }), Object.defineProperty(e, "exports", {
                enumerable: !0
            }), e.webpackPolyfill = 1
        }
        return e
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        var e, n = t.Symbol;
        return "function" == typeof n ? n.observable ? e = n.observable : (e = n("observable"), n.observable = e) : e = "@@observable", e
    }
    n.r(e), n.d(e, "default", function() {
        return r
    })
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var r = n(54),
        i = n(118),
        o = n(124),
        a = n(125),
        u = n(9),
        c = n(208),
        s = n(209),
        l = u.IX2ElementsReducer.ixElements,
        f = (0, r.combineReducers)({
            ixData: i.ixData,
            ixRequest: o.ixRequest,
            ixSession: a.ixSession,
            ixElements: l,
            ixInstances: c.ixInstances,
            ixParameters: s.ixParameters
        });
    e.default = f
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ixData = void 0;
    var r = n(3).IX2EngineActionTypes.IX2_RAW_DATA_IMPORTED;
    e.ixData = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
            e = arguments.length > 1 ? arguments[1] : void 0;
        switch (e.type) {
            case r:
                return e.payload.ixData || Object.freeze({});
            default:
                return t
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.QuickEffectDirectionConsts = e.QuickEffectIds = e.EventLimitAffectedElements = e.EventContinuousMouseAxes = e.EventBasedOn = e.EventAppliesTo = e.EventTypeConsts = void 0;
    e.EventTypeConsts = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL"
    };
    e.EventAppliesTo = {
        ELEMENT: "ELEMENT",
        CLASS: "CLASS",
        PAGE: "PAGE"
    };
    e.EventBasedOn = {
        ELEMENT: "ELEMENT",
        VIEWPORT: "VIEWPORT"
    };
    e.EventContinuousMouseAxes = {
        X_AXIS: "X_AXIS",
        Y_AXIS: "Y_AXIS"
    };
    e.EventLimitAffectedElements = {
        CHILDREN: "CHILDREN",
        SIBLINGS: "SIBLINGS",
        IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
    };
    e.QuickEffectIds = {
        FADE_EFFECT: "FADE_EFFECT",
        SLIDE_EFFECT: "SLIDE_EFFECT",
        GROW_EFFECT: "GROW_EFFECT",
        SHRINK_EFFECT: "SHRINK_EFFECT",
        SPIN_EFFECT: "SPIN_EFFECT",
        FLY_EFFECT: "FLY_EFFECT",
        POP_EFFECT: "POP_EFFECT",
        FLIP_EFFECT: "FLIP_EFFECT",
        JIGGLE_EFFECT: "JIGGLE_EFFECT",
        PULSE_EFFECT: "PULSE_EFFECT",
        DROP_EFFECT: "DROP_EFFECT",
        BLINK_EFFECT: "BLINK_EFFECT",
        BOUNCE_EFFECT: "BOUNCE_EFFECT",
        FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
        FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
        RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
        JELLO_EFFECT: "JELLO_EFFECT",
        GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
        SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
        PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
    };
    e.QuickEffectDirectionConsts = {
        LEFT: "LEFT",
        RIGHT: "RIGHT",
        BOTTOM: "BOTTOM",
        TOP: "TOP",
        BOTTOM_LEFT: "BOTTOM_LEFT",
        BOTTOM_RIGHT: "BOTTOM_RIGHT",
        TOP_RIGHT: "TOP_RIGHT",
        TOP_LEFT: "TOP_LEFT",
        CLOCKWISE: "CLOCKWISE",
        COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ActionAppliesTo = e.ActionTypeConsts = void 0;
    e.ActionTypeConsts = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
    };
    e.ActionAppliesTo = {
        ELEMENT: "ELEMENT",
        ELEMENT_CLASS: "ELEMENT_CLASS",
        TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.InteractionTypeConsts = void 0;
    e.InteractionTypeConsts = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION"
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.IX2_TEST_FRAME_RENDERED = e.IX2_MEDIA_QUERIES_DEFINED = e.IX2_VIEWPORT_WIDTH_CHANGED = e.IX2_ACTION_LIST_PLAYBACK_CHANGED = e.IX2_ELEMENT_STATE_CHANGED = e.IX2_INSTANCE_REMOVED = e.IX2_INSTANCE_STARTED = e.IX2_INSTANCE_ADDED = e.IX2_PARAMETER_CHANGED = e.IX2_ANIMATION_FRAME_CHANGED = e.IX2_EVENT_STATE_CHANGED = e.IX2_EVENT_LISTENER_ADDED = e.IX2_CLEAR_REQUESTED = e.IX2_STOP_REQUESTED = e.IX2_PLAYBACK_REQUESTED = e.IX2_PREVIEW_REQUESTED = e.IX2_SESSION_STOPPED = e.IX2_SESSION_STARTED = e.IX2_SESSION_INITIALIZED = e.IX2_RAW_DATA_IMPORTED = void 0;
    e.IX2_RAW_DATA_IMPORTED = "IX2_RAW_DATA_IMPORTED";
    e.IX2_SESSION_INITIALIZED = "IX2_SESSION_INITIALIZED";
    e.IX2_SESSION_STARTED = "IX2_SESSION_STARTED";
    e.IX2_SESSION_STOPPED = "IX2_SESSION_STOPPED";
    e.IX2_PREVIEW_REQUESTED = "IX2_PREVIEW_REQUESTED";
    e.IX2_PLAYBACK_REQUESTED = "IX2_PLAYBACK_REQUESTED";
    e.IX2_STOP_REQUESTED = "IX2_STOP_REQUESTED";
    e.IX2_CLEAR_REQUESTED = "IX2_CLEAR_REQUESTED";
    e.IX2_EVENT_LISTENER_ADDED = "IX2_EVENT_LISTENER_ADDED";
    e.IX2_EVENT_STATE_CHANGED = "IX2_EVENT_STATE_CHANGED";
    e.IX2_ANIMATION_FRAME_CHANGED = "IX2_ANIMATION_FRAME_CHANGED";
    e.IX2_PARAMETER_CHANGED = "IX2_PARAMETER_CHANGED";
    e.IX2_INSTANCE_ADDED = "IX2_INSTANCE_ADDED";
    e.IX2_INSTANCE_STARTED = "IX2_INSTANCE_STARTED";
    e.IX2_INSTANCE_REMOVED = "IX2_INSTANCE_REMOVED";
    e.IX2_ELEMENT_STATE_CHANGED = "IX2_ELEMENT_STATE_CHANGED";
    e.IX2_ACTION_LIST_PLAYBACK_CHANGED = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
    e.IX2_VIEWPORT_WIDTH_CHANGED = "IX2_VIEWPORT_WIDTH_CHANGED";
    e.IX2_MEDIA_QUERIES_DEFINED = "IX2_MEDIA_QUERIES_DEFINED";
    e.IX2_TEST_FRAME_RENDERED = "IX2_TEST_FRAME_RENDERED"
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.RENDER_PLUGIN = e.RENDER_STYLE = e.RENDER_GENERAL = e.RENDER_TRANSFORM = e.ABSTRACT_NODE = e.PLAIN_OBJECT = e.HTML_ELEMENT = e.PRESERVE_3D = e.PARENT = e.SIBLINGS = e.IMMEDIATE_CHILDREN = e.CHILDREN = e.BAR_DELIMITER = e.COLON_DELIMITER = e.COMMA_DELIMITER = e.AUTO = e.WILL_CHANGE = e.FLEX = e.DISPLAY = e.COLOR = e.BORDER_COLOR = e.BACKGROUND = e.BACKGROUND_COLOR = e.HEIGHT = e.WIDTH = e.FILTER = e.OPACITY = e.SKEW_Y = e.SKEW_X = e.SKEW = e.ROTATE_Z = e.ROTATE_Y = e.ROTATE_X = e.SCALE_3D = e.SCALE_Z = e.SCALE_Y = e.SCALE_X = e.TRANSLATE_3D = e.TRANSLATE_Z = e.TRANSLATE_Y = e.TRANSLATE_X = e.TRANSFORM = e.CONFIG_UNIT = e.CONFIG_Z_UNIT = e.CONFIG_Y_UNIT = e.CONFIG_X_UNIT = e.CONFIG_VALUE = e.CONFIG_Z_VALUE = e.CONFIG_Y_VALUE = e.CONFIG_X_VALUE = e.BOUNDARY_SELECTOR = e.W_MOD_IX = e.W_MOD_JS = e.WF_PAGE = e.IX2_ID_DELIMITER = void 0;
    e.IX2_ID_DELIMITER = "|";
    e.WF_PAGE = "data-wf-page";
    e.W_MOD_JS = "w-mod-js";
    e.W_MOD_IX = "w-mod-ix";
    e.BOUNDARY_SELECTOR = ".w-dyn-item";
    e.CONFIG_X_VALUE = "xValue";
    e.CONFIG_Y_VALUE = "yValue";
    e.CONFIG_Z_VALUE = "zValue";
    e.CONFIG_VALUE = "value";
    e.CONFIG_X_UNIT = "xUnit";
    e.CONFIG_Y_UNIT = "yUnit";
    e.CONFIG_Z_UNIT = "zUnit";
    e.CONFIG_UNIT = "unit";
    e.TRANSFORM = "transform";
    e.TRANSLATE_X = "translateX";
    e.TRANSLATE_Y = "translateY";
    e.TRANSLATE_Z = "translateZ";
    e.TRANSLATE_3D = "translate3d";
    e.SCALE_X = "scaleX";
    e.SCALE_Y = "scaleY";
    e.SCALE_Z = "scaleZ";
    e.SCALE_3D = "scale3d";
    e.ROTATE_X = "rotateX";
    e.ROTATE_Y = "rotateY";
    e.ROTATE_Z = "rotateZ";
    e.SKEW = "skew";
    e.SKEW_X = "skewX";
    e.SKEW_Y = "skewY";
    e.OPACITY = "opacity";
    e.FILTER = "filter";
    e.WIDTH = "width";
    e.HEIGHT = "height";
    e.BACKGROUND_COLOR = "backgroundColor";
    e.BACKGROUND = "background";
    e.BORDER_COLOR = "borderColor";
    e.COLOR = "color";
    e.DISPLAY = "display";
    e.FLEX = "flex";
    e.WILL_CHANGE = "willChange";
    e.AUTO = "AUTO";
    e.COMMA_DELIMITER = ",";
    e.COLON_DELIMITER = ":";
    e.BAR_DELIMITER = "|";
    e.CHILDREN = "CHILDREN";
    e.IMMEDIATE_CHILDREN = "IMMEDIATE_CHILDREN";
    e.SIBLINGS = "SIBLINGS";
    e.PARENT = "PARENT";
    e.PRESERVE_3D = "preserve-3d";
    e.HTML_ELEMENT = "HTML_ELEMENT";
    e.PLAIN_OBJECT = "PLAIN_OBJECT";
    e.ABSTRACT_NODE = "ABSTRACT_NODE";
    e.RENDER_TRANSFORM = "RENDER_TRANSFORM";
    e.RENDER_GENERAL = "RENDER_GENERAL";
    e.RENDER_STYLE = "RENDER_STYLE";
    e.RENDER_PLUGIN = "RENDER_PLUGIN"
}, function(t, e, n) {
    "use strict";
    var r, i = n(0)(n(18)),
        o = n(0);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ixRequest = void 0;
    var a = o(n(19)),
        u = n(3),
        c = n(15),
        s = u.IX2EngineActionTypes,
        l = s.IX2_PREVIEW_REQUESTED,
        f = s.IX2_PLAYBACK_REQUESTED,
        d = s.IX2_STOP_REQUESTED,
        p = s.IX2_CLEAR_REQUESTED,
        v = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        },
        h = Object.create(null, (r = {}, (0, i.default)(r, l, {
            value: "preview"
        }), (0, i.default)(r, f, {
            value: "playback"
        }), (0, i.default)(r, d, {
            value: "stop"
        }), (0, i.default)(r, p, {
            value: "clear"
        }), r));
    e.ixRequest = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
            e = arguments.length > 1 ? arguments[1] : void 0;
        if (e.type in h) {
            var n = [h[e.type]];
            return (0, c.setIn)(t, [n], (0, a.default)({}, e.payload))
        }
        return t
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ixSession = void 0;
    var r = n(3),
        i = n(15),
        o = r.IX2EngineActionTypes,
        a = o.IX2_SESSION_INITIALIZED,
        u = o.IX2_SESSION_STARTED,
        c = o.IX2_TEST_FRAME_RENDERED,
        s = o.IX2_SESSION_STOPPED,
        l = o.IX2_EVENT_LISTENER_ADDED,
        f = o.IX2_EVENT_STATE_CHANGED,
        d = o.IX2_ANIMATION_FRAME_CHANGED,
        p = o.IX2_ACTION_LIST_PLAYBACK_CHANGED,
        v = o.IX2_VIEWPORT_WIDTH_CHANGED,
        h = o.IX2_MEDIA_QUERIES_DEFINED,
        g = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1
        };
    e.ixSession = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
            e = arguments.length > 1 ? arguments[1] : void 0;
        switch (e.type) {
            case a:
                var n = e.payload.hasBoundaryNodes;
                return (0, i.set)(t, "hasBoundaryNodes", n);
            case u:
                return (0, i.set)(t, "active", !0);
            case c:
                var r = e.payload.step,
                    o = void 0 === r ? 20 : r;
                return (0, i.set)(t, "tick", t.tick + o);
            case s:
                return g;
            case d:
                var E = e.payload.now;
                return (0, i.set)(t, "tick", E);
            case l:
                var m = (0, i.addLast)(t.eventListeners, e.payload);
                return (0, i.set)(t, "eventListeners", m);
            case f:
                var _ = e.payload,
                    y = _.stateKey,
                    I = _.newState;
                return (0, i.setIn)(t, ["eventState", y], I);
            case p:
                var w = e.payload,
                    b = w.actionListId,
                    T = w.isPlaying;
                return (0, i.setIn)(t, ["playbackState", b], T);
            case v:
                for (var O = e.payload, A = O.width, S = O.mediaQueries, x = S.length, R = null, C = 0; C < x; C++) {
                    var N = S[C],
                        L = N.key,
                        D = N.min,
                        P = N.max;
                    if (A >= D && A <= P) {
                        R = L;
                        break
                    }
                }
                return (0, i.merge)(t, {
                    viewportWidth: A,
                    mediaQueryKey: R
                });
            case h:
                return (0, i.set)(t, "hasDefinedMediaQueries", !0);
            default:
                return t
        }
    }
}, function(t, e, n) {
    var r = n(127),
        i = n(179),
        o = n(77);
    t.exports = function(t) {
        var e = i(t);
        return 1 == e.length && e[0][2] ? o(e[0][0], e[0][1]) : function(n) {
            return n === t || r(n, t, e)
        }
    }
}, function(t, e, n) {
    var r = n(63),
        i = n(67),
        o = 1,
        a = 2;
    t.exports = function(t, e, n, u) {
        var c = n.length,
            s = c,
            l = !u;
        if (null == t) return !s;
        for (t = Object(t); c--;) {
            var f = n[c];
            if (l && f[2] ? f[1] !== t[f[0]] : !(f[0] in t)) return !1
        }
        for (; ++c < s;) {
            var d = (f = n[c])[0],
                p = t[d],
                v = f[1];
            if (l && f[2]) {
                if (void 0 === p && !(d in t)) return !1
            } else {
                var h = new r;
                if (u) var g = u(p, v, d, t, e, h);
                if (!(void 0 === g ? i(v, p, o | a, u, h) : g)) return !1
            }
        }
        return !0
    }
}, function(t, e) {
    t.exports = function() {
        this.__data__ = [], this.size = 0
    }
}, function(t, e, n) {
    var r = n(21),
        i = Array.prototype.splice;
    t.exports = function(t) {
        var e = this.__data__,
            n = r(e, t);
        return !(n < 0 || (n == e.length - 1 ? e.pop() : i.call(e, n, 1), --this.size, 0))
    }
}, function(t, e, n) {
    var r = n(21);
    t.exports = function(t) {
        var e = this.__data__,
            n = r(e, t);
        return n < 0 ? void 0 : e[n][1]
    }
}, function(t, e, n) {
    var r = n(21);
    t.exports = function(t) {
        return r(this.__data__, t) > -1
    }
}, function(t, e, n) {
    var r = n(21);
    t.exports = function(t, e) {
        var n = this.__data__,
            i = r(n, t);
        return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this
    }
}, function(t, e, n) {
    var r = n(20);
    t.exports = function() {
        this.__data__ = new r, this.size = 0
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = this.__data__,
            n = e.delete(t);
        return this.size = e.size, n
    }
}, function(t, e) {
    t.exports = function(t) {
        return this.__data__.get(t)
    }
}, function(t, e) {
    t.exports = function(t) {
        return this.__data__.has(t)
    }
}, function(t, e, n) {
    var r = n(20),
        i = n(34),
        o = n(35),
        a = 200;
    t.exports = function(t, e) {
        var n = this.__data__;
        if (n instanceof r) {
            var u = n.__data__;
            if (!i || u.length < a - 1) return u.push([t, e]), this.size = ++n.size, this;
            n = this.__data__ = new o(u)
        }
        return n.set(t, e), this.size = n.size, this
    }
}, function(t, e, n) {
    var r = n(64),
        i = n(141),
        o = n(5),
        a = n(66),
        u = /^\[object .+?Constructor\]$/,
        c = Function.prototype,
        s = Object.prototype,
        l = c.toString,
        f = s.hasOwnProperty,
        d = RegExp("^" + l.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t.exports = function(t) {
        return !(!o(t) || i(t)) && (r(t) ? d : u).test(a(t))
    }
}, function(t, e, n) {
    var r = n(16),
        i = Object.prototype,
        o = i.hasOwnProperty,
        a = i.toString,
        u = r ? r.toStringTag : void 0;
    t.exports = function(t) {
        var e = o.call(t, u),
            n = t[u];
        try {
            t[u] = void 0;
            var r = !0
        } catch (t) {}
        var i = a.call(t);
        return r && (e ? t[u] = n : delete t[u]), i
    }
}, function(t, e) {
    var n = Object.prototype.toString;
    t.exports = function(t) {
        return n.call(t)
    }
}, function(t, e, n) {
    var r, i = n(142),
        o = (r = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
    t.exports = function(t) {
        return !!o && o in t
    }
}, function(t, e, n) {
    var r = n(4)["__core-js_shared__"];
    t.exports = r
}, function(t, e) {
    t.exports = function(t, e) {
        return null == t ? void 0 : t[e]
    }
}, function(t, e, n) {
    var r = n(145),
        i = n(20),
        o = n(34);
    t.exports = function() {
        this.size = 0, this.__data__ = {
            hash: new r,
            map: new(o || i),
            string: new r
        }
    }
}, function(t, e, n) {
    var r = n(146),
        i = n(147),
        o = n(148),
        a = n(149),
        u = n(150);

    function c(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c
}, function(t, e, n) {
    var r = n(22);
    t.exports = function() {
        this.__data__ = r ? r(null) : {}, this.size = 0
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = this.has(t) && delete this.__data__[t];
        return this.size -= e ? 1 : 0, e
    }
}, function(t, e, n) {
    var r = n(22),
        i = "__lodash_hash_undefined__",
        o = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        var e = this.__data__;
        if (r) {
            var n = e[t];
            return n === i ? void 0 : n
        }
        return o.call(e, t) ? e[t] : void 0
    }
}, function(t, e, n) {
    var r = n(22),
        i = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        var e = this.__data__;
        return r ? void 0 !== e[t] : i.call(e, t)
    }
}, function(t, e, n) {
    var r = n(22),
        i = "__lodash_hash_undefined__";
    t.exports = function(t, e) {
        var n = this.__data__;
        return this.size += this.has(t) ? 0 : 1, n[t] = r && void 0 === e ? i : e, this
    }
}, function(t, e, n) {
    var r = n(23);
    t.exports = function(t) {
        var e = r(this, t).delete(t);
        return this.size -= e ? 1 : 0, e
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = typeof t;
        return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
    }
}, function(t, e, n) {
    var r = n(23);
    t.exports = function(t) {
        return r(this, t).get(t)
    }
}, function(t, e, n) {
    var r = n(23);
    t.exports = function(t) {
        return r(this, t).has(t)
    }
}, function(t, e, n) {
    var r = n(23);
    t.exports = function(t, e) {
        var n = r(this, t),
            i = n.size;
        return n.set(t, e), this.size += n.size == i ? 0 : 1, this
    }
}, function(t, e, n) {
    var r = n(63),
        i = n(68),
        o = n(162),
        a = n(166),
        u = n(43),
        c = n(1),
        s = n(37),
        l = n(39),
        f = 1,
        d = "[object Arguments]",
        p = "[object Array]",
        v = "[object Object]",
        h = Object.prototype.hasOwnProperty;
    t.exports = function(t, e, n, g, E, m) {
        var _ = c(t),
            y = c(e),
            I = _ ? p : u(t),
            w = y ? p : u(e),
            b = (I = I == d ? v : I) == v,
            T = (w = w == d ? v : w) == v,
            O = I == w;
        if (O && s(t)) {
            if (!s(e)) return !1;
            _ = !0, b = !1
        }
        if (O && !b) return m || (m = new r), _ || l(t) ? i(t, e, n, g, E, m) : o(t, e, I, n, g, E, m);
        if (!(n & f)) {
            var A = b && h.call(t, "__wrapped__"),
                S = T && h.call(e, "__wrapped__");
            if (A || S) {
                var x = A ? t.value() : t,
                    R = S ? e.value() : e;
                return m || (m = new r), E(x, R, n, g, m)
            }
        }
        return !!O && (m || (m = new r), a(t, e, n, g, E, m))
    }
}, function(t, e, n) {
    var r = n(35),
        i = n(158),
        o = n(159);

    function a(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.__data__ = new r; ++e < n;) this.add(t[e])
    }
    a.prototype.add = a.prototype.push = i, a.prototype.has = o, t.exports = a
}, function(t, e) {
    var n = "__lodash_hash_undefined__";
    t.exports = function(t) {
        return this.__data__.set(t, n), this
    }
}, function(t, e) {
    t.exports = function(t) {
        return this.__data__.has(t)
    }
}, function(t, e) {
    t.exports = function(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
            if (e(t[n], n, t)) return !0;
        return !1
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return t.has(e)
    }
}, function(t, e, n) {
    var r = n(16),
        i = n(163),
        o = n(33),
        a = n(68),
        u = n(164),
        c = n(165),
        s = 1,
        l = 2,
        f = "[object Boolean]",
        d = "[object Date]",
        p = "[object Error]",
        v = "[object Map]",
        h = "[object Number]",
        g = "[object RegExp]",
        E = "[object Set]",
        m = "[object String]",
        _ = "[object Symbol]",
        y = "[object ArrayBuffer]",
        I = "[object DataView]",
        w = r ? r.prototype : void 0,
        b = w ? w.valueOf : void 0;
    t.exports = function(t, e, n, r, w, T, O) {
        switch (n) {
            case I:
                if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                t = t.buffer, e = e.buffer;
            case y:
                return !(t.byteLength != e.byteLength || !T(new i(t), new i(e)));
            case f:
            case d:
            case h:
                return o(+t, +e);
            case p:
                return t.name == e.name && t.message == e.message;
            case g:
            case m:
                return t == e + "";
            case v:
                var A = u;
            case E:
                var S = r & s;
                if (A || (A = c), t.size != e.size && !S) return !1;
                var x = O.get(t);
                if (x) return x == e;
                r |= l, O.set(t, e);
                var R = a(A(t), A(e), r, w, T, O);
                return O.delete(t), R;
            case _:
                if (b) return b.call(t) == b.call(e)
        }
        return !1
    }
}, function(t, e, n) {
    var r = n(4).Uint8Array;
    t.exports = r
}, function(t, e) {
    t.exports = function(t) {
        var e = -1,
            n = Array(t.size);
        return t.forEach(function(t, r) {
            n[++e] = [r, t]
        }), n
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = -1,
            n = Array(t.size);
        return t.forEach(function(t) {
            n[++e] = t
        }), n
    }
}, function(t, e, n) {
    var r = n(167),
        i = 1,
        o = Object.prototype.hasOwnProperty;
    t.exports = function(t, e, n, a, u, c) {
        var s = n & i,
            l = r(t),
            f = l.length;
        if (f != r(e).length && !s) return !1;
        for (var d = f; d--;) {
            var p = l[d];
            if (!(s ? p in e : o.call(e, p))) return !1
        }
        var v = c.get(t);
        if (v && c.get(e)) return v == e;
        var h = !0;
        c.set(t, e), c.set(e, t);
        for (var g = s; ++d < f;) {
            var E = t[p = l[d]],
                m = e[p];
            if (a) var _ = s ? a(m, E, p, e, t, c) : a(E, m, p, t, e, c);
            if (!(void 0 === _ ? E === m || u(E, m, n, a, c) : _)) {
                h = !1;
                break
            }
            g || (g = "constructor" == p)
        }
        if (h && !g) {
            var y = t.constructor,
                I = e.constructor;
            y != I && "constructor" in t && "constructor" in e && !("function" == typeof y && y instanceof y && "function" == typeof I && I instanceof I) && (h = !1)
        }
        return c.delete(t), c.delete(e), h
    }
}, function(t, e, n) {
    var r = n(69),
        i = n(70),
        o = n(24);
    t.exports = function(t) {
        return r(t, o, i)
    }
}, function(t, e) {
    t.exports = function(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r;) {
            var a = t[n];
            e(a, n, t) && (o[i++] = a)
        }
        return o
    }
}, function(t, e) {
    t.exports = function(t, e) {
        for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
        return r
    }
}, function(t, e, n) {
    var r = n(10),
        i = n(8),
        o = "[object Arguments]";
    t.exports = function(t) {
        return i(t) && r(t) == o
    }
}, function(t, e) {
    t.exports = function() {
        return !1
    }
}, function(t, e, n) {
    var r = n(10),
        i = n(40),
        o = n(8),
        a = {};
    a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, t.exports = function(t) {
        return o(t) && i(t.length) && !!a[r(t)]
    }
}, function(t, e) {
    t.exports = function(t) {
        return function(e) {
            return t(e)
        }
    }
}, function(t, e, n) {
    (function(t) {
        var r = n(65),
            i = e && !e.nodeType && e,
            o = i && "object" == typeof t && t && !t.nodeType && t,
            a = o && o.exports === i && r.process,
            u = function() {
                try {
                    var t = o && o.require && o.require("util").types;
                    return t || a && a.binding && a.binding("util")
                } catch (t) {}
            }();
        t.exports = u
    }).call(this, n(73)(t))
}, function(t, e, n) {
    var r = n(74)(Object.keys, Object);
    t.exports = r
}, function(t, e, n) {
    var r = n(7)(n(4), "DataView");
    t.exports = r
}, function(t, e, n) {
    var r = n(7)(n(4), "Promise");
    t.exports = r
}, function(t, e, n) {
    var r = n(7)(n(4), "Set");
    t.exports = r
}, function(t, e, n) {
    var r = n(76),
        i = n(24);
    t.exports = function(t) {
        for (var e = i(t), n = e.length; n--;) {
            var o = e[n],
                a = t[o];
            e[n] = [o, a, r(a)]
        }
        return e
    }
}, function(t, e, n) {
    var r = n(67),
        i = n(26),
        o = n(184),
        a = n(45),
        u = n(76),
        c = n(77),
        s = n(17),
        l = 1,
        f = 2;
    t.exports = function(t, e) {
        return a(t) && u(e) ? c(s(t), e) : function(n) {
            var a = i(n, t);
            return void 0 === a && a === e ? o(n, t) : r(e, a, l | f)
        }
    }
}, function(t, e, n) {
    var r = n(182),
        i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        o = /\\(\\)?/g,
        a = r(function(t) {
            var e = [];
            return 46 === t.charCodeAt(0) && e.push(""), t.replace(i, function(t, n, r, i) {
                e.push(r ? i.replace(o, "$1") : n || t)
            }), e
        });
    t.exports = a
}, function(t, e, n) {
    var r = n(183),
        i = 500;
    t.exports = function(t) {
        var e = r(t, function(t) {
                return n.size === i && n.clear(), t
            }),
            n = e.cache;
        return e
    }
}, function(t, e, n) {
    var r = n(35),
        i = "Expected a function";

    function o(t, e) {
        if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(i);
        var n = function() {
            var r = arguments,
                i = e ? e.apply(this, r) : r[0],
                o = n.cache;
            if (o.has(i)) return o.get(i);
            var a = t.apply(this, r);
            return n.cache = o.set(i, a) || o, a
        };
        return n.cache = new(o.Cache || r), n
    }
    o.Cache = r, t.exports = o
}, function(t, e, n) {
    var r = n(185),
        i = n(186);
    t.exports = function(t, e) {
        return null != t && i(t, e, r)
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return null != t && e in Object(t)
    }
}, function(t, e, n) {
    var r = n(27),
        i = n(25),
        o = n(1),
        a = n(38),
        u = n(40),
        c = n(17);
    t.exports = function(t, e, n) {
        for (var s = -1, l = (e = r(e, t)).length, f = !1; ++s < l;) {
            var d = c(e[s]);
            if (!(f = null != t && n(t, d))) break;
            t = t[d]
        }
        return f || ++s != l ? f : !!(l = null == t ? 0 : t.length) && u(l) && a(d, l) && (o(t) || i(t))
    }
}, function(t, e, n) {
    var r = n(81),
        i = n(188),
        o = n(45),
        a = n(17);
    t.exports = function(t) {
        return o(t) ? r(a(t)) : i(t)
    }
}, function(t, e, n) {
    var r = n(44);
    t.exports = function(t) {
        return function(e) {
            return r(e, t)
        }
    }
}, function(t, e, n) {
    var r = n(82),
        i = n(6),
        o = n(47),
        a = Math.max;
    t.exports = function(t, e, n) {
        var u = null == t ? 0 : t.length;
        if (!u) return -1;
        var c = null == n ? 0 : o(n);
        return c < 0 && (c = a(u + c, 0)), r(t, i(e, 3), c)
    }
}, function(t, e, n) {
    var r = n(48),
        i = 1 / 0,
        o = 1.7976931348623157e308;
    t.exports = function(t) {
        return t ? (t = r(t)) === i || t === -i ? (t < 0 ? -1 : 1) * o : t == t ? t : 0 : 0 === t ? t : 0
    }
}, function(t, e) {
    t.exports = function(t) {
        if (Array.isArray(t)) {
            for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
            return n
        }
    }
}, function(t, e) {
    t.exports = function(t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
    }
}, function(t, e) {
    t.exports = function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.createElementState = I, e.mergeActionState = w, e.ixElements = void 0;
    var r = n(15),
        i = n(3),
        o = i.IX2EngineConstants,
        a = (o.HTML_ELEMENT, o.PLAIN_OBJECT),
        u = (o.ABSTRACT_NODE, o.CONFIG_X_VALUE),
        c = o.CONFIG_Y_VALUE,
        s = o.CONFIG_Z_VALUE,
        l = o.CONFIG_VALUE,
        f = o.CONFIG_X_UNIT,
        d = o.CONFIG_Y_UNIT,
        p = o.CONFIG_Z_UNIT,
        v = o.CONFIG_UNIT,
        h = i.IX2EngineActionTypes,
        g = h.IX2_SESSION_STOPPED,
        E = h.IX2_INSTANCE_ADDED,
        m = h.IX2_ELEMENT_STATE_CHANGED,
        _ = {},
        y = "refState";

    function I(t, e, n, i, o) {
        var u = n === a ? (0, r.getIn)(o, ["config", "target", "objectId"]) : null;
        return (0, r.mergeIn)(t, [i], {
            id: i,
            ref: e,
            refId: u,
            refType: n
        })
    }

    function w(t, e, n, i, o) {
        var a = function(t) {
                var e = t.config;
                return b.reduce(function(t, n) {
                    var r = n[0],
                        i = n[1],
                        o = e[r],
                        a = e[i];
                    return null != o && null != a && (t[i] = a), t
                }, {})
            }(o),
            u = [e, y, n];
        return (0, r.mergeIn)(t, u, i, a)
    }
    e.ixElements = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        switch (e.type) {
            case g:
                return _;
            case E:
                var n = e.payload,
                    i = n.elementId,
                    o = n.element,
                    a = n.origin,
                    u = n.actionItem,
                    c = n.refType,
                    s = u.actionTypeId,
                    l = t;
                return (0, r.getIn)(l, [i, o]) !== o && (l = I(l, o, c, i, u)), w(l, i, s, a, u);
            case m:
                var f = e.payload;
                return w(t, f.elementId, f.actionTypeId, f.current, f.actionItem);
            default:
                return t
        }
    };
    var b = [
        [u, f],
        [c, d],
        [s, p],
        [l, v]
    ]
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.clearPlugin = e.renderPlugin = e.createPluginInstance = e.getPluginDestination = e.getPluginOrigin = e.getPluginDuration = e.getPluginConfig = void 0;
    e.getPluginConfig = function(t) {
        return t.value
    };
    e.getPluginDuration = function(t, e) {
        if ("auto" !== e.config.duration) return null;
        var n = parseFloat(t.getAttribute("data-duration"));
        return n > 0 ? 1e3 * n : 1e3 * parseFloat(t.getAttribute("data-default-duration"))
    };
    e.getPluginOrigin = function(t) {
        return t || {
            value: 0
        }
    };
    e.getPluginDestination = function(t) {
        return {
            value: t.value
        }
    };
    e.createPluginInstance = function(t) {
        var e = window.Webflow.require("lottie").createInstance(t);
        return e.stop(), e.setSubframe(!0), e
    };
    e.renderPlugin = function(t, e, n) {
        if (t) {
            var r = e[n.actionTypeId].value / 100;
            t.goToFrame(t.frames * r)
        }
    };
    e.clearPlugin = function(t) {
        window.Webflow.require("lottie").createInstance(t).stop()
    }
}, function(t, e, n) {
    "use strict";
    var r, i, o, a = n(0),
        u = a(n(12)),
        c = a(n(18)),
        s = n(0);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getInstanceId = function() {
        return "i" + ht++
    }, e.getElementId = function(t, e) {
        for (var n in t) {
            var r = t[n];
            if (r && r.ref === e) return r.id
        }
        return "e" + gt++
    }, e.reifyState = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = t.events,
            n = t.actionLists,
            r = t.site,
            i = (0, f.default)(e, function(t, e) {
                var n = e.eventTypeId;
                return t[n] || (t[n] = {}), t[n][e.id] = e, t
            }, {}),
            o = r && r.mediaQueries,
            a = [];
        o ? a = o.map(function(t) {
            return t.key
        }) : (o = [], console.warn("IX2 missing mediaQueries in site data"));
        return {
            ixData: {
                events: e,
                actionLists: n,
                eventTypeMap: i,
                mediaQueries: o,
                mediaQueryKeys: a
            }
        }
    }, e.observeStore = function(t) {
        var e = t.store,
            n = t.select,
            r = t.onChange,
            i = t.comparator,
            o = void 0 === i ? Et : i,
            a = e.getState,
            u = (0, e.subscribe)(function() {
                var t = n(a());
                if (null == t) return void u();
                o(t, c) || r(c = t, e)
            }),
            c = n(a());
        return u
    }, e.getAffectedElements = _t, e.getComputedStyle = function(t) {
        var e = t.element,
            n = t.actionItem;
        if (!_.IS_BROWSER_ENV) return {};
        switch (n.actionTypeId) {
            case ot:
            case at:
            case ut:
            case ct:
            case st:
                return window.getComputedStyle(e);
            default:
                return {}
        }
    }, e.getInstanceOrigin = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = arguments.length > 3 ? arguments[3] : void 0,
            i = (arguments.length > 4 ? arguments[4] : void 0).getStyle,
            o = r.actionTypeId,
            a = r.config;
        if ((0, m.isPluginType)(o)) return (0, m.getPluginOrigin)(o)(e[o]);
        switch (o) {
            case J:
            case tt:
            case et:
            case nt:
                return e[o] || Tt[o];
            case it:
                return It(e[o], r.config.filters);
            case rt:
                return {
                    value: (0, l.default)(parseFloat(i(t, N)), 1)
                };
            case ot:
                var u, c, s = i(t, D),
                    f = i(t, P);
                return u = a.widthUnit === B ? yt.test(s) ? parseFloat(s) : parseFloat(n.width) : (0, l.default)(parseFloat(s), parseFloat(n.width)), c = a.heightUnit === B ? yt.test(f) ? parseFloat(f) : parseFloat(n.height) : (0, l.default)(parseFloat(f), parseFloat(n.height)), {
                    widthValue: u,
                    heightValue: c
                };
            case at:
            case ut:
            case ct:
                return function(t) {
                    var e = t.element,
                        n = t.actionTypeId,
                        r = t.computedStyle,
                        i = t.getStyle,
                        o = dt[n],
                        a = i(e, o),
                        u = xt.test(a) ? a : r[o],
                        c = function(t, e) {
                            var n = t.exec(e);
                            return n ? n[1] : ""
                        }(Rt, u).split(H);
                    return {
                        rValue: (0, l.default)(parseInt(c[0], 10), 255),
                        gValue: (0, l.default)(parseInt(c[1], 10), 255),
                        bValue: (0, l.default)(parseInt(c[2], 10), 255),
                        aValue: (0, l.default)(parseFloat(c[3]), 1)
                    }
                }({
                    element: t,
                    actionTypeId: o,
                    computedStyle: n,
                    getStyle: i
                });
            case st:
                return {
                    value: (0, l.default)(i(t, V), n.display)
                };
            case lt:
                return e[o] || {
                    value: 0
                };
            default:
                return
        }
    }, e.getDestinationValues = function(t) {
        var e = t.element,
            n = t.actionItem,
            r = t.elementApi,
            i = n.actionTypeId;
        if ((0, m.isPluginType)(i)) return (0, m.getPluginDestination)(i)(n.config);
        switch (i) {
            case J:
            case tt:
            case et:
            case nt:
                var o = n.config,
                    a = o.xValue,
                    u = o.yValue,
                    c = o.zValue;
                return {
                    xValue: a, yValue: u, zValue: c
                };
            case ot:
                var s = r.getStyle,
                    l = r.setStyle,
                    f = r.getProperty,
                    d = n.config,
                    p = d.widthUnit,
                    v = d.heightUnit,
                    h = n.config,
                    g = h.widthValue,
                    E = h.heightValue;
                if (!_.IS_BROWSER_ENV) return {
                    widthValue: g,
                    heightValue: E
                };
                if (p === B) {
                    var y = s(e, D);
                    l(e, D, ""), g = f(e, "offsetWidth"), l(e, D, y)
                }
                if (v === B) {
                    var I = s(e, P);
                    l(e, P, ""), E = f(e, "offsetHeight"), l(e, P, I)
                }
                return {
                    widthValue: g, heightValue: E
                };
            case at:
            case ut:
            case ct:
                var w = n.config,
                    b = w.rValue,
                    T = w.gValue,
                    O = w.bValue,
                    A = w.aValue;
                return {
                    rValue: b, gValue: T, bValue: O, aValue: A
                };
            case it:
                return n.config.filters.reduce(wt, {});
            default:
                var S = n.config.value;
                return {
                    value: S
                }
        }
    }, e.getRenderType = bt, e.getStyleProp = function(t, e) {
        return t === q ? e.replace("STYLE_", "").toLowerCase() : null
    }, e.renderHTMLElement = function(t, e, n, r, i, o, a, u, c) {
        switch (u) {
            case K:
                return function(t, e, n, r, i) {
                    var o = St.map(function(t) {
                            var n = Tt[t],
                                r = e[t] || {},
                                i = r.xValue,
                                o = void 0 === i ? n.xValue : i,
                                a = r.yValue,
                                u = void 0 === a ? n.yValue : a,
                                c = r.zValue,
                                s = void 0 === c ? n.zValue : c,
                                l = r.xUnit,
                                f = void 0 === l ? "" : l,
                                d = r.yUnit,
                                p = void 0 === d ? "" : d,
                                v = r.zUnit,
                                h = void 0 === v ? "" : v;
                            switch (t) {
                                case J:
                                    return "".concat(b, "(").concat(o).concat(f, ", ").concat(u).concat(p, ", ").concat(s).concat(h, ")");
                                case tt:
                                    return "".concat(T, "(").concat(o).concat(f, ", ").concat(u).concat(p, ", ").concat(s).concat(h, ")");
                                case et:
                                    return "".concat(O, "(").concat(o).concat(f, ") ").concat(A, "(").concat(u).concat(p, ") ").concat(S, "(").concat(s).concat(h, ")");
                                case nt:
                                    return "".concat(x, "(").concat(o).concat(f, ", ").concat(u).concat(p, ")");
                                default:
                                    return ""
                            }
                        }).join(" "),
                        a = i.setStyle;
                    Ct(t, _.TRANSFORM_PREFIXED, i), a(t, _.TRANSFORM_PREFIXED, o), u = r, c = n, s = u.actionTypeId, l = c.xValue, f = c.yValue, d = c.zValue, (s === J && void 0 !== d || s === tt && void 0 !== d || s === et && (void 0 !== l || void 0 !== f)) && a(t, _.TRANSFORM_STYLE_PREFIXED, R);
                    var u, c, s, l, f, d
                }(t, e, n, i, a);
            case q:
                return function(t, e, n, r, i, o) {
                    var a = o.setStyle,
                        u = r.actionTypeId,
                        c = r.config;
                    switch (u) {
                        case ot:
                            var s = r.config,
                                l = s.widthUnit,
                                d = void 0 === l ? "" : l,
                                p = s.heightUnit,
                                v = void 0 === p ? "" : p,
                                h = n.widthValue,
                                g = n.heightValue;
                            void 0 !== h && (d === B && (d = "px"), Ct(t, D, o), a(t, D, h + d)), void 0 !== g && (v === B && (v = "px"), Ct(t, P, o), a(t, P, g + v));
                            break;
                        case it:
                            ! function(t, e, n, r) {
                                var i = (0, f.default)(e, function(t, e, r) {
                                        return "".concat(t, " ").concat(r, "(").concat(e).concat(At(r, n), ")")
                                    }, ""),
                                    o = r.setStyle;
                                Ct(t, L, r), o(t, L, i)
                            }(t, n, c, o);
                            break;
                        case at:
                        case ut:
                        case ct:
                            var E = dt[u],
                                m = Math.round(n.rValue),
                                _ = Math.round(n.gValue),
                                y = Math.round(n.bValue),
                                I = n.aValue;
                            Ct(t, E, o), a(t, E, I >= 1 ? "rgb(".concat(m, ",").concat(_, ",").concat(y, ")") : "rgba(".concat(m, ",").concat(_, ",").concat(y, ",").concat(I, ")"));
                            break;
                        default:
                            var w = c.unit,
                                b = void 0 === w ? "" : w;
                            Ct(t, i, o), a(t, i, n.value + b)
                    }
                }(t, 0, n, i, o, a);
            case Q:
                return function(t, e, n) {
                    var r = n.setStyle;
                    switch (e.actionTypeId) {
                        case st:
                            var i = e.config.value;
                            return void(i === C && _.IS_BROWSER_ENV ? r(t, V, _.FLEX_PREFIXED) : r(t, V, i))
                    }
                }(t, i, a);
            case $:
                var s = i.actionTypeId;
                if ((0, m.isPluginType)(s)) return (0, m.renderPlugin)(s)(c, e, i)
        }
    }, e.clearAllStyles = function(t) {
        var e = t.store,
            n = t.elementApi,
            r = e.getState().ixData,
            i = r.events,
            o = void 0 === i ? {} : i,
            a = r.actionLists,
            u = void 0 === a ? {} : a;
        Object.keys(o).forEach(function(t) {
            var e = o[t],
                r = e.action.config,
                i = r.actionListId,
                a = u[i];
            a && Lt({
                actionList: a,
                event: e,
                elementApi: n
            })
        }), Object.keys(u).forEach(function(t) {
            Lt({
                actionList: u[t],
                elementApi: n
            })
        })
    }, e.cleanupHTMLElement = function(t, e, n) {
        var r = n.setStyle,
            i = n.getStyle,
            o = e.actionTypeId;
        if (o === ot) {
            var a = e.config;
            a.widthUnit === B && r(t, D, ""), a.heightUnit === B && r(t, P, "")
        }
        i(t, W) && Pt({
            effect: Nt,
            actionTypeId: o,
            elementApi: n
        })(t)
    }, e.getMaxDurationItemIndex = jt, e.getActionListProgress = function(t, e) {
        var n = t.actionItemGroups,
            r = t.useFirstGroupAsInitialState,
            i = e.actionItem,
            o = e.verboseTimeElapsed,
            a = void 0 === o ? 0 : o,
            u = 0,
            c = 0;
        return n.forEach(function(t, e) {
            if (!r || 0 !== e) {
                var n = t.actionItems,
                    o = n[jt(n)],
                    s = o.config,
                    l = o.actionTypeId;
                i.id === o.id && (c = u + a);
                var f = bt(l) === Q ? 0 : s.duration;
                u += s.delay + f
            }
        }), u > 0 ? (0, E.optimizeFloat)(c / u) : 0
    }, e.reduceListToGroup = function(t) {
        var e = t.actionList,
            n = t.actionItemId,
            r = t.rawData,
            i = e.actionItemGroups,
            o = e.continuousParameterGroups,
            a = [],
            u = function(t) {
                return a.push((0, v.mergeIn)(t, ["config"], {
                    delay: 0,
                    duration: 0
                })), t.id === n
            };
        return i && i.some(function(t) {
            return t.actionItems.some(u)
        }), o && o.some(function(t) {
            return t.continuousActionGroups.some(function(t) {
                return t.actionItems.some(u)
            })
        }), (0, v.setIn)(r, ["actionLists"], (0, c.default)({}, e.id, {
            id: e.id,
            actionItemGroups: [{
                actionItems: a
            }]
        }))
    }, e.shouldNamespaceEventParameter = function(t, e) {
        var n = e.basedOn;
        return t === g.EventTypeConsts.SCROLLING_IN_VIEW && (n === g.EventBasedOn.ELEMENT || null == n) || t === g.EventTypeConsts.MOUSE_MOVE && n === g.EventBasedOn.ELEMENT
    }, e.getNamespacedParameterId = function(t, e) {
        return t + z + e
    }, e.shouldAllowMediaQuery = function(t, e) {
        if (null == e) return !0;
        return -1 !== t.indexOf(e)
    }, e.mediaQueriesEqual = function(t, e) {
        return (0, h.default)(t && t.sort(), e && e.sort())
    }, e.stringifyTarget = function(t) {
        if ("string" == typeof t) return t;
        var e = t.id,
            n = void 0 === e ? "" : e,
            r = t.selector,
            i = void 0 === r ? "" : r,
            o = t.useEventTarget;
        return n + Y + i + Y + (void 0 === o ? "" : o)
    }, e.getItemConfigByKey = void 0;
    var l = s(n(197)),
        f = s(n(198)),
        d = s(n(204)),
        p = s(n(26)),
        v = n(15),
        h = s(n(90)),
        g = n(3),
        E = n(85),
        m = n(87),
        _ = n(32),
        y = g.IX2EngineConstants,
        I = y.BACKGROUND,
        w = y.TRANSFORM,
        b = y.TRANSLATE_3D,
        T = y.SCALE_3D,
        O = y.ROTATE_X,
        A = y.ROTATE_Y,
        S = y.ROTATE_Z,
        x = y.SKEW,
        R = y.PRESERVE_3D,
        C = y.FLEX,
        N = y.OPACITY,
        L = y.FILTER,
        D = y.WIDTH,
        P = y.HEIGHT,
        M = y.BACKGROUND_COLOR,
        j = y.BORDER_COLOR,
        F = y.COLOR,
        k = y.CHILDREN,
        X = y.IMMEDIATE_CHILDREN,
        G = y.SIBLINGS,
        U = y.PARENT,
        V = y.DISPLAY,
        W = y.WILL_CHANGE,
        B = y.AUTO,
        H = y.COMMA_DELIMITER,
        z = y.COLON_DELIMITER,
        Y = y.BAR_DELIMITER,
        K = y.RENDER_TRANSFORM,
        Q = y.RENDER_GENERAL,
        q = y.RENDER_STYLE,
        $ = y.RENDER_PLUGIN,
        Z = g.ActionTypeConsts,
        J = Z.TRANSFORM_MOVE,
        tt = Z.TRANSFORM_SCALE,
        et = Z.TRANSFORM_ROTATE,
        nt = Z.TRANSFORM_SKEW,
        rt = Z.STYLE_OPACITY,
        it = Z.STYLE_FILTER,
        ot = Z.STYLE_SIZE,
        at = Z.STYLE_BACKGROUND_COLOR,
        ut = Z.STYLE_BORDER,
        ct = Z.STYLE_TEXT_COLOR,
        st = Z.GENERAL_DISPLAY,
        lt = "OBJECT_VALUE",
        ft = function(t) {
            return t.trim()
        },
        dt = Object.freeze((r = {}, (0, c.default)(r, at, M), (0, c.default)(r, ut, j), (0, c.default)(r, ct, F), r)),
        pt = Object.freeze((i = {}, (0, c.default)(i, _.TRANSFORM_PREFIXED, w), (0, c.default)(i, M, I), (0, c.default)(i, N, N), (0, c.default)(i, L, L), (0, c.default)(i, D, D), (0, c.default)(i, P, P), i)),
        vt = {},
        ht = 1;
    var gt = 1;
    var Et = function(t, e) {
        return t === e
    };

    function mt(t) {
        var e = (0, u.default)(t);
        return "string" === e ? {
            id: t
        } : null != t && "object" === e ? {
            id: t.id,
            objectId: t.objectId,
            selector: t.selector,
            selectorGuids: t.selectorGuids,
            appliesTo: t.appliesTo,
            useEventTarget: t.useEventTarget
        } : {}
    }

    function _t(t) {
        var e = t.config,
            n = t.event,
            r = t.eventTarget,
            i = t.elementRoot,
            o = t.elementApi;
        if (!o) throw new Error("IX2 missing elementApi");
        var a = o.getValidDocument,
            u = o.getQuerySelector,
            c = o.queryDocument,
            s = o.getChildElements,
            l = o.getSiblingElements,
            f = o.matchSelector,
            d = o.elementContains,
            v = o.isSiblingNode,
            h = e.target;
        if (!h) return [];
        var E = mt(h),
            m = E.id,
            y = E.objectId,
            I = E.selector,
            w = E.selectorGuids,
            b = E.appliesTo,
            T = E.useEventTarget;
        if (y) return [vt[y] || (vt[y] = {})];
        if (b === g.EventAppliesTo.PAGE) {
            var O = a(m);
            return O ? [O] : []
        }
        var A, S, x, R = (0, p.default)(n, "action.config.affectedElements", {})[m || I] || {},
            C = Boolean(R.id || R.selector),
            N = n && u(mt(n.target));
        if (C ? (A = R.limitAffectedElements, S = N, x = u(R)) : S = x = u({
                id: m,
                selector: I,
                selectorGuids: w
            }), n && T) {
            var L = r && (x || !0 === T) ? [r] : c(N);
            if (x) {
                if (T === U) return c(x).filter(function(t) {
                    return L.some(function(e) {
                        return d(t, e)
                    })
                });
                if (T === k) return c(x).filter(function(t) {
                    return L.some(function(e) {
                        return d(e, t)
                    })
                });
                if (T === G) return c(x).filter(function(t) {
                    return L.some(function(e) {
                        return v(e, t)
                    })
                })
            }
            return L
        }
        return null == S || null == x ? [] : _.IS_BROWSER_ENV && i ? c(x).filter(function(t) {
            return i.contains(t)
        }) : A === k ? c(S, x) : A === X ? s(c(S)).filter(f(x)) : A === G ? l(c(S)).filter(f(x)) : c(x)
    }
    var yt = /px/,
        It = function(t, e) {
            return e.reduce(function(t, e) {
                return null == t[e.type] && (t[e.type] = Ot[e.type]), t
            }, t || {})
        };
    var wt = function(t, e) {
        return e && (t[e.type] = e.value || 0), t
    };

    function bt(t) {
        return /^TRANSFORM_/.test(t) ? K : /^STYLE_/.test(t) ? q : /^GENERAL_/.test(t) ? Q : /^PLUGIN_/.test(t) ? $ : void 0
    }
    e.getItemConfigByKey = function(t, e, n) {
        if ((0, m.isPluginType)(t)) return (0, m.getPluginConfig)(t)(n, e);
        switch (t) {
            case it:
                var r = (0, d.default)(n.filters, function(t) {
                    return t.type === e
                });
                return r ? r.value : 0;
            default:
                return n[e]
        }
    };
    var Tt = (o = {}, (0, c.default)(o, J, Object.freeze({
            xValue: 0,
            yValue: 0,
            zValue: 0
        })), (0, c.default)(o, tt, Object.freeze({
            xValue: 1,
            yValue: 1,
            zValue: 1
        })), (0, c.default)(o, et, Object.freeze({
            xValue: 0,
            yValue: 0,
            zValue: 0
        })), (0, c.default)(o, nt, Object.freeze({
            xValue: 0,
            yValue: 0
        })), o),
        Ot = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        }),
        At = function(t, e) {
            var n = (0, d.default)(e.filters, function(e) {
                return e.type === t
            });
            if (n && n.unit) return n.unit;
            switch (t) {
                case "blur":
                    return "px";
                case "hue-rotate":
                    return "deg";
                default:
                    return "%"
            }
        },
        St = Object.keys(Tt);
    var xt = /^rgb/,
        Rt = RegExp("rgba?".concat("\\(([^)]+)\\)"));

    function Ct(t, e, n) {
        if (_.IS_BROWSER_ENV) {
            var r = pt[e];
            if (r) {
                var i = n.getStyle,
                    o = n.setStyle,
                    a = i(t, W);
                if (a) {
                    var u = a.split(H).map(ft); - 1 === u.indexOf(r) && o(t, W, u.concat(r).join(H))
                } else o(t, W, r)
            }
        }
    }

    function Nt(t, e, n) {
        if (_.IS_BROWSER_ENV) {
            var r = pt[e];
            if (r) {
                var i = n.getStyle,
                    o = n.setStyle,
                    a = i(t, W);
                a && -1 !== a.indexOf(r) && o(t, W, a.split(H).map(ft).filter(function(t) {
                    return t !== r
                }).join(H))
            }
        }
    }

    function Lt(t) {
        var e = t.actionList,
            n = void 0 === e ? {} : e,
            r = t.event,
            i = t.elementApi,
            o = n.actionItemGroups,
            a = n.continuousParameterGroups;
        o && o.forEach(function(t) {
            Dt({
                actionGroup: t,
                event: r,
                elementApi: i
            })
        }), a && a.forEach(function(t) {
            t.continuousActionGroups.forEach(function(t) {
                Dt({
                    actionGroup: t,
                    event: r,
                    elementApi: i
                })
            })
        })
    }

    function Dt(t) {
        var e = t.actionGroup,
            n = t.event,
            r = t.elementApi;
        e.actionItems.forEach(function(t) {
            var e, i = t.actionTypeId,
                o = t.config;
            e = (0, m.isPluginType)(i) ? (0, m.clearPlugin)(i) : Pt({
                effect: Mt,
                actionTypeId: i,
                elementApi: r
            }), _t({
                config: o,
                event: n,
                elementApi: r
            }).forEach(e)
        })
    }
    var Pt = function(t) {
        var e = t.effect,
            n = t.actionTypeId,
            r = t.elementApi;
        return function(t) {
            switch (n) {
                case J:
                case tt:
                case et:
                case nt:
                    e(t, _.TRANSFORM_PREFIXED, r);
                    break;
                case it:
                    e(t, L, r);
                    break;
                case rt:
                    e(t, N, r);
                    break;
                case ot:
                    e(t, D, r), e(t, P, r);
                    break;
                case at:
                case ut:
                case ct:
                    e(t, dt[n], r);
                    break;
                case st:
                    e(t, V, r)
            }
        }
    };

    function Mt(t, e, n) {
        var r = n.setStyle;
        Nt(t, e, n), r(t, e, ""), e === _.TRANSFORM_PREFIXED && r(t, _.TRANSFORM_STYLE_PREFIXED, "")
    }

    function jt(t) {
        var e = 0,
            n = 0;
        return t.forEach(function(t, r) {
            var i = t.config,
                o = i.delay + i.duration;
            o >= e && (e = o, n = r)
        }), n
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return null == t || t != t ? e : t
    }
}, function(t, e, n) {
    var r = n(199),
        i = n(88),
        o = n(6),
        a = n(203),
        u = n(1);
    t.exports = function(t, e, n) {
        var c = u(t) ? r : a,
            s = arguments.length < 3;
        return c(t, o(e, 4), n, s, i)
    }
}, function(t, e) {
    t.exports = function(t, e, n, r) {
        var i = -1,
            o = null == t ? 0 : t.length;
        for (r && o && (n = t[++i]); ++i < o;) n = e(n, t[i], i, t);
        return n
    }
}, function(t, e, n) {
    var r = n(201)();
    t.exports = r
}, function(t, e) {
    t.exports = function(t) {
        return function(e, n, r) {
            for (var i = -1, o = Object(e), a = r(e), u = a.length; u--;) {
                var c = a[t ? u : ++i];
                if (!1 === n(o[c], c, o)) break
            }
            return e
        }
    }
}, function(t, e, n) {
    var r = n(11);
    t.exports = function(t, e) {
        return function(n, i) {
            if (null == n) return n;
            if (!r(n)) return t(n, i);
            for (var o = n.length, a = e ? o : -1, u = Object(n);
                (e ? a-- : ++a < o) && !1 !== i(u[a], a, u););
            return n
        }
    }
}, function(t, e) {
    t.exports = function(t, e, n, r, i) {
        return i(t, function(t, i, o) {
            n = r ? (r = !1, t) : e(n, t, i, o)
        }), n
    }
}, function(t, e, n) {
    var r = n(62)(n(205));
    t.exports = r
}, function(t, e, n) {
    var r = n(82),
        i = n(6),
        o = n(47),
        a = Math.max,
        u = Math.min;
    t.exports = function(t, e, n) {
        var c = null == t ? 0 : t.length;
        if (!c) return -1;
        var s = c - 1;
        return void 0 !== n && (s = o(n), s = n < 0 ? a(c + s, 0) : u(s, c - 1)), r(t, i(e, 3), s, !0)
    }
}, function(t, e) {
    t.exports = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = Object.prototype.hasOwnProperty;

    function i(t, e) {
        return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t != t && e != e
    }
    t.exports = function(t, e) {
        if (i(t, e)) return !0;
        if ("object" != typeof t || null === t || "object" != typeof e || null === e) return !1;
        var n = Object.keys(t),
            o = Object.keys(e);
        if (n.length !== o.length) return !1;
        for (var a = 0; a < n.length; a++)
            if (!r.call(e, n[a]) || !i(t[n[a]], e[n[a]])) return !1;
        return !0
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ixInstances = void 0;
    var r = n(3),
        i = n(9),
        o = n(15),
        a = r.IX2EngineActionTypes,
        u = a.IX2_RAW_DATA_IMPORTED,
        c = a.IX2_SESSION_STOPPED,
        s = a.IX2_INSTANCE_ADDED,
        l = a.IX2_INSTANCE_STARTED,
        f = a.IX2_INSTANCE_REMOVED,
        d = a.IX2_ANIMATION_FRAME_CHANGED,
        p = i.IX2EasingUtils,
        v = p.optimizeFloat,
        h = p.applyEasing,
        g = p.createBezierEasing,
        E = r.IX2EngineConstants.RENDER_GENERAL,
        m = i.IX2VanillaUtils,
        _ = m.getItemConfigByKey,
        y = m.getRenderType,
        I = m.getStyleProp,
        w = function(t, e) {
            var n = t.position,
                r = t.parameterId,
                i = t.actionGroups,
                a = t.destinationKeys,
                u = t.smoothing,
                c = t.restingValue,
                s = t.actionTypeId,
                l = t.customEasingFn,
                f = e.payload.parameters,
                d = Math.max(1 - u, .01),
                p = f[r];
            null == p && (d = 1, p = c);
            var g, E, m, y, I = Math.max(p, 0) || 0,
                w = v(I - n),
                b = v(n + w * d),
                T = 100 * b;
            if (b === n && t.current) return t;
            for (var O = 0, A = i.length; O < A; O++) {
                var S = i[O],
                    x = S.keyframe,
                    R = S.actionItems;
                if (0 === O && (g = R[0]), T >= x) {
                    g = R[0];
                    var C = i[O + 1],
                        N = C && T !== x;
                    E = N ? C.actionItems[0] : null, N && (m = x / 100, y = (C.keyframe - x) / 100)
                }
            }
            var L = {};
            if (g && !E)
                for (var D = 0, P = a.length; D < P; D++) {
                    var M = a[D];
                    L[M] = _(s, M, g.config)
                } else if (g && E && void 0 !== m && void 0 !== y)
                    for (var j = (b - m) / y, F = g.config.easing, k = h(F, j, l), X = 0, G = a.length; X < G; X++) {
                        var U = a[X],
                            V = _(s, U, g.config),
                            W = (_(s, U, E.config) - V) * k + V;
                        L[U] = W
                    }
            return (0, o.merge)(t, {
                position: b,
                current: L
            })
        },
        b = function(t, e) {
            var n = t,
                r = n.active,
                i = n.origin,
                a = n.start,
                u = n.immediate,
                c = n.renderType,
                s = n.verbose,
                l = n.actionItem,
                f = n.destination,
                d = n.destinationKeys,
                p = n.pluginDuration,
                g = n.instanceDelay,
                m = n.customEasingFn,
                _ = l.config.easing,
                y = l.config,
                I = y.duration,
                w = y.delay;
            null != p && (I = p), w = null != g ? g : w, c === E ? I = 0 : u && (I = w = 0);
            var b = e.payload.now;
            if (r && i) {
                var T = b - (a + w);
                if (s) {
                    var O = b - a,
                        A = I + w,
                        S = v(Math.min(Math.max(0, O / A), 1));
                    t = (0, o.set)(t, "verboseTimeElapsed", A * S)
                }
                if (T < 0) return t;
                var x = v(Math.min(Math.max(0, T / I), 1)),
                    R = h(_, x, m),
                    C = {},
                    N = null;
                return d.length && (N = d.reduce(function(t, e) {
                    var n = f[e],
                        r = parseFloat(i[e]) || 0,
                        o = (parseFloat(n) - r) * R + r;
                    return t[e] = o, t
                }, {})), C.current = N, C.position = x, 1 === x && (C.active = !1, C.complete = !0), (0, o.merge)(t, C)
            }
            return t
        };
    e.ixInstances = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
            e = arguments.length > 1 ? arguments[1] : void 0;
        switch (e.type) {
            case u:
                return e.payload.ixInstances || Object.freeze({});
            case c:
                return Object.freeze({});
            case s:
                var n = e.payload,
                    r = n.instanceId,
                    i = n.elementId,
                    a = n.actionItem,
                    p = n.eventId,
                    v = n.eventTarget,
                    h = n.eventStateKey,
                    E = n.actionListId,
                    m = n.groupIndex,
                    _ = n.isCarrier,
                    T = n.origin,
                    O = n.destination,
                    A = n.immediate,
                    S = n.verbose,
                    x = n.continuous,
                    R = n.parameterId,
                    C = n.actionGroups,
                    N = n.smoothing,
                    L = n.restingValue,
                    D = n.pluginInstance,
                    P = n.pluginDuration,
                    M = n.instanceDelay,
                    j = a.actionTypeId,
                    F = y(j),
                    k = I(F, j),
                    X = Object.keys(O).filter(function(t) {
                        return null != O[t]
                    }),
                    G = a.config.easing;
                return (0, o.set)(t, r, {
                    id: r,
                    elementId: i,
                    active: !1,
                    position: 0,
                    start: 0,
                    origin: T,
                    destination: O,
                    destinationKeys: X,
                    immediate: A,
                    verbose: S,
                    current: null,
                    actionItem: a,
                    actionTypeId: j,
                    eventId: p,
                    eventTarget: v,
                    eventStateKey: h,
                    actionListId: E,
                    groupIndex: m,
                    renderType: F,
                    isCarrier: _,
                    styleProp: k,
                    continuous: x,
                    parameterId: R,
                    actionGroups: C,
                    smoothing: N,
                    restingValue: L,
                    pluginInstance: D,
                    pluginDuration: P,
                    instanceDelay: M,
                    customEasingFn: Array.isArray(G) && 4 === G.length ? g(G) : void 0
                });
            case l:
                var U = e.payload,
                    V = U.instanceId,
                    W = U.time;
                return (0, o.mergeIn)(t, [V], {
                    active: !0,
                    complete: !1,
                    start: W
                });
            case f:
                var B = e.payload.instanceId;
                if (!t[B]) return t;
                for (var H = {}, z = Object.keys(t), Y = z.length, K = 0; K < Y; K++) {
                    var Q = z[K];
                    Q !== B && (H[Q] = t[Q])
                }
                return H;
            case d:
                for (var q = t, $ = Object.keys(t), Z = $.length, J = 0; J < Z; J++) {
                    var tt = $[J],
                        et = t[tt],
                        nt = et.continuous ? w : b;
                    q = (0, o.set)(q, tt, nt(et, e))
                }
                return q;
            default:
                return t
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ixParameters = void 0;
    var r = n(3).IX2EngineActionTypes,
        i = r.IX2_RAW_DATA_IMPORTED,
        o = r.IX2_SESSION_STOPPED,
        a = r.IX2_PARAMETER_CHANGED;
    e.ixParameters = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = arguments.length > 1 ? arguments[1] : void 0;
        switch (e.type) {
            case i:
                return e.payload.ixParameters || {};
            case o:
                return {};
            case a:
                var n = e.payload,
                    r = n.key,
                    u = n.value;
                return t[r] = u, t;
            default:
                return t
        }
    }
}, function(t, e) {
    t.exports = function(t, e) {
        if (null == t) return {};
        var n, r, i = {},
            o = Object.keys(t);
        for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]);
        return i
    }
}, function(t, e, n) {
    var r = n(41),
        i = n(43),
        o = n(11),
        a = n(212),
        u = n(213),
        c = "[object Map]",
        s = "[object Set]";
    t.exports = function(t) {
        if (null == t) return 0;
        if (o(t)) return a(t) ? u(t) : t.length;
        var e = i(t);
        return e == c || e == s ? t.size : r(t).length
    }
}, function(t, e, n) {
    var r = n(10),
        i = n(1),
        o = n(8),
        a = "[object String]";
    t.exports = function(t) {
        return "string" == typeof t || !i(t) && o(t) && r(t) == a
    }
}, function(t, e, n) {
    var r = n(214),
        i = n(215),
        o = n(216);
    t.exports = function(t) {
        return i(t) ? o(t) : r(t)
    }
}, function(t, e, n) {
    var r = n(81)("length");
    t.exports = r
}, function(t, e) {
    var n = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    t.exports = function(t) {
        return n.test(t)
    }
}, function(t, e) {
    var n = "[\\ud800-\\udfff]",
        r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
        i = "\\ud83c[\\udffb-\\udfff]",
        o = "[^\\ud800-\\udfff]",
        a = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        u = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        c = "(?:" + r + "|" + i + ")" + "?",
        s = "[\\ufe0e\\ufe0f]?" + c + ("(?:\\u200d(?:" + [o, a, u].join("|") + ")[\\ufe0e\\ufe0f]?" + c + ")*"),
        l = "(?:" + [o + r + "?", r, a, u, n].join("|") + ")",
        f = RegExp(i + "(?=" + i + ")|" + l + s, "g");
    t.exports = function(t) {
        for (var e = f.lastIndex = 0; f.test(t);) ++e;
        return e
    }
}, function(t, e, n) {
    var r = n(6),
        i = n(218),
        o = n(219);
    t.exports = function(t, e) {
        return o(t, i(r(e)))
    }
}, function(t, e) {
    var n = "Expected a function";
    t.exports = function(t) {
        if ("function" != typeof t) throw new TypeError(n);
        return function() {
            var e = arguments;
            switch (e.length) {
                case 0:
                    return !t.call(this);
                case 1:
                    return !t.call(this, e[0]);
                case 2:
                    return !t.call(this, e[0], e[1]);
                case 3:
                    return !t.call(this, e[0], e[1], e[2])
            }
            return !t.apply(this, e)
        }
    }
}, function(t, e, n) {
    var r = n(80),
        i = n(6),
        o = n(220),
        a = n(223);
    t.exports = function(t, e) {
        if (null == t) return {};
        var n = r(a(t), function(t) {
            return [t]
        });
        return e = i(e), o(t, n, function(t, n) {
            return e(t, n[0])
        })
    }
}, function(t, e, n) {
    var r = n(44),
        i = n(221),
        o = n(27);
    t.exports = function(t, e, n) {
        for (var a = -1, u = e.length, c = {}; ++a < u;) {
            var s = e[a],
                l = r(t, s);
            n(l, s) && i(c, o(s, t), l)
        }
        return c
    }
}, function(t, e, n) {
    var r = n(222),
        i = n(27),
        o = n(38),
        a = n(5),
        u = n(17);
    t.exports = function(t, e, n, c) {
        if (!a(t)) return t;
        for (var s = -1, l = (e = i(e, t)).length, f = l - 1, d = t; null != d && ++s < l;) {
            var p = u(e[s]),
                v = n;
            if (s != f) {
                var h = d[p];
                void 0 === (v = c ? c(h, p, d) : void 0) && (v = a(h) ? h : o(e[s + 1]) ? [] : {})
            }
            r(d, p, v), d = d[p]
        }
        return t
    }
}, function(t, e, n) {
    var r = n(92),
        i = n(33),
        o = Object.prototype.hasOwnProperty;
    t.exports = function(t, e, n) {
        var a = t[e];
        o.call(t, e) && i(a, n) && (void 0 !== n || e in t) || r(t, e, n)
    }
}, function(t, e, n) {
    var r = n(69),
        i = n(224),
        o = n(226);
    t.exports = function(t) {
        return r(t, o, i)
    }
}, function(t, e, n) {
    var r = n(36),
        i = n(225),
        o = n(70),
        a = n(71),
        u = Object.getOwnPropertySymbols ? function(t) {
            for (var e = []; t;) r(e, o(t)), t = i(t);
            return e
        } : a;
    t.exports = u
}, function(t, e, n) {
    var r = n(74)(Object.getPrototypeOf, Object);
    t.exports = r
}, function(t, e, n) {
    var r = n(72),
        i = n(227),
        o = n(11);
    t.exports = function(t) {
        return o(t) ? r(t, !0) : i(t)
    }
}, function(t, e, n) {
    var r = n(5),
        i = n(42),
        o = n(228),
        a = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        if (!r(t)) return o(t);
        var e = i(t),
            n = [];
        for (var u in t)("constructor" != u || !e && a.call(t, u)) && n.push(u);
        return n
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = [];
        if (null != t)
            for (var n in Object(t)) e.push(n);
        return e
    }
}, function(t, e, n) {
    var r = n(41),
        i = n(43),
        o = n(25),
        a = n(1),
        u = n(11),
        c = n(37),
        s = n(42),
        l = n(39),
        f = "[object Map]",
        d = "[object Set]",
        p = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        if (null == t) return !0;
        if (u(t) && (a(t) || "string" == typeof t || "function" == typeof t.splice || c(t) || l(t) || o(t))) return !t.length;
        var e = i(t);
        if (e == f || e == d) return !t.size;
        if (s(t)) return !r(t).length;
        for (var n in t)
            if (p.call(t, n)) return !1;
        return !0
    }
}, function(t, e, n) {
    var r = n(92),
        i = n(89),
        o = n(6);
    t.exports = function(t, e) {
        var n = {};
        return e = o(e, 3), i(t, function(t, i, o) {
            r(n, i, e(t, i, o))
        }), n
    }
}, function(t, e, n) {
    var r = n(232),
        i = n(88),
        o = n(233),
        a = n(1);
    t.exports = function(t, e) {
        return (a(t) ? r : i)(t, o(e))
    }
}, function(t, e) {
    t.exports = function(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t););
        return t
    }
}, function(t, e, n) {
    var r = n(46);
    t.exports = function(t) {
        return "function" == typeof t ? t : r
    }
}, function(t, e, n) {
    var r = n(94),
        i = n(79),
        o = n(47),
        a = n(78);
    t.exports = function(t, e, n) {
        t = a(t), e = i(e);
        var u = t.length,
            c = n = void 0 === n ? u : r(o(n), 0, u);
        return (n -= e.length) >= 0 && t.slice(n, c) == e
    }
}, function(t, e, n) {
    var r = n(236),
        i = n(5),
        o = "Expected a function";
    t.exports = function(t, e, n) {
        var a = !0,
            u = !0;
        if ("function" != typeof t) throw new TypeError(o);
        return i(n) && (a = "leading" in n ? !!n.leading : a, u = "trailing" in n ? !!n.trailing : u), r(t, e, {
            leading: a,
            maxWait: e,
            trailing: u
        })
    }
}, function(t, e, n) {
    var r = n(5),
        i = n(237),
        o = n(48),
        a = "Expected a function",
        u = Math.max,
        c = Math.min;
    t.exports = function(t, e, n) {
        var s, l, f, d, p, v, h = 0,
            g = !1,
            E = !1,
            m = !0;
        if ("function" != typeof t) throw new TypeError(a);

        function _(e) {
            var n = s,
                r = l;
            return s = l = void 0, h = e, d = t.apply(r, n)
        }

        function y(t) {
            var n = t - v;
            return void 0 === v || n >= e || n < 0 || E && t - h >= f
        }

        function I() {
            var t = i();
            if (y(t)) return w(t);
            p = setTimeout(I, function(t) {
                var n = e - (t - v);
                return E ? c(n, f - (t - h)) : n
            }(t))
        }

        function w(t) {
            return p = void 0, m && s ? _(t) : (s = l = void 0, d)
        }

        function b() {
            var t = i(),
                n = y(t);
            if (s = arguments, l = this, v = t, n) {
                if (void 0 === p) return function(t) {
                    return h = t, p = setTimeout(I, e), g ? _(t) : d
                }(v);
                if (E) return clearTimeout(p), p = setTimeout(I, e), _(v)
            }
            return void 0 === p && (p = setTimeout(I, e)), d
        }
        return e = o(e) || 0, r(n) && (g = !!n.leading, f = (E = "maxWait" in n) ? u(o(n.maxWait) || 0, e) : f, m = "trailing" in n ? !!n.trailing : m), b.cancel = function() {
            void 0 !== p && clearTimeout(p), h = 0, s = v = l = p = void 0
        }, b.flush = function() {
            return void 0 === p ? d : w(i())
        }, b
    }
}, function(t, e, n) {
    var r = n(4);
    t.exports = function() {
        return r.Date.now()
    }
}, function(t, e, n) {
    "use strict";
    var r = n(0)(n(12));
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.setStyle = function(t, e, n) {
        t.style[e] = n
    }, e.getStyle = function(t, e) {
        return t.style[e]
    }, e.getProperty = function(t, e) {
        return t[e]
    }, e.matchSelector = function(t) {
        return function(e) {
            return e[a](t)
        }
    }, e.getQuerySelector = function(t) {
        var e = t.id,
            n = t.selector;
        if (e) {
            var r = e;
            if (-1 !== e.indexOf(c)) {
                var i = e.split(c),
                    o = i[0];
                if (r = i[1], o !== document.documentElement.getAttribute(f)) return null
            }
            return '[data-w-id^="'.concat(r, '"]')
        }
        return n
    }, e.getValidDocument = function(t) {
        if (null == t || t === document.documentElement.getAttribute(f)) return document;
        return null
    }, e.queryDocument = function(t, e) {
        return Array.prototype.slice.call(document.querySelectorAll(e ? t + " " + e : t))
    }, e.elementContains = function(t, e) {
        return t.contains(e)
    }, e.isSiblingNode = function(t, e) {
        return t !== e && t.parentNode === e.parentNode
    }, e.getChildElements = function(t) {
        for (var e = [], n = 0, r = (t || []).length; n < r; n++) {
            var i = t[n].children,
                o = i.length;
            if (o)
                for (var a = 0; a < o; a++) e.push(i[a])
        }
        return e
    }, e.getSiblingElements = function() {
        for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = [], n = [], r = 0, i = t.length; r < i; r++) {
            var o = t[r].parentNode;
            if (o && o.children && o.children.length && -1 === n.indexOf(o)) {
                n.push(o);
                for (var a = o.firstElementChild; null != a;) - 1 === t.indexOf(a) && e.push(a), a = a.nextElementSibling
            }
        }
        return e
    }, e.getRefType = function(t) {
        if (null != t && "object" == (0, r.default)(t)) return t instanceof Element ? s : l;
        return null
    }, e.getClosestElement = void 0;
    var i = n(9),
        o = n(3),
        a = i.IX2BrowserSupport.ELEMENT_MATCHES,
        u = o.IX2EngineConstants,
        c = u.IX2_ID_DELIMITER,
        s = u.HTML_ELEMENT,
        l = u.PLAIN_OBJECT,
        f = u.WF_PAGE;
    var d = Element.prototype.closest ? function(t, e) {
        return document.documentElement.contains(t) ? t.closest(e) : null
    } : function(t, e) {
        if (!document.documentElement.contains(t)) return null;
        var n = t;
        do {
            if (n[a] && n[a](e)) return n;
            n = n.parentNode
        } while (null != n);
        return null
    };
    e.getClosestElement = d
}, function(t, e, n) {
    "use strict";
    var r, i = n(0),
        o = i(n(18)),
        a = i(n(12)),
        u = n(0);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var c, s, l, f = u(n(19)),
        d = u(n(240)),
        p = u(n(26)),
        v = u(n(259)),
        h = n(3),
        g = n(91),
        E = n(49),
        m = n(9),
        _ = h.EventTypeConsts,
        y = _.MOUSE_CLICK,
        I = _.MOUSE_SECOND_CLICK,
        w = _.MOUSE_DOWN,
        b = _.MOUSE_UP,
        T = _.MOUSE_OVER,
        O = _.MOUSE_OUT,
        A = _.DROPDOWN_CLOSE,
        S = _.DROPDOWN_OPEN,
        x = _.SLIDER_ACTIVE,
        R = _.SLIDER_INACTIVE,
        C = _.TAB_ACTIVE,
        N = _.TAB_INACTIVE,
        L = _.NAVBAR_CLOSE,
        D = _.NAVBAR_OPEN,
        P = _.MOUSE_MOVE,
        M = _.PAGE_SCROLL_DOWN,
        j = _.SCROLL_INTO_VIEW,
        F = _.SCROLL_OUT_OF_VIEW,
        k = _.PAGE_SCROLL_UP,
        X = _.SCROLLING_IN_VIEW,
        G = _.PAGE_FINISH,
        U = _.ECOMMERCE_CART_CLOSE,
        V = _.ECOMMERCE_CART_OPEN,
        W = _.PAGE_START,
        B = _.PAGE_SCROLL,
        H = "COMPONENT_ACTIVE",
        z = "COMPONENT_INACTIVE",
        Y = h.IX2EngineConstants.COLON_DELIMITER,
        K = m.IX2VanillaUtils.getNamespacedParameterId,
        Q = function(t) {
            return function(e) {
                return !("object" !== (0, a.default)(e) || !t(e)) || e
            }
        },
        q = Q(function(t) {
            return t.element === t.nativeEvent.target
        }),
        $ = Q(function(t) {
            var e = t.element,
                n = t.nativeEvent;
            return e.contains(n.target)
        }),
        Z = (0, d.default)([q, $]),
        J = function(t, e) {
            if (e) {
                var n = t.getState().ixData.events[e];
                if (n && !at[n.eventTypeId]) return n
            }
            return null
        },
        tt = function(t, e) {
            var n = t.store,
                r = t.event,
                i = t.element,
                o = t.eventStateKey,
                a = r.action,
                u = r.id,
                c = a.config,
                s = c.actionListId,
                l = c.autoStopEventId,
                f = J(n, l);
            return f && (0, g.stopActionGroup)({
                store: n,
                eventId: l,
                eventTarget: i,
                eventStateKey: l + Y + o.split(Y)[1],
                actionListId: (0, p.default)(f, "action.config.actionListId")
            }), (0, g.stopActionGroup)({
                store: n,
                eventId: u,
                eventTarget: i,
                eventStateKey: o,
                actionListId: s
            }), (0, g.startActionGroup)({
                store: n,
                eventId: u,
                eventTarget: i,
                eventStateKey: o,
                actionListId: s
            }), e
        },
        et = function(t, e) {
            return function(n, r) {
                return !0 === t(n, r) ? e(n, r) : r
            }
        },
        nt = {
            handler: et(Z, tt)
        },
        rt = (0, f.default)({}, nt, {
            types: [H, z].join(" ")
        }),
        it = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }],
        ot = {
            types: it
        },
        at = {
            PAGE_START: W,
            PAGE_FINISH: G
        },
        ut = (c = void 0 !== window.pageXOffset, s = "CSS1Compat" === document.compatMode ? document.documentElement : document.body, function() {
            return {
                scrollLeft: c ? window.pageXOffset : s.scrollLeft,
                scrollTop: c ? window.pageYOffset : s.scrollTop,
                stiffScrollTop: (0, v.default)(c ? window.pageYOffset : s.scrollTop, 0, s.scrollHeight - window.innerHeight),
                scrollWidth: s.scrollWidth,
                scrollHeight: s.scrollHeight,
                clientWidth: s.clientWidth,
                clientHeight: s.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            }
        }),
        ct = function(t) {
            var e = t.element,
                n = t.nativeEvent,
                r = n.type,
                i = n.target,
                o = n.relatedTarget,
                a = e.contains(i);
            if ("mouseover" === r && a) return !0;
            var u = e.contains(o);
            return !("mouseout" !== r || !a || !u)
        },
        st = function(t) {
            var e, n, r = t.element,
                i = t.event.config,
                o = ut(),
                a = o.clientWidth,
                u = o.clientHeight,
                c = i.scrollOffsetValue,
                s = "PX" === i.scrollOffsetUnit ? c : u * (c || 0) / 100;
            return e = r.getBoundingClientRect(), n = {
                left: 0,
                top: s,
                right: a,
                bottom: u - s
            }, !(e.left > n.right || e.right < n.left || e.top > n.bottom || e.bottom < n.top)
        },
        lt = function(t) {
            return function(e, n) {
                var r = e.nativeEvent.type,
                    i = -1 !== [H, z].indexOf(r) ? r === H : n.isActive,
                    o = (0, f.default)({}, n, {
                        isActive: i
                    });
                return n && o.isActive === n.isActive ? o : t(e, o) || o
            }
        },
        ft = function(t) {
            return function(e, n) {
                var r = {
                    elementHovered: ct(e)
                };
                return (n ? r.elementHovered !== n.elementHovered : r.elementHovered) && t(e, r) || r
            }
        },
        dt = function(t) {
            return function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = ut(),
                    i = r.stiffScrollTop,
                    o = r.scrollHeight,
                    a = r.innerHeight,
                    u = e.event,
                    c = u.config,
                    s = u.eventTypeId,
                    l = c.scrollOffsetValue,
                    d = "PX" === c.scrollOffsetUnit,
                    p = o - a,
                    v = Number((i / p).toFixed(2));
                if (n && n.percentTop === v) return n;
                var h, g, E = (d ? l : a * (l || 0) / 100) / p,
                    m = 0;
                n && (h = v > n.percentTop, m = (g = n.scrollingDown !== h) ? v : n.anchorTop);
                var _ = s === M ? v >= m + E : v <= m - E,
                    y = (0, f.default)({}, n, {
                        percentTop: v,
                        inBounds: _,
                        anchorTop: m,
                        scrollingDown: h
                    });
                return n && _ && (g || y.inBounds !== n.inBounds) && t(e, y) || y
            }
        },
        pt = function(t) {
            return function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        clickCount: 0
                    },
                    r = {
                        clickCount: n.clickCount % 2 + 1
                    };
                return r.clickCount !== n.clickCount && t(e, r) || r
            }
        },
        vt = function() {
            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            return (0, f.default)({}, rt, {
                handler: et(t ? Z : q, lt(function(t, e) {
                    return e.isActive ? nt.handler(t, e) : e
                }))
            })
        },
        ht = function() {
            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            return (0, f.default)({}, rt, {
                handler: et(t ? Z : q, lt(function(t, e) {
                    return e.isActive ? e : nt.handler(t, e)
                }))
            })
        },
        gt = (0, f.default)({}, ot, {
            handler: (l = function(t, e) {
                var n = e.elementVisible,
                    r = t.event;
                return !t.store.getState().ixData.events[r.action.config.autoStopEventId] && e.triggered ? e : r.eventTypeId === j === n ? (tt(t), (0, f.default)({}, e, {
                    triggered: !0
                })) : e
            }, function(t, e) {
                var n = (0, f.default)({}, e, {
                    elementVisible: st(t)
                });
                return (e ? n.elementVisible !== e.elementVisible : n.elementVisible) && l(t, n) || n
            })
        }),
        Et = (r = {}, (0, o.default)(r, x, vt()), (0, o.default)(r, R, ht()), (0, o.default)(r, S, vt()), (0, o.default)(r, A, ht()), (0, o.default)(r, D, vt(!1)), (0, o.default)(r, L, ht(!1)), (0, o.default)(r, C, vt()), (0, o.default)(r, N, ht()), (0, o.default)(r, V, {
            types: "ecommerce-cart-open",
            handler: et(Z, tt)
        }), (0, o.default)(r, U, {
            types: "ecommerce-cart-close",
            handler: et(Z, tt)
        }), (0, o.default)(r, y, {
            types: "click",
            handler: et(Z, pt(function(t, e) {
                var n, r, i, o = e.clickCount;
                r = (n = t).store, i = n.event.action.config.autoStopEventId, Boolean(J(r, i)) ? 1 === o && tt(t) : tt(t)
            }))
        }), (0, o.default)(r, I, {
            types: "click",
            handler: et(Z, pt(function(t, e) {
                2 === e.clickCount && tt(t)
            }))
        }), (0, o.default)(r, w, (0, f.default)({}, nt, {
            types: "mousedown"
        })), (0, o.default)(r, b, (0, f.default)({}, nt, {
            types: "mouseup"
        })), (0, o.default)(r, T, {
            types: "mouseover mouseout",
            handler: et(Z, ft(function(t, e) {
                e.elementHovered && tt(t)
            }))
        }), (0, o.default)(r, O, {
            types: "mouseover mouseout",
            handler: et(Z, ft(function(t, e) {
                e.elementHovered || tt(t)
            }))
        }), (0, o.default)(r, P, {
            types: "mousemove mouseout scroll",
            handler: function(t) {
                var e = t.store,
                    n = t.element,
                    r = t.eventConfig,
                    i = t.nativeEvent,
                    o = t.eventStateKey,
                    a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0
                    },
                    u = r.basedOn,
                    c = r.selectedAxis,
                    s = r.continuousParameterGroupId,
                    l = r.reverse,
                    f = r.restingState,
                    d = void 0 === f ? 0 : f,
                    p = i.clientX,
                    v = void 0 === p ? a.clientX : p,
                    g = i.clientY,
                    m = void 0 === g ? a.clientY : g,
                    _ = i.pageX,
                    y = void 0 === _ ? a.pageX : _,
                    I = i.pageY,
                    w = void 0 === I ? a.pageY : I,
                    b = "X_AXIS" === c,
                    T = "mouseout" === i.type,
                    O = d / 100,
                    A = s,
                    S = !1;
                switch (u) {
                    case h.EventBasedOn.VIEWPORT:
                        O = b ? Math.min(v, window.innerWidth) / window.innerWidth : Math.min(m, window.innerHeight) / window.innerHeight;
                        break;
                    case h.EventBasedOn.PAGE:
                        var x = ut(),
                            R = x.scrollLeft,
                            C = x.scrollTop,
                            N = x.scrollWidth,
                            L = x.scrollHeight;
                        O = b ? Math.min(R + y, N) / N : Math.min(C + w, L) / L;
                        break;
                    case h.EventBasedOn.ELEMENT:
                    default:
                        A = K(o, s);
                        var D = 0 === i.type.indexOf("mouse");
                        if (D && !0 !== Z({
                                element: n,
                                nativeEvent: i
                            })) break;
                        var P = n.getBoundingClientRect(),
                            M = P.left,
                            j = P.top,
                            F = P.width,
                            k = P.height;
                        if (!D && ! function(t, e) {
                                return t.left > e.left && t.left < e.right && t.top > e.top && t.top < e.bottom
                            }({
                                left: v,
                                top: m
                            }, P)) break;
                        S = !0, O = b ? (v - M) / F : (m - j) / k
                }
                return T && (O > .95 || O < .05) && (O = Math.round(O)), (u !== h.EventBasedOn.ELEMENT || S || S !== a.elementHovered) && (O = l ? 1 - O : O, e.dispatch((0, E.parameterChanged)(A, O))), {
                    elementHovered: S,
                    clientX: v,
                    clientY: m,
                    pageX: y,
                    pageY: w
                }
            }
        }), (0, o.default)(r, B, {
            types: it,
            handler: function(t) {
                var e = t.store,
                    n = t.eventConfig,
                    r = n.continuousParameterGroupId,
                    i = n.reverse,
                    o = ut(),
                    a = o.scrollTop / (o.scrollHeight - o.clientHeight);
                a = i ? 1 - a : a, e.dispatch((0, E.parameterChanged)(r, a))
            }
        }), (0, o.default)(r, X, {
            types: it,
            handler: function(t) {
                var e = t.element,
                    n = t.store,
                    r = t.eventConfig,
                    i = t.eventStateKey,
                    o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        scrollPercent: 0
                    },
                    a = ut(),
                    u = a.scrollLeft,
                    c = a.scrollTop,
                    s = a.scrollWidth,
                    l = a.scrollHeight,
                    f = a.clientHeight,
                    d = r.basedOn,
                    p = r.selectedAxis,
                    v = r.continuousParameterGroupId,
                    g = r.startsEntering,
                    m = r.startsExiting,
                    _ = r.addEndOffset,
                    y = r.addStartOffset,
                    I = r.addOffsetValue,
                    w = void 0 === I ? 0 : I,
                    b = r.endOffsetValue,
                    T = void 0 === b ? 0 : b,
                    O = "X_AXIS" === p;
                if (d === h.EventBasedOn.VIEWPORT) {
                    var A = O ? u / s : c / l;
                    return A !== o.scrollPercent && n.dispatch((0, E.parameterChanged)(v, A)), {
                        scrollPercent: A
                    }
                }
                var S = K(i, v),
                    x = e.getBoundingClientRect(),
                    R = (y ? w : 0) / 100,
                    C = (_ ? T : 0) / 100;
                R = g ? R : 1 - R, C = m ? C : 1 - C;
                var N = x.top + Math.min(x.height * R, f),
                    L = x.top + x.height * C - N,
                    D = Math.min(f + L, l),
                    P = Math.min(Math.max(0, f - N), D) / D;
                return P !== o.scrollPercent && n.dispatch((0, E.parameterChanged)(S, P)), {
                    scrollPercent: P
                }
            }
        }), (0, o.default)(r, j, gt), (0, o.default)(r, F, gt), (0, o.default)(r, M, (0, f.default)({}, ot, {
            handler: dt(function(t, e) {
                e.scrollingDown && tt(t)
            })
        })), (0, o.default)(r, k, (0, f.default)({}, ot, {
            handler: dt(function(t, e) {
                e.scrollingDown || tt(t)
            })
        })), (0, o.default)(r, G, {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: et(q, function(t) {
                return function(e, n) {
                    var r = {
                        finished: "complete" === document.readyState
                    };
                    return !r.finished || n && n.finshed || t(e), r
                }
            }(tt))
        }), (0, o.default)(r, W, {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: et(q, function(t) {
                return function(e, n) {
                    return n || t(e), {
                        started: !0
                    }
                }
            }(tt))
        }), r);
    e.default = Et
}, function(t, e, n) {
    var r = n(241)();
    t.exports = r
}, function(t, e, n) {
    var r = n(50),
        i = n(242),
        o = n(96),
        a = n(97),
        u = n(1),
        c = n(255),
        s = "Expected a function",
        l = 8,
        f = 32,
        d = 128,
        p = 256;
    t.exports = function(t) {
        return i(function(e) {
            var n = e.length,
                i = n,
                v = r.prototype.thru;
            for (t && e.reverse(); i--;) {
                var h = e[i];
                if ("function" != typeof h) throw new TypeError(s);
                if (v && !g && "wrapper" == a(h)) var g = new r([], !0)
            }
            for (i = g ? i : n; ++i < n;) {
                h = e[i];
                var E = a(h),
                    m = "wrapper" == E ? o(h) : void 0;
                g = m && c(m[0]) && m[1] == (d | l | f | p) && !m[4].length && 1 == m[9] ? g[a(m[0])].apply(g, m[3]) : 1 == h.length && c(h) ? g[E]() : g.thru(h)
            }
            return function() {
                var t = arguments,
                    r = t[0];
                if (g && 1 == t.length && u(r)) return g.plant(r).value();
                for (var i = 0, o = n ? e[i].apply(this, t) : r; ++i < n;) o = e[i].call(this, o);
                return o
            }
        })
    }
}, function(t, e, n) {
    var r = n(243),
        i = n(246),
        o = n(248);
    t.exports = function(t) {
        return o(i(t, void 0, r), t + "")
    }
}, function(t, e, n) {
    var r = n(244);
    t.exports = function(t) {
        return null != t && t.length ? r(t, 1) : []
    }
}, function(t, e, n) {
    var r = n(36),
        i = n(245);
    t.exports = function t(e, n, o, a, u) {
        var c = -1,
            s = e.length;
        for (o || (o = i), u || (u = []); ++c < s;) {
            var l = e[c];
            n > 0 && o(l) ? n > 1 ? t(l, n - 1, o, a, u) : r(u, l) : a || (u[u.length] = l)
        }
        return u
    }
}, function(t, e, n) {
    var r = n(16),
        i = n(25),
        o = n(1),
        a = r ? r.isConcatSpreadable : void 0;
    t.exports = function(t) {
        return o(t) || i(t) || !!(a && t && t[a])
    }
}, function(t, e, n) {
    var r = n(247),
        i = Math.max;
    t.exports = function(t, e, n) {
        return e = i(void 0 === e ? t.length - 1 : e, 0),
            function() {
                for (var o = arguments, a = -1, u = i(o.length - e, 0), c = Array(u); ++a < u;) c[a] = o[e + a];
                a = -1;
                for (var s = Array(e + 1); ++a < e;) s[a] = o[a];
                return s[e] = n(c), r(t, this, s)
            }
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        switch (n.length) {
            case 0:
                return t.call(e);
            case 1:
                return t.call(e, n[0]);
            case 2:
                return t.call(e, n[0], n[1]);
            case 3:
                return t.call(e, n[0], n[1], n[2])
        }
        return t.apply(e, n)
    }
}, function(t, e, n) {
    var r = n(249),
        i = n(251)(r);
    t.exports = i
}, function(t, e, n) {
    var r = n(250),
        i = n(93),
        o = n(46),
        a = i ? function(t, e) {
            return i(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: r(e),
                writable: !0
            })
        } : o;
    t.exports = a
}, function(t, e) {
    t.exports = function(t) {
        return function() {
            return t
        }
    }
}, function(t, e) {
    var n = 800,
        r = 16,
        i = Date.now;
    t.exports = function(t) {
        var e = 0,
            o = 0;
        return function() {
            var a = i(),
                u = r - (a - o);
            if (o = a, u > 0) {
                if (++e >= n) return arguments[0]
            } else e = 0;
            return t.apply(void 0, arguments)
        }
    }
}, function(t, e, n) {
    var r = n(75),
        i = r && new r;
    t.exports = i
}, function(t, e) {
    t.exports = function() {}
}, function(t, e) {
    t.exports = {}
}, function(t, e, n) {
    var r = n(52),
        i = n(96),
        o = n(97),
        a = n(256);
    t.exports = function(t) {
        var e = o(t),
            n = a[e];
        if ("function" != typeof n || !(e in r.prototype)) return !1;
        if (t === n) return !0;
        var u = i(n);
        return !!u && t === u[0]
    }
}, function(t, e, n) {
    var r = n(52),
        i = n(50),
        o = n(51),
        a = n(1),
        u = n(8),
        c = n(257),
        s = Object.prototype.hasOwnProperty;

    function l(t) {
        if (u(t) && !a(t) && !(t instanceof r)) {
            if (t instanceof i) return t;
            if (s.call(t, "__wrapped__")) return c(t)
        }
        return new i(t)
    }
    l.prototype = o.prototype, l.prototype.constructor = l, t.exports = l
}, function(t, e, n) {
    var r = n(52),
        i = n(50),
        o = n(258);
    t.exports = function(t) {
        if (t instanceof r) return t.clone();
        var e = new i(t.__wrapped__, t.__chain__);
        return e.__actions__ = o(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e
    }
}, function(t, e) {
    t.exports = function(t, e) {
        var n = -1,
            r = t.length;
        for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
        return e
    }
}, function(t, e, n) {
    var r = n(94),
        i = n(48);
    t.exports = function(t, e, n) {
        return void 0 === n && (n = e, e = void 0), void 0 !== n && (n = (n = i(n)) == n ? n : 0), void 0 !== e && (e = (e = i(e)) == e ? e : 0), r(i(t), e, n)
    }
}, function(t, e, n) {
    "use strict";
    var r = n(2);
    r.define("links", t.exports = function(t, e) {
        var n, i, o, a = {},
            u = t(window),
            c = r.env(),
            s = window.location,
            l = document.createElement("a"),
            f = "w--current",
            d = /index\.(html|php)$/,
            p = /\/$/;

        function v(e) {
            var r = n && e.getAttribute("href-disabled") || e.getAttribute("href");
            if (l.href = r, !(r.indexOf(":") >= 0)) {
                var a = t(e);
                if (l.hash.length > 1 && l.host + l.pathname === s.host + s.pathname) {
                    if (!/^#[a-zA-Z0-9\-\_]+$/.test(l.hash)) return;
                    var u = t(l.hash);
                    u.length && i.push({
                        link: a,
                        sec: u,
                        active: !1
                    })
                } else if ("#" !== r && "" !== r) {
                    var c = l.href === s.href || r === o || d.test(r) && p.test(o);
                    g(a, f, c)
                }
            }
        }

        function h() {
            var t = u.scrollTop(),
                n = u.height();
            e.each(i, function(e) {
                var r = e.link,
                    i = e.sec,
                    o = i.offset().top,
                    a = i.outerHeight(),
                    u = .5 * n,
                    c = i.is(":visible") && o + a - u >= t && o + u <= t + n;
                e.active !== c && (e.active = c, g(r, f, c))
            })
        }

        function g(t, e, n) {
            var r = t.hasClass(e);
            n && r || (n || r) && (n ? t.addClass(e) : t.removeClass(e))
        }
        return a.ready = a.design = a.preview = function() {
            n = c && r.env("design"), o = r.env("slug") || s.pathname || "", r.scroll.off(h), i = [];
            for (var t = document.links, e = 0; e < t.length; ++e) v(t[e]);
            i.length && (r.scroll.on(h), h())
        }, a
    })
}, function(t, e, n) {
    "use strict";
    var r = n(2);
    r.define("scroll", t.exports = function(t) {
        var e, n = {
                CLICK_EMPTY: "click.wf-empty-link",
                CLICK_SCROLL: "click.wf-scroll"
            },
            i = t(document),
            o = window,
            a = o.location,
            u = function() {
                try {
                    return Boolean(o.frameElement)
                } catch (t) {
                    return !0
                }
            }() ? null : o.history,
            c = /^[a-zA-Z0-9][\w:.-]*$/,
            s = 'a[href="#"]',
            l = 'a[href*="#"]:not(.w-tab-link):not(' + s + ")";

        function f(n) {
            if (!(r.env("design") || window.$.mobile && t(n.currentTarget).hasClass("ui-link"))) {
                var i = this.href.split("#"),
                    s = i[0] === e ? i[1] : null;
                s && function(e, n) {
                    if (!c.test(e)) return;
                    var i = t("#" + e);
                    if (!i.length) return;
                    n && (n.preventDefault(), n.stopPropagation());
                    if (a.hash !== e && u && u.pushState && (!r.env.chrome || "file:" !== a.protocol)) {
                        var s = u.state && u.state.hash;
                        s !== e && u.pushState({
                            hash: e
                        }, "", "#" + e)
                    }
                    var l = r.env("editor") ? ".w-editor-body" : "body",
                        f = t("header, " + l + " > .header, " + l + " > .w-nav:not([data-no-scroll])"),
                        d = "fixed" === f.css("position") ? f.outerHeight() : 0;
                    o.setTimeout(function() {
                        ! function(e, n) {
                            var r = t(o).scrollTop(),
                                i = e.offset().top - n;
                            if ("mid" === e.data("scroll")) {
                                var a = t(o).height() - n,
                                    u = e.outerHeight();
                                u < a && (i -= Math.round((a - u) / 2))
                            }
                            var c = 1;
                            t("body").add(e).each(function() {
                                var e = parseFloat(t(this).attr("data-scroll-time"), 10);
                                !isNaN(e) && (0 === e || e > 0) && (c = e)
                            }), Date.now || (Date.now = function() {
                                return (new Date).getTime()
                            });
                            var s = Date.now(),
                                l = o.requestAnimationFrame || o.mozRequestAnimationFrame || o.webkitRequestAnimationFrame || function(t) {
                                    o.setTimeout(t, 15)
                                },
                                f = (472.143 * Math.log(Math.abs(r - i) + 125) - 2e3) * c;
                            ! function t() {
                                var e = Date.now() - s;
                                o.scroll(0, function(t, e, n, r) {
                                    if (n > r) return e;
                                    return t + (e - t) * (i = n / r, i < .5 ? 4 * i * i * i : (i - 1) * (2 * i - 2) * (2 * i - 2) + 1);
                                    var i
                                }(r, i, e, f)), e <= f && l(t)
                            }()
                        }(i, d)
                    }, n ? 0 : 300)
                }(s, n)
            }
        }
        return {
            ready: function() {
                var t = n.CLICK_EMPTY,
                    r = n.CLICK_SCROLL;
                e = a.href.split("#")[0], i.on(r, l, f), i.on(t, s, function(t) {
                    t.preventDefault()
                })
            }
        }
    })
}, function(t, e, n) {
    "use strict";
    n(2).define("touch", t.exports = function(t) {
        var e = {},
            n = window.getSelection;

        function r(e) {
            var r, i, o = !1,
                a = !1,
                u = Math.min(Math.round(.04 * window.innerWidth), 40);

            function c(t) {
                var e = t.touches;
                e && e.length > 1 || (o = !0, e ? (a = !0, r = e[0].clientX) : r = t.clientX, i = r)
            }

            function s(e) {
                if (o) {
                    if (a && "mousemove" === e.type) return e.preventDefault(), void e.stopPropagation();
                    var r = e.touches,
                        c = r ? r[0].clientX : e.clientX,
                        s = c - i;
                    i = c, Math.abs(s) > u && n && "" === String(n()) && (! function(e, n, r) {
                        var i = t.Event(e, {
                            originalEvent: n
                        });
                        t(n.target).trigger(i, r)
                    }("swipe", e, {
                        direction: s > 0 ? "right" : "left"
                    }), f())
                }
            }

            function l(t) {
                if (o) return o = !1, a && "mouseup" === t.type ? (t.preventDefault(), t.stopPropagation(), void(a = !1)) : void 0
            }

            function f() {
                o = !1
            }
            e.addEventListener("touchstart", c, !1), e.addEventListener("touchmove", s, !1), e.addEventListener("touchend", l, !1), e.addEventListener("touchcancel", f, !1), e.addEventListener("mousedown", c, !1), e.addEventListener("mousemove", s, !1), e.addEventListener("mouseup", l, !1), e.addEventListener("mouseout", f, !1), this.destroy = function() {
                e.removeEventListener("touchstart", c, !1), e.removeEventListener("touchmove", s, !1), e.removeEventListener("touchend", l, !1), e.removeEventListener("touchcancel", f, !1), e.removeEventListener("mousedown", c, !1), e.removeEventListener("mousemove", s, !1), e.removeEventListener("mouseup", l, !1), e.removeEventListener("mouseout", f, !1), e = null
            }
        }
        return t.event.special.tap = {
            bindType: "click",
            delegateType: "click"
        }, e.init = function(e) {
            return (e = "string" == typeof e ? t(e).get(0) : e) ? new r(e) : null
        }, e.instance = e.init(document), e
    })
}, function(t, e, n) {
    "use strict";
    var r = n(2),
        i = n(13),
        o = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            ESCAPE: 27,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35
        },
        a = !0;
    r.define("dropdown", t.exports = function(t, e) {
        var n, u, c = e.debounce,
            s = {},
            l = r.env(),
            f = !1,
            d = r.env.touch,
            p = ".w-dropdown",
            v = "w--open",
            h = i.triggers,
            g = 900,
            E = "focusout" + p,
            m = "keydown" + p,
            _ = "mouseenter" + p,
            y = "mousemove" + p,
            I = "mouseleave" + p,
            w = (d ? "click" : "mouseup") + p,
            b = "w-close" + p,
            T = "setting" + p,
            O = t(document);

        function A() {
            n = l && r.env("design"), (u = O.find(p)).each(S)
        }

        function S(e, i) {
            var u = t(i),
                s = t.data(i, p);
            s || (s = t.data(i, p, {
                open: !1,
                el: u,
                config: {},
                selectedIdx: -1
            })), s.toggle = s.el.children(".w-dropdown-toggle"), s.list = s.el.children(".w-dropdown-list"), s.links = s.list.find("a:not(.w-dropdown .w-dropdown a)"), s.complete = function(t) {
                return function() {
                    t.list.removeClass(v), t.toggle.removeClass(v), t.manageZ && t.el.css("z-index", "")
                }
            }(s), s.mouseLeave = function(t) {
                return function() {
                    t.hovering = !1, t.links.is(":focus") || N(t)
                }
            }(s), s.mouseUpOutside = function(e) {
                e.mouseUpOutside && O.off(w, e.mouseUpOutside);
                return c(function(n) {
                    if (e.open) {
                        var i = t(n.target);
                        if (!i.closest(".w-dropdown-toggle").length) {
                            var o = -1 === t.inArray(e.el[0], i.parents(p)),
                                a = r.env("editor");
                            if (o) {
                                if (a) {
                                    var u = 1 === i.parents().length && 1 === i.parents("svg").length,
                                        c = i.parents(".w-editor-bem-EditorHoverControls").length;
                                    if (u || c) return
                                }
                                N(e)
                            }
                        }
                    }
                })
            }(s), s.mouseMoveOutside = function(e) {
                return c(function(n) {
                    if (e.open) {
                        var r = t(n.target),
                            i = -1 === t.inArray(e.el[0], r.parents(p));
                        if (i) {
                            var o = r.parents(".w-editor-bem-EditorHoverControls").length,
                                a = r.parents(".w-editor-bem-RTToolbar").length,
                                u = t(".w-editor-bem-EditorOverlay"),
                                c = u.find(".w-editor-edit-outline").length || u.find(".w-editor-bem-RTToolbar").length;
                            if (o || a || c) return;
                            e.hovering = !1, N(e)
                        }
                    }
                })
            }(s), x(s);
            var d = s.toggle.attr("id"),
                h = s.list.attr("id");
            d || (d = "w-dropdown-toggle-" + e), h || (h = "w-dropdown-list-" + e), s.toggle.attr("id", d), s.toggle.attr("aria-controls", h), s.toggle.attr("aria-haspopup", "menu"), s.toggle.attr("aria-expanded", "false"), "BUTTON" !== s.toggle.prop("tagName") && (s.toggle.attr("role", "button"), s.toggle.attr("tabindex") || s.toggle.attr("tabindex", "0")), s.list.attr("id", h), s.list.attr("aria-labelledby", d), s.links.each(function(t, e) {
                e.hasAttribute("tabindex") || e.setAttribute("tabindex", "0")
            }), s.toggle.css("outline", "none"), s.links.css("outline", "none"), s.el.off(p), s.toggle.off(p), s.nav && s.nav.off(p);
            var g = R(s, a);
            n && s.el.on(T, function(t) {
                return function(e, n) {
                    n = n || {}, x(t), !0 === n.open && C(t), !1 === n.open && N(t, {
                        immediate: !0
                    })
                }
            }(s)), n || (l && (s.hovering = !1, N(s)), s.config.hover && s.toggle.on(_, function(t) {
                return function() {
                    t.hovering = !0, C(t)
                }
            }(s)), s.el.on(b, g), s.el.on(m, function(t) {
                return function(e) {
                    if (!n && !f && t.open) switch (t.selectedIdx = t.links.index(document.activeElement), e.keyCode) {
                        case o.HOME:
                            if (!t.open) return;
                            return t.selectedIdx = 0, L(t), e.preventDefault();
                        case o.END:
                            if (!t.open) return;
                            return t.selectedIdx = t.links.length - 1, L(t), e.preventDefault();
                        case o.ESCAPE:
                            return N(t), t.toggle.focus(), e.stopPropagation();
                        case o.ARROW_RIGHT:
                        case o.ARROW_DOWN:
                            return t.selectedIdx = Math.min(t.links.length - 1, t.selectedIdx + 1), L(t), e.preventDefault();
                        case o.ARROW_LEFT:
                        case o.ARROW_UP:
                            return t.selectedIdx = Math.max(-1, t.selectedIdx - 1), L(t), e.preventDefault()
                    }
                }
            }(s)), s.el.on(E, function(t) {
                return c(function(e) {
                    var n = e.relatedTarget,
                        r = e.target,
                        i = t.el[0],
                        o = i.contains(n) || i.contains(r);
                    return o || N(t), e.stopPropagation()
                })
            }(s)), s.toggle.on(w, g), s.toggle.on(m, function(t) {
                var e = R(t, a);
                return function(r) {
                    if (!n && !f) {
                        if (!t.open) switch (r.keyCode) {
                            case o.ARROW_UP:
                            case o.ARROW_DOWN:
                                return r.stopPropagation()
                        }
                        switch (r.keyCode) {
                            case o.SPACE:
                            case o.ENTER:
                                return e(), r.stopPropagation(), r.preventDefault()
                        }
                    }
                }
            }(s)), s.nav = s.el.closest(".w-nav"), s.nav.on(b, g))
        }

        function x(t) {
            var e = Number(t.el.css("z-index"));
            t.manageZ = e === g || e === g + 1, t.config = {
                hover: (!0 === t.el.attr("data-hover") || "1" === t.el.attr("data-hover")) && !d,
                delay: Number(t.el.attr("data-delay")) || 0
            }
        }

        function R(t, e) {
            return c(function(n) {
                if (t.open || n && "w-close" === n.type) return N(t, {
                    forceClose: e
                });
                C(t)
            })
        }

        function C(e) {
            if (!e.open) {
                ! function(e) {
                    var n = e.el[0];
                    u.each(function(e, r) {
                        var i = t(r);
                        i.is(n) || i.has(n).length || i.triggerHandler(b)
                    })
                }(e), e.open = !0, e.list.addClass(v), e.toggle.addClass(v), e.toggle.attr("aria-expanded", "true"), h.intro(0, e.el[0]), r.redraw.up(), e.manageZ && e.el.css("z-index", g + 1);
                var i = r.env("editor");
                n || O.on(w, e.mouseUpOutside), e.hovering && !i && e.el.on(I, e.mouseLeave), e.hovering && i && O.on(y, e.mouseMoveOutside), window.clearTimeout(e.delayId)
            }
        }

        function N(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = e.immediate,
                r = e.forceClose;
            if (t.open && (!t.config.hover || !t.hovering || r)) {
                t.toggle.attr("aria-expanded", "false"), t.open = !1;
                var i = t.config;
                if (h.outro(0, t.el[0]), O.off(w, t.mouseUpOutside), O.off(y, t.mouseMoveOutside), t.el.off(I, t.mouseLeave), window.clearTimeout(t.delayId), !i.delay || n) return t.complete();
                t.delayId = window.setTimeout(t.complete, i.delay)
            }
        }

        function L(t) {
            t.links[t.selectedIdx] && t.links[t.selectedIdx].focus()
        }
        return s.ready = A, s.design = function() {
            f && O.find(p).each(function(e, n) {
                t(n).triggerHandler(b)
            }), f = !1, A()
        }, s.preview = function() {
            f = !0, A()
        }, s
    })
}, function(t, e, n) {
    "use strict";
    var r = n(0)(n(265)),
        i = n(2);
    i.define("forms", t.exports = function(t, e) {
        var n, o, a, u, c, s = {},
            l = t(document),
            f = window.location,
            d = window.XDomainRequest && !window.atob,
            p = ".w-form",
            v = /e(-)?mail/i,
            h = /^\S+@\S+$/,
            g = window.alert,
            E = i.env(),
            m = /list-manage[1-9]?.com/i,
            _ = e.debounce(function() {
                g("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
            }, 100);

        function y(e, n) {
            var r = t(n),
                i = t.data(n, p);
            i || (i = t.data(n, p, {
                form: r
            })), I(i);
            var a = r.closest("div.w-form");
            i.done = a.find("> .w-form-done"), i.fail = a.find("> .w-form-fail"), i.fileUploads = a.find(".w-file-upload"), i.fileUploads.each(function(e) {
                ! function(e, n) {
                    if (!n.fileUploads || !n.fileUploads[e]) return;
                    var r, i = t(n.fileUploads[e]),
                        o = i.find("> .w-file-upload-default"),
                        a = i.find("> .w-file-upload-uploading"),
                        u = i.find("> .w-file-upload-success"),
                        s = i.find("> .w-file-upload-error"),
                        l = o.find(".w-file-upload-input"),
                        f = o.find(".w-file-upload-label"),
                        d = f.children(),
                        p = s.find(".w-file-upload-error-msg"),
                        v = u.find(".w-file-upload-file"),
                        h = u.find(".w-file-remove-link"),
                        g = v.find(".w-file-upload-file-name"),
                        m = p.attr("data-w-size-error"),
                        _ = p.attr("data-w-type-error"),
                        y = p.attr("data-w-generic-error");
                    if (E) l.on("click", function(t) {
                        t.preventDefault()
                    }), f.on("click", function(t) {
                        t.preventDefault()
                    }), d.on("click", function(t) {
                        t.preventDefault()
                    });
                    else {
                        h.on("click", function() {
                            l.removeAttr("data-value"), l.val(""), g.html(""), o.toggle(!0), u.toggle(!1)
                        }), l.on("change", function(i) {
                            (r = i.target && i.target.files && i.target.files[0]) && (o.toggle(!1), s.toggle(!1), a.toggle(!0), g.text(r.name), S() || w(n), n.fileUploads[e].uploading = !0, function(e, n) {
                                var r = {
                                    name: e.name,
                                    size: e.size
                                };
                                t.ajax({
                                    type: "POST",
                                    url: c,
                                    data: r,
                                    dataType: "json",
                                    crossDomain: !0
                                }).done(function(t) {
                                    n(null, t)
                                }).fail(function(t) {
                                    n(t)
                                })
                            }(r, O))
                        });
                        var b = f.outerHeight();
                        l.height(b), l.width(1)
                    }

                    function T(t) {
                        var r = t.responseJSON && t.responseJSON.msg,
                            i = y;
                        "string" == typeof r && 0 === r.indexOf("InvalidFileTypeError") ? i = _ : "string" == typeof r && 0 === r.indexOf("MaxFileSizeError") && (i = m), p.text(i), l.removeAttr("data-value"), l.val(""), a.toggle(!1), o.toggle(!0), s.toggle(!0), n.fileUploads[e].uploading = !1, S() || I(n)
                    }

                    function O(e, n) {
                        if (e) return T(e);
                        var i = n.fileName,
                            o = n.postData,
                            a = n.fileId,
                            u = n.s3Url;
                        l.attr("data-value", a),
                            function(e, n, r, i, o) {
                                var a = new FormData;
                                for (var u in n) a.append(u, n[u]);
                                a.append("file", r, i), t.ajax({
                                    type: "POST",
                                    url: e,
                                    data: a,
                                    processData: !1,
                                    contentType: !1
                                }).done(function() {
                                    o(null)
                                }).fail(function(t) {
                                    o(t)
                                })
                            }(u, o, r, i, A)
                    }

                    function A(t) {
                        if (t) return T(t);
                        a.toggle(!1), u.css("display", "inline-block"), n.fileUploads[e].uploading = !1, S() || I(n)
                    }

                    function S() {
                        var t = n.fileUploads && n.fileUploads.toArray() || [];
                        return t.some(function(t) {
                            return t.uploading
                        })
                    }
                }(e, i)
            });
            var u = i.action = r.attr("action");
            i.handler = null, i.redirect = r.attr("data-redirect"), m.test(u) ? i.handler = O : u || (o ? i.handler = T : _())
        }

        function I(t) {
            var e = t.btn = t.form.find(':input[type="submit"]');
            t.wait = t.btn.attr("data-wait") || null, t.success = !1, e.prop("disabled", !1), t.label && e.val(t.label)
        }

        function w(t) {
            var e = t.btn,
                n = t.wait;
            e.prop("disabled", !0), n && (t.label = e.val(), e.val(n))
        }

        function b(e, n) {
            var r = null;
            return n = n || {}, e.find(':input:not([type="submit"]):not([type="file"])').each(function(i, o) {
                var a = t(o),
                    u = a.attr("type"),
                    c = a.attr("data-name") || a.attr("name") || "Field " + (i + 1),
                    s = a.val();
                if ("checkbox" === u) s = a.is(":checked");
                else if ("radio" === u) {
                    if (null === n[c] || "string" == typeof n[c]) return;
                    s = e.find('input[name="' + a.attr("name") + '"]:checked').val() || null
                }
                "string" == typeof s && (s = t.trim(s)), n[c] = s, r = r || function(t, e, n, r) {
                    var i = null;
                    "password" === e ? i = "Passwords cannot be submitted." : t.attr("required") ? r ? v.test(t.attr("type")) && (h.test(r) || (i = "Please enter a valid email address for: " + n)) : i = "Please fill out the required field: " + n : "g-recaptcha-response" !== n || r || (i = "Please confirm youâ€™re not a robot.");
                    return i
                }(a, u, c, s)
            }), r
        }

        function T(e) {
            I(e);
            var n = e.form,
                r = {
                    name: n.attr("data-name") || n.attr("name") || "Untitled Form",
                    source: f.href,
                    test: i.env(),
                    fields: {},
                    fileUploads: {},
                    dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(n.html())
                };
            S(e);
            var a = b(n, r.fields);
            if (a) return g(a);
            r.fileUploads = function(e) {
                var n = {};
                return e.find(':input[type="file"]').each(function(e, r) {
                    var i = t(r),
                        o = i.attr("data-name") || i.attr("name") || "File " + (e + 1),
                        a = i.attr("data-value");
                    "string" == typeof a && (a = t.trim(a)), n[o] = a
                }), n
            }(n), w(e), o ? t.ajax({
                url: u,
                type: "POST",
                data: r,
                dataType: "json",
                crossDomain: !0
            }).done(function(t) {
                t && 200 === t.code && (e.success = !0), A(e)
            }).fail(function() {
                A(e)
            }) : A(e)
        }

        function O(n) {
            I(n);
            var r = n.form,
                i = {};
            if (!/^https/.test(f.href) || /^https/.test(n.action)) {
                S(n);
                var o, a = b(r, i);
                if (a) return g(a);
                w(n), e.each(i, function(t, e) {
                    v.test(e) && (i.EMAIL = t), /^((full[ _-]?)?name)$/i.test(e) && (o = t), /^(first[ _-]?name)$/i.test(e) && (i.FNAME = t), /^(last[ _-]?name)$/i.test(e) && (i.LNAME = t)
                }), o && !i.FNAME && (o = o.split(" "), i.FNAME = o[0], i.LNAME = i.LNAME || o[1]);
                var u = n.action.replace("/post?", "/post-json?") + "&c=?",
                    c = u.indexOf("u=") + 2;
                c = u.substring(c, u.indexOf("&", c));
                var s = u.indexOf("id=") + 3;
                s = u.substring(s, u.indexOf("&", s)), i["b_" + c + "_" + s] = "", t.ajax({
                    url: u,
                    data: i,
                    dataType: "jsonp"
                }).done(function(t) {
                    n.success = "success" === t.result || /already/.test(t.msg), n.success || console.info("MailChimp error: " + t.msg), A(n)
                }).fail(function() {
                    A(n)
                })
            } else r.attr("method", "post")
        }

        function A(t) {
            var e = t.form,
                n = t.redirect,
                r = t.success;
            r && n ? i.location(n) : (t.done.toggle(r), t.fail.toggle(!r), e.toggle(!r), I(t))
        }

        
        return s.ready = s.design = s.preview = function() {
        }, s
    })
}, function(t, e, n) {
    var r = n(266),
        i = n(267),
        o = n(268);
    t.exports = function(t, e) {
        return r(t) || i(t, e) || o()
    }
}, function(t, e) {
    t.exports = function(t) {
        if (Array.isArray(t)) return t
    }
}, function(t, e) {
    t.exports = function(t, e) {
        var n = [],
            r = !0,
            i = !1,
            o = void 0;
        try {
            for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
        } catch (t) {
            i = !0, o = t
        } finally {
            try {
                r || null == u.return || u.return()
            } finally {
                if (i) throw o
            }
        }
        return n
    }
}, function(t, e) {
    t.exports = function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
}, function(t, e, n) {
    "use strict";
    var r = n(2),
        i = "w-condition-invisible",
        o = "." + i;

    function a(t) {
        return Boolean(t.$el && t.$el.closest(o).length)
    }

    function u(t, e) {
        for (var n = t; n >= 0; n--)
            if (!a(e[n])) return n;
        return -1
    }

    function c(t, e) {
        for (var n = t; n <= e.length - 1; n++)
            if (!a(e[n])) return n;
        return -1
    }

    function s(t, e, n, r) {
        var o, s, l, f = n.tram,
            d = Array.isArray,
            p = "w-lightbox-",
            v = /(^|\s+)/g,
            h = [];

        function g(t, e) {
            return h = d(t) ? t : [t], s || g.build(),
                function(t) {
                    return t.filter(function(t) {
                        return !a(t)
                    })
                }(h).length > 1 && (s.items = s.empty, h.forEach(function(t) {
                    var e = P("thumbnail"),
                        n = P("item").append(e);
                    a(t) && n.addClass(i), s.items = s.items.add(n), S(t.thumbnailUrl || t.url, function(t) {
                        t.prop("width") > t.prop("height") ? N(t, "wide") : N(t, "tall"), e.append(N(t, "thumbnail-image"))
                    })
                }), s.strip.empty().append(s.items), N(s.content, "group")), f(L(s.lightbox, "hide").trigger("focus")).add("opacity .3s").start({
                    opacity: 1
                }), N(s.html, "noscroll"), g.show(e || 0)
        }

        function E(t) {
            return function(e) {
                this === e.target && (e.stopPropagation(), e.preventDefault(), t())
            }
        }
        g.build = function() {
            return g.destroy(), (s = {
                html: n(e.documentElement),
                empty: n()
            }).arrowLeft = P("control left inactive"), s.arrowRight = P("control right inactive"), s.close = P("control close"), s.spinner = P("spinner"), s.strip = P("strip"), l = new x(s.spinner, R("hide")), s.content = P("content").append(s.spinner, s.arrowLeft, s.arrowRight, s.close), s.container = P("container").append(s.content, s.strip), s.lightbox = P("backdrop hide").append(s.container), s.strip.on("click", C("item"), I), s.content.on("swipe", w).on("click", C("left"), m).on("click", C("right"), _).on("click", C("close"), y).on("click", C("image, caption"), _), s.container.on("click", C("view"), y).on("dragstart", C("img"), T), s.lightbox.on("keydown", O).on("focusin", b), n(r).append(s.lightbox.prop("tabIndex", 0)), g
        }, g.destroy = function() {
            s && (L(s.html, "noscroll"), s.lightbox.remove(), s = void 0)
        }, g.show = function(t) {
            if (t !== o) {
                var e = h[t];
                if (!e) return g.hide();
                if (a(e)) {
                    if (t < o) {
                        var r = u(t - 1, h);
                        t = r > -1 ? r : t
                    } else {
                        var i = c(t + 1, h);
                        t = i > -1 ? i : t
                    }
                    e = h[t]
                }
                var d, p, v = o;
                return o = t, l.show(), S(e.html && (d = e.width, p = e.height, "data:image/svg+xml;charset=utf-8," + encodeURI('<svg xmlns="http://www.w3.org/2000/svg" width="' + d + '" height="' + p + '"/>')) || e.url, function(r) {
                    if (t === o) {
                        var i, a, d = P("figure", "figure").append(N(r, "image")),
                            p = P("frame").append(d),
                            g = P("view").append(p);
                        e.html && ((a = (i = n(e.html)).is("iframe")) && i.on("load", E), d.append(N(i, "embed"))), e.caption && d.append(P("caption", "figcaption").text(e.caption)), s.spinner.before(g), a || E()
                    }

                    function E() {
                        var e;
                        if (l.hide(), t === o) {
                            if (D(s.arrowLeft, "inactive", function(t, e) {
                                    return -1 === u(t - 1, e)
                                }(t, h)), D(s.arrowRight, "inactive", function(t, e) {
                                    return -1 === c(t + 1, e)
                                }(t, h)), s.view ? (f(s.view).add("opacity .3s").start({
                                    opacity: 0
                                }).then((e = s.view, function() {
                                    e.remove()
                                })), f(g).add("opacity .3s").add("transform .3s").set({
                                    x: t > v ? "80px" : "-80px"
                                }).start({
                                    opacity: 1,
                                    x: 0
                                })) : g.css("opacity", 1), s.view = g, s.items) {
                                L(s.items, "active");
                                var n = s.items.eq(t);
                                N(n, "active"),
                                    function(t) {
                                        var e, n = t.get(0),
                                            r = s.strip.get(0),
                                            i = n.offsetLeft,
                                            o = n.clientWidth,
                                            a = r.scrollLeft,
                                            u = r.clientWidth,
                                            c = r.scrollWidth - u;
                                        i < a ? e = Math.max(0, i + o - u) : i + o > u + a && (e = Math.min(i, c));
                                        null != e && f(s.strip).add("scroll-left 500ms").start({
                                            "scroll-left": e
                                        })
                                    }(n)
                            }
                        } else g.remove()
                    }
                }), g
            }
        }, g.hide = function() {
            return f(s.lightbox).add("opacity .3s").start({
                opacity: 0
            }).then(A), g
        }, g.prev = function() {
            var t = u(o - 1, h);
            t > -1 && g.show(t)
        }, g.next = function() {
            var t = c(o + 1, h);
            t > -1 && g.show(t)
        };
        var m = E(g.prev),
            _ = E(g.next),
            y = E(g.hide),
            I = function(t) {
                var e = n(this).index();
                t.preventDefault(), g.show(e)
            },
            w = function(t, e) {
                t.preventDefault(), "left" === e.direction ? g.next() : "right" === e.direction && g.prev()
            },
            b = function() {
                this.focus()
            };

        function T(t) {
            t.preventDefault()
        }

        function O(t) {
            var e = t.keyCode;
            27 === e ? g.hide() : 37 === e ? g.prev() : 39 === e && g.next()
        }

        function A() {
            s && (s.strip.scrollLeft(0).empty(), L(s.html, "noscroll"), N(s.lightbox, "hide"), s.view && s.view.remove(), L(s.content, "group"), N(s.arrowLeft, "inactive"), N(s.arrowRight, "inactive"), o = s.view = void 0)
        }

        function S(t, e) {
            var n = P("img", "img");
            return n.one("load", function() {
                e(n)
            }), n.attr("src", t), n
        }

        function x(t, e, n) {
            this.$element = t, this.className = e, this.delay = n || 200, this.hide()
        }

        function R(t, e) {
            return t.replace(v, (e ? " ." : " ") + p)
        }

        function C(t) {
            return R(t, !0)
        }

        function N(t, e) {
            return t.addClass(R(e))
        }

        function L(t, e) {
            return t.removeClass(R(e))
        }

        function D(t, e, n) {
            return t.toggleClass(R(e), n)
        }

        function P(t, r) {
            return N(n(e.createElement(r || "div")), t)
        }
        return x.prototype.show = function() {
                var t = this;
                t.timeoutId || (t.timeoutId = setTimeout(function() {
                    t.$element.removeClass(t.className), delete t.timeoutId
                }, t.delay))
            }, x.prototype.hide = function() {
                if (this.timeoutId) return clearTimeout(this.timeoutId), void delete this.timeoutId;
                this.$element.addClass(this.className)
            },
            function() {
                var n = t.navigator.userAgent,
                    r = n.match(/(iPhone|iPad|iPod);[^OS]*OS (\d)/);
                if (n.indexOf("Android ") > -1 && -1 === n.indexOf("Chrome") || r && !(r[2] > 7)) {
                    var i = e.createElement("style");
                    e.head.appendChild(i), t.addEventListener("resize", o, !0), o()
                }

                function o() {
                    var e = t.innerHeight,
                        n = t.innerWidth,
                        r = ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + e + "px}.w-lightbox-view {width:" + n + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .86 * e + "px}.w-lightbox-image {max-width:" + n + "px;max-height:" + e + "px}.w-lightbox-group .w-lightbox-image {max-height:" + .86 * e + "px}.w-lightbox-strip {padding: 0 " + .01 * e + "px}.w-lightbox-item {width:" + .1 * e + "px;padding:" + .02 * e + "px " + .01 * e + "px}.w-lightbox-thumbnail {height:" + .1 * e + "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + .96 * e + "px}.w-lightbox-content {margin-top:" + .02 * e + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .84 * e + "px}.w-lightbox-image {max-width:" + .96 * n + "px;max-height:" + .96 * e + "px}.w-lightbox-group .w-lightbox-image {max-width:" + .823 * n + "px;max-height:" + .84 * e + "px}}";
                    i.textContent = r
                }
            }(), g
    }
    r.define("lightbox", t.exports = function(t) {
        var e, n, i = {},
            o = r.env(),
            a = s(window, document, t, o ? "#lightbox-mountpoint" : "body"),
            u = t(document),
            c = ".w-lightbox";

        function l(t) {
            var e, r, i = t.el.children(".w-json").html();
            if (i) {
                try {
                    i = JSON.parse(i)
                } catch (t) {
                    console.error("Malformed lightbox JSON configuration.", t)
                }! function(t) {
                    t.images && (t.images.forEach(function(t) {
                        t.type = "image"
                    }), t.items = t.images);
                    t.embed && (t.embed.type = "video", t.items = [t.embed]);
                    t.groupId && (t.group = t.groupId)
                }(i), i.items.forEach(function(e) {
                    e.$el = t.el
                }), (e = i.group) ? ((r = n[e]) || (r = n[e] = []), t.items = r, i.items.length && (t.index = r.length, r.push.apply(r, i.items))) : (t.items = i.items, t.index = 0)
            } else t.items = []
        }
        return i.ready = i.design = i.preview = function() {
            e = o && r.env("design"), a.destroy(), n = {}, u.find(c).webflowLightBox()
        }, jQuery.fn.extend({
            webflowLightBox: function() {
                t.each(this, function(n, r) {
                    var i = t.data(r, c);
                    i || (i = t.data(r, c, {
                        el: t(r),
                        mode: "images",
                        images: [],
                        embed: ""
                    })), i.el.off(c), l(i), e ? i.el.on("setting" + c, l.bind(null, i)) : i.el.on("click" + c, function(t) {
                        return function() {
                            t.items.length && a(t.items, t.index || 0)
                        }
                    }(i)).on("click" + c, function(t) {
                        t.preventDefault()
                    })
                })
            }
        }), i
    })
}, function(t, e, n) {
    "use strict";
    var r = n(2),
        i = n(13),
        o = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            ESCAPE: 27,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35
        };
    r.define("navbar", t.exports = function(t, e) {
        var n, a, u, c, s = {},
            l = t.tram,
            f = t(window),
            d = t(document),
            p = e.debounce,
            v = r.env(),
            h = '<div class="w-nav-overlay" data-wf-ignore />',
            g = ".w-nav",
            E = "w--open",
            m = "w--nav-dropdown-open",
            _ = "w--nav-dropdown-toggle-open",
            y = "w--nav-dropdown-list-open",
            I = "w--nav-link-open",
            w = i.triggers,
            b = t();

        function T() {
            r.resize.off(O)
        }

        function O() {
            a.each(M)
        }

        function A(n, r) {
            var i = t(r),
                a = t.data(r, g);
            a || (a = t.data(r, g, {
                open: !1,
                el: i,
                config: {},
                selectedIdx: -1
            })), a.menu = i.find(".w-nav-menu"), a.links = a.menu.find(".w-nav-link"), a.dropdowns = a.menu.find(".w-dropdown"), a.dropdownToggle = a.menu.find(".w-dropdown-toggle"), a.dropdownList = a.menu.find(".w-dropdown-list"), a.button = i.find(".w-nav-button"), a.container = i.find(".w-container"), a.overlayContainerId = "w-nav-overlay-" + n, a.outside = function(e) {
                e.outside && d.off("click" + g, e.outside);
                return function(n) {
                    var r = t(n.target);
                    c && r.closest(".w-editor-bem-EditorOverlay").length || P(e, r)
                }
            }(a);
            var s = i.find(".w-nav-brand");
            s && "/" === s.attr("href") && null == s.attr("aria-label") && s.attr("aria-label", "home"), a.button.attr("style", "-webkit-user-select: text;"), null == a.button.attr("aria-label") && a.button.attr("aria-label", "menu"), a.button.attr("role", "button"), a.button.attr("tabindex", "0"), a.button.attr("aria-controls", a.overlayContainerId), a.button.attr("aria-haspopup", "menu"), a.button.attr("aria-expanded", "false"), a.el.off(g), a.button.off(g), a.menu.off(g), R(a), u ? (x(a), a.el.on("setting" + g, function(t) {
                return function(n, r) {
                    r = r || {};
                    var i = f.width();
                    R(t), !0 === r.open && X(t, !0), !1 === r.open && U(t, !0), t.open && e.defer(function() {
                        i !== f.width() && N(t)
                    })
                }
            }(a))) : (! function(e) {
                if (e.overlay) return;
                e.overlay = t(h).appendTo(e.el), e.overlay.attr("id", e.overlayContainerId), e.parent = e.menu.parent(), U(e, !0)
            }(a), a.button.on("click" + g, L(a)), a.menu.on("click" + g, "a", D(a)), a.button.on("keydown" + g, function(t) {
                return function(e) {
                    switch (e.keyCode) {
                        case o.SPACE:
                        case o.ENTER:
                            return L(t)(), e.preventDefault(), e.stopPropagation();
                        case o.ESCAPE:
                            return U(t), e.preventDefault(), e.stopPropagation();
                        case o.ARROW_RIGHT:
                        case o.ARROW_DOWN:
                        case o.HOME:
                        case o.END:
                            return t.open ? (e.keyCode === o.END ? t.selectedIdx = t.links.length - 1 : t.selectedIdx = 0, C(t), e.preventDefault(), e.stopPropagation()) : (e.preventDefault(), e.stopPropagation())
                    }
                }
            }(a)), a.el.on("keydown" + g, function(t) {
                return function(e) {
                    if (t.open) switch (t.selectedIdx = t.links.index(document.activeElement), e.keyCode) {
                        case o.HOME:
                        case o.END:
                            return e.keyCode === o.END ? t.selectedIdx = t.links.length - 1 : t.selectedIdx = 0, C(t), e.preventDefault(), e.stopPropagation();
                        case o.ESCAPE:
                            return U(t), t.button.focus(), e.preventDefault(), e.stopPropagation();
                        case o.ARROW_LEFT:
                        case o.ARROW_UP:
                            return t.selectedIdx = Math.max(-1, t.selectedIdx - 1), C(t), e.preventDefault(), e.stopPropagation();
                        case o.ARROW_RIGHT:
                        case o.ARROW_DOWN:
                            return t.selectedIdx = Math.min(t.links.length - 1, t.selectedIdx + 1), C(t), e.preventDefault(), e.stopPropagation()
                    }
                }
            }(a))), M(n, r)
        }

        function S(e, n) {
            var r = t.data(n, g);
            r && (x(r), t.removeData(n, g))
        }

        function x(t) {
            t.overlay && (U(t, !0), t.overlay.remove(), t.overlay = null)
        }

        function R(t) {
            var n = {},
                r = t.config || {},
                i = n.animation = t.el.attr("data-animation") || "default";
            n.animOver = /^over/.test(i), n.animDirect = /left$/.test(i) ? -1 : 1, r.animation !== i && t.open && e.defer(N, t), n.easing = t.el.attr("data-easing") || "ease", n.easing2 = t.el.attr("data-easing2") || "ease";
            var o = t.el.attr("data-duration");
            n.duration = null != o ? Number(o) : 400, n.docHeight = t.el.attr("data-doc-height"), t.config = n
        }

        function C(t) {
            if (t.links[t.selectedIdx]) {
                var e = t.links[t.selectedIdx];
                e.focus(), D(e)
            }
        }

        function N(t) {
            t.open && (U(t, !0), X(t, !0))
        }

        function L(t) {
            return p(function() {
                t.open ? U(t) : X(t)
            })
        }

        function D(e) {
            return function(n) {
                var i = t(this).attr("href");
                r.validClick(n.currentTarget) ? i && 0 === i.indexOf("#") && e.open && U(e) : n.preventDefault()
            }
        }
        s.ready = s.design = s.preview = function() {
            if (u = v && r.env("design"), c = r.env("editor"), n = t(document.body), !(a = d.find(g)).length) return;
            a.each(A), T(), r.resize.on(O)
        }, s.destroy = function() {
            b = t(), T(), a && a.length && a.each(S)
        };
        var P = p(function(t, e) {
            if (t.open) {
                var n = e.closest(".w-nav-menu");
                t.menu.is(n) || U(t)
            }
        });

        function M(e, n) {
            var r = t.data(n, g),
                i = r.collapsed = "none" !== r.button.css("display");
            if (!r.open || i || u || U(r, !0), r.container.length) {
                var o = function(e) {
                    var n = e.container.css(j);
                    "none" === n && (n = "");
                    return function(e, r) {
                        (r = t(r)).css(j, ""), "none" === r.css(j) && r.css(j, n)
                    }
                }(r);
                r.links.each(o), r.dropdowns.each(o)
            }
            r.open && G(r)
        }
        var j = "max-width";

        function F(t, e) {
            e.setAttribute("data-nav-menu-open", "")
        }

        function k(t, e) {
            e.removeAttribute("data-nav-menu-open")
        }

        function X(t, e) {
            if (!t.open) {
                t.open = !0, t.menu.each(F), t.links.addClass(I), t.dropdowns.addClass(m), t.dropdownToggle.addClass(_), t.dropdownList.addClass(y), t.button.addClass(E);
                var n = t.config;
                "none" !== n.animation && l.support.transform || (e = !0);
                var i = G(t),
                    o = t.menu.outerHeight(!0),
                    a = t.menu.outerWidth(!0),
                    c = t.el.height(),
                    s = t.el[0];
                if (M(0, s), w.intro(0, s), r.redraw.up(), u || d.on("click" + g, t.outside), e) v();
                else {
                    var f = "transform " + n.duration + "ms " + n.easing;
                    if (t.overlay && (b = t.menu.prev(), t.overlay.show().append(t.menu)), n.animOver) return l(t.menu).add(f).set({
                        x: n.animDirect * a,
                        height: i
                    }).start({
                        x: 0
                    }).then(v), void(t.overlay && t.overlay.width(a));
                    var p = c + o;
                    l(t.menu).add(f).set({
                        y: -p
                    }).start({
                        y: 0
                    }).then(v)
                }
            }

            function v() {
                t.button.attr("aria-expanded", "true")
            }
        }

        function G(t) {
            var e = t.config,
                r = e.docHeight ? d.height() : n.height();
            return e.animOver ? t.menu.height(r) : "fixed" !== t.el.css("position") && (r -= t.el.outerHeight(!0)), t.overlay && t.overlay.height(r), r
        }

        function U(t, e) {
            if (t.open) {
                t.open = !1, t.button.removeClass(E);
                var n = t.config;
                if (("none" === n.animation || !l.support.transform || n.duration <= 0) && (e = !0), w.outro(0, t.el[0]), d.off("click" + g, t.outside), e) return l(t.menu).stop(), void c();
                var r = "transform " + n.duration + "ms " + n.easing2,
                    i = t.menu.outerHeight(!0),
                    o = t.menu.outerWidth(!0),
                    a = t.el.height();
                if (n.animOver) l(t.menu).add(r).start({
                    x: o * n.animDirect
                }).then(c);
                else {
                    var u = a + i;
                    l(t.menu).add(r).start({
                        y: -u
                    }).then(c)
                }
            }

            function c() {
                t.menu.height(""), l(t.menu).set({
                    x: 0,
                    y: 0
                }), t.menu.each(k), t.links.removeClass(I), t.dropdowns.removeClass(m), t.dropdownToggle.removeClass(_), t.dropdownList.removeClass(y), t.overlay && t.overlay.children().length && (b.length ? t.menu.insertAfter(b) : t.menu.prependTo(t.parent), t.overlay.attr("style", "").hide()), t.el.triggerHandler("w-close"), t.button.attr("aria-expanded", "false")
            }
        }
        return s
    })
}, function(t, e, n) {
    "use strict";
    var r = n(2),
        i = n(13);
    r.define("slider", t.exports = function(t, e) {
        var n, o, a, u, c = {},
            s = t.tram,
            l = t(document),
            f = r.env(),
            d = ".w-slider",
            p = '<div class="w-slider-dot" data-wf-ignore />',
            v = i.triggers;

        function h() {
            (n = l.find(d)).length && (n.each(m), u = null, a || (g(), r.resize.on(E), r.redraw.on(c.redraw)))
        }

        function g() {
            r.resize.off(E), r.redraw.off(c.redraw)
        }

        function E() {
            n.filter(":visible").each(A)
        }

        function m(e, n) {
            var r = t(n),
                i = t.data(n, d);
            if (i || (i = t.data(n, d, {
                    index: 0,
                    depth: 1,
                    el: r,
                    config: {}
                })), i.mask = r.children(".w-slider-mask"), i.left = r.children(".w-slider-arrow-left"), i.right = r.children(".w-slider-arrow-right"), i.nav = r.children(".w-slider-nav"), i.slides = i.mask.children(".w-slide"), i.slides.each(v.reset), u && (i.maskWidth = 0), !s.support.transform) return i.left.hide(), i.right.hide(), i.nav.hide(), void(a = !0);
            i.el.off(d), i.left.off(d), i.right.off(d), i.nav.off(d), _(i), o ? (i.el.on("setting" + d, T(i)), b(i), i.hasTimer = !1) : (i.el.on("swipe" + d, T(i)), i.left.on("click" + d, I(i)), i.right.on("click" + d, w(i)), i.config.autoplay && !i.hasTimer && (i.hasTimer = !0, i.timerCount = 1, function t(e) {
                b(e);
                var n = e.config;
                var r = n.timerMax;
                if (r && e.timerCount++ > r) return;
                e.timerId = window.setTimeout(function() {
                    null == e.timerId || o || (w(e)(), t(e))
                }, n.delay)
            }(i))), i.nav.on("click" + d, "> div", T(i)), f || i.mask.contents().filter(function() {
                return 3 === this.nodeType
            }).remove();
            var c = r.filter(":hidden");
            c.show();
            var l = r.parents(":hidden");
            l.show(), A(e, n), c.css("display", ""), l.css("display", "")
        }

        function _(t) {
            var e = {
                crossOver: 0
            };
            e.animation = t.el.attr("data-animation") || "slide", "outin" === e.animation && (e.animation = "cross", e.crossOver = .5), e.easing = t.el.attr("data-easing") || "ease";
            var n = t.el.attr("data-duration");
            if (e.duration = null != n ? parseInt(n, 10) : 500, y(t.el.attr("data-infinite")) && (e.infinite = !0), y(t.el.attr("data-disable-swipe")) && (e.disableSwipe = !0), y(t.el.attr("data-hide-arrows")) ? e.hideArrows = !0 : t.config.hideArrows && (t.left.show(), t.right.show()), y(t.el.attr("data-autoplay"))) {
                e.autoplay = !0, e.delay = parseInt(t.el.attr("data-delay"), 10) || 2e3, e.timerMax = parseInt(t.el.attr("data-autoplay-limit"), 10);
                var r = "mousedown" + d + " touchstart" + d;
                o || t.el.off(r).one(r, function() {
                    b(t)
                })
            }
            var i = t.right.width();
            e.edge = i ? i + 40 : 100, t.config = e
        }

        function y(t) {
            return "1" === t || "true" === t
        }

        function I(t) {
            return function() {
                O(t, {
                    index: t.index - 1,
                    vector: -1
                })
            }
        }

        function w(t) {
            return function() {
                O(t, {
                    index: t.index + 1,
                    vector: 1
                })
            }
        }

        function b(t) {
            window.clearTimeout(t.timerId), t.timerId = null
        }

        function T(n) {
            return function(i, a) {
                a = a || {};
                var u = n.config;
                if (o && "setting" === i.type) {
                    if ("prev" === a.select) return I(n)();
                    if ("next" === a.select) return w(n)();
                    if (_(n), S(n), null == a.select) return;
                    ! function(n, r) {
                        var i = null;
                        r === n.slides.length && (h(), S(n)), e.each(n.anchors, function(e, n) {
                            t(e.els).each(function(e, o) {
                                t(o).index() === r && (i = n)
                            })
                        }), null != i && O(n, {
                            index: i,
                            immediate: !0
                        })
                    }(n, a.select)
                } else {
                    if ("swipe" === i.type) {
                        if (u.disableSwipe) return;
                        if (r.env("editor")) return;
                        return "left" === a.direction ? w(n)() : "right" === a.direction ? I(n)() : void 0
                    }
                    n.nav.has(i.target).length && O(n, {
                        index: t(i.target).index()
                    })
                }
            }
        }

        function O(e, n) {
            n = n || {};
            var r = e.config,
                i = e.anchors;
            e.previous = e.index;
            var a = n.index,
                c = {};
            a < 0 ? (a = i.length - 1, r.infinite && (c.x = -e.endX, c.from = 0, c.to = i[0].width)) : a >= i.length && (a = 0, r.infinite && (c.x = i[i.length - 1].width, c.from = -i[i.length - 1].x, c.to = c.from - c.x)), e.index = a;
            var l = e.nav.children().eq(e.index).addClass("w-active");
            e.nav.children().not(l).removeClass("w-active"), r.hideArrows && (e.index === i.length - 1 ? e.right.hide() : e.right.show(), 0 === e.index ? e.left.hide() : e.left.show());
            var f = e.offsetX || 0,
                d = e.offsetX = -i[e.index].x,
                p = {
                    x: d,
                    opacity: 1,
                    visibility: ""
                },
                h = t(i[e.index].els),
                g = t(i[e.previous] && i[e.previous].els),
                E = e.slides.not(h),
                m = r.animation,
                _ = r.easing,
                y = Math.round(r.duration),
                I = n.vector || (e.index > e.previous ? 1 : -1),
                w = "opacity " + y + "ms " + _,
                b = "transform " + y + "ms " + _;
            if (o || (h.each(v.intro), E.each(v.outro)), n.immediate && !u) return s(h).set(p), void A();
            if (e.index !== e.previous) {
                if ("cross" === m) {
                    var T = Math.round(y - y * r.crossOver),
                        O = Math.round(y - T);
                    return w = "opacity " + T + "ms " + _, s(g).set({
                        visibility: ""
                    }).add(w).start({
                        opacity: 0
                    }), void s(h).set({
                        visibility: "",
                        x: d,
                        opacity: 0,
                        zIndex: e.depth++
                    }).add(w).wait(O).then({
                        opacity: 1
                    }).then(A)
                }
                if ("fade" === m) return s(g).set({
                    visibility: ""
                }).stop(), void s(h).set({
                    visibility: "",
                    x: d,
                    opacity: 0,
                    zIndex: e.depth++
                }).add(w).start({
                    opacity: 1
                }).then(A);
                if ("over" === m) return p = {
                    x: e.endX
                }, s(g).set({
                    visibility: ""
                }).stop(), void s(h).set({
                    visibility: "",
                    zIndex: e.depth++,
                    x: d + i[e.index].width * I
                }).add(b).start({
                    x: d
                }).then(A);
                r.infinite && c.x ? (s(e.slides.not(g)).set({
                    visibility: "",
                    x: c.x
                }).add(b).start({
                    x: d
                }), s(g).set({
                    visibility: "",
                    x: c.from
                }).add(b).start({
                    x: c.to
                }), e.shifted = g) : (r.infinite && e.shifted && (s(e.shifted).set({
                    visibility: "",
                    x: f
                }), e.shifted = null), s(e.slides).set({
                    visibility: ""
                }).add(b).start({
                    x: d
                }))
            }

            function A() {
                h = t(i[e.index].els), E = e.slides.not(h), "slide" !== m && (p.visibility = "hidden"), s(E).set(p)
            }
        }

        function A(e, n) {
            var r = t.data(n, d);
            if (r) return function(t) {
                var e = t.mask.width();
                if (t.maskWidth !== e) return t.maskWidth = e, !0;
                return !1
            }(r) ? S(r) : void(o && function(e) {
                var n = 0;
                if (e.slides.each(function(e, r) {
                        n += t(r).outerWidth(!0)
                    }), e.slidesWidth !== n) return e.slidesWidth = n, !0;
                return !1
            }(r) && S(r))
        }

        function S(e) {
            var n = 1,
                r = 0,
                i = 0,
                a = 0,
                u = e.maskWidth,
                c = u - e.config.edge;
            c < 0 && (c = 0), e.anchors = [{
                els: [],
                x: 0,
                width: 0
            }], e.slides.each(function(o, s) {
                i - r > c && (n++, r += u, e.anchors[n - 1] = {
                    els: [],
                    x: i,
                    width: 0
                }), a = t(s).outerWidth(!0), i += a, e.anchors[n - 1].width += a, e.anchors[n - 1].els.push(s)
            }), e.endX = i, o && (e.pages = null), e.nav.length && e.pages !== n && (e.pages = n, function(e) {
                var n, r = [],
                    i = e.el.attr("data-nav-spacing");
                i && (i = parseFloat(i) + "px");
                for (var o = 0; o < e.pages; o++) n = t(p), e.nav.hasClass("w-num") && n.text(o + 1), null != i && n.css({
                    "margin-left": i,
                    "margin-right": i
                }), r.push(n);
                e.nav.empty().append(r)
            }(e));
            var s = e.index;
            s >= n && (s = n - 1), O(e, {
                immediate: !0,
                index: s
            })
        }
        return c.ready = function() {
            o = r.env("design"), h()
        }, c.design = function() {
            o = !0, h()
        }, c.preview = function() {
            o = !1, h()
        }, c.redraw = function() {
            u = !0, h()
        }, c.destroy = g, c
    })
}, function(t, e, n) {
    "use strict";
    var r = n(2),
        i = n(13);
    r.define("tabs", t.exports = function(t) {
        var e, n, o = {},
            a = t.tram,
            u = t(document),
            c = r.env,
            s = c.safari,
            l = c(),
            f = "data-w-tab",
            d = "data-w-pane",
            p = ".w-tabs",
            v = "w--current",
            h = "w--tab-active",
            g = i.triggers,
            E = !1;

        function m() {
            n = l && r.env("design"), (e = u.find(p)).length && (e.each(I), r.env("preview") && !E && e.each(y), _(), r.redraw.on(o.redraw))
        }

        function _() {
            r.redraw.off(o.redraw)
        }

        function y(e, n) {
            var r = t.data(n, p);
            r && (r.links && r.links.each(g.reset), r.panes && r.panes.each(g.reset))
        }

        function I(e, r) {
            var i = p.substr(1) + "-" + e,
                o = t(r),
                a = t.data(r, p);
            if (a || (a = t.data(r, p, {
                    el: o,
                    config: {}
                })), a.current = null, a.tabIdentifier = i + "-" + f, a.paneIdentifier = i + "-" + d, a.menu = o.children(".w-tab-menu"), a.links = a.menu.children(".w-tab-link"), a.content = o.children(".w-tab-content"), a.panes = a.content.children(".w-tab-pane"), a.el.off(p), a.links.off(p), a.menu.attr("role", "tablist"), a.links.attr("tabindex", "-1"), function(t) {
                    var e = {};
                    e.easing = t.el.attr("data-easing") || "ease";
                    var n = parseInt(t.el.attr("data-duration-in"), 10);
                    n = e.intro = n == n ? n : 0;
                    var r = parseInt(t.el.attr("data-duration-out"), 10);
                    r = e.outro = r == r ? r : 0, e.immediate = !n && !r, t.config = e
                }(a), !n) {
                a.links.on("click" + p, function(t) {
                    return function(e) {
                        e.preventDefault();
                        var n = e.currentTarget.getAttribute(f);
                        n && w(t, {
                            tab: n
                        })
                    }
                }(a)), a.links.on("keydown" + p, function(t) {
                    return function(e) {
                        var n = function(t) {
                                var e = t.current;
                                return Array.prototype.findIndex.call(t.links, function(t) {
                                    return t.getAttribute(f) === e
                                }, null)
                            }(t),
                            r = e.key,
                            i = {
                                ArrowLeft: n - 1,
                                ArrowUp: n - 1,
                                ArrowRight: n + 1,
                                ArrowDown: n + 1,
                                End: t.links.length - 1,
                                Home: 0
                            };
                        if (r in i) {
                            e.preventDefault();
                            var o = i[r]; - 1 === o && (o = t.links.length - 1), o === t.links.length && (o = 0);
                            var a = t.links[o],
                                u = a.getAttribute(f);
                            u && w(t, {
                                tab: u
                            })
                        }
                    }
                }(a));
                var u = a.links.filter("." + v).attr(f);
                u && w(a, {
                    tab: u,
                    immediate: !0
                })
            }
        }

        function w(e, n) {
            n = n || {};
            var i = e.config,
                o = i.easing,
                u = n.tab;
            if (u !== e.current) {
                var c;
                e.current = u, e.links.each(function(r, o) {
                    var a = t(o);
                    if (n.immediate || i.immediate) {
                        var s = e.panes[r];
                        o.id || (o.id = e.tabIdentifier + "-" + r), s.id || (s.id = e.paneIdentifier + "-" + r), o.href = "#" + s.id, o.setAttribute("role", "tab"), o.setAttribute("aria-controls", s.id), o.setAttribute("aria-selected", "false"), s.setAttribute("role", "tabpanel"), s.setAttribute("aria-labelledby", o.id)
                    }
                    o.getAttribute(f) === u ? (c = o, a.addClass(v).removeAttr("tabindex").attr({
                        "aria-selected": "true"
                    }).each(g.intro)) : a.hasClass(v) && a.removeClass(v).attr({
                        tabindex: "-1",
                        "aria-selected": "false"
                    }).each(g.outro)
                });
                var l = [],
                    d = [];
                e.panes.each(function(e, n) {
                    var r = t(n);
                    n.getAttribute(f) === u ? l.push(n) : r.hasClass(h) && d.push(n)
                });
                var p = t(l),
                    m = t(d);
                if (n.immediate || i.immediate) return p.addClass(h).each(g.intro), m.removeClass(h), void(E || r.redraw.up());
                var _ = window.scrollX,
                    y = window.scrollY;
                c.focus(), window.scrollTo(_, y), m.length && i.outro ? (m.each(g.outro), a(m).add("opacity " + i.outro + "ms " + o, {
                    fallback: s
                }).start({
                    opacity: 0
                }).then(function() {
                    return b(i, m, p)
                })) : b(i, m, p)
            }
        }

        function b(t, e, n) {
            if (e.removeClass(h).css({
                    opacity: "",
                    transition: "",
                    transform: "",
                    width: "",
                    height: ""
                }), n.addClass(h).each(g.intro), r.redraw.up(), !t.intro) return a(n).set({
                opacity: 1
            });
            a(n).set({
                opacity: 0
            }).redraw().add("opacity " + t.intro + "ms " + t.easing, {
                fallback: s
            }).start({
                opacity: 1
            })
        }
        return o.ready = o.design = o.preview = m, o.redraw = function() {
            E = !0, m(), E = !1
        }, o.destroy = function() {
            (e = u.find(p)).length && (e.each(y), _())
        }, o
    })
}]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e-3": {
            "id": "e-3",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-4"
                },
                "instant": false
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".header.txt-align-center",
                "originalId": "5ea9dfa2ffb63e801d67f130|c071cd29-96cb-05ce-119a-d6e5b62e6cfd",
                "appliesTo": "CLASS"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1571510461408
        },
        "e-43": {
            "id": "e-43",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "config": {
                    "actionListId": "slideInTop",
                    "autoStopEventId": "e-44"
                },
                "instant": false
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "997f5d4f-6dd8-e430-fc60-1086491fadb5"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 125,
                "direction": "TOP",
                "effectIn": true
            },
            "createdOn": 1584322886099
        },
        "e-44": {
            "id": "e-44",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "config": {
                    "actionListId": "slideOutTop",
                    "autoStopEventId": "e-43"
                },
                "instant": false
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "997f5d4f-6dd8-e430-fc60-1086491fadb5"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "TOP",
                "effectIn": false
            },
            "createdOn": 1584322886099
        },
        "e-62": {
            "id": "e-62",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-61"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e6f0ed80f8bc3f542bc08bf"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1584336599885
        },
        "e-64": {
            "id": "e-64",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-63"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e6f15e30f8bc33531bc2e48"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1584338402852
        },
        "e-73": {
            "id": "e-73",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-64",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-74"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".hero.flexboxv",
                "originalId": "5e6f1b03a2ae9722e732bace|70441843-4c26-9c51-a33d-4ae2dde2c8d5",
                "appliesTo": "CLASS"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 50,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1584519699376
        },
        "e-74": {
            "id": "e-74",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-63",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-73"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".hero.flexboxv",
                "originalId": "5e6f1b03a2ae9722e732bace|70441843-4c26-9c51-a33d-4ae2dde2c8d5",
                "appliesTo": "CLASS"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 50,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1584519699378
        },
        "e-78": {
            "id": "e-78",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-77"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5db21f3641deb0fb072d1fd3"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1584763050360
        },
        "e-80": {
            "id": "e-80",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-79"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e75c1e0d0097c3e12f27400"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1584775647144
        },
        "e-81": {
            "id": "e-81",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".slant-outline.off-center",
                "originalId": "5db21f3641deb0fb072d1fd3|90dcc8f0-8658-e3cc-626c-df83987d9938",
                "appliesTo": "CLASS"
            },
            "config": [{
                "continuousParameterGroupId": "a-16-p",
                "smoothing": 70,
                "startsEntering": true,
                "addStartOffset": true,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": true,
                "endOffsetValue": 50
            }],
            "createdOn": 1584811180435
        },
        "e-83": {
            "id": "e-83",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-84"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".navbar-link",
                "originalId": "ced0583e-6dbd-9a6a-c255-d3b71cf0073a",
                "appliesTo": "CLASS"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1584815555078
        },
        "e-84": {
            "id": "e-84",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-83"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".navbar-link",
                "originalId": "ced0583e-6dbd-9a6a-c255-d3b71cf0073a",
                "appliesTo": "CLASS"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1584815555079
        },
        "e-86": {
            "id": "e-86",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-87"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "ced0583e-6dbd-9a6a-c255-d3b71cf0073e"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1584824703370
        },
        "e-87": {
            "id": "e-87",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-86"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "ced0583e-6dbd-9a6a-c255-d3b71cf0073e"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1584824703385
        },
        "e-88": {
            "id": "e-88",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-89"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e75c1e0d0097c3e12f27400|6cfbdf8b-d8b2-fbc2-b2e3-16515da9e2a3"
            },
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1584830689578
        },
        "e-91": {
            "id": "e-91",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".axis-panel",
                "originalId": "5db21f3641deb0fb072d1fd3|c21a496c-11d4-74ef-63f5-19c1b536a7c8",
                "appliesTo": "CLASS"
            },
            "config": [{
                "continuousParameterGroupId": "a-17-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 76,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-17-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 76,
                "restingState": 50
            }],
            "createdOn": 1584850740462
        },
        "e-92": {
            "id": "e-92",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-93"
                },
                "instant": false
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".casepreview",
                "originalId": "5db21f3641deb0fb072d1fd3|4f2b95d7-91c7-57a2-a0bc-52408152648d",
                "appliesTo": "CLASS"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1584850794321
        },
        "e-93": {
            "id": "e-93",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "config": {
                    "actionListId": "slideOutBottom",
                    "autoStopEventId": "e-92"
                },
                "instant": false
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".casepreview",
                "originalId": "5db21f3641deb0fb072d1fd3|4f2b95d7-91c7-57a2-a0bc-52408152648d",
                "appliesTo": "CLASS"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": false
            },
            "createdOn": 1584850794322
        },
        "e-94": {
            "id": "e-94",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-95"
                },
                "instant": false
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e75c1e0d0097c3e12f27400|7449c605-40b7-5c93-f927-6df9adb3e420"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1584850898418
        },
        "e-96": {
            "id": "e-96",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-97"
                },
                "instant": false
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e75c1e0d0097c3e12f27400|bd4ea428-b232-cfe3-fb81-843b4c08d780"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 279,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1584850911190
        },
        "e-98": {
            "id": "e-98",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-99"
                },
                "instant": false
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e75c1e0d0097c3e12f27400|e9280c1a-03a2-9fd5-8c23-7703b50cdbf9"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1584850940688
        },
        "e-100": {
            "id": "e-100",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5db21f3641deb0fb072d1fd3|70441843-4c26-9c51-a33d-4ae2dde2c8d5"
            },
            "config": [{
                "continuousParameterGroupId": "a-24-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 81,
                "restingState": 0
            }, {
                "continuousParameterGroupId": "a-24-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 81,
                "restingState": 0
            }],
            "createdOn": 1584852696039
        },
        "e-101": {
            "id": "e-101",
            "eventTypeId": "NAVBAR_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-102"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "ced0583e-6dbd-9a6a-c255-d3b71cf0072f"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1584892479623
        },
        "e-102": {
            "id": "e-102",
            "eventTypeId": "NAVBAR_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-101"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "ced0583e-6dbd-9a6a-c255-d3b71cf0072f"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1584892479625
        },
        "e-105": {
            "id": "e-105",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-106"
                },
                "instant": false
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".slideup",
                "originalId": "5e6ed9460f8bc37f01bacc20|48363e16-933c-7b65-9189-4dda138460bd",
                "appliesTo": "CLASS"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1584894905948
        },
        "e-106": {
            "id": "e-106",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "config": {
                    "actionListId": "slideOutBottom",
                    "autoStopEventId": "e-105"
                },
                "instant": false
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".slideup",
                "originalId": "5e6ed9460f8bc37f01bacc20|48363e16-933c-7b65-9189-4dda138460bd",
                "appliesTo": "CLASS"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": false
            },
            "createdOn": 1584894905949
        },
        "e-111": {
            "id": "e-111",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-33",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-112"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e75c1e0d0097c3e12f27400|1440b479-d96e-1b63-5c07-0583c8f444f3"
            },
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1584981363480
        },
        "e-113": {
            "id": "e-113",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-33",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-114"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5db21f3641deb0fb072d1fd3|fba02dec-a742-806d-a755-13c2aad724fd"
            },
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1584991909477
        },
        "e-116": {
            "id": "e-116",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-115"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e791502b1b98d5cdd3d0694"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1584993537447
        },
        "e-117": {
            "id": "e-117",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-118"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e791502b1b98d5cdd3d0694|6cfbdf8b-d8b2-fbc2-b2e3-16515da9e2a3"
            },
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1584993537447
        },
        "e-119": {
            "id": "e-119",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-120"
                },
                "instant": false
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e791502b1b98d5cdd3d0694|7449c605-40b7-5c93-f927-6df9adb3e420"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1584993537447
        },
        "e-121": {
            "id": "e-121",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-122"
                },
                "instant": false
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e791502b1b98d5cdd3d0694|bd4ea428-b232-cfe3-fb81-843b4c08d780"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 279,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1584993537447
        },
        "e-123": {
            "id": "e-123",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-124"
                },
                "instant": false
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e791502b1b98d5cdd3d0694|e9280c1a-03a2-9fd5-8c23-7703b50cdbf9"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1584993537447
        },
        "e-125": {
            "id": "e-125",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-33",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-126"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e791502b1b98d5cdd3d0694|1440b479-d96e-1b63-5c07-0583c8f444f3"
            },
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1584993537447
        },
        "e-127": {
            "id": "e-127",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".slant-outline.case-title.flipped",
                "originalId": "5e798936ddb8c3b9d2fe3516|bb5cec90-e8bd-edd0-7854-b8955c6dc142",
                "appliesTo": "CLASS"
            },
            "config": [{
                "continuousParameterGroupId": "a-35-p",
                "smoothing": 69,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1585072820520
        },
        "e-128": {
            "id": "e-128",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e7a4dec161172ce96cdd138|bd4ea428-b232-cfe3-fb81-843b4c08d780"
            },
            "config": [{
                "continuousParameterGroupId": "a-36-p",
                "smoothing": 81,
                "startsEntering": false,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1585079136342
        },
        "e-129": {
            "id": "e-129",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e7a66f450cc0084ddaeee8d|bd4ea428-b232-cfe3-fb81-843b4c08d780"
            },
            "config": [{
                "continuousParameterGroupId": "a-36-p",
                "smoothing": 81,
                "startsEntering": false,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1585080052951
        },
        "e-130": {
            "id": "e-130",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e7a77bbc97ca2358882f8f2|bd4ea428-b232-cfe3-fb81-843b4c08d780"
            },
            "config": [{
                "continuousParameterGroupId": "a-36-p",
                "smoothing": 81,
                "startsEntering": false,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1585084348201
        },
        "e-132": {
            "id": "e-132",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-131"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e798936ddb8c3b9d2fe3516"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1585084457535
        },
        "e-134": {
            "id": "e-134",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-133"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e7a4dec161172ce96cdd138"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1585084475005
        },
        "e-136": {
            "id": "e-136",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-135"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e7a66f450cc0084ddaeee8d"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1585084489869
        },
        "e-138": {
            "id": "e-138",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-137"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e7a77bbc97ca2358882f8f2"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1585084545658
        },
        "e-139": {
            "id": "e-139",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e7a8cce2016b9e363fc68a2|bd4ea428-b232-cfe3-fb81-843b4c08d780"
            },
            "config": [{
                "continuousParameterGroupId": "a-36-p",
                "smoothing": 81,
                "startsEntering": false,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1585089742263
        },
        "e-141": {
            "id": "e-141",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-140"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e7a8cce2016b9e363fc68a2"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1585089742263
        },
        "e-142": {
            "id": "e-142",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e7a933e31c5aa69231dbd1c|bd4ea428-b232-cfe3-fb81-843b4c08d780"
            },
            "config": [{
                "continuousParameterGroupId": "a-36-p",
                "smoothing": 81,
                "startsEntering": false,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1585091391134
        },
        "e-144": {
            "id": "e-144",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-143"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e7a933e31c5aa69231dbd1c"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1585091391134
        },
        "e-145": {
            "id": "e-145",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e7a94c92c95961c9bf7fe66|bd4ea428-b232-cfe3-fb81-843b4c08d780"
            },
            "config": [{
                "continuousParameterGroupId": "a-36-p",
                "smoothing": 81,
                "startsEntering": false,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1585091785305
        },
        "e-147": {
            "id": "e-147",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-146"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e7a94c92c95961c9bf7fe66"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1585091785305
        },
        "e-149": {
            "id": "e-149",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e791502b1b98d5cdd3d0694|bd4ea428-b232-cfe3-fb81-843b4c08d780"
            },
            "config": [{
                "continuousParameterGroupId": "a-36-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1585143999444
        },
        "e-150": {
            "id": "e-150",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e75c1e0d0097c3e12f27400|bd4ea428-b232-cfe3-fb81-843b4c08d780"
            },
            "config": [{
                "continuousParameterGroupId": "a-36-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1585144153628
        },
        "e-151": {
            "id": "e-151",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e798936ddb8c3b9d2fe3516|bd4ea428-b232-cfe3-fb81-843b4c08d780"
            },
            "config": [{
                "continuousParameterGroupId": "a-36-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1585144175084
        },
        "e-152": {
            "id": "e-152",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-153"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5db21f3641deb0fb072d1fd3|59a842d1-5387-53f3-f49a-3fb08d90f8ee"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1585157718946
        },
        "e-153": {
            "id": "e-153",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-152"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5db21f3641deb0fb072d1fd3|59a842d1-5387-53f3-f49a-3fb08d90f8ee"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1585157718950
        },
        "e-154": {
            "id": "e-154",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-39",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-155"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5db21f3641deb0fb072d1fd3|bba64d16-ca0b-c4db-0fbc-d070853b470b"
            },
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1585881250826
        },
        "e-158": {
            "id": "e-158",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-159"
                },
                "instant": false
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5ea9dfa2ffb63e801d67f130|493b2cc3-970d-7975-dada-2bb4ba598a1b"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1588191140070
        },
        "e-160": {
            "id": "e-160",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-161"
                },
                "instant": false
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5ea9dfa2ffb63e801d67f130|d301f7a8-46bd-5f74-5b58-6024f430f741"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1588191140070
        },
        "e-172": {
            "id": "e-172",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-45",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-173"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "ba97f1de-069a-54be-876b-ad6fe745a0fa"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1588284437856
        },
        "e-174": {
            "id": "e-174",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-46",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5ea9dfa2ffb63e801d67f130|9f624511-7d06-27cb-e7f6-d760599aeea2"
            },
            "config": [{
                "continuousParameterGroupId": "a-46-p",
                "smoothing": 60,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": true,
                "endOffsetValue": 55
            }],
            "createdOn": 1588285122039
        },
        "e-175": {
            "id": "e-175",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-46",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5ea9dfa2ffb63e801d67f130|3db82e13-c46f-489b-f602-91f96d8359d6"
            },
            "config": [{
                "continuousParameterGroupId": "a-46-p",
                "smoothing": 60,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 90,
                "startsExiting": false,
                "addEndOffset": true,
                "endOffsetValue": 55
            }],
            "createdOn": 1588285827105
        },
        "e-176": {
            "id": "e-176",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-46",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5ea9dfa2ffb63e801d67f130|84fe8d57-72e3-edf5-dc15-6e0f6374ae34"
            },
            "config": [{
                "continuousParameterGroupId": "a-46-p",
                "smoothing": 60,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": true,
                "endOffsetValue": 55
            }],
            "createdOn": 1588287000829
        },
        "e-177": {
            "id": "e-177",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-46",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5ea9dfa2ffb63e801d67f130|916579d5-ee52-80e4-ad0d-0e389fd0a4d1"
            },
            "config": [{
                "continuousParameterGroupId": "a-46-p",
                "smoothing": 60,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": true,
                "endOffsetValue": 55
            }],
            "createdOn": 1588287643331
        },
        "e-178": {
            "id": "e-178",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-46",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5ea9dfa2ffb63e801d67f130|800fd2a8-5302-5015-e1f9-018746ac1cbc"
            },
            "config": [{
                "continuousParameterGroupId": "a-46-p",
                "smoothing": 60,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": true,
                "endOffsetValue": 55
            }],
            "createdOn": 1588287659752
        },
        "e-179": {
            "id": "e-179",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-46",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5ea9dfa2ffb63e801d67f130|03146d25-e703-670a-651c-e53f9feddbfa"
            },
            "config": [{
                "continuousParameterGroupId": "a-46-p",
                "smoothing": 60,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": true,
                "endOffsetValue": 55
            }],
            "createdOn": 1588287676230
        },
        "e-180": {
            "id": "e-180",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-181"
                },
                "instant": false
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "selector": ".pg-box",
                "originalId": "5ea9dfa2ffb63e801d67f130|954f4ecf-2924-f2a6-a4a0-46e0357bd3dd",
                "appliesTo": "CLASS"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 25,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1588287818422
        },
        "e-181": {
            "id": "e-181",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "config": {
                    "actionListId": "slideOutLeft",
                    "autoStopEventId": "e-180"
                },
                "instant": false
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "selector": ".pg-box",
                "originalId": "5ea9dfa2ffb63e801d67f130|954f4ecf-2924-f2a6-a4a0-46e0357bd3dd",
                "appliesTo": "CLASS"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": false
            },
            "createdOn": 1588287818427
        },
        "e-184": {
            "id": "e-184",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-185"
                },
                "instant": false
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".pg-data",
                "originalId": "5ea9dfa2ffb63e801d67f130|b4cda2eb-099b-aa9f-f156-d72998a8b25c",
                "appliesTo": "CLASS"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 25,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1588287975177
        },
        "e-185": {
            "id": "e-185",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "config": {
                    "actionListId": "slideOutRight",
                    "autoStopEventId": "e-184"
                },
                "instant": false
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".pg-data",
                "originalId": "5ea9dfa2ffb63e801d67f130|b4cda2eb-099b-aa9f-f156-d72998a8b25c",
                "appliesTo": "CLASS"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "RIGHT",
                "effectIn": false
            },
            "createdOn": 1588287975182
        },
        "e-186": {
            "id": "e-186",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-47",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5ea9dfa2ffb63e801d67f130|7729abc1-5b70-1d2d-b3ba-7d0a6a91b30d"
            },
            "config": [{
                "continuousParameterGroupId": "a-47-p",
                "smoothing": 86,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": true,
                "endOffsetValue": 100
            }],
            "createdOn": 1588289629667
        },
        "e-187": {
            "id": "e-187",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-48",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-188"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5ea9dfa2ffb63e801d67f130|06e9e379-33ad-468e-7110-270a2192add5"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 50,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1588290175542
        },
        "e-189": {
            "id": "e-189",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-190"
                },
                "instant": false
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5ea9dfa2ffb63e801d67f130|1b59e1ab-2a2c-a9cd-de21-9018f1b93c7f"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 11,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1588367559160
        },
        "e-191": {
            "id": "e-191",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-192"
                },
                "instant": false
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5ea9dfa2ffb63e801d67f130|1fe350ac-3581-0428-9fef-95be19d00b2a"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1588367573697
        },
        "e-193": {
            "id": "e-193",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-194"
                },
                "instant": false
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5ea9dfa2ffb63e801d67f130|1fe350ac-3581-0428-9fef-95be19d00b2f"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1588367588954
        },
        "e-195": {
            "id": "e-195",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-196"
                },
                "instant": false
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5ea9dfa2ffb63e801d67f130|1fe350ac-3581-0428-9fef-95be19d00b34"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1588367605369
        },
        "e-197": {
            "id": "e-197",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-50",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-198"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".course-cta.gift",
                "originalId": "5ea9dfa2ffb63e801d67f130|3aac99ca-8c9c-fe4b-43b4-48dcf3cada3e",
                "appliesTo": "CLASS"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1588376781709
        },
        "e-199": {
            "id": "e-199",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-51",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-200"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".toggle-off",
                "originalId": "bde059ad-b5cd-5f32-e54b-5028058a5cfd",
                "appliesTo": "CLASS"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1588376926793
        },
        "e-201": {
            "id": "e-201",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-51",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-202"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".modal-close",
                "originalId": "bde059ad-b5cd-5f32-e54b-5028058a5cea",
                "appliesTo": "CLASS"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1588376974311
        },
        "e-205": {
            "id": "e-205",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-206"
                },
                "instant": false
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "caa94a08-59b3-d0bd-6102-7e074c34a7e3"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1588709045908
        },
        "e-237": {
            "id": "e-237",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-59",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-238"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "95068f79-ea32-6432-b2e9-3e82684ccd21"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1588734216748
        },
        "e-238": {
            "id": "e-238",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-237"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "95068f79-ea32-6432-b2e9-3e82684ccd21"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1588734216748
        },
        "e-241": {
            "id": "e-241",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-61",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-242"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".course-tab.pill",
                "originalId": "5eb227c208cb2d1cf61e55f3|34b99481-508c-ef8a-cd26-12edf922f254",
                "appliesTo": "CLASS"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1588778322225
        },
        "e-242": {
            "id": "e-242",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-62",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-241"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".course-tab.pill",
                "originalId": "5eb227c208cb2d1cf61e55f3|34b99481-508c-ef8a-cd26-12edf922f254",
                "appliesTo": "CLASS"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1588778322230
        },
        "e-245": {
            "id": "e-245",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-64",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-246"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5db21f3641deb0fb072d1fd3|70441843-4c26-9c51-a33d-4ae2dde2c8d5"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 50,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1588812853621
        },
        "e-246": {
            "id": "e-246",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-63",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-245"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5db21f3641deb0fb072d1fd3|70441843-4c26-9c51-a33d-4ae2dde2c8d5"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 50,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1588812853628
        },
        "e-247": {
            "id": "e-247",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-64",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-248"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e75c1e0d0097c3e12f27400|dff34b61-842d-cf68-0f6c-5499217b5fa4"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1588813023878
        },
        "e-248": {
            "id": "e-248",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-63",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-247"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e75c1e0d0097c3e12f27400|dff34b61-842d-cf68-0f6c-5499217b5fa4"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1588813023884
        },
        "e-249": {
            "id": "e-249",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-64",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-250"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e791502b1b98d5cdd3d0694|dff34b61-842d-cf68-0f6c-5499217b5fa4"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1588813099509
        },
        "e-250": {
            "id": "e-250",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-63",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-249"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e791502b1b98d5cdd3d0694|dff34b61-842d-cf68-0f6c-5499217b5fa4"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1588813099515
        },
        "e-251": {
            "id": "e-251",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-64",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-252"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e798936ddb8c3b9d2fe3516|dff34b61-842d-cf68-0f6c-5499217b5fa4"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1588813119682
        },
        "e-252": {
            "id": "e-252",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-63",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-251"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e798936ddb8c3b9d2fe3516|dff34b61-842d-cf68-0f6c-5499217b5fa4"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1588813119704
        },
        "e-253": {
            "id": "e-253",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-64",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-254"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e7a4dec161172ce96cdd138|dff34b61-842d-cf68-0f6c-5499217b5fa4"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1588813182679
        },
        "e-254": {
            "id": "e-254",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-63",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-253"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e7a4dec161172ce96cdd138|dff34b61-842d-cf68-0f6c-5499217b5fa4"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1588813182698
        },
        "e-255": {
            "id": "e-255",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-64",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-256"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e7a66f450cc0084ddaeee8d|dff34b61-842d-cf68-0f6c-5499217b5fa4"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1588813218691
        },
        "e-256": {
            "id": "e-256",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-63",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-255"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e7a66f450cc0084ddaeee8d|dff34b61-842d-cf68-0f6c-5499217b5fa4"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1588813218695
        },
        "e-257": {
            "id": "e-257",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-71",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-258"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5ea9dfa2ffb63e801d67f130|70441843-4c26-9c51-a33d-4ae2dde2c8d5"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 50,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1588912716223
        },
        "e-258": {
            "id": "e-258",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-70",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-257"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5ea9dfa2ffb63e801d67f130|70441843-4c26-9c51-a33d-4ae2dde2c8d5"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 50,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1588912716229
        },
        "e-261": {
            "id": "e-261",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-65",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-262"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".start-button",
                "originalId": "5ea9dfa2ffb63e801d67f130|4bba67e3-23a4-1fb7-5008-15083bfb699e",
                "appliesTo": "CLASS"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1588973737918
        },
        "e-262": {
            "id": "e-262",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-66",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-261"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".start-button",
                "originalId": "5ea9dfa2ffb63e801d67f130|4bba67e3-23a4-1fb7-5008-15083bfb699e",
                "appliesTo": "CLASS"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1588973737922
        },
        "e-263": {
            "id": "e-263",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-65",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-264"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "selector": ".course-card",
                "originalId": "129fba85-e425-9ff0-d559-f8c2a020bd69",
                "appliesTo": "CLASS"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1588974209559
        },
        "e-264": {
            "id": "e-264",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-66",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-263"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "selector": ".course-card",
                "originalId": "129fba85-e425-9ff0-d559-f8c2a020bd69",
                "appliesTo": "CLASS"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1588974209563
        },
        "e-265": {
            "id": "e-265",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-67",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-266"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5ea9dfa2ffb63e801d67f130|689b5eaf-10d5-2b3b-cfd8-887f59488d10"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1588983860602
        },
        "e-267": {
            "id": "e-267",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-68",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-268"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "selector": ".course-card",
                "originalId": "5ea9dfa2ffb63e801d67f130|706f131e-fe0a-fa17-94fa-3de460801214",
                "appliesTo": "CLASS"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1588983867754
        },
        "e-268": {
            "id": "e-268",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-69",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-267"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "selector": ".course-card",
                "originalId": "5ea9dfa2ffb63e801d67f130|706f131e-fe0a-fa17-94fa-3de460801214",
                "appliesTo": "CLASS"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1588983867754
        },
        "e-269": {
            "id": "e-269",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_EFFECT",
                "config": {
                    "actionListId": "growIn",
                    "autoStopEventId": "e-270"
                },
                "instant": false
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5ea9dfa2ffb63e801d67f130|69e516cf-3a86-6676-c1d8-60962eed4484"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1593692362592
        },
        "e-271": {
            "id": "e-271",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_EFFECT",
                "config": {
                    "actionListId": "growIn",
                    "autoStopEventId": "e-272"
                },
                "instant": false
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5ea9dfa2ffb63e801d67f130|385e3ae7-6bbd-0afe-0bf3-55ab900607d5"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 258,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1593692434417
        },
        "e-273": {
            "id": "e-273",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-274"
                },
                "instant": false
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5ea9dfa2ffb63e801d67f130|db803c9c-f88b-5c52-b6c5-588e83cc1b80"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 331,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1593692575069
        },
        "e-276": {
            "id": "e-276",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-72",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-275"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5ea9dfa2ffb63e801d67f130"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1593692663487
        },
        "e-277": {
            "id": "e-277",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-73",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-278"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".navbar-link",
                "originalId": "5ea9dfa2ffb63e801d67f130|3f443793-b616-0ab2-5b58-373952e46884",
                "appliesTo": "CLASS"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1593694893150
        },
        "e-278": {
            "id": "e-278",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-74",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-277"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".navbar-link",
                "originalId": "5ea9dfa2ffb63e801d67f130|3f443793-b616-0ab2-5b58-373952e46884",
                "appliesTo": "CLASS"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1593694893150
        },
        "e-280": {
            "id": "e-280",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-76",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-281"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5ea9dfa2ffb63e801d67f130|3f443793-b616-0ab2-5b58-373952e46895"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1593694893150
        },
        "e-281": {
            "id": "e-281",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-77",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-280"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5ea9dfa2ffb63e801d67f130|3f443793-b616-0ab2-5b58-373952e46895"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1593694893150
        },
        "e-282": {
            "id": "e-282",
            "eventTypeId": "NAVBAR_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-78",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-283"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5ea9dfa2ffb63e801d67f130|8988d77d-14ee-8705-a96f-bbdde28c04c9"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1593694893150
        },
        "e-283": {
            "id": "e-283",
            "eventTypeId": "NAVBAR_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-79",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-282"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5ea9dfa2ffb63e801d67f130|8988d77d-14ee-8705-a96f-bbdde28c04c9"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1593694893150
        }
    },
    "actionLists": {
        "a-15": {
            "id": "a-15",
            "title": "Global Hero",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-15-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".logo-triangle",
                            "selectorGuids": ["aad103e6-c4f7-700d-91b5-a79929d6bbac"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-15-n-22",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5e6ed9460f8bc37f01bacc20|b32e737a-7cfc-ff39-286f-6580f49a9907"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-15-n-20",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".hero-cta",
                            "selectorGuids": ["5b0047dd-63b2-64f8-2525-eafbb75e0416"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-15-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".p-hero.top",
                            "selectorGuids": ["a3902d09-b26e-7007-ff34-a0835ee5abab", "9cf6fd3c-d621-34c1-ae2b-e8deaaefe7e1"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-15-n-11",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".hero-title.h1",
                            "selectorGuids": ["105626ee-188c-c0b3-7500-c003c9732a2e", "400721ff-2907-ebb6-a0bb-0b76a529b689"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-15-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".hero-title.h1",
                            "selectorGuids": ["105626ee-188c-c0b3-7500-c003c9732a2e", "400721ff-2907-ebb6-a0bb-0b76a529b689"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-15-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".hero-logo",
                            "selectorGuids": ["8f04cc37-1c4f-90c2-baa0-8071be082128"]
                        },
                        "yValue": 15,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-15-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".hero-logo",
                            "selectorGuids": ["8f04cc37-1c4f-90c2-baa0-8071be082128"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-15-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".logo-triangle",
                            "selectorGuids": ["aad103e6-c4f7-700d-91b5-a79929d6bbac"]
                        },
                        "yValue": -25,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-15-n-17",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".loader",
                            "selectorGuids": ["89dcdf5d-46ff-5767-8cf5-bb2c2fc546d3"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-15-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "selector": ".hero-logo",
                            "selectorGuids": ["8f04cc37-1c4f-90c2-baa0-8071be082128"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-15-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutCirc",
                        "duration": 800,
                        "target": {
                            "selector": ".hero-logo",
                            "selectorGuids": ["8f04cc37-1c4f-90c2-baa0-8071be082128"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-15-n-12",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 300,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "selector": ".hero-title.h1",
                            "selectorGuids": ["105626ee-188c-c0b3-7500-c003c9732a2e", "400721ff-2907-ebb6-a0bb-0b76a529b689"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-15-n-14",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 300,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".p-hero.top",
                            "selectorGuids": ["a3902d09-b26e-7007-ff34-a0835ee5abab", "9cf6fd3c-d621-34c1-ae2b-e8deaaefe7e1"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-15-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 300,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "selector": ".hero-title.h1",
                            "selectorGuids": ["105626ee-188c-c0b3-7500-c003c9732a2e", "400721ff-2907-ebb6-a0bb-0b76a529b689"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-15-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 500,
                        "easing": "inOutCirc",
                        "duration": 500,
                        "target": {
                            "selector": ".logo-triangle",
                            "selectorGuids": ["aad103e6-c4f7-700d-91b5-a79929d6bbac"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-15-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".logo-triangle",
                            "selectorGuids": ["aad103e6-c4f7-700d-91b5-a79929d6bbac"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-15-n-21",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 700,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".hero-cta",
                            "selectorGuids": ["5b0047dd-63b2-64f8-2525-eafbb75e0416"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-15-n-23",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 900,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5e6ed9460f8bc37f01bacc20|b32e737a-7cfc-ff39-286f-6580f49a9907"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1584763059375,
            "useFirstGroupAsInitialState": true
        },
        "a-64": {
            "id": "a-64",
            "title": "Hide Fixed Bg",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-64-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "selector": ".fixed-topbg.onscroll",
                            "selectorGuids": ["115986d2-cd75-3a3a-543d-b0587c81ef3c", "bbf05dea-3b5b-9065-4c1e-7f67619bb2b9"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1588812547128,
            "useFirstGroupAsInitialState": false
        },
        "a-63": {
            "id": "a-63",
            "title": "Show Fixed BG",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-63-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".fixed-topbg.onscroll",
                            "selectorGuids": ["115986d2-cd75-3a3a-543d-b0587c81ef3c", "bbf05dea-3b5b-9065-4c1e-7f67619bb2b9"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-63-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "selector": ".fixed-topbg.onscroll",
                            "selectorGuids": ["115986d2-cd75-3a3a-543d-b0587c81ef3c", "bbf05dea-3b5b-9065-4c1e-7f67619bb2b9"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1588812468563,
            "useFirstGroupAsInitialState": true
        },
        "a-31": {
            "id": "a-31",
            "title": "Home Intro",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-31-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".logo-triangle",
                            "selectorGuids": ["aad103e6-c4f7-700d-91b5-a79929d6bbac"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-31-n-29",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5db21f3641deb0fb072d1fd3|59a842d1-5387-53f3-f49a-3fb08d90f8ee"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-31-n-26",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "locked": false,
                        "target": {
                            "id": "5db21f3641deb0fb072d1fd3|59a842d1-5387-53f3-f49a-3fb08d90f8ee"
                        },
                        "widthValue": 57,
                        "widthUnit": "PX",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-31-n-24",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5db21f3641deb0fb072d1fd3|59a842d1-5387-53f3-f49a-3fb08d90f8ee"
                        },
                        "yValue": 150,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-31-n-22",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5db21f3641deb0fb072d1fd3|2987f00b-94d6-99aa-556d-dde0683391ed"
                        },
                        "xValue": 48,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-31-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".hero-cta",
                            "selectorGuids": ["5b0047dd-63b2-64f8-2525-eafbb75e0416"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-31-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5db21f3641deb0fb072d1fd3|058bf826-ee9f-24f3-bee8-2ea82cc30ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-31-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".p-hero.top",
                            "selectorGuids": ["a3902d09-b26e-7007-ff34-a0835ee5abab", "9cf6fd3c-d621-34c1-ae2b-e8deaaefe7e1"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-31-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".hero-title.h1",
                            "selectorGuids": ["105626ee-188c-c0b3-7500-c003c9732a2e", "400721ff-2907-ebb6-a0bb-0b76a529b689"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-31-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".hero-title.h1",
                            "selectorGuids": ["105626ee-188c-c0b3-7500-c003c9732a2e", "400721ff-2907-ebb6-a0bb-0b76a529b689"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-31-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".hero-logo",
                            "selectorGuids": ["8f04cc37-1c4f-90c2-baa0-8071be082128"]
                        },
                        "yValue": 15,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-31-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".hero-logo",
                            "selectorGuids": ["8f04cc37-1c4f-90c2-baa0-8071be082128"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-31-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".logo-triangle",
                            "selectorGuids": ["aad103e6-c4f7-700d-91b5-a79929d6bbac"]
                        },
                        "yValue": -25,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-31-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".loader",
                            "selectorGuids": ["89dcdf5d-46ff-5767-8cf5-bb2c2fc546d3"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-31-n-30",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5db21f3641deb0fb072d1fd3|59a842d1-5387-53f3-f49a-3fb08d90f8ee"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-31-n-28",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "locked": false,
                        "target": {
                            "id": "5db21f3641deb0fb072d1fd3|59a842d1-5387-53f3-f49a-3fb08d90f8ee"
                        },
                        "widthValue": 195,
                        "widthUnit": "PX",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-31-n-12",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 800,
                        "target": {
                            "id": "5db21f3641deb0fb072d1fd3|058bf826-ee9f-24f3-bee8-2ea82cc30ce5"
                        },
                        "value": 0.2,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-31-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "selector": ".hero-logo",
                            "selectorGuids": ["8f04cc37-1c4f-90c2-baa0-8071be082128"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-31-n-14",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutCirc",
                        "duration": 800,
                        "target": {
                            "selector": ".hero-logo",
                            "selectorGuids": ["8f04cc37-1c4f-90c2-baa0-8071be082128"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-31-n-15",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 300,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "selector": ".hero-title.h1",
                            "selectorGuids": ["105626ee-188c-c0b3-7500-c003c9732a2e", "400721ff-2907-ebb6-a0bb-0b76a529b689"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-31-n-16",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 300,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".p-hero.top",
                            "selectorGuids": ["a3902d09-b26e-7007-ff34-a0835ee5abab", "9cf6fd3c-d621-34c1-ae2b-e8deaaefe7e1"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-31-n-17",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 300,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "selector": ".hero-title.h1",
                            "selectorGuids": ["105626ee-188c-c0b3-7500-c003c9732a2e", "400721ff-2907-ebb6-a0bb-0b76a529b689"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-31-n-18",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 500,
                        "easing": "inOutCirc",
                        "duration": 500,
                        "target": {
                            "selector": ".logo-triangle",
                            "selectorGuids": ["aad103e6-c4f7-700d-91b5-a79929d6bbac"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-31-n-20",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".logo-triangle",
                            "selectorGuids": ["aad103e6-c4f7-700d-91b5-a79929d6bbac"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-31-n-21",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 700,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".hero-cta",
                            "selectorGuids": ["5b0047dd-63b2-64f8-2525-eafbb75e0416"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-31-n-25",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 700,
                        "easing": "inOutCirc",
                        "duration": 1000,
                        "target": {
                            "id": "5db21f3641deb0fb072d1fd3|59a842d1-5387-53f3-f49a-3fb08d90f8ee"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-31-n-23",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 700,
                        "easing": "inOutQuad",
                        "duration": 500,
                        "target": {
                            "id": "5db21f3641deb0fb072d1fd3|2987f00b-94d6-99aa-556d-dde0683391ed"
                        },
                        "xValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-31-n-27",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "inOutCirc",
                        "duration": 500,
                        "locked": false,
                        "target": {
                            "id": "5db21f3641deb0fb072d1fd3|59a842d1-5387-53f3-f49a-3fb08d90f8ee"
                        },
                        "widthValue": 57,
                        "widthUnit": "PX",
                        "heightUnit": "PX"
                    }
                }]
            }],
            "createdOn": 1584763059375,
            "useFirstGroupAsInitialState": true
        },
        "a-25": {
            "id": "a-25",
            "title": "Case Loaded",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-25-n-6",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".featured-video.box-on-top",
                            "selectorGuids": ["cfc26f73-7a3e-3d40-6b55-0665f0e397c2", "6b5ff587-e98c-2f21-4d2e-6c0b0963f344"]
                        },
                        "xValue": 0.9,
                        "yValue": 0.9,
                        "locked": true
                    }
                }, {
                    "id": "a-25-n-13",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".number",
                            "selectorGuids": ["c42d10a9-13db-7556-54f4-aedfbe3a2d59"]
                        },
                        "xValue": 1.2,
                        "yValue": 1.2,
                        "locked": true
                    }
                }, {
                    "id": "a-25-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".number",
                            "selectorGuids": ["c42d10a9-13db-7556-54f4-aedfbe3a2d59"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-25-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".featured-video.blur",
                            "selectorGuids": ["cfc26f73-7a3e-3d40-6b55-0665f0e397c2", "660599a7-eaa9-b9f1-e943-0b441804cdc6"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-25-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".featured-video.box-on-top",
                            "selectorGuids": ["cfc26f73-7a3e-3d40-6b55-0665f0e397c2", "6b5ff587-e98c-2f21-4d2e-6c0b0963f344"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-25-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".loader",
                            "selectorGuids": ["89dcdf5d-46ff-5767-8cf5-bb2c2fc546d3"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-25-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 500,
                        "target": {
                            "selector": ".featured-video.blur",
                            "selectorGuids": ["cfc26f73-7a3e-3d40-6b55-0665f0e397c2", "660599a7-eaa9-b9f1-e943-0b441804cdc6"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-25-n-14",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 300,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".number",
                            "selectorGuids": ["c42d10a9-13db-7556-54f4-aedfbe3a2d59"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-25-n-12",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".number",
                            "selectorGuids": ["c42d10a9-13db-7556-54f4-aedfbe3a2d59"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-25-n-7",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 500,
                        "easing": "outQuad",
                        "duration": 400,
                        "target": {
                            "selector": ".featured-video.box-on-top",
                            "selectorGuids": ["cfc26f73-7a3e-3d40-6b55-0665f0e397c2", "6b5ff587-e98c-2f21-4d2e-6c0b0963f344"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-25-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".featured-video.box-on-top",
                            "selectorGuids": ["cfc26f73-7a3e-3d40-6b55-0665f0e397c2", "6b5ff587-e98c-2f21-4d2e-6c0b0963f344"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1584850977680,
            "useFirstGroupAsInitialState": true
        },
        "a-16": {
            "id": "a-16",
            "title": "Slant Skew",
            "continuousParameterGroups": [{
                "id": "a-16-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-16-n",
                        "actionTypeId": "TRANSFORM_SKEW",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "5db21f3641deb0fb072d1fd3|90dcc8f0-8658-e3cc-626c-df83987d9938"
                            },
                            "xValue": 0,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-16-n-2",
                        "actionTypeId": "TRANSFORM_SKEW",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "5db21f3641deb0fb072d1fd3|90dcc8f0-8658-e3cc-626c-df83987d9938"
                            },
                            "xValue": 54,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }]
                }]
            }],
            "createdOn": 1584811222434
        },
        "a-18": {
            "id": "a-18",
            "title": "Navbar Cross Show",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-18-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "locked": false,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".navbar-cross",
                            "selectorGuids": ["e1ef1605-3a55-f106-c105-e0ec97ab0309"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-18-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outCirc",
                        "duration": 200,
                        "locked": false,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".navbar-cross",
                            "selectorGuids": ["e1ef1605-3a55-f106-c105-e0ec97ab0309"]
                        },
                        "widthValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }]
            }],
            "createdOn": 1584815567622,
            "useFirstGroupAsInitialState": true
        },
        "a-19": {
            "id": "a-19",
            "title": "Navbar Cross Hide",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-19-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "locked": false,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".navbar-cross",
                            "selectorGuids": ["e1ef1605-3a55-f106-c105-e0ec97ab0309"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }]
            }],
            "createdOn": 1584815667398,
            "useFirstGroupAsInitialState": false
        },
        "a-21": {
            "id": "a-21",
            "title": "Toggle Hover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-21-n-7",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "locked": false,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".toggle-line.last",
                            "selectorGuids": ["33c16548-5e88-10ad-60dc-2a1ce1905c34", "69e9e0ec-48f9-7109-9082-d74ba2940e2f"]
                        },
                        "widthValue": 60,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-21-n-5",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "locked": false,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".toggle-line.first",
                            "selectorGuids": ["33c16548-5e88-10ad-60dc-2a1ce1905c34", "01f8bc1a-8005-8ec8-b9c9-88624a66e5bf"]
                        },
                        "widthValue": 60,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-21-n-3",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".toggle-line",
                            "selectorGuids": ["33c16548-5e88-10ad-60dc-2a1ce1905c34"]
                        },
                        "rValue": 255,
                        "gValue": 255,
                        "bValue": 255,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-21-n-8",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "locked": false,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".toggle-line.last",
                            "selectorGuids": ["33c16548-5e88-10ad-60dc-2a1ce1905c34", "69e9e0ec-48f9-7109-9082-d74ba2940e2f"]
                        },
                        "widthValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-21-n-6",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "locked": false,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".toggle-line.first",
                            "selectorGuids": ["33c16548-5e88-10ad-60dc-2a1ce1905c34", "01f8bc1a-8005-8ec8-b9c9-88624a66e5bf"]
                        },
                        "widthValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-21-n-4",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "globalSwatchId": "4db82e8c",
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".toggle-line",
                            "selectorGuids": ["33c16548-5e88-10ad-60dc-2a1ce1905c34"]
                        },
                        "rValue": 0,
                        "gValue": 255,
                        "bValue": 206,
                        "aValue": 1
                    }
                }]
            }],
            "createdOn": 1584824733176,
            "useFirstGroupAsInitialState": true
        },
        "a-22": {
            "id": "a-22",
            "title": "Toggle Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-22-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 100,
                        "locked": false,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".toggle-icon",
                            "selectorGuids": ["2d9143eb-a0db-73c0-1d29-f75717a626f7"]
                        },
                        "heightValue": 15,
                        "widthUnit": "PX",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-22-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "locked": false,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".toggle-line.last",
                            "selectorGuids": ["33c16548-5e88-10ad-60dc-2a1ce1905c34", "69e9e0ec-48f9-7109-9082-d74ba2940e2f"]
                        },
                        "widthValue": 60,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-22-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "locked": false,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".toggle-line.first",
                            "selectorGuids": ["33c16548-5e88-10ad-60dc-2a1ce1905c34", "01f8bc1a-8005-8ec8-b9c9-88624a66e5bf"]
                        },
                        "widthValue": 60,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-22-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "globalSwatchId": "dda0bd75",
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".toggle-line",
                            "selectorGuids": ["33c16548-5e88-10ad-60dc-2a1ce1905c34"]
                        },
                        "rValue": 255,
                        "gValue": 255,
                        "bValue": 255,
                        "aValue": 1
                    }
                }]
            }],
            "createdOn": 1584824866497,
            "useFirstGroupAsInitialState": false
        },
        "a-23": {
            "id": "a-23",
            "title": "Pulsate",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-23-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "5e75c1e0d0097c3e12f27400|6cfbdf8b-d8b2-fbc2-b2e3-16515da9e2a3"
                        },
                        "value": 0.14,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "5e75c1e0d0097c3e12f27400|6cfbdf8b-d8b2-fbc2-b2e3-16515da9e2a3"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "5e75c1e0d0097c3e12f27400|6cfbdf8b-d8b2-fbc2-b2e3-16515da9e2a3"
                        },
                        "value": 0.1,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1584830698891,
            "useFirstGroupAsInitialState": true
        },
        "a-17": {
            "id": "a-17",
            "title": "thumb-A-pan",
            "continuousParameterGroups": [{
                "id": "a-17-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-17-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {},
                            "xValue": 0,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-17-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {},
                            "xValue": 0,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-17-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeIn",
                            "duration": 500,
                            "target": {},
                            "xValue": -25,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-17-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {},
                            "xValue": 10,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-17-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": []
            }],
            "createdOn": 1584811813313
        },
        "a-24": {
            "id": "a-24",
            "title": "Home Video",
            "continuousParameterGroups": [{
                "id": "a-24-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-24-n-15",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "5db21f3641deb0fb072d1fd3|fb3b4a4b-a6cf-4f7b-e324-920892f1af44"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-24-n-21",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {},
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-24-n-4",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-jumbo.nofloat",
                                "selectorGuids": ["d6a5b324-fb5d-af8c-5518-cf8d33c7d0e5", "b6851a22-01d8-ab53-85e9-786e445ce04c"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-24-n-23",
                        "actionTypeId": "TRANSFORM_SKEW",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".slant-outline.home-title",
                                "selectorGuids": ["ee0ce8df-ed12-d43a-6289-6a4b9f902f4e", "0845f921-eedc-f848-06d4-fe26f6b51c94"]
                            },
                            "xValue": 69,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }]
                }, {
                    "keyframe": 15,
                    "actionItems": [{
                        "id": "a-24-n-5",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-jumbo.nofloat",
                                "selectorGuids": ["d6a5b324-fb5d-af8c-5518-cf8d33c7d0e5", "b6851a22-01d8-ab53-85e9-786e445ce04c"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 25,
                    "actionItems": [{
                        "id": "a-24-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {},
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-24-n-7",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".fullbg-video.home",
                                "selectorGuids": ["5ebf6eba-c315-0c51-a59f-0d29437c028c", "7e971344-edbb-787b-bd14-4a2153dbb566"]
                            },
                            "filters": [{
                                "type": "blur",
                                "filterId": "2c12",
                                "value": 0,
                                "unit": "px"
                            }]
                        }
                    }, {
                        "id": "a-24-n-26",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "5db21f3641deb0fb072d1fd3|fb3b4a4b-a6cf-4f7b-e324-920892f1af44"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 30,
                    "actionItems": [{
                        "id": "a-24-n-27",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "inOutQuad",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-jumbo.nofloat",
                                "selectorGuids": ["d6a5b324-fb5d-af8c-5518-cf8d33c7d0e5", "b6851a22-01d8-ab53-85e9-786e445ce04c"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 35,
                    "actionItems": [{
                        "id": "a-24-n-14",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "easeOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "5db21f3641deb0fb072d1fd3|fb3b4a4b-a6cf-4f7b-e324-920892f1af44"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 50,
                    "actionItems": [{
                        "id": "a-24-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "easeIn",
                            "duration": 500,
                            "target": {},
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-24-n-8",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".fullbg-video.home",
                                "selectorGuids": ["5ebf6eba-c315-0c51-a59f-0d29437c028c", "7e971344-edbb-787b-bd14-4a2153dbb566"]
                            },
                            "filters": [{
                                "type": "blur",
                                "filterId": "fa52",
                                "value": 15,
                                "unit": "px"
                            }]
                        }
                    }, {
                        "id": "a-24-n-25",
                        "actionTypeId": "TRANSFORM_SKEW",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".slant-outline.home-title",
                                "selectorGuids": ["ee0ce8df-ed12-d43a-6289-6a4b9f902f4e", "0845f921-eedc-f848-06d4-fe26f6b51c94"]
                            },
                            "xValue": 0,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }, {
                        "id": "a-24-n-29",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-jumbo.nofloat",
                                "selectorGuids": ["d6a5b324-fb5d-af8c-5518-cf8d33c7d0e5", "b6851a22-01d8-ab53-85e9-786e445ce04c"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 70,
                    "actionItems": [{
                        "id": "a-24-n-19",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "5db21f3641deb0fb072d1fd3|fb3b4a4b-a6cf-4f7b-e324-920892f1af44"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 75,
                    "actionItems": [{
                        "id": "a-24-n-3",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {},
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-24-n-9",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".fullbg-video.home",
                                "selectorGuids": ["5ebf6eba-c315-0c51-a59f-0d29437c028c", "7e971344-edbb-787b-bd14-4a2153dbb566"]
                            },
                            "filters": [{
                                "type": "blur",
                                "filterId": "76c1",
                                "value": 0,
                                "unit": "px"
                            }]
                        }
                    }, {
                        "id": "a-24-n-30",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-jumbo.nofloat",
                                "selectorGuids": ["d6a5b324-fb5d-af8c-5518-cf8d33c7d0e5", "b6851a22-01d8-ab53-85e9-786e445ce04c"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 80,
                    "actionItems": [{
                        "id": "a-24-n-20",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "5db21f3641deb0fb072d1fd3|fb3b4a4b-a6cf-4f7b-e324-920892f1af44"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-24-n-17",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "5db21f3641deb0fb072d1fd3|fb3b4a4b-a6cf-4f7b-e324-920892f1af44"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 90,
                    "actionItems": [{
                        "id": "a-24-n-28",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-jumbo.nofloat",
                                "selectorGuids": ["d6a5b324-fb5d-af8c-5518-cf8d33c7d0e5", "b6851a22-01d8-ab53-85e9-786e445ce04c"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-24-n-22",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {},
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-24-n-6",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-jumbo.nofloat",
                                "selectorGuids": ["d6a5b324-fb5d-af8c-5518-cf8d33c7d0e5", "b6851a22-01d8-ab53-85e9-786e445ce04c"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-24-n-24",
                        "actionTypeId": "TRANSFORM_SKEW",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".slant-outline.home-title",
                                "selectorGuids": ["ee0ce8df-ed12-d43a-6289-6a4b9f902f4e", "0845f921-eedc-f848-06d4-fe26f6b51c94"]
                            },
                            "xValue": -58,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }]
                }]
            }, {
                "id": "a-24-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": []
            }],
            "createdOn": 1584847304482
        },
        "a-26": {
            "id": "a-26",
            "title": "Open Navbar",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-26-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "ced0583e-6dbd-9a6a-c255-d3b71cf0073a"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-26-n-11",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "8705f7f1-2de9-1562-04c6-8a0f59b9e602"
                        },
                        "xValue": 0.8,
                        "yValue": 0.8,
                        "locked": true
                    }
                }, {
                    "id": "a-26-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "8705f7f1-2de9-1562-04c6-8a0f59b9e602"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-26-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "ced0583e-6dbd-9a6a-c255-d3b71cf0073c"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-26-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "ced0583e-6dbd-9a6a-c255-d3b71cf00738"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-26-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "ff9152d1-8ba2-c1cd-b09d-3712cd698162"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-26-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "2bfc4aa2-4faa-d446-2841-aa95ff94167a"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-26-n-19",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "52cda598-0c2c-6aa4-a2e1-d60089b33a0d"
                        },
                        "yValue": 7,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-26-n-18",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "7947c38e-2b30-3212-055b-abf63bff3b93"
                        },
                        "yValue": -6,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-26-n-17",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "7947c38e-2b30-3212-055b-abf63bff3b93"
                        },
                        "zValue": -40,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-26-n-16",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "52cda598-0c2c-6aa4-a2e1-d60089b33a0d"
                        },
                        "zValue": 40,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-26-n-15",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 300,
                        "locked": false,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "7947c38e-2b30-3212-055b-abf63bff3b93"
                        },
                        "widthValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-26-n-14",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 300,
                        "locked": false,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "52cda598-0c2c-6aa4-a2e1-d60089b33a0d"
                        },
                        "widthValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-26-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "ced0583e-6dbd-9a6a-c255-d3b71cf0073a"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-26-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 100,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "ced0583e-6dbd-9a6a-c255-d3b71cf00738"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-26-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "ff9152d1-8ba2-c1cd-b09d-3712cd698162"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-26-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 300,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "ced0583e-6dbd-9a6a-c255-d3b71cf0073c"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-26-n-12",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 800,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "8705f7f1-2de9-1562-04c6-8a0f59b9e602"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-26-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "8705f7f1-2de9-1562-04c6-8a0f59b9e602"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1584892501016,
            "useFirstGroupAsInitialState": true
        },
        "a-27": {
            "id": "a-27",
            "title": "Close Navbar",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-27-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "2bfc4aa2-4faa-d446-2841-aa95ff94167a"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-27-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "52cda598-0c2c-6aa4-a2e1-d60089b33a0d"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "7947c38e-2b30-3212-055b-abf63bff3b93"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-10",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "7947c38e-2b30-3212-055b-abf63bff3b93"
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-27-n-11",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "52cda598-0c2c-6aa4-a2e1-d60089b33a0d"
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-27-n-12",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 300,
                        "locked": false,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "7947c38e-2b30-3212-055b-abf63bff3b93"
                        },
                        "widthValue": 60,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-13",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 300,
                        "locked": false,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "52cda598-0c2c-6aa4-a2e1-d60089b33a0d"
                        },
                        "widthValue": 60,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-27-n-14",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".slant-outline.nav-center",
                            "selectorGuids": ["ee0ce8df-ed12-d43a-6289-6a4b9f902f4e", "98cd1ac6-58f9-69af-871e-054414e19df6"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-27-n-16",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".navbar-link",
                            "selectorGuids": ["ef6f8775-b697-f0f3-6ce3-25fb9ba01b00"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-27-n-15",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".slant-outline.nav-center",
                            "selectorGuids": ["ee0ce8df-ed12-d43a-6289-6a4b9f902f4e", "98cd1ac6-58f9-69af-871e-054414e19df6"]
                        },
                        "xValue": 0.8,
                        "yValue": 0.8,
                        "locked": true
                    }
                }]
            }],
            "createdOn": 1584892501016,
            "useFirstGroupAsInitialState": false
        },
        "a-33": {
            "id": "a-33",
            "title": "scrolldown flash",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-33-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "5e75c1e0d0097c3e12f27400|1440b479-d96e-1b63-5c07-0583c8f444f3"
                        },
                        "xValue": 0,
                        "yValue": -20,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-33-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "5e75c1e0d0097c3e12f27400|1440b479-d96e-1b63-5c07-0583c8f444f3"
                        },
                        "xValue": 0,
                        "yValue": -20,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-33-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuad",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "5e75c1e0d0097c3e12f27400|1440b479-d96e-1b63-5c07-0583c8f444f3"
                        },
                        "xValue": 0,
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-33-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 1000,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": true,
                            "id": "5e75c1e0d0097c3e12f27400|1440b479-d96e-1b63-5c07-0583c8f444f3"
                        },
                        "xValue": -1,
                        "yValue": -20,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "createdOn": 1584981369628,
            "useFirstGroupAsInitialState": true
        },
        "a-35": {
            "id": "a-35",
            "title": "Case Slant Skew",
            "continuousParameterGroups": [{
                "id": "a-35-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-35-n",
                        "actionTypeId": "TRANSFORM_SKEW",
                        "config": {
                            "delay": 0,
                            "easing": "inOutQuad",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "5e798936ddb8c3b9d2fe3516|bb5cec90-e8bd-edd0-7854-b8955c6dc142"
                            },
                            "xValue": 58,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }]
                }, {
                    "keyframe": 61,
                    "actionItems": [{
                        "id": "a-35-n-2",
                        "actionTypeId": "TRANSFORM_SKEW",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "5e798936ddb8c3b9d2fe3516|bb5cec90-e8bd-edd0-7854-b8955c6dc142"
                            },
                            "xValue": 0,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }]
                }]
            }],
            "createdOn": 1585072837210
        },
        "a-36": {
            "id": "a-36",
            "title": "Case Top Slant Skew",
            "continuousParameterGroups": [{
                "id": "a-36-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 20,
                    "actionItems": [{
                        "id": "a-36-n",
                        "actionTypeId": "TRANSFORM_SKEW",
                        "config": {
                            "delay": 0,
                            "easing": "inOutQuad",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "5e7a4dec161172ce96cdd138|bd4ea428-b232-cfe3-fb81-843b4c08d780"
                            },
                            "xValue": 0,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-36-n-2",
                        "actionTypeId": "TRANSFORM_SKEW",
                        "config": {
                            "delay": 0,
                            "easing": "inOutQuad",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "5e7a4dec161172ce96cdd138|bd4ea428-b232-cfe3-fb81-843b4c08d780"
                            },
                            "xValue": 55,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }]
                }]
            }],
            "createdOn": 1585079017576
        },
        "a-37": {
            "id": "a-37",
            "title": "Open Pill",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-37-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "locked": false,
                        "target": {
                            "useEventTarget": true,
                            "id": "5db21f3641deb0fb072d1fd3|59a842d1-5387-53f3-f49a-3fb08d90f8ee"
                        },
                        "widthValue": 57,
                        "widthUnit": "PX",
                        "heightUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-37-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outCirc",
                        "duration": 500,
                        "locked": false,
                        "target": {
                            "useEventTarget": true,
                            "id": "5db21f3641deb0fb072d1fd3|59a842d1-5387-53f3-f49a-3fb08d90f8ee"
                        },
                        "widthValue": 195,
                        "widthUnit": "PX",
                        "heightUnit": "PX"
                    }
                }]
            }],
            "createdOn": 1585157722331,
            "useFirstGroupAsInitialState": true
        },
        "a-38": {
            "id": "a-38",
            "title": "Close Pill",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-38-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutCirc",
                        "duration": 500,
                        "locked": false,
                        "target": {
                            "useEventTarget": true,
                            "id": "5db21f3641deb0fb072d1fd3|59a842d1-5387-53f3-f49a-3fb08d90f8ee"
                        },
                        "widthValue": 57,
                        "widthUnit": "PX",
                        "heightUnit": "PX"
                    }
                }]
            }],
            "createdOn": 1585157760029,
            "useFirstGroupAsInitialState": false
        },
        "a-39": {
            "id": "a-39",
            "title": "Emoji Loops",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-39-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "5db21f3641deb0fb072d1fd3|bba64d16-ca0b-c4db-0fbc-d070853b470b"
                        },
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-39-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuad",
                        "duration": 300,
                        "target": {
                            "useEventTarget": true,
                            "id": "5db21f3641deb0fb072d1fd3|bba64d16-ca0b-c4db-0fbc-d070853b470b"
                        },
                        "zValue": 62,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-39-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuad",
                        "duration": 300,
                        "target": {
                            "useEventTarget": true,
                            "id": "5db21f3641deb0fb072d1fd3|bba64d16-ca0b-c4db-0fbc-d070853b470b"
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }],
            "createdOn": 1585881259155,
            "useFirstGroupAsInitialState": false
        },
        "a-45": {
            "id": "a-45",
            "title": "Reset 0%",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-45-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "locked": false,
                        "target": {
                            "selector": ".pathway-bar.scroll",
                            "selectorGuids": ["2b282322-32a0-7c9d-19a7-9aae4d0cca90", "db13e6f1-95b8-a7bc-5cb2-732c975604bd"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "%"
                    }
                }]
            }],
            "createdOn": 1588284451948,
            "useFirstGroupAsInitialState": false
        },
        "a-46": {
            "id": "a-46",
            "title": "Path Bar",
            "continuousParameterGroups": [{
                "id": "a-46-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 50,
                    "actionItems": [{
                        "id": "a-46-n",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "locked": false,
                            "target": {
                                "useEventTarget": true,
                                "id": "5ea9dfa2ffb63e801d67f130|9f624511-7d06-27cb-e7f6-d760599aeea2"
                            },
                            "heightValue": 0,
                            "widthUnit": "PX",
                            "heightUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-46-n-3",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "locked": false,
                            "target": {
                                "useEventTarget": true,
                                "id": "5ea9dfa2ffb63e801d67f130|9f624511-7d06-27cb-e7f6-d760599aeea2"
                            },
                            "heightValue": 745,
                            "widthUnit": "PX",
                            "heightUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1588285189385
        },
        "a-47": {
            "id": "a-47",
            "title": "Certify",
            "continuousParameterGroups": [{
                "id": "a-47-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 50,
                    "actionItems": [{
                        "id": "a-47-n",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "locked": false,
                            "target": {
                                "useEventTarget": true,
                                "id": "5ea9dfa2ffb63e801d67f130|7729abc1-5b70-1d2d-b3ba-7d0a6a91b30d"
                            },
                            "heightValue": 0,
                            "widthUnit": "PX",
                            "heightUnit": "%"
                        }
                    }]
                }, {
                    "keyframe": 85,
                    "actionItems": [{
                        "id": "a-47-n-2",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "locked": false,
                            "target": {
                                "useEventTarget": true,
                                "id": "5ea9dfa2ffb63e801d67f130|7729abc1-5b70-1d2d-b3ba-7d0a6a91b30d"
                            },
                            "heightValue": 100,
                            "widthUnit": "PX",
                            "heightUnit": "%"
                        }
                    }]
                }]
            }],
            "createdOn": 1588289643642
        },
        "a-48": {
            "id": "a-48",
            "title": "Gold Badge",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-48-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5ea9dfa2ffb63e801d67f130|06e9e379-33ad-468e-7110-270a2192add5"
                        },
                        "zValue": 128,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-48-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5ea9dfa2ffb63e801d67f130|06e9e379-33ad-468e-7110-270a2192add5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-48-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5ea9dfa2ffb63e801d67f130|06e9e379-33ad-468e-7110-270a2192add5"
                        },
                        "xValue": 0.1,
                        "yValue": 0.1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-48-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 400,
                        "target": {
                            "id": "5ea9dfa2ffb63e801d67f130|06e9e379-33ad-468e-7110-270a2192add5"
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-48-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "id": "5ea9dfa2ffb63e801d67f130|06e9e379-33ad-468e-7110-270a2192add5"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-48-n-4",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 400,
                        "target": {
                            "id": "5ea9dfa2ffb63e801d67f130|06e9e379-33ad-468e-7110-270a2192add5"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "createdOn": 1588290181850,
            "useFirstGroupAsInitialState": true
        },
        "a-50": {
            "id": "a-50",
            "title": "Gift Modal Open",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-50-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".modal",
                            "selectorGuids": ["4035cb50-898b-08dc-fcb6-fc0ec5cd8a6e"]
                        }
                    }
                }, {
                    "id": "a-50-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".modal",
                            "selectorGuids": ["4035cb50-898b-08dc-fcb6-fc0ec5cd8a6e"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-50-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".modal-box",
                            "selectorGuids": ["30991c43-8fe0-39ea-581b-37e6b1e29eed"]
                        },
                        "xValue": 0.8,
                        "yValue": 0.8,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-50-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "value": "block",
                        "target": {
                            "selector": ".modal",
                            "selectorGuids": ["4035cb50-898b-08dc-fcb6-fc0ec5cd8a6e"]
                        }
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-50-n-4",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outBack",
                        "duration": 300,
                        "target": {
                            "selector": ".modal-box",
                            "selectorGuids": ["30991c43-8fe0-39ea-581b-37e6b1e29eed"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-50-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "selector": ".modal",
                            "selectorGuids": ["4035cb50-898b-08dc-fcb6-fc0ec5cd8a6e"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1588376789864,
            "useFirstGroupAsInitialState": true
        },
        "a-51": {
            "id": "a-51",
            "title": "Gift Modal Close",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-51-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "inBack",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".modal-box",
                            "selectorGuids": ["30991c43-8fe0-39ea-581b-37e6b1e29eed"]
                        },
                        "xValue": 0.8,
                        "yValue": 0.8,
                        "locked": true
                    }
                }, {
                    "id": "a-51-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".modal",
                            "selectorGuids": ["4035cb50-898b-08dc-fcb6-fc0ec5cd8a6e"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-51-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "value": "none",
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".modal",
                            "selectorGuids": ["4035cb50-898b-08dc-fcb6-fc0ec5cd8a6e"]
                        }
                    }
                }]
            }],
            "createdOn": 1588376933085,
            "useFirstGroupAsInitialState": false
        },
        "a-59": {
            "id": "a-59",
            "title": "Show Social",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-59-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "value": "block",
                        "target": {
                            "selector": ".toggle-share-icons",
                            "selectorGuids": ["d2ca0e34-4d57-6e50-6a4c-6bf421c40ae3"]
                        }
                    }
                }]
            }],
            "createdOn": 1588729460798,
            "useFirstGroupAsInitialState": false
        },
        "a-60": {
            "id": "a-60",
            "title": "Hide Social",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-60-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "value": "none",
                        "target": {
                            "selector": ".toggle-share-icons",
                            "selectorGuids": ["d2ca0e34-4d57-6e50-6a4c-6bf421c40ae3"]
                        }
                    }
                }]
            }],
            "createdOn": 1588729495800,
            "useFirstGroupAsInitialState": false
        },
        "a-61": {
            "id": "a-61",
            "title": "Pill On",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-61-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "globalSwatchId": "4db82e8c",
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".tab-pill",
                            "selectorGuids": ["25ba6b1e-ec41-4ebb-f600-d605be281ee7"]
                        },
                        "rValue": 0,
                        "gValue": 255,
                        "bValue": 206,
                        "aValue": 1
                    }
                }, {
                    "id": "a-61-n-3",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "globalSwatchId": "162398ef",
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".tab-pill",
                            "selectorGuids": ["25ba6b1e-ec41-4ebb-f600-d605be281ee7"]
                        },
                        "rValue": 0,
                        "gValue": 0,
                        "bValue": 0,
                        "aValue": 1
                    }
                }, {
                    "id": "a-61-n-2",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".tab-pill",
                            "selectorGuids": ["25ba6b1e-ec41-4ebb-f600-d605be281ee7"]
                        },
                        "rValue": 0,
                        "gValue": 0,
                        "bValue": 0,
                        "aValue": 0
                    }
                }]
            }],
            "createdOn": 1588778327234,
            "useFirstGroupAsInitialState": false
        },
        "a-62": {
            "id": "a-62",
            "title": "Pill Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-62-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".tab-pill",
                            "selectorGuids": ["25ba6b1e-ec41-4ebb-f600-d605be281ee7"]
                        },
                        "rValue": 245,
                        "gValue": 245,
                        "bValue": 245,
                        "aValue": 1
                    }
                }, {
                    "id": "a-62-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".tab-pill",
                            "selectorGuids": ["25ba6b1e-ec41-4ebb-f600-d605be281ee7"]
                        },
                        "rValue": 167,
                        "gValue": 157,
                        "bValue": 157,
                        "aValue": 1
                    }
                }, {
                    "id": "a-62-n-3",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".tab-pill",
                            "selectorGuids": ["25ba6b1e-ec41-4ebb-f600-d605be281ee7"]
                        },
                        "rValue": 224,
                        "gValue": 224,
                        "bValue": 224,
                        "aValue": 1
                    }
                }]
            }],
            "createdOn": 1588778327234,
            "useFirstGroupAsInitialState": false
        },
        "a-71": {
            "id": "a-71",
            "title": "Hide Fixed n Bullets",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-71-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "selector": ".fixed-topbg.onscroll",
                            "selectorGuids": ["115986d2-cd75-3a3a-543d-b0587c81ef3c", "bbf05dea-3b5b-9065-4c1e-7f67619bb2b9"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-71-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".progress-bar.intro",
                            "selectorGuids": ["de05d01a-c1ab-9393-fbc4-8a38d33540a6", "15556d70-342c-8b5a-23dc-10355f028a32"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1588812547128,
            "useFirstGroupAsInitialState": false
        },
        "a-70": {
            "id": "a-70",
            "title": "Show Fixed n Bullets",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-70-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".fixed-topbg.onscroll",
                            "selectorGuids": ["115986d2-cd75-3a3a-543d-b0587c81ef3c", "bbf05dea-3b5b-9065-4c1e-7f67619bb2b9"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-70-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".progress-bar.intro",
                            "selectorGuids": ["de05d01a-c1ab-9393-fbc4-8a38d33540a6", "15556d70-342c-8b5a-23dc-10355f028a32"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-70-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "selector": ".fixed-topbg.onscroll",
                            "selectorGuids": ["115986d2-cd75-3a3a-543d-b0587c81ef3c", "bbf05dea-3b5b-9065-4c1e-7f67619bb2b9"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-70-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".progress-bar.intro",
                            "selectorGuids": ["de05d01a-c1ab-9393-fbc4-8a38d33540a6", "15556d70-342c-8b5a-23dc-10355f028a32"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1588812468563,
            "useFirstGroupAsInitialState": true
        },
        "a-65": {
            "id": "a-65",
            "title": "GIF Show",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-65-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".video-preview",
                            "selectorGuids": ["8a7226c3-d24f-9f52-f573-468a44258d94"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-65-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".video-preview",
                            "selectorGuids": ["8a7226c3-d24f-9f52-f573-468a44258d94"]
                        },
                        "xValue": 0.5,
                        "yValue": 0.5,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-65-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuad",
                        "duration": 400,
                        "target": {
                            "selector": ".video-preview",
                            "selectorGuids": ["8a7226c3-d24f-9f52-f573-468a44258d94"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-65-n-4",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutExpo",
                        "duration": 500,
                        "target": {
                            "selector": ".video-preview",
                            "selectorGuids": ["8a7226c3-d24f-9f52-f573-468a44258d94"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "createdOn": 1588972784637,
            "useFirstGroupAsInitialState": true
        },
        "a-66": {
            "id": "a-66",
            "title": "GIF Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-66-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 300,
                        "target": {
                            "selector": ".video-preview",
                            "selectorGuids": ["8a7226c3-d24f-9f52-f573-468a44258d94"]
                        },
                        "xValue": 0.5,
                        "yValue": 0.5,
                        "locked": true
                    }
                }, {
                    "id": "a-66-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "selector": ".video-preview",
                            "selectorGuids": ["8a7226c3-d24f-9f52-f573-468a44258d94"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1588972877591,
            "useFirstGroupAsInitialState": false
        },
        "a-67": {
            "id": "a-67",
            "title": "Reset 0% 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-67-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "locked": false,
                        "target": {
                            "selector": ".pathway-bar.scroll",
                            "selectorGuids": ["2b282322-32a0-7c9d-19a7-9aae4d0cca90", "db13e6f1-95b8-a7bc-5cb2-732c975604bd"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "%"
                    }
                }]
            }],
            "createdOn": 1588284451948,
            "useFirstGroupAsInitialState": false
        },
        "a-68": {
            "id": "a-68",
            "title": "GIF Show 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-68-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".video-preview",
                            "selectorGuids": ["8a7226c3-d24f-9f52-f573-468a44258d94"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-68-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".video-preview",
                            "selectorGuids": ["8a7226c3-d24f-9f52-f573-468a44258d94"]
                        },
                        "xValue": 0.5,
                        "yValue": 0.5,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-68-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuad",
                        "duration": 400,
                        "target": {
                            "selector": ".video-preview",
                            "selectorGuids": ["8a7226c3-d24f-9f52-f573-468a44258d94"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-68-n-4",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutExpo",
                        "duration": 500,
                        "target": {
                            "selector": ".video-preview",
                            "selectorGuids": ["8a7226c3-d24f-9f52-f573-468a44258d94"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "createdOn": 1588972784637,
            "useFirstGroupAsInitialState": true
        },
        "a-69": {
            "id": "a-69",
            "title": "GIF Out 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-69-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 300,
                        "target": {
                            "selector": ".video-preview",
                            "selectorGuids": ["8a7226c3-d24f-9f52-f573-468a44258d94"]
                        },
                        "xValue": 0.5,
                        "yValue": 0.5,
                        "locked": true
                    }
                }, {
                    "id": "a-69-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "selector": ".video-preview",
                            "selectorGuids": ["8a7226c3-d24f-9f52-f573-468a44258d94"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1588972877591,
            "useFirstGroupAsInitialState": false
        },
        "a-72": {
            "id": "a-72",
            "title": "K-Logo",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-72-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5ea9dfa2ffb63e801d67f130|99967620-ef26-ee0e-1342-35f36b4dc4b3"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-72-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5ea9dfa2ffb63e801d67f130|99967620-ef26-ee0e-1342-35f36b4dc4b3"
                        },
                        "yValue": -34,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-72-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 500,
                        "easing": "inOutSine",
                        "duration": 800,
                        "target": {
                            "id": "5ea9dfa2ffb63e801d67f130|99967620-ef26-ee0e-1342-35f36b4dc4b3"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-72-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 500,
                        "easing": "inOutQuint",
                        "duration": 800,
                        "target": {
                            "id": "5ea9dfa2ffb63e801d67f130|99967620-ef26-ee0e-1342-35f36b4dc4b3"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "createdOn": 1593692707271,
            "useFirstGroupAsInitialState": true
        },
        "a-73": {
            "id": "a-73",
            "title": "Navbar Cross Show 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-73-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "locked": false,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".navbar-cross",
                            "selectorGuids": ["e1ef1605-3a55-f106-c105-e0ec97ab0309"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-73-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outCirc",
                        "duration": 200,
                        "locked": false,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".navbar-cross",
                            "selectorGuids": ["e1ef1605-3a55-f106-c105-e0ec97ab0309"]
                        },
                        "widthValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }]
            }],
            "createdOn": 1584815567622,
            "useFirstGroupAsInitialState": true
        },
        "a-74": {
            "id": "a-74",
            "title": "Navbar Cross Hide 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-74-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "locked": false,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".navbar-cross",
                            "selectorGuids": ["e1ef1605-3a55-f106-c105-e0ec97ab0309"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }]
            }],
            "createdOn": 1584815667398,
            "useFirstGroupAsInitialState": false
        },
        "a-76": {
            "id": "a-76",
            "title": "Toggle Hover 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-76-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "locked": false,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".toggle-line.last",
                            "selectorGuids": ["33c16548-5e88-10ad-60dc-2a1ce1905c34", "69e9e0ec-48f9-7109-9082-d74ba2940e2f"]
                        },
                        "widthValue": 60,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-76-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "locked": false,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".toggle-line.first",
                            "selectorGuids": ["33c16548-5e88-10ad-60dc-2a1ce1905c34", "01f8bc1a-8005-8ec8-b9c9-88624a66e5bf"]
                        },
                        "widthValue": 60,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-76-n-3",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".toggle-line",
                            "selectorGuids": ["33c16548-5e88-10ad-60dc-2a1ce1905c34"]
                        },
                        "rValue": 255,
                        "gValue": 255,
                        "bValue": 255,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-76-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "locked": false,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".toggle-line.last",
                            "selectorGuids": ["33c16548-5e88-10ad-60dc-2a1ce1905c34", "69e9e0ec-48f9-7109-9082-d74ba2940e2f"]
                        },
                        "widthValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-76-n-5",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "locked": false,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".toggle-line.first",
                            "selectorGuids": ["33c16548-5e88-10ad-60dc-2a1ce1905c34", "01f8bc1a-8005-8ec8-b9c9-88624a66e5bf"]
                        },
                        "widthValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-76-n-6",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "globalSwatchId": "4db82e8c",
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".toggle-line",
                            "selectorGuids": ["33c16548-5e88-10ad-60dc-2a1ce1905c34"]
                        },
                        "rValue": 0,
                        "gValue": 255,
                        "bValue": 206,
                        "aValue": 1
                    }
                }]
            }],
            "createdOn": 1584824733176,
            "useFirstGroupAsInitialState": true
        },
        "a-77": {
            "id": "a-77",
            "title": "Toggle Out 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-77-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 100,
                        "locked": false,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".toggle-icon",
                            "selectorGuids": ["2d9143eb-a0db-73c0-1d29-f75717a626f7"]
                        },
                        "heightValue": 15,
                        "widthUnit": "PX",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-77-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "locked": false,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".toggle-line.last",
                            "selectorGuids": ["33c16548-5e88-10ad-60dc-2a1ce1905c34", "69e9e0ec-48f9-7109-9082-d74ba2940e2f"]
                        },
                        "widthValue": 60,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-77-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "locked": false,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".toggle-line.first",
                            "selectorGuids": ["33c16548-5e88-10ad-60dc-2a1ce1905c34", "01f8bc1a-8005-8ec8-b9c9-88624a66e5bf"]
                        },
                        "widthValue": 60,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-77-n-4",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "globalSwatchId": "dda0bd75",
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".toggle-line",
                            "selectorGuids": ["33c16548-5e88-10ad-60dc-2a1ce1905c34"]
                        },
                        "rValue": 255,
                        "gValue": 255,
                        "bValue": 255,
                        "aValue": 1
                    }
                }]
            }],
            "createdOn": 1584824866497,
            "useFirstGroupAsInitialState": false
        },
        "a-78": {
            "id": "a-78",
            "title": "Open Navbar 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-78-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "5ea9dfa2ffb63e801d67f130|3f443793-b616-0ab2-5b58-373952e46884"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-78-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "5ea9dfa2ffb63e801d67f130|3f443793-b616-0ab2-5b58-373952e46894"
                        },
                        "xValue": 0.8,
                        "yValue": 0.8,
                        "locked": true
                    }
                }, {
                    "id": "a-78-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "5ea9dfa2ffb63e801d67f130|3f443793-b616-0ab2-5b58-373952e46894"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-78-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "5ea9dfa2ffb63e801d67f130|3f443793-b616-0ab2-5b58-373952e46890"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-78-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "5ea9dfa2ffb63e801d67f130|3f443793-b616-0ab2-5b58-373952e46888"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-78-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "5ea9dfa2ffb63e801d67f130|3f443793-b616-0ab2-5b58-373952e4688c"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-78-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "5ea9dfa2ffb63e801d67f130|3f443793-b616-0ab2-5b58-373952e46898"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-78-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "5ea9dfa2ffb63e801d67f130|3f443793-b616-0ab2-5b58-373952e46897"
                        },
                        "yValue": 7,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-78-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "5ea9dfa2ffb63e801d67f130|3f443793-b616-0ab2-5b58-373952e46899"
                        },
                        "yValue": -6,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-78-n-10",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "5ea9dfa2ffb63e801d67f130|3f443793-b616-0ab2-5b58-373952e46899"
                        },
                        "zValue": -40,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-78-n-11",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "5ea9dfa2ffb63e801d67f130|3f443793-b616-0ab2-5b58-373952e46897"
                        },
                        "zValue": 40,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-78-n-12",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 300,
                        "locked": false,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "5ea9dfa2ffb63e801d67f130|3f443793-b616-0ab2-5b58-373952e46899"
                        },
                        "widthValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-78-n-13",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 300,
                        "locked": false,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "5ea9dfa2ffb63e801d67f130|3f443793-b616-0ab2-5b58-373952e46897"
                        },
                        "widthValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-78-n-14",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "5ea9dfa2ffb63e801d67f130|3f443793-b616-0ab2-5b58-373952e46884"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-78-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 100,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "5ea9dfa2ffb63e801d67f130|3f443793-b616-0ab2-5b58-373952e46888"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-78-n-16",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "5ea9dfa2ffb63e801d67f130|3f443793-b616-0ab2-5b58-373952e4688c"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-78-n-17",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 300,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "5ea9dfa2ffb63e801d67f130|3f443793-b616-0ab2-5b58-373952e46890"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-78-n-18",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 800,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "5ea9dfa2ffb63e801d67f130|3f443793-b616-0ab2-5b58-373952e46894"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-78-n-19",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "5ea9dfa2ffb63e801d67f130|3f443793-b616-0ab2-5b58-373952e46894"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1584892501016,
            "useFirstGroupAsInitialState": true
        },
        "a-79": {
            "id": "a-79",
            "title": "Close Navbar 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-79-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "5ea9dfa2ffb63e801d67f130|3f443793-b616-0ab2-5b58-373952e46898"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-79-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "5ea9dfa2ffb63e801d67f130|3f443793-b616-0ab2-5b58-373952e46897"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-79-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "5ea9dfa2ffb63e801d67f130|3f443793-b616-0ab2-5b58-373952e46899"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-79-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "5ea9dfa2ffb63e801d67f130|3f443793-b616-0ab2-5b58-373952e46899"
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-79-n-5",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "5ea9dfa2ffb63e801d67f130|3f443793-b616-0ab2-5b58-373952e46897"
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-79-n-6",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 300,
                        "locked": false,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "5ea9dfa2ffb63e801d67f130|3f443793-b616-0ab2-5b58-373952e46899"
                        },
                        "widthValue": 60,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-79-n-7",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 300,
                        "locked": false,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "5ea9dfa2ffb63e801d67f130|3f443793-b616-0ab2-5b58-373952e46897"
                        },
                        "widthValue": 60,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-79-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".slant-outline.nav-center",
                            "selectorGuids": ["ee0ce8df-ed12-d43a-6289-6a4b9f902f4e", "98cd1ac6-58f9-69af-871e-054414e19df6"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-79-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".navbar-link",
                            "selectorGuids": ["ef6f8775-b697-f0f3-6ce3-25fb9ba01b00"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-79-n-10",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".slant-outline.nav-center",
                            "selectorGuids": ["ee0ce8df-ed12-d43a-6289-6a4b9f902f4e", "98cd1ac6-58f9-69af-871e-054414e19df6"]
                        },
                        "xValue": 0.8,
                        "yValue": 0.8,
                        "locked": true
                    }
                }]
            }],
            "createdOn": 1584892501016,
            "useFirstGroupAsInitialState": false
        },
        "slideInBottom": {
            "id": "slideInBottom",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }]
            }]
        },
        "slideInTop": {
            "id": "slideInTop",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }, {
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }]
        },
        "slideOutTop": {
            "id": "slideOutTop",
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }, {
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }]
        },
        "slideOutBottom": {
            "id": "slideOutBottom",
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }, {
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }]
        },
        "slideInLeft": {
            "id": "slideInLeft",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": -100,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }, {
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }]
        },
        "slideOutLeft": {
            "id": "slideOutLeft",
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }, {
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": -100,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }]
        },
        "slideInRight": {
            "id": "slideInRight",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 100,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }, {
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }]
        },
        "slideOutRight": {
            "id": "slideOutRight",
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }, {
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 100,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }]
        },
        "growIn": {
            "id": "growIn",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0.7500000000000001,
                        "yValue": 0.7500000000000001
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 1,
                        "yValue": 1
                    }
                }, {
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }]
            }]
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});