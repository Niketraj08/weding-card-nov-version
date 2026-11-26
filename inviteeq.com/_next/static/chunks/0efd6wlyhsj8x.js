;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "45dc6847-3aca-de7f-c09e-4047bc561a26")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 632948, t => {
    "use strict";
    var e = t.i(966951);
    t.s(["z", 0, e])
}, 464615, t => {
    "use strict";
    var e = t.i(966951);
    t.s(["z", 0, e])
}, 239071, t => {
    "use strict";
    var e = t.i(966951);
    t.s(["z", 0, e])
}, 248455, t => {
    "use strict";
    var e = t.i(966951);
    t.s(["z", 0, e])
}, 739935, t => {
    "use strict";
    var e = t.i(966951);
    t.s(["z", 0, e])
}, 20403, t => {
    "use strict";
    var e = t.i(966951);
    t.s(["z", 0, e])
}, 566272, 156286, t => {
    "use strict";
    var e = t.i(966951);
    t.s(["z", 0, e], 566272);
    var r = t.i(239071);
    let i = ["en", "hi", "es"],
        a = r.z.enum(i);
    t.s(["I", 0, i, "j", 0, a, "X", 0, function(t) {
        let e = a.safeParse(t);
        return e.success ? e.data : "en"
    }], 156286)
}, 943737, t => {
    "use strict";
    var e = t.i(966951);
    t.s(["z", 0, e])
}, 342991, t => {
    "use strict";
    var e = t.i(966951);
    t.s(["z", 0, e])
}, 620721, t => {
    "use strict";
    var e = t.i(966951);
    t.s(["z", 0, e])
}, 735172, t => {
    "use strict";
    t.s(["f", 0, function(t) {
        return t.replace(/[^\p{L}\p{M}\p{N}_]/gu, "")
    }])
}, 907670, t => {
    "use strict";
    var e = t.i(20403),
        r = t.i(464615),
        i = t.i(739935),
        a = t.i(239071);
    let n = ["verySlow", "slow", "medium", "fast", "veryFast"],
        o = e.z.object({
            enabled: r.z.boolean().default(!1),
            delaySeconds: i.z.number().int().min(1).max(30).default(5),
            speed: a.z.enum(n).default("medium")
        }),
        s = e.z.object({
            autoScroll: o.default({})
        });
    t.s(["C", 0, 30, "i", 0, 1, "c", 0, {
        verySlow: 15,
        slow: 30,
        medium: 60,
        fast: 100,
        veryFast: 160
    }, "S", 0, n, "k", 0, s])
}, 617014, t => {
    "use strict";
    let e = /^\+?[\d\-().]+$/;

    function r(t) {
        let r = t.trim();
        if ("" === r) return !0;
        if (!e.test(r)) return !1;
        let i = r.replace(/\D/g, "").length;
        return i >= 7 && i <= 15
    }
    t.s(["o", 0, function(t) {
        return r(t.replace(/\s+/g, ""))
    }, "y", 0, r, "d", 0, function(t) {
        return (t ? ? "").replace(/\D/g, "").slice(-10)
    }])
}, 875022, t => {
    "use strict";
    let e = /^\+?[\d\s\-().]+$/;

    function r(t) {
        return "contacts" === t.mode ? "contacts" : "form"
    }

    function i(t) {
        let r = t.trim();
        if (!e.test(r)) return !1;
        let i = r.replace(/\D/g, "").length;
        return i >= 7 && i <= 15
    }
    t.s(["_", 0, 6, "q", 0, ["form", "contacts"], "A", 0, i, "w", 0, r, "B", 0, function(t) {
        let e = t.trim(),
            r = e.replace(/\D/g, "");
        return `tel:${e.startsWith("+")?"+":""}${r}`
    }, "o", 0, function(t) {
        return !1 !== t.enabled && "contacts" === r(t)
    }, "Q", 0, function(t) {
        return (t.contacts ? ? []).map(t => ({
            name: (t.name ? ? "").trim(),
            phone: (t.phone ? ? "").trim(),
            label: (t.label ? ? "").trim()
        })).filter(t => "" !== t.name && ("" === t.phone || i(t.phone))).slice(0, 6)
    }, "P", 0, function(t) {
        let e = t.trim(),
            r = e.replace(/\D/g, "");
        return e.startsWith("+") ? `https://wa.me/${r}` : r.startsWith("00") && r.length > 2 ? `https://wa.me/${r.slice(2)}` : null
    }])
}, 541464, t => {
    "use strict";
    var e = t.i(239071),
        r = t.i(20403),
        i = t.i(395458),
        a = t.i(464615),
        n = t.i(739935),
        o = t.i(943737),
        s = t.i(620721);
    let l = ["hero", "countdown", "story", "family", "events", "gallery", "rsvp", "hashtag", "special-request", "gifts", "footer"],
        m = e.z.enum(l),
        u = r.z.object({
            id: i.z.string().trim().min(1),
            kind: m,
            visible: a.z.boolean().default(!0),
            order: n.z.number().int().min(0).default(0),
            overrides: o.z.record(i.z.string(), s.z.unknown()).optional()
        }),
        d = [{
            id: "hero",
            kind: "hero",
            visible: !0,
            order: 0
        }, {
            id: "countdown",
            kind: "countdown",
            visible: !0,
            order: 1
        }, {
            id: "story",
            kind: "story",
            visible: !0,
            order: 2
        }, {
            id: "family",
            kind: "family",
            visible: !0,
            order: 3
        }, {
            id: "events",
            kind: "events",
            visible: !0,
            order: 4
        }, {
            id: "gallery",
            kind: "gallery",
            visible: !0,
            order: 5
        }, {
            id: "rsvp",
            kind: "rsvp",
            visible: !0,
            order: 6
        }, {
            id: "hashtag",
            kind: "hashtag",
            visible: !0,
            order: 7
        }, {
            id: "special-request",
            kind: "special-request",
            visible: !0,
            order: 8
        }, {
            id: "gifts",
            kind: "gifts",
            visible: !0,
            order: 9
        }, {
            id: "footer",
            kind: "footer",
            visible: !0,
            order: 10
        }];
    t.s(["n", 0, d, "P", 0, l, "v", 0, function(t, e) {
        let r = null == t ? void 0 : t.find(t => t.kind === e);
        return !r || r.visible
    }, "j", 0, u, "T", 0, function(t) {
        return d.map(e => {
            var r;
            let i = null == (r = t.find(t => t.id === e.id)) ? void 0 : r.overrides;
            return i ? { ...e,
                overrides: i
            } : e
        })
    }])
}, 600024, t => {
    "use strict";

    function e(t) {
        return ((null == t ? void 0 : t.names) ? ? []).map(t => t.trim()).filter(Boolean)
    }
    t.s(["L", 0, 24, "i", 0, 60, "o", 0, 60, "S", 0, function(t) {
        return e(t).length > 0
    }, "H", 0, e])
}, 539260, t => {
    "use strict";
    let e = /^https:\/\/res\.cloudinary\.com\/[A-Za-z0-9_-]+\/(?:image|video|raw)\/upload\/[^:,]+$/,
        r = /["'()\\\s?#%]/,
        i = /^\/[A-Za-z0-9._~/-]+$/;
    t.s(["Z", 0, function(t) {
        let e = t.replace(/["'()\\\s]/g, t => `%${t.charCodeAt(0).toString(16).padStart(2,"0").toUpperCase()}`);
        return `url("${e}")`
    }, "b", 0, function(t) {
        return !r.test(t) && e.test(t)
    }, "P", 0, function(t) {
        if (r.test(t)) return !1;
        if (t.startsWith("/")) {
            let e = t.split("/").slice(1);
            return i.test(t) && e.every(t => "" !== t && "." !== t && ".." !== t)
        }
        return e.test(t)
    }])
}, 685149, t => {
    "use strict";
    let e = ["frame", "frame-script", "photo"];
    t.s(["d", 0, ["YES", "NO", "MAYBE"], "p", 0, ["WEDDING", "ENGAGEMENT", "WELCOME_PARTY", "REHEARSAL_DINNER", "JANEU", "HALDI", "MEHNDI", "SANGEET", "COCKTAIL", "SEHRABANDI", "BARAAT", "BHAAT", "MAYAARA", "BAHIRANA_SAHIB", "SAATH_SONH", "RECEPTION", "NIKAH", "WALIMA", "ANAND_KARAJ", "CHURCH_CEREMONY", "CIVIL_CEREMONY", "TEA_CEREMONY", "BLESSING", "AFTER_PARTY", "FAREWELL_BRUNCH", "CUSTOM"], "t", 0, ["ALL_GUESTS", "INVITED_ONLY"], "X", 0, ["PUBLIC", "UNLISTED", "PASSWORD_PROTECTED", "PRIVATE"], "w", 0, {
        FREE: "free_build",
        PREMIUM: "signature"
    }, "W", 0, ["PIANO_AND_WESTERN", "NORTH_INDIAN", "SOUTH_INDIAN", "RAJASTHANI", "PUNJABI", "BENGALI_CLASSICAL"], "Y", 0, ["Bride", "Groom", "Partner", "Dulhan", "Dulha", "Custom"], "Q", 0, ["OWN_WEDDING", "FAMILY_OR_FRIEND", "PLANNER"], "q", 0, ["household", "guest", "event", "guest_event", "submission", "repeatable_group"], "f", 0, e, "M", 0, ["MINIMAL", "ROYAL", "FLORAL", "MODERN", "TRADITIONAL_INDIAN", "LUXURY", "FUN_CASUAL"], "i", 0, ["UNLISTED", "PASSWORD_PROTECTED", "PRIVATE"], "R", 0, function(t) {
        return e.includes(t)
    }])
}, 961826, t => {
    "use strict";

    function e(t) {
        return t.ownerCode && t.slugWords ? `${t.ownerCode}/${t.slugWords}` : ""
    }

    function r(t) {
        return t && "en" !== t ? `/${t}` : ""
    }
    t.s(["Z", 0, 48, "c", 0, e, "M", 0, function(t, i, a) {
        let n, o = (n = e(i)) ? `${r(a)}/invite/${n}` : "";
        return o ? `${t.replace(/\/+$/,"")}${o}` : ""
    }, "t", 0, r, "j", 0, function(t) {
        let [e, ...r] = t.trim().toLowerCase().split("/"), i = r.join("/");
        return e && i && 1 === r.length ? RegExp("^[bcdfghjklmnpqrstvwxz]{4,8}$").test(e) ? {
            ownerCode: e,
            slugWords: i
        } : null : null
    }, "v", 0, function(t) {
        return t.normalize("NFKD").toLowerCase().replace(/[^a-z0-9\s_-]/g, "").replace(/[\s_]+/g, "-").replace(/-+/g, "-").replace(/^-+/, "").slice(0, 48).replace(/-+$/, "")
    }])
}, 301844, t => {
    "use strict";
    var e = t.i(395458),
        r = t.i(20403),
        i = t.i(739935),
        a = t.i(239071),
        n = t.i(464615),
        o = t.i(685149);
    let s = e.z.string().regex(/^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, "Must be a hex color, e.g. #a1b2c3"),
        l = r.z.object({
            background: s,
            surface: s,
            text: s,
            muted: s,
            primary: s,
            secondary: s,
            accent: s
        }),
        m = [400, 500, 600, 700, 800, 900],
        u = r.z.object({
            heading: e.z.string().trim().min(1, "Heading font is required"),
            body: e.z.string().trim().min(1, "Body font is required"),
            headingWeight: i.z.number().refine(t => m.includes(t), "Unsupported font weight").nullish().transform(t => t ? ? void 0),
            coupleName: e.z.string().trim().max(64).nullish().transform(t => t || void 0)
        }),
        d = r.z.object({
            style: a.z.enum(["none", "solid", "double", "dashed"]),
            width: i.z.number().int().min(0).max(16),
            color: s
        }),
        z = r.z.object({
            category: a.z.enum(o.M),
            palette: l,
            fonts: u,
            radius: a.z.enum(["none", "sm", "md", "lg", "xl", "full"]),
            border: d,
            decoration: a.z.enum(["none", "floral", "mandala", "geometric", "botanical", "confetti", "art-deco"]),
            darkHero: n.z.boolean().default(!1)
        });
    t.s(["Z", 0, m, "z", 0, d, "p", 0, z, "v", 0, u, "L", 0, l])
}, 339713, 375756, 19269, t => {
    "use strict";
    var e = t.i(395458),
        r = t.i(20403),
        i = t.i(239071),
        a = t.i(342991),
        n = t.i(248455),
        o = t.i(464615),
        s = t.i(566272),
        l = t.i(739935),
        m = t.i(632948),
        u = t.i(685149),
        d = t.i(961826),
        z = t.i(301844),
        c = t.i(541464),
        g = t.i(907670);
    let f = r.z.object({
        palette: z.L.partial().optional(),
        fonts: z.v.partial().optional(),
        border: z.z.partial().optional(),
        radius: z.p.shape.radius.optional(),
        decoration: z.p.shape.decoration.optional(),
        darkHero: o.z.boolean().optional()
    });

    function p(t, e) {
        return { ...t,
            palette: { ...t.palette,
                ...e.palette ? ? {}
            },
            fonts: { ...t.fonts,
                ...e.fonts ? ? {}
            },
            border: { ...t.border,
                ...e.border ? ? {}
            },
            radius: e.radius ? ? t.radius,
            decoration: e.decoration ? ? t.decoration,
            darkHero: e.darkHero ? ? t.darkHero
        }
    }
    t.s(["T", 0, p, "K", 0, f, "B", 0, function(t, e) {
        if (!t || !e) return t;
        let r = f.safeParse(e);
        return r.success ? p(t, r.data) : t
    }], 375756);
    var b = t.i(617014),
        x = t.i(156286),
        h = t.i(539260);
    let v = ["", "son", "daughter", "none"],
        A = ["classic", "tree"];

    function w(t) {
        var e;
        let r = (null == t || null == (e = t.name) ? void 0 : e.trim()) ? ? "";
        return r ? {
            name: r
        } : null
    }

    function E(t) {
        return t ? [w(t.father), w(t.mother)].filter(t => null !== t) : []
    }

    function y(t) {
        return t ? (t.grandparents ? ? []).map(w).filter(t => null !== t) : []
    }

    function N(t) {
        return E(t).length > 0 || y(t).length > 0
    }
    let L = new Set(["bride", "dulhan", "दुल्हन", "वधू", "novia"]),
        P = new Set(["groom", "dulha", "दूल्हा", "वर", "novio"]);

    function I(t, e) {
        let r, i = (null == t ? void 0 : t.relation) ? ? "";
        return "" === i ? (r = (null == e ? void 0 : e.trim().toLowerCase()) ? ? "", L.has(r) ? "daughter" : P.has(r) ? "son" : "none") : i
    }
    t.s(["D", 0, v, "b", 0, A, "F", 0, 4, "n", 0, function(t, e) {
        let r = (t, e, r, i) => ({
            key: t,
            name: (null == r ? void 0 : r.trim()) || (null == i ? void 0 : i.trim()) || "",
            relation: I(e, i),
            parents: E(e),
            grandparents: y(e)
        });
        return [r("one", null == t ? void 0 : t.partnerOne, e.partnerOneName, e.partnerOneLabel), r("two", null == t ? void 0 : t.partnerTwo, e.partnerTwoName, e.partnerTwoLabel)]
    }, "i", 0, function(t) {
        var e;
        return !!t && (!!(null == (e = t.blessings) ? void 0 : e.trim()) || N(t.partnerOne) || N(t.partnerTwo))
    }, "M", 0, function(t) {
        return (null == t ? void 0 : t.style) === "tree"
    }, "z", 0, I, "y", 0, E], 19269);
    var C = t.i(875022),
        S = t.i(735172),
        j = t.i(600024);
    let T = e.z.string().min(8, "Password must be at least 8 characters"),
        R = e.z.string().trim().min(2, "Name must be at least 2 characters").max(80, "Name is too long").regex(/^[\p{L}\p{M}][\p{L}\p{M} .'’-]*$/u, "Use letters only in your name"),
        O = e.z.string().trim().max(24, "Phone is too long").refine(t => "" === t || /^\+?[\d\s\-().]+$/.test(t) && /^\d{7,15}$/.test(t.replace(/\D/g, "")), "Enter a valid phone number").default(""),
        D = r.z.object({
            name: R,
            email: e.z.string().trim().toLowerCase().email("Enter a valid email address"),
            password: T
        }),
        _ = r.z.object({
            planningFor: i.z.enum(u.Q, {
                errorMap: () => ({
                    message: "Choose who you're planning for"
                })
            }),
            name: R,
            phone: O
        });
    r.z.object({
        uid: e.z.string().trim().min(1),
        token: e.z.string().trim().min(1),
        password: T
    });
    let U = r.z.object({
        password: T,
        confirmPassword: e.z.string()
    }).refine(t => t.password === t.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"]
    });
    r.z.object({
        currentPassword: e.z.string().default(""),
        newPassword: T
    });
    let k = r.z.object({
            currentPassword: e.z.string(),
            newPassword: T,
            confirmPassword: e.z.string()
        }).refine(t => t.newPassword === t.confirmPassword, {
            message: "Passwords don't match",
            path: ["confirmPassword"]
        }),
        M = r.z.object({
            email: e.z.string().trim().toLowerCase().email("Enter a valid email address")
        }),
        $ = r.z.object({
            email: e.z.string().trim().toLowerCase().email("Enter a valid email address"),
            password: T
        }),
        H = e.z.string().trim().toLowerCase().min(2, "Slug must be at least 2 characters").max(60, "Slug must be at most 60 characters").regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use lowercase letters, numbers, and single hyphens"),
        W = e.z.string().trim().toLowerCase().min(2, "Link must be at least 2 characters").max(d.Z, `Link must be at most ${d.Z} characters`).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use lowercase letters, numbers, and single hyphens"),
        B = t => t.startsWith("/") && !t.startsWith("//") || e.z.string().url().safeParse(t).success;
    r.z.object({
        name: e.z.string().trim().min(2, "Name must be at least 2 characters"),
        slug: H,
        category: i.z.enum(u.M),
        description: e.z.string().trim().max(300, "Description is too long").default(""),
        previewImageUrl: a.z.union([e.z.string().refine(B, "Enter a valid URL"), n.z.literal("")]).default(""),
        isActive: o.z.boolean().default(!0),
        isPremium: o.z.boolean().default(!1),
        sortOrder: s.z.preprocess(t => {
            if (null == t) return null;
            if ("string" == typeof t) {
                let e = t.trim();
                return "" === e ? null : Number(e)
            }
            return t
        }, l.z.number().int("Sort order must be a whole number").nullable()).optional(),
        themeConfig: z.p
    });
    let F = r.z.object({
            partnerOneName: e.z.string().trim().max(80).default(""),
            partnerTwoName: e.z.string().trim().max(80).default(""),
            partnerOneLabel: e.z.string().trim().max(40).default(""),
            partnerTwoLabel: e.z.string().trim().max(40).default(""),
            headline: e.z.string().trim().max(140).default(""),
            shortMessage: e.z.string().trim().max(600).default(""),
            coverPhotoUrl: e.z.string().trim().max(600).default(""),
            logoUrl: e.z.string().trim().max(600).optional(),
            shareCardStyle: i.z.enum(u.f).optional()
        }),
        Y = r.z.object({
            id: e.z.string().trim().min(1),
            time: e.z.string().trim().max(20).default(""),
            title: e.z.string().trim().max(80).default("")
        }),
        q = r.z.object({
            id: e.z.string().trim().min(1),
            name: e.z.string().trim().max(80).default(""),
            type: i.z.enum(u.p).default("CUSTOM"),
            date: e.z.string().trim().max(40).default(""),
            startTime: e.z.string().trim().max(20).default(""),
            endTime: e.z.string().trim().max(20).default(""),
            timeOnwards: o.z.boolean().optional(),
            timeNote: e.z.string().trim().max(40).optional(),
            timezone: e.z.string().trim().max(64).optional(),
            venueName: e.z.string().trim().max(140).default(""),
            venueAddress: e.z.string().trim().max(240).default(""),
            city: e.z.string().trim().max(80).default(""),
            country: e.z.string().trim().max(80).default(""),
            mapsUrl: e.z.string().trim().max(400).default(""),
            venueId: e.z.string().trim().max(64).optional(),
            space: e.z.string().trim().max(80).optional(),
            description: e.z.string().trim().max(600).default(""),
            descriptionOnTop: o.z.boolean().optional(),
            dressCode: e.z.string().trim().max(120).default(""),
            dressCodeColor: e.z.string().trim().max(9).optional(),
            displayOrder: l.z.number().int().min(0).default(0),
            visibility: i.z.enum(u.t).optional(),
            orderOfDay: m.z.array(Y).max(12).optional()
        }),
        G = r.z.object({
            url: e.z.string().url(),
            publicId: e.z.string().trim().min(1),
            caption: e.z.string().trim().max(200).default(""),
            displayOrder: l.z.number().int().min(0).default(0)
        }),
        Z = r.z.object({
            url: a.z.union([e.z.string().url(), n.z.literal("")]).default(""),
            publicId: e.z.string().trim().max(200).default(""),
            posterUrl: a.z.union([e.z.string().url(), n.z.literal("")]).default(""),
            source: i.z.enum(["uploaded", "generated"]).default("uploaded"),
            status: i.z.enum(["none", "processing", "ready", "failed"]).default("none"),
            provider: e.z.string().trim().max(60).default(""),
            jobId: e.z.string().trim().max(120).default(""),
            error: e.z.string().trim().max(300).default(""),
            updatedAt: e.z.string().trim().max(40).default("")
        }),
        K = r.z.object({
            name: e.z.string().trim().min(2, "Name must be at least 2 characters"),
            slug: H,
            group: i.z.enum(u.W),
            title: e.z.string().trim().max(160, "Title is too long").default(""),
            url: a.z.union([e.z.string().url("Enter a valid URL").refine(h.b, "Upload the track: only a Cloudinary upload URL works"), n.z.literal("")]),
            publicId: e.z.string().trim().max(200).default(""),
            isActive: o.z.boolean().default(!0),
            isPremium: o.z.boolean().default(!1)
        }),
        V = r.z.object({
            url: a.z.union([e.z.string().url(), n.z.literal("")]).default(""),
            publicId: e.z.string().trim().max(200).default(""),
            title: e.z.string().trim().max(160).default(""),
            source: i.z.enum(["uploaded", "preset"]).default("uploaded"),
            status: i.z.enum(["none", "ready", "failed"]).default("none"),
            provider: e.z.string().trim().max(60).default(""),
            error: e.z.string().trim().max(300).default(""),
            updatedAt: e.z.string().trim().max(40).default("")
        }),
        X = r.z.object({
            enabled: o.z.boolean().default(!1),
            content: e.z.string().trim().max(5e3).default("")
        }),
        J = r.z.object({
            tag: e.z.string().transform(S.f).pipe(e.z.string().max(60)).default(""),
            caption: e.z.string().trim().max(140).default("")
        }),
        Q = r.z.object({
            name: e.z.string().trim().max(80).default("")
        }),
        tt = r.z.object({
            relation: i.z.enum(v).default(""),
            father: Q.default({}),
            mother: Q.default({}),
            grandparents: m.z.array(Q).max(4).default([])
        }),
        te = r.z.object({
            style: i.z.enum(A).default("classic"),
            blessings: e.z.string().trim().max(300).default(""),
            partnerOne: tt.default({}),
            partnerTwo: tt.default({})
        }),
        tr = r.z.object({
            title: e.z.string().trim().max(j.o).default(""),
            subtitle: e.z.string().trim().max(j.o).optional(),
            hideSubtitle: o.z.boolean().optional(),
            names: m.z.array(e.z.string().trim().max(j.i)).max(j.L).default([])
        }),
        ti = r.z.object({
            name: e.z.string().trim().max(80).default(""),
            phone: e.z.string().trim().max(30).default(""),
            label: e.z.string().trim().max(60).default("")
        }),
        ta = e.z.string().trim().max(2e3),
        tn = r.z.object({
            ask: ta.optional(),
            followUp: ta.optional()
        }),
        to = r.z.object({
            enabled: o.z.boolean().default(!0),
            mode: i.z.enum(C.q).optional(),
            contacts: m.z.array(ti).max(C._).optional(),
            deadline: e.z.string().trim().max(40).default(""),
            allowPlusOnes: o.z.boolean().default(!1),
            maxPlusOnes: l.z.number().int().min(0).max(20).default(0),
            collectMealPreference: o.z.boolean().default(!1),
            collectPhone: o.z.boolean().default(!0),
            collectEmail: o.z.boolean().default(!1),
            customQuestion: e.z.string().trim().max(200).default(""),
            reminderEnabled: o.z.boolean().optional(),
            reminderAfterDays: l.z.number().int().min(1).max(90).optional(),
            reminderMessage: e.z.string().trim().max(300).optional()
        }),
        ts = r.z.object({
            whatsappEnabled: o.z.boolean().default(!0),
            nativeShareEnabled: o.z.boolean().default(!0),
            copyLinkEnabled: o.z.boolean().default(!0),
            emailEnabled: o.z.boolean().default(!0),
            smsEnabled: o.z.boolean().default(!0)
        }),
        tl = r.z.object({
            title: e.z.string().trim().min(1).max(140).optional(),
            themeId: e.z.string().trim().min(1).optional(),
            exampleSlug: a.z.union([H, n.z.literal("")]).optional(),
            layoutSlug: a.z.union([H, n.z.literal("")]).optional(),
            slugWords: a.z.union([W, n.z.literal("")]).optional(),
            visibility: i.z.enum(u.X).optional(),
            password: e.z.string().max(200).optional(),
            watermarkEnabled: o.z.boolean().optional(),
            defaultLanguage: x.j.optional(),
            video: Z.optional(),
            music: V.optional(),
            couple: F.optional(),
            events: m.z.array(q).max(30).optional(),
            photos: m.z.array(G).max(50).optional(),
            story: X.optional(),
            hashtag: J.optional(),
            family: te.optional(),
            specialRequest: tr.optional(),
            rsvpSettings: to.optional(),
            shareSettings: ts.optional(),
            sections: m.z.array(c.j).max(50).optional(),
            motion: g.k.optional(),
            themeOverrides: f.optional(),
            timezone: e.z.string().trim().max(64).optional()
        });
    r.z.object({
        slug: e.z.string().trim().min(1, "Missing invitation"),
        guestToken: e.z.string().trim().max(64).optional().default(""),
        guestName: e.z.string().trim().min(1, "Please enter your name").max(120, "Name is too long"),
        attendanceStatus: i.z.enum(u.d),
        phone: e.z.string().trim().max(40, "Phone is too long").refine(b.y, "Enter a valid phone number (at least 7 digits, no spaces)").default(""),
        email: a.z.union([e.z.string().trim().toLowerCase().email("Enter a valid email"), n.z.literal("")]).default(""),
        guestCount: l.z.number().int().min(1).max(21).default(1),
        attendingCount: l.z.number().int().min(0).max(50).optional(),
        attendeeNames: m.z.array(e.z.string().trim().max(120)).max(50).default([]),
        attendingEvents: m.z.array(e.z.string().trim().max(140)).max(30).default([]),
        mealPreference: e.z.string().trim().max(200).default(""),
        message: e.z.string().trim().max(1e3, "Message is too long").default(""),
        customAnswer: e.z.string().trim().max(500).default(""),
        website: e.z.string().max(0).optional().default("")
    });
    let tm = r.z.object({
        displayName: e.z.string().trim().min(1, "Enter a name").max(160, "Name is too long"),
        addressAs: e.z.string().trim().max(160, "Name is too long").optional(),
        showGreeting: o.z.boolean().optional(),
        members: m.z.array(e.z.string().trim().max(120)).max(50).default([]),
        phone: e.z.string().trim().max(40, "Phone is too long").refine(b.o, "Enter a valid phone number").default(""),
        email: a.z.union([e.z.string().trim().toLowerCase().email("Enter a valid email"), n.z.literal("")]).default(""),
        invitedCount: l.z.number().int().min(1).max(50).default(1),
        notes: e.z.string().trim().max(500).default(""),
        tags: m.z.array(e.z.string().trim().toLowerCase().min(1).max(40)).max(25).default([]).transform(t => [...new Set(t)])
    }).extend({
        phone: e.z.string().trim().max(40, "Phone is too long").default("").transform(t => (0, b.o)(t) ? t : ""),
        eventIds: m.z.array(e.z.string().trim().min(1).max(100)).max(100).optional()
    });
    r.z.object({
        guests: m.z.array(tm).min(1, "Add at least one guest").max(1e3)
    }), t.s(["c", 0, 2e3, "O", 0, 8, "z", 0, O, "q", 0, k, "U", 0, F, "H", 0, q, "E", 0, te, "X", 0, M, "Y", 0, ta, "Z", 0, J, "x", 0, tl, "i", 0, B, "A", 0, K, "P", 0, V, "r", 0, _, "y", 0, G, "d", 0, U, "V", 0, to, "F", 0, ts, "B", 0, $, "b", 0, D, "L", 0, H, "_", 0, tr, "C", 0, tn, "D", 0, X, "k", 0, Z], 339713)
}]);

//# debugId=45dc6847-3aca-de7f-c09e-4047bc561a26