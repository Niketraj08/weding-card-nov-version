;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "58e0acfc-dd4f-e986-8867-cee3e8670fa5")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 755146, 677121, e => {
    "use strict";
    var n = e.i(729176),
        t = e.i(244835),
        r = e.i(317607),
        o = e.i(70659),
        a = e.i(470061),
        u = e.i(506913),
        i = e.i(628686),
        l = e.i(819149),
        c = e.i(288566),
        s = e.i(111362),
        d = e.i(829255),
        f = e.i(136614),
        p = e.i(7100),
        g = e.i(80803),
        v = e.i(331524),
        h = e.i(83580),
        m = e.i(252733),
        w = e.i(50339),
        x = Object.defineProperty,
        y = (e, n) => x(e, "name", {
            value: n,
            configurable: !0
        }),
        b = !1;

    function M() {
        let [e, n] = t.useState(b);
        return t.useEffect(() => {
            b || (b = !0, n(!0))
        }, []), e
    }
    y(M, "useIsHydrated");
    var C = t[" useSyncExternalStore ".trim().toString()];

    function R() {
        return () => {}
    }

    function j() {
        return C(R, () => !0, () => !1)
    }
    y(R, "subscribe"), y(j, "useIsHydratedModern");
    var D = "function" == typeof C ? j : M,
        I = Object.defineProperty,
        P = (e, n) => I(e, "name", {
            value: n,
            configurable: !0
        }),
        _ = "rovingFocusGroup.onEntryFocus",
        S = {
            bubbles: !1,
            cancelable: !0
        },
        T = "RovingFocusGroup",
        [E, k, F] = (0, l.f)(T),
        [O, A] = (0, a.f)(T, [F]),
        [L, K] = O(T),
        G = t.forwardRef(P(function(e, t) {
            return (0, n.jsx)(E.Provider, {
                scope: e.__scopeRovingFocusGroup,
                children: (0, n.jsx)(E.Slot, {
                    scope: e.__scopeRovingFocusGroup,
                    children: (0, n.jsx)(N, { ...e,
                        ref: t
                    })
                })
            })
        }, "RovingFocusGroup")),
        N = t.forwardRef(P(function(e, a) {
            let {
                __scopeRovingFocusGroup: l,
                orientation: s,
                loop: d = !1,
                dir: f,
                currentTabStopId: p,
                defaultCurrentTabStopId: g,
                onCurrentTabStopIdChange: v,
                onEntryFocus: h,
                preventScrollOnEntryFocus: w = !1,
                ...x
            } = e, y = t.useRef(null), b = (0, o.f)(a, y), M = (0, c.f)(f), [C, R] = (0, u.f)({
                prop: p,
                defaultProp: g ?? null,
                onChange: v,
                caller: T
            }), [j, D] = t.useState(!1), I = (0, m.f)(h), P = k(l), E = t.useRef(!1), [F, O] = t.useState(0);
            return t.useEffect(() => {
                let e = y.current;
                if (e) return e.addEventListener(_, I), () => e.removeEventListener(_, I)
            }, [I]), (0, n.jsx)(L, {
                scope: l,
                orientation: s,
                dir: M,
                loop: d,
                currentTabStopId: C,
                onItemFocus: t.useCallback(e => R(e), [R]),
                onItemShiftTab: t.useCallback(() => D(!0), []),
                onFocusableItemAdd: t.useCallback(() => O(e => e + 1), []),
                onFocusableItemRemove: t.useCallback(() => O(e => e - 1), []),
                children: (0, n.jsx)(i.V.div, {
                    tabIndex: j || 0 === F ? -1 : 0,
                    "data-orientation": s,
                    ...x,
                    ref: b,
                    style: {
                        outline: "none",
                        ...e.style
                    },
                    onMouseDown: (0, r.f)(e.onMouseDown, () => {
                        E.current = !0
                    }),
                    onFocus: (0, r.f)(e.onFocus, e => {
                        let n = !E.current;
                        if (e.target === e.currentTarget && n && !j) {
                            let n = new CustomEvent(_, S);
                            if (e.currentTarget.dispatchEvent(n), !n.defaultPrevented) {
                                let e = P().filter(e => e.focusable);
                                X([e.find(e => e.active), e.find(e => e.id === C), ...e].filter(Boolean).map(e => e.ref.current), w)
                            }
                        }
                        E.current = !1
                    }),
                    onBlur: (0, r.f)(e.onBlur, () => D(!1))
                })
            })
        }, "RovingFocusGroupImpl")),
        V = t.forwardRef(P(function(e, o) {
            let {
                __scopeRovingFocusGroup: a,
                focusable: u = !0,
                active: l = !1,
                tabStopId: c,
                children: s,
                ...d
            } = e, f = (0, p.f)(), g = c || f, v = K("RovingFocusGroupItem", a), h = v.currentTabStopId === g, m = k(a), {
                onFocusableItemAdd: x,
                onFocusableItemRemove: y,
                currentTabStopId: b
            } = v, M = D();
            return (0, w.f)(() => {
                if (M && u) return x(), () => y()
            }, [M, u, x, y]), t.useEffect(() => {
                if (!M && u) return x(), () => y()
            }, [M, u, x, y]), (0, n.jsx)(E.ItemSlot, {
                scope: a,
                id: g,
                focusable: u,
                active: l,
                children: (0, n.jsx)(i.V.span, {
                    tabIndex: h ? 0 : -1,
                    "data-orientation": v.orientation,
                    ...d,
                    ref: o,
                    onMouseDown: (0, r.f)(e.onMouseDown, e => {
                        u ? v.onItemFocus(g) : e.preventDefault()
                    }),
                    onFocus: (0, r.f)(e.onFocus, () => v.onItemFocus(g)),
                    onKeyDown: (0, r.f)(e.onKeyDown, e => {
                        if ("Tab" === e.key && e.shiftKey) return void v.onItemShiftTab();
                        if (e.target !== e.currentTarget) return;
                        let n = z(e, v.orientation, v.dir);
                        if (void 0 !== n) {
                            if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                            e.preventDefault();
                            let t = m().filter(e => e.focusable).map(e => e.ref.current);
                            if ("last" === n) t.reverse();
                            else if ("prev" === n || "next" === n) {
                                "prev" === n && t.reverse();
                                let r = t.indexOf(e.currentTarget);
                                t = v.loop ? H(t, r + 1) : t.slice(r + 1)
                            }
                            setTimeout(() => X(t))
                        }
                    }),
                    children: "function" == typeof s ? s({
                        isCurrentTabStop: h,
                        hasTabStop: null != b
                    }) : s
                })
            })
        }, "RovingFocusGroupItem")),
        B = {
            ArrowLeft: "prev",
            ArrowUp: "prev",
            ArrowRight: "next",
            ArrowDown: "next",
            PageUp: "first",
            Home: "first",
            PageDown: "last",
            End: "last"
        };

    function U(e, n) {
        return "rtl" !== n ? e : "ArrowLeft" === e ? "ArrowRight" : "ArrowRight" === e ? "ArrowLeft" : e
    }

    function z(e, n, t) {
        let r = U(e.key, t);
        if (!("vertical" === n && ["ArrowLeft", "ArrowRight"].includes(r)) && !("horizontal" === n && ["ArrowUp", "ArrowDown"].includes(r))) return B[r]
    }

    function X(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            t = document.activeElement;
        for (let r of e)
            if (r === t || (r.focus({
                    preventScroll: n
                }), document.activeElement !== t)) return
    }

    function H(e, n) {
        return e.map((t, r) => e[(n + r) % e.length])
    }
    P(U, "getDirectionAwareKey"), P(z, "getFocusIntent"), P(X, "focusFirst"), P(H, "wrapArray");
    var Y = e.i(933463),
        q = e.i(73772),
        Q = e.i(813579),
        W = Object.defineProperty,
        Z = (e, n) => W(e, "name", {
            value: n,
            configurable: !0
        }),
        J = ["Enter", " "],
        $ = ["ArrowUp", "PageDown", "End"],
        ee = ["ArrowDown", "PageUp", "Home", ...$],
        en = {
            ltr: [...J, "ArrowRight"],
            rtl: [...J, "ArrowLeft"]
        },
        et = {
            ltr: ["ArrowLeft"],
            rtl: ["ArrowRight"]
        },
        er = "Menu",
        [eo, ea, eu] = (0, l.f)(er),
        [ei, el] = (0, a.f)(er, [eu, g.y, A]),
        ec = (0, g.y)(),
        es = A(),
        [ed, ef] = ei(er),
        [ep, eg] = ei(er),
        ev = Z(e => {
            let {
                __scopeMenu: r,
                open: o = !1,
                children: a,
                dir: u,
                onOpenChange: i,
                modal: l = !0
            } = e, s = ec(r), [d, f] = t.useState(null), p = t.useRef(!1), v = (0, m.f)(i), h = (0, c.f)(u);
            return t.useEffect(() => {
                let e = Z(() => {
                        p.current = !0, document.addEventListener("pointerdown", n, {
                            capture: !0,
                            once: !0
                        }), document.addEventListener("pointermove", n, {
                            capture: !0,
                            once: !0
                        })
                    }, "handleKeyDown"),
                    n = Z(() => p.current = !1, "handlePointer");
                return document.addEventListener("keydown", e, {
                    capture: !0
                }), () => {
                    document.removeEventListener("keydown", e, {
                        capture: !0
                    }), document.removeEventListener("pointerdown", n, {
                        capture: !0
                    }), document.removeEventListener("pointermove", n, {
                        capture: !0
                    })
                }
            }, []), t.useEffect(() => {
                if (!o) return;
                let e = Z(() => v(!1), "handleBlur");
                return window.addEventListener("blur", e), () => window.removeEventListener("blur", e)
            }, [o, v]), (0, n.jsx)(g.F, { ...s,
                children: (0, n.jsx)(ed, {
                    scope: r,
                    open: o,
                    onOpenChange: v,
                    content: d,
                    onContentChange: f,
                    children: (0, n.jsx)(ep, {
                        scope: r,
                        onClose: t.useCallback(() => v(!1), [v]),
                        isUsingKeyboardRef: p,
                        dir: h,
                        modal: l,
                        children: a
                    })
                })
            })
        }, "Menu"),
        eh = t.forwardRef(Z(function(e, t) {
            let {
                __scopeMenu: r,
                ...o
            } = e, a = ec(r);
            return (0, n.jsx)(g.g, { ...a,
                ...o,
                ref: t
            })
        }, "MenuAnchor")),
        em = "MenuPortal",
        [ew, ex] = ei(em, {
            forceMount: void 0
        }),
        ey = Z(e => {
            let {
                __scopeMenu: t,
                forceMount: r,
                children: o,
                container: a
            } = e, u = ef(em, t);
            return (0, n.jsx)(ew, {
                scope: t,
                forceMount: r,
                children: (0, n.jsx)(h.f, {
                    present: r || u.open,
                    children: (0, n.jsx)(v.f, {
                        asChild: !0,
                        container: a,
                        children: o
                    })
                })
            })
        }, "MenuPortal"),
        eb = "MenuContent",
        [eM, eC] = ei(eb),
        eR = t.forwardRef(Z(function(e, t) {
            let r = ex(eb, e.__scopeMenu),
                {
                    forceMount: o = r.forceMount,
                    ...a
                } = e,
                u = ef(eb, e.__scopeMenu),
                i = eg(eb, e.__scopeMenu);
            return (0, n.jsx)(eo.Provider, {
                scope: e.__scopeMenu,
                children: (0, n.jsx)(h.f, {
                    present: o || u.open,
                    children: (0, n.jsx)(eo.Slot, {
                        scope: e.__scopeMenu,
                        children: i.modal ? (0, n.jsx)(ej, { ...a,
                            ref: t
                        }) : (0, n.jsx)(eD, { ...a,
                            ref: t
                        })
                    })
                })
            })
        }, "MenuContent")),
        ej = t.forwardRef(Z(function(e, a) {
            let u = ef(eb, e.__scopeMenu),
                i = t.useRef(null),
                l = (0, o.f)(a, i);
            return t.useEffect(() => {
                let e = i.current;
                if (e) return (0, q.f)(e)
            }, []), (0, n.jsx)(eP, { ...e,
                ref: l,
                trapFocus: u.open,
                disableOutsidePointerEvents: u.open,
                disableOutsideScroll: !0,
                onFocusOutside: (0, r.f)(e.onFocusOutside, e => e.preventDefault(), {
                    checkForDefaultPrevented: !1
                }),
                onDismiss: () => u.onOpenChange(!1)
            })
        }, "MenuRootContentModal")),
        eD = t.forwardRef(Z(function(e, t) {
            let r = ef(eb, e.__scopeMenu);
            return (0, n.jsx)(eP, { ...e,
                ref: t,
                trapFocus: !1,
                disableOutsidePointerEvents: !1,
                disableOutsideScroll: !1,
                onDismiss: () => r.onOpenChange(!1)
            })
        }, "MenuRootContentNonModal")),
        eI = (0, Y.B)("MenuContent.ScrollLock"),
        eP = t.forwardRef(Z(function(e, a) {
            let {
                __scopeMenu: u,
                loop: i = !1,
                trapFocus: l,
                onOpenAutoFocus: c,
                onCloseAutoFocus: p,
                disableOutsidePointerEvents: v,
                onEntryFocus: h,
                onEscapeKeyDown: m,
                onPointerDownOutside: w,
                onFocusOutside: x,
                onInteractOutside: y,
                onDismiss: b,
                disableOutsideScroll: M,
                ...C
            } = e, R = ef(eb, u), j = eg(eb, u), D = ec(u), I = es(u), P = ea(u), [_, S] = t.useState(null), T = t.useRef(null), [E, k] = t.useState(null);
            (0, f.i)(E);
            let {
                nodes: F,
                registry: O
            } = (0, f.D)(), A = !!(l || M), L = (0, o.f)(a, T, R.onContentChange, k), K = t.useRef(0), N = t.useRef(""), V = t.useRef(0), B = t.useRef(null), U = t.useRef("right"), z = t.useRef(0), X = t.useMemo(() => M ? [T, ...F.map(e => ({
                current: e
            }))] : [], [T, F, M]), H = M ? Q.f : t.Fragment, Y = Z(e => {
                var n, t;
                let r = N.current + e,
                    o = P().filter(e => !e.disabled),
                    a = document.activeElement,
                    u = null == (n = o.find(e => e.ref.current === a)) ? void 0 : n.textValue,
                    i = e5(o.map(e => e.textValue), r, u),
                    l = null == (t = o.find(e => e.textValue === i)) ? void 0 : t.ref.current;

                function c(e) {
                    N.current = e, window.clearTimeout(K.current), "" !== e && (K.current = window.setTimeout(() => c(""), 1e3))
                }
                Z(c, "updateSearch"), c(r), l && setTimeout(() => l.focus())
            }, "handleTypeaheadSearch");
            t.useEffect(() => () => window.clearTimeout(K.current), []), (0, d.f)();
            let q = t.useCallback(e => {
                var n, t;
                return U.current === (null == (n = B.current) ? void 0 : n.side) && e7(e, null == (t = B.current) ? void 0 : t.area)
            }, []);
            return (0, n.jsx)(eM, {
                scope: u,
                searchRef: N,
                onItemEnter: t.useCallback(e => {
                    q(e) && e.preventDefault()
                }, [q]),
                onItemLeave: t.useCallback(e => {
                    var n;
                    q(e) || (null == (n = T.current) || n.focus(), S(null))
                }, [q]),
                onTriggerLeave: t.useCallback(e => {
                    q(e) && e.preventDefault()
                }, [q]),
                pointerGraceTimerRef: V,
                onPointerGraceIntentChange: t.useCallback(e => {
                    B.current = e
                }, []),
                children: (0, n.jsx)(f.l, {
                    registry: A ? O : null,
                    children: (0, n.jsx)(H, { ...M ? {
                            as: eI,
                            allowPinchZoom: !0,
                            shards: X
                        } : void 0,
                        children: (0, n.jsx)(f.v, {
                            asChild: !0,
                            trapped: l,
                            branches: F,
                            onMountAutoFocus: (0, r.f)(c, e => {
                                var n;
                                e.preventDefault(), null == (n = T.current) || n.focus({
                                    preventScroll: !0
                                })
                            }),
                            onUnmountAutoFocus: p,
                            children: (0, n.jsx)(s.V, {
                                asChild: !0,
                                disableOutsidePointerEvents: v,
                                onEscapeKeyDown: m,
                                onPointerDownOutside: w,
                                onFocusOutside: x,
                                onInteractOutside: y,
                                onDismiss: b,
                                children: (0, n.jsx)(G, {
                                    asChild: !0,
                                    ...I,
                                    dir: j.dir,
                                    orientation: "vertical",
                                    loop: i,
                                    currentTabStopId: _,
                                    onCurrentTabStopIdChange: S,
                                    onEntryFocus: (0, r.f)(h, e => {
                                        j.isUsingKeyboardRef.current || e.preventDefault()
                                    }),
                                    preventScrollOnEntryFocus: !0,
                                    children: (0, n.jsx)(g.c, {
                                        role: "menu",
                                        "aria-orientation": "vertical",
                                        "data-state": eZ(R.open),
                                        "data-radix-menu-content": "",
                                        dir: j.dir,
                                        ...D,
                                        ...C,
                                        ref: L,
                                        style: {
                                            outline: "none",
                                            ...C.style
                                        },
                                        onKeyDown: (0, r.f)(C.onKeyDown, e => {
                                            let n = e.target.closest("[data-radix-menu-content]") === e.currentTarget,
                                                t = e.ctrlKey || e.altKey || e.metaKey,
                                                r = 1 === e.key.length;
                                            n && ("Tab" === e.key && e.preventDefault(), !t && r && Y(e.key));
                                            let o = T.current;
                                            if (e.target !== o || !ee.includes(e.key)) return;
                                            e.preventDefault();
                                            let a = P().filter(e => !e.disabled).map(e => e.ref.current);
                                            $.includes(e.key) && a.reverse(), e0(a)
                                        }),
                                        onBlur: (0, r.f)(e.onBlur, e => {
                                            e.currentTarget.contains(e.target) || (window.clearTimeout(K.current), N.current = "")
                                        }),
                                        onPointerMove: (0, r.f)(e.onPointerMove, e3(e => {
                                            let n = e.target,
                                                t = z.current !== e.clientX;
                                            e.currentTarget.contains(n) && t && (U.current = e.clientX > z.current ? "right" : "left", z.current = e.clientX)
                                        }))
                                    })
                                })
                            })
                        })
                    })
                })
            })
        }, "MenuContentImpl")),
        e_ = t.forwardRef(Z(function(e, t) {
            let {
                __scopeMenu: r,
                ...o
            } = e;
            return (0, n.jsx)(i.V.div, {
                role: "group",
                ...o,
                ref: t
            })
        }, "MenuGroup")),
        eS = t.forwardRef(Z(function(e, t) {
            let {
                __scopeMenu: r,
                ...o
            } = e;
            return (0, n.jsx)(i.V.div, { ...o,
                ref: t
            })
        }, "MenuLabel")),
        eT = "MenuItem",
        eE = "menu.itemSelect",
        ek = t.forwardRef(Z(function(e, a) {
            let {
                disabled: u = !1,
                onSelect: l,
                ...c
            } = e, s = t.useRef(null), d = eg(eT, e.__scopeMenu), f = eC(eT, e.__scopeMenu), p = (0, o.f)(a, s), g = t.useRef(!1), v = Z(() => {
                let e = s.current;
                if (!u && e) {
                    let n = new CustomEvent(eE, {
                        bubbles: !0,
                        cancelable: !0
                    });
                    e.addEventListener(eE, e => null == l ? void 0 : l(e), {
                        once: !0
                    }), (0, i.u)(e, n), n.defaultPrevented ? g.current = !1 : d.onClose()
                }
            }, "handleSelect");
            return (0, n.jsx)(eF, { ...c,
                ref: p,
                disabled: u,
                onClick: (0, r.f)(e.onClick, v),
                onPointerDown: n => {
                    var t;
                    null == (t = e.onPointerDown) || t.call(e, n), g.current = !0
                },
                onPointerUp: (0, r.f)(e.onPointerUp, e => {
                    var n;
                    g.current || null == (n = e.currentTarget) || n.click()
                }),
                onKeyDown: (0, r.f)(e.onKeyDown, e => {
                    u || e.target !== e.currentTarget || ("" === f.searchRef.current || " " !== e.key) && J.includes(e.key) && (e.currentTarget.click(), e.preventDefault())
                })
            })
        }, "MenuItem")),
        eF = t.forwardRef(Z(function(e, a) {
            let {
                __scopeMenu: u,
                disabled: l = !1,
                textValue: c,
                ...s
            } = e, d = eC(eT, u), f = es(u), p = t.useRef(null), g = (0, o.f)(a, p), [v, h] = t.useState(!1), [m, w] = t.useState("");
            return t.useEffect(() => {
                let e = p.current;
                e && w((e.textContent ?? "").trim())
            }, [s.children]), (0, n.jsx)(eo.ItemSlot, {
                scope: u,
                disabled: l,
                textValue: c ?? m,
                children: (0, n.jsx)(V, {
                    asChild: !0,
                    ...f,
                    focusable: !l,
                    children: (0, n.jsx)(i.V.div, {
                        role: "menuitem",
                        "data-highlighted": v ? "" : void 0,
                        "aria-disabled": l || void 0,
                        "data-disabled": l ? "" : void 0,
                        ...s,
                        ref: g,
                        onPointerMove: (0, r.f)(e.onPointerMove, e3(e => {
                            l ? d.onItemLeave(e) : (d.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus({
                                preventScroll: !0
                            }))
                        })),
                        onPointerLeave: (0, r.f)(e.onPointerLeave, e3(e => d.onItemLeave(e))),
                        onFocus: (0, r.f)(e.onFocus, () => h(!0)),
                        onBlur: (0, r.f)(e.onBlur, () => h(!1))
                    })
                })
            })
        }, "MenuItemImpl")),
        [eO, eA] = ei("MenuRadioGroup", {
            value: void 0,
            onValueChange: Z(() => {}, "onValueChange")
        }),
        eL = t.forwardRef(Z(function(e, t) {
            let {
                value: r,
                onValueChange: o,
                ...a
            } = e, u = (0, m.f)(o);
            return (0, n.jsx)(eO, {
                scope: e.__scopeMenu,
                value: r,
                onValueChange: u,
                children: (0, n.jsx)(e_, { ...a,
                    ref: t
                })
            })
        }, "MenuRadioGroup")),
        eK = t.forwardRef(Z(function(e, t) {
            let {
                value: o,
                ...a
            } = e, u = eA("MenuRadioItem", e.__scopeMenu), i = o === u.value;
            return (0, n.jsx)(eN, {
                scope: e.__scopeMenu,
                checked: i,
                children: (0, n.jsx)(ek, {
                    role: "menuitemradio",
                    "aria-checked": i,
                    ...a,
                    ref: t,
                    "data-state": e$(i),
                    onSelect: (0, r.f)(a.onSelect, () => {
                        var e;
                        return null == (e = u.onValueChange) ? void 0 : e.call(u, o)
                    }, {
                        checkForDefaultPrevented: !1
                    })
                })
            })
        }, "MenuRadioItem")),
        eG = "MenuItemIndicator",
        [eN, eV] = ei(eG, {
            checked: !1
        }),
        eB = t.forwardRef(Z(function(e, t) {
            let {
                __scopeMenu: r,
                forceMount: o,
                ...a
            } = e, u = eV(eG, r);
            return (0, n.jsx)(h.f, {
                present: o || eJ(u.checked) || !0 === u.checked,
                children: (0, n.jsx)(i.V.span, { ...a,
                    ref: t,
                    "data-state": e$(u.checked)
                })
            })
        }, "MenuItemIndicator")),
        eU = t.forwardRef(Z(function(e, t) {
            let {
                __scopeMenu: r,
                ...o
            } = e;
            return (0, n.jsx)(i.V.div, {
                role: "separator",
                "aria-orientation": "horizontal",
                ...o,
                ref: t
            })
        }, "MenuSeparator")),
        ez = "MenuSub",
        [eX, eH] = ei(ez),
        eY = Z(e => {
            let {
                __scopeMenu: r,
                children: o,
                open: a = !1,
                onOpenChange: u
            } = e, i = ef(ez, r), l = ec(r), [c, s] = t.useState(null), [d, f] = t.useState(null), v = (0, m.f)(u);
            return t.useEffect(() => (!1 === i.open && v(!1), () => v(!1)), [i.open, v]), (0, n.jsx)(g.F, { ...l,
                children: (0, n.jsx)(ed, {
                    scope: r,
                    open: a,
                    onOpenChange: v,
                    content: d,
                    onContentChange: f,
                    children: (0, n.jsx)(eX, {
                        scope: r,
                        contentId: (0, p.f)(),
                        triggerId: (0, p.f)(),
                        trigger: c,
                        onTriggerChange: s,
                        children: o
                    })
                })
            })
        }, "MenuSub"),
        eq = "MenuSubTrigger",
        eQ = t.forwardRef(Z(function(e, a) {
            let u = ef(eq, e.__scopeMenu),
                i = eg(eq, e.__scopeMenu),
                l = eH(eq, e.__scopeMenu),
                c = eC(eq, e.__scopeMenu),
                s = t.useRef(null),
                {
                    pointerGraceTimerRef: d,
                    onPointerGraceIntentChange: f
                } = c,
                p = {
                    __scopeMenu: e.__scopeMenu
                },
                g = t.useCallback(() => {
                    s.current && window.clearTimeout(s.current), s.current = null
                }, []);
            t.useEffect(() => g, [g]), t.useEffect(() => {
                let e = d.current;
                return () => {
                    window.clearTimeout(e), f(null)
                }
            }, [d, f]);
            let v = (0, o.f)(a, l.onTriggerChange);
            return (0, n.jsx)(eh, {
                asChild: !0,
                ...p,
                children: (0, n.jsx)(eF, {
                    id: l.triggerId,
                    "aria-haspopup": "menu",
                    "aria-expanded": u.open,
                    "aria-controls": u.open ? l.contentId : void 0,
                    "data-state": eZ(u.open),
                    ...e,
                    ref: v,
                    onClick: n => {
                        var t;
                        null == (t = e.onClick) || t.call(e, n), e.disabled || n.defaultPrevented || (n.currentTarget.focus(), u.open || u.onOpenChange(!0))
                    },
                    onPointerMove: (0, r.f)(e.onPointerMove, e3(n => {
                        c.onItemEnter(n), !n.defaultPrevented && (e.disabled || u.open || s.current || (c.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
                            u.onOpenChange(!0), g()
                        }, 100)))
                    })),
                    onPointerLeave: (0, r.f)(e.onPointerLeave, e3(e => {
                        var n, t;
                        g();
                        let r = null == (n = u.content) ? void 0 : n.getBoundingClientRect();
                        if (r) {
                            let n = null == (t = u.content) ? void 0 : t.dataset.side,
                                o = "right" === n,
                                a = r[o ? "left" : "right"],
                                i = r[o ? "right" : "left"];
                            c.onPointerGraceIntentChange({
                                area: [{
                                    x: e.clientX + (o ? -5 : 5),
                                    y: e.clientY
                                }, {
                                    x: a,
                                    y: r.top
                                }, {
                                    x: i,
                                    y: r.top
                                }, {
                                    x: i,
                                    y: r.bottom
                                }, {
                                    x: a,
                                    y: r.bottom
                                }],
                                side: n
                            }), window.clearTimeout(d.current), d.current = window.setTimeout(() => c.onPointerGraceIntentChange(null), 300)
                        } else {
                            if (c.onTriggerLeave(e), e.defaultPrevented) return;
                            c.onPointerGraceIntentChange(null)
                        }
                    })),
                    onKeyDown: (0, r.f)(e.onKeyDown, n => {
                        if (!e.disabled && n.target === n.currentTarget && ("" === c.searchRef.current || " " !== n.key) && en[i.dir].includes(n.key)) {
                            var t;
                            u.onOpenChange(!0), null == (t = u.content) || t.focus(), n.preventDefault()
                        }
                    })
                })
            })
        }, "MenuSubTrigger")),
        eW = t.forwardRef(Z(function(e, a) {
            let u = ex(eb, e.__scopeMenu),
                {
                    forceMount: i = u.forceMount,
                    align: l = "start",
                    ...c
                } = e,
                s = ef(eb, e.__scopeMenu),
                d = eg(eb, e.__scopeMenu),
                f = eH("MenuSubContent", e.__scopeMenu),
                p = t.useRef(null),
                g = (0, o.f)(a, p);
            return (0, n.jsx)(eo.Provider, {
                scope: e.__scopeMenu,
                children: (0, n.jsx)(h.f, {
                    present: i || s.open,
                    children: (0, n.jsx)(eo.Slot, {
                        scope: e.__scopeMenu,
                        children: (0, n.jsx)(eP, {
                            id: f.contentId,
                            "aria-labelledby": f.triggerId,
                            ...c,
                            ref: g,
                            align: l,
                            side: "rtl" === d.dir ? "left" : "right",
                            disableOutsidePointerEvents: !1,
                            disableOutsideScroll: !1,
                            trapFocus: !1,
                            onOpenAutoFocus: e => {
                                var n;
                                d.isUsingKeyboardRef.current && (null == (n = p.current) || n.focus()), e.preventDefault()
                            },
                            onCloseAutoFocus: e => e.preventDefault(),
                            onFocusOutside: (0, r.f)(e.onFocusOutside, e => {
                                e.target !== f.trigger && s.onOpenChange(!1)
                            }),
                            onEscapeKeyDown: (0, r.f)(e.onEscapeKeyDown, e => {
                                d.onClose(), e.preventDefault()
                            }),
                            onKeyDown: (0, r.f)(e.onKeyDown, e => {
                                let n = e.currentTarget.contains(e.target),
                                    t = et[d.dir].includes(e.key);
                                if (n && t) {
                                    var r;
                                    s.onOpenChange(!1), null == (r = f.trigger) || r.focus(), e.preventDefault()
                                }
                            })
                        })
                    })
                })
            })
        }, "MenuSubContent"));

    function eZ(e) {
        return e ? "open" : "closed"
    }

    function eJ(e) {
        return "indeterminate" === e
    }

    function e$(e) {
        return eJ(e) ? "indeterminate" : e ? "checked" : "unchecked"
    }

    function e0(e) {
        let n = document.activeElement;
        for (let t of e)
            if (t === n || (t.focus(), document.activeElement !== n)) return
    }

    function e1(e, n) {
        return e.map((t, r) => e[(n + r) % e.length])
    }

    function e5(e, n, t) {
        let r = n.length > 1 && Array.from(n).every(e => e === n[0]) ? n[0] : n,
            o = t ? e.indexOf(t) : -1,
            a = e1(e, Math.max(o, 0));
        1 === r.length && (a = a.filter(e => e !== t));
        let u = a.find(e => e.toLowerCase().startsWith(r.toLowerCase()));
        return u !== t ? u : void 0
    }

    function e2(e, n) {
        let {
            x: t,
            y: r
        } = e, o = !1;
        for (let e = 0, a = n.length - 1; e < n.length; a = e++) {
            let u = n[e],
                i = n[a],
                l = u.x,
                c = u.y,
                s = i.x,
                d = i.y;
            c > r != d > r && t < (s - l) * (r - c) / (d - c) + l && (o = !o)
        }
        return o
    }

    function e7(e, n) {
        return !!n && e2({
            x: e.clientX,
            y: e.clientY
        }, n)
    }

    function e3(e) {
        return n => "mouse" === n.pointerType ? e(n) : void 0
    }
    Z(eZ, "getOpenState"), Z(eJ, "isIndeterminate"), Z(e$, "getCheckedState"), Z(e0, "focusFirst"), Z(e1, "wrapArray"), Z(e5, "getNextMatch"), Z(e2, "isPointInPolygon"), Z(e7, "isPointerInGraceArea"), Z(e3, "whenMouse");
    var e6 = Object.defineProperty,
        e4 = (e, n) => e6(e, "name", {
            value: n,
            configurable: !0
        }),
        e8 = "DropdownMenu",
        [e9, ne] = (0, a.f)(e8, [el]),
        nn = el(),
        [nt, nr] = e9(e8),
        no = e4(e => {
            let {
                __scopeDropdownMenu: r,
                children: o,
                dir: a,
                open: i,
                defaultOpen: l,
                onOpenChange: c,
                modal: s = !0
            } = e, d = nn(r), f = t.useRef(null), [g, v] = (0, u.f)({
                prop: i,
                defaultProp: l ?? !1,
                onChange: c,
                caller: e8
            });
            return (0, n.jsx)(nt, {
                scope: r,
                triggerId: (0, p.f)(),
                triggerRef: f,
                contentId: (0, p.f)(),
                open: g,
                onOpenChange: v,
                onOpenToggle: t.useCallback(() => v(e => !e), [v]),
                modal: s,
                children: (0, n.jsx)(ev, { ...d,
                    open: g,
                    onOpenChange: v,
                    dir: a,
                    modal: s,
                    children: o
                })
            })
        }, "DropdownMenu"),
        na = t.forwardRef(e4(function(e, t) {
            let {
                __scopeDropdownMenu: a,
                disabled: u = !1,
                ...l
            } = e, c = nr("DropdownMenuTrigger", a), s = nn(a), d = (0, o.f)(t, c.triggerRef);
            return (0, n.jsx)(eh, {
                asChild: !0,
                ...s,
                children: (0, n.jsx)(i.V.button, {
                    type: "button",
                    id: c.triggerId,
                    "aria-haspopup": "menu",
                    "aria-expanded": c.open,
                    "aria-controls": c.open ? c.contentId : void 0,
                    "data-state": c.open ? "open" : "closed",
                    "data-disabled": u ? "" : void 0,
                    disabled: u,
                    ...l,
                    ref: d,
                    onPointerDown: (0, r.f)(e.onPointerDown, e => {
                        !u && 0 === e.button && !1 === e.ctrlKey && (c.onOpenToggle(), c.open || e.preventDefault())
                    }),
                    onKeyDown: (0, r.f)(e.onKeyDown, e => {
                        !u && (["Enter", " "].includes(e.key) && c.onOpenToggle(), "ArrowDown" === e.key && c.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(e.key) && e.preventDefault())
                    })
                })
            })
        }, "DropdownMenuTrigger")),
        nu = e4(e => {
            let {
                __scopeDropdownMenu: t,
                ...r
            } = e, o = nn(t);
            return (0, n.jsx)(ey, { ...o,
                ...r
            })
        }, "DropdownMenuPortal"),
        ni = t.forwardRef(e4(function(e, o) {
            let {
                __scopeDropdownMenu: a,
                ...u
            } = e, i = nr("DropdownMenuContent", a), l = nn(a), c = t.useRef(!1);
            return (0, n.jsx)(eR, {
                id: i.contentId,
                "aria-labelledby": i.triggerId,
                ...l,
                ...u,
                ref: o,
                onCloseAutoFocus: (0, r.f)(e.onCloseAutoFocus, e => {
                    var n;
                    c.current || null == (n = i.triggerRef.current) || n.focus(), c.current = !1, e.preventDefault()
                }),
                onInteractOutside: (0, r.f)(e.onInteractOutside, e => {
                    let n = e.detail.originalEvent,
                        t = 0 === n.button && !0 === n.ctrlKey,
                        r = 2 === n.button || t;
                    (!i.modal || r) && (c.current = !0)
                }),
                style: { ...e.style,
                    "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
                }
            })
        }, "DropdownMenuContent")),
        nl = t.forwardRef(e4(function(e, t) {
            let {
                __scopeDropdownMenu: r,
                ...o
            } = e, a = nn(r);
            return (0, n.jsx)(e_, { ...a,
                ...o,
                ref: t
            })
        }, "DropdownMenuGroup")),
        nc = t.forwardRef(e4(function(e, t) {
            let {
                __scopeDropdownMenu: r,
                ...o
            } = e, a = nn(r);
            return (0, n.jsx)(eS, { ...a,
                ...o,
                ref: t
            })
        }, "DropdownMenuLabel")),
        ns = t.forwardRef(e4(function(e, t) {
            let {
                __scopeDropdownMenu: r,
                ...o
            } = e, a = nn(r);
            return (0, n.jsx)(ek, { ...a,
                ...o,
                ref: t
            })
        }, "DropdownMenuItem")),
        nd = t.forwardRef(e4(function(e, t) {
            let {
                __scopeDropdownMenu: r,
                ...o
            } = e, a = nn(r);
            return (0, n.jsx)(eL, { ...a,
                ...o,
                ref: t
            })
        }, "DropdownMenuRadioGroup")),
        nf = t.forwardRef(e4(function(e, t) {
            let {
                __scopeDropdownMenu: r,
                ...o
            } = e, a = nn(r);
            return (0, n.jsx)(eK, { ...a,
                ...o,
                ref: t
            })
        }, "DropdownMenuRadioItem")),
        np = t.forwardRef(e4(function(e, t) {
            let {
                __scopeDropdownMenu: r,
                ...o
            } = e, a = nn(r);
            return (0, n.jsx)(eB, { ...a,
                ...o,
                ref: t
            })
        }, "DropdownMenuItemIndicator")),
        ng = t.forwardRef(e4(function(e, t) {
            let {
                __scopeDropdownMenu: r,
                ...o
            } = e, a = nn(r);
            return (0, n.jsx)(eU, { ...a,
                ...o,
                ref: t
            })
        }, "DropdownMenuSeparator")),
        nv = e4(e => {
            let {
                __scopeDropdownMenu: t,
                children: r,
                open: o,
                onOpenChange: a,
                defaultOpen: i
            } = e, l = nn(t), [c, s] = (0, u.f)({
                prop: o,
                defaultProp: i ?? !1,
                onChange: a,
                caller: "DropdownMenuSub"
            });
            return (0, n.jsx)(eY, { ...l,
                open: c,
                onOpenChange: s,
                children: r
            })
        }, "DropdownMenuSub"),
        nh = t.forwardRef(e4(function(e, t) {
            let {
                __scopeDropdownMenu: r,
                ...o
            } = e, a = nn(r);
            return (0, n.jsx)(eQ, { ...a,
                ...o,
                ref: t
            })
        }, "DropdownMenuSubTrigger")),
        nm = t.forwardRef(e4(function(e, t) {
            let {
                __scopeDropdownMenu: r,
                ...o
            } = e, a = nn(r);
            return (0, n.jsx)(eW, { ...a,
                ...o,
                ref: t,
                style: { ...e.style,
                    "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
                }
            })
        }, "DropdownMenuSubContent"));
    e.s(["c", 0, ni, "x", 0, nl, "M", 0, ns, "j", 0, np, "Q", 0, nc, "z", 0, nu, "y", 0, nd, "X", 0, nf, "F", 0, no, "g", 0, ng, "q", 0, nv, "_", 0, nm, "i", 0, nh, "d", 0, na], 677121);
    var nw = e.i(975157);
    let nx = t.forwardRef((e, t) => {
        let {
            className: r,
            sideOffset: o = 4,
            ...a
        } = e;
        return (0, n.jsx)(nu, {
            children: (0, n.jsx)(ni, {
                ref: t,
                sideOffset: o,
                className: (0, nw.c)("glass-overlay z-50 min-w-[12rem] overflow-hidden rounded-sm p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", r),
                ...a
            })
        })
    });
    nx.displayName = ni.displayName;
    let ny = t.forwardRef((e, t) => {
        let {
            className: r,
            inset: o,
            ...a
        } = e;
        return (0, n.jsx)(ns, {
            ref: t,
            className: (0, nw.c)("relative flex cursor-pointer select-none items-center gap-2 rounded-lg px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent/45 focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:size-4", o && "pl-8", r),
            ...a
        })
    });
    ny.displayName = ns.displayName;
    let nb = t.forwardRef((e, t) => {
        let {
            className: r,
            ...o
        } = e;
        return (0, n.jsx)(nc, {
            ref: t,
            className: (0, nw.c)("px-2 py-1.5 text-sm font-semibold", r),
            ...o
        })
    });
    nb.displayName = nc.displayName;
    let nM = t.forwardRef((e, t) => {
        let {
            className: r,
            ...o
        } = e;
        return (0, n.jsx)(ng, {
            ref: t,
            className: (0, nw.c)("-mx-1 my-1 h-px bg-border", r),
            ...o
        })
    });
    nM.displayName = ng.displayName;
    let nC = t.forwardRef((e, t) => {
        let {
            className: r,
            children: o,
            ...a
        } = e;
        return (0, n.jsx)(nh, {
            ref: t,
            className: (0, nw.c)("flex cursor-pointer select-none items-center gap-2 rounded-lg px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent/45 data-[state=open]:bg-accent/45 [&_svg]:size-4", r),
            ...a,
            children: o
        })
    });
    nC.displayName = nh.displayName;
    let nR = t.forwardRef((e, t) => {
        let {
            className: r,
            ...o
        } = e;
        return (0, n.jsx)(nm, {
            ref: t,
            className: (0, nw.c)("glass-overlay z-50 max-h-72 min-w-[11rem] overflow-y-auto rounded-sm p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", r),
            ...o
        })
    });
    nR.displayName = nm.displayName, e.s(["G", 0, no, "L", 0, nx, "r", 0, ny, "B", 0, nb, "U", 0, nM, "V", 0, nv, "d", 0, nR, "f", 0, nC, "X", 0, na], 755146)
}]);

//# debugId=58e0acfc-dd4f-e986-8867-cee3e8670fa5