;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "98c73229-7b01-0847-f074-e5a6b5e1b6f6")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 933463, 70659, e => {
    "use strict";
    var t = e.i(244835),
        r = Object.defineProperty,
        n = (e, t) => r(e, "name", {
            value: t,
            configurable: !0
        });

    function i(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
    }

    function o() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return e => {
            let r = !1,
                n = t.map(t => {
                    let n = i(t, e);
                    return r || "function" != typeof n || (r = !0), n
                });
            if (r) return () => {
                for (let e = 0; e < n.length; e++) {
                    let r = n[e];
                    "function" == typeof r ? r() : i(t[e], null)
                }
            }
        }
    }

    function l() {
        for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
        return t.useCallback(o(...r), r)
    }
    n(i, "setRef"), n(o, "composeRefs"), n(l, "useComposedRefs"), e.s(["f", 0, l], 70659);
    var s = Object.defineProperty,
        a = (e, t) => s(e, "name", {
            value: t,
            configurable: !0
        });

    function d(e) {
        let r = t.forwardRef((r, n) => {
            let {
                children: i,
                ...o
            } = r, s = null, a = !1, d = [];
            i = x(i), t.Children.forEach(i, e => {
                if (h(e)) {
                    var t;
                    a = !0;
                    let r = "child" in e.props ? e.props.child : e.props.children;
                    for (; y(r) && "function" == typeof S;) r = S(r._payload);
                    s = p(e, r), d.push(null == s || null == (t = s.props) ? void 0 : t.children)
                } else d.push(e)
            }), s ? s = t.cloneElement(s, void 0, d) : !a && 1 === t.Children.count(i) && t.isValidElement(i) && (s = i);
            let c = s ? m(s) : void 0,
                u = l(n, c);
            if (!s) {
                if (i || 0 === i) throw Error(a ? E(e) : j(e));
                return i
            }
            let f = v(o, s.props ?? {});
            return s.type !== t.Fragment && (f.ref = n ? u : c), t.cloneElement(s, f)
        });
        return r.displayName = `${e}.Slot`, r
    }
    a(d, "createSlot");
    var c = d("Slot"),
        u = Symbol.for("radix.slottable");

    function f(e) {
        let t = a(e => "child" in e ? e.children(e.child) : e.children, "Slottable");
        return t.displayName = `${e}.Slottable`, t.__radixId = u, t
    }
    a(f, "createSlottable");
    var p = a((e, r) => "child" in e.props ? t.isValidElement(r) ? t.cloneElement(r, void 0, e.props.children(r.props.children)) : null : t.isValidElement(r) ? r : null, "getSlottableElementFromSlottable");

    function v(e, t) {
        let r = { ...t
        };
        for (let n in t) {
            let i = e[n],
                o = t[n];
            /^on[A-Z]/.test(n) ? i && o ? r[n] = function() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                let n = o(...t);
                return i(...t), n
            } : i && (r[n] = i) : "style" === n ? r[n] = { ...i,
                ...o
            } : "className" === n ? r[n] = [i, o].filter(Boolean).join(" ") : "aria-describedby" === n && (r[n] = w(o, i))
        }
        return { ...e,
            ...r
        }
    }

    function m(e) {
        var t, r;
        let n = null == (t = Object.getOwnPropertyDescriptor(e.props, "ref")) ? void 0 : t.get,
            i = n && "isReactWarning" in n && n.isReactWarning;
        return i ? e.ref : (i = (n = null == (r = Object.getOwnPropertyDescriptor(e, "ref")) ? void 0 : r.get) && "isReactWarning" in n && n.isReactWarning) ? e.props.ref : e.props.ref || e.ref
    }

    function h(e) {
        return t.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === u
    }
    a(v, "mergeProps"), a(m, "getElementRef"), a(h, "isSlottable");
    var g = Symbol.for("react.lazy");

    function y(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === g && "_payload" in e && b(e._payload)
    }

    function b(e) {
        return "object" == typeof e && null !== e && "then" in e
    }

    function x(e) {
        let t = e;
        for (; y(t) && "function" == typeof S;) t = S(t._payload);
        return t
    }

    function w() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        let n = new Set;
        for (let e of t)
            if ("string" == typeof e)
                for (let t of String(e).trim().split(/\s+/)) t && n.add(t);
        return n.size > 0 ? Array.from(n).join(" ") : void 0
    }
    a(y, "isLazyComponent"), a(b, "isPromiseLike"), a(x, "useUnwrappedLazy"), a(w, "concatAriaDescribedby");
    var j = a(e => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"),
        E = a(e => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"),
        S = t[" use ".trim().toString()];
    e.s(["M", 0, c, "B", 0, d, "S", 0, f], 933463)
}, 580791, e => {
    "use strict";
    let t = (0, e.i(74580).f)("LoaderCircle", [
        ["path", {
            d: "M21 12a9 9 0 1 1-6.219-8.56",
            key: "13zald"
        }]
    ]);
    e.s(["f", 0, t], 580791)
}, 437097, e => {
    "use strict";
    let t = (0, e.i(74580).f)("TriangleAlert", [
        ["path", {
            d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
            key: "wmoenq"
        }],
        ["path", {
            d: "M12 9v4",
            key: "juzpu7"
        }],
        ["path", {
            d: "M12 17h.01",
            key: "p32p05"
        }]
    ]);
    e.s(["f", 0, t])
}, 38570, e => {
    "use strict";
    var t = e.i(437097);
    e.s(["f", () => t.f])
}, 144668, e => {
    "use strict";
    var t = e.i(729176),
        r = e.i(117841);
    e.s(["default", 0, function(e) {
        let {
            error: n,
            reset: i
        } = e;
        return (0, t.jsx)(r.f, {
            error: n,
            reset: i
        })
    }])
}, 117841, e => {
    "use strict";
    var t = e.i(729176),
        r = e.i(746251),
        n = e.i(244835),
        i = e.i(301187),
        o = e.i(38570),
        l = e.i(520133),
        s = e.i(519455),
        a = e.i(973292);
    e.s(["f", 0, function(e) {
        let {
            error: d,
            reset: c,
            body: u,
            showHome: f = !0
        } = e, p = (0, i.r)("states");
        return (0, n.useEffect)(() => {
            !d || (0, a.notifyIfNewVersion)(d) || (console.error(d), r.y(d))
        }, [d]), (0, t.jsxs)("div", {
            className: "flex min-h-[50vh] flex-col items-center justify-center px-6 py-16 text-center",
            children: [(0, t.jsx)("span", {
                className: "flex h-14 w-14 items-center justify-center rounded-full bg-destructive/10 text-destructive",
                children: (0, t.jsx)(o.f, {
                    className: "h-7 w-7"
                })
            }), (0, t.jsx)("h1", {
                className: "mt-4 text-xl font-semibold",
                children: p("errorTitle")
            }), (0, t.jsx)("p", {
                className: "mt-2 max-w-md text-sm text-muted-foreground",
                children: u ?? p("errorBody")
            }), (0, t.jsxs)("div", {
                className: "mt-6 flex flex-wrap items-center justify-center gap-3",
                children: [c ? (0, t.jsx)(s.K, {
                    onClick: c,
                    children: p("retry")
                }) : null, f ? (0, t.jsx)(s.K, {
                    asChild: !0,
                    variant: "outline",
                    children: (0, t.jsx)(l.L, {
                        href: "/",
                        children: p("goHome")
                    })
                }) : null]
            })]
        })
    }])
}, 973292, e => {
    "use strict";
    e.i(724670);
    var t = e.i(96987),
        r = e.i(301187),
        n = e.i(244835),
        i = e.i(800872);
    let o = "inviteeq:new-version";

    function l() {
        window.dispatchEvent(new Event(o))
    }

    function s(e) {
        return !!(0, t.unstable_isUnrecognizedActionError)(e) && (l(), !0)
    }
    e.s(["NewVersionPrompt", 0, function() {
        let e = (0, r.r)("common.newVersion");
        return (0, n.useEffect)(() => {
            let t = () => (0, i.c)(e("title"), {
                    id: o,
                    description: e("description"),
                    duration: 1 / 0,
                    action: {
                        label: e("reload"),
                        onClick: () => window.location.reload()
                    }
                }),
                r = e => s(e.reason);
            return window.addEventListener(o, t), window.addEventListener("unhandledrejection", r), () => {
                window.removeEventListener(o, t), window.removeEventListener("unhandledrejection", r)
            }
        }, [e]), (0, n.useEffect)(() => {
            let e = !1,
                t = async () => {
                    if (!e && "visible" === document.visibilityState) try {
                        let t = await fetch(`/api/version?r=${encodeURIComponent("8acdcd60741d4d58239951e096b06a5a041f6d88")}`, {
                            cache: "no-store"
                        });
                        if (!t.ok) return;
                        let {
                            current: r
                        } = await t.json();
                        !1 === r && (e = !0, l())
                    } catch {}
                },
                r = window.setInterval(t, 3e5);
            return document.addEventListener("visibilitychange", t), window.addEventListener("focus", t), () => {
                window.clearInterval(r), document.removeEventListener("visibilitychange", t), window.removeEventListener("focus", t)
            }
        }, []), null
    }, "notifyIfNewVersion", 0, s, "notifyNewVersion", 0, l])
}, 519455, 294237, e => {
    "use strict";
    var t = e.i(729176),
        r = e.i(244835),
        n = e.i(933463),
        i = e.i(7284);
    let o = e => "boolean" == typeof e ? `${e}` : 0 === e ? "0" : e,
        l = i.f,
        s = (e, t) => r => {
            var n;
            if ((null == t ? void 0 : t.variants) == null) return l(e, null == r ? void 0 : r.class, null == r ? void 0 : r.className);
            let {
                variants: i,
                defaultVariants: s
            } = t, a = Object.keys(i).map(e => {
                let t = null == r ? void 0 : r[e],
                    n = null == s ? void 0 : s[e];
                if (null === t) return null;
                let l = o(t) || o(n);
                return i[e][l]
            }), d = r && Object.entries(r).reduce((e, t) => {
                let [r, n] = t;
                return void 0 === n || (e[r] = n), e
            }, {});
            return l(e, a, null == t || null == (n = t.compoundVariants) ? void 0 : n.reduce((e, t) => {
                let {
                    class: r,
                    className: n,
                    ...i
                } = t;
                return Object.entries(i).every(e => {
                    let [t, r] = e;
                    return Array.isArray(r) ? r.includes({ ...s,
                        ...d
                    }[t]) : ({ ...s,
                        ...d
                    })[t] === r
                }) ? [...e, r, n] : e
            }, []), null == r ? void 0 : r.class, null == r ? void 0 : r.className)
        };
    e.s(["f", 0, s], 294237);
    var a = e.i(580791),
        d = e.i(975157);
    let c = s("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-[background-color,box-shadow,transform,color] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", {
            variants: {
                variant: {
                    default: "bg-primary text-primary-foreground shadow-primary hover:-translate-y-px hover:bg-primary hover:shadow-primary-lift",
                    sage: "bg-sage text-sage-foreground shadow-soft hover:-translate-y-px hover:shadow-card",
                    destructive: "bg-danger-bg text-danger hover:bg-danger hover:text-primary-foreground",
                    outline: "border border-border bg-card text-foreground shadow-soft hover:bg-tile",
                    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-mid",
                    ghost: "text-muted-foreground hover:bg-tile hover:text-foreground",
                    link: "text-primary underline-offset-4 hover:underline",
                    upgrade: "bg-gradient-to-br from-upgrade-from to-upgrade-to text-upgrade-foreground shadow-upgrade hover:-translate-y-px hover:shadow-upgrade-lift"
                },
                size: {
                    default: "h-10 px-[1.125rem] text-ui [&_svg]:size-4",
                    sm: "h-7 px-3.5 text-xs [&_svg]:size-3",
                    lg: "h-12 px-8 text-base [&_svg]:size-4",
                    icon: "h-10 w-10 [&_svg]:size-4"
                }
            },
            defaultVariants: {
                variant: "default",
                size: "default"
            }
        }),
        u = {
            autoComplete: "off"
        },
        f = r.forwardRef((e, r) => {
            let {
                className: i,
                variant: o,
                size: l,
                asChild: s = !1,
                loading: f = !1,
                disabled: p,
                children: v,
                ...m
            } = e, h = s ? n.M : "button", g = f && !s;
            return (0, t.jsx)(h, {
                className: (0, d.c)(c({
                    variant: o,
                    size: l,
                    className: i
                })),
                ref: r,
                disabled: s ? void 0 : p || f,
                "aria-busy": f || void 0,
                ...s ? void 0 : u,
                ...m,
                children: g ? (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(a.f, {
                        className: "h-4 w-4 animate-spin"
                    }), v]
                }) : v
            })
        });
    f.displayName = "Button", e.s(["K", 0, f, "i", 0, c, "n", 0, "h-8 px-2.5 sm:px-3 text-xs gap-1.5 font-medium shrink-0 [&_svg]:size-3.5"], 519455)
}]);

//# debugId=98c73229-7b01-0847-f074-e5a6b5e1b6f6