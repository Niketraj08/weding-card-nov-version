;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "46708403-0cfc-55b7-7d6c-a21e045c48e8")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 111362, 252733, e => {
    "use strict";
    var t, n = e.i(244835),
        r = e.i(317607),
        o = e.i(628686),
        i = e.i(70659),
        u = e.i(50339),
        a = Object.defineProperty,
        c = n[" useInsertionEffect ".trim().toString()];

    function l(e) {
        let t = n.useRef(e);
        return "function" == typeof c ? c(() => {
            t.current = e
        }) : (0, u.f)(() => {
            t.current = e
        }), n.useMemo(() => function() {
            for (var e, n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
            return null == (e = t.current) ? void 0 : e.call(t, ...r)
        }, [])
    }
    a(l, "name", {
        value: "useCallbackRef",
        configurable: !0
    }), e.s(["f", 0, l], 252733);
    var s = e.i(729176),
        d = Object.defineProperty,
        f = (e, t) => d(e, "name", {
            value: t,
            configurable: !0
        }),
        v = "dismissableLayer.update",
        m = n.createContext({
            layers: new Set,
            layersWithOutsidePointerEventsDisabled: new Set,
            branches: new Set,
            dismissableSurfaces: new Set
        }),
        p = n.forwardRef(f(function(e, u) {
            var a;
            let {
                disableOutsidePointerEvents: c = !1,
                deferPointerDownOutside: d = !1,
                onEscapeKeyDown: p,
                onPointerDownOutside: h,
                onFocusOutside: y,
                onInteractOutside: w,
                onDismiss: S,
                ...C
            } = e, O = n.useContext(m), [N, P] = n.useState(null), R = (null == N ? void 0 : N.ownerDocument) ?? (null == (a = globalThis) ? void 0 : a.document), [, L] = n.useState({}), T = (0, i.f)(u, P), k = Array.from(O.layers), [A] = [...O.layersWithOutsidePointerEventsDisabled].slice(-1), M = A ? k.indexOf(A) : -1, D = N ? k.indexOf(N) : -1, I = O.layersWithOutsidePointerEventsDisabled.size > 0, F = D >= M, x = n.useRef(!1), W = b(e => {
                null == h || h(e), null == w || w(e), e.defaultPrevented || null == S || S()
            }, {
                ownerDocument: R,
                deferPointerDownOutside: d,
                isDeferredPointerDownOutsideRef: x,
                dismissableSurfaces: O.dismissableSurfaces,
                shouldHandlePointerDownOutside: n.useCallback(e => {
                    if (!(e instanceof Node)) return !1;
                    let t = [...O.branches].some(t => t.contains(e));
                    return F && !t
                }, [O.branches, F])
            }), j = g(e => {
                if (d && x.current) return;
                let t = e.target;
                ![...O.branches].some(e => e.contains(t)) && (null == y || y(e), null == w || w(e), e.defaultPrevented || null == S || S())
            }, R), _ = !!N && D === k.length - 1, B = l(e => {
                "Escape" === e.key && (null == p || p(e), !e.defaultPrevented && S && (e.preventDefault(), S()))
            });
            return n.useEffect(() => {
                if (_) return R.addEventListener("keydown", B, {
                    capture: !0
                }), () => R.removeEventListener("keydown", B, {
                    capture: !0
                })
            }, [R, _, B]), n.useEffect(() => {
                if (N) return c && (0 === O.layersWithOutsidePointerEventsDisabled.size && (t = R.body.style.pointerEvents, R.body.style.pointerEvents = "none"), O.layersWithOutsidePointerEventsDisabled.add(N)), O.layers.add(N), E(), () => {
                    c && (O.layersWithOutsidePointerEventsDisabled.delete(N), 0 === O.layersWithOutsidePointerEventsDisabled.size && (R.body.style.pointerEvents = t))
                }
            }, [N, R, c, O]), n.useEffect(() => () => {
                N && (O.layers.delete(N), O.layersWithOutsidePointerEventsDisabled.delete(N), E())
            }, [N, O]), n.useEffect(() => {
                let e = f(() => L({}), "handleUpdate");
                return document.addEventListener(v, e), () => document.removeEventListener(v, e)
            }, []), (0, s.jsx)(o.V.div, { ...C,
                ref: T,
                style: {
                    pointerEvents: I ? F ? "auto" : "none" : void 0,
                    ...e.style
                },
                onFocusCapture: (0, r.f)(e.onFocusCapture, j.onFocusCapture),
                onBlurCapture: (0, r.f)(e.onBlurCapture, j.onBlurCapture),
                onPointerDownCapture: (0, r.f)(e.onPointerDownCapture, W.onPointerDownCapture)
            })
        }, "DismissableLayer"));

    function h() {
        let e = n.useContext(m),
            [t, r] = n.useState(null);
        return n.useEffect(() => {
            if (t) return e.dismissableSurfaces.add(t), () => {
                e.dismissableSurfaces.delete(t)
            }
        }, [t, e.dismissableSurfaces]), r
    }
    f(h, "useDismissableLayerSurface");
    var y = f(() => !0, "IS_TRUE");

    function b(e, t) {
        var r;
        let {
            ownerDocument: o = null == (r = globalThis) ? void 0 : r.document,
            deferPointerDownOutside: i = !1,
            isDeferredPointerDownOutsideRef: u,
            dismissableSurfaces: a,
            shouldHandlePointerDownOutside: c = y
        } = t, s = l(e), d = n.useRef(!1), v = n.useRef(!1), m = n.useRef(new Map), p = n.useRef(() => {});
        return n.useEffect(() => {
            function e() {
                v.current = !1, u.current = !1, m.current.clear()
            }

            function t() {
                return Array.from(m.current.values()).some(Boolean)
            }

            function n(e) {
                if (!v.current) return;
                let t = e.target;
                t instanceof Node && [...a].some(e => e.contains(t)) || m.current.set(e.type, !0), "click" === e.type && window.setTimeout(() => {
                    v.current && p.current()
                }, 0)
            }

            function r(e) {
                v.current && m.current.set(e.type, !1)
            }
            f(e, "resetOutsideInteraction"), f(t, "isOutsideInteractionIntercepted"), f(n, "handleInteractionCapture"), f(r, "handleInteractionBubble");
            let l = f(n => {
                    if (n.target && !d.current) {
                        let r = function() {
                            o.removeEventListener("click", p.current);
                            let n = t();
                            e(), n || w("dismissableLayer.pointerDownOutside", s, a, {
                                discrete: !0
                            })
                        };
                        if (f(r, "handleAndDispatchPointerDownOutsideEvent"), !c(n.target)) {
                            o.removeEventListener("click", p.current), e(), d.current = !1;
                            return
                        }
                        let a = {
                            originalEvent: n
                        };
                        v.current = !0, u.current = i && 0 === n.button, m.current.clear(), i && 0 === n.button ? (o.removeEventListener("click", p.current), p.current = r, o.addEventListener("click", p.current, {
                            once: !0
                        })) : r()
                    } else o.removeEventListener("click", p.current), e();
                    d.current = !1
                }, "handlePointerDown"),
                h = ["pointerup", "mousedown", "mouseup", "touchstart", "touchend", "click"];
            for (let e of h) o.addEventListener(e, n, !0), o.addEventListener(e, r);
            let y = window.setTimeout(() => {
                o.addEventListener("pointerdown", l)
            }, 0);
            return () => {
                for (let e of (window.clearTimeout(y), o.removeEventListener("pointerdown", l), o.removeEventListener("click", p.current), h)) o.removeEventListener(e, n, !0), o.removeEventListener(e, r)
            }
        }, [o, s, i, u, a, c]), {
            onPointerDownCapture: f(() => d.current = !0, "onPointerDownCapture")
        }
    }

    function g(e) {
        var t;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null == (t = globalThis) ? void 0 : t.document,
            o = l(e),
            i = n.useRef(!1);
        return n.useEffect(() => {
            let e = f(e => {
                e.target && !i.current && w("dismissableLayer.focusOutside", o, {
                    originalEvent: e
                }, {
                    discrete: !1
                })
            }, "handleFocus");
            return r.addEventListener("focusin", e), () => r.removeEventListener("focusin", e)
        }, [r, o]), {
            onFocusCapture: f(() => i.current = !0, "onFocusCapture"),
            onBlurCapture: f(() => i.current = !1, "onBlurCapture")
        }
    }

    function E() {
        let e = new CustomEvent(v);
        document.dispatchEvent(e)
    }

    function w(e, t, n, r) {
        let {
            discrete: i
        } = r, u = n.originalEvent.target, a = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
        });
        t && u.addEventListener(e, t, {
            once: !0
        }), i ? (0, o.u)(u, a) : u.dispatchEvent(a)
    }
    f(b, "usePointerDownOutside"), f(g, "useFocusOutside"), f(E, "dispatchUpdate"), f(w, "handleAndDispatchCustomEvent"), e.s(["V", 0, p, "y", 0, h], 111362)
}, 829255, e => {
    "use strict";
    var t = e.i(244835),
        n = Object.defineProperty,
        r = (e, t) => n(e, "name", {
            value: t,
            configurable: !0
        }),
        o = 0,
        i = null;

    function u() {
        t.useEffect(() => {
            i || (i = {
                start: a(),
                end: a()
            });
            let {
                start: e,
                end: t
            } = i;
            return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), o++, () => {
                1 === o && (null == i || i.start.remove(), null == i || i.end.remove(), i = null), o = Math.max(0, o - 1)
            }
        }, [])
    }

    function a() {
        let e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
    }
    r(function(e) {
        return u(), e.children
    }, "FocusGuards"), r(u, "useFocusGuards"), r(a, "createFocusGuard"), e.s(["f", 0, u])
}, 136614, 331524, e => {
    "use strict";
    var t = e.i(244835),
        n = e.i(70659),
        r = e.i(628686),
        o = e.i(252733),
        i = e.i(729176),
        u = Object.defineProperty,
        a = (e, t) => u(e, "name", {
            value: t,
            configurable: !0
        }),
        c = "focusScope.autoFocusOnMount",
        l = "focusScope.autoFocusOnUnmount",
        s = {
            bubbles: !1,
            cancelable: !0
        },
        d = t.forwardRef(a(function(e, u) {
            let {
                loop: d = !1,
                trapped: f = !1,
                branches: v,
                onMountAutoFocus: m,
                onUnmountAutoFocus: p,
                ...g
            } = e, [E, w] = t.useState(null), O = (0, o.f)(m), N = (0, o.f)(p), R = t.useRef(null), L = (0, n.f)(u, w), T = t.useRef(v);
            t.useEffect(() => {
                T.current = v
            });
            let k = t.useCallback(e => {
                    var t;
                    return !!e && (null != E && !!E.contains(e) || !!(null == (t = T.current) ? void 0 : t.some(t => t.contains(e))))
                }, [E]),
                A = t.useRef({
                    paused: !1,
                    pause() {
                        this.paused = !0
                    },
                    resume() {
                        this.paused = !1
                    }
                }).current;
            t.useEffect(() => {
                if (f) {
                    let e = function(e) {
                            if (A.paused || !E) return;
                            let t = e.target;
                            k(t) ? R.current = t : S(R.current, {
                                select: !0
                            })
                        },
                        t = function(e) {
                            if (A.paused || !E) return;
                            let t = e.relatedTarget;
                            null !== t && (k(t) || S(R.current, {
                                select: !0
                            }))
                        },
                        n = function(e) {
                            if (document.activeElement === document.body)
                                for (let t of e) t.removedNodes.length > 0 && S(E)
                        };
                    a(e, "handleFocusIn"), a(t, "handleFocusOut"), a(n, "handleMutations"), document.addEventListener("focusin", e), document.addEventListener("focusout", t);
                    let r = new MutationObserver(n);
                    return E && r.observe(E, {
                        childList: !0,
                        subtree: !0
                    }), () => {
                        document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect()
                    }
                }
            }, [f, E, A.paused, k]), t.useEffect(() => {
                if (E) {
                    C.add(A);
                    let e = document.activeElement;
                    if (!E.contains(e)) {
                        let t = new CustomEvent(c, s);
                        E.addEventListener(c, O), E.dispatchEvent(t), t.defaultPrevented || (h(P(b(E)), {
                            select: !0
                        }), document.activeElement === e && S(E))
                    }
                    return () => {
                        E.removeEventListener(c, O);
                        let t = E.ownerDocument,
                            n = CustomEvent;
                        setTimeout(() => {
                            let r = new n(l, s);
                            E.addEventListener(l, N), E.dispatchEvent(r), r.defaultPrevented || S(e ?? t.body, {
                                select: !0
                            }), E.removeEventListener(l, N), C.remove(A)
                        }, 0)
                    }
                }
            }, [E, O, N, A]);
            let M = t.useCallback(e => {
                if (!d && !f || A.paused) return;
                let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                    n = document.activeElement;
                if (t && n) {
                    let t = e.currentTarget,
                        [r, o] = y(t);
                    r && o ? e.shiftKey || n !== o ? e.shiftKey && n === r && (e.preventDefault(), d && S(o, {
                        select: !0
                    })) : (e.preventDefault(), d && S(r, {
                        select: !0
                    })) : n === t && e.preventDefault()
                }
            }, [d, f, A.paused]);
            return (0, i.jsx)(r.V.div, {
                tabIndex: -1,
                ...g,
                ref: L,
                onKeyDown: M
            })
        }, "FocusScope")),
        f = t.createContext(null);

    function v(e) {
        let {
            registry: t,
            children: n
        } = e;
        return t ? (0, i.jsx)(f.Provider, {
            value: t,
            children: n
        }) : n
    }

    function m() {
        let [e, n] = t.useState([]);
        return {
            nodes: e,
            registry: t.useMemo(() => ({
                add: a(e => n(t => t.includes(e) ? t : [...t, e]), "add"),
                remove: a(e => n(t => t.filter(t => t !== e)), "remove")
            }), [])
        }
    }

    function p(e) {
        let n = t.useContext(f);
        t.useEffect(() => {
            if (e && n) return n.add(e), () => n.remove(e)
        }, [e, n])
    }

    function h(e) {
        let {
            select: t = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = document.activeElement;
        for (let r of e)
            if (S(r, {
                    select: t
                }), document.activeElement !== n) return
    }

    function y(e) {
        let t = b(e);
        return [g(t, e), g(t.reverse(), e)]
    }

    function b(e) {
        let t = [],
            n = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: a(e => {
                    let t = "INPUT" === e.tagName && "hidden" === e.type;
                    return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                }, "acceptNode")
            });
        for (; n.nextNode();) t.push(n.currentNode);
        return t
    }

    function g(e, t) {
        let n = "function" == typeof t.checkVisibility && t.checkVisibility({
            checkVisibilityCSS: !0
        });
        for (let r of e)
            if (!(n ? !r.checkVisibility({
                    checkVisibilityCSS: !0
                }) : E(r, {
                    upTo: t
                }))) return r
    }

    function E(e, t) {
        let {
            upTo: n
        } = t;
        if ("hidden" === getComputedStyle(e).visibility) return !0;
        for (; e && (void 0 === n || e !== n);) {
            if ("none" === getComputedStyle(e).display) return !0;
            e = e.parentElement
        }
        return !1
    }

    function w(e) {
        return "INPUT" === e.tagName && "function" == typeof e.select
    }

    function S(e) {
        let {
            select: t = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (e && e.focus) {
            let n = (e.ownerDocument ?? document).activeElement;
            e.focus({
                preventScroll: !0
            }), e !== n && w(e) && t && e.select()
        }
    }
    a(v, "FocusScopeBranchProvider"), a(m, "useFocusScopeBranchRegistry"), a(p, "useFocusScopeBranch"), a(h, "focusFirst"), a(y, "getTabbableEdges"), a(b, "getTabbableCandidates"), a(g, "findVisible"), a(E, "isHidden"), a(w, "isSelectableInput"), a(S, "focus");
    var C = O();

    function O() {
        let e = [];
        return {
            add(t) {
                let n = e[0];
                t !== n && (null == n || n.pause()), (e = N(e, t)).unshift(t)
            },
            remove(t) {
                var n;
                null == (n = (e = N(e, t))[0]) || n.resume()
            }
        }
    }

    function N(e, t) {
        let n = [...e],
            r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n
    }

    function P(e) {
        return e.filter(e => "A" !== e.tagName)
    }
    a(O, "createFocusScopesStack"), a(N, "arrayRemove"), a(P, "removeLinks"), e.s(["v", 0, d, "l", 0, v, "i", 0, p, "D", 0, m], 136614);
    var R = e.i(316616),
        L = e.i(50339),
        T = Object.defineProperty,
        k = t.forwardRef(T(function(e, n) {
            var o, u;
            let {
                container: a,
                ...c
            } = e, [l, s] = t.useState(!1);
            (0, L.f)(() => s(!0), []);
            let d = a || l && (null == (u = globalThis) || null == (o = u.document) ? void 0 : o.body);
            return d ? R.createPortal((0, i.jsx)(r.V.div, { ...c,
                ref: n
            }), d) : null
        }, "name", {
            value: "Portal",
            configurable: !0
        }));
    e.s(["f", 0, k], 331524)
}, 7100, e => {
    "use strict";
    var t = e.i(244835),
        n = e.i(50339),
        r = Object.defineProperty,
        o = t[" useId ".trim().toString()] || (() => void 0),
        i = 0;

    function u(e) {
        let [r, u] = t.useState(o());
        return (0, n.f)(() => {
            e || u(e => e ?? String(i++))
        }, [e]), e || (r ? `radix-${r}` : "")
    }
    r(u, "name", {
        value: "useId",
        configurable: !0
    }), e.s(["f", 0, u])
}, 83580, e => {
    "use strict";
    var t = e.i(244835),
        n = e.i(50339),
        r = Object.defineProperty,
        o = (e, t) => r(e, "name", {
            value: t,
            configurable: !0
        });

    function i(e, n) {
        return t.useReducer((e, t) => n[e][t] ?? e, e)
    }
    o(i, "useStateMachine");
    var u = o(e => {
        let {
            present: n,
            children: r
        } = e, o = a(n), i = "function" == typeof r ? r({
            present: o.isPresent
        }) : t.Children.only(r), u = l(o.ref, d(i));
        return "function" == typeof r || o.isPresent ? t.cloneElement(i, {
            ref: u
        }) : null
    }, "Presence");

    function a(e) {
        let [r, u] = t.useState(), a = t.useRef(null), c = t.useRef(e), l = t.useRef("none"), d = t.useRef(void 0), [f, v] = i(e ? "mounted" : "unmounted", {
            mounted: {
                UNMOUNT: "unmounted",
                ANIMATION_OUT: "unmountSuspended"
            },
            unmountSuspended: {
                MOUNT: "mounted",
                ANIMATION_END: "unmounted"
            },
            unmounted: {
                MOUNT: "mounted"
            }
        });
        return t.useEffect(() => {
            "mounted" === f ? (l.current = d.current ?? s(a.current), d.current = void 0) : l.current = "none"
        }, [f]), (0, n.f)(() => {
            let t = a.current,
                n = c.current;
            if (n !== e) {
                let r = l.current,
                    o = s(t);
                e ? (d.current = o, v("MOUNT")) : "none" === o || (null == t ? void 0 : t.display) === "none" ? v("UNMOUNT") : n && r !== o ? v("ANIMATION_OUT") : v("UNMOUNT"), c.current = e
            }
        }, [e, v]), (0, n.f)(() => {
            if (r) {
                let e, t = r.ownerDocument.defaultView ?? window,
                    n = o(n => {
                        let o = s(a.current).includes(CSS.escape(n.animationName));
                        if (n.target === r && o && (v("ANIMATION_END"), !c.current)) {
                            let n = r.style.animationFillMode;
                            r.style.animationFillMode = "forwards", e = t.setTimeout(() => {
                                "forwards" === r.style.animationFillMode && (r.style.animationFillMode = n)
                            })
                        }
                    }, "handleAnimationEnd"),
                    i = o(e => {
                        e.target === r && (l.current = s(a.current))
                    }, "handleAnimationStart");
                return r.addEventListener("animationstart", i), r.addEventListener("animationcancel", n), r.addEventListener("animationend", n), () => {
                    t.clearTimeout(e), r.removeEventListener("animationstart", i), r.removeEventListener("animationcancel", n), r.removeEventListener("animationend", n)
                }
            }
            v("ANIMATION_END")
        }, [r, v]), {
            isPresent: ["mounted", "unmountSuspended"].includes(f),
            ref: t.useCallback(e => {
                if (e) {
                    let t = getComputedStyle(e);
                    a.current = t, d.current = s(t)
                } else a.current = null;
                u(e)
            }, [])
        }
    }

    function c(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
    }

    function l() {
        for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
        let o = t.useRef(n);
        return o.current = n, t.useCallback(e => {
            let t = o.current,
                n = !1,
                r = t.map(t => {
                    let r = c(t, e);
                    return n || "function" != typeof r || (n = !0), r
                });
            if (n) return () => {
                for (let e = 0; e < r.length; e++) {
                    let n = r[e];
                    "function" == typeof n ? n() : c(t[e], null)
                }
            }
        }, [])
    }

    function s(e) {
        return (null == e ? void 0 : e.animationName) || "none"
    }

    function d(e) {
        var t, n;
        let r = null == (t = Object.getOwnPropertyDescriptor(e.props, "ref")) ? void 0 : t.get,
            o = r && "isReactWarning" in r && r.isReactWarning;
        return o ? e.ref : (o = (r = null == (n = Object.getOwnPropertyDescriptor(e, "ref")) ? void 0 : n.get) && "isReactWarning" in r && r.isReactWarning) ? e.props.ref : e.props.ref || e.ref
    }
    o(a, "usePresence"), o(c, "setRef"), o(l, "useStableComposedRefs"), o(s, "getAnimationName"), o(d, "getElementRef"), e.s(["f", 0, u])
}, 73772, e => {
    "use strict";
    var t = new WeakMap,
        n = new WeakMap,
        r = {},
        o = 0,
        i = function(e) {
            return e && (e.host || i(e.parentNode))
        },
        u = function(e, u, a, c) {
            var l = (Array.isArray(e) ? e : [e]).map(function(e) {
                if (u.contains(e)) return e;
                var t = i(e);
                return t && u.contains(t) ? t : (console.error("aria-hidden", e, "in not contained inside", u, ". Doing nothing"), null)
            }).filter(function(e) {
                return !!e
            });
            r[a] || (r[a] = new WeakMap);
            var s = r[a],
                d = [],
                f = new Set,
                v = new Set(l),
                m = function(e) {
                    !e || f.has(e) || (f.add(e), m(e.parentNode))
                };
            l.forEach(m);
            var p = function(e) {
                !e || v.has(e) || Array.prototype.forEach.call(e.children, function(e) {
                    if (f.has(e)) p(e);
                    else try {
                        var r = e.getAttribute(c),
                            o = null !== r && "false" !== r,
                            i = (t.get(e) || 0) + 1,
                            u = (s.get(e) || 0) + 1;
                        t.set(e, i), s.set(e, u), d.push(e), 1 === i && o && n.set(e, !0), 1 === u && e.setAttribute(a, "true"), o || e.setAttribute(c, "true")
                    } catch (t) {
                        console.error("aria-hidden: cannot operate on ", e, t)
                    }
                })
            };
            return p(u), f.clear(), o++,
                function() {
                    d.forEach(function(e) {
                        var r = t.get(e) - 1,
                            o = s.get(e) - 1;
                        t.set(e, r), s.set(e, o), r || (n.has(e) || e.removeAttribute(c), n.delete(e)), o || e.removeAttribute(a)
                    }), --o || (t = new WeakMap, t = new WeakMap, n = new WeakMap, r = {})
                }
        };
    e.s(["f", 0, function(e, t, n) {
        void 0 === n && (n = "data-aria-hidden");
        var r = Array.from(Array.isArray(e) ? e : [e]),
            o = t || ("u" < typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
        return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), u(r, o, n, "aria-hidden")) : function() {
            return null
        }
    }])
}, 813579, e => {
    "use strict";
    var t, n, r, o, i, u, a, c = function() {
        return (c = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }).apply(this, arguments)
    };

    function l(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) 0 > t.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
        return n
    }
    var s = ("function" == typeof SuppressedError && SuppressedError, e.i(244835)),
        d = "right-scroll-bar-position",
        f = "width-before-scroll-bar";

    function v(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e
    }
    var m = "u" > typeof window ? s.useLayoutEffect : s.useEffect,
        p = new WeakMap,
        h = (void 0 === t && (t = {}), (void 0 === n && (n = function(e) {
            return e
        }), r = [], o = !1, i = {
            read: function() {
                if (o) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                return r.length ? r[r.length - 1] : null
            },
            useMedium: function(e) {
                var t = n(e, o);
                return r.push(t),
                    function() {
                        r = r.filter(function(e) {
                            return e !== t
                        })
                    }
            },
            assignSyncMedium: function(e) {
                for (o = !0; r.length;) {
                    var t = r;
                    r = [], t.forEach(e)
                }
                r = {
                    push: function(t) {
                        return e(t)
                    },
                    filter: function() {
                        return r
                    }
                }
            },
            assignMedium: function(e) {
                o = !0;
                var t = [];
                if (r.length) {
                    var n = r;
                    r = [], n.forEach(e), t = r
                }
                var i = function() {
                        var n = t;
                        t = [], n.forEach(e)
                    },
                    u = function() {
                        return Promise.resolve().then(i)
                    };
                u(), r = {
                    push: function(e) {
                        t.push(e), u()
                    },
                    filter: function(e) {
                        return t = t.filter(e), r
                    }
                }
            }
        }).options = c({
            async: !0,
            ssr: !1
        }, t), i),
        y = function() {},
        b = s.forwardRef(function(e, t) {
            var n, r, o, i, u = s.useRef(null),
                a = s.useState({
                    onScrollCapture: y,
                    onWheelCapture: y,
                    onTouchMoveCapture: y
                }),
                d = a[0],
                f = a[1],
                b = e.forwardProps,
                g = e.children,
                E = e.className,
                w = e.removeScrollBar,
                S = e.enabled,
                C = e.shards,
                O = e.sideCar,
                N = e.noRelative,
                P = e.noIsolation,
                R = e.inert,
                L = e.allowPinchZoom,
                T = e.as,
                k = e.gapMode,
                A = l(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
                M = (n = [u, t], r = function(e) {
                    return n.forEach(function(t) {
                        return v(t, e)
                    })
                }, (o = (0, s.useState)(function() {
                    return {
                        value: null,
                        callback: r,
                        facade: {
                            get current() {
                                return o.value
                            },
                            set current(e) {
                                var t = o.value;
                                t !== e && (o.value = e, o.callback(e, t))
                            }
                        }
                    }
                })[0]).callback = r, i = o.facade, m(function() {
                    var e = p.get(i);
                    if (e) {
                        var t = new Set(e),
                            r = new Set(n),
                            o = i.current;
                        t.forEach(function(e) {
                            r.has(e) || v(e, null)
                        }), r.forEach(function(e) {
                            t.has(e) || v(e, o)
                        })
                    }
                    p.set(i, n)
                }, [n]), i),
                D = c(c({}, A), d);
            return s.createElement(s.Fragment, null, S && s.createElement(O, {
                sideCar: h,
                removeScrollBar: w,
                shards: C,
                noRelative: N,
                noIsolation: P,
                inert: R,
                setCallbacks: f,
                allowPinchZoom: !!L,
                lockRef: u,
                gapMode: k
            }), b ? s.cloneElement(s.Children.only(g), c(c({}, D), {
                ref: M
            })) : s.createElement(void 0 === T ? "div" : T, c({}, D, {
                className: E,
                ref: M
            }), g))
        });
    b.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
    }, b.classNames = {
        fullWidth: f,
        zeroRight: d
    };
    var g = function(e) {
        var t = e.sideCar,
            n = l(e, ["sideCar"]);
        if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
        var r = t.read();
        if (!r) throw Error("Sidecar medium not found");
        return s.createElement(r, c({}, n))
    };
    g.isSideCarExport = !0;
    var E = function() {
            var e = 0,
                t = null;
            return {
                add: function(n) {
                    if (0 == e && (t = function() {
                            if (!document) return null;
                            var e = document.createElement("style");
                            e.type = "text/css";
                            var t = a || ("u" > typeof __webpack_nonce__ ? __webpack_nonce__ : void 0);
                            return t && e.setAttribute("nonce", t), e
                        }())) {
                        var r, o;
                        (r = t).styleSheet ? r.styleSheet.cssText = n : r.appendChild(document.createTextNode(n)), o = t, (document.head || document.getElementsByTagName("head")[0]).appendChild(o)
                    }
                    e++
                },
                remove: function() {
                    --e || !t || (t.parentNode && t.parentNode.removeChild(t), t = null)
                }
            }
        },
        w = function() {
            var e = E();
            return function(t, n) {
                s.useEffect(function() {
                    return e.add(t),
                        function() {
                            e.remove()
                        }
                }, [t && n])
            }
        },
        S = function() {
            var e = w();
            return function(t) {
                return e(t.styles, t.dynamic), null
            }
        },
        C = {
            left: 0,
            top: 0,
            right: 0,
            gap: 0
        },
        O = function(e) {
            return parseInt(e || "", 10) || 0
        },
        N = function(e) {
            var t = window.getComputedStyle(document.body),
                n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                r = t["padding" === e ? "paddingTop" : "marginTop"],
                o = t["padding" === e ? "paddingRight" : "marginRight"];
            return [O(n), O(r), O(o)]
        },
        P = function(e) {
            if (void 0 === e && (e = "margin"), "u" < typeof window) return C;
            var t = N(e),
                n = document.documentElement.clientWidth,
                r = window.innerWidth;
            return {
                left: t[0],
                top: t[1],
                right: t[2],
                gap: Math.max(0, r - n + t[2] - t[0])
            }
        },
        R = S(),
        L = "data-scroll-locked",
        T = function(e, t, n, r) {
            var o = e.left,
                i = e.top,
                u = e.right,
                a = e.gap;
            return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(a, "px ").concat(r, ";\n  }\n  body[").concat(L, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(u, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(a, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(a, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(d, " {\n    right: ").concat(a, "px ").concat(r, ";\n  }\n  \n  .").concat(f, " {\n    margin-right: ").concat(a, "px ").concat(r, ";\n  }\n  \n  .").concat(d, " .").concat(d, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(f, " .").concat(f, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(L, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(a, "px;\n  }\n")
        },
        k = function() {
            var e = parseInt(document.body.getAttribute(L) || "0", 10);
            return isFinite(e) ? e : 0
        },
        A = function() {
            s.useEffect(function() {
                return document.body.setAttribute(L, (k() + 1).toString()),
                    function() {
                        var e = k() - 1;
                        e <= 0 ? document.body.removeAttribute(L) : document.body.setAttribute(L, e.toString())
                    }
            }, [])
        },
        M = function(e) {
            var t = e.noRelative,
                n = e.noImportant,
                r = e.gapMode,
                o = void 0 === r ? "margin" : r;
            A();
            var i = s.useMemo(function() {
                return P(o)
            }, [o]);
            return s.createElement(R, {
                styles: T(i, !t, o, n ? "" : "!important")
            })
        },
        D = !1;
    if ("u" > typeof window) try {
        var I = Object.defineProperty({}, "passive", {
            get: function() {
                return D = !0, !0
            }
        });
        window.addEventListener("test", I, I), window.removeEventListener("test", I, I)
    } catch (e) {
        D = !1
    }
    var F = !!D && {
            passive: !1
        },
        x = function(e, t) {
            if (!(e instanceof Element)) return !1;
            var n = window.getComputedStyle(e);
            return "hidden" !== n[t] && (n.overflowY !== n.overflowX || "TEXTAREA" === e.tagName || "visible" !== n[t])
        },
        W = function(e, t) {
            var n = t.ownerDocument,
                r = t;
            do {
                if ("u" > typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), j(e, r)) {
                    var o = _(e, r);
                    if (o[1] > o[2]) return !0
                }
                r = r.parentNode
            } while (r && r !== n.body) return !1
        },
        j = function(e, t) {
            return "v" === e ? x(t, "overflowY") : x(t, "overflowX")
        },
        _ = function(e, t) {
            return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
        },
        B = function(e, t, n, r, o) {
            var i, u = (i = window.getComputedStyle(t).direction, "h" === e && "rtl" === i ? -1 : 1),
                a = u * r,
                c = n.target,
                l = t.contains(c),
                s = !1,
                d = a > 0,
                f = 0,
                v = 0;
            do {
                if (!c) break;
                var m = _(e, c),
                    p = m[0],
                    h = m[1] - m[2] - u * p;
                (p || h) && j(e, c) && (f += h, v += p);
                var y = c.parentNode;
                c = y && y.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? y.host : y
            } while (!l && c !== document.body || l && (t.contains(c) || t === c)) return d && (o && 1 > Math.abs(f) || !o && a > f) ? s = !0 : !d && (o && 1 > Math.abs(v) || !o && -a > v) && (s = !0), s
        },
        U = function(e) {
            return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        K = function(e) {
            return [e.deltaX, e.deltaY]
        },
        V = function(e) {
            return e && "current" in e ? e.current : e
        },
        X = 0,
        Y = [];
    let z = (u = function(e) {
        var t = s.useRef([]),
            n = s.useRef([0, 0]),
            r = s.useRef(),
            o = s.useState(X++)[0],
            i = s.useState(S)[0],
            u = s.useRef(e);
        s.useEffect(function() {
            u.current = e
        }, [e]), s.useEffect(function() {
            if (e.inert) {
                document.body.classList.add("block-interactivity-".concat(o));
                var t = (function(e, t, n) {
                    if (n || 2 == arguments.length)
                        for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
                    return e.concat(r || Array.prototype.slice.call(t))
                })([e.lockRef.current], (e.shards || []).map(V), !0).filter(Boolean);
                return t.forEach(function(e) {
                        return e.classList.add("allow-interactivity-".concat(o))
                    }),
                    function() {
                        document.body.classList.remove("block-interactivity-".concat(o)), t.forEach(function(e) {
                            return e.classList.remove("allow-interactivity-".concat(o))
                        })
                    }
            }
        }, [e.inert, e.lockRef.current, e.shards]);
        var a = s.useCallback(function(e, t) {
                if ("touches" in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey) return !u.current.allowPinchZoom;
                var o, i = U(e),
                    a = n.current,
                    c = "deltaX" in e ? e.deltaX : a[0] - i[0],
                    l = "deltaY" in e ? e.deltaY : a[1] - i[1],
                    s = e.target,
                    d = Math.abs(c) > Math.abs(l) ? "h" : "v";
                if ("touches" in e && "h" === d && "range" === s.type) return !1;
                var f = window.getSelection(),
                    v = f && f.anchorNode;
                if (v && (v === s || v.contains(s))) return !1;
                var m = W(d, s);
                if (!m) return !0;
                if (m ? o = d : (o = "v" === d ? "h" : "v", m = W(d, s)), !m) return !1;
                if (!r.current && "changedTouches" in e && (c || l) && (r.current = o), !o) return !0;
                var p = r.current || o;
                return B(p, t, e, "h" === p ? c : l, !0)
            }, []),
            c = s.useCallback(function(e) {
                if (Y.length && Y[Y.length - 1] === i) {
                    var n = "deltaY" in e ? K(e) : U(e),
                        r = t.current.filter(function(t) {
                            var r;
                            return t.name === e.type && (t.target === e.target || e.target === t.shadowParent) && (r = t.delta, r[0] === n[0] && r[1] === n[1])
                        })[0];
                    if (r && r.should) {
                        e.cancelable && e.preventDefault();
                        return
                    }
                    if (!r) {
                        var o = (u.current.shards || []).map(V).filter(Boolean).filter(function(t) {
                            return t.contains(e.target)
                        });
                        (o.length > 0 ? a(e, o[0]) : !u.current.noIsolation) && e.cancelable && e.preventDefault()
                    }
                }
            }, []),
            l = s.useCallback(function(e, n, r, o) {
                var i = {
                    name: e,
                    delta: n,
                    target: r,
                    should: o,
                    shadowParent: function(e) {
                        for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
                        return t
                    }(r)
                };
                t.current.push(i), setTimeout(function() {
                    t.current = t.current.filter(function(e) {
                        return e !== i
                    })
                }, 1)
            }, []),
            d = s.useCallback(function(e) {
                n.current = U(e), r.current = void 0
            }, []),
            f = s.useCallback(function(t) {
                l(t.type, K(t), t.target, a(t, e.lockRef.current))
            }, []),
            v = s.useCallback(function(t) {
                l(t.type, U(t), t.target, a(t, e.lockRef.current))
            }, []);
        s.useEffect(function() {
            return Y.push(i), e.setCallbacks({
                    onScrollCapture: f,
                    onWheelCapture: f,
                    onTouchMoveCapture: v
                }), document.addEventListener("wheel", c, F), document.addEventListener("touchmove", c, F), document.addEventListener("touchstart", d, F),
                function() {
                    Y = Y.filter(function(e) {
                        return e !== i
                    }), document.removeEventListener("wheel", c, F), document.removeEventListener("touchmove", c, F), document.removeEventListener("touchstart", d, F)
                }
        }, []);
        var m = e.removeScrollBar,
            p = e.inert;
        return s.createElement(s.Fragment, null, p ? s.createElement(i, {
            styles: "\n  .block-interactivity-".concat(o, " {pointer-events: none;}\n  .allow-interactivity-").concat(o, " {pointer-events: all;}\n")
        }) : null, m ? s.createElement(M, {
            noRelative: e.noRelative,
            gapMode: e.gapMode
        }) : null)
    }, h.useMedium(u), g);
    var H = s.forwardRef(function(e, t) {
        return s.createElement(b, c({}, e, {
            ref: t,
            sideCar: z
        }))
    });
    H.classNames = b.classNames, e.s(["f", 0, H], 813579)
}]);

//# debugId=46708403-0cfc-55b7-7d6c-a21e045c48e8