exports.id = 181;
exports.ids = [181];
exports.modules = {

/***/ 4454:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5958, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 8950, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2513, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1551, 23))

/***/ }),

/***/ 2206:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7441))

/***/ }),

/***/ 3259:
/***/ (() => {



/***/ }),

/***/ 9812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  "metadata": () => (/* binding */ metadata)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4458);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6495);
// EXTERNAL MODULE: ./ui/global-nav.tsx
var global_nav = __webpack_require__(633);
;// CONCATENATED MODULE: ./ui/vercel-logo.tsx

function vercel_logo_VercelLogo() {
    return /*#__PURE__*/ _jsx("svg", {
        viewBox: "0 0 4438 1000",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M2223.75 250C2051.25 250 1926.87 362.5 1926.87 531.25C1926.87 700 2066.72 812.5 2239.38 812.5C2343.59 812.5 2435.47 771.25 2492.34 701.719L2372.81 632.656C2341.25 667.188 2293.28 687.344 2239.38 687.344C2164.53 687.344 2100.94 648.281 2077.34 585.781H2515.16C2518.59 568.281 2520.63 550.156 2520.63 531.094C2520.63 362.5 2396.41 250 2223.75 250ZM2076.09 476.562C2095.62 414.219 2149.06 375 2223.75 375C2298.59 375 2352.03 414.219 2371.41 476.562H2076.09ZM2040.78 78.125L1607.81 828.125L1174.69 78.125H1337.03L1607.66 546.875L1878.28 78.125H2040.78ZM577.344 0L1154.69 1000H0L577.344 0ZM3148.75 531.25C3148.75 625 3210 687.5 3305 687.5C3369.38 687.5 3417.66 658.281 3442.5 610.625L3562.5 679.844C3512.81 762.656 3419.69 812.5 3305 812.5C3132.34 812.5 3008.13 700 3008.13 531.25C3008.13 362.5 3132.5 250 3305 250C3419.69 250 3512.66 299.844 3562.5 382.656L3442.5 451.875C3417.66 404.219 3369.38 375 3305 375C3210.16 375 3148.75 437.5 3148.75 531.25ZM4437.5 78.125V796.875H4296.88V78.125H4437.5ZM3906.25 250C3733.75 250 3609.38 362.5 3609.38 531.25C3609.38 700 3749.38 812.5 3921.88 812.5C4026.09 812.5 4117.97 771.25 4174.84 701.719L4055.31 632.656C4023.75 667.188 3975.78 687.344 3921.88 687.344C3847.03 687.344 3783.44 648.281 3759.84 585.781H4197.66C4201.09 568.281 4203.12 550.156 4203.12 531.094C4203.12 362.5 4078.91 250 3906.25 250ZM3758.59 476.562C3778.13 414.219 3831.41 375 3906.25 375C3981.09 375 4034.53 414.219 4053.91 476.562H3758.59ZM2961.25 265.625V417.031C2945.63 412.5 2929.06 409.375 2911.25 409.375C2820.47 409.375 2755 471.875 2755 565.625V796.875H2614.38V265.625H2755V409.375C2755 330 2847.34 265.625 2961.25 265.625Z"
        })
    });
}

;// CONCATENATED MODULE: ./src/app/layout.tsx




const metadata = {
    title: {
        default: "Next.js App Router",
        template: "%s | Next.js App Router"
    },
    description: "A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching."
};
function RootLayout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("html", {
        lang: "en",
        className: "[color-scheme:dark]",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("head", {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("body", {
                className: "overflow-y-scroll bg-gray-1100 bg-[url('/grid.svg')]",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(global_nav.GlobalNav, {}),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "lg:pl-72",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:py-8 lg:px-8",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "rounded-lg bg-black"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "rounded-lg bg-black p-3.5 lg:p-6",
                                        children: children
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "rounded-lg bg-black"
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
function Byline() {
    return /*#__PURE__*/ _jsxs("div", {
        className: "flex items-center justify-between gap-x-4 p-3.5 lg:px-5 lg:py-3",
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: "flex items-center gap-x-1.5",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "text-sm text-gray-400",
                        children: "By"
                    }),
                    /*#__PURE__*/ _jsx("a", {
                        href: "https://vercel.com",
                        title: "Vercel",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "w-16 text-gray-100 hover:text-gray-50",
                            children: /*#__PURE__*/ _jsx(VercelLogo, {})
                        })
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "text-sm text-gray-400",
                children: [
                    /*#__PURE__*/ _jsx("a", {
                        className: "underline decoration-dotted underline-offset-4 hover:text-gray-400",
                        href: "https://github.com/vercel/app-playground",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "View code"
                    }),
                    " or ",
                    /*#__PURE__*/ _jsx("a", {
                        className: "underline decoration-dotted underline-offset-4 hover:text-gray-400",
                        href: "https://vercel.com/templates/next.js/app-directory",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "deploy your own"
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 7092:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ NotFound)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4458);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.js
var clsx = __webpack_require__(4088);
var clsx_default = /*#__PURE__*/__webpack_require__.n(clsx);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(1094);
;// CONCATENATED MODULE: ./ui/boundary.tsx



const Label = ({ children , animateRerendering , color  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: clsx_default()("rounded-full px-1.5 shadow-[0_0_1px_3px_black]", {
            "bg-gray-800 text-gray-300": color === "default",
            "bg-vercel-pink text-white": color === "pink",
            "bg-vercel-blue text-white": color === "blue",
            "bg-vercel-cyan text-white": color === "cyan",
            "bg-vercel-violet text-violet-100": color === "violet",
            "bg-vercel-orange text-white": color === "orange",
            "animate-[highlight_1s_ease-in-out_1]": animateRerendering
        }),
        children: children
    });
};
const Boundary = ({ children , labels =[
    "children"
] , size ="default" , color ="default" , animateRerendering =true  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: clsx_default()("relative rounded-lg border border-dashed", {
            "p-3 lg:p-5": size === "small",
            "p-4 lg:p-9": size === "default",
            "border-gray-700": color === "default",
            "border-vercel-pink": color === "pink",
            "border-vercel-blue": color === "blue",
            "border-vercel-cyan": color === "cyan",
            "border-vercel-violet": color === "violet",
            "border-vercel-orange": color === "orange",
            "animate-[rerender_1s_ease-in-out_1] text-vercel-pink": animateRerendering
        }),
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: clsx_default()("absolute -top-2.5 flex gap-x-1 text-[9px] uppercase leading-4 tracking-widest", {
                    "left-3 lg:left-5": size === "small",
                    "left-4 lg:left-9": size === "default"
                }),
                children: labels.map((label)=>{
                    return /*#__PURE__*/ jsx_runtime.jsx(Label, {
                        color: color,
                        animateRerendering: animateRerendering,
                        children: label
                    }, label);
                })
            }),
            children
        ]
    });
};

;// CONCATENATED MODULE: ./src/app/not-found.tsx


function NotFound() {
    return /*#__PURE__*/ jsx_runtime.jsx(Boundary, {
        labels: [
            "not-found.tsx"
        ],
        color: "pink",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "space-y-4 text-vercel-pink",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                    className: "text-lg font-bold",
                    children: "Not Found"
                }),
                /*#__PURE__*/ jsx_runtime.jsx("p", {
                    className: "text-sm",
                    children: "Could not find requested resource"
                })
            ]
        })
    });
}


/***/ }),

/***/ 633:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ GlobalNav */ const { createProxy  } = __webpack_require__(1399);
module.exports = createProxy("E:\\wamp64\\www\\ontour-wiki\\ui\\global-nav.tsx");


/***/ }),

/***/ 1656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"url":"/_next/static/media/metadata/favicon.7161ee1d.ico","type":"image/x-icon","sizes":"any"});

/***/ }),

/***/ 7441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "GlobalNav": () => (/* binding */ GlobalNav)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./lib/nevItems.ts
const nevItems = [
    {
        name: "Technical Doc",
        items: [
            {
                name: "Techincal Info",
                slug: "techenical-info"
            },
            {
                name: "Development Process",
                slug: "development-process"
            }
        ]
    }
];

;// CONCATENATED MODULE: ./ui/next-logo.tsx

function NextLogo() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 180 180",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("mask", {
                id: "mask0_408_134",
                style: {
                    maskType: "alpha"
                },
                x: "0",
                y: "0",
                width: "180",
                height: "180",
                children: /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                    cx: "90",
                    cy: "90",
                    r: "90",
                    fill: "black"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                mask: "url(#mask0_408_134)",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                        cx: "90",
                        cy: "90",
                        r: "90",
                        fill: "black"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z",
                        fill: "url(#paint0_linear_408_134)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        x: "115",
                        y: "54",
                        width: "12",
                        height: "72",
                        fill: "url(#paint1_linear_408_134)"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "paint0_linear_408_134",
                        x1: "109",
                        y1: "116.5",
                        x2: "144.5",
                        y2: "160.5",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: "white"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "1",
                                stopColor: "white",
                                stopOpacity: "0"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "paint1_linear_408_134",
                        x1: "121",
                        y1: "54",
                        x2: "120.799",
                        y2: "106.875",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: "white"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "1",
                                stopColor: "white",
                                stopOpacity: "0"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9483);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/solid/esm/XIcon.js
var XIcon = __webpack_require__(7179);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/solid/esm/MenuAlt2Icon.js
var MenuAlt2Icon = __webpack_require__(4145);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.js
var clsx = __webpack_require__(4889);
var clsx_default = /*#__PURE__*/__webpack_require__.n(clsx);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./ui/global-nav.tsx








function GlobalNav() {
    const [isOpen, setIsOpen] = (0,react_.useState)(false);
    const close = ()=>setIsOpen(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "fixed top-0 z-10 flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-72 lg:border-r lg:border-gray-800",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex h-14 items-center py-4 px-4 lg:h-auto",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                    href: "/",
                    className: "group flex w-full items-center gap-x-2.5",
                    onClick: close,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "h-7 w-7 rounded-full border border-white/30 group-hover:border-white/50",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(NextLogo, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                            className: "font-semibold tracking-wide text-gray-400 group-hover:text-gray-50",
                            children: [
                                "Ontour Doc ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "Work in progress",
                                    children: "(WIP)"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                type: "button",
                className: "group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden",
                onClick: ()=>setIsOpen(!isOpen),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "font-medium text-gray-100 group-hover:text-gray-400",
                        children: "Menu"
                    }),
                    isOpen ? /*#__PURE__*/ jsx_runtime_.jsx(XIcon/* default */.Z, {
                        className: "block w-6 text-gray-400"
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(MenuAlt2Icon/* default */.Z, {
                        className: "block w-6 text-gray-400"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: clsx_default()("overflow-y-auto lg:static lg:block", {
                    "fixed inset-x-0 bottom-0 top-14 mt-px bg-black": isOpen,
                    hidden: !isOpen
                }),
                children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    className: "space-y-6 px-2 py-5",
                    children: nevItems.map((section)=>{
                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400/80",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: section.name
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "space-y-1",
                                    children: section.items.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(GlobalNavItem, {
                                            item: item,
                                            close: close
                                        }, item.slug))
                                })
                            ]
                        }, section.name);
                    })
                })
            })
        ]
    });
}
function GlobalNavItem({ item , close  }) {
    const segment = (0,navigation.useSelectedLayoutSegment)();
    const isActive = item.slug === segment;
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        onClick: close,
        href: `/${item.slug}`,
        className: clsx_default()("block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300", {
            "text-gray-400 hover:bg-gray-800": !isActive,
            "text-white": isActive
        }),
        children: item.name
    });
}


/***/ }),

/***/ 6495:
/***/ (() => {



/***/ })

};
;