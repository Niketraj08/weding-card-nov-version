;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "ec8b3f51-cc44-4afb-d9b3-0cacc2370411")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 819149, 397326, 377636, 897786, 189917, 747195, 288566, e => {
    "use strict";

    function t(e, t, n) {
        if (!t.has(e)) throw TypeError("attempted to " + n + " private field on non-instance");
        return t.get(e)
    }

    function n(e, n) {
        var r = t(e, n, "get");
        return r.get ? r.get.call(e) : r.value
    }

    function r(e, t) {
        if (t.has(e)) throw TypeError("Cannot initialize the same private elements twice on an object")
    }

    function i(e, t, n) {
        r(e, t), t.set(e, n)
    }

    function o(e, n, r) {
        var i = t(e, n, "set");
        if (i.set) i.set.call(e, r);
        else {
            if (!i.writable) throw TypeError("attempted to set read only private field");
            i.value = r
        }
        return r
    }
    e.s(["_", 0, t], 397326), e.s(["_", 0, n], 377636), e.s(["_", 0, r], 897786), e.s(["_", 0, i], 189917), e.s(["_", 0, o], 747195);
    var l, a, s = e.i(244835),
        f = e.i(470061),
        u = e.i(70659),
        c = e.i(933463),
        d = e.i(729176),
        p = e.i(50339),
        h = Object.defineProperty,
        m = (e, t) => h(e, "name", {
            value: t,
            configurable: !0
        });

    function g(e) {
        let t = e + "CollectionProvider",
            [n, r] = (0, f.f)(t),
            [i, o] = n(t, {
                collectionRef: {
                    current: null
                },
                itemMap: new Map
            }),
            l = m(e => {
                let {
                    scope: t,
                    children: n
                } = e, r = s.useRef(null), o = s.useRef(new Map).current;
                return (0, d.jsx)(i, {
                    scope: t,
                    itemMap: o,
                    collectionRef: r,
                    children: n
                })
            }, "CollectionProvider");
        l.displayName = t;
        let a = e + "CollectionSlot",
            p = (0, c.B)(a),
            h = s.forwardRef((e, t) => {
                let {
                    scope: n,
                    children: r
                } = e, i = o(a, n), l = (0, u.f)(t, i.collectionRef);
                return (0, d.jsx)(p, {
                    ref: l,
                    children: r
                })
            });
        h.displayName = a;
        let g = e + "CollectionItemSlot",
            y = "data-radix-collection-item",
            w = (0, c.B)(g),
            v = s.forwardRef((e, t) => {
                let {
                    scope: n,
                    children: r,
                    ...i
                } = e, l = s.useRef(null), a = (0, u.f)(t, l), f = o(g, n);
                return s.useEffect(() => (f.itemMap.set(l, {
                    ref: l,
                    ...i
                }), () => void f.itemMap.delete(l))), (0, d.jsx)(w, { ...{
                        [y]: ""
                    },
                    ref: a,
                    children: r
                })
            });

        function x(t) {
            let n = o(e + "CollectionConsumer", t);
            return s.useCallback(() => {
                let e = n.collectionRef.current;
                if (!e) return [];
                let t = Array.from(e.querySelectorAll(`[${y}]`));
                return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current))
            }, [n.collectionRef, n.itemMap])
        }
        return v.displayName = g, m(x, "useCollection"), [{
            Provider: l,
            Slot: h,
            ItemSlot: v
        }, x, r]
    }
    m(g, "createCollection");
    var y = new WeakMap,
        w = (l = new WeakMap, m(a = class e extends Map {
            set(e, t) {
                return y.get(this) && !this.has(e) && n(this, l).push(e), super.set(e, t), this
            }
            insert(e, t, r) {
                let i = this.has(t),
                    o = i ? this.size : this.size + 1,
                    a = b(e),
                    s = a >= 0 ? Math.min(a, o - 1) : Math.max(o + a, 0);
                if (i ? n(this, l).indexOf(t) === s : s === this.size) return this.set(t, r), this;
                let f = n(this, l).filter(e => e !== t);
                f.splice(s, 0, t);
                let u = f.map(e => [e, e === t ? r : this.get(e)]);
                for (let [e, t] of (this.clear(), u)) this.set(e, t);
                return this
            }
            with(t, n, r) {
                let i = new e(this);
                return i.insert(t, n, r), i
            }
            before(e) {
                let t = n(this, l).indexOf(e) - 1;
                if (!(t < 0)) return this.entryAt(t)
            }
            setBefore(e, t, r) {
                let i = n(this, l).indexOf(e);
                if (-1 === i) return this;
                let o = n(this, l).indexOf(t);
                return this.insert(-1 !== o && o < i ? i - 1 : i, t, r)
            }
            after(e) {
                let t = n(this, l).indexOf(e);
                if (-1 !== (t = -1 === t || t === this.size - 1 ? -1 : t + 1)) return this.entryAt(t)
            }
            setAfter(e, t, r) {
                let i = n(this, l).indexOf(e);
                if (-1 === i) return this;
                let o = n(this, l).indexOf(t);
                return this.insert(-1 !== o && o <= i ? i : i + 1, t, r)
            }
            first() {
                return this.entryAt(0)
            }
            last() {
                return this.entryAt(-1)
            }
            clear() {
                return o(this, l, []), super.clear()
            }
            delete(e) {
                let t = super.delete(e);
                return t && n(this, l).splice(n(this, l).indexOf(e), 1), t
            }
            deleteAt(e) {
                let t = this.keyAt(e);
                return void 0 !== t && this.delete(t)
            }
            at(e) {
                let t = v(n(this, l), e);
                if (void 0 !== t) return this.get(t)
            }
            entryAt(e) {
                let t = v(n(this, l), e);
                if (void 0 !== t) return [t, this.get(t)]
            }
            indexOf(e) {
                return n(this, l).indexOf(e)
            }
            keyAt(e) {
                return v(n(this, l), e)
            }
            from(e, t) {
                let n = this.indexOf(e);
                if (-1 === n) return;
                let r = n + t;
                return r < 0 && (r = 0), r >= this.size && (r = this.size - 1), this.at(r)
            }
            keyFrom(e, t) {
                let n = this.indexOf(e);
                if (-1 === n) return;
                let r = n + t;
                return r < 0 && (r = 0), r >= this.size && (r = this.size - 1), this.keyAt(r)
            }
            find(e, t) {
                let n = 0;
                for (let r of this) {
                    if (Reflect.apply(e, t, [r, n, this])) return r;
                    n++
                }
            }
            findIndex(e, t) {
                let n = 0;
                for (let r of this) {
                    if (Reflect.apply(e, t, [r, n, this])) return n;
                    n++
                }
                return -1
            }
            filter(t, n) {
                let r = [],
                    i = 0;
                for (let e of this) Reflect.apply(t, n, [e, i, this]) && r.push(e), i++;
                return new e(r)
            }
            map(t, n) {
                let r = [],
                    i = 0;
                for (let e of this) r.push([e[0], Reflect.apply(t, n, [e, i, this])]), i++;
                return new e(r)
            }
            reduce() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                let [r, i] = t, o = t.length > 1;
                if (!o && 0 === this.size) throw TypeError("Reduce of empty OrderedDict with no initial value");
                let l = 0,
                    a = i;
                for (let e of this) a = 0 !== l || o ? Reflect.apply(r, this, [a, e, l, this]) : e, l++;
                return a
            }
            reduceRight() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                let [r, i] = t, o = t.length > 1;
                if (!o && 0 === this.size) throw TypeError("Reduce of empty OrderedDict with no initial value");
                let l = i;
                for (let e = this.size - 1; e >= 0; e--) {
                    let t = this.entryAt(e);
                    l = e !== this.size - 1 || o ? Reflect.apply(r, this, [l, t, e, this]) : t
                }
                return l
            }
            sort(e) {
                if ("function" != typeof e) throw TypeError("OrderedDict.sort requires a compare function");
                let t = [...this.entries()].sort(e);
                for (let [e, n] of (this.clear(), t)) this.set(e, n);
                return this
            }
            toSorted(t) {
                if ("function" != typeof t) throw TypeError("OrderedDict.toSorted requires a compare function");
                return new e([...this.entries()].sort(t))
            }
            toReversed() {
                let t = new e;
                for (let e = this.size - 1; e >= 0; e--) {
                    let n = this.keyAt(e),
                        r = this.get(n);
                    t.set(n, r)
                }
                return t
            }
            toSpliced() {
                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                let i = [...this.entries()];
                return i.splice(...n), new e(i)
            }
            slice(t, r) {
                let i = new e;
                for (let e of n(this, l).slice(t, r)) i.set(e, this.get(e));
                return i
            }
            every(e, t) {
                let n = 0;
                for (let r of this) {
                    if (!Reflect.apply(e, t, [r, n, this])) return !1;
                    n++
                }
                return !0
            }
            some(e, t) {
                let n = 0;
                for (let r of this) {
                    if (Reflect.apply(e, t, [r, n, this])) return !0;
                    n++
                }
                return !1
            }
            constructor(e) {
                super(e), i(this, l, {
                    writable: !0,
                    value: void 0
                }), o(this, l, [...super.keys()]), y.set(this, !0)
            }
        }, "OrderedDict"), a);

    function v(e, t) {
        if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
        let n = x(e, t);
        return -1 === n ? void 0 : e[n]
    }

    function x(e, t) {
        let n = e.length,
            r = b(t),
            i = r >= 0 ? r : n + r;
        return i < 0 || i >= n ? -1 : i
    }

    function b(e) {
        return e != e || 0 === e ? 0 : Math.trunc(e)
    }

    function R(e, t) {
        if (e === t) return !0;
        if ("object" != typeof e || "object" != typeof t || null == e || null == t) return !1;
        let n = Object.keys(e),
            r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (let r of n)
            if (!Object.prototype.hasOwnProperty.call(t, r) || e[r] !== t[r]) return !1;
        return !0
    }

    function O(e, t) {
        return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING)
    }

    function C(e) {
        let t;
        for (let n of e.keys()) {
            if (t) {
                let e = t.compareDocumentPosition(n);
                if (!(e & Node.DOCUMENT_POSITION_DISCONNECTED) && e & Node.DOCUMENT_POSITION_PRECEDING) return !1
            }
            t = n
        }
        return !0
    }

    function A(e, t) {
        return e[1].element && t[1].element ? O(e[1].element, t[1].element) ? -1 : 1 : 0
    }

    function P(e) {
        return new MutationObserver(t => {
            for (let n of t)
                if ("childList" === n.type) return void e()
        })
    }
    m(v, "at"), m(x, "toSafeIndex"), m(b, "toSafeInteger"), m(function(e) {
        let t = e + "CollectionProvider",
            [n, r] = (0, f.f)(t),
            [i, o] = n(t);
        i.displayName = e + "CollectionStableContextProvider";
        let [l, a] = n(t);
        l.displayName = e + "CollectionStatefulContextProvider";
        let h = m(e => {
            let {
                state: t,
                ...n
            } = e;
            return t ? (0, d.jsx)(y, { ...n,
                state: t
            }) : (0, d.jsx)(g, { ...n
            })
        }, "CollectionProvider");
        h.displayName = t;
        let g = m(e => {
            let t = T();
            return (0, d.jsx)(y, { ...e,
                state: t
            })
        }, "CollectionInit");
        g.displayName = e + "CollectionInit";
        let y = m(e => {
            let {
                scope: t,
                children: n,
                state: r
            } = e, o = s.useRef(null), [a, f] = s.useState(null), c = (0, u.f)(o, f), [p, h] = r, m = s.useRef(new w), g = s.useCallback(() => {
                let e = m.current;
                return C(e) || e.sort(A), e
            }, []);
            return s.useEffect(() => {
                if (!a) return;
                let e = P(() => {
                    h(e => {
                        let t = e.toSorted(A);
                        return t.some((t, n) => {
                            let [r] = t;
                            return e.keyAt(n) !== r
                        }) ? t : e
                    })
                });
                return e.observe(a, {
                    childList: !0,
                    subtree: !0
                }), () => {
                    e.disconnect()
                }
            }, [a, h]), (0, d.jsx)(i, {
                scope: t,
                collectionElementRef: c,
                collectionElementRefObject: o,
                getCollection: g,
                setCollection: h,
                registryRef: m,
                children: (0, d.jsx)(l, {
                    scope: t,
                    collectionElement: a,
                    collection: p,
                    children: n
                })
            })
        }, "CollectionProviderImpl");
        y.displayName = e + "CollectionProviderImpl";
        let v = e + "CollectionSlot",
            x = (0, c.B)(v),
            b = s.forwardRef((e, t) => {
                let {
                    scope: n,
                    children: r
                } = e, i = o(v, n), l = (0, u.f)(t, i.collectionElementRef);
                return (0, d.jsx)(x, {
                    ref: l,
                    children: r
                })
            });
        b.displayName = v;
        let O = e + "CollectionItemSlot",
            S = (0, c.B)(O),
            E = s.forwardRef((e, t) => {
                let {
                    scope: n,
                    children: r,
                    ...i
                } = e, l = s.useRef(null), {
                    setCollection: a,
                    registryRef: f
                } = o(O, n), c = s.useRef(i);
                R(c.current, i) || (c.current = i);
                let h = c.current,
                    m = s.useCallback(e => {
                        let t = f.current;
                        e ? t.set(e, { ...c.current,
                            element: e
                        }) : l.current && t.delete(l.current)
                    }, [f]),
                    g = (0, u.f)(t, m, l);
                (0, p.f)(() => {
                    let e = l.current,
                        t = f.current;
                    e && t.has(e) && t.set(e, { ...h,
                        element: e
                    })
                }, [h, f]);
                let y = s.useRef(null);
                return s.useEffect(() => {
                    let e = l.current,
                        t = y.current;
                    (((null == t ? void 0 : t.element) ? ? null) !== e || e && (null == t ? void 0 : t.itemData) !== h) && (y.current = e ? {
                        element: e,
                        itemData: h
                    } : null, a(n => {
                        let r = new w(n);
                        return t && t.element !== e && r.delete(t.element), e && r.set(e, { ...h,
                            element: e
                        }), r.sort(A)
                    }))
                }), s.useEffect(() => () => {
                    let e = y.current;
                    y.current = null, e && a(t => {
                        if (!t.has(e.element)) return t;
                        let n = new w(t);
                        return n.delete(e.element), n
                    })
                }, [a]), (0, d.jsx)(S, {
                    "data-radix-collection-item": "",
                    ref: g,
                    children: r
                })
            });

        function T() {
            return s.useState(new w)
        }

        function D(t) {
            let {
                collection: n
            } = a(e + "CollectionConsumer", t);
            return n
        }

        function j(t) {
            let {
                getCollection: n
            } = o(e + "CollectionConsumer", t);
            return n
        }
        return E.displayName = O, m(T, "useInitCollection"), m(D, "useCollection"), m(j, "useGetCollection"), [{
            Provider: h,
            Slot: b,
            ItemSlot: E
        }, {
            createCollectionScope: r,
            useCollection: D,
            useGetCollection: j,
            useInitCollection: T
        }]
    }, "createCollection"), m(R, "shallowEqual"), m(O, "isElementPreceding"), m(C, "isInDocumentOrder"), m(A, "sortByDocumentPosition"), m(P, "getChildListObserver"), e.s(["f", 0, g], 819149);
    var S = Object.defineProperty,
        E = s.createContext(void 0);

    function T(e) {
        let t = s.useContext(E);
        return e || t || "ltr"
    }
    S(T, "name", {
        value: "useDirection",
        configurable: !0
    }), e.s(["f", 0, T], 288566)
}, 80803, e => {
    "use strict";
    let t;
    var n = e.i(244835);
    let r = ["top", "right", "bottom", "left"],
        i = Math.min,
        o = Math.max,
        l = Math.round,
        a = Math.floor,
        s = e => ({
            x: e,
            y: e
        }),
        f = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };

    function u(e, t) {
        return "function" == typeof e ? e(t) : e
    }

    function c(e) {
        return e.split("-")[0]
    }

    function d(e) {
        return e.split("-")[1]
    }

    function p(e) {
        return "x" === e ? "y" : "x"
    }

    function h(e) {
        return "y" === e ? "height" : "width"
    }

    function m(e) {
        let t = e[0];
        return "t" === t || "b" === t ? "y" : "x"
    }

    function g(e) {
        return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start")
    }
    let y = ["left", "right"],
        w = ["right", "left"],
        v = ["top", "bottom"],
        x = ["bottom", "top"];

    function b(e) {
        let t = c(e);
        return f[t] + e.slice(t.length)
    }

    function R(e) {
        return "number" != typeof e ? {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...e
        } : {
            top: e,
            right: e,
            bottom: e,
            left: e
        }
    }

    function O(e) {
        let {
            x: t,
            y: n,
            width: r,
            height: i
        } = e;
        return {
            width: r,
            height: i,
            top: n,
            left: t,
            right: t + r,
            bottom: n + i,
            x: t,
            y: n
        }
    }

    function C(e, t, n) {
        let r, {
                reference: i,
                floating: o
            } = e,
            l = m(t),
            a = p(m(t)),
            s = h(a),
            f = c(t),
            u = "y" === l,
            g = i.x + i.width / 2 - o.width / 2,
            y = i.y + i.height / 2 - o.height / 2,
            w = i[s] / 2 - o[s] / 2;
        switch (f) {
            case "top":
                r = {
                    x: g,
                    y: i.y - o.height
                };
                break;
            case "bottom":
                r = {
                    x: g,
                    y: i.y + i.height
                };
                break;
            case "right":
                r = {
                    x: i.x + i.width,
                    y: y
                };
                break;
            case "left":
                r = {
                    x: i.x - o.width,
                    y: y
                };
                break;
            default:
                r = {
                    x: i.x,
                    y: i.y
                }
        }
        switch (d(t)) {
            case "start":
                r[a] -= w * (n && u ? -1 : 1);
                break;
            case "end":
                r[a] += w * (n && u ? -1 : 1)
        }
        return r
    }
    async function A(e, t) {
        var n;
        void 0 === t && (t = {});
        let {
            x: r,
            y: i,
            platform: o,
            rects: l,
            elements: a,
            strategy: s
        } = e, {
            boundary: f = "clippingAncestors",
            rootBoundary: c = "viewport",
            elementContext: d = "floating",
            altBoundary: p = !1,
            padding: h = 0
        } = u(t, e), m = R(h), g = a[p ? "floating" === d ? "reference" : "floating" : d], y = O(await o.getClippingRect({
            element: null == (n = await (null == o.isElement ? void 0 : o.isElement(g))) || n ? g : g.contextElement || await (null == o.getDocumentElement ? void 0 : o.getDocumentElement(a.floating)),
            boundary: f,
            rootBoundary: c,
            strategy: s
        })), w = "floating" === d ? {
            x: r,
            y: i,
            width: l.floating.width,
            height: l.floating.height
        } : l.reference, v = await (null == o.getOffsetParent ? void 0 : o.getOffsetParent(a.floating)), x = await (null == o.isElement ? void 0 : o.isElement(v)) && await (null == o.getScale ? void 0 : o.getScale(v)) || {
            x: 1,
            y: 1
        }, b = O(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: w,
            offsetParent: v,
            strategy: s
        }) : w);
        return {
            top: (y.top - b.top + m.top) / x.y,
            bottom: (b.bottom - y.bottom + m.bottom) / x.y,
            left: (y.left - b.left + m.left) / x.x,
            right: (b.right - y.right + m.right) / x.x
        }
    }
    let P = async (e, t, n) => {
        let {
            placement: r = "bottom",
            strategy: i = "absolute",
            middleware: o = [],
            platform: l
        } = n, a = l.detectOverflow ? l : { ...l,
            detectOverflow: A
        }, s = await (null == l.isRTL ? void 0 : l.isRTL(t)), f = await l.getElementRects({
            reference: e,
            floating: t,
            strategy: i
        }), {
            x: u,
            y: c
        } = C(f, r, s), d = r, p = 0, h = {};
        for (let n = 0; n < o.length; n++) {
            let m = o[n];
            if (!m) continue;
            let {
                name: g,
                fn: y
            } = m, {
                x: w,
                y: v,
                data: x,
                reset: b
            } = await y({
                x: u,
                y: c,
                initialPlacement: r,
                placement: d,
                strategy: i,
                middlewareData: h,
                rects: f,
                platform: a,
                elements: {
                    reference: e,
                    floating: t
                }
            });
            u = null != w ? w : u, c = null != v ? v : c, h[g] = { ...h[g],
                ...x
            }, b && p < 50 && (p++, "object" == typeof b && (b.placement && (d = b.placement), b.rects && (f = !0 === b.rects ? await l.getElementRects({
                reference: e,
                floating: t,
                strategy: i
            }) : b.rects), {
                x: u,
                y: c
            } = C(f, d, s)), n = -1)
        }
        return {
            x: u,
            y: c,
            placement: d,
            strategy: i,
            middlewareData: h
        }
    };

    function S(e, t) {
        return {
            top: e.top - t.height,
            right: e.right - t.width,
            bottom: e.bottom - t.height,
            left: e.left - t.width
        }
    }

    function E(e) {
        return r.some(t => e[t] >= 0)
    }
    let T = new Set(["left", "top"]);
    async function D(e, t) {
        let {
            placement: n,
            platform: r,
            elements: i
        } = e, o = await (null == r.isRTL ? void 0 : r.isRTL(i.floating)), l = c(n), a = d(n), s = "y" === m(n), f = T.has(l) ? -1 : 1, p = o && s ? -1 : 1, h = u(t, e), {
            mainAxis: g,
            crossAxis: y,
            alignmentAxis: w
        } = "number" == typeof h ? {
            mainAxis: h,
            crossAxis: 0,
            alignmentAxis: null
        } : {
            mainAxis: h.mainAxis || 0,
            crossAxis: h.crossAxis || 0,
            alignmentAxis: h.alignmentAxis
        };
        return a && "number" == typeof w && (y = "end" === a ? -1 * w : w), s ? {
            x: y * p,
            y: g * f
        } : {
            x: g * f,
            y: y * p
        }
    }

    function j() {
        return "u" > typeof window
    }

    function L(e) {
        return N(e) ? (e.nodeName || "").toLowerCase() : "#document"
    }

    function M(e) {
        var t;
        return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
    }

    function k(e) {
        var t;
        return null == (t = (N(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
    }

    function N(e) {
        return !!j() && (e instanceof Node || e instanceof M(e).Node)
    }

    function I(e) {
        return !!j() && (e instanceof Element || e instanceof M(e).Element)
    }

    function z(e) {
        return !!j() && (e instanceof HTMLElement || e instanceof M(e).HTMLElement)
    }

    function H(e) {
        return !(!j() || "u" < typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof M(e).ShadowRoot)
    }

    function F(e) {
        let {
            overflow: t,
            overflowX: n,
            overflowY: r,
            display: i
        } = Y(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && "inline" !== i && "contents" !== i
    }

    function B(e) {
        try {
            if (e.matches(":popover-open")) return !0
        } catch (e) {}
        try {
            return e.matches(":modal")
        } catch (e) {
            return !1
        }
    }
    let $ = /transform|translate|scale|rotate|perspective|filter/,
        W = /paint|layout|strict|content/,
        _ = e => !!e && "none" !== e;

    function V(e) {
        let t = I(e) ? Y(e) : e;
        return _(t.transform) || _(t.translate) || _(t.scale) || _(t.rotate) || _(t.perspective) || !q() && (_(t.backdropFilter) || _(t.filter)) || $.test(t.willChange || "") || W.test(t.contain || "")
    }

    function q() {
        return null == t && (t = "u" > typeof CSS && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), t
    }

    function U(e) {
        return /^(html|body|#document)$/.test(L(e))
    }

    function Y(e) {
        return M(e).getComputedStyle(e)
    }

    function X(e) {
        return I(e) ? {
            scrollLeft: e.scrollLeft,
            scrollTop: e.scrollTop
        } : {
            scrollLeft: e.scrollX,
            scrollTop: e.scrollY
        }
    }

    function G(e) {
        if ("html" === L(e)) return e;
        let t = e.assignedSlot || e.parentNode || H(e) && e.host || k(e);
        return H(t) ? t.host : t
    }

    function K(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        let i = function e(t) {
                let n = G(t);
                return U(n) ? t.ownerDocument ? t.ownerDocument.body : t.body : z(n) && F(n) ? n : e(n)
            }(e),
            o = i === (null == (r = e.ownerDocument) ? void 0 : r.body),
            l = M(i);
        if (!o) return t.concat(i, K(i, [], n)); {
            let e = J(l);
            return t.concat(l, l.visualViewport || [], F(i) ? i : [], e && n ? K(e) : [])
        }
    }

    function J(e) {
        return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
    }

    function Q(e) {
        let t = Y(e),
            n = parseFloat(t.width) || 0,
            r = parseFloat(t.height) || 0,
            i = z(e),
            o = i ? e.offsetWidth : n,
            a = i ? e.offsetHeight : r,
            s = l(n) !== o || l(r) !== a;
        return s && (n = o, r = a), {
            width: n,
            height: r,
            $: s
        }
    }

    function Z(e) {
        return I(e) ? e : e.contextElement
    }

    function ee(e) {
        let t = Z(e);
        if (!z(t)) return s(1);
        let n = t.getBoundingClientRect(),
            {
                width: r,
                height: i,
                $: o
            } = Q(t),
            a = (o ? l(n.width) : n.width) / r,
            f = (o ? l(n.height) : n.height) / i;
        return a && Number.isFinite(a) || (a = 1), f && Number.isFinite(f) || (f = 1), {
            x: a,
            y: f
        }
    }
    let et = s(0);

    function en(e) {
        let t = M(e);
        return q() && t.visualViewport ? {
            x: t.visualViewport.offsetLeft,
            y: t.visualViewport.offsetTop
        } : et
    }

    function er(e, t, n, r) {
        var i;
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        let o = e.getBoundingClientRect(),
            l = Z(e),
            a = s(1);
        t && (r ? I(r) && (a = ee(r)) : a = ee(e));
        let f = (void 0 === (i = n) && (i = !1), r && (!i || r === M(l)) && i) ? en(l) : s(0),
            u = (o.left + f.x) / a.x,
            c = (o.top + f.y) / a.y,
            d = o.width / a.x,
            p = o.height / a.y;
        if (l) {
            let e = M(l),
                t = r && I(r) ? M(r) : r,
                n = e,
                i = J(n);
            for (; i && r && t !== n;) {
                let e = ee(i),
                    t = i.getBoundingClientRect(),
                    r = Y(i),
                    o = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x,
                    l = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
                u *= e.x, c *= e.y, d *= e.x, p *= e.y, u += o, c += l, i = J(n = M(i))
            }
        }
        return O({
            width: d,
            height: p,
            x: u,
            y: c
        })
    }

    function ei(e, t) {
        let n = X(e).scrollLeft;
        return t ? t.left + n : er(k(e)).left + n
    }

    function eo(e, t) {
        let n = e.getBoundingClientRect();
        return {
            x: n.left + t.scrollLeft - ei(e, n),
            y: n.top + t.scrollTop
        }
    }

    function el(e, t, n) {
        var r;
        let i;
        if ("viewport" === t) i = function(e, t) {
            let n = M(e),
                r = k(e),
                i = n.visualViewport,
                o = r.clientWidth,
                l = r.clientHeight,
                a = 0,
                s = 0;
            if (i) {
                o = i.width, l = i.height;
                let e = q();
                (!e || e && "fixed" === t) && (a = i.offsetLeft, s = i.offsetTop)
            }
            let f = ei(r);
            if (f <= 0) {
                let e = r.ownerDocument,
                    t = e.body,
                    n = getComputedStyle(t),
                    i = "CSS1Compat" === e.compatMode && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0,
                    l = Math.abs(r.clientWidth - t.clientWidth - i);
                l <= 25 && (o -= l)
            } else f <= 25 && (o += f);
            return {
                width: o,
                height: l,
                x: a,
                y: s
            }
        }(e, n);
        else if ("document" === t) {
            let t, n, l, a, s, f, u;
            r = k(e), t = k(r), n = X(r), l = r.ownerDocument.body, a = o(t.scrollWidth, t.clientWidth, l.scrollWidth, l.clientWidth), s = o(t.scrollHeight, t.clientHeight, l.scrollHeight, l.clientHeight), f = -n.scrollLeft + ei(r), u = -n.scrollTop, "rtl" === Y(l).direction && (f += o(t.clientWidth, l.clientWidth) - a), i = {
                width: a,
                height: s,
                x: f,
                y: u
            }
        } else if (I(t)) {
            let e, r, o, l, a, f;
            r = (e = er(t, !0, "fixed" === n)).top + t.clientTop, o = e.left + t.clientLeft, l = z(t) ? ee(t) : s(1), a = t.clientWidth * l.x, f = t.clientHeight * l.y, i = {
                width: a,
                height: f,
                x: o * l.x,
                y: r * l.y
            }
        } else {
            let n = en(e);
            i = {
                x: t.x - n.x,
                y: t.y - n.y,
                width: t.width,
                height: t.height
            }
        }
        return O(i)
    }

    function ea(e) {
        return "static" === Y(e).position
    }

    function es(e, t) {
        if (!z(e) || "fixed" === Y(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return k(e) === n && (n = n.ownerDocument.body), n
    }

    function ef(e, t) {
        var n;
        let r = M(e);
        if (B(e)) return r;
        if (!z(e)) {
            let t = G(e);
            for (; t && !U(t);) {
                if (I(t) && !ea(t)) return t;
                t = G(t)
            }
            return r
        }
        let i = es(e, t);
        for (; i && (n = i, /^(table|td|th)$/.test(L(n))) && ea(i);) i = es(i, t);
        return i && U(i) && ea(i) && !V(i) ? r : i || function(e) {
            let t = G(e);
            for (; z(t) && !U(t);) {
                if (V(t)) return t;
                if (B(t)) break;
                t = G(t)
            }
            return null
        }(e) || r
    }
    let eu = async function(e) {
            let t = this.getOffsetParent || ef,
                n = this.getDimensions,
                r = await n(e.floating);
            return {
                reference: function(e, t, n) {
                    let r = z(t),
                        i = k(t),
                        o = "fixed" === n,
                        l = er(e, !0, o, t),
                        a = {
                            scrollLeft: 0,
                            scrollTop: 0
                        },
                        f = s(0);
                    if (r || !r && !o)
                        if (("body" !== L(t) || F(i)) && (a = X(t)), r) {
                            let e = er(t, !0, o, t);
                            f.x = e.x + t.clientLeft, f.y = e.y + t.clientTop
                        } else i && (f.x = ei(i));
                    o && !r && i && (f.x = ei(i));
                    let u = !i || r || o ? s(0) : eo(i, a);
                    return {
                        x: l.left + a.scrollLeft - f.x - u.x,
                        y: l.top + a.scrollTop - f.y - u.y,
                        width: l.width,
                        height: l.height
                    }
                }(e.reference, await t(e.floating), e.strategy),
                floating: {
                    x: 0,
                    y: 0,
                    width: r.width,
                    height: r.height
                }
            }
        },
        ec = {
            convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                let {
                    elements: t,
                    rect: n,
                    offsetParent: r,
                    strategy: i
                } = e, o = "fixed" === i, l = k(r), a = !!t && B(t.floating);
                if (r === l || a && o) return n;
                let f = {
                        scrollLeft: 0,
                        scrollTop: 0
                    },
                    u = s(1),
                    c = s(0),
                    d = z(r);
                if ((d || !d && !o) && (("body" !== L(r) || F(l)) && (f = X(r)), d)) {
                    let e = er(r);
                    u = ee(r), c.x = e.x + r.clientLeft, c.y = e.y + r.clientTop
                }
                let p = !l || d || o ? s(0) : eo(l, f);
                return {
                    width: n.width * u.x,
                    height: n.height * u.y,
                    x: n.x * u.x - f.scrollLeft * u.x + c.x + p.x,
                    y: n.y * u.y - f.scrollTop * u.y + c.y + p.y
                }
            },
            getDocumentElement: k,
            getClippingRect: function(e) {
                let {
                    element: t,
                    boundary: n,
                    rootBoundary: r,
                    strategy: l
                } = e, a = [..."clippingAncestors" === n ? B(t) ? [] : function(e, t) {
                    let n = t.get(e);
                    if (n) return n;
                    let r = K(e, [], !1).filter(e => I(e) && "body" !== L(e)),
                        i = null,
                        o = "fixed" === Y(e).position,
                        l = o ? G(e) : e;
                    for (; I(l) && !U(l);) {
                        let t = Y(l),
                            n = V(l);
                        n || "fixed" !== t.position || (i = null), (o ? n || i : !(!n && "static" === t.position && i && ("absolute" === i.position || "fixed" === i.position) || F(l) && !n && function e(t, n) {
                            let r = G(t);
                            return !(r === n || !I(r) || U(r)) && ("fixed" === Y(r).position || e(r, n))
                        }(e, l))) ? i = t : r = r.filter(e => e !== l), l = G(l)
                    }
                    return t.set(e, r), r
                }(t, this._c) : [].concat(n), r], s = el(t, a[0], l), f = s.top, u = s.right, c = s.bottom, d = s.left;
                for (let e = 1; e < a.length; e++) {
                    let n = el(t, a[e], l);
                    f = o(n.top, f), u = i(n.right, u), c = i(n.bottom, c), d = o(n.left, d)
                }
                return {
                    width: u - d,
                    height: c - f,
                    x: d,
                    y: f
                }
            },
            getOffsetParent: ef,
            getElementRects: eu,
            getClientRects: function(e) {
                return Array.from(e.getClientRects())
            },
            getDimensions: function(e) {
                let {
                    width: t,
                    height: n
                } = Q(e);
                return {
                    width: t,
                    height: n
                }
            },
            getScale: ee,
            isElement: I,
            isRTL: function(e) {
                return "rtl" === Y(e).direction
            }
        };

    function ed(e, t) {
        return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
    }
    let ep = e => ({
        name: "arrow",
        options: e,
        async fn(t) {
            let {
                x: n,
                y: r,
                placement: l,
                rects: a,
                platform: s,
                elements: f,
                middlewareData: c
            } = t, {
                element: g,
                padding: y = 0
            } = u(e, t) || {};
            if (null == g) return {};
            let w = R(y),
                v = {
                    x: n,
                    y: r
                },
                x = p(m(l)),
                b = h(x),
                O = await s.getDimensions(g),
                C = "y" === x,
                A = C ? "clientHeight" : "clientWidth",
                P = a.reference[b] + a.reference[x] - v[x] - a.floating[b],
                S = v[x] - a.reference[x],
                E = await (null == s.getOffsetParent ? void 0 : s.getOffsetParent(g)),
                T = E ? E[A] : 0;
            T && await (null == s.isElement ? void 0 : s.isElement(E)) || (T = f.floating[A] || a.floating[b]);
            let D = T / 2 - O[b] / 2 - 1,
                j = i(w[C ? "top" : "left"], D),
                L = i(w[C ? "bottom" : "right"], D),
                M = T - O[b] - L,
                k = T / 2 - O[b] / 2 + (P / 2 - S / 2),
                N = o(j, i(k, M)),
                I = !c.arrow && null != d(l) && k !== N && a.reference[b] / 2 - (k < j ? j : L) - O[b] / 2 < 0,
                z = I ? k < j ? k - j : k - M : 0;
            return {
                [x]: v[x] + z,
                data: {
                    [x]: N,
                    centerOffset: k - N - z,
                    ...I && {
                        alignmentOffset: z
                    }
                },
                reset: I
            }
        }
    });
    var eh = e.i(316616),
        em = "u" > typeof document ? n.useLayoutEffect : function() {};

    function eg(e, t) {
        let n, r, i;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && "object" == typeof e) {
            if (Array.isArray(e)) {
                if ((n = e.length) !== t.length) return !1;
                for (r = n; 0 != r--;)
                    if (!eg(e[r], t[r])) return !1;
                return !0
            }
            if ((n = (i = Object.keys(e)).length) !== Object.keys(t).length) return !1;
            for (r = n; 0 != r--;)
                if (!({}).hasOwnProperty.call(t, i[r])) return !1;
            for (r = n; 0 != r--;) {
                let n = i[r];
                if (("_owner" !== n || !e.$$typeof) && !eg(e[n], t[n])) return !1
            }
            return !0
        }
        return e != e && t != t
    }

    function ey(e) {
        return "u" < typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
    }

    function ew(e, t) {
        let n = ey(e);
        return Math.round(t * n) / n
    }

    function ev(e) {
        let t = n.useRef(e);
        return em(() => {
            t.current = e
        }), t
    }
    var ex = e.i(628686),
        eb = e.i(729176),
        eR = Object.defineProperty,
        eO = n.forwardRef(eR(function(e, t) {
            let {
                children: n,
                width: r = 10,
                height: i = 5,
                ...o
            } = e;
            return (0, eb.jsx)(ex.V.svg, { ...o,
                ref: t,
                width: r,
                height: i,
                viewBox: "0 0 30 10",
                preserveAspectRatio: "none",
                children: e.asChild ? n : (0, eb.jsx)("polygon", {
                    points: "0,0 30,0 15,10"
                })
            })
        }, "name", {
            value: "Arrow",
            configurable: !0
        })),
        eC = e.i(70659),
        eA = e.i(470061),
        eP = e.i(252733),
        eS = e.i(50339),
        eE = e.i(587287),
        eT = Object.defineProperty,
        eD = (e, t) => eT(e, "name", {
            value: t,
            configurable: !0
        }),
        ej = "partial",
        eL = "Popper",
        [eM, ek] = (0, eA.f)(eL),
        [eN, eI] = eM(eL),
        ez = eD(e => {
            let {
                __scopePopper: t,
                children: r
            } = e, [i, o] = n.useState(null), [l, a] = n.useState(void 0);
            return (0, eb.jsx)(eN, {
                scope: t,
                anchor: i,
                onAnchorChange: o,
                placementState: l,
                setPlacementState: a,
                children: r
            })
        }, "Popper"),
        eH = n.forwardRef(eD(function(e, t) {
            let {
                __scopePopper: r,
                virtualRef: i,
                ...o
            } = e, l = eI("PopperAnchor", r), a = n.useRef(null), s = l.onAnchorChange, f = n.useCallback(e => {
                a.current = e, e && s(e)
            }, [s]), u = (0, eC.f)(t, f), c = n.useRef(null);
            n.useEffect(() => {
                if (!i) return;
                let e = c.current;
                c.current = i.current, e !== c.current && s(c.current)
            });
            let d = l.placementState && eY(l.placementState),
                p = null == d ? void 0 : d[0],
                h = null == d ? void 0 : d[1];
            return i ? null : (0, eb.jsx)(ex.V.div, {
                "data-radix-popper-side": p,
                "data-radix-popper-align": h,
                ...o,
                ref: u
            })
        }, "PopperAnchor")),
        eF = "PopperContent",
        [eB, e$] = eM(eF),
        eW = n.forwardRef(eD(function(e, t) {
            var r, l, s, f, R, O, C, A, j, L, M, N, I, z, H, F, B, $, W, _;
            let V, q, U, Y, X, G, {
                    __scopePopper: J,
                    side: Q = "bottom",
                    sideOffset: ee = 0,
                    align: et = "center",
                    alignOffset: en = 0,
                    arrowPadding: ei = 0,
                    avoidCollisions: eo = !0,
                    collisionBoundary: el = [],
                    collisionPadding: ea = 0,
                    sticky: es = ej,
                    hideWhenDetached: ef = !1,
                    updatePositionStrategy: eu = "optimized",
                    onPlaced: eR,
                    ...eO
                } = e,
                eA = eI(eF, J),
                [eT, eL] = n.useState(null),
                eM = (0, eC.f)(t, eL),
                [ek, eN] = n.useState(null),
                ez = (0, eE.f)(ek),
                eH = (null == ez ? void 0 : ez.width) ? ? 0,
                e$ = (null == ez ? void 0 : ez.height) ? ? 0,
                eW = "number" == typeof ea ? ea : {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    ...ea
                },
                e_ = Array.isArray(el) ? el : [el],
                eV = e_.length > 0,
                eX = {
                    padding: eW,
                    boundary: e_.filter(eq),
                    altBoundary: eV
                },
                {
                    refs: eG,
                    floatingStyles: eK,
                    placement: eJ,
                    isPositioned: eQ,
                    middlewareData: eZ
                } = function(e) {
                    void 0 === e && (e = {});
                    let {
                        placement: t = "bottom",
                        strategy: r = "absolute",
                        middleware: i = [],
                        platform: o,
                        elements: {
                            reference: l,
                            floating: a
                        } = {},
                        transform: s = !0,
                        whileElementsMounted: f,
                        open: u
                    } = e, [c, d] = n.useState({
                        x: 0,
                        y: 0,
                        strategy: r,
                        placement: t,
                        middlewareData: {},
                        isPositioned: !1
                    }), [p, h] = n.useState(i);
                    eg(p, i) || h(i);
                    let [m, g] = n.useState(null), [y, w] = n.useState(null), v = n.useCallback(e => {
                        e !== O.current && (O.current = e, g(e))
                    }, []), x = n.useCallback(e => {
                        e !== C.current && (C.current = e, w(e))
                    }, []), b = l || m, R = a || y, O = n.useRef(null), C = n.useRef(null), A = n.useRef(c), S = null != f, E = ev(f), T = ev(o), D = ev(u), j = n.useCallback(() => {
                        var e, n;
                        let i, o, l;
                        if (!O.current || !C.current) return;
                        let a = {
                            placement: t,
                            strategy: r,
                            middleware: p
                        };
                        T.current && (a.platform = T.current), (e = O.current, n = C.current, i = new Map, l = { ...(o = {
                                platform: ec,
                                ...a
                            }).platform,
                            _c: i
                        }, P(e, n, { ...o,
                            platform: l
                        })).then(e => {
                            let t = { ...e,
                                isPositioned: !1 !== D.current
                            };
                            L.current && !eg(A.current, t) && (A.current = t, eh.flushSync(() => {
                                d(t)
                            }))
                        })
                    }, [p, t, r, T, D]);
                    em(() => {
                        !1 === u && A.current.isPositioned && (A.current.isPositioned = !1, d(e => ({ ...e,
                            isPositioned: !1
                        })))
                    }, [u]);
                    let L = n.useRef(!1);
                    em(() => (L.current = !0, () => {
                        L.current = !1
                    }), []), em(() => {
                        if (b && (O.current = b), R && (C.current = R), b && R) {
                            if (E.current) return E.current(b, R, j);
                            j()
                        }
                    }, [b, R, j, E, S]);
                    let M = n.useMemo(() => ({
                            reference: O,
                            floating: C,
                            setReference: v,
                            setFloating: x
                        }), [v, x]),
                        k = n.useMemo(() => ({
                            reference: b,
                            floating: R
                        }), [b, R]),
                        N = n.useMemo(() => {
                            let e = {
                                position: r,
                                left: 0,
                                top: 0
                            };
                            if (!k.floating) return e;
                            let t = ew(k.floating, c.x),
                                n = ew(k.floating, c.y);
                            return s ? { ...e,
                                transform: "translate(" + t + "px, " + n + "px)",
                                ...ey(k.floating) >= 1.5 && {
                                    willChange: "transform"
                                }
                            } : {
                                position: r,
                                left: t,
                                top: n
                            }
                        }, [r, s, k.floating, c.x, c.y]);
                    return n.useMemo(() => ({ ...c,
                        update: j,
                        refs: M,
                        elements: k,
                        floatingStyles: N
                    }), [c, j, M, k, N])
                }({
                    strategy: "fixed",
                    placement: Q + ("center" !== et ? "-" + et : ""),
                    whileElementsMounted: eD(function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return function(e, t, n, r) {
                            let l;
                            void 0 === r && (r = {});
                            let {
                                ancestorScroll: s = !0,
                                ancestorResize: f = !0,
                                elementResize: u = "function" == typeof ResizeObserver,
                                layoutShift: c = "function" == typeof IntersectionObserver,
                                animationFrame: d = !1
                            } = r, p = Z(e), h = s || f ? [...p ? K(p) : [], ...t ? K(t) : []] : [];
                            h.forEach(e => {
                                s && e.addEventListener("scroll", n, {
                                    passive: !0
                                }), f && e.addEventListener("resize", n)
                            });
                            let m = p && c ? function(e, t) {
                                    let n, r = null,
                                        l = k(e);

                                    function s() {
                                        var e;
                                        clearTimeout(n), null == (e = r) || e.disconnect(), r = null
                                    }
                                    return ! function f(u, c) {
                                        void 0 === u && (u = !1), void 0 === c && (c = 1), s();
                                        let d = e.getBoundingClientRect(),
                                            {
                                                left: p,
                                                top: h,
                                                width: m,
                                                height: g
                                            } = d;
                                        if (u || t(), !m || !g) return;
                                        let y = {
                                                rootMargin: -a(h) + "px " + -a(l.clientWidth - (p + m)) + "px " + -a(l.clientHeight - (h + g)) + "px " + -a(p) + "px",
                                                threshold: o(0, i(1, c)) || 1
                                            },
                                            w = !0;

                                        function v(t) {
                                            let r = t[0].intersectionRatio;
                                            if (r !== c) {
                                                if (!w) return f();
                                                r ? f(!1, r) : n = setTimeout(() => {
                                                    f(!1, 1e-7)
                                                }, 1e3)
                                            }
                                            1 !== r || ed(d, e.getBoundingClientRect()) || f(), w = !1
                                        }
                                        try {
                                            r = new IntersectionObserver(v, { ...y,
                                                root: l.ownerDocument
                                            })
                                        } catch (e) {
                                            r = new IntersectionObserver(v, y)
                                        }
                                        r.observe(e)
                                    }(!0), s
                                }(p, n) : null,
                                g = -1,
                                y = null;
                            u && (y = new ResizeObserver(e => {
                                let [r] = e;
                                r && r.target === p && y && t && (y.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
                                    var e;
                                    null == (e = y) || e.observe(t)
                                })), n()
                            }), p && !d && y.observe(p), t && y.observe(t));
                            let w = d ? er(e) : null;
                            return d && function t() {
                                let r = er(e);
                                w && !ed(w, r) && n(), w = r, l = requestAnimationFrame(t)
                            }(), n(), () => {
                                var e;
                                h.forEach(e => {
                                    s && e.removeEventListener("scroll", n), f && e.removeEventListener("resize", n)
                                }), null == m || m(), null == (e = y) || e.disconnect(), y = null, d && cancelAnimationFrame(l)
                            }
                        }(...t, {
                            animationFrame: "always" === eu
                        })
                    }, "whileElementsMounted"),
                    elements: {
                        reference: eA.anchor
                    },
                    middleware: [{
                        name: (V = {
                            name: "offset",
                            options: j = A = {
                                mainAxis: ee + e$,
                                alignmentAxis: en
                            },
                            async fn(e) {
                                var t, n;
                                let {
                                    x: r,
                                    y: i,
                                    placement: o,
                                    middlewareData: l
                                } = e, a = await D(e, j);
                                return o === (null == (t = l.offset) ? void 0 : t.placement) && null != (n = l.arrow) && n.alignmentOffset ? {} : {
                                    x: r + a.x,
                                    y: i + a.y,
                                    data: { ...a,
                                        placement: o
                                    }
                                }
                            }
                        }).name,
                        fn: V.fn,
                        options: [A, void 0]
                    }, eo && {
                        name: (q = {
                            name: "shift",
                            options: N = M = {
                                mainAxis: !0,
                                crossAxis: !1,
                                ...es === ej ? {
                                    limiter: {
                                        fn: (L = void 0, {
                                            options: L = {},
                                            fn(e) {
                                                let {
                                                    x: t,
                                                    y: n,
                                                    placement: r,
                                                    rects: i,
                                                    middlewareData: o
                                                } = e, {
                                                    offset: l = 0,
                                                    mainAxis: a = !0,
                                                    crossAxis: s = !0
                                                } = u(L, e), f = {
                                                    x: t,
                                                    y: n
                                                }, d = m(r), h = p(d), g = f[h], y = f[d], w = u(l, e), v = "number" == typeof w ? {
                                                    mainAxis: w,
                                                    crossAxis: 0
                                                } : {
                                                    mainAxis: 0,
                                                    crossAxis: 0,
                                                    ...w
                                                };
                                                if (a) {
                                                    let e = "y" === h ? "height" : "width",
                                                        t = i.reference[h] - i.floating[e] + v.mainAxis,
                                                        n = i.reference[h] + i.reference[e] - v.mainAxis;
                                                    g < t ? g = t : g > n && (g = n)
                                                }
                                                if (s) {
                                                    var x, b;
                                                    let e = "y" === h ? "width" : "height",
                                                        t = T.has(c(r)),
                                                        n = i.reference[d] - i.floating[e] + (t && (null == (x = o.offset) ? void 0 : x[d]) || 0) + (t ? 0 : v.crossAxis),
                                                        l = i.reference[d] + i.reference[e] + (t ? 0 : (null == (b = o.offset) ? void 0 : b[d]) || 0) - (t ? v.crossAxis : 0);
                                                    y < n ? y = n : y > l && (y = l)
                                                }
                                                return {
                                                    [h]: g,
                                                    [d]: y
                                                }
                                            }
                                        }).fn,
                                        options: [void 0, void 0]
                                    }
                                } : {},
                                ...eX
                            },
                            async fn(e) {
                                let {
                                    x: t,
                                    y: n,
                                    placement: r,
                                    platform: l
                                } = e, {
                                    mainAxis: a = !0,
                                    crossAxis: s = !1,
                                    limiter: f = {
                                        fn: e => {
                                            let {
                                                x: t,
                                                y: n
                                            } = e;
                                            return {
                                                x: t,
                                                y: n
                                            }
                                        }
                                    },
                                    ...d
                                } = u(N, e), h = {
                                    x: t,
                                    y: n
                                }, g = await l.detectOverflow(e, d), y = m(c(r)), w = p(y), v = h[w], x = h[y];
                                if (a) {
                                    let e = "y" === w ? "top" : "left",
                                        t = "y" === w ? "bottom" : "right",
                                        n = v + g[e],
                                        r = v - g[t];
                                    v = o(n, i(v, r))
                                }
                                if (s) {
                                    let e = "y" === y ? "top" : "left",
                                        t = "y" === y ? "bottom" : "right",
                                        n = x + g[e],
                                        r = x - g[t];
                                    x = o(n, i(x, r))
                                }
                                let b = f.fn({ ...e,
                                    [w]: v,
                                    [y]: x
                                });
                                return { ...b,
                                    data: {
                                        x: b.x - t,
                                        y: b.y - n,
                                        enabled: {
                                            [w]: a,
                                            [y]: s
                                        }
                                    }
                                }
                            }
                        }).name,
                        fn: q.fn,
                        options: [M, void 0]
                    }, eo && {
                        name: (U = {
                            name: "flip",
                            options: z = I = { ...eX
                            },
                            async fn(e) {
                                var t, n, r, i, o, l, a, s;
                                let f, R, O, {
                                        placement: C,
                                        middlewareData: A,
                                        rects: P,
                                        initialPlacement: S,
                                        platform: E,
                                        elements: T
                                    } = e,
                                    {
                                        mainAxis: D = !0,
                                        crossAxis: j = !0,
                                        fallbackPlacements: L,
                                        fallbackStrategy: M = "bestFit",
                                        fallbackAxisSideDirection: k = "none",
                                        flipAlignment: N = !0,
                                        ...I
                                    } = u(z, e);
                                if (null != (t = A.arrow) && t.alignmentOffset) return {};
                                let H = c(C),
                                    F = m(S),
                                    B = c(S) === S,
                                    $ = await (null == E.isRTL ? void 0 : E.isRTL(T.floating)),
                                    W = L || (B || !N ? [b(S)] : (f = b(S), [g(S), f, g(f)])),
                                    _ = "none" !== k;
                                !L && _ && W.push(...(R = d(S), O = function(e, t, n) {
                                    switch (e) {
                                        case "top":
                                        case "bottom":
                                            if (n) return t ? w : y;
                                            return t ? y : w;
                                        case "left":
                                        case "right":
                                            return t ? v : x;
                                        default:
                                            return []
                                    }
                                }(c(S), "start" === k, $), R && (O = O.map(e => e + "-" + R), N && (O = O.concat(O.map(g)))), O));
                                let V = [S, ...W],
                                    q = await E.detectOverflow(e, I),
                                    U = [],
                                    Y = (null == (n = A.flip) ? void 0 : n.overflows) || [];
                                if (D && U.push(q[H]), j) {
                                    let e, t, n, r, i = (l = C, a = P, void 0 === (s = $) && (s = !1), e = d(l), n = h(t = p(m(l))), r = "x" === t ? e === (s ? "end" : "start") ? "right" : "left" : "start" === e ? "bottom" : "top", a.reference[n] > a.floating[n] && (r = b(r)), [r, b(r)]);
                                    U.push(q[i[0]], q[i[1]])
                                }
                                if (Y = [...Y, {
                                        placement: C,
                                        overflows: U
                                    }], !U.every(e => e <= 0)) {
                                    let e = ((null == (r = A.flip) ? void 0 : r.index) || 0) + 1,
                                        t = V[e];
                                    if (t && ("alignment" !== j || F === m(t) || Y.every(e => m(e.placement) !== F || e.overflows[0] > 0))) return {
                                        data: {
                                            index: e,
                                            overflows: Y
                                        },
                                        reset: {
                                            placement: t
                                        }
                                    };
                                    let n = null == (i = Y.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : i.placement;
                                    if (!n) switch (M) {
                                        case "bestFit":
                                            {
                                                let e = null == (o = Y.filter(e => {
                                                    if (_) {
                                                        let t = m(e.placement);
                                                        return t === F || "y" === t
                                                    }
                                                    return !0
                                                }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : o[0];e && (n = e);
                                                break
                                            }
                                        case "initialPlacement":
                                            n = S
                                    }
                                    if (C !== n) return {
                                        reset: {
                                            placement: n
                                        }
                                    }
                                }
                                return {}
                            }
                        }).name,
                        fn: U.fn,
                        options: [I, void 0]
                    }, {
                        name: (Y = {
                            name: "size",
                            options: F = H = { ...eX,
                                apply: eD(e => {
                                    let {
                                        elements: t,
                                        rects: n,
                                        availableWidth: r,
                                        availableHeight: i
                                    } = e, {
                                        width: o,
                                        height: l
                                    } = n.reference, a = t.floating.style;
                                    a.setProperty("--radix-popper-available-width", `${r}px`), a.setProperty("--radix-popper-available-height", `${i}px`), a.setProperty("--radix-popper-anchor-width", `${o}px`), a.setProperty("--radix-popper-anchor-height", `${l}px`)
                                }, "apply")
                            },
                            async fn(e) {
                                var t, n;
                                let r, l, {
                                        placement: a,
                                        rects: s,
                                        platform: f,
                                        elements: p
                                    } = e,
                                    {
                                        apply: h = () => {},
                                        ...g
                                    } = u(F, e),
                                    y = await f.detectOverflow(e, g),
                                    w = c(a),
                                    v = d(a),
                                    x = "y" === m(a),
                                    {
                                        width: b,
                                        height: R
                                    } = s.floating;
                                "top" === w || "bottom" === w ? (r = w, l = v === (await (null == f.isRTL ? void 0 : f.isRTL(p.floating)) ? "start" : "end") ? "left" : "right") : (l = w, r = "end" === v ? "top" : "bottom");
                                let O = R - y.top - y.bottom,
                                    C = b - y.left - y.right,
                                    A = i(R - y[r], O),
                                    P = i(b - y[l], C),
                                    S = !e.middlewareData.shift,
                                    E = A,
                                    T = P;
                                if (null != (t = e.middlewareData.shift) && t.enabled.x && (T = C), null != (n = e.middlewareData.shift) && n.enabled.y && (E = O), S && !v) {
                                    let e = o(y.left, 0),
                                        t = o(y.right, 0),
                                        n = o(y.top, 0),
                                        r = o(y.bottom, 0);
                                    x ? T = b - 2 * (0 !== e || 0 !== t ? e + t : o(y.left, y.right)) : E = R - 2 * (0 !== n || 0 !== r ? n + r : o(y.top, y.bottom))
                                }
                                await h({ ...e,
                                    availableWidth: T,
                                    availableHeight: E
                                });
                                let D = await f.getDimensions(p.floating);
                                return b !== D.width || R !== D.height ? {
                                    reset: {
                                        rects: !0
                                    }
                                } : {}
                            }
                        }).name,
                        fn: Y.fn,
                        options: [H, void 0]
                    }, ek && {
                        name: (X = {
                            name: "arrow",
                            options: $ = B = {
                                element: ek,
                                padding: ei
                            },
                            fn(e) {
                                let {
                                    element: t,
                                    padding: n
                                } = "function" == typeof $ ? $(e) : $;
                                return t && ({}).hasOwnProperty.call(t, "current") ? null != t.current ? ep({
                                    element: t.current,
                                    padding: n
                                }).fn(e) : {} : t ? ep({
                                    element: t,
                                    padding: n
                                }).fn(e) : {}
                            }
                        }).name,
                        fn: X.fn,
                        options: [B, void 0]
                    }, eU({
                        arrowWidth: eH,
                        arrowHeight: e$
                    }), ef && {
                        name: (G = {
                            name: "hide",
                            options: _ = W = eV ? {
                                strategy: "referenceHidden",
                                ...eX
                            } : {
                                strategy: "referenceHidden",
                                padding: eX.padding,
                                altBoundary: eX.altBoundary
                            },
                            async fn(e) {
                                let {
                                    rects: t,
                                    platform: n
                                } = e, {
                                    strategy: r = "referenceHidden",
                                    ...i
                                } = u(_, e);
                                switch (r) {
                                    case "referenceHidden":
                                        {
                                            let r = S(await n.detectOverflow(e, { ...i,
                                                elementContext: "reference"
                                            }), t.reference);
                                            return {
                                                data: {
                                                    referenceHiddenOffsets: r,
                                                    referenceHidden: E(r)
                                                }
                                            }
                                        }
                                    case "escaped":
                                        {
                                            let r = S(await n.detectOverflow(e, { ...i,
                                                altBoundary: !0
                                            }), t.floating);
                                            return {
                                                data: {
                                                    escapedOffsets: r,
                                                    escaped: E(r)
                                                }
                                            }
                                        }
                                    default:
                                        return {}
                                }
                            }
                        }).name,
                        fn: G.fn,
                        options: [W, void 0]
                    }]
                }),
                e0 = eA.setPlacementState;
            (0, eS.f)(() => (e0(eJ), () => {
                e0(void 0)
            }), [eJ, e0]);
            let [e1, e2] = eY(eJ), e7 = (0, eP.f)(eR);
            (0, eS.f)(() => {
                eQ && (null == e7 || e7())
            }, [eQ, e7]);
            let e3 = null == (r = eZ.arrow) ? void 0 : r.x,
                e6 = null == (l = eZ.arrow) ? void 0 : l.y,
                e5 = (null == (s = eZ.arrow) ? void 0 : s.centerOffset) !== 0,
                [e8, e9] = n.useState();
            return (0, eS.f)(() => {
                eT && e9(window.getComputedStyle(eT).zIndex)
            }, [eT]), (0, eb.jsx)("div", {
                ref: eG.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: { ...eK,
                    transform: eQ ? eK.transform : "translate(0, -200%)",
                    minWidth: "max-content",
                    zIndex: e8,
                    "--radix-popper-transform-origin": [null == (f = eZ.transformOrigin) ? void 0 : f.x, null == (R = eZ.transformOrigin) ? void 0 : R.y].join(" "),
                    ...(null == (O = eZ.hide) ? void 0 : O.referenceHidden) && {
                        visibility: "hidden",
                        pointerEvents: "none"
                    }
                },
                dir: e.dir,
                children: (0, eb.jsx)(eB, {
                    scope: J,
                    placedSide: e1,
                    placedAlign: e2,
                    onArrowChange: eN,
                    arrowX: e3,
                    arrowY: e6,
                    shouldHideArrow: e5,
                    children: (0, eb.jsx)(ex.V.div, {
                        "data-side": e1,
                        "data-align": e2,
                        ...eO,
                        ref: eM,
                        style: { ...eO.style,
                            animation: eQ ? null == (C = eO.style) ? void 0 : C.animation : "none"
                        }
                    })
                })
            })
        }, "PopperContent")),
        e_ = {
            top: "bottom",
            right: "left",
            bottom: "top",
            left: "right"
        },
        eV = n.forwardRef(eD(function(e, t) {
            let {
                __scopePopper: n,
                ...r
            } = e, i = e$("PopperArrow", n), o = e_[i.placedSide];
            return (0, eb.jsx)("span", {
                ref: i.onArrowChange,
                style: {
                    position: "absolute",
                    left: i.arrowX,
                    top: i.arrowY,
                    [o]: 0,
                    transformOrigin: {
                        top: "",
                        right: "0 0",
                        bottom: "center 0",
                        left: "100% 0"
                    }[i.placedSide],
                    transform: {
                        top: "translateY(100%)",
                        right: "translateY(50%) rotate(90deg) translateX(-50%)",
                        bottom: "rotate(180deg)",
                        left: "translateY(50%) rotate(-90deg) translateX(50%)"
                    }[i.placedSide],
                    visibility: i.shouldHideArrow ? "hidden" : void 0
                },
                children: (0, eb.jsx)(eO, { ...r,
                    ref: t,
                    style: { ...r.style,
                        display: "block"
                    }
                })
            })
        }, "PopperArrow"));

    function eq(e) {
        return null !== e
    }
    eD(eq, "isNotNull");
    var eU = eD(e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
            var n, r, i;
            let {
                placement: o,
                rects: l,
                middlewareData: a
            } = t, s = (null == (n = a.arrow) ? void 0 : n.centerOffset) !== 0, f = s ? 0 : e.arrowWidth, u = s ? 0 : e.arrowHeight, [c, d] = eY(o), p = {
                start: "0%",
                center: "50%",
                end: "100%"
            }[d], h = ((null == (r = a.arrow) ? void 0 : r.x) ? ? 0) + f / 2, m = ((null == (i = a.arrow) ? void 0 : i.y) ? ? 0) + u / 2, g = "", y = "";
            return "bottom" === c ? (g = s ? p : `${h}px`, y = `${-u}px`) : "top" === c ? (g = s ? p : `${h}px`, y = `${l.floating.height+u}px`) : "right" === c ? (g = `${-u}px`, y = s ? p : `${m}px`) : "left" === c && (g = `${l.floating.width+u}px`, y = s ? p : `${m}px`), {
                data: {
                    x: g,
                    y
                }
            }
        }
    }), "transformOrigin");

    function eY(e) {
        let [t, n = "center"] = e.split("-");
        return [t, n]
    }
    eD(eY, "getSideAndAlignFromPlacement"), e.s(["g", 0, eH, "j", 0, eV, "c", 0, eW, "F", 0, ez, "y", 0, ek], 80803)
}]);

//# debugId=ec8b3f51-cc44-4afb-d9b3-0cacc2370411