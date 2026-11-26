;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "d424b2a5-28ae-c4fb-8e1d-fd90a16b9901")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 500044, t => {
    "use strict";
    var e = t.i(244835),
        i = t.i(76409);
    t.s(["f", 0, function() {
        let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            n = (0, e.useContext)(i.f);
        if (null === n) return [!0, null];
        let {
            isPresent: s,
            onExitComplete: r,
            register: o
        } = n, a = (0, e.useId)();
        (0, e.useEffect)(() => {
            if (t) return o(a)
        }, [t]);
        let l = (0, e.useCallback)(() => t && r && r(a), [a, r, t]);
        return !s && r ? [!1, l] : [!0]
    }])
}, 800547, t => {
    "use strict";
    let e = (0, t.i(244835).createContext)({});
    t.s(["f", 0, e])
}, 369406, t => {
    "use strict";
    let e = (0, t.i(244835).createContext)({
        strict: !1
    });
    t.s(["f", 0, e])
}, 288474, t => {
    "use strict";
    let e = (0, t.i(244835).createContext)({
        transformPagePoint: t => t,
        isStatic: !1,
        reducedMotion: "never"
    });
    t.s(["f", 0, e])
}, 354712, 868216, 716319, 100446, 251659, 406623, 287564, 473299, t => {
    "use strict";
    var e = t.i(244835);
    let i = (0, e.createContext)({});
    t.s(["f", 0, i], 354712);
    var n = t.i(180534),
        s = t.i(742330);

    function r(t) {
        return Array.isArray(t) ? t.join(" ") : t
    }
    t.s(["f", 0, function(t) {
        let {
            initial: o,
            animate: a
        } = function(t, e) {
            if ((0, n.m)(t)) {
                let {
                    initial: e,
                    animate: i
                } = t;
                return {
                    initial: !1 === e || (0, s.f)(e) ? e : void 0,
                    animate: (0, s.f)(i) ? i : void 0
                }
            }
            return !1 !== t.inherit ? e : {}
        }(t, (0, e.useContext)(i));
        return (0, e.useMemo)(() => ({
            initial: o,
            animate: a
        }), [r(o), r(a)])
    }], 868216);
    var o = t.i(413380),
        a = t.i(747281),
        l = t.i(405581);
    let h = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
    });

    function u(t, e, i) {
        for (let n in e)(0, o.f)(e[n]) || (0, a.f)(n, i) || (t[n] = e[n])
    }
    t.s(["f", 0, h], 716319);
    var d = t.i(137451),
        c = t.i(197656);
    let f = () => ({ ...h(),
        attrs: {}
    });
    t.s(["f", 0, f], 100446);
    let p = new Set(["animate", "exit", "variants", "initial", "style", "values", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);

    function m(t) {
        return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || p.has(t)
    }
    var v = t.i(907293);
    t.s(["f", 0, function(t, i, n, s, r) {
        let {
            latestValues: a
        } = s, p = arguments.length > 5 && void 0 !== arguments[5] && arguments[5], g = arguments.length > 6 ? arguments[6] : void 0, y = arguments.length > 7 ? arguments[7] : void 0, x = (g ? ? (0, v.f)(t) ? function(t, i, n, s) {
            let r = (0, e.useMemo)(() => {
                let e = f();
                return (0, d.d)(e, i, (0, c.f)(s), t.transformTemplate, t.style), { ...e.attrs,
                    style: { ...e.style
                    }
                }
            }, [i]);
            if (t.style) {
                let e = {};
                u(e, t.style, t), r.style = { ...e,
                    ...r.style
                }
            }
            return r
        } : function(t, i) {
            let n, s, r = {},
                o = (n = t.style || {}, u(s = {}, n, t), Object.assign(s, function(t, i) {
                    let {
                        transformTemplate: n
                    } = t;
                    return (0, e.useMemo)(() => {
                        let t = h();
                        return (0, l.f)(t, i, n), Object.assign({}, t.vars, t.style)
                    }, [i])
                }(t, i)), s);
            return t.drag && !1 !== t.dragListener && (r.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = !0 === t.drag ? "none" : `pan-${"x"===t.drag?"y":"x"}`), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (r.tabIndex = 0), r.style = o, r
        })(i, a, r, t), w = function(t, e, i, n) {
            let s = {};
            for (let r in t)("values" !== r || "object" != typeof t.values) && !(0, o.f)(t[r]) && ((r.startsWith("on") ? !m(r) : (null == n ? void 0 : n(r)) ? ? !m(r)) || !0 === i && m(r) || !e && !m(r) || t.draggable && r.startsWith("onDrag")) && (s[r] = t[r]);
            return s
        }(i, "string" == typeof t, p, y), T = t !== e.Fragment ? { ...w,
            ...x,
            ref: n
        } : {}, {
            children: b
        } = i, S = (0, e.useMemo)(() => (0, o.f)(b) ? b.get() : b, [b]);
        return (0, e.createElement)(t, { ...T,
            children: S
        })
    }], 251659);
    var g = t.i(97075);
    t.s(["f", () => g.f], 406623), t.s(["f", 0, function(t) {
        return (0, o.f)(t) ? t.get() : t
    }], 287564), t.s(["f", 0, function(t, e, i, n) {
        let s = e => {
            let s;
            return "function" == typeof e ? e(void 0 !== i ? i : t.custom, ...(s = [{}, {}], null == n || n.values.forEach((t, e) => {
                s[0][e] = t.get(), s[1][e] = t.getVelocity()
            }), s)) : e
        };
        return "string" == typeof(e = s(e)) && (e = t.variants && t.variants[e]), s(e)
    }], 473299)
}, 76409, t => {
    "use strict";
    let e = (0, t.i(244835).createContext)(null);
    t.s(["f", 0, e])
}, 580772, 681250, 885472, 727480, 669161, 755513, 363039, 459263, 591182, 565439, 842537, 101947, 180924, 637283, 280506, 622697, 885135, 716398, 713884, 527145, 317597, 927020, 750014, 54797, 691679, 430469, 599727, 30301, 786653, 416142, t => {
    "use strict";
    var e = t.i(729176),
        i = t.i(244835),
        n = t.i(800547),
        s = t.i(369406),
        r = t.i(288474),
        o = t.i(354712),
        a = t.i(868216),
        l = t.i(251659),
        h = t.i(907293),
        u = t.i(406623),
        d = t.i(287564),
        c = t.i(180534),
        f = t.i(203132),
        p = t.i(473299),
        m = t.i(76409),
        v = t.i(542218);
    let g = t => (e, n) => {
        let s = (0, i.useContext)(o.f),
            r = (0, i.useContext)(m.f),
            a = () => (function(t, e, i, n) {
                let {
                    scrapeMotionValuesFromProps: s,
                    createRenderState: r
                } = t;
                return {
                    latestValues: function(t, e, i, n) {
                        let s = {},
                            r = n(t, {});
                        for (let t in r) s[t] = (0, d.f)(r[t]);
                        let {
                            initial: o,
                            animate: a
                        } = t, l = (0, c.m)(t), h = (0, c.I)(t);
                        e && h && !l && !1 !== t.inherit && (void 0 === o && (o = e.initial), void 0 === a && (a = e.animate));
                        let u = !!i && !1 === i.initial,
                            m = (u = u || !1 === o) ? a : o;
                        if (m && "boolean" != typeof m && !(0, f.f)(m)) {
                            let e = Array.isArray(m) ? m : [m];
                            for (let i = 0; i < e.length; i++) {
                                let n = (0, p.f)(t, e[i]);
                                if (n) {
                                    let {
                                        transitionEnd: t,
                                        transition: e,
                                        ...i
                                    } = n;
                                    for (let t in i) {
                                        let e = i[t];
                                        if (Array.isArray(e)) {
                                            let t = u ? e.length - 1 : 0;
                                            e = e[t]
                                        }
                                        null !== e && (s[t] = e)
                                    }
                                    for (let e in t) s[e] = t[e]
                                }
                            }
                        }
                        return s
                    }(e, i, n, s),
                    renderState: r()
                }
            })(t, e, s, r);
        return n ? a() : (0, v.f)(a)
    };
    var y = t.i(716319);
    let x = g({
        scrapeMotionValuesFromProps: u.f,
        createRenderState: y.f
    });
    var w = t.i(716945),
        w = w,
        T = t.i(100446);
    let b = g({
        scrapeMotionValuesFromProps: w.f,
        createRenderState: T.f
    });
    var S = t.i(211834);
    let P = {
            animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
            exit: ["exit"],
            drag: ["drag", "dragControls"],
            focus: ["whileFocus"],
            hover: ["whileHover", "onHoverStart", "onHoverEnd"],
            tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
            pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
            inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
            layout: ["layout", "layoutId"]
        },
        A = !1;

    function M() {
        return ! function() {
            if (A) return;
            let t = {};
            for (let e in P) t[e] = {
                isEnabled: t => P[e].some(e => !!t[e])
            };
            (0, S.Y)(t), A = !0
        }(), (0, S.k)()
    }
    let E = Symbol.for("motionComponentSymbol"),
        V = "data-" + (0, t.i(788880).f)("framerAppearId"),
        k = (0, i.createContext)({});

    function C(t) {
        return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
    }
    t.s(["f", 0, k], 681250);
    var D = t.i(562763);

    function R(t) {
        let {
            forwardMotionProps: u = !1,
            type: d
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, c = arguments.length > 2 ? arguments[2] : void 0, f = arguments.length > 3 ? arguments[3] : void 0;
        c && function(t) {
            let e = M();
            for (let i in t) e[i] = { ...e[i],
                ...t[i]
            };
            (0, S.Y)(e)
        }(c);
        let p = d ? "svg" === d : (0, h.f)(t),
            v = p ? b : x;

        function g(h, d) {
            var c;
            let g, y, x, w = { ...(0, i.useContext)(r.f),
                    ...h,
                    layoutId: function(t) {
                        let {
                            layoutId: e
                        } = t, s = (0, i.useContext)(n.f).id;
                        return s && void 0 !== e ? s + "-" + e : e
                    }(h)
                },
                {
                    isStatic: T,
                    isValidProp: b
                } = w,
                S = (0, a.f)(h),
                P = v(h, T);
            if (!T && "u" > typeof window) {
                (0, i.useContext)(s.f).strict;
                let e = function(t) {
                    let {
                        drag: e,
                        layout: i
                    } = M();
                    if (!e && !i) return {};
                    let n = { ...e,
                        ...i
                    };
                    return {
                        MeasureLayout: (null == e ? void 0 : e.isEnabled(t)) || (null == i ? void 0 : i.isEnabled(t)) ? n.MeasureLayout : void 0,
                        ProjectionNode: n.ProjectionNode
                    }
                }(w);
                g = e.MeasureLayout, S.visualElement = function(t, e, n, a, l, h) {
                    var u, d, c, f;
                    let {
                        visualElement: p
                    } = (0, i.useContext)(o.f), v = (0, i.useContext)(s.f), g = (0, i.useContext)(m.f), y = (0, i.useContext)(r.f), x = y.reducedMotion, w = y.skipAnimations, T = (0, i.useRef)(null), b = (0, i.useRef)(!1);
                    a = a || v.renderer, !T.current && a && (T.current = a(t, {
                        visualState: e,
                        parent: p,
                        props: n,
                        presenceContext: g,
                        blockInitialAnimation: !!g && !1 === g.initial,
                        reducedMotionConfig: x,
                        skipAnimations: w,
                        isSVG: h
                    }), b.current && T.current && (T.current.manuallyAnimateOnMount = !0));
                    let S = T.current,
                        P = (0, i.useContext)(k);
                    S && !S.projection && l && ("html" === S.type || "svg" === S.type) && function(t, e, i, n) {
                        let {
                            layoutId: s,
                            layout: r,
                            drag: o,
                            dragConstraints: a,
                            layoutScroll: l,
                            layoutRoot: h,
                            layoutAnchor: u,
                            layoutCrossfade: d
                        } = e;
                        t.projection = new i(t.latestValues, e["data-framer-portal-id"] ? void 0 : function t(e) {
                            if (e) return !1 !== e.options.allowProjection ? e.projection : t(e.parent)
                        }(t.parent)), t.projection.setOptions({
                            layoutId: s,
                            layout: r,
                            alwaysMeasureLayout: !!o || a && C(a),
                            visualElement: t,
                            animationType: "string" == typeof r ? r : "both",
                            initialPromotionConfig: n,
                            crossfade: d,
                            layoutScroll: l,
                            layoutRoot: h,
                            layoutAnchor: u
                        })
                    }(T.current, n, l, P);
                    let A = (0, i.useRef)(!1);
                    (0, i.useInsertionEffect)(() => {
                        S && A.current && S.update(n, g)
                    });
                    let M = n[V],
                        E = (0, i.useRef)(!!M && "u" > typeof window && !(null == (u = (d = window).MotionHandoffIsComplete) ? void 0 : u.call(d, M)) && (null == (c = (f = window).MotionHasOptimisedAnimation) ? void 0 : c.call(f, M)));
                    return (0, D.f)(() => {
                        var t;
                        b.current && S && (null == (t = S.animationState) || t.animateChanges(), S.enteringChildren = void 0)
                    }, []), (0, D.f)(() => {
                        b.current = !0, S && (A.current = !0, window.MotionIsMounted = !0, S.updateFeatures(), S.scheduleRenderMicrotask(), E.current && S.animationState && S.animationState.animateChanges())
                    }), (0, i.useEffect)(() => {
                        S && (!E.current && S.animationState && S.animationState.animateChanges(), E.current && (queueMicrotask(() => {
                            var t, e;
                            null == (t = (e = window).MotionHandoffMarkAsComplete) || t.call(e, M)
                        }), E.current = !1), S.enteringChildren = void 0)
                    }), S
                }(t, P, w, f, e.ProjectionNode, p)
            }
            return (0, e.jsxs)(o.f.Provider, {
                value: S,
                children: [g && S.visualElement ? (0, e.jsx)(g, {
                    visualElement: S.visualElement,
                    ...w
                }) : null, (0, l.f)(t, h, (c = S.visualElement, y = (0, i.useRef)(d), (0, i.useInsertionEffect)(() => {
                    y.current = d
                }), x = (0, i.useRef)(null), (0, i.useCallback)(t => {
                    if (t) {
                        var e;
                        null == (e = P.onMount) || e.call(P, t)
                    }
                    c && (t ? c.mount(t) : c.unmount());
                    let i = y.current;
                    if ("function" == typeof i)
                        if (t) {
                            let e = i(t);
                            "function" == typeof e && (x.current = e)
                        } else x.current ? (x.current(), x.current = null) : i(t);
                    else i && (i.current = t)
                }, [c])), P, T, u, p, b)]
            })
        }
        g.displayName = `motion.${"string"==typeof t?t:`create(${t.displayName??t.name??""})`}`;
        let y = (0, i.forwardRef)(g);
        return y[E] = t, y
    }
    t.s(["f", 0, function(t, e) {
        if ("u" < typeof Proxy) return R;
        let i = new Map,
            n = (i, n) => R(i, n, t, e);
        return new Proxy((t, e) => n(t, e), {
            get: (s, r) => "create" === r ? n : (i.has(r) || i.set(r, R(r, void 0, t, e)), i.get(r))
        })
    }], 580772);
    class L {
        update() {}
        constructor(t) {
            this.isMounted = !1, this.node = t
        }
    }

    function j(t, e, i) {
        return (0, p.f)(t.getProps(), e, i, t)
    }
    t.s(["f", 0, L], 885472);
    let B = (t, e) => {
        var i;
        return "exit" === e ? null == (i = t.presenceContext) ? void 0 : i.custom : void 0
    };

    function F(t, e) {
        if ((null == t ? void 0 : t.inherit) && e) {
            let {
                inherit: i,
                ...n
            } = t;
            return { ...e,
                ...n
            }
        }
        return t
    }

    function I(t, e) {
        let i = (null == t ? void 0 : t[e]) ? ? (null == t ? void 0 : t.default) ? ? t;
        return i !== t ? F(i, t) : i
    }
    t.s(["f", 0, I], 727480);
    var O = t.i(96774),
        U = t.i(980455),
        $ = t.i(247569),
        N = t.i(413380);

    function W(t, e) {
        let i = t.getValue("willChange");
        if ((0, N.f)(i) && i.add) return i.add(e);
        if (!i && $.f.WillChange) {
            let i = new $.f.WillChange("auto");
            t.addValue("willChange", i), i.add(e)
        }
    }

    function Y(t) {
        return t.props[V]
    }
    t.s(["f", 0, Y], 669161);
    var z = t.i(671521),
        H = t.i(691285);
    let X = function() {
        for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        return e.reduce((t, e) => i => e(t(i)))
    };
    t.s(["f", 0, X], 755513);
    var q = t.i(754055),
        K = t.i(106762),
        _ = t.i(220244),
        Z = t.i(306075),
        J = t.i(771983),
        G = t.i(594501),
        Q = t.i(286406),
        tt = t.i(403263);

    function te(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6) ? t + (e - t) * 6 * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
    }
    var ti = t.i(872951);

    function tn(t, e) {
        return i => i > 0 ? e : t
    }
    var ts = t.i(415924);
    let tr = (t, e, i) => {
            let n = t * t,
                s = i * (e * e - n) + n;
            return s < 0 ? 0 : Math.sqrt(s)
        },
        to = [Q.f, ti.f, tt.f];

    function ta(t) {
        let e = to.find(e => e.test(t));
        if (!e) return (0, _.w)(!1, `'${t}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !1;
        let i = e.parse(t);
        return e === tt.f && (i = function(t) {
            let {
                hue: e,
                saturation: i,
                lightness: n,
                alpha: s
            } = t;
            e /= 360, n /= 100;
            let r = 0,
                o = 0,
                a = 0;
            if (i /= 100) {
                let t = n < .5 ? n * (1 + i) : n + i - n * i,
                    s = 2 * n - t;
                r = te(s, t, e + 1 / 3), o = te(s, t, e), a = te(s, t, e - 1 / 3)
            } else r = o = a = n;
            return {
                red: Math.round(255 * r),
                green: Math.round(255 * o),
                blue: Math.round(255 * a),
                alpha: s
            }
        }(i)), i
    }
    let tl = (t, e) => {
            let i = ta(t),
                n = ta(e);
            if (!i || !n) return tn(t, e);
            let s = { ...i
            };
            return t => (s.red = tr(i.red, n.red, t), s.green = tr(i.green, n.green, t), s.blue = tr(i.blue, n.blue, t), s.alpha = (0, ts.f)(i.alpha, n.alpha, t), ti.f.transform(s))
        },
        th = new Set(["none", "hidden"]);

    function tu(t, e) {
        return i => (0, ts.f)(t, e, i)
    }

    function td(t) {
        return "number" == typeof t ? tu : "string" == typeof t ? (0, Z.u)(t) ? tn : J.f.test(t) ? tl : tp : Array.isArray(t) ? tc : "object" == typeof t ? J.f.test(t) ? tl : tf : tn
    }

    function tc(t, e) {
        let i = [...t],
            n = i.length,
            s = t.map((t, i) => td(t)(t, e[i]));
        return t => {
            for (let e = 0; e < n; e++) i[e] = s[e](t);
            return i
        }
    }

    function tf(t, e) {
        let i = { ...t,
                ...e
            },
            n = {};
        for (let s in i) void 0 !== t[s] && void 0 !== e[s] && (n[s] = td(t[s])(t[s], e[s]));
        return t => {
            for (let e in n) i[e] = n[e](t);
            return i
        }
    }
    let tp = (t, e) => {
            let i = G.u.createTransformer(e),
                n = (0, G.L)(t),
                s = (0, G.L)(e);
            if (!(n.indexes.var.length === s.indexes.var.length && n.indexes.color.length === s.indexes.color.length && n.indexes.number.length >= s.indexes.number.length)) return (0, _.w)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), tn(t, e);
            if (th.has(t) && !s.values.length || th.has(e) && !n.values.length) return th.has(t) ? i => i <= 0 ? t : e : i => i >= 1 ? e : t;
            return X(tc(function(t, e) {
                let i = [],
                    n = {
                        color: 0,
                        var: 0,
                        number: 0
                    };
                for (let s = 0; s < e.values.length; s++) {
                    let r = e.types[s],
                        o = t.indexes[r][n[r]],
                        a = t.values[o] ? ? 0;
                    i[s] = a, n[r]++
                }
                return i
            }(n, s), s.values), i)
        },
        tm = /^(-?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/iu;

    function tv(t, e, i) {
        if ("number" == typeof t && "number" == typeof e && "number" == typeof i) return (0, ts.f)(t, e, i);
        if ("string" == typeof t && "string" == typeof e) {
            let i = function(t, e) {
                let i = tm.exec(t);
                if (!i) return;
                let n = tm.exec(e);
                if (!n || i[2] !== n[2]) return;
                let s = i[2],
                    r = parseFloat(i[1]),
                    o = parseFloat(n[1]);
                return t => (0, K.f)((0, ts.f)(r, o, t)) + s
            }(t, e);
            if (i) return i
        }
        return td(t)(t, e)
    }
    var tg = t.i(548092),
        ty = t.i(928058);
    let tx = t => {
        let e = e => {
            let {
                timestamp: i
            } = e;
            return t(i)
        };
        return {
            start: function() {
                let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return ty.y.update(e, t)
            },
            stop: () => (0, ty.Y)(e),
            now: () => tg.f.isProcessing ? tg.f.timestamp : H.f.now()
        }
    };
    var tw = t.i(600937);

    function tT(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2e4,
            n = arguments.length > 3 ? arguments[3] : void 0,
            s = 0,
            r = t.next(s);
        for (null == n || n.push(r.value); !r.done && s < i;) s += e, r = t.next(s), null == n || n.push(r.value);
        return s >= i ? 1 / 0 : s
    }

    function tb(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
            i = arguments.length > 2 ? arguments[2] : void 0,
            {
                keyframes: n,
                velocity: s
            } = t,
            r = n && n[n.length - 1] - n[0],
            o = i({ ...t,
                velocity: s && r ? s * e / r : s,
                keyframes: [0, e]
            }),
            a = Math.min(tT(o), 2e4);
        return {
            type: "keyframes",
            ease: t => o.next(a * t).value / e,
            duration: (0, z.q)(a)
        }
    }
    t.s(["f", 0, tb], 363039);
    let tS = .01,
        tP = 2,
        tA = .005,
        tM = .5,
        tE = t => t < 0 ? 1 / Math.max(1 + t, .05) : Math.max(1 - t, .05);

    function tV(t, e) {
        if (!(t > 1)) return 1;
        let i = Math.sqrt(t * t - 1),
            n = t - i,
            s = t + i,
            r = 2 * i * Math.exp(-e) * (1 + e);
        return tC(t => s * Math.exp(-n * t) - n * Math.exp(-s * t) - r, t => Math.exp(-s * t) - Math.exp(-n * t), e) / e
    }

    function tk(t, e) {
        return t * Math.sqrt(1 - e * e)
    }

    function tC(t, e, i) {
        let n = i;
        for (let i = 1; i < 12; i++) n -= t(n) / e(n);
        return n
    }
    let tD = (t, e) => (e ? t >= 0 : t > 0) && t < 1 / 0;

    function tR(t, e) {
        if (tD(t, e)) return t
    }

    function tL() {
        let t, e, i, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .3,
            s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .3,
            r = "object" != typeof n ? {
                visualDuration: n,
                keyframes: [0, 1],
                bounce: s
            } : n,
            o = r.keyframes[0],
            a = r.keyframes[r.keyframes.length - 1],
            l = {
                done: !1,
                value: o
            },
            {
                stiffness: h,
                damping: u,
                mass: d,
                duration: c,
                isResolvedFromDuration: f,
                isTimeDefined: p
            } = function(t) {
                let e = tR(t.stiffness),
                    i = tR(t.damping, !0),
                    n = tR(t.mass),
                    s = { ...t,
                        stiffness: e ? ? 100,
                        damping: i ? ? 10,
                        mass: n ? ? 1,
                        isResolvedFromDuration: !1,
                        isTimeDefined: (e ? ? i ? ? n) === void 0 && (void 0 !== t.duration || void 0 !== t.bounce)
                    };
                if (s.isTimeDefined) {
                    if (t.visualDuration) {
                        let e = tE(t.bounce || 0),
                            i = 2 * Math.PI / (1.2 * t.visualDuration) * tV(e, 2 * Math.PI / 1.2);
                        s.stiffness = i * i, s.damping = 2 * e * Math.sqrt(s.stiffness)
                    } else Object.assign(s, function(t) {
                        let e, i, {
                            duration: n = 800,
                            bounce: s = .3
                        } = t;
                        (0, _.w)(n <= (0, z.Z)(10), "Spring duration must be 10 seconds or less", "spring-duration-limit");
                        let r = tE(s);
                        n = (0, q.f)(.01, 10, (0, z.q)(n)), r < 1 ? (e = t => {
                            let e = t * r,
                                i = e * n;
                            return .001 - e / tk(t, r) * Math.exp(-i)
                        }, i = t => {
                            let i = t * r * n,
                                s = r * r * t * t * n,
                                o = Math.exp(-i),
                                a = tk(t * t, r);
                            return -((-e(t) + .001 > 0 ? -1 : 1) * s) * o / a
                        }) : (e = t => -.001 + Math.exp(-t * n) * (t * n + 1), i = t => -(n * n * t * Math.exp(-t * n)));
                        let o = tC(e, i, 5 / n),
                            a = o * tV(r, o * n),
                            l = a * a;
                        return {
                            stiffness: l,
                            damping: 2 * r * Math.sqrt(l),
                            duration: (0, z.Z)(n)
                        }
                    }(s)), s.isResolvedFromDuration = !0;
                    tD(s.stiffness) && tD(s.damping, !0) || (s.stiffness = 100, s.damping = 10)
                }
                return s
            }({ ...r
            }),
            m = t => p ? 0 : -(0, z.q)(t),
            v = u / (2 * Math.sqrt(h * d)),
            g = (0, z.q)(Math.sqrt(h / d)),
            y = v * g,
            x = {
                target: a,
                delta: a - o,
                velocity: m(r.velocity || 0) || 0,
                restSpeed: 0,
                restDelta: 0
            },
            w = () => {
                let t = 5 > Math.abs(x.delta);
                x.restSpeed = r.restSpeed || (t ? tS : tP), x.restDelta = r.restDelta || (t ? tA : tM)
            };
        if (w(), v < 1) {
            let n = tk(g, v),
                s = {
                    A: 0,
                    sinC: 0,
                    cosC: 0,
                    t: -1,
                    env: 0,
                    sin: 0,
                    cos: 0
                };
            i = () => {
                s.A = (x.velocity + y * x.delta) / n, s.sinC = y * s.A + x.delta * n, s.cosC = y * x.delta - s.A * n
            };
            let r = t => {
                t !== s.t && (s.t = t, s.env = Math.exp(-y * t), s.sin = Math.sin(n * t), s.cos = Math.cos(n * t))
            };
            t = t => (r(t), x.target - s.env * (s.A * s.sin + x.delta * s.cos)), e = t => (r(t), s.env * (s.sinC * s.sin + s.cosC * s.cos))
        } else if (1 === v) {
            t = t => x.target - Math.exp(-g * t) * (x.delta + (x.velocity + g * x.delta) * t);
            let n = {
                C: 0
            };
            i = () => {
                n.C = x.velocity + g * x.delta
            }, e = t => Math.exp(-g * t) * (g * n.C * t - x.velocity)
        } else {
            let n = g * Math.sqrt(v * v - 1),
                s = y - n,
                r = y + n,
                o = p ? 1 / 0 : 300 / n,
                a = (t, e) => Math.exp(e > o ? -t * o - y * (e - o) : -t * e),
                l = {
                    S: 0,
                    F: 0
                };
            i = () => {
                let t = (x.velocity + y * x.delta) / n;
                l.S = (x.delta + t) / 2, l.F = (x.delta - t) / 2
            }, t = t => x.target - l.S * a(s, t) - l.F * a(r, t), e = t => s * l.S * a(s, t) + r * l.F * a(r, t)
        }
        i();
        let T = f && c || null,
            b = {
                calculatedDuration: T,
                retarget: (t, e) => {
                    x.target = t[t.length - 1], x.delta = x.target - t[0], x.velocity = m(e), r.restSpeed && r.restDelta || w(), b.calculatedDuration = T, l.done = !1, i()
                },
                velocity: t => (0, z.Z)(e(t)),
                next: i => {
                    let n = t(i);
                    return f ? l.done = i >= c : l.done = Math.abs((0, z.Z)(e(i))) <= x.restSpeed && Math.abs(x.target - n) <= x.restDelta, l.value = l.done ? x.target : n, l
                },
                toString: () => {
                    let t = Math.min(tT(b), 2e4),
                        e = (0, tw.f)(e => b.next(t * e).value, t, 30);
                    return t + "ms " + e
                },
                toTransition: () => {}
            };
        return b
    }

    function tj(t) {
        let e, i, {
                keyframes: n,
                velocity: s = 0,
                power: r = .8,
                timeConstant: o = 325,
                bounceDamping: a = 10,
                bounceStiffness: l = 500,
                modifyTarget: h,
                min: u,
                max: d,
                restDelta: c = .5,
                restSpeed: f
            } = t,
            p = n[0],
            m = {
                done: !1,
                value: p
            },
            v = r * s,
            g = p + v,
            y = void 0 === h ? g : h(g);
        y !== g && (v = y - p);
        let x = t => -v * Math.exp(-t / o),
            w = t => {
                let e = x(t);
                m.done = Math.abs(e) <= c, m.value = m.done ? y : y + e
            },
            T = t => {
                let n;
                if ((n = m.value) < u || n > d) {
                    var s;
                    e = t, i = tL({
                        keyframes: [m.value, (s = m.value, void 0 === u ? d : void 0 === d || Math.abs(u - s) < Math.abs(d - s) ? u : d)],
                        velocity: -x(t) / o * 1e3,
                        damping: a,
                        stiffness: l,
                        restDelta: c,
                        restSpeed: f
                    })
                }
            };
        return T(0), {
            calculatedDuration: null,
            next: t => {
                let n = !1;
                return (i || void 0 !== e || (n = !0, w(t), T(t)), void 0 !== e && t >= e) ? i.next(t - e) : (n || w(t), m)
            }
        }
    }
    tL.applyToOptions = t => {
        let e = tb(t, 100, tL);
        return t.ease = e.ease, t.duration = (0, z.Z)(e.duration), t.type = "keyframes", t
    }, t.s(["f", 0, tL], 459263);
    var tB = t.i(726505);
    let tF = (t, e, i) => t * (3 * (1 - t) * ((1 - t) * e + t * i) + t * t);

    function tI(t, e, i, n) {
        return t === e && i === n ? tB.f : s => {
            let r = 0,
                o = 1,
                a = s;
            for (let e = 0;; e++) {
                a >= r && a <= o || (a = (r + o) / 2);
                let n = tF(a, t, i) - s;
                if (n * n < 1e-28 || 40 === e) break;
                n > 0 ? o = a : r = a, a -= 1e-7 * n / (tF(a + 1e-7, t, i) - s - n)
            }
            return tF(a, e, n)
        }
    }
    let tO = tI(.42, 0, 1, 1),
        tU = tI(0, 0, .58, 1),
        t$ = tI(.42, 0, .58, 1),
        tN = t => Array.isArray(t) && "number" != typeof t[0];
    t.s(["f", 0, tN], 591182);
    let tW = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        tY = t => e => 1 - t(1 - e);
    t.s(["f", 0, tY], 565439);
    let tz = tI(.33, 1.53, .69, .99),
        tH = tY(tz),
        tX = tW(tH),
        tq = t => t >= 1 ? 1 : (t *= 2) < 1 ? .5 * tH(t) : .5 * (2 - Math.pow(2, -10 * (t - 1))),
        tK = t => 1 - Math.sin(Math.acos(t)),
        t_ = tY(tK),
        tZ = tW(tK);
    t.s(["d", 0, tK, "s", 0, tZ, "o", 0, t_], 842537);
    var tJ = t.i(175811);
    let tG = {
            linear: tB.f,
            easeIn: tO,
            easeInOut: t$,
            easeOut: tU,
            circIn: tK,
            circInOut: tZ,
            circOut: t_,
            backIn: tH,
            backInOut: tX,
            backOut: tz,
            anticipate: tq
        },
        tQ = t => {
            if ((0, tJ.f)(t)) {
                (0, _.k)(4 === t.length, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
                let [e, i, n, s] = t;
                return tI(e, i, n, s)
            }
            return "string" == typeof t ? ((0, _.k)(void 0 !== tG[t], `Invalid easing type '${t}'`, "invalid-easing-type"), tG[t]) : t
        };
    var t0 = t.i(271386);

    function t1(t, e) {
        let {
            clamp: i = !0,
            ease: n,
            mixer: s
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = t.length;
        if ((0, _.k)(r === e.length, "Both input and output ranges must be the same length", "range-length"), 1 === r) return () => e[0];
        if (2 === r && e[0] === e[1]) return () => e[1];
        let o = t[0] === t[1];
        t[0] > t[r - 1] && (t = [...t].reverse(), e = [...e].reverse());
        let a = function(t, e, i) {
                let n = [],
                    s = i || $.f.mix || tv,
                    r = t.length - 1;
                for (let i = 0; i < r; i++) {
                    let r = s(t[i], t[i + 1]);
                    e && (r = X(Array.isArray(e) ? e[i] || tB.f : e, r)), n.push(r)
                }
                return n
            }(e, n, s),
            l = a.length,
            h = i => {
                if (o && i < t[0]) return e[0];
                let n = 0;
                if (l > 1)
                    for (; n < t.length - 2 && !(i < t[n + 1]); n++);
                let s = (0, t0.f)(t[n], t[n + 1], i);
                return a[n](s)
            };
        return i ? e => h((0, q.f)(t[0], t[r - 1], e)) : h
    }

    function t2(t, e) {
        let i = t[t.length - 1];
        for (let n = 1; n <= e; n++) {
            let s = (0, t0.f)(0, e, n);
            t.push((0, ts.f)(i, 1, s))
        }
    }

    function t5(t) {
        let e = [0];
        return t2(e, t.length - 1), e
    }

    function t4(t) {
        var e;
        let {
            duration: i = 300,
            keyframes: n,
            times: s,
            ease: r = "easeInOut"
        } = t, o = tN(r) ? r.map(tQ) : tQ(r) || t$, a = {
            done: !1,
            value: n[0]
        };
        if (2 === n.length && !Array.isArray(o) && (!s || 2 !== s.length || 0 === s[0] && 1 === s[1])) {
            let [t, e] = n, s = t === e ? void 0 : ($.f.mix || tv)(t, e);
            return {
                calculatedDuration: i,
                next: t => (a.value = s ? s(o(i > 0 ? (0, q.f)(0, 1, t / i) : 1)) : e, a.done = t >= i, a)
            }
        }
        let l = t1((e = s && s.length === n.length ? s : t5(n), e.map(t => t * i)), n, {
            ease: Array.isArray(o) ? o : n.map(() => o || t$).splice(0, n.length - 1)
        });
        return {
            calculatedDuration: i,
            next: t => (a.value = l(t), a.done = t >= i, a)
        }
    }
    t.s(["f", 0, t1], 101947), t.s(["f", 0, t2], 180924), t.s(["f", 0, t5], 637283), t.s(["f", 0, t4], 280506);
    var t3 = t.i(798266);

    function t6(t, e) {
        var i, n;
        let s, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return e <= 0 ? r : t.velocity ? t.velocity(e) : (i = e => t.next(e).value, n = t.next(e).value, s = Math.max(e - 5, 0), (0, t3.f)(n - i(s), e - s))
    }
    t.s(["f", 0, t6], 622697);
    var t7 = t.i(645556);
    let t9 = {
        decay: tj,
        inertia: tj,
        tween: t4,
        keyframes: t4,
        spring: tL
    };

    function t8(t) {
        "string" == typeof t.type && (t.type = t9[t.type])
    }
    t.s(["f", 0, t8], 885135);
    let et = (t, e) => e - t > 40 && !$.f.useManualTiming ? e : t;
    t.s(["f", 0, et], 716398);
    var ee = t.i(431509),
        ei = t.i(337626);
    let en = t => t / 100,
        es = t => Math.round(1e4 * t) / 1e4;
    class er extends ei.f {
        initAnimation() {
            let {
                options: t
            } = this;
            t8(t);
            let {
                type: e = t4,
                repeat: i = 0,
                repeatDelay: n = 0,
                repeatType: s,
                velocity: r = 0
            } = t, {
                keyframes: o
            } = t, a = e || t4;
            a !== t4 && "number" != typeof o[0] && (this.mixKeyframes = X(en, tv(o[0], o[1])), o = [0, 100]);
            let l = a(o === t.keyframes ? t : { ...t,
                keyframes: o
            });
            "mirror" === s && (this.mirroredGenerator = a({ ...t,
                keyframes: [...o].reverse(),
                velocity: -r
            })), null === l.calculatedDuration && (l.calculatedDuration = tT(l));
            let {
                calculatedDuration: h
            } = l;
            this.calculatedDuration = h, this.resolvedDuration = h + n, this.totalDuration = this.resolvedDuration * (i + 1) - n, this.generator = l
        }
        updateTime(t) {
            let e = Math.round(t - this.startTime) * this.playbackSpeed;
            null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = e
        }
        tick(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                {
                    generator: i,
                    totalDuration: n,
                    calculatedDuration: s
                } = this;
            if (null === this.startTime) return i.next(0);
            let {
                delay: r = 0,
                keyframes: o,
                type: a,
                onUpdate: l,
                finalKeyframe: h
            } = this.options;
            this.startTime === this.pendingStartTime && (this.startTime = et(this.startTime, t)), this.pendingStartTime = void 0, this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - n / this.speed, this.startTime)), e ? this.currentTime = t : this.updateTime(t);
            let u = this.currentTime - r * (this.playbackSpeed >= 0 ? 1 : -1),
                d = this.playbackSpeed >= 0 ? u < 0 : u > n;
            this.currentTime = Math.max(u, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = n);
            let c = this.generate(this.currentTime, d),
                {
                    done: f
                } = c;
            d || null === s || (f = this.playbackSpeed >= 0 ? this.currentTime >= n : this.currentTime <= 0);
            let p = null === this.holdTime && ("finished" === this.state || "running" === this.state && f);
            return p && a !== tj && (c.value = (0, t7.f)(o, this.options, h, this.speed)), l && l(c.value), p && this.finish(), c
        }
        at(t) {
            return this.holdTime ? ? es((t - this.startTime) * this.playbackSpeed)
        }
        sampleAt(t, e) {
            let {
                options: i,
                totalDuration: n
            } = this, s = this.at(t) - (i.delay || 0);
            return s >= n && i.type !== tj ? (0, t7.f)(i.keyframes, i, e ? void 0 : i.finalKeyframe) : this.generate(Math.max(s, 0), s < 0).value
        }
        generate(t, e) {
            let i, {
                    generator: n,
                    totalDuration: s,
                    mixKeyframes: r,
                    mirroredGenerator: o,
                    resolvedDuration: a
                } = this,
                {
                    keyframes: l,
                    repeat: h,
                    repeatType: u,
                    repeatDelay: d
                } = this.options,
                c = t,
                f = n;
            if (h) {
                let e = Math.min(t, s) / a,
                    i = Math.floor(e),
                    n = e % 1;
                !n && e >= 1 && (n = 1), 1 === n && i--, (i = Math.min(i, h + 1)) % 2 && ("reverse" === u ? (n = 1 - n, d && (n -= d / a)) : "mirror" === u && (f = o)), c = (0, q.f)(0, 1, n) * a
            }
            return e ? (this.delayState.value = l[0], i = this.delayState) : i = f.next(c), r && !e && (i.value = r(i.value)), i
        }
        then(t, e) {
            return this.finished.then(t, e)
        }
        get duration() {
            return (0, z.q)(this.calculatedDuration)
        }
        get iterationDuration() {
            let {
                delay: t = 0
            } = this.options || {};
            return this.duration + (0, z.q)(t)
        }
        get time() {
            return (0, z.q)(this.currentTime)
        }
        set time(t) {
            t = (0, z.Z)(t), this.currentTime = t, null === this.startTime || null !== this.holdTime || 0 === this.playbackSpeed ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = t, this.tick(t))
        }
        getGeneratorVelocity() {
            return t6(this.generator, this.currentTime, this.options.velocity)
        }
        get speed() {
            return this.playbackSpeed
        }
        set speed(t) {
            let e = this.playbackSpeed !== t;
            e && this.driver && this.updateTime(H.f.now()), this.playbackSpeed = t, e && this.driver && (this.time = (0, z.q)(this.currentTime))
        }
        play() {
            var t, e;
            if (this.isStopped) return;
            let {
                driver: i = tx,
                startTime: n
            } = this.options;
            this.driver || (this.driver = i(t => this.tick(t))), null == (t = (e = this.options).onPlay) || t.call(e);
            let s = this.driver.now();
            "finished" === this.state ? (this.updateFinished(), this.startTime = s) : null !== this.holdTime ? this.startTime = s - this.holdTime / (this.playbackSpeed || 1) : this.startTime || (this.startTime = n ? ? (this.pendingStartTime = s)), "finished" === this.state && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start()
        }
        pause() {
            this.state = "paused", this.updateTime(H.f.now()), this.holdTime = this.currentTime
        }
        complete() {
            "running" !== this.state && this.play(), this.state = "finished", this.holdTime = null
        }
        finish() {
            var t, e;
            this.notifyFinished(), this.teardown(), this.state = "finished", null == (t = (e = this.options).onComplete) || t.call(e)
        }
        cancel() {
            var t, e;
            this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), null == (t = (e = this.options).onCancel) || t.call(e)
        }
        teardown() {
            this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null
        }
        stopDriver() {
            this.driver && (this.driver.stop(), this.driver = void 0)
        }
        sample(t) {
            return this.startTime = 0, this.tick(t, !0)
        }
        attachTimeline(t) {
            var e;
            return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), null == (e = this.driver) || e.stop(), t.observe(this)
        }
        constructor(t) {
            super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
                done: !1,
                value: void 0
            }, this.stop = () => {
                var t, e;
                let {
                    motionValue: i
                } = this.options;
                i && i.updatedAt !== H.f.now() && this.tick(H.f.now()), this.isStopped = !0, "idle" !== this.state && (this.teardown(), null == (t = (e = this.options).onStop) || t.call(e))
            }, this.options = t, this.initAnimation(), this.play(), !1 === t.autoplay && this.pause(), (0, ee.H)(this, this.options)
        }
    }
    var eo = t.i(527510),
        ea = t.i(391438),
        el = t.i(77585);
    let eh = {
        anticipate: tq,
        backInOut: tX,
        circInOut: tZ
    };
    class eu extends el.f {
        elapsed() {
            return "running" === this.state ? (H.f.now() - this.startTime) * this.speed : 1e3 * this.time
        }
        sample(t) {
            if (!this.sampler) {
                let {
                    motionValue: t,
                    onUpdate: e,
                    onComplete: i,
                    onPlay: n,
                    onStop: s,
                    element: r,
                    ...o
                } = this.options;
                this.sampler = new er({ ...o,
                    autoplay: !1
                }), this.sampler.stop()
            }
            return this.sampler.sample(Math.max(0, t)).value
        }
        liveValue() {
            let {
                state: t
            } = this;
            if ("running" === t || "paused" === t) return this.sample(this.elapsed())
        }
        updateMotionValue(t) {
            let {
                motionValue: e,
                element: i,
                name: n
            } = this.options;
            if (!e) return;
            if (void 0 !== t) return void e.set(t);
            let {
                speed: s
            } = this, r = this.elapsed(), o = "running" === this.state && s ? (0, q.f)(0, 10, r) : 0, a = this.sample(r);
            i && n && (0, ea.f)(i, n, a), e.setWithVelocity(this.sample(r - o * Math.sign(s)), a, o / Math.abs(s || 1))
        }
        constructor(t) {
            "string" == typeof t.ease && t.ease in eh && (t.ease = eh[t.ease]), t8(t), super(t), void 0 !== t.startTime && !1 !== t.autoplay && (this.startTime = t.startTime), this.options = t
        }
    }
    var ed = t.i(868446);
    let ec = (t, e) => "zIndex" !== e && !!("number" == typeof t || Array.isArray(t) || "string" == typeof t && (G.u.test(t) || "0" === t) && !t.startsWith("url("));

    function ef(t) {
        t.duration = 0, t.type = "keyframes"
    }
    var ep = ei,
        em = t.i(560646),
        ev = t.i(495854);
    let eg = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/,
        ey = new Set(["color", "backgroundColor", "outlineColor", "fill", "stroke", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"]),
        ex = (0, em.f)(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
    var ew = t.i(667661),
        eT = t.i(950327),
        eb = t.i(808229),
        eS = t.i(594521),
        eP = t.i(651490),
        eA = t.i(704519),
        eM = t.i(135252),
        eE = t.i(551830);
    let eV = (t, e) => t - e,
        ek = (t, e, i) => {
            let n = [];
            for (let s = 0; s <= i; s++) n.push((0, ts.f)(t, e, s / i));
            return n
        },
        eC = (t, e) => {
            var i;
            return t.latestValues ? t.latestValues[e] : null == (i = t.getValue(e)) ? void 0 : i.get()
        };
    class eD extends er {
        get group() {
            let t;
            return t = this.options.motionValue.owner.current, eE.f.get(t)
        }
        get js() {
            var t;
            return null == (t = this.driver) ? void 0 : t.js
        }
        get name() {
            return this.options.name
        }
        timing() {
            let {
                startTime: t,
                speed: e,
                totalDuration: i
            } = this, {
                delay: n = 0,
                repeatType: s
            } = this.options;
            return null !== this.holdTime ? [1 / 0, 0] : 1 / 0 === i ? [t + n / e, this.resolvedDuration * ("loop" === s ? 1 : 2) / e || 1] : [t + (n + i) / e, 0]
        }
        isAccelerated() {
            let {
                group: t,
                state: e
            } = this;
            return (null == t ? void 0 : t.tracks.has(this)) && !t.isJS && this.canAccelerate && ("running" === e || "paused" === e)
        }
        liveValue() {
            return this.isAccelerated() ? this.sampleAt(H.f.now()) : void 0
        }
        tween() {
            let {
                keyframes: t,
                type: e,
                ease: i,
                times: n,
                repeat: s,
                delay: r = 0
            } = this.options, o = (0, tJ.f)(i) ? (0, eP.f)(i) : /^(linear|ease(In|Out|InOut))$/.test(i) && eA.f[i];
            if (o && !s && !n && 2 === t.length && e === t4 && null === this.holdTime) {
                let t = this.startTime + r / this.speed;
                return [t, t + this.resolvedDuration / this.speed, o]
            }
        }
        boundaries(t, e) {
            let {
                startTime: i,
                speed: n,
                resolvedDuration: s,
                options: r
            } = this, {
                delay: o = 0,
                repeat: a = 0,
                repeatDelay: l = 0,
                repeatType: h,
                times: u,
                keyframes: d,
                type: c
            } = r, f = (c || t4) === t4 ? u || t5(d) : [0, 1], p = i + o / n, m = [];
            if (null !== this.holdTime || !(s > 0)) return m;
            for (let i = Math.max(0, Math.floor((t - p) * n / s)); i <= a; i++) {
                let r = p + i * s / n;
                if (r > e) break;
                for (let o of f) {
                    let a = r + (i % 2 && h && "loop" !== h ? 1 - o : o) * (s - l) / n;
                    a > t && a < e && m.push(a)
                }
            }
            return m
        }
        numberAt(t) {
            return parseFloat(this.sampleAt(t, !0))
        }
        sync() {
            let t = H.f.now();
            this.options.motionValue.setWithVelocity(this.sampleAt(t - 10, !0), this.sampleAt(t, !0), 10)
        }
        play() {
            var t;
            let e, i, n, s, r, o, a, l, h, u, d, c, f, p, m, v, g, y, x, w;
            this.isStopped || ((this.group || (e = (t = this.options.motionValue.owner).current, i = new Set, n = new Map, s = {}, r = [], o = new Map, a = [], l = !1, h = !1, u = !1, d = -1 / 0, c = t => {
                for (let e of i)
                    if (e.name === t) return !0
            }, f = (e, i) => {
                let o = {};
                for (let a of void 0 === e ? eT.$ : r) {
                    let r = n.get(a),
                        l = void 0 === e ? eC(t, a) : r ? r.sampleAt(i > e && !r.timing()[1] ? i : e) : s[a];
                    void 0 !== l && (o[a] = l)
                }
                return o
            }, p = function() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f();
                e.style.transform = (0, ew.n)(t, {})
            }, m = function() {
                let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                t && p(), a.forEach(t => {
                    let {
                        animation: e
                    } = t;
                    return e.cancel()
                }), a = []
            }, v = function(t, e) {
                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0,
                    n = {
                        animation: t,
                        offset: e,
                        end: i
                    };
                t.startTime = H.f.now() + e, i < 1 / 0 && (t.onfinish = () => {
                    n.isDone = !0, a.some(t => 1 / 0 === t.end) && (t.cancel(), a = a.filter(t => t !== n)), w.schedule(!1)
                }), t.oncancel = () => a.includes(n) && w.demote(), a.push(n)
            }, g = (t, e, i) => {
                let n = (e, i) => Math.abs(t(i) - t(e)),
                    s = n(e, i);
                for (; i - e > .01;) {
                    let t = (e + i) / 2;
                    n(e, t) > n(t, i) ? i = t : e = t
                }
                return n(e, i) > s / 2 ? [e, i] : []
            }, y = function(t, i, n) {
                let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                        fill: "both"
                    },
                    r = arguments.length > 4 ? arguments[4] : void 0,
                    o = arguments.length > 5 ? arguments[5] : void 0,
                    a = t.flatMap(t => t.boundaries(i, n)),
                    l = o || ((t, e, i, n) => {
                        let s, r, o = Math.min(200, Math.max(2, Math.ceil((i - e) / 10)));
                        if (4 * n.length > o) return;
                        let a = ek(e, i, o).concat(n).sort(eV),
                            l = t => (0, t0.f)(e, i, t);
                        for (let e of t) {
                            let t = a.map(t => e.numberAt(t)),
                                [i] = t,
                                n = t[t.length - 1] - i,
                                o = t.map(t => n ? (t - i) / n : t - i);
                            if (n)
                                if (s) {
                                    if (o.some((t, e) => !(.001 >= Math.abs(t - s[e])))) return
                                } else s = o, r = t => (e.numberAt(t) - i) / n;
                            else if (o.some(t => !(.001 >= Math.abs(t)))) return
                        }
                        if (!s || s.every((t, e) => .001 >= Math.abs(t - l(a[e])))) return "linear";
                        let h = [],
                            u = function(t) {
                                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r(t);
                                return h.push(es(e) + " " + es(100 * l(t)) + "%")
                            };
                        return s.forEach((t, e) => {
                            e && Math.abs(t - s[e - 1]) > .2 && g(r, a[e - 1], a[e]).forEach(t => u(t)), u(a[e], t)
                        }), "linear(" + h + ")"
                    })(t, i, n, a),
                    h = l ? [i, n] : ((t, e, i, n) => {
                        let s = [e],
                            r = (e, i, n) => {
                                if (i - e < 1 || t.every(t => !(Math.abs(t.numberAt((e + i) / 2) - (t.numberAt(e) + t.numberAt(i)) / 2) > (t.name.startsWith("scale") ? .001 : .1)))) s.push(i);
                                else if (n < 4) r(e, (e + i) / 2, n + 1), r((e + i) / 2, i, n + 1);
                                else {
                                    for (let n of t) s.push(...g(t => n.numberAt(t), e, i));
                                    s.push(i)
                                }
                            },
                            o = ek(e, i, Math.ceil((i - e) / 100));
                        for (let t of n) o.push(t, Math.min(t + .01, i));
                        let a = e;
                        for (let t of o.sort(eV)) t > a && r(a, t, 0), a = t;
                        return s.sort(eV)
                    })(t, i, n, a),
                    u = h.map(t => ((t, e) => {
                        let i = "",
                            n = f(t, e);
                        for (let t in n) i += (ew.V[t] || t) + "(" + (0, eS.f)(n[t], eb.f[t]) + ") ";
                        return i || "none"
                    })(t, r)),
                    d = {
                        transform: u
                    };
                return l || (d.offset = h.map(t => (0, t0.f)(i, n, t))), u.every(t => t === u[0]) && (p(f(i, r)), d = null), e.animate(d, { ...s,
                    duration: n - i,
                    easing: l || "linear"
                })
            }, x = () => {
                let c = H.f.now();
                if (w.isJS || (w.isFinishing = !0, i.forEach(e => {
                        let [i, n] = e.timing();
                        "running" === e.state && e.speed > 0 && !n && i <= c + 1 && (e.complete(), s[e.name] = eC(t, e.name), o.has(e) || (l = !0))
                    }), w.isFinishing = !1), h = !1, i.forEach((t, e) => {
                        let {
                            state: n
                        } = t;
                        ("idle" === n || "finished" === n) && i.delete(e)
                    }), !i.size) {
                    eE.f.delete(e), w.isJS || m();
                    return
                }
                for (let t of i)
                    if (!t.canAccelerate) return w.demote(!0);
                w.isJS && (w.isJS = !1, l = !0, i.forEach(t => {
                    var e;
                    return null == (e = t.js) ? void 0 : e.stop()
                }));
                let f = l,
                    p = u;
                if (l = u = !1, f || !(t => {
                        let e, n = 0;
                        for (let s of i) {
                            let i = o.get(s);
                            if (!i) return !1;
                            let [r, a, l] = i, h = s.at(t), u = 1 / 0 === s.timing()[0];
                            if (l) {
                                if (u && h === r) continue;
                                return !1
                            }
                            let d = (h - r) / a,
                                c = u ? 0 : s.speed / a;
                            if (void 0 === e) e = d, n = c;
                            else if (Math.abs(d - e) > 1 || c !== n) return !1
                        }
                        if (void 0 === e) return !0;
                        if (!a.length) return !1;
                        for (let {
                                offset: t,
                                end: i,
                                isDone: n
                            } of a) {
                            let s = e - t;
                            if (i < 1 / 0 && (n ? s < i - 1 : s < 0 || s >= i)) return !1
                        }
                        for (let {
                                animation: i,
                                offset: s,
                                isDone: r
                            } of a) {
                            if (r) continue;
                            let o = e - s;
                            n ? (i.playbackRate = n, i.startTime = t - o / n) : (i.pause(), i.currentTime = o)
                        }
                        return !0
                    })(c)) {
                    if (p) {
                        if (c - d < 100) return w.demote();
                        d = c
                    }
                    if (!(l => {
                            let h = l,
                                u = 0,
                                d = 0,
                                c = [],
                                f = [],
                                p = new Set;
                            for (let t of (n.clear(), o = new Map, i)) {
                                n.set(t.name, t);
                                let [e, i] = t.timing(), s = 1 / 0 === e;
                                if (o.set(t, [t.at(l), t.speed, s]), s) {
                                    t.sync();
                                    continue
                                }
                                if (t.speed < 0) return;
                                if (i) {
                                    if (u) {
                                        let t = (e - d) / i;
                                        if (Math.abs(i - u) > 1 || Math.abs(t - Math.round(t)) * u > 1) return
                                    } else u = i, d = e;
                                    f.push(t)
                                } else p.add(e);
                                c.push(t), h = Math.max(h, e)
                            }
                            s = {}, r = eT.$.filter(e => {
                                if (n.has(e)) return !0;
                                let i = s[e] = eC(t, e);
                                return void 0 !== i && parseFloat(i) !== +!!e.startsWith("scale")
                            }), m(!1);
                            let g = !u && (t => {
                                let e;
                                for (let i of t) {
                                    let t = i.tween();
                                    if (!t || (null == e ? void 0 : e.some((e, i) => i < 2 ? Math.abs(t[i] - e) > 1 : t[i] !== e))) return;
                                    e = t
                                }
                                return e
                            })(c);
                            try {
                                if (g && g[1] > l) {
                                    let [t, e, i] = g;
                                    v(y(c, t, e, void 0, void 0, i), t - l, e - t)
                                } else h > l && (v(y(c, l, h), 0, h - l), p.forEach(t => t < h - 1 && v(e.animate(null, {
                                    duration: t - l
                                }), 0, t - l)));
                                if (u) {
                                    let t = d + Math.floor((h - d) / u) * u;
                                    v(y(f, t, t + u, {
                                        iterations: 1 / 0,
                                        iterationStart: (h - t) / u,
                                        fill: "forwards"
                                    }, h), h - l)
                                }
                            } catch {
                                return
                            }
                            return a.length || m(), !0
                        })(c)) return w.demote()
                }
            }, w = {
                tracks: i,
                isJS: !1,
                isFinishing: !1,
                schedule(t, e) {
                    l || (l = t), u || (u = !!e), h || (h = !0, tg.f.isProcessing ? ty.y.render(x, !1, !0) : queueMicrotask(x))
                },
                check() {
                    if (!w.isJS) {
                        for (let e in s)
                            if (eC(t, e) !== s[e] && !c(e)) return w.schedule(!0, !0)
                    }
                },
                demote(t) {
                    w.isJS || (i.forEach(e => {
                        e.isAccelerated() && e.sync(), t || (e.canAccelerate = !1)
                    }), w.isJS = !0, o = new Map, m(), i.forEach(t => {
                        var e;
                        return "running" === t.state && (null == (e = t.js) ? void 0 : e.start())
                    }))
                }
            }, eE.f.set(e, w), w)).tracks.add(this), super.play())
        }
        pause() {
            super.pause(), this.isAccelerated() && (this.sync(), this.group.schedule(!1))
        }
        complete() {
            super.complete();
            let {
                group: t
            } = this;
            t && !t.isJS && this.canAccelerate && this.tick(H.f.now())
        }
        get time() {
            return this.isAccelerated() ? (0, z.q)((0, q.f)(0, this.totalDuration, this.at(H.f.now()) - (this.options.delay || 0))) : super.time
        }
        set time(t) {
            super.time = t
        }
        attachTimeline(t) {
            var e;
            return this.canAccelerate = !1, null == (e = this.group) || e.demote(!0), super.attachTimeline(t)
        }
        constructor(t) {
            let e = t.motionValue.owner.current,
                {
                    driver: i = tx
                } = t,
                n = function(t) {
                    var e;
                    let i = t.motionValue.owner,
                        {
                            onUpdate: n,
                            transformTemplate: s
                        } = i.getProps();
                    return !t.isHandoff && !n && !t.hasOnUpdate && !s && "inertia" !== t.type && "none" === (eC(i, "transform") || "none") && !eC(i, "pathRotation") && !(null == (e = i.projection) ? void 0 : e.isProjecting())
                }(t);
            t.driver = t => {
                let n = i(t);
                return {
                    js: n,
                    now: n.now,
                    start: function() {
                        let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                            i = eE.f.get(e);
                        !i || i.isJS ? n.start(t) : i.schedule(!1, !t)
                    },
                    stop: () => {
                        n.stop();
                        let t = eE.f.get(e);
                        null == t || t.schedule(!t.isFinishing)
                    }
                }
            }, super(t), this.canAccelerate = n;
            let {
                stop: s
            } = this;
            this.stop = () => {
                this.isAccelerated() && this.sync(), s()
            }
        }
    }
    class eR extends ep.f {
        onKeyframesResolved(t, e, i, n) {
            let s;
            this.keyframeResolver = void 0;
            let {
                name: r,
                type: o,
                velocity: a,
                delay: l,
                isHandoff: h,
                onUpdate: u
            } = i;
            this.resolvedAt = H.f.now();
            let d = !0;
            ! function(t, e, i, n) {
                let s = t[0];
                if (null === s) return !1;
                if ("display" === e || "visibility" === e) return !0;
                let r = t[t.length - 1],
                    o = ec(s, e),
                    a = ec(r, e);
                return o && a ? function(t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                        if (t[i] !== e) return !0
                }(t) || ("spring" === i || (0, ed.f)(i)) && n : (o !== a && (0, _.w)(!1, `You are trying to animate ${e} from "${s}" to "${r}". "${o?r:s}" is not an animatable value.`, "value-not-animatable"), !1)
            }(t, r, o, a) && (d = !1, ($.f.instantAnimations || !l) && (null == u || u((0, t7.f)(t, i, e))), t[0] = t[t.length - 1], ef(i), i.repeat = 0);
            let {
                onComplete: c
            } = i;
            i.finalKeyframe = e, i.keyframes = t, i.onComplete = () => {
                null == c || c(), this.notifyFinished()
            };
            let f = d && !h && function(t) {
                    var e;
                    let {
                        motionValue: i,
                        name: n,
                        repeatDelay: s,
                        repeatType: r,
                        damping: o,
                        type: a,
                        keyframes: l
                    } = t;
                    if (!n || !(ev.f.has(n) || ey.has(n))) return !1;
                    let h = null == i || null == (e = i.owner) ? void 0 : e.current;
                    if (!(h instanceof HTMLElement) && !(h instanceof SVGElement)) return !1;
                    let {
                        onUpdate: u,
                        transformTemplate: d
                    } = i.owner.getProps();
                    return ex() && (ev.f.has(n) || ey.has(n) && function(t) {
                        for (let e = 0; e < t.length; e++)
                            if ("string" == typeof t[e] && eg.test(t[e])) return !0;
                        return !1
                    }(l)) && ("transform" !== n || !d) && !u && !s && "mirror" !== r && 0 !== o && "inertia" !== a
                }(i),
                p = !f && (t => {
                    var e;
                    let {
                        name: i,
                        motionValue: n
                    } = t;
                    return i && eT.$.includes(i) && (null == n || null == (e = n.owner) ? void 0 : e.current) instanceof HTMLElement && ex() && (0, eM.f)()
                })(i);
            if (n && (f || p || this.resolvedAt !== this.createdAt) && (i.startTime ? ? (i.startTime = et(this.createdAt, this.resolvedAt))), f) {
                var m, v;
                i.element = null == (v = i.motionValue) || null == (m = v.owner) ? void 0 : m.current;
                try {
                    s = new eu(i)
                } catch {
                    s = new er(i)
                }
            } else s = p ? new eD(i) : new er(i);
            this.pendingTimeline && (this.stopTimeline = s.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = s
        }
        get finished() {
            return this._animation ? this._animation.finished : super.finished
        }
        then(t, e) {
            return this.finished.finally(t).then(() => {})
        }
        liveValue() {
            var t, e;
            return null == (e = this._animation) || null == (t = e.liveValue) ? void 0 : t.call(e)
        }
        get animation() {
            if (!this._animation) {
                var t;
                null == (t = this.keyframeResolver) || t.resume(), (0, eo.f)()
            }
            return this._animation
        }
        get duration() {
            return this.animation.duration
        }
        get iterationDuration() {
            return this.animation.iterationDuration
        }
        get time() {
            return this.animation.time
        }
        set time(t) {
            this.animation.time = t
        }
        get speed() {
            return this.animation.speed
        }
        get state() {
            return this.animation.state
        }
        set speed(t) {
            this.animation.speed = t
        }
        get startTime() {
            return this.animation.startTime
        }
        attachTimeline(t) {
            return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t, () => this.stop()
        }
        play() {
            this.animation.play()
        }
        pause() {
            this.animation.pause()
        }
        complete() {
            this.animation.complete()
        }
        cancel() {
            var t;
            this._animation && this.animation.cancel(), null == (t = this.keyframeResolver) || t.cancel()
        }
        constructor(t) {
            var e;
            super(), this.stop = () => {
                var t, e;
                this._animation && (this._animation.stop(), null == (e = this.stopTimeline) || e.call(this)), null == (t = this.keyframeResolver) || t.cancel()
            }, this.createdAt = H.f.now();
            let {
                keyframes: i,
                name: n,
                motionValue: s,
                element: r
            } = t;
            t.autoplay ? ? (t.autoplay = !0), t.delay ? ? (t.delay = 0), t.type ? ? (t.type = "keyframes"), t.repeat ? ? (t.repeat = 0), t.repeatDelay ? ? (t.repeatDelay = 0), t.repeatType ? ? (t.repeatType = "loop");
            let o = (null == r ? void 0 : r.KeyframeResolver) || eo.p;
            this.keyframeResolver = new o(i, (e, i, n) => this.onKeyframesResolved(e, i, t, !n), n, s, r), null == (e = this.keyframeResolver) || e.scheduleResolve()
        }
    }
    let eL = {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restSpeed: 10
        },
        ej = {
            type: "keyframes",
            duration: .8
        },
        eB = {
            type: "keyframes",
            ease: [.25, .1, .35, 1],
            duration: .3
        },
        eF = new Set(["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from", "elapsed"]),
        eI = function(t, e, i) {
            let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                s = arguments.length > 4 ? arguments[4] : void 0,
                r = arguments.length > 5 ? arguments[5] : void 0;
            return o => {
                let a = I(n, t) || {},
                    l = a.delay || n.delay || 0,
                    {
                        elapsed: h = 0
                    } = n;
                h -= (0, z.Z)(l);
                let u = {
                    keyframes: Array.isArray(i) ? i : [null, i],
                    ease: "easeOut",
                    velocity: e.getVelocity(),
                    ...a,
                    delay: -h,
                    onUpdate: t => {
                        e.set(t), a.onUpdate && a.onUpdate(t)
                    },
                    onComplete: () => {
                        o(), a.onComplete && a.onComplete()
                    },
                    name: t,
                    motionValue: e,
                    element: r ? void 0 : s,
                    hasOnUpdate: !!a.onUpdate
                };
                ! function(t) {
                    for (let e in t)
                        if (!eF.has(e)) return !0;
                    return !1
                }(a) && Object.assign(u, ((t, e) => {
                    let {
                        keyframes: i
                    } = e;
                    return i.length > 2 ? ej : eT.P.has(t) ? t.startsWith("scale") ? {
                        type: "spring",
                        stiffness: 550,
                        damping: 0 === i[1] ? 2 * Math.sqrt(550) : 30,
                        restSpeed: 10
                    } : eL : eB
                })(t, u)), u.duration && (u.duration = (0, z.Z)(u.duration)), u.repeatDelay && (u.repeatDelay = (0, z.Z)(u.repeatDelay)), void 0 !== u.from && (u.keyframes[0] = u.from);
                let d = !1;
                if (!1 !== u.type && (0 !== u.duration || u.repeatDelay) || (ef(u), 0 === u.delay && (d = !0)), ($.f.instantAnimations || $.f.skipAnimations || (null == s ? void 0 : s.shouldSkipAnimations) || a.skipAnimations) && (d = !0, ef(u), u.delay = 0), u.allowFlatten = !a.type && !a.ease, d && !r && void 0 !== e.get()) {
                    let t = (0, t7.f)(u.keyframes, a);
                    if (void 0 !== t) return void ty.y.update(() => {
                        u.onUpdate(t), u.onComplete()
                    })
                }
                return a.isSync ? new er(u) : new eR(u)
            }
        };
    t.s(["f", 0, eI], 713884);
    let eO = "u" > typeof window;

    function eU(t, e) {
        var i;
        let {
            delay: n = 0,
            transitionOverride: s,
            type: r
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
            transition: o,
            transitionEnd: a,
            ...l
        } = e, h = t.getDefaultTransition(), u = null == (o = o ? F(o, h) : h) ? void 0 : o.reduceMotion, d = null == o ? void 0 : o.skipAnimations;
        s && (o = s);
        let c = [],
            f = r && (null == (i = t.animationState) ? void 0 : i.getState()[r]),
            p = null == o ? void 0 : o.path;
        for (let e in p && p.animateVisualElement(t, l, o, n, c), l) {
            let i = t.getValue(e, t.latestValues[e] ? ? null),
                s = l[e];
            if (void 0 === s || f && function(t, e) {
                    let {
                        protectedKeys: i,
                        needsAnimating: n
                    } = t, s = e in i && !n[e];
                    return n[e] = !1, s
                }(f, e)) continue;
            let r = {
                delay: n,
                ...I(o || {}, e)
            };
            d && (r.skipAnimations = !0);
            let a = i.get();
            if (void 0 !== a && !i.isAnimating() && !Array.isArray(s) && s === a && !r.velocity) {
                ty.y.update(() => i.set(s));
                continue
            }
            let h = !1;
            if (eO && window.MotionHandoffAnimation) {
                let i = Y(t);
                if (i) {
                    let t = window.MotionHandoffAnimation(i, e, ty.y);
                    null !== t && (r.startTime = t, h = !0)
                }
            }
            W(t, e);
            let p = u ? ? t.shouldReduceMotion;
            i.start(eI(e, i, s, p && O.f.has(e) ? {
                type: !1
            } : r, t, h));
            let m = i.animation;
            m && c.push(m)
        }
        if (a) {
            let e = () => ty.y.update(() => {
                a && function(t, e) {
                    let {
                        transitionEnd: i = {},
                        transition: n = {},
                        ...s
                    } = j(t, e) || {};
                    for (let e in s = { ...s,
                            ...i
                        }) {
                        var r;
                        let i = Array.isArray(r = s[e]) ? r[r.length - 1] || 0 : r;
                        t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, (0, U.o)(i))
                    }
                }(t, a)
            });
            c.length ? Promise.all(c).then(e) : e()
        }
        return c
    }

    function e$(t, e, i) {
        let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
            r = Array.from(t).sort((t, e) => t.sortNodePosition(e)).indexOf(e),
            o = t.size,
            a = (o - 1) * n;
        return "function" == typeof i ? i(r, o) : 1 === s ? r * n : a - r * n
    }

    function eN(t, e) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            n = j(t, e, B(t, i.type)),
            s = i.transitionOverride || ((null == n ? void 0 : n.transition) ? ? (t.getDefaultTransition() || {})),
            r = () => Promise.all(n ? eU(t, n, i) : []),
            o = function() {
                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    {
                        variantChildren: r
                    } = t,
                    {
                        delayChildren: o = 0,
                        staggerChildren: a,
                        staggerDirection: l
                    } = s,
                    h = [];
                return null == r || r.forEach(t => {
                    t.notify("AnimationStart", e), h.push(eN(t, e, { ...i,
                        delay: n + ("function" == typeof o ? 0 : o) + e$(r, t, o, a, l)
                    }).then(() => t.notify("AnimationComplete", e)))
                }), Promise.all(h)
            },
            {
                when: a
            } = s;
        return a ? "beforeChildren" === a ? r().then(() => o()) : o().then(r) : Promise.all([r(), o(i.delay)])
    }
    var eW = t.i(742330);

    function eY(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let n = 0; n < i; n++)
            if (e[n] !== t[n]) return !1;
        return !0
    }
    var ez = t.i(431969);
    let eH = [...ez.v].reverse();

    function eX() {
        let t = {};
        for (let e of ez.v) t[e] = {
            isActive: "animate" === e,
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {}
        };
        return t
    }
    let eq = 0;
    t.s(["f", 0, {
        animation: {
            Feature: class extends L {
                updateAnimationControlsSubscription() {
                    let {
                        animate: t
                    } = this.node.getProps();
                    (0, f.f)(t) && (this.unmountControls = t.subscribe(this.node))
                }
                mount() {
                    this.updateAnimationControlsSubscription()
                }
                update() {
                    let {
                        animate: t
                    } = this.node.getProps(), {
                        animate: e
                    } = this.node.prevProps || {};
                    t !== e && this.updateAnimationControlsSubscription()
                }
                unmount() {
                    var t;
                    this.node.animationState.reset(), null == (t = this.unmountControls) || t.call(this)
                }
                constructor(t) {
                    super(t), t.animationState || (t.animationState = function(t) {
                        let e = e => Promise.all(e.map(e => {
                                let {
                                    animation: i,
                                    options: n
                                } = e;
                                return function(t, e) {
                                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                    return t.notify("AnimationStart", e), (Array.isArray(e) ? Promise.all(e.map(e => eN(t, e, i))) : "string" == typeof e ? eN(t, e, i) : Promise.all(eU(t, j(t, e, i.custom), i))).then(() => {
                                        t.notify("AnimationComplete", e)
                                    })
                                }(t, i, n)
                            })),
                            i = eX(),
                            n = !0,
                            s = !1;

                        function r(r) {
                            let {
                                props: o,
                                parent: a,
                                manuallyAnimateOnMount: l
                            } = t, h = n || s, u = [], d = new Set, c = {}, p = 1 / 0, m = t;
                            do m = !1 !== m.props.inherit && m.parent; while (m && !m.isControllingVariants) if (eH.forEach((e, n) => {
                                    var s, v, g, y;
                                    let x = i[e],
                                        w = o[e],
                                        T = m && m.props[e],
                                        b = void 0 !== w ? w : (0, eW.f)(T) || !1 === T ? T : void 0,
                                        S = (0, eW.f)(b),
                                        P = e === r ? x.isActive : null;
                                    !1 === P && (p = n);
                                    let A = S && void 0 === w && !(h && l);
                                    if (x.protectedKeys = { ...c
                                        }, !x.isActive && null === P || !b && !x.prevProp || (0, f.f)(b) || "boolean" == typeof b) return;
                                    if ("exit" === e && x.isActive && !0 !== P) {
                                        c = { ...c,
                                            ...x.prevResolvedValues
                                        };
                                        return
                                    }
                                    let M = (s = x.prevProp, "string" == typeof(v = b) ? v !== s : !!Array.isArray(v) && !eY(v, s)),
                                        E = M || S && (P && !A || n > p),
                                        V = !1,
                                        k = Array.isArray(b) ? b : [b],
                                        C = {};
                                    if (!1 !== P)
                                        for (let i of k) {
                                            let {
                                                transition: n,
                                                transitionEnd: s,
                                                ...r
                                            } = j(t, i, B(t, e)) || {};
                                            C = { ...C,
                                                ...r,
                                                ...s
                                            }
                                        }
                                    let {
                                        prevResolvedValues: D
                                    } = x;
                                    for (let e in { ...D,
                                            ...C
                                        }) {
                                        if (e in c) continue;
                                        let i = C[e],
                                            n = D[e],
                                            s = Array.isArray(i) && Array.isArray(n) ? !eY(i, n) || M : i !== n;
                                        if (s && null == i) d.add(e);
                                        else if (s || void 0 !== i && d.has(e)) {
                                            E = !0, d.delete(e) && (V = !0), x.needsAnimating[e] = !0;
                                            let i = t.getValue(e);
                                            i && (i.liveStyle = !1)
                                        } else x.protectedKeys[e] = !0
                                    }
                                    if (x.prevProp = b, x.prevResolvedValues = C, x.isActive && (c = { ...c,
                                            ...C
                                        }), E && (!(A && M) || V))
                                        for (let i of k) {
                                            let n = {
                                                type: e
                                            };
                                            if ("string" == typeof i && h && l && (null == a ? void 0 : a.enteringChildren)) {
                                                let e = null == (y = j(a, i)) || null == (g = y.transition) ? void 0 : g.delayChildren;
                                                n.delay = e$(a.enteringChildren, t, e)
                                            }
                                            u.push({
                                                animation: i,
                                                options: n
                                            })
                                        }
                                }), d.size) {
                                var v;
                                let {
                                    initial: e
                                } = o, i = {}, n = "boolean" != typeof e && j(t, Array.isArray(e) ? e[0] : e, null == (v = t.presenceContext) ? void 0 : v.custom);
                                n && n.transition && (i.transition = n.transition), d.forEach(s => {
                                    let r = t.getValue(s);
                                    r && (r.liveStyle = !0);
                                    let a = n && !Array.isArray(e) ? n[s] : void 0,
                                        l = t.getBaseTargetFromProps(o, s);
                                    i[s] = (void 0 !== a ? a : void 0 === l || (0, N.f)(l) ? void 0 === t.initialValues[s] ? t.baseTarget[s] : void 0 : l) ? ? null
                                }), u.push({
                                    animation: i
                                })
                            }
                            let g = h && t.blockInitialAnimation || n && !l && (!1 === o.initial || o.initial === o.animate);
                            return n = s = !1, !g && u.length ? e(u) : Promise.resolve()
                        }
                        return {
                            animateChanges: r,
                            setActive: function(e, n) {
                                var s;
                                if (i[e].isActive === n) return Promise.resolve();
                                null == (s = t.variantChildren) || s.forEach(t => {
                                    var i;
                                    return null == (i = t.animationState) ? void 0 : i.setActive(e, n)
                                }), i[e].isActive = n;
                                let o = r(e);
                                for (let t in i) i[t].protectedKeys = {};
                                return o
                            },
                            setAnimateFunction: i => {
                                e = i(t)
                            },
                            getState: () => i,
                            reset: () => {
                                i = eX(), s = !0
                            }
                        }
                    }(t))
                }
            }
        },
        exit: {
            Feature: class extends L {
                update() {
                    let {
                        presenceContext: t,
                        prevPresenceContext: e,
                        animationState: i
                    } = this.node;
                    if (!t || !i) return;
                    let {
                        isPresent: n,
                        onExitComplete: s
                    } = t, r = null == e ? void 0 : e.isPresent;
                    if (n === r) return;
                    if (n && !1 === r) {
                        if (!0 === this.exit) {
                            let {
                                initial: t
                            } = this.node.getProps();
                            if (t && !Array.isArray(t)) {
                                let {
                                    transition: e,
                                    transitionEnd: i,
                                    ...n
                                } = j(this.node, t) || {};
                                for (let t in n) {
                                    var o;
                                    null == (o = this.node.getValue(t)) || o.jump(n[t])
                                }
                            }
                            this.node.blockInitialAnimation = !1, i.reset(), i.animateChanges()
                        } else i.setActive("exit", !1);
                        this.exit = void 0;
                        return
                    }
                    let a = this.exit = i.setActive("exit", !n);
                    s && !n && a.then(() => {
                        this.exit === a && (this.exit = !0, s(this.id))
                    })
                }
                mount() {
                    let {
                        register: t,
                        onExitComplete: e
                    } = this.node.presenceContext || {};
                    e && e(this.id), t && (this.unmount = t(this.id))
                }
                unmount() {}
                constructor() {
                    super(...arguments), this.id = eq++
                }
            }
        }
    }], 527145);
    var eK = t.i(472722);

    function e_(t) {
        return [t("x"), t("y")]
    }
    t.s(["f", 0, e_], 317597);
    var eZ = t.i(892012),
        eJ = t.i(152786);

    function eG(t, e, i) {
        let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
            passive: !0
        };
        return t.addEventListener(e, i, n), () => t.removeEventListener(e, i, n)
    }
    t.s(["f", 0, eG], 927020);
    let eQ = {
        x: !1,
        y: !1
    };
    t.s(["E", 0, function() {
        return eQ.x || eQ.y
    }, "x", 0, eQ], 750014);
    var e0 = t.i(627808);

    function e1(t) {
        return t.max - t.min
    }

    function e2(t, e, i) {
        let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5;
        t.origin = n, t.originPoint = (0, ts.f)(e.min, e.max, t.origin), t.scale = e1(i) / e1(e), t.translate = (0, ts.f)(i.min, i.max, t.origin) - t.originPoint, (t.scale >= .9999 && t.scale <= 1.0001 || isNaN(t.scale)) && (t.scale = 1), (t.translate >= -.01 && t.translate <= .01 || isNaN(t.translate)) && (t.translate = 0)
    }

    function e5(t, e, i) {
        let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        t.min = (n ? (0, ts.f)(i.min, i.max, n) : i.min) + e.min, t.max = t.min + e1(e)
    }

    function e4(t, e, i) {
        let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            s = n ? (0, ts.f)(i.min, i.max, n) : i.min;
        t.min = e.min - s, t.max = t.min + e1(e)
    }
    t.s(["P", 0, function(t, e, i, n) {
        e2(t.x, e.x, i.x, n ? n.originX : void 0), e2(t.y, e.y, i.y, n ? n.originY : void 0)
    }, "M", 0, e1, "Z", 0, function(t, e, i, n) {
        e5(t.x, e.x, i.x, null == n ? void 0 : n.x), e5(t.y, e.y, i.y, null == n ? void 0 : n.y)
    }, "q", 0, function(t, e, i, n) {
        e4(t.x, e.x, i.x, null == n ? void 0 : n.x), e4(t.y, e.y, i.y, null == n ? void 0 : n.y)
    }, "$", 0, function(t, e, i) {
        return Math.abs(t - e) <= i
    }], 54797);
    var e3 = t.i(969065);
    let e6 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
        e7 = new Set(["INPUT", "SELECT", "TEXTAREA"]);

    function e9(t) {
        return e7.has(t.tagName) || !0 === t.isContentEditable
    }
    t.s(["Y", 0, function(t) {
        return e6.has(t.tagName) || !0 === t.isContentEditable
    }, "B", 0, e9], 691679);
    let e8 = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;

    function it(t) {
        return {
            point: {
                x: t.pageX,
                y: t.pageY
            }
        }
    }
    t.s(["f", 0, e8], 430469);
    let ie = t => e => e8(e) && t(e, it(e));

    function ii(t, e, i, n) {
        return eG(t, e, ie(i), n)
    }
    t.s(["X", 0, ie, "j", 0, it], 599727);
    let is = t => {
            let {
                current: e
            } = t;
            return e ? e.ownerDocument.defaultView : null
        },
        ir = (t, e) => Math.abs(t - e),
        io = new Set(["auto", "scroll"]);
    class ia {
        startScrollTracking(t) {
            let e = t.parentElement;
            for (; e;) {
                let t = getComputedStyle(e);
                (io.has(t.overflowX) || io.has(t.overflowY)) && this.scrollPositions.set(e, {
                    x: e.scrollLeft,
                    y: e.scrollTop
                }), e = e.parentElement
            }
            this.scrollPositions.set(window, {
                x: window.scrollX,
                y: window.scrollY
            }), window.addEventListener("scroll", this.onElementScroll, {
                capture: !0
            }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
                window.removeEventListener("scroll", this.onElementScroll, {
                    capture: !0
                }), window.removeEventListener("scroll", this.onWindowScroll)
            }
        }
        handleScroll(t) {
            let e = this.scrollPositions.get(t);
            if (!e) return;
            let i = t === window,
                n = i ? {
                    x: window.scrollX,
                    y: window.scrollY
                } : {
                    x: t.scrollLeft,
                    y: t.scrollTop
                },
                s = {
                    x: n.x - e.x,
                    y: n.y - e.y
                };
            (0 !== s.x || 0 !== s.y) && (i ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += s.x, this.lastMoveEventInfo.point.y += s.y) : this.history.length > 0 && (this.history[0].x -= s.x, this.history[0].y -= s.y), this.scrollPositions.set(t, n), ty.y.update(this.updatePoint, !0))
        }
        updateHandlers(t) {
            this.handlers = t
        }
        end() {
            this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), (0, ty.Y)(this.updatePoint)
        }
        constructor(t, e, {
            transformPagePoint: i,
            contextWindow: n = window,
            dragSnapToOrigin: s = !1,
            distanceThreshold: r = 3,
            element: o
        } = {}) {
            if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = new Map, this.removeScrollListeners = null, this.onElementScroll = t => {
                    this.handleScroll(t.target)
                }, this.onWindowScroll = () => {
                    this.handleScroll(window)
                }, this.updatePoint = () => {
                    var t, e;
                    if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                    this.hasPendingMove = !1, this.lastRawMoveEventInfo && (this.lastMoveEventInfo = il(this.lastRawMoveEventInfo, this.transformPagePoint));
                    let i = iu(this.lastMoveEventInfo, this.history),
                        n = null !== this.startEvent,
                        s = (t = i.offset, e = {
                            x: 0,
                            y: 0
                        }, Math.sqrt(ir(t.x, e.x) ** 2 + ir(t.y, e.y) ** 2) >= this.distanceThreshold);
                    if (!n && !s) return;
                    let {
                        point: r
                    } = i;
                    this.history.push({ ...r,
                        timestamp: H.f.now()
                    });
                    let {
                        onStart: o,
                        onMove: a
                    } = this.handlers;
                    n || (o && o(this.lastMoveEvent, i), this.startEvent = this.lastMoveEvent), a && a(this.lastMoveEvent, i)
                }, this.handlePointerMove = (t, e) => {
                    this.lastMoveEvent = t, this.lastRawMoveEventInfo = e, this.lastMoveEventInfo = il(e, this.transformPagePoint), this.hasPendingMove = !0, ty.y.update(this.updatePoint, !0)
                }, this.handlePointerUp = (t, e) => {
                    this.hasPendingMove && this.updatePoint(), this.end();
                    let {
                        onEnd: i,
                        onSessionEnd: n,
                        resumeAnimation: s
                    } = this.handlers;
                    if ((this.dragSnapToOrigin || !this.startEvent) && s && s(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                    let r = iu("pointercancel" === t.type ? this.lastMoveEventInfo : il(e, this.transformPagePoint), this.history);
                    this.startEvent && i && i(t, r), n && n(t, r)
                }, !e8(t)) return;
            this.dragSnapToOrigin = s, this.handlers = e, this.transformPagePoint = i, this.distanceThreshold = r, this.contextWindow = n || window;
            let a = il(it(t), this.transformPagePoint),
                {
                    point: l
                } = a,
                {
                    timestamp: h
                } = tg.f;
            this.history = [{ ...l,
                timestamp: h
            }];
            let {
                onSessionStart: u
            } = e;
            u && u(t, iu(a, this.history));
            let d = {
                passive: !0,
                capture: !0
            };
            this.removeListeners = X(ii(this.contextWindow, "pointermove", this.handlePointerMove, d), ii(this.contextWindow, "pointerup", this.handlePointerUp, d), ii(this.contextWindow, "pointercancel", this.handlePointerUp, d)), o && this.startScrollTracking(o)
        }
    }

    function il(t, e) {
        return e ? {
            point: e(t.point)
        } : t
    }

    function ih(t, e) {
        return {
            x: t.x - e.x,
            y: t.y - e.y
        }
    }

    function iu(t, e) {
        let {
            point: i
        } = t;
        return {
            point: i,
            delta: ih(i, id(e)),
            offset: ih(i, e[0]),
            velocity: function(t) {
                if (t.length < 2) return {
                    x: 0,
                    y: 0
                };
                let e = t.length - 1,
                    i = null,
                    n = id(t);
                for (; e >= 0 && (i = t[e], !(n.timestamp - i.timestamp > (0, z.Z)(.1)));) e--;
                if (!i) return {
                    x: 0,
                    y: 0
                };
                i === t[0] && t.length > 2 && n.timestamp - i.timestamp > 2 * (0, z.Z)(.1) && (i = t[1]);
                let s = (0, z.q)(n.timestamp - i.timestamp);
                if (0 === s) return {
                    x: 0,
                    y: 0
                };
                let r = {
                    x: (n.x - i.x) / s,
                    y: (n.y - i.y) / s
                };
                return 1 / 0 === r.x && (r.x = 0), 1 / 0 === r.y && (r.y = 0), r
            }(e)
        }
    }

    function id(t) {
        return t[t.length - 1]
    }

    function ic(t, e, i) {
        return {
            min: void 0 !== e ? t.min + e : void 0,
            max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
        }
    }

    function ip(t, e) {
        let i = e.min - t.min,
            n = e.max - t.max;
        return e.max - e.min < t.max - t.min && ([i, n] = [n, i]), {
            min: i,
            max: n
        }
    }

    function im(t, e, i) {
        return {
            min: iv(t, e),
            max: iv(t, i)
        }
    }

    function iv(t, e) {
        return "number" == typeof t ? t : t[e] || 0
    }
    let ig = new WeakMap;
    class iy {
        start(t) {
            let {
                snapToCursor: e = !1,
                distanceThreshold: i
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                presenceContext: n
            } = this.visualElement;
            if (n && !1 === n.isPresent) return;
            let s = t => {
                    e && this.snapToCursor(t), this.stopAnimation()
                },
                r = (t, e) => {
                    let {
                        drag: i,
                        dragPropagation: n,
                        onDragStart: s
                    } = this.getProps();
                    if (i && !n && (this.openDragLock && this.openDragLock(), this.openDragLock = function(t) {
                            if ("x" === t || "y" === t)
                                if (eQ[t]) return null;
                                else return eQ[t] = !0, () => {
                                    eQ[t] = !1
                                };
                            return eQ.x || eQ.y ? null : (eQ.x = eQ.y = !0, () => {
                                eQ.x = eQ.y = !1
                            })
                        }(i), !this.openDragLock)) return;
                    this.latestPointerEvent = t, this.latestPanInfo = e, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), e_(t => {
                        let e = this.getAxisMotionValue(t).get() || 0;
                        if (e0.U.test(e)) {
                            let {
                                projection: i
                            } = this.visualElement;
                            if (i && i.layout) {
                                let n = i.layout.layoutBox[t];
                                n && (e = e1(n) * (parseFloat(e) / 100))
                            }
                        }
                        this.originPoint[t] = e
                    }), s && ty.y.update(() => s(t, e), !1, !0), W(this.visualElement, "transform");
                    let {
                        animationState: r
                    } = this.visualElement;
                    r && r.setActive("whileDrag", !0)
                },
                o = (t, e) => {
                    this.latestPointerEvent = t, this.latestPanInfo = e;
                    let {
                        dragPropagation: i,
                        dragDirectionLock: n,
                        onDirectionLock: s,
                        onDrag: r
                    } = this.getProps();
                    if (!i && !this.openDragLock) return;
                    let {
                        offset: o
                    } = e;
                    if (n && null === this.currentDirection) {
                        this.currentDirection = function(t) {
                            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
                                i = null;
                            return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"), i
                        }(o), null !== this.currentDirection && s && s(this.currentDirection);
                        return
                    }
                    this.updateAxis("x", e.point, o), this.updateAxis("y", e.point, o), this.visualElement.render(), r && ty.y.update(() => r(t, e), !1, !0)
                },
                a = (t, e) => {
                    this.latestPointerEvent = t, this.latestPanInfo = e, this.stop(t, e), this.latestPointerEvent = null, this.latestPanInfo = null
                },
                l = () => {
                    let {
                        dragSnapToOrigin: t
                    } = this.getProps();
                    (t || this.constraints) && this.startAnimation({
                        x: 0,
                        y: 0
                    })
                },
                {
                    dragSnapToOrigin: h
                } = this.getProps();
            this.panSession = new ia(t, {
                onSessionStart: s,
                onStart: r,
                onMove: o,
                onSessionEnd: a,
                resumeAnimation: l
            }, {
                transformPagePoint: this.visualElement.getTransformPagePoint(),
                dragSnapToOrigin: h,
                distanceThreshold: i,
                contextWindow: is(this.visualElement),
                element: this.visualElement.current
            })
        }
        stop(t, e) {
            let i = t || this.latestPointerEvent,
                n = e || this.latestPanInfo,
                s = this.isDragging;
            if (this.cancel(), !s || !n || !i) return;
            let {
                velocity: r
            } = n;
            this.startAnimation(r);
            let {
                onDragEnd: o
            } = this.getProps();
            o && ty.y.postRender(() => o(i, n))
        }
        cancel() {
            this.isDragging = !1;
            let {
                projection: t,
                animationState: e
            } = this.visualElement;
            t && (t.isAnimationBlocked = !1), this.endPanSession();
            let {
                dragPropagation: i
            } = this.getProps();
            !i && this.openDragLock && (this.openDragLock(), this.openDragLock = null), e && e.setActive("whileDrag", !1)
        }
        endPanSession() {
            this.panSession && this.panSession.end(), this.panSession = void 0
        }
        updateAxis(t, e, i) {
            let {
                drag: n
            } = this.getProps();
            if (!i || !iw(t, n, this.currentDirection)) return;
            let s = this.getAxisMotionValue(t),
                r = this.originPoint[t] + i[t];
            this.constraints && this.constraints[t] && (r = function(t, e, i) {
                let {
                    min: n,
                    max: s
                } = e;
                return void 0 !== n && t < n ? t = i ? (0, ts.f)(n, t, i.min) : Math.max(t, n) : void 0 !== s && t > s && (t = i ? (0, ts.f)(s, t, i.max) : Math.min(t, s)), t
            }(r, this.constraints[t], this.elastic[t])), s.set(r)
        }
        resolveConstraints() {
            var t;
            let {
                dragConstraints: e,
                dragElastic: i
            } = this.getProps(), n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null == (t = this.visualElement.projection) ? void 0 : t.layout, s = this.constraints;
            e && C(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && n ? this.constraints = function(t, e) {
                let {
                    top: i,
                    left: n,
                    bottom: s,
                    right: r
                } = e;
                return {
                    x: ic(t.x, n, r),
                    y: ic(t.y, i, s)
                }
            }(n.layoutBox, e) : this.constraints = !1, this.elastic = function() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .35;
                return !1 === t ? t = 0 : !0 === t && (t = .35), {
                    x: im(t, "left", "right"),
                    y: im(t, "top", "bottom")
                }
            }(i), s !== this.constraints && !C(e) && n && this.constraints && !this.hasMutatedConstraints && e_(t => {
                var e, i;
                let s;
                !1 !== this.constraints && this.getAxisMotionValue(t) && (this.constraints[t] = (e = n.layoutBox[t], i = this.constraints[t], s = {}, void 0 !== i.min && (s.min = i.min - e.min), void 0 !== i.max && (s.max = i.max - e.min), s))
            })
        }
        resolveRefConstraints() {
            var t;
            let {
                dragConstraints: e,
                onMeasureDragConstraints: i
            } = this.getProps();
            if (!e || !C(e)) return !1;
            let n = e.current;
            (0, _.k)(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
            let {
                projection: s
            } = this.visualElement;
            if (!s || !s.layout) return !1;
            s.root && (s.root.scroll = void 0, s.root.updateScroll());
            let r = (0, eZ.r)(n, s.root, this.visualElement.getTransformPagePoint()),
                o = (t = s.layout.layoutBox, {
                    x: ip(t.x, r.x),
                    y: ip(t.y, r.y)
                });
            if (i) {
                let t = i((0, eJ.I)(o));
                this.hasMutatedConstraints = !!t, t && (o = (0, eJ.X)(t))
            }
            return o
        }
        startAnimation(t) {
            let {
                drag: e,
                dragMomentum: i,
                dragElastic: n,
                dragTransition: s,
                dragSnapToOrigin: r,
                onDragTransitionEnd: o
            } = this.getProps(), a = this.constraints || {};
            return Promise.all(e_(o => {
                if (!iw(o, e, this.currentDirection)) return;
                let l = a && a[o] || {};
                (!0 === r || r === o) && (l = {
                    min: 0,
                    max: 0
                });
                let h = {
                    type: "inertia",
                    velocity: i ? t[o] : 0,
                    bounceStiffness: n ? 200 : 1e6,
                    bounceDamping: n ? 40 : 1e7,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...s,
                    ...l
                };
                return this.startAxisValueAnimation(o, h)
            })).then(o)
        }
        startAxisValueAnimation(t, e) {
            let i = this.getAxisMotionValue(t);
            return W(this.visualElement, t), i.start(eI(t, i, 0, e, this.visualElement, !1))
        }
        stopAnimation() {
            e_(t => this.getAxisMotionValue(t).stop())
        }
        getAxisMotionValue(t) {
            let e = `_drag${t.toUpperCase()}`;
            return this.visualElement.getProps()[e] || this.visualElement.getValue(t, this.visualElement.latestValues[t] ? ? 0)
        }
        snapToCursor(t) {
            var e;
            let {
                clientX: i,
                clientY: n
            } = t, {
                drag: s
            } = this.getProps(), r = {
                x: i,
                y: n
            }, o = (null == (e = this.visualElement.getTransformPagePoint()) ? void 0 : e(r)) || r, a = this.visualElement.measureViewportBox();
            e_(t => {
                if (!iw(t, s, this.currentDirection)) return;
                let e = this.getAxisMotionValue(t),
                    {
                        min: i,
                        max: n
                    } = a[t];
                e.set((e.get() || 0) + o[t] - (0, ts.f)(i, n, .5))
            })
        }
        scalePositionWithinConstraints() {
            if (!this.visualElement.current) return;
            let {
                drag: t,
                dragConstraints: e
            } = this.getProps(), {
                projection: i
            } = this.visualElement;
            if (!C(e) || !i || !this.constraints) return;
            this.stopAnimation();
            let n = this.constraints,
                s = {
                    x: 0,
                    y: 0
                };
            e_(t => {
                var e, i;
                let r, o, a, l = this.getAxisMotionValue(t).get();
                s[t] = (e = {
                    min: l,
                    max: l
                }, i = n[t], r = .5, o = e1(e), (a = e1(i)) > o ? r = (0, t0.f)(i.min, i.max - o, e.min) : o > a && (r = (0, t0.f)(e.min, e.max - a, i.min)), (0, q.f)(0, 1, r))
            });
            let {
                transformTemplate: r
            } = this.visualElement.getProps();
            this.visualElement.current.style.transform = r ? r({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.constraints = !1, this.resolveConstraints(), e_(e => {
                let i = this.getAxisMotionValue(e);
                if (!iw(e, t, null) || !i.get()) return;
                let {
                    min: n,
                    max: r
                } = this.constraints[e];
                i.set((0, ts.f)(n, r, s[e]))
            }), this.visualElement.render()
        }
        addListeners() {
            let t;
            if (!this.visualElement.current) return;
            ig.set(this.visualElement, this);
            let e = this.visualElement.current,
                i = ii(e, "pointerdown", t => {
                    let {
                        drag: i,
                        dragListener: n = !0
                    } = this.getProps(), s = t.target, r = s !== e && e9(s);
                    i && n && !r && this.start(t)
                }),
                n = () => {
                    var i, n, s;
                    let r, o, {
                        dragConstraints: a
                    } = this.getProps();
                    C(a) && a.current && (this.constraints = this.resolveRefConstraints(), t || (i = e, n = a.current, s = () => this.scalePositionWithinConstraints(), r = (0, e3.f)(i, ix(s)), o = (0, e3.f)(n, ix(s)), t = () => {
                        r(), o()
                    }))
                },
                {
                    projection: s
                } = this.visualElement,
                r = s.addEventListener("measure", n);
            s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), ty.y.read(n);
            let o = eG(window, "resize", () => this.scalePositionWithinConstraints()),
                a = s.addEventListener("didUpdate", t => {
                    let {
                        delta: e,
                        hasLayoutChanged: i
                    } = t;
                    this.isDragging && i && (e_(t => {
                        let i = this.getAxisMotionValue(t);
                        i && (this.originPoint[t] += e[t].translate, i.set(i.get() + e[t].translate))
                    }), this.visualElement.render())
                });
            return () => {
                o(), i(), r(), a && a(), t && t()
            }
        }
        getProps() {
            let t = this.visualElement.getProps(),
                {
                    drag: e = !1,
                    dragDirectionLock: i = !1,
                    dragPropagation: n = !1,
                    dragConstraints: s = !1,
                    dragElastic: r = .35,
                    dragMomentum: o = !0
                } = t;
            return { ...t,
                drag: e,
                dragDirectionLock: i,
                dragPropagation: n,
                dragConstraints: s,
                dragElastic: r,
                dragMomentum: o
            }
        }
        constructor(t) {
            this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                x: 0,
                y: 0
            }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = (0, eK.J)(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t
        }
    }

    function ix(t) {
        let e = !0;
        return () => {
            if (e) {
                e = !1;
                return
            }
            t()
        }
    }

    function iw(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t)
    }
    t.s(["f", 0, class extends L {
        mount() {
            let {
                dragControls: t
            } = this.node.getProps();
            t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || tB.f
        }
        update() {
            let {
                dragControls: t
            } = this.node.getProps(), {
                dragControls: e
            } = this.node.prevProps || {};
            t !== e && (this.removeGroupControls(), t && (this.removeGroupControls = t.subscribe(this.controls)))
        }
        unmount() {
            this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession()
        }
        constructor(t) {
            super(t), this.removeGroupControls = tB.f, this.removeListeners = tB.f, this.controls = new iy(t)
        }
    }], 30301);
    let iT = t => (e, i) => {
        t && ty.y.update(() => t(e, i), !1, !0)
    };
    t.s(["f", 0, class extends L {
        onPointerDown(t) {
            this.session = new ia(t, this.createPanHandlers(), {
                transformPagePoint: this.node.getTransformPagePoint(),
                contextWindow: is(this.node)
            })
        }
        createPanHandlers() {
            let {
                onPanSessionStart: t,
                onPanStart: e,
                onPan: i,
                onPanEnd: n
            } = this.node.getProps();
            return {
                onSessionStart: iT(t),
                onStart: iT(e),
                onMove: iT(i),
                onEnd: (t, e) => {
                    delete this.session, n && ty.y.postRender(() => n(t, e))
                }
            }
        }
        mount() {
            this.removePointerDownListener = ii(this.node.current, "pointerdown", t => this.onPointerDown(t))
        }
        update() {
            this.session && this.session.updateHandlers(this.createPanHandlers())
        }
        unmount() {
            this.removePointerDownListener(), this.session && this.session.end()
        }
        constructor() {
            super(...arguments), this.removePointerDownListener = tB.f
        }
    }], 786653), t.s(["f", 0, {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
    }], 416142)
}, 135416, 149128, 552396, t => {
    "use strict";
    var e = t.i(981679),
        i = t.i(580772),
        n = t.i(527145),
        s = t.i(30301),
        r = t.i(786653),
        o = t.i(729176),
        a = t.i(416142),
        l = t.i(928058),
        h = t.i(35644),
        u = t.i(244835),
        d = t.i(500044),
        c = t.i(800547),
        f = t.i(681250);
    let p = !1;
    class m extends u.Component {
        componentDidMount() {
            let {
                visualElement: t,
                layoutGroup: e,
                switchLayoutGroup: i,
                layoutId: n
            } = this.props, {
                projection: s
            } = t;
            s && (e.group && e.group.add(s), i && i.register && n && i.register(s), p && s.root.didUpdate(), s.addEventListener("animationComplete", () => {
                this.safeToRemove()
            }), s.setOptions({ ...s.options,
                layoutDependency: this.props.layoutDependency,
                onExitComplete: () => this.safeToRemove()
            })), a.f.hasEverUpdated = !0
        }
        getSnapshotBeforeUpdate(t) {
            let {
                layoutDependency: e,
                visualElement: i,
                drag: n,
                isPresent: s
            } = this.props, {
                projection: r
            } = i;
            return r && (r.isPresent = s, t.layoutDependency !== e && r.setOptions({ ...r.options,
                layoutDependency: e
            }), p = !0, n || t.layoutDependency !== e || void 0 === e || t.isPresent !== s ? r.willUpdate() : this.safeToRemove(), t.isPresent !== s && (s ? r.promote() : r.relegate() || l.y.postRender(() => {
                let t = r.getStack();
                t && t.members.length || this.safeToRemove()
            }))), null
        }
        componentDidUpdate() {
            let {
                visualElement: t,
                layoutAnchor: e
            } = this.props, {
                projection: i
            } = t;
            i && (i.options.layoutAnchor = e, i.root.didUpdate(), h.t.postRender(() => {
                !i.currentAnimation && i.isLead() && this.safeToRemove()
            }))
        }
        componentWillUnmount() {
            let {
                visualElement: t,
                layoutGroup: e,
                switchLayoutGroup: i
            } = this.props, {
                projection: n
            } = t;
            p = !0, n && (n.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(n), i && i.deregister && i.deregister(n))
        }
        safeToRemove() {
            let {
                safeToRemove: t
            } = this.props;
            t && t()
        }
        render() {
            return null
        }
    }

    function v(t) {
        let [e, i] = (0, d.f)(), n = (0, u.useContext)(c.f);
        return (0, o.jsx)(m, { ...t,
            layoutGroup: n,
            switchLayoutGroup: (0, u.useContext)(f.f),
            isPresent: e,
            safeToRemove: i
        })
    }
    var g = t.i(181730),
        y = t.i(754055),
        x = t.i(726505),
        w = t.i(713884),
        T = t.i(980455),
        b = t.i(413380);

    function S(t, e, i) {
        let n = (0, b.f)(t) ? t : (0, T.o)(t);
        return n.start((0, w.f)("", n, e, i)), n.animation
    }
    t.s(["f", 0, S], 149128);
    var P = t.i(431509),
        A = t.i(669161),
        M = t.i(727480),
        E = t.i(691285),
        V = t.i(625543);
    t.i(671521);
    var k = t.i(729002),
        C = t.i(415924),
        D = t.i(287564),
        R = t.i(627808),
        L = t.i(271386),
        j = t.i(842537);
    let B = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
        F = t => "number" == typeof t ? t : parseFloat(t);
    t.s(["f", 0, F], 552396);
    let I = B.length,
        O = t => "number" == typeof t || R.L.test(t);

    function U(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius
    }
    let $ = W(0, .5, j.o),
        N = W(.5, .95, x.f);

    function W(t, e, i) {
        return n => n < t ? 0 : n > e ? 1 : i((0, L.f)(t, e, n))
    }
    var Y = t.i(551830);

    function z(t, e) {
        t.min = e.min, t.max = e.max
    }

    function H(t, e) {
        z(t.x, e.x), z(t.y, e.y)
    }

    function X(t, e) {
        t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin
    }
    var q = t.i(161651),
        K = t.i(54797);

    function _(t, e, i, n, s) {
        return t -= e, t = (0, q._)(t, 1 / i, n), void 0 !== s && (t = (0, q._)(t, 1 / s, n)), t
    }

    function Z(t, e, i, n, s) {
        let [r, o, a] = i;
        ! function(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5,
                s = arguments.length > 4 ? arguments[4] : void 0,
                r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : t,
                o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : t;
            if (R.U.test(e) && (e = parseFloat(e), e = (0, C.f)(o.min, o.max, e / 100) - o.min), "number" != typeof e) return;
            let a = (0, C.f)(r.min, r.max, n);
            t === r && (a -= e), t.min = _(t.min, e, i, a, s), t.max = _(t.max, e, i, a, s)
        }(t, e[r], e[o], e[a], e.scale, n, s)
    }
    let J = ["x", "scaleX", "originX"],
        G = ["y", "scaleY", "originY"];

    function Q(t, e, i, n) {
        Z(t.x, e, J, i ? i.x : void 0, n ? n.x : void 0), Z(t.y, e, G, i ? i.y : void 0, n ? n.y : void 0)
    }
    var tt = t.i(472722);

    function te(t) {
        return 0 === t.translate && 1 === t.scale
    }

    function ti(t) {
        return te(t.x) && te(t.y)
    }

    function tn(t, e) {
        return t.min === e.min && t.max === e.max
    }

    function ts(t, e) {
        return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
    }

    function tr(t, e) {
        return ts(t.x, e.x) && ts(t.y, e.y)
    }

    function to(t) {
        return (0, K.M)(t.x) / (0, K.M)(t.y)
    }

    function ta(t, e) {
        return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
    }
    var tl = t.i(31611);
    class th {
        add(t) {
            (0, tl.I)(this.members, t);
            for (let e = this.members.length - 1; e >= 0; e--) {
                let i = this.members[e];
                if (i === t || i === this.lead || i === this.prevLead) continue;
                let n = i.instance;
                n && !1 !== n.isConnected || i.snapshot || ((0, tl.i)(this.members, i), i.unmount())
            }
            t.scheduleRender()
        }
        remove(t) {
            if ((0, tl.i)(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                let t = this.members[this.members.length - 1];
                t && this.promote(t)
            }
        }
        relegate(t) {
            for (let i = this.members.indexOf(t) - 1; i >= 0; i--) {
                var e;
                let t = this.members[i];
                if (!1 !== t.isPresent && (null == (e = t.instance) ? void 0 : e.isConnected) !== !1) return this.promote(t), !0
            }
            return !1
        }
        promote(t, e) {
            let i = this.lead;
            if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
                i.updateSnapshot(), t.scheduleRender();
                let {
                    layoutDependency: s
                } = i.options, {
                    layoutDependency: r
                } = t.options;
                if (void 0 === s || s !== r) {
                    var n;
                    t.resumeFrom = i, e && (i.preserveOpacity = !0), i.snapshot && (t.snapshot = i.snapshot, t.snapshot.latestValues = i.animationValues || i.latestValues), (null == (n = t.root) ? void 0 : n.isUpdating) && (t.isLayoutDirty = !0)
                }!1 === t.options.crossfade && i.hide()
            }
        }
        exitAnimationComplete() {
            this.members.forEach(t => {
                var e, i, n, s, r;
                null == (e = (i = t.options).onExitComplete) || e.call(i), null == (s = t.resumingFrom) || null == (n = (r = s.options).onExitComplete) || n.call(r)
            })
        }
        scheduleRender() {
            this.members.forEach(t => t.instance && t.scheduleRender(!1))
        }
        removeLeadSnapshot() {
            var t;
            (null == (t = this.lead) ? void 0 : t.snapshot) && (this.lead.snapshot = void 0)
        }
        constructor() {
            this.members = []
        }
    }

    function tu(t, e) {
        return e.max === e.min ? 0 : t / (e.max - e.min) * 100
    }
    let td = {
        correct: (t, e) => {
            if (!e.target) return t;
            if ("string" == typeof t)
                if (!R.L.test(t)) return t;
                else t = parseFloat(t);
            let i = tu(t, e.target.x),
                n = tu(t, e.target.y);
            return `${i}% ${n}%`
        }
    };
    var tc = t.i(594501);
    let tf = {
        borderRadius: { ...td,
            applyTo: [...B]
        },
        borderTopLeftRadius: td,
        borderTopRightRadius: td,
        borderBottomLeftRadius: td,
        borderBottomRightRadius: td,
        boxShadow: {
            correct: (t, e) => {
                let {
                    treeScale: i,
                    projectionDelta: n
                } = e, s = tc.u.parse(t);
                if (s.length > 5) return t;
                let r = tc.u.createTransformer(t),
                    o = +("number" != typeof s[0]),
                    a = n.x.scale * i.x,
                    l = n.y.scale * i.y;
                s[0 + o] /= a, s[1 + o] /= l;
                let h = (0, C.f)(a, l, .5);
                return "number" == typeof s[2 + o] && (s[2 + o] /= h), "number" == typeof s[3 + o] && (s[3 + o] /= h), r(s)
            }
        }
    };
    var tp = t.i(317597);
    let tm = (t, e) => t.depth - e.depth;
    class tv {
        add(t) {
            (0, tl.I)(this.children, t), this.isDirty = !0
        }
        remove(t) {
            (0, tl.i)(this.children, t), this.isDirty = !0
        }
        forEach(t) {
            this.isDirty && this.children.sort(tm), this.isDirty = !1, this.children.forEach(t)
        }
        constructor() {
            this.children = [], this.isDirty = !1
        }
    }
    var tg = t.i(158943),
        ty = t.i(548092);
    Object.assign(V.f, { ...tf,
        ...V.f
    });
    let tx = ["", "X", "Y", "Z"],
        tw = 0;

    function tT(t, e, i, n) {
        let {
            latestValues: s
        } = e;
        s[t] && (i[t] = s[t], e.setStaticValue(t, 0), n && (n[t] = 0))
    }
    let tb = t => {
        var e;
        let {
            instance: i
        } = t;
        return i && (null == (e = Y.f.get(i)) ? void 0 : e.demote())
    };

    function tS(t) {
        let {
            attachResizeListener: e,
            defaultParent: i,
            measureScroll: n,
            checkIsScrollRoot: s,
            resetTransform: r
        } = t;
        return class {
            addEventListener(t, e) {
                return this.eventHandlers.has(t) || this.eventHandlers.set(t, new g.f), this.eventHandlers.get(t).add(e)
            }
            notifyListeners(t) {
                for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
                let s = this.eventHandlers.get(t);
                s && s.notify(...i)
            }
            hasListeners(t) {
                return this.eventHandlers.has(t)
            }
            mount(t) {
                if (this.instance) return;
                this.isSVG = (0, k.f)(t) && (!(0, k.f)(t) || "svg" !== t.tagName), this.instance = t;
                let {
                    layoutId: i,
                    layout: n,
                    visualElement: s
                } = this.options;
                if (s && !s.current && s.mount(t), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (n || i) && (this.isLayoutDirty = !0), e) {
                    let i, n = 0,
                        s = () => this.root.updateBlockedByResize = !1;
                    l.y.read(() => {
                        n = window.innerWidth
                    }), e(t, () => {
                        let t = window.innerWidth;
                        if (t !== n) {
                            let e, r;
                            n = t, this.root.updateBlockedByResize = !0, i && i(), e = E.f.now(), r = t => {
                                let {
                                    timestamp: i
                                } = t, n = i - e;
                                n >= 250 && ((0, l.Y)(r), s())
                            }, l.y.setup(r, !0), i = () => (0, l.Y)(r), a.f.hasAnimatedSinceResize && (a.f.hasAnimatedSinceResize = !1, this.nodes.forEach(tB))
                        }
                    })
                }
                i && this.root.registerSharedNode(i, this), !1 !== this.options.animate && s && (i || n) && this.addEventListener("didUpdate", t => {
                    let {
                        delta: e,
                        hasLayoutChanged: i,
                        hasRelativeLayoutChanged: n,
                        layout: r
                    } = t;
                    if (this.isAnimationBlocked) {
                        this.target = void 0, this.relativeTarget = void 0;
                        return
                    }
                    let o = this.options.transition || s.getDefaultTransition() || tY,
                        {
                            onLayoutAnimationStart: a,
                            onLayoutAnimationComplete: l
                        } = s.getProps(),
                        h = !this.targetLayout || !tr(this.targetLayout, r),
                        u = !i && n;
                    if (this.options.layoutRoot || this.resumeFrom || u || i && (h || !this.currentAnimation)) {
                        this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
                        let t = { ...(0, M.f)(o, "layout"),
                            onPlay: a,
                            onComplete: l
                        };
                        (s.shouldReduceMotion || this.options.layoutRoot) && (t.delay = 0, t.type = !1), this.startAnimation(t), this.setAnimationOrigin(e, u, t.path)
                    } else i || tB(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                    this.targetLayout = r
                })
            }
            unmount() {
                this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                let t = this.getStack();
                t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), (0, l.Y)(this.updateProjection)
            }
            blockUpdate() {
                this.updateManuallyBlocked = !0
            }
            unblockUpdate() {
                this.updateManuallyBlocked = !1
            }
            isUpdateBlocked() {
                return this.updateManuallyBlocked || this.updateBlockedByResize
            }
            startUpdate() {
                !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(tO), this.animationId++)
            }
            getTransformTemplate() {
                let {
                    visualElement: t
                } = this.options;
                return t && t.getProps().transformTemplate
            }
            willUpdate() {
                let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                    this.options.onExitComplete && this.options.onExitComplete();
                    return
                }
                if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && function t(e) {
                        if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
                        let {
                            visualElement: i
                        } = e.options;
                        if (!i) return;
                        let n = (0, A.f)(i);
                        if (window.MotionHasOptimisedAnimation(n, "transform")) {
                            let {
                                layout: t,
                                layoutId: i
                            } = e.options;
                            window.MotionCancelOptimisedAnimation(n, "transform", l.y, !(t || i))
                        }
                        let {
                            parent: s
                        } = e;
                        s && !s.hasCheckedOptimisedAppear && t(s)
                    }(this), this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                tb(this), this.isLayoutDirty = !0;
                for (let t = 0; t < this.path.length; t++) {
                    let e = this.path[t];
                    e.shouldResetTransform = !0, tb(e), ("string" == typeof e.latestValues.x || "string" == typeof e.latestValues.y) && (e.isLayoutDirty = !0), e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1), e.isAnimationBlocked && (e.dragSnapshot || (e.dragSnapshot = e.measure()), this.dragAncestor = e)
                }
                let {
                    layoutId: e,
                    layout: i
                } = this.options;
                if (void 0 === e && !i) return;
                let n = this.getTransformTemplate();
                this.prevTransformTemplateValue = n ? n(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
            }
            update() {
                if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                    let t = this.updateBlockedByResize;
                    this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), t && this.nodes.forEach(tC), this.nodes.forEach(tk);
                    return
                }
                if (this.animationId <= this.animationCommitId) return void this.nodes.forEach(tD);
                this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(tR), this.nodes.forEach(tL), this.nodes.forEach(tj), this.nodes.forEach(tP), this.nodes.forEach(tA)) : this.nodes.forEach(tD), this.clearAllSnapshots();
                let t = E.f.now();
                ty.f.delta = (0, y.f)(0, 1e3 / 60, t - ty.f.timestamp), ty.f.timestamp = t, ty.f.isProcessing = !0, l.q.update.process(ty.f), l.q.preRender.process(ty.f), l.q.render.process(ty.f), ty.f.isProcessing = !1
            }
            didUpdate() {
                this.updateScheduled || (this.updateScheduled = !0, h.t.read(this.scheduleUpdate))
            }
            clearAllSnapshots() {
                this.nodes.forEach(tV), this.sharedNodes.forEach(tU)
            }
            scheduleUpdateProjection() {
                this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, l.y.preRender(this.updateProjection, !1, !0))
            }
            scheduleCheckAfterUnmount() {
                l.y.postRender(() => {
                    this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                })
            }
            updateSnapshot() {
                !this.snapshot && this.instance && (this.snapshot = this.measure(), !this.snapshot || (0, K.M)(this.snapshot.measuredBox.x) || (0, K.M)(this.snapshot.measuredBox.y) || (this.snapshot = void 0))
            }
            updateLayout() {
                if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                if (this.resumeFrom && !this.resumeFrom.instance)
                    for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
                let t = this.layout;
                this.layout = this.measure(!1), this.layoutCorrected || (this.layoutCorrected = (0, tt.J)()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                let {
                    visualElement: e
                } = this.options;
                e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
            }
            updateScroll() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "measure",
                    e = !!(this.options.layoutScroll && this.instance);
                if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e && this.instance) {
                    let e = s(this.instance);
                    this.scroll = {
                        animationId: this.root.animationId,
                        phase: t,
                        isRoot: e,
                        offset: n(this.instance),
                        wasRoot: this.scroll ? this.scroll.isRoot : e
                    }
                }
            }
            resetTransform() {
                if (!r) return;
                let t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout;
                t && tb(this);
                let e = this.projectionDelta && !ti(this.projectionDelta),
                    i = this.getTransformTemplate(),
                    n = i ? i(this.latestValues, "") : void 0,
                    s = n !== this.prevTransformTemplateValue;
                t && this.instance && (e || (0, tg.u)(this.latestValues) || s) && (r(this.instance, n), this.shouldResetTransform = !1, this.scheduleRender())
            }
            measure() {
                var t;
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    i = this.measurePageBox(),
                    n = this.removeElementScroll(i);
                return e && (n = this.removeTransform(n)), tX((t = n).x), tX(t.y), {
                    animationId: this.root.animationId,
                    measuredBox: i,
                    layoutBox: n,
                    latestValues: {},
                    source: this.id
                }
            }
            measurePageBox() {
                var t;
                let {
                    visualElement: e
                } = this.options;
                if (!e) return (0, tt.J)();
                let i = e.measureViewportBox();
                if (!((null == (t = this.scroll) ? void 0 : t.wasRoot) || this.path.some(tK))) {
                    let {
                        scroll: t
                    } = this.root;
                    t && ((0, q.i)(i.x, t.offset.x), (0, q.i)(i.y, t.offset.y))
                }
                return i
            }
            removeElementScroll(t) {
                var e;
                let i = (0, tt.J)();
                if (H(i, t), null == (e = this.scroll) ? void 0 : e.wasRoot) return i;
                for (let e = 0; e < this.path.length; e++) {
                    let n = this.path[e],
                        {
                            scroll: s,
                            options: r
                        } = n;
                    n !== this.root && s && r.layoutScroll && (s.wasRoot && H(i, t), (0, q.i)(i.x, s.offset.x), (0, q.i)(i.y, s.offset.y))
                }
                return i
            }
            applyTransform(t) {
                var e, i;
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    s = arguments.length > 2 ? arguments[2] : void 0,
                    r = s || (0, tt.J)();
                H(r, t);
                for (let t = 0; t < this.path.length; t++) {
                    let i = this.path[t];
                    !n && i.options.layoutScroll && i.scroll && i !== i.root && ((0, q.i)(r.x, -i.scroll.offset.x), (0, q.i)(r.y, -i.scroll.offset.y)), (0, tg.u)(i.latestValues) && (0, q.k)(r, i.latestValues, null == (e = i.layout) ? void 0 : e.layoutBox)
                }
                return (0, tg.u)(this.latestValues) && (0, q.k)(r, this.latestValues, null == (i = this.layout) ? void 0 : i.layoutBox), r
            }
            removeTransform(t) {
                let e = (0, tt.J)();
                H(e, t);
                for (let t = 0; t < this.path.length; t++) {
                    var i;
                    let n, s = this.path[t];
                    (0, tg.u)(s.latestValues) && (s.instance && ((0, tg.N)(s.latestValues) && s.updateSnapshot(), H(n = (0, tt.J)(), s.measurePageBox())), Q(e, s.latestValues, null == (i = s.snapshot) ? void 0 : i.layoutBox, n))
                }
                return (0, tg.u)(this.latestValues) && Q(e, this.latestValues), e
            }
            setTargetDelta(t) {
                this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
            }
            setOptions(t) {
                this.options = { ...this.options,
                    ...t,
                    crossfade: void 0 === t.crossfade || t.crossfade
                }
            }
            clearMeasurements() {
                this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
            }
            forceRelativeParentToResolveTarget() {
                this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ty.f.timestamp && this.relativeParent.resolveTargetDelta(!0)
            }
            resolveTargetDelta() {
                var t;
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    i = this.getLead();
                this.isProjectionDirty || (this.isProjectionDirty = i.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = i.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = i.isSharedProjectionDirty);
                let n = !!this.resumingFrom || this !== i;
                if (!(e || n && this.isSharedProjectionDirty || this.isProjectionDirty || (null == (t = this.parent) ? void 0 : t.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
                let {
                    layout: s,
                    layoutId: r
                } = this.options;
                if (!this.layout || !(s || r)) return;
                this.resolvedRelativeTargetAt = ty.f.timestamp;
                let o = this.getClosestProjectingParent();
                this.targetDelta || this.relativeTarget || (!1 !== this.options.layoutAnchor && o && o.layout ? this.createRelativeTarget(o, this.layout.layoutBox, o.layout.layoutBox) : this.removeRelativeTarget()), (this.relativeTarget || this.targetDelta) && (this.target || (this.target = (0, tt.J)(), this.targetWithTransforms = (0, tt.J)()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), (0, K.Z)(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : H(this.target, this.layout.layoutBox), (0, q.z)(this.target, this.targetDelta)) : H(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, !1 !== this.options.layoutAnchor && o && !!o.resumingFrom == !!this.resumingFrom && !o.options.layoutScroll && o.target && 1 !== this.animationProgress ? this.createRelativeTarget(o, this.target, o.target) : this.relativeParent = this.relativeTarget = void 0))
            }
            getClosestProjectingParent() {
                if (!(!this.parent || (0, tg.N)(this.parent.latestValues) || (0, tg.k)(this.parent.latestValues)))
                    if (this.parent.isProjecting()) return this.parent;
                    else return this.parent.getClosestProjectingParent()
            }
            isProjecting() {
                return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
            }
            createRelativeTarget(t, e, i) {
                this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = (0, tt.J)(), this.relativeTargetOrigin = (0, tt.J)(), (0, K.q)(this.relativeTargetOrigin, e, i, this.options.layoutAnchor || void 0), H(this.relativeTarget, this.relativeTargetOrigin)
            }
            removeRelativeTarget() {
                this.relativeParent = this.relativeTarget = void 0
            }
            calcProjection() {
                var t;
                let e = this.getLead(),
                    i = !!this.resumingFrom || this !== e,
                    n = !0;
                if ((this.isProjectionDirty || (null == (t = this.parent) ? void 0 : t.isProjectionDirty)) && (n = !1), i && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === ty.f.timestamp && (n = !1), n) return;
                let {
                    layout: s,
                    layoutId: r
                } = this.options;
                if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(s || r)) return;
                H(this.layoutCorrected, this.layout.layoutBox);
                let o = this.treeScale.x,
                    a = this.treeScale.y;
                (0, q.w)(this.layoutCorrected, this.treeScale, this.path, i), e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox, e.targetWithTransforms = (0, tt.J)());
                let {
                    target: l
                } = e;
                if (!l) {
                    this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                    return
                }
                this.projectionDelta && this.prevProjectionDelta ? (X(this.prevProjectionDelta.x, this.projectionDelta.x), X(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(), (0, K.P)(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.treeScale.x === o && this.treeScale.y === a && ta(this.projectionDelta.x, this.prevProjectionDelta.x) && ta(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l))
            }
            hide() {
                this.isVisible = !1
            }
            show() {
                this.isVisible = !0
            }
            scheduleRender() {
                var t;
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                if (null == (t = this.options.visualElement) || t.scheduleRender(), e) {
                    let t = this.getStack();
                    t && t.scheduleRender()
                }
                this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
            }
            createProjectionDeltas() {
                this.prevProjectionDelta = (0, tt.$)(), this.projectionDelta = (0, tt.$)(), this.projectionDeltaWithTransform = (0, tt.$)()
            }
            setAnimationOrigin(t) {
                let e, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    s = this.snapshot,
                    r = s ? s.latestValues : {},
                    o = { ...this.latestValues
                    },
                    a = (0, tt.$)();
                this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !i;
                let l = (0, tt.J)(),
                    h = (s ? s.source : void 0) !== (this.layout ? this.layout.source : void 0),
                    u = this.getStack(),
                    d = !u || u.members.length <= 1,
                    c = !!(h && !d && !0 === this.options.crossfade && !this.path.some(tW));
                this.animationProgress = 0;
                let f = null == n ? void 0 : n.interpolateProjection(t);
                this.mixTargetDelta = i => {
                    let n = i / 1e3,
                        s = null == f ? void 0 : f(n);
                    if (s ? (a.x.translate = s.x, a.x.scale = (0, C.f)(t.x.scale, 1, n), a.x.origin = t.x.origin, a.x.originPoint = t.x.originPoint, a.y.translate = s.y, a.y.scale = (0, C.f)(t.y.scale, 1, n), a.y.origin = t.y.origin, a.y.originPoint = t.y.originPoint) : (t$(a.x, t.x, n), t$(a.y, t.y, n)), this.setTargetDelta(a), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                        var u, p, m, v, g, y;
                        (0, K.q)(l, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), m = this.relativeTarget, v = this.relativeTargetOrigin, g = l, y = n, tN(m.x, v.x, g.x, y), tN(m.y, v.y, g.y, y), e && (u = this.relativeTarget, p = e, tn(u.x, p.x) && tn(u.y, p.y)) && (this.isProjectionDirty = !1), e || (e = (0, tt.J)()), H(e, this.relativeTarget)
                    }
                    h && (this.animationValues = o, function(t, e, i, n, s, r) {
                        s ? (t.opacity = (0, C.f)(0, i.opacity ? ? 1, $(n)), t.opacityExit = (0, C.f)(e.opacity ? ? 1, 0, N(n))) : r && (t.opacity = (0, C.f)(e.opacity ? ? 1, i.opacity ? ? 1, n));
                        for (let s = 0; s < I; s++) {
                            let r = B[s],
                                o = U(e, r),
                                a = U(i, r);
                            (void 0 !== o || void 0 !== a) && (o || (o = 0), a || (a = 0), 0 === o || 0 === a || O(o) === O(a) ? (t[r] = Math.max((0, C.f)(F(o), F(a), n), 0), (R.U.test(a) || R.U.test(o)) && (t[r] += "%")) : t[r] = a)
                        }(e.rotate || i.rotate) && (t.rotate = (0, C.f)(e.rotate || 0, i.rotate || 0, n))
                    }(o, r, this.latestValues, n, c, d)), s && void 0 !== s.rotate && (this.animationValues || (this.animationValues = o), this.animationValues.pathRotation = s.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n
                }, this.mixTargetDelta(1e3 * !!this.options.layoutRoot)
            }
            startAnimation(t) {
                var e, i, n;
                this.notifyListeners("animationStart"), null == (e = this.currentAnimation) || e.stop(), null == (n = this.resumingFrom) || null == (i = n.currentAnimation) || i.stop(), this.pendingAnimation && ((0, l.Y)(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = l.y.update(() => {
                    a.f.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = (0, T.o)(0)), this.motionValue.jump(0, !1), this.currentAnimation = S(this.motionValue, [0, 1e3], { ...t,
                        velocity: 0,
                        isSync: !0,
                        onUpdate: e => {
                            this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                        },
                        onComplete: () => {
                            t.onComplete && t.onComplete(), this.completeAnimation()
                        }
                    }), (0, P.U)(this.currentAnimation, this), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                })
            }
            completeAnimation() {
                this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                let t = this.getStack();
                t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
            }
            finishAnimation() {
                this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
            }
            applyTransformsToTarget() {
                let t = this.getLead(),
                    {
                        targetWithTransforms: e,
                        layout: i,
                        latestValues: n
                    } = t,
                    {
                        target: s
                    } = t;
                if (e && s && i) {
                    if (this !== t && this.layout && i && tq(this.options.animationType, this.layout.layoutBox, i.layoutBox)) {
                        s = this.target || (0, tt.J)();
                        let e = (0, K.M)(this.layout.layoutBox.x);
                        s.x.min = t.target.x.min, s.x.max = s.x.min + e;
                        let i = (0, K.M)(this.layout.layoutBox.y);
                        s.y.min = t.target.y.min, s.y.max = s.y.min + i
                    }
                    H(e, s), (0, q.k)(e, n), (0, K.P)(this.projectionDeltaWithTransform, this.layoutCorrected, e, n)
                }
            }
            registerSharedNode(t, e) {
                this.sharedNodes.has(t) || this.sharedNodes.set(t, new th), this.sharedNodes.get(t).add(e);
                let i = e.options.initialPromotionConfig;
                e.promote({
                    transition: i ? i.transition : void 0,
                    preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : void 0
                })
            }
            isLead() {
                let t = this.getStack();
                return !t || t.lead === this
            }
            getLead() {
                var t;
                let {
                    layoutId: e
                } = this.options;
                return e && (null == (t = this.getStack()) ? void 0 : t.lead) || this
            }
            getPrevLead() {
                var t;
                let {
                    layoutId: e
                } = this.options;
                return e ? null == (t = this.getStack()) ? void 0 : t.prevLead : void 0
            }
            getStack() {
                let {
                    layoutId: t
                } = this.options;
                if (t) return this.root.sharedNodes.get(t)
            }
            promote() {
                let {
                    needsReset: t,
                    transition: e,
                    preserveFollowOpacity: i
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = this.getStack();
                n && n.promote(this, i), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
                    transition: e
                })
            }
            relegate() {
                let t = this.getStack();
                return !!t && t.relegate(this)
            }
            resetSkewAndRotation() {
                let {
                    visualElement: t
                } = this.options;
                if (!t) return;
                let e = !1,
                    {
                        latestValues: i
                    } = t;
                if ((i.z || i.rotate || i.rotateX || i.rotateY || i.rotateZ || i.skewX || i.skewY) && (e = !0), !e) return;
                let n = {};
                i.z && tT("z", t, n, this.animationValues);
                for (let e = 0; e < tx.length; e++) tT(`rotate${tx[e]}`, t, n, this.animationValues), tT(`skew${tx[e]}`, t, n, this.animationValues);
                for (let e in t.render(), n) t.setStaticValue(e, n[e]), this.animationValues && (this.animationValues[e] = n[e]);
                t.scheduleRender()
            }
            applyProjectionStyles(t, e) {
                if (!this.instance || this.isSVG) return;
                if (!this.isVisible) {
                    t.visibility = "hidden";
                    return
                }
                let i = this.getTransformTemplate();
                if (this.needsReset) {
                    this.needsReset = !1, t.visibility = "", t.opacity = "", t.pointerEvents = (0, D.f)(null == e ? void 0 : e.pointerEvents) || "", t.transform = i ? i(this.latestValues, "") : "none";
                    return
                }
                let n = this.getLead();
                if (!this.projectionDelta || !this.layout || !n.target) {
                    this.options.layoutId && (t.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, t.pointerEvents = (0, D.f)(null == e ? void 0 : e.pointerEvents) || ""), this.hasProjected && !(0, tg.u)(this.latestValues) && (t.transform = i ? i({}, "") : "none", this.hasProjected = !1);
                    return
                }
                t.visibility = "";
                let s = n.animationValues || n.latestValues;
                this.applyTransformsToTarget();
                let r = function(t, e, i) {
                    let n = "",
                        s = t.x.translate / e.x,
                        r = t.y.translate / e.y,
                        o = (null == i ? void 0 : i.z) || 0;
                    if ((s || r || o) && (n = `translate3d(${s}px, ${r}px, ${o}px) `), (1 !== e.x || 1 !== e.y) && (n += `scale(${1/e.x}, ${1/e.y}) `), i) {
                        let {
                            transformPerspective: t,
                            rotate: e,
                            pathRotation: s,
                            rotateX: r,
                            rotateY: o,
                            skewX: a,
                            skewY: l
                        } = i;
                        t && (n = `perspective(${t}px) ${n}`), e && (n += `rotate(${e}deg) `), s && (n += `rotate(${s}deg) `), r && (n += `rotateX(${r}deg) `), o && (n += `rotateY(${o}deg) `), a && (n += `skewX(${a}deg) `), l && (n += `skewY(${l}deg) `)
                    }
                    let a = t.x.scale * e.x,
                        l = t.y.scale * e.y;
                    return (1 !== a || 1 !== l) && (n += `scale(${a}, ${l})`), n || "none"
                }(this.projectionDeltaWithTransform, this.treeScale, s);
                i && (r = i(s, r)), t.transform = r;
                let {
                    x: o,
                    y: a
                } = this.projectionDelta;
                for (let e in t.transformOrigin = `${100*o.origin}% ${100*a.origin}% 0`, n.animationValues ? t.opacity = n === this ? s.opacity ? ? this.latestValues.opacity ? ? 1 : this.preserveOpacity ? this.latestValues.opacity : s.opacityExit : t.opacity = n === this ? void 0 !== s.opacity ? s.opacity : "" : void 0 !== s.opacityExit ? s.opacityExit : 0, V.f) {
                    if (void 0 === s[e]) continue;
                    let {
                        correct: i,
                        applyTo: o,
                        isCSSVariable: a
                    } = V.f[e], l = "none" === r ? s[e] : i(s[e], n);
                    if (o) {
                        let e = o.length;
                        for (let i = 0; i < e; i++) t[o[i]] = l
                    } else a ? this.options.visualElement.renderState.vars[e] = l : t[e] = l
                }
                this.options.layoutId && (t.pointerEvents = n === this ? (0, D.f)(null == e ? void 0 : e.pointerEvents) || "" : "none")
            }
            clearSnapshot() {
                this.resumeFrom = this.snapshot = this.dragSnapshot = this.dragAncestor = void 0
            }
            resetTree() {
                this.root.nodes.forEach(t => {
                    var e;
                    return null == (e = t.currentAnimation) ? void 0 : e.stop()
                }), this.root.nodes.forEach(tk), this.root.sharedNodes.clear()
            }
            constructor(t = {}, e = null == i ? void 0 : i()) {
                this.id = tw++, this.animationId = 0, this.animationCommitId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                    x: 1,
                    y: 1
                }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                    this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                }, this.updateProjection = () => {
                    this.projectionUpdateScheduled = !1, this.nodes.forEach(tM), this.nodes.forEach(tF), this.nodes.forEach(tI), this.nodes.forEach(tE)
                }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = e ? e.root || e : this, this.path = e ? [...e.path, e] : [], this.parent = e, this.depth = e ? e.depth + 1 : 0;
                for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
                this.root === this && (this.nodes = new tv)
            }
        }
    }

    function tP(t) {
        t.updateLayout(),
            function(t) {
                let {
                    snapshot: e,
                    dragAncestor: i
                } = t, n = null == i ? void 0 : i.layout;
                if (!e || !n || t.resumeFrom || t.isAnimationBlocked) return;
                let s = i.dragSnapshot;
                (0, tp.f)(t => (0, q.i)(e.layoutBox[t], n.layoutBox[t].min - s.layoutBox[t].min))
            }(t)
    }

    function tA(t) {
        var e;
        let i = (null == (e = t.resumeFrom) ? void 0 : e.snapshot) || t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
            let {
                layoutBox: e,
                measuredBox: n
            } = t.layout, {
                animationType: s
            } = t.options, r = i.source !== t.layout.source;
            if ("size" === s)(0, tp.f)(t => {
                let n = r ? i.measuredBox[t] : i.layoutBox[t],
                    s = (0, K.M)(n);
                n.min = e[t].min, n.max = n.min + s
            });
            else if ("x" === s || "y" === s) {
                let t = "x" === s ? "y" : "x";
                z(r ? i.measuredBox[t] : i.layoutBox[t], e[t])
            } else tq(s, i.layoutBox, e) && (0, tp.f)(n => {
                let s = r ? i.measuredBox[n] : i.layoutBox[n],
                    o = (0, K.M)(e[n]);
                s.max = s.min + o, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[n].max = t.relativeTarget[n].min + o)
            });
            let o = (0, tt.$)();
            (0, K.P)(o, e, i.layoutBox);
            let a = (0, tt.$)();
            r ? (0, K.P)(a, t.applyTransform(n, !0), i.measuredBox) : (0, K.P)(a, e, i.layoutBox);
            let l = !ti(o),
                h = !1;
            if (!t.resumeFrom) {
                let n = t.getClosestProjectingParent();
                if (n && !n.resumeFrom) {
                    let {
                        snapshot: s,
                        layout: r
                    } = n;
                    if (s && r) {
                        let o = t.options.layoutAnchor || void 0,
                            a = (0, tt.J)();
                        (0, K.q)(a, i.layoutBox, s.layoutBox, o);
                        let l = (0, tt.J)();
                        (0, K.q)(l, e, r.layoutBox, o), tr(a, l) || (h = !0), n.options.layoutRoot && (t.relativeTarget = l, t.relativeTargetOrigin = a, t.relativeParent = n)
                    }
                }
            }
            t.notifyListeners("didUpdate", {
                layout: e,
                snapshot: i,
                delta: a,
                layoutDelta: o,
                hasLayoutChanged: l,
                hasRelativeLayoutChanged: h
            })
        } else if (t.isLead()) {
            let {
                onExitComplete: e
            } = t.options;
            e && e()
        }
        t.options.transition = void 0
    }

    function tM(t) {
        t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
    }

    function tE(t) {
        t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
    }

    function tV(t) {
        t.clearSnapshot()
    }

    function tk(t) {
        t.clearMeasurements()
    }

    function tC(t) {
        t.isLayoutDirty = !0, t.updateLayout()
    }

    function tD(t) {
        t.isLayoutDirty = !1
    }

    function tR(t) {
        t.isAnimationBlocked && t.layout && !t.isLayoutDirty && (t.snapshot = t.dragSnapshot || t.layout, t.isLayoutDirty = !0)
    }

    function tL(t) {
        var e;
        t.relativeTarget && (null == (e = t.relativeParent) ? void 0 : e.isLayoutDirty) && (t.currentAnimation ? t.isLayoutDirty = !0 : (t.targetDelta = void 0, t.removeRelativeTarget()))
    }

    function tj(t) {
        let {
            visualElement: e
        } = t.options;
        e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
    }

    function tB(t) {
        t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
    }

    function tF(t) {
        t.resolveTargetDelta()
    }

    function tI(t) {
        t.calcProjection()
    }

    function tO(t) {
        t.resetSkewAndRotation()
    }

    function tU(t) {
        t.removeLeadSnapshot()
    }

    function t$(t, e, i) {
        t.translate = (0, C.f)(e.translate, 0, i), t.scale = (0, C.f)(e.scale, 1, i), t.origin = e.origin, t.originPoint = e.originPoint
    }

    function tN(t, e, i, n) {
        t.min = (0, C.f)(e.min, i.min, n), t.max = (0, C.f)(e.max, i.max, n)
    }

    function tW(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit
    }
    let tY = {
            duration: .45,
            ease: [.4, 0, .1, 1]
        },
        tz = t => "u" > typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
        tH = tz("applewebkit/") && !tz("chrome/") ? Math.round : x.f;

    function tX(t) {
        t.min = tH(t.min), t.max = tH(t.max)
    }

    function tq(t, e, i) {
        return "position" === t || "preserve-aspect" === t && !(0, K.$)(to(e), to(i), .2)
    }

    function tK(t) {
        var e;
        return t !== t.root && (null == (e = t.scroll) ? void 0 : e.wasRoot)
    }
    var t_ = t.i(927020);
    let tZ = tS({
            attachResizeListener: (t, e) => (0, t_.f)(t, "resize", e),
            measureScroll: () => {
                var t, e;
                return {
                    x: document.documentElement.scrollLeft || (null == (t = document.body) ? void 0 : t.scrollLeft) || 0,
                    y: document.documentElement.scrollTop || (null == (e = document.body) ? void 0 : e.scrollTop) || 0
                }
            },
            checkIsScrollRoot: () => !0
        }),
        tJ = {
            current: void 0
        },
        tG = tS({
            measureScroll: t => ({
                x: t.scrollLeft,
                y: t.scrollTop
            }),
            defaultParent: () => {
                if (!tJ.current) {
                    let t = new tZ({});
                    t.mount(window), t.setOptions({
                        layoutScroll: !0
                    }), tJ.current = t
                }
                return tJ.current
            },
            resetTransform: (t, e) => {
                t.style.transform = void 0 !== e ? e : "none"
            },
            checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
        }),
        tQ = {
            pan: {
                Feature: r.f
            },
            drag: {
                Feature: s.f,
                ProjectionNode: tG,
                MeasureLayout: v
            }
        };
    var t0 = t.i(885472),
        t1 = t.i(750014),
        t2 = t.i(598896);

    function t5(t, e) {
        let i = (0, t2.f)(t),
            n = new AbortController;
        return [i, {
            passive: !0,
            ...e,
            signal: n.signal
        }, () => n.abort()]
    }
    var t4 = t.i(599727);

    function t3(t, e, i) {
        let {
            props: n
        } = t;
        t.animationState && n.whileHover && t.animationState.setActive("whileHover", "Start" === i);
        let s = n["onHover" + i];
        s && l.y.postRender(() => s(e, (0, t4.j)(e)))
    }
    class t6 extends t0.f {
        mount() {
            let {
                current: t
            } = this.node;
            t && (this.unmount = function(t, e) {
                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    [n, s, r] = t5(t, i);
                return n.forEach(t => {
                    let i, n = !1,
                        r = !1,
                        o = e => {
                            i && (i(e), i = void 0), t.removeEventListener("pointerleave", l)
                        },
                        a = t => {
                            n = !1, window.removeEventListener("pointerup", a), window.removeEventListener("pointercancel", a), r && (r = !1, o(t))
                        },
                        l = t => {
                            if ("touch" !== t.pointerType) {
                                if (n) {
                                    r = !0;
                                    return
                                }
                                o(t)
                            }
                        };
                    t.addEventListener("pointerenter", n => {
                        if ("touch" === n.pointerType || (0, t1.E)()) return;
                        r = !1;
                        let o = e(t, n);
                        "function" == typeof o && (i = o, t.addEventListener("pointerleave", l, s))
                    }, s), t.addEventListener("pointerdown", () => {
                        n = !0, window.addEventListener("pointerup", a, s), window.addEventListener("pointercancel", a, s)
                    }, s)
                }), r
            }(t, (t, e) => (t3(this.node, e, "Start"), t => t3(this.node, t, "End"))))
        }
        unmount() {}
    }
    var t7 = t0,
        t9 = t.i(755513);
    class t8 extends t7.f {
        onFocus() {
            let t = !1;
            try {
                t = this.node.current.matches(":focus-visible")
            } catch (e) {
                t = !0
            }
            t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
        }
        onBlur() {
            this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
        }
        mount() {
            this.unmount = (0, t9.f)((0, t_.f)(this.node.current, "focus", () => this.onFocus()), (0, t_.f)(this.node.current, "blur", () => this.onBlur()))
        }
        unmount() {}
        constructor() {
            super(...arguments), this.isActive = !1
        }
    }
    var et = t0,
        ee = t.i(561791);
    let ei = (t, e) => !!e && (t === e || ei(t, e.parentElement));
    var en = t.i(430469),
        es = t.i(691679);
    let er = new WeakSet;

    function eo(t) {
        return e => {
            "Enter" === e.key && t(e)
        }
    }

    function ea(t, e) {
        t.dispatchEvent(new PointerEvent("pointer" + e, {
            isPrimary: !0,
            bubbles: !0
        }))
    }

    function el(t) {
        return (0, en.f)(t) && !(0, t1.E)()
    }
    let eh = new WeakSet;

    function eu(t, e, i) {
        let {
            props: n
        } = t;
        if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
        t.animationState && n.whileTap && t.animationState.setActive("whileTap", "Start" === i);
        let s = n["onTap" + ("End" === i ? "" : i)];
        s && l.y.postRender(() => s(e, (0, t4.j)(e)))
    }
    class ed extends et.f {
        mount() {
            let {
                current: t
            } = this.node;
            if (!t) return;
            let {
                globalTapTarget: e,
                propagate: i
            } = this.node.props;
            this.unmount = function(t, e) {
                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    [n, s, r] = t5(t, i),
                    o = t => {
                        let n = t.currentTarget;
                        if (!el(t) || eh.has(t)) return;
                        er.add(n), i.stopPropagation && eh.add(t);
                        let r = e(n, t),
                            o = { ...s,
                                capture: !0
                            },
                            a = (t, e) => {
                                window.removeEventListener("pointerup", l, o), window.removeEventListener("pointercancel", h, o), er.has(n) && er.delete(n), el(t) && "function" == typeof r && r(t, {
                                    success: e
                                })
                            },
                            l = t => {
                                a(t, n === window || n === document || i.useGlobalTarget || ei(n, t.target))
                            },
                            h = t => {
                                a(t, !1)
                            };
                        window.addEventListener("pointerup", l, o), window.addEventListener("pointercancel", h, o)
                    };
                return n.forEach(t => {
                    (i.useGlobalTarget ? window : t).addEventListener("pointerdown", o, s), (0, ee.f)(t) && (t.addEventListener("focus", t => ((t, e) => {
                        let i = t.currentTarget;
                        if (!i) return;
                        let n = eo(() => {
                            if (er.has(i)) return;
                            ea(i, "down");
                            let t = eo(() => {
                                ea(i, "up")
                            });
                            i.addEventListener("keyup", t, e), i.addEventListener("blur", () => ea(i, "cancel"), e)
                        });
                        i.addEventListener("keydown", n, e), i.addEventListener("blur", () => i.removeEventListener("keydown", n), e)
                    })(t, s)), (0, es.Y)(t) || t.hasAttribute("tabindex") || (t.tabIndex = 0))
                }), r
            }(t, (t, e) => (eu(this.node, e, "Start"), (t, e) => {
                let {
                    success: i
                } = e;
                return eu(this.node, t, i ? "End" : "Cancel")
            }), {
                useGlobalTarget: e,
                stopPropagation: (null == i ? void 0 : i.tap) === !1
            })
        }
        unmount() {}
    }
    var ec = t0;
    let ef = new WeakMap,
        ep = new WeakMap,
        em = t => {
            let e = ef.get(t.target);
            e && e(t)
        },
        ev = t => {
            t.forEach(em)
        },
        eg = {
            some: 0,
            all: 1
        };
    class ey extends ec.f {
        startObserver() {
            var t, e;
            let i;
            null == (t = this.stopObserver) || t.call(this);
            let {
                viewport: n = {}
            } = this.node.getProps(), {
                root: s,
                margin: r,
                amount: o = "some",
                once: a
            } = n, l = {
                root: s ? s.current : void 0,
                rootMargin: r,
                threshold: "number" == typeof o ? o : eg[o]
            }, h = t => {
                let {
                    isIntersecting: e
                } = t;
                if (this.isInView === e || (this.isInView = e, a && !e && this.hasEnteredView)) return;
                e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
                let {
                    onViewportEnter: i,
                    onViewportLeave: n
                } = this.node.getProps(), s = e ? i : n;
                s && s(t)
            };
            this.stopObserver = (e = this.node.current, i = function(t) {
                let {
                    root: e,
                    ...i
                } = t, n = e || document;
                ep.has(n) || ep.set(n, {});
                let s = ep.get(n),
                    r = JSON.stringify(i);
                return s[r] || (s[r] = new IntersectionObserver(ev, {
                    root: e,
                    ...i
                })), s[r]
            }(l), ef.set(e, h), i.observe(e), () => {
                ef.delete(e), i.unobserve(e)
            })
        }
        mount() {
            this.startObserver()
        }
        update() {
            if ("u" < typeof IntersectionObserver) return;
            let {
                props: t,
                prevProps: e
            } = this.node;
            ["amount", "margin", "root"].some(function(t) {
                let {
                    viewport: e = {}
                } = t, {
                    viewport: i = {}
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return t => e[t] !== i[t]
            }(t, e)) && this.startObserver()
        }
        unmount() {
            var t;
            null == (t = this.stopObserver) || t.call(this), this.hasEnteredView = !1, this.isInView = !1
        }
        constructor() {
            super(...arguments), this.hasEnteredView = !1, this.isInView = !1
        }
    }
    let ex = { ...n.f,
            inView: {
                Feature: ey
            },
            tap: {
                Feature: ed
            },
            focus: {
                Feature: t8
            },
            hover: {
                Feature: t6
            },
            ...tQ,
            layout: {
                ProjectionNode: tG,
                MeasureLayout: v
            }
        },
        ew = (0, i.f)(ex, e.f);
    t.s(["f", 0, ew], 135416)
}, 981679, 950327, 106762, 872951, 286406, 627808, 403263, 771983, 594501, 525222, 808229, 472722, 413380, 96774, 306075, 752094, 527510, 305731, 671521, 211644, 391438, 645556, 337626, 431509, 175811, 135252, 600937, 651490, 704519, 868446, 77585, 495854, 551830, 677020, 203132, 742330, 431969, 180534, 211834, 788880, 594521, 667661, 405581, 137451, 197656, 625543, 747281, 97075, 716945, 152786, 415924, 158943, 161651, 892012, 907293, t => {
    "use strict";
    let e = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "scaleZ", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
        i = new Set([...e, "pathRotation"]);
    t.s(["$", 0, e, "P", 0, i], 950327);
    var n = t.i(754055);
    let s = {
            test: t => "number" == typeof t,
            parse: parseFloat,
            transform: t => t
        },
        r = { ...s,
            transform: t => (0, n.f)(0, 1, t)
        },
        o = { ...s,
            default: 1
        },
        a = t => Math.round(1e5 * t) / 1e5;
    t.s(["f", 0, a], 106762);
    let l = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        h = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        u = (t, e) => i => !!("string" == typeof i && h.test(i) && i.startsWith(t) || e && null != i && Object.prototype.hasOwnProperty.call(i, e)),
        d = (t, e, i) => n => {
            if ("string" != typeof n) return n;
            let [s, r, o, a] = n.match(l);
            return {
                [t]: parseFloat(s),
                [e]: parseFloat(r),
                [i]: parseFloat(o),
                alpha: void 0 !== a ? parseFloat(a) : 1
            }
        },
        c = { ...s,
            transform: t => Math.round((0, n.f)(0, 255, t))
        },
        f = {
            test: u("rgb", "red"),
            parse: d("red", "green", "blue"),
            transform: t => {
                let {
                    red: e,
                    green: i,
                    blue: n,
                    alpha: s = 1
                } = t;
                return "rgba(" + c.transform(e) + ", " + c.transform(i) + ", " + c.transform(n) + ", " + a(r.transform(s)) + ")"
            }
        };
    t.s(["f", 0, f], 872951);
    let p = {
        test: u("#"),
        parse: function(t) {
            let e = "",
                i = "",
                n = "",
                s = "";
            return t.length > 5 ? (e = t.substring(1, 3), i = t.substring(3, 5), n = t.substring(5, 7), s = t.substring(7, 9)) : (e = t.substring(1, 2), i = t.substring(2, 3), n = t.substring(3, 4), s = t.substring(4, 5), e += e, i += i, n += n, s += s), {
                red: parseInt(e, 16),
                green: parseInt(i, 16),
                blue: parseInt(n, 16),
                alpha: s ? parseInt(s, 16) / 255 : 1
            }
        },
        transform: f.transform
    };
    t.s(["f", 0, p], 286406);
    let m = t => ({
            test: e => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
            parse: parseFloat,
            transform: e => `${e}${t}`
        }),
        v = m("deg"),
        g = m("%"),
        y = m("px"),
        x = m("vh"),
        w = m("vw"),
        T = { ...g,
            parse: t => g.parse(t) / 100,
            transform: t => g.transform(100 * t)
        };
    t.s(["b", 0, v, "U", 0, g, "v", 0, T, "L", 0, y, "a", 0, x, "$", 0, w], 627808);
    let b = {
        test: u("hsl", "hue"),
        parse: d("hue", "saturation", "lightness"),
        transform: t => {
            let {
                hue: e,
                saturation: i,
                lightness: n,
                alpha: s = 1
            } = t;
            return "hsla(" + Math.round(e) + ", " + g.transform(a(i)) + ", " + g.transform(a(n)) + ", " + a(r.transform(s)) + ")"
        }
    };
    t.s(["f", 0, b], 403263);
    let S = {
        test: t => f.test(t) || p.test(t) || b.test(t),
        parse: t => f.test(t) ? f.parse(t) : b.test(t) ? b.parse(t) : p.parse(t),
        transform: t => "string" == typeof t ? t : t.hasOwnProperty("red") ? f.transform(t) : b.transform(t),
        getAnimatableNone: t => {
            let e = S.parse(t);
            return e.alpha = 0, S.transform(e)
        }
    };
    t.s(["f", 0, S], 771983);
    let P = new RegExp(l.source),
        A = RegExp(/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu.source, "i"),
        M = "number",
        E = "color",
        V = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)(?![a-z]*\()/giu;

    function k(t) {
        let e = t.toString();
        return P.test(e) || A.test(e)
    }

    function C(t) {
        let e = t.toString(),
            i = [],
            n = {
                color: [],
                number: [],
                var: []
            },
            s = [],
            r = 0,
            o = e.replace(V, t => (S.test(t) ? (n.color.push(r), s.push(E), i.push(S.parse(t))) : t.startsWith("var(") ? (n.var.push(r), s.push("var"), i.push(t)) : (n.number.push(r), s.push(M), i.push(parseFloat(t))), ++r, "${}")).split("${}");
        return {
            values: i,
            split: o,
            indexes: n,
            types: s
        }
    }

    function D(t) {
        let {
            split: e,
            types: i
        } = t, n = e.length;
        return t => {
            let s = "";
            for (let r = 0; r < n; r++)
                if (s += e[r], void 0 !== t[r]) {
                    let e = i[r];
                    e === M ? s += a(t[r]) : e === E ? s += S.transform(t[r]) : s += t[r]
                }
            return s
        }
    }
    let R = {
        test: function(t) {
            return isNaN(t) && "string" == typeof t && (P.test(t) || A.test(t))
        },
        parse: function(t) {
            return C(t).values
        },
        createTransformer: function(t) {
            return D(C(t))
        },
        getAnimatableNone: function(t) {
            let e = C(t);
            return D(e)(e.values.map((t, i) => ((t, e) => "number" == typeof t ? (null == e ? void 0 : e.trim().endsWith("/")) ? t : 0 : "number" == typeof t ? 0 : S.test(t) ? S.getAnimatableNone(t) : t)(t, e.split[i])))
        }
    };
    t.s(["L", 0, C, "u", 0, R, "T", 0, k], 594501);
    let L = new Set(["brightness", "contrast", "saturate", "opacity"]);

    function j(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [n] = i.match(l) || [];
        if (!n) return t;
        let s = i.replace(n, ""),
            r = +!!L.has(e);
        return n !== i && (r *= 100), e + "(" + r + s + ")"
    }
    let B = /\b([a-z-]*)\(.*?\)/gu,
        F = { ...R,
            getAnimatableNone: t => {
                let e = t.match(B);
                return e ? e.map(j).join(" ") : t
            }
        },
        I = { ...R,
            getAnimatableNone: t => {
                let e = R.parse(t);
                return R.createTransformer(t)(e.map(t => "number" == typeof t ? 0 : "object" == typeof t ? { ...t,
                    alpha: 1
                } : t))
            }
        },
        O = { ...s,
            transform: Math.round
        },
        U = {
            rotate: v,
            pathRotation: v,
            rotateX: v,
            rotateY: v,
            rotateZ: v,
            scale: o,
            scaleX: o,
            scaleY: o,
            scaleZ: o,
            skew: v,
            skewX: v,
            skewY: v,
            distance: y,
            translateX: y,
            translateY: y,
            translateZ: y,
            x: y,
            y: y,
            z: y,
            perspective: y,
            transformPerspective: y,
            opacity: r,
            originX: T,
            originY: T,
            originZ: y
        };
    t.s(["f", 0, U], 525222);
    let $ = {
        borderWidth: y,
        borderTopWidth: y,
        borderRightWidth: y,
        borderBottomWidth: y,
        borderLeftWidth: y,
        borderRadius: y,
        borderTopLeftRadius: y,
        borderTopRightRadius: y,
        borderBottomRightRadius: y,
        borderBottomLeftRadius: y,
        width: y,
        maxWidth: y,
        height: y,
        maxHeight: y,
        top: y,
        right: y,
        bottom: y,
        left: y,
        inset: y,
        insetBlock: y,
        insetBlockStart: y,
        insetBlockEnd: y,
        insetInline: y,
        insetInlineStart: y,
        insetInlineEnd: y,
        padding: y,
        paddingTop: y,
        paddingRight: y,
        paddingBottom: y,
        paddingLeft: y,
        paddingBlock: y,
        paddingBlockStart: y,
        paddingBlockEnd: y,
        paddingInline: y,
        paddingInlineStart: y,
        paddingInlineEnd: y,
        margin: y,
        marginTop: y,
        marginRight: y,
        marginBottom: y,
        marginLeft: y,
        marginBlock: y,
        marginBlockStart: y,
        marginBlockEnd: y,
        marginInline: y,
        marginInlineStart: y,
        marginInlineEnd: y,
        fontSize: y,
        backgroundPositionX: y,
        backgroundPositionY: y,
        ...U,
        zIndex: O,
        fillOpacity: r,
        strokeOpacity: r,
        numOctaves: O
    };
    t.s(["f", 0, $], 808229);
    let N = { ...$,
            color: S,
            backgroundColor: S,
            outlineColor: S,
            fill: S,
            stroke: S,
            borderColor: S,
            borderTopColor: S,
            borderRightColor: S,
            borderBottomColor: S,
            borderLeftColor: S,
            filter: F,
            WebkitFilter: F,
            mask: I,
            WebkitMask: I
        },
        W = t => N[t],
        Y = () => ({
            translate: 0,
            scale: 1,
            origin: 0,
            originPoint: 0
        }),
        z = () => ({
            min: 0,
            max: 0
        }),
        H = () => ({
            x: z(),
            y: z()
        });
    t.s(["J", 0, H, "$", 0, () => ({
        x: Y(),
        y: Y()
    })], 472722);
    let X = t => !!(t && t.getVelocity);
    t.s(["f", 0, X], 413380);
    let q = new Set(["width", "height", "top", "left", "right", "bottom", ...e]);
    t.s(["f", 0, q], 96774);
    let K = [s, y, g, v, w, x, {
            test: t => "auto" === t,
            parse: t => t
        }],
        _ = t => K.find(e => e.test(t));
    var Z = t.i(220244);
    let J = t => e => "string" == typeof e && e.startsWith(t),
        G = J("--"),
        Q = J("var(--"),
        tt = t => !!Q(t) && te.test(t.split("/*")[0].trim()),
        te = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;

    function ti(t) {
        return "string" == typeof t && t.split("/*")[0].includes("var(--")
    }
    t.s(["t", 0, ti, "A", 0, G, "u", 0, tt], 306075);
    let tn = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
        ts = new Set([F, I]);

    function tr(t, e) {
        let i = W(t);
        return ts.has(i) || (i = R), i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
    }
    let to = t => 180 * t / Math.PI,
        ta = t => th(to(Math.atan2(t[1], t[0]))),
        tl = {
            x: 4,
            y: 5,
            translateX: 4,
            translateY: 5,
            scaleX: 0,
            scaleY: 3,
            scaleZ: () => 1,
            scale: t => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
            rotate: ta,
            rotateZ: ta,
            skewX: t => to(Math.atan(t[1])),
            skewY: t => to(Math.atan(t[2])),
            skew: t => (Math.abs(t[1]) + Math.abs(t[2])) / 2
        },
        th = t => ((t %= 360) < 0 && (t += 360), t),
        tu = t => Math.hypot(t[0], t[1]),
        td = t => Math.hypot(t[4], t[5]),
        tc = {
            x: 12,
            y: 13,
            z: 14,
            translateX: 12,
            translateY: 13,
            translateZ: 14,
            scaleX: tu,
            scaleY: td,
            scaleZ: t => Math.hypot(t[8], t[9], t[10]),
            scale: t => (tu(t) + td(t)) / 2,
            rotateX: t => th(to(Math.atan2(t[6], t[5]))),
            rotateY: t => th(to(Math.atan2(-t[2], t[0]))),
            rotateZ: ta,
            rotate: ta,
            skewX: t => to(Math.atan(t[4])),
            skewY: t => to(Math.atan(t[1])),
            skew: t => (Math.abs(t[1]) + Math.abs(t[4])) / 2
        };

    function tf(t) {
        return +!!t.includes("scale")
    }

    function tp(t, e) {
        let i, n;
        if (!t || "none" === t) return tf(e);
        let s = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
        if (s) i = tc, n = s;
        else {
            let e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
            i = tl, n = e
        }
        if (!n) return tf(e);
        let r = i[e],
            o = n[1].split(",").map(tv);
        return "function" == typeof r ? r(o) : o[r]
    }
    let tm = (t, e) => {
        let {
            transform: i = "none"
        } = getComputedStyle(t);
        return tp(i, e)
    };

    function tv(t) {
        return parseFloat(t.trim())
    }
    t.s(["P", 0, tf, "g", 0, tp, "o", 0, tm], 752094);
    let tg = t => t === s || t === y,
        ty = new Set(["x", "y", "z"]),
        tx = e.filter(t => !ty.has(t)),
        tw = new Set(["bottom", "right"]);

    function tT(t, e, i, n, s, r) {
        let o = parseFloat(t);
        if (!isNaN(o)) return o;
        let {
            min: a,
            max: l
        } = e()[i], h = l - a;
        return "border-box" === r ? h : h - parseFloat(n) - parseFloat(s)
    }
    let tb = {
        width: (t, e) => {
            let {
                width: i,
                paddingLeft: n = "0",
                paddingRight: s = "0",
                boxSizing: r
            } = t;
            return tT(i, e, "x", n, s, r)
        },
        height: (t, e) => {
            let {
                height: i,
                paddingTop: n = "0",
                paddingBottom: s = "0",
                boxSizing: r
            } = t;
            return tT(i, e, "y", n, s, r)
        },
        top: t => {
            let {
                top: e
            } = t;
            return parseFloat(e)
        },
        left: t => {
            let {
                left: e
            } = t;
            return parseFloat(e)
        },
        bottom: (t, e) => {
            let {
                top: i
            } = t, {
                y: n
            } = e();
            return parseFloat(i) + (n.max - n.min)
        },
        right: (t, e) => {
            let {
                left: i
            } = t, {
                x: n
            } = e();
            return parseFloat(i) + (n.max - n.min)
        },
        x: t => {
            let {
                transform: e
            } = t;
            return tp(e, "x")
        },
        y: t => {
            let {
                transform: e
            } = t;
            return tp(e, "y")
        }
    };
    tb.translateX = tb.x, tb.translateY = tb.y;
    var tS = t.i(928058);
    let tP = new Set,
        tA = !1,
        tM = !1,
        tE = !1;

    function tV() {
        if (tM) {
            let t = [],
                e = new Set,
                i = new Set;
            tP.forEach(n => {
                n.needsMeasurement && (t.push(n), e.add(n.element), tw.has(n.name) && i.add(n.element))
            });
            let n = new Map;
            i.forEach(t => {
                let e, i = (e = [], tx.forEach(i => {
                    let n = t.getValue(i);
                    if (void 0 !== n) {
                        let t = n.get(),
                            s = +!!i.startsWith("scale");
                        if (t === s) return;
                        e.push([i, t]), n.set(s)
                    }
                }), e);
                i.length && (n.set(t, i), t.render())
            }), t.forEach(t => t.measureInitialState()), e.forEach(t => {
                t.render();
                let e = n.get(t);
                e && e.forEach(e => {
                    var i;
                    let [n, s] = e;
                    null == (i = t.getValue(n)) || i.set(s)
                })
            }), t.forEach(t => t.measureEndState()), t.forEach(t => {
                void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY)
            })
        }
        tM = !1, tA = !1, tP.forEach(t => t.complete(tE)), tP.clear()
    }

    function tk() {
        tP.forEach(t => {
            t.readKeyframes(), t.needsMeasurement && (tM = !0)
        })
    }
    class tC {
        scheduleResolve() {
            this.state = "scheduled", this.isAsync ? (tP.add(this), tA || (tA = !0, tS.y.read(tk), tS.y.resolveKeyframes(tV))) : (this.readKeyframes(), this.complete())
        }
        readKeyframes() {
            let {
                unresolvedKeyframes: t,
                name: e,
                element: i,
                motionValue: n
            } = this;
            if (null === t[0]) {
                let s = null == n ? void 0 : n.get(),
                    r = t[t.length - 1];
                if (void 0 !== s) t[0] = s;
                else if (i && e) {
                    let n = function(t, e, i) {
                        if ("string" == typeof t) {
                            if (/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t) || /^0[^.\s]+$/u.test(t)) return parseFloat(t);
                            if (!R.test(t) && R.test(i)) return tr(e, i)
                        }
                        return t ? ? void 0
                    }(i.readValue(e, r), e, r);
                    void 0 !== n && (t[0] = n)
                }
                void 0 === t[0] && (t[0] = r), n && void 0 === s && n.set(t[0])
            }
            for (let e = 1; e < t.length; e++) t[e] ? ? (t[e] = t[e - 1])
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), tP.delete(this)
        }
        cancel() {
            "scheduled" === this.state && (tP.delete(this), this.state = "pending")
        }
        resume() {
            "pending" === this.state && this.scheduleResolve()
        }
        constructor(t, e, i, n, s, r = !1) {
            this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = e, this.name = i, this.motionValue = n, this.element = s, this.isAsync = r
        }
    }
    t.s(["p", 0, tC, "f", 0, function() {
        tE = !0, tk(), tV(), tE = !1
    }], 527510);
    let tD = new Set(["auto", "none", "0"]);
    class tR extends tC {
        scheduleResolve() {
            if (this.canReadNow() && (this.readKeyframes(), !this.needsMeasurement)) return this.complete();
            super.scheduleResolve()
        }
        canReadNow() {
            let {
                unresolvedKeyframes: t,
                element: e,
                motionValue: i
            } = this, n = t[0] ? ? (null == i ? void 0 : i.get());
            if (!(null == e ? void 0 : e.current) || void 0 === n) return !1;
            for (let e = 0; e < t.length; e++)
                if (ti(e ? t[e] : n)) return !1;
            return !0
        }
        readKeyframes() {
            let {
                unresolvedKeyframes: t,
                element: e,
                name: i
            } = this;
            if (!e || !e.current) return;
            super.readKeyframes();
            for (let i = 0; i < t.length; i++) {
                let n = t[i];
                if ("string" == typeof n && tt(n = n.trim())) {
                    let s = function t(e, i) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                        (0, Z.k)(n <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
                        let [s, r] = function(t) {
                            let e = tn.exec(t);
                            if (!e) return [, ];
                            let [, i, n, s] = e;
                            return [`--${i??n}`, s]
                        }(e);
                        if (!s) return;
                        let o = window.getComputedStyle(i).getPropertyValue(s);
                        if (o) {
                            let t = o.trim();
                            return /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t) ? parseFloat(t) : t
                        }
                        return tt(r) ? t(r, i, n + 1) : r
                    }(n, e.current);
                    void 0 !== s && (t[i] = s), i === t.length - 1 && (this.finalKeyframe = n)
                }
            }
            if (this.resolveNoneKeyframes(), !q.has(i) || 2 !== t.length) return;
            let [n, s] = t;
            if ("number" == typeof n && "number" == typeof s) return;
            let r = _(n),
                o = _(s);
            if (ti(n) !== ti(s) && tb[i]) {
                this.needsMeasurement = !0;
                return
            }
            if (r !== o)
                if (tg(r) && tg(o))
                    for (let e = 0; e < t.length; e++) {
                        let i = t[e];
                        "string" == typeof i && (t[e] = parseFloat(i))
                    } else tb[i] && (this.needsMeasurement = !0)
        }
        resolveNoneKeyframes() {
            let {
                unresolvedKeyframes: t,
                name: e
            } = this, i = [];
            for (let e = 0; e < t.length; e++)(null === t[e] || function(t) {
                if ("number" == typeof t) return 0 === t;
                if (null === t) return !0;
                return "none" === t || "0" === t || /^0[^.\s]+$/u.test(t)
            }(t[e])) && i.push(e);
            i.length && function(t, e, i) {
                let n, s = 0;
                for (; s < t.length && !n;) {
                    let e = t[s];
                    "string" == typeof e && !tD.has(e) && k(e) && (n = t[s]), s++
                }
                if (n && i)
                    for (let s of e) t[s] !== n && (t[s] = tr(i, n))
            }(t, i, e)
        }
        measure() {
            let {
                element: t,
                name: e
            } = this;
            return tb[e](window.getComputedStyle(t.current), () => t.measureViewportBox())
        }
        measureInitialState() {
            let {
                element: t,
                unresolvedKeyframes: e,
                name: i
            } = this;
            if (!t || !t.current) return;
            "height" === i && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = this.measure(), e[0] = this.measuredOrigin;
            let n = e[e.length - 1];
            if (void 0 !== n) {
                var s;
                null == (s = this.motionValue) || s.jump(n, !1)
            }
        }
        measureEndState() {
            var t, e;
            let {
                element: i,
                unresolvedKeyframes: n
            } = this;
            if (!i || !i.current) return;
            null == (t = this.motionValue) || t.jump(this.measuredOrigin, !1);
            let s = n.length - 1,
                r = n[s];
            n[s] = this.measure(), null !== r && void 0 === this.finalKeyframe && (this.finalKeyframe = r), (null == (e = this.removedTransforms) ? void 0 : e.length) && this.removedTransforms.forEach(t => {
                let [e, n] = t;
                i.getValue(e).set(n)
            }), this.resolveNoneKeyframes()
        }
        constructor(t, e, i, n, s) {
            super(t, e, i, n, s, !0)
        }
    }
    t.s(["f", 0, tR], 305731);
    let tL = t => 1e3 * t,
        tj = t => t / 1e3;
    t.s(["q", 0, tj, "Z", 0, tL], 671521);
    var tB = t.i(181730),
        tF = t.i(726505);
    let tI = t => t.startsWith("--");

    function tO(t, e, i) {
        tI(e) ? t.style.setProperty(e, i) : t.style[e] = i
    }
    t.s(["f", 0, tI], 211644), t.s(["f", 0, tO], 391438);
    var tU = t.i(449958);
    let t$ = t => null !== t;

    function tN(t, e, i) {
        let {
            repeat: n,
            repeatType: s = "loop"
        } = e, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, o = t.filter(t$), a = r < 0 || n && "loop" !== s && n % 2 == 1 ? 0 : o.length - 1;
        return a && void 0 !== i ? i : o[a]
    }
    t.s(["f", 0, tN], 645556);
    class tW {
        get finished() {
            return this._finished || (this._finished = this.isResolved ? Promise.resolve() : new Promise(t => {
                this._resolve = t
            })), this._finished
        }
        updateFinished() {
            this._finished = this._resolve = void 0, this.isResolved = !1
        }
        notifyFinished() {
            var t;
            this.isResolved = !0, null == (t = this._resolve) || t.call(this)
        }
        then(t, e) {
            return this.finished.then(t, e)
        }
        constructor() {
            this.isResolved = !1
        }
    }
    t.s(["f", 0, tW], 337626);
    var tY = t.i(548092),
        tz = t.i(691285);

    function tH(t, e) {
        return {
            kind: t,
            animation: e,
            timestamp: tz.f.now(),
            frameTimestamp: tY.f.timestamp,
            frameIsProcessing: tY.f.isProcessing
        }
    }

    function tX(t, e, i) {
        let n = globalThis.__MOTION_INSPECT__;
        if (n) try {
            n({ ...tH("animation-start", t),
                options: i ? { ...e,
                    ...i
                } : e
            })
        } catch {}
    }
    t.s(["H", 0, tX, "U", 0, function(t, e) {
        let i = globalThis.__MOTION_INSPECT__;
        if (i) try {
            i({ ...tH("layout-animation-start", t),
                node: e
            })
        } catch {}
    }], 431509);
    let tq = t => Array.isArray(t) && "number" == typeof t[0];
    t.s(["f", 0, tq], 175811);
    let tK = (0, t.i(722084).f)(() => {
        try {
            document.createElement("div").animate({
                opacity: 0
            }, {
                easing: "linear(0, 1)"
            })
        } catch (t) {
            return !1
        }
        return !0
    }, "linearEasing");
    t.s(["f", 0, tK], 135252);
    let t_ = function(t, e) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
            n = "",
            s = Math.max(Math.round(e / i), 2);
        for (let e = 0; e < s; e++) n += Math.round(1e4 * t(e / (s - 1))) / 1e4 + ", ";
        return `linear(${n.substring(0,n.length-2)})`
    };
    t.s(["f", 0, t_], 600937);
    let tZ = t => {
        let [e, i, n, s] = t;
        return `cubic-bezier(${e}, ${i}, ${n}, ${s})`
    };
    t.s(["f", 0, tZ], 651490);
    let tJ = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: tZ([0, .65, .55, 1]),
        circOut: tZ([.55, 0, 1, .45]),
        backIn: tZ([.31, .01, .66, -.59]),
        backOut: tZ([.33, 1.53, .69, .99])
    };

    function tG(t) {
        return "function" == typeof t && "applyToOptions" in t
    }
    t.s(["f", 0, tJ], 704519), t.s(["f", 0, tG], 868446);
    class tQ extends tW {
        play() {
            this.isStopped || (this.manualStartTime = null, this.animation.play(), "finished" === this.state && this.updateFinished())
        }
        pause() {
            this.animation.pause()
        }
        complete() {
            var t, e;
            null == (t = (e = this.animation).finish) || t.call(e)
        }
        cancel() {
            try {
                this.animation.cancel()
            } catch (t) {}
        }
        stop() {
            if (this.isStopped) return;
            this.isStopped = !0;
            let {
                state: t
            } = this;
            "idle" !== t && "finished" !== t && (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel())
        }
        commitStyles() {
            var t, e, i;
            let n = null == (t = this.options) ? void 0 : t.element;
            !this.isPseudoElement && (null == n ? void 0 : n.isConnected) && (null == (e = (i = this.animation).commitStyles) || e.call(i))
        }
        get duration() {
            var t, e;
            return tj(Number((null == (e = this.animation.effect) || null == (t = e.getComputedTiming) ? void 0 : t.call(e).duration) || 0))
        }
        get iterationDuration() {
            let {
                delay: t = 0
            } = this.options || {};
            return this.duration + tj(t)
        }
        get time() {
            return tj(Number(this.animation.currentTime) || 0)
        }
        set time(t) {
            let e = null !== this.finishedTime;
            this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = tL(t), e && this.animation.pause()
        }
        get speed() {
            return this.animation.playbackRate
        }
        set speed(t) {
            t < 0 && (this.finishedTime = null), this.animation.playbackRate = t
        }
        get state() {
            return null !== this.finishedTime ? "finished" : this.animation.playState
        }
        get startTime() {
            return this.manualStartTime ? ? Number(this.animation.startTime)
        }
        set startTime(t) {
            this.manualStartTime = this.animation.startTime = t
        }
        attachTimeline(t) {
            let {
                timeline: e,
                onAttach: i,
                observe: n
            } = t;
            if (this.allowFlatten) {
                var s;
                null == (s = this.animation.effect) || s.updateTiming({
                    easing: "linear"
                })
            }
            return (this.animation.onfinish = null, e && (0, tU.a)()) ? (this.animation.timeline = e, null == i || i(this.animation), tF.f) : n(this)
        }
        constructor(t) {
            if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !t) return;
            let {
                element: e,
                name: i,
                keyframes: n,
                pseudoElement: s,
                allowFlatten: r = !1,
                finalKeyframe: o,
                onComplete: a
            } = t;
            this.isPseudoElement = !!s, this.allowFlatten = r, this.options = t, (0, Z.k)("string" != typeof t.type, 'Mini animate() doesn\'t support "type" as a string.', "mini-spring");
            let l = function(t) {
                let {
                    type: e,
                    ...i
                } = t;
                return tG(e) && tK() ? e.applyToOptions(i) : (i.duration ? ? (i.duration = 300), i.ease ? ? (i.ease = "easeOut"), i)
            }(t);
            this.animation = function(t, e, i) {
                let {
                    delay: n = 0,
                    duration: s = 300,
                    repeat: r = 0,
                    repeatType: o = "loop",
                    ease: a = "easeOut",
                    times: l
                } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, h = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : void 0, u = {
                    [e]: i
                };
                l && (u.offset = l);
                let d = function t(e, i) {
                    if (e) return "function" == typeof e ? tK() ? t_(e, i) : "ease-out" : tq(e) ? tZ(e) : Array.isArray(e) ? e.map(e => t(e, i) || tJ.easeOut) : tJ[e]
                }(a, s);
                Array.isArray(d) && (u.easing = d);
                let c = {
                    delay: n,
                    duration: s,
                    easing: Array.isArray(d) ? "linear" : d,
                    fill: "both",
                    iterations: r + 1,
                    direction: "reverse" === o ? "alternate" : "normal"
                };
                return h && (c.pseudoElement = h), t.animate(u, c)
            }(e, i, n, l, s), !1 === l.autoplay && this.animation.pause(), this.animation.onfinish = () => {
                if (this.finishedTime = this.time, !s) {
                    let t = tN(n, this.options, o, this.speed);
                    this.updateMotionValue && this.updateMotionValue(t), tO(e, i, t), this.animation.cancel()
                }
                null == a || a(), this.notifyFinished()
            }, tX(this, t, l)
        }
    }
    t.s(["f", 0, tQ], 77585);
    let t0 = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]);
    t.s(["f", 0, t0], 495854);
    let t1 = new WeakMap;
    t.s(["f", 0, t1], 551830);
    var t2 = t.i(35644),
        t5 = t.i(980455);
    let t4 = new WeakMap;

    function t3(t) {
        return null !== t && "object" == typeof t && "function" == typeof t.start
    }

    function t6(t) {
        return "string" == typeof t || Array.isArray(t)
    }
    t.s(["f", 0, t4], 677020), t.s(["f", 0, t3], 203132), t.s(["f", 0, t6], 742330);
    let t7 = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
        t9 = ["initial", ...t7];

    function t8(t) {
        if (t3(t.animate)) return !0;
        for (let e = 0; e < t9.length; e++)
            if (t6(t[t9[e]])) return !0;
        return !1
    }

    function et(t) {
        return !!(t8(t) || t.variants)
    }
    t.s(["v", 0, t7, "z", 0, t9], 431969), t.s(["m", 0, t8, "I", 0, et], 180534);
    var ee = t.i(453898),
        ei = t.i(436790);
    let en = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
        es = {};
    class er {
        scrapeMotionValuesFromProps(t, e, i) {
            return {}
        }
        mount(t) {
            var e, i;
            if (this.hasBeenMounted)
                for (let t in this.initialValues) null == (i = this.values.get(t)) || i.jump(this.initialValues[t]), this.latestValues[t] = this.initialValues[t];
            if (this.current = t, t4.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.isVariantNode && !this.isControllingVariants) {
                let t = this;
                do t = !1 !== t.props.inherit && t.parent; while (t && !t.isVariantNode) if (t) {
                    let {
                        variantChildren: e
                    } = t;
                    e.add(this), this.removeFromVariantTree = () => e.delete(this)
                }
            }
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)), "never" === this.reducedMotionConfig ? this.shouldReduceMotion = !1 : "always" === this.reducedMotionConfig ? this.shouldReduceMotion = !0 : (ei.E.current || (0, ee.f)(), this.shouldReduceMotion = ei.d.current), this.shouldSkipAnimations = this.skipAnimationsConfig ? ? !1, null == (e = this.parent) || e.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0
        }
        unmount() {
            var t;
            for (let e in this.projection && this.projection.unmount(), (0, tS.Y)(this.notifyUpdate), (0, tS.Y)(this.render), this.valueSubscriptions.forEach(t => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), null == (t = this.parent) || t.removeChild(this), this.events) this.events[e].clear();
            for (let t in this.features) {
                let e = this.features[t];
                e && (e.unmount(), e.isMounted = !1)
            }
            this.current = null
        }
        addChild(t) {
            this.children.add(t), this.enteringChildren ? ? (this.enteringChildren = new Set), this.enteringChildren.add(t)
        }
        removeChild(t) {
            this.children.delete(t), this.enteringChildren && this.enteringChildren.delete(t)
        }
        bindToMotionValue(t, e) {
            let n;
            if (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(), e.accelerate && t0.has(t) && this.current instanceof HTMLElement) {
                let {
                    factory: i,
                    keyframes: n,
                    times: s,
                    ease: r,
                    duration: o
                } = e.accelerate, a = new tQ({
                    element: this.current,
                    name: t,
                    keyframes: n,
                    times: s,
                    ease: r,
                    duration: tL(o)
                }), l = i(a);
                this.valueSubscriptions.set(t, () => {
                    l(), a.cancel()
                });
                return
            }
            let s = i.has(t);
            s && this.onBindTransform && this.onBindTransform();
            let r = e.on("change", e => {
                if (this.latestValues[t] = e, this.props.onUpdate && tS.y.preRender(this.notifyUpdate), s) {
                    var i;
                    this.projection && (this.projection.isTransformDirty = !0), null == (i = t1.get(this.current)) || i.check()
                }
                this.scheduleRender()
            });
            "u" > typeof window && window.MotionCheckAppearSync && (n = window.MotionCheckAppearSync(this, t, e)), this.valueSubscriptions.set(t, () => {
                r(), n && n()
            })
        }
        sortNodePosition(t) {
            return this.current && t.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
        }
        updateFeatures() {
            let t = "animation";
            for (t in es) {
                let e = es[t];
                if (!e) continue;
                let {
                    isEnabled: i,
                    Feature: n
                } = e;
                if (!this.features[t] && n && i(this.props) && (this.features[t] = new n(this)), this.features[t]) {
                    let e = this.features[t];
                    e.isMounted ? e.update() : (e.mount(), e.isMounted = !0)
                }
            }
        }
        triggerBuild() {
            this.build(this.renderState, this.latestValues, this.props)
        }
        measureViewportBox() {
            return this.current ? this.measureInstanceViewportBox(this.current, this.props) : H()
        }
        getStaticValue(t) {
            return this.latestValues[t]
        }
        setStaticValue(t, e) {
            this.latestValues[t] = e
        }
        update(t, e) {
            let {
                transformTemplate: i,
                onUpdate: n
            } = this.props;
            if ((t.transformTemplate || i) && this.scheduleRender(), t.transformTemplate && !i || t.onUpdate && !n) {
                var s;
                null == (s = t1.get(this.current)) || s.demote()
            }
            this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
            for (let e = 0; e < en.length; e++) {
                let i = en[e];
                this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
                let n = t["on" + i];
                n && (this.propEventSubscriptions[i] = this.on(i, n))
            }
            this.prevMotionValues = function(t, e, i) {
                for (let n in e) {
                    let s = e[n],
                        r = i[n];
                    if (X(s)) t.addValue(n, s);
                    else if (X(r)) t.addValue(n, (0, t5.o)(s, {
                        owner: t
                    }));
                    else if (r !== s)
                        if (t.hasValue(n)) {
                            let e = t.getValue(n);
                            !0 === e.liveStyle ? e.jump(s) : e.hasAnimated || e.set(s)
                        } else {
                            let e = t.getStaticValue(n);
                            t.addValue(n, (0, t5.o)(void 0 !== e ? e : s, {
                                owner: t
                            }))
                        }
                }
                for (let n in i) void 0 === e[n] && t.removeValue(n);
                return e
            }(this, this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
        }
        getProps() {
            return this.props
        }
        getVariant(t) {
            return this.props.variants ? this.props.variants[t] : void 0
        }
        getDefaultTransition() {
            return this.props.transition
        }
        getTransformPagePoint() {
            return this.props.transformPagePoint
        }
        addValue(t, e) {
            let i = this.values.get(t);
            if (e !== i) {
                i && this.removeValue(t), this.bindToMotionValue(t, e), this.values.set(t, e);
                let n = e.get();
                void 0 !== n && (this.latestValues[t] = n)
            }
        }
        removeValue(t) {
            this.values.delete(t);
            let e = this.valueSubscriptions.get(t);
            e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
        }
        hasValue(t) {
            return this.values.has(t)
        }
        getValue(t, e) {
            if (this.props.values && this.props.values[t]) return this.props.values[t];
            let i = this.values.get(t);
            if (void 0 === i && void 0 !== e) {
                var n;
                i = (0, t5.o)(e ? ? (null == (n = this.getDefaultValue) ? void 0 : n.call(this, t)), {
                    owner: this
                }), this.addValue(t, i)
            }
            return i
        }
        readValue(t, e) {
            let i = void 0 === this.latestValues[t] && this.current ? this.getBaseTargetFromProps(this.props, t) ? ? this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
            if (null != i) {
                let n, s;
                "string" == typeof i && (n = i, /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n) || (s = i, /^0[^.\s]+$/u.test(s))) ? i = parseFloat(i) : "number" != typeof i && !R.test(i) && R.test(e) && (i = tr(t, e)), this.setBaseTarget(t, X(i) ? i.get() : i)
            }
            return X(i) ? i.get() : i
        }
        setBaseTarget(t, e) {
            this.baseTarget[t] = e
        }
        on(t, e) {
            return this.events[t] || (this.events[t] = new tB.f), this.events[t].add(e)
        }
        notify(t) {
            for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
            this.events[t] && this.events[t].notify(...i)
        }
        scheduleRenderMicrotask() {
            t2.t.render(this.render)
        }
        constructor({
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: n,
            skipAnimations: s,
            blockInitialAnimation: r,
            visualState: o
        }, a = {}) {
            this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = new Map, this.KeyframeResolver = tC, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
            }, this.renderScheduledAt = 0, this.scheduleRender = () => {
                let t = tz.f.now();
                this.renderScheduledAt < t && (this.renderScheduledAt = t, tS.y.render(this.render, !1, !0))
            };
            let {
                latestValues: l,
                renderState: h
            } = o;
            this.latestValues = l, this.baseTarget = { ...l
            }, this.initialValues = e.initial ? { ...l
            } : {}, this.renderState = h, this.parent = t, this.props = e, this.presenceContext = i, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = n, this.skipAnimationsConfig = s, this.options = a, this.blockInitialAnimation = !!r, this.isControllingVariants = t8(e), this.isVariantNode = et(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
            let {
                willChange: u,
                ...d
            } = this.scrapeMotionValuesFromProps(e, {}, this);
            for (let t in d) {
                let e = d[t];
                void 0 !== l[t] && X(e) && e.set(l[t])
            }
        }
    }
    t.s(["F", 0, er, "k", 0, function() {
        return es
    }, "Y", 0, function(t) {
        es = t
    }], 211834);
    class eo extends er {
        sortInstanceNodePosition(t, e) {
            return 2 & t.compareDocumentPosition(e) ? 1 : -1
        }
        getBaseTargetFromProps(t, e) {
            let i = t.style;
            return i ? i[e] : void 0
        }
        removeValueFromRenderState(t, e) {
            let {
                vars: i,
                style: n
            } = e;
            delete i[t], delete n[t]
        }
        handleChildMotionValue() {
            this.childSubscription && (this.childSubscription(), delete this.childSubscription);
            let {
                children: t
            } = this.props;
            X(t) && (this.childSubscription = t.on("change", t => {
                this.current && (this.current.textContent = `${t}`)
            }))
        }
        constructor() {
            super(...arguments), this.KeyframeResolver = tR
        }
    }

    function ea(t) {
        return t.replace(/([A-Z])/g, t => `-${t.toLowerCase()}`)
    }
    t.s(["f", 0, ea], 788880);
    let el = (t, e) => e && "number" == typeof t ? e.transform(t) : t;
    t.s(["f", 0, el], 594521);
    let eh = {
            x: "translateX",
            y: "translateY",
            z: "translateZ",
            transformPerspective: "perspective"
        },
        eu = e.length;

    function ed(t, i, n) {
        let s = "",
            r = !0;
        for (let o = 0; o < eu; o++) {
            let a = e[o],
                l = t[a];
            if (void 0 === l) continue;
            let h = !0;
            if ("number" == typeof l) h = l === +!!a.startsWith("scale");
            else {
                let t = parseFloat(l);
                h = a.startsWith("scale") ? 1 === t : 0 === t
            }
            if (!h || n) {
                let t = el(l, $[a]);
                if (!h) {
                    r = !1;
                    let e = eh[a] || a;
                    s += `${e}(${t}) `
                }
                n && (i[a] = t)
            }
        }
        let o = t.pathRotation;
        return o && (r = !1, s += `rotate(${el(o,$.pathRotation)}) `), s = s.trim(), n ? s = n(i, r ? "" : s) : r && (s = "none"), s
    }

    function ec(t, e, n) {
        let {
            style: s,
            vars: r,
            transformOrigin: o
        } = t, a = !1, l = !1;
        for (let t in e) {
            let n = e[t];
            if (i.has(t)) {
                a = !0;
                continue
            }
            if (G(t)) {
                r[t] = n;
                continue
            } {
                let e = el(n, $[t]);
                t.startsWith("origin") ? (l = !0, o[t] = e) : s[t] = e
            }
        }
        if (!e.transform && (a || n ? s.transform = ed(e, t.transform, n) : s.transform && (s.transform = "none")), l) {
            let {
                originX: t = "50%",
                originY: e = "50%",
                originZ: i = 0
            } = o;
            s.transformOrigin = `${t} ${e} ${i}`
        }
    }
    t.s(["n", 0, ed, "V", 0, eh], 667661), t.s(["f", 0, ec], 405581);
    let ef = {
            offset: "stroke-dashoffset",
            array: "stroke-dasharray"
        },
        ep = {
            offset: "strokeDashoffset",
            array: "strokeDasharray"
        },
        em = ["transform", "opacity", "clipPath", "filter", "offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];

    function ev(t, e, i, n, s) {
        let {
            attrX: r,
            attrY: o,
            attrScale: a,
            pathLength: l,
            pathSpacing: h = 1,
            pathOffset: u = 0,
            ...d
        } = e;
        if (ec(t, d, n), i) {
            t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
            return
        }
        t.attrs = t.style, t.style = {};
        let {
            attrs: c,
            style: f
        } = t;
        for (let t of em) void 0 !== c[t] && (f[t] = c[t], delete c[t]);
        (f.transform || c.transformOrigin) && (f.transformOrigin = c.transformOrigin ? ? "50% 50%", delete c.transformOrigin), f.transform && (f.transformBox = (null == s ? void 0 : s.transformBox) ? ? "fill-box", delete c.transformBox), void 0 !== r && (c.x = r), void 0 !== o && (c.y = o), void 0 !== a && (c.scale = a), void 0 !== l && function(t, e) {
            let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                s = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
            t.pathLength = 1;
            let r = s ? ef : ep;
            t[r.offset] = `${-n}`, t[r.array] = `${e} ${i}`
        }(c, l, h, u, !1)
    }
    t.s(["d", 0, ev, "k", 0, em], 137451);
    let eg = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]),
        ey = t => "string" == typeof t && "svg" === t.toLowerCase();

    function ex(t, e, i, n) {
        let s, {
                style: r,
                vars: o
            } = e,
            a = t.style;
        for (s in r) a[s] = r[s];
        for (s in null == n || n.applyProjectionStyles(a, i), o) a.setProperty(s, o[s])
    }
    t.s(["f", 0, ey], 197656);
    let ew = {};

    function eT(t, e) {
        let {
            layout: n,
            layoutId: s
        } = e;
        return i.has(t) || t.startsWith("origin") || (n || void 0 !== s) && (!!ew[t] || "opacity" === t)
    }

    function eb(t, e, i) {
        let n = t.style,
            s = null == e ? void 0 : e.style,
            r = {};
        if (!n) return r;
        for (let e in n) {
            var o;
            (X(n[e]) || s && X(s[e]) || eT(e, t) || (null == i || null == (o = i.getValue(e)) ? void 0 : o.liveStyle) !== void 0) && (r[e] = n[e])
        }
        return r
    }

    function eS(t, i, n) {
        let s = eb(t, i, n);
        for (let n in t) "children" !== n && (X(t[n]) || X(i[n])) && (s[-1 !== e.indexOf(n) ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n] = t[n]);
        return s
    }
    t.s(["f", 0, ew], 625543), t.s(["f", 0, eT], 747281), t.s(["f", 0, eb], 97075), t.s(["f", 0, eS], 716945);
    class eP extends eo {
        getBaseTargetFromProps(t, e) {
            return i.has(e) ? super.getBaseTargetFromProps(t, e) ? ? tf(e) : t[e]
        }
        getDefaultValue(t) {
            return i.has(t) ? this.latestValues[t] ? ? tf(t) : void 0
        }
        readValueFromInstance(t, e) {
            if (i.has(e)) {
                let t = W(e);
                return t && t.default || 0
            }
            if (em.includes(e)) {
                let i = getComputedStyle(t)[e];
                if ("string" == typeof i && i) return i.trim()
            }
            return e = eg.has(e) ? e : ea(e), t.getAttribute(e)
        }
        scrapeMotionValuesFromProps(t, e, i) {
            return eS(t, e, i)
        }
        build(t, e, i) {
            ev(t, e, this.isSVGTag, i.transformTemplate, i.style)
        }
        renderInstance(t, e, i, n) {
            for (let i in ex(t, e, void 0, n), e.attrs) t.setAttribute(eg.has(i) ? i : ea(i), e.attrs[i])
        }
        mount(t) {
            this.isSVGTag = ey(t.tagName), super.mount(t)
        }
        constructor() {
            super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = H
        }
    }

    function eA(t) {
        let {
            top: e,
            left: i,
            right: n,
            bottom: s
        } = t;
        return {
            x: {
                min: i,
                max: n
            },
            y: {
                min: e,
                max: s
            }
        }
    }

    function eM(t, e) {
        if (!e) return t;
        let i = e({
                x: t.left,
                y: t.top
            }),
            n = e({
                x: t.right,
                y: t.bottom
            });
        return {
            top: i.y,
            left: i.x,
            bottom: n.y,
            right: n.x
        }
    }
    t.s(["X", 0, eA, "I", 0, function(t) {
        let {
            x: e,
            y: i
        } = t;
        return {
            top: i.min,
            right: e.max,
            bottom: i.max,
            left: e.min
        }
    }, "K", 0, eM], 152786);
    let eE = (t, e, i) => t + (e - t) * i;

    function eV(t) {
        return void 0 === t || 1 === t
    }

    function ek(t) {
        let {
            scale: e,
            scaleX: i,
            scaleY: n
        } = t;
        return !eV(e) || !eV(i) || !eV(n)
    }

    function eC(t) {
        return ek(t) || eD(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
    }

    function eD(t) {
        var e, i;
        return (e = t.x) && "0%" !== e || (i = t.y) && "0%" !== i
    }

    function eR(t, e, i) {
        return i + e * (t - i)
    }

    function eL(t, e, i, n, s) {
        return void 0 !== s && (t = eR(t, s, n)), eR(t, i, n) + e
    }

    function ej(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            n = arguments.length > 3 ? arguments[3] : void 0,
            s = arguments.length > 4 ? arguments[4] : void 0;
        t.min = eL(t.min, e, i, n, s), t.max = eL(t.max, e, i, n, s)
    }

    function eB(t, e) {
        let {
            x: i,
            y: n
        } = e;
        ej(t.x, i.translate, i.scale, i.originPoint), ej(t.y, n.translate, n.scale, n.originPoint)
    }

    function eF(t, e) {
        t.min += e, t.max += e
    }

    function eI(t, e, i, n) {
        let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .5,
            r = eE(t.min, t.max, s);
        ej(t, e, i, r, n)
    }

    function eO(t, e) {
        return "string" == typeof t ? parseFloat(t) / 100 * (e.max - e.min) : t
    }

    function eU(t, e, i) {
        let n = i ? ? t;
        eI(t.x, eO(e.x, n.x), e.scaleX, e.scale, e.originX), eI(t.y, eO(e.y, n.y), e.scaleY, e.scale, e.originY)
    }

    function e$(t, e) {
        return eA(eM(t.getBoundingClientRect(), e))
    }
    t.s(["f", 0, eE], 415924), t.s(["k", 0, eD, "N", 0, ek, "u", 0, eC], 158943), t.s(["z", 0, eB, "w", 0, function(t, e, i) {
        let n, s, r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            o = i.length;
        if (o) {
            e.x = e.y = 1;
            for (let l = 0; l < o; l++) {
                s = (n = i[l]).projectionDelta;
                let {
                    visualElement: o
                } = n.options;
                if ((!o || !o.props.style || "contents" !== o.props.style.display) && (r && n.options.layoutScroll && n.scroll && n !== n.root && (eF(t.x, -n.scroll.offset.x), eF(t.y, -n.scroll.offset.y)), s && (e.x *= s.x.scale, e.y *= s.y.scale, eB(t, s)), r && eC(n.latestValues))) {
                    var a;
                    eU(t, n.latestValues, null == (a = n.layout) ? void 0 : a.layoutBox)
                }
            }
            e.x < 1.0000000000001 && e.x > .999999999999 && (e.x = 1), e.y < 1.0000000000001 && e.y > .999999999999 && (e.y = 1)
        }
    }, "_", 0, eR, "k", 0, eU, "i", 0, eF], 161651), t.s(["r", 0, function(t, e, i) {
        let n = e$(t, i),
            {
                scroll: s
            } = e;
        return s && (eF(n.x, s.offset.x), eF(n.y, s.offset.y)), n
    }, "I", 0, e$], 892012);
    class eN extends eo {
        mount(t) {
            (0, Z.k)(!!t.style, "motion.create() components must forward their ref to a HTML or SVG element", "custom-component-ref"), super.mount(t)
        }
        readValueFromInstance(t, e) {
            var n;
            if (i.has(e)) return (null == (n = this.projection) ? void 0 : n.isProjecting) ? tf(e) : tm(t, e); {
                let i = window.getComputedStyle(t),
                    n = (G(e) ? i.getPropertyValue(e) : i[e]) || 0;
                return "string" == typeof n ? n.trim() : n
            }
        }
        measureInstanceViewportBox(t, e) {
            let {
                transformPagePoint: i
            } = e;
            return e$(t, i)
        }
        build(t, e, i) {
            ec(t, e, i.transformTemplate)
        }
        scrapeMotionValuesFromProps(t, e, i) {
            return eb(t, e, i)
        }
        constructor() {
            super(...arguments), this.type = "html", this.renderInstance = ex
        }
    }
    var eW = t.i(244835);
    let eY = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

    function ez(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (eY.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1
    }
    t.s(["f", 0, ez], 907293), t.s(["f", 0, (t, e) => e.isSVG ? ? ez(t) ? new eP(e) : new eN(e, {
        allowProjection: t !== eW.Fragment
    })], 981679)
}, 542218, 562763, t => {
    "use strict";
    var e = t.i(244835);
    t.s(["f", 0, function(t) {
        let i = (0, e.useRef)(null);
        return null === i.current && (i.current = t()), i.current
    }], 542218);
    let i = "u" > typeof window ? e.useLayoutEffect : e.useEffect;
    t.s(["f", 0, i], 562763)
}, 928058, 874906, 548092, t => {
    "use strict";
    var e = t.i(726505),
        i = t.i(247569);
    let n = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];

    function s(t, e) {
        let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                delta: 0,
                timestamp: 0,
                isProcessing: !1
            },
            r = !1,
            o = !0,
            a = () => r = !0,
            l = n.reduce((t, e) => (t[e] = function(t) {
                let e = new Set,
                    i = new Set,
                    n = !1,
                    s = !1,
                    r = new Set,
                    o = {
                        delta: 0,
                        timestamp: 0,
                        isProcessing: !1
                    };

                function a(e) {
                    r.has(e) && (i.add(e), t()), e(o)
                }
                let l = {
                    schedule: function(t) {
                        let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            a = o && n ? e : i;
                        return s && r.add(t), a.add(t), t
                    },
                    cancel: t => {
                        i.delete(t), r.delete(t)
                    },
                    process: t => {
                        if (o = t, n) {
                            s = !0;
                            return
                        }
                        n = !0;
                        let r = e;
                        e = i, i = r, e.forEach(a), e.clear(), n = !1, s && (s = !1, l.process(t))
                    }
                };
                return l
            }(a), t), {}),
            {
                setup: h,
                read: u,
                resolveKeyframes: d,
                preUpdate: c,
                update: f,
                preRender: p,
                render: m,
                postRender: v
            } = l,
            g = () => {
                let n = i.f.useManualTiming,
                    a = n ? s.timestamp : performance.now();
                r = !1, n || (s.delta = o ? 1e3 / 60 : Math.max(Math.min(a - s.timestamp, 40), 1)), s.timestamp = a, s.isProcessing = !0, h.process(s), u.process(s), d.process(s), c.process(s), f.process(s), p.process(s), m.process(s), v.process(s), s.isProcessing = !1, r && e && (o = !1, t(g))
            };
        return {
            schedule: n.reduce((e, i) => {
                let n = l[i];
                return e[i] = function(e) {
                    let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return !r && (r = !0, o = !0, s.isProcessing || t(g)), n.schedule(e, i, a)
                }, e
            }, {}),
            cancel: t => {
                for (let e = 0; e < n.length; e++) l[n[e]].cancel(t)
            },
            state: s,
            steps: l
        }
    }
    t.s(["f", 0, s], 874906);
    let r = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };
    t.s(["f", 0, r], 548092);
    let {
        schedule: o,
        cancel: a,
        steps: l
    } = s("u" > typeof requestAnimationFrame ? requestAnimationFrame : e.f, !0, r);
    t.s(["Y", 0, a, "y", 0, o, "q", 0, l], 928058)
}, 453898, 436790, t => {
    "use strict";
    let e = {
            current: null
        },
        i = {
            current: !1
        };
    t.s(["E", 0, i, "d", 0, e], 436790);
    let n = "u" > typeof window;
    t.s(["f", 0, function() {
        if (i.current = !0, n)
            if (window.matchMedia) {
                let t = window.matchMedia("(prefers-reduced-motion)"),
                    i = () => e.current = t.matches;
                t.addEventListener("change", i), i()
            } else e.current = !1
    }], 453898)
}, 969065, 729002, 598896, t => {
    "use strict";
    let e, i;
    var n = t.i(709295);

    function s(t) {
        return (0, n.f)(t) && "ownerSVGElement" in t
    }

    function r(t, e, i) {
        if (null == t) return [];
        if (t instanceof EventTarget) return [t];
        if ("string" == typeof t) {
            let n = document;
            e && (n = e.current);
            let s = (null == i ? void 0 : i[t]) ? ? n.querySelectorAll(t);
            return s ? Array.from(s) : []
        }
        return Array.from(t).filter(t => null != t)
    }
    t.s(["f", 0, s], 729002), t.s(["f", 0, r], 598896);
    let o = new WeakMap,
        a = (t, e, i) => (n, r) => r && r[0] ? r[0][t + "Size"] : s(n) && "getBBox" in n ? n.getBBox()[e] : n[i],
        l = a("inline", "width", "offsetWidth"),
        h = a("block", "height", "offsetHeight");

    function u(t) {
        var e;
        let {
            target: i,
            borderBoxSize: n
        } = t;
        null == (e = o.get(i)) || e.forEach(t => {
            t(i, {
                get width() {
                    return l(i, n)
                },
                get height() {
                    return h(i, n)
                }
            })
        })
    }

    function d(t) {
        t.forEach(u)
    }
    let c = new Set;
    t.s(["f", 0, function(t, n) {
        let s;
        return "function" == typeof t ? (c.add(t), i || (i = () => {
            let t = {
                get width() {
                    return window.innerWidth
                },
                get height() {
                    return window.innerHeight
                }
            };
            c.forEach(e => e(t))
        }, window.addEventListener("resize", i)), () => {
            c.delete(t), c.size || "function" != typeof i || (window.removeEventListener("resize", i), i = void 0)
        }) : (!e && "u" > typeof ResizeObserver && (e = new ResizeObserver(d)), (s = r(t)).forEach(t => {
            let i = o.get(t);
            i || (i = new Set, o.set(t, i)), i.add(n), null == e || e.observe(t)
        }), () => {
            s.forEach(t => {
                let i = o.get(t);
                null == i || i.delete(n), (null == i ? void 0 : i.size) || null == e || e.unobserve(t)
            })
        })
    }], 969065)
}, 561791, t => {
    "use strict";
    var e = t.i(709295);
    t.s(["f", 0, function(t) {
        return (0, e.f)(t) && "offsetHeight" in t && !("ownerSVGElement" in t)
    }])
}, 754055, t => {
    "use strict";
    t.s(["f", 0, (t, e, i) => i > e ? e : i < t ? t : i])
}, 220244, t => {
    "use strict";
    t.i(724670), t.s(["k", 0, () => {}, "w", 0, () => {}])
}, 247569, t => {
    "use strict";
    t.s(["f", 0, {}])
}, 709295, t => {
    "use strict";
    t.s(["f", 0, t => "object" == typeof t && null !== t])
}, 726505, t => {
    "use strict";
    t.s(["f", 0, t => t])
}, 271386, t => {
    "use strict";
    t.s(["f", 0, (t, e, i) => {
        let n = e - t;
        return n ? (i - t) / n : 1
    }])
}, 181730, 31611, 560646, 722084, 449958, 691285, 35644, 798266, 980455, t => {
    "use strict";
    let e;

    function i(t, e) {
        -1 === t.indexOf(e) && t.push(e)
    }

    function n(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1)
    }
    t.s(["I", 0, i, "a", 0, function(t, e, i) {
        let [...n] = t, s = e < 0 ? n.length + e : e;
        if (s >= 0 && s < n.length) {
            let t = i < 0 ? n.length + i : i,
                [s] = n.splice(e, 1);
            n.splice(t, 0, s)
        }
        return n
    }, "i", 0, n], 31611);
    class s {
        add(t) {
            return i(this.subscriptions, t), () => this.remove(t)
        }
        remove(t) {
            n(this.subscriptions, t)
        }
        notify(t, e, i) {
            let n = this.subscriptions.length;
            if (n)
                if (1 === n) this.subscriptions[0](t, e, i);
                else
                    for (let s = 0; s < n; s++) {
                        let n = this.subscriptions[s];
                        n && n(t, e, i)
                    }
        }
        getSize() {
            return this.subscriptions.length
        }
        clear() {
            this.subscriptions.length = 0
        }
        constructor() {
            this.subscriptions = []
        }
    }

    function r(t) {
        let e;
        return () => (void 0 === e && (e = t()), e)
    }
    t.s(["f", 0, s], 181730), t.s(["f", 0, r], 560646);
    let o = {};

    function a(t, e) {
        let i = r(t);
        return () => o[e] ? ? i()
    }
    t.s(["f", 0, a], 722084);
    let l = a(() => void 0 !== window.ScrollTimeline, "scrollTimeline"),
        h = a(() => void 0 !== window.ViewTimeline, "viewTimeline");
    t.s(["a", 0, l, "G", 0, h], 449958);
    var u = t.i(247569),
        d = t.i(548092);

    function c() {
        e = void 0
    }
    let f = {
        now: () => (void 0 === e && f.set(d.f.isProcessing || u.f.useManualTiming ? d.f.timestamp : performance.now()), e),
        set: t => {
            e = t, queueMicrotask(c)
        }
    };
    t.s(["f", 0, f], 691285);
    let {
        schedule: p,
        cancel: m
    } = (0, t.i(874906).f)(queueMicrotask, !1);
    t.s(["w", 0, m, "t", 0, p], 35644);
    let v = (t, e) => e ? 1e3 / e * t : 0;
    t.s(["f", 0, v], 798266);
    var g = t.i(928058);
    let y = {
        current: void 0
    };
    class x {
        setCurrent(t) {
            this.current = t, this.updatedAt = f.now(), null === this.canTrackVelocity && void 0 !== t && (this.canTrackVelocity = !isNaN(parseFloat(this.current)))
        }
        setPrevFrameValue() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.current;
            this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
        }
        onChange(t) {
            return this.on("change", t)
        }
        on(t, e) {
            var i;
            return "change" === t ? this.onChangeSubscribe(e) : ((i = this.events)[t] || (i[t] = new s)).add(e)
        }
        onChangeSubscribe(t) {
            let {
                events: e
            } = this;
            return e.change || this.changeSubscriber ? (e.change || (e.change = new s, e.change.add(this.changeSubscriber), this.changeSubscriber = void 0), e.change.add(t)) : this.changeSubscriber = t, () => {
                if (this.changeSubscriber === t) this.changeSubscriber = void 0;
                else {
                    var i;
                    null == (i = e.change) || i.remove(t)
                }
                this.stopIfUnobserved()
            }
        }
        stopIfUnobserved() {
            g.y.read(() => {
                var t;
                this.changeSubscriber || (null == (t = this.events.change) ? void 0 : t.getSize()) || this.stop()
            })
        }
        clearListeners() {
            for (let t in this.changeSubscriber = void 0, this.events) this.events[t].clear()
        }
        attach(t, e) {
            this.passiveEffect = t, this.stopPassiveEffect = e
        }
        set(t) {
            this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t)
        }
        setWithVelocity(t, e, i) {
            this.set(e), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - i
        }
        jump(t) {
            let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, e && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
        }
        dirty() {
            this.notifyChange()
        }
        notifyChange() {
            let {
                current: t,
                changeSubscriber: e
            } = this;
            if (e) e(t);
            else {
                var i;
                null == (i = this.events.change) || i.notify(t)
            }
        }
        addDependent(t) {
            this.dependents || (this.dependents = new Set), this.dependents.add(t)
        }
        removeDependent(t) {
            this.dependents && this.dependents.delete(t)
        }
        get() {
            var t, e;
            y.current && y.current.push(this);
            let i = null == (e = this.animation) || null == (t = e.liveValue) ? void 0 : t.call(e);
            return void 0 === i ? this.current : i
        }
        getCurrent() {
            return this.current
        }
        getPrevious() {
            return this.prev
        }
        getVelocity() {
            let t = f.now();
            if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t - this.updatedAt > 30) return 0;
            let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
            return v(parseFloat(this.current) - parseFloat(this.prevFrameValue), e)
        }
        start(t) {
            return this.stop(), new Promise(e => {
                var i;
                let n;
                this.hasAnimated = !0;
                let s = !1;
                n = t(() => {
                    var t;
                    s = !0, null == (t = this.events.animationComplete) || t.notify(), this.animation === n && this.clearAnimation(), e()
                }), s || (this.animation = n), null == (i = this.events.animationStart) || i.notify()
            })
        }
        stop() {
            this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
        }
        isAnimating() {
            return !!this.animation
        }
        clearAnimation() {
            this.animation = void 0
        }
        destroy() {
            var t, e;
            null == (t = this.dependents) || t.clear(), null == (e = this.events.destroy) || e.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
        }
        constructor(t, e = {}) {
            this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = t => {
                let e = f.now();
                if (this.updatedAt !== e && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(t), this.current !== this.prev && (this.notifyChange(), this.dependents))
                    for (let t of this.dependents) t.dirty()
            }, this.hasAnimated = !1, this.setCurrent(t), this.owner = e.owner
        }
    }
    t.s(["w", 0, x, "I", 0, y, "o", 0, function(t, e) {
        return new x(t, e)
    }], 980455)
}]);

//# debugId=d424b2a5-28ae-c4fb-8e1d-fd90a16b9901