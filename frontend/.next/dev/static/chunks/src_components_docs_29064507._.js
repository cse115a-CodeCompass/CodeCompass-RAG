(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/docs/table-of-contents.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DocsTableOfContents",
    ()=>DocsTableOfContents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-client] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function DocsTableOfContents({ headings, isOpen = false, onClose, scrollContainerRef }) {
    _s();
    const [activeHeading, setActiveHeading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showBackToTop, setShowBackToTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DocsTableOfContents.useEffect": ()=>{
            if (headings.length === 0) return;
            const handleScroll = {
                "DocsTableOfContents.useEffect.handleScroll": ()=>{
                    const scrollContainer = scrollContainerRef?.current;
                    const headingElements = headings.map({
                        "DocsTableOfContents.useEffect.handleScroll.headingElements": (heading)=>{
                            const element = document.getElementById(heading.id);
                            return {
                                id: heading.id,
                                element
                            };
                        }
                    }["DocsTableOfContents.useEffect.handleScroll.headingElements"]).filter({
                        "DocsTableOfContents.useEffect.handleScroll.headingElements": (item)=>item.element
                    }["DocsTableOfContents.useEffect.handleScroll.headingElements"]);
                    if (headingElements.length === 0) return;
                    const scrollPosition = scrollContainer ? scrollContainer.scrollTop + 100 : window.scrollY + 100;
                    for(let i = headingElements.length - 1; i >= 0; i--){
                        const { id, element } = headingElements[i];
                        if (element.offsetTop <= scrollPosition) {
                            setActiveHeading(id);
                            break;
                        }
                    }
                    // Calculate scroll percentage for back-to-top button
                    if (scrollContainer) {
                        const scrollPercentage = scrollContainer.scrollTop / (scrollContainer.scrollHeight - scrollContainer.clientHeight) * 100;
                        setShowBackToTop(scrollPercentage > 20);
                    } else {
                        const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
                        setShowBackToTop(scrollPercentage > 20);
                    }
                }
            }["DocsTableOfContents.useEffect.handleScroll"];
            if (scrollContainerRef?.current) {
                const container = scrollContainerRef.current;
                container.addEventListener("scroll", handleScroll);
                handleScroll();
                return ({
                    "DocsTableOfContents.useEffect": ()=>container.removeEventListener("scroll", handleScroll)
                })["DocsTableOfContents.useEffect"];
            } else {
                window.addEventListener("scroll", handleScroll);
                handleScroll();
                return ({
                    "DocsTableOfContents.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
                })["DocsTableOfContents.useEffect"];
            }
        }
    }["DocsTableOfContents.useEffect"], [
        headings,
        scrollContainerRef
    ]);
    const scrollToHeading = (id)=>{
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const elementPosition = element.offsetTop;
            const offsetPosition = elementPosition - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };
    const scrollToTop = ()=>{
        const scrollContainer = scrollContainerRef?.current;
        if (scrollContainer) {
            scrollContainer.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        } else {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    };
    if (headings.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            isOpen && onClose && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 z-40 lg:hidden",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/src/components/docs/table-of-contents.tsx",
                lineNumber: 121,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: `
        w-64 shrink-0
        lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-8rem)]
        ${isOpen ? "fixed right-0 top-0 h-screen z-50 bg-background border-l border-border" : "hidden lg:block"}
      `,
                children: [
                    onClose && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:hidden p-4 border-b border-border flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold",
                                children: "Table of Contents"
                            }, void 0, false, {
                                fileName: "[project]/src/components/docs/table-of-contents.tsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "p-1 hover:bg-border rounded",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/docs/table-of-contents.tsx",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/docs/table-of-contents.tsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/docs/table-of-contents.tsx",
                        lineNumber: 137,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 max-h-[calc(100vh-12rem)] overflow-y-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4",
                                children: "On this page"
                            }, void 0, false, {
                                fileName: "[project]/src/components/docs/table-of-contents.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "space-y-1",
                                children: headings.map((heading)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            scrollToHeading(heading.id);
                                            if (onClose) onClose();
                                        },
                                        className: `block text-sm py-1.5 transition-colors text-left w-full rounded px-2 ${activeHeading === heading.id ? "text-teal-400 font-medium bg-teal-400/10" : "text-gray-400 hover:text-gray-300 hover:bg-gray-800/50"}`,
                                        style: {
                                            paddingLeft: `${(heading.level - 1) * 12 + 8}px`
                                        },
                                        children: heading.text
                                    }, heading.id, false, {
                                        fileName: "[project]/src/components/docs/table-of-contents.tsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/docs/table-of-contents.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/docs/table-of-contents.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    showBackToTop && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 pt-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: scrollToTop,
                            className: "w-full py-2 bg-gray-800 hover:bg-teal-600 border border-gray-700 rounded flex items-center justify-center gap-2 transition-all duration-200 text-sm text-gray-300 hover:text-white",
                            title: "Back to top",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/docs/table-of-contents.tsx",
                                    lineNumber: 179,
                                    columnNumber: 15
                                }, this),
                                "Back to top"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/docs/table-of-contents.tsx",
                            lineNumber: 174,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/docs/table-of-contents.tsx",
                        lineNumber: 173,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/docs/table-of-contents.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(DocsTableOfContents, "WWsb1MvCzXZ6eDofeVwHeQrxSg0=");
_c = DocsTableOfContents;
var _c;
__turbopack_context__.k.register(_c, "DocsTableOfContents");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/docs/mdx-content.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MdxContent",
    ()=>MdxContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/react-markdown/lib/index.js [app-client] (ecmascript) <export Markdown as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remark-gfm/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$docs$2f$table$2d$of$2d$contents$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/docs/table-of-contents.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function MdxContent({ content }) {
    _s();
    const [headings, setHeadings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isTocOpen, setIsTocOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Extract headings from markdown content
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MdxContent.useEffect": ()=>{
            const extractedHeadings = [];
            const lines = content.split("\n");
            lines.forEach({
                "MdxContent.useEffect": (line)=>{
                    const match = line.match(/^(#{1,6})\s+(.+)$/);
                    if (match) {
                        const level = match[1].length;
                        const text = match[2].trim();
                        const id = text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");
                        extractedHeadings.push({
                            id,
                            text,
                            level
                        });
                    }
                }
            }["MdxContent.useEffect"]);
            setHeadings(extractedHeadings);
        }
    }["MdxContent.useEffect"], [
        content
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-50 max-w-7xl mx-auto items-start",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                className: "min-w-0 prose prose-slate dark:prose-invert max-w-none lg:max-w-3xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__["default"], {
                    remarkPlugins: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
                    ],
                    components: {
                        h1: ({ node, children, ...props })=>{
                            const text = typeof children === "string" ? children : "";
                            const id = text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                id: id,
                                className: "text-3xl font-bold text-gray-800 dark:text-white mb-6 mt-2 scroll-mt-20",
                                ...props,
                                children: children
                            }, void 0, false, {
                                fileName: "[project]/src/components/docs/mdx-content.tsx",
                                lineNumber: 57,
                                columnNumber: 17
                            }, void 0);
                        },
                        h2: ({ node, children, ...props })=>{
                            const text = typeof children === "string" ? children : "";
                            const id = text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: id,
                                className: "text-2xl font-semibold text-gray-800 dark:text-white mb-4 mt-10 scroll-mt-20",
                                ...props,
                                children: children
                            }, void 0, false, {
                                fileName: "[project]/src/components/docs/mdx-content.tsx",
                                lineNumber: 73,
                                columnNumber: 17
                            }, void 0);
                        },
                        h3: ({ node, children, ...props })=>{
                            const text = typeof children === "string" ? children : "";
                            const id = text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                id: id,
                                className: "text-xl font-semibold text-gray-800 dark:text-white mb-3 mt-8 scroll-mt-20",
                                ...props,
                                children: children
                            }, void 0, false, {
                                fileName: "[project]/src/components/docs/mdx-content.tsx",
                                lineNumber: 89,
                                columnNumber: 17
                            }, void 0);
                        },
                        h4: ({ node, children, ...props })=>{
                            const text = typeof children === "string" ? children : "";
                            const id = text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                id: id,
                                className: "text-lg font-semibold text-gray-800 dark:text-white mb-3 mt-6 scroll-mt-20",
                                ...props,
                                children: children
                            }, void 0, false, {
                                fileName: "[project]/src/components/docs/mdx-content.tsx",
                                lineNumber: 105,
                                columnNumber: 17
                            }, void 0);
                        },
                        h5: ({ node, children, ...props })=>{
                            const text = typeof children === "string" ? children : "";
                            const id = text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                id: id,
                                className: "text-base font-semibold text-gray-800 dark:text-white mb-2 mt-4 scroll-mt-20",
                                ...props,
                                children: children
                            }, void 0, false, {
                                fileName: "[project]/src/components/docs/mdx-content.tsx",
                                lineNumber: 121,
                                columnNumber: 17
                            }, void 0);
                        },
                        h6: ({ node, children, ...props })=>{
                            const text = typeof children === "string" ? children : "";
                            const id = text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                id: id,
                                className: "text-sm font-semibold text-gray-800 dark:text-white mb-2 mt-4 scroll-mt-20",
                                ...props,
                                children: children
                            }, void 0, false, {
                                fileName: "[project]/src/components/docs/mdx-content.tsx",
                                lineNumber: 137,
                                columnNumber: 17
                            }, void 0);
                        },
                        p: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-grey-300 leading-relaxed mb-4",
                                ...props
                            }, void 0, false, {
                                fileName: "[project]/src/components/docs/mdx-content.tsx",
                                lineNumber: 147,
                                columnNumber: 15
                            }, void 0),
                        ul: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc list-inside text-grey-300 mb-4 space-y-2",
                                ...props
                            }, void 0, false, {
                                fileName: "[project]/src/components/docs/mdx-content.tsx",
                                lineNumber: 150,
                                columnNumber: 15
                            }, void 0),
                        ol: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                className: "list-decimal list-inside text-grey-300 mb-4 space-y-2",
                                ...props
                            }, void 0, false, {
                                fileName: "[project]/src/components/docs/mdx-content.tsx",
                                lineNumber: 156,
                                columnNumber: 15
                            }, void 0),
                        li: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "text-grey-300",
                                ...props
                            }, void 0, false, {
                                fileName: "[project]/src/components/docs/mdx-content.tsx",
                                lineNumber: 162,
                                columnNumber: 15
                            }, void 0),
                        a: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "text-teal-400 hover:text-teal-300 hover:underline",
                                ...props
                            }, void 0, false, {
                                fileName: "[project]/src/components/docs/mdx-content.tsx",
                                lineNumber: 165,
                                columnNumber: 15
                            }, void 0),
                        code: ({ node, className, children, ...props })=>{
                            const isInline = !className?.includes("language-");
                            return isInline ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                className: "bg-grey-800 text-teal-400 px-1.5 py-0.5 rounded text-sm",
                                ...props,
                                children: children
                            }, void 0, false, {
                                fileName: "[project]/src/components/docs/mdx-content.tsx",
                                lineNumber: 173,
                                columnNumber: 17
                            }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                className: "block bg-grey-800 text-grey-300 p-4 rounded border border-grey-700 overflow-x-auto",
                                ...props,
                                children: children
                            }, void 0, false, {
                                fileName: "[project]/src/components/docs/mdx-content.tsx",
                                lineNumber: 180,
                                columnNumber: 17
                            }, void 0);
                        },
                        blockquote: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                className: "border-l-4 border-teal-500 pl-4 italic text-grey-400 my-4",
                                ...props
                            }, void 0, false, {
                                fileName: "[project]/src/components/docs/mdx-content.tsx",
                                lineNumber: 189,
                                columnNumber: 15
                            }, void 0),
                        table: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto my-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "min-w-full border-collapse border border-grey-700",
                                    ...props
                                }, void 0, false, {
                                    fileName: "[project]/src/components/docs/mdx-content.tsx",
                                    lineNumber: 196,
                                    columnNumber: 17
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/src/components/docs/mdx-content.tsx",
                                lineNumber: 195,
                                columnNumber: 15
                            }, void 0),
                        thead: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                className: "bg-grey-800",
                                ...props
                            }, void 0, false, {
                                fileName: "[project]/src/components/docs/mdx-content.tsx",
                                lineNumber: 203,
                                columnNumber: 15
                            }, void 0),
                        tbody: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                className: "divide-y divide-grey-700",
                                ...props
                            }, void 0, false, {
                                fileName: "[project]/src/components/docs/mdx-content.tsx",
                                lineNumber: 206,
                                columnNumber: 15
                            }, void 0),
                        tr: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "border-b border-grey-700",
                                ...props
                            }, void 0, false, {
                                fileName: "[project]/src/components/docs/mdx-content.tsx",
                                lineNumber: 209,
                                columnNumber: 15
                            }, void 0),
                        th: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "px-4 py-3 text-left text-sm font-semibold text-grey-200 border border-grey-700",
                                ...props
                            }, void 0, false, {
                                fileName: "[project]/src/components/docs/mdx-content.tsx",
                                lineNumber: 212,
                                columnNumber: 15
                            }, void 0),
                        td: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-4 py-3 text-sm text-grey-300 border border-grey-700",
                                ...props
                            }, void 0, false, {
                                fileName: "[project]/src/components/docs/mdx-content.tsx",
                                lineNumber: 218,
                                columnNumber: 15
                            }, void 0)
                    },
                    children: content
                }, void 0, false, {
                    fileName: "[project]/src/components/docs/mdx-content.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/docs/mdx-content.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$docs$2f$table$2d$of$2d$contents$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DocsTableOfContents"], {
                headings: headings,
                isOpen: isTocOpen,
                onClose: ()=>setIsTocOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/components/docs/mdx-content.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsTocOpen(true),
                className: "lg:hidden fixed bottom-6 right-6 w-12 h-12 bg-teal-600 hover:bg-teal-700 rounded-full flex items-center justify-center shadow-lg z-30",
                title: "Table of Contents",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-6 h-6 text-white",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M4 6h16M4 12h16M4 18h16"
                    }, void 0, false, {
                        fileName: "[project]/src/components/docs/mdx-content.tsx",
                        lineNumber: 248,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/docs/mdx-content.tsx",
                    lineNumber: 242,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/docs/mdx-content.tsx",
                lineNumber: 237,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/docs/mdx-content.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(MdxContent, "wid2rSTOlKxhYqZGzsdBwI97BU0=");
_c = MdxContent;
var _c;
__turbopack_context__.k.register(_c, "MdxContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_docs_29064507._.js.map