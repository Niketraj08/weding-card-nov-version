;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "57d84e9b-296c-0677-0267-d04c1760326d")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 679780, e => {
    "use strict";
    let t, n, r, i, o, a, s, l, u, c, d, p, f, h, m, g, v, _, y, b, S, w, E, k, T, I, R, x, C, A, M, P, N, O, D, L, $, F, U, B;
    var j, W, H, z, q, G, V, Y, K, J, X, Q, Z, ee, et, en = e.i(724670);
    let er = "11.8.0",
        ei = globalThis;

    function eo() {
        return ea(ei), ei
    }

    function ea(e) {
        let t = e.__SENTRY__ = e.__SENTRY__ || {};
        return t.version = t.version || er, t[er] = t[er] || {}
    }

    function es(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ei,
            r = n.__SENTRY__ = n.__SENTRY__ || {},
            i = r[er] = r[er] || {};
        return i[e] || (i[e] = t())
    }
    let el = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
        eu = ["debug", "info", "warn", "error", "log", "assert", "trace"],
        ec = {};

    function ed(e) {
        if (!("console" in ei)) return e();
        let t = ei.console,
            n = {},
            r = Object.keys(ec);
        r.forEach(e => {
            let r = ec[e];
            n[e] = t[e], t[e] = r
        });
        try {
            return e()
        } finally {
            r.forEach(e => {
                t[e] = n[e]
            })
        }
    }

    function ep() {
        return eh().enabled
    }

    function ef(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        el && ep() && ed(() => {
            ei.console[e](`Sentry Logger [${e}]:`, ...n)
        })
    }

    function eh() {
        return el ? es("loggerSettings", () => ({
            enabled: !1
        })) : {
            enabled: !1
        }
    }
    let em = {
        enable: function() {
            eh().enabled = !0
        },
        disable: function() {
            eh().enabled = !1
        },
        isEnabled: ep,
        log: function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            ef("log", ...t)
        },
        warn: function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            ef("warn", ...t)
        },
        error: function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            ef("error", ...t)
        }
    };

    function eg(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [t],
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "npm",
            i = (e._metadata = e._metadata || {}).sdk = e._metadata.sdk || {};
        i.name || (i.name = `sentry.javascript.${t}`, i.packages = n.map(e => ({
            name: `${r}:@sentry/${e}`,
            version: er
        })), i.version = er)
    }
    let ev = Object.prototype.toString;

    function e_(e) {
        switch (ev.call(e)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
            case "[object WebAssembly.Exception]":
                return !0;
            default:
                return eA(e, Error)
        }
    }

    function ey(e, t) {
        return ev.call(e) === `[object ${t}]`
    }

    function eb(e) {
        return ey(e, "ErrorEvent")
    }

    function eS(e) {
        return ey(e, "DOMError")
    }

    function ew(e) {
        return ey(e, "String")
    }

    function eE(e) {
        return "object" == typeof e && null !== e && "__sentry_template_string__" in e && "__sentry_template_values__" in e
    }

    function ek(e) {
        return null === e || eE(e) || "object" != typeof e && "function" != typeof e
    }

    function eT(e) {
        return ey(e, "Object")
    }

    function eI(e) {
        return "object" == typeof e && null !== e
    }

    function eR(e) {
        return "u" > typeof Event && eA(e, Event)
    }

    function ex(e) {
        return ey(e, "RegExp")
    }

    function eC(e) {
        return !!((null == e ? void 0 : e.then) && "function" == typeof e.then)
    }

    function eA(e, t) {
        try {
            return e instanceof t
        } catch {
            return !1
        }
    }

    function eM(e) {
        return "u" > typeof Request && eA(e, Request)
    }

    function eP(e, t, n) {
        if (!(t in e)) return;
        let r = e[t];
        if ("function" != typeof r) return;
        let i = n(r);
        "function" == typeof i && eO(i, r);
        try {
            e[t] = i
        } catch {
            el && em.log(`Failed to replace method "${t}" in object`, e)
        }
    }

    function eN(e, t, n) {
        try {
            Object.defineProperty(e, t, {
                value: n,
                writable: !0,
                configurable: !0
            })
        } catch {
            el && em.log(`Failed to add non-enumerable property "${String(t)}" to object`, e)
        }
    }

    function eO(e, t) {
        try {
            let n = t.prototype || {};
            e.prototype = t.prototype = n, eN(e, "__sentry_original__", t)
        } catch {}
    }

    function eD(e) {
        return e.__sentry_original__
    }

    function eL(e) {
        if (e_(e)) return {
            message: e.message,
            name: e.name,
            stack: e.stack,
            ...e$(e)
        };
        if (eR(e)) {
            let {
                type: t,
                target: n,
                currentTarget: r,
                detail: i
            } = e;
            return {
                type: t,
                target: n,
                currentTarget: r,
                ...i ? {
                    detail: i
                } : {},
                ...e$(e)
            }
        }
        return e
    }

    function e$(e) {
        return eI(e) ? Object.fromEntries(Object.entries(e)) : {}
    }

    function eF(e) {
        if (void 0 !== t) return t ? t(e) : e();
        let n = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__");
        return n in ei && "function" == typeof ei[n] ? (t = ei[n])(e) : (t = null, e())
    }

    function eU() {
        return eF(() => Math.random())
    }

    function eB() {
        return eF(() => Date.now())
    }
    let ej = Symbol.for("sentry.skipNormalization"),
        eW = Symbol.for("sentry.overrideNormalizationDepth"),
        eH = /\(error: (.*)\)/,
        ez = /captureMessage|captureException/;

    function eq() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        let r = t.sort((e, t) => e[0] - t[0]).map(e => e[1]);
        return function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                i = [],
                o = e.split("\n");
            for (let e = t; e < o.length; e++) {
                let t = o[e];
                t.length > 1024 && (t = t.slice(0, 1024));
                let a = eH.test(t) ? t.replace(eH, "$1") : t;
                if (!a.includes("Error: ")) {
                    for (let e of r) {
                        let t = e(a);
                        if (t) {
                            i.push(t);
                            break
                        }
                    }
                    if (i.length >= 50 + n) break
                }
            }
            var a = i.slice(n);
            if (!a.length) return [];
            let s = Array.from(a);
            return /sentryWrapped/.test(eG(s).function || "") && s.pop(), s.reverse(), ez.test(eG(s).function || "") && (s.pop(), ez.test(eG(s).function || "") && s.pop()), s.slice(0, 50).map(e => ({ ...e,
                filename: e.filename || eG(s).filename,
                function: e.function || "?"
            }))
        }
    }

    function eG(e) {
        return e[e.length - 1] || {}
    }
    let eV = "<anonymous>";

    function eY(e) {
        try {
            if (!e || "function" != typeof e) return eV;
            return e.name || eV
        } catch {
            return eV
        }
    }

    function eK(e) {
        let t = e.exception;
        if (t) {
            let e = [];
            try {
                return t.values.forEach(t => {
                    t.stacktrace.frames && e.push(...t.stacktrace.frames)
                }), e
            } catch {}
        }
    }

    function eJ(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0;
        try {
            return function e(t, n) {
                let r, i, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0,
                    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0,
                    s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : (r = new WeakSet, [function(e) {
                        return !!r.has(e) || (r.add(e), !1)
                    }, function(e) {
                        r.delete(e)
                    }]),
                    [l, u] = s;
                if (null == n || ["boolean", "string"].includes(typeof n) || "number" == typeof n && Number.isFinite(n)) return n;
                let c = eX(t, n);
                if (!c.startsWith("[object ")) return c;
                if (n[ej]) return n;
                let d = "number" == typeof(i = n[eW]) ? i : void 0,
                    p = void 0 !== d ? d : o;
                if (0 === p) return c.replace("object ", "");
                if (l(n)) return "[Circular ~]";
                if (n && "function" == typeof n.toJSON) try {
                    let t = n.toJSON();
                    return e("", t, p - 1, a, s)
                } catch {}
                let f = Array.isArray(n) ? [] : {},
                    h = 0,
                    m = eL(n);
                for (let t in m) {
                    if (!Object.prototype.hasOwnProperty.call(m, t)) continue;
                    if (h >= a) {
                        f[t] = "[MaxProperties ~]";
                        break
                    }
                    let n = m[t];
                    f[t] = e(t, n, p - 1, a, s), h++
                }
                return u(n), f
            }("", e, t, n)
        } catch (e) {
            return {
                ERROR: `**non-serializable** (${e})`
            }
        }
    }

    function eX(t, r) {
        try {
            var i;
            let t;
            if (n) {
                let e = n(r);
                if (e) return e
            }
            if (r === e.g) return "[Global]";
            if ("number" == typeof r && !Number.isFinite(r)) return `[${r}]`;
            if ("function" == typeof r) return `[Function: ${eY(r)}]`;
            if ("symbol" == typeof r) return `[${String(r)}]`;
            if ("bigint" == typeof r) return `[BigInt: ${String(r)}]`;
            let o = (i = r, t = Object.getPrototypeOf(i), (null == t ? void 0 : t.constructor) ? t.constructor.name : "null prototype");
            return `[object ${o}]`
        } catch (e) {
            return `**non-serializable** (${e})`
        }
    }

    function eQ(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return "string" != typeof e || 0 === t || e.length <= t ? e : `${e.slice(0,t)}...`
    }

    function eZ(e, t) {
        let n = e,
            r = n.length;
        if (r <= 150) return n;
        t > r && (t = r);
        let i = Math.max(t - 60, 0);
        i < 5 && (i = 0);
        let o = Math.min(i + 140, r);
        return o > r - 5 && (o = r), o === r && (i = Math.max(o - 140, 0)), n = n.slice(i, o), i > 0 && (n = `'{snip} ${n}`), o < r && (n += " {snip}"), n
    }

    function e0(e, t) {
        if (!Array.isArray(e)) return "";
        let n = [];
        for (let t = 0; t < e.length; t++) {
            let r = e[t];
            ek(r) ? n.push(String(r)) : r instanceof Error ? n.push(r.message ? `${r.name}: ${r.message}` : r.name) : n.push(eX(void 0, r))
        }
        return n.join(t)
    }

    function e1(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !!ew(e) && (ex(t) ? t.test(e) : ew(t) ? n ? e === t : e.includes(t) : "function" == typeof t && t(e))
    }

    function e2(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        for (let r of t)
            if (e1(e, r, n)) return !0;
        return !1
    }

    function e3() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ei.crypto || ei.msCrypto;
        try {
            if (null == e ? void 0 : e.randomUUID) return eF(() => e.randomUUID()).replace(/-/g, "")
        } catch {}
        return r || (r = "10000000100040008000100000000000"), r.replace(/[018]/g, e => (e ^ (15 & 16 * eU()) >> e / 4).toString(16))
    }

    function e5(e) {
        var t, n;
        return null == (n = e.exception) || null == (t = n.values) ? void 0 : t[0]
    }

    function e4(e) {
        let {
            message: t,
            event_id: n
        } = e;
        if (t) return t;
        let r = e5(e);
        return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>"
    }

    function e6(e, t, n) {
        let r = e.exception = e.exception || {},
            i = r.values = r.values || [],
            o = i[0] = i[0] || {};
        o.value || (o.value = t || ""), o.type || (o.type = n || "Error")
    }

    function e8(e, t) {
        let n = e5(e);
        n && e7(n, t)
    }

    function e7(e, t) {
        let n = e.mechanism;
        e.mechanism = {
            type: "generic",
            handled: !0,
            ...n,
            ...t
        }, t && "data" in t && (e.mechanism.data = { ...null == n ? void 0 : n.data,
            ...t.data
        })
    }

    function e9(e) {
        if (te(e)) return !0;
        try {
            eN(e, "__sentry_captured__", !0)
        } catch {}
        return !1
    }

    function te(e) {
        try {
            return e.__sentry_captured__
        } catch {}
    }

    function tt() {
        return eB() / 1e3
    }
    let tn = [];

    function tr() {
        let {
            performance: e
        } = ei;
        return (null == e ? void 0 : e.now) ? eF(() => e.now()) : void 0
    }
    let ti = !1;

    function to(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e,
            n = ts(t);
        return null == n ? void 0 : (n + e) / 1e3
    }

    function ta() {
        return (i ?? (i = function() {
            let {
                performance: e
            } = ei;
            if (!(null == e ? void 0 : e.now) || !e.timeOrigin) return (null == e ? void 0 : e.now) && (tn = [{
                from: 0,
                origin: eB() - eF(() => e.now())
            }]), tt;
            let t = e.timeOrigin;
            tn = [{
                from: 0,
                origin: t
            }];
            let n = !0,
                r = 0;
            return () => eF(() => {
                let i = e.now(),
                    o = Date.now();
                return Math.abs(t + i - o) > 1e3 && (t = o - i, n ? tn = [{
                    from: 0,
                    origin: t
                }] : (tn.push({
                    from: r,
                    origin: t
                }), tn.length > 100 && tn.splice(1, 1))), n = !1, r = i, (t + i) / 1e3
            })
        }()))()
    }

    function ts() {
        let e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        for (let n of (ti || (ti = !0, Promise.resolve().then(() => {
                ti = !1
            }), ta()), tn)) {
            if (e && n.from > t) break;
            e = n
        }
        return null == e ? void 0 : e.origin
    }

    function tl(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), e.did || t.did || (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || ta(), t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = 32 === t.sid.length ? t.sid : e3()), void 0 !== t.init && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), "number" == typeof t.started && (e.started = t.started), e.ignoreDuration) e.duration = void 0;
        else if ("number" == typeof t.duration) e.duration = t.duration;
        else {
            let t = e.timestamp - e.started;
            e.duration = t >= 0 ? t : 0
        }
        t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), "number" == typeof t.errors && (e.errors = t.errors), t.status && (e.status = t.status)
    }

    function tu(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        if (!t || "object" != typeof t || n <= 0) return t;
        if (e && 0 === Object.keys(t).length) return e;
        let r = { ...e
        };
        for (let e in t) Object.prototype.hasOwnProperty.call(t, e) && (r[e] = tu(r[e], t[e], n - 1));
        return r
    }

    function tc() {
        return e3().substring(16)
    }
    class td {
        clone() {
            let e = new td;
            return e._breadcrumbs = [...this._breadcrumbs], e._tags = { ...this._tags
            }, e._attributes = { ...this._attributes
            }, e._extra = { ...this._extra
            }, e._contexts = { ...this._contexts
            }, this._contexts.flags && (e._contexts.flags = {
                values: [...this._contexts.flags.values]
            }), e._user = this._user, e._level = this._level, e._session = this._session, e._transactionName = this._transactionName, e._fingerprint = this._fingerprint, e._eventProcessors = [...this._eventProcessors], e._attachments = [...this._attachments], e._sdkProcessingMetadata = { ...this._sdkProcessingMetadata
            }, e._propagationContext = { ...this._propagationContext
            }, e._client = this._client, e._lastEventId = this._lastEventId, e._conversationId = this._conversationId, e.refs = { ...this.refs
            }, e
        }
        setClient(e) {
            this._client = e
        }
        setLastEventId(e) {
            this._lastEventId = e
        }
        getClient() {
            return this._client
        }
        lastEventId() {
            return this._lastEventId
        }
        addScopeListener(e) {
            this._scopeListeners.push(e)
        }
        addEventProcessor(e) {
            return this._eventProcessors.push(e), this
        }
        setUser(e) {
            return this._user = e || {
                email: void 0,
                id: void 0,
                ip_address: void 0,
                username: void 0
            }, this._session && tl(this._session, {
                user: e
            }), this._notifyScopeListeners(), this
        }
        getUser() {
            return this._user
        }
        setConversationId(e) {
            return this._conversationId = e || void 0, this._notifyScopeListeners(), this
        }
        setTags(e) {
            return this._tags = { ...this._tags,
                ...e
            }, this._notifyScopeListeners(), this
        }
        setTag(e, t) {
            return this.setTags({
                [e]: t
            })
        }
        setAttributes(e) {
            return this._attributes = { ...this._attributes,
                ...e
            }, this._notifyScopeListeners(), this
        }
        setAttribute(e, t) {
            return this.setAttributes({
                [e]: t
            })
        }
        removeAttribute(e) {
            return e in this._attributes && (delete this._attributes[e], this._notifyScopeListeners()), this
        }
        setExtras(e) {
            return this._extra = { ...this._extra,
                ...e
            }, this._notifyScopeListeners(), this
        }
        setExtra(e, t) {
            return this._extra = { ...this._extra,
                [e]: t
            }, this._notifyScopeListeners(), this
        }
        setFingerprint(e) {
            return this._fingerprint = e, this._notifyScopeListeners(), this
        }
        setLevel(e) {
            return this._level = e, this._notifyScopeListeners(), this
        }
        setTransactionName(e) {
            return this._transactionName = e, this._notifyScopeListeners(), this
        }
        setContext(e, t) {
            return null === t ? delete this._contexts[e] : this._contexts[e] = t, this._notifyScopeListeners(), this
        }
        setSession(e) {
            return e ? this._session = e : delete this._session, this._notifyScopeListeners(), this
        }
        getSession() {
            return this._session
        }
        update(e) {
            if (!e) return this;
            let t = "function" == typeof e ? e(this) : e,
                {
                    tags: n,
                    attributes: r,
                    extra: i,
                    user: o,
                    contexts: a,
                    level: s,
                    fingerprint: l = [],
                    propagationContext: u,
                    conversationId: c
                } = (t instanceof td ? t.getScopeData() : eT(t) ? e : void 0) || {};
            return this._tags = { ...this._tags,
                ...n
            }, this._attributes = { ...this._attributes,
                ...r
            }, this._extra = { ...this._extra,
                ...i
            }, this._contexts = { ...this._contexts,
                ...a
            }, o && Object.keys(o).length && (this._user = o), s && (this._level = s), l.length && (this._fingerprint = l), u && (this._propagationContext = u), c && (this._conversationId = c), this
        }
        addBreadcrumb(e, t) {
            let n = "number" == typeof t ? t : 100;
            if (n <= 0) return this;
            let r = {
                timestamp: tt(),
                ...e,
                message: e.message ? eQ(e.message, 2048) : e.message
            };
            return this._breadcrumbs.push(r), this._breadcrumbs.length > n && (this._breadcrumbs = this._breadcrumbs.slice(-n)), this._notifyScopeListeners(), this
        }
        getLastBreadcrumb() {
            return this._breadcrumbs[this._breadcrumbs.length - 1]
        }
        clearBreadcrumbs() {
            return this._breadcrumbs = [], this._notifyScopeListeners(), this
        }
        addAttachment(e) {
            return this._attachments.push(e), this
        }
        clearAttachments() {
            return this._attachments = [], this
        }
        getScopeData() {
            return {
                breadcrumbs: this._breadcrumbs,
                attachments: this._attachments,
                contexts: this._contexts,
                tags: this._tags,
                attributes: this._attributes,
                extra: this._extra,
                user: this._user,
                level: this._level,
                fingerprint: this._fingerprint || [],
                eventProcessors: this._eventProcessors,
                propagationContext: this._propagationContext,
                sdkProcessingMetadata: this._sdkProcessingMetadata,
                transactionName: this._transactionName,
                conversationId: this._conversationId
            }
        }
        setSDKProcessingMetadata(e) {
            return this._sdkProcessingMetadata = tu(this._sdkProcessingMetadata, e, 2), this
        }
        setPropagationContext(e) {
            return this._propagationContext = e, this
        }
        getPropagationContext() {
            return this._propagationContext
        }
        captureException(e, t) {
            let n = (null == t ? void 0 : t.event_id) || e3();
            if (!this._client) return el && em.warn("No client configured on scope - will not capture exception!"), n;
            let r = Error("Sentry syntheticException");
            return this._client.captureException(e, {
                originalException: e,
                syntheticException: r,
                ...t,
                event_id: n
            }, this), n
        }
        captureMessage(e, t, n) {
            let r = (null == n ? void 0 : n.event_id) || e3();
            if (!this._client) return el && em.warn("No client configured on scope - will not capture message!"), r;
            let i = (null == n ? void 0 : n.syntheticException) ?? Error(e);
            return this._client.captureMessage(e, t, {
                originalException: e,
                syntheticException: i,
                ...n,
                event_id: r
            }, this), r
        }
        captureEvent(e, t) {
            let n = e.event_id || (null == t ? void 0 : t.event_id) || e3();
            return this._client ? this._client.captureEvent(e, { ...t,
                event_id: n
            }, this) : el && em.warn("No client configured on scope - will not capture event!"), n
        }
        _notifyScopeListeners() {
            this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(e => {
                e(this)
            }), this._notifyingListeners = !1)
        }
        constructor() {
            this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._attributes = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, eN(this, "refs", {}), this._propagationContext = {
                traceId: e3(),
                sampleRand: eU()
            }
        }
    }
    let tp = "__SENTRY_SUPPRESS_TRACING__",
        tf = e => e instanceof Promise && !e[th],
        th = Symbol("chained PromiseLike"),
        tm = (e, t, n) => {
            let r = e.then(e => (t(e), e), e => {
                throw n(e), e
            });
            return tf(r) && tf(e) ? r : tg(e, r)
        },
        tg = (e, t) => {
            if (!t) return e;
            let n = !1;
            for (let r in e) {
                if (r in t) continue;
                n = !0;
                let i = e[r];
                "function" == typeof i ? Object.defineProperty(t, r, {
                    value: function() {
                        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return i.apply(e, n)
                    },
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[r] = i
            }
            return n && Object.assign(t, {
                [th]: !0
            }), t
        };
    class tv {
        withScope(e) {
            let t, n = this._pushScope();
            try {
                t = e(n)
            } catch (e) {
                throw this._popScope(), e
            }
            return eC(t) ? tm(t, () => this._popScope(), () => this._popScope()) : (this._popScope(), t)
        }
        getClient() {
            return this.getStackTop().client
        }
        getScope() {
            return this.getStackTop().scope
        }
        getIsolationScope() {
            return this._isolationScope
        }
        getStackTop() {
            return this._stack[this._stack.length - 1]
        }
        _pushScope() {
            let e = this.getScope().clone();
            return this._stack.push({
                client: this.getClient(),
                scope: e
            }), e
        }
        _popScope() {
            return !(this._stack.length <= 1) && !!this._stack.pop()
        }
        constructor(e, t) {
            let n, r;
            n = e || new td, r = t || new td, this._stack = [{
                scope: n
            }], this._isolationScope = r
        }
    }

    function t_() {
        let e = ea(eo());
        return e.stack = e.stack || new tv(es("defaultCurrentScope", () => new td), es("defaultIsolationScope", () => new td))
    }

    function ty(e) {
        return t_().withScope(e)
    }

    function tb(e, t) {
        let n = t_();
        return n.withScope(() => (n.getStackTop().scope = e, t(e)))
    }

    function tS(e) {
        return t_().withScope(() => e(t_().getIsolationScope()))
    }

    function tw(e) {
        return ty(t => {
            t.setSDKProcessingMetadata({
                [tp]: !0
            });
            let n = e();
            return t.setSDKProcessingMetadata({
                [tp]: void 0
            }), n
        })
    }

    function tE(e) {
        let t = ea(e);
        return t.acs ? t.acs : {
            suppressTracing: tw,
            withIsolationScope: tS,
            withScope: ty,
            withSetScope: tb,
            withSetIsolationScope: (e, t) => tS(t),
            getCurrentScope: () => t_().getScope(),
            getIsolationScope: () => t_().getIsolationScope()
        }
    }

    function tk() {
        var e, t;
        return null == (e = (t = ea(eo())).externalPropagationContextProvider) ? void 0 : e.call(t)
    }

    function tT() {
        return tE(eo()).getCurrentScope()
    }

    function tI() {
        return tE(eo()).getIsolationScope()
    }

    function tR() {
        return es("globalScope", () => new td)
    }

    function tx() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        let r = tE(eo());
        if (2 === t.length) {
            let [e, n] = t;
            return e ? r.withSetScope(e, n) : r.withScope(n)
        }
        return r.withScope(t[0])
    }

    function tC() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        let r = tE(eo());
        if (2 === t.length) {
            let [e, n] = t;
            return e ? r.withSetIsolationScope(e, n) : r.withIsolationScope(n)
        }
        return r.withIsolationScope(t[0])
    }

    function tA() {
        return tT().getClient()
    }

    function tM(e) {
        let t = tk();
        if (t) return {
            trace_id: t.traceId,
            span_id: t.spanId
        };
        let {
            traceId: n,
            parentSpanId: r,
            propagationSpanId: i
        } = e.getPropagationContext(), o = {
            trace_id: n,
            span_id: i || tc()
        };
        return r && (o.parent_span_id = r), o
    }
    let tP = "production",
        tN = Symbol.for("SentryCallbackError");

    function tO(e, t, n) {
        let r;
        try {
            r = t()
        } catch (t) {
            return tD(e, t, n)
        }
        return eC(r) ? r.then(void 0, t => tD(e, t, n)) : r
    }

    function tD(e, t, n) {
        return el && em.error(e, t), n(t)
    }

    function tL(e) {
        return new tF(t => {
            t(e)
        })
    }

    function t$(e) {
        return new tF((t, n) => {
            n(e)
        })
    }
    class tF {
        then(e, t) {
            return new tF((n, r) => {
                this._handlers.push([!1, t => {
                    if (e) try {
                        n(e(t))
                    } catch (e) {
                        r(e)
                    } else n(t)
                }, e => {
                    if (t) try {
                        n(t(e))
                    } catch (e) {
                        r(e)
                    } else r(e)
                }]), this._executeHandlers()
            })
        } catch (e) {
            return this.then(e => e, e)
        } finally(e) {
            return new tF((t, n) => {
                let r, i;
                return this.then(t => {
                    i = !1, r = t, e && e()
                }, t => {
                    i = !0, r = t, e && e()
                }).then(() => {
                    i ? n(r) : t(r)
                })
            })
        }
        _executeHandlers() {
            if (0 === this._state) return;
            let e = this._handlers.slice();
            this._handlers = [], e.forEach(e => {
                e[0] || (1 === this._state && e[1](this._value), 2 === this._state && e[2](this._value), e[0] = !0)
            })
        }
        _runExecutor(e) {
            let t = (e, t) => {
                    if (0 === this._state) {
                        if (eC(t)) return void t.then(n, r);
                        this._state = e, this._value = t, this._executeHandlers()
                    }
                },
                n = e => {
                    t(1, e)
                },
                r = e => {
                    t(2, e)
                };
            try {
                e(n, r)
            } catch (e) {
                r(e)
            }
        }
        constructor(e) {
            this._state = 0, this._handlers = [], this._runExecutor(e)
        }
    }

    function tU(e) {
        let t = ei._sentryDebugIds,
            n = ei._debugIds;
        if (!t && !n) return {};
        let r = t ? Object.keys(t) : [],
            i = n ? Object.keys(n) : [];
        if (l && r.length === a && i.length === s) return l;
        a = r.length, s = i.length, l = {}, o || (o = {});
        let u = (t, n) => {
            for (let r of t) {
                let t = n[r],
                    i = null == o ? void 0 : o[r];
                if (i && l && t) l[i[0]] = t, o && (o[r] = [i[0], t]);
                else if (t) {
                    let n = e(r);
                    for (let e = n.length - 1; e >= 0; e--) {
                        let i = n[e],
                            a = null == i ? void 0 : i.filename;
                        if (a && l && o) {
                            l[a] = t, o[r] = [a, t];
                            break
                        }
                    }
                }
            }
        };
        return t && u(r, t), n && u(i, n), l
    }
    let tB = /^o(\d+)\./,
        tj = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)((?:\[[:.%\w]+\]|[\w.-]+))(?::(\d+))?\/(.+)/;

    function tW(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            {
                host: n,
                path: r,
                pass: i,
                port: o,
                projectId: a,
                protocol: s,
                publicKey: l
            } = e;
        return `${s}://${l}${t&&i?`:${i}`:""}@${n}${o?`:${o}`:""}/${r?`${r}/`:r}${a}`
    }

    function tH(e) {
        let t = tj.exec(e);
        if (!t) return void ed(() => {
            console.error(`Invalid Sentry Dsn: ${e}`)
        });
        let [n, r, i = "", o = "", a = "", s = ""] = t.slice(1), l = "", u = s, c = u.split("/");
        if (c.length > 1 && (l = c.slice(0, -1).join("/"), u = c.pop()), u) {
            let e = u.match(/^\d+/);
            e && (u = e[0])
        }
        return tz({
            host: o,
            pass: i,
            path: l,
            projectId: u,
            port: a,
            protocol: n,
            publicKey: r
        })
    }

    function tz(e) {
        return {
            protocol: e.protocol,
            publicKey: e.publicKey || "",
            pass: e.pass || "",
            host: e.host,
            port: e.port || "",
            path: e.path || "",
            projectId: e.projectId
        }
    }

    function tq(e) {
        let t, n = e.getOptions(),
            {
                host: r
            } = e.getDsn() || {};
        if (n.orgId) t = String(n.orgId);
        else {
            let e;
            r && (t = null == (e = r.match(tB)) ? void 0 : e[1])
        }
        return t
    }

    function tG(e) {
        let t = "string" == typeof e ? tH(e) : tz(e);
        if (t && function(e) {
                if (!el) return !0;
                let {
                    port: t,
                    projectId: n,
                    protocol: r
                } = e;
                return !["protocol", "publicKey", "host", "projectId"].find(t => !e[t] && (em.error(`Invalid Sentry Dsn: ${t} missing`), !0)) && (n.match(/^\d+$/) ? "http" !== r && "https" !== r ? (em.error(`Invalid Sentry Dsn: Invalid protocol ${r}`), !1) : !(t && isNaN(parseInt(t, 10))) || (em.error(`Invalid Sentry Dsn: Invalid port ${t}`), !1) : (em.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1))
            }(t)) return t
    }

    function tV(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return [e, t]
    }

    function tY(e, t) {
        let [n, r] = e;
        return [n, [...r, t]]
    }

    function tK(e, t) {
        for (let n of e[1]) {
            let e = n[0].type;
            if (t(n, e)) return !0
        }
        return !1
    }

    function tJ(e, t) {
        return tK(e, (e, n) => t.includes(n))
    }

    function tX(e) {
        let t = ea(ei);
        return t.encodePolyfill ? t.encodePolyfill(e) : new TextEncoder().encode(e)
    }

    function tQ(e) {
        let [t, n] = e, r = JSON.stringify(t);

        function i(e) {
            "string" == typeof r ? r = "string" == typeof e ? r + e : [tX(r), e] : r.push("string" == typeof e ? tX(e) : e)
        }
        for (let e of n) {
            let [t, n] = e;
            if (i(`
${JSON.stringify(t)}
`), "string" == typeof n || n instanceof Uint8Array) i(n);
            else {
                let e;
                try {
                    e = JSON.stringify(n)
                } catch {
                    e = JSON.stringify(eJ(n))
                }
                i(e)
            }
        }
        return "string" == typeof r ? r : function(e) {
            let t = new Uint8Array(e.reduce((e, t) => e + t.length, 0)),
                n = 0;
            for (let r of e) t.set(r, n), n += r.length;
            return t
        }(r)
    }
    let tZ = {
        sessions: "session",
        event: "error",
        client_report: "internal",
        user_report: "default",
        profile_chunk: "profile",
        replay_event: "replay",
        replay_recording: "replay",
        check_in: "monitor",
        raw_security: "security",
        log: "log_item",
        trace_metric: "metric"
    };

    function t0(e) {
        return e in tZ ? tZ[e] : e
    }

    function t1(e) {
        if (!(null == e ? void 0 : e.sdk)) return;
        let {
            name: t,
            version: n
        } = e.sdk;
        return {
            name: t,
            version: n
        }
    }

    function t2(e, t, n, r) {
        var i;
        let o = null == (i = e.sdkProcessingMetadata) ? void 0 : i.dynamicSamplingContext;
        return {
            event_id: e.event_id,
            sent_at: new Date(eB()).toISOString(),
            ...t && {
                sdk: t
            },
            ...!!n && r && {
                dsn: tW(r)
            },
            ...o && {
                trace: o
            }
        }
    }

    function t3(e) {
        return "replay_event" === e ? "replay" : e || "error"
    }

    function t5(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = {};
        for (let [r, i] of Object.entries(e ?? {})) {
            let e = function(e, t) {
                let {
                    value: n,
                    unit: r
                } = "object" == typeof e && null != e && !Array.isArray(e) && Object.keys(e).includes("value") ? e : {
                    value: e,
                    unit: void 0
                }, i = function(e) {
                    if (Array.isArray(e)) return {
                        value: e,
                        type: "array"
                    };
                    let t = "string" == typeof e ? "string" : "boolean" == typeof e ? "boolean" : "number" != typeof e || Number.isNaN(e) ? null : Number.isInteger(e) ? "integer" : "double";
                    if (t) return {
                        value: e,
                        type: t
                    }
                }(n), o = r && "string" == typeof r ? {
                    unit: r
                } : {};
                if (i) return { ...i,
                    ...o
                };
                if (!t || "skip-undefined" === t && void 0 === n) return;
                let a = "";
                try {
                    a = JSON.stringify(n) ?? ""
                } catch {}
                return {
                    value: a,
                    type: "string",
                    ...o
                }
            }(i, t);
            e && (n[r] = e)
        }
        return n
    }

    function t4(e) {
        if (!e) return 0;
        let t = 0;
        for (let [r, i] of Object.entries(e)) {
            var n;
            t += 2 * r.length, t += 2 * i.type.length, t += ((null == (n = i.unit) ? void 0 : n.length) ?? 0) * 2;
            let e = i.value;
            Array.isArray(e) ? t += t6(e[0]) * e.length : ek(e) ? t += t6(e) : t += 100
        }
        return t
    }

    function t6(e) {
        return "string" == typeof e ? 2 * e.length : "boolean" == typeof e ? 4 : 8 * ("number" == typeof e)
    }
    let t8 = "browser.navigation.id",
        t7 = "browser.navigation.type",
        t9 = "browser.web_vital.inp.target",
        ne = "code.function.name",
        nt = "db.operation.name",
        nn = "db.system.name",
        nr = "graphql.document",
        ni = "http.request.method",
        no = "http.response.body.size",
        na = "http.route",
        ns = "router.navigation.route.id",
        nl = "sentry.description",
        nu = "sentry.exclusive_time",
        nc = "sentry.idle_span_finish_reason",
        nd = "sentry.op",
        np = "sentry.origin",
        nf = "sentry.profile_id",
        nh = "sentry.segment.name",
        nm = "sentry.segment.name.source",
        ng = "server.address",
        nv = "ui.component_name",
        n_ = "url.domain",
        ny = "url.fragment",
        nb = "url.full",
        nS = "url.path",
        nw = "url.query",
        nE = "url.template",
        nk = "user_agent.original",
        nT = "sentry.sample_rate",
        nI = "sentry.previous_trace_sample_rate",
        nR = "sentry.op",
        nx = "sentry.origin",
        nC = "sentry.measurement_unit",
        nA = "sentry.measurement_value",
        nM = "sentry.custom_span_name",
        nP = ["ok", "deadline_exceeded", "unauthenticated", "permission_denied", "not_found", "resource_exhausted", "invalid_argument", "unimplemented", "unavailable", "internal_error", "unknown_error", "cancelled", "already_exists", "failed_precondition", "aborted", "out_of_range", "data_loss"];

    function nN(e) {
        if (e < 400 && e >= 100) return {
            code: 1
        };
        if (e >= 400 && e < 500) switch (e) {
            case 401:
                return {
                    code: 2,
                    message: "unauthenticated"
                };
            case 403:
                return {
                    code: 2,
                    message: "permission_denied"
                };
            case 404:
                return {
                    code: 2,
                    message: "not_found"
                };
            case 409:
                return {
                    code: 2,
                    message: "already_exists"
                };
            case 413:
                return {
                    code: 2,
                    message: "failed_precondition"
                };
            case 429:
                return {
                    code: 2,
                    message: "resource_exhausted"
                };
            case 499:
                return {
                    code: 2,
                    message: "cancelled"
                };
            default:
                return {
                    code: 2,
                    message: "invalid_argument"
                }
        }
        if (e >= 500 && e < 600) switch (e) {
            case 501:
                return {
                    code: 2,
                    message: "unimplemented"
                };
            case 503:
                return {
                    code: 2,
                    message: "unavailable"
                };
            case 504:
                return {
                    code: 2,
                    message: "deadline_exceeded"
                }
        }
        return {
            code: 2,
            message: "internal_error"
        }
    }

    function nO(e, t) {
        e.setAttribute("http.response.status_code", t);
        let n = nN(t);
        "unknown_error" !== n.message && e.setStatus(n)
    }

    function nD(e) {
        try {
            let t = ei.WeakRef;
            if ("function" == typeof t) return new t(e)
        } catch {}
        return e
    }

    function nL(e) {
        if (e) {
            if ("object" == typeof e && "deref" in e && "function" == typeof e.deref) try {
                return e.deref()
            } catch {
                return
            }
            return e
        }
    }
    let n$ = "_sentryScope",
        nF = "_sentryIsolationScope",
        nU = Symbol.for("sentry.tracerProviderSpan");

    function nB(e, t, n) {
        e && (eN(e, nF, nD(n)), eN(e, n$, t))
    }

    function nj(e) {
        return {
            scope: e[n$],
            isolationScope: nL(e[nF])
        }
    }
    let nW = "sentry-";

    function nH(e) {
        let t = nq(e);
        if (!t) return;
        let n = Object.entries(t).reduce((e, t) => {
            let [n, r] = t;
            return n.startsWith(nW) && (e[n.slice(nW.length)] = r), e
        }, {});
        return Object.keys(n).length > 0 ? n : void 0
    }

    function nz(e) {
        if (e) {
            var t = Object.entries(e).reduce((e, t) => {
                let [n, r] = t;
                return r && (e[`${nW}${n}`] = r), e
            }, {});
            return 0 !== Object.keys(t).length ? Object.entries(t).reduce((e, t, n) => {
                let [r, i] = t, o = `${encodeURIComponent(r)}=${encodeURIComponent(i)}`, a = 0 === n ? o : `${e},${o}`;
                return a.length > 8192 ? (el && em.warn(`Not adding key: ${r} with val: ${i} to baggage header due to exceeding baggage size limits.`), e) : a
            }, "") : void 0
        }
    }

    function nq(e) {
        if (e && (ew(e) || Array.isArray(e))) return Array.isArray(e) ? e.reduce((e, t) => (Object.entries(nG(t)).forEach(t => {
            let [n, r] = t;
            e[n] = r
        }), e), {}) : nG(e)
    }

    function nG(e) {
        return e.split(",").map(e => {
            let t = e.indexOf("=");
            return -1 === t ? [] : [e.slice(0, t), e.slice(t + 1)].map(e => {
                try {
                    return decodeURIComponent(e.trim())
                } catch {
                    return
                }
            })
        }).reduce((e, t) => {
            let [n, r] = t;
            return n && r && (e[n] = r), e
        }, {})
    }

    function nV(e) {
        if ("boolean" == typeof e) return Number(e);
        let t = "string" == typeof e ? parseFloat(e) : e;
        if (!("number" != typeof t || isNaN(t)) && !(t < 0) && !(t > 1)) return t
    }
    let nY = RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");

    function nK(e) {
        let t;
        if (!e) return;
        let n = e.match(nY);
        if (n) return "1" === n[3] ? t = !0 : "0" === n[3] && (t = !1), {
            traceId: n[1],
            parentSampled: t,
            parentSpanId: n[2]
        }
    }

    function nJ(e, t) {
        let n = nK(e),
            r = nH(t);
        if (!(null == n ? void 0 : n.traceId)) return {
            traceId: e3(),
            sampleRand: eU()
        };
        let i = function(e, t) {
            let n = nV(null == t ? void 0 : t.sample_rand);
            if (void 0 !== n) return n;
            let r = nV(null == t ? void 0 : t.sample_rate);
            return r && (null == e ? void 0 : e.parentSampled) !== void 0 ? e.parentSampled ? eU() * r : r + eU() * (1 - r) : eU()
        }(n, r);
        r && (r.sample_rand = i.toString());
        let {
            traceId: o,
            parentSpanId: a,
            parentSampled: s
        } = n;
        return {
            traceId: o,
            parentSpanId: a,
            sampled: s,
            dsc: r || {},
            sampleRand: i
        }
    }

    function nX() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e3(),
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tc(),
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = "";
        return void 0 !== n && (r = n ? "-1" : "-0"), `${e}-${t}${r}`
    }

    function nQ() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e3(),
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tc(),
            n = arguments.length > 2 ? arguments[2] : void 0;
        return `00-${e}-${t}-${n?"01":"00"}`
    }
    let nZ = "span";

    function n0(e, t) {
        t ? e.refs[nZ] = nD(t) : delete e.refs[nZ]
    }

    function n1(e) {
        let {
            spanId: t,
            traceId: n,
            isRemote: r
        } = e.spanContext(), i = r ? t : n8(e).parent_span_id, o = nj(e).scope;
        return {
            parent_span_id: i,
            span_id: r ? (null == o ? void 0 : o.getPropagationContext().propagationSpanId) || tc() : t,
            trace_id: n
        }
    }

    function n2(e) {
        let {
            traceId: t,
            spanId: n
        } = e.spanContext();
        return nX(t, n, rr(e))
    }

    function n3(e) {
        return e && e.length > 0 ? e.map(e => {
            let {
                context: {
                    spanId: t,
                    traceId: n,
                    traceFlags: r,
                    ...i
                },
                attributes: o
            } = e;
            return {
                span_id: t,
                trace_id: n,
                sampled: 1 === r,
                attributes: o,
                ...i
            }
        }) : void 0
    }

    function n5(e) {
        return (null == e ? void 0 : e.length) ? e.map(e => {
            let {
                context: {
                    spanId: t,
                    traceId: n,
                    traceFlags: r
                },
                attributes: i
            } = e;
            return {
                span_id: t,
                trace_id: n,
                sampled: 1 === r,
                attributes: i
            }
        }) : void 0
    }

    function n4(e) {
        return "number" == typeof e ? n6(e) : Array.isArray(e) ? e[0] + e[1] / 1e9 : e instanceof Date ? n6(e.getTime()) : ta()
    }

    function n6(e) {
        return e > 0x2540be3ff ? e / 1e3 : e
    }

    function n8(e) {
        if (rn(e)) return e.getStaticSpanJSON();
        let {
            spanId: t,
            traceId: n
        } = e.spanContext();
        if (rt(e)) {
            let {
                attributes: r,
                startTime: i,
                name: o,
                endTime: a,
                status: s,
                links: l
            } = e;
            return {
                span_id: t,
                trace_id: n,
                data: r,
                description: o,
                parent_span_id: n9(e),
                start_timestamp: n4(i),
                timestamp: n4(a) || void 0,
                status: ri(s),
                op: r[nd],
                origin: r[np],
                links: n3(l)
            }
        }
        return {
            span_id: t,
            trace_id: n,
            start_timestamp: 0,
            status: "ok",
            data: {}
        }
    }

    function n7(e) {
        if (rn(e)) return e.getSpanJSON();
        let {
            spanId: t,
            traceId: n
        } = e.spanContext();
        if (rt(e)) {
            let {
                attributes: r,
                startTime: i,
                name: o,
                endTime: a,
                status: s,
                links: l
            } = e;
            return {
                name: o,
                span_id: t,
                trace_id: n,
                parent_span_id: n9(e),
                start_timestamp: n4(i),
                end_timestamp: n4(a) || void 0,
                is_segment: rf(e),
                status: ro(s),
                attributes: ra(r, s),
                links: n5(l)
            }
        }
        return {
            span_id: t,
            trace_id: n,
            start_timestamp: 0,
            name: "",
            status: "ok",
            is_segment: rf(e),
            attributes: {}
        }
    }

    function n9(e) {
        var t;
        return "parentSpanId" in e ? e.parentSpanId : "parentSpanContext" in e ? null == (t = e.parentSpanContext) ? void 0 : t.spanId : void 0
    }

    function re(e) {
        var t;
        return { ...e,
            end_timestamp: e.end_timestamp ?? e.start_timestamp,
            attributes: t5(e.attributes),
            links: null == (t = e.links) ? void 0 : t.map(e => ({ ...e,
                attributes: t5(e.attributes)
            }))
        }
    }

    function rt(e) {
        return !!e.attributes && !!e.startTime && !!e.name && !!e.endTime && !!e.status
    }

    function rn(e) {
        return "function" == typeof e.getSpanJSON
    }

    function rr(e) {
        let {
            traceFlags: t
        } = e.spanContext();
        return 1 === t
    }

    function ri(e) {
        var t;
        return e && 0 !== e.code && 1 !== e.code ? e.message && "ok" !== (t = e.message) && nP.includes(t) ? e.message : "internal_error" : "ok"
    }

    function ro(e) {
        return e && 1 !== e.code && 0 !== e.code && "cancelled" !== e.message ? "error" : "ok"
    }

    function ra(e, t) {
        let n = "error" === ro(t) ? null == t ? void 0 : t.message : void 0;
        return { ...n && {
                "sentry.status.message": n
            },
            ...e
        }
    }
    let rs = "_sentryChildSpans",
        rl = "_sentryRootSpan";

    function ru(e, t) {
        let n = e[rl] || e;
        eN(t, rl, n), t.setAttribute(nm, void 0), !rr(e) || (e.isRecording() || n.isRecording()) && (e[rs] ? e[rs].add(t) : eN(e, rs, new Set([t])))
    }

    function rc(e) {
        let t = new Set;
        return ! function e(n) {
            if (!t.has(n) && rr(n))
                for (let r of (t.add(n), n[rs] ? Array.from(n[rs]) : [])) e(r)
        }(e), Array.from(t)
    }
    let rd = rp;

    function rp(e) {
        return e[rl] || e
    }

    function rf(e) {
        return e === rp(e)
    }

    function rh(e) {
        let t = tE(eo());
        return t.getActiveSpan ? t.getActiveSpan(e) : nL((e || tT()).refs[nZ])
    }

    function rm(e, t) {
        e.updateName(t), e.setAttributes({
            [nM]: t
        }), rg(e, "custom")
    }

    function rg(e, t) {
        rf(e) && e.setAttribute(nm, t)
    }
    let rv = new WeakMap;

    function r_(e) {
        return ek(e) ? void 0 : e
    }

    function ry(e) {
        var t;
        return (null == (t = e.data) ? void 0 : t.__sentry__) === !0
    }

    function rb(e) {
        let t = [];
        e.message && t.push(e.message);
        try {
            let n = e.exception.values[e.exception.values.length - 1];
            (null == n ? void 0 : n.value) && (t.push(n.value), n.type && t.push(`${n.type}: ${n.value}`))
        } catch {}
        return t
    }

    function rS(e) {
        var t;
        if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1;
        let n = e || (null == (t = tA()) ? void 0 : t.getOptions());
        return !!n && (null != n.tracesSampleRate || !!n.tracesSampler)
    }
    let rw = Symbol.for("sentry.nonRecordingSpan");
    class rE {
        spanContext() {
            return {
                spanId: this._spanId,
                traceId: this._traceId,
                traceFlags: 0
            }
        }
        end(e) {}
        setAttribute(e, t) {
            return this
        }
        setAttributes(e) {
            return this
        }
        setStatus(e) {
            return this
        }
        updateName(e) {
            return this
        }
        isRecording() {
            return !1
        }
        addEvent(e, t, n) {
            return this
        }
        addLink(e) {
            return this
        }
        addLinks(e) {
            return this
        }
        recordException(e, t) {}
        constructor(e = {}) {
            this._traceId = e.traceId || e3(), this._spanId = e.spanId || tc(), this.dropReason = e.dropReason, eN(this, rw, !0)
        }
    }

    function rk(e) {
        return !!e && !0 === e[rw]
    }
    let rT = "_frozenDsc";

    function rI(e, t) {
        let n = t.getOptions(),
            {
                publicKey: r
            } = t.getDsn() || {},
            i = {
                environment: n.environment || tP,
                release: n.release,
                public_key: r,
                trace_id: e,
                org_id: tq(t)
            };
        return t.emit("createDsc", i), i
    }

    function rR(e, t) {
        if (tk()) return;
        let n = t.getPropagationContext();
        return n.dsc || rI(n.traceId, e)
    }

    function rx(e) {
        let t = tA();
        if (!t) return {};
        let n = rd(e),
            r = n8(n),
            i = r.data,
            o = n.spanContext().traceState,
            a = (null == o ? void 0 : o.get("sentry.sample_rate")) ?? i[nT] ?? i[nI];

        function s(e) {
            return ("number" == typeof a || "string" == typeof a) && (e.sample_rate = `${a}`), e
        }
        let l = n[rT];
        if (l) return s(l);
        let u = rk(n),
            c = u && "ignored" === n.dropReason;
        if (u && (!rS(t.getOptions()) || c)) {
            let e = nj(n).scope,
                r = e && rR(t, e);
            if (r) {
                let e = { ...r
                };
                return c && (e.sampled = "false"), s(e)
            }
        }
        let d = null == o ? void 0 : o.get("sentry.dsc"),
            p = d && nH(d);
        if (p) return s(p);
        let f = rI(e.spanContext().traceId, t),
            h = i[nm],
            m = r.description;
        if ("url" !== h && m && (f.transaction = m), rS()) {
            var g;
            f.sampled = String(rr(n)), f.sample_rand = (null == o ? void 0 : o.get("sentry.sample_rand")) ?? (null == (g = nj(n).scope) ? void 0 : g.getPropagationContext().sampleRand.toString())
        }
        return s(f), t.emit("createDsc", f, n), f
    }

    function rC(e) {
        return nz(rx(e))
    }

    function rA(e, t) {
        let {
            extra: n,
            tags: r,
            attributes: i,
            user: o,
            contexts: a,
            level: s,
            sdkProcessingMetadata: l,
            breadcrumbs: u,
            fingerprint: c,
            eventProcessors: d,
            attachments: p,
            propagationContext: f,
            transactionName: h
        } = t;
        rM(e, "extra", n), rM(e, "tags", r), rM(e, "attributes", i), rM(e, "user", o), rM(e, "contexts", a), e.sdkProcessingMetadata = tu(e.sdkProcessingMetadata, l, 2), s && (e.level = s), h && (e.transactionName = h), u.length && (e.breadcrumbs = [...e.breadcrumbs, ...u]), c.length && (e.fingerprint = [...e.fingerprint, ...c]), d.length && (e.eventProcessors = [...e.eventProcessors, ...d]), p.length && (e.attachments = [...e.attachments, ...p]), e.propagationContext = { ...e.propagationContext,
            ...f
        }
    }

    function rM(e, t, n) {
        e[t] = tu(e[t], n, 1)
    }

    function rP(e, t) {
        let n = tR().getScopeData();
        return e && rA(n, e.getScopeData()), t && rA(n, t.getScopeData()), n
    }

    function rN(e, t, n, r, i, o) {
        var a, s, l, u, c, d, p, f;
        let h, m, g, v, {
                normalizeDepth: _ = 3,
                normalizeMaxBreadth: y = 1e3
            } = e,
            b = { ...t,
                event_id: t.event_id || n.event_id || e3(),
                timestamp: t.timestamp || tt()
            },
            S = n.integrations || e.integrations.map(e => e.name);
        (function(e, t) {
            let {
                environment: n,
                release: r,
                dist: i,
                maxValueLength: o
            } = t;
            e.environment = e.environment || n || tP, !e.release && r && (e.release = r), !e.dist && i && (e.dist = i);
            let a = e.request;
            if ((null == a ? void 0 : a.url) && o && (a.url = eQ(a.url, o)), o) {
                var s, l;
                null == (l = e.exception) || null == (s = l.values) || s.forEach(e => {
                    e.value && (e.value = eQ(e.value, o))
                })
            }
        })(b, e), u = b, (c = S).length > 0 && (u.sdk = u.sdk || {}, u.sdk.integrations = [...u.sdk.integrations || [], ...c]), i && i.emit("applyFrameMetadata", t), void 0 === t.type && (d = b, h = tU(e.stackParser), null == (f = d.exception) || null == (p = f.values) || p.forEach(e => {
            var t, n;
            null == (n = e.stacktrace) || null == (t = n.frames) || t.forEach(e => {
                e.filename && (e.debug_id = h[e.filename])
            })
        }));
        let w = function(e, t) {
            if (!t) return e;
            let n = e ? e.clone() : new td;
            return n.update(t), n
        }(r, n.captureContext);
        n.mechanism && (s = n.mechanism, (g = (null == (m = null == (l = b.exception) ? void 0 : l.values) ? void 0 : m.find(e => {
            var t;
            return (null == (t = e.mechanism) ? void 0 : t.exception_id) === 0
        })) ?? (null == m ? void 0 : m[0])) && e7(g, s));
        let E = i ? i.getEventProcessors() : [],
            k = rP(o, w),
            T = [...n.attachments || [], ...k.attachments];
        T.length && (n.attachments = T),
            function(e, t) {
                var n, r, i, o, a, s;
                let l, {
                    fingerprint: u,
                    breadcrumbs: c,
                    sdkProcessingMetadata: d
                } = t;
                (function(e, t) {
                    let {
                        extra: n,
                        tags: r,
                        user: i,
                        contexts: o,
                        level: a,
                        transactionName: s
                    } = t;
                    Object.keys(n).length && (e.extra = { ...n,
                        ...e.extra
                    }), Object.keys(r).length && (e.tags = { ...r,
                        ...e.tags
                    }), Object.keys(i).length && (e.user = { ...i,
                        ...e.user
                    }), Object.keys(o).length && (e.contexts = { ...o,
                        ...e.contexts
                    }), a && (e.level = a), s && "transaction" !== e.type && (e.transaction = s)
                })(e, t), n = e, r = u, n.fingerprint = n.fingerprint ? Array.isArray(n.fingerprint) ? n.fingerprint : [n.fingerprint] : [], r && (n.fingerprint = n.fingerprint.concat(r)), n.fingerprint.length || delete n.fingerprint, i = e, o = c, l = [...i.breadcrumbs || [], ...o], i.breadcrumbs = l.length ? l : void 0, a = e, s = d, a.sdkProcessingMetadata = { ...a.sdkProcessingMetadata,
                    ...s
                }
            }(b, k);
        let I = rh(w);
        I && (b.contexts = {
                trace: n1(I),
                ...b.contexts
            }, b.sdkProcessingMetadata = {
                dynamicSamplingContext: rx(I),
                ...b.sdkProcessingMetadata
            }, (v = n8(rd(I)).description) && !b.transaction && "transaction" === b.type && (b.transaction = v)),
            function(e, t, n) {
                var r;
                let i = r_(t.originalException),
                    o = i && rv.get(i);
                if (!o) return;
                let a = null == (r = e.contexts) ? void 0 : r.trace;
                ((null == a ? void 0 : a.trace_id) ?? (n && tM(n).trace_id)) === o.trace_id && (e.contexts = { ...e.contexts,
                    trace: { ...a,
                        ...o
                    }
                })
            }(b, n, w);
        let R = [...E, ...k.eventProcessors],
            x = "transaction" === t.type,
            C = (null == (a = t.spans) ? void 0 : a.length) || 0;
        return (ry(n) ? tL(b) : function(e, t, n) {
            let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                i = arguments.length > 4 ? arguments[4] : void 0;
            try {
                let o = function e(t, n, r, i, o) {
                    let a = r[i];
                    if (!t || !a) return t;
                    let s = `Event processor "${a.id||"?"}"`,
                        l = !1,
                        u = tO(el ? `${s} threw an error, dropping event:` : "", () => a({ ...t
                        }, n), () => (l = !0, null));
                    return (el && null === u && em.log(`${s} dropped event`), eC(u)) ? u.then(t => t ? e(t, n, r, i + 1, o) : (null == o || o(l ? "callback_error" : "event_processor"), null)) : u ? e(u, n, r, i + 1, o) : (null == o || o(l ? "callback_error" : "event_processor"), null)
                }(t, n, e, r, i);
                return eC(o) ? o : tL(o)
            } catch (e) {
                return t$(e)
            }
        }(R, b, n, 0, e => {
            i && (i.recordDroppedEvent(e, t3(t.type)), x && i.recordDroppedEvent(e, "span", 1 + C))
        })).then(e => {
            if (!e) return null;
            if (x && i) {
                var t;
                let n = C - ((null == (t = e.spans) ? void 0 : t.length) || 0);
                n > 0 && i.recordDroppedEvent("event_processor", "span", n)
            }
            return (function(e) {
                var t, n;
                let r = {};
                if (null == (n = e.exception) || null == (t = n.values) || t.forEach(e => {
                        var t, n;
                        null == (n = e.stacktrace) || null == (t = n.frames) || t.forEach(e => {
                            e.debug_id && (e.abs_path ? r[e.abs_path] = e.debug_id : e.filename && (r[e.filename] = e.debug_id), delete e.debug_id)
                        })
                    }), 0 === Object.keys(r).length) return;
                e.debug_meta = e.debug_meta || {}, e.debug_meta.images = e.debug_meta.images || [];
                let i = e.debug_meta.images;
                Object.entries(r).forEach(e => {
                    let [t, n] = e;
                    i.push({
                        type: "sourcemap",
                        code_file: t,
                        debug_id: n
                    })
                })
            }(e), "number" == typeof _ && _ > 0) ? function(e, t, n) {
                var r, i;
                if (!e) return null;
                let o = { ...e,
                    ...e.breadcrumbs && {
                        breadcrumbs: e.breadcrumbs.map(e => ({ ...e,
                            ...e.data && {
                                data: eJ(e.data, t, n)
                            }
                        }))
                    },
                    ...e.user && {
                        user: eJ(e.user, t, n)
                    },
                    ...e.contexts && {
                        contexts: eJ(e.contexts, t, n)
                    },
                    ...e.extra && {
                        extra: eJ(e.extra, t, n)
                    }
                };
                return (null == (r = e.contexts) ? void 0 : r.trace) && o.contexts && (o.contexts.trace = e.contexts.trace, e.contexts.trace.data && (o.contexts.trace.data = eJ(e.contexts.trace.data, t, n))), e.spans && (o.spans = e.spans.map(e => ({ ...e,
                    ...e.data && {
                        data: eJ(e.data, t, n)
                    }
                }))), (null == (i = e.contexts) ? void 0 : i.flags) && o.contexts && (o.contexts.flags = eJ(e.contexts.flags, 3, n)), o
            }(e, _, y) : e
        })
    }
    let rO = ["user", "level", "extra", "contexts", "tags", "fingerprint", "propagationContext"];

    function rD(e, t) {
        return tT().captureException(e, function(e) {
            if (e) {
                var t;
                return (t = e) instanceof td || "function" == typeof t || Object.keys(e).some(e => rO.includes(e)) ? {
                    captureContext: e
                } : e
            }
        }(t))
    }

    function rL(e, t) {
        let n = "string" == typeof t ? t : void 0,
            r = "string" != typeof t ? {
                captureContext: t
            } : void 0;
        return tT().captureMessage(e, n, r)
    }

    function r$(e, t) {
        return tT().captureEvent(e, t)
    }

    function rF(e, t) {
        tI().setContext(e, t)
    }

    function rU(e) {
        tI().setExtras(e)
    }

    function rB(e, t) {
        tI().setExtra(e, t)
    }

    function rj(e) {
        tI().setTags(e)
    }

    function rW(e, t) {
        tI().setTag(e, t)
    }

    function rH(e) {
        tI().setAttributes(e)
    }

    function rz(e, t) {
        tI().setAttribute(e, t)
    }

    function rq(e) {
        tI().setUser(e)
    }

    function rG(e) {
        tI().setConversationId(e)
    }

    function rV() {
        return tI().lastEventId()
    }
    async function rY(e) {
        let t = tA();
        return t ? t.flush(e) : (el && em.warn("Cannot flush events. No client defined."), Promise.resolve(!1))
    }
    async function rK(e) {
        let t = tT(),
            n = t.getClient();
        if (n) {
            let r = await n.close(e);
            return t.getClient() === n && t.setClient(void 0), r
        }
        return el && em.warn("Cannot flush events and disable SDK. No client defined."), Promise.resolve(!1)
    }

    function rJ() {
        return !!tA()
    }

    function rX() {
        let e = tA();
        return (null == e ? void 0 : e.getOptions().enabled) !== !1 && !!(null == e ? void 0 : e.getTransport())
    }

    function rQ(e) {
        tI().addEventProcessor(e)
    }

    function rZ(e) {
        var t;
        let n, r, i = tI(),
            {
                user: o
            } = rP(i, tT()),
            {
                userAgent: a
            } = ei.navigator || {},
            s = (t = {
                user: o,
                ...a && {
                    userAgent: a
                },
                ...e
            }, n = ta(), r = {
                sid: e3(),
                init: !0,
                timestamp: n,
                started: n,
                duration: 0,
                status: "ok",
                errors: 0,
                ignoreDuration: !1,
                toJSON: () => {
                    var e;
                    return e = r, {
                        sid: `${e.sid}`,
                        init: e.init,
                        started: new Date(1e3 * e.started).toISOString(),
                        timestamp: new Date(1e3 * e.timestamp).toISOString(),
                        status: e.status,
                        errors: e.errors,
                        did: "number" == typeof e.did || "string" == typeof e.did ? `${e.did}` : void 0,
                        duration: e.duration,
                        abnormal_mechanism: e.abnormal_mechanism,
                        attrs: {
                            release: e.release,
                            environment: e.environment,
                            ip_address: e.ipAddress,
                            user_agent: e.userAgent
                        }
                    }
                }
            }, t && tl(r, t), r),
            l = i.getSession();
        return (null == l ? void 0 : l.status) === "ok" && tl(l, {
            status: "exited"
        }), r0(), i.setSession(s), s
    }

    function r0() {
        let e, t = tI(),
            n = tT().getSession() || t.getSession();
        n && (e = {}, "ok" === n.status && (e = {
            status: "exited"
        }), tl(n, e)), r1(), t.setSession()
    }

    function r1() {
        let e = tI(),
            t = tA(),
            n = e.getSession();
        n && t && t.captureSession(n)
    }

    function r2() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        e ? r0() : r1()
    }
    let r3 = [];

    function r5(e, t) {
        for (let n of t)(null == n ? void 0 : n.afterAllSetup) && n.afterAllSetup(e)
    }

    function r4(e, t, n) {
        if (n[t.name]) {
            el && em.log(`Integration skipped because it was already installed: ${t.name}`);
            return
        }
        if (n[t.name] = t, r3.includes(t.name) || "function" != typeof t.setupOnce || (t.setupOnce(), r3.push(t.name)), t.setup && "function" == typeof t.setup && t.setup(e), "function" == typeof t.preprocessEvent) {
            let n = t.preprocessEvent.bind(t);
            e.on("preprocessEvent", (t, r) => n(t, r, e))
        }
        if ("function" == typeof t.processEvent) {
            let n = t.processEvent.bind(t),
                r = Object.assign((t, r) => n(t, r, e), {
                    id: t.name
                });
            e.addEventProcessor(r)
        }["processSpan", "processSegmentSpan"].forEach(n => {
            let r = t[n];
            "function" == typeof r && e.on(n, n => r.call(t, n, e))
        }), el && em.log(`Integration installed: ${t.name}`)
    }

    function r6(e) {
        let t = tA();
        if (!t) {
            el && em.warn(`Cannot add integration "${e.name}" because no SDK Client is available.`);
            return
        }
        t.addIntegration(e)
    }
    let r8 = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, /^Can't find variable: gmo$/, /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/, /can't redefine non-configurable property "solana"/, /vv\(\)\.getRestrictions is not a function/, /Can't find variable: _AutofillCallbackHandler/, /Object Not Found Matching Id:\d+, MethodName:simulateEvent/, /Java exception was raised during method invocation$/, /Java object is gone$/],
        r7 = function() {
            let e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return {
                name: "EventFilters",
                setup(n) {
                    e = r9(t, n.getOptions())
                },
                processEvent: (n, r, i) => (e || (e = r9(t, i.getOptions())), ! function(e, t) {
                    if (e.type) {
                        if ("transaction" === e.type && function(e, t) {
                                if (!(null == t ? void 0 : t.length)) return !1;
                                let n = e.transaction;
                                return !!n && e2(n, t)
                            }(e, t.ignoreTransactions)) return el && em.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${e4(e)}`), !0
                    } else {
                        var n, r, i, o, a;
                        if (n = e, (null == (r = t.ignoreErrors) ? void 0 : r.length) && rb(n).some(e => e2(e, r))) return el && em.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${e4(e)}`), !0;
                        if ((null == (a = (i = e).exception) || null == (o = a.values) ? void 0 : o.length) && !i.message && !i.exception.values.some(e => e.stacktrace || e.type && "Error" !== e.type || e.value)) return el && em.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${e4(e)}`), !0;
                        if (function(e, t) {
                                if (!(null == t ? void 0 : t.length)) return !1;
                                let n = ie(e);
                                return !!n && e2(n, t)
                            }(e, t.denyUrls)) return el && em.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${e4(e)}.
Url: ${ie(e)}`), !0;
                        if (! function(e, t) {
                                if (!(null == t ? void 0 : t.length)) return !0;
                                let n = ie(e);
                                return !n || e2(n, t)
                            }(e, t.allowUrls)) return el && em.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${e4(e)}.
Url: ${ie(e)}`), !0
                    }
                    return !1
                }(n, e) ? n : null)
            }
        };

    function r9() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return {
            allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
            denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
            ignoreErrors: [...e.ignoreErrors || [], ...t.ignoreErrors || [], ...e.disableErrorDefaults ? [] : r8],
            ignoreTransactions: [...e.ignoreTransactions || [], ...t.ignoreTransactions || []]
        }
    }

    function ie(e) {
        try {
            var t, n;
            let r = [...(null == (t = e.exception) ? void 0 : t.values) ?? []].reverse().find(e => {
                    var t, n, r;
                    return (null == (t = e.mechanism) ? void 0 : t.parent_id) === void 0 && (null == (r = e.stacktrace) || null == (n = r.frames) ? void 0 : n.length)
                }),
                i = null == r || null == (n = r.stacktrace) ? void 0 : n.frames;
            return i ? function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                for (let t = e.length - 1; t >= 0; t--) {
                    let n = e[t];
                    if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename) return n.filename || null
                }
                return null
            }(i) : null
        } catch {
            return el && em.error(`Cannot extract url for event ${e4(e)}`), null
        }
    }
    let it = new WeakMap,
        ir = () => ({
            name: "FunctionToString",
            setupOnce() {
                let e = Function.prototype.toString;
                try {
                    Function.prototype.toString = function() {
                        let t;
                        for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        let o = eD(this);
                        try {
                            it.has(tA()) && void 0 !== o && (t = o)
                        } catch {}
                        return e.apply(t ?? this, r)
                    }
                } catch {}
            },
            setup(e) {
                it.set(e, !0)
            }
        });

    function ii(e, t) {
        let n = tA(),
            r = tI();
        if (!n) return;
        let {
            beforeBreadcrumb: i = null,
            maxBreadcrumbs: o = 100
        } = n.getOptions();
        if (o <= 0) return;
        let a = {
                timestamp: tt(),
                ...e
            },
            s = i ? tO(el ? "The `beforeBreadcrumb` callback threw an error, dropping the breadcrumb:" : "", () => ed(() => i(a, t)), () => null) : a;
        null !== s && (n.emit && n.emit("beforeAddBreadcrumb", s, t), r.addBreadcrumb(s, o))
    }
    let io = {},
        ia = {};

    function is(e, t) {
        return io[e] = io[e] || [], io[e].push(t), () => {
            let n = io[e];
            if (n) {
                let e = n.indexOf(t); - 1 !== e && n.splice(e, 1)
            }
        }
    }

    function il(e, t) {
        if (!ia[e]) {
            ia[e] = !0;
            try {
                t()
            } catch (t) {
                el && em.error(`Error while instrumenting ${e}`, t)
            }
        }
    }

    function iu(e, t) {
        let n = e && io[e];
        if (n)
            for (let r of n) try {
                r(t)
            } catch (t) {
                el && em.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${eY(r)}
Error:`, t)
            }
    }
    let ic = new Set([]);

    function id(e) {
        let t = "console",
            n = is(t, e);
        return il(t, ih), n
    }
    let ip = new Set;

    function ih() {
        "console" in ei && eu.forEach(function(e) {
            !ip.has(e) && e in ei.console && (ip.add(e), eP(ei.console, e, function(t) {
                return ec[e] = t,
                    function() {
                        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        let i = n[0],
                            o = ec[e],
                            a = ic.size && "string" == typeof i && e2(i, ic);
                        a || iu("console", {
                            args: n,
                            level: e
                        }), (!a || el && em.isEnabled()) && (null == o || o.apply(ei.console, n))
                    }
            }))
        })
    }

    function im(e) {
        return "warn" === e ? "warning" : ["fatal", "error", "warning", "log", "info", "debug"].includes(e) ? e : "log"
    }
    let ig = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = new Set(e.levels || eu);
        return {
            name: "Console",
            setup(n) {
                let r = id(e => {
                    let {
                        args: r,
                        level: i
                    } = e;
                    tA() === n && t.has(i) && function(e, t) {
                        let n = {
                            category: "console",
                            data: {
                                arguments: t,
                                logger: "console"
                            },
                            level: im(e),
                            message: iv(t)
                        };
                        if ("assert" === e)
                            if (!1 !== t[0]) return;
                            else {
                                let e = t.slice(1);
                                n.message = e.length > 0 ? `Assertion failed: ${iv(e)}` : "Assertion failed", n.data.arguments = e
                            }
                        ii(n, {
                            input: t,
                            level: e
                        })
                    }(i, r)
                });
                if (n.registerCleanup(r), e.filter) {
                    let t = function(e) {
                        for (let t of e) ic.add(t);
                        return () => {
                            for (let t of e) ic.delete(t)
                        }
                    }(e.filter);
                    n.registerCleanup(t)
                }
            }
        }
    };

    function iv(e) {
        return "util" in ei && "function" == typeof ei.util.format ? ei.util.format(...e) : e0(e, " ")
    }
    let i_ = () => {
        let e;
        return {
            name: "Dedupe",
            processEvent(t) {
                if (t.type) return t;
                try {
                    var n, r, i, o, a, s;
                    let l, u, c, d;
                    if (n = t, (r = e) && (i = n, o = r, l = i.message, u = o.message, (l || u) && (!l || u) && (l || !u) && l === u && ib(i, o) && iy(i, o) && 1 || (a = n, c = iS(s = r), d = iS(a), c && d && c.type === d.type && c.value === d.value && ib(a, s) && iy(a, s)))) return el && em.warn("Event dropped due to being a duplicate of previously captured event."), null
                } catch {}
                return e = t
            }
        }
    };

    function iy(e, t) {
        let n = eK(e),
            r = eK(t);
        if (!n || !r) return !n && !r;
        if (r.length !== n.length) return !1;
        for (let e = 0; e < r.length; e++) {
            let t = r[e],
                i = n[e];
            if (t.filename !== i.filename || t.lineno !== i.lineno || t.colno !== i.colno || t.function !== i.function) return !1
        }
        return !0
    }

    function ib(e, t) {
        let n = e.fingerprint,
            r = t.fingerprint;
        if (!n || !r) return !n && !r;
        try {
            return n.join("") === r.join("")
        } catch {
            return !1
        }
    }

    function iS(e) {
        var t, n;
        return null == (n = e.exception) || null == (t = n.values) ? void 0 : t[0]
    }

    function iw(e) {
        let t = e.protocol ? `${e.protocol}:` : "",
            n = e.port ? `:${e.port}` : "";
        return `${t}//${e.host}${n}${e.path?`/${e.path}`:""}/api/`
    }

    function iE(e, t, n) {
        let r;
        return t || `${iw(e)}${e.projectId}/envelope/?${r={sentry_version:"7"},e.publicKey&&(r.sentry_key=e.publicKey),n&&(r.sentry_client=`
        ${n.name
        }
        /${n.version}`),new URLSearchParams(r).toString()}`}let ik=0;function iT(e){let t=Math.floor(1e3*e);void 0!==u&&t!==u&&(ik=0);let n=ik;return ik++,u=t,{key:"sentry.timestamp.sequence",value:{value:n,type:"integer"}}}function iI(e,t){return t?tx(t,()=>{let n=rh(),r=n?n1(n):tM(t);return[n?rx(n):rR(e,t),r]}):[void 0,void 0]}let iR={trace:1,debug:5,info:9,warn:13,error:17,fatal:21};function ix(){let e;return"u">typeof window&&(!(!("u">typeof __SENTRY_BROWSER_BUNDLE__&&__SENTRY_BROWSER_BUNDLE__)&&"[object process]"===Object.prototype.toString.call(void 0!==en.default?en.default:0))||(null==(e=ei.process)?void 0:e.type)==="renderer")}function iC(e,t,n){let r=!(arguments.length>3)||void 0===arguments[3]||arguments[3];n&&(!e[t]||r)&&(e[t]=n)}function iA(e,t){var n;let r=iN(),i=(n=e,iN().get(n));void 0===i?r.set(e,[t]):i.length>=100?(iP(e,i),r.set(e,[t])):r.set(e,[...i,t])}function iM(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:tT(),r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:iA,i=(null==n?void 0:n.getClient())??tA();if(!i){el&&em.warn("No client available to capture log.");return}let{release:o,environment:a,beforeSendLog:s}=i.getOptions(),[,l]=iI(i,n),u={...e.attributes},{user:{id:c,email:d,username:p},attributes:f}=rP(tI(),n);iC(u,"user.id",c,!1),iC(u,"user.email",d,!1),iC(u,"user.name",p,!1),iC(u,"sentry.release",o),iC(u,"sentry.environment",a);let{name:h,version:m}=(null==(t=i.getSdkMetadata())?void 0:t.sdk)??{};iC(u,"sentry.sdk.name",h),iC(u,"sentry.sdk.version",m);let g=i.getIntegrationByName("Replay"),v=null==g?void 0:g.getReplayId(!0);iC(u,"sentry.replay_id",v),v&&(null==g?void 0:g.getRecordingMode())==="buffer"&&iC(u,"sentry._internal.replay_is_buffering",!0);let _=e.message;if(eE(_)){let{__sentry_template_string__:e,__sentry_template_values__:t=[]}=_;(null==t?void 0:t.length)&&(u["sentry.message.template"]=e),t.forEach((e,t)=>{u[`sentry.message.parameter.${t}`]=e})}let y=rh(n);iC(u,"sentry.trace.parent_span_id",null==y?void 0:y.spanContext().spanId);let b={...e,attributes:u};i.emit("beforeCaptureLog",b);let S=s?tO(el?"The `beforeSendLog` callback threw an error, dropping the log:":"",()=>ed(()=>s(b)),()=>tN):b;if(S===tN)return void i.recordDroppedEvent("callback_error","log_item",1);if(!S){i.recordDroppedEvent("before_send","log_item",1),el&&em.warn("beforeSendLog returned null, log will not be captured.");return}let{level:w,message:E,attributes:k={},severityNumber:T}=S,I=ta(),R=iT(I);r(i,{timestamp:I,level:w,body:iO(String(E)),trace_id:null==l?void 0:l.trace_id,severity_number:T??iR[w],attributes:function(e){let t={};for(let[n,r]of Object.entries(e)){let e=iO(n);"string"===r.type?t[e]={...r,value:iO(r.value)}:t[e]=r}return t}({...t5(f),...t5(k,!0),[R.key]:R.value})}),i.emit("afterCaptureLog",S)}function iP(e,t){var n,r,i,o,a;let s,l,u=t??(a=e,iN().get(a))??[];if(0===u.length)return;let c=e.getOptions(),d=(n=c._metadata,r=c.tunnel,i=e.getDsn(),o=e.getDataCollectionOptions().userInfo,s={},(null==n?void 0:n.sdk)&&(s.sdk={name:n.sdk.name,version:n.sdk.version}),r&&i&&(s.dsn=tW(i)),tV(s,[(l=o?"auto":"never",[{type:"log",item_count:u.length,content_type:"application/vnd.sentry.items.log+json"},{version:2,...ix()&&{ingest_settings:{infer_ip:l,infer_user_agent:l}},items:u}])]));iN().set(e,[]),e.emit("flushLogs"),e.sendEnvelope(d)}function iN(){return es("clientToLogBufferMap",()=>new WeakMap)}function iO(e){let t=Object(e),n=t.isWellFormed,r=t.toWellFormed;return"function"==typeof n&&"function"==typeof r?n.call(e)?e:r.call(e):e}function iD(e,t,n){let r=!(arguments.length>3)||void 0===arguments[3]||arguments[3];!n||!r&&t in e||(e[t]=n)}function iL(e,t){var n;let r=iF(),i=(n=e,iF().get(n));void 0===i?r.set(e,[t]):i.length>=1e3?(i$(e,i),r.set(e,[t])):r.set(e,[...i,t])}function i$(e,t){var n,r,i,o,a;let s,l,u=t??(a=e,iF().get(a))??[];if(0===u.length)return;let c=e.getOptions(),d=(n=c._metadata,r=c.tunnel,i=e.getDsn(),o=e.getDataCollectionOptions().userInfo,s={},(null==n?void 0:n.sdk)&&(s.sdk={name:n.sdk.name,version:n.sdk.version}),r&&i&&(s.dsn=tW(i)),tV(s,[(l=o?"auto":"never",[{type:"trace_metric",item_count:u.length,content_type:"application/vnd.sentry.items.trace-metric+json"},{version:2,...ix()&&{ingest_settings:{infer_ip:l,infer_user_agent:l}},items:u}])]));iF().set(e,[]),e.emit("flushMetrics"),e.sendEnvelope(d)}function iF(){return es("clientToMetricBufferMap",()=>new WeakMap)}function iU(e){return eN(e,"_static",!0),e}function iB(e){return e}function ij(e){return!!e&&"function"==typeof e&&"_static"in e&&!!e._static}function iW(e,t){return tO(el?"The `beforeSendSpan` callback threw an error, sending the span unmodified:":"",()=>t(e),()=>e)||e}function iH(e,t,n){var r;let i=n.getOptions(),o=n.getDsn(),a=i.tunnel,s=t1(i._metadata);return tV({sent_at:new Date(eB()).toISOString(),...!!(r=t).trace_id&&!!r.public_key&&{trace:t},...s&&{sdk:s},...!!a&&o&&{dsn:tW(o)}},[iz(e,n)])}function iz(e,t){let n=t.getDataCollectionOptions().userInfo?"auto":"never";return[{type:"span",item_count:e.length,content_type:"application/vnd.sentry.items.span.v2+json"},{version:2,ingest_settings:ix()?{infer_ip:n,infer_user_agent:n}:void 0,items:e}]}function iq(e){return"stream"===e.getOptions().traceLifecycle}function iG(e){return re({trace_id:e.trace_id,span_id:e.span_id,parent_span_id:e.parent_span_id,name:e.description||"",start_timestamp:e.start_timestamp,end_timestamp:e.timestamp,status:e.status&&"ok"!==e.status&&"cancelled"!==e.status?"error":"ok",is_segment:!1,attributes:{...e.data},links:e.links})}function iV(e){return"object"==typeof e&&"function"==typeof e.unref&&e.unref(),e}let iY=Symbol.for("SentryBufferFullError");function iK(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=new Set;return{get $(){return Array.from(t)},add:function(n){if(!(t.size<e))return t$(iY);let r=n();return t.add(r),r.then(()=>{t.delete(r)},()=>{t.delete(r)}),r},drain:function(e){if(!t.size)return tL(!0);let n=Promise.allSettled(Array.from(t)).then(()=>!0);return e?Promise.race([n,new Promise(t=>iV(setTimeout(()=>t(!1),e)))]):n}}}function iJ(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:eB(),n=parseInt(`${e}`,10);if(!isNaN(n))return 1e3*n;let r=Date.parse(`${e}`);return isNaN(r)?6e4:r-t}function iX(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:eB();return(e[t]||e.all||0)>n}function iQ(e,t){let{statusCode:n,headers:r}=t,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:eB(),o={...e},a=null==r?void 0:r["x-sentry-rate-limits"],s=null==r?void 0:r["retry-after"];if(a)for(let e of a.trim().split(",")){let[t,n,,,r]=e.split(":",5),a=parseInt(t,10),s=(isNaN(a)?60:a)*1e3;if(n)for(let e of n.split(";"))"metric_bucket"===e?(!r||r.split(";").includes("custom"))&&(o[e]=i+s):o[e]=i+s;else o.all=i+s}else s?o.all=i+iJ(s,i):429===n&&(o.all=i+6e4);return o}function iZ(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:iK(e.bufferSize||64),r={};function i(t,n,r){let[i,o]=n,a=t0(r);if("transaction"===r){var s;e.recordDroppedEvent(t,"span",((null==(s=o.spans)?void 0:s.length)??0)+1)}e.recordDroppedEvent(t,a,"number"==typeof i.item_count?i.item_count:1)}return{send:function(e){let o=[];if(tK(e,(e,t)=>{iX(r,t0(t))?i("ratelimit_backoff",e,t):o.push(e)}),0===o.length)return Promise.resolve({});let a=tV(e[0],o),s=e=>{if(tJ(a,["client_report"])){el&&em.warn(`Dropping client report. Will not send outcomes (reason: ${e}).`);return}tK(a,(t,n)=>{i(e,t,n)})};return n.add(()=>t({body:tQ(a)}).then(e=>(413===e.statusCode?(el&&em.error("Sentry responded with status code 413. Envelope was discarded due to exceeding size limits."),s("send_error")):(el&&void 0!==e.statusCode&&(e.statusCode<200||e.statusCode>=300)&&em.warn(`Sentry responded with status code ${e.statusCode} to sent event.`),r=iQ(r,e)),e),e=>{throw s("network_error"),el&&em.error("Encountered error running transport request:",e),e})).then(e=>e,e=>{if(e===iY)return el&&em.error("Skipped sending event because buffer is full."),s("queue_overflow"),Promise.resolve({});throw e})},flush:e=>n.drain(e)}}function i0(e){em.log(`Ignoring span ${e.op} - ${e.description} because it matches \`ignoreSpans\`.`)}function i1(e,t){if(!(null==t?void 0:t.length))return!1;for(let r of t){var n;if("string"==typeof(n=r)||n instanceof RegExp){if(e.description&&e1(e.description,r))return el&&i0(e),!0;continue}let t=!!r.attributes&&Object.keys(r.attributes).length>0;if(!r.name&&!r.op&&!t)continue;let i=!r.name||e.description&&e1(e.description,r.name),o=!r.op||e.op&&e1(e.op,r.op),a=!r.attributes||Object.entries(r.attributes).every(t=>{var n;let[r,i]=t;return function(e,t){return"string"==typeof e&&("string"==typeof t||t instanceof RegExp)?e1(e,t):Array.isArray(e)&&Array.isArray(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):e===t}(null==(n=e.attributes)?void 0:n[r],i)});if(i&&o&&a)return el&&i0(e),!0}return!1}let i2={request:!0,response:!0},i3=["incomingRequest","outgoingRequest","incomingResponse","outgoingResponse"],i5=!0,i4=!0,i6=!0,i8=!0,i7="Not capturing exception because it's already been captured.",i9="Discarded session because of missing or non-string release",oe=Symbol.for("SentryInternalError"),ot=Symbol.for("SentryDoNotSendEventError"),on=Symbol.for("SentryClosedClient");function or(e){return{message:e,[oe]:!0}}function oi(e){return{message:e,[ot]:!0}}function oo(e){return eI(e)&&oe in e}function oa(e){return eI(e)&&ot in e}function os(e,t,n,r,i){let o,a=0,s=!1;e.on(n,()=>{a=0,clearTimeout(o),s=!1}),e.on(t,t=>{if((a+=r(t))>=8e5)i(e);else if(!s){let t=e.getOptions()._flushInterval??5e3;t>0&&(s=!0,o=iV(setTimeout(()=>{i(e)},t)))}}),e.on("flush",()=>{i(e)})}class ol{captureException(e,t,n){let r=e3();if(e9(e))return el&&em.log(i7),r;let i={event_id:r,...t};return this._process(()=>this.eventFromException(e,i).then(e=>this._captureEvent(e,i,n)).then(e=>e),"error"),i.event_id}captureMessage(e,t,n,r){let i={event_id:e3(),...n},o=eE(e)?e:String(e),a=ek(e),s=a?this.eventFromMessage(o,t,i):this.eventFromException(e,i);return this._process(()=>s.then(e=>this._captureEvent(e,i,r)),a?"unknown":"error"),i.event_id}captureEvent(e,t,n){let r=e3();if((null==t?void 0:t.originalException)&&e9(t.originalException))return el&&em.log(i7),r;let i={event_id:r,...t},o=e.sdkProcessingMetadata||{},a=o.capturedSpanScope,s=o.capturedSpanIsolationScope,l=t3(e.type);return this._process(()=>this._captureEvent(e,i,a||n,s),l),i.event_id}captureSession(e){this.sendSession(e),tl(e,{init:!1})}getDsn(){return this._dsn}getOptions(){return this._options}getDataCollectionOptions(){return this._dataCollection}getSdkMetadata(){return this._options._metadata}getTransport(){return this._transport}async flush(e){let t=this._transport;if(this.emit("flush"),!t)return!0;let n=await this._isClientDoneProcessing(e),r=await t.flush(e);return n&&r}async close(e){Object.defineProperty(this,on,{value:!0});let t=await this.flush(e);return this.getOptions().enabled=!1,this.emit("close"),t}getEventProcessors(){return this._eventProcessors}addEventProcessor(e){this._eventProcessors.push(e)}init(){if(this._isEnabled()||this._options.integrations.some(e=>{let{name:t}=e;return t.startsWith("Spotlight")})){var e,t;this._setupIntegrations(),"stream"===(e=this._options).traceLifecycle&&(e.beforeSendTransaction||(null==(t=e.ignoreTransactions)?void 0:t.length))&&ed(()=>{console.warn("[Sentry] `beforeSendTransaction` and `ignoreTransactions` are ignored with `traceLifecycle: 'stream'` (enabled by default). Use `beforeSendSpan` and `ignoreSpans` instead, or set `traceLifecycle: 'static'`.")})}}getIntegrationByName(e){return this._integrations[e]}getIntegrationNames(){return Object.keys(this._integrations)}addIntegration(e){let t=this._integrations[e.name];!t&&e.beforeSetup&&e.beforeSetup(this),r4(this,e,this._integrations),t||r5(this,[e])}sendEvent(e){var t,n,r;let i,o,a,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.emit("beforeSendEvent",e,s);let l=function(e,t){var n,r,i;if("transaction"!==e.type||!(null==(n=e.spans)?void 0:n.length)||!(null==(r=e.sdkProcessingMetadata)?void 0:r.hasGenAiSpans)||iq(t))return;let o=[],a=[];for(let t of e.spans)(null==(i=t.op)?void 0:i.startsWith("gen_ai."))?o.push(iG(t)):a.push(t);if(0!==o.length)return e.spans=a,iz(o,t)}(e,this),u=(t=this._dsn,n=this._options._metadata,r=this._options.tunnel,i=t1(n),o=e.type&&"replay_event"!==e.type?e.type:"event",!function(e,t){var n,r,i,o;if(!t)return;let a=e.sdk||{};e.sdk={...a,name:a.name||t.name,version:a.version||t.version,integrations:[...(null==(n=e.sdk)?void 0:n.integrations)||[],...t.integrations||[]],packages:[...(null==(r=e.sdk)?void 0:r.packages)||[],...t.packages||[]],settings:(null==(i=e.sdk)?void 0:i.settings)||t.settings?{...null==(o=e.sdk)?void 0:o.settings,...t.settings}:void 0}}(e,null==n?void 0:n.sdk),a=t2(e,i,r,t),delete e.sdkProcessingMetadata,tV(a,[[{type:o},e]]));if(!ry(s))for(let e of s.attachments||[])u=tY(u,function(e){let t="string"==typeof e.data?tX(e.data):e.data;return[{type:"attachment",length:t.length,filename:e.filename,content_type:e.contentType,attachment_type:e.attachmentType},t]}(e));l&&(u=tY(u,l)),this.sendEnvelope(u).then(t=>this.emit("afterSendEvent",e,t))}sendSession(e){var t,n,r;let i,{release:o,environment:a=tP}=this._options;if("aggregates"in e){let t=e.attrs||{};if(!t.release&&!o){el&&em.warn(i9);return}t.release=t.release||o,t.environment=t.environment||a,e.attrs=t}else{if(!e.release&&!o){el&&em.warn(i9);return}e.release=e.release||o,e.environment=e.environment||a}this.emit("beforeSendSession",e);let s=(t=this._dsn,n=this._options._metadata,r=this._options.tunnel,i=t1(n),tV({sent_at:new Date(eB()).toISOString(),...i&&{sdk:i},...!!r&&t&&{dsn:tW(t)}},["aggregates"in e?[{type:"sessions"},e]:[{type:"session"},e.toJSON()]]));this.sendEnvelope(s)}recordDroppedEvent(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(this._options.sendClientReports){let r=`${e}:${t}`;el&&em.log(`Recording outcome: "${r}"${n>1?` (${n} times)`:""}`),this._outcomes[r]=(this._outcomes[r]||0)+n}}on(e,t){let n=this._hooks[e]=this._hooks[e]||new Set,r=function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return t(...n)};return n.add(r),()=>{n.delete(r)}}emit(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];let i=this._hooks[e];i&&i.forEach(e=>e(...n))}async sendEnvelope(e){if(this.emit("beforeEnvelope",e),this._isEnabled()&&this._transport)try{let t=await this._transport.send(e);return this.emit("afterEnvelope",e),t}catch(e){return el&&em.error("Error while sending envelope:",e),{}}return el&&em.error("Transport disabled"),{}}registerCleanup(e){}dispose(){}_setupIntegrations(){var e;let t,{integrations:n}=this._options;this._integrations=(e=this,t={},n.forEach(t=>{(null==t?void 0:t.beforeSetup)&&t.beforeSetup(e)}),n.forEach(n=>{n&&r4(e,n,t)}),t),r5(this,n)}_updateSessionFromEvent(e,t){var n,r;let i="fatal"===t.level,o=!1,a=null==(n=t.exception)?void 0:n.values;if(a){for(let e of(o=!0,i=!1,a))if((null==(r=e.mechanism)?void 0:r.handled)===!1){i=!0;break}}let s="ok"===e.status;(s&&0===e.errors||s&&i)&&(tl(e,{...i&&{status:this._unhandledSessionStatus},errors:e.errors||Number(o||i)}),this.captureSession(e))}async _isClientDoneProcessing(e){let t=0;for(;!e||t<e;){if(await new Promise(e=>setTimeout(e,1)),!this._numProcessing)return!0;t++}return!1}_isEnabled(){return!1!==this.getOptions().enabled&&void 0!==this._transport}_prepareEvent(e,t,n,r){let i=this.getOptions(),o=this.getIntegrationNames();return!t.integrations&&o.length&&(t.integrations=o),this.emit("preprocessEvent",e,t),e.type||r.setLastEventId(e.event_id||t.event_id),rN(i,e,t,n,this,r).then(e=>{var r;return null===e||(this.emit("postprocessEvent",e,t),e.contexts={trace:{...null==(r=e.contexts)?void 0:r.trace,...tM(n)},...e.contexts},e.sdkProcessingMetadata={dynamicSamplingContext:rR(this,n),...e.sdkProcessingMetadata}),e})}_captureEvent(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:tT(),r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:tI();return el&&ou(e)&&em.log(`Captured error event \`${rb(e)[0]||"<unknown>"}\``),this._processEvent(e,t,n,r).then(e=>e.event_id,e=>{el&&(oa(e)?em.log(e.message):oo(e)?em.warn(e.message):em.warn(e))})}_processEvent(e,t,n,r){let i=this.getOptions(),{sampleRate:o}=i,a=oc(e),s=ou(e),l=e.type||"error",u=`before send for type \`${l}\``,c="before_send",d=0,p=void 0===o?void 0:nV(o),f=t3(e.type),h=0;return this._prepareEvent(e,t,n,r).then(e=>{var n;if(null===e)throw oi("An event processor returned `null`, will not send event.");return(h=(null==(n=e.spans)?void 0:n.length)||0,ry(t))?e:function(e,t,n,r,i){let{beforeSend:o,ignoreSpans:a,beforeSendTransaction:s}=e,l=ij(e.beforeSendSpan)&&e.beforeSendSpan,u=t;if(ou(u)&&o){let e=u;return tO(el?"The `beforeSend` callback threw an error, dropping the event:":"",()=>o(e,n),()=>(r("callback_error"),null))}if(oc(u)){if(l||a){let e=function(e){var t;let{trace_id:n,parent_span_id:r,span_id:i,status:o,origin:a,data:s,op:l}=(null==(t=e.contexts)?void 0:t.trace)??{};return{data:s??{},description:e.transaction,op:l,parent_span_id:r,span_id:i??"",start_timestamp:e.start_timestamp??0,status:o??"ok",timestamp:e.timestamp,trace_id:n??"",origin:a,profile_id:null==s?void 0:s[nf],exclusive_time:null==s?void 0:s[nu],measurements:e.measurements,is_segment:!0}}(u);if((null==a?void 0:a.length)&&i1({description:e.description,op:e.op,attributes:e.data},a))return r("ignored"),null;if(l){var c;u=tu(t,{type:"transaction",timestamp:(c=iW(e,l)).timestamp,start_timestamp:c.start_timestamp,transaction:c.description,contexts:{trace:{trace_id:c.trace_id,span_id:c.span_id,parent_span_id:c.parent_span_id,op:c.op,status:c.status,origin:c.origin,data:{...c.data,...c.profile_id&&{[nf]:c.profile_id},...c.exclusive_time&&{[nu]:c.exclusive_time}}}},measurements:c.measurements})}if(u.spans){let e=[],t=u.spans;for(let n of t){if((null==a?void 0:a.length)&&i1({description:n.description,op:n.op,attributes:n.data},a)){!function(e,t){let n=t.parent_span_id,r=t.span_id;if(n)for(let t of e)t.parent_span_id===r&&(t.parent_span_id=n)}(t,n);continue}l?e.push(iW(n,l)):e.push(n)}i(t.length-e.length),u.spans=e}}if(s)return tO(el?"The `beforeSendTransaction` callback threw an error, dropping the event:":"",()=>s(u,n),()=>(r("callback_error"),null))}return u}(i,e,t,e=>{c=e},e=>{d=e})}).then(i=>{if(d&&this.recordDroppedEvent("ignored","span",d),!eT(i)||null===i){if(this.recordDroppedEvent(c,f),a&&this.recordDroppedEvent(c,"span",1+h-d),null!==i)throw or(`${u} must return \`null\` or a valid event.`);let e="ignored"===c?"Transaction matched `ignoreSpans`":`${u} ${"callback_error"===c?"threw an error":"returned `null`"}`;throw oi(`${e}, will not send event.`)}let l=n.getSession()||r.getSession();if(s&&l&&this._updateSessionFromEvent(l,i),s&&"number"==typeof p&&eU()>p)throw this.recordDroppedEvent("sample_rate","error"),oi(`Discarding event because it's not included in the random sample (sampling rate = ${o})`);if(a){var m;let e=h-d-((null==(m=i.spans)?void 0:m.length)||0);e>0&&this.recordDroppedEvent("before_send","span",e)}let g=i.transaction_info;return a&&g&&i.transaction!==e.transaction&&(i.transaction_info={...g,source:"custom"}),this.sendEvent(i,t),i}).then(null,e=>{if(oa(e)||oo(e))throw e;throw this.captureException(e,{mechanism:{handled:!1,type:"internal"},data:{__sentry__:!0},originalException:e}),or(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
        Reason: ${e
        }
        `)})}_process(e,t){this._numProcessing++,this._promiseBuffer.add(e).then(e=>(this._numProcessing--,e),e=>(this._numProcessing--,e===iY&&this.recordDroppedEvent("queue_overflow",t),e))}_clearOutcomes(){let e=this._outcomes;return this._outcomes={},Object.entries(e).map(e=>{let[t,n]=e,[r,i]=t.split(":");return{reason:r,category:i,quantity:n}})}_flushOutcomes(){var e;el&&em.log("Flushing outcomes...");let t=this._clearOutcomes();if(0===t.length){el&&em.log("No outcomes to send");return}if(!this._dsn){el&&em.log("No dsn provided, will not send outcomes");return}el&&em.log("Sending outcomes:",t);let n=tV((e=this._options.tunnel&&tW(this._dsn))?{dsn:e}:{},[[{type:"client_report"},{timestamp:tt(),discarded_events:t}]]);this.sendEnvelope(n)}constructor(e){var t,n,r,i,o;let a;this._options={attachStacktrace:!0,...e,traceLifecycle:"static"===e.traceLifecycle?"static":"stream"},this._integrations={},this._numProcessing=0,this._outcomes={},this._hooks={},this._eventProcessors=[],this._promiseBuffer=iK((null==(t=e.transportOptions)?void 0:t.bufferSize)??64),this._dataCollection={userInfo:(a=e.dataCollection??{}).userInfo??!0,cookies:a.cookies??!0,httpHeaders:function(e){return void 0===e?{...i2}:"boolean"==typeof e||"allow"in e||"deny"in e?{request:e,response:e}:{request:e.request??i2.request,response:e.response??i2.response}}(a.httpHeaders),httpBodies:a.httpBodies??i3,urlQueryParams:a.urlQueryParams??!0,graphQL:{document:(null==(n=a.graphQL)?void 0:n.document)??i5,variables:(null==(r=a.graphQL)?void 0:r.variables)??i4},genAI:{inputs:(null==(i=a.genAI)?void 0:i.inputs)??i6,outputs:(null==(o=a.genAI)?void 0:o.outputs)??i8},databaseQueryData:a.databaseQueryData??!0,queues:a.queues??!0,stackFrameVariables:a.stackFrameVariables??!0,frameContextLines:a.frameContextLines??5},this._unhandledSessionStatus="crashed",e.dsn?this._dsn=tG(e.dsn):el&&em.warn("No DSN provided, client will not send events.");let{beforeSendSpan:s,traceLifecycle:l}=this._options;if(el&&s&&ij(s)!==("static"===l)&&ed(()=>{console.warn(`
        Ignoring\`beforeSendSpan\`: ${"static"===l?"wrap it with":"remove"} \`Sentry.withStaticSpan\` to use it with \`traceLifecycle: "${l}"\`.`)
}), this._dsn) {
    let t = iE(this._dsn, e.tunnel, e._metadata ? e._metadata.sdk : void 0);
    this._transport = e.transport({
        tunnel: this._options.tunnel,
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...e.transportOptions,
        url: t
    })
}
os(this, "afterCaptureLog", "flushLogs", op, iP), os(this, "afterCaptureMetric", "flushMetrics", od, i$)
}
}

function ou(e) {
    return void 0 === e.type
}

function oc(e) {
    return "transaction" === e.type
}

function od(e) {
    let t = 0;
    return e.name && (t += 2 * e.name.length), (t += 8) + of (e.attributes)
}

function op(e) {
    let t = 0;
    return e.message && (t += 2 * e.message.length), t + of (e.attributes)
}

function of (e) {
    if (!e) return 0;
    let t = 0;
    return Object.values(e).forEach(e => {
        Array.isArray(e) ? t += e.length * oh(e[0]) : ek(e) ? t += oh(e) : t += 100
    }), t
}

function oh(e) {
    return "string" == typeof e ? 2 * e.length : "number" == typeof e ? 8 : 4 * ("boolean" == typeof e)
}

function om(e) {
    tT().setClient(e)
}
class og {
    get size() {
        return this._cache.size
    }
    get(e) {
        let t = this._cache.get(e);
        if (void 0 !== t) return this._cache.delete(e), this._cache.set(e, t), t
    }
    set(e, t) {
        if (this._cache.delete(e), this._cache.size >= this._maxSize) {
            let e = this._cache.keys().next().value;
            this._cache.delete(e)
        }
        this._cache.set(e, t)
    }
    remove(e) {
        let t = this._cache.get(e);
        return t && this._cache.delete(e), t
    }
    clear() {
        this._cache.clear()
    }
    keys() {
        return Array.from(this._cache.keys())
    }
    values() {
        let e = [];
        return this._cache.forEach(t => e.push(t)), e
    }
    constructor(e) {
        this._maxSize = e, this._cache = new Map
    }
}
let ov = "[Filtered]",
    o_ = ["auth", "token", "secret", "session", "password", "passwd", "pwd", "key", "jwt", "bearer", "sso", "saml", "csrf", "xsrf", "credentials", "sid", "identity", "set-cookie", "cookie"],
    oy = [".sid", "sessid", "remember", "oidc", "pkce", "nonce", "__secure-", "__host-", "awsalb", "awselb", "akamai", "__stripe", "cognito", "firebase", "supabase", "sb-", "mfa", "2fa"];

function ob(e, t, n) {
    if (!1 === t) return !0;
    let r = e.toLowerCase();
    if ((null != n ? [...o_, ...n] : o_).some(e => r.includes(e))) return !0;
    if (!0 === t) return !1;
    let i = ("deny" in t ? t.deny : t.allow).some(e => r.includes(e.toLowerCase()));
    return "deny" in t ? i : !i
}

function oS(e, t, n) {
    if (!1 === t) return {};
    let r = {};
    for (let i of Object.keys(e)) r[i] = ob(i, t, n) ? ov : e[i];
    return r
}

function ow(e, t) {
    if (e && !1 !== t) return e.split("&").map(e => {
        let n = e.indexOf("="),
            r = -1 === n ? e : e.slice(0, n),
            i = new URLSearchParams(`${r}=`).keys().next().value;
        return void 0 !== i && ob(i, t) ? `${r}=${ov}` : e
    }).join("&")
}

function oE(e) {
    var t;
    return (null == (t = e ?? tA()) ? void 0 : t.getDataCollectionOptions().urlQueryParams) ?? !0
}

function ok(e, t) {
    return void 0 === e ? void 0 : function(e, t) {
        let n = e.indexOf("#"),
            r = -1 === n ? e.length : n,
            i = e.indexOf("?");
        if (-1 === i || i > r) return e;
        let o = e.slice(0, i),
            a = e.slice(i + 1, r),
            s = e.slice(r),
            l = ow(a, t);
        return l ? `${o}?${l}${s}` : `${o}${s}`
    }(e, oE(t))
}

function oT(e, t) {
    return e ? ow(e, oE(t)) : void 0
}

function oI(e) {
    return "isRelative" in e
}

function oR(e, t) {
    let n = 0 >= e.indexOf("://") && 0 !== e.indexOf("//"),
        r = t ?? (n ? "thismessage:/" : void 0);
    try {
        if ("canParse" in URL && !URL.canParse(e, r)) return;
        let t = new URL(e, r);
        if (n) return {
            isRelative: n,
            pathname: t.pathname,
            search: t.search,
            hash: t.hash
        };
        return t
    } catch {}
}

function ox(e) {
    if (oI(e)) return e.pathname;
    let t = new URL(e);
    return t.search = "", t.hash = "", ["80", "443"].includes(t.port) && (t.port = ""), t.password && (t.password = "%filtered%"), t.username && (t.username = "%filtered%"), t.toString()
}

function oC(e) {
    return (null == e ? void 0 : e.replace(/^\?/, "")) || void 0
}

function oA(e) {
    return (null == e ? void 0 : e.replace(/^#/, "")) || void 0
}

function oM(e, t) {
    try {
        return new URL(e, t).hostname || void 0
    } catch {
        return
    }
}

function oP(e) {
    if (!e) return {};
    let t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!t) return {};
    let n = t[6] || "",
        r = t[8] || "";
    return {
        host: t[4],
        path: t[5],
        protocol: t[2],
        search: n,
        hash: r,
        relative: t[5] + n + r
    }
}

function oN(e) {
    return e.split(/[?#]/, 1)[0]
}

function oO(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (e.startsWith("data:")) {
        let n = e.match(/^data:([^;,]+)/),
            r = n ? n[1] : "text/plain",
            i = e.includes(";base64,"),
            o = e.indexOf(","),
            a = "";
        if (t && -1 !== o) {
            let t = e.slice(o + 1);
            a = t.length > 10 ? `${t.slice(0,10)}... [truncated]` : t
        }
        return `data:${r}${i?",base64":""}${a?`,${a}`:""}`
    }
    return e
}
let oD = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;

function oL() {
    try {
        var e;
        return (null == (e = ei.document) ? void 0 : e.location.href) ?? ""
    } catch {
        return ""
    }
}
let o$ = new WeakMap;

function oF(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tA();
    if (!t) {
        oD && em.warn("Cannot set a route provider without a client.");
        return
    }
    oD && oU(t) && em.warn("A route provider is already registered for this client and will be replaced. Routes only the previous provider knows about will no longer resolve."), o$.set(t, e)
}

function oU() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tA();
    return e && o$.get(e)
}

function oB(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tA(),
        n = oU(t);
    if (!n) return;
    let r = "string" == typeof e ? oz(e) : e;
    if (r) return tO(oD ? "Route provider threw while resolving a route:" : "", () => n.resolveRoute(r) || void 0, () => void 0)
}

function oj() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tA(),
        t = oU(e);
    return tO(oD ? "Route provider threw while resolving a route:" : "", () => (null == t ? void 0 : t.resolveCurrentRoute()) || void 0, () => void 0)
}

function oW(e) {
    return {
        resolveRoute: e,
        resolveCurrentRoute: () => {
            let t = oz(oL());
            return t && e(t)
        }
    }
}

function oH() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 50,
        t = new og(e);
    return { ...oW(e => t.get(e.pathname)),
        record(e, n) {
            e && n && t.set(e, n)
        }
    }
}

function oz(e) {
    return e ? oR(e, oL() || void 0) : void 0
}

function oq(e) {
    if ("aggregates" in e) {
        var t;
        (null == (t = e.attrs) ? void 0 : t.ip_address) === void 0 && (e.attrs = { ...e.attrs,
            ip_address: "{{auto}}"
        })
    } else void 0 === e.ipAddress && (e.ipAddress = "{{auto}}")
}

function oG(e) {
    return e_(e) && "__sentry_fetch_url_host__" in e && "string" == typeof e.__sentry_fetch_url_host__ ? `${e.message} (${e.__sentry_fetch_url_host__})` : e.message
}

function oV(e, t) {
    let n = oK(e, t),
        r = {
            type: oQ(t),
            value: oZ(t)
        };
    return n.length && (r.stacktrace = {
        frames: n
    }), void 0 === r.type && "" === r.value && (r.value = "Unrecoverable error caught"), r
}

function oY(e, t) {
    return {
        exception: {
            values: [oV(e, t)]
        }
    }
}

function oK(e, t) {
    var n, r;
    let i = t.stacktrace || t.stack || "",
        o = (n = t) && oJ.test(n.message) ? 1 : 0,
        a = "number" == typeof(r = t).framesToPop ? r.framesToPop : 0;
    try {
        return e(i, o, a)
    } catch {}
    return []
}
let oJ = /Minified React error #\d+;/i;

function oX(e) {
    return "u" > typeof WebAssembly && void 0 !== WebAssembly.Exception && e instanceof WebAssembly.Exception
}

function oQ(e) {
    let t = null == e ? void 0 : e.name;
    return !t && oX(e) ? e.message && Array.isArray(e.message) && 2 == e.message.length ? e.message[0] : "WebAssembly.Exception" : t
}

function oZ(e) {
    let t = null == e ? void 0 : e.message;
    return oX(e) ? Array.isArray(e.message) && 2 == e.message.length ? e.message[1] : "wasm exception" : t ? t.error && "string" == typeof t.error.message ? oG(t.error) : oG(e) : "No error message"
}

function o0(e, t, n, r) {
    let i = o2(e, t, (null == n ? void 0 : n.syntheticException) || void 0, r);
    return e8(i), i.level = "error", (null == n ? void 0 : n.event_id) && (i.event_id = n.event_id), tL(i)
}

function o1(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "info",
        r = arguments.length > 3 ? arguments[3] : void 0,
        i = arguments.length > 4 ? arguments[4] : void 0,
        o = o3(e, t, (null == r ? void 0 : r.syntheticException) || void 0, i);
    return o.level = n, (null == r ? void 0 : r.event_id) && (o.event_id = r.event_id), tL(o)
}

function o2(e, t, n, r, i) {
    let o;
    if (eb(t) && t.error) return oY(e, t.error);
    if (eS(t) || ey(t, "DOMException")) {
        if ("stack" in t) {
            var a, s;
            let i = null == (s = (o = oY(e, t)).exception) || null == (a = s.values) ? void 0 : a[0];
            if (r && n && i && !i.stacktrace) {
                let t = oK(e, n);
                t.length && (i.stacktrace = {
                    frames: t
                }, e8(o, {
                    synthetic: !0
                }))
            }
        } else {
            let i = t.name || (eS(t) ? "DOMError" : "DOMException"),
                a = t.message ? `${i}: ${t.message}` : i;
            e6(o = o3(e, a, n, r), a)
        }
        return o
    }
    if (e_(t)) return oY(e, t);
    if (eT(t) || eR(t)) return e8(o = function(e, t, n, r) {
        let i = tA(),
            o = null == i ? void 0 : i.getOptions().normalizeDepth,
            a = Object.values(t).find(e_),
            s = {
                __serialized__: function e(t) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 102400,
                        i = eJ(t, n);
                    return ~-encodeURI(JSON.stringify(i)).split(/%..|./).length > r ? e(t, n - 1, r) : i
                }(t, o)
            };
        if (a) return {
            exception: {
                values: [oV(e, a)]
            },
            extra: s
        };
        let l = {
            exception: {
                values: [{
                    type: eR(t) ? t.constructor.name : r ? "UnhandledRejection" : "Error",
                    value: function(e, t) {
                        let n, {
                                isUnhandledRejection: r
                            } = t,
                            i = ((n = Object.keys(eL(e))).sort(), n[0] ? n.join(", ") : "[object has no keys]"),
                            o = r ? "promise rejection" : "exception";
                        if (eb(e)) return `Event \`ErrorEvent\` captured as ${o} with message \`${e.message}\``;
                        if (eR(e)) {
                            let t = function(e) {
                                try {
                                    let t = Object.getPrototypeOf(e);
                                    return t ? t.constructor.name : void 0
                                } catch {}
                            }(e);
                            return `Event \`${t}\` (type=${e.type}) captured as ${o}`
                        }
                        return `Object captured as ${o} with keys: ${i}`
                    }(t, {
                        isUnhandledRejection: r
                    })
                }]
            },
            extra: s
        };
        if (n) {
            let t = oK(e, n);
            t.length && (l.exception.values[0].stacktrace = {
                frames: t
            })
        }
        return l
    }(e, t, n, i), {
        synthetic: !0
    }), o;
    let l = String(t);
    return e6(o = o3(e, l, n, r), l, void 0), e8(o, {
        synthetic: !0
    }), o
}

function o3(e, t, n, r) {
    let i = {};
    if (r && n) {
        let r = oK(e, n);
        r.length && (i.exception = {
            values: [{
                value: t,
                stacktrace: {
                    frames: r
                }
            }]
        }), e8(i, {
            synthetic: !0
        })
    }
    if (eE(t)) {
        let {
            __sentry_template_string__: e,
            __sentry_template_values__: n
        } = t;
        return i.logentry = {
            message: e,
            params: n
        }, i
    }
    return i.message = t, i
}
let o5 = 0,
    o4 = [];

function o6(e) {
    if (o5 > 0) return !0;
    let t = e ? o4.findIndex(t => {
        var n, r;
        return n = t, r = e, n.msg === r.msg && n.url === r.url && n.line === r.line && n.column === r.column
    }) : -1;
    return -1 !== t && (o4.splice(t, 1), !0)
}

function o8(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if ("function" != typeof e) return e;
    try {
        if (Object.prototype.hasOwnProperty.call(e, "__sentry_wrapped__")) {
            let t = e.__sentry_wrapped__;
            if ("function" == typeof t) return t;
            return e
        }
        if (eD(e)) return e
    } catch {
        return e
    }
    let n = function() {
        for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
        ei._sentryWrappedDepth = (ei._sentryWrappedDepth || 0) + 1;
        try {
            let n = r.map(e => o8(e, t));
            return e.apply(this, n)
        } catch (e) {
            throw o5++, setTimeout(() => {
                o5--
            }), tx(n => {
                n.addEventProcessor(e => (t.mechanism && (e6(e, void 0, void 0), e8(e, t.mechanism)), e.extra = { ...e.extra,
                    arguments: r
                }, e)), rD(e)
            }), e
        } finally {
            ei._sentryWrappedDepth = (ei._sentryWrappedDepth || 0) - 1
        }
    };
    try {
        for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t])
    } catch {}
    eO(n, e), eN(e, "__sentry_wrapped__", n);
    try {
        Object.getOwnPropertyDescriptor(n, "name").configurable && Object.defineProperty(n, "name", {
            get: () => e.name
        })
    } catch {}
    return n
}

function o7(e) {
    let t = oL(),
        {
            referrer: n
        } = ei.document || {},
        {
            userAgent: r
        } = ei.navigator || {};
    return {
        url: t,
        headers: { ...n && {
                Referer: ok(n, e)
            },
            ...r && {
                "User-Agent": r
            }
        }
    }
}
class o9 extends ol {
    eventFromException(e, t) {
        return o0(this._options.stackParser, e, t, this._options.attachStacktrace)
    }
    eventFromMessage(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "info",
            n = arguments.length > 2 ? arguments[2] : void 0;
        return o1(this._options.stackParser, e, t, n, this._options.attachStacktrace)
    }
    _prepareEvent(e, t, n, r) {
        return e.platform = e.platform || "javascript", super._prepareEvent(e, t, n, r)
    }
    constructor(e) {
        var t, n, r;
        let i = (n = e, {
            release: "string" == typeof __SENTRY_RELEASE__ ? __SENTRY_RELEASE__ : null == (r = ei.SENTRY_RELEASE) ? void 0 : r.id,
            sendClientReports: !0,
            parentSpanIsAlwaysRootSpan: !0,
            ...n
        });
        eg(i, "browser", ["browser"], ei.SENTRY_SDK_SOURCE || "npm"), super(i), i.routeProvider && oF(i.routeProvider, this), this._unhandledSessionStatus = "unhandled";
        let {
            userInfo: o
        } = this.getDataCollectionOptions();
        (null == (t = i._metadata) ? void 0 : t.sdk) && (i._metadata.sdk.settings = {
            infer_ip: o ? "auto" : "never",
            ...i._metadata.sdk.settings
        });
        let {
            sendClientReports: a
        } = this._options, s = () => {
            ta()
        }, l = [
            [ei.document, "visibilitychange", () => {
                s(), "hidden" === ei.document.visibilityState && (a && this._flushOutcomes(), queueMicrotask(() => {
                    this.flush()
                }))
            }],
            [ei.document, "freeze", s],
            [ei.document, "resume", s],
            [ei, "pagehide", s],
            [ei, "pageshow", s]
        ];
        l.forEach(e => {
            var t;
            let [n, r, i] = e;
            return null == n || null == (t = n.addEventListener) ? void 0 : t.call(n, r, i)
        }), this.on("close", () => l.forEach(e => {
            var t;
            let [n, r, i] = e;
            return null == n || null == (t = n.removeEventListener) ? void 0 : t.call(n, r, i)
        })), o && this.on("beforeSendSession", oq)
    }
}

function ae(e) {
    return e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
}

function at(e) {
    let t = "fetch",
        n = is(t, e);
    return il(t, () => an()), n
}

function an(e) {
    (!ix() || function() {
        if ("string" == typeof EdgeRuntime) return !0;
        if (! function() {
                if (!("fetch" in ei)) return !1;
                try {
                    return new Headers, new Request("data:,"), new Response, !0
                } catch {
                    return !1
                }
            }()) return !1;
        if (ae(ei.fetch)) return !0;
        let e = !1,
            t = ei.document;
        if (t && "function" == typeof t.createElement) try {
            var n;
            let r = t.createElement("iframe");
            r.hidden = !0, t.head.appendChild(r), (null == (n = r.contentWindow) ? void 0 : n.fetch) && (e = ae(r.contentWindow.fetch)), t.head.removeChild(r)
        } catch (e) {
            el && em.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e)
        }
        return e
    }()) && eP(ei, "fetch", function(t) {
        return new Proxy(t, {
            apply(t, n, r) {
                let i = Error(),
                    {
                        method: o,
                        url: a
                    } = function(e) {
                        if (0 === e.length) return {
                            method: "GET",
                            url: ""
                        };
                        if (2 === e.length) {
                            let [t, n] = e;
                            return {
                                url: aa(t),
                                method: ao(n, "method") ? String(n.method).toUpperCase() : eM(t) && ao(t, "method") ? String(t.method).toUpperCase() : "GET"
                            }
                        }
                        let t = e[0];
                        return {
                            url: aa(t),
                            method: ao(t, "method") ? String(t.method).toUpperCase() : "GET"
                        }
                    }(r),
                    s = {
                        args: r,
                        fetchData: {
                            method: o,
                            url: a
                        },
                        startTimestamp: 1e3 * ta(),
                        virtualError: i,
                        headers: function(e) {
                            let [t, n] = e;
                            try {
                                if ("object" == typeof n && null !== n && "headers" in n && n.headers) return new Headers(n.headers);
                                if (eM(t)) return new Headers(t.headers)
                            } catch {}
                        }(r)
                    };
                return e || iu("fetch", { ...s
                }), Reflect.apply(t, ei, r).then(async t => (e ? e(t) : iu("fetch", { ...s,
                    endTimestamp: 1e3 * ta(),
                    response: t
                }), t), e => {
                    iu("fetch", { ...s,
                        endTimestamp: 1e3 * ta(),
                        error: e
                    }), e_(e) && void 0 === e.stack && (e.stack = i.stack, eN(e, "framesToPop", 1));
                    let t = tA(),
                        n = (null == t ? void 0 : t.getOptions().enhanceFetchErrorMessages) ?? "always";
                    if (!1 !== n && e_(e) && "TypeError" === e.name && ("Failed to fetch" === e.message || "Load failed" === e.message || "NetworkError when attempting to fetch resource." === e.message)) try {
                        let t = new URL(s.fetchData.url).host;
                        "always" === n ? e.message = `${e.message} (${t})` : eN(e, "__sentry_fetch_url_host__", t)
                    } catch {}
                    throw e
                })
            }
        })
    })
}
async function ar(e, t) {
    if (null == e ? void 0 : e.body) {
        let n = e.body,
            r = n.getReader(),
            i = setTimeout(() => {
                n.cancel().then(null, () => {})
            }, 9e4),
            o = !0;
        for (; o;) {
            let e;
            try {
                e = setTimeout(() => {
                    n.cancel().then(null, () => {})
                }, 5e3);
                let {
                    done: i
                } = await r.read();
                clearTimeout(e), i && (t(), o = !1)
            } catch {
                o = !1
            } finally {
                clearTimeout(e)
            }
        }
        clearTimeout(i), r.releaseLock(), n.cancel().then(null, () => {})
    }
}

function ai(e) {
    let t;
    try {
        t = e.clone()
    } catch {
        return
    }
    ar(t, () => {
        iu("fetch-body-resolved", {
            endTimestamp: 1e3 * ta(),
            response: e
        })
    })
}

function ao(e, t) {
    return eI(e) && !!e[t]
}

function aa(e) {
    return "string" == typeof e ? e : e ? ao(e, "url") ? e.url : e.toString ? e.toString() : "" : ""
}

function as(e) {
    if (void 0 !== e) return e >= 400 && e < 500 ? "warning" : e >= 500 ? "error" : void 0
}

function al(e) {
    return "boolean" == typeof e ? e : !!(null == e ? void 0 : e.capture)
}

function au(e) {
    is("dom", e), il("dom", ac)
}

function ac() {
    if (!ei.document) return;
    let e = iu.bind(null, "dom"),
        t = ad(e, !0);
    ei.document.addEventListener("click", t, !1), ei.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach(t => {
        var n, r;
        let i = null == (n = ei[t]) ? void 0 : n.prototype;
        (null == i || null == (r = i.hasOwnProperty) ? void 0 : r.call(i, "addEventListener")) && (eP(i, "addEventListener", function(t) {
            return function(n, r, i) {
                if (("click" === n || "keypress" == n) && r) try {
                    let o = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {},
                        a = o[n] = o[n] || {
                            captureListeners: new WeakSet,
                            bubbleListeners: new WeakSet,
                            listenerCount: 0
                        },
                        s = al(i);
                    if (!a.handler) {
                        let r = ad(e);
                        a.handler = r, a.capture = s, t.call(this, n, r, a.capture)
                    }
                    let l = a[s ? "captureListeners" : "bubbleListeners"];
                    !l.has(r) && ("object" == typeof i && ((null == i ? void 0 : i.once) || (null == i ? void 0 : i.signal)) ? a.sticky = !0 : (l.add(r), a.listenerCount++))
                } catch {}
                return t.call(this, n, r, i)
            }
        }), eP(i, "removeEventListener", function(e) {
            return function(t, n, r) {
                if (("click" === t || "keypress" == t) && n) try {
                    let i = this.__sentry_instrumentation_handlers__ || {},
                        o = i[t];
                    (null == o ? void 0 : o[al(r) ? "captureListeners" : "bubbleListeners"].delete(n)) && (--o.listenerCount || o.sticky || (e.call(this, t, o.handler, o.capture), o.handler = void 0, delete i[t]), 0 === Object.keys(i).length && delete this.__sentry_instrumentation_handlers__)
                } catch {}
                return e.call(this, t, n, r)
            }
        }))
    })
}

function ad(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return n => {
        var r;
        if (!n || n._sentryCaptured) return;
        let i = function(e) {
            try {
                return e.target
            } catch {
                return null
            }
        }(n);
        if (r = n.type, "keypress" === r && (null == i || !i.tagName || "INPUT" !== i.tagName && "TEXTAREA" !== i.tagName && !i.isContentEditable && 1)) return;
        eN(n, "_sentryCaptured", !0), i && !i._sentryId && eN(i, "_sentryId", e3());
        let o = "keypress" === n.type ? "input" : n.type;
        ! function(e) {
            if (e.type !== d) return !1;
            try {
                if (!e.target || e.target._sentryId !== p) return !1
            } catch {}
            return !0
        }(n) && (e({
            event: n,
            name: o,
            global: t
        }), d = n.type, p = i ? i._sentryId : void 0), clearTimeout(c), c = ei.setTimeout(() => {
            p = void 0, d = void 0
        }, 1e3)
    }
}
let ap = "__sentry_xhr_v3__";

function af(e) {
    is("xhr", e), il("xhr", ah)
}

function ah() {
    if (!ei.XMLHttpRequest) return;
    let e = XMLHttpRequest.prototype;
    e.open = new Proxy(e.open, {
        apply(e, t, n) {
            let r = Error(),
                i = 1e3 * ta(),
                o = ew(n[0]) ? n[0].toUpperCase() : void 0,
                a = function(e) {
                    if (ew(e)) return e;
                    try {
                        return e.toString()
                    } catch {}
                }(n[1]);
            if (!o || !a) return e.apply(t, n);
            t[ap] = {
                method: o,
                url: a,
                request_headers: {}
            }, "POST" === o && a.match(/sentry_key/) && (t.__sentry_own_request__ = !0);
            let s = () => {
                let e = t[ap];
                if (e && 4 === t.readyState) {
                    try {
                        e.status_code = t.status
                    } catch {}
                    iu("xhr", {
                        endTimestamp: 1e3 * ta(),
                        startTimestamp: i,
                        xhr: t,
                        virtualError: r
                    }), r = void 0, t.removeEventListener("readystatechange", s)
                }
            };
            return "onreadystatechange" in t && "function" == typeof t.onreadystatechange ? t.onreadystatechange = new Proxy(t.onreadystatechange, {
                apply: (e, t, n) => (s(), e.apply(t, n))
            }) : t.addEventListener("readystatechange", s), t.setRequestHeader = new Proxy(t.setRequestHeader, {
                apply(e, t, n) {
                    let [r, i] = n, o = t[ap];
                    return o && ew(r) && ew(i) && (o.request_headers[r.toLowerCase()] = i), e.apply(t, n)
                }
            }), e.apply(t, n)
        }
    }), e.send = new Proxy(e.send, {
        apply(e, t, n) {
            let r = t[ap];
            return r && (void 0 !== n[0] && (r.body = n[0]), iu("xhr", {
                startTimestamp: 1e3 * ta(),
                xhr: t
            })), e.apply(t, n)
        }
    })
}

function am(e) {
    let t = "history";
    is(t, e), il(t, ag)
}

function ag() {
    function e(e) {
        return function() {
            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            let i = n.length > 2 ? n[2] : void 0;
            if (i) {
                let t = f,
                    r = function(e) {
                        try {
                            return new URL(e, ei.location.origin).toString()
                        } catch {
                            return e
                        }
                    }(String(i));
                if (f = r, t === r) return e.apply(this, n);
                iu("history", {
                    from: t,
                    to: r
                })
            }
            return e.apply(this, n)
        }
    }
    ei.addEventListener("popstate", () => {
        let e = ei.location.href,
            t = f;
        f = e, t === e || iu("history", {
            from: t,
            to: e
        })
    }), "history" in ei && ei.history && (eP(ei.history, "pushState", e), eP(ei.history, "replaceState", e))
}
let av = {};
try {
    "u" > typeof Node && (av.parentNode = Object.getOwnPropertyDescriptor(Node.prototype, "parentNode").get), "u" > typeof Element && (av.tagName = Object.getOwnPropertyDescriptor(Element.prototype, "tagName").get, av.id = Object.getOwnPropertyDescriptor(Element.prototype, "id").get, av.className = Object.getOwnPropertyDescriptor(Element.prototype, "className").get, av.getAttribute = Element.prototype.getAttribute), "u" > typeof HTMLElement && (av.dataset = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "dataset").get)
} catch {}

function a_(e, t, n) {
    let r = av[t];
    if (r) try {
        return r.call(e, n)
    } catch {}
    let i = e[t];
    return "function" == typeof i ? i.call(e, n) : i
}

function ay(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (!e) return "<unknown>";
    try {
        let n, r = e,
            i = [],
            o = 0,
            a = 0,
            s = Array.isArray(t) ? t : t.keyAttrs,
            l = !Array.isArray(t) && t.maxStringLength || 80;
        for (; r && o++ < 5 && (n = function(e, t) {
                let n = [],
                    r = a_(e, "tagName");
                if (!r) return "";
                if ("u" > typeof HTMLElement && e instanceof HTMLElement) {
                    let t = a_(e, "dataset");
                    if (t) {
                        if (t.sentryComponent) return t.sentryComponent;
                        if (t.sentryElement) return t.sentryElement
                    }
                }
                n.push(r.toLowerCase());
                let i = (null == t ? void 0 : t.length) ? t.filter(t => a_(e, "getAttribute", t)).map(t => [t, a_(e, "getAttribute", t)]) : null;
                if (null == i ? void 0 : i.length) i.forEach(e => {
                    n.push(`[${e[0]}="${e[1]}"]`)
                });
                else {
                    let t = a_(e, "id");
                    t && n.push(`#${t}`);
                    let r = a_(e, "className");
                    if (r && ew(r))
                        for (let e of r.split(/\s+/)) n.push(`.${e}`)
                }
                for (let t of ["aria-label", "type", "name", "title", "alt"]) {
                    let r = a_(e, "getAttribute", t);
                    r && n.push(`[${t}="${r}"]`)
                }
                return n.join("")
            }(r, s), "html" !== n && (!(o > 1) || !(a + 3 * i.length + n.length >= l)));) i.push(n), a += n.length, r = a_(r, "parentNode");
        return i.reverse().join(" > ")
    } catch {
        return "<unknown>"
    }
}

function ab(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5;
    if (!ei.HTMLElement) return null;
    let n = e;
    for (let e = 0; e < t && n; e++) {
        if (n instanceof HTMLElement) {
            if (n.dataset.sentryComponent) return n.dataset.sentryComponent;
            if (n.dataset.sentryElement) return n.dataset.sentryElement
        }
        n = n.parentNode
    }
    return null
}
let aS = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
    aw = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = {
                dom: !0,
                fetch: !0,
                history: !0,
                sentry: !0,
                xhr: !0,
                ...e
            };
        return {
            name: "Breadcrumbs",
            setup(e) {
                var n, r, i, o, a, s;
                t.dom && au((n = e, r = t.dom, function(e) {
                    let t, i;
                    if (tA() !== n) return;
                    let o = "object" == typeof r ? r.serializeAttribute : void 0,
                        a = "object" == typeof r && "number" == typeof r.maxStringLength ? r.maxStringLength : void 0;
                    a && a > 1024 && (aS && em.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${a} was configured. Sentry will use 1024 instead.`), a = 1024), "string" == typeof o && (o = [o]);
                    try {
                        var s;
                        let n = e.event,
                            r = (s = n) && s.target ? n.target : n;
                        t = ay(r, {
                            keyAttrs: o,
                            maxStringLength: a
                        }), i = ab(r)
                    } catch {
                        t = "<unknown>"
                    }
                    if (0 === t.length) return;
                    let l = {
                        category: `ui.${e.name}`,
                        message: t
                    };
                    i && (l.data = {
                        "ui.component_name": i
                    }), ii(l, {
                        event: e.event,
                        name: e.name,
                        global: e.global
                    })
                })), t.xhr && af((i = e, function(e) {
                    if (tA() !== i) return;
                    let {
                        startTimestamp: t,
                        endTimestamp: n
                    } = e, r = e.xhr[ap];
                    if (!t || !n || !r) return;
                    let {
                        method: o,
                        url: a,
                        status_code: s,
                        body: l
                    } = r, u = {
                        method: o,
                        url: ok(a),
                        status_code: s
                    }, c = {
                        xhr: e.xhr,
                        input: l,
                        startTimestamp: t,
                        endTimestamp: n
                    }, d = {
                        category: "xhr",
                        data: u,
                        type: "http",
                        level: as(s)
                    };
                    i.emit("beforeOutgoingRequestBreadcrumb", d, c), ii(d, c)
                })), t.fetch && at((o = e, function(e) {
                    if (tA() !== o) return;
                    let {
                        startTimestamp: t,
                        endTimestamp: n
                    } = e;
                    if (n && (!e.fetchData.url.match(/sentry_key/) || "POST" !== e.fetchData.method))
                        if (e.error) {
                            let r = {
                                    data: e.error,
                                    input: e.args,
                                    startTimestamp: t,
                                    endTimestamp: n
                                },
                                i = {
                                    category: "fetch",
                                    data: { ...e.fetchData,
                                        url: ok(e.fetchData.url)
                                    },
                                    level: "error",
                                    type: "http"
                                };
                            o.emit("beforeOutgoingRequestBreadcrumb", i, r), ii(i, r)
                        } else {
                            let r = e.response,
                                i = { ...e.fetchData,
                                    url: ok(e.fetchData.url),
                                    status_code: null == r ? void 0 : r.status
                                },
                                a = {
                                    input: e.args,
                                    response: r,
                                    startTimestamp: t,
                                    endTimestamp: n
                                },
                                s = {
                                    category: "fetch",
                                    data: i,
                                    type: "http",
                                    level: as(i.status_code)
                                };
                            o.emit("beforeOutgoingRequestBreadcrumb", s, a), ii(s, a)
                        }
                })), t.history && am((a = e, function(e) {
                    if (tA() !== a) return;
                    let t = e.from,
                        n = e.to,
                        r = oP(ei.location.href),
                        i = t ? oP(t) : void 0,
                        o = oP(n);
                    (null == i ? void 0 : i.path) || (i = r), r.protocol === o.protocol && r.host === o.host && (n = o.relative), r.protocol === i.protocol && r.host === i.host && (t = i.relative), ii({
                        category: "navigation",
                        data: {
                            from: ok(t),
                            to: ok(n)
                        }
                    })
                })), t.sentry && e.on("beforeSendEvent", (s = e, function(e) {
                    tA() === s && ii({
                        category: `sentry.${"transaction"===e.type?"transaction":"event"}`,
                        event_id: e.event_id,
                        level: e.level,
                        message: e4(e)
                    }, {
                        event: e
                    })
                }))
            }
        }
    },
    aE = "EventTarget,Window,Node,ApplicationCache,AudioTrackList,BroadcastChannel,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(","),
    ak = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = {
                XMLHttpRequest: !0,
                eventTarget: !0,
                requestAnimationFrame: !0,
                setInterval: !0,
                setTimeout: !0,
                unregisterOriginalCallbacks: !1,
                ...e
            };
        return {
            name: "BrowserApiErrors",
            setupOnce() {
                t.setTimeout && eP(ei, "setTimeout", aT), t.setInterval && eP(ei, "setInterval", aT), t.requestAnimationFrame && eP(ei, "requestAnimationFrame", aI), t.XMLHttpRequest && "XMLHttpRequest" in ei && eP(XMLHttpRequest.prototype, "send", aR);
                let e = t.eventTarget;
                e && (Array.isArray(e) ? e : aE).forEach(e => {
                    var n, r, i, o;
                    let a;
                    return n = e, r = t, void((null == (a = null == (i = ei[n]) ? void 0 : i.prototype) || null == (o = a.hasOwnProperty) ? void 0 : o.call(a, "addEventListener")) && (eP(a, "addEventListener", function(e) {
                        return function(t, i, o) {
                            var a, s, l, u;
                            try {
                                a = i, "function" == typeof a.handleEvent && (i.handleEvent = o8(i.handleEvent, {
                                    mechanism: {
                                        data: {
                                            handler: eY(i),
                                            target: n
                                        },
                                        handled: !1,
                                        type: "auto.browser.browserapierrors.handleEvent"
                                    }
                                }))
                            } catch {}
                            return r.unregisterOriginalCallbacks && (s = this, l = t, u = i, s && "object" == typeof s && "removeEventListener" in s && "function" == typeof s.removeEventListener && s.removeEventListener(l, u)), e.apply(this, [t, o8(i, {
                                mechanism: {
                                    data: {
                                        handler: eY(i),
                                        target: n
                                    },
                                    handled: !1,
                                    type: "auto.browser.browserapierrors.addEventListener"
                                }
                            }), o])
                        }
                    }), eP(a, "removeEventListener", function(e) {
                        return function(t, n, r) {
                            try {
                                if (Object.prototype.hasOwnProperty.call(n, "__sentry_wrapped__")) {
                                    let i = n.__sentry_wrapped__;
                                    i && e.call(this, t, i, r)
                                }
                            } catch {}
                            return e.call(this, t, n, r)
                        }
                    })))
                })
            }
        }
    };

function aT(e) {
    return function() {
        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        let i = n[0];
        return n[0] = o8(i, {
            mechanism: {
                handled: !1,
                type: `auto.browser.browserapierrors.${eY(e)}`
            }
        }), e.apply(this, n)
    }
}

function aI(e) {
    return function(t) {
        return e.apply(this, [o8(t, {
            mechanism: {
                data: {
                    handler: eY(e)
                },
                handled: !1,
                type: "auto.browser.browserapierrors.requestAnimationFrame"
            }
        })])
    }
}

function aR(e) {
    return function() {
        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        let i = this;
        return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(e => {
            e in i && "function" == typeof i[e] && eP(i, e, function(t) {
                let n = {
                        mechanism: {
                            data: {
                                handler: eY(t)
                            },
                            handled: !1,
                            type: `auto.browser.browserapierrors.xhr.${e}`
                        }
                    },
                    r = eD(t);
                return r && (n.mechanism.data.handler = eY(r)), o8(t, n)
            })
        }), e.apply(this, n)
    }
}

function ax(e, t, n) {
    ei.document && ei.addEventListener(e, t, n)
}

function aC(e, t, n) {
    ei.document && ei.removeEventListener(e, t, n)
}
let aA = function() {
        var e, t;
        let n = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            r = null == (t = ei.performance) || null == (e = t.getEntriesByType) ? void 0 : e.call(t, "navigation")[0];
        if (!n || r && r.responseStart > 0 && r.responseStart < performance.now()) return r
    },
    aM = () => {
        let e = aA();
        return (null == e ? void 0 : e.activationStart) ?? 0
    },
    aP = -1,
    aN = new Set,
    aO = e => {
        var t;
        if ((null == (t = ei.document) ? void 0 : t.visibilityState) === "hidden" && aP > -1) {
            if ("visibilitychange" === e.type)
                for (let e of aN) e();
            isFinite(aP) || (aP = "visibilitychange" === e.type ? e.timeStamp : 0, aC("prerenderingchange", aO, !0))
        }
    },
    aD = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.lifecycle ?? "page";
        return {
            name: "BrowserSession",
            setupOnce() {
                if (void 0 === ei.document) {
                    aS && em.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
                    return
                }
                rZ({
                    ignoreDuration: !0
                });
                let e = !1;
                (e => {
                    var t;
                    let n = ei.requestIdleCallback || ei.setTimeout;
                    if ((null == (t = ei.document) ? void 0 : t.visibilityState) === "hidden") e();
                    else {
                        let t = !1,
                            r = () => {
                                t || (e(), t = !0)
                            };
                        ax("visibilitychange", r, {
                            once: !0,
                            capture: !0
                        }), n(() => {
                            r(), aC("visibilitychange", r, {
                                capture: !0
                            })
                        })
                    }
                })(() => {
                    e || (r2(), e = !0)
                });
                let n = tI(),
                    r = n.getUser();
                n.addScopeListener(t => {
                    let n = t.getUser();
                    ((null == r ? void 0 : r.id) !== (null == n ? void 0 : n.id) || (null == r ? void 0 : r.ip_address) !== (null == n ? void 0 : n.ip_address)) && (r = n, e && r2())
                }), "route" === t && am(t => {
                    let {
                        from: n,
                        to: r
                    } = t;
                    n !== r && (rZ({
                        ignoreDuration: !0
                    }), r2(), e = !0)
                })
            }
        }
    };

function aL(e, t) {
    var n;
    let r, i = n7(e);
    i.attributes && delete i.attributes[nM];
    let o = rp(e),
        a = n7(o),
        {
            isolationScope: s,
            scope: l
        } = nj(e),
        u = rP(s, l);
    a$(i, aF(a, t, u)), t.emit("preprocessSpan", i), i.is_segment && (a$(i, function(e) {
        let t = {},
            {
                response: n,
                profile: r,
                cloud_resource: i,
                culture: o,
                state: a
            } = e;
        if (n && (null != n.status_code && (t["http.response.status_code"] = n.status_code), null != n.body_size && (t["http.response.body.size"] = n.body_size)), r && (r.profile_id && (t["sentry.profile_id"] = r.profile_id), r.profiler_id && (t["sentry.profiler_id"] = r.profiler_id)), i)
            for (let [e, n] of Object.entries(i)) null != n && (t[e] = n);
        o && (o.locale && (t["culture.locale"] = o.locale), o.timezone && (t["culture.timezone"] = o.timezone)), (null == a ? void 0 : a.state) && "string" == typeof a.state.type && (t["state.type"] = a.state.type);
        let s = e.angular;
        if (s) {
            let e = s.version;
            ("string" == typeof e || "number" == typeof e) && (t["angular.version"] = e)
        }
        let l = e.react;
        if (l) {
            let e = l.version;
            ("string" == typeof e || "number" == typeof e) && (t["react.version"] = e)
        }
        return t
    }(u.contexts)), n = i, (r = t.getIntegrationNames()).length && a$(n, {
        "sentry.sdk.integrations": r
    }), t.emit("processSegmentSpan", i)), t.emit("processSpan", i);
    let {
        beforeSendSpan: c,
        traceLifecycle: d
    } = t.getOptions();
    return { ...re("static" !== d && c && !ij(c) ? iW(i, c) : i),
        _segmentSpan: o
    }
}

function a$(e, t) {
    let n = e.attributes ?? (e.attributes = {});
    Object.entries(t).forEach(e => {
        let [t, r] = e;
        null == r || t in n || (n[t] = r)
    })
}

function aF(e, t, n) {
    var r, i, o, a, s, l;
    let u = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
        c = t.getSdkMetadata(),
        {
            release: d,
            environment: p
        } = t.getOptions();
    return {
        "sentry.trace_lifecycle": "stream",
        [nh]: e.name,
        "sentry.segment.id": e.span_id,
        "sentry.sdk.name": null == c || null == (r = c.sdk) ? void 0 : r.name,
        "sentry.sdk.version": null == c || null == (i = c.sdk) ? void 0 : i.version,
        "sentry.release": d,
        "sentry.environment": p || tP,
        "user.id": null == (o = n.user) ? void 0 : o.id,
        "user.email": null == (a = n.user) ? void 0 : a.email,
        "user.ip_address": null == (s = n.user) ? void 0 : s.ip_address,
        "user.name": null == (l = n.user) ? void 0 : l.username,
        ...u ? n.attributes : void 0
    }
}
let aU = () => ({
    name: "CultureContext",
    preprocessEvent(e) {
        let t = aB();
        if (t) {
            var n;
            e.contexts = { ...e.contexts,
                culture: { ...t,
                    ...null == (n = e.contexts) ? void 0 : n.culture
                }
            }
        }
    },
    processSegmentSpan(e) {
        let t = aB();
        t && a$(e, {
            "culture.locale": t.locale,
            "culture.timezone": t.timezone,
            "culture.calendar": t.calendar
        })
    }
});

function aB() {
    try {
        let e = ei.Intl;
        if (!e) return;
        let t = e.DateTimeFormat().resolvedOptions();
        return {
            locale: t.locale,
            timezone: t.timeZone,
            calendar: t.calendar
        }
    } catch {
        return
    }
}
let aj = null;

function aW(e) {
    let t = "error";
    is(t, e), il(t, aH)
}

function aH() {
    aj = ei.onerror, ei.onerror = function(e, t, n, r, i) {
        return iu("error", {
            column: r,
            error: i,
            line: n,
            msg: e,
            url: t
        }), !!aj && aj.apply(this, arguments)
    }, ei.onerror.__SENTRY_INSTRUMENTED__ = !0
}
let az = null;

function aq(e) {
    let t = "unhandledrejection";
    is(t, e), il(t, aG)
}

function aG() {
    az = ei.onunhandledrejection, ei.onunhandledrejection = function(e) {
        return iu("unhandledrejection", e), !az || az.apply(this, arguments)
    }, ei.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
}
let aV = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = {
            onerror: !0,
            onunhandledrejection: !0,
            ...e
        };
    return {
        name: "GlobalHandlers",
        setupOnce() {
            Error.stackTraceLimit = 50
        },
        setup(e) {
            var n, r;
            t.onerror && (n = e, aW(e => {
                let {
                    stackParser: t,
                    attachStacktrace: r
                } = aQ();
                if (tA() !== n || o6(e)) return;
                let {
                    msg: i,
                    url: o,
                    line: a,
                    column: s,
                    error: l
                } = e, u = aJ(o2(t, l || i, void 0, r, !1), o, a, s);
                u.level = "error", r$(u, {
                    originalException: l,
                    mechanism: {
                        handled: !1,
                        type: "auto.browser.global_handlers.onerror"
                    }
                })
            }), aX("onerror")), t.onunhandledrejection && (r = e, aq(e => {
                let {
                    stackParser: t,
                    attachStacktrace: n
                } = aQ();
                if (tA() !== r || o6()) return;
                let i = aY(e),
                    o = ek(i) ? aK(i) : o2(t, i, void 0, n, !0);
                o.level = "error", r$(o, {
                    originalException: i,
                    mechanism: {
                        handled: !1,
                        type: "auto.browser.global_handlers.onunhandledrejection"
                    }
                })
            }), aX("onunhandledrejection"))
        }
    }
};

function aY(e) {
    if (ek(e)) return e;
    try {
        if ("reason" in e) return e.reason;
        if ("detail" in e && "reason" in e.detail) return e.detail.reason
    } catch {}
    return e
}

function aK(e) {
    return {
        exception: {
            values: [{
                type: "UnhandledRejection",
                value: `Non-Error promise rejection captured with value: ${String(e)}`
            }]
        }
    }
}

function aJ(e, t, n, r) {
    let i = e.exception = e.exception || {},
        o = i.values = i.values || [],
        a = o[0] = o[0] || {},
        s = a.stacktrace = a.stacktrace || {},
        l = s.frames = s.frames || [];
    return 0 === l.length && l.push({
        colno: r,
        lineno: n,
        filename: function(e) {
            if (ew(e) && 0 !== e.length) return e.startsWith("data:") ? `<${oO(e,!1)}>` : e
        }(t) ?? oL(),
        function: "?",
        in_app: !0
    }), e
}

function aX(e) {
    aS && em.log(`Global Handler attached: ${e}`)
}

function aQ() {
    let e = tA();
    return (null == e ? void 0 : e.getOptions()) || {
        stackParser: () => [],
        attachStacktrace: !1
    }
}
let aZ = () => ({
    name: "HttpContext",
    preprocessEvent(e, t, n) {
        var r;
        if (!ei.navigator && !ei.location && !ei.document) return;
        let {
            url: i,
            headers: o
        } = o7(n), a = n.getDataCollectionOptions().httpHeaders.request, s = Object.entries((null == (r = e.request) ? void 0 : r.headers) ?? {}).filter(e => {
            let [t] = e;
            return !(t in o)
        }), l = { ...oS(o, a),
            ...Object.fromEntries(s)
        };
        e.request = {
            url: ok(i, n),
            ...e.request,
            ...Object.keys(l).length > 0 ? {
                headers: l
            } : {
                headers: void 0
            }
        }
    },
    processSpan(e, t) {
        var n;
        if (!ei.navigator && !ei.location && !ei.document) return;
        let r = o7(t),
            i = oS(r.headers, t.getDataCollectionOptions().httpHeaders.request),
            o = i.Referer,
            {
                hostname: a,
                protocol: s
            } = ei.location || {};
        a$(e, {
            [nk]: i["User-Agent"],
            "sentry.is_localhost": "file:" === s || "localhost" === a || "127.0.0.1" === a || "[::1]" === a || !!(null == a ? void 0 : a.endsWith(".localhost")),
            ...e.is_segment && {
                [nb]: (null == (n = e.attributes) ? void 0 : n[nd]) !== "http.client" ? ok(r.url) : void 0,
                "http.request.header.referer": o ? [o] : void 0
            }
        })
    }
});

function a0(e) {
    return Array.isArray(e.errors)
}

function a1(e, t, n) {
    e.mechanism = {
        handled: !0,
        type: "auto.core.linked_errors",
        ...a0(n) && {
            is_exception_group: !0
        },
        ...e.mechanism,
        exception_id: t
    }
}

function a2(e, t, n, r) {
    e.mechanism = {
        handled: !0,
        ...e.mechanism,
        type: "chained",
        source: t,
        exception_id: n,
        parent_id: r
    }
}
let a3 = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.limit || 5,
        n = e.key || "cause";
    return {
        name: "LinkedErrors",
        preprocessEvent(e, r, i) {
            ! function(e, t, n, r, i, o) {
                var a;
                if (!(null == (a = i.exception) ? void 0 : a.values) || !o || !e_(o.originalException)) return;
                let s = i.exception.values.length > 0 ? i.exception.values[i.exception.values.length - 1] : void 0;
                s && (i.exception.values = function e(t, n, r, i, o, a, s, l) {
                    var u;
                    if (a.length >= r + 1) return a;
                    let c = [...a];
                    if (e_(i[o])) {
                        a1(s, l, i);
                        let a = t(n, i[o]),
                            u = c.length;
                        a2(a, o, u, l), c = e(t, n, r, i[o], o, [a, ...c], a, u)
                    }
                    return a0(i) && i.errors.forEach((a, u) => {
                        if (e_(a)) {
                            a1(s, l, i);
                            let d = t(n, a),
                                p = c.length;
                            a2(d, `errors[${u}]`, p, l), c = e(t, n, r, a, o, [d, ...c], d, p)
                        }
                    }), "error" in (u = i) && "suppressed" in u && ["error", "suppressed"].forEach(a => {
                        let u = i[a];
                        if (e_(u)) {
                            a1(s, l, i);
                            let d = t(n, u),
                                p = c.length;
                            a2(d, a, p, l), c = e(t, n, r, u, o, [d, ...c], d, p)
                        }
                    }), c
                }(e, t, r, o.originalException, n, i.exception.values, s, 0))
            }(oV, i.getOptions().stackParser, n, t, e, r)
        }
    }
};

function a5(e, t, n, r) {
    let i = {
        filename: e,
        function: "<anonymous>" === t ? "?" : t,
        in_app: !0
    };
    return void 0 !== n && (i.lineno = n), void 0 !== r && (i.colno = r), i
}
let a4 = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
    a6 = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
    a8 = /\((\S*)(?::(\d+))(?::(\d+))\)/,
    a7 = /at (.+?) ?\(data:(.+?),/,
    a9 = [30, e => {
        let t = e.match(a7);
        if (t) return {
            filename: `<data:${t[2]}>`,
            function: t[1]
        };
        let n = a4.exec(e);
        if (n) {
            let [, e, t, r] = n;
            return a5(e, "?", +t, +r)
        }
        let r = a6.exec(e);
        if (r) {
            var i;
            if ((null == (i = r[2]) ? void 0 : i.indexOf("eval")) === 0) {
                let e = a8.exec(r[2]);
                e && (r[2] = e[1], r[3] = e[2], r[4] = e[3])
            }
            let [e, t] = sd(r[1] || "?", r[2]);
            return a5(t, e, r[3] ? +r[3] : void 0, r[4] ? +r[4] : void 0)
        }
    }],
    se = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
    st = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
    sn = [50, e => {
        let t = se.exec(e);
        if (t) {
            if (t[3] && t[3].indexOf(" > eval") > -1) {
                let e = st.exec(t[3]);
                e && (t[1] = t[1] || "eval", t[3] = e[1], t[4] = e[2], t[5] = "")
            }
            let e = t[3],
                n = t[1] || "?";
            return [n, e] = sd(n, e), a5(e, n, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
        }
    }],
    sr = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
    si = [40, e => {
        let t = sr.exec(e);
        return t ? a5(t[2], t[1] || "?", +t[3], t[4] ? +t[4] : void 0) : void 0
    }],
    so = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
    sa = [10, e => {
        let t = so.exec(e);
        return t ? a5(t[2], t[3] || "?", +t[1]) : void 0
    }],
    ss = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,
    sl = [20, e => {
        let t = ss.exec(e);
        return t ? a5(t[5], t[3] || t[4] || "?", +t[1], +t[2]) : void 0
    }],
    su = [a9, sn],
    sc = eq(...su),
    sd = (e, t) => {
        let n = -1 !== e.indexOf("safari-extension"),
            r = -1 !== e.indexOf("safari-web-extension");
        return n || r ? [-1 !== e.indexOf("@") ? e.split("@")[0] : "?", n ? `safari-extension:${t}` : `safari-web-extension:${t}`] : [e, t]
    },
    sp = {};

function sf(e) {
    let t = sp[e];
    if (t) return t;
    let n = ei[e];
    if (ae(n)) return sp[e] = n.bind(ei);
    let r = ei.document;
    if (r && "function" == typeof r.createElement) try {
        let t = r.createElement("iframe");
        t.hidden = !0, r.head.appendChild(t);
        let i = t.contentWindow;
        (null == i ? void 0 : i[e]) && (n = i[e]), r.head.removeChild(t)
    } catch (t) {
        oD && em.warn(`Could not create sandbox iframe for ${e} check, bailing to window.${e}: `, t)
    }
    return n ? sp[e] = n.bind(ei) : n
}

function sh() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    try {
        return sf("setTimeout")(...t)
    } catch (n) {
        oD && em.warn("Could not use native setTimeout implementation, falling back to window.setTimeout: ", n);
        let e = ei.setTimeout.bind(ei);
        return sp.setTimeout = e, e(...t)
    }
}

function sm(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : sf("fetch"),
        n = 0,
        r = 0;
    async function i(i) {
        let o = i.body.length;
        n += o, r++;
        let a = {
            body: i.body,
            method: "POST",
            referrerPolicy: "strict-origin",
            headers: e.headers,
            keepalive: n <= 6e4 && r < 15,
            ...e.fetchOptions
        };
        try {
            let n = await t(e.url, a);
            return {
                statusCode: n.status,
                headers: {
                    "x-sentry-rate-limits": n.headers.get("X-Sentry-Rate-Limits"),
                    "retry-after": n.headers.get("Retry-After")
                }
            }
        } catch (e) {
            throw sp.fetch = void 0, e
        } finally {
            n -= o, r--
        }
    }
    return iZ(e, i, iK(e.bufferSize || 40))
}
let sg = /^HTML(\w*)Element$/;

function sv(e) {
    if ("u" > typeof window && e === window) return "[Window]";
    if ("u" > typeof document && e === document) return "[Document]";
    if (function(e) {
            if ("u" < typeof Element) return !1;
            try {
                return e instanceof Element
            } catch {
                return !1
            }
        }(e)) {
        let t, n = (null == (t = Object.getPrototypeOf(e)) ? void 0 : t.constructor) ? t.constructor.name : "null prototype";
        if (sg.test(n)) return `[HTMLElement: ${ay(e)}]`
    }
}

function s_(e) {
    return [r7(), ir(), {
        name: "ConversationId",
        setup(e) {
            e.on("spanStart", e => {
                let t = tT().getScopeData(),
                    n = tI().getScopeData(),
                    r = t.conversationId || n.conversationId;
                if (r) {
                    let {
                        op: t,
                        data: n,
                        description: i
                    } = n8(e);
                    if (!(null == t ? void 0 : t.startsWith("gen_ai.")) && !n["ai.operationId"] && !(null == i ? void 0 : i.startsWith("ai."))) return;
                    e.setAttribute("gen_ai.conversation.id", r)
                }
            })
        }
    }, ak(), aw(), ig(), aV(), a3(), i_(), aZ(), aU(), aD()]
}

function sy() {
    var e;
    let t, r, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        o = !i.skipBrowserExtensionCheck && !! function() {
            var e;
            if (void 0 === ei.window || ei.nw) return !1;
            let t = ei.chrome || ei.browser;
            if (!(null == t || null == (e = t.runtime) ? void 0 : e.id)) return !1;
            let n = oL();
            return !(ei === ei.top && /^(?:chrome-extension|moz-extension|ms-browser-extension|safari-web-extension):\/\//.test(n))
        }() && (aS && ed(() => {
            console.error("[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/")
        }), !0),
        a = null == i.defaultIntegrations ? s_() : i.defaultIntegrations,
        s = function(e) {
            let t, n, r = e.defaultIntegrations || [],
                i = e.integrations;
            if (r.forEach(e => {
                    e.isDefaultInstance = !0
                }), Array.isArray(i)) t = [...r, ...i];
            else if ("function" == typeof i) {
                let e = i(r);
                t = Array.isArray(e) ? e : [e]
            } else t = r;
            return n = {}, t.forEach(e => {
                let {
                    name: t
                } = e, r = n[t];
                r && !r.isDefaultInstance && e.isDefaultInstance || (n[t] = e)
            }), Object.values(n)
        }({
            integrations: i.integrations,
            defaultIntegrations: a
        }),
        l = { ...i,
            enabled: !o && i.enabled,
            stackParser: Array.isArray(e = i.stackParser || sc) ? eq(...e) : e,
            integrations: s,
            transport: i.transport || sm
        };
    n = sv;
    return !0 === l.debug && (el ? em.enable() : ed(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")
    })), (!(t = tA()) || on in t ? void 0 : t) && ed(() => {
        console.warn("[Sentry] `Sentry.init()` was called more than once. The new client replaces the active client, but the active client is not closed, so state from both can mix. Call `Sentry.init()` only once, or call `await Sentry.close()` before you call it again.")
    }), tT().update(l.initialScope), om(r = new o9(l)), r.init(), r
}

function sb() {}

function sS(e) {
    e()
}
var sw = e.i(244835);

function sE(e) {
    let t = { ...e
    };
    eg(t, "react"), rF("react", {
        version: sw.version
    });
    let r = sy(t);
    return n = sk, r
}

function sk(e) {
    return eT(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e ? "[SyntheticEvent]" : sv(e)
}
let sT = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;

function sI(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
    if (!e_(e)) return !1;
    let r = e.digest;
    return !!("string" == typeof r && t(r)) || n < 5 && "cause" in e && sI(e.cause, t, n + 1)
}

function sR(e) {
    return sI(e, e => ["NEXT_NOT_FOUND", "NEXT_HTTP_ERROR_FALLBACK;404"].includes(e))
}

function sx(e) {
    return sI(e, e => "NEXT_HTTP_ERROR_FALLBACK;403" === e) ? 403 : sI(e, e => "NEXT_HTTP_ERROR_FALLBACK;401" === e) ? 401 : void 0
}

function sC(e) {
    return sI(e, e => e.startsWith("NEXT_REDIRECT;"))
}
let sA = ["HANGING_PROMISE_REJECTION", "NEXT_PRERENDER_INTERRUPTED", "DYNAMIC_SERVER_USAGE", "BAILOUT_TO_CLIENT_SIDE_RENDERING"];

function sM(e) {
    return sI(e, e => sA.includes(e))
}
class sP {
    add(e) {
        let t = e.trace_id,
            n = this._traceBuckets.get(t);
        n || (n = {
            spans: new Set,
            size: 0,
            timeout: iV(setTimeout(() => {
                this.flush(t)
            }, this._flushInterval))
        }, this._traceBuckets.set(t, n)), n.spans.add(e), n.size += function(e) {
            let t;
            if (t = 156 + 2 * e.name.length + t4(e.attributes), e.links && e.links.length > 0) {
                let n = e.links[0],
                    r = null == n ? void 0 : n.attributes;
                t += (100 + (r ? t4(r) : 0)) * e.links.length
            }
            return t
        }(e), (n.spans.size >= this._maxSpanLimit || n.size >= this._maxTraceWeight) && this.flush(t)
    }
    drain() {
        this._traceBuckets.size && (el && em.log(`Flushing span tree map with ${this._traceBuckets.size} traces`), this._traceBuckets.forEach((e, t) => {
            this.flush(t)
        }))
    }
    flush(e) {
        var t;
        let n = this._traceBuckets.get(e);
        if (!n) return;
        if (!n.spans.size) return void this._removeTrace(e);
        let r = Array.from(n.spans),
            i = null == (t = r[0]) ? void 0 : t._segmentSpan;
        if (!i) {
            el && em.warn("No segment span reference found on span JSON, cannot compute DSC"), this._removeTrace(e);
            return
        }
        let o = rx(i),
            a = r.map(e => {
                let {
                    _segmentSpan: t,
                    ...n
                } = e;
                return n
            }),
            s = iH(a, o, this._client);
        el && em.log(`Sending span envelope for trace ${e} with ${a.length} spans`), this._client.sendEnvelope(s).then(null, e => {
            el && em.error("Error while sending streamed span envelope:", e)
        }), this._removeTrace(e)
    }
    _removeTrace(e) {
        let t = this._traceBuckets.get(e);
        t && clearTimeout(t.timeout), this._traceBuckets.delete(e)
    }
    constructor(e, t) {
        this._traceBuckets = new Map, this._client = e;
        let {
            maxSpanLimit: n,
            flushInterval: r,
            maxTraceWeightInBytes: i
        } = t ?? {};
        this._maxSpanLimit = n && n > 0 && n <= 1e3 ? n : 1e3, this._flushInterval = r && r > 0 ? r : 5e3, this._maxTraceWeight = i && i > 0 ? i : 5e6, this._client.on("flush", () => {
            this.drain()
        }), this._client.on("close", () => {
            this._traceBuckets.forEach(e => {
                clearTimeout(e.timeout)
            }), this._traceBuckets.clear()
        })
    }
}
let sN = "SpanStreaming",
    sO = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.flushOnSegmentEnd ?? !0;
        return {
            name: sN,
            setup(e) {
                if (!iq(e)) {
                    el && em.log(`[${sN}] \`traceLifecycle\` is "static", skipping setup.`);
                    return
                }
                let n = new sP(e);
                e.on("afterSpanEnd", t => {
                    rr(t) && n.add(aL(t, e))
                }), e.on("flushTraceSpans", e => {
                    n.flush(e)
                }), t && e.on("afterSegmentSpanEnd", e => {
                    let t = e.spanContext().traceId;
                    iV(setTimeout(() => {
                        n.flush(t)
                    }, 500))
                })
            }
        }
    };

function sD(e, t) {
    var n, r, i, o;
    let a, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
        l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
    try {
        a = e()
    } catch (e) {
        throw t(e), s(), e
    }
    return n = a, r = t, i = s, o = l, eC(n) ? tm(n, e => {
        i(), o(e)
    }, e => {
        r(e), i()
    }) : (i(), o(n), n)
}

function sL(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : rh(),
        i = r && rd(r);
    i && (el && em.log(`[Measurement] Setting measurement on root span: ${e} = ${t} ${n}`), i.addEvent(e, {
        [nA]: t,
        [nC]: n
    }))
}

function s$(e) {
    if (!e || 0 === e.length) return;
    let t = {};
    return e.forEach(e => {
        let n = e.attributes || {},
            r = n[nC],
            i = n[nA];
        "string" == typeof r && "number" == typeof i && (t[e.name] = {
            value: i,
            unit: r
        })
    }), t
}

function sF() {
    return ea(eo()).segmentSpanCaptureStrategy
}
class sU {
    addLink(e) {
        return this._frozen || (this._links ? this._links.push(e) : this._links = [e]), this
    }
    addLinks(e) {
        return this._frozen || (this._links ? this._links.push(...e) : this._links = e), this
    }
    recordException(e, t) {}
    spanContext() {
        let {
            _spanId: e,
            _traceId: t,
            _sampled: n
        } = this;
        return {
            spanId: e,
            traceId: t,
            traceFlags: +!!n
        }
    }
    setAttribute(e, t) {
        return this._frozen || (e !== nm || void 0 === t || rf(this) ? void 0 === t ? delete this._attributes[e] : this._attributes[e] = t : el && em.warn("[Tracing] Ignoring name source on a child span: this attribute is only valid on the root span.")), this
    }
    setAttributes(e) {
        return Object.keys(e).forEach(t => this.setAttribute(t, e[t])), this
    }
    updateStartTime(e) {
        this._frozen || (this._startTime = n4(e), this._startPerformanceNow = void 0)
    }
    setStatus(e) {
        return this._frozen || (this._status = e), this
    }
    updateName(e) {
        return this._frozen || (this._name = e, rg(this, "custom")), this
    }
    end(e) {
        !this._endTime && (this._endTime = null == e ? this._getEndTimeFromDuration() : n4(e), function(e) {
            if (!el) return;
            let {
                description: t = "< unknown name >",
                op: n = "< unknown op >"
            } = n8(e), {
                spanId: r
            } = e.spanContext(), i = rd(e) === e, o = `[Tracing] Finishing "${n}" ${i?"root ":""}span "${t}" with ID ${r}`;
            em.log(o)
        }(this), this._onSpanEnded(), this._frozen = !0 === this[nU])
    }
    getStaticSpanJSON() {
        return {
            data: this._attributes,
            description: this._name,
            op: this._attributes[nd],
            parent_span_id: this._parentSpanId,
            span_id: this._spanId,
            start_timestamp: this._startTime,
            status: ri(this._status),
            timestamp: this._endTime,
            trace_id: this._traceId,
            origin: this._attributes[np],
            profile_id: this._attributes[nf],
            exclusive_time: this._attributes[nu],
            measurements: s$(this._events),
            links: n3(this._links)
        }
    }
    getSpanJSON() {
        return {
            name: this._name ?? "",
            span_id: this._spanId,
            trace_id: this._traceId,
            parent_span_id: this._parentSpanId,
            start_timestamp: this._startTime,
            end_timestamp: this._endTime,
            is_segment: rf(this),
            status: ro(this._status),
            attributes: ra(this._attributes, this._status),
            links: n5(this._links)
        }
    }
    isRecording() {
        return !this._endTime && !!this._sampled
    }
    addEvent(e, t, n) {
        if (this._frozen) return this;
        el && em.log("[Tracing] Adding an event to span:", e);
        let r = sB(t) ? t : n || ta(),
            i = sB(t) ? {} : t || {},
            o = {
                name: e,
                time: n4(r),
                attributes: i
            };
        return this._events.push(o), this
    }
    isStandaloneSpan() {
        return !!this._isStandaloneSpan
    }
    _getEndTimeFromDuration() {
        let e = tr();
        return null == this._startPerformanceNow || null == e ? ta() : this._startTime + (e - this._startPerformanceNow) / 1e3
    }
    _onSpanEnded() {
        let e = tA();
        if (null == e || e.emit("spanEnd", this), this._isStandaloneSpan) return e ? this._sampled ? void
        function(e, t) {
            let {
                beforeSendSpan: n,
                traceLifecycle: r
            } = t.getOptions();
            if ("static" === r && ij(n)) {
                let r = function(e, t, n) {
                        let r = n8(e),
                            i = n7(rp(e)),
                            {
                                isolationScope: o,
                                scope: a
                            } = nj(e);
                        return Object.entries(aF(i, t, rP(o, a), !1)).forEach(e => {
                            let [t, n] = e;
                            null == n || t in r.data || (r.data[t] = n)
                        }), iG(iW(r, n))
                    }(e, t, n),
                    i = rx(e);
                t.sendEnvelope(iH([r], i, t));
                return
            }
            let {
                _segmentSpan: i,
                ...o
            } = aL(e, t), a = rx(i);
            t.sendEnvelope(iH([o], a, t))
        }(this, e): void(el && em.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled.")): void 0;
        null == e || e.emit("afterSpanEnd", this);
        let t = rd(this);
        if (t !== this) {
            let e = sF();
            if (e) {
                let n = nj(this).scope || tT();
                e.onChildSpanEnded(this, t, e => this._convertSpanToTransaction(e), n)
            }
            return
        }
        if (e && iq(e)) return void e.emit("afterSegmentSpanEnd", this);
        let n = nj(this).scope || tT(),
            r = sF();
        if (r) r.onSegmentSpanEnded(e => this._convertSpanToTransaction(e), n);
        else {
            let e = this._convertSpanToTransaction();
            e && n.captureEvent(e)
        }
    }
    _convertSpanToTransaction() {
        var e, t, n, r, i;
        let o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!sj(n8(this))) return;
        this._name || (el && em.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this._name = "<unlabeled transaction>");
        let {
            scope: a,
            isolationScope: s
        } = nj(this), l = null == a || null == (e = a.getScopeData().sdkProcessingMetadata) ? void 0 : e.normalizedRequest;
        if (!0 !== this._sampled) return;
        null == (t = o.onSpanCaptured) || t.call(o, this);
        let u = [],
            c = 0;
        for (let e of rc(this)) {
            if (e === this || (i = e) instanceof sU && i.isStandaloneSpan() || (null == (n = o.isSpanAlreadyCaptured) ? void 0 : n.call(o, e))) continue;
            let t = n8(e);
            if (!sj(t)) {
                !o.onSpanCaptured && c++;
                continue
            }
            null == (r = o.onSpanCaptured) || r.call(o, e), u.push(t)
        }
        let d = (null == a ? void 0 : a.getClient()) || tA();
        c && (null == d || d.recordDroppedEvent("invalid", "span", c)), u.length > 1e3 && (null == d || d.recordDroppedEvent("buffer_overflow", "span", u.length - 1e3));
        let p = this._attributes[nm];
        delete this._attributes[nM];
        let f = !1;
        u.forEach(e => {
            var t;
            delete e.data[nM], (null == (t = e.op) ? void 0 : t.startsWith("gen_ai.")) && (f = !0)
        });
        let h = {
                contexts: {
                    trace: function(e) {
                        let {
                            spanId: t,
                            traceId: n
                        } = e.spanContext(), {
                            data: r,
                            op: i,
                            parent_span_id: o,
                            status: a,
                            origin: s,
                            links: l
                        } = n8(e);
                        return {
                            parent_span_id: o,
                            span_id: t,
                            trace_id: n,
                            data: r,
                            op: i,
                            status: a,
                            origin: s,
                            links: l
                        }
                    }(this)
                },
                spans: u.length > 1e3 ? u.sort((e, t) => e.start_timestamp - t.start_timestamp).slice(0, 1e3) : u,
                start_timestamp: this._startTime,
                timestamp: this._endTime,
                transaction: this._name,
                type: "transaction",
                sdkProcessingMetadata: {
                    capturedSpanScope: a,
                    capturedSpanIsolationScope: s,
                    dynamicSamplingContext: rx(this),
                    hasGenAiSpans: f
                },
                request: l,
                ...p && {
                    transaction_info: {
                        source: p
                    }
                }
            },
            m = s$(this._events);
        return m && Object.keys(m).length && (el && em.log("[Measurements] Adding measurements to transaction event", JSON.stringify(m, void 0, 2)), h.measurements = m), h
    }
    constructor(e = {}) {
        this._traceId = e.traceId || e3(), this._spanId = e.spanId || tc(), e.startTimestamp ? this._startTime = e.startTimestamp : (this._startTime = ta(), this._startPerformanceNow = tr()), this._links = e.links, this._attributes = {}, this.setAttributes({
            [np]: "manual",
            [nd]: e.op,
            ...e.attributes
        }), this._name = e.name, e.parentSpanId && (this._parentSpanId = e.parentSpanId), "sampled" in e && (this._sampled = e.sampled), this._events = [], this._isStandaloneSpan = e.isStandalone
    }
}

function sB(e) {
    return e && "number" == typeof e || e instanceof Date || Array.isArray(e)
}

function sj(e) {
    return !!e.start_timestamp && !!e.timestamp && !!e.span_id && !!e.trace_id
}

function sW(e, t) {
    let n = sQ(e),
        {
            forceTransaction: r,
            parentSpan: i,
            scope: o
        } = e;
    return tx(null == o ? void 0 : o.clone(), () => s2(i)(() => {
        let a = tT(),
            s = s1(o ?? a, i),
            l = tA(),
            u = e.onlyIfParent && !s ? sJ(a, l) : sX({
                parentSpan: s,
                spanArguments: n,
                forceTransaction: r,
                scope: a
            }),
            c = !s3(u) || !s;
        return s5(u, c, () => t(u), () => u.end())
    }))
}

function sH(e, t) {
    let n = sQ(e),
        {
            forceTransaction: r,
            parentSpan: i,
            scope: o
        } = e;
    return tx(null == o ? void 0 : o.clone(), () => s2(i)(() => {
        let a = tT(),
            s = s1(o ?? a, i),
            l = e.onlyIfParent && !s ? sJ(a, tA()) : sX({
                parentSpan: s,
                spanArguments: n,
                forceTransaction: r,
                scope: a
            }),
            u = !s3(l) || !s;
        return s5(l, u, () => t(l, () => l.end()))
    }))
}

function sz(e) {
    let t = sQ(e),
        {
            forceTransaction: n,
            parentSpan: r,
            scope: i
        } = e;
    return (i ? e => tx(i, e) : void 0 !== r ? e => sG(r, e) : e => e())(() => {
        let o = tT(),
            a = s1(i ?? o, r),
            s = tA();
        return e.onlyIfParent && !a ? sJ(o, s) : sX({
            parentSpan: a,
            spanArguments: t,
            forceTransaction: n,
            scope: o
        })
    })
}
let sq = (e, t) => {
    var n;
    let r, i = tE(eo());
    if (i.continueTrace) return i.continueTrace(e, t);
    let {
        sentryTrace: o,
        baggage: a
    } = e, s = tA(), l = nH(a);
    return s && (n = null == l ? void 0 : l.org_id, r = tq(s), n && r && n !== r ? (em.log(`Won't continue trace because org IDs don't match (incoming baggage: ${n}, SDK options: ${r})`), 1) : s.getOptions().strictTraceContinuation && (n && !r || !n && r) && (em.log(`Starting a new trace because strict trace continuation is enabled but one org ID is missing (incoming baggage: ${n}, Sentry client: ${r})`), 1)) ? sK(t) : tx(e => {
        let n = nJ(o, a);
        return e.setPropagationContext(n), sG(null, t)
    })
};

function sG(e, t) {
    let n = sZ();
    return n.withActiveSpan ? n.withActiveSpan(e, t) : tx(n => (n0(n, e || void 0), t(n)))
}

function sV(e) {
    let t = sZ();
    return t.suppressTracing ? t.suppressTracing(e) : tx(t => (t.setSDKProcessingMetadata({
        [tp]: !0
    }), e()))
}

function sY() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tT(),
        t = sZ();
    return t.isTracingSuppressed ? t.isTracingSuppressed(e) : !0 === e.getScopeData().sdkProcessingMetadata[tp]
}

function sK(e) {
    let t = sZ();
    return t.startNewTrace ? t.startNewTrace(e) : sG(null, () => tx(t => (t.setPropagationContext({
        traceId: e3(),
        sampleRand: eU()
    }), el && em.log(`Starting a new trace with id ${t.getPropagationContext().traceId}`), e())))
}

function sJ(e, t) {
    null == t || t.recordDroppedEvent("no_parent_span", "span");
    let n = new rE({
        dropReason: "no_parent_span",
        traceId: e.getPropagationContext().traceId
    });
    return nB(n, e, tI()), n
}

function sX(e) {
    var t, n, r, i;
    let o, a, {
            parentSpan: s,
            spanArguments: l,
            forceTransaction: u,
            scope: c
        } = e,
        d = tI(),
        p = {
            scope: c,
            parentSpan: s
        };
    null == (t = tA()) || t.emit("prepareSpanScope", p);
    let {
        scope: f,
        parentSpan: h
    } = p;
    if (!rS()) {
        let e = f.getPropagationContext(),
            t = new rE({
                traceId: h ? h.spanContext().traceId : e.traceId
            });
        return h && !u && ru(h, t), nB(t, f, d), t
    }
    let m = tA();
    if (n = m, r = l, o = null == n ? void 0 : n.getOptions().ignoreSpans, n && iq(n) && (null == o ? void 0 : o.length) && i1({
            description: r.name || "",
            op: (null == (i = r.attributes) ? void 0 : i[nd]) || r.op,
            attributes: r.attributes
        }, o)) {
        sY(f) || null == m || m.recordDroppedEvent("ignored", "span");
        let e = new rE({
            dropReason: "ignored",
            traceId: (null == h ? void 0 : h.spanContext().traceId) ?? f.getPropagationContext().traceId
        });
        return h && !u && ru(h, e), nB(e, f, d), e
    }
    if (h && !u) a = function(e, t, n, r) {
        let {
            spanId: i,
            traceId: o
        } = e.spanContext(), a = sY(t), s = !a && rr(e), l = s ? new sU({ ...n,
            parentSpanId: i,
            traceId: o,
            sampled: s
        }) : new rE({
            traceId: o
        });
        ru(e, l), nB(l, t, r);
        let u = tA();
        return u && (rk(l) && (rk(e) && e.dropReason ? (l.dropReason = e.dropReason, u.recordDroppedEvent(e.dropReason, "span")) : a || (l.dropReason = "sample_rate", u.recordDroppedEvent("sample_rate", "span"))), u.emit("spanStart", l)), l
    }(h, f, l, d), ru(h, a);
    else if (h) {
        let e = rx(h),
            {
                traceId: t,
                spanId: n
            } = h.spanContext(),
            r = rr(h);
        eN(a = s0({
            traceId: t,
            parentSpanId: n,
            ...l
        }, f, d, r), rT, e)
    } else {
        let {
            traceId: e,
            dsc: t,
            parentSpanId: n,
            sampled: r,
            sampleRand: i
        } = f.getPropagationContext();
        a = s0({
            traceId: e,
            parentSpanId: n,
            ...l
        }, f, d, r), t && eN(a, rT, 0 === Object.keys(t).length && void 0 !== i ? {
            sample_rand: i.toString()
        } : t)
    }
    return ! function(e) {
        if (!el) return;
        let {
            description: t = "< unknown name >",
            op: n = "< unknown op >",
            parent_span_id: r
        } = n8(e), {
            spanId: i
        } = e.spanContext(), o = rr(e), a = rd(e), s = a === e, l = `[Tracing] Starting ${o?"sampled":"unsampled"} ${s?"root ":""}span`, u = [`op: ${n}`, `name: ${t}`, `ID: ${i}`];
        if (r && u.push(`parent ID: ${r}`), !s) {
            let {
                op: e,
                description: t
            } = n8(a);
            u.push(`root ID: ${a.spanContext().spanId}`), e && u.push(`root op: ${e}`), t && u.push(`root description: ${t}`)
        }
        em.log(`${l}
  ${u.join("\n  ")}`)
    }(a), a
}

function sQ(e) {
    var t;
    let n = {
        isStandalone: null == (t = e.experimental) ? void 0 : t.standalone,
        ...e
    };
    if (e.op && (n.attributes = {
            [nd]: e.op,
            ...e.attributes
        }), e.startTime) {
        let t = { ...n
        };
        return t.startTimestamp = n4(e.startTime), delete t.startTime, t
    }
    return n
}

function sZ() {
    return tE(eo())
}

function s0(e, t, n, r) {
    var i;
    let o = tA(),
        a = (null == o ? void 0 : o.getOptions()) || {},
        {
            name: s = ""
        } = e,
        l = {
            spanAttributes: { ...e.attributes
            },
            spanName: s,
            parentSampled: r
        };
    null == o || o.emit("beforeSampling", l, {
        decision: !1
    });
    let u = l.parentSampled ?? r,
        c = l.spanAttributes,
        d = t.getPropagationContext(),
        p = sY(t),
        [f, h, m, g] = p ? [!1] : function(e, t, n) {
            if (!rS(e)) return [!1];
            let r = function(e, t) {
                let {
                    tracesSampler: n,
                    tracesSampleRate: r
                } = e;
                if ("function" == typeof n) {
                    let e = tO(el ? "The `tracesSampler` callback threw an error, falling back to the parent sampling decision or `tracesSampleRate`:" : "", () => [n({ ...t,
                        inheritOrSampleWith: e => "number" == typeof t.parentSampleRate ? t.parentSampleRate : "boolean" == typeof t.parentSampled ? Number(t.parentSampled) : e
                    }), !0], () => void 0);
                    if (e) return e
                }
                return void 0 !== t.parentSampled ? [t.parentSampled] : void 0 !== r ? [r, !0] : void 0
            }(e, t);
            if (!r) return [!1, void 0, void 0, "callback_error"];
            let [i, o] = r, a = nV(i);
            if (void 0 === a) return el && em.warn(`[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(i)} of type ${JSON.stringify(typeof i)}.`), [!1];
            if (!a) return el && em.log(`[Tracing] Discarding transaction because ${"function"==typeof e.tracesSampler?"tracesSampler returned 0 or false":"a negative sampling decision was inherited or tracesSampleRate is set to 0"}`), [!1, a, o];
            let s = n < a;
            return !s && el && em.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(i)})`), [s, a, o]
        }(a, {
            name: s,
            parentSampled: u,
            attributes: c,
            normalizedRequest: n.getScopeData().sdkProcessingMetadata.normalizedRequest,
            parentSampleRate: nV(null == (i = d.dsc) ? void 0 : i.sample_rate)
        }, d.sampleRand),
        v = new sU({ ...e,
            attributes: {
                [nm]: "custom",
                [nT]: void 0 !== h && m ? h : void 0,
                ...c
            },
            sampled: f
        });
    if (!f && o && !p) {
        el && em.log("[Tracing] Discarding root span because its trace was not chosen to be sampled.");
        let t = g || "sample_rate";
        iq(o) || e.isStandalone || o.recordDroppedEvent(t, "transaction"), o.recordDroppedEvent(t, "span")
    }
    return nB(v, t, n), o && o.emit("spanStart", v), v
}

function s1(e, t) {
    if (t) return t;
    if (null === t) return;
    let n = rh(e);
    if (!n) return;
    let r = tA();
    return (r ? r.getOptions() : {}).parentSpanIsAlwaysRootSpan ? rd(n) : n
}

function s2(e) {
    return void 0 !== e ? t => sG(e, t) : e => e()
}

function s3(e) {
    return rk(e) && "ignored" === e.dropReason
}

function s5(e, t, n, r) {
    return (t ? t => sG(e, () => {
        let n = tT(),
            r = nj(e).scope;
        return r && n.setPropagationContext(r.getPropagationContext()), nB(e, n, tI()), t()
    }) : e => e())(() => sD(() => n(), t => {
        let n;
        !(!(n = r_(t)) || !rr(e) || rv.has(n)) && rv.set(n, n1(e));
        let {
            status: r
        } = n8(e);
        e.isRecording() && "ok" === r && e.setStatus({
            code: 2,
            message: "internal_error"
        })
    }, r))
}
let s4 = new WeakSet;

function s6() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tA();
    !(!e || s4.has(e)) && iq(e) && (s4.add(e), e.addIntegration(sO()))
}

function s8(e, t) {
    return s6(), sW(e, t)
}

function s7(e, t) {
    return s6(), sH(e, t)
}

function s9(e) {
    return s6(), sz(e)
}
let le = {
    idleTimeout: 1e3,
    finalTimeout: 3e4,
    childSpanTimeout: 15e3
};

function lt(e) {
    let t, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = tA();
    s6(i);
    let o = new Map,
        a = !1,
        s = "externalFinish",
        l = !r.disableAutoFinish,
        u = [],
        {
            idleTimeout: c = le.idleTimeout,
            finalTimeout: d = le.finalTimeout,
            childSpanTimeout: p = le.childSpanTimeout,
            trimIdleSpanEndTimestamp: f = !0
        } = r,
        h = tT();
    if (!i || !rS()) {
        let e = new rE({
            traceId: h.getPropagationContext().traceId
        });
        return nB(e, h, tI()), e
    }
    let m = rh(),
        g = sz(e);

    function v() {
        t && (clearTimeout(t), t = void 0)
    }

    function _() {
        n && (clearTimeout(n), n = void 0)
    }

    function y(e) {
        v(), t = setTimeout(() => {
            !a && 0 === o.size && l && (s = "idleTimeout", g.end(e))
        }, c)
    }

    function b(e) {
        _(), n = setTimeout(() => {
            !a && l && (s = "heartbeatFailed", g.end(e))
        }, p)
    }

    function S(e) {
        a = !0, o.clear(), u.forEach(e => e()), n0(h, m);
        let t = n8(g),
            {
                start_timestamp: n
            } = t;
        if (!n) return;
        t.data[nc] || g.setAttribute(nc, s);
        let r = t.status;
        r && "unknown" !== r || g.setStatus({
            code: 1
        }), em.log(`[Tracing] Idle span "${t.op}" finished`);
        let i = rc(g).filter(e => e !== g),
            l = 0;
        i.forEach(t => {
            t.isRecording() && (t.setStatus({
                code: 2,
                message: "cancelled"
            }), t.end(e), el && em.log("[Tracing] Cancelling span since span ended early", JSON.stringify(t, void 0, 2)));
            let {
                timestamp: n = 0,
                start_timestamp: r = 0
            } = n8(t), i = r <= e, o = n - r <= (d + c) / 1e3;
            if (el) {
                let e = JSON.stringify(t, void 0, 2);
                i ? o || em.log("[Tracing] Discarding span since it finished after idle span final timeout", e) : em.log("[Tracing] Discarding span since it happened after idle span was finished", e)
            }(!o || !i) && (g[rs] && g[rs].delete(t), l++)
        }), l > 0 && g.setAttribute("sentry.idle_span_discarded_spans", l)
    }
    return n0(tT(), g), el && em.log("[Tracing] Started span is an idle span"), g.end = new Proxy(g.end, {
        apply(e, t, n) {
            if (i.emit("beforeIdleSpanEnd", g), rk(t)) return;
            let [r, ...o] = n, a = n4(r || ta()), s = rc(g).filter(e => e !== g), l = n8(g);
            if (!s.length || !f) return S(a), Reflect.apply(e, t, [a, ...o]);
            let u = i.getOptions().ignoreSpans,
                c = null == s ? void 0 : s.reduce((e, t) => {
                    let n = n8(t);
                    return !n.timestamp || u && i1({
                        description: n.description,
                        op: n.op,
                        attributes: n.data
                    }, u) ? e : e ? Math.max(e, n.timestamp) : n.timestamp
                }, void 0),
                p = l.start_timestamp,
                h = Math.min(p ? p + d / 1e3 : 1 / 0, Math.max(p || -1 / 0, Math.min(a, c || 1 / 0)));
            return S(h), Reflect.apply(e, t, [h, ...o])
        }
    }), u.push(i.on("spanStart", e => {
        var t;
        !(a || e === g || n7(e).end_timestamp || e instanceof sU && e.isStandaloneSpan()) && rc(g).includes(e) && (t = e.spanContext().spanId, v(), o.set(t, !0), b(ta() + p / 1e3))
    })), u.push(i.on("spanEnd", e => {
        if (!a) {
            var t;
            t = e.spanContext().spanId, o.has(t) && o.delete(t), 0 === o.size && (y(ta() + c / 1e3), _())
        }
    })), u.push(i.on("idleSpanEnableAutoFinish", e => {
        e === g && (l = !0, y(), o.size && b())
    })), r.disableAutoFinish || y(), setTimeout(() => {
        a || (g.setStatus({
            code: 2,
            message: "deadline_exceeded"
        }), s = "finalTimeout", g.end())
    }, d), g
}
let ln = "pageload",
    lr = "navigation",
    li = "browser.unload_event",
    lo = "browser.redirect",
    la = "browser.dom_content_loaded_event",
    ls = "browser.load_event",
    ll = "browser.connect",
    lu = "browser.tls_ssl",
    lc = "browser.cache",
    ld = "browser.dns",
    lp = "browser.request",
    lf = "browser.response",
    lh = "ui.render",
    lm = "ui.mount",
    lg = "ui.interaction.click",
    lv = "ui.action.click",
    l_ = "http.client",
    ly = "Pageload",
    lb = "Navigation",
    lS = "Component mount",
    lw = "Component render",
    lE = "Main UI thread blocked",
    lk = "Click",
    lT = "Largest contentful paint",
    lI = "Layout shift",
    lR = {
        [lc]: "Cache lookup",
        [ld]: "DNS lookup",
        [ll]: "Connect",
        [lu]: "TLS handshake",
        [lo]: "Redirect",
        [lp]: "Request",
        [lf]: "Response",
        [li]: "Unload event",
        [la]: "DOMContentLoaded event",
        [ls]: "Load event"
    },
    lx = !1;

function lC() {
    lx || (lx = !0, aW(e), aq(e));

    function e() {
        let e = rh(),
            t = e && rd(e);
        if (t) {
            let e = "internal_error";
            el && em.log(`[Tracing] Root span: ${e} -> Global error occurred`), t.setStatus({
                code: 2,
                message: e
            })
        }
    }
}
let lA = /Googlebot|Google-InspectionTool|Storebot-Google|Bingbot|Slurp|DuckDuckBot|Baiduspider|YandexBot|Facebot|facebookexternalhit|LinkedInBot|Twitterbot|Applebot/i;

function lM() {
    let e = ei.navigator;
    return !!(null == e ? void 0 : e.userAgent) && lA.test(e.userAgent)
}
var lP = e.i(906334);
let lN = -1,
    lO = e => {
        addEventListener("pageshow", t => {
            t.persisted && (lN = t.timeStamp, e(t))
        }, !0)
    },
    lD = (e, t, n, r) => {
        let i, o;
        return a => {
            let s;
            t.value >= 0 && (a || r) && ((o = t.value - (i ?? 0)) || void 0 === i) && (i = t.value, t.delta = o, s = t.value, t.rating = s > n[1] ? "poor" : s > n[0] ? "needs-improvement" : "good", e(t))
        }
    },
    lL = e => {
        requestAnimationFrame(() => requestAnimationFrame(() => e()))
    },
    l$ = () => {
        let e = performance.getEntriesByType("navigation")[0];
        if (e && e.responseStart > 0 && e.responseStart < performance.now()) return e
    },
    lF = () => {
        var e;
        return (null == (e = l$()) ? void 0 : e.activationStart) ?? 0
    },
    lU = -1,
    lB = new Set,
    lj = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
    lW = e => {
        if ("hidden" === document.visibilityState) {
            if ("visibilitychange" === e.type)
                for (let e of lB) e();
            isFinite(lU) || (lU = "visibilitychange" === e.type ? e.timeStamp : 0, removeEventListener("prerenderingchange", lW, !0))
        }
    },
    lH = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (e && (lU = 1 / 0), lU < 0) {
            var t;
            let e = lF();
            lU = (document.prerendering || null == (t = globalThis.performance.getEntriesByType("visibility-state").find(t => "hidden" === t.name && t.startTime >= e)) ? void 0 : t.startTime) ?? lj(), addEventListener("visibilitychange", lW, !0), addEventListener("prerenderingchange", lW, !0), lO(() => {
                setTimeout(() => {
                    lU = lj()
                })
            })
        }
        return {
            get firstHiddenTime() {
                return lU
            },
            onHidden(e) {
                lB.add(e)
            }
        }
    },
    lz = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            i = arguments.length > 4 ? arguments[4] : void 0,
            o = arguments.length > 5 ? arguments[5] : void 0,
            a = arguments.length > 6 ? arguments[6] : void 0,
            s = l$(),
            l = (null == s ? void 0 : s.navigationId) || 0,
            u = "navigate";
        return n ? u = n : lN >= 0 ? u = "back-forward-cache" : s && (document.prerendering || lF() > 0 ? u = "prerender" : document.wasDiscarded ? u = "restore" : s.type && (u = s.type.replace(/_/g, "-"))), {
            name: e,
            value: t,
            rating: "good",
            delta: 0,
            entries: [],
            id: `v6-${Date.now()}-${Math.floor(0x82f79cd8fff*Math.random())+1e12}`,
            navigationType: u,
            navigationId: r || l,
            navigationInteractionId: i,
            navigationURL: o || (null == s ? void 0 : s.name),
            navigationStartTime: a || 0
        }
    },
    lq = new WeakMap;

function lG(e, t) {
    let n = lq.get(t);
    return n || (n = new WeakMap, lq.set(t, n)), n.get(e) || n.set(e, new t), n.get(e)
}
class lV {
    h(e) {
        var t;
        if (e.hadRecentInput) return;
        let n = this.o[0],
            r = this.o.at(-1);
        this.i && n && r && e.startTime - r.startTime < 1e3 && e.startTime - n.startTime < 5e3 ? (this.i += e.value, this.o.push(e)) : (this.i = e.value, this.o = [e]), null == (t = this.t) || t.call(this, e)
    }
    constructor() {
        (0, lP._)(this, "t", void 0), (0, lP._)(this, "i", 0), (0, lP._)(this, "o", [])
    }
}
let lY = function(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
            let r = e.filter(e => PerformanceObserver.supportedEntryTypes.includes(e));
            if (r.length > 0) {
                let e = new PerformanceObserver(e => {
                    queueMicrotask(() => {
                        let n = e.getEntries();
                        r.length > 1 && n.sort((e, t) => e.startTime + e.duration - (t.startTime + t.duration)), t(n)
                    })
                });
                for (let t of r) e.observe({
                    type: t,
                    buffered: !0,
                    ...n
                });
                return e
            }
        } catch {}
    },
    lK = e => {
        var t, n, r, i;
        return (null == (n = globalThis.PerformanceObserver) || null == (t = n.supportedEntryTypes) ? void 0 : t.includes("soft-navigation")) && "function" == typeof(null == (i = globalThis.PerformanceSoftNavigation) || null == (r = i.prototype) ? void 0 : r.getLargestInteractionContentfulPaint) && e && e.reportSoftNavs
    },
    lJ = (e, t) => {
        if (e.set(t.navigationId, t), e.size > 2) {
            let t = e.keys().next().value;
            void 0 !== t && e.delete(t)
        }
    },
    lX = e => {
        let t = !1;
        return () => {
            t || (e(), t = !0)
        }
    };
class lQ {
    constructor() {
        (0, lP._)(this, "l", void 0)
    }
}
let lZ = e => {
        document.prerendering ? addEventListener("prerenderingchange", e, !0) : e()
    },
    l0 = [1800, 3e3],
    l1 = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = lK(t);
        lZ(() => {
            let r = lG(t, lQ),
                i = lH(),
                o, a = lz("FCP"),
                s = lY(["paint"], e => {
                    for (let t of e) "first-contentful-paint" === t.name && (s.disconnect(), t.startTime < i.firstHiddenTime && (a.value = Math.max(t.startTime - lF(), 0), a.entries.push(t), a.navigationId = t.navigationId || a.navigationId, o(!0)))
                });
            s && (o = lD(e, a, l0, t.reportAllChanges), lO(n => {
                o = lD(e, a = lz("FCP", -1, "back-forward-cache", a.navigationId, a.navigationInteractionId, a.navigationURL, lN), l0, t.reportAllChanges), lL(() => {
                    a.value = performance.now() - n.timeStamp, o(!0)
                })
            })), n && lY(["soft-navigation"], n => {
                n.forEach(n => {
                    r.l && n.navigationId && lJ(r.l, n), (o = lD(e, a = lz("FCP", Math.max((n.presentationTime || n.paintTime || 0) - n.startTime, 0), "soft-navigation", n.navigationId, n.interactionId, n.name, n.startTime), l0, t.reportAllChanges))(!0)
                })
            }, t)
        })
    },
    l2 = [.1, .25],
    l3 = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = lH();
        l1(lX(() => {
            let r, i = lz("CLS", 0),
                o = lG(t, lV),
                a = (n, a, s, l, u) => {
                    i = lz("CLS", 0, n, a, s, l, u), o.i = 0, r = lD(e, i, l2, t.reportAllChanges)
                },
                s = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    o.i > i.value && (i.value = o.i, i.entries = o.o), r(e)
                },
                l = e => {
                    s(!0), a("soft-navigation", e.navigationId, e.interactionId, e.name, e.startTime)
                },
                u = e => {
                    for (let t of e) "soft-navigation" !== t.entryType ? o.h(t) : l(t);
                    s()
                },
                c = ["layout-shift"];
            lK(t) && c.push("soft-navigation");
            let d = lY(c, u);
            d && (r = lD(e, i, l2, t.reportAllChanges), n.onHidden(() => {
                u(d.takeRecords()), r(!0)
            }), lO(() => {
                a("back-forward-cache", i.navigationId, i.navigationInteractionId, i.navigationURL, lN), lL(r)
            }), setTimeout(r))
        }))
    },
    l5 = 0,
    l4 = 1 / 0,
    l6 = 0,
    l8 = e => {
        for (let t of e) t.interactionId && (l4 = Math.min(l4, t.interactionId), l5 = (l6 = Math.max(l6, t.interactionId)) ? (l6 - l4) / 7 + 1 : 0)
    },
    l7 = () => h ? l5 : performance.interactionCount ?? 0;
class l9 {
    _() {
        return l7() - this.u
    }
    M() {
        this.u = l7(), this.v.length = 0, this.m.clear()
    }
    L(e) {
        let t = this._(),
            n = Math.min(this.v.length - 1, Math.floor(t / 50));
        return t && -1 === n && ("soft-navigation" === e || "back-forward-cache" === e) ? {
            P: 8,
            id: -1,
            entries: []
        } : this.v[n]
    }
    h(e) {
        var t, n;
        if (null == (t = this.p) || t.call(this, e), !e.interactionId) return;
        let r = this.v.at(-1),
            i = this.m.get(e.interactionId);
        if (i || this.v.length < 10 || e.duration > r.P) {
            if (i ? e.duration > i.P ? (i.entries = [e], i.P = e.duration) : e.duration === i.P && e.startTime === i.entries[0].startTime && i.entries.push(e) : (i = {
                    id: e.interactionId,
                    entries: [e],
                    P: e.duration
                }, this.m.set(i.id, i), this.v.push(i)), this.v.sort((e, t) => t.P - e.P), this.v.length > 10)
                for (let e of this.v.splice(10)) this.m.delete(e.id);
            null == (n = this.T) || n.call(this, i)
        }
    }
    constructor() {
        (0, lP._)(this, "u", 0), (0, lP._)(this, "v", []), (0, lP._)(this, "m", new Map), (0, lP._)(this, "p", void 0), (0, lP._)(this, "T", void 0)
    }
}
let ue = e => {
        let t = 1e3 * ("requestIdleCallback" in globalThis),
            n = globalThis.requestIdleCallback || setTimeout,
            r = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) e();
        else {
            let i = lX(e),
                o = -1,
                a = () => {
                    r(o), i()
                };
            addEventListener("visibilitychange", a, {
                once: !0,
                capture: !0
            }), o = n(() => {
                removeEventListener("visibilitychange", a, {
                    capture: !0
                }), i()
            }, {
                timeout: t
            })
        }
    },
    ut = [200, 500],
    un = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
        let n = lH();
        lZ(() => {
            "interactionCount" in performance || h || (h = lY(["event"], l8, {
                durationThreshold: 0
            }));
            let r, i = lz("INP"),
                o = lG(t, l9),
                a = (n, a, s, l, u) => {
                    o.M(), r = lD(e, i = lz("INP", -1, n, a, s, l, u), ut, t.reportAllChanges)
                },
                s = () => {
                    let e = o.L(i.navigationType);
                    e && e.P !== i.value && (i.value = e.P, i.entries = e.entries, r())
                },
                l = e => {
                    s(), r(!0), a("soft-navigation", e.navigationId, e.interactionId, e.name, e.startTime)
                },
                u = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    ue(() => {
                        for (let t of e) "soft-navigation" !== t.entryType ? o.h(t) : l(t);
                        s(), t && r(!0)
                    })
                },
                c = ["event", "first-input"];
            lK(t) && c.push("soft-navigation");
            let d = lY(c, u, { ...t,
                durationThreshold: t.durationThreshold ?? 40
            });
            r = lD(e, i, ut, t.reportAllChanges), d && (n.onHidden(() => {
                u(d.takeRecords(), !0)
            }), lO(() => {
                a("back-forward-cache", i.navigationId, i.navigationInteractionId, i.navigationURL, lN)
            }))
        })
    };
class ur {
    h(e) {
        var t;
        null == (t = this.p) || t.call(this, e)
    }
    constructor() {
        (0, lP._)(this, "p", void 0), (0, lP._)(this, "l", void 0)
    }
}
let ui = [2500, 4e3],
    uo = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = !1,
            r = lK(t);
        lZ(() => {
            let i, o = lH(),
                a = lz("LCP"),
                s = lG(t, ur),
                l = (r, s, l, u, c) => {
                    i = lD(e, a = lz("LCP", -1, r, s, l, u, c), ui, t.reportAllChanges), n = !1, "soft-navigation" === r && (o = lH(!0))
                },
                u = e => {
                    var t;
                    s.l && e.navigationId && lJ(s.l, e), n || i(!0), l("soft-navigation", e.navigationId, e.interactionId, e.name, e.startTime);
                    let r = null == (t = e.getLargestInteractionContentfulPaint) ? void 0 : t.call(e);
                    r && c([r])
                },
                c = e => {
                    for (let l of (t.reportAllChanges || r || (e = e.slice(-1)), e)) {
                        if (!l) continue;
                        if ("soft-navigation" === l.entryType) {
                            u(l);
                            continue
                        }
                        let e = 0,
                            t = [],
                            r = l.startTime;
                        if ("largest-contentful-paint" === l.entryType) e = Math.max(l.startTime - lF(), 0), s.h(l), t = [l];
                        else if ("interaction-contentful-paint" === l.entryType) {
                            var n;
                            if (!a.navigationId || "interactionId" in l && l.interactionId != a.navigationInteractionId) continue;
                            e = Math.max((r = (null == (n = l.largestContentfulPaint) ? void 0 : n.renderTime) || 0) - l.startTime, 0), l.largestContentfulPaint && (s.h(l.largestContentfulPaint), t = [l.largestContentfulPaint])
                        }
                        r < o.firstHiddenTime && (a.value = e, a.entries = t, i())
                    }
                },
                d = ["largest-contentful-paint"];
            r && d.push("interaction-contentful-paint", "soft-navigation");
            let p = lY(d, c);
            if (p) {
                i = lD(e, a, ui, t.reportAllChanges);
                let o = ["keydown", "click", "visibilitychange"],
                    s = e => {
                        if (e.isTrusted && !n) {
                            let e = a.id;
                            ue(() => {
                                if (!n) {
                                    if (!r)
                                        for (let e of (p.disconnect(), o)) removeEventListener(e, s, {
                                            capture: !0
                                        });
                                    e === a.id && (n = !0, i(!0))
                                }
                            })
                        }
                    };
                for (let e of o) addEventListener(e, s, {
                    capture: !0
                });
                lO(r => {
                    l("back-forward-cache", a.navigationId, a.navigationInteractionId, a.navigationURL, lN), i = lD(e, a, ui, t.reportAllChanges), lL(() => {
                        a.value = performance.now() - r.timeStamp, n = !0, i(!0)
                    })
                })
            }
        })
    },
    ua = [800, 1800],
    us = e => {
        document.prerendering ? lZ(() => us(e)) : "complete" !== document.readyState ? addEventListener("load", () => us(e), !0) : setTimeout(e)
    },
    ul = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = lK(t),
            r = lz("TTFB"),
            i = lD(e, r, ua, t.reportAllChanges);
        us(() => {
            let o = l$();
            if (o) {
                let a = o.responseStart;
                r.value = Math.max(a - lF(), 0), r.entries = [o], i(!0), lO(() => {
                    (i = lD(e, r = lz("TTFB", 0, "back-forward-cache", r.navigationId, r.navigationInteractionId, r.navigationURL, lN), ua, t.reportAllChanges))(!0)
                }), n && lY(["soft-navigation"], n => {
                    n.forEach(n => {
                        n.navigationId && ((r = lz("TTFB", 0, "soft-navigation", n.navigationId, n.interactionId, n.name, n.startTime)).entries = [n], (i = lD(e, r, ua, t.reportAllChanges))(!0))
                    })
                }, t)
            }
        })
    },
    uu = {},
    uc = {},
    ud = {},
    up = !1,
    uf = !1;

function uh(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return uT("cls", e, ub, m, t)
}

function um(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return uT("lcp", e, uS, g, t)
}

function ug(e) {
    return uT("inp", e, uk, _)
}

function uv(e, t) {
    return uI(e, t), uc[e] || (function(e) {
        let t = {
            type: e,
            buffered: !0
        };
        "event" === e && (t.durationThreshold = 0);
        try {
            PerformanceObserver.supportedEntryTypes.includes(e) && new PerformanceObserver(t => {
                Promise.resolve().then(() => {
                    u_(e, {
                        entries: t.getEntries()
                    })
                })
            }).observe(t)
        } catch {}
    }(e), uc[e] = !0), uR(e, t)
}

function u_(e, t) {
    let n = uu[e];
    if (null == n ? void 0 : n.length)
        for (let r of n) try {
            r(t)
        } catch (t) {
            oD && em.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${eY(r)}
Error:`, t)
        }
}

function uy(e) {
    return t => {
        (uf || "back-forward-cache" !== t.navigationType) && e(t)
    }
}

function ub() {
    return l3(uy(e => {
        u_("cls", {
            metric: e
        }), m = e
    }), {
        reportAllChanges: !up && !uf,
        reportSoftNavs: up
    })
}

function uS() {
    return uo(uy(e => {
        u_("lcp", {
            metric: e
        }), g = e
    }), {
        reportAllChanges: !up && !uf,
        reportSoftNavs: up
    })
}

function uw() {
    return ul(uy(e => {
        u_("ttfb", {
            metric: e
        }), v = e
    }))
}

function uE() {
    return l1(uy(e => {
        u_("fcp", {
            metric: e
        }), y = e
    }))
}

function uk() {
    return un(uy(e => {
        u_("inp", {
            metric: e
        }), _ = e
    }), {
        reportSoftNavs: up
    })
}

function uT(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    return uI(e, t), uc[e] || (uc[e] = !0, Promise.resolve().then(() => {
        ud[e] = n()
    })), r && t({
        metric: r
    }), uR(e, t, i)
}

function uI(e, t) {
    uu[e] = uu[e] || [], uu[e].push(t)
}

function uR(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return () => {
        if (n) {
            var r;
            null == (r = ud[e]) || r.call(ud)
        }
        let i = uu[e];
        if (!i) return;
        let o = i.indexOf(t); - 1 !== o && i.splice(o, 1)
    }
}

function ux(e) {
    return "duration" in e
}

function uC(e) {
    return "number" == typeof e && isFinite(e)
}

function uA(e, t, n, r) {
    let { ...i
    } = r, o = n8(e).start_timestamp;
    return o && o > t && "function" == typeof e.updateStartTime && e.updateStartTime(t), sG(e, () => {
        let e = s9({
            startTime: t,
            ...i
        });
        return e && e.end(n), e
    })
}

function uM() {
    return ei.addEventListener && ei.performance
}

function uP(e) {
    return e / 1e3
}

function uN(e) {
    try {
        return PerformanceObserver.supportedEntryTypes.includes(e)
    } catch {
        return !1
    }
}

function uO(e) {
    let t = {};
    if (void 0 != e.nextHopProtocol) {
        let {
            name: n,
            version: r
        } = function(e) {
            let t = "unknown",
                n = "unknown",
                r = "";
            for (let i of e) {
                if ("/" === i) {
                    [t, n] = e.split("/");
                    break
                }
                if (!isNaN(Number(i))) {
                    t = "h" === r ? "http" : r, n = e.split(r)[1];
                    break
                }
                r += i
            }
            return r === e && (t = r), {
                name: t,
                version: n
            }
        }(e.nextHopProtocol);
        t["network.protocol.version"] = r, t["network.protocol.name"] = n
    }
    if (void 0 === to(e.startTime)) return t;
    let n = t => t ? to(t, e.startTime) : t;
    return Object.fromEntries(Object.entries({ ...t,
        "http.request.redirect_start": n(e.redirectStart),
        "http.request.redirect_end": n(e.redirectEnd),
        "http.request.worker_start": n(e.workerStart),
        "http.request.fetch_start": n(e.fetchStart),
        "http.request.domain_lookup_start": n(e.domainLookupStart),
        "http.request.domain_lookup_end": n(e.domainLookupEnd),
        "http.request.connect_start": n(e.connectStart),
        "http.request.secure_connection_start": n(e.secureConnectionStart),
        "http.request.connection_end": n(e.connectEnd),
        "http.request.request_start": n(e.requestStart),
        "http.request.response_start": n(e.responseStart),
        "http.request.response_end": n(e.responseEnd),
        "http.request.time_to_first_byte": null != e.responseStart ? uP(e.responseStart) : void 0
    }).filter(e => {
        let [, t] = e;
        return null != t
    }))
}
let uD = 0;

function uL(e, t) {
    return to(t, e.startTime)
}
let u$ = {
    secureConnection: lu,
    fetch: lc,
    domainLookup: ld,
    unloadEvent: li,
    redirect: lo,
    connect: ll,
    domContentLoadedEvent: la,
    loadEvent: ls
};

function uF(e, t, n, r) {
    var i;
    let o = t["secureConnection" === (i = n) ? "connectEnd" : "fetch" === i ? "domainLookupStart" : `${i}End`],
        a = t[`${n}Start`];
    if (!a || !o) return;
    let s = u$[n],
        l = ok(t.name);
    uA(e, uL(t, a), uL(t, o), {
        name: r ? lR[s] : l,
        attributes: {
            [nd]: s,
            [np]: "auto.ui.browser.metrics",
            [nb]: l,
            ..."redirect" === n && null != t.redirectCount ? {
                "http.redirect_count": t.redirectCount
            } : {}
        }
    })
}
let uU = [],
    uB = new Map,
    uj = "<unknown>",
    uW = new Map,
    uH = {
        click: "click",
        pointerdown: "click",
        pointerup: "click",
        mousedown: "click",
        mouseup: "click",
        touchstart: "click",
        touchend: "click",
        mouseover: "hover",
        mouseout: "hover",
        mouseenter: "hover",
        mouseleave: "hover",
        pointerover: "hover",
        pointerout: "hover",
        pointerenter: "hover",
        pointerleave: "hover",
        dragstart: "drag",
        dragend: "drag",
        drag: "drag",
        dragenter: "drag",
        dragleave: "drag",
        dragover: "drag",
        drop: "drag",
        keydown: "press",
        keyup: "press",
        keypress: "press",
        input: "press"
    },
    uz = new og(5),
    uq = new og(5),
    uG = !1;

function uV(e, t) {
    return 5 >= Math.abs(e - t)
}

function uY() {
    try {
        var e, t;
        return PerformanceObserver.supportedEntryTypes.includes("soft-navigation") && "function" == typeof(null == (t = ei.PerformanceSoftNavigation) || null == (e = t.prototype) ? void 0 : e.getLargestInteractionContentfulPaint)
    } catch {
        return !1
    }
}

function uK(e) {
    return null != e && e > 0 && e <= 6e4
}
let uJ = {};

function uX() {
    E = void 0, k = void 0, T = void 0, uJ = {}
}

function uQ(e) {
    var t, n;
    let r, i, {
            name: o,
            op: a,
            origin: s,
            metricName: l,
            value: u,
            attributes: c,
            parentSpan: d,
            startTime: p,
            endTime: f,
            standalone: h,
            softNavigationId: m,
            navigationType: g
        } = e,
        v = d && rd(d),
        _ = v ? n7(v).name : tT().getScopeData().transactionName,
        y = {
            [np]: s,
            [nd]: a,
            [nu]: 0,
            [`browser.web_vital.${l}.value`]: u,
            "sentry.transaction": _,
            [nh]: _,
            [nk]: null == (t = ei.navigator) ? void 0 : t.userAgent,
            ...c
        };
    d && "pageload" === n7(d).attributes[nd] && (y["sentry.pageload.span_id"] = d.spanContext().spanId), null != m && (y[t8] = m), g && (y[t7] = g), h && Object.assign(y, (i = null == (r = null == (n = tA()) ? void 0 : n.getIntegrationByName("Replay")) ? void 0 : r.getReplayId(!0)) ? {
        "sentry.replay_id": i,
        "sentry._internal.replay_is_buffering": "buffer" === r.getRecordingMode() || void 0
    } : {});
    let b = s9({
        name: o,
        attributes: y,
        startTime: p,
        parentSpan: d,
        experimental: h ? {
            standalone: !0
        } : void 0
    });
    b && b.end(f ?? p)
}

function uZ(e, t) {
    let n, r = !1;

    function i() {
        !r && n && t(n), r = !0
    }
    ax("visibilitychange", e => {
        var t;
        (null == (t = ei.document) ? void 0 : t.visibilityState) === "hidden" && (() => {
            i()
        })()
    }, {
        capture: !0
    });
    let o = e.on("beforeStartNavigationSpan", (e, t) => {
            (null == t ? void 0 : t.isRedirect) || (i(), o(), a())
        }),
        a = e.on("afterStartPageLoadSpan", e => {
            n = e, a()
        })
}
let u0 = {
        click: lg,
        hover: "ui.interaction.hover",
        drag: "ui.interaction.drag",
        press: "ui.interaction.press"
    },
    u1 = {
        click: lk,
        hover: "Hover",
        drag: "Drag",
        press: "Key press"
    };

function u2(e, t, n) {
    let r, i;
    e.on("afterStartPageLoadSpan", e => {
        r = e
    }), e.on("spanStart", e => {
        let t = n7(e).attributes;
        (null == t ? void 0 : t[nd]) === lr && "back-forward-cache" === t[t7] && (i = e)
    }), t(e => {
        let {
            metric: t
        } = e, o = function(e) {
            if ("soft-navigation" !== e.navigationType) return;
            let t = uq.get(e.navigationId);
            return t || (null != e.navigationInteractionId ? uz.get(e.navigationInteractionId) : void 0)
        }(t);
        "soft-navigation" === t.navigationType ? o ? n(t, o, t.navigationId) : oD && em.log(`[SoftNav] Dropping ${t.name} for uncorrelated soft navigation ${t.navigationId}`) : "back-forward-cache" === t.navigationType ? n(t, i, void 0) : n(t, r, void 0)
    })
}

function u3(e, t, n, r, i, o) {
    if (!uK(e)) return;
    oD && em.log(`Sending LCP span (${e})`);
    let a = o || 0,
        s = to(a) ?? uP(a),
        l = t ? to(t.startTime, a) ?? uP(t.startTime) : s + uP(e),
        u = t ? ay(t.element) : void 0,
        c = (null == t ? void 0 : t.element) ? ab(t.element) : null,
        d = tA(),
        p = d && iq(d) ? c || lT : u ?? lT,
        f = {};
    u && (f["browser.web_vital.lcp.element"] = u), c && (f[nv] = c), (null == t ? void 0 : t.id) && (f["browser.web_vital.lcp.id"] = t.id), (null == t ? void 0 : t.url) && (f["browser.web_vital.lcp.url"] = ok(t.url, d)), (null == t ? void 0 : t.loadTime) != null && (f["browser.web_vital.lcp.load_time"] = t.loadTime), (null == t ? void 0 : t.renderTime) != null && (f["browser.web_vital.lcp.render_time"] = t.renderTime), (null == t ? void 0 : t.size) != null && (f["browser.web_vital.lcp.size"] = t.size), uQ({
        name: p,
        op: "ui.webvital.lcp",
        origin: "auto.http.browser.lcp",
        metricName: "lcp",
        value: e,
        attributes: f,
        parentSpan: n,
        startTime: s,
        endTime: l,
        softNavigationId: r,
        navigationType: i
    })
}

function u5(e, t, n, r, i, o) {
    var a;
    oD && em.log(`Sending CLS span (${e})`);
    let s = to((null == t ? void 0 : t.startTime) ?? o ?? 0) ?? ta(),
        l = null == t || null == (a = t.sources[0]) ? void 0 : a.node,
        u = t ? ay(l) : void 0,
        c = l ? ab(l) : null,
        d = tA(),
        p = d && iq(d) ? c || lI : u ?? lI,
        f = {};
    c && (f[nv] = c), (null == t ? void 0 : t.sources) && t.sources.forEach((e, t) => {
        f[`browser.web_vital.cls.source.${t+1}`] = ay(e.node)
    }), uQ({
        name: p,
        op: "ui.webvital.cls",
        origin: "auto.http.browser.cls",
        metricName: "cls",
        value: e,
        attributes: f,
        parentSpan: n,
        startTime: s,
        softNavigationId: r,
        navigationType: i
    })
}

function u4(e) {
    return null != e.value && 60 >= uP(e.value)
}

function u6(e) {
    return e.entries.find(t => t.duration === e.value && uH[t.name])
}

function u8(e, t) {
    var n;
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0,
        o = arguments.length > 4 ? arguments[4] : void 0,
        a = arguments.length > 5 ? arguments[5] : void 0;
    oD && em.log(`Sending INP span (${e})`);
    let s = to((null == t ? void 0 : t.startTime) ?? (null == a ? void 0 : a.navigationStartTime) ?? 0);
    if (!s) return;
    let l = uP(e),
        u = t && uH[t.name],
        c = u || "click",
        d = t && (null != (n = t.interactionId) ? uB.get(n) : void 0),
        p = rh(),
        f = p ? rd(p) : void 0,
        h = i || (null == d ? void 0 : d.span) || f,
        m = (null == d ? void 0 : d.elementName) || (t ? ay(t.target) : void 0),
        g = (null == t ? void 0 : t.target) ? ab(t.target) : null,
        v = tA(),
        _ = !!v && iq(v),
        y = u1[c],
        b = _ ? g || y : m ?? "Interaction to next paint",
        S = {
            [nu]: (null == t ? void 0 : t.duration) ?? e
        };
    m && m !== uj && (S[t9] = m), u && (S["browser.web_vital.inp.interaction_type"] = u), g && (S[nv] = g), uQ({
        name: b,
        op: u0[c],
        origin: "auto.http.browser.inp",
        metricName: "inp",
        value: e,
        attributes: S,
        startTime: s,
        endTime: s + l,
        navigationType: null == a ? void 0 : a.navigationType,
        parentSpan: h,
        standalone: r,
        softNavigationId: o
    })
}
let u7 = "WebVitals",
    u9 = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            {
                ignore: t = [],
                softNavigations: n = !0,
                bfcacheNavigations: r = !0
            } = e,
            i = new Set(t);
        return {
            name: u7,
            setup(e) {
                let t = iq(e),
                    o = n && t && uY(),
                    a = r && t,
                    s = o || a;
                o && (up = !0, function(e) {
                    if (uG || !uY()) return;
                    uG = !0;
                    let t = e => {
                        e.isTrusted && (w = e.timeStamp)
                    };
                    ei.addEventListener("click", t, {
                        capture: !0,
                        passive: !0
                    }), ei.addEventListener("keydown", t, {
                        capture: !0,
                        passive: !0
                    }), e.on("spanStart", e => {
                        var t;
                        if ((null == (t = n7(e).attributes) ? void 0 : t[nd]) !== "navigation") return;
                        b = void 0;
                        let n = w;
                        if (null != n) {
                            if ((null == S ? void 0 : S.interactionTimestamp) === n) {
                                uz.set(S.interactionId, e), S = void 0;
                                return
                            }
                            b = {
                                span: e,
                                interactionTimestamp: n
                            }
                        }
                    });
                    let n = e => {
                        let {
                            entries: t
                        } = e;
                        for (let e of t) {
                            if (!ux(e) || !e.interactionId) continue;
                            let t = b;
                            if (t && uV(e.startTime, t.interactionTimestamp)) {
                                uz.set(e.interactionId, t.span), b = void 0;
                                continue
                            }!uz.get(e.interactionId) && null != w && uV(e.startTime, w) && (S = {
                                interactionId: e.interactionId,
                                interactionTimestamp: w
                            })
                        }
                    };
                    uv("event", n), uv("first-input", n), uv("soft-navigation", e => {
                        let {
                            entries: t
                        } = e;
                        for (let e of t) {
                            let t = uz.get(e.interactionId);
                            if (!t) {
                                oD && em.log(`[SoftNav] No navigation span found for soft navigation ${e.navigationId}`, e);
                                continue
                            }
                            uq.set(e.navigationId, t), t.setAttribute(t8, e.navigationId)
                        }
                    })
                }(e)), a && (uf = !0);
                let l = !t && !i.has("cls"),
                    u = !t && !i.has("lcp"),
                    c = function(e) {
                        let {
                            trackCls: t,
                            trackLcp: n
                        } = e;
                        if (uM() && ts()) {
                            let e = n ? um(e => {
                                    let {
                                        metric: t
                                    } = e, n = t.entries[t.entries.length - 1];
                                    n && uK(t.value) && (uJ.lcp = {
                                        value: t.value,
                                        unit: "millisecond"
                                    }, E = n)
                                }, !0) : void 0,
                                r = t ? uh(e => {
                                    let {
                                        metric: t
                                    } = e, n = t.entries[t.entries.length - 1];
                                    n && (uJ.cls = {
                                        value: t.value,
                                        unit: ""
                                    }, k = n)
                                }, !0) : void 0,
                                i = uT("ttfb", e => {
                                    let {
                                        metric: t
                                    } = e;
                                    T = t.navigationType, t.entries[t.entries.length - 1] && (uJ.ttfb = {
                                        value: t.value,
                                        unit: "millisecond"
                                    })
                                }, uw, v),
                                o = uT("fcp", e => {
                                    let {
                                        metric: t
                                    } = e;
                                    T = t.navigationType, uJ.fcp = {
                                        value: t.value,
                                        unit: "millisecond"
                                    }
                                }, uE, y),
                                a = uv("paint", e => {
                                    let {
                                        entries: t
                                    } = e, n = (() => {
                                        if (ei.document && aP < 0) {
                                            var e, t, n;
                                            let r = aM();
                                            aP = (ei.document.prerendering || null == (e = globalThis.performance.getEntriesByType("visibility-state").filter(e => "hidden" === e.name && e.startTime > r)[0]) ? void 0 : e.startTime) ?? ((null == (t = ei.document) ? void 0 : t.visibilityState) !== "hidden" || (null == (n = ei.document) ? void 0 : n.prerendering) ? 1 / 0 : 0), ax("visibilitychange", aO, !0), ax("prerenderingchange", aO, !0)
                                        }
                                        return {
                                            get firstHiddenTime() {
                                                return aP
                                            },
                                            onHidden(e) {
                                                aN.add(e)
                                            }
                                        }
                                    })();
                                    for (let e of t) "first-paint" === e.name && e.startTime < n.firstHiddenTime && (uJ.fp = {
                                        value: e.startTime,
                                        unit: "millisecond"
                                    })
                                });
                            return () => {
                                i(), o(), a(), null == e || e(), null == r || r()
                            }
                        }
                        return () => void 0
                    }({
                        trackCls: l,
                        trackLcp: u,
                        client: e
                    }),
                    d = new WeakSet;
                e.on("afterStartPageLoadSpan", e => {
                    d.add(e)
                }), e.on("spanEnd", e => {
                    d.delete(e) && (c(), function(e, t) {
                        var n, r, i;
                        let o = ts();
                        if (!(null == (n = uM()) ? void 0 : n.getEntries) || !o) return uX();
                        let {
                            spanStreamingEnabled: a,
                            recordClsOnPageloadSpan: s,
                            recordLcpOnPageloadSpan: l
                        } = t, u = uP(o);
                        if ("pageload" === n7(e).attributes[nd]) {
                            let n;
                            if (function(e) {
                                    let t = aA(!1);
                                    if (!t) return;
                                    let {
                                        responseStart: n,
                                        requestStart: r
                                    } = t;
                                    r <= n && (e["ttfb.requestTime"] = {
                                        value: n - r,
                                        unit: "millisecond"
                                    })
                                }(uJ), (n = uJ.fp) && (n.value = Math.max(n.value - aM(), 0)), a) {
                                let t = (t, n, r) => {
                                    let i = r ?? `browser.web_vital.${t}.value`;
                                    e.setAttribute(i, n), oD && em.log("Setting web vital attribute", {
                                        [i]: n
                                    }, "on pageload span")
                                };
                                ["ttfb", "fp", "fcp"].forEach(e => {
                                    uJ[e] && t(e, uJ[e].value)
                                }), uJ["ttfb.requestTime"] && t("ttfb.requestTime", uJ["ttfb.requestTime"].value, "browser.web_vital.ttfb.request_time")
                            } else {
                                s || delete uJ.cls, l || delete uJ.lcp, Object.entries(uJ).forEach(t => {
                                    let [n, r] = t;
                                    sL(n, r.value, r.unit, e)
                                }), r = e, i = t, E && i.recordLcpOnPageloadSpan && (E.element && r.setAttribute("lcp.element", ay(E.element)), E.id && r.setAttribute("lcp.id", E.id), E.url && r.setAttribute("lcp.url", ok(E.url.trim()).slice(0, 200)), null != E.loadTime && r.setAttribute("lcp.loadTime", E.loadTime), null != E.renderTime && r.setAttribute("lcp.renderTime", E.renderTime), r.setAttribute("lcp.size", E.size)), (null == k ? void 0 : k.sources) && i.recordClsOnPageloadSpan && k.sources.forEach((e, t) => r.setAttribute(`cls.source.${t+1}`, ay(e.node)))
                            }
                            T && e.setAttribute(t7, T), e.setAttribute(a ? "browser.performance.time_origin" : "performance.timeOrigin", u), e.setAttribute(a ? "browser.performance.navigation.activation_start" : "performance.activationStart", aM())
                        }
                        uX()
                    }(e, {
                        recordClsOnPageloadSpan: l,
                        recordLcpOnPageloadSpan: u,
                        spanStreamingEnabled: t
                    }))
                }), t && (i.has("lcp") || function(e) {
                    let t, n, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (!uN("largest-contentful-paint")) return;
                    if (r) return u2(e, um, (e, t, n) => {
                        let r = e.entries[e.entries.length - 1];
                        u3(e.value, r, t, n, e.navigationType, e.navigationStartTime)
                    });
                    let i = 0,
                        o = um(e => {
                            let {
                                metric: r
                            } = e;
                            n = r.navigationType;
                            let o = r.entries[r.entries.length - 1];
                            o && uK(r.value) && (i = r.value, t = o)
                        }, !0);
                    uZ(e, e => {
                        u3(i, t, e, void 0, n), o()
                    })
                }(e, s), i.has("cls") || function(e) {
                    let t, n, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (!uN("layout-shift")) return;
                    if (r) return u2(e, uh, (e, t, n) => {
                        let r = e.entries[e.entries.length - 1];
                        u5(e.value, r, t, n, e.navigationType, e.navigationStartTime)
                    });
                    let i = 0,
                        o = uh(e => {
                            let {
                                metric: r
                            } = e;
                            n = r.navigationType;
                            let o = r.entries[r.entries.length - 1];
                            o && (i = r.value, t = o)
                        }, !0);
                    uZ(e, e => {
                        u5(i, t, e, void 0, n), o()
                    })
                }(e, s)), i.has("inp") || function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (!uM() || !ts()) return;
                    let n = !iq(e);
                    t ? u2(e, ug, (e, t, r) => {
                        u4(e) && u8(e.value, u6(e), n, t, r, e)
                    }) : ug(e => {
                        let {
                            metric: t
                        } = e;
                        u4(t) && u8(t.value, u6(t), n, void 0, void 0, t)
                    })
                }(e, s)
            },
            afterAllSetup() {
                i.has("inp") || function() {
                    let e = Object.keys(uH);

                    function t(e) {
                        let t = e.target;
                        if (!t) return;
                        let n = ay(t),
                            r = Math.round(e.timeStamp);
                        if (n && n !== uj && !uW.has(r) && (uW.set(r, n), uW.size > 50)) {
                            let e = uW.keys().next().value;
                            void 0 !== e && uW.delete(e)
                        }
                    }
                    ix() && e.forEach(e => {
                        ei.addEventListener(e, t, {
                            capture: !0,
                            passive: !0
                        })
                    });
                    let n = e => {
                        let {
                            entries: t
                        } = e, n = rh(), r = n && rd(n);
                        t.forEach(e => {
                            if (!ux(e)) return;
                            let t = e.interactionId;
                            if (null == t || uB.has(t)) return;
                            let n = e.target ? ay(e.target) : function(e) {
                                let t = Math.round(e.startTime),
                                    n = uW.get(t);
                                if (!n)
                                    for (let e = -5; e <= 5; e++) {
                                        let r = uW.get(t + e);
                                        if (r) {
                                            n = r;
                                            break
                                        }
                                    }
                                return n || uj
                            }(e);
                            if (uU.length > 10) {
                                let e = uU.shift();
                                uB.delete(e)
                            }
                            uU.push(t), uB.set(t, {
                                span: r,
                                elementName: n
                            })
                        })
                    };
                    uv("event", n), uv("first-input", n)
                }()
            }
        }
    },
    ce = "sentry_previous_trace";

function ct(e) {
    return 1 === e.traceFlags
}

function cn() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.client || tA();
    if (!rX() || !t) return {};
    let n = tE(eo());
    if (n.getTraceData) return n.getTraceData(e);
    let r = e.scope || tT(),
        i = e.span || rh(),
        o = rk(i) && !rS(t.getOptions());
    if (!i && void 0 !== ea(eo()).externalPropagationContextProvider) return {};
    let a = i && !o ? n2(i) : function(e) {
            let {
                traceId: t,
                sampled: n,
                propagationSpanId: r
            } = e.getPropagationContext();
            return nX(t, r, n)
        }(r),
        s = nz(i ? rx(i) : rR(t, r));
    if (!nY.test(a)) return em.warn("Invalid sentry-trace data. Cannot generate trace data"), {};
    let l = {
        "sentry-trace": a,
        baggage: s
    };
    return e.propagateTraceparent && (l.traceparent = i && !o ? function(e) {
        let {
            traceId: t,
            spanId: n
        } = e.spanContext();
        return nQ(t, n, rr(e))
    }(i) : function(e) {
        let {
            traceId: t,
            sampled: n,
            propagationSpanId: r
        } = e.getPropagationContext();
        return nQ(t, r, n)
    }(r)), l
}

function cr(e) {
    return "string" == typeof e && e.split(",").some(e => e.trim().startsWith(nW))
}

function ci(e, t, n, r, i, o) {
    let a = {
        [nb]: ok(oO(e), i),
        type: "fetch",
        [ni]: n,
        [np]: r,
        [nd]: l_,
        [n_]: o
    };
    return t && (oI(t) || (a[nb] = ok(oO(t.href), i), a[ng] = t.hostname, a["server.port"] = t.port ? Number(t.port) : void 0), a[nw] = oT(oC(t.search), i), a[ny] = oA(t.hash)), a
}
let co = new WeakMap;

function ca(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = e.toLowerCase();
    for (let i of t)
        if (ew(i)) {
            let e = i.toLowerCase();
            if (n ? r === e : r.includes(e)) return !0
        } else if (ex(i) && (function(e) {
            let t = `${e.flags.replace(/[gy]/g,"")}${e.ignoreCase?"":"i"}`;
            if (t === e.flags) return e;
            let n = co.get(e);
            if (n) return n;
            let r = new RegExp(e.source, t);
            return co.set(e, r), r
        })(i).test(e)) return !0;
    return !1
}
let cs = Symbol.for("sentry__originalRequestBody");

function cl(e) {
    return new URLSearchParams(e).toString()
}

function cu(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em;
    try {
        if ("string" == typeof e) return [e];
        if (e instanceof URLSearchParams) return [e.toString()];
        if (e instanceof FormData) return [cl(e)];
        if (!e) return [void 0]
    } catch (n) {
        return oD && t.error(n, "Failed to serialize body", e), [void 0, "BODY_PARSE_ERROR"]
    }
    return oD && t.log("Skipping network body because of body type", e), [void 0, "UNPARSEABLE_BODY_TYPE"]
}

function cc() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    if (e.length >= 2 && e[1] && "object" == typeof e[1] && "body" in e[1]) return e[1].body;
    if (e.length >= 1 && e[0] instanceof Request) {
        let t = e[0][cs];
        if (void 0 !== t) return t
    }
}

function cd(e) {
    let t;
    try {
        t = e.getAllResponseHeaders()
    } catch (t) {
        return oD && em.error(t, "Failed to get xhr response headers", e), {}
    }
    return t ? t.split("\r\n").reduce((e, t) => {
        let [n, r] = t.split(": ");
        return r && (e[n.toLowerCase()] = r), e
    }, {}) : {}
}

function cp(e) {
    try {
        return new URL(e, ei.location.origin).href
    } catch {
        return
    }
}

function cf(e) {
    try {
        return new Headers(e)
    } catch {
        return
    }
}
let ch = {
    traceFetch: !0,
    traceXHR: !0,
    enableHTTPTimings: !0
};

function cm(e, t) {
    let {
        traceFetch: n,
        traceXHR: r,
        shouldCreateSpanForRequest: i,
        enableHTTPTimings: o,
        tracePropagationTargets: a,
        onRequestSpanStart: s,
        onRequestSpanEnd: l
    } = { ...ch,
        ...t
    }, u = "function" == typeof i ? i : e => !0, c = e => (function(e, t) {
        let n = oL();
        if (n) {
            let r, i;
            try {
                r = new URL(e, n), i = new URL(n).origin
            } catch {
                return !1
            }
            let o = r.origin === i;
            return t ? ca(r.toString(), t) || o && ca(r.pathname, t) : o
        } {
            let n = !!e.match(/^\/(?!\/)/);
            return t ? ca(e, t) : n
        }
    })(e, a), d = {}, p = e.getOptions().propagateTraceparent;
    n && at(t => {
        var n, r;
        let i = function(e, t, n, r, i) {
            if (!e.fetchData) return;
            let {
                method: o,
                url: a
            } = e.fetchData, s = rS() && t(a);
            if (e.endTimestamp) {
                var l, u, c, d, p;
                let t = e.fetchData.__span;
                if (!t) return;
                let n = r[t];
                n && (s && (function(e, t) {
                    if (t.response) {
                        var n, r;
                        nO(e, t.response.status);
                        let i = null == (r = t.response) || null == (n = r.headers) ? void 0 : n.get("content-length");
                        if (i) {
                            let t = parseInt(i);
                            t > 0 && e.setAttribute(no, t)
                        }
                    } else t.error && e.setStatus({
                        code: 2,
                        message: "internal_error"
                    });
                    e.end()
                }(n, e), l = n, u = e, null == (c = i) || null == (p = c.onRequestSpanEnd) || p.call(c, l, {
                    headers: null == (d = u.response) ? void 0 : d.headers,
                    error: u.error
                })), delete r[t]);
                return
            }
            let {
                spanOrigin: f = "auto.http.browser",
                propagateTraceparent: h = !1,
                urlBase: m
            } = i ?? {}, g = tA(), v = !!rh(), _ = v || !!g && iq(g), y = s && _ ? sz(function(e, t, n, r, i) {
                let o = !!r && iq(r),
                    a = oM(e, i);
                if (e.startsWith("data:")) {
                    let i = oO(e);
                    return {
                        name: o ? t : `${t} ${i}`,
                        attributes: ci(e, void 0, t, n, r, a)
                    }
                }
                let s = oR(e),
                    l = s ? ox(s) : e;
                return {
                    name: o ? a ? `${t} ${a}` : t : `${t} ${l}`,
                    attributes: ci(e, s, t, n, r, a)
                }
            }(a, o, f, g, m)) : new rE, b = s3(y) && v ? void 0 : y;
            if (s && !_ && (null == g || g.recordDroppedEvent("no_parent_span", "span")), e.fetchData.__span = y.spanContext().spanId, r[y.spanContext().spanId] = y, n(e.fetchData.url)) {
                let t = e.args[0],
                    n = { ...e.args[1] || {}
                    },
                    r = function(e, t, n, r) {
                        var i, o;
                        let a = cn({
                                span: n,
                                propagateTraceparent: r
                            }),
                            s = a["sentry-trace"],
                            l = a.baggage,
                            u = a.traceparent;
                        if (!s) return;
                        let c = t.headers || (eM(e) ? e.headers : void 0);
                        if (!c) return {
                            "sentry-trace": s,
                            ...l && {
                                baggage: l
                            },
                            ...u && {
                                traceparent: u
                            }
                        };
                        if (i = c, "u" > typeof Headers && eA(i, Headers)) {
                            let e = new Headers(c);
                            if (e.get("sentry-trace") || e.set("sentry-trace", s), r && u && !e.get("traceparent") && e.set("traceparent", u), l) {
                                let t = e.get("baggage");
                                t ? cr(t) || e.set("baggage", `${t},${l}`) : e.set("baggage", l)
                            }
                            return e
                        }
                        if (Array.isArray(o = c) && o.every(e => Array.isArray(e) && 2 === e.length && "string" == typeof e[0])) {
                            let e = [...c];
                            e.find(e => "sentry-trace" === e[0]) || e.push(["sentry-trace", s]), r && u && !e.find(e => "traceparent" === e[0]) && e.push(["traceparent", u]);
                            let t = c.find(e => "baggage" === e[0] && "string" == typeof e[1] && cr(e[1]));
                            return l && !t && e.push(["baggage", l]), e
                        } {
                            let e = "sentry-trace" in c ? c["sentry-trace"] : void 0,
                                t = "traceparent" in c ? c.traceparent : void 0,
                                n = "baggage" in c ? c.baggage : void 0,
                                i = n ? Array.isArray(n) ? [...n] : [n] : [],
                                o = n && (Array.isArray(n) ? n.find(e => cr(e)) : cr(n));
                            l && !o && i.push(l);
                            let a = Object.assign({}, c, {
                                "sentry-trace": e ?? s,
                                ...i.length > 0 && {
                                    baggage: i.join(",")
                                }
                            });
                            return r && u && !t && (a.traceparent = u), a
                        }
                    }(t, n, rS() && _ ? b : void 0, h);
                r && (e.args[1] = n, n.headers = r)
            }
            if (g) {
                let t = {
                    input: e.args,
                    response: e.response,
                    startTimestamp: e.startTimestamp,
                    endTimestamp: e.endTimestamp
                };
                g.emit("beforeOutgoingRequestSpan", y, t)
            }
            return y
        }(t, u, c, d, {
            propagateTraceparent: p,
            onRequestSpanEnd: l,
            urlBase: null == (n = ei.location) ? void 0 : n.origin
        });
        if (i) {
            let n = cp(t.fetchData.url),
                a = n ? null == (r = oP(n).host) ? void 0 : r.replace(/^.*@/, "") : void 0,
                l = n ? oO(n) : void 0;
            i.setAttributes({
                [nb]: ok(l),
                [ng]: a
            }), o && cg(i, e), null == s || s(i, {
                headers: t.headers
            })
        }
    }), r && af(t => {
        let n = function(e, t, n, r, i, o) {
            var a;
            let s = e.xhr,
                l = null == s ? void 0 : s[ap];
            if (!s || s.__sentry_own_request__ || !l) return;
            let {
                url: u,
                method: c
            } = l, d = rS() && t(u);
            if (e.endTimestamp) {
                let t = s.__sentry_xhr_span_id__;
                if (!t) return;
                let n = r[t];
                n && (d && void 0 !== l.status_code && (nO(n, l.status_code), n.end(), null == o || o(n, {
                    headers: cf(cd(s)),
                    error: e.error
                })), delete r[t]);
                return
            }
            let p = cp(u),
                f = p ? oP(p) : oP(u),
                h = p ? oO(p) : void 0,
                m = oO(oN(u)),
                g = tA(),
                v = !!rh(),
                _ = v || !!g && iq(g),
                y = null == f || null == (a = f.host) ? void 0 : a.replace(/^.*@/, ""),
                b = oM(p || u),
                S = b ? `${c} ${b}` : c,
                w = d && _ ? s9({
                    name: g && iq(g) ? S : `${c} ${m}`,
                    attributes: {
                        type: "xhr",
                        [ni]: c,
                        [nb]: ok(h),
                        [ng]: y,
                        [n_]: b,
                        [np]: "auto.http.browser",
                        [nd]: l_,
                        [nw]: oT(oC(null == f ? void 0 : f.search)),
                        [ny]: oA(null == f ? void 0 : f.hash)
                    }
                }) : new rE,
                E = s3(w) && v ? void 0 : w;
            return d && !_ && (null == g || g.recordDroppedEvent("no_parent_span", "span")), s.__sentry_xhr_span_id__ = w.spanContext().spanId, r[s.__sentry_xhr_span_id__] = w, n(u) && function(e, t, n) {
                let {
                    "sentry-trace": r,
                    baggage: i,
                    traceparent: o
                } = cn({
                    span: t,
                    propagateTraceparent: n
                });
                r && function(e, t, n, r) {
                    var i;
                    let o = null == (i = e.__sentry_xhr_v3__) ? void 0 : i.request_headers;
                    if ((null == o || !o["sentry-trace"]) && e.setRequestHeader) try {
                        if (e.setRequestHeader("sentry-trace", t), !r || (null == o ? void 0 : o.traceparent) || e.setRequestHeader("traceparent", r), n) {
                            let t = null == o ? void 0 : o.baggage;
                            t && t.split(",").some(e => e.trim().startsWith("sentry-")) || e.setRequestHeader("baggage", n)
                        }
                    } catch {}
                }(e, r, i, o)
            }(s, rS() && _ ? E : void 0, i), g && g.emit("beforeOutgoingRequestSpan", w, e), w
        }(t, u, c, d, p, l);
        if (n) {
            var r;
            o && cg(n, e), null == s || s(n, {
                headers: cf(null == (r = t.xhr.__sentry_xhr_v3__) ? void 0 : r.request_headers)
            })
        }
    })
}

function cg(e, t) {
    let n = n7(e).attributes[nb];
    if (!n || "string" != typeof n) return;
    let r = () => void setTimeout(i);
    if (iq(t)) {
        let t = e.end.bind(e);
        e.end = e => {
            let n = e ?? ta(),
                o = !1,
                a = () => {
                    o || (o = !0, setTimeout(i), t(n), clearTimeout(s))
                };
            r = a;
            let s = setTimeout(a, 300)
        }
    }
    let i = uv("resource", t => {
        let {
            entries: i
        } = t;
        i.forEach(t => {
            "resource" === t.entryType && "initiatorType" in t && "string" == typeof t.nextHopProtocol && ("fetch" === t.initiatorType || "xmlhttprequest" === t.initiatorType) && t.name.endsWith(n) && (e.setAttributes(uO(t)), r())
        })
    })
}
let cv = { ...le,
        instrumentNavigation: !0,
        instrumentBfcacheRestore: !0,
        instrumentPageLoad: !0,
        markBackgroundSpan: !0,
        enableLongTask: !0,
        enableLongAnimationFrame: !0,
        enableInp: !0,
        ignoreResourceSpans: [],
        detectRedirects: !0,
        linkPreviousTrace: "in-memory",
        consistentTraceSampling: !1,
        enableReportPageLoaded: !1,
        ...ch
    },
    c_ = function() {
        let e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        "enableElementTiming" in n && ed(() => {
            console.warn("[Sentry] `enableElementTiming` is deprecated and no longer has any effect. Use the standalone `elementTimingIntegration` instead.")
        });
        let r = ei.document,
            {
                enableInp: i,
                enableLongTask: o,
                enableLongAnimationFrame: a,
                webVitals: s,
                beforeStartSpan: l,
                idleTimeout: u,
                finalTimeout: c,
                childSpanTimeout: d,
                markBackgroundSpan: p,
                traceFetch: f,
                traceXHR: h,
                shouldCreateSpanForRequest: m,
                enableHTTPTimings: g,
                ignoreResourceSpans: v,
                instrumentPageLoad: _,
                instrumentNavigation: y,
                instrumentBfcacheRestore: b,
                detectRedirects: S,
                linkPreviousTrace: w,
                consistentTraceSampling: E,
                enableReportPageLoaded: k,
                onRequestSpanStart: T,
                onRequestSpanEnd: I
            } = { ...cv,
                ...n
            },
            R = lM();

        function x(e, n) {
            let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                o = arguments.length > 3 ? arguments[3] : void 0,
                a = "pageload" === n.op,
                s = n.name,
                p = l ? l(n) : n,
                f = oR(o || oL()),
                h = { ...(null == f ? void 0 : f.pathname) && {
                        [nS]: f.pathname
                    },
                    ...f && !oI(f) && {
                        [nb]: ok(f.href)
                    },
                    ...p.attributes
                };
            if (s !== p.name && (h[nm] = "custom"), p.attributes = h, !i) {
                let e = tt();
                s9({ ...p,
                    startTime: e
                }).end(e);
                return
            }
            let m = lt(p, {
                idleTimeout: u,
                finalTimeout: c,
                childSpanTimeout: d,
                disableAutoFinish: a,
                trimIdleSpanEndTimestamp: !k
            });

            function g() {
                r && ["interactive", "complete"].includes(r.readyState) && (e.emit("idleSpanEnableAutoFinish", m), r.removeEventListener("readystatechange", g))
            }
            a && k && (t = m), eN(e, cE, m), a && !k && r && (r.addEventListener("readystatechange", g), g())
        }
        return {
            name: "BrowserTracing",
            setup(n) {
                var i, s;
                if (R) {
                    aS && em.log("[Tracing] Skipping browserTracingIntegration setup for bot user agent.");
                    return
                }
                if (lC(), a && ei.PerformanceObserver && (null == (i = PerformanceObserver.supportedEntryTypes) ? void 0 : i.includes("long-animation-frame")) ? new PerformanceObserver(e => {
                        let t = rh();
                        if (t)
                            for (let n of e.getEntries()) {
                                let e = to(n.startTime);
                                if (!e || !n.scripts[0]) continue;
                                let {
                                    start_timestamp: r,
                                    attributes: {
                                        [nd]: i
                                    }
                                } = n7(t);
                                if ("navigation" === i && r && e < r) continue;
                                let o = uP(n.duration),
                                    a = {
                                        [np]: "auto.ui.browser.metrics"
                                    },
                                    {
                                        invoker: s,
                                        invokerType: l,
                                        sourceURL: u,
                                        sourceFunctionName: c,
                                        sourceCharPosition: d
                                    } = n.scripts[0];
                                a["browser.script.invoker"] = s, a["browser.script.invoker_type"] = l, u && (a["code.file.path"] = u), c && (a[ne] = c), -1 !== d && (a["browser.script.source_char_position"] = d), uA(t, e, e + o, {
                                    name: lE,
                                    op: "ui.long_animation_frame",
                                    attributes: a
                                })
                            }
                    }).observe({
                        type: "long-animation-frame",
                        buffered: !0
                    }) : o && uv("longtask", e => {
                        let {
                            entries: t
                        } = e, n = rh();
                        if (!n) return;
                        let {
                            attributes: r,
                            start_timestamp: i
                        } = n7(n);
                        for (let e of t) {
                            let t = to(e.startTime);
                            if (!t) continue;
                            let o = uP(e.duration);
                            "navigation" === r[nd] && i && t < i || uA(n, t, t + o, {
                                name: lE,
                                op: "ui.long_task",
                                attributes: {
                                    [np]: "auto.ui.browser.metrics"
                                }
                            })
                        }
                    }), S && r) {
                    let t = () => {
                        e = ta()
                    };
                    addEventListener("click", t, {
                        capture: !0
                    }), addEventListener("keydown", t, {
                        capture: !0,
                        passive: !0
                    })
                }

                function l() {
                    let e = n[cE];
                    e && !n7(e).end_timestamp && (aS && em.log(`[Tracing] Finishing current active span with op: ${n7(e).attributes[nd]}`), e.setAttribute(nc, "cancelled"), e.end())
                }
                n.on("beforeIdleSpanEnd", e => {
                    if (n[cE] !== e) return;
                    ! function(e, t) {
                        let n = uM();
                        if (!(null == n ? void 0 : n.getEntries)) return;
                        let {
                            spanStreamingEnabled: r,
                            ignoreResourceSpans: i
                        } = t, o = n.getEntries(), {
                            attributes: a,
                            start_timestamp: s
                        } = n7(e);
                        o.slice(uD).forEach(t => {
                                var n, o, l, u, c, d;
                                let p = to(t.startTime);
                                if (!p) return;
                                let f = uP(Math.max(0, t.duration));
                                if ("navigation" !== a[nd] || !s || !(p < s)) switch (t.entryType) {
                                    case "navigation":
                                        uF(n = e, o = t, "unloadEvent", l = r), uF(n, o, "redirect", l), uF(n, o, "domContentLoadedEvent", l), uF(n, o, "loadEvent", l), uF(n, o, "connect", l), uF(n, o, "secureConnection", l), uF(n, o, "fetch", l), uF(n, o, "domainLookup", l),
                                            function(e, t, n) {
                                                let r = uL(t, t.requestStart),
                                                    i = uL(t, t.responseEnd),
                                                    o = uL(t, t.responseStart);
                                                if (t.responseEnd) {
                                                    let a = ok(t.name);
                                                    uA(e, r, i, {
                                                        name: n ? lR[lp] : a,
                                                        attributes: {
                                                            [nd]: lp,
                                                            [np]: "auto.ui.browser.metrics",
                                                            [nb]: a
                                                        }
                                                    }), uA(e, o, i, {
                                                        name: n ? lR[lf] : a,
                                                        attributes: {
                                                            [nd]: lf,
                                                            [np]: "auto.ui.browser.metrics",
                                                            [nb]: a
                                                        }
                                                    })
                                                }
                                            }(n, o, l);
                                        break;
                                    case "paint":
                                        u = e, c = t, uA(u, d = p, d + f, {
                                            name: c.name,
                                            attributes: {
                                                [nd]: "browser.paint",
                                                [np]: "auto.resource.browser.metrics",
                                                "browser.paint.type": c.name
                                            }
                                        });
                                        break;
                                    case "resource":
                                        ! function(e, t, n, r, i, o, a) {
                                            var s, l, u;
                                            if ("xmlhttprequest" === t.initiatorType || "fetch" === t.initiatorType) return;
                                            let c = t.initiatorType ? `resource.${t.initiatorType}` : "resource.other";
                                            if (null == o ? void 0 : o.includes(c)) return;
                                            let d = {
                                                    [np]: "auto.resource.browser.metrics"
                                                },
                                                p = oP(n);
                                            p.protocol && (d["url.scheme"] = p.protocol.split(":").pop());
                                            let f = null == (s = p.host) ? void 0 : s.replace(/^.*@/, "");
                                            f && (d[ng] = f);
                                            let h = null == f ? void 0 : f.replace(/:\d+$/, "");
                                            h && (d[n_] = h), d["http.request.same_origin"] = n.includes(ei.location.origin);
                                            let m = ok(n);
                                            d[nb] = m, l = t, u = d, [
                                                ["responseStatus", "http.response.status_code"],
                                                ["transferSize", "http.response.size"],
                                                ["encodedBodySize", no],
                                                ["decodedBodySize", "http.response.body.decoded_size"],
                                                ["renderBlockingStatus", "resource.render_blocking_status"],
                                                ["deliveryType", "http.response_delivery_type"]
                                            ].forEach(e => {
                                                let [t, n] = e, r = l[t];
                                                null != r && ("number" == typeof r && r < 0x7fffffff || "string" == typeof r) && (u[n] = r)
                                            });
                                            let g = { ...d,
                                                ...uO(t)
                                            };
                                            uA(e, r, r + i, {
                                                name: a ? h || "Resource" : m.replace(ei.location.origin, ""),
                                                op: c,
                                                attributes: g
                                            })
                                        }(e, t, t.name, p, f, i, r)
                                }
                            }), uD = Math.max(o.length - 1, 0),
                            function(e, t) {
                                let n = ei.navigator;
                                if (!n) return;
                                let r = n.connection;
                                r && (r.effectiveType && e.setAttribute(t ? "network.connection.effective_type" : "effectiveConnectionType", r.effectiveType), r.type && e.setAttribute(t ? "network.connection.type" : "connectionType", r.type), uC(r.rtt) && (t ? e.setAttribute("network.connection.rtt", r.rtt) : "pageload" === n7(e).attributes[nd] && sL("connection.rtt", r.rtt, "millisecond"))), uC(n.deviceMemory) && (t ? e.setAttribute("device.memory.estimated_capacity", n.deviceMemory) : e.setAttribute("deviceMemory", `${n.deviceMemory} GB`)), uC(n.hardwareConcurrency) && (t ? e.setAttribute("device.processor_count", n.hardwareConcurrency) : e.setAttribute("hardwareConcurrency", String(n.hardwareConcurrency)))
                            }(e, r)
                    }(e, {
                        ignoreResourceSpans: v,
                        spanStreamingEnabled: iq(n)
                    }), eN(n, cE, void 0);
                    let r = tT(),
                        i = r.getPropagationContext();
                    r.setPropagationContext({ ...i,
                        traceId: e.spanContext().traceId,
                        sampled: rr(e),
                        dsc: rx(e)
                    }), t === e && (t = void 0)
                }), n.on("startNavigationSpan", (t, r) => {
                    if (tA() !== n) return;
                    if (null == r ? void 0 : r.isRedirect) {
                        aS && em.warn("[Tracing] Detected redirect, navigation span will not be the root span, but a child span."), x(n, {
                            op: "navigation.redirect",
                            ...t
                        }, !1, r.url);
                        return
                    }
                    e = void 0, l();
                    let i = tT();
                    i.setPropagationContext({
                        traceId: e3(),
                        sampleRand: Math.random(),
                        propagationSpanId: rS() ? void 0 : tc()
                    }), i.setSDKProcessingMetadata({
                        normalizedRequest: void 0
                    }), x(n, {
                        op: lr,
                        ...t,
                        parentSpan: null
                    }, !0, null == r ? void 0 : r.url)
                }), n.on("startPageLoadSpan", function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (tA() !== n) return;
                    l();
                    let r = nJ(t.sentryTrace || cS("sentry-trace") || cw("sentry-trace"), t.baggage || cS("baggage") || cw("baggage")),
                        i = tT();
                    i.setPropagationContext(r), rS() || (i.getPropagationContext().propagationSpanId = tc());
                    let o = o7(n);
                    i.setSDKProcessingMetadata({
                        normalizedRequest: { ...o,
                            url: ok(o.url, n)
                        }
                    }), x(n, {
                        op: ln,
                        ...e
                    })
                }), n.on("endPageloadSpan", () => {
                    k && t && (t.setAttribute(nc, "reportPageLoaded"), t.end())
                }), null == (s = ei.addEventListener) || s.call(ei, "pagehide", () => {
                    let e = n[cE];
                    e && !n7(e).end_timestamp && (e.setAttribute(nc, "documentHidden"), e.end()), n.flush()
                })
            },
            afterAllSetup(t) {
                var n, r;
                if (R) return;
                if (s6(t), t.addIntegration && !(null == (n = t.getIntegrationByName) ? void 0 : n.call(t, u7))) {
                    let e = (null == s ? void 0 : s.ignore) ?? [];
                    t.addIntegration(u9({ ...s,
                        ignore: i || e.includes("inp") ? e : [...e, "inp"]
                    }))
                }
                let o = oL();
                "off" !== w && function(e, t) {
                    let {
                        linkPreviousTrace: n,
                        consistentTraceSampling: r
                    } = t, i = "session-storage" === n, o = i ? function() {
                        try {
                            var e;
                            let t = null == (e = ei.sessionStorage) ? void 0 : e.getItem(ce);
                            return JSON.parse(t)
                        } catch {
                            return
                        }
                    }() : void 0;
                    e.on("spanStart", e => {
                        if (rd(e) !== e) return;
                        let t = tT().getPropagationContext();
                        o = function(e, t, n) {
                            let r = n7(t),
                                i = {
                                    spanContext: t.spanContext(),
                                    startTimestamp: r.start_timestamp,
                                    sampleRate: function() {
                                        try {
                                            var e;
                                            let t = Number(r.attributes[nT] ?? (null == (e = n.dsc) ? void 0 : e.sample_rate));
                                            return Number.isNaN(t) ? 0 : t
                                        } catch {
                                            return 0
                                        }
                                    }(),
                                    sampleRand: n.sampleRand
                                };
                            if (!e) return i;
                            let o = e.spanContext;
                            return o.traceId === r.trace_id ? e : (Date.now() / 1e3 - e.startTimestamp <= 3600 && (aS && em.log(`Adding previous_trace \`${JSON.stringify(o)}\` link to span \`${JSON.stringify({op:r.attributes[nd],...t.spanContext()})}\``), t.addLink({
                                context: o,
                                attributes: {
                                    "sentry.link.type": "previous_trace"
                                }
                            }), t.setAttribute("sentry.previous_trace", `${o.traceId}-${o.spanId}-${+!!ct(o)}`)), i)
                        }(o, e, t), i && function(e) {
                            try {
                                ei.sessionStorage.setItem(ce, JSON.stringify(e))
                            } catch (e) {
                                aS && em.warn("Could not store previous trace in sessionStorage", e)
                            }
                        }(o)
                    });
                    let a = !0;
                    r && e.on("beforeSampling", e => {
                        if (!o) return;
                        let t = tT(),
                            n = t.getPropagationContext();
                        if (a && n.parentSpanId) {
                            a = !1;
                            return
                        }
                        t.setPropagationContext({ ...n,
                            dsc: { ...n.dsc,
                                sample_rate: String(o.sampleRate),
                                sampled: String(ct(o.spanContext))
                            },
                            sampleRand: o.sampleRand
                        }), e.parentSampled = ct(o.spanContext), e.parentSampleRate = o.sampleRate, e.spanAttributes = { ...e.spanAttributes,
                            [nI]: o.sampleRate
                        }
                    })
                }(t, {
                    linkPreviousTrace: w,
                    consistentTraceSampling: E
                }), ei.location && (_ && cy(t, {
                    name: iq(t) ? ly : ei.location.pathname,
                    attributes: {
                        [nm]: "url",
                        [np]: "auto.pageload.browser"
                    }
                }), y && am(n => {
                    var r, i;
                    let a, s, {
                        to: l,
                        from: u
                    } = n;
                    if (void 0 === u && void 0 !== o && -1 !== o.indexOf(l)) {
                        o = void 0;
                        return
                    }
                    o = void 0;
                    let c = oR(l),
                        d = t[cE],
                        p = d && S && (r = d, i = e, a = n7(r), !((s = tt()) - a.start_timestamp > 1.5) && (!i || !(s - i <= 1.5)));
                    cb(t, {
                        name: iq(t) ? lb : (null == c ? void 0 : c.pathname) || ei.location.pathname,
                        attributes: {
                            [nm]: "url",
                            [np]: "auto.navigation.browser"
                        }
                    }, {
                        url: l,
                        isRedirect: p
                    })
                }), b && (null == (r = ei.addEventListener) || r.call(ei, "pageshow", e => {
                    var n, r;
                    e.persisted && (o = void 0, cb(t, {
                        name: iq(t) ? lb : (null == (n = ei.location) ? void 0 : n.pathname) || "/",
                        attributes: {
                            [nm]: "url",
                            [np]: "auto.navigation.browser.bfcache",
                            [t7]: "back-forward-cache"
                        }
                    }, {
                        url: null == (r = ei.location) ? void 0 : r.href
                    }))
                }))), p && (ei.document ? ei.document.addEventListener("visibilitychange", () => {
                    let e = rh();
                    if (!e) return;
                    let t = rd(e);
                    if (ei.document.hidden && t) {
                        let e = "cancelled",
                            {
                                attributes: {
                                    [nd]: n
                                },
                                status: r
                            } = n7(t);
                        aS && em.log(`[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${n}`), "ok" === r && t.setStatus({
                            code: 2,
                            message: e
                        }), t.setAttribute("sentry.cancellation_reason", "document.hidden"), t.end()
                    }
                }) : aS && em.warn("[Tracing] Could not set up background tab detection due to lack of global document")), cm(t, {
                    traceFetch: f,
                    traceXHR: h,
                    tracePropagationTargets: t.getOptions().tracePropagationTargets,
                    shouldCreateSpanForRequest: m,
                    enableHTTPTimings: g,
                    onRequestSpanStart: T,
                    onRequestSpanEnd: I
                })
            }
        }
    };

function cy(e, t, n) {
    var r;
    let i = t.name === ly;
    tT().setTransactionName(i ? null == (r = ei.location) ? void 0 : r.pathname : t.name);
    let o = ts(),
        a = { ...t,
            startTime: t.startTime ?? (o ? o / 1e3 : void 0)
        };
    e.emit("startPageLoadSpan", a, n);
    let s = e[cE];
    return s && e.emit("afterStartPageLoadSpan", s), s
}

function cb(e, t, n) {
    var r, i;
    let {
        url: o,
        isRedirect: a
    } = n || {};
    e.emit("beforeStartNavigationSpan", t, {
        isRedirect: a,
        url: o
    }), e.emit("startNavigationSpan", t, {
        isRedirect: a,
        url: o
    });
    let s = tT(),
        l = t.name === lb;
    return s.setTransactionName(l ? o && (null == (r = oR(o)) ? void 0 : r.pathname) || (null == (i = ei.location) ? void 0 : i.pathname) : t.name), o && !a && s.setSDKProcessingMetadata({
        normalizedRequest: { ...o7(e),
            url: ok(o, e)
        }
    }), e[cE]
}

function cS(e) {
    let t = ei.document,
        n = null == t ? void 0 : t.querySelector(`meta[name=${e}]`);
    return (null == n ? void 0 : n.getAttribute("content")) || void 0
}

function cw(e) {
    var t, n, r;
    let i = null == (n = ei.performance) || null == (t = n.getEntriesByType) ? void 0 : t.call(n, "navigation")[0],
        o = null == i || null == (r = i.serverTiming) ? void 0 : r.find(t => t.name === e);
    return null == o ? void 0 : o.description
}
let cE = "_sentry_idleSpan";

function ck(e) {
    try {
        return new URL(e, ei.location.origin).toString()
    } catch {
        return e
    }
}
let cT = null,
    cI = new Map,
    cR = new Map;

function cx(e) {
    return e.length > 1 && e.endsWith("/") ? e.slice(0, -1) : e
}

function cC(e) {
    if (void 0 === e) return 2;
    if (!e.startsWith(":")) return 0;
    let t = e.substring(1);
    return t.endsWith("*?") ? 4 : t.endsWith("*") ? 3 : 1
}

function cA(e, t) {
    let n = e.split("/").filter(Boolean),
        r = t.split("/").filter(Boolean),
        i = Math.min(n.length, r.length) + 1;
    for (let e = 0; e < i; e++) {
        let t = cC(n[e]) - cC(r[e]);
        if (0 !== t) return t
    }
    return 0
}

function cM(e) {
    if (cI.has(e)) return cI.get(e) ?? null;
    try {
        let t = new RegExp(e);
        return cI.set(e, t), t
    } catch (t) {
        return sT && em.warn("Could not compile regex", {
            regexString: e,
            error: t
        }), null
    }
}

function cP() {
    if (!(null == ei ? void 0 : ei._sentryRouteManifest) || "string" != typeof ei._sentryRouteManifest) return null;
    let e = ei._sentryRouteManifest;
    if (cT && L === e) return cT;
    cI.clear(), cR.clear();
    let t = {
        staticRoutes: [],
        dynamicRoutes: [],
        isrRoutes: []
    };
    try {
        if (t = JSON.parse(e), !Array.isArray(t.staticRoutes) || !Array.isArray(t.dynamicRoutes)) return null;
        return cT = t, L = e, t
    } catch {
        return sT && em.warn("Could not extract route manifest"), null
    }
}
let cN = e => {
    let t = cP();
    if (!t) return;
    let n = e.length > 1 && e.endsWith("/") ? e.slice(0, -1) : e;
    if (cR.has(n)) return cR.get(n);
    let {
        staticRoutes: r,
        dynamicRoutes: i
    } = t;
    if (!Array.isArray(r) || !Array.isArray(i)) return;
    let o = (function(e, t, n) {
        let r = [];
        if (t.some(t => t.path === e)) return [e];
        for (let t of n)
            if (t.regex) {
                let n = cM(t.regex);
                (null == n ? void 0 : n.test(e)) && r.push(t.path)
            }
        if (!e.startsWith("/:")) {
            for (let t of n)
                if (t.hasOptionalPrefix && t.regex) {
                    let n = "/" === e ? "/SENTRY_OPTIONAL_PREFIX" : `/SENTRY_OPTIONAL_PREFIX${e}`,
                        i = cM(t.regex);
                    (null == i ? void 0 : i.test(n)) && r.push(t.path)
                }
        }
        return r
    })(n, r, i).sort(cA)[0];
    return cR.set(n, o), o
};

function cO(e, t, n) {
    e.setAttributes({
        [nS]: t,
        [nb]: ok(ck(n))
    })
}
let cD = "router-patch",
    cL = {
        current: void 0
    },
    c$ = new WeakSet;

function cF(e, t, n) {
    c$.has(t) || (c$.add(t), ["back", "forward", "push", "replace"].forEach(r => {
        (null == t ? void 0 : t[r]) && (t[r] = new Proxy(t[r], {
            apply(t, i, o) {
                if ("router-patch" !== cD) return t.apply(i, o);
                if ("back" === r || "forward" === r) {
                    var a;
                    return a = `router.${r}`, clearTimeout(R), I = {
                        navigationType: a,
                        startTime: ta()
                    }, R = setTimeout(() => {
                        I = void 0
                    }, 1e3), t.apply(i, o)
                }
                let s = o[0],
                    l = en.default.env._sentryBasePath ?? ei._sentryBasePath,
                    u = l && "string" == typeof s && s.startsWith("/") && !s.startsWith(l) ? `${l}${s}` : s,
                    c = cx(function(e) {
                        try {
                            return new URL(e, "http://example.com/").pathname
                        } catch {
                            return "/"
                        }
                    }(u)),
                    d = oB(c, e);
                return n.current = cb(e, {
                    name: d ?? (iq(e) ? lb : c),
                    attributes: {
                        [nd]: lr,
                        [np]: "auto.navigation.nextjs.app_router_instrumentation",
                        [nm]: d ? "route" : "url",
                        "navigation.type": `router.${r}`,
                        ...d && {
                            [nE]: d
                        }
                    }
                }, {
                    url: ck(u)
                }), t.apply(i, o)
            }
        }))
    }))
}

function cU() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = c_({ ...e,
            instrumentNavigation: !1,
            instrumentPageLoad: !1,
            onRequestSpanStart() {
                for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                let [o, {
                    headers: a
                }] = r;
                return (null == a ? void 0 : a.get("next-router-prefetch")) && (null == o || o.setAttribute("http.request.prefetch", !0)), null == (t = e.onRequestSpanStart) ? void 0 : t.call(e, ...r)
            }
        }),
        {
            instrumentPageLoad: n = !0,
            instrumentNavigation: r = !0
        } = e;
    return { ...t,
        afterAllSetup(e) {
            !lM() && (r && function(e) {
                if (!ei.document.getElementById("__NEXT_DATA__")) {
                    let t, n, r;
                    $ = (t, n) => {
                        let r = en.default.env._sentryBasePath ?? ei._sentryBasePath,
                            i = r && t.startsWith("/") && !t.startsWith(r) ? `${r}${t}` : t,
                            o = cx(new URL(i, ei.location.href).pathname),
                            a = oB(i, e),
                            s = a ?? (iq(e) ? lb : o);
                        "router-patch" === cD && (cD = "transition-start-hook");
                        let l = cL.current;
                        l ? (l.updateName(s), l.setAttributes({
                            "navigation.type": `router.${n}`,
                            [nm]: a ? "route" : "url",
                            ...a && {
                                [nE]: a
                            }
                        }), cO(l, o, i), cL.current = void 0) : cb(e, {
                            name: s,
                            attributes: {
                                [nd]: lr,
                                [np]: "auto.navigation.nextjs.app_router_instrumentation",
                                [nm]: a ? "route" : "url",
                                "navigation.type": `router.${n}`,
                                ...a && {
                                    [nE]: a
                                }
                            }
                        }, {
                            url: ck(i)
                        })
                    }, ei.addEventListener("popstate", () => {
                        var t;
                        let n, r = cx(ei.location.pathname),
                            i = oj(e),
                            o = i ?? (iq(e) ? lb : r),
                            a = (clearTimeout(R), n = I, I = void 0, n);
                        !a && (null == (t = cL.current) ? void 0 : t.isRecording()) ? (cL.current.updateName(o), cL.current.setAttribute(nm, i ? "route" : "url"), i && cL.current.setAttribute(nE, i), cO(cL.current, r, ei.location.href)) : cL.current = cb(e, {
                            name: o,
                            startTime: null == a ? void 0 : a.startTime,
                            attributes: {
                                [np]: "auto.navigation.nextjs.app_router_instrumentation",
                                [nm]: i ? "route" : "url",
                                "navigation.type": (null == a ? void 0 : a.navigationType) ?? "browser.popstate",
                                ...i && {
                                    [nE]: i
                                }
                            }
                        }, {
                            url: ei.location.href
                        })
                    }), t = !1, n = 0, r = setInterval(() => {
                        var i;
                        n++;
                        let o = null == ei || null == (i = ei.next) ? void 0 : i.router;
                        if (t || n > 500) clearInterval(r);
                        else if (o) {
                            clearInterval(r), t = !0, cF(e, o, cL);
                            let n = ei.next;
                            n && (ei.next = new Proxy(n, {
                                set: (t, n, r) => ("router" === n && eI(r) && cF(e, r, cL), t[n] = r, !0)
                            }))
                        }
                    }, 20)
                }
            }(e), t.afterAllSetup(e), n && function(e) {
                if (ei.document.getElementById("__NEXT_DATA__")) ! function(e) {
                    let {
                        route: t,
                        params: n,
                        sentryTrace: r,
                        baggage: i
                    } = function() {
                        let e, t = ei.document.getElementById("__NEXT_DATA__");
                        if (null == t ? void 0 : t.innerHTML) try {
                            e = JSON.parse(t.innerHTML)
                        } catch {
                            sT && em.warn("Could not extract __NEXT_DATA__")
                        }
                        if (!e) return {};
                        let n = {},
                            {
                                page: r,
                                query: i,
                                props: o
                            } = e;
                        return n.route = r, n.params = i, (null == o ? void 0 : o.pageProps) && (n.sentryTrace = o.pageProps._sentryTraceData, n.baggage = o.pageProps._sentryBaggage), n
                    }(), o = nq(i), a = t || (iq(e) ? ly : ei.location.pathname);
                    (null == o ? void 0 : o["sentry-transaction"]) && "/_error" === a && (a = (a = o["sentry-transaction"]).replace(/^(GET|POST|PUT|DELETE|PATCH|HEAD|OPTIONS|TRACE|CONNECT)\s+/i, "")), cy(e, {
                        name: a,
                        attributes: {
                            [nd]: ln,
                            [np]: "auto.pageload.nextjs.pages_router_instrumentation",
                            [nm]: t ? "route" : "url",
                            ...t && {
                                [nE]: t
                            },
                            ...n && { ...n
                            }
                        }
                    }, {
                        sentryTrace: r,
                        baggage: i
                    })
                }(e);
                else {
                    let t, n;
                    t = cx(ei.location.pathname), n = oj(e), cy(e, {
                        name: n ?? (iq(e) ? ly : t),
                        attributes: {
                            [nd]: ln,
                            [np]: "auto.pageload.nextjs.app_router_instrumentation",
                            [nm]: n ? "route" : "url",
                            ...n && {
                                [nE]: n
                            }
                        }
                    })
                }
            }(e))
        }
    }
}
let cB = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;

function cj() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    let r = "",
        i = !1;
    for (let e = t.length - 1; e >= -1 && !i; e--) {
        let n = e >= 0 ? t[e] : "/";
        n && (r = `${n}/${r}`, i = "/" === n.charAt(0))
    }
    return r = (function(e, t) {
        let n = 0;
        for (let t = e.length - 1; t >= 0; t--) {
            let r = e[t];
            "." === r ? e.splice(t, 1) : ".." === r ? (e.splice(t, 1), n++) : n && (e.splice(t, 1), n--)
        }
        if (t)
            for (; n--;) e.unshift("..");
        return e
    })(r.split("/").filter(e => !!e), !i).join("/"), (i ? "/" : "") + r || "."
}

function cW(e) {
    let t = 0;
    for (; t < e.length && "" === e[t]; t++);
    let n = e.length - 1;
    for (; n >= 0 && "" === e[n]; n--);
    return t > n ? [] : e.slice(t, n - t + 1)
}
let cH = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.root,
            n = e.prefix || "app:///",
            r = "window" in ei && !!ei.window,
            i = e.iteratee || function(e) {
                let {
                    isBrowser: t,
                    root: n,
                    prefix: r
                } = e;
                return e => {
                    if (!e.filename) return e;
                    let i = /^[a-zA-Z]:\\/.test(e.filename) || e.filename.includes("\\") && !e.filename.includes("/"),
                        o = /^\//.test(e.filename);
                    if (t) {
                        if (n) {
                            let t = e.filename;
                            0 === t.indexOf(n) && (e.filename = t.replace(n, r))
                        }
                    } else if (i || o) {
                        let t, o, a = i ? e.filename.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/") : e.filename,
                            s = n ? function(e, t) {
                                e = cj(e).slice(1), t = cj(t).slice(1);
                                let n = cW(e.split("/")),
                                    r = cW(t.split("/")),
                                    i = Math.min(n.length, r.length),
                                    o = i;
                                for (let e = 0; e < i; e++)
                                    if (n[e] !== r[e]) {
                                        o = e;
                                        break
                                    }
                                let a = [];
                                for (let e = o; e < n.length; e++) a.push("..");
                                return (a = a.concat(r.slice(o))).join("/")
                            }(n, a) : (t = a.length > 1024 ? `<truncated>${a.slice(-1024)}` : a, (o = cB.exec(t)) ? o.slice(1) : [])[2] || "";
                        e.filename = `${r}${s}`
                    }
                    return e
                }
            }({
                isBrowser: r,
                root: t,
                prefix: n
            });
        return {
            name: "RewriteFrames",
            processEvent(e) {
                let t = e;
                return e.exception && Array.isArray(e.exception.values) && (t = function(e) {
                    try {
                        return { ...e,
                            exception: { ...e.exception,
                                values: e.exception.values.map(e => {
                                    var t, n;
                                    return { ...e,
                                        ...e.stacktrace && {
                                            stacktrace: { ...t = e.stacktrace,
                                                frames: null == t || null == (n = t.frames) ? void 0 : n.map(e => i(e))
                                            }
                                        }
                                    }
                                })
                            }
                        }
                    } catch {
                        return e
                    }
                }(t)), t
            }
        }
    },
    cz = /\/_next\/static\/chunks\/(main-|main-app-|polyfills-|webpack-|framework-|framework\.)[0-9a-f]+\.js(:\d+)*$/,
    cq = new og(100);

function cG(e) {
    let t, n = cx(e.pathname);
    return cN(n) ?? function(e) {
        var t;
        let n = null == (t = ei.__BUILD_MANIFEST) ? void 0 : t.sortedPages;
        if (n) return n.find(t => {
            var n;
            let r, i, o, a = (r = t.split("/"), i = "", (null == (n = r[r.length - 1]) ? void 0 : n.match(/^\[\[\.\.\..+\]\]$/)) && (r.pop(), i = "(?:/(.+?))?"), o = r.map(e => e.replace(/^\[\.\.\..+\]$/, "(.+?)").replace(/^\[.*\]$/, "([^/]+?)")).join("/"), RegExp(`^${o}${i}(?:/)?$`));
            return e.match(a)
        })
    }((t = en.default.env._sentryBasePath ?? ei._sentryBasePath) && (n === t || n.startsWith(`${t}/`)) ? n.slice(t.length) || "/" : n)
}

function cV(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tT(),
        {
            message: r,
            name: i,
            email: o,
            url: a,
            source: s,
            associatedEventId: l,
            tags: u
        } = e,
        c = {
            contexts: {
                feedback: {
                    contact_email: o,
                    name: i,
                    message: r,
                    url: a,
                    source: s,
                    associated_event_id: l
                }
            },
            type: "feedback",
            level: "info",
            tags: u
        },
        d = (null == n ? void 0 : n.getClient()) || tA();
    return d && d.emit("beforeSendFeedback", c, t), n.captureEvent(c, t)
}
let cY = ei.document,
    cK = ei.navigator,
    cJ = "Report a Bug",
    cX = "Unable to submit feedback with empty message",
    cQ = "No client setup, cannot send feedback.",
    cZ = "Unable to determine if Feedback was correctly sent.",
    c0 = "Unable to send feedback. This could be because this domain is not in your list of allowed domains.",
    c1 = "Unable to send feedback. This could be because of network issues, or because you are using an ad-blocker.",
    c2 = {
        ERROR_EMPTY_MESSAGE: cX,
        ERROR_NO_CLIENT: cQ,
        ERROR_TIMEOUT: cZ,
        ERROR_FORBIDDEN: c0,
        ERROR_GENERIC: c1
    };

function c3(e, t) {
    return Error((null == t ? void 0 : t[e]) ?? c2[e])
}
let c5 = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                includeReplay: !0
            },
            n = t.errorMessages;
        if (!e.message) throw c3("ERROR_EMPTY_MESSAGE", n);
        let r = tA();
        if (!r) throw c3("ERROR_NO_CLIENT", n);
        e.tags && Object.keys(e.tags).length && tT().setTags(e.tags);
        let i = cV({
            source: "api",
            url: function() {
                try {
                    return ei.document.location.href
                } catch {
                    return ""
                }
            }(),
            ...e
        }, t);
        return new Promise((e, t) => {
            let o = setTimeout(() => {
                    a(), t(c3("ERROR_TIMEOUT", n))
                }, 3e4),
                a = r.on("afterSendEvent", (r, s) => {
                    if (r.event_id === i) return (clearTimeout(o), a(), (null == s ? void 0 : s.statusCode) && s.statusCode >= 200 && s.statusCode < 300) ? e(i) : (null == s ? void 0 : s.statusCode) === 403 ? t(c3("ERROR_FORBIDDEN", n)) : t(c3("ERROR_GENERIC", n))
                })
        })
    },
    c4 = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;

function c6(e, t) {
    return { ...e,
        ...t,
        tags: { ...e.tags,
            ...t.tags
        },
        onFormOpen: () => {
            var n, r;
            null == (n = t.onFormOpen) || n.call(t), null == (r = e.onFormOpen) || r.call(e)
        },
        onFormClose: () => {
            var n, r;
            null == (n = t.onFormClose) || n.call(t), null == (r = e.onFormClose) || r.call(e)
        },
        onSubmitSuccess: (n, r) => {
            var i, o;
            null == (i = t.onSubmitSuccess) || i.call(t, n, r), null == (o = e.onSubmitSuccess) || o.call(e, n, r)
        },
        onSubmitError: n => {
            var r, i;
            null == (r = t.onSubmitError) || r.call(t, n), null == (i = e.onSubmitError) || i.call(e, n)
        },
        onFormSubmitted: () => {
            var n, r;
            null == (n = t.onFormSubmitted) || n.call(t), null == (r = e.onFormSubmitted) || r.call(e)
        },
        themeDark: { ...e.themeDark,
            ...t.themeDark
        },
        themeLight: { ...e.themeLight,
            ...t.themeLight
        }
    }
}

function c8(e, t) {
    return Object.entries(t).forEach(t => {
        let [n, r] = t;
        e.setAttributeNS(null, n, r)
    }), e
}
let c7 = "rgba(88, 74, 192, 1)",
    c9 = {
        foreground: "#2b2233",
        background: "#ffffff",
        accentForeground: "white",
        accentBackground: c7,
        successColor: "#268d75",
        errorColor: "#df3338",
        border: "1.5px solid rgba(41, 35, 47, 0.13)",
        boxShadow: "0px 4px 24px 0px rgba(43, 34, 51, 0.12)",
        outline: "1px auto var(--accent-background)",
        interactiveFilter: "brightness(95%)"
    },
    de = {
        foreground: "#ebe6ef",
        background: "#29232f",
        accentForeground: "white",
        accentBackground: c7,
        successColor: "#2da98c",
        errorColor: "#f55459",
        border: "1.5px solid rgba(235, 230, 239, 0.15)",
        boxShadow: "0px 4px 24px 0px rgba(43, 34, 51, 0.12)",
        outline: "1px auto var(--accent-background)",
        interactiveFilter: "brightness(150%)"
    };

function dt(e) {
    return `
  --foreground: ${e.foreground};
  --background: ${e.background};
  --accent-foreground: ${e.accentForeground};
  --accent-background: ${e.accentBackground};
  --success-color: ${e.successColor};
  --error-color: ${e.errorColor};
  --border: ${e.border};
  --box-shadow: ${e.boxShadow};
  --outline: ${e.outline};
  --interactive-filter: ${e.interactiveFilter};
  `
}

function dn(e) {
    let {
        colorScheme: t,
        themeDark: n,
        themeLight: r,
        styleNonce: i
    } = e, o = cY.createElement("style");
    return o.textContent = `
:host {
  --font-family: system-ui, 'Helvetica Neue', Arial, sans-serif;
  --font-size: 14px;
  --z-index: 100000;

  --page-margin: 16px;
  --inset: auto 0 0 auto;
  --actor-inset: var(--inset);

  font-family: var(--font-family);
  font-size: var(--font-size);

  ${"system"!==t?`color-scheme: only ${t};`:""}

  ${dt("dark"===t?{...de,...n}:{...c9,...r})}
}

${"system"===t?`
@media (prefers-color-scheme: dark) {
  :host {
    color-scheme: only dark;

    ${dt({...de,...n})}
  }
}`:""}
`, i && o.setAttribute("nonce", i), o
}
let dr = e => {
    let {
        lazyLoadIntegration: t,
        getModalIntegration: n,
        getScreenshotIntegration: r
    } = e;
    return function() {
        let {
            id: e = "sentry-feedback",
            autoInject: i = !0,
            showBranding: o = !0,
            isEmailRequired: a = !1,
            isNameRequired: s = !1,
            showEmail: l = !0,
            showName: u = !0,
            enableScreenshot: c = !0,
            useSentryUser: d = {
                email: "email",
                name: "username"
            },
            tags: p,
            styleNonce: f,
            scriptNonce: h,
            colorScheme: m = "system",
            themeLight: g = {},
            themeDark: v = {},
            addScreenshotButtonLabel: _ = "Add a screenshot",
            cancelButtonLabel: y = "Cancel",
            confirmButtonLabel: b = "Confirm",
            emailLabel: S = "Email",
            emailPlaceholder: w = "your.email@example.org",
            formTitle: E = "Report a Bug",
            isRequiredLabel: k = "(required)",
            messageLabel: T = "Description",
            messagePlaceholder: I = "What's the bug? What did you expect?",
            nameLabel: R = "Name",
            namePlaceholder: x = "Your Name",
            removeScreenshotButtonLabel: C = "Remove screenshot",
            submitButtonLabel: A = "Send Bug Report",
            successMessageText: M = "Thank you for your report!",
            triggerLabel: P = cJ,
            triggerAriaLabel: N = "",
            highlightToolText: O = "Highlight",
            hideToolText: D = "Hide",
            removeHighlightText: L = "Remove",
            errorEmptyMessageText: $ = cX,
            errorNoClientText: F = cQ,
            errorTimeoutText: U = cZ,
            errorForbiddenText: B = c0,
            errorGenericText: j = c1,
            onFormOpen: W,
            onFormClose: H,
            onSubmitSuccess: z,
            onSubmitError: q,
            onFormSubmitted: G
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, V = {
            id: e,
            autoInject: i,
            showBranding: o,
            isEmailRequired: a,
            isNameRequired: s,
            showEmail: l,
            showName: u,
            enableScreenshot: c,
            useSentryUser: d,
            tags: p,
            styleNonce: f,
            scriptNonce: h,
            colorScheme: m,
            themeDark: v,
            themeLight: g,
            triggerLabel: P,
            triggerAriaLabel: N,
            cancelButtonLabel: y,
            submitButtonLabel: A,
            confirmButtonLabel: b,
            formTitle: E,
            emailLabel: S,
            emailPlaceholder: w,
            messageLabel: T,
            messagePlaceholder: I,
            nameLabel: R,
            namePlaceholder: x,
            successMessageText: M,
            isRequiredLabel: k,
            addScreenshotButtonLabel: _,
            removeScreenshotButtonLabel: C,
            highlightToolText: O,
            hideToolText: D,
            removeHighlightText: L,
            errorEmptyMessageText: $,
            errorNoClientText: F,
            errorTimeoutText: U,
            errorForbiddenText: B,
            errorGenericText: j,
            onFormClose: H,
            onFormOpen: W,
            onSubmitError: q,
            onSubmitSuccess: z,
            onFormSubmitted: G
        }, Y = null, K = null, J = [], X = e => {
            if (!Y) {
                let t = cY.createElement("div");
                t.id = String(e.id), cY.body.appendChild(t), Y = t.attachShadow({
                    mode: "open"
                }), K = dn(e), Y.appendChild(K)
            }
            return Y
        }, Q = async e => {
            let i, o, a = e.enableScreenshot && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(cK.userAgent) || /Macintosh/i.test(cK.userAgent) && cK.maxTouchPoints && cK.maxTouchPoints > 1) && !!isSecureContext;
            try {
                i = (n ? n() : await t("feedbackModalIntegration", h))(), r6(i)
            } catch {
                throw c4 && em.error("[Feedback] Error when trying to load feedback integrations. Try using `feedbackSyncIntegration` in your `Sentry.init`."), Error("[Feedback] Missing feedback modal integration!")
            }
            try {
                let e = a ? r ? r() : await t("feedbackScreenshotIntegration", h) : void 0;
                e && (o = e(), r6(o))
            } catch {
                c4 && em.error("[Feedback] Missing feedback screenshot integration. Proceeding without screenshots.")
            }
            let s = {
                    ERROR_EMPTY_MESSAGE: e.errorEmptyMessageText,
                    ERROR_NO_CLIENT: e.errorNoClientText,
                    ERROR_TIMEOUT: e.errorTimeoutText,
                    ERROR_FORBIDDEN: e.errorForbiddenText,
                    ERROR_GENERIC: e.errorGenericText
                },
                l = i.createDialog({
                    options: { ...e,
                        onFormClose: () => {
                            var t;
                            null == l || l.close(), null == (t = e.onFormClose) || t.call(e)
                        },
                        onFormSubmitted: () => {
                            var t;
                            null == l || l.close(), null == (t = e.onFormSubmitted) || t.call(e)
                        }
                    },
                    screenshotIntegration: o,
                    sendFeedback: (e, t) => c5(e, {
                        includeReplay: !0,
                        ...t,
                        errorMessages: s
                    }),
                    shadow: X(e)
                });
            return l
        }, Z = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = c6(V, t),
                r = "string" == typeof e ? cY.querySelector(e) : "function" == typeof e.addEventListener ? e : null;
            if (!r) throw c4 && em.error("[Feedback] Unable to attach to target element"), Error("Unable to attach to target element");
            let i = null,
                o = async () => {
                    i || (i = await Q({ ...n,
                        onFormSubmitted: () => {
                            var e;
                            null == i || i.removeFromDom(), null == (e = n.onFormSubmitted) || e.call(n)
                        }
                    })), i.appendToDom(), i.open()
                };
            r.addEventListener("click", o);
            let a = () => {
                J = J.filter(e => e !== a), null == i || i.removeFromDom(), i = null, r.removeEventListener("click", o)
            };
            return J.push(a), a
        }, ee = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = c6(V, e),
                n = X(t),
                r = function(e) {
                    let t, n, r, i, o, a, s, l, {
                            triggerLabel: u,
                            triggerAriaLabel: c,
                            shadow: d,
                            styleNonce: p
                        } = e,
                        f = cY.createElement("button");
                    if (f.type = "button", f.className = "widget__actor", f.ariaHidden = "false", f.ariaLabel = c || u || cJ, f.appendChild((n = c8((t = e => ei.document.createElementNS("http://www.w3.org/2000/svg", e))("svg"), {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 20 20",
                            fill: "var(--actor-color, var(--foreground))"
                        }), r = c8(t("g"), {
                            clipPath: "url(#clip0_57_80)"
                        }), i = c8(t("path"), {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M15.6622 15H12.3997C12.2129 14.9959 12.031 14.9396 11.8747 14.8375L8.04965 12.2H7.49956V19.1C7.4875 19.3348 7.3888 19.5568 7.22256 19.723C7.05632 19.8892 6.83435 19.9879 6.59956 20H2.04956C1.80193 19.9968 1.56535 19.8969 1.39023 19.7218C1.21511 19.5467 1.1153 19.3101 1.11206 19.0625V12.2H0.949652C0.824431 12.2017 0.700142 12.1783 0.584123 12.1311C0.468104 12.084 0.362708 12.014 0.274155 11.9255C0.185602 11.8369 0.115689 11.7315 0.0685419 11.6155C0.0213952 11.4995 -0.00202913 11.3752 -0.00034808 11.25V3.75C-0.00900498 3.62067 0.0092504 3.49095 0.0532651 3.36904C0.0972798 3.24712 0.166097 3.13566 0.255372 3.04168C0.344646 2.94771 0.452437 2.87327 0.571937 2.82307C0.691437 2.77286 0.82005 2.74798 0.949652 2.75H8.04965L11.8747 0.1625C12.031 0.0603649 12.2129 0.00407221 12.3997 0H15.6622C15.9098 0.00323746 16.1464 0.103049 16.3215 0.278167C16.4966 0.453286 16.5964 0.689866 16.5997 0.9375V3.25269C17.3969 3.42959 18.1345 3.83026 18.7211 4.41679C19.5322 5.22788 19.9878 6.32796 19.9878 7.47502C19.9878 8.62209 19.5322 9.72217 18.7211 10.5333C18.1345 11.1198 17.3969 11.5205 16.5997 11.6974V14.0125C16.6047 14.1393 16.5842 14.2659 16.5395 14.3847C16.4948 14.5035 16.4268 14.6121 16.3394 14.7042C16.252 14.7962 16.147 14.8698 16.0307 14.9206C15.9144 14.9714 15.7891 14.9984 15.6622 15ZM1.89695 10.325H1.88715V4.625H8.33715C8.52423 4.62301 8.70666 4.56654 8.86215 4.4625L12.6872 1.875H14.7247V13.125H12.6872L8.86215 10.4875C8.70666 10.3835 8.52423 10.327 8.33715 10.325H2.20217C2.15205 10.3167 2.10102 10.3125 2.04956 10.3125C1.9981 10.3125 1.94708 10.3167 1.89695 10.325ZM2.98706 12.2V18.1625H5.66206V12.2H2.98706ZM16.5997 9.93612V5.01393C16.6536 5.02355 16.7072 5.03495 16.7605 5.04814C17.1202 5.13709 17.4556 5.30487 17.7425 5.53934C18.0293 5.77381 18.2605 6.06912 18.4192 6.40389C18.578 6.73866 18.6603 7.10452 18.6603 7.47502C18.6603 7.84552 18.578 8.21139 18.4192 8.54616C18.2605 8.88093 18.0293 9.17624 17.7425 9.41071C17.4556 9.64518 17.1202 9.81296 16.7605 9.90191C16.7072 9.91509 16.6536 9.9265 16.5997 9.93612Z"
                        }), n.appendChild(r).appendChild(i), o = t("defs"), a = c8(t("clipPath"), {
                            id: "clip0_57_80"
                        }), s = c8(t("rect"), {
                            width: "20",
                            height: "20",
                            fill: "white"
                        }), a.appendChild(s), o.appendChild(a), n.appendChild(o).appendChild(a).appendChild(s), n)), u) {
                        let e = cY.createElement("span");
                        e.appendChild(cY.createTextNode(u)), f.appendChild(e)
                    }
                    let h = ((l = cY.createElement("style")).textContent = `
.widget__actor {
  position: fixed;
  z-index: var(--z-index);
  margin: var(--page-margin);
  inset: var(--actor-inset);

  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;

  font-family: inherit;
  font-size: var(--font-size);
  font-weight: 600;
  line-height: 1.14em;
  text-decoration: none;

  background: var(--actor-background, var(--background));
  border-radius: var(--actor-border-radius, 1.7em/50%);
  border: var(--actor-border, var(--border));
  box-shadow: var(--actor-box-shadow, var(--box-shadow));
  color: var(--actor-color, var(--foreground));
  fill: var(--actor-color, var(--foreground));
  cursor: pointer;
  opacity: 1;
  transition: transform 0.2s ease-in-out;
  transform: translate(0, 0) scale(1);
}
.widget__actor[aria-hidden="true"] {
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  transform: translate(0, 16px) scale(0.98);
}

.widget__actor:hover {
  background: var(--actor-hover-background, var(--background));
  filter: var(--interactive-filter);
}

.widget__actor svg {
  width: 1.14em;
  height: 1.14em;
}

@media (max-width: 600px) {
  .widget__actor span {
    display: none;
  }
}
`, p && l.setAttribute("nonce", p), l);
                    return {
                        el: f,
                        appendToDom() {
                            d.appendChild(h), d.appendChild(f)
                        },
                        removeFromDom() {
                            f.remove(), h.remove()
                        },
                        show() {
                            f.ariaHidden = "false"
                        },
                        hide() {
                            f.ariaHidden = "true"
                        }
                    }
                }({
                    triggerLabel: t.triggerLabel,
                    triggerAriaLabel: t.triggerAriaLabel,
                    shadow: n,
                    styleNonce: f
                });
            return Z(r.el, { ...t,
                onFormOpen() {
                    r.hide()
                },
                onFormClose() {
                    r.show()
                },
                onFormSubmitted() {
                    r.show()
                }
            }), r
        };
        return {
            name: "Feedback",
            setupOnce() {
                ix() && V.autoInject && ("loading" === cY.readyState ? cY.addEventListener("DOMContentLoaded", () => ee().appendToDom()) : ee().appendToDom())
            },
            attachTo: Z,
            createWidget() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = ee(c6(V, e));
                return t.appendToDom(), t
            },
            async createForm() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Q(c6(V, e))
            },
            setTheme(e) {
                if (V.colorScheme = e, Y) {
                    let e = dn(V);
                    K ? Y.replaceChild(e, K) : Y.prepend(e), K = e
                }
            },
            remove() {
                if (Y) {
                    var e;
                    null == (e = Y.parentElement) || e.remove(), Y = null, K = null
                }
                J.forEach(e => e()), J = []
            }
        }
    }
};

function di() {
    let e = tA();
    return null == e ? void 0 : e.getIntegrationByName("Feedback")
}
var da, ds, dl, du, dc, dd, dp, df, dh, dm, dg, dv, d_, dy, db = {},
    dS = [],
    dw = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
    dE = Array.isArray;

function dk(e, t) {
    for (var n in t) e[n] = t[n];
    return e
}

function dT(e) {
    e && e.parentNode && e.parentNode.removeChild(e)
}

function dI(e, t, n) {
    var r, i, o, a = {};
    for (o in t) "key" == o ? r = t[o] : "ref" == o ? i = t[o] : a[o] = t[o];
    if (arguments.length > 2 && (a.children = arguments.length > 3 ? da.call(arguments, 2) : n), "function" == typeof e && null != e.defaultProps)
        for (o in e.defaultProps) void 0 === a[o] && (a[o] = e.defaultProps[o]);
    return dR(e, a, r, i, null)
}

function dR(e, t, n, r, i) {
    var o = {
        type: e,
        props: t,
        key: n,
        ref: r,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __c: null,
        constructor: void 0,
        __v: null == i ? ++dl : i,
        __i: -1,
        __u: 0
    };
    return null == i && null != ds.vnode && ds.vnode(o), o
}

function dx(e) {
    return e.children
}

function dC(e, t) {
    this.props = e, this.context = t
}

function dA(e, t) {
    if (null == t) return e.__ ? dA(e.__, e.__i + 1) : null;
    for (var n; t < e.__k.length; t++)
        if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
    return "function" == typeof e.type ? dA(e) : null
}

function dM(e) {
    (!e.__d && (e.__d = !0) && du.push(e) && !dP.__r++ || dc != ds.debounceRendering) && ((dc = ds.debounceRendering) || dd)(dP)
}

function dP() {
    try {
        for (var e, t = 1; du.length;) du.length > t && du.sort(dp), e = du.shift(), t = du.length,
            function(e) {
                if (e.__P && e.__d) {
                    var t = e.__v,
                        n = t.__e,
                        r = [],
                        i = [],
                        o = dk({}, t);
                    o.__v = t.__v + 1, ds.vnode && ds.vnode(o), d$(e.__P, o, t, e.__n, e.__P.namespaceURI, 32 & t.__u ? [n] : null, r, null == n ? dA(t) : n, !!(32 & t.__u), i), o.__v = t.__v, o.__.__k[o.__i] = o, dF(r, o, i), t.__e = t.__ = null, o.__e != n && function e(t) {
                        if (null != (t = t.__) && null != t.__c) return t.__e = t.__c.base = null, t.__k.some(function(e) {
                            if (null != e && null != e.__e) return t.__e = t.__c.base = e.__e
                        }), e(t)
                    }(o)
                }
            }(e)
    } finally {
        du.length = dP.__r = 0
    }
}

function dN(e, t, n, r, i, o, a, s, l, u, c) {
    var d, p, f, h, m, g, v = r && r.__k || dS,
        _ = t.length;
    for (l = function(e, t, n, r, i) {
            var o, a, s, l, u, c = n.length,
                d = c,
                p = 0;
            for (e.__k = Array(i), o = 0; o < i; o++) null != (a = t[o]) && "boolean" != typeof a && "function" != typeof a ? ("string" == typeof a || "number" == typeof a || "bigint" == typeof a || a.constructor == String ? a = e.__k[o] = dR(null, a, null, null, null) : dE(a) ? a = e.__k[o] = dR(dx, {
                children: a
            }, null, null, null) : void 0 === a.constructor && a.__b > 0 ? a = e.__k[o] = dR(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : e.__k[o] = a, l = o + p, a.__ = e, a.__b = e.__b + 1, s = null, -1 != (u = a.__i = function(e, t, n, r) {
                var i, o, a, s = e.key,
                    l = e.type,
                    u = t[n],
                    c = null != u && 0 == (2 & u.__u);
                if (null === u && null == s || c && s == u.key && l == u.type) return n;
                if (r > +!!c) {
                    for (i = n - 1, o = n + 1; i >= 0 || o < t.length;)
                        if (null != (u = t[a = i >= 0 ? i-- : o++]) && 0 == (2 & u.__u) && s == u.key && l == u.type) return a
                }
                return -1
            }(a, n, l, d)) && (d--, (s = n[u]) && (s.__u |= 2)), null == s || null == s.__v ? (-1 == u && (i > c ? p-- : i < c && p++), "function" != typeof a.type && (a.__u |= 4)) : u != l && (u == l - 1 ? p-- : u == l + 1 ? p++ : (u > l ? p-- : p++, a.__u |= 4))) : e.__k[o] = null;
            if (d)
                for (o = 0; o < c; o++) null != (s = n[o]) && 0 == (2 & s.__u) && (s.__e == r && (r = dA(s)), function e(t, n, r) {
                    var i, o;
                    if (ds.unmount && ds.unmount(t), (i = t.ref) && (i.current && i.current != t.__e || dU(i, null, n)), null != (i = t.__c)) {
                        if (i.componentWillUnmount) try {
                            i.componentWillUnmount()
                        } catch (e) {
                            ds.__e(e, n)
                        }
                        i.base = i.__P = i.__n = null
                    }
                    if (i = t.__k)
                        for (o = 0; o < i.length; o++) i[o] && e(i[o], n, r || "function" != typeof t.type);
                    r || dT(t.__e), t.__c = t.__ = t.__e = void 0
                }(s, s));
            return r
        }(n, t, v, l, _), d = 0; d < _; d++) null != (f = n.__k[d]) && (p = -1 != f.__i && v[f.__i] || db, f.__i = d, g = d$(e, f, p, i, o, a, s, l, u, c), h = f.__e, f.ref && p.ref != f.ref && (p.ref && dU(p.ref, null, f), c.push(f.ref, f.__c || h, f)), null == m && null != h && (m = h), 4 & f.__u ? (l = function e(t, n, r) {
        var i, o;
        if ("function" == typeof t.type) {
            for (i = t.__k, o = 0; i && o < i.length; o++) i[o] && (i[o].__ = t, n = e(i[o], n, r));
            return n
        }
        t.__e != n && (n && t.type && !n.parentNode && (n = dA(t)), n = r.insertBefore(t.__e, n || null));
        do n = n && n.nextSibling; while (null != n && 8 == n.nodeType) return n
    }(f, l, e), p.__e && (p.__e = null)) : "function" == typeof f.type && void 0 !== g ? l = g : h && (l = h.nextSibling), f.__u &= -7);
    return n.__e = m, l
}

function dO(e, t, n) {
    "-" == t[0] ? e.setProperty(t, null == n ? "" : n) : e[t] = null == n ? "" : "number" != typeof n || dw.test(t) ? n : n + "px"
}

function dD(e, t, n, r, i) {
    var o, a;
    e: if ("style" == t)
        if ("string" == typeof n) e.style.cssText = n;
        else {
            if ("string" == typeof r && (e.style.cssText = r = ""), r)
                for (t in r) n && t in n || dO(e.style, t, "");
            if (n)
                for (t in n) r && n[t] == r[t] || dO(e.style, t, n[t])
        }
    else if ("o" == t[0] && "n" == t[1]) o = t != (t = t.replace(dg, "$1")), t = (a = t.toLowerCase()) in e || "onFocusOut" == t || "onFocusIn" == t ? a.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r ? n[dm] = r[dm] : (n[dm] = dv, e.addEventListener(t, o ? dy : d_, o)) : e.removeEventListener(t, o ? dy : d_, o);
    else {
        if ("http://www.w3.org/2000/svg" == i) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" != t && "height" != t && "href" != t && "list" != t && "form" != t && "tabIndex" != t && "download" != t && "rowSpan" != t && "colSpan" != t && "role" != t && "popover" != t && t in e) try {
            e[t] = null == n ? "" : n;
            break e
        } catch (e) {}
        "function" == typeof n || (null == n || !1 === n && "-" != t[4] ? e.removeAttribute(t) : e.setAttribute(t, "popover" == t && 1 == n ? "" : n))
    }
}

function dL(e) {
    return function(t) {
        if (this.l) {
            var n = this.l[t.type + e];
            if (null == t[dh]) t[dh] = dv++;
            else if (t[dh] < n[dm]) return;
            return n(ds.event ? ds.event(t) : t)
        }
    }
}

function d$(e, t, n, r, i, o, a, s, l, u) {
    var c, d, p, f, h, m, g, v, _, y, b, S, w, E, k, T, I = t.type;
    if (void 0 !== t.constructor) return null;
    128 & n.__u && (l = !!(32 & n.__u), o = [s = t.__e = n.__e]), (c = ds.__b) && c(t);
    e: if ("function" == typeof I) {
        d = a.length;
        try {
            if (_ = t.props, y = I.prototype && I.prototype.render, b = (c = I.contextType) && r[c.__c], S = c ? b ? b.props.value : c.__ : r, n.__c ? v = (p = t.__c = n.__c).__ = p.__E : (y ? t.__c = p = new I(_, S) : (t.__c = p = new dC(_, S), p.constructor = I, p.render = dB), b && b.sub(p), p.state || (p.state = {}), p.__n = r, f = p.__d = !0, p.__h = [], p._sb = []), y && null == p.__s && (p.__s = p.state), y && null != I.getDerivedStateFromProps && (p.__s == p.state && (p.__s = dk({}, p.__s)), dk(p.__s, I.getDerivedStateFromProps(_, p.__s))), h = p.props, m = p.state, p.__v = t, f) y && null == I.getDerivedStateFromProps && null != p.componentWillMount && p.componentWillMount(), y && null != p.componentDidMount && p.__h.push(p.componentDidMount);
            else {
                if (y && null == I.getDerivedStateFromProps && _ !== h && null != p.componentWillReceiveProps && p.componentWillReceiveProps(_, S), t.__v == n.__v || !p.__e && null != p.shouldComponentUpdate && !1 === p.shouldComponentUpdate(_, p.__s, S)) {
                    t.__v != n.__v && (p.props = _, p.state = p.__s, p.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(e) {
                        e && (e.__ = t)
                    }), dS.push.apply(p.__h, p._sb), p._sb = [], p.__h.length && a.push(p), s = dA(n);
                    break e
                }
                null != p.componentWillUpdate && p.componentWillUpdate(_, p.__s, S), y && null != p.componentDidUpdate && p.__h.push(function() {
                    p.componentDidUpdate(h, m, g)
                })
            }
            if (p.context = S, p.props = _, p.__P = e, p.__e = !1, w = ds.__r, E = 0, y) p.state = p.__s, p.__d = !1, w && w(t), c = p.render(p.props, p.state, p.context), dS.push.apply(p.__h, p._sb), p._sb = [];
            else
                do p.__d = !1, w && w(t), c = p.render(p.props, p.state, p.context), p.state = p.__s; while (p.__d && ++E < 25) p.state = p.__s, null != p.getChildContext && (r = dk(dk({}, r), p.getChildContext())), y && !f && null != p.getSnapshotBeforeUpdate && (g = p.getSnapshotBeforeUpdate(h, m)), k = null != c && c.type === dx && null == c.key ? function e(t) {
                    return "object" != typeof t || null == t || t.__b > 0 ? t : dE(t) ? t.map(e) : void 0 !== t.constructor ? null : dk({}, t)
                }(c.props.children) : c, s = dN(e, dE(k) ? k : [k], t, n, r, i, o, a, s, l, u), p.base = t.__e, t.__u &= -161, p.__h.length && a.push(p), v && (p.__E = p.__ = null)
        } catch (e) {
            if (a.length = d, t.__v = null, l || null != o) {
                if (e.then) {
                    for (t.__u |= l ? 160 : 128; s && 8 == s.nodeType && s.nextSibling;) s = s.nextSibling;
                    null != o && (o[o.indexOf(s)] = null), t.__e = s
                } else if (null != o)
                    for (T = o.length; T--;) dT(o[T])
            } else t.__e = n.__e;
            null == t.__k && (t.__k = n.__k || []), e.then || function e(t) {
                t && (t.__c && (t.__c.__e = !0), t.__k && t.__k.some(e))
            }(t), ds.__e(e, t, n)
        }
    } else null == o && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : s = t.__e = function(e, t, n, r, i, o, a, s, l) {
        var u, c, d, p, f, h, m, g = n.props || db,
            v = t.props,
            _ = t.type;
        if ("svg" == _ ? i = "http://www.w3.org/2000/svg" : "math" == _ ? i = "http://www.w3.org/1998/Math/MathML" : i || (i = "http://www.w3.org/1999/xhtml"), null != o) {
            for (u = 0; u < o.length; u++)
                if ((f = o[u]) && "setAttribute" in f == !!_ && (_ ? f.localName == _ : 3 == f.nodeType)) {
                    e = f, o[u] = null;
                    break
                }
        }
        if (null == e) {
            if (null == _) return document.createTextNode(v);
            e = document.createElementNS(i, _, v.is && v), s && (ds.__m && ds.__m(t, o), s = !1), o = null
        }
        if (null == _) g === v || s && e.data == v || (e.data = v);
        else {
            if (o = "textarea" == _ && null != v.defaultValue ? null : o && da.call(e.childNodes), !s && null != o)
                for (g = {}, u = 0; u < e.attributes.length; u++) g[(f = e.attributes[u]).name] = f.value;
            for (u in g) f = g[u], "dangerouslySetInnerHTML" == u ? d = f : "children" == u || u in v || "value" == u && "defaultValue" in v || "checked" == u && "defaultChecked" in v || dD(e, u, null, f, i);
            for (u in v) f = v[u], "children" == u ? p = f : "dangerouslySetInnerHTML" == u ? c = f : "value" == u ? h = f : "checked" == u ? m = f : s && "function" != typeof f || g[u] === f || dD(e, u, f, g[u], i);
            if (c) s || d && (c.__html == d.__html || c.__html == e.innerHTML) || (e.innerHTML = c.__html), t.__k = [];
            else if (d && (e.innerHTML = ""), dN("template" == t.type ? e.content : e, dE(p) ? p : [p], t, n, r, "foreignObject" == _ ? "http://www.w3.org/1999/xhtml" : i, o, a, o ? o[0] : n.__k && dA(n, 0), s, l), null != o)
                for (u = o.length; u--;) dT(o[u]);
            s && "textarea" != _ || (u = "value", "progress" == _ && null == h ? e.removeAttribute("value") : null == h || h === e[u] && ("progress" != _ || h) && ("option" != _ || h == g[u]) || dD(e, u, h, g[u], i), u = "checked", null != m && m != e[u] && dD(e, u, m, g[u], i))
        }
        return e
    }(n.__e, t, n, r, i, o, a, l, u);
    return (c = ds.diffed) && c(t), 128 & t.__u ? void 0 : s
}

function dF(e, t, n) {
    for (var r = 0; r < n.length; r++) dU(n[r], n[++r], n[++r]);
    ds.__c && ds.__c(t, e), e.some(function(t) {
        try {
            e = t.__h, t.__h = [], e.some(function(e) {
                e.call(t)
            })
        } catch (e) {
            ds.__e(e, t.__v)
        }
    })
}

function dU(e, t, n) {
    try {
        if ("function" == typeof e) {
            var r = "function" == typeof e.__u;
            r && e.__u(), r && null == t || (e.__u = e(t))
        } else e.current = t
    } catch (e) {
        ds.__e(e, n)
    }
}

function dB(e, t, n) {
    return this.constructor(e, n)
}
da = dS.slice, ds = {
    __e: function(e, t, n, r) {
        for (var i, o, a; t = t.__;)
            if ((i = t.__c) && !i.__) try {
                if ((o = i.constructor) && null != o.getDerivedStateFromError && (i.setState(o.getDerivedStateFromError(e)), a = i.__d), null != i.componentDidCatch && (i.componentDidCatch(e, r || {}), a = i.__d), a) return i.__E = i
            } catch (t) {
                e = t
            }
        throw e
    }
}, dl = 0, dC.prototype.setState = function(e, t) {
    var n;
    n = null != this.__s && this.__s != this.state ? this.__s : this.__s = dk({}, this.state), "function" == typeof e && (e = e(dk({}, n), this.props)), e && dk(n, e), null != e && this.__v && (t && this._sb.push(t), dM(this))
}, dC.prototype.forceUpdate = function(e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), dM(this))
}, dC.prototype.render = dx, du = [], dd = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, dp = function(e, t) {
    return e.__v.__b - t.__v.__b
}, dP.__r = 0, dh = "__d" + (df = Math.random().toString(8)), dm = "__a" + df, dg = /(PointerCapture)$|Capture$/i, dv = 0, d_ = dL(!1), dy = dL(!0);
var dj, dW, dH, dz, dq = 0,
    dG = [],
    dV = ds,
    dY = dV.__b,
    dK = dV.__r,
    dJ = dV.diffed,
    dX = dV.__c,
    dQ = dV.unmount,
    dZ = dV.__;

function d0(e, t) {
    dV.__h && dV.__h(dW, e, dq || t), dq = 0;
    var n = dW.__H || (dW.__H = {
        __: [],
        __h: []
    });
    return e >= n.__.length && n.__.push({}), n.__[e]
}

function d1(e) {
    return dq = 1, d2(pt, e)
}

function d2(e, t, n) {
    var r = d0(dj++, 2);
    if (r.t = e, !r.__c && (r.__ = [n ? n(t) : pt(void 0, t), function(e) {
            var t = r.__N ? r.__N[0] : r.__[0],
                n = r.t(t, e);
            t !== n && (r.__N = [n, r.__[1]], r.__c.setState({}))
        }], r.__c = dW, !dW.__f)) {
        var i = function(e, t, n) {
            if (!r.__c.__H) return !0;
            var i = !1,
                a = r.__c.props !== e;
            if (r.__c.__H.__.some(function(e) {
                    if (e.__N) {
                        i = !0;
                        var t = e.__[0];
                        e.__ = e.__N, e.__N = void 0, t !== e.__[0] && (a = !0)
                    }
                }), o) {
                var s = o.call(this, e, t, n);
                return i ? s || a : s
            }
            return !i || a
        };
        dW.__f = !0;
        var o = dW.shouldComponentUpdate,
            a = dW.componentWillUpdate;
        dW.componentWillUpdate = function(e, t, n) {
            if (this.__e) {
                var r = o;
                o = void 0, i(e, t, n), o = r
            }
            a && a.call(this, e, t, n)
        }, dW.shouldComponentUpdate = i
    }
    return r.__N || r.__
}

function d3(e, t) {
    var n = d0(dj++, 4);
    !dV.__s && pe(n.__H, t) && (n.__ = e, n.u = t, dW.__h.push(n))
}

function d5(e, t) {
    var n = d0(dj++, 7);
    return pe(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__
}

function d4(e, t) {
    return dq = 8, d5(function() {
        return e
    }, t)
}

function d6() {
    for (var e; e = dG.shift();) {
        var t = e.__H;
        if (e.__P && t) try {
            t.__h.some(d7), t.__h.some(d9), t.__h = []
        } catch (n) {
            t.__h = [], dV.__e(n, e.__v)
        }
    }
}
dV.__b = function(e) {
    dW = null, dY && dY(e)
}, dV.__ = function(e, t) {
    e && t.__k && t.__k.__m && (e.__m = t.__k.__m), dZ && dZ(e, t)
}, dV.__r = function(e) {
    dK && dK(e), dj = 0;
    var t = (dW = e.__c).__H;
    t && (dH === dW ? (t.__h = [], dW.__h = [], t.__.some(function(e) {
        e.__N && (e.__ = e.__N), e.u = e.__N = void 0
    })) : (t.__h.some(d7), t.__h.some(d9), t.__h = [], dj = 0)), dH = dW
}, dV.diffed = function(e) {
    dJ && dJ(e);
    var t = e.__c;
    t && t.__H && (t.__H.__h.length && (1 !== dG.push(t) && dz === dV.requestAnimationFrame || ((dz = dV.requestAnimationFrame) || function(e) {
        var t, n = function() {
                clearTimeout(r), d8 && cancelAnimationFrame(t), setTimeout(e)
            },
            r = setTimeout(n, 35);
        d8 && (t = requestAnimationFrame(n))
    })(d6)), t.__H.__.some(function(e) {
        e.u && (e.__H = e.u, e.u = void 0)
    })), dH = dW = null
}, dV.__c = function(e, t) {
    t.some(function(e) {
        try {
            e.__h.some(d7), e.__h = e.__h.filter(function(e) {
                return !e.__ || d9(e)
            })
        } catch (n) {
            t.some(function(e) {
                e.__h && (e.__h = [])
            }), t = [], dV.__e(n, e.__v)
        }
    }), dX && dX(e, t)
}, dV.unmount = function(e) {
    dQ && dQ(e);
    var t, n = e.__c;
    n && n.__H && (n.__H.__.some(function(e) {
        try {
            d7(e)
        } catch (e) {
            t = e
        }
    }), n.__H = void 0, t && dV.__e(t, n.__v))
};
var d8 = "function" == typeof requestAnimationFrame;

function d7(e) {
    var t = dW,
        n = e.__c;
    "function" == typeof n && (e.__c = void 0, n()), dW = t
}

function d9(e) {
    var t = dW;
    e.__c = e.__(), dW = t
}

function pe(e, t) {
    return !e || e.length !== t.length || t.some(function(t, n) {
        return t !== e[n]
    })
}

function pt(e, t) {
    return "function" == typeof t ? t(e) : t
}
let pn = Object.defineProperty({
    __proto__: null,
    useCallback: d4,
    useContext: function(e) {
        var t = dW.context[e.__c],
            n = d0(dj++, 9);
        return n.c = e, t ? (null == n.__ && (n.__ = !0, t.sub(dW)), t.props.value) : e.__
    },
    useDebugValue: function(e, t) {
        dV.useDebugValue && dV.useDebugValue(t ? t(e) : e)
    },
    useEffect: function(e, t) {
        var n = d0(dj++, 3);
        !dV.__s && pe(n.__H, t) && (n.__ = e, n.u = t, dW.__H.__h.push(n))
    },
    useErrorBoundary: function(e) {
        var t = d0(dj++, 10),
            n = d1();
        return t.__ = e, dW.componentDidCatch || (dW.componentDidCatch = function(e, r) {
            t.__ && t.__(e, r), n[1](e)
        }), [n[0], function() {
            n[1](void 0)
        }]
    },
    useId: function() {
        var e = d0(dj++, 11);
        if (!e.__) {
            for (var t = dW.__v; null !== t && !t.__m && null !== t.__;) t = t.__;
            var n = t.__m || (t.__m = [0, 0]);
            e.__ = "P" + n[0] + "-" + n[1]++
        }
        return e.__
    },
    useImperativeHandle: function(e, t, n) {
        dq = 6, d3(function() {
            if ("function" == typeof e) {
                var n = e(t());
                return function() {
                    e(null), n && "function" == typeof n && n()
                }
            }
            if (e) return e.current = t(),
                function() {
                    return e.current = null
                }
        }, null == n ? n : n.concat(e))
    },
    useLayoutEffect: d3,
    useMemo: d5,
    useReducer: d2,
    useRef: function(e) {
        return dq = 5, d5(function() {
            return {
                current: e
            }
        }, [])
    },
    useState: d1
}, Symbol.toStringTag, {
    value: "Module"
});

function pr(e) {
    let {
        options: t
    } = e, n = d5(() => {
        let e, t;
        return {
            __html: (e = c8(cY.createElementNS("http://www.w3.org/2000/svg", "svg"), {
                width: "32",
                height: "30",
                viewBox: "0 0 72 66",
                fill: "inherit"
            }), t = c8(cY.createElementNS("http://www.w3.org/2000/svg", "path"), {
                transform: "translate(11, 11)",
                d: "M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z"
            }), e.appendChild(t), e).outerHTML
        }
    }, []);
    return dI("h2", {
        class: "dialog__header"
    }, dI("span", {
        class: "dialog__title"
    }, t.formTitle), t.showBranding ? dI("a", {
        class: "brand-link",
        target: "_blank",
        href: "https://sentry.io/welcome/",
        title: "Powered by Sentry",
        rel: "noopener noreferrer",
        dangerouslySetInnerHTML: n
    }) : null)
}

function pi(e, t) {
    let n = e.get(t);
    return "string" == typeof n ? n.trim() : ""
}

function po(e) {
    let {
        options: t,
        defaultEmail: n,
        defaultName: r,
        onFormClose: i,
        onSubmit: o,
        onSubmitSuccess: a,
        onSubmitError: s,
        showEmail: l,
        showName: u,
        screenshotInput: c
    } = e, {
        tags: d,
        addScreenshotButtonLabel: p,
        removeScreenshotButtonLabel: f,
        cancelButtonLabel: h,
        emailLabel: m,
        emailPlaceholder: g,
        isEmailRequired: v,
        isNameRequired: _,
        messageLabel: y,
        messagePlaceholder: b,
        nameLabel: S,
        namePlaceholder: w,
        submitButtonLabel: E,
        isRequiredLabel: k
    } = t, [T, I] = d1(!1), [R, x] = d1(null), [C, A] = d1(!1), M = null == c ? void 0 : c.input, [P, N] = d1(null), O = d4(e => {
        N(e), A(!1)
    }, []), D = d4(e => {
        var t;
        let n, r = (n = [], (t = {
            emailLabel: m,
            isEmailRequired: v,
            isNameRequired: _,
            messageLabel: y,
            nameLabel: S
        }).isNameRequired && !e.name && n.push(t.nameLabel), t.isEmailRequired && !e.email && n.push(t.emailLabel), e.message || n.push(t.messageLabel), n);
        return r.length > 0 ? x(`Please enter in the following required fields: ${r.join(", ")}`) : x(null), 0 === r.length
    }, [m, v, _, y, S]);
    return dI("form", {
        class: "form",
        onSubmit: d4(async e => {
            I(!0);
            try {
                if (e.preventDefault(), !(e.target instanceof HTMLFormElement)) return;
                let t = new FormData(e.target),
                    n = await (c && C ? c.value() : void 0),
                    r = {
                        name: pi(t, "name"),
                        email: pi(t, "email"),
                        message: pi(t, "message"),
                        attachments: n ? [n] : void 0
                    };
                if (!D(r)) return;
                try {
                    let e = await o({
                        name: r.name,
                        email: r.email,
                        message: r.message,
                        source: "widget",
                        tags: d
                    }, {
                        attachments: r.attachments
                    });
                    a(r, e)
                } catch (e) {
                    c4 && em.error(e), x(e.message), s(e)
                }
            } finally {
                I(!1)
            }
        }, [c && C, a, s])
    }, M && C ? dI(M, {
        onError: O
    }) : null, dI("fieldset", {
        class: "form__right",
        "data-sentry-feedback": !0,
        disabled: T
    }, dI("div", {
        class: "form__top"
    }, R ? dI("div", {
        class: "form__error-container"
    }, R) : null, u ? dI("label", {
        for: "name",
        class: "form__label"
    }, dI(pa, {
        label: S,
        isRequiredLabel: k,
        isRequired: _
    }), dI("input", {
        class: "form__input",
        defaultValue: r,
        id: "name",
        name: "name",
        placeholder: w,
        required: _,
        type: "text"
    })) : dI("input", {
        "aria-hidden": !0,
        value: r,
        name: "name",
        type: "hidden"
    }), l ? dI("label", {
        for: "email",
        class: "form__label"
    }, dI(pa, {
        label: m,
        isRequiredLabel: k,
        isRequired: v
    }), dI("input", {
        class: "form__input",
        defaultValue: n,
        id: "email",
        name: "email",
        placeholder: g,
        required: v,
        type: "email"
    })) : dI("input", {
        "aria-hidden": !0,
        value: n,
        name: "email",
        type: "hidden"
    }), dI("label", {
        for: "message",
        class: "form__label"
    }, dI(pa, {
        label: y,
        isRequiredLabel: k,
        isRequired: !0
    }), dI("textarea", {
        autoFocus: !0,
        class: "form__input form__input--textarea",
        id: "message",
        name: "message",
        placeholder: b,
        required: !0,
        rows: 5
    })), M ? dI("label", {
        for: "screenshot",
        class: "form__label"
    }, dI("button", {
        class: "btn btn--default",
        disabled: T,
        type: "button",
        onClick: () => {
            N(null), A(e => !e)
        }
    }, C ? f : p), P ? dI("div", {
        class: "form__error-container"
    }, P.message) : null) : null), dI("div", {
        class: "btn-group"
    }, dI("button", {
        class: "btn btn--primary",
        disabled: T,
        type: "submit"
    }, E), dI("button", {
        class: "btn btn--default",
        disabled: T,
        type: "button",
        onClick: i
    }, h))))
}

function pa(e) {
    let {
        label: t,
        isRequired: n,
        isRequiredLabel: r
    } = e;
    return dI("span", {
        class: "form__label__text"
    }, t, n && dI("span", {
        class: "form__label__text--required"
    }, r))
}

function ps(e) {
    let {
        open: t,
        onFormSubmitted: n,
        ...r
    } = e, i = r.options, o = d5(() => {
        let e, t, n, r, i, o, a, s;
        return {
            __html: (t = c8((e = e => ei.document.createElementNS("http://www.w3.org/2000/svg", e))("svg"), {
                width: "16",
                height: "17",
                viewBox: "0 0 16 17",
                fill: "inherit"
            }), n = c8(e("g"), {
                clipPath: "url(#clip0_57_156)"
            }), r = c8(e("path"), {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M3.55544 15.1518C4.87103 16.0308 6.41775 16.5 8 16.5C10.1217 16.5 12.1566 15.6571 13.6569 14.1569C15.1571 12.6566 16 10.6217 16 8.5C16 6.91775 15.5308 5.37103 14.6518 4.05544C13.7727 2.73985 12.5233 1.71447 11.0615 1.10897C9.59966 0.503466 7.99113 0.34504 6.43928 0.653721C4.88743 0.962403 3.46197 1.72433 2.34315 2.84315C1.22433 3.96197 0.462403 5.38743 0.153721 6.93928C-0.15496 8.49113 0.00346625 10.0997 0.608967 11.5615C1.21447 13.0233 2.23985 14.2727 3.55544 15.1518ZM4.40546 3.1204C5.46945 2.40946 6.72036 2.03 8 2.03C9.71595 2.03 11.3616 2.71166 12.575 3.92502C13.7883 5.13838 14.47 6.78405 14.47 8.5C14.47 9.77965 14.0905 11.0306 13.3796 12.0945C12.6687 13.1585 11.6582 13.9878 10.476 14.4775C9.29373 14.9672 7.99283 15.0953 6.73777 14.8457C5.48271 14.596 4.32987 13.9798 3.42502 13.075C2.52018 12.1701 1.90397 11.0173 1.65432 9.76224C1.40468 8.50718 1.5328 7.20628 2.0225 6.02404C2.5122 4.8418 3.34148 3.83133 4.40546 3.1204Z"
            }), i = c8(e("path"), {
                d: "M6.68775 12.4297C6.78586 12.4745 6.89218 12.4984 7 12.5C7.11275 12.4955 7.22315 12.4664 7.32337 12.4145C7.4236 12.3627 7.51121 12.2894 7.58 12.2L12 5.63999C12.0848 5.47724 12.1071 5.28902 12.0625 5.11098C12.0178 4.93294 11.9095 4.77744 11.7579 4.67392C11.6064 4.57041 11.4221 4.52608 11.24 4.54931C11.0579 4.57254 10.8907 4.66173 10.77 4.79999L6.88 10.57L5.13 8.56999C5.06508 8.49566 4.98613 8.43488 4.89768 8.39111C4.80922 8.34735 4.713 8.32148 4.61453 8.31498C4.51605 8.30847 4.41727 8.32147 4.32382 8.35322C4.23038 8.38497 4.14413 8.43484 4.07 8.49999C3.92511 8.63217 3.83692 8.81523 3.82387 9.01092C3.81083 9.2066 3.87393 9.39976 4 9.54999L6.43 12.24C6.50187 12.3204 6.58964 12.385 6.68775 12.4297Z"
            }), t.appendChild(n).append(i, r), o = e("defs"), a = c8(e("clipPath"), {
                id: "clip0_57_156"
            }), s = c8(e("rect"), {
                width: "16",
                height: "16",
                fill: "white",
                transform: "translate(0 0.5)"
            }), a.appendChild(s), o.appendChild(a), t.appendChild(o).appendChild(a).appendChild(s), t).outerHTML
        }
    }, []), [a, s] = d1(null), l = d4(() => {
        a && (clearTimeout(a), s(null)), n()
    }, [a]), u = d4((e, t) => {
        r.onSubmitSuccess(e, t), s(setTimeout(() => {
            n(), s(null)
        }, 5e3))
    }, [n]);
    return dI(dx, null, a ? dI("div", {
        class: "success__position",
        onClick: l
    }, dI("div", {
        class: "success__content"
    }, i.successMessageText, dI("span", {
        class: "success__icon",
        dangerouslySetInnerHTML: o
    }))) : dI("dialog", {
        class: "dialog",
        onClick: i.onFormClose,
        open: t
    }, dI("div", {
        class: "dialog__position"
    }, dI("div", {
        class: "dialog__content",
        onClick: e => {
            e.stopPropagation()
        }
    }, dI(pr, {
        options: i
    }), dI(po, { ...r,
        onSubmitSuccess: u
    })))))
}
let pl = `
.dialog {
  position: fixed;
  z-index: var(--z-index);
  margin: 0;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  height: 100vh;
  width: 100vw;

  color: var(--dialog-color, var(--foreground));
  fill: var(--dialog-color, var(--foreground));
  line-height: 1.75em;

  background-color: rgba(0, 0, 0, 0.05);
  border: none;
  inset: 0;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
}

.dialog__position {
  position: fixed;
  z-index: var(--z-index);
  inset: var(--dialog-inset);
  padding: var(--page-margin);
  display: flex;
  max-height: calc(100vh - (2 * var(--page-margin)));
}
@media (max-width: 600px) {
  .dialog__position {
    inset: var(--page-margin);
    padding: 0;
  }
}

.dialog__position:has(.editor) {
  inset: var(--page-margin);
  padding: 0;
}

.dialog:not([open]) {
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
}
.dialog:not([open]) .dialog__content {
  transform: translate(0, -16px) scale(0.98);
}

.dialog__content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: var(--dialog-padding, 24px);
  max-width: 100%;
  width: 100%;
  max-height: 100%;
  overflow: auto;

  background: var(--dialog-background, var(--background));
  border-radius: var(--dialog-border-radius, 20px);
  border: var(--dialog-border, var(--border));
  box-shadow: var(--dialog-box-shadow, var(--box-shadow));
  transform: translate(0, 0) scale(1);
  transition: transform 0.2s ease-in-out;
}

`,
    pu = `
.dialog__header {
  display: flex;
  gap: 4px;
  justify-content: space-between;
  font-weight: var(--dialog-header-weight, 600);
  margin: 0;
}
.dialog__title {
  align-self: center;
  width: var(--form-width, 272px);
}

@media (max-width: 600px) {
  .dialog__title {
    width: auto;
  }
}

.dialog__position:has(.editor) .dialog__title {
  width: auto;
}


.brand-link {
  display: inline-flex;
}
.brand-link:focus-visible {
  outline: var(--outline);
}
`,
    pc = `
.form {
  display: flex;
  overflow: auto;
  flex-direction: row;
  gap: 16px;
  flex: 1 0;
}

.form fieldset {
  border: none;
  margin: 0;
  padding: 0;
}

.form__right {
  flex: 0 0 auto;
  display: flex;
  overflow: auto;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  width: var(--form-width, 100%);
}

.dialog__position:has(.editor) .form__right {
  width: var(--form-width, 272px);
}

.form__top {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form__error-container {
  color: var(--error-color);
  fill: var(--error-color);
  width: 0;
  min-width: 100%;
  overflow-wrap: break-word;
}

.form__label {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0px;
}

.form__label__text {
  display: flex;
  gap: 4px;
  align-items: center;
}

.form__label__text--required {
  font-size: 0.85em;
}

.form__input {
  font-family: inherit;
  line-height: inherit;
  background: transparent;
  box-sizing: border-box;
  border: var(--input-border, var(--border));
  border-radius: var(--input-border-radius, 6px);
  color: var(--input-color, inherit);
  fill: var(--input-color, inherit);
  font-size: var(--input-font-size, inherit);
  font-weight: var(--input-font-weight, 500);
  padding: 6px 12px;
}

.form__input::placeholder {
  opacity: 0.65;
  color: var(--input-placeholder-color, inherit);
  filter: var(--interactive-filter);
}

.form__input:focus-visible {
  outline: var(--input-focus-outline, var(--outline));
}

.form__input--textarea {
  font-family: inherit;
  resize: vertical;
}

.error {
  color: var(--error-color);
  fill: var(--error-color);
}
`,
    pd = `
.btn-group {
  display: grid;
  gap: 8px;
}

.btn {
  line-height: inherit;
  border: var(--button-border, var(--border));
  border-radius: var(--button-border-radius, 6px);
  cursor: pointer;
  font-family: inherit;
  font-size: var(--button-font-size, inherit);
  font-weight: var(--button-font-weight, 600);
  padding: var(--button-padding, 6px 16px);
}
.btn[disabled] {
  opacity: 0.6;
  pointer-events: none;
}

.btn--primary {
  color: var(--button-primary-color, var(--accent-foreground));
  fill: var(--button-primary-color, var(--accent-foreground));
  background: var(--button-primary-background, var(--accent-background));
  border: var(--button-primary-border, var(--border));
  border-radius: var(--button-primary-border-radius, 6px);
  font-weight: var(--button-primary-font-weight, 500);
}
.btn--primary:hover {
  color: var(--button-primary-hover-color, var(--accent-foreground));
  fill: var(--button-primary-hover-color, var(--accent-foreground));
  background: var(--button-primary-hover-background, var(--accent-background));
  filter: var(--interactive-filter);
}
.btn--primary:focus-visible {
  background: var(--button-primary-hover-background, var(--accent-background));
  filter: var(--interactive-filter);
  outline: var(--button-primary-focus-outline, var(--outline));
}

.btn--default {
  color: var(--button-color, var(--foreground));
  fill: var(--button-color, var(--foreground));
  background: var(--button-background, var(--background));
  border: var(--button-border, var(--border));
  border-radius: var(--button-border-radius, 6px);
  font-weight: var(--button-font-weight, 500);
}
.btn--default:hover {
  color: var(--button-color, var(--foreground));
  fill: var(--button-color, var(--foreground));
  background: var(--button-hover-background, var(--background));
  filter: var(--interactive-filter);
}
.btn--default:focus-visible {
  background: var(--button-hover-background, var(--background));
  filter: var(--interactive-filter);
  outline: var(--button-focus-outline, var(--outline));
}
`,
    pp = `
.success__position {
  position: fixed;
  inset: var(--dialog-inset);
  padding: var(--page-margin);
  z-index: var(--z-index);
}
.success__content {
  background: var(--success-background, var(--background));
  border: var(--success-border, var(--border));
  border-radius: var(--success-border-radius, 1.7em/50%);
  box-shadow: var(--success-box-shadow, var(--box-shadow));
  font-weight: var(--success-font-weight, 600);
  color: var(--success-color);
  fill: var(--success-color);
  padding: 12px 24px;
  line-height: 1.75em;

  display: grid;
  align-items: center;
  grid-auto-flow: column;
  gap: 6px;
  cursor: default;
}

.success__icon {
  display: flex;
}
`,
    pf = () => ({
        name: "FeedbackModal",
        setupOnce() {},
        createDialog: e => {
            var t;
            let n, r, i, o, {
                    options: a,
                    screenshotIntegration: s,
                    sendFeedback: l,
                    shadow: u
                } = e,
                c = a.useSentryUser,
                d = (n = tT().getUser(), r = tI().getUser(), i = tR().getUser(), n && Object.keys(n).length ? n : r && Object.keys(r).length ? r : i),
                p = cY.createElement("div"),
                f = (t = a.styleNonce, (o = cY.createElement("style")).textContent = `
:host {
  --dialog-inset: var(--inset);
}

${pl}
${pu}
${pc}
${pd}
${pp}
`, t && o.setAttribute("nonce", t), o),
                h = "",
                m = {
                    get el() {
                        return p
                    },
                    appendToDom() {
                        u.contains(f) || u.contains(p) || (u.appendChild(f), u.appendChild(p))
                    },
                    removeFromDom() {
                        p.remove(), f.remove(), cY.body.style.overflow = h
                    },
                    open() {
                        var e, t;
                        v(!0), null == (e = a.onFormOpen) || e.call(a), null == (t = tA()) || t.emit("openFeedbackWidget"), h = cY.body.style.overflow, cY.body.style.overflow = "hidden"
                    },
                    close() {
                        v(!1), cY.body.style.overflow = h
                    }
                },
                g = null == s ? void 0 : s.createInput({
                    h: dI,
                    hooks: pn,
                    dialog: m,
                    options: a
                }),
                v = e => {
                    var t, n, r, i, o;
                    t = dI(ps, {
                        options: a,
                        screenshotInput: g,
                        showName: a.showName || a.isNameRequired,
                        showEmail: a.showEmail || a.isEmailRequired,
                        defaultName: String(c && (null == d ? void 0 : d[c.name]) || ""),
                        defaultEmail: String(c && (null == d ? void 0 : d[c.email]) || ""),
                        onFormClose: () => {
                            var e;
                            v(!1), null == (e = a.onFormClose) || e.call(a)
                        },
                        onSubmit: l,
                        onSubmitSuccess: (e, t) => {
                            var n;
                            v(!1), null == (n = a.onSubmitSuccess) || n.call(a, e, t)
                        },
                        onSubmitError: e => {
                            var t;
                            null == (t = a.onSubmitError) || t.call(a, e)
                        },
                        onFormSubmitted: () => {
                            var e;
                            null == (e = a.onFormSubmitted) || e.call(a)
                        },
                        open: e
                    }), (n = p) == document && (n = document.documentElement), ds.__ && ds.__(t, n), r = n.__k, i = [], o = [], d$(n, t = n.__k = dI(dx, null, [t]), r || db, db, n.namespaceURI, r ? null : n.firstChild ? da.call(n.childNodes) : null, i, r ? r.__e : n.firstChild, !1, o), dF(i, t, o), t.props.children = null
                };
            return m
        }
    });

function ph(e, t, n) {
    if (!e) return;
    let r = e.getContext("2d", t);
    r && n(e, r)
}

function pm(e, t) {
    ph(e, {
        alpha: !0
    }, (e, n) => {
        n.drawImage(t, 0, 0, t.width, t.height, 0, 0, e.width, e.height)
    })
}

function pg(e, t, n) {
    ph(e, {
        alpha: !0
    }, (e, r) => {
        n.length && (r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, e.width, e.height)), n.forEach(e => {
            switch (e.type) {
                case "highlight":
                    r.save(), r.shadowColor = "rgba(0, 0, 0, 0.7)", r.shadowBlur = 50, r.fillStyle = t, r.fillRect(e.x - 1, e.y - 1, e.w + 2, e.h + 2), r.clearRect(e.x, e.y, e.w, e.h), r.restore();
                    break;
                case "hide":
                    r.fillStyle = "rgb(0, 0, 0)", r.fillRect(e.x, e.y, e.w, e.h)
            }
        })
    })
}
let pv = () => ({
        name: "FeedbackScreenshot",
        setupOnce() {},
        createInput: e => {
            let {
                h: t,
                hooks: n,
                dialog: r,
                options: i
            } = e, o = cY.createElement("canvas");
            return {
                input: function(e) {
                    var t;
                    let n, r, i, {
                            h: o,
                            hooks: a,
                            outputBuffer: s,
                            dialog: l,
                            options: u
                        } = e,
                        c = function(e) {
                            let {
                                hooks: t
                            } = e;
                            return function(e) {
                                let {
                                    onBeforeScreenshot: n,
                                    onScreenshot: r,
                                    onAfterScreenshot: i,
                                    onError: o
                                } = e, a = function() {
                                    let [e, n] = t.useState(ei.devicePixelRatio ?? 1);
                                    return t.useEffect(() => {
                                        let e = () => {
                                                n(ei.devicePixelRatio)
                                            },
                                            t = matchMedia(`(resolution: ${ei.devicePixelRatio}dppx)`);
                                        return t.addEventListener("change", e), () => {
                                            t.removeEventListener("change", e)
                                        }
                                    }, []), e
                                }();
                                t.useEffect(() => {
                                    (async () => {
                                        n();
                                        let e = await cK.mediaDevices.getDisplayMedia({
                                                video: {
                                                    width: ei.innerWidth * a,
                                                    height: ei.innerHeight * a
                                                },
                                                audio: !1,
                                                monitorTypeSurfaces: "exclude",
                                                preferCurrentTab: !0,
                                                selfBrowserSurface: "include",
                                                surfaceSwitching: "exclude"
                                            }),
                                            t = cY.createElement("video");
                                        await new Promise((n, i) => {
                                            t.srcObject = e, t.onloadedmetadata = () => {
                                                r(t, a), e.getTracks().forEach(e => e.stop()), n()
                                            }, t.play().catch(i)
                                        }), i()
                                    })().catch(o)
                                }, [])
                            }
                        }({
                            hooks: a
                        }),
                        d = function(e) {
                            let {
                                h: t
                            } = e;
                            return function(e) {
                                let {
                                    action: n,
                                    setAction: r,
                                    options: i
                                } = e;
                                return t("div", {
                                    class: "editor__tool-container"
                                }, t("div", {
                                    class: "editor__tool-bar"
                                }, t("button", {
                                    type: "button",
                                    class: `editor__tool ${"highlight"===n?"editor__tool--active":""}`,
                                    onClick: () => {
                                        r("highlight" === n ? "" : "highlight")
                                    }
                                }, i.highlightToolText), t("button", {
                                    type: "button",
                                    class: `editor__tool ${"hide"===n?"editor__tool--active":""}`,
                                    onClick: () => {
                                        r("hide" === n ? "" : "hide")
                                    }
                                }, i.hideToolText)))
                            }
                        }({
                            h: o
                        }),
                        p = function(e) {
                            let {
                                h: t
                            } = e;
                            return function() {
                                return t("svg", {
                                    "data-test-id": "icon-close",
                                    viewBox: "0 0 16 16",
                                    fill: "#2B2233",
                                    height: "25px",
                                    width: "25px"
                                }, t("circle", {
                                    r: "7",
                                    cx: "8",
                                    cy: "8",
                                    fill: "white"
                                }), t("path", {
                                    strokeWidth: "1.5",
                                    d: "M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16ZM8,1.53A6.47,6.47,0,1,0,14.47,8,6.47,6.47,0,0,0,8,1.53Z"
                                }), t("path", {
                                    strokeWidth: "1.5",
                                    d: "M5.34,11.41a.71.71,0,0,1-.53-.22.74.74,0,0,1,0-1.06l5.32-5.32a.75.75,0,0,1,1.06,1.06L5.87,11.19A.74.74,0,0,1,5.34,11.41Z"
                                }), t("path", {
                                    strokeWidth: "1.5",
                                    d: "M10.66,11.41a.74.74,0,0,1-.53-.22L4.81,5.87A.75.75,0,0,1,5.87,4.81l5.32,5.32a.74.74,0,0,1,0,1.06A.71.71,0,0,1,10.66,11.41Z"
                                }))
                            }
                        }({
                            h: o
                        }),
                        f = {
                            __html: (t = u.styleNonce, n = cY.createElement("style"), r = "#1A141F", i = "#302735", n.textContent = `
.editor {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

.editor__image-container {
  justify-items: center;
  padding: 15px;
  position: relative;
  height: 100%;
  border-radius: var(--menu-border-radius, 6px);

  background-color: ${r};
  background-image: repeating-linear-gradient(
      -145deg,
      transparent,
      transparent 8px,
      ${r} 8px,
      ${r} 11px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 15px,
      ${i} 15px,
      ${i} 16px
    );
}

.editor__canvas-container {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.editor__canvas-container > * {
  object-fit: contain;
  position: absolute;
}

.editor__tool-container {
  padding-top: 8px;
  display: flex;
  justify-content: center;
}

.editor__tool-bar {
  display: flex;
  gap: 8px;
}

.editor__tool {
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  border: var(--button-border, var(--border));
  border-radius: var(--button-border-radius, 6px);
  background: var(--button-background, var(--background));
  color: var(--button-color, var(--foreground));
}

.editor__tool--active {
  background: var(--button-primary-background, var(--accent-background));
  color: var(--button-primary-color, var(--accent-foreground));
}

.editor__rect {
  position: absolute;
  z-index: 2;
}

.editor__rect button {
  opacity: 0;
  position: absolute;
  top: -12px;
  right: -12px;
  cursor: pointer;
  padding: 0;
  z-index: 3;
  border: none;
  background: none;
}

.editor__rect:hover button {
  opacity: 1;
}
`, t && n.setAttribute("nonce", t), n).innerText
                        },
                        h = l.el.style,
                        m = e => {
                            let {
                                screenshot: t
                            } = e, [n, r] = a.useState("highlight"), [i, l] = a.useState([]), c = a.useRef(null), h = a.useRef(null), m = a.useRef(null), g = a.useRef(null), [v, _] = a.useState(1), y = a.useMemo(() => {
                                let e = cY.getElementById(u.id);
                                if (!e) return "white";
                                let t = getComputedStyle(e);
                                return t.getPropertyValue("--button-primary-background") || t.getPropertyValue("--accent-background")
                            }, [u.id]);
                            a.useLayoutEffect(() => {
                                let e = () => {
                                    let n = c.current;
                                    n && (ph(t.canvas, {
                                        alpha: !1
                                    }, e => {
                                        _(Math.min(n.clientWidth / e.width, n.clientHeight / e.height))
                                    }), (0 === n.clientHeight || 0 === n.clientWidth) && setTimeout(e, 0))
                                };
                                return e(), ei.addEventListener("resize", e), () => {
                                    ei.removeEventListener("resize", e)
                                }
                            }, [t]);
                            let b = a.useCallback((e, n) => {
                                ph(e, {
                                    alpha: !0
                                }, (e, r) => {
                                    r.scale(n, n), e.width = t.canvas.width, e.height = t.canvas.height
                                })
                            }, [t]);
                            a.useEffect(() => {
                                b(h.current, t.dpi), pm(h.current, t.canvas)
                            }, [t]), a.useEffect(() => {
                                b(m.current, t.dpi), ph(m.current, {
                                    alpha: !0
                                }, (e, t) => {
                                    t.clearRect(0, 0, e.width, e.height)
                                }), pg(m.current, y, i)
                            }, [i, y]), a.useEffect(() => {
                                b(s, t.dpi), pm(s, t.canvas), ph(cY.createElement("canvas"), {
                                    alpha: !0
                                }, (e, n) => {
                                    n.scale(t.dpi, t.dpi), e.width = t.canvas.width, e.height = t.canvas.height, pg(e, y, i), pm(s, e)
                                })
                            }, [i, t, y]);
                            let S = a.useCallback(e => t => {
                                    t.preventDefault(), t.stopPropagation(), l(t => {
                                        let n = [...t];
                                        return n.splice(e, 1), n
                                    })
                                }, []),
                                w = {
                                    width: `${t.canvas.width*v}px`,
                                    height: `${t.canvas.height*v}px`
                                },
                                E = e => {
                                    e.stopPropagation()
                                };
                            return o("div", {
                                class: "editor"
                            }, o("style", {
                                nonce: u.styleNonce,
                                dangerouslySetInnerHTML: f
                            }), o("div", {
                                class: "editor__image-container"
                            }, o("div", {
                                class: "editor__canvas-container",
                                ref: c
                            }, o("canvas", {
                                ref: h,
                                id: "background",
                                style: w
                            }), o("canvas", {
                                ref: m,
                                id: "foreground",
                                style: w
                            }), o("div", {
                                ref: g,
                                onMouseDown: e => {
                                    if (!n || !g.current) return;
                                    let t = g.current.getBoundingClientRect(),
                                        r = {
                                            type: n,
                                            x: (e.clientX - t.x) / v,
                                            y: (e.clientY - t.y) / v
                                        },
                                        o = (e, n) => {
                                            let r = (n.clientX - t.x) / v,
                                                i = (n.clientY - t.y) / v;
                                            return {
                                                type: e.type,
                                                x: Math.min(e.x, r),
                                                y: Math.min(e.y, i),
                                                w: Math.abs(r - e.x),
                                                h: Math.abs(i - e.y)
                                            }
                                        },
                                        a = e => {
                                            ph(m.current, {
                                                alpha: !0
                                            }, (e, t) => {
                                                t.clearRect(0, 0, e.width, e.height)
                                            }), pg(m.current, y, [...i, o(r, e)])
                                        },
                                        s = e => {
                                            let t = o(r, e);
                                            t.w * v >= 1 && t.h * v >= 1 && l(e => [...e, t]), cY.removeEventListener("mousemove", a), cY.removeEventListener("mouseup", s)
                                        };
                                    cY.addEventListener("mousemove", a), cY.addEventListener("mouseup", s)
                                },
                                style: w
                            }, i.map((e, t) => o("div", {
                                key: t,
                                class: "editor__rect",
                                style: {
                                    top: `${e.y*v}px`,
                                    left: `${e.x*v}px`,
                                    width: `${e.w*v}px`,
                                    height: `${e.h*v}px`
                                }
                            }, o("button", {
                                "aria-label": u.removeHighlightText,
                                onClick: S(t),
                                onMouseDown: E,
                                onMouseUp: E,
                                type: "button"
                            }, o(p, null))))))), o(d, {
                                options: u,
                                action: n,
                                setAction: r
                            }))
                        };
                    return function(e) {
                        let {
                            onError: t
                        } = e, [n, r] = a.useState();
                        return (c({
                            onBeforeScreenshot: a.useCallback(() => {
                                h.display = "none"
                            }, []),
                            onScreenshot: a.useCallback((e, t) => {
                                ph(cY.createElement("canvas"), {
                                    alpha: !1
                                }, (n, i) => {
                                    i.scale(t, t), n.width = e.videoWidth, n.height = e.videoHeight, i.drawImage(e, 0, 0, n.width, n.height), r({
                                        canvas: n,
                                        dpi: t
                                    })
                                }), s.width = e.videoWidth, s.height = e.videoHeight
                            }, []),
                            onAfterScreenshot: a.useCallback(() => {
                                h.display = "block"
                            }, []),
                            onError: a.useCallback(e => {
                                h.display = "block", t(e)
                            }, [])
                        }), n) ? o(m, {
                            screenshot: n
                        }) : o("div", null)
                    }
                }({
                    h: t,
                    hooks: n,
                    outputBuffer: o,
                    dialog: r,
                    options: i
                }),
                value: async () => {
                    let e = await new Promise(e => {
                        o.toBlob(e, "image/png")
                    });
                    if (e) return {
                        data: new Uint8Array(await e.arrayBuffer()),
                        filename: "screenshot.png",
                        contentType: "application/png"
                    }
                }
            }
        }
    }),
    p_ = ["replayIntegration", "replayCanvasIntegration", "feedbackIntegration", "feedbackModalIntegration", "feedbackScreenshotIntegration", "captureConsoleIntegration", "contextLinesIntegration", "linkedErrorsIntegration", "dedupeIntegration", "extraErrorDataIntegration", "graphqlClientIntegration", "httpClientIntegration", "reportingObserverIntegration", "rewriteFramesIntegration", "browserProfilingIntegration", "userTimingIntegration", "interactionsIntegration", "moduleMetadataIntegration"],
    py = {
        replayCanvasIntegration: "replay-canvas",
        feedbackModalIntegration: "feedback-modal",
        feedbackScreenshotIntegration: "feedback-screenshot"
    };
async function pb(e, t) {
    var n, r;
    let i, o = p_.includes(e) ? py[e] || e.replace("Integration", "").toLowerCase() : void 0,
        a = ei.Sentry = ei.Sentry || {};
    if (!o) throw Error(`Cannot lazy load integration: ${e}`);
    let s = a[e];
    if ("function" == typeof s && !("_isShim" in s)) return s;
    let l = (n = o, new URL(`/${er}/${n}.min.js`, (null == (i = tA()) || null == (r = i.getOptions()) ? void 0 : r.cdnBaseUrl) || "https://browser.sentry-cdn.com").toString()),
        u = ei.document.createElement("script");
    u.src = l, u.crossOrigin = "anonymous", u.referrerPolicy = "strict-origin", t && u.setAttribute("nonce", t);
    let c = new Promise((e, t) => {
            u.addEventListener("load", () => e()), u.addEventListener("error", t)
        }),
        d = ei.document.currentScript,
        p = ei.document.body || ei.document.head || (null == d ? void 0 : d.parentElement);
    if (p) p.appendChild(u);
    else throw Error(`Could not find parent element to insert lazy-loaded ${e} script`);
    try {
        await c
    } catch {
        throw Error(`Error when loading integration: ${e}`)
    }
    let f = a[e];
    if ("function" != typeof f) throw Error(`Could not load integration: ${e}`);
    return f
}
let pS = dr({
        lazyLoadIntegration: pb
    }),
    pw = dr({
        getModalIntegration: () => pf,
        getScreenshotIntegration: () => pv
    }),
    pE = "MULTIPLEXED_TRANSPORT_EXTRA_KEY";

function pk(e, t) {
    let n;
    return tK(e, (e, r) => (t.includes(r) && (n = Array.isArray(e) ? e[1] : void 0), !!n)), n
}

function pT(e, t) {
    return n => {
        let r = e(n),
            i = new Map,
            o = t || (e => {
                var t;
                let n = e.getEvent();
                return (null == n || null == (t = n.extra) ? void 0 : t[pE]) && Array.isArray(n.extra[pE]) ? n.extra[pE] : []
            });

        function a(t, r) {
            let o = r ? `${t}:${r}` : t,
                a = i.get(o);
            if (!a) {
                let s = tH(t);
                if (!s) return;
                let l = iE(s, n.tunnel);
                a = r ? (t => {
                    let n = e(t);
                    return { ...n,
                        send: async e => {
                            let t = pk(e, ["event", "transaction", "profile", "replay_event"]);
                            return t && (t.release = r), n.send(e)
                        }
                    }
                })({ ...n,
                    url: l
                }) : e({ ...n,
                    url: l
                }), i.set(o, a)
            }
            return [t, a]
        }
        return {
            send: async function(e) {
                let t = o({
                        envelope: e,
                        getEvent: function(t) {
                            return pk(e, (null == t ? void 0 : t.length) ? t : ["event"])
                        }
                    }).map(e => "string" == typeof e ? a(e, void 0) : a(e.dsn, e.release)).filter(e => !!e),
                    n = t.length ? t : [
                        ["", r]
                    ];
                return (await Promise.all(n.map(t => {
                    let [n, r] = t;
                    return r.send(tV(n ? { ...e[0],
                        dsn: n
                    } : e[0], e[1]))
                })))[0]
            },
            flush: async function(e) {
                let t = [...i.values(), r];
                return (await Promise.all(t.map(t => t.flush(e)))).every(e => e)
            }
        }
    }
}
let pI = ["addListener", "on", "once", "prependListener", "prependOnceListener", "addEventListener"],
    pR = ["removeListener", "off", "removeEventListener"],
    px = Symbol("SentryScopeBoundListeners");

function pC(e) {
    var t, n;
    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tT();
    if (e[px]) return e;
    for (let t of (pM(e), pI)) "function" == typeof e[t] && (e[t] = function(e, t, n) {
        return function() {
            for (var r = arguments.length, i = Array(r), o = 0; o < r; o++) i[o] = arguments[o];
            let a = i[0],
                s = i[1],
                l = i.slice(2);
            if (!pA(s) || void 0 !== x && (s === x || s.listener === x)) return t.apply(this, i);
            let u = function(e) {
                    return e[px]
                }(e) || pM(e),
                c = u.get(a);
            c || (c = new WeakMap, u.set(a, c));
            let d = c.get(s);
            d || (d = function() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return tx(n, () => s.apply(this, t))
            }, c.set(s, d));
            let p = x;
            x = d;
            try {
                return t.call(this, a, d, ...l)
            } finally {
                x = p
            }
        }
    }(e, e[t], r));
    for (let t of pR) "function" == typeof e[t] && (e[t] = function(e, t) {
        return function() {
            for (var n, r, i = arguments.length, o = Array(i), a = 0; a < i; a++) o[a] = arguments[a];
            let s = o[0],
                l = o[1],
                u = o.slice(2),
                c = pA(l) ? null == (r = function(e) {
                    return e[px]
                }(e)) || null == (n = r.get(s)) ? void 0 : n.get(l) : void 0;
            return c ? t.call(this, s, c, ...u) : t.apply(this, o)
        }
    }(e, e[t]));
    return "function" == typeof e.removeAllListeners && (t = e, n = e.removeAllListeners, e.removeAllListeners = function() {
        for (var e = arguments.length, r = Array(e), i = 0; i < e; i++) r[i] = arguments[i];
        let o = function(e) {
            return e[px]
        }(t);
        if (o)
            if (0 === r.length) pM(t);
            else {
                let e = r[0];
                o.delete(e)
            }
        return n.apply(this, r)
    }), e
}

function pA(e) {
    return "function" == typeof e
}

function pM(e) {
    let t = new Map;
    return e[px] = t, t
}
let pP = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.levels || eu,
        n = e.handled ?? !0;
    return {
        name: "CaptureConsole",
        setup(e) {
            "console" in ei && id(r => {
                var i, o, a;
                let s, l, u, {
                    args: c,
                    level: d
                } = r;
                tA() === e && t.includes(d) && (i = c, o = d, a = n, s = im(o), l = Error(), u = {
                    level: im(o),
                    extra: {
                        arguments: i
                    }
                }, tx(e => {
                    if (e.addEventProcessor(e => (e.logger = "console", e8(e, {
                            handled: a,
                            type: "auto.core.capture_console"
                        }), e)), "assert" === o) {
                        if (!i[0]) {
                            let t = `Assertion failed: ${e0(i.slice(1)," ")||"console.assert"}`;
                            e.setExtra("arguments", i.slice(1)), e.captureMessage(t, s, {
                                captureContext: u,
                                syntheticException: l
                            })
                        }
                        return
                    }
                    let t = i.find(e => e instanceof Error);
                    if (t) return void rD(t, u);
                    let n = e0(i, " ");
                    e.captureMessage(n, s, {
                        captureContext: u,
                        syntheticException: l
                    })
                }))
            })
        }
    }
};

function pN(e, t, n) {
    var r, i, o;
    return "util" in ei && "function" == typeof ei.util.format ? ei.util.format(...e) : (r = e, i = t, o = n, r.map(e => ek(e) ? String(e) : JSON.stringify(eJ(e, i, o))).join(" "))
}

function pO(e) {
    return /%[sdifocO]/.test(e)
}

function pD(e, t) {
    let n = {},
        r = Array(t.length).fill("{}").join(" ");
    return n["sentry.message.template"] = `${e} ${r}`, t.forEach((e, t) => {
        n[`sentry.message.parameter.${t}`] = e
    }), n
}
let pL = {
        [np]: "auto.log.console"
    },
    p$ = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.levels || eu;
        return {
            name: "ConsoleLogs",
            setup(e) {
                let {
                    normalizeDepth: n = 3,
                    normalizeMaxBreadth: r = 1e3
                } = e.getOptions(), i = id(i => {
                    let {
                        args: o,
                        level: a
                    } = i;
                    if (tA() !== e || !t.includes(a)) return;
                    let s = o[0],
                        l = o.slice(1);
                    if ("assert" === a) {
                        s || iM({
                            level: "error",
                            message: l.length > 0 ? `Assertion failed: ${pN(l,n,r)}` : "Assertion failed",
                            attributes: pL
                        });
                        return
                    }
                    let u = "log" === a,
                        c = { ...pL
                        };
                    if (eT(s)) {
                        Object.assign(c, eJ(s, n, r));
                        let e = "string" == typeof o[1] ? 2 : 1;
                        o.slice(e).forEach((e, t) => {
                            c[`sentry.message.parameter.${t}`] = eJ(e, n, r)
                        })
                    } else if (l.length > 0 && "string" == typeof s && !pO(s))
                        for (let [e, t] of Object.entries(pD(s, l))) c[e] = e.startsWith("sentry.message.parameter.") ? eJ(t, n, r) : t;
                    iM({
                        level: u ? "info" : a,
                        message: pN(o, n, r),
                        severityNumber: u ? 10 : void 0,
                        attributes: c
                    })
                });
                e.registerCleanup(i)
            }
        }
    },
    pF = ["trace", "debug", "info", "warn", "error", "fatal"];

function pU() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = new Set(e.levels ?? pF),
        n = e.client;
    return {
        log(e) {
            let {
                type: r,
                level: i,
                message: o,
                args: a,
                tag: s,
                date: l,
                ...u
            } = e, c = n || tA();
            if (!c) return;
            let d = function(e, t) {
                if ("verbose" === e) return "debug";
                if ("silent" === e) return "trace";
                if (e) {
                    let t = pB[e];
                    if (t) return t
                }
                if ("number" == typeof t) {
                    let e = pj[t];
                    if (e) return e
                }
                return "info"
            }(r, i);
            if (!t.has(d)) return;
            let {
                normalizeDepth: p = 3,
                normalizeMaxBreadth: f = 1e3
            } = c.getOptions(), h = {};
            for (let [e, t] of Object.entries(u)) h[e] = eJ(t, p, f);
            h["sentry.origin"] = "auto.log.consola", s && (h["consola.tag"] = s), r && (h["consola.type"] = r), null != i && "number" == typeof i && (h["consola.level"] = i);
            let m = function(e, t, n) {
                let {
                    message: r,
                    attributes: i,
                    messageTemplate: o,
                    messageParameters: a
                } = e, s = {};
                if (o && a)
                    for (let [e, r] of Object.entries(pD(o, a))) s[e] = e.startsWith("sentry.message.parameter.") ? eJ(r, t, n) : r;
                else a && a.length > 0 && a.forEach((e, r) => {
                    s[`sentry.message.parameter.${r}`] = eJ(e, t, n)
                });
                return {
                    message: r,
                    attributes: { ...eJ(i, t, n),
                        ...s
                    }
                }
            }(function(e, t, n) {
                if (!(null == e ? void 0 : e.length)) return {
                    message: ""
                };
                let r = pN(e, t, n),
                    i = e[0];
                if (eT(i)) {
                    let t = "string" == typeof e[1] ? 2 : 1;
                    return {
                        message: r,
                        attributes: i,
                        messageParameters: e.slice(t)
                    }
                } {
                    let t = e.slice(1),
                        n = t.length > 0 && "string" == typeof i && !pO(i);
                    return {
                        message: r,
                        messageTemplate: n ? i : void 0,
                        messageParameters: n ? t : void 0
                    }
                }
            }(a, p, f), p, f);
            (null == m ? void 0 : m.attributes) && Object.assign(h, m.attributes), iM({
                level: d,
                message: (null == m ? void 0 : m.message) || o || a && pN(a, p, f) || "",
                attributes: h
            })
        }
    }
}
let pB = {
        silent: "trace",
        fatal: "fatal",
        error: "error",
        warn: "warn",
        log: "info",
        info: "info",
        success: "info",
        fail: "error",
        ready: "info",
        start: "info",
        box: "info",
        debug: "debug",
        trace: "trace",
        verbose: "debug",
        critical: "fatal",
        notice: "info"
    },
    pj = {
        0: "fatal",
        1: "warn",
        2: "info",
        3: "info",
        4: "debug",
        5: "trace"
    },
    pW = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            {
                depth: t = 3,
                captureErrorCause: n = !0
            } = e;
        return {
            name: "ExtraErrorData",
            processEvent(e, r, i) {
                let {
                    maxValueLength: o
                } = i.getOptions();
                return function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        r = arguments.length > 3 ? arguments[3] : void 0,
                        i = arguments.length > 4 ? arguments[4] : void 0;
                    if (!t.originalException || !e_(t.originalException)) return e;
                    let o = t.originalException.name || t.originalException.constructor.name,
                        a = function e(t, n, r) {
                            try {
                                let i = ["name", "message", "stack", "line", "column", "fileName", "lineNumber", "columnNumber", "toJSON"],
                                    o = {};
                                for (let e of Object.keys(t)) {
                                    if (-1 !== i.indexOf(e)) continue;
                                    let n = t[e];
                                    o[e] = e_(n) || "string" == typeof n ? r ? eQ(`${n}`, r) : `${n}` : n
                                }
                                if (n && void 0 !== t.cause && (e_(t.cause) ? o.cause = {
                                        [t.cause.name || t.cause.constructor.name]: e(t.cause, !1, r)
                                    } : o.cause = t.cause), "function" == typeof t.toJSON) {
                                    let e = t.toJSON();
                                    for (let t of Object.keys(e)) {
                                        let n = e[t];
                                        o[t] = e_(n) ? n.toString() : n
                                    }
                                }
                                return o
                            } catch (e) {
                                el && em.error("Unable to extract extra data from the Error object:", e)
                            }
                            return null
                        }(t.originalException, r, i);
                    if (a) {
                        let t = { ...e.contexts
                            },
                            r = eJ(a, n);
                        return eT(r) && (eN(r, ej, !0), t[o] = r), { ...e,
                            contexts: t
                        }
                    }
                    return e
                }(e, r, t, n, o)
            }
        }
    },
    pH = "flag.evaluation.";

function pz(e) {
    if (e.type) return e;
    let t = tT().getScopeData().contexts.flags,
        n = t ? t.values : [];
    return n.length && (void 0 === e.contexts && (e.contexts = {}), e.contexts.flags = {
        values: [...n]
    }), e
}

function pq(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        r = tT().getScopeData().contexts;
    r.flags || (r.flags = {
            values: []
        }),
        function(e, t, n, r) {
            if ("boolean" != typeof n) return;
            if (e.length > r) {
                el && em.error(`[Feature Flags] insertToFlagBuffer called on a buffer larger than maxSize=${r}`);
                return
            }
            let i = e.findIndex(e => e.flag === t); - 1 !== i && e.splice(i, 1), e.length === r && e.shift(), e.push({
                flag: t,
                result: n
            })
        }(r.flags.values, e, t, n)
}

function pG(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
    if ("boolean" != typeof t) return;
    let r = rh();
    if (!r) return;
    let i = n8(r).data;
    `${pH}${e}` in i ? r.setAttribute(`${pH}${e}`, t) : Object.keys(i).filter(e => e.startsWith(pH)).length < n && r.setAttribute(`${pH}${e}`, t)
}
let pV = () => ({
        name: "FeatureFlags",
        processEvent: (e, t, n) => pz(e),
        addFeatureFlag(e, t) {
            pq(e, t), pG(e, t)
        }
    }),
    pY = ["reauthenticate", "signInAnonymously", "signInWithOAuth", "signInWithIdToken", "signInWithOtp", "signInWithPassword", "signInWithSSO", "signOut", "signUp", "verifyOtp"],
    pK = ["createUser", "deleteUser", "listUsers", "getUserById", "updateUserById", "inviteUserByEmail"],
    pJ = {
        eq: "eq",
        neq: "neq",
        gt: "gt",
        gte: "gte",
        lt: "lt",
        lte: "lte",
        like: "like",
        "like(all)": "likeAllOf",
        "like(any)": "likeAnyOf",
        ilike: "ilike",
        "ilike(all)": "ilikeAllOf",
        "ilike(any)": "ilikeAnyOf",
        is: "is",
        in: "in",
        cs: "contains",
        cd: "containedBy",
        sr: "rangeGt",
        nxl: "rangeGte",
        sl: "rangeLt",
        nxr: "rangeLte",
        adj: "rangeAdjacent",
        ov: "overlaps",
        fts: "",
        plfts: "plain",
        phfts: "phrase",
        wfts: "websearch",
        not: "not"
    },
    pX = ["select", "insert", "upsert", "update", "delete"];

function pQ(e) {
    try {
        e.__SENTRY_INSTRUMENTED__ = !0
    } catch {}
}

function pZ(e) {
    try {
        return e.__SENTRY_INSTRUMENTED__
    } catch {
        return !1
    }
}

function p0(e, t) {
    return Object.keys(t).length > 0 ? t : Array.isArray(e) && e.length > 0 ? e : void 0
}

function p1(e, t) {
    if (!e) return;
    if ("function" == typeof e.get) return e.get(t) ?? void 0;
    let n = t.toLowerCase(),
        r = Object.keys(e).find(e => e.toLowerCase() === n);
    return void 0 !== r ? e[r] : void 0
}

function p2(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return new Proxy(e, {
        apply(n, r, i) {
            let o = `auth${t?".admin":""}.${e.name}`,
                a = tA();
            return sH({
                name: a && iq(a) ? o : `auth ${t?"(admin) ":""}${e.name}`,
                attributes: {
                    [np]: "auto.db.supabase",
                    [nd]: "db",
                    [nn]: "postgresql",
                    [nt]: o
                }
            }, e => Reflect.apply(n, r, i).then(t => (eI(t) && "error" in t && t.error ? (e.setStatus({
                code: 2
            }), rD(t.error, {
                mechanism: {
                    handled: !1,
                    type: "auto.db.supabase.auth"
                }
            })) : e.setStatus({
                code: 1
            }), e.end(), t)).catch(t => {
                throw e.setStatus({
                    code: 2
                }), e.end(), rD(t, {
                    mechanism: {
                        handled: !1,
                        type: "auto.db.supabase.auth"
                    }
                }), t
            }).then(...i))
        }
    })
}
let p3 = function(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!e) {
            el && em.warn("Supabase integration was not installed because no Supabase client was provided.");
            return
        }
        t = e.constructor === Function ? e : e.constructor, pZ(t.prototype.from) || (t.prototype.from = new Proxy(t.prototype.from, {
            apply(e, t, r) {
                let i = Reflect.apply(e, t, r);
                return function(e, t) {
                    for (let n of pX) pZ(e.prototype[n]) || (e.prototype[n] = new Proxy(e.prototype[n], {
                        apply(e, r, i) {
                            let o = Reflect.apply(e, r, i),
                                a = o.constructor;
                            return el && em.log(`Instrumenting ${n} operation's PostgRESTFilterBuilder`), ! function(e, t) {
                                pZ(e.prototype.then) || (e.prototype.then = new Proxy(e.prototype.then, {
                                    apply(e, n, r) {
                                        var i;
                                        let o = function(e) {
                                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                            switch (e) {
                                                case "GET":
                                                case "QUERY":
                                                    return "select";
                                                case "POST":
                                                    var n;
                                                    if (null == (n = p1(t, "Prefer")) ? void 0 : n.includes("resolution=")) return "upsert";
                                                    return "insert";
                                                case "PATCH":
                                                    return "update";
                                                case "DELETE":
                                                    return "delete";
                                                default:
                                                    return "<unknown-op>"
                                            }
                                        }(n.method, n.headers);
                                        if (!pX.includes(o) || !(null == n || null == (i = n.url) ? void 0 : i.pathname) || "string" != typeof n.url.pathname) return Reflect.apply(e, n, r);
                                        let a = n.url.pathname.split("/"),
                                            s = a.length > 0 ? a[a.length - 1] : "",
                                            l = [];
                                        for (let [e, t] of n.url.searchParams.entries()) l.push(function(e, t) {
                                            let n;
                                            if ("" === t || "*" === t) return "select(*)";
                                            if ("select" === e) return `select(${t})`;
                                            if ("or" === e || e.endsWith(".or")) return `${e}${t}`;
                                            let [r, ...i] = t.split(".");
                                            return n = (null == r ? void 0 : r.startsWith("fts")) ? "textSearch" : (null == r ? void 0 : r.startsWith("plfts")) ? "textSearch[plain]" : (null == r ? void 0 : r.startsWith("phfts")) ? "textSearch[phrase]" : (null == r ? void 0 : r.startsWith("wfts")) ? "textSearch[websearch]" : r && pJ[r] || "filter", `${n}(${e}, ${i.join(".")})`
                                        }(e, t));
                                        let u = Object.create(null);
                                        if (eT(n.body))
                                            for (let [e, t] of Object.entries(n.body)) u[e] = t;
                                        let c = tA(),
                                            d = t.sendOperationData ?? (null == c ? void 0 : c.getDataCollectionOptions().databaseQueryData) === !0,
                                            p = p0(n.body, u),
                                            f = "select" === o ? "" : `${o}${void 0!==p0(n.body,u)?"(...) ":""}`,
                                            h = d ? l.join(" ") : l.length > 0 ? "[redacted]" : "",
                                            m = [f.trimEnd(), h].filter(Boolean).join(" "),
                                            g = m ? `${m} from(${s})` : `from(${s})`,
                                            v = c && iq(c) ? `${o}${s?` ${s}`:""}` : g,
                                            _ = {
                                                "db.table": s,
                                                "db.schema": n.schema,
                                                "db.url": n.url.origin,
                                                "db.sdk": p1(n.headers, "X-Client-Info"),
                                                [nn]: "postgresql",
                                                [nt]: o,
                                                [np]: "auto.db.supabase",
                                                [nd]: "db"
                                            };
                                        return l.length && d && (_["db.query"] = l), void 0 !== p && d && (_["db.body"] = p), sH({
                                            name: v,
                                            attributes: _
                                        }, t => Reflect.apply(e, n, []).then(e => {
                                            if (t && (e && "object" == typeof e && "status" in e && nO(t, e.status || 500), t.end()), null == e ? void 0 : e.error) {
                                                let t = Error(e.error.message);
                                                e.error.code && (t.code = e.error.code), e.error.details && (t.details = e.error.details);
                                                let n = {};
                                                l.length && d && (n.query = l), void 0 !== p && d && (n.body = p), rD(t, e => (e.addEventProcessor(e => (e8(e, {
                                                    handled: !1,
                                                    type: "auto.db.supabase.postgres"
                                                }), e)), e.setContext("supabase", n), e))
                                            }
                                            let n = {
                                                    type: "supabase",
                                                    category: `db.${o}`,
                                                    message: g
                                                },
                                                r = {};
                                            return l.length && d && (r.query = l), void 0 !== p && d && (r.body = p), Object.keys(r).length && (n.data = r), ii(n), e
                                        }, e => {
                                            throw t && (nO(t, 500), t.end()), e
                                        }).then(...r))
                                    }
                                }), pQ(e.prototype.then))
                            }(a, t), o
                        }
                    }), pQ(e.prototype[n]))
                }(i.constructor, n), i
            }
        }), pQ(t.prototype.from));
        let r = e.auth;
        if (!(!r || pZ(e.auth))) {
            for (let t of pY) {
                let n = r[t];
                n && "function" == typeof e.auth[t] && (e.auth[t] = p2(n))
            }
            for (let t of pK) {
                let n = r.admin[t];
                n && "function" == typeof e.auth.admin[t] && (e.auth.admin[t] = p2(n, !0))
            }
            pQ(e.auth)
        }
    },
    p5 = e => {
        let t, n;
        return t = e.supabaseClient, n = {
            sendOperationData: e.sendOperationData
        }, {
            setupOnce() {
                p3(t, n)
            },
            name: "Supabase"
        }
    };

function p4(e, t, n, r, i) {
    iM({
        level: e,
        message: t,
        attributes: n,
        severityNumber: i
    }, r)
}

function p6(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    let i = e.map((t, n) => t ?? e.raw[n]),
        o = new String(String.raw({
            raw: i
        }, ...n));
    return o.__sentry_template_string__ = i.join("\0").replace(/%/g, "%%").replace(/\0/g, "%s"), o.__sentry_template_values__ = n, o
}
e.s(["debug", 0, function(e, t) {
    let {
        scope: n
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    p4("debug", e, t, n)
}, "error", 0, function(e, t) {
    let {
        scope: n
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    p4("error", e, t, n)
}, "fatal", 0, function(e, t) {
    let {
        scope: n
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    p4("fatal", e, t, n)
}, "fmt", 0, p6, "info", 0, function(e, t) {
    let {
        scope: n
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    p4("info", e, t, n)
}, "trace", 0, function(e, t) {
    let {
        scope: n
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    p4("trace", e, t, n)
}, "warn", 0, function(e, t) {
    let {
        scope: n
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    p4("warn", e, t, n)
}], 309581);
var p8 = e.i(309581),
    p8 = p8;

function p7(e, t, n, r) {
    ! function(e, t) {
        let n = (null == t ? void 0 : t.scope) ?? tT(),
            r = (null == t ? void 0 : t.captureSerializedMetric) ?? iL,
            i = (null == n ? void 0 : n.getClient()) ?? tA();
        if (!i) {
            el && em.warn("No client available to capture metric.");
            return
        }
        let {
            beforeSendMetric: o
        } = i.getOptions(), {
            user: a,
            attributes: s
        } = rP(tI(), n), l = function(e, t, n) {
            var r;
            let {
                release: i,
                environment: o
            } = t.getOptions(), a = { ...e.attributes
            };
            iD(a, "user.id", n.id, !1), iD(a, "user.email", n.email, !1), iD(a, "user.name", n.username, !1), iD(a, "sentry.release", i), iD(a, "sentry.environment", o);
            let {
                name: s,
                version: l
            } = (null == (r = t.getSdkMetadata()) ? void 0 : r.sdk) ?? {};
            iD(a, "sentry.sdk.name", s), iD(a, "sentry.sdk.version", l);
            let u = t.getIntegrationByName("Replay"),
                c = null == u ? void 0 : u.getReplayId(!0);
            return iD(a, "sentry.replay_id", c), c && (null == u ? void 0 : u.getRecordingMode()) === "buffer" && iD(a, "sentry._internal.replay_is_buffering", !0), { ...e,
                attributes: a
            }
        }(e, i, a);
        i.emit("processMetric", l);
        let u = o ? tO(el ? "The `beforeSendMetric` callback threw an error, dropping the metric:" : "", () => o(l), () => tN) : l;
        if (u === tN) return i.recordDroppedEvent("callback_error", "metric", 1);
        if (!u) {
            i.recordDroppedEvent("before_send", "metric", 1), el && em.log("`beforeSendMetric` returned `null`, will not send metric.");
            return
        }
        let c = function(e, t, n, r) {
            let [, i] = iI(t, n), o = rh(n), a = o ? o.spanContext().traceId : null == i ? void 0 : i.trace_id, s = o ? o.spanContext().spanId : void 0, l = ta(), u = iT(l);
            return {
                timestamp: l,
                trace_id: a ?? "",
                span_id: s,
                name: e.name,
                type: e.type,
                unit: e.unit,
                value: e.value,
                attributes: { ...t5(r),
                    ...t5(e.attributes, "skip-undefined"),
                    [u.key]: u.value
                }
            }
        }(u, i, n, s);
        el && em.log("[Metric]", c), r(i, c), i.emit("afterCaptureMetric", u)
    }({
        type: e,
        name: t,
        value: n,
        unit: null == r ? void 0 : r.unit,
        attributes: null == r ? void 0 : r.attributes
    }, {
        scope: null == r ? void 0 : r.scope
    })
}
e.s(["count", 0, function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    p7("counter", e, t, n)
}, "distribution", 0, function(e, t, n) {
    p7("distribution", e, t, n)
}, "gauge", 0, function(e, t, n) {
    p7("gauge", e, t, n)
}], 251599);
var p9 = e.i(251599),
    p9 = p9;
let fe = new Map,
    ft = new Set;

function fn(e, t) {
    var n, r;
    null == (r = t.exception) || null == (n = r.values) || n.forEach(t => {
        var n, r;
        null == (r = t.stacktrace) || null == (n = r.frames) || n.forEach(t => {
            if (!t.filename || t.module_metadata) return;
            let n = function(e, t) {
                if (ei._sentryModuleMetadata)
                    for (let t of Object.keys(ei._sentryModuleMetadata)) {
                        let n = ei._sentryModuleMetadata[t];
                        if (!ft.has(t)) {
                            for (let r of (ft.add(t), e(t).reverse()))
                                if (r.filename) {
                                    fe.set(r.filename, n);
                                    break
                                }
                        }
                    }
                return fe.get(t)
            }(e, t.filename);
            n && (t.module_metadata = n)
        })
    })
}

function fr(e) {
    var t, n;
    null == (n = e.exception) || null == (t = n.values) || t.forEach(e => {
        var t, n;
        null == (n = e.stacktrace) || null == (t = n.frames) || t.forEach(e => {
            delete e.module_metadata
        })
    })
}
let fi = () => ({
        name: "ModuleMetadata",
        setup(e) {
            e.on("beforeEnvelope", e => {
                tK(e, (e, t) => {
                    if ("event" === t) {
                        let t = Array.isArray(e) ? e[1] : void 0;
                        t && (fr(t), e[1] = t)
                    }
                })
            }), e.on("applyFrameMetadata", t => {
                t.type || fn(e.getOptions().stackParser, t)
            })
        }
    }),
    fo = e => {
        let t = e.ignoreSentryInternalFrames ?? !1;
        return {
            name: "ThirdPartyErrorsFilter",
            setup(e) {
                e.on("beforeEnvelope", e => {
                    tK(e, (e, t) => {
                        if ("event" === t) {
                            let t = Array.isArray(e) ? e[1] : void 0;
                            t && (fr(t), e[1] = t)
                        }
                    })
                }), e.on("applyFrameMetadata", t => {
                    t.type || fn(e.getOptions().stackParser, t)
                })
            },
            preprocessEvent(e) {
                t && (ei._sentryWrappedDepth ?? 0) > 0 && (e.sdkProcessingMetadata = { ...e.sdkProcessingMetadata,
                    insideSentryWrapped: !0
                })
            },
            processEvent(n) {
                var r, i, o;
                let a = !!t && (null == (r = n.sdkProcessingMetadata) ? void 0 : r.insideSentryWrapped) === !0 && (null == (o = n.exception) || null == (i = o.values) ? void 0 : i.length) === 1,
                    s = function(e, t, n) {
                        let r = eK(e);
                        if (r) return r.filter((e, r) => !!e.filename && (null != e.lineno || null != e.colno || null != e.instruction_addr) && (!t || ! function(e, t, n) {
                            var r, i;
                            if (0 !== t) return !1;
                            if (n && !(r = e).context_line && !r.pre_context && r.function && r.function.length <= 2 || "sentryWrapped" === e.function) return !0;
                            if (!e.context_line || !e.filename || !e.filename.includes("sentry") || !e.filename.includes("helpers") || !e.context_line.includes(fl)) return !1;
                            if (e.pre_context) {
                                let t = e.pre_context.length;
                                for (let n = 0; n < t; n++) {
                                    if (null == (i = e.pre_context[n]) ? void 0 : i.includes(fs)) return !0
                                }
                            }
                            return !1
                        }(e, r, !!n))).map(e => e.module_metadata ? Object.keys(e.module_metadata).filter(e => e.startsWith(fa)).map(e => e.slice(fa.length)) : [])
                    }(n, t, a);
                if (s && s["drop-error-if-contains-third-party-frames" === e.behaviour || "apply-tag-if-contains-third-party-frames" === e.behaviour ? "some" : "every"](t => !t.some(t => e.filterKeys.includes(t)))) {
                    if ("drop-error-if-contains-third-party-frames" === e.behaviour || "drop-error-if-exclusively-contains-third-party-frames" === e.behaviour) return null;
                    n.tags = { ...n.tags,
                        third_party_code: !0
                    }
                }
                return n
            }
        }
    },
    fa = "_sentryBundlerPluginAppKey:",
    fs = "Attempt to invoke user-land function",
    fl = "fn.apply(this, wrappedArguments)";

function fu(e) {
    return { ...e,
        path: "path" in e && Array.isArray(e.path) ? e.path.join(".") : void 0,
        keys: "keys" in e ? JSON.stringify(e.keys) : void 0,
        unionErrors: "unionErrors" in e ? JSON.stringify(e.unionErrors) : void 0
    }
}
let fc = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.limit ?? 10;
        return {
            name: "ZodErrors",
            processEvent: (n, r) => (function(e) {
                var t, n;
                let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = arguments.length > 2 ? arguments[2] : void 0,
                    o = arguments.length > 3 ? arguments[3] : void 0;
                if (!(null == (t = i.exception) ? void 0 : t.values) || !o.originalException || !(e_(n = o.originalException) && "ZodError" === n.name && Array.isArray(n.issues)) || 0 === o.originalException.issues.length) return i;
                try {
                    let t = (r ? o.originalException.issues : o.originalException.issues.slice(0, e)).map(fu);
                    return r && (Array.isArray(o.attachments) || (o.attachments = []), o.attachments.push({
                        filename: "zod_issues.json",
                        data: JSON.stringify({
                            issues: t
                        })
                    })), { ...i,
                        exception: { ...i.exception,
                            values: [{ ...i.exception.values[0],
                                value: function(e) {
                                    let t = new Set;
                                    for (let n of e.issues) {
                                        let e = n.path.map(e => "number" == typeof e ? "<array>" : e).join(".");
                                        e.length > 0 && t.add(e)
                                    }
                                    let n = Array.from(t);
                                    if (0 === n.length) {
                                        let t = "variable";
                                        if (e.issues.length > 0) {
                                            let n = e.issues[0];
                                            void 0 !== n && "expected" in n && "string" == typeof n.expected && (t = n.expected)
                                        }
                                        return `Failed to validate ${t}`
                                    }
                                    return `Failed to validate keys: ${eQ(n.join(", "),100)}`
                                }(o.originalException)
                            }, ...i.exception.values.slice(1)]
                        },
                        extra: { ...i.extra,
                            "zoderror.issues": t.slice(0, e)
                        }
                    }
                } catch (e) {
                    return { ...i,
                        extra: { ...i.extra,
                            "zoderrors sentry integration parse error": {
                                message: "an exception was thrown while processing ZodError within applyZodErrorsToEvent()",
                                error: e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : "unknown"
                            }
                        }
                    }
                }
            })(t, e.saveZodIssuesAsAttachment, n, r)
        }
    },
    fd = {
        startProfiler: function() {
            let e = tA();
            if (!e) {
                aS && em.warn("No Sentry client available, profiling is not started");
                return
            }
            if (!e.getIntegrationByName("BrowserProfiling")) {
                aS && em.warn("BrowserProfiling integration is not available");
                return
            }
            e.emit("startUIProfiler")
        },
        stopProfiler: function() {
            let e = tA();
            if (!e) {
                aS && em.warn("No Sentry client available, profiling is not started");
                return
            }
            if (!e.getIntegrationByName("BrowserProfiling")) {
                aS && em.warn("ProfilingIntegration is not available");
                return
            }
            e.emit("stopUIProfiler")
        }
    };

function fp(e, t) {
    let {
        metadata: n,
        tunnel: r,
        dsn: i
    } = t;
    return tV({
        event_id: e.event_id,
        sent_at: (new Date).toISOString(),
        ...(null == n ? void 0 : n.sdk) && {
            sdk: {
                name: n.sdk.name,
                version: n.sdk.version
            }
        },
        ...!!r && !!i && {
            dsn: tW(i)
        }
    }, [
        [{
            type: "user_report"
        }, e]
    ])
}

function ff() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = ei.document,
        n = (null == t ? void 0 : t.head) || (null == t ? void 0 : t.body);
    if (!n) {
        aS && em.error("[showReportDialog] Global document not defined");
        return
    }
    let r = tT(),
        i = tA(),
        o = null == i ? void 0 : i.getDsn();
    if (!o) {
        aS && em.error("[showReportDialog] DSN not configured");
        return
    }
    let a = { ...e,
            user: { ...r.getUser(),
                ...e.user
            },
            eventId: e.eventId || rV()
        },
        {
            onLoad: s,
            onClose: l,
            onError: u
        } = a;
    if (!a.eventId) {
        aS && em.error("[showReportDialog] No event ID"), null == u || u(Error("No event ID to show the report dialog for"));
        return
    }
    let c = ei.document.createElement("script");
    if (c.async = !0, c.crossOrigin = "anonymous", c.src = function(e, t) {
            let n = tG(e);
            if (!n) return "";
            let r = `${iw(n)}embed/error-page/`,
                i = `dsn=${tW(n)}`;
            for (let e in t)
                if ("dsn" !== e && "onClose" !== e && "onError" !== e)
                    if ("user" === e) {
                        let e = t.user;
                        if (!e) continue;
                        e.name && (i += `&name=${encodeURIComponent(e.name)}`), e.email && (i += `&email=${encodeURIComponent(e.email)}`)
                    } else i += `&${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`;
            return `${r}?${i}`
        }(o, a), s && (c.onload = s), u && (c.onerror = () => {
            u(Error("Failed to load the report dialog script"))
        }), l) {
        let e = t => {
            if ("__sentry_reportdialog_closed__" === t.data) try {
                l()
            } finally {
                ei.removeEventListener("message", e)
            }
        };
        ei.addEventListener("message", e), c.addEventListener("error", () => {
            ei.removeEventListener("message", e)
        })
    }
    n.appendChild(c)
}
let fh = new WeakMap,
    fm = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.types || ["crash", "deprecation", "intervention"];

        function n(e) {
            if (fh.has(tA()))
                for (let t of e) tx(e => {
                    e.setExtra("url", t.url);
                    let n = `ReportingObserver [${t.type}]`,
                        r = "No details available";
                    if (t.body) {
                        let n = {};
                        for (let e in t.body) n[e] = t.body[e];
                        if (e.setExtra("body", n), "crash" === t.type) {
                            let e = t.body;
                            r = [e.crashId || "", e.reason || ""].join(" ").trim() || r
                        } else r = t.body.message || r
                    }
                    rL(`${n}: ${r}`)
                })
        }
        return {
            name: "ReportingObserver",
            setupOnce() {
                "ReportingObserver" in ei && new ei.ReportingObserver(n, {
                    buffered: !0,
                    types: t
                }).observe()
            },
            setup(e) {
                fh.set(e, !0)
            }
        }
    };

function fg(e, t, n) {
    return !1 === t ? {} : oS(function(e) {
        let t = {};
        for (let [n, r] of e) void 0 === t[n] && (t[n] = "" === n ? ov : function(e) {
            let t = e.length > 1 && e.startsWith('"') && e.endsWith('"') ? e.slice(1, -1) : e;
            try {
                return -1 !== t.indexOf("%") ? decodeURIComponent(t) : t
            } catch {
                return t
            }
        }(r));
        return t
    }((Array.isArray(e) ? e : [e]).flatMap(e => "string" != typeof e ? [] : "set-cookie" === n ? e.split(/,(?=[^;=,]*=)/).map(e => e.split(";")[0]) : e.split(";")).map(e => e.trim()).filter(e => "" !== e && "=" !== e).map(e => {
        let t = e.indexOf("=");
        return -1 === t ? ["", e] : [e.slice(0, t).trim(), e.slice(t + 1).trim()]
    })), t, oy)
}

function fv(e, t) {
    var n, r, i, o, a, s;
    let l, u = null == t ? void 0 : t.getDsn(),
        c = null == t ? void 0 : t.getOptions().tunnel;
    return n = e, r = u, !(!(l = oR(n)) || oI(l)) && !!r && (i = l.hostname, i === (o = r.host) || o.length > 0 && i.endsWith(`.${o}`)) && /(^|&|\?)sentry_key=/.test(l.search) || (a = e, !!(s = c) && f_(a) === f_(s))
}

function f_(e) {
    return "/" === e[e.length - 1] ? e.slice(0, -1) : e
}
let fy = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = {
            failedRequestStatusCodes: [
                [500, 599]
            ],
            failedRequestTargets: [/.*/],
            ...e
        };
    return {
        name: "HttpClient",
        setup(e) {
            var n, r, i, o;
            n = e, r = t, at(e => {
                if (tA() !== n) return;
                let {
                    response: t,
                    args: i,
                    error: o,
                    virtualError: a
                } = e, [s, l] = i;
                t && function(e, t, n, r, i) {
                    if (fS(e, n.status, n.url)) {
                        var o, a;
                        let e, s, l, u, c = (o = t, !(a = r) && o instanceof Request || o instanceof Request && o.bodyUsed ? o : new Request(o, a)),
                            d = fE();
                        if (!1 !== d.requestHeaders && (e = oS(fb(c.headers), d.requestHeaders)), !1 !== d.responseHeaders && (s = oS(fb(n.headers), d.responseHeaders)), !1 !== d.cookies) {
                            let e = c.headers.get("Cookie") || void 0;
                            e && (l = fg(e, d.cookies, "cookie"));
                            let t = n.headers.get("Set-Cookie") || void 0;
                            t && (u = fg(t, d.cookies, "set-cookie"))
                        }
                        r$(fw({
                            url: c.url,
                            method: c.method,
                            status: n.status,
                            requestHeaders: e,
                            responseHeaders: s,
                            requestCookies: l,
                            responseCookies: u,
                            error: i,
                            type: "fetch"
                        }))
                    }
                }(r, s, t, l, o || a)
            }), i = e, o = t, "XMLHttpRequest" in ei && af(e => {
                if (tA() !== i) return;
                let {
                    error: t,
                    virtualError: n
                } = e, r = e.xhr, a = r[ap];
                if (!a) return;
                let {
                    method: s,
                    request_headers: l
                } = a;
                try {
                    ! function(e, t, n, r, i) {
                        if (fS(e, t.status, t.responseURL)) {
                            let e, o, a, s = fE();
                            if (!1 !== s.cookies) try {
                                let e = t.getResponseHeader("Set-Cookie") || t.getResponseHeader("set-cookie") || void 0;
                                e && (o = fg(e, s.cookies, "set-cookie"))
                            } catch {}
                            if (!1 !== s.responseHeaders) try {
                                let e;
                                a = oS((e = t.getAllResponseHeaders()) ? e.split("\r\n").reduce((e, t) => {
                                    let [n, r] = t.split(": ");
                                    return n && r && (e[n] = r), e
                                }, {}) : {}, s.responseHeaders)
                            } catch {}!1 !== s.requestHeaders && (e = oS(r, s.requestHeaders)), r$(fw({
                                url: t.responseURL,
                                method: n,
                                status: t.status,
                                requestHeaders: e,
                                responseHeaders: a,
                                responseCookies: o,
                                error: i,
                                type: "xhr"
                            }))
                        }
                    }(o, r, s, l, t || n)
                } catch (e) {
                    aS && em.warn("Error while extracting response event form XHR response", e)
                }
            })
        }
    }
};

function fb(e) {
    let t = {};
    return e.forEach((e, n) => {
        t[n] = e
    }), t
}

function fS(e, t, n) {
    var r, i;
    return r = e.failedRequestStatusCodes, r.some(e => "number" == typeof e ? e === t : t >= e[0] && t <= e[1]) && (i = e.failedRequestTargets, i.some(e => "string" == typeof e ? n.includes(e) : e.test(n))) && !fv(n, tA())
}

function fw(e) {
    let t = tA(),
        n = t && e.error && e.error instanceof Error ? e.error.stack : void 0,
        r = n && t ? t.getOptions().stackParser(n, 0, 1) : void 0,
        i = `HTTP Client Error with status code: ${e.status}`,
        o = {
            message: i,
            exception: {
                values: [{
                    type: "Error",
                    value: i,
                    stacktrace: r ? {
                        frames: r
                    } : void 0
                }]
            },
            request: {
                url: e.url,
                method: e.method,
                headers: e.requestHeaders,
                cookies: e.requestCookies
            },
            contexts: {
                response: {
                    status_code: e.status,
                    headers: e.responseHeaders,
                    cookies: e.responseCookies,
                    body_size: function(e) {
                        if (e) {
                            let t = e["Content-Length"] || e["content-length"];
                            if (t) return parseInt(t, 10)
                        }
                    }(e.responseHeaders)
                }
            }
        };
    return e8(o, {
        type: `auto.http.client.${e.type}`,
        handled: !1
    }), o
}

function fE() {
    let e = tA();
    if (!e) return {
        cookies: !1,
        requestHeaders: !1,
        responseHeaders: !1
    };
    let {
        cookies: t,
        httpHeaders: n
    } = e.getDataCollectionOptions();
    return {
        cookies: t,
        requestHeaders: n.request,
        responseHeaders: n.response
    }
}
let fk = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return {
        name: "ContextLines",
        processEvent: (t, n, r) => (function(e, t) {
            var n;
            let r = ei.document,
                i = ei.location && oN(ei.location.href);
            if (!r || !i) return e;
            let o = null == (n = e.exception) ? void 0 : n.values;
            if (!(null == o ? void 0 : o.length)) return e;
            let a = r.documentElement.innerHTML;
            if (!a) return e;
            let s = ["<!DOCTYPE html>", "<html>", ...a.split("\n"), "</html>"];
            return o.forEach(e => {
                let n = e.stacktrace;
                (null == n ? void 0 : n.frames) && (n.frames = n.frames.map(e => {
                    var n, r, o, a;
                    return n = e, r = s, o = i, a = t, n.filename === o && n.lineno && r.length && ! function(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5;
                        if (void 0 === t.lineno) return;
                        let r = e.length,
                            i = Math.max(Math.min(r - 1, t.lineno - 1), 0);
                        t.pre_context = e.slice(Math.max(0, i - n), i).map(e => eZ(e, 0)), t.context_line = eZ(e[Math.min(r - 1, i)], t.colno || 0), t.post_context = e.slice(Math.min(i + 1, r), i + 1 + n).map(e => eZ(e, 0))
                    }(r, n, a), n
                }))
            }), e
        })(t, e.frameContextLines ?? (null == r ? void 0 : r.getDataCollectionOptions().frameContextLines) ?? 5)
    }
};

function fT(e) {
    if (fC(e)) return {
        operationName: e.operationName,
        operationType: void 0
    };
    if (fx(e)) {
        let {
            query: t,
            operationName: n
        } = e, {
            operationName: r = n,
            operationType: i
        } = function(e) {
            let t = e.match(/^(?:\s*)(query|mutation|subscription)(?:\s*)(\w+)(?:\s*)[{(]/);
            if (t) return {
                operationType: t[1],
                operationName: t[2]
            };
            let n = e.match(/^(?:\s*)(query|mutation|subscription)(?:\s*)[{(]/);
            return n ? {
                operationType: n[1],
                operationName: void 0
            } : {
                operationType: void 0,
                operationName: void 0
            }
        }(t);
        return {
            operationName: r,
            operationType: i
        }
    }
    return {
        operationName: void 0,
        operationType: void 0
    }
}

function fI(e) {
    if (fC(e)) return `persisted ${e.operationName}`;
    if (fx(e)) {
        let {
            operationName: t,
            operationType: n
        } = fT(e);
        return t ? `${n} ${t}` : `${n}`
    }
    return "unknown"
}

function fR(e) {
    let t;
    if ("xhr" in e) {
        let n = e.xhr[ap];
        t = n && cu(n.body)[0]
    } else t = cu(cc(e.input))[0];
    return t
}

function fx(e) {
    return eI(e) && "string" == typeof e.query
}

function fC(e) {
    return eI(e) && "string" == typeof e.operationName && eI(e.extensions) && eI(e.extensions.persistedQuery) && "string" == typeof e.extensions.persistedQuery.sha256Hash && "number" == typeof e.extensions.persistedQuery.version
}

function fA(e) {
    try {
        let t = JSON.parse(e);
        if (fx(t) || fC(t)) return t;
        return
    } catch {
        return
    }
}
let fM = e => ({
        name: "GraphQLClient",
        setup(t) {
            var n, r, i, o;
            n = t, r = e, n.on("beforeOutgoingRequestSpan", (e, t) => {
                let i = n7(e).attributes;
                if ("http.client" !== i[nd]) return;
                let o = i[nb],
                    a = i[ni] || i["http.method"];
                if (!ew(o) || !ew(a)) return;
                let {
                    endpoints: s
                } = r, l = e2(o, s), u = fR(t);
                if (l && u) {
                    let t = fA(u);
                    if (t) {
                        iq(n) || e.updateName(`${a} ${o} (${fI(t)})`);
                        let {
                            operationName: r,
                            operationType: i
                        } = fT(t);
                        e.setAttribute("graphql.operation.name", r), e.setAttribute("graphql.operation.type", i), fx(t) && !0 === n.getDataCollectionOptions().graphQL.document && e.setAttribute(nr, t.query), fC(t) && (e.setAttribute("graphql.persisted_query.hash.sha256", t.extensions.persistedQuery.sha256Hash), e.setAttribute("graphql.persisted_query.version", t.extensions.persistedQuery.version))
                    }
                }
            }), i = t, o = e, i.on("beforeOutgoingRequestBreadcrumb", (e, t) => {
                let {
                    category: n,
                    type: r,
                    data: a
                } = e;
                if ("http" === r && ("fetch" === n || "xhr" === n)) {
                    let e = null == a ? void 0 : a.url,
                        {
                            endpoints: n
                        } = o,
                        r = e2(e, n),
                        s = fR(t);
                    if (r && a && s) {
                        let e = fA(s);
                        if (!a.graphql && e) {
                            let t = fI(e);
                            a["graphql.operation"] = t, fx(e) && !0 === i.getDataCollectionOptions().graphQL.document && (a[nr] = e.query), fC(e) && (a["graphql.persisted_query.hash.sha256"] = e.extensions.persistedQuery.sha256Hash, a["graphql.persisted_query.version"] = e.extensions.persistedQuery.version)
                        }
                    }
                }
            })
        }
    }),
    fP = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = ["script"];
        return {
            name: "ViewHierarchy",
            processEvent: (n, r) => {
                var i, o;
                if (void 0 !== n.type || (null == (i = e.shouldAttach) ? void 0 : i.call(e, n, r)) === !1) return n;
                let a = {
                    rendering_system: "DOM",
                    positioning: "absolute",
                    windows: []
                };
                ! function n(r, i) {
                    let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    if (r)
                        for (let s of "shadowRoot" in r && r.shadowRoot ? r.shadowRoot.children : r.children) {
                            var a;
                            if (!(s instanceof HTMLElement)) continue;
                            let r = ab(s, 1) || void 0,
                                l = s.tagName.toLowerCase();
                            if (t.includes(l)) continue;
                            let u = (null == (a = e.onElement) ? void 0 : a.call(e, {
                                element: s,
                                componentName: r,
                                tagName: l,
                                depth: o
                            })) || {};
                            if ("skip" === u) continue;
                            if ("children" === u) {
                                n(s, i, o + 1);
                                continue
                            }
                            let {
                                x: c,
                                y: d,
                                width: p,
                                height: f
                            } = s.getBoundingClientRect(), h = {
                                identifier: s.id || void 0,
                                type: r || l,
                                visible: !0,
                                alpha: 1,
                                height: f,
                                width: p,
                                x: c,
                                y: d,
                                ...u
                            };
                            h.children = [], n(s, h.children, o + 1), i.push(h)
                        }
                }((null == (o = e.rootElement) ? void 0 : o.call(e)) || ei.document.body, a.windows);
                let s = {
                    filename: "view-hierarchy.json",
                    attachmentType: "event.view_hierarchy",
                    contentType: "application/json",
                    data: JSON.stringify(a)
                };
                return r.attachments = r.attachments || [], r.attachments.push(s), n
            }
        }
    },
    fN = "sentryReplaySession",
    fO = "Unable to send Replay";
var fD = Object.defineProperty,
    fL = (e, t, n) => {
        let r;
        return (r = "symbol" != typeof t ? t + "" : t) in e ? fD(e, r, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[r] = n
    },
    f$ = ((j = f$ || {})[j.Document = 0] = "Document", j[j.DocumentType = 1] = "DocumentType", j[j.Element = 2] = "Element", j[j.Text = 3] = "Text", j[j.CDATA = 4] = "CDATA", j[j.Comment = 5] = "Comment", j);

function fF(e) {
    return e.nodeType === e.ELEMENT_NODE
}

function fU(e) {
    let t = null == e ? void 0 : e.host;
    return (null == t ? void 0 : t.shadowRoot) === e
}

function fB(e) {
    return "[object ShadowRoot]" === Object.prototype.toString.call(e)
}

function fj(e) {
    try {
        var t;
        let n = e.rules || e.cssRules;
        return n ? ((t = Array.from(n, fW).join("")).includes(" background-clip: text;") && !t.includes(" -webkit-background-clip: text;") && (t = t.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;")), t) : null
    } catch (e) {
        return null
    }
}

function fW(e) {
    let t;
    if ("styleSheet" in e) try {
        t = fj(e.styleSheet) || function(e) {
            let {
                cssText: t
            } = e;
            if (t.split('"').length < 3) return t;
            let n = ["@import", `url(${JSON.stringify(e.href)})`];
            return "" === e.layerName ? n.push("layer") : e.layerName && n.push(`layer(${e.layerName})`), e.supportsText && n.push(`supports(${e.supportsText})`), e.media.length && n.push(e.media.mediaText), n.join(" ") + ";"
        }(e)
    } catch (e) {} else if ("selectorText" in e) {
        let t = e.cssText,
            n = e.selectorText.includes(":"),
            r = "string" == typeof e.style.all && e.style.all;
        if (r && (t = function(e) {
                let t = "";
                for (let n = 0; n < e.style.length; n++) {
                    let r = e.style,
                        i = r[n],
                        o = r.getPropertyPriority(i);
                    t += `${i}:${r.getPropertyValue(i)}${o?" !important":""};`
                }
                return `${e.selectorText} { ${t} }`
            }(e)), n && (t = t.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2")), n || r) return t
    }
    return t || e.cssText
}
class fH {
    getId(e) {
        var t;
        return e ? (null == (t = this.getMeta(e)) ? void 0 : t.id) ?? -1 : -1
    }
    getNode(e) {
        return this.idNodeMap.get(e) || null
    }
    getIds() {
        return Array.from(this.idNodeMap.keys())
    }
    getMeta(e) {
        return this.nodeMetaMap.get(e) || null
    }
    removeNodeFromMap(e) {
        let t = this.getId(e);
        this.idNodeMap.delete(t), e.childNodes && e.childNodes.forEach(e => this.removeNodeFromMap(e)), fF(e) && e.shadowRoot && this.removeNodeFromMap(e.shadowRoot)
    }
    has(e) {
        return this.idNodeMap.has(e)
    }
    hasNode(e) {
        return this.nodeMetaMap.has(e)
    }
    add(e, t) {
        let n = t.id;
        this.idNodeMap.set(n, e), this.nodeMetaMap.set(e, t)
    }
    replace(e, t) {
        let n = this.getNode(e);
        if (n) {
            let e = this.nodeMetaMap.get(n);
            e && this.nodeMetaMap.set(t, e)
        }
        this.idNodeMap.set(e, t)
    }
    reset() {
        this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
    }
    constructor() {
        fL(this, "idNodeMap", new Map), fL(this, "nodeMetaMap", new WeakMap)
    }
}

function fz(e) {
    let {
        maskInputOptions: t,
        tagName: n,
        type: r
    } = e;
    return "OPTION" === n && (n = "SELECT"), !!(t[n.toLowerCase()] || r && t[r] || "password" === r || "INPUT" === n && !r && t.text)
}

function fq(e) {
    let {
        isMasked: t,
        element: n,
        value: r,
        maskInputFn: i
    } = e, o = r || "";
    return t ? (i && (o = i(o, n)), "*".repeat(o.length)) : o
}

function fG(e) {
    return e.toLowerCase()
}

function fV(e) {
    return e.toUpperCase()
}
let fY = "__rrweb_original__";

function fK(e) {
    let t = e.type;
    return e.hasAttribute("data-rr-is-password") ? "password" : t ? fG(t) : null
}

function fJ(e, t, n) {
    return "INPUT" === t && ("radio" === n || "checkbox" === n) ? e.getAttribute("value") || "" : e.value
}

function fX(e, t) {
    let n;
    try {
        n = new URL(e, t ?? window.location.href)
    } catch (e) {
        return null
    }
    let r = n.pathname.match(/\.([0-9a-z]+)(?:$)/i);
    return (null == r ? void 0 : r[1]) ?? null
}
let fQ = {};

function fZ(e) {
    let t = fQ[e];
    if (t) return t;
    let n = window[e].bind(window),
        r = n,
        i = window.document;
    if (i && "function" == typeof i.createElement) try {
        let t = i.createElement("iframe");
        t.hidden = !0, i.head.appendChild(t);
        let o = t.contentWindow;
        if (o && o[e]) {
            let t = o[e].bind(window);
            r = function() {
                for (var r = arguments.length, i = Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                try {
                    return t(...i)
                } catch {
                    return fQ[e] = n, n(...i)
                }
            }
        }
        i.head.removeChild(t)
    } catch (e) {}
    return fQ[e] = r
}

function f0() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return fZ("setTimeout")(...t)
}

function f1() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return fZ("clearTimeout")(...t)
}

function f2(e) {
    try {
        return e.contentDocument
    } catch {}
}
let f3 = 1,
    f5 = RegExp("[^a-z0-9-_:]");

function f4() {
    return f3++
}
let f6 = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
    f8 = /^(?:[a-z+]+:)?\/\//i,
    f7 = /^www\..*/i,
    f9 = /^(data:)([^,]*),(.*)/i;

function he(e, t) {
    return (e || "").replace(f6, (e, n, r, i, o, a) => {
        let s = r || o || a,
            l = n || i || "";
        if (!s) return e;
        if (f8.test(s) || f7.test(s) || f9.test(s)) return `url(${l}${s}${l})`;
        if ("/" === s[0]) return `url(${l}${(t.indexOf("//")>-1?t.split("/").slice(0,3).join("/"):t.split("/")[0]).split("?")[0]+s}${l})`;
        let u = t.split("/"),
            c = s.split("/");
        for (let e of (u.pop(), c))
            if ("." === e) continue;
            else ".." === e ? u.pop() : u.push(e);
        return `url(${l}${u.join("/")}${l})`
    })
}
let ht = /^[^ \t\n\r\u000c]+/,
    hn = /^[, \t\n\r\u000c]+/,
    hr = new WeakMap;

function hi(e, t) {
    return t && "" !== t.trim() ? ho(e, t) : t
}

function ho(e, t) {
    let n = hr.get(e);
    if (n || (n = e.createElement("a"), hr.set(e, n)), t) {
        if (t.startsWith("blob:") || t.startsWith("data:")) return t
    } else t = "";
    return n.setAttribute("href", t), n.href
}

function ha(e, t, n, r, i, o, a) {
    if (!r) return r;
    if ("src" === n || "href" === n && ("use" !== t || "#" !== r[0]) || "xlink:href" === n && "#" !== r[0]) return hi(e, r);
    if ("background" === n && ("table" === t || "td" === t || "th" === t)) return hi(e, r);
    if ("srcset" === n) return function(e, t) {
        if ("" === t.trim()) return t;
        let n = 0;

        function r(e) {
            let r, i = e.exec(t.substring(n));
            return i ? (r = i[0], n += r.length, r) : ""
        }
        let i = [];
        for (; r(hn), !(n >= t.length);) {
            let o = r(ht);
            if ("," === o.slice(-1)) o = hi(e, o.substring(0, o.length - 1)), i.push(o);
            else {
                let r = "";
                o = hi(e, o);
                let a = !1;
                for (;;) {
                    let e = t.charAt(n);
                    if ("" === e) {
                        i.push((o + r).trim());
                        break
                    }
                    if (a) ")" === e && (a = !1);
                    else if ("," === e) {
                        n += 1, i.push((o + r).trim());
                        break
                    } else "(" === e && (a = !0);
                    r += e, n += 1
                }
            }
        }
        return i.join(", ")
    }(e, r);
    if ("style" === n) {
        let t = he(r, ho(e));
        return a && a.size > 0 && (t = function(e, t) {
            if (!e || 0 === t.size) return e;
            try {
                let n = e.split(";"),
                    r = [];
                for (let e of n) {
                    if (!(e = e.trim())) continue;
                    let n = e.indexOf(":");
                    if (-1 === n) {
                        r.push(e);
                        continue
                    }
                    let i = e.slice(0, n).trim();
                    t.has(i) || r.push(e)
                }
                return r.join("; ") + (r.length > 0 && e.endsWith(";") ? ";" : "")
            } catch (t) {
                return console.warn("Error filtering CSS properties:", t), e
            }
        }(t, a)), t
    } else if ("object" === t && "data" === n) return hi(e, r);
    return "function" == typeof o ? o(n, r, i) : r
}

function hs(e, t, n) {
    return ("video" === e || "audio" === e) && "autoplay" === t
}

function hl(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
    return e ? fU(e) ? hl(e.host, t, n, r + 1) : e.nodeType !== e.ELEMENT_NODE || r > n ? -1 : t(e) ? r : hl(e.parentNode, t, n, r + 1) : -1
}

function hu(e, t) {
    return n => {
        if (null === n) return !1;
        try {
            if (e) {
                if ("string" == typeof e) {
                    if (n.matches(`.${e}`)) return !0
                } else if (function(e, t) {
                        for (let n = e.classList.length; n--;) {
                            let r = e.classList[n];
                            if (t.test(r)) return !0
                        }
                        return !1
                    }(n, e)) return !0
            }
            if (t && n.matches(t)) return !0;
            return !1
        } catch {
            return !1
        }
    }
}

function hc(e, t, n, r, i, o) {
    try {
        let a = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
        if (null === a) return !1;
        if ("INPUT" === a.tagName) {
            let e = a.getAttribute("autocomplete");
            if (["current-password", "new-password", "cc-number", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-csc"].includes(e)) return !0
        }
        let s = -1,
            l = -1;
        if (o) {
            if ((l = hl(a, hu(r, i))) < 0) return !0;
            s = hl(a, hu(t, n), l >= 0 ? l : 1 / 0)
        } else {
            if ((s = hl(a, hu(t, n))) < 0) return !1;
            l = hl(a, hu(r, i), s >= 0 ? s : 1 / 0)
        }
        return s >= 0 ? !(l >= 0) || s <= l : !(l >= 0) && !!o
    } catch (e) {}
    return !!o
}

function hd(e) {
    return null == e ? "" : e.toLowerCase()
}

function hp(e, t) {
    let n, {
            doc: r,
            mirror: i,
            blockClass: o,
            blockSelector: a,
            unblockSelector: s,
            maskAllText: l,
            maskTextClass: u,
            unmaskTextClass: c,
            maskTextSelector: d,
            unmaskTextSelector: p,
            skipChild: f = !1,
            inlineStylesheet: h = !0,
            maskInputOptions: m = {},
            maskAttributeFn: g,
            maskTextFn: v,
            maskInputFn: _,
            slimDOMOptions: y,
            dataURLOptions: b = {},
            inlineImages: S = !1,
            recordCanvas: w = !1,
            onSerialize: E,
            onIframeLoad: k,
            iframeLoadTimeout: T = 5e3,
            onBlockedImageLoad: I,
            onStylesheetLoad: R,
            stylesheetLoadTimeout: x = 5e3,
            keepIframeSrcFn: M = () => !1,
            newlyAddedElement: P = !1,
            ignoreCSSAttributes: N
        } = t,
        {
            preserveWhiteSpace: O = !0
        } = t,
        D = function(e, t) {
            let {
                doc: n,
                mirror: r,
                blockClass: i,
                blockSelector: o,
                unblockSelector: a,
                maskAllText: s,
                maskAttributeFn: l,
                maskTextClass: u,
                unmaskTextClass: c,
                maskTextSelector: d,
                unmaskTextSelector: p,
                inlineStylesheet: f,
                maskInputOptions: h = {},
                maskTextFn: m,
                maskInputFn: g,
                dataURLOptions: v = {},
                inlineImages: _,
                recordCanvas: y,
                keepIframeSrcFn: b,
                newlyAddedElement: S = !1,
                ignoreCSSAttributes: w
            } = t, E = function(e, t) {
                if (!t.hasNode(e)) return;
                let n = t.getId(e);
                return 1 === n ? void 0 : n
            }(n, r);
            switch (e.nodeType) {
                case e.DOCUMENT_NODE:
                    if ("CSS1Compat" !== e.compatMode) return {
                        type: f$.Document,
                        childNodes: [],
                        compatMode: e.compatMode
                    };
                    return {
                        type: f$.Document,
                        childNodes: []
                    };
                case e.DOCUMENT_TYPE_NODE:
                    return {
                        type: f$.DocumentType,
                        name: e.name,
                        publicId: e.publicId,
                        systemId: e.systemId,
                        rootId: E
                    };
                case e.ELEMENT_NODE:
                    return function(e, t) {
                        let n, {
                                doc: r,
                                blockClass: i,
                                blockSelector: o,
                                unblockSelector: a,
                                inlineStylesheet: s,
                                maskInputOptions: l = {},
                                maskAttributeFn: u,
                                maskInputFn: c,
                                dataURLOptions: d = {},
                                inlineImages: p,
                                recordCanvas: f,
                                keepIframeSrcFn: h,
                                newlyAddedElement: m = !1,
                                rootId: g,
                                maskTextClass: v,
                                unmaskTextClass: _,
                                maskTextSelector: y,
                                unmaskTextSelector: b,
                                ignoreCSSAttributes: S
                            } = t,
                            w = function(e, t, n, r) {
                                try {
                                    if (r && e.matches(r)) return !1;
                                    if ("string" == typeof t) {
                                        if (e.classList.contains(t)) return !0
                                    } else
                                        for (let n = e.classList.length; n--;) {
                                            let r = e.classList[n];
                                            if (t.test(r)) return !0
                                        }
                                    if (n) return e.matches(n)
                                } catch (e) {}
                                return !1
                            }(e, i, o, a),
                            E = function(e) {
                                if (e instanceof HTMLFormElement) return "form";
                                let t = fG(e.tagName);
                                return f5.test(t) ? "div" : t
                            }(e),
                            k = {},
                            T = e.attributes.length;
                        for (let t = 0; t < T; t++) {
                            let n = e.attributes[t];
                            n.name && !hs(E, n.name, n.value) && (k[n.name] = ha(r, E, fG(n.name), n.value, e, u, S))
                        }
                        if ("link" === E && s) {
                            let t = Array.from(r.styleSheets).find(t => t.href === e.href),
                                n = null;
                            t && (n = fj(t)), n && (k.rel = null, k.href = null, k.crossorigin = null, k._cssText = he(n, t.href))
                        }
                        if ("style" === E && e.sheet && !(e.innerText || e.textContent || "").trim().length) {
                            let t = fj(e.sheet);
                            t && (k._cssText = he(t, ho(r)))
                        }
                        if ("input" === E || "textarea" === E || "select" === E || "option" === E) {
                            let t = fK(e),
                                n = fJ(e, fV(E), t),
                                r = e.checked;
                            if ("submit" !== t && "button" !== t && n) {
                                let r = hc(e, v, y, _, b, fz({
                                    type: t,
                                    tagName: fV(E),
                                    maskInputOptions: l
                                }));
                                k.value = fq({
                                    isMasked: r,
                                    element: e,
                                    value: n,
                                    maskInputFn: c
                                })
                            }
                            r && (k.checked = r)
                        }
                        if ("option" === E && (e.selected && !l.select ? k.selected = !0 : delete k.selected), "canvas" === E && f) {
                            if ("2d" === e.__context) ! function(e) {
                                let t = e.getContext("2d");
                                if (!t) return !0;
                                for (let n = 0; n < e.width; n += 50)
                                    for (let r = 0; r < e.height; r += 50) {
                                        let i = t.getImageData;
                                        if (new Uint32Array((fY in i ? i[fY] : i).call(t, n, r, Math.min(50, e.width - n), Math.min(50, e.height - r)).data.buffer).some(e => 0 !== e)) return !1
                                    }
                                return !0
                            }(e) && (k.rr_dataURL = e.toDataURL(d.type, d.quality));
                            else if (!("__context" in e)) {
                                let t = e.toDataURL(d.type, d.quality),
                                    n = r.createElement("canvas");
                                n.width = e.width, n.height = e.height, t !== n.toDataURL(d.type, d.quality) && (k.rr_dataURL = t)
                            }
                        }
                        if ("img" === E && p) {
                            C || (A = (C = r.createElement("canvas")).getContext("2d"));
                            let t = e.currentSrc || e.getAttribute("src") || "<unknown-src>",
                                n = e.crossOrigin,
                                i = () => {
                                    e.removeEventListener("load", i);
                                    try {
                                        C.width = e.naturalWidth, C.height = e.naturalHeight, A.drawImage(e, 0, 0), k.rr_dataURL = C.toDataURL(d.type, d.quality)
                                    } catch (n) {
                                        if ("anonymous" !== e.crossOrigin) {
                                            e.crossOrigin = "anonymous", e.complete && 0 !== e.naturalWidth ? i() : e.addEventListener("load", i);
                                            return
                                        }
                                        console.warn(`Cannot inline img src=${t}! Error: ${n}`)
                                    }
                                    "anonymous" === e.crossOrigin && (n ? k.crossOrigin = n : e.removeAttribute("crossorigin"))
                                };
                            e.complete && 0 !== e.naturalWidth ? i() : e.addEventListener("load", i)
                        }
                        if (("audio" === E || "video" === E) && (k.rr_mediaState = e.paused ? "paused" : "played", k.rr_mediaCurrentTime = e.currentTime), !m && (e.scrollLeft && (k.rr_scrollLeft = e.scrollLeft), e.scrollTop && (k.rr_scrollTop = e.scrollTop)), w) {
                            let {
                                width: t,
                                height: n
                            } = e.getBoundingClientRect();
                            k = {
                                class: k.class,
                                rr_width: `${t}px`,
                                rr_height: `${n}px`
                            }
                        }
                        "iframe" !== E || h(k.src) || (w || f2(e) || (k.rr_src = k.src), delete k.src);
                        try {
                            customElements.get(E) && (n = !0)
                        } catch (e) {}
                        return {
                            type: f$.Element,
                            tagName: E,
                            attributes: k,
                            childNodes: [],
                            isSVG: !!("svg" === e.tagName || e.ownerSVGElement) || void 0,
                            needBlock: w,
                            rootId: g,
                            isCustom: n
                        }
                    }(e, {
                        doc: n,
                        blockClass: i,
                        blockSelector: o,
                        unblockSelector: a,
                        inlineStylesheet: f,
                        maskAttributeFn: l,
                        maskInputOptions: h,
                        maskInputFn: g,
                        dataURLOptions: v,
                        inlineImages: _,
                        recordCanvas: y,
                        keepIframeSrcFn: b,
                        newlyAddedElement: S,
                        rootId: E,
                        maskTextClass: u,
                        unmaskTextClass: c,
                        maskTextSelector: d,
                        unmaskTextSelector: p,
                        ignoreCSSAttributes: w
                    });
                case e.TEXT_NODE:
                    return function(e, t) {
                        let {
                            maskAllText: n,
                            maskTextClass: r,
                            unmaskTextClass: i,
                            maskTextSelector: o,
                            unmaskTextSelector: a,
                            maskTextFn: s,
                            maskInputOptions: l,
                            maskInputFn: u,
                            rootId: c
                        } = t, d = e.parentNode && e.parentNode.tagName, p = e.textContent, f = "STYLE" === d || void 0, h = "SCRIPT" === d || void 0, m = "TEXTAREA" === d || void 0;
                        if (f && p) {
                            try {
                                var g;
                                e.nextSibling || e.previousSibling || (null == (g = e.parentNode.sheet) ? void 0 : g.cssRules) && (p = fj(e.parentNode.sheet))
                            } catch (t) {
                                console.warn(`Cannot get CSS styles from text's parentNode. Error: ${t}`, e)
                            }
                            p = he(p, ho(t.doc))
                        }
                        h && (p = "SCRIPT_PLACEHOLDER");
                        let v = hc(e, r, o, i, a, n);
                        return f || h || m || !p || !v || (p = s ? s(p, e.parentElement) : p.replace(/[\S]/g, "*")), m && p && (l.textarea || v) && (p = u ? u(p, e.parentNode) : p.replace(/[\S]/g, "*")), "OPTION" === d && p && (p = fq({
                            isMasked: hc(e, r, o, i, a, fz({
                                type: null,
                                tagName: d,
                                maskInputOptions: l
                            })),
                            element: e,
                            value: p,
                            maskInputFn: u
                        })), {
                            type: f$.Text,
                            textContent: p || "",
                            isStyle: f,
                            rootId: c
                        }
                    }(e, {
                        doc: n,
                        maskAllText: s,
                        maskTextClass: u,
                        unmaskTextClass: c,
                        maskTextSelector: d,
                        unmaskTextSelector: p,
                        maskTextFn: m,
                        maskInputOptions: h,
                        maskInputFn: g,
                        rootId: E
                    });
                case e.CDATA_SECTION_NODE:
                    return {
                        type: f$.CDATA,
                        textContent: "",
                        rootId: E
                    };
                case e.COMMENT_NODE:
                    return {
                        type: f$.Comment,
                        textContent: e.textContent || "",
                        rootId: E
                    };
                default:
                    return !1
            }
        }(e, {
            doc: r,
            mirror: i,
            blockClass: o,
            blockSelector: a,
            maskAllText: l,
            unblockSelector: s,
            maskTextClass: u,
            unmaskTextClass: c,
            maskTextSelector: d,
            unmaskTextSelector: p,
            inlineStylesheet: h,
            maskInputOptions: m,
            maskAttributeFn: g,
            maskTextFn: v,
            maskInputFn: _,
            dataURLOptions: b,
            inlineImages: S,
            recordCanvas: w,
            keepIframeSrcFn: M,
            newlyAddedElement: P,
            ignoreCSSAttributes: N
        });
    if (!D) return console.warn(e, "not serialized"), null;
    n = i.hasNode(e) ? i.getId(e) : ! function(e, t) {
        if (t.comment && e.type === f$.Comment) return !0;
        if (e.type === f$.Element) {
            if (t.script && ("script" === e.tagName || "link" === e.tagName && ("preload" === e.attributes.rel || "modulepreload" === e.attributes.rel) || "link" === e.tagName && "prefetch" === e.attributes.rel && "string" == typeof e.attributes.href && "js" === fX(e.attributes.href))) return !0;
            else if (t.headFavicon && ("link" === e.tagName && "shortcut icon" === e.attributes.rel || "meta" === e.tagName && (hd(e.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === hd(e.attributes.name) || "icon" === hd(e.attributes.rel) || "apple-touch-icon" === hd(e.attributes.rel) || "shortcut icon" === hd(e.attributes.rel)))) return !0;
            else if ("meta" === e.tagName) {
                if (t.headMetaDescKeywords && hd(e.attributes.name).match(/^description|keywords$/)) return !0;
                else if (t.headMetaSocial && (hd(e.attributes.property).match(/^(og|twitter|fb):/) || hd(e.attributes.name).match(/^(og|twitter):/) || "pinterest" === hd(e.attributes.name))) return !0;
                else if (t.headMetaRobots && ("robots" === hd(e.attributes.name) || "googlebot" === hd(e.attributes.name) || "bingbot" === hd(e.attributes.name))) return !0;
                else if (t.headMetaHttpEquiv && void 0 !== e.attributes["http-equiv"]) return !0;
                else if (t.headMetaAuthorship && ("author" === hd(e.attributes.name) || "generator" === hd(e.attributes.name) || "framework" === hd(e.attributes.name) || "publisher" === hd(e.attributes.name) || "progid" === hd(e.attributes.name) || hd(e.attributes.property).match(/^article:/) || hd(e.attributes.property).match(/^product:/))) return !0;
                else if (t.headMetaVerification && ("google-site-verification" === hd(e.attributes.name) || "yandex-verification" === hd(e.attributes.name) || "csrf-token" === hd(e.attributes.name) || "p:domain_verify" === hd(e.attributes.name) || "verify-v1" === hd(e.attributes.name) || "verification" === hd(e.attributes.name) || "shopify-checkout-api-token" === hd(e.attributes.name))) return !0
            }
        }
        return !1
    }(D, y) && (O || D.type !== f$.Text || D.isStyle || D.textContent.trim().length) ? f4() : -2;
    let L = Object.assign(D, {
        id: n
    });
    if (i.add(e, L), -2 === n) return null;
    E && E(e);
    let $ = !f;
    if (L.type === f$.Element) {
        $ = $ && !L.needBlock;
        let t = e.shadowRoot;
        t && fB(t) && (L.isShadowHost = !0)
    }
    if ((L.type === f$.Document || L.type === f$.Element) && $) {
        y.headWhitespace && L.type === f$.Element && "head" === L.tagName && (O = !1);
        let t = {
            doc: r,
            mirror: i,
            blockClass: o,
            blockSelector: a,
            maskAllText: l,
            unblockSelector: s,
            maskTextClass: u,
            unmaskTextClass: c,
            maskTextSelector: d,
            unmaskTextSelector: p,
            skipChild: f,
            inlineStylesheet: h,
            maskInputOptions: m,
            maskAttributeFn: g,
            maskTextFn: v,
            maskInputFn: _,
            slimDOMOptions: y,
            dataURLOptions: b,
            inlineImages: S,
            recordCanvas: w,
            preserveWhiteSpace: O,
            onSerialize: E,
            onIframeLoad: k,
            iframeLoadTimeout: T,
            onBlockedImageLoad: I,
            onStylesheetLoad: R,
            stylesheetLoadTimeout: x,
            keepIframeSrcFn: M,
            ignoreCSSAttributes: N
        };
        for (let n of e.childNodes ? Array.from(e.childNodes) : []) {
            let e = hp(n, t);
            e && L.childNodes.push(e)
        }
        if (fF(e) && e.shadowRoot)
            for (let n of Array.from(e.shadowRoot.childNodes)) {
                let r = hp(n, t);
                r && (fB(e.shadowRoot) && (r.isShadow = !0), L.childNodes.push(r))
            }
    }
    if (e.parentNode && fU(e.parentNode) && fB(e.parentNode) && (L.isShadow = !0), L.type !== f$.Element || "iframe" !== L.tagName || L.needBlock || function(e, t, n) {
            let r, i = function(e) {
                try {
                    return e.contentWindow
                } catch {}
            }(e);
            if (!i) return;
            let o = !1;
            try {
                r = i.document.readyState
            } catch (e) {
                return
            }
            if ("complete" !== r) {
                let r = f0(() => {
                    o || (t(), o = !0)
                }, n);
                e.addEventListener("load", () => {
                    f1(r), o = !0, t()
                });
                return
            }
            let a = "about:blank";
            if (i.location.href !== a || e.src === a || "" === e.src) return f0(t, 0), e.addEventListener("load", t);
            e.addEventListener("load", t)
        }(e, () => {
            let t = f2(e);
            if (t && k) {
                let n = hp(t, {
                    doc: t,
                    mirror: i,
                    blockClass: o,
                    blockSelector: a,
                    unblockSelector: s,
                    maskAllText: l,
                    maskTextClass: u,
                    unmaskTextClass: c,
                    maskTextSelector: d,
                    unmaskTextSelector: p,
                    skipChild: !1,
                    inlineStylesheet: h,
                    maskInputOptions: m,
                    maskAttributeFn: g,
                    maskTextFn: v,
                    maskInputFn: _,
                    slimDOMOptions: y,
                    dataURLOptions: b,
                    inlineImages: S,
                    recordCanvas: w,
                    preserveWhiteSpace: O,
                    onSerialize: E,
                    onIframeLoad: k,
                    iframeLoadTimeout: T,
                    onStylesheetLoad: R,
                    stylesheetLoadTimeout: x,
                    keepIframeSrcFn: M,
                    ignoreCSSAttributes: N
                });
                n && k(e, n)
            }
        }, T), L.type === f$.Element && "img" === L.tagName && !e.complete && L.needBlock) {
        let t = () => {
            if (e.isConnected && !e.complete && I) try {
                let t = e.getBoundingClientRect();
                t.width > 0 && t.height > 0 && I(e, L, t)
            } catch (e) {}
            e.removeEventListener("load", t)
        };
        e.isConnected && e.addEventListener("load", t)
    }
    return L.type === f$.Element && "link" === L.tagName && "string" == typeof L.attributes.rel && ("stylesheet" === L.attributes.rel || "preload" === L.attributes.rel && "string" == typeof L.attributes.href && "css" === fX(L.attributes.href)) && function(e, t, n) {
        let r, i = !1;
        try {
            r = e.sheet
        } catch (e) {
            r = null
        }
        if (r) return;
        let o = f0(() => {
            i || (t(), i = !0)
        }, n);
        e.addEventListener("load", () => {
            f1(o), i = !0, t()
        })
    }(e, () => {
        if (R) {
            let t = hp(e, {
                doc: r,
                mirror: i,
                blockClass: o,
                blockSelector: a,
                unblockSelector: s,
                maskAllText: l,
                maskTextClass: u,
                unmaskTextClass: c,
                maskTextSelector: d,
                unmaskTextSelector: p,
                skipChild: !1,
                inlineStylesheet: h,
                maskInputOptions: m,
                maskAttributeFn: g,
                maskTextFn: v,
                maskInputFn: _,
                slimDOMOptions: y,
                dataURLOptions: b,
                inlineImages: S,
                recordCanvas: w,
                preserveWhiteSpace: O,
                onSerialize: E,
                onIframeLoad: k,
                iframeLoadTimeout: T,
                onStylesheetLoad: R,
                stylesheetLoadTimeout: x,
                keepIframeSrcFn: M,
                ignoreCSSAttributes: N
            });
            t && R(e, t)
        }
    }, x), L.type === f$.Element && delete L.needBlock, L
}

function hf(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document,
        r = {
            capture: !0,
            passive: !0
        };
    return n.addEventListener(e, t, r), () => n.removeEventListener(e, t, r)
}
let hh = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
    hm = {
        map: {},
        getId: () => (console.error(hh), -1),
        getNode: () => (console.error(hh), null),
        removeNodeFromMap() {
            console.error(hh)
        },
        has: () => (console.error(hh), !1),
        reset() {
            console.error(hh)
        }
    };

function hg(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = null,
        i = 0;
    return function() {
        for (var o = arguments.length, a = Array(o), s = 0; s < o; s++) a[s] = arguments[s];
        let l = Date.now();
        i || !1 !== n.leading || (i = l);
        let u = t - (l - i),
            c = this;
        u <= 0 || u > t ? (r && (function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            hN("clearTimeout")(...t)
        }(r), r = null), i = l, e.apply(c, a)) : r || !1 === n.trailing || (r = hO(() => {
            i = !1 === n.leading ? 0 : Date.now(), r = null, e.apply(c, a)
        }, u))
    }
}

function hv(e, t, n) {
    try {
        if (!(t in e)) return () => {};
        let r = e[t],
            i = n(r);
        return "function" == typeof i && (i.prototype = i.prototype || {}, Object.defineProperties(i, {
            __rrweb_original__: {
                enumerable: !1,
                value: r
            }
        })), e[t] = i, () => {
            e[t] = r
        }
    } catch {
        return () => {}
    }
}
"u" > typeof window && window.Proxy && window.Reflect && (hm = new Proxy(hm, {
    get: (e, t, n) => ("map" === t && console.error(hh), Reflect.get(e, t, n))
}));
let h_ = Date.now;

function hy(e) {
    var t, n, r, i, o, a;
    let s = e.document;
    return {
        left: s.scrollingElement ? s.scrollingElement.scrollLeft : void 0 !== e.pageXOffset ? e.pageXOffset : (null == s ? void 0 : s.documentElement.scrollLeft) || (null == s || null == (n = s.body) || null == (t = n.parentElement) ? void 0 : t.scrollLeft) || (null == s || null == (r = s.body) ? void 0 : r.scrollLeft) || 0,
        top: s.scrollingElement ? s.scrollingElement.scrollTop : void 0 !== e.pageYOffset ? e.pageYOffset : (null == s ? void 0 : s.documentElement.scrollTop) || (null == s || null == (o = s.body) || null == (i = o.parentElement) ? void 0 : i.scrollTop) || (null == s || null == (a = s.body) ? void 0 : a.scrollTop) || 0
    }
}

function hb() {
    return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
}

function hS() {
    return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
}

function hw(e) {
    if (!e) return null;
    try {
        return e.nodeType === e.ELEMENT_NODE ? e : e.parentElement
    } catch (e) {
        return null
    }
}

function hE(e, t, n, r, i) {
    if (!e) return !1;
    let o = hw(e);
    if (!o) return !1;
    let a = hu(t, n);
    if (!i) {
        let e = r && o.matches(r);
        return a(o) && !e
    }
    let s = hl(o, a),
        l = -1;
    return !(s < 0) && (r && (l = hl(o, hu(null, r))), s > -1 && l < 0 || s < l)
}

function hk(e, t) {
    return -2 === t.getId(e)
}

function hT(e) {
    return !!e.changedTouches
}

function hI(e, t) {
    return !!("IFRAME" === e.nodeName && t.getMeta(e))
}

function hR(e, t) {
    return !!("LINK" === e.nodeName && e.nodeType === e.ELEMENT_NODE && e.getAttribute && "stylesheet" === e.getAttribute("rel") && t.getMeta(e))
}

function hx(e) {
    return !!(null == e ? void 0 : e.shadowRoot)
}
/[1-9][0-9]{12}/.test(Date.now().toString()) || (h_ = () => (new Date).getTime());
class hC {
    getId(e) {
        return this.styleIDMap.get(e) ?? -1
    }
    has(e) {
        return this.styleIDMap.has(e)
    }
    add(e, t) {
        let n;
        return this.has(e) ? this.getId(e) : (n = void 0 === t ? this.id++ : t, this.styleIDMap.set(e, n), this.idStyleMap.set(n, e), n)
    }
    getStyle(e) {
        return this.idStyleMap.get(e) || null
    }
    reset() {
        this.styleIDMap = new WeakMap, this.idStyleMap = new Map, this.id = 1
    }
    generateId() {
        return this.id++
    }
    constructor() {
        this.id = 1, this.styleIDMap = new WeakMap, this.idStyleMap = new Map
    }
}

function hA(e) {
    var t, n;
    let r = null;
    return (null == (n = e.getRootNode) || null == (t = n.call(e)) ? void 0 : t.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && e.getRootNode().host && (r = e.getRootNode().host), r
}

function hM(e) {
    let t = e.ownerDocument;
    return !!t && (t.contains(e) || function(e) {
        let t = e.ownerDocument;
        if (!t) return !1;
        let n = function(e) {
            let t, n = e;
            for (; t = hA(n);) n = t;
            return n
        }(e);
        return t.contains(n)
    }(e))
}
let hP = {};

function hN(e) {
    let t = hP[e];
    if (t) return t;
    let n = window[e].bind(window),
        r = n,
        i = window.document;
    if (i && "function" == typeof i.createElement) try {
        let t = i.createElement("iframe");
        t.hidden = !0, i.head.appendChild(t);
        let o = t.contentWindow;
        if (o && o[e]) {
            let t = o[e].bind(window);
            r = function() {
                for (var r = arguments.length, i = Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                try {
                    return t(...i)
                } catch {
                    return hP[e] = n, n(...i)
                }
            }
        }
        i.head.removeChild(t)
    } catch (e) {}
    return hP[e] = r
}

function hO() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return hN("setTimeout")(...t)
}
var hD = ((W = hD || {})[W.DomContentLoaded = 0] = "DomContentLoaded", W[W.Load = 1] = "Load", W[W.FullSnapshot = 2] = "FullSnapshot", W[W.IncrementalSnapshot = 3] = "IncrementalSnapshot", W[W.Meta = 4] = "Meta", W[W.Custom = 5] = "Custom", W[W.Plugin = 6] = "Plugin", W),
    hL = ((H = hL || {})[H.Mutation = 0] = "Mutation", H[H.MouseMove = 1] = "MouseMove", H[H.MouseInteraction = 2] = "MouseInteraction", H[H.Scroll = 3] = "Scroll", H[H.ViewportResize = 4] = "ViewportResize", H[H.Input = 5] = "Input", H[H.TouchMove = 6] = "TouchMove", H[H.MediaInteraction = 7] = "MediaInteraction", H[H.StyleSheetRule = 8] = "StyleSheetRule", H[H.CanvasMutation = 9] = "CanvasMutation", H[H.Font = 10] = "Font", H[H.Log = 11] = "Log", H[H.Drag = 12] = "Drag", H[H.StyleDeclaration = 13] = "StyleDeclaration", H[H.Selection = 14] = "Selection", H[H.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", H[H.CustomElement = 16] = "CustomElement", H),
    h$ = ((z = h$ || {})[z.MouseUp = 0] = "MouseUp", z[z.MouseDown = 1] = "MouseDown", z[z.Click = 2] = "Click", z[z.ContextMenu = 3] = "ContextMenu", z[z.DblClick = 4] = "DblClick", z[z.Focus = 5] = "Focus", z[z.Blur = 6] = "Blur", z[z.TouchStart = 7] = "TouchStart", z[z.TouchMove_Departed = 8] = "TouchMove_Departed", z[z.TouchEnd = 9] = "TouchEnd", z[z.TouchCancel = 10] = "TouchCancel", z),
    hF = ((q = hF || {})[q.Mouse = 0] = "Mouse", q[q.Pen = 1] = "Pen", q[q.Touch = 2] = "Touch", q),
    hU = ((G = hU || {})[G.Play = 0] = "Play", G[G.Pause = 1] = "Pause", G[G.Seeked = 2] = "Seeked", G[G.VolumeChange = 3] = "VolumeChange", G[G.RateChange = 4] = "RateChange", G);
let hB = e => M ? function() {
    for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    try {
        return e(...n)
    } catch (e) {
        if (M && !0 === M(e)) return () => {};
        throw e
    }
} : e;
for (var hj = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", hW = "u" < typeof Uint8Array ? [] : new Uint8Array(256), hH = 0; hH < hj.length; hH++) hW[hj.charCodeAt(hH)] = hH;
class hz {
    reset() {}
    freeze() {}
    unfreeze() {}
    lock() {}
    unlock() {}
    snapshot() {}
    addWindow() {}
    addShadowRoot() {}
    resetShadowRoots() {}
}

function hq(e) {
    try {
        return e.contentDocument
    } catch (e) {}
}

function hG(e) {
    try {
        return e.contentWindow
    } catch (e) {}
}
class hV {
    parse(e) {
        return this.parseWithConstructableStylesheet(e) || this.parseWithDetachedElement(e)
    }
    parseWithConstructableStylesheet(e) {
        if ("u" < typeof CSSStyleSheet || "function" != typeof CSSStyleSheet.prototype.replaceSync) return null;
        try {
            let t = new CSSStyleSheet;
            t.replaceSync(`x { ${e} }`);
            let n = t.cssRules[0];
            if (!n || n.type !== CSSRule.STYLE_RULE) return null;
            return n.style
        } catch {
            return null
        }
    }
    parseWithDetachedElement(e) {
        let t = this.getUnattachedDoc().createElement("span");
        return t.setAttribute("style", e), t.style
    }
    getUnattachedDoc() {
        if (!this.unattachedDoc) try {
            this.unattachedDoc = document.implementation.createHTMLDocument()
        } catch {
            this.unattachedDoc = this.doc
        }
        return this.unattachedDoc
    }
    constructor(e) {
        this.doc = e, this.unattachedDoc = null
    }
}
class hY {
    get(e) {
        if (e >= this.length) throw Error("Position outside of list range");
        let t = this.head;
        for (let n = 0; n < e; n++) t = (null == t ? void 0 : t.next) || null;
        return t
    }
    addNode(e) {
        let t = {
            value: e,
            previous: null,
            next: null
        };
        if (e.__ln = t, e.previousSibling && "__ln" in e.previousSibling) {
            let n = e.previousSibling.__ln.next;
            t.next = n, t.previous = e.previousSibling.__ln, e.previousSibling.__ln.next = t, n && (n.previous = t)
        } else if (e.nextSibling && "__ln" in e.nextSibling && e.nextSibling.__ln.previous) {
            let n = e.nextSibling.__ln.previous;
            t.previous = n, t.next = e.nextSibling.__ln, e.nextSibling.__ln.previous = t, n && (n.next = t)
        } else this.head && (this.head.previous = t), t.next = this.head, this.head = t;
        null === t.next && (this.tail = t), this.length++
    }
    removeNode(e) {
        let t = e.__ln;
        this.head && (t.previous ? (t.previous.next = t.next, t.next ? t.next.previous = t.previous : this.tail = t.previous) : (this.head = t.next, this.head ? this.head.previous = null : this.tail = null), e.__ln && delete e.__ln, this.length--)
    }
    constructor() {
        this.length = 0, this.head = null, this.tail = null
    }
}
let hK = (e, t) => `${e}@${t}`;
class hJ {
    init(e) {
        ["mutationCb", "blockClass", "blockSelector", "unblockSelector", "maskAllText", "maskTextClass", "unmaskTextClass", "maskTextSelector", "unmaskTextSelector", "inlineStylesheet", "maskInputOptions", "maskAttributeFn", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager", "ignoreCSSAttributes"].forEach(t => {
            this[t] = e[t]
        }), this.styleDeclarationParser = new hV(this.doc)
    }
    freeze() {
        this.frozen = !0, this.canvasManager.freeze()
    }
    unfreeze() {
        this.frozen = !1, this.canvasManager.unfreeze(), this.emit()
    }
    isFrozen() {
        return this.frozen
    }
    lock() {
        this.locked = !0, this.canvasManager.lock()
    }
    unlock() {
        this.locked = !1, this.canvasManager.unlock(), this.emit()
    }
    reset() {
        this.shadowDomManager.reset(), this.canvasManager.reset()
    }
    constructor() {
        this.frozen = !1, this.locked = !1, this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.mapRemoves = [], this.movedMap = {}, this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.processMutations = e => {
            e.forEach(this.processMutation), this.emit()
        }, this.emit = () => {
            if (this.frozen || this.locked) return;
            let e = [],
                t = new Set,
                n = new hY,
                r = e => {
                    let t = e,
                        n = -2;
                    for (; - 2 === n;) n = (t = t && t.nextSibling) && this.mirror.getId(t);
                    return n
                },
                i = i => {
                    if (!i.parentNode || !hM(i)) return;
                    let o = fU(i.parentNode) ? this.mirror.getId(hA(i)) : this.mirror.getId(i.parentNode),
                        a = r(i);
                    if (-1 === o || -1 === a) return n.addNode(i);
                    let s = hp(i, {
                        doc: this.doc,
                        mirror: this.mirror,
                        blockClass: this.blockClass,
                        blockSelector: this.blockSelector,
                        maskAllText: this.maskAllText,
                        unblockSelector: this.unblockSelector,
                        maskTextClass: this.maskTextClass,
                        unmaskTextClass: this.unmaskTextClass,
                        maskTextSelector: this.maskTextSelector,
                        unmaskTextSelector: this.unmaskTextSelector,
                        skipChild: !0,
                        newlyAddedElement: !0,
                        inlineStylesheet: this.inlineStylesheet,
                        maskInputOptions: this.maskInputOptions,
                        maskAttributeFn: this.maskAttributeFn,
                        maskTextFn: this.maskTextFn,
                        maskInputFn: this.maskInputFn,
                        slimDOMOptions: this.slimDOMOptions,
                        dataURLOptions: this.dataURLOptions,
                        recordCanvas: this.recordCanvas,
                        inlineImages: this.inlineImages,
                        onSerialize: e => {
                            hI(e, this.mirror) && !hE(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) && this.iframeManager.addIframe(e), hR(e, this.mirror) && this.stylesheetManager.trackLinkElement(e), hx(i) && this.shadowDomManager.addShadowRoot(i.shadowRoot, this.doc)
                        },
                        onIframeLoad: (e, t) => {
                            if (hE(e, this.blockClass, this.blockSelector, this.unblockSelector, !1)) return;
                            this.iframeManager.attachIframe(e, t);
                            let n = hG(e);
                            n && this.canvasManager.addWindow(n), this.shadowDomManager.observeAttachShadow(e)
                        },
                        onStylesheetLoad: (e, t) => {
                            this.stylesheetManager.attachLinkElement(e, t)
                        },
                        onBlockedImageLoad: (e, t, n) => {
                            let {
                                width: r,
                                height: i
                            } = n;
                            this.mutationCb({
                                adds: [],
                                removes: [],
                                texts: [],
                                attributes: [{
                                    id: t.id,
                                    attributes: {
                                        style: {
                                            width: `${r}px`,
                                            height: `${i}px`
                                        }
                                    }
                                }]
                            })
                        },
                        ignoreCSSAttributes: this.ignoreCSSAttributes
                    });
                    s && (e.push({
                        parentId: o,
                        nextId: a,
                        node: s
                    }), t.add(s.id))
                };
            for (; this.mapRemoves.length;) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
            for (let e of this.movedSet)(!hQ(this.removes, e, this.mirror) || this.movedSet.has(e.parentNode)) && i(e);
            for (let e of this.addedSet) hZ(this.droppedSet, e) || hQ(this.removes, e, this.mirror) ? hZ(this.movedSet, e) ? i(e) : this.droppedSet.add(e) : i(e);
            let o = null;
            for (; n.length;) {
                let e = null;
                if (o) {
                    let t = this.mirror.getId(o.value.parentNode),
                        n = r(o.value); - 1 !== t && -1 !== n && (e = o)
                }
                if (!e) {
                    let t = n.tail;
                    for (; t;) {
                        let n = t;
                        if (t = t.previous, n) {
                            let t = this.mirror.getId(n.value.parentNode);
                            if (-1 === r(n.value)) continue;
                            if (-1 !== t) {
                                e = n;
                                break
                            } {
                                let t = n.value;
                                if (t.parentNode && t.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                                    let r = t.parentNode.host;
                                    if (-1 !== this.mirror.getId(r)) {
                                        e = n;
                                        break
                                    }
                                }
                            }
                        }
                    }
                }
                if (!e) {
                    for (; n.head;) n.removeNode(n.head.value);
                    break
                }
                o = e.previous, n.removeNode(e.value), i(e.value)
            }
            let a = {
                texts: this.texts.map(e => ({
                    id: this.mirror.getId(e.node),
                    value: e.value
                })).filter(e => !t.has(e.id)).filter(e => this.mirror.has(e.id)),
                attributes: this.attributes.map(e => {
                    let {
                        attributes: t
                    } = e;
                    if ("string" == typeof t.style) {
                        let n = JSON.stringify(e.styleDiff),
                            r = JSON.stringify(e._unchangedStyles);
                        n.length < t.style.length && (n + r).split("var(").length === t.style.split("var(").length && (t.style = e.styleDiff)
                    }
                    return {
                        id: this.mirror.getId(e.node),
                        attributes: t
                    }
                }).filter(e => !t.has(e.id)).filter(e => this.mirror.has(e.id)),
                removes: this.removes,
                adds: e
            };
            (a.texts.length || a.attributes.length || a.removes.length || a.adds.length) && (this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.movedMap = {}, this.mutationCb(a))
        }, this.processMutation = e => {
            if (!hk(e.target, this.mirror)) switch (e.type) {
                case "characterData":
                    {
                        let t = e.target.textContent;hE(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || t === e.oldValue || this.texts.push({
                            value: hc(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, this.maskAllText) && t ? this.maskTextFn ? this.maskTextFn(t, hw(e.target)) : t.replace(/[\S]/g, "*") : t,
                            node: e.target
                        });
                        break
                    }
                case "attributes":
                    {
                        let t = e.target,
                            n = e.attributeName,
                            r = e.target.getAttribute(n);
                        if ("value" === n) {
                            let n = fK(t),
                                i = t.tagName;
                            r = fJ(t, i, n);
                            let o = fz({
                                maskInputOptions: this.maskInputOptions,
                                tagName: i,
                                type: n
                            });
                            r = fq({
                                isMasked: hc(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, o),
                                element: t,
                                value: r,
                                maskInputFn: this.maskInputFn
                            })
                        }
                        if (hE(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || r === e.oldValue) return;
                        let i = this.attributeMap.get(e.target);
                        if ("IFRAME" === t.tagName && "src" === n && !this.keepIframeSrcFn(r)) {
                            if (hq(t)) return;
                            n = "rr_src"
                        }
                        if (i || (i = {
                                node: e.target,
                                attributes: {},
                                styleDiff: {},
                                _unchangedStyles: {}
                            }, this.attributes.push(i), this.attributeMap.set(e.target, i)), "type" === n && "INPUT" === t.tagName && "password" === (e.oldValue || "").toLowerCase() && t.setAttribute("data-rr-is-password", "true"), !hs(t.tagName, n) && (i.attributes[n] = ha(this.doc, fG(t.tagName), fG(n), r, t, this.maskAttributeFn), "style" === n)) {
                            let n = e.oldValue ? this.styleDeclarationParser.parse(e.oldValue) : null;
                            for (let e of Array.from(t.style)) {
                                let r = t.style.getPropertyValue(e),
                                    o = t.style.getPropertyPriority(e);
                                r !== ((null == n ? void 0 : n.getPropertyValue(e)) || "") || o !== ((null == n ? void 0 : n.getPropertyPriority(e)) || "") ? "" === o ? i.styleDiff[e] = r : i.styleDiff[e] = [r, o] : i._unchangedStyles[e] = [r, o]
                            }
                            if (n)
                                for (let e of Array.from(n)) "" === t.style.getPropertyValue(e) && (i.styleDiff[e] = !1)
                        }
                        break
                    }
                case "childList":
                    if (hE(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !0)) return;
                    e.addedNodes.forEach(t => this.genAdds(t, e.target)), e.removedNodes.forEach(t => {
                        let n = this.mirror.getId(t),
                            r = fU(e.target) ? this.mirror.getId(e.target.host) : this.mirror.getId(e.target);
                        hE(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || hk(t, this.mirror) || -1 === this.mirror.getId(t) || (this.addedSet.has(t) ? (hX(this.addedSet, t), this.droppedSet.add(t)) : this.addedSet.has(e.target) && -1 === n || function e(t, n) {
                            if (fU(t)) return !1;
                            let r = n.getId(t);
                            return !n.has(r) || (!t.parentNode || t.parentNode.nodeType !== t.DOCUMENT_NODE) && (!t.parentNode || e(t.parentNode, n))
                        }(e.target, this.mirror) || (this.movedSet.has(t) && this.movedMap[hK(n, r)] ? hX(this.movedSet, t) : this.removes.push({
                            parentId: r,
                            id: n,
                            isShadow: !!(fU(e.target) && fB(e.target)) || void 0
                        })), this.mapRemoves.push(t))
                    })
            }
        }, this.genAdds = (e, t) => {
            if (!this.processedNodeManager.inOtherBuffer(e, this) && !(this.addedSet.has(e) || this.movedSet.has(e))) {
                if (this.mirror.hasNode(e)) {
                    if (hk(e, this.mirror)) return;
                    this.movedSet.add(e);
                    let n = null;
                    t && this.mirror.hasNode(t) && (n = this.mirror.getId(t)), n && -1 !== n && (this.movedMap[hK(this.mirror.getId(e), n)] = !0)
                } else this.addedSet.add(e), this.droppedSet.delete(e);
                !hE(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) && (e.childNodes && e.childNodes.forEach(e => this.genAdds(e)), hx(e) && e.shadowRoot.childNodes.forEach(t => {
                    this.processedNodeManager.add(t, this), this.genAdds(t, e)
                }))
            }
        }
    }
}

function hX(e, t) {
    var n;
    e.delete(t), null == (n = t.childNodes) || n.forEach(t => hX(e, t))
}

function hQ(e, t, n) {
    return 0 !== e.length && function(e, t, n) {
        let r = t.parentNode;
        for (; r;) {
            let t = n.getId(r);
            if (e.some(e => e.id === t)) return !0;
            r = r.parentNode
        }
        return !1
    }(e, t, n)
}

function hZ(e, t) {
    return 0 !== e.size && function e(t, n) {
        let {
            parentNode: r
        } = n;
        return !!r && (!!t.has(r) || e(t, r))
    }(e, t)
}
let h0 = [];

function h1(e) {
    try {
        if ("composedPath" in e) {
            let t = e.composedPath();
            if (t.length) return t[0]
        } else if ("path" in e && e.path.length) return e.path[0]
    } catch {}
    return e && e.target
}

function h2(e, t) {
    var n, r, i;
    let o = new hJ;
    h0.push(o), o.init(e);
    let a = window.MutationObserver || window.__rrMutationObserver,
        s = null == (i = window) || null == (r = i.Zone) || null == (n = r.__symbol__) ? void 0 : n.call(r, "MutationObserver");
    s && window[s] && (a = window[s]);
    let l = new a(hB(t => {
        e.onMutation && !1 === e.onMutation(t) || o.processMutations.bind(o)(t)
    }));
    return l.observe(t, {
        attributes: !0,
        attributeOldValue: !0,
        characterData: !0,
        characterDataOldValue: !0,
        childList: !0,
        subtree: !0
    }), l
}

function h3(e) {
    let {
        scrollCb: t,
        doc: n,
        mirror: r,
        blockClass: i,
        blockSelector: o,
        unblockSelector: a,
        sampling: s
    } = e;
    return hf("scroll", hB(hg(hB(e => {
        let s = h1(e);
        if (!s || hE(s, i, o, a, !0)) return;
        let l = r.getId(s);
        if (s === n && n.defaultView) {
            let e = hy(n.defaultView);
            t({
                id: l,
                x: e.left,
                y: e.top
            })
        } else t({
            id: l,
            x: s.scrollLeft,
            y: s.scrollTop
        })
    }), s.scroll || 100)), n)
}
let h5 = ["INPUT", "TEXTAREA", "SELECT"],
    h4 = new WeakMap;

function h6(e) {
    var t = [];
    if (me("CSSGroupingRule") && e.parentRule instanceof CSSGroupingRule || me("CSSMediaRule") && e.parentRule instanceof CSSMediaRule || me("CSSSupportsRule") && e.parentRule instanceof CSSSupportsRule || me("CSSConditionRule") && e.parentRule instanceof CSSConditionRule) {
        let n = Array.from(e.parentRule.cssRules).indexOf(e);
        t.unshift(n)
    } else if (e.parentStyleSheet) {
        let n = Array.from(e.parentStyleSheet.cssRules).indexOf(e);
        t.unshift(n)
    }
    return t
}

function h8(e, t, n) {
    let r, i;
    return e ? (e.ownerNode ? r = t.getId(e.ownerNode) : i = n.getId(e), {
        styleId: i,
        id: r
    }) : {}
}

function h7(e, t) {
    var n, r, i;
    let {
        mirror: o,
        stylesheetManager: a
    } = e, s = null;
    s = "#document" === t.nodeName ? o.getId(t) : o.getId(t.host);
    let l = "#document" === t.nodeName ? null == (n = t.defaultView) ? void 0 : n.Document : null == (i = t.ownerDocument) || null == (r = i.defaultView) ? void 0 : r.ShadowRoot,
        u = (null == l ? void 0 : l.prototype) ? Object.getOwnPropertyDescriptor(null == l ? void 0 : l.prototype, "adoptedStyleSheets") : void 0;
    return null !== s && -1 !== s && l && u ? (Object.defineProperty(t, "adoptedStyleSheets", {
        configurable: u.configurable,
        enumerable: u.enumerable,
        get() {
            var e;
            return null == (e = u.get) ? void 0 : e.call(this)
        },
        set(e) {
            var t;
            let n = null == (t = u.set) ? void 0 : t.call(this, e);
            if (null !== s && -1 !== s) try {
                a.adoptStyleSheets(e, s)
            } catch (e) {}
            return n
        }
    }), hB(() => {
        Object.defineProperty(t, "adoptedStyleSheets", {
            configurable: u.configurable,
            enumerable: u.enumerable,
            get: u.get,
            set: u.set
        })
    })) : () => {}
}

function h9(e) {
    let t;
    arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    let n = e.doc.defaultView;
    if (!n) return () => {};
    e.recordDOM && (t = h2(e, e.doc));
    let r = function(e) {
            let t, {
                mousemoveCb: n,
                sampling: r,
                doc: i,
                mirror: o
            } = e;
            if (!1 === r.mousemove) return () => {};
            let a = "number" == typeof r.mousemove ? r.mousemove : 50,
                s = "number" == typeof r.mousemoveCallback ? r.mousemoveCallback : 500,
                l = [],
                u = hg(hB(e => {
                    let r = Date.now() - t;
                    n(l.map(e => (e.timeOffset -= r, e)), e), l = [], t = null
                }), s),
                c = hB(hg(hB(e => {
                    let n = h1(e),
                        {
                            clientX: r,
                            clientY: i
                        } = hT(e) ? e.changedTouches[0] : e;
                    t || (t = h_()), l.push({
                        x: r,
                        y: i,
                        id: o.getId(n),
                        timeOffset: h_() - t
                    }), u("u" > typeof DragEvent && e instanceof DragEvent ? hL.Drag : e instanceof MouseEvent ? hL.MouseMove : hL.TouchMove)
                }), a, {
                    trailing: !1
                })),
                d = [hf("mousemove", c, i), hf("touchmove", c, i), hf("drag", c, i)];
            return hB(() => {
                d.forEach(e => e())
            })
        }(e),
        i = function(e) {
            let {
                mouseInteractionCb: t,
                doc: n,
                mirror: r,
                blockClass: i,
                blockSelector: o,
                unblockSelector: a,
                sampling: s
            } = e;
            if (!1 === s.mouseInteraction) return () => {};
            let l = !0 === s.mouseInteraction || void 0 === s.mouseInteraction ? {} : s.mouseInteraction,
                u = [],
                c = null;
            return Object.keys(h$).filter(e => Number.isNaN(Number(e)) && !e.endsWith("_Departed") && !1 !== l[e]).forEach(e => {
                let s = fG(e),
                    l = n => {
                        let s = h1(n);
                        if (hE(s, i, o, a, !0)) return;
                        let l = null,
                            u = e;
                        if ("pointerType" in n) {
                            switch (n.pointerType) {
                                case "mouse":
                                    l = hF.Mouse;
                                    break;
                                case "touch":
                                    l = hF.Touch;
                                    break;
                                case "pen":
                                    l = hF.Pen
                            }
                            l === hF.Touch ? h$[e] === h$.MouseDown ? u = "TouchStart" : h$[e] === h$.MouseUp && (u = "TouchEnd") : hF.Pen
                        } else hT(n) && (l = hF.Touch);
                        null !== l ? (c = l, (u.startsWith("Touch") && l === hF.Touch || u.startsWith("Mouse") && l === hF.Mouse) && (l = null)) : h$[e] === h$.Click && (l = c, c = null);
                        let d = hT(n) ? n.changedTouches[0] : n;
                        if (!d) return;
                        let p = r.getId(s),
                            {
                                clientX: f,
                                clientY: h
                            } = d;
                        hB(t)({
                            type: h$[u],
                            id: p,
                            x: f,
                            y: h,
                            ...null !== l && {
                                pointerType: l
                            }
                        })
                    };
                if (window.PointerEvent) switch (h$[e]) {
                    case h$.MouseDown:
                    case h$.MouseUp:
                        s = s.replace("mouse", "pointer");
                        break;
                    case h$.TouchStart:
                    case h$.TouchEnd:
                        return
                }
                u.push(hf(s, l, n))
            }), hB(() => {
                u.forEach(e => e())
            })
        }(e),
        o = h3(e),
        a = function(e, t) {
            let {
                viewportResizeCb: n
            } = e, {
                win: r
            } = t, i = -1, o = -1;
            return hf("resize", hB(hg(hB(() => {
                let e = hb(),
                    t = hS();
                (i !== e || o !== t) && (n({
                    width: Number(t),
                    height: Number(e)
                }), i = e, o = t)
            }), 200)), r)
        }(e, {
            win: n
        }),
        s = function(e) {
            let {
                inputCb: t,
                doc: n,
                mirror: r,
                blockClass: i,
                blockSelector: o,
                unblockSelector: a,
                ignoreClass: s,
                ignoreSelector: l,
                maskInputOptions: u,
                maskInputFn: c,
                sampling: d,
                userTriggeredOnInput: p,
                maskTextClass: f,
                unmaskTextClass: h,
                maskTextSelector: m,
                unmaskTextSelector: g
            } = e;

            function v(e) {
                let t = h1(e),
                    r = e.isTrusted,
                    d = t && fV(t.tagName);
                if ("OPTION" === d && (t = t.parentElement), !t || !d || 0 > h5.indexOf(d) || hE(t, i, o, a, !0)) return;
                let v = t;
                if (v.classList.contains(s) || l && v.matches(l)) return;
                let y = fK(t),
                    b = fJ(v, d, y),
                    S = !1,
                    w = fz({
                        maskInputOptions: u,
                        tagName: d,
                        type: y
                    }),
                    E = hc(t, f, m, h, g, w);
                ("radio" === y || "checkbox" === y) && (S = t.checked), b = fq({
                    isMasked: E,
                    element: t,
                    value: b,
                    maskInputFn: c
                }), _(t, p ? {
                    text: b,
                    isChecked: S,
                    userTriggered: r
                } : {
                    text: b,
                    isChecked: S
                });
                let k = t.name;
                "radio" === y && k && S && n.querySelectorAll(`input[type="radio"][name="${k}"]`).forEach(e => {
                    if (e !== t) {
                        let t = fq({
                            isMasked: E,
                            element: e,
                            value: fJ(e, d, y),
                            maskInputFn: c
                        });
                        _(e, p ? {
                            text: t,
                            isChecked: !S,
                            userTriggered: !1
                        } : {
                            text: t,
                            isChecked: !S
                        })
                    }
                })
            }

            function _(e, n) {
                let i = h4.get(e);
                if (!i || i.text !== n.text || i.isChecked !== n.isChecked) {
                    h4.set(e, n);
                    let i = r.getId(e);
                    hB(t)({ ...n,
                        id: i
                    })
                }
            }
            let y = ("last" === d.input ? ["change"] : ["input", "change"]).map(e => hf(e, hB(v), n)),
                b = n.defaultView;
            if (!b) return () => {
                y.forEach(e => e())
            };
            let S = b.Object.getOwnPropertyDescriptor(b.HTMLInputElement.prototype, "value"),
                w = [
                    [b.HTMLInputElement.prototype, "value"],
                    [b.HTMLInputElement.prototype, "checked"],
                    [b.HTMLSelectElement.prototype, "value"],
                    [b.HTMLTextAreaElement.prototype, "value"],
                    [b.HTMLSelectElement.prototype, "selectedIndex"],
                    [b.HTMLOptionElement.prototype, "selected"]
                ];
            return S && S.set && y.push(...w.map(e => (function e(t, n, r, i) {
                let o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window,
                    a = o.Object.getOwnPropertyDescriptor(t, n);
                return o.Object.defineProperty(t, n, i ? r : {
                    set(e) {
                        hO(() => {
                            r.set.call(this, e)
                        }, 0), a && a.set && a.set.call(this, e)
                    }
                }), () => e(t, n, a || {}, !0)
            })(e[0], e[1], {
                set() {
                    hB(v)({
                        target: this,
                        isTrusted: !1
                    })
                }
            }, !1, b))), hB(() => {
                y.forEach(e => e())
            })
        }(e),
        l = function(e) {
            let {
                mediaInteractionCb: t,
                blockClass: n,
                blockSelector: r,
                unblockSelector: i,
                mirror: o,
                sampling: a,
                doc: s
            } = e, l = hB(e => hg(hB(a => {
                let s = h1(a);
                if (!s || hE(s, n, r, i, !0)) return;
                let {
                    currentTime: l,
                    volume: u,
                    muted: c,
                    playbackRate: d
                } = s;
                t({
                    type: e,
                    id: o.getId(s),
                    currentTime: l,
                    volume: u,
                    muted: c,
                    playbackRate: d
                })
            }), a.media || 500)), u = [hf("play", l(hU.Play), s), hf("pause", l(hU.Pause), s), hf("seeked", l(hU.Seeked), s), hf("volumechange", l(hU.VolumeChange), s), hf("ratechange", l(hU.RateChange), s)];
            return hB(() => {
                u.forEach(e => e())
            })
        }(e),
        u = () => {},
        c = () => {},
        d = () => {},
        p = () => {};
    e.recordDOM && (u = function(e, t) {
        let n, r, {
                styleSheetRuleCb: i,
                mirror: o,
                stylesheetManager: a
            } = e,
            {
                win: s
            } = t;
        if (!s.CSSStyleSheet || !s.CSSStyleSheet.prototype) return () => {};
        let l = s.CSSStyleSheet.prototype.insertRule;
        s.CSSStyleSheet.prototype.insertRule = new Proxy(l, {
            apply: hB((e, t, n) => {
                let [r, s] = n, {
                    id: l,
                    styleId: u
                } = h8(t, o, a.styleMirror);
                return (l && -1 !== l || u && -1 !== u) && i({
                    id: l,
                    styleId: u,
                    adds: [{
                        rule: r,
                        index: s
                    }]
                }), e.apply(t, n)
            })
        });
        let u = s.CSSStyleSheet.prototype.deleteRule;
        s.CSSStyleSheet.prototype.deleteRule = new Proxy(u, {
            apply: hB((e, t, n) => {
                let [r] = n, {
                    id: s,
                    styleId: l
                } = h8(t, o, a.styleMirror);
                return (s && -1 !== s || l && -1 !== l) && i({
                    id: s,
                    styleId: l,
                    removes: [{
                        index: r
                    }]
                }), e.apply(t, n)
            })
        }), s.CSSStyleSheet.prototype.replace && (n = s.CSSStyleSheet.prototype.replace, s.CSSStyleSheet.prototype.replace = new Proxy(n, {
            apply: hB((e, t, n) => {
                let [r] = n, {
                    id: s,
                    styleId: l
                } = h8(t, o, a.styleMirror);
                return (s && -1 !== s || l && -1 !== l) && i({
                    id: s,
                    styleId: l,
                    replace: r
                }), e.apply(t, n)
            })
        })), s.CSSStyleSheet.prototype.replaceSync && (r = s.CSSStyleSheet.prototype.replaceSync, s.CSSStyleSheet.prototype.replaceSync = new Proxy(r, {
            apply: hB((e, t, n) => {
                let [r] = n, {
                    id: s,
                    styleId: l
                } = h8(t, o, a.styleMirror);
                return (s && -1 !== s || l && -1 !== l) && i({
                    id: s,
                    styleId: l,
                    replaceSync: r
                }), e.apply(t, n)
            })
        }));
        let c = {};
        mt("CSSGroupingRule") ? c.CSSGroupingRule = s.CSSGroupingRule : (mt("CSSMediaRule") && (c.CSSMediaRule = s.CSSMediaRule), mt("CSSConditionRule") && (c.CSSConditionRule = s.CSSConditionRule), mt("CSSSupportsRule") && (c.CSSSupportsRule = s.CSSSupportsRule));
        let d = {};
        return Object.entries(c).forEach(e => {
            let [t, n] = e;
            d[t] = {
                insertRule: n.prototype.insertRule,
                deleteRule: n.prototype.deleteRule
            }, n.prototype.insertRule = new Proxy(d[t].insertRule, {
                apply: hB((e, t, n) => {
                    let [r, s] = n, {
                        id: l,
                        styleId: u
                    } = h8(t.parentStyleSheet, o, a.styleMirror);
                    return (l && -1 !== l || u && -1 !== u) && i({
                        id: l,
                        styleId: u,
                        adds: [{
                            rule: r,
                            index: [...h6(t), s || 0]
                        }]
                    }), e.apply(t, n)
                })
            }), n.prototype.deleteRule = new Proxy(d[t].deleteRule, {
                apply: hB((e, t, n) => {
                    let [r] = n, {
                        id: s,
                        styleId: l
                    } = h8(t.parentStyleSheet, o, a.styleMirror);
                    return (s && -1 !== s || l && -1 !== l) && i({
                        id: s,
                        styleId: l,
                        removes: [{
                            index: [...h6(t), r]
                        }]
                    }), e.apply(t, n)
                })
            })
        }), hB(() => {
            s.CSSStyleSheet.prototype.insertRule = l, s.CSSStyleSheet.prototype.deleteRule = u, n && (s.CSSStyleSheet.prototype.replace = n), r && (s.CSSStyleSheet.prototype.replaceSync = r), Object.entries(c).forEach(e => {
                let [t, n] = e;
                n.prototype.insertRule = d[t].insertRule, n.prototype.deleteRule = d[t].deleteRule
            })
        })
    }(e, {
        win: n
    }), c = h7(e, e.doc), d = function(e, t) {
        let {
            styleDeclarationCb: n,
            mirror: r,
            ignoreCSSAttributes: i,
            stylesheetManager: o
        } = e, {
            win: a
        } = t, s = a.CSSStyleDeclaration.prototype.setProperty;
        a.CSSStyleDeclaration.prototype.setProperty = new Proxy(s, {
            apply: hB((e, t, a) => {
                var l;
                let [u, c, d] = a;
                if (i.has(u)) return s.apply(t, [u, c, d]);
                let {
                    id: p,
                    styleId: f
                } = h8(null == (l = t.parentRule) ? void 0 : l.parentStyleSheet, r, o.styleMirror);
                return (p && -1 !== p || f && -1 !== f) && n({
                    id: p,
                    styleId: f,
                    set: {
                        property: u,
                        value: c,
                        priority: d
                    },
                    index: h6(t.parentRule)
                }), e.apply(t, a)
            })
        });
        let l = a.CSSStyleDeclaration.prototype.removeProperty;
        return a.CSSStyleDeclaration.prototype.removeProperty = new Proxy(l, {
            apply: hB((e, t, a) => {
                var s;
                let [u] = a;
                if (i.has(u)) return l.apply(t, [u]);
                let {
                    id: c,
                    styleId: d
                } = h8(null == (s = t.parentRule) ? void 0 : s.parentStyleSheet, r, o.styleMirror);
                return (c && -1 !== c || d && -1 !== d) && n({
                    id: c,
                    styleId: d,
                    remove: {
                        property: u
                    },
                    index: h6(t.parentRule)
                }), e.apply(t, a)
            })
        }), hB(() => {
            a.CSSStyleDeclaration.prototype.setProperty = s, a.CSSStyleDeclaration.prototype.removeProperty = l
        })
    }(e, {
        win: n
    }), e.collectFonts && (p = function(e) {
        let {
            fontCb: t,
            doc: n
        } = e, r = n.defaultView;
        if (!r) return () => {};
        let i = [],
            o = new WeakMap,
            a = r.FontFace;
        r.FontFace = function(e, t, n) {
            let r = new a(e, t, n);
            return o.set(r, {
                family: e,
                buffer: "string" != typeof t,
                descriptors: n,
                fontSource: "string" == typeof t ? t : JSON.stringify(Array.from(new Uint8Array(t)))
            }), r
        };
        let s = hv(n.fonts, "add", function(e) {
            return function(n) {
                return hO(hB(() => {
                    let e = o.get(n);
                    e && (t(e), o.delete(n))
                }), 0), e.apply(this, [n])
            }
        });
        return i.push(() => {
            r.FontFace = a
        }), i.push(s), hB(() => {
            i.forEach(e => e())
        })
    }(e)));
    let f = function(e) {
            let {
                doc: t,
                mirror: n,
                blockClass: r,
                blockSelector: i,
                unblockSelector: o,
                selectionCb: a
            } = e, s = !0, l = hB(() => {
                let e = t.getSelection();
                if (!e || s && (null == e ? void 0 : e.isCollapsed)) return;
                s = e.isCollapsed || !1;
                let l = [],
                    u = e.rangeCount || 0;
                for (let t = 0; t < u; t++) {
                    let {
                        startContainer: a,
                        startOffset: s,
                        endContainer: u,
                        endOffset: c
                    } = e.getRangeAt(t);
                    hE(a, r, i, o, !0) || hE(u, r, i, o, !0) || l.push({
                        start: n.getId(a),
                        startOffset: s,
                        end: n.getId(u),
                        endOffset: c
                    })
                }
                a({
                    ranges: l
                })
            });
            return l(), hf("selectionchange", l)
        }(e),
        h = function(e) {
            let {
                doc: t,
                customElementCb: n
            } = e, r = t.defaultView;
            return r && r.customElements ? hv(r.customElements, "define", function(e) {
                return function(t, r, i) {
                    try {
                        n({
                            define: {
                                name: t
                            }
                        })
                    } catch (e) {}
                    return e.apply(this, [t, r, i])
                }
            }) : () => {}
        }(e),
        m = [];
    for (let t of e.plugins) m.push(t.observer(t.callback, n, t.options));
    return hB(() => {
        h0.forEach(e => e.reset()), null == t || t.disconnect(), r(), i(), o(), a(), s(), l(), u(), c(), d(), p(), f(), h(), m.forEach(e => e())
    })
}

function me(e) {
    return void 0 !== window[e]
}

function mt(e) {
    return !!(void 0 !== window[e] && window[e].prototype && "insertRule" in window[e].prototype && "deleteRule" in window[e].prototype)
}
class mn {
    getId(e, t, n, r) {
        let i = n || this.getIdToRemoteIdMap(e),
            o = r || this.getRemoteIdToIdMap(e),
            a = i.get(t);
        return a || (a = this.generateIdFn(), i.set(t, a), o.set(a, t)), a
    }
    getIds(e, t) {
        let n = this.getIdToRemoteIdMap(e),
            r = this.getRemoteIdToIdMap(e);
        return t.map(t => this.getId(e, t, n, r))
    }
    getRemoteId(e, t, n) {
        let r = n || this.getRemoteIdToIdMap(e);
        if ("number" != typeof t) return t;
        let i = r.get(t);
        return i || -1
    }
    getRemoteIds(e, t) {
        let n = this.getRemoteIdToIdMap(e);
        return t.map(t => this.getRemoteId(e, t, n))
    }
    reset(e) {
        if (!e) {
            this.iframeIdToRemoteIdMap = new WeakMap, this.iframeRemoteIdToIdMap = new WeakMap;
            return
        }
        this.iframeIdToRemoteIdMap.delete(e), this.iframeRemoteIdToIdMap.delete(e)
    }
    getIdToRemoteIdMap(e) {
        let t = this.iframeIdToRemoteIdMap.get(e);
        return t || (t = new Map, this.iframeIdToRemoteIdMap.set(e, t)), t
    }
    getRemoteIdToIdMap(e) {
        let t = this.iframeRemoteIdToIdMap.get(e);
        return t || (t = new Map, this.iframeRemoteIdToIdMap.set(e, t)), t
    }
    constructor(e) {
        this.generateIdFn = e, this.iframeIdToRemoteIdMap = new WeakMap, this.iframeRemoteIdToIdMap = new WeakMap
    }
}
class mr {
    addIframe() {}
    addLoadListener() {}
    attachIframe() {}
    constructor() {
        this.crossOriginIframeMirror = new mn(f4), this.crossOriginIframeRootIdMap = new WeakMap
    }
}
class mi {
    addIframe(e) {
        this.iframes.set(e, !0);
        let t = hG(e);
        t && this.crossOriginIframeMap.set(t, e)
    }
    addLoadListener(e) {
        this.loadListener = e
    }
    attachIframe(e, t) {
        var n, r;
        this.mutationCb({
            adds: [{
                parentId: this.mirror.getId(e),
                nextId: null,
                node: t
            }],
            removes: [],
            texts: [],
            attributes: [],
            isAttachIframe: !0
        }), this.recordCrossOriginIframes && (null == (r = hG(e)) || r.addEventListener("message", this.handleMessage.bind(this))), null == (n = this.loadListener) || n.call(this, e);
        let i = hq(e);
        i && i.adoptedStyleSheets && i.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(i.adoptedStyleSheets, this.mirror.getId(i))
    }
    handleMessage(e) {
        if ("rrweb" !== e.data.type || e.origin !== e.data.origin || !e.source) return;
        let t = this.crossOriginIframeMap.get(e.source);
        if (!t) return;
        let n = this.transformCrossOriginEvent(t, e.data.event);
        n && this.wrappedEmit(n, e.data.isCheckout)
    }
    transformCrossOriginEvent(e, t) {
        switch (t.type) {
            case hD.FullSnapshot:
                {
                    this.crossOriginIframeMirror.reset(e),
                    this.crossOriginIframeStyleMirror.reset(e),
                    this.replaceIdOnNode(t.data.node, e);
                    let n = t.data.node.id;
                    return this.crossOriginIframeRootIdMap.set(e, n),
                    this.patchRootIdOnNode(t.data.node, n),
                    {
                        timestamp: t.timestamp,
                        type: hD.IncrementalSnapshot,
                        data: {
                            source: hL.Mutation,
                            adds: [{
                                parentId: this.mirror.getId(e),
                                nextId: null,
                                node: t.data.node
                            }],
                            removes: [],
                            texts: [],
                            attributes: [],
                            isAttachIframe: !0
                        }
                    }
                }
            case hD.Meta:
            case hD.Load:
            case hD.DomContentLoaded:
                break;
            case hD.Plugin:
                return t;
            case hD.Custom:
                return this.replaceIds(t.data.payload, e, ["id", "parentId", "previousId", "nextId"]), t;
            case hD.IncrementalSnapshot:
                switch (t.data.source) {
                    case hL.Mutation:
                        return t.data.adds.forEach(t => {
                            this.replaceIds(t, e, ["parentId", "nextId", "previousId"]), this.replaceIdOnNode(t.node, e);
                            let n = this.crossOriginIframeRootIdMap.get(e);
                            n && this.patchRootIdOnNode(t.node, n)
                        }), t.data.removes.forEach(t => {
                            this.replaceIds(t, e, ["parentId", "id"])
                        }), t.data.attributes.forEach(t => {
                            this.replaceIds(t, e, ["id"])
                        }), t.data.texts.forEach(t => {
                            this.replaceIds(t, e, ["id"])
                        }), t;
                    case hL.Drag:
                    case hL.TouchMove:
                    case hL.MouseMove:
                        return t.data.positions.forEach(t => {
                            this.replaceIds(t, e, ["id"])
                        }), t;
                    case hL.ViewportResize:
                        return !1;
                    case hL.MediaInteraction:
                    case hL.MouseInteraction:
                    case hL.Scroll:
                    case hL.CanvasMutation:
                    case hL.Input:
                        return this.replaceIds(t.data, e, ["id"]), t;
                    case hL.StyleSheetRule:
                    case hL.StyleDeclaration:
                        return this.replaceIds(t.data, e, ["id"]), this.replaceStyleIds(t.data, e, ["styleId"]), t;
                    case hL.Font:
                        return t;
                    case hL.Selection:
                        return t.data.ranges.forEach(t => {
                            this.replaceIds(t, e, ["start", "end"])
                        }), t;
                    case hL.AdoptedStyleSheet:
                        var n;
                        return this.replaceIds(t.data, e, ["id"]), this.replaceStyleIds(t.data, e, ["styleIds"]), null == (n = t.data.styles) || n.forEach(t => {
                            this.replaceStyleIds(t, e, ["styleId"])
                        }), t
                }
        }
        return !1
    }
    replace(e, t, n, r) {
        for (let i of r)(Array.isArray(t[i]) || "number" == typeof t[i]) && (Array.isArray(t[i]) ? t[i] = e.getIds(n, t[i]) : t[i] = e.getId(n, t[i]));
        return t
    }
    replaceIds(e, t, n) {
        return this.replace(this.crossOriginIframeMirror, e, t, n)
    }
    replaceStyleIds(e, t, n) {
        return this.replace(this.crossOriginIframeStyleMirror, e, t, n)
    }
    replaceIdOnNode(e, t) {
        this.replaceIds(e, t, ["id", "rootId"]), "childNodes" in e && e.childNodes.forEach(e => {
            this.replaceIdOnNode(e, t)
        })
    }
    patchRootIdOnNode(e, t) {
        e.type === f$.Document || e.rootId || (e.rootId = t), "childNodes" in e && e.childNodes.forEach(e => {
            this.patchRootIdOnNode(e, t)
        })
    }
    constructor(e) {
        this.iframes = new WeakMap, this.crossOriginIframeMap = new WeakMap, this.crossOriginIframeMirror = new mn(f4), this.crossOriginIframeRootIdMap = new WeakMap, this.mutationCb = e.mutationCb, this.wrappedEmit = e.wrappedEmit, this.stylesheetManager = e.stylesheetManager, this.recordCrossOriginIframes = e.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new mn(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = e.mirror, this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this))
    }
}
class mo {
    init() {}
    addShadowRoot() {}
    observeAttachShadow() {}
    reset() {}
}
class ma {
    init() {
        this.reset(), this.patchAttachShadow(Element, document)
    }
    addShadowRoot(e, t) {
        if (!fB(e) || this.shadowDoms.has(e)) return;
        this.shadowDoms.add(e), this.bypassOptions.canvasManager.addShadowRoot(e);
        let n = h2({ ...this.bypassOptions,
            doc: t,
            mutationCb: this.mutationCb,
            mirror: this.mirror,
            shadowDomManager: this
        }, e);
        this.restoreHandlers.push(() => n.disconnect()), this.restoreHandlers.push(h3({ ...this.bypassOptions,
            scrollCb: this.scrollCb,
            doc: e,
            mirror: this.mirror
        })), hO(() => {
            e.adoptedStyleSheets && e.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(e.adoptedStyleSheets, this.mirror.getId(e.host)), this.restoreHandlers.push(h7({
                mirror: this.mirror,
                stylesheetManager: this.bypassOptions.stylesheetManager
            }, e))
        }, 0)
    }
    observeAttachShadow(e) {
        let t, n = hq(e),
            r = hG(e);
        if (n && r) {
            try {
                t = r.Element
            } catch (e) {
                return
            }
            t && this.patchAttachShadow(t, n)
        }
    }
    patchAttachShadow(e, t) {
        let n = this;
        this.restoreHandlers.push(hv(e.prototype, "attachShadow", function(e) {
            return function(r) {
                let i = e.call(this, r);
                return this.shadowRoot && hM(this) && n.addShadowRoot(this.shadowRoot, t), i
            }
        }))
    }
    reset() {
        this.restoreHandlers.forEach(e => {
            try {
                e()
            } catch (e) {}
        }), this.restoreHandlers = [], this.shadowDoms = new WeakSet, this.bypassOptions.canvasManager.resetShadowRoots()
    }
    constructor(e) {
        this.shadowDoms = new WeakSet, this.restoreHandlers = [], this.mutationCb = e.mutationCb, this.scrollCb = e.scrollCb, this.bypassOptions = e.bypassOptions, this.mirror = e.mirror, this.init()
    }
}
class ms {
    attachLinkElement(e, t) {
        "_cssText" in t.attributes && this.mutationCb({
            adds: [],
            removes: [],
            texts: [],
            attributes: [{
                id: t.id,
                attributes: t.attributes
            }]
        }), this.trackLinkElement(e)
    }
    trackLinkElement(e) {
        this.trackedLinkElements.has(e) || (this.trackedLinkElements.add(e), this.trackStylesheetInLinkElement(e))
    }
    adoptStyleSheets(e, t) {
        if (0 === e.length) return;
        let n = {
                id: t,
                styleIds: []
            },
            r = [];
        for (let t of e) {
            let e;
            this.styleMirror.has(t) ? e = this.styleMirror.getId(t) : (e = this.styleMirror.add(t), r.push({
                styleId: e,
                rules: Array.from(t.rules || CSSRule, (e, t) => ({
                    rule: fW(e),
                    index: t
                }))
            })), n.styleIds.push(e)
        }
        r.length > 0 && (n.styles = r), this.adoptedStyleSheetCb(n)
    }
    reset() {
        this.styleMirror.reset(), this.trackedLinkElements = new WeakSet
    }
    trackStylesheetInLinkElement(e) {}
    constructor(e) {
        this.trackedLinkElements = new WeakSet, this.styleMirror = new hC, this.mutationCb = e.mutationCb, this.adoptedStyleSheetCb = e.adoptedStyleSheetCb
    }
}
class ml {
    inOtherBuffer(e, t) {
        let n = this.nodeMap.get(e);
        return n && Array.from(n).some(e => e !== t)
    }
    add(e, t) {
        this.active || (this.active = !0, function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            hN("requestAnimationFrame")(...t)
        }(() => {
            this.nodeMap = new WeakMap, this.active = !1
        })), this.nodeMap.set(e, (this.nodeMap.get(e) || new Set).add(t))
    }
    destroy() {}
    constructor() {
        this.nodeMap = new WeakMap, this.active = !1
    }
}
try {
    if (2 !== Array.from([1], e => 2 * e)[0]) {
        let e = document.createElement("iframe");
        document.body.appendChild(e), Array.from = (null == (X = e.contentWindow) ? void 0 : X.Array.from) || Array.from, document.body.removeChild(e)
    }
} catch (e) {
    console.debug("Unable to override Array.from", e)
}
let mu = new fH;

function mc() {
    let e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        {
            emit: n,
            checkoutEveryNms: r,
            checkoutEveryNth: i,
            blockClass: o = "rr-block",
            blockSelector: a = null,
            unblockSelector: s = null,
            ignoreClass: l = "rr-ignore",
            ignoreSelector: u = null,
            maskAllText: c = !1,
            maskTextClass: d = "rr-mask",
            unmaskTextClass: p = null,
            maskTextSelector: f = null,
            unmaskTextSelector: h = null,
            inlineStylesheet: m = !0,
            maskAllInputs: g,
            maskInputOptions: v,
            slimDOMOptions: _,
            maskAttributeFn: y,
            maskInputFn: b,
            maskTextFn: S,
            maxCanvasSize: w = null,
            packFn: E,
            sampling: k = {},
            dataURLOptions: T = {},
            mousemoveWait: I,
            recordDOM: R = !0,
            recordCanvas: x = !1,
            recordCrossOriginIframes: C = !1,
            recordAfter: A = "DOMContentLoaded" === t.recordAfter ? t.recordAfter : "load",
            userTriggeredOnInput: O = !1,
            collectFonts: D = !1,
            inlineImages: L = !1,
            plugins: $,
            keepIframeSrcFn: F = () => !1,
            ignoreCSSAttributes: U = new Set([]),
            errorHandler: B,
            onMutation: j,
            getCanvasManager: W
        } = t;
    M = B;
    let H = !C || window.parent === window,
        z = !1;
    if (!H) try {
        window.parent.document && (z = !1)
    } catch (e) {
        z = !0
    }
    if (H && !n) throw Error("emit function is required");
    if (!H && !z) return () => {};
    void 0 !== I && void 0 === k.mousemove && (k.mousemove = I), mu.reset();
    let q = !0 === g ? {
            color: !0,
            date: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
            textarea: !0,
            select: !0,
            radio: !0,
            checkbox: !0
        } : void 0 !== v ? v : {},
        G = !0 === _ || "all" === _ ? {
            script: !0,
            comment: !0,
            headFavicon: !0,
            headWhitespace: !0,
            headMetaSocial: !0,
            headMetaRobots: !0,
            headMetaHttpEquiv: !0,
            headMetaVerification: !0,
            headMetaAuthorship: "all" === _,
            headMetaDescKeywords: "all" === _
        } : _ || {};
    ! function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
        if ("NodeList" in e && !e.NodeList.prototype.forEach && (e.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in e && !e.DOMTokenList.prototype.forEach && (e.DOMTokenList.prototype.forEach = Array.prototype.forEach), !Node.prototype.contains) {
            var t = this;
            Node.prototype.contains = function() {
                for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                let i = n[0];
                if (!(0 in n)) throw TypeError("1 argument is required");
                do
                    if (t === i) return !0; while (i = i && i.parentNode) return !1
            }
        }
    }();
    let V = 0,
        Y = e => {
            for (let t of $ || []) t.eventProcessor && (e = t.eventProcessor(e));
            return E && !z && (e = E(e)), e
        };
    P = (t, o) => {
        var a;
        if (t.timestamp = h_(), (null == (a = h0[0]) ? void 0 : a.isFrozen()) && t.type !== hD.FullSnapshot && (t.type !== hD.IncrementalSnapshot || t.data.source !== hL.Mutation) && h0.forEach(e => e.unfreeze()), H) null == n || n(Y(t), o);
        else if (z) {
            let e = {
                type: "rrweb",
                event: Y(t),
                origin: window.location.origin,
                isCheckout: o
            };
            window.parent.postMessage(e, "*")
        }
        if (t.type === hD.FullSnapshot) e = t, V = 0;
        else if (t.type === hD.IncrementalSnapshot) {
            if (t.data.source === hL.Mutation && t.data.isAttachIframe) return;
            V++;
            let n = i && V >= i,
                o = r && e && t.timestamp - e.timestamp > r;
            (n || o) && er(!0)
        }
    };
    let K = e => {
            P({
                type: hD.IncrementalSnapshot,
                data: {
                    source: hL.Mutation,
                    ...e
                }
            })
        },
        J = e => P({
            type: hD.IncrementalSnapshot,
            data: {
                source: hL.Scroll,
                ...e
            }
        }),
        X = e => P({
            type: hD.IncrementalSnapshot,
            data: {
                source: hL.CanvasMutation,
                ...e
            }
        }),
        Q = new ms({
            mutationCb: K,
            adoptedStyleSheetCb: e => P({
                type: hD.IncrementalSnapshot,
                data: {
                    source: hL.AdoptedStyleSheet,
                    ...e
                }
            })
        }),
        Z = "boolean" == typeof __RRWEB_EXCLUDE_IFRAME__ && __RRWEB_EXCLUDE_IFRAME__ ? new mr : new mi({
            mirror: mu,
            mutationCb: K,
            stylesheetManager: Q,
            recordCrossOriginIframes: C,
            wrappedEmit: P
        });
    for (let e of $ || []) e.getMirror && e.getMirror({
        nodeMirror: mu,
        crossOriginIframeMirror: Z.crossOriginIframeMirror,
        crossOriginIframeStyleMirror: Z.crossOriginIframeStyleMirror
    });
    let ee = new ml,
        et = function(e, t) {
            try {
                return e ? e(t) : new hz
            } catch {
                return console.warn("Unable to initialize CanvasManager"), new hz
            }
        }(W, {
            mirror: mu,
            win: window,
            mutationCb: e => P({
                type: hD.IncrementalSnapshot,
                data: {
                    source: hL.CanvasMutation,
                    ...e
                }
            }),
            recordCanvas: x,
            blockClass: o,
            blockSelector: a,
            unblockSelector: s,
            maxCanvasSize: w,
            sampling: k.canvas,
            dataURLOptions: T,
            errorHandler: B
        }),
        en = "boolean" == typeof __RRWEB_EXCLUDE_SHADOW_DOM__ && __RRWEB_EXCLUDE_SHADOW_DOM__ ? new mo : new ma({
            mutationCb: K,
            scrollCb: J,
            bypassOptions: {
                onMutation: j,
                blockClass: o,
                blockSelector: a,
                unblockSelector: s,
                maskAllText: c,
                maskTextClass: d,
                unmaskTextClass: p,
                maskTextSelector: f,
                unmaskTextSelector: h,
                inlineStylesheet: m,
                maskInputOptions: q,
                dataURLOptions: T,
                maskAttributeFn: y,
                maskTextFn: S,
                maskInputFn: b,
                recordCanvas: x,
                inlineImages: L,
                sampling: k,
                slimDOMOptions: G,
                iframeManager: Z,
                stylesheetManager: Q,
                canvasManager: et,
                keepIframeSrcFn: F,
                processedNodeManager: ee,
                ignoreCSSAttributes: U
            },
            mirror: mu
        }),
        er = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!R) return;
            P({
                type: hD.Meta,
                data: {
                    href: window.location.href,
                    width: hS(),
                    height: hb()
                }
            }, e), Q.reset(), en.init(), h0.forEach(e => e.lock());
            let t = function(e, t) {
                let {
                    mirror: n = new fH,
                    blockClass: r = "rr-block",
                    blockSelector: i = null,
                    unblockSelector: o = null,
                    maskAllText: a = !1,
                    maskTextClass: s = "rr-mask",
                    unmaskTextClass: l = null,
                    maskTextSelector: u = null,
                    unmaskTextSelector: c = null,
                    inlineStylesheet: d = !0,
                    inlineImages: p = !1,
                    recordCanvas: f = !1,
                    maskAllInputs: h = !1,
                    maskAttributeFn: m,
                    maskTextFn: g,
                    maskInputFn: v,
                    slimDOM: _ = !1,
                    dataURLOptions: y,
                    preserveWhiteSpace: b,
                    onSerialize: S,
                    onIframeLoad: w,
                    iframeLoadTimeout: E,
                    onBlockedImageLoad: k,
                    onStylesheetLoad: T,
                    stylesheetLoadTimeout: I,
                    keepIframeSrcFn: R = () => !1,
                    ignoreCSSAttributes: x = new Set([])
                } = t || {};
                return hp(e, {
                    doc: e,
                    mirror: n,
                    blockClass: r,
                    blockSelector: i,
                    unblockSelector: o,
                    maskAllText: a,
                    maskTextClass: s,
                    unmaskTextClass: l,
                    maskTextSelector: u,
                    unmaskTextSelector: c,
                    skipChild: !1,
                    inlineStylesheet: d,
                    maskInputOptions: !0 === h ? {
                        color: !0,
                        date: !0,
                        "datetime-local": !0,
                        email: !0,
                        month: !0,
                        number: !0,
                        range: !0,
                        search: !0,
                        tel: !0,
                        text: !0,
                        time: !0,
                        url: !0,
                        week: !0,
                        textarea: !0,
                        select: !0
                    } : !1 === h ? {} : h,
                    maskAttributeFn: m,
                    maskTextFn: g,
                    maskInputFn: v,
                    slimDOMOptions: !0 === _ || "all" === _ ? {
                        script: !0,
                        comment: !0,
                        headFavicon: !0,
                        headWhitespace: !0,
                        headMetaDescKeywords: "all" === _,
                        headMetaSocial: !0,
                        headMetaRobots: !0,
                        headMetaHttpEquiv: !0,
                        headMetaAuthorship: !0,
                        headMetaVerification: !0
                    } : !1 === _ ? {} : _,
                    dataURLOptions: y,
                    inlineImages: p,
                    recordCanvas: f,
                    preserveWhiteSpace: b,
                    onSerialize: S,
                    onIframeLoad: w,
                    iframeLoadTimeout: E,
                    onBlockedImageLoad: k,
                    onStylesheetLoad: T,
                    stylesheetLoadTimeout: I,
                    keepIframeSrcFn: R,
                    newlyAddedElement: !1,
                    ignoreCSSAttributes: x
                })
            }(document, {
                mirror: mu,
                blockClass: o,
                blockSelector: a,
                unblockSelector: s,
                maskAllText: c,
                maskTextClass: d,
                unmaskTextClass: p,
                maskTextSelector: f,
                unmaskTextSelector: h,
                inlineStylesheet: m,
                maskAllInputs: q,
                maskAttributeFn: y,
                maskInputFn: b,
                maskTextFn: S,
                slimDOM: G,
                dataURLOptions: T,
                recordCanvas: x,
                inlineImages: L,
                onSerialize: e => {
                    hI(e, mu) && Z.addIframe(e), hR(e, mu) && Q.trackLinkElement(e), hx(e) && en.addShadowRoot(e.shadowRoot, document)
                },
                onIframeLoad: (e, t) => {
                    Z.attachIframe(e, t);
                    let n = hG(e);
                    n && et.addWindow(n), en.observeAttachShadow(e)
                },
                onStylesheetLoad: (e, t) => {
                    Q.attachLinkElement(e, t)
                },
                onBlockedImageLoad: (e, t, n) => {
                    let {
                        width: r,
                        height: i
                    } = n;
                    K({
                        adds: [],
                        removes: [],
                        texts: [],
                        attributes: [{
                            id: t.id,
                            attributes: {
                                style: {
                                    width: `${r}px`,
                                    height: `${i}px`
                                }
                            }
                        }]
                    })
                },
                keepIframeSrcFn: F,
                ignoreCSSAttributes: U
            });
            if (!t) return console.warn("Failed to snapshot the document");
            P({
                type: hD.FullSnapshot,
                data: {
                    node: t,
                    initialOffset: hy(window)
                }
            }), h0.forEach(e => e.unlock()), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && Q.adoptStyleSheets(document.adoptedStyleSheets, mu.getId(document))
        };
    N = er;
    try {
        let e = [],
            t = e => {
                var t;
                return hB(h9)({
                    onMutation: j,
                    mutationCb: K,
                    mousemoveCb: (e, t) => P({
                        type: hD.IncrementalSnapshot,
                        data: {
                            source: t,
                            positions: e
                        }
                    }),
                    mouseInteractionCb: e => P({
                        type: hD.IncrementalSnapshot,
                        data: {
                            source: hL.MouseInteraction,
                            ...e
                        }
                    }),
                    scrollCb: J,
                    viewportResizeCb: e => P({
                        type: hD.IncrementalSnapshot,
                        data: {
                            source: hL.ViewportResize,
                            ...e
                        }
                    }),
                    inputCb: e => P({
                        type: hD.IncrementalSnapshot,
                        data: {
                            source: hL.Input,
                            ...e
                        }
                    }),
                    mediaInteractionCb: e => P({
                        type: hD.IncrementalSnapshot,
                        data: {
                            source: hL.MediaInteraction,
                            ...e
                        }
                    }),
                    styleSheetRuleCb: e => P({
                        type: hD.IncrementalSnapshot,
                        data: {
                            source: hL.StyleSheetRule,
                            ...e
                        }
                    }),
                    styleDeclarationCb: e => P({
                        type: hD.IncrementalSnapshot,
                        data: {
                            source: hL.StyleDeclaration,
                            ...e
                        }
                    }),
                    canvasMutationCb: X,
                    fontCb: e => P({
                        type: hD.IncrementalSnapshot,
                        data: {
                            source: hL.Font,
                            ...e
                        }
                    }),
                    selectionCb: e => {
                        P({
                            type: hD.IncrementalSnapshot,
                            data: {
                                source: hL.Selection,
                                ...e
                            }
                        })
                    },
                    customElementCb: e => {
                        P({
                            type: hD.IncrementalSnapshot,
                            data: {
                                source: hL.CustomElement,
                                ...e
                            }
                        })
                    },
                    blockClass: o,
                    ignoreClass: l,
                    ignoreSelector: u,
                    maskAllText: c,
                    maskTextClass: d,
                    unmaskTextClass: p,
                    maskTextSelector: f,
                    unmaskTextSelector: h,
                    maskInputOptions: q,
                    inlineStylesheet: m,
                    sampling: k,
                    recordDOM: R,
                    recordCanvas: x,
                    inlineImages: L,
                    userTriggeredOnInput: O,
                    collectFonts: D,
                    doc: e,
                    maskAttributeFn: y,
                    maskInputFn: b,
                    maskTextFn: S,
                    keepIframeSrcFn: F,
                    blockSelector: a,
                    unblockSelector: s,
                    slimDOMOptions: G,
                    dataURLOptions: T,
                    mirror: mu,
                    iframeManager: Z,
                    stylesheetManager: Q,
                    shadowDomManager: en,
                    processedNodeManager: ee,
                    canvasManager: et,
                    ignoreCSSAttributes: U,
                    plugins: (null == $ || null == (t = $.filter(e => e.observer)) ? void 0 : t.map(e => ({
                        observer: e.observer,
                        options: e.options,
                        callback: t => P({
                            type: hD.Plugin,
                            data: {
                                plugin: e.name,
                                payload: t
                            }
                        })
                    }))) || []
                }, {})
            };
        Z.addLoadListener(n => {
            try {
                e.push(t(n.contentDocument))
            } catch (e) {
                console.warn(e)
            }
        });
        let n = () => {
            er(), e.push(t(document))
        };
        return "interactive" === document.readyState || "complete" === document.readyState ? n() : (e.push(hf("DOMContentLoaded", () => {
            P({
                type: hD.DomContentLoaded,
                data: {}
            }), "DOMContentLoaded" === A && n()
        })), e.push(hf("load", () => {
            P({
                type: hD.Load,
                data: {}
            }), "load" === A && n()
        }, window))), () => {
            e.forEach(e => e()), ee.destroy(), N = void 0, M = void 0
        }
    } catch (e) {
        console.warn(e)
    }
}

function md(e) {
    return e > 0x2540be3ff ? e : 1e3 * e
}

function mp(e) {
    return e > 0x2540be3ff ? e / 1e3 : e
}

function mf(e, t) {
    "sentry.transaction" !== t.category && (["ui.click", "ui.input"].includes(t.category) ? e.triggerUserActivity() : e.checkAndHandleExpiredSession(), e.addUpdate(() => (e.throttledAddEvent({
        type: hD.Custom,
        timestamp: 1e3 * (t.timestamp || 0),
        data: {
            tag: "breadcrumb",
            payload: eJ(t, 10, 1e3)
        }
    }), "console" === t.category)))
}

function mh(e) {
    return e.closest("button,a") || e
}

function mm(e) {
    let t = mg(e);
    return t && t instanceof Element ? mh(t) : t
}

function mg(e) {
    var t;
    return eI(t = e) && "target" in t ? e.target : e
}
mc.mirror = mu, mc.takeFullSnapshot = function(e) {
    if (!N) throw Error("please take full snapshot after start recording");
    N(e)
}, (V = Q || (Q = {}))[V.NotStarted = 0] = "NotStarted", V[V.Running = 1] = "Running", V[V.Stopped = 2] = "Stopped";
let mv = new Set([hL.Mutation, hL.StyleSheetRule, hL.StyleDeclaration, hL.AdoptedStyleSheet, hL.CanvasMutation, hL.Selection, hL.MediaInteraction]);
class m_ {
    addListeners() {
        var e;
        let t = (e = () => {
            this._lastMutation = mb()
        }, O || (O = [], eP(ei, "open", function(e) {
            return function() {
                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                if (O) try {
                    O.forEach(e => e())
                } catch {}
                return e.apply(ei, n)
            }
        })), O.push(e), () => {
            let t = O ? O.indexOf(e) : -1;
            t > -1 && O.splice(t, 1)
        });
        this._teardown = () => {
            t(), this._clicks = [], this._lastMutation = 0, this._lastScroll = 0
        }
    }
    removeListeners() {
        this._teardown && this._teardown(), this._checkClickTimeout && clearTimeout(this._checkClickTimeout)
    }
    handleClick(e, t) {
        var n, r, i;
        if (n = t, r = this._ignoreSelector, !my.includes(n.tagName) || "INPUT" === n.tagName && !["submit", "button"].includes(n.getAttribute("type") || "") || "A" === n.tagName && (n.hasAttribute("download") || n.hasAttribute("target") && "_self" !== n.getAttribute("target")) || r && n.matches(r) || !((i = e).data && "number" == typeof i.data.nodeId && i.timestamp)) return;
        let o = {
            timestamp: mp(e.timestamp),
            clickBreadcrumb: e,
            clickCount: 0,
            node: t
        };
        this._clicks.some(e => e.node === o.node && 1 > Math.abs(e.timestamp - o.timestamp)) || (this._clicks.push(o), 1 === this._clicks.length && this._scheduleCheckClicks())
    }
    registerMutation() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
        this._lastMutation = mp(e)
    }
    registerScroll() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
        this._lastScroll = mp(e)
    }
    registerClick(e) {
        let t = mh(e);
        this._handleMultiClick(t)
    }
    _handleMultiClick(e) {
        this._getClicks(e).forEach(e => {
            e.clickCount++
        })
    }
    _getClicks(e) {
        return this._clicks.filter(t => t.node === e)
    }
    _checkClicks() {
        let e = [],
            t = mb();
        for (let n of (this._clicks.forEach(n => {
                !n.mutationAfter && this._lastMutation && (n.mutationAfter = n.timestamp <= this._lastMutation ? this._lastMutation - n.timestamp : void 0), !n.scrollAfter && this._lastScroll && (n.scrollAfter = n.timestamp <= this._lastScroll ? this._lastScroll - n.timestamp : void 0), n.timestamp + this._timeout <= t && e.push(n)
            }), e)) {
            let e = this._clicks.indexOf(n);
            e > -1 && (this._generateBreadcrumbs(n), this._clicks.splice(e, 1))
        }
        this._clicks.length && this._scheduleCheckClicks()
    }
    _generateBreadcrumbs(e) {
        let t = this._replay,
            n = e.scrollAfter && e.scrollAfter <= this._scrollTimeout,
            r = e.mutationAfter && e.mutationAfter <= this._threshold,
            {
                clickCount: i,
                clickBreadcrumb: o
            } = e;
        if (!n && !r) {
            let n = 1e3 * Math.min(e.mutationAfter || this._timeout, this._timeout),
                r = n < 1e3 * this._timeout ? "mutation" : "timeout",
                a = {
                    type: "default",
                    message: o.message,
                    timestamp: o.timestamp,
                    category: "ui.slowClickDetected",
                    data: { ...o.data,
                        url: ei.location.href,
                        route: t.getCurrentRoute(),
                        timeAfterClickMs: n,
                        endReason: r,
                        clickCount: i || 1
                    }
                };
            this._addBreadcrumbEvent(t, a);
            return
        }
        if (i > 1) {
            let e = {
                type: "default",
                message: o.message,
                timestamp: o.timestamp,
                category: "ui.multiClick",
                data: { ...o.data,
                    url: ei.location.href,
                    route: t.getCurrentRoute(),
                    clickCount: i,
                    metric: !0
                }
            };
            this._addBreadcrumbEvent(t, e)
        }
    }
    _scheduleCheckClicks() {
        this._checkClickTimeout && clearTimeout(this._checkClickTimeout), this._checkClickTimeout = sh(() => this._checkClicks(), 1e3)
    }
    constructor(e, t, n = mf) {
        this._lastMutation = 0, this._lastScroll = 0, this._clicks = [], this._timeout = t.timeout / 1e3, this._threshold = t.threshold / 1e3, this._scrollTimeout = t.scrollTimeout / 1e3, this._replay = e, this._ignoreSelector = t.ignoreSelector, this._addBreadcrumbEvent = n
    }
}
let my = ["A", "BUTTON", "INPUT"];

function mb() {
    return Date.now() / 1e3
}

function mS(e) {
    return {
        timestamp: Date.now() / 1e3,
        type: "default",
        ...e
    }
}
var mw = ((Y = mw || {})[Y.Document = 0] = "Document", Y[Y.DocumentType = 1] = "DocumentType", Y[Y.Element = 2] = "Element", Y[Y.Text = 3] = "Text", Y[Y.CDATA = 4] = "CDATA", Y[Y.Comment = 5] = "Comment", Y);
let mE = new Set(["id", "class", "aria-label", "role", "name", "alt", "title", "data-test-id", "data-testid", "disabled", "aria-disabled", "data-sentry-component"]),
    mk = new Set([...mE, "data-sentry-element"]);

function mT(e, t) {
    let n = mc.mirror.getId(e),
        r = n && mc.mirror.getNode(n),
        i = r && mc.mirror.getMeta(r),
        o = i && i.type === mw.Element ? i : null;
    return {
        message: t,
        data: o ? {
            nodeId: n,
            node: {
                id: n,
                tagName: o.tagName,
                textContent: Array.from(o.childNodes).map(e => e.type === mw.Text && e.textContent).filter(Boolean).map(e => e.trim()).join(""),
                attributes: function(e) {
                    let t = {};
                    for (let n in e)
                        if (mE.has(n)) {
                            let r = n;
                            ("data-testid" === n || "data-test-id" === n) && (r = "testId"), t[r] = e[n]
                        }
                    return !t["data-sentry-component"] && e["data-sentry-element"] && (t["data-sentry-component"] = e["data-sentry-element"]), t
                }(o.attributes)
            }
        } : {}
    }
}
let mI = {
    resource: function(e) {
        let {
            entryType: t,
            initiatorType: n,
            name: r,
            responseEnd: i,
            startTime: o,
            decodedBodySize: a,
            encodedBodySize: s,
            responseStatus: l,
            transferSize: u
        } = e;
        return ["fetch", "xmlhttprequest"].includes(n) ? null : {
            type: `${t}.${n}`,
            start: mC(o),
            end: mC(i, o),
            name: r,
            data: {
                size: u,
                statusCode: l,
                decodedBodySize: a,
                encodedBodySize: s
            }
        }
    },
    paint: function(e) {
        let {
            duration: t,
            entryType: n,
            name: r,
            startTime: i
        } = e, o = mC(i);
        return {
            type: n,
            name: r,
            start: o,
            end: o + t,
            data: void 0
        }
    },
    navigation: function(e) {
        let {
            entryType: t,
            name: n,
            decodedBodySize: r,
            duration: i,
            domComplete: o,
            encodedBodySize: a,
            domContentLoadedEventStart: s,
            domContentLoadedEventEnd: l,
            domInteractive: u,
            loadEventStart: c,
            loadEventEnd: d,
            redirectCount: p,
            startTime: f,
            transferSize: h,
            type: m
        } = e;
        return 0 === i ? null : {
            type: `${t}.${m}`,
            start: mC(f),
            end: mC(o, f),
            name: n,
            data: {
                size: h,
                decodedBodySize: r,
                encodedBodySize: a,
                duration: i,
                domInteractive: u,
                domContentLoadedEventStart: s,
                domContentLoadedEventEnd: l,
                loadEventStart: c,
                loadEventEnd: d,
                domComplete: o,
                redirectCount: p
            }
        }
    }
};

function mR(e, t) {
    return n => {
        let {
            metric: r
        } = n;
        t.replayPerformanceEntries.push(e(r))
    }
}

function mx(e) {
    let t = mI[e.entryType];
    return t ? t(e) : null
}

function mC(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
    return to(e, t)
}

function mA(e) {
    let t = e.entries[e.entries.length - 1];
    return mN(e, "largest-contentful-paint", (null == t ? void 0 : t.element) ? [t.element] : void 0)
}

function mM(e) {
    let t = [],
        n = [];
    for (let r of e.entries)
        if (void 0 !== r.sources) {
            let e = [];
            for (let t of r.sources)
                if (t.node) {
                    n.push(t.node);
                    let r = mc.mirror.getId(t.node);
                    r && e.push(r)
                }
            t.push({
                value: r.value,
                nodeIds: e.length ? e : void 0
            })
        }
    return mN(e, "cumulative-layout-shift", n, t)
}

function mP(e) {
    let t = e.entries[e.entries.length - 1];
    return mN(e, "interaction-to-next-paint", (null == t ? void 0 : t.target) ? [t.target] : void 0)
}

function mN(e, t, n, r) {
    let i = e.value,
        o = e.rating,
        a = e.entries[e.entries.length - 1],
        s = mC((null == a ? void 0 : a.startTime) ?? (e.navigationStartTime ?? 0) + i);
    return {
        type: "web-vital",
        name: t,
        start: s,
        end: s,
        data: {
            value: i,
            size: i,
            rating: o,
            nodeIds: n ? n.map(e => mc.mirror.getId(e)) : void 0,
            attributions: r
        }
    }
}
let mO = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
    mD = ["log", "warn", "error"],
    mL = "[Replay] ";

function m$(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "info";
    ii({
        category: "console",
        data: {
            logger: "replay"
        },
        level: t,
        message: `${mL}${e}`
    }, {
        level: t
    })
}
let mF = (F = !1, U = !1, B = {
    exception: () => void 0,
    infoTick: () => void 0,
    setConfig: e => {
        F = !!e.captureExceptions, U = !!e.traceInternals
    }
}, mO ? (mD.forEach(e => {
    B[e] = function() {
        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        em[e](mL, ...n), U && m$(n.join(""), im(e))
    }
}), B.exception = function(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    n.length && B.error && B.error(...n), em.error(mL, e), F ? rD(e, {
        mechanism: {
            handled: !0,
            type: "auto.function.replay.debug"
        }
    }) : U && m$(e, "error")
}, B.infoTick = function() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    em.log(mL, ...t), U && setTimeout(() => m$(t[0]), 0)
}) : mD.forEach(e => {
    B[e] = () => void 0
}), B);
class mU extends Error {
    constructor() {
        super("Event buffer exceeded maximum size of 20000000.")
    }
}
class mB extends Error {
    constructor() {
        super("Worker destroyed")
    }
}
class mj {
    get hasEvents() {
        return this.events.length > 0
    }
    get type() {
        return "sync"
    }
    destroy() {
        this.events = []
    }
    async addEvent(e) {
        let t = JSON.stringify(e).length;
        if (this._totalSize += t, this._totalSize > 2e7) throw new mU;
        this.events.push(e)
    }
    finish() {
        return new Promise(e => {
            let t = this.events;
            this.clear(), e(JSON.stringify(t))
        })
    }
    clear() {
        this.events = [], this._totalSize = 0, this.hasCheckout = !1
    }
    getEarliestTimestamp() {
        let e = null;
        for (let {
                timestamp: t
            } of this.events)(null === e || t < e) && (e = t);
        return null === e ? e : md(e)
    }
    constructor() {
        this.events = [], this._totalSize = 0, this.hasCheckout = !1, this.waitForCheckout = !1
    }
}
class mW {
    ensureReady() {
        return this._ensureReadyPromise || (this._ensureReadyPromise = new Promise((e, t) => {
            this._worker.addEventListener("message", n => {
                let {
                    data: r
                } = n;
                r.success ? e() : (mO && mF.warn("Received worker message with unsuccessful status", r), t(Error("Received worker message with unsuccessful status")))
            }, {
                once: !0
            }), this._worker.addEventListener("error", e => {
                mO && mF.warn("Failed to load Replay compression worker", e), t(Error(`Failed to load Replay compression worker: ${e instanceof ErrorEvent&&e.message?e.message:"Unknown error. This can happen due to CSP policy restrictions, network issues, or the worker script failing to load."}`))
            }, {
                once: !0
            })
        })), this._ensureReadyPromise
    }
    destroy() {
        mO && mF.log("Destroying compression worker"), this._worker.removeEventListener("message", this._onMessage), this._pending.forEach(e => e.reject(new mB)), this._pending.clear(), this._worker.terminate()
    }
    postMessage(e, t) {
        let n = this._getAndIncrementId();
        return new Promise((r, i) => {
            this._pending.set(n, {
                method: e,
                resolve: r,
                reject: i
            });
            try {
                this._worker.postMessage({
                    id: n,
                    method: e,
                    arg: t
                })
            } catch (e) {
                this._pending.delete(n), i(e)
            }
        })
    }
    _getAndIncrementId() {
        return this._id++
    }
    constructor(e) {
        this._onMessage = e => {
            let {
                data: t
            } = e;
            if ("number" != typeof t.id) return;
            let n = this._pending.get(t.id);
            if (n && n.method === t.method) {
                if (this._pending.delete(t.id), !t.success) {
                    mO && mF.error("Error in compression worker: ", t.response), n.reject(Error("Error in compression worker"));
                    return
                }
                n.resolve(t.response)
            }
        }, this._worker = e, this._id = 0, this._pending = new Map, this._worker.addEventListener("message", this._onMessage)
    }
}
class mH {
    get hasEvents() {
        return !!this._earliestTimestamp
    }
    get type() {
        return "worker"
    }
    ensureReady() {
        return this._worker.ensureReady()
    }
    destroy() {
        this._worker.destroy()
    }
    addEvent(e) {
        let t = md(e.timestamp);
        (!this._earliestTimestamp || t < this._earliestTimestamp) && (this._earliestTimestamp = t);
        let n = JSON.stringify(e);
        return (this._totalSize += n.length, this._totalSize > 2e7) ? Promise.reject(new mU) : this._sendEventToWorker(n)
    }
    finish() {
        return this._finishRequest()
    }
    clear() {
        this._earliestTimestamp = null, this._totalSize = 0, this.hasCheckout = !1, this._worker.postMessage("clear").then(null, e => {
            mO && mF.exception(e, 'Sending "clear" message to worker failed', e)
        })
    }
    getEarliestTimestamp() {
        return this._earliestTimestamp
    }
    _sendEventToWorker(e) {
        return this._worker.postMessage("addEvent", e)
    }
    async _finishRequest() {
        let e = await this._worker.postMessage("finish");
        return this._earliestTimestamp = null, this._totalSize = 0, e
    }
    constructor(e) {
        this._worker = new mW(e), this._earliestTimestamp = null, this._totalSize = 0, this.hasCheckout = !1, this.waitForCheckout = !1
    }
}
class mz {
    get waitForCheckout() {
        return this._used.waitForCheckout
    }
    get type() {
        return this._used.type
    }
    get hasEvents() {
        return this._used.hasEvents
    }
    get hasCheckout() {
        return this._used.hasCheckout
    }
    set hasCheckout(e) {
        this._used.hasCheckout = e
    }
    set waitForCheckout(e) {
        this._used.waitForCheckout = e
    }
    destroy() {
        this._fallback.destroy(), this._compression.destroy()
    }
    clear() {
        return this._used.clear()
    }
    getEarliestTimestamp() {
        return this._used.getEarliestTimestamp()
    }
    addEvent(e) {
        return this._used.addEvent(e)
    }
    async finish() {
        return await this.ensureWorkerIsLoaded(), this._used.finish()
    }
    ensureWorkerIsLoaded() {
        return this._ensureWorkerIsLoadedPromise
    }
    async _ensureWorkerIsLoaded() {
        try {
            await this._compression.ensureReady()
        } catch (e) {
            mO && mF.exception(e, "Failed to load the compression worker, falling back to simple buffer");
            return
        }
        await this._switchToCompressionWorker()
    }
    async _switchToCompressionWorker() {
        let {
            events: e,
            hasCheckout: t,
            waitForCheckout: n
        } = this._fallback, r = [];
        for (let t of e) r.push(this._compression.addEvent(t));
        this._compression.hasCheckout = t, this._compression.waitForCheckout = n, this._used = this._compression;
        try {
            await Promise.all(r), this._fallback.clear()
        } catch (e) {
            if (e instanceof mB) return;
            mO && mF.exception(e, "Failed to add events when switching buffers.")
        }
    }
    constructor(e) {
        this._fallback = new mj, this._compression = new mH(e), this._used = this._fallback, this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded()
    }
}

function mq() {
    try {
        return "sessionStorage" in ei && !!ei.sessionStorage
    } catch {
        return !1
    }
}

function mG(e) {
    return void 0 !== e && Math.random() < e
}

function mV(e) {
    if (mq()) try {
        ei.sessionStorage.setItem(fN, JSON.stringify(e))
    } catch {}
}

function mY(e) {
    let t = Date.now(),
        n = e.id || e3(),
        r = e.started || t,
        i = e.lastActivity || t,
        o = e.segmentId || 0,
        a = e.sampled;
    return {
        id: n,
        started: r,
        lastActivity: i,
        segmentId: o,
        sampled: a,
        previousSessionId: e.previousSessionId,
        dirty: e.dirty || !1
    }
}

function mK(e) {
    let {
        sessionSampleRate: t,
        allowBuffering: n,
        stickySession: r = !1
    } = e, {
        previousSessionId: i
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o = mY({
        sampled: mG(t) ? "session" : !!n && "buffer",
        previousSessionId: i
    });
    return r && mV(o), o
}

function mJ(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : +new Date;
    return null === e || void 0 === t || t < 0 || 0 !== t && e + t <= n
}

function mX(e, t) {
    let {
        sessionIdleExpire: n,
        maxReplayDuration: r
    } = t;
    return !! function(e, t) {
        let {
            maxReplayDuration: n,
            sessionIdleExpire: r,
            targetTime: i = Date.now()
        } = t;
        return mJ(e.started, n, i) || mJ(e.lastActivity, r, i)
    }(e, {
        sessionIdleExpire: n,
        maxReplayDuration: r
    }) && ("buffer" !== e.sampled || 0 !== e.segmentId)
}

function mQ(e, t) {
    let {
        sessionIdleExpire: n,
        maxReplayDuration: r,
        previousSessionId: i
    } = e, o = t.stickySession && function() {
        if (!mq()) return null;
        try {
            let e = ei.sessionStorage.getItem(fN);
            if (!e) return null;
            let t = JSON.parse(e);
            return mO && mF.infoTick("Loading existing session"), mY(t)
        } catch {
            return null
        }
    }();
    return o ? mX(o, {
        sessionIdleExpire: n,
        maxReplayDuration: r
    }) ? (mO && mF.infoTick("Session in sessionStorage is expired, creating new one..."), mK(t, {
        previousSessionId: o.id
    })) : o : (mO && mF.infoTick("Creating new session"), mK(t, {
        previousSessionId: i
    }))
}

function mZ(e, t, n) {
    return !!m1(e, t) && (m0(e, t, n), !0)
}
async function m0(e, t, n) {
    let {
        eventBuffer: r
    } = e;
    if (!r || r.waitForCheckout && !n) return null;
    let i = "buffer" === e.recordingMode;
    try {
        n && i && r.clear(), n && (r.hasCheckout = !0, r.waitForCheckout = !1);
        let o = e.getOptions(),
            a = function(e, t) {
                try {
                    if ("function" == typeof t && e.type === hD.Custom) return t(e)
                } catch (e) {
                    return mO && mF.exception(e, "An error occurred in the `beforeAddRecordingEvent` callback, skipping the event..."), null
                }
                return e
            }(t, o.beforeAddRecordingEvent);
        if (!a) return;
        return await r.addEvent(a)
    } catch (o) {
        if (!e.isEnabled()) return e.handleException(o), null;
        let t = o && o instanceof mU,
            n = tA();
        if (n && n.recordDroppedEvent(t ? "buffer_overflow" : "internal_sdk_error", "replay"), t && i) return r.clear(), r.waitForCheckout = !0, null;
        e.handleException(o), await e.stop({
            reason: t ? "eventBufferOverflow" : "eventBufferError"
        })
    }
}

function m1(e, t) {
    if (!e.eventBuffer || e.isPaused() || !e.isEnabled()) return !1;
    let n = md(t.timestamp);
    return !(n + e.timeouts.sessionIdlePause < Date.now()) && (!(n > e.getContext().initialTimestamp + e.getOptions().maxReplayDuration) || (mO && mF.infoTick(`Skipping event with timestamp ${n} because it is after maxReplayDuration`), !1))
}

function m2(e, t, n) {
    let r = e.getContext();
    t && r.traceIds.size < 100 && r.traceIds.add(t), n && r.segmentNames.size < 100 && r.segmentNames.add(n)
}

function m3(e) {
    return "transaction" === e.type
}

function m5(e) {
    return "feedback" === e.type
}

function m4(e) {
    return !!e.category
}

function m6() {
    let e = tT().getPropagationContext().dsc;
    e && delete e.replay_id;
    let t = rh();
    if (t) {
        let e = rx(t);
        delete e.replay_id
    }
}

function m8(e) {
    let t = tT().getPropagationContext().dsc;
    t && (t.replay_id = e);
    let n = rh();
    n && (rx(n).replay_id = e)
}

function m7(e, t) {
    return t.map(t => {
        let {
            type: n,
            start: r,
            end: i,
            name: o,
            data: a
        } = t, s = e.throttledAddEvent({
            type: hD.Custom,
            timestamp: r,
            data: {
                tag: "performanceSpan",
                payload: {
                    op: n,
                    description: o,
                    startTimestamp: r,
                    endTimestamp: i,
                    data: a
                }
            }
        });
        return "string" == typeof s ? Promise.resolve(null) : s
    })
}

function m9(e, t) {
    var n;
    e.isEnabled() && null !== t && (n = t.name, (!mO || !e.getOptions()._experiments.traceInternals) && fv(n, tA()) || e.addUpdate(() => (m7(e, [t]), !0)))
}

function ge(e) {
    if (!e) return;
    let t = new TextEncoder;
    try {
        if ("string" == typeof e) return t.encode(e).length;
        if (e instanceof URLSearchParams) return t.encode(e.toString()).length;
        if (e instanceof FormData) {
            let n = cl(e);
            return t.encode(n).length
        }
        if (e instanceof Blob) return e.size;
        if (e instanceof ArrayBuffer) return e.byteLength
    } catch {}
}

function gt(e) {
    if (!e) return;
    let t = parseInt(e, 10);
    return isNaN(t) ? void 0 : t
}

function gn(e, t) {
    if (!e) return {
        headers: {},
        size: void 0,
        _meta: {
            warnings: [t]
        }
    };
    let n = { ...e._meta
        },
        r = n.warnings || [];
    return n.warnings = [...r, t], e._meta = n, e
}

function gr(e, t) {
    if (!t) return null;
    let {
        startTimestamp: n,
        endTimestamp: r,
        url: i,
        method: o,
        statusCode: a,
        request: s,
        response: l
    } = t;
    return {
        type: e,
        start: n / 1e3,
        end: r / 1e3,
        name: i,
        data: {
            method: o,
            statusCode: a,
            request: s,
            response: l
        }
    }
}

function gi(e) {
    return {
        headers: {},
        size: e,
        _meta: {
            warnings: ["URL_SKIPPED"]
        }
    }
}

function go(e, t, n) {
    if (!t && 0 === Object.keys(e).length) return;
    if (!t) return {
        headers: e
    };
    if (!n) return {
        headers: e,
        size: t
    };
    let r = {
            headers: e,
            size: t
        },
        {
            body: i,
            warnings: o
        } = function(e) {
            var t;
            let n, r;
            if (!e || "string" != typeof e) return {
                body: e
            };
            let i = e.length > 15e4,
                o = (n = (t = e)[0], r = t[t.length - 1], "[" === n && "]" === r || "{" === n && "}" === r);
            if (i) {
                let t = e.slice(0, 15e4);
                return o ? {
                    body: t,
                    warnings: ["MAYBE_JSON_TRUNCATED"]
                } : {
                    body: `${t}…`,
                    warnings: ["TEXT_TRUNCATED"]
                }
            }
            if (o) try {
                return {
                    body: JSON.parse(e)
                }
            } catch {}
            return {
                body: e
            }
        }(n);
    return r.body = i, (null == o ? void 0 : o.length) && (r._meta = {
        warnings: o
    }), r
}

function ga(e, t) {
    return Object.entries(e).reduce((n, r) => {
        let [i, o] = r, a = i.toLowerCase();
        return t.includes(a) && e[i] && (n[a] = o), n
    }, {})
}

function gs(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.document.baseURI;
    if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith(ei.location.origin)) return e;
    let n = new URL(e, t);
    if (n.origin !== new URL(t).origin) return e;
    let r = n.href;
    return !e.endsWith("/") && r.endsWith("/") ? r.slice(0, -1) : r
}
async function gl(e, t, n) {
    try {
        let r = await gu(e, t, n),
            i = gr("resource.fetch", r);
        m9(n.replay, i)
    } catch (e) {
        mO && mF.exception(e, "Failed to capture fetch breadcrumb")
    }
}
async function gu(e, t, n) {
    var r, i;
    let o = Date.now(),
        {
            startTimestamp: a = o,
            endTimestamp: s = o
        } = t,
        {
            url: l,
            method: u,
            status_code: c = 0,
            request_body_size: d,
            response_body_size: p
        } = e.data,
        f = (r = n.networkDetailAllowUrls, e2(gs(l), r) && (i = n.networkDetailDenyUrls, !e2(gs(l), i)));
    return {
        startTimestamp: a,
        endTimestamp: s,
        url: l,
        method: u,
        statusCode: c,
        request: f ? function(e, t, n) {
            var r, i;
            let {
                networkCaptureBodies: o,
                networkRequestHeaders: a
            } = e, s = t ? (r = t, i = a, 1 === r.length && "string" != typeof r[0] ? gf(r[0], i) : 2 === r.length ? gf(r[1], i) : {}) : {};
            if (!o) return go(s, n, void 0);
            let [l, u] = cu(cc(t), mF), c = go(s, n, l);
            return u ? gn(c, u) : c
        }(n, t.input, d) : gi(d),
        response: await gc(f, n, t.response, p)
    }
}
async function gc(e, t, n, r) {
    let {
        networkCaptureBodies: i,
        networkResponseHeaders: o
    } = t;
    if (!e && void 0 !== r) return gi(r);
    let a = n ? gp(n.headers, o) : {};
    if (!n || !i && void 0 !== r) return go(a, r, void 0);
    let [s, l] = await gd(n), u = function(e, t) {
        let {
            networkCaptureBodies: n,
            responseBodySize: r,
            captureDetails: i,
            headers: o
        } = t;
        try {
            let t = (null == e ? void 0 : e.length) && void 0 === r ? ge(e) : r;
            if (!i) return gi(t);
            if (n) return go(o, t, e);
            return go(o, t, void 0)
        } catch (e) {
            return mO && mF.exception(e, "Failed to serialize response body"), go(o, r, void 0)
        }
    }(s, {
        networkCaptureBodies: i,
        responseBodySize: r,
        captureDetails: e,
        headers: a
    });
    return l ? gn(u, l) : u
}
async function gd(e) {
    let t = function(e) {
        try {
            return e.clone()
        } catch (e) {
            mO && mF.exception(e, "Failed to clone response body")
        }
    }(e);
    if (!t) return [void 0, "BODY_PARSE_ERROR"];
    try {
        var n;
        return [await (n = t, new Promise((e, t) => {
            let r = sh(() => t(Error("Timeout while trying to read response body")), 500);
            gh(n).then(t => e(t), e => t(e)).finally(() => clearTimeout(r))
        }))]
    } catch (e) {
        if (e instanceof Error && e.message.indexOf("Timeout") > -1) return mO && mF.warn("Parsing text body from response timed out"), [void 0, "BODY_PARSE_TIMEOUT"];
        return mO && mF.exception(e, "Failed to get text body from response"), [void 0, "BODY_PARSE_ERROR"]
    }
}

function gp(e, t) {
    let n = {};
    return t.forEach(t => {
        e.get(t) && (n[t] = e.get(t))
    }), n
}

function gf(e, t) {
    if (!e) return {};
    let n = e.headers;
    return n ? n instanceof Headers ? gp(n, t) : Array.isArray(n) ? {} : ga(n, t) : {}
}
async function gh(e) {
    return e.text()
}
async function gm(e, t, n) {
    try {
        let r = function(e, t, n) {
                var r, i;
                let o = Date.now(),
                    {
                        startTimestamp: a = o,
                        endTimestamp: s = o,
                        input: l,
                        xhr: u
                    } = t,
                    {
                        url: c,
                        method: d,
                        status_code: p = 0,
                        request_body_size: f,
                        response_body_size: h
                    } = e.data;
                if (!c) return null;
                if (!u || (r = n.networkDetailAllowUrls, !e2(gs(c), r)) || (i = n.networkDetailDenyUrls, e2(gs(c), i))) return {
                    startTimestamp: a,
                    endTimestamp: s,
                    url: c,
                    method: d,
                    statusCode: p,
                    request: gi(f),
                    response: gi(h)
                };
                let m = u[ap],
                    g = m ? ga(m.request_headers, n.networkRequestHeaders) : {},
                    v = ga(cd(u), n.networkResponseHeaders),
                    [_, y] = n.networkCaptureBodies ? cu(l, mF) : [void 0],
                    [b, S] = n.networkCaptureBodies ? function(e) {
                        let t = [];
                        try {
                            return [e.responseText]
                        } catch (e) {
                            t.push(e)
                        }
                        try {
                            var n = e.response,
                                r = e.responseType;
                            try {
                                if ("string" == typeof n) return [n];
                                if (n instanceof Document) return [n.body.outerHTML];
                                if ("json" === r && eI(n)) return [JSON.stringify(n)];
                                if (!n) return [void 0]
                            } catch (e) {
                                return mO && mF.exception(e, "Failed to serialize body", n), [void 0, "BODY_PARSE_ERROR"]
                            }
                            return mO && mF.log("Skipping network body because of body type", n), [void 0, "UNPARSEABLE_BODY_TYPE"]
                        } catch (e) {
                            t.push(e)
                        }
                        return mO && mF.warn("Failed to get xhr response body", ...t), [void 0]
                    }(u) : [void 0],
                    w = go(g, f, _),
                    E = go(v, h, b);
                return {
                    startTimestamp: a,
                    endTimestamp: s,
                    url: c,
                    method: d,
                    statusCode: p,
                    request: y ? gn(w, y) : w,
                    response: S ? gn(E, S) : E
                }
            }(e, t, n),
            i = gr("resource.xhr", r);
        m9(n.replay, i)
    } catch (e) {
        mO && mF.exception(e, "Failed to capture xhr breadcrumb")
    }
}
async function gg(e) {
    try {
        return await Promise.all(m7(e, [function(e) {
            let {
                jsHeapSizeLimit: t,
                totalJSHeapSize: n,
                usedJSHeapSize: r
            } = e, i = Date.now() / 1e3;
            return {
                type: "memory",
                name: "memory",
                start: i,
                end: i,
                data: {
                    memory: {
                        jsHeapSizeLimit: t,
                        totalJSHeapSize: n,
                        usedJSHeapSize: r
                    }
                }
            }
        }(ei.performance.memory)]))
    } catch {
        return []
    }
}
let gv = ei.navigator;
async function g_(e) {
    let {
        client: t,
        scope: n,
        replayId: r,
        event: i
    } = e, o = {
        event_id: r,
        integrations: "object" != typeof t._integrations || null === t._integrations || Array.isArray(t._integrations) ? void 0 : Object.keys(t._integrations)
    };
    t.emit("preprocessEvent", i, o);
    let a = await rN(t.getOptions(), i, o, n, t, tI());
    if (!a) return null;
    t.emit("postprocessEvent", a, o), a.platform = a.platform || "javascript";
    let s = t.getSdkMetadata(),
        {
            name: l,
            version: u,
            settings: c
        } = (null == s ? void 0 : s.sdk) || {};
    return a.sdk = { ...a.sdk,
        name: l || "sentry.javascript.unknown",
        version: u || "0.0.0",
        settings: c
    }, a
}
async function gy(e) {
    var t;
    let n, {
            recordingData: r,
            replayId: i,
            segmentId: o,
            eventContext: a,
            timestamp: s,
            session: l
        } = e,
        u = function(e) {
            let t, {
                    recordingData: n,
                    headers: r
                } = e,
                i = `${JSON.stringify(r)}
`;
            if ("string" == typeof n) t = `${i}${n}`;
            else {
                let e = new TextEncoder().encode(i);
                (t = new Uint8Array(e.length + n.length)).set(e), t.set(n, e.length)
            }
            return t
        }({
            recordingData: r,
            headers: {
                segment_id: o
            }
        }),
        {
            urls: c,
            errorIds: d,
            traceIds: p,
            segmentNames: f,
            initialTimestamp: h
        } = a,
        m = tA(),
        g = tT(),
        v = null == m ? void 0 : m.getTransport(),
        _ = null == m ? void 0 : m.getDsn();
    if (!m || !v || !_ || !l.sampled) return Promise.resolve({});
    let y = {
            type: "replay_event",
            replay_start_timestamp: h / 1e3,
            timestamp: s / 1e3,
            error_ids: d,
            trace_ids: p,
            segment_names: f,
            urls: c,
            replay_id: i,
            segment_id: o,
            replay_type: l.sampled
        },
        b = await g_({
            scope: g,
            client: m,
            replayId: i,
            event: y
        });
    if (!b) return mO && mF.log("An event processor returned `null`, will not send event."), Promise.resolve({});
    delete b.sdkProcessingMetadata;
    let S = (t = m.getOptions().tunnel, tV(t2(b, t1(b), t, _), [
        [{
            type: "replay_event"
        }, b],
        [{
            type: "replay_recording",
            length: "string" == typeof u ? new TextEncoder().encode(u).length : u.length
        }, u]
    ]));
    try {
        n = await v.send(S)
    } catch (t) {
        let e = Error(fO);
        try {
            e.cause = t
        } catch {}
        throw e
    }
    let w = iQ({}, n);
    if (iX(w, "replay")) throw new gS(w);
    if ("number" == typeof n.statusCode && (n.statusCode < 200 || n.statusCode >= 300)) throw new gb(n.statusCode);
    return n
}
class gb extends Error {
    constructor(e) {
        super(`Transport returned status code ${e}`)
    }
}
class gS extends Error {
    constructor(e) {
        super("Rate limit hit"), this.rateLimits = e
    }
}
class gw extends Error {
    constructor() {
        super("Session is too long, not sending replay")
    }
}
async function gE(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            count: 0,
            interval: 5e3
        },
        {
            recordingData: n,
            onError: r
        } = e;
    if (n.length) try {
        return await gy(e), !0
    } catch (n) {
        if (n instanceof gb || n instanceof gS) throw n;
        if (rF("Replays", {
                _retryCount: t.count
            }), r && r(n), t.count >= 3) {
            let e = Error(`${fO} - max retries exceeded`);
            try {
                e.cause = n
            } catch {}
            throw e
        }
        return t.interval *= ++t.count, new Promise((n, r) => {
            sh(async () => {
                try {
                    await gE(e, t), n(!0)
                } catch (e) {
                    r(e)
                }
            }, t.interval)
        })
    }
}
let gk = "__THROTTLED";
class gT {
    getContext() {
        return this._context
    }
    isEnabled() {
        return this._isEnabled
    }
    isPaused() {
        return this._isPaused
    }
    isRecordingCanvas() {
        return !!this._canvas
    }
    getOptions() {
        return this._options
    }
    handleException(e) {
        mO && mF.exception(e), this._options.onError && this._options.onError(e)
    }
    initializeSampling(e) {
        let {
            errorSampleRate: t,
            sessionSampleRate: n
        } = this._options, r = t <= 0 && n <= 0;
        if (this._requiresManualStart = r, !r) {
            if (this._initializeSessionForSampling(e), !this.session) {
                mO && mF.exception(Error("Unable to initialize and create session"));
                return
            }!1 !== this.session.sampled && (this.recordingMode = "buffer" === this.session.sampled && 0 === this.session.segmentId ? "buffer" : "session", mO && mF.infoTick(`Starting replay in ${this.recordingMode} mode`), this._initializeRecording())
        }
    }
    start() {
        if (this._isEnabled && "session" === this.recordingMode) {
            mO && mF.log("Recording is already in progress");
            return
        }
        if (this._isEnabled && "buffer" === this.recordingMode) {
            mO && mF.log("Buffering is in progress, call `flush()` to save the replay");
            return
        }
        mO && mF.infoTick("Starting replay in session mode"), this._updateUserActivity();
        let e = mQ({
            maxReplayDuration: this._options.maxReplayDuration,
            sessionIdleExpire: this.timeouts.sessionIdleExpire
        }, {
            stickySession: this._options.stickySession,
            sessionSampleRate: 1,
            allowBuffering: !1
        });
        this.session = e, this.recordingMode = "session", this._initializeRecording()
    }
    startBuffering() {
        if (this._isEnabled) {
            mO && mF.log("Buffering is in progress, call `flush()` to save the replay");
            return
        }
        mO && mF.infoTick("Starting replay in buffer mode");
        let e = mQ({
            sessionIdleExpire: this.timeouts.sessionIdleExpire,
            maxReplayDuration: this._options.maxReplayDuration
        }, {
            stickySession: this._options.stickySession,
            sessionSampleRate: 0,
            allowBuffering: !0
        });
        this.session = e, this.recordingMode = "buffer", this._initializeRecording()
    }
    startRecording() {
        try {
            var e;
            let t, n = this._canvas;
            this._stopRecording = mc({ ...this._recordingOptions,
                ..."buffer" === this.recordingMode ? {
                    checkoutEveryNms: 6e4
                } : this._options._experiments.continuousCheckout && {
                    checkoutEveryNms: Math.max(36e4, this._options._experiments.continuousCheckout)
                },
                emit: (e = this, t = !1, (n, r) => {
                    try {
                        if (!e.checkAndHandleExpiredSession()) {
                            mO && mF.warn("Received replay event after session expired.");
                            return
                        }
                        let i = r || !t;
                        t = !0,
                            function(e) {
                                let t = e.data;
                                if (e.type === hD.IncrementalSnapshot && t && "object" == typeof t && "source" in t && t.source === hL.Mutation && "attributes" in t && Array.isArray(t.attributes))
                                    for (let e of t.attributes) {
                                        let t = mc.mirror.getNode(e.id),
                                            n = t && mc.mirror.getMeta(t);
                                        if (!t || (null == n ? void 0 : n.type) !== mw.Element) continue;
                                        let r = { ...n.attributes
                                            },
                                            i = !1;
                                        for (let [t, n] of Object.entries(e.attributes)) mk.has(t) && (null === n ? delete r[t] : r[t] = n, i = !0);
                                        i && mc.mirror.add(t, { ...n,
                                            attributes: r
                                        })
                                    }
                            }(n), e.clickDetector && function(e, t) {
                                try {
                                    var n;
                                    if (n = t, 3 !== n.type) return;
                                    let {
                                        source: r
                                    } = t.data;
                                    if (mv.has(r) && e.registerMutation(t.timestamp), r === hL.Scroll && e.registerScroll(t.timestamp), t.data.source === hL.MouseInteraction) {
                                        let {
                                            type: n,
                                            id: r
                                        } = t.data, i = mc.mirror.getNode(r);
                                        i instanceof HTMLElement && n === h$.Click && e.registerClick(i)
                                    }
                                } catch {}
                            }(e.clickDetector, n), e.addUpdate(() => {
                                if ("buffer" === e.recordingMode && i && e.setInitialState(), !mZ(e, n, i)) return !0;
                                if (!i) return !1;
                                let t = e.session;
                                if (function(e, t) {
                                        var n;
                                        if (t && (null == (n = e.session) ? void 0 : n.segmentId) === 0) {
                                            let t;
                                            mZ(e, (t = e.getOptions(), {
                                                type: hD.Custom,
                                                timestamp: Date.now(),
                                                data: {
                                                    tag: "options",
                                                    payload: {
                                                        shouldRecordCanvas: e.isRecordingCanvas(),
                                                        sessionSampleRate: t.sessionSampleRate,
                                                        errorSampleRate: t.errorSampleRate,
                                                        useCompressionOption: t.useCompression,
                                                        blockAllMedia: t.blockAllMedia,
                                                        maskAllText: t.maskAllText,
                                                        maskAllInputs: t.maskAllInputs,
                                                        useCompression: !!e.eventBuffer && "worker" === e.eventBuffer.type,
                                                        networkDetailHasUrls: t.networkDetailAllowUrls.length > 0,
                                                        networkCaptureBodies: t.networkCaptureBodies,
                                                        networkRequestHasHeaders: t.networkRequestHeaders.length > 0,
                                                        networkResponseHasHeaders: t.networkResponseHeaders.length > 0
                                                    }
                                                }
                                            }), !1)
                                        }
                                    }(e, i), "buffer" === e.recordingMode && t && e.eventBuffer && !t.dirty) {
                                    let n = e.eventBuffer.getEarliestTimestamp();
                                    n && (mO && mF.log(`Updating session start time to earliest event in buffer to ${new Date(n)}`), t.started = n, e.getOptions().stickySession && mV(t))
                                }
                                return null != t && !!t.previousSessionId || ("session" === e.recordingMode && e.flush(), !0)
                            })
                    } catch (t) {
                        e.handleException(t)
                    }
                }),
                .../iPhone|iPad|iPod/i.test((null == gv ? void 0 : gv.userAgent) ?? "") || /Macintosh/i.test((null == gv ? void 0 : gv.userAgent) ?? "") && (null == gv ? void 0 : gv.maxTouchPoints) && (null == gv ? void 0 : gv.maxTouchPoints) > 1 ? {
                    sampling: {
                        mousemove: !1
                    }
                } : {},
                onMutation: this._onMutationHandler.bind(this),
                ...n ? {
                    recordCanvas: n.recordCanvas,
                    getCanvasManager: n.getCanvasManager,
                    sampling: n.sampling,
                    dataURLOptions: n.dataURLOptions
                } : {}
            })
        } catch (e) {
            this.handleException(e)
        }
    }
    stopRecording() {
        try {
            return this._stopRecording && (this._stopRecording(), this._stopRecording = void 0), !0
        } catch (e) {
            return this.handleException(e), !1
        }
    }
    async stop() {
        var e, t, n;
        let {
            forceFlush: r = !1,
            reason: i
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!this._isEnabled) return;
        this._isEnabled = !1, this.recordingMode = "buffer";
        let o = i ?? "manual";
        null == (t = tA()) || t.emit("replayEnd", {
            sessionId: null == (e = this.session) ? void 0 : e.id,
            reason: o
        });
        try {
            mO && mF.log(`Stopping Replay triggered by ${o}`), m6(), this._removeListeners(), this.stopRecording(), this._debouncedFlush.cancel(), r && await this._flush({
                    force: !0
                }), null == (n = this.eventBuffer) || n.destroy(), this.eventBuffer = null,
                function() {
                    if (mq()) try {
                        ei.sessionStorage.removeItem(fN)
                    } catch {}
                }(), this.session = void 0
        } catch (e) {
            this.handleException(e)
        }
    }
    pause() {
        !this._isPaused && (this._isPaused = !0, this.stopRecording(), mO && mF.log("Pausing replay"))
    }
    resume() {
        this._isPaused && this._checkSession() && (this._isPaused = !1, this.startRecording(), mO && mF.log("Resuming replay"))
    }
    async sendBufferedReplayOrFlush() {
        let {
            continueRecording: e = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if ("session" === this.recordingMode) return this.flushImmediate();
        let t = Date.now();
        mO && mF.log("Converting buffer to session"), await this.flushImmediate();
        let n = this.stopRecording();
        e && n && "session" !== this.recordingMode && (this.recordingMode = "session", this.session && (this.session.dirty = !1, this._updateUserActivity(t), this._updateSessionActivity(t), this._maybeSaveSession(), m8(this.session.id)), this.startRecording())
    }
    addUpdate(e) {
        let t = e();
        "buffer" !== this.recordingMode && this._isEnabled && !0 !== t && this._debouncedFlush()
    }
    triggerUserActivity() {
        if (this._updateUserActivity(), !this._stopRecording) {
            if (!this._checkSession()) return;
            this.resume();
            return
        }
        this.checkAndHandleExpiredSession(), this._updateSessionActivity()
    }
    updateUserActivity() {
        this._updateUserActivity(), this._updateSessionActivity()
    }
    conditionalFlush() {
        return "buffer" === this.recordingMode ? Promise.resolve() : this.flushImmediate()
    }
    flush() {
        return this._debouncedFlush()
    }
    flushImmediate() {
        return this._debouncedFlush(), this._debouncedFlush.flush()
    }
    cancelFlush() {
        this._debouncedFlush.cancel()
    }
    getSessionId(e) {
        var t, n;
        if (!e || (null == (t = this.session) ? void 0 : t.sampled) !== !1) return null == (n = this.session) ? void 0 : n.id
    }
    checkAndHandleExpiredSession() {
        var e;
        return this._lastActivity && mJ(this._lastActivity, this.timeouts.sessionIdlePause) && (null == (e = this.session) ? void 0 : e.sampled) === "session" ? void this.pause() : !!this._checkSession()
    }
    setInitialState() {
        let e = `${ei.location.pathname}${ei.location.hash}${ei.location.search}`,
            t = `${ei.location.origin}${e}`;
        this.performanceEntries = [], this.replayPerformanceEntries = [], this._clearContext(), this._context.initialUrl = t, this._context.initialTimestamp = Date.now(), this._context.urls.push(t)
    }
    throttledAddEvent(e, t) {
        let n = this._throttledAddEvent(e, t);
        if (n === gk) {
            let e = mS({
                category: "replay.throttled"
            });
            this.addUpdate(() => !mZ(this, {
                type: 5,
                timestamp: e.timestamp || 0,
                data: {
                    tag: "breadcrumb",
                    payload: e,
                    metric: !0
                }
            }))
        }
        return n
    }
    getCurrentRoute() {
        let e = this.lastActiveSpan || rh(),
            t = e && rd(e);
        if (!t) return;
        let n = n7(t),
            r = n.attributes["sentry.segment.name.source"];
        if (r && ["route", "custom"].includes(r)) return n.name
    }
    _initializeRecording() {
        if (this.setInitialState(), this._updateSessionActivity(), this.eventBuffer = function(e) {
                let {
                    useCompression: t,
                    workerUrl: n
                } = e;
                if (t && window.Worker) {
                    let e = function(e) {
                        try {
                            let t = e || function() {
                                if ("u" < typeof __SENTRY_EXCLUDE_REPLAY_WORKER__ || !__SENTRY_EXCLUDE_REPLAY_WORKER__) {
                                    let e;
                                    return e = new Blob(['var t=Uint8Array,r=Uint16Array,n=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),a=function(t,e){for(var i=new r(31),s=0;s<31;++s)i[s]=e+=1<<t[s-1];var a=new n(i[30]);for(s=1;s<30;++s)for(var o=i[s];o<i[s+1];++o)a[o]=o-i[s]<<5|s;return{b:i,r:a}},o=a(e,2),h=o.b,f=o.r;h[28]=258,f[258]=28;for(var l=a(i,0).r,u=new r(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,n,e){for(var i=t.length,s=0,a=new r(n);s<i;++s)t[s]&&++a[t[s]-1];var o,h=new r(n);for(s=1;s<n;++s)h[s]=h[s-1]+a[s-1]<<1;if(e){o=new r(1<<n);var f=15-n;for(s=0;s<i;++s)if(t[s])for(var l=s<<4|t[s],c=n-t[s],v=h[t[s]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>f]=l}else for(o=new r(i),s=0;s<i;++s)t[s]&&(o[s]=u[h[t[s]-1]++]>>15-t[s]);return o},p=new t(288);for(c=0;c<144;++c)p[c]=8;for(c=144;c<256;++c)p[c]=9;for(c=256;c<280;++c)p[c]=7;for(c=280;c<288;++c)p[c]=8;var g=new t(32);for(c=0;c<32;++c)g[c]=5;var w=d(p,9,0),y=d(g,5,0),m=function(t){return(t+7)/8|0},b=function(r,n,e){return(null==e||e>r.length)&&(e=r.length),new t(r.subarray(n,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,r,n){var e=new Error(r||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!n)throw e;return e},z=function(t,r,n){n<<=7&r;var e=r/8|0;t[e]|=n,t[e+1]|=n>>8},_=function(t,r,n){n<<=7&r;var e=r/8|0;t[e]|=n,t[e+1]|=n>>8,t[e+2]|=n>>16},x=function(n,e){for(var i=[],s=0;s<n.length;++s)n[s]&&i.push({s:s,f:n[s]});var a=i.length,o=i.slice();if(!a)return{t:F,l:0};if(1==a){var h=new t(i[0].s+1);return h[i[0].s]=1,{t:h,l:1}}i.sort(function(t,r){return t.f-r.f}),i.push({s:-1,f:25001});var f=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:f.f+l.f,l:f,r:l};c!=a-1;)f=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:f.f+l.f,l:f,r:l};var d=o[0].s;for(s=1;s<a;++s)o[s].s>d&&(d=o[s].s);var p=new r(d+1),g=A(i[c-1],p,0);if(g>e){s=0;var w=0,y=g-e,m=1<<y;for(o.sort(function(t,r){return p[r.s]-p[t.s]||t.f-r.f});s<a;++s){var b=o[s].s;if(!(p[b]>e))break;w+=m-(1<<g-p[b]),p[b]=e}for(w>>=y;w>0;){var M=o[s].s;p[M]<e?w-=1<<e-p[M]++-1:++s}for(;s>=0&&w;--s){var E=o[s].s;p[E]==e&&(--p[E],++w)}g=e}return{t:new t(p),l:g}},A=function(t,r,n){return-1==t.s?Math.max(A(t.l,r,n+1),A(t.r,r,n+1)):r[t.s]=n},D=function(t){for(var n=t.length;n&&!t[--n];);for(var e=new r(++n),i=0,s=t[0],a=1,o=function(t){e[i++]=t},h=1;h<=n;++h)if(t[h]==s&&h!=n)++a;else{if(!s&&a>2){for(;a>138;a-=138)o(32754);a>2&&(o(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(o(s),--a;a>6;a-=6)o(8304);a>2&&(o(a-3<<5|8208),a=0)}for(;a--;)o(s);a=1,s=t[h]}return{c:e.subarray(0,i),n:n}},T=function(t,r){for(var n=0,e=0;e<r.length;++e)n+=t[e]*r[e];return n},k=function(t,r,n){var e=n.length,i=m(r+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var s=0;s<e;++s)t[i+s+4]=n[s];return 8*(i+4+e)},U=function(t,n,a,o,h,f,l,u,c,v,m){z(n,m++,a),++h[256];for(var b=x(h,15),M=b.t,E=b.l,A=x(f,15),U=A.t,C=A.l,F=D(M),I=F.c,S=F.n,L=D(U),O=L.c,j=L.n,q=new r(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=x(q,7),H=G.t,J=G.l,K=19;K>4&&!H[s[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(h,p)+T(f,g)+l,X=T(h,M)+T(f,U)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(n,m,t.subarray(c,c+v));if(z(n,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(U,C,0),R=U;var Y=d(H,J,0);z(n,m,S-257),z(n,m+5,j-1),z(n,m+10,K-4),m+=14;for(B=0;B<K;++B)z(n,m+3*B,H[s[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var rt=31&tt[B];z(n,m,Y[rt]),m+=H[rt],rt>15&&(z(n,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=w,P=p,Q=y,R=g;for(B=0;B<u;++B){var nt=o[B];if(nt>255){_(n,m,N[(rt=nt>>18&31)+257]),m+=P[rt+257],rt>7&&(z(n,m,nt>>23&31),m+=e[rt]);var et=31&nt;_(n,m,Q[et]),m+=R[et],et>3&&(_(n,m,nt>>5&8191),m+=i[et])}else _(n,m,N[nt]),m+=P[nt]}return _(n,m,N[256]),m+P[256]},C=new n([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),r=0;r<256;++r){for(var n=r,e=9;--e;)n=(1&n&&-306674912)^n>>>1;t[r]=n}return t}(),S=function(){var t=1,r=0;return{p:function(n){for(var e=t,i=r,s=0|n.length,a=0;a!=s;){for(var o=Math.min(a+2655,s);a<o;++a)i+=e+=n[a];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,r=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(r%=65521))<<8|r>>8}}},L=function(s,a,o,h,u){if(!u&&(u={l:1},a.dictionary)){var c=a.dictionary.subarray(-32768),v=new t(c.length+s.length);v.set(c),v.set(s,c.length),s=v,u.w=c.length}return function(s,a,o,h,u,c){var v=c.z||s.length,d=new t(h+v+5*(1+Math.ceil(v/7e3))+u),p=d.subarray(h,d.length-u),g=c.l,w=7&(c.r||0);if(a){w&&(p[0]=c.r>>3);for(var y=C[a-1],M=y>>13,E=8191&y,z=(1<<o)-1,_=c.p||new r(32768),x=c.h||new r(z+1),A=Math.ceil(o/3),D=2*A,T=function(t){return(s[t]^s[t+1]<<A^s[t+2]<<D)&z},F=new n(25e3),I=new r(288),S=new r(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=x[H];if(_[J]=K,x[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!g)){w=U(s,p,0,F,I,S,O,q,G,j-G,w),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(s[j+Q]==s[j+Q-W]){for(var $=0;$<Z&&s[j+$]==s[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),rt=0;for(P=0;P<tt;++P){var nt=j-W+P&32767,et=nt-_[nt]&32767;et>rt&&(rt=et,K=nt)}}}W+=(J=K)-(K=_[J])&32767}if(R){F[q++]=268435456|f[Q]<<18|l[R];var it=31&f[Q],st=31&l[R];O+=e[it]+i[st],++I[257+it],++S[st],B=j+Q,++L}else F[q++]=s[j],++I[s[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=s[j],++I[s[j]];w=U(s,p,g,F,I,S,O,q,G,j-G,w),g||(c.r=7&w|p[w/8|0]<<3,w-=7,c.h=x,c.p=_,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+g;j+=65535){var at=j+65535;at>=v&&(p[w/8|0]=g,at=v),w=k(p,w+1,s.subarray(j,at))}c.i=v}return b(d,0,h+m(w)+u)}(s,null==a.level?6:a.level,null==a.mem?u.l?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(s.length)))):20:12+a.mem,o,h,u)},O=function(t,r,n){for(;n;++r)t[r]=n,n>>>=8},j=function(){function r(r,n){if("function"==typeof r&&(n=r,r={}),this.ondata=n,this.o=r||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return r.prototype.p=function(t,r){this.ondata(L(t,this.o,0,0,this.s),r)},r.prototype.push=function(r,n){this.ondata||E(5),this.s.l&&E(4);var e=r.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var s=this.b.length-this.s.z;this.b.set(r.subarray(0,s),this.s.z),this.s.z=this.b.length,this.p(this.b,!1),this.b.set(this.b.subarray(-32768)),this.b.set(r.subarray(s),32768),this.s.z=r.length-s+32768,this.s.i=32766,this.s.w=32768}else this.b.set(r,this.s.z),this.s.z+=r.length;this.s.l=1&n,(this.s.z>this.s.w+8191||n)&&(this.p(this.b,n||!1),this.s.w=this.s.i,this.s.i-=2),n&&(this.s=this.o={},this.b=F)},r.prototype.flush=function(r){if(this.ondata||E(5),this.s.l&&E(4),this.p(this.b,!1),this.s.w=this.s.i,this.s.i-=2,r){var n=new t(6);n[0]=this.s.r>>3;var e=k(n,this.s.r,F);this.s.r=0,this.ondata(n.subarray(0,e>>3),!1)}},r}();function q(t,r){r||(r={});var n=function(){var t=-1;return{p:function(r){for(var n=t,e=0;e<r.length;++e)n=I[255&n^r[e]]^n>>>8;t=n},d:function(){return~t}}}(),e=t.length;n.p(t);var i,s=L(t,r,10+((i=r).filename?i.filename.length+1:0),8),a=s.length;return function(t,r){var n=r.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=r.level<2?4:9==r.level?2:0,t[9]=3,0!=r.mtime&&O(t,4,Math.floor(new Date(r.mtime||Date.now())/1e3)),n){t[3]=8;for(var e=0;e<=n.length;++e)t[e+10]=n.charCodeAt(e)}}(s,r),O(s,a-8,n.d()),O(s,a-4,e),s}var B=function(){function t(t,r){this.c=S(),this.v=1,j.call(this,t,r)}return t.prototype.push=function(t,r){this.c.p(t),j.prototype.push.call(this,t,r)},t.prototype.p=function(t,r){var n=L(t,this.o,this.v&&(this.o.dictionary?6:2),r&&4,this.s);this.v&&(function(t,r){var n=r.level,e=0==n?0:n<6?1:9==n?3:2;if(t[0]=120,t[1]=e<<6|(r.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,r.dictionary){var i=S();i.p(r.dictionary),O(t,2,i.d())}}(n,this.o),this.v=0),r&&O(n,n.length-4,this.c.d()),this.ondata(n,r)},t.prototype.flush=function(t){j.prototype.flush.call(this,t)},t}(),G="undefined"!=typeof TextEncoder&&new TextEncoder,H="undefined"!=typeof TextDecoder&&new TextDecoder;try{H.decode(F,{stream:!0})}catch(t){}var J=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,r){this.ondata||E(5),this.d&&E(4),this.ondata(K(t),this.d=r||!1)},t}();function K(r,n){if(G)return G.encode(r);for(var e=r.length,i=new t(r.length+(r.length>>1)),s=0,a=function(t){i[s++]=t},o=0;o<e;++o){if(s+5>i.length){var h=new t(s+8+(e-o<<1));h.set(i),i=h}var f=r.charCodeAt(o);f<128||n?a(f):f<2048?(a(192|f>>6),a(128|63&f)):f>55295&&f<57344?(a(240|(f=65536+(1047552&f)|1023&r.charCodeAt(++o))>>18),a(128|f>>12&63),a(128|f>>6&63),a(128|63&f)):(a(224|f>>12),a(128|f>>6&63),a(128|63&f))}return b(i,0,s)}const N=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const r=this._hasEvents?",":"";this.stream.push(r+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let r=0;for(const n of t)r+=n.length;const n=new Uint8Array(r);for(let r=0,e=0,i=t.length;r<i;r++){const i=t[r];n.set(i,e),e+=i.length}return n}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new B,this.deflate.ondata=(t,r)=>{this._deflatedData.push(t)},this.stream=new J((t,r)=>{this.deflate.push(t,r)}),this.stream.push("[")}},P={clear:()=>{N.clear()},addEvent:t=>N.addEvent(t),finish:()=>N.finish(),compress:t=>function(t){return q(K(t))}(t)};addEventListener("message",function(t){const r=t.data.method,n=t.data.id,e=t.data.arg;if(r in P&&"function"==typeof P[r])try{const t=P[r](e);postMessage({id:n,method:r,success:!0,response:t})}catch(t){postMessage({id:n,method:r,success:!1,response:t.message}),console.error(t)}}),postMessage({id:void 0,method:"init",success:!0,response:void 0});'], {
                                        type: "text/javascript"
                                    }), URL.createObjectURL(e)
                                }
                                return ""
                            }();
                            if (!t) return;
                            mO && mF.log(`Using compression worker${e?` from ${e}`:""}`);
                            let n = new Worker(t);
                            return new mz(n)
                        } catch (e) {
                            mO && mF.exception(e, "Failed to create compression worker")
                        }
                    }(n);
                    if (e) return e
                }
                return mO && mF.log("Using simple buffer"), new mj
            }({
                useCompression: this._options.useCompression,
                workerUrl: this._options.workerUrl
            }), this._removeListeners(), this._addListeners(), this._isEnabled = !0, this._isPaused = !1, this.session) {
            var e;
            null == (e = tA()) || e.emit("replayStart", {
                sessionId: this.session.id,
                recordingMode: this.recordingMode
            })
        }
        this.startRecording(), "session" === this.recordingMode && this.session && m8(this.session.id)
    }
    _initializeSessionForSampling(e) {
        let t = this._options.errorSampleRate > 0,
            n = mQ({
                sessionIdleExpire: this.timeouts.sessionIdleExpire,
                maxReplayDuration: this._options.maxReplayDuration,
                previousSessionId: e
            }, {
                stickySession: this._options.stickySession,
                sessionSampleRate: this._options.sessionSampleRate,
                allowBuffering: t
            });
        this.session = n
    }
    _checkSession() {
        if (!this.session) return !1;
        let e = this.session;
        return !mX(e, {
            sessionIdleExpire: this.timeouts.sessionIdleExpire,
            maxReplayDuration: this._options.maxReplayDuration
        }) || (this._refreshSession(e), !1)
    }
    async _refreshSession(e) {
        this._isEnabled && (await this.stop({
            reason: "sessionExpired"
        }), this.initializeSampling(e.id))
    }
    _addListeners() {
        try {
            ei.document.addEventListener("visibilitychange", this._handleVisibilityChange), ei.addEventListener("blur", this._handleWindowBlur), ei.addEventListener("focus", this._handleWindowFocus), ei.addEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.addListeners(), this._hasInitializedCoreListeners || (! function(e) {
                let t, n = tA();
                au(t => {
                    var n, r;
                    if (!e.isEnabled()) return;
                    let i = function(e) {
                        let {
                            target: t,
                            message: n
                        } = function(e) {
                            let t, n = "click" === e.name,
                                r = null;
                            try {
                                r = n ? mm(e.event) : mg(e.event), t = ay(r, {
                                    maxStringLength: 200
                                }) || "<unknown>"
                            } catch {
                                t = "<unknown>"
                            }
                            return {
                                target: r,
                                message: t
                            }
                        }(e);
                        return mS({
                            category: `ui.${e.name}`,
                            ...mT(t, n)
                        })
                    }(t);
                    if (!i) return;
                    let o = "click" === t.name,
                        a = o ? t.event : void 0;
                    o && e.clickDetector && (null == a ? void 0 : a.target) && !a.altKey && !a.metaKey && !a.ctrlKey && !a.shiftKey && (n = e.clickDetector, r = mm(t.event), n.handleClick(i, r)), mf(e, i)
                }), am(t => {
                    if (!e.isEnabled()) return;
                    let n = function(e) {
                        let {
                            from: t,
                            to: n
                        } = e, r = Date.now() / 1e3;
                        return {
                            type: "navigation.push",
                            start: r,
                            end: r,
                            name: n,
                            data: {
                                previous: t
                            }
                        }
                    }(t);
                    null !== n && (e.getContext().urls.push(n.name), e.triggerUserActivity(), e.addUpdate(() => (m7(e, [n]), !1)))
                }), (t = tA()) && t.on("beforeAddBreadcrumb", t => (function(e, t) {
                    var n;
                    if (!e.isEnabled() || !m4(t)) return;
                    let r = !m4(n = t) || ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(n.category) || n.category.startsWith("ui.") ? null : "console" === n.category ? function(e) {
                        var t;
                        let n = null == (t = e.data) ? void 0 : t.arguments;
                        if (!Array.isArray(n) || 0 === n.length) return mS(e);
                        let r = !1,
                            i = n.map(e => {
                                if (!e) return e;
                                if ("string" == typeof e) return e.length > 5e3 ? (r = !0, `${e.slice(0,5e3)}…`) : e;
                                if ("object" == typeof e) try {
                                    let t = eJ(e, 7);
                                    if (JSON.stringify(t).length > 5e3) return r = !0, `${JSON.stringify(t,null,2).slice(0,5e3)}…`;
                                    return t
                                } catch {}
                                return e
                            });
                        return mS({ ...e,
                            data: { ...e.data,
                                arguments: i,
                                ...r ? {
                                    _meta: {
                                        warnings: ["CONSOLE_ARG_TRUNCATED"]
                                    }
                                } : {}
                            }
                        })
                    }(n) : mS(n);
                    r && mf(e, r)
                })(e, t));
                let r = tA();
                try {
                    let {
                        networkDetailAllowUrls: t,
                        networkDetailDenyUrls: n,
                        networkCaptureBodies: i,
                        networkRequestHeaders: o,
                        networkResponseHeaders: a
                    } = e.getOptions(), s = {
                        replay: e,
                        networkDetailAllowUrls: t,
                        networkDetailDenyUrls: n,
                        networkCaptureBodies: i,
                        networkRequestHeaders: o,
                        networkResponseHeaders: a
                    };
                    r && r.on("beforeAddBreadcrumb", (e, t) => (function(e, t, n) {
                        if (t.data) try {
                            var r, i, o, a;
                            r = t, "xhr" === r.category && (i = n, null == i ? void 0 : i.xhr) && (! function(e, t) {
                                let {
                                    xhr: n,
                                    input: r
                                } = t;
                                if (!n) return;
                                let i = ge(r),
                                    o = n.getResponseHeader("content-length") ? gt(n.getResponseHeader("content-length")) : function(e, t) {
                                        try {
                                            let n = "json" === t && eI(e) ? JSON.stringify(e) : e;
                                            return ge(n)
                                        } catch {
                                            return
                                        }
                                    }(n.response, n.responseType);
                                void 0 !== i && (e.data.request_body_size = i), void 0 !== o && (e.data.response_body_size = o)
                            }(t, n), gm(t, n, e)), o = t, "fetch" === o.category && (a = n, (null == a ? void 0 : a.input) !== void 0) && (! function(e, t) {
                                let {
                                    input: n,
                                    response: r
                                } = t, i = ge(n ? cc(n) : void 0), o = r ? gt(r.headers.get("content-length")) : void 0;
                                void 0 !== i && (e.data.request_body_size = i), void 0 !== o && (e.data.response_body_size = o)
                            }(t, n), gl(t, n, e))
                        } catch (e) {
                            mO && mF.exception(e, "Error when enriching network breadcrumb")
                        }
                    })(s, e, t))
                } catch {}
                if (rQ(Object.assign((t, n) => {
                        var r, i, o, a;
                        if (e.session && mX(e.session, {
                                maxReplayDuration: e.getOptions().maxReplayDuration,
                                sessionIdleExpire: e.timeouts.sessionIdleExpire
                            }) && m6(), !e.isEnabled() || e.isPaused()) return t;
                        if ("replay_event" === t.type) return delete t.breadcrumbs, t;
                        if (t.type && !m3(t) && !m5(t)) return t;
                        if (!e.checkAndHandleExpiredSession()) return m6(), t;
                        if (m5(t)) {
                            let n = e.getSessionId(),
                                r = t.contexts.feedback.replay_id;
                            return r && r !== n ? t : (e.flush(), t.contexts.feedback.replay_id = n, e.triggerUserActivity(), e.addUpdate(() => !t.timestamp || (e.throttledAddEvent({
                                type: hD.Custom,
                                timestamp: 1e3 * t.timestamp,
                                data: {
                                    tag: "breadcrumb",
                                    payload: {
                                        timestamp: t.timestamp,
                                        type: "default",
                                        category: "sentry.feedback",
                                        data: {
                                            feedbackId: t.event_id
                                        }
                                    }
                                }
                            }), !1)), t)
                        }
                        if (!t.type && (null == (o = t.exception) || null == (i = o.values) ? void 0 : i.length) && null != (a = n.originalException) && a.__rrweb__ && !e.getOptions()._experiments.captureExceptions) return mO && mF.log("Ignoring error from rrweb internals", t), null;
                        let s = "buffer" === e.recordingMode && t.message !== fO && !!t.exception && !t.type && mG(e.getOptions().errorSampleRate);
                        if ((s || "session" === e.recordingMode) && (t.tags = { ...t.tags,
                                replayId: e.getSessionId()
                            }), s && "buffer" === e.recordingMode && (null == (r = e.session) ? void 0 : r.sampled) === "buffer") {
                            let t = e.session;
                            t.dirty = !0, e.getOptions().stickySession && mV(t)
                        }
                        return t
                    }, {
                        id: "Replay"
                    })), n) {
                    let t;
                    n.on("beforeSendEvent", t => {
                        var n, r, i, o;
                        let a;
                        e.isEnabled() && !t.type && (n = e, "string" == typeof(a = null == (o = t.exception) || null == (i = o.values) || null == (r = i[0]) ? void 0 : r.value) && (a.match(/(reactjs\.org\/docs\/error-decoder\.html\?invariant=|react\.dev\/errors\/)(418|419|422|423|425)/) || a.match(/(does not match server-rendered HTML|Hydration failed because)/i)) && mf(n, mS({
                            category: "replay.hydrate-error",
                            data: {
                                url: oL()
                            }
                        })))
                    }), n.on("afterSendEvent", (t, n) => {
                        if (!e.isEnabled() || t.type && !m3(t)) return;
                        let r = n.statusCode;
                        if (r && !(r < 200) && !(r >= 300)) {
                            if (m3(t)) {
                                var i, o, a;
                                return void m2(e, null == (a = (i = t).contexts) || null == (o = a.trace) ? void 0 : o.trace_id, i.transaction)
                            }! function(e, t) {
                                var n;
                                let r = e.getContext();
                                if (t.event_id && r.errorIds.size < 100 && r.errorIds.add(t.event_id), "buffer" !== e.recordingMode || !(null == (n = t.tags) ? void 0 : n.replayId)) return;
                                let {
                                    beforeErrorSampling: i
                                } = e.getOptions();
                                ("function" != typeof i || i(t)) && sh(async () => {
                                    try {
                                        await e.sendBufferedReplayOrFlush()
                                    } catch (t) {
                                        e.handleException(t)
                                    }
                                })
                            }(e, t)
                        }
                    }), n.on("createDsc", t => {
                        let n = e.getSessionId();
                        n && e.isEnabled() && "session" === e.recordingMode && e.checkAndHandleExpiredSession() && (t.replay_id = n)
                    }), n.on("processSegmentSpan", t => {
                        e.isEnabled() && m2(e, t.trace_id, t.name || void 0)
                    }), n.on("spanStart", t => {
                        e.lastActiveSpan = t
                    }), n.on("spanEnd", t => {
                        e.lastActiveSpan = t
                    }), n.on("beforeSendFeedback", async (n, r) => {
                        var i;
                        let o = null == (i = n.contexts) ? void 0 : i.feedback;
                        if (!(null == r ? void 0 : r.includeReplay) || !o) return;
                        if ("widget" === o.source && t) {
                            o.replay_id = t, t = void 0;
                            return
                        }
                        let a = e.getSessionId();
                        e.isEnabled() && a && ("api" === o.source && await e.sendBufferedReplayOrFlush(), o.replay_id = a)
                    }), n.on("openFeedbackWidget", async () => {
                        t = void 0, await e.sendBufferedReplayOrFlush(), t = e.isEnabled() ? e.getSessionId() : void 0
                    })
                }
            }(this), this._hasInitializedCoreListeners = !0)
        } catch (e) {
            this.handleException(e)
        }
        this._performanceCleanupCallback = function(e) {
            function t(t) {
                e.performanceEntries.includes(t) || e.performanceEntries.push(t)
            }

            function n(e) {
                let {
                    entries: n
                } = e;
                n.forEach(t)
            }
            let r = [];
            return ["navigation", "paint", "resource"].forEach(e => {
                r.push(uv(e, n))
            }), r.push(um(mR(mA, e)), uh(mR(mM, e)), ug(mR(mP, e))), () => {
                r.forEach(e => e())
            }
        }(this)
    }
    _removeListeners() {
        try {
            ei.document.removeEventListener("visibilitychange", this._handleVisibilityChange), ei.removeEventListener("blur", this._handleWindowBlur), ei.removeEventListener("focus", this._handleWindowFocus), ei.removeEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.removeListeners(), this._performanceCleanupCallback && this._performanceCleanupCallback()
        } catch (e) {
            this.handleException(e)
        }
    }
    _doChangeToBackgroundTasks(e) {
        this.session && (mX(this.session, {
            maxReplayDuration: this._options.maxReplayDuration,
            sessionIdleExpire: this.timeouts.sessionIdleExpire
        }) ? m6() : (e && this._createCustomBreadcrumb(e), this.conditionalFlush()))
    }
    _doChangeToForegroundTasks(e) {
        if (this.session) {
            if (!this.checkAndHandleExpiredSession()) {
                mO && mF.log("Document has become active, but session has expired");
                return
            }
            e && this._createCustomBreadcrumb(e)
        }
    }
    _updateUserActivity() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
        this._lastActivity = e
    }
    _updateSessionActivity() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
        this.session && (this.session.lastActivity = e, this._maybeSaveSession())
    }
    _createCustomBreadcrumb(e) {
        this.addUpdate(() => {
            this.throttledAddEvent({
                type: hD.Custom,
                timestamp: e.timestamp || 0,
                data: {
                    tag: "breadcrumb",
                    payload: e
                }
            })
        })
    }
    _addPerformanceEntries() {
        let e = this.performanceEntries.map(mx).filter(Boolean).concat(this.replayPerformanceEntries);
        if (this.performanceEntries = [], this.replayPerformanceEntries = [], this._requiresManualStart) {
            let t = this._context.initialTimestamp / 1e3;
            e = e.filter(e => e.start >= t)
        }
        return Promise.all(m7(this, e))
    }
    _clearContext() {
        this._context.errorIds.clear(), this._context.traceIds.clear(), this._context.segmentNames.clear(), this._context.urls = []
    }
    _updateInitialTimestampFromEventBuffer() {
        let {
            session: e,
            eventBuffer: t
        } = this;
        if (!e || !t || this._requiresManualStart || e.segmentId) return;
        let n = t.getEarliestTimestamp();
        n && n < this._context.initialTimestamp && (this._context.initialTimestamp = n)
    }
    _popEventContext() {
        let e = {
            initialTimestamp: this._context.initialTimestamp,
            initialUrl: this._context.initialUrl,
            errorIds: Array.from(this._context.errorIds),
            traceIds: Array.from(this._context.traceIds),
            segmentNames: Array.from(this._context.segmentNames),
            urls: this._context.urls
        };
        return this._clearContext(), e
    }
    async _runFlush() {
        var e;
        let t = this.getSessionId();
        if (!this.session || !this.eventBuffer || !t) {
            mO && mF.error("No session or eventBuffer found to flush.");
            return
        }
        if (await this._addPerformanceEntries(), null == (e = this.eventBuffer) ? void 0 : e.hasEvents) {
            if ((await gg(this), this.eventBuffer) && t === this.getSessionId()) try {
                this._updateInitialTimestampFromEventBuffer();
                let e = Date.now();
                if (e - this._context.initialTimestamp > this._options.maxReplayDuration + 3e4) throw new gw;
                let n = this._popEventContext(),
                    r = this.session.segmentId++;
                this._maybeSaveSession();
                let i = await this.eventBuffer.finish();
                await gE({
                    replayId: t,
                    recordingData: i,
                    segmentId: r,
                    eventContext: n,
                    session: this.session,
                    timestamp: e,
                    onError: e => this.handleException(e)
                })
            } catch (t) {
                this.handleException(t), this.stop({
                    reason: "sendError"
                });
                let e = tA();
                e && e.recordDroppedEvent(t instanceof gS ? "ratelimit_backoff" : t instanceof gw ? "invalid" : "send_error", "replay")
            }
        }
    }
    async _flush() {
        let {
            force: e = !1
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!this._isEnabled && !e) return;
        if (!this.checkAndHandleExpiredSession()) {
            mO && mF.error("Attempting to finish replay event after session expired.");
            return
        }
        if (!this.session) return;
        let t = this.session.started,
            n = Date.now() - t;
        this._debouncedFlush.cancel();
        let r = n < this._options.minReplayDuration,
            i = n > this._options.maxReplayDuration + 5e3;
        if (r || i) {
            mO && mF.log(`Session duration (${Math.floor(n/1e3)}s) is too ${r?"short":"long"}, not sending replay.`), r && this._debouncedFlush();
            return
        }
        let o = this.eventBuffer;
        o && 0 === this.session.segmentId && !o.hasCheckout && mO && mF.log("Flushing initial segment without checkout.");
        let a = !!this._flushLock;
        this._flushLock || (this._flushLock = this._runFlush());
        try {
            await this._flushLock
        } catch (e) {
            this.handleException(e)
        } finally {
            this._flushLock = void 0, a && this._debouncedFlush()
        }
    }
    _maybeSaveSession() {
        this.session && this._options.stickySession && mV(this.session)
    }
    _onMutationHandler(e) {
        let {
            ignoreMutations: t
        } = this._options._experiments;
        if ((null == t ? void 0 : t.length) && e.some(e => {
                let n = function(e) {
                        if (!e) return null;
                        try {
                            return e.nodeType === e.ELEMENT_NODE ? e : e.parentElement
                        } catch {
                            return null
                        }
                    }(e.target),
                    r = t.join(",");
                return null == n ? void 0 : n.matches(r)
            })) return !1;
        let n = e.length,
            r = this._options.mutationLimit,
            i = this._options.mutationBreadcrumbLimit,
            o = r && n > r;
        if (n > i || o) {
            let e = mS({
                category: "replay.mutations",
                data: {
                    count: n,
                    limit: o
                }
            });
            this._createCustomBreadcrumb(e)
        }
        return !o || (this.stop({
            reason: "mutationLimit",
            forceFlush: "session" === this.recordingMode
        }), !1)
    }
    constructor({
        options: e,
        recordingOptions: t
    }) {
        var n;
        let r, i;
        this.eventBuffer = null, this.performanceEntries = [], this.replayPerformanceEntries = [], this.recordingMode = "session", this.timeouts = {
            sessionIdlePause: 3e5,
            sessionIdleExpire: 9e5
        }, this._lastActivity = Date.now(), this._isEnabled = !1, this._isPaused = !1, this._requiresManualStart = !1, this._hasInitializedCoreListeners = !1, this._context = {
            errorIds: new Set,
            traceIds: new Set,
            segmentNames: new Set,
            urls: [],
            initialTimestamp: Date.now(),
            initialUrl: ""
        }, this._recordingOptions = t, this._options = e, this._debouncedFlush = function(e, t, n) {
            let r, i, o, a = (null == n ? void 0 : n.maxWait) ? Math.max(n.maxWait, t) : 0,
                s = (null == n ? void 0 : n.setTimeoutImpl) || setTimeout;

            function l() {
                return u(), r = e()
            }

            function u() {
                void 0 !== i && clearTimeout(i), void 0 !== o && clearTimeout(o), i = o = void 0
            }

            function c() {
                return i && clearTimeout(i), i = s(l, t), a && void 0 === o && (o = s(l, a)), r
            }
            return c.cancel = u, c.flush = function() {
                return void 0 !== i || void 0 !== o ? l() : r
            }, c
        }(() => this._flush(), this._options.flushMinDelay, { ...{
                maxWait: this._options.flushMaxDelay
            },
            setTimeoutImpl: sh
        }), this._throttledAddEvent = (n = (e, t) => m1(this, e) ? m0(this, e, t) : Promise.resolve(null), r = new Map, i = !1, function() {
            let e;
            for (var t = arguments.length, o = Array(t), a = 0; a < t; a++) o[a] = arguments[a];
            let s = Math.floor(Date.now() / 1e3);
            if (e = s - 5, r.forEach((t, n) => {
                    n < e && r.delete(n)
                }), [...r.values()].reduce((e, t) => e + t, 0) >= 300) {
                let e = i;
                return i = !0, e ? "__SKIPPED" : gk
            }
            i = !1;
            let l = r.get(s) || 0;
            return r.set(s, l + 1), n(...o)
        });
        let {
            slowClickTimeout: o,
            slowClickIgnoreSelectors: a
        } = this.getOptions(), s = o ? {
            threshold: Math.min(3e3, o),
            timeout: o,
            scrollTimeout: 300,
            ignoreSelector: a ? a.join(",") : ""
        } : void 0;
        if (s && (this.clickDetector = new m_(this, s)), mO) {
            let t = e._experiments;
            mF.setConfig({
                captureExceptions: !!t.captureExceptions,
                traceInternals: !!t.traceInternals
            })
        }
        this._handleVisibilityChange = () => {
            "visible" === ei.document.visibilityState ? this._doChangeToForegroundTasks() : this._doChangeToBackgroundTasks()
        }, this._handleWindowBlur = () => {
            let e = mS({
                category: "ui.blur"
            });
            this._doChangeToBackgroundTasks(e)
        }, this._handleWindowFocus = () => {
            let e = mS({
                category: "ui.focus"
            });
            this._doChangeToForegroundTasks(e)
        }, this._handleKeyboardEvent = e => {
            ! function(e, t) {
                if (!e.isEnabled()) return;
                e.updateUserActivity();
                let n = function(e) {
                    var t;
                    let {
                        metaKey: n,
                        shiftKey: r,
                        ctrlKey: i,
                        altKey: o,
                        key: a,
                        target: s
                    } = e;
                    if (!s || "INPUT" === (t = s).tagName || "TEXTAREA" === t.tagName || t.isContentEditable || !a) return null;
                    let l = n || i || o,
                        u = 1 === a.length;
                    if (!l && u) return null;
                    let c = ay(s, {
                            maxStringLength: 200
                        }) || "<unknown>",
                        d = mT(s, c);
                    return mS({
                        category: "ui.keyDown",
                        message: c,
                        data: { ...d.data,
                            metaKey: n,
                            shiftKey: r,
                            ctrlKey: i,
                            altKey: o,
                            key: a
                        }
                    })
                }(t);
                n && mf(e, n)
            }(this, e)
        }
    }
}

function gI(e, t) {
    return [...e, ...t].join(",")
}
let gR = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
    gx = ["content-length", "content-type", "accept"],
    gC = Symbol.for("sentry__originalRequestBody"),
    gA = !1,
    gM = !1,
    gP = e => new gN(e);
class gN {
    get _isInitialized() {
        return gA
    }
    set _isInitialized(e) {
        gA = e
    }
    afterAllSetup(e) {
        ix() && !this._replay && (this._initialOptions.attachRawBodyFromRequest && function() {
            if ("u" < typeof Request || gM) return;
            let e = Request;
            try {
                let t = function(t, n) {
                    let r = new e(t, n);
                    return (null == n ? void 0 : n.body) != null && (r[gC] = n.body), r
                };
                t.prototype = e.prototype, ei.Request = t, gM = !0
            } catch {}
        }(), this._setup(e), this._initialize(e))
    }
    start() {
        this._replay && this._replay.start()
    }
    startBuffering() {
        this._replay && this._replay.startBuffering()
    }
    stop(e) {
        return this._replay ? this._replay.stop({
            forceFlush: (null == e ? void 0 : e.flush) ?? "session" === this._replay.recordingMode,
            reason: "manual"
        }) : Promise.resolve()
    }
    flush(e) {
        return this._replay ? this._replay.isEnabled() ? this._replay.sendBufferedReplayOrFlush(e) : (this._replay.start(), Promise.resolve()) : Promise.resolve()
    }
    getReplayId(e) {
        var t;
        if (null == (t = this._replay) ? void 0 : t.isEnabled()) return this._replay.getSessionId(e)
    }
    getRecordingMode() {
        var e;
        if (null == (e = this._replay) ? void 0 : e.isEnabled()) return this._replay.recordingMode
    }
    processSpan(e) {
        let t = this.getReplayId(!0);
        t && (a$(e, {
            "sentry.replay_id": t
        }), "buffer" === this.getRecordingMode() && a$(e, {
            "sentry._internal.replay_is_buffering": !0
        }))
    }
    _initialize(e) {
        this._replay && (this._maybeLoadFromReplayCanvasIntegration(e), this._replay.initializeSampling())
    }
    _setup(e) {
        var t;
        let n, r, i, o, a = (t = this._initialOptions, n = e.getOptions(), r = {
            sessionSampleRate: 0,
            errorSampleRate: 0,
            ...t
        }, i = nV(n.replaysSessionSampleRate), o = nV(n.replaysOnErrorSampleRate), null == i && null == o && ed(() => {
            console.warn("Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.")
        }), null != i && (r.sessionSampleRate = i), null != o && (r.errorSampleRate = o), r);
        this._replay = new gT({
            options: a,
            recordingOptions: this._recordingOptions
        })
    }
    _maybeLoadFromReplayCanvasIntegration(e) {
        try {
            let t = e.getIntegrationByName("ReplayCanvas");
            if (!t) return;
            this._replay._canvas = t.getOptions()
        } catch {}
    }
    constructor({
        flushMinDelay: e = 5e3,
        flushMaxDelay: t = 5500,
        minReplayDuration: n = 4999,
        maxReplayDuration: r = 36e5,
        stickySession: i = !0,
        useCompression: o = !0,
        workerUrl: a,
        _experiments: s = {},
        maskAllText: l = !0,
        maskAllInputs: u = !0,
        blockAllMedia: c = !0,
        mutationBreadcrumbLimit: d = 750,
        mutationLimit: p = 1e4,
        slowClickTimeout: f = 7e3,
        slowClickIgnoreSelectors: h = [],
        networkDetailAllowUrls: m = [],
        networkDetailDenyUrls: g = [],
        networkCaptureBodies: v = !0,
        networkRequestHeaders: _ = [],
        networkResponseHeaders: y = [],
        mask: b = [],
        maskAttributes: S = ["title", "placeholder", "aria-label"],
        unmask: w = [],
        block: E = [],
        unblock: k = [],
        ignore: T = [],
        maskFn: I,
        beforeAddRecordingEvent: R,
        beforeErrorSampling: x,
        onError: C,
        attachRawBodyFromRequest: A = !1
    } = {}) {
        this.name = "Replay";
        let M = function(e) {
            let {
                mask: t,
                unmask: n,
                block: r,
                unblock: i,
                ignore: o
            } = e;
            return {
                maskTextSelector: gI(t, [".sentry-mask", "[data-sentry-mask]"]),
                unmaskTextSelector: gI(n, []),
                blockSelector: gI(r, [".sentry-block", "[data-sentry-block]", "base", "iframe[srcdoc]:not([src])"]),
                unblockSelector: gI(i, []),
                ignoreSelector: gI(o, [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]'])
            }
        }({
            mask: b,
            unmask: w,
            block: E,
            unblock: k,
            ignore: T
        });
        if (this._recordingOptions = {
                maskAllInputs: u,
                maskAllText: l,
                maskInputOptions: {
                    password: !0
                },
                maskTextFn: I,
                maskInputFn: I,
                maskAttributeFn: (e, t, n) => (function(e) {
                    let {
                        el: t,
                        key: n,
                        maskAttributes: r,
                        maskAllText: i,
                        privacyOptions: o,
                        value: a
                    } = e;
                    if (o.unmaskTextSelector && t.matches(o.unmaskTextSelector)) return a;
                    let s = r.includes(n),
                        l = i && "value" === n && "INPUT" === t.tagName && ["submit", "button"].includes(t.getAttribute("type") || "");
                    return s || l ? a.replace(/[\S]/g, "*") : a
                })({
                    maskAttributes: S,
                    maskAllText: l,
                    privacyOptions: M,
                    key: e,
                    value: t,
                    el: n
                }),
                ...M,
                slimDOMOptions: "all",
                inlineStylesheet: !0,
                inlineImages: !1,
                collectFonts: !0,
                errorHandler: e => {
                    try {
                        e.__rrweb__ = !0
                    } catch {}
                },
                recordCrossOriginIframes: !!s.recordCrossOriginIframes
            }, this._initialOptions = {
                flushMinDelay: e,
                flushMaxDelay: t,
                minReplayDuration: Math.min(n, 5e4),
                maxReplayDuration: Math.min(r, 36e5),
                stickySession: i,
                useCompression: o,
                workerUrl: a,
                blockAllMedia: c,
                maskAllInputs: u,
                maskAllText: l,
                mutationBreadcrumbLimit: d,
                mutationLimit: p,
                slowClickTimeout: f,
                slowClickIgnoreSelectors: h,
                networkDetailAllowUrls: m,
                networkDetailDenyUrls: g,
                networkCaptureBodies: v,
                networkRequestHeaders: gO(_),
                networkResponseHeaders: gO(y),
                beforeAddRecordingEvent: R,
                beforeErrorSampling: x,
                onError: C,
                attachRawBodyFromRequest: A,
                _experiments: s
            }, this._initialOptions.blockAllMedia && (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector ? `${this._recordingOptions.blockSelector},${gR}` : gR, this._recordingOptions.ignoreCSSAttributes = new Set(["background-image"])), this._isInitialized && ix()) throw Error("Multiple Sentry Session Replay instances are not supported");
        this._isInitialized = !0
    }
}

function gO(e) {
    return [...gx, ...e.map(e => e.toLowerCase())]
}

function gD() {
    let e = tA();
    return null == e ? void 0 : e.getIntegrationByName("Replay")
}
var gL = Object.defineProperty,
    g$ = (e, t, n) => {
        let r;
        return (r = "symbol" != typeof t ? t + "" : t) in e ? gL(e, r, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[r] = n
    };

function gF(e, t) {
    let n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
    return e ? (null == (n = null == e ? void 0 : e.host) ? void 0 : n.shadowRoot) === e ? gF(e.host, t, r, i + 1) : e.nodeType !== e.ELEMENT_NODE || i > r ? -1 : t(e) ? i : gF(e.parentNode, t, r, i + 1) : -1
}

function gU(e, t) {
    return n => {
        if (null === n) return !1;
        try {
            if (e) {
                if ("string" == typeof e) {
                    if (n.matches(`.${e}`)) return !0
                } else if (function(e, t) {
                        for (let n = e.classList.length; n--;) {
                            let r = e.classList[n];
                            if (t.test(r)) return !0
                        }
                        return !1
                    }(n, e)) return !0
            }
            if (t && n.matches(t)) return !0;
            return !1
        } catch {
            return !1
        }
    }
}
let gB = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
    gj = {
        map: {},
        getId: () => (console.error(gB), -1),
        getNode: () => (console.error(gB), null),
        removeNodeFromMap() {
            console.error(gB)
        },
        has: () => (console.error(gB), !1),
        reset() {
            console.error(gB)
        }
    };

function gW(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window,
        o = i.Object.getOwnPropertyDescriptor(e, t);
    return i.Object.defineProperty(e, t, r ? n : {
        set(e) {
            gY(() => {
                n.set.call(this, e)
            }, 0), o && o.set && o.set.call(this, e)
        }
    }), () => gW(e, t, o || {}, !0)
}

function gH(e, t, n) {
    try {
        if (!(t in e)) return () => {};
        let r = e[t],
            i = n(r);
        return "function" == typeof i && (i.prototype = i.prototype || {}, Object.defineProperties(i, {
            __rrweb_original__: {
                enumerable: !1,
                value: r
            }
        })), e[t] = i, () => {
            e[t] = r
        }
    } catch {
        return () => {}
    }
}

function gz(e, t, n, r, i) {
    if (!e) return !1;
    let o = function(e) {
        if (!e) return null;
        try {
            return e.nodeType === e.ELEMENT_NODE ? e : e.parentElement
        } catch (e) {
            return null
        }
    }(e);
    if (!o) return !1;
    let a = gU(t, n);
    if (!i) {
        let e = r && o.matches(r);
        return a(o) && !e
    }
    let s = gF(o, a),
        l = -1;
    return !(s < 0) && (r && (l = gF(o, gU(null, r))), s > -1 && l < 0 || s < l)
}
"u" > typeof window && window.Proxy && window.Reflect && (gj = new Proxy(gj, {
    get: (e, t, n) => ("map" === t && console.error(gB), Reflect.get(e, t, n))
})), Date.now().toString();
let gq = {};

function gG(e) {
    let t = gq[e];
    if (t) return t;
    let n = window[e].bind(window),
        r = n,
        i = window.document;
    if (i && "function" == typeof i.createElement) try {
        let t = i.createElement("iframe");
        t.hidden = !0, i.head.appendChild(t);
        let o = t.contentWindow;
        if (o && o[e]) {
            let t = o[e].bind(window);
            r = function() {
                for (var r = arguments.length, i = Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                try {
                    return t(...i)
                } catch {
                    return gq[e] = n, n(...i)
                }
            }
        }
        i.head.removeChild(t)
    } catch (e) {}
    return gq[e] = r
}

function gV() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return gG("requestAnimationFrame")(...t)
}

function gY() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return gG("setTimeout")(...t)
}
var gK = ((K = gK || {})[K["2D"] = 0] = "2D", K[K.WebGL = 1] = "WebGL", K[K.WebGL2 = 2] = "WebGL2", K);
let gJ = e => D ? function() {
    for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    try {
        return e(...n)
    } catch (e) {
        if (D && !0 === D(e)) return () => {};
        throw e
    }
} : e;
for (var gX = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", gQ = "u" < typeof Uint8Array ? [] : new Uint8Array(256), gZ = 0; gZ < gX.length; gZ++) gQ[gX.charCodeAt(gZ)] = gZ;
var g0 = function(e) {
    var t, n = new Uint8Array(e),
        r = n.length,
        i = "";
    for (t = 0; t < r; t += 3) i += gX[n[t] >> 2], i += gX[(3 & n[t]) << 4 | n[t + 1] >> 4], i += gX[(15 & n[t + 1]) << 2 | n[t + 2] >> 6], i += gX[63 & n[t + 2]];
    return r % 3 == 2 ? i = i.substring(0, i.length - 1) + "=" : r % 3 == 1 && (i = i.substring(0, i.length - 2) + "=="), i
};
let g1 = new Map,
    g2 = (e, t, n) => {
        let r;
        if (!e || !(g5(e, t) || "object" == typeof e)) return;
        let i = e.constructor.name,
            o = ((r = g1.get(n)) || (r = new Map, g1.set(n, r)), r.has(i) || r.set(i, []), r.get(i)),
            a = o.indexOf(e);
        return -1 === a && (a = o.length, o.push(e)), a
    },
    g3 = (e, t, n) => e.map(e => (function e(t, n, r) {
        if (t instanceof Array) return t.map(t => e(t, n, r));
        if (null === t);
        else if (t instanceof Float32Array || t instanceof Float64Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Uint8Array || t instanceof Uint16Array || t instanceof Int16Array || t instanceof Int8Array || t instanceof Uint8ClampedArray) return {
            rr_type: t.constructor.name,
            args: [Object.values(t)]
        };
        else if (t instanceof ArrayBuffer) return {
            rr_type: t.constructor.name,
            base64: g0(t)
        };
        else if (t instanceof DataView) return {
            rr_type: t.constructor.name,
            args: [e(t.buffer, n, r), t.byteOffset, t.byteLength]
        };
        else if (t instanceof HTMLImageElement) {
            let e = t.constructor.name,
                {
                    src: n
                } = t;
            return {
                rr_type: e,
                src: n
            }
        } else if (t instanceof HTMLCanvasElement) return {
            rr_type: "HTMLImageElement",
            src: t.toDataURL()
        };
        else if (t instanceof ImageData) return {
            rr_type: t.constructor.name,
            args: [e(t.data, n, r), t.width, t.height]
        };
        else if (g5(t, n) || "object" == typeof t) return {
            rr_type: t.constructor.name,
            index: g2(t, n, r)
        };
        return t
    })(e, t, n)),
    g5 = (e, t) => !!["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter(e => "function" == typeof t[e]).find(n => e instanceof t[n]);

function g4(e, t, n, r, i) {
    let o = [];
    try {
        let a = gH(e.HTMLCanvasElement.prototype, "getContext", function(e) {
            return function(o) {
                for (var a = arguments.length, s = Array(a > 1 ? a - 1 : 0), l = 1; l < a; l++) s[l - 1] = arguments[l];
                if (!gz(this, t, n, r, !0)) {
                    let e = "experimental-webgl" === o ? "webgl" : o;
                    if ("__context" in this || (this.__context = e), i && ["webgl", "webgl2"].includes(e))
                        if (s[0] && "object" == typeof s[0]) {
                            let e = s[0];
                            e.preserveDrawingBuffer || (e.preserveDrawingBuffer = !0)
                        } else s.splice(0, 1, {
                            preserveDrawingBuffer: !0
                        })
                }
                return e.apply(this, [o, ...s])
            }
        });
        o.push(a)
    } catch {
        console.error("failed to patch HTMLCanvasElement.prototype.getContext")
    }
    return () => {
        o.forEach(e => e())
    }
}

function g6(e, t, n, r, i, o, a, s) {
    let l = [];
    for (let a of Object.getOwnPropertyNames(e))
        if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(a)) try {
            if ("function" != typeof e[a]) continue;
            let u = gH(e, a, function(e) {
                return function() {
                    for (var l = arguments.length, u = Array(l), c = 0; c < l; c++) u[c] = arguments[c];
                    let d = e.apply(this, u);
                    if (g2(d, s, this), "tagName" in this.canvas && !gz(this.canvas, r, i, o, !0)) {
                        let e = {
                            type: t,
                            property: a,
                            args: g3(u, s, this)
                        };
                        n(this.canvas, e)
                    }
                    return d
                }
            });
            l.push(u)
        } catch {
            let r = gW(e, a, {
                set(e) {
                    n(this.canvas, {
                        type: t,
                        property: a,
                        args: [e],
                        setter: !0
                    })
                }
            });
            l.push(r)
        }
    return l
}
class g8 {
    reset() {
        var e;
        this.pendingCanvasMutations.clear(), this.restoreHandlers.forEach(e => {
            try {
                e()
            } catch (e) {}
        }), this.restoreHandlers = [], this.windowsSet = new WeakSet, this.windows = [], this.shadowDoms = new Set, null == (e = this.worker) || e.terminate(), this.worker = null, this.snapshotInProgressMap = new Map
    }
    freeze() {
        this.frozen = !0
    }
    unfreeze() {
        this.frozen = !1
    }
    lock() {
        this.locked = !0
    }
    unlock() {
        this.locked = !1
    }
    addWindow(e) {
        let {
            sampling: t = "all",
            blockClass: n,
            blockSelector: r,
            unblockSelector: i,
            recordCanvas: o,
            enableManualSnapshot: a
        } = this.options;
        if (!this.windowsSet.has(e)) {
            if (a) {
                this.windowsSet.add(e), this.windows.push(new WeakRef(e));
                return
            }
            gJ(() => {
                if (o && "all" === t && this.initCanvasMutationObserver(e, n, r, i), o && "number" == typeof t) {
                    let t = g4(e, n, r, i, !0);
                    this.restoreHandlers.push(() => {
                        t()
                    })
                }
            })(), this.windowsSet.add(e), this.windows.push(new WeakRef(e))
        }
    }
    addShadowRoot(e) {
        this.shadowDoms.add(new WeakRef(e))
    }
    resetShadowRoots() {
        this.shadowDoms = new Set
    }
    snapshot(e, t) {
        (null == t ? void 0 : t.skipRequestAnimationFrame) ? this.takeSnapshot(performance.now(), e): gV(t => this.takeSnapshot(t, e))
    }
    initFPSWorker() {
        let e, t = new Worker((e = new Blob(['for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t="undefined"==typeof Uint8Array?[]:new Uint8Array(256),a=0;a<64;a++)t[e.charCodeAt(a)]=a;var n=function(t){var a,n=new Uint8Array(t),r=n.length,s="";for(a=0;a<r;a+=3)s+=e[n[a]>>2],s+=e[(3&n[a])<<4|n[a+1]>>4],s+=e[(15&n[a+1])<<2|n[a+2]>>6],s+=e[63&n[a+2]];return r%3==2?s=s.substring(0,s.length-1)+"=":r%3==1&&(s=s.substring(0,s.length-2)+"=="),s};const r=new Map,s=new Map;const i=self;i.onmessage=async function(e){if(!("OffscreenCanvas"in globalThis))return i.postMessage({id:e.data.id});{const{id:t,bitmap:a,width:o,height:f,maxCanvasSize:c,dataURLOptions:g}=e.data,u=async function(e,t,a){const r=e+"-"+t;if("OffscreenCanvas"in globalThis){if(s.has(r))return s.get(r);const i=new OffscreenCanvas(e,t);i.getContext("2d");const o=await i.convertToBlob(a),f=await o.arrayBuffer(),c=n(f);return s.set(r,c),c}return""}(o,f,g),[h,d]=function(e,t,a){if(!a)return[e,t];const[n,r]=a;if(e<=n&&t<=r)return[e,t];let s=e,i=t;return s>n&&(i=Math.floor(n*t/e),s=n),i>r&&(s=Math.floor(r*e/t),i=r),[s,i]}(o,f,c),l=new OffscreenCanvas(h,d),w=l.getContext("bitmaprenderer"),p=h===o&&d===f?a:await createImageBitmap(a,{resizeWidth:h,resizeHeight:d,resizeQuality:"low"});w?.transferFromImageBitmap(p),a.close();const y=await l.convertToBlob(g),v=y.type,b=await y.arrayBuffer(),m=n(b);if(p.close(),!r.has(t)&&await u===m)return r.set(t,m),i.postMessage({id:t});if(r.get(t)===m)return i.postMessage({id:t});i.postMessage({id:t,type:v,base64:m,width:o,height:f}),r.set(t,m)}};']), URL.createObjectURL(e)));
        return t.onmessage = e => {
            let t = e.data,
                {
                    id: n
                } = t;
            if (this.snapshotInProgressMap.set(n, !1), !("base64" in t)) return;
            let {
                base64: r,
                type: i,
                width: o,
                height: a
            } = t;
            this.mutationCb({
                id: n,
                type: gK["2D"],
                commands: [{
                    property: "clearRect",
                    args: [0, 0, o, a]
                }, {
                    property: "drawImage",
                    args: [{
                        rr_type: "ImageBitmap",
                        args: [{
                            rr_type: "Blob",
                            data: [{
                                rr_type: "ArrayBuffer",
                                base64: r
                            }],
                            type: i
                        }]
                    }, 0, 0, o, a]
                }]
            })
        }, t
    }
    initCanvasFPSObserver() {
        let e;
        if (!this.windows.length && !this.shadowDoms.size) return;
        let t = n => {
            this.takeSnapshot(n), e = gV(t)
        };
        e = gV(t), this.restoreHandlers.push(() => {
            e && cancelAnimationFrame(e)
        })
    }
    initCanvasMutationObserver(e, t, n, r) {
        var i, o;
        let a, s = g4(e, t, n, r, !1),
            l = function(e, t, n, r, i) {
                let o = [];
                for (let a of Object.getOwnPropertyNames(t.CanvasRenderingContext2D.prototype)) try {
                    if ("function" != typeof t.CanvasRenderingContext2D.prototype[a]) continue;
                    let s = gH(t.CanvasRenderingContext2D.prototype, a, function(o) {
                        return function() {
                            for (var s = arguments.length, l = Array(s), u = 0; u < s; u++) l[u] = arguments[u];
                            return gz(this.canvas, n, r, i, !0) || gY(() => {
                                let n = g3(l, t, this);
                                e(this.canvas, {
                                    type: gK["2D"],
                                    property: a,
                                    args: n
                                })
                            }, 0), o.apply(this, l)
                        }
                    });
                    o.push(s)
                } catch {
                    let n = gW(t.CanvasRenderingContext2D.prototype, a, {
                        set(t) {
                            e(this.canvas, {
                                type: gK["2D"],
                                property: a,
                                args: [t],
                                setter: !0
                            })
                        }
                    });
                    o.push(n)
                }
                return () => {
                    o.forEach(e => e())
                }
            }(this.processMutation.bind(this), e, t, n, r),
            u = (i = this.processMutation.bind(this), o = this.mirror, (a = []).push(...g6(e.WebGLRenderingContext.prototype, gK.WebGL, i, t, n, r, o, e)), void 0 !== e.WebGL2RenderingContext && a.push(...g6(e.WebGL2RenderingContext.prototype, gK.WebGL2, i, t, n, r, o, e)), () => {
                a.forEach(e => e())
            });
        this.restoreHandlers.push(() => {
            s(), l(), u()
        })
    }
    getCanvasElements(e, t, n) {
        let r = [],
            i = i => {
                i.querySelectorAll("canvas").forEach(i => {
                    gz(i, e, t, n, !0) || r.push(i)
                })
            };
        for (let e of this.windows) {
            let t, n = e.deref();
            try {
                t = n && n.document
            } catch {}
            t && i(t)
        }
        for (let e of this.shadowDoms) {
            let t = e.deref();
            t && i(t)
        }
        return r
    }
    takeSnapshot(e, t) {
        let {
            sampling: n,
            blockClass: r,
            blockSelector: i,
            unblockSelector: o,
            dataURLOptions: a,
            maxCanvasSize: s
        } = this.options;
        return (!this.lastSnapshotTime || !(e - this.lastSnapshotTime < 1e3 / ("all" === n ? 2 : n || 2))) && (this.lastSnapshotTime = e, (t ? [t] : this.getCanvasElements(r, i, o)).forEach(e => {
            let t = this.mirror.getId(e);
            !this.mirror.hasNode(e) || !e.width || !e.height || this.snapshotInProgressMap.get(t) || (this.snapshotInProgressMap.set(t, !0), createImageBitmap(e).then(n => {
                var r;
                null == (r = this.worker) || r.postMessage({
                    id: t,
                    bitmap: n,
                    width: e.width,
                    height: e.height,
                    dataURLOptions: a,
                    maxCanvasSize: s
                }, [n])
            }).catch(e => {
                gJ(() => {
                    throw this.snapshotInProgressMap.delete(t), e
                })()
            }))
        }), !0)
    }
    startPendingCanvasMutationFlusher() {
        gV(() => this.flushPendingCanvasMutations())
    }
    startRAFTimestamping() {
        let e = t => {
            this.rafStamps.latestId = t, gV(e)
        };
        gV(e)
    }
    flushPendingCanvasMutations() {
        this.pendingCanvasMutations.forEach((e, t) => {
            let n = this.mirror.getId(t);
            this.flushPendingCanvasMutationFor(t, n)
        }), gV(() => this.flushPendingCanvasMutations())
    }
    flushPendingCanvasMutationFor(e, t) {
        if (this.frozen || this.locked) return;
        let n = this.pendingCanvasMutations.get(e);
        if (!n || -1 === t) return;
        let r = n.map(e => {
                let {
                    type: t,
                    ...n
                } = e;
                return n
            }),
            {
                type: i
            } = n[0];
        this.mutationCb({
            id: t,
            type: i,
            commands: r
        }), this.pendingCanvasMutations.delete(e)
    }
    constructor(e) {
        this.pendingCanvasMutations = new Map, this.rafStamps = {
            latestId: 0,
            invokeId: null
        }, this.shadowDoms = new Set, this.windowsSet = new WeakSet, this.windows = [], this.restoreHandlers = [], this.frozen = !1, this.locked = !1, this.snapshotInProgressMap = new Map, this.worker = null, this.lastSnapshotTime = 0, this.processMutation = (e, t) => {
            (this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId || !this.rafStamps.invokeId) && (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(e) || this.pendingCanvasMutations.set(e, []), this.pendingCanvasMutations.get(e).push(t)
        };
        let {
            enableManualSnapshot: t,
            sampling: n = "all",
            win: r,
            recordCanvas: i,
            errorHandler: o
        } = e;
        if (e.sampling = n, this.mutationCb = e.mutationCb, this.mirror = e.mirror, this.options = e, o && (D = o), (i && "number" == typeof n || t) && (this.worker = this.initFPSWorker()), this.addWindow(r), t) return;
        gJ(() => {
            i && "all" === n && (this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher()), i && "number" == typeof n && this.initCanvasFPSObserver()
        })()
    }
}
try {
    if (2 !== Array.from([1], e => 2 * e)[0]) {
        let e = document.createElement("iframe");
        document.body.appendChild(e), Array.from = (null == (Z = e.contentWindow) ? void 0 : Z.Array.from) || Array.from, document.body.removeChild(e)
    }
} catch (e) {
    console.debug("Unable to override Array.from", e)
}
new class e {
    getId(e) {
        var t;
        return e ? (null == (t = this.getMeta(e)) ? void 0 : t.id) ?? -1 : -1
    }
    getNode(e) {
        return this.idNodeMap.get(e) || null
    }
    getIds() {
        return Array.from(this.idNodeMap.keys())
    }
    getMeta(e) {
        return this.nodeMetaMap.get(e) || null
    }
    removeNodeFromMap(e) {
        let t = this.getId(e);
        this.idNodeMap.delete(t), e.childNodes && e.childNodes.forEach(e => this.removeNodeFromMap(e)), e.nodeType === e.ELEMENT_NODE && e.shadowRoot && this.removeNodeFromMap(e.shadowRoot)
    }
    has(e) {
        return this.idNodeMap.has(e)
    }
    hasNode(e) {
        return this.nodeMetaMap.has(e)
    }
    add(e, t) {
        let n = t.id;
        this.idNodeMap.set(n, e), this.nodeMetaMap.set(e, t)
    }
    replace(e, t) {
        let n = this.getNode(e);
        if (n) {
            let e = this.nodeMetaMap.get(n);
            e && this.nodeMetaMap.set(t, e)
        }
        this.idNodeMap.set(e, t)
    }
    reset() {
        this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
    }
    constructor() {
        g$(this, "idNodeMap", new Map), g$(this, "nodeMetaMap", new WeakMap)
    }
}, (J = ee || (ee = {}))[J.NotStarted = 0] = "NotStarted", J[J.Running = 1] = "Running", J[J.Stopped = 2] = "Stopped";
let g7 = {
        low: {
            sampling: {
                canvas: 1
            },
            dataURLOptions: {
                type: "image/webp",
                quality: .25
            }
        },
        medium: {
            sampling: {
                canvas: 2
            },
            dataURLOptions: {
                type: "image/webp",
                quality: .4
            }
        },
        high: {
            sampling: {
                canvas: 4
            },
            dataURLOptions: {
                type: "image/webp",
                quality: .5
            }
        }
    },
    g9 = function() {
        let e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            [r, i] = n.maxCanvasSize || [],
            o = {
                quality: n.quality || "medium",
                enableManualSnapshot: n.enableManualSnapshot,
                maxCanvasSize: [r ? Math.min(r, 1280) : 1280, i ? Math.min(i, 1280) : 1280]
            },
            a = new Promise(e => t = e);
        return {
            name: "ReplayCanvas",
            getOptions() {
                let {
                    quality: n,
                    enableManualSnapshot: r,
                    maxCanvasSize: i
                } = o;
                return {
                    enableManualSnapshot: r,
                    recordCanvas: !0,
                    getCanvasManager: n => {
                        let o = new g8({ ...n,
                            enableManualSnapshot: r,
                            maxCanvasSize: i,
                            errorHandler: e => {
                                try {
                                    "object" == typeof e && (e.__rrweb__ = !0)
                                } catch {}
                            }
                        });
                        return e = o, t(o), o
                    },
                    ...g7[n] || g7.medium
                }
            },
            async snapshot(t, n) {
                (e || await a).snapshot(t, n)
            }
        }
    };
var ve = p9;
let vt = () => ({
        name: "ElementTiming",
        setup() {
            uM() && ts() && uv("element", e => {
                let {
                    entries: t
                } = e;
                for (let e of t) {
                    if (!e.identifier) continue;
                    let t = e.identifier,
                        n = e.name,
                        r = e.renderTime,
                        i = e.loadTime,
                        o = {
                            "sentry.origin": "auto.ui.browser.element_timing",
                            "ui.element.identifier": t
                        };
                    n && (o["ui.element.paint_type"] = n), e.id && (o["ui.element.id"] = e.id), e.element && (o["ui.element.type"] = e.element.tagName.toLowerCase()), e.url && (o["ui.element.url"] = ok(e.url)), e.naturalWidth && (o["ui.element.width"] = e.naturalWidth), e.naturalHeight && (o["ui.element.height"] = e.naturalHeight), r > 0 && ve.distribution("ui.element.render_time", r, {
                        unit: "millisecond",
                        attributes: o
                    }), i > 0 && ve.distribution("ui.element.load_time", i, {
                        unit: "millisecond",
                        attributes: o
                    })
                }
            })
        }
    }),
    vn = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return {
            name: "Interactions",
            setup(t) {
                var n, r, i, o, a;
                let s, l;
                if (lM()) return;
                let u = {
                    name: void 0,
                    source: void 0,
                    routeId: void 0,
                    urlTemplate: void 0,
                    httpRoute: void 0,
                    urlPath: void 0,
                    urlFull: void 0
                };

                function c(e) {
                    let {
                        name: t,
                        attributes: n
                    } = n7(e);
                    u.name = t, u.source = n["sentry.source"] || n[nm], u.routeId = n[ns], u.urlTemplate = n[nE], u.httpRoute = n[na], u.urlPath = n[nS], u.urlFull = n[nb]
                }
                t.on("spanStart", e => {
                    (function(e) {
                        if (rd(e) !== e) return !1;
                        let t = n7(e).attributes[nd];
                        return "pageload" === t || "navigation" === t
                    })(e) && (s = e, c(e))
                }), t.on("spanEnd", e => {
                    e === s && (s = void 0, c(e))
                }), n = t, r = u, i = () => s, o = e, ei.document && addEventListener("click", () => {
                    if (i()) {
                        oD && em.warn(`[Tracing] Did not create ${lv} span because a pageload or navigation span is in progress.`);
                        return
                    }
                    if (l && (l.setAttribute(nc, "interactionInterrupted"), l.end(), l = void 0), !r.name) {
                        oD && em.warn(`[Tracing] Did not create ${lv} span because the latest route name is missing.`);
                        return
                    }
                    let e = iq(n),
                        t = r.routeId || r.urlTemplate || r.httpRoute,
                        a = t || "Click",
                        s = !t || r.routeId ? "custom" : "route";
                    l = lt({
                        name: e ? a : r.name,
                        attributes: {
                            [nd]: lv,
                            [nm]: e ? s : r.source || "url",
                            [np]: "auto.browser.interactions",
                            ...e && {
                                [nh]: a
                            },
                            ...r.routeId && {
                                [ns]: r.routeId
                            },
                            ...r.urlTemplate && {
                                [nE]: r.urlTemplate
                            },
                            ...r.httpRoute && {
                                [na]: r.httpRoute
                            },
                            ...r.urlPath && {
                                [nS]: r.urlPath
                            },
                            ...r.urlFull && {
                                [nb]: ok(r.urlFull)
                            }
                        }
                    }, o)
                }, {
                    capture: !0
                }), a = t, uv("event", e => {
                    let {
                        entries: t
                    } = e, n = rh();
                    if (n) {
                        for (let e of t)
                            if ("click" === e.name) {
                                let t = to(e.startTime);
                                if (!t) continue;
                                let r = uP(e.duration),
                                    i = ay(e.target),
                                    o = ab(e.target),
                                    s = {
                                        name: iq(a) ? o || lk : i,
                                        startTime: t,
                                        attributes: {
                                            [nd]: lg,
                                            [np]: "auto.browser.interactions",
                                            ...i && i !== uj && {
                                                [t9]: i
                                            }
                                        }
                                    };
                                o && (s.attributes[nv] = o), uA(n, t, t + r, s)
                            }
                    }
                })
            }
        }
    },
    vr = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return {
            name: "UserTiming",
            setup(t) {
                let n = uM();
                if (!(null == n ? void 0 : n.getEntries)) return;
                let r = 0;
                t.on("beforeIdleSpanEnd", t => {
                    var i;
                    let {
                        attributes: o,
                        start_timestamp: a
                    } = n7(t), s = o[nd];
                    if ("pageload" !== s && "navigation" !== s) return;
                    let l = (null == (i = aA(!1)) ? void 0 : i.requestStart) ?? 0,
                        u = n.getEntries();
                    for (let n of u.slice(r)) {
                        if ("mark" !== n.entryType && "measure" !== n.entryType) continue;
                        let r = to(n.startTime);
                        if (!r || "navigation" === s && a && r < a) continue;
                        let i = to(n.startTime + Math.max(0, n.duration), n.startTime),
                            o = to(l, n.startTime);
                        ! function(e, t, n, r, i, o) {
                            if (function(e) {
                                    if ("measure" === e.entryType) try {
                                        return "Components ⚛" === e.detail.devtools.track
                                    } catch {
                                        return
                                    }
                                }(t) || e2(t.name, o)) return;
                            let a = Math.max(n, i),
                                s = {
                                    [np]: `auto.browser.user_timing.${t.entryType}`
                                };
                            a !== n && (s["sentry.browser.measure_happened_before_request"] = !0, s["sentry.browser.measure_start_time"] = a),
                                function(e, t) {
                                    try {
                                        let n = t.detail;
                                        if (!n) return;
                                        if ("object" == typeof n) {
                                            for (let [t, r] of Object.entries(n))
                                                if (r && ek(r)) e[`sentry.browser.measure.detail.${t}`] = r;
                                                else if (void 0 !== r) try {
                                                e[`sentry.browser.measure.detail.${t}`] = JSON.stringify(r)
                                            } catch {}
                                            return
                                        }
                                        if (ek(n)) {
                                            e["sentry.browser.measure.detail"] = n;
                                            return
                                        }
                                        try {
                                            e["sentry.browser.measure.detail"] = JSON.stringify(n)
                                        } catch {}
                                    } catch {}
                                }(s, t), a <= r && uA(e, a, r, {
                                    name: t.name,
                                    op: t.entryType,
                                    attributes: s
                                })
                        }(t, n, r, i, o, e.ignore ?? [])
                    }
                    r = u.length
                })
            }
        }
    };

function vi() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tA();
    null == e || e.emit("endPageloadSpan")
}

function vo(e) {
    let t = rh();
    if (t === e) return;
    let n = tT();
    e.end = new Proxy(e.end, {
        apply: (e, r, i) => (n0(n, t), Reflect.apply(e, r, i))
    }), n0(n, e)
}
let va = new WeakMap,
    vs = new WeakMap,
    vl = ["text/event-stream", "application/x-ndjson", "application/stream+json"],
    vu = () => ({
        name: "FetchStreamPerformance",
        setup(e) {
            let t;
            is(t = "fetch-body-resolved", e => {
                if (e.response) {
                    let t = va.get(e.response);
                    if (t && e.endTimestamp) {
                        t.end(e.endTimestamp);
                        let n = vs.get(e.response);
                        n && clearTimeout(n)
                    }
                }
            }), il(t, () => an(ai)), at(t => {
                if (t.endTimestamp && t.response) {
                    var n, r, i, o, a;
                    let s = (null == (n = t.response.headers) ? void 0 : n.get("content-type")) || "";
                    if ((null == (r = t.response.headers) ? void 0 : r.get("content-length")) || !vl.some(e => s.startsWith(e))) return;
                    let l = (null == (i = t.fetchData) ? void 0 : i.url) || "",
                        u = (null == (o = t.fetchData) ? void 0 : o.method) || "GET",
                        c = oR(l),
                        d = l.startsWith("data:") ? oO(l) : c ? ox(c) : l,
                        p = oM(l, null == (a = ei.location) ? void 0 : a.origin),
                        f = p ? `${u} ${p}` : u,
                        h = s9({
                            name: iq(e) ? f : `${u} ${d}`,
                            startTime: t.endTimestamp,
                            attributes: {
                                [nb]: ok(oO(l)),
                                [n_]: p,
                                [ni]: u,
                                type: "fetch",
                                [nd]: "http.client.stream",
                                [np]: "auto.http.browser.stream"
                            }
                        });
                    va.set(t.response, h);
                    let m = setTimeout(() => {
                        h.isRecording() && h.end()
                    }, 9e4);
                    vs.set(t.response, m)
                }
            })
        }
    });
var ve = p9,
    vc = p9;
let vd = "BfcacheMetrics",
    vp = function() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = null == (e = t.maxReasons) ? 1 / 0 : e < 1 ? (aS && em.warn(`[${vd}] \`maxReasons\` must be at least 1, got ${e}. Using 1 instead.`), 1) : e;
        return {
            name: vd,
            setupOnce() {
                var e;
                if (!ei.addEventListener || !(null == (e = ei.performance) ? void 0 : e.getEntriesByType)) {
                    aS && em.log(`[${vd}] Browser APIs unavailable, skipping instrumentation.`);
                    return
                }
                ei.addEventListener("pageshow", function(e) {
                    var t, r, i;
                    let o, a = oj() || tT().getScopeData().transactionName || (null == (t = ei.location) ? void 0 : t.pathname);
                    if (e.persisted) return void vf("hit", 0, a);
                    let s = ei.performance.getEntriesByType("navigation")[0];
                    if ((null == s ? void 0 : s.type) !== "back_forward") return;
                    let l = (r = s.notRestoredReasons, i = n, o = [], !r || i <= 0 || function e(t, n, r, i) {
                        var o, a;
                        r.length >= i || (null == (o = t.reasons) || o.forEach(e => {
                            if (r.length >= i) return;
                            let t = "string" == typeof e ? e : e.reason;
                            t && r.push({
                                reason: t,
                                frame: n
                            })
                        }), null == (a = t.children) || a.forEach(t => {
                            e(t, "child", r, i)
                        }))
                    }(r, "top", o, i), o);
                    vf("miss", l.length, a), "number" == typeof s.duration && s.duration > 0 && ve.distribution("browser.bfcache.reload.duration", s.duration, {
                        unit: "millisecond",
                        attributes: vh({
                            [nh]: a
                        })
                    }), l.forEach(e => (function(e, t) {
                        let {
                            reason: n,
                            frame: r
                        } = e;
                        vc.count("browser.bfcache.not_restored", 1, {
                            attributes: vh({
                                "browser.bfcache.reason": n,
                                "browser.bfcache.frame": r,
                                [nh]: t
                            })
                        })
                    })(e, a))
                }, !0)
            }
        }
    };

function vf(e, t, n) {
    vc.count("browser.bfcache.navigation", 1, {
        attributes: vh({
            "browser.bfcache.outcome": e,
            "browser.bfcache.not_restored_reason_count": t || void 0,
            [nh]: n
        })
    })
}

function vh(e) {
    return e[np] = "auto.browser.bfcache", e
}

function vm(e) {
    return new Promise((t, n) => {
        e.oncomplete = e.onsuccess = () => t(e.result), e.onabort = e.onerror = () => n(e.error)
    })
}

function vg(e) {
    return vm(e.getAllKeys())
}

function vv(e) {
    let t;

    function n() {
        var n, r;
        let i, o;
        return void 0 == t && (n = e.dbName || "sentry-offline", r = e.storeName || "queue", (i = indexedDB.open(n)).onupgradeneeded = () => i.result.createObjectStore(r), o = vm(i), t = e => o.then(t => e(t.transaction(r, "readwrite").objectStore(r)))), t
    }
    return {
        push: async t => {
            try {
                var r, i;
                let o = tQ(t);
                await (r = n(), i = e.maxQueueSize || 30, r(e => vg(e).then(t => {
                    if (!(t.length >= i)) return e.put(o, Math.max(...t, 0) + 1), vm(e.transaction)
                })))
            } catch {}
        },
        unshift: async t => {
            try {
                var r, i;
                let o = tQ(t);
                await (r = n(), i = e.maxQueueSize || 30, r(e => vg(e).then(t => {
                    if (!(t.length >= i)) return e.put(o, Math.min(...t, 0) - 1), vm(e.transaction)
                })))
            } catch {}
        },
        shift: async () => {
            try {
                let e = await n()(e => vg(e).then(t => {
                    let n = t[0];
                    if (null != n) return vm(e.get(n)).then(t => (e.delete(n), vm(e.transaction).then(() => t)))
                }));
                if (e) return function(e) {
                    let t = "string" == typeof e ? tX(e) : e;

                    function n(e) {
                        let n = t.subarray(0, e);
                        return t = t.subarray(e + 1), n
                    }

                    function r() {
                        var e;
                        let r, i = t.indexOf(10);
                        return i < 0 && (i = t.length), JSON.parse((e = n(i), (r = ea(ei)).decodePolyfill ? r.decodePolyfill(e) : new TextDecoder().decode(e)))
                    }
                    let i = r(),
                        o = [];
                    for (; t.length;) {
                        let e = r(),
                            t = "number" == typeof e.length ? e.length : void 0;
                        o.push([e, t ? n(t) : r()])
                    }
                    return [i, o]
                }(e)
            } catch {}
        }
    }
}

function v_() {
    var e;
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sm;
    return e = function(e) {
        function t() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            el && em.log("[Offline]:", ...t)
        }
        return n => {
            let r, i = e(n);
            if (!n.createStore) throw Error("No `createStore` function was provided");
            let o = n.createStore(n),
                a = 5e3;

            function s(e) {
                r && clearTimeout(r), r = iV(setTimeout(async () => {
                    r = void 0;
                    let e = await o.shift();
                    e && (t("Attempting to send previously queued event"), e[0].sent_at = new Date(eB()).toISOString(), u(e, !0).catch(e => {
                        t("Failed to retry sending", e)
                    }))
                }, e))
            }

            function l() {
                r || (s(a), a = Math.min(2 * a, 36e5))
            }
            async function u(e) {
                var r, u, c;
                let d = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (!d && tJ(e, ["replay_event", "replay_recording"])) return await o.push(e), s(100), {};
                try {
                    if (n.shouldSend) {
                        let t = n.shouldSend(e),
                            r = eC(t) ? await t : t;
                        if (!1 === r) throw Error("Envelope not sent because `shouldSend` callback returned false")
                    }
                    let t = await i.send(e),
                        o = 100;
                    if (t) {
                        if (null == (r = t.headers) ? void 0 : r["retry-after"]) o = iJ(t.headers["retry-after"]);
                        else if (null == (u = t.headers) ? void 0 : u["x-sentry-rate-limits"]) o = 6e4;
                        else if ((t.statusCode || 0) >= 400) return t
                    }
                    return s(o), a = 5e3, t
                } catch (i) {
                    let r = (c = a, !tJ(e, ["client_report"]) && (!n.shouldStore || n.shouldStore(e, i, c)));
                    if (eC(r) ? await r : r) return d ? await o.unshift(e) : await o.push(e), l(), t("Error sending. Event queued.", i), {};
                    throw i
                }
            }
            return n.flushAtStartup && l(), {
                send: u,
                flush: e => (void 0 === e && (a = 5e3, s(100)), i.flush(e))
            }
        }
    }(t), t => {
        let n = e({ ...t,
            createStore: vv
        });
        return ei.addEventListener("online", async e => {
            await n.flush()
        }), n
    }
}
let vy = "window" in ei && ei.window === ei && "u" < typeof importScripts,
    vb = String(0),
    vS = vy ? "main" : "worker",
    vw = !1;

function vE(e) {
    e.setAttribute("thread.id", vb), e.setAttribute("thread.name", vS)
}
class vk {
    initialize(e) {
        let t = e.getOptions().profileLifecycle,
            n = function(e) {
                if (vw) return aS && em.log("[Profiling] Profiling has been disabled for the duration of the current user session as the JS Profiler could not be started."), !1;
                if ("trace" !== e.profileLifecycle && "manual" !== e.profileLifecycle) return aS && em.warn("[Profiling] Session not sampled. Invalid `profileLifecycle` option."), !1;
                let t = e.profileSessionSampleRate;
                return ("number" != typeof t && "boolean" != typeof t || "number" == typeof t && isNaN(t) ? (aS && em.warn(`[Profiling] Invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(t)} of type ${JSON.stringify(typeof t)}.`), 1) : !0 !== t && !1 !== t && (t < 0 || t > 1) && (aS && em.warn(`[Profiling] Invalid sample rate. Sample rate must be between 0 and 1. Got ${t}.`), 1)) ? (aS && em.warn("[Profiling] Discarding profile because of invalid profileSessionSampleRate."), !1) : t ? Math.random() <= t : (aS && em.log("[Profiling] Discarding profile because profileSessionSampleRate is not defined or set to 0"), !1)
            }(e.getOptions());
        aS && em.log(`[Profiling] Initializing profiler (lifecycle='${t}').`), !n && aS && em.log("[Profiling] Session not sampled. Skipping lifecycle profiler initialization."), this._profilerId = e3(), this._client = e, this._sessionSampled = n, this._lifecycleMode = t, "trace" === t && this._setupTraceLifecycleListeners(e), e.on("spanStart", e => {
            this._isRunning && vE(e)
        })
    }
    start() {
        if ("trace" === this._lifecycleMode) {
            aS && em.warn('[Profiling] `profileLifecycle` is set to "trace". Calls to `uiProfiler.start()` are ignored in trace mode.');
            return
        }
        if (this._isRunning) {
            aS && em.warn("[Profiling] Profile session is already running, `uiProfiler.start()` is a no-op.");
            return
        }
        if (!this._sessionSampled) {
            aS && em.warn("[Profiling] Session is not sampled, `uiProfiler.start()` is a no-op.");
            return
        }
        this._beginProfiling()
    }
    stop() {
        if ("trace" === this._lifecycleMode) {
            aS && em.warn('[Profiling] `profileLifecycle` is set to "trace". Calls to `uiProfiler.stop()` are ignored in trace mode.');
            return
        }
        if (!this._isRunning) {
            aS && em.warn("[Profiling] Profiler is not running, `uiProfiler.stop()` is a no-op.");
            return
        }
        this._endProfiling()
    }
    notifyRootSpanActive(e) {
        if ("trace" !== this._lifecycleMode || !this._sessionSampled) return;
        let t = e.spanContext().spanId;
        if (!t || this._activeRootSpanIds.has(t)) return;
        this._registerTraceRootSpan(t);
        let n = this._activeRootSpanIds.size;
        1 === n && (aS && em.log("[Profiling] Detected already active root span during setup. Active root spans now:", n), this._beginProfiling()), this._isRunning && vE(e)
    }
    _beginProfiling() {
        if (!this._isRunning) {
            if (this._isRunning = !0, aS && em.log("[Profiling] Started profiling with profiler ID:", this._profilerId), tR().setContext("profile", {
                    profiler_id: this._profilerId
                }), this._startProfilerInstance(), !this._profiler) {
                aS && em.log("[Profiling] Failed to start JS Profiler; stopping."), this._resetProfilerInfo();
                return
            }
            this._startPeriodicChunking()
        }
    }
    _endProfiling() {
        this._isRunning && (this._isRunning = !1, this._chunkTimer && (clearTimeout(this._chunkTimer), this._chunkTimer = void 0), this._clearAllRootSpanTimeouts(), this._collectCurrentChunk().catch(e => {
            aS && em.error("[Profiling] Failed to collect current profile chunk on `stop()`:", e)
        }), "manual" === this._lifecycleMode && tR().setContext("profile", {}))
    }
    _setupTraceLifecycleListeners(e) {
        e.on("spanStart", e => {
            if (!this._sessionSampled) {
                aS && em.log("[Profiling] Span not profiled because of negative sampling decision for user session.");
                return
            }
            if (e !== rd(e)) return;
            if (!e.isRecording()) {
                aS && em.log("[Profiling] Discarding profile because root span was not sampled.");
                return
            }
            let t = e.spanContext().spanId;
            if (!t || this._activeRootSpanIds.has(t)) return;
            this._registerTraceRootSpan(t);
            let n = this._activeRootSpanIds.size;
            1 === n && (aS && em.log(`[Profiling] Root span ${t} started. Profiling active while there are active root spans (count=${n}).`), this._beginProfiling())
        }), e.on("spanEnd", e => {
            if (!this._sessionSampled) return;
            let t = e.spanContext().spanId;
            if (!t || !this._activeRootSpanIds.has(t)) return;
            this._activeRootSpanIds.delete(t);
            let n = this._activeRootSpanIds.size;
            aS && em.log(`[Profiling] Root span with ID ${t} ended. Will continue profiling for as long as there are active root spans (currently: ${n}).`), 0 === n && (this._collectCurrentChunk().catch(e => {
                aS && em.error("[Profiling] Failed to collect current profile chunk on last `spanEnd`:", e)
            }), this._endProfiling())
        })
    }
    _resetProfilerInfo() {
        this._isRunning = !1, tR().setContext("profile", {})
    }
    _clearAllRootSpanTimeouts() {
        this._rootSpanTimeouts.forEach(e => clearTimeout(e)), this._rootSpanTimeouts.clear()
    }
    _registerTraceRootSpan(e) {
        this._activeRootSpanIds.add(e);
        let t = setTimeout(() => this._onRootSpanTimeout(e), 3e5);
        this._rootSpanTimeouts.set(e, t)
    }
    _startProfilerInstance() {
        var e;
        if ((null == (e = this._profiler) ? void 0 : e.stopped) === !1) return;
        let t = function() {
            let e = ei.Profiler;
            if ("function" != typeof e) {
                aS && em.log("[Profiling] Profiling is not supported by this browser, Profiler interface missing on window object.");
                return
            }
            try {
                return new e({
                    sampleInterval: 10,
                    maxBufferSize: 3e3
                })
            } catch {
                aS && (em.log("[Profiling] Failed to initialize the Profiling constructor, this is likely due to a missing 'Document-Policy': 'js-profiling' header."), em.log("[Profiling] Disabling profiling for current user session.")), vw = !0
            }
        }();
        if (!t) {
            aS && em.log("[Profiling] Failed to start JS Profiler.");
            return
        }
        this._profiler = t
    }
    _startPeriodicChunking() {
        this._isRunning && (this._chunkTimer = setTimeout(() => {
            if (this._collectCurrentChunk().catch(e => {
                    aS && em.error("[Profiling] Failed to collect current profile chunk during periodic chunking:", e)
                }), this._isRunning) {
                if (this._startProfilerInstance(), !this._profiler) return void this._resetProfilerInfo();
                this._startPeriodicChunking()
            }
        }, 6e4))
    }
    _onRootSpanTimeout(e) {
        !this._rootSpanTimeouts.has(e) || (this._rootSpanTimeouts.delete(e), this._activeRootSpanIds.has(e) && (aS && em.log(`[Profiling] Reached 5-minute timeout for root span ${e}. You likely started a manual root span that never called \`.end()\`.`), this._activeRootSpanIds.delete(e), 0 === this._activeRootSpanIds.size && this._endProfiling()))
    }
    async _collectCurrentChunk() {
        let e = this._profiler;
        if (this._profiler = void 0, e) try {
            let t = await e.stop(),
                n = function(e, t, n) {
                    var r, i;
                    if (null == e) throw TypeError(`Cannot construct profiling event envelope without a valid profile. Got ${e} instead.`);
                    let o = function(e) {
                            let t = [];
                            for (let n = 0; n < e.frames.length; n++) {
                                let r = e.frames[n];
                                r && (t[n] = {
                                    function: r.name,
                                    abs_path: "number" == typeof r.resourceId ? e.resources[r.resourceId] : void 0,
                                    lineno: r.line,
                                    colno: r.column
                                })
                            }
                            let n = [];
                            for (let t = 0; t < e.stacks.length; t++) {
                                let r = e.stacks[t];
                                if (!r) continue;
                                let i = [],
                                    o = r;
                                for (; o;) i.push(o.frameId), o = void 0 === o.parentId ? void 0 : e.stacks[o.parentId];
                                n[t] = i
                            }
                            let r = [];
                            for (let t = 0; t < e.samples.length; t++) {
                                let n = e.samples[t];
                                if (!n) continue;
                                let i = to(n.timestamp);
                                r[t] = {
                                    stack_id: n.stackId ?? 0,
                                    thread_id: vb,
                                    timestamp: i
                                }
                            }
                            return {
                                frames: t,
                                stacks: n,
                                samples: r,
                                thread_metadata: {
                                    [vb]: {
                                        name: vS
                                    }
                                }
                            }
                        }(e),
                        a = t.getOptions(),
                        s = null == (i = t.getSdkMetadata) || null == (r = i.call(t)) ? void 0 : r.sdk;
                    return {
                        chunk_id: e3(),
                        client_sdk: {
                            name: (null == s ? void 0 : s.name) ?? "sentry.javascript.browser",
                            version: (null == s ? void 0 : s.version) ?? "0.0.0"
                        },
                        profiler_id: n || e3(),
                        platform: "javascript",
                        version: "2",
                        release: a.release ?? "",
                        environment: a.environment ?? "production",
                        debug_meta: {
                            images: function(e) {
                                let t = tA(),
                                    n = null == t ? void 0 : t.getOptions(),
                                    r = null == n ? void 0 : n.stackParser;
                                if (!r) return [];
                                let i = tU(r);
                                if (!i) return [];
                                let o = [];
                                for (let t of e) {
                                    let e = function(e) {
                                        let t = (null == e ? void 0 : e.startsWith("file://")) ? e.slice(7) : e;
                                        return (null == t ? void 0 : t.match(/\/[A-Z]:/)) && (t = t.slice(1)), t
                                    }(t);
                                    e && i[e] && o.push({
                                        type: "sourcemap",
                                        code_file: t,
                                        debug_id: i[e]
                                    })
                                }
                                return o
                            }(e.resources)
                        },
                        profile: o
                    }
                }(t, this._client, this._profilerId),
                r = function(e) {
                    try {
                        if (!e || "object" != typeof e) return {
                            reason: "chunk is not an object"
                        };
                        let t = e => "string" == typeof e && /^[a-f0-9]{32}$/.test(e);
                        if (!t(e.profiler_id)) return {
                            reason: "missing or invalid profiler_id"
                        };
                        if (!t(e.chunk_id)) return {
                            reason: "missing or invalid chunk_id"
                        };
                        if (!e.client_sdk) return {
                            reason: "missing client_sdk metadata"
                        };
                        let n = e.profile;
                        if (!n) return {
                            reason: "missing profile data"
                        };
                        if (!Array.isArray(n.frames) || !n.frames.length) return {
                            reason: "profile has no frames"
                        };
                        if (!Array.isArray(n.stacks) || !n.stacks.length) return {
                            reason: "profile has no stacks"
                        };
                        if (!Array.isArray(n.samples) || !n.samples.length) return {
                            reason: "profile has no samples"
                        };
                        return {
                            valid: !0
                        }
                    } catch (e) {
                        return {
                            reason: `unknown validation error: ${e}`
                        }
                    }
                }(n);
            if ("reason" in r) {
                aS && em.log("[Profiling] Discarding invalid profile chunk (this is probably a bug in the SDK):", r.reason);
                return
            }
            this._sendProfileChunk(n), aS && em.log("[Profiling] Collected browser profile chunk.")
        } catch (e) {
            aS && em.log("[Profiling] Error while stopping JS Profiler for chunk:", e)
        }
    }
    _sendProfileChunk(e) {
        var t;
        let n = this._client,
            r = t1(null == (t = n.getSdkMetadata) ? void 0 : t.call(n)),
            i = n.getDsn(),
            o = n.getOptions().tunnel,
            a = tV({
                event_id: e3(),
                sent_at: (new Date).toISOString(),
                ...r && {
                    sdk: r
                },
                ...!!o && i && {
                    dsn: tW(i)
                }
            }, [
                [{
                    type: "profile_chunk",
                    platform: "javascript"
                }, e]
            ]);
        n.sendEnvelope(a).then(null, e => {
            aS && em.error("Error while sending profile chunk envelope:", e)
        })
    }
    constructor() {
        this._client = void 0, this._profiler = void 0, this._chunkTimer = void 0, this._profilerId = void 0, this._isRunning = !1, this._sessionSampled = !1, this._lifecycleMode = void 0, this._activeRootSpanIds = new Set, this._rootSpanTimeouts = new Map
    }
}
let vT = () => ({
        name: "BrowserProfiling",
        setup(e) {
            let t = e.getOptions(),
                n = new vk;
            t.profileLifecycle || (t.profileLifecycle = "manual");
            let r = rh(),
                i = r && rd(r),
                o = t.profileLifecycle;
            if (e.on("startUIProfiler", () => n.start()), e.on("stopUIProfiler", () => n.stop()), "manual" === o) n.initialize(e);
            else if ("trace" === o) {
                if (!rS(t)) {
                    aS && em.warn("[Profiling] `profileLifecycle` is 'trace' but tracing is disabled. Set a `tracesSampleRate` or `tracesSampler` to enable span tracing.");
                    return
                }
                n.initialize(e), i && n.notifyRootSpanActive(i), ei.setTimeout(() => {
                    let e = rh(),
                        t = e && rd(e);
                    t && n.notifyRootSpanActive(t)
                }, 0)
            }
        }
    }),
    vI = [{
        op: lg,
        name: "#sentry-spotlight"
    }, {
        op: lg,
        attributes: {
            [t9]: "#sentry-spotlight"
        }
    }],
    vR = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.sidecarUrl || "http://localhost:8969/stream";
        return {
            name: "SpotlightBrowser",
            setup: () => {
                aS && em.log("Using Sidecar URL", t)
            },
            beforeSetup(e) {
                let t = e.getOptions();
                t.ignoreSpans = [...t.ignoreSpans || [], ...vI]
            },
            afterAllSetup: e => {
                var n, r;
                let i, o;
                n = e, r = t, i = sf("fetch"), o = 0, n.on("beforeEnvelope", e => {
                    o > 3 ? em.warn("[Spotlight] Disabled Sentry -> Spotlight integration due to too many failed requests:", o) : i(r, {
                        method: "POST",
                        body: tQ(e),
                        headers: {
                            "Content-Type": "application/x-sentry-envelope"
                        },
                        mode: "cors"
                    }).then(e => {
                        e.status >= 200 && e.status < 400 && (o = 0)
                    }, e => {
                        o++, em.error("Sentry SDK can't connect to Sidecar is it running? See: https://spotlightjs.com/sidecar/npx/", e)
                    })
                })
            }
        }
    },
    vx = () => ({
        name: "LaunchDarkly",
        processEvent: (e, t, n) => pz(e)
    });

function vC() {
    return {
        name: "sentry-flag-auditor",
        type: "flag-used",
        synchronous: !0,
        method: (e, t, n) => {
            pq(e, t.value), pG(e, t.value)
        }
    }
}
let vA = () => ({
    name: "OpenFeature",
    processEvent: (e, t, n) => pz(e)
});
class vM {
    after(e, t) {
        pq(t.flagKey, t.value), pG(t.flagKey, t.value)
    }
    error(e, t, n) {
        pq(e.flagKey, e.defaultValue), pG(e.flagKey, e.defaultValue)
    }
}
let vP = e => {
    let {
        featureFlagClientClass: t
    } = e;
    return {
        name: "Unleash",
        setupOnce() {
            eP(t.prototype, "isEnabled", vN)
        },
        processEvent: (e, t, n) => pz(e)
    }
};

function vN(e) {
    return function() {
        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        let i = n[0],
            o = e.apply(this, n);
        return "string" == typeof i && "boolean" == typeof o ? (pq(i, o), pG(i, o)) : aS && em.error(`[Feature Flags] UnleashClient.isEnabled does not match expected signature. arg0: ${i} (${typeof i}), result: ${o} (${typeof o})`), o
    }
}

function vO(e) {
    return function() {
        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        let i = n[0],
            o = e.apply(this, n);
        return "string" == typeof i && "boolean" == typeof o && (pq(i, o), pG(i, o)), o
    }
}
let vD = e => {
        let {
            growthbookClass: t
        } = e;
        return (e => {
            let {
                growthbookClass: t
            } = e;
            return {
                name: "GrowthBook",
                setupOnce() {
                    let e = t.prototype;
                    "function" == typeof e.isOn && eP(e, "isOn", vO), "function" == typeof e.getFeatureValue && eP(e, "getFeatureValue", vO)
                },
                processEvent: (e, t, n) => pz(e)
            }
        })({
            growthbookClass: t
        })
    },
    vL = e => {
        let {
            featureFlagClient: t
        } = e;
        return {
            name: "Statsig",
            setup(e) {
                t.on("gate_evaluation", e => {
                    pq(e.gate.name, e.gate.value), pG(e.gate.name, e.gate.value)
                })
            },
            processEvent: (e, t, n) => pz(e)
        }
    };
async function v$() {
    let e = tA();
    if (!e) return "no-client-active";
    if (!e.getDsn()) return "no-dsn-configured";
    let t = e.getOptions().tunnel || "https://o447951.ingest.sentry.io/api/4509632503087104/envelope/?sentry_version=7&sentry_key=c1dfb07d783ad5325c245c1fd3725390&sentry_client=sentry.javascript.browser%2F1.33.7";
    try {
        await sV(() => fetch(t, {
            body: "{}",
            method: "POST",
            mode: "cors",
            credentials: "omit"
        }))
    } catch {
        return "sentry-unreachable"
    }
}
let vF = e => {
    let {
        worker: t
    } = e;
    return {
        name: "WebWorker",
        setupOnce: () => {
            (Array.isArray(t) ? t : [t]).forEach(e => vU(e))
        },
        addWorker: e => vU(e)
    }
};

function vU(e) {
    let t = [];
    e.addEventListener("error", e => {
        let {
            message: n,
            filename: r,
            lineno: i,
            colno: o
        } = e, a = t.findIndex(e => e.message === n && e.url === r && e.lineno === i && e.colno === o);
        if (-1 !== a) {
            var s;
            t.splice(0, a + 1), s = {
                msg: n,
                url: r,
                line: i,
                column: o
            }, o4.push(s), setTimeout(() => {
                let e = o4.indexOf(s); - 1 !== e && o4.splice(e, 1)
            })
        }
    }), e.addEventListener("message", e => {
        if (function(e) {
                if (!eT(e) || !0 !== e._sentryMessage) return !1;
                let t = "_sentryDebugIds" in e,
                    n = "_sentryModuleMetadata" in e,
                    r = "_sentryWorkerError" in e,
                    i = "_sentryWasmImages" in e;
                return (!!t || !!n || !!r || !!i) && (!t || !!(eT(e._sentryDebugIds) || void 0 === e._sentryDebugIds)) && (!n || !!(eT(e._sentryModuleMetadata) || void 0 === e._sentryModuleMetadata)) && (!r || !!eT(e._sentryWorkerError)) && (!i || !!Array.isArray(e._sentryWasmImages) && !!e._sentryWasmImages.every(e => eT(e) && "string" == typeof e.code_file)) && !0
            }(e.data)) {
            if (e.stopImmediatePropagation(), e.data._sentryDebugIds && (aS && em.log("Sentry debugId web worker message received", e.data), ei._sentryDebugIds = { ...e.data._sentryDebugIds,
                    ...ei._sentryDebugIds
                }), e.data._sentryModuleMetadata && (aS && em.log("Sentry module metadata web worker message received", e.data), ei._sentryModuleMetadata = { ...e.data._sentryModuleMetadata,
                    ...ei._sentryModuleMetadata
                }), e.data._sentryWasmImages) {
                aS && em.log("Sentry WASM images web worker message received", e.data);
                let t = ei._sentryWasmImages || [],
                    n = e.data._sentryWasmImages.filter(e => eT(e) && "string" == typeof e.code_file && !t.some(t => t.code_file === e.code_file));
                ei._sentryWasmImages = [...t, ...n]
            }
            if (e.data._sentryWorkerError) {
                aS && em.log("Sentry worker error message received", e.data._sentryWorkerError);
                let {
                    kind: n,
                    message: r,
                    url: i,
                    lineno: o,
                    colno: a
                } = e.data._sentryWorkerError;
                "error" === n && t.push({
                        message: r,
                        url: i,
                        lineno: o,
                        colno: a
                    }) > 20 && t.shift(),
                    function(e) {
                        var t;
                        let n, {
                                reason: r,
                                kind: i,
                                name: o,
                                filename: a,
                                url: s,
                                lineno: l,
                                colno: u,
                                plainError: c
                            } = e,
                            d = "error" !== i,
                            p = c && eT(r) ? ((n = Error(String((t = r).message))).stack = "string" == typeof t.stack ? t.stack : void 0, n) : r;
                        o && e_(p) && p.name !== o && eN(p, "name", o);
                        let f = tA();
                        if (!f) return;
                        let {
                            stackParser: h,
                            attachStacktrace: m
                        } = f.getOptions(), g = d && ek(p) ? aK(p) : o2(h, p, void 0, m, d);
                        d || aJ(g, s || a, l, u), g.level = "error", a && (g.contexts = { ...g.contexts,
                            worker: {
                                filename: a
                            }
                        }), r$(g, {
                            originalException: p,
                            mechanism: {
                                handled: !1,
                                type: d ? "auto.browser.web_worker.onunhandledrejection" : "auto.browser.web_worker.onerror"
                            }
                        }), aS && em.log(`Captured worker ${d?"unhandled rejection":"error"}`, p)
                    }(e.data._sentryWorkerError)
            }
        }
    })
}

function vB(e) {
    let {
        self: t
    } = e;
    Error.stackTraceLimit = 50, t.postMessage({
        _sentryMessage: !0,
        _sentryDebugIds: t._sentryDebugIds ?? void 0,
        _sentryModuleMetadata: t._sentryModuleMetadata ?? void 0
    });
    let n = e => {
        var n;
        let {
            reason: r
        } = e;
        aS && em.log(`[Sentry Worker] Forwarding ${e.kind} to parent`, e),
            function(e, t) {
                try {
                    e.postMessage({
                        _sentryMessage: !0,
                        _sentryWorkerError: t
                    });
                    return
                } catch {}
                let {
                    reason: n
                } = t, r = e_(n), i = r ? {
                    message: oZ(n),
                    stack: n.stack
                } : eJ(n);
                try {
                    e.postMessage({
                        _sentryMessage: !0,
                        _sentryWorkerError: { ...t,
                            reason: i,
                            plainError: r
                        }
                    })
                } catch {}
            }(t, { ...e,
                filename: null == (n = t.location) ? void 0 : n.href,
                name: e_(r) ? oQ(r) : void 0
            })
    };
    t.addEventListener("error", e => {
        let {
            error: t,
            message: r,
            filename: i,
            lineno: o,
            colno: a
        } = e;
        n({
            kind: "error",
            reason: t ?? r,
            message: r,
            url: i,
            lineno: o,
            colno: a
        })
    }), t.addEventListener("unhandledrejection", e => {
        n({
            kind: "unhandledrejection",
            reason: aY(e)
        })
    }), aS && em.log("[Sentry Worker] Registered worker with error and unhandled rejection handling")
}

function vj(e, t, n) {
    let {
        componentStack: r
    } = t;
    if (e_(e) && r) {
        let t, n = Error(e.message);
        n.name = `React ErrorBoundary ${e.name}`, n.stack = r, t = new WeakSet,
            function e(n, r) {
                if (!t.has(n)) {
                    if (n.cause) return t.add(n), e(n.cause, r);
                    n.cause = r
                }
            }(e, n)
    }
    return rD(e, n)
}

function vW(e) {
    return (t, n) => {
        let r = !!e,
            i = vj(t, n, {
                mechanism: {
                    handled: r,
                    type: "auto.function.react.error_handler"
                }
            });
        r && e(t, n, i)
    }
}
e.s(["BrowserClient", 0, o9, "MULTIPLEXED_TRANSPORT_EXTRA_KEY", 0, pE, "OpenFeatureIntegrationHook", 0, vM, "SDK_VERSION", 0, er, "SEMANTIC_ATTRIBUTE_SENTRY_OP", 0, nR, "SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN", 0, nx, "SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE", 0, nT, "Scope", 0, td, "WINDOW", 0, ei, "addBreadcrumb", 0, ii, "addEventProcessor", 0, rQ, "addIntegration", 0, r6, "bfcacheMetricsIntegration", 0, vp, "bindScopeToEmitter", 0, pC, "breadcrumbsIntegration", 0, aw, "browserApiErrorsIntegration", 0, ak, "browserProfilingIntegration", 0, vT, "browserSessionIntegration", 0, aD, "browserTracingIntegration", 0, c_, "buildLaunchDarklyFlagUsedHandler", 0, vC, "captureConsoleIntegration", 0, pP, "captureEvent", 0, r$, "captureException", 0, rD, "captureFeedback", 0, cV, "captureMessage", 0, rL, "captureSession", 0, r2, "chromeStackLineParser", 0, a9, "close", 0, rK, "consoleIntegration", 0, ig, "consoleLoggingIntegration", 0, p$, "contextLinesIntegration", 0, fk, "continueTrace", 0, sq, "createCachedRouteProvider", 0, oH, "createConsolaReporter", 0, pU, "createTransport", 0, iZ, "createUrlRouteProvider", 0, oW, "createUserFeedbackEnvelope", 0, fp, "cultureContextIntegration", 0, aU, "dedupeIntegration", 0, i_, "defaultRequestInstrumentationOptions", 0, ch, "defaultStackLineParsers", 0, su, "defaultStackParser", 0, sc, "diagnoseSdkConnectivity", 0, v$, "elementTimingIntegration", 0, vt, "endSession", 0, r0, "eventFiltersIntegration", 0, r7, "eventFromException", 0, o0, "eventFromMessage", 0, o1, "exceptionFromError", 0, oV, "extraErrorDataIntegration", 0, pW, "featureFlagsIntegration", 0, pV, "feedbackAsyncIntegration", 0, pS, "feedbackIntegration", 0, pw, "feedbackSyncIntegration", 0, pw, "fetchStreamPerformanceIntegration", 0, vu, "flush", 0, rY, "forceLoad", 0, sb, "functionToStringIntegration", 0, ir, "geckoStackLineParser", 0, sn, "getAbsoluteUrl", 0, ck, "getActiveSpan", 0, rh, "getClient", 0, tA, "getCurrentScope", 0, tT, "getDefaultIntegrations", 0, s_, "getFeedback", 0, di, "getGlobalScope", 0, tR, "getIsolationScope", 0, tI, "getReplay", 0, gD, "getRootSpan", 0, rd, "getRouteProvider", 0, oU, "getSpanDescendants", 0, rc, "getSpanStatusFromHttpCode", 0, nN, "getTraceData", 0, cn, "globalHandlersIntegration", 0, aV, "graphqlClientIntegration", 0, fM, "growthbookIntegration", 0, vD, "httpClientIntegration", 0, fy, "httpContextIntegration", 0, aZ, "init", 0, sy, "instrumentOutgoingRequests", 0, cm, "instrumentSupabaseClient", 0, p3, "interactionsIntegration", 0, vn, "isBotUserAgent", 0, lM, "isEnabled", 0, rX, "isInitialized", 0, rJ, "lastEventId", 0, rV, "launchDarklyIntegration", 0, vx, "lazyLoadIntegration", 0, pb, "linkedErrorsIntegration", 0, a3, "logger", () => p8, "makeBrowserOfflineTransport", 0, v_, "makeFetchTransport", 0, sm, "makeMultiplexedTransport", 0, pT, "metrics", () => p9, "moduleMetadataIntegration", 0, fi, "normalizeStringifyValue", 0, sv, "onLoad", 0, sS, "openFeatureIntegration", 0, vA, "opera10StackLineParser", 0, sa, "opera11StackLineParser", 0, sl, "parameterize", 0, p6, "registerSpanErrorInstrumentation", 0, lC, "registerWebWorker", 0, vB, "replayCanvasIntegration", 0, g9, "replayIntegration", 0, gP, "reportPageLoaded", 0, vi, "reportingObserverIntegration", 0, fm, "resolveCurrentRoute", 0, oj, "resolveRoute", 0, oB, "rewriteFramesIntegration", 0, cH, "sendFeedback", 0, c5, "setActiveSpanInBrowser", 0, vo, "setAttribute", 0, rz, "setAttributes", 0, rH, "setContext", 0, rF, "setConversationId", 0, rG, "setCurrentClient", 0, om, "setExtra", 0, rB, "setExtras", 0, rU, "setHttpStatus", 0, nO, "setMeasurement", 0, sL, "setRouteProvider", 0, oF, "setTag", 0, rW, "setTags", 0, rj, "setUser", 0, rq, "showReportDialog", 0, ff, "spanStreamingIntegration", 0, sO, "spanToBaggageHeader", 0, rC, "spanToJSON", 0, n7, "spanToStaticSpanJSON", 0, n8, "spanToTraceHeader", 0, n2, "spotlightBrowserIntegration", 0, vR, "startBrowserTracingNavigationSpan", 0, cb, "startBrowserTracingPageLoadSpan", 0, cy, "startInactiveSpan", 0, s9, "startNewTrace", 0, sK, "startSession", 0, rZ, "startSpan", 0, s8, "startSpanManual", 0, s7, "statsigIntegration", 0, vL, "supabaseIntegration", 0, p5, "suppressTracing", 0, sV, "thirdPartyErrorFilterIntegration", 0, fo, "uiProfiler", 0, fd, "unleashIntegration", 0, vP, "updateSpanName", 0, rm, "userTimingIntegration", 0, vr, "viewHierarchyIntegration", 0, fP, "webVitalsIntegration", 0, u9, "webWorkerIntegration", 0, vF, "winjsStackLineParser", 0, si, "withActiveSpan", 0, sG, "withIsolationScope", 0, tC, "withScope", 0, tx, "withStaticSpan", 0, iU, "withStreamedSpan", 0, iB, "zodErrorsIntegration", 0, fc], 852223), e.i(852223);
var vH = sw;
let vz = {
        childContextTypes: !0,
        contextType: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromError: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0
    },
    vq = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0
    },
    vG = Symbol.for("react.forward_ref"),
    vV = Symbol.for("react.memo"),
    vY = {};

function vK(e) {
    let t = e.$$typeof;
    return t && vY[t] || vz
}
vY[vG] = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
}, vY[vV] = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
};
let vJ = Object.defineProperty.bind(Object),
    vX = Object.getOwnPropertyNames.bind(Object),
    vQ = null == (et = Object.getOwnPropertySymbols) ? void 0 : et.bind(Object),
    vZ = Object.getOwnPropertyDescriptor.bind(Object),
    v0 = Object.getPrototypeOf.bind(Object),
    v1 = Object.prototype;

function v2(e, t, n) {
    if ("string" != typeof t) {
        if (v1) {
            let n = v0(t);
            n && n !== v1 && v2(e, n)
        }
        let n = vX(t);
        vQ && (n = n.concat(vQ(t)));
        let r = vK(e),
            i = vK(t);
        for (let o of n)
            if (!vq[o] && !(null == i ? void 0 : i[o]) && !(null == r ? void 0 : r[o]) && !vZ(e, o)) {
                let n = vZ(t, o);
                if (n) try {
                    vJ(e, o, n)
                } catch {}
            }
    }
    return e
}
let v3 = "unknown";
class v5 extends vH.Component {
    componentDidMount() {
        this._mountSpan && this._mountSpan.end()
    }
    shouldComponentUpdate(e) {
        let {
            updateProps: t,
            includeUpdates: n = !0
        } = e;
        if (n && this._mountSpan && t !== this.props.updateProps) {
            let e = Object.keys(t).filter(e => t[e] !== this.props.updateProps[e]);
            if (e.length > 0) {
                let t = ta();
                this._updateSpan = sG(this._mountSpan, () => {
                    let n = tA(),
                        r = !!n && iq(n),
                        i = `<${this.props.name}>`,
                        o = this.props.name === v3 ? void 0 : this.props.name;
                    return s9({
                        name: r ? o || "Component update" : i,
                        onlyIfParent: !0,
                        startTime: t,
                        attributes: {
                            [nd]: "ui.update",
                            [np]: "auto.ui.react.profiler",
                            ...o && {
                                [nv]: o
                            },
                            "ui.react.changed_props": e,
                            ...r && {
                                [nl]: i
                            }
                        }
                    })
                })
            }
        }
        return !0
    }
    componentDidUpdate() {
        this._updateSpan && (this._updateSpan.end(), this._updateSpan = void 0)
    }
    componentWillUnmount() {
        let e = ta(),
            {
                name: t,
                includeRender: n = !0
            } = this.props;
        if (this._mountSpan && n) {
            let n = n7(this._mountSpan).end_timestamp;
            sG(this._mountSpan, () => {
                let r = tA(),
                    i = !!r && iq(r),
                    o = `<${t}>`,
                    a = t === v3 ? void 0 : t,
                    s = s9({
                        onlyIfParent: !0,
                        name: i ? a || lw : o,
                        startTime: n,
                        attributes: {
                            [nd]: lh,
                            [np]: "auto.ui.react.profiler",
                            ...a && {
                                [nv]: a
                            },
                            ...i && {
                                [nl]: o
                            }
                        }
                    });
                s && s.end(e)
            })
        }
    }
    render() {
        return this.props.children
    }
    constructor(e) {
        super(e);
        let {
            name: t,
            disabled: n = !1
        } = this.props;
        if (n) return;
        let r = tA(),
            i = !!r && iq(r),
            o = `<${t}>`,
            a = t === v3 ? void 0 : t;
        this._mountSpan = s9({
            name: i ? a || lS : o,
            onlyIfParent: !0,
            attributes: {
                [nd]: lm,
                [np]: "auto.ui.react.profiler",
                ...a && {
                    [nv]: a
                },
                ...i && {
                    [nl]: o
                }
            }
        })
    }
}

function v4(e, t) {
    let n = (null == t ? void 0 : t.name) || e.displayName || e.name || v3,
        r = r => vH.createElement(v5, { ...t,
            name: n,
            updateProps: r
        }, vH.createElement(e, { ...r
        }));
    return r.displayName = `profiler(${n})`, v2(r, e), r
}

function v6(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            disabled: !1,
            hasRenderSpan: !0
        },
        [n] = vH.useState(() => {
            if (null == t ? void 0 : t.disabled) return;
            let n = tA(),
                r = !!n && iq(n),
                i = `<${e}>`,
                o = e === v3 ? void 0 : e;
            return s9({
                name: r ? o || lS : i,
                onlyIfParent: !0,
                attributes: {
                    [nd]: lm,
                    [np]: "auto.ui.react.profiler",
                    ...o && {
                        [nv]: o
                    },
                    ...r && {
                        [nl]: i
                    }
                }
            })
        });
    vH.useEffect(() => (n && n.end(), () => {
        if (n && t.hasRenderSpan) {
            let t = n7(n).end_timestamp,
                r = ta(),
                i = tA(),
                o = !!i && iq(i),
                a = `<${e}>`,
                s = e === v3 ? void 0 : e,
                l = s9({
                    name: o ? s || lw : a,
                    onlyIfParent: !0,
                    startTime: t,
                    attributes: {
                        [nd]: lh,
                        [np]: "auto.ui.react.profiler",
                        ...s && {
                            [nv]: s
                        },
                        ...o && {
                            [nl]: a
                        }
                    }
                });
            l && l.end(r)
        }
    }), [])
}
Object.assign(v5, {
    defaultProps: {
        disabled: !1,
        includeRender: !0,
        includeUpdates: !0
    }
});
var v8 = sw;
let v7 = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
    v9 = {
        componentStack: null,
        error: null,
        eventId: null
    };
class _e extends v8.Component {
    componentDidCatch(e, t) {
        let {
            componentStack: n
        } = t, {
            beforeCapture: r,
            onError: i,
            showDialog: o,
            dialogOptions: a
        } = this.props;
        tx(s => {
            r && r(s, e, n);
            let l = vj(e, t, {
                mechanism: {
                    handled: null != this.props.handled ? this.props.handled : !!this.props.fallback,
                    type: "auto.function.react.error_boundary"
                }
            });
            i && i(e, n, l), o && (this._lastEventId = l, this._openFallbackReportDialog && ff({ ...a,
                eventId: l
            })), this.setState({
                error: e,
                componentStack: n,
                eventId: l
            })
        })
    }
    componentDidMount() {
        let {
            onMount: e
        } = this.props;
        e && e()
    }
    componentWillUnmount() {
        let {
            error: e,
            componentStack: t,
            eventId: n
        } = this.state, {
            onUnmount: r
        } = this.props;
        r && (this.state === v9 ? r(null, null, null) : r(e, t, n)), this._cleanupHook && (this._cleanupHook(), this._cleanupHook = void 0)
    }
    resetErrorBoundary() {
        let {
            onReset: e
        } = this.props, {
            error: t,
            componentStack: n,
            eventId: r
        } = this.state;
        e && e(t, n, r), this.setState(v9)
    }
    render() {
        let {
            fallback: e,
            children: t
        } = this.props, n = this.state;
        if (null === n.componentStack) return "function" == typeof t ? t() : t;
        let r = "function" == typeof e ? v8.createElement(e, {
            error: n.error,
            componentStack: n.componentStack,
            resetError: () => this.resetErrorBoundary(),
            eventId: n.eventId
        }) : e;
        return v8.isValidElement(r) ? r : (e && v7 && em.warn("fallback did not produce a valid ReactElement"), null)
    }
    constructor(e) {
        super(e), this.state = v9, this._openFallbackReportDialog = !0;
        let t = tA();
        t && e.showDialog && (this._openFallbackReportDialog = !1, this._cleanupHook = t.on("afterSendEvent", t => {
            !t.type && this._lastEventId && t.event_id === this._lastEventId && ff({ ...e.dialogOptions,
                eventId: this._lastEventId
            })
        }))
    }
}

function _t(e, t) {
    let n = e.displayName || e.name || "unknown",
        r = v8.memo(n => v8.createElement(_e, { ...t
        }, v8.createElement(e, { ...n
        })));
    return r.displayName = `errorBoundary(${n})`, v2(r, e), r
}
let _n = {
    attachReduxState: !0,
    actionTransformer: e => e,
    stateTransformer: e => e || null
};

function _r(e) {
    let t = { ..._n,
        ...e
    };
    return e => (n, r) => {
        function i(e) {
            return (n, r) => {
                let i = e(n, r),
                    o = tT(),
                    a = t.actionTransformer(r);
                null != a && ii({
                    category: "redux.action",
                    data: a,
                    type: "info"
                });
                let s = t.stateTransformer(i);
                if (null != s) {
                    let e = tA(),
                        t = null == e ? void 0 : e.getOptions(),
                        n = (null == t ? void 0 : t.normalizeDepth) || 3,
                        r = {
                            state: {
                                type: "redux",
                                value: s
                            }
                        };
                    eN(r, eW, 3 + n), o.setContext("state", r)
                } else o.setContext("state", null);
                let {
                    configureScopeWithState: l
                } = t;
                return "function" == typeof l && l(o, i), i
            }
        }
        t.attachReduxState && tR().addEventProcessor((e, t) => {
            try {
                void 0 === e.type && "redux" === e.contexts.state.state.type && (t.attachments = [...t.attachments || [], {
                    filename: "redux_state.json",
                    data: JSON.stringify(e.contexts.state.state.value)
                }])
            } catch {}
            return e
        });
        let o = e(i(n), r);
        return o.replaceReducer = new Proxy(o.replaceReducer, {
            apply: function(e, t, n) {
                e.apply(t, [i(n[0])])
            }
        }), o
    }
}

function _i(e) {
    let t = c_({ ...e,
            instrumentPageLoad: !1,
            instrumentNavigation: !1
        }),
        {
            history: n,
            routes: r,
            match: i,
            instrumentPageLoad: o = !0,
            instrumentNavigation: a = !0
        } = e;
    return { ...t,
        afterAllSetup(e) {
            t.afterAllSetup(e), o && ei.location && _o(r, ei.location, i, function(t) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "url";
                cy(e, {
                    name: "route" !== n && iq(e) ? ly : t,
                    attributes: {
                        [nd]: ln,
                        [np]: "auto.pageload.react.reactrouter_v3",
                        [nm]: n,
                        ..."route" === n && {
                            [nE]: t
                        }
                    }
                })
            }), a && n.listen && n.listen(t => {
                ("PUSH" === t.action || "POP" === t.action) && _o(r, t, i, function(t) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "url";
                    cb(e, {
                        name: "route" !== n && iq(e) ? lb : t,
                        attributes: {
                            [nd]: lr,
                            [np]: "auto.navigation.react.reactrouter_v3",
                            [nm]: n,
                            ..."route" === n && {
                                [nE]: t
                            }
                        }
                    })
                })
            })
        }
    }
}

function _o(e, t, n, r) {
    let i = t.pathname;
    n({
        location: t,
        routes: e
    }, (e, t, n) => {
        if (e || !n) return r(i);
        let o = function(e) {
            if (!Array.isArray(e) || 0 === e.length) return "";
            let t = e.filter(e => !!e.path),
                n = -1;
            for (let e = t.length - 1; e >= 0; e--) {
                var r;
                if (null == (r = t[e].path) ? void 0 : r.startsWith("/")) {
                    n = e;
                    break
                }
            }
            return t.slice(n).reduce((e, t) => {
                let {
                    path: n
                } = t, r = "/" === e || "" === e ? n : `/${n}`;
                return `${e}${r}`
            }, "")
        }(n.routes || []);
        return 0 === o.length || "/*" === o ? r(i) : r(i = o, "route")
    })
}

function _a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = c_({ ...t,
            instrumentNavigation: !1,
            instrumentPageLoad: !1
        }),
        {
            instrumentPageLoad: r = !0,
            instrumentNavigation: i = !0
        } = t;
    return { ...n,
        afterAllSetup(t) {
            n.afterAllSetup(t);
            let o = (t, n) => {
                    let r = e.matchRoutes(t, n, {
                            preload: !1,
                            throwOnError: !1
                        }),
                        i = r[r.length - 1];
                    return (null == i ? void 0 : i.routeId) !== "__root__" ? i : void 0
                },
                a = (t, n, r, i) => {
                    var o;
                    let a;
                    t.updateName(n ? n.routeId : i), t.setAttribute(nm, n ? "route" : "url"), t.setAttributes({ ...n && {
                            [nE]: n.routeId
                        },
                        ...(a = _s(e, o = r), {
                            [nS]: o.pathname,
                            [nb]: ok(a)
                        }),
                        ..._l(n)
                    })
                },
                s = ei.location;
            if (r && s) {
                var l;
                let n = null == (l = e.state) ? void 0 : l.location,
                    r = n ? o(n.pathname, n.search) : o(s.pathname, e.options.parseSearch(s.search)),
                    i = cy(t, {
                        name: r ? r.routeId : iq(t) ? ly : s.pathname,
                        attributes: {
                            [nd]: ln,
                            [np]: "auto.pageload.react.tanstack_router",
                            [nm]: r ? "route" : "url",
                            ...r && {
                                [nE]: r.routeId
                            },
                            ..._l(r)
                        }
                    }),
                    u = e.subscribe("onResolved", e => {
                        if (u(), !i) return;
                        let {
                            toLocation: n
                        } = e;
                        a(i, o(n.pathname, n.search), n, iq(t) ? ly : n.pathname)
                    })
            }
            if (i) {
                let n;
                e.subscribe("onBeforeLoad", r => {
                    var i;
                    let {
                        toLocation: s,
                        fromLocation: l
                    } = r;
                    if (!l || s.state === l.state) return;
                    let u = o(s.pathname, s.search),
                        c = iq(t) ? lb : (null == (i = ei.location) ? void 0 : i.pathname) || s.pathname;
                    n ? a(n, u, s, c) : n = cb(t, {
                        name: u ? u.routeId : c,
                        attributes: {
                            [nd]: lr,
                            [np]: "auto.navigation.react.tanstack_router",
                            [nm]: u ? "route" : "url",
                            ...u && {
                                [nE]: u.routeId
                            },
                            ..._l(u)
                        }
                    }, {
                        url: _s(e, s)
                    })
                }), e.subscribe("onResolved", e => {
                    let r = n;
                    if (n = void 0, !r) return;
                    let {
                        toLocation: i
                    } = e, s = o(i.pathname, i.search);
                    if (s) {
                        var l;
                        a(r, s, i, iq(t) ? lb : (null == (l = ei.location) ? void 0 : l.pathname) || i.pathname)
                    }
                })
            }
        }
    }
}

function _s(e, t) {
    var n, r;
    let i = (null == (n = (r = e.options).stringifySearch) ? void 0 : n.call(r, t.search)) ?? "";
    return ck(`${t.pathname}${i&&"?"!==i?i:""}`)
}

function _l(e) {
    if (!e) return {};
    let t = {};
    return Object.entries(e.params).forEach(e => {
        let [n, r] = e;
        t[`url.path.parameter.${n}`] = r, t[`params.${n}`] = r
    }), t
}

function _u(e) {
    let t = c_({ ...e,
            instrumentPageLoad: !1,
            instrumentNavigation: !1
        }),
        {
            history: n,
            routes: r,
            matchPath: i,
            instrumentPageLoad: o = !0,
            instrumentNavigation: a = !0
        } = e;
    return { ...t,
        afterAllSetup(e) {
            t.afterAllSetup(e), _d(e, o, a, n, "reactrouter_v4", r, i)
        }
    }
}

function _c(e) {
    let t = c_({ ...e,
            instrumentPageLoad: !1,
            instrumentNavigation: !1
        }),
        {
            history: n,
            routes: r,
            matchPath: i,
            instrumentPageLoad: o = !0,
            instrumentNavigation: a = !0
        } = e;
    return { ...t,
        afterAllSetup(e) {
            t.afterAllSetup(e), _d(e, o, a, n, "reactrouter_v5", r, i)
        }
    }
}

function _d(e, t, n, r, i) {
    let o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : [],
        a = arguments.length > 6 ? arguments[6] : void 0;

    function s(e) {
        if (0 === o.length || !a) return [e, "url"];
        for (let t of function e(t, n, r) {
                let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
                return t.some(t => {
                    let o = t.path ? r(n, t) : i.length ? i[i.length - 1].match : {
                        path: "/",
                        url: "/",
                        params: {},
                        isExact: "/" === n
                    };
                    return o && (i.push({
                        route: t,
                        match: o
                    }), t.routes && e(t.routes, n, r, i)), !!o
                }), i
            }(o, e, a))
            if (t.match.isExact) return [t.match.path, "route"];
        return [e, "url"]
    }
    if (t) {
        let t = r.location ? r.location.pathname : ei.location ? ei.location.pathname : void 0;
        if (t) {
            let [n, r] = s(t);
            cy(e, {
                name: "route" !== r && iq(e) ? ly : n,
                attributes: {
                    [nd]: ln,
                    [np]: `auto.pageload.react.${i}`,
                    [nm]: r,
                    ..."route" === r && {
                        [nE]: n
                    }
                }
            })
        }
    }
    n && r.listen && r.listen((t, n) => {
        if (n && ("PUSH" === n || "POP" === n)) {
            let [n, r] = s(t.pathname);
            cb(e, {
                name: "route" !== r && iq(e) ? lb : n,
                attributes: {
                    [nd]: lr,
                    [np]: `auto.navigation.react.${i}`,
                    [nm]: r,
                    ..."route" === r && {
                        [nE]: n
                    }
                }
            })
        }
    })
}

function _p(e) {
    let t = e.displayName || e.name,
        n = t => {
            var n;
            if (null == t || null == (n = t.computedMatch) ? void 0 : n.isExact) {
                let e = t.computedMatch.path,
                    n = function() {
                        let e = rh(),
                            t = e && rd(e);
                        if (!t) return;
                        let n = n7(t).attributes[nd];
                        return "navigation" === n || "pageload" === n ? t : void 0
                    }();
                tT().setTransactionName(e), n && (n.updateName(e), n.setAttributes({
                    [nm]: "route",
                    [nE]: e
                }))
            }
            return sw.createElement(e, { ...t
            })
        };
    return n.displayName = `sentryRoute(${t})`, v2(n, e), n
}

function _f(e, t) {
    if (!t || "/" === t || !e.toLowerCase().startsWith(t.toLowerCase())) return e;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && "/" !== r ? e : e.slice(n) || "/"
}
let _h = new WeakMap;

function _m(e, t) {
    return void 0 !== e && void 0 !== t && (!!_v.test(t) || e === t)
}

function _g(e) {
    return e.split("/").filter(Boolean)
}
let _v = /^:[\w-]+$/;

function __(e) {
    let t = e.split("/"),
        n = t.length;
    for (let e of (t.includes("*") && (n += -2), t))
        if ("*" === e) continue;
        else _v.test(e) ? n += 3 : "" === e ? n += 1 : n += 10;
    return n
}
let _y = [];

function _b() {
    let e = _y.length;
    return e > 0 ? _y[e - 1] ?? null : null
}

function _S(e) {
    return e.params["*"] || ""
}

function _w(e) {
    return "*" === e[e.length - 1] ? e.slice(0, -1) : e
}

function _E(e) {
    return "/" === e[e.length - 1] ? e.slice(0, -1) : e
}

function _k(e) {
    return e.endsWith("*")
}

function _T(e) {
    return e.includes("/*") || e.endsWith("*")
}

function _I(e, t) {
    var n;
    return _k(e) && !!(null == (n = t.route.children) ? void 0 : n.length) || !1
}

function _R(e) {
    var t;
    return !!(!e.children && e.element && (null == (t = e.path) ? void 0 : t.endsWith("/*")))
}

function _x(e) {
    return e.split(/\\?\//).filter(e => e.length > 0 && "," !== e).length
}

function _C(e) {
    return "/" === e[0] ? e : `/${e}`
}

function _A(e, t, n) {
    let r = n(e, t);
    if (!r || 0 === r.length) return "";
    for (let i of r)
        if (i.route.path && "*" !== i.route.path) {
            let r = _w(i.route.path || ""),
                o = _f(t.pathname, _C(i.pathnameBase));
            if (t.pathname === o) return _E(o);
            return _E(_E(r || "") + _C(_A(e.filter(e => e !== i.route), {
                pathname: o
            }, n)))
        }
    return ""
}

function _M(e, t, n) {
    return n ? _f(e.pathname, t) : e.pathname || ""
}

function _P(e, t, n, r, i) {
    let o, {
        matchRoutes: a,
        stripBasename: s,
        basename: l,
        lazyRouteManifest: u,
        enableAsyncRouteHandlers: c
    } = i;
    if (c && u && u.length > 0) {
        let t = function(e, t, n) {
            if (!e || !(null == t ? void 0 : t.length)) return null;
            let r = n ? _f(e, n) : e,
                i = _h.get(t);
            for (let e of (!i && (i = [...t].sort((e, t) => {
                    let n = __(e);
                    return __(t) - n
                }), _h.set(t, i), v7 && em.log("[React Router] Sorted route manifest by specificity:", i.length, "patterns")), i))
                if (function(e, t) {
                        if ("/" === t) return "/" === e || "" === e;
                        let n = _g(e),
                            r = _g(t);
                        if (r.length > 0 && "*" === r[r.length - 1]) {
                            let e = r.slice(0, -1);
                            if (n.length < e.length) return !1;
                            for (let [t, r] of e.entries())
                                if (!_m(n[t], r)) return !1;
                            return !0
                        }
                        if (n.length !== r.length) return !1;
                        for (let [e, t] of r.entries())
                            if (!_m(n[e], t)) return !1;
                        return !0
                    }(r, e)) return v7 && em.log("[React Router] Matched pathname", r, "to pattern", e), e;
            return v7 && em.log("[React Router] No manifest match found for pathname:", r), null
        }(e.pathname, u, l);
        if (t) return [(s ? "" : l) + t, "route"]
    }
    let d = "url",
        p = function(e, t, n) {
            let r = n(t, e);
            if (r) {
                for (let e of r)
                    if (_R(e.route) && _S(e)) return !0
            }
            return !1
        }(e, n, a);
    p && (o = _C(_A(n, e, a)), d = "route"), p && o || ([o, d] = function(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
            i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!e || 0 === e.length) return [i ? _f(t.pathname, r) : t.pathname, "url"];
        if (!n) return [_M(t, r, i), "url"];
        let o = "";
        for (let e of n) {
            let n = e.route;
            if (!n) continue;
            if (n.index) return function(e, t, n, r) {
                let i = e && e.length > 0 ? e : r ? _f(t, n) : t,
                    o = "/*" === i.slice(-2) ? i.slice(0, -2) : i;
                return o.length > 1 && "/" === o[o.length - 1] && (o = o.slice(0, -1)), [o, "route"]
            }(o, e.pathname, r, i);
            let a = n.path;
            if (!a || _I(a, e)) continue;
            let s = "/" === a[0] || "/" === o[o.length - 1] ? a : `/${a}`;
            if (o = _E(o) + _C(s), _E(t.pathname) === _E(r + e.pathname)) {
                if (_x(o) !== _x(e.pathname) && !_k(o)) return [(i ? "" : r) + s, "route"];
                return _I(o, e) && (o = o.slice(0, -1)), [(i ? "" : r) + o, "route"]
            }
        }
        return [_M(t, r, i), "url"]
    }(t, e, r, l, s));
    let f = function(e, t, n, r) {
        let i = t.filter(_R);
        if (!i.length) return;
        let o = r(i, e),
            a = null == o ? void 0 : o[o.length - 1];
        if (!a || !_S(a)) return;
        let s = _E(_w(a.route.path || ""));
        if (!s) return;
        let l = _C(s),
            u = s.split("/")[0],
            c = (null == u ? void 0 : u.startsWith(":")) && (null == n ? void 0 : n.split("/").includes(u));
        if (n === l || (null == n ? void 0 : n.startsWith(`${l}/`)) || c) return;
        let d = _f(e.pathname, _C(a.pathnameBase)) || "/",
            p = _A(t.filter(e => e !== a.route), {
                pathname: d
            }, r);
        return p ? _C(`${s}${_C(p)}`) : void 0
    }(e, n, o, a);
    return f ? [f, "route"] : [o || e.pathname, d]
}

function _N() {
    let e = rh(),
        t = e ? rd(e) : void 0;
    if (!t) return;
    let n = n7(t).attributes[nd];
    return "navigation" === n || "pageload" === n ? t : void 0
}

function _O(e, t) {
    if (e.handle && "object" == typeof e.handle)
        for (let n of Object.keys(e.handle)) {
            let r = e.handle[n];
            "function" != typeof r || r.__sentry_proxied__ || (e.handle[n] = function(e, t, n, r) {
                let i = new Proxy(e, {
                    apply(e, i, o) {
                        let a, s = function() {
                                let e = _b();
                                if (e) return e.targetPath ? {
                                    pathname: e.targetPath,
                                    search: "",
                                    hash: "",
                                    state: null,
                                    key: "default"
                                } : null;
                                if (void 0 !== ei) try {
                                    let e = ei.location;
                                    if (e) return {
                                        pathname: e.pathname,
                                        search: e.search || "",
                                        hash: e.hash || "",
                                        state: null,
                                        key: "default"
                                    }
                                } catch {
                                    v7 && em.warn("[React Router] Could not access window.location")
                                }
                                return null
                            }(),
                            l = (a = _b()) ? a.span : _N(),
                            u = e.apply(i, o);
                        return function(e, t, n, r, i, o) {
                            eC(e) ? e.then(e => {
                                Array.isArray(e) && r(e, t, i ?? void 0, o)
                            }).catch(e => {
                                v7 && em.warn(`Error resolving async handler '${n}' for route`, t, e)
                            }) : Array.isArray(e) && r(e, t, i ?? void 0, o)
                        }(u, t, n, r, s, l), u
                    }
                });
                return eN(i, "__sentry_proxied__", !0), i
            }(r, e, n, t))
        }
    if (Array.isArray(e.children))
        for (let n of e.children) _O(n, t)
}
let _D = new WeakMap;

function _L(e) {
    return e ? _D.get(e) : void 0
}
let _$ = (null == ei ? void 0 : ei.document) ? sw.useLayoutEffect : sw.useEffect,
    _F = new WeakMap,
    _U = new Set,
    _B = new WeakMap,
    _j = new WeakMap;

function _W(e) {
    (null == ei ? void 0 : ei.cancelAnimationFrame) ? ei.cancelAnimationFrame(e): clearTimeout(e)
}

function _H(e) {
    return `${e.pathname}${e.search||""}${e.hash||""}`
}

function _z(e) {
    return e.includes(":") || e.includes("*")
}

function _q(e, t) {
    let n = t.children || [],
        r = e.filter(e => !n.some(t => t === e || e.path && t.path === e.path || e.id && t.id === e.id));
    r.length > 0 && (t.children = [...n, ...r])
}

function _G(e, t) {
    let n = _B.get(e);
    n || (n = new Set, _B.set(e, n)), n.add(t), t.finally(() => {
        let n = _B.get(e);
        n && n.delete(t)
    })
}

function _V(e) {
    let t = new Promise(t => {
        _j.set(e, t)
    });
    _G(e, t)
}

function _Y(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        i = arguments.length > 4 ? arguments[4] : void 0;
    e.forEach(e => {
        _U.add(e), t.enableAsyncRouteHandlers && _O(e, (e, n, r, i) => _Y(e, t, n, r, i))
    }), n && _q(e, n);
    let o = i ?? _N();
    if (o) {
        let {
            end_timestamp: e,
            attributes: n
        } = n7(o);
        if (e) {
            v7 && em.warn("[React Router] Lazy handler resolved after span ended - skipping update");
            return
        }
        let a = n[nd],
            s = r;
        if (!s && !i && void 0 !== ei) {
            let e = ei.location;
            (null == e ? void 0 : e.pathname) && (s = {
                pathname: e.pathname
            })
        }
        s && ("pageload" === a ? _4({
            activeRootSpan: o,
            location: {
                pathname: s.pathname
            },
            routes: Array.from(_U),
            allRoutes: Array.from(_U),
            config: t
        }) : "navigation" === a && _K(o, s, Array.from(_U), !1, t))
    }
}

function _K(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = arguments.length > 4 ? arguments[4] : void 0,
        {
            name: o,
            end_timestamp: a,
            attributes: s
        } = n7(e),
        l = null == e ? void 0 : e.__sentry_navigation_pathname__;
    if (void 0 !== l && l !== t.pathname) {
        v7 && em.log(`[React Router] Not renaming the navigation span for "${l}" with the route of "${t.pathname}"`);
        return
    }
    let u = null == e ? void 0 : e.__sentry_navigation_name_set__,
        c = o && _T(o);
    if ((!u || r || c) && !a) {
        let r = i.matchRoutes(n, t),
            [a, l] = _P(t, n, n, r || [], i),
            d = s[nm];
        if (a && (!o || !u && ("route" !== d || "route" === l) || "route" !== d && "route" === l || "route" === d && "route" === l && c)) {
            let t = tA(),
                n = "route" !== l && !!t && iq(t);
            e.updateName(n ? lb : a), e.setAttribute(nm, l), "route" === l && e.setAttribute(nE, a), _T(a) || "route" !== l || eN(e, "__sentry_navigation_name_set__", !0)
        }
    }
}

function _J(e, t, n, r, i) {
    let o = !1,
        a = !!r && "pageload" === n7(r).attributes[nd],
        s = !1,
        l = null,
        u = null;
    e.subscribe(e => {
        if (!o) {
            let t = _N();
            t && "pageload" === n7(t).attributes[nd] ? a = !0 : a && ("POP" !== e.historyAction || s ? o = !0 : s = !0)
        }
        if ("PUSH" === e.historyAction || "POP" === e.historyAction && o) {
            let r = _H(e.location),
                o = () => {
                    u !== r && (u = r, l = null, _2({
                        location: e.location,
                        routes: t,
                        navigationType: e.historyAction,
                        version: n,
                        allRoutes: Array.from(_U),
                        config: i
                    }))
                };
            if ("idle" !== e.navigation.state) u !== r && (u = null), null !== l && _W(l), l = (null == ei ? void 0 : ei.requestAnimationFrame) ? ei.requestAnimationFrame(o) : setTimeout(o, 0);
            else null !== l && (_W(l), l = null), o()
        }
    })
}

function _X(e, t) {
    return function(n, r) {
        let i = _L(tA());
        if (!i) return v7 && em.warn(`reactRouter${t?`V${t}`:""}Instrumentation was unable to wrap the \`createRouter\` function because the React Router browser tracing integration was not set up. Make sure \`Sentry.init()\` runs before the router is created.`), e(n, r);
        let o = { ...i,
            basename: (null == r ? void 0 : r.basename) || ""
        };
        if (_3(n), o.enableAsyncRouteHandlers)
            for (let e of n) _O(e, (e, t, n, r) => _Y(e, o, t, n, r));
        let a = _N();
        r && "patchRoutesOnNavigation" in r && "function" == typeof r.patchRoutesOnNavigation && a && (eN(a, "__sentry_may_have_lazy_routes__", !0), _V(a));
        let s = e(n, _1(r, !1, a, o));
        return "POP" === s.state.historyAction && a && _4({
            activeRootSpan: a,
            location: s.state.location,
            routes: n,
            allRoutes: Array.from(_U),
            config: o
        }), _J(s, n, t, a, o), s
    }
}

function _Q(e, t) {
    return function(n, r) {
        let i, o = _L(tA());
        if (!o) return v7 && em.warn(`reactRouter${t?`V${t}`:""}Instrumentation was unable to wrap the \`createMemoryRouter\` function because the React Router browser tracing integration was not set up. Make sure \`Sentry.init()\` runs before the router is created.`), e(n, r);
        let a = { ...o,
            basename: (null == r ? void 0 : r.basename) || ""
        };
        if (_3(n), a.enableAsyncRouteHandlers)
            for (let e of n) _O(e, (e, t, n, r) => _Y(e, a, t, n, r));
        let s = _N();
        r && "patchRoutesOnNavigation" in r && "function" == typeof r.patchRoutesOnNavigation && s && (eN(s, "__sentry_may_have_lazy_routes__", !0), _V(s));
        let l = e(n, _1(r, !0, s, a)),
            u = null == r ? void 0 : r.initialEntries,
            c = null == r ? void 0 : r.initialIndex,
            d = (null == u ? void 0 : u.length) === 1,
            p = void 0 !== c && (null == u ? void 0 : u[c]),
            f = (i = d ? u[0] : p ? u[c] : void 0) ? "string" == typeof i ? {
                pathname: i
            } : i : l.state.location,
            h = _N();
        return "POP" === l.state.historyAction && h && _4({
            activeRootSpan: h,
            location: f,
            routes: n,
            allRoutes: Array.from(_U),
            config: a
        }), _J(l, n, t, h, a), l
    }
}

function _Z(e, t) {
    let n = c_({ ...e,
            instrumentPageLoad: !1,
            instrumentNavigation: !1
        }),
        {
            useLocation: r,
            useNavigationType: i,
            createRoutesFromChildren: o,
            matchRoutes: a,
            stripBasename: s,
            enableAsyncRouteHandlers: l = !1,
            instrumentPageLoad: u = !0,
            instrumentNavigation: c = !0,
            lazyRouteTimeout: d,
            lazyRouteManifest: p
        } = e;
    return function(e, t) {
        let n = { ...e,
            ...t
        };
        for (let r in t) {
            let i = e[r],
                o = t[r];
            if ("function" == typeof i && "function" == typeof o) {
                let e = new Proxy(i, {
                    apply: (e, t, n) => (Reflect.apply(e, t, n), Reflect.apply(o, t, n))
                });
                n[r] = e
            }
        }
        return n
    }(n, {
        setup(t) {
            let n, u = e.finalTimeout ?? 3e4,
                f = (e.idleTimeout ?? 1e3) * 3,
                h = d ?? f;
            1 / 0 === h ? (n = u, v7 && em.log("[React Router] lazyRouteTimeout set to Infinity, capping at finalTimeout:", u, "ms to prevent indefinite hangs")) : Number.isNaN(h) ? (v7 && em.warn("[React Router] lazyRouteTimeout must be a number, falling back to default:", f), n = f) : h < 0 ? (v7 && em.warn("[React Router] lazyRouteTimeout must be non-negative or Infinity, got:", h, "falling back to:", f), n = f) : n = h, "function" == typeof r && "function" == typeof i && "function" == typeof o && "function" == typeof a ? _D.set(t, {
                useLocation: r,
                useNavigationType: i,
                createRoutesFromChildren: o,
                matchRoutes: a,
                stripBasename: s || !1,
                enableAsyncRouteHandlers: l,
                instrumentNavigation: c,
                lazyRouteTimeout: n,
                lazyRouteManifest: p,
                basename: ""
            }) : v7 && em.warn("[React Router] Skipping route instrumentation because `useLocation`, `useNavigationType`, `createRoutesFromChildren` or `matchRoutes` was not provided. Pass them to `reactRouterBrowserTracingIntegration`, or import it from `@sentry/react/react-router` to have them supplied automatically.")
        },
        afterAllSetup(e) {
            var n;
            let r = null == (n = ei.location) ? void 0 : n.pathname;
            u && r && cy(e, {
                name: iq(e) ? ly : r,
                attributes: {
                    [nm]: "url",
                    [nd]: ln,
                    [np]: `auto.pageload.react.reactrouter${t?`_v${t}`:""}`
                }
            })
        }
    })
}

function _0(e, t) {
    let n = e => {
            let {
                config: n,
                routes: r,
                locationArg: i
            } = e, o = sw.useRef(!0), a = n.useLocation(), s = n.useNavigationType(), l = "string" == typeof i || (null == i ? void 0 : i.pathname) ? i : a;
            return _$(() => {
                let e = _3(r);
                return () => _5(e)
            }), _$(() => {
                let e = "string" == typeof l ? {
                    pathname: l
                } : l;
                o.current ? (_4({
                    activeRootSpan: _N(),
                    location: e,
                    routes: r,
                    allRoutes: Array.from(_U),
                    config: n
                }), o.current = !1) : _2({
                    location: e,
                    routes: r,
                    navigationType: s,
                    version: t,
                    allRoutes: Array.from(_U),
                    config: n
                })
            }, [s, l]), null
        },
        r = t => {
            let {
                routes: r,
                locationArg: i
            } = t, o = _L(tA()), a = e(r, i);
            return sw.createElement(sw.Fragment, null, a, o ? sw.createElement(n, {
                config: o,
                routes: r,
                locationArg: i
            }) : null)
        };
    return (e, t) => sw.createElement(r, {
        routes: e,
        locationArg: t
    })
}

function _1(e, t, n, r) {
    if (!e || !("patchRoutesOnNavigation" in e) || "function" != typeof e.patchRoutesOnNavigation) return e || {};
    let i = e.patchRoutesOnNavigation;
    return { ...e,
        patchRoutesOnNavigation: async e => {
            let o = null == e ? void 0 : e.path,
                a = _N() ?? n;
            if (!t) {
                let t = null == e ? void 0 : e.patch,
                    n = null == e ? void 0 : e.matches;
                t && (e.patch = (e, i) => {
                    if (_3(i), n && n.length > 0) {
                        let t = n[n.length - 1],
                            r = null == t ? void 0 : t.route;
                        if (r) {
                            let t = Array.from(_U).find(t => {
                                let n = void 0 !== t.id && t.id === e,
                                    i = t === r,
                                    o = void 0 !== t.path && void 0 !== r.path && t.path === r.path;
                                return n || i || o
                            });
                            t && _q(i, t)
                        }
                    }
                    let s = a ? n7(a) : void 0;
                    return o && a && s && !s.end_timestamp && "navigation" === s.attributes[nd] && _K(a, {
                        pathname: o,
                        search: "",
                        hash: "",
                        state: null,
                        key: "default"
                    }, Array.from(_U), !0, r), t(e, i)
                })
            }
            let s = (async () => {
                let t, n, s = (n = {}, _y.length >= 10 && (v7 && em.warn("[React Router] Navigation context stack overflow - removing oldest context"), _y.shift()), _y.push({
                    token: n,
                    targetPath: o,
                    span: a
                }), n);
                try {
                    t = await i(e)
                } finally {
                    let e, t;
                    (null == (e = _y[_y.length - 1]) ? void 0 : e.token) === s && _y.pop(), a && (t = _j.get(a)) && (t(), _j.delete(a), a.__sentry_may_have_lazy_routes__ && (a.__sentry_may_have_lazy_routes__ = !1))
                }
                let l = a ? n7(a) : void 0;
                return a && l && !l.end_timestamp && "navigation" === l.attributes[nd] && o && _K(a, {
                    pathname: o,
                    search: "",
                    hash: "",
                    state: null,
                    key: "default"
                }, Array.from(_U), !1, r), t
            })();
            return a && _G(a, s), s
        }
    }
}

function _2(e) {
    let {
        location: t,
        routes: n,
        navigationType: r,
        version: i,
        config: o,
        matches: a,
        allRoutes: s
    } = e, l = Array.isArray(a) ? a : o.matchRoutes(s || n, t, o.basename), u = tA();
    if (!u || !o.instrumentNavigation) return;
    let c = _N();
    if ((!c || "pageload" !== n7(c).attributes[nd] || "POP" !== r) && ("PUSH" === r || "POP" === r) && l) {
        let e, [r, a] = _P(t, s || n, s || n, l, o),
            c = _H(t),
            d = _F.get(u),
            p = !!d && !d.isPlaceholder && !!n7(d.span).end_timestamp,
            {
                skip: f,
                shouldUpdate: h
            } = function(e, t, n, r) {
                if (!e) return {
                    skip: !1,
                    shouldUpdate: !1
                };
                if (e.locationKey === t && (e.isPlaceholder || !r)) {
                    var i;
                    let t = !!e.routeName && _T(e.routeName),
                        r = _T(n),
                        o = !!e.routeName && _z(e.routeName),
                        a = _z(n),
                        s = n !== e.routeName && n.length > ((null == (i = e.routeName) ? void 0 : i.length) || 0) && !r;
                    return {
                        skip: !0,
                        shouldUpdate: !!(e.routeName && (t && !r || !o && a || s))
                    }
                }
                return {
                    skip: !1,
                    shouldUpdate: !1
                }
            }(d, c, r, p);
        if (f) {
            if (h && d) {
                let e = d.routeName;
                if (d.isPlaceholder) d.routeName = r, v7 && em.log(`[Tracing] Updated placeholder navigation name from "${e}" to "${r}" (will apply to real span)`);
                else {
                    let t = "route" !== a && iq(u);
                    d.span.updateName(t ? lb : r), d.span.setAttribute(nm, a), "route" === a && d.span.setAttribute(nE, r), eN(d.span, "__sentry_navigation_name_set__", !0), d.routeName = r, v7 && em.log(`[Tracing] Updated navigation span name from "${e}" to "${r}"`)
                }
            } else v7 && em.log(`[Tracing] Skipping duplicate navigation for location: ${c}`);
            return
        }
        let m = {
            span: {
                end: () => {}
            },
            routeName: r,
            pathname: t.pathname,
            locationKey: c,
            isPlaceholder: !0
        };
        _F.set(u, m);
        try {
            e = cb(u, {
                name: "route" !== a && iq(u) ? lb : m.routeName,
                attributes: {
                    [nm]: a,
                    [nd]: lr,
                    [np]: `auto.navigation.react.reactrouter${i?`_v${i}`:""}`,
                    ..."route" === a && {
                        [nE]: m.routeName
                    }
                }
            })
        } catch (e) {
            throw _F.delete(u), e
        }
        e ? (eN(e, "__sentry_navigation_pathname__", t.pathname), _F.set(u, {
            span: e,
            routeName: m.routeName,
            pathname: t.pathname,
            locationKey: c
        }), _8(e, t, n, "navigation", o)) : _F.delete(u)
    }
}

function _3(e) {
    let t = [];
    return e.forEach(e => {
        (function e(t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Set;
            return n.has(t) || (n.add(t), t.children && !t.index && t.children.forEach(t => {
                e(t, n).forEach(e => {
                    n.add(e)
                })
            })), n
        })(e).forEach(e => {
            _U.add(e), t.push(e)
        })
    }), t
}

function _5(e) {
    e.forEach(e => {
        _U.delete(e)
    })
}

function _4(e) {
    let {
        activeRootSpan: t,
        location: n,
        routes: r,
        config: i,
        matches: o,
        allRoutes: a
    } = e, s = Array.isArray(o) ? o : i.matchRoutes(a || r, n, i.basename);
    if (s) {
        let [e, o] = _P(n, a || r, a || r, s, i);
        if (tT().setTransactionName(e || "/"), t) {
            let a = tA(),
                s = "route" !== o && !!a && iq(a);
            t.updateName(s ? ly : e), t.setAttribute(nm, o), "route" === o && t.setAttribute(nE, e), _8(t, n, r, "pageload", i)
        }
    } else t && _8(t, n, r, "pageload", i)
}

function _6(e, t, n, r, i, o, a, s) {
    try {
        let l = t.attributes[nm];
        if ("route" === l && n && !_T(n)) return;
        let u = Array.from(a),
            c = u.length > 0 ? u : i,
            d = s.matchRoutes(c, r, s.basename);
        if (!d) return;
        let [p, f] = _P(r, c, c, d, s), h = function(e, t, n, r) {
            let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            return !!n && (!!(!e && i || e && _T(e) && "route" === r && !_T(n)) || "route" !== t && "route" === r)
        }(n, l, p, f, !0), m = "pageload" === o || !t.end_timestamp;
        if (h && m) {
            let t = tA(),
                n = "route" !== f && !!t && iq(t),
                r = "pageload" === o ? ly : lb;
            e.updateName(n ? r : p), e.setAttribute(nm, f), "route" === f && e.setAttribute(nE, p)
        }
    } catch (e) {
        v7 && em.warn(`Error updating span details before ending: ${e}`)
    }
}

function _8(e, t, n, r, i) {
    let o = `__sentry_${r}_end_patched__`;
    if ((null == e ? void 0 : e[o]) || !e.end) return;
    let a = e.end.bind(e),
        s = !1;
    e.end = function() {
        for (var o = arguments.length, l = Array(o), u = 0; u < o; u++) l[u] = arguments[u];
        if (s) return;
        s = !0;
        let c = l.length > 0 ? l[0] : Date.now() / 1e3,
            d = n7(e),
            p = d.name,
            f = d.attributes[nm],
            h = () => {
                let t = tA();
                if (t && "navigation" === r) {
                    let n = _F.get(t);
                    (null == n ? void 0 : n.span) === e && _F.delete(t)
                }
            },
            m = _B.get(e),
            g = e.__sentry_may_have_lazy_routes__;
        if ((m && m.size > 0 || g) && p && (_T(p) || "route" !== f)) {
            let o;
            if (0 === i.lazyRouteTimeout) {
                _6(e, d, p, t, n, r, _U, i), h(), a(c);
                return
            }
            let s = new Promise(e => setTimeout(e, i.lazyRouteTimeout));
            if (m && m.size > 0) {
                let e = Promise.allSettled(m).then(() => {});
                o = 1 / 0 === i.lazyRouteTimeout ? e : Promise.race([e, s])
            } else o = s;
            o.then(() => {
                let o = n7(e);
                _6(e, o, o.name, t, n, r, _U, i), h(), a(c)
            }).catch(() => {
                h(), a(c)
            });
            return
        }
        _6(e, d, p, t, n, r, _U, i), h(), a(c)
    }, eN(e, o, !0)
}

function _7(e, t) {
    let n = e => {
            let {
                config: n,
                routeChildren: r
            } = e, i = sw.useRef(!0), o = n.useLocation(), a = n.useNavigationType(), s = n.createRoutesFromChildren(r);
            return _$(() => {
                let e = _3(s);
                return () => _5(e)
            }), _$(() => {
                i.current ? (_4({
                    activeRootSpan: _N(),
                    location: o,
                    routes: s,
                    allRoutes: Array.from(_U),
                    config: n
                }), i.current = !1) : _2({
                    location: o,
                    routes: s,
                    navigationType: a,
                    version: t,
                    allRoutes: Array.from(_U),
                    config: n
                })
            }, [o, a]), null
        },
        r = t => {
            let r = _L(tA());
            return sw.createElement(sw.Fragment, null, sw.createElement(e, { ...t
            }), r ? sw.createElement(n, {
                config: r,
                routeChildren: t.children
            }) : null)
        };
    return v2(r, e), r
}

function _9(e) {
    return _Z(e, "6")
}

function ye(e) {
    return _0(e, "6")
}

function yt(e) {
    return _X(e, "6")
}

function yn(e) {
    return _Q(e, "6")
}

function yr(e) {
    return _7(e, "6")
}

function yi(e) {
    return _Z(e, "7")
}

function yo(e) {
    return _7(e, "7")
}

function ya(e) {
    return _X(e, "7")
}

function ys(e) {
    return _Q(e, "7")
}

function yl(e) {
    return _0(e, "7")
}

function yu(e) {
    return _Z(e, "")
}

function yc(e) {
    return _7(e, "")
}

function yd(e) {
    return _X(e, "")
}

function yp(e) {
    return _Q(e, "")
}

function yf(e) {
    return _0(e, "")
}

function yh(e) {
    let t = {};
    try {
        e.forEach((e, n) => {
            "string" == typeof e && (t[n] = e)
        })
    } catch {}
    return t
}

function ym(e) {
    let t = Object.create(null);
    try {
        Object.entries(e).forEach(e => {
            let [n, r] = e;
            "string" == typeof r ? t[n] = r : "number" == typeof r && (t[n] = String(r))
        })
    } catch {}
    return t
}

function yg(e) {
    var t;
    let n = e.headers || {},
        r = ("string" == typeof n["x-forwarded-host"] ? n["x-forwarded-host"] : void 0) || ("string" == typeof n.host ? n.host : void 0),
        i = ("string" == typeof n["x-forwarded-proto"] ? n["x-forwarded-proto"] : void 0) || e.protocol || ((null == (t = e.socket) ? void 0 : t.encrypted) ? "https" : "http"),
        o = e.url || "",
        a = function(e) {
            let {
                url: t,
                protocol: n,
                host: r
            } = e;
            return (null == t ? void 0 : t.startsWith("http")) ? t : t && r ? `${n}://${r}${t}` : void 0
        }({
            url: o,
            host: r,
            protocol: i
        }),
        s = e.body || void 0,
        l = e.cookies;
    return {
        url: a,
        method: e.method,
        query_string: yv(o),
        headers: ym(n),
        cookies: l,
        data: s
    }
}

function yv(e) {
    if (e) try {
        return oC(new URL(e, "http://s.io").search)
    } catch {
        return
    }
}
async function y_() {
    try {
        sT && em.log("Flushing events..."), await rY(2e3), sT && em.log("Done flushing events")
    } catch (e) {
        sT && em.log("Error while flushing events:\n", e)
    }
}

function yy(e) {
    var t, n, r;
    "function" == typeof(null == (t = yb()) ? void 0 : t.waitUntil) ? (n = e, null == (r = yb()) || r.waitUntil(n)) : function(e) {
        var t;
        if ("string" != typeof EdgeRuntime) return;
        let n = ei[Symbol.for("@vercel/request-context")],
            r = null == n || null == (t = n.get) ? void 0 : t.call(n);
        (null == r ? void 0 : r.waitUntil) && r.waitUntil(e)
    }(e)
}

function yb() {
    var e;
    return null == (e = ei[Symbol.for("__cloudflare-context__")]) ? void 0 : e.ctx
}
e.s(["BrowserClient", 0, o9, "ErrorBoundary", 0, _e, "MULTIPLEXED_TRANSPORT_EXTRA_KEY", 0, pE, "OpenFeatureIntegrationHook", 0, vM, "Profiler", 0, v5, "SDK_VERSION", 0, er, "SEMANTIC_ATTRIBUTE_SENTRY_OP", 0, nR, "SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN", 0, nx, "SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE", 0, nT, "Scope", 0, td, "WINDOW", 0, ei, "addBreadcrumb", 0, ii, "addEventProcessor", 0, rQ, "addIntegration", 0, r6, "bfcacheMetricsIntegration", 0, vp, "bindScopeToEmitter", 0, pC, "breadcrumbsIntegration", 0, aw, "browserApiErrorsIntegration", 0, ak, "browserProfilingIntegration", 0, vT, "browserSessionIntegration", 0, aD, "browserTracingIntegration", 0, c_, "buildLaunchDarklyFlagUsedHandler", 0, vC, "captureConsoleIntegration", 0, pP, "captureEvent", 0, r$, "captureException", 0, rD, "captureFeedback", 0, cV, "captureMessage", 0, rL, "captureReactException", 0, vj, "captureSession", 0, r2, "chromeStackLineParser", 0, a9, "close", 0, rK, "consoleIntegration", 0, ig, "consoleLoggingIntegration", 0, p$, "contextLinesIntegration", 0, fk, "continueTrace", 0, sq, "createCachedRouteProvider", 0, oH, "createConsolaReporter", 0, pU, "createReduxEnhancer", 0, _r, "createTransport", 0, iZ, "createUrlRouteProvider", 0, oW, "createUserFeedbackEnvelope", 0, fp, "cultureContextIntegration", 0, aU, "dedupeIntegration", 0, i_, "defaultRequestInstrumentationOptions", 0, ch, "defaultStackLineParsers", 0, su, "defaultStackParser", 0, sc, "diagnoseSdkConnectivity", 0, v$, "elementTimingIntegration", 0, vt, "endSession", 0, r0, "eventFiltersIntegration", 0, r7, "eventFromException", 0, o0, "eventFromMessage", 0, o1, "exceptionFromError", 0, oV, "extraErrorDataIntegration", 0, pW, "featureFlagsIntegration", 0, pV, "feedbackAsyncIntegration", 0, pS, "feedbackIntegration", 0, pw, "feedbackSyncIntegration", 0, pw, "fetchStreamPerformanceIntegration", 0, vu, "flush", 0, rY, "forceLoad", 0, sb, "functionToStringIntegration", 0, ir, "geckoStackLineParser", 0, sn, "getAbsoluteUrl", 0, ck, "getActiveSpan", 0, rh, "getClient", 0, tA, "getCurrentScope", 0, tT, "getDefaultIntegrations", 0, s_, "getFeedback", 0, di, "getGlobalScope", 0, tR, "getIsolationScope", 0, tI, "getReplay", 0, gD, "getRootSpan", 0, rd, "getRouteProvider", 0, oU, "getSpanDescendants", 0, rc, "getSpanStatusFromHttpCode", 0, nN, "getTraceData", 0, cn, "globalHandlersIntegration", 0, aV, "graphqlClientIntegration", 0, fM, "growthbookIntegration", 0, vD, "httpClientIntegration", 0, fy, "httpContextIntegration", 0, aZ, "init", 0, sE, "instrumentOutgoingRequests", 0, cm, "instrumentSupabaseClient", 0, p3, "interactionsIntegration", 0, vn, "isBotUserAgent", 0, lM, "isEnabled", 0, rX, "isInitialized", 0, rJ, "lastEventId", 0, rV, "launchDarklyIntegration", 0, vx, "lazyLoadIntegration", 0, pb, "linkedErrorsIntegration", 0, a3, "logger", () => p8, "makeBrowserOfflineTransport", 0, v_, "makeFetchTransport", 0, sm, "makeMultiplexedTransport", 0, pT, "metrics", () => p9, "moduleMetadataIntegration", 0, fi, "normalizeStringifyValue", 0, sv, "onLoad", 0, sS, "openFeatureIntegration", 0, vA, "opera10StackLineParser", 0, sa, "opera11StackLineParser", 0, sl, "parameterize", 0, p6, "reactErrorHandler", 0, vW, "reactRouterBrowserTracingIntegration", 0, yu, "reactRouterV3BrowserTracingIntegration", 0, _i, "reactRouterV4BrowserTracingIntegration", 0, _u, "reactRouterV5BrowserTracingIntegration", 0, _c, "reactRouterV6BrowserTracingIntegration", 0, _9, "reactRouterV7BrowserTracingIntegration", 0, yi, "registerSpanErrorInstrumentation", 0, lC, "registerWebWorker", 0, vB, "replayCanvasIntegration", 0, g9, "replayIntegration", 0, gP, "reportPageLoaded", 0, vi, "reportingObserverIntegration", 0, fm, "resolveCurrentRoute", 0, oj, "resolveRoute", 0, oB, "rewriteFramesIntegration", 0, cH, "sendFeedback", 0, c5, "setActiveSpanInBrowser", 0, vo, "setAttribute", 0, rz, "setAttributes", 0, rH, "setContext", 0, rF, "setConversationId", 0, rG, "setCurrentClient", 0, om, "setExtra", 0, rB, "setExtras", 0, rU, "setHttpStatus", 0, nO, "setMeasurement", 0, sL, "setRouteProvider", 0, oF, "setTag", 0, rW, "setTags", 0, rj, "setUser", 0, rq, "showReportDialog", 0, ff, "spanStreamingIntegration", 0, sO, "spanToBaggageHeader", 0, rC, "spanToJSON", 0, n7, "spanToStaticSpanJSON", 0, n8, "spanToTraceHeader", 0, n2, "spotlightBrowserIntegration", 0, vR, "startBrowserTracingNavigationSpan", 0, cb, "startBrowserTracingPageLoadSpan", 0, cy, "startInactiveSpan", 0, s9, "startNewTrace", 0, sK, "startSession", 0, rZ, "startSpan", 0, s8, "startSpanManual", 0, s7, "statsigIntegration", 0, vL, "supabaseIntegration", 0, p5, "suppressTracing", 0, sV, "tanstackRouterBrowserTracingIntegration", 0, _a, "thirdPartyErrorFilterIntegration", 0, fo, "uiProfiler", 0, fd, "unleashIntegration", 0, vP, "updateSpanName", 0, rm, "useProfiler", 0, v6, "userTimingIntegration", 0, vr, "viewHierarchyIntegration", 0, fP, "webVitalsIntegration", 0, u9, "webWorkerIntegration", 0, vF, "winjsStackLineParser", 0, si, "withActiveSpan", 0, sG, "withErrorBoundary", 0, _t, "withIsolationScope", 0, tC, "withProfiler", 0, v4, "withScope", 0, tx, "withSentryReactRouterV6Routing", 0, yr, "withSentryReactRouterV7Routing", 0, yo, "withSentryRouting", 0, _p, "withStaticSpan", 0, iU, "withStreamedSpan", 0, iB, "wrapCreateBrowserRouter", 0, yd, "wrapCreateBrowserRouterV6", 0, yt, "wrapCreateBrowserRouterV7", 0, ya, "wrapCreateMemoryRouter", 0, yp, "wrapCreateMemoryRouterV6", 0, yn, "wrapCreateMemoryRouterV7", 0, ys, "wrapReactRouterRouting", 0, yc, "wrapUseRoutes", 0, yf, "wrapUseRoutesV6", 0, ye, "wrapUseRoutesV7", 0, yl, "zodErrorsIntegration", 0, fc], 293336), e.i(293336);
let yS = Symbol.for("NextInternalRequestMeta");

function yw(e) {
    var t;
    let n = yg(e),
        r = null == (t = e[yS]) ? void 0 : t.initURL,
        i = "string" == typeof r ? oP(r).relative : void 0;
    if (!i || i === e.url) return n;
    let {
        url: o,
        query_string: a
    } = yg({
        url: i,
        headers: e.headers,
        socket: e.socket
    });
    return { ...n,
        url: o,
        query_string: a
    }
}
async function yE(e) {
    let {
        req: t,
        res: n,
        err: r
    } = e, i = (null == n ? void 0 : n.statusCode) || e.statusCode;
    if (i && i < 500 || !e.pathname) return;
    if (r && te(r)) {
        yy(y_());
        let e = "object" == typeof r ? r.__sentry_event_id__ : void 0;
        return "string" == typeof e ? (tI().setLastEventId(e), e) : tI().lastEventId()
    }
    let o = tx(e => {
        if (t) {
            let n = yw(t);
            e.setSDKProcessingMetadata({
                normalizedRequest: n
            })
        }
        return rD(r || `_error.js called with falsy error (${r})`, {
            mechanism: {
                type: "auto.function.nextjs.underscore_error",
                handled: !1,
                data: {
                    function: "_error.getInitialProps"
                }
            }
        })
    });
    return yy(y_()), o
}
async function yk(e, t, n) {
    return tC(async r => {
        var i;
        let o, a, s = null == (i = tA()) ? void 0 : i.getDataCollectionOptions().httpBodies.includes("outgoingResponse"),
            l = {};
        try {
            let e = await t.headers;
            o = (null == e ? void 0 : e.get("sentry-trace")) ?? void 0, a = null == e ? void 0 : e.get("baggage"), null == e || e.forEach((e, t) => {
                l[t] = e
            })
        } catch {
            sT && em.warn("Sentry wasn't able to extract the tracing headers for a server action. Will not trace this request.")
        }
        return r.setTransactionName(`serverAction/${e}`), r.setSDKProcessingMetadata({
            normalizedRequest: {
                headers: l
            }
        }), (rh() ? (e, t) => t() : sq)({
            sentryTrace: o,
            baggage: a
        }, async () => {
            try {
                let r = tA(),
                    i = `serverAction/${e}`;
                return await sW({
                    name: r && iq(r) ? e : i,
                    forceTransaction: !0,
                    attributes: {
                        "sentry.kind": "server",
                        [nd]: "function",
                        [nl]: i,
                        [ne]: e,
                        [nm]: "route",
                        [np]: "auto.function.nextjs.server_action"
                    }
                }, async e => {
                    let r = await sD(n, t => {
                        let n = sx(t);
                        sR(t) ? e.setStatus({
                            code: 2,
                            message: "not_found"
                        }) : n ? e.setStatus(nN(n)) : sC(t) || sM(t) ? (e.setStatus({
                            code: 1
                        }), e.end()) : (e.setStatus({
                            code: 2,
                            message: "internal_error"
                        }), rD(t, {
                            mechanism: {
                                handled: !1,
                                type: "auto.function.nextjs.server_action"
                            }
                        }))
                    });
                    return (void 0 !== t.recordResponse ? t.recordResponse : s) && tI().setExtra("server_action_result", r), t.formData && t.formData.forEach((e, t) => {
                        tI().setExtra(`server_action_form_data.${t}`, "string" == typeof e ? e : "[non-string value]")
                    }), r
                })
            } finally {
                yy(y_())
            }
        })
    })
}

function yT(e, t) {
    let n = tT(),
        r = tA();
    if (r)
        if (r.captureCheckIn) return r.captureCheckIn(e, t, n);
        else el && em.warn("Cannot capture check-in. Client does not support sending check-ins.");
    else el && em.warn("Cannot capture check-in. No client defined.");
    return e3()
}
var yI = e.i(54042);

function yR() {
    return en.default.env.NEXT_PHASE === yI.PHASE_PRODUCTION_BUILD
}

function yx(e) {
    return async function() {
        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        try {
            return await e.apply(this, n)
        } catch (t) {
            throw rD(t, {
                mechanism: {
                    handled: !1,
                    type: "auto.function.nextjs.wrapped",
                    data: {
                        function: e.name
                    }
                }
            }), t
        }
    }
}

function yC(e, t, n, r) {
    return async function() {
        for (var n = arguments.length, i = Array(n), o = 0; o < n; o++) i[o] = arguments[o];
        let a = yw(t);
        tT().setTransactionName(`${r.dataFetchingMethodName} (${r.dataFetcherRouteName})`), tI().setSDKProcessingMetadata({
            normalizedRequest: a
        });
        let s = rh();
        s && "/_error" !== r.requestedRouteName && rd(s).setAttribute("sentry.route_backfill", r.requestedRouteName);
        let {
            "sentry-trace": l,
            baggage: u
        } = cn();
        return {
            sentryTrace: l,
            baggage: u,
            data: await e.apply(this, i)
        }
    }
}
async function yA(e, t) {
    try {
        return await e(...t)
    } catch (e) {
        throw rD(e, {
            mechanism: {
                handled: !1,
                type: "auto.function.nextjs.data_fetcher"
            }
        }), e
    }
}

function yM(e, t) {
    eI(e) && eN(e, "__sentry_event_id__", t)
}
e.s(["BrowserClient", 0, o9, "ErrorBoundary", 0, _e, "MULTIPLEXED_TRANSPORT_EXTRA_KEY", 0, pE, "OpenFeatureIntegrationHook", 0, vM, "Profiler", 0, v5, "SDK_VERSION", 0, er, "SEMANTIC_ATTRIBUTE_SENTRY_OP", 0, nR, "SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN", 0, nx, "SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE", 0, nT, "Scope", 0, td, "WINDOW", 0, ei, "addBreadcrumb", 0, ii, "addEventProcessor", 0, rQ, "addIntegration", 0, r6, "bfcacheMetricsIntegration", 0, vp, "bindScopeToEmitter", 0, pC, "breadcrumbsIntegration", 0, aw, "browserApiErrorsIntegration", 0, ak, "browserProfilingIntegration", 0, vT, "browserSessionIntegration", 0, aD, "browserTracingIntegration", 0, cU, "buildLaunchDarklyFlagUsedHandler", 0, vC, "captureConsoleIntegration", 0, pP, "captureEvent", 0, r$, "captureException", 0, rD, "captureFeedback", 0, cV, "captureMessage", 0, rL, "captureReactException", 0, vj, "captureRequestError", 0, function(e, t, n) {
    sM(e) || tx(r => {
        r.setSDKProcessingMetadata({
            normalizedRequest: {
                headers: ym(t.headers),
                method: t.method
            }
        }), r.setContext("nextjs", {
            request_path: ok(t.path, r.getClient()),
            router_kind: n.routerKind,
            router_path: n.routePath,
            route_type: n.routeType
        }), r.setTransactionName(`${t.method} ${n.routePath}`), rD(e, {
            mechanism: {
                handled: !1,
                type: "auto.function.nextjs.on_request_error"
            }
        }), yy(y_())
    })
}, "captureRouterTransitionStart", 0, function(e, t) {
    $ && $(e, t)
}, "captureSession", 0, r2, "captureUnderscoreErrorException", 0, yE, "chromeStackLineParser", 0, a9, "close", 0, rK, "consoleIntegration", 0, ig, "consoleLoggingIntegration", 0, p$, "contextLinesIntegration", 0, fk, "continueTrace", 0, sq, "createCachedRouteProvider", 0, oH, "createConsolaReporter", 0, pU, "createReduxEnhancer", 0, _r, "createTransport", 0, iZ, "createUrlRouteProvider", 0, oW, "createUserFeedbackEnvelope", 0, fp, "cultureContextIntegration", 0, aU, "dedupeIntegration", 0, i_, "defaultRequestInstrumentationOptions", 0, ch, "defaultStackLineParsers", 0, su, "defaultStackParser", 0, sc, "diagnoseSdkConnectivity", 0, v$, "elementTimingIntegration", 0, vt, "endSession", 0, r0, "eventFiltersIntegration", 0, r7, "eventFromException", 0, o0, "eventFromMessage", 0, o1, "exceptionFromError", 0, oV, "extraErrorDataIntegration", 0, pW, "featureFlagsIntegration", 0, pV, "feedbackAsyncIntegration", 0, pS, "feedbackIntegration", 0, pw, "feedbackSyncIntegration", 0, pw, "fetchStreamPerformanceIntegration", 0, vu, "flush", 0, rY, "forceLoad", 0, sb, "functionToStringIntegration", 0, ir, "geckoStackLineParser", 0, sn, "getAbsoluteUrl", 0, ck, "getActiveSpan", 0, rh, "getClient", 0, tA, "getCurrentScope", 0, tT, "getDefaultIntegrations", 0, s_, "getFeedback", 0, di, "getGlobalScope", 0, tR, "getIsolationScope", 0, tI, "getReplay", 0, gD, "getRootSpan", 0, rd, "getRouteProvider", 0, oU, "getSpanDescendants", 0, rc, "getSpanStatusFromHttpCode", 0, nN, "getTraceData", 0, cn, "globalHandlersIntegration", 0, aV, "graphqlClientIntegration", 0, fM, "growthbookIntegration", 0, vD, "httpClientIntegration", 0, fy, "httpContextIntegration", 0, aZ, "init", 0, function(e) {
    let t, n, r, i, o;
    !sT && e.debug && ed(() => {
        console.warn("[@sentry/nextjs] You have enabled `debug: true`, but Sentry debug logging was removed from your bundle (likely via `bundleSizeOptimizations.excludeDebugStatements: true` or `webpack.treeshake.removeDebugLogging: true`). Set that option to `false` to see Sentry debug output.")
    }), ("u" < typeof __SENTRY_TRACING__ || __SENTRY_TRACING__) && function() {
        ei.document && function(e) {
            let t = cN(e) || e,
                n = cq.get(t);
            if (void 0 !== n) return n;
            let r = cP();
            if (!(null == r ? void 0 : r.isrRoutes) || !Array.isArray(r.isrRoutes) || 0 === r.isrRoutes.length) return cq.set(t, !1), !1;
            let i = r.isrRoutes.includes(t);
            return cq.set(t, i), i
        }(ei.location.pathname) && (e("sentry-trace"), e("baggage"));

        function e(e) {
            try {
                let t = ei.document.querySelector(`meta[name="${e}"]`);
                t && t.remove()
            } catch {}
        }
    }();
    let a = {
        environment: e.environment || en.default.env.SENTRY_ENVIRONMENT || en.default.env.NEXT_PUBLIC_VERCEL_TARGET_ENV || en.default.env.NEXT_PUBLIC_VERCEL_ENV || "production",
        defaultIntegrations: (t = s_(e), ("u" < typeof __SENTRY_TRACING__ || __SENTRY_TRACING__) && t.push(cU()), n = ei._sentryRewriteFramesAssetPrefixPath || "", r = en.default.env._sentryAssetPrefix || ei._sentryAssetPrefix, i = en.default.env._sentryBasePath || ei._sentryBasePath, o = "true" === en.default.env._experimentalThirdPartyOriginStackFrames || "true" === ei._experimentalThirdPartyOriginStackFrames, t.push((e => {
            let {
                assetPrefix: t,
                basePath: n,
                rewriteFramesAssetPrefixPath: r,
                experimentalThirdPartyOriginStackFrames: i
            } = e;
            return { ...cH({
                    iteratee: e => {
                        var o, a, s, l, u, c, d;
                        if (i) {
                            let r = "u" > typeof window && window.location ? window.location.origin : "";
                            if ((null == (s = e.filename) ? void 0 : s.startsWith(r)) && !e.filename.endsWith(".js")) return e;
                            if (t)(null == (l = e.filename) ? void 0 : l.startsWith(t)) && (e.filename = e.filename.replace(t, "app://"));
                            else if (n) try {
                                let {
                                    origin: t
                                } = new URL(e.filename);
                                t === r && (e.filename = null == (u = e.filename) ? void 0 : u.replace(t, "app://").replace(n, ""))
                            } catch {}
                        } else try {
                            let {
                                origin: t
                            } = new URL(e.filename);
                            e.filename = null == (c = e.filename) ? void 0 : c.replace(t, "app://").replace(r, "")
                        } catch {}
                        return i ? (null == (d = e.filename) ? void 0 : d.includes("/_next")) && (e.filename = decodeURI(e.filename)) : (null == (o = e.filename) ? void 0 : o.startsWith("app:///_next")) && (e.filename = decodeURI(e.filename)), (null == (a = e.filename) ? void 0 : a.match(cz)) && (e.in_app = !1), e
                    }
                }),
                name: "NextjsClientStackFrameNormalization"
            }
        })({
            assetPrefix: r,
            basePath: i,
            rewriteFramesAssetPrefixPath: n,
            experimentalThirdPartyOriginStackFrames: o
        })), t),
        release: "8acdcd60741d4d58239951e096b06a5a041f6d88",
        routeProvider: oW(cG),
        ...e
    };
    ! function(e) {
        let t = en.default.env._sentryRewritesTunnelPath || ei._sentryRewritesTunnelPath;
        if (t && e.dsn) {
            let n = tH(e.dsn);
            if (!n) return;
            let r = n.host.match(/^o(\d+)\.ingest(?:\.([a-z]{2}))?\.sentry\.io$/);
            if (r) {
                let i = r[1],
                    o = r[2],
                    a = `${t}?o=${i}&p=${n.projectId}`;
                o && (a += `&r=${o}`), e.tunnel = a, sT && em.log(`Tunneling events to "${a}"`)
            } else sT && em.warn("Provided DSN is not a Sentry SaaS DSN. Will not tunnel events.")
        }
    }(a), eg(a, "nextjs", ["nextjs", "react"]), a.ignoreSpans = [...a.ignoreSpans || [], /^\/404$/];
    let s = sE(a),
        l = (e, t) => {
            var n, r, i;
            return sC(null == t ? void 0 : t.originalException) || (null == (i = e.exception) || null == (r = i.values) || null == (n = r[0]) ? void 0 : n.value) === "NEXT_REDIRECT" ? null : e
        };
    l.id = "NextRedirectErrorFilter", null == s || s.addEventProcessor(l);
    try {
        tR().setTag("turbopack", !0)
    } catch {}
    return s
}, "instrumentOutgoingRequests", 0, cm, "instrumentSupabaseClient", 0, p3, "interactionsIntegration", 0, vn, "isBotUserAgent", 0, lM, "isEnabled", 0, rX, "isInitialized", 0, rJ, "lastEventId", 0, rV, "launchDarklyIntegration", 0, vx, "lazyLoadIntegration", 0, pb, "linkedErrorsIntegration", 0, a3, "logger", () => p8, "makeBrowserOfflineTransport", 0, v_, "makeFetchTransport", 0, sm, "makeMultiplexedTransport", 0, pT, "metrics", () => p9, "moduleMetadataIntegration", 0, fi, "normalizeStringifyValue", 0, sv, "onLoad", 0, sS, "openFeatureIntegration", 0, vA, "opera10StackLineParser", 0, sa, "opera11StackLineParser", 0, sl, "parameterize", 0, p6, "reactErrorHandler", 0, vW, "reactRouterBrowserTracingIntegration", 0, yu, "reactRouterV3BrowserTracingIntegration", 0, _i, "reactRouterV4BrowserTracingIntegration", 0, _u, "reactRouterV5BrowserTracingIntegration", 0, _c, "reactRouterV6BrowserTracingIntegration", 0, _9, "reactRouterV7BrowserTracingIntegration", 0, yi, "registerSpanErrorInstrumentation", 0, lC, "registerWebWorker", 0, vB, "replayCanvasIntegration", 0, g9, "replayIntegration", 0, gP, "reportPageLoaded", 0, vi, "reportingObserverIntegration", 0, fm, "resolveCurrentRoute", 0, oj, "resolveRoute", 0, oB, "rewriteFramesIntegration", 0, cH, "sendFeedback", 0, c5, "setActiveSpanInBrowser", 0, vo, "setAttribute", 0, rz, "setAttributes", 0, rH, "setContext", 0, rF, "setConversationId", 0, rG, "setCurrentClient", 0, om, "setExtra", 0, rB, "setExtras", 0, rU, "setHttpStatus", 0, nO, "setMeasurement", 0, sL, "setRouteProvider", 0, oF, "setTag", 0, rW, "setTags", 0, rj, "setUser", 0, rq, "showReportDialog", 0, ff, "spanStreamingIntegration", 0, sO, "spanToBaggageHeader", 0, rC, "spanToJSON", 0, n7, "spanToStaticSpanJSON", 0, n8, "spanToTraceHeader", 0, n2, "spotlightBrowserIntegration", 0, vR, "startBrowserTracingNavigationSpan", 0, cb, "startBrowserTracingPageLoadSpan", 0, cy, "startInactiveSpan", 0, s9, "startNewTrace", 0, sK, "startSession", 0, rZ, "startSpan", 0, s8, "startSpanManual", 0, s7, "statsigIntegration", 0, vL, "supabaseIntegration", 0, p5, "suppressTracing", 0, sV, "tanstackRouterBrowserTracingIntegration", 0, _a, "thirdPartyErrorFilterIntegration", 0, fo, "uiProfiler", 0, fd, "unleashIntegration", 0, vP, "updateSpanName", 0, rm, "useProfiler", 0, v6, "userTimingIntegration", 0, vr, "viewHierarchyIntegration", 0, fP, "webVitalsIntegration", 0, u9, "webWorkerIntegration", 0, vF, "winjsStackLineParser", 0, si, "withActiveSpan", 0, sG, "withErrorBoundary", 0, _t, "withIsolationScope", 0, tC, "withProfiler", 0, v4, "withScope", 0, tx, "withSentryReactRouterV6Routing", 0, yr, "withSentryReactRouterV7Routing", 0, yo, "withSentryRouting", 0, _p, "withServerActionInstrumentation", 0, function() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    if ("function" == typeof t[1]) {
        let [e, n] = t;
        return yk(e, {}, n)
    } {
        let [e, n, r] = t;
        return yk(e, n, r)
    }
}, "withStaticSpan", 0, iU, "withStreamedSpan", 0, iB, "wrapApiHandlerWithSentryVercelCrons", 0, function(e, t) {
    return new Proxy(e, {
        apply: (e, n, r) => {
            let i;
            if (!(null == r ? void 0 : r[0])) return e.apply(n, r);
            let [o] = r, a = "nextUrl" in o ? o.nextUrl.pathname : o.url, s = "nextUrl" in o ? o.headers.get("user-agent") : o.headers["user-agent"];
            if (!t || !(null == s ? void 0 : s.includes("vercel-cron"))) return e.apply(n, r);
            let l = t.find(e => e.path === a);
            if (!(null == l ? void 0 : l.path) || !l.schedule) return e.apply(n, r);
            let u = l.path,
                c = yT({
                    monitorSlug: u,
                    status: "in_progress"
                }, {
                    maxRuntime: 720,
                    schedule: {
                        type: "crontab",
                        value: l.schedule
                    }
                }),
                d = eB() / 1e3,
                p = () => {
                    yT({
                        checkInId: c,
                        monitorSlug: u,
                        status: "error",
                        duration: eB() / 1e3 - d
                    })
                };
            try {
                i = e.apply(n, r)
            } catch (e) {
                throw p(), e
            }
            return eI(i) && "then" in i ? Promise.resolve(i).then(() => {
                yT({
                    checkInId: c,
                    monitorSlug: u,
                    status: "ok",
                    duration: eB() / 1e3 - d
                })
            }, () => {
                p()
            }) : yT({
                checkInId: c,
                monitorSlug: u,
                status: "ok",
                duration: eB() / 1e3 - d
            }), i
        }
    })
}, "wrapAppGetInitialPropsWithSentry", 0, function(e) {
    return new Proxy(e, {
        apply: async (e, t, n) => {
            if (yR()) return e.apply(t, n);
            let [r] = n, {
                req: i,
                res: o
            } = r.ctx, a = yx(e);
            if (!i || !o) return a.apply(t, n); {
                let e = yC(a, i, o, {
                        dataFetcherRouteName: "/_app",
                        requestedRouteName: r.ctx.pathname,
                        dataFetchingMethodName: "getInitialProps"
                    }),
                    {
                        data: s,
                        sentryTrace: l,
                        baggage: u
                    } = await e.apply(t, n);
                return eI(s) && (s.pageProps || (s.pageProps = {}), l && (s.pageProps._sentryTraceData = l), u && (s.pageProps._sentryBaggage = u)), s
            }
        }
    })
}, "wrapCreateBrowserRouter", 0, yd, "wrapCreateBrowserRouterV6", 0, yt, "wrapCreateBrowserRouterV7", 0, ya, "wrapCreateMemoryRouter", 0, yp, "wrapCreateMemoryRouterV6", 0, yn, "wrapCreateMemoryRouterV7", 0, ys, "wrapDocumentGetInitialPropsWithSentry", 0, function(e) {
    return new Proxy(e, {
        apply: async (e, t, n) => {
            if (yR()) return e.apply(t, n);
            let [r] = n, {
                req: i,
                res: o
            } = r, a = yx(e);
            if (!i || !o) return a.apply(t, n); {
                let e = yC(a, i, o, {
                        dataFetcherRouteName: "/_document",
                        requestedRouteName: r.pathname,
                        dataFetchingMethodName: "getInitialProps"
                    }),
                    {
                        data: s
                    } = await e.apply(t, n);
                return s
            }
        }
    })
}, "wrapErrorGetInitialPropsWithSentry", 0, function(e) {
    return new Proxy(e, {
        apply: async (e, t, n) => {
            if (yR()) return e.apply(t, n);
            let [r] = n, {
                req: i,
                res: o
            } = r, a = yx(e);
            if (!i || !o) return a.apply(t, n); {
                let e = yC(a, i, o, {
                        dataFetcherRouteName: "/_error",
                        requestedRouteName: r.pathname,
                        dataFetchingMethodName: "getInitialProps"
                    }),
                    {
                        data: s,
                        baggage: l,
                        sentryTrace: u
                    } = await e.apply(t, n);
                return eI(s) && (u && (s._sentryTraceData = u), l && (s._sentryBaggage = l)), s
            }
        }
    })
}, "wrapGenerationFunctionWithSentry", 0, function(e, t) {
    return new Proxy(e, {
        apply: (e, n, r) => {
            let i, o = tI();
            try {
                var a, s;
                i = null == (s = t.requestAsyncStorage) || null == (a = s.getStore()) ? void 0 : a.headers
            } catch {}
            let l = i ? yh(i) : void 0;
            return o.setSDKProcessingMetadata({
                normalizedRequest: {
                    headers: l
                }
            }), sD(() => e.apply(n, r), e => {
                let n = rh(),
                    {
                        componentRoute: r,
                        componentType: i,
                        generationFunctionIdentifier: a
                    } = t;
                if (o.setTransactionName(`${i}.${a} (${r})`), sR(e)) {
                    null == n || n.setStatus({
                        code: 2,
                        message: "not_found"
                    });
                    return
                }
                let s = sx(e);
                if (s) {
                    null == n || n.setStatus(nN(s));
                    return
                }
                if (sC(e)) {
                    null == n || n.setStatus({
                        code: 1
                    });
                    return
                }
                sM(e) || (null == n || n.setStatus({
                    code: 2,
                    message: "internal_error"
                }), rD(e, {
                    mechanism: {
                        handled: !1,
                        type: "auto.function.nextjs.generation_function",
                        data: {
                            function: a
                        }
                    }
                }))
            }, () => {
                yy(y_())
            })
        }
    })
}, "wrapGetInitialPropsWithSentry", 0, function(e) {
    return new Proxy(e, {
        apply: async (e, t, n) => {
            if (yR()) return e.apply(t, n);
            let [r] = n, {
                req: i,
                res: o
            } = r, a = yx(e);
            if (!i || !o) return a.apply(t, n); {
                let e = yC(a, i, o, {
                        dataFetcherRouteName: r.pathname,
                        requestedRouteName: r.pathname,
                        dataFetchingMethodName: "getInitialProps"
                    }),
                    {
                        data: s,
                        baggage: l,
                        sentryTrace: u
                    } = await e.apply(t, n) ?? {};
                return eI(s) && (u && (s._sentryTraceData = u), l && (s._sentryBaggage = l)), s
            }
        }
    })
}, "wrapGetServerSidePropsWithSentry", 0, function(e, t) {
    return new Proxy(e, {
        apply: async (e, n, r) => {
            if (yR()) return e.apply(n, r);
            let [i] = r, {
                req: o,
                res: a
            } = i, s = yC(yx(e), o, a, {
                dataFetcherRouteName: t,
                requestedRouteName: t,
                dataFetchingMethodName: "getServerSideProps"
            }), {
                data: l,
                baggage: u,
                sentryTrace: c
            } = await s.apply(n, r);
            return eI(l) && "props" in l && (c && (l.props._sentryTraceData = c), u && (l.props._sentryBaggage = u)), l
        }
    })
}, "wrapGetStaticPropsWithSentry", 0, function(e, t) {
    return new Proxy(e, {
        apply: async (e, t, n) => yR() ? e.apply(t, n) : yA(yx(e), n)
    })
}, "wrapMiddlewareWithSentry", 0, function(e) {
    return new Proxy(e, {
        apply: async (e, t, n) => tC(r => {
            let i = n[0],
                o = tT();
            if (i instanceof Request) {
                let e;
                r.setSDKProcessingMetadata({
                    normalizedRequest: (e = yh(i.headers), {
                        method: i.method,
                        url: i.url,
                        query_string: yv(i.url),
                        headers: e
                    })
                }), o.setTransactionName(`middleware ${i.method}`)
            } else o.setTransactionName("middleware");
            let a = rh();
            if (a) {
                let e = rd(a);
                e && nB(e, o, r)
            }
            return sD(() => e.apply(t, n), e => {
                rD(e, {
                    mechanism: {
                        type: "auto.function.nextjs.wrap_middleware",
                        handled: !1
                    }
                })
            }, () => {
                yy(y_())
            })
        })
    })
}, "wrapPageComponentWithSentry", 0, function(e) {
    var t;
    return "function" == typeof e && (null == e || null == (t = e.prototype) ? void 0 : t.isReactComponent) ? class extends e {
        render() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return tC(() => {
                let e = tT(),
                    n = eI(this.props) && "_sentryTraceData" in this.props && "string" == typeof this.props._sentryTraceData ? this.props._sentryTraceData : void 0;
                if (n) {
                    let t = nK(n);
                    e.setContext("trace", {
                        span_id: null == t ? void 0 : t.parentSpanId,
                        trace_id: null == t ? void 0 : t.traceId
                    })
                }
                try {
                    return super.render(...t)
                } catch (t) {
                    let e = rD(t, {
                        mechanism: {
                            handled: !1,
                            type: "auto.function.nextjs.page_class"
                        }
                    });
                    throw yM(t, e), t
                }
            })
        }
    } : "function" == typeof e ? new Proxy(e, {
        apply: (e, t, n) => tC(() => {
            var r;
            let i = tT(),
                o = null == n || null == (r = n[0]) ? void 0 : r._sentryTraceData;
            if (o) {
                let e = nK(o);
                i.setContext("trace", {
                    span_id: null == e ? void 0 : e.parentSpanId,
                    trace_id: null == e ? void 0 : e.traceId
                })
            }
            try {
                return e.apply(t, n)
            } catch (t) {
                let e = rD(t, {
                    mechanism: {
                        handled: !1,
                        type: "auto.function.nextjs.page_function"
                    }
                });
                throw yM(t, e), t
            }
        })
    }) : e
}, "wrapReactRouterRouting", 0, yc, "wrapRouteHandlerWithSentry", 0, function(e, t) {
    let {
        method: n,
        parameterizedRoute: r,
        headers: i
    } = t;
    return new Proxy(e, {
        apply: async (e, t, i) => {
            let o = rh(),
                a = o ? rd(o) : void 0;
            return tC(tI(), () => tx(async s => {
                s.setTransactionName(`${n} ${r}`);
                let l = await sD(() => e.apply(t, i), e => {
                    let t = sx(e);
                    if (sC(e));
                    else if (sR(e)) o && nO(o, 404), a && nO(a, 404);
                    else if (t) o && nO(o, t), a && nO(a, t);
                    else if (sM(e));
                    else {
                        let t = {
                            code: 2,
                            message: "internal_error"
                        };
                        null == o || o.setStatus(t), null == a || a.setStatus(t), rD(e, {
                            mechanism: {
                                handled: !1,
                                type: "auto.function.nextjs.route_handler"
                            }
                        })
                    }
                }, () => {
                    yy(y_())
                });
                try {
                    l.status && (o && nO(o, l.status), a && nO(a, l.status))
                } catch {}
                return l
            }))
        }
    })
}, "wrapServerComponentWithSentry", 0, function(e, t) {
    return new Proxy(e, {
        apply: (e, n, r) => {
            let i = tI(),
                o = t.headers ? yh(t.headers) : void 0;
            return i.setSDKProcessingMetadata({
                normalizedRequest: {
                    headers: o
                }
            }), sD(() => e.apply(n, r), e => {
                let n = rh(),
                    {
                        componentRoute: r,
                        componentType: o
                    } = t;
                if (i.setTransactionName(`${o} Server Component (${r})`), sR(e)) {
                    null == n || n.setStatus({
                        code: 2,
                        message: "not_found"
                    });
                    return
                }
                let a = sx(e);
                if (a) {
                    null == n || n.setStatus(nN(a));
                    return
                }
                if (sC(e)) {
                    null == n || n.setStatus({
                        code: 1
                    });
                    return
                }
                sM(e) || (null == n || n.setStatus({
                    code: 2,
                    message: "internal_error"
                }), rD(e, {
                    mechanism: {
                        handled: !1,
                        type: "auto.function.nextjs.server_component"
                    }
                }))
            }, () => {
                yy(y_())
            })
        }
    })
}, "wrapUseRoutes", 0, yf, "wrapUseRoutesV6", 0, ye, "wrapUseRoutesV7", 0, yl, "zodErrorsIntegration", 0, fc], 679780)
}, 54042, (e, t, n) => {
    t.exports = e.r(875391)
}, 875391, (e, t, n) => {
    "use strict";
    var r, i, o, a = e.i(724670);
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var s = {
        APP_CLIENT_INTERNALS: function() {
            return ea
        },
        APP_PATHS_MANIFEST: function() {
            return w
        },
        APP_PATH_ROUTES_MANIFEST: function() {
            return E
        },
        AdapterOutputType: function() {
            return f
        },
        BARREL_OPTIMIZATION_PREFIX: function() {
            return X
        },
        BLOCKED_PAGES: function() {
            return G
        },
        BUILD_ID_FILE: function() {
            return q
        },
        BUILD_MANIFEST: function() {
            return k
        },
        CLIENT_PUBLIC_FILES_PATH: function() {
            return V
        },
        CLIENT_REFERENCE_MANIFEST: function() {
            return Q
        },
        CLIENT_STATIC_FILES_PATH: function() {
            return Y
        },
        CLIENT_STATIC_FILES_RUNTIME_MAIN: function() {
            return ei
        },
        CLIENT_STATIC_FILES_RUNTIME_MAIN_APP: function() {
            return eo
        },
        CLIENT_STATIC_FILES_RUNTIME_POLYFILLS: function() {
            return eu
        },
        CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL: function() {
            return ec
        },
        CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH: function() {
            return es
        },
        CLIENT_STATIC_FILES_RUNTIME_WEBPACK: function() {
            return el
        },
        COMPILER_INDEXES: function() {
            return p
        },
        COMPILER_NAMES: function() {
            return d
        },
        CONFIG_FILES: function() {
            return z
        },
        DEFAULT_RUNTIME_WEBPACK: function() {
            return ed
        },
        DEFAULT_SANS_SERIF_FONT: function() {
            return eg
        },
        DEFAULT_SERIF_FONT: function() {
            return em
        },
        DEV_CLIENT_MIDDLEWARE_MANIFEST: function() {
            return j
        },
        DEV_CLIENT_PAGES_MANIFEST: function() {
            return L
        },
        DYNAMIC_CSS_MANIFEST: function() {
            return er
        },
        EDGE_RUNTIME_WEBPACK: function() {
            return ep
        },
        EDGE_UNSUPPORTED_NODE_APIS: function() {
            return eS
        },
        EXPORT_DETAIL: function() {
            return C
        },
        EXPORT_MARKER: function() {
            return x
        },
        FUNCTIONS_CONFIG_MANIFEST: function() {
            return T
        },
        IMAGES_MANIFEST: function() {
            return O
        },
        INTERCEPTION_ROUTE_REWRITE_MANIFEST: function() {
            return en
        },
        MIDDLEWARE_BUILD_MANIFEST: function() {
            return ee
        },
        MIDDLEWARE_MANIFEST: function() {
            return F
        },
        MIDDLEWARE_REACT_LOADABLE_MANIFEST: function() {
            return et
        },
        MODERN_BROWSERSLIST_TARGET: function() {
            return u.default
        },
        NEXT_BUILTIN_DOCUMENT: function() {
            return J
        },
        NEXT_FONT_MANIFEST: function() {
            return R
        },
        PAGES_MANIFEST: function() {
            return S
        },
        PHASE_ANALYZE: function() {
            return m
        },
        PHASE_DEVELOPMENT_SERVER: function() {
            return _
        },
        PHASE_EXPORT: function() {
            return h
        },
        PHASE_INFO: function() {
            return b
        },
        PHASE_PRODUCTION_BUILD: function() {
            return g
        },
        PHASE_PRODUCTION_SERVER: function() {
            return v
        },
        PHASE_TEST: function() {
            return y
        },
        PREFETCH_HINTS: function() {
            return M
        },
        PRERENDER_MANIFEST: function() {
            return A
        },
        PREVIEW_PROPS_MANIFEST: function() {
            return P
        },
        REACT_LOADABLE_MANIFEST: function() {
            return W
        },
        REQUEST_INSIGHTS_DEV_ENDPOINT: function() {
            return $
        },
        ROUTES_MANIFEST: function() {
            return N
        },
        RSC_MODULE_TYPES: function() {
            return eb
        },
        SERVER_DIRECTORY: function() {
            return H
        },
        SERVER_FILES_MANIFEST: function() {
            return D
        },
        SERVER_PROPS_ID: function() {
            return eh
        },
        SERVER_REFERENCE_MANIFEST: function() {
            return Z
        },
        STATIC_PROPS_ID: function() {
            return ef
        },
        STATIC_STATUS_PAGES: function() {
            return ev
        },
        STRING_LITERAL_DROP_BUNDLE: function() {
            return K
        },
        SUBRESOURCE_INTEGRITY_MANIFEST: function() {
            return I
        },
        SYSTEM_ENTRYPOINTS: function() {
            return ew
        },
        TRACE_OUTPUT_VERSION: function() {
            return e_
        },
        TURBOPACK_CLIENT_BUILD_MANIFEST: function() {
            return B
        },
        TURBOPACK_CLIENT_MIDDLEWARE_MANIFEST: function() {
            return U
        },
        TURBO_TRACE_DEFAULT_MEMORY_LIMIT: function() {
            return ey
        },
        UNDERSCORE_GLOBAL_ERROR_ROUTE: function() {
            return c.UNDERSCORE_GLOBAL_ERROR_ROUTE
        },
        UNDERSCORE_GLOBAL_ERROR_ROUTE_ENTRY: function() {
            return c.UNDERSCORE_GLOBAL_ERROR_ROUTE_ENTRY
        },
        UNDERSCORE_NOT_FOUND_ROUTE: function() {
            return c.UNDERSCORE_NOT_FOUND_ROUTE
        },
        UNDERSCORE_NOT_FOUND_ROUTE_ENTRY: function() {
            return c.UNDERSCORE_NOT_FOUND_ROUTE_ENTRY
        }
    };
    for (var l in s) Object.defineProperty(n, l, {
        enumerable: !0,
        get: s[l]
    });
    let u = e.r(836437)._(e.r(269568)),
        c = e.r(927531),
        d = {
            client: "client",
            server: "server",
            edgeServer: "edge-server"
        },
        p = {
            [d.client]: 0,
            [d.server]: 1,
            [d.edgeServer]: 2
        };
    var f = ((r = {}).PAGES = "PAGES", r.PAGES_API = "PAGES_API", r.APP_PAGE = "APP_PAGE", r.APP_ROUTE = "APP_ROUTE", r.PRERENDER = "PRERENDER", r.STATIC_FILE = "STATIC_FILE", r.MIDDLEWARE = "MIDDLEWARE", r);
    let h = "phase-export",
        m = "phase-analyze",
        g = "phase-production-build",
        v = "phase-production-server",
        _ = "phase-development-server",
        y = "phase-test",
        b = "phase-info",
        S = "pages-manifest.json",
        w = "app-paths-manifest.json",
        E = "app-path-routes-manifest.json",
        k = "build-manifest.json",
        T = "functions-config-manifest.json",
        I = "subresource-integrity-manifest",
        R = "next-font-manifest",
        x = "export-marker.json",
        C = "export-detail.json",
        A = "prerender-manifest.json",
        M = "prefetch-hints.json",
        P = "preview-props.json",
        N = "routes-manifest.json",
        O = "images-manifest.json",
        D = "required-server-files",
        L = "_devPagesManifest.json",
        $ = "/_next/development/request-insights",
        F = "middleware-manifest.json",
        U = "_clientMiddlewareManifest.js",
        B = "client-build-manifest.json",
        j = "_devMiddlewareManifest.json",
        W = "react-loadable-manifest.json",
        H = "server",
        z = ["next.config.js", "next.config.mjs", "next.config.ts", ...(null == (o = a.default) || null == (i = o.features) ? void 0 : i.typescript) ? ["next.config.mts"] : []],
        q = "BUILD_ID",
        G = ["/_document", "/_app", "/_error"],
        V = "public",
        Y = "static",
        K = "__NEXT_DROP_CLIENT_FILE__",
        J = "__NEXT_BUILTIN_DOCUMENT__",
        X = "__barrel_optimize__",
        Q = "client-reference-manifest",
        Z = "server-reference-manifest",
        ee = "middleware-build-manifest",
        et = "middleware-react-loadable-manifest",
        en = "interception-route-rewrite-manifest",
        er = "dynamic-css-manifest",
        ei = "main",
        eo = `${ei}-app`,
        ea = "app-pages-internals",
        es = "react-refresh",
        el = "webpack",
        eu = "polyfills",
        ec = Symbol(eu),
        ed = "webpack-runtime",
        ep = "edge-runtime-webpack",
        ef = "__N_SSG",
        eh = "__N_SSP",
        em = {
            name: "Times New Roman",
            xAvgCharWidth: 821,
            azAvgWidth: 854.3953488372093,
            unitsPerEm: 2048
        },
        eg = {
            name: "Arial",
            xAvgCharWidth: 904,
            azAvgWidth: 934.5116279069767,
            unitsPerEm: 2048
        },
        ev = ["/500"],
        e_ = 1,
        ey = 6e3,
        eb = {
            client: "client",
            server: "server"
        },
        eS = ["clearImmediate", "setImmediate", "BroadcastChannel", "ByteLengthQueuingStrategy", "CompressionStream", "CountQueuingStrategy", "DecompressionStream", "DomException", "MessageChannel", "MessageEvent", "MessagePort", "ReadableByteStreamController", "ReadableStreamBYOBRequest", "ReadableStreamDefaultController", "TransformStreamDefaultController", "WritableStreamDefaultController"],
        ew = new Set([ei, es, eo]);
    ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
        value: !0
    }), Object.assign(n.default, n), t.exports = n.default)
}, 927531, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = {
        UNDERSCORE_GLOBAL_ERROR_ROUTE: function() {
            return s
        },
        UNDERSCORE_GLOBAL_ERROR_ROUTE_ENTRY: function() {
            return l
        },
        UNDERSCORE_NOT_FOUND_ROUTE: function() {
            return o
        },
        UNDERSCORE_NOT_FOUND_ROUTE_ENTRY: function() {
            return a
        }
    };
    for (var i in r) Object.defineProperty(n, i, {
        enumerable: !0,
        get: r[i]
    });
    let o = "/_not-found",
        a = `${o}/page`,
        s = "/_global-error",
        l = `${s}/page`
}, 269568, (e, t, n) => {
    "use strict";
    t.exports = ["chrome 111", "edge 111", "firefox 111", "safari 16.4"]
}]);

//# debugId=57d84e9b-296c-0677-0267-d04c1760326d