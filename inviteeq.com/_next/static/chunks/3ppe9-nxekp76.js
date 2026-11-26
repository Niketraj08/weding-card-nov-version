;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "fdf989a5-e10e-473a-fd08-44ced5c9cd36")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 23204, e => {
    "use strict";
    let a = (0, e.i(74580).f)("MoonStar", [
        ["path", {
            d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9",
            key: "4ay0iu"
        }],
        ["path", {
            d: "M20 3v4",
            key: "1olli1"
        }],
        ["path", {
            d: "M22 5h-4",
            key: "1gvqau"
        }]
    ]);
    e.s(["f", 0, a], 23204)
}, 999734, e => {
    "use strict";
    var a = e.i(729176),
        t = e.i(244835),
        l = e.i(301187),
        s = e.i(380336),
        r = e.i(147196),
        i = e.i(477201),
        n = e.i(19269),
        o = e.i(541464),
        d = e.i(600024),
        c = e.i(149504),
        u = e.i(428509),
        h = e.i(565617),
        m = e.i(764351),
        p = e.i(423088),
        f = e.i(506563),
        g = e.i(738371),
        y = e.i(575198),
        v = e.i(158105),
        x = e.i(664857),
        j = e.i(627655),
        b = e.i(643036),
        w = e.i(48407),
        N = e.i(692126),
        k = e.i(396243),
        _ = e.i(366471),
        $ = e.i(340793),
        W = e.i(301444),
        C = e.i(132680);
    let F = {
            WEDDING: "nikah",
            NIKAH: "nikah",
            ENGAGEMENT: "mangni",
            HALDI: "manjha",
            MEHNDI: "mehndi",
            SANGEET: "dholki",
            BARAAT: "baraat",
            SEHRABANDI: "sehrabandi",
            WALIMA: "walima",
            RECEPTION: "walima",
            COCKTAIL: "lantern",
            WELCOME_PARTY: "lantern",
            AFTER_PARTY: "lantern",
            REHEARSAL_DINNER: "dawat",
            TEA_CEREMONY: "dawat",
            FAREWELL_BRUNCH: "dawat",
            JANEU: "garden",
            BHAAT: "garden",
            MAYAARA: "garden",
            BAHIRANA_SAHIB: "garden",
            SAATH_SONH: "garden",
            BLESSING: "garden",
            ANAND_KARAJ: "garden",
            CHURCH_CEREMONY: "garden",
            CIVIL_CEREMONY: "garden",
            CUSTOM: "garden"
        },
        L = [
            [/sehra|sehera|सेहरा|سہرا|سہرہ/i, "sehrabandi"],
            [/mayun|maiyun|mayoun|manjha|manja|ubtan|ubtun|haldi|haldhi|मायूं|मायों|माइयां|मांझा|मंझा|उबटन|हल्दी|مایوں|مائیوں|مانجھا|ابٹن|ہلدی/i, "manjha"],
            [/mehndi|mehendi|mehandi|henna|मेहंदी|मेहँदी|مہندی/i, "mehndi"],
            [/dholki|dholak|sangeet|sangit|ढोलकी|ढोलक|संगीत|ڈھولکی|ڈھولک|سنگیت/i, "dholki"],
            [/qawwali|qawali|kawwali|sufi night|mehfil-e-sama|क़व्वाली|कव्वाली|قوالی/i, "qawwali"],
            [/mangni|mangani|engagement|\bring\b|baat pakki|sagai|मंगनी|सगाई|منگنی|بات پکی/i, "mangni"],
            [/baraat|barat|बारात|بارات/i, "baraat"],
            [/rukhsati|rukhsat|ruksati|vidaai|vidai|bidaai|रुख़सती|रुखसती|विदाई|رخصتی|رخصت/i, "rukhsati"],
            [/walima|valima|reception|वलीमा|रिसेप्शन|ولیمہ|ولیمه/i, "walima"],
            [/party|soir[ée]e|mehfil|sherbet|sharbat|पार्टी|महफ़िल|محفل|شربت/i, "lantern"],
            [/dawat|daawat|dinner|lunch|brunch|breakfast|feast|\btea\b|दावत|دعوت/i, "dawat"],
            [/nikah|nikaah|nikkah|wedding|shaadi|shadi|निकाह|शादी|نکاح|شادی/i, "nikah"]
        ];

    function S(e) {
        let a = e.type ?? "CUSTOM";
        if ("CUSTOM" !== a) return F[a];
        let t = e.name ?? "";
        for (let [e, a] of L)
            if (e.test(t)) return a;
        return F.CUSTOM
    }
    let T = new Set(["nikah", "dholki", "qawwali", "baraat", "rukhsati", "walima", "lantern", "garden"]);

    function O(e) {
        var a;
        let t = null == (a = e.timezone) ? void 0 : a.trim();
        if (t) {
            let a = (0, C.z)(e.date, e.startTime, t);
            if (a && !Number.isNaN(a.getTime())) return a
        }
        return (0, W.O)(e.date, e.startTime)
    }

    function R(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return (0, W.P)(e, O, a)
    }
    let q = $.K,
        M = e => String(e).padStart(2, "0"),
        E = e => e.replace(/[\\,;]/g, "\\$&").replace(/\r?\n/g, "\\n"),
        D = e => `${e.getUTCFullYear()}${M(e.getUTCMonth()+1)}${M(e.getUTCDate())}T${M(e.getUTCHours())}${M(e.getUTCMinutes())}00Z`,
        H = e => `${e.getFullYear()}${M(e.getMonth()+1)}${M(e.getDate())}T${M(e.getHours())}${M(e.getMinutes())}00`;

    function A(e, a) {
        let t = [];
        for (let r of e) {
            var l, s;
            let e = O(r);
            if (!e) continue;
            let i = function(e, a) {
                    var t, l;
                    if (!(null == (t = e.endTime) ? void 0 : t.trim())) return new Date(a.getTime() + 72e5);
                    let s = null == (l = e.timezone) ? void 0 : l.trim(),
                        r = s ? (0, C.z)(e.date, e.endTime, s) : (0, W.O)(e.date, e.endTime);
                    return !r || Number.isNaN(r.getTime()) ? new Date(a.getTime() + 72e5) : r.getTime() > a.getTime() ? r : new Date(r.getTime() + 864e5)
                }(r, e),
                n = (null == (l = r.timezone) ? void 0 : l.trim()) ? D : H,
                o = (0, $.f)(r);
            t.push(["BEGIN:VEVENT", `UID:${r.id}@chaand-bagh`, `DTSTAMP:${D(e)}`, `DTSTART:${n(e)}`, `DTEND:${n(i)}`, `SUMMARY:${E((null==(s=r.name)?void 0:s.trim())||a)}`, o ? `LOCATION:${E(o)}` : "", r.description ? `DESCRIPTION:${E(r.description)}` : "", "END:VEVENT"].filter(Boolean).join("\r\n"))
        }
        if (0 === t.length) return null;
        let r = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Wedding Card Maker//Chaand Bagh//EN", ...t, "END:VCALENDAR"].join("\r\n");
        return `data:text/calendar;charset=utf-8,${encodeURIComponent(r)}`
    }

    function P(e) {
        let a = e.normalize("NFKD").replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-").toLowerCase();
        return `${a||"wedding"}.ics`
    }

    function I(e) {
        return (null == e ? void 0 : e.enabled) ? (e.content ?? "").split(/\n\s*\n/).map(e => e.replace(/^\s+|\s+$/g, "")).filter(Boolean) : []
    }
    let B = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/,
        U = /[\u0679\u0688\u0691\u06BA\u06BE\u06C1\u06D2\u06D3\u067E\u0686\u0698\u06A9\u06AF\u06CC]/;

    function z(e) {
        if (e) return B.test(e) ? "ar" : /[\u0900-\u097F]/.test(e) ? "hi" : void 0
    }

    function G(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (e && B.test(e)) return a.includes(e.trim()) ? "quran" : U.test(e) ? "nastaliq" : "naskh"
    }

    function J(e) {
        let a = (null == e ? void 0 : e.trim()) ?? "";
        return /^https:\/\/[^\s"'\\()]+$/.test(a) ? a : ""
    }

    function V(e, a) {
        return Math.min(1, a / Math.max(1, ...e.map(e => [...e].length)))
    }

    function K(e, a, t) {
        let l = Math.imul(977 * e + 131 * a + 7919 * t + 1, 0x9e3779b1);
        return l ^= l >>> 15, l = Math.imul(l, 0x85ebca77), ((l ^= l >>> 13) >>> 0) % 1e3 / 1e3
    }
    let Y = (e, a, t) => +(e + (a - e) * t).toFixed(2),
        Z = {
            "marble-lid": {
                w: 800,
                h: 400
            },
            "lid-border": {
                w: 600,
                h: 600
            },
            "silk-lining": {
                w: 840,
                h: 840
            },
            "silk-tie": {
                w: 1098,
                h: 80
            },
            "tie-knot": {
                w: 900,
                h: 277
            },
            tassel: {
                w: 182,
                h: 420
            },
            seal: {
                w: 560,
                h: 561
            },
            "gate-crest": {
                w: 720,
                h: 717
            },
            "petal-rose-deep": {
                w: 93,
                h: 96
            },
            "petal-rose-pale": {
                w: 90,
                h: 96
            },
            "petal-rose": {
                w: 96,
                h: 95
            },
            "petal-bud": {
                w: 80,
                h: 96
            },
            "petal-jasmine": {
                w: 96,
                h: 88
            },
            "petal-narcissus": {
                w: 89,
                h: 96
            },
            "petal-almond": {
                w: 96,
                h: 90
            },
            "petal-tulip": {
                w: 77,
                h: 96
            },
            moon: {
                w: 640,
                h: 643
            },
            "wall-p": {
                w: 860,
                h: 1290
            },
            "wall-w": {
                w: 1536,
                h: 1024
            },
            "baradari-p": {
                w: 900,
                h: 569
            },
            "baradari-w": {
                w: 1300,
                h: 583
            },
            cypress: {
                w: 174,
                h: 900
            },
            "channel-p": {
                w: 1e3,
                h: 1500
            },
            "channel-w": {
                w: 1536,
                h: 1024
            },
            "fountain-jet": {
                w: 130,
                h: 300
            },
            "flowerbed-p": {
                w: 1e3,
                h: 1500
            },
            "flowerbed-w": {
                w: 1536,
                h: 1024
            },
            "qandeel-band": {
                w: 492,
                h: 260
            },
            "hashiya-border": {
                w: 600,
                h: 600
            },
            unwan: {
                w: 1100,
                h: 378
            },
            paper: {
                w: 840,
                h: 840
            },
            qandeel: {
                w: 170,
                h: 600
            },
            "events/window-frame": {
                w: 820,
                h: 1230
            },
            "events/window-fore": {
                w: 820,
                h: 1230
            },
            "events/crest": {
                w: 760,
                h: 409
            },
            "card-border": {
                w: 480,
                h: 480
            },
            "story-pool-p": {
                w: 1024,
                h: 1536
            },
            "story-pool-w": {
                w: 1536,
                h: 1024
            },
            finial: {
                w: 160,
                h: 211
            },
            footbridge: {
                w: 720,
                h: 292
            },
            "closing-p": {
                w: 1024,
                h: 1536
            },
            "closing-w": {
                w: 1536,
                h: 1024
            },
            shamsa: {
                w: 760,
                h: 762
            },
            "astrolabe-mater": {
                w: 760,
                h: 959
            },
            "astrolabe-rete": {
                w: 720,
                h: 718
            },
            "book-cover": {
                w: 820,
                h: 1230
            },
            "mirror-arch": {
                w: 640,
                h: 960
            },
            "sheesh-tile": {
                w: 720,
                h: 720
            },
            "flower-curtain": {
                w: 1158,
                h: 720
            }
        },
        Q = e => `/layouts/chaand-bagh/${e}.webp`,
        X = {
            p: {
                line: .5419,
                dip: .4698,
                fill: "#665667"
            },
            w: {
                line: .5186,
                dip: .4082,
                fill: "#555846"
            }
        },
        ee = {
            p: {
                line: .5947,
                dip: .5927,
                fill: "#e1c4a7"
            },
            w: {
                line: .6201,
                dip: .6143,
                fill: "#e0c0a2"
            }
        },
        ea = {
            p: {
                line: .616,
                dip: .6227,
                fill: "#efd8c0"
            },
            w: {
                line: .415,
                dip: .4316,
                fill: "#dec6b3"
            }
        },
        et = {
            p: {
                wallY: .47,
                wallTo: -.03,
                groundY: .585,
                groundTo: -.06,
                namesTop: .13,
                namesH: .27,
                namesSink: .52,
                sinkFrom: .2,
                sinkTo: .86,
                bedDipY: .6,
                bedFrom: .5,
                riseFrom: .14,
                riseTo: .78,
                moonY: .44,
                moonTo: -.3
            },
            w: {
                wallY: .5,
                wallTo: -.03,
                groundY: .6,
                groundTo: -.06,
                namesTop: .19,
                namesH: .16,
                namesSink: .52,
                sinkFrom: .2,
                sinkTo: .86,
                bedDipY: .62,
                bedFrom: .5,
                riseFrom: .14,
                riseTo: .78,
                moonY: .46,
                moonTo: -.24
            }
        },
        el = {
            p: {
                aspect: 900 / 569,
                h: .2,
                lanterns: [
                    [.326, .553],
                    [.5, .553],
                    [.674, .553]
                ]
            },
            w: {
                aspect: 1300 / 583,
                h: .22,
                lanterns: [
                    [.282, .583],
                    [.392, .583],
                    [.499, .583],
                    [.607, .583],
                    [.715, .583]
                ]
            }
        },
        es = {
            p: [
                [.5, .82, .04],
                [.5, .748, .03],
                [.5, .701, .024],
                [.5, .667, .02],
                [.5, .642, .016],
                [.5, .622, .013]
            ],
            w: [
                [.5, .802, .023],
                [.5, .741, .018],
                [.5, .7, .014],
                [.5, .671, .011],
                [.5, .648, .009],
                [.5, .633, .007]
            ]
        },
        er = {
            p: [{
                x: .373,
                y: .618,
                h: .15,
                d: 6.2,
                a: .9
            }, {
                x: .627,
                y: .618,
                h: .15,
                d: 6.8,
                a: .8,
                flip: !0
            }, {
                x: .28,
                y: .67,
                h: .27,
                d: 5.6,
                a: 1.1
            }, {
                x: .72,
                y: .67,
                h: .27,
                d: 7.1,
                a: 1,
                flip: !0
            }, {
                x: .187,
                y: .76,
                h: .46,
                d: 7.4,
                a: 1.3
            }, {
                x: .813,
                y: .76,
                h: .46,
                d: 6.5,
                a: 1.2,
                flip: !0
            }],
            w: [{
                x: .39,
                y: .64,
                h: .16,
                d: 6.2,
                a: .9
            }, {
                x: .61,
                y: .64,
                h: .16,
                d: 6.8,
                a: .8,
                flip: !0
            }, {
                x: .3,
                y: .68,
                h: .25,
                d: 5.6,
                a: 1.1
            }, {
                x: .7,
                y: .68,
                h: .25,
                d: 7.1,
                a: 1,
                flip: !0
            }, {
                x: .14,
                y: .74,
                h: .42,
                d: 7.4,
                a: 1.3
            }, {
                x: .86,
                y: .74,
                h: .42,
                d: 6.5,
                a: 1.2,
                flip: !0
            }]
        },
        ei = "#f2e8dc",
        en = {
            aspect: 900 / 277,
            arm: [.3141, .7798]
        },
        eo = {
            aspect: 182 / 420,
            cord: .4973
        },
        ed = {
            lid: {
                src: Q("lid-border"),
                slice: 85
            },
            hashiya: {
                src: Q("hashiya-border"),
                slice: 99
            },
            card: {
                src: Q("card-border"),
                slice: 57
            }
        },
        ec = {
            aspect: 1100 / 378,
            field: [.1936, .1852, .8064, .9392]
        },
        eu = {
            aspect: 170 / 600,
            cord: .4971
        },
        eh = {
            src: Q("events/crest"),
            aspect: 760 / 409,
            base: .7716
        },
        em = ["petal-rose-deep", "petal-rose-pale", "petal-rose"],
        ep = {
            nikah: {
                petals: em
            },
            mangni: {
                petals: ["petal-rose-pale", "petal-almond", "petal-jasmine"]
            },
            manjha: {
                petals: ["petal-tulip", "petal-narcissus", "petal-rose-pale"]
            },
            mehndi: {
                petals: em
            },
            dholki: {
                sparks: !0
            },
            qawwali: {
                sparks: !0
            },
            baraat: {
                sparks: !0,
                petals: em
            },
            sehrabandi: {
                petals: ["petal-jasmine", "petal-rose-pale", "petal-narcissus"]
            },
            rukhsati: {
                petals: em
            },
            walima: {
                sparks: !0
            },
            lantern: {
                sparks: !0,
                embers: [14, 86]
            },
            dawat: {
                petals: ["petal-almond", "petal-jasmine", "petal-almond"]
            },
            garden: {
                sparks: !0
            }
        },
        ef = {
            nikah: [{
                kind: "moon",
                x: 79.8,
                y: 27.5,
                s: 3
            }],
            mangni: [],
            manjha: [],
            mehndi: [],
            dholki: [],
            qawwali: [],
            baraat: [],
            sehrabandi: [],
            rukhsati: [],
            walima: [{
                kind: "moon",
                x: 80.3,
                y: 19.9,
                s: 4
            }],
            lantern: [],
            dawat: [],
            garden: [{
                kind: "moon",
                x: 78.5,
                y: 24.7,
                s: 5
            }]
        },
        eg = .421,
        ey = "#111930",
        ev = [.901, .082],
        ex = .309,
        ej = "#11192c",
        eb = [.93, .064];

    function ew(e) {
        let a = e >>> 0;
        return () => ((a = Math.imul(a ^ a >>> 15, 0x85ebca77) + 0x6d2b79f5 >>> 0) >>> 8) / 0x1000000
    }
    let eN = (0, t.forwardRef)(function(e, l) {
        let {
            className: s,
            color: r,
            count: i,
            seed: n = 11
        } = e, o = (0, t.useRef)(null), d = (0, t.useRef)([]), c = (0, t.useRef)(() => void 0), u = (0, t.useRef)(!0), h = (0, t.useRef)(!1);
        return (0, t.useImperativeHandle)(l, () => ({
            burst(e, a, t, l) {
                if (!h.current) return;
                let s = o.current;
                if (!s) return;
                let r = ew(65535 & Date.now()),
                    i = s.width,
                    n = s.height,
                    m = u.current ? t.phone : t.desktop;
                for (let t = 0; t < m; t++) {
                    let t = r() * Math.PI * 2,
                        s = (.6 + 2.2 * r()) * (i / 900);
                    d.current.push({
                        x: e * i,
                        y: a * n,
                        vx: Math.cos(t) * s,
                        vy: Math.sin(t) * s - .6,
                        r: (1.2 + 2.4 * r()) * (i / 900) + .6,
                        phase: 6.28 * r(),
                        life: 1,
                        burst: !0,
                        color: l
                    })
                }
                c.current()
            }
        })), (0, t.useEffect)(() => {
            var e;
            let a = o.current;
            if (!a) return;
            let t = navigator;
            if (h.current = (t.hardwareConcurrency || 8) > 4 && !(null == (e = t.connection) ? void 0 : e.saveData), !h.current) {
                a.hidden = !0;
                return
            }
            let l = a.getContext("2d");
            if (!l) return;
            let s = 0,
                m = !1,
                p = !1,
                f = () => {
                    let e = Math.min(1.5, window.devicePixelRatio || 1);
                    a.width = Math.max(1, Math.round(a.clientWidth * e)), a.height = Math.max(1, Math.round(a.clientHeight * e)), u.current = a.clientWidth < 600;
                    let t = ew(n),
                        l = u.current ? i.phone : i.desktop;
                    d.current = d.current.filter(e => e.burst);
                    for (let s = 0; s < l; s++) d.current.push({
                        x: t() * a.width,
                        y: (.3 + .65 * t()) * a.height,
                        vx: (t() - .5) * .35,
                        vy: (t() - .5) * .25,
                        r: (1 + 1.6 * t()) * e,
                        phase: 6.28 * t(),
                        life: 1,
                        burst: !1
                    })
                },
                g = e => {
                    l.clearRect(0, 0, a.width, a.height);
                    let t = d.current;
                    for (let s = t.length - 1; s >= 0; s--) {
                        let i = t[s];
                        if (i.burst) {
                            if (i.x += i.vx, i.y += i.vy, i.vx *= .985, i.vy = .985 * i.vy + .012, i.life -= .0085, i.life <= 0) {
                                t.splice(s, 1);
                                continue
                            }
                        } else i.x += i.vx + .22 * Math.sin(e / 1700 + i.phase), i.y += i.vy + .16 * Math.cos(e / 2100 + i.phase), i.x < 0 && (i.x += a.width), i.x > a.width && (i.x -= a.width), i.y < .2 * a.height && (i.vy = Math.abs(i.vy)), i.y > a.height && (i.vy = -Math.abs(i.vy));
                        let n = i.burst ? i.life : .35 + .65 * Math.max(0, Math.sin(e / 900 + i.phase)),
                            o = l.createRadialGradient(i.x, i.y, 0, i.x, i.y, 4 * i.r);
                        l.globalAlpha = n, o.addColorStop(0, i.color ?? r), o.addColorStop(1, "rgba(0,0,0,0)"), l.fillStyle = o, l.beginPath(), l.arc(i.x, i.y, 4 * i.r, 0, 2 * Math.PI), l.fill()
                    }
                    l.globalAlpha = 1, s = requestAnimationFrame(g)
                },
                y = () => {
                    !m && p && (m = !0, s = requestAnimationFrame(g))
                },
                v = () => {
                    m = !1, cancelAnimationFrame(s)
                };
            c.current = y, f();
            let x = new ResizeObserver(f);
            x.observe(a);
            let j = new IntersectionObserver(e => {
                let [a] = e;
                (p = a.isIntersecting) ? y(): v()
            });
            return j.observe(a), () => {
                v(), x.disconnect(), j.disconnect()
            }
        }, [r, i.phone, i.desktop, n]), (0, a.jsx)("canvas", {
            ref: o,
            className: s,
            "aria-hidden": "true"
        })
    });
    var ek = e.i(458331),
        e_ = e.i(929917),
        e$ = e.i(389509);
    let eW = "Parisienne",
        eC = `"${eW}", cursive`,
        eF = "Amiri Quran",
        eL = "Noto Nastaliq Urdu",
        eS = "Amiri",
        eT = {
            quran: `"${eF}", "${eS}", serif`,
            nastaliq: `"${eL}", "${eS}", serif`,
            naskh: `"${eS}", serif`
        },
        eO = [...ek.S.filter(e => "bismillah" === e.key).map(e => e.text), ...ek.O.filter(e => "ar-rum-21" === e.key || "an-naba-8" === e.key).flatMap(e => [...e.lines])],
        eR = (0, t.createContext)(null);

    function eq() {
        let e = (0, t.useContext)(eR);
        if (!e) throw Error("Chaand Bagh acts must render inside <ChaandContext.Provider>");
        return e
    }

    function eM(e, a) {
        return {
            fontFamily: e.headingFont,
            fontWeight: e.headingWeight ?? 600,
            color: a
        }
    }

    function eE(e) {
        let {
            as: t = "p",
            text: l,
            fallbackFont: s,
            className: r = "",
            arabicClassName: i = "",
            style: n,
            id: o
        } = e, d = G(l, eO), c = z(l);
        return (0, a.jsx)(t, {
            id: o,
            className: `${r} ${d?`${i} ${e$.default.arabic}`:""}`,
            lang: c,
            dir: d ? "rtl" : void 0,
            "data-face": d,
            style: { ...n,
                fontFamily: d ? eT[d] : s ?? (null == n ? void 0 : n.fontFamily)
            },
            children: l
        })
    }

    function eD(e) {
        let {
            gold: t,
            deep: l,
            rose: s,
            className: r = ""
        } = e;
        return (0, a.jsxs)("svg", {
            className: `${e$.default.qalamRule} ${r}`,
            viewBox: "0 0 300 26",
            fill: "none",
            "aria-hidden": "true",
            children: [(0, a.jsx)("path", {
                d: "M8 13h112",
                stroke: t,
                strokeWidth: "0.9",
                strokeLinecap: "round"
            }), (0, a.jsx)("path", {
                d: "M180 13h112",
                stroke: t,
                strokeWidth: "0.9",
                strokeLinecap: "round"
            }), (0, a.jsx)("path", {
                d: "M8 13l-5-2.4v4.8zM292 13l5-2.4v4.8z",
                fill: t
            }), (0, a.jsx)("path", {
                d: "M124 13h8M168 13h8",
                stroke: t,
                strokeWidth: "0.9",
                strokeOpacity: "0.6",
                strokeLinecap: "round"
            }), (0, a.jsx)("g", {
                transform: "translate(138 1)",
                children: (0, a.jsx)(eH, {
                    gold: t,
                    deep: l,
                    rose: s
                })
            })]
        })
    }

    function eH(e) {
        let {
            gold: t,
            deep: l,
            rose: s
        } = e;
        return (0, a.jsxs)("g", {
            stroke: t,
            strokeWidth: "0.9",
            strokeLinejoin: "round",
            children: [
                [0, 72, 144, 216, 288].map(e => (0, a.jsx)("ellipse", {
                    cx: "12",
                    cy: "6.4",
                    rx: "5.2",
                    ry: "3.8",
                    fill: s,
                    fillOpacity: "0.22",
                    transform: `rotate(${e} 12 12)`
                }, e)), (0, a.jsx)("circle", {
                    cx: "12",
                    cy: "12",
                    r: "4.6",
                    fill: s,
                    fillOpacity: "0.4"
                }), (0, a.jsx)("path", {
                    d: "M9.6 12c0-2.4 4.8-2.4 4.8 0s-3.2 3.2-3.2 0",
                    fill: "none",
                    stroke: l,
                    strokeWidth: "0.8"
                })
            ]
        })
    }

    function eA(e) {
        let {
            gold: t,
            rose: l,
            className: s = ""
        } = e;
        return (0, a.jsxs)("svg", {
            className: `${e$.default.budArrow} ${s}`,
            viewBox: "0 0 24 110",
            fill: "none",
            "aria-hidden": "true",
            children: [(0, a.jsx)("path", {
                d: "M12 2v82",
                stroke: t,
                strokeWidth: "1.1",
                strokeLinecap: "round"
            }), (0, a.jsx)("path", {
                d: "M12 74c-4 1-7 3.6-8 7M12 74c4 1 7 3.6 8 7",
                stroke: t,
                strokeWidth: "0.9",
                strokeLinecap: "round"
            }), (0, a.jsx)("path", {
                d: "M12 84c-5.4 2.4-7.4 9-4.6 14.6 1.4 2.8 3 5 4.6 9 1.6-4 3.2-6.2 4.6-9 2.8-5.6.8-12.2-4.6-14.6z",
                fill: l,
                fillOpacity: "0.32",
                stroke: t,
                strokeWidth: "1"
            }), (0, a.jsx)("path", {
                d: "M12 86v14",
                stroke: t,
                strokeWidth: "0.6",
                strokeOpacity: "0.7"
            })]
        })
    }

    function eP(e) {
        let {
            emblem: t,
            gold: l,
            deep: s,
            accent: r,
            label: i,
            size: n = 60,
            className: o = ""
        } = e;
        switch (t.kind) {
            case "ornament":
                return (0, a.jsx)("span", {
                    className: `${e$.default.emblem} ${o}`,
                    role: "img",
                    "aria-label": i,
                    children: "gul" === t.name ? (0, a.jsx)(e_.f, {
                        gold: l,
                        deep: s,
                        accent: r,
                        size: n
                    }) : (0, a.jsx)(e_.r, {
                        gold: l,
                        deep: s,
                        accent: r,
                        size: n
                    })
                });
            case "glyph":
                return (0, a.jsx)("span", {
                    className: `${e$.default.emblemGlyph} ${o}`,
                    lang: z(t.text),
                    "aria-hidden": "true",
                    style: {
                        color: l
                    },
                    children: t.text
                });
            case "upload":
                return (0, a.jsx)("span", {
                    className: `${e$.default.emblemMark} ${o}`,
                    role: "img",
                    "aria-label": i,
                    style: {
                        "--mark": `url("${t.src}")`,
                        backgroundColor: l
                    }
                });
            case "image":
                return null
        }
    }

    function eI(e) {
        let {
            href: t,
            onClick: l,
            download: s,
            external: r = !1,
            variant: i = "outline",
            night: n = !1,
            ariaLabel: o,
            className: d = "",
            children: c
        } = e, {
            tones: u
        } = eq(), h = "solid" === i ? {
            background: u.firozi,
            color: u.onFirozi,
            borderColor: (0, k.L)(u.goldLight, .8)
        } : {
            background: n ? (0, k.L)(u.light, .06) : (0, k.L)(u.paper, .75),
            color: n ? u.light : u.ink,
            borderColor: n ? (0, k.L)(u.goldLight, .55) : (0, k.L)(u.gold, .8)
        }, m = `${e$.default.pill} ${d}`;
        return t ? (0, a.jsx)("a", {
            href: t,
            className: m,
            style: h,
            "aria-label": o,
            download: s,
            ...r ? {
                target: "_blank",
                rel: "noopener noreferrer"
            } : {},
            children: c
        }) : (0, a.jsx)("button", {
            type: "button",
            onClick: l,
            className: m,
            style: h,
            "aria-label": o,
            children: c
        })
    }

    function eB(e) {
        let {
            color: t,
            rose: l,
            className: s = ""
        } = e;
        return (0, a.jsxs)("span", {
            className: `${e$.default.roseDivider} ${s}`,
            "aria-hidden": "true",
            children: [(0, a.jsx)("i", {
                style: {
                    background: `linear-gradient(90deg, transparent, ${t})`
                }
            }), (0, a.jsx)(e_.O, {
                color: t,
                accent: l,
                size: 16
            }), (0, a.jsx)("i", {
                style: {
                    background: `linear-gradient(90deg, ${t}, transparent)`
                }
            })]
        })
    }

    function eU(e) {
        let {
            id: t,
            eyebrow: l,
            title: s,
            night: r = !1,
            className: i = ""
        } = e, {
            theme: n,
            tones: o
        } = eq();
        return (0, a.jsxs)("header", {
            className: `${e$.default.chapterTitle} ${i}`,
            children: [(0, a.jsx)("p", {
                className: e$.default.eyebrow,
                style: {
                    fontFamily: eC,
                    color: r ? o.goldLight : o.goldDeep
                },
                children: l
            }), (0, a.jsx)("h2", {
                id: t,
                className: e$.default.chapterHeading,
                style: eM(n, r ? o.light : o.firozi),
                children: s
            }), (0, a.jsx)(eB, {
                color: r ? (0, k.L)(o.goldLight, .85) : o.gold,
                rose: o.rose
            })]
        })
    }

    function ez(e) {
        let a = et[e];
        return {
            [`--wall-y-${e}`]: a.wallY,
            [`--wall-to-${e}`]: a.wallTo,
            [`--ground-y-${e}`]: a.groundY,
            [`--ground-to-${e}`]: a.groundTo,
            [`--names-top-${e}`]: a.namesTop,
            [`--names-sink-${e}`]: a.namesSink,
            [`--bed-dip-y-${e}`]: a.bedDipY,
            [`--bed-from-${e}`]: a.bedFrom,
            [`--moon-y-${e}`]: a.moonY,
            [`--moon-to-${e}`]: a.moonTo,
            [`--wall-line-${e}`]: X[e].line,
            [`--wall-fill-${e}`]: X[e].fill,
            [`--channel-line-${e}`]: ee[e].line,
            [`--channel-fill-${e}`]: ee[e].fill,
            [`--bed-dip-${e}`]: ea[e].dip,
            [`--bed-fill-${e}`]: ea[e].fill,
            [`--wall-aspect-${e}`]: Z[`wall-${e}`].w / Z[`wall-${e}`].h,
            [`--channel-aspect-${e}`]: Z[`channel-${e}`].w / Z[`channel-${e}`].h,
            [`--bed-aspect-${e}`]: Z[`flowerbed-${e}`].w / Z[`flowerbed-${e}`].h,
            [`--baradari-aspect-${e}`]: el[e].aspect,
            [`--baradari-h-${e}`]: el[e].h,
            [`--img-wall-${e}`]: `url("${Q(`wall-${e}`)}")`,
            [`--img-channel-${e}`]: `url("${Q(`channel-${e}`)}")`,
            [`--img-bed-${e}`]: `url("${Q(`flowerbed-${e}`)}")`,
            [`--img-baradari-${e}`]: `url("${Q(`baradari-${e}`)}")`
        }
    }

    function eG(e) {
        let {
            title: r,
            one: i,
            two: n,
            greet: o,
            afterGate: d
        } = e, c = (0, l.r)("inviteThemes.chaand-bagh"), {
            theme: u,
            tones: h,
            reduce: m,
            lite: p
        } = eq(), f = (0, s.useGuestGreeting)() && o, g = (0, t.useRef)(null), y = (0, t.useRef)(null), v = V([i, n], 8), x = V([`${i}${n}`], 14);
        eJ(g);
        let j = function(e, a, l) {
                let [s, r] = (0, t.useState)(0);
                return (0, t.useEffect)(() => {
                    let t = e.current;
                    if (!t || l || "u" < typeof IntersectionObserver) return;
                    let s = [],
                        i = new IntersectionObserver(e => {
                            let [t] = e;
                            if (s.splice(0).forEach(clearTimeout), t.isIntersecting || t.boundingClientRect.top < 0)
                                for (let e = 0; e < a; e++) s.push(window.setTimeout(() => r(e + 1), 120 + 380 * e));
                            else r(0)
                        });
                    return i.observe(t), () => {
                        i.disconnect(), s.forEach(clearTimeout)
                    }
                }, [e, a, l]), l ? a : s
            }(y, Math.max(el.p.lanterns.length, el.w.lanterns.length), m),
            b = { ...ez("p"),
                ...ez("w"),
                "--run": "160lvh",
                "--lanterns-at": .36,
                "--name-scale": v,
                "--row-scale": x,
                "--cypress-ratio": Z.cypress.w / Z.cypress.h,
                "--jet-ratio": Z["fountain-jet"].w / Z["fountain-jet"].h,
                "--moon": `url("${Q("moon")}")`,
                "--cypress": `url("${Q("cypress")}")`,
                "--jet": `url("${Q("fountain-jet")}")`,
                "--qandeels": `url("${Q("qandeel-band")}")`,
                "--qandeels-ratio": Z["qandeel-band"].w / Z["qandeel-band"].h,
                "--dusk-a": h.duskLavender,
                "--dusk-b": h.duskRose,
                "--dusk-c": h.duskApricot,
                "--haze": (0, k.L)(h.duskHaze, .7),
                "--night-a": h.nightDeep,
                "--night-b": h.night,
                "--night-c": h.nightHigh,
                "--star": (0, k.L)(h.moon, .9),
                "--moon-glow": (0, k.L)(h.moonGlow, .5),
                "--moon-warm": (0, k.L)(h.duskApricot, .85),
                "--glitter": (0, k.L)(h.moon, .85),
                "--veil": (0, k.L)(h.night, .55),
                "--ground-veil": (0, k.L)(h.night, .4),
                "--bed-veil": (0, k.L)(h.nightDeep, .3),
                "--lantern": (0, k.L)(h.lamplight, .85)
            },
            w = eM(u, h.light);
        return (0, a.jsxs)("section", {
            ref: g,
            id: "chaand-arrival",
            className: e$.default.stage,
            "aria-label": r,
            style: b,
            children: [(0, a.jsx)("span", {
                ref: y,
                className: e$.default.nightfall,
                "aria-hidden": "true"
            }), (0, a.jsxs)("div", {
                className: e$.default.pin,
                "data-pinned-scene": !0,
                children: [(0, a.jsx)("div", {
                    className: `${e$.default.sky} ${e$.default.skyDusk}`,
                    "aria-hidden": "true"
                }), (0, a.jsx)("div", {
                    className: `${e$.default.sky} ${e$.default.skyNight} ${e$.default.tl}`,
                    "aria-hidden": "true"
                }), (0, a.jsx)("div", {
                    className: `${e$.default.stars} ${e$.default.tl}`,
                    "aria-hidden": "true"
                }), (0, a.jsxs)("div", {
                    className: `${e$.default.moon} ${e$.default.tl}`,
                    "aria-hidden": "true",
                    children: [(0, a.jsx)("span", {
                        className: `${e$.default.moonHalo} ${e$.default.tl}`
                    }), (0, a.jsx)("span", {
                        className: e$.default.moonDisc
                    }), (0, a.jsx)("span", {
                        className: `${e$.default.moonWarm} ${e$.default.tl}`
                    })]
                }), (0, a.jsx)("div", {
                    className: `${e$.default.plane} ${e$.default.wall} ${e$.default.tl}`,
                    "aria-hidden": "true"
                }), (0, a.jsx)("div", {
                    className: `${e$.default.veil} ${e$.default.tl}`,
                    "aria-hidden": "true"
                }), (0, a.jsx)("div", {
                    className: `${e$.default.haze} ${e$.default.tl}`,
                    "aria-hidden": "true"
                }), (0, a.jsxs)("div", {
                    className: `${e$.default.ground} ${e$.default.tl}`,
                    "aria-hidden": "true",
                    children: [(0, a.jsxs)("div", {
                        className: e$.default.channel,
                        children: [(0, a.jsx)("span", {
                            className: e$.default.glitter
                        }), ["p", "w"].map(e => es[e].map((t, l) => {
                            let [s, r, i] = t;
                            return (0, a.jsx)("span", {
                                className: e$.default.jet,
                                "data-cut": e,
                                style: {
                                    "--x": s,
                                    "--y": r,
                                    "--w": i,
                                    "--d": `${(2.6+l%3*.35).toFixed(2)}s`,
                                    "--t": `${(-(.47*l)).toFixed(2)}s`
                                }
                            }, `${e}-${l}`)
                        }))]
                    }), ["p", "w"].map(e => er[e].map((t, l) => (0, a.jsx)("span", {
                        className: e$.default.cypress,
                        "data-cut": e,
                        "data-flip": "flip" in t && t.flip ? "" : void 0,
                        style: {
                            "--x": t.x,
                            "--y": t.y,
                            "--h": t.h,
                            "--d": `${t.d}s`,
                            "--a": t.a,
                            "--t": `${(-(1.3*l)).toFixed(1)}s`
                        }
                    }, `${e}-${l}`))), ["p", "w"].map(e => (0, a.jsx)("div", {
                        className: e$.default.baradari,
                        "data-cut": e,
                        children: el[e].lanterns.map((e, t) => {
                            let [l, s] = e;
                            return (0, a.jsx)("span", {
                                className: e$.default.lanternGlow,
                                "data-lit": t < j ? "" : void 0,
                                style: {
                                    "--x": l,
                                    "--y": s
                                }
                            }, t)
                        })
                    }, e))]
                }), (0, a.jsx)("div", {
                    className: `${e$.default.groundVeil} ${e$.default.tl}`,
                    "aria-hidden": "true"
                }), (0, a.jsxs)("div", {
                    className: `${e$.default.heroCopy} ${e$.default.tl}`,
                    children: [f ? (0, a.jsxs)("p", {
                        className: e$.default.heroGuest,
                        children: [(0, a.jsx)(_.GuestGreeting, {
                            className: e$.default.heroGuestName,
                            style: {
                                fontFamily: u.headingFont,
                                color: h.goldLight
                            }
                        }), (0, a.jsx)("span", {
                            className: e$.default.heroInvited,
                            style: {
                                color: (0, k.L)(h.light, .85)
                            },
                            children: c("hero.cordiallyInvited")
                        })]
                    }) : null, (0, a.jsxs)("h1", {
                        className: e$.default.heroNames,
                        children: [(0, a.jsx)("span", {
                            "data-couple-name": !0,
                            dir: "auto",
                            className: e$.default.heroName,
                            style: w,
                            children: i
                        }), (0, a.jsx)("span", {
                            className: e$.default.heroWeds,
                            style: {
                                fontFamily: eC,
                                color: h.goldLight
                            },
                            children: c("hero.weds")
                        }), (0, a.jsx)("span", {
                            "data-couple-name": !0,
                            dir: "auto",
                            className: e$.default.heroName,
                            style: w,
                            children: n
                        })]
                    })]
                }), m || p ? null : (0, a.jsx)(eN, {
                    className: `${e$.default.fireflies} ${e$.default.tl}`,
                    color: h.flame,
                    count: {
                        phone: 18,
                        desktop: 36
                    }
                }), (0, a.jsx)("div", {
                    className: `${e$.default.bed} ${e$.default.tl}`,
                    "aria-hidden": "true"
                }), (0, a.jsx)("div", {
                    className: `${e$.default.qandeels} ${e$.default.tl}`,
                    "aria-hidden": "true",
                    children: (0, a.jsx)("span", {
                        className: e$.default.qandeelSway
                    })
                }), (0, a.jsx)("div", {
                    className: `${e$.default.arrivalCue} ${e$.default.tl}`,
                    "data-export-hide": !0,
                    children: (0, a.jsxs)("button", {
                        type: "button",
                        className: e$.default.cueButton,
                        "data-after-gate": d ? "" : void 0,
                        onClick: e => (function(e) {
                            let a = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
                                t = e.parentElement;
                            for (; t;) {
                                let {
                                    overflowY: e
                                } = getComputedStyle(t);
                                if (("auto" === e || "scroll" === e) && t.scrollHeight > t.clientHeight) return void t.scrollBy({
                                    top: .8 * t.clientHeight,
                                    behavior: a ? "auto" : "smooth"
                                });
                                t = t.parentElement
                            }
                            window.scrollBy({
                                top: .8 * window.innerHeight,
                                behavior: a ? "auto" : "smooth"
                            })
                        })(e.currentTarget),
                        style: {
                            color: h.light,
                            "--cue-gold": h.goldLight
                        },
                        children: [(0, a.jsx)("span", {
                            className: `${e$.default.cueText} inv-scroll-cue`,
                            children: c("hero.scrollHint")
                        }), (0, a.jsx)("span", {
                            className: e$.default.cueTrack,
                            "aria-hidden": "true",
                            children: (0, a.jsx)("i", {})
                        }), (0, a.jsxs)("svg", {
                            className: e$.default.cueChevrons,
                            viewBox: "0 0 24 30",
                            fill: "none",
                            "aria-hidden": "true",
                            children: [(0, a.jsx)("path", {
                                d: "M5 5l7 6 7-6"
                            }), (0, a.jsx)("path", {
                                d: "M5 13l7 6 7-6"
                            }), (0, a.jsx)("path", {
                                d: "M5 21l7 6 7-6"
                            })]
                        })]
                    })
                })]
            })]
        })
    }

    function eJ(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        (0, t.useEffect)(() => {
            let t = e.current;
            if (!t || "u" < typeof IntersectionObserver) return;
            let l = new IntersectionObserver(e => {
                let [a] = e;
                return t.toggleAttribute("data-live", a.isIntersecting)
            }, {
                threshold: a
            });
            return l.observe(t), () => l.disconnect()
        }, [e, a])
    }
    var eV = e.i(642895),
        eK = e.i(843863),
        eY = e.i(337414),
        eZ = e.i(888531);
    let eQ = ["petal-rose-deep", "petal-rose", "petal-rose-pale", "petal-rose-deep", "petal-jasmine"];

    function eX(e) {
        let {
            one: t,
            two: s,
            date: r,
            wedding: i,
            events: n,
            logo: o,
            shareUrl: d,
            shareSettings: c,
            watermarkEnabled: u,
            onReplay: h
        } = e, m = (0, l.r)("inviteThemes.chaand-bagh.closing"), p = (0, l.r)("share"), {
            theme: f,
            tones: g,
            lite: y
        } = eq(), v = `${t} & ${s}`, x = (null == i ? void 0 : i.date) ? (0, eK.f)(i) : null, j = A(n, v), b = { ...f,
            palette: { ...f.palette,
                text: g.light,
                primary: g.goldLight,
                muted: (0, k.L)(g.light, .7)
            }
        };
        return (0, a.jsxs)("footer", {
            id: "chaand-closing",
            className: e$.default.closing,
            "aria-labelledby": "chaand-closing-title",
            style: {
                "--closing-p": `url("${Q("closing-p")}")`,
                "--closing-w": `url("${Q("closing-w")}")`,
                "--closing-aspect-p": Z["closing-p"].w / Z["closing-p"].h,
                "--closing-aspect-w": Z["closing-w"].w / Z["closing-w"].h,
                "--sky-p": eg,
                "--sky-w": ex,
                "--sky-pigment-p": ey,
                "--sky-pigment-w": ej,
                "--crescent-x-p": ev[0],
                "--crescent-y-p": ev[1],
                "--crescent-x-w": eb[0],
                "--crescent-y-w": eb[1],
                "--curtain": `url("${Q("flower-curtain")}")`,
                "--rod-share": .0335,
                "--ground": g.nightDeep,
                "--crescent-glow": (0, k.L)(g.moonGlow, .55),
                "--rod-gold": g.gold,
                "--rod-light": g.goldLight,
                "--rod-deep": g.goldDeep
            },
            children: [(0, a.jsxs)("div", {
                className: e$.default.closingCopy,
                children: [o ? (0, a.jsx)("span", {
                    className: e$.default.closingMark,
                    "aria-hidden": "true",
                    style: {
                        "--mark": `url("${o}")`,
                        backgroundColor: g.goldLight
                    }
                }) : null, (0, a.jsx)(eY.b, {
                    children: (0, a.jsx)("p", {
                        className: e$.default.eyebrow,
                        style: {
                            fontFamily: eC,
                            color: g.goldLight
                        },
                        children: m("eyebrow")
                    })
                }), (0, a.jsx)(eY.b, {
                    children: (0, a.jsxs)("h2", {
                        id: "chaand-closing-title",
                        className: e$.default.closingNames,
                        style: eM(f, g.light),
                        children: [(0, a.jsx)("span", {
                            "data-couple-name": !0,
                            dir: "auto",
                            children: t
                        }), (0, a.jsx)("span", {
                            className: e$.default.closingAnd,
                            style: {
                                fontFamily: eC,
                                color: g.goldLight
                            },
                            children: m("and")
                        }), (0, a.jsx)("span", {
                            "data-couple-name": !0,
                            dir: "auto",
                            children: s
                        })]
                    })
                }), r ? (0, a.jsx)(eY.b, {
                    children: (0, a.jsx)("p", {
                        className: e$.default.closingDate,
                        style: {
                            fontFamily: f.headingFont,
                            color: g.goldLight
                        },
                        children: r
                    })
                }) : null, (0, a.jsx)(eY.b, {
                    children: (0, a.jsx)("p", {
                        className: e$.default.closingThanks,
                        style: {
                            color: (0, k.L)(g.light, .86)
                        },
                        children: m("thankYou")
                    })
                }), x || j ? (0, a.jsx)(eY.b, {
                    children: (0, a.jsxs)("div", {
                        className: e$.default.closingActions,
                        "data-export-hide": !0,
                        children: [x ? (0, a.jsx)(eI, {
                            href: x,
                            external: !0,
                            night: !0,
                            children: m("googleCalendar")
                        }) : null, j ? (0, a.jsx)(eI, {
                            href: j,
                            download: P(v),
                            night: !0,
                            children: m("ics")
                        }) : null]
                    })
                }) : null, (0, a.jsx)(eY.b, {
                    children: (0, a.jsxs)("div", {
                        className: e$.default.closingShare,
                        "data-export-hide": !0,
                        children: [(0, a.jsx)("p", {
                            className: e$.default.closingShareLabel,
                            style: {
                                color: (0, k.L)(g.light, .7)
                            },
                            children: p("heading")
                        }), (0, a.jsx)(eV.f, {
                            url: d,
                            title: v,
                            settings: c,
                            theme: b
                        })]
                    })
                }), h ? (0, a.jsx)("button", {
                    type: "button",
                    className: e$.default.replay,
                    onClick: h,
                    "data-export-hide": !0,
                    style: {
                        color: g.goldLight,
                        borderColor: (0, k.L)(g.goldLight, .5)
                    },
                    children: m("replay")
                }) : null, u ? (0, a.jsx)(e0, {
                    color: (0, k.L)(g.light, .6)
                }) : null]
            }), (0, a.jsxs)("div", {
                className: e$.default.closingScene,
                "aria-hidden": "true",
                children: [(0, a.jsx)("span", {
                    className: e$.default.closingArt
                }), (0, a.jsx)("span", {
                    className: e$.default.crescentGlow
                }), (0, a.jsx)("div", {
                    className: e$.default.closingShower,
                    children: Array.from({
                        length: y ? 8 : 16
                    }, (e, t) => (0, a.jsx)("img", {
                        className: e$.default.showerPetal,
                        src: Q(eQ[t % eQ.length]),
                        alt: "",
                        loading: "lazy",
                        decoding: "async",
                        style: {
                            left: `${Y(22,78,K(5,t,1))}%`,
                            "--d": `${Y(5.5,9,K(5,t,2))}s`,
                            "--delay": `${-Y(0,9,K(5,t,3))}s`,
                            "--sway": `${Y(-6,6,K(5,t,4))}cqw`,
                            "--spin": `${Math.round(Y(-320,320,K(5,t,5)))}deg`,
                            "--s": Y(.7, 1.25, K(5, t, 6))
                        }
                    }, t))
                }), (0, a.jsx)("span", {
                    className: `${e$.default.curtain} ${e$.default.curtainLeft} ${e$.default.tl}`
                }), (0, a.jsx)("span", {
                    className: `${e$.default.curtain} ${e$.default.curtainRight} ${e$.default.tl}`
                }), (0, a.jsx)("span", {
                    className: e$.default.curtainRod
                })]
            })]
        })
    }

    function e0(e) {
        let {
            color: t
        } = e;
        return (0, a.jsx)("p", {
            id: "invite-watermark",
            className: e$.default.watermark,
            children: (0, a.jsx)("a", {
                href: "/",
                target: "_blank",
                rel: "noopener noreferrer",
                style: {
                    color: t
                },
                children: (0, a.jsx)(eZ.LocalizedWatermarkText, {})
            })
        })
    }
    var e1 = e.i(412589),
        e2 = e.i(348892),
        e6 = e.i(849517);
    let e8 = () => 1e3 * Math.floor(Date.now() / 1e3);

    function e4(e) {
        let {
            target: s,
            event: r,
            events: n
        } = e, o = (0, l.r)("inviteThemes.chaand-bagh.countdown"), d = (0, x.f)(), {
            theme: u,
            tones: h
        } = eq(), [m, p] = (0, c.i)(.22), f = (0, c.d)(m, "200px 0px"), [g, y] = (0, t.useState)(!1);
        (0, t.useEffect)(() => {
            if ("in" !== p) return;
            let e = window.setTimeout(() => y(!0), 2800);
            return () => window.clearTimeout(e)
        }, [p]);
        let v = "armed" === p || "in" === p && !g,
            j = (0, t.useCallback)(e => {
                let a = window.setInterval(e, f ? 1e3 : 3e4);
                return () => window.clearInterval(a)
            }, [f]),
            b = (0, t.useSyncExternalStore)(j, e8, () => null),
            w = null === b ? null : Math.max(0, s.getTime() - b),
            N = null !== w && 0 === w,
            _ = null === w ? null : Math.floor(w / 864e5),
            $ = null === w ? null : {
                days: _,
                hours: Math.floor(w % 864e5 / 36e5),
                minutes: Math.floor(w % 36e5 / 6e4),
                seconds: Math.floor(w % 6e4 / 1e3)
            },
            W = null === w ? 0 : Math.min(w / 864e5, 365) / 365 * 180,
            C = null === b ? "0s" : `${-(b/1e3%60).toFixed(0)}s`,
            F = (null == r ? void 0 : r.date) ? [d.date(r.date, {
                weekday: "long"
            }), d.eventTimeOf(r)].filter(Boolean).join(" · ") : "",
            L = r ? (0, i.A)(r) : "",
            S = r && (L || r.venueAddress || r.mapsUrl) ? q(r) : null,
            T = [...new Set(n.map(e => {
                var a;
                return null == (a = e.dressCode) ? void 0 : a.trim()
            }).filter(e => !!e))].slice(0, 3),
            O = {
                "--mater": `url("${Q("astrolabe-mater")}")`,
                "--rete": `url("${Q("astrolabe-rete")}")`,
                "--mater-ratio": Z["astrolabe-mater"].w / Z["astrolabe-mater"].h,
                "--hub-y": "60.47%",
                "--disc": "99.59%",
                "--rete-size": .8,
                "--rule": `${W.toFixed(2)}deg`,
                "--rete-delay": C,
                "--brass": h.gold,
                "--brass-light": h.goldLight,
                "--brass-deep": h.goldDeep,
                "--astro-glow": (0, k.L)(h.lamplight, N ? .5 : .3),
                "--star": (0, k.L)(h.moon, .8),
                "--dial": (0, k.L)(h.nightDeep, .6),
                "--digit": h.light,
                "--card-border": `url("${ed.card.src}")`,
                "--card-slice": ed.card.slice,
                "--paper": `url("${Q("paper")}")`,
                "--finial": `url("${Q("finial")}")`,
                "--good-ink": h.ink,
                "--good-label": h.goldDeep,
                "--good-ring": h.gold,
                "--good-icon": h.firozi,
                "--good-glow": (0, k.L)(h.moonGlow, .35)
            },
            R = [
                ["days", o("days")],
                ["hours", o("hours")],
                ["minutes", o("minutes")],
                ["seconds", o("seconds")]
            ];
        return (0, a.jsxs)("section", {
            ref: m,
            id: "chaand-countdown",
            className: e$.default.countdown,
            style: O,
            "aria-labelledby": "chaand-countdown-title",
            "data-done": N ? "" : void 0,
            "data-reveal": p,
            "data-live": f ? "" : void 0,
            children: [(0, a.jsx)("span", {
                className: e$.default.cdStars,
                "aria-hidden": "true"
            }), (0, a.jsx)(eU, {
                id: "chaand-countdown-title",
                eyebrow: o("eyebrow"),
                title: o(N ? "titleDone" : "title"),
                night: !0
            }), (0, a.jsxs)("div", {
                className: e$.default.astrolabe,
                "aria-hidden": "true",
                children: [(0, a.jsx)("span", {
                    className: e$.default.astroGlow
                }), (0, a.jsx)("span", {
                    className: e$.default.mater,
                    children: (0, a.jsx)("span", {
                        className: e$.default.materSheen
                    })
                }), (0, a.jsx)("span", {
                    className: e$.default.reteSwing,
                    children: (0, a.jsx)("span", {
                        className: e$.default.rete
                    })
                }), (0, a.jsx)("span", {
                    className: e$.default.ruleTurn,
                    children: (0, a.jsxs)("svg", {
                        className: e$.default.alidade,
                        viewBox: "0 0 20 200",
                        preserveAspectRatio: "none",
                        children: [(0, a.jsx)("path", {
                            d: "M10 2l4.2 22H5.8zM8.6 24h2.8v76H8.6z",
                            fill: "var(--brass-light)",
                            stroke: "var(--brass-deep)",
                            strokeWidth: "0.6"
                        }), (0, a.jsx)("path", {
                            d: "M10 7.5l1.6 3.4-1.6 3.4-1.6-3.4z",
                            fill: "var(--brass-deep)"
                        }), (0, a.jsx)("path", {
                            d: "M8.2 100h3.6v52H8.2zM6.4 152h7.2v10H6.4z",
                            fill: "var(--brass)",
                            stroke: "var(--brass-deep)",
                            strokeWidth: "0.6"
                        }), (0, a.jsx)("path", {
                            d: "M5 58h10v7H5z",
                            fill: "var(--brass)",
                            stroke: "var(--brass-deep)",
                            strokeWidth: "0.6"
                        }), (0, a.jsx)("circle", {
                            cx: "10",
                            cy: "100",
                            r: "6",
                            fill: "var(--brass)",
                            stroke: "var(--brass-deep)",
                            strokeWidth: "0.8"
                        }), (0, a.jsx)("circle", {
                            cx: "10",
                            cy: "100",
                            r: "2.2",
                            fill: "var(--brass-deep)"
                        })]
                    })
                })]
            }), N ? null : (0, a.jsx)("div", {
                className: e$.default.clock,
                role: "timer",
                "aria-label": null === _ ? o("title") : o("daysToGo", {
                    count: _
                }),
                children: R.map((e, t) => {
                    let [l, s] = e;
                    return (0, a.jsxs)("div", {
                        className: e$.default.dial,
                        "aria-hidden": "true",
                        style: {
                            "--i": t
                        },
                        "data-rolling": v ? "" : void 0,
                        children: [(0, a.jsx)("span", {
                            className: e$.default.dialDigits,
                            children: null === $ ? (0, a.jsx)("span", {
                                className: e$.default.placeholder,
                                children: "--"
                            }) : String($[l]).padStart(2, "0").split("").map((e, t, l) => (0, a.jsx)(e5, {
                                digit: "armed" === p ? 0 : Number(e)
                            }, l.length - t))
                        }), (0, a.jsx)("span", {
                            className: e$.default.dialLabel,
                            children: s
                        })]
                    }, l)
                })
            }), F || L || T.length > 0 ? (0, a.jsxs)("div", {
                className: e$.default.goodToKnow,
                style: {
                    "--i": 4
                },
                children: [(0, a.jsx)("span", {
                    className: e$.default.goodFinial,
                    "aria-hidden": "true"
                }), (0, a.jsx)("p", {
                    className: e$.default.goodEyebrow,
                    style: {
                        fontFamily: eC,
                        color: h.goldDeep
                    },
                    children: o("goodEyebrow")
                }), (0, a.jsx)("h3", {
                    className: e$.default.goodTitle,
                    style: eM(u, h.firozi),
                    children: o("goodToKnow")
                }), (0, a.jsx)(eB, {
                    color: h.gold,
                    rose: h.rose,
                    className: e$.default.goodRule
                }), (0, a.jsxs)("ul", {
                    className: e$.default.goodList,
                    children: [F ? (0, a.jsxs)("li", {
                        className: e$.default.goodFact,
                        children: [(0, a.jsx)("span", {
                            className: e$.default.goodIcon,
                            children: (0, a.jsx)(e1.f, {
                                "aria-hidden": "true"
                            })
                        }), (0, a.jsx)("span", {
                            className: e$.default.goodLabel,
                            children: o("when")
                        }), (0, a.jsx)("span", {
                            className: e$.default.goodBody,
                            style: {
                                fontFamily: u.headingFont
                            },
                            children: F
                        })]
                    }) : null, L ? (0, a.jsxs)("li", {
                        className: e$.default.goodFact,
                        children: [(0, a.jsx)("span", {
                            className: e$.default.goodIcon,
                            children: (0, a.jsx)(e2.f, {
                                "aria-hidden": "true"
                            })
                        }), (0, a.jsx)("span", {
                            className: e$.default.goodLabel,
                            children: o("where")
                        }), (0, a.jsx)("span", {
                            className: e$.default.goodBody,
                            dir: "auto",
                            style: {
                                fontFamily: u.headingFont
                            },
                            children: L
                        }), S ? (0, a.jsx)("a", {
                            href: S,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: e$.default.goodLink,
                            "data-export-hide": !0,
                            children: o("viewLocation")
                        }) : null]
                    }) : null, T.length > 0 ? (0, a.jsxs)("li", {
                        className: e$.default.goodFact,
                        children: [(0, a.jsx)("span", {
                            className: e$.default.goodIcon,
                            children: (0, a.jsx)(e6.f, {
                                "aria-hidden": "true"
                            })
                        }), (0, a.jsx)("span", {
                            className: e$.default.goodLabel,
                            children: o("dress")
                        }), (0, a.jsx)("span", {
                            className: e$.default.goodBody,
                            style: {
                                fontFamily: u.headingFont
                            },
                            children: T.join(" · ")
                        })]
                    }) : null]
                })]
            }) : null]
        })
    }

    function e5(e) {
        let {
            digit: t
        } = e;
        return (0, a.jsx)("span", {
            className: e$.default.roll,
            children: (0, a.jsx)("span", {
                className: e$.default.rollStrip,
                style: {
                    translate: `0 ${-(10*t)}%`
                },
                children: "0123456789".split("").map(e => (0, a.jsx)("span", {
                    children: e
                }, e))
            })
        })
    }
    var e7 = e.i(83211);

    function e3(e) {
        var s;
        let {
            events: r
        } = e, i = (0, l.r)("inviteThemes.chaand-bagh.events"), {
            tones: n
        } = eq(), o = (0, t.useRef)(null);
        s = o, (0, t.useEffect)(() => {
            let e = s.current;
            if (!e || "u" < typeof IntersectionObserver) return;
            let a = new IntersectionObserver(e => {
                for (let a of e) a.target.toggleAttribute("data-live", a.intersectionRatio >= at)
            }, {
                threshold: at
            });
            return e.querySelectorAll(`.${e$.default.window}`).forEach(e => a.observe(e)), () => a.disconnect()
        }, [s]);
        let d = function(e) {
            let [a, l] = (0, t.useState)({
                w: 120,
                h: 0,
                d: ""
            });
            return (0, t.useEffect)(() => {
                let a = e.current;
                if (!a || "u" < typeof ResizeObserver) return;
                let t = () => {
                    let e = Math.round(a.offsetHeight);
                    if (e <= 0) return;
                    let t = Math.max(1, Math.round(e / 520)),
                        s = e / t,
                        r = "M 60 0";
                    for (let e = 0; e < t; e++) {
                        let a = e * s,
                            t = e % 2 ? -1 : 1;
                        r += ` C ${60+46*t} ${(a+.33*s).toFixed(1)}, ${60-46*t} ${(a+.66*s).toFixed(1)}, 60 ${(a+s).toFixed(1)}`
                    }
                    l(a => a.h === e ? a : {
                        w: 120,
                        h: e,
                        d: r
                    })
                };
                t();
                let s = new ResizeObserver(t);
                return s.observe(a), () => s.disconnect()
            }, [e]), a
        }(o);
        return (0, a.jsxs)("section", {
            id: "chaand-events",
            className: e$.default.events,
            "aria-labelledby": "chaand-events-title",
            style: {
                "--frame": `url("${Q("events/window-frame")}")`,
                "--fore": `url("${Q("events/window-fore")}")`,
                "--card-border": `url("${ed.card.src}")`,
                "--card-slice": ed.card.slice,
                "--crown-sit": `${.62*eh.base/eh.aspect*100}%`,
                "--ember": (0, k.L)(n.lamplight, .95),
                "--spark": n.moon,
                "--glow": (0, k.L)(n.lamplight, .55),
                "--jet": `url("${Q("fountain-jet")}")`,
                "--jet-ratio": Z["fountain-jet"].w / Z["fountain-jet"].h,
                "--ribbon": n.gold,
                "--ribbon-light": n.goldLight
            },
            children: [(0, a.jsx)(eU, {
                id: "chaand-events-title",
                eyebrow: i("eyebrow"),
                title: i("title")
            }), (0, a.jsxs)("div", {
                className: e$.default.rail,
                "aria-hidden": "true",
                children: [(0, a.jsx)("div", {
                    className: `${e$.default.railClip} ${e$.default.tl}`,
                    children: (0, a.jsxs)("svg", {
                        className: `${e$.default.railInner} ${e$.default.tl}`,
                        width: d.w,
                        height: d.h,
                        viewBox: `0 0 ${d.w} ${d.h}`,
                        fill: "none",
                        children: [(0, a.jsx)("path", {
                            d: d.d,
                            stroke: "var(--ribbon)",
                            strokeOpacity: "0.55",
                            strokeWidth: "5",
                            strokeLinecap: "round"
                        }), (0, a.jsx)("path", {
                            d: d.d,
                            stroke: "var(--ribbon-light)",
                            strokeOpacity: "0.7",
                            strokeWidth: "1.2",
                            strokeLinecap: "round"
                        })]
                    })
                }), d.d ? (0, a.jsxs)("span", {
                    className: `${e$.default.railDiya} ${e$.default.tl}`,
                    style: {
                        offsetPath: `path("${d.d}")`,
                        "--qandeel-ratio": eu.aspect
                    },
                    children: [(0, a.jsx)("span", {
                        className: e$.default.diyaGlow
                    }), (0, a.jsx)("img", {
                        src: Q("qandeel"),
                        alt: "",
                        width: Z.qandeel.w,
                        height: Z.qandeel.h,
                        loading: "lazy",
                        decoding: "async"
                    })]
                }) : null]
            }), (0, a.jsx)("ol", {
                ref: o,
                className: e$.default.rows,
                children: r.map((e, t) => {
                    let l, s, i = {
                        key: l = S(e),
                        src: Q(`events/${l}`),
                        fx: ep[l]
                    };
                    return (0, a.jsxs)("li", {
                        className: e$.default.row,
                        "data-side": t % 2 ? "right" : "left",
                        "data-scene": i.key,
                        children: [(0, a.jsxs)("div", {
                            className: e$.default.window,
                            "aria-hidden": "true",
                            children: [(0, a.jsxs)("div", {
                                className: e$.default.windowArt,
                                children: [(0, a.jsxs)("div", {
                                    className: `${e$.default.sceneArt} ${e$.default.tl}`,
                                    children: [(0, a.jsx)("img", {
                                        src: i.src,
                                        alt: "",
                                        width: 820,
                                        height: 1230,
                                        loading: "lazy",
                                        decoding: "async",
                                        draggable: !1
                                    }), (0, a.jsx)(ae, {
                                        bits: ef[i.key]
                                    })]
                                }), (0, a.jsx)(aa, {
                                    fx: i.fx,
                                    seed: t + 1
                                }), (0, a.jsx)("span", {
                                    className: `${e$.default.windowFore} ${e$.default.tl}`
                                })]
                            }), (0, a.jsx)("span", {
                                className: e$.default.windowFrame
                            })]
                        }), (0, a.jsxs)(eY.b, {
                            className: e$.default.cardWrap,
                            children: [(0, a.jsx)("img", {
                                className: e$.default.crown,
                                src: eh.src,
                                alt: "",
                                "aria-hidden": "true",
                                width: Z["events/crest"].w,
                                height: Z["events/crest"].h,
                                loading: "lazy",
                                decoding: "async"
                            }), (0, a.jsx)(e9, {
                                event: e,
                                index: t,
                                total: r.length,
                                night: (s = i.key, T.has(s))
                            })]
                        })]
                    }, e.id)
                })
            })]
        })
    }

    function e9(e) {
        var s, r, n, o;
        let {
            event: d,
            index: c,
            total: u,
            night: m
        } = e, p = (0, l.r)("inviteThemes.chaand-bagh.events"), f = (0, x.f)(), g = (0, h.f)(), {
            theme: y,
            tones: v
        } = eq(), j = f.eventTimeOf(d, {
            viewerTimezone: g
        }), b = d.date ? f.date(d.date, {
            weekday: "long"
        }) : "", w = (0, i.A)(d), N = null == (s = d.venueAddress) ? void 0 : s.trim(), _ = null == (r = d.dressCode) ? void 0 : r.trim(), $ = (0, i.L)(d.dressCodeColor), W = (0, i.B)(d), C = w || N || d.mapsUrl ? q(d) : null, F = (null == (n = d.name) ? void 0 : n.trim()) || p("fallbackName"), L = (0, t.useRef)(null);
        (0, e7._)(L, F);
        let S = (null == (o = d.description) ? void 0 : o.trim()) ?? "",
            T = !!S && !0 === d.descriptionOnTop,
            O = d.date ? (0, eK.f)(d) : null,
            R = A([d], F),
            M = m ? v.light : v.ink,
            E = {
                "--card-ink": M,
                "--card-muted": m ? (0, k.L)(v.light, .72) : v.muted,
                "--card-label": m ? v.goldLight : v.goldDeep,
                "--card-ground": m ? (0, k.L)(v.nightDeep, .82) : (0, k.L)(v.paper, .94),
                "--foil-a": m ? v.goldLight : v.goldDeep,
                "--foil-b": m ? v.moon : v.gold,
                "--foil-c": m ? v.gold : v.goldDeep
            };
        return (0, a.jsxs)("article", {
            id: `event-${d.id}`,
            className: e$.default.card,
            "data-night": m ? "" : void 0,
            style: E,
            children: [(0, a.jsx)("p", {
                className: e$.default.cardCount,
                children: p("count", {
                    n: c + 1,
                    total: u
                })
            }), T ? (0, a.jsx)(eE, {
                text: S,
                className: e$.default.cardInvocation,
                arabicClassName: e$.default.cardInvocationArabic
            }) : null, b ? (0, a.jsx)("p", {
                className: e$.default.cardDate,
                style: {
                    fontFamily: eC
                },
                children: b
            }) : null, (0, a.jsx)("h3", {
                ref: L,
                className: e$.default.cardName,
                dir: "auto",
                style: eM(y, M),
                children: F
            }), (0, a.jsx)(eB, {
                color: m ? (0, k.L)(v.goldLight, .8) : v.gold,
                rose: v.rose,
                className: e$.default.cardRule
            }), j || w || N || _ || W.length > 0 ? (0, a.jsxs)("dl", {
                className: e$.default.cardFacts,
                children: [j ? (0, a.jsxs)("div", {
                    children: [(0, a.jsx)("dt", {
                        children: p("time")
                    }), (0, a.jsx)("dd", {
                        children: j
                    })]
                }) : null, w || N ? (0, a.jsxs)("div", {
                    children: [(0, a.jsx)("dt", {
                        children: p("venue")
                    }), (0, a.jsxs)("dd", {
                        children: [w || N, w && N ? (0, a.jsx)("span", {
                            className: e$.default.cardAddress,
                            children: N
                        }) : null]
                    })]
                }) : null, _ ? (0, a.jsxs)("div", {
                    children: [(0, a.jsx)("dt", {
                        children: p("attire")
                    }), (0, a.jsxs)("dd", {
                        children: [$ ? (0, a.jsx)("i", {
                            className: e$.default.swatch,
                            style: {
                                background: $
                            },
                            "aria-hidden": "true"
                        }) : null, _]
                    })]
                }) : null, W.length > 0 ? (0, a.jsxs)("div", {
                    children: [(0, a.jsx)("dt", {
                        children: p("rituals")
                    }), (0, a.jsx)("dd", {
                        children: (0, a.jsx)("ol", {
                            className: e$.default.steps,
                            children: W.map(e => (0, a.jsxs)("li", {
                                children: [e.time ? (0, a.jsx)("span", {
                                    children: f.time(e.time)
                                }) : null, e.title]
                            }, e.id))
                        })
                    })]
                }) : null]
            }) : null, S && !T ? (0, a.jsx)("p", {
                className: e$.default.cardNote,
                dir: "auto",
                children: d.description
            }) : null, C || O || R ? (0, a.jsxs)("div", {
                className: e$.default.cardActions,
                "data-export-hide": !0,
                children: [C ? (0, a.jsx)(eI, {
                    href: C,
                    external: !0,
                    night: m,
                    children: p("directions")
                }) : null, O ? (0, a.jsx)(eI, {
                    href: O,
                    external: !0,
                    night: m,
                    ariaLabel: p("googleCalendarLabel", {
                        name: F
                    }),
                    children: p("googleCalendar")
                }) : null, R ? (0, a.jsx)(eI, {
                    href: R,
                    download: P(F),
                    night: m,
                    ariaLabel: p("icsLabel", {
                        name: F
                    }),
                    children: p("ics")
                }) : null]
            }) : null]
        })
    }

    function ae(e) {
        let {
            bits: t
        } = e, {
            lite: l
        } = eq();
        return (0, a.jsx)("div", {
            className: e$.default.life,
            children: t.map((e, t) => {
                let s = {
                    left: `${e.x}%`,
                    top: `${e.y}%`,
                    "--t": `${-("t"in e?e.t??0:0)}s`
                };
                switch (e.kind) {
                    case "flame":
                        return (0, a.jsx)("span", {
                            className: e$.default.lifeFlame,
                            style: { ...s,
                                width: `${e.s}%`
                            }
                        }, t);
                    case "moon":
                        return (0, a.jsx)("span", {
                            className: e$.default.lifeMoon,
                            style: { ...s,
                                width: `${2.2*e.s}%`
                            }
                        }, t);
                    case "shimmer":
                        return (0, a.jsx)("span", {
                            className: e$.default.lifeShimmer,
                            style: { ...s,
                                width: `${e.w}%`,
                                height: `${e.h}%`
                            }
                        }, t);
                    case "steam":
                        return l ? null : (0, a.jsxs)("span", {
                            className: e$.default.lifeSteam,
                            style: s,
                            children: [(0, a.jsx)("i", {}), (0, a.jsx)("i", {})]
                        }, t);
                    case "jet":
                        return l ? null : (0, a.jsx)("span", {
                            className: e$.default.lifeJet,
                            style: { ...s,
                                width: `${e.s}%`
                            }
                        }, t)
                }
            })
        })
    }

    function aa(e) {
        let {
            fx: t,
            seed: l
        } = e, {
            lite: s
        } = eq(), r = s ? .5 : 1, i = t.petals ? Math.round(12 * r) : 0, n = t.embers ? Math.round(12 * r) : 0, o = t.sparks ? Math.round(14 * r) : 0;
        return (0, a.jsxs)("div", {
            className: `${e$.default.fx} ${e$.default.tl}`,
            children: [t.glow ? (0, a.jsx)("span", {
                className: e$.default.fxGlow,
                style: {
                    left: `${t.glow[0]}%`,
                    top: `${t.glow[1]}%`
                }
            }) : null, Array.from({
                length: n
            }, (e, s) => (0, a.jsx)("span", {
                className: e$.default.ember,
                style: {
                    left: `${Y(t.embers[0],t.embers[1],K(l,s,1))}%`,
                    top: t.glow ? `${t.glow[1]-2}%` : `${Y(62,82,K(l,s,6))}%`,
                    "--d": `${Y(2.6,4.6,K(l,s,2))}s`,
                    "--delay": `${-Y(0,4.6,K(l,s,3))}s`,
                    "--sway": `${Y(-18,18,K(l,s,4))}px`,
                    "--s": Y(.6, 1.3, K(l, s, 5))
                }
            }, `e${s}`)), Array.from({
                length: o
            }, (e, t) => (0, a.jsx)("span", {
                className: e$.default.spark,
                style: {
                    left: `${Y(10,90,K(l,t,11))}%`,
                    top: `${Y(8,40,K(l,t,12))}%`,
                    "--d": `${Y(1.8,3.8,K(l,t,13))}s`,
                    "--delay": `${-Y(0,3.8,K(l,t,14))}s`,
                    "--s": Y(.5, 1.2, K(l, t, 15))
                }
            }, `s${t}`)), Array.from({
                length: i
            }, (e, s) => (0, a.jsx)("img", {
                className: e$.default.petal,
                src: Q(t.petals[s % t.petals.length]),
                alt: "",
                loading: "lazy",
                decoding: "async",
                style: {
                    left: `${Y(4,92,K(l,s,21))}%`,
                    "--d": `${Y(6,11,K(l,s,22))}s`,
                    "--delay": `${-Y(0,11,K(l,s,23))}s`,
                    "--sway": `${Y(-30,30,K(l,s,24))}px`,
                    "--spin": `${Y(-260,260,K(l,s,25))}deg`,
                    "--s": Y(.7, 1.25, K(l, s, 26))
                }
            }, `p${s}`))]
        })
    }
    let at = 1 / 3;
    var al = e.i(431817),
        as = e.i(316616),
        ar = e.i(735388),
        ai = e.i(736642),
        an = e.i(174241),
        ao = e.i(230715);
    let ad = ["res.cloudinary.com", "images.unsplash.com"],
        ac = "chaand-photo";

    function au(e) {
        let {
            photo: t,
            alt: l,
            sizes: s,
            className: r
        } = e;
        return ! function(e) {
            if (e.startsWith("/")) return !0;
            try {
                return ad.includes(new URL(e).hostname)
            } catch {
                return !1
            }
        }(t.url) ? (0, a.jsx)("img", {
            src: t.url,
            alt: l,
            loading: "lazy",
            decoding: "async",
            className: r,
            draggable: !1
        }) : (0, a.jsx)(al.default, {
            src: t.url,
            alt: l,
            fill: !0,
            sizes: s,
            className: r,
            draggable: !1
        })
    }

    function ah(e) {
        let a = document;
        "function" != typeof a.startViewTransition || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? e() : a.startViewTransition(() => (0, as.flushSync)(e))
    }

    function am(e) {
        var s;
        let {
            photos: i
        } = e, n = (0, l.r)("inviteThemes.chaand-bagh.gallery"), o = (0, l.r)("invite.gallery"), {
            tones: d,
            reduce: u
        } = eq(), h = (0, r.L)(), m = (0, t.useRef)(null), [p, f] = (0, c.i)(.2), g = (0, t.useRef)(null), [y, v] = (0, t.useState)(0), [x, j] = (0, t.useState)(null), [b, w] = (0, t.useState)(0), [N, _] = (0, t.useState)(4), $ = (0, t.useRef)(null), W = i.length, C = h && W >= 4 ? "pair" : 0 === W ? "empty" : 1 === W ? "single" : W < 4 ? "pair" : "row", F = e => {
            var a;
            return (null == (a = e.caption) ? void 0 : a.trim()) || o("photoAlt")
        };
        eJ(p), (0, t.useEffect)(() => {
            let e = g.current;
            if (!e) return;
            let a = 0,
                t = () => {
                    a = 0;
                    let t = af(e);
                    w(Math.round(e.scrollLeft / t)), _(Math.max(1, Math.round((e.clientWidth + ap(e)) / t)))
                },
                l = () => {
                    a || (a = requestAnimationFrame(t))
                };
            e.addEventListener("scroll", l, {
                passive: !0
            });
            let s = "u" < typeof ResizeObserver ? null : new ResizeObserver(l);
            return null == s || s.observe(e), t(), () => {
                e.removeEventListener("scroll", l), null == s || s.disconnect(), cancelAnimationFrame(a)
            }
        }, [C]);
        let L = e => {
                let a = g.current;
                a && a.scrollTo({
                    left: Math.max(0, e) * af(a),
                    behavior: u ? "auto" : "smooth"
                })
            },
            S = () => {
                ah(() => {
                    var e;
                    null == (e = m.current) || e.close(), j(y)
                }), window.setTimeout(() => j(null), 400)
            },
            T = (0, t.useCallback)(e => v(a => (a + e + W) % W), [W]),
            O = {
                "--wall": `url("${Q("sheesh-tile")}")`,
                "--arch": `url("${Q("mirror-arch")}")`,
                "--arch-ratio": Z["mirror-arch"].w / Z["mirror-arch"].h,
                "--ox0": .0969,
                "--oy0": .0813,
                "--ox1": .8953,
                "--oy1": .8969,
                "--keyline": d.gold,
                "--keyline-light": d.goldLight,
                "--frame-ground": d.nightDeep,
                "--candle": (0, k.L)(d.lamplight, .3),
                "--glint": (0, k.L)(d.moon, .22),
                "--plaque": (0, k.L)(d.nightDeep, .72),
                "--scrim": (0, k.L)(d.nightDeep, .94),
                "--filled": Math.min(1, (b + N) / Math.max(1, W))
            },
            R = (e, t, l, s) => {
                var r;
                return (0, a.jsxs)("figure", {
                    className: e$.default.archFigure,
                    style: {
                        "--i": l
                    },
                    children: [(0, a.jsx)("button", {
                        type: "button",
                        className: e$.default.archButton,
                        onClick: () => {
                            (0, as.flushSync)(() => j(t)), ah(() => {
                                var e;
                                j(null), v(t), null == (e = m.current) || e.showModal()
                            })
                        },
                        "aria-label": F(e),
                        children: (0, a.jsxs)("span", {
                            className: e$.default.archTilt,
                            children: [(0, a.jsx)("span", {
                                className: e$.default.archOpening,
                                style: x === t ? {
                                    viewTransitionName: ac
                                } : void 0,
                                children: (0, a.jsx)("span", {
                                    className: e$.default.archPhoto,
                                    children: (0, a.jsx)(au, {
                                        photo: e,
                                        alt: "",
                                        sizes: s,
                                        className: e$.default.photoImg
                                    })
                                })
                            }), (0, a.jsx)("span", {
                                className: e$.default.archFrame,
                                "aria-hidden": "true"
                            })]
                        })
                    }), (null == (r = e.caption) ? void 0 : r.trim()) ? (0, a.jsx)("figcaption", {
                        className: e$.default.archPlaque,
                        dir: "auto",
                        children: e.caption
                    }) : null]
                }, `${e.publicId||e.url}-${t}`)
            },
            q = Math.min(W, b + 1),
            M = Math.min(W, b + N),
            E = M < W;
        return (0, a.jsxs)("section", {
            ref: p,
            id: "chaand-gallery",
            className: e$.default.gallery,
            "data-arrangement": C,
            "data-reveal": f,
            style: O,
            "aria-labelledby": "chaand-gallery-title",
            children: [(0, a.jsx)("span", {
                className: e$.default.mirrorWall,
                "aria-hidden": "true"
            }), (0, a.jsx)("span", {
                className: e$.default.candlelight,
                "aria-hidden": "true"
            }), (0, a.jsx)("span", {
                className: e$.default.mirrorGlint,
                "aria-hidden": "true"
            }), (0, a.jsx)(eU, {
                id: "chaand-gallery-title",
                eyebrow: n("eyebrow"),
                title: n("title"),
                night: !0,
                className: e$.default.galleryTitle
            }), "empty" === C ? (0, a.jsx)("ul", {
                className: e$.default.archRow,
                children: [0, 1, 2].map(e => (0, a.jsx)("li", {
                    className: e$.default.archFigure,
                    "data-empty": "",
                    style: {
                        "--i": e
                    },
                    children: (0, a.jsxs)("span", {
                        className: e$.default.archButton,
                        children: [(0, a.jsx)("span", {
                            className: e$.default.archOpening,
                            children: 1 === e ? (0, a.jsxs)("span", {
                                className: e$.default.emptyHint,
                                children: [(0, a.jsx)(an.f, {
                                    "aria-hidden": "true",
                                    size: 22
                                }), n("emptyHint")]
                            }) : null
                        }), (0, a.jsx)("span", {
                            className: e$.default.archFrame,
                            "aria-hidden": "true"
                        })]
                    })
                }, e))
            }) : "row" === C ? (0, a.jsxs)("div", {
                className: e$.default.pagerWrap,
                "aria-roledescription": "carousel",
                "aria-label": o("carousel"),
                children: [(0, a.jsx)("div", {
                    ref: g,
                    className: e$.default.pager,
                    children: i.map((e, a) => R(e, a, Math.min(a, 3), "(min-width: 900px) 20vw, 44vw"))
                }), b > 0 ? (0, a.jsx)("button", {
                    type: "button",
                    className: `${e$.default.pageArrow} ${e$.default.pageArrowPrev}`,
                    onClick: () => L(b - 1),
                    "aria-label": o("previous"),
                    "data-export-hide": !0,
                    children: (0, a.jsx)(ar.f, {
                        "aria-hidden": "true"
                    })
                }) : null, E ? (0, a.jsx)("button", {
                    type: "button",
                    className: `${e$.default.pageArrow} ${e$.default.pageArrowNext}`,
                    onClick: () => L(b + 1),
                    "aria-label": o("next"),
                    "data-export-hide": !0,
                    children: (0, a.jsx)(ai.f, {
                        "aria-hidden": "true"
                    })
                }) : null, (0, a.jsxs)("div", {
                    className: e$.default.arcadeFoot,
                    children: [W > N ? (0, a.jsx)("span", {
                        className: e$.default.arcadeLine,
                        "aria-hidden": "true",
                        children: (0, a.jsx)("span", {
                            className: e$.default.arcadeBead
                        })
                    }) : null, (0, a.jsx)("span", {
                        className: e$.default.arcadeCount,
                        "aria-live": "polite",
                        children: W > N ? n("range", {
                            from: q,
                            to: M,
                            total: W
                        }) : n("count", {
                            count: W
                        })
                    })]
                })]
            }) : (0, a.jsx)("div", {
                className: e$.default.archRow,
                children: i.map((e, a) => R(e, a, a, "single" === C ? "(min-width: 768px) 40vw, 80vw" : "(min-width: 768px) 28vw, 72vw"))
            }), W > 0 ? (0, a.jsxs)("dialog", {
                ref: m,
                className: e$.default.viewer,
                "aria-label": o("viewer"),
                onClick: e => {
                    e.target === e.currentTarget && S()
                },
                onCancel: e => {
                    e.preventDefault(), S()
                },
                onKeyDown: e => {
                    "ArrowRight" === e.key && T(1), "ArrowLeft" === e.key && T(-1)
                },
                children: [(0, a.jsxs)("div", {
                    className: e$.default.viewerStage,
                    onPointerDown: e => {
                        $.current = {
                            x: e.clientX,
                            y: e.clientY
                        }
                    },
                    onPointerUp: e => {
                        let a = $.current;
                        if ($.current = null, !a) return;
                        let t = e.clientX - a.x,
                            l = e.clientY - a.y;
                        Math.abs(t) > 48 && Math.abs(t) > Math.abs(l) && T(t < 0 ? 1 : -1)
                    },
                    onPointerCancel: () => {
                        $.current = null
                    },
                    children: [(0, a.jsxs)("figure", {
                        className: e$.default.viewerFigure,
                        children: [(0, a.jsx)("span", {
                            className: e$.default.viewerPhoto,
                            style: null === x ? {
                                viewTransitionName: ac
                            } : void 0,
                            children: (0, a.jsx)(au, {
                                photo: i[y],
                                alt: F(i[y]),
                                sizes: "100vw"
                            })
                        }, y), (0, a.jsxs)("figcaption", {
                            className: e$.default.viewerCaption,
                            children: [(null == (s = i[y].caption) ? void 0 : s.trim()) ? (0, a.jsx)("span", {
                                children: i[y].caption
                            }) : null, (0, a.jsx)("span", {
                                className: e$.default.viewerCount,
                                "aria-live": "polite",
                                children: n("of", {
                                    n: y + 1,
                                    total: W
                                })
                            })]
                        })]
                    }), W > 1 ? (0, a.jsxs)("span", {
                        className: e$.default.viewerPreload,
                        "aria-hidden": "true",
                        children: [(0, a.jsx)(au, {
                            photo: i[(y + 1) % W],
                            alt: "",
                            sizes: "100vw"
                        }), (0, a.jsx)(au, {
                            photo: i[(y - 1 + W) % W],
                            alt: "",
                            sizes: "100vw"
                        })]
                    }) : null]
                }), (0, a.jsx)("button", {
                    type: "button",
                    className: e$.default.viewerClose,
                    onClick: S,
                    "aria-label": o("close"),
                    children: (0, a.jsx)(ao.X, {
                        "aria-hidden": "true"
                    })
                }), W > 1 ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("button", {
                        type: "button",
                        className: `${e$.default.viewerStep} ${e$.default.viewerPrev}`,
                        onClick: () => T(-1),
                        "aria-label": o("previous"),
                        children: (0, a.jsx)(ar.f, {
                            "aria-hidden": "true"
                        })
                    }), (0, a.jsx)("button", {
                        type: "button",
                        className: `${e$.default.viewerStep} ${e$.default.viewerNext}`,
                        onClick: () => T(1),
                        "aria-label": o("next"),
                        children: (0, a.jsx)(ai.f, {
                            "aria-hidden": "true"
                        })
                    })]
                }) : null]
            }) : null]
        })
    }

    function ap(e) {
        return parseFloat(getComputedStyle(e).columnGap) || 0
    }

    function af(e) {
        let a = e.firstElementChild;
        return Math.max(1, ((null == a ? void 0 : a.offsetWidth) ?? e.clientWidth) + ap(e))
    }
    var ag = e.i(159800);
    let ay = ["petal-rose-deep", "petal-rose-pale", "petal-rose", "petal-jasmine", "petal-almond"];

    function av(e, a) {
        let t = e || ((null == a ? void 0 : a.kind) === "upload" ? a.src : "");
        return {
            mark: t,
            ornament: t || (null == a ? void 0 : a.kind) !== "ornament" ? null : a.name,
            glyph: t || (null == a ? void 0 : a.kind) !== "glyph" ? "" : a.text
        }
    }

    function ax(e) {
        let {
            one: s,
            two: r,
            when: i,
            leaving: n,
            invocation: o,
            emblem: d,
            logo: c,
            onOpen: u,
            onSkip: h
        } = e, m = (0, l.r)("inviteThemes.chaand-bagh"), {
            theme: p,
            tones: f
        } = eq(), g = (0, t.useRef)(null), y = V([s, r], 7);
        (0, t.useEffect)(() => {
            var e;
            null == (e = g.current) || e.focus({
                preventScroll: !0
            })
        }, []);
        let v = av(c, d),
            x = f.dark,
            j = (0, k.j)(f.gold, f.dark, .55),
            b = {
                "--marble": `url("${Q("marble-lid")}")`,
                "--lid-border": `url("${ed.lid.src}")`,
                "--lid-slice": ed.lid.slice,
                "--lining": `url("${Q("silk-lining")}")`,
                "--tie": `url("${Q("silk-tie")}")`,
                "--tie-ratio": Z["silk-tie"].w / Z["silk-tie"].h,
                "--knot-ratio": en.aspect,
                "--arm-top": en.arm[0],
                "--arm-bottom": en.arm[1],
                "--tassel-ratio": eo.aspect,
                "--tassel-cord": eo.cord,
                "--ink": x,
                "--gold": j,
                "--gold-light": f.goldLight,
                "--glow": (0, k.L)(f.moonGlow, .6),
                "--shade": (0, k.L)(f.nightDeep, .28),
                "--marble-plain": ei,
                "--panel-line": (0, k.L)(f.gold, .85),
                "--name-scale": y,
                fontFamily: p.bodyFont
            };
        return (0, a.jsxs)("div", {
            ref: g,
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "chaand-gate-names",
            tabIndex: -1,
            className: `${ag.default.gate} ${n?ag.default.leaving:""}`,
            style: b,
            onPointerUp: e => {
                0 !== e.button || e.target.closest("[data-gate-skip]") || u()
            },
            onClick: e => {
                e.target.closest("[data-gate-skip]") || u()
            },
            onKeyDown: e => {
                if ("Escape" === e.key && h(), "Tab" !== e.key) return;
                let a = [...e.currentTarget.querySelectorAll("button:not([disabled])")];
                if (0 === a.length) return;
                let t = a[0],
                    l = a[a.length - 1],
                    s = document.activeElement;
                e.shiftKey && (s === t || s === e.currentTarget) ? (e.preventDefault(), l.focus()) : e.shiftKey || s !== l && s !== e.currentTarget || (e.preventDefault(), t.focus())
            },
            children: [(0, a.jsxs)("div", {
                className: ag.default.casket,
                "aria-hidden": "true",
                children: [(0, a.jsx)("span", {
                    className: `${ag.default.lining} ${ag.default.liningLeft}`
                }), (0, a.jsx)("span", {
                    className: `${ag.default.lining} ${ag.default.liningRight}`
                }), (0, a.jsxs)("span", {
                    className: ag.default.lid,
                    children: [(0, a.jsx)("span", {
                        className: ag.default.lidPanel
                    }), (0, a.jsx)("span", {
                        className: ag.default.lidSheen
                    })]
                })]
            }), (0, a.jsx)("button", {
                type: "button",
                "data-gate-skip": !0,
                className: ag.default.skip,
                onClick: h,
                style: {
                    color: x,
                    borderColor: (0, k.L)(j, .6)
                },
                children: m("gate.skip")
            }), (0, a.jsxs)("div", {
                className: `${ag.default.print} ${ag.default.printTop}`,
                children: [o ? (0, a.jsx)(eE, {
                    text: o,
                    className: ag.default.invocation,
                    arabicClassName: ag.default.invocationArabic,
                    style: {
                        color: j
                    }
                }) : null, (0, a.jsx)(_.GuestGreeting, {
                    className: ag.default.guest,
                    style: {
                        fontFamily: p.headingFont,
                        color: j
                    }
                }), (0, a.jsx)("p", {
                    className: ag.default.kicker,
                    style: {
                        color: (0, k.L)(x, .9)
                    },
                    children: m("gate.kicker")
                }), (0, a.jsxs)("span", {
                    className: ag.default.crest,
                    role: "img",
                    "aria-label": m("gate.crestAlt"),
                    children: [(0, a.jsx)("span", {
                        className: ag.default.crestGlow,
                        "aria-hidden": "true"
                    }), (0, a.jsx)("img", {
                        src: Q("gate-crest"),
                        alt: "",
                        width: Z["gate-crest"].w,
                        height: Z["gate-crest"].h,
                        decoding: "async",
                        draggable: !1
                    })]
                }), (0, a.jsxs)("h2", {
                    id: "chaand-gate-names",
                    className: ag.default.names,
                    style: eM(p, x),
                    children: [(0, a.jsx)("span", {
                        "data-couple-name": !0,
                        dir: "auto",
                        children: s
                    }), (0, a.jsx)("span", {
                        className: ag.default.and,
                        style: {
                            fontFamily: eC,
                            color: j
                        },
                        children: m("gate.and")
                    }), (0, a.jsx)("span", {
                        "data-couple-name": !0,
                        dir: "auto",
                        children: r
                    })]
                })]
            }), (0, a.jsxs)("div", {
                className: ag.default.tie,
                "aria-hidden": "true",
                children: [(0, a.jsx)("span", {
                    className: `${ag.default.band} ${ag.default.bandLeft}`
                }), (0, a.jsx)("span", {
                    className: `${ag.default.band} ${ag.default.bandRight}`
                }), (0, a.jsxs)("span", {
                    className: ag.default.knot,
                    children: [(0, a.jsx)("img", {
                        className: `${ag.default.tassel} ${ag.default.tasselLeft}`,
                        src: Q("tassel"),
                        alt: "",
                        width: Z.tassel.w,
                        height: Z.tassel.h,
                        draggable: !1
                    }), (0, a.jsx)("img", {
                        className: `${ag.default.tassel} ${ag.default.tasselRight}`,
                        src: Q("tassel"),
                        alt: "",
                        width: Z.tassel.w,
                        height: Z.tassel.h,
                        draggable: !1
                    }), (0, a.jsx)("img", {
                        className: ag.default.knotArt,
                        src: Q("tie-knot"),
                        alt: "",
                        width: Z["tie-knot"].w,
                        height: Z["tie-knot"].h,
                        draggable: !1
                    })]
                })]
            }), (0, a.jsxs)("button", {
                type: "button",
                "data-invitation-gate": !0,
                className: ag.default.seal,
                "aria-label": m("gate.openLabel", {
                    names: `${s} & ${r}`
                }),
                onClick: e => {
                    e.stopPropagation(), u()
                },
                children: [(0, a.jsx)("span", {
                    className: ag.default.sealGlow,
                    "aria-hidden": "true"
                }), (0, a.jsx)("img", {
                    className: ag.default.sealRim,
                    src: Q("seal"),
                    alt: "",
                    width: Z.seal.w,
                    height: Z.seal.h,
                    draggable: !1,
                    "aria-hidden": "true"
                }), (0, a.jsx)("span", {
                    className: ag.default.sealFace,
                    "aria-hidden": "true",
                    children: v.mark ? (0, a.jsx)("span", {
                        className: ag.default.sealMark,
                        style: {
                            "--mark": `url("${v.mark}")`,
                            backgroundColor: f.night
                        }
                    }) : "gul" === v.ornament ? (0, a.jsx)(e_.f, {
                        gold: f.night,
                        deep: f.night,
                        accent: f.night,
                        size: 60
                    }) : v.ornament ? (0, a.jsx)(e_.r, {
                        gold: f.night,
                        deep: f.night,
                        accent: f.night,
                        size: 58
                    }) : v.glyph ? (0, a.jsx)("span", {
                        className: ag.default.sealGlyph,
                        lang: z(v.glyph),
                        style: {
                            color: f.night
                        },
                        children: v.glyph
                    }) : null
                })]
            }), (0, a.jsxs)("div", {
                className: `${ag.default.print} ${ag.default.printBottom}`,
                children: [i ? (0, a.jsx)("p", {
                    className: ag.default.when,
                    style: {
                        fontFamily: p.headingFont,
                        color: x
                    },
                    children: i
                }) : null, (0, a.jsx)("p", {
                    className: ag.default.hint,
                    style: {
                        color: (0, k.L)(x, .82)
                    },
                    children: m("gate.hint")
                })]
            }), (0, a.jsx)("div", {
                className: ag.default.puff,
                "aria-hidden": "true",
                children: Array.from({
                    length: 14
                }, (e, t) => {
                    let l = t / 14 * Math.PI * 2 + .6 * K(7, t, 1),
                        s = Y(18, 42, K(7, t, 2));
                    return (0, a.jsx)("img", {
                        src: Q(ay[t % ay.length]),
                        alt: "",
                        className: ag.default.puffPetal,
                        style: {
                            "--dx": `${(Math.cos(l)*s).toFixed(2)}vmin`,
                            "--dy": `${(Math.sin(l)*s-6).toFixed(2)}vmin`,
                            "--spin": `${Math.round(Y(-200,200,K(7,t,3)))}deg`,
                            "--size": `${Y(2.4,4.4,K(7,t,4))}vmin`,
                            animationDelay: `${Y(0,160,K(7,t,5))}ms`
                        }
                    }, t)
                })
            })]
        })
    }
    let aj = ["petal-rose-deep", "petal-jasmine", "petal-rose-pale", "petal-almond"];

    function ab(e) {
        var s;
        let {
            tag: r,
            caption: i,
            logo: n,
            emblem: o
        } = e, d = (0, l.r)("inviteThemes.chaand-bagh.hashtag"), {
            theme: c,
            tones: u,
            reduce: h,
            preview: m
        } = eq(), p = (0, t.useRef)(null), [f, g] = (0, t.useState)("rest"), [y, v] = (0, t.useState)(0), x = r.trim().replace(/^#+/, ""), j = (s = `#${x}`, "u" > typeof Intl && "Segmenter" in Intl ? [...new Intl.Segmenter(void 0, {
            granularity: "grapheme"
        }).segment(s)].map(e => e.segment) : Array.from(s)), b = av(n, o), w = !h && !m, N = (0, t.useRef)(null), _ = (0, t.useRef)(null), $ = (0, t.useRef)(null);
        (0, t.useLayoutEffect)(() => {
            var e;
            let a = N.current;
            if (!w || !a) return;
            let t = () => {
                let e, t = a.getBoundingClientRect(),
                    l = a.querySelector("[data-tag]"),
                    s = [...a.querySelectorAll("[data-letter]")];
                if (!l || 0 === s.length) return;
                let r = s.map(e => {
                        let a = e.getBoundingClientRect();
                        return {
                            x: a.left - t.left,
                            y: a.top - t.top,
                            w: a.width,
                            h: a.height
                        }
                    }),
                    i = (e = 0, {
                        strokes: r.map((a, t) => {
                            let l = Math.round(Math.min(380, Math.max(150, 7 * a.w)));
                            t > 0 && a.y > r[t - 1].y + r[t - 1].h / 2 && (e += 220);
                            let s = { ...a,
                                t: e,
                                d: l
                            };
                            return e += l + 45, s
                        }),
                        total: e
                    });
                $.current = i;
                let n = l.getBoundingClientRect().left - t.left;
                a.style.setProperty("--tag-w", `${Math.round(l.getBoundingClientRect().width)}px`), a.style.setProperty("--ht-total", `${i.total}ms`), i.strokes.forEach((e, a) => {
                    s[a].style.setProperty("--t", `${e.t}ms`), s[a].style.setProperty("--d", `${e.d}ms`), s[a].style.setProperty("--x", `${Math.round(e.x-n)}px`)
                });
                let o = i.strokes.at(-1);
                a.style.setProperty("--spark-x", `${Math.round(o.x+o.w)}px`), a.style.setProperty("--spark-y", `${Math.round(o.y+.22*o.h)}px`)
            };
            t(), null == (e = document.fonts) || e.ready.then(t).catch(() => void 0);
            let l = "u" < typeof ResizeObserver ? null : new ResizeObserver(t);
            return null == l || l.observe(a), () => null == l ? void 0 : l.disconnect()
        }, [w, x]), (0, t.useEffect)(() => {
            let e = _.current,
                a = $.current;
            if ("play" !== f || !e || !a || "function" != typeof e.animate) return;
            let t = e.animate(function(e, a) {
                let t = a + 520,
                    l = [],
                    s = e => Math.min(1, e / t);
                e.forEach((a, t) => {
                    let r = a.y + .28 * a.h,
                        i = a.y + .55 * a.h,
                        n = a.y + .78 * a.h,
                        o = e[t - 1];
                    o && a.y > o.y + o.h / 2 && l.push({
                        offset: s(a.t - 200),
                        translate: `${o.x+o.w}px ${o.y}px`,
                        opacity: 1
                    }), 0 === t ? l.push({
                        offset: 0,
                        translate: `${a.x}px ${i}px`,
                        opacity: 0
                    }, {
                        offset: s(Math.min(120, a.d / 2)),
                        translate: `${a.x+.1*a.w}px ${r}px`,
                        opacity: 1
                    }) : l.push({
                        offset: s(a.t),
                        translate: `${a.x}px ${i}px`,
                        opacity: 1
                    }), l.push({
                        offset: s(a.t + .3 * a.d),
                        translate: `${a.x+.3*a.w}px ${r}px`,
                        opacity: 1
                    }, {
                        offset: s(a.t + .55 * a.d),
                        translate: `${a.x+.55*a.w}px ${n}px`,
                        opacity: 1
                    }, {
                        offset: s(a.t + .8 * a.d),
                        translate: `${a.x+.8*a.w}px ${r}px`,
                        opacity: 1
                    }, {
                        offset: s(a.t + a.d),
                        translate: `${a.x+a.w}px ${i}px`,
                        opacity: 1
                    })
                });
                let r = e.at(-1);
                l.push({
                    offset: 1,
                    translate: `${r.x+r.w+40}px ${r.y-.9*r.h}px`,
                    opacity: 0
                });
                for (let e = 1; e < l.length; e++) l[e].offset = Math.max(l[e].offset, l[e - 1].offset);
                return l
            }(a.strokes, a.total), {
                duration: a.total + 520,
                delay: 150,
                easing: "linear",
                fill: "both"
            });
            return () => t.cancel()
        }, [f]), (0, t.useEffect)(() => {
            if (!w) return;
            let e = p.current;
            if (!e || "u" < typeof IntersectionObserver) return;
            g("armed");
            let a = new IntersectionObserver(a => {
                let [t] = a;
                e.toggleAttribute("data-live", t.isIntersecting), t.intersectionRatio >= .5 && g("play")
            }, {
                threshold: [0, .5]
            });
            return a.observe(e), () => a.disconnect()
        }, [w]);
        let W = async () => {
            try {
                await navigator.clipboard.writeText(`#${x}`), v(e => e + 1)
            } catch {}
        };
        (0, t.useEffect)(() => {
            if (!y) return;
            let e = window.setTimeout(() => v(0), 2400);
            return () => window.clearTimeout(e)
        }, [y]);
        let C = {
            "--ht-fit": Math.min(1, 14 / j.length),
            "--foil-a": u.goldDeep,
            "--foil-b": u.goldLight,
            "--foil-c": u.gold
        };
        return (0, a.jsxs)("section", {
            ref: p,
            id: "chaand-hashtag",
            className: e$.default.hashtag,
            "data-phase": f,
            style: C,
            "aria-labelledby": "chaand-hashtag-title",
            children: [b.mark || n ? (0, a.jsxs)("span", {
                className: e$.default.htSeal,
                "aria-hidden": "true",
                "data-stamp": !0,
                children: [(0, a.jsx)("img", {
                    src: Q("seal"),
                    alt: "",
                    width: Z.seal.w,
                    height: Z.seal.h,
                    loading: "lazy",
                    decoding: "async"
                }), (0, a.jsx)("span", {
                    className: e$.default.htSealMark,
                    style: {
                        "--mark": `url("${b.mark}")`,
                        backgroundColor: u.night
                    }
                })]
            }) : b.ornament ? (0, a.jsx)("span", {
                className: e$.default.htOrnament,
                "aria-hidden": "true",
                children: "gul" === b.ornament ? (0, a.jsx)(e_.f, {
                    gold: u.goldDeep,
                    deep: u.firoziDeep,
                    accent: u.rose,
                    size: 56
                }) : (0, a.jsx)(e_.r, {
                    gold: u.goldDeep,
                    deep: u.firoziDeep,
                    accent: u.gold,
                    size: 52
                })
            }) : b.glyph ? (0, a.jsx)("span", {
                className: e$.default.htGlyph,
                lang: z(b.glyph),
                "aria-hidden": "true",
                style: {
                    color: u.gold
                },
                children: b.glyph
            }) : null, (0, a.jsx)("p", {
                id: "chaand-hashtag-title",
                className: e$.default.htEyebrow,
                style: {
                    fontFamily: eC,
                    color: u.goldDeep
                },
                children: d("eyebrow")
            }), (0, a.jsxs)("div", {
                ref: N,
                className: e$.default.htWriting,
                children: [(0, a.jsxs)("p", {
                    className: e$.default.htTag,
                    "data-tag": !0,
                    dir: "ltr",
                    style: eM(c, u.firozi),
                    children: [(0, a.jsxs)("span", {
                        className: "sr-only",
                        children: ["#", x]
                    }), (0, a.jsx)("span", {
                        className: e$.default.htLetters,
                        "aria-hidden": "true",
                        children: j.map((e, t) => (0, a.jsx)("span", {
                            className: e$.default.htLetter,
                            "data-letter": !0,
                            children: (0, a.jsx)("span", {
                                className: e$.default.htWipe,
                                children: (0, a.jsx)("span", {
                                    className: e$.default.htInk,
                                    children: " " === e ? " " : e
                                })
                            })
                        }, t))
                    })]
                }), (0, a.jsx)("span", {
                    ref: _,
                    className: e$.default.htPen,
                    "aria-hidden": "true",
                    children: (0, a.jsx)("span", {
                        className: e$.default.htPenTilt,
                        children: (0, a.jsx)(e_.j, {
                            reed: u.goldDeep,
                            nib: u.ink
                        })
                    })
                }), (0, a.jsx)("svg", {
                    className: e$.default.htSpark,
                    viewBox: "0 0 24 24",
                    "aria-hidden": "true",
                    children: (0, a.jsx)("path", {
                        d: "M12 0l2.2 9.8L24 12l-9.8 2.2L12 24l-2.2-9.8L0 12l9.8-2.2z",
                        fill: u.goldLight
                    })
                })]
            }), (0, a.jsx)("p", {
                className: e$.default.htCaption,
                dir: "auto",
                style: {
                    fontFamily: c.headingFont,
                    color: u.ink
                },
                children: (null == i ? void 0 : i.trim()) || d("caption")
            }), (0, a.jsxs)("div", {
                className: e$.default.htCopyRow,
                "data-export-hide": !0,
                children: [(0, a.jsx)("button", {
                    type: "button",
                    className: e$.default.pill,
                    onClick: W,
                    style: {
                        color: u.ink,
                        borderColor: (0, k.L)(u.gold, .8),
                        background: (0, k.L)(u.paper, .7)
                    },
                    children: d("copy")
                }), (0, a.jsx)("span", {
                    className: e$.default.htBurst,
                    "aria-hidden": "true",
                    children: y ? Array.from({
                        length: 8
                    }, (e, t) => {
                        let l = t / 8 * Math.PI * 2,
                            s = Y(30, 56, K(3, t, 1));
                        return (0, a.jsx)("img", {
                            src: Q(aj[t % aj.length]),
                            alt: "",
                            className: e$.default.htPetal,
                            style: {
                                "--dx": `${(Math.cos(l)*s).toFixed(1)}px`,
                                "--dy": `${(Math.sin(l)*s).toFixed(1)}px`,
                                "--spin": `${Math.round(Y(-180,180,K(3,t,2)))}deg`
                            }
                        }, t)
                    }) : null
                }, y), (0, a.jsx)("span", {
                    role: "status",
                    className: e$.default.htCopied,
                    style: {
                        color: u.goldDeep
                    },
                    children: y ? d("copied") : ""
                })]
            })]
        })
    }
    var aw = e.i(410739);

    function aN(e) {
        let {
            data: t,
            options: s,
            family: r,
            eventsFollow: i,
            one: n,
            two: o,
            when: d
        } = e, c = (0, l.r)("inviteThemes.chaand-bagh"), {
            theme: u,
            tones: h
        } = eq(), {
            couple: m
        } = t, p = (0, w.u)(r, m), f = !!(null == p ? void 0 : p.some(e => e.parents.length > 0)), g = V([n, o], 9), y = eM(u, h.firozi), v = s.verse.join("\n"), x = s.verse.length > 0 && s.verse.every(e => eO.includes(e)) ? "quran" : G(v), j = {
            "--hashiya": `url("${ed.hashiya.src}")`,
            "--hashiya-slice": ed.hashiya.slice,
            "--paper": `url("${Q("paper")}")`,
            "--lining": `url("${Q("silk-lining")}")`,
            "--unwan": `url("${Q("unwan")}")`,
            "--unwan-ratio": ec.aspect,
            "--fx0": ec.field[0],
            "--fy0": ec.field[1],
            "--fx1": ec.field[2],
            "--fy1": ec.field[3],
            "--qandeel": `url("${Q("qandeel")}")`,
            "--qandeel-ratio": eu.aspect,
            "--qandeel-cord": eu.cord,
            "--name-scale": g,
            "--folio-ink": h.ink,
            "--fold-shade": (0, k.L)(h.nightDeep, .4),
            "--ground": h.night,
            "--flame": (0, k.L)(h.lamplight, .7)
        };
        return (0, a.jsxs)("section", {
            id: "chaand-invitation",
            className: e$.default.invitation,
            style: j,
            "aria-labelledby": "chaand-invitation-names",
            children: [(0, a.jsx)("div", {
                className: `${e$.default.flank} ${e$.default.flankLeft}`,
                "aria-hidden": "true",
                children: (0, a.jsx)("span", {
                    className: e$.default.flankGlow
                })
            }), (0, a.jsx)("div", {
                className: `${e$.default.flank} ${e$.default.flankRight}`,
                "aria-hidden": "true",
                children: (0, a.jsx)("span", {
                    className: e$.default.flankGlow
                })
            }), (0, a.jsxs)("div", {
                className: e$.default.album,
                children: [(0, a.jsx)("div", {
                    className: e$.default.silkFold,
                    "aria-hidden": "true"
                }), (0, a.jsx)("div", {
                    className: `${e$.default.folioClip} ${e$.default.tl}`,
                    children: (0, a.jsx)("div", {
                        className: `${e$.default.folio} ${e$.default.tl}`,
                        children: (0, a.jsxs)("div", {
                            className: e$.default.folioPaper,
                            children: [s.invocation ? (0, a.jsx)(eY.b, {
                                children: (0, a.jsx)("div", {
                                    className: e$.default.unwan,
                                    children: (0, a.jsx)("div", {
                                        className: e$.default.unwanField,
                                        children: (0, a.jsx)(eE, {
                                            text: s.invocation,
                                            className: e$.default.invocation,
                                            arabicClassName: e$.default.arabic,
                                            style: {
                                                color: h.firoziDeep
                                            }
                                        })
                                    })
                                })
                            }) : null, s.emblem ? (0, a.jsx)(eY.b, {
                                children: (0, a.jsx)(eP, {
                                    emblem: s.emblem,
                                    gold: h.goldDeep,
                                    deep: h.firoziDeep,
                                    accent: h.rose,
                                    label: c("invitation.emblemAlt"),
                                    className: e$.default.invEmblem
                                })
                            }) : null, s.verse.length > 0 ? (0, a.jsx)(eY.b, {
                                children: (0, a.jsx)("p", {
                                    className: `${e$.default.verse} ${x?e$.default.arabic:""}`,
                                    lang: z(v),
                                    dir: x ? "rtl" : void 0,
                                    "data-face": x,
                                    style: {
                                        color: h.firoziDeep,
                                        fontFamily: x ? eT[x] : void 0
                                    },
                                    children: s.verse.map((e, t) => (0, a.jsx)("span", {
                                        className: e$.default.verseLine,
                                        children: e
                                    }, t))
                                })
                            }) : null, m.headline ? (0, a.jsx)(eY.b, {
                                children: (0, a.jsx)(eE, {
                                    text: m.headline,
                                    className: e$.default.headline,
                                    arabicClassName: e$.default.arabic,
                                    style: {
                                        fontFamily: u.headingFont,
                                        color: h.firozi
                                    }
                                })
                            }) : null, m.shortMessage ? (0, a.jsx)(eY.b, {
                                children: (0, a.jsx)("p", {
                                    className: e$.default.message,
                                    dir: "auto",
                                    children: m.shortMessage
                                })
                            }) : null, (0, a.jsx)(eY.b, {
                                children: (0, a.jsxs)("h2", {
                                    id: "chaand-invitation-names",
                                    className: `${e$.default.inviteNames} ${f?e$.default.withParents:""}`,
                                    children: [(0, a.jsx)("span", {
                                        "data-couple-name": !0,
                                        dir: "auto",
                                        className: e$.default.glintName,
                                        style: { ...y,
                                            "--name-ink": h.firozi
                                        },
                                        children: n
                                    }), (0, a.jsx)(w.O, {
                                        as: "span",
                                        view: null == p ? void 0 : p[0],
                                        className: e$.default.parents,
                                        style: {
                                            color: h.ink
                                        },
                                        conjunctionStyle: {
                                            color: h.goldDeep
                                        }
                                    }), (0, a.jsx)("span", {
                                        className: e$.default.inviteAnd,
                                        style: {
                                            fontFamily: eC,
                                            color: h.goldDeep
                                        },
                                        children: c("invitation.and")
                                    }), (0, a.jsx)("span", {
                                        "data-couple-name": !0,
                                        dir: "auto",
                                        className: e$.default.glintName,
                                        style: { ...y,
                                            "--name-ink": h.firozi
                                        },
                                        children: o
                                    }), (0, a.jsx)(w.O, {
                                        as: "span",
                                        view: null == p ? void 0 : p[1],
                                        className: e$.default.parents,
                                        style: {
                                            color: h.ink
                                        },
                                        conjunctionStyle: {
                                            color: h.goldDeep
                                        }
                                    })]
                                })
                            }), (0, a.jsx)(eY.b, {
                                children: (0, a.jsx)(eD, {
                                    gold: h.goldDeep,
                                    deep: h.firoziDeep,
                                    rose: h.rose
                                })
                            }), d.date || d.time || d.venue ? (0, a.jsx)(eY.b, {
                                children: (0, a.jsxs)("div", {
                                    className: e$.default.inviteWhen,
                                    children: [d.date ? (0, a.jsx)("p", {
                                        className: e$.default.inviteDate,
                                        style: {
                                            fontFamily: u.headingFont,
                                            color: h.firozi
                                        },
                                        children: d.date
                                    }) : null, d.time ? (0, a.jsx)("p", {
                                        className: e$.default.inviteTime,
                                        children: d.time
                                    }) : null, d.venue ? (0, a.jsx)("p", {
                                        className: e$.default.inviteVenue,
                                        dir: "auto",
                                        children: d.venue
                                    }) : null]
                                })
                            }) : null]
                        })
                    })
                })]
            }), i ? (0, a.jsxs)("div", {
                className: e$.default.toEvents,
                children: [(0, a.jsx)(eY.b, {
                    children: (0, a.jsx)("p", {
                        className: e$.default.toEventsText,
                        style: {
                            fontFamily: u.headingFont,
                            color: h.light
                        },
                        children: c("invitation.eventsIntro")
                    })
                }), (0, a.jsx)(eY.b, {
                    children: (0, a.jsx)(eA, {
                        gold: h.goldLight,
                        rose: h.rose
                    })
                })]
            }) : null]
        })
    }

    function ak(e) {
        var t;
        let {
            family: s,
            couple: r
        } = e, i = (0, l.r)("family"), o = (0, l.r)("inviteThemes.chaand-bagh"), {
            theme: d,
            tones: u
        } = eq(), h = (0, aw.L)(), [m, p] = (0, c.i)(.3);
        eJ(m);
        let f = s && "tree" !== s.style ? s : void 0,
            g = (null == f || null == (t = f.blessings) ? void 0 : t.trim()) ?? "",
            y = f ? (0, n.n)(f, r).filter(e => e.grandparents.length > 0) : [];
        if (!g && 0 === y.length) return null;
        let v = (e, t) => (0, a.jsxs)("div", {
            className: e$.default.elderPage,
            "data-side": t,
            children: [(0, a.jsx)("span", {
                className: e$.default.elderThread,
                "aria-hidden": "true"
            }), (0, a.jsx)("p", {
                className: e$.default.elderNames,
                dir: "auto",
                style: {
                    fontFamily: d.headingFont,
                    color: u.light
                },
                children: (0, a.jsx)(aw.h, {
                    people: e.grandparents
                })
            }), (0, a.jsx)("p", {
                className: e$.default.elderOf,
                style: {
                    color: u.goldLight
                },
                children: (0, aw.S)(i, e)
            })]
        }, e.key);
        return (0, a.jsxs)("section", {
            ref: m,
            id: "chaand-elders",
            className: e$.default.elders,
            "data-reveal": p,
            "aria-labelledby": "chaand-elders-title",
            style: {
                "--shamsa": `url("${Q("shamsa")}")`,
                "--mote": (0, k.L)(u.goldLight, .85),
                "--rays-glow": (0, k.L)(u.lamplight, .32)
            },
            children: [(0, a.jsxs)("header", {
                className: e$.default.eldersHead,
                children: [(0, a.jsx)("p", {
                    id: "chaand-elders-title",
                    className: e$.default.eldersTitle,
                    style: {
                        color: u.goldLight,
                        ...h
                    },
                    children: i("blessings")
                }), (0, a.jsx)("p", {
                    className: e$.default.eldersEyebrow,
                    style: {
                        fontFamily: eC,
                        color: u.goldLight
                    },
                    children: o("elders.eyebrow")
                })]
            }), (0, a.jsxs)("div", {
                className: e$.default.duaStage,
                "data-sides": y.length,
                children: [y[0] ? v(y[0], "start") : null, (0, a.jsxs)("figure", {
                    className: e$.default.shamsa,
                    children: [(0, a.jsx)("span", {
                        className: e$.default.shamsaGlow,
                        "aria-hidden": "true"
                    }), (0, a.jsx)("span", {
                        className: e$.default.shamsaRays,
                        "aria-hidden": "true",
                        children: (0, a.jsx)("span", {})
                    }), (0, a.jsx)("span", {
                        className: e$.default.shamsaCore,
                        "aria-hidden": "true"
                    }), (0, a.jsx)("span", {
                        className: e$.default.shamsaField,
                        children: (0, a.jsx)("span", {
                            className: `${e$.default.duaText} ${e$.default.arabic}`,
                            lang: "ar",
                            dir: "rtl",
                            style: {
                                fontFamily: eT.naskh,
                                color: u.firoziDeep
                            },
                            children: "بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ"
                        })
                    }), Array.from({
                        length: 10
                    }, (e, t) => (0, a.jsx)("i", {
                        className: e$.default.mote,
                        "aria-hidden": "true",
                        style: {
                            "--i": t
                        }
                    }, t))]
                }), y[1] ? v(y[1], "end") : null]
            }), (0, a.jsxs)("div", {
                className: e$.default.duaCaption,
                children: [(0, a.jsx)("p", {
                    className: e$.default.duaMeaning,
                    style: {
                        color: (0, k.L)(u.light, .88)
                    },
                    children: o("elders.duaMeaning")
                }), (0, a.jsx)("p", {
                    className: e$.default.duaSource,
                    style: {
                        color: (0, k.L)(u.light, .6)
                    },
                    children: o("elders.duaSource")
                })]
            }), g ? (0, a.jsx)("p", {
                className: e$.default.blessing,
                dir: "auto",
                style: {
                    fontFamily: d.headingFont,
                    color: u.goldLight
                },
                children: g
            }) : null]
        })
    }
    var a_ = e.i(138813),
        a$ = e.i(875022);

    function aW(e) {
        let {
            slug: s,
            events: r,
            settings: i,
            themeConfig: n
        } = e, o = (0, l.r)("rsvp"), d = (0, l.r)("inviteThemes.chaand-bagh.rsvp"), c = (0, x.f)(), {
            theme: u,
            tones: h,
            reduce: m,
            lite: p
        } = eq(), f = (0, a$.o)(i), g = (0, t.useRef)(null), [y, v] = (0, t.useState)(!1), j = {
            "--zari": `url("${Q("silk-tie")}")`,
            "--paper": `url("${Q("paper")}")`,
            "--lamp": `url("${Q("qandeel")}")`,
            "--lamp-ratio": eu.aspect,
            "--finial": `url("${Q("finial")}")`,
            "--gold": h.gold,
            "--gold-deep": h.goldDeep,
            "--firozi": h.firozi,
            "--on-teal": h.onFirozi,
            "--ink": h.ink,
            "--muted": h.muted,
            "--line": (0, k.L)(h.gold, .7),
            "--tile": (0, k.L)(h.paper, .9),
            "--flame": (0, k.L)(h.lamplight, .8)
        };
        return (0, a.jsxs)("section", {
            id: "chaand-rsvp",
            className: e$.default.rsvp,
            "aria-labelledby": "chaand-rsvp-title",
            style: j,
            children: [(0, a.jsx)("span", {
                className: `${e$.default.rsvpLamp} ${e$.default.rsvpLampLeft}`,
                "aria-hidden": "true",
                children: (0, a.jsx)("span", {
                    className: e$.default.lampFlame
                })
            }), (0, a.jsx)("span", {
                className: `${e$.default.rsvpLamp} ${e$.default.rsvpLampRight}`,
                "aria-hidden": "true",
                children: (0, a.jsx)("span", {
                    className: e$.default.lampFlame
                })
            }), (0, a.jsx)(eY.b, {
                className: e$.default.rsvpWrap,
                children: (0, a.jsxs)("div", {
                    className: e$.default.rsvpCard,
                    "data-answered": y ? "" : void 0,
                    children: [(0, a.jsx)("span", {
                        className: e$.default.rsvpFinial,
                        "aria-hidden": "true"
                    }), f ? (0, a.jsx)("h2", {
                        id: "chaand-rsvp-title",
                        className: "sr-only",
                        children: d("title")
                    }) : (0, a.jsxs)("header", {
                        className: e$.default.rsvpHead,
                        children: [(0, a.jsx)("p", {
                            className: e$.default.eyebrow,
                            style: {
                                fontFamily: eC,
                                color: h.goldDeep
                            },
                            children: d("eyebrow")
                        }), (0, a.jsx)("h2", {
                            id: "chaand-rsvp-title",
                            className: e$.default.chapterHeading,
                            style: eM(u, h.firozi),
                            children: d("title")
                        }), (0, a.jsx)(e_.O, {
                            color: h.gold,
                            accent: h.rose,
                            size: 30,
                            className: e$.default.rsvpMark
                        }), (0, a.jsx)("p", {
                            className: e$.default.rsvpSub,
                            style: {
                                color: h.muted
                            },
                            children: i.deadline ? o("subheadingBy", {
                                deadline: c.date(i.deadline)
                            }) : o("subheadingPlain")
                        })]
                    }), (0, a.jsx)("div", {
                        className: e$.default.rsvpForm,
                        children: (0, a.jsx)(a_.f, {
                            slug: s,
                            events: r.map(e => ({
                                id: e.id,
                                name: e.name
                            })),
                            settings: i,
                            theme: n,
                            showHeader: !1,
                            bare: !0,
                            onSubmitted: () => {
                                var e;
                                v(!0), null == (e = g.current) || e.burst(.5, .3, {
                                    phone: 36,
                                    desktop: 80
                                }, h.rose)
                            }
                        })
                    }), m || p ? null : (0, a.jsx)(eN, {
                        ref: g,
                        className: e$.default.rsvpShower,
                        color: h.lamplight,
                        count: {
                            phone: 0,
                            desktop: 0
                        },
                        seed: 41
                    })]
                })
            })]
        })
    }
    let aC = e => `.${e$.default[e]}`,
        aF = [
            ["cover", 0],
            ["cover", 100]
        ],
        aL = [{
            selector: `${aC("stage")} ${aC("tl")}`,
            source: aC("stage"),
            range: [
                ["contain", 0],
                ["contain", 100]
            ]
        }, {
            selector: `${aC("album")} ${aC("tl")}`,
            source: aC("album"),
            range: [
                ["entry", 0],
                ["entry", 90]
            ]
        }, {
            selector: `${aC("sceneArt")}, ${aC("windowFore")}, ${aC("fx")}`,
            range: aF
        }, {
            selector: `${aC("events")} ${aC("tl")}`,
            source: aC("events"),
            range: aF
        }, {
            selector: `${aC("storyAct")} ${aC("actTl")}`,
            source: aC("storyAct"),
            range: [
                ["contain", "--from"],
                ["contain", "--to"]
            ]
        }, {
            selector: `${aC("seamRule")} i, ${aC("seamFeather")}`,
            range: aF
        }, {
            selector: aC("rsvpLamp"),
            source: aC("rsvp"),
            range: [
                ["entry", 0],
                ["cover", 40]
            ]
        }, {
            selector: `${aC("closing")} ${aC("tl")}`,
            source: aC("closingScene"),
            range: [
                ["entry-crossing", 25],
                ["entry-crossing", 100]
            ]
        }];

    function aS(e) {
        return (Math.max(e, 1) - 1 + .82) * 62 + 6
    }

    function aT(e) {
        var s, r, i;
        let n, {
                story: o,
                one: d,
                two: c,
                coverPhotoUrl: u
            } = e,
            h = (0, l.r)("inviteThemes.chaand-bagh.story"),
            {
                theme: m,
                tones: p
            } = eq(),
            f = I(o),
            g = J(u),
            y = (0, t.useRef)(null);
        eJ(y);
        let v = 2 + f.length,
            x = v - 1,
            j = (n = aS(x), Array.from({
                length: x
            }, (e, a) => ({
                from: +((a + .18) * 62 / n * 100).toFixed(3),
                to: +((a + .82) * 62 / n * 100).toFixed(3)
            }))),
            b = aS(x),
            w = {
                "--act-run": `${b}lvh`,
                "--night-p": `url("${Q("story-pool-p")}")`,
                "--night-w": `url("${Q("story-pool-w")}")`,
                "--cover": `url("${Q("book-cover")}")`,
                "--hashiya": `url("${ed.hashiya.src}")`,
                "--hashiya-slice": ed.hashiya.slice,
                "--paper": `url("${Q("paper")}")`,
                "--lining": `url("${Q("silk-lining")}")`,
                "--dim": (0, k.L)(p.nightDeep, .5),
                "--page-ink": p.ink,
                "--page-gold": p.gold,
                "--page-gold-deep": p.goldDeep,
                "--crease": (0, k.L)(p.nightDeep, .38),
                "--book-shadow": (0, k.L)(p.nightDeep, .7),
                "--halo": (0, k.L)(p.moonGlow, .35)
            },
            N = (e, t, l, s) => {
                let r = j[e];
                return (0, a.jsxs)("div", {
                    className: `${e$.default.leaf} ${r?e$.default.actTl:""}`,
                    "data-kind": s,
                    "data-turns": r ? "" : void 0,
                    style: {
                        "--from": r ? `${r.from}%` : void 0,
                        "--to": r ? `${r.to}%` : void 0,
                        "--z-front": v - e,
                        "--z-back": e + 1,
                        zIndex: v - e
                    },
                    children: [(0, a.jsxs)("div", {
                        className: e$.default.leafFront,
                        children: [t, (0, a.jsx)("span", {
                            className: `${e$.default.leafShade} ${r?e$.default.actTl:""}`,
                            "aria-hidden": "true"
                        })]
                    }), (0, a.jsx)("div", {
                        className: e$.default.leafBack,
                        "aria-hidden": "true",
                        children: l
                    })]
                }, e)
            },
            _ = (0, a.jsx)("div", {
                className: e$.default.pageInner,
                "data-verso": "",
                children: (0, a.jsx)("span", {
                    className: e$.default.versoMark,
                    children: (0, a.jsx)(e_.f, {
                        gold: p.gold,
                        deep: p.goldDeep,
                        accent: p.rose,
                        size: 120
                    })
                })
            }),
            $ = [N(0, (0, a.jsx)("div", {
                className: e$.default.cover,
                role: "img",
                "aria-label": h("coverAlt"),
                children: (0, a.jsx)("span", {
                    className: e$.default.coverSheen,
                    "aria-hidden": "true"
                })
            }), (0, a.jsx)("div", {
                className: e$.default.endpaper
            }), "cover"), N(1, (0, a.jsxs)("div", {
                className: e$.default.pageInner,
                "data-title": "",
                children: [g ? (0, a.jsx)("span", {
                    className: e$.default.portrait,
                    children: (0, a.jsx)("img", {
                        src: g,
                        alt: h("portraitAlt", {
                            names: `${d} & ${c}`
                        }),
                        loading: "lazy",
                        decoding: "async",
                        draggable: !1
                    })
                }) : (0, a.jsx)("span", {
                    className: e$.default.titleMark,
                    "aria-hidden": "true",
                    children: (0, a.jsx)(e_.f, {
                        gold: p.goldDeep,
                        deep: p.firoziDeep,
                        accent: p.rose,
                        size: 72
                    })
                }), (0, a.jsx)("p", {
                    className: e$.default.storyEyebrow,
                    style: {
                        fontFamily: eC,
                        color: p.goldDeep
                    },
                    children: h("eyebrow")
                }), (0, a.jsx)("h2", {
                    id: "chaand-story-title",
                    className: e$.default.storyTitle,
                    style: eM(m, p.firozi),
                    children: h("title")
                }), (0, a.jsxs)("p", {
                    className: e$.default.storyNames,
                    style: {
                        fontFamily: m.headingFont,
                        color: p.ink
                    },
                    children: [(0, a.jsx)("span", {
                        dir: "auto",
                        children: d
                    }), (0, a.jsx)(e_.O, {
                        color: p.gold,
                        accent: p.rose,
                        size: 18
                    }), (0, a.jsx)("span", {
                        dir: "auto",
                        children: c
                    })]
                })]
            }), _, "page"), ...f.map((e, t) => N(t + 2, (0, a.jsxs)("div", {
                className: e$.default.pageInner,
                children: [(0, a.jsx)("div", {
                    className: e$.default.pageText,
                    children: (0, a.jsx)("p", {
                        className: 0 === t ? e$.default.dropCap : void 0,
                        dir: "auto",
                        children: e
                    })
                }), (0, a.jsxs)("p", {
                    className: e$.default.pageNumber,
                    "aria-hidden": "true",
                    children: [(0, a.jsx)(e_.O, {
                        color: p.gold,
                        accent: p.rose,
                        size: 14
                    }), (0, a.jsx)("span", {
                        children: t + 1
                    }), (0, a.jsx)(e_.O, {
                        color: p.gold,
                        accent: p.rose,
                        size: 14
                    })]
                })]
            }), _, "page"))];
        return (0, a.jsx)("section", {
            ref: y,
            id: "chaand-story",
            className: e$.default.storyAct,
            style: w,
            "aria-labelledby": "chaand-story-title",
            children: (0, a.jsxs)("div", {
                className: e$.default.storyPin,
                children: [(0, a.jsx)("div", {
                    className: e$.default.storyNight,
                    "aria-hidden": "true"
                }), (0, a.jsx)("span", {
                    className: e$.default.storyDim,
                    "aria-hidden": "true"
                }), (0, a.jsx)("p", {
                    className: `${e$.default.storyHint} ${e$.default.actTl}`,
                    "aria-hidden": "true",
                    style: {
                        color: (0, k.L)(p.light, .85),
                        "--from": "0%",
                        "--to": `${(null==(s=j[0])?void 0:s.from)??6}%`
                    },
                    children: h("hint")
                }), (0, a.jsxs)("div", {
                    className: e$.default.bookStage,
                    children: [(0, a.jsx)("span", {
                        className: e$.default.bookHalo,
                        "aria-hidden": "true"
                    }), (0, a.jsx)("div", {
                        className: `${e$.default.book} ${e$.default.actTl}`,
                        style: {
                            "--from": `${(null==(r=j[0])?void 0:r.from)??0}%`,
                            "--to": `${(null==(i=j[0])?void 0:i.to)??0}%`
                        },
                        children: $
                    })]
                }), (0, a.jsx)("div", {
                    className: e$.default.storyPetals,
                    "aria-hidden": "true",
                    children: Array.from({
                        length: 7
                    }, (e, t) => (0, a.jsx)("img", {
                        src: Q(["petal-rose-deep", "petal-rose", "petal-rose-pale"][t % 3]),
                        alt: "",
                        loading: "lazy",
                        decoding: "async",
                        style: {
                            left: `${Y(4,94,K(31,t,1))}%`,
                            "--d": `${Y(11,18,K(31,t,2))}s`,
                            "--delay": `${-Y(0,18,K(31,t,3))}s`,
                            "--sway": `${Y(-40,40,K(31,t,4))}px`,
                            "--spin": `${Y(-300,300,K(31,t,5))}deg`
                        }
                    }, t))
                })]
            })
        })
    }
    let aO = "#0A1024",
        aR = "#FFF8E8",
        aq = "#FFE1A0",
        aM = "#FFC79E";

    function aE(e) {
        let {
            chapters: s,
            tones: r,
            reduce: i,
            hidden: n
        } = e, o = (0, l.r)("inviteThemes.chaand-bagh.nav"), d = (0, t.useMemo)(() => s.map(e => e.id), [s]), c = (0, v.f)(d), u = Math.max(0, d.indexOf(c));
        return s.length < 2 ? null : (0, a.jsx)("nav", {
            className: e$.default.beads,
            "aria-label": o("label"),
            "data-export-hide": !0,
            "data-hidden": n ? "" : void 0,
            style: {
                "--gold": r.gold,
                "--gold-light": r.goldLight,
                "--hole": r.nightDeep,
                "--lit": r.lamplight
            },
            children: (0, a.jsx)("ol", {
                children: s.map((e, t) => (0, a.jsx)("li", {
                    children: (0, a.jsxs)("button", {
                        type: "button",
                        "aria-label": e.label,
                        "aria-current": t === u ? "step" : void 0,
                        "data-lit": t <= u ? "" : void 0,
                        onClick: () => {
                            var a;
                            return null == (a = document.getElementById(e.id)) ? void 0 : a.scrollIntoView({
                                behavior: i ? "auto" : "smooth",
                                block: "start"
                            })
                        },
                        children: [(0, a.jsx)("span", {
                            className: e$.default.hole,
                            children: (0, a.jsx)(e_.i, {
                                gold: r.goldLight,
                                glass: t <= u ? r.lamplight : r.nightDeep,
                                size: 16
                            })
                        }), (0, a.jsx)("span", {
                            className: e$.default.holeLabel,
                            children: e.label
                        })]
                    })
                }, e.id))
            })
        })
    }
    e.s(["ChaandBaghExperience", 0, function(e) {
        var v, _, $, C, F, L, T, O;
        let {
            data: q,
            theme: M,
            shareUrl: E
        } = e, D = (0, t.useMemo)(() => (0, k.f)(M), [M]), H = (0, t.useMemo)(() => {
            var e;
            let a, t, l, s, r, i;
            return a = [(e = D.palette).text, e.background, e.surface, e.primary, e.secondary].reduce((e, a) => (0, k.E)(e) <= (0, k.E)(a) ? e : a), t = [e.surface, e.background, e.text].reduce((e, a) => (0, k.E)(e) >= (0, k.E)(a) ? e : a), l = .12 > (0, k.E)(a) ? a : (0, k.j)(a, aO, .55), s = (0, k.E)(t) > .82 ? t : (0, k.j)(t, aR, .6), r = .2 > (0, k.E)(e.primary) ? (0, k.j)(l, e.primary, .18) : l, i = (0, k.j)(r, aO, .35), {
                ivory: e.background,
                paper: e.surface,
                ink: e.text,
                muted: e.muted,
                firozi: e.primary,
                gold: e.secondary,
                rose: e.accent,
                light: s,
                dark: l,
                onFirozi: (0, k.c)(e.primary) ? l : s,
                goldLight: (0, k.j)(e.secondary, aR, .55),
                goldDeep: (0, k.j)(e.secondary, l, .4),
                firoziDeep: (0, k.j)(e.primary, l, .45),
                firoziPale: (0, k.j)(e.primary, s, .72),
                rosePale: (0, k.j)(e.accent, s, .78),
                roseDeep: (0, k.j)(e.accent, l, .35),
                night: i,
                nightDeep: (0, k.j)(i, "#000000", .42),
                nightHigh: (0, k.j)(i, e.primary, .32),
                duskApricot: (0, k.j)((0, k.j)(e.secondary, e.accent, .4), aM, .58),
                duskRose: (0, k.j)(e.accent, s, .4),
                duskLavender: (0, k.j)((0, k.j)(e.accent, i, .55), s, .3),
                duskHaze: (0, k.j)(aM, s, .4),
                moon: (0, k.j)(e.background, aR, .6),
                moonGlow: (0, k.j)(e.secondary, aR, .75),
                lamplight: (0, k.j)(e.secondary, aq, .7),
                flame: aq
            }
        }, [D.palette]), A = (0, c.f)(), P = (0, j.Y)(), B = (0, c.y)(), U = (0, r.Q)(), z = (0, r.L)(), G = (0, l.r)("inviteThemes.chaand-bagh"), V = (0, l.r)("gifts"), K = (0, x.f)(), Y = (0, h.f)(), X = (0, t.useRef)(null);
        (0, b.f)(X, aL);
        let {
            couple: ee
        } = q, ea = (0, t.useMemo)(() => (0, u.T)(u.K, q.sections), [q.sections]), et = (0, t.useMemo)(() => [...q.events ?? []].sort((e, a) => (e.displayOrder ?? 0) - (a.displayOrder ?? 0)), [q.events]), el = (0, t.useMemo)(() => R(et), [et]), es = (0, t.useMemo)(() => {
            var e;
            return et.find(e => "NIKAH" === e.type) ?? et.find(e => "WEDDING" === e.type) ?? et.find(e => (0, W.Y)(e)) ?? et.find(e => "CUSTOM" === e.type && "nikah" === S(e)) ?? (null == (e = R(et)) ? void 0 : e.event) ?? et[0]
        }, [et]), er = (0, t.useMemo)(() => [...q.photos ?? []].sort((e, a) => (e.displayOrder ?? 0) - (a.displayOrder ?? 0)), [q.photos]), en = (0, t.useMemo)(() => {
            var e;
            return (0, f.x)((null == (e = q.sections) ? void 0 : e.length) ? q.sections : o.n).filter(e => e.visible).sort((e, a) => e.order - a.order)
        }, [q.sections]), eo = (0, g.useGifts)(), ed = (null == (v = ee.partnerOneName) ? void 0 : v.trim()) || G("hero.partnerOne"), ec = (null == (_ = ee.partnerTwoName) ? void 0 : _.trim()) || G("hero.partnerTwo"), eu = J(ee.logoUrl), eh = q.story, em = en.filter(e => (e => {
            switch (e) {
                case "hero":
                case "footer":
                    return !0;
                case "events":
                    return et.length > 0;
                case "story":
                    return I(eh).length > 0;
                case "family":
                    return (0, n.M)(q.family) && (0, n.i)(q.family);
                case "gallery":
                    return er.length > 0 || U;
                case "countdown":
                    return null !== el && !z;
                case "hashtag":
                    var a, t;
                    return !!(null == (t = q.hashtag) || null == (a = t.tag) ? void 0 : a.trim());
                case "special-request":
                    return (0, d.S)(q.specialRequest);
                case "gifts":
                    return !!((null == eo ? void 0 : eo.section) && eo.funds.length > 0);
                case "rsvp":
                    return q.rsvpSettings.enabled;
                default:
                    return !1
            }
        })(e.kind)), ep = em.findIndex(e => "hero" === e.kind), ef = ep >= 0 && (null == ($ = em[ep + 1]) ? void 0 : $.kind) === "events", eg = em.some(e => "hashtag" === e.kind), ey = em.some(e => "footer" === e.kind), ev = en.some(e => "family" === e.kind) ? (0, w.v)(q.family) : void 0, ex = es ? [es.date ? K.date(es.date, {
            weekday: "long"
        }) : "", (null == (C = es.city) ? void 0 : C.trim()) ?? ""].filter(Boolean).join(" · ") : "", ej = {
            date: (null == es ? void 0 : es.date) ? K.date(es.date, {
                weekday: "long"
            }) : "",
            time: es ? K.eventTimeOf(es, {
                viewerTimezone: Y
            }) : "",
            venue: es ? (0, i.A)(es) : ""
        }, eb = (0, s.usePersonalGuest)(), ew = U && null !== eb, [eN, ek] = (0, t.useState)("closed"), [eT, eO] = (0, t.useState)(0), eq = (!U || ew) && !(B && A) && "open" !== eN, eM = B && eq && "closed" === eN, eE = (0, t.useRef)(void 0);
        (0, t.useEffect)(() => {
            if (!eM) return;
            let e = document.body.style.overflow;
            return document.body.style.overflow = "hidden", () => {
                document.body.style.overflow = e
            }
        }, [eM]), (0, t.useEffect)(() => () => window.clearTimeout(eE.current), []);
        let eD = (0, t.useRef)(eN);
        (0, t.useEffect)(() => {
            eD.current = eN
        }, [eN]);
        let eH = (0, t.useCallback)(() => {
                "closed" === eD.current && (eD.current = "leaving", window.scrollTo({
                    top: 0,
                    behavior: "instant"
                }), ek("leaving"), window.clearTimeout(eE.current), eE.current = window.setTimeout(() => ek("open"), 2600))
            }, []),
            eA = (0, t.useCallback)(() => {
                window.clearTimeout(eE.current), ek("open")
            }, []),
            eP = (0, t.useCallback)(() => {
                window.scrollTo({
                    top: 0,
                    behavior: "instant"
                }), eO(e => e + 1), A || U && !ew || ek("closed")
            }, [A, U, ew]),
            eI = (0, t.useMemo)(() => ({
                theme: D,
                tones: H,
                reduce: A,
                lite: P,
                preview: U
            }), [D, H, A, P, U]),
            eB = (0, t.useMemo)(() => ({ ...D,
                palette: { ...D.palette,
                    primary: H.night,
                    accent: H.gold,
                    background: H.ivory
                }
            }), [D, H]),
            ez = (0, t.useMemo)(() => ({ ...D,
                palette: { ...D.palette,
                    accent: H.gold
                }
            }), [D, H]),
            eJ = em.map(e => (e => {
                switch (e) {
                    case "hero":
                        return {
                            kind: e,
                            id: "chaand-arrival",
                            label: G("nav.invitation"),
                            top: H.nightDeep,
                            bottom: H.night,
                            node: (0, a.jsxs)(t.Fragment, {
                                children: [(0, a.jsx)(eG, {
                                    title: q.title,
                                    one: ed,
                                    two: ec,
                                    greet: !eq,
                                    afterGate: eq
                                }), (0, a.jsx)(aN, {
                                    data: q,
                                    options: ea,
                                    family: ev,
                                    eventsFollow: ef,
                                    one: ed,
                                    two: ec,
                                    when: ej
                                }), (0, a.jsx)(ak, {
                                    family: ev,
                                    couple: ee
                                })]
                            }, `hero-${eT}`)
                        };
                    case "events":
                        return {
                            kind: e,
                            id: "chaand-events",
                            label: G("nav.events"),
                            top: H.ivory,
                            bottom: H.ivory,
                            node: (0, a.jsx)(e3, {
                                events: et
                            })
                        };
                    case "story":
                        return {
                            kind: e,
                            id: "chaand-story",
                            label: G("nav.story"),
                            top: H.nightDeep,
                            bottom: H.nightDeep,
                            node: (0, a.jsx)(aT, {
                                story: eh,
                                one: ed,
                                two: ec,
                                coverPhotoUrl: ee.coverPhotoUrl
                            })
                        };
                    case "family":
                        return {
                            kind: e,
                            id: "chaand-family",
                            label: G("nav.family"),
                            top: H.ivory,
                            bottom: H.ivory,
                            node: (0, a.jsxs)("section", {
                                id: "chaand-family",
                                className: e$.default.family,
                                "aria-labelledby": "chaand-family-title",
                                style: {
                                    "--bridge": `url("${Q("footbridge")}")`,
                                    "--bridge-ratio": Z.footbridge.w / Z.footbridge.h
                                },
                                children: [(0, a.jsx)("span", {
                                    className: e$.default.familyFeather,
                                    "aria-hidden": "true",
                                    children: (0, a.jsx)(e_.f, {
                                        gold: H.goldDeep,
                                        deep: H.firoziDeep,
                                        accent: H.rose,
                                        size: 50
                                    })
                                }), (0, a.jsx)(eU, {
                                    id: "chaand-family-title",
                                    eyebrow: G("family.eyebrow"),
                                    title: G("family.title")
                                }), (0, a.jsx)(m.f, {
                                    family: q.family,
                                    couple: ee,
                                    theme: ez,
                                    variant: "panel",
                                    showHeading: !1,
                                    className: e$.default.familyPanel
                                })]
                            })
                        };
                    case "gallery":
                        return {
                            kind: e,
                            id: "chaand-gallery",
                            label: G("nav.gallery"),
                            top: H.nightDeep,
                            bottom: H.night,
                            node: (0, a.jsx)(am, {
                                photos: er
                            })
                        };
                    case "countdown":
                        return el ? {
                            kind: e,
                            id: "chaand-countdown",
                            label: G("nav.countdown"),
                            top: H.night,
                            bottom: H.nightDeep,
                            node: (0, a.jsx)(e4, {
                                target: el.at,
                                event: el.event,
                                events: et
                            })
                        } : null;
                    case "hashtag":
                        var l, s;
                        return {
                            kind: e,
                            id: "chaand-hashtag",
                            label: G("nav.hashtag"),
                            top: H.ivory,
                            bottom: H.ivory,
                            node: (0, a.jsx)(ab, {
                                tag: (null == (l = q.hashtag) ? void 0 : l.tag) ?? "",
                                caption: null == (s = q.hashtag) ? void 0 : s.caption,
                                logo: eu,
                                emblem: ea.emblem
                            })
                        };
                    case "special-request":
                        return {
                            kind: e,
                            id: "chaand-request",
                            label: G("nav.request"),
                            top: H.ivory,
                            bottom: H.ivory,
                            node: (0, a.jsx)("section", {
                                id: "chaand-request",
                                className: e$.default.request,
                                style: {
                                    "--finial": `url("${Q("finial")}")`
                                },
                                children: (0, a.jsx)(p.SpecialRequestSection, {
                                    specialRequest: q.specialRequest,
                                    theme: eB,
                                    variant: "panel",
                                    className: e$.default.cartouche
                                })
                            })
                        };
                    case "gifts":
                        return {
                            kind: e,
                            id: "chaand-gifts",
                            label: V("nav"),
                            top: H.ivory,
                            bottom: H.ivory,
                            node: (0, a.jsx)("section", {
                                id: "chaand-gifts",
                                className: "px-5 py-16 sm:py-20",
                                children: (0, a.jsx)(y.f, {
                                    theme: eB,
                                    variant: "panel"
                                })
                            })
                        };
                    case "rsvp":
                        return {
                            kind: e,
                            id: "chaand-rsvp",
                            label: G("nav.rsvp"),
                            top: H.ivory,
                            bottom: H.ivory,
                            node: (0, a.jsx)(aW, {
                                slug: q.slug,
                                events: et,
                                settings: q.rsvpSettings,
                                themeConfig: M
                            })
                        };
                    case "footer":
                        return {
                            kind: e,
                            id: "chaand-closing",
                            label: G("nav.closing"),
                            top: H.night,
                            bottom: H.nightDeep,
                            node: (0, a.jsx)(eX, {
                                one: ed,
                                two: ec,
                                date: ej.date,
                                wedding: es,
                                events: et,
                                logo: eg ? void 0 : eu,
                                shareUrl: E,
                                shareSettings: q.shareSettings,
                                watermarkEnabled: q.watermarkEnabled,
                                onReplay: A || U && !ew ? void 0 : eP
                            })
                        };
                    default:
                        return null
                }
            })(e.kind)).filter(e => null !== e);
        return (0, a.jsxs)(eR.Provider, {
            value: eI,
            children: [eq ? (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)("style", {
                    dangerouslySetInnerHTML: {
                        __html: `html, body { background-color: ${(0,k.F)(ei)} !important; }`
                    }
                }), (0, a.jsx)(ax, {
                    one: ed,
                    two: ec,
                    when: ex,
                    leaving: "leaving" === eN,
                    invocation: ea.invocation,
                    emblem: ea.emblem,
                    logo: eu,
                    onOpen: eH,
                    onSkip: eA
                }, `gate-${eT}`)]
            }) : null, (0, a.jsxs)("main", {
                ref: X,
                inert: eM,
                className: e$.default.page,
                "data-motion": P ? "lite" : void 0,
                style: {
                    "--ivory": H.ivory,
                    "--paper-tone": H.paper,
                    "--ink": H.ink,
                    "--muted": H.muted,
                    "--firozi": H.firozi,
                    "--gold": H.gold,
                    "--gold-light": H.goldLight,
                    "--gold-deep": H.goldDeep,
                    "--rose": H.rose,
                    "--night": H.night,
                    "--night-deep": H.nightDeep,
                    "--light": H.light,
                    "--focus": H.firozi,
                    "--script": eC,
                    background: H.ivory,
                    color: H.ink,
                    fontFamily: D.bodyFont
                },
                children: [(0, a.jsx)(N.f, {
                    families: [null == M ? void 0 : M.fonts.heading, null == M ? void 0 : M.fonts.body, eW, eF, eS, eL]
                }), (T = eJ, O = H, T.map((e, l) => {
                    let s = T[l - 1],
                        r = null;
                    if (s) {
                        let t = (0, k.c)(s.bottom),
                            l = (0, k.c)(e.top),
                            i = t && !l ? `, ${(0,k.j)(O.rosePale,s.bottom,.5)} 34%, ${O.duskLavender} 68%` : !t && l ? `, ${O.duskLavender} 32%, ${O.moon} 72%` : `, ${(0,k.j)(s.bottom,e.top,.5)} 50%`,
                            n = !l && !t;
                        r = (0, a.jsx)("div", {
                            className: e$.default.seam,
                            "aria-hidden": "true",
                            style: {
                                background: `linear-gradient(180deg, ${s.bottom}${i}, ${e.top})`
                            },
                            children: (0, a.jsxs)("span", {
                                className: e$.default.seamRule,
                                style: {
                                    "--rule": n ? (0, k.L)(O.goldLight, .7) : O.gold
                                },
                                children: [(0, a.jsx)("i", {}), (0, a.jsx)("span", {
                                    className: e$.default.seamFeather,
                                    children: (0, a.jsx)(e_.O, {
                                        color: n ? O.goldLight : O.goldDeep,
                                        deep: O.firoziDeep,
                                        accent: O.rose,
                                        size: 26
                                    })
                                }), (0, a.jsx)("i", {})]
                            })
                        })
                    }
                    return (0, a.jsxs)(t.Fragment, {
                        children: [r, e.node]
                    }, `${e.kind}-${l}`)
                })), !ey && q.watermarkEnabled ? (0, a.jsx)("div", {
                    className: e$.default.coda,
                    style: {
                        background: (null == (F = eJ.at(-1)) ? void 0 : F.bottom) ?? H.ivory
                    },
                    children: (0, a.jsx)(e0, {
                        color: (0, k.c)((null == (L = eJ.at(-1)) ? void 0 : L.bottom) ?? H.ivory) ? H.muted : (0, k.L)(H.light, .6)
                    })
                }) : null]
            }), eq && "leaving" !== eN ? null : (0, a.jsx)(aE, {
                chapters: eJ,
                tones: H,
                reduce: A,
                hidden: eq
            })]
        })
    }], 999734)
}, 929917, e => {
    "use strict";
    var a = e.i(729176);

    function t(e) {
        let {
            gold: t,
            deep: l,
            accent: s = t,
            cx: r,
            cy: i,
            r: n
        } = e, o = Array.from({
            length: 5
        }, (e, t) => {
            let l = Math.PI / 180 * (72 * t - 90),
                s = r + Math.cos(l) * n * .52,
                o = i + Math.sin(l) * n * .52;
            return (0, a.jsx)("ellipse", {
                cx: s,
                cy: o,
                rx: .5 * n,
                ry: .36 * n,
                transform: `rotate(${72*t} ${s} ${o})`
            }, t)
        });
        return (0, a.jsxs)("g", {
            stroke: t,
            strokeWidth: "1",
            strokeLinejoin: "round",
            children: [(0, a.jsx)("g", {
                fill: s,
                fillOpacity: "0.2",
                children: o
            }), (0, a.jsx)("circle", {
                cx: r,
                cy: i,
                r: .42 * n,
                fill: s,
                fillOpacity: "0.35"
            }), (0, a.jsx)("path", {
                d: `M${r-.22*n} ${i}c0-${.24*n} ${.44*n}-${.24*n} ${.44*n} 0s-${.3*n} ${.3*n}-${.3*n} 0`,
                fill: "none",
                stroke: l,
                strokeWidth: "0.8"
            })]
        })
    }
    e.s(["f", 0, function(e) {
        let {
            gold: l,
            deep: s,
            accent: r = l,
            size: i = 44,
            className: n,
            style: o
        } = e;
        return (0, a.jsxs)("svg", {
            viewBox: "0 0 48 64",
            width: 48 * i / 64,
            height: i,
            className: n,
            style: o,
            "aria-hidden": "true",
            children: [(0, a.jsxs)("g", {
                stroke: l,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                fill: "none",
                children: [(0, a.jsx)("path", {
                    d: "M24 61C23.4 50 23.8 38 24.2 27",
                    strokeWidth: "1.3"
                }), (0, a.jsx)("path", {
                    d: "M24 46c-5-1.6-9.6-.4-13 3.4 4.6 1.8 9.2 1 13-3.4z",
                    fill: l,
                    fillOpacity: "0.18",
                    strokeWidth: "1"
                }), (0, a.jsx)("path", {
                    d: "M24.1 39c5-2.4 10-1.8 13.6 1.6-4.4 2.4-9.2 2.2-13.6-1.6z",
                    fill: l,
                    fillOpacity: "0.18",
                    strokeWidth: "1"
                }), (0, a.jsx)("path", {
                    d: "M17.2 47.4c3 0 5.4.2 6.8-1.4M30.6 40.6c-2.6.4-4.8-.2-6.5-1.6",
                    strokeWidth: "0.6",
                    strokeOpacity: "0.7"
                }), (0, a.jsx)("path", {
                    d: "M24.2 33c2.8-3 6.4-4.6 9.8-4.6",
                    strokeWidth: "0.9"
                }), (0, a.jsx)("path", {
                    d: "M34 28.4c1.4-2.4 4.2-3.2 6-2.2-.4 2.8-3.4 4.4-6 2.2z",
                    fill: r,
                    fillOpacity: "0.3",
                    strokeWidth: "0.9"
                })]
            }), (0, a.jsx)(t, {
                gold: l,
                deep: s,
                accent: r,
                cx: 24,
                cy: 17,
                r: 13
            })]
        })
    }, "r", 0, function(e) {
        let {
            gold: t,
            deep: l,
            accent: s = t,
            size: r = 44,
            className: i,
            style: n
        } = e;
        return (0, a.jsxs)("svg", {
            viewBox: "0 0 64 64",
            width: r,
            height: r,
            className: i,
            style: n,
            "aria-hidden": "true",
            children: [(0, a.jsx)("path", {
                d: "M41.5 9.2A25 25 0 1 0 54.8 42.6 20.5 20.5 0 1 1 41.5 9.2Z",
                fill: t,
                fillOpacity: "0.22",
                stroke: t,
                strokeWidth: "1.4",
                strokeLinejoin: "round"
            }), (0, a.jsx)("path", {
                d: "M36.4 13.2A20.8 20.8 0 0 0 49.8 43.8",
                fill: "none",
                stroke: l,
                strokeWidth: "0.7",
                strokeOpacity: "0.55",
                strokeLinecap: "round"
            }), (0, a.jsx)("polygon", {
                points: Array.from({
                    length: 10
                }, (e, a) => {
                    let t = -Math.PI / 2 + a * Math.PI / 5,
                        l = a % 2 == 0 ? 6.4 : 2.688;
                    return `${(44+Math.cos(t)*l).toFixed(2)},${(25+Math.sin(t)*l).toFixed(2)}`
                }).join(" "),
                fill: s,
                fillOpacity: "0.85",
                stroke: t,
                strokeWidth: "0.8",
                strokeLinejoin: "round"
            })]
        })
    }, "i", 0, function(e) {
        let {
            gold: t,
            glass: l,
            size: s = 14,
            className: r = ""
        } = e;
        return (0, a.jsxs)("svg", {
            viewBox: "0 0 14 22",
            width: 14 * s / 22,
            height: s,
            className: r,
            "aria-hidden": "true",
            children: [(0, a.jsx)("path", {
                d: "M7 0v3",
                stroke: t,
                strokeWidth: "0.9"
            }), (0, a.jsx)("path", {
                d: "M4.4 4.6h5.2L9 3.2H5z",
                fill: t
            }), (0, a.jsx)("path", {
                d: "M7 4.8c3.6 1.6 4.8 5 4.8 7.6S10 17 7 17.6C4 17 2.2 15 2.2 12.4S3.4 6.4 7 4.8z",
                fill: l,
                stroke: t,
                strokeWidth: "0.9"
            }), (0, a.jsx)("path", {
                d: "M5 17.8h4l-.8 1.4H5.8zM7 19.2v2.4",
                stroke: t,
                strokeWidth: "0.8",
                fill: t
            })]
        })
    }, "j", 0, function(e) {
        let {
            reed: t,
            nib: l,
            className: s = ""
        } = e;
        return (0, a.jsxs)("svg", {
            viewBox: "0 0 10 60",
            className: s,
            preserveAspectRatio: "xMidYMax meet",
            "aria-hidden": "true",
            children: [(0, a.jsx)("path", {
                d: "M3.4 1h3.2l.4 44H3z",
                fill: t,
                fillOpacity: "0.85",
                stroke: l,
                strokeWidth: "0.4",
                strokeOpacity: "0.4"
            }), (0, a.jsx)("path", {
                d: "M3.2 14h3.6M3.1 30h3.8",
                stroke: l,
                strokeWidth: "0.5",
                strokeOpacity: "0.45"
            }), (0, a.jsx)("path", {
                d: "M3 45l4 0-1 9.5L4.6 59 3.6 54.5z",
                fill: t,
                stroke: l,
                strokeWidth: "0.45"
            }), (0, a.jsx)("path", {
                d: "M5 47.5v10",
                stroke: l,
                strokeWidth: "0.5"
            })]
        })
    }, "O", 0, function(e) {
        let {
            color: l,
            deep: s = l,
            accent: r = l,
            size: i = 16,
            className: n = ""
        } = e;
        return (0, a.jsx)("svg", {
            viewBox: "0 0 32 32",
            width: i,
            height: i,
            className: n,
            "aria-hidden": "true",
            children: (0, a.jsx)(t, {
                gold: l,
                deep: s,
                accent: r,
                cx: 16,
                cy: 16,
                r: 12
            })
        })
    }])
}, 389509, e => {
    e.v({
        actTl: "sRSFOW_actTl",
        album: "sRSFOW_album",
        alidade: "sRSFOW_alidade",
        arabic: "sRSFOW_arabic",
        arcadeBead: "sRSFOW_arcadeBead",
        arcadeCount: "sRSFOW_arcadeCount",
        arcadeFoot: "sRSFOW_arcadeFoot",
        arcadeLine: "sRSFOW_arcadeLine",
        archButton: "sRSFOW_archButton",
        archFigure: "sRSFOW_archFigure",
        archFrame: "sRSFOW_archFrame",
        archOpening: "sRSFOW_archOpening",
        archPhoto: "sRSFOW_archPhoto",
        archPlaque: "sRSFOW_archPlaque",
        archRow: "sRSFOW_archRow",
        archTilt: "sRSFOW_archTilt",
        arrivalCue: "sRSFOW_arrivalCue",
        astroGlow: "sRSFOW_astroGlow",
        astrolabe: "sRSFOW_astrolabe",
        baradari: "sRSFOW_baradari",
        beads: "sRSFOW_beads",
        bed: "sRSFOW_bed",
        blessing: "sRSFOW_blessing",
        book: "sRSFOW_book",
        bookHalo: "sRSFOW_bookHalo",
        bookStage: "sRSFOW_bookStage",
        budArrow: "sRSFOW_budArrow",
        candlelight: "sRSFOW_candlelight",
        card: "sRSFOW_card",
        cardActions: "sRSFOW_cardActions",
        cardAddress: "sRSFOW_cardAddress",
        cardCount: "sRSFOW_cardCount",
        cardDate: "sRSFOW_cardDate",
        cardFacts: "sRSFOW_cardFacts",
        cardInvocation: "sRSFOW_cardInvocation",
        cardName: "sRSFOW_cardName",
        cardNote: "sRSFOW_cardNote",
        cardRule: "sRSFOW_cardRule",
        cardWrap: "sRSFOW_cardWrap",
        cartouche: "sRSFOW_cartouche",
        cbArchDrift: "sRSFOW_cbArchDrift",
        cbArchIn: "sRSFOW_cbArchIn",
        cbArchOut: "sRSFOW_cbArchOut",
        cbBed: "sRSFOW_cbBed",
        cbBookOpen: "sRSFOW_cbBookOpen",
        cbBrassGlint: "sRSFOW_cbBrassGlint",
        cbBreath: "sRSFOW_cbBreath",
        cbCandle: "sRSFOW_cbCandle",
        cbChevron: "sRSFOW_cbChevron",
        cbCueAway: "sRSFOW_cbCueAway",
        cbCueDrop: "sRSFOW_cbCueDrop",
        cbCueIn: "sRSFOW_cbCueIn",
        cbCurtainLeft: "sRSFOW_cbCurtainLeft",
        cbCurtainRight: "sRSFOW_cbCurtainRight",
        cbCypress: "sRSFOW_cbCypress",
        cbCypressFlip: "sRSFOW_cbCypressFlip",
        cbEmber: "sRSFOW_cbEmber",
        cbFeatherPass: "sRSFOW_cbFeatherPass",
        cbFireflies: "sRSFOW_cbFireflies",
        cbFlicker: "sRSFOW_cbFlicker",
        cbGlint: "sRSFOW_cbGlint",
        cbGlitter: "sRSFOW_cbGlitter",
        cbGround: "sRSFOW_cbGround",
        cbGroundVeil: "sRSFOW_cbGroundVeil",
        cbHaze: "sRSFOW_cbHaze",
        cbHint: "sRSFOW_cbHint",
        cbHtBurst: "sRSFOW_cbHtBurst",
        cbJet: "sRSFOW_cbJet",
        cbLag: "sRSFOW_cbLag",
        cbLampRise: "sRSFOW_cbLampRise",
        cbLead: "sRSFOW_cbLead",
        cbLeadMore: "sRSFOW_cbLeadMore",
        cbLeafShade: "sRSFOW_cbLeafShade",
        cbLeafTurn: "sRSFOW_cbLeafTurn",
        cbLeafTurnSpread: "sRSFOW_cbLeafTurnSpread",
        cbLifeFlame: "sRSFOW_cbLifeFlame",
        cbLifeMoon: "sRSFOW_cbLifeMoon",
        cbLifeShimmer: "sRSFOW_cbLifeShimmer",
        cbLifeSteam: "sRSFOW_cbLifeSteam",
        cbMirrorGlint: "sRSFOW_cbMirrorGlint",
        cbMoonHalo: "sRSFOW_cbMoonHalo",
        cbMoonRise: "sRSFOW_cbMoonRise",
        cbMoonWarm: "sRSFOW_cbMoonWarm",
        cbMote: "sRSFOW_cbMote",
        cbNamesSet: "sRSFOW_cbNamesSet",
        cbNight: "sRSFOW_cbNight",
        cbPetalFall: "sRSFOW_cbPetalFall",
        cbQandeelDolly: "sRSFOW_cbQandeelDolly",
        cbQandeelSway: "sRSFOW_cbQandeelSway",
        cbRailDiya: "sRSFOW_cbRailDiya",
        cbRaysTurn: "sRSFOW_cbRaysTurn",
        cbRise: "sRSFOW_cbRise",
        cbRuleDraw: "sRSFOW_cbRuleDraw",
        cbShine: "sRSFOW_cbShine",
        cbShower: "sRSFOW_cbShower",
        cbSpark: "sRSFOW_cbSpark",
        cbStars: "sRSFOW_cbStars",
        cbTwinkle: "sRSFOW_cbTwinkle",
        cbUnfurlClip: "sRSFOW_cbUnfurlClip",
        cbUnfurlCloth: "sRSFOW_cbUnfurlCloth",
        cbVeil: "sRSFOW_cbVeil",
        cbViewerIn: "sRSFOW_cbViewerIn",
        cbWall: "sRSFOW_cbWall",
        cbWipeInk: "sRSFOW_cbWipeInk",
        cbWipeOpen: "sRSFOW_cbWipeOpen",
        cdStars: "sRSFOW_cdStars",
        channel: "sRSFOW_channel",
        chapterHeading: "sRSFOW_chapterHeading",
        chapterTitle: "sRSFOW_chapterTitle",
        clock: "sRSFOW_clock",
        closing: "sRSFOW_closing",
        closingActions: "sRSFOW_closingActions",
        closingAnd: "sRSFOW_closingAnd",
        closingArt: "sRSFOW_closingArt",
        closingCopy: "sRSFOW_closingCopy",
        closingDate: "sRSFOW_closingDate",
        closingMark: "sRSFOW_closingMark",
        closingNames: "sRSFOW_closingNames",
        closingScene: "sRSFOW_closingScene",
        closingShare: "sRSFOW_closingShare",
        closingShareLabel: "sRSFOW_closingShareLabel",
        closingShower: "sRSFOW_closingShower",
        closingThanks: "sRSFOW_closingThanks",
        coda: "sRSFOW_coda",
        countdown: "sRSFOW_countdown",
        cover: "sRSFOW_cover",
        coverSheen: "sRSFOW_coverSheen",
        crescentGlow: "sRSFOW_crescentGlow",
        crown: "sRSFOW_crown",
        cueButton: "sRSFOW_cueButton",
        cueChevrons: "sRSFOW_cueChevrons",
        cueText: "sRSFOW_cueText",
        cueTrack: "sRSFOW_cueTrack",
        curtain: "sRSFOW_curtain",
        curtainLeft: "sRSFOW_curtainLeft",
        curtainRight: "sRSFOW_curtainRight",
        curtainRod: "sRSFOW_curtainRod",
        cypress: "sRSFOW_cypress",
        dial: "sRSFOW_dial",
        dialDigits: "sRSFOW_dialDigits",
        dialLabel: "sRSFOW_dialLabel",
        diyaGlow: "sRSFOW_diyaGlow",
        dropCap: "sRSFOW_dropCap",
        duaCaption: "sRSFOW_duaCaption",
        duaMeaning: "sRSFOW_duaMeaning",
        duaSource: "sRSFOW_duaSource",
        duaStage: "sRSFOW_duaStage",
        duaText: "sRSFOW_duaText",
        elderNames: "sRSFOW_elderNames",
        elderOf: "sRSFOW_elderOf",
        elderPage: "sRSFOW_elderPage",
        elderThread: "sRSFOW_elderThread",
        elders: "sRSFOW_elders",
        eldersEyebrow: "sRSFOW_eldersEyebrow",
        eldersHead: "sRSFOW_eldersHead",
        eldersTitle: "sRSFOW_eldersTitle",
        ember: "sRSFOW_ember",
        emblem: "sRSFOW_emblem",
        emblemGlyph: "sRSFOW_emblemGlyph",
        emblemMark: "sRSFOW_emblemMark",
        emptyHint: "sRSFOW_emptyHint",
        endpaper: "sRSFOW_endpaper",
        events: "sRSFOW_events",
        eyebrow: "sRSFOW_eyebrow",
        family: "sRSFOW_family",
        familyFeather: "sRSFOW_familyFeather",
        familyPanel: "sRSFOW_familyPanel",
        fireflies: "sRSFOW_fireflies",
        flank: "sRSFOW_flank",
        flankGlow: "sRSFOW_flankGlow",
        flankLeft: "sRSFOW_flankLeft",
        flankRight: "sRSFOW_flankRight",
        folio: "sRSFOW_folio",
        folioClip: "sRSFOW_folioClip",
        folioPaper: "sRSFOW_folioPaper",
        fx: "sRSFOW_fx",
        fxGlow: "sRSFOW_fxGlow",
        gallery: "sRSFOW_gallery",
        galleryTitle: "sRSFOW_galleryTitle",
        glintName: "sRSFOW_glintName",
        glitter: "sRSFOW_glitter",
        goodBody: "sRSFOW_goodBody",
        goodEyebrow: "sRSFOW_goodEyebrow",
        goodFact: "sRSFOW_goodFact",
        goodFinial: "sRSFOW_goodFinial",
        goodIcon: "sRSFOW_goodIcon",
        goodLabel: "sRSFOW_goodLabel",
        goodLink: "sRSFOW_goodLink",
        goodList: "sRSFOW_goodList",
        goodRule: "sRSFOW_goodRule",
        goodTitle: "sRSFOW_goodTitle",
        goodToKnow: "sRSFOW_goodToKnow",
        ground: "sRSFOW_ground",
        groundVeil: "sRSFOW_groundVeil",
        hashtag: "sRSFOW_hashtag",
        haze: "sRSFOW_haze",
        headline: "sRSFOW_headline",
        heroCopy: "sRSFOW_heroCopy",
        heroGuest: "sRSFOW_heroGuest",
        heroGuestName: "sRSFOW_heroGuestName",
        heroInvited: "sRSFOW_heroInvited",
        heroName: "sRSFOW_heroName",
        heroNames: "sRSFOW_heroNames",
        heroWeds: "sRSFOW_heroWeds",
        hole: "sRSFOW_hole",
        holeLabel: "sRSFOW_holeLabel",
        htBurst: "sRSFOW_htBurst",
        htCaption: "sRSFOW_htCaption",
        htCopied: "sRSFOW_htCopied",
        htCopyRow: "sRSFOW_htCopyRow",
        htEyebrow: "sRSFOW_htEyebrow",
        htGlyph: "sRSFOW_htGlyph",
        htInk: "sRSFOW_htInk",
        htLetter: "sRSFOW_htLetter",
        htLetters: "sRSFOW_htLetters",
        htOrnament: "sRSFOW_htOrnament",
        htPen: "sRSFOW_htPen",
        htPenTilt: "sRSFOW_htPenTilt",
        htPetal: "sRSFOW_htPetal",
        htSeal: "sRSFOW_htSeal",
        htSealMark: "sRSFOW_htSealMark",
        htSpark: "sRSFOW_htSpark",
        htTag: "sRSFOW_htTag",
        htWipe: "sRSFOW_htWipe",
        htWriting: "sRSFOW_htWriting",
        invEmblem: "sRSFOW_invEmblem",
        invitation: "sRSFOW_invitation",
        inviteAnd: "sRSFOW_inviteAnd",
        inviteDate: "sRSFOW_inviteDate",
        inviteNames: "sRSFOW_inviteNames",
        inviteTime: "sRSFOW_inviteTime",
        inviteVenue: "sRSFOW_inviteVenue",
        inviteWhen: "sRSFOW_inviteWhen",
        invocation: "sRSFOW_invocation",
        jet: "sRSFOW_jet",
        lampFlame: "sRSFOW_lampFlame",
        lanternGlow: "sRSFOW_lanternGlow",
        leaf: "sRSFOW_leaf",
        leafBack: "sRSFOW_leafBack",
        leafFront: "sRSFOW_leafFront",
        leafShade: "sRSFOW_leafShade",
        life: "sRSFOW_life",
        lifeFlame: "sRSFOW_lifeFlame",
        lifeJet: "sRSFOW_lifeJet",
        lifeMoon: "sRSFOW_lifeMoon",
        lifeShimmer: "sRSFOW_lifeShimmer",
        lifeSteam: "sRSFOW_lifeSteam",
        mater: "sRSFOW_mater",
        materSheen: "sRSFOW_materSheen",
        message: "sRSFOW_message",
        mirrorGlint: "sRSFOW_mirrorGlint",
        mirrorWall: "sRSFOW_mirrorWall",
        moon: "sRSFOW_moon",
        moonDisc: "sRSFOW_moonDisc",
        moonHalo: "sRSFOW_moonHalo",
        moonWarm: "sRSFOW_moonWarm",
        mote: "sRSFOW_mote",
        nightfall: "sRSFOW_nightfall",
        page: "sRSFOW_page",
        pageArrow: "sRSFOW_pageArrow",
        pageArrowNext: "sRSFOW_pageArrowNext",
        pageArrowPrev: "sRSFOW_pageArrowPrev",
        pageInner: "sRSFOW_pageInner",
        pageNumber: "sRSFOW_pageNumber",
        pageText: "sRSFOW_pageText",
        pager: "sRSFOW_pager",
        pagerWrap: "sRSFOW_pagerWrap",
        parents: "sRSFOW_parents",
        petal: "sRSFOW_petal",
        photoImg: "sRSFOW_photoImg",
        pill: "sRSFOW_pill",
        pin: "sRSFOW_pin",
        placeholder: "sRSFOW_placeholder",
        plane: "sRSFOW_plane",
        portrait: "sRSFOW_portrait",
        qalamRule: "sRSFOW_qalamRule",
        qandeelSway: "sRSFOW_qandeelSway",
        qandeels: "sRSFOW_qandeels",
        rail: "sRSFOW_rail",
        railClip: "sRSFOW_railClip",
        railDiya: "sRSFOW_railDiya",
        railInner: "sRSFOW_railInner",
        replay: "sRSFOW_replay",
        request: "sRSFOW_request",
        rete: "sRSFOW_rete",
        reteSwing: "sRSFOW_reteSwing",
        roll: "sRSFOW_roll",
        rollStrip: "sRSFOW_rollStrip",
        roseDivider: "sRSFOW_roseDivider",
        row: "sRSFOW_row",
        rows: "sRSFOW_rows",
        rsvp: "sRSFOW_rsvp",
        rsvpCard: "sRSFOW_rsvpCard",
        rsvpFinial: "sRSFOW_rsvpFinial",
        rsvpForm: "sRSFOW_rsvpForm",
        rsvpHead: "sRSFOW_rsvpHead",
        rsvpLamp: "sRSFOW_rsvpLamp",
        rsvpLampLeft: "sRSFOW_rsvpLampLeft",
        rsvpLampRight: "sRSFOW_rsvpLampRight",
        rsvpMark: "sRSFOW_rsvpMark",
        rsvpShower: "sRSFOW_rsvpShower",
        rsvpSub: "sRSFOW_rsvpSub",
        rsvpWrap: "sRSFOW_rsvpWrap",
        ruleTurn: "sRSFOW_ruleTurn",
        sceneArt: "sRSFOW_sceneArt",
        seam: "sRSFOW_seam",
        seamFeather: "sRSFOW_seamFeather",
        seamRule: "sRSFOW_seamRule",
        shamsa: "sRSFOW_shamsa",
        shamsaCore: "sRSFOW_shamsaCore",
        shamsaField: "sRSFOW_shamsaField",
        shamsaGlow: "sRSFOW_shamsaGlow",
        shamsaRays: "sRSFOW_shamsaRays",
        showerPetal: "sRSFOW_showerPetal",
        silkFold: "sRSFOW_silkFold",
        sky: "sRSFOW_sky",
        skyDusk: "sRSFOW_skyDusk",
        skyNight: "sRSFOW_skyNight",
        spark: "sRSFOW_spark",
        stage: "sRSFOW_stage",
        stars: "sRSFOW_stars",
        steps: "sRSFOW_steps",
        storyAct: "sRSFOW_storyAct",
        storyDim: "sRSFOW_storyDim",
        storyEyebrow: "sRSFOW_storyEyebrow",
        storyHint: "sRSFOW_storyHint",
        storyNames: "sRSFOW_storyNames",
        storyNight: "sRSFOW_storyNight",
        storyPetals: "sRSFOW_storyPetals",
        storyPin: "sRSFOW_storyPin",
        storyTitle: "sRSFOW_storyTitle",
        swatch: "sRSFOW_swatch",
        titleMark: "sRSFOW_titleMark",
        tl: "sRSFOW_tl",
        toEvents: "sRSFOW_toEvents",
        toEventsText: "sRSFOW_toEventsText",
        unwan: "sRSFOW_unwan",
        unwanField: "sRSFOW_unwanField",
        veil: "sRSFOW_veil",
        verse: "sRSFOW_verse",
        verseLine: "sRSFOW_verseLine",
        versoMark: "sRSFOW_versoMark",
        viewer: "sRSFOW_viewer",
        viewerCaption: "sRSFOW_viewerCaption",
        viewerClose: "sRSFOW_viewerClose",
        viewerCount: "sRSFOW_viewerCount",
        viewerFigure: "sRSFOW_viewerFigure",
        viewerNext: "sRSFOW_viewerNext",
        viewerPhoto: "sRSFOW_viewerPhoto",
        viewerPreload: "sRSFOW_viewerPreload",
        viewerPrev: "sRSFOW_viewerPrev",
        viewerStage: "sRSFOW_viewerStage",
        viewerStep: "sRSFOW_viewerStep",
        "vrindavan-photo": "sRSFOW_vrindavan-photo",
        wall: "sRSFOW_wall",
        watermark: "sRSFOW_watermark",
        window: "sRSFOW_window",
        windowArt: "sRSFOW_windowArt",
        windowFore: "sRSFOW_windowFore",
        windowFrame: "sRSFOW_windowFrame",
        withParents: "sRSFOW_withParents"
    })
}, 159800, e => {
    e.v({
        and: "y-crxG_and",
        band: "y-crxG_band",
        bandLeft: "y-crxG_bandLeft",
        bandRight: "y-crxG_bandRight",
        casket: "y-crxG_casket",
        cbBreath: "y-crxG_cbBreath",
        cbHint: "y-crxG_cbHint",
        cbPuff: "y-crxG_cbPuff",
        cbSealGlow: "y-crxG_cbSealGlow",
        cbSheen: "y-crxG_cbSheen",
        cbTasselSway: "y-crxG_cbTasselSway",
        crest: "y-crxG_crest",
        crestGlow: "y-crxG_crestGlow",
        gate: "y-crxG_gate",
        guest: "y-crxG_guest",
        hint: "y-crxG_hint",
        invocation: "y-crxG_invocation",
        invocationArabic: "y-crxG_invocationArabic",
        kicker: "y-crxG_kicker",
        knot: "y-crxG_knot",
        knotArt: "y-crxG_knotArt",
        leaving: "y-crxG_leaving",
        lid: "y-crxG_lid",
        lidPanel: "y-crxG_lidPanel",
        lidSheen: "y-crxG_lidSheen",
        lining: "y-crxG_lining",
        liningLeft: "y-crxG_liningLeft",
        liningRight: "y-crxG_liningRight",
        names: "y-crxG_names",
        print: "y-crxG_print",
        printBottom: "y-crxG_printBottom",
        printTop: "y-crxG_printTop",
        puff: "y-crxG_puff",
        puffPetal: "y-crxG_puffPetal",
        seal: "y-crxG_seal",
        sealFace: "y-crxG_sealFace",
        sealGlow: "y-crxG_sealGlow",
        sealGlyph: "y-crxG_sealGlyph",
        sealMark: "y-crxG_sealMark",
        sealRim: "y-crxG_sealRim",
        skip: "y-crxG_skip",
        tassel: "y-crxG_tassel",
        tasselLeft: "y-crxG_tasselLeft",
        tasselRight: "y-crxG_tasselRight",
        tie: "y-crxG_tie",
        when: "y-crxG_when"
    })
}, 847033, e => {
    "use strict";
    let a;
    var t = e.i(729176),
        l = e.i(244835),
        s = e.i(339368),
        r = e.i(762664),
        i = e.i(301187),
        n = e.i(19269),
        o = e.i(600024),
        d = e.i(541464),
        c = e.i(621281),
        u = e.i(293032),
        h = e.i(147196),
        m = e.i(380336),
        p = e.i(85358),
        f = e.i(254596),
        g = e.i(423088),
        y = e.i(738371),
        v = e.i(575198),
        x = e.i(99115),
        j = e.i(627655),
        b = e.i(158105),
        w = e.i(664857),
        N = e.i(888531),
        k = e.i(692126),
        _ = e.i(928723),
        $ = e.i(396243),
        W = e.i(149504),
        C = e.i(846047);
    let F = null,
        L = null,
        S = [],
        T = [],
        O = !1;

    function R() {
        if (F) return F;
        let e = window.AudioContext ?? window.webkitAudioContext;
        return e ? F = new e : null
    }

    function q(e, a, t) {
        let l = e.currentTime,
            s = t ? 554.36 : 138.59 * [3, 4, 4.5][Math.floor(3 * Math.random())],
            r = t ? .34 : .12,
            i = e.createStereoPanner ? e.createStereoPanner() : null;
        for (let [n, o, d] of (i && (i.pan.value = t ? 0 : 1.2 * Math.random() - .6, i.connect(a)), [
                [.5, .35, 7.5],
                [1, .5, 6],
                [1.183, .28, 4.4],
                [1.506, .18, 3.4],
                [2, .22, 3],
                [2.74, .09, 1.8],
                [3.76, .05, 1.1]
            ])) {
            let c = e.createOscillator(),
                u = e.createGain();
            c.type = "sine", c.frequency.value = s * n, c.detune.value = (Math.random() - .5) * 6, u.gain.setValueAtTime(1e-4, l), u.gain.exponentialRampToValueAtTime(o * r, l + .006), u.gain.exponentialRampToValueAtTime(1e-4, l + d * (t ? 1 : .8)), c.connect(u).connect(i ?? a), c.start(l), c.stop(l + d + .2)
        }
    }
    async function M() {
        let e = R();
        if (!e) return;
        "suspended" === e.state && await e.resume().catch(() => {});
        let a = e.createGain();
        a.gain.value = 1, a.connect(e.destination), q(e, a, !0), window.setTimeout(() => a.disconnect(), 9e3)
    }
    async function E() {
        let e = R();
        if (!e || O) return;
        "suspended" === e.state && await e.resume().catch(() => {}), O = !0, (L = e.createGain()).gain.value = 0, L.connect(e.destination);
        let t = e.createBiquadFilter();
        t.type = "lowpass", t.frequency.value = 900, t.Q.value = .6;
        let l = e.createOscillator();
        l.frequency.value = .07;
        let s = e.createGain();
        s.gain.value = 260, l.connect(s).connect(t.frequency), t.connect(L);
        let r = [],
            i = [];
        [207.885, 277.18, 277.18, 138.59].forEach((a, l) => {
                let s = e.createGain();
                s.gain.value = 3 === l ? .05 : .035;
                let n = e.createOscillator();
                n.frequency.value = .11 + .013 * l;
                let o = e.createGain();
                for (let t of (o.gain.value = .018, n.connect(o).connect(s.gain), [-4, 5])) {
                    let l = e.createOscillator();
                    l.type = "sawtooth", l.frequency.value = a, l.detune.value = t, l.connect(s), r.push(l)
                }
                s.connect(t), r.push(n), i.push(s, o)
            }), r.forEach(e => e.start()), l.start(), T = [...r, l], S = [t, s, ...i], L.gain.setTargetAtTime(.26, e.currentTime, 1.2),
            function e(t, l) {
                window.clearTimeout(a), a = window.setTimeout(() => {
                    O && (q(t, l, !1), e(t, l))
                }, 14e3 + 1e4 * Math.random())
            }(e, L)
    }

    function D() {
        if (!F || !O) return;
        O = !1, window.clearTimeout(a);
        let e = F,
            t = L,
            l = T,
            s = S;
        t && t.gain.setTargetAtTime(0, e.currentTime, .3), window.setTimeout(() => {
            l.forEach(e => {
                try {
                    e.stop()
                } catch {}
            }), [...s, t].forEach(e => null == e ? void 0 : e.disconnect())
        }, 1400), T = [], S = [], L = null
    }
    var H = e.i(339746),
        A = e.i(157478),
        P = e.i(642895),
        I = e.i(843863),
        B = e.i(169966),
        U = e.i(540208),
        z = e.i(172997);

    function G(e) {
        let {
            count: a = 7,
            className: l = ""
        } = e;
        return (0, t.jsx)("div", {
            className: `${U.default.petals} ${l}`,
            "aria-hidden": "true",
            style: {
                "--sprite": (0, C.L)("petals")
            },
            children: z.e.slice(0, a).map((e, a) => (0, t.jsx)("span", {
                className: U.default.petal,
                style: {
                    left: `${e.x}%`,
                    width: `${e.size}px`,
                    height: `${e.size}px`,
                    animationDelay: `${e.delay}s`,
                    animationDuration: `${e.dur}s`,
                    "--drift": `${e.drift}vw`,
                    backgroundPosition: `${e.cell/7*100}% 0`
                }
            }, a))
        })
    }
    var J = e.i(337046);
    let V = "Tiro Devanagari Hindi",
        K = "Tiro Devanagari Sanskrit",
        Y = `"${V}", "Noto Serif Devanagari", serif`,
        Z = `"${K}", "${V}", "Noto Serif Devanagari", serif`,
        Q = (0, l.createContext)(null);

    function X() {
        let e = (0, l.useContext)(Q);
        if (!e) throw Error("Devi Darbar chapters must render inside <DeviContext.Provider>");
        return e
    }

    function ee(e) {
        let {
            id: a,
            eyebrow: l,
            title: s,
            light: r = !1,
            className: i = "",
            children: n
        } = e, {
            theme: o,
            tones: d,
            display: c
        } = X();
        return (0, t.jsxs)("header", {
            className: `${U.default.chapterTitle} ${i}`,
            children: [(0, t.jsx)("p", {
                className: `${U.default.eyebrow} rv`,
                style: {
                    color: r ? d.goldLight : d.goldDeep
                },
                children: l
            }), (0, t.jsx)("h2", {
                id: a,
                className: `${U.default.chapterHeading} rv`,
                style: {
                    fontFamily: c,
                    fontWeight: o.headingWeight ?? 400,
                    color: r ? d.light : d.ink
                },
                children: s
            }), (0, t.jsx)(et, {
                className: "rv",
                colour: r ? (0, $.L)(d.goldLight, .85) : d.gold
            }), n]
        })
    }

    function ea(e) {
        let {
            size: a,
            className: l = ""
        } = e, {
            tones: s
        } = X();
        return (0, t.jsx)("span", {
            className: `${U.default.medallion} ${l}`,
            style: {
                width: a,
                height: a,
                background: `conic-gradient(from 0deg, ${s.goldLight}, ${s.gold}, ${s.goldDeep}, ${s.gold}, ${s.goldLight})`
            },
            "aria-hidden": "true",
            children: (0, t.jsx)("img", {
                src: (0, C._)("mata-rani-medallion"),
                width: C.J["mata-rani-medallion"].w,
                height: C.J["mata-rani-medallion"].h,
                alt: "",
                decoding: "async",
                draggable: !1
            })
        })
    }

    function et(e) {
        let {
            colour: a,
            className: l = ""
        } = e;
        return (0, t.jsx)(J.V, {
            colour: a,
            className: `${U.default.lotusRule} ${l}`
        })
    }

    function el(e) {
        let {
            href: a,
            onClick: l,
            download: s,
            external: r = !1,
            variant: i = "solid",
            light: n = !1,
            ariaLabel: o,
            ariaPressed: d,
            className: c = "",
            children: u
        } = e, {
            tones: h
        } = X(), m = "solid" === i ? {
            background: h.sindoor,
            color: h.onSindoor,
            borderColor: h.goldLight,
            outlineColor: h.goldLight
        } : {
            background: n ? (0, $.L)(h.dark, .28) : (0, $.L)(h.paper, .7),
            color: n ? h.light : h.ink,
            borderColor: n ? (0, $.L)(h.goldLight, .6) : (0, $.L)(h.gold, .75),
            outlineColor: n ? h.goldLight : h.sindoor
        }, p = `${U.default.pill} ${"solid"===i?U.default.pillSolid:""} ${c}`;
        return a ? (0, t.jsx)("a", {
            href: a,
            className: p,
            style: m,
            "aria-label": o,
            download: s,
            ...r ? {
                target: "_blank",
                rel: "noopener noreferrer"
            } : {},
            children: u
        }) : (0, t.jsx)("button", {
            type: "button",
            onClick: l,
            className: p,
            style: m,
            "aria-label": o,
            "aria-pressed": d,
            children: u
        })
    }

    function es(e, a) {
        let t = document.getElementById(e);
        if (!t) return;
        t.scrollIntoView({
            behavior: a ? "auto" : "smooth",
            block: "start"
        });
        let l = t.querySelector("h2, h3") ?? t;
        l.hasAttribute("tabindex") || l.setAttribute("tabindex", "-1"), l.focus({
            preventScroll: !0
        })
    }

    function er(e) {
        var a;
        let {
            invocation: n,
            one: o,
            two: d,
            dateLabel: c,
            thankYou: u,
            events: h,
            ceremony: m,
            hashtag: p,
            shareUrl: g,
            shareSettings: y,
            watermarkEnabled: v,
            onReplay: x,
            sound: j
        } = e, b = (0, i.r)("inviteThemes.devi-darbar"), w = (0, i.r)("share"), {
            theme: k,
            tones: _,
            display: F
        } = X(), L = (0, l.useRef)(null), S = (0, W.d)(L), [T, O] = (0, W.i)(.12), R = `${o} & ${d}`, q = m ? (0, I.f)(m) : null, M = (0, l.useMemo)(() => (0, B.W)(h, R), [h, R]), E = (0, l.useMemo)(() => ({ ...k,
            palette: { ...k.palette,
                primary: _.sindoor,
                accent: _.sindoor,
                text: _.ink,
                muted: _.muted,
                surface: _.paper,
                background: _.ivory
            }
        }), [k, _]);
        return (0, t.jsxs)("footer", {
            ref: L,
            id: "devi-closing",
            "aria-labelledby": "devi-closing-title",
            className: U.default.closing,
            "data-paused": S ? "false" : "true",
            style: {
                background: _.ivory
            },
            children: [(0, t.jsxs)("div", {
                className: U.default.closingArt,
                "aria-hidden": "true",
                children: [(0, t.jsx)(C.O, {
                    portrait: "dawn-p",
                    landscape: "dawn-w",
                    className: U.default.closingImg
                }), (0, t.jsx)("span", {
                    className: U.default.closingNight,
                    style: {
                        "--night": _.nightDeep
                    }
                }), (0, t.jsx)("span", {
                    className: U.default.closingShade,
                    style: {
                        background: `linear-gradient(180deg, ${_.nightDeep} 0%, ${(0,$.L)(_.nightDeep,.55)} 7%, transparent 22%, transparent 62%, ${(0,$.L)(_.ivory,.75)} 86%, ${_.ivory} 100%)`
                    }
                }), (0, t.jsx)(G, {
                    count: 6,
                    className: U.default.closingPetals
                })]
            }), (0, t.jsx)("div", {
                ref: T,
                "data-reveal": O,
                className: U.default.closingCopy,
                children: (0, t.jsxs)("div", {
                    className: `${U.default.closingPanel} rv`,
                    style: {
                        background: (0, $.L)(_.paper, .9),
                        borderColor: (0, $.L)(_.gold, .55),
                        color: _.ink
                    },
                    children: [(0, t.jsx)(ea, {
                        size: "72px",
                        className: U.default.closingMedallion
                    }), (0, t.jsx)("p", {
                        className: U.default.closingInvocation,
                        lang: "hi",
                        style: {
                            fontFamily: Y,
                            color: _.sindoor
                        },
                        children: n
                    }), (0, t.jsx)("p", {
                        className: U.default.eyebrow,
                        style: {
                            color: _.goldDeep
                        },
                        children: b("closing.eyebrow")
                    }), (0, t.jsx)("h2", {
                        id: "devi-closing-title",
                        className: U.default.closingTitle,
                        style: {
                            fontFamily: F,
                            fontWeight: k.headingWeight ?? 400,
                            color: _.ink
                        },
                        children: b("closing.title")
                    }), (0, t.jsxs)("p", {
                        className: U.default.closingNames,
                        style: {
                            fontFamily: F,
                            color: _.sindoor
                        },
                        children: [o, " ", (0, t.jsx)("span", {
                            className: U.default.closingWeds,
                            style: {
                                color: _.goldDeep
                            },
                            children: b("hero.weds")
                        }), " ", d]
                    }), c ? (0, t.jsx)("p", {
                        className: U.default.closingDate,
                        style: {
                            color: _.muted
                        },
                        children: c
                    }) : null, (0, t.jsx)("p", {
                        className: U.default.closingThanks,
                        style: {
                            fontFamily: F,
                            color: _.ink
                        },
                        children: u
                    }), (0, t.jsx)(et, {
                        colour: _.gold
                    }), q || M ? (0, t.jsxs)("div", {
                        className: U.default.closingGroup,
                        children: [(0, t.jsx)("p", {
                            className: U.default.closingLabel,
                            style: {
                                color: _.muted
                            },
                            children: b("closing.saveDates")
                        }), (0, t.jsxs)("div", {
                            className: U.default.closingActions,
                            children: [q ? (0, t.jsxs)(el, {
                                href: q,
                                external: !0,
                                variant: "outline",
                                children: [(0, t.jsx)(H.f, {
                                    "aria-hidden": "true"
                                }), " ", b("closing.googleCalendar")]
                            }) : null, M ? (0, t.jsxs)(el, {
                                href: M,
                                download: (0, B._)(R),
                                variant: "outline",
                                children: [(0, t.jsx)(H.f, {
                                    "aria-hidden": "true"
                                }), " ", b("closing.calendarFile")]
                            }) : null]
                        })]
                    }) : null, (null == p || null == (a = p.tag) ? void 0 : a.trim()) ? (0, t.jsx)("div", {
                        className: U.default.closingHashtag,
                        children: (0, t.jsx)(f.f, {
                            hashtag: p,
                            theme: E,
                            variant: "inline"
                        })
                    }) : null, (0, t.jsxs)("div", {
                        className: U.default.closingGroup,
                        children: [(0, t.jsx)("p", {
                            className: U.default.closingLabel,
                            style: {
                                color: _.muted
                            },
                            children: w("heading")
                        }), (0, t.jsx)(P.f, {
                            url: g,
                            title: R,
                            settings: y,
                            theme: E
                        })]
                    }), (0, t.jsxs)("div", {
                        className: U.default.closingActions,
                        "data-export-hide": !0,
                        children: [(0, t.jsxs)(el, {
                            onClick: x,
                            variant: "outline",
                            children: [(0, t.jsx)(A.f, {
                                "aria-hidden": "true"
                            }), " ", b("closing.replay")]
                        }), j ? (0, t.jsxs)(el, {
                            onClick: j.toggle,
                            variant: "outline",
                            ariaPressed: j.on,
                            children: [j.on ? (0, t.jsx)(s.f, {
                                "aria-hidden": "true"
                            }) : (0, t.jsx)(r.f, {
                                "aria-hidden": "true"
                            }), b(j.on ? "audio.turnOff" : "audio.turnOn")]
                        }) : null]
                    })]
                })
            }), v ? (0, t.jsx)("p", {
                id: "invite-watermark",
                className: U.default.closingMark,
                style: {
                    background: _.ivory
                },
                children: (0, t.jsx)("a", {
                    href: "/",
                    target: "_blank",
                    rel: "noopener",
                    style: {
                        color: _.muted
                    },
                    children: (0, t.jsx)(N.LocalizedWatermarkText, {})
                })
            }) : (0, t.jsx)("div", {
                className: U.default.closingFoot,
                style: {
                    background: _.ivory
                },
                "aria-hidden": "true"
            })]
        })
    }
    var ei = e.i(565617);
    let en = e => Math.round(100 * e) / 100;

    function eo(e, a, t, l) {
        let s = e * Math.PI / 180,
            r = Math.cos(s),
            i = Math.sin(s),
            n = -i,
            o = (a + t) / 2,
            d = r * a,
            c = i * a;
        return `M${en(d)} ${en(c)} Q${en(r*o+n*l)} ${en(i*o+r*l)} ${en(r*t)} ${en(i*t)} Q${en(r*o-n*l)} ${en(i*o-r*l)} ${en(d)} ${en(c)} Z`
    }

    function ed(e, a, t) {
        let l = "";
        for (let s = 0; s < e; s++) {
            let r = s / e * Math.PI * 2,
                i = (s + 1) / e * Math.PI * 2,
                n = (r + i) / 2,
                o = [Math.cos(r) * a, Math.sin(r) * a],
                d = [Math.cos(i) * a, Math.sin(i) * a],
                c = [Math.cos(n) * (a + t), Math.sin(n) * (a + t)];
            l += `${0===s?`M${en(o[0])} ${en(o[1])}`:""} Q${en(c[0])} ${en(c[1])} ${en(d[0])} ${en(d[1])}`
        }
        return `${l} Z`
    }
    let ec = [{
            d: "M0 -9 A9 9 0 1 1 0 9 A9 9 0 1 1 0 -9 Z",
            layer: 0
        }, ...Array.from({
            length: 8
        }, (e, a) => ({
            d: eo(45 * a, 11, 38, 11),
            layer: 1
        })), ...Array.from({
            length: 8
        }, (e, a) => ({
            d: eo(45 * a + 22.5, 14, 30, 6),
            layer: 1
        })), {
            d: "M0 -44 A44 44 0 1 1 0 44 A44 44 0 1 1 0 -44 Z",
            layer: 2
        }, ...Array.from({
            length: 16
        }, (e, a) => ({
            d: eo(22.5 * a, 46, 66, 7),
            layer: 3
        })), {
            d: ed(24, 70, 9),
            layer: 4
        }, {
            d: ed(32, 84, 6),
            layer: 5
        }],
        eu = Array.from({
            length: 32
        }, (e, a) => {
            let t = a / 32 * Math.PI * 2 + Math.PI / 32;
            return {
                x: en(95 * Math.cos(t)),
                y: en(95 * Math.sin(t))
            }
        });

    function eh(e) {
        let {
            colours: a,
            className: l = "",
            style: s
        } = e;
        return (0, t.jsxs)("svg", {
            className: `${U.default.rangoli} ${l}`,
            viewBox: "-100 -100 200 200",
            "aria-hidden": "true",
            focusable: "false",
            style: s,
            children: [ec.map((e, l) => (0, t.jsx)("path", {
                d: e.d,
                pathLength: 1,
                fill: "none",
                stroke: a[e.layer],
                strokeWidth: 0 === e.layer ? 2.4 : 1.4,
                strokeLinejoin: "round",
                style: {
                    "--layer": e.layer
                }
            }, l)), eu.map((e, l) => (0, t.jsx)("circle", {
                cx: e.x,
                cy: e.y,
                r: 1.9,
                fill: a[5],
                className: U.default.rangoliDot,
                style: {
                    "--layer": 6
                }
            }, `d${l}`))]
        })
    }

    function em(e) {
        let {
            colour: a,
            className: l = ""
        } = e;
        return (0, t.jsx)("svg", {
            className: `${U.default.archLine} ${l}`,
            viewBox: "-2 -2 104 124",
            preserveAspectRatio: "none",
            "aria-hidden": "true",
            focusable: "false",
            children: (0, t.jsx)("path", {
                d: (0, J.g)(100, 120, !1),
                fill: "none",
                stroke: a,
                strokeWidth: "0.8",
                vectorEffect: "non-scaling-stroke"
            })
        })
    }
    let ep = (0, J.M)(9),
        ef = () => 1e3 * Math.floor(Date.now() / 1e3);

    function eg(e) {
        let a, {
                event: s,
                at: r
            } = e,
            n = (0, i.r)("inviteThemes.devi-darbar.countdown"),
            o = (0, i.r)("invite.countdown"),
            d = (0, w.f)(),
            c = (0, ei.f)(),
            {
                theme: u,
                tones: h,
                display: m
            } = X(),
            p = (0, l.useRef)(null),
            f = (0, W.d)(p),
            [g, y] = (0, W.i)(.2),
            v = (0, l.useCallback)(e => {
                let a = window.setInterval(e, f ? 1e3 : 3e4);
                return () => window.clearInterval(a)
            }, [f]),
            x = (0, l.useSyncExternalStore)(v, ef, () => null),
            j = null !== x && x >= r.getTime(),
            b = null === x || j ? null : {
                days: Math.floor((a = Math.max(0, Math.floor((r.getTime() - x) / 1e3))) / 86400),
                hours: Math.floor(a % 86400 / 3600),
                minutes: Math.floor(a % 3600 / 60),
                seconds: a % 60
            },
            N = [{
                key: "days",
                value: null == b ? void 0 : b.days,
                label: o("days", {
                    count: (null == b ? void 0 : b.days) ?? 0
                })
            }, {
                key: "hours",
                value: null == b ? void 0 : b.hours,
                label: o("hours", {
                    count: (null == b ? void 0 : b.hours) ?? 0
                })
            }, {
                key: "minutes",
                value: null == b ? void 0 : b.minutes,
                label: o("minutes", {
                    count: (null == b ? void 0 : b.minutes) ?? 0
                })
            }, {
                key: "seconds",
                value: null == b ? void 0 : b.seconds,
                label: o("seconds", {
                    count: (null == b ? void 0 : b.seconds) ?? 0
                })
            }],
            k = j ? -1 : ((null == b ? void 0 : b.seconds) ?? 0) % 9,
            _ = s.date ? d.date(s.date, {
                weekday: "long",
                day: "numeric",
                month: "long"
            }) : "",
            F = d.eventTimeOf(s, {
                viewerTimezone: c
            });
        return (0, t.jsxs)("section", {
            ref: p,
            id: "devi-countdown",
            "aria-labelledby": "devi-countdown-title",
            className: U.default.countdown,
            "data-paused": f ? "false" : "true",
            style: {
                background: h.night,
                "--lamp": h.lamplight,
                "--plate-hi": h.goldLight,
                "--plate-lo": h.goldDeep,
                "--plate-ink": h.burgundyDeep
            },
            children: [(0, t.jsxs)("div", {
                className: U.default.countdownArt,
                "aria-hidden": "true",
                children: [(0, t.jsx)(C.O, {
                    portrait: "courtyard-p",
                    landscape: "courtyard-w",
                    className: U.default.countdownImg
                }), (0, t.jsx)("span", {
                    className: U.default.countdownShade,
                    style: {
                        background: `linear-gradient(180deg, ${(0,$.L)(h.night,.92)} 0%, ${(0,$.L)(h.night,.6)} 45%, ${(0,$.L)(h.night,.25)} 75%, ${(0,$.L)(h.night,.6)} 100%)`
                    }
                })]
            }), (0, t.jsxs)("div", {
                ref: g,
                "data-reveal": y,
                className: U.default.countdownCopy,
                children: [(0, t.jsx)("p", {
                    className: `${U.default.eyebrow} rv`,
                    style: {
                        color: h.goldLight
                    },
                    children: n(j ? "doneEyebrow" : "eyebrow")
                }), (0, t.jsx)("h2", {
                    id: "devi-countdown-title",
                    className: `${U.default.chapterHeading} rv`,
                    style: {
                        fontFamily: m,
                        fontWeight: u.headingWeight ?? 400,
                        color: h.light
                    },
                    children: n(j ? "doneTitle" : "title")
                }), (0, t.jsx)("p", {
                    className: `${U.default.countdownLine} rv`,
                    style: {
                        color: (0, $.L)(h.light, .86)
                    },
                    children: j ? n("doneLine") : n("toEvent", {
                        event: s.name
                    })
                }), (0, t.jsxs)("div", {
                    className: `${U.default.lampsArch} rv`,
                    "data-state": j ? "after" : "before",
                    "aria-hidden": "true",
                    children: [(0, t.jsx)(J.c, {
                        gold: h.goldLight,
                        deep: h.goldDeep,
                        className: U.default.lampArch
                    }), ep.map((e, a) => (0, t.jsxs)("span", {
                        className: U.default.archLamp,
                        "data-on": a === k ? "true" : "false",
                        style: {
                            left: `${e.x}%`,
                            top: `${e.y}%`,
                            "--i": a
                        },
                        children: [(0, t.jsx)("span", {
                            className: U.default.lampFlameGlow
                        }), (0, t.jsx)("img", {
                            src: (0, C._)("diya"),
                            width: C.J.diya.w,
                            height: C.J.diya.h,
                            alt: "",
                            loading: "lazy",
                            decoding: "async"
                        })]
                    }, a))]
                }), j ? null : (0, t.jsx)("div", {
                    className: `${U.default.plates} rv`,
                    role: "timer",
                    "aria-live": "off",
                    "aria-label": n("label", {
                        event: s.name
                    }),
                    children: N.map(e => (0, t.jsxs)("div", {
                        className: U.default.plate,
                        children: [(0, t.jsx)("span", {
                            className: U.default.plateNumber,
                            style: {
                                fontFamily: m
                            },
                            children: void 0 === e.value ? "––" : String(e.value).padStart(2, "0")
                        }), (0, t.jsx)("span", {
                            className: U.default.plateLabel,
                            children: e.label
                        })]
                    }, e.key))
                }), _ || F ? (0, t.jsxs)("p", {
                    className: `${U.default.countdownDate} rv`,
                    style: {
                        color: h.goldLight
                    },
                    children: [_, _ && F ? " · " : "", F ? (0, t.jsx)("span", {
                        className: U.default.nowrap,
                        children: F
                    }) : null]
                }) : null]
            })]
        })
    }
    var ey = e.i(431817),
        ev = e.i(735388),
        ex = e.i(736642),
        ej = e.i(174241),
        eb = e.i(230715);
    let ew = ["res.cloudinary.com", "images.unsplash.com"];

    function eN(e) {
        let {
            photo: a,
            alt: l,
            sizes: s,
            className: r
        } = e;
        return ! function(e) {
            if (e.startsWith("/") && !e.startsWith("//")) return !0;
            try {
                return ew.includes(new URL(e).hostname)
            } catch {
                return !1
            }
        }(a.url) ? (0, t.jsx)("img", {
            src: a.url,
            alt: l,
            loading: "lazy",
            decoding: "async",
            className: r,
            draggable: !1
        }) : (0, t.jsx)(ey.default, {
            src: a.url,
            alt: l,
            fill: !0,
            sizes: s,
            className: r,
            draggable: !1
        })
    }
    let ek = ["lg", "sm", "md", "sm", "lg"];

    function e_(e) {
        let {
            photos: a,
            emptyPreview: s = !1
        } = e, r = (0, i.r)("inviteThemes.devi-darbar.gallery"), n = (0, i.r)("invite.gallery"), {
            tones: o,
            display: d
        } = X(), [c, u] = (0, W.i)(.12), h = (0, l.useRef)(null), m = (0, W.d)(h, "600px 0px"), p = (0, l.useRef)(null), [f, g] = (0, l.useState)(0), y = (0, l.useRef)(null), v = a.length, x = (0, l.useCallback)(e => g(a => (a + e + v) % v), [v]), j = a[f], b = v > 1 ? [a[(f + 1) % v], a[(f - 1 + v) % v]] : [], w = s && 0 === v ? 3 : 0;
        return (0, t.jsxs)("section", {
            ref: h,
            id: "devi-gallery",
            "aria-labelledby": "devi-gallery-title",
            className: U.default.gallery,
            style: {
                background: `linear-gradient(180deg, ${o.burgundyDeep} 0, ${(0,$.L)(o.burgundyDeep,0)} 200px), ${(0,J.H)((0,$.L)(o.goldLight,.07))}, radial-gradient(120% 70% at 50% 40%, ${o.burgundy} 0%, ${o.burgundyDeep} 100%)`,
                "--lamp": o.lamplight,
                ...m ? {
                    "--band": (0, C.L)("gota-band")
                } : {}
            },
            children: [(0, t.jsx)("span", {
                className: U.default.bandTop,
                "aria-hidden": "true"
            }), (0, t.jsx)(ee, {
                id: "devi-gallery-title",
                eyebrow: r("eyebrow"),
                title: r("title"),
                light: !0,
                children: v > 1 ? (0, t.jsx)("p", {
                    className: `${U.default.chapterSub} ${U.default.swipeHint} rv`,
                    style: {
                        color: (0, $.L)(o.light, .7)
                    },
                    children: r("swipe")
                }) : null
            }), (0, t.jsx)("div", {
                ref: c,
                "data-reveal": u,
                className: U.default.wall,
                children: (0, t.jsxs)("ul", {
                    className: U.default.wallTrack,
                    children: [a.map((e, a) => (0, t.jsxs)("li", {
                        className: U.default.wallItem,
                        "data-size": ek[a % ek.length],
                        style: {
                            "--i": a
                        },
                        children: [(0, t.jsxs)("button", {
                            type: "button",
                            className: U.default.alcoveButton,
                            onClick: () => {
                                var e;
                                g(a), null == (e = p.current) || e.showModal()
                            },
                            "aria-label": e.caption ? `${e.caption} — ${r("open",{number:a+1,total:v})}` : r("open", {
                                number: a + 1,
                                total: v
                            }),
                            children: [(0, t.jsx)("span", {
                                className: U.default.alcovePhoto,
                                children: (0, t.jsx)(eN, {
                                    photo: e,
                                    alt: e.caption || n("photoAlt"),
                                    sizes: "(min-width: 900px) 28vw, 70vw",
                                    className: U.default.alcoveImg
                                })
                            }), (0, t.jsx)("img", {
                                src: (0, C._)("alcove"),
                                width: C.J.alcove.w,
                                height: C.J.alcove.h,
                                alt: "",
                                "aria-hidden": "true",
                                loading: "lazy",
                                decoding: "async",
                                draggable: !1,
                                className: U.default.alcoveFrame
                            }), (0, t.jsx)("span", {
                                className: U.default.alcoveLamp,
                                "aria-hidden": "true"
                            })]
                        }), e.caption ? (0, t.jsx)("p", {
                            className: U.default.alcoveCaption,
                            style: {
                                fontFamily: d,
                                color: (0, $.L)(o.light, .86)
                            },
                            children: e.caption
                        }) : null]
                    }, e.publicId || a)), Array.from({
                        length: w
                    }, (e, a) => (0, t.jsx)("li", {
                        className: U.default.wallItem,
                        "data-size": ek[a],
                        "data-empty": "true",
                        style: {
                            "--i": a
                        },
                        children: (0, t.jsxs)("span", {
                            className: U.default.alcoveButton,
                            children: [(0, t.jsx)("span", {
                                className: U.default.alcovePhoto,
                                style: {
                                    background: `radial-gradient(80% 60% at 50% 70%, ${(0,$.L)(o.lamplight,.28)}, ${o.burgundyDeep})`
                                },
                                children: 1 === a ? (0, t.jsxs)("span", {
                                    className: U.default.emptyHint,
                                    style: {
                                        color: o.goldLight
                                    },
                                    children: [(0, t.jsx)(ej.f, {
                                        "aria-hidden": "true"
                                    }), r("emptyHint")]
                                }) : null
                            }), (0, t.jsx)("img", {
                                src: (0, C._)("alcove"),
                                width: C.J.alcove.w,
                                height: C.J.alcove.h,
                                alt: "",
                                "aria-hidden": "true",
                                loading: "lazy",
                                decoding: "async",
                                draggable: !1,
                                className: U.default.alcoveFrame
                            }), (0, t.jsx)("span", {
                                className: U.default.alcoveLamp,
                                "aria-hidden": "true"
                            })]
                        })
                    }, `empty-${a}`))]
                })
            }), (0, t.jsxs)("dialog", {
                ref: p,
                className: U.default.viewer,
                "aria-label": n("viewer"),
                style: {
                    "--scrim": (0, $.L)(o.nightDeep, .96),
                    "--chrome": o.light,
                    "--frame-line": (0, $.L)(o.goldLight, .55)
                },
                onClick: e => {
                    e.target === e.currentTarget && e.currentTarget.close()
                },
                onKeyDown: e => {
                    "ArrowRight" === e.key ? x(1) : "ArrowLeft" === e.key && x(-1)
                },
                onPointerDown: e => {
                    y.current = {
                        x: e.clientX,
                        y: e.clientY
                    }
                },
                onPointerCancel: () => {
                    y.current = null
                },
                onPointerUp: e => {
                    let a = y.current;
                    if (y.current = null, !a || v < 2) return;
                    let t = e.clientX - a.x;
                    Math.abs(t) > 48 && Math.abs(t) > Math.abs(e.clientY - a.y) && x(t < 0 ? 1 : -1)
                },
                children: [j ? (0, t.jsxs)("figure", {
                    className: U.default.viewerFigure,
                    children: [(0, t.jsx)("div", {
                        className: U.default.viewerFrame,
                        children: (0, t.jsx)(eN, {
                            photo: j,
                            alt: j.caption || n("photoAlt"),
                            sizes: "100vw",
                            className: U.default.viewerImg
                        })
                    }, j.publicId || f), (0, t.jsxs)("figcaption", {
                        className: U.default.viewerCaption,
                        children: [j.caption ? (0, t.jsx)("span", {
                            style: {
                                fontFamily: d
                            },
                            children: j.caption
                        }) : null, (0, t.jsx)("span", {
                            className: U.default.viewerCount,
                            "aria-live": "polite",
                            children: r("counter", {
                                number: f + 1,
                                total: v
                            })
                        })]
                    }), (0, t.jsx)("div", {
                        className: U.default.viewerPreload,
                        "aria-hidden": "true",
                        children: b.map((e, a) => (0, t.jsx)(eN, {
                            photo: e,
                            alt: "",
                            sizes: "100vw",
                            className: U.default.viewerImg
                        }, `${e.publicId}-${a}`))
                    })]
                }) : null, (0, t.jsx)("button", {
                    type: "button",
                    className: `${U.default.viewerButton} ${U.default.viewerClose}`,
                    "aria-label": n("close"),
                    onClick: () => {
                        var e;
                        return null == (e = p.current) ? void 0 : e.close()
                    },
                    children: (0, t.jsx)(eb.X, {
                        "aria-hidden": "true"
                    })
                }), v > 1 ? (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)("button", {
                        type: "button",
                        className: `${U.default.viewerButton} ${U.default.viewerPrev}`,
                        "aria-label": n("previous"),
                        onClick: () => x(-1),
                        children: (0, t.jsx)(ev.f, {
                            "aria-hidden": "true"
                        })
                    }), (0, t.jsx)("button", {
                        type: "button",
                        className: `${U.default.viewerButton} ${U.default.viewerNext}`,
                        "aria-label": n("next"),
                        onClick: () => x(1),
                        children: (0, t.jsx)(ex.f, {
                            "aria-hidden": "true"
                        })
                    })]
                }) : null]
            })]
        })
    }
    var e$ = e.i(372299),
        eW = e.i(366471);

    function eC(e) {
        let {
            invocation: a,
            one: s,
            two: r,
            dateLabel: n,
            placeLabel: o,
            scheduleTarget: d,
            rsvpTarget: c,
            play: u,
            greet: h = !1
        } = e, m = (0, i.r)("inviteThemes.devi-darbar.hero"), {
            theme: p,
            tones: f,
            reduce: g,
            display: y
        } = X(), v = (0, l.useRef)(null);
        (0, W.I)(v, !g);
        let x = Math.min(1, 8 / Math.max(s.length, r.length, 1));
        return (0, t.jsxs)("section", {
            ref: v,
            id: "devi-top",
            "aria-labelledby": "devi-hero-title",
            className: U.default.hero,
            "data-play": u ? "true" : "false",
            style: {
                "--name-scale": x,
                "--toran": (0, C.L)("toran"),
                "--glow": (0, $.L)(f.lamplight, .75),
                background: f.burgundyDeep
            },
            children: [(0, t.jsxs)("div", {
                className: U.default.heroArt,
                "aria-hidden": "true",
                children: [(0, t.jsxs)("div", {
                    className: U.default.heroSanctum,
                    children: [(0, t.jsx)(C.O, {
                        portrait: "sanctum-p",
                        landscape: "sanctum-w",
                        priority: !0,
                        className: U.default.heroImg
                    }), (0, t.jsx)("span", {
                        className: U.default.aureole
                    }), (0, t.jsx)("span", {
                        className: U.default.beams
                    })]
                }), (0, t.jsx)("span", {
                    className: U.default.heroScrim,
                    style: {
                        background: `linear-gradient(180deg, ${(0,$.L)(f.burgundyDeep,.9)} 0%, ${(0,$.L)(f.burgundyDeep,.6)} 24%, transparent 40%, transparent 72%, ${(0,$.L)(f.burgundyDeep,.55)} 88%, ${f.burgundyDeep} 100%)`
                    }
                }), (0, t.jsx)("div", {
                    className: `${U.default.pillar} ${U.default.pillarLeft}`,
                    children: (0, t.jsx)("img", {
                        src: (0, C._)("pillar"),
                        width: C.J.pillar.w,
                        height: C.J.pillar.h,
                        alt: "",
                        decoding: "async",
                        draggable: !1
                    })
                }), (0, t.jsx)("div", {
                    className: `${U.default.pillar} ${U.default.pillarRight}`,
                    children: (0, t.jsx)("img", {
                        src: (0, C._)("pillar"),
                        width: C.J.pillar.w,
                        height: C.J.pillar.h,
                        alt: "",
                        decoding: "async",
                        draggable: !1
                    })
                }), (0, t.jsx)("span", {
                    className: U.default.toran
                }), (0, t.jsx)(G, {
                    count: 8,
                    className: U.default.heroPetals
                })]
            }), (0, t.jsxs)("div", {
                className: U.default.heroCopy,
                children: [(0, t.jsx)("p", {
                    className: `${U.default.heroInvocation} ${U.default.rise}`,
                    lang: "hi",
                    style: {
                        fontFamily: Y,
                        color: f.goldLight
                    },
                    children: a
                }), h ? (0, t.jsx)(eW.GuestGreeting, {
                    className: `${U.default.heroGuest} ${U.default.rise}`,
                    style: {
                        fontFamily: y,
                        color: f.light
                    }
                }) : null, (0, t.jsx)("p", {
                    className: `${U.default.heroInvites} ${U.default.rise}`,
                    style: {
                        color: (0, $.L)(f.light, .82)
                    },
                    children: m("eyebrow")
                }), (0, t.jsxs)("h1", {
                    id: "devi-hero-title",
                    className: `${U.default.heroNames} ${U.default.rise}`,
                    style: {
                        fontFamily: y,
                        fontWeight: p.headingWeight ?? 400,
                        color: f.light
                    },
                    children: [(0, t.jsx)("span", {
                        "data-couple-name": !0,
                        children: s
                    }), (0, t.jsx)("span", {
                        className: U.default.heroWeds,
                        style: {
                            color: f.goldLight
                        },
                        children: m("weds")
                    }), (0, t.jsx)("span", {
                        "data-couple-name": !0,
                        children: r
                    })]
                }), n || o ? (0, t.jsxs)("p", {
                    className: `${U.default.heroWhen} ${U.default.rise}`,
                    style: {
                        color: f.goldLight
                    },
                    children: [n ? (0, t.jsx)("span", {
                        children: n
                    }) : null, n && o ? (0, t.jsx)("span", {
                        "aria-hidden": "true",
                        className: U.default.dot,
                        children: "✦"
                    }) : null, o ? (0, t.jsx)("span", {
                        children: o
                    }) : null]
                }) : null]
            }), d || c ? (0, t.jsxs)("div", {
                className: `${U.default.heroActions} ${U.default.rise}`,
                children: [d ? (0, t.jsx)(el, {
                    onClick: () => es(d, g),
                    variant: "outline",
                    light: !0,
                    children: m("viewCelebrations")
                }) : null, c ? (0, t.jsx)(el, {
                    onClick: () => es(c, g),
                    children: m("rsvp")
                }) : null]
            }) : null, (0, t.jsx)("span", {
                className: U.default.scrollCue,
                "aria-hidden": "true",
                "data-export-hide": !0,
                style: {
                    color: f.goldLight
                },
                children: (0, t.jsx)(e$.f, {})
            })]
        })
    }
    var eF = e.i(477201),
        eL = e.i(764351),
        eS = e.i(48407),
        eT = e.i(410739);

    function eO(e) {
        var a, l, s, r;
        let {
            verse: o,
            couple: d,
            family: c,
            ceremony: u,
            one: h,
            two: m
        } = e, p = (0, i.r)("inviteThemes.devi-darbar"), f = (0, i.r)("family"), g = (0, w.f)(), y = (0, ei.f)(), v = (0, eT.L)(), {
            theme: x,
            tones: j,
            display: b
        } = X(), [N, k] = (0, W.i)(.12), [_, F] = (0, W.i)(.05), L = "none" === o ? null : B.P[o], S = (0, n.M)(c), T = (0, eS.u)(c, d), O = (null == T ? void 0 : T.filter(e => e.grandparents.length > 0)) ?? [], R = T ? (null == c || null == (a = c.blessings) ? void 0 : a.trim()) ?? "" : "", q = (null == (l = d.headline) ? void 0 : l.trim()) || p("invitation.hostsDefault"), M = (null == (s = d.shortMessage) ? void 0 : s.trim()) || p("invitation.requestDefault"), E = (null == u ? void 0 : u.date) ? g.date(u.date, {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        }) : "", D = u ? g.eventTimeOf(u, {
            viewerTimezone: y
        }) : "", H = u ? (0, eF.A)(u) : "", A = (null == (r = d.coverPhotoUrl) ? void 0 : r.trim()) ?? "", P = Math.min(1, 9 / Math.max(h.length, m.length, 1)), I = {
            fontFamily: b,
            fontWeight: x.headingWeight ?? 400,
            color: j.sindoor
        };
        return (0, t.jsx)("section", {
            ref: _,
            "data-arrived": F,
            id: "devi-invitation",
            "aria-labelledby": "devi-invitation-title",
            className: U.default.blessing,
            style: {
                "--paper-tex": (0, C.L)("paper-texture"),
                "--arch-mask": J.s,
                "--ground": j.burgundyDeep
            },
            children: (0, t.jsxs)("div", {
                className: U.default.paperRise,
                children: [(0, t.jsx)("svg", {
                    className: U.default.archEdge,
                    viewBox: "0 0 100 120",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    focusable: "false",
                    children: (0, t.jsx)("path", {
                        d: (0, J.g)(100, 120, !1),
                        fill: "none",
                        stroke: j.gold,
                        strokeWidth: "1.5"
                    })
                }), (0, t.jsx)("div", {
                    className: U.default.blessingPaper,
                    style: {
                        background: j.ivory,
                        color: j.ink
                    },
                    children: (0, t.jsxs)("div", {
                        ref: N,
                        "data-reveal": k,
                        className: U.default.blessingInner,
                        children: [(0, t.jsxs)("figure", {
                            className: `${U.default.altarNiche} rv`,
                            children: [(0, t.jsx)("span", {
                                className: U.default.altarGlow,
                                style: {
                                    background: `radial-gradient(closest-side, ${(0,$.L)(j.lamplight,.85)}, ${(0,$.L)(j.marigold,.35)} 55%, transparent 100%)`
                                },
                                "aria-hidden": "true"
                            }), (0, t.jsx)("span", {
                                className: U.default.altarWindow,
                                style: {
                                    background: j.burgundyDeep
                                },
                                children: (0, t.jsx)("img", {
                                    src: (0, C._)("mata-rani"),
                                    width: C.J["mata-rani"].w,
                                    height: C.J["mata-rani"].h,
                                    alt: p("invitation.devAlt"),
                                    loading: "lazy",
                                    decoding: "async",
                                    className: U.default.altarPhoto
                                })
                            }), (0, t.jsx)(em, {
                                colour: j.gold,
                                className: U.default.altarLine
                            })]
                        }), (0, t.jsxs)("div", {
                            className: U.default.blessingText,
                            children: [(0, t.jsx)("h2", {
                                id: "devi-invitation-title",
                                className: `${U.default.eyebrow} rv`,
                                style: {
                                    color: j.goldDeep,
                                    ...v
                                },
                                children: p("invitation.eyebrow")
                            }), L ? (0, t.jsx)("blockquote", {
                                className: `${U.default.verse} rv`,
                                lang: "sa",
                                cite: "https://sanskritdocuments.org/doc_devii/durga700.html",
                                children: (0, t.jsxs)("p", {
                                    className: U.default.verseLines,
                                    style: {
                                        fontFamily: Z,
                                        color: j.sindoor
                                    },
                                    children: [(0, t.jsx)("span", {
                                        children: L.lines[0]
                                    }), (0, t.jsx)("span", {
                                        children: L.lines[1]
                                    })]
                                })
                            }) : null, L ? (0, t.jsx)(et, {
                                colour: j.gold,
                                className: "rv"
                            }) : null, (0, t.jsx)("p", {
                                className: `${U.default.invHosts} rv`,
                                style: {
                                    fontFamily: b,
                                    color: j.ink
                                },
                                children: q
                            }), (0, t.jsx)("p", {
                                className: `${U.default.invRequest} rv`,
                                style: {
                                    color: j.muted
                                },
                                children: M
                            }), A ? (0, t.jsx)("span", {
                                className: `${U.default.coverOval} rv`,
                                style: {
                                    borderColor: j.gold,
                                    boxShadow: `0 0 0 4px ${j.paper}, 0 0 0 5px ${(0,$.L)(j.gold,.6)}`
                                },
                                children: ! function(e) {
                                    if (e.startsWith("/") && !e.startsWith("//")) return !0;
                                    try {
                                        return ["res.cloudinary.com", "images.unsplash.com"].includes(new URL(e).hostname)
                                    } catch {
                                        return !1
                                    }
                                }(A) ? (0, t.jsx)("img", {
                                    src: A,
                                    alt: p("invitation.coverAlt", {
                                        one: h,
                                        two: m
                                    }),
                                    loading: "lazy",
                                    decoding: "async",
                                    className: U.default.altarPhoto
                                }) : (0, t.jsx)(ey.default, {
                                    src: A,
                                    alt: p("invitation.coverAlt", {
                                        one: h,
                                        two: m
                                    }),
                                    fill: !0,
                                    sizes: "200px",
                                    className: U.default.altarPhoto
                                })
                            }) : null, (0, t.jsxs)("div", {
                                className: U.default.invCouple,
                                style: {
                                    "--name-scale": P
                                },
                                children: [(0, t.jsx)(eR, {
                                    label: d.partnerOneLabel,
                                    name: h,
                                    nameStyle: I,
                                    view: null == T ? void 0 : T[0]
                                }), (0, t.jsx)("p", {
                                    className: `${U.default.invAmp} rv`,
                                    style: {
                                        fontFamily: b,
                                        color: j.gold
                                    },
                                    "aria-hidden": "true",
                                    children: p("hero.weds")
                                }), (0, t.jsx)(eR, {
                                    label: d.partnerTwoLabel,
                                    name: m,
                                    nameStyle: I,
                                    view: null == T ? void 0 : T[1]
                                })]
                            }), E || H ? (0, t.jsxs)("div", {
                                className: `${U.default.invWhen} rv`,
                                children: [E ? (0, t.jsx)("p", {
                                    className: U.default.invDate,
                                    style: {
                                        fontFamily: b,
                                        color: j.ink
                                    },
                                    children: p("invitation.onDate", {
                                        date: E
                                    })
                                }) : null, D ? (0, t.jsx)("p", {
                                    className: U.default.invTime,
                                    style: {
                                        color: j.muted
                                    },
                                    children: D
                                }) : null, H ? (0, t.jsx)("p", {
                                    className: U.default.invVenue,
                                    style: {
                                        color: j.ink
                                    },
                                    children: p("invitation.atVenue", {
                                        venue: H
                                    })
                                }) : null]
                            }) : null, R || O.length > 0 ? (0, t.jsxs)("div", {
                                className: `${U.default.elders} rv`,
                                style: {
                                    borderColor: (0, $.L)(j.gold, .45),
                                    background: (0, $.L)(j.paper, .7)
                                },
                                children: [(0, t.jsx)("p", {
                                    className: U.default.eldersTitle,
                                    style: {
                                        color: j.goldDeep,
                                        ...v
                                    },
                                    children: f("blessings")
                                }), R ? (0, t.jsx)("p", {
                                    className: U.default.eldersLine,
                                    style: {
                                        fontFamily: b,
                                        color: j.ink
                                    },
                                    children: R
                                }) : null, O.map(e => (0, t.jsxs)("p", {
                                    className: U.default.eldersSmall,
                                    style: {
                                        color: j.ink
                                    },
                                    children: [(0, t.jsx)("span", {
                                        style: {
                                            color: j.muted
                                        },
                                        children: (0, eT.w)(f, e.relation)
                                    }), " ", (0, t.jsx)(eT.h, {
                                        people: e.grandparents
                                    })]
                                }, e.key))]
                            }) : null, S && c ? (0, t.jsx)("div", {
                                className: `${U.default.familyTree} rv`,
                                children: (0, t.jsx)(eL.f, {
                                    family: c,
                                    couple: d,
                                    theme: x,
                                    variant: "panel",
                                    showHeading: !1
                                })
                            }) : null]
                        })]
                    })
                })]
            })
        })
    }

    function eR(e) {
        let {
            label: a,
            name: l,
            nameStyle: s,
            view: r
        } = e, {
            tones: i
        } = X();
        return (0, t.jsxs)("div", {
            className: `${U.default.invPerson} rv`,
            children: [(null == a ? void 0 : a.trim()) ? (0, t.jsx)("p", {
                className: U.default.invLabel,
                style: {
                    color: i.goldDeep
                },
                children: a
            }) : null, (0, t.jsx)("h3", {
                className: U.default.invName,
                style: s,
                children: l
            }), (0, t.jsx)(eS.O, {
                view: r,
                className: U.default.invParents,
                style: {
                    color: i.muted
                }
            })]
        })
    }
    var eq = e.i(559112),
        eM = e.i(580791),
        eE = e.i(354695),
        eD = e.i(543126),
        eH = e.i(206193),
        eA = e.i(161060),
        eP = e.i(940722),
        eI = e.i(820338),
        eB = e.i(875022);
    let eU = [{
            value: "YES",
            key: "yes"
        }, {
            value: "MAYBE",
            key: "maybe"
        }, {
            value: "NO",
            key: "no"
        }],
        ez = ["none", "vegetarian", "jain", "vegan", "glutenFree"];

    function eG(e) {
        var a;
        let {
            slug: s,
            events: r,
            settings: n
        } = e, o = (0, i.r)("inviteThemes.devi-darbar.rsvp"), d = (0, w.f)(), {
            theme: c,
            tones: u,
            display: p,
            reduce: f
        } = X(), g = (0, h.Q)(), y = (0, m.usePartyGuest)(), [v, x] = (0, W.i)(.15), j = (0, l.useRef)(null), b = (0, W.d)(j, "600px 0px"), [N, k] = (0, l.useState)([]), _ = 1 === r.length ? r[0] : null, F = (0, eB.o)(n), {
            state: L,
            set: S,
            toggleEvent: T,
            maxGuests: O,
            attending: R,
            submitting: q,
            error: M,
            done: E,
            submit: D
        } = (0, eP.s)({
            slug: s,
            rsvpSettings: n,
            isPreview: g,
            initialGuestName: (null == (a = y.guest) ? void 0 : a.displayName) ?? "",
            buildExtraPayload: e => {
                let a = "YES" === e.attendanceStatus || "MAYBE" === e.attendanceStatus,
                    t = [...N, e.mealPreference.trim()].filter(Boolean).join("; ");
                return {
                    mealPreference: a ? t : "",
                    attendingEvents: a ? _ ? [_.name] : e.attendingEvents : [],
                    ...y.buildPayload(e.attendanceStatus)
                }
            },
            messages: {
                name: o("errorName"),
                status: o("errorStatus"),
                phone: o("errorPhone"),
                preview: o("errorPreview"),
                submit: o("errorSubmit")
            }
        }), H = (0, l.useRef)(null);
        (0, l.useEffect)(() => {
            if (!E) return;
            let e = H.current;
            e && e.getBoundingClientRect().top < 0 && e.scrollIntoView({
                block: "start",
                behavior: f ? "auto" : "smooth"
            })
        }, [E, f]);
        let A = n.deadline ? d.date(n.deadline, {
                day: "numeric",
                month: "long",
                year: "numeric"
            }) : "",
            P = {
                borderColor: (0, $.L)(u.gold, .55),
                background: (0, $.L)(u.ivory, .9),
                color: u.ink
            },
            I = y.isParty ? y.partyAttending : L.guestCount,
            B = y.isParty ? y.invitedCount : O,
            z = e => {
                let a = Math.max(1, Math.min(B, e));
                y.isParty ? y.setPartyAttending(a) : S("guestCount", a)
            },
            G = R && B > 1;
        return (0, t.jsxs)("section", {
            ref: j,
            id: "devi-rsvp",
            "aria-labelledby": "devi-rsvp-title",
            className: U.default.rsvp,
            style: {
                background: `linear-gradient(180deg, ${u.twilight} 0, ${(0,$.L)(u.twilight,0)} 220px), radial-gradient(110% 70% at 50% 30%, ${u.twilight} 0%, ${u.night} 60%, ${u.nightDeep} 100%)`,
                ...b ? {
                    "--band": (0, C.L)("gota-band")
                } : {},
                "--lamp": u.lamplight
            },
            children: [F ? (0, t.jsx)("h2", {
                id: "devi-rsvp-title",
                className: "sr-only",
                children: o("title")
            }) : (0, t.jsx)(ee, {
                id: "devi-rsvp-title",
                eyebrow: o("eyebrow"),
                title: o("title"),
                light: !0,
                children: (0, t.jsx)("p", {
                    className: `${U.default.chapterSub} rv`,
                    style: {
                        color: (0, $.L)(u.light, .8)
                    },
                    children: A ? o("by", {
                        date: A
                    }) : o("subtitle")
                })
            }), (0, t.jsxs)("div", {
                ref: v,
                "data-reveal": x,
                className: U.default.rsvpStage,
                children: [(0, t.jsx)("img", {
                    src: (0, C._)("samai"),
                    width: C.J.samai.w,
                    height: C.J.samai.h,
                    alt: "",
                    "aria-hidden": "true",
                    loading: "lazy",
                    decoding: "async",
                    className: `${U.default.samai} ${U.default.samaiLeft}`
                }), (0, t.jsx)("img", {
                    src: (0, C._)("samai"),
                    width: C.J.samai.w,
                    height: C.J.samai.h,
                    alt: "",
                    "aria-hidden": "true",
                    loading: "lazy",
                    decoding: "async",
                    className: `${U.default.samai} ${U.default.samaiRight}`
                }), (0, t.jsx)("div", {
                    ref: H,
                    className: `${U.default.rsvpCard} rv`,
                    style: {
                        background: u.paper,
                        color: u.ink,
                        borderColor: (0, $.L)(u.gold, .6),
                        "--accent": u.sindoor,
                        "--field-focus": u.sindoor
                    },
                    children: F ? (0, t.jsx)(eI.f, {
                        settings: n,
                        theme: c,
                        bare: !0,
                        tones: {
                            text: u.ink,
                            muted: u.muted,
                            accent: u.sindoor,
                            line: u.gold
                        }
                    }) : E ? (0, t.jsxs)("div", {
                        className: U.default.rsvpDone,
                        role: "status",
                        "aria-live": "polite",
                        children: [(0, t.jsxs)("span", {
                            className: U.default.doneLamp,
                            "aria-hidden": "true",
                            children: [(0, t.jsx)("span", {
                                className: U.default.lampFlameGlow
                            }), (0, t.jsx)("img", {
                                src: (0, C._)("diya"),
                                width: C.J.diya.w,
                                height: C.J.diya.h,
                                alt: "",
                                decoding: "async"
                            })]
                        }), (0, t.jsx)("h3", {
                            style: {
                                fontFamily: p,
                                fontWeight: c.headingWeight ?? 400,
                                color: u.sindoor
                            },
                            children: o("doneTitle")
                        }), (0, t.jsx)("p", {
                            style: {
                                color: u.muted
                            },
                            children: "NO" === L.attendanceStatus ? o("doneDecline") : o("doneLine")
                        })]
                    }) : (0, t.jsxs)("form", {
                        className: U.default.rsvpForm,
                        onSubmit: e => void D(e),
                        noValidate: !0,
                        children: [y.guest && y.showGreeting ? (0, t.jsx)("p", {
                            className: U.default.rsvpGreeting,
                            style: {
                                fontFamily: p,
                                color: u.sindoor
                            },
                            children: o("greeting", {
                                name: y.guest.addressName
                            })
                        }) : null, (0, t.jsxs)("div", {
                            className: U.default.field,
                            children: [(0, t.jsx)("label", {
                                htmlFor: "devi-rsvp-name",
                                children: o("name")
                            }), (0, t.jsx)("input", {
                                id: "devi-rsvp-name",
                                value: L.guestName,
                                onChange: e => S("guestName", e.target.value),
                                readOnly: !!y.guest,
                                autoComplete: "name",
                                maxLength: 120,
                                placeholder: o("namePlaceholder"),
                                required: !0,
                                style: P
                            })]
                        }), (0, t.jsxs)("fieldset", {
                            className: U.default.choiceSet,
                            children: [(0, t.jsx)("legend", {
                                children: o("attending")
                            }), (0, t.jsx)("div", {
                                className: U.default.choices,
                                children: eU.map(e => {
                                    let a = L.attendanceStatus === e.value;
                                    return (0, t.jsxs)("button", {
                                        type: "button",
                                        className: U.default.choice,
                                        "data-on": a ? "true" : "false",
                                        "aria-pressed": a,
                                        "data-status": e.value,
                                        onClick: () => S("attendanceStatus", e.value),
                                        style: {
                                            borderColor: a ? u.sindoor : (0, $.L)(u.gold, .55),
                                            background: a ? (0, $.L)(u.sindoor, .08) : (0, $.L)(u.ivory, .7),
                                            color: u.ink
                                        },
                                        children: [(0, t.jsx)("span", {
                                            className: U.default.choiceMark,
                                            "aria-hidden": "true",
                                            style: {
                                                background: a ? u.sindoor : "transparent",
                                                borderColor: a ? u.sindoor : (0, $.L)(u.gold, .8),
                                                color: u.onSindoor
                                            },
                                            children: a ? (0, t.jsx)(eq.f, {}) : null
                                        }), (0, t.jsxs)("span", {
                                            className: U.default.choiceText,
                                            children: [(0, t.jsx)("span", {
                                                style: {
                                                    fontFamily: p
                                                },
                                                children: o(`${e.key}`)
                                            }), (0, t.jsx)("small", {
                                                style: {
                                                    color: u.muted
                                                },
                                                children: o(`${e.key}Hint`)
                                            })]
                                        })]
                                    }, e.value)
                                })
                            })]
                        }), G ? (0, t.jsxs)("div", {
                            className: U.default.field,
                            children: [(0, t.jsx)("span", {
                                id: "devi-rsvp-count-label",
                                className: U.default.fieldLabel,
                                children: y.isParty ? o("householdParty", {
                                    count: y.invitedCount
                                }) : o("household")
                            }), (0, t.jsxs)("div", {
                                className: U.default.stepper,
                                role: "group",
                                "aria-labelledby": "devi-rsvp-count-label",
                                children: [(0, t.jsx)("button", {
                                    type: "button",
                                    onClick: () => z(I - 1),
                                    disabled: I <= 1,
                                    "aria-label": o("fewer"),
                                    style: {
                                        borderColor: (0, $.L)(u.gold, .6),
                                        color: u.ink
                                    },
                                    children: (0, t.jsx)(eD.f, {
                                        "aria-hidden": "true"
                                    })
                                }), (0, t.jsx)("output", {
                                    "aria-live": "polite",
                                    style: {
                                        fontFamily: p,
                                        color: u.ink
                                    },
                                    children: I
                                }), (0, t.jsx)("button", {
                                    type: "button",
                                    onClick: () => z(I + 1),
                                    disabled: I >= B,
                                    "aria-label": o("more"),
                                    style: {
                                        borderColor: (0, $.L)(u.gold, .6),
                                        color: u.ink
                                    },
                                    children: (0, t.jsx)(eH.f, {
                                        "aria-hidden": "true"
                                    })
                                })]
                            }), (0, t.jsx)("p", {
                                className: U.default.fieldHint,
                                style: {
                                    color: u.muted
                                },
                                children: o("householdHint")
                            })]
                        }) : null, y.isParty && R && y.partyAttending > 1 ? (0, t.jsxs)("div", {
                            className: U.default.field,
                            children: [(0, t.jsx)("span", {
                                className: U.default.fieldLabel,
                                children: o("attendeeNames")
                            }), (0, t.jsx)("div", {
                                className: U.default.attendees,
                                children: Array.from({
                                    length: y.partyAttending
                                }, (e, a) => (0, t.jsx)("input", {
                                    "aria-label": o("attendee", {
                                        number: a + 1
                                    }),
                                    value: y.attendeeNames[a] ?? "",
                                    onChange: e => y.setAttendeeName(a, e.target.value),
                                    placeholder: o("attendee", {
                                        number: a + 1
                                    }),
                                    maxLength: 120,
                                    style: P
                                }, a))
                            })]
                        }) : null, R && r.length > 1 ? (0, t.jsxs)("fieldset", {
                            className: U.default.chipSet,
                            children: [(0, t.jsx)("legend", {
                                children: o("events")
                            }), (0, t.jsx)("div", {
                                className: U.default.chips,
                                children: r.map(e => {
                                    let a = L.attendingEvents.includes(e.name);
                                    return (0, t.jsxs)("button", {
                                        type: "button",
                                        "aria-pressed": a,
                                        onClick: () => T(e.name),
                                        className: U.default.chip,
                                        "data-on": a ? "true" : "false",
                                        style: {
                                            borderColor: a ? u.sindoor : (0, $.L)(u.gold, .55),
                                            background: a ? u.sindoor : "transparent",
                                            color: a ? u.onSindoor : u.ink
                                        },
                                        children: [a ? (0, t.jsx)(eq.f, {
                                            "aria-hidden": "true"
                                        }) : null, e.name]
                                    }, e.id)
                                })
                            })]
                        }) : null, R && n.collectMealPreference ? (0, t.jsxs)("fieldset", {
                            className: U.default.chipSet,
                            children: [(0, t.jsx)("legend", {
                                children: o("diet")
                            }), (0, t.jsx)("div", {
                                className: U.default.chips,
                                children: ez.map(e => {
                                    let a = o(`dietOptions.${e}`),
                                        l = N.includes(a);
                                    return (0, t.jsxs)("button", {
                                        type: "button",
                                        "aria-pressed": l,
                                        className: U.default.chip,
                                        "data-on": l ? "true" : "false",
                                        onClick: () => k(t => l ? t.filter(e => e !== a) : "none" === e ? [a] : [...t.filter(e => e !== o("dietOptions.none")), a]),
                                        style: {
                                            borderColor: l ? u.sindoor : (0, $.L)(u.gold, .55),
                                            background: l ? u.sindoor : "transparent",
                                            color: l ? u.onSindoor : u.ink
                                        },
                                        children: [l ? (0, t.jsx)(eq.f, {
                                            "aria-hidden": "true"
                                        }) : null, a]
                                    }, e)
                                })
                            }), (0, t.jsx)("input", {
                                "aria-label": o("dietOther"),
                                value: L.mealPreference,
                                onChange: e => S("mealPreference", e.target.value),
                                placeholder: o("dietPlaceholder"),
                                maxLength: 160,
                                style: P
                            })]
                        }) : null, n.collectPhone || n.collectEmail ? (0, t.jsxs)("div", {
                            className: U.default.fieldRow,
                            children: [n.collectPhone ? (0, t.jsxs)("div", {
                                className: U.default.field,
                                children: [(0, t.jsx)("label", {
                                    htmlFor: "devi-rsvp-phone",
                                    children: o("phone")
                                }), (0, t.jsx)("input", {
                                    id: "devi-rsvp-phone",
                                    type: "tel",
                                    inputMode: "tel",
                                    autoComplete: "tel",
                                    value: L.phone,
                                    onChange: e => S("phone", e.target.value),
                                    maxLength: 40,
                                    placeholder: o("phonePlaceholder"),
                                    style: P
                                })]
                            }) : null, n.collectEmail ? (0, t.jsxs)("div", {
                                className: U.default.field,
                                children: [(0, t.jsx)("label", {
                                    htmlFor: "devi-rsvp-email",
                                    children: o("email")
                                }), (0, t.jsx)("input", {
                                    id: "devi-rsvp-email",
                                    type: "email",
                                    autoComplete: "email",
                                    value: L.email,
                                    onChange: e => S("email", e.target.value),
                                    maxLength: 200,
                                    placeholder: "name@example.com",
                                    style: P
                                })]
                            }) : null]
                        }) : null, n.customQuestion ? (0, t.jsxs)("div", {
                            className: U.default.field,
                            children: [(0, t.jsx)("label", {
                                htmlFor: "devi-rsvp-custom",
                                children: n.customQuestion
                            }), (0, t.jsx)("input", {
                                id: "devi-rsvp-custom",
                                value: L.customAnswer,
                                onChange: e => S("customAnswer", e.target.value),
                                maxLength: 500,
                                style: P
                            })]
                        }) : null, (0, t.jsxs)("div", {
                            className: U.default.field,
                            children: [(0, t.jsx)("label", {
                                htmlFor: "devi-rsvp-message",
                                children: o("message")
                            }), (0, t.jsx)("textarea", {
                                id: "devi-rsvp-message",
                                rows: 3,
                                value: L.message,
                                onChange: e => S("message", e.target.value),
                                maxLength: 1e3,
                                placeholder: o("messagePlaceholder"),
                                style: P
                            })]
                        }), (0, t.jsxs)("div", {
                            className: U.default.honeypot,
                            "aria-hidden": "true",
                            children: [(0, t.jsx)("label", {
                                htmlFor: "devi-rsvp-website",
                                children: "Website"
                            }), (0, t.jsx)("input", {
                                id: "devi-rsvp-website",
                                tabIndex: -1,
                                autoComplete: "off",
                                value: L.website,
                                onChange: e => S("website", e.target.value)
                            })]
                        }), M ? (0, t.jsx)("p", {
                            className: U.default.formError,
                            role: "alert",
                            style: {
                                color: u.sindoor,
                                borderColor: (0, $.L)(u.sindoor, .4),
                                background: (0, $.L)(u.sindoor, .06)
                            },
                            children: M
                        }) : null, (0, t.jsxs)("button", {
                            type: "submit",
                            className: `${U.default.pill} ${U.default.pillSolid} ${U.default.submit}`,
                            disabled: q,
                            style: {
                                background: u.sindoor,
                                color: u.onSindoor,
                                borderColor: u.goldLight
                            },
                            children: [q ? (0, t.jsx)(eM.f, {
                                "aria-hidden": "true",
                                className: U.default.spin
                            }) : (0, t.jsx)(eA.f, {
                                "aria-hidden": "true"
                            }), q ? o("sending") : o("submit")]
                        }), (0, t.jsxs)("p", {
                            className: U.default.privacy,
                            style: {
                                color: u.muted
                            },
                            children: [(0, t.jsx)(eE.f, {
                                "aria-hidden": "true"
                            }), " ", o("privacy")]
                        })]
                    })
                })]
            })]
        })
    }
    var eJ = e.i(881206),
        eV = e.i(317998),
        eK = e.i(348892),
        eY = e.i(23204),
        eZ = e.i(611620),
        eQ = e.i(849517),
        eX = e.i(340793),
        e0 = e.i(83211),
        e1 = e.i(207802);

    function e2(e) {
        let {
            days: a,
            total: l
        } = e, s = (0, i.r)("inviteThemes.devi-darbar.schedule"), r = (0, w.f)(), {
            tones: n
        } = X(), [o, d] = (0, W.i)(.1), c = a.reduce((e, t, l) => [...e, 0 === l ? 0 : e[l - 1] + a[l - 1].events.length], []);
        return (0, t.jsxs)("section", {
            id: "devi-celebrations",
            "aria-labelledby": "devi-celebrations-title",
            className: U.default.schedule,
            style: {
                background: `${(0,J.H)((0,$.L)(n.goldLight,.06))}, linear-gradient(180deg, ${n.burgundyDeep} 0%, ${n.burgundy} 50%, ${n.burgundyDeep} 100%)`
            },
            children: [(0, t.jsxs)("div", {
                ref: o,
                "data-reveal": d,
                className: U.default.scheduleHead,
                children: [(0, t.jsx)(eh, {
                    className: U.default.scheduleRangoli,
                    colours: [n.goldLight, n.marigold, n.gold, n.vermilion, n.goldLight, n.marigold]
                }), (0, t.jsx)(ee, {
                    id: "devi-celebrations-title",
                    eyebrow: s("eyebrow"),
                    title: s("title"),
                    light: !0,
                    children: (0, t.jsx)("p", {
                        className: `${U.default.chapterSub} rv`,
                        style: {
                            color: (0, $.L)(n.light, .78)
                        },
                        children: s("subtitle")
                    })
                })]
            }), (0, t.jsx)("ol", {
                className: U.default.days,
                children: a.map((e, a) => (0, t.jsxs)("li", {
                    className: U.default.day,
                    children: [(0, t.jsxs)("h3", {
                        className: U.default.dayHeading,
                        style: {
                            color: n.goldLight
                        },
                        children: [(0, t.jsx)("span", {
                            className: U.default.dayRule,
                            style: {
                                background: (0, $.L)(n.goldLight, .5)
                            },
                            "aria-hidden": "true"
                        }), (0, t.jsx)("span", {
                            children: e.date ? r.date(e.date, {
                                weekday: "long",
                                day: "numeric",
                                month: "long",
                                year: "numeric"
                            }) : s("undated")
                        }), (0, t.jsx)("span", {
                            className: U.default.dayRule,
                            style: {
                                background: (0, $.L)(n.goldLight, .5)
                            },
                            "aria-hidden": "true"
                        })]
                    }), (0, t.jsx)("ul", {
                        className: U.default.dayEvents,
                        children: e.events.map((e, s) => (0, t.jsx)("li", {
                            children: (0, t.jsx)(e6, {
                                event: e,
                                index: c[a] + s + 1,
                                total: l,
                                scene: (0, B.V)(e)
                            })
                        }, e.id))
                    })]
                }, `${e.date||"undated"}-${a}`))
            })]
        })
    }

    function e6(e) {
        let {
            event: a,
            index: s,
            total: r,
            scene: n
        } = e, o = (0, i.r)("inviteThemes.devi-darbar.schedule"), d = (0, w.f)(), c = (0, ei.f)(), {
            theme: u,
            tones: h,
            display: m
        } = X(), [p, f] = (0, W.i)(.12), g = (0, B.o)(n), y = C.K[n], v = C.J[y], x = g ? h.ink : h.light, j = g ? h.muted : (0, $.L)(h.light, .8), b = g ? h.sindoor : h.goldLight, N = d.eventTimeOf(a, {
            viewerTimezone: c
        }), k = (0, B.i)(a), _ = (0, eX.d)(a), F = (0, eX.x)(a), L = (0, B.J)(a), S = (0, I.f)(a), T = (0, B.W)([a], a.name), O = (0, eF.L)(a.dressCodeColor), R = (0, eF.B)(a), q = (0, l.useRef)(null);
        (0, e0._)(q, a.name);
        let M = "sangeet" === n || "garba" === n || "sehrabandi" === n || "reception" === n || "chowki" === n;
        return (0, t.jsxs)("article", {
            ref: p,
            id: `devi-event-${a.id}`,
            "data-reveal": f,
            "data-scene": n,
            "data-side": s % 2 ? "left" : "right",
            "aria-labelledby": `devi-event-title-${a.id}`,
            className: U.default.event,
            style: {
                background: (0, e1.B)(n, h),
                "--ink": x,
                "--lights": h.lamplight,
                "--smoke": (0, $.L)(h.light, .22),
                "--spark": h.goldLight,
                "--beam": (0, $.L)("#FFF4D6", .55),
                borderColor: (0, $.L)(h.gold, g ? .45 : .35)
            },
            children: [(0, t.jsxs)("div", {
                className: U.default.eventDecor,
                "aria-hidden": "true",
                children: [M ? (0, t.jsx)("span", {
                    className: U.default.stringLights,
                    children: z.f.map((e, a) => (0, t.jsx)("i", {
                        style: {
                            left: `${e.left}%`,
                            top: `${e.top}%`,
                            animationDelay: `${e.delay}s`
                        }
                    }, a))
                }) : null, "chowki" === n || "reception" === n ? (0, t.jsx)("span", {
                    className: U.default.stars
                }) : null, "garba" === n || "sangeet" === n ? (0, t.jsx)("span", {
                    className: U.default.mirrorRing
                }) : null, "wedding" === n || "celebration" === n ? (0, t.jsx)("span", {
                    className: U.default.smoke
                }) : null, g ? (0, t.jsx)("span", {
                    className: U.default.sunBeams
                }) : null]
            }), (0, t.jsxs)("figure", {
                className: U.default.eventArt,
                children: [(0, t.jsx)("span", {
                    className: U.default.eventHalo,
                    style: {
                        background: `radial-gradient(closest-side, ${(0,$.L)(g?h.marigold:h.lamplight,g?.42:.5)}, transparent)`
                    },
                    "aria-hidden": "true"
                }), (0, t.jsx)("img", {
                    src: (0, C._)(y),
                    alt: "",
                    "aria-hidden": "true",
                    width: v.w,
                    height: v.h,
                    loading: "lazy",
                    decoding: "async",
                    className: U.default.eventImg
                })]
            }), (0, t.jsxs)("div", {
                className: U.default.eventCard,
                style: {
                    background: g ? (0, $.L)(h.paper, .9) : (0, $.L)(h.nightDeep, .5),
                    borderColor: g ? (0, $.L)(h.gold, .5) : (0, $.L)(h.goldLight, .32),
                    color: x
                },
                children: [(0, t.jsxs)("p", {
                    className: U.default.eventKicker,
                    style: {
                        color: b
                    },
                    children: [(0, t.jsx)("span", {
                        children: o(`scenes.${n}`)
                    }), (0, t.jsx)("span", {
                        className: U.default.eventCount,
                        style: {
                            color: j
                        },
                        children: o("count", {
                            index: s,
                            total: r
                        })
                    })]
                }), (0, t.jsx)("h4", {
                    ref: q,
                    id: `devi-event-title-${a.id}`,
                    className: U.default.eventName,
                    style: {
                        fontFamily: m,
                        fontWeight: u.headingWeight ?? 400,
                        color: x
                    },
                    children: a.name
                }), (0, t.jsxs)("dl", {
                    className: U.default.facts,
                    children: [N ? (0, t.jsxs)("div", {
                        children: [(0, t.jsxs)("dt", {
                            children: [(0, t.jsx)(eJ.f, {
                                "aria-hidden": "true",
                                style: {
                                    color: b
                                }
                            }), (0, t.jsx)("span", {
                                className: U.default.srOnly,
                                children: o("when")
                            })]
                        }), (0, t.jsxs)("dd", {
                            children: [(0, t.jsx)("span", {
                                className: U.default.factMain,
                                children: N
                            }), k ? (0, t.jsxs)("span", {
                                className: U.default.midnight,
                                style: {
                                    color: b
                                },
                                children: [(0, t.jsx)(eY.f, {
                                    "aria-hidden": "true"
                                }), " ", o("pastMidnight")]
                            }) : null]
                        })]
                    }) : null, _ || F ? (0, t.jsxs)("div", {
                        children: [(0, t.jsxs)("dt", {
                            children: [(0, t.jsx)(eK.f, {
                                "aria-hidden": "true",
                                style: {
                                    color: b
                                }
                            }), (0, t.jsx)("span", {
                                className: U.default.srOnly,
                                children: o("where")
                            })]
                        }), (0, t.jsxs)("dd", {
                            children: [_ ? (0, t.jsx)("span", {
                                className: U.default.factMain,
                                children: _
                            }) : null, F ? (0, t.jsx)("span", {
                                style: {
                                    color: j
                                },
                                children: F
                            }) : null]
                        })]
                    }) : null, a.dressCode ? (0, t.jsxs)("div", {
                        children: [(0, t.jsxs)("dt", {
                            children: [(0, t.jsx)(eQ.f, {
                                "aria-hidden": "true",
                                style: {
                                    color: b
                                }
                            }), (0, t.jsx)("span", {
                                className: U.default.srOnly,
                                children: o("dress")
                            })]
                        }), (0, t.jsxs)("dd", {
                            className: U.default.factDress,
                            children: [O ? (0, t.jsx)("span", {
                                className: U.default.swatch,
                                style: {
                                    background: O,
                                    borderColor: (0, $.L)(x, .4)
                                },
                                "aria-hidden": "true"
                            }) : null, (0, t.jsx)("span", {
                                children: a.dressCode
                            })]
                        })]
                    }) : null, R.length > 0 ? (0, t.jsxs)("div", {
                        children: [(0, t.jsxs)("dt", {
                            children: [(0, t.jsx)(eV.f, {
                                "aria-hidden": "true",
                                style: {
                                    color: b
                                }
                            }), (0, t.jsx)("span", {
                                className: U.default.srOnly,
                                children: o("rituals")
                            })]
                        }), (0, t.jsx)("dd", {
                            children: (0, t.jsx)("ol", {
                                className: U.default.steps,
                                children: R.map(e => (0, t.jsxs)("li", {
                                    children: [(0, t.jsx)("span", {
                                        style: {
                                            color: b
                                        },
                                        children: e.time ? d.time(e.time) : ""
                                    }), e.title]
                                }, e.id))
                            })
                        })]
                    }) : null]
                }), a.description ? (0, t.jsx)("p", {
                    className: U.default.eventDescription,
                    style: {
                        color: j
                    },
                    children: a.description
                }) : null, L || S || T ? (0, t.jsxs)("div", {
                    className: U.default.eventActions,
                    children: [L ? (0, t.jsxs)(el, {
                        href: L,
                        external: !0,
                        variant: g ? "solid" : "outline",
                        light: !g,
                        children: [(0, t.jsx)(eZ.f, {
                            "aria-hidden": "true"
                        }), " ", o("directions")]
                    }) : null, S ? (0, t.jsxs)(el, {
                        href: S,
                        external: !0,
                        variant: "outline",
                        light: !g,
                        ariaLabel: o("googleCalendarLabel", {
                            event: a.name
                        }),
                        children: [(0, t.jsx)(H.f, {
                            "aria-hidden": "true"
                        }), " ", o("googleCalendar")]
                    }) : null, T ? (0, t.jsxs)(el, {
                        href: T,
                        download: (0, B._)(a.name),
                        variant: "outline",
                        light: !g,
                        ariaLabel: o("calendarFileLabel", {
                            event: a.name
                        }),
                        children: [(0, t.jsx)(H.f, {
                            "aria-hidden": "true"
                        }), " ", o("calendarFile")]
                    }) : null]
                }) : null]
            })]
        })
    }

    function e8(e) {
        let {
            milestones: a
        } = e, s = (0, i.r)("inviteThemes.devi-darbar.story"), {
            theme: r,
            tones: n,
            display: o
        } = X(), d = (0, l.useRef)(null), c = (0, W.d)(d), [u, h] = (0, W.i)(.2), [m, p] = (0, l.useState)(0), f = (0, l.useRef)([]), g = (0, l.useRef)(null), y = a.length, v = a[Math.min(m, y - 1)], x = y > 1, j = (0, J.M)(y), b = function(e) {
            var a;
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                l = (e + y) % y;
            p(l), t && (null == (a = f.current[l]) || a.focus())
        };
        return (0, t.jsxs)("section", {
            ref: d,
            id: "devi-story",
            "aria-labelledby": "devi-story-title",
            className: U.default.nights,
            "data-paused": c ? "false" : "true",
            style: {
                "--glow-soft": (0, $.L)(n.lamplight, .32),
                "--lamp": n.lamplight,
                background: `linear-gradient(180deg, ${n.night} 0, ${(0,$.L)(n.night,0)} 220px, ${(0,$.L)(n.nightDeep,0)} calc(100% - 220px), ${n.nightDeep} 100%), radial-gradient(120% 80% at 50% 58%, ${n.twilight} 0%, ${n.night} 58%, ${n.nightDeep} 100%)`
            },
            children: [(0, t.jsx)(ee, {
                id: "devi-story-title",
                eyebrow: s("eyebrow"),
                title: s("title"),
                light: !0,
                children: x ? (0, t.jsx)("p", {
                    className: `${U.default.chapterSub} rv`,
                    style: {
                        color: (0, $.L)(n.light, .78)
                    },
                    children: s("subtitle")
                }) : null
            }), (0, t.jsxs)("div", {
                ref: u,
                "data-reveal": h,
                className: U.default.nightsBody,
                children: [x ? (0, t.jsxs)("div", {
                    className: U.default.lampRail,
                    style: {
                        "--n": y
                    },
                    children: [(0, t.jsx)(J.c, {
                        gold: n.goldLight,
                        deep: n.goldDeep,
                        className: U.default.lampArch
                    }), (0, t.jsx)("div", {
                        role: "tablist",
                        "aria-label": s("chapters"),
                        className: U.default.lampTabs,
                        children: a.map((e, a) => {
                            let l = a === m;
                            return (0, t.jsxs)("button", {
                                ref: e => {
                                    f.current[a] = e
                                },
                                type: "button",
                                role: "tab",
                                id: `devi-story-tab-${a}`,
                                "aria-selected": l,
                                "aria-controls": "devi-story-panel",
                                tabIndex: l ? 0 : -1,
                                "aria-label": e.title || s("chapter", {
                                    number: a + 1
                                }),
                                className: U.default.lamp,
                                "data-on": l ? "true" : "false",
                                onClick: () => b(a),
                                onKeyDown: e => {
                                    let t;
                                    return t = {
                                        ArrowRight: a + 1,
                                        ArrowDown: a + 1,
                                        ArrowLeft: a - 1,
                                        ArrowUp: a - 1,
                                        Home: 0,
                                        End: y - 1
                                    }, void(e.key in t && (e.preventDefault(), b(t[e.key], !0)))
                                },
                                style: {
                                    left: `${j[a].x}%`,
                                    top: `${j[a].y}%`,
                                    "--i": a,
                                    "--night-glow": n.marigold
                                },
                                children: [(0, t.jsx)("span", {
                                    className: U.default.lampFlameGlow,
                                    "aria-hidden": "true"
                                }), (0, t.jsx)("img", {
                                    src: (0, C._)("diya"),
                                    width: C.J.diya.w,
                                    height: C.J.diya.h,
                                    alt: "",
                                    "aria-hidden": "true",
                                    decoding: "async",
                                    loading: "lazy"
                                }), (0, t.jsx)("span", {
                                    className: U.default.lampNumber,
                                    style: {
                                        fontFamily: o
                                    },
                                    children: a + 1
                                })]
                            }, a)
                        })
                    })]
                }) : null, (0, t.jsxs)("div", {
                    id: "devi-story-panel",
                    role: x ? "tabpanel" : void 0,
                    "aria-labelledby": x ? `devi-story-tab-${m}` : void 0,
                    className: U.default.nightScene,
                    onPointerDown: e => {
                        x && "mouse" !== e.pointerType && (g.current = {
                            x: e.clientX,
                            y: e.clientY
                        })
                    },
                    onPointerCancel: () => {
                        g.current = null
                    },
                    onPointerUp: e => {
                        let a = g.current;
                        if (g.current = null, !a) return;
                        let t = e.clientX - a.x;
                        Math.abs(t) > 48 && Math.abs(t) > 1.4 * Math.abs(e.clientY - a.y) && b(m + (t < 0 ? 1 : -1))
                    },
                    children: [(0, t.jsxs)("figure", {
                        className: U.default.roundel,
                        children: [(0, t.jsx)("span", {
                            className: U.default.roundelHalo,
                            "aria-hidden": "true"
                        }), (0, t.jsx)(eh, {
                            className: U.default.roundelRangoli,
                            colours: [n.goldLight, (0, $.L)(n.goldLight, .7), (0, $.L)(n.marigold, .9), n.marigold, (0, $.L)(n.goldLight, .6), n.vermilion]
                        }), (0, t.jsx)("span", {
                            className: U.default.roundelDisc,
                            children: (0, t.jsx)("img", {
                                src: (0, C._)("story-roundel"),
                                width: C.J["story-roundel"].w,
                                height: C.J["story-roundel"].h,
                                alt: "",
                                "aria-hidden": "true",
                                loading: "lazy",
                                decoding: "async"
                            })
                        })]
                    }), (0, t.jsxs)("div", {
                        className: U.default.nightCard,
                        style: {
                            borderColor: (0, $.L)(n.goldLight, .4),
                            background: (0, $.L)(n.nightDeep, .5)
                        },
                        children: [x ? (0, t.jsx)("p", {
                            className: U.default.nightMeta,
                            style: {
                                color: n.goldLight
                            },
                            children: s("count", {
                                index: m + 1,
                                total: y
                            })
                        }) : null, v.title ? (0, t.jsx)("h3", {
                            className: U.default.nightTitle,
                            style: {
                                fontFamily: o,
                                fontWeight: r.headingWeight ?? 400,
                                color: n.light
                            },
                            children: v.title
                        }) : null, (0, t.jsx)("p", {
                            className: U.default.nightNote,
                            style: {
                                color: (0, $.L)(n.light, .9)
                            },
                            children: v.body
                        })]
                    }, m)]
                }), x ? (0, t.jsxs)("div", {
                    className: U.default.nightSteps,
                    children: [(0, t.jsx)("button", {
                        type: "button",
                        className: U.default.roundButton,
                        onClick: () => b(m - 1),
                        "aria-label": s("previous"),
                        style: {
                            color: n.light,
                            borderColor: (0, $.L)(n.goldLight, .45)
                        },
                        children: (0, t.jsx)(ev.f, {
                            "aria-hidden": "true"
                        })
                    }), (0, t.jsx)("span", {
                        className: U.default.nightCount,
                        "aria-live": "polite",
                        style: {
                            color: (0, $.L)(n.light, .75)
                        },
                        children: s("count", {
                            index: m + 1,
                            total: y
                        })
                    }), (0, t.jsx)("button", {
                        type: "button",
                        className: U.default.roundButton,
                        onClick: () => b(m + 1),
                        "aria-label": s("next"),
                        style: {
                            color: n.light,
                            borderColor: (0, $.L)(n.goldLight, .45)
                        },
                        children: (0, t.jsx)(ex.f, {
                            "aria-hidden": "true"
                        })
                    })]
                }) : null]
            })]
        })
    }
    var e4 = e.i(224716);

    function e5(e) {
        let {
            one: a,
            two: n,
            names: o,
            invocation: d,
            dateLabel: c,
            placeLabel: u,
            leaving: h,
            sound: m,
            onEnter: p,
            onSkip: f
        } = e, g = (0, i.r)("inviteThemes.devi-darbar"), {
            theme: y,
            tones: v,
            display: x
        } = X(), j = (0, l.useRef)(null), b = Math.min(1, 9 / Math.max(a.length, n.length, 1));
        return (0, l.useEffect)(() => {
            var e;
            null == (e = j.current) || e.focus({
                preventScroll: !0
            })
        }, []), (0, t.jsxs)("div", {
            ref: j,
            role: "dialog",
            "aria-modal": "true",
            "data-invitation-gate": !0,
            "aria-labelledby": "devi-gate-names",
            tabIndex: -1,
            className: `${U.default.gate} ${h?U.default.gateLeaving:""}`,
            onKeyDown: e => {
                "Escape" === e.key && f()
            },
            style: {
                "--name-scale": b,
                "--frame-p": (0, C.L)("gate-arch-p"),
                "--frame-w": (0, C.L)("gate-arch-w"),
                "--lamp": v.lamplight,
                "--lamp-glow": (0, $.L)(v.lamplight, .7),
                "--seam": (0, $.L)(v.lamplight, .95),
                background: `radial-gradient(90% 60% at 50% 46%, ${v.twilight} 0%, ${v.night} 62%, ${v.nightDeep} 100%)`
            },
            children: [(0, t.jsxs)("div", {
                className: U.default.gateStage,
                "aria-hidden": "true",
                children: [(0, t.jsx)("div", {
                    className: U.default.gateBeyond,
                    style: {
                        background: v.burgundyDeep
                    },
                    children: (0, t.jsx)(C.O, {
                        portrait: "sanctum-p",
                        landscape: "sanctum-w",
                        priority: !0,
                        className: U.default.gateBeyondImg
                    })
                }), (0, t.jsxs)("div", {
                    className: U.default.doorway,
                    children: [(0, t.jsx)("span", {
                        className: `${U.default.leaf} ${U.default.leafLeft}`,
                        children: (0, t.jsx)("img", {
                            src: (0, C._)("door-leaf"),
                            width: C.J["door-leaf"].w,
                            height: C.J["door-leaf"].h,
                            alt: "",
                            decoding: "async",
                            fetchPriority: "high",
                            draggable: !1
                        })
                    }), (0, t.jsx)("span", {
                        className: `${U.default.leaf} ${U.default.leafRight}`,
                        children: (0, t.jsx)("img", {
                            src: (0, C._)("door-leaf"),
                            width: C.J["door-leaf"].w,
                            height: C.J["door-leaf"].h,
                            alt: "",
                            decoding: "async",
                            draggable: !1
                        })
                    }), (0, t.jsx)("span", {
                        className: U.default.doorSeam
                    }), (0, t.jsx)("span", {
                        className: U.default.doorShade,
                        style: {
                            background: `linear-gradient(180deg, ${(0,$.L)(v.nightDeep,.55)} 0%, transparent 30%, transparent 70%, ${(0,$.L)(v.nightDeep,.5)} 100%)`
                        }
                    })]
                }), (0, t.jsx)("div", {
                    className: U.default.gateFrame
                }), (0, t.jsxs)("div", {
                    className: U.default.gateBell,
                    children: [(0, t.jsx)("img", {
                        src: (0, C._)("bell"),
                        width: C.J.bell.w,
                        height: C.J.bell.h,
                        alt: "",
                        decoding: "async",
                        draggable: !1
                    }), (0, t.jsx)("span", {
                        className: U.default.ripple
                    }), (0, t.jsx)("span", {
                        className: U.default.ripple
                    }), (0, t.jsx)("span", {
                        className: U.default.ripple
                    })]
                }), (0, t.jsxs)("div", {
                    className: U.default.gateDiya,
                    children: [(0, t.jsx)("span", {
                        className: U.default.diyaGlow
                    }), (0, t.jsx)("img", {
                        src: (0, C._)("diya"),
                        width: C.J.diya.w,
                        height: C.J.diya.h,
                        alt: "",
                        decoding: "async",
                        draggable: !1
                    })]
                }), (0, t.jsx)(G, {
                    count: 7,
                    className: U.default.gatePetals
                }), (0, t.jsx)("span", {
                    className: U.default.gateFlood
                })]
            }), (0, t.jsxs)("div", {
                className: U.default.plaque,
                style: {
                    "--paper": v.paper,
                    "--gold": v.gold,
                    "--ink": v.ink
                },
                children: [(0, t.jsx)(ea, {
                    size: "clamp(54px, 8svh, 76px)",
                    className: U.default.plaqueMedallion
                }), (0, t.jsx)("p", {
                    className: U.default.plaqueInvocation,
                    lang: "hi",
                    style: {
                        fontFamily: Y,
                        color: v.sindoor
                    },
                    children: d
                }), (0, t.jsx)(eW.GuestGreeting, {
                    className: U.default.plaqueGuest,
                    style: {
                        fontFamily: x,
                        color: v.ink
                    }
                }), (0, t.jsx)("p", {
                    className: U.default.plaqueInvites,
                    style: {
                        color: v.muted
                    },
                    children: g("threshold.invites")
                }), (0, t.jsxs)("h2", {
                    id: "devi-gate-names",
                    className: U.default.plaqueNames,
                    style: {
                        fontFamily: x,
                        fontWeight: y.headingWeight ?? 400,
                        color: v.sindoor
                    },
                    children: [(0, t.jsx)("span", {
                        children: a
                    }), (0, t.jsx)("span", {
                        className: U.default.plaqueWeds,
                        style: {
                            color: v.goldDeep
                        },
                        children: g("hero.weds")
                    }), (0, t.jsx)("span", {
                        children: n
                    })]
                }), c || u ? (0, t.jsxs)("p", {
                    className: U.default.plaqueDate,
                    style: {
                        color: v.goldDeep
                    },
                    children: [c, c && u ? (0, t.jsx)("span", {
                        "aria-hidden": "true",
                        children: " · "
                    }) : null, u]
                }) : null, (0, t.jsxs)("button", {
                    type: "button",
                    className: U.default.gateEnter,
                    "data-gate-target": !0,
                    onClick: p,
                    "aria-label": g("threshold.enterLabel", {
                        names: o
                    }),
                    style: {
                        background: v.sindoor,
                        color: v.onSindoor,
                        borderColor: v.goldLight
                    },
                    children: [(0, t.jsx)(e4.f, {
                        "aria-hidden": "true"
                    }), g("threshold.enter")]
                })]
            }), (0, t.jsxs)("div", {
                className: U.default.gateControls,
                children: [m ? (0, t.jsxs)("button", {
                    type: "button",
                    className: U.default.gateControl,
                    onClick: m.toggle,
                    "aria-pressed": m.on,
                    style: {
                        color: v.light,
                        background: (0, $.L)(v.nightDeep, .6),
                        borderColor: (0, $.L)(v.goldLight, .45)
                    },
                    children: [m.on ? (0, t.jsx)(s.f, {
                        "aria-hidden": "true"
                    }) : (0, t.jsx)(r.f, {
                        "aria-hidden": "true"
                    }), g(m.on ? "threshold.soundOn" : "threshold.soundOff")]
                }) : (0, t.jsx)("span", {}), (0, t.jsx)("button", {
                    type: "button",
                    className: U.default.gateControl,
                    onClick: f,
                    "aria-label": g("threshold.skipLabel"),
                    style: {
                        color: v.light,
                        background: (0, $.L)(v.nightDeep, .6),
                        borderColor: (0, $.L)(v.goldLight, .45)
                    },
                    children: g("threshold.skip")
                })]
            })]
        })
    }
    var e7 = e.i(823105);

    function e3(e) {
        let {
            venues: a,
            notes: l
        } = e, s = (0, i.r)("inviteThemes.devi-darbar.venues"), r = (0, w.f)(), {
            tones: n,
            display: o
        } = X(), [d, c] = (0, W.i)(.1);
        return (0, t.jsxs)("section", {
            id: "devi-venues",
            "aria-labelledby": "devi-venues-title",
            className: U.default.guide,
            style: {
                background: `radial-gradient(110% 60% at 50% 0%, ${n.twilight} 0%, ${n.night} 55%, ${n.nightDeep} 100%)`
            },
            children: [(0, t.jsx)(ee, {
                id: "devi-venues-title",
                eyebrow: s("eyebrow"),
                title: s("title"),
                light: !0,
                children: (0, t.jsx)("p", {
                    className: `${U.default.chapterSub} rv`,
                    style: {
                        color: (0, $.L)(n.light, .78)
                    },
                    children: s("subtitle")
                })
            }), (0, t.jsxs)("div", {
                ref: d,
                "data-reveal": c,
                className: U.default.guideBody,
                children: [(0, t.jsx)("figure", {
                    className: `${U.default.arrival} rv`,
                    style: {
                        background: n.ivory,
                        borderColor: (0, $.L)(n.goldLight, .4)
                    },
                    children: (0, t.jsx)("img", {
                        src: (0, C._)("arrival"),
                        width: C.J.arrival.w,
                        height: C.J.arrival.h,
                        alt: s("arrivalAlt"),
                        loading: "lazy",
                        decoding: "async"
                    })
                }), a.length > 0 ? (0, t.jsx)("ul", {
                    className: U.default.venueList,
                    children: a.map(e => (0, t.jsxs)("li", {
                        className: `${U.default.venue} rv`,
                        style: {
                            background: n.paper,
                            borderColor: (0, $.L)(n.gold, .45)
                        },
                        children: [(0, t.jsx)(eK.f, {
                            "aria-hidden": "true",
                            className: U.default.venuePin,
                            style: {
                                color: n.sindoor
                            }
                        }), (0, t.jsxs)("div", {
                            className: U.default.venueText,
                            children: [e.name ? (0, t.jsx)("p", {
                                className: U.default.venueName,
                                style: {
                                    fontFamily: o,
                                    color: n.ink
                                },
                                children: e.name
                            }) : null, e.address ? (0, t.jsx)("p", {
                                className: U.default.venueAddress,
                                style: {
                                    color: n.muted
                                },
                                children: e.address
                            }) : null, (0, t.jsx)("ul", {
                                className: U.default.venueEvents,
                                "aria-label": s("heldHere"),
                                children: e.events.map(e => {
                                    var a;
                                    return (0, t.jsxs)("li", {
                                        style: {
                                            borderColor: (0, $.L)(n.gold, .5),
                                            color: n.ink
                                        },
                                        children: [e.name, (null == (a = e.space) ? void 0 : a.trim()) ? ` \xb7 ${e.space.trim()}` : "", e.date ? (0, t.jsxs)("span", {
                                            style: {
                                                color: n.muted
                                            },
                                            children: [" · ", r.date(e.date, {
                                                day: "numeric",
                                                month: "short"
                                            })]
                                        }) : null]
                                    }, e.id)
                                })
                            })]
                        }), e.mapsHref ? (0, t.jsxs)(el, {
                            href: e.mapsHref,
                            external: !0,
                            className: U.default.venueAction,
                            ariaLabel: s("directionsTo", {
                                venue: e.name || e.address
                            }),
                            children: [(0, t.jsx)(eZ.f, {
                                "aria-hidden": "true"
                            }), " ", s("directions")]
                        }) : null]
                    }, e.key))
                }) : null, l && l.length > 0 ? (0, t.jsxs)("div", {
                    className: U.default.guideSteps,
                    children: [(0, t.jsx)("h3", {
                        className: `${U.default.subheading} rv`,
                        style: {
                            fontFamily: o,
                            color: n.goldLight
                        },
                        children: s("notesTitle")
                    }), (0, t.jsx)("ol", {
                        className: U.default.stepList,
                        style: {
                            "--path": (0, $.L)(n.goldLight, .5)
                        },
                        children: l.map((e, a) => (0, t.jsxs)("li", {
                            className: `${U.default.step} rv`,
                            children: [(0, t.jsx)("span", {
                                className: U.default.stepMedal,
                                style: {
                                    background: `radial-gradient(circle at 35% 30%, ${n.goldLight}, ${n.gold} 55%, ${n.goldDeep})`,
                                    color: n.burgundyDeep
                                },
                                "aria-hidden": "true",
                                children: (0, t.jsx)(e7.f, {})
                            }), (0, t.jsxs)("div", {
                                children: [(0, t.jsx)("p", {
                                    className: U.default.stepTitle,
                                    style: {
                                        fontFamily: o,
                                        color: n.light
                                    },
                                    children: e.title
                                }), e.body ? (0, t.jsx)("p", {
                                    className: U.default.stepBody,
                                    style: {
                                        color: (0, $.L)(n.light, .75)
                                    },
                                    children: e.body
                                }) : null]
                            })]
                        }, a))
                    })]
                }) : null]
            })]
        })
    }
    let e9 = e => (0, u.I)(() => e());

    function ae(e) {
        let {
            background: a,
            tones: l
        } = e;
        return (0, t.jsx)("div", {
            className: U.default.seam,
            style: {
                background: a,
                "--rule": (0, $.L)(l.goldLight, .7),
                "--lamp": l.lamplight
            },
            "aria-hidden": "true",
            children: (0, t.jsxs)("span", {
                className: U.default.seamRule,
                children: [(0, t.jsx)("i", {}), (0, t.jsxs)("span", {
                    className: U.default.seamLamp,
                    children: [(0, t.jsx)("span", {
                        className: U.default.seamGlow
                    }), (0, t.jsx)("img", {
                        src: (0, C._)("diya"),
                        width: C.J.diya.w,
                        height: C.J.diya.h,
                        alt: "",
                        loading: "lazy",
                        decoding: "async"
                    })]
                }), (0, t.jsx)("i", {})]
            })
        })
    }
    e.s(["DeviDarbarExperience", 0, function(e) {
        var a, F, L, S, T, O, R, q, H;
        let A, {
                data: P,
                theme: I,
                shareUrl: z
            } = e,
            G = (0, l.useMemo)(() => (0, $.f)(I), [I]),
            J = (0, l.useMemo)(() => (0, e1.f)(G.palette), [G.palette]),
            Y = (0, W.f)(),
            Z = (0, j.Y)(),
            X = (0, W.y)(),
            ee = (0, h.Q)(),
            ea = (0, h.L)(),
            et = (0, i.r)("inviteThemes.devi-darbar"),
            el = (0, w.f)(),
            {
                couple: es
            } = P,
            ei = (0, l.useMemo)(() => (0, B.d)(P.sections), [P.sections]),
            en = (0, l.useMemo)(() => (0, B.T)(P.events ?? []), [P.events]),
            eo = (0, l.useMemo)(() => (0, B.v)(en), [en]),
            ed = (0, l.useMemo)(() => (0, B.A)(en), [en]),
            ec = (0, l.useMemo)(() => (0, B.$)(en), [en]),
            eu = (0, l.useMemo)(() => (0, B.N)(en), [en]),
            eh = (0, l.useMemo)(() => (0, B.f)(P.story), [P.story]),
            em = (0, l.useMemo)(() => [...P.photos ?? []].sort((e, a) => (e.displayOrder ?? 0) - (a.displayOrder ?? 0)), [P.photos]),
            ep = (null == (a = es.partnerOneName) ? void 0 : a.trim()) || et("hero.partnerOne"),
            ef = (null == (F = es.partnerTwoName) ? void 0 : F.trim()) || et("hero.partnerTwo"),
            ey = `${ep} & ${ef}`,
            ev = ei.invocation ?? B.n,
            ex = (null == ec ? void 0 : ec.date) || (null == eu ? void 0 : eu.event.date) || "",
            ej = ex ? el.date(ex, {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric"
            }) : "",
            eb = ec ? [ec.city, ec.country].map(e => null == e ? void 0 : e.trim()).filter(Boolean)[0] ?? "" : "",
            ew = e => (0, d.v)(P.sections, e),
            eN = ew("hero"),
            ek = ew("family") && (0, n.i)(P.family),
            e$ = ew("story") && eh.length > 0,
            eW = ew("events") && en.length > 0,
            eF = ew("countdown") && null !== eu && !ea,
            eL = ew("gallery") && (em.length > 0 || ee),
            eS = ew("events") && ed.length > 0,
            eT = ew("rsvp") && P.rsvpSettings.enabled,
            eR = ew("hashtag") && !!(null == (S = P.hashtag) || null == (L = S.tag) ? void 0 : L.trim()),
            eq = ew("special-request") && (0, o.S)(P.specialRequest),
            eM = (0, y.useGifts)(),
            eE = ew("gifts") && !!((null == eM ? void 0 : eM.section) && eM.funds.length > 0),
            eD = (0, l.useMemo)(() => ({ ...G,
                palette: { ...G.palette,
                    accent: J.gold,
                    background: J.nightDeep
                }
            }), [G, J]),
            eH = ew("footer"),
            [eA, eP] = (0, l.useState)("closed"),
            eI = (0, m.usePersonalGuest)(),
            eB = ee && null !== eI,
            eU = (!ee || eB) && !(X && Y),
            ez = eU && "open" !== eA,
            eJ = X && ez && "closed" === eA,
            [eV, eK] = (0, l.useState)(0),
            eY = (0, l.useRef)(void 0);
        (0, l.useEffect)(() => {
            if (!eJ) return;
            let e = document.body.style.overflow;
            return document.body.style.overflow = "hidden", () => {
                document.body.style.overflow = e
            }
        }, [eJ]), (0, l.useEffect)(() => () => window.clearTimeout(eY.current), []);
        let eZ = (0, l.useSyncExternalStore)(e9, u.b, () => !1),
            eQ = !!(null == (T = P.music) ? void 0 : T.url) || eZ,
            [eX, e0] = (0, W.K)("local", "devi-darbar:sound", !1),
            e6 = !eQ && !ee;
        (0, l.useEffect)(() => {
            eQ && D()
        }, [eQ]);
        let e4 = (0, l.useCallback)(() => {
            let e = !eX;
            e0(e), e ? E() : D()
        }, [eX, e0]);
        (0, l.useEffect)(() => {
            if (!e6 || !eX) return;
            let e = () => void E();
            return window.addEventListener("pointerdown", e, {
                once: !0,
                capture: !0
            }), window.addEventListener("keydown", e, {
                once: !0,
                capture: !0
            }), () => {
                window.removeEventListener("pointerdown", e, {
                    capture: !0
                }), window.removeEventListener("keydown", e, {
                    capture: !0
                })
            }
        }, [eX, e6]), (0, l.useEffect)(() => () => D(), []);
        let e7 = e6 ? {
                on: eX,
                toggle: e4
            } : null,
            aa = (0, l.useCallback)(() => {
                requestAnimationFrame(() => {
                    let e = document.getElementById("devi-hero-title") ?? document.querySelector("#devi-invitation h2, main h2");
                    e && (e.hasAttribute("tabindex") || e.setAttribute("tabindex", "-1"), e.focus({
                        preventScroll: !0
                    }))
                })
            }, []),
            at = (0, l.useCallback)(() => {
                e6 && eX && M(), eP("leaving"), window.clearTimeout(eY.current), eY.current = window.setTimeout(() => {
                    eP("open"), aa()
                }, 1500)
            }, [eX, e6, aa]),
            al = (0, l.useCallback)(() => {
                window.clearTimeout(eY.current), eP("open"), aa()
            }, [aa]),
            as = (0, l.useCallback)(() => {
                window.scrollTo({
                    top: 0,
                    behavior: "instant"
                }), eK(e => e + 1), Y || ee && !eB || eP("closed")
            }, [Y, ee, eB]),
            ar = (0, l.useMemo)(() => {
                let e = [];
                return eN && e.push({
                    kind: "hero",
                    id: "devi-top",
                    label: et("nav.home")
                }), e.push({
                    kind: "hero",
                    id: "devi-invitation",
                    label: et("nav.invitation")
                }), e$ && e.push({
                    kind: "story",
                    id: "devi-story",
                    label: et("nav.story")
                }), eW && e.push({
                    kind: "events",
                    id: "devi-celebrations",
                    label: et("nav.celebrations")
                }), eL && e.push({
                    kind: "gallery",
                    id: "devi-gallery",
                    label: et("nav.gallery")
                }), eS && e.push({
                    kind: "rsvp",
                    id: "devi-venues",
                    label: et("nav.venues")
                }), eT && e.push({
                    kind: "rsvp",
                    id: "devi-rsvp",
                    label: et("nav.rsvp")
                }), eH && e.push({
                    kind: "footer",
                    id: "devi-closing",
                    label: et("nav.farewell")
                }), (0, c.f)(e, P.sections)
            }, [eN, e$, eW, eL, eS, eT, eH, P.sections, et]),
            ai = (0, l.useMemo)(() => ar.map(e => e.id), [ar]),
            an = (0, b.f)(ai),
            ao = (0, l.useRef)(null),
            ad = (0, l.useMemo)(() => ({
                theme: G,
                tones: J,
                reduce: Y,
                display: function(e) {
                    let [a, ...t] = e.split(",");
                    return [a, `"${V}"`, ...t].join(",")
                }(G.headingFont)
            }), [G, J, Y]);
        return (0, t.jsx)(Q.Provider, {
            value: ad,
            children: (0, t.jsxs)("div", {
                className: U.default.root,
                "data-motion": Z ? "lite" : void 0,
                style: {
                    "--ivory": J.ivory,
                    "--paper": J.paper,
                    "--ink": J.ink,
                    "--muted": J.muted,
                    "--sindoor": J.sindoor,
                    "--gold": J.gold,
                    "--gold-light": J.goldLight,
                    "--gold-deep": J.goldDeep,
                    "--night": J.night,
                    "--focus": J.goldLight,
                    background: J.ivory,
                    color: J.ink,
                    fontFamily: G.bodyFont
                },
                children: [(0, t.jsx)(k.f, {
                    families: [null == I ? void 0 : I.fonts.heading, null == I ? void 0 : I.fonts.body, V, K]
                }), (0, t.jsx)(C.g, {
                    gate: eU
                }), (null == (O = ar[0]) ? void 0 : O.id) === "devi-top" ? (0, t.jsx)(_.f, {
                    opening: J.burgundyDeep,
                    paper: J.ivory,
                    until: ao
                }) : null, ez ? (0, t.jsx)(e5, {
                    one: ep,
                    two: ef,
                    names: ey,
                    invocation: ev,
                    dateLabel: ej,
                    placeLabel: eb,
                    leaving: "leaving" === eA,
                    sound: e7,
                    onEnter: at,
                    onSkip: al
                }, `gate-${eV}`) : null, (0, t.jsx)(x.f, {
                    background: `linear-gradient(90deg, ${J.goldDeep}, ${J.goldLight}, ${J.sindoor})`
                }), (0, t.jsx)("main", {
                    inert: eJ,
                    className: U.default.journey,
                    children: (R = [eN && {
                        key: "hero",
                        kind: "hero",
                        top: J.burgundyDeep,
                        bottom: J.burgundyDeep,
                        node: (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)(eC, {
                                invocation: ev,
                                one: ep,
                                two: ef,
                                dateLabel: ej,
                                placeLabel: eb,
                                scheduleTarget: eW ? "devi-celebrations" : null,
                                rsvpTarget: eT ? "devi-rsvp" : null,
                                play: !ez || "leaving" === eA,
                                greet: Y
                            }, `hero-${eV}`), (0, t.jsx)("div", {
                                ref: ao,
                                "aria-hidden": "true"
                            })]
                        })
                    }, {
                        key: "invitation",
                        kind: "hero",
                        top: J.burgundyDeep,
                        bottom: J.burgundyDeep,
                        arrive: "self",
                        node: (0, t.jsx)(eO, {
                            verse: ei.verse ?? "mangala",
                            couple: es,
                            family: ek ? P.family : void 0,
                            ceremony: ec,
                            one: ep,
                            two: ef
                        })
                    }, e$ && {
                        key: "story",
                        kind: "story",
                        top: J.night,
                        bottom: J.nightDeep,
                        node: (0, t.jsx)(e8, {
                            milestones: eh
                        })
                    }, eW && {
                        key: "celebrations",
                        kind: "events",
                        top: J.burgundyDeep,
                        bottom: J.burgundyDeep,
                        node: (0, t.jsx)(e2, {
                            days: eo,
                            total: en.length
                        })
                    }, eF && eu && {
                        key: "countdown",
                        kind: "countdown",
                        top: J.night,
                        bottom: J.night,
                        node: (0, t.jsx)(eg, {
                            event: eu.event,
                            at: eu.at
                        })
                    }, eL && {
                        key: "gallery",
                        kind: "gallery",
                        top: J.burgundyDeep,
                        bottom: J.burgundyDeep,
                        node: (0, t.jsx)(e_, {
                            photos: em,
                            emptyPreview: ee
                        })
                    }, eS && {
                        key: "venues",
                        kind: "rsvp",
                        top: J.twilight,
                        bottom: J.nightDeep,
                        node: (0, t.jsx)(e3, {
                            venues: ed,
                            notes: ei.guestNotes
                        })
                    }, eT && {
                        key: "rsvp",
                        kind: "rsvp",
                        top: J.twilight,
                        bottom: J.nightDeep,
                        node: (0, t.jsx)(eG, {
                            slug: P.slug,
                            events: en,
                            settings: P.rsvpSettings
                        })
                    }, eq && {
                        key: "special-request",
                        kind: "special-request",
                        top: J.nightDeep,
                        bottom: J.nightDeep,
                        node: (0, t.jsx)("div", {
                            className: "flex justify-center px-6 py-20 sm:py-24",
                            style: {
                                background: J.nightDeep
                            },
                            children: (0, t.jsx)(g.SpecialRequestSection, {
                                specialRequest: P.specialRequest,
                                theme: eD,
                                variant: "panel"
                            })
                        })
                    }, eE && {
                        key: "gifts",
                        kind: "gifts",
                        top: J.nightDeep,
                        bottom: J.nightDeep,
                        node: (0, t.jsx)("div", {
                            className: "flex justify-center px-6 py-20 sm:py-24",
                            style: {
                                background: J.nightDeep
                            },
                            children: (0, t.jsx)(v.f, {
                                theme: eD,
                                variant: "panel"
                            })
                        })
                    }, eH && {
                        key: "closing",
                        kind: "footer",
                        top: J.nightDeep,
                        bottom: J.ivory,
                        node: (0, t.jsx)(er, {
                            invocation: ev,
                            one: ep,
                            two: ef,
                            dateLabel: ej,
                            thankYou: ei.thankYou ?? et("closing.thankYou"),
                            events: en,
                            ceremony: ec,
                            hashtag: eR ? P.hashtag : void 0,
                            shareUrl: z,
                            shareSettings: P.shareSettings,
                            watermarkEnabled: P.watermarkEnabled,
                            onReplay: as,
                            sound: e7
                        })
                    }, !eH && (eR || P.watermarkEnabled) && {
                        key: "coda",
                        kind: "footer",
                        top: J.ivory,
                        bottom: J.ivory,
                        node: (0, t.jsxs)("div", {
                            className: U.default.coda,
                            style: {
                                background: J.ivory
                            },
                            children: [eR ? (0, t.jsx)(f.f, {
                                hashtag: P.hashtag,
                                theme: G,
                                variant: "panel"
                            }) : null, P.watermarkEnabled ? (0, t.jsx)("p", {
                                id: "invite-watermark",
                                className: U.default.codaMark,
                                children: (0, t.jsx)("a", {
                                    href: "/",
                                    target: "_blank",
                                    rel: "noopener",
                                    style: {
                                        color: J.muted
                                    },
                                    children: (0, t.jsx)(N.LocalizedWatermarkText, {})
                                })
                            }) : null]
                        })
                    }], q = P.sections, H = J, (A = (0, c.f)(R.filter(e => !!e), q)).map((e, a) => {
                        let s = A[a - 1],
                            r = null;
                        if (s && "self" !== e.arrive) {
                            let a = s.bottom,
                                l = e.top,
                                i = (0, $.c)(a),
                                n = (0, $.c)(l),
                                o = i && !n ? `${(0,$.j)(H.marigold,a,.55)} 30%, ${H.twilight} 66%` : !i && n ? `${H.twilight} 34%, ${H.dawn} 70%` : `${(0,$.j)((0,$.j)(a,l,.5),H.twilight,.45)} 50%`;
                            r = (0, t.jsx)(ae, {
                                background: `linear-gradient(180deg, ${a} 0%, ${o}, ${l} 100%)`,
                                tones: H
                            }, `seam-${e.key}`)
                        }
                        return (0, t.jsxs)(l.Fragment, {
                            children: [r, e.node]
                        }, e.key)
                    }))
                }), (0, t.jsxs)("div", {
                    inert: ez,
                    children: [(0, t.jsx)(p.f, {
                        pillClassName: e7 ? "max-w-[70vw] sm:max-w-max" : "max-w-[80vw] sm:max-w-max",
                        items: ar,
                        active: an,
                        pillStyle: {
                            background: (0, $.L)(J.paper, .92),
                            backdropFilter: "blur(12px)",
                            WebkitBackdropFilter: "blur(12px)",
                            border: `1px solid ${(0,$.L)(J.gold,.55)}`,
                            boxShadow: `0 18px 40px -24px ${(0,$.L)(J.nightDeep,.85)}`
                        },
                        getItemStyle: e => ({
                            background: e ? J.sindoor : "transparent",
                            color: e ? J.onSindoor : (0, $.L)(J.ink, .8)
                        })
                    }), e7 && !ez ? (0, t.jsxs)("button", {
                        type: "button",
                        onClick: e4,
                        "aria-pressed": eX,
                        "aria-label": eX ? et("audio.turnOff") : et("audio.turnOn"),
                        title: eX ? et("audio.turnOff") : et("audio.turnOn"),
                        className: U.default.soundButton,
                        style: {
                            background: (0, $.L)(J.night, .82),
                            color: J.goldLight,
                            borderColor: (0, $.L)(J.goldLight, .45)
                        },
                        children: [eX ? (0, t.jsx)(s.f, {
                            "aria-hidden": "true"
                        }) : (0, t.jsx)(r.f, {
                            "aria-hidden": "true"
                        }), eX ? (0, t.jsx)("span", {
                            className: U.default.soundWave,
                            "aria-hidden": "true"
                        }) : null]
                    }) : null]
                })]
            })
        })
    }], 847033)
}, 540208, e => {
    e.v({
        alcoveButton: "lTm1CW_alcoveButton",
        alcoveCaption: "lTm1CW_alcoveCaption",
        alcoveFrame: "lTm1CW_alcoveFrame",
        alcoveImg: "lTm1CW_alcoveImg",
        alcoveLamp: "lTm1CW_alcoveLamp",
        alcovePhoto: "lTm1CW_alcovePhoto",
        altarGlow: "lTm1CW_altarGlow",
        altarLine: "lTm1CW_altarLine",
        altarNiche: "lTm1CW_altarNiche",
        altarPhoto: "lTm1CW_altarPhoto",
        altarWindow: "lTm1CW_altarWindow",
        archEdge: "lTm1CW_archEdge",
        archLamp: "lTm1CW_archLamp",
        archLine: "lTm1CW_archLine",
        arrival: "lTm1CW_arrival",
        attendees: "lTm1CW_attendees",
        aureole: "lTm1CW_aureole",
        bandTop: "lTm1CW_bandTop",
        beams: "lTm1CW_beams",
        blessing: "lTm1CW_blessing",
        blessingInner: "lTm1CW_blessingInner",
        blessingPaper: "lTm1CW_blessingPaper",
        blessingText: "lTm1CW_blessingText",
        chapterHeading: "lTm1CW_chapterHeading",
        chapterSub: "lTm1CW_chapterSub",
        chapterTitle: "lTm1CW_chapterTitle",
        chip: "lTm1CW_chip",
        chipSet: "lTm1CW_chipSet",
        chips: "lTm1CW_chips",
        choice: "lTm1CW_choice",
        choiceMark: "lTm1CW_choiceMark",
        choiceSet: "lTm1CW_choiceSet",
        choiceText: "lTm1CW_choiceText",
        choices: "lTm1CW_choices",
        closing: "lTm1CW_closing",
        closingActions: "lTm1CW_closingActions",
        closingArt: "lTm1CW_closingArt",
        closingCopy: "lTm1CW_closingCopy",
        closingDate: "lTm1CW_closingDate",
        closingFoot: "lTm1CW_closingFoot",
        closingGroup: "lTm1CW_closingGroup",
        closingHashtag: "lTm1CW_closingHashtag",
        closingImg: "lTm1CW_closingImg",
        closingInvocation: "lTm1CW_closingInvocation",
        closingLabel: "lTm1CW_closingLabel",
        closingMark: "lTm1CW_closingMark",
        closingMedallion: "lTm1CW_closingMedallion",
        closingNames: "lTm1CW_closingNames",
        closingNight: "lTm1CW_closingNight",
        closingPanel: "lTm1CW_closingPanel",
        closingPetals: "lTm1CW_closingPetals",
        closingShade: "lTm1CW_closingShade",
        closingThanks: "lTm1CW_closingThanks",
        closingTitle: "lTm1CW_closingTitle",
        closingWeds: "lTm1CW_closingWeds",
        coda: "lTm1CW_coda",
        codaMark: "lTm1CW_codaMark",
        countdown: "lTm1CW_countdown",
        countdownArt: "lTm1CW_countdownArt",
        countdownCopy: "lTm1CW_countdownCopy",
        countdownDate: "lTm1CW_countdownDate",
        countdownImg: "lTm1CW_countdownImg",
        countdownLine: "lTm1CW_countdownLine",
        countdownShade: "lTm1CW_countdownShade",
        coverOval: "lTm1CW_coverOval",
        day: "lTm1CW_day",
        dayEvents: "lTm1CW_dayEvents",
        dayHeading: "lTm1CW_dayHeading",
        dayRule: "lTm1CW_dayRule",
        days: "lTm1CW_days",
        ddArchRise: "lTm1CW_ddArchRise",
        ddBeamDrift: "lTm1CW_ddBeamDrift",
        ddBellNudge: "lTm1CW_ddBellNudge",
        ddBellRing: "lTm1CW_ddBellRing",
        ddBellSway: "lTm1CW_ddBellSway",
        ddBreathe: "lTm1CW_ddBreathe",
        ddCopyAway: "lTm1CW_ddCopyAway",
        ddCue: "lTm1CW_ddCue",
        ddDawnBreak: "lTm1CW_ddDawnBreak",
        ddDawnDolly: "lTm1CW_ddDawnDolly",
        ddDolly: "lTm1CW_ddDolly",
        ddDraw: "lTm1CW_ddDraw",
        ddFade: "lTm1CW_ddFade",
        ddFall: "lTm1CW_ddFall",
        ddFlicker: "lTm1CW_ddFlicker",
        ddFloat: "lTm1CW_ddFloat",
        ddFlood: "lTm1CW_ddFlood",
        ddGateOut: "lTm1CW_ddGateOut",
        ddGlint: "lTm1CW_ddGlint",
        ddGlowIn: "lTm1CW_ddGlowIn",
        ddLampPass: "lTm1CW_ddLampPass",
        ddLift: "lTm1CW_ddLift",
        ddLight: "lTm1CW_ddLight",
        ddNightIn: "lTm1CW_ddNightIn",
        ddPaperRise: "lTm1CW_ddPaperRise",
        ddParallax: "lTm1CW_ddParallax",
        ddPartLeft: "lTm1CW_ddPartLeft",
        ddPartRight: "lTm1CW_ddPartRight",
        ddPlaqueLift: "lTm1CW_ddPlaqueLift",
        ddRing: "lTm1CW_ddRing",
        ddRipple: "lTm1CW_ddRipple",
        ddRise: "lTm1CW_ddRise",
        ddRiseSoft: "lTm1CW_ddRiseSoft",
        ddRuleDraw: "lTm1CW_ddRuleDraw",
        ddSeam: "lTm1CW_ddSeam",
        ddSeamOpen: "lTm1CW_ddSeamOpen",
        ddSettle: "lTm1CW_ddSettle",
        ddSmoke: "lTm1CW_ddSmoke",
        ddSpin: "lTm1CW_ddSpin",
        ddSway: "lTm1CW_ddSway",
        ddThrough: "lTm1CW_ddThrough",
        ddTurn: "lTm1CW_ddTurn",
        ddTwinkle: "lTm1CW_ddTwinkle",
        ddZoomIn: "lTm1CW_ddZoomIn",
        diyaGlow: "lTm1CW_diyaGlow",
        doneLamp: "lTm1CW_doneLamp",
        doorSeam: "lTm1CW_doorSeam",
        doorShade: "lTm1CW_doorShade",
        doorway: "lTm1CW_doorway",
        dot: "lTm1CW_dot",
        elders: "lTm1CW_elders",
        eldersLine: "lTm1CW_eldersLine",
        eldersSmall: "lTm1CW_eldersSmall",
        eldersTitle: "lTm1CW_eldersTitle",
        emptyHint: "lTm1CW_emptyHint",
        event: "lTm1CW_event",
        eventActions: "lTm1CW_eventActions",
        eventArt: "lTm1CW_eventArt",
        eventCard: "lTm1CW_eventCard",
        eventCount: "lTm1CW_eventCount",
        eventDecor: "lTm1CW_eventDecor",
        eventDescription: "lTm1CW_eventDescription",
        eventHalo: "lTm1CW_eventHalo",
        eventImg: "lTm1CW_eventImg",
        eventKicker: "lTm1CW_eventKicker",
        eventName: "lTm1CW_eventName",
        eyebrow: "lTm1CW_eyebrow",
        factDress: "lTm1CW_factDress",
        factMain: "lTm1CW_factMain",
        facts: "lTm1CW_facts",
        familyTree: "lTm1CW_familyTree",
        field: "lTm1CW_field",
        fieldHint: "lTm1CW_fieldHint",
        fieldLabel: "lTm1CW_fieldLabel",
        fieldRow: "lTm1CW_fieldRow",
        formError: "lTm1CW_formError",
        gallery: "lTm1CW_gallery",
        gate: "lTm1CW_gate",
        gateBell: "lTm1CW_gateBell",
        gateBeyond: "lTm1CW_gateBeyond",
        gateBeyondImg: "lTm1CW_gateBeyondImg",
        gateControl: "lTm1CW_gateControl",
        gateControls: "lTm1CW_gateControls",
        gateDiya: "lTm1CW_gateDiya",
        gateEnter: "lTm1CW_gateEnter",
        gateFlood: "lTm1CW_gateFlood",
        gateFrame: "lTm1CW_gateFrame",
        gateLeaving: "lTm1CW_gateLeaving",
        gatePetals: "lTm1CW_gatePetals",
        gateStage: "lTm1CW_gateStage",
        guide: "lTm1CW_guide",
        guideBody: "lTm1CW_guideBody",
        guideSteps: "lTm1CW_guideSteps",
        hero: "lTm1CW_hero",
        heroActions: "lTm1CW_heroActions",
        heroArt: "lTm1CW_heroArt",
        heroCopy: "lTm1CW_heroCopy",
        heroGuest: "lTm1CW_heroGuest",
        heroImg: "lTm1CW_heroImg",
        heroInvites: "lTm1CW_heroInvites",
        heroInvocation: "lTm1CW_heroInvocation",
        heroNames: "lTm1CW_heroNames",
        heroPetals: "lTm1CW_heroPetals",
        heroSanctum: "lTm1CW_heroSanctum",
        heroScrim: "lTm1CW_heroScrim",
        heroWeds: "lTm1CW_heroWeds",
        heroWhen: "lTm1CW_heroWhen",
        honeypot: "lTm1CW_honeypot",
        invAmp: "lTm1CW_invAmp",
        invCouple: "lTm1CW_invCouple",
        invDate: "lTm1CW_invDate",
        invHosts: "lTm1CW_invHosts",
        invLabel: "lTm1CW_invLabel",
        invName: "lTm1CW_invName",
        invParents: "lTm1CW_invParents",
        invPerson: "lTm1CW_invPerson",
        invRequest: "lTm1CW_invRequest",
        invTime: "lTm1CW_invTime",
        invVenue: "lTm1CW_invVenue",
        invWhen: "lTm1CW_invWhen",
        journey: "lTm1CW_journey",
        lamp: "lTm1CW_lamp",
        lampArch: "lTm1CW_lampArch",
        lampFlameGlow: "lTm1CW_lampFlameGlow",
        lampNumber: "lTm1CW_lampNumber",
        lampRail: "lTm1CW_lampRail",
        lampTabs: "lTm1CW_lampTabs",
        lampsArch: "lTm1CW_lampsArch",
        leaf: "lTm1CW_leaf",
        leafLeft: "lTm1CW_leafLeft",
        leafRight: "lTm1CW_leafRight",
        lotusRule: "lTm1CW_lotusRule",
        medallion: "lTm1CW_medallion",
        midnight: "lTm1CW_midnight",
        mirrorRing: "lTm1CW_mirrorRing",
        nightCard: "lTm1CW_nightCard",
        nightCount: "lTm1CW_nightCount",
        nightMeta: "lTm1CW_nightMeta",
        nightNote: "lTm1CW_nightNote",
        nightScene: "lTm1CW_nightScene",
        nightSteps: "lTm1CW_nightSteps",
        nightTitle: "lTm1CW_nightTitle",
        nights: "lTm1CW_nights",
        nightsBody: "lTm1CW_nightsBody",
        nowrap: "lTm1CW_nowrap",
        paperRise: "lTm1CW_paperRise",
        petal: "lTm1CW_petal",
        petals: "lTm1CW_petals",
        pill: "lTm1CW_pill",
        pillSolid: "lTm1CW_pillSolid",
        pillar: "lTm1CW_pillar",
        pillarLeft: "lTm1CW_pillarLeft",
        pillarRight: "lTm1CW_pillarRight",
        plaque: "lTm1CW_plaque",
        plaqueDate: "lTm1CW_plaqueDate",
        plaqueGuest: "lTm1CW_plaqueGuest",
        plaqueInvites: "lTm1CW_plaqueInvites",
        plaqueInvocation: "lTm1CW_plaqueInvocation",
        plaqueMedallion: "lTm1CW_plaqueMedallion",
        plaqueNames: "lTm1CW_plaqueNames",
        plaqueWeds: "lTm1CW_plaqueWeds",
        plate: "lTm1CW_plate",
        plateLabel: "lTm1CW_plateLabel",
        plateNumber: "lTm1CW_plateNumber",
        plates: "lTm1CW_plates",
        privacy: "lTm1CW_privacy",
        rangoli: "lTm1CW_rangoli",
        rangoliDot: "lTm1CW_rangoliDot",
        ripple: "lTm1CW_ripple",
        rise: "lTm1CW_rise",
        root: "lTm1CW_root",
        roundButton: "lTm1CW_roundButton",
        roundel: "lTm1CW_roundel",
        roundelDisc: "lTm1CW_roundelDisc",
        roundelHalo: "lTm1CW_roundelHalo",
        roundelRangoli: "lTm1CW_roundelRangoli",
        rsvp: "lTm1CW_rsvp",
        rsvpCard: "lTm1CW_rsvpCard",
        rsvpDone: "lTm1CW_rsvpDone",
        rsvpForm: "lTm1CW_rsvpForm",
        rsvpGreeting: "lTm1CW_rsvpGreeting",
        rsvpStage: "lTm1CW_rsvpStage",
        samai: "lTm1CW_samai",
        samaiLeft: "lTm1CW_samaiLeft",
        samaiRight: "lTm1CW_samaiRight",
        schedule: "lTm1CW_schedule",
        scheduleHead: "lTm1CW_scheduleHead",
        scheduleRangoli: "lTm1CW_scheduleRangoli",
        scrollCue: "lTm1CW_scrollCue",
        seam: "lTm1CW_seam",
        seamGlow: "lTm1CW_seamGlow",
        seamLamp: "lTm1CW_seamLamp",
        seamRule: "lTm1CW_seamRule",
        smoke: "lTm1CW_smoke",
        soundButton: "lTm1CW_soundButton",
        soundWave: "lTm1CW_soundWave",
        spin: "lTm1CW_spin",
        srOnly: "lTm1CW_srOnly",
        stars: "lTm1CW_stars",
        step: "lTm1CW_step",
        stepBody: "lTm1CW_stepBody",
        stepList: "lTm1CW_stepList",
        stepMedal: "lTm1CW_stepMedal",
        stepTitle: "lTm1CW_stepTitle",
        stepper: "lTm1CW_stepper",
        steps: "lTm1CW_steps",
        stringLights: "lTm1CW_stringLights",
        subheading: "lTm1CW_subheading",
        submit: "lTm1CW_submit",
        sunBeams: "lTm1CW_sunBeams",
        swatch: "lTm1CW_swatch",
        swipeHint: "lTm1CW_swipeHint",
        toran: "lTm1CW_toran",
        venue: "lTm1CW_venue",
        venueAction: "lTm1CW_venueAction",
        venueAddress: "lTm1CW_venueAddress",
        venueEvents: "lTm1CW_venueEvents",
        venueList: "lTm1CW_venueList",
        venueName: "lTm1CW_venueName",
        venuePin: "lTm1CW_venuePin",
        venueText: "lTm1CW_venueText",
        verse: "lTm1CW_verse",
        verseLines: "lTm1CW_verseLines",
        viewer: "lTm1CW_viewer",
        viewerButton: "lTm1CW_viewerButton",
        viewerCaption: "lTm1CW_viewerCaption",
        viewerClose: "lTm1CW_viewerClose",
        viewerCount: "lTm1CW_viewerCount",
        viewerFigure: "lTm1CW_viewerFigure",
        viewerFrame: "lTm1CW_viewerFrame",
        viewerImg: "lTm1CW_viewerImg",
        viewerNext: "lTm1CW_viewerNext",
        viewerPreload: "lTm1CW_viewerPreload",
        viewerPrev: "lTm1CW_viewerPrev",
        wall: "lTm1CW_wall",
        wallItem: "lTm1CW_wallItem",
        wallTrack: "lTm1CW_wallTrack"
    })
}, 571852, e => {
    "use strict";
    var a = e.i(729176),
        t = e.i(244835),
        l = e.i(135416),
        s = e.i(686459),
        r = e.i(63152),
        i = e.i(463324),
        n = e.i(301444),
        o = e.i(541464),
        d = e.i(19269),
        c = e.i(600024),
        u = e.i(506563),
        h = e.i(738371),
        m = e.i(575198),
        p = e.i(396243),
        f = e.i(337863),
        g = e.i(301187),
        y = e.i(664857),
        v = e.i(443594),
        x = e.i(273292),
        j = e.i(846946),
        b = e.i(277908),
        w = e.i(387017),
        N = e.i(764351),
        k = e.i(48407),
        _ = e.i(254596),
        $ = e.i(926835),
        W = e.i(423088),
        C = e.i(187031),
        F = e.i(431817),
        L = e.i(735388),
        S = e.i(736642),
        T = e.i(230715),
        O = e.i(937769);

    function R(e) {
        let {
            photos: l,
            theme: s,
            captionColor: r,
            onOpen: i
        } = e, n = (0, g.r)("invite.gallery"), {
            palette: o
        } = s, d = (0, t.useRef)(null), c = l.length;
        (0, t.useEffect)(() => {
            let e, a = d.current;
            if (!a) return;
            let t = e => a.children[e],
                l = e => t(e).offsetLeft - (a.clientWidth - t(e).offsetWidth) / 2;
            a.scrollLeft = l(c);
            let s = () => {
                let e = t(c).offsetLeft - t(0).offsetLeft,
                    s = e / c / 2;
                a.scrollLeft < l(c) - s ? a.scrollLeft += e : a.scrollLeft > l(2 * c - 1) + s && (a.scrollLeft -= e)
            };
            if ("onscrollend" in window) return a.addEventListener("scrollend", s), () => a.removeEventListener("scrollend", s);
            let r = () => {
                clearTimeout(e), e = setTimeout(s, 150)
            };
            return a.addEventListener("scroll", r, {
                passive: !0
            }), () => {
                clearTimeout(e), a.removeEventListener("scroll", r)
            }
        }, [c]);
        let u = e => {
                let a = d.current,
                    t = null == a ? void 0 : a.children[0];
                if (!a || !t) return;
                let {
                    marginLeft: l,
                    marginRight: s
                } = getComputedStyle(t), r = t.offsetWidth + parseFloat(l) + parseFloat(s), i = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                a.scrollBy({
                    left: e * r,
                    behavior: i ? "smooth" : "auto"
                })
            },
            h = {
                background: o.surface,
                color: o.primary,
                borderColor: o.secondary
            };
        return (0, a.jsxs)("div", {
            className: O.default.carousel,
            style: {
                "--shadow": (0, p.L)(o.text, .35)
            },
            children: [(0, a.jsx)("ul", {
                ref: d,
                className: O.default.track,
                tabIndex: 0,
                "aria-label": n("carousel"),
                children: Array.from({
                    length: 3
                }, (e, t) => l.map((e, l) => {
                    let s = 1 === t;
                    return (0, a.jsxs)("li", {
                        className: O.default.slide,
                        "aria-hidden": !s || void 0,
                        children: [(0, a.jsx)("button", {
                            type: "button",
                            className: O.default.slidePhoto,
                            tabIndex: s ? void 0 : -1,
                            onClick: () => i(l),
                            children: (0, a.jsx)(F.default, {
                                src: e.url,
                                alt: s ? e.caption || n("photoAlt") : "",
                                fill: !0,
                                sizes: "(min-width: 768px) 500px, 60vw",
                                className: O.default.cover
                            })
                        }), e.caption ? (0, a.jsx)("p", {
                            className: O.default.slideCaption,
                            style: {
                                color: r
                            },
                            children: e.caption
                        }) : null]
                    }, `${t}-${e.publicId||l}`)
                }))
            }), (0, a.jsx)("button", {
                type: "button",
                className: `${O.default.carouselArrow} ${O.default.carouselPrev}`,
                style: h,
                "aria-label": n("previous"),
                onClick: () => u(-1),
                children: (0, a.jsx)(L.f, {
                    "aria-hidden": "true"
                })
            }), (0, a.jsx)("button", {
                type: "button",
                className: `${O.default.carouselArrow} ${O.default.carouselNext}`,
                style: h,
                "aria-label": n("next"),
                onClick: () => u(1),
                children: (0, a.jsx)(S.f, {
                    "aria-hidden": "true"
                })
            })]
        })
    }

    function q(e) {
        let {
            photos: l,
            theme: s,
            eyebrow: r,
            title: i,
            ink: n = {}
        } = e, o = (0, g.r)("invite.gallery"), d = r ?? o("eyebrow"), c = i ?? o("title"), {
            palette: u,
            headingFont: h,
            headingWeight: m
        } = s, f = (0, t.useId)(), y = (0, t.useMemo)(() => [...l].sort((e, a) => (e.displayOrder ?? 0) - (a.displayOrder ?? 0)), [l]), v = y.slice(0, 12), x = v.length >= 6, j = (0, t.useRef)(null), [b, w] = (0, t.useState)(0), N = e => {
            var a;
            w(e), null == (a = j.current) || a.showModal()
        }, k = (0, t.useCallback)(e => w(a => (a + e + y.length) % y.length), [y.length]), _ = y[b];
        return 0 === y.length ? null : (0, a.jsxs)("div", {
            className: O.default.root,
            children: [(0, a.jsxs)("section", {
                className: O.default.gallery,
                "aria-labelledby": f,
                style: {
                    "--shadow": (0, p.L)(u.text, .35),
                    "--hub-ground": n.hub
                },
                children: [(0, a.jsx)("div", {
                    className: O.default.ring,
                    children: (0, a.jsx)("ul", {
                        className: O.default.wheel,
                        "data-ring": x ? "full" : "fan",
                        children: v.map((e, t) => (0, a.jsx)("li", {
                            className: O.default.spoke,
                            style: {
                                "--slot": `${x?360/v.length*t:v.length>1?-70+140/(v.length-1)*t:0}deg`
                            },
                            children: (0, a.jsx)("button", {
                                type: "button",
                                className: O.default.wheelPhoto,
                                onClick: () => N(t),
                                children: (0, a.jsx)(F.default, {
                                    src: e.url,
                                    alt: e.caption || o("photoAlt"),
                                    fill: !0,
                                    sizes: "(min-width: 768px) 240px, 30vw",
                                    className: O.default.cover
                                })
                            })
                        }, e.publicId || t))
                    })
                }), (0, a.jsxs)("header", {
                    className: O.default.galleryHub,
                    children: [d ? (0, a.jsx)("p", {
                        className: O.default.galleryEyebrow,
                        style: {
                            color: n.eyebrow ?? u.accent
                        },
                        children: d
                    }) : null, (0, a.jsx)("h2", {
                        id: f,
                        className: O.default.galleryHeading,
                        style: {
                            fontFamily: h,
                            fontWeight: m ?? 600,
                            color: n.title ?? u.primary
                        },
                        children: c
                    })]
                }), (0, a.jsxs)("dialog", {
                    ref: j,
                    className: O.default.lightbox,
                    "aria-label": o("viewer"),
                    style: {
                        "--scrim": (0, p.L)(u.text, .92),
                        "--chrome": u.surface,
                        "--button": (0, p.L)(u.surface, .14)
                    },
                    onClick: e => {
                        e.target === e.currentTarget && e.currentTarget.close()
                    },
                    onKeyDown: e => {
                        "ArrowRight" === e.key ? k(1) : "ArrowLeft" === e.key && k(-1)
                    },
                    children: [_ ? (0, a.jsxs)("figure", {
                        className: O.default.lightboxFigure,
                        children: [(0, a.jsx)("div", {
                            className: O.default.lightboxFrame,
                            children: (0, a.jsx)(F.default, {
                                src: _.url,
                                alt: _.caption || o("photoAlt"),
                                fill: !0,
                                sizes: "100vw",
                                className: O.default.contain
                            })
                        }), (0, a.jsxs)("figcaption", {
                            className: O.default.lightboxCaption,
                            children: [_.caption ? (0, a.jsx)("span", {
                                children: _.caption
                            }) : null, (0, a.jsxs)("span", {
                                children: [b + 1, " / ", y.length]
                            })]
                        })]
                    }) : null, (0, a.jsx)("button", {
                        type: "button",
                        className: `${O.default.lightboxButton} ${O.default.lightboxClose}`,
                        "aria-label": o("close"),
                        onClick: () => {
                            var e;
                            return null == (e = j.current) ? void 0 : e.close()
                        },
                        children: (0, a.jsx)(T.X, {
                            "aria-hidden": "true"
                        })
                    }), y.length > 1 ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("button", {
                            type: "button",
                            className: `${O.default.lightboxButton} ${O.default.lightboxPrev}`,
                            "aria-label": o("previous"),
                            onClick: () => k(-1),
                            children: (0, a.jsx)(L.f, {
                                "aria-hidden": "true"
                            })
                        }), (0, a.jsx)("button", {
                            type: "button",
                            className: `${O.default.lightboxButton} ${O.default.lightboxNext}`,
                            "aria-label": o("next"),
                            onClick: () => k(1),
                            children: (0, a.jsx)(S.f, {
                                "aria-hidden": "true"
                            })
                        })]
                    }) : null]
                })]
            }), y.length >= 2 ? (0, a.jsx)(R, {
                photos: y,
                theme: s,
                captionColor: n.caption ?? u.muted,
                onOpen: N
            }) : null]
        })
    }

    function M(e) {
        let {
            src: t,
            portrait: l,
            scrim: s = 0,
            theme: r,
            children: i
        } = e, {
            palette: n
        } = r;
        return (0, a.jsxs)("section", {
            className: "relative isolate",
            style: {
                background: n.surface
            },
            children: [(0, a.jsxs)("div", {
                "aria-hidden": !0,
                className: "pointer-events-none sticky top-0 -z-10 -mb-[100vh] h-screen w-full select-none",
                style: {
                    backgroundColor: n.surface
                },
                children: [t ? (0, a.jsxs)("picture", {
                    children: [l ? (0, a.jsx)("source", {
                        media: "(max-width: 767px)",
                        srcSet: l
                    }) : null, (0, a.jsx)("img", {
                        src: t,
                        alt: "",
                        className: "absolute inset-0 h-full w-full object-cover"
                    })]
                }) : null, s > 0 ? (0, a.jsx)("div", {
                    className: "absolute inset-0",
                    style: {
                        background: `linear-gradient(to bottom, ${(0,p.L)(n.background,Math.min(1,s+.12))}, ${(0,p.L)(n.background,s)} 22%, ${(0,p.L)(n.background,s)} 78%, ${(0,p.L)(n.background,Math.min(1,s+.12))})`
                    }
                }) : null]
            }), (0, a.jsx)("div", {
                className: "relative mx-auto flex w-full max-w-3xl flex-col gap-10 px-5 py-24 sm:gap-14 sm:px-8 sm:py-32",
                children: i
            })]
        })
    }

    function E(e) {
        let {
            edge: t,
            fill: l,
            outer: s,
            inner: r,
            cusps: i
        } = e, n = 30 * ("top" === t), o = function(e, a, t) {
            let l = 100 / t,
                s = `M 0 ${e}`;
            for (let r = 0; r < t; r += 1) {
                let t = r * l;
                s += ` Q ${t+l/2} ${a} ${t+l} ${e}`
            }
            return s
        }(n, "top" === t ? 2 : 28, i), d = `${o} L 100 ${n} L 0 ${n} Z`, c = "top" === t ? 4 : -4;
        return (0, a.jsxs)("svg", {
            "aria-hidden": !0,
            viewBox: "0 0 100 30",
            preserveAspectRatio: "none",
            className: "absolute inset-x-0 block w-full",
            style: {
                height: 30,
                [t]: 0
            },
            children: [(0, a.jsx)("path", {
                d: d,
                fill: l
            }), (0, a.jsx)("path", {
                d: o,
                fill: "none",
                stroke: s,
                strokeWidth: 1.4,
                vectorEffect: "non-scaling-stroke"
            }), (0, a.jsx)("path", {
                d: o,
                fill: "none",
                stroke: r,
                strokeWidth: 1,
                vectorEffect: "non-scaling-stroke",
                transform: `translate(0 ${c})`
            })]
        })
    }

    function D(e) {
        let {
            theme: l,
            className: s = "",
            contentClassName: r = "px-7 py-9 text-center sm:px-12 sm:py-12",
            children: i
        } = e, {
            palette: n
        } = l, o = (0, t.useRef)(null), [d, c] = (0, t.useState)(13);
        return (0, t.useEffect)(() => {
            let e = o.current;
            if (!e) return;
            let a = new ResizeObserver(e => {
                let [a] = e, t = a.contentRect.width;
                t > 0 && c(Math.max(5, Math.round(t / 44)))
            });
            return a.observe(e), () => a.disconnect()
        }, []), (0, a.jsxs)("div", {
            ref: o,
            className: `relative ${s}`,
            style: {
                paddingTop: 30,
                paddingBottom: 30
            },
            children: [(0, a.jsx)(E, {
                edge: "top",
                fill: n.background,
                outer: n.accent,
                inner: n.primary,
                cusps: d
            }), (0, a.jsx)("div", {
                "aria-hidden": !0,
                className: "absolute inset-x-0",
                style: {
                    top: 29,
                    bottom: 29,
                    background: n.background,
                    borderLeft: `1.4px solid ${n.accent}`,
                    borderRight: `1.4px solid ${n.accent}`
                },
                children: (0, a.jsx)("span", {
                    className: "absolute inset-y-0",
                    style: {
                        left: 4,
                        right: 4,
                        borderLeft: `1px solid ${n.primary}`,
                        borderRight: `1px solid ${n.primary}`
                    }
                })
            }), (0, a.jsx)(E, {
                edge: "bottom",
                fill: n.background,
                outer: n.accent,
                inner: n.primary,
                cusps: d
            }), (0, a.jsx)("div", {
                className: `relative ${r}`,
                children: i
            })]
        })
    }

    function H(e) {
        let {
            strip: t,
            cornice: l,
            terrace: s,
            paper: r,
            theme: i,
            children: n
        } = e, o = r ?? i.palette.background, d = t ? t.width ?? "clamp(56px, 11vw, 132px)" : "0px", c = l ? l.height ?? "clamp(56px, 6.5vw, 104px)" : "0px", u = t ? `calc(${d} - 20px)` : "0px", h = s ? s.height ?? "clamp(124px, 14vw, 208px)" : "0px", m = (0, a.jsx)(A, {
            strip: t,
            cornice: l,
            terrace: s,
            stripW: d,
            corniceH: c,
            terraceH: h,
            bandInset: u
        }), p = `calc(${d} + 1rem)`, f = `calc(${c} + 2rem)`, g = `calc(${h} + 1rem)`;
        return (0, a.jsxs)("section", {
            className: "relative flex min-h-screen items-center justify-center overflow-hidden",
            style: {
                background: o
            },
            children: [m, (0, a.jsx)("div", {
                className: "relative z-10 flex w-full justify-center text-center",
                style: {
                    paddingLeft: p,
                    paddingRight: p,
                    paddingTop: f,
                    paddingBottom: g
                },
                children: (0, a.jsx)("div", {
                    className: "w-full max-w-[34ch] md:max-w-[46ch] lg:max-w-[56ch] xl:max-w-[62ch]",
                    children: n
                })
            })]
        })
    }

    function A(e) {
        let {
            strip: t,
            cornice: l,
            terrace: s,
            stripW: r,
            corniceH: i,
            terraceH: n,
            bandInset: o
        } = e, d = (null == t ? void 0 : t.mirrorRight) ?? !0;
        return (0, a.jsxs)("div", {
            "aria-hidden": !0,
            className: "pointer-events-none absolute inset-0 select-none",
            style: {
                zIndex: 30
            },
            children: [l ? (0, a.jsx)("div", {
                className: "absolute top-0",
                style: {
                    left: o,
                    right: o,
                    height: i,
                    backgroundImage: `url(${l.src})`,
                    backgroundSize: "auto 100%",
                    backgroundRepeat: "repeat-x",
                    backgroundPosition: "left top"
                }
            }) : null, s ? (0, a.jsxs)(a.Fragment, {
                children: [s.railSrc ? (0, a.jsx)("div", {
                    className: "absolute bottom-0",
                    style: {
                        left: o,
                        right: o,
                        height: `calc(${n} * ${s.railFraction??.45})`,
                        backgroundImage: `url(${s.railSrc})`,
                        backgroundSize: "auto 100%",
                        backgroundRepeat: "repeat-x",
                        backgroundPosition: "center bottom"
                    }
                }) : null, (0, a.jsx)("div", {
                    className: "absolute bottom-0",
                    style: {
                        left: o,
                        right: o,
                        height: n,
                        backgroundImage: `url(${s.src})`,
                        backgroundSize: "auto 100%",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center bottom"
                    }
                })]
            }) : null, t ? (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)("div", {
                    className: "absolute inset-y-0 left-0",
                    style: {
                        width: r,
                        backgroundImage: `url(${t.src})`,
                        backgroundSize: "100% auto",
                        backgroundRepeat: "repeat-y",
                        backgroundPosition: "left top"
                    }
                }), (0, a.jsx)("div", {
                    className: "absolute inset-y-0 right-0",
                    style: {
                        width: r,
                        backgroundImage: `url(${t.src})`,
                        backgroundSize: "100% auto",
                        backgroundRepeat: "repeat-y",
                        backgroundPosition: "left top",
                        transform: d ? "scaleX(-1)" : void 0
                    }
                })]
            }) : null]
        })
    }

    function P(e) {
        let {
            texture: t,
            tilePx: l,
            backdrop: s,
            background: r,
            theme: i,
            ornaments: n = [],
            className: o = "",
            id: d,
            children: c
        } = e, u = r ?? i.palette.background, h = t ? {
            backgroundImage: `url(${t})`,
            backgroundRepeat: "repeat",
            backgroundSize: l ? `${l}px` : void 0
        } : {};
        return (0, a.jsxs)("section", {
            id: d,
            className: `relative isolate overflow-hidden ${o}`,
            style: {
                backgroundColor: u,
                ...h
            },
            children: [s ? (0, a.jsxs)("picture", {
                className: "pointer-events-none absolute inset-0 select-none",
                children: [(0, a.jsx)("source", {
                    media: `(max-width: ${s.portraitMaxWidth??767}px)`,
                    srcSet: s.portrait
                }), (0, a.jsx)("img", {
                    src: s.wide,
                    alt: "",
                    "aria-hidden": !0,
                    decoding: "async",
                    loading: "lazy",
                    className: "absolute inset-0 h-full w-full object-cover",
                    style: {
                        objectPosition: s.position ?? "center"
                    }
                })]
            }) : null, n.map((e, t) => {
                var l;
                let s, r, i;
                return (0, a.jsx)("img", {
                    src: e.src,
                    alt: "",
                    "aria-hidden": !0,
                    decoding: "async",
                    loading: "lazy",
                    className: "pointer-events-none block max-w-none select-none",
                    style: (s = e.inset ?? "0px", r = (null == (l = e.corner) ? void 0 : l.startsWith("bottom")) ? {
                        bottom: s
                    } : {
                        top: s
                    }, i = e.corner ? e.corner.endsWith("right") ? {
                        right: s,
                        transform: e.mirror ? "scaleX(-1)" : void 0
                    } : {
                        left: s,
                        transform: e.mirror ? "scaleX(-1)" : void 0
                    } : {
                        left: "50%",
                        transform: `translateX(-50%)${e.mirror?" scaleX(-1)":""}`
                    }, {
                        position: "absolute",
                        width: e.width,
                        height: "auto",
                        opacity: e.opacity ?? 1,
                        ...r,
                        ...i
                    })
                }, `${t}-${e.src}-${e.corner??"hang"}`)
            }), (0, a.jsx)("div", {
                className: "relative",
                children: c
            })]
        })
    }

    function I(e) {
        let {
            art: l,
            layers: i = [],
            alt: n = "",
            scrim: o,
            background: d,
            theme: c,
            contentClassName: u = "flex items-center justify-center px-6 text-center",
            children: h
        } = e, m = (0, t.useRef)(null), p = (0, s.f)(), {
            scrollYProgress: f
        } = (0, r.f)({
            target: m,
            offset: ["start end", "end start"]
        }), [g, y] = l.wideSize, [v, x] = l.portraitSize, j = p ? 0 : l.drift ?? 0, b = {
            "--scene-portrait": `${v} / ${x}`,
            "--scene-wide": `${g} / ${y}`,
            background: d ?? c.palette.background
        }, w = Math.abs(j);
        return (0, a.jsxs)("div", {
            ref: m,
            className: "relative w-full overflow-hidden [aspect-ratio:var(--scene-portrait)] md:[aspect-ratio:var(--scene-wide)]",
            style: b,
            children: [(0, a.jsx)(U, {
                progress: f,
                drift: j,
                className: "absolute inset-x-0",
                style: {
                    top: `calc(${-w/2}vh)`,
                    height: `calc(100% + ${w}vh)`
                },
                children: (0, a.jsxs)("picture", {
                    children: [(0, a.jsx)("source", {
                        media: "(max-width: 767px)",
                        srcSet: l.portrait,
                        width: v,
                        height: x
                    }), (0, a.jsx)("img", {
                        src: l.wide,
                        alt: n,
                        width: g,
                        height: y,
                        decoding: "async",
                        loading: "lazy",
                        className: "absolute inset-0 h-full w-full object-cover"
                    })]
                })
            }), i.map((e, t) => (0, a.jsx)(B, {
                layer: e,
                progress: f,
                reduce: !!p
            }, `${t}-${e.src}`)), o ? (0, a.jsx)("div", {
                "aria-hidden": !0,
                className: "absolute inset-0",
                style: {
                    background: o,
                    zIndex: 40
                }
            }) : null, h ? (0, a.jsx)("div", {
                className: `absolute inset-0 ${u}`,
                style: {
                    zIndex: 50
                },
                children: h
            }) : null]
        })
    }

    function B(e) {
        let {
            layer: t,
            progress: l,
            reduce: s
        } = e, {
            src: r,
            drift: i = 0,
            z: n = 10,
            width: o,
            height: d,
            anchor: c = "bottom",
            offset: u = "0%",
            align: h = "center",
            inset: m = "0%",
            mirror: p,
            tile: f
        } = t, g = p ? "scaleX(-1)" : void 0;
        return (0, a.jsx)(U, {
            progress: l,
            drift: s ? 0 : i,
            className: "pointer-events-none absolute inset-0 select-none",
            style: {
                zIndex: n,
                display: "flex",
                alignItems: "top" === c ? "flex-start" : "flex-end",
                justifyContent: "left" === h ? "flex-start" : "right" === h ? "flex-end" : "center",
                paddingTop: "top" === c ? u : void 0,
                paddingBottom: "bottom" === c ? u : void 0,
                paddingLeft: "left" === h ? m : void 0,
                paddingRight: "right" === h ? m : void 0
            },
            children: f ? (0, a.jsx)("div", {
                "aria-hidden": !0,
                className: "w-full",
                style: {
                    height: d,
                    backgroundImage: `url(${r})`,
                    backgroundSize: "auto 100%",
                    backgroundRepeat: "repeat-x",
                    backgroundPosition: `left ${c}`,
                    transform: g
                }
            }) : (0, a.jsx)("img", {
                src: r,
                alt: "",
                "aria-hidden": !0,
                decoding: "async",
                loading: "lazy",
                className: "block max-w-none",
                style: {
                    transform: g,
                    width: o ?? "auto",
                    height: o ? "auto" : d
                }
            })
        })
    }

    function U(e) {
        let {
            progress: t,
            drift: s,
            className: r,
            style: n,
            children: o
        } = e, d = (0, i.f)(t, [0, 1], [`${s/2}vh`, `${-s/2}vh`]);
        return (0, a.jsx)(l.f.div, {
            className: r,
            style: { ...n,
                y: s ? d : 0
            },
            children: o
        })
    }
    var z = e.i(270291),
        G = e.i(219303);
    let J = () => () => {},
        V = "--pan-stage",
        K = `@keyframes pan-stage-layer {
  from { transform: translate(var(--pan-x, 0px), var(--pan-from, 0px)); }
  to   { transform: translate(var(--pan-x, 0px), var(--pan-to, 0px)); }
}
@keyframes pan-stage-exit {
  from { opacity: 1; transform: scale(1); }
  to   { opacity: 0; transform: scale(var(--pan-exit-scale, 1)); }
}`,
        Y = "contain 0% contain 100%",
        Z = e => e.id ?? e.src;

    function Q(e, a, t, l) {
        let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
            r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new Set,
            i = t[Z(e)] ?? 0;
        if (e.attachTo && !r.has(e.attachTo)) {
            let n = a.find(a => Z(a) === e.attachTo),
                o = t[e.attachTo] ?? 0;
            if (n && o && i) {
                let [d, c] = Q(n, a, t, l, s, new Set(r).add(Z(e))), u = o - i + (e.attachOffsetVh ?? 0) / 100 * l;
                return [d + u, c + u]
            }
        }
        let n = e.fromVh / 100 * l + (s[Z(e)] ?? 0);
        return "drift" === e.exit ? [n, (e.toVh ?? 0) / 100 * l] : [n, "park" === e.exit ? 1.02 * l - i : -(i + .12 * l)]
    }

    function X(e) {
        let {
            layers: n,
            heightVh: o = 500,
            heightVhMobile: d,
            background: c,
            stageBackground: u,
            children: h,
            contentZ: m = 20,
            contentFromVh: p = 0,
            contentToVh: f = -14,
            contentClassName: g,
            contentExit: y,
            contentExitMobile: v,
            ambient: x,
            ambientZ: j = 15,
            theme: b
        } = e, w = (0, t.useRef)(null), N = (0, t.useSyncExternalStore)(J, () => !0, () => !1), k = (0, s.f)() && N, [_, $] = (0, t.useState)({}), W = (0, t.useCallback)((e, a) => {
            $(t => t[e] === a ? t : { ...t,
                [e]: a
            })
        }, []), C = (0, t.useRef)(null), [{
            vh: F,
            vw: L
        }, S] = (0, t.useState)({
            vh: 0,
            vw: 0
        });
        (0, t.useEffect)(() => {
            let e = C.current;
            if (!e) return;
            let a = () => {
                let a = e.getBoundingClientRect();
                S(e => e.vh === a.height && e.vw === a.width ? e : {
                    vh: a.height,
                    vw: a.width
                })
            };
            a();
            let t = new ResizeObserver(a);
            return t.observe(e), () => t.disconnect()
        }, [k]);
        let {
            scrollYProgress: T
        } = (0, r.f)({
            target: w,
            offset: ["start start", "end end"]
        }), O = (0, z.f)(0), R = (0, G.f)(Y), q = L > 0 && L < 768, M = q ? d ?? o : o, E = (0, t.useMemo)(() => q ? n.map(e => e.mobile ? { ...e,
            ...e.mobile
        } : e) : n, [n, q]), D = (0, t.useMemo)(() => q ? E.filter(e => !e.mobileHidden) : E, [E, q]), H = (0, t.useMemo)(() => (function(e, a, t) {
            let l = {};
            for (let s of e) {
                if (!s.peekVh || !a[Z(s)] || !t) continue;
                let [r] = Q(s, e, a, t), i = Math.min(0, t - s.peekVh / 100 * t - r);
                if (0 === i) continue;
                let n = Z(function(e, a) {
                    let t = new Set,
                        l = e;
                    for (; l.attachTo && !t.has(Z(l));) {
                        t.add(Z(l));
                        let e = a.find(e => Z(e) === l.attachTo);
                        if (!e) break;
                        l = e
                    }
                    return l
                }(s, e));
                l[n] = Math.min(l[n] ?? 0, i)
            }
            return l
        })(E, _, F), [E, _, F]), A = (0, i.f)(T, [0, 1], [`${p}vh`, `${f}vh`]), P = R ? {
            zIndex: m,
            willChange: "transform",
            "--pan-from": `${p}vh`,
            "--pan-to": `${f}vh`,
            animation: "pan-stage-layer linear both",
            animationTimeline: V,
            animationRange: Y
        } : {
            y: A,
            zIndex: m
        }, I = q ? v ?? y : y, B = (null == I ? void 0 : I.from) ?? 0, U = (null == I ? void 0 : I.to) ?? 1, X = (null == y ? void 0 : y.scale) ?? 1, ea = (0, i.f)(T, [B, U], [1, 0]), et = (0, i.f)(T, [B, U], [1, X]), el = y ? R ? {
            willChange: "transform, opacity",
            "--pan-exit-scale": X,
            animation: "pan-stage-exit linear both",
            animationTimeline: V,
            animationRange: `contain ${100*B}% contain ${100*U}%`
        } : {
            opacity: ea,
            scale: et
        } : void 0;
        return k ? (0, a.jsx)("section", {
            ref: w,
            className: "relative isolate",
            style: {
                background: c ?? b.palette.background
            },
            children: (0, a.jsxs)("div", {
                ref: C,
                className: "relative h-screen w-full overflow-hidden",
                style: u ? {
                    background: u
                } : void 0,
                children: [D.map(e => (0, a.jsx)(ee, {
                    layer: e,
                    layers: E,
                    progress: O,
                    heights: _,
                    shifts: H,
                    vh: F,
                    vw: L,
                    onMeasure: W,
                    theme: b,
                    cssTimeline: !1
                }, Z(e))), h ? (0, a.jsx)("div", {
                    "data-pan-content": "",
                    style: {
                        zIndex: Math.max(m, ...D.map(e => e.z)) + 1
                    },
                    className: g ?? "absolute inset-x-0 top-1/4 px-6 text-center",
                    children: h
                }) : null]
            })
        }) : (0, a.jsxs)("div", {
            ref: w,
            className: "relative isolate",
            style: {
                height: `${M}vh`,
                background: c ?? b.palette.background,
                ...R ? {
                    viewTimelineName: V,
                    viewTimelineAxis: "block"
                } : null
            },
            children: [R ? (0, a.jsx)("style", {
                dangerouslySetInnerHTML: {
                    __html: K
                }
            }) : null, (0, a.jsxs)("div", {
                ref: C,
                className: "sticky top-0 -z-10 h-screen w-full overflow-hidden",
                style: u ? {
                    background: u
                } : void 0,
                children: [D.map(e => (0, a.jsx)(ee, {
                    layer: e,
                    layers: E,
                    progress: T,
                    heights: _,
                    shifts: H,
                    vh: F,
                    vw: L,
                    onMeasure: W,
                    theme: b,
                    cssTimeline: R
                }, Z(e))), x ? (0, a.jsx)("div", {
                    "aria-hidden": !0,
                    className: "pointer-events-none absolute inset-0",
                    style: {
                        zIndex: j
                    },
                    children: x
                }) : null, h ? (0, a.jsx)(l.f.div, {
                    style: P,
                    className: g ?? "absolute inset-x-0 top-1/4 px-6 text-center",
                    children: el ? (0, a.jsx)(l.f.div, {
                        style: el,
                        children: h
                    }) : h
                }) : null]
            })]
        })
    }

    function ee(e) {
        var s;
        let {
            layer: r,
            layers: n,
            progress: o,
            heights: d,
            shifts: c,
            vh: u,
            vw: h,
            onMeasure: m,
            theme: p,
            cssTimeline: f
        } = e, g = (0, t.useRef)(null), y = Z(r), [v, x] = (0, t.useState)(1);
        (0, t.useEffect)(() => {
            let e = g.current;
            if (!e) return;
            let a = () => m(y, e.getBoundingClientRect().height);
            a();
            let t = new ResizeObserver(a);
            return t.observe(e), () => t.disconnect()
        }, [y, m]);
        let [j, b] = Q(r, n, d, u, c), w = (0, i.f)(o, [0, 1], [j, b]), N = "left" !== r.align && "right" !== r.align, k = "left" === r.align ? {
            left: 0
        } : "right" === r.align ? {
            right: 0
        } : {
            left: "50%",
            ...f ? null : {
                x: "-50%"
            }
        }, _ = f ? {
            zIndex: r.z,
            willChange: "transform",
            "--pan-x": N ? "-50%" : "0px",
            "--pan-from": `${j}px`,
            "--pan-to": `${b}px`,
            animation: "pan-stage-layer linear both",
            animationTimeline: V,
            animationRange: Y
        } : {
            y: w,
            zIndex: r.z,
            willChange: "transform"
        };
        if (r.bandHeightVh) {
            let e = r.bandHeightVh / 100 * u * v,
                t = Math.max(5, e > 0 ? Math.ceil(h / e) + 2 : 5),
                s = t % 2 == 0 ? t + 1 : t,
                i = Math.floor(s / 2);
            return (0, a.jsx)(l.f.div, {
                ref: g,
                "aria-hidden": !0,
                "data-layer": y,
                className: "pointer-events-none absolute inset-x-0 top-0 flex select-none justify-center",
                style: {
                    height: `${r.bandHeightVh}vh`,
                    ..._
                },
                children: Array.from({
                    length: s
                }).map((e, t) => r.src ? (0, a.jsx)("img", {
                    src: r.src,
                    alt: "",
                    draggable: !1,
                    onLoad: t === i ? e => {
                        let a = e.currentTarget;
                        x(a.naturalWidth / a.naturalHeight)
                    } : void 0,
                    style: {
                        height: "100%",
                        width: "auto",
                        flex: "0 0 auto",
                        marginLeft: t ? -1 : 0,
                        transform: Math.abs(t - i) % 2 ? "scaleX(-1)" : void 0
                    }
                }, t) : (0, a.jsx)("div", {
                    style: {
                        height: "100%",
                        width: "40vw",
                        flex: "0 0 auto",
                        background: p.palette.secondary,
                        opacity: .5
                    }
                }, t))
            })
        }
        let $ = r.coverHeightVh ? {
            width: "100%",
            height: `${r.coverHeightVh}vh`,
            objectFit: "cover"
        } : {
            width: `min(${r.widthVh??80}vh, ${r.maxWidthVw??92}vw)`,
            height: "auto"
        };
        return r.src ? (0, a.jsx)(l.f.img, {
            ref: g,
            src: r.src,
            srcSet: r.srcSet,
            sizes: r.srcSet ? (s = r).coverHeightVh ? "100vw" : `${s.maxWidthVw??92}vw` : void 0,
            alt: r.alt ?? "",
            "aria-hidden": !r.alt,
            draggable: !1,
            "data-layer": y,
            className: "pointer-events-none absolute top-0 max-w-none select-none",
            style: { ...k,
                ...$,
                ..._
            }
        }) : (0, a.jsx)(l.f.div, {
            ref: g,
            "aria-hidden": !0,
            "data-layer": y,
            className: "pointer-events-none absolute top-0 flex select-none items-center justify-center text-xs font-semibold",
            style: { ...k,
                ...$,
                height: r.coverHeightVh ? `${r.coverHeightVh}vh` : "60vh",
                background: p.palette.muted,
                color: p.palette.background,
                opacity: .65,
                ..._
            },
            children: y || `z${r.z}`
        })
    }
    var ea = e.i(928723),
        et = e.i(132680),
        el = e.i(565617),
        es = e.i(231645),
        er = e.i(486113),
        ei = e.i(340793),
        en = e.i(520837),
        eo = e.i(880393);
    let ed = "inviteThemes.dravida-darshan";

    function ec(e) {
        let {
            event: t,
            time: r,
            theme: i
        } = e, o = (0, g.r)(ed), d = (0, y.f)(), {
            palette: c
        } = i, u = (0, s.f)(), h = c.accent, m = c.background, f = function(e, a) {
            if (!e) return null;
            let t = new Date(e);
            return Number.isNaN(t.getTime()) ? null : a ? a.dateParts(t) : (0, n.c)(t)
        }(t.date, d), v = !f && t.date ? t.date : "", x = (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsxs)("div", {
                className: "relative z-10",
                style: {
                    aspectRatio: `${eo.Z} / ${eo.Y}`
                },
                children: [(0, a.jsx)(eo.c, {
                    fill: m,
                    gold: h
                }), f ? (0, a.jsxs)("div", {
                    className: "absolute left-1/2 top-[60%] flex h-[4.5rem] w-[4.5rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full sm:h-20 sm:w-20",
                    style: {
                        background: c.primary,
                        boxShadow: `0 0 0 3px ${m}, 0 0 0 4px ${h}, 0 10px 24px -12px ${(0,p.L)(c.text,.6)}`
                    },
                    children: [(0, a.jsx)("span", {
                        className: "text-[1.9rem] leading-none sm:text-[2.2rem]",
                        style: {
                            fontFamily: i.headingFont,
                            fontWeight: i.headingWeight,
                            color: c.background
                        },
                        children: f.day
                    }), (0, a.jsx)("span", {
                        className: "mt-1 text-[0.55rem] uppercase tracking-[0.22em] sm:text-[0.6rem]",
                        style: {
                            color: c.secondary
                        },
                        children: f.month.slice(0, 3)
                    })]
                }) : null]
            }), (0, a.jsxs)("div", {
                className: "relative -mt-px rounded-b-[1.75rem] px-6 pb-8 pt-2 text-center [container-type:inline-size] sm:px-10 sm:pb-10",
                style: {
                    background: m,
                    borderStyle: "solid",
                    borderColor: h,
                    borderWidth: "0 1.2px 1.2px"
                },
                children: [(0, a.jsx)("span", {
                    "aria-hidden": !0,
                    className: "pointer-events-none absolute rounded-b-[1.4rem]",
                    style: {
                        top: 0,
                        left: `${100*eo.h}cqw`,
                        right: `${100*eo.h}cqw`,
                        bottom: `${100*eo.h}cqw`,
                        borderStyle: "solid",
                        borderColor: (0, p.L)(h, .45),
                        borderWidth: "0 1px 1px"
                    }
                }), (0, a.jsxs)("div", {
                    className: "relative",
                    style: {
                        color: c.text
                    },
                    children: [f ? (0, a.jsx)("p", {
                        className: "text-xs uppercase tracking-[0.3em]",
                        style: {
                            color: c.muted
                        },
                        children: f.weekday
                    }) : null, (0, a.jsx)("h3", {
                        className: "mt-3 text-[1.75rem] leading-tight sm:text-[2.1rem]",
                        style: {
                            fontFamily: i.headingFont,
                            fontWeight: i.headingWeight,
                            color: c.primary
                        },
                        children: t.name || o("events.fallbackName")
                    }), (0, a.jsx)(eo.o, {
                        color: h
                    }), (0, a.jsxs)("div", {
                        className: "mx-auto inline-grid max-w-full gap-3 text-left text-sm leading-snug",
                        children: [r || v ? (0, a.jsxs)("div", {
                            className: "flex gap-3",
                            children: [(0, a.jsx)("span", {
                                style: {
                                    color: h
                                },
                                children: (0, a.jsx)(eo.E, {
                                    children: (0, a.jsx)(eo.d, {})
                                })
                            }), (0, a.jsx)("p", {
                                children: [v, r].filter(Boolean).join(", ")
                            })]
                        }) : null, t.venueName || t.space || t.venueAddress ? (0, a.jsxs)("div", {
                            className: "flex gap-3",
                            children: [(0, a.jsx)("span", {
                                style: {
                                    color: h
                                },
                                children: (0, a.jsx)(eo.E, {
                                    children: (0, a.jsx)(eo.f, {})
                                })
                            }), (0, a.jsxs)("p", {
                                children: [t.venueName || t.space ? (0, a.jsx)("span", {
                                    className: "block font-medium",
                                    children: (0, ei.d)(t)
                                }) : null, t.venueAddress ? (0, a.jsx)("span", {
                                    className: "block opacity-75",
                                    children: t.venueAddress
                                }) : null]
                            })]
                        }) : null]
                    }), t.description ? (0, a.jsx)("p", {
                        className: "mx-auto mt-6 max-w-sm text-sm leading-relaxed opacity-80",
                        children: t.description
                    }) : null, (0, a.jsx)(en.f, {
                        event: t,
                        accent: h,
                        labelColor: c.muted,
                        className: "mt-6"
                    }), t.dressCode ? (0, a.jsxs)("p", {
                        className: "mx-auto mt-6 w-fit rounded-full px-4 py-1.5 text-xs",
                        style: {
                            background: (0, p.L)(h, .14),
                            color: c.primary
                        },
                        children: [(0, a.jsx)("span", {
                            className: "opacity-70",
                            children: o("events.dressCode")
                        }), " · ", t.dressCode]
                    }) : null, t.mapsUrl ? (0, a.jsxs)("a", {
                        href: t.mapsUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-opacity hover:opacity-90",
                        style: {
                            background: c.primary,
                            color: c.background,
                            boxShadow: `0 0 0 1px ${h}`
                        },
                        children: [(0, a.jsx)(eo.E, {
                            children: (0, a.jsx)(eo.f, {})
                        }), o("events.viewLocation")]
                    }) : null]
                })]
            })]
        }), j = "mx-auto w-full max-w-[26rem] sm:max-w-[28rem]", b = {
            filter: `drop-shadow(0 22px 30px ${(0,p.L)(c.text,.22)})`
        };
        return u ? (0, a.jsx)("article", {
            id: `event-${t.id}`,
            className: j,
            style: b,
            children: x
        }) : (0, a.jsx)(l.f.article, {
            id: `event-${t.id}`,
            className: j,
            style: b,
            initial: {
                opacity: 0,
                y: 34
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: !0,
                amount: .25,
                margin: "0px 0px -12% 0px"
            },
            transition: {
                duration: .65,
                ease: [.22, .61, .36, 1]
            },
            children: x
        })
    }

    function eu(e) {
        let {
            theme: t
        } = e, l = (0, g.r)(ed), {
            palette: s
        } = t;
        return (0, a.jsxs)("header", {
            className: "mx-auto w-fit max-w-full rounded-md px-6 py-6 text-center sm:px-12 sm:py-7",
            style: {
                background: s.primary,
                boxShadow: `inset 0 0 0 5px ${s.primary}, inset 0 0 0 6px ${(0,p.L)(s.accent,.8)}, 0 18px 40px -20px ${(0,p.L)(s.text,.6)}`
            },
            children: [(0, a.jsx)("p", {
                className: "text-[0.65rem] uppercase tracking-[0.4em] sm:text-xs",
                style: {
                    color: s.secondary
                },
                children: l("events.eyebrow")
            }), (0, a.jsx)("h2", {
                className: "mt-2 whitespace-nowrap text-[clamp(1.4rem,7.5vw,2rem)] leading-tight sm:text-[2.6rem]",
                style: {
                    fontFamily: t.headingFont,
                    fontWeight: t.headingWeight,
                    color: s.background
                },
                children: l("events.title")
            })]
        })
    }
    var eh = e.i(366471),
        em = e.i(380336),
        ep = e.i(147196),
        ef = e.i(410739);

    function eg(e) {
        let {
            theme: l
        } = e, s = (0, t.useRef)(null), {
            scrollYProgress: i
        } = (0, r.f)({
            target: s,
            offset: ["start end", "end end"]
        });
        return (0, a.jsxs)("div", {
            ref: s,
            className: "relative overflow-hidden",
            style: {
                background: l.palette.background
            },
            children: [(0, a.jsx)("div", {
                className: "relative z-10 px-6 pb-[clamp(140px,22vw,300px)] pt-24 sm:pt-28",
                children: (0, a.jsx)(j.f, { ...e,
                    variant: "panel"
                })
            }), er.n.ridges.map((e, t) => (0, a.jsx)(ey, {
                src: e.src,
                width: e.size[0],
                height: e.size[1],
                drift: e.drift,
                z: t,
                progress: i
            }, e.src))]
        })
    }

    function ey(e) {
        let {
            src: t,
            width: r,
            height: n,
            drift: o,
            z: d,
            progress: c
        } = e, u = (0, s.f)() ? 0 : o, h = (0, i.f)(c, [0, 1], [`${2*u}vh`, "0vh"]);
        return (0, a.jsx)(l.f.div, {
            "aria-hidden": !0,
            className: "pointer-events-none absolute inset-x-0 bottom-0 select-none",
            style: {
                y: u ? h : 0,
                zIndex: d
            },
            children: (0, a.jsx)("img", {
                src: t,
                alt: "",
                width: r,
                height: n,
                decoding: "async",
                loading: "lazy",
                className: "block w-full"
            })
        })
    }
    e.s(["DravidaDarshanExperience", 0, function(e) {
        var l;
        let {
            data: s,
            theme: r,
            shareUrl: i
        } = e, j = (0, g.r)("inviteThemes.dravida-darshan"), F = (0, em.useGuestGreeting)(), L = (0, ef.L)(), S = (0, y.f)(), T = (0, p.f)(r), {
            palette: O
        } = T, {
            couple: R,
            events: E,
            photos: A,
            story: B,
            hashtag: U,
            rsvpSettings: z,
            shareSettings: G
        } = s, J = (0, el.f)(), V = (0, t.useRef)(null), K = (0, f.f)(R), Y = [R.partnerOneName, R.partnerTwoName].filter(Boolean).join(" & ") || j("hero.coupleFallback"), Z = R.partnerOneName || j("hero.partnerOne"), Q = R.partnerTwoName || j("hero.partnerTwo"), ee = Math.max(1, ...`${Z} ${Q}`.split(/\s+/).map(e => e.length)), ei = `calc(clamp(3.4rem, 14vw, 7rem) * ${Math.min(1,7/ee)})`, en = (0, t.useMemo)(() => [...E].sort((e, a) => e.displayOrder - a.displayOrder), [E]), ed = (0, t.useMemo)(() => (0, n.Q)(E), [E]), ey = (0, ep.L)(), ev = (0, t.useMemo)(() => (function(e, a) {
            let t = e.find(e => e.date);
            if (!t) return "";
            let l = new Date(t.date);
            if (Number.isNaN(l.getTime())) return t.date;
            let {
                day: s,
                month: r,
                year: i
            } = a ? a.dateParts(l) : (0, n.c)(l);
            return [`${s} ${r} ${i}`, t.city].filter(Boolean).join(" · ")
        })(en, S), [en, S]), ex = {
            src: er.Z.pilaster
        }, ej = {
            src: er.Z.cornice
        }, eb = {
            src: er.Z.base,
            railSrc: er.Z.rail,
            ...er.O
        }, ew = (0, t.useMemo)(() => {
            var e;
            return (0, u.x)((null == (e = s.sections) ? void 0 : e.length) ? s.sections : o.n).filter(e => e.visible).sort((e, a) => e.order - a.order)
        }, [s.sections]), eN = (0, h.useGifts)(), ek = ew.some(e => "family" === e.kind) ? (0, k.v)(s.family) : void 0, e_ = (0, k.u)(ek, R), e$ = "mt-2 block text-xs normal-case leading-relaxed tracking-normal sm:text-sm";
        return (0, a.jsxs)("main", {
            style: {
                background: O.background,
                color: O.text
            },
            children: [(null == (l = ew[0]) ? void 0 : l.kind) === "hero" ? (0, a.jsx)(ea.f, {
                opening: es.O,
                paper: O.background,
                until: V
            }) : null, ew.map(e => (0, a.jsx)(t.Fragment, {
                children: (e => {
                    switch (e) {
                        case "hero":
                            return (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsxs)(X, {
                                    theme: T,
                                    layers: es.q,
                                    heightVh: 500,
                                    heightVhMobile: 175,
                                    background: es.M,
                                    stageBackground: es.S,
                                    contentZ: 20,
                                    contentFromVh: 0,
                                    contentToVh: -2,
                                    contentExit: {
                                        from: .1,
                                        to: .42,
                                        scale: .72
                                    },
                                    contentExitMobile: {
                                        from: .4,
                                        to: .86
                                    },
                                    contentClassName: "absolute inset-x-0 top-[26%] px-6 text-center sm:top-[20%]",
                                    ambient: (0, a.jsx)(v.f, {
                                        color: (0, p.L)(es.W, .7),
                                        reduce: !1
                                    }),
                                    ambientZ: 15,
                                    children: [F ? (0, a.jsxs)("div", {
                                        className: "mb-4 sm:mb-5",
                                        children: [(0, a.jsx)(eh.GuestGreeting, {
                                            className: "text-xl italic sm:text-3xl",
                                            style: {
                                                fontFamily: T.headingFont,
                                                color: "#ffffff",
                                                textShadow: "0 2px 18px rgba(0,40,80,.45)"
                                            }
                                        }), (0, a.jsx)("p", {
                                            className: "mt-1.5 text-[0.65rem] uppercase tracking-[0.42em] text-white/90 sm:mt-2 sm:text-xs",
                                            style: {
                                                textShadow: "0 1px 12px rgba(0,40,80,.45)",
                                                ...L
                                            },
                                            children: j("hero.cordiallyInvited")
                                        })]
                                    }) : null, (0, a.jsx)("h1", {
                                        "data-couple-name": !0,
                                        className: "tracking-[0.14em] text-balance sm:tracking-[0.18em]",
                                        style: {
                                            fontSize: ei,
                                            lineHeight: 1.06,
                                            fontWeight: T.headingWeight ?? 700,
                                            fontFamily: T.headingFont,
                                            color: "#ffffff",
                                            textShadow: "0 2px 24px rgba(0,40,80,.35)"
                                        },
                                        children: Z
                                    }), (0, a.jsx)("p", {
                                        className: "my-3 text-[0.7rem] uppercase tracking-[0.5em] text-white/90 sm:my-4 sm:text-sm",
                                        children: j("hero.weds")
                                    }), (0, a.jsx)("h1", {
                                        "data-couple-name": !0,
                                        className: "tracking-[0.14em] text-balance sm:tracking-[0.18em]",
                                        style: {
                                            fontSize: ei,
                                            lineHeight: 1.06,
                                            fontWeight: T.headingWeight ?? 700,
                                            fontFamily: T.headingFont,
                                            color: "#ffffff",
                                            textShadow: "0 2px 24px rgba(0,40,80,.35)"
                                        },
                                        children: Q
                                    }), ev ? (0, a.jsx)("p", {
                                        className: "mt-7 text-[0.65rem] uppercase tracking-[0.42em] text-white/80 sm:mt-9 sm:text-[0.72rem]",
                                        children: ev
                                    }) : null]
                                }), (0, a.jsx)("div", {
                                    ref: V,
                                    "aria-hidden": !0
                                }), (0, a.jsx)(H, {
                                    theme: T,
                                    strip: ex,
                                    cornice: ej,
                                    terrace: eb,
                                    paper: O.background,
                                    children: (0, a.jsxs)("div", {
                                        style: {
                                            color: O.text
                                        },
                                        children: [R.headline ? (0, a.jsx)("p", {
                                            className: "text-[0.55rem] uppercase tracking-[0.42em] opacity-70 sm:text-[0.65rem]",
                                            style: {
                                                color: O.muted
                                            },
                                            children: R.headline
                                        }) : null, (0, a.jsxs)("h2", {
                                            className: "mt-5 text-3xl leading-tight tracking-[0.14em] sm:mt-7 sm:text-5xl",
                                            style: {
                                                fontFamily: T.headingFont,
                                                fontWeight: T.headingWeight,
                                                color: O.primary
                                            },
                                            children: [R.partnerOneName || j("hero.partnerOne"), (0, a.jsx)(k.O, {
                                                as: "span",
                                                view: null == e_ ? void 0 : e_[0],
                                                className: e$,
                                                style: {
                                                    fontFamily: T.bodyFont,
                                                    fontWeight: 400,
                                                    color: O.muted
                                                }
                                            }), (0, a.jsx)("span", {
                                                className: "my-2 block text-sm tracking-[0.4em] opacity-60 sm:my-3",
                                                children: j("hero.and")
                                            }), R.partnerTwoName || j("hero.partnerTwo"), (0, a.jsx)(k.O, {
                                                as: "span",
                                                view: null == e_ ? void 0 : e_[1],
                                                className: e$,
                                                style: {
                                                    fontFamily: T.bodyFont,
                                                    fontWeight: 400,
                                                    color: O.muted
                                                }
                                            })]
                                        }), (0, a.jsx)(eo.g, {
                                            color: O.accent
                                        }), R.shortMessage ? (0, a.jsx)("p", {
                                            className: "text-xs leading-relaxed opacity-85 sm:text-sm",
                                            children: R.shortMessage
                                        }) : null, ev ? (0, a.jsx)("p", {
                                            className: "mt-6 text-[0.6rem] uppercase tracking-[0.4em] sm:mt-8 sm:text-xs",
                                            style: {
                                                color: O.muted
                                            },
                                            children: ev
                                        }) : null, (0, a.jsx)(k.R, {
                                            family: ek,
                                            couple: R,
                                            theme: T,
                                            className: "mt-8"
                                        })]
                                    })
                                }), (0, a.jsx)(I, {
                                    art: er.A.hall,
                                    layers: es.d,
                                    theme: T,
                                    background: O.background
                                })]
                            });
                        case "events":
                            return (0, a.jsx)(a.Fragment, {
                                children: (0, a.jsxs)(M, {
                                    src: er.T.wide,
                                    portrait: er.T.portrait,
                                    theme: T,
                                    children: [(0, a.jsx)(eu, {
                                        theme: T
                                    }), en.map(e => {
                                        let t = (0, et.M)(e, {
                                            viewerTimezone: J
                                        });
                                        return (0, a.jsx)(ec, {
                                            event: e,
                                            time: t,
                                            theme: T
                                        }, e.id)
                                    })]
                                })
                            });
                        case "story":
                            return B.enabled && B.content ? (0, a.jsx)(P, {
                                texture: er.d.maroon,
                                tilePx: er.d.maroonTilePx,
                                background: O.primary,
                                theme: T,
                                className: "flex justify-center px-4 pb-24 pt-[calc(min(16vw,_96px)_*_3.75_+_20px)] sm:px-10 sm:pb-32",
                                ornaments: [{
                                    src: er.d.mandalaCorner,
                                    width: "min(46vw, 300px)",
                                    corner: "top-left"
                                }, {
                                    src: er.d.lantern,
                                    width: "min(16vw, 96px)"
                                }],
                                children: (0, a.jsx)(D, {
                                    theme: T,
                                    className: "w-full max-w-2xl",
                                    contentClassName: "px-5 py-9 text-center sm:px-12 sm:py-12",
                                    children: (0, a.jsx)(C.f, {
                                        story: B,
                                        theme: T,
                                        variant: "panel"
                                    })
                                })
                            }) : null;
                        case "gallery":
                            return A.length > 0 ? (0, a.jsx)(P, {
                                texture: er.d.maroon,
                                tilePx: er.d.maroonTilePx,
                                background: O.primary,
                                theme: T,
                                className: "py-16 sm:py-24",
                                children: (0, a.jsx)("div", {
                                    className: "mx-auto w-full max-w-5xl",
                                    children: (0, a.jsx)(q, {
                                        photos: A,
                                        theme: T,
                                        ink: {
                                            title: O.background,
                                            eyebrow: O.secondary,
                                            caption: (0, p.L)(O.background, .8),
                                            hub: O.primary
                                        }
                                    })
                                })
                            }) : null;
                        case "countdown":
                            return ed && !ey ? (0, a.jsx)(I, {
                                art: er.W.relief,
                                theme: T,
                                background: O.background,
                                children: (0, a.jsx)(x.f, {
                                    targetMs: ed.getTime(),
                                    theme: T,
                                    variant: "panel"
                                })
                            }) : null;
                        case "family":
                            return (0, d.M)(s.family) && (0, d.i)(s.family) ? (0, a.jsx)("div", {
                                id: "family",
                                className: "flex justify-center px-4 py-20 sm:px-10 sm:py-28",
                                style: {
                                    background: O.background
                                },
                                children: (0, a.jsx)(D, {
                                    theme: T,
                                    className: "w-full max-w-3xl",
                                    contentClassName: "px-3 py-10 text-center sm:px-10 sm:py-14",
                                    children: (0, a.jsx)(N.f, {
                                        family: s.family,
                                        couple: R,
                                        theme: T,
                                        variant: "panel"
                                    })
                                })
                            }) : null;
                        case "hashtag":
                            var t;
                            return (null == U || null == (t = U.tag) ? void 0 : t.trim()) ? (0, a.jsxs)("div", {
                                className: "relative flex justify-center px-6 pb-40 pt-20 sm:px-10 sm:pb-44 sm:pt-24",
                                style: {
                                    background: O.background
                                },
                                children: [(0, a.jsx)(D, {
                                    theme: T,
                                    className: "w-full max-w-xl",
                                    children: (0, a.jsx)(_.f, {
                                        hashtag: U,
                                        theme: T,
                                        variant: "panel"
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "pointer-events-none absolute inset-x-0 bottom-0",
                                    "aria-hidden": "true",
                                    children: (0, a.jsx)(b.f, {
                                        theme: T,
                                        blooms: [O.secondary, O.primary, O.accent]
                                    })
                                })]
                            }) : null;
                        case "special-request":
                            return (0, c.S)(s.specialRequest) ? (0, a.jsx)("div", {
                                className: "flex justify-center px-6 py-20 sm:px-10 sm:py-24",
                                style: {
                                    background: O.background
                                },
                                children: (0, a.jsx)(W.SpecialRequestSection, {
                                    specialRequest: s.specialRequest,
                                    theme: T,
                                    variant: "panel"
                                })
                            }) : null;
                        case "gifts":
                            return (null == eN ? void 0 : eN.section) ? (0, a.jsx)("div", {
                                className: "flex justify-center px-6 py-20 sm:px-10 sm:py-24",
                                style: {
                                    background: O.background
                                },
                                children: (0, a.jsx)(m.f, {
                                    theme: T,
                                    variant: "panel"
                                })
                            }) : null;
                        case "rsvp":
                            return (0, a.jsx)(P, {
                                id: "rsvp",
                                backdrop: er.J.backdrop,
                                background: O.primary,
                                theme: T,
                                className: "flex justify-center px-3 pb-28 pt-28 sm:px-10 sm:pb-36 sm:pt-36",
                                children: (0, a.jsx)(D, {
                                    theme: T,
                                    className: "relative z-10 w-full max-w-xl",
                                    contentClassName: "px-5 py-8 text-center sm:px-12 sm:py-12",
                                    children: (0, a.jsx)($.f, {
                                        slug: s.slug,
                                        events: en,
                                        settings: z,
                                        theme: T,
                                        themeConfig: r,
                                        variant: "panel",
                                        form: (0, a.jsx)(w.f, {
                                            slug: s.slug,
                                            events: en.map(e => ({
                                                id: e.id,
                                                name: e.name
                                            })),
                                            settings: z,
                                            theme: T,
                                            voice: "temple",
                                            bare: !0
                                        })
                                    })
                                })
                            });
                        case "footer":
                            return (0, a.jsx)(eg, {
                                coupleName: Y,
                                initials: K,
                                shareUrl: i,
                                shareSettings: G,
                                watermarkEnabled: s.watermarkEnabled,
                                theme: T
                            });
                        default:
                            return null
                    }
                })(e.kind)
            }, e.id))]
        })
    }], 571852)
}, 917366, e => {
    "use strict";
    var a = e.i(729176),
        t = e.i(244835),
        l = e.i(301187),
        s = e.i(19269),
        r = e.i(600024),
        i = e.i(541464),
        n = e.i(621281),
        o = e.i(428509),
        d = e.i(147196),
        c = e.i(380336),
        u = e.i(85358),
        h = e.i(254596),
        m = e.i(423088),
        p = e.i(738371),
        f = e.i(575198),
        g = e.i(888531),
        y = e.i(158105),
        v = e.i(627655),
        x = e.i(643036),
        j = e.i(664857),
        b = e.i(692126),
        w = e.i(928723),
        N = e.i(396243),
        k = e.i(513271),
        _ = e.i(339746),
        $ = e.i(881206),
        W = e.i(317998),
        C = e.i(348892),
        F = e.i(611620),
        L = e.i(849517),
        S = e.i(477201),
        T = e.i(340793),
        O = e.i(843863),
        R = e.i(565617),
        q = e.i(83211),
        M = e.i(174405),
        E = e.i(149504),
        D = e.i(177014),
        H = e.i(956157),
        A = e.i(329633);
    let P = "Pinyon Script",
        I = "Tiro Devanagari Hindi",
        B = `"${P}", "${I}", cursive`,
        U = `"${I}", "Noto Serif Devanagari", serif`;

    function z(e) {
        return /[\u0900-\u097F]/.test(e) ? "hi" : void 0
    }
    let G = (0, t.createContext)(null);

    function J() {
        let e = (0, t.useContext)(G);
        if (!e) throw Error("Kashi chapters must render inside <KashiContext.Provider>");
        return e
    }

    function V(e) {
        let {
            id: t,
            eyebrow: l,
            title: s,
            light: r = !1,
            className: i = "",
            children: n
        } = e, {
            theme: o,
            tones: d
        } = J();
        return (0, a.jsxs)("header", {
            className: `${D.default.chapterTitle} ${i}`,
            children: [(0, a.jsx)("p", {
                className: D.default.eyebrow,
                style: {
                    color: r ? d.goldLight : d.goldDeep
                },
                children: l
            }), (0, a.jsx)("h2", {
                id: t,
                className: D.default.chapterHeading,
                style: {
                    fontFamily: o.headingFont,
                    fontWeight: o.headingWeight ?? 500,
                    color: r ? d.light : d.ink
                },
                children: s
            }), n]
        })
    }

    function K(e) {
        let {
            href: t,
            onClick: l,
            download: s,
            external: r = !1,
            variant: i = "solid",
            light: n = !1,
            ariaLabel: o,
            children: d
        } = e, {
            tones: c
        } = J(), u = "solid" === i ? {
            background: c.vermilion,
            color: c.onVermilion,
            borderColor: c.vermilion,
            outlineColor: c.gold
        } : {
            background: n ? (0, N.L)(c.light, .08) : (0, N.L)(c.paper, .6),
            color: n ? c.light : c.ink,
            borderColor: n ? (0, N.L)(c.goldLight, .55) : (0, N.L)(c.gold, .7),
            outlineColor: n ? c.goldLight : c.vermilion
        }, h = `${D.default.pill} ${"solid"===i?D.default.pillSolid:""}`;
        return t ? (0, a.jsx)("a", {
            href: t,
            className: h,
            style: u,
            "aria-label": o,
            download: s,
            ...r ? {
                target: "_blank",
                rel: "noopener noreferrer"
            } : {},
            children: d
        }) : (0, a.jsx)("button", {
            type: "button",
            onClick: l,
            className: h,
            style: u,
            "aria-label": o,
            children: d
        })
    }
    var Y = e.i(218689);

    function Z(e) {
        let {
            events: s
        } = e, r = (0, l.r)("inviteThemes.kashi-vishwanath.celebrations"), {
            tones: i
        } = J();
        return (0, a.jsxs)("section", {
            id: "kashi-celebrations",
            "aria-labelledby": "kashi-celebrations-title",
            className: D.default.celebrations,
            style: {
                background: `linear-gradient(180deg, ${i.ivory} 0%, ${(0,N.j)(i.marigold,i.ivory,.86)} 100%)`
            },
            children: [(0, a.jsx)(V, {
                id: "kashi-celebrations-title",
                eyebrow: r("eyebrow"),
                title: r("title"),
                children: (0, a.jsx)("p", {
                    className: D.default.chapterSub,
                    style: {
                        color: i.muted
                    },
                    children: r("subtitle")
                })
            }), (0, a.jsx)("div", {
                className: D.default.scenes,
                style: {
                    "--brocade-band": (0, k.L)("brocade-band")
                },
                children: s.map((e, l) => (0, a.jsxs)(t.Fragment, {
                    children: [l > 0 ? (0, a.jsx)("span", {
                        className: D.default.sceneSeam,
                        "aria-hidden": "true"
                    }) : null, (0, a.jsx)(Q, {
                        event: e,
                        index: l,
                        total: s.length
                    })]
                }, e.id))
            })]
        })
    }

    function Q(e) {
        var s;
        let {
            event: r,
            index: i,
            total: n
        } = e, o = (0, l.r)("inviteThemes.kashi-vishwanath.celebrations"), d = (0, j.f)(), c = (0, R.f)(), {
            theme: u,
            tones: h
        } = J(), [m, p] = (0, E.i)(.15), f = (0, M.O)(r), g = (0, M.j)(f), y = r.name || o("fallbackName"), v = (0, t.useRef)(null);
        (0, q._)(v, y);
        let x = k.A[f],
            b = k.J[x],
            w = g ? h.light : h.ink,
            P = g ? (0, N.L)(h.light, .78) : h.muted,
            I = g ? h.goldLight : h.vermilion,
            B = r.date ? d.date(r.date, {
                weekday: "long"
            }) : "",
            U = d.eventTimeOf(r, {
                viewerTimezone: c
            }),
            z = (0, T.d)(r),
            G = (0, T.x)(r),
            V = (0, M.J)(r),
            Z = (0, O.f)(r),
            Q = null == (s = r.dressCodeColor) ? void 0 : s.trim(),
            X = (0, S.B)(r);
        return (0, a.jsxs)("article", {
            ref: m,
            "data-reveal": p,
            "data-world": f,
            "data-side": i % 2 ? "right" : "left",
            "aria-labelledby": `kashi-event-${r.id}`,
            className: D.default.scene,
            style: {
                background: (0, Y.v)(f, h),
                "--ink": w,
                "--glow": "wedding" === f || "janeu" === f ? (0, N.L)(h.marigold, .55) : (0, N.L)(h.lamplight, .5),
                "--lights": h.lamplight,
                "--rays": (0, N.L)(h.light, .55),
                "--brocade-band": (0, k.L)("brocade-band"),
                "--brocade-field": (0, k.L)("brocade-field"),
                "--ripple": (0, N.L)(h.ganga, .18)
            },
            children: [(0, a.jsxs)("div", {
                className: D.default.sceneDecor,
                "aria-hidden": "true",
                children: [(0, a.jsx)("span", {
                    className: D.default.sceneWord,
                    style: {
                        fontFamily: u.headingFont,
                        WebkitTextStrokeColor: g ? (0, N.L)(h.goldLight, .34) : (0, N.L)(h.goldDeep, .3)
                    },
                    children: r.name || o("fallbackName")
                }), "mehndi" === f ? (0, a.jsx)(A.o, {
                    ink: (0, N.L)(h.goldDeep, .16),
                    className: D.default.henna
                }) : null, "sangeet" === f || "sehrabandi" === f || "reception" === f ? (0, a.jsx)("span", {
                    className: D.default.stringLights,
                    children: H.e.map((e, t) => (0, a.jsx)("i", {
                        style: {
                            left: `${e.left}%`,
                            top: `${e.top}%`,
                            animationDelay: `${e.delay}s`
                        }
                    }, t))
                }) : null]
            }), (0, a.jsxs)("div", {
                className: D.default.sceneInner,
                children: [(0, a.jsxs)("figure", {
                    className: D.default.sceneArt,
                    children: [(0, a.jsx)("span", {
                        className: D.default.sceneHalo,
                        "aria-hidden": "true"
                    }), (0, a.jsx)("img", {
                        src: (0, k._)(x),
                        alt: "",
                        "aria-hidden": "true",
                        width: b.w,
                        height: b.h,
                        loading: "lazy",
                        decoding: "async",
                        className: D.default.sceneImg
                    })]
                }), (0, a.jsxs)("div", {
                    className: `${D.default.sceneCard} rv`,
                    style: {
                        background: g ? (0, N.L)(h.nightDeep, .45) : (0, N.L)(h.paper, .86),
                        borderColor: g ? (0, N.L)(h.goldLight, .35) : (0, N.L)(h.gold, .45),
                        color: w
                    },
                    children: [(0, a.jsx)("p", {
                        className: D.default.sceneCount,
                        style: {
                            color: P
                        },
                        children: o("count", {
                            index: i + 1,
                            total: n
                        })
                    }), (0, a.jsx)("h3", {
                        ref: v,
                        id: `kashi-event-${r.id}`,
                        className: D.default.sceneName,
                        style: {
                            fontFamily: u.headingFont,
                            fontWeight: u.headingWeight ?? 500,
                            color: w
                        },
                        children: y
                    }), (0, a.jsxs)("dl", {
                        className: D.default.sceneFacts,
                        children: [B || U ? (0, a.jsxs)("div", {
                            children: [(0, a.jsxs)("dt", {
                                children: [(0, a.jsx)($.f, {
                                    "aria-hidden": "true",
                                    style: {
                                        color: I
                                    }
                                }), (0, a.jsx)("span", {
                                    className: D.default.srOnly,
                                    children: o("when")
                                })]
                            }), (0, a.jsxs)("dd", {
                                children: [B ? (0, a.jsx)("span", {
                                    className: D.default.sceneDate,
                                    children: B
                                }) : null, U ? (0, a.jsx)("span", {
                                    style: {
                                        color: P
                                    },
                                    children: U
                                }) : null]
                            })]
                        }) : null, z || G ? (0, a.jsxs)("div", {
                            children: [(0, a.jsxs)("dt", {
                                children: [(0, a.jsx)(C.f, {
                                    "aria-hidden": "true",
                                    style: {
                                        color: I
                                    }
                                }), (0, a.jsx)("span", {
                                    className: D.default.srOnly,
                                    children: o("where")
                                })]
                            }), (0, a.jsxs)("dd", {
                                children: [z ? (0, a.jsx)("span", {
                                    className: D.default.sceneDate,
                                    children: z
                                }) : null, G ? (0, a.jsx)("span", {
                                    style: {
                                        color: P
                                    },
                                    children: G
                                }) : null]
                            })]
                        }) : null, r.dressCode ? (0, a.jsxs)("div", {
                            children: [(0, a.jsxs)("dt", {
                                children: [(0, a.jsx)(L.f, {
                                    "aria-hidden": "true",
                                    style: {
                                        color: I
                                    }
                                }), (0, a.jsx)("span", {
                                    className: D.default.srOnly,
                                    children: o("dress")
                                })]
                            }), (0, a.jsxs)("dd", {
                                className: D.default.sceneDress,
                                children: [Q && /^#[0-9a-f]{3,8}$/i.test(Q) ? (0, a.jsx)("span", {
                                    className: D.default.swatch,
                                    style: {
                                        background: Q,
                                        borderColor: (0, N.L)(w, .4)
                                    },
                                    "aria-hidden": "true"
                                }) : null, (0, a.jsx)("span", {
                                    children: r.dressCode
                                })]
                            })]
                        }) : null, X.length > 0 ? (0, a.jsxs)("div", {
                            children: [(0, a.jsxs)("dt", {
                                children: [(0, a.jsx)(W.f, {
                                    "aria-hidden": "true",
                                    style: {
                                        color: I
                                    }
                                }), (0, a.jsx)("span", {
                                    className: D.default.srOnly,
                                    children: o("rituals")
                                })]
                            }), (0, a.jsx)("dd", {
                                children: (0, a.jsx)("ol", {
                                    className: D.default.steps,
                                    children: X.map(e => (0, a.jsxs)("li", {
                                        children: [(0, a.jsx)("span", {
                                            style: {
                                                color: I
                                            },
                                            children: e.time ? d.time(e.time) : ""
                                        }), e.title]
                                    }, e.id))
                                })
                            })]
                        }) : null]
                    }), r.description ? (0, a.jsx)("p", {
                        className: D.default.sceneDescription,
                        style: {
                            color: P
                        },
                        children: r.description
                    }) : null, V || Z ? (0, a.jsxs)("div", {
                        className: D.default.sceneActions,
                        children: [V ? (0, a.jsxs)(K, {
                            href: V,
                            external: !0,
                            variant: g ? "outline" : "solid",
                            light: g,
                            children: [(0, a.jsx)(F.f, {
                                "aria-hidden": "true"
                            }), " ", o("directions")]
                        }) : null, Z ? (0, a.jsxs)(K, {
                            href: Z,
                            external: !0,
                            variant: "outline",
                            light: g,
                            children: [(0, a.jsx)(_.f, {
                                "aria-hidden": "true"
                            }), " ", o("googleCalendar")]
                        }) : null]
                    }) : null]
                })]
            })]
        })
    }
    var X = e.i(157478),
        ee = e.i(642895);

    function ea(e) {
        var s;
        let {
            one: r,
            two: i,
            dateLabel: n,
            thankYou: o,
            events: d,
            ceremony: c,
            hashtag: u,
            shareUrl: m,
            shareSettings: p,
            watermarkEnabled: f,
            onReplay: y
        } = e, v = (0, l.r)("inviteThemes.kashi-vishwanath"), x = (0, l.r)("share"), {
            theme: j,
            tones: b,
            reduce: w
        } = J(), $ = (0, t.useRef)(null), W = (0, E.d)($), [C, F] = (0, E.i)(.12), L = `${r} & ${i}`, S = c ? (0, O.f)(c) : null, T = (0, t.useMemo)(() => (0, M.W)(d, L), [d, L]), R = (0, t.useMemo)(() => ({ ...j,
            palette: { ...j.palette,
                primary: b.goldLight,
                accent: b.goldLight,
                text: b.light,
                muted: (0, N.L)(b.light, .75),
                surface: b.night,
                background: b.nightDeep
            }
        }), [j, b]);
        return (0, a.jsxs)("footer", {
            ref: $,
            id: "kashi-farewell",
            "aria-labelledby": "kashi-closing-title",
            className: D.default.closing,
            "data-paused": W ? "false" : "true",
            style: {
                background: b.night,
                "--night": b.night,
                "--glow": (0, N.L)(b.lamplight, .6)
            },
            children: [(0, a.jsxs)("div", {
                ref: C,
                "data-reveal": F,
                className: D.default.closingCopy,
                children: [(0, a.jsx)("p", {
                    className: `${D.default.eyebrow} rv`,
                    style: {
                        color: b.goldLight
                    },
                    children: v("closing.eyebrow")
                }), (0, a.jsx)("h2", {
                    id: "kashi-closing-title",
                    className: `${D.default.closingTitle} rv`,
                    style: {
                        fontFamily: j.headingFont,
                        fontWeight: j.headingWeight ?? 500,
                        color: b.light
                    },
                    children: v("closing.title")
                }), (0, a.jsxs)("p", {
                    className: `${D.default.closingNames} rv`,
                    style: {
                        fontFamily: j.headingFont,
                        color: b.goldLight
                    },
                    children: [r, " ", (0, a.jsx)("span", {
                        style: {
                            fontFamily: B
                        },
                        children: v("hero.and")
                    }), " ", i]
                }), n ? (0, a.jsx)("p", {
                    className: `${D.default.closingDate} rv`,
                    style: {
                        color: (0, N.L)(b.light, .75)
                    },
                    children: n
                }) : null, (0, a.jsx)("p", {
                    className: `${D.default.closingThanks} rv`,
                    style: {
                        fontFamily: j.headingFont,
                        color: (0, N.L)(b.light, .92)
                    },
                    children: o
                }), S || T ? (0, a.jsxs)("div", {
                    className: `${D.default.closingGroup} rv`,
                    children: [(0, a.jsx)("p", {
                        className: D.default.closingLabel,
                        style: {
                            color: (0, N.L)(b.light, .7)
                        },
                        children: v("closing.saveDates")
                    }), (0, a.jsxs)("div", {
                        className: D.default.closingActions,
                        children: [S ? (0, a.jsxs)(K, {
                            href: S,
                            external: !0,
                            variant: "outline",
                            light: !0,
                            children: [(0, a.jsx)(_.f, {
                                "aria-hidden": "true"
                            }), " ", v("closing.googleCalendar")]
                        }) : null, T ? (0, a.jsxs)(K, {
                            href: T,
                            download: (0, M._)(L),
                            variant: "outline",
                            light: !0,
                            children: [(0, a.jsx)(_.f, {
                                "aria-hidden": "true"
                            }), " ", v("closing.appleCalendar")]
                        }) : null]
                    })]
                }) : null, (0, a.jsxs)("div", {
                    className: `${D.default.closingPanel} rv`,
                    style: {
                        background: (0, N.L)(b.nightDeep, .55),
                        borderColor: (0, N.L)(b.goldLight, .25)
                    },
                    children: [(null == u || null == (s = u.tag) ? void 0 : s.trim()) ? (0, a.jsx)("div", {
                        className: D.default.closingHashtag,
                        children: (0, a.jsx)(h.f, {
                            hashtag: u,
                            theme: R,
                            variant: "inline"
                        })
                    }) : null, (0, a.jsx)("p", {
                        className: D.default.closingLabel,
                        style: {
                            color: (0, N.L)(b.light, .7)
                        },
                        children: x("heading")
                    }), (0, a.jsx)(ee.f, {
                        url: m,
                        title: L,
                        settings: p,
                        theme: R
                    }), (0, a.jsx)(A.D, {
                        gold: (0, N.L)(b.goldLight, .7),
                        flag: b.vermilion,
                        className: D.default.closingRule
                    }), (0, a.jsx)("div", {
                        className: D.default.closingActions,
                        "data-export-hide": !0,
                        children: (0, a.jsxs)(K, {
                            onClick: y,
                            variant: "outline",
                            light: !0,
                            children: [(0, a.jsx)(X.f, {
                                "aria-hidden": "true"
                            }), " ", v("closing.replay")]
                        })
                    })]
                })]
            }), (0, a.jsxs)("div", {
                className: D.default.closingArt,
                "aria-hidden": "true",
                children: [(0, a.jsx)(k.O, {
                    portrait: "closing-night-mobile",
                    landscape: "closing-night-desktop",
                    className: D.default.closingImg
                }), w ? null : H.I.map((e, t) => (0, a.jsxs)("span", {
                    className: D.default.diya,
                    style: {
                        left: `${e.left}%`,
                        bottom: `${e.bottom}%`,
                        width: `${e.size}%`,
                        animationDelay: `${e.delay}s`,
                        animationDuration: `${e.duration}s`
                    },
                    children: [(0, a.jsx)("img", {
                        src: (0, k._)("diya"),
                        alt: "",
                        width: k.J.diya.w,
                        height: k.J.diya.h,
                        loading: "lazy",
                        decoding: "async"
                    }), (0, a.jsx)("img", {
                        src: (0, k._)("diya"),
                        alt: "",
                        width: k.J.diya.w,
                        height: k.J.diya.h,
                        loading: "lazy",
                        decoding: "async",
                        className: D.default.diyaReflection
                    })]
                }, t))]
            }), f ? (0, a.jsx)("p", {
                id: "invite-watermark",
                className: D.default.closingMark,
                style: {
                    background: b.nightDeep
                },
                children: (0, a.jsx)("a", {
                    href: "/",
                    target: "_blank",
                    rel: "noopener",
                    style: {
                        color: (0, N.L)(b.light, .55)
                    },
                    children: (0, a.jsx)(g.LocalizedWatermarkText, {})
                })
            }) : (0, a.jsx)("div", {
                className: D.default.closingFoot,
                style: {
                    background: b.nightDeep
                },
                "aria-hidden": "true"
            })]
        })
    }
    var et = e.i(519942);

    function el(e) {
        let {
            event: s,
            at: r
        } = e, i = (0, l.r)("inviteThemes.kashi-vishwanath.countdown"), n = (0, l.r)("invite.countdown"), o = (0, j.f)(), d = (0, R.f)(), {
            theme: c,
            tones: u
        } = J(), h = (0, et.f)(r.getTime()), m = (0, t.useRef)(null), p = (0, E.d)(m), [f, g] = (0, E.i)(.2), y = (null == h ? void 0 : h.done) ?? !1, v = s.date ? o.date(s.date, {
            weekday: "long"
        }) : "", x = o.eventTimeOf(s, {
            viewerTimezone: d
        }), b = [{
            key: "days",
            value: null == h ? void 0 : h.days,
            label: n("days", {
                count: (null == h ? void 0 : h.days) ?? 0
            })
        }, {
            key: "hours",
            value: null == h ? void 0 : h.hours,
            label: n("hours", {
                count: (null == h ? void 0 : h.hours) ?? 0
            })
        }, {
            key: "minutes",
            value: null == h ? void 0 : h.minutes,
            label: n("minutes", {
                count: (null == h ? void 0 : h.minutes) ?? 0
            })
        }, {
            key: "seconds",
            value: null == h ? void 0 : h.seconds,
            label: n("seconds", {
                count: (null == h ? void 0 : h.seconds) ?? 0
            })
        }];
        return (0, a.jsxs)("section", {
            ref: m,
            id: "kashi-countdown",
            "aria-labelledby": "kashi-countdown-title",
            className: D.default.countdown,
            "data-paused": p ? "false" : "true",
            style: {
                background: u.night,
                "--plate-hi": u.goldLight,
                "--plate-lo": u.goldDeep,
                "--plate-ink": u.nightDeep
            },
            children: [(0, a.jsxs)("div", {
                className: D.default.countdownArt,
                "aria-hidden": "true",
                children: [(0, a.jsx)(k.O, {
                    portrait: "ghats-evening-mobile",
                    landscape: "ghats-evening-desktop",
                    className: D.default.countdownImg
                }), (0, a.jsx)("span", {
                    className: D.default.countdownShade,
                    style: {
                        background: `linear-gradient(180deg, ${u.night} 0%, ${(0,N.L)(u.night,.55)} 30%, transparent 60%)`
                    }
                })]
            }), (0, a.jsxs)("div", {
                ref: f,
                "data-reveal": g,
                className: D.default.countdownCopy,
                children: [(0, a.jsx)("p", {
                    className: `${D.default.eyebrow} rv`,
                    style: {
                        color: u.goldLight
                    },
                    children: i(y ? "doneEyebrow" : "eyebrow")
                }), (0, a.jsx)("h2", {
                    id: "kashi-countdown-title",
                    className: `${D.default.chapterHeading} rv`,
                    style: {
                        fontFamily: c.headingFont,
                        fontWeight: c.headingWeight ?? 500,
                        color: u.light
                    },
                    children: i(y ? "doneTitle" : "title")
                }), (0, a.jsx)("p", {
                    className: `${D.default.countdownTo} rv`,
                    style: {
                        color: (0, N.L)(u.light, .85)
                    },
                    children: y ? i("doneLine") : i("toEvent", {
                        event: s.name
                    })
                }), y ? null : (0, a.jsx)("div", {
                    className: `${D.default.plates} rv`,
                    role: "timer",
                    "aria-label": i("label"),
                    "aria-live": "off",
                    children: b.map(e => (0, a.jsxs)("div", {
                        className: D.default.plate,
                        children: [(0, a.jsx)("span", {
                            className: D.default.plateNumber,
                            style: {
                                fontFamily: c.headingFont
                            },
                            children: void 0 === e.value ? "––" : String(e.value).padStart(2, "0")
                        }, "seconds" === e.key ? e.value : void 0), (0, a.jsx)("span", {
                            className: D.default.plateLabel,
                            children: e.label
                        })]
                    }, e.key))
                }), v || x ? (0, a.jsxs)("p", {
                    className: `${D.default.countdownDate} rv`,
                    style: {
                        color: u.goldLight
                    },
                    children: [v, v && x ? " · " : "", x ? (0, a.jsx)("span", {
                        className: D.default.nowrap,
                        children: x
                    }) : null]
                }) : null]
            })]
        })
    }
    var es = e.i(366471);

    function er(e) {
        let {
            names: s,
            one: r,
            two: i,
            dateLabel: n,
            greeting: o,
            welcome: d,
            leaving: c,
            onEnter: u,
            onSkip: h
        } = e, m = (0, l.r)("inviteThemes.kashi-vishwanath"), {
            theme: p,
            tones: f
        } = J(), g = (0, t.useRef)(null), y = Math.min(1, 9 / Math.max(r.length, i.length, 1));
        return (0, t.useEffect)(() => {
            var e;
            null == (e = g.current) || e.focus({
                preventScroll: !0
            })
        }, []), (0, a.jsxs)("div", {
            ref: g,
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "kashi-gate-names",
            tabIndex: -1,
            className: `${D.default.gate} ${c?D.default.gateLeaving:""}`,
            onKeyDown: e => {
                if ("Escape" === e.key && h(), "Tab" !== e.key) return;
                let a = [...e.currentTarget.querySelectorAll("button:not([disabled]), a[href], [tabindex]:not([tabindex='-1'])")];
                if (0 === a.length) return;
                let t = a[0],
                    l = a[a.length - 1],
                    s = document.activeElement;
                e.shiftKey && (s === t || s === e.currentTarget) ? (e.preventDefault(), l.focus()) : e.shiftKey || s !== l && s !== e.currentTarget || (e.preventDefault(), t.focus())
            },
            style: {
                "--name-scale": y,
                "--lamp-glow": (0, N.L)(f.lamplight, .75),
                background: `radial-gradient(120% 70% at 50% 100%, ${f.gangaDeep} 0%, ${f.night} 55%, ${f.nightDeep} 100%)`
            },
            children: [(0, a.jsxs)("div", {
                className: D.default.gateNight,
                "aria-hidden": "true",
                children: [(0, a.jsx)("span", {
                    className: D.default.gateStars
                }), (0, a.jsxs)("div", {
                    className: D.default.gateRiver,
                    children: [(0, a.jsx)(k.O, {
                        portrait: "riverfront-p",
                        landscape: "riverfront-w",
                        priority: !0,
                        className: D.default.riverfrontImg
                    }), H.R.map((e, t) => (0, a.jsx)("span", {
                        className: D.default.ghatLight,
                        style: {
                            left: `${e.x}%`,
                            top: `${e.y}%`,
                            animationDelay: `${-(.37*t)}s`
                        }
                    }, t))]
                }), (0, a.jsx)("span", {
                    className: D.default.gateMist
                })]
            }), (0, a.jsxs)("div", {
                className: D.default.gateLamp,
                "aria-hidden": "true",
                children: [(0, a.jsx)("span", {
                    className: D.default.gateLampGlow
                }), (0, a.jsx)("img", {
                    src: (0, k._)("diya"),
                    alt: "",
                    width: k.J.diya.w,
                    height: k.J.diya.h,
                    decoding: "async",
                    className: D.default.gateDiya
                }), (0, a.jsx)("img", {
                    src: (0, k._)("diya"),
                    alt: "",
                    width: k.J.diya.w,
                    height: k.J.diya.h,
                    decoding: "async",
                    className: D.default.diyaReflection
                })]
            }), (0, a.jsx)("button", {
                type: "button",
                className: D.default.gateSkip,
                onClick: h,
                style: {
                    color: f.light,
                    background: (0, N.L)(f.light, .08),
                    borderColor: (0, N.L)(f.goldLight, .4)
                },
                children: m("entrance.skip")
            }), (0, a.jsxs)("div", {
                className: D.default.gateSky,
                children: [o ? (0, a.jsx)("p", {
                    className: D.default.gateOm,
                    lang: z(o),
                    style: {
                        fontFamily: U,
                        color: f.goldLight
                    },
                    children: o
                }) : null, (0, a.jsx)(es.GuestGreeting, {
                    className: D.default.gateGuest,
                    style: {
                        fontFamily: p.headingFont,
                        color: f.goldLight
                    }
                }), d ? (0, a.jsx)("p", {
                    className: D.default.gateWelcome,
                    style: {
                        fontFamily: p.headingFont,
                        color: (0, N.L)(f.light, .82)
                    },
                    children: d
                }) : null, (0, a.jsxs)("h2", {
                    id: "kashi-gate-names",
                    className: D.default.gateNames,
                    style: {
                        fontFamily: p.headingFont,
                        fontWeight: p.headingWeight ?? 500,
                        color: f.light
                    },
                    children: [(0, a.jsx)("span", {
                        children: r
                    }), (0, a.jsx)("span", {
                        className: D.default.gateAnd,
                        style: {
                            fontFamily: B,
                            color: f.goldLight
                        },
                        children: m("hero.weds")
                    }), (0, a.jsx)("span", {
                        children: i
                    })]
                }), n ? (0, a.jsx)("p", {
                    className: D.default.gateDate,
                    style: {
                        color: (0, N.L)(f.light, .78)
                    },
                    children: n
                }) : null]
            }), (0, a.jsxs)("div", {
                className: D.default.gateWater,
                children: [(0, a.jsxs)("button", {
                    type: "button",
                    "data-invitation-gate": !0,
                    className: D.default.gateEnter,
                    onClick: u,
                    "aria-label": m("entrance.enterLabel", {
                        names: s
                    }),
                    style: {
                        background: f.vermilion,
                        color: f.onVermilion,
                        borderColor: f.goldLight
                    },
                    children: [(0, a.jsx)("span", {
                        className: D.default.gateEnterGlow,
                        "aria-hidden": "true"
                    }), m("entrance.enter")]
                }), (0, a.jsx)("p", {
                    className: D.default.gateInvite,
                    style: {
                        color: (0, N.L)(f.light, .66)
                    },
                    children: m("entrance.invite")
                })]
            })]
        })
    }
    var ei = e.i(431817),
        en = e.i(735388),
        eo = e.i(736642),
        ed = e.i(230715);
    let ec = ["res.cloudinary.com", "images.unsplash.com"],
        eu = ["arch", "tall", "soft"];

    function eh(e) {
        let {
            photo: t,
            alt: l,
            sizes: s,
            className: r
        } = e;
        return ! function(e) {
            try {
                return ec.includes(new URL(e).hostname)
            } catch {
                return !1
            }
        }(t.url) ? (0, a.jsx)("img", {
            src: t.url,
            alt: l,
            loading: "lazy",
            decoding: "async",
            className: r,
            draggable: !1
        }) : (0, a.jsx)(ei.default, {
            src: t.url,
            alt: l,
            fill: !0,
            sizes: s,
            className: r,
            draggable: !1
        })
    }

    function em(e) {
        let {
            photos: s
        } = e, r = (0, l.r)("inviteThemes.kashi-vishwanath.gallery"), i = (0, l.r)("invite.gallery"), {
            theme: n,
            tones: o
        } = J(), d = (0, t.useRef)(null), c = (0, t.useRef)(null), [u, h] = (0, t.useState)(0), m = (0, t.useRef)(null), p = s.length, f = (0, t.useCallback)(e => h(a => (a + e + p) % p), [p]), g = e => {
            let a = d.current,
                t = null == a ? void 0 : a.firstElementChild,
                l = null == t ? void 0 : t.firstElementChild;
            if (!a || !t || !(l instanceof HTMLElement)) return;
            let s = l.offsetWidth + (parseFloat(getComputedStyle(t).columnGap) || 0),
                r = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            a.scrollBy({
                left: e * s,
                behavior: r ? "smooth" : "auto"
            })
        }, y = s[u], v = p > 1 ? [s[(u + 1) % p], s[(u - 1 + p) % p]] : [];
        return (0, a.jsxs)("section", {
            id: "kashi-gallery",
            "aria-labelledby": "kashi-gallery-title",
            className: D.default.gallery,
            style: {
                background: o.ivory,
                "--brocade-band": (0, k.L)("brocade-band"),
                "--frame": (0, N.L)(o.gold, .85),
                "--frame-shadow": (0, N.L)(o.nightDeep, .35)
            },
            children: [(0, a.jsxs)("div", {
                className: D.default.galleryPin,
                children: [(0, a.jsx)(V, {
                    id: "kashi-gallery-title",
                    eyebrow: r("eyebrow"),
                    title: i("title"),
                    className: D.default.galleryTitle
                }), (0, a.jsx)("span", {
                    className: D.default.brocadeBand,
                    "aria-hidden": "true"
                }), (0, a.jsxs)("div", {
                    className: D.default.galleryStrip,
                    children: [(0, a.jsx)("div", {
                        ref: d,
                        className: D.default.galleryViewport,
                        children: (0, a.jsx)("ul", {
                            className: D.default.galleryTrack,
                            children: s.map((e, t) => (0, a.jsx)("li", {
                                className: D.default.galleryItem,
                                "data-shape": eu[t % eu.length],
                                children: (0, a.jsxs)("button", {
                                    type: "button",
                                    className: D.default.galleryButton,
                                    onClick: () => {
                                        var e;
                                        h(t), null == (e = c.current) || e.showModal()
                                    },
                                    "aria-label": e.caption ? `${e.caption} — ${r("open",{number:t+1,total:p})}` : r("open", {
                                        number: t + 1,
                                        total: p
                                    }),
                                    children: [(0, a.jsx)(eh, {
                                        photo: e,
                                        alt: e.caption || i("photoAlt"),
                                        sizes: "(min-aspect-ratio: 1/1) 30vw, 66vw",
                                        className: D.default.galleryImg
                                    }), e.caption ? (0, a.jsx)("span", {
                                        className: D.default.galleryCaption,
                                        style: {
                                            fontFamily: n.headingFont
                                        },
                                        children: e.caption
                                    }) : null]
                                })
                            }, e.publicId || t))
                        })
                    }), p > 1 ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("button", {
                            type: "button",
                            className: `${D.default.galleryArrow} ${D.default.galleryPrev}`,
                            "aria-label": i("previous"),
                            onClick: () => g(-1),
                            "data-export-hide": !0,
                            children: (0, a.jsx)(en.f, {
                                "aria-hidden": "true"
                            })
                        }), (0, a.jsx)("button", {
                            type: "button",
                            className: `${D.default.galleryArrow} ${D.default.galleryNext}`,
                            "aria-label": i("next"),
                            onClick: () => g(1),
                            "data-export-hide": !0,
                            children: (0, a.jsx)(eo.f, {
                                "aria-hidden": "true"
                            })
                        })]
                    }) : null]
                }), (0, a.jsx)("span", {
                    className: D.default.brocadeBand,
                    "aria-hidden": "true"
                })]
            }), (0, a.jsxs)("dialog", {
                ref: c,
                className: D.default.viewer,
                "aria-label": i("viewer"),
                style: {
                    "--scrim": (0, N.L)(o.nightDeep, .97),
                    "--chrome": o.light
                },
                onClick: e => {
                    e.target === e.currentTarget && e.currentTarget.close()
                },
                onKeyDown: e => {
                    "ArrowRight" === e.key ? f(1) : "ArrowLeft" === e.key && f(-1)
                },
                onPointerDown: e => {
                    m.current = {
                        x: e.clientX,
                        y: e.clientY
                    }
                },
                onPointerCancel: () => {
                    m.current = null
                },
                onPointerUp: e => {
                    let a = m.current;
                    if (m.current = null, !a || p < 2) return;
                    let t = e.clientX - a.x;
                    Math.abs(t) > 48 && Math.abs(t) > Math.abs(e.clientY - a.y) && f(t < 0 ? 1 : -1)
                },
                children: [y ? (0, a.jsxs)("figure", {
                    className: D.default.viewerFigure,
                    children: [(0, a.jsx)("div", {
                        className: D.default.viewerFrame,
                        children: (0, a.jsx)(eh, {
                            photo: y,
                            alt: y.caption || i("photoAlt"),
                            sizes: "100vw",
                            className: D.default.viewerImg
                        })
                    }, y.publicId || u), (0, a.jsxs)("figcaption", {
                        className: D.default.viewerCaption,
                        children: [y.caption ? (0, a.jsx)("span", {
                            style: {
                                fontFamily: n.headingFont
                            },
                            children: y.caption
                        }) : null, (0, a.jsx)("span", {
                            className: D.default.viewerCount,
                            "aria-live": "polite",
                            children: r("counter", {
                                number: u + 1,
                                total: p
                            })
                        })]
                    }), (0, a.jsx)("div", {
                        className: D.default.viewerPreload,
                        "aria-hidden": "true",
                        children: v.map((e, t) => (0, a.jsx)(eh, {
                            photo: e,
                            alt: "",
                            sizes: "100vw",
                            className: D.default.viewerImg
                        }, `${e.publicId}-${t}`))
                    })]
                }) : null, (0, a.jsx)("button", {
                    type: "button",
                    className: `${D.default.viewerButton} ${D.default.viewerClose}`,
                    "aria-label": i("close"),
                    onClick: () => {
                        var e;
                        return null == (e = c.current) ? void 0 : e.close()
                    },
                    children: (0, a.jsx)(ed.X, {
                        "aria-hidden": "true"
                    })
                }), p > 1 ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("button", {
                        type: "button",
                        className: `${D.default.viewerButton} ${D.default.viewerPrev}`,
                        "aria-label": i("previous"),
                        onClick: () => f(-1),
                        children: (0, a.jsx)(en.f, {
                            "aria-hidden": "true"
                        })
                    }), (0, a.jsx)("button", {
                        type: "button",
                        className: `${D.default.viewerButton} ${D.default.viewerNext}`,
                        "aria-label": i("next"),
                        onClick: () => f(1),
                        children: (0, a.jsx)(eo.f, {
                            "aria-hidden": "true"
                        })
                    })]
                }) : null]
            })]
        })
    }
    var ep = e.i(297932);
    let ef = [{
        art: "cloud-4",
        className: D.default.cloudD
    }, {
        art: "cloud-1",
        className: D.default.cloudA
    }, {
        art: "cloud-3",
        className: D.default.cloudB
    }, {
        art: "cloud-2",
        className: D.default.cloudC
    }];

    function eg(e) {
        let {
            one: s,
            two: r,
            greeting: i,
            blessing: n,
            dateLabel: o,
            placeLabel: d,
            play: c,
            greet: u = !1
        } = e, h = (0, l.r)("inviteThemes.kashi-vishwanath"), {
            theme: m,
            tones: p,
            reduce: f
        } = J(), g = (0, t.useRef)(null), y = (0, E.d)(g, "0px"), v = Math.max(s.length, r.length, 1), x = {
            fontFamily: m.headingFont,
            fontWeight: m.headingWeight ?? 500,
            color: p.dark
        };
        return (0, a.jsx)("section", {
            ref: g,
            id: "kashi-top",
            "aria-labelledby": "kashi-hero-names",
            className: D.default.stage,
            "data-play": c ? "true" : "false",
            "data-paused": y ? "false" : "true",
            style: {
                "--name-scale": Math.min(1, 7 / v),
                "--line-scale": Math.min(1, 14 / (s.length + r.length + 4)),
                "--petals": (0, k.L)("petals"),
                "--jharokha-p": (0, k.L)("jharokha-p"),
                "--jharokha-w": (0, k.L)("jharokha-w"),
                "--halo": (0, N.L)(p.light, .62)
            },
            children: (0, a.jsxs)("div", {
                className: D.default.stagePin,
                "data-pinned-scene": !0,
                children: [(0, a.jsxs)("div", {
                    className: D.default.sky,
                    "aria-hidden": "true",
                    children: [(0, a.jsx)("span", {
                        className: D.default.skyDay
                    }), (0, a.jsx)("span", {
                        className: D.default.sun
                    }), ef.map(e => {
                        let {
                            art: t,
                            className: l
                        } = e;
                        return (0, a.jsx)("span", {
                            className: `${D.default.cloudPath} ${l}`,
                            children: (0, a.jsx)("img", {
                                src: (0, k._)(t),
                                alt: "",
                                width: k.J[t].w,
                                height: k.J[t].h,
                                decoding: "async",
                                className: D.default.cloud
                            })
                        }, t)
                    })]
                }), (0, a.jsx)("img", {
                    src: (0, k._)("skyline-far"),
                    alt: "",
                    "aria-hidden": "true",
                    width: k.J["skyline-far"].w,
                    height: k.J["skyline-far"].h,
                    decoding: "async",
                    className: D.default.skylineFar
                }), (0, a.jsxs)("div", {
                    className: D.default.crown,
                    children: [i ? (0, a.jsx)("p", {
                        className: `${D.default.crownOm} ${D.default.rise}`,
                        lang: z(i),
                        style: {
                            fontFamily: U,
                            color: p.goldDeep,
                            animationDelay: "0.15s"
                        },
                        children: i
                    }) : null, u ? (0, a.jsx)(es.GuestGreeting, {
                        className: `${D.default.crownGuest} ${D.default.rise}`,
                        style: {
                            fontFamily: m.headingFont,
                            color: p.dark,
                            animationDelay: "0.25s"
                        }
                    }) : null, (0, a.jsx)("p", {
                        className: `${D.default.crownBlessing} ${D.default.rise}`,
                        style: {
                            color: p.vermilionDeep,
                            animationDelay: "0.35s"
                        },
                        children: n
                    }), (0, a.jsxs)("h1", {
                        id: "kashi-hero-names",
                        className: D.default.crownNames,
                        children: [(0, a.jsx)("span", {
                            "data-couple-name": !0,
                            className: `${D.default.crownName} ${D.default.rise}`,
                            style: { ...x,
                                animationDelay: "0.55s"
                            },
                            children: s
                        }), (0, a.jsx)("span", {
                            className: `${D.default.crownWeds} ${D.default.rise}`,
                            style: {
                                fontFamily: B,
                                color: p.goldDeep,
                                animationDelay: "0.85s"
                            },
                            children: h("hero.weds")
                        }), (0, a.jsx)("span", {
                            "data-couple-name": !0,
                            className: `${D.default.crownName} ${D.default.rise}`,
                            style: { ...x,
                                animationDelay: "1.05s"
                            },
                            children: r
                        })]
                    }), o || d ? (0, a.jsxs)("p", {
                        className: `${D.default.crownDate} ${D.default.rise}`,
                        style: {
                            color: p.dark,
                            animationDelay: "1.35s"
                        },
                        children: [o ? (0, a.jsx)("span", {
                            children: o
                        }) : null, o && d ? (0, a.jsx)("span", {
                            className: D.default.crownDot,
                            style: {
                                background: p.gold
                            },
                            "aria-hidden": "true"
                        }) : null, d ? (0, a.jsx)("span", {
                            children: d
                        }) : null]
                    }) : null]
                }), (0, a.jsx)("div", {
                    className: D.default.riverfront,
                    "aria-hidden": "true",
                    children: (0, a.jsxs)("div", {
                        className: D.default.riverfrontIn,
                        children: [(0, a.jsx)(k.O, {
                            portrait: "riverfront-p",
                            landscape: "riverfront-w",
                            priority: !0,
                            className: D.default.riverfrontImg
                        }), (0, a.jsx)("span", {
                            className: D.default.glints
                        }), (0, a.jsxs)("span", {
                            className: D.default.stageBoat,
                            children: [(0, a.jsx)("img", {
                                src: (0, k._)("boat"),
                                alt: "",
                                width: k.J.boat.w,
                                height: k.J.boat.h,
                                decoding: "async"
                            }), (0, a.jsx)("img", {
                                src: (0, k._)("boat"),
                                alt: "",
                                width: k.J.boat.w,
                                height: k.J.boat.h,
                                decoding: "async",
                                className: D.default.boatReflection
                            })]
                        })]
                    })
                }), (0, a.jsx)("div", {
                    className: D.default.frame,
                    "aria-hidden": "true",
                    children: (0, a.jsxs)("div", {
                        className: D.default.frameIn,
                        children: [(0, a.jsx)("span", {
                            className: D.default.jharokha
                        }), (0, a.jsx)("img", {
                            src: (0, k._)("marigold-strand"),
                            alt: "",
                            width: k.J["marigold-strand"].w,
                            height: k.J["marigold-strand"].h,
                            decoding: "async",
                            className: D.default.toran
                        })]
                    })
                }), f ? null : (0, a.jsx)("div", {
                    className: D.default.petals,
                    "aria-hidden": "true",
                    children: H.h.map((e, t) => (0, a.jsx)("span", {
                        className: D.default.petal,
                        style: {
                            left: `${e.left}%`,
                            width: e.size,
                            height: e.size,
                            backgroundPosition: `${e.sprite/7*100}% 0`,
                            animationDelay: `${e.delay}s`,
                            animationDuration: `${e.duration}s`,
                            "--drift": `${e.drift}px`
                        }
                    }, t))
                }), (0, a.jsx)("div", {
                    className: D.default.stageCueWrap,
                    "data-export-hide": !0,
                    children: (0, a.jsxs)("button", {
                        type: "button",
                        className: `${D.default.stageCue} ${D.default.rise}`,
                        onClick: () => (0, ep.e)("kashi-invitation"),
                        style: {
                            color: p.light,
                            background: (0, N.L)(p.nightDeep, .45),
                            borderColor: (0, N.L)(p.goldLight, .45),
                            animationDelay: "1.8s"
                        },
                        children: [(0, a.jsx)("span", {
                            children: h("hero.begin")
                        }), (0, a.jsx)("span", {
                            className: D.default.stageCueLine,
                            style: {
                                background: p.goldLight
                            },
                            "aria-hidden": "true"
                        })]
                    })
                })]
            })
        })
    }
    let ey = [
            ["contain", 0],
            ["contain", 100]
        ],
        ev = [
            ["cover", 0],
            ["cover", 100]
        ],
        ex = e => `.${D.default[e]}`,
        ej = [{
            selector: ex("progress"),
            source: ex("root"),
            range: ey
        }, ...["frame", "crown", "riverfront", "skylineFar", "sun", "skyDay", "cloudPath", "stageCueWrap"].map(e => ({
            selector: ex(e),
            source: ex("stage"),
            range: ey
        })), {
            selector: ex("storyWalk"),
            source: ex("story"),
            range: ey
        }, {
            selector: ex("ink"),
            range: [
                ["cover", 12],
                ["cover", 34]
            ]
        }, {
            selector: `${ex("sceneWord")}, ${ex("sceneArt")}`,
            range: ev
        }, {
            selector: ex("momentTemple"),
            source: ex("moment"),
            range: [
                ["entry", 0],
                ["cover", 50]
            ]
        }, {
            selector: ex("momentArch"),
            source: ex("moment"),
            range: [
                ["entry", 10],
                ["cover", 42]
            ]
        }, {
            selector: ex("countdownImg"),
            source: ex("countdown"),
            range: ev
        }, {
            selector: ex("lamp"),
            source: ex("rsvp"),
            range: [
                ["entry", 0],
                ["cover", 40]
            ]
        }, {
            selector: ex("closingArt"),
            source: ex("closing"),
            range: [
                ["entry-crossing", 0],
                ["entry-crossing", 100]
            ]
        }];
    var eb = e.i(586498),
        ew = e.i(764351),
        eN = e.i(48407),
        ek = e.i(410739);

    function e_(e) {
        var t, r, i;
        let {
            couple: n,
            family: d,
            ceremony: c,
            one: u,
            two: h,
            emblem: m,
            heading: p
        } = e, f = (0, l.r)("inviteThemes.kashi-vishwanath"), g = (0, l.r)("family"), y = (0, eb.X)(), v = (0, j.f)(), x = (0, R.f)(), b = (0, ek.L)(), {
            theme: w,
            tones: _
        } = J(), [$, W] = (0, E.i)(.12), C = (0, s.M)(d), F = (0, eN.u)(d, n), L = (null == (t = n.headline) ? void 0 : t.trim()) || f("invitation.hostsDefault"), T = (null == (r = n.shortMessage) ? void 0 : r.trim()) || f("invitation.requestDefault"), O = (null == c ? void 0 : c.date) ? v.date(c.date, {
            weekday: "long"
        }) : "", q = c ? v.eventTimeOf(c, {
            viewerTimezone: x
        }) : "", M = c ? (0, S.A)(c) : "", H = Math.min(1, 9 / Math.max(u.length, h.length, 1)), P = {
            fontFamily: w.headingFont,
            fontWeight: w.headingWeight ?? 500,
            color: _.vermilion
        }, I = (null == F ? void 0 : F.filter(e => e.grandparents.length > 0)) ?? [], G = F ? (null == d || null == (i = d.blessings) ? void 0 : i.trim()) ?? "" : "", V = !!p && ("hi" !== y || p !== o.N.defaults.invocation);
        return (0, a.jsxs)("section", {
            id: "kashi-invitation",
            "aria-labelledby": "kashi-invitation-title",
            className: D.default.invitation,
            style: {
                "--sandstone": (0, k.L)("sandstone-texture"),
                "--paper-tex": (0, k.L)("paper-texture"),
                "--stone": _.sandstone,
                "--stone-deep": _.sandstoneDeep,
                "--river": _.gangaDeep,
                "--lamp-glow": (0, N.L)(_.lamplight, .6),
                background: _.sandstone
            },
            children: [(0, a.jsx)("span", {
                className: D.default.invCornice,
                "aria-hidden": "true"
            }), (0, a.jsxs)("div", {
                ref: $,
                "data-reveal": W,
                className: D.default.invFrame,
                children: [(0, a.jsx)("img", {
                    src: (0, k._)("brass-lamp"),
                    alt: "",
                    "aria-hidden": "true",
                    width: k.J["brass-lamp"].w,
                    height: k.J["brass-lamp"].h,
                    loading: "lazy",
                    decoding: "async",
                    className: `${D.default.invLamp} ${D.default.invLampLeft}`
                }), (0, a.jsx)("img", {
                    src: (0, k._)("brass-lamp"),
                    alt: "",
                    "aria-hidden": "true",
                    width: k.J["brass-lamp"].w,
                    height: k.J["brass-lamp"].h,
                    loading: "lazy",
                    decoding: "async",
                    className: `${D.default.invLamp} ${D.default.invLampRight}`
                }), (0, a.jsxs)("div", {
                    className: D.default.invPaper,
                    style: {
                        background: _.paper,
                        color: _.ink
                    },
                    children: [(0, a.jsx)(A.K, {
                        stroke: _.gold,
                        className: D.default.invArch
                    }), (0, a.jsxs)("div", {
                        className: D.default.invBody,
                        children: [m ? (0, a.jsx)(e$, {
                            emblem: m
                        }) : null, V && p ? (0, a.jsx)("p", {
                            className: `${D.default.invDeva} rv`,
                            lang: z(p),
                            style: {
                                fontFamily: U,
                                color: _.vermilion
                            },
                            children: p
                        }) : null, (0, a.jsx)("h2", {
                            id: "kashi-invitation-title",
                            className: `${D.default.invEyebrow} rv`,
                            style: {
                                color: _.goldDeep,
                                ...b
                            },
                            children: f("invitation.eyebrow")
                        }), (0, a.jsx)("p", {
                            className: `${D.default.invHosts} rv`,
                            style: {
                                fontFamily: w.headingFont,
                                color: _.ink
                            },
                            children: L
                        }), (0, a.jsx)("p", {
                            className: `${D.default.invRequest} rv`,
                            style: {
                                color: _.muted
                            },
                            children: T
                        }), (0, a.jsxs)("div", {
                            className: D.default.invCouple,
                            style: {
                                "--name-scale": H
                            },
                            children: [(0, a.jsx)(eW, {
                                label: n.partnerOneLabel,
                                name: u,
                                nameStyle: P,
                                view: null == F ? void 0 : F[0]
                            }), (0, a.jsx)("p", {
                                className: `${D.default.invAmp} rv`,
                                style: {
                                    fontFamily: B,
                                    color: _.gold
                                },
                                "aria-hidden": "true",
                                children: f("hero.and")
                            }), (0, a.jsx)(eW, {
                                label: n.partnerTwoLabel,
                                name: h,
                                nameStyle: P,
                                view: null == F ? void 0 : F[1]
                            })]
                        }), O || M ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(A.D, {
                                gold: _.gold,
                                flag: _.vermilion,
                                className: `${D.default.invRule} rv`
                            }), (0, a.jsxs)("div", {
                                className: `${D.default.invWhen} rv`,
                                children: [O ? (0, a.jsx)("p", {
                                    className: D.default.invDate,
                                    style: {
                                        fontFamily: w.headingFont,
                                        color: _.ink
                                    },
                                    children: f("invitation.onDate", {
                                        date: O.replace(/ /g, " ").replace(/, /g, ", ")
                                    })
                                }) : null, q ? (0, a.jsx)("p", {
                                    className: D.default.invTime,
                                    style: {
                                        color: _.muted
                                    },
                                    children: q
                                }) : null, M ? (0, a.jsx)("p", {
                                    className: D.default.invVenue,
                                    style: {
                                        color: _.ink
                                    },
                                    children: f("invitation.atVenue", {
                                        venue: M
                                    })
                                }) : null]
                            })]
                        }) : null, G || I.length > 0 ? (0, a.jsxs)("div", {
                            className: `${D.default.invElders} rv`,
                            style: {
                                borderColor: (0, N.L)(_.gold, .45),
                                background: (0, N.L)(_.sandstone, .35)
                            },
                            children: [(0, a.jsx)("p", {
                                className: D.default.invEldersTitle,
                                style: {
                                    color: _.goldDeep,
                                    ...b
                                },
                                children: g("blessings")
                            }), G ? (0, a.jsx)("p", {
                                className: D.default.invBlessings,
                                style: {
                                    fontFamily: w.headingFont,
                                    color: _.ink
                                },
                                children: G
                            }) : null, I.map(e => (0, a.jsxs)("p", {
                                className: D.default.invElderLine,
                                style: {
                                    color: _.ink
                                },
                                children: [(0, a.jsx)(ek.h, {
                                    people: e.grandparents
                                }), (0, a.jsx)("span", {
                                    className: D.default.invElderLabel,
                                    style: {
                                        color: _.muted
                                    },
                                    children: (0, ek.S)(g, e)
                                })]
                            }, e.key))]
                        }) : null, C && d ? (0, a.jsxs)("div", {
                            className: `${D.default.invTree} rv`,
                            children: [(0, a.jsx)("p", {
                                className: D.default.invEldersTitle,
                                style: {
                                    color: _.goldDeep,
                                    ...b
                                },
                                children: f("invitation.familiesTitle")
                            }), (0, a.jsx)(ew.f, {
                                family: d,
                                couple: n,
                                theme: w,
                                variant: "panel",
                                showHeading: !1
                            })]
                        }) : null]
                    })]
                })]
            })]
        })
    }

    function e$(e) {
        let {
            emblem: t
        } = e, {
            tones: l
        } = J();
        switch (t.kind) {
            case "ornament":
                if ("lotus" !== t.name) return null;
                return (0, a.jsx)(A.g, {
                    gold: l.gold,
                    deep: l.goldDeep,
                    size: 52,
                    className: `${D.default.invLotus} rv`
                });
            case "image":
                return (0, a.jsx)("img", {
                    src: t.src,
                    alt: "",
                    "aria-hidden": "true",
                    loading: "lazy",
                    decoding: "async",
                    className: `${D.default.invEmblemArt} rv`,
                    style: {
                        aspectRatio: t.aspect
                    }
                });
            case "glyph":
                return (0, a.jsx)("p", {
                    className: `${D.default.invEmblemGlyph} rv`,
                    lang: z(t.text),
                    "aria-hidden": "true",
                    style: {
                        fontFamily: U,
                        color: l.gold
                    },
                    children: t.text
                });
            case "upload":
                return (0, a.jsx)("span", {
                    className: `${D.default.invEmblemMark} rv`,
                    "aria-hidden": "true",
                    style: {
                        "--emblem": `url("${t.src}")`,
                        backgroundColor: l.gold
                    }
                })
        }
    }

    function eW(e) {
        let {
            label: t,
            name: l,
            nameStyle: s,
            view: r
        } = e, {
            tones: i
        } = J();
        return (0, a.jsxs)("div", {
            className: `${D.default.invPerson} rv`,
            children: [(null == t ? void 0 : t.trim()) ? (0, a.jsx)("p", {
                className: D.default.invLabel,
                style: {
                    color: i.goldDeep
                },
                children: t
            }) : null, (0, a.jsx)("h3", {
                className: `${D.default.invName} ${D.default.shimmer}`,
                style: s,
                children: l
            }), (0, a.jsx)(eN.O, {
                view: r,
                className: D.default.invParents,
                style: {
                    color: i.muted
                }
            })]
        })
    }
    let eC = ["res.cloudinary.com", "images.unsplash.com"];

    function eF(e) {
        let {
            one: t,
            two: s,
            cover: r,
            hashtag: i
        } = e, n = (0, l.r)("inviteThemes.kashi-vishwanath.moment"), {
            theme: o,
            tones: d
        } = J(), [c, u] = (0, E.i)(.2), h = `${t.trim()[0]??""}${s.trim()[0]??""}`.toUpperCase();
        return (0, a.jsx)("section", {
            ref: c,
            id: "kashi-moment",
            "data-reveal": u,
            "aria-label": n("eyebrow"),
            className: D.default.moment,
            style: {
                background: `radial-gradient(80% 60% at 50% 38%, ${(0,N.L)(d.marigold,.42)} 0%, transparent 60%), linear-gradient(180deg, ${d.vermilionDeep} 0%, ${d.dusk} 55%, ${d.night} 100%)`,
                "--paper-tex": (0, k.L)("paper-texture"),
                "--petals": (0, k.L)("petals")
            },
            children: (0, a.jsxs)("div", {
                className: D.default.momentArt,
                children: [(0, a.jsx)("img", {
                    src: (0, k._)("temple-cutout"),
                    alt: "",
                    "aria-hidden": "true",
                    width: k.J["temple-cutout"].w,
                    height: k.J["temple-cutout"].h,
                    loading: "lazy",
                    decoding: "async",
                    className: D.default.momentTemple
                }), (0, a.jsxs)("div", {
                    className: D.default.momentArch,
                    children: [(0, a.jsx)("div", {
                        className: D.default.momentWindow,
                        style: {
                            background: d.paper
                        },
                        children: r ? ! function(e) {
                            try {
                                return eC.includes(new URL(e).hostname)
                            } catch {
                                return !1
                            }
                        }(r) ? (0, a.jsx)("img", {
                            src: r,
                            alt: `${t} & ${s}`,
                            loading: "lazy",
                            decoding: "async",
                            className: D.default.momentPhoto
                        }) : (0, a.jsx)(ei.default, {
                            src: r,
                            alt: `${t} & ${s}`,
                            fill: !0,
                            sizes: "(min-aspect-ratio: 1/1) 30vw, 70vw",
                            className: D.default.momentPhoto
                        }) : (0, a.jsxs)("div", {
                            className: D.default.momentMonogram,
                            style: {
                                color: d.vermilion
                            },
                            children: [(0, a.jsx)(A.N, {
                                gold: d.gold,
                                flag: d.vermilion,
                                size: 30
                            }), i ? (0, a.jsxs)("span", {
                                className: D.default.momentHashtag,
                                style: {
                                    fontFamily: o.headingFont,
                                    fontWeight: o.headingWeight ?? 500,
                                    "--tag-len": i.length + 1
                                },
                                children: ["#", i]
                            }) : (0, a.jsx)("span", {
                                style: {
                                    fontFamily: o.headingFont,
                                    fontWeight: o.headingWeight ?? 500
                                },
                                children: h || "&"
                            })]
                        })
                    }), (0, a.jsx)("img", {
                        src: (0, k._)("arch-frame"),
                        alt: "",
                        "aria-hidden": "true",
                        width: k.J["arch-frame"].w,
                        height: k.J["arch-frame"].h,
                        loading: "lazy",
                        decoding: "async",
                        className: D.default.momentFrame
                    })]
                })]
            })
        })
    }
    var eL = e.i(138813),
        eS = e.i(875022);

    function eT(e) {
        let {
            slug: t,
            events: s,
            settings: r,
            themeConfig: i
        } = e, n = (0, l.r)("inviteThemes.kashi-vishwanath.rsvp"), o = (0, l.r)("rsvp"), d = (0, j.f)(), {
            theme: c,
            tones: u
        } = J(), [h, m] = (0, E.i)(.12), p = (0, eS.o)(r);
        return (0, a.jsxs)("section", {
            id: "kashi-rsvp",
            "aria-labelledby": "kashi-rsvp-title",
            className: D.default.rsvp,
            style: {
                background: `radial-gradient(70% 50% at 50% 40%, ${(0,N.L)(u.gold,.18)} 0%, transparent 70%), linear-gradient(180deg, ${u.night} 0%, ${u.nightDeep} 100%)`,
                "--brocade-band": (0, k.L)("brocade-band"),
                "--paper-tex": (0, k.L)("paper-texture"),
                "--field": (0, N.L)(u.paper, .9),
                "--field-line": (0, N.L)(u.gold, .55),
                "--field-focus": u.vermilion,
                "--choice-on": (0, N.L)(u.vermilion, .1),
                "--ink": u.ink,
                "--muted": u.muted,
                "--vermilion": u.vermilion,
                "--gold": u.gold,
                "--on-vermilion": u.onVermilion,
                "--glow": (0, N.L)(u.lamplight, .55)
            },
            children: [(0, a.jsx)("img", {
                src: (0, k._)("brass-lamp"),
                alt: "",
                "aria-hidden": "true",
                width: k.J["brass-lamp"].w,
                height: k.J["brass-lamp"].h,
                loading: "lazy",
                decoding: "async",
                className: `${D.default.lamp} ${D.default.lampLeft}`
            }), (0, a.jsx)("img", {
                src: (0, k._)("brass-lamp"),
                alt: "",
                "aria-hidden": "true",
                width: k.J["brass-lamp"].w,
                height: k.J["brass-lamp"].h,
                loading: "lazy",
                decoding: "async",
                className: `${D.default.lamp} ${D.default.lampRight}`
            }), (0, a.jsxs)("div", {
                ref: h,
                "data-reveal": m,
                className: `${D.default.rsvpCard} rv`,
                style: {
                    background: u.paper,
                    color: u.ink
                },
                children: [(0, a.jsx)("span", {
                    className: D.default.rsvpBand,
                    "aria-hidden": "true"
                }), (0, a.jsxs)("header", {
                    className: D.default.rsvpHead,
                    children: [(0, a.jsx)(A.g, {
                        gold: u.gold,
                        deep: u.goldDeep,
                        size: 46
                    }), p ? null : (0, a.jsx)("p", {
                        className: D.default.eyebrow,
                        style: {
                            color: u.goldDeep
                        },
                        children: n("eyebrow")
                    }), (0, a.jsx)("h2", {
                        id: "kashi-rsvp-title",
                        className: p ? "sr-only" : D.default.chapterHeading,
                        style: {
                            fontFamily: c.headingFont,
                            fontWeight: c.headingWeight ?? 500,
                            color: u.vermilion
                        },
                        children: n("title")
                    }), p ? null : (0, a.jsx)("p", {
                        className: D.default.rsvpSub,
                        style: {
                            color: u.muted
                        },
                        children: r.deadline ? o("subheadingBy", {
                            deadline: d.date(r.deadline)
                        }) : o("subheadingPlain")
                    })]
                }), (0, a.jsx)("div", {
                    className: D.default.rsvpForm,
                    children: (0, a.jsx)(eL.f, {
                        slug: t,
                        events: s.map(e => ({
                            id: e.id,
                            name: e.name
                        })),
                        settings: r,
                        theme: i,
                        showHeader: !1,
                        bare: !0
                    })
                }), (0, a.jsx)("span", {
                    className: `${D.default.rsvpBand} ${D.default.rsvpBandFoot}`,
                    "aria-hidden": "true"
                })]
            })]
        })
    }

    function eO(e) {
        let {
            milestones: t
        } = e, s = (0, l.r)("inviteThemes.kashi-vishwanath.story"), {
            theme: r,
            tones: i
        } = J();
        return (0, a.jsxs)("section", {
            id: "kashi-story",
            "aria-labelledby": "kashi-story-title",
            className: D.default.story,
            style: {
                background: `linear-gradient(180deg, ${i.sandstone} 0%, ${i.ivory} 10%, ${i.ivory} 100%)`,
                "--veil-top": i.sandstone,
                "--veil": (0, N.L)(i.ivory, .5),
                "--veil-end": i.ivory
            },
            children: [(0, a.jsxs)("div", {
                className: D.default.storyBackdrop,
                "aria-hidden": "true",
                children: [(0, a.jsx)(k.O, {
                    portrait: "story-lane",
                    className: D.default.storyWalk
                }), (0, a.jsx)("span", {
                    className: D.default.storyVeil
                })]
            }), (0, a.jsxs)("div", {
                className: D.default.storyBody,
                children: [(0, a.jsx)(V, {
                    id: "kashi-story-title",
                    eyebrow: s("eyebrow"),
                    title: s("title")
                }), (0, a.jsxs)("div", {
                    className: D.default.storyGrid,
                    children: [(0, a.jsx)("div", {
                        className: D.default.storyLane,
                        "aria-hidden": "true",
                        children: (0, a.jsx)("div", {
                            className: D.default.storyArch,
                            style: {
                                borderColor: (0, N.L)(i.gold, .7),
                                boxShadow: `0 30px 60px -36px ${(0,N.L)(i.nightDeep,.6)}`
                            },
                            children: (0, a.jsx)(k.O, {
                                portrait: "story-lane",
                                className: `${D.default.storyImg} ${D.default.storyWalk}`
                            })
                        })
                    }), (0, a.jsxs)("div", {
                        className: D.default.storyPath,
                        children: [(0, a.jsx)("span", {
                            className: D.default.storyTrack,
                            style: {
                                background: (0, N.L)(i.gold, .25)
                            },
                            "aria-hidden": "true"
                        }), (0, a.jsx)("span", {
                            className: D.default.storyThread,
                            style: {
                                background: `linear-gradient(180deg, ${i.marigold}, ${i.gold})`
                            },
                            "aria-hidden": "true"
                        }), (0, a.jsx)("ol", {
                            className: D.default.storyList,
                            children: t.map((e, t) => (0, a.jsx)(eR, {
                                index: t,
                                milestone: e
                            }, t))
                        }), (0, a.jsx)("p", {
                            className: D.default.storyEnd,
                            style: {
                                fontFamily: r.headingFont,
                                color: i.goldDeep
                            },
                            children: s("ending")
                        })]
                    })]
                })]
            })]
        })
    }

    function eR(e) {
        let {
            milestone: t,
            index: s
        } = e, r = (0, l.r)("inviteThemes.kashi-vishwanath.story"), {
            theme: i,
            tones: n
        } = J(), [o, d] = (0, E.i)(.2);
        return (0, a.jsxs)("li", {
            ref: o,
            "data-reveal": d,
            className: D.default.milestone,
            children: [(0, a.jsx)("span", {
                className: D.default.milestoneMark,
                style: {
                    background: n.paper,
                    borderColor: (0, N.L)(n.gold, .7)
                },
                "aria-hidden": "true",
                children: (0, a.jsx)(A.c, {
                    flame: n.marigold,
                    cup: n.goldDeep,
                    size: 22
                })
            }), (0, a.jsxs)("article", {
                className: `${D.default.milestoneCard} rv`,
                style: {
                    background: (0, N.L)(n.paper, .9),
                    borderColor: (0, N.L)(n.gold, .35)
                },
                children: [(0, a.jsx)("p", {
                    className: D.default.milestoneNumber,
                    style: {
                        color: n.goldDeep
                    },
                    children: r("chapter", {
                        number: s + 1
                    })
                }), t.title ? (0, a.jsx)("h3", {
                    className: D.default.milestoneTitle,
                    style: {
                        fontFamily: i.headingFont,
                        fontWeight: i.headingWeight ?? 500,
                        color: n.vermilion
                    },
                    children: t.title
                }) : null, (0, a.jsx)("p", {
                    className: D.default.milestoneBody,
                    style: {
                        color: n.ink
                    },
                    children: (0, a.jsx)(eq, {
                        text: t.body
                    })
                })]
            })]
        })
    }

    function eq(e) {
        let {
            text: l
        } = e;
        return (0, a.jsx)(a.Fragment, {
            children: l.split(/(\s+)/).map((e, l) => e.trim() ? (0, a.jsx)("span", {
                className: D.default.ink,
                children: e
            }, l) : (0, a.jsx)(t.Fragment, {
                children: e
            }, l))
        })
    }

    function eM(e) {
        let {
            chapters: l,
            tones: s
        } = e, r = (0, t.useMemo)(() => l.map(e => e.id), [l]), i = (0, y.f)(r);
        return (0, a.jsx)(u.f, {
            pillClassName: "max-w-[80vw]",
            items: l,
            active: i,
            pillStyle: {
                background: (0, N.L)(s.paper, .9),
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: `1px solid ${(0,N.L)(s.gold,.5)}`,
                boxShadow: `0 18px 40px -24px ${(0,N.L)(s.nightDeep,.8)}`
            },
            getItemStyle: e => ({
                background: e ? s.vermilion : "transparent",
                color: e ? s.onVermilion : (0, N.L)(s.ink, .78)
            })
        })
    }
    e.s(["KashiVishwanathExperience", 0, function(e) {
        var u, y, _, $, W, C, F, L, S, T, O;
        let R, {
                data: q,
                theme: H,
                shareUrl: A
            } = e,
            B = (0, t.useMemo)(() => (0, N.f)(H), [H]),
            U = (0, t.useMemo)(() => (0, Y.c)(B.palette), [B.palette]),
            z = (0, E.f)(),
            J = (0, v.Y)(),
            V = (0, v.n)(),
            K = (0, E.y)(),
            Q = (0, d.Q)(),
            X = (0, d.L)(),
            ee = (0, l.r)("inviteThemes.kashi-vishwanath"),
            et = (0, j.f)(),
            {
                couple: es
            } = q,
            ei = (0, t.useMemo)(() => (0, M.S)(q.sections), [q.sections]),
            en = (0, t.useMemo)(() => (0, o.T)(o.N, q.sections), [q.sections]),
            eo = (0, t.useMemo)(() => (0, M.T)(q.events ?? []), [q.events]),
            ed = (0, t.useMemo)(() => (0, M.$)(eo), [eo]),
            ec = (0, t.useMemo)(() => (0, M.N)(eo), [eo]),
            eu = (0, t.useMemo)(() => (0, M.f)(q.story), [q.story]),
            eh = (0, t.useMemo)(() => [...q.photos ?? []].sort((e, a) => (e.displayOrder ?? 0) - (a.displayOrder ?? 0)), [q.photos]),
            ep = (null == (u = es.partnerOneName) ? void 0 : u.trim()) || ee("hero.partnerOne"),
            ef = (null == (y = es.partnerTwoName) ? void 0 : y.trim()) || ee("hero.partnerTwo"),
            ey = `${ep} & ${ef}`,
            ev = (null == ed ? void 0 : ed.date) || (null == ec ? void 0 : ec.event.date) || "",
            ex = ev ? et.date(ev, {
                weekday: "long"
            }) : "",
            eb = ed ? [ed.city, ed.country].map(e => null == e ? void 0 : e.trim()).filter(Boolean)[0] ?? "" : "",
            ew = e => (0, i.v)(q.sections, e),
            eN = ew("hero"),
            ek = ew("family") && (0, s.i)(q.family),
            e$ = ew("story") && eu.length > 0,
            eW = ew("events") && eo.length > 0,
            eC = eW && !!ed,
            eL = ew("gallery") && eh.length > 0,
            eS = ew("countdown") && null !== ec && !X,
            eR = ew("rsvp") && q.rsvpSettings.enabled,
            eq = ew("hashtag") && !!(null == ($ = q.hashtag) || null == (_ = $.tag) ? void 0 : _.trim()),
            eE = ew("special-request") && (0, r.S)(q.specialRequest),
            eD = (0, p.useGifts)(),
            eH = ew("gifts") && !!((null == eD ? void 0 : eD.section) && eD.funds.length > 0),
            eA = (0, t.useMemo)(() => ({ ...B,
                palette: { ...B.palette,
                    accent: U.gold,
                    background: U.nightDeep
                }
            }), [B, U]),
            eP = ew("footer"),
            [eI, eB] = (0, t.useState)("closed"),
            eU = (0, c.usePersonalGuest)(),
            ez = Q && null !== eU,
            eG = (!Q || ez) && !(K && z) && "open" !== eI,
            eJ = K && eG && "closed" === eI,
            [eV, eK] = (0, t.useState)(0),
            eY = (0, t.useRef)(void 0);
        (0, t.useEffect)(() => {
            if (!eJ) return;
            let e = document.body.style.overflow;
            return document.body.style.overflow = "hidden", () => {
                document.body.style.overflow = e
            }
        }, [eJ]), (0, t.useEffect)(() => () => window.clearTimeout(eY.current), []);
        let eZ = (0, t.useCallback)(() => {
                eB("leaving"), window.clearTimeout(eY.current), eY.current = window.setTimeout(() => eB("open"), 1500)
            }, []),
            eQ = (0, t.useCallback)(() => {
                window.clearTimeout(eY.current), eB("open")
            }, []),
            eX = (0, t.useCallback)(() => {
                window.scrollTo({
                    top: 0,
                    behavior: "instant"
                }), eK(e => e + 1), z || Q && !ez || eB("closed")
            }, [z, Q, ez]),
            e0 = (0, t.useMemo)(() => {
                let e = [];
                return eN && e.push({
                    kind: "hero",
                    id: "kashi-top",
                    label: ee("nav.home")
                }), e.push({
                    kind: "hero",
                    id: "kashi-invitation",
                    label: ee("nav.invitation")
                }), e$ && e.push({
                    kind: "story",
                    id: "kashi-story",
                    label: ee("nav.story")
                }), eW && e.push({
                    kind: "events",
                    id: "kashi-celebrations",
                    label: ee("nav.celebrations")
                }), eL && e.push({
                    kind: "gallery",
                    id: "kashi-gallery",
                    label: ee("nav.gallery")
                }), eR && e.push({
                    kind: "rsvp",
                    id: "kashi-rsvp",
                    label: ee("nav.rsvp")
                }), eP && e.push({
                    kind: "footer",
                    id: "kashi-farewell",
                    label: ee("nav.farewell")
                }), (0, n.f)(e, q.sections)
            }, [eN, e$, eW, eL, eR, eP, q.sections, ee]),
            e1 = (0, t.useRef)(null),
            e2 = (0, t.useRef)(null);
        (0, x.f)(e2, ej);
        let e6 = (0, t.useMemo)(() => ({
            theme: B,
            tones: U,
            reduce: z
        }), [B, U, z]);
        return (0, a.jsx)(G.Provider, {
            value: e6,
            children: (0, a.jsxs)("div", {
                ref: e2,
                className: D.default.root,
                "data-motion": J ? "lite" : void 0,
                style: {
                    "--ivory": U.ivory,
                    "--paper": U.paper,
                    "--ink": U.ink,
                    "--muted": U.muted,
                    "--vermilion": U.vermilion,
                    "--gold": U.gold,
                    "--gold-light": U.goldLight,
                    "--gold-deep": U.goldDeep,
                    "--ganga": U.ganga,
                    "--night": U.night,
                    "--focus": U.vermilion,
                    background: U.ivory,
                    color: U.ink,
                    fontFamily: B.bodyFont
                },
                children: [(0, a.jsx)(b.f, {
                    families: [null == H ? void 0 : H.fonts.heading, null == H ? void 0 : H.fonts.body, P, I]
                }), (0, a.jsx)(k.g, {}), eG ? (0, a.jsx)("style", {
                    dangerouslySetInnerHTML: {
                        __html: `html, body { background-color: ${(0,N.F)(U.night)} !important; }`
                    }
                }) : (null == (W = e0[0]) ? void 0 : W.id) === "kashi-top" ? (0, a.jsx)(w.f, {
                    opening: V ? "#B07E52" : "#86AECF",
                    paper: U.ivory,
                    until: e1
                }) : null, eG ? (0, a.jsx)(er, {
                    names: ey,
                    one: ep,
                    two: ef,
                    dateLabel: ex,
                    greeting: en.greeting,
                    welcome: void 0 === en.welcome ? ee("entrance.welcome") : en.welcome,
                    leaving: "leaving" === eI,
                    onEnter: eZ,
                    onSkip: eQ
                }, `gate-${eV}`) : null, (0, a.jsx)("div", {
                    className: D.default.progress,
                    style: {
                        background: `linear-gradient(90deg, ${U.ganga}, ${U.gold}, ${U.vermilion})`
                    },
                    "aria-hidden": "true"
                }), eG ? null : (0, a.jsx)(eM, {
                    chapters: e0,
                    tones: U
                }), (0, a.jsx)("main", {
                    inert: eJ,
                    className: D.default.journey,
                    children: (S = [eN && {
                        key: "hero",
                        kind: "hero",
                        top: U.dawnSky,
                        bottom: U.sandstone,
                        node: (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(eg, {
                                one: ep,
                                two: ef,
                                greeting: en.greeting,
                                blessing: ei.blessing ?? ee("hero.blessing"),
                                dateLabel: ex,
                                placeLabel: eb,
                                play: !eG || "leaving" === eI,
                                greet: z
                            }, `hero-${eV}`), (0, a.jsx)("div", {
                                ref: e1,
                                "aria-hidden": "true"
                            })]
                        })
                    }, {
                        key: "invitation",
                        kind: "hero",
                        top: U.sandstone,
                        bottom: U.sandstone,
                        node: (0, a.jsx)(e_, {
                            couple: es,
                            family: ek ? q.family : void 0,
                            ceremony: ed,
                            one: ep,
                            two: ef,
                            emblem: en.emblem,
                            heading: en.invocation
                        })
                    }, e$ && {
                        key: "story",
                        kind: "story",
                        top: U.sandstone,
                        bottom: U.ivory,
                        node: (0, a.jsx)(eO, {
                            milestones: eu
                        })
                    }, eW && {
                        key: "celebrations",
                        kind: "events",
                        top: U.ivory,
                        bottom: (0, N.j)(U.marigold, U.ivory, .86),
                        node: (0, a.jsx)(Z, {
                            events: eo
                        })
                    }, eC && ed && {
                        key: "moment",
                        kind: "events",
                        top: U.vermilionDeep,
                        bottom: U.night,
                        node: (0, a.jsx)(eF, {
                            one: ep,
                            two: ef,
                            cover: (null == (C = es.coverPhotoUrl) ? void 0 : C.trim()) ?? "",
                            hashtag: eq ? null == (L = q.hashtag) || null == (F = L.tag) ? void 0 : F.trim() : void 0
                        })
                    }, eL && {
                        key: "gallery",
                        kind: "gallery",
                        top: U.ivory,
                        bottom: U.ivory,
                        node: (0, a.jsx)(em, {
                            photos: eh
                        })
                    }, eS && ec && {
                        key: "countdown",
                        kind: "countdown",
                        top: U.night,
                        bottom: U.night,
                        node: (0, a.jsx)(el, {
                            event: ec.event,
                            at: ec.at
                        })
                    }, eR && {
                        key: "rsvp",
                        kind: "rsvp",
                        top: U.night,
                        bottom: U.nightDeep,
                        node: (0, a.jsx)(eT, {
                            slug: q.slug,
                            events: eo,
                            settings: q.rsvpSettings,
                            themeConfig: H
                        })
                    }, eE && {
                        key: "special-request",
                        kind: "special-request",
                        top: U.nightDeep,
                        bottom: U.nightDeep,
                        node: (0, a.jsx)("div", {
                            className: "flex justify-center px-6 py-20 sm:py-24",
                            style: {
                                background: U.nightDeep
                            },
                            children: (0, a.jsx)(m.SpecialRequestSection, {
                                specialRequest: q.specialRequest,
                                theme: eA,
                                variant: "panel"
                            })
                        })
                    }, eH && {
                        key: "gifts",
                        kind: "gifts",
                        top: U.nightDeep,
                        bottom: U.nightDeep,
                        node: (0, a.jsx)("div", {
                            className: "flex justify-center px-6 py-20 sm:py-24",
                            style: {
                                background: U.nightDeep
                            },
                            children: (0, a.jsx)(f.f, {
                                theme: eA,
                                variant: "panel"
                            })
                        })
                    }, eP && {
                        key: "closing",
                        kind: "footer",
                        top: U.night,
                        bottom: U.nightDeep,
                        node: (0, a.jsx)(ea, {
                            one: ep,
                            two: ef,
                            dateLabel: ex,
                            thankYou: ei.thankYou ?? ee("closing.thankYou"),
                            events: eo,
                            ceremony: ed,
                            hashtag: eq ? q.hashtag : void 0,
                            shareUrl: A,
                            shareSettings: q.shareSettings,
                            watermarkEnabled: q.watermarkEnabled,
                            onReplay: eX
                        })
                    }, !eP && (eq || q.watermarkEnabled) && {
                        key: "coda",
                        kind: "footer",
                        top: U.ivory,
                        bottom: U.ivory,
                        node: (0, a.jsxs)("div", {
                            className: D.default.coda,
                            style: {
                                background: U.ivory
                            },
                            children: [eq ? (0, a.jsx)(h.f, {
                                hashtag: q.hashtag,
                                theme: B,
                                variant: "panel"
                            }) : null, q.watermarkEnabled ? (0, a.jsx)("p", {
                                id: "invite-watermark",
                                className: D.default.codaMark,
                                children: (0, a.jsx)("a", {
                                    href: "/",
                                    target: "_blank",
                                    rel: "noopener",
                                    style: {
                                        color: U.muted
                                    },
                                    children: (0, a.jsx)(g.LocalizedWatermarkText, {})
                                })
                            }) : null]
                        })
                    }], T = q.sections, O = U, (R = (0, n.f)(S.filter(e => !!e), T)).map((e, l) => {
                        let s = R[l - 1],
                            r = null;
                        if (s && s.bottom.toLowerCase() !== e.top.toLowerCase()) {
                            let t = (0, N.c)(s.bottom),
                                l = (0, N.c)(e.top),
                                i = t && !l ? `, ${(0,N.j)(O.marigold,s.bottom,.55)} 38%, ${O.dusk} 72%` : !t && l ? `, ${O.dusk} 30%, ${O.dawnBlush} 70%` : "";
                            r = (0, a.jsx)("div", {
                                className: D.default.seam,
                                style: {
                                    background: `linear-gradient(180deg, ${s.bottom}${i}, ${e.top})`
                                },
                                "aria-hidden": "true"
                            })
                        }
                        return (0, a.jsxs)(t.Fragment, {
                            children: [r, e.node]
                        }, e.key)
                    }))
                })]
            })
        })
    }], 917366)
}, 149504, e => {
    "use strict";
    var a = e.i(244835),
        t = e.i(60649);
    let l = () => () => {},
        s = new Set,
        r = new Map;

    function i(e) {
        try {
            return "local" === e ? window.localStorage : window.sessionStorage
        } catch {
            return null
        }
    }

    function n(e) {
        return s.add(e), window.addEventListener("storage", e), () => {
            s.delete(e), window.removeEventListener("storage", e)
        }
    }
    e.s(["y", 0, function() {
        return (0, a.useSyncExternalStore)(l, () => !0, () => !1)
    }, "d", 0, function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "200px 0px",
            [l, s] = (0, a.useState)(!1);
        return (0, a.useEffect)(() => {
            let a = e.current;
            if (!a || "u" < typeof IntersectionObserver) return;
            let l = new IntersectionObserver(e => {
                let [a] = e;
                return s(a.isIntersecting)
            }, {
                rootMargin: t
            });
            return l.observe(a), () => l.disconnect()
        }, [e, t]), l
    }, "I", 0, function(e, t) {
        let l = (0, a.useRef)(0);
        (0, a.useEffect)(() => {
            let a = e.current;
            if (!a || !t || !window.matchMedia("(pointer: fine)").matches) return;
            let s = 0,
                r = 0,
                i = () => {
                    l.current = 0, a.style.setProperty("--px", s.toFixed(3)), a.style.setProperty("--py", r.toFixed(3))
                },
                n = e => {
                    let t = a.getBoundingClientRect();
                    s = Math.max(-1, Math.min(1, (e.clientX - t.left) / t.width * 2 - 1)), r = Math.max(-1, Math.min(1, (e.clientY - t.top) / t.height * 2 - 1)), l.current || (l.current = requestAnimationFrame(i))
                },
                o = () => {
                    s = 0, r = 0, l.current || (l.current = requestAnimationFrame(i))
                };
            return a.addEventListener("pointermove", n, {
                passive: !0
            }), a.addEventListener("pointerleave", o), () => {
                a.removeEventListener("pointermove", n), a.removeEventListener("pointerleave", o), l.current && cancelAnimationFrame(l.current), a.style.removeProperty("--px"), a.style.removeProperty("--py")
            }
        }, [e, t])
    }, "f", 0, function() {
        return (0, t.f)("(prefers-reduced-motion: reduce)")
    }, "i", 0, function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .18,
            t = (0, a.useRef)(null),
            [l, s] = (0, a.useState)("idle");
        return (0, a.useEffect)(() => {
            let a = t.current;
            if (!a || "u" < typeof IntersectionObserver) return;
            let l = a.getBoundingClientRect();
            if (l.top < window.innerHeight * (1 - e) && l.bottom > 0) return void s("in");
            s("armed");
            let r = new IntersectionObserver(e => {
                let [a] = e;
                a.isIntersecting && (s("in"), r.disconnect())
            }, {
                rootMargin: `0px 0px -${Math.round(100*e)}% 0px`,
                threshold: 0
            });
            return r.observe(a), () => r.disconnect()
        }, [e]), [t, l]
    }, "K", 0, function(e, t, l) {
        let o = (0, a.useCallback)(() => {
            var a;
            let s = null == (a = i(e)) ? void 0 : a.getItem(t);
            return "1" === s || "0" === s ? "1" === s : r.get(`${e}:${t}`) ?? l
        }, [e, t, l]);
        return [(0, a.useSyncExternalStore)(n, o, () => l), (0, a.useCallback)(a => {
            r.set(`${e}:${t}`, a);
            try {
                var l;
                null == (l = i(e)) || l.setItem(t, a ? "1" : "0")
            } catch {}
            s.forEach(e => e())
        }, [e, t])]
    }])
}, 177014, e => {
    e.v({
        boatReflection: "UieHhW_boatReflection",
        brocadeBand: "UieHhW_brocadeBand",
        celebrations: "UieHhW_celebrations",
        chapterHeading: "UieHhW_chapterHeading",
        chapterSub: "UieHhW_chapterSub",
        chapterTitle: "UieHhW_chapterTitle",
        closing: "UieHhW_closing",
        closingActions: "UieHhW_closingActions",
        closingArt: "UieHhW_closingArt",
        closingCopy: "UieHhW_closingCopy",
        closingDate: "UieHhW_closingDate",
        closingFoot: "UieHhW_closingFoot",
        closingGroup: "UieHhW_closingGroup",
        closingHashtag: "UieHhW_closingHashtag",
        closingImg: "UieHhW_closingImg",
        closingLabel: "UieHhW_closingLabel",
        closingMark: "UieHhW_closingMark",
        closingNames: "UieHhW_closingNames",
        closingPanel: "UieHhW_closingPanel",
        closingRule: "UieHhW_closingRule",
        closingThanks: "UieHhW_closingThanks",
        closingTitle: "UieHhW_closingTitle",
        cloud: "UieHhW_cloud",
        cloudA: "UieHhW_cloudA",
        cloudB: "UieHhW_cloudB",
        cloudC: "UieHhW_cloudC",
        cloudD: "UieHhW_cloudD",
        cloudPath: "UieHhW_cloudPath",
        coda: "UieHhW_coda",
        codaMark: "UieHhW_codaMark",
        countdown: "UieHhW_countdown",
        countdownArt: "UieHhW_countdownArt",
        countdownCopy: "UieHhW_countdownCopy",
        countdownDate: "UieHhW_countdownDate",
        countdownImg: "UieHhW_countdownImg",
        countdownShade: "UieHhW_countdownShade",
        countdownTo: "UieHhW_countdownTo",
        crown: "UieHhW_crown",
        crownBlessing: "UieHhW_crownBlessing",
        crownDate: "UieHhW_crownDate",
        crownDot: "UieHhW_crownDot",
        crownGuest: "UieHhW_crownGuest",
        crownName: "UieHhW_crownName",
        crownNames: "UieHhW_crownNames",
        crownOm: "UieHhW_crownOm",
        crownWeds: "UieHhW_crownWeds",
        diya: "UieHhW_diya",
        diyaReflection: "UieHhW_diyaReflection",
        eyebrow: "UieHhW_eyebrow",
        frame: "UieHhW_frame",
        frameIn: "UieHhW_frameIn",
        gallery: "UieHhW_gallery",
        galleryArrow: "UieHhW_galleryArrow",
        galleryButton: "UieHhW_galleryButton",
        galleryCaption: "UieHhW_galleryCaption",
        galleryImg: "UieHhW_galleryImg",
        galleryItem: "UieHhW_galleryItem",
        galleryNext: "UieHhW_galleryNext",
        galleryPin: "UieHhW_galleryPin",
        galleryPrev: "UieHhW_galleryPrev",
        galleryStrip: "UieHhW_galleryStrip",
        galleryTitle: "UieHhW_galleryTitle",
        galleryTrack: "UieHhW_galleryTrack",
        galleryViewport: "UieHhW_galleryViewport",
        gate: "UieHhW_gate",
        gateAnd: "UieHhW_gateAnd",
        gateDate: "UieHhW_gateDate",
        gateDiya: "UieHhW_gateDiya",
        gateEnter: "UieHhW_gateEnter",
        gateEnterGlow: "UieHhW_gateEnterGlow",
        gateGuest: "UieHhW_gateGuest",
        gateInvite: "UieHhW_gateInvite",
        gateLamp: "UieHhW_gateLamp",
        gateLampGlow: "UieHhW_gateLampGlow",
        gateLeaving: "UieHhW_gateLeaving",
        gateMist: "UieHhW_gateMist",
        gateNames: "UieHhW_gateNames",
        gateNight: "UieHhW_gateNight",
        gateOm: "UieHhW_gateOm",
        gateRiver: "UieHhW_gateRiver",
        gateSkip: "UieHhW_gateSkip",
        gateSky: "UieHhW_gateSky",
        gateStars: "UieHhW_gateStars",
        gateWater: "UieHhW_gateWater",
        gateWelcome: "UieHhW_gateWelcome",
        ghatLight: "UieHhW_ghatLight",
        glints: "UieHhW_glints",
        henna: "UieHhW_henna",
        ink: "UieHhW_ink",
        invAmp: "UieHhW_invAmp",
        invArch: "UieHhW_invArch",
        invBlessings: "UieHhW_invBlessings",
        invBody: "UieHhW_invBody",
        invCornice: "UieHhW_invCornice",
        invCouple: "UieHhW_invCouple",
        invDate: "UieHhW_invDate",
        invDeva: "UieHhW_invDeva",
        invElderLabel: "UieHhW_invElderLabel",
        invElderLine: "UieHhW_invElderLine",
        invElders: "UieHhW_invElders",
        invEldersTitle: "UieHhW_invEldersTitle",
        invEmblemArt: "UieHhW_invEmblemArt",
        invEmblemGlyph: "UieHhW_invEmblemGlyph",
        invEmblemMark: "UieHhW_invEmblemMark",
        invEyebrow: "UieHhW_invEyebrow",
        invFrame: "UieHhW_invFrame",
        invHosts: "UieHhW_invHosts",
        invLabel: "UieHhW_invLabel",
        invLamp: "UieHhW_invLamp",
        invLampLeft: "UieHhW_invLampLeft",
        invLampRight: "UieHhW_invLampRight",
        invLotus: "UieHhW_invLotus",
        invName: "UieHhW_invName",
        invPaper: "UieHhW_invPaper",
        invParents: "UieHhW_invParents",
        invPerson: "UieHhW_invPerson",
        invRequest: "UieHhW_invRequest",
        invRule: "UieHhW_invRule",
        invTime: "UieHhW_invTime",
        invTree: "UieHhW_invTree",
        invVenue: "UieHhW_invVenue",
        invWhen: "UieHhW_invWhen",
        invitation: "UieHhW_invitation",
        jharokha: "UieHhW_jharokha",
        journey: "UieHhW_journey",
        kvArchIn: "UieHhW_kvArchIn",
        kvArtFloat: "UieHhW_kvArtFloat",
        kvBob: "UieHhW_kvBob",
        kvBreathe: "UieHhW_kvBreathe",
        kvCloudDrift: "UieHhW_kvCloudDrift",
        kvCrownSink: "UieHhW_kvCrownSink",
        kvCue: "UieHhW_kvCue",
        kvCueOut: "UieHhW_kvCueOut",
        kvDayBreak: "UieHhW_kvDayBreak",
        kvDolly: "UieHhW_kvDolly",
        kvDraw: "UieHhW_kvDraw",
        kvDrift: "UieHhW_kvDrift",
        kvDusk: "UieHhW_kvDusk",
        kvFade: "UieHhW_kvFade",
        kvFall: "UieHhW_kvFall",
        kvFarRise: "UieHhW_kvFarRise",
        kvFlare: "UieHhW_kvFlare",
        kvFlicker: "UieHhW_kvFlicker",
        kvFloat: "UieHhW_kvFloat",
        kvFrameSettle: "UieHhW_kvFrameSettle",
        kvGateOut: "UieHhW_kvGateOut",
        kvGlintText: "UieHhW_kvGlintText",
        kvGrow: "UieHhW_kvGrow",
        kvHover: "UieHhW_kvHover",
        kvInk: "UieHhW_kvInk",
        kvLampBob: "UieHhW_kvLampBob",
        kvLampRise: "UieHhW_kvLampRise",
        kvMarquee: "UieHhW_kvMarquee",
        kvMarqueeBack: "UieHhW_kvMarqueeBack",
        kvMistDrift: "UieHhW_kvMistDrift",
        kvPartLeft: "UieHhW_kvPartLeft",
        kvPartRight: "UieHhW_kvPartRight",
        kvPlateGlint: "UieHhW_kvPlateGlint",
        kvRays: "UieHhW_kvRays",
        kvRise: "UieHhW_kvRise",
        kvRiseBlur: "UieHhW_kvRiseBlur",
        kvRiverRise: "UieHhW_kvRiverRise",
        kvRiverSettle: "UieHhW_kvRiverSettle",
        kvSettle: "UieHhW_kvSettle",
        kvSheen: "UieHhW_kvSheen",
        kvShimmer: "UieHhW_kvShimmer",
        kvSpin: "UieHhW_kvSpin",
        kvSunClimb: "UieHhW_kvSunClimb",
        kvSway: "UieHhW_kvSway",
        kvTempleRise: "UieHhW_kvTempleRise",
        kvThread: "UieHhW_kvThread",
        kvTick: "UieHhW_kvTick",
        kvTwinkle: "UieHhW_kvTwinkle",
        kvUnveil: "UieHhW_kvUnveil",
        kvWalk: "UieHhW_kvWalk",
        kvZoomIn: "UieHhW_kvZoomIn",
        lamp: "UieHhW_lamp",
        lampLeft: "UieHhW_lampLeft",
        lampRight: "UieHhW_lampRight",
        milestone: "UieHhW_milestone",
        milestoneBody: "UieHhW_milestoneBody",
        milestoneCard: "UieHhW_milestoneCard",
        milestoneMark: "UieHhW_milestoneMark",
        milestoneNumber: "UieHhW_milestoneNumber",
        milestoneTitle: "UieHhW_milestoneTitle",
        moment: "UieHhW_moment",
        momentArch: "UieHhW_momentArch",
        momentArt: "UieHhW_momentArt",
        momentFrame: "UieHhW_momentFrame",
        momentHashtag: "UieHhW_momentHashtag",
        momentMonogram: "UieHhW_momentMonogram",
        momentPhoto: "UieHhW_momentPhoto",
        momentTemple: "UieHhW_momentTemple",
        momentWindow: "UieHhW_momentWindow",
        nowrap: "UieHhW_nowrap",
        petal: "UieHhW_petal",
        petals: "UieHhW_petals",
        pill: "UieHhW_pill",
        pillSolid: "UieHhW_pillSolid",
        plate: "UieHhW_plate",
        plateLabel: "UieHhW_plateLabel",
        plateNumber: "UieHhW_plateNumber",
        plates: "UieHhW_plates",
        progress: "UieHhW_progress",
        rise: "UieHhW_rise",
        riverfront: "UieHhW_riverfront",
        riverfrontImg: "UieHhW_riverfrontImg",
        riverfrontIn: "UieHhW_riverfrontIn",
        root: "UieHhW_root",
        rsvp: "UieHhW_rsvp",
        rsvpBand: "UieHhW_rsvpBand",
        rsvpBandFoot: "UieHhW_rsvpBandFoot",
        rsvpCard: "UieHhW_rsvpCard",
        rsvpForm: "UieHhW_rsvpForm",
        rsvpHead: "UieHhW_rsvpHead",
        rsvpSub: "UieHhW_rsvpSub",
        scene: "UieHhW_scene",
        sceneActions: "UieHhW_sceneActions",
        sceneArt: "UieHhW_sceneArt",
        sceneCard: "UieHhW_sceneCard",
        sceneCount: "UieHhW_sceneCount",
        sceneDate: "UieHhW_sceneDate",
        sceneDecor: "UieHhW_sceneDecor",
        sceneDescription: "UieHhW_sceneDescription",
        sceneDress: "UieHhW_sceneDress",
        sceneFacts: "UieHhW_sceneFacts",
        sceneHalo: "UieHhW_sceneHalo",
        sceneImg: "UieHhW_sceneImg",
        sceneInner: "UieHhW_sceneInner",
        sceneName: "UieHhW_sceneName",
        sceneSeam: "UieHhW_sceneSeam",
        sceneWord: "UieHhW_sceneWord",
        scenes: "UieHhW_scenes",
        seam: "UieHhW_seam",
        shimmer: "UieHhW_shimmer",
        sky: "UieHhW_sky",
        skyDay: "UieHhW_skyDay",
        skylineFar: "UieHhW_skylineFar",
        srOnly: "UieHhW_srOnly",
        stage: "UieHhW_stage",
        stageBoat: "UieHhW_stageBoat",
        stageCue: "UieHhW_stageCue",
        stageCueLine: "UieHhW_stageCueLine",
        stageCueWrap: "UieHhW_stageCueWrap",
        stagePin: "UieHhW_stagePin",
        steps: "UieHhW_steps",
        story: "UieHhW_story",
        storyArch: "UieHhW_storyArch",
        storyBackdrop: "UieHhW_storyBackdrop",
        storyBody: "UieHhW_storyBody",
        storyEnd: "UieHhW_storyEnd",
        storyGrid: "UieHhW_storyGrid",
        storyImg: "UieHhW_storyImg",
        storyLane: "UieHhW_storyLane",
        storyList: "UieHhW_storyList",
        storyPath: "UieHhW_storyPath",
        storyThread: "UieHhW_storyThread",
        storyTrack: "UieHhW_storyTrack",
        storyVeil: "UieHhW_storyVeil",
        storyWalk: "UieHhW_storyWalk",
        stringLights: "UieHhW_stringLights",
        sun: "UieHhW_sun",
        swatch: "UieHhW_swatch",
        toran: "UieHhW_toran",
        viewer: "UieHhW_viewer",
        viewerButton: "UieHhW_viewerButton",
        viewerCaption: "UieHhW_viewerCaption",
        viewerClose: "UieHhW_viewerClose",
        viewerCount: "UieHhW_viewerCount",
        viewerFigure: "UieHhW_viewerFigure",
        viewerFrame: "UieHhW_viewerFrame",
        viewerImg: "UieHhW_viewerImg",
        viewerNext: "UieHhW_viewerNext",
        viewerPreload: "UieHhW_viewerPreload",
        viewerPrev: "UieHhW_viewerPrev"
    })
}, 300235, e => {
    "use strict";
    var a = e.i(729176),
        t = e.i(244835),
        l = e.i(686459),
        s = e.i(301187),
        r = e.i(147196),
        i = e.i(541464),
        n = e.i(19269),
        o = e.i(600024),
        d = e.i(149504),
        c = e.i(428509),
        u = e.i(48407),
        h = e.i(301444),
        m = e.i(692126),
        p = e.i(423088),
        f = e.i(506563),
        g = e.i(738371),
        y = e.i(575198),
        v = e.i(337414),
        x = e.i(664857),
        j = e.i(643036),
        b = e.i(396243),
        w = e.i(949689),
        N = e.i(609947),
        k = e.i(412589),
        _ = e.i(348892),
        $ = e.i(849517),
        W = e.i(477201),
        C = e.i(565617),
        F = e.i(519942),
        L = e.i(663036);

    function S(e) {
        let {
            logo: t,
            color: l
        } = e;
        return (0, a.jsx)(v.b, {
            children: (0, a.jsx)("span", {
                "aria-hidden": "true",
                className: L.default.logoMark,
                style: {
                    "--logo": `url("${t}")`,
                    backgroundColor: l
                }
            })
        })
    }

    function T(e) {
        let {
            className: t,
            color: l
        } = e;
        return (0, a.jsx)("svg", {
            className: t,
            viewBox: "0 0 12 12",
            fill: l,
            "aria-hidden": "true",
            children: (0, a.jsx)("path", {
                d: "M6 0 7 5l5 1-5 1-1 5-1-5-5-1 5-1Z"
            })
        })
    }

    function O(e) {
        let {
            className: t,
            theme: l
        } = e, {
            palette: s
        } = l;
        return (0, a.jsxs)("svg", {
            className: t,
            viewBox: "-20 -20 40 40",
            "aria-hidden": "true",
            children: [(0, a.jsx)("circle", {
                r: "19",
                fill: s.surface,
                stroke: s.secondary,
                strokeWidth: "1"
            }), (0, a.jsx)("g", {
                fill: (0, b.L)(s.primary, .85),
                children: [0, 45, 90, 135, 180, 225, 270, 315].map(e => (0, a.jsx)("path", {
                    d: "M0-3C3-7 3-12 0-15-3-12-3-7 0-3Z",
                    transform: `rotate(${e})`
                }, e))
            }), (0, a.jsx)("circle", {
                r: "3.2",
                fill: s.secondary
            })]
        })
    }

    function R(e) {
        let {
            className: t,
            color: l
        } = e;
        return (0, a.jsxs)("svg", {
            className: t,
            viewBox: "0 0 300 12",
            fill: "none",
            "aria-hidden": "true",
            children: [(0, a.jsx)("path", {
                d: "M0 6h138M162 6h138",
                stroke: l,
                strokeWidth: "1"
            }), (0, a.jsx)("path", {
                d: "M150 0l1.6 4.4L156 6l-4.4 1.6L150 12l-1.6-4.4L144 6l4.4-1.6Z",
                fill: l
            })]
        })
    }

    function q(e) {
        let {
            className: t,
            color: l
        } = e, s = Array.from({
            length: 11
        }, (e, a) => -75 + 15 * a);
        return (0, a.jsxs)("svg", {
            className: t,
            viewBox: "0 0 300 80",
            fill: "none",
            stroke: l,
            strokeWidth: "1",
            "aria-hidden": "true",
            children: [s.map(e => {
                let t = e % 30 == 0 ? 72 : 52,
                    l = e * Math.PI / 180;
                return (0, a.jsx)("path", {
                    d: `M150 76L${(150+t*Math.sin(l)).toFixed(1)} ${(76-t*Math.cos(l)).toFixed(1)}`
                }, e)
            }), (0, a.jsx)("path", {
                d: "M20 76h260"
            }), (0, a.jsx)("path", {
                d: "M78 71l1.2 3.8L83 76l-3.8 1.2L78 81l-1.2-3.8L73 76l3.8-1.2ZM222 71l1.2 3.8L227 76l-3.8 1.2L222 81l-1.2-3.8L217 76l3.8-1.2Z",
                fill: l,
                stroke: "none"
            })]
        })
    }

    function M(e, a) {
        let t = e - 2 - 12,
            l = l => {
                let s = Math.PI - l * Math.PI / a;
                return {
                    x: 200 + 187 * Math.cos(s),
                    y: e - t * Math.sin(s)
                }
            },
            s = e => e.toFixed(1),
            r = `M${s(l(0).x)} ${e}`;
        for (let t = 0; t < a; t++) {
            let a = l(t),
                i = l(t + 1),
                n = (a.x + i.x) / 2,
                o = (a.y + i.y) / 2,
                d = Math.hypot(n - 200, o - e) || 1,
                c = n + (n - 200) / d * 24,
                u = o + (o - e) / d * 24;
            r += `Q${s(c)} ${s(u)} ${s(i.x)} ${s(i.y)}`
        }
        return r
    }
    let E = {
            h: 116,
            d: M(116, 7)
        },
        D = {
            h: 84,
            d: M(84, 5)
        };

    function H(e) {
        let {
            className: t,
            cap: l,
            flip: s = !1,
            fill: r,
            stroke: i
        } = e, n = Array.from({
            length: 9
        }, (e, a) => -60 + 15 * a);
        return (0, a.jsxs)("svg", {
            className: t,
            viewBox: `0 0 400 ${l.h}`,
            "aria-hidden": "true",
            children: [(0, a.jsx)("g", {
                transform: s ? `translate(0 ${l.h}) scale(1 -1)` : void 0,
                children: (0, a.jsx)("path", {
                    d: l.d,
                    fill: r,
                    stroke: i,
                    strokeWidth: "1.5",
                    vectorEffect: "non-scaling-stroke"
                })
            }), s ? (0, a.jsxs)("g", {
                stroke: i,
                strokeWidth: "1",
                vectorEffect: "non-scaling-stroke",
                children: [(0, a.jsx)("path", {
                    d: "M60 6h280"
                }), n.map(e => {
                    let t = e * Math.PI / 180,
                        l = e % 30 == 0 ? 58 : 42;
                    return (0, a.jsx)("path", {
                        d: `M200 6L${(200+l*Math.sin(t)).toFixed(1)} ${(6+l*Math.cos(t)).toFixed(1)}`
                    }, e)
                })]
            }) : null]
        })
    }

    function A(e) {
        let {
            target: l,
            event: r,
            events: i,
            theme: n,
            scriptFont: o
        } = e, d = (0, s.r)("inviteThemes.ram-mandir.countdown"), c = (0, s.r)("inviteThemes.ram-mandir.events"), u = (0, x.f)(), {
            palette: h,
            headingFont: m,
            headingWeight: p
        } = n, f = (0, F.f)(l.getTime()), g = (0, C.f)(), y = e => String(e).padStart(2, "0"), j = {
            fontFamily: m,
            fontWeight: p ?? 600,
            color: h.primary
        }, N = [];
        if (r) {
            let e = u.date(r.date, {
                    weekday: "long"
                }),
                t = u.eventTimeOf(r, {
                    viewerTimezone: g
                });
            N.push({
                key: "when",
                icon: (0, a.jsx)(k.f, {
                    "aria-hidden": "true"
                }),
                title: d("when"),
                body: (0, a.jsxs)(a.Fragment, {
                    children: [e, t ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("br", {}), t]
                    }) : null]
                })
            });
            let l = (0, W.A)(r);
            (l || r.mapsUrl) && N.push({
                key: "where",
                icon: (0, a.jsx)(_.f, {
                    "aria-hidden": "true"
                }),
                title: d("where"),
                body: (0, a.jsxs)(a.Fragment, {
                    children: [l, r.mapsUrl ? (0, a.jsxs)(a.Fragment, {
                        children: [l ? (0, a.jsx)("br", {}) : null, (0, a.jsx)("a", {
                            href: r.mapsUrl,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: L.default.factLink,
                            style: {
                                color: h.primary
                            },
                            children: c("viewLocation")
                        })]
                    }) : null]
                })
            })
        }
        let S = [...new Set(i.map(e => {
            var a;
            return null == (a = e.dressCode) ? void 0 : a.trim()
        }).filter(Boolean))].slice(0, 3);
        S.length && N.push({
            key: "wear",
            icon: (0, a.jsx)($.f, {
                "aria-hidden": "true"
            }),
            title: d("dressCode"),
            body: S.join(" · ")
        });
        let O = f ? [{
            value: String(f.days),
            label: d("days")
        }, {
            value: y(f.hours),
            label: d("hours")
        }, {
            value: y(f.minutes),
            label: d("minutes")
        }, {
            value: y(f.seconds),
            label: d("seconds")
        }] : ["days", "hours", "minutes", "seconds"].map(e => ({
            value: "--",
            label: d(e)
        }));
        return (0, a.jsxs)("section", {
            className: L.default.countdown,
            "aria-labelledby": "ram-mandir-countdown",
            style: {
                "--gold": h.secondary,
                "--ring": (0, b.L)(h.primary, .85),
                "--keyline": (0, b.L)(h.primary, .4),
                "--shadow": (0, b.L)(h.text, .3),
                background: `linear-gradient(${(0,b.L)(h.secondary,.1)}, ${h.background} 40%)`,
                color: h.text
            },
            children: [w.L.src ? (0, a.jsx)(a.Fragment, {
                children: ["L", "R"].map(e => (0, a.jsx)("div", {
                    "aria-hidden": "true",
                    className: `${L.default.bloom} ${"L"===e?L.default.bloomL:L.default.bloomR}`,
                    style: {
                        "--h-p": w.L.h.p,
                        "--h-w": w.L.h.w,
                        aspectRatio: w.L.aspect,
                        backgroundImage: `url("${w.L.src}")`
                    }
                }, e))
            }) : null, (0, a.jsx)(q, {
                className: L.default.countdownSun,
                color: h.secondary
            }), (0, a.jsx)(v.b, {
                children: (0, a.jsxs)("header", {
                    className: L.default.countdownHead,
                    children: [(0, a.jsx)("p", {
                        className: L.default.countdownScript,
                        style: {
                            fontFamily: o,
                            color: h.primary
                        },
                        children: (null == f ? void 0 : f.done) ? d("eyebrowDone") : d("eyebrow")
                    }), (0, a.jsx)("h2", {
                        id: "ram-mandir-countdown",
                        className: L.default.countdownHeading,
                        style: j,
                        children: (null == f ? void 0 : f.done) ? d("titleDone") : d("title")
                    }), (null == r ? void 0 : r.name) ? (0, a.jsx)("p", {
                        className: L.default.countdownFor,
                        style: {
                            color: h.muted
                        },
                        children: (null == f ? void 0 : f.done) ? r.name : d("toEvent", {
                            event: r.name
                        })
                    }) : null]
                })
            }), (null == f ? void 0 : f.done) ? null : (0, a.jsx)(v.b, {
                children: (0, a.jsx)("div", {
                    className: L.default.clock,
                    role: "timer",
                    "aria-label": f ? d("daysToGo", {
                        count: f.days
                    }) : d("label"),
                    children: O.map((e, l) => (0, a.jsxs)(t.Fragment, {
                        children: [l > 0 ? (0, a.jsx)(T, {
                            className: L.default.clockSpark,
                            color: h.secondary
                        }) : null, (0, a.jsxs)("div", {
                            className: L.default.clockUnit,
                            "aria-hidden": "true",
                            style: {
                                background: h.surface
                            },
                            children: [(0, a.jsx)("span", {
                                className: L.default.clockValue,
                                style: {
                                    fontFamily: m,
                                    fontWeight: p ?? 600,
                                    color: h.primary
                                },
                                children: e.value
                            }), (0, a.jsx)("span", {
                                className: L.default.clockLabel,
                                style: {
                                    color: h.muted
                                },
                                children: e.label
                            })]
                        })]
                    }, e.label))
                })
            }), N.length ? (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(R, {
                    className: L.default.countdownRule,
                    color: h.secondary
                }), (0, a.jsxs)(v.b, {
                    children: [(0, a.jsx)("h3", {
                        className: L.default.factsHeading,
                        style: j,
                        children: d("factsHeading")
                    }), (0, a.jsx)("ul", {
                        className: L.default.facts,
                        children: N.map(e => (0, a.jsxs)("li", {
                            className: L.default.fact,
                            children: [(0, a.jsx)("span", {
                                className: L.default.factIcon,
                                style: {
                                    color: h.primary
                                },
                                children: e.icon
                            }), (0, a.jsx)("span", {
                                className: L.default.factTitle,
                                style: {
                                    fontFamily: m,
                                    color: h.primary
                                },
                                children: e.title
                            }), (0, a.jsx)("span", {
                                className: L.default.factBody,
                                children: e.body
                            })]
                        }, e.key))
                    })]
                })]
            }) : null]
        })
    }
    var P = e.i(764351);

    function I(e) {
        let {
            family: t,
            couple: l,
            theme: r,
            scriptFont: i
        } = e, n = (0, s.r)("family"), {
            palette: o,
            headingFont: d,
            headingWeight: c
        } = r, u = { ...r,
            palette: { ...o,
                accent: o.primary
            }
        };
        return (0, a.jsxs)("section", {
            className: L.default.familyAct,
            "aria-labelledby": "ram-mandir-family",
            style: {
                background: o.background
            },
            children: [(0, a.jsx)(v.b, {
                children: (0, a.jsxs)("header", {
                    className: L.default.familyHead,
                    children: [(0, a.jsx)(O, {
                        className: L.default.familyLotus,
                        theme: r
                    }), (0, a.jsx)("p", {
                        className: L.default.familyScript,
                        style: {
                            fontFamily: i,
                            color: o.primary
                        },
                        children: n("eyebrow")
                    }), (0, a.jsx)("h2", {
                        id: "ram-mandir-family",
                        className: L.default.familyHeading,
                        style: {
                            fontFamily: d,
                            fontWeight: c ?? 600,
                            color: o.text
                        },
                        children: n("title")
                    }), (0, a.jsx)(R, {
                        className: L.default.familyRule,
                        color: o.secondary
                    })]
                })
            }), (0, a.jsx)("div", {
                className: L.default.familyBody,
                children: (0, a.jsx)(P.f, {
                    family: t,
                    couple: l,
                    theme: u,
                    variant: "panel",
                    showHeading: !1
                })
            })]
        })
    }

    function B(e) {
        var t;
        let {
            family: l,
            couple: s,
            theme: r
        } = e, {
            palette: i
        } = r, n = null == l || null == (t = l.blessings) ? void 0 : t.trim(), o = [null == l ? void 0 : l.partnerOne, null == l ? void 0 : l.partnerTwo].some(e => null == e ? void 0 : e.grandparents.some(e => e.name.trim()));
        if (!l || !n && !o) return null;
        let d = { ...(0, u.e)(r),
            title: i.primary,
            border: (0, b.L)(i.primary, .35)
        };
        return (0, a.jsx)("section", {
            className: L.default.familyElders,
            style: {
                background: i.background
            },
            children: (0, a.jsxs)(v.b, {
                children: [(0, a.jsx)(O, {
                    className: L.default.familyLotus,
                    theme: r
                }), (0, a.jsx)(u.R, {
                    family: l,
                    couple: s,
                    theme: r,
                    tones: d
                })]
            })
        })
    }
    var U = e.i(888531),
        z = e.i(642895);

    function G(e) {
        let {
            one: t,
            two: l,
            logo: r,
            shareUrl: i,
            shareSettings: n,
            watermarkEnabled: o,
            theme: d,
            scriptFont: c
        } = e, u = (0, s.r)("share"), h = (0, s.r)("inviteThemes.ram-mandir.footer"), m = (0, s.r)("invite.footer"), p = (0, s.r)("inviteThemes.ram-mandir.hero"), {
            palette: f,
            headingFont: g,
            headingWeight: y
        } = d, x = {
            fontFamily: g,
            fontWeight: y ?? 600,
            color: (0, b.L)(f.primary, .85)
        }, j = Math.min(1, 8 / Math.max(t.length, l.length, 1));
        return (0, a.jsxs)("footer", {
            className: L.default.footer,
            style: {
                "--name-scale": j,
                "--pond-p": `url("${w.P.p.src}")`,
                "--pond-w": `url("${w.P.w.src}")`,
                "--pond-aspect-p": w.P.p.aspect,
                "--pond-aspect-w": w.P.w.aspect,
                "--pond-sky-p": w.P.p.sky,
                "--pond-sky-w": w.P.w.sky,
                background: f.background,
                color: f.text
            },
            children: [(0, a.jsxs)("div", {
                className: L.default.footerCopy,
                children: [(0, a.jsx)(q, {
                    className: L.default.footerSun,
                    color: f.secondary
                }), r ? (0, a.jsx)(S, {
                    logo: r,
                    color: f.primary
                }) : null, (0, a.jsxs)(v.b, {
                    children: [(0, a.jsx)("p", {
                        className: L.default.footerScript,
                        style: {
                            fontFamily: c,
                            color: f.primary
                        },
                        children: h("eyebrow")
                    }), (0, a.jsx)("h2", {
                        className: L.default.footerHeading,
                        style: {
                            fontFamily: g,
                            fontWeight: y ?? 600,
                            color: f.primary
                        },
                        children: h("title")
                    }), (0, a.jsx)("p", {
                        className: L.default.footerLine,
                        style: {
                            color: f.muted
                        },
                        children: m("message")
                    })]
                }), (0, a.jsx)(v.b, {
                    children: (0, a.jsxs)("p", {
                        className: L.default.footerNames,
                        children: [(0, a.jsx)("span", {
                            style: x,
                            children: t
                        }), (0, a.jsx)("span", {
                            className: L.default.footerAnd,
                            style: {
                                fontFamily: c,
                                color: x.color
                            },
                            children: p("and")
                        }), (0, a.jsx)("span", {
                            style: x,
                            children: l
                        })]
                    })
                }), (0, a.jsx)(v.b, {
                    children: (0, a.jsxs)("div", {
                        className: L.default.footerShare,
                        children: [(0, a.jsx)("p", {
                            className: L.default.footerShareLabel,
                            style: {
                                color: f.muted
                            },
                            children: u("heading")
                        }), (0, a.jsx)(z.f, {
                            url: i,
                            title: `${t} & ${l}`,
                            settings: n,
                            theme: d
                        })]
                    })
                }), o ? (0, a.jsx)("p", {
                    id: "invite-watermark",
                    className: L.default.footerMark,
                    children: (0, a.jsx)("a", {
                        href: "/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: {
                            color: (0, b.L)(f.muted, .8)
                        },
                        children: (0, a.jsx)(U.LocalizedWatermarkText, {})
                    })
                }) : null]
            }), (0, a.jsx)("div", {
                "aria-hidden": "true",
                className: L.default.pond
            })]
        })
    }
    var J = e.i(431817),
        V = e.i(735388),
        K = e.i(736642),
        Y = e.i(230715);

    function Z(e) {
        let {
            photos: l,
            theme: r,
            onOpen: i
        } = e, n = (0, s.r)("invite.gallery"), {
            palette: o
        } = r, d = (0, t.useRef)(null), c = l.length, u = Math.ceil(20 / c), h = u * c, [m, p] = (0, t.useState)(h);
        (0, t.useEffect)(() => {
            let e, a = d.current;
            if (!a) return;
            let t = e => a.children[e],
                l = e => t(e).offsetLeft - (a.clientWidth - t(e).offsetWidth) / 2;
            a.scrollLeft = l(h);
            let s = requestAnimationFrame(() => p(h)),
                r = () => {
                    let e = t(c).offsetLeft - t(0).offsetLeft,
                        s = e / c / 2,
                        r = Math.floor((a.scrollLeft - l(h) + s) / e);
                    0 !== r && (a.scrollLeft -= r * e);
                    let i = h;
                    for (let e = h; e < h + c; e++) Math.abs(l(e) - a.scrollLeft) < Math.abs(l(i) - a.scrollLeft) && (i = e);
                    p(i)
                };
            if ("onscrollend" in window) return a.addEventListener("scrollend", r), () => {
                cancelAnimationFrame(s), a.removeEventListener("scrollend", r)
            };
            let i = () => {
                clearTimeout(e), e = setTimeout(r, 150)
            };
            return a.addEventListener("scroll", i, {
                passive: !0
            }), () => {
                cancelAnimationFrame(s), clearTimeout(e), a.removeEventListener("scroll", i)
            }
        }, [c, h]), (0, t.useEffect)(() => {
            var e, a;
            let t = d.current;
            if (!t || (null == (a = window.CSS) || null == (e = a.supports) ? void 0 : e.call(a, "animation-timeline: view()")) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
            let l = Array.from(t.children),
                s = parseFloat(getComputedStyle(t).getPropertyValue("--side")) || .72;
            for (let e of l) e.style.transition = "none", e.style.scale = String(s), e.style.opacity = "0";
            let r = [],
                i = 0,
                n = () => {
                    i = 0;
                    let e = l[1].offsetLeft - l[0].offsetLeft;
                    if (!e) return;
                    let a = t.scrollLeft + t.clientWidth / 2,
                        n = (a - l[0].offsetLeft - l[0].offsetWidth / 2) / e,
                        o = l.slice(Math.max(0, Math.floor(n) - 2), Math.ceil(n) + 3);
                    for (let e of r) o.includes(e) || (e.style.opacity = "0");
                    for (let t of o) {
                        let l = Math.abs(t.offsetLeft + t.offsetWidth / 2 - a) / e;
                        t.style.scale = String(l < 1 ? 1 - (1 - s) * l : s), t.style.opacity = String(l < 1 ? 1 - .4 * l : Math.max(0, .6 * (2 - l)))
                    }
                    r = o
                },
                o = () => {
                    i || (i = requestAnimationFrame(n))
                };
            return o(), t.addEventListener("scroll", o, {
                passive: !0
            }), window.addEventListener("resize", o), () => {
                for (let e of (cancelAnimationFrame(i), t.removeEventListener("scroll", o), window.removeEventListener("resize", o), l)) e.style.removeProperty("transition"), e.style.removeProperty("scale"), e.style.removeProperty("opacity")
            }
        }, [c]);
        let f = e => {
                let a = d.current,
                    t = null == a ? void 0 : a.children[0];
                if (!a || !t) return;
                let {
                    marginLeft: l,
                    marginRight: s
                } = getComputedStyle(t), r = t.offsetWidth + parseFloat(l) + parseFloat(s), i = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                a.scrollBy({
                    left: e * r,
                    behavior: i ? "smooth" : "auto"
                })
            },
            g = {
                background: o.surface,
                color: o.primary,
                borderColor: o.secondary
            };
        return (0, a.jsxs)("div", {
            className: L.default.carousel,
            style: {
                "--shadow": (0, b.L)(o.text, .35),
                background: o.background
            },
            children: [(0, a.jsx)("ul", {
                ref: d,
                className: L.default.track,
                tabIndex: 0,
                "aria-label": n("carousel"),
                children: Array.from({
                    length: 2 * u + 1
                }, (e, t) => l.map((e, l) => {
                    let s = t === u;
                    return (0, a.jsxs)("li", {
                        className: L.default.slide,
                        "data-active": t * c + l === m ? "" : void 0,
                        "aria-hidden": !s || void 0,
                        children: [(0, a.jsx)("button", {
                            type: "button",
                            className: L.default.slidePhoto,
                            tabIndex: s ? void 0 : -1,
                            onClick: () => i(l),
                            children: (0, a.jsx)(J.default, {
                                src: e.url,
                                alt: s ? e.caption || n("photoAlt") : "",
                                fill: !0,
                                sizes: "(min-width: 768px) 500px, 60vw",
                                className: L.default.cover
                            })
                        }), e.caption ? (0, a.jsx)("p", {
                            className: L.default.slideCaption,
                            style: {
                                color: o.muted
                            },
                            children: e.caption
                        }) : null]
                    }, `${t}-${e.publicId||l}`)
                }))
            }), (0, a.jsxs)("div", {
                className: L.default.carouselNav,
                children: [(0, a.jsx)("button", {
                    type: "button",
                    className: L.default.carouselArrow,
                    style: g,
                    "aria-label": n("previous"),
                    onClick: () => f(-1),
                    children: (0, a.jsx)(V.f, {
                        "aria-hidden": "true"
                    })
                }), (0, a.jsxs)("p", {
                    className: L.default.carouselCount,
                    style: {
                        color: o.muted
                    },
                    children: [m % c + 1, " / ", c]
                }), (0, a.jsx)("button", {
                    type: "button",
                    className: L.default.carouselArrow,
                    style: g,
                    "aria-label": n("next"),
                    onClick: () => f(1),
                    children: (0, a.jsx)(K.f, {
                        "aria-hidden": "true"
                    })
                })]
            })]
        })
    }

    function Q(e) {
        let {
            photos: l,
            theme: r,
            scriptFont: i
        } = e, n = (0, s.r)("inviteThemes.ram-mandir.gallery"), o = (0, s.r)("invite.gallery"), {
            palette: d,
            headingFont: c,
            headingWeight: u
        } = r, h = (0, t.useMemo)(() => [...l].sort((e, a) => (e.displayOrder ?? 0) - (a.displayOrder ?? 0)), [l]), m = h.slice(0, 12), p = m.length >= 6, f = (0, t.useRef)(null), [g, y] = (0, t.useState)(0), v = e => {
            var a;
            y(e), null == (a = f.current) || a.showModal()
        }, x = (0, t.useCallback)(e => y(a => (a + e + h.length) % h.length), [h.length]), j = h[g];
        return (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsxs)("section", {
                className: L.default.gallery,
                "aria-labelledby": "ram-mandir-gallery",
                style: {
                    "--paper": d.background,
                    "--gold": d.secondary,
                    "--shadow": (0, b.L)(d.text, .35),
                    background: d.background
                },
                children: [(0, a.jsx)("ul", {
                    className: L.default.wheel,
                    "data-ring": p ? "full" : "fan",
                    children: m.map((e, t) => (0, a.jsx)("li", {
                        className: L.default.spoke,
                        style: {
                            "--slot": `${p?360/m.length*t:m.length>1?-70+140/(m.length-1)*t:0}deg`
                        },
                        children: (0, a.jsx)("button", {
                            type: "button",
                            className: L.default.wheelPhoto,
                            onClick: () => v(t),
                            children: (0, a.jsx)(J.default, {
                                src: e.url,
                                alt: e.caption || o("photoAlt"),
                                fill: !0,
                                sizes: "(min-width: 768px) 240px, 30vw",
                                className: L.default.cover
                            })
                        })
                    }, e.publicId || t))
                }), (0, a.jsxs)("header", {
                    className: L.default.galleryHub,
                    children: [(0, a.jsx)("p", {
                        className: L.default.galleryScript,
                        style: {
                            fontFamily: i,
                            color: d.primary
                        },
                        children: n("eyebrow")
                    }), (0, a.jsx)("h2", {
                        id: "ram-mandir-gallery",
                        className: L.default.galleryHeading,
                        style: {
                            fontFamily: c,
                            fontWeight: u ?? 600,
                            color: d.primary
                        },
                        children: o("title")
                    })]
                }), (0, a.jsxs)("dialog", {
                    ref: f,
                    className: L.default.lightbox,
                    "aria-label": o("viewer"),
                    style: {
                        "--scrim": (0, b.L)(d.text, .92),
                        "--chrome": d.surface,
                        "--button": (0, b.L)(d.surface, .14)
                    },
                    onClick: e => {
                        e.target === e.currentTarget && e.currentTarget.close()
                    },
                    onKeyDown: e => {
                        "ArrowRight" === e.key ? x(1) : "ArrowLeft" === e.key && x(-1)
                    },
                    children: [j ? (0, a.jsxs)("figure", {
                        className: L.default.lightboxFigure,
                        children: [(0, a.jsx)("div", {
                            className: L.default.lightboxFrame,
                            children: (0, a.jsx)(J.default, {
                                src: j.url,
                                alt: j.caption || o("photoAlt"),
                                fill: !0,
                                sizes: "100vw",
                                className: L.default.contain
                            })
                        }), (0, a.jsxs)("figcaption", {
                            className: L.default.lightboxCaption,
                            children: [j.caption ? (0, a.jsx)("span", {
                                children: j.caption
                            }) : null, (0, a.jsxs)("span", {
                                children: [g + 1, " / ", h.length]
                            })]
                        })]
                    }) : null, (0, a.jsx)("button", {
                        type: "button",
                        className: `${L.default.lightboxButton} ${L.default.lightboxClose}`,
                        "aria-label": o("close"),
                        onClick: () => {
                            var e;
                            return null == (e = f.current) ? void 0 : e.close()
                        },
                        children: (0, a.jsx)(Y.X, {
                            "aria-hidden": "true"
                        })
                    }), h.length > 1 ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("button", {
                            type: "button",
                            className: `${L.default.lightboxButton} ${L.default.lightboxPrev}`,
                            "aria-label": o("previous"),
                            onClick: () => x(-1),
                            children: (0, a.jsx)(V.f, {
                                "aria-hidden": "true"
                            })
                        }), (0, a.jsx)("button", {
                            type: "button",
                            className: `${L.default.lightboxButton} ${L.default.lightboxNext}`,
                            "aria-label": o("next"),
                            onClick: () => x(1),
                            children: (0, a.jsx)(K.f, {
                                "aria-hidden": "true"
                            })
                        })]
                    }) : null]
                })]
            }), h.length >= 2 ? (0, a.jsx)(Z, {
                photos: h,
                theme: r,
                onOpen: v
            }) : h[0] ? (0, a.jsx)("div", {
                className: L.default.carousel,
                style: {
                    "--shadow": (0, b.L)(d.text, .35),
                    background: d.background
                },
                children: (0, a.jsxs)("figure", {
                    className: L.default.solo,
                    children: [(0, a.jsx)("button", {
                        type: "button",
                        className: L.default.slidePhoto,
                        onClick: () => v(0),
                        children: (0, a.jsx)(J.default, {
                            src: h[0].url,
                            alt: h[0].caption || o("photoAlt"),
                            fill: !0,
                            sizes: "(min-width: 768px) 500px, 60vw",
                            className: L.default.cover
                        })
                    }), h[0].caption ? (0, a.jsx)("figcaption", {
                        className: L.default.slideCaption,
                        style: {
                            color: d.muted
                        },
                        children: h[0].caption
                    }) : null]
                })
            }) : null]
        })
    }
    var X = e.i(513821);
    let ee = e => (0, b.j)(e.text, "#0d0302", .7);

    function ea(e, a) {
        let t = e || ((null == a ? void 0 : a.kind) === "upload" ? a.src : "");
        return {
            mark: t,
            art: t || (null == a ? void 0 : a.kind) !== "image" ? "" : a.src,
            glyph: t || (null == a ? void 0 : a.kind) !== "glyph" ? "" : a.text
        }
    }

    function et(e, a) {
        let t = e.secondary;
        return {
            "--pk-gold": t,
            "--pk-gold-light": (0, b.j)(t, "#fff3d2", .55),
            "--pk-gold-deep": (0, b.j)(t, ee(e), .45),
            ...a.art ? {
                "--pk-ganesha": `url("${a.art}")`
            } : {},
            ...a.mark ? {
                "--pk-logo": `url("${a.mark}")`
            } : {}
        }
    }

    function el(e) {
        let {
            one: l,
            two: r,
            when: i,
            leaving: n,
            theme: o,
            invocation: d,
            emblem: c,
            logo: u,
            devanagariFont: h,
            scriptFont: m,
            onOpen: p,
            onSkip: f
        } = e, g = (0, s.r)("inviteThemes.ram-mandir"), y = (0, t.useRef)(null), v = (0, t.useRef)(null), {
            palette: x,
            headingFont: j,
            headingWeight: w
        } = o, N = Math.min(1, 7 / Math.max(l.length, r.length, 1));
        (0, t.useEffect)(() => {
            var e;
            null == (e = y.current) || e.focus({
                preventScroll: !0
            })
        }, []);
        let k = ea(u, c),
            {
                mark: _,
                glyph: $
            } = k,
            W = ee(x),
            C = x.secondary,
            F = {
                fontFamily: o.bodyFont,
                "--pk-glow": (0, b.j)(x.primary, "#1a0805", .45),
                "--pk-dusk": (0, b.j)(x.text, "#1a0805", .35),
                "--pk-deep": W,
                ...et(x, k),
                "--pk-paper": x.background,
                "--pk-paper-shade": (0, b.j)(C, x.text, .35),
                "--pk-cream": (0, b.j)(x.background, "#fff3d2", .3),
                "--pk-name-scale": N,
                "--pk-ink": (0, b.j)(x.text, W, .2)
            };
        return (0, a.jsxs)("div", {
            ref: y,
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "ram-mandir-patrika-names",
            tabIndex: -1,
            className: `${L.default.patrika} ${n?L.default.patrikaLeaving:""}`,
            style: F,
            onPointerUp: e => {
                0 === e.button && p()
            },
            onClick: p,
            onKeyDown: e => {
                if ("Escape" === e.key && f(), "Tab" === e.key) {
                    var a;
                    e.preventDefault(), null == (a = v.current) || a.focus()
                }
            },
            children: [(0, a.jsx)("div", {
                className: `${L.default.pkHalf} ${L.default.pkTop}`,
                "aria-hidden": "true",
                children: (0, a.jsx)("span", {
                    className: L.default.pkRod
                })
            }), (0, a.jsx)("div", {
                className: `${L.default.pkHalf} ${L.default.pkBottom}`,
                "aria-hidden": "true",
                children: (0, a.jsx)("span", {
                    className: L.default.pkRod
                })
            }), (0, a.jsxs)("div", {
                className: `${L.default.pkPrint} ${L.default.pkPrintTop}`,
                children: [d ? (0, a.jsx)("p", {
                    className: L.default.pkBlessing,
                    lang: /[\u0900-\u097F]/.test(d) ? "hi" : void 0,
                    style: {
                        fontFamily: h
                    },
                    children: d
                }) : null, (0, a.jsx)("p", {
                    className: L.default.pkKicker,
                    children: g("gate.kicker")
                }), (0, a.jsxs)("h2", {
                    id: "ram-mandir-patrika-names",
                    className: L.default.pkNames,
                    style: {
                        fontFamily: j,
                        fontWeight: w ?? 600
                    },
                    children: [(0, a.jsx)("span", {
                        children: l
                    }), (0, a.jsx)("span", {
                        className: L.default.pkAnd,
                        style: {
                            fontFamily: m
                        },
                        children: "&"
                    }), (0, a.jsx)("span", {
                        children: r
                    })]
                })]
            }), (0, a.jsxs)("div", {
                className: L.default.pkScroll,
                "aria-hidden": "true",
                children: [(0, a.jsx)("span", {
                    className: L.default.pkRoll
                }), (0, a.jsx)("span", {
                    className: `${L.default.pkThread} ${L.default.pkThreadA}`
                }), (0, a.jsx)("span", {
                    className: `${L.default.pkThread} ${L.default.pkThreadB}`
                }), (0, a.jsx)("span", {
                    className: `${L.default.pkTassel} ${L.default.pkTasselA}`
                }), (0, a.jsx)("span", {
                    className: `${L.default.pkTassel} ${L.default.pkTasselB}`
                })]
            }), (0, a.jsx)("button", {
                ref: v,
                type: "button",
                "data-invitation-gate": !0,
                className: _ ? `${L.default.pkSeal} ${L.default.pkSealLogo}` : L.default.pkSeal,
                "aria-label": g("gate.openLabel", {
                    names: `${l} & ${r}`
                }),
                onClick: e => {
                    e.stopPropagation(), p()
                },
                children: (0, a.jsx)("span", {
                    className: L.default.pkSealFace,
                    "aria-hidden": "true",
                    children: $ ? (0, a.jsx)("span", {
                        className: L.default.pkSealGlyph,
                        style: {
                            fontFamily: h
                        },
                        children: $
                    }) : null
                })
            }), (0, a.jsxs)("div", {
                className: `${L.default.pkPrint} ${L.default.pkPrintBottom}`,
                children: [i ? (0, a.jsx)("p", {
                    className: L.default.pkWhen,
                    style: {
                        fontFamily: j
                    },
                    children: i
                }) : null, (0, a.jsx)("p", {
                    className: L.default.pkHint,
                    style: {
                        color: (0, b.L)(C, .85)
                    },
                    children: g("gate.hint")
                })]
            })]
        })
    }
    let es = Array.from({
        length: 12
    }, (e, a) => {
        let t = a / 12 * Math.PI * 2 + (a % 2 ? .2 : 0),
            l = .85 + a % 3 * .3;
        return [Math.round(Math.cos(t) * l * 100) / 100, Math.round(Math.sin(t) * l * 70) / 100]
    });

    function er(e) {
        var i, n;
        let {
            hashtag: o,
            theme: c,
            logo: u,
            emblem: h,
            devanagariFont: m
        } = e, p = (0, s.r)("inviteThemes.ram-mandir.hashtag"), f = (0, s.r)("hashtag"), {
            palette: g,
            headingFont: y,
            headingWeight: v,
            bodyFont: x
        } = c, j = (0, t.useRef)(null), b = (0, l.f)(), w = (0, r.Q)(), N = (0, d.y)() && !b && !w, [k, _] = (0, t.useState)(!1), [$, W] = (0, t.useState)(0), [C, F] = (0, t.useState)(!1), S = (0, t.useRef)(null), T = (null == o || null == (i = o.tag) ? void 0 : i.trim()) ?? "", O = `#${T}`, R = (null == o || null == (n = o.caption) ? void 0 : n.trim()) ?? "", q = (0, t.useMemo)(() => {
            var e;
            return e = O, "u" > typeof Intl && "Segmenter" in Intl ? Array.from(new Intl.Segmenter(void 0, {
                granularity: "grapheme"
            }).segment(e), e => e.segment) : Array.from(e)
        }, [O]), M = ea(u, h), E = N ? k ? "play" : "armed" : "rest";
        if ((0, t.useEffect)(() => {
                let e = j.current;
                if (!N || k || !e || "u" < typeof IntersectionObserver) return;
                let a = new IntersectionObserver(e => {
                    e.some(e => e.isIntersecting) && (a.disconnect(), _(!0))
                }, {
                    threshold: .5
                });
                return a.observe(e), () => a.disconnect()
            }, [N, k]), (0, t.useEffect)(() => {
                let e = j.current;
                if ("play" !== E || !e || "u" < typeof IntersectionObserver) return;
                let a = !0,
                    t = new IntersectionObserver(e => {
                        a = e.some(e => e.isIntersecting)
                    });
                t.observe(e);
                let l = window.setInterval(() => {
                    a && W(e => e + 1)
                }, 6e3);
                return () => {
                    t.disconnect(), window.clearInterval(l)
                }
            }, [E]), (0, t.useEffect)(() => () => {
                S.current && clearTimeout(S.current)
            }, []), !T) return null;
        let D = async () => {
                try {
                    await navigator.clipboard.writeText(O)
                } catch {
                    return
                }
                F(!0), N && W(e => e + 1), S.current && clearTimeout(S.current), S.current = setTimeout(() => F(!1), 2400)
            },
            H = { ...et(g, M),
                "--ht-ink": g.primary,
                "--ht-n": q.length,
                "--ht-fit": Math.min(1, 13 / Math.max(q.length, 1))
            },
            A = /[ऀ-ॿ]/.test(R);
        return (0, a.jsxs)("div", {
            ref: j,
            className: L.default.htStage,
            "data-stamp": E,
            style: H,
            children: [(0, a.jsxs)("div", {
                className: M.mark ? `${L.default.htSeal} ${L.default.pkSealLogo}` : L.default.htSeal,
                "aria-hidden": "true",
                children: [(0, a.jsx)("span", {
                    className: L.default.pkSealFace,
                    children: M.glyph ? (0, a.jsx)("span", {
                        className: L.default.pkSealGlyph,
                        style: {
                            fontFamily: m
                        },
                        children: M.glyph
                    }) : null
                }), "play" === E ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("span", {
                        className: L.default.htRing
                    }), es.map((e, t) => {
                        let [l, s] = e;
                        return (0, a.jsx)("span", {
                            className: L.default.htDust,
                            style: {
                                "--dx": l,
                                "--dy": s,
                                "--d": t % 4
                            }
                        }, t)
                    })]
                }) : null]
            }), (0, a.jsx)("p", {
                className: L.default.htKicker,
                children: p("kicker")
            }), (0, a.jsxs)("h2", {
                className: L.default.htTag,
                style: {
                    fontFamily: y,
                    fontWeight: v ?? 600
                },
                children: [(0, a.jsx)("span", {
                    className: "sr-only",
                    children: O
                }), (0, a.jsx)("span", {
                    className: L.default.htLetters,
                    "data-shine": $ > 0 || void 0,
                    "aria-hidden": "true",
                    children: q.map((e, t) => (0, a.jsx)("span", {
                        className: L.default.htCh,
                        style: {
                            "--i": t
                        },
                        children: e
                    }, t))
                }, $)]
            }), (0, a.jsx)("p", {
                className: L.default.htWhy,
                lang: A ? "hi" : void 0,
                style: {
                    color: g.muted,
                    fontFamily: x
                },
                children: R || p("why")
            }), (0, a.jsxs)("button", {
                type: "button",
                className: L.default.htCopy,
                onClick: D,
                "aria-label": C ? f("copied") : f("copy", {
                    tag: O
                }),
                style: {
                    background: g.primary,
                    color: g.background,
                    fontFamily: x
                },
                children: [(0, a.jsx)(X.f, {
                    "aria-hidden": "true"
                }), p("copy")]
            }), (0, a.jsx)("p", {
                className: L.default.htCopied,
                role: "status",
                style: {
                    color: g.secondary
                },
                children: C ? p("copied") : ""
            })]
        })
    }
    var ei = e.i(138813),
        en = e.i(875022);

    function eo(e) {
        let {
            slug: t,
            events: l,
            settings: r,
            theme: i,
            themeConfig: n,
            scriptFont: o
        } = e, d = (0, s.r)("rsvp"), c = (0, s.r)("inviteThemes.ram-mandir.rsvp"), u = (0, x.f)(), {
            palette: h,
            headingFont: m,
            headingWeight: p
        } = i, f = (0, en.o)(r);
        return (0, a.jsxs)("section", {
            className: L.default.rsvp,
            "aria-labelledby": "ram-mandir-rsvp",
            style: {
                "--gold": h.secondary,
                "--ink": (0, b.L)(h.primary, .4),
                "--primary": h.primary,
                "--surface": h.surface,
                "--muted": h.muted,
                "--text": h.text,
                "--shadow": (0, b.L)(h.text, .3),
                background: `radial-gradient(ellipse at 50% 55%, ${(0,b.L)(h.secondary,.14)}, ${h.background} 65%)`,
                color: h.text
            },
            children: [(0, a.jsx)(q, {
                className: L.default.rsvpSun,
                color: h.secondary
            }), (0, a.jsx)(v.b, {
                children: (0, a.jsxs)("div", {
                    className: L.default.rsvpCard,
                    style: {
                        background: h.surface
                    },
                    children: [(0, a.jsx)(O, {
                        className: L.default.rsvpLotus,
                        theme: i
                    }), f ? (0, a.jsx)("h2", {
                        id: "ram-mandir-rsvp",
                        className: "sr-only",
                        children: c("title")
                    }) : (0, a.jsxs)("header", {
                        className: L.default.rsvpHead,
                        children: [(0, a.jsx)("p", {
                            className: L.default.rsvpScript,
                            style: {
                                fontFamily: o,
                                color: h.primary
                            },
                            children: c("eyebrow")
                        }), (0, a.jsx)("h2", {
                            id: "ram-mandir-rsvp",
                            className: L.default.rsvpHeading,
                            style: {
                                fontFamily: m,
                                fontWeight: p ?? 600,
                                color: h.primary
                            },
                            children: c("title")
                        }), (0, a.jsx)("p", {
                            className: L.default.rsvpSub,
                            style: {
                                color: h.muted
                            },
                            children: r.deadline ? d("subheadingBy", {
                                deadline: u.date(r.deadline)
                            }) : d("subheadingPlain")
                        })]
                    }), (0, a.jsx)("div", {
                        className: L.default.rsvpForm,
                        children: (0, a.jsx)(ei.f, {
                            slug: t,
                            events: l.map(e => ({
                                id: e.id,
                                name: e.name
                            })),
                            settings: r,
                            theme: n,
                            showHeader: !1,
                            bare: !0
                        })
                    })]
                })
            }), (0, a.jsx)(q, {
                className: `${L.default.rsvpSun} ${L.default.rsvpSunFoot}`,
                color: h.secondary
            })]
        })
    }
    let ed = e => `.${L.default[e]}`,
        ec = [
            ["cover", 0],
            ["cover", 100]
        ],
        eu = [{
            selector: `${ed("layer")}, ${ed("copy")}, ${ed("heroName")}`,
            source: ed("stage"),
            range: [
                ["exit-crossing", 0],
                ["exit-crossing", 100]
            ]
        }, {
            selector: ed("heroName"),
            source: ed("stage"),
            range: [
                ["exit-crossing", 0],
                ["exit-crossing", "--span"]
            ],
            property: "--sf-p2"
        }, {
            selector: `${ed("bloom")}, ${ed("sceneArt")}, ${ed("fxLead")}, ${ed("cardWrap")}`,
            range: ec
        }, {
            selector: ed("actTl"),
            source: ed("storyAct"),
            range: [
                ["contain", 0],
                ["contain", "--act-land"]
            ]
        }, {
            selector: ed("wheel"),
            source: ed("gallery"),
            range: ec
        }, {
            selector: ed("pond"),
            source: ed("footer"),
            range: [
                ["entry-crossing", 0],
                ["entry-crossing", 100]
            ]
        }];

    function eh(e) {
        let {
            color: l,
            paper: r,
            underGate: i = !1
        } = e, n = (0, s.r)("inviteThemes.ram-mandir.hero"), [o, d] = (0, t.useState)(!1), [c] = (0, t.useState)(i ? "1.4s" : "0.2s");
        return (0, t.useEffect)(() => {
            if (o) return;
            let e = () => {
                window.scrollY > 8 && d(!0)
            };
            return e(), window.addEventListener("scroll", e, {
                passive: !0
            }), () => window.removeEventListener("scroll", e)
        }, [o]), (0, a.jsx)("div", {
            "aria-hidden": "true",
            className: o ? `${L.default.scrollCue} ${L.default.scrollCueGone}` : L.default.scrollCue,
            style: {
                "--cue": l,
                "--cue-paper": r,
                "--cue-delay": c
            },
            children: (0, a.jsxs)("div", {
                className: L.default.scrollCuePill,
                children: [(0, a.jsx)("span", {
                    className: L.default.scrollCueLabel,
                    children: n("scrollHint")
                }), (0, a.jsx)("svg", {
                    className: L.default.scrollCueChevron,
                    viewBox: "0 0 24 14",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.8",
                    children: (0, a.jsx)("path", {
                        d: "M3 3l9 8 9-8",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                })]
            })
        })
    }

    function em(e) {
        var r, i, n, o;
        let {
            story: d,
            one: c,
            two: u,
            theme: h,
            scriptFont: m
        } = e, p = (0, s.r)("inviteThemes.ram-mandir.story"), {
            palette: f,
            headingFont: g,
            headingWeight: y
        } = h, v = !!(0, l.f)(), x = (0, t.useId)().replace(/[^a-zA-Z0-9_-]/g, ""), j = `ram-mandir-story-${x}`, b = (0, t.useRef)(null), [N, k] = (0, t.useState)(0);
        r = b, i = v, n = d.content, o = k, (0, t.useEffect)(() => {
            var e, a;
            let t = r.current;
            if (!t) return;
            let l = t.querySelector("[data-wrap]"),
                s = () => o(Math.max(3, Math.round(l.offsetHeight / (l.clientWidth < 460 ? 120 : 140))));
            if (i) {
                let e = new ResizeObserver(s);
                return e.observe(l), () => e.disconnect()
            }
            let n = t.querySelector("[data-pin]"),
                d = t.querySelector("[data-gate]"),
                c = t.querySelector("[data-window]"),
                u = t.querySelector("[data-text]"),
                h = t.querySelector("[data-fx]"),
                m = navigator,
                p = !!h && (m.hardwareConcurrency || 8) > 4 && !(null == (e = m.connection) ? void 0 : e.saveData);
            h && !p && (h.hidden = !0);
            let f = p ? h.getContext("2d") : null,
                g = 0,
                y = 1,
                v = [],
                x = 1,
                j = !0,
                b = () => {
                    let e, a, l, r, i;
                    g = Math.max(0, u.offsetHeight - c.clientHeight);
                    let o = n.clientHeight,
                        m = Math.round(1.5 * g);
                    t.style.setProperty("--act-hold", `${m}px`), y = Math.max(1, t.offsetHeight - o - m);
                    let f = Math.max(1, t.offsetHeight - window.innerHeight);
                    t.style.setProperty("--act-land", (y / f * 100).toFixed(3)), s(), e = n.clientWidth, a = n.clientHeight, l = d.offsetLeft, r = d.offsetTop, i = l > 140 ? [
                        [.45 * l, .5 * a],
                        [.8 * l, .36 * a],
                        [e - .8 * l, .36 * a],
                        [e - .45 * l, .5 * a]
                    ] : r > 70 ? [
                        [.2 * e, .7 * r],
                        [.5 * e, .88 * r],
                        [.8 * e, .7 * r]
                    ] : [], v = [], t.querySelectorAll("[data-bell]").forEach((e, a) => {
                        let t = i[a];
                        e.hidden = !t, t && (e.style.left = `${t[0]}px`, e.style.height = `${t[1]}px`, v.push({
                            el: e,
                            a: 0,
                            v: 0,
                            phase: 1.7 * a,
                            len: t[1]
                        }))
                    }), h && p && (x = Math.min(1.5, window.devicePixelRatio || 1), h.width = Math.round(h.clientWidth * x), h.height = Math.round(h.clientHeight * x), j = h.clientWidth < 600)
                },
                N = [],
                k = !1,
                _ = () => {
                    f && h && k && (f.setTransform(1, 0, 0, 1, 0, 0), f.clearRect(0, 0, h.width, h.height), k = !1)
                },
                $ = 0,
                W = 0,
                C = window.scrollY,
                F = !1,
                S = -1,
                T = !1,
                O = 0,
                R = [],
                q = e => {
                    $ = requestAnimationFrame(q);
                    let a = W ? Math.min(40, e - W) : 16;
                    W = e;
                    let l = -t.getBoundingClientRect().top,
                        s = eg(l / y);
                    !F && s > .26 && (F = !0, (() => {
                        if (!f || !h) return;
                        let e = h.clientWidth,
                            a = h.clientHeight,
                            t = e / 2,
                            l = d.offsetTop + d.offsetHeight * w.W.gate.doorway.cy,
                            s = j ? 36 : 80;
                        for (let e = 0; e < s; e++) {
                            let s = Math.random() * Math.PI * 2,
                                r = .5 * Math.random() + .15;
                            N.push({
                                x: t + (Math.random() - .5) * 40,
                                y: l + (Math.random() - .5) * a * .35,
                                vx: Math.cos(s) * r,
                                vy: Math.sin(s) * r - .15,
                                z: .25,
                                vz: .0016 * Math.random() + 6e-4,
                                rot: 6.3 * Math.random(),
                                spin: (Math.random() - .5) * .012,
                                hue: ey[e % ey.length],
                                drift: !1,
                                sway: 0
                            })
                        }
                    })()), F && s < .08 && (F = !1);
                    let r = Math.round(eg((l - y) / 1.5, 0, g));
                    r !== S && (u.style.transform = `translate3d(0, ${-r}px, 0)`, S = r);
                    let i = l >= y,
                        n = t.querySelectorAll("[data-diya]");
                    (i !== T || i && n.length !== O) && (T = i, O = n.length, R.forEach(clearTimeout), R = [], n.forEach((e, a) => {
                        i ? R.push(window.setTimeout(() => e.classList.add(L.default.lit), 400 + (a >> 1) * 220)) : e.classList.remove(L.default.lit)
                    }));
                    let o = window.scrollY - C;
                    for (let t of (C = window.scrollY, v)) {
                        let l = 175e-7 * (100 / t.len);
                        t.v += (-t.a * l - .0026 * t.v + 15 * eg(.04 * o, -1, 1) * l) * a, t.a += t.v * a, t.el.style.transform = `rotate(${(t.a+.8*Math.sin(.0012*e+t.phase)).toFixed(2)}deg)`
                    }((e, a) => {
                        if (!f || !h) return;
                        if (!N.length && a < .32) return _();
                        let t = h.clientWidth,
                            l = h.clientHeight;
                        f.setTransform(x, 0, 0, x, 0, 0), f.clearRect(0, 0, t, l), k = !0;
                        let s = j ? 10 : 22;
                        a > .48 && N.filter(e => e.drift).length < s && Math.random() < .0012 * e && N.push({
                            x: Math.random() * t,
                            y: -20,
                            vx: (Math.random() - .5) * .03,
                            vy: .04 * Math.random() + .03,
                            z: .3 > Math.random() ? 1.3 : .7,
                            vz: 0,
                            rot: 6.3 * Math.random(),
                            spin: (Math.random() - .5) * .006,
                            hue: ey[4 * Math.random() | 0],
                            drift: !0,
                            sway: 6 * Math.random()
                        });
                        for (let a = N.length - 1; a >= 0; a--) {
                            let s = N[a];
                            if (s.drift ? (s.sway += .0015 * e, s.x += (s.vx + .03 * Math.sin(s.sway)) * e * s.z, s.y += s.vy * e * s.z) : (s.z += s.vz * e, s.x += s.vx * e * s.z, s.y += s.vy * e * s.z, s.vy += 35e-5 * e), s.rot += s.spin * e, s.y > l + 40 || s.x < -60 || s.x > t + 60 || s.z > 4) {
                                N.splice(a, 1);
                                continue
                            }
                            let r = 6 * s.z + 2;
                            f.save(), f.translate(s.x, s.y), f.rotate(s.rot), f.scale(1, .7 * Math.abs(Math.cos(1.3 * s.rot)) + .3), f.globalAlpha = s.drift ? s.z > 1 ? .95 : .6 : eg(1.2 - .25 * s.z), f.fillStyle = s.hue, f.beginPath(), f.moveTo(0, -r), f.bezierCurveTo(.9 * r, -(.5 * r), .7 * r, .8 * r, 0, r), f.bezierCurveTo(-(.7 * r), .8 * r, -(.9 * r), -(.5 * r), 0, -r), f.fill(), f.restore()
                        }
                    })(a, s)
                },
                M = () => {
                    cancelAnimationFrame($), $ = 0, N = [], _()
                },
                E = 0,
                D = () => {
                    cancelAnimationFrame(E), E = requestAnimationFrame(b)
                },
                H = new ResizeObserver(D);
            H.observe(n), H.observe(c), H.observe(u), window.addEventListener("resize", D), b(), null == (a = document.fonts) || a.ready.then(D).catch(() => {});
            let A = new IntersectionObserver(e => {
                let [a] = e;
                return a.isIntersecting ? void(!$ && (W = 0, C = window.scrollY, $ = requestAnimationFrame(q))) : M()
            }, {
                rootMargin: "100px 0px"
            });
            return A.observe(t), () => {
                M(), cancelAnimationFrame(E), H.disconnect(), window.removeEventListener("resize", D), A.disconnect(), t.style.removeProperty("--act-hold"), t.style.removeProperty("--act-land"), R.forEach(clearTimeout), t.querySelectorAll("[data-diya]").forEach(e => e.classList.remove(L.default.lit))
            }
        }, [r, i, n, o]);
        let _ = Math.min(1, 7 / Math.max(c.length, u.length, 1)),
            $ = {
                fontFamily: g,
                fontWeight: y ?? 600
            },
            W = (0, a.jsxs)("div", {
                className: L.default.carve,
                children: [(0, a.jsx)("span", {
                    className: L.default.carveScript,
                    style: {
                        fontFamily: m
                    },
                    children: p("eyebrow")
                }), (0, a.jsxs)("span", {
                    className: L.default.carveNames,
                    children: [(0, a.jsx)("span", {
                        className: L.default.carveName,
                        style: $,
                        children: c
                    }), (0, a.jsx)("span", {
                        className: L.default.carveAmp,
                        style: {
                            fontFamily: m
                        },
                        children: "&"
                    }), (0, a.jsx)("span", {
                        className: L.default.carveName,
                        style: $,
                        children: u
                    })]
                })]
            }),
            {
                doors: C
            } = w.W.gate,
            F = d.content.split(/\n\s*\n/).map(e => e.trim()).filter(Boolean);
        return (0, a.jsxs)("section", {
            ref: b,
            className: L.default.storyAct,
            "aria-labelledby": j,
            style: {
                "--paper": f.background,
                "--gold": f.secondary,
                "--primary": f.primary,
                "--surface": f.surface,
                "--wall": w.W.wall,
                "--sanctum-p": `url("${w.W.sanctum.p}")`,
                "--sanctum-w": `url("${w.W.sanctum.w}")`,
                "--gate": `url("${w.W.gate.src}")`,
                "--door": `url("${w.W.door.src}")`,
                "--gate-tall": 1 / w.W.gate.aspect,
                "--doorway-cy": w.W.gate.doorway.cy,
                "--doors-inset": [C.top, C.right, C.bottom, C.left].map(e => `${100*e}%`).join(" "),
                "--bell": `url("${w.a.long}")`,
                "--bell-aspect": w.a.aspect,
                "--jamb": `${3.25}%`,
                "--carve-scale": _
            },
            children: [(0, a.jsxs)("div", {
                className: L.default.pin,
                "data-pin": !0,
                children: [(0, a.jsx)("div", {
                    "aria-hidden": "true",
                    className: `${L.default.plane} ${L.default.sanctum}`
                }), (0, a.jsx)("div", {
                    "aria-hidden": "true",
                    className: `${L.default.plane} ${L.default.actGlow} ${L.default.actTl}`
                }), (0, a.jsxs)("div", {
                    "aria-hidden": "true",
                    className: `${L.default.plane} ${L.default.outside} ${L.default.actTl}`,
                    children: [(0, a.jsxs)("div", {
                        className: L.default.gatebox,
                        "data-gate": !0,
                        children: [(0, a.jsxs)("div", {
                            className: L.default.doors,
                            children: [(0, a.jsx)("div", {
                                className: `${L.default.seamWrap} ${L.default.actTl}`,
                                children: (0, a.jsx)("div", {
                                    className: L.default.seam
                                })
                            }), (0, a.jsxs)("div", {
                                className: `${L.default.leaf} ${L.default.leafL} ${L.default.actTl}`,
                                children: [W, (0, a.jsx)("div", {
                                    className: `${L.default.shade} ${L.default.actTl}`
                                })]
                            }), (0, a.jsxs)("div", {
                                className: `${L.default.leaf} ${L.default.leafR} ${L.default.actTl}`,
                                children: [W, (0, a.jsx)("div", {
                                    className: `${L.default.shade} ${L.default.actTl}`
                                })]
                            })]
                        }), (0, a.jsx)("div", {
                            className: L.default.gate
                        })]
                    }), (0, a.jsx)("div", {
                        className: `${L.default.plane} ${L.default.vignette}`
                    }), [0, 1, 2, 3].map(e => (0, a.jsx)("span", {
                        className: L.default.actBell,
                        "data-bell": !0,
                        hidden: !0
                    }, e))]
                }), (0, a.jsx)("div", {
                    "aria-hidden": "true",
                    className: `${L.default.plane} ${L.default.actDim} ${L.default.actTl}`
                }), v ? null : (0, a.jsx)("canvas", {
                    "aria-hidden": "true",
                    className: L.default.actFx,
                    "data-fx": !0
                }), (0, a.jsx)("div", {
                    "aria-hidden": "true",
                    className: `${L.default.plane} ${L.default.actFlash} ${L.default.actTl}`
                }), (0, a.jsxs)("div", {
                    className: `${L.default.flight} ${L.default.actTl}`,
                    children: [(0, a.jsx)("div", {
                        "aria-hidden": "true",
                        className: L.default.halo
                    }), (0, a.jsxs)("div", {
                        className: L.default.storyCard,
                        children: [(0, a.jsx)(H, {
                            className: L.default.storyCap,
                            cap: E,
                            fill: f.surface,
                            stroke: f.secondary
                        }), (0, a.jsxs)("div", {
                            className: L.default.storyWrap,
                            "data-wrap": !0,
                            children: [(0, a.jsxs)("div", {
                                className: L.default.storyBody,
                                style: {
                                    background: f.surface
                                },
                                children: [(0, a.jsxs)("header", {
                                    className: L.default.storyHead,
                                    children: [(0, a.jsx)(O, {
                                        className: L.default.storyLotus,
                                        theme: h
                                    }), (0, a.jsx)("p", {
                                        className: L.default.storyScript,
                                        style: {
                                            fontFamily: m,
                                            color: f.primary
                                        },
                                        children: p("eyebrow")
                                    }), (0, a.jsx)("h2", {
                                        id: j,
                                        className: L.default.storyHeading,
                                        style: { ...$,
                                            color: f.primary
                                        },
                                        children: `${c} & ${u}`
                                    })]
                                }), (0, a.jsx)(R, {
                                    className: L.default.storyBodyRule,
                                    color: f.secondary
                                }), (0, a.jsx)("div", {
                                    className: L.default.storyWindow,
                                    "data-window": !0,
                                    children: (0, a.jsx)("div", {
                                        className: L.default.storyText,
                                        style: {
                                            color: f.text
                                        },
                                        "data-text": !0,
                                        children: F.map((e, l) => (0, a.jsxs)(t.Fragment, {
                                            children: [l > 0 ? (0, a.jsx)(ep, {
                                                primary: f.primary,
                                                gold: f.secondary
                                            }) : null, (0, a.jsxs)("p", {
                                                children: [0 === l ? (0, a.jsx)("span", {
                                                    className: L.default.drop,
                                                    style: {
                                                        fontFamily: g,
                                                        color: f.primary
                                                    },
                                                    children: e[0]
                                                }) : null, 0 === l ? e.slice(1) : e]
                                            })]
                                        }, l))
                                    })
                                })]
                            }), Array.from({
                                length: N
                            }, (e, t) => [0, 1].map(e => (0, a.jsx)(ef, {
                                ids: x,
                                side: e,
                                top: N > 1 ? t / (N - 1) : 0,
                                primary: f.primary,
                                gold: f.secondary
                            }, `${t}-${e}`)))]
                        }), (0, a.jsx)(H, {
                            className: L.default.storyFoot,
                            cap: D,
                            flip: !0,
                            fill: f.surface,
                            stroke: f.secondary
                        })]
                    })]
                }), (0, a.jsx)("p", {
                    "aria-hidden": "true",
                    className: `${L.default.actHint} ${L.default.actTl}`,
                    children: p("hint")
                }), "      "]
            }), 0 === N ? null : (0, a.jsx)("svg", {
                width: "0",
                height: "0",
                "aria-hidden": "true",
                className: L.default.defs,
                children: (0, a.jsxs)("defs", {
                    children: [(0, a.jsxs)("radialGradient", {
                        id: `${x}-halo`,
                        children: [(0, a.jsx)("stop", {
                            offset: "0",
                            stopColor: "#ffcf6a",
                            stopOpacity: "0.9"
                        }), (0, a.jsx)("stop", {
                            offset: "0.45",
                            stopColor: "#ffb648",
                            stopOpacity: "0.35"
                        }), (0, a.jsx)("stop", {
                            offset: "1",
                            stopColor: "#ffb648",
                            stopOpacity: "0"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: `${x}-flame`,
                        x1: "0",
                        y1: "1",
                        x2: "0",
                        y2: "0",
                        children: [(0, a.jsx)("stop", {
                            offset: "0",
                            stopColor: "#e2572b"
                        }), (0, a.jsx)("stop", {
                            offset: "0.5",
                            stopColor: "#ffb648"
                        }), (0, a.jsx)("stop", {
                            offset: "1",
                            stopColor: "#ffe9a8"
                        })]
                    })]
                })
            })]
        })
    }

    function ep(e) {
        let {
            primary: t,
            gold: l
        } = e;
        return (0, a.jsx)("div", {
            className: L.default.chapter,
            "aria-hidden": "true",
            children: (0, a.jsxs)("svg", {
                viewBox: "0 0 22 14",
                children: [(0, a.jsx)("path", {
                    d: "M11 0c2.5 3.5 2.5 8 0 12-2.5-4-2.5-8.5 0-12z",
                    fill: t
                }), (0, a.jsx)("path", {
                    d: "M1 6c4 0 8 2 10 6-4 0-8-2-10-6zM21 6c-4 0-8 2-10 6 4 0 8-2 10-6z",
                    fill: l
                })]
            })
        })
    }

    function ef(e) {
        let {
            ids: t,
            side: l,
            top: s,
            primary: r,
            gold: i
        } = e;
        return (0, a.jsx)("div", {
            "aria-hidden": "true",
            className: `${L.default.diya} ${l?L.default.diyaR:L.default.diyaL}`,
            "data-diya": "",
            style: {
                top: `calc(40px + (100% - 70px) * ${s})`
            },
            children: (0, a.jsxs)("svg", {
                viewBox: "0 0 34 40",
                children: [(0, a.jsx)("circle", {
                    className: L.default.diyaGlow,
                    cx: "17",
                    cy: "15",
                    r: "16",
                    fill: `url(#${t}-halo)`
                }), (0, a.jsxs)("g", {
                    className: L.default.flame,
                    children: [(0, a.jsx)("path", {
                        d: "M17 4c4 6 6 10 3.4 14.2-1.3 2.1-5.5 2.1-6.8 0C11 14 13 10 17 4z",
                        fill: `url(#${t}-flame)`
                    }), (0, a.jsx)("path", {
                        d: "M17 10c1.8 3 2.4 5 1.2 7-.6 1-1.8 1-2.4 0-1.2-2 .2-4 1.2-7z",
                        fill: "#fff6d0"
                    })]
                }), (0, a.jsx)("path", {
                    d: "M3 24c0 7 6.5 11 14 11s14-4 14-11c-4 1.6-9 2.2-14 2.2S7 25.6 3 24z",
                    fill: r
                }), (0, a.jsx)("path", {
                    d: "M3 24c4 1.6 9 2.2 14 2.2s10-.6 14-2.2",
                    fill: "none",
                    stroke: i,
                    strokeWidth: "1.2"
                })]
            })
        })
    }
    let eg = function(e) {
            let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            return Math.max(a, Math.min(t, e))
        },
        ey = ["#f29a1d", "#f7c331", "#e2572b", "#ffcf4a", "#fff1d6"];
    var ev = e.i(340793),
        ex = e.i(83211),
        ej = e.i(627655);

    function eb(e) {
        var l, r;
        let {
            events: i,
            theme: n,
            scriptFont: o,
            devanagariFont: d
        } = e, c = (0, s.r)("inviteThemes.ram-mandir.events"), {
            palette: u,
            headingFont: h,
            headingWeight: m
        } = n, p = (0, t.useRef)(null);
        l = p, r = i.length, (0, t.useEffect)(() => {
            let e = l.current;
            if (!e || "u" < typeof IntersectionObserver) return;
            let a = e.querySelectorAll(`.${L.default.window}, .${L.default.card}`),
                t = new IntersectionObserver(e => {
                    for (let a of e) a.target.toggleAttribute("data-live", a.intersectionRatio >= eN)
                }, {
                    threshold: eN
                });
            return a.forEach(e => t.observe(e)), () => t.disconnect()
        }, [l, r]);
        let f = (0, ej.Y)();
        return (0, a.jsxs)("section", {
            className: L.default.timeline,
            "aria-labelledby": "ram-mandir-events",
            style: {
                "--panel": `color-mix(in srgb, ${u.text} 82%, ${u.primary})`,
                "--panel-glow": (0, b.L)(u.secondary, .22),
                "--fg": u.background,
                "--fg-dim": (0, b.L)(u.background, .74),
                "--label": `color-mix(in srgb, ${u.secondary} 70%, ${u.background})`,
                "--rule": (0, b.L)(u.secondary, .32),
                "--head-a": `color-mix(in srgb, ${u.secondary} 30%, ${u.background})`,
                "--head-b": `color-mix(in srgb, ${u.secondary} 75%, ${u.background})`,
                "--head-c": u.secondary,
                "--shadow": (0, b.L)(u.text, .55),
                "--frame": `url(${w.i.src})`,
                "--slice": w.i.slice,
                "--crown-sit": `${w.V.base/w.V.aspect*100}%`,
                background: `linear-gradient(${u.background}, ${(0,b.L)(u.secondary,.16)})`
            },
            children: [(0, a.jsx)(v.b, {
                children: (0, a.jsxs)("header", {
                    className: L.default.timelineHead,
                    children: [(0, a.jsx)("p", {
                        className: L.default.timelineScript,
                        style: {
                            fontFamily: o,
                            color: u.primary
                        },
                        children: c("eyebrow")
                    }), (0, a.jsx)("h2", {
                        id: "ram-mandir-events",
                        className: L.default.timelineHeading,
                        style: {
                            fontFamily: h,
                            fontWeight: m ?? 600,
                            color: u.text
                        },
                        children: c("title")
                    }), (0, a.jsx)("p", {
                        className: L.default.timelineSub,
                        style: {
                            color: u.muted
                        },
                        children: c("subtitle")
                    })]
                })
            }), (0, a.jsx)("ol", {
                ref: p,
                className: L.default.rows,
                children: i.map((e, t) => {
                    let l = (0, w.X)(e);
                    return (0, a.jsxs)("li", {
                        className: L.default.row,
                        "data-side": t % 2 ? "right" : "left",
                        "data-scene": l,
                        children: [(0, a.jsxs)("div", {
                            className: L.default.window,
                            "aria-hidden": "true",
                            children: [(0, a.jsx)("div", {
                                className: L.default.sceneArt,
                                children: (0, a.jsx)("img", {
                                    src: w.$[l].src,
                                    alt: "",
                                    width: 820,
                                    height: 1230,
                                    loading: "lazy",
                                    decoding: "async"
                                })
                            }), (0, a.jsx)(eW, {
                                fx: w.$[l].fx,
                                seed: t,
                                lite: f
                            })]
                        }), (0, a.jsxs)(v.b, {
                            className: L.default.cardWrap,
                            children: [(0, a.jsx)("img", {
                                className: L.default.crown,
                                src: w.V.src,
                                alt: "",
                                "aria-hidden": "true",
                                width: 900,
                                height: 502,
                                loading: "lazy",
                                decoding: "async"
                            }), (0, a.jsx)(ew, {
                                event: e,
                                theme: n,
                                scriptFont: o,
                                devanagariFont: d,
                                seed: t,
                                lite: f
                            })]
                        })]
                    }, e.id)
                })
            })]
        })
    }

    function ew(e) {
        var l, r, i;
        let {
            event: n,
            theme: o,
            scriptFont: d,
            devanagariFont: c,
            seed: u,
            lite: h
        } = e, m = (0, s.r)("inviteThemes.ram-mandir.events"), p = (0, x.f)(), f = (0, C.f)(), {
            headingFont: g,
            headingWeight: y
        } = o, v = p.eventTimeOf(n, {
            viewerTimezone: f
        }), j = n.date ? p.date(n.date, {
            weekday: "long"
        }) : "", b = (0, W.A)(n), w = null == (l = n.venueAddress) ? void 0 : l.trim(), N = null == (r = n.dressCode) ? void 0 : r.trim(), k = (0, W.L)(n.dressCodeColor), _ = (0, W.B)(n), $ = b || w || n.mapsUrl ? (0, ev.K)(n) : null, F = n.name || m("fallbackName"), S = (0, t.useRef)(null);
        (0, ex._)(S, F);
        let T = (null == (i = n.description) ? void 0 : i.trim()) ?? "",
            O = !!T && !0 === n.descriptionOnTop,
            R = /[ऀ-ॿ]/.test(T);
        return (0, a.jsxs)("article", {
            id: `event-${n.id}`,
            className: L.default.card,
            children: [(0, a.jsx)(e$, {
                seed: u,
                count: h ? 3 : 6
            }), O ? (0, a.jsx)("p", {
                className: L.default.cardInvocation,
                lang: R ? "hi" : void 0,
                style: R ? {
                    fontFamily: c
                } : void 0,
                children: T
            }) : null, j ? (0, a.jsx)("p", {
                className: L.default.cardDate,
                style: {
                    fontFamily: d
                },
                children: j
            }) : null, (0, a.jsx)("h3", {
                ref: S,
                className: L.default.cardName,
                style: {
                    fontFamily: g,
                    fontWeight: y ?? 600
                },
                children: F
            }), (0, a.jsxs)("svg", {
                className: L.default.cardRule,
                viewBox: "0 0 120 14",
                "aria-hidden": "true",
                children: [(0, a.jsx)("path", {
                    d: "M0 7h46M74 7h46",
                    stroke: "var(--head-b)",
                    strokeWidth: "1",
                    opacity: "0.7"
                }), (0, a.jsx)("path", {
                    d: "M60 0c2.5 3.5 6 5.5 9 7-3 1.5-6.5 3.5-9 7-2.5-3.5-6-5.5-9-7 3-1.5 6.5-3.5 9-7Z",
                    fill: "var(--label)"
                })]
            }), v || b || w || N || _.length > 0 ? (0, a.jsxs)("dl", {
                className: L.default.cardFacts,
                children: [v ? (0, a.jsxs)("div", {
                    children: [(0, a.jsx)("dt", {
                        children: m("time")
                    }), (0, a.jsx)("dd", {
                        children: v
                    })]
                }) : null, b || w ? (0, a.jsxs)("div", {
                    children: [(0, a.jsx)("dt", {
                        children: m("venue")
                    }), (0, a.jsxs)("dd", {
                        children: [b || w, b && w ? (0, a.jsx)("span", {
                            children: w
                        }) : null]
                    })]
                }) : null, N ? (0, a.jsxs)("div", {
                    children: [(0, a.jsx)("dt", {
                        children: m("attire")
                    }), (0, a.jsxs)("dd", {
                        children: [k ? (0, a.jsx)("i", {
                            className: L.default.swatch,
                            style: {
                                background: k
                            },
                            "aria-hidden": "true"
                        }) : null, N]
                    })]
                }) : null, _.length > 0 ? (0, a.jsxs)("div", {
                    children: [(0, a.jsx)("dt", {
                        children: m("rituals")
                    }), (0, a.jsx)("dd", {
                        children: (0, a.jsx)("ol", {
                            className: L.default.steps,
                            children: _.map(e => (0, a.jsxs)("li", {
                                children: [(0, a.jsx)("span", {
                                    children: e.time ? p.time(e.time) : ""
                                }), e.title]
                            }, e.id))
                        })
                    })]
                }) : null]
            }) : null, T && !O ? (0, a.jsx)("p", {
                className: L.default.cardNote,
                children: n.description
            }) : null, $ ? (0, a.jsx)("a", {
                href: $,
                target: "_blank",
                rel: "noopener noreferrer",
                className: L.default.mapLink,
                children: m("viewLocation")
            }) : null]
        })
    }
    let eN = 1 / 3;

    function ek(e, a, t) {
        let l = Math.imul(977 * e + 131 * a + 7919 * t + 1, 0x9e3779b1);
        return l ^= l >>> 15, l = Math.imul(l, 0x85ebca77), ((l ^= l >>> 13) >>> 0) % 1e3 / 1e3
    }
    let e_ = (e, a, t) => +(e + (a - e) * t).toFixed(2);

    function e$(e) {
        let {
            seed: t,
            count: l
        } = e, s = 96 / l;
        return (0, a.jsx)("span", {
            className: L.default.fall,
            "aria-hidden": "true",
            children: Array.from({
                length: l
            }, (e, l) => {
                let r = l % w.S.length;
                return (0, a.jsx)("img", {
                    src: w.S[r],
                    alt: "",
                    width: 112,
                    height: 112,
                    loading: "lazy",
                    decoding: "async",
                    style: {
                        left: `${e_(s*l+2,s*(l+1)-2,ek(t,l,31))}%`,
                        "--s": `${0===r?e_(7,8.5,ek(t,l,32)):e_(4.5,5.8,ek(t,l,32))}cqw`,
                        "--d": `${e_(11,16,ek(t,l,33))}s`,
                        "--delay": `${-e_(0,16,ek(t,l,34))}s`,
                        "--sway": `${e_(-8,8,ek(t,l,35))}cqw`
                    }
                }, l)
            })
        })
    }

    function eW(e) {
        let {
            fx: t,
            seed: l,
            lite: s
        } = e, r = e => s ? Math.ceil(e / 2) : e;
        return (0, a.jsxs)(a.Fragment, {
            children: [t.glow ? (0, a.jsx)("span", {
                className: L.default.glow,
                style: {
                    left: `${t.glow[0]}%`,
                    top: `${t.glow[1]}%`
                }
            }) : null, t.embers ? (0, a.jsx)("span", {
                className: L.default.fx,
                children: Array.from({
                    length: r(12)
                }, (e, s) => (0, a.jsx)("i", {
                    className: L.default.ember,
                    style: {
                        left: `${e_(t.embers[0],t.embers[1],ek(l,s,1))}%`,
                        "--d": `${e_(2.2,4,ek(l,s,2))}s`,
                        "--delay": `${-e_(0,4,ek(l,s,3))}s`,
                        "--sway": `${e_(-6,6,ek(l,s,4))}cqw`
                    }
                }, s))
            }) : null, t.sparks ? (0, a.jsx)("span", {
                className: L.default.fx,
                children: Array.from({
                    length: r(14)
                }, (e, t) => (0, a.jsx)("i", {
                    className: L.default.spark,
                    style: {
                        left: `${e_(12,88,ek(l,t,5))}%`,
                        top: `${e_(14,50,ek(l,t,6))}%`,
                        "--d": `${e_(2,4,ek(l,t,7))}s`,
                        "--delay": `${-e_(0,4,ek(l,t,8))}s`
                    }
                }, t))
            }) : null, t.petals ? (0, a.jsx)("span", {
                className: `${L.default.fx} ${L.default.fxLead}`,
                children: Array.from({
                    length: r(12)
                }, (e, s) => (0, a.jsx)("i", {
                    className: L.default.petal,
                    style: {
                        left: `${e_(4,96,ek(l,s,9))}%`,
                        "--s": `${e_(1.8,3.4,ek(l,s,10))}cqw`,
                        "--c": t.petals[Math.floor(ek(l, s, 11) * t.petals.length)],
                        "--d": `${e_(7,13,ek(l,s,12))}s`,
                        "--delay": `${-e_(0,13,ek(l,s,13))}s`,
                        "--sway": `${e_(-9,9,ek(l,s,14))}cqw`
                    }
                }, s))
            }) : null]
        })
    }
    var eC = e.i(366471),
        eF = e.i(380336),
        eL = e.i(410739);
    let eS = "Mrs Saint Delafield",
        eT = `"${eS}", cursive`,
        eO = "Yatra One",
        eR = `"${eO}", serif`;

    function eq(e, a) {
        return {
            [`--img-${e}`]: `url("${a.src}")`,
            [`--left-${e}`]: a.left,
            [`--top-${e}`]: a.top,
            [`--width-${e}`]: a.width,
            [`--aspect-${e}`]: a.aspect,
            [`--rate-${e}`]: a.rate,
            [`--fit-${e}`]: a.cover ? "cover" : "100% auto"
        }
    }

    function eM(e) {
        let {
            data: r,
            theme: i,
            blessing: n,
            eventsFollow: o,
            family: d
        } = e, {
            palette: c,
            headingFont: h,
            headingWeight: m
        } = i, {
            couple: p
        } = r, f = (0, u.u)(d, p), g = !!(null == f ? void 0 : f.some(e => e.parents.length > 0)), y = (0, l.f)(), x = (0, s.r)("inviteThemes.ram-mandir"), j = (0, eF.useGuestGreeting)(), k = (0, eL.L)(), _ = p.partnerOneName || x("hero.partnerOne"), $ = p.partnerTwoName || x("hero.partnerTwo"), W = Math.min(1, 8 / Math.max(_.length, $.length, 1)), C = Math.min(1, 5 / Math.max(_.length, $.length, 1)), F = (0, b.L)(c.primary, .85), S = {
            fontFamily: h,
            fontWeight: m ?? 600,
            color: F
        }, T = {
            fontFamily: eT,
            color: F
        };
        return (0, a.jsxs)("section", {
            className: L.default.stage,
            "aria-label": r.title,
            style: {
                "--scene-h-p": w.n.p,
                "--scene-h-w": w.n.w,
                "--copy-top-p": w.f.p,
                "--copy-top-w": w.f.w,
                "--outro-top-p": w.E.p,
                "--outro-top-w": w.E.w,
                "--name-scale": W,
                "--hero-scale": C,
                "--paper": c.background,
                backgroundColor: c.background
            },
            children: [w.q.map(e => (0, a.jsx)("div", {
                "aria-hidden": "true",
                className: L.default.layer,
                "data-layer": e.id,
                style: {
                    zIndex: e.z,
                    ...eq("p", e.p),
                    ...eq("w", e.w)
                }
            }, e.id)), y ? null : (0, a.jsx)(N.k, {
                className: L.default.birds,
                color: (0, b.L)(c.text, .75)
            }), w.b.map((e, t) => {
                var l, s, r;
                return (0, a.jsx)("span", {
                    "aria-hidden": "true",
                    className: `${L.default.bell} ${e.p?"":L.default.wideOnly}`,
                    style: {
                        "--bell": `url("${w.a[e.size]}")`,
                        "--bell-aspect": w.a.aspect,
                        "--x-p": (null == (l = e.p) ? void 0 : l.x) ?? 0,
                        "--top-p": (null == (s = e.p) ? void 0 : s.top) ?? "0px",
                        "--h-p": (null == (r = e.p) ? void 0 : r.h) ?? "0px",
                        "--x-w": e.w.x,
                        "--top-w": e.w.top,
                        "--h-w": e.w.h,
                        animationDelay: `${-(.7*t)}s`
                    }
                }, t)
            }), j ? (0, a.jsx)("span", {
                className: `${L.default.heroName} ${L.default.heroGuest}`,
                children: (0, a.jsxs)("span", {
                    className: L.default.heroGuestText,
                    children: [(0, a.jsx)(eC.GuestGreeting, {
                        className: L.default.heroGuestName,
                        style: {
                            fontFamily: h,
                            color: F
                        }
                    }), (0, a.jsx)("span", {
                        className: L.default.heroGuestInvited,
                        style: {
                            color: F,
                            ...k
                        },
                        children: x("hero.cordiallyInvited")
                    })]
                })
            }) : null, (0, a.jsxs)("h1", {
                className: L.default.heroNames,
                children: [(0, a.jsx)("span", {
                    className: `${L.default.heroName} ${L.default.heroOne}`,
                    children: (0, a.jsx)("span", {
                        "data-couple-name": !0,
                        className: L.default.float,
                        style: S,
                        children: _
                    })
                }), (0, a.jsx)("span", {
                    className: `${L.default.heroName} ${L.default.heroWeds}`,
                    children: (0, a.jsx)("span", {
                        className: L.default.float,
                        style: T,
                        children: x("hero.weds")
                    })
                }), (0, a.jsx)("span", {
                    className: `${L.default.heroName} ${L.default.heroTwo}`,
                    children: (0, a.jsx)("span", {
                        "data-couple-name": !0,
                        className: L.default.float,
                        style: S,
                        children: $
                    })
                })]
            }), (0, a.jsxs)("div", {
                className: L.default.copy,
                children: [n.invocation ? (0, a.jsx)(v.b, {
                    children: (0, a.jsx)("p", {
                        className: L.default.mantra,
                        lang: eE(n.invocation),
                        style: {
                            fontFamily: eR,
                            color: c.primary
                        },
                        children: n.invocation
                    })
                }) : null, n.emblem ? (0, a.jsx)(v.b, {
                    children: (0, a.jsx)(eD, {
                        emblem: n.emblem,
                        color: c.primary,
                        label: x("upload" !== n.emblem.kind && "ganesha" === n.emblem.key ? "hero.ganeshaAlt" : "hero.emblemAlt")
                    })
                }) : null, n.verse.length > 0 ? (0, a.jsx)(v.b, {
                    children: (0, a.jsx)("p", {
                        className: L.default.shloka,
                        lang: eE(n.verse.join(" ")),
                        style: {
                            fontFamily: eR,
                            color: c.primary
                        },
                        children: n.verse.map((e, l) => (0, a.jsxs)(t.Fragment, {
                            children: [l > 0 ? (0, a.jsx)("br", {}) : null, e]
                        }, l))
                    })
                }) : null, p.headline ? (0, a.jsx)(v.b, {
                    children: (0, a.jsx)("p", {
                        className: L.default.family,
                        style: {
                            color: c.primary
                        },
                        children: p.headline
                    })
                }) : null, p.shortMessage ? (0, a.jsx)(v.b, {
                    children: (0, a.jsx)("p", {
                        className: L.default.message,
                        children: p.shortMessage
                    })
                }) : null, (0, a.jsx)(v.b, {
                    children: (0, a.jsxs)("h2", {
                        className: g ? `${L.default.inviteNames} ${L.default.withParents}` : L.default.inviteNames,
                        children: [(0, a.jsx)("span", {
                            style: S,
                            children: _
                        }), (0, a.jsx)(u.O, {
                            as: "span",
                            view: null == f ? void 0 : f[0],
                            className: L.default.inviteParents,
                            style: {
                                color: c.text
                            }
                        }), (0, a.jsx)("span", {
                            className: L.default.inviteAnd,
                            style: T,
                            children: x("hero.and")
                        }), (0, a.jsx)("span", {
                            style: S,
                            children: $
                        }), (0, a.jsx)(u.O, {
                            as: "span",
                            view: null == f ? void 0 : f[1],
                            className: L.default.inviteParents,
                            style: {
                                color: c.text
                            }
                        })]
                    })
                })]
            }), o ? (0, a.jsxs)("div", {
                className: `${L.default.copy} ${L.default.outro}`,
                children: [(0, a.jsx)(v.b, {
                    children: (0, a.jsx)("p", {
                        className: L.default.eventsIntro,
                        children: x("hero.eventsIntro")
                    })
                }), (0, a.jsx)(v.b, {
                    children: (0, a.jsx)("svg", {
                        className: L.default.arrow,
                        viewBox: "0 0 24 100",
                        fill: "none",
                        stroke: c.text,
                        strokeWidth: "1.4",
                        "aria-hidden": "true",
                        children: (0, a.jsx)("path", {
                            d: "M12 2v94M4 86l8 10 8-10",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                })]
            }) : null]
        })
    }

    function eE(e) {
        return /[\u0900-\u097F]/.test(e) ? "hi" : void 0
    }

    function eD(e) {
        let {
            emblem: t,
            color: l,
            label: s
        } = e;
        switch (t.kind) {
            case "image":
                return (0, a.jsx)("div", {
                    className: L.default.ganesha,
                    role: "img",
                    "aria-label": s,
                    style: {
                        backgroundImage: `url("${t.src}")`
                    }
                });
            case "glyph":
                return (0, a.jsx)("p", {
                    className: L.default.emblemGlyph,
                    lang: eE(t.text),
                    style: {
                        fontFamily: eR,
                        color: l
                    },
                    children: t.text
                });
            case "upload":
                return (0, a.jsx)("div", {
                    className: L.default.emblemMark,
                    role: "img",
                    "aria-label": s,
                    style: {
                        "--emblem": `url("${t.src}")`,
                        backgroundColor: l
                    }
                });
            case "ornament":
                return null
        }
    }
    e.s(["RamMandirExperience", 0, function(e) {
        var v, w, N;
        let {
            data: k,
            theme: _,
            shareUrl: $
        } = e, W = (0, b.f)(_), {
            palette: C
        } = W, F = (0, t.useRef)(null);
        (0, j.f)(F, eu);
        let S = (0, t.useMemo)(() => {
                var e;
                return (0, f.x)((null == (e = k.sections) ? void 0 : e.length) ? k.sections : i.n).filter(e => e.visible).sort((e, a) => e.order - a.order)
            }, [k.sections]),
            T = (0, g.useGifts)(),
            O = (0, t.useMemo)(() => [...k.events ?? []].sort((e, a) => e.displayOrder - a.displayOrder), [k.events]),
            R = (0, t.useMemo)(() => (0, h.Q)(O), [O]),
            q = (0, t.useMemo)(() => R ? O.find(e => {
                var a;
                return (null == (a = (0, h.O)(e.date, e.startTime)) ? void 0 : a.getTime()) === R.getTime()
            }) : void 0, [O, R]),
            M = k.story,
            E = k.photos ?? [],
            D = (0, r.L)(),
            H = S.filter(e => (e => {
                switch (e) {
                    case "hero":
                    case "footer":
                        return !0;
                    case "events":
                        return O.length > 0;
                    case "story":
                        return !!((null == M ? void 0 : M.enabled) && M.content.trim());
                    case "gallery":
                        return E.length > 0;
                    case "countdown":
                        return null !== R && !D;
                    case "family":
                        return (0, n.M)(k.family) && (0, n.i)(k.family);
                    case "hashtag":
                        var a, t;
                        return !!(null == (t = k.hashtag) || null == (a = t.tag) ? void 0 : a.trim());
                    case "special-request":
                        return (0, o.S)(k.specialRequest);
                    case "gifts":
                        return !!((null == T ? void 0 : T.section) && T.funds.length > 0);
                    case "rsvp":
                        return k.rsvpSettings.enabled;
                    default:
                        return !1
                }
            })(e.kind)),
            P = H.findIndex(e => "hero" === e.kind),
            U = P >= 0 && (null == (v = H[P + 1]) ? void 0 : v.kind) === "events",
            z = H.some(e => "hashtag" === e.kind),
            J = (0, s.r)("inviteThemes.ram-mandir"),
            V = (0, x.f)(),
            K = k.couple.partnerOneName || J("hero.partnerOne"),
            Y = k.couple.partnerTwoName || J("hero.partnerTwo"),
            Z = (null == (w = k.couple.logoUrl) ? void 0 : w.trim()) ?? "",
            X = /^https:\/\/[^\s"'\\()]+$/.test(Z) ? Z : "",
            ea = (0, t.useMemo)(() => (0, c.T)(c.j, k.sections), [k.sections]),
            et = (0, l.f)(),
            es = (0, d.y)(),
            ei = (0, r.Q)(),
            [en, ed] = (0, t.useState)("closed"),
            ec = !ei && !(es && et) && "open" !== en,
            ep = es && ec && "closed" === en,
            ef = (0, t.useRef)(void 0);
        (0, t.useEffect)(() => {
            if (!ep) return;
            let e = document.body.style.overflow;
            return document.body.style.overflow = "hidden", () => {
                document.body.style.overflow = e
            }
        }, [ep]), (0, t.useEffect)(() => () => window.clearTimeout(ef.current), []);
        let eg = (0, t.useCallback)(() => {
                "closed" === en && (window.scrollTo({
                    top: 0,
                    behavior: "instant"
                }), ed("leaving"), ef.current = window.setTimeout(() => ed("open"), 2700))
            }, [en]),
            ey = (0, t.useCallback)(() => {
                window.clearTimeout(ef.current), ed("open")
            }, []),
            ev = O.find(e => "WEDDING" === e.type) ?? q ?? O[0],
            ex = ev ? [ev.date ? V.date(ev.date, {
                weekday: "long"
            }) : "", (null == (N = ev.city) ? void 0 : N.trim()) ?? ""].filter(Boolean).join(" · ") : "",
            ej = S.some(e => "family" === e.kind) ? (0, u.v)(k.family) : void 0;
        return (0, a.jsxs)(a.Fragment, {
            children: [ec ? (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)("style", {
                    dangerouslySetInnerHTML: {
                        __html: `html, body { background-color: ${(0,b.F)(ee(C))} !important; }`
                    }
                }), (0, a.jsx)(el, {
                    one: K,
                    two: Y,
                    when: ex,
                    leaving: "leaving" === en,
                    theme: W,
                    invocation: ea.invocation,
                    emblem: ea.emblem,
                    logo: X,
                    devanagariFont: eR,
                    scriptFont: eT,
                    onOpen: eg,
                    onSkip: ey
                })]
            }) : null, (0, a.jsxs)("main", {
                ref: F,
                inert: ep,
                className: L.default.page,
                style: {
                    background: C.background,
                    color: C.text,
                    fontFamily: W.bodyFont
                },
                children: [(0, a.jsx)(m.f, {
                    families: [null == _ ? void 0 : _.fonts.heading, null == _ ? void 0 : _.fonts.body, eS, eO]
                }), H.map(e => (0, a.jsx)(t.Fragment, {
                    children: (e => {
                        switch (e) {
                            case "hero":
                                return (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)(eM, {
                                        data: k,
                                        theme: W,
                                        blessing: ea,
                                        eventsFollow: U,
                                        family: ej
                                    }), (0, a.jsx)(B, {
                                        family: ej,
                                        couple: k.couple,
                                        theme: W
                                    })]
                                });
                            case "events":
                                return (0, a.jsx)(eb, {
                                    events: O,
                                    theme: W,
                                    scriptFont: eT,
                                    devanagariFont: eR
                                });
                            case "story":
                                return (0, a.jsx)(em, {
                                    story: M,
                                    one: K,
                                    two: Y,
                                    theme: W,
                                    scriptFont: eT
                                });
                            case "gallery":
                                return (0, a.jsx)(Q, {
                                    photos: E,
                                    theme: W,
                                    scriptFont: eT
                                });
                            case "countdown":
                                return R ? (0, a.jsx)(A, {
                                    target: R,
                                    event: q,
                                    events: O,
                                    theme: W,
                                    scriptFont: eT
                                }) : null;
                            case "family":
                                return (0, a.jsx)(I, {
                                    family: k.family,
                                    couple: k.couple,
                                    theme: W,
                                    scriptFont: eT
                                });
                            case "hashtag":
                                return (0, a.jsx)("div", {
                                    className: L.default.hashtag,
                                    style: {
                                        background: C.background
                                    },
                                    children: (0, a.jsx)(er, {
                                        hashtag: k.hashtag,
                                        theme: W,
                                        logo: X,
                                        emblem: ea.emblem,
                                        devanagariFont: eR
                                    })
                                });
                            case "special-request":
                                return (0, a.jsx)(p.SpecialRequestSection, {
                                    specialRequest: k.specialRequest,
                                    theme: W
                                });
                            case "gifts":
                                return (0, a.jsx)(y.f, {
                                    theme: W
                                });
                            case "rsvp":
                                return (0, a.jsx)(eo, {
                                    slug: k.slug,
                                    events: O,
                                    settings: k.rsvpSettings,
                                    theme: W,
                                    themeConfig: _,
                                    scriptFont: eT
                                });
                            case "footer":
                                return (0, a.jsx)(G, {
                                    one: K,
                                    two: Y,
                                    logo: z ? void 0 : X,
                                    shareUrl: $,
                                    shareSettings: k.shareSettings,
                                    watermarkEnabled: k.watermarkEnabled,
                                    theme: W,
                                    scriptFont: eT
                                });
                            default:
                                return null
                        }
                    })(e.kind)
                }, e.id))]
            }), ei || !es || ec && "closed" === en ? null : (0, a.jsx)(eh, {
                color: C.text,
                paper: C.background,
                underGate: ec
            })]
        })
    }], 300235)
}, 663036, e => {
    e.v({
        "act-card": "khcN6q_act-card",
        "act-dim": "khcN6q_act-dim",
        "act-door-l": "khcN6q_act-door-l",
        "act-door-r": "khcN6q_act-door-r",
        "act-flash": "khcN6q_act-flash",
        "act-glow": "khcN6q_act-glow",
        "act-nudge": "khcN6q_act-nudge",
        "act-off": "khcN6q_act-off",
        "act-shade": "khcN6q_act-shade",
        actBell: "khcN6q_actBell",
        actDim: "khcN6q_actDim",
        actFlash: "khcN6q_actFlash",
        actFx: "khcN6q_actFx",
        actGlow: "khcN6q_actGlow",
        actHint: "khcN6q_actHint",
        actTl: "khcN6q_actTl",
        arrow: "khcN6q_arrow",
        bell: "khcN6q_bell",
        birds: "khcN6q_birds",
        bloom: "khcN6q_bloom",
        bloomL: "khcN6q_bloomL",
        bloomR: "khcN6q_bloomR",
        card: "khcN6q_card",
        cardDate: "khcN6q_cardDate",
        cardFacts: "khcN6q_cardFacts",
        cardInvocation: "khcN6q_cardInvocation",
        cardName: "khcN6q_cardName",
        cardNote: "khcN6q_cardNote",
        cardRule: "khcN6q_cardRule",
        cardWrap: "khcN6q_cardWrap",
        carousel: "khcN6q_carousel",
        carouselArrow: "khcN6q_carouselArrow",
        carouselCount: "khcN6q_carouselCount",
        carouselNav: "khcN6q_carouselNav",
        carve: "khcN6q_carve",
        carveAmp: "khcN6q_carveAmp",
        carveName: "khcN6q_carveName",
        carveNames: "khcN6q_carveNames",
        carveScript: "khcN6q_carveScript",
        chapter: "khcN6q_chapter",
        clock: "khcN6q_clock",
        clockLabel: "khcN6q_clockLabel",
        clockSpark: "khcN6q_clockSpark",
        clockUnit: "khcN6q_clockUnit",
        clockValue: "khcN6q_clockValue",
        contain: "khcN6q_contain",
        copy: "khcN6q_copy",
        countdown: "khcN6q_countdown",
        countdownFor: "khcN6q_countdownFor",
        countdownHeading: "khcN6q_countdownHeading",
        countdownRule: "khcN6q_countdownRule",
        countdownScript: "khcN6q_countdownScript",
        countdownSun: "khcN6q_countdownSun",
        cover: "khcN6q_cover",
        crown: "khcN6q_crown",
        "cue-bob": "khcN6q_cue-bob",
        "cue-in": "khcN6q_cue-in",
        defs: "khcN6q_defs",
        diya: "khcN6q_diya",
        diyaGlow: "khcN6q_diyaGlow",
        diyaL: "khcN6q_diyaL",
        diyaR: "khcN6q_diyaR",
        doors: "khcN6q_doors",
        drift: "khcN6q_drift",
        drop: "khcN6q_drop",
        ember: "khcN6q_ember",
        emblemGlyph: "khcN6q_emblemGlyph",
        emblemMark: "khcN6q_emblemMark",
        "ev-fall": "khcN6q_ev-fall",
        "ev-flicker": "khcN6q_ev-flicker",
        "ev-pop": "khcN6q_ev-pop",
        "ev-rise": "khcN6q_ev-rise",
        eventsIntro: "khcN6q_eventsIntro",
        fact: "khcN6q_fact",
        factBody: "khcN6q_factBody",
        factIcon: "khcN6q_factIcon",
        factLink: "khcN6q_factLink",
        factTitle: "khcN6q_factTitle",
        facts: "khcN6q_facts",
        factsHeading: "khcN6q_factsHeading",
        fall: "khcN6q_fall",
        family: "khcN6q_family",
        familyAct: "khcN6q_familyAct",
        familyBody: "khcN6q_familyBody",
        familyElders: "khcN6q_familyElders",
        familyHeading: "khcN6q_familyHeading",
        familyLotus: "khcN6q_familyLotus",
        familyRule: "khcN6q_familyRule",
        familyScript: "khcN6q_familyScript",
        flame: "khcN6q_flame",
        flicker: "khcN6q_flicker",
        flight: "khcN6q_flight",
        float: "khcN6q_float",
        focus: "khcN6q_focus",
        footer: "khcN6q_footer",
        footerAnd: "khcN6q_footerAnd",
        footerCopy: "khcN6q_footerCopy",
        footerHeading: "khcN6q_footerHeading",
        footerLine: "khcN6q_footerLine",
        footerMark: "khcN6q_footerMark",
        footerNames: "khcN6q_footerNames",
        footerScript: "khcN6q_footerScript",
        footerShare: "khcN6q_footerShare",
        footerShareLabel: "khcN6q_footerShareLabel",
        footerSun: "khcN6q_footerSun",
        fx: "khcN6q_fx",
        fxLead: "khcN6q_fxLead",
        gallery: "khcN6q_gallery",
        galleryHeading: "khcN6q_galleryHeading",
        galleryHub: "khcN6q_galleryHub",
        galleryScript: "khcN6q_galleryScript",
        ganesha: "khcN6q_ganesha",
        gate: "khcN6q_gate",
        gatebox: "khcN6q_gatebox",
        glow: "khcN6q_glow",
        halo: "khcN6q_halo",
        hashtag: "khcN6q_hashtag",
        heroGuest: "khcN6q_heroGuest",
        heroGuestInvited: "khcN6q_heroGuestInvited",
        heroGuestName: "khcN6q_heroGuestName",
        heroGuestText: "khcN6q_heroGuestText",
        heroName: "khcN6q_heroName",
        heroNames: "khcN6q_heroNames",
        heroOne: "khcN6q_heroOne",
        heroTwo: "khcN6q_heroTwo",
        heroWeds: "khcN6q_heroWeds",
        "ht-dust": "khcN6q_ht-dust",
        "ht-foil": "khcN6q_ht-foil",
        "ht-glint": "khcN6q_ht-glint",
        "ht-press": "khcN6q_ht-press",
        "ht-ring": "khcN6q_ht-ring",
        "ht-up": "khcN6q_ht-up",
        htCh: "khcN6q_htCh",
        htCopied: "khcN6q_htCopied",
        htCopy: "khcN6q_htCopy",
        htDust: "khcN6q_htDust",
        htKicker: "khcN6q_htKicker",
        htLetters: "khcN6q_htLetters",
        htRing: "khcN6q_htRing",
        htSeal: "khcN6q_htSeal",
        htStage: "khcN6q_htStage",
        htTag: "khcN6q_htTag",
        htWhy: "khcN6q_htWhy",
        inviteAnd: "khcN6q_inviteAnd",
        inviteNames: "khcN6q_inviteNames",
        inviteParents: "khcN6q_inviteParents",
        layer: "khcN6q_layer",
        leaf: "khcN6q_leaf",
        leafL: "khcN6q_leafL",
        leafR: "khcN6q_leafR",
        leak: "khcN6q_leak",
        lightbox: "khcN6q_lightbox",
        lightboxButton: "khcN6q_lightboxButton",
        lightboxCaption: "khcN6q_lightboxCaption",
        lightboxClose: "khcN6q_lightboxClose",
        lightboxFigure: "khcN6q_lightboxFigure",
        lightboxFrame: "khcN6q_lightboxFrame",
        lightboxNext: "khcN6q_lightboxNext",
        lightboxPrev: "khcN6q_lightboxPrev",
        lit: "khcN6q_lit",
        logoMark: "khcN6q_logoMark",
        mantra: "khcN6q_mantra",
        mapLink: "khcN6q_mapLink",
        message: "khcN6q_message",
        outro: "khcN6q_outro",
        outside: "khcN6q_outside",
        page: "khcN6q_page",
        patrika: "khcN6q_patrika",
        patrikaLeaving: "khcN6q_patrikaLeaving",
        petal: "khcN6q_petal",
        pin: "khcN6q_pin",
        "pk-ping": "khcN6q_pk-ping",
        "pk-tassel": "khcN6q_pk-tassel",
        pkAnd: "khcN6q_pkAnd",
        pkBlessing: "khcN6q_pkBlessing",
        pkBottom: "khcN6q_pkBottom",
        pkHalf: "khcN6q_pkHalf",
        pkHint: "khcN6q_pkHint",
        pkKicker: "khcN6q_pkKicker",
        pkNames: "khcN6q_pkNames",
        pkPrint: "khcN6q_pkPrint",
        pkPrintBottom: "khcN6q_pkPrintBottom",
        pkPrintTop: "khcN6q_pkPrintTop",
        pkRod: "khcN6q_pkRod",
        pkRoll: "khcN6q_pkRoll",
        pkScroll: "khcN6q_pkScroll",
        pkSeal: "khcN6q_pkSeal",
        pkSealFace: "khcN6q_pkSealFace",
        pkSealGlyph: "khcN6q_pkSealGlyph",
        pkSealLogo: "khcN6q_pkSealLogo",
        pkTassel: "khcN6q_pkTassel",
        pkTasselA: "khcN6q_pkTasselA",
        pkTasselB: "khcN6q_pkTasselB",
        pkThread: "khcN6q_pkThread",
        pkThreadA: "khcN6q_pkThreadA",
        pkThreadB: "khcN6q_pkThreadB",
        pkTop: "khcN6q_pkTop",
        pkWhen: "khcN6q_pkWhen",
        plane: "khcN6q_plane",
        pond: "khcN6q_pond",
        recede: "khcN6q_recede",
        rise: "khcN6q_rise",
        row: "khcN6q_row",
        rows: "khcN6q_rows",
        rsvp: "khcN6q_rsvp",
        rsvpCard: "khcN6q_rsvpCard",
        rsvpForm: "khcN6q_rsvpForm",
        rsvpHead: "khcN6q_rsvpHead",
        rsvpHeading: "khcN6q_rsvpHeading",
        rsvpLotus: "khcN6q_rsvpLotus",
        rsvpScript: "khcN6q_rsvpScript",
        rsvpSub: "khcN6q_rsvpSub",
        rsvpSun: "khcN6q_rsvpSun",
        rsvpSunFoot: "khcN6q_rsvpSunFoot",
        sanctum: "khcN6q_sanctum",
        sceneArt: "khcN6q_sceneArt",
        scrollCue: "khcN6q_scrollCue",
        scrollCueChevron: "khcN6q_scrollCueChevron",
        scrollCueGone: "khcN6q_scrollCueGone",
        scrollCueLabel: "khcN6q_scrollCueLabel",
        scrollCuePill: "khcN6q_scrollCuePill",
        seam: "khcN6q_seam",
        seamWrap: "khcN6q_seamWrap",
        settle: "khcN6q_settle",
        shade: "khcN6q_shade",
        shloka: "khcN6q_shloka",
        slide: "khcN6q_slide",
        slideCaption: "khcN6q_slideCaption",
        slidePhoto: "khcN6q_slidePhoto",
        solo: "khcN6q_solo",
        spark: "khcN6q_spark",
        spoke: "khcN6q_spoke",
        stage: "khcN6q_stage",
        steps: "khcN6q_steps",
        storyAct: "khcN6q_storyAct",
        storyBody: "khcN6q_storyBody",
        storyBodyRule: "khcN6q_storyBodyRule",
        storyCap: "khcN6q_storyCap",
        storyCard: "khcN6q_storyCard",
        storyFoot: "khcN6q_storyFoot",
        storyHead: "khcN6q_storyHead",
        storyHeading: "khcN6q_storyHeading",
        storyLotus: "khcN6q_storyLotus",
        storyScript: "khcN6q_storyScript",
        storyText: "khcN6q_storyText",
        storyWindow: "khcN6q_storyWindow",
        storyWrap: "khcN6q_storyWrap",
        swatch: "khcN6q_swatch",
        sway: "khcN6q_sway",
        "sway-fan": "khcN6q_sway-fan",
        timeline: "khcN6q_timeline",
        timelineHead: "khcN6q_timelineHead",
        timelineHeading: "khcN6q_timelineHeading",
        timelineScript: "khcN6q_timelineScript",
        timelineSub: "khcN6q_timelineSub",
        track: "khcN6q_track",
        turn: "khcN6q_turn",
        vignette: "khcN6q_vignette",
        wheel: "khcN6q_wheel",
        wheelPhoto: "khcN6q_wheelPhoto",
        wideOnly: "khcN6q_wideOnly",
        window: "khcN6q_window",
        withParents: "khcN6q_withParents"
    })
}, 115083, e => {
    "use strict";
    var a = e.i(729176),
        t = e.i(244835),
        l = e.i(301187),
        s = e.i(541464),
        r = e.i(506563),
        i = e.i(738371),
        n = e.i(575198),
        o = e.i(19269),
        d = e.i(600024),
        c = e.i(875022),
        u = e.i(132680),
        h = e.i(301444),
        m = e.i(138813),
        p = e.i(642895),
        f = e.i(147196),
        g = e.i(60649),
        y = e.i(692126),
        v = e.i(366471),
        x = e.i(888531),
        j = e.i(664857),
        b = e.i(519942),
        w = e.i(254596),
        N = e.i(520837),
        k = e.i(843863),
        _ = e.i(48407),
        $ = e.i(410739),
        W = e.i(396243),
        C = e.i(337863);
    let F = {
            src: "https://res.cloudinary.com/distroters/image/upload/v1792307555/wedding-card-maker/layouts/riviera-letters/citrus-etching.webp",
            w: 600,
            h: 900,
            bytes: 131354
        },
        L = {
            src: "https://res.cloudinary.com/distroters/image/upload/v1792307556/wedding-card-maker/layouts/riviera-letters/shell-etching.webp",
            w: 750,
            h: 500,
            bytes: 101394
        },
        S = "https://res.cloudinary.com/distroters/image/upload/v1792305925/wedding-card-maker/layouts/riviera-letters/countdown-bay.webp",
        T = 1e3,
        O = 1500,
        R = "https://res.cloudinary.com/distroters/image/upload/v1792305926/wedding-card-maker/layouts/riviera-letters/farewell-rings.webp",
        q = 1e3,
        M = 1250,
        E = {
            src: "https://res.cloudinary.com/distroters/image/upload/v1792305861/wedding-card-maker/layouts/riviera-letters/story-cafe.webp",
            w: 900,
            h: 1125,
            bytes: 236624
        },
        D = {
            src: "https://res.cloudinary.com/distroters/image/upload/v1792305862/wedding-card-maker/layouts/riviera-letters/story-proposal.webp",
            w: 900,
            h: 1125,
            bytes: 342406
        },
        H = {
            src: "https://res.cloudinary.com/distroters/image/upload/v1792305863/wedding-card-maker/layouts/riviera-letters/story-return.webp",
            w: 900,
            h: 1125,
            bytes: 396482
        },
        A = "https://res.cloudinary.com/distroters/image/upload/v1792304679/wedding-card-maker/layouts/riviera-letters/night-portrait.webp",
        P = 900,
        I = 1350,
        B = "https://res.cloudinary.com/distroters/image/upload/v1792304380/wedding-card-maker/layouts/riviera-letters/night.webp",
        U = 1536,
        z = 1024,
        G = "https://res.cloudinary.com/distroters/image/upload/v1792304035/wedding-card-maker/layouts/riviera-letters/altar.webp",
        J = 800,
        V = 1200,
        K = "https://res.cloudinary.com/distroters/image/upload/v1792303761/wedding-card-maker/layouts/riviera-letters/terrace.webp",
        Y = "https://res.cloudinary.com/distroters/image/upload/v1792303492/wedding-card-maker/layouts/riviera-letters/horizon.webp",
        Z = "https://res.cloudinary.com/distroters/image/upload/v1792303493/wedding-card-maker/layouts/riviera-letters/foliage.webp",
        Q = "https://res.cloudinary.com/distroters/image/upload/v1792302782/wedding-card-maker/layouts/riviera-letters/ceremony.webp",
        X = "https://res.cloudinary.com/distroters/image/upload/v1792302393/wedding-card-maker/layouts/riviera-letters/coast.webp",
        ee = "https://res.cloudinary.com/distroters/image/upload/v1792302394/wedding-card-maker/layouts/riviera-letters/couple.webp",
        ea = 700,
        et = 1050,
        el = "https://res.cloudinary.com/distroters/image/upload/v1792302395/wedding-card-maker/layouts/riviera-letters/supper.webp";
    var es = e.i(490257);

    function er(e) {
        let {
            names: s,
            dateLabel: r,
            placeLabel: i,
            onClose: n
        } = e, o = (0, t.useRef)(null), [d, c] = (0, t.useState)(!1), [u, h] = (0, t.useState)(!1), m = (0, l.r)("invite.intro");
        return (0, t.useEffect)(() => {
            let e = o.current;
            if (!(null == e ? void 0 : e.showModal)) return;
            e.open && e.close(), e.showModal(), h(!0);
            let a = document.body.style.overflow;
            return document.body.style.overflow = "hidden", () => {
                e.close(), document.body.style.overflow = a
            }
        }, []), (0, t.useEffect)(() => {
            if (!d) return;
            let e = window.setTimeout(n, 1550);
            return () => window.clearTimeout(e)
        }, [d, n]), (0, a.jsx)("dialog", {
            open: !0,
            ref: o,
            className: es.default.gate,
            "data-leaving": d || void 0,
            "data-invitation-gate": !0,
            "aria-label": m("openFrom", {
                names: s
            }),
            onCancel: n,
            onClick: () => {
                u && !d && c(!0)
            },
            onKeyDown: e => {
                u && !d && ("Enter" === e.key || " " === e.key) && (e.preventDefault(), c(!0))
            },
            children: (0, a.jsxs)("div", {
                className: es.default.gateWorld,
                children: [(0, a.jsxs)("picture", {
                    children: [(0, a.jsx)("source", {
                        media: "(max-aspect-ratio: 3/4)",
                        srcSet: A,
                        width: P,
                        height: I
                    }), (0, a.jsx)("img", {
                        className: es.default.nightCoast,
                        src: B,
                        width: U,
                        height: z,
                        alt: "",
                        fetchPriority: "high"
                    })]
                }), (0, a.jsxs)("div", {
                    className: es.default.nightWater,
                    "aria-hidden": "true",
                    children: [(0, a.jsx)("i", {}), (0, a.jsx)("i", {}), (0, a.jsx)("i", {}), (0, a.jsx)("i", {}), (0, a.jsx)("i", {})]
                }), (0, a.jsxs)("div", {
                    className: es.default.gateCopy,
                    children: [(0, a.jsx)(v.GuestGreeting, {
                        className: es.default.gateGuest
                    }), (0, a.jsx)("p", {
                        className: es.default.gateEyebrow,
                        children: m("invited")
                    }), (0, a.jsx)("p", {
                        className: es.default.gateNames,
                        children: s
                    }), r ? (0, a.jsx)("p", {
                        className: es.default.gateDate,
                        children: r
                    }) : null, i ? (0, a.jsx)("p", {
                        className: es.default.gatePlace,
                        children: i
                    }) : null]
                }), (0, a.jsxs)("button", {
                    type: "button",
                    className: es.default.enter,
                    "data-gate-target": !0,
                    onClick: () => c(!0),
                    "aria-label": m("open"),
                    disabled: !u || d,
                    children: [(0, a.jsx)("span", {
                        children: m("openTheInvitation")
                    }), (0, a.jsx)("svg", {
                        viewBox: "0 0 32 64",
                        width: "24",
                        height: "48",
                        "aria-hidden": "true",
                        children: (0, a.jsx)("path", {
                            d: "M16 2V57M6 47L16 57L26 47",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1"
                        })
                    })]
                })]
            })
        })
    }
    var ei = e.i(609947);

    function en(e) {
        let {
            photo: t,
            photoAlt: l,
            showBirds: s,
            birdColor: r
        } = e;
        return (0, a.jsxs)("div", {
            className: es.default.heroScene,
            children: [(0, a.jsx)("img", {
                className: es.default.coast,
                src: t || Y,
                width: 1536,
                height: 1024,
                alt: t ? l : "",
                fetchPriority: "high"
            }), t ? null : (0, a.jsxs)(a.Fragment, {
                children: [s ? (0, a.jsx)(ei.k, {
                    className: es.default.birds,
                    color: r
                }) : null, (0, a.jsxs)("div", {
                    className: es.default.clouds,
                    "aria-hidden": "true",
                    children: [(0, a.jsx)(eo, {}), (0, a.jsx)(eo, {})]
                }), (0, a.jsx)("div", {
                    className: es.default.water,
                    "aria-hidden": "true",
                    children: Array.from({
                        length: 9
                    }, (e, t) => (0, a.jsx)("i", {}, t))
                }), (0, a.jsxs)("div", {
                    className: es.default.sailing,
                    "aria-hidden": "true",
                    children: [(0, a.jsxs)("svg", {
                        className: es.default.boat,
                        viewBox: "0 0 160 190",
                        fill: "none",
                        children: [(0, a.jsx)("path", {
                            d: "M82 9V163",
                            stroke: "var(--ink)",
                            strokeWidth: "2"
                        }), (0, a.jsx)("path", {
                            d: "M77 17C57 50 24 104 15 141L77 147Z",
                            fill: "var(--surface)"
                        }), (0, a.jsx)("path", {
                            d: "M87 44L140 144L87 145Z",
                            fill: "var(--paper)"
                        }), (0, a.jsx)("path", {
                            d: "M76 27L54 139M71 46L33 137",
                            stroke: "var(--line)",
                            opacity: ".65"
                        }), (0, a.jsx)("path", {
                            d: "M10 153Q83 164 151 151L131 170Q78 180 28 168Z",
                            fill: "var(--blue)"
                        }), (0, a.jsx)("path", {
                            d: "M13 153Q82 163 149 152",
                            stroke: "var(--surface)",
                            strokeWidth: "4"
                        }), (0, a.jsx)("path", {
                            d: "M82 9L101 15L82 21Z",
                            fill: "var(--accent)"
                        })]
                    }), (0, a.jsx)("span", {
                        className: es.default.wake
                    })]
                }), (0, a.jsx)("div", {
                    className: es.default.terrace,
                    style: {
                        backgroundImage: `url(${K})`
                    }
                }), (0, a.jsx)("img", {
                    className: es.default.altar,
                    src: G,
                    width: J,
                    height: V,
                    alt: ""
                }), (0, a.jsx)("img", {
                    className: es.default.couple,
                    src: ee,
                    width: ea,
                    height: et,
                    alt: ""
                }), (0, a.jsx)(ec, {}), (0, a.jsx)("div", {
                    className: es.default.foliageLeft,
                    children: (0, a.jsx)("img", {
                        src: Z,
                        width: 1536,
                        height: 1024,
                        alt: ""
                    })
                }), (0, a.jsx)("div", {
                    className: es.default.foliageRight,
                    children: (0, a.jsx)("img", {
                        src: Z,
                        width: 1536,
                        height: 1024,
                        alt: ""
                    })
                })]
            })]
        })
    }

    function eo() {
        return (0, a.jsx)("svg", {
            viewBox: "0 0 600 100",
            fill: "var(--surface)",
            children: (0, a.jsx)("path", {
                d: "M0 84C20 62 66 72 90 61C105 12 172 17 194 47C216 0 300 1 322 49C355 29 404 30 425 60C479 50 519 73 600 84C438 103 159 103 0 84Z"
            })
        })
    }
    let ed = [
        [8, 12, -4, 32, 12],
        [91, 15, -11, -34, 15],
        [23, 17, -15, 40, 9],
        [77, 13, -7, -30, 13],
        [4, 16, -13, 28, 10],
        [97, 19, -3, -38, 11],
        [34, 20, -19, 34, 8],
        [66, 16, -9, -42, 10],
        [15, 18, -8, 26, 8],
        [85, 14, -12, -30, 10]
    ];

    function ec(e) {
        let {
            variant: t = "garden"
        } = e;
        return (0, a.jsx)("div", {
            className: es.default.petals,
            "data-drift": t,
            "aria-hidden": "true",
            children: ed.map((e, l) => {
                let [s, r, i, n, o] = e;
                return (0, a.jsx)("span", {
                    className: es.default.petalFlight,
                    "data-leaf": "garden" === t && l % 3 == 1 ? "true" : void 0,
                    style: {
                        left: `${s}%`,
                        "--fall-time": `${r}s`,
                        "--fall-delay": `${i}s`,
                        "--sway": `${n}px`,
                        "--petal-size": `${o}px`,
                        "--flutter-time": `${4+l%4}s`
                    },
                    children: (0, a.jsx)("span", {
                        className: es.default.petalFlutter,
                        children: (0, a.jsx)("i", {
                            className: es.default.petalShape
                        })
                    })
                }, l)
            })
        })
    }

    function eu(e) {
        let {
            coastal: t = !1
        } = e, l = t ? L : F;
        return (0, a.jsxs)("div", {
            className: es.default.paperDetails,
            "data-coastal": t || void 0,
            "aria-hidden": "true",
            children: [(0, a.jsx)(ec, {
                variant: "blossom"
            }), (0, a.jsx)("img", {
                className: es.default.paperDetailStart,
                src: l.src,
                width: l.w,
                height: l.h,
                alt: "",
                loading: "lazy"
            }), (0, a.jsx)("img", {
                className: es.default.paperDetailEnd,
                src: F.src,
                width: F.w,
                height: F.h,
                alt: "",
                loading: "lazy"
            })]
        })
    }

    function eh(e) {
        let {
            target: t,
            date: s
        } = e, r = (0, b.f)(t), i = (0, l.r)("invite.countdown");
        return (0, a.jsxs)("section", {
            className: es.default.countdown,
            "data-scene": !0,
            children: [(0, a.jsx)("img", {
                className: es.default.countdownArt,
                src: S,
                width: T,
                height: O,
                alt: "",
                loading: "lazy"
            }), (0, a.jsx)(ec, {
                variant: "night"
            }), (0, a.jsx)("div", {
                className: es.default.nightWater,
                "aria-hidden": "true",
                children: Array.from({
                    length: 5
                }, (e, t) => (0, a.jsx)("i", {}, t))
            }), (0, a.jsxs)("div", {
                className: es.default.countdownCopy,
                children: [(0, a.jsx)("p", {
                    className: es.default.countdownLabel,
                    children: (null == r ? void 0 : r.done) ? i("begun") : i("title")
                }), (0, a.jsx)("h2", {
                    className: es.default.countdownDate,
                    children: s
                }), (null == r ? void 0 : r.done) ? (0, a.jsx)("p", {
                    children: i("thanks")
                }) : (0, a.jsx)("div", {
                    className: es.default.clock,
                    role: "timer",
                    "aria-live": "off",
                    children: ["days", "hours", "minutes", "seconds"].map(e => (0, a.jsxs)("div", {
                        children: [(0, a.jsx)("span", {
                            children: r ? String(r[e]).padStart(2, "0") : "--"
                        }), (0, a.jsx)("p", {
                            children: i(e, {
                                count: (null == r ? void 0 : r[e]) ?? 0
                            })
                        })]
                    }, e))
                })]
            })]
        })
    }
    e.s(["RivieraLettersExperience", 0, function(e) {
        var b;
        let {
            data: F,
            theme: L,
            shareUrl: S
        } = e, T = (0, t.useRef)(null);
        (0, t.useEffect)(() => {
            if (!T.current || "u" < typeof IntersectionObserver) return;
            let e = new IntersectionObserver(e => {
                for (let a of e) {
                    let e = a.target;
                    e.dataset.active = String(a.isIntersecting), a.isIntersecting && (e.dataset.seen = "true")
                }
            }, {
                rootMargin: "0px 0px -8% 0px"
            });
            return T.current.querySelectorAll("[data-scene]").forEach(a => e.observe(a)), () => e.disconnect()
        }, [F]);
        let O = (0, W.f)(L),
            A = (0, l.r)("invite"),
            P = (0, l.r)("invite.riviera"),
            I = (0, l.r)("family"),
            B = (0, l.r)("specialRequest"),
            U = (0, l.r)("rsvp"),
            z = (0, j.f)(),
            G = (0, f.Q)(),
            J = (0, f.L)(),
            V = (0, g.f)("(prefers-reduced-motion: reduce)"),
            [K, Y] = (0, t.useState)(!1),
            [Z, ee] = (0, t.useState)(!1),
            ea = (0, t.useCallback)(() => Y(!0), []),
            et = !G && !V && !K,
            ei = (0, r.x)((null == (b = F.sections) ? void 0 : b.length) ? F.sections : s.n).filter(e => e.visible).sort((e, a) => e.order - a.order),
            eo = (0, i.useGifts)(),
            ed = e => ei.some(a => a.kind === e),
            em = [...F.events].sort((e, a) => e.displayOrder - a.displayOrder),
            ep = em.find(e => h.N.has(e.type)) ?? em[0],
            ef = [F.couple.partnerOneName, F.couple.partnerTwoName].filter(Boolean).join(` ${A("hero.and")} `) || A("hero.coupleFallback"),
            eg = (0, C.f)(F.couple),
            ey = F.story.content.split(/\n\s*\n/).filter(Boolean),
            ev = ed("family") && (0, o.i)(F.family) ? F.family : void 0,
            ex = ev ? (0, o.n)(ev, F.couple) : [],
            ej = ep ? (0, u.z)(ep.date, ep.startTime, ep.timezone || "UTC") : null,
            eb = [O.palette.surface, O.palette.text, O.palette.background, O.palette.primary].sort((e, a) => (0, W.E)(e) - (0, W.E)(a)),
            ew = {
                "--welcome-blue": .3 > (0, W.E)(O.palette.primary) ? O.palette.primary : eb[0],
                "--night-ink": eb[eb.length - 1],
                "--night-shade": eb[0],
                "--name-scale": Math.min(1, 14 / Math.max(F.couple.partnerOneName.length, F.couple.partnerTwoName.length, 1)),
                "--paper": O.palette.background,
                "--surface": O.palette.surface,
                "--ink": O.palette.text,
                "--blue": O.palette.primary,
                "--muted": O.palette.muted,
                "--line": O.palette.secondary,
                "--accent": O.palette.accent,
                "--display": O.headingFont,
                "--weight": O.headingWeight ?? 500,
                fontFamily: O.bodyFont
            };
        return (0, a.jsxs)("main", {
            ref: T,
            className: es.default.page,
            "data-motion-paused": Z || void 0,
            style: ew,
            lang: z.locale,
            children: [(0, a.jsx)(y.f, {
                families: [null == L ? void 0 : L.fonts.heading, null == L ? void 0 : L.fonts.body]
            }), et ? (0, a.jsx)(er, {
                names: ef,
                dateLabel: ep ? z.date(ep.date) : void 0,
                placeLabel: ep ? [ep.city, ep.country].filter(Boolean).join(" · ") : void 0,
                onClose: ea
            }) : null, et || V ? null : (0, a.jsx)("button", {
                type: "button",
                className: es.default.motionToggle,
                onClick: () => ee(e => !e),
                "aria-label": P(Z ? "resumeMotion" : "pauseMotion"),
                title: P(Z ? "resumeMotion" : "pauseMotion"),
                children: (0, a.jsx)("span", {
                    "aria-hidden": "true",
                    children: Z ? "▷" : "Ⅱ"
                })
            }), ei.map(e => {
                var l, s;
                let r;
                switch (e.kind) {
                    case "hero":
                        r = (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("section", {
                                className: es.default.arrival,
                                "data-scene": !0,
                                "data-open": !et,
                                children: (0, a.jsxs)("div", {
                                    className: es.default.arrivalStage,
                                    children: [(0, a.jsx)(en, {
                                        photo: F.couple.coverPhotoUrl,
                                        photoAlt: A("paper.coverAlt"),
                                        showBirds: !V && !Z,
                                        birdColor: O.palette.muted
                                    }), (0, a.jsxs)("div", {
                                        className: es.default.heroCopy,
                                        children: [et ? null : (0, a.jsx)(v.GuestGreeting, {
                                            className: es.default.greeting
                                        }), (0, a.jsx)("p", {
                                            className: es.default.eyebrow,
                                            children: F.couple.headline || A("hero.headlineFallback")
                                        }), (0, a.jsxs)("h1", {
                                            className: es.default.names,
                                            children: [(0, a.jsx)("span", {
                                                "data-couple-name": !0,
                                                children: F.couple.partnerOneName || (F.couple.partnerTwoName ? "" : A("hero.namesPlaceholder"))
                                            }), F.couple.partnerOneName && F.couple.partnerTwoName ? (0, a.jsx)("i", {
                                                children: A("hero.and")
                                            }) : null, (0, a.jsx)("span", {
                                                "data-couple-name": !0,
                                                children: F.couple.partnerTwoName
                                            })]
                                        }), ep ? (0, a.jsxs)("p", {
                                            className: es.default.dateline,
                                            children: [z.date(ep.date), (0, a.jsx)("br", {}), [ep.city, ep.country].filter(Boolean).join(" · ")]
                                        }) : null, ed("rsvp") && F.rsvpSettings.enabled ? (0, a.jsxs)("a", {
                                            className: es.default.link,
                                            href: "#riviera-rsvp",
                                            children: [A("rsvp.eyebrow"), " ", (0, a.jsx)("span", {
                                                "aria-hidden": "true",
                                                children: "↗"
                                            })]
                                        }) : null]
                                    }, et ? "sealed" : "opened"), (0, a.jsx)("span", {
                                        className: es.default.scrollHint,
                                        "aria-hidden": "true",
                                        children: "↓"
                                    })]
                                })
                            }), (0, a.jsxs)("section", {
                                className: es.default.welcome,
                                "data-scene": !0,
                                children: [(0, a.jsx)(eu, {}), (0, a.jsx)("h2", {
                                    className: es.default.welcomeTitle,
                                    children: P.rich("welcomeTitle", {
                                        em: e => (0, a.jsx)("em", {
                                            children: e
                                        })
                                    })
                                }), F.couple.shortMessage ? (0, a.jsx)("p", {
                                    className: es.default.invitation,
                                    children: F.couple.shortMessage
                                }) : null, (0, a.jsx)("div", {
                                    className: es.default.welcomeSeal,
                                    "aria-hidden": "true",
                                    children: (0, a.jsx)("span", {
                                        children: eg
                                    })
                                }), ev && !(0, o.M)(ev) ? (0, a.jsx)("div", {
                                    className: es.default.familyGrid,
                                    children: ex.map(e => (0, a.jsxs)("div", {
                                        children: [(0, a.jsx)("h3", {
                                            children: e.name
                                        }), (0, a.jsx)(_.O, {
                                            view: e
                                        })]
                                    }, e.key))
                                }) : null]
                            })]
                        });
                        break;
                    case "story":
                        if (!F.story.enabled || !F.story.content.trim()) return null;
                        r = (0, a.jsxs)("section", {
                            className: es.default.story,
                            children: [(0, a.jsxs)("header", {
                                className: es.default.sectionHead,
                                children: [(0, a.jsx)("p", {
                                    className: es.default.eyebrow,
                                    children: A("story.eyebrow")
                                }), (0, a.jsx)("h2", {
                                    children: P("storyTitle")
                                })]
                            }), ey.map((e, t) => {
                                let l = [E, D, H][t];
                                return (0, a.jsxs)("div", {
                                    className: es.default.storyBeat,
                                    "data-illustrated": !!l,
                                    "data-scene": !0,
                                    children: [l ? (0, a.jsxs)("div", {
                                        className: es.default.storyArt,
                                        children: [(0, a.jsx)("img", {
                                            src: l.src,
                                            width: l.w,
                                            height: l.h,
                                            alt: "",
                                            loading: "lazy"
                                        }), (0, a.jsx)(ec, {
                                            variant: 1 === t ? "blossom" : "garden"
                                        })]
                                    }) : null, (0, a.jsxs)("div", {
                                        className: es.default.storyLetter,
                                        children: [(0, a.jsx)("span", {
                                            className: es.default.chapterNumber,
                                            "aria-hidden": "true",
                                            children: String(t + 1).padStart(2, "0")
                                        }), (0, a.jsx)("p", {
                                            className: es.default.prose,
                                            children: e
                                        }), t === ey.length - 1 ? (0, a.jsx)("p", {
                                            className: es.default.signature,
                                            children: ef
                                        }) : null]
                                    })]
                                }, t)
                            })]
                        });
                        break;
                    case "events":
                        if (!em.length) return null;
                        r = (0, a.jsxs)("section", {
                            className: es.default.events,
                            children: [(0, a.jsxs)("header", {
                                className: es.default.sectionHead,
                                children: [(0, a.jsx)("p", {
                                    className: es.default.eyebrow,
                                    children: A("events.eyebrow")
                                }), (0, a.jsx)("h2", {
                                    children: P("eventsTitle")
                                })]
                            }), em.map((e, t) => {
                                let l = (0, k.f)(e);
                                return (0, a.jsxs)("article", {
                                    className: es.default.event,
                                    "data-event": h.N.has(e.type) ? "ceremony" : "RECEPTION" === e.type ? "supper" : "welcome",
                                    "data-scene": !0,
                                    children: [(0, a.jsxs)("div", {
                                        className: es.default.eventArt,
                                        children: [(0, a.jsx)(ec, {
                                            variant: h.N.has(e.type) ? "blossom" : "garden"
                                        }), (0, a.jsx)("img", {
                                            src: h.N.has(e.type) ? Q : "RECEPTION" === e.type ? el : X,
                                            width: 1536,
                                            height: 1024,
                                            alt: "",
                                            loading: "lazy"
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: es.default.eventCard,
                                        children: [(0, a.jsx)(eu, {
                                            coastal: "RECEPTION" !== e.type
                                        }), (0, a.jsx)("span", {
                                            className: es.default.eventNumber,
                                            "aria-hidden": "true",
                                            children: String(t + 1).padStart(2, "0")
                                        }), (0, a.jsx)("p", {
                                            className: es.default.eventDate,
                                            children: z.date(e.date, {
                                                weekday: "long",
                                                day: "numeric",
                                                month: "long"
                                            })
                                        }), (0, a.jsx)("h3", {
                                            children: e.name
                                        }), (0, a.jsx)("p", {
                                            children: z.eventTimeOf(e)
                                        }), (0, a.jsx)("div", {
                                            className: es.default.rule
                                        }), (0, a.jsx)("p", {
                                            className: es.default.venue,
                                            children: e.venueName
                                        }), (0, a.jsx)("p", {
                                            children: [e.venueAddress, e.city, e.country].filter(Boolean).join(", ")
                                        }), e.description ? (0, a.jsx)("p", {
                                            className: es.default.eventDescription,
                                            children: e.description
                                        }) : null, e.dressCode ? (0, a.jsxs)("p", {
                                            children: [(0, a.jsxs)("span", {
                                                className: es.default.muted,
                                                children: [P("dressCode"), ": "]
                                            }), e.dressCode]
                                        }) : null, (0, a.jsx)(N.f, {
                                            event: e,
                                            accent: O.palette.primary
                                        }), (0, a.jsxs)("div", {
                                            className: es.default.links,
                                            children: [e.mapsUrl ? (0, a.jsxs)("a", {
                                                className: es.default.link,
                                                href: e.mapsUrl,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: [A("events.viewMap"), " ↗"]
                                            }) : null, l ? (0, a.jsxs)("a", {
                                                className: es.default.link,
                                                href: l,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: [P("calendar"), " ↗"]
                                            }) : null]
                                        })]
                                    })]
                                }, e.id)
                            })]
                        });
                        break;
                    case "countdown":
                        if (!ej || J) return null;
                        r = (0, a.jsx)(eh, {
                            target: ej.getTime(),
                            date: ep ? z.date(ep.date) : ""
                        });
                        break;
                    case "family":
                        if (!ev) return null;
                        r = (0, a.jsxs)("section", {
                            className: es.default.letter,
                            "data-scene": !0,
                            children: [(0, o.M)(ev) ? (0, a.jsx)("h2", {
                                children: I("title")
                            }) : null, (0, a.jsx)("p", {
                                className: es.default.eyebrow,
                                children: I("blessings")
                            }), (0, a.jsx)("p", {
                                className: es.default.signature,
                                children: ev.blessings
                            }), (0, a.jsx)("div", {
                                className: es.default.familyGrid,
                                children: ex.map(e => (0, a.jsxs)("div", {
                                    children: [(0, o.M)(ev) || !ed("hero") ? (0, a.jsxs)(a.Fragment, {
                                        children: [(0, a.jsx)("h3", {
                                            children: e.name
                                        }), (0, o.M)(ev) ? (0, a.jsxs)("p", {
                                            children: [(0, $.n)(I, e.relation), " ", (0, a.jsx)($.h, {
                                                people: e.parents
                                            })]
                                        }) : (0, a.jsx)(_.O, {
                                            view: e
                                        })]
                                    }) : null, e.grandparents.length ? (0, a.jsx)("p", {
                                        children: (0, a.jsx)($.h, {
                                            people: e.grandparents
                                        })
                                    }) : null]
                                }, e.key))
                            })]
                        });
                        break;
                    case "gallery":
                        if (!F.photos.length) return null;
                        r = (0, a.jsxs)("section", {
                            className: es.default.gallery,
                            children: [(0, a.jsx)("header", {
                                className: es.default.sectionHead,
                                children: (0, a.jsx)("h2", {
                                    children: P("galleryTitle")
                                })
                            }), (0, a.jsx)("div", {
                                className: es.default.photos,
                                children: [...F.photos].sort((e, a) => e.displayOrder - a.displayOrder).map(e => (0, a.jsxs)("figure", {
                                    children: [(0, a.jsx)("a", {
                                        href: e.url,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: (0, a.jsx)("img", {
                                            src: e.url,
                                            alt: e.caption || A("gallery.photoAlt"),
                                            width: 700,
                                            height: 850,
                                            loading: "lazy"
                                        })
                                    }), e.caption ? (0, a.jsx)("figcaption", {
                                        children: e.caption
                                    }) : null]
                                }, e.publicId || e.url))
                            })]
                        });
                        break;
                    case "rsvp":
                        if (!F.rsvpSettings.enabled) return null;
                        r = (0, a.jsx)("section", {
                            id: "riviera-rsvp",
                            className: es.default.rsvp,
                            children: (0, a.jsxs)("div", {
                                className: es.default.replyCard,
                                children: [(0, c.o)(F.rsvpSettings) ? null : (0, a.jsxs)("header", {
                                    className: es.default.sectionHead,
                                    children: [(0, a.jsx)("p", {
                                        className: es.default.eyebrow,
                                        children: A("rsvp.eyebrow")
                                    }), (0, a.jsx)("h2", {
                                        children: P("rsvpTitle")
                                    }), (0, a.jsx)("p", {
                                        children: F.rsvpSettings.deadline ? U("subheadingBy", {
                                            deadline: z.date(F.rsvpSettings.deadline)
                                        }) : U("subheadingPlain")
                                    })]
                                }), (0, a.jsx)(m.f, {
                                    slug: F.slug,
                                    events: em.map(e => ({
                                        id: e.id,
                                        name: e.name
                                    })),
                                    settings: F.rsvpSettings,
                                    theme: L,
                                    showHeader: !1,
                                    bare: !0
                                })]
                            })
                        });
                        break;
                    case "hashtag":
                        if (!(null == (l = F.hashtag) ? void 0 : l.tag.trim())) return null;
                        r = (0, a.jsxs)("section", {
                            className: es.default.hashtag,
                            "data-scene": !0,
                            children: [(0, a.jsx)(eu, {
                                coastal: !0
                            }), (0, a.jsx)(w.f, {
                                hashtag: F.hashtag,
                                theme: O,
                                variant: "panel"
                            })]
                        });
                        break;
                    case "special-request":
                        {
                            let e = (0, d.H)(F.specialRequest);
                            if (!e.length) return null;r = (0, a.jsxs)("section", {
                                className: es.default.letter,
                                "data-scene": !0,
                                children: [(0, a.jsx)("h2", {
                                    children: (null == (s = F.specialRequest) ? void 0 : s.title) || B("title")
                                }), (0, a.jsx)("p", {
                                    className: es.default.signature,
                                    children: e.join(" · ")
                                })]
                            });
                            break
                        }
                    case "gifts":
                        if (!(null == eo ? void 0 : eo.section)) return null;
                        r = (0, a.jsxs)("section", {
                            className: es.default.hashtag,
                            "data-scene": !0,
                            children: [(0, a.jsx)(eu, {
                                coastal: !0
                            }), (0, a.jsx)(n.f, {
                                theme: O,
                                variant: "panel"
                            })]
                        });
                        break;
                    case "footer":
                        r = (0, a.jsxs)("footer", {
                            className: es.default.footer,
                            "data-scene": !0,
                            children: [(0, a.jsx)(ec, {
                                variant: "blossom"
                            }), (0, a.jsxs)("div", {
                                className: es.default.closingCopy,
                                children: [(0, a.jsx)(eu, {}), (0, a.jsx)("p", {
                                    className: es.default.eyebrow,
                                    children: P("withLove")
                                }), (0, a.jsx)("h2", {
                                    "data-couple-name": !0,
                                    children: ef
                                }), (0, a.jsx)("p", {
                                    children: A("footer.message")
                                }), (0, a.jsx)(p.f, {
                                    url: S,
                                    title: ef,
                                    settings: F.shareSettings,
                                    theme: O
                                })]
                            }), (0, a.jsx)("img", {
                                src: R,
                                width: q,
                                height: M,
                                alt: "",
                                loading: "lazy"
                            })]
                        });
                        break;
                    default:
                        return null
                }
                return (0, a.jsx)(t.Fragment, {
                    children: r
                }, e.id)
            }), F.watermarkEnabled ? (0, a.jsx)("p", {
                id: "invite-watermark",
                className: es.default.watermark,
                children: (0, a.jsx)("a", {
                    href: "/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: (0, a.jsx)(x.LocalizedWatermarkText, {})
                })
            }) : null]
        })
    }], 115083)
}, 490257, e => {
    e.v({
        altar: "ECEfnW_altar",
        arrival: "ECEfnW_arrival",
        arrivalStage: "ECEfnW_arrivalStage",
        arrive: "ECEfnW_arrive",
        birds: "ECEfnW_birds",
        boat: "ECEfnW_boat",
        bob: "ECEfnW_bob",
        breeze: "ECEfnW_breeze",
        cardArrival: "ECEfnW_cardArrival",
        chapterNumber: "ECEfnW_chapterNumber",
        clock: "ECEfnW_clock",
        closingCopy: "ECEfnW_closingCopy",
        cloud: "ECEfnW_cloud",
        clouds: "ECEfnW_clouds",
        coast: "ECEfnW_coast",
        coastalLight: "ECEfnW_coastalLight",
        countdown: "ECEfnW_countdown",
        countdownArt: "ECEfnW_countdownArt",
        countdownCopy: "ECEfnW_countdownCopy",
        countdownDate: "ECEfnW_countdownDate",
        countdownLabel: "ECEfnW_countdownLabel",
        couple: "ECEfnW_couple",
        dateline: "ECEfnW_dateline",
        enter: "ECEfnW_enter",
        eveningStars: "ECEfnW_eveningStars",
        event: "ECEfnW_event",
        eventArt: "ECEfnW_eventArt",
        eventCard: "ECEfnW_eventCard",
        eventDate: "ECEfnW_eventDate",
        eventDescription: "ECEfnW_eventDescription",
        eventNumber: "ECEfnW_eventNumber",
        events: "ECEfnW_events",
        eyebrow: "ECEfnW_eyebrow",
        familyGrid: "ECEfnW_familyGrid",
        foliageLeft: "ECEfnW_foliageLeft",
        foliageRight: "ECEfnW_foliageRight",
        footer: "ECEfnW_footer",
        gallery: "ECEfnW_gallery",
        gate: "ECEfnW_gate",
        gateCopy: "ECEfnW_gateCopy",
        gateDate: "ECEfnW_gateDate",
        gateEyebrow: "ECEfnW_gateEyebrow",
        gateGuest: "ECEfnW_gateGuest",
        gateNames: "ECEfnW_gateNames",
        gatePlace: "ECEfnW_gatePlace",
        gateWorld: "ECEfnW_gateWorld",
        glint: "ECEfnW_glint",
        greeting: "ECEfnW_greeting",
        hashtag: "ECEfnW_hashtag",
        heroCopy: "ECEfnW_heroCopy",
        heroScene: "ECEfnW_heroScene",
        inkAppear: "ECEfnW_inkAppear",
        invitation: "ECEfnW_invitation",
        journalArrival: "ECEfnW_journalArrival",
        journalBreathe: "ECEfnW_journalBreathe",
        letter: "ECEfnW_letter",
        link: "ECEfnW_link",
        links: "ECEfnW_links",
        monogram: "ECEfnW_monogram",
        motionToggle: "ECEfnW_motionToggle",
        muted: "ECEfnW_muted",
        names: "ECEfnW_names",
        nightCoast: "ECEfnW_nightCoast",
        nightReveal: "ECEfnW_nightReveal",
        nightWater: "ECEfnW_nightWater",
        nightWords: "ECEfnW_nightWords",
        page: "ECEfnW_page",
        paintedArrival: "ECEfnW_paintedArrival",
        paperDetailEnd: "ECEfnW_paperDetailEnd",
        paperDetailStart: "ECEfnW_paperDetailStart",
        paperDetails: "ECEfnW_paperDetails",
        paperShellDrift: "ECEfnW_paperShellDrift",
        paperSprigSway: "ECEfnW_paperSprigSway",
        petalCrosswind: "ECEfnW_petalCrosswind",
        petalDescent: "ECEfnW_petalDescent",
        petalFlight: "ECEfnW_petalFlight",
        petalFlutter: "ECEfnW_petalFlutter",
        petalShape: "ECEfnW_petalShape",
        petalTumble: "ECEfnW_petalTumble",
        petals: "ECEfnW_petals",
        photos: "ECEfnW_photos",
        prose: "ECEfnW_prose",
        replyCard: "ECEfnW_replyCard",
        rsvp: "ECEfnW_rsvp",
        rule: "ECEfnW_rule",
        sail: "ECEfnW_sail",
        sailing: "ECEfnW_sailing",
        sceneUnfold: "ECEfnW_sceneUnfold",
        scrollHint: "ECEfnW_scrollHint",
        scrollNudge: "ECEfnW_scrollNudge",
        seaReflections: "ECEfnW_seaReflections",
        sectionHead: "ECEfnW_sectionHead",
        signature: "ECEfnW_signature",
        skyDeparture: "ECEfnW_skyDeparture",
        story: "ECEfnW_story",
        storyArt: "ECEfnW_storyArt",
        storyBeat: "ECEfnW_storyBeat",
        storyLetter: "ECEfnW_storyLetter",
        terrace: "ECEfnW_terrace",
        venue: "ECEfnW_venue",
        wake: "ECEfnW_wake",
        water: "ECEfnW_water",
        watermark: "ECEfnW_watermark",
        welcome: "ECEfnW_welcome",
        welcomeArrival: "ECEfnW_welcomeArrival",
        welcomeSeal: "ECEfnW_welcomeSeal",
        welcomeTitle: "ECEfnW_welcomeTitle"
    })
}, 428509, 458331, e => {
    "use strict";
    var a = e.i(395458),
        t = e.i(20403),
        l = e.i(541464);
    let s = "templateOptions",
        r = ["invocation", "verse", "emblem", "greeting", "welcome"],
        i = /^https:\/\/[^\s"'\\()]+$/,
        n = /^[a-z][a-z0-9-]{0,31}$/,
        o = a.z.string().transform(e => c(e).slice(0, 4).map(e => Array.from(e).slice(0, 90).join("").trim()).join("\n")),
        d = t.z.object({
            invocation: a.z.string().trim().max(60),
            verse: o,
            emblem: a.z.string().trim().max(2048).refine(e => "" === e || n.test(e) || i.test(e)),
            greeting: a.z.string().trim().max(60),
            welcome: a.z.string().trim().max(80)
        });

    function c(e) {
        return e.split(/\r?\n/).map(e => e.trim()).filter(Boolean)
    }

    function u(e) {
        let a = e.findIndex(e => "hero" === e.kind);
        return a >= 0 ? a : e.length > 0 ? 0 : -1
    }

    function h(e) {
        var a;
        let t = e ?? [],
            l = t[u(t)],
            i = null == (a = null == l ? void 0 : l.overrides) ? void 0 : a[s];
        if (!i || "object" != typeof i) return {};
        let n = {};
        for (let e of r) {
            let a = i[e];
            if (void 0 === a) continue;
            let t = d.shape[e].safeParse(a);
            t.success && (n[e] = t.data)
        }
        return n
    }
    let m = [{
            key: "ganesha",
            text: "॥ श्री गणेशाय नमः ॥"
        }, {
            key: "ram",
            text: "॥ जय श्री राम ॥"
        }, {
            key: "shiva",
            text: "॥ ॐ नमः शिवाय ॥"
        }, {
            key: "krishna",
            text: "॥ जय श्री कृष्ण ॥"
        }, {
            key: "devi",
            text: "॥ जय माता दी ॥"
        }, {
            key: "vivah",
            text: "॥ शुभ विवाह ॥"
        }, {
            key: "radha-krishna",
            text: "॥ श्री राधाकृष्णाभ्यां नमः ॥"
        }, {
            key: "bismillah",
            text: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ"
        }],
        p = [{
            key: "vakratunda",
            lines: ["वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ,", "निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥"]
        }, {
            key: "ramaya",
            lines: ["रामाय रामभद्राय रामचन्द्राय वेधसे ।", "रघुनाथाय नाथाय सीतायाः पतये नमः ॥"]
        }, {
            key: "mangalam",
            lines: ["मङ्गलं भगवान् विष्णुः मङ्गलं गरुडध्वजः ।", "मङ्गलं पुण्डरीकाक्षः मङ्गलायतनो हरिः ॥"]
        }, {
            key: "radha-pranam",
            lines: ["तप्तकाञ्चनगौराङ्गि राधे वृन्दावनेश्वरि ।", "वृषभानुसुते देवि प्रणमामि हरिप्रिये ॥"]
        }, {
            key: "vasudeva-sutam",
            lines: ["वसुदेवसुतं देवं कंसचाणूरमर्दनम् ।", "देवकीपरमानन्दं कृष्णं वन्दे जगद्गुरुम् ॥"]
        }, {
            key: "ar-rum-21",
            lines: ["وَمِنْ ءَايَٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًۭا", "لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةًۭ وَرَحْمَةً ۚ", "إِنَّ فِى ذَٰلِكَ لَءَايَٰتٍۢ لِّقَوْمٍۢ يَتَفَكَّرُونَ"]
        }, {
            key: "an-naba-8",
            lines: ["وَخَلَقْنَٰكُمْ أَزْوَٰجًۭا"]
        }];
    e.s(["T", 0, 60, "S", 0, m, "$", 0, i, "U", 0, 4, "O", 0, p, "r", 0, 80, "e", 0, h, "V", 0, c, "x", 0, function(e) {
        var a, t;
        let l = e ?? [],
            i = null == (a = null == (t = l[u(l)]) ? void 0 : t.overrides) ? void 0 : a[s];
        if (!i || "object" != typeof i) return {};
        let n = {};
        for (let e of r) {
            let a = i[e];
            "string" == typeof a && (n[e] = a)
        }
        return n
    }, "A", 0, function(e, a, t) {
        let r = e.length > 0 ? [...e] : [...l.n],
            i = u(r),
            n = r[i],
            o = { ...n.overrides ?? {}
            },
            d = o[s],
            c = d && "object" == typeof d ? { ...d
            } : {};
        void 0 === t ? delete c[a] : c[a] = t, Object.keys(c).length > 0 ? o[s] = c : delete o[s];
        let h = { ...n
        };
        return Object.keys(o).length > 0 ? h.overrides = o : delete h.overrides, r[i] = h, r
    }], 458331);
    var f = e.i(949689);
    let g = {
        ganesha: {
            kind: "image",
            src: f.F.src,
            aspect: f.F.aspect
        },
        om: {
            kind: "glyph",
            text: "ॐ"
        },
        shri: {
            kind: "glyph",
            text: "श्री"
        },
        lotus: {
            kind: "ornament",
            name: "lotus"
        },
        bansuri: {
            kind: "ornament",
            name: "bansuri"
        },
        morpankh: {
            kind: "ornament",
            name: "morpankh"
        },
        hilal: {
            kind: "ornament",
            name: "hilal"
        },
        gul: {
            kind: "ornament",
            name: "gul"
        }
    };
    Object.keys(g);
    let y = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
    e.s(["K", 0, {
        fields: ["invocation", "emblem", "verse"],
        emblems: ["hilal", "gul"],
        invocations: ["bismillah"],
        verses: ["ar-rum-21", "an-naba-8"],
        defaults: {
            invocation: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
            verse: ["وَمِنْ ءَايَٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًۭا", "لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةًۭ وَرَحْمَةً ۚ", "إِنَّ فِى ذَٰلِكَ لَءَايَٰتٍۢ لِّقَوْمٍۢ يَتَفَكَّرُونَ"],
            emblem: "hilal",
            greeting: ""
        }
    }, "I", 0, g, "N", 0, {
        fields: ["greeting", "welcome", "emblem", "invocation"],
        emblems: ["lotus", "ganesha", "om", "shri"],
        defaults: {
            invocation: "॥ शुभ विवाह ॥",
            verse: [],
            emblem: "lotus",
            greeting: "॥ ॐ नमः शिवाय ॥"
        }
    }, "j", 0, {
        fields: ["invocation", "emblem", "verse"],
        emblems: ["ganesha", "om", "shri"],
        defaults: {
            invocation: "॥ श्री गणेशाय नमः ॥",
            verse: ["वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ,", "निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥"],
            emblem: "ganesha",
            greeting: ""
        }
    }, "e", 0, {
        fields: ["invocation", "emblem", "verse"],
        emblems: ["bansuri", "morpankh", "lotus", "om", "shri"],
        defaults: {
            invocation: "॥ श्री राधाकृष्णाभ्यां नमः ॥",
            verse: ["तप्तकाञ्चनगौराङ्गि राधे वृन्दावनेश्वरि ।", "वृषभानुसुते देवि प्रणमामि हरिप्रिये ॥"],
            emblem: "bansuri",
            greeting: ""
        }
    }, "q", 0, function(e) {
        return e.invocations ? m.filter(a => e.invocations.includes(a.key)) : m.filter(e => !y.test(e.text))
    }, "B", 0, function(e) {
        return y.test(e) ? {
            lang: "ar",
            dir: "rtl"
        } : {
            lang: "hi"
        }
    }, "T", 0, function(e, a) {
        let t = h(a),
            l = t.invocation ?? e.defaults.invocation,
            s = t.greeting ?? e.defaults.greeting;
        return {
            invocation: l || null,
            verse: void 0 === t.verse ? [...e.defaults.verse] : c(t.verse),
            emblem: function(e, a) {
                if ("" === e) return null;
                if (e && i.test(e)) return {
                    kind: "upload",
                    src: e
                };
                let t = e && a.emblems.includes(e) ? e : a.defaults.emblem;
                return { ...g[t],
                    key: t
                }
            }(t.emblem, e),
            greeting: s || null,
            welcome: void 0 === t.welcome ? void 0 : t.welcome || null
        }
    }, "V", 0, function(e) {
        return e.verses ? p.filter(a => e.verses.includes(a.key)) : p.filter(e => !y.test(e.lines.join(" ")))
    }], 428509)
}, 964766, e => {
    "use strict";
    var a = e.i(729176),
        t = e.i(244835),
        l = e.i(301187),
        s = e.i(380336),
        r = e.i(147196),
        i = e.i(477201),
        n = e.i(19269),
        o = e.i(541464),
        d = e.i(600024),
        c = e.i(149504),
        u = e.i(428509),
        h = e.i(565617),
        m = e.i(764351),
        p = e.i(423088),
        f = e.i(506563),
        g = e.i(738371),
        y = e.i(575198),
        v = e.i(158105),
        x = e.i(664857),
        j = e.i(627655),
        b = e.i(643036),
        w = e.i(48407),
        N = e.i(692126),
        k = e.i(396243),
        _ = e.i(366471),
        $ = e.i(340793),
        W = e.i(301444),
        C = e.i(132680);
    let F = {
            WEDDING: "wedding",
            ENGAGEMENT: "engagement",
            WELCOME_PARTY: "party",
            REHEARSAL_DINNER: "feast",
            JANEU: "janeu",
            HALDI: "haldi",
            MEHNDI: "mehndi",
            SANGEET: "sangeet",
            COCKTAIL: "party",
            SEHRABANDI: "sehrabandi",
            BARAAT: "baraat",
            BHAAT: "bhaat",
            MAYAARA: "bhaat",
            BAHIRANA_SAHIB: "bahiranaSahib",
            SAATH_SONH: "saathSonh",
            RECEPTION: "reception",
            NIKAH: "pavilion",
            WALIMA: "reception",
            ANAND_KARAJ: "pavilion",
            CHURCH_CEREMONY: "pavilion",
            CIVIL_CEREMONY: "pavilion",
            TEA_CEREMONY: "feast",
            BLESSING: "engagement",
            AFTER_PARTY: "party",
            FAREWELL_BRUNCH: "feast",
            CUSTOM: "ghat"
        },
        L = [
            [/bahirana|bahrana|baharana|behrana|bherana|bhairana|berana|jhulelal|बहिराणा|बहराणा|बहिराना|बहराना|झूलेलाल/i, "bahiranaSahib"],
            [/saath\s*sonh|sath\s*sonh|saath\s*sohn|sat\s*suhag|dev\s*bithana|ghari\s*puja|साथ\s*सोंह|सत\s*सुहाग/i, "saathSonh"],
            [/janeu|janeyu|janoi|upanayan|upnayan|yagyopavit|yajnopavit|sacred thread|thread ceremony|जनेऊ|उपनयन|यज्ञोपवीत/i, "janeu"],
            [/sehra|sehera|सेहरा/i, "sehrabandi"],
            [/\bbhaat\b|\bbhat\b|mayra|mayara|mameru|mosaalu|भात|मायरा/i, "bhaat"],
            [/haldi|haldhi|ubtan|pithi|हल्दी|उबटन/i, "haldi"],
            [/mehndi|mehendi|mehandi|henna|मेहंदी|मेहँदी/i, "mehndi"],
            [/holi|होली/i, "holi"],
            [/tilak|roka|sagai|engagement|\bring\b|shagun|blessing|सगाई|रोका|तिलक|शगुन/i, "engagement"],
            [/baraat|barat|nikasi|ghudchadi|बारात|घुड़चढ़ी/i, "baraat"],
            [/sangeet|sangit|garba|dandiya|raas|संगीत|गरबा|रास/i, "sangeet"],
            [/reception|walima|valima|रिसेप्शन|स्वागत/i, "reception"],
            [/cocktail|party|soir[ée]e|पार्टी/i, "party"],
            [/dinner|brunch|lunch|breakfast|feast|bhog|\btea\b|भोज|भोग/i, "feast"],
            [/nikah|nikaah|anand karaj|church|chapel|civil|registry|निकाह|आनंद कारज/i, "pavilion"],
            [/vivah|vivaah|wedding|shaadi|shadi|phere|pheras|kanyadaan|varmala|jaimala|lagna|विवाह|शादी|फेरे/i, "wedding"]
        ];

    function S(e) {
        let a = e.type ?? "CUSTOM";
        if ("CUSTOM" !== a) return F[a];
        let t = e.name ?? "";
        for (let [e, a] of L)
            if (e.test(t)) return a;
        return F.CUSTOM
    }
    let T = new Set(["wedding", "sangeet", "baraat", "reception", "sehrabandi", "party", "pavilion", "ghat", "bahiranaSahib"]);

    function O(e) {
        var a;
        let t = null == (a = e.timezone) ? void 0 : a.trim();
        if (t) {
            let a = (0, C.z)(e.date, e.startTime, t);
            if (a && !Number.isNaN(a.getTime())) return a
        }
        return (0, W.O)(e.date, e.startTime)
    }

    function R(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return (0, W.P)(e, O, a)
    }
    let q = $.K,
        M = e => String(e).padStart(2, "0"),
        E = e => e.replace(/[\\,;]/g, "\\$&").replace(/\r?\n/g, "\\n"),
        D = e => `${e.getUTCFullYear()}${M(e.getUTCMonth()+1)}${M(e.getUTCDate())}T${M(e.getUTCHours())}${M(e.getUTCMinutes())}00Z`,
        H = e => `${e.getFullYear()}${M(e.getMonth()+1)}${M(e.getDate())}T${M(e.getHours())}${M(e.getMinutes())}00`;

    function A(e, a) {
        let t = [];
        for (let r of e) {
            var l, s;
            let e = O(r);
            if (!e) continue;
            let i = function(e, a) {
                    var t, l;
                    if (!(null == (t = e.endTime) ? void 0 : t.trim())) return new Date(a.getTime() + 72e5);
                    let s = null == (l = e.timezone) ? void 0 : l.trim(),
                        r = s ? (0, C.z)(e.date, e.endTime, s) : (0, W.O)(e.date, e.endTime);
                    return !r || Number.isNaN(r.getTime()) ? new Date(a.getTime() + 72e5) : r.getTime() > a.getTime() ? r : new Date(r.getTime() + 864e5)
                }(r, e),
                n = (null == (l = r.timezone) ? void 0 : l.trim()) ? D : H,
                o = (0, $.f)(r);
            t.push(["BEGIN:VEVENT", `UID:${r.id}@vrindavan-raas`, `DTSTAMP:${D(e)}`, `DTSTART:${n(e)}`, `DTEND:${n(i)}`, `SUMMARY:${E((null==(s=r.name)?void 0:s.trim())||a)}`, o ? `LOCATION:${E(o)}` : "", r.description ? `DESCRIPTION:${E(r.description)}` : "", "END:VEVENT"].filter(Boolean).join("\r\n"))
        }
        if (0 === t.length) return null;
        let r = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Wedding Card Maker//Vrindavan Raas//EN", ...t, "END:VCALENDAR"].join("\r\n");
        return `data:text/calendar;charset=utf-8,${encodeURIComponent(r)}`
    }

    function P(e) {
        let a = e.normalize("NFKD").replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-").toLowerCase();
        return `${a||"wedding"}.ics`
    }

    function I(e) {
        return (null == e ? void 0 : e.enabled) ? (e.content ?? "").split(/\n\s*\n/).map(e => e.replace(/^\s+|\s+$/g, "")).filter(Boolean) : []
    }

    function B(e) {
        return e && /[\u0900-\u097F]/.test(e) ? "hi" : void 0
    }

    function U(e) {
        let a = (null == e ? void 0 : e.trim()) ?? "";
        return /^https:\/\/[^\s"'\\()]+$/.test(a) ? a : ""
    }

    function z(e, a) {
        return Math.min(1, a / Math.max(1, ...e.map(e => [...e].length)))
    }

    function G(e, a, t) {
        let l = Math.imul(977 * e + 131 * a + 7919 * t + 1, 0x9e3779b1);
        return l ^= l >>> 15, l = Math.imul(l, 0x85ebca77), ((l ^= l >>> 13) >>> 0) % 1e3 / 1e3
    }
    let J = (e, a, t) => +(e + (a - e) * t).toFixed(2),
        V = "/layouts/vrindavan-raas",
        K = {
            "gate-silk": {
                w: 720,
                h: 720
            },
            "zari-band": {
                w: 1112,
                h: 96
            },
            "gate-crest": {
                w: 720,
                h: 718
            },
            morpankh: {
                w: 363,
                h: 900
            },
            medallion: {
                w: 560,
                h: 556
            },
            "ribbon-knot": {
                w: 1e3,
                h: 667
            },
            "ribbon-tail-l": {
                w: 500,
                h: 667
            },
            "ribbon-tail-r": {
                w: 500,
                h: 667
            },
            "petal-jasmine": {
                w: 96,
                h: 91
            },
            "petal-bud": {
                w: 84,
                h: 96
            },
            "petal-marigold": {
                w: 96,
                h: 80
            },
            "petal-genda": {
                w: 96,
                h: 91
            },
            "petal-rose": {
                w: 96,
                h: 89
            },
            "petal-lotus": {
                w: 72,
                h: 96
            },
            "petal-kadamba": {
                w: 96,
                h: 91
            },
            "petal-tulsi": {
                w: 56,
                h: 96
            },
            moon: {
                w: 640,
                h: 644
            },
            "hills-p": {
                w: 860,
                h: 1290
            },
            "hills-w": {
                w: 1536,
                h: 1024
            },
            "river-p": {
                w: 860,
                h: 1290
            },
            "river-w": {
                w: 1536,
                h: 1024
            },
            "bank-p": {
                w: 1e3,
                h: 1e3
            },
            "bank-w": {
                w: 1536,
                h: 1024
            },
            boat: {
                w: 420,
                h: 281
            },
            kadamba: {
                w: 673,
                h: 1e3
            },
            jhoola: {
                w: 406,
                h: 760
            },
            toran: {
                w: 1180,
                h: 260
            },
            "cloud-a": {
                w: 1e3,
                h: 176
            },
            "cloud-b": {
                w: 700,
                h: 308
            },
            "pichwai-border": {
                w: 600,
                h: 600
            },
            rod: {
                w: 1200,
                h: 620
            },
            paper: {
                w: 840,
                h: 840
            },
            "brass-lamp": {
                w: 300,
                h: 820
            },
            diya: {
                w: 200,
                h: 186
            },
            tulsi: {
                w: 426,
                h: 760
            },
            "events/window-frame": {
                w: 820,
                h: 1230
            },
            "events/window-fore": {
                w: 820,
                h: 1230
            },
            "events/crown": {
                w: 760,
                h: 360
            },
            "card-border": {
                w: 480,
                h: 480
            },
            "story-night-p": {
                w: 1024,
                h: 1536
            },
            "story-night-w": {
                w: 1536,
                h: 1024
            },
            "lotus-leaves": {
                w: 1400,
                h: 451
            },
            "petal-outer": {
                w: 380,
                h: 640
            },
            "petal-middle": {
                w: 318,
                h: 541
            },
            "petal-inner": {
                w: 269,
                h: 426
            },
            "lotus-heart": {
                w: 420,
                h: 283
            },
            finial: {
                w: 160,
                h: 170
            },
            bridge: {
                w: 720,
                h: 266
            },
            "closing-p": {
                w: 1024,
                h: 1536
            },
            "closing-w": {
                w: 1536,
                h: 1024
            }
        },
        Y = e => `${V}/${e}.webp`,
        Z = {
            p: {
                line: .6109,
                dip: .5698,
                fill: "#4e4f7e"
            },
            w: {
                line: .6357,
                dip: .5791,
                fill: "#484773"
            }
        },
        Q = {
            p: {
                line: .6085,
                dip: .5643,
                fill: "#131d44"
            },
            w: {
                line: .5586,
                dip: .5498,
                fill: "#232f59"
            }
        },
        X = {
            p: {
                line: .493,
                dip: .516,
                fill: "#555f2c"
            },
            w: {
                line: .4482,
                dip: .4404,
                fill: "#4a531d"
            }
        },
        ee = {
            p: {
                hillsY: .57,
                hillsTo: -.04,
                riverY: .63,
                riverTo: -.07,
                namesTop: .18,
                namesH: .27,
                namesSink: .58,
                sinkFrom: .22,
                sinkTo: .88,
                moonY: .55,
                moonTo: -.36
            },
            w: {
                hillsY: .58,
                hillsTo: -.05,
                riverY: .64,
                riverTo: -.08,
                namesTop: .16,
                namesH: .33,
                namesSink: .56,
                sinkFrom: .22,
                sinkTo: .88,
                moonY: .56,
                moonTo: -.38
            }
        },
        ea = [{
            art: "cloud-a",
            y: .12,
            x: 6,
            w: 92,
            o: .9,
            d: 110,
            t: .3
        }, {
            art: "cloud-b",
            y: .27,
            x: 58,
            w: 46,
            o: .75,
            d: 80,
            t: .75
        }, {
            art: "cloud-b",
            y: .34,
            x: -8,
            w: 34,
            o: .55,
            d: 70,
            t: .25
        }, {
            art: "cloud-a",
            y: .41,
            x: 40,
            w: 70,
            o: .7,
            d: 140,
            t: .7
        }],
        et = [{
            y: .4,
            d: 24,
            t: .15,
            s: 15,
            birds: [
                [0, 0, 0],
                [1.9, -.9, .18],
                [3.8, -1.6, .36],
                [1.7, 1.1, .27],
                [3.5, 2, .09]
            ]
        }, {
            y: .15,
            d: 32,
            t: .62,
            s: 10,
            birds: [
                [0, 0, .1],
                [2, .8, .3],
                [4.1, .3, .2],
                [6, 1.2, 0]
            ]
        }],
        el = {
            aspect: 406 / 760,
            x: .73,
            top: .37,
            h: .46
        },
        es = {
            pichwai: {
                src: Y("pichwai-border"),
                slice: 96
            },
            card: {
                src: Y("card-border"),
                slice: 58
            }
        },
        er = {
            src: Y("events/crown"),
            aspect: 760 / 360,
            base: .7594
        },
        ei = ["petal-marigold", "petal-genda", "petal-jasmine"],
        en = {
            wedding: {
                embers: [44, 56],
                glow: [50, 71],
                petals: ei
            },
            haldi: {
                petals: ["petal-marigold", "petal-genda", "petal-marigold"]
            },
            mehndi: {
                petals: ["petal-rose", "petal-tulsi", "petal-jasmine"]
            },
            sangeet: {
                sparks: !0,
                fireflies: !0
            },
            baraat: {
                sparks: !0,
                petals: ei
            },
            reception: {
                embers: [14, 86]
            },
            engagement: {
                petals: ["petal-rose", "petal-lotus", "petal-jasmine"]
            },
            party: {
                sparks: !0
            },
            feast: {
                petals: ei
            },
            bhaat: {
                petals: ei
            },
            janeu: {
                petals: ["petal-jasmine", "petal-marigold", "petal-tulsi"]
            },
            sehrabandi: {
                petals: ["petal-jasmine", "petal-bud", "petal-genda"],
                sparks: !0
            },
            pavilion: {
                petals: ["petal-jasmine", "petal-rose", "petal-bud"]
            },
            ghat: {
                embers: [16, 84]
            },
            holi: {},
            bahiranaSahib: {
                petals: ["petal-marigold", "petal-rose", "petal-genda"],
                sparks: !0
            },
            saathSonh: {
                petals: ["petal-rose", "petal-marigold", "petal-jasmine"]
            }
        },
        eo = [{
            petal: "petal-inner",
            count: 6,
            open: 30,
            h: .5
        }, {
            petal: "petal-middle",
            count: 8,
            open: 56,
            h: .68
        }, {
            petal: "petal-outer",
            count: 8,
            open: 84,
            h: .86
        }],
        ed = "#f2b51c",
        ec = [50, 0],
        eu = [50, 100],
        eh = {
            wedding: [],
            haldi: [{
                kind: "cut",
                x: 37,
                y: 47,
                w: 10,
                h: 9,
                move: "apply",
                a: 3,
                d: 2.2
            }, {
                kind: "cut",
                x: 59,
                y: 51,
                w: 10,
                h: 9,
                move: "apply",
                a: 3,
                d: 2.4,
                t: 1.1
            }, {
                kind: "dab",
                x: 40,
                y: 47,
                c: ed
            }, {
                kind: "dab",
                x: 57,
                y: 50,
                c: ed,
                t: 1.1
            }, {
                kind: "cut",
                x: 24,
                y: 34,
                w: 26,
                h: 30,
                move: "sway",
                a: .9,
                d: 4.6,
                o: ec
            }, {
                kind: "shimmer",
                x: 78,
                y: 77,
                w: 22,
                h: 4
            }],
            mehndi: [],
            sangeet: [{
                kind: "moon",
                x: 77,
                y: 20,
                s: 14
            }, {
                kind: "cut",
                x: 38,
                y: 55,
                w: 24,
                h: 22,
                move: "sway",
                a: 2.6,
                d: 1.6,
                o: eu
            }, {
                kind: "cut",
                x: 59,
                y: 52,
                w: 20,
                h: 20,
                move: "sway",
                a: 2.6,
                d: 1.6,
                t: .8,
                o: eu
            }, {
                kind: "cut",
                x: 30,
                y: 46,
                w: 16,
                h: 16,
                move: "sway",
                a: 2.4,
                d: 1.6,
                t: .4,
                o: eu
            }, {
                kind: "cut",
                x: 88,
                y: 56,
                w: 20,
                h: 18,
                move: "sway",
                a: 2.4,
                d: 1.6,
                t: 1.2,
                o: eu
            }, {
                kind: "cut",
                x: 20,
                y: 67,
                w: 20,
                h: 18,
                move: "sway",
                a: 2.4,
                d: 1.6,
                t: .2,
                o: eu
            }, {
                kind: "cut",
                x: 82,
                y: 68,
                w: 24,
                h: 18,
                move: "sway",
                a: 2.4,
                d: 1.6,
                t: 1,
                o: eu
            }, {
                kind: "cut",
                x: 28,
                y: 84,
                w: 14,
                h: 12,
                move: "bob",
                a: 1.5,
                d: .5
            }, {
                kind: "cut",
                x: 63,
                y: 86,
                w: 12,
                h: 10,
                move: "bob",
                a: 1.2,
                d: .6,
                t: .2
            }, {
                kind: "cut",
                x: 44,
                y: 27,
                w: 5,
                h: 6,
                move: "sway",
                a: 4,
                d: 2.8,
                o: ec
            }, {
                kind: "cut",
                x: 88,
                y: 36,
                w: 5,
                h: 6,
                move: "sway",
                a: 4,
                d: 3.1,
                t: .6,
                o: ec
            }],
            baraat: [{
                kind: "moon",
                x: 81,
                y: 13,
                s: 10
            }, {
                kind: "cut",
                x: 13,
                y: 81,
                w: 18,
                h: 20,
                move: "bob",
                a: 2,
                d: .55
            }, {
                kind: "cut",
                x: 86,
                y: 78,
                w: 18,
                h: 22,
                move: "bob",
                a: 2,
                d: .55,
                t: .25
            }, {
                kind: "cut",
                x: 40,
                y: 80,
                w: 18,
                h: 22,
                move: "sway",
                a: 2,
                d: 1.4,
                o: eu
            }, {
                kind: "cut",
                x: 62,
                y: 82,
                w: 18,
                h: 20,
                move: "sway",
                a: 2,
                d: 1.4,
                t: .7,
                o: eu
            }, {
                kind: "cut",
                x: 60,
                y: 22,
                w: 50,
                h: 9,
                move: "sway",
                a: .6,
                d: 4.8,
                o: ec
            }],
            reception: [{
                kind: "moon",
                x: 89,
                y: 21,
                s: 11
            }, {
                kind: "shimmer",
                x: 88,
                y: 50,
                w: 22,
                h: 10
            }, ...[40, 50, 60, 70, 80, 90].map((e, a) => ({
                kind: "flame",
                x: e,
                y: 61,
                s: 4,
                t: .3 * a
            })), {
                kind: "cut",
                x: 50,
                y: 18,
                w: 50,
                h: 10,
                move: "sway",
                a: .6,
                d: 5,
                o: ec
            }],
            engagement: [{
                kind: "cut",
                x: 12,
                y: 87,
                w: 14,
                h: 12,
                move: "sway",
                a: 2,
                d: 3,
                o: eu
            }, {
                kind: "cut",
                x: 88,
                y: 84,
                w: 14,
                h: 14,
                move: "sway",
                a: 2,
                d: 3.4,
                t: .9,
                o: eu
            }, {
                kind: "cut",
                x: 8,
                y: 22,
                w: 10,
                h: 20,
                move: "sway",
                a: 1.4,
                d: 4,
                o: ec
            }, {
                kind: "cut",
                x: 86,
                y: 22,
                w: 10,
                h: 20,
                move: "sway",
                a: 1.4,
                d: 4.4,
                t: .5,
                o: ec
            }],
            party: [{
                kind: "moon",
                x: 85,
                y: 14,
                s: 10
            }, ...[16, 34, 52, 71, 86].map((e, a) => ({
                kind: "cut",
                x: e,
                y: 32,
                w: 6,
                h: 8,
                move: "sway",
                a: 4,
                d: 2.6 + .3 * a,
                t: .4 * a,
                o: ec
            })), ...[16, 34, 52, 71, 86].map((e, a) => ({
                kind: "flame",
                x: e,
                y: 34,
                s: 6,
                t: .35 * a
            }))],
            feast: [{
                kind: "steam",
                x: 44,
                y: 37
            }, {
                kind: "steam",
                x: 54,
                y: 47,
                t: 1.2
            }, {
                kind: "steam",
                x: 65,
                y: 57,
                t: .6
            }, {
                kind: "steam",
                x: 75,
                y: 67,
                t: 1.8
            }, {
                kind: "cut",
                x: 82,
                y: 43,
                w: 8,
                h: 7,
                move: "bob",
                a: 1.5,
                d: 2.2
            }, {
                kind: "cut",
                x: 94,
                y: 28,
                w: 12,
                h: 18,
                move: "sway",
                a: 2,
                d: 4,
                o: eu
            }, {
                kind: "cut",
                x: 22,
                y: 26,
                w: 26,
                h: 16,
                move: "sway",
                a: .8,
                d: 4.6,
                o: ec
            }],
            bhaat: [{
                kind: "cut",
                x: 82,
                y: 58,
                w: 18,
                h: 30,
                move: "sway",
                a: .6,
                d: 4.4,
                o: eu
            }, {
                kind: "cut",
                x: 66,
                y: 22,
                w: 30,
                h: 14,
                move: "sway",
                a: .7,
                d: 4.6,
                o: ec
            }],
            janeu: [{
                kind: "flame",
                x: 65,
                y: 56,
                s: 18
            }, {
                kind: "steam",
                x: 65,
                y: 48
            }, {
                kind: "steam",
                x: 66,
                y: 46,
                t: 1.6
            }, {
                kind: "cut",
                x: 32,
                y: 22,
                w: 56,
                h: 30,
                move: "sway",
                a: .4,
                d: 5.5,
                o: ec
            }, {
                kind: "cut",
                x: 80,
                y: 57,
                w: 10,
                h: 10,
                move: "bob",
                a: 1.5,
                d: 2.8
            }],
            sehrabandi: [{
                kind: "moon",
                x: 89,
                y: 23,
                s: 6
            }, {
                kind: "cut",
                x: 52,
                y: 41,
                w: 16,
                h: 14,
                move: "sway",
                a: 2,
                d: 2.8,
                o: ec
            }, {
                kind: "cut",
                x: 41,
                y: 36,
                w: 8,
                h: 8,
                move: "apply",
                a: 2,
                d: 2.4
            }, {
                kind: "cut",
                x: 63,
                y: 37,
                w: 8,
                h: 8,
                move: "apply",
                a: 2,
                d: 2.6,
                t: 1
            }, {
                kind: "flame",
                x: 58,
                y: 78,
                s: 7
            }, {
                kind: "flame",
                x: 96,
                y: 44,
                s: 6,
                t: .4
            }, {
                kind: "flame",
                x: 84,
                y: 48,
                s: 5,
                t: .8
            }, {
                kind: "flame",
                x: 72,
                y: 92,
                s: 5,
                t: .2
            }],
            pavilion: [{
                kind: "moon",
                x: 79,
                y: 20,
                s: 13
            }, {
                kind: "cut",
                x: 50,
                y: 28,
                w: 64,
                h: 10,
                move: "sway",
                a: .5,
                d: 5.2,
                o: ec
            }, {
                kind: "shimmer",
                x: 50,
                y: 53,
                w: 70,
                h: 8
            }, ...[
                [8, 72],
                [92, 75],
                [30, 78],
                [70, 78]
            ].map((e, a) => {
                let [t, l] = e;
                return {
                    kind: "flame",
                    x: t,
                    y: l,
                    s: 4,
                    t: .3 * a
                }
            })],
            ghat: [{
                kind: "moon",
                x: 74,
                y: 22,
                s: 12
            }, {
                kind: "shimmer",
                x: 60,
                y: 50,
                w: 60,
                h: 8
            }, ...[
                [31, 54],
                [65, 50],
                [73, 49],
                [85, 54],
                [26, 61],
                [66, 60]
            ].map((e, a) => {
                let [t, l] = e;
                return {
                    kind: "flame",
                    x: t,
                    y: l,
                    s: 4,
                    t: .25 * a
                }
            })],
            holi: [],
            bahiranaSahib: [],
            saathSonh: []
        },
        em = {
            baraat: [{
                name: "elephant",
                x: 11.33,
                y: 37.63,
                w: 35.25,
                h: 29.1,
                move: "amble"
            }, {
                name: "horse",
                x: 48.63,
                y: 34.18,
                w: 28.71,
                h: 35.09,
                move: "ride",
                t: .4
            }],
            reception: [{
                name: "couple",
                x: 27.64,
                y: 39.06,
                w: 51.07,
                h: 50.13,
                move: "sway"
            }],
            engagement: [{
                name: "bride",
                x: 2.64,
                y: 36.33,
                w: 47.75,
                h: 43.95,
                move: "lean",
                dir: 1
            }, {
                name: "groom",
                x: 47.66,
                y: 31.9,
                w: 35.94,
                h: 48.37,
                move: "lean",
                dir: -1,
                t: .25
            }],
            pavilion: [{
                name: "couple",
                x: 35.64,
                y: 43.62,
                w: 32.71,
                h: 40.62,
                move: "sway"
            }],
            ghat: [{
                name: "priest",
                x: 35.64,
                y: 36.26,
                w: 21,
                h: 25.98,
                move: "aarti",
                glow: [62, 24]
            }],
            janeu: [{
                name: "father",
                x: 0,
                y: 49.8,
                w: 33.4,
                h: 33.46,
                move: "lean",
                dir: 1
            }],
            party: [{
                name: "musician",
                x: 0,
                y: 54.23,
                w: 37.4,
                h: 32.49,
                move: "play"
            }],
            bhaat: [{
                name: "aunt",
                x: 5.57,
                y: 43.49,
                w: 30.86,
                h: 54.75,
                move: "step"
            }, {
                name: "uncle",
                x: 31.64,
                y: 40.95,
                w: 34.77,
                h: 45.31,
                move: "step",
                t: .5
            }]
        };

    function ep(e) {
        let a = e >>> 0;
        return () => ((a = Math.imul(a ^ a >>> 15, 0x85ebca77) + 0x6d2b79f5 >>> 0) >>> 8) / 0x1000000
    }
    let ef = (0, t.forwardRef)(function(e, l) {
        let {
            className: s,
            color: r,
            count: i,
            seed: n = 11
        } = e, o = (0, t.useRef)(null), d = (0, t.useRef)([]), c = (0, t.useRef)(() => void 0), u = (0, t.useRef)(!0), h = (0, t.useRef)(!1);
        return (0, t.useImperativeHandle)(l, () => ({
            burst(e, a, t, l) {
                if (!h.current) return;
                let s = o.current;
                if (!s) return;
                let r = ep(65535 & Date.now()),
                    i = s.width,
                    n = s.height,
                    m = u.current ? t.phone : t.desktop;
                for (let t = 0; t < m; t++) {
                    let t = r() * Math.PI * 2,
                        s = (.6 + 2.2 * r()) * (i / 900);
                    d.current.push({
                        x: e * i,
                        y: a * n,
                        vx: Math.cos(t) * s,
                        vy: Math.sin(t) * s - .6,
                        r: (1.2 + 2.4 * r()) * (i / 900) + .6,
                        phase: 6.28 * r(),
                        life: 1,
                        burst: !0,
                        color: l
                    })
                }
                c.current()
            }
        })), (0, t.useEffect)(() => {
            var e;
            let a = o.current;
            if (!a) return;
            let t = navigator;
            if (h.current = (t.hardwareConcurrency || 8) > 4 && !(null == (e = t.connection) ? void 0 : e.saveData), !h.current) {
                a.hidden = !0;
                return
            }
            let l = a.getContext("2d");
            if (!l) return;
            let s = 0,
                m = !1,
                p = !1,
                f = () => {
                    let e = Math.min(1.5, window.devicePixelRatio || 1);
                    a.width = Math.max(1, Math.round(a.clientWidth * e)), a.height = Math.max(1, Math.round(a.clientHeight * e)), u.current = a.clientWidth < 600;
                    let t = ep(n),
                        l = u.current ? i.phone : i.desktop;
                    d.current = d.current.filter(e => e.burst);
                    for (let s = 0; s < l; s++) d.current.push({
                        x: t() * a.width,
                        y: (.3 + .65 * t()) * a.height,
                        vx: (t() - .5) * .35,
                        vy: (t() - .5) * .25,
                        r: (1 + 1.6 * t()) * e,
                        phase: 6.28 * t(),
                        life: 1,
                        burst: !1
                    })
                },
                g = e => {
                    l.clearRect(0, 0, a.width, a.height);
                    let t = d.current;
                    for (let s = t.length - 1; s >= 0; s--) {
                        let i = t[s];
                        if (i.burst) {
                            if (i.x += i.vx, i.y += i.vy, i.vx *= .985, i.vy = .985 * i.vy + .012, i.life -= .0085, i.life <= 0) {
                                t.splice(s, 1);
                                continue
                            }
                        } else i.x += i.vx + .22 * Math.sin(e / 1700 + i.phase), i.y += i.vy + .16 * Math.cos(e / 2100 + i.phase), i.x < 0 && (i.x += a.width), i.x > a.width && (i.x -= a.width), i.y < .2 * a.height && (i.vy = Math.abs(i.vy)), i.y > a.height && (i.vy = -Math.abs(i.vy));
                        let n = i.burst ? i.life : .35 + .65 * Math.max(0, Math.sin(e / 900 + i.phase)),
                            o = l.createRadialGradient(i.x, i.y, 0, i.x, i.y, 4 * i.r);
                        l.globalAlpha = n, o.addColorStop(0, i.color ?? r), o.addColorStop(1, "rgba(0,0,0,0)"), l.fillStyle = o, l.beginPath(), l.arc(i.x, i.y, 4 * i.r, 0, 2 * Math.PI), l.fill()
                    }
                    l.globalAlpha = 1, s = requestAnimationFrame(g)
                },
                y = () => {
                    !m && p && (m = !0, s = requestAnimationFrame(g))
                },
                v = () => {
                    m = !1, cancelAnimationFrame(s)
                };
            c.current = y, f();
            let x = new ResizeObserver(f);
            x.observe(a);
            let j = new IntersectionObserver(e => {
                let [a] = e;
                (p = a.isIntersecting) ? y(): v()
            });
            return j.observe(a), () => {
                v(), x.disconnect(), j.disconnect()
            }
        }, [r, i.phone, i.desktop, n]), (0, a.jsx)("canvas", {
            ref: o,
            className: s,
            "aria-hidden": "true"
        })
    });
    var eg = e.i(65914),
        ey = e.i(205350);
    let ev = "Parisienne",
        ex = `"${ev}", cursive`,
        ej = "Tiro Devanagari Sanskrit",
        eb = `"${ej}", "Tiro Devanagari Hindi", "Noto Serif Devanagari", serif`,
        ew = (0, t.createContext)(null);

    function eN() {
        let e = (0, t.useContext)(ew);
        if (!e) throw Error("Vrindavan Raas acts must render inside <VrindavanContext.Provider>");
        return e
    }

    function ek(e, a) {
        return {
            fontFamily: e.headingFont,
            fontWeight: e.headingWeight ?? 600,
            color: a
        }
    }

    function e_(e) {
        let {
            color: t,
            className: l = ""
        } = e;
        return (0, a.jsxs)("svg", {
            className: `${ey.default.lotusDivider} ${l}`,
            viewBox: "0 0 220 22",
            fill: "none",
            "aria-hidden": "true",
            children: [(0, a.jsx)("path", {
                d: "M4 12h76M140 12h76",
                stroke: t,
                strokeWidth: "0.9",
                strokeLinecap: "round"
            }), (0, a.jsx)("path", {
                d: "M86 12h10M124 12h10",
                stroke: t,
                strokeWidth: "0.9",
                strokeOpacity: "0.6",
                strokeLinecap: "round"
            }), (0, a.jsxs)("g", {
                stroke: t,
                strokeWidth: "1",
                strokeLinejoin: "round",
                children: [(0, a.jsx)("path", {
                    d: "M110 2c3.6 4 3.6 10.4 0 15-3.6-4.6-3.6-11 0-15z",
                    fill: t,
                    fillOpacity: "0.2"
                }), (0, a.jsx)("path", {
                    d: "M110 17c-1.8-5-6-8.2-11-9 .6 5 4.6 8.4 11 9zM110 17c1.8-5 6-8.2 11-9-.6 5-4.6 8.4-11 9z",
                    fill: t,
                    fillOpacity: "0.12"
                }), (0, a.jsx)("path", {
                    d: "M110 18c-4.6-2.6-10.6-3-15.6-1.4 4 2.8 9.4 3.2 15.6 1.4zM110 18c4.6-2.6 10.6-3 15.6-1.4-4 2.8-9.4 3.2-15.6 1.4z"
                })]
            })]
        })
    }

    function e$(e) {
        let {
            gold: t,
            deep: l,
            eye: s,
            className: r = ""
        } = e;
        return (0, a.jsxs)("svg", {
            className: `${ey.default.bansuriRule} ${r}`,
            viewBox: "0 0 300 30",
            fill: "none",
            "aria-hidden": "true",
            children: [(0, a.jsx)("path", {
                d: "M4 15h38",
                stroke: t,
                strokeWidth: "0.8",
                strokeLinecap: "round",
                strokeOpacity: "0.7"
            }), (0, a.jsx)("rect", {
                x: "44",
                y: "12",
                width: "196",
                height: "6",
                rx: "3",
                fill: t,
                fillOpacity: "0.18",
                stroke: t,
                strokeWidth: "0.9"
            }), [52, 56, 228, 232].map(e => (0, a.jsx)("path", {
                d: `M${e} 12.4v5.2`,
                stroke: t,
                strokeWidth: "0.8"
            }, e)), [70, 120, 134, 148, 162, 176, 190].map((e, t) => (0, a.jsx)("circle", {
                cx: e,
                cy: "15",
                r: 0 === t ? 1.4 : 1.1,
                fill: l
            }, e)), (0, a.jsxs)("g", {
                transform: "translate(244 3)",
                children: [(0, a.jsx)("path", {
                    d: "M0 12c10-3 22-5 34-4",
                    stroke: t,
                    strokeWidth: "0.8"
                }), (0, a.jsx)("path", {
                    d: "M30 8c8-6 18-7 24-1 3 3 2 7-1 9-6 4-17 3-23-2",
                    fill: t,
                    fillOpacity: "0.16",
                    stroke: t,
                    strokeWidth: "0.9"
                }), (0, a.jsx)("ellipse", {
                    cx: "44",
                    cy: "10",
                    rx: "6",
                    ry: "4.4",
                    fill: s,
                    fillOpacity: "0.6"
                }), (0, a.jsx)("ellipse", {
                    cx: "45",
                    cy: "10.2",
                    rx: "2.6",
                    ry: "2",
                    fill: l
                })]
            })]
        })
    }

    function eW(e) {
        let {
            gold: t,
            eye: l,
            className: s = ""
        } = e;
        return (0, a.jsxs)("svg", {
            className: `${ey.default.featherArrow} ${s}`,
            viewBox: "0 0 24 110",
            fill: "none",
            "aria-hidden": "true",
            children: [(0, a.jsx)("path", {
                d: "M12 2v84",
                stroke: t,
                strokeWidth: "1.1",
                strokeLinecap: "round"
            }), (0, a.jsx)("path", {
                d: "M12 84c-6 4-8 11-4 17 1.6 2.4 2.8 4 4 7 1.2-3 2.4-4.6 4-7 4-6 2-13-4-17z",
                fill: t,
                fillOpacity: "0.2",
                stroke: t,
                strokeWidth: "1"
            }), (0, a.jsx)("ellipse", {
                cx: "12",
                cy: "97",
                rx: "3",
                ry: "4",
                fill: l,
                fillOpacity: "0.7"
            })]
        })
    }

    function eC(e) {
        let {
            emblem: t,
            gold: l,
            deep: s,
            eye: r,
            label: i,
            className: n = ""
        } = e;
        switch (t.kind) {
            case "ornament":
                return (0, a.jsx)("span", {
                    className: `${ey.default.emblem} ${n}`,
                    role: "img",
                    "aria-label": i,
                    children: "morpankh" === t.name ? (0, a.jsx)(eg.E, {
                        gold: l,
                        deep: s,
                        eye: r,
                        size: 64
                    }) : "bansuri" === t.name ? (0, a.jsx)(eg.M, {
                        gold: l,
                        deep: s,
                        eye: r,
                        size: 64
                    }) : (0, a.jsx)(eF, {
                        color: l,
                        size: 58
                    })
                });
            case "glyph":
                return (0, a.jsx)("span", {
                    className: `${ey.default.emblemGlyph} ${n}`,
                    lang: B(t.text),
                    "aria-hidden": "true",
                    style: {
                        fontFamily: eb,
                        color: l
                    },
                    children: t.text
                });
            case "upload":
                return (0, a.jsx)("span", {
                    className: `${ey.default.emblemMark} ${n}`,
                    role: "img",
                    "aria-label": i,
                    style: {
                        "--mark": `url("${t.src}")`,
                        backgroundColor: l
                    }
                });
            case "image":
                return null
        }
    }

    function eF(e) {
        let {
            color: t,
            size: l = 14,
            className: s = ""
        } = e;
        return (0, a.jsx)("svg", {
            viewBox: "0 0 40 26",
            width: l,
            height: 26 * l / 40,
            className: s,
            fill: "none",
            "aria-hidden": "true",
            children: (0, a.jsxs)("g", {
                stroke: t,
                strokeWidth: "1.3",
                strokeLinejoin: "round",
                children: [(0, a.jsx)("path", {
                    d: "M20 2c4 5 4 12 0 18-4-6-4-13 0-18z",
                    fill: t,
                    fillOpacity: "0.25"
                }), (0, a.jsx)("path", {
                    d: "M20 20c-2-6-7-10-13-11 .8 6 5.4 10 13 11zM20 20c2-6 7-10 13-11-.8 6-5.4 10-13 11z",
                    fill: t,
                    fillOpacity: "0.15"
                }), (0, a.jsx)("path", {
                    d: "M20 21c-5.4-3-12.4-3.4-18-1.6 4.6 3.2 11 3.6 18 1.6zM20 21c5.4-3 12.4-3.4 18-1.6-4.6 3.2-11 3.6-18 1.6z"
                })]
            })
        })
    }

    function eL(e) {
        let {
            href: t,
            onClick: l,
            download: s,
            external: r = !1,
            variant: i = "outline",
            night: n = !1,
            ariaLabel: o,
            className: d = "",
            children: c
        } = e, {
            tones: u
        } = eN(), h = "solid" === i ? {
            background: u.teal,
            color: u.onTeal,
            borderColor: (0, k.L)(u.goldLight, .8)
        } : {
            background: n ? (0, k.L)(u.light, .06) : (0, k.L)(u.paper, .75),
            color: n ? u.light : u.ink,
            borderColor: n ? (0, k.L)(u.goldLight, .55) : (0, k.L)(u.gold, .8)
        }, m = `${ey.default.pill} ${d}`;
        return t ? (0, a.jsx)("a", {
            href: t,
            className: m,
            style: h,
            "aria-label": o,
            download: s,
            ...r ? {
                target: "_blank",
                rel: "noopener noreferrer"
            } : {},
            children: c
        }) : (0, a.jsx)("button", {
            type: "button",
            onClick: l,
            className: m,
            style: h,
            "aria-label": o,
            children: c
        })
    }

    function eS(e) {
        let {
            id: t,
            eyebrow: l,
            title: s,
            night: r = !1,
            className: i = ""
        } = e, {
            theme: n,
            tones: o
        } = eN();
        return (0, a.jsxs)("header", {
            className: `${ey.default.chapterTitle} ${i}`,
            children: [(0, a.jsx)("p", {
                className: ey.default.eyebrow,
                style: {
                    fontFamily: ex,
                    color: r ? o.goldLight : o.goldDeep
                },
                children: l
            }), (0, a.jsx)("h2", {
                id: t,
                className: ey.default.chapterHeading,
                style: ek(n, r ? o.light : o.teal),
                children: s
            }), (0, a.jsx)(e_, {
                color: r ? (0, k.L)(o.goldLight, .85) : o.gold
            })]
        })
    }

    function eT(e) {
        let a = ee[e];
        return {
            [`--hills-y-${e}`]: a.hillsY,
            [`--hills-to-${e}`]: a.hillsTo,
            [`--river-y-${e}`]: a.riverY,
            [`--river-to-${e}`]: a.riverTo,
            [`--names-top-${e}`]: a.namesTop,
            [`--names-sink-${e}`]: a.namesSink,
            [`--moon-y-${e}`]: a.moonY,
            [`--moon-to-${e}`]: a.moonTo,
            [`--hills-line-${e}`]: Z[e].line,
            [`--river-line-${e}`]: Q[e].line,
            [`--hills-fill-${e}`]: Z[e].fill,
            [`--river-fill-${e}`]: Q[e].fill,
            [`--bank-fill-${e}`]: X[e].fill,
            [`--hills-aspect-${e}`]: K[`hills-${e}`].w / K[`hills-${e}`].h,
            [`--river-aspect-${e}`]: K[`river-${e}`].w / K[`river-${e}`].h,
            [`--bank-aspect-${e}`]: K[`bank-${e}`].w / K[`bank-${e}`].h,
            [`--bank-dip-${e}`]: X[e].dip,
            [`--img-hills-${e}`]: `url("${Y(`hills-${e}`)}")`,
            [`--img-river-${e}`]: `url("${Y(`river-${e}`)}")`,
            [`--img-bank-${e}`]: `url("${Y(`bank-${e}`)}")`
        }
    }

    function eO(e) {
        let {
            title: r,
            one: i,
            two: n,
            greet: o,
            afterGate: d
        } = e, c = (0, l.r)("inviteThemes.vrindavan-raas"), {
            theme: u,
            tones: h,
            reduce: m,
            lite: p
        } = eN(), f = (0, s.useGuestGreeting)() && o, g = (0, t.useRef)(null), y = z([i, n], 8);
        ! function(e) {
            let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            (0, t.useEffect)(() => {
                let t = e.current;
                if (!t || "u" < typeof IntersectionObserver) return;
                let l = new IntersectionObserver(e => {
                    let [a] = e;
                    return t.toggleAttribute("data-live", a.isIntersecting)
                }, {
                    threshold: a
                });
                return l.observe(t), () => l.disconnect()
            }, [e, a])
        }(g);
        let v = { ...eT("p"),
                ...eT("w"),
                "--run": "160lvh",
                "--name-scale": y,
                "--kadamba-aspect": .673,
                "--kadamba-base": .95,
                "--jhoola-aspect": el.aspect,
                "--jhoola-x": el.x,
                "--jhoola-top": el.top,
                "--jhoola-h": el.h,
                "--moon": `url("${Y("moon")}")`,
                "--kadamba": `url("${Y("kadamba")}")`,
                "--jhoola": `url("${Y("jhoola")}")`,
                "--boat": `url("${Y("boat")}")`,
                "--toran": `url("${Y("toran")}")`,
                "--toran-ratio": K.toran.w / K.toran.h,
                "--dusk-a": h.duskLavender,
                "--dusk-b": h.duskRose,
                "--dusk-c": h.duskPeach,
                "--haze": (0, k.L)(h.duskHaze, .7),
                "--night-a": h.nightDeep,
                "--night-b": h.night,
                "--night-c": h.nightHigh,
                "--star": (0, k.L)(h.moon, .9),
                "--moon-glow": (0, k.L)(h.moonGlow, .5),
                "--moon-warm": (0, k.L)(h.duskPeach, .85),
                "--glitter": (0, k.L)(h.moon, .85),
                "--veil": (0, k.L)(h.night, .5)
            },
            x = ek(u, h.light);
        return (0, a.jsx)("section", {
            ref: g,
            id: "vrindavan-arrival",
            className: ey.default.stage,
            "aria-label": r,
            style: v,
            children: (0, a.jsxs)("div", {
                className: ey.default.pin,
                "data-pinned-scene": !0,
                children: [(0, a.jsx)("div", {
                    className: `${ey.default.sky} ${ey.default.skyDusk}`,
                    "aria-hidden": "true"
                }), (0, a.jsx)("div", {
                    className: `${ey.default.sky} ${ey.default.skyNight} ${ey.default.tl}`,
                    "aria-hidden": "true"
                }), (0, a.jsx)("div", {
                    className: `${ey.default.stars} ${ey.default.tl}`,
                    "aria-hidden": "true"
                }), (0, a.jsxs)("div", {
                    className: `${ey.default.moon} ${ey.default.tl}`,
                    "aria-hidden": "true",
                    children: [(0, a.jsx)("span", {
                        className: `${ey.default.moonHalo} ${ey.default.tl}`
                    }), (0, a.jsx)("span", {
                        className: ey.default.moonDisc
                    }), (0, a.jsx)("span", {
                        className: `${ey.default.moonWarm} ${ey.default.tl}`
                    })]
                }), (0, a.jsx)("div", {
                    className: `${ey.default.clouds} ${ey.default.tl}`,
                    "aria-hidden": "true",
                    children: ea.map((e, t) => (0, a.jsx)("span", {
                        className: ey.default.cloud,
                        style: {
                            "--cloud": `url("${Y(e.art)}")`,
                            "--cloud-ratio": K[e.art].w / K[e.art].h,
                            "--cy": e.y,
                            "--cx": e.x,
                            "--cw": e.w,
                            "--co": e.o,
                            animationDuration: `${e.d}s`,
                            animationDelay: `${-e.t*e.d}s`
                        }
                    }, t))
                }), m ? null : (0, a.jsx)("div", {
                    className: `${ey.default.birds} ${ey.default.tl}`,
                    "aria-hidden": "true",
                    children: et.map((e, t) => (0, a.jsx)("span", {
                        className: ey.default.flock,
                        style: {
                            "--fy": e.y,
                            "--bird-size": `${e.s}px`,
                            animationDuration: `${e.d}s`,
                            animationDelay: `${-e.t*e.d}s`
                        },
                        children: e.birds.map((e, t) => {
                            let [l, s, r] = e;
                            return (0, a.jsx)("i", {
                                className: ey.default.bird,
                                style: {
                                    left: `${l}em`,
                                    top: `${s}em`,
                                    "--beat": `${-r}s`
                                },
                                children: (0, a.jsx)("svg", {
                                    viewBox: "0 0 40 16",
                                    children: (0, a.jsx)("path", {
                                        d: "M0 6c6-4 13-4 18 3l2 3 2-3c5-7 12-7 18-3-7-1-12 1-16 6l-4 3-4-3C12 7 7 5 0 6z"
                                    })
                                })
                            }, t)
                        })
                    }, t))
                }), (0, a.jsxs)("div", {
                    className: `${ey.default.heroCopy} ${ey.default.tl}`,
                    children: [f ? (0, a.jsxs)("p", {
                        className: ey.default.heroGuest,
                        children: [(0, a.jsx)(_.GuestGreeting, {
                            className: ey.default.heroGuestName,
                            style: {
                                fontFamily: u.headingFont,
                                color: h.goldLight
                            }
                        }), (0, a.jsx)("span", {
                            className: ey.default.heroInvited,
                            style: {
                                color: (0, k.L)(h.light, .85)
                            },
                            children: c("hero.cordiallyInvited")
                        })]
                    }) : null, (0, a.jsxs)("h1", {
                        className: ey.default.heroNames,
                        children: [(0, a.jsx)("span", {
                            "data-couple-name": !0,
                            className: ey.default.heroName,
                            style: x,
                            children: i
                        }), (0, a.jsx)("span", {
                            className: ey.default.heroWeds,
                            style: {
                                fontFamily: ex,
                                color: h.goldLight
                            },
                            children: c("hero.weds")
                        }), (0, a.jsx)("span", {
                            "data-couple-name": !0,
                            className: ey.default.heroName,
                            style: x,
                            children: n
                        })]
                    })]
                }), (0, a.jsx)("div", {
                    className: `${ey.default.plane} ${ey.default.hills} ${ey.default.tl}`,
                    "aria-hidden": "true"
                }), (0, a.jsx)("div", {
                    className: `${ey.default.veil} ${ey.default.tl}`,
                    "aria-hidden": "true"
                }), (0, a.jsx)("div", {
                    className: `${ey.default.farBank} ${ey.default.tl}`,
                    "aria-hidden": "true",
                    children: (0, a.jsxs)("div", {
                        className: ey.default.kadamba,
                        children: [(0, a.jsx)("span", {
                            className: ey.default.jhoola
                        }), (0, a.jsx)("span", {
                            className: ey.default.tree
                        })]
                    })
                }), (0, a.jsxs)("div", {
                    className: `${ey.default.plane} ${ey.default.river} ${ey.default.tl}`,
                    "aria-hidden": "true",
                    children: [(0, a.jsx)("span", {
                        className: ey.default.glitter
                    }), (0, a.jsx)("span", {
                        className: `${ey.default.boat} ${ey.default.tl}`
                    })]
                }), (0, a.jsx)("div", {
                    className: `${ey.default.haze} ${ey.default.tl}`,
                    "aria-hidden": "true"
                }), m || p ? null : (0, a.jsx)(ef, {
                    className: `${ey.default.fireflies} ${ey.default.tl}`,
                    color: h.flame,
                    count: {
                        phone: 18,
                        desktop: 36
                    }
                }), (0, a.jsx)("div", {
                    className: `${ey.default.bank} ${ey.default.tl}`,
                    "aria-hidden": "true"
                }), (0, a.jsx)("div", {
                    className: `${ey.default.toran} ${ey.default.tl}`,
                    "aria-hidden": "true",
                    children: (0, a.jsx)("span", {
                        className: ey.default.toranSway
                    })
                }), (0, a.jsx)("div", {
                    className: `${ey.default.arrivalCue} ${ey.default.tl}`,
                    "data-export-hide": !0,
                    children: (0, a.jsxs)("button", {
                        type: "button",
                        className: ey.default.cueButton,
                        "data-after-gate": d ? "" : void 0,
                        onClick: e => (function(e) {
                            let a = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
                                t = e.parentElement;
                            for (; t;) {
                                let {
                                    overflowY: e
                                } = getComputedStyle(t);
                                if (("auto" === e || "scroll" === e) && t.scrollHeight > t.clientHeight) return void t.scrollBy({
                                    top: .8 * t.clientHeight,
                                    behavior: a ? "auto" : "smooth"
                                });
                                t = t.parentElement
                            }
                            window.scrollBy({
                                top: .8 * window.innerHeight,
                                behavior: a ? "auto" : "smooth"
                            })
                        })(e.currentTarget),
                        style: {
                            color: h.light,
                            "--cue-gold": h.goldLight
                        },
                        children: [(0, a.jsx)("span", {
                            className: `${ey.default.cueText} inv-scroll-cue`,
                            children: c("hero.scrollHint")
                        }), (0, a.jsx)("span", {
                            className: ey.default.cueTrack,
                            "aria-hidden": "true",
                            children: (0, a.jsx)("i", {})
                        }), (0, a.jsxs)("svg", {
                            className: ey.default.cueChevrons,
                            viewBox: "0 0 24 30",
                            fill: "none",
                            "aria-hidden": "true",
                            children: [(0, a.jsx)("path", {
                                d: "M5 5l7 6 7-6"
                            }), (0, a.jsx)("path", {
                                d: "M5 13l7 6 7-6"
                            }), (0, a.jsx)("path", {
                                d: "M5 21l7 6 7-6"
                            })]
                        })]
                    })
                })]
            })
        })
    }
    var eR = e.i(642895),
        eq = e.i(843863),
        eM = e.i(337414),
        eE = e.i(888531);

    function eD(e) {
        let {
            one: t,
            two: s,
            date: r,
            wedding: i,
            events: n,
            logo: o,
            shareUrl: d,
            shareSettings: c,
            watermarkEnabled: u,
            onReplay: h
        } = e, m = (0, l.r)("inviteThemes.vrindavan-raas.closing"), p = (0, l.r)("share"), {
            theme: f,
            tones: g
        } = eN(), y = `${t} & ${s}`, v = (null == i ? void 0 : i.date) ? (0, eq.f)(i) : null, x = A(n, y), j = { ...f,
            palette: { ...f.palette,
                text: g.light,
                primary: g.goldLight,
                muted: (0, k.L)(g.light, .7)
            }
        };
        return (0, a.jsxs)("footer", {
            id: "vrindavan-closing",
            className: ey.default.closing,
            "aria-labelledby": "vrindavan-closing-title",
            style: {
                "--closing-p": `url("${Y("closing-p")}")`,
                "--closing-w": `url("${Y("closing-w")}")`,
                "--closing-aspect-p": K["closing-p"].w / K["closing-p"].h,
                "--closing-aspect-w": K["closing-w"].w / K["closing-w"].h,
                "--ground": g.nightDeep,
                "--ground-high": g.night,
                "--flame": (0, k.L)(g.lamplight, .85)
            },
            children: [(0, a.jsxs)("div", {
                className: ey.default.closingCopy,
                children: [o ? (0, a.jsx)("span", {
                    className: ey.default.closingMark,
                    "aria-hidden": "true",
                    style: {
                        "--mark": `url("${o}")`,
                        backgroundColor: g.goldLight
                    }
                }) : null, (0, a.jsx)(eM.b, {
                    children: (0, a.jsx)("p", {
                        className: ey.default.eyebrow,
                        style: {
                            fontFamily: ex,
                            color: g.goldLight
                        },
                        children: m("eyebrow")
                    })
                }), (0, a.jsx)(eM.b, {
                    children: (0, a.jsxs)("h2", {
                        id: "vrindavan-closing-title",
                        className: ey.default.closingNames,
                        style: ek(f, g.light),
                        children: [(0, a.jsx)("span", {
                            "data-couple-name": !0,
                            children: t
                        }), (0, a.jsx)("span", {
                            className: ey.default.closingAnd,
                            style: {
                                fontFamily: ex,
                                color: g.goldLight
                            },
                            children: m("and")
                        }), (0, a.jsx)("span", {
                            "data-couple-name": !0,
                            children: s
                        })]
                    })
                }), r ? (0, a.jsx)(eM.b, {
                    children: (0, a.jsx)("p", {
                        className: ey.default.closingDate,
                        style: {
                            fontFamily: f.headingFont,
                            color: g.goldLight
                        },
                        children: r
                    })
                }) : null, (0, a.jsx)(eM.b, {
                    children: (0, a.jsx)("p", {
                        className: ey.default.closingThanks,
                        style: {
                            color: (0, k.L)(g.light, .86)
                        },
                        children: m("thankYou")
                    })
                }), v || x ? (0, a.jsx)(eM.b, {
                    children: (0, a.jsxs)("div", {
                        className: ey.default.closingActions,
                        "data-export-hide": !0,
                        children: [v ? (0, a.jsx)(eL, {
                            href: v,
                            external: !0,
                            night: !0,
                            children: m("googleCalendar")
                        }) : null, x ? (0, a.jsx)(eL, {
                            href: x,
                            download: P(y),
                            night: !0,
                            children: m("ics")
                        }) : null]
                    })
                }) : null, (0, a.jsx)(eM.b, {
                    children: (0, a.jsxs)("div", {
                        className: ey.default.closingShare,
                        "data-export-hide": !0,
                        children: [(0, a.jsx)("p", {
                            className: ey.default.closingShareLabel,
                            style: {
                                color: (0, k.L)(g.light, .7)
                            },
                            children: p("heading")
                        }), (0, a.jsx)(eR.f, {
                            url: d,
                            title: y,
                            settings: c,
                            theme: j
                        })]
                    })
                }), h ? (0, a.jsx)("button", {
                    type: "button",
                    className: ey.default.replay,
                    onClick: h,
                    "data-export-hide": !0,
                    style: {
                        color: g.goldLight,
                        borderColor: (0, k.L)(g.goldLight, .5)
                    },
                    children: m("replay")
                }) : null, u ? (0, a.jsx)(eH, {
                    color: (0, k.L)(g.light, .6)
                }) : null]
            }), (0, a.jsxs)("div", {
                className: `${ey.default.closingRiver} ${ey.default.tl}`,
                "aria-hidden": "true",
                children: [Array.from({
                    length: 8
                }, (e, t) => (0, a.jsxs)("span", {
                    className: ey.default.floatLamp,
                    style: {
                        top: `${J(62,80,G(5,t,1))}%`,
                        "--d": `${J(26,44,G(5,t,2))}s`,
                        "--delay": `${-J(0,44,G(5,t,3))}s`,
                        "--s": J(.7, 1.15, G(5, t, 4))
                    },
                    children: [(0, a.jsx)("span", {
                        className: ey.default.diyaGlow
                    }), (0, a.jsx)("img", {
                        src: Y("diya"),
                        alt: "",
                        width: K.diya.w,
                        height: K.diya.h,
                        loading: "lazy",
                        decoding: "async"
                    }), (0, a.jsx)("img", {
                        className: ey.default.lampReflection,
                        src: Y("diya"),
                        alt: "",
                        width: K.diya.w,
                        height: K.diya.h,
                        loading: "lazy",
                        decoding: "async"
                    })]
                }, t)), (0, a.jsx)("img", {
                    className: ey.default.restingFeather,
                    src: Y("morpankh"),
                    alt: "",
                    width: K.morpankh.w,
                    height: K.morpankh.h,
                    loading: "lazy",
                    decoding: "async"
                })]
            })]
        })
    }

    function eH(e) {
        let {
            color: t
        } = e;
        return (0, a.jsx)("p", {
            id: "invite-watermark",
            className: ey.default.watermark,
            children: (0, a.jsx)("a", {
                href: "/",
                target: "_blank",
                rel: "noopener noreferrer",
                style: {
                    color: t
                },
                children: (0, a.jsx)(eE.LocalizedWatermarkText, {})
            })
        })
    }
    var eA = e.i(412589),
        eP = e.i(348892),
        eI = e.i(849517);
    let eB = () => 1e3 * Math.floor(Date.now() / 1e3);

    function eU(e) {
        let {
            target: s,
            event: r,
            events: n
        } = e, o = (0, l.r)("inviteThemes.vrindavan-raas.countdown"), d = (0, x.f)(), {
            theme: u,
            tones: h
        } = eN(), [m, p] = (0, c.i)(.22), f = (0, c.d)(m, "200px 0px"), [g, y] = (0, t.useState)(!1);
        (0, t.useEffect)(() => {
            if ("in" !== p) return;
            let e = window.setTimeout(() => y(!0), 2600);
            return () => window.clearTimeout(e)
        }, [p]);
        let v = "armed" === p || "in" === p && !g,
            j = (0, t.useCallback)(e => {
                let a = window.setInterval(e, f ? 1e3 : 3e4);
                return () => window.clearInterval(a)
            }, [f]),
            b = (0, t.useSyncExternalStore)(j, eB, () => null),
            w = null === b ? null : Math.max(0, s.getTime() - b),
            N = null !== w && 0 === w,
            _ = null === w ? null : Math.floor(w / 864e5),
            $ = null === _ ? 1 : Math.max(.14, 1 - Math.min(Math.max(Math.ceil(w / 864e5), 0), 15) / 15),
            W = null === w ? null : {
                days: _,
                hours: Math.floor(w % 864e5 / 36e5),
                minutes: Math.floor(w % 36e5 / 6e4),
                seconds: Math.floor(w % 6e4 / 1e3)
            },
            C = (null == r ? void 0 : r.date) ? [d.date(r.date, {
                weekday: "long"
            }), d.eventTimeOf(r)].filter(Boolean).join(" · ") : "",
            F = r ? (0, i.A)(r) : "",
            L = r && (F || r.venueAddress || r.mapsUrl) ? q(r) : null,
            S = [...new Set(n.map(e => {
                var a;
                return null == (a = e.dressCode) ? void 0 : a.trim()
            }).filter(e => !!e))].slice(0, 3),
            T = {
                "--moon": `url("${Y("moon")}")`,
                "--shadow-x": `${(-(1.04*Math.min(Math.max($,0),1)*100)).toFixed(2)}%`,
                "--halo-rest": (.4 + .6 * $).toFixed(2),
                "--shadow": (0, k.j)((0, k.j)(h.night, h.teal, .4), h.night, .35),
                "--star-head": h.moon,
                "--star-tail": (0, k.L)(h.moon, 0),
                "--moon-glow": (0, k.L)(h.moonGlow, N ? .75 : .4),
                "--tile": (0, k.L)(h.night, .7),
                "--tile-line": (0, k.L)(h.goldLight, .55),
                "--digit": h.light,
                "--card-border": `url("${es.card.src}")`,
                "--card-slice": es.card.slice,
                "--paper": `url("${Y("paper")}")`,
                "--finial": `url("${Y("finial")}")`,
                "--good-ink": h.ink,
                "--good-label": h.goldDeep,
                "--good-ring": h.gold,
                "--good-icon": h.teal,
                "--good-glow": (0, k.L)(h.moonGlow, .35)
            },
            O = [
                ["days", o("days")],
                ["hours", o("hours")],
                ["minutes", o("minutes")],
                ["seconds", o("seconds")]
            ];
        return (0, a.jsxs)("section", {
            ref: m,
            id: "vrindavan-countdown",
            className: ey.default.countdown,
            style: T,
            "aria-labelledby": "vrindavan-countdown-title",
            "data-done": N ? "" : void 0,
            "data-reveal": p,
            "data-live": f ? "" : void 0,
            children: [(0, a.jsx)("span", {
                className: ey.default.cdStars,
                "aria-hidden": "true"
            }), (0, a.jsxs)("div", {
                className: `${ey.default.waxing} ${ey.default.tl}`,
                "aria-hidden": "true",
                children: [(0, a.jsx)("span", {
                    className: ey.default.moonHalo
                }), (0, a.jsxs)("span", {
                    className: ey.default.moonBody,
                    children: [(0, a.jsx)("span", {
                        className: ey.default.moonLit
                    }), $ < 1 ? (0, a.jsx)("span", {
                        className: ey.default.moonShadow
                    }) : null]
                }), (0, a.jsx)("span", {
                    className: `${ey.default.shoot} ${ey.default.shootArrive}`,
                    children: (0, a.jsx)("i", {})
                }), (0, a.jsx)("span", {
                    className: `${ey.default.shoot} ${ey.default.shootAmbient}`,
                    children: (0, a.jsx)("i", {})
                })]
            }), (0, a.jsx)(eS, {
                id: "vrindavan-countdown-title",
                eyebrow: o("eyebrow"),
                title: o(N ? "titleDone" : "title"),
                night: !0
            }), N ? null : (0, a.jsx)("div", {
                className: ey.default.clock,
                role: "timer",
                "aria-label": null === _ ? o("title") : o("daysToGo", {
                    count: _
                }),
                children: O.map((e, t) => {
                    let [l, s] = e;
                    return (0, a.jsxs)("div", {
                        className: ey.default.tile,
                        "aria-hidden": "true",
                        style: {
                            "--i": t
                        },
                        "data-rolling": v ? "" : void 0,
                        children: [(0, a.jsx)("span", {
                            className: ey.default.tileDigits,
                            children: null === W ? (0, a.jsx)("span", {
                                className: ey.default.placeholder,
                                children: "--"
                            }) : String(W[l]).padStart(2, "0").split("").map((e, t, l) => (0, a.jsx)(ez, {
                                digit: "armed" === p ? 0 : Number(e)
                            }, l.length - t))
                        }), (0, a.jsx)("span", {
                            className: ey.default.tileLabel,
                            children: s
                        }), (0, a.jsx)("span", {
                            className: ey.default.tileGlint
                        })]
                    }, l)
                })
            }), C || F || S.length > 0 ? (0, a.jsxs)("div", {
                className: ey.default.goodToKnow,
                style: {
                    "--i": 4
                },
                children: [(0, a.jsx)("span", {
                    className: ey.default.goodFinial,
                    "aria-hidden": "true"
                }), (0, a.jsx)("p", {
                    className: ey.default.goodEyebrow,
                    style: {
                        fontFamily: ex,
                        color: h.goldDeep
                    },
                    children: o("goodEyebrow")
                }), (0, a.jsx)("h3", {
                    className: ey.default.goodTitle,
                    style: ek(u, h.teal),
                    children: o("goodToKnow")
                }), (0, a.jsx)(e_, {
                    color: h.gold,
                    className: ey.default.goodRule
                }), (0, a.jsxs)("ul", {
                    className: ey.default.goodList,
                    children: [C ? (0, a.jsxs)("li", {
                        className: ey.default.goodFact,
                        children: [(0, a.jsx)("span", {
                            className: ey.default.goodIcon,
                            children: (0, a.jsx)(eA.f, {
                                "aria-hidden": "true"
                            })
                        }), (0, a.jsx)("span", {
                            className: ey.default.goodLabel,
                            children: o("when")
                        }), (0, a.jsx)("span", {
                            className: ey.default.goodBody,
                            style: {
                                fontFamily: u.headingFont
                            },
                            children: C
                        })]
                    }) : null, F ? (0, a.jsxs)("li", {
                        className: ey.default.goodFact,
                        children: [(0, a.jsx)("span", {
                            className: ey.default.goodIcon,
                            children: (0, a.jsx)(eP.f, {
                                "aria-hidden": "true"
                            })
                        }), (0, a.jsx)("span", {
                            className: ey.default.goodLabel,
                            children: o("where")
                        }), (0, a.jsx)("span", {
                            className: ey.default.goodBody,
                            style: {
                                fontFamily: u.headingFont
                            },
                            children: F
                        }), L ? (0, a.jsx)("a", {
                            href: L,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: ey.default.goodLink,
                            "data-export-hide": !0,
                            children: o("viewLocation")
                        }) : null]
                    }) : null, S.length > 0 ? (0, a.jsxs)("li", {
                        className: ey.default.goodFact,
                        children: [(0, a.jsx)("span", {
                            className: ey.default.goodIcon,
                            children: (0, a.jsx)(eI.f, {
                                "aria-hidden": "true"
                            })
                        }), (0, a.jsx)("span", {
                            className: ey.default.goodLabel,
                            children: o("dress")
                        }), (0, a.jsx)("span", {
                            className: ey.default.goodBody,
                            style: {
                                fontFamily: u.headingFont
                            },
                            children: S.join(" · ")
                        })]
                    }) : null]
                })]
            }) : null]
        })
    }

    function ez(e) {
        let {
            digit: t
        } = e;
        return (0, a.jsx)("span", {
            className: ey.default.roll,
            children: (0, a.jsx)("span", {
                className: ey.default.rollStrip,
                style: {
                    translate: `0 ${-(10*t)}%`
                },
                children: "0123456789".split("").map(e => (0, a.jsx)("span", {
                    children: e
                }, e))
            })
        })
    }
    var eG = e.i(83211);

    function eJ(e) {
        var s;
        let {
            events: r
        } = e, i = (0, l.r)("inviteThemes.vrindavan-raas.events"), {
            tones: n
        } = eN(), o = (0, t.useRef)(null);
        s = o, (0, t.useEffect)(() => {
            let e = s.current;
            if (!e || "u" < typeof IntersectionObserver) return;
            let a = new IntersectionObserver(e => {
                for (let a of e) a.target.toggleAttribute("data-live", a.intersectionRatio >= eX)
            }, {
                threshold: eX
            });
            return e.querySelectorAll(`.${ey.default.window}`).forEach(e => a.observe(e)), () => a.disconnect()
        }, [s]);
        let d = function(e) {
            let [a, l] = (0, t.useState)({
                w: 120,
                h: 0,
                d: ""
            });
            return (0, t.useEffect)(() => {
                let a = e.current;
                if (!a || "u" < typeof ResizeObserver) return;
                let t = () => {
                    let e = Math.round(a.offsetHeight);
                    if (e <= 0) return;
                    let t = Math.max(1, Math.round(e / 520)),
                        s = e / t,
                        r = "M 60 0";
                    for (let e = 0; e < t; e++) {
                        let a = e * s,
                            t = e % 2 ? -1 : 1;
                        r += ` C ${60+46*t} ${(a+.33*s).toFixed(1)}, ${60-46*t} ${(a+.66*s).toFixed(1)}, 60 ${(a+s).toFixed(1)}`
                    }
                    l(a => a.h === e ? a : {
                        w: 120,
                        h: e,
                        d: r
                    })
                };
                t();
                let s = new ResizeObserver(t);
                return s.observe(a), () => s.disconnect()
            }, [e]), a
        }(o);
        return (0, a.jsxs)("section", {
            id: "vrindavan-events",
            className: ey.default.events,
            "aria-labelledby": "vrindavan-events-title",
            style: {
                "--frame": `url("${Y("events/window-frame")}")`,
                "--fore": `url("${Y("events/window-fore")}")`,
                "--card-border": `url("${es.card.src}")`,
                "--card-slice": es.card.slice,
                "--crown-sit": `${.62*er.base/er.aspect*100}%`,
                "--ember": (0, k.L)(n.lamplight, .95),
                "--spark": n.moon,
                "--glow": (0, k.L)(n.lamplight, .55),
                "--ribbon": n.gold,
                "--ribbon-light": n.goldLight
            },
            children: [(0, a.jsx)(eS, {
                id: "vrindavan-events-title",
                eyebrow: i("eyebrow"),
                title: i("title")
            }), (0, a.jsxs)("div", {
                className: ey.default.rail,
                "aria-hidden": "true",
                children: [(0, a.jsx)("div", {
                    className: `${ey.default.railClip} ${ey.default.tl}`,
                    children: (0, a.jsxs)("svg", {
                        className: `${ey.default.railInner} ${ey.default.tl}`,
                        width: d.w,
                        height: d.h,
                        viewBox: `0 0 ${d.w} ${d.h}`,
                        fill: "none",
                        children: [(0, a.jsx)("path", {
                            d: d.d,
                            stroke: "var(--ribbon)",
                            strokeOpacity: "0.55",
                            strokeWidth: "5",
                            strokeLinecap: "round"
                        }), (0, a.jsx)("path", {
                            d: d.d,
                            stroke: "var(--ribbon-light)",
                            strokeOpacity: "0.7",
                            strokeWidth: "1.2",
                            strokeLinecap: "round"
                        })]
                    })
                }), d.d ? (0, a.jsxs)("span", {
                    className: `${ey.default.railDiya} ${ey.default.tl}`,
                    style: {
                        offsetPath: `path("${d.d}")`
                    },
                    children: [(0, a.jsx)("span", {
                        className: ey.default.diyaGlow
                    }), (0, a.jsx)("img", {
                        src: Y("diya"),
                        alt: "",
                        width: K.diya.w,
                        height: K.diya.h,
                        loading: "lazy",
                        decoding: "async"
                    })]
                }) : null]
            }), (0, a.jsx)("ol", {
                ref: o,
                className: ey.default.rows,
                children: r.map((e, t) => {
                    let l, s, i = {
                        key: l = S(e),
                        src: `${V}/events/${l.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}.webp`,
                        fx: en[l]
                    };
                    return (0, a.jsxs)("li", {
                        className: ey.default.row,
                        "data-side": t % 2 ? "right" : "left",
                        "data-scene": i.key,
                        children: [(0, a.jsxs)("div", {
                            className: ey.default.window,
                            "aria-hidden": "true",
                            children: [(0, a.jsxs)("div", {
                                className: ey.default.windowArt,
                                children: [(0, a.jsxs)("div", {
                                    className: `${ey.default.sceneArt} ${ey.default.tl}`,
                                    children: [(0, a.jsx)("img", {
                                        src: i.src,
                                        alt: "",
                                        width: 820,
                                        height: 1230,
                                        loading: "lazy",
                                        decoding: "async",
                                        draggable: !1
                                    }), (0, a.jsx)(eK, {
                                        bits: eh[i.key],
                                        src: i.src
                                    }), (0, a.jsx)(eZ, {
                                        scene: i.key
                                    })]
                                }), (0, a.jsx)(eQ, {
                                    fx: i.fx,
                                    seed: t + 1
                                }), (0, a.jsx)("span", {
                                    className: `${ey.default.windowFore} ${ey.default.tl}`
                                })]
                            }), (0, a.jsx)("span", {
                                className: ey.default.windowFrame
                            })]
                        }), (0, a.jsxs)(eM.b, {
                            className: ey.default.cardWrap,
                            children: [(0, a.jsx)("img", {
                                className: ey.default.crown,
                                src: er.src,
                                alt: "",
                                "aria-hidden": "true",
                                width: K["events/crown"].w,
                                height: K["events/crown"].h,
                                loading: "lazy",
                                decoding: "async"
                            }), (0, a.jsx)(eV, {
                                event: e,
                                index: t,
                                total: r.length,
                                night: (s = i.key, T.has(s))
                            })]
                        })]
                    }, e.id)
                })
            })]
        })
    }

    function eV(e) {
        var s, r, n, o;
        let {
            event: d,
            index: c,
            total: u,
            night: m
        } = e, p = (0, l.r)("inviteThemes.vrindavan-raas.events"), f = (0, x.f)(), g = (0, h.f)(), {
            theme: y,
            tones: v
        } = eN(), j = f.eventTimeOf(d, {
            viewerTimezone: g
        }), b = d.date ? f.date(d.date, {
            weekday: "long"
        }) : "", w = (0, i.A)(d), N = null == (s = d.venueAddress) ? void 0 : s.trim(), _ = null == (r = d.dressCode) ? void 0 : r.trim(), $ = (0, i.L)(d.dressCodeColor), W = (0, i.B)(d), C = w || N || d.mapsUrl ? q(d) : null, F = (null == (n = d.name) ? void 0 : n.trim()) || p("fallbackName"), L = (0, t.useRef)(null);
        (0, eG._)(L, F);
        let S = (null == (o = d.description) ? void 0 : o.trim()) ?? "",
            T = !!S && !0 === d.descriptionOnTop,
            O = d.date ? (0, eq.f)(d) : null,
            R = A([d], F),
            M = m ? v.light : v.ink,
            E = {
                "--card-ink": M,
                "--card-muted": m ? (0, k.L)(v.light, .72) : v.muted,
                "--card-label": m ? v.goldLight : v.goldDeep,
                "--card-ground": m ? (0, k.L)(v.nightDeep, .82) : (0, k.L)(v.paper, .94),
                "--foil-a": m ? v.goldLight : v.goldDeep,
                "--foil-b": m ? v.moon : v.gold,
                "--foil-c": m ? v.gold : v.goldDeep
            };
        return (0, a.jsxs)("article", {
            id: `event-${d.id}`,
            className: ey.default.card,
            "data-night": m ? "" : void 0,
            style: E,
            children: [(0, a.jsx)("p", {
                className: ey.default.cardCount,
                children: p("count", {
                    n: c + 1,
                    total: u
                })
            }), T ? (0, a.jsx)("p", {
                className: ey.default.cardInvocation,
                lang: B(S),
                style: B(S) ? {
                    fontFamily: eb
                } : void 0,
                children: S
            }) : null, b ? (0, a.jsx)("p", {
                className: ey.default.cardDate,
                style: {
                    fontFamily: ex
                },
                children: b
            }) : null, (0, a.jsx)("h3", {
                ref: L,
                className: ey.default.cardName,
                style: ek(y, M),
                children: F
            }), (0, a.jsx)(e_, {
                color: m ? (0, k.L)(v.goldLight, .8) : v.gold,
                className: ey.default.cardRule
            }), j || w || N || _ || W.length > 0 ? (0, a.jsxs)("dl", {
                className: ey.default.cardFacts,
                children: [j ? (0, a.jsxs)("div", {
                    children: [(0, a.jsx)("dt", {
                        children: p("time")
                    }), (0, a.jsx)("dd", {
                        children: j
                    })]
                }) : null, w || N ? (0, a.jsxs)("div", {
                    children: [(0, a.jsx)("dt", {
                        children: p("venue")
                    }), (0, a.jsxs)("dd", {
                        children: [w || N, w && N ? (0, a.jsx)("span", {
                            className: ey.default.cardAddress,
                            children: N
                        }) : null]
                    })]
                }) : null, _ ? (0, a.jsxs)("div", {
                    children: [(0, a.jsx)("dt", {
                        children: p("attire")
                    }), (0, a.jsxs)("dd", {
                        children: [$ ? (0, a.jsx)("i", {
                            className: ey.default.swatch,
                            style: {
                                background: $
                            },
                            "aria-hidden": "true"
                        }) : null, _]
                    })]
                }) : null, W.length > 0 ? (0, a.jsxs)("div", {
                    children: [(0, a.jsx)("dt", {
                        children: p("rituals")
                    }), (0, a.jsx)("dd", {
                        children: (0, a.jsx)("ol", {
                            className: ey.default.steps,
                            children: W.map(e => (0, a.jsxs)("li", {
                                children: [e.time ? (0, a.jsx)("span", {
                                    children: f.time(e.time)
                                }) : null, e.title]
                            }, e.id))
                        })
                    })]
                }) : null]
            }) : null, S && !T ? (0, a.jsx)("p", {
                className: ey.default.cardNote,
                children: d.description
            }) : null, C || O || R ? (0, a.jsxs)("div", {
                className: ey.default.cardActions,
                "data-export-hide": !0,
                children: [C ? (0, a.jsx)(eL, {
                    href: C,
                    external: !0,
                    night: m,
                    children: p("directions")
                }) : null, O ? (0, a.jsx)(eL, {
                    href: O,
                    external: !0,
                    night: m,
                    ariaLabel: p("googleCalendarLabel", {
                        name: F
                    }),
                    children: p("googleCalendar")
                }) : null, R ? (0, a.jsx)(eL, {
                    href: R,
                    download: P(F),
                    night: m,
                    ariaLabel: p("icsLabel", {
                        name: F
                    }),
                    children: p("ics")
                }) : null]
            }) : null]
        })
    }

    function eK(e) {
        let {
            bits: t,
            src: l
        } = e, {
            lite: s
        } = eN();
        return (0, a.jsx)("div", {
            className: ey.default.life,
            children: t.map((e, t) => {
                if ("cut" === e.kind) {
                    var r, i;
                    if (s) return null;
                    let n = e.x - e.w / 2,
                        o = e.y - e.h / 2;
                    return (0, a.jsx)("span", {
                        className: ey.default.cut,
                        "data-move": e.move,
                        style: {
                            left: `${n}%`,
                            top: `${o}%`,
                            width: `${e.w}%`,
                            height: `${e.h}%`,
                            backgroundImage: `url("${l}")`,
                            backgroundSize: `${(1e4/e.w).toFixed(2)}% ${(1e4/e.h).toFixed(2)}%`,
                            backgroundPosition: `${(n/(100-e.w)*100).toFixed(2)}% ${(o/(100-e.h)*100).toFixed(2)}%`,
                            transformOrigin: `${(null==(r=e.o)?void 0:r[0])??50}% ${(null==(i=e.o)?void 0:i[1])??50}%`,
                            "--a": e.a,
                            "--d": `${e.d}s`,
                            "--t": `${-(e.t??0)}s`
                        }
                    }, t)
                }
                let n = {
                    left: `${e.x}%`,
                    top: `${e.y}%`,
                    "--t": `${-("t"in e?e.t??0:0)}s`
                };
                switch (e.kind) {
                    case "flame":
                        return (0, a.jsx)("span", {
                            className: ey.default.lifeFlame,
                            style: { ...n,
                                width: `${e.s}%`
                            }
                        }, t);
                    case "moon":
                        return (0, a.jsx)("span", {
                            className: ey.default.lifeMoon,
                            style: { ...n,
                                width: `${2.2*e.s}%`
                            }
                        }, t);
                    case "shimmer":
                        return (0, a.jsx)("span", {
                            className: ey.default.lifeShimmer,
                            style: { ...n,
                                width: `${e.w}%`,
                                height: `${e.h}%`
                            }
                        }, t);
                    case "steam":
                        return s ? null : (0, a.jsxs)("span", {
                            className: ey.default.lifeSteam,
                            style: n,
                            children: [(0, a.jsx)("i", {}), (0, a.jsx)("i", {})]
                        }, t);
                    case "dab":
                        return (0, a.jsx)("span", {
                            className: ey.default.lifeDab,
                            style: { ...n,
                                "--c": e.c
                            }
                        }, t)
                }
            })
        })
    }
    let eY = function(e, a) {
        let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
            s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : l;
        return {
            translate: `${e.toFixed(2)}% ${a.toFixed(2)}%`,
            rotate: `${t.toFixed(2)}deg`,
            scale: `${l.toFixed(3)} ${s.toFixed(3)}`
        }
    };

    function eZ(e) {
        let {
            scene: l
        } = e, s = em[l], {
            reduce: r
        } = eN(), i = (0, t.useRef)(null);
        return ((0, t.useEffect)(() => {
            let e = i.current;
            if (!e || !s || r || "function" != typeof e.animate) return;
            let a = s.map((a, t) => {
                let l = e.children[t],
                    s = function(e) {
                        let a = e.dir ?? 1;
                        switch (e.move) {
                            case "ride":
                                return {
                                    frames: [eY(0, 0, -.7), eY(.3, -.9, 0), eY(0, 0, .7), eY(-.3, -.9, 0), eY(0, 0, -.7)],
                                    ms: 1500,
                                    alternate: !1,
                                    easing: "ease-in-out"
                                };
                            case "amble":
                                return {
                                    frames: [eY(-.5, 0, -.5), eY(0, -.6, 0), eY(.5, 0, .5), eY(0, -.6, 0), eY(-.5, 0, -.5)],
                                    ms: 3200,
                                    alternate: !1,
                                    easing: "ease-in-out"
                                };
                            case "lean":
                                return {
                                    frames: [eY(0, 0, 0), eY(1.6 * a, -.5, 1.6 * a)],
                                    ms: 2600,
                                    alternate: !0,
                                    easing: "ease-in-out"
                                };
                            case "sway":
                                return {
                                    frames: [eY(-.4, 0, -.7), eY(.4, 0, .7)],
                                    ms: 4400,
                                    alternate: !0,
                                    easing: "ease-in-out"
                                };
                            case "aarti":
                                return {
                                    frames: [eY(1.2, 0, 1.5), eY(0, -1.2, 0), eY(-1.2, 0, -1.5), eY(0, 1, 0), eY(1.2, 0, 1.5)],
                                    ms: 3e3,
                                    alternate: !1,
                                    easing: "linear"
                                };
                            case "play":
                                return {
                                    frames: [eY(-.5, 0, -1.2), eY(.5, -.3, 1.2)],
                                    ms: 1300,
                                    alternate: !0,
                                    easing: "ease-in-out"
                                };
                            case "step":
                                return {
                                    frames: [eY(0, 0, -.8), eY(.4, -.9, 0), eY(0, 0, .8), eY(-.4, -.9, 0), eY(0, 0, -.8)],
                                    ms: 1900,
                                    alternate: !1,
                                    easing: "ease-in-out"
                                }
                        }
                    }(a);
                return l.animate(s.frames, {
                    duration: s.ms,
                    iterations: 1 / 0,
                    direction: s.alternate ? "alternate" : "normal",
                    easing: s.easing,
                    delay: -(a.t ?? 0) * s.ms
                })
            });
            a.forEach(e => e.pause());
            let t = e.closest(`.${ey.default.window}`) ?? e,
                l = new IntersectionObserver(e => {
                    let [t] = e;
                    return a.forEach(e => t.intersectionRatio >= 1 / 3 ? e.play() : e.pause())
                }, {
                    threshold: [0, 1 / 3]
                });
            return l.observe(t), () => {
                l.disconnect(), a.forEach(e => e.cancel())
            }
        }, [s, r]), s) ? (0, a.jsx)("div", {
            ref: i,
            className: ey.default.actors,
            children: s.map(e => {
                let t;
                return (0, a.jsxs)("span", {
                    className: ey.default.actor,
                    style: {
                        left: `${e.x}%`,
                        top: `${e.y}%`,
                        width: `${e.w}%`,
                        height: `${e.h}%`,
                        zIndex: 1
                    },
                    children: [(0, a.jsx)("img", {
                        src: (t = e.name, `${V}/events/${l}-${t}.webp`),
                        alt: "",
                        loading: "lazy",
                        decoding: "async",
                        draggable: !1
                    }), e.glow ? (0, a.jsx)("span", {
                        className: ey.default.actorGlow,
                        style: {
                            left: `${e.glow[0]}%`,
                            top: `${e.glow[1]}%`
                        }
                    }) : null]
                }, e.name)
            })
        }) : null
    }

    function eQ(e) {
        let {
            fx: t,
            seed: l
        } = e, {
            lite: s
        } = eN(), r = s ? .5 : 1, i = t.petals ? Math.round(12 * r) : 0, n = t.embers ? Math.round(12 * r) : 0, o = t.sparks ? Math.round(14 * r) : 0;
        return (0, a.jsxs)("div", {
            className: `${ey.default.fx} ${ey.default.tl}`,
            children: [t.glow ? (0, a.jsx)("span", {
                className: ey.default.fxGlow,
                style: {
                    left: `${t.glow[0]}%`,
                    top: `${t.glow[1]}%`
                }
            }) : null, Array.from({
                length: n
            }, (e, s) => (0, a.jsx)("span", {
                className: ey.default.ember,
                style: {
                    left: `${J(t.embers[0],t.embers[1],G(l,s,1))}%`,
                    top: t.glow ? `${t.glow[1]-2}%` : `${J(62,82,G(l,s,6))}%`,
                    "--d": `${J(2.6,4.6,G(l,s,2))}s`,
                    "--delay": `${-J(0,4.6,G(l,s,3))}s`,
                    "--sway": `${J(-18,18,G(l,s,4))}px`,
                    "--s": J(.6, 1.3, G(l, s, 5))
                }
            }, `e${s}`)), Array.from({
                length: o
            }, (e, t) => (0, a.jsx)("span", {
                className: ey.default.spark,
                style: {
                    left: `${J(10,90,G(l,t,11))}%`,
                    top: `${J(8,40,G(l,t,12))}%`,
                    "--d": `${J(1.8,3.8,G(l,t,13))}s`,
                    "--delay": `${-J(0,3.8,G(l,t,14))}s`,
                    "--s": J(.5, 1.2, G(l, t, 15))
                }
            }, `s${t}`)), Array.from({
                length: i
            }, (e, s) => (0, a.jsx)("img", {
                className: ey.default.petal,
                src: Y(t.petals[s % t.petals.length]),
                alt: "",
                loading: "lazy",
                decoding: "async",
                style: {
                    left: `${J(4,92,G(l,s,21))}%`,
                    "--d": `${J(6,11,G(l,s,22))}s`,
                    "--delay": `${-J(0,11,G(l,s,23))}s`,
                    "--sway": `${J(-30,30,G(l,s,24))}px`,
                    "--spin": `${J(-260,260,G(l,s,25))}deg`,
                    "--s": J(.7, 1.25, G(l, s, 26))
                }
            }, `p${s}`))]
        })
    }
    let eX = 1 / 3;
    var e0 = e.i(431817),
        e1 = e.i(316616),
        e2 = e.i(735388),
        e6 = e.i(736642),
        e8 = e.i(174241),
        e4 = e.i(230715);
    let e5 = ["res.cloudinary.com", "images.unsplash.com"],
        e7 = ["arch", "round", "soft"],
        e3 = "vrindavan-photo";

    function e9(e) {
        let {
            photo: t,
            alt: l,
            sizes: s,
            className: r
        } = e;
        return ! function(e) {
            if (e.startsWith("/")) return !0;
            try {
                return e5.includes(new URL(e).hostname)
            } catch {
                return !1
            }
        }(t.url) ? (0, a.jsx)("img", {
            src: t.url,
            alt: l,
            loading: "lazy",
            decoding: "async",
            className: r,
            draggable: !1
        }) : (0, a.jsx)(e0.default, {
            src: t.url,
            alt: l,
            fill: !0,
            sizes: s,
            className: r,
            draggable: !1
        })
    }

    function ae(e) {
        let a = document;
        "function" != typeof a.startViewTransition || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? e() : a.startViewTransition(() => (0, e1.flushSync)(e))
    }

    function aa(e) {
        var s;
        let {
            photos: r
        } = e, i = (0, l.r)("inviteThemes.vrindavan-raas.gallery"), n = (0, l.r)("invite.gallery"), {
            tones: o,
            reduce: d
        } = eN(), c = (0, t.useRef)(null), u = (0, t.useRef)(null), [h, m] = (0, t.useState)(0), [p, f] = (0, t.useState)(0), [g, y] = (0, t.useState)(null), v = (0, t.useRef)(null), x = r.length, j = 0 === x ? "empty" : 1 === x ? "single" : x < 4 ? "pair" : "carousel", b = e => {
            var a;
            return (null == (a = e.caption) ? void 0 : a.trim()) || n("photoAlt")
        }, w = () => {
            ae(() => {
                var e;
                null == (e = c.current) || e.close(), y(h)
            }), window.setTimeout(() => y(null), 400)
        }, N = (0, t.useCallback)(e => m(a => (a + e + x) % x), [x]);
        (0, t.useEffect)(() => {
            let e = u.current;
            if (!e) return;
            let a = 0,
                t = () => {
                    a = 0;
                    let t = e.scrollLeft + e.clientWidth / 2,
                        l = 0,
                        s = 1 / 0;
                    [...e.querySelectorAll("[data-slide]")].forEach((e, a) => {
                        let r = Math.abs(e.offsetLeft + e.offsetWidth / 2 - t);
                        r < s && (s = r, l = a)
                    }), f(l)
                },
                l = () => {
                    a || (a = requestAnimationFrame(t))
                };
            return e.addEventListener("scroll", l, {
                passive: !0
            }), t(), () => {
                e.removeEventListener("scroll", l), cancelAnimationFrame(a)
            }
        }, [j]);
        let _ = e => {
                let a = u.current,
                    t = null == a ? void 0 : a.querySelectorAll("[data-slide]")[e];
                a && t && a.scrollTo({
                    left: t.offsetLeft + t.offsetWidth / 2 - a.clientWidth / 2,
                    behavior: d ? "auto" : "smooth"
                })
            },
            $ = {
                "--garland": `url("${Y("toran")}")`,
                "--keyline": o.gold,
                "--keyline-light": o.goldLight,
                "--frame-ground": o.night,
                "--sheen": (0, k.L)(o.moon, .32),
                "--scrim": (0, k.L)(o.nightDeep, .94),
                "--finial": `url("${Y("finial")}")`
            },
            W = (e, t, l) => {
                var s;
                return (0, a.jsxs)("figure", {
                    className: ey.default.photoFigure,
                    "data-shape": e7[t % e7.length],
                    "data-slide": "carousel" === j ? "" : void 0,
                    children: [(0, a.jsx)("button", {
                        type: "button",
                        className: ey.default.photoButton,
                        onClick: () => {
                            (0, e1.flushSync)(() => y(t)), ae(() => {
                                var e;
                                y(null), m(t), null == (e = c.current) || e.showModal()
                            })
                        },
                        "aria-label": b(e),
                        children: (0, a.jsxs)("span", {
                            className: ey.default.photoFrame,
                            style: g === t ? {
                                viewTransitionName: e3
                            } : void 0,
                            children: [(0, a.jsx)(e9, {
                                photo: e,
                                alt: "",
                                sizes: l,
                                className: ey.default.photoImg
                            }), (0, a.jsx)("span", {
                                className: ey.default.photoSheen,
                                "aria-hidden": "true"
                            })]
                        })
                    }), (null == (s = e.caption) ? void 0 : s.trim()) ? (0, a.jsx)("figcaption", {
                        className: ey.default.photoCaption,
                        children: e.caption
                    }) : null]
                }, `${e.publicId||e.url}-${t}`)
            };
        return (0, a.jsxs)("section", {
            id: "vrindavan-gallery",
            className: ey.default.gallery,
            "data-arrangement": j,
            style: $,
            "aria-labelledby": "vrindavan-gallery-title",
            children: [(0, a.jsx)("span", {
                className: ey.default.garland,
                "aria-hidden": "true"
            }), (0, a.jsx)(eS, {
                id: "vrindavan-gallery-title",
                eyebrow: i("eyebrow"),
                title: i("title"),
                night: !0
            }), "empty" === j ? (0, a.jsx)("ul", {
                className: ey.default.galleryRow,
                children: [0, 1, 2].map(e => (0, a.jsx)("li", {
                    className: ey.default.photoFigure,
                    "data-shape": e7[e],
                    "data-empty": "",
                    children: (0, a.jsx)("span", {
                        className: ey.default.photoFrame,
                        children: 1 === e ? (0, a.jsxs)("span", {
                            className: ey.default.emptyHint,
                            children: [(0, a.jsx)(e8.f, {
                                "aria-hidden": "true",
                                size: 22
                            }), i("emptyHint")]
                        }) : null
                    })
                }, e))
            }) : "carousel" === j ? (0, a.jsxs)("div", {
                className: ey.default.carousel,
                "aria-roledescription": "carousel",
                "aria-label": n("carousel"),
                children: [(0, a.jsx)("div", {
                    ref: u,
                    className: ey.default.strip,
                    children: r.map((e, a) => W(e, a, "(min-width: 768px) 34vw, 70vw"))
                }), (0, a.jsxs)("div", {
                    className: ey.default.carouselControls,
                    children: [(0, a.jsx)("button", {
                        type: "button",
                        className: ey.default.arrow,
                        onClick: () => _(Math.max(0, p - 1)),
                        "aria-label": n("previous"),
                        disabled: 0 === p,
                        "data-export-hide": !0,
                        children: (0, a.jsx)(e2.f, {
                            "aria-hidden": "true"
                        })
                    }), (0, a.jsx)("p", {
                        className: ey.default.counter,
                        "aria-live": "polite",
                        children: i("counter", {
                            n: p + 1,
                            total: x
                        })
                    }), (0, a.jsx)("button", {
                        type: "button",
                        className: ey.default.arrow,
                        onClick: () => _(Math.min(x - 1, p + 1)),
                        "aria-label": n("next"),
                        disabled: p === x - 1,
                        "data-export-hide": !0,
                        children: (0, a.jsx)(e6.f, {
                            "aria-hidden": "true"
                        })
                    })]
                }), x >= 10 ? (0, a.jsx)("div", {
                    className: ey.default.thumbs,
                    "data-export-hide": !0,
                    children: r.map((e, t) => (0, a.jsx)("button", {
                        type: "button",
                        className: ey.default.thumb,
                        "aria-current": t === p ? "true" : void 0,
                        "aria-label": i("jumpTo", {
                            n: t + 1
                        }),
                        onClick: () => _(t),
                        children: (0, a.jsx)(e9, {
                            photo: e,
                            alt: "",
                            sizes: "64px"
                        })
                    }, `${e.publicId||e.url}-t${t}`))
                }) : null]
            }) : (0, a.jsx)("div", {
                className: ey.default.galleryRow,
                children: r.map((e, a) => W(e, a, "single" === j ? "(min-width: 768px) 46vw, 86vw" : "(min-width: 768px) 30vw, 80vw"))
            }), x > 0 ? (0, a.jsxs)("dialog", {
                ref: c,
                className: ey.default.viewer,
                "aria-label": n("viewer"),
                onClick: e => {
                    e.target === e.currentTarget && w()
                },
                onCancel: e => {
                    e.preventDefault(), w()
                },
                onKeyDown: e => {
                    "ArrowRight" === e.key && N(1), "ArrowLeft" === e.key && N(-1)
                },
                children: [(0, a.jsxs)("div", {
                    className: ey.default.viewerStage,
                    onPointerDown: e => {
                        v.current = {
                            x: e.clientX,
                            y: e.clientY
                        }
                    },
                    onPointerUp: e => {
                        let a = v.current;
                        if (v.current = null, !a) return;
                        let t = e.clientX - a.x,
                            l = e.clientY - a.y;
                        Math.abs(t) > 48 && Math.abs(t) > Math.abs(l) && N(t < 0 ? 1 : -1)
                    },
                    onPointerCancel: () => {
                        v.current = null
                    },
                    children: [(0, a.jsxs)("figure", {
                        className: ey.default.viewerFigure,
                        children: [(0, a.jsx)("span", {
                            className: ey.default.viewerPhoto,
                            style: null === g ? {
                                viewTransitionName: e3
                            } : void 0,
                            children: (0, a.jsx)(e9, {
                                photo: r[h],
                                alt: b(r[h]),
                                sizes: "100vw"
                            })
                        }, h), (0, a.jsxs)("figcaption", {
                            className: ey.default.viewerCaption,
                            children: [(null == (s = r[h].caption) ? void 0 : s.trim()) ? (0, a.jsx)("span", {
                                children: r[h].caption
                            }) : null, (0, a.jsx)("span", {
                                className: ey.default.viewerCount,
                                "aria-live": "polite",
                                children: i("of", {
                                    n: h + 1,
                                    total: x
                                })
                            })]
                        })]
                    }), x > 1 ? (0, a.jsxs)("span", {
                        className: ey.default.viewerPreload,
                        "aria-hidden": "true",
                        children: [(0, a.jsx)(e9, {
                            photo: r[(h + 1) % x],
                            alt: "",
                            sizes: "100vw"
                        }), (0, a.jsx)(e9, {
                            photo: r[(h - 1 + x) % x],
                            alt: "",
                            sizes: "100vw"
                        })]
                    }) : null]
                }), (0, a.jsx)("button", {
                    type: "button",
                    className: ey.default.viewerClose,
                    onClick: w,
                    "aria-label": n("close"),
                    children: (0, a.jsx)(e4.X, {
                        "aria-hidden": "true"
                    })
                }), x > 1 ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("button", {
                        type: "button",
                        className: `${ey.default.viewerStep} ${ey.default.viewerPrev}`,
                        onClick: () => N(-1),
                        "aria-label": n("previous"),
                        children: (0, a.jsx)(e2.f, {
                            "aria-hidden": "true"
                        })
                    }), (0, a.jsx)("button", {
                        type: "button",
                        className: `${ey.default.viewerStep} ${ey.default.viewerNext}`,
                        onClick: () => N(1),
                        "aria-label": n("next"),
                        children: (0, a.jsx)(e6.f, {
                            "aria-hidden": "true"
                        })
                    })]
                }) : null]
            }) : null]
        })
    }
    var at = e.i(597332);
    let al = ["petal-jasmine", "petal-marigold", "petal-genda", "petal-bud", "petal-rose"];

    function as(e, a) {
        let t = e || ((null == a ? void 0 : a.kind) === "upload" ? a.src : "");
        return {
            mark: t,
            ornament: t || (null == a ? void 0 : a.kind) !== "ornament" ? null : a.name,
            glyph: t || (null == a ? void 0 : a.kind) !== "glyph" ? "" : a.text
        }
    }

    function ar(e) {
        let {
            one: s,
            two: r,
            when: i,
            leaving: n,
            invocation: o,
            emblem: d,
            logo: c,
            onOpen: u,
            onSkip: h
        } = e, m = (0, l.r)("inviteThemes.vrindavan-raas"), {
            theme: p,
            tones: f
        } = eN(), g = (0, t.useRef)(null), y = z([s, r], 7);
        (0, t.useEffect)(() => {
            var e;
            null == (e = g.current) || e.focus({
                preventScroll: !0
            })
        }, []);
        let v = as(c, d),
            x = f.night,
            j = {
                "--silk": `url("${Y("gate-silk")}")`,
                "--zari": `url("${Y("zari-band")}")`,
                "--zari-ratio": K["zari-band"].w / K["zari-band"].h,
                "--gold": f.gold,
                "--gold-light": f.goldLight,
                "--glow": (0, k.L)(f.moonGlow, .55),
                "--shade": (0, k.L)(f.nightDeep, .55),
                "--name-scale": y,
                fontFamily: p.bodyFont
            };
        return (0, a.jsxs)("div", {
            ref: g,
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "vrindavan-gate-names",
            tabIndex: -1,
            className: `${at.default.gate} ${n?at.default.leaving:""}`,
            style: j,
            onPointerUp: e => {
                0 !== e.button || e.target.closest("[data-gate-skip]") || u()
            },
            onClick: e => {
                e.target.closest("[data-gate-skip]") || u()
            },
            onKeyDown: e => {
                if ("Escape" === e.key && h(), "Tab" !== e.key) return;
                let a = [...e.currentTarget.querySelectorAll("button:not([disabled])")];
                if (0 === a.length) return;
                let t = a[0],
                    l = a[a.length - 1],
                    s = document.activeElement;
                e.shiftKey && (s === t || s === e.currentTarget) ? (e.preventDefault(), l.focus()) : e.shiftKey || s !== l && s !== e.currentTarget || (e.preventDefault(), t.focus())
            },
            children: [(0, a.jsxs)("div", {
                className: at.default.flaps,
                "aria-hidden": "true",
                children: [(0, a.jsx)("span", {
                    className: `${at.default.flap} ${at.default.flapTop}`
                }), (0, a.jsx)("span", {
                    className: `${at.default.flap} ${at.default.flapBottom}`
                }), (0, a.jsx)("span", {
                    className: `${at.default.flap} ${at.default.flapLeft}`
                }), (0, a.jsx)("span", {
                    className: `${at.default.flap} ${at.default.flapRight}`
                })]
            }), (0, a.jsx)("button", {
                type: "button",
                "data-gate-skip": !0,
                className: at.default.skip,
                onClick: h,
                style: {
                    color: f.light,
                    borderColor: (0, k.L)(f.goldLight, .5)
                },
                children: m("gate.skip")
            }), (0, a.jsxs)("div", {
                className: `${at.default.print} ${at.default.printTop}`,
                children: [o ? (0, a.jsx)("p", {
                    className: at.default.invocation,
                    lang: B(o),
                    style: {
                        fontFamily: eb,
                        color: f.goldLight
                    },
                    children: o
                }) : null, (0, a.jsx)(_.GuestGreeting, {
                    className: at.default.guest,
                    style: {
                        fontFamily: p.headingFont,
                        color: f.goldLight
                    }
                }), (0, a.jsx)("p", {
                    className: at.default.kicker,
                    style: {
                        color: (0, k.L)(f.light, .82)
                    },
                    children: m("gate.kicker")
                }), (0, a.jsxs)("span", {
                    className: at.default.crest,
                    role: "img",
                    "aria-label": m("gate.crestAlt"),
                    children: [(0, a.jsx)("span", {
                        className: at.default.crestGlow,
                        "aria-hidden": "true"
                    }), (0, a.jsx)("img", {
                        src: Y("gate-crest"),
                        alt: "",
                        width: K["gate-crest"].w,
                        height: K["gate-crest"].h,
                        decoding: "async",
                        draggable: !1
                    })]
                }), (0, a.jsxs)("h2", {
                    id: "vrindavan-gate-names",
                    className: at.default.names,
                    style: ek(p, f.light),
                    children: [(0, a.jsx)("span", {
                        "data-couple-name": !0,
                        children: s
                    }), (0, a.jsx)("span", {
                        className: at.default.and,
                        style: {
                            fontFamily: ex,
                            color: f.goldLight
                        },
                        children: m("gate.and")
                    }), (0, a.jsx)("span", {
                        "data-couple-name": !0,
                        children: r
                    })]
                })]
            }), (0, a.jsxs)("div", {
                className: at.default.tie,
                "aria-hidden": "true",
                children: [(0, a.jsx)("span", {
                    className: `${at.default.band} ${at.default.bandLeft}`
                }), (0, a.jsx)("span", {
                    className: `${at.default.band} ${at.default.bandRight}`
                }), (0, a.jsxs)("span", {
                    className: at.default.feather,
                    children: [(0, a.jsx)("img", {
                        src: Y("morpankh"),
                        alt: "",
                        width: K.morpankh.w,
                        height: K.morpankh.h,
                        decoding: "async",
                        draggable: !1
                    }), (0, a.jsx)("span", {
                        className: at.default.sheen,
                        style: {
                            "--feather": `url("${Y("morpankh")}")`
                        }
                    })]
                }), (0, a.jsxs)("span", {
                    className: at.default.knot,
                    children: [(0, a.jsx)("img", {
                        className: `${at.default.tail} ${at.default.tailLeft}`,
                        src: Y("ribbon-tail-l"),
                        alt: "",
                        width: K["ribbon-tail-l"].w,
                        height: K["ribbon-tail-l"].h,
                        draggable: !1
                    }), (0, a.jsx)("img", {
                        className: `${at.default.tail} ${at.default.tailRight}`,
                        src: Y("ribbon-tail-r"),
                        alt: "",
                        width: K["ribbon-tail-r"].w,
                        height: K["ribbon-tail-r"].h,
                        draggable: !1
                    }), (0, a.jsx)("img", {
                        className: at.default.knotArt,
                        src: Y("ribbon-knot"),
                        alt: "",
                        width: K["ribbon-knot"].w,
                        height: K["ribbon-knot"].h,
                        draggable: !1
                    })]
                })]
            }), (0, a.jsxs)("button", {
                type: "button",
                "data-invitation-gate": !0,
                className: at.default.seal,
                "aria-label": m("gate.openLabel", {
                    names: `${s} & ${r}`
                }),
                onClick: e => {
                    e.stopPropagation(), u()
                },
                children: [(0, a.jsx)("span", {
                    className: at.default.sealGlow,
                    "aria-hidden": "true"
                }), (0, a.jsx)("img", {
                    className: at.default.sealRim,
                    src: Y("medallion"),
                    alt: "",
                    width: K.medallion.w,
                    height: K.medallion.h,
                    draggable: !1,
                    "aria-hidden": "true"
                }), (0, a.jsx)("span", {
                    className: at.default.sealFace,
                    "aria-hidden": "true",
                    children: v.mark ? (0, a.jsx)("span", {
                        className: at.default.sealMark,
                        style: {
                            "--mark": `url("${v.mark}")`,
                            backgroundColor: x
                        }
                    }) : "morpankh" === v.ornament ? (0, a.jsx)(eg.E, {
                        gold: x,
                        deep: x,
                        eye: f.teal,
                        size: 58
                    }) : v.ornament ? (0, a.jsx)(eg.M, {
                        gold: x,
                        deep: x,
                        eye: f.teal,
                        size: 62
                    }) : v.glyph ? (0, a.jsx)("span", {
                        className: at.default.sealGlyph,
                        lang: B(v.glyph),
                        style: {
                            fontFamily: eb,
                            color: x
                        },
                        children: v.glyph
                    }) : null
                })]
            }), (0, a.jsxs)("div", {
                className: `${at.default.print} ${at.default.printBottom}`,
                children: [i ? (0, a.jsx)("p", {
                    className: at.default.when,
                    style: {
                        fontFamily: p.headingFont,
                        color: f.light
                    },
                    children: i
                }) : null, (0, a.jsx)("p", {
                    className: at.default.hint,
                    style: {
                        color: (0, k.L)(f.goldLight, .9)
                    },
                    children: m("gate.hint")
                })]
            }), (0, a.jsx)("div", {
                className: at.default.puff,
                "aria-hidden": "true",
                children: Array.from({
                    length: 14
                }, (e, t) => {
                    let l = t / 14 * Math.PI * 2 + .6 * G(7, t, 1),
                        s = J(18, 42, G(7, t, 2));
                    return (0, a.jsx)("img", {
                        src: Y(al[t % al.length]),
                        alt: "",
                        className: at.default.puffPetal,
                        style: {
                            "--dx": `${(Math.cos(l)*s).toFixed(2)}vmin`,
                            "--dy": `${(Math.sin(l)*s-6).toFixed(2)}vmin`,
                            "--spin": `${Math.round(J(-200,200,G(7,t,3)))}deg`,
                            "--size": `${J(2.4,4.4,G(7,t,4))}vmin`,
                            animationDelay: `${J(0,160,G(7,t,5))}ms`
                        }
                    }, t)
                })
            })]
        })
    }
    let ai = ["petal-jasmine", "petal-marigold", "petal-rose", "petal-lotus"];

    function an(e) {
        var s;
        let {
            tag: r,
            caption: i,
            logo: n,
            emblem: o
        } = e, d = (0, l.r)("inviteThemes.vrindavan-raas.hashtag"), {
            theme: c,
            tones: u,
            reduce: h,
            preview: m
        } = eN(), p = (0, t.useRef)(null), [f, g] = (0, t.useState)("rest"), [y, v] = (0, t.useState)(0), x = r.trim().replace(/^#+/, ""), j = (s = `#${x}`, "u" > typeof Intl && "Segmenter" in Intl ? [...new Intl.Segmenter(void 0, {
            granularity: "grapheme"
        }).segment(s)].map(e => e.segment) : Array.from(s)), b = as(n, o), w = !h && !m;
        (0, t.useEffect)(() => {
            if (!w) return;
            let e = p.current;
            if (!e || "u" < typeof IntersectionObserver) return;
            g("armed");
            let a = new IntersectionObserver(a => {
                let [t] = a;
                e.toggleAttribute("data-live", t.isIntersecting), t.intersectionRatio >= .5 && g("play")
            }, {
                threshold: [0, .5]
            });
            return a.observe(e), () => a.disconnect()
        }, [w]);
        let N = async () => {
            try {
                await navigator.clipboard.writeText(`#${x}`), v(e => e + 1)
            } catch {}
        };
        (0, t.useEffect)(() => {
            if (!y) return;
            let e = window.setTimeout(() => v(0), 2400);
            return () => window.clearTimeout(e)
        }, [y]);
        let _ = {
            "--ht-n": j.length,
            "--ht-fit": Math.min(1, 14 / j.length),
            "--foil-a": u.goldDeep,
            "--foil-b": u.goldLight,
            "--foil-c": u.gold,
            "--quill": `url("${Y("morpankh")}")`
        };
        return (0, a.jsxs)("section", {
            ref: p,
            id: "vrindavan-hashtag",
            className: ey.default.hashtag,
            "data-phase": f,
            style: _,
            "aria-labelledby": "vrindavan-hashtag-title",
            children: [b.mark || n ? (0, a.jsxs)("span", {
                className: ey.default.htSeal,
                "aria-hidden": "true",
                "data-stamp": !0,
                children: [(0, a.jsx)("img", {
                    src: Y("medallion"),
                    alt: "",
                    width: K.medallion.w,
                    height: K.medallion.h,
                    loading: "lazy",
                    decoding: "async"
                }), (0, a.jsx)("span", {
                    className: ey.default.htSealMark,
                    style: {
                        "--mark": `url("${b.mark}")`,
                        backgroundColor: u.night
                    }
                })]
            }) : b.ornament ? (0, a.jsx)("span", {
                className: ey.default.htOrnament,
                "aria-hidden": "true",
                children: "morpankh" === b.ornament ? (0, a.jsx)(eg.E, {
                    gold: u.gold,
                    deep: u.tealDeep,
                    eye: u.teal,
                    size: 52
                }) : (0, a.jsx)(eg.M, {
                    gold: u.gold,
                    deep: u.tealDeep,
                    eye: u.teal,
                    size: 56
                })
            }) : b.glyph ? (0, a.jsx)("span", {
                className: ey.default.htGlyph,
                lang: B(b.glyph),
                "aria-hidden": "true",
                style: {
                    fontFamily: eb,
                    color: u.gold
                },
                children: b.glyph
            }) : null, (0, a.jsx)("p", {
                id: "vrindavan-hashtag-title",
                className: ey.default.htEyebrow,
                style: {
                    fontFamily: ex,
                    color: u.goldDeep
                },
                children: d("eyebrow")
            }), (0, a.jsxs)("div", {
                className: ey.default.htWriting,
                children: [(0, a.jsxs)("p", {
                    className: ey.default.htTag,
                    style: ek(c, u.teal),
                    children: [(0, a.jsxs)("span", {
                        className: "sr-only",
                        children: ["#", x]
                    }), (0, a.jsx)("span", {
                        className: ey.default.htLetters,
                        "aria-hidden": "true",
                        children: j.map((e, t) => (0, a.jsx)("span", {
                            className: ey.default.htLetter,
                            style: {
                                "--i": t
                            },
                            children: e
                        }, t))
                    })]
                }), (0, a.jsx)("span", {
                    className: ey.default.htQuill,
                    "aria-hidden": "true"
                })]
            }), (0, a.jsx)("p", {
                className: ey.default.htCaption,
                style: {
                    fontFamily: c.headingFont,
                    color: u.ink
                },
                children: (null == i ? void 0 : i.trim()) || d("caption")
            }), (0, a.jsxs)("div", {
                className: ey.default.htCopyRow,
                "data-export-hide": !0,
                children: [(0, a.jsx)("button", {
                    type: "button",
                    className: ey.default.pill,
                    onClick: N,
                    style: {
                        color: u.ink,
                        borderColor: (0, k.L)(u.gold, .8),
                        background: (0, k.L)(u.paper, .7)
                    },
                    children: d("copy")
                }), (0, a.jsx)("span", {
                    className: ey.default.htBurst,
                    "aria-hidden": "true",
                    children: y ? Array.from({
                        length: 8
                    }, (e, t) => {
                        let l = t / 8 * Math.PI * 2,
                            s = J(30, 56, G(3, t, 1));
                        return (0, a.jsx)("img", {
                            src: Y(ai[t % ai.length]),
                            alt: "",
                            className: ey.default.htPetal,
                            style: {
                                "--dx": `${(Math.cos(l)*s).toFixed(1)}px`,
                                "--dy": `${(Math.sin(l)*s).toFixed(1)}px`,
                                "--spin": `${Math.round(J(-180,180,G(3,t,2)))}deg`
                            }
                        }, t)
                    }) : null
                }, y), (0, a.jsx)("span", {
                    role: "status",
                    className: ey.default.htCopied,
                    style: {
                        color: u.goldDeep
                    },
                    children: y ? d("copied") : ""
                })]
            })]
        })
    }
    var ao = e.i(410739);

    function ad(e) {
        let {
            data: t,
            options: s,
            family: r,
            eventsFollow: i,
            one: n,
            two: o,
            when: d
        } = e, c = (0, l.r)("inviteThemes.vrindavan-raas"), {
            theme: u,
            tones: h
        } = eN(), {
            couple: m
        } = t, p = (0, w.u)(r, m), f = !!(null == p ? void 0 : p.some(e => e.parents.length > 0)), g = z([n, o], 9), y = ek(u, h.teal), v = {
            "--border": `url("${es.pichwai.src}")`,
            "--border-slice": es.pichwai.slice,
            "--paper": `url("${Y("paper")}")`,
            "--rod": `url("${Y("rod")}")`,
            "--rod-aspect": K.rod.w / K.rod.h,
            "--lamp": `url("${Y("brass-lamp")}")`,
            "--name-scale": g,
            "--cloth-ink": h.ink,
            "--hem": (0, k.L)(h.goldLight, .9),
            "--hem-shade": (0, k.L)(h.nightDeep, .35),
            "--ground": h.night,
            "--flame": (0, k.L)(h.lamplight, .75)
        };
        return (0, a.jsxs)("section", {
            id: "vrindavan-invitation",
            className: ey.default.invitation,
            style: v,
            "aria-labelledby": "vrindavan-invitation-names",
            children: [(0, a.jsx)("div", {
                className: `${ey.default.lamp} ${ey.default.lampLeft}`,
                "aria-hidden": "true",
                children: (0, a.jsx)("span", {
                    className: ey.default.lampFlame
                })
            }), (0, a.jsx)("div", {
                className: `${ey.default.lamp} ${ey.default.lampRight}`,
                "aria-hidden": "true",
                children: (0, a.jsx)("span", {
                    className: ey.default.lampFlame
                })
            }), (0, a.jsxs)("div", {
                className: ey.default.hanging,
                children: [(0, a.jsx)("div", {
                    className: ey.default.rod,
                    "aria-hidden": "true"
                }), (0, a.jsxs)("div", {
                    className: `${ey.default.clothClip} ${ey.default.tl}`,
                    children: [(0, a.jsx)("div", {
                        className: `${ey.default.cloth} ${ey.default.tl}`,
                        children: (0, a.jsxs)("div", {
                            className: ey.default.clothPaper,
                            children: [s.invocation ? (0, a.jsx)(eM.b, {
                                children: (0, a.jsx)("p", {
                                    className: ey.default.invocation,
                                    lang: B(s.invocation),
                                    style: {
                                        fontFamily: eb,
                                        color: h.teal
                                    },
                                    children: s.invocation
                                })
                            }) : null, s.emblem ? (0, a.jsx)(eM.b, {
                                children: (0, a.jsx)(eC, {
                                    emblem: s.emblem,
                                    gold: h.goldDeep,
                                    deep: h.tealDeep,
                                    eye: h.teal,
                                    label: c("invitation.emblemAlt"),
                                    className: ey.default.invEmblem
                                })
                            }) : null, s.verse.length > 0 ? (0, a.jsx)(eM.b, {
                                children: (0, a.jsx)("p", {
                                    className: ey.default.verse,
                                    lang: B(s.verse.join(" ")),
                                    style: {
                                        fontFamily: eb,
                                        color: h.tealDeep
                                    },
                                    children: s.verse.map((e, t) => (0, a.jsx)("span", {
                                        className: ey.default.verseLine,
                                        children: e
                                    }, t))
                                })
                            }) : null, m.headline ? (0, a.jsx)(eM.b, {
                                children: (0, a.jsx)("p", {
                                    className: ey.default.headline,
                                    style: {
                                        fontFamily: u.headingFont,
                                        color: h.teal
                                    },
                                    children: m.headline
                                })
                            }) : null, m.shortMessage ? (0, a.jsx)(eM.b, {
                                children: (0, a.jsx)("p", {
                                    className: ey.default.message,
                                    children: m.shortMessage
                                })
                            }) : null, (0, a.jsx)(eM.b, {
                                children: (0, a.jsxs)("h2", {
                                    id: "vrindavan-invitation-names",
                                    className: `${ey.default.inviteNames} ${f?ey.default.withParents:""}`,
                                    children: [(0, a.jsx)("span", {
                                        "data-couple-name": !0,
                                        className: ey.default.glintName,
                                        style: { ...y,
                                            "--name-ink": h.teal
                                        },
                                        children: n
                                    }), (0, a.jsx)(w.O, {
                                        as: "span",
                                        view: null == p ? void 0 : p[0],
                                        className: ey.default.parents,
                                        style: {
                                            color: h.ink
                                        },
                                        conjunctionStyle: {
                                            color: h.goldDeep
                                        }
                                    }), (0, a.jsx)("span", {
                                        className: ey.default.inviteAnd,
                                        style: {
                                            fontFamily: ex,
                                            color: h.goldDeep
                                        },
                                        children: c("invitation.and")
                                    }), (0, a.jsx)("span", {
                                        "data-couple-name": !0,
                                        className: ey.default.glintName,
                                        style: { ...y,
                                            "--name-ink": h.teal
                                        },
                                        children: o
                                    }), (0, a.jsx)(w.O, {
                                        as: "span",
                                        view: null == p ? void 0 : p[1],
                                        className: ey.default.parents,
                                        style: {
                                            color: h.ink
                                        },
                                        conjunctionStyle: {
                                            color: h.goldDeep
                                        }
                                    })]
                                })
                            }), (0, a.jsx)(eM.b, {
                                children: (0, a.jsx)(e$, {
                                    gold: h.goldDeep,
                                    deep: h.tealDeep,
                                    eye: h.teal
                                })
                            }), d.date || d.time || d.venue ? (0, a.jsx)(eM.b, {
                                children: (0, a.jsxs)("div", {
                                    className: ey.default.inviteWhen,
                                    children: [d.date ? (0, a.jsx)("p", {
                                        className: ey.default.inviteDate,
                                        style: {
                                            fontFamily: u.headingFont,
                                            color: h.teal
                                        },
                                        children: d.date
                                    }) : null, d.time ? (0, a.jsx)("p", {
                                        className: ey.default.inviteTime,
                                        children: d.time
                                    }) : null, d.venue ? (0, a.jsx)("p", {
                                        className: ey.default.inviteVenue,
                                        children: d.venue
                                    }) : null]
                                })
                            }) : null]
                        })
                    }), (0, a.jsx)("span", {
                        className: `${ey.default.hem} ${ey.default.tl}`,
                        "aria-hidden": "true"
                    })]
                })]
            }), i ? (0, a.jsxs)("div", {
                className: ey.default.toEvents,
                children: [(0, a.jsx)(eM.b, {
                    children: (0, a.jsx)("p", {
                        className: ey.default.toEventsText,
                        style: {
                            fontFamily: u.headingFont,
                            color: h.light
                        },
                        children: c("invitation.eventsIntro")
                    })
                }), (0, a.jsx)(eM.b, {
                    children: (0, a.jsx)(eW, {
                        gold: h.goldLight,
                        eye: h.teal
                    })
                })]
            }) : null]
        })
    }

    function ac(e) {
        var s;
        let {
            family: r,
            couple: i
        } = e, o = (0, l.r)("family"), d = (0, l.r)("inviteThemes.vrindavan-raas"), {
            theme: c,
            tones: u,
            reduce: h
        } = eN(), m = (0, ao.L)(), p = (0, t.useRef)(null), [f, g] = (0, t.useState)(0), y = r && "tree" !== r.style ? r : void 0, v = (null == y || null == (s = y.blessings) ? void 0 : s.trim()) ?? "", x = y ? (0, n.n)(y, i).filter(e => e.grandparents.length > 0) : [], j = !v && 0 === x.length;
        if ((0, t.useEffect)(() => {
                let e = p.current;
                if (!e || j || h || "u" < typeof IntersectionObserver) return;
                let a = [],
                    t = new IntersectionObserver(e => {
                        let [t] = e;
                        if (a.splice(0).forEach(clearTimeout), t.isIntersecting)
                            for (let e = 0; e < 3; e++) a.push(window.setTimeout(() => g((e + 1) * 2), 300 + 260 * e));
                        else g(0)
                    }, {
                        threshold: .35
                    });
                return t.observe(e), () => {
                    t.disconnect(), a.forEach(clearTimeout)
                }
            }, [j, h]), j) return null;
        let b = h ? 6 : f;
        return (0, a.jsxs)("section", {
            ref: p,
            id: "vrindavan-elders",
            className: ey.default.elders,
            "aria-labelledby": "vrindavan-elders-title",
            style: {
                "--flame": (0, k.L)(u.lamplight, .8)
            },
            children: [(0, a.jsxs)("div", {
                className: ey.default.tulsi,
                "aria-hidden": "true",
                children: [(0, a.jsx)("img", {
                    src: Y("tulsi"),
                    alt: "",
                    width: K.tulsi.w,
                    height: K.tulsi.h,
                    loading: "lazy",
                    decoding: "async",
                    draggable: !1
                }), (0, a.jsx)("div", {
                    className: ey.default.tulsiLamps,
                    children: Array.from({
                        length: 6
                    }, (e, t) => (0, a.jsxs)("span", {
                        className: ey.default.diya,
                        "data-lit": t < b ? "" : void 0,
                        style: {
                            "--i": t
                        },
                        children: [(0, a.jsx)("span", {
                            className: ey.default.diyaGlow
                        }), (0, a.jsx)("img", {
                            src: Y("diya"),
                            alt: "",
                            width: K.diya.w,
                            height: K.diya.h,
                            loading: "lazy",
                            decoding: "async",
                            draggable: !1
                        })]
                    }, t))
                })]
            }), (0, a.jsxs)("div", {
                className: ey.default.eldersCopy,
                children: [(0, a.jsx)("p", {
                    id: "vrindavan-elders-title",
                    className: ey.default.eldersTitle,
                    style: {
                        color: u.goldLight,
                        ...m
                    },
                    children: o("blessings")
                }), (0, a.jsx)("p", {
                    className: ey.default.eldersEyebrow,
                    style: {
                        fontFamily: ex,
                        color: u.goldLight
                    },
                    children: d("elders.eyebrow")
                }), x.map(e => (0, a.jsxs)("div", {
                    className: ey.default.elderSide,
                    children: [(0, a.jsx)("p", {
                        className: ey.default.elderNames,
                        style: {
                            fontFamily: c.headingFont,
                            color: u.light
                        },
                        children: (0, a.jsx)(ao.h, {
                            people: e.grandparents
                        })
                    }), (0, a.jsx)("p", {
                        className: ey.default.elderOf,
                        style: {
                            color: (0, k.L)(u.light, .72)
                        },
                        children: (0, ao.S)(o, e)
                    })]
                }, e.key)), v ? (0, a.jsx)("p", {
                    className: ey.default.blessing,
                    style: {
                        fontFamily: c.headingFont,
                        color: u.goldLight
                    },
                    children: v
                }) : null]
            })]
        })
    }
    var au = e.i(138813),
        ah = e.i(875022);

    function am(e) {
        let {
            slug: s,
            events: r,
            settings: i,
            themeConfig: n
        } = e, o = (0, l.r)("rsvp"), d = (0, l.r)("inviteThemes.vrindavan-raas.rsvp"), c = (0, x.f)(), {
            theme: u,
            tones: h,
            reduce: m,
            lite: p
        } = eN(), f = (0, ah.o)(i), g = (0, t.useRef)(null), [y, v] = (0, t.useState)(!1), j = {
            "--zari": `url("${Y("zari-band")}")`,
            "--paper": `url("${Y("paper")}")`,
            "--lamp": `url("${Y("brass-lamp")}")`,
            "--finial": `url("${Y("finial")}")`,
            "--gold": h.gold,
            "--gold-deep": h.goldDeep,
            "--teal": h.teal,
            "--on-teal": h.onTeal,
            "--ink": h.ink,
            "--muted": h.muted,
            "--line": (0, k.L)(h.gold, .7),
            "--tile": (0, k.L)(h.paper, .9),
            "--flame": (0, k.L)(h.lamplight, .8)
        };
        return (0, a.jsxs)("section", {
            id: "vrindavan-rsvp",
            className: ey.default.rsvp,
            "aria-labelledby": "vrindavan-rsvp-title",
            style: j,
            children: [(0, a.jsx)("span", {
                className: `${ey.default.rsvpLamp} ${ey.default.rsvpLampLeft}`,
                "aria-hidden": "true",
                children: (0, a.jsx)("span", {
                    className: ey.default.lampFlame
                })
            }), (0, a.jsx)("span", {
                className: `${ey.default.rsvpLamp} ${ey.default.rsvpLampRight}`,
                "aria-hidden": "true",
                children: (0, a.jsx)("span", {
                    className: ey.default.lampFlame
                })
            }), (0, a.jsx)(eM.b, {
                className: ey.default.rsvpWrap,
                children: (0, a.jsxs)("div", {
                    className: ey.default.rsvpCard,
                    "data-answered": y ? "" : void 0,
                    children: [(0, a.jsx)("span", {
                        className: ey.default.rsvpFinial,
                        "aria-hidden": "true"
                    }), f ? (0, a.jsx)("h2", {
                        id: "vrindavan-rsvp-title",
                        className: "sr-only",
                        children: d("title")
                    }) : (0, a.jsxs)("header", {
                        className: ey.default.rsvpHead,
                        children: [(0, a.jsx)("p", {
                            className: ey.default.eyebrow,
                            style: {
                                fontFamily: ex,
                                color: h.goldDeep
                            },
                            children: d("eyebrow")
                        }), (0, a.jsx)("h2", {
                            id: "vrindavan-rsvp-title",
                            className: ey.default.chapterHeading,
                            style: ek(u, h.teal),
                            children: d("title")
                        }), (0, a.jsx)(eF, {
                            color: h.gold,
                            size: 30,
                            className: ey.default.rsvpMark
                        }), (0, a.jsx)("p", {
                            className: ey.default.rsvpSub,
                            style: {
                                color: h.muted
                            },
                            children: i.deadline ? o("subheadingBy", {
                                deadline: c.date(i.deadline)
                            }) : o("subheadingPlain")
                        })]
                    }), (0, a.jsx)("div", {
                        className: ey.default.rsvpForm,
                        children: (0, a.jsx)(au.f, {
                            slug: s,
                            events: r.map(e => ({
                                id: e.id,
                                name: e.name
                            })),
                            settings: i,
                            theme: n,
                            showHeader: !1,
                            bare: !0,
                            onSubmitted: () => {
                                var e;
                                v(!0), null == (e = g.current) || e.burst(.5, .3, {
                                    phone: 36,
                                    desktop: 80
                                }, h.lotusPale)
                            }
                        })
                    }), m || p ? null : (0, a.jsx)(ef, {
                        ref: g,
                        className: ey.default.rsvpShower,
                        color: h.lamplight,
                        count: {
                            phone: 0,
                            desktop: 0
                        },
                        seed: 41
                    })]
                })
            })]
        })
    }
    let ap = e => `.${ey.default[e]}`,
        af = [
            ["cover", 0],
            ["cover", 100]
        ],
        ag = [{
            selector: `${ap("stage")} ${ap("tl")}`,
            source: ap("stage"),
            range: [
                ["contain", 0],
                ["contain", 100]
            ]
        }, {
            selector: `${ap("hanging")} ${ap("tl")}`,
            source: ap("hanging"),
            range: [
                ["entry", 0],
                ["entry", 90]
            ]
        }, {
            selector: `${ap("sceneArt")}, ${ap("windowFore")}, ${ap("fx")}`,
            range: af
        }, {
            selector: `${ap("events")} ${ap("tl")}`,
            source: ap("events"),
            range: af
        }, {
            selector: `${ap("storyAct")} ${ap("actTl")}`,
            source: ap("storyAct"),
            range: [
                ["contain", 0],
                ["contain", "--act-land"]
            ]
        }, {
            selector: ap("storyText"),
            source: ap("storyAct"),
            range: [
                ["contain", "--act-land"],
                ["contain", 100]
            ],
            property: "--sf-p2"
        }, {
            selector: `${ap("seamRule")} i, ${ap("seamFeather")}`,
            range: af
        }, {
            selector: ap("rsvpLamp"),
            source: ap("rsvp"),
            range: [
                ["entry", 0],
                ["cover", 40]
            ]
        }, {
            selector: `${ap("closing")} ${ap("tl")}`,
            source: ap("closing"),
            range: [
                ["entry-crossing", 0],
                ["entry-crossing", 100]
            ]
        }];

    function ay(e) {
        let {
            story: s,
            one: r,
            two: i,
            coverPhotoUrl: n
        } = e, o = (0, l.r)("inviteThemes.vrindavan-raas.story"), {
            theme: d,
            tones: c,
            reduce: u,
            lite: h
        } = eN(), m = I(s), p = (0, t.useRef)(null), f = (0, t.useRef)(null), g = (0, t.useRef)(null), y = (0, t.useRef)(null), [v, x] = (0, t.useState)(!1), j = U(n);
        ! function(e) {
            let {
                act: a,
                win: l,
                text: s,
                reduce: r,
                onSettle: i,
                onBurst: n
            } = e, o = (0, t.useRef)(n), d = (0, t.useRef)(i);
            (0, t.useEffect)(() => {
                o.current = n, d.current = i
            }), (0, t.useEffect)(() => {
                var e;
                let t = a.current;
                if (!t || r) return;
                let i = 0,
                    n = !1,
                    c = !1,
                    u = !1,
                    h = () => {
                        let e = l.current,
                            a = s.current;
                        if (!e || !a) return;
                        let r = Math.max(0, a.scrollHeight - e.clientHeight);
                        t.style.setProperty("--over", `${r}px`), t.style.setProperty("--act-hold", `${Math.round(1.5*r)}px`);
                        let i = 1.9 * window.innerHeight,
                            n = t.offsetHeight - window.innerHeight;
                        n > 0 && t.style.setProperty("--act-land", `${(i/n*100).toFixed(2)}`)
                    },
                    m = () => {
                        i = 0;
                        let e = 1.9 * window.innerHeight,
                            a = -t.getBoundingClientRect().top / e;
                        a > .34 && !c ? (c = !0, o.current()) : a < .08 && (c = !1);
                        let l = a >= .9;
                        l !== u && (u = l, d.current(l))
                    },
                    p = () => {
                        n && !i && (i = requestAnimationFrame(m))
                    },
                    f = new IntersectionObserver(e => {
                        let [a] = e;
                        (n = a.isIntersecting) && p()
                    }, {
                        rootMargin: "100px 0px"
                    });
                f.observe(t);
                let g = new ResizeObserver(h);
                return l.current && g.observe(l.current), s.current && g.observe(s.current), h(), null == (e = document.fonts) || e.ready.then(h).catch(() => void 0), document.addEventListener("scroll", p, {
                    passive: !0,
                    capture: !0
                }), window.addEventListener("resize", h), () => {
                    f.disconnect(), g.disconnect(), cancelAnimationFrame(i), document.removeEventListener("scroll", p, {
                        capture: !0
                    }), window.removeEventListener("resize", h)
                }
            }, [a, l, s, r])
        }({
            act: p,
            win: f,
            text: g,
            reduce: u,
            onSettle: x,
            onBurst: () => {
                var e;
                return null == (e = y.current) ? void 0 : e.burst(.5, .62, {
                    phone: 36,
                    desktop: 80
                }, c.flame)
            }
        });
        let b = {
            "--act-run": "190lvh",
            "--night-p": `url("${Y("story-night-p")}")`,
            "--night-w": `url("${Y("story-night-w")}")`,
            "--leaves": `url("${Y("lotus-leaves")}")`,
            "--leaves-ratio": K["lotus-leaves"].w / K["lotus-leaves"].h,
            "--heart": `url("${Y("lotus-heart")}")`,
            "--heart-ratio": K["lotus-heart"].w / K["lotus-heart"].h,
            "--heart-glow": (0, k.L)(c.lamplight, .85),
            "--dim": (0, k.L)(c.nightDeep, .6),
            "--card-paper": `url("${Y("paper")}")`,
            "--card-gold": c.gold,
            "--card-gold-deep": c.goldDeep,
            "--card-ink": c.ink,
            "--halo": (0, k.L)(c.moonGlow, .55),
            "--flame": (0, k.L)(c.lamplight, .8),
            "--shimmer": (0, k.L)(c.moon, .8)
        };
        return (0, a.jsx)("section", {
            ref: p,
            id: "vrindavan-story",
            className: ey.default.storyAct,
            style: b,
            "aria-labelledby": "vrindavan-story-title",
            children: (0, a.jsxs)("div", {
                className: ey.default.storyPin,
                children: [(0, a.jsx)("div", {
                    className: ey.default.storyNight,
                    "aria-hidden": "true"
                }), (0, a.jsx)("span", {
                    className: `${ey.default.shimmer} ${ey.default.actTl}`,
                    "aria-hidden": "true"
                }), (0, a.jsx)("p", {
                    className: `${ey.default.storyHint} ${ey.default.actTl}`,
                    "aria-hidden": "true",
                    style: {
                        color: (0, k.L)(c.light, .85)
                    },
                    children: o("hint")
                }), (0, a.jsxs)("div", {
                    className: ey.default.lotus,
                    "aria-hidden": "true",
                    children: [(0, a.jsx)("span", {
                        className: `${ey.default.heartGlow} ${ey.default.actTl}`
                    }), eo.slice().reverse().map(e => Array.from({
                        length: e.count
                    }, (t, l) => {
                        let s = e.count > 1 ? -e.open + 2 * e.open * l / (e.count - 1) : 0,
                            r = (e.count - 1) / 2;
                        return (0, a.jsx)("img", {
                            className: `${ey.default.petalLotus} ${ey.default.actTl}`,
                            "data-ring": e.petal,
                            src: Y(e.petal),
                            alt: "",
                            width: K[e.petal].w,
                            height: K[e.petal].h,
                            decoding: "async",
                            draggable: !1,
                            style: {
                                "--open": `${s.toFixed(1)}deg`,
                                "--closed": `${(.06*s).toFixed(2)}deg`,
                                "--ph": e.h,
                                "--petal-ratio": K[e.petal].w / K[e.petal].h,
                                zIndex: Math.round(10 * (e.count - Math.abs(l - r)))
                            }
                        }, `${e.petal}-${l}`)
                    })), (0, a.jsx)("span", {
                        className: `${ey.default.heart} ${ey.default.actTl}`
                    }), (0, a.jsx)("span", {
                        className: ey.default.leaves
                    })]
                }), u || h ? null : (0, a.jsx)(ef, {
                    ref: y,
                    className: ey.default.storyFlies,
                    color: c.flame,
                    count: {
                        phone: 10,
                        desktop: 22
                    },
                    seed: 29
                }), (0, a.jsx)("span", {
                    className: `${ey.default.storyDim} ${ey.default.actTl}`,
                    "aria-hidden": "true"
                }), (0, a.jsx)("div", {
                    className: ey.default.storyFly,
                    children: (0, a.jsxs)("article", {
                        className: `${ey.default.storyCard} ${ey.default.actTl}`,
                        "data-settled": v || u ? "" : void 0,
                        children: [(0, a.jsx)("span", {
                            className: ey.default.storyHalo,
                            "aria-hidden": "true"
                        }), (0, a.jsx)(av, {
                            className: ey.default.cardCap,
                            gold: c.gold
                        }), (0, a.jsxs)("div", {
                            className: ey.default.storyBody,
                            children: [(0, a.jsxs)("header", {
                                className: ey.default.storyHead,
                                children: [j ? (0, a.jsx)("span", {
                                    className: ey.default.portrait,
                                    children: (0, a.jsx)("img", {
                                        src: j,
                                        alt: o("portraitAlt", {
                                            names: `${r} & ${i}`
                                        }),
                                        loading: "lazy",
                                        decoding: "async",
                                        draggable: !1
                                    })
                                }) : null, (0, a.jsx)("p", {
                                    className: ey.default.storyEyebrow,
                                    style: {
                                        fontFamily: ex,
                                        color: c.goldDeep
                                    },
                                    children: o("eyebrow")
                                }), (0, a.jsx)("h2", {
                                    id: "vrindavan-story-title",
                                    className: ey.default.storyTitle,
                                    style: ek(d, c.teal),
                                    children: o("title")
                                })]
                            }), (0, a.jsx)("div", {
                                ref: f,
                                className: ey.default.storyWindow,
                                children: (0, a.jsx)("div", {
                                    ref: g,
                                    className: ey.default.storyText,
                                    "data-text": !0,
                                    children: m.map((e, t) => (0, a.jsxs)("div", {
                                        className: ey.default.storyPara,
                                        style: {
                                            transitionDelay: `${140*t}ms`
                                        },
                                        children: [t > 0 ? (0, a.jsx)(eF, {
                                            color: c.gold,
                                            size: 22,
                                            className: ey.default.storyMark
                                        }) : null, (0, a.jsx)("p", {
                                            className: 0 === t ? ey.default.dropCap : void 0,
                                            children: e
                                        })]
                                    }, t))
                                })
                            }), (0, a.jsx)("div", {
                                className: ey.default.storyLamps,
                                "aria-hidden": "true",
                                children: Array.from({
                                    length: 8
                                }, (e, t) => (0, a.jsxs)("span", {
                                    className: ey.default.cardLamp,
                                    style: {
                                        transitionDelay: `${400+(t>>1)*220}ms`
                                    },
                                    children: [(0, a.jsx)("span", {
                                        className: ey.default.diyaGlow
                                    }), (0, a.jsx)("img", {
                                        src: Y("diya"),
                                        alt: "",
                                        width: K.diya.w,
                                        height: K.diya.h,
                                        loading: "lazy",
                                        decoding: "async"
                                    })]
                                }, t))
                            })]
                        }), (0, a.jsx)(av, {
                            className: ey.default.cardFoot,
                            gold: c.gold
                        })]
                    })
                })]
            })
        })
    }

    function av(e) {
        let {
            className: t,
            gold: l
        } = e;
        return (0, a.jsxs)("span", {
            className: `${ey.default.arch} ${t}`,
            "aria-hidden": "true",
            children: [(0, a.jsx)("span", {
                className: ey.default.archPaper
            }), (0, a.jsxs)("svg", {
                viewBox: "0 0 400 96",
                preserveAspectRatio: "none",
                children: [(0, a.jsx)("path", {
                    d: "M14 96V58c0-6 4-10 10-10h14c6-14 18-20 30-18 4-14 18-22 32-18 8-12 22-18 36-14 10-12 26-18 40-12h48c14-6 30 0 40 12 14-4 28 2 36 14 14-4 28 4 32 18 12-2 24 4 30 18h14c6 0 10 4 10 10v38",
                    fill: "none",
                    stroke: l,
                    strokeWidth: "2",
                    vectorEffect: "non-scaling-stroke"
                }), (0, a.jsx)("path", {
                    d: "M200 2c5 6 5 14 0 20-5-6-5-14 0-20z",
                    fill: l
                })]
            })]
        })
    }
    let ax = "#070A22",
        aj = "#FFF8E6",
        ab = "#FFE3A3",
        aw = "#FFC9A0";

    function aN(e) {
        let {
            chapters: s,
            tones: r,
            reduce: i,
            hidden: n
        } = e, o = (0, l.r)("inviteThemes.vrindavan-raas.nav"), d = (0, t.useMemo)(() => s.map(e => e.id), [s]), c = (0, v.f)(d), u = Math.max(0, d.indexOf(c));
        return s.length < 2 ? null : (0, a.jsx)("nav", {
            className: ey.default.bansuri,
            "aria-label": o("label"),
            "data-export-hide": !0,
            "data-hidden": n ? "" : void 0,
            style: {
                "--gold": r.gold,
                "--gold-light": r.goldLight,
                "--hole": r.nightDeep,
                "--lit": r.lamplight
            },
            children: (0, a.jsx)("ol", {
                children: s.map((e, t) => (0, a.jsx)("li", {
                    children: (0, a.jsxs)("button", {
                        type: "button",
                        "aria-label": e.label,
                        "aria-current": t === u ? "step" : void 0,
                        "data-lit": t <= u ? "" : void 0,
                        onClick: () => {
                            var a;
                            return null == (a = document.getElementById(e.id)) ? void 0 : a.scrollIntoView({
                                behavior: i ? "auto" : "smooth",
                                block: "start"
                            })
                        },
                        children: [(0, a.jsx)("span", {
                            className: ey.default.hole
                        }), (0, a.jsx)("span", {
                            className: ey.default.holeLabel,
                            children: e.label
                        })]
                    })
                }, e.id))
            })
        })
    }
    e.s(["VrindavanRaasExperience", 0, function(e) {
        var v, _, $, C, F, L, T, O;
        let {
            data: q,
            theme: M,
            shareUrl: E
        } = e, D = (0, t.useMemo)(() => (0, k.f)(M), [M]), H = (0, t.useMemo)(() => {
            var e;
            let a, t, l, s, r;
            return a = [(e = D.palette).text, e.background, e.surface, e.primary, e.secondary].reduce((e, a) => (0, k.E)(e) <= (0, k.E)(a) ? e : a), t = [e.surface, e.background, e.text].reduce((e, a) => (0, k.E)(e) >= (0, k.E)(a) ? e : a), l = .12 > (0, k.E)(a) ? a : (0, k.j)(a, ax, .55), s = (0, k.E)(t) > .82 ? t : (0, k.j)(t, aj, .6), r = (0, k.j)((0, k.j)(e.primary, l, .7), ax, .4), {
                ivory: e.background,
                paper: e.surface,
                ink: e.text,
                muted: e.muted,
                teal: e.primary,
                gold: e.secondary,
                lotus: e.accent,
                light: s,
                dark: l,
                onTeal: (0, k.c)(e.primary) ? l : s,
                goldLight: (0, k.j)(e.secondary, aj, .55),
                goldDeep: (0, k.j)(e.secondary, l, .4),
                tealDeep: (0, k.j)(e.primary, l, .45),
                lotusPale: (0, k.j)(e.accent, s, .78),
                lotusDeep: (0, k.j)(e.accent, l, .35),
                night: r,
                nightDeep: (0, k.j)(r, "#000000", .42),
                nightHigh: (0, k.j)(r, e.primary, .35),
                duskPeach: (0, k.j)((0, k.j)(e.secondary, e.accent, .45), aw, .55),
                duskRose: (0, k.j)(e.accent, s, .35),
                duskLavender: (0, k.j)((0, k.j)(e.accent, r, .55), s, .3),
                duskHaze: (0, k.j)(aw, s, .4),
                moon: (0, k.j)(e.background, aj, .6),
                moonGlow: (0, k.j)(e.secondary, aj, .75),
                lamplight: (0, k.j)(e.secondary, ab, .7),
                flame: ab
            }
        }, [D.palette]), A = (0, c.f)(), P = (0, j.Y)(), B = (0, c.y)(), z = (0, r.Q)(), G = (0, r.L)(), J = (0, l.r)("inviteThemes.vrindavan-raas"), V = (0, l.r)("gifts"), Z = (0, x.f)(), Q = (0, h.f)(), X = (0, t.useRef)(null);
        (0, b.f)(X, ag);
        let {
            couple: ee
        } = q, ea = (0, t.useMemo)(() => (0, u.T)(u.e, q.sections), [q.sections]), et = (0, t.useMemo)(() => [...q.events ?? []].sort((e, a) => (e.displayOrder ?? 0) - (a.displayOrder ?? 0)), [q.events]), el = (0, t.useMemo)(() => R(et), [et]), es = (0, t.useMemo)(() => {
            var e;
            return et.find(e => "WEDDING" === e.type) ?? et.find(e => (0, W.Y)(e)) ?? et.find(e => "CUSTOM" === e.type && "wedding" === S(e)) ?? (null == (e = R(et)) ? void 0 : e.event) ?? et[0]
        }, [et]), er = (0, t.useMemo)(() => [...q.photos ?? []].sort((e, a) => (e.displayOrder ?? 0) - (a.displayOrder ?? 0)), [q.photos]), ei = (0, t.useMemo)(() => {
            var e;
            return (0, f.x)((null == (e = q.sections) ? void 0 : e.length) ? q.sections : o.n).filter(e => e.visible).sort((e, a) => e.order - a.order)
        }, [q.sections]), en = (0, g.useGifts)(), eo = (null == (v = ee.partnerOneName) ? void 0 : v.trim()) || J("hero.partnerOne"), ed = (null == (_ = ee.partnerTwoName) ? void 0 : _.trim()) || J("hero.partnerTwo"), ec = U(ee.logoUrl), eu = q.story, eh = ei.filter(e => (e => {
            switch (e) {
                case "hero":
                case "footer":
                    return !0;
                case "events":
                    return et.length > 0;
                case "story":
                    return I(eu).length > 0;
                case "family":
                    return (0, n.M)(q.family) && (0, n.i)(q.family);
                case "gallery":
                    return er.length > 0 || z;
                case "countdown":
                    return null !== el && !G;
                case "hashtag":
                    var a, t;
                    return !!(null == (t = q.hashtag) || null == (a = t.tag) ? void 0 : a.trim());
                case "special-request":
                    return (0, d.S)(q.specialRequest);
                case "gifts":
                    return !!((null == en ? void 0 : en.section) && en.funds.length > 0);
                case "rsvp":
                    return q.rsvpSettings.enabled;
                default:
                    return !1
            }
        })(e.kind)), em = eh.findIndex(e => "hero" === e.kind), ep = em >= 0 && (null == ($ = eh[em + 1]) ? void 0 : $.kind) === "events", ef = eh.some(e => "hashtag" === e.kind), eb = eh.some(e => "footer" === e.kind), eN = ei.some(e => "family" === e.kind) ? (0, w.v)(q.family) : void 0, ek = es ? [es.date ? Z.date(es.date, {
            weekday: "long"
        }) : "", (null == (C = es.city) ? void 0 : C.trim()) ?? ""].filter(Boolean).join(" · ") : "", e_ = {
            date: (null == es ? void 0 : es.date) ? Z.date(es.date, {
                weekday: "long"
            }) : "",
            time: es ? Z.eventTimeOf(es, {
                viewerTimezone: Q
            }) : "",
            venue: es ? (0, i.A)(es) : ""
        }, e$ = (0, s.usePersonalGuest)(), eW = z && null !== e$, [eC, eF] = (0, t.useState)("closed"), [eL, eT] = (0, t.useState)(0), eR = (!z || eW) && !(B && A) && "open" !== eC, eq = B && eR && "closed" === eC, eM = (0, t.useRef)(void 0);
        (0, t.useEffect)(() => {
            if (!eq) return;
            let e = document.body.style.overflow;
            return document.body.style.overflow = "hidden", () => {
                document.body.style.overflow = e
            }
        }, [eq]), (0, t.useEffect)(() => () => window.clearTimeout(eM.current), []);
        let eE = (0, t.useRef)(eC);
        (0, t.useEffect)(() => {
            eE.current = eC
        }, [eC]);
        let eA = (0, t.useCallback)(() => {
                "closed" === eE.current && (eE.current = "leaving", window.scrollTo({
                    top: 0,
                    behavior: "instant"
                }), eF("leaving"), window.clearTimeout(eM.current), eM.current = window.setTimeout(() => eF("open"), 2600))
            }, []),
            eP = (0, t.useCallback)(() => {
                window.clearTimeout(eM.current), eF("open")
            }, []),
            eI = (0, t.useCallback)(() => {
                window.scrollTo({
                    top: 0,
                    behavior: "instant"
                }), eT(e => e + 1), A || z && !eW || eF("closed")
            }, [A, z, eW]),
            eB = (0, t.useMemo)(() => ({
                theme: D,
                tones: H,
                reduce: A,
                lite: P,
                preview: z
            }), [D, H, A, P, z]),
            ez = (0, t.useMemo)(() => ({ ...D,
                palette: { ...D.palette,
                    primary: H.night,
                    accent: H.gold,
                    background: H.ivory
                }
            }), [D, H]),
            eG = (0, t.useMemo)(() => ({ ...D,
                palette: { ...D.palette,
                    accent: H.gold
                }
            }), [D, H]),
            eV = eh.map(e => (e => {
                switch (e) {
                    case "hero":
                        return {
                            kind: e,
                            id: "vrindavan-arrival",
                            label: J("nav.invitation"),
                            top: H.nightDeep,
                            bottom: H.night,
                            node: (0, a.jsxs)(t.Fragment, {
                                children: [(0, a.jsx)(eO, {
                                    title: q.title,
                                    one: eo,
                                    two: ed,
                                    greet: !eR,
                                    afterGate: eR
                                }), (0, a.jsx)(ad, {
                                    data: q,
                                    options: ea,
                                    family: eN,
                                    eventsFollow: ep,
                                    one: eo,
                                    two: ed,
                                    when: e_
                                }), (0, a.jsx)(ac, {
                                    family: eN,
                                    couple: ee
                                })]
                            }, `hero-${eL}`)
                        };
                    case "events":
                        return {
                            kind: e,
                            id: "vrindavan-events",
                            label: J("nav.events"),
                            top: H.ivory,
                            bottom: H.ivory,
                            node: (0, a.jsx)(eJ, {
                                events: et
                            })
                        };
                    case "story":
                        return {
                            kind: e,
                            id: "vrindavan-story",
                            label: J("nav.story"),
                            top: H.nightDeep,
                            bottom: H.nightDeep,
                            node: (0, a.jsx)(ay, {
                                story: eu,
                                one: eo,
                                two: ed,
                                coverPhotoUrl: ee.coverPhotoUrl
                            })
                        };
                    case "family":
                        return {
                            kind: e,
                            id: "vrindavan-family",
                            label: J("nav.family"),
                            top: H.ivory,
                            bottom: H.ivory,
                            node: (0, a.jsxs)("section", {
                                id: "vrindavan-family",
                                className: ey.default.family,
                                "aria-labelledby": "vrindavan-family-title",
                                style: {
                                    "--bridge": `url("${Y("bridge")}")`,
                                    "--bridge-ratio": K.bridge.w / K.bridge.h
                                },
                                children: [(0, a.jsx)("span", {
                                    className: ey.default.familyFeather,
                                    "aria-hidden": "true",
                                    children: (0, a.jsx)(eg.E, {
                                        gold: H.gold,
                                        deep: H.tealDeep,
                                        eye: H.teal,
                                        size: 46
                                    })
                                }), (0, a.jsx)(eS, {
                                    id: "vrindavan-family-title",
                                    eyebrow: J("family.eyebrow"),
                                    title: J("family.title")
                                }), (0, a.jsx)(m.f, {
                                    family: q.family,
                                    couple: ee,
                                    theme: eG,
                                    variant: "panel",
                                    showHeading: !1,
                                    className: ey.default.familyPanel
                                })]
                            })
                        };
                    case "gallery":
                        return {
                            kind: e,
                            id: "vrindavan-gallery",
                            label: J("nav.gallery"),
                            top: H.nightDeep,
                            bottom: H.night,
                            node: (0, a.jsx)(aa, {
                                photos: er
                            })
                        };
                    case "countdown":
                        return el ? {
                            kind: e,
                            id: "vrindavan-countdown",
                            label: J("nav.countdown"),
                            top: H.night,
                            bottom: H.nightDeep,
                            node: (0, a.jsx)(eU, {
                                target: el.at,
                                event: el.event,
                                events: et
                            })
                        } : null;
                    case "hashtag":
                        var l, s;
                        return {
                            kind: e,
                            id: "vrindavan-hashtag",
                            label: J("nav.hashtag"),
                            top: H.ivory,
                            bottom: H.ivory,
                            node: (0, a.jsx)(an, {
                                tag: (null == (l = q.hashtag) ? void 0 : l.tag) ?? "",
                                caption: null == (s = q.hashtag) ? void 0 : s.caption,
                                logo: ec,
                                emblem: ea.emblem
                            })
                        };
                    case "special-request":
                        return {
                            kind: e,
                            id: "vrindavan-request",
                            label: J("nav.request"),
                            top: H.ivory,
                            bottom: H.ivory,
                            node: (0, a.jsx)("section", {
                                id: "vrindavan-request",
                                className: ey.default.request,
                                style: {
                                    "--finial": `url("${Y("finial")}")`
                                },
                                children: (0, a.jsx)(p.SpecialRequestSection, {
                                    specialRequest: q.specialRequest,
                                    theme: ez,
                                    variant: "panel",
                                    className: ey.default.cartouche
                                })
                            })
                        };
                    case "gifts":
                        return {
                            kind: e,
                            id: "vrindavan-gifts",
                            label: V("nav"),
                            top: H.ivory,
                            bottom: H.ivory,
                            node: (0, a.jsx)("section", {
                                id: "vrindavan-gifts",
                                className: "px-5 py-16 sm:py-20",
                                children: (0, a.jsx)(y.f, {
                                    theme: ez,
                                    variant: "panel"
                                })
                            })
                        };
                    case "rsvp":
                        return {
                            kind: e,
                            id: "vrindavan-rsvp",
                            label: J("nav.rsvp"),
                            top: H.ivory,
                            bottom: H.ivory,
                            node: (0, a.jsx)(am, {
                                slug: q.slug,
                                events: et,
                                settings: q.rsvpSettings,
                                themeConfig: M
                            })
                        };
                    case "footer":
                        return {
                            kind: e,
                            id: "vrindavan-closing",
                            label: J("nav.closing"),
                            top: H.night,
                            bottom: H.nightDeep,
                            node: (0, a.jsx)(eD, {
                                one: eo,
                                two: ed,
                                date: e_.date,
                                wedding: es,
                                events: et,
                                logo: ef ? void 0 : ec,
                                shareUrl: E,
                                shareSettings: q.shareSettings,
                                watermarkEnabled: q.watermarkEnabled,
                                onReplay: A || z && !eW ? void 0 : eI
                            })
                        };
                    default:
                        return null
                }
            })(e.kind)).filter(e => null !== e);
        return (0, a.jsxs)(ew.Provider, {
            value: eB,
            children: [eR ? (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)("style", {
                    dangerouslySetInnerHTML: {
                        __html: `html, body { background-color: ${(0,k.F)("#181b3e")} !important; }`
                    }
                }), (0, a.jsx)(ar, {
                    one: eo,
                    two: ed,
                    when: ek,
                    leaving: "leaving" === eC,
                    invocation: ea.invocation,
                    emblem: ea.emblem,
                    logo: ec,
                    onOpen: eA,
                    onSkip: eP
                }, `gate-${eL}`)]
            }) : null, (0, a.jsxs)("main", {
                ref: X,
                inert: eq,
                className: ey.default.page,
                "data-motion": P ? "lite" : void 0,
                style: {
                    "--ivory": H.ivory,
                    "--paper-tone": H.paper,
                    "--ink": H.ink,
                    "--muted": H.muted,
                    "--teal": H.teal,
                    "--gold": H.gold,
                    "--gold-light": H.goldLight,
                    "--gold-deep": H.goldDeep,
                    "--lotus": H.lotus,
                    "--night": H.night,
                    "--night-deep": H.nightDeep,
                    "--light": H.light,
                    "--focus": H.teal,
                    "--script": ex,
                    background: H.ivory,
                    color: H.ink,
                    fontFamily: D.bodyFont
                },
                children: [(0, a.jsx)(N.f, {
                    families: [null == M ? void 0 : M.fonts.heading, null == M ? void 0 : M.fonts.body, ev, ej]
                }), (T = eV, O = H, T.map((e, l) => {
                    let s = T[l - 1],
                        r = null;
                    if (s) {
                        let t = (0, k.c)(s.bottom),
                            l = (0, k.c)(e.top),
                            i = t && !l ? `, ${(0,k.j)(O.lotusPale,s.bottom,.5)} 34%, ${O.duskLavender} 68%` : !t && l ? `, ${O.duskLavender} 32%, ${O.moon} 72%` : `, ${(0,k.j)(s.bottom,e.top,.5)} 50%`,
                            n = !l && !t;
                        r = (0, a.jsx)("div", {
                            className: ey.default.seam,
                            "aria-hidden": "true",
                            style: {
                                background: `linear-gradient(180deg, ${s.bottom}${i}, ${e.top})`
                            },
                            children: (0, a.jsxs)("span", {
                                className: ey.default.seamRule,
                                style: {
                                    "--rule": n ? (0, k.L)(O.goldLight, .7) : O.gold
                                },
                                children: [(0, a.jsx)("i", {}), (0, a.jsx)("span", {
                                    className: ey.default.seamFeather,
                                    children: (0, a.jsx)(eg.E, {
                                        gold: n ? O.goldLight : O.goldDeep,
                                        deep: O.tealDeep,
                                        eye: O.teal,
                                        size: 34
                                    })
                                }), (0, a.jsx)("i", {})]
                            })
                        })
                    }
                    return (0, a.jsxs)(t.Fragment, {
                        children: [r, e.node]
                    }, `${e.kind}-${l}`)
                })), !eb && q.watermarkEnabled ? (0, a.jsx)("div", {
                    className: ey.default.coda,
                    style: {
                        background: (null == (F = eV.at(-1)) ? void 0 : F.bottom) ?? H.ivory
                    },
                    children: (0, a.jsx)(eH, {
                        color: (0, k.c)((null == (L = eV.at(-1)) ? void 0 : L.bottom) ?? H.ivory) ? H.muted : (0, k.L)(H.light, .6)
                    })
                }) : null]
            }), eR && "leaving" !== eC ? null : (0, a.jsx)(aN, {
                chapters: eV,
                tones: H,
                reduce: A,
                hidden: eR
            })]
        })
    }], 964766)
}, 65914, e => {
    "use strict";
    var a = e.i(729176);

    function t(e) {
        let {
            gold: t,
            deep: l,
            eye: s = l
        } = e;
        return (0, a.jsxs)("g", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [(0, a.jsx)("path", {
                d: "M20 62C19.2 48 19.4 34 20.4 22",
                fill: "none",
                stroke: t,
                strokeWidth: "1.3"
            }), [30, 36, 42, 48, 54].map((e, l) => (0, a.jsxs)("g", {
                stroke: t,
                strokeWidth: "0.7",
                strokeOpacity: .75 - .1 * l,
                fill: "none",
                children: [(0, a.jsx)("path", {
                    d: `M20 ${e}c-3.5-2-6.2-4.6-8-8`
                }), (0, a.jsx)("path", {
                    d: `M20 ${e}c3.5-2 6.2-4.6 8-8`
                })]
            }, e)), (0, a.jsx)("path", {
                d: "M20 3c9 5 13 14 11 22-1.6 6.4-6 10.6-11 12.6-5-2-9.4-6.2-11-12.6C7 17 11 8 20 3z",
                fill: t,
                fillOpacity: "0.16",
                stroke: t,
                strokeWidth: "1.1"
            }), (0, a.jsx)("ellipse", {
                cx: "20",
                cy: "19",
                rx: "6.6",
                ry: "8.6",
                fill: "none",
                stroke: t,
                strokeWidth: "1.1"
            }), (0, a.jsx)("ellipse", {
                cx: "20",
                cy: "19.6",
                rx: "4.3",
                ry: "5.8",
                fill: s,
                fillOpacity: "0.55"
            }), (0, a.jsx)("ellipse", {
                cx: "20",
                cy: "20.4",
                rx: "2.1",
                ry: "2.9",
                fill: l
            })]
        })
    }
    e.s(["M", 0, function(e) {
        let {
            gold: l,
            deep: s,
            eye: r,
            size: i = 44,
            className: n,
            style: o
        } = e;
        return (0, a.jsxs)("svg", {
            viewBox: "0 0 64 64",
            width: i,
            height: i,
            className: n,
            style: o,
            "aria-hidden": "true",
            children: [(0, a.jsx)("g", {
                transform: "translate(36 2) rotate(24) scale(0.62)",
                children: (0, a.jsx)(t, {
                    gold: l,
                    deep: s,
                    eye: r
                })
            }), (0, a.jsxs)("g", {
                transform: "rotate(-28 32 32)",
                strokeLinecap: "round",
                children: [(0, a.jsx)("rect", {
                    x: "3",
                    y: "29",
                    width: "58",
                    height: "6",
                    rx: "3",
                    fill: l,
                    fillOpacity: "0.2",
                    stroke: l,
                    strokeWidth: "1.2"
                }), [8.5, 11, 53, 55.5].map(e => (0, a.jsx)("path", {
                    d: `M${e} 29.4v5.2`,
                    stroke: l,
                    strokeWidth: "1"
                }, e)), (0, a.jsx)("circle", {
                    cx: "17",
                    cy: "32",
                    r: "1.25",
                    fill: s
                }), [26, 31, 36, 41, 46].map(e => (0, a.jsx)("circle", {
                    cx: e,
                    cy: "32",
                    r: "1.05",
                    fill: s
                }, e)), (0, a.jsx)("path", {
                    d: "M9.8 35c-.6 4 .4 7.4 2.6 10.2",
                    fill: "none",
                    stroke: l,
                    strokeWidth: "0.9"
                }), (0, a.jsx)("circle", {
                    cx: "13",
                    cy: "46.6",
                    r: "1.6",
                    fill: l
                }), (0, a.jsx)("path", {
                    d: "M13 48.2l-1.6 5M13 48.2v5.4M13 48.2l1.6 5",
                    stroke: l,
                    strokeWidth: "0.7"
                })]
            })]
        })
    }, "E", 0, function(e) {
        let {
            gold: l,
            deep: s,
            eye: r,
            size: i = 44,
            className: n,
            style: o
        } = e;
        return (0, a.jsx)("svg", {
            viewBox: "0 0 40 64",
            width: 40 * i / 64,
            height: i,
            className: n,
            style: o,
            "aria-hidden": "true",
            children: (0, a.jsx)(t, {
                gold: l,
                deep: s,
                eye: r
            })
        })
    }])
}, 597332, e => {
    e.v({
        and: "PKpoJa_and",
        band: "PKpoJa_band",
        bandLeft: "PKpoJa_bandLeft",
        bandRight: "PKpoJa_bandRight",
        crest: "PKpoJa_crest",
        crestGlow: "PKpoJa_crestGlow",
        feather: "PKpoJa_feather",
        flap: "PKpoJa_flap",
        flapBottom: "PKpoJa_flapBottom",
        flapLeft: "PKpoJa_flapLeft",
        flapRight: "PKpoJa_flapRight",
        flapTop: "PKpoJa_flapTop",
        flaps: "PKpoJa_flaps",
        gate: "PKpoJa_gate",
        guest: "PKpoJa_guest",
        hint: "PKpoJa_hint",
        invocation: "PKpoJa_invocation",
        kicker: "PKpoJa_kicker",
        knot: "PKpoJa_knot",
        knotArt: "PKpoJa_knotArt",
        leaving: "PKpoJa_leaving",
        names: "PKpoJa_names",
        print: "PKpoJa_print",
        printBottom: "PKpoJa_printBottom",
        printTop: "PKpoJa_printTop",
        puff: "PKpoJa_puff",
        puffPetal: "PKpoJa_puffPetal",
        seal: "PKpoJa_seal",
        sealFace: "PKpoJa_sealFace",
        sealGlow: "PKpoJa_sealGlow",
        sealGlyph: "PKpoJa_sealGlyph",
        sealMark: "PKpoJa_sealMark",
        sealRim: "PKpoJa_sealRim",
        sheen: "PKpoJa_sheen",
        skip: "PKpoJa_skip",
        tail: "PKpoJa_tail",
        tailLeft: "PKpoJa_tailLeft",
        tailRight: "PKpoJa_tailRight",
        tie: "PKpoJa_tie",
        vrHint: "PKpoJa_vrHint",
        vrMoonBreath: "PKpoJa_vrMoonBreath",
        vrPuff: "PKpoJa_vrPuff",
        vrSealGlow: "PKpoJa_vrSealGlow",
        vrSheen: "PKpoJa_vrSheen",
        vrTailSway: "PKpoJa_vrTailSway",
        when: "PKpoJa_when"
    })
}, 205350, e => {
    e.v({
        actTl: "O7uy8q_actTl",
        actor: "O7uy8q_actor",
        actorGlow: "O7uy8q_actorGlow",
        actors: "O7uy8q_actors",
        arch: "O7uy8q_arch",
        archPaper: "O7uy8q_archPaper",
        arrivalCue: "O7uy8q_arrivalCue",
        arrow: "O7uy8q_arrow",
        bank: "O7uy8q_bank",
        bansuri: "O7uy8q_bansuri",
        bansuriRule: "O7uy8q_bansuriRule",
        bird: "O7uy8q_bird",
        birds: "O7uy8q_birds",
        blessing: "O7uy8q_blessing",
        boat: "O7uy8q_boat",
        card: "O7uy8q_card",
        cardActions: "O7uy8q_cardActions",
        cardAddress: "O7uy8q_cardAddress",
        cardCap: "O7uy8q_cardCap",
        cardCount: "O7uy8q_cardCount",
        cardDate: "O7uy8q_cardDate",
        cardFacts: "O7uy8q_cardFacts",
        cardFoot: "O7uy8q_cardFoot",
        cardInvocation: "O7uy8q_cardInvocation",
        cardLamp: "O7uy8q_cardLamp",
        cardName: "O7uy8q_cardName",
        cardNote: "O7uy8q_cardNote",
        cardRule: "O7uy8q_cardRule",
        cardWrap: "O7uy8q_cardWrap",
        carousel: "O7uy8q_carousel",
        carouselControls: "O7uy8q_carouselControls",
        cartouche: "O7uy8q_cartouche",
        cdStars: "O7uy8q_cdStars",
        chapterHeading: "O7uy8q_chapterHeading",
        chapterTitle: "O7uy8q_chapterTitle",
        clock: "O7uy8q_clock",
        closing: "O7uy8q_closing",
        closingActions: "O7uy8q_closingActions",
        closingAnd: "O7uy8q_closingAnd",
        closingCopy: "O7uy8q_closingCopy",
        closingDate: "O7uy8q_closingDate",
        closingMark: "O7uy8q_closingMark",
        closingNames: "O7uy8q_closingNames",
        closingRiver: "O7uy8q_closingRiver",
        closingShare: "O7uy8q_closingShare",
        closingShareLabel: "O7uy8q_closingShareLabel",
        closingThanks: "O7uy8q_closingThanks",
        cloth: "O7uy8q_cloth",
        clothClip: "O7uy8q_clothClip",
        clothPaper: "O7uy8q_clothPaper",
        cloud: "O7uy8q_cloud",
        clouds: "O7uy8q_clouds",
        coda: "O7uy8q_coda",
        countdown: "O7uy8q_countdown",
        counter: "O7uy8q_counter",
        crown: "O7uy8q_crown",
        cueButton: "O7uy8q_cueButton",
        cueChevrons: "O7uy8q_cueChevrons",
        cueText: "O7uy8q_cueText",
        cueTrack: "O7uy8q_cueTrack",
        cut: "O7uy8q_cut",
        diya: "O7uy8q_diya",
        diyaGlow: "O7uy8q_diyaGlow",
        dropCap: "O7uy8q_dropCap",
        elderNames: "O7uy8q_elderNames",
        elderOf: "O7uy8q_elderOf",
        elderSide: "O7uy8q_elderSide",
        elders: "O7uy8q_elders",
        eldersCopy: "O7uy8q_eldersCopy",
        eldersEyebrow: "O7uy8q_eldersEyebrow",
        eldersTitle: "O7uy8q_eldersTitle",
        ember: "O7uy8q_ember",
        emblem: "O7uy8q_emblem",
        emblemGlyph: "O7uy8q_emblemGlyph",
        emblemMark: "O7uy8q_emblemMark",
        emptyHint: "O7uy8q_emptyHint",
        events: "O7uy8q_events",
        eyebrow: "O7uy8q_eyebrow",
        family: "O7uy8q_family",
        familyFeather: "O7uy8q_familyFeather",
        familyPanel: "O7uy8q_familyPanel",
        farBank: "O7uy8q_farBank",
        featherArrow: "O7uy8q_featherArrow",
        fireflies: "O7uy8q_fireflies",
        floatLamp: "O7uy8q_floatLamp",
        flock: "O7uy8q_flock",
        fx: "O7uy8q_fx",
        fxGlow: "O7uy8q_fxGlow",
        gallery: "O7uy8q_gallery",
        galleryRow: "O7uy8q_galleryRow",
        garland: "O7uy8q_garland",
        glintName: "O7uy8q_glintName",
        glitter: "O7uy8q_glitter",
        goodBody: "O7uy8q_goodBody",
        goodEyebrow: "O7uy8q_goodEyebrow",
        goodFact: "O7uy8q_goodFact",
        goodFinial: "O7uy8q_goodFinial",
        goodIcon: "O7uy8q_goodIcon",
        goodLabel: "O7uy8q_goodLabel",
        goodLink: "O7uy8q_goodLink",
        goodList: "O7uy8q_goodList",
        goodRule: "O7uy8q_goodRule",
        goodTitle: "O7uy8q_goodTitle",
        goodToKnow: "O7uy8q_goodToKnow",
        hanging: "O7uy8q_hanging",
        hashtag: "O7uy8q_hashtag",
        haze: "O7uy8q_haze",
        headline: "O7uy8q_headline",
        heart: "O7uy8q_heart",
        heartGlow: "O7uy8q_heartGlow",
        hem: "O7uy8q_hem",
        heroCopy: "O7uy8q_heroCopy",
        heroGuest: "O7uy8q_heroGuest",
        heroGuestName: "O7uy8q_heroGuestName",
        heroInvited: "O7uy8q_heroInvited",
        heroName: "O7uy8q_heroName",
        heroNames: "O7uy8q_heroNames",
        heroWeds: "O7uy8q_heroWeds",
        hills: "O7uy8q_hills",
        hole: "O7uy8q_hole",
        holeLabel: "O7uy8q_holeLabel",
        htBurst: "O7uy8q_htBurst",
        htCaption: "O7uy8q_htCaption",
        htCopied: "O7uy8q_htCopied",
        htCopyRow: "O7uy8q_htCopyRow",
        htEyebrow: "O7uy8q_htEyebrow",
        htGlyph: "O7uy8q_htGlyph",
        htLetter: "O7uy8q_htLetter",
        htLetters: "O7uy8q_htLetters",
        htOrnament: "O7uy8q_htOrnament",
        htPetal: "O7uy8q_htPetal",
        htQuill: "O7uy8q_htQuill",
        htSeal: "O7uy8q_htSeal",
        htSealMark: "O7uy8q_htSealMark",
        htTag: "O7uy8q_htTag",
        htWriting: "O7uy8q_htWriting",
        invEmblem: "O7uy8q_invEmblem",
        invitation: "O7uy8q_invitation",
        inviteAnd: "O7uy8q_inviteAnd",
        inviteDate: "O7uy8q_inviteDate",
        inviteNames: "O7uy8q_inviteNames",
        inviteTime: "O7uy8q_inviteTime",
        inviteVenue: "O7uy8q_inviteVenue",
        inviteWhen: "O7uy8q_inviteWhen",
        invocation: "O7uy8q_invocation",
        jhoola: "O7uy8q_jhoola",
        kadamba: "O7uy8q_kadamba",
        lamp: "O7uy8q_lamp",
        lampFlame: "O7uy8q_lampFlame",
        lampLeft: "O7uy8q_lampLeft",
        lampReflection: "O7uy8q_lampReflection",
        lampRight: "O7uy8q_lampRight",
        leaves: "O7uy8q_leaves",
        life: "O7uy8q_life",
        lifeDab: "O7uy8q_lifeDab",
        lifeFlame: "O7uy8q_lifeFlame",
        lifeMoon: "O7uy8q_lifeMoon",
        lifeShimmer: "O7uy8q_lifeShimmer",
        lifeSteam: "O7uy8q_lifeSteam",
        lotus: "O7uy8q_lotus",
        lotusDivider: "O7uy8q_lotusDivider",
        message: "O7uy8q_message",
        moon: "O7uy8q_moon",
        moonBody: "O7uy8q_moonBody",
        moonDisc: "O7uy8q_moonDisc",
        moonHalo: "O7uy8q_moonHalo",
        moonLit: "O7uy8q_moonLit",
        moonShadow: "O7uy8q_moonShadow",
        moonWarm: "O7uy8q_moonWarm",
        page: "O7uy8q_page",
        parents: "O7uy8q_parents",
        petal: "O7uy8q_petal",
        petalLotus: "O7uy8q_petalLotus",
        photoButton: "O7uy8q_photoButton",
        photoCaption: "O7uy8q_photoCaption",
        photoFigure: "O7uy8q_photoFigure",
        photoFrame: "O7uy8q_photoFrame",
        photoImg: "O7uy8q_photoImg",
        photoSheen: "O7uy8q_photoSheen",
        pill: "O7uy8q_pill",
        pin: "O7uy8q_pin",
        placeholder: "O7uy8q_placeholder",
        plane: "O7uy8q_plane",
        portrait: "O7uy8q_portrait",
        rail: "O7uy8q_rail",
        railClip: "O7uy8q_railClip",
        railDiya: "O7uy8q_railDiya",
        railInner: "O7uy8q_railInner",
        replay: "O7uy8q_replay",
        request: "O7uy8q_request",
        restingFeather: "O7uy8q_restingFeather",
        river: "O7uy8q_river",
        rod: "O7uy8q_rod",
        roll: "O7uy8q_roll",
        rollStrip: "O7uy8q_rollStrip",
        row: "O7uy8q_row",
        rows: "O7uy8q_rows",
        rsvp: "O7uy8q_rsvp",
        rsvpCard: "O7uy8q_rsvpCard",
        rsvpFinial: "O7uy8q_rsvpFinial",
        rsvpForm: "O7uy8q_rsvpForm",
        rsvpHead: "O7uy8q_rsvpHead",
        rsvpLamp: "O7uy8q_rsvpLamp",
        rsvpLampLeft: "O7uy8q_rsvpLampLeft",
        rsvpLampRight: "O7uy8q_rsvpLampRight",
        rsvpMark: "O7uy8q_rsvpMark",
        rsvpShower: "O7uy8q_rsvpShower",
        rsvpSub: "O7uy8q_rsvpSub",
        rsvpWrap: "O7uy8q_rsvpWrap",
        sceneArt: "O7uy8q_sceneArt",
        seam: "O7uy8q_seam",
        seamFeather: "O7uy8q_seamFeather",
        seamRule: "O7uy8q_seamRule",
        shimmer: "O7uy8q_shimmer",
        shoot: "O7uy8q_shoot",
        shootAmbient: "O7uy8q_shootAmbient",
        shootArrive: "O7uy8q_shootArrive",
        sky: "O7uy8q_sky",
        skyDusk: "O7uy8q_skyDusk",
        skyNight: "O7uy8q_skyNight",
        spark: "O7uy8q_spark",
        stage: "O7uy8q_stage",
        stars: "O7uy8q_stars",
        steps: "O7uy8q_steps",
        storyAct: "O7uy8q_storyAct",
        storyBody: "O7uy8q_storyBody",
        storyCard: "O7uy8q_storyCard",
        storyDim: "O7uy8q_storyDim",
        storyEyebrow: "O7uy8q_storyEyebrow",
        storyFlies: "O7uy8q_storyFlies",
        storyFly: "O7uy8q_storyFly",
        storyHalo: "O7uy8q_storyHalo",
        storyHead: "O7uy8q_storyHead",
        storyHint: "O7uy8q_storyHint",
        storyLamps: "O7uy8q_storyLamps",
        storyMark: "O7uy8q_storyMark",
        storyNight: "O7uy8q_storyNight",
        storyPara: "O7uy8q_storyPara",
        storyPin: "O7uy8q_storyPin",
        storyText: "O7uy8q_storyText",
        storyTitle: "O7uy8q_storyTitle",
        storyWindow: "O7uy8q_storyWindow",
        strip: "O7uy8q_strip",
        swatch: "O7uy8q_swatch",
        thumb: "O7uy8q_thumb",
        thumbs: "O7uy8q_thumbs",
        tile: "O7uy8q_tile",
        tileDigits: "O7uy8q_tileDigits",
        tileGlint: "O7uy8q_tileGlint",
        tileLabel: "O7uy8q_tileLabel",
        tl: "O7uy8q_tl",
        toEvents: "O7uy8q_toEvents",
        toEventsText: "O7uy8q_toEventsText",
        toran: "O7uy8q_toran",
        toranSway: "O7uy8q_toranSway",
        tree: "O7uy8q_tree",
        tulsi: "O7uy8q_tulsi",
        tulsiLamps: "O7uy8q_tulsiLamps",
        veil: "O7uy8q_veil",
        verse: "O7uy8q_verse",
        verseLine: "O7uy8q_verseLine",
        viewer: "O7uy8q_viewer",
        viewerCaption: "O7uy8q_viewerCaption",
        viewerClose: "O7uy8q_viewerClose",
        viewerCount: "O7uy8q_viewerCount",
        viewerFigure: "O7uy8q_viewerFigure",
        viewerNext: "O7uy8q_viewerNext",
        viewerPhoto: "O7uy8q_viewerPhoto",
        viewerPreload: "O7uy8q_viewerPreload",
        viewerPrev: "O7uy8q_viewerPrev",
        viewerStage: "O7uy8q_viewerStage",
        viewerStep: "O7uy8q_viewerStep",
        vrBank: "O7uy8q_vrBank",
        vrBirdBob: "O7uy8q_vrBirdBob",
        vrBirdsHome: "O7uy8q_vrBirdsHome",
        vrBloomInner: "O7uy8q_vrBloomInner",
        vrBloomMiddle: "O7uy8q_vrBloomMiddle",
        vrBloomOuter: "O7uy8q_vrBloomOuter",
        vrBoatDrift: "O7uy8q_vrBoatDrift",
        vrBob: "O7uy8q_vrBob",
        vrCardRise: "O7uy8q_vrCardRise",
        vrChevron: "O7uy8q_vrChevron",
        vrCloudDrift: "O7uy8q_vrCloudDrift",
        vrCloudsNight: "O7uy8q_vrCloudsNight",
        vrCueAway: "O7uy8q_vrCueAway",
        vrCueDrop: "O7uy8q_vrCueDrop",
        vrCueIn: "O7uy8q_vrCueIn",
        vrCutApply: "O7uy8q_vrCutApply",
        vrCutBob: "O7uy8q_vrCutBob",
        vrCutBow: "O7uy8q_vrCutBow",
        vrCutCircle: "O7uy8q_vrCutCircle",
        vrCutSway: "O7uy8q_vrCutSway",
        vrDim: "O7uy8q_vrDim",
        vrEmber: "O7uy8q_vrEmber",
        vrFeatherPass: "O7uy8q_vrFeatherPass",
        vrFireflies: "O7uy8q_vrFireflies",
        vrFlap: "O7uy8q_vrFlap",
        vrFlicker: "O7uy8q_vrFlicker",
        vrFloat: "O7uy8q_vrFloat",
        vrFly: "O7uy8q_vrFly",
        vrFocus: "O7uy8q_vrFocus",
        vrFoil: "O7uy8q_vrFoil",
        vrGarland: "O7uy8q_vrGarland",
        vrGlint: "O7uy8q_vrGlint",
        vrGlitter: "O7uy8q_vrGlitter",
        vrHaloBreath: "O7uy8q_vrHaloBreath",
        vrHaloSettle: "O7uy8q_vrHaloSettle",
        vrHaze: "O7uy8q_vrHaze",
        vrHeart: "O7uy8q_vrHeart",
        vrHeartGlow: "O7uy8q_vrHeartGlow",
        vrHem: "O7uy8q_vrHem",
        vrHills: "O7uy8q_vrHills",
        vrHint: "O7uy8q_vrHint",
        vrHtBurst: "O7uy8q_vrHtBurst",
        vrLag: "O7uy8q_vrLag",
        vrLampRise: "O7uy8q_vrLampRise",
        vrLead: "O7uy8q_vrLead",
        vrLeadMore: "O7uy8q_vrLeadMore",
        vrLetter: "O7uy8q_vrLetter",
        vrLifeDab: "O7uy8q_vrLifeDab",
        vrLifeFlame: "O7uy8q_vrLifeFlame",
        vrLifeMoon: "O7uy8q_vrLifeMoon",
        vrLifeShimmer: "O7uy8q_vrLifeShimmer",
        vrLifeSteam: "O7uy8q_vrLifeSteam",
        vrMoonArrive: "O7uy8q_vrMoonArrive",
        vrMoonBreath: "O7uy8q_vrMoonBreath",
        vrMoonHalo: "O7uy8q_vrMoonHalo",
        vrMoonRise: "O7uy8q_vrMoonRise",
        vrMoonWarm: "O7uy8q_vrMoonWarm",
        vrNamesSet: "O7uy8q_vrNamesSet",
        vrNight: "O7uy8q_vrNight",
        vrPetalFall: "O7uy8q_vrPetalFall",
        vrPhaseIn: "O7uy8q_vrPhaseIn",
        vrPhotoSheen: "O7uy8q_vrPhotoSheen",
        vrQuill: "O7uy8q_vrQuill",
        vrRailDiya: "O7uy8q_vrRailDiya",
        vrRise: "O7uy8q_vrRise",
        vrRiver: "O7uy8q_vrRiver",
        vrRuleDraw: "O7uy8q_vrRuleDraw",
        vrSettle: "O7uy8q_vrSettle",
        vrShootPass: "O7uy8q_vrShootPass",
        vrShootRare: "O7uy8q_vrShootRare",
        vrSpark: "O7uy8q_vrSpark",
        vrStars: "O7uy8q_vrStars",
        vrSwing: "O7uy8q_vrSwing",
        vrTeleprompter: "O7uy8q_vrTeleprompter",
        vrTileGlint: "O7uy8q_vrTileGlint",
        vrToranDolly: "O7uy8q_vrToranDolly",
        vrToranSway: "O7uy8q_vrToranSway",
        vrTwinkle: "O7uy8q_vrTwinkle",
        vrUnfurlClip: "O7uy8q_vrUnfurlClip",
        vrUnfurlCloth: "O7uy8q_vrUnfurlCloth",
        vrVeil: "O7uy8q_vrVeil",
        vrViewerIn: "O7uy8q_vrViewerIn",
        "vrindavan-photo": "O7uy8q_vrindavan-photo",
        watermark: "O7uy8q_watermark",
        waxing: "O7uy8q_waxing",
        window: "O7uy8q_window",
        windowArt: "O7uy8q_windowArt",
        windowFore: "O7uy8q_windowFore",
        windowFrame: "O7uy8q_windowFrame",
        withParents: "O7uy8q_withParents"
    })
}, 928723, e => {
    "use strict";
    var a = e.i(729176),
        t = e.i(244835),
        l = e.i(396243);
    e.s(["f", 0, function(e) {
        let {
            opening: s,
            paper: r,
            until: i
        } = e, [n, o] = (0, t.useState)(s);
        return (0, t.useEffect)(() => {
            let e = () => {
                    let e = i.current;
                    o(e && e.getBoundingClientRect().top > 0 ? s : r)
                },
                a = 0,
                t = () => {
                    a || (a = requestAnimationFrame(() => {
                        a = 0, e()
                    }))
                };
            return e(), window.addEventListener("scroll", t, {
                passive: !0
            }), window.addEventListener("resize", t), () => {
                a && cancelAnimationFrame(a), window.removeEventListener("scroll", t), window.removeEventListener("resize", t)
            }
        }, [s, r, i]), (0, a.jsx)("style", {
            dangerouslySetInnerHTML: {
                __html: `html, body { background-color: ${(0,l.F)(n)} !important; }`
            }
        })
    }])
}, 627655, e => {
    "use strict";
    let a;
    var t = e.i(244835);
    let l = () => () => {};

    function s() {
        if (!a) {
            let e = function() {
                var e, a, t;
                let l, s = navigator,
                    r = (null == (e = s.userAgentData) ? void 0 : e.platform) === "Android" || /Android/i.test(s.userAgent);
                if (r) try {
                    let e = document.createElement("canvas").getContext("webgl"),
                        a = null == e ? void 0 : e.getExtension("WEBGL_debug_renderer_info");
                    l = e ? String(e.getParameter(a ? a.UNMASKED_RENDERER_WEBGL : e.RENDERER)) : void 0, null == e || null == (t = e.getExtension("WEBGL_lose_context")) || t.loseContext()
                } catch {}
                return {
                    android: r,
                    memory: s.deviceMemory,
                    cores: s.hardwareConcurrency,
                    saveData: null == (a = s.connection) ? void 0 : a.saveData,
                    gpu: l
                }
            }();
            a = {
                info: e,
                lite: function(e) {
                    let {
                        android: a,
                        memory: t,
                        cores: l,
                        saveData: s,
                        gpu: r
                    } = e;
                    if (s || void 0 !== t && t < 4) return !0;
                    if (!a) return !1;
                    if (void 0 !== l && l > 0 && l <= 4) return !0;
                    if (!r) return !1;
                    if (/PowerVR|Mali-T/i.test(r)) return !0;
                    let i = r.match(/Mali-G(\d+)/i);
                    if (i) return 76 >= Number(i[1]) || Number(i[1]) >= 100 && 600 > Number(i[1]);
                    let n = r.match(/Adreno[^\d]*(\d{3})/i);
                    return !!n && 620 > Number(n[1])
                }(e)
            }
        }
        return a
    }
    e.s(["n", 0, function() {
        return (0, t.useSyncExternalStore)(l, () => s().info.android, () => !1)
    }, "Y", 0, function() {
        return (0, t.useSyncExternalStore)(l, () => s().lite, () => !1)
    }])
}, 643036, e => {
    "use strict";
    var a = e.i(244835);

    function t(e, a, t, l) {
        let s = (e, t) => e + (t - e) * a / 100;
        switch (e) {
            case "cover":
                return s(l, -t);
            case "contain":
                return s(Math.max(l - t, 0), Math.min(l - t, 0));
            case "entry":
                return s(l, Math.max(l - t, 0));
            case "exit":
                return s(Math.min(l - t, 0), -t);
            case "entry-crossing":
                return s(l, l - t);
            case "exit-crossing":
                return s(0, -t)
        }
    }

    function l(e, a) {
        if ("number" == typeof e) return e;
        let t = parseFloat(getComputedStyle(a).getPropertyValue(e));
        return Number.isFinite(t) ? t : 100
    }
    e.s(["f", 0, function(e, s) {
        (0, a.useEffect)(() => {
            var a, r;
            let i = e.current;
            if (!i || !(!("u" > typeof CSS && "function" == typeof CSS.supports && CSS.supports("animation-timeline: view()")) && !(null == (a = (r = window).matchMedia) ? void 0 : a.call(r, "(prefers-reduced-motion: reduce)").matches))) return;
            i.setAttribute("data-scroll-fallback", "");
            let n = null,
                o = 0,
                d = () => {
                    o = 0, n ?? (n = (() => {
                        let e = [];
                        for (let a of s) i.querySelectorAll(a.selector).forEach(t => {
                            let l = a.source ? t.closest(a.source) : t;
                            l && e.push({
                                node: t,
                                subject: l,
                                track: a
                            })
                        });
                        return e
                    })());
                    let e = window.innerHeight,
                        a = window.scrollY,
                        r = n.map(s => {
                            let {
                                node: r,
                                subject: i,
                                track: n
                            } = s, [o, d] = n.range, c = [
                                [o[0], l(o[1], r)],
                                [d[0], l(d[1], r)]
                            ], u = function(e, a) {
                                if (e instanceof HTMLElement) {
                                    let t = 0;
                                    for (let a = e; a; a = a.offsetParent) t += a.offsetTop;
                                    return {
                                        top: t - a,
                                        height: e.offsetHeight
                                    }
                                }
                                let t = e.getBoundingClientRect(),
                                    [, l = "0"] = getComputedStyle(e).translate.split(" "),
                                    s = e.clientHeight || t.height;
                                return {
                                    top: t.top + t.height / 2 - (parseFloat(l) || 0) - s / 2,
                                    height: s
                                }
                            }(i, a);
                            return Math.min(.9999, function(e, a, l, s) {
                                let [r, i] = s, n = t(r[0], r[1], a, l), o = t(i[0], i[1], a, l);
                                return Number.isFinite(e) && Number.isFinite(a) ? n === o ? +(e <= o) : Math.min(1, Math.max(0, (n - e) / (n - o))) : 0
                            }(u.top, u.height, e, c)).toFixed(4)
                        });
                    n.forEach((e, a) => {
                        let {
                            node: t,
                            track: l
                        } = e, s = l.property ?? "--sf-p";
                        t.style.getPropertyValue(s) !== r[a] && t.style.setProperty(s, r[a])
                    })
                },
                c = () => {
                    o || (o = requestAnimationFrame(d))
                },
                u = new MutationObserver(() => {
                    n = null, c()
                });
            u.observe(i, {
                childList: !0,
                subtree: !0
            });
            let h = new ResizeObserver(c);
            return h.observe(i), window.addEventListener("scroll", c, {
                passive: !0
            }), window.addEventListener("resize", c), d(), () => {
                cancelAnimationFrame(o), u.disconnect(), h.disconnect(), window.removeEventListener("scroll", c), window.removeEventListener("resize", c), i.removeAttribute("data-scroll-fallback")
            }
        }, [e, s])
    }])
}, 937769, e => {
    e.v({
        carousel: "tk3Ftq_carousel",
        carouselArrow: "tk3Ftq_carouselArrow",
        carouselNext: "tk3Ftq_carouselNext",
        carouselPrev: "tk3Ftq_carouselPrev",
        contain: "tk3Ftq_contain",
        cover: "tk3Ftq_cover",
        focus: "tk3Ftq_focus",
        gallery: "tk3Ftq_gallery",
        galleryEyebrow: "tk3Ftq_galleryEyebrow",
        galleryHeading: "tk3Ftq_galleryHeading",
        galleryHub: "tk3Ftq_galleryHub",
        lightbox: "tk3Ftq_lightbox",
        lightboxButton: "tk3Ftq_lightboxButton",
        lightboxCaption: "tk3Ftq_lightboxCaption",
        lightboxClose: "tk3Ftq_lightboxClose",
        lightboxFigure: "tk3Ftq_lightboxFigure",
        lightboxFrame: "tk3Ftq_lightboxFrame",
        lightboxNext: "tk3Ftq_lightboxNext",
        lightboxPrev: "tk3Ftq_lightboxPrev",
        ring: "tk3Ftq_ring",
        root: "tk3Ftq_root",
        slide: "tk3Ftq_slide",
        slideCaption: "tk3Ftq_slideCaption",
        slidePhoto: "tk3Ftq_slidePhoto",
        spoke: "tk3Ftq_spoke",
        "sway-fan": "tk3Ftq_sway-fan",
        track: "tk3Ftq_track",
        turn: "tk3Ftq_turn",
        wheel: "tk3Ftq_wheel",
        wheelPhoto: "tk3Ftq_wheelPhoto"
    })
}]);

//# debugId=fdf989a5-e10e-473a-fd08-44ced5c9cd36