;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "00fa3d3a-32ab-9340-5d67-d55a5f548d71")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 563491, e => {
    "use strict";
    var r = e.i(729176),
        n = e.i(746251),
        t = e.i(244835);
    e.s(["default", 0, function(e) {
        let {
            error: i,
            reset: s
        } = e;
        return (0, t.useEffect)(() => {
            console.error(i), n.y(i)
        }, [i]), (0, r.jsx)("html", {
            lang: "en",
            children: (0, r.jsx)("body", {
                style: {
                    margin: 0,
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, sans-serif",
                    background: "#fdf7f4",
                    color: "#2b2b2b",
                    padding: "1.5rem"
                },
                children: (0, r.jsxs)("div", {
                    style: {
                        maxWidth: 480,
                        textAlign: "center"
                    },
                    children: [(0, r.jsx)("h1", {
                        style: {
                            fontSize: "1.5rem",
                            margin: "0 0 0.5rem"
                        },
                        children: "Something went wrong"
                    }), (0, r.jsx)("p", {
                        style: {
                            color: "#6b6b6b",
                            margin: "0 0 1.5rem"
                        },
                        children: "An unexpected error occurred. Please try again — if it keeps happening, refresh the page."
                    }), (0, r.jsx)("button", {
                        onClick: s,
                        style: {
                            cursor: "pointer",
                            border: "none",
                            borderRadius: 8,
                            padding: "0.6rem 1.25rem",
                            fontSize: "0.9rem",
                            fontWeight: 600,
                            color: "#fff",
                            background: "#c2410c"
                        },
                        children: "Try again"
                    })]
                })
            })
        })
    }])
}]);

//# debugId=00fa3d3a-32ab-9340-5d67-d55a5f548d71