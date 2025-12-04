module.exports = [
"[project]/src/components/dashboard/documentation/file-tree.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FileTreeSidebar",
    ()=>FileTreeSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
function FileTreeSidebar({ fileTree, selectedFile, expandedNodes, searchQuery, lastIndexed, onSelectFile, onToggleExpanded, onSearchChange, isOpen = false, onClose }) {
    const filterNodes = (nodes, query)=>{
        if (!query) return nodes;
        const lowerQuery = query.toLowerCase();
        const filtered = [];
        nodes.forEach((node)=>{
            const matchesSearch = node.title.toLowerCase().includes(lowerQuery);
            const filteredChildren = filterNodes(node.children, query);
            if (matchesSearch || filteredChildren.length > 0) {
                filtered.push({
                    ...node,
                    children: filteredChildren
                });
            }
        });
        return filtered;
    };
    const filteredTree = filterNodes(fileTree, searchQuery);
    const renderFileTree = (nodes, level = 0)=>{
        return nodes.map((node)=>{
            const hasChildren = node.children.length > 0;
            const isExpanded = searchQuery ? true : expandedNodes.has(node.id);
            const isSelected = selectedFile?.id === node.id;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            handleSelectFile(node);
                            if (hasChildren) {
                                onToggleExpanded(node.id);
                            }
                        },
                        className: `w-full flex items-center gap-2 px-2 py-1.5 text-sm transition-colors rounded ${isSelected ? "bg-elevated dark:text-white" : "text-gray-400 hover:bg-elevated/50 dark:hover:text-gray-300"}`,
                        style: {
                            paddingLeft: `${level * 12 + 8}px`
                        },
                        children: [
                            hasChildren ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                animate: {
                                    rotate: isExpanded ? 90 : 0
                                },
                                transition: {
                                    duration: 0.2
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "w-3 h-3 shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/documentation/file-tree.tsx",
                                    lineNumber: 107,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/documentation/file-tree.tsx",
                                lineNumber: 103,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/documentation/file-tree.tsx",
                                lineNumber: 110,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "truncate text-xs",
                                children: node.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/documentation/file-tree.tsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/documentation/file-tree.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this),
                    hasChildren && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        initial: false,
                        children: isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                height: 0,
                                opacity: 0
                            },
                            animate: {
                                height: "auto",
                                opacity: 1
                            },
                            exit: {
                                height: 0,
                                opacity: 0
                            },
                            transition: {
                                duration: 0.3,
                                ease: "easeInOut"
                            },
                            className: "overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-1",
                                children: renderFileTree(node.children, level + 1)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/documentation/file-tree.tsx",
                                lineNumber: 124,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/documentation/file-tree.tsx",
                            lineNumber: 117,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/documentation/file-tree.tsx",
                        lineNumber: 115,
                        columnNumber: 13
                    }, this)
                ]
            }, node.id, true, {
                fileName: "[project]/src/components/dashboard/documentation/file-tree.tsx",
                lineNumber: 87,
                columnNumber: 9
            }, this);
        });
    };
    const handleSelectFile = (file)=>{
        onSelectFile(file);
        // Close mobile drawer after selection
        if (onClose) {
            onClose();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            isOpen && onClose && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 z-40 lg:hidden",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/documentation/file-tree.tsx",
                lineNumber: 148,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `
        w-64 border-r border-border flex flex-col bg-background h-full
        lg:relative lg:translate-x-0
        ${isOpen ? "fixed inset-y-0 left-0 z-50 translate-x-0" : "hidden lg:flex"}
      `,
                children: [
                    onClose && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:hidden p-3 border-b border-border flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold",
                                children: "Documentation"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/documentation/file-tree.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "p-1 hover:bg-elevated rounded",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/documentation/file-tree.tsx",
                                    lineNumber: 167,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/documentation/file-tree.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/documentation/file-tree.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 border-b border-border",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-gray-500 mb-2",
                            children: [
                                "Last indexed: ",
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRelativeTime"])(lastIndexed)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/documentation/file-tree.tsx",
                            lineNumber: 173,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/documentation/file-tree.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-2 border-b border-border",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "absolute left-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/documentation/file-tree.tsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: searchQuery,
                                    onChange: (e)=>onSearchChange(e.target.value),
                                    placeholder: "Search...",
                                    className: "w-full bg-white dark:bg-gray-900 border border-border rounded pl-7 pr-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-teal-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/documentation/file-tree.tsx",
                                    lineNumber: 181,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/documentation/file-tree.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/documentation/file-tree.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-2",
                        children: filteredTree.length > 0 ? renderFileTree(filteredTree).map((element, index)=>{
                            // Clone element and update onSelectFile handler
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: element
                            }, index, false, {
                                fileName: "[project]/src/components/dashboard/documentation/file-tree.tsx",
                                lineNumber: 195,
                                columnNumber: 22
                            }, this);
                        }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-gray-500 p-2",
                            children: "No results found"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/documentation/file-tree.tsx",
                            lineNumber: 198,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/documentation/file-tree.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/documentation/file-tree.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs) <export default as minpath>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "minpath",
    ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
}),
"[externals]/node:process [external] (node:process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:process", () => require("node:process"));

module.exports = mod;
}),
"[externals]/node:process [external] (node:process, cjs) <export default as minproc>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "minproc",
    ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:process [external] (node:process, cjs)");
}),
"[externals]/node:url [external] (node:url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:url", () => require("node:url"));

module.exports = mod;
}),
"[externals]/node:url [external] (node:url, cjs) <export fileURLToPath as urlToPath>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "urlToPath",
    ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__["fileURLToPath"]
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:url [external] (node:url, cjs)");
}),
"[project]/src/lib/stores/useDocumentationStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDocumentationStore",
    ()=>useDocumentationStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
const useDocumentationStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set)=>({
        selectedVersion: null,
        availableVersions: [],
        isLoading: false,
        isIndexing: false,
        selectVersion: (version)=>set({
                selectedVersion: version
            }),
        setAvailableVersions: (versions)=>set({
                availableVersions: versions
            }),
        setIsLoading: (loading)=>set({
                isLoading: loading
            }),
        setIsIndexing: (indexing)=>set({
                isIndexing: indexing
            }),
        reset: ()=>set({
                selectedVersion: null,
                availableVersions: [],
                isLoading: false,
                isIndexing: false
            })
    }));
}),
"[project]/src/components/dashboard/chat/version-selector.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VersionSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/history.js [app-ssr] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useDocumentationStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/useDocumentationStore.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function VersionSelector() {
    const selectedVersion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useDocumentationStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDocumentationStore"])((state)=>state.selectedVersion);
    const availableVersions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useDocumentationStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDocumentationStore"])((state)=>state.availableVersions);
    const selectVersion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useDocumentationStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDocumentationStore"])((state)=>state.selectVersion);
    // If no versions available, don't render
    if (availableVersions.length === 0) {
        return null;
    }
    const formatDate = (dateString)=>{
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenu"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "flex items-center gap-2 px-3 py-1.5 bg-card hover:bg-accent/10 border border-border rounded-lg transition-colors text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"], {
                                    className: "w-3 h-3 text-muted-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/chat/version-selector.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-muted-foreground text-xs",
                                    children: "Version"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/chat/version-selector.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-foreground font-medium text-xs",
                                    children: selectedVersion ?? "N/A"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/chat/version-selector.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/chat/version-selector.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                            className: "w-3 h-3 text-muted-foreground"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/chat/version-selector.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/chat/version-selector.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/chat/version-selector.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                className: "bg-card border-border",
                align: "start",
                sideOffset: 8,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuLabel"], {
                        className: "text-xs font-semibold text-muted-foreground",
                        children: "SELECT VERSION"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/chat/version-selector.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuGroup"], {
                        children: availableVersions.map((version)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                onClick: ()=>selectVersion(version.version),
                                className: `cursor-pointer ${selectedVersion === version.version ? "text-foreground focus:text-foreground" : "text-muted-foreground"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between gap-2 w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-medium",
                                                            children: [
                                                                "Version ",
                                                                version.version
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/dashboard/chat/version-selector.tsx",
                                                            lineNumber: 75,
                                                            columnNumber: 21
                                                        }, this),
                                                        version.version === availableVersions[0]?.version && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs px-1.5 py-0.5 rounded bg-accent text-accent-foreground",
                                                            children: "Latest"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/chat/version-selector.tsx",
                                                            lineNumber: 80,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/chat/version-selector.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-muted-foreground mt-0.5",
                                                    children: formatDate(version.createdAt)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/chat/version-selector.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/chat/version-selector.tsx",
                                            lineNumber: 73,
                                            columnNumber: 17
                                        }, this),
                                        selectedVersion === version.version && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "w-4 h-4 shrink-0 text-accent"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/chat/version-selector.tsx",
                                            lineNumber: 91,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/chat/version-selector.tsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this)
                            }, version.version, false, {
                                fileName: "[project]/src/components/dashboard/chat/version-selector.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/chat/version-selector.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/chat/version-selector.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/chat/version-selector.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/dialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/dialog.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-lg leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/components/dashboard/documentation/main-content.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MainContent",
    ()=>MainContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/react-markdown/lib/index.js [app-ssr] (ecmascript) <export Markdown as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$chat$2f$version$2d$selector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/chat/version-selector.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mermaid$2f$dist$2f$mermaid$2e$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mermaid/dist/mermaid.core.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
// Initialize Mermaid once (outside component to avoid re-initialization)
let mermaidInitialized = false;
const initializeMermaid = (theme)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mermaid$2f$dist$2f$mermaid$2e$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].initialize({
        startOnLoad: false,
        theme: theme === "dark" ? "dark" : "default",
        securityLevel: "loose",
        fontFamily: "ui-sans-serif, system-ui, sans-serif"
    });
    mermaidInitialized = true;
};
function MermaidComponent({ chart }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { theme, resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Avoid hydration mismatch by waiting for client-side mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!mounted || !ref.current) return;
        const currentTheme = resolvedTheme || theme || "dark";
        // Re-initialize Mermaid when theme changes
        if (!mermaidInitialized || ref.current.dataset.theme !== currentTheme) {
            initializeMermaid(currentTheme);
        }
        const renderDiagram = async ()=>{
            if (!ref.current) return;
            try {
                // Clear previous content
                ref.current.innerHTML = "";
                setError(null);
                // Generate unique ID for each diagram
                const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
                // Render the diagram
                const { svg } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mermaid$2f$dist$2f$mermaid$2e$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].render(id, chart);
                if (ref.current) {
                    ref.current.innerHTML = svg;
                    ref.current.dataset.theme = currentTheme;
                }
            } catch (err) {
                const errorMessage = err instanceof Error ? err.message : "Failed to render diagram";
                console.error("Mermaid rendering error:", err);
                setError(errorMessage);
            }
        };
        renderDiagram();
    }, [
        chart,
        theme,
        resolvedTheme,
        mounted
    ]);
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "my-6 flex justify-center items-center min-h-[200px] bg-grey-900 rounded border border-grey-800",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-grey-500 text-sm",
                children: "Loading diagram..."
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                lineNumber: 107,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
            lineNumber: 106,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "my-6 bg-red-900/20 border border-red-800 rounded p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-400 text-sm font-semibold mb-1",
                    children: "Diagram rendering failed"
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-300/80 text-xs",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                    className: "mt-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                            className: "text-xs text-red-300/60 cursor-pointer hover:text-red-300/80",
                            children: "View source"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                            className: "mt-2 text-xs text-red-200/60 overflow-x-auto bg-red-950/30 p-2 rounded",
                            children: chart
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
            lineNumber: 114,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "mermaid my-6 flex justify-center items-center overflow-x-auto"
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
function MainContent({ selectedFile, scrollContainerRef: externalRef }) {
    const internalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollContainerRef = externalRef || internalRef;
    const [isFilesDialogOpen, setIsFilesDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo(0, 0);
        }
    }, [
        selectedFile,
        scrollContainerRef
    ]);
    if (!selectedFile) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-b border-grey-800 px-6 py-3"
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                    lineNumber: 156,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-grey-500 text-sm",
                        children: "Select a file to view documentation"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                    lineNumber: 157,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
            lineNumber: 155,
            columnNumber: 7
        }, this);
    }
    const generateHeadingId = (text)=>{
        return text.toLowerCase().replace(/[^\w]+/g, "-");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b border-grey-800 px-6 py-3 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-row gap-5 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl font-bold",
                                children: selectedFile.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$chat$2f$version$2d$selector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                        open: isFilesDialogOpen,
                        onOpenChange: setIsFilesDialogOpen,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                    className: "text-xs h-8 px-4 border border-grey-700 rounded hover:bg-grey-800 transition-colors flex items-center gap-2",
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    whileTap: {
                                        scale: 0.95
                                    },
                                    transition: {
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 17
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Relevant source files"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                                            lineNumber: 185,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            animate: {
                                                x: [
                                                    0,
                                                    3,
                                                    0
                                                ]
                                            },
                                            transition: {
                                                repeat: Infinity,
                                                duration: 1.5,
                                                ease: "easeInOut"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                                                lineNumber: 194,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                                            lineNumber: 186,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                                    lineNumber: 179,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                                className: "max-w-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                                children: "Referenced Source Files"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                                                lineNumber: 201,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                                children: selectedFile.referenced_files && selectedFile.referenced_files.length > 0 ? `${selectedFile.referenced_files.length} file(s) referenced in this documentation` : "No referenced files"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                                                lineNumber: 202,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                                        lineNumber: 200,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "py-4",
                                        children: !selectedFile.referenced_files || selectedFile.referenced_files.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-grey-400 text-center py-6",
                                            children: "No source files are referenced in this documentation page."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                                            lineNumber: 213,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-2",
                                            children: selectedFile.referenced_files.map((file, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-grey-800 hover:bg-grey-700 rounded px-3 py-2 text-xs text-teal-400 transition-colors font-mono break-words",
                                                    children: file
                                                }, index, false, {
                                                    fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                                            lineNumber: 217,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                                        lineNumber: 210,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scrollContainerRef,
                className: "flex-1 overflow-y-auto bg-grey-950",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-full lg:max-w-4xl mx-4 md:mx-8 lg:ml-24 lg:mr-8 py-8 pb-135",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "markdown-content",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__["default"], {
                                components: {
                                    h1: ({ node, children, ...props })=>{
                                        const text = typeof children === "string" ? children : "";
                                        const id = generateHeadingId(text);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            id: id,
                                            className: "text-3xl font-bold text-gray-800 dark:text-white mb-6 mt-2 scroll-mt-20",
                                            ...props,
                                            children: children
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                                            lineNumber: 245,
                                            columnNumber: 21
                                        }, void 0);
                                    },
                                    h2: ({ node, children, ...props })=>{
                                        const text = typeof children === "string" ? children : "";
                                        const id = generateHeadingId(text);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            id: id,
                                            className: "text-2xl font-semibold text-gray-800 dark:text-white mb-4 mt-10 scroll-mt-20",
                                            ...props,
                                            children: children
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                                            lineNumber: 258,
                                            columnNumber: 21
                                        }, void 0);
                                    },
                                    h3: ({ node, children, ...props })=>{
                                        const text = typeof children === "string" ? children : "";
                                        const id = generateHeadingId(text);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            id: id,
                                            className: "text-xl font-semibold text-gray-800 dark:text-white mb-3 mt-8 scroll-mt-20",
                                            ...props,
                                            children: children
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                                            lineNumber: 271,
                                            columnNumber: 21
                                        }, void 0);
                                    },
                                    h4: ({ node, children, ...props })=>{
                                        const text = typeof children === "string" ? children : "";
                                        const id = generateHeadingId(text);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            id: id,
                                            className: "text-lg font-semibold text-gray-800 dark:text-white mb-3 mt-6 scroll-mt-20",
                                            ...props,
                                            children: children
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                                            lineNumber: 284,
                                            columnNumber: 21
                                        }, void 0);
                                    },
                                    h5: ({ node, children, ...props })=>{
                                        const text = typeof children === "string" ? children : "";
                                        const id = generateHeadingId(text);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                            id: id,
                                            className: "text-base font-semibold text-gray-800 dark:text-white mb-2 mt-4 scroll-mt-20",
                                            ...props,
                                            children: children
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                                            lineNumber: 297,
                                            columnNumber: 21
                                        }, void 0);
                                    },
                                    h6: ({ node, children, ...props })=>{
                                        const text = typeof children === "string" ? children : "";
                                        const id = generateHeadingId(text);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                            id: id,
                                            className: "text-sm font-semibold text-gray-800 dark:text-white mb-2 mt-4 scroll-mt-20",
                                            ...props,
                                            children: children
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                                            lineNumber: 310,
                                            columnNumber: 21
                                        }, void 0);
                                    },
                                    p: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-grey-300 leading-relaxed mb-4",
                                            ...props
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                                            lineNumber: 320,
                                            columnNumber: 19
                                        }, void 0),
                                    ul: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "list-disc list-inside text-grey-300 mb-4 space-y-2",
                                            ...props
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                                            lineNumber: 326,
                                            columnNumber: 19
                                        }, void 0),
                                    ol: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                            className: "list-decimal list-inside text-grey-300 mb-4 space-y-2",
                                            ...props
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                                            lineNumber: 332,
                                            columnNumber: 19
                                        }, void 0),
                                    li: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "text-grey-300",
                                            ...props
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                                            lineNumber: 338,
                                            columnNumber: 19
                                        }, void 0),
                                    a: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            className: "text-teal-400 hover:text-teal-300 hover:underline",
                                            ...props
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                                            lineNumber: 341,
                                            columnNumber: 19
                                        }, void 0),
                                    code: ({ node, className, children, ...props })=>{
                                        const isInline = !className?.includes("language-");
                                        const match = /language-(\w+)/.exec(className || "");
                                        if (match && match[1] === "mermaid") {
                                            const code = String(children).replace(/\n$/, "");
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MermaidComponent, {
                                                chart: code
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                                                lineNumber: 352,
                                                columnNumber: 28
                                            }, void 0);
                                        }
                                        return isInline ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                            className: "bg-grey-800 text-teal-400 px-1.5 py-0.5 rounded text-sm",
                                            ...props,
                                            children: children
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                                            lineNumber: 355,
                                            columnNumber: 21
                                        }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                            className: "block bg-grey-800 text-grey-300 p-4 rounded border border-grey-700 overflow-x-auto",
                                            ...props,
                                            children: children
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                                            lineNumber: 362,
                                            columnNumber: 21
                                        }, void 0);
                                    },
                                    blockquote: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                            className: "border-l-4 border-teal-500 pl-4 italic text-grey-400 my-4",
                                            ...props
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                                            lineNumber: 371,
                                            columnNumber: 19
                                        }, void 0)
                                },
                                children: selectedFile.content
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                                lineNumber: 239,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                            lineNumber: 238,
                            columnNumber: 11
                        }, this),
                        selectedFile.referenced_files && selectedFile.referenced_files.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 pt-4 border-t border-grey-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xs font-semibold text-grey-400 mb-2",
                                    children: "Referenced Files"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                                    lineNumber: 385,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: selectedFile.referenced_files.map((file, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "bg-grey-800 hover:bg-grey-700 rounded px-2 py-1 text-xs text-teal-400 transition-colors font-mono",
                                            children: file
                                        }, i, false, {
                                            fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                                            lineNumber: 390,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                                    lineNumber: 388,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                            lineNumber: 384,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                    lineNumber: 237,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
                lineNumber: 233,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/documentation/main-content.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/dashboard/documentation/table-of-contents.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TableOfContentsSidebar",
    ()=>TableOfContentsSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-ssr] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
function TableOfContentsSidebar({ selectedFile, headings, onRefreshClick, isOpen = false, onClose, scrollContainerRef }) {
    const [activeHeading, setActiveHeading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [showBackToTop, setShowBackToTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!selectedFile || headings.length === 0) return;
        // Use the passed ref or fall back to querySelector
        const scrollContainer = scrollContainerRef?.current || document.querySelector(".overflow-y-auto");
        if (!scrollContainer) return;
        const handleScroll = ()=>{
            const headingElements = headings.map((heading)=>{
                const element = document.getElementById(heading.id);
                return {
                    id: heading.id,
                    element
                };
            }).filter((item)=>item.element);
            if (headingElements.length === 0) return;
            const scrollPosition = scrollContainer.scrollTop + 100;
            for(let i = headingElements.length - 1; i >= 0; i--){
                const { id, element } = headingElements[i];
                if (element.offsetTop <= scrollPosition) {
                    setActiveHeading(id);
                    break;
                }
            }
            const scrollPercentage = scrollContainer.scrollTop / (scrollContainer.scrollHeight - scrollContainer.clientHeight) * 100;
            setShowBackToTop(scrollPercentage > 50);
        };
        scrollContainer.addEventListener("scroll", handleScroll);
        handleScroll();
        return ()=>scrollContainer.removeEventListener("scroll", handleScroll);
    }, [
        selectedFile,
        headings,
        scrollContainerRef
    ]);
    const scrollToHeading = (id)=>{
        const element = document.getElementById(id);
        if (element) {
            // Use the passed ref or find the scroll container
            const scrollContainer = scrollContainerRef?.current || element.closest(".overflow-y-auto");
            if (scrollContainer) {
                const offset = 80;
                const elementPosition = element.offsetTop;
                const offsetPosition = elementPosition - offset;
                scrollContainer.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        }
    };
    const scrollToTop = ()=>{
        // Use the passed ref or find the main content scroll container
        const scrollContainer = scrollContainerRef?.current || document.querySelector(".overflow-y-auto");
        if (scrollContainer) {
            scrollContainer.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            isOpen && onClose && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 z-40 xl:hidden",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/documentation/table-of-contents.tsx",
                lineNumber: 114,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `
        w-64 border-l border-border flex flex-col bg-background
        xl:h-full
        ${isOpen ? "fixed right-0 top-0 h-screen z-50" : "hidden xl:flex"}
      `,
                children: [
                    onClose && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "xl:hidden p-3 border-b border-border flex items-center justify-between shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold",
                                children: "Table of Contents"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/documentation/table-of-contents.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "p-1 hover:bg-border rounded",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/documentation/table-of-contents.tsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/documentation/table-of-contents.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/documentation/table-of-contents.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-b border-border flex items-center justify-between shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onRefreshClick,
                            className: "text-xs text-gray-400 hover:text-teal-400 flex items-center gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                    className: "w-3 h-3"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/documentation/table-of-contents.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this),
                                "Refresh this wiki"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/documentation/table-of-contents.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/documentation/table-of-contents.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xs font-semibold text-gray-400 mb-3",
                                    children: "On this page"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/documentation/table-of-contents.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this),
                                selectedFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: headings.map((heading, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                scrollToHeading(heading.id);
                                                // Close mobile drawer after click
                                                if (onClose) onClose();
                                            },
                                            className: `block text-xs py-1 transition-colors text-left w-full ${activeHeading === heading.id ? "text-teal-400 font-medium" : "text-gray-400 hover:text-gray-300"}`,
                                            style: {
                                                paddingLeft: `${(heading.level - 1) * 12}px`
                                            },
                                            children: heading.text
                                        }, i, false, {
                                            fileName: "[project]/src/components/dashboard/documentation/table-of-contents.tsx",
                                            lineNumber: 158,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/documentation/table-of-contents.tsx",
                                    lineNumber: 156,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/documentation/table-of-contents.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/documentation/table-of-contents.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    showBackToTop && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-4 right-4 shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: scrollToTop,
                            className: "w-8 h-8 bg-gray-800 hover:bg-teal-600 border border-gray-700 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110",
                            title: "Back to top",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                                className: "w-4 h-4 text-gray-300"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/documentation/table-of-contents.tsx",
                                lineNumber: 188,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/documentation/table-of-contents.tsx",
                            lineNumber: 183,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/documentation/table-of-contents.tsx",
                        lineNumber: 182,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/documentation/table-of-contents.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/components/ui/skeleton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Skeleton",
    ()=>Skeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Skeleton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "skeleton",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-accent dark:bg-elevated animate-pulse rounded-md", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/skeleton.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/components/dashboard/documentation/file-tree-skeleton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FileTreeSkeleton",
    ()=>FileTreeSkeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.tsx [app-ssr] (ecmascript)");
;
;
function FileTreeSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-64 border-r border-border flex flex-col bg-background h-full hidden lg:flex",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 border-b border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                    className: "h-4 w-32"
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/documentation/file-tree-skeleton.tsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/documentation/file-tree-skeleton.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-2 border-b border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                    className: "h-8 w-full rounded"
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/documentation/file-tree-skeleton.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/documentation/file-tree-skeleton.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-2 space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-6 w-[85%]",
                        style: {
                            paddingLeft: "8px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/documentation/file-tree-skeleton.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-6 w-[70%]",
                        style: {
                            paddingLeft: "8px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/documentation/file-tree-skeleton.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-6 w-[80%]",
                        style: {
                            paddingLeft: "20px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/documentation/file-tree-skeleton.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-6 w-[75%]",
                        style: {
                            paddingLeft: "20px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/documentation/file-tree-skeleton.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-6 w-[70%]",
                        style: {
                            paddingLeft: "32px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/documentation/file-tree-skeleton.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-6 w-[65%]",
                        style: {
                            paddingLeft: "32px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/documentation/file-tree-skeleton.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-6 w-[90%]",
                        style: {
                            paddingLeft: "8px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/documentation/file-tree-skeleton.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-6 w-[75%]",
                        style: {
                            paddingLeft: "20px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/documentation/file-tree-skeleton.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-6 w-[60%]",
                        style: {
                            paddingLeft: "20px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/documentation/file-tree-skeleton.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-6 w-[80%]",
                        style: {
                            paddingLeft: "8px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/documentation/file-tree-skeleton.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/documentation/file-tree-skeleton.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/documentation/file-tree-skeleton.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/dashboard/documentation/main-content-skeleton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MainContentSkeleton",
    ()=>MainContentSkeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.tsx [app-ssr] (ecmascript)");
;
;
function MainContentSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b border-grey-800 px-6 py-3 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-7 w-64"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/documentation/main-content-skeleton.tsx",
                        lineNumber: 8,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-8 w-40"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/documentation/main-content-skeleton.tsx",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/documentation/main-content-skeleton.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto bg-grey-950",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-full lg:max-w-4xl mx-4 md:mx-8 lg:ml-24 lg:mr-8 py-8 space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-9 w-3/4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/documentation/main-content-skeleton.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-4 w-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/documentation/main-content-skeleton.tsx",
                                    lineNumber: 20,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-4 w-[95%]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/documentation/main-content-skeleton.tsx",
                                    lineNumber: 21,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-4 w-[90%]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/documentation/main-content-skeleton.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-4 w-[70%]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/documentation/main-content-skeleton.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/documentation/main-content-skeleton.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-8 w-2/3 mt-10"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/documentation/main-content-skeleton.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-4 w-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/documentation/main-content-skeleton.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-4 w-[92%]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/documentation/main-content-skeleton.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-4 w-[85%]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/documentation/main-content-skeleton.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/documentation/main-content-skeleton.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-32 w-full bg-grey-800 border border-grey-700"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/documentation/main-content-skeleton.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-7 w-1/2 mt-8"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/documentation/main-content-skeleton.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-4 w-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/documentation/main-content-skeleton.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-4 w-[88%]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/documentation/main-content-skeleton.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-4 w-[95%]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/documentation/main-content-skeleton.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-4 w-[75%]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/documentation/main-content-skeleton.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/documentation/main-content-skeleton.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2 ml-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-4 w-[90%]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/documentation/main-content-skeleton.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-4 w-[85%]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/documentation/main-content-skeleton.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-4 w-[80%]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/documentation/main-content-skeleton.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/documentation/main-content-skeleton.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-7 w-[55%] mt-8"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/documentation/main-content-skeleton.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-4 w-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/documentation/main-content-skeleton.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-4 w-[93%]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/documentation/main-content-skeleton.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/documentation/main-content-skeleton.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/documentation/main-content-skeleton.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/documentation/main-content-skeleton.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/documentation/main-content-skeleton.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/dashboard/documentation/table-of-contents-skeleton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TableOfContentsSkeleton",
    ()=>TableOfContentsSkeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.tsx [app-ssr] (ecmascript)");
;
;
function TableOfContentsSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-64 border-l border-border flex flex-col bg-background hidden xl:flex",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-b border-border flex items-center justify-between shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                    className: "h-4 w-32"
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/documentation/table-of-contents-skeleton.tsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/documentation/table-of-contents-skeleton.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-4 w-20 mb-3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/documentation/table-of-contents-skeleton.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-3 w-[75%]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/documentation/table-of-contents-skeleton.tsx",
                                    lineNumber: 20,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-3 w-[70%]",
                                    style: {
                                        paddingLeft: "12px"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/documentation/table-of-contents-skeleton.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-3 w-[65%]",
                                    style: {
                                        paddingLeft: "12px"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/documentation/table-of-contents-skeleton.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-3 w-[60%]",
                                    style: {
                                        paddingLeft: "24px"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/documentation/table-of-contents-skeleton.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-3 w-[55%]",
                                    style: {
                                        paddingLeft: "24px"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/documentation/table-of-contents-skeleton.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-3 w-[68%]",
                                    style: {
                                        paddingLeft: "12px"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/documentation/table-of-contents-skeleton.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-3 w-[72%]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/documentation/table-of-contents-skeleton.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-3 w-[62%]",
                                    style: {
                                        paddingLeft: "12px"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/documentation/table-of-contents-skeleton.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/documentation/table-of-contents-skeleton.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/documentation/table-of-contents-skeleton.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/documentation/table-of-contents-skeleton.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/documentation/table-of-contents-skeleton.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/dashboard/documentation/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildFileTree",
    ()=>buildFileTree,
    "extractHeadings",
    ()=>extractHeadings
]);
function buildFileTree(pages) {
    const nodeMap = new Map();
    const rootNodes = [];
    pages.forEach((page)=>{
        nodeMap.set(page.id, {
            ...page,
            children: []
        });
    });
    pages.forEach((page)=>{
        const node = nodeMap.get(page.id);
        if (page.parent_page_id === null) {
            rootNodes.push(node);
        } else {
            const parent = nodeMap.get(page.parent_page_id);
            if (parent) {
                parent.children.push(node);
            }
        }
    });
    const sortNodes = (nodes)=>{
        nodes.sort((a, b)=>a.order_index - b.order_index);
        nodes.forEach((node)=>{
            if (node.children.length > 0) {
                sortNodes(node.children);
            }
        });
    };
    sortNodes(rootNodes);
    return rootNodes;
}
function extractHeadings(content) {
    const lines = content.split('\n');
    const extractedHeadings = [];
    lines.forEach((line)=>{
        const match = line.match(/^(#{1,6})\s+(.+)$/);
        if (match) {
            const level = match[1].length;
            const text = match[2].trim();
            const id = text.toLowerCase().replace(/[^\w]+/g, '-');
            extractedHeadings.push({
                id,
                text,
                level
            });
        }
    });
    return extractedHeadings;
}
}),
"[project]/src/components/ui/empty.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/ui/empty.tsx
__turbopack_context__.s([
    "Empty",
    ()=>Empty
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Empty({ title, description, children, icon }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center text-center py-12",
        children: [
            icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 rounded-lg bg-muted p-2",
                children: icon
            }, void 0, false, {
                fileName: "[project]/src/components/ui/empty.tsx",
                lineNumber: 14,
                columnNumber: 16
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-semibold",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/ui/empty.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-muted-foreground mt-2",
                children: description
            }, void 0, false, {
                fileName: "[project]/src/components/ui/empty.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, this),
            children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/empty.tsx",
                lineNumber: 19,
                columnNumber: 20
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/empty.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/services/data:e26083 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"400db6ea304681407a6ffd627cbcd0a8a8d67d75ee":"indexRepository"},"src/lib/services/repoService.ts",""] */ __turbopack_context__.s([
    "indexRepository",
    ()=>indexRepository
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var indexRepository = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("400db6ea304681407a6ffd627cbcd0a8a8d67d75ee", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "indexRepository"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcmVwb1NlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAL3V0aWxzL3N1cGFiYXNlL3NlcnZlclwiO1xuaW1wb3J0IHtcbiAgUmVwbyxcbiAgRG9jdW1lbnRhdGlvbixcbiAgRG9jUGFnZSxcbiAgQ29udmVyc2F0aW9uLFxuICBDb252ZXJzYXRpb25NZXNzYWdlLFxuICBDb2RlU25pcHBldCxcbn0gZnJvbSBcIkAvYXBwL3R5cGVzL3N1cGFiYXNlXCI7XG5pbXBvcnQgeyBBY3Rpb25SZXN1bHQgfSBmcm9tIFwiQC9hcHAvdHlwZXMvYWN0aW9uXCI7XG5pbXBvcnQge1xuICB2ZXJpZnlHaXRodWJSZXBvQWNjZXNzLFxuICB2ZXJpZnlHaXRMYWJSZXBvQWNjZXNzLFxufSBmcm9tIFwiLi9naXRQcm92aWRlclNlcnZpY2VcIjtcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHBhcnNlIEdpdEh1YiBVUkxzXG5mdW5jdGlvbiBwYXJzZUdpdEh1YlVybCh1cmw6IHN0cmluZyk6IHsgb3duZXI6IHN0cmluZzsgcmVwbzogc3RyaW5nIH0ge1xuICB0cnkge1xuICAgIC8vIEhhbmRsZSBtdWx0aXBsZSBmb3JtYXRzOlxuICAgIC8vIC0gaHR0cHM6Ly9naXRodWIuY29tL293bmVyL3JlcG9cbiAgICAvLyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9vd25lci9yZXBvLmdpdFxuICAgIC8vIC0gZ2l0QGdpdGh1Yi5jb206b3duZXIvcmVwby5naXRcblxuICAgIHVybCA9IHVybC50cmltKCkucmVwbGFjZSgvXFwuZ2l0JC8sIFwiXCIpO1xuXG4gICAgaWYgKHVybC5pbmNsdWRlcyhcImdpdGh1Yi5jb20vXCIpKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IHVybC5zcGxpdChcImdpdGh1Yi5jb20vXCIpWzFdLnNwbGl0KFwiL1wiKTtcbiAgICAgIHJldHVybiB7IG93bmVyOiBwYXJ0c1swXSwgcmVwbzogcGFydHNbMV0gfTtcbiAgICB9XG5cbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoXCJnaXRAZ2l0aHViLmNvbTpcIikpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gdXJsLnJlcGxhY2UoXCJnaXRAZ2l0aHViLmNvbTpcIiwgXCJcIikuc3BsaXQoXCIvXCIpO1xuICAgICAgcmV0dXJuIHsgb3duZXI6IHBhcnRzWzBdLCByZXBvOiBwYXJ0c1sxXSB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IG93bmVyOiBcIlwiLCByZXBvOiBcIlwiIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgb3duZXI6IFwiXCIsIHJlcG86IFwiXCIgfTtcbiAgfVxufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gcGFyc2UgR2l0TGFiIFVSTHNcbmZ1bmN0aW9uIHBhcnNlR2l0TGFiVXJsKHVybDogc3RyaW5nKTogeyBvd25lcjogc3RyaW5nOyByZXBvOiBzdHJpbmcgfSB7XG4gIHRyeSB7XG4gICAgLy8gSGFuZGxlIG11bHRpcGxlIGZvcm1hdHM6XG4gICAgLy8gLSBodHRwczovL2dpdGxhYi5jb20vb3duZXIvcmVwb1xuICAgIC8vIC0gaHR0cHM6Ly9naXRsYWIuY29tL293bmVyL3N1Ymdyb3VwL3JlcG9cbiAgICAvLyAtIGh0dHBzOi8vZ2l0bGFiLmNvbS9vd25lci9yZXBvLmdpdFxuICAgIC8vIC0gZ2l0QGdpdGxhYi5jb206b3duZXIvcmVwby5naXRcbiAgICAvLyAtIFNlbGYtaG9zdGVkOiBodHRwczovL2dpdGxhYi5leGFtcGxlLmNvbS9vd25lci9yZXBvXG5cbiAgICB1cmwgPSB1cmwudHJpbSgpLnJlcGxhY2UoL1xcLmdpdCQvLCBcIlwiKTtcblxuICAgIC8vIEhhbmRsZSBIVFRQUyBVUkxzIChnaXRsYWIuY29tIG9yIHNlbGYtaG9zdGVkKVxuICAgIGlmICh1cmwuaW5jbHVkZXMoXCJnaXRsYWIuY29tL1wiKSB8fCAvZ2l0bGFiXFwuW14vXStcXC8vLnRlc3QodXJsKSkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgcGF0aCBhZnRlciB0aGUgZG9tYWluXG4gICAgICBjb25zdCBtYXRjaCA9IHVybC5tYXRjaCgvZ2l0bGFiW14vXSpcXC8oLispLyk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgY29uc3QgcGF0aFBhcnRzID0gbWF0Y2hbMV0uc3BsaXQoXCIvXCIpO1xuICAgICAgICAvLyBHaXRMYWIgc3VwcG9ydHMgbmVzdGVkIGdyb3Vwcywgc28gd2UgbmVlZCB0byBoYW5kbGU6XG4gICAgICAgIC8vIC0gb3duZXIvcmVwbyAoMiBwYXJ0cylcbiAgICAgICAgLy8gLSBvd25lci9zdWJncm91cC9yZXBvICgzKyBwYXJ0cylcbiAgICAgICAgaWYgKHBhdGhQYXJ0cy5sZW5ndGggPj0gMikge1xuICAgICAgICAgIC8vIFRha2UgZXZlcnl0aGluZyBleGNlcHQgdGhlIGxhc3QgcGFydCBhcyBvd25lci9ncm91cFxuICAgICAgICAgIGNvbnN0IHJlcG8gPSBwYXRoUGFydHNbcGF0aFBhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IG93bmVyID0gcGF0aFBhcnRzLnNsaWNlKDAsIC0xKS5qb2luKFwiL1wiKTtcbiAgICAgICAgICByZXR1cm4geyBvd25lciwgcmVwbyB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIFNTSCBVUkxzXG4gICAgaWYgKHVybC5zdGFydHNXaXRoKFwiZ2l0QGdpdGxhYi5jb206XCIpIHx8IC9naXRAZ2l0bGFiXFwuW146XSs6Ly50ZXN0KHVybCkpIHtcbiAgICAgIGNvbnN0IG1hdGNoID0gdXJsLm1hdGNoKC9naXRAZ2l0bGFiW146XSo6KC4rKS8pO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGNvbnN0IHBhdGhQYXJ0cyA9IG1hdGNoWzFdLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgaWYgKHBhdGhQYXJ0cy5sZW5ndGggPj0gMikge1xuICAgICAgICAgIGNvbnN0IHJlcG8gPSBwYXRoUGFydHNbcGF0aFBhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IG93bmVyID0gcGF0aFBhcnRzLnNsaWNlKDAsIC0xKS5qb2luKFwiL1wiKTtcbiAgICAgICAgICByZXR1cm4geyBvd25lciwgcmVwbyB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgb3duZXI6IFwiXCIsIHJlcG86IFwiXCIgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBvd25lcjogXCJcIiwgcmVwbzogXCJcIiB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXBvc0J5T3JnYW5pemF0aW9uSWQoXG4gIG9yZ2FuaXphdGlvbklkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHVzZXIgPSBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJvcmdhbml6YXRpb25faWRcIiwgb3JnYW5pemF0aW9uSWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKGRhdGEgPz8gW10pIGFzIFJlcG9bXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUmVwb1ZpYUdpdGh1YihcbiAgZm9ybURhdGE6IEZvcm1EYXRhLFxuICBvcmdJZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8UmVwbyB8IHVuZGVmaW5lZD4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IHByb3ZpZGVyID0gZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IHVybCA9IGZvcm1EYXRhLmdldChcImdpdGh1Yi11cmxcIikgYXMgc3RyaW5nO1xuXG4gIGlmICghbmFtZSkge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJOYW1lIGlzIHJlcXVpcmVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGluc3RhbGxhdGlvbiB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJnaXRodWJfaW5zdGFsbGF0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiaW5zdGFsbGVkX2J5XCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghaW5zdGFsbGF0aW9uKSB7XG4gICAgLy8gTm8gR2l0SHViIEFwcCBpbnN0YWxsYXRpb24gLSBwcm9tcHQgdXNlciB0byBpbnN0YWxsXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiSW5zdGFsbGF0aW9uIE5lZWRlZFwiLFxuICAgIH07XG4gIH1cblxuICAvL3BhcnNlIHVybCBmb3Igb3duZXIgYW5kIHJlcG9cbiAgY29uc3QgeyBvd25lciwgcmVwbzogcmVwb05hbWUgfSA9IHBhcnNlR2l0SHViVXJsKHVybCk7XG5cbiAgY29uc3QgaGFzQWNjZXNzID0gYXdhaXQgdmVyaWZ5R2l0aHViUmVwb0FjY2VzcyhcbiAgICBpbnN0YWxsYXRpb24uaWQsXG4gICAgb3duZXIsXG4gICAgcmVwb05hbWUsXG4gICk7XG5cbiAgaWYgKCFoYXNBY2Nlc3MpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBlcnJvcjogXCJBY2Nlc3MgRGVuaWVkXCIsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3I6IHJlcG9FcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAuaW5zZXJ0KHtcbiAgICAgIG5hbWUsXG4gICAgICBwcm92aWRlcixcbiAgICAgIHJlcG9fdXJsOiB1cmwsXG4gICAgICBvcmdhbml6YXRpb25faWQ6IG9yZ0lkLFxuICAgICAgaW5kZXhlZF9ieTogdXNlci5pZCxcbiAgICAgIGluZGV4X3N0YXR1czogXCJub3QgaW5kZXhlZFwiLFxuICAgIH0pXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChyZXBvRXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHJlcG9FcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXBvIGFzIFJlcG8gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVJlcG9WaWFHaXRsYWIoXG4gIGZvcm1EYXRhOiBGb3JtRGF0YSxcbiAgb3JnSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFJlcG8gfCB1bmRlZmluZWQ+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICBjb25zdCBwcm92aWRlciA9IGZvcm1EYXRhLmdldChcInR5cGVcIikgYXMgc3RyaW5nO1xuICBjb25zdCB1cmwgPSBmb3JtRGF0YS5nZXQoXCJnaXRsYWItdXJsXCIpIGFzIHN0cmluZztcblxuICAvLyBWYWxpZGF0ZSBpbnB1dHNcbiAgaWYgKCFuYW1lIHx8IG5hbWUudHJpbSgpID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlJlcG9zaXRvcnkgbmFtZSBpcyByZXF1aXJlZFwiIH07XG4gIH1cblxuICBpZiAoIXVybCB8fCB1cmwudHJpbSgpID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkdpdExhYiBVUkwgaXMgcmVxdWlyZWRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBpbnN0YWxsYXRpb24gfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZ2l0bGFiX2luc3RhbGxhdGlvbnNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImluc3RhbGxlZF9ieVwiLCB1c2VyLmlkKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoIWluc3RhbGxhdGlvbikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJJbnN0YWxsYXRpb24gTmVlZGVkXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgb3duZXIsIHJlcG86IHJlcG9OYW1lIH0gPSBwYXJzZUdpdExhYlVybCh1cmwpO1xuXG4gIC8vdmVyaWZ5IGFjY2Vzc1xuICBjb25zdCBoYXNBY2Nlc3MgPSBhd2FpdCB2ZXJpZnlHaXRMYWJSZXBvQWNjZXNzKFxuICAgIGluc3RhbGxhdGlvbi5hY2Nlc3NfdG9rZW4sXG4gICAgb3duZXIsXG4gICAgcmVwb05hbWUsXG4gICk7XG5cbiAgaWYgKCFoYXNBY2Nlc3MpIHtcbiAgICBpZiAoaW5zdGFsbGF0aW9uLmFjY2Vzc190b2tlbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIGVycm9yOiBcIkFjY2VzcyByZXF1aXJlZCFcIixcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiQWNjZXNzIGRlbmllZCFcIixcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvcjogcmVwb0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgIC5pbnNlcnQoe1xuICAgICAgbmFtZSxcbiAgICAgIHByb3ZpZGVyLFxuICAgICAgcmVwb191cmw6IHVybCxcbiAgICAgIG9yZ2FuaXphdGlvbl9pZDogb3JnSWQsXG4gICAgICBpbmRleGVkX2J5OiB1c2VyLmlkLFxuICAgICAgaW5kZXhfc3RhdHVzOiBcIm5vdCBpbmRleGVkXCIsXG4gICAgfSlcbiAgICAuc2VsZWN0KClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKHJlcG9FcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogcmVwb0Vycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlcG8gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVJlcG9WaWFMb2NhbEZpbGUoXG4gIGZvcm1EYXRhOiBGb3JtRGF0YSxcbiAgb3JnSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFJlcG8+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KFwiZmlsZVwiKSBhcyBGaWxlO1xuXG4gIC8vIFZhbGlkYXRlIGlucHV0c1xuICBpZiAoIW5hbWUgfHwgbmFtZS50cmltKCkgPT09IFwiXCIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUmVwb3NpdG9yeSBuYW1lIGlzIHJlcXVpcmVkXCIgfTtcbiAgfVxuXG4gIGlmICghZmlsZSkge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGaWxlIGlzIHJlcXVpcmVkXCIgfTtcbiAgfVxuXG4gIC8vIFZhbGlkYXRlIGZpbGUgdHlwZVxuICBpZiAoIWZpbGUubmFtZS5lbmRzV2l0aChcIi56aXBcIikpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiT25seSAuemlwIGZpbGVzIGFyZSBhbGxvd2VkXCIgfTtcbiAgfVxuXG4gIC8vIFZhbGlkYXRlIGZpbGUgc2l6ZSAobWF4IDEwME1CKVxuICBjb25zdCBtYXhTaXplID0gMTAwICogMTAyNCAqIDEwMjQ7IC8vIDEwME1CIGluIGJ5dGVzXG4gIGlmIChmaWxlLnNpemUgPiBtYXhTaXplKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiRmlsZSBzaXplIGV4Y2VlZHMgMTAwTUIgbGltaXRcIixcbiAgICB9O1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBHZW5lcmF0ZSBhIHVuaXF1ZSBmaWxlIG5hbWUgdG8gcHJldmVudCBjb2xsaXNpb25zXG4gICAgY29uc3QgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBzYW5pdGl6ZWROYW1lID0gbmFtZS50cmltKCkucmVwbGFjZSgvW15hLXowLTktX10vZ2ksIFwiX1wiKTtcbiAgICBjb25zdCBmaWxlTmFtZSA9IGAke3Nhbml0aXplZE5hbWV9XyR7dGltZXN0YW1wfV8ke2ZpbGUubmFtZX1gO1xuICAgIGNvbnN0IGZpbGVQYXRoID0gYCR7b3JnSWR9LyR7ZmlsZU5hbWV9YDtcblxuICAgIC8vIFVwbG9hZCBmaWxlIHRvIFN1cGFiYXNlIFN0b3JhZ2VcbiAgICBjb25zdCB7IGVycm9yOiB1cGxvYWRFcnJvciB9ID0gYXdhaXQgY2xpZW50LnN0b3JhZ2VcbiAgICAgIC5mcm9tKFwibG9jYWxfcmVwb3NcIilcbiAgICAgIC51cGxvYWQoZmlsZVBhdGgsIGZpbGUsIHtcbiAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vemlwXCIsXG4gICAgICAgIHVwc2VydDogZmFsc2UsXG4gICAgICB9KTtcblxuICAgIGlmICh1cGxvYWRFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIlVwbG9hZCBlcnJvcjpcIiwgdXBsb2FkRXJyb3IpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIGVycm9yOiBgRmlsZSB1cGxvYWQgZmFpbGVkOiAke3VwbG9hZEVycm9yLm1lc3NhZ2V9YCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gR2V0IHRoZSBwdWJsaWMgVVJMIGZvciB0aGUgdXBsb2FkZWQgZmlsZVxuICAgIGNvbnN0IHsgZGF0YTogdXJsRGF0YSB9ID0gY2xpZW50LnN0b3JhZ2VcbiAgICAgIC5mcm9tKFwibG9jYWxfcmVwb3NcIilcbiAgICAgIC5nZXRQdWJsaWNVcmwoZmlsZVBhdGgpO1xuXG4gICAgLy8gQ3JlYXRlIHJlcG9zaXRvcnkgcmVjb3JkIGluIGRhdGFiYXNlXG4gICAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvcjogcmVwb0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgICAuaW5zZXJ0KHtcbiAgICAgICAgbmFtZTogbmFtZS50cmltKCksXG4gICAgICAgIHByb3ZpZGVyOiBcImxvY2FsXCIsXG4gICAgICAgIHJlcG9fdXJsOiBudWxsLFxuICAgICAgICBvYmplY3RfdXJsOiB1cmxEYXRhLnB1YmxpY1VybCxcbiAgICAgICAgb3JnYW5pemF0aW9uX2lkOiBvcmdJZCxcbiAgICAgICAgaW5kZXhlZF9ieTogdXNlci5pZCxcbiAgICAgICAgaW5kZXhfc3RhdHVzOiBcIm5vdCBpbmRleGVkXCIsXG4gICAgICB9KVxuICAgICAgLnNlbGVjdCgpXG4gICAgICAuc2luZ2xlKCk7XG5cbiAgICBpZiAocmVwb0Vycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiUmVwb3NpdG9yeSBjcmVhdGlvbiBlcnJvcjpcIiwgcmVwb0Vycm9yKTtcbiAgICAgIC8vIEF0dGVtcHQgdG8gY2xlYW4gdXAgdXBsb2FkZWQgZmlsZVxuICAgICAgYXdhaXQgY2xpZW50LnN0b3JhZ2UuZnJvbShcImxvY2FsX3JlcG9zXCIpLnJlbW92ZShbZmlsZVBhdGhdKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogYFJlcG9zaXRvcnkgY3JlYXRpb24gZmFpbGVkOiAke3JlcG9FcnJvci5tZXNzYWdlfWAsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlcG8gYXMgUmVwbyB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJVbmV4cGVjdGVkIGVycm9yOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6XG4gICAgICAgIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkXCIsXG4gICAgfTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSZXBvc2l0b3J5IE1hbmFnZW1lbnQgU2VydmljZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlcG9XaXRoU3RhdHVzKFxuICByZXBvSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFJlcG8+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImlkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICBpZiAoIXJlcG8pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUmVwb3NpdG9yeSBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVwbyBhcyBSZXBvIH07XG59XG5cbnR5cGUgVXBkYXRlRGF0YSA9IHtcbiAgbmFtZT86IHN0cmluZztcbiAgcmVwb191cmw/OiBzdHJpbmc7XG4gIG9iamVjdF91cmw/OiBzdHJpbmc7XG4gIGluZGV4X3N0YXR1cz86IHN0cmluZztcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVSZXBvU2V0dGluZ3MoXG4gIHJlcG9JZDogc3RyaW5nLFxuICBzZXR0aW5nczogeyBuYW1lPzogc3RyaW5nOyByZXBvX3VybD86IHN0cmluZzsgZmlsZT86IEZpbGUgfSxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFJlcG8+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gR2V0IHRoZSBjdXJyZW50IHJlcG8gdG8gY2hlY2sgaXRzIHByb3ZpZGVyIHR5cGVcbiAgY29uc3QgeyBkYXRhOiBjdXJyZW50UmVwbyB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImlkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKCFjdXJyZW50UmVwbykge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJSZXBvc2l0b3J5IG5vdCBmb3VuZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgdXBkYXRlRGF0YTogVXBkYXRlRGF0YSA9IHt9O1xuXG4gIC8vIEhhbmRsZSBuYW1lIHVwZGF0ZVxuICBpZiAoc2V0dGluZ3MubmFtZSkge1xuICAgIHVwZGF0ZURhdGEubmFtZSA9IHNldHRpbmdzLm5hbWU7XG4gIH1cblxuICAvLyBIYW5kbGUgR2l0SHViIFVSTCB1cGRhdGVcbiAgaWYgKHNldHRpbmdzLnJlcG9fdXJsICYmIGN1cnJlbnRSZXBvLnByb3ZpZGVyID09PSBcImdpdGh1YlwiKSB7XG4gICAgY29uc3QgeyBvd25lciwgcmVwbyB9ID0gcGFyc2VHaXRIdWJVcmwoc2V0dGluZ3MucmVwb191cmwpO1xuXG4gICAgaWYgKCFvd25lciB8fCAhcmVwbykge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkludmFsaWQgR2l0SHViIFVSTCBmb3JtYXQhXCIgfTtcbiAgICB9XG5cbiAgICAvLyBWZXJpZnkgYWNjZXNzIHRvIHRoZSBuZXcgcmVwb1xuICAgIGNvbnN0IHsgZGF0YTogaW5zdGFsbGF0aW9uIH0gPSBhd2FpdCBjbGllbnRcbiAgICAgIC5mcm9tKFwiZ2l0aHViX2luc3RhbGxhdGlvbnNcIilcbiAgICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgICAuZXEoXCJpbnN0YWxsZWRfYnlcIiwgdXNlci5pZClcbiAgICAgIC5zaW5nbGUoKTtcblxuICAgIGlmICghaW5zdGFsbGF0aW9uKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiR2l0SHViIEFwcCBub3QgaW5zdGFsbGVkIVwiIH07XG4gICAgfVxuXG4gICAgY29uc3QgaGFzQWNjZXNzID0gYXdhaXQgdmVyaWZ5R2l0aHViUmVwb0FjY2VzcyhcbiAgICAgIGluc3RhbGxhdGlvbi5pbnN0YWxsYXRpb25faWQudG9TdHJpbmcoKSxcbiAgICAgIG93bmVyLFxuICAgICAgcmVwbyxcbiAgICApO1xuXG4gICAgaWYgKCFoYXNBY2Nlc3MpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjpcbiAgICAgICAgICBcIkNhbm5vdCBhY2Nlc3MgdGhpcyByZXBvc2l0b3J5LiBNYWtlIHN1cmUgdGhlIEdpdEh1YiBBcHAgaXMgaW5zdGFsbGVkIGZvciB0aGlzIHJlcG9zaXRvcnkuXCIsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHVwZGF0ZURhdGEucmVwb191cmwgPSBzZXR0aW5ncy5yZXBvX3VybDtcbiAgICB1cGRhdGVEYXRhLmluZGV4X3N0YXR1cyA9IFwibm90IGluZGV4ZWRcIjsgLy8gVHJpZ2dlciByZS1pbmRleGluZ1xuICB9XG5cbiAgLy8gSGFuZGxlIGxvY2FsIGZpbGUgdXBsb2FkXG4gIGlmIChzZXR0aW5ncy5maWxlICYmIGN1cnJlbnRSZXBvLnByb3ZpZGVyID09PSBcImxvY2FsXCIpIHtcbiAgICBjb25zdCBmaWxlID0gc2V0dGluZ3MuZmlsZTtcbiAgICBjb25zdCBmaWxlRXh0ID0gZmlsZS5uYW1lLnNwbGl0KFwiLlwiKS5wb3AoKTtcblxuICAgIGlmIChmaWxlRXh0ICE9PSBcInppcFwiKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiT25seSAuemlwIGZpbGVzIGFyZSBhbGxvd2VkIVwiIH07XG4gICAgfVxuXG4gICAgLy8gVXBsb2FkIHRvIFN1cGFiYXNlIFN0b3JhZ2VcbiAgICBjb25zdCBmaWxlTmFtZSA9IGAke3JlcG9JZH0tJHtEYXRlLm5vdygpfS56aXBgO1xuICAgIGNvbnN0IHsgZGF0YTogdXBsb2FkRGF0YSwgZXJyb3I6IHVwbG9hZEVycm9yIH0gPSBhd2FpdCBjbGllbnQuc3RvcmFnZVxuICAgICAgLmZyb20oXCJsb2NhbF9yZXBvc1wiKVxuICAgICAgLnVwbG9hZChmaWxlTmFtZSwgZmlsZSk7XG5cbiAgICBpZiAodXBsb2FkRXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IodXBsb2FkRXJyb3IpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkZhaWxlZCB0byB1cGxvYWQgZmlsZSFcIiB9O1xuICAgIH1cblxuICAgIC8vIEdldCBwdWJsaWMgVVJMXG4gICAgY29uc3QgeyBkYXRhOiB1cmxEYXRhIH0gPSBjbGllbnQuc3RvcmFnZVxuICAgICAgLmZyb20oXCJsb2NhbF9yZXBvc1wiKVxuICAgICAgLmdldFB1YmxpY1VybChmaWxlTmFtZSk7XG5cbiAgICB1cGRhdGVEYXRhLm9iamVjdF91cmwgPSB1cmxEYXRhLnB1YmxpY1VybDtcbiAgICB1cGRhdGVEYXRhLmluZGV4X3N0YXR1cyA9IFwicGVuZGluZ1wiOyAvLyBUcmlnZ2VyIHJlLWluZGV4aW5nXG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIHJlcG9zaXRvcnlcbiAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAudXBkYXRlKHVwZGF0ZURhdGEpXG4gICAgLmVxKFwiaWRcIiwgcmVwb0lkKVxuICAgIC5zZWxlY3QoKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlcG8gYXMgUmVwbyB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUmVwbyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDx7IG9yZ2FuaXphdGlvbklkOiBzdHJpbmcgfT4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICAvLyBGZXRjaCB0aGUgb3JnYW5pemF0aW9uX2lkIGJlZm9yZSBkZWxldGluZ1xuICBjb25zdCB7IGRhdGE6IHJlcG8sIGVycm9yOiByZXBvRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIm9yZ2FuaXphdGlvbl9pZFwiKVxuICAgIC5lcShcImlkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKHJlcG9FcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IocmVwb0Vycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHJlcG9FcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICBpZiAoIXJlcG8pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUmVwb3NpdG9yeSBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgY2xpZW50LmZyb20oXCJyZXBvc2l0b3JpZXNcIikuZGVsZXRlKCkuZXEoXCJpZFwiLCByZXBvSWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogeyBvcmdhbml6YXRpb25JZDogcmVwby5vcmdhbml6YXRpb25faWQgfSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJpZ2dlclJlaW5kZXgoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8dm9pZD4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIGluZGV4X3N0YXR1cyB0byAncGVuZGluZycgdG8gdHJpZ2dlciByZWluZGV4aW5nXG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnVwZGF0ZSh7IGluZGV4X3N0YXR1czogXCJwZW5kaW5nXCIgfSlcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgLy8gVE9ETzogVHJpZ2dlciBhY3R1YWwgaW5kZXhpbmcgam9iL3dlYmhvb2svcXVldWUgaGVyZVxuICAvLyBUaGlzIGNvdWxkIGJlIGFuIEFQSSBjYWxsIHRvIHlvdXIgaW5kZXhpbmcgc2VydmljZVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVuZGVmaW5lZCB9O1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEb2N1bWVudGF0aW9uIFNlcnZpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2N1bWVudGF0aW9uKFxuICByZXBvSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PERvY3VtZW50YXRpb24+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBkb2N1bWVudGF0aW9uLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJkb2N1bWVudGF0aW9uXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJyZXBvX2lkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICBpZiAoIWRvY3VtZW50YXRpb24pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRG9jdW1lbnRhdGlvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogZG9jdW1lbnRhdGlvbiBhcyBEb2N1bWVudGF0aW9uIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2NQYWdlcyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2NQYWdlW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gR2V0IHRoZSBsYXRlc3QgZG9jdW1lbnRhdGlvbiB2ZXJzaW9uIGZvciB0aGlzIHJlcG9cbiAgY29uc3QgeyBkYXRhOiBkb2N1bWVudGF0aW9uLCBlcnJvcjogZG9jRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCJpZFwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5vcmRlcihcInZlcnNpb25cIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXG4gICAgLmxpbWl0KDEpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChkb2NFcnJvciB8fCAhZG9jdW1lbnRhdGlvbikge1xuICAgIGNvbnNvbGUuZXJyb3IoZG9jRXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJEb2N1bWVudGF0aW9uIG5vdCBmb3VuZFwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IHBhZ2VzLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJwYWdlc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiZG9jdW1lbnRhdGlvbl9pZFwiLCBkb2N1bWVudGF0aW9uLmlkKVxuICAgIC5vcmRlcihcIm9yZGVyX2luZGV4XCIsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKHBhZ2VzID8/IFtdKSBhcyBEb2NQYWdlW10gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERvY1BhZ2VCeUlkKFxuICBwYWdlSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PERvY1BhZ2U+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdlLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJkb2NfcGFnZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImlkXCIsIHBhZ2VJZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICBpZiAoIXBhZ2UpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUGFnZSBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcGFnZSBhcyBEb2NQYWdlIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2NQYWdlc0hpZXJhcmNoaWNhbChcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2NQYWdlW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gRmlyc3QgZ2V0IHRoZSBkb2N1bWVudGF0aW9uIElEIGZvciB0aGlzIHJlcG9cbiAgY29uc3QgeyBkYXRhOiBkb2N1bWVudGF0aW9uLCBlcnJvcjogZG9jRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCJpZFwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZG9jRXJyb3IgfHwgIWRvY3VtZW50YXRpb24pIHtcbiAgICBjb25zb2xlLmVycm9yKGRvY0Vycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRG9jdW1lbnRhdGlvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdlcywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jX3BhZ2VzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJkb2N1bWVudGF0aW9uX2lkXCIsIGRvY3VtZW50YXRpb24uaWQpXG4gICAgLm9yZGVyKFwib3JkZXJfaW5kZXhcIiwgeyBhc2NlbmRpbmc6IHRydWUgfSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICAvLyBQYWdlcyBhcmUgYWxyZWFkeSBzb3J0ZWQgYnkgb3JkZXJfaW5kZXhcbiAgLy8gVGhlIHBhcmVudF9wYWdlX2lkIGZpZWxkIG1haW50YWlucyB0aGUgaGllcmFyY2h5XG4gIC8vIEZyb250ZW5kIGNhbiB1c2UgdGhpcyB0byByZW5kZXIgdGhlIHRyZWUgc3RydWN0dXJlXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChwYWdlcyA/PyBbXSkgYXMgRG9jUGFnZVtdIH07XG59XG5cbi8qKlxuICogR2V0IGFsbCBkb2N1bWVudGF0aW9uIHZlcnNpb25zIGZvciBhIHJlcG9zaXRvcnlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERvY3VtZW50YXRpb25WZXJzaW9ucyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2N1bWVudGF0aW9uW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiB2ZXJzaW9ucywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLm9yZGVyKFwidmVyc2lvblwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiAodmVyc2lvbnMgPz8gW10pIGFzIERvY3VtZW50YXRpb25bXSB9O1xufVxuXG4vKipcbiAqIEdldCB0aGUgbGF0ZXN0IGNvbXBsZXRlZCBkb2N1bWVudGF0aW9uIHZlcnNpb24gZm9yIGEgcmVwb3NpdG9yeVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGF0ZXN0RG9jdW1lbnRhdGlvbihcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2N1bWVudGF0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogZG9jdW1lbnRhdGlvbiwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLm9yZGVyKFwidmVyc2lvblwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcbiAgICAubGltaXQoMSlcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKCFkb2N1bWVudGF0aW9uKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkRvY3VtZW50YXRpb24gbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogZG9jdW1lbnRhdGlvbiBhcyBEb2N1bWVudGF0aW9uIH07XG59XG5cbi8qKlxuICogR2V0IGRvY3VtZW50YXRpb24gcGFnZXMgZm9yIGEgc3BlY2lmaWMgdmVyc2lvblxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jUGFnZXNGb3JWZXJzaW9uKFxuICByZXBvSWQ6IHN0cmluZyxcbiAgdmVyc2lvbjogbnVtYmVyLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jUGFnZVtdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIC8vIEdldCB0aGUgZG9jdW1lbnRhdGlvbiByZWNvcmQgZm9yIHRoaXMgdmVyc2lvblxuICBjb25zdCB7IGRhdGE6IGRvY3VtZW50YXRpb24sIGVycm9yOiBkb2NFcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJkb2N1bWVudGF0aW9uXCIpXG4gICAgLnNlbGVjdChcImlkXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLmVxKFwidmVyc2lvblwiLCB2ZXJzaW9uKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZG9jRXJyb3IgfHwgIWRvY3VtZW50YXRpb24pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRG9jdW1lbnRhdGlvbiB2ZXJzaW9uIG5vdCBmb3VuZFwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IHBhZ2VzLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJwYWdlc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiZG9jdW1lbnRhdGlvbl9pZFwiLCBkb2N1bWVudGF0aW9uLmlkKVxuICAgIC5vcmRlcihcIm9yZGVyX2luZGV4XCIsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKHBhZ2VzID8/IFtdKSBhcyBEb2NQYWdlW10gfTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ29udmVyc2F0aW9uIFNlcnZpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb252ZXJzYXRpb25zKFxuICByZXBvSWQ6IHN0cmluZyxcbiAgbGltaXQ6IG51bWJlciA9IDIwLFxuICB2ZXJzaW9uOiBudW1iZXIgfCBudWxsID0gbnVsbCxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbltdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGxldCBxdWVyeSA9IGNsaWVudFxuICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKTtcblxuICAvLyBGaWx0ZXIgYnkgdmVyc2lvbiBpZiBzcGVjaWZpZWRcbiAgaWYgKHZlcnNpb24gIT09IG51bGwgJiYgdmVyc2lvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcXVlcnkgPSBxdWVyeS5lcShcInJlcG9fdmVyc2lvblwiLCB2ZXJzaW9uKTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogY29udmVyc2F0aW9ucywgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5XG4gICAgLm9yZGVyKFwidXBkYXRlZF9hdFwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcbiAgICAubGltaXQobGltaXQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKGNvbnZlcnNhdGlvbnMgPz8gW10pIGFzIENvbnZlcnNhdGlvbltdIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb252ZXJzYXRpb25CeUlkKFxuICBjb252ZXJzYXRpb25JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29udmVyc2F0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogY29udmVyc2F0aW9uLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpZFwiLCBjb252ZXJzYXRpb25JZClcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFjb252ZXJzYXRpb24pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiQ29udmVyc2F0aW9uIG5vdCBmb3VuZFwiIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjb252ZXJzYXRpb24gYXMgQ29udmVyc2F0aW9uIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDb252ZXJzYXRpb24oXG4gIHJlcG9JZDogc3RyaW5nLFxuICB0aXRsZT86IHN0cmluZyxcbiAgdmVyc2lvbj86IG51bWJlciB8IG51bGwsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxDb252ZXJzYXRpb24+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBjb252ZXJzYXRpb24sIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAuaW5zZXJ0KHtcbiAgICAgIHJlcG9faWQ6IHJlcG9JZCxcbiAgICAgIHVzZXJfaWQ6IHVzZXIuaWQsXG4gICAgICB0aXRsZTogdGl0bGUgfHwgXCJOZXcgQ29udmVyc2F0aW9uXCIsXG4gICAgICByZXBvX3ZlcnNpb246IHZlcnNpb24gPz8gbnVsbCxcbiAgICB9KVxuICAgIC5zZWxlY3QoKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGNvbnZlcnNhdGlvbiBhcyBDb252ZXJzYXRpb24gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNvbnZlcnNhdGlvbihcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PHZvaWQ+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLmRlbGV0ZSgpXG4gICAgLmVxKFwiaWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVuZGVmaW5lZCB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVuYW1lQ29udmVyc2F0aW9uKFxuICBjb252ZXJzYXRpb25JZDogc3RyaW5nLFxuICBuZXdUaXRsZTogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29udmVyc2F0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogY29udmVyc2F0aW9uLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLnVwZGF0ZSh7IHRpdGxlOiBuZXdUaXRsZSB9KVxuICAgIC5lcShcImlkXCIsIGNvbnZlcnNhdGlvbklkKVxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlci5pZClcbiAgICAuc2VsZWN0KClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjb252ZXJzYXRpb24gYXMgQ29udmVyc2F0aW9uIH07XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1lc3NhZ2UgU2VydmljZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvbnZlcnNhdGlvbk1lc3NhZ2VzKFxuICBjb252ZXJzYXRpb25JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29udmVyc2F0aW9uTWVzc2FnZVtdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogbWVzc2FnZXMsIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcIm1lc3NhZ2VzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJjb252ZXJzYXRpb25faWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgLm9yZGVyKFwiY3JlYXRlZF9hdFwiLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChtZXNzYWdlcyA/PyBbXSkgYXMgQ29udmVyc2F0aW9uTWVzc2FnZVtdIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVNZXNzYWdlKFxuICBjb252ZXJzYXRpb25JZDogc3RyaW5nLFxuICByb2xlOiBcInVzZXJcIiB8IFwiYXNzaXN0YW50XCIsXG4gIGNvbnRlbnQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbk1lc3NhZ2U+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBtZXNzYWdlLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJtZXNzYWdlc1wiKVxuICAgIC5pbnNlcnQoe1xuICAgICAgY29udmVyc2F0aW9uX2lkOiBjb252ZXJzYXRpb25JZCxcbiAgICAgIHJvbGUsXG4gICAgICBjb250ZW50LFxuICAgIH0pXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSBjb252ZXJzYXRpb24ncyB1cGRhdGVkX2F0IHRpbWVzdGFtcFxuICBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAudXBkYXRlKHsgdXBkYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpIH0pXG4gICAgLmVxKFwiaWRcIiwgY29udmVyc2F0aW9uSWQpO1xuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IG1lc3NhZ2UgYXMgQ29udmVyc2F0aW9uTWVzc2FnZSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZUNvZGVTbmlwcGV0cyhcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbiAgbWVzc2FnZUlkOiBzdHJpbmcsXG4gIHNuaXBwZXRzOiBBcnJheTx7IGZpbGU6IHN0cmluZzsgY29kZTogc3RyaW5nIH0+LFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29kZVNuaXBwZXRbXT4+IHtcbiAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCBzbmlwcGV0c1RvSW5zZXJ0ID0gc25pcHBldHMubWFwKChzbmlwcGV0KSA9PiAoe1xuICAgIGNvbnZlcnNhdGlvbl9pZDogY29udmVyc2F0aW9uSWQsXG4gICAgbWVzc2FnZV9pZDogbWVzc2FnZUlkLFxuICAgIGZpbGVfcGF0aDogc25pcHBldC5maWxlLFxuICAgIGNvZGVfY29udGVudDogc25pcHBldC5jb2RlLFxuICAgIGxhbmd1YWdlOiBzbmlwcGV0LmZpbGUuc3BsaXQoXCIuXCIpLnBvcCgpIHx8IG51bGwsXG4gIH0pKTtcblxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKFwiY29kZV9zbmlwcGV0c1wiKVxuICAgIC5pbnNlcnQoc25pcHBldHNUb0luc2VydClcbiAgICAuc2VsZWN0KCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBkYXRhIGFzIENvZGVTbmlwcGV0W10gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvZGVTbmlwcGV0c0ZvckNvbnZlcnNhdGlvbihcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvZGVTbmlwcGV0W10+PiB7XG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbShcImNvZGVfc25pcHBldHNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImNvbnZlcnNhdGlvbl9pZFwiLCBjb252ZXJzYXRpb25JZClcbiAgICAub3JkZXIoXCJjcmVhdGVkX2F0XCIsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGRhdGEgYXMgQ29kZVNuaXBwZXRbXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ29kZVNuaXBwZXQoXG4gIHNuaXBwZXRJZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8bnVsbD4+IHtcbiAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKFwiY29kZV9zbmlwcGV0c1wiKVxuICAgIC5kZWxldGUoKVxuICAgIC5lcShcImlkXCIsIHNuaXBwZXRJZCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBudWxsIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbmRleFJlcG9zaXRvcnkoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8dm9pZD4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGluc3RhbGxhdGlvbiwgZXJyb3I6IGluc3RhbGxhdGlvbkVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImdpdGh1Yl9pbnN0YWxsYXRpb25zXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpbnN0YWxsZWRfYnlcIiwgdXNlci5pZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKCFpbnN0YWxsYXRpb24gfHwgaW5zdGFsbGF0aW9uRXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiR2l0aHViIEFwcCBJbnN0YWxsYXRpb24gbm90IGZvdW5kIVwiIH07XG4gIH1cblxuICAvL2ZldGNoIHJlcG9cblxuICBjb25zdCByZXBvUmVzdWx0ID0gYXdhaXQgZ2V0UmVwb1dpdGhTdGF0dXMocmVwb0lkKTtcblxuICBpZiAoIXJlcG9SZXN1bHQuc3VjY2Vzcykge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogcmVwb1Jlc3VsdC5lcnJvciB9O1xuICB9XG5cbiAgY29uc3QgcmVwb1VybCA9IHJlcG9SZXN1bHQuZGF0YS5yZXBvX3VybDtcbiAgY29uc3QgaW5zdGFsbGF0aW9uSWQgPSBpbnN0YWxsYXRpb24uaW5zdGFsbGF0aW9uX2lkO1xuXG4gIC8vIEdldCB0aGUgbGF0ZXN0IHZlcnNpb24gbnVtYmVyIGZvciB0aGlzIHJlcG9cbiAgY29uc3QgeyBkYXRhOiBsYXRlc3REb2MgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCJ2ZXJzaW9uXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLm9yZGVyKFwidmVyc2lvblwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcbiAgICAubGltaXQoMSlcbiAgICAuc2luZ2xlKCk7XG5cbiAgLy8gSW5jcmVtZW50IHZlcnNpb24gKHN0YXJ0IGF0IDEgaWYgbm8gcHJldmlvdXMgdmVyc2lvbnMpXG4gIGNvbnN0IG5leHRWZXJzaW9uID0gKGxhdGVzdERvYz8udmVyc2lvbiA/PyAwKSArIDE7XG5cbiAgLy9tYXJrIHRoZSByZXBvc2l0b3J5IGFzIGluZGV4aW5nIGluIHN1cGFiYXNlIGZpcnN0XG4gIGNvbnN0IHsgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgIC51cGRhdGUoeyBpbmRleF9zdGF0dXM6IFwiaW5kZXhpbmdcIiB9KVxuICAgIC5lcShcImlkXCIsIHJlcG9JZCk7XG5cbiAgaWYgKHVwZGF0ZUVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcih1cGRhdGVFcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiB1cGRhdGVFcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICAvLyBDYWxsIHRoZSBiYWNrZW5kIHRvIHN0YXJ0IGluZGV4aW5nIChmaXJlLWFuZC1mb3JnZXQpXG4gIC8vIERvbid0IGF3YWl0IG9yIHRocm93IGVycm9ycyBzaW5jZSB0aGlzIGlzIGEgbG9uZy1ydW5uaW5nIG9wZXJhdGlvblxuICBmZXRjaChgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vcmVwb3MvaW5kZXhgLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHJlcG9fdXJsOiByZXBvVXJsLFxuICAgICAgcmVwb19pZDogcmVwb0lkLFxuICAgICAgdXNlcl9pZDogdXNlci5pZCxcbiAgICAgIGluc3RhbGxhdGlvbl9pZDogaW5zdGFsbGF0aW9uSWQsXG4gICAgICBicmFuY2g6IFwibWFpblwiLFxuICAgICAgdmVyc2lvbjogbmV4dFZlcnNpb24sXG4gICAgfSksXG4gIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIC8vIExvZyB0aGUgZXJyb3IgYnV0IGRvbid0IGZhaWwgdGhlIHJlcXVlc3RcbiAgICBjb25zb2xlLmVycm9yKFwiSW5kZXhpbmcgcmVxdWVzdCBmYWlsZWQ6XCIsIGVycm9yKTtcbiAgICAvLyBUaGUgYmFja2VuZCBzaG91bGQgaGFuZGxlIHVwZGF0aW5nIHRoZSByZXBvIHN0YXR1cyBvbiBmYWlsdXJlXG4gIH0pO1xuXG4gIC8vIFJldHVybiBzdWNjZXNzIGltbWVkaWF0ZWx5IC0gdGhlIGluZGV4aW5nIHdpbGwgaGFwcGVuIGluIHRoZSBiYWNrZ3JvdW5kXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVuZGVmaW5lZCB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ3U0Fnb0NzQiJ9
}),
"[project]/src/lib/services/data:12ce93 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"402a12e2aa2d46f9eabc580e53a6e0453753249370":"getDocumentationVersions"},"src/lib/services/repoService.ts",""] */ __turbopack_context__.s([
    "getDocumentationVersions",
    ()=>getDocumentationVersions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var getDocumentationVersions = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("402a12e2aa2d46f9eabc580e53a6e0453753249370", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getDocumentationVersions"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcmVwb1NlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAL3V0aWxzL3N1cGFiYXNlL3NlcnZlclwiO1xuaW1wb3J0IHtcbiAgUmVwbyxcbiAgRG9jdW1lbnRhdGlvbixcbiAgRG9jUGFnZSxcbiAgQ29udmVyc2F0aW9uLFxuICBDb252ZXJzYXRpb25NZXNzYWdlLFxuICBDb2RlU25pcHBldCxcbn0gZnJvbSBcIkAvYXBwL3R5cGVzL3N1cGFiYXNlXCI7XG5pbXBvcnQgeyBBY3Rpb25SZXN1bHQgfSBmcm9tIFwiQC9hcHAvdHlwZXMvYWN0aW9uXCI7XG5pbXBvcnQge1xuICB2ZXJpZnlHaXRodWJSZXBvQWNjZXNzLFxuICB2ZXJpZnlHaXRMYWJSZXBvQWNjZXNzLFxufSBmcm9tIFwiLi9naXRQcm92aWRlclNlcnZpY2VcIjtcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHBhcnNlIEdpdEh1YiBVUkxzXG5mdW5jdGlvbiBwYXJzZUdpdEh1YlVybCh1cmw6IHN0cmluZyk6IHsgb3duZXI6IHN0cmluZzsgcmVwbzogc3RyaW5nIH0ge1xuICB0cnkge1xuICAgIC8vIEhhbmRsZSBtdWx0aXBsZSBmb3JtYXRzOlxuICAgIC8vIC0gaHR0cHM6Ly9naXRodWIuY29tL293bmVyL3JlcG9cbiAgICAvLyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9vd25lci9yZXBvLmdpdFxuICAgIC8vIC0gZ2l0QGdpdGh1Yi5jb206b3duZXIvcmVwby5naXRcblxuICAgIHVybCA9IHVybC50cmltKCkucmVwbGFjZSgvXFwuZ2l0JC8sIFwiXCIpO1xuXG4gICAgaWYgKHVybC5pbmNsdWRlcyhcImdpdGh1Yi5jb20vXCIpKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IHVybC5zcGxpdChcImdpdGh1Yi5jb20vXCIpWzFdLnNwbGl0KFwiL1wiKTtcbiAgICAgIHJldHVybiB7IG93bmVyOiBwYXJ0c1swXSwgcmVwbzogcGFydHNbMV0gfTtcbiAgICB9XG5cbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoXCJnaXRAZ2l0aHViLmNvbTpcIikpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gdXJsLnJlcGxhY2UoXCJnaXRAZ2l0aHViLmNvbTpcIiwgXCJcIikuc3BsaXQoXCIvXCIpO1xuICAgICAgcmV0dXJuIHsgb3duZXI6IHBhcnRzWzBdLCByZXBvOiBwYXJ0c1sxXSB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IG93bmVyOiBcIlwiLCByZXBvOiBcIlwiIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgb3duZXI6IFwiXCIsIHJlcG86IFwiXCIgfTtcbiAgfVxufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gcGFyc2UgR2l0TGFiIFVSTHNcbmZ1bmN0aW9uIHBhcnNlR2l0TGFiVXJsKHVybDogc3RyaW5nKTogeyBvd25lcjogc3RyaW5nOyByZXBvOiBzdHJpbmcgfSB7XG4gIHRyeSB7XG4gICAgLy8gSGFuZGxlIG11bHRpcGxlIGZvcm1hdHM6XG4gICAgLy8gLSBodHRwczovL2dpdGxhYi5jb20vb3duZXIvcmVwb1xuICAgIC8vIC0gaHR0cHM6Ly9naXRsYWIuY29tL293bmVyL3N1Ymdyb3VwL3JlcG9cbiAgICAvLyAtIGh0dHBzOi8vZ2l0bGFiLmNvbS9vd25lci9yZXBvLmdpdFxuICAgIC8vIC0gZ2l0QGdpdGxhYi5jb206b3duZXIvcmVwby5naXRcbiAgICAvLyAtIFNlbGYtaG9zdGVkOiBodHRwczovL2dpdGxhYi5leGFtcGxlLmNvbS9vd25lci9yZXBvXG5cbiAgICB1cmwgPSB1cmwudHJpbSgpLnJlcGxhY2UoL1xcLmdpdCQvLCBcIlwiKTtcblxuICAgIC8vIEhhbmRsZSBIVFRQUyBVUkxzIChnaXRsYWIuY29tIG9yIHNlbGYtaG9zdGVkKVxuICAgIGlmICh1cmwuaW5jbHVkZXMoXCJnaXRsYWIuY29tL1wiKSB8fCAvZ2l0bGFiXFwuW14vXStcXC8vLnRlc3QodXJsKSkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgcGF0aCBhZnRlciB0aGUgZG9tYWluXG4gICAgICBjb25zdCBtYXRjaCA9IHVybC5tYXRjaCgvZ2l0bGFiW14vXSpcXC8oLispLyk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgY29uc3QgcGF0aFBhcnRzID0gbWF0Y2hbMV0uc3BsaXQoXCIvXCIpO1xuICAgICAgICAvLyBHaXRMYWIgc3VwcG9ydHMgbmVzdGVkIGdyb3Vwcywgc28gd2UgbmVlZCB0byBoYW5kbGU6XG4gICAgICAgIC8vIC0gb3duZXIvcmVwbyAoMiBwYXJ0cylcbiAgICAgICAgLy8gLSBvd25lci9zdWJncm91cC9yZXBvICgzKyBwYXJ0cylcbiAgICAgICAgaWYgKHBhdGhQYXJ0cy5sZW5ndGggPj0gMikge1xuICAgICAgICAgIC8vIFRha2UgZXZlcnl0aGluZyBleGNlcHQgdGhlIGxhc3QgcGFydCBhcyBvd25lci9ncm91cFxuICAgICAgICAgIGNvbnN0IHJlcG8gPSBwYXRoUGFydHNbcGF0aFBhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IG93bmVyID0gcGF0aFBhcnRzLnNsaWNlKDAsIC0xKS5qb2luKFwiL1wiKTtcbiAgICAgICAgICByZXR1cm4geyBvd25lciwgcmVwbyB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIFNTSCBVUkxzXG4gICAgaWYgKHVybC5zdGFydHNXaXRoKFwiZ2l0QGdpdGxhYi5jb206XCIpIHx8IC9naXRAZ2l0bGFiXFwuW146XSs6Ly50ZXN0KHVybCkpIHtcbiAgICAgIGNvbnN0IG1hdGNoID0gdXJsLm1hdGNoKC9naXRAZ2l0bGFiW146XSo6KC4rKS8pO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGNvbnN0IHBhdGhQYXJ0cyA9IG1hdGNoWzFdLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgaWYgKHBhdGhQYXJ0cy5sZW5ndGggPj0gMikge1xuICAgICAgICAgIGNvbnN0IHJlcG8gPSBwYXRoUGFydHNbcGF0aFBhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IG93bmVyID0gcGF0aFBhcnRzLnNsaWNlKDAsIC0xKS5qb2luKFwiL1wiKTtcbiAgICAgICAgICByZXR1cm4geyBvd25lciwgcmVwbyB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgb3duZXI6IFwiXCIsIHJlcG86IFwiXCIgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBvd25lcjogXCJcIiwgcmVwbzogXCJcIiB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXBvc0J5T3JnYW5pemF0aW9uSWQoXG4gIG9yZ2FuaXphdGlvbklkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHVzZXIgPSBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJvcmdhbml6YXRpb25faWRcIiwgb3JnYW5pemF0aW9uSWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKGRhdGEgPz8gW10pIGFzIFJlcG9bXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUmVwb1ZpYUdpdGh1YihcbiAgZm9ybURhdGE6IEZvcm1EYXRhLFxuICBvcmdJZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8UmVwbyB8IHVuZGVmaW5lZD4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IHByb3ZpZGVyID0gZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IHVybCA9IGZvcm1EYXRhLmdldChcImdpdGh1Yi11cmxcIikgYXMgc3RyaW5nO1xuXG4gIGlmICghbmFtZSkge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJOYW1lIGlzIHJlcXVpcmVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGluc3RhbGxhdGlvbiB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJnaXRodWJfaW5zdGFsbGF0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiaW5zdGFsbGVkX2J5XCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghaW5zdGFsbGF0aW9uKSB7XG4gICAgLy8gTm8gR2l0SHViIEFwcCBpbnN0YWxsYXRpb24gLSBwcm9tcHQgdXNlciB0byBpbnN0YWxsXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiSW5zdGFsbGF0aW9uIE5lZWRlZFwiLFxuICAgIH07XG4gIH1cblxuICAvL3BhcnNlIHVybCBmb3Igb3duZXIgYW5kIHJlcG9cbiAgY29uc3QgeyBvd25lciwgcmVwbzogcmVwb05hbWUgfSA9IHBhcnNlR2l0SHViVXJsKHVybCk7XG5cbiAgY29uc3QgaGFzQWNjZXNzID0gYXdhaXQgdmVyaWZ5R2l0aHViUmVwb0FjY2VzcyhcbiAgICBpbnN0YWxsYXRpb24uaWQsXG4gICAgb3duZXIsXG4gICAgcmVwb05hbWUsXG4gICk7XG5cbiAgaWYgKCFoYXNBY2Nlc3MpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBlcnJvcjogXCJBY2Nlc3MgRGVuaWVkXCIsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3I6IHJlcG9FcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAuaW5zZXJ0KHtcbiAgICAgIG5hbWUsXG4gICAgICBwcm92aWRlcixcbiAgICAgIHJlcG9fdXJsOiB1cmwsXG4gICAgICBvcmdhbml6YXRpb25faWQ6IG9yZ0lkLFxuICAgICAgaW5kZXhlZF9ieTogdXNlci5pZCxcbiAgICAgIGluZGV4X3N0YXR1czogXCJub3QgaW5kZXhlZFwiLFxuICAgIH0pXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChyZXBvRXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHJlcG9FcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXBvIGFzIFJlcG8gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVJlcG9WaWFHaXRsYWIoXG4gIGZvcm1EYXRhOiBGb3JtRGF0YSxcbiAgb3JnSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFJlcG8gfCB1bmRlZmluZWQ+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICBjb25zdCBwcm92aWRlciA9IGZvcm1EYXRhLmdldChcInR5cGVcIikgYXMgc3RyaW5nO1xuICBjb25zdCB1cmwgPSBmb3JtRGF0YS5nZXQoXCJnaXRsYWItdXJsXCIpIGFzIHN0cmluZztcblxuICAvLyBWYWxpZGF0ZSBpbnB1dHNcbiAgaWYgKCFuYW1lIHx8IG5hbWUudHJpbSgpID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlJlcG9zaXRvcnkgbmFtZSBpcyByZXF1aXJlZFwiIH07XG4gIH1cblxuICBpZiAoIXVybCB8fCB1cmwudHJpbSgpID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkdpdExhYiBVUkwgaXMgcmVxdWlyZWRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBpbnN0YWxsYXRpb24gfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZ2l0bGFiX2luc3RhbGxhdGlvbnNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImluc3RhbGxlZF9ieVwiLCB1c2VyLmlkKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoIWluc3RhbGxhdGlvbikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJJbnN0YWxsYXRpb24gTmVlZGVkXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgb3duZXIsIHJlcG86IHJlcG9OYW1lIH0gPSBwYXJzZUdpdExhYlVybCh1cmwpO1xuXG4gIC8vdmVyaWZ5IGFjY2Vzc1xuICBjb25zdCBoYXNBY2Nlc3MgPSBhd2FpdCB2ZXJpZnlHaXRMYWJSZXBvQWNjZXNzKFxuICAgIGluc3RhbGxhdGlvbi5hY2Nlc3NfdG9rZW4sXG4gICAgb3duZXIsXG4gICAgcmVwb05hbWUsXG4gICk7XG5cbiAgaWYgKCFoYXNBY2Nlc3MpIHtcbiAgICBpZiAoaW5zdGFsbGF0aW9uLmFjY2Vzc190b2tlbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIGVycm9yOiBcIkFjY2VzcyByZXF1aXJlZCFcIixcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiQWNjZXNzIGRlbmllZCFcIixcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvcjogcmVwb0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgIC5pbnNlcnQoe1xuICAgICAgbmFtZSxcbiAgICAgIHByb3ZpZGVyLFxuICAgICAgcmVwb191cmw6IHVybCxcbiAgICAgIG9yZ2FuaXphdGlvbl9pZDogb3JnSWQsXG4gICAgICBpbmRleGVkX2J5OiB1c2VyLmlkLFxuICAgICAgaW5kZXhfc3RhdHVzOiBcIm5vdCBpbmRleGVkXCIsXG4gICAgfSlcbiAgICAuc2VsZWN0KClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKHJlcG9FcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogcmVwb0Vycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlcG8gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVJlcG9WaWFMb2NhbEZpbGUoXG4gIGZvcm1EYXRhOiBGb3JtRGF0YSxcbiAgb3JnSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFJlcG8+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KFwiZmlsZVwiKSBhcyBGaWxlO1xuXG4gIC8vIFZhbGlkYXRlIGlucHV0c1xuICBpZiAoIW5hbWUgfHwgbmFtZS50cmltKCkgPT09IFwiXCIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUmVwb3NpdG9yeSBuYW1lIGlzIHJlcXVpcmVkXCIgfTtcbiAgfVxuXG4gIGlmICghZmlsZSkge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGaWxlIGlzIHJlcXVpcmVkXCIgfTtcbiAgfVxuXG4gIC8vIFZhbGlkYXRlIGZpbGUgdHlwZVxuICBpZiAoIWZpbGUubmFtZS5lbmRzV2l0aChcIi56aXBcIikpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiT25seSAuemlwIGZpbGVzIGFyZSBhbGxvd2VkXCIgfTtcbiAgfVxuXG4gIC8vIFZhbGlkYXRlIGZpbGUgc2l6ZSAobWF4IDEwME1CKVxuICBjb25zdCBtYXhTaXplID0gMTAwICogMTAyNCAqIDEwMjQ7IC8vIDEwME1CIGluIGJ5dGVzXG4gIGlmIChmaWxlLnNpemUgPiBtYXhTaXplKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiRmlsZSBzaXplIGV4Y2VlZHMgMTAwTUIgbGltaXRcIixcbiAgICB9O1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBHZW5lcmF0ZSBhIHVuaXF1ZSBmaWxlIG5hbWUgdG8gcHJldmVudCBjb2xsaXNpb25zXG4gICAgY29uc3QgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBzYW5pdGl6ZWROYW1lID0gbmFtZS50cmltKCkucmVwbGFjZSgvW15hLXowLTktX10vZ2ksIFwiX1wiKTtcbiAgICBjb25zdCBmaWxlTmFtZSA9IGAke3Nhbml0aXplZE5hbWV9XyR7dGltZXN0YW1wfV8ke2ZpbGUubmFtZX1gO1xuICAgIGNvbnN0IGZpbGVQYXRoID0gYCR7b3JnSWR9LyR7ZmlsZU5hbWV9YDtcblxuICAgIC8vIFVwbG9hZCBmaWxlIHRvIFN1cGFiYXNlIFN0b3JhZ2VcbiAgICBjb25zdCB7IGVycm9yOiB1cGxvYWRFcnJvciB9ID0gYXdhaXQgY2xpZW50LnN0b3JhZ2VcbiAgICAgIC5mcm9tKFwibG9jYWxfcmVwb3NcIilcbiAgICAgIC51cGxvYWQoZmlsZVBhdGgsIGZpbGUsIHtcbiAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vemlwXCIsXG4gICAgICAgIHVwc2VydDogZmFsc2UsXG4gICAgICB9KTtcblxuICAgIGlmICh1cGxvYWRFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIlVwbG9hZCBlcnJvcjpcIiwgdXBsb2FkRXJyb3IpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIGVycm9yOiBgRmlsZSB1cGxvYWQgZmFpbGVkOiAke3VwbG9hZEVycm9yLm1lc3NhZ2V9YCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gR2V0IHRoZSBwdWJsaWMgVVJMIGZvciB0aGUgdXBsb2FkZWQgZmlsZVxuICAgIGNvbnN0IHsgZGF0YTogdXJsRGF0YSB9ID0gY2xpZW50LnN0b3JhZ2VcbiAgICAgIC5mcm9tKFwibG9jYWxfcmVwb3NcIilcbiAgICAgIC5nZXRQdWJsaWNVcmwoZmlsZVBhdGgpO1xuXG4gICAgLy8gQ3JlYXRlIHJlcG9zaXRvcnkgcmVjb3JkIGluIGRhdGFiYXNlXG4gICAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvcjogcmVwb0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgICAuaW5zZXJ0KHtcbiAgICAgICAgbmFtZTogbmFtZS50cmltKCksXG4gICAgICAgIHByb3ZpZGVyOiBcImxvY2FsXCIsXG4gICAgICAgIHJlcG9fdXJsOiBudWxsLFxuICAgICAgICBvYmplY3RfdXJsOiB1cmxEYXRhLnB1YmxpY1VybCxcbiAgICAgICAgb3JnYW5pemF0aW9uX2lkOiBvcmdJZCxcbiAgICAgICAgaW5kZXhlZF9ieTogdXNlci5pZCxcbiAgICAgICAgaW5kZXhfc3RhdHVzOiBcIm5vdCBpbmRleGVkXCIsXG4gICAgICB9KVxuICAgICAgLnNlbGVjdCgpXG4gICAgICAuc2luZ2xlKCk7XG5cbiAgICBpZiAocmVwb0Vycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiUmVwb3NpdG9yeSBjcmVhdGlvbiBlcnJvcjpcIiwgcmVwb0Vycm9yKTtcbiAgICAgIC8vIEF0dGVtcHQgdG8gY2xlYW4gdXAgdXBsb2FkZWQgZmlsZVxuICAgICAgYXdhaXQgY2xpZW50LnN0b3JhZ2UuZnJvbShcImxvY2FsX3JlcG9zXCIpLnJlbW92ZShbZmlsZVBhdGhdKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogYFJlcG9zaXRvcnkgY3JlYXRpb24gZmFpbGVkOiAke3JlcG9FcnJvci5tZXNzYWdlfWAsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlcG8gYXMgUmVwbyB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJVbmV4cGVjdGVkIGVycm9yOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6XG4gICAgICAgIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkXCIsXG4gICAgfTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSZXBvc2l0b3J5IE1hbmFnZW1lbnQgU2VydmljZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlcG9XaXRoU3RhdHVzKFxuICByZXBvSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFJlcG8+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImlkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICBpZiAoIXJlcG8pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUmVwb3NpdG9yeSBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVwbyBhcyBSZXBvIH07XG59XG5cbnR5cGUgVXBkYXRlRGF0YSA9IHtcbiAgbmFtZT86IHN0cmluZztcbiAgcmVwb191cmw/OiBzdHJpbmc7XG4gIG9iamVjdF91cmw/OiBzdHJpbmc7XG4gIGluZGV4X3N0YXR1cz86IHN0cmluZztcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVSZXBvU2V0dGluZ3MoXG4gIHJlcG9JZDogc3RyaW5nLFxuICBzZXR0aW5nczogeyBuYW1lPzogc3RyaW5nOyByZXBvX3VybD86IHN0cmluZzsgZmlsZT86IEZpbGUgfSxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFJlcG8+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gR2V0IHRoZSBjdXJyZW50IHJlcG8gdG8gY2hlY2sgaXRzIHByb3ZpZGVyIHR5cGVcbiAgY29uc3QgeyBkYXRhOiBjdXJyZW50UmVwbyB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImlkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKCFjdXJyZW50UmVwbykge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJSZXBvc2l0b3J5IG5vdCBmb3VuZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgdXBkYXRlRGF0YTogVXBkYXRlRGF0YSA9IHt9O1xuXG4gIC8vIEhhbmRsZSBuYW1lIHVwZGF0ZVxuICBpZiAoc2V0dGluZ3MubmFtZSkge1xuICAgIHVwZGF0ZURhdGEubmFtZSA9IHNldHRpbmdzLm5hbWU7XG4gIH1cblxuICAvLyBIYW5kbGUgR2l0SHViIFVSTCB1cGRhdGVcbiAgaWYgKHNldHRpbmdzLnJlcG9fdXJsICYmIGN1cnJlbnRSZXBvLnByb3ZpZGVyID09PSBcImdpdGh1YlwiKSB7XG4gICAgY29uc3QgeyBvd25lciwgcmVwbyB9ID0gcGFyc2VHaXRIdWJVcmwoc2V0dGluZ3MucmVwb191cmwpO1xuXG4gICAgaWYgKCFvd25lciB8fCAhcmVwbykge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkludmFsaWQgR2l0SHViIFVSTCBmb3JtYXQhXCIgfTtcbiAgICB9XG5cbiAgICAvLyBWZXJpZnkgYWNjZXNzIHRvIHRoZSBuZXcgcmVwb1xuICAgIGNvbnN0IHsgZGF0YTogaW5zdGFsbGF0aW9uIH0gPSBhd2FpdCBjbGllbnRcbiAgICAgIC5mcm9tKFwiZ2l0aHViX2luc3RhbGxhdGlvbnNcIilcbiAgICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgICAuZXEoXCJpbnN0YWxsZWRfYnlcIiwgdXNlci5pZClcbiAgICAgIC5zaW5nbGUoKTtcblxuICAgIGlmICghaW5zdGFsbGF0aW9uKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiR2l0SHViIEFwcCBub3QgaW5zdGFsbGVkIVwiIH07XG4gICAgfVxuXG4gICAgY29uc3QgaGFzQWNjZXNzID0gYXdhaXQgdmVyaWZ5R2l0aHViUmVwb0FjY2VzcyhcbiAgICAgIGluc3RhbGxhdGlvbi5pbnN0YWxsYXRpb25faWQudG9TdHJpbmcoKSxcbiAgICAgIG93bmVyLFxuICAgICAgcmVwbyxcbiAgICApO1xuXG4gICAgaWYgKCFoYXNBY2Nlc3MpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjpcbiAgICAgICAgICBcIkNhbm5vdCBhY2Nlc3MgdGhpcyByZXBvc2l0b3J5LiBNYWtlIHN1cmUgdGhlIEdpdEh1YiBBcHAgaXMgaW5zdGFsbGVkIGZvciB0aGlzIHJlcG9zaXRvcnkuXCIsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHVwZGF0ZURhdGEucmVwb191cmwgPSBzZXR0aW5ncy5yZXBvX3VybDtcbiAgICB1cGRhdGVEYXRhLmluZGV4X3N0YXR1cyA9IFwibm90IGluZGV4ZWRcIjsgLy8gVHJpZ2dlciByZS1pbmRleGluZ1xuICB9XG5cbiAgLy8gSGFuZGxlIGxvY2FsIGZpbGUgdXBsb2FkXG4gIGlmIChzZXR0aW5ncy5maWxlICYmIGN1cnJlbnRSZXBvLnByb3ZpZGVyID09PSBcImxvY2FsXCIpIHtcbiAgICBjb25zdCBmaWxlID0gc2V0dGluZ3MuZmlsZTtcbiAgICBjb25zdCBmaWxlRXh0ID0gZmlsZS5uYW1lLnNwbGl0KFwiLlwiKS5wb3AoKTtcblxuICAgIGlmIChmaWxlRXh0ICE9PSBcInppcFwiKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiT25seSAuemlwIGZpbGVzIGFyZSBhbGxvd2VkIVwiIH07XG4gICAgfVxuXG4gICAgLy8gVXBsb2FkIHRvIFN1cGFiYXNlIFN0b3JhZ2VcbiAgICBjb25zdCBmaWxlTmFtZSA9IGAke3JlcG9JZH0tJHtEYXRlLm5vdygpfS56aXBgO1xuICAgIGNvbnN0IHsgZGF0YTogdXBsb2FkRGF0YSwgZXJyb3I6IHVwbG9hZEVycm9yIH0gPSBhd2FpdCBjbGllbnQuc3RvcmFnZVxuICAgICAgLmZyb20oXCJsb2NhbF9yZXBvc1wiKVxuICAgICAgLnVwbG9hZChmaWxlTmFtZSwgZmlsZSk7XG5cbiAgICBpZiAodXBsb2FkRXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IodXBsb2FkRXJyb3IpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkZhaWxlZCB0byB1cGxvYWQgZmlsZSFcIiB9O1xuICAgIH1cblxuICAgIC8vIEdldCBwdWJsaWMgVVJMXG4gICAgY29uc3QgeyBkYXRhOiB1cmxEYXRhIH0gPSBjbGllbnQuc3RvcmFnZVxuICAgICAgLmZyb20oXCJsb2NhbF9yZXBvc1wiKVxuICAgICAgLmdldFB1YmxpY1VybChmaWxlTmFtZSk7XG5cbiAgICB1cGRhdGVEYXRhLm9iamVjdF91cmwgPSB1cmxEYXRhLnB1YmxpY1VybDtcbiAgICB1cGRhdGVEYXRhLmluZGV4X3N0YXR1cyA9IFwicGVuZGluZ1wiOyAvLyBUcmlnZ2VyIHJlLWluZGV4aW5nXG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIHJlcG9zaXRvcnlcbiAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAudXBkYXRlKHVwZGF0ZURhdGEpXG4gICAgLmVxKFwiaWRcIiwgcmVwb0lkKVxuICAgIC5zZWxlY3QoKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlcG8gYXMgUmVwbyB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUmVwbyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDx7IG9yZ2FuaXphdGlvbklkOiBzdHJpbmcgfT4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICAvLyBGZXRjaCB0aGUgb3JnYW5pemF0aW9uX2lkIGJlZm9yZSBkZWxldGluZ1xuICBjb25zdCB7IGRhdGE6IHJlcG8sIGVycm9yOiByZXBvRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIm9yZ2FuaXphdGlvbl9pZFwiKVxuICAgIC5lcShcImlkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKHJlcG9FcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IocmVwb0Vycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHJlcG9FcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICBpZiAoIXJlcG8pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUmVwb3NpdG9yeSBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgY2xpZW50LmZyb20oXCJyZXBvc2l0b3JpZXNcIikuZGVsZXRlKCkuZXEoXCJpZFwiLCByZXBvSWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogeyBvcmdhbml6YXRpb25JZDogcmVwby5vcmdhbml6YXRpb25faWQgfSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJpZ2dlclJlaW5kZXgoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8dm9pZD4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIGluZGV4X3N0YXR1cyB0byAncGVuZGluZycgdG8gdHJpZ2dlciByZWluZGV4aW5nXG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnVwZGF0ZSh7IGluZGV4X3N0YXR1czogXCJwZW5kaW5nXCIgfSlcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgLy8gVE9ETzogVHJpZ2dlciBhY3R1YWwgaW5kZXhpbmcgam9iL3dlYmhvb2svcXVldWUgaGVyZVxuICAvLyBUaGlzIGNvdWxkIGJlIGFuIEFQSSBjYWxsIHRvIHlvdXIgaW5kZXhpbmcgc2VydmljZVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVuZGVmaW5lZCB9O1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEb2N1bWVudGF0aW9uIFNlcnZpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2N1bWVudGF0aW9uKFxuICByZXBvSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PERvY3VtZW50YXRpb24+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBkb2N1bWVudGF0aW9uLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJkb2N1bWVudGF0aW9uXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJyZXBvX2lkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICBpZiAoIWRvY3VtZW50YXRpb24pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRG9jdW1lbnRhdGlvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogZG9jdW1lbnRhdGlvbiBhcyBEb2N1bWVudGF0aW9uIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2NQYWdlcyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2NQYWdlW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gR2V0IHRoZSBsYXRlc3QgZG9jdW1lbnRhdGlvbiB2ZXJzaW9uIGZvciB0aGlzIHJlcG9cbiAgY29uc3QgeyBkYXRhOiBkb2N1bWVudGF0aW9uLCBlcnJvcjogZG9jRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCJpZFwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5vcmRlcihcInZlcnNpb25cIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXG4gICAgLmxpbWl0KDEpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChkb2NFcnJvciB8fCAhZG9jdW1lbnRhdGlvbikge1xuICAgIGNvbnNvbGUuZXJyb3IoZG9jRXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJEb2N1bWVudGF0aW9uIG5vdCBmb3VuZFwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IHBhZ2VzLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJwYWdlc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiZG9jdW1lbnRhdGlvbl9pZFwiLCBkb2N1bWVudGF0aW9uLmlkKVxuICAgIC5vcmRlcihcIm9yZGVyX2luZGV4XCIsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKHBhZ2VzID8/IFtdKSBhcyBEb2NQYWdlW10gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERvY1BhZ2VCeUlkKFxuICBwYWdlSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PERvY1BhZ2U+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdlLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJkb2NfcGFnZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImlkXCIsIHBhZ2VJZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICBpZiAoIXBhZ2UpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUGFnZSBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcGFnZSBhcyBEb2NQYWdlIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2NQYWdlc0hpZXJhcmNoaWNhbChcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2NQYWdlW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gRmlyc3QgZ2V0IHRoZSBkb2N1bWVudGF0aW9uIElEIGZvciB0aGlzIHJlcG9cbiAgY29uc3QgeyBkYXRhOiBkb2N1bWVudGF0aW9uLCBlcnJvcjogZG9jRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCJpZFwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZG9jRXJyb3IgfHwgIWRvY3VtZW50YXRpb24pIHtcbiAgICBjb25zb2xlLmVycm9yKGRvY0Vycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRG9jdW1lbnRhdGlvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdlcywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jX3BhZ2VzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJkb2N1bWVudGF0aW9uX2lkXCIsIGRvY3VtZW50YXRpb24uaWQpXG4gICAgLm9yZGVyKFwib3JkZXJfaW5kZXhcIiwgeyBhc2NlbmRpbmc6IHRydWUgfSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICAvLyBQYWdlcyBhcmUgYWxyZWFkeSBzb3J0ZWQgYnkgb3JkZXJfaW5kZXhcbiAgLy8gVGhlIHBhcmVudF9wYWdlX2lkIGZpZWxkIG1haW50YWlucyB0aGUgaGllcmFyY2h5XG4gIC8vIEZyb250ZW5kIGNhbiB1c2UgdGhpcyB0byByZW5kZXIgdGhlIHRyZWUgc3RydWN0dXJlXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChwYWdlcyA/PyBbXSkgYXMgRG9jUGFnZVtdIH07XG59XG5cbi8qKlxuICogR2V0IGFsbCBkb2N1bWVudGF0aW9uIHZlcnNpb25zIGZvciBhIHJlcG9zaXRvcnlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERvY3VtZW50YXRpb25WZXJzaW9ucyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2N1bWVudGF0aW9uW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiB2ZXJzaW9ucywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLm9yZGVyKFwidmVyc2lvblwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiAodmVyc2lvbnMgPz8gW10pIGFzIERvY3VtZW50YXRpb25bXSB9O1xufVxuXG4vKipcbiAqIEdldCB0aGUgbGF0ZXN0IGNvbXBsZXRlZCBkb2N1bWVudGF0aW9uIHZlcnNpb24gZm9yIGEgcmVwb3NpdG9yeVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGF0ZXN0RG9jdW1lbnRhdGlvbihcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2N1bWVudGF0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogZG9jdW1lbnRhdGlvbiwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLm9yZGVyKFwidmVyc2lvblwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcbiAgICAubGltaXQoMSlcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKCFkb2N1bWVudGF0aW9uKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkRvY3VtZW50YXRpb24gbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogZG9jdW1lbnRhdGlvbiBhcyBEb2N1bWVudGF0aW9uIH07XG59XG5cbi8qKlxuICogR2V0IGRvY3VtZW50YXRpb24gcGFnZXMgZm9yIGEgc3BlY2lmaWMgdmVyc2lvblxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jUGFnZXNGb3JWZXJzaW9uKFxuICByZXBvSWQ6IHN0cmluZyxcbiAgdmVyc2lvbjogbnVtYmVyLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jUGFnZVtdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIC8vIEdldCB0aGUgZG9jdW1lbnRhdGlvbiByZWNvcmQgZm9yIHRoaXMgdmVyc2lvblxuICBjb25zdCB7IGRhdGE6IGRvY3VtZW50YXRpb24sIGVycm9yOiBkb2NFcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJkb2N1bWVudGF0aW9uXCIpXG4gICAgLnNlbGVjdChcImlkXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLmVxKFwidmVyc2lvblwiLCB2ZXJzaW9uKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZG9jRXJyb3IgfHwgIWRvY3VtZW50YXRpb24pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRG9jdW1lbnRhdGlvbiB2ZXJzaW9uIG5vdCBmb3VuZFwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IHBhZ2VzLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJwYWdlc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiZG9jdW1lbnRhdGlvbl9pZFwiLCBkb2N1bWVudGF0aW9uLmlkKVxuICAgIC5vcmRlcihcIm9yZGVyX2luZGV4XCIsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKHBhZ2VzID8/IFtdKSBhcyBEb2NQYWdlW10gfTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ29udmVyc2F0aW9uIFNlcnZpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb252ZXJzYXRpb25zKFxuICByZXBvSWQ6IHN0cmluZyxcbiAgbGltaXQ6IG51bWJlciA9IDIwLFxuICB2ZXJzaW9uOiBudW1iZXIgfCBudWxsID0gbnVsbCxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbltdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGxldCBxdWVyeSA9IGNsaWVudFxuICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKTtcblxuICAvLyBGaWx0ZXIgYnkgdmVyc2lvbiBpZiBzcGVjaWZpZWRcbiAgaWYgKHZlcnNpb24gIT09IG51bGwgJiYgdmVyc2lvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcXVlcnkgPSBxdWVyeS5lcShcInJlcG9fdmVyc2lvblwiLCB2ZXJzaW9uKTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogY29udmVyc2F0aW9ucywgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5XG4gICAgLm9yZGVyKFwidXBkYXRlZF9hdFwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcbiAgICAubGltaXQobGltaXQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKGNvbnZlcnNhdGlvbnMgPz8gW10pIGFzIENvbnZlcnNhdGlvbltdIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb252ZXJzYXRpb25CeUlkKFxuICBjb252ZXJzYXRpb25JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29udmVyc2F0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogY29udmVyc2F0aW9uLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpZFwiLCBjb252ZXJzYXRpb25JZClcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFjb252ZXJzYXRpb24pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiQ29udmVyc2F0aW9uIG5vdCBmb3VuZFwiIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjb252ZXJzYXRpb24gYXMgQ29udmVyc2F0aW9uIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDb252ZXJzYXRpb24oXG4gIHJlcG9JZDogc3RyaW5nLFxuICB0aXRsZT86IHN0cmluZyxcbiAgdmVyc2lvbj86IG51bWJlciB8IG51bGwsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxDb252ZXJzYXRpb24+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBjb252ZXJzYXRpb24sIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAuaW5zZXJ0KHtcbiAgICAgIHJlcG9faWQ6IHJlcG9JZCxcbiAgICAgIHVzZXJfaWQ6IHVzZXIuaWQsXG4gICAgICB0aXRsZTogdGl0bGUgfHwgXCJOZXcgQ29udmVyc2F0aW9uXCIsXG4gICAgICByZXBvX3ZlcnNpb246IHZlcnNpb24gPz8gbnVsbCxcbiAgICB9KVxuICAgIC5zZWxlY3QoKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGNvbnZlcnNhdGlvbiBhcyBDb252ZXJzYXRpb24gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNvbnZlcnNhdGlvbihcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PHZvaWQ+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLmRlbGV0ZSgpXG4gICAgLmVxKFwiaWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVuZGVmaW5lZCB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVuYW1lQ29udmVyc2F0aW9uKFxuICBjb252ZXJzYXRpb25JZDogc3RyaW5nLFxuICBuZXdUaXRsZTogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29udmVyc2F0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogY29udmVyc2F0aW9uLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLnVwZGF0ZSh7IHRpdGxlOiBuZXdUaXRsZSB9KVxuICAgIC5lcShcImlkXCIsIGNvbnZlcnNhdGlvbklkKVxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlci5pZClcbiAgICAuc2VsZWN0KClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjb252ZXJzYXRpb24gYXMgQ29udmVyc2F0aW9uIH07XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1lc3NhZ2UgU2VydmljZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvbnZlcnNhdGlvbk1lc3NhZ2VzKFxuICBjb252ZXJzYXRpb25JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29udmVyc2F0aW9uTWVzc2FnZVtdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogbWVzc2FnZXMsIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcIm1lc3NhZ2VzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJjb252ZXJzYXRpb25faWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgLm9yZGVyKFwiY3JlYXRlZF9hdFwiLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChtZXNzYWdlcyA/PyBbXSkgYXMgQ29udmVyc2F0aW9uTWVzc2FnZVtdIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVNZXNzYWdlKFxuICBjb252ZXJzYXRpb25JZDogc3RyaW5nLFxuICByb2xlOiBcInVzZXJcIiB8IFwiYXNzaXN0YW50XCIsXG4gIGNvbnRlbnQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbk1lc3NhZ2U+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBtZXNzYWdlLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJtZXNzYWdlc1wiKVxuICAgIC5pbnNlcnQoe1xuICAgICAgY29udmVyc2F0aW9uX2lkOiBjb252ZXJzYXRpb25JZCxcbiAgICAgIHJvbGUsXG4gICAgICBjb250ZW50LFxuICAgIH0pXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSBjb252ZXJzYXRpb24ncyB1cGRhdGVkX2F0IHRpbWVzdGFtcFxuICBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAudXBkYXRlKHsgdXBkYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpIH0pXG4gICAgLmVxKFwiaWRcIiwgY29udmVyc2F0aW9uSWQpO1xuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IG1lc3NhZ2UgYXMgQ29udmVyc2F0aW9uTWVzc2FnZSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZUNvZGVTbmlwcGV0cyhcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbiAgbWVzc2FnZUlkOiBzdHJpbmcsXG4gIHNuaXBwZXRzOiBBcnJheTx7IGZpbGU6IHN0cmluZzsgY29kZTogc3RyaW5nIH0+LFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29kZVNuaXBwZXRbXT4+IHtcbiAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCBzbmlwcGV0c1RvSW5zZXJ0ID0gc25pcHBldHMubWFwKChzbmlwcGV0KSA9PiAoe1xuICAgIGNvbnZlcnNhdGlvbl9pZDogY29udmVyc2F0aW9uSWQsXG4gICAgbWVzc2FnZV9pZDogbWVzc2FnZUlkLFxuICAgIGZpbGVfcGF0aDogc25pcHBldC5maWxlLFxuICAgIGNvZGVfY29udGVudDogc25pcHBldC5jb2RlLFxuICAgIGxhbmd1YWdlOiBzbmlwcGV0LmZpbGUuc3BsaXQoXCIuXCIpLnBvcCgpIHx8IG51bGwsXG4gIH0pKTtcblxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKFwiY29kZV9zbmlwcGV0c1wiKVxuICAgIC5pbnNlcnQoc25pcHBldHNUb0luc2VydClcbiAgICAuc2VsZWN0KCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBkYXRhIGFzIENvZGVTbmlwcGV0W10gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvZGVTbmlwcGV0c0ZvckNvbnZlcnNhdGlvbihcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvZGVTbmlwcGV0W10+PiB7XG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbShcImNvZGVfc25pcHBldHNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImNvbnZlcnNhdGlvbl9pZFwiLCBjb252ZXJzYXRpb25JZClcbiAgICAub3JkZXIoXCJjcmVhdGVkX2F0XCIsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGRhdGEgYXMgQ29kZVNuaXBwZXRbXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ29kZVNuaXBwZXQoXG4gIHNuaXBwZXRJZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8bnVsbD4+IHtcbiAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKFwiY29kZV9zbmlwcGV0c1wiKVxuICAgIC5kZWxldGUoKVxuICAgIC5lcShcImlkXCIsIHNuaXBwZXRJZCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBudWxsIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbmRleFJlcG9zaXRvcnkoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8dm9pZD4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGluc3RhbGxhdGlvbiwgZXJyb3I6IGluc3RhbGxhdGlvbkVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImdpdGh1Yl9pbnN0YWxsYXRpb25zXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpbnN0YWxsZWRfYnlcIiwgdXNlci5pZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKCFpbnN0YWxsYXRpb24gfHwgaW5zdGFsbGF0aW9uRXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiR2l0aHViIEFwcCBJbnN0YWxsYXRpb24gbm90IGZvdW5kIVwiIH07XG4gIH1cblxuICAvL2ZldGNoIHJlcG9cblxuICBjb25zdCByZXBvUmVzdWx0ID0gYXdhaXQgZ2V0UmVwb1dpdGhTdGF0dXMocmVwb0lkKTtcblxuICBpZiAoIXJlcG9SZXN1bHQuc3VjY2Vzcykge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogcmVwb1Jlc3VsdC5lcnJvciB9O1xuICB9XG5cbiAgY29uc3QgcmVwb1VybCA9IHJlcG9SZXN1bHQuZGF0YS5yZXBvX3VybDtcbiAgY29uc3QgaW5zdGFsbGF0aW9uSWQgPSBpbnN0YWxsYXRpb24uaW5zdGFsbGF0aW9uX2lkO1xuXG4gIC8vIEdldCB0aGUgbGF0ZXN0IHZlcnNpb24gbnVtYmVyIGZvciB0aGlzIHJlcG9cbiAgY29uc3QgeyBkYXRhOiBsYXRlc3REb2MgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCJ2ZXJzaW9uXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLm9yZGVyKFwidmVyc2lvblwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcbiAgICAubGltaXQoMSlcbiAgICAuc2luZ2xlKCk7XG5cbiAgLy8gSW5jcmVtZW50IHZlcnNpb24gKHN0YXJ0IGF0IDEgaWYgbm8gcHJldmlvdXMgdmVyc2lvbnMpXG4gIGNvbnN0IG5leHRWZXJzaW9uID0gKGxhdGVzdERvYz8udmVyc2lvbiA/PyAwKSArIDE7XG5cbiAgLy9tYXJrIHRoZSByZXBvc2l0b3J5IGFzIGluZGV4aW5nIGluIHN1cGFiYXNlIGZpcnN0XG4gIGNvbnN0IHsgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgIC51cGRhdGUoeyBpbmRleF9zdGF0dXM6IFwiaW5kZXhpbmdcIiB9KVxuICAgIC5lcShcImlkXCIsIHJlcG9JZCk7XG5cbiAgaWYgKHVwZGF0ZUVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcih1cGRhdGVFcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiB1cGRhdGVFcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICAvLyBDYWxsIHRoZSBiYWNrZW5kIHRvIHN0YXJ0IGluZGV4aW5nIChmaXJlLWFuZC1mb3JnZXQpXG4gIC8vIERvbid0IGF3YWl0IG9yIHRocm93IGVycm9ycyBzaW5jZSB0aGlzIGlzIGEgbG9uZy1ydW5uaW5nIG9wZXJhdGlvblxuICBmZXRjaChgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vcmVwb3MvaW5kZXhgLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHJlcG9fdXJsOiByZXBvVXJsLFxuICAgICAgcmVwb19pZDogcmVwb0lkLFxuICAgICAgdXNlcl9pZDogdXNlci5pZCxcbiAgICAgIGluc3RhbGxhdGlvbl9pZDogaW5zdGFsbGF0aW9uSWQsXG4gICAgICBicmFuY2g6IFwibWFpblwiLFxuICAgICAgdmVyc2lvbjogbmV4dFZlcnNpb24sXG4gICAgfSksXG4gIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIC8vIExvZyB0aGUgZXJyb3IgYnV0IGRvbid0IGZhaWwgdGhlIHJlcXVlc3RcbiAgICBjb25zb2xlLmVycm9yKFwiSW5kZXhpbmcgcmVxdWVzdCBmYWlsZWQ6XCIsIGVycm9yKTtcbiAgICAvLyBUaGUgYmFja2VuZCBzaG91bGQgaGFuZGxlIHVwZGF0aW5nIHRoZSByZXBvIHN0YXR1cyBvbiBmYWlsdXJlXG4gIH0pO1xuXG4gIC8vIFJldHVybiBzdWNjZXNzIGltbWVkaWF0ZWx5IC0gdGhlIGluZGV4aW5nIHdpbGwgaGFwcGVuIGluIHRoZSBiYWNrZ3JvdW5kXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVuZGVmaW5lZCB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJpVEE2dUJzQiJ9
}),
"[project]/src/lib/services/data:aa912e [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"601fa169b11b6973375eb8e0dcc1c5621f47916013":"getDocPagesForVersion"},"src/lib/services/repoService.ts",""] */ __turbopack_context__.s([
    "getDocPagesForVersion",
    ()=>getDocPagesForVersion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var getDocPagesForVersion = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("601fa169b11b6973375eb8e0dcc1c5621f47916013", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getDocPagesForVersion"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcmVwb1NlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAL3V0aWxzL3N1cGFiYXNlL3NlcnZlclwiO1xuaW1wb3J0IHtcbiAgUmVwbyxcbiAgRG9jdW1lbnRhdGlvbixcbiAgRG9jUGFnZSxcbiAgQ29udmVyc2F0aW9uLFxuICBDb252ZXJzYXRpb25NZXNzYWdlLFxuICBDb2RlU25pcHBldCxcbn0gZnJvbSBcIkAvYXBwL3R5cGVzL3N1cGFiYXNlXCI7XG5pbXBvcnQgeyBBY3Rpb25SZXN1bHQgfSBmcm9tIFwiQC9hcHAvdHlwZXMvYWN0aW9uXCI7XG5pbXBvcnQge1xuICB2ZXJpZnlHaXRodWJSZXBvQWNjZXNzLFxuICB2ZXJpZnlHaXRMYWJSZXBvQWNjZXNzLFxufSBmcm9tIFwiLi9naXRQcm92aWRlclNlcnZpY2VcIjtcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHBhcnNlIEdpdEh1YiBVUkxzXG5mdW5jdGlvbiBwYXJzZUdpdEh1YlVybCh1cmw6IHN0cmluZyk6IHsgb3duZXI6IHN0cmluZzsgcmVwbzogc3RyaW5nIH0ge1xuICB0cnkge1xuICAgIC8vIEhhbmRsZSBtdWx0aXBsZSBmb3JtYXRzOlxuICAgIC8vIC0gaHR0cHM6Ly9naXRodWIuY29tL293bmVyL3JlcG9cbiAgICAvLyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9vd25lci9yZXBvLmdpdFxuICAgIC8vIC0gZ2l0QGdpdGh1Yi5jb206b3duZXIvcmVwby5naXRcblxuICAgIHVybCA9IHVybC50cmltKCkucmVwbGFjZSgvXFwuZ2l0JC8sIFwiXCIpO1xuXG4gICAgaWYgKHVybC5pbmNsdWRlcyhcImdpdGh1Yi5jb20vXCIpKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IHVybC5zcGxpdChcImdpdGh1Yi5jb20vXCIpWzFdLnNwbGl0KFwiL1wiKTtcbiAgICAgIHJldHVybiB7IG93bmVyOiBwYXJ0c1swXSwgcmVwbzogcGFydHNbMV0gfTtcbiAgICB9XG5cbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoXCJnaXRAZ2l0aHViLmNvbTpcIikpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gdXJsLnJlcGxhY2UoXCJnaXRAZ2l0aHViLmNvbTpcIiwgXCJcIikuc3BsaXQoXCIvXCIpO1xuICAgICAgcmV0dXJuIHsgb3duZXI6IHBhcnRzWzBdLCByZXBvOiBwYXJ0c1sxXSB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IG93bmVyOiBcIlwiLCByZXBvOiBcIlwiIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgb3duZXI6IFwiXCIsIHJlcG86IFwiXCIgfTtcbiAgfVxufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gcGFyc2UgR2l0TGFiIFVSTHNcbmZ1bmN0aW9uIHBhcnNlR2l0TGFiVXJsKHVybDogc3RyaW5nKTogeyBvd25lcjogc3RyaW5nOyByZXBvOiBzdHJpbmcgfSB7XG4gIHRyeSB7XG4gICAgLy8gSGFuZGxlIG11bHRpcGxlIGZvcm1hdHM6XG4gICAgLy8gLSBodHRwczovL2dpdGxhYi5jb20vb3duZXIvcmVwb1xuICAgIC8vIC0gaHR0cHM6Ly9naXRsYWIuY29tL293bmVyL3N1Ymdyb3VwL3JlcG9cbiAgICAvLyAtIGh0dHBzOi8vZ2l0bGFiLmNvbS9vd25lci9yZXBvLmdpdFxuICAgIC8vIC0gZ2l0QGdpdGxhYi5jb206b3duZXIvcmVwby5naXRcbiAgICAvLyAtIFNlbGYtaG9zdGVkOiBodHRwczovL2dpdGxhYi5leGFtcGxlLmNvbS9vd25lci9yZXBvXG5cbiAgICB1cmwgPSB1cmwudHJpbSgpLnJlcGxhY2UoL1xcLmdpdCQvLCBcIlwiKTtcblxuICAgIC8vIEhhbmRsZSBIVFRQUyBVUkxzIChnaXRsYWIuY29tIG9yIHNlbGYtaG9zdGVkKVxuICAgIGlmICh1cmwuaW5jbHVkZXMoXCJnaXRsYWIuY29tL1wiKSB8fCAvZ2l0bGFiXFwuW14vXStcXC8vLnRlc3QodXJsKSkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgcGF0aCBhZnRlciB0aGUgZG9tYWluXG4gICAgICBjb25zdCBtYXRjaCA9IHVybC5tYXRjaCgvZ2l0bGFiW14vXSpcXC8oLispLyk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgY29uc3QgcGF0aFBhcnRzID0gbWF0Y2hbMV0uc3BsaXQoXCIvXCIpO1xuICAgICAgICAvLyBHaXRMYWIgc3VwcG9ydHMgbmVzdGVkIGdyb3Vwcywgc28gd2UgbmVlZCB0byBoYW5kbGU6XG4gICAgICAgIC8vIC0gb3duZXIvcmVwbyAoMiBwYXJ0cylcbiAgICAgICAgLy8gLSBvd25lci9zdWJncm91cC9yZXBvICgzKyBwYXJ0cylcbiAgICAgICAgaWYgKHBhdGhQYXJ0cy5sZW5ndGggPj0gMikge1xuICAgICAgICAgIC8vIFRha2UgZXZlcnl0aGluZyBleGNlcHQgdGhlIGxhc3QgcGFydCBhcyBvd25lci9ncm91cFxuICAgICAgICAgIGNvbnN0IHJlcG8gPSBwYXRoUGFydHNbcGF0aFBhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IG93bmVyID0gcGF0aFBhcnRzLnNsaWNlKDAsIC0xKS5qb2luKFwiL1wiKTtcbiAgICAgICAgICByZXR1cm4geyBvd25lciwgcmVwbyB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIFNTSCBVUkxzXG4gICAgaWYgKHVybC5zdGFydHNXaXRoKFwiZ2l0QGdpdGxhYi5jb206XCIpIHx8IC9naXRAZ2l0bGFiXFwuW146XSs6Ly50ZXN0KHVybCkpIHtcbiAgICAgIGNvbnN0IG1hdGNoID0gdXJsLm1hdGNoKC9naXRAZ2l0bGFiW146XSo6KC4rKS8pO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGNvbnN0IHBhdGhQYXJ0cyA9IG1hdGNoWzFdLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgaWYgKHBhdGhQYXJ0cy5sZW5ndGggPj0gMikge1xuICAgICAgICAgIGNvbnN0IHJlcG8gPSBwYXRoUGFydHNbcGF0aFBhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IG93bmVyID0gcGF0aFBhcnRzLnNsaWNlKDAsIC0xKS5qb2luKFwiL1wiKTtcbiAgICAgICAgICByZXR1cm4geyBvd25lciwgcmVwbyB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgb3duZXI6IFwiXCIsIHJlcG86IFwiXCIgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBvd25lcjogXCJcIiwgcmVwbzogXCJcIiB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXBvc0J5T3JnYW5pemF0aW9uSWQoXG4gIG9yZ2FuaXphdGlvbklkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHVzZXIgPSBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJvcmdhbml6YXRpb25faWRcIiwgb3JnYW5pemF0aW9uSWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKGRhdGEgPz8gW10pIGFzIFJlcG9bXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUmVwb1ZpYUdpdGh1YihcbiAgZm9ybURhdGE6IEZvcm1EYXRhLFxuICBvcmdJZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8UmVwbyB8IHVuZGVmaW5lZD4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IHByb3ZpZGVyID0gZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IHVybCA9IGZvcm1EYXRhLmdldChcImdpdGh1Yi11cmxcIikgYXMgc3RyaW5nO1xuXG4gIGlmICghbmFtZSkge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJOYW1lIGlzIHJlcXVpcmVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGluc3RhbGxhdGlvbiB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJnaXRodWJfaW5zdGFsbGF0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiaW5zdGFsbGVkX2J5XCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghaW5zdGFsbGF0aW9uKSB7XG4gICAgLy8gTm8gR2l0SHViIEFwcCBpbnN0YWxsYXRpb24gLSBwcm9tcHQgdXNlciB0byBpbnN0YWxsXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiSW5zdGFsbGF0aW9uIE5lZWRlZFwiLFxuICAgIH07XG4gIH1cblxuICAvL3BhcnNlIHVybCBmb3Igb3duZXIgYW5kIHJlcG9cbiAgY29uc3QgeyBvd25lciwgcmVwbzogcmVwb05hbWUgfSA9IHBhcnNlR2l0SHViVXJsKHVybCk7XG5cbiAgY29uc3QgaGFzQWNjZXNzID0gYXdhaXQgdmVyaWZ5R2l0aHViUmVwb0FjY2VzcyhcbiAgICBpbnN0YWxsYXRpb24uaWQsXG4gICAgb3duZXIsXG4gICAgcmVwb05hbWUsXG4gICk7XG5cbiAgaWYgKCFoYXNBY2Nlc3MpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBlcnJvcjogXCJBY2Nlc3MgRGVuaWVkXCIsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3I6IHJlcG9FcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAuaW5zZXJ0KHtcbiAgICAgIG5hbWUsXG4gICAgICBwcm92aWRlcixcbiAgICAgIHJlcG9fdXJsOiB1cmwsXG4gICAgICBvcmdhbml6YXRpb25faWQ6IG9yZ0lkLFxuICAgICAgaW5kZXhlZF9ieTogdXNlci5pZCxcbiAgICAgIGluZGV4X3N0YXR1czogXCJub3QgaW5kZXhlZFwiLFxuICAgIH0pXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChyZXBvRXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHJlcG9FcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXBvIGFzIFJlcG8gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVJlcG9WaWFHaXRsYWIoXG4gIGZvcm1EYXRhOiBGb3JtRGF0YSxcbiAgb3JnSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFJlcG8gfCB1bmRlZmluZWQ+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICBjb25zdCBwcm92aWRlciA9IGZvcm1EYXRhLmdldChcInR5cGVcIikgYXMgc3RyaW5nO1xuICBjb25zdCB1cmwgPSBmb3JtRGF0YS5nZXQoXCJnaXRsYWItdXJsXCIpIGFzIHN0cmluZztcblxuICAvLyBWYWxpZGF0ZSBpbnB1dHNcbiAgaWYgKCFuYW1lIHx8IG5hbWUudHJpbSgpID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlJlcG9zaXRvcnkgbmFtZSBpcyByZXF1aXJlZFwiIH07XG4gIH1cblxuICBpZiAoIXVybCB8fCB1cmwudHJpbSgpID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkdpdExhYiBVUkwgaXMgcmVxdWlyZWRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBpbnN0YWxsYXRpb24gfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZ2l0bGFiX2luc3RhbGxhdGlvbnNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImluc3RhbGxlZF9ieVwiLCB1c2VyLmlkKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoIWluc3RhbGxhdGlvbikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJJbnN0YWxsYXRpb24gTmVlZGVkXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgb3duZXIsIHJlcG86IHJlcG9OYW1lIH0gPSBwYXJzZUdpdExhYlVybCh1cmwpO1xuXG4gIC8vdmVyaWZ5IGFjY2Vzc1xuICBjb25zdCBoYXNBY2Nlc3MgPSBhd2FpdCB2ZXJpZnlHaXRMYWJSZXBvQWNjZXNzKFxuICAgIGluc3RhbGxhdGlvbi5hY2Nlc3NfdG9rZW4sXG4gICAgb3duZXIsXG4gICAgcmVwb05hbWUsXG4gICk7XG5cbiAgaWYgKCFoYXNBY2Nlc3MpIHtcbiAgICBpZiAoaW5zdGFsbGF0aW9uLmFjY2Vzc190b2tlbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIGVycm9yOiBcIkFjY2VzcyByZXF1aXJlZCFcIixcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiQWNjZXNzIGRlbmllZCFcIixcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvcjogcmVwb0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgIC5pbnNlcnQoe1xuICAgICAgbmFtZSxcbiAgICAgIHByb3ZpZGVyLFxuICAgICAgcmVwb191cmw6IHVybCxcbiAgICAgIG9yZ2FuaXphdGlvbl9pZDogb3JnSWQsXG4gICAgICBpbmRleGVkX2J5OiB1c2VyLmlkLFxuICAgICAgaW5kZXhfc3RhdHVzOiBcIm5vdCBpbmRleGVkXCIsXG4gICAgfSlcbiAgICAuc2VsZWN0KClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKHJlcG9FcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogcmVwb0Vycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlcG8gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVJlcG9WaWFMb2NhbEZpbGUoXG4gIGZvcm1EYXRhOiBGb3JtRGF0YSxcbiAgb3JnSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFJlcG8+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KFwiZmlsZVwiKSBhcyBGaWxlO1xuXG4gIC8vIFZhbGlkYXRlIGlucHV0c1xuICBpZiAoIW5hbWUgfHwgbmFtZS50cmltKCkgPT09IFwiXCIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUmVwb3NpdG9yeSBuYW1lIGlzIHJlcXVpcmVkXCIgfTtcbiAgfVxuXG4gIGlmICghZmlsZSkge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGaWxlIGlzIHJlcXVpcmVkXCIgfTtcbiAgfVxuXG4gIC8vIFZhbGlkYXRlIGZpbGUgdHlwZVxuICBpZiAoIWZpbGUubmFtZS5lbmRzV2l0aChcIi56aXBcIikpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiT25seSAuemlwIGZpbGVzIGFyZSBhbGxvd2VkXCIgfTtcbiAgfVxuXG4gIC8vIFZhbGlkYXRlIGZpbGUgc2l6ZSAobWF4IDEwME1CKVxuICBjb25zdCBtYXhTaXplID0gMTAwICogMTAyNCAqIDEwMjQ7IC8vIDEwME1CIGluIGJ5dGVzXG4gIGlmIChmaWxlLnNpemUgPiBtYXhTaXplKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiRmlsZSBzaXplIGV4Y2VlZHMgMTAwTUIgbGltaXRcIixcbiAgICB9O1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBHZW5lcmF0ZSBhIHVuaXF1ZSBmaWxlIG5hbWUgdG8gcHJldmVudCBjb2xsaXNpb25zXG4gICAgY29uc3QgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBzYW5pdGl6ZWROYW1lID0gbmFtZS50cmltKCkucmVwbGFjZSgvW15hLXowLTktX10vZ2ksIFwiX1wiKTtcbiAgICBjb25zdCBmaWxlTmFtZSA9IGAke3Nhbml0aXplZE5hbWV9XyR7dGltZXN0YW1wfV8ke2ZpbGUubmFtZX1gO1xuICAgIGNvbnN0IGZpbGVQYXRoID0gYCR7b3JnSWR9LyR7ZmlsZU5hbWV9YDtcblxuICAgIC8vIFVwbG9hZCBmaWxlIHRvIFN1cGFiYXNlIFN0b3JhZ2VcbiAgICBjb25zdCB7IGVycm9yOiB1cGxvYWRFcnJvciB9ID0gYXdhaXQgY2xpZW50LnN0b3JhZ2VcbiAgICAgIC5mcm9tKFwibG9jYWxfcmVwb3NcIilcbiAgICAgIC51cGxvYWQoZmlsZVBhdGgsIGZpbGUsIHtcbiAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vemlwXCIsXG4gICAgICAgIHVwc2VydDogZmFsc2UsXG4gICAgICB9KTtcblxuICAgIGlmICh1cGxvYWRFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIlVwbG9hZCBlcnJvcjpcIiwgdXBsb2FkRXJyb3IpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIGVycm9yOiBgRmlsZSB1cGxvYWQgZmFpbGVkOiAke3VwbG9hZEVycm9yLm1lc3NhZ2V9YCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gR2V0IHRoZSBwdWJsaWMgVVJMIGZvciB0aGUgdXBsb2FkZWQgZmlsZVxuICAgIGNvbnN0IHsgZGF0YTogdXJsRGF0YSB9ID0gY2xpZW50LnN0b3JhZ2VcbiAgICAgIC5mcm9tKFwibG9jYWxfcmVwb3NcIilcbiAgICAgIC5nZXRQdWJsaWNVcmwoZmlsZVBhdGgpO1xuXG4gICAgLy8gQ3JlYXRlIHJlcG9zaXRvcnkgcmVjb3JkIGluIGRhdGFiYXNlXG4gICAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvcjogcmVwb0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgICAuaW5zZXJ0KHtcbiAgICAgICAgbmFtZTogbmFtZS50cmltKCksXG4gICAgICAgIHByb3ZpZGVyOiBcImxvY2FsXCIsXG4gICAgICAgIHJlcG9fdXJsOiBudWxsLFxuICAgICAgICBvYmplY3RfdXJsOiB1cmxEYXRhLnB1YmxpY1VybCxcbiAgICAgICAgb3JnYW5pemF0aW9uX2lkOiBvcmdJZCxcbiAgICAgICAgaW5kZXhlZF9ieTogdXNlci5pZCxcbiAgICAgICAgaW5kZXhfc3RhdHVzOiBcIm5vdCBpbmRleGVkXCIsXG4gICAgICB9KVxuICAgICAgLnNlbGVjdCgpXG4gICAgICAuc2luZ2xlKCk7XG5cbiAgICBpZiAocmVwb0Vycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiUmVwb3NpdG9yeSBjcmVhdGlvbiBlcnJvcjpcIiwgcmVwb0Vycm9yKTtcbiAgICAgIC8vIEF0dGVtcHQgdG8gY2xlYW4gdXAgdXBsb2FkZWQgZmlsZVxuICAgICAgYXdhaXQgY2xpZW50LnN0b3JhZ2UuZnJvbShcImxvY2FsX3JlcG9zXCIpLnJlbW92ZShbZmlsZVBhdGhdKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogYFJlcG9zaXRvcnkgY3JlYXRpb24gZmFpbGVkOiAke3JlcG9FcnJvci5tZXNzYWdlfWAsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlcG8gYXMgUmVwbyB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJVbmV4cGVjdGVkIGVycm9yOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6XG4gICAgICAgIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkXCIsXG4gICAgfTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSZXBvc2l0b3J5IE1hbmFnZW1lbnQgU2VydmljZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlcG9XaXRoU3RhdHVzKFxuICByZXBvSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFJlcG8+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImlkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICBpZiAoIXJlcG8pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUmVwb3NpdG9yeSBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVwbyBhcyBSZXBvIH07XG59XG5cbnR5cGUgVXBkYXRlRGF0YSA9IHtcbiAgbmFtZT86IHN0cmluZztcbiAgcmVwb191cmw/OiBzdHJpbmc7XG4gIG9iamVjdF91cmw/OiBzdHJpbmc7XG4gIGluZGV4X3N0YXR1cz86IHN0cmluZztcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVSZXBvU2V0dGluZ3MoXG4gIHJlcG9JZDogc3RyaW5nLFxuICBzZXR0aW5nczogeyBuYW1lPzogc3RyaW5nOyByZXBvX3VybD86IHN0cmluZzsgZmlsZT86IEZpbGUgfSxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFJlcG8+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gR2V0IHRoZSBjdXJyZW50IHJlcG8gdG8gY2hlY2sgaXRzIHByb3ZpZGVyIHR5cGVcbiAgY29uc3QgeyBkYXRhOiBjdXJyZW50UmVwbyB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImlkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKCFjdXJyZW50UmVwbykge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJSZXBvc2l0b3J5IG5vdCBmb3VuZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgdXBkYXRlRGF0YTogVXBkYXRlRGF0YSA9IHt9O1xuXG4gIC8vIEhhbmRsZSBuYW1lIHVwZGF0ZVxuICBpZiAoc2V0dGluZ3MubmFtZSkge1xuICAgIHVwZGF0ZURhdGEubmFtZSA9IHNldHRpbmdzLm5hbWU7XG4gIH1cblxuICAvLyBIYW5kbGUgR2l0SHViIFVSTCB1cGRhdGVcbiAgaWYgKHNldHRpbmdzLnJlcG9fdXJsICYmIGN1cnJlbnRSZXBvLnByb3ZpZGVyID09PSBcImdpdGh1YlwiKSB7XG4gICAgY29uc3QgeyBvd25lciwgcmVwbyB9ID0gcGFyc2VHaXRIdWJVcmwoc2V0dGluZ3MucmVwb191cmwpO1xuXG4gICAgaWYgKCFvd25lciB8fCAhcmVwbykge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkludmFsaWQgR2l0SHViIFVSTCBmb3JtYXQhXCIgfTtcbiAgICB9XG5cbiAgICAvLyBWZXJpZnkgYWNjZXNzIHRvIHRoZSBuZXcgcmVwb1xuICAgIGNvbnN0IHsgZGF0YTogaW5zdGFsbGF0aW9uIH0gPSBhd2FpdCBjbGllbnRcbiAgICAgIC5mcm9tKFwiZ2l0aHViX2luc3RhbGxhdGlvbnNcIilcbiAgICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgICAuZXEoXCJpbnN0YWxsZWRfYnlcIiwgdXNlci5pZClcbiAgICAgIC5zaW5nbGUoKTtcblxuICAgIGlmICghaW5zdGFsbGF0aW9uKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiR2l0SHViIEFwcCBub3QgaW5zdGFsbGVkIVwiIH07XG4gICAgfVxuXG4gICAgY29uc3QgaGFzQWNjZXNzID0gYXdhaXQgdmVyaWZ5R2l0aHViUmVwb0FjY2VzcyhcbiAgICAgIGluc3RhbGxhdGlvbi5pbnN0YWxsYXRpb25faWQudG9TdHJpbmcoKSxcbiAgICAgIG93bmVyLFxuICAgICAgcmVwbyxcbiAgICApO1xuXG4gICAgaWYgKCFoYXNBY2Nlc3MpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjpcbiAgICAgICAgICBcIkNhbm5vdCBhY2Nlc3MgdGhpcyByZXBvc2l0b3J5LiBNYWtlIHN1cmUgdGhlIEdpdEh1YiBBcHAgaXMgaW5zdGFsbGVkIGZvciB0aGlzIHJlcG9zaXRvcnkuXCIsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHVwZGF0ZURhdGEucmVwb191cmwgPSBzZXR0aW5ncy5yZXBvX3VybDtcbiAgICB1cGRhdGVEYXRhLmluZGV4X3N0YXR1cyA9IFwibm90IGluZGV4ZWRcIjsgLy8gVHJpZ2dlciByZS1pbmRleGluZ1xuICB9XG5cbiAgLy8gSGFuZGxlIGxvY2FsIGZpbGUgdXBsb2FkXG4gIGlmIChzZXR0aW5ncy5maWxlICYmIGN1cnJlbnRSZXBvLnByb3ZpZGVyID09PSBcImxvY2FsXCIpIHtcbiAgICBjb25zdCBmaWxlID0gc2V0dGluZ3MuZmlsZTtcbiAgICBjb25zdCBmaWxlRXh0ID0gZmlsZS5uYW1lLnNwbGl0KFwiLlwiKS5wb3AoKTtcblxuICAgIGlmIChmaWxlRXh0ICE9PSBcInppcFwiKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiT25seSAuemlwIGZpbGVzIGFyZSBhbGxvd2VkIVwiIH07XG4gICAgfVxuXG4gICAgLy8gVXBsb2FkIHRvIFN1cGFiYXNlIFN0b3JhZ2VcbiAgICBjb25zdCBmaWxlTmFtZSA9IGAke3JlcG9JZH0tJHtEYXRlLm5vdygpfS56aXBgO1xuICAgIGNvbnN0IHsgZGF0YTogdXBsb2FkRGF0YSwgZXJyb3I6IHVwbG9hZEVycm9yIH0gPSBhd2FpdCBjbGllbnQuc3RvcmFnZVxuICAgICAgLmZyb20oXCJsb2NhbF9yZXBvc1wiKVxuICAgICAgLnVwbG9hZChmaWxlTmFtZSwgZmlsZSk7XG5cbiAgICBpZiAodXBsb2FkRXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IodXBsb2FkRXJyb3IpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkZhaWxlZCB0byB1cGxvYWQgZmlsZSFcIiB9O1xuICAgIH1cblxuICAgIC8vIEdldCBwdWJsaWMgVVJMXG4gICAgY29uc3QgeyBkYXRhOiB1cmxEYXRhIH0gPSBjbGllbnQuc3RvcmFnZVxuICAgICAgLmZyb20oXCJsb2NhbF9yZXBvc1wiKVxuICAgICAgLmdldFB1YmxpY1VybChmaWxlTmFtZSk7XG5cbiAgICB1cGRhdGVEYXRhLm9iamVjdF91cmwgPSB1cmxEYXRhLnB1YmxpY1VybDtcbiAgICB1cGRhdGVEYXRhLmluZGV4X3N0YXR1cyA9IFwicGVuZGluZ1wiOyAvLyBUcmlnZ2VyIHJlLWluZGV4aW5nXG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIHJlcG9zaXRvcnlcbiAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAudXBkYXRlKHVwZGF0ZURhdGEpXG4gICAgLmVxKFwiaWRcIiwgcmVwb0lkKVxuICAgIC5zZWxlY3QoKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlcG8gYXMgUmVwbyB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUmVwbyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDx7IG9yZ2FuaXphdGlvbklkOiBzdHJpbmcgfT4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICAvLyBGZXRjaCB0aGUgb3JnYW5pemF0aW9uX2lkIGJlZm9yZSBkZWxldGluZ1xuICBjb25zdCB7IGRhdGE6IHJlcG8sIGVycm9yOiByZXBvRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIm9yZ2FuaXphdGlvbl9pZFwiKVxuICAgIC5lcShcImlkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKHJlcG9FcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IocmVwb0Vycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHJlcG9FcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICBpZiAoIXJlcG8pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUmVwb3NpdG9yeSBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgY2xpZW50LmZyb20oXCJyZXBvc2l0b3JpZXNcIikuZGVsZXRlKCkuZXEoXCJpZFwiLCByZXBvSWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogeyBvcmdhbml6YXRpb25JZDogcmVwby5vcmdhbml6YXRpb25faWQgfSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJpZ2dlclJlaW5kZXgoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8dm9pZD4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIGluZGV4X3N0YXR1cyB0byAncGVuZGluZycgdG8gdHJpZ2dlciByZWluZGV4aW5nXG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnVwZGF0ZSh7IGluZGV4X3N0YXR1czogXCJwZW5kaW5nXCIgfSlcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgLy8gVE9ETzogVHJpZ2dlciBhY3R1YWwgaW5kZXhpbmcgam9iL3dlYmhvb2svcXVldWUgaGVyZVxuICAvLyBUaGlzIGNvdWxkIGJlIGFuIEFQSSBjYWxsIHRvIHlvdXIgaW5kZXhpbmcgc2VydmljZVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVuZGVmaW5lZCB9O1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEb2N1bWVudGF0aW9uIFNlcnZpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2N1bWVudGF0aW9uKFxuICByZXBvSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PERvY3VtZW50YXRpb24+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBkb2N1bWVudGF0aW9uLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJkb2N1bWVudGF0aW9uXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJyZXBvX2lkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICBpZiAoIWRvY3VtZW50YXRpb24pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRG9jdW1lbnRhdGlvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogZG9jdW1lbnRhdGlvbiBhcyBEb2N1bWVudGF0aW9uIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2NQYWdlcyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2NQYWdlW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gR2V0IHRoZSBsYXRlc3QgZG9jdW1lbnRhdGlvbiB2ZXJzaW9uIGZvciB0aGlzIHJlcG9cbiAgY29uc3QgeyBkYXRhOiBkb2N1bWVudGF0aW9uLCBlcnJvcjogZG9jRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCJpZFwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5vcmRlcihcInZlcnNpb25cIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXG4gICAgLmxpbWl0KDEpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChkb2NFcnJvciB8fCAhZG9jdW1lbnRhdGlvbikge1xuICAgIGNvbnNvbGUuZXJyb3IoZG9jRXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJEb2N1bWVudGF0aW9uIG5vdCBmb3VuZFwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IHBhZ2VzLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJwYWdlc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiZG9jdW1lbnRhdGlvbl9pZFwiLCBkb2N1bWVudGF0aW9uLmlkKVxuICAgIC5vcmRlcihcIm9yZGVyX2luZGV4XCIsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKHBhZ2VzID8/IFtdKSBhcyBEb2NQYWdlW10gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERvY1BhZ2VCeUlkKFxuICBwYWdlSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PERvY1BhZ2U+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdlLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJkb2NfcGFnZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImlkXCIsIHBhZ2VJZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICBpZiAoIXBhZ2UpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUGFnZSBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcGFnZSBhcyBEb2NQYWdlIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2NQYWdlc0hpZXJhcmNoaWNhbChcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2NQYWdlW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gRmlyc3QgZ2V0IHRoZSBkb2N1bWVudGF0aW9uIElEIGZvciB0aGlzIHJlcG9cbiAgY29uc3QgeyBkYXRhOiBkb2N1bWVudGF0aW9uLCBlcnJvcjogZG9jRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCJpZFwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZG9jRXJyb3IgfHwgIWRvY3VtZW50YXRpb24pIHtcbiAgICBjb25zb2xlLmVycm9yKGRvY0Vycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRG9jdW1lbnRhdGlvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdlcywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jX3BhZ2VzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJkb2N1bWVudGF0aW9uX2lkXCIsIGRvY3VtZW50YXRpb24uaWQpXG4gICAgLm9yZGVyKFwib3JkZXJfaW5kZXhcIiwgeyBhc2NlbmRpbmc6IHRydWUgfSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICAvLyBQYWdlcyBhcmUgYWxyZWFkeSBzb3J0ZWQgYnkgb3JkZXJfaW5kZXhcbiAgLy8gVGhlIHBhcmVudF9wYWdlX2lkIGZpZWxkIG1haW50YWlucyB0aGUgaGllcmFyY2h5XG4gIC8vIEZyb250ZW5kIGNhbiB1c2UgdGhpcyB0byByZW5kZXIgdGhlIHRyZWUgc3RydWN0dXJlXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChwYWdlcyA/PyBbXSkgYXMgRG9jUGFnZVtdIH07XG59XG5cbi8qKlxuICogR2V0IGFsbCBkb2N1bWVudGF0aW9uIHZlcnNpb25zIGZvciBhIHJlcG9zaXRvcnlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERvY3VtZW50YXRpb25WZXJzaW9ucyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2N1bWVudGF0aW9uW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiB2ZXJzaW9ucywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLm9yZGVyKFwidmVyc2lvblwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiAodmVyc2lvbnMgPz8gW10pIGFzIERvY3VtZW50YXRpb25bXSB9O1xufVxuXG4vKipcbiAqIEdldCB0aGUgbGF0ZXN0IGNvbXBsZXRlZCBkb2N1bWVudGF0aW9uIHZlcnNpb24gZm9yIGEgcmVwb3NpdG9yeVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGF0ZXN0RG9jdW1lbnRhdGlvbihcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2N1bWVudGF0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogZG9jdW1lbnRhdGlvbiwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLm9yZGVyKFwidmVyc2lvblwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcbiAgICAubGltaXQoMSlcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKCFkb2N1bWVudGF0aW9uKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkRvY3VtZW50YXRpb24gbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogZG9jdW1lbnRhdGlvbiBhcyBEb2N1bWVudGF0aW9uIH07XG59XG5cbi8qKlxuICogR2V0IGRvY3VtZW50YXRpb24gcGFnZXMgZm9yIGEgc3BlY2lmaWMgdmVyc2lvblxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jUGFnZXNGb3JWZXJzaW9uKFxuICByZXBvSWQ6IHN0cmluZyxcbiAgdmVyc2lvbjogbnVtYmVyLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jUGFnZVtdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIC8vIEdldCB0aGUgZG9jdW1lbnRhdGlvbiByZWNvcmQgZm9yIHRoaXMgdmVyc2lvblxuICBjb25zdCB7IGRhdGE6IGRvY3VtZW50YXRpb24sIGVycm9yOiBkb2NFcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJkb2N1bWVudGF0aW9uXCIpXG4gICAgLnNlbGVjdChcImlkXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLmVxKFwidmVyc2lvblwiLCB2ZXJzaW9uKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZG9jRXJyb3IgfHwgIWRvY3VtZW50YXRpb24pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRG9jdW1lbnRhdGlvbiB2ZXJzaW9uIG5vdCBmb3VuZFwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IHBhZ2VzLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJwYWdlc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiZG9jdW1lbnRhdGlvbl9pZFwiLCBkb2N1bWVudGF0aW9uLmlkKVxuICAgIC5vcmRlcihcIm9yZGVyX2luZGV4XCIsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKHBhZ2VzID8/IFtdKSBhcyBEb2NQYWdlW10gfTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ29udmVyc2F0aW9uIFNlcnZpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb252ZXJzYXRpb25zKFxuICByZXBvSWQ6IHN0cmluZyxcbiAgbGltaXQ6IG51bWJlciA9IDIwLFxuICB2ZXJzaW9uOiBudW1iZXIgfCBudWxsID0gbnVsbCxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbltdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGxldCBxdWVyeSA9IGNsaWVudFxuICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKTtcblxuICAvLyBGaWx0ZXIgYnkgdmVyc2lvbiBpZiBzcGVjaWZpZWRcbiAgaWYgKHZlcnNpb24gIT09IG51bGwgJiYgdmVyc2lvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcXVlcnkgPSBxdWVyeS5lcShcInJlcG9fdmVyc2lvblwiLCB2ZXJzaW9uKTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogY29udmVyc2F0aW9ucywgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5XG4gICAgLm9yZGVyKFwidXBkYXRlZF9hdFwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcbiAgICAubGltaXQobGltaXQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKGNvbnZlcnNhdGlvbnMgPz8gW10pIGFzIENvbnZlcnNhdGlvbltdIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb252ZXJzYXRpb25CeUlkKFxuICBjb252ZXJzYXRpb25JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29udmVyc2F0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogY29udmVyc2F0aW9uLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpZFwiLCBjb252ZXJzYXRpb25JZClcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFjb252ZXJzYXRpb24pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiQ29udmVyc2F0aW9uIG5vdCBmb3VuZFwiIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjb252ZXJzYXRpb24gYXMgQ29udmVyc2F0aW9uIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDb252ZXJzYXRpb24oXG4gIHJlcG9JZDogc3RyaW5nLFxuICB0aXRsZT86IHN0cmluZyxcbiAgdmVyc2lvbj86IG51bWJlciB8IG51bGwsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxDb252ZXJzYXRpb24+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBjb252ZXJzYXRpb24sIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAuaW5zZXJ0KHtcbiAgICAgIHJlcG9faWQ6IHJlcG9JZCxcbiAgICAgIHVzZXJfaWQ6IHVzZXIuaWQsXG4gICAgICB0aXRsZTogdGl0bGUgfHwgXCJOZXcgQ29udmVyc2F0aW9uXCIsXG4gICAgICByZXBvX3ZlcnNpb246IHZlcnNpb24gPz8gbnVsbCxcbiAgICB9KVxuICAgIC5zZWxlY3QoKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGNvbnZlcnNhdGlvbiBhcyBDb252ZXJzYXRpb24gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNvbnZlcnNhdGlvbihcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PHZvaWQ+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLmRlbGV0ZSgpXG4gICAgLmVxKFwiaWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVuZGVmaW5lZCB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVuYW1lQ29udmVyc2F0aW9uKFxuICBjb252ZXJzYXRpb25JZDogc3RyaW5nLFxuICBuZXdUaXRsZTogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29udmVyc2F0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogY29udmVyc2F0aW9uLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLnVwZGF0ZSh7IHRpdGxlOiBuZXdUaXRsZSB9KVxuICAgIC5lcShcImlkXCIsIGNvbnZlcnNhdGlvbklkKVxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlci5pZClcbiAgICAuc2VsZWN0KClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjb252ZXJzYXRpb24gYXMgQ29udmVyc2F0aW9uIH07XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1lc3NhZ2UgU2VydmljZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvbnZlcnNhdGlvbk1lc3NhZ2VzKFxuICBjb252ZXJzYXRpb25JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29udmVyc2F0aW9uTWVzc2FnZVtdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogbWVzc2FnZXMsIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcIm1lc3NhZ2VzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJjb252ZXJzYXRpb25faWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgLm9yZGVyKFwiY3JlYXRlZF9hdFwiLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChtZXNzYWdlcyA/PyBbXSkgYXMgQ29udmVyc2F0aW9uTWVzc2FnZVtdIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVNZXNzYWdlKFxuICBjb252ZXJzYXRpb25JZDogc3RyaW5nLFxuICByb2xlOiBcInVzZXJcIiB8IFwiYXNzaXN0YW50XCIsXG4gIGNvbnRlbnQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbk1lc3NhZ2U+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBtZXNzYWdlLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJtZXNzYWdlc1wiKVxuICAgIC5pbnNlcnQoe1xuICAgICAgY29udmVyc2F0aW9uX2lkOiBjb252ZXJzYXRpb25JZCxcbiAgICAgIHJvbGUsXG4gICAgICBjb250ZW50LFxuICAgIH0pXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSBjb252ZXJzYXRpb24ncyB1cGRhdGVkX2F0IHRpbWVzdGFtcFxuICBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAudXBkYXRlKHsgdXBkYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpIH0pXG4gICAgLmVxKFwiaWRcIiwgY29udmVyc2F0aW9uSWQpO1xuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IG1lc3NhZ2UgYXMgQ29udmVyc2F0aW9uTWVzc2FnZSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZUNvZGVTbmlwcGV0cyhcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbiAgbWVzc2FnZUlkOiBzdHJpbmcsXG4gIHNuaXBwZXRzOiBBcnJheTx7IGZpbGU6IHN0cmluZzsgY29kZTogc3RyaW5nIH0+LFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29kZVNuaXBwZXRbXT4+IHtcbiAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCBzbmlwcGV0c1RvSW5zZXJ0ID0gc25pcHBldHMubWFwKChzbmlwcGV0KSA9PiAoe1xuICAgIGNvbnZlcnNhdGlvbl9pZDogY29udmVyc2F0aW9uSWQsXG4gICAgbWVzc2FnZV9pZDogbWVzc2FnZUlkLFxuICAgIGZpbGVfcGF0aDogc25pcHBldC5maWxlLFxuICAgIGNvZGVfY29udGVudDogc25pcHBldC5jb2RlLFxuICAgIGxhbmd1YWdlOiBzbmlwcGV0LmZpbGUuc3BsaXQoXCIuXCIpLnBvcCgpIHx8IG51bGwsXG4gIH0pKTtcblxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKFwiY29kZV9zbmlwcGV0c1wiKVxuICAgIC5pbnNlcnQoc25pcHBldHNUb0luc2VydClcbiAgICAuc2VsZWN0KCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBkYXRhIGFzIENvZGVTbmlwcGV0W10gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvZGVTbmlwcGV0c0ZvckNvbnZlcnNhdGlvbihcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvZGVTbmlwcGV0W10+PiB7XG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbShcImNvZGVfc25pcHBldHNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImNvbnZlcnNhdGlvbl9pZFwiLCBjb252ZXJzYXRpb25JZClcbiAgICAub3JkZXIoXCJjcmVhdGVkX2F0XCIsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGRhdGEgYXMgQ29kZVNuaXBwZXRbXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ29kZVNuaXBwZXQoXG4gIHNuaXBwZXRJZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8bnVsbD4+IHtcbiAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKFwiY29kZV9zbmlwcGV0c1wiKVxuICAgIC5kZWxldGUoKVxuICAgIC5lcShcImlkXCIsIHNuaXBwZXRJZCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBudWxsIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbmRleFJlcG9zaXRvcnkoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8dm9pZD4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGluc3RhbGxhdGlvbiwgZXJyb3I6IGluc3RhbGxhdGlvbkVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImdpdGh1Yl9pbnN0YWxsYXRpb25zXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpbnN0YWxsZWRfYnlcIiwgdXNlci5pZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKCFpbnN0YWxsYXRpb24gfHwgaW5zdGFsbGF0aW9uRXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiR2l0aHViIEFwcCBJbnN0YWxsYXRpb24gbm90IGZvdW5kIVwiIH07XG4gIH1cblxuICAvL2ZldGNoIHJlcG9cblxuICBjb25zdCByZXBvUmVzdWx0ID0gYXdhaXQgZ2V0UmVwb1dpdGhTdGF0dXMocmVwb0lkKTtcblxuICBpZiAoIXJlcG9SZXN1bHQuc3VjY2Vzcykge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogcmVwb1Jlc3VsdC5lcnJvciB9O1xuICB9XG5cbiAgY29uc3QgcmVwb1VybCA9IHJlcG9SZXN1bHQuZGF0YS5yZXBvX3VybDtcbiAgY29uc3QgaW5zdGFsbGF0aW9uSWQgPSBpbnN0YWxsYXRpb24uaW5zdGFsbGF0aW9uX2lkO1xuXG4gIC8vIEdldCB0aGUgbGF0ZXN0IHZlcnNpb24gbnVtYmVyIGZvciB0aGlzIHJlcG9cbiAgY29uc3QgeyBkYXRhOiBsYXRlc3REb2MgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCJ2ZXJzaW9uXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLm9yZGVyKFwidmVyc2lvblwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcbiAgICAubGltaXQoMSlcbiAgICAuc2luZ2xlKCk7XG5cbiAgLy8gSW5jcmVtZW50IHZlcnNpb24gKHN0YXJ0IGF0IDEgaWYgbm8gcHJldmlvdXMgdmVyc2lvbnMpXG4gIGNvbnN0IG5leHRWZXJzaW9uID0gKGxhdGVzdERvYz8udmVyc2lvbiA/PyAwKSArIDE7XG5cbiAgLy9tYXJrIHRoZSByZXBvc2l0b3J5IGFzIGluZGV4aW5nIGluIHN1cGFiYXNlIGZpcnN0XG4gIGNvbnN0IHsgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgIC51cGRhdGUoeyBpbmRleF9zdGF0dXM6IFwiaW5kZXhpbmdcIiB9KVxuICAgIC5lcShcImlkXCIsIHJlcG9JZCk7XG5cbiAgaWYgKHVwZGF0ZUVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcih1cGRhdGVFcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiB1cGRhdGVFcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICAvLyBDYWxsIHRoZSBiYWNrZW5kIHRvIHN0YXJ0IGluZGV4aW5nIChmaXJlLWFuZC1mb3JnZXQpXG4gIC8vIERvbid0IGF3YWl0IG9yIHRocm93IGVycm9ycyBzaW5jZSB0aGlzIGlzIGEgbG9uZy1ydW5uaW5nIG9wZXJhdGlvblxuICBmZXRjaChgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vcmVwb3MvaW5kZXhgLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHJlcG9fdXJsOiByZXBvVXJsLFxuICAgICAgcmVwb19pZDogcmVwb0lkLFxuICAgICAgdXNlcl9pZDogdXNlci5pZCxcbiAgICAgIGluc3RhbGxhdGlvbl9pZDogaW5zdGFsbGF0aW9uSWQsXG4gICAgICBicmFuY2g6IFwibWFpblwiLFxuICAgICAgdmVyc2lvbjogbmV4dFZlcnNpb24sXG4gICAgfSksXG4gIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIC8vIExvZyB0aGUgZXJyb3IgYnV0IGRvbid0IGZhaWwgdGhlIHJlcXVlc3RcbiAgICBjb25zb2xlLmVycm9yKFwiSW5kZXhpbmcgcmVxdWVzdCBmYWlsZWQ6XCIsIGVycm9yKTtcbiAgICAvLyBUaGUgYmFja2VuZCBzaG91bGQgaGFuZGxlIHVwZGF0aW5nIHRoZSByZXBvIHN0YXR1cyBvbiBmYWlsdXJlXG4gIH0pO1xuXG4gIC8vIFJldHVybiBzdWNjZXNzIGltbWVkaWF0ZWx5IC0gdGhlIGluZGV4aW5nIHdpbGwgaGFwcGVuIGluIHRoZSBiYWNrZ3JvdW5kXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVuZGVmaW5lZCB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI4U0EreUJzQiJ9
}),
"[project]/src/lib/services/data:041091 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"401aaf8803662d813cec876ec90d3dbc7c01409ec9":"getRepoWithStatus"},"src/lib/services/repoService.ts",""] */ __turbopack_context__.s([
    "getRepoWithStatus",
    ()=>getRepoWithStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var getRepoWithStatus = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("401aaf8803662d813cec876ec90d3dbc7c01409ec9", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getRepoWithStatus"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcmVwb1NlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAL3V0aWxzL3N1cGFiYXNlL3NlcnZlclwiO1xuaW1wb3J0IHtcbiAgUmVwbyxcbiAgRG9jdW1lbnRhdGlvbixcbiAgRG9jUGFnZSxcbiAgQ29udmVyc2F0aW9uLFxuICBDb252ZXJzYXRpb25NZXNzYWdlLFxuICBDb2RlU25pcHBldCxcbn0gZnJvbSBcIkAvYXBwL3R5cGVzL3N1cGFiYXNlXCI7XG5pbXBvcnQgeyBBY3Rpb25SZXN1bHQgfSBmcm9tIFwiQC9hcHAvdHlwZXMvYWN0aW9uXCI7XG5pbXBvcnQge1xuICB2ZXJpZnlHaXRodWJSZXBvQWNjZXNzLFxuICB2ZXJpZnlHaXRMYWJSZXBvQWNjZXNzLFxufSBmcm9tIFwiLi9naXRQcm92aWRlclNlcnZpY2VcIjtcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHBhcnNlIEdpdEh1YiBVUkxzXG5mdW5jdGlvbiBwYXJzZUdpdEh1YlVybCh1cmw6IHN0cmluZyk6IHsgb3duZXI6IHN0cmluZzsgcmVwbzogc3RyaW5nIH0ge1xuICB0cnkge1xuICAgIC8vIEhhbmRsZSBtdWx0aXBsZSBmb3JtYXRzOlxuICAgIC8vIC0gaHR0cHM6Ly9naXRodWIuY29tL293bmVyL3JlcG9cbiAgICAvLyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9vd25lci9yZXBvLmdpdFxuICAgIC8vIC0gZ2l0QGdpdGh1Yi5jb206b3duZXIvcmVwby5naXRcblxuICAgIHVybCA9IHVybC50cmltKCkucmVwbGFjZSgvXFwuZ2l0JC8sIFwiXCIpO1xuXG4gICAgaWYgKHVybC5pbmNsdWRlcyhcImdpdGh1Yi5jb20vXCIpKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IHVybC5zcGxpdChcImdpdGh1Yi5jb20vXCIpWzFdLnNwbGl0KFwiL1wiKTtcbiAgICAgIHJldHVybiB7IG93bmVyOiBwYXJ0c1swXSwgcmVwbzogcGFydHNbMV0gfTtcbiAgICB9XG5cbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoXCJnaXRAZ2l0aHViLmNvbTpcIikpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gdXJsLnJlcGxhY2UoXCJnaXRAZ2l0aHViLmNvbTpcIiwgXCJcIikuc3BsaXQoXCIvXCIpO1xuICAgICAgcmV0dXJuIHsgb3duZXI6IHBhcnRzWzBdLCByZXBvOiBwYXJ0c1sxXSB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IG93bmVyOiBcIlwiLCByZXBvOiBcIlwiIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgb3duZXI6IFwiXCIsIHJlcG86IFwiXCIgfTtcbiAgfVxufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gcGFyc2UgR2l0TGFiIFVSTHNcbmZ1bmN0aW9uIHBhcnNlR2l0TGFiVXJsKHVybDogc3RyaW5nKTogeyBvd25lcjogc3RyaW5nOyByZXBvOiBzdHJpbmcgfSB7XG4gIHRyeSB7XG4gICAgLy8gSGFuZGxlIG11bHRpcGxlIGZvcm1hdHM6XG4gICAgLy8gLSBodHRwczovL2dpdGxhYi5jb20vb3duZXIvcmVwb1xuICAgIC8vIC0gaHR0cHM6Ly9naXRsYWIuY29tL293bmVyL3N1Ymdyb3VwL3JlcG9cbiAgICAvLyAtIGh0dHBzOi8vZ2l0bGFiLmNvbS9vd25lci9yZXBvLmdpdFxuICAgIC8vIC0gZ2l0QGdpdGxhYi5jb206b3duZXIvcmVwby5naXRcbiAgICAvLyAtIFNlbGYtaG9zdGVkOiBodHRwczovL2dpdGxhYi5leGFtcGxlLmNvbS9vd25lci9yZXBvXG5cbiAgICB1cmwgPSB1cmwudHJpbSgpLnJlcGxhY2UoL1xcLmdpdCQvLCBcIlwiKTtcblxuICAgIC8vIEhhbmRsZSBIVFRQUyBVUkxzIChnaXRsYWIuY29tIG9yIHNlbGYtaG9zdGVkKVxuICAgIGlmICh1cmwuaW5jbHVkZXMoXCJnaXRsYWIuY29tL1wiKSB8fCAvZ2l0bGFiXFwuW14vXStcXC8vLnRlc3QodXJsKSkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgcGF0aCBhZnRlciB0aGUgZG9tYWluXG4gICAgICBjb25zdCBtYXRjaCA9IHVybC5tYXRjaCgvZ2l0bGFiW14vXSpcXC8oLispLyk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgY29uc3QgcGF0aFBhcnRzID0gbWF0Y2hbMV0uc3BsaXQoXCIvXCIpO1xuICAgICAgICAvLyBHaXRMYWIgc3VwcG9ydHMgbmVzdGVkIGdyb3Vwcywgc28gd2UgbmVlZCB0byBoYW5kbGU6XG4gICAgICAgIC8vIC0gb3duZXIvcmVwbyAoMiBwYXJ0cylcbiAgICAgICAgLy8gLSBvd25lci9zdWJncm91cC9yZXBvICgzKyBwYXJ0cylcbiAgICAgICAgaWYgKHBhdGhQYXJ0cy5sZW5ndGggPj0gMikge1xuICAgICAgICAgIC8vIFRha2UgZXZlcnl0aGluZyBleGNlcHQgdGhlIGxhc3QgcGFydCBhcyBvd25lci9ncm91cFxuICAgICAgICAgIGNvbnN0IHJlcG8gPSBwYXRoUGFydHNbcGF0aFBhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IG93bmVyID0gcGF0aFBhcnRzLnNsaWNlKDAsIC0xKS5qb2luKFwiL1wiKTtcbiAgICAgICAgICByZXR1cm4geyBvd25lciwgcmVwbyB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIFNTSCBVUkxzXG4gICAgaWYgKHVybC5zdGFydHNXaXRoKFwiZ2l0QGdpdGxhYi5jb206XCIpIHx8IC9naXRAZ2l0bGFiXFwuW146XSs6Ly50ZXN0KHVybCkpIHtcbiAgICAgIGNvbnN0IG1hdGNoID0gdXJsLm1hdGNoKC9naXRAZ2l0bGFiW146XSo6KC4rKS8pO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGNvbnN0IHBhdGhQYXJ0cyA9IG1hdGNoWzFdLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgaWYgKHBhdGhQYXJ0cy5sZW5ndGggPj0gMikge1xuICAgICAgICAgIGNvbnN0IHJlcG8gPSBwYXRoUGFydHNbcGF0aFBhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IG93bmVyID0gcGF0aFBhcnRzLnNsaWNlKDAsIC0xKS5qb2luKFwiL1wiKTtcbiAgICAgICAgICByZXR1cm4geyBvd25lciwgcmVwbyB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgb3duZXI6IFwiXCIsIHJlcG86IFwiXCIgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBvd25lcjogXCJcIiwgcmVwbzogXCJcIiB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXBvc0J5T3JnYW5pemF0aW9uSWQoXG4gIG9yZ2FuaXphdGlvbklkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHVzZXIgPSBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJvcmdhbml6YXRpb25faWRcIiwgb3JnYW5pemF0aW9uSWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKGRhdGEgPz8gW10pIGFzIFJlcG9bXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUmVwb1ZpYUdpdGh1YihcbiAgZm9ybURhdGE6IEZvcm1EYXRhLFxuICBvcmdJZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8UmVwbyB8IHVuZGVmaW5lZD4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IHByb3ZpZGVyID0gZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IHVybCA9IGZvcm1EYXRhLmdldChcImdpdGh1Yi11cmxcIikgYXMgc3RyaW5nO1xuXG4gIGlmICghbmFtZSkge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJOYW1lIGlzIHJlcXVpcmVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGluc3RhbGxhdGlvbiB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJnaXRodWJfaW5zdGFsbGF0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiaW5zdGFsbGVkX2J5XCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghaW5zdGFsbGF0aW9uKSB7XG4gICAgLy8gTm8gR2l0SHViIEFwcCBpbnN0YWxsYXRpb24gLSBwcm9tcHQgdXNlciB0byBpbnN0YWxsXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiSW5zdGFsbGF0aW9uIE5lZWRlZFwiLFxuICAgIH07XG4gIH1cblxuICAvL3BhcnNlIHVybCBmb3Igb3duZXIgYW5kIHJlcG9cbiAgY29uc3QgeyBvd25lciwgcmVwbzogcmVwb05hbWUgfSA9IHBhcnNlR2l0SHViVXJsKHVybCk7XG5cbiAgY29uc3QgaGFzQWNjZXNzID0gYXdhaXQgdmVyaWZ5R2l0aHViUmVwb0FjY2VzcyhcbiAgICBpbnN0YWxsYXRpb24uaWQsXG4gICAgb3duZXIsXG4gICAgcmVwb05hbWUsXG4gICk7XG5cbiAgaWYgKCFoYXNBY2Nlc3MpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBlcnJvcjogXCJBY2Nlc3MgRGVuaWVkXCIsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3I6IHJlcG9FcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAuaW5zZXJ0KHtcbiAgICAgIG5hbWUsXG4gICAgICBwcm92aWRlcixcbiAgICAgIHJlcG9fdXJsOiB1cmwsXG4gICAgICBvcmdhbml6YXRpb25faWQ6IG9yZ0lkLFxuICAgICAgaW5kZXhlZF9ieTogdXNlci5pZCxcbiAgICAgIGluZGV4X3N0YXR1czogXCJub3QgaW5kZXhlZFwiLFxuICAgIH0pXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChyZXBvRXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHJlcG9FcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXBvIGFzIFJlcG8gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVJlcG9WaWFHaXRsYWIoXG4gIGZvcm1EYXRhOiBGb3JtRGF0YSxcbiAgb3JnSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFJlcG8gfCB1bmRlZmluZWQ+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICBjb25zdCBwcm92aWRlciA9IGZvcm1EYXRhLmdldChcInR5cGVcIikgYXMgc3RyaW5nO1xuICBjb25zdCB1cmwgPSBmb3JtRGF0YS5nZXQoXCJnaXRsYWItdXJsXCIpIGFzIHN0cmluZztcblxuICAvLyBWYWxpZGF0ZSBpbnB1dHNcbiAgaWYgKCFuYW1lIHx8IG5hbWUudHJpbSgpID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlJlcG9zaXRvcnkgbmFtZSBpcyByZXF1aXJlZFwiIH07XG4gIH1cblxuICBpZiAoIXVybCB8fCB1cmwudHJpbSgpID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkdpdExhYiBVUkwgaXMgcmVxdWlyZWRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBpbnN0YWxsYXRpb24gfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZ2l0bGFiX2luc3RhbGxhdGlvbnNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImluc3RhbGxlZF9ieVwiLCB1c2VyLmlkKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoIWluc3RhbGxhdGlvbikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJJbnN0YWxsYXRpb24gTmVlZGVkXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgb3duZXIsIHJlcG86IHJlcG9OYW1lIH0gPSBwYXJzZUdpdExhYlVybCh1cmwpO1xuXG4gIC8vdmVyaWZ5IGFjY2Vzc1xuICBjb25zdCBoYXNBY2Nlc3MgPSBhd2FpdCB2ZXJpZnlHaXRMYWJSZXBvQWNjZXNzKFxuICAgIGluc3RhbGxhdGlvbi5hY2Nlc3NfdG9rZW4sXG4gICAgb3duZXIsXG4gICAgcmVwb05hbWUsXG4gICk7XG5cbiAgaWYgKCFoYXNBY2Nlc3MpIHtcbiAgICBpZiAoaW5zdGFsbGF0aW9uLmFjY2Vzc190b2tlbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIGVycm9yOiBcIkFjY2VzcyByZXF1aXJlZCFcIixcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiQWNjZXNzIGRlbmllZCFcIixcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvcjogcmVwb0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgIC5pbnNlcnQoe1xuICAgICAgbmFtZSxcbiAgICAgIHByb3ZpZGVyLFxuICAgICAgcmVwb191cmw6IHVybCxcbiAgICAgIG9yZ2FuaXphdGlvbl9pZDogb3JnSWQsXG4gICAgICBpbmRleGVkX2J5OiB1c2VyLmlkLFxuICAgICAgaW5kZXhfc3RhdHVzOiBcIm5vdCBpbmRleGVkXCIsXG4gICAgfSlcbiAgICAuc2VsZWN0KClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKHJlcG9FcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogcmVwb0Vycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlcG8gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVJlcG9WaWFMb2NhbEZpbGUoXG4gIGZvcm1EYXRhOiBGb3JtRGF0YSxcbiAgb3JnSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFJlcG8+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KFwiZmlsZVwiKSBhcyBGaWxlO1xuXG4gIC8vIFZhbGlkYXRlIGlucHV0c1xuICBpZiAoIW5hbWUgfHwgbmFtZS50cmltKCkgPT09IFwiXCIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUmVwb3NpdG9yeSBuYW1lIGlzIHJlcXVpcmVkXCIgfTtcbiAgfVxuXG4gIGlmICghZmlsZSkge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGaWxlIGlzIHJlcXVpcmVkXCIgfTtcbiAgfVxuXG4gIC8vIFZhbGlkYXRlIGZpbGUgdHlwZVxuICBpZiAoIWZpbGUubmFtZS5lbmRzV2l0aChcIi56aXBcIikpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiT25seSAuemlwIGZpbGVzIGFyZSBhbGxvd2VkXCIgfTtcbiAgfVxuXG4gIC8vIFZhbGlkYXRlIGZpbGUgc2l6ZSAobWF4IDEwME1CKVxuICBjb25zdCBtYXhTaXplID0gMTAwICogMTAyNCAqIDEwMjQ7IC8vIDEwME1CIGluIGJ5dGVzXG4gIGlmIChmaWxlLnNpemUgPiBtYXhTaXplKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiRmlsZSBzaXplIGV4Y2VlZHMgMTAwTUIgbGltaXRcIixcbiAgICB9O1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBHZW5lcmF0ZSBhIHVuaXF1ZSBmaWxlIG5hbWUgdG8gcHJldmVudCBjb2xsaXNpb25zXG4gICAgY29uc3QgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBzYW5pdGl6ZWROYW1lID0gbmFtZS50cmltKCkucmVwbGFjZSgvW15hLXowLTktX10vZ2ksIFwiX1wiKTtcbiAgICBjb25zdCBmaWxlTmFtZSA9IGAke3Nhbml0aXplZE5hbWV9XyR7dGltZXN0YW1wfV8ke2ZpbGUubmFtZX1gO1xuICAgIGNvbnN0IGZpbGVQYXRoID0gYCR7b3JnSWR9LyR7ZmlsZU5hbWV9YDtcblxuICAgIC8vIFVwbG9hZCBmaWxlIHRvIFN1cGFiYXNlIFN0b3JhZ2VcbiAgICBjb25zdCB7IGVycm9yOiB1cGxvYWRFcnJvciB9ID0gYXdhaXQgY2xpZW50LnN0b3JhZ2VcbiAgICAgIC5mcm9tKFwibG9jYWxfcmVwb3NcIilcbiAgICAgIC51cGxvYWQoZmlsZVBhdGgsIGZpbGUsIHtcbiAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vemlwXCIsXG4gICAgICAgIHVwc2VydDogZmFsc2UsXG4gICAgICB9KTtcblxuICAgIGlmICh1cGxvYWRFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIlVwbG9hZCBlcnJvcjpcIiwgdXBsb2FkRXJyb3IpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIGVycm9yOiBgRmlsZSB1cGxvYWQgZmFpbGVkOiAke3VwbG9hZEVycm9yLm1lc3NhZ2V9YCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gR2V0IHRoZSBwdWJsaWMgVVJMIGZvciB0aGUgdXBsb2FkZWQgZmlsZVxuICAgIGNvbnN0IHsgZGF0YTogdXJsRGF0YSB9ID0gY2xpZW50LnN0b3JhZ2VcbiAgICAgIC5mcm9tKFwibG9jYWxfcmVwb3NcIilcbiAgICAgIC5nZXRQdWJsaWNVcmwoZmlsZVBhdGgpO1xuXG4gICAgLy8gQ3JlYXRlIHJlcG9zaXRvcnkgcmVjb3JkIGluIGRhdGFiYXNlXG4gICAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvcjogcmVwb0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgICAuaW5zZXJ0KHtcbiAgICAgICAgbmFtZTogbmFtZS50cmltKCksXG4gICAgICAgIHByb3ZpZGVyOiBcImxvY2FsXCIsXG4gICAgICAgIHJlcG9fdXJsOiBudWxsLFxuICAgICAgICBvYmplY3RfdXJsOiB1cmxEYXRhLnB1YmxpY1VybCxcbiAgICAgICAgb3JnYW5pemF0aW9uX2lkOiBvcmdJZCxcbiAgICAgICAgaW5kZXhlZF9ieTogdXNlci5pZCxcbiAgICAgICAgaW5kZXhfc3RhdHVzOiBcIm5vdCBpbmRleGVkXCIsXG4gICAgICB9KVxuICAgICAgLnNlbGVjdCgpXG4gICAgICAuc2luZ2xlKCk7XG5cbiAgICBpZiAocmVwb0Vycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiUmVwb3NpdG9yeSBjcmVhdGlvbiBlcnJvcjpcIiwgcmVwb0Vycm9yKTtcbiAgICAgIC8vIEF0dGVtcHQgdG8gY2xlYW4gdXAgdXBsb2FkZWQgZmlsZVxuICAgICAgYXdhaXQgY2xpZW50LnN0b3JhZ2UuZnJvbShcImxvY2FsX3JlcG9zXCIpLnJlbW92ZShbZmlsZVBhdGhdKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogYFJlcG9zaXRvcnkgY3JlYXRpb24gZmFpbGVkOiAke3JlcG9FcnJvci5tZXNzYWdlfWAsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlcG8gYXMgUmVwbyB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJVbmV4cGVjdGVkIGVycm9yOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6XG4gICAgICAgIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkXCIsXG4gICAgfTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSZXBvc2l0b3J5IE1hbmFnZW1lbnQgU2VydmljZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlcG9XaXRoU3RhdHVzKFxuICByZXBvSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFJlcG8+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImlkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICBpZiAoIXJlcG8pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUmVwb3NpdG9yeSBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVwbyBhcyBSZXBvIH07XG59XG5cbnR5cGUgVXBkYXRlRGF0YSA9IHtcbiAgbmFtZT86IHN0cmluZztcbiAgcmVwb191cmw/OiBzdHJpbmc7XG4gIG9iamVjdF91cmw/OiBzdHJpbmc7XG4gIGluZGV4X3N0YXR1cz86IHN0cmluZztcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVSZXBvU2V0dGluZ3MoXG4gIHJlcG9JZDogc3RyaW5nLFxuICBzZXR0aW5nczogeyBuYW1lPzogc3RyaW5nOyByZXBvX3VybD86IHN0cmluZzsgZmlsZT86IEZpbGUgfSxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFJlcG8+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gR2V0IHRoZSBjdXJyZW50IHJlcG8gdG8gY2hlY2sgaXRzIHByb3ZpZGVyIHR5cGVcbiAgY29uc3QgeyBkYXRhOiBjdXJyZW50UmVwbyB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImlkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKCFjdXJyZW50UmVwbykge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJSZXBvc2l0b3J5IG5vdCBmb3VuZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgdXBkYXRlRGF0YTogVXBkYXRlRGF0YSA9IHt9O1xuXG4gIC8vIEhhbmRsZSBuYW1lIHVwZGF0ZVxuICBpZiAoc2V0dGluZ3MubmFtZSkge1xuICAgIHVwZGF0ZURhdGEubmFtZSA9IHNldHRpbmdzLm5hbWU7XG4gIH1cblxuICAvLyBIYW5kbGUgR2l0SHViIFVSTCB1cGRhdGVcbiAgaWYgKHNldHRpbmdzLnJlcG9fdXJsICYmIGN1cnJlbnRSZXBvLnByb3ZpZGVyID09PSBcImdpdGh1YlwiKSB7XG4gICAgY29uc3QgeyBvd25lciwgcmVwbyB9ID0gcGFyc2VHaXRIdWJVcmwoc2V0dGluZ3MucmVwb191cmwpO1xuXG4gICAgaWYgKCFvd25lciB8fCAhcmVwbykge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkludmFsaWQgR2l0SHViIFVSTCBmb3JtYXQhXCIgfTtcbiAgICB9XG5cbiAgICAvLyBWZXJpZnkgYWNjZXNzIHRvIHRoZSBuZXcgcmVwb1xuICAgIGNvbnN0IHsgZGF0YTogaW5zdGFsbGF0aW9uIH0gPSBhd2FpdCBjbGllbnRcbiAgICAgIC5mcm9tKFwiZ2l0aHViX2luc3RhbGxhdGlvbnNcIilcbiAgICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgICAuZXEoXCJpbnN0YWxsZWRfYnlcIiwgdXNlci5pZClcbiAgICAgIC5zaW5nbGUoKTtcblxuICAgIGlmICghaW5zdGFsbGF0aW9uKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiR2l0SHViIEFwcCBub3QgaW5zdGFsbGVkIVwiIH07XG4gICAgfVxuXG4gICAgY29uc3QgaGFzQWNjZXNzID0gYXdhaXQgdmVyaWZ5R2l0aHViUmVwb0FjY2VzcyhcbiAgICAgIGluc3RhbGxhdGlvbi5pbnN0YWxsYXRpb25faWQudG9TdHJpbmcoKSxcbiAgICAgIG93bmVyLFxuICAgICAgcmVwbyxcbiAgICApO1xuXG4gICAgaWYgKCFoYXNBY2Nlc3MpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjpcbiAgICAgICAgICBcIkNhbm5vdCBhY2Nlc3MgdGhpcyByZXBvc2l0b3J5LiBNYWtlIHN1cmUgdGhlIEdpdEh1YiBBcHAgaXMgaW5zdGFsbGVkIGZvciB0aGlzIHJlcG9zaXRvcnkuXCIsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHVwZGF0ZURhdGEucmVwb191cmwgPSBzZXR0aW5ncy5yZXBvX3VybDtcbiAgICB1cGRhdGVEYXRhLmluZGV4X3N0YXR1cyA9IFwibm90IGluZGV4ZWRcIjsgLy8gVHJpZ2dlciByZS1pbmRleGluZ1xuICB9XG5cbiAgLy8gSGFuZGxlIGxvY2FsIGZpbGUgdXBsb2FkXG4gIGlmIChzZXR0aW5ncy5maWxlICYmIGN1cnJlbnRSZXBvLnByb3ZpZGVyID09PSBcImxvY2FsXCIpIHtcbiAgICBjb25zdCBmaWxlID0gc2V0dGluZ3MuZmlsZTtcbiAgICBjb25zdCBmaWxlRXh0ID0gZmlsZS5uYW1lLnNwbGl0KFwiLlwiKS5wb3AoKTtcblxuICAgIGlmIChmaWxlRXh0ICE9PSBcInppcFwiKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiT25seSAuemlwIGZpbGVzIGFyZSBhbGxvd2VkIVwiIH07XG4gICAgfVxuXG4gICAgLy8gVXBsb2FkIHRvIFN1cGFiYXNlIFN0b3JhZ2VcbiAgICBjb25zdCBmaWxlTmFtZSA9IGAke3JlcG9JZH0tJHtEYXRlLm5vdygpfS56aXBgO1xuICAgIGNvbnN0IHsgZGF0YTogdXBsb2FkRGF0YSwgZXJyb3I6IHVwbG9hZEVycm9yIH0gPSBhd2FpdCBjbGllbnQuc3RvcmFnZVxuICAgICAgLmZyb20oXCJsb2NhbF9yZXBvc1wiKVxuICAgICAgLnVwbG9hZChmaWxlTmFtZSwgZmlsZSk7XG5cbiAgICBpZiAodXBsb2FkRXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IodXBsb2FkRXJyb3IpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkZhaWxlZCB0byB1cGxvYWQgZmlsZSFcIiB9O1xuICAgIH1cblxuICAgIC8vIEdldCBwdWJsaWMgVVJMXG4gICAgY29uc3QgeyBkYXRhOiB1cmxEYXRhIH0gPSBjbGllbnQuc3RvcmFnZVxuICAgICAgLmZyb20oXCJsb2NhbF9yZXBvc1wiKVxuICAgICAgLmdldFB1YmxpY1VybChmaWxlTmFtZSk7XG5cbiAgICB1cGRhdGVEYXRhLm9iamVjdF91cmwgPSB1cmxEYXRhLnB1YmxpY1VybDtcbiAgICB1cGRhdGVEYXRhLmluZGV4X3N0YXR1cyA9IFwicGVuZGluZ1wiOyAvLyBUcmlnZ2VyIHJlLWluZGV4aW5nXG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIHJlcG9zaXRvcnlcbiAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAudXBkYXRlKHVwZGF0ZURhdGEpXG4gICAgLmVxKFwiaWRcIiwgcmVwb0lkKVxuICAgIC5zZWxlY3QoKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlcG8gYXMgUmVwbyB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUmVwbyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDx7IG9yZ2FuaXphdGlvbklkOiBzdHJpbmcgfT4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICAvLyBGZXRjaCB0aGUgb3JnYW5pemF0aW9uX2lkIGJlZm9yZSBkZWxldGluZ1xuICBjb25zdCB7IGRhdGE6IHJlcG8sIGVycm9yOiByZXBvRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIm9yZ2FuaXphdGlvbl9pZFwiKVxuICAgIC5lcShcImlkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKHJlcG9FcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IocmVwb0Vycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHJlcG9FcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICBpZiAoIXJlcG8pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUmVwb3NpdG9yeSBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgY2xpZW50LmZyb20oXCJyZXBvc2l0b3JpZXNcIikuZGVsZXRlKCkuZXEoXCJpZFwiLCByZXBvSWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogeyBvcmdhbml6YXRpb25JZDogcmVwby5vcmdhbml6YXRpb25faWQgfSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJpZ2dlclJlaW5kZXgoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8dm9pZD4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIGluZGV4X3N0YXR1cyB0byAncGVuZGluZycgdG8gdHJpZ2dlciByZWluZGV4aW5nXG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnVwZGF0ZSh7IGluZGV4X3N0YXR1czogXCJwZW5kaW5nXCIgfSlcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgLy8gVE9ETzogVHJpZ2dlciBhY3R1YWwgaW5kZXhpbmcgam9iL3dlYmhvb2svcXVldWUgaGVyZVxuICAvLyBUaGlzIGNvdWxkIGJlIGFuIEFQSSBjYWxsIHRvIHlvdXIgaW5kZXhpbmcgc2VydmljZVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVuZGVmaW5lZCB9O1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEb2N1bWVudGF0aW9uIFNlcnZpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2N1bWVudGF0aW9uKFxuICByZXBvSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PERvY3VtZW50YXRpb24+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBkb2N1bWVudGF0aW9uLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJkb2N1bWVudGF0aW9uXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJyZXBvX2lkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICBpZiAoIWRvY3VtZW50YXRpb24pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRG9jdW1lbnRhdGlvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogZG9jdW1lbnRhdGlvbiBhcyBEb2N1bWVudGF0aW9uIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2NQYWdlcyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2NQYWdlW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gR2V0IHRoZSBsYXRlc3QgZG9jdW1lbnRhdGlvbiB2ZXJzaW9uIGZvciB0aGlzIHJlcG9cbiAgY29uc3QgeyBkYXRhOiBkb2N1bWVudGF0aW9uLCBlcnJvcjogZG9jRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCJpZFwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5vcmRlcihcInZlcnNpb25cIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXG4gICAgLmxpbWl0KDEpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChkb2NFcnJvciB8fCAhZG9jdW1lbnRhdGlvbikge1xuICAgIGNvbnNvbGUuZXJyb3IoZG9jRXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJEb2N1bWVudGF0aW9uIG5vdCBmb3VuZFwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IHBhZ2VzLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJwYWdlc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiZG9jdW1lbnRhdGlvbl9pZFwiLCBkb2N1bWVudGF0aW9uLmlkKVxuICAgIC5vcmRlcihcIm9yZGVyX2luZGV4XCIsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKHBhZ2VzID8/IFtdKSBhcyBEb2NQYWdlW10gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERvY1BhZ2VCeUlkKFxuICBwYWdlSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PERvY1BhZ2U+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdlLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJkb2NfcGFnZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImlkXCIsIHBhZ2VJZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICBpZiAoIXBhZ2UpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUGFnZSBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcGFnZSBhcyBEb2NQYWdlIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2NQYWdlc0hpZXJhcmNoaWNhbChcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2NQYWdlW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gRmlyc3QgZ2V0IHRoZSBkb2N1bWVudGF0aW9uIElEIGZvciB0aGlzIHJlcG9cbiAgY29uc3QgeyBkYXRhOiBkb2N1bWVudGF0aW9uLCBlcnJvcjogZG9jRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCJpZFwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZG9jRXJyb3IgfHwgIWRvY3VtZW50YXRpb24pIHtcbiAgICBjb25zb2xlLmVycm9yKGRvY0Vycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRG9jdW1lbnRhdGlvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdlcywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jX3BhZ2VzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJkb2N1bWVudGF0aW9uX2lkXCIsIGRvY3VtZW50YXRpb24uaWQpXG4gICAgLm9yZGVyKFwib3JkZXJfaW5kZXhcIiwgeyBhc2NlbmRpbmc6IHRydWUgfSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICAvLyBQYWdlcyBhcmUgYWxyZWFkeSBzb3J0ZWQgYnkgb3JkZXJfaW5kZXhcbiAgLy8gVGhlIHBhcmVudF9wYWdlX2lkIGZpZWxkIG1haW50YWlucyB0aGUgaGllcmFyY2h5XG4gIC8vIEZyb250ZW5kIGNhbiB1c2UgdGhpcyB0byByZW5kZXIgdGhlIHRyZWUgc3RydWN0dXJlXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChwYWdlcyA/PyBbXSkgYXMgRG9jUGFnZVtdIH07XG59XG5cbi8qKlxuICogR2V0IGFsbCBkb2N1bWVudGF0aW9uIHZlcnNpb25zIGZvciBhIHJlcG9zaXRvcnlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERvY3VtZW50YXRpb25WZXJzaW9ucyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2N1bWVudGF0aW9uW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiB2ZXJzaW9ucywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLm9yZGVyKFwidmVyc2lvblwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiAodmVyc2lvbnMgPz8gW10pIGFzIERvY3VtZW50YXRpb25bXSB9O1xufVxuXG4vKipcbiAqIEdldCB0aGUgbGF0ZXN0IGNvbXBsZXRlZCBkb2N1bWVudGF0aW9uIHZlcnNpb24gZm9yIGEgcmVwb3NpdG9yeVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGF0ZXN0RG9jdW1lbnRhdGlvbihcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2N1bWVudGF0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogZG9jdW1lbnRhdGlvbiwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLm9yZGVyKFwidmVyc2lvblwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcbiAgICAubGltaXQoMSlcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKCFkb2N1bWVudGF0aW9uKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkRvY3VtZW50YXRpb24gbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogZG9jdW1lbnRhdGlvbiBhcyBEb2N1bWVudGF0aW9uIH07XG59XG5cbi8qKlxuICogR2V0IGRvY3VtZW50YXRpb24gcGFnZXMgZm9yIGEgc3BlY2lmaWMgdmVyc2lvblxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jUGFnZXNGb3JWZXJzaW9uKFxuICByZXBvSWQ6IHN0cmluZyxcbiAgdmVyc2lvbjogbnVtYmVyLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jUGFnZVtdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIC8vIEdldCB0aGUgZG9jdW1lbnRhdGlvbiByZWNvcmQgZm9yIHRoaXMgdmVyc2lvblxuICBjb25zdCB7IGRhdGE6IGRvY3VtZW50YXRpb24sIGVycm9yOiBkb2NFcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJkb2N1bWVudGF0aW9uXCIpXG4gICAgLnNlbGVjdChcImlkXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLmVxKFwidmVyc2lvblwiLCB2ZXJzaW9uKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZG9jRXJyb3IgfHwgIWRvY3VtZW50YXRpb24pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRG9jdW1lbnRhdGlvbiB2ZXJzaW9uIG5vdCBmb3VuZFwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IHBhZ2VzLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJwYWdlc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiZG9jdW1lbnRhdGlvbl9pZFwiLCBkb2N1bWVudGF0aW9uLmlkKVxuICAgIC5vcmRlcihcIm9yZGVyX2luZGV4XCIsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKHBhZ2VzID8/IFtdKSBhcyBEb2NQYWdlW10gfTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ29udmVyc2F0aW9uIFNlcnZpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb252ZXJzYXRpb25zKFxuICByZXBvSWQ6IHN0cmluZyxcbiAgbGltaXQ6IG51bWJlciA9IDIwLFxuICB2ZXJzaW9uOiBudW1iZXIgfCBudWxsID0gbnVsbCxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbltdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGxldCBxdWVyeSA9IGNsaWVudFxuICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKTtcblxuICAvLyBGaWx0ZXIgYnkgdmVyc2lvbiBpZiBzcGVjaWZpZWRcbiAgaWYgKHZlcnNpb24gIT09IG51bGwgJiYgdmVyc2lvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcXVlcnkgPSBxdWVyeS5lcShcInJlcG9fdmVyc2lvblwiLCB2ZXJzaW9uKTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogY29udmVyc2F0aW9ucywgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5XG4gICAgLm9yZGVyKFwidXBkYXRlZF9hdFwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcbiAgICAubGltaXQobGltaXQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKGNvbnZlcnNhdGlvbnMgPz8gW10pIGFzIENvbnZlcnNhdGlvbltdIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb252ZXJzYXRpb25CeUlkKFxuICBjb252ZXJzYXRpb25JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29udmVyc2F0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogY29udmVyc2F0aW9uLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpZFwiLCBjb252ZXJzYXRpb25JZClcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFjb252ZXJzYXRpb24pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiQ29udmVyc2F0aW9uIG5vdCBmb3VuZFwiIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjb252ZXJzYXRpb24gYXMgQ29udmVyc2F0aW9uIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDb252ZXJzYXRpb24oXG4gIHJlcG9JZDogc3RyaW5nLFxuICB0aXRsZT86IHN0cmluZyxcbiAgdmVyc2lvbj86IG51bWJlciB8IG51bGwsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxDb252ZXJzYXRpb24+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBjb252ZXJzYXRpb24sIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAuaW5zZXJ0KHtcbiAgICAgIHJlcG9faWQ6IHJlcG9JZCxcbiAgICAgIHVzZXJfaWQ6IHVzZXIuaWQsXG4gICAgICB0aXRsZTogdGl0bGUgfHwgXCJOZXcgQ29udmVyc2F0aW9uXCIsXG4gICAgICByZXBvX3ZlcnNpb246IHZlcnNpb24gPz8gbnVsbCxcbiAgICB9KVxuICAgIC5zZWxlY3QoKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGNvbnZlcnNhdGlvbiBhcyBDb252ZXJzYXRpb24gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNvbnZlcnNhdGlvbihcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PHZvaWQ+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLmRlbGV0ZSgpXG4gICAgLmVxKFwiaWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVuZGVmaW5lZCB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVuYW1lQ29udmVyc2F0aW9uKFxuICBjb252ZXJzYXRpb25JZDogc3RyaW5nLFxuICBuZXdUaXRsZTogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29udmVyc2F0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogY29udmVyc2F0aW9uLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLnVwZGF0ZSh7IHRpdGxlOiBuZXdUaXRsZSB9KVxuICAgIC5lcShcImlkXCIsIGNvbnZlcnNhdGlvbklkKVxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlci5pZClcbiAgICAuc2VsZWN0KClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjb252ZXJzYXRpb24gYXMgQ29udmVyc2F0aW9uIH07XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1lc3NhZ2UgU2VydmljZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvbnZlcnNhdGlvbk1lc3NhZ2VzKFxuICBjb252ZXJzYXRpb25JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29udmVyc2F0aW9uTWVzc2FnZVtdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogbWVzc2FnZXMsIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcIm1lc3NhZ2VzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJjb252ZXJzYXRpb25faWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgLm9yZGVyKFwiY3JlYXRlZF9hdFwiLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChtZXNzYWdlcyA/PyBbXSkgYXMgQ29udmVyc2F0aW9uTWVzc2FnZVtdIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVNZXNzYWdlKFxuICBjb252ZXJzYXRpb25JZDogc3RyaW5nLFxuICByb2xlOiBcInVzZXJcIiB8IFwiYXNzaXN0YW50XCIsXG4gIGNvbnRlbnQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbk1lc3NhZ2U+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBtZXNzYWdlLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJtZXNzYWdlc1wiKVxuICAgIC5pbnNlcnQoe1xuICAgICAgY29udmVyc2F0aW9uX2lkOiBjb252ZXJzYXRpb25JZCxcbiAgICAgIHJvbGUsXG4gICAgICBjb250ZW50LFxuICAgIH0pXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSBjb252ZXJzYXRpb24ncyB1cGRhdGVkX2F0IHRpbWVzdGFtcFxuICBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAudXBkYXRlKHsgdXBkYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpIH0pXG4gICAgLmVxKFwiaWRcIiwgY29udmVyc2F0aW9uSWQpO1xuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IG1lc3NhZ2UgYXMgQ29udmVyc2F0aW9uTWVzc2FnZSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZUNvZGVTbmlwcGV0cyhcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbiAgbWVzc2FnZUlkOiBzdHJpbmcsXG4gIHNuaXBwZXRzOiBBcnJheTx7IGZpbGU6IHN0cmluZzsgY29kZTogc3RyaW5nIH0+LFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29kZVNuaXBwZXRbXT4+IHtcbiAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCBzbmlwcGV0c1RvSW5zZXJ0ID0gc25pcHBldHMubWFwKChzbmlwcGV0KSA9PiAoe1xuICAgIGNvbnZlcnNhdGlvbl9pZDogY29udmVyc2F0aW9uSWQsXG4gICAgbWVzc2FnZV9pZDogbWVzc2FnZUlkLFxuICAgIGZpbGVfcGF0aDogc25pcHBldC5maWxlLFxuICAgIGNvZGVfY29udGVudDogc25pcHBldC5jb2RlLFxuICAgIGxhbmd1YWdlOiBzbmlwcGV0LmZpbGUuc3BsaXQoXCIuXCIpLnBvcCgpIHx8IG51bGwsXG4gIH0pKTtcblxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKFwiY29kZV9zbmlwcGV0c1wiKVxuICAgIC5pbnNlcnQoc25pcHBldHNUb0luc2VydClcbiAgICAuc2VsZWN0KCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBkYXRhIGFzIENvZGVTbmlwcGV0W10gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvZGVTbmlwcGV0c0ZvckNvbnZlcnNhdGlvbihcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvZGVTbmlwcGV0W10+PiB7XG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbShcImNvZGVfc25pcHBldHNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImNvbnZlcnNhdGlvbl9pZFwiLCBjb252ZXJzYXRpb25JZClcbiAgICAub3JkZXIoXCJjcmVhdGVkX2F0XCIsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGRhdGEgYXMgQ29kZVNuaXBwZXRbXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ29kZVNuaXBwZXQoXG4gIHNuaXBwZXRJZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8bnVsbD4+IHtcbiAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKFwiY29kZV9zbmlwcGV0c1wiKVxuICAgIC5kZWxldGUoKVxuICAgIC5lcShcImlkXCIsIHNuaXBwZXRJZCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBudWxsIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbmRleFJlcG9zaXRvcnkoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8dm9pZD4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGluc3RhbGxhdGlvbiwgZXJyb3I6IGluc3RhbGxhdGlvbkVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImdpdGh1Yl9pbnN0YWxsYXRpb25zXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpbnN0YWxsZWRfYnlcIiwgdXNlci5pZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKCFpbnN0YWxsYXRpb24gfHwgaW5zdGFsbGF0aW9uRXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiR2l0aHViIEFwcCBJbnN0YWxsYXRpb24gbm90IGZvdW5kIVwiIH07XG4gIH1cblxuICAvL2ZldGNoIHJlcG9cblxuICBjb25zdCByZXBvUmVzdWx0ID0gYXdhaXQgZ2V0UmVwb1dpdGhTdGF0dXMocmVwb0lkKTtcblxuICBpZiAoIXJlcG9SZXN1bHQuc3VjY2Vzcykge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogcmVwb1Jlc3VsdC5lcnJvciB9O1xuICB9XG5cbiAgY29uc3QgcmVwb1VybCA9IHJlcG9SZXN1bHQuZGF0YS5yZXBvX3VybDtcbiAgY29uc3QgaW5zdGFsbGF0aW9uSWQgPSBpbnN0YWxsYXRpb24uaW5zdGFsbGF0aW9uX2lkO1xuXG4gIC8vIEdldCB0aGUgbGF0ZXN0IHZlcnNpb24gbnVtYmVyIGZvciB0aGlzIHJlcG9cbiAgY29uc3QgeyBkYXRhOiBsYXRlc3REb2MgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCJ2ZXJzaW9uXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLm9yZGVyKFwidmVyc2lvblwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcbiAgICAubGltaXQoMSlcbiAgICAuc2luZ2xlKCk7XG5cbiAgLy8gSW5jcmVtZW50IHZlcnNpb24gKHN0YXJ0IGF0IDEgaWYgbm8gcHJldmlvdXMgdmVyc2lvbnMpXG4gIGNvbnN0IG5leHRWZXJzaW9uID0gKGxhdGVzdERvYz8udmVyc2lvbiA/PyAwKSArIDE7XG5cbiAgLy9tYXJrIHRoZSByZXBvc2l0b3J5IGFzIGluZGV4aW5nIGluIHN1cGFiYXNlIGZpcnN0XG4gIGNvbnN0IHsgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgIC51cGRhdGUoeyBpbmRleF9zdGF0dXM6IFwiaW5kZXhpbmdcIiB9KVxuICAgIC5lcShcImlkXCIsIHJlcG9JZCk7XG5cbiAgaWYgKHVwZGF0ZUVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcih1cGRhdGVFcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiB1cGRhdGVFcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICAvLyBDYWxsIHRoZSBiYWNrZW5kIHRvIHN0YXJ0IGluZGV4aW5nIChmaXJlLWFuZC1mb3JnZXQpXG4gIC8vIERvbid0IGF3YWl0IG9yIHRocm93IGVycm9ycyBzaW5jZSB0aGlzIGlzIGEgbG9uZy1ydW5uaW5nIG9wZXJhdGlvblxuICBmZXRjaChgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vcmVwb3MvaW5kZXhgLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHJlcG9fdXJsOiByZXBvVXJsLFxuICAgICAgcmVwb19pZDogcmVwb0lkLFxuICAgICAgdXNlcl9pZDogdXNlci5pZCxcbiAgICAgIGluc3RhbGxhdGlvbl9pZDogaW5zdGFsbGF0aW9uSWQsXG4gICAgICBicmFuY2g6IFwibWFpblwiLFxuICAgICAgdmVyc2lvbjogbmV4dFZlcnNpb24sXG4gICAgfSksXG4gIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIC8vIExvZyB0aGUgZXJyb3IgYnV0IGRvbid0IGZhaWwgdGhlIHJlcXVlc3RcbiAgICBjb25zb2xlLmVycm9yKFwiSW5kZXhpbmcgcmVxdWVzdCBmYWlsZWQ6XCIsIGVycm9yKTtcbiAgICAvLyBUaGUgYmFja2VuZCBzaG91bGQgaGFuZGxlIHVwZGF0aW5nIHRoZSByZXBvIHN0YXR1cyBvbiBmYWlsdXJlXG4gIH0pO1xuXG4gIC8vIFJldHVybiBzdWNjZXNzIGltbWVkaWF0ZWx5IC0gdGhlIGluZGV4aW5nIHdpbGwgaGFwcGVuIGluIHRoZSBiYWNrZ3JvdW5kXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVuZGVmaW5lZCB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIwU0F3WHNCIn0=
}),
"[project]/src/components/dashboard/documentation/documentation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DocumentationViewer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list.js [app-ssr] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$documentation$2f$file$2d$tree$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/documentation/file-tree.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$documentation$2f$main$2d$content$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/documentation/main-content.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$documentation$2f$table$2d$of$2d$contents$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/documentation/table-of-contents.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$documentation$2f$file$2d$tree$2d$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/documentation/file-tree-skeleton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$documentation$2f$main$2d$content$2d$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/documentation/main-content-skeleton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$documentation$2f$table$2d$of$2d$contents$2d$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/documentation/table-of-contents-skeleton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$documentation$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/documentation/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/empty.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useChatUIStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/useChatUIStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useDocumentationStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/useDocumentationStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$e26083__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/services/data:e26083 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$12ce93__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/services/data:12ce93 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$aa912e__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/services/data:aa912e [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$041091__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/services/data:041091 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function DocumentationViewer({ repoId }) {
    const [fileTree, setFileTree] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedFile, setSelectedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [expandedNodes, setExpandedNodes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [headings, setHeadings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showRefreshModal, setShowRefreshModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showGenerateModal, setShowGenerateModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFileTreeOpen, setIsFileTreeOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isTocOpen, setIsTocOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const mainContentScrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const setHasDocumentation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useChatUIStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatUIStore"])((state)=>state.setHasDocumentation);
    const selectedVersion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useDocumentationStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDocumentationStore"])((state)=>state.selectedVersion);
    const setAvailableVersions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useDocumentationStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDocumentationStore"])((state)=>state.setAvailableVersions);
    const selectVersion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useDocumentationStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDocumentationStore"])((state)=>state.selectVersion);
    const isIndexing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useDocumentationStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDocumentationStore"])((state)=>state.isIndexing);
    const setIsIndexing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useDocumentationStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDocumentationStore"])((state)=>state.setIsIndexing);
    const availableVersions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useDocumentationStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDocumentationStore"])((state)=>state.availableVersions);
    const setSelectedVersionInChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useChatUIStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatUIStore"])((state)=>state.setSelectedVersion);
    /*This is a React anti-pattern. Replace with tanstack query later*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchVersions();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (selectedVersion !== null) {
            // Sync the selected version to the chat store
            setSelectedVersionInChat(selectedVersion);
            fetchDocumentation();
        }
    }, [
        selectedVersion,
        setSelectedVersionInChat
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (selectedFile) {
            const extractedHeadings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$documentation$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractHeadings"])(selectedFile.content);
            setHeadings(extractedHeadings);
        }
    }, [
        selectedFile
    ]);
    const fetchVersions = async ()=>{
        try {
            // Check if repository is still indexing
            const repoResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$041091__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getRepoWithStatus"])(repoId);
            if (!repoResult.success) {
                console.error("Error fetching repo status:", repoResult.error);
                return;
            }
            // Don't fetch documentation if still indexing
            if (repoResult.data.index_status === "indexing") {
                console.log("Repository is still indexing, skipping version fetch");
                setIsIndexing(true);
                setIsLoading(false);
                return;
            }
            // If we get here, indexing is complete
            setIsIndexing(false);
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$12ce93__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getDocumentationVersions"])(repoId);
            if (!result.success) {
                console.error("Error fetching versions:", result.error);
                return;
            }
            // If no documentation versions exist, the repo has never been indexed
            if (result.data.length === 0) {
                console.log("No documentation versions found");
                setIsIndexing(false);
                setIsLoading(false);
                return;
            }
            const versions = result.data.map((doc)=>({
                    version: doc.version ?? 0,
                    createdAt: doc.created_at,
                    updatedAt: doc.updated_at
                }));
            setAvailableVersions(versions);
            // Auto-select the latest version
            if (versions.length > 0) {
                selectVersion(versions[0].version);
            }
        } catch (error) {
            console.error("Error fetching versions:", error);
        }
    };
    const fetchDocumentation = async ()=>{
        try {
            setIsLoading(true);
            if (selectedVersion === null) {
                setIsLoading(false);
                return;
            }
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$aa912e__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getDocPagesForVersion"])(repoId, selectedVersion);
            if (!result.success) {
                console.error("Error fetching documentation:", result.error);
                setFileTree([]);
                setHasDocumentation(false);
                setIsLoading(false);
                return;
            }
            // Map DocPage[] to Page[]
            const pages = result.data.map((docPage)=>{
                // Helper function to parse JSON fields to string arrays
                const parseToStringArray = (field)=>{
                    if (!field) return null;
                    if (Array.isArray(field)) return field;
                    if (typeof field === "string") {
                        try {
                            const parsed = JSON.parse(field);
                            return Array.isArray(parsed) ? parsed : null;
                        } catch  {
                            return null;
                        }
                    }
                    return null;
                };
                return {
                    id: docPage.id,
                    documentation_id: docPage.documentation_id,
                    title: docPage.title ?? "Untitled",
                    slug: docPage.slug ?? "",
                    content: docPage.content ?? "",
                    order_index: docPage.order_index ?? 0,
                    parent_page_id: docPage.parent_page_id,
                    referenced_files: parseToStringArray(docPage.referenced_files),
                    referenced_symbols: parseToStringArray(docPage.referenced_symbols),
                    metadata: docPage.metadata,
                    created_at: docPage.created_at,
                    updated_at: docPage.updated_at ?? docPage.created_at,
                    version: 1
                };
            });
            const tree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$documentation$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildFileTree"])(pages);
            setFileTree(tree);
            // Set the first page as selected if available
            if (pages.length > 0) {
                setSelectedFile(pages[0]);
            }
            // Update chat UI store with documentation availability
            setHasDocumentation(pages.length > 0);
        } catch (error) {
            setHasDocumentation(false);
        } finally{
            setIsLoading(false);
        }
    };
    const toggleExpanded = (nodeId)=>{
        setExpandedNodes((prev)=>{
            const next = new Set(prev);
            if (next.has(nodeId)) {
                next.delete(nodeId);
            } else {
                next.add(nodeId);
            }
            return next;
        });
    };
    const handleRefresh = async ()=>{
        try {
            setError("");
            setIsIndexing(true);
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$e26083__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["indexRepository"])(repoId);
            if (!result.success) {
                setError(result.error);
                setIsIndexing(false);
                return;
            }
            // Clear client-side documentation state
            setFileTree([]);
            setSelectedFile(null);
            setExpandedNodes(new Set());
            setHeadings([]);
            setHasDocumentation(false);
            setShowRefreshModal(false);
            // Keep isIndexing true - it will be cleared when fetchVersions detects completion
            // Refetch versions to include the new one
            await fetchVersions();
        } catch (e) {
            setError("Could not refresh: " + e);
            setIsIndexing(false);
        }
    };
    const handleGenerate = async ()=>{
        try {
            setError("");
            setIsIndexing(true);
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$e26083__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["indexRepository"])(repoId);
            if (!result.success) {
                setError(result.error);
                setIsIndexing(false);
                return;
            }
            setShowGenerateModal(false);
            // Keep isIndexing true - it will be cleared when fetchVersions detects completion
            // Refetch versions to include the new one
            await fetchVersions();
        } catch (e) {
            setError("Could not generate documentation: " + e);
            setIsIndexing(false);
        }
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex bg-background h-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$documentation$2f$file$2d$tree$2d$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FileTreeSkeleton"], {}, void 0, false, {
                    fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                    lineNumber: 279,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$documentation$2f$main$2d$content$2d$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MainContentSkeleton"], {}, void 0, false, {
                    fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                    lineNumber: 280,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$documentation$2f$table$2d$of$2d$contents$2d$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableOfContentsSkeleton"], {}, void 0, false, {
                    fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                    lineNumber: 281,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
            lineNumber: 278,
            columnNumber: 7
        }, this);
    }
    if (isIndexing) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full items-center justify-center bg-background",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: {
                            rotate: 360
                        },
                        transition: {
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            className: "h-12 w-12 text-primary"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                            lineNumber: 298,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                        lineNumber: 290,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold mb-2",
                                children: "Indexing Repository"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                                lineNumber: 301,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground max-w-md",
                                children: "Your codebase is being indexed. This may take a while depending on the size of your repository. You can safely navigate away from this page."
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                                lineNumber: 302,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                        lineNumber: 300,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                lineNumber: 289,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
            lineNumber: 288,
            columnNumber: 7
        }, this);
    }
    if (fileTree.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-full items-center justify-center bg-background",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Empty"], {
                        title: "No documentation available",
                        description: "Index your codebase to generate documentation and enable AI insights.",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                            className: "h-8 w-8"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                            lineNumber: 320,
                            columnNumber: 19
                        }, void 0),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: ()=>setShowGenerateModal(true),
                            children: "Index Codebase"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                            lineNumber: 322,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                        lineNumber: 317,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                    lineNumber: 316,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                    open: showGenerateModal,
                    onOpenChange: setShowGenerateModal,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                        children: "Index Codebase"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                                        lineNumber: 331,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                        children: "This will index your codebase. This process may take a while depending on the size of your repository."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                                        lineNumber: 332,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                                lineNumber: 330,
                                columnNumber: 13
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full p-3 bg-destructive/10 text-destructive text-sm rounded-md text-center",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                                lineNumber: 338,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogFooter"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        onClick: ()=>setShowGenerateModal(false),
                                        className: "w-full sm:w-auto",
                                        disabled: isIndexing,
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                                        lineNumber: 343,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        className: "w-full sm:w-auto",
                                        onClick: handleGenerate,
                                        disabled: isIndexing,
                                        children: isIndexing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    animate: {
                                                        rotate: 360
                                                    },
                                                    transition: {
                                                        duration: 1,
                                                        repeat: Infinity,
                                                        ease: "linear"
                                                    },
                                                    className: "mr-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                                                        lineNumber: 367,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                                                    lineNumber: 358,
                                                    columnNumber: 21
                                                }, this),
                                                "Indexing..."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                                            lineNumber: 357,
                                            columnNumber: 19
                                        }, this) : "Index"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                                        lineNumber: 351,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                                lineNumber: 342,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                        lineNumber: 329,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                    lineNumber: 328,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex bg-background h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-20 left-4 z-30 flex flex-col gap-2 lg:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    size: "icon",
                    variant: "default",
                    onClick: ()=>setIsFileTreeOpen(true),
                    className: "shadow-lg",
                    "aria-label": "Open file tree",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                        className: "h-5 w-5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                        lineNumber: 393,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                    lineNumber: 386,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                lineNumber: 385,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-20 right-4 z-30 flex flex-col gap-2 xl:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    size: "icon",
                    variant: "default",
                    onClick: ()=>setIsTocOpen(true),
                    className: "shadow-lg",
                    "aria-label": "Open table of contents",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                        className: "h-5 w-5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                        lineNumber: 405,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                    lineNumber: 398,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                lineNumber: 397,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$documentation$2f$file$2d$tree$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FileTreeSidebar"], {
                fileTree: fileTree,
                selectedFile: selectedFile,
                expandedNodes: expandedNodes,
                searchQuery: searchQuery,
                lastIndexed: availableVersions.find((version)=>version.version === selectedVersion)?.updatedAt ?? "",
                onSelectFile: setSelectedFile,
                onToggleExpanded: toggleExpanded,
                onSearchChange: setSearchQuery,
                isOpen: isFileTreeOpen,
                onClose: ()=>setIsFileTreeOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                lineNumber: 409,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$documentation$2f$main$2d$content$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MainContent"], {
                selectedFile: selectedFile,
                scrollContainerRef: mainContentScrollRef
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                lineNumber: 426,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$documentation$2f$table$2d$of$2d$contents$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableOfContentsSidebar"], {
                selectedFile: selectedFile,
                headings: headings,
                onRefreshClick: ()=>setShowRefreshModal(true),
                isOpen: isTocOpen,
                onClose: ()=>setIsTocOpen(false),
                scrollContainerRef: mainContentScrollRef
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                lineNumber: 431,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                open: showRefreshModal,
                onOpenChange: setShowRefreshModal,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    children: "Refresh this wiki"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                                    lineNumber: 443,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: "This action will reindex your codebase and create a new version. The process may take a while depending on the size of your repository."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                                    lineNumber: 444,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                            lineNumber: 442,
                            columnNumber: 11
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full p-3 bg-destructive/10 text-destructive text-sm rounded-md text-center",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                            lineNumber: 451,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: ()=>setShowRefreshModal(false),
                                    className: "w-full sm:w-auto",
                                    disabled: isIndexing,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                                    lineNumber: 456,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    className: "w-full sm:w-auto",
                                    onClick: handleRefresh,
                                    disabled: isIndexing,
                                    children: isIndexing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                animate: {
                                                    rotate: 360
                                                },
                                                transition: {
                                                    duration: 1,
                                                    repeat: Infinity,
                                                    ease: "linear"
                                                },
                                                className: "mr-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                                                    lineNumber: 480,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                                                lineNumber: 471,
                                                columnNumber: 19
                                            }, this),
                                            "Reindexing..."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                                        lineNumber: 470,
                                        columnNumber: 17
                                    }, this) : "Refresh"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                                    lineNumber: 464,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                            lineNumber: 455,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                    lineNumber: 441,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
                lineNumber: 440,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/documentation/documentation.tsx",
        lineNumber: 383,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/dashboard/chat/chat-bubble.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatBubble
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useChatUIStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/useChatUIStore.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function ChatBubble() {
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const expand = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useChatUIStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatUIStore"])((state)=>state.expand);
    const isExpanded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useChatUIStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatUIStore"])((state)=>state.isExpanded);
    const hasDocumentation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useChatUIStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatUIStore"])((state)=>state.hasDocumentation);
    const handleSend = ()=>{
        if (inputValue.trim()) {
            // Expand to full chat and pass the message
            expand(inputValue);
            setInputValue("");
        }
    };
    const handleKeyDown = (e)=>{
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };
    // Hide chat bubble if documentation doesn't exist or chat is expanded
    if (isExpanded || !hasDocumentation) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            layoutId: "chat-container",
            className: "w-full mx-auto",
            style: {
                borderRadius: 8
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        placeholder: "Ask about this codebase",
                        value: inputValue,
                        onChange: (e)=>setInputValue(e.target.value),
                        onKeyDown: handleKeyDown,
                        rows: 2,
                        className: "w-full bg-white dark:bg-background backdrop-blur-md text-gray-900 dark:text-gray-100 px-4 py-3 pr-12 rounded-lg border border-gray-300 dark:border-border focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 focus:shadow-[0_0_15px_rgba(20,184,166,0.3)] placeholder-gray-400 dark:placeholder-gray-500 resize-none disabled:cursor-not-allowed transition-shadow duration-200 opacity-90"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/chat/chat-bubble.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSend,
                        disabled: !inputValue.trim(),
                        className: "absolute bottom-3 right-3 p-2 text-teal-500 hover:text-teal-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/chat/chat-bubble.tsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/chat/chat-bubble.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/chat/chat-bubble.tsx",
                lineNumber: 41,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/chat/chat-bubble.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/chat/chat-bubble.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/dashboard/chat/animated-skeleton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimatedSkeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const skeletonLines = [
    "100%",
    "90%",
    "95%",
    "70%",
    "80%",
    "92%",
    "100%",
    "90%",
    "95%",
    "70%",
    "80%",
    "92%"
];
function AnimatedSkeleton() {
    const skeletonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (skeletonRef.current) {
            skeletonRef.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });
        }
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: skeletonRef,
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        transition: {
            duration: 0.3
        },
        className: "mt-5 bg-elevated rounded-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3 p-4",
            children: skeletonLines.map((width, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        width: 0
                    },
                    animate: {
                        width
                    },
                    transition: {
                        duration: 0.6,
                        ease: "easeOut",
                        delay: index * 0.05
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: `h-4 w-[${width}] dark:bg-accent `
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/chat/animated-skeleton.tsx",
                        lineNumber: 54,
                        columnNumber: 13
                    }, this)
                }, index, false, {
                    fileName: "[project]/src/components/dashboard/chat/animated-skeleton.tsx",
                    lineNumber: 44,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/chat/animated-skeleton.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/chat/animated-skeleton.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/dashboard/chat/message-bubble.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MessageBubble
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-ssr] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useChatUIStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/useChatUIStore.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function MessageBubble({ text, sender }) {
    const { minimize } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useChatUIStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatUIStore"])();
    if (sender === "user") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8 flex flex-row gap-6 px-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-gray-700 dark:text-gray-300 tracking-wide text-2xl leading-relaxed",
                    children: text
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/chat/message-bubble.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "ghost",
                    onClick: minimize,
                    "aria-label": "Close chat",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/chat/message-bubble.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        "Back to documentation"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/chat/message-bubble.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/chat/message-bubble.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-elevated rounded-lg border border-gray-800 p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "prose prose-invert max-w-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-700 dark:text-gray-300 leading-relaxed",
                            children: text
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/chat/message-bubble.tsx",
                            lineNumber: 38,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/chat/message-bubble.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 mt-4 pt-4 border-t border-gray-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "p-2 hover:bg-gray-800 rounded-md transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                    size: 16,
                                    className: "text-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/chat/message-bubble.tsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/chat/message-bubble.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "p-2 hover:bg-gray-800 rounded-md transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                    size: 16,
                                    className: "text-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/chat/message-bubble.tsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/chat/message-bubble.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/chat/message-bubble.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/chat/message-bubble.tsx",
                lineNumber: 36,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/chat/message-bubble.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/chat/message-bubble.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/dashboard/chat/message-list.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MessageList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$chat$2f$animated$2d$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/chat/animated-skeleton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$chat$2f$message$2d$bubble$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/chat/message-bubble.tsx [app-ssr] (ecmascript)");
;
;
;
function MessageList({ messages, loading }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 overflow-y-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-3xl mx-auto px-4 py-4",
            children: [
                messages.map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$chat$2f$message$2d$bubble$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        id: message.id,
                        text: message.text,
                        sender: message.sender,
                        timestamp: message.timestamp
                    }, message.id, false, {
                        fileName: "[project]/src/components/dashboard/chat/message-list.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this)),
                loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$chat$2f$animated$2d$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/components/dashboard/chat/message-list.tsx",
                    lineNumber: 29,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/chat/message-list.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/chat/message-list.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/dashboard/chat/chat-input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useChatUIStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/useChatUIStore.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function ChatInput({ value, onChange, onSend, disabled }) {
    const { initialMessage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useChatUIStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatUIStore"])();
    const handleKeyPress = (e)=>{
        if (e.key === "Enter" && !e.shiftKey && !disabled) {
            e.preventDefault();
            onSend();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-t dark:border-gray-800 bg-background",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto px-4 py-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: value,
                        onChange: (e)=>onChange(e.target.value),
                        onKeyPress: handleKeyPress,
                        placeholder: initialMessage ? "Ask a follow-up question" : "Ask CodeCompass",
                        rows: 2,
                        disabled: disabled,
                        className: "w-full bg-background text-gray-100 px-4 py-3 pr-12 rounded-lg border dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 focus:shadow-[0_0_15px_rgba(20,184,166,0.3)] placeholder-gray-500 resize-none disabled:opacity-50 disabled:cursor-not-allowed transition-shadow duration-200"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/chat/chat-input.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onSend,
                        className: "absolute bottom-3 right-3 p-2 text-teal-500 hover:text-teal-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                        disabled: !value.trim() || disabled,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/chat/chat-input.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/chat/chat-input.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/chat/chat-input.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/chat/chat-input.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/chat/chat-input.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/dashboard/chat/code-snippet.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CodeSnippet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$prism$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Prism$3e$__ = __turbopack_context__.i("[project]/node_modules/react-syntax-highlighter/dist/esm/prism.js [app-ssr] (ecmascript) <export default as Prism>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$styles$2f$prism$2f$vsc$2d$dark$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__vscDarkPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus.js [app-ssr] (ecmascript) <export default as vscDarkPlus>");
"use client";
;
;
;
;
;
;
;
function CodeSnippet({ file, code }) {
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleCopy = async ()=>{
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(()=>setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-elevated rounded-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-row",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                        asChild: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "font-sans text-xs pl-2 pt-1 hover:text-primary transition-colors cursor-pointer",
                            children: file
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/chat/code-snippet.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/chat/code-snippet.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/chat/code-snippet.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$prism$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Prism$3e$__["Prism"], {
                    language: "javascript",
                    style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$styles$2f$prism$2f$vsc$2d$dark$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__vscDarkPlus$3e$__["vscDarkPlus"],
                    showLineNumbers: true,
                    customStyle: {
                        background: "#1e1e1e",
                        padding: "1rem",
                        fontSize: "11px"
                    },
                    children: code
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/chat/code-snippet.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "max-w-[90vw] max-h-[90vh] overflow-hidden flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                                children: file
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/chat/code-snippet.tsx",
                                                lineNumber: 65,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                                children: "Full file content"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/chat/code-snippet.tsx",
                                                lineNumber: 66,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/chat/code-snippet.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        size: "sm",
                                        onClick: handleCopy,
                                        className: "gap-2",
                                        children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/chat/code-snippet.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 21
                                                }, this),
                                                "Copied"
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/chat/code-snippet.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 21
                                                }, this),
                                                "Copy"
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/chat/code-snippet.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/chat/code-snippet.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/chat/code-snippet.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$prism$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Prism$3e$__["Prism"], {
                                language: "javascript",
                                style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$styles$2f$prism$2f$vsc$2d$dark$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__vscDarkPlus$3e$__["vscDarkPlus"],
                                showLineNumbers: true,
                                customStyle: {
                                    background: "#1e1e1e",
                                    padding: "1rem",
                                    fontSize: "12px",
                                    margin: 0
                                },
                                children: code
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/chat/code-snippet.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/chat/code-snippet.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/chat/code-snippet.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/chat/code-snippet.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/chat/code-snippet.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/dashboard/chat/answer-panel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnswerPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$chat$2f$animated$2d$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/chat/animated-skeleton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$chat$2f$code$2d$snippet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/chat/code-snippet.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function AnswerPanel({ conversationTurns }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 border-l border-gray-200 dark:border-gray-800 bg-white dark:bg-background overflow-y-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-6 py-4",
            children: conversationTurns.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center text-gray-500 mt-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm mt-2",
                    children: "Relevant code snippets will appear here, grouped by your questions"
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/chat/answer-panel.tsx",
                    lineNumber: 29,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/chat/answer-panel.tsx",
                lineNumber: 28,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-8",
                children: conversationTurns.map((turn)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sticky top-0 bg-white dark:bg-background py-2 border-b border-gray-200 dark:border-gray-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-700 dark:text-gray-400 font-medium",
                                        children: turn.userQuestion
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/chat/answer-panel.tsx",
                                        lineNumber: 39,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 dark:text-gray-600 mt-1",
                                        children: turn.timestamp
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/chat/answer-panel.tsx",
                                        lineNumber: 42,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/chat/answer-panel.tsx",
                                lineNumber: 38,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: turn.loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$chat$2f$animated$2d$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/chat/answer-panel.tsx",
                                    lineNumber: 50,
                                    columnNumber: 21
                                }, this) : turn.codeSnippets.length > 0 ? turn.codeSnippets.map((snippet, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$chat$2f$code$2d$snippet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        file: snippet.file,
                                        code: snippet.code
                                    }, `${turn.id}-${index}`, false, {
                                        fileName: "[project]/src/components/dashboard/chat/answer-panel.tsx",
                                        lineNumber: 53,
                                        columnNumber: 23
                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-500 dark:text-gray-600 italic",
                                    children: "No code snippets for this question"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/chat/answer-panel.tsx",
                                    lineNumber: 60,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/chat/answer-panel.tsx",
                                lineNumber: 48,
                                columnNumber: 17
                            }, this)
                        ]
                    }, turn.id, true, {
                        fileName: "[project]/src/components/dashboard/chat/answer-panel.tsx",
                        lineNumber: 36,
                        columnNumber: 15
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/chat/answer-panel.tsx",
                lineNumber: 34,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/chat/answer-panel.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/chat/answer-panel.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/dashboard/chat/chat-empty-state.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatEmptyState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
"use client";
;
;
function ChatEmptyState({ onSendMessage }) {
    const time = new Date().getHours();
    const suggestions = [
        "Explain this codebase structure",
        "How does authentication work?"
    ];
    const handleSuggestionClick = (suggestion)=>{
        onSendMessage(suggestion);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 flex flex-col items-center justify-center px-8 pb-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-normal dark:text-gray-100 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                className: "inline-block h-8 w-8 mr-2 text-teal-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/chat/chat-empty-state.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            time < 12 ? "Good Morning" : time < 17 ? "Good Afternoon" : "Good Evening"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/chat/chat-empty-state.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "dark:text-gray-400",
                        children: "Ask me anything about this codebase"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/chat/chat-empty-state.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/chat/chat-empty-state.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-400 mb-3",
                        children: "Suggested prompts:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/chat/chat-empty-state.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                        children: suggestions.map((suggestion, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleSuggestionClick(suggestion),
                                className: "px-4 py-3 bg-background border dark:border-gray-700 rounded-lg text-left text-sm dark:text-gray-200 hover:bg-gray-750 hover:border-teal-500/50 transition-all duration-200 hover:shadow-[0_0_10px_rgba(20,184,166,0.2)]",
                                children: suggestion
                            }, index, false, {
                                fileName: "[project]/src/components/dashboard/chat/chat-empty-state.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/chat/chat-empty-state.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/chat/chat-empty-state.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/chat/chat-empty-state.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/dashboard/chat/model-selector.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AVAILABLE_MODELS",
    ()=>AVAILABLE_MODELS,
    "default",
    ()=>ModelSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const AVAILABLE_MODELS = [
    {
        id: "gpt-4",
        name: "GPT-4",
        provider: "OpenAI"
    },
    {
        id: "claude-4.5-sonnet",
        name: "Claude 4.5 Sonnet",
        provider: "Anthropic"
    },
    {
        id: "llama-4",
        name: "Llama 4",
        provider: "Meta"
    },
    {
        id: "deepseek-v3",
        name: "DeepSeek V3",
        provider: "DeepSeek"
    },
    {
        id: "grok-4",
        name: "Grok",
        provider: "xAI"
    }
];
function ModelSelector({ selectedModel, onSelectModel }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenu"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "flex items-center gap-2 px-3 py-1.5 bg-card hover:bg-accent/10 border border-border rounded-lg transition-colors text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-muted-foreground text-xs",
                                    children: selectedModel.provider
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/chat/model-selector.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-foreground font-medium text-xs",
                                    children: selectedModel.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/chat/model-selector.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/chat/model-selector.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                            className: "w-3 h-3 text-muted-foreground"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/chat/model-selector.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/chat/model-selector.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/chat/model-selector.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                className: "bg-card border-border",
                align: "start",
                sideOffset: 8,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuLabel"], {
                        className: "text-xs font-semibold text-muted-foreground",
                        children: "SELECT MODEL"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/chat/model-selector.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuGroup"], {
                        children: AVAILABLE_MODELS.map((model)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                onClick: ()=>onSelectModel(model),
                                className: `cursor-pointer ${selectedModel.id === model.id ? "text-foreground focus:text-foreground" : "text-muted-foreground"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between gap-2 w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium truncate",
                                                        children: model.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/chat/model-selector.tsx",
                                                        lineNumber: 96,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-xs px-1.5 py-0.5 rounded ${selectedModel.id === model.id ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"}`,
                                                        children: model.provider
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/chat/model-selector.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/chat/model-selector.tsx",
                                                lineNumber: 95,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/chat/model-selector.tsx",
                                            lineNumber: 94,
                                            columnNumber: 17
                                        }, this),
                                        selectedModel.id === model.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "w-4 h-4 shrink-0 text-accent"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/chat/model-selector.tsx",
                                            lineNumber: 112,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/chat/model-selector.tsx",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, this)
                            }, model.id, false, {
                                fileName: "[project]/src/components/dashboard/chat/model-selector.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/chat/model-selector.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/chat/model-selector.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/chat/model-selector.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/services/data:5c01a6 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40352f531d61849c10df43580aa6262b1af019a742":"getConversationMessages"},"src/lib/services/repoService.ts",""] */ __turbopack_context__.s([
    "getConversationMessages",
    ()=>getConversationMessages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var getConversationMessages = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40352f531d61849c10df43580aa6262b1af019a742", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getConversationMessages"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcmVwb1NlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAL3V0aWxzL3N1cGFiYXNlL3NlcnZlclwiO1xuaW1wb3J0IHtcbiAgUmVwbyxcbiAgRG9jdW1lbnRhdGlvbixcbiAgRG9jUGFnZSxcbiAgQ29udmVyc2F0aW9uLFxuICBDb252ZXJzYXRpb25NZXNzYWdlLFxuICBDb2RlU25pcHBldCxcbn0gZnJvbSBcIkAvYXBwL3R5cGVzL3N1cGFiYXNlXCI7XG5pbXBvcnQgeyBBY3Rpb25SZXN1bHQgfSBmcm9tIFwiQC9hcHAvdHlwZXMvYWN0aW9uXCI7XG5pbXBvcnQge1xuICB2ZXJpZnlHaXRodWJSZXBvQWNjZXNzLFxuICB2ZXJpZnlHaXRMYWJSZXBvQWNjZXNzLFxufSBmcm9tIFwiLi9naXRQcm92aWRlclNlcnZpY2VcIjtcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHBhcnNlIEdpdEh1YiBVUkxzXG5mdW5jdGlvbiBwYXJzZUdpdEh1YlVybCh1cmw6IHN0cmluZyk6IHsgb3duZXI6IHN0cmluZzsgcmVwbzogc3RyaW5nIH0ge1xuICB0cnkge1xuICAgIC8vIEhhbmRsZSBtdWx0aXBsZSBmb3JtYXRzOlxuICAgIC8vIC0gaHR0cHM6Ly9naXRodWIuY29tL293bmVyL3JlcG9cbiAgICAvLyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9vd25lci9yZXBvLmdpdFxuICAgIC8vIC0gZ2l0QGdpdGh1Yi5jb206b3duZXIvcmVwby5naXRcblxuICAgIHVybCA9IHVybC50cmltKCkucmVwbGFjZSgvXFwuZ2l0JC8sIFwiXCIpO1xuXG4gICAgaWYgKHVybC5pbmNsdWRlcyhcImdpdGh1Yi5jb20vXCIpKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IHVybC5zcGxpdChcImdpdGh1Yi5jb20vXCIpWzFdLnNwbGl0KFwiL1wiKTtcbiAgICAgIHJldHVybiB7IG93bmVyOiBwYXJ0c1swXSwgcmVwbzogcGFydHNbMV0gfTtcbiAgICB9XG5cbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoXCJnaXRAZ2l0aHViLmNvbTpcIikpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gdXJsLnJlcGxhY2UoXCJnaXRAZ2l0aHViLmNvbTpcIiwgXCJcIikuc3BsaXQoXCIvXCIpO1xuICAgICAgcmV0dXJuIHsgb3duZXI6IHBhcnRzWzBdLCByZXBvOiBwYXJ0c1sxXSB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IG93bmVyOiBcIlwiLCByZXBvOiBcIlwiIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgb3duZXI6IFwiXCIsIHJlcG86IFwiXCIgfTtcbiAgfVxufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gcGFyc2UgR2l0TGFiIFVSTHNcbmZ1bmN0aW9uIHBhcnNlR2l0TGFiVXJsKHVybDogc3RyaW5nKTogeyBvd25lcjogc3RyaW5nOyByZXBvOiBzdHJpbmcgfSB7XG4gIHRyeSB7XG4gICAgLy8gSGFuZGxlIG11bHRpcGxlIGZvcm1hdHM6XG4gICAgLy8gLSBodHRwczovL2dpdGxhYi5jb20vb3duZXIvcmVwb1xuICAgIC8vIC0gaHR0cHM6Ly9naXRsYWIuY29tL293bmVyL3N1Ymdyb3VwL3JlcG9cbiAgICAvLyAtIGh0dHBzOi8vZ2l0bGFiLmNvbS9vd25lci9yZXBvLmdpdFxuICAgIC8vIC0gZ2l0QGdpdGxhYi5jb206b3duZXIvcmVwby5naXRcbiAgICAvLyAtIFNlbGYtaG9zdGVkOiBodHRwczovL2dpdGxhYi5leGFtcGxlLmNvbS9vd25lci9yZXBvXG5cbiAgICB1cmwgPSB1cmwudHJpbSgpLnJlcGxhY2UoL1xcLmdpdCQvLCBcIlwiKTtcblxuICAgIC8vIEhhbmRsZSBIVFRQUyBVUkxzIChnaXRsYWIuY29tIG9yIHNlbGYtaG9zdGVkKVxuICAgIGlmICh1cmwuaW5jbHVkZXMoXCJnaXRsYWIuY29tL1wiKSB8fCAvZ2l0bGFiXFwuW14vXStcXC8vLnRlc3QodXJsKSkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgcGF0aCBhZnRlciB0aGUgZG9tYWluXG4gICAgICBjb25zdCBtYXRjaCA9IHVybC5tYXRjaCgvZ2l0bGFiW14vXSpcXC8oLispLyk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgY29uc3QgcGF0aFBhcnRzID0gbWF0Y2hbMV0uc3BsaXQoXCIvXCIpO1xuICAgICAgICAvLyBHaXRMYWIgc3VwcG9ydHMgbmVzdGVkIGdyb3Vwcywgc28gd2UgbmVlZCB0byBoYW5kbGU6XG4gICAgICAgIC8vIC0gb3duZXIvcmVwbyAoMiBwYXJ0cylcbiAgICAgICAgLy8gLSBvd25lci9zdWJncm91cC9yZXBvICgzKyBwYXJ0cylcbiAgICAgICAgaWYgKHBhdGhQYXJ0cy5sZW5ndGggPj0gMikge1xuICAgICAgICAgIC8vIFRha2UgZXZlcnl0aGluZyBleGNlcHQgdGhlIGxhc3QgcGFydCBhcyBvd25lci9ncm91cFxuICAgICAgICAgIGNvbnN0IHJlcG8gPSBwYXRoUGFydHNbcGF0aFBhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IG93bmVyID0gcGF0aFBhcnRzLnNsaWNlKDAsIC0xKS5qb2luKFwiL1wiKTtcbiAgICAgICAgICByZXR1cm4geyBvd25lciwgcmVwbyB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIFNTSCBVUkxzXG4gICAgaWYgKHVybC5zdGFydHNXaXRoKFwiZ2l0QGdpdGxhYi5jb206XCIpIHx8IC9naXRAZ2l0bGFiXFwuW146XSs6Ly50ZXN0KHVybCkpIHtcbiAgICAgIGNvbnN0IG1hdGNoID0gdXJsLm1hdGNoKC9naXRAZ2l0bGFiW146XSo6KC4rKS8pO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGNvbnN0IHBhdGhQYXJ0cyA9IG1hdGNoWzFdLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgaWYgKHBhdGhQYXJ0cy5sZW5ndGggPj0gMikge1xuICAgICAgICAgIGNvbnN0IHJlcG8gPSBwYXRoUGFydHNbcGF0aFBhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IG93bmVyID0gcGF0aFBhcnRzLnNsaWNlKDAsIC0xKS5qb2luKFwiL1wiKTtcbiAgICAgICAgICByZXR1cm4geyBvd25lciwgcmVwbyB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgb3duZXI6IFwiXCIsIHJlcG86IFwiXCIgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBvd25lcjogXCJcIiwgcmVwbzogXCJcIiB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXBvc0J5T3JnYW5pemF0aW9uSWQoXG4gIG9yZ2FuaXphdGlvbklkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHVzZXIgPSBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJvcmdhbml6YXRpb25faWRcIiwgb3JnYW5pemF0aW9uSWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKGRhdGEgPz8gW10pIGFzIFJlcG9bXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUmVwb1ZpYUdpdGh1YihcbiAgZm9ybURhdGE6IEZvcm1EYXRhLFxuICBvcmdJZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8UmVwbyB8IHVuZGVmaW5lZD4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IHByb3ZpZGVyID0gZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IHVybCA9IGZvcm1EYXRhLmdldChcImdpdGh1Yi11cmxcIikgYXMgc3RyaW5nO1xuXG4gIGlmICghbmFtZSkge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJOYW1lIGlzIHJlcXVpcmVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGluc3RhbGxhdGlvbiB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJnaXRodWJfaW5zdGFsbGF0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiaW5zdGFsbGVkX2J5XCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghaW5zdGFsbGF0aW9uKSB7XG4gICAgLy8gTm8gR2l0SHViIEFwcCBpbnN0YWxsYXRpb24gLSBwcm9tcHQgdXNlciB0byBpbnN0YWxsXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiSW5zdGFsbGF0aW9uIE5lZWRlZFwiLFxuICAgIH07XG4gIH1cblxuICAvL3BhcnNlIHVybCBmb3Igb3duZXIgYW5kIHJlcG9cbiAgY29uc3QgeyBvd25lciwgcmVwbzogcmVwb05hbWUgfSA9IHBhcnNlR2l0SHViVXJsKHVybCk7XG5cbiAgY29uc3QgaGFzQWNjZXNzID0gYXdhaXQgdmVyaWZ5R2l0aHViUmVwb0FjY2VzcyhcbiAgICBpbnN0YWxsYXRpb24uaWQsXG4gICAgb3duZXIsXG4gICAgcmVwb05hbWUsXG4gICk7XG5cbiAgaWYgKCFoYXNBY2Nlc3MpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBlcnJvcjogXCJBY2Nlc3MgRGVuaWVkXCIsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3I6IHJlcG9FcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAuaW5zZXJ0KHtcbiAgICAgIG5hbWUsXG4gICAgICBwcm92aWRlcixcbiAgICAgIHJlcG9fdXJsOiB1cmwsXG4gICAgICBvcmdhbml6YXRpb25faWQ6IG9yZ0lkLFxuICAgICAgaW5kZXhlZF9ieTogdXNlci5pZCxcbiAgICAgIGluZGV4X3N0YXR1czogXCJub3QgaW5kZXhlZFwiLFxuICAgIH0pXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChyZXBvRXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHJlcG9FcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXBvIGFzIFJlcG8gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVJlcG9WaWFHaXRsYWIoXG4gIGZvcm1EYXRhOiBGb3JtRGF0YSxcbiAgb3JnSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFJlcG8gfCB1bmRlZmluZWQ+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICBjb25zdCBwcm92aWRlciA9IGZvcm1EYXRhLmdldChcInR5cGVcIikgYXMgc3RyaW5nO1xuICBjb25zdCB1cmwgPSBmb3JtRGF0YS5nZXQoXCJnaXRsYWItdXJsXCIpIGFzIHN0cmluZztcblxuICAvLyBWYWxpZGF0ZSBpbnB1dHNcbiAgaWYgKCFuYW1lIHx8IG5hbWUudHJpbSgpID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlJlcG9zaXRvcnkgbmFtZSBpcyByZXF1aXJlZFwiIH07XG4gIH1cblxuICBpZiAoIXVybCB8fCB1cmwudHJpbSgpID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkdpdExhYiBVUkwgaXMgcmVxdWlyZWRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBpbnN0YWxsYXRpb24gfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZ2l0bGFiX2luc3RhbGxhdGlvbnNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImluc3RhbGxlZF9ieVwiLCB1c2VyLmlkKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoIWluc3RhbGxhdGlvbikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJJbnN0YWxsYXRpb24gTmVlZGVkXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgb3duZXIsIHJlcG86IHJlcG9OYW1lIH0gPSBwYXJzZUdpdExhYlVybCh1cmwpO1xuXG4gIC8vdmVyaWZ5IGFjY2Vzc1xuICBjb25zdCBoYXNBY2Nlc3MgPSBhd2FpdCB2ZXJpZnlHaXRMYWJSZXBvQWNjZXNzKFxuICAgIGluc3RhbGxhdGlvbi5hY2Nlc3NfdG9rZW4sXG4gICAgb3duZXIsXG4gICAgcmVwb05hbWUsXG4gICk7XG5cbiAgaWYgKCFoYXNBY2Nlc3MpIHtcbiAgICBpZiAoaW5zdGFsbGF0aW9uLmFjY2Vzc190b2tlbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIGVycm9yOiBcIkFjY2VzcyByZXF1aXJlZCFcIixcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiQWNjZXNzIGRlbmllZCFcIixcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvcjogcmVwb0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgIC5pbnNlcnQoe1xuICAgICAgbmFtZSxcbiAgICAgIHByb3ZpZGVyLFxuICAgICAgcmVwb191cmw6IHVybCxcbiAgICAgIG9yZ2FuaXphdGlvbl9pZDogb3JnSWQsXG4gICAgICBpbmRleGVkX2J5OiB1c2VyLmlkLFxuICAgICAgaW5kZXhfc3RhdHVzOiBcIm5vdCBpbmRleGVkXCIsXG4gICAgfSlcbiAgICAuc2VsZWN0KClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKHJlcG9FcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogcmVwb0Vycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlcG8gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVJlcG9WaWFMb2NhbEZpbGUoXG4gIGZvcm1EYXRhOiBGb3JtRGF0YSxcbiAgb3JnSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFJlcG8+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KFwiZmlsZVwiKSBhcyBGaWxlO1xuXG4gIC8vIFZhbGlkYXRlIGlucHV0c1xuICBpZiAoIW5hbWUgfHwgbmFtZS50cmltKCkgPT09IFwiXCIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUmVwb3NpdG9yeSBuYW1lIGlzIHJlcXVpcmVkXCIgfTtcbiAgfVxuXG4gIGlmICghZmlsZSkge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGaWxlIGlzIHJlcXVpcmVkXCIgfTtcbiAgfVxuXG4gIC8vIFZhbGlkYXRlIGZpbGUgdHlwZVxuICBpZiAoIWZpbGUubmFtZS5lbmRzV2l0aChcIi56aXBcIikpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiT25seSAuemlwIGZpbGVzIGFyZSBhbGxvd2VkXCIgfTtcbiAgfVxuXG4gIC8vIFZhbGlkYXRlIGZpbGUgc2l6ZSAobWF4IDEwME1CKVxuICBjb25zdCBtYXhTaXplID0gMTAwICogMTAyNCAqIDEwMjQ7IC8vIDEwME1CIGluIGJ5dGVzXG4gIGlmIChmaWxlLnNpemUgPiBtYXhTaXplKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiRmlsZSBzaXplIGV4Y2VlZHMgMTAwTUIgbGltaXRcIixcbiAgICB9O1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBHZW5lcmF0ZSBhIHVuaXF1ZSBmaWxlIG5hbWUgdG8gcHJldmVudCBjb2xsaXNpb25zXG4gICAgY29uc3QgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBzYW5pdGl6ZWROYW1lID0gbmFtZS50cmltKCkucmVwbGFjZSgvW15hLXowLTktX10vZ2ksIFwiX1wiKTtcbiAgICBjb25zdCBmaWxlTmFtZSA9IGAke3Nhbml0aXplZE5hbWV9XyR7dGltZXN0YW1wfV8ke2ZpbGUubmFtZX1gO1xuICAgIGNvbnN0IGZpbGVQYXRoID0gYCR7b3JnSWR9LyR7ZmlsZU5hbWV9YDtcblxuICAgIC8vIFVwbG9hZCBmaWxlIHRvIFN1cGFiYXNlIFN0b3JhZ2VcbiAgICBjb25zdCB7IGVycm9yOiB1cGxvYWRFcnJvciB9ID0gYXdhaXQgY2xpZW50LnN0b3JhZ2VcbiAgICAgIC5mcm9tKFwibG9jYWxfcmVwb3NcIilcbiAgICAgIC51cGxvYWQoZmlsZVBhdGgsIGZpbGUsIHtcbiAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vemlwXCIsXG4gICAgICAgIHVwc2VydDogZmFsc2UsXG4gICAgICB9KTtcblxuICAgIGlmICh1cGxvYWRFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIlVwbG9hZCBlcnJvcjpcIiwgdXBsb2FkRXJyb3IpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIGVycm9yOiBgRmlsZSB1cGxvYWQgZmFpbGVkOiAke3VwbG9hZEVycm9yLm1lc3NhZ2V9YCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gR2V0IHRoZSBwdWJsaWMgVVJMIGZvciB0aGUgdXBsb2FkZWQgZmlsZVxuICAgIGNvbnN0IHsgZGF0YTogdXJsRGF0YSB9ID0gY2xpZW50LnN0b3JhZ2VcbiAgICAgIC5mcm9tKFwibG9jYWxfcmVwb3NcIilcbiAgICAgIC5nZXRQdWJsaWNVcmwoZmlsZVBhdGgpO1xuXG4gICAgLy8gQ3JlYXRlIHJlcG9zaXRvcnkgcmVjb3JkIGluIGRhdGFiYXNlXG4gICAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvcjogcmVwb0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgICAuaW5zZXJ0KHtcbiAgICAgICAgbmFtZTogbmFtZS50cmltKCksXG4gICAgICAgIHByb3ZpZGVyOiBcImxvY2FsXCIsXG4gICAgICAgIHJlcG9fdXJsOiBudWxsLFxuICAgICAgICBvYmplY3RfdXJsOiB1cmxEYXRhLnB1YmxpY1VybCxcbiAgICAgICAgb3JnYW5pemF0aW9uX2lkOiBvcmdJZCxcbiAgICAgICAgaW5kZXhlZF9ieTogdXNlci5pZCxcbiAgICAgICAgaW5kZXhfc3RhdHVzOiBcIm5vdCBpbmRleGVkXCIsXG4gICAgICB9KVxuICAgICAgLnNlbGVjdCgpXG4gICAgICAuc2luZ2xlKCk7XG5cbiAgICBpZiAocmVwb0Vycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiUmVwb3NpdG9yeSBjcmVhdGlvbiBlcnJvcjpcIiwgcmVwb0Vycm9yKTtcbiAgICAgIC8vIEF0dGVtcHQgdG8gY2xlYW4gdXAgdXBsb2FkZWQgZmlsZVxuICAgICAgYXdhaXQgY2xpZW50LnN0b3JhZ2UuZnJvbShcImxvY2FsX3JlcG9zXCIpLnJlbW92ZShbZmlsZVBhdGhdKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogYFJlcG9zaXRvcnkgY3JlYXRpb24gZmFpbGVkOiAke3JlcG9FcnJvci5tZXNzYWdlfWAsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlcG8gYXMgUmVwbyB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJVbmV4cGVjdGVkIGVycm9yOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6XG4gICAgICAgIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkXCIsXG4gICAgfTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSZXBvc2l0b3J5IE1hbmFnZW1lbnQgU2VydmljZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlcG9XaXRoU3RhdHVzKFxuICByZXBvSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFJlcG8+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImlkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICBpZiAoIXJlcG8pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUmVwb3NpdG9yeSBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVwbyBhcyBSZXBvIH07XG59XG5cbnR5cGUgVXBkYXRlRGF0YSA9IHtcbiAgbmFtZT86IHN0cmluZztcbiAgcmVwb191cmw/OiBzdHJpbmc7XG4gIG9iamVjdF91cmw/OiBzdHJpbmc7XG4gIGluZGV4X3N0YXR1cz86IHN0cmluZztcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVSZXBvU2V0dGluZ3MoXG4gIHJlcG9JZDogc3RyaW5nLFxuICBzZXR0aW5nczogeyBuYW1lPzogc3RyaW5nOyByZXBvX3VybD86IHN0cmluZzsgZmlsZT86IEZpbGUgfSxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFJlcG8+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gR2V0IHRoZSBjdXJyZW50IHJlcG8gdG8gY2hlY2sgaXRzIHByb3ZpZGVyIHR5cGVcbiAgY29uc3QgeyBkYXRhOiBjdXJyZW50UmVwbyB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImlkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKCFjdXJyZW50UmVwbykge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJSZXBvc2l0b3J5IG5vdCBmb3VuZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgdXBkYXRlRGF0YTogVXBkYXRlRGF0YSA9IHt9O1xuXG4gIC8vIEhhbmRsZSBuYW1lIHVwZGF0ZVxuICBpZiAoc2V0dGluZ3MubmFtZSkge1xuICAgIHVwZGF0ZURhdGEubmFtZSA9IHNldHRpbmdzLm5hbWU7XG4gIH1cblxuICAvLyBIYW5kbGUgR2l0SHViIFVSTCB1cGRhdGVcbiAgaWYgKHNldHRpbmdzLnJlcG9fdXJsICYmIGN1cnJlbnRSZXBvLnByb3ZpZGVyID09PSBcImdpdGh1YlwiKSB7XG4gICAgY29uc3QgeyBvd25lciwgcmVwbyB9ID0gcGFyc2VHaXRIdWJVcmwoc2V0dGluZ3MucmVwb191cmwpO1xuXG4gICAgaWYgKCFvd25lciB8fCAhcmVwbykge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkludmFsaWQgR2l0SHViIFVSTCBmb3JtYXQhXCIgfTtcbiAgICB9XG5cbiAgICAvLyBWZXJpZnkgYWNjZXNzIHRvIHRoZSBuZXcgcmVwb1xuICAgIGNvbnN0IHsgZGF0YTogaW5zdGFsbGF0aW9uIH0gPSBhd2FpdCBjbGllbnRcbiAgICAgIC5mcm9tKFwiZ2l0aHViX2luc3RhbGxhdGlvbnNcIilcbiAgICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgICAuZXEoXCJpbnN0YWxsZWRfYnlcIiwgdXNlci5pZClcbiAgICAgIC5zaW5nbGUoKTtcblxuICAgIGlmICghaW5zdGFsbGF0aW9uKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiR2l0SHViIEFwcCBub3QgaW5zdGFsbGVkIVwiIH07XG4gICAgfVxuXG4gICAgY29uc3QgaGFzQWNjZXNzID0gYXdhaXQgdmVyaWZ5R2l0aHViUmVwb0FjY2VzcyhcbiAgICAgIGluc3RhbGxhdGlvbi5pbnN0YWxsYXRpb25faWQudG9TdHJpbmcoKSxcbiAgICAgIG93bmVyLFxuICAgICAgcmVwbyxcbiAgICApO1xuXG4gICAgaWYgKCFoYXNBY2Nlc3MpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjpcbiAgICAgICAgICBcIkNhbm5vdCBhY2Nlc3MgdGhpcyByZXBvc2l0b3J5LiBNYWtlIHN1cmUgdGhlIEdpdEh1YiBBcHAgaXMgaW5zdGFsbGVkIGZvciB0aGlzIHJlcG9zaXRvcnkuXCIsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHVwZGF0ZURhdGEucmVwb191cmwgPSBzZXR0aW5ncy5yZXBvX3VybDtcbiAgICB1cGRhdGVEYXRhLmluZGV4X3N0YXR1cyA9IFwibm90IGluZGV4ZWRcIjsgLy8gVHJpZ2dlciByZS1pbmRleGluZ1xuICB9XG5cbiAgLy8gSGFuZGxlIGxvY2FsIGZpbGUgdXBsb2FkXG4gIGlmIChzZXR0aW5ncy5maWxlICYmIGN1cnJlbnRSZXBvLnByb3ZpZGVyID09PSBcImxvY2FsXCIpIHtcbiAgICBjb25zdCBmaWxlID0gc2V0dGluZ3MuZmlsZTtcbiAgICBjb25zdCBmaWxlRXh0ID0gZmlsZS5uYW1lLnNwbGl0KFwiLlwiKS5wb3AoKTtcblxuICAgIGlmIChmaWxlRXh0ICE9PSBcInppcFwiKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiT25seSAuemlwIGZpbGVzIGFyZSBhbGxvd2VkIVwiIH07XG4gICAgfVxuXG4gICAgLy8gVXBsb2FkIHRvIFN1cGFiYXNlIFN0b3JhZ2VcbiAgICBjb25zdCBmaWxlTmFtZSA9IGAke3JlcG9JZH0tJHtEYXRlLm5vdygpfS56aXBgO1xuICAgIGNvbnN0IHsgZGF0YTogdXBsb2FkRGF0YSwgZXJyb3I6IHVwbG9hZEVycm9yIH0gPSBhd2FpdCBjbGllbnQuc3RvcmFnZVxuICAgICAgLmZyb20oXCJsb2NhbF9yZXBvc1wiKVxuICAgICAgLnVwbG9hZChmaWxlTmFtZSwgZmlsZSk7XG5cbiAgICBpZiAodXBsb2FkRXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IodXBsb2FkRXJyb3IpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkZhaWxlZCB0byB1cGxvYWQgZmlsZSFcIiB9O1xuICAgIH1cblxuICAgIC8vIEdldCBwdWJsaWMgVVJMXG4gICAgY29uc3QgeyBkYXRhOiB1cmxEYXRhIH0gPSBjbGllbnQuc3RvcmFnZVxuICAgICAgLmZyb20oXCJsb2NhbF9yZXBvc1wiKVxuICAgICAgLmdldFB1YmxpY1VybChmaWxlTmFtZSk7XG5cbiAgICB1cGRhdGVEYXRhLm9iamVjdF91cmwgPSB1cmxEYXRhLnB1YmxpY1VybDtcbiAgICB1cGRhdGVEYXRhLmluZGV4X3N0YXR1cyA9IFwicGVuZGluZ1wiOyAvLyBUcmlnZ2VyIHJlLWluZGV4aW5nXG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIHJlcG9zaXRvcnlcbiAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAudXBkYXRlKHVwZGF0ZURhdGEpXG4gICAgLmVxKFwiaWRcIiwgcmVwb0lkKVxuICAgIC5zZWxlY3QoKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlcG8gYXMgUmVwbyB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUmVwbyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDx7IG9yZ2FuaXphdGlvbklkOiBzdHJpbmcgfT4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICAvLyBGZXRjaCB0aGUgb3JnYW5pemF0aW9uX2lkIGJlZm9yZSBkZWxldGluZ1xuICBjb25zdCB7IGRhdGE6IHJlcG8sIGVycm9yOiByZXBvRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIm9yZ2FuaXphdGlvbl9pZFwiKVxuICAgIC5lcShcImlkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKHJlcG9FcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IocmVwb0Vycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHJlcG9FcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICBpZiAoIXJlcG8pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUmVwb3NpdG9yeSBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgY2xpZW50LmZyb20oXCJyZXBvc2l0b3JpZXNcIikuZGVsZXRlKCkuZXEoXCJpZFwiLCByZXBvSWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogeyBvcmdhbml6YXRpb25JZDogcmVwby5vcmdhbml6YXRpb25faWQgfSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJpZ2dlclJlaW5kZXgoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8dm9pZD4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIGluZGV4X3N0YXR1cyB0byAncGVuZGluZycgdG8gdHJpZ2dlciByZWluZGV4aW5nXG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnVwZGF0ZSh7IGluZGV4X3N0YXR1czogXCJwZW5kaW5nXCIgfSlcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgLy8gVE9ETzogVHJpZ2dlciBhY3R1YWwgaW5kZXhpbmcgam9iL3dlYmhvb2svcXVldWUgaGVyZVxuICAvLyBUaGlzIGNvdWxkIGJlIGFuIEFQSSBjYWxsIHRvIHlvdXIgaW5kZXhpbmcgc2VydmljZVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVuZGVmaW5lZCB9O1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEb2N1bWVudGF0aW9uIFNlcnZpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2N1bWVudGF0aW9uKFxuICByZXBvSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PERvY3VtZW50YXRpb24+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBkb2N1bWVudGF0aW9uLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJkb2N1bWVudGF0aW9uXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJyZXBvX2lkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICBpZiAoIWRvY3VtZW50YXRpb24pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRG9jdW1lbnRhdGlvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogZG9jdW1lbnRhdGlvbiBhcyBEb2N1bWVudGF0aW9uIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2NQYWdlcyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2NQYWdlW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gR2V0IHRoZSBsYXRlc3QgZG9jdW1lbnRhdGlvbiB2ZXJzaW9uIGZvciB0aGlzIHJlcG9cbiAgY29uc3QgeyBkYXRhOiBkb2N1bWVudGF0aW9uLCBlcnJvcjogZG9jRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCJpZFwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5vcmRlcihcInZlcnNpb25cIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXG4gICAgLmxpbWl0KDEpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChkb2NFcnJvciB8fCAhZG9jdW1lbnRhdGlvbikge1xuICAgIGNvbnNvbGUuZXJyb3IoZG9jRXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJEb2N1bWVudGF0aW9uIG5vdCBmb3VuZFwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IHBhZ2VzLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJwYWdlc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiZG9jdW1lbnRhdGlvbl9pZFwiLCBkb2N1bWVudGF0aW9uLmlkKVxuICAgIC5vcmRlcihcIm9yZGVyX2luZGV4XCIsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKHBhZ2VzID8/IFtdKSBhcyBEb2NQYWdlW10gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERvY1BhZ2VCeUlkKFxuICBwYWdlSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PERvY1BhZ2U+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdlLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJkb2NfcGFnZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImlkXCIsIHBhZ2VJZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICBpZiAoIXBhZ2UpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUGFnZSBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcGFnZSBhcyBEb2NQYWdlIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2NQYWdlc0hpZXJhcmNoaWNhbChcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2NQYWdlW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gRmlyc3QgZ2V0IHRoZSBkb2N1bWVudGF0aW9uIElEIGZvciB0aGlzIHJlcG9cbiAgY29uc3QgeyBkYXRhOiBkb2N1bWVudGF0aW9uLCBlcnJvcjogZG9jRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCJpZFwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZG9jRXJyb3IgfHwgIWRvY3VtZW50YXRpb24pIHtcbiAgICBjb25zb2xlLmVycm9yKGRvY0Vycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRG9jdW1lbnRhdGlvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdlcywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jX3BhZ2VzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJkb2N1bWVudGF0aW9uX2lkXCIsIGRvY3VtZW50YXRpb24uaWQpXG4gICAgLm9yZGVyKFwib3JkZXJfaW5kZXhcIiwgeyBhc2NlbmRpbmc6IHRydWUgfSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICAvLyBQYWdlcyBhcmUgYWxyZWFkeSBzb3J0ZWQgYnkgb3JkZXJfaW5kZXhcbiAgLy8gVGhlIHBhcmVudF9wYWdlX2lkIGZpZWxkIG1haW50YWlucyB0aGUgaGllcmFyY2h5XG4gIC8vIEZyb250ZW5kIGNhbiB1c2UgdGhpcyB0byByZW5kZXIgdGhlIHRyZWUgc3RydWN0dXJlXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChwYWdlcyA/PyBbXSkgYXMgRG9jUGFnZVtdIH07XG59XG5cbi8qKlxuICogR2V0IGFsbCBkb2N1bWVudGF0aW9uIHZlcnNpb25zIGZvciBhIHJlcG9zaXRvcnlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERvY3VtZW50YXRpb25WZXJzaW9ucyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2N1bWVudGF0aW9uW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiB2ZXJzaW9ucywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLm9yZGVyKFwidmVyc2lvblwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiAodmVyc2lvbnMgPz8gW10pIGFzIERvY3VtZW50YXRpb25bXSB9O1xufVxuXG4vKipcbiAqIEdldCB0aGUgbGF0ZXN0IGNvbXBsZXRlZCBkb2N1bWVudGF0aW9uIHZlcnNpb24gZm9yIGEgcmVwb3NpdG9yeVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGF0ZXN0RG9jdW1lbnRhdGlvbihcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2N1bWVudGF0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogZG9jdW1lbnRhdGlvbiwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLm9yZGVyKFwidmVyc2lvblwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcbiAgICAubGltaXQoMSlcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKCFkb2N1bWVudGF0aW9uKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkRvY3VtZW50YXRpb24gbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogZG9jdW1lbnRhdGlvbiBhcyBEb2N1bWVudGF0aW9uIH07XG59XG5cbi8qKlxuICogR2V0IGRvY3VtZW50YXRpb24gcGFnZXMgZm9yIGEgc3BlY2lmaWMgdmVyc2lvblxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jUGFnZXNGb3JWZXJzaW9uKFxuICByZXBvSWQ6IHN0cmluZyxcbiAgdmVyc2lvbjogbnVtYmVyLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jUGFnZVtdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIC8vIEdldCB0aGUgZG9jdW1lbnRhdGlvbiByZWNvcmQgZm9yIHRoaXMgdmVyc2lvblxuICBjb25zdCB7IGRhdGE6IGRvY3VtZW50YXRpb24sIGVycm9yOiBkb2NFcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJkb2N1bWVudGF0aW9uXCIpXG4gICAgLnNlbGVjdChcImlkXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLmVxKFwidmVyc2lvblwiLCB2ZXJzaW9uKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZG9jRXJyb3IgfHwgIWRvY3VtZW50YXRpb24pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRG9jdW1lbnRhdGlvbiB2ZXJzaW9uIG5vdCBmb3VuZFwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IHBhZ2VzLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJwYWdlc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiZG9jdW1lbnRhdGlvbl9pZFwiLCBkb2N1bWVudGF0aW9uLmlkKVxuICAgIC5vcmRlcihcIm9yZGVyX2luZGV4XCIsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKHBhZ2VzID8/IFtdKSBhcyBEb2NQYWdlW10gfTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ29udmVyc2F0aW9uIFNlcnZpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb252ZXJzYXRpb25zKFxuICByZXBvSWQ6IHN0cmluZyxcbiAgbGltaXQ6IG51bWJlciA9IDIwLFxuICB2ZXJzaW9uOiBudW1iZXIgfCBudWxsID0gbnVsbCxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbltdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGxldCBxdWVyeSA9IGNsaWVudFxuICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKTtcblxuICAvLyBGaWx0ZXIgYnkgdmVyc2lvbiBpZiBzcGVjaWZpZWRcbiAgaWYgKHZlcnNpb24gIT09IG51bGwgJiYgdmVyc2lvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcXVlcnkgPSBxdWVyeS5lcShcInJlcG9fdmVyc2lvblwiLCB2ZXJzaW9uKTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogY29udmVyc2F0aW9ucywgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5XG4gICAgLm9yZGVyKFwidXBkYXRlZF9hdFwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcbiAgICAubGltaXQobGltaXQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKGNvbnZlcnNhdGlvbnMgPz8gW10pIGFzIENvbnZlcnNhdGlvbltdIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb252ZXJzYXRpb25CeUlkKFxuICBjb252ZXJzYXRpb25JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29udmVyc2F0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogY29udmVyc2F0aW9uLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpZFwiLCBjb252ZXJzYXRpb25JZClcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFjb252ZXJzYXRpb24pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiQ29udmVyc2F0aW9uIG5vdCBmb3VuZFwiIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjb252ZXJzYXRpb24gYXMgQ29udmVyc2F0aW9uIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDb252ZXJzYXRpb24oXG4gIHJlcG9JZDogc3RyaW5nLFxuICB0aXRsZT86IHN0cmluZyxcbiAgdmVyc2lvbj86IG51bWJlciB8IG51bGwsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxDb252ZXJzYXRpb24+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBjb252ZXJzYXRpb24sIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAuaW5zZXJ0KHtcbiAgICAgIHJlcG9faWQ6IHJlcG9JZCxcbiAgICAgIHVzZXJfaWQ6IHVzZXIuaWQsXG4gICAgICB0aXRsZTogdGl0bGUgfHwgXCJOZXcgQ29udmVyc2F0aW9uXCIsXG4gICAgICByZXBvX3ZlcnNpb246IHZlcnNpb24gPz8gbnVsbCxcbiAgICB9KVxuICAgIC5zZWxlY3QoKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGNvbnZlcnNhdGlvbiBhcyBDb252ZXJzYXRpb24gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNvbnZlcnNhdGlvbihcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PHZvaWQ+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLmRlbGV0ZSgpXG4gICAgLmVxKFwiaWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVuZGVmaW5lZCB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVuYW1lQ29udmVyc2F0aW9uKFxuICBjb252ZXJzYXRpb25JZDogc3RyaW5nLFxuICBuZXdUaXRsZTogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29udmVyc2F0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogY29udmVyc2F0aW9uLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLnVwZGF0ZSh7IHRpdGxlOiBuZXdUaXRsZSB9KVxuICAgIC5lcShcImlkXCIsIGNvbnZlcnNhdGlvbklkKVxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlci5pZClcbiAgICAuc2VsZWN0KClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjb252ZXJzYXRpb24gYXMgQ29udmVyc2F0aW9uIH07XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1lc3NhZ2UgU2VydmljZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvbnZlcnNhdGlvbk1lc3NhZ2VzKFxuICBjb252ZXJzYXRpb25JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29udmVyc2F0aW9uTWVzc2FnZVtdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogbWVzc2FnZXMsIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcIm1lc3NhZ2VzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJjb252ZXJzYXRpb25faWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgLm9yZGVyKFwiY3JlYXRlZF9hdFwiLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChtZXNzYWdlcyA/PyBbXSkgYXMgQ29udmVyc2F0aW9uTWVzc2FnZVtdIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVNZXNzYWdlKFxuICBjb252ZXJzYXRpb25JZDogc3RyaW5nLFxuICByb2xlOiBcInVzZXJcIiB8IFwiYXNzaXN0YW50XCIsXG4gIGNvbnRlbnQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbk1lc3NhZ2U+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBtZXNzYWdlLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJtZXNzYWdlc1wiKVxuICAgIC5pbnNlcnQoe1xuICAgICAgY29udmVyc2F0aW9uX2lkOiBjb252ZXJzYXRpb25JZCxcbiAgICAgIHJvbGUsXG4gICAgICBjb250ZW50LFxuICAgIH0pXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSBjb252ZXJzYXRpb24ncyB1cGRhdGVkX2F0IHRpbWVzdGFtcFxuICBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAudXBkYXRlKHsgdXBkYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpIH0pXG4gICAgLmVxKFwiaWRcIiwgY29udmVyc2F0aW9uSWQpO1xuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IG1lc3NhZ2UgYXMgQ29udmVyc2F0aW9uTWVzc2FnZSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZUNvZGVTbmlwcGV0cyhcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbiAgbWVzc2FnZUlkOiBzdHJpbmcsXG4gIHNuaXBwZXRzOiBBcnJheTx7IGZpbGU6IHN0cmluZzsgY29kZTogc3RyaW5nIH0+LFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29kZVNuaXBwZXRbXT4+IHtcbiAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCBzbmlwcGV0c1RvSW5zZXJ0ID0gc25pcHBldHMubWFwKChzbmlwcGV0KSA9PiAoe1xuICAgIGNvbnZlcnNhdGlvbl9pZDogY29udmVyc2F0aW9uSWQsXG4gICAgbWVzc2FnZV9pZDogbWVzc2FnZUlkLFxuICAgIGZpbGVfcGF0aDogc25pcHBldC5maWxlLFxuICAgIGNvZGVfY29udGVudDogc25pcHBldC5jb2RlLFxuICAgIGxhbmd1YWdlOiBzbmlwcGV0LmZpbGUuc3BsaXQoXCIuXCIpLnBvcCgpIHx8IG51bGwsXG4gIH0pKTtcblxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKFwiY29kZV9zbmlwcGV0c1wiKVxuICAgIC5pbnNlcnQoc25pcHBldHNUb0luc2VydClcbiAgICAuc2VsZWN0KCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBkYXRhIGFzIENvZGVTbmlwcGV0W10gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvZGVTbmlwcGV0c0ZvckNvbnZlcnNhdGlvbihcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvZGVTbmlwcGV0W10+PiB7XG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbShcImNvZGVfc25pcHBldHNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImNvbnZlcnNhdGlvbl9pZFwiLCBjb252ZXJzYXRpb25JZClcbiAgICAub3JkZXIoXCJjcmVhdGVkX2F0XCIsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGRhdGEgYXMgQ29kZVNuaXBwZXRbXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ29kZVNuaXBwZXQoXG4gIHNuaXBwZXRJZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8bnVsbD4+IHtcbiAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKFwiY29kZV9zbmlwcGV0c1wiKVxuICAgIC5kZWxldGUoKVxuICAgIC5lcShcImlkXCIsIHNuaXBwZXRJZCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBudWxsIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbmRleFJlcG9zaXRvcnkoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8dm9pZD4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGluc3RhbGxhdGlvbiwgZXJyb3I6IGluc3RhbGxhdGlvbkVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImdpdGh1Yl9pbnN0YWxsYXRpb25zXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpbnN0YWxsZWRfYnlcIiwgdXNlci5pZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKCFpbnN0YWxsYXRpb24gfHwgaW5zdGFsbGF0aW9uRXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiR2l0aHViIEFwcCBJbnN0YWxsYXRpb24gbm90IGZvdW5kIVwiIH07XG4gIH1cblxuICAvL2ZldGNoIHJlcG9cblxuICBjb25zdCByZXBvUmVzdWx0ID0gYXdhaXQgZ2V0UmVwb1dpdGhTdGF0dXMocmVwb0lkKTtcblxuICBpZiAoIXJlcG9SZXN1bHQuc3VjY2Vzcykge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogcmVwb1Jlc3VsdC5lcnJvciB9O1xuICB9XG5cbiAgY29uc3QgcmVwb1VybCA9IHJlcG9SZXN1bHQuZGF0YS5yZXBvX3VybDtcbiAgY29uc3QgaW5zdGFsbGF0aW9uSWQgPSBpbnN0YWxsYXRpb24uaW5zdGFsbGF0aW9uX2lkO1xuXG4gIC8vIEdldCB0aGUgbGF0ZXN0IHZlcnNpb24gbnVtYmVyIGZvciB0aGlzIHJlcG9cbiAgY29uc3QgeyBkYXRhOiBsYXRlc3REb2MgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCJ2ZXJzaW9uXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLm9yZGVyKFwidmVyc2lvblwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcbiAgICAubGltaXQoMSlcbiAgICAuc2luZ2xlKCk7XG5cbiAgLy8gSW5jcmVtZW50IHZlcnNpb24gKHN0YXJ0IGF0IDEgaWYgbm8gcHJldmlvdXMgdmVyc2lvbnMpXG4gIGNvbnN0IG5leHRWZXJzaW9uID0gKGxhdGVzdERvYz8udmVyc2lvbiA/PyAwKSArIDE7XG5cbiAgLy9tYXJrIHRoZSByZXBvc2l0b3J5IGFzIGluZGV4aW5nIGluIHN1cGFiYXNlIGZpcnN0XG4gIGNvbnN0IHsgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgIC51cGRhdGUoeyBpbmRleF9zdGF0dXM6IFwiaW5kZXhpbmdcIiB9KVxuICAgIC5lcShcImlkXCIsIHJlcG9JZCk7XG5cbiAgaWYgKHVwZGF0ZUVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcih1cGRhdGVFcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiB1cGRhdGVFcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICAvLyBDYWxsIHRoZSBiYWNrZW5kIHRvIHN0YXJ0IGluZGV4aW5nIChmaXJlLWFuZC1mb3JnZXQpXG4gIC8vIERvbid0IGF3YWl0IG9yIHRocm93IGVycm9ycyBzaW5jZSB0aGlzIGlzIGEgbG9uZy1ydW5uaW5nIG9wZXJhdGlvblxuICBmZXRjaChgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vcmVwb3MvaW5kZXhgLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHJlcG9fdXJsOiByZXBvVXJsLFxuICAgICAgcmVwb19pZDogcmVwb0lkLFxuICAgICAgdXNlcl9pZDogdXNlci5pZCxcbiAgICAgIGluc3RhbGxhdGlvbl9pZDogaW5zdGFsbGF0aW9uSWQsXG4gICAgICBicmFuY2g6IFwibWFpblwiLFxuICAgICAgdmVyc2lvbjogbmV4dFZlcnNpb24sXG4gICAgfSksXG4gIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIC8vIExvZyB0aGUgZXJyb3IgYnV0IGRvbid0IGZhaWwgdGhlIHJlcXVlc3RcbiAgICBjb25zb2xlLmVycm9yKFwiSW5kZXhpbmcgcmVxdWVzdCBmYWlsZWQ6XCIsIGVycm9yKTtcbiAgICAvLyBUaGUgYmFja2VuZCBzaG91bGQgaGFuZGxlIHVwZGF0aW5nIHRoZSByZXBvIHN0YXR1cyBvbiBmYWlsdXJlXG4gIH0pO1xuXG4gIC8vIFJldHVybiBzdWNjZXNzIGltbWVkaWF0ZWx5IC0gdGhlIGluZGV4aW5nIHdpbGwgaGFwcGVuIGluIHRoZSBiYWNrZ3JvdW5kXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVuZGVmaW5lZCB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJnVEFnZ0NzQiJ9
}),
"[project]/src/lib/services/data:58fd98 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"70eec9e0c5d7ed97577df4f40b75aa69e197b3acc7":"createConversation"},"src/lib/services/repoService.ts",""] */ __turbopack_context__.s([
    "createConversation",
    ()=>createConversation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var createConversation = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("70eec9e0c5d7ed97577df4f40b75aa69e197b3acc7", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createConversation"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcmVwb1NlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAL3V0aWxzL3N1cGFiYXNlL3NlcnZlclwiO1xuaW1wb3J0IHtcbiAgUmVwbyxcbiAgRG9jdW1lbnRhdGlvbixcbiAgRG9jUGFnZSxcbiAgQ29udmVyc2F0aW9uLFxuICBDb252ZXJzYXRpb25NZXNzYWdlLFxuICBDb2RlU25pcHBldCxcbn0gZnJvbSBcIkAvYXBwL3R5cGVzL3N1cGFiYXNlXCI7XG5pbXBvcnQgeyBBY3Rpb25SZXN1bHQgfSBmcm9tIFwiQC9hcHAvdHlwZXMvYWN0aW9uXCI7XG5pbXBvcnQge1xuICB2ZXJpZnlHaXRodWJSZXBvQWNjZXNzLFxuICB2ZXJpZnlHaXRMYWJSZXBvQWNjZXNzLFxufSBmcm9tIFwiLi9naXRQcm92aWRlclNlcnZpY2VcIjtcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHBhcnNlIEdpdEh1YiBVUkxzXG5mdW5jdGlvbiBwYXJzZUdpdEh1YlVybCh1cmw6IHN0cmluZyk6IHsgb3duZXI6IHN0cmluZzsgcmVwbzogc3RyaW5nIH0ge1xuICB0cnkge1xuICAgIC8vIEhhbmRsZSBtdWx0aXBsZSBmb3JtYXRzOlxuICAgIC8vIC0gaHR0cHM6Ly9naXRodWIuY29tL293bmVyL3JlcG9cbiAgICAvLyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9vd25lci9yZXBvLmdpdFxuICAgIC8vIC0gZ2l0QGdpdGh1Yi5jb206b3duZXIvcmVwby5naXRcblxuICAgIHVybCA9IHVybC50cmltKCkucmVwbGFjZSgvXFwuZ2l0JC8sIFwiXCIpO1xuXG4gICAgaWYgKHVybC5pbmNsdWRlcyhcImdpdGh1Yi5jb20vXCIpKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IHVybC5zcGxpdChcImdpdGh1Yi5jb20vXCIpWzFdLnNwbGl0KFwiL1wiKTtcbiAgICAgIHJldHVybiB7IG93bmVyOiBwYXJ0c1swXSwgcmVwbzogcGFydHNbMV0gfTtcbiAgICB9XG5cbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoXCJnaXRAZ2l0aHViLmNvbTpcIikpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gdXJsLnJlcGxhY2UoXCJnaXRAZ2l0aHViLmNvbTpcIiwgXCJcIikuc3BsaXQoXCIvXCIpO1xuICAgICAgcmV0dXJuIHsgb3duZXI6IHBhcnRzWzBdLCByZXBvOiBwYXJ0c1sxXSB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IG93bmVyOiBcIlwiLCByZXBvOiBcIlwiIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgb3duZXI6IFwiXCIsIHJlcG86IFwiXCIgfTtcbiAgfVxufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gcGFyc2UgR2l0TGFiIFVSTHNcbmZ1bmN0aW9uIHBhcnNlR2l0TGFiVXJsKHVybDogc3RyaW5nKTogeyBvd25lcjogc3RyaW5nOyByZXBvOiBzdHJpbmcgfSB7XG4gIHRyeSB7XG4gICAgLy8gSGFuZGxlIG11bHRpcGxlIGZvcm1hdHM6XG4gICAgLy8gLSBodHRwczovL2dpdGxhYi5jb20vb3duZXIvcmVwb1xuICAgIC8vIC0gaHR0cHM6Ly9naXRsYWIuY29tL293bmVyL3N1Ymdyb3VwL3JlcG9cbiAgICAvLyAtIGh0dHBzOi8vZ2l0bGFiLmNvbS9vd25lci9yZXBvLmdpdFxuICAgIC8vIC0gZ2l0QGdpdGxhYi5jb206b3duZXIvcmVwby5naXRcbiAgICAvLyAtIFNlbGYtaG9zdGVkOiBodHRwczovL2dpdGxhYi5leGFtcGxlLmNvbS9vd25lci9yZXBvXG5cbiAgICB1cmwgPSB1cmwudHJpbSgpLnJlcGxhY2UoL1xcLmdpdCQvLCBcIlwiKTtcblxuICAgIC8vIEhhbmRsZSBIVFRQUyBVUkxzIChnaXRsYWIuY29tIG9yIHNlbGYtaG9zdGVkKVxuICAgIGlmICh1cmwuaW5jbHVkZXMoXCJnaXRsYWIuY29tL1wiKSB8fCAvZ2l0bGFiXFwuW14vXStcXC8vLnRlc3QodXJsKSkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgcGF0aCBhZnRlciB0aGUgZG9tYWluXG4gICAgICBjb25zdCBtYXRjaCA9IHVybC5tYXRjaCgvZ2l0bGFiW14vXSpcXC8oLispLyk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgY29uc3QgcGF0aFBhcnRzID0gbWF0Y2hbMV0uc3BsaXQoXCIvXCIpO1xuICAgICAgICAvLyBHaXRMYWIgc3VwcG9ydHMgbmVzdGVkIGdyb3Vwcywgc28gd2UgbmVlZCB0byBoYW5kbGU6XG4gICAgICAgIC8vIC0gb3duZXIvcmVwbyAoMiBwYXJ0cylcbiAgICAgICAgLy8gLSBvd25lci9zdWJncm91cC9yZXBvICgzKyBwYXJ0cylcbiAgICAgICAgaWYgKHBhdGhQYXJ0cy5sZW5ndGggPj0gMikge1xuICAgICAgICAgIC8vIFRha2UgZXZlcnl0aGluZyBleGNlcHQgdGhlIGxhc3QgcGFydCBhcyBvd25lci9ncm91cFxuICAgICAgICAgIGNvbnN0IHJlcG8gPSBwYXRoUGFydHNbcGF0aFBhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IG93bmVyID0gcGF0aFBhcnRzLnNsaWNlKDAsIC0xKS5qb2luKFwiL1wiKTtcbiAgICAgICAgICByZXR1cm4geyBvd25lciwgcmVwbyB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIFNTSCBVUkxzXG4gICAgaWYgKHVybC5zdGFydHNXaXRoKFwiZ2l0QGdpdGxhYi5jb206XCIpIHx8IC9naXRAZ2l0bGFiXFwuW146XSs6Ly50ZXN0KHVybCkpIHtcbiAgICAgIGNvbnN0IG1hdGNoID0gdXJsLm1hdGNoKC9naXRAZ2l0bGFiW146XSo6KC4rKS8pO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGNvbnN0IHBhdGhQYXJ0cyA9IG1hdGNoWzFdLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgaWYgKHBhdGhQYXJ0cy5sZW5ndGggPj0gMikge1xuICAgICAgICAgIGNvbnN0IHJlcG8gPSBwYXRoUGFydHNbcGF0aFBhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IG93bmVyID0gcGF0aFBhcnRzLnNsaWNlKDAsIC0xKS5qb2luKFwiL1wiKTtcbiAgICAgICAgICByZXR1cm4geyBvd25lciwgcmVwbyB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgb3duZXI6IFwiXCIsIHJlcG86IFwiXCIgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBvd25lcjogXCJcIiwgcmVwbzogXCJcIiB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXBvc0J5T3JnYW5pemF0aW9uSWQoXG4gIG9yZ2FuaXphdGlvbklkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHVzZXIgPSBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJvcmdhbml6YXRpb25faWRcIiwgb3JnYW5pemF0aW9uSWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKGRhdGEgPz8gW10pIGFzIFJlcG9bXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUmVwb1ZpYUdpdGh1YihcbiAgZm9ybURhdGE6IEZvcm1EYXRhLFxuICBvcmdJZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8UmVwbyB8IHVuZGVmaW5lZD4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IHByb3ZpZGVyID0gZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IHVybCA9IGZvcm1EYXRhLmdldChcImdpdGh1Yi11cmxcIikgYXMgc3RyaW5nO1xuXG4gIGlmICghbmFtZSkge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJOYW1lIGlzIHJlcXVpcmVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGluc3RhbGxhdGlvbiB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJnaXRodWJfaW5zdGFsbGF0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiaW5zdGFsbGVkX2J5XCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghaW5zdGFsbGF0aW9uKSB7XG4gICAgLy8gTm8gR2l0SHViIEFwcCBpbnN0YWxsYXRpb24gLSBwcm9tcHQgdXNlciB0byBpbnN0YWxsXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiSW5zdGFsbGF0aW9uIE5lZWRlZFwiLFxuICAgIH07XG4gIH1cblxuICAvL3BhcnNlIHVybCBmb3Igb3duZXIgYW5kIHJlcG9cbiAgY29uc3QgeyBvd25lciwgcmVwbzogcmVwb05hbWUgfSA9IHBhcnNlR2l0SHViVXJsKHVybCk7XG5cbiAgY29uc3QgaGFzQWNjZXNzID0gYXdhaXQgdmVyaWZ5R2l0aHViUmVwb0FjY2VzcyhcbiAgICBpbnN0YWxsYXRpb24uaWQsXG4gICAgb3duZXIsXG4gICAgcmVwb05hbWUsXG4gICk7XG5cbiAgaWYgKCFoYXNBY2Nlc3MpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBlcnJvcjogXCJBY2Nlc3MgRGVuaWVkXCIsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3I6IHJlcG9FcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAuaW5zZXJ0KHtcbiAgICAgIG5hbWUsXG4gICAgICBwcm92aWRlcixcbiAgICAgIHJlcG9fdXJsOiB1cmwsXG4gICAgICBvcmdhbml6YXRpb25faWQ6IG9yZ0lkLFxuICAgICAgaW5kZXhlZF9ieTogdXNlci5pZCxcbiAgICAgIGluZGV4X3N0YXR1czogXCJub3QgaW5kZXhlZFwiLFxuICAgIH0pXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChyZXBvRXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHJlcG9FcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXBvIGFzIFJlcG8gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVJlcG9WaWFHaXRsYWIoXG4gIGZvcm1EYXRhOiBGb3JtRGF0YSxcbiAgb3JnSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFJlcG8gfCB1bmRlZmluZWQ+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICBjb25zdCBwcm92aWRlciA9IGZvcm1EYXRhLmdldChcInR5cGVcIikgYXMgc3RyaW5nO1xuICBjb25zdCB1cmwgPSBmb3JtRGF0YS5nZXQoXCJnaXRsYWItdXJsXCIpIGFzIHN0cmluZztcblxuICAvLyBWYWxpZGF0ZSBpbnB1dHNcbiAgaWYgKCFuYW1lIHx8IG5hbWUudHJpbSgpID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlJlcG9zaXRvcnkgbmFtZSBpcyByZXF1aXJlZFwiIH07XG4gIH1cblxuICBpZiAoIXVybCB8fCB1cmwudHJpbSgpID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkdpdExhYiBVUkwgaXMgcmVxdWlyZWRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBpbnN0YWxsYXRpb24gfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZ2l0bGFiX2luc3RhbGxhdGlvbnNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImluc3RhbGxlZF9ieVwiLCB1c2VyLmlkKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoIWluc3RhbGxhdGlvbikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJJbnN0YWxsYXRpb24gTmVlZGVkXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgb3duZXIsIHJlcG86IHJlcG9OYW1lIH0gPSBwYXJzZUdpdExhYlVybCh1cmwpO1xuXG4gIC8vdmVyaWZ5IGFjY2Vzc1xuICBjb25zdCBoYXNBY2Nlc3MgPSBhd2FpdCB2ZXJpZnlHaXRMYWJSZXBvQWNjZXNzKFxuICAgIGluc3RhbGxhdGlvbi5hY2Nlc3NfdG9rZW4sXG4gICAgb3duZXIsXG4gICAgcmVwb05hbWUsXG4gICk7XG5cbiAgaWYgKCFoYXNBY2Nlc3MpIHtcbiAgICBpZiAoaW5zdGFsbGF0aW9uLmFjY2Vzc190b2tlbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIGVycm9yOiBcIkFjY2VzcyByZXF1aXJlZCFcIixcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiQWNjZXNzIGRlbmllZCFcIixcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvcjogcmVwb0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgIC5pbnNlcnQoe1xuICAgICAgbmFtZSxcbiAgICAgIHByb3ZpZGVyLFxuICAgICAgcmVwb191cmw6IHVybCxcbiAgICAgIG9yZ2FuaXphdGlvbl9pZDogb3JnSWQsXG4gICAgICBpbmRleGVkX2J5OiB1c2VyLmlkLFxuICAgICAgaW5kZXhfc3RhdHVzOiBcIm5vdCBpbmRleGVkXCIsXG4gICAgfSlcbiAgICAuc2VsZWN0KClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKHJlcG9FcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogcmVwb0Vycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlcG8gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVJlcG9WaWFMb2NhbEZpbGUoXG4gIGZvcm1EYXRhOiBGb3JtRGF0YSxcbiAgb3JnSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFJlcG8+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KFwiZmlsZVwiKSBhcyBGaWxlO1xuXG4gIC8vIFZhbGlkYXRlIGlucHV0c1xuICBpZiAoIW5hbWUgfHwgbmFtZS50cmltKCkgPT09IFwiXCIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUmVwb3NpdG9yeSBuYW1lIGlzIHJlcXVpcmVkXCIgfTtcbiAgfVxuXG4gIGlmICghZmlsZSkge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGaWxlIGlzIHJlcXVpcmVkXCIgfTtcbiAgfVxuXG4gIC8vIFZhbGlkYXRlIGZpbGUgdHlwZVxuICBpZiAoIWZpbGUubmFtZS5lbmRzV2l0aChcIi56aXBcIikpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiT25seSAuemlwIGZpbGVzIGFyZSBhbGxvd2VkXCIgfTtcbiAgfVxuXG4gIC8vIFZhbGlkYXRlIGZpbGUgc2l6ZSAobWF4IDEwME1CKVxuICBjb25zdCBtYXhTaXplID0gMTAwICogMTAyNCAqIDEwMjQ7IC8vIDEwME1CIGluIGJ5dGVzXG4gIGlmIChmaWxlLnNpemUgPiBtYXhTaXplKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiRmlsZSBzaXplIGV4Y2VlZHMgMTAwTUIgbGltaXRcIixcbiAgICB9O1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBHZW5lcmF0ZSBhIHVuaXF1ZSBmaWxlIG5hbWUgdG8gcHJldmVudCBjb2xsaXNpb25zXG4gICAgY29uc3QgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBzYW5pdGl6ZWROYW1lID0gbmFtZS50cmltKCkucmVwbGFjZSgvW15hLXowLTktX10vZ2ksIFwiX1wiKTtcbiAgICBjb25zdCBmaWxlTmFtZSA9IGAke3Nhbml0aXplZE5hbWV9XyR7dGltZXN0YW1wfV8ke2ZpbGUubmFtZX1gO1xuICAgIGNvbnN0IGZpbGVQYXRoID0gYCR7b3JnSWR9LyR7ZmlsZU5hbWV9YDtcblxuICAgIC8vIFVwbG9hZCBmaWxlIHRvIFN1cGFiYXNlIFN0b3JhZ2VcbiAgICBjb25zdCB7IGVycm9yOiB1cGxvYWRFcnJvciB9ID0gYXdhaXQgY2xpZW50LnN0b3JhZ2VcbiAgICAgIC5mcm9tKFwibG9jYWxfcmVwb3NcIilcbiAgICAgIC51cGxvYWQoZmlsZVBhdGgsIGZpbGUsIHtcbiAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vemlwXCIsXG4gICAgICAgIHVwc2VydDogZmFsc2UsXG4gICAgICB9KTtcblxuICAgIGlmICh1cGxvYWRFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIlVwbG9hZCBlcnJvcjpcIiwgdXBsb2FkRXJyb3IpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIGVycm9yOiBgRmlsZSB1cGxvYWQgZmFpbGVkOiAke3VwbG9hZEVycm9yLm1lc3NhZ2V9YCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gR2V0IHRoZSBwdWJsaWMgVVJMIGZvciB0aGUgdXBsb2FkZWQgZmlsZVxuICAgIGNvbnN0IHsgZGF0YTogdXJsRGF0YSB9ID0gY2xpZW50LnN0b3JhZ2VcbiAgICAgIC5mcm9tKFwibG9jYWxfcmVwb3NcIilcbiAgICAgIC5nZXRQdWJsaWNVcmwoZmlsZVBhdGgpO1xuXG4gICAgLy8gQ3JlYXRlIHJlcG9zaXRvcnkgcmVjb3JkIGluIGRhdGFiYXNlXG4gICAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvcjogcmVwb0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgICAuaW5zZXJ0KHtcbiAgICAgICAgbmFtZTogbmFtZS50cmltKCksXG4gICAgICAgIHByb3ZpZGVyOiBcImxvY2FsXCIsXG4gICAgICAgIHJlcG9fdXJsOiBudWxsLFxuICAgICAgICBvYmplY3RfdXJsOiB1cmxEYXRhLnB1YmxpY1VybCxcbiAgICAgICAgb3JnYW5pemF0aW9uX2lkOiBvcmdJZCxcbiAgICAgICAgaW5kZXhlZF9ieTogdXNlci5pZCxcbiAgICAgICAgaW5kZXhfc3RhdHVzOiBcIm5vdCBpbmRleGVkXCIsXG4gICAgICB9KVxuICAgICAgLnNlbGVjdCgpXG4gICAgICAuc2luZ2xlKCk7XG5cbiAgICBpZiAocmVwb0Vycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiUmVwb3NpdG9yeSBjcmVhdGlvbiBlcnJvcjpcIiwgcmVwb0Vycm9yKTtcbiAgICAgIC8vIEF0dGVtcHQgdG8gY2xlYW4gdXAgdXBsb2FkZWQgZmlsZVxuICAgICAgYXdhaXQgY2xpZW50LnN0b3JhZ2UuZnJvbShcImxvY2FsX3JlcG9zXCIpLnJlbW92ZShbZmlsZVBhdGhdKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogYFJlcG9zaXRvcnkgY3JlYXRpb24gZmFpbGVkOiAke3JlcG9FcnJvci5tZXNzYWdlfWAsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlcG8gYXMgUmVwbyB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJVbmV4cGVjdGVkIGVycm9yOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6XG4gICAgICAgIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkXCIsXG4gICAgfTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSZXBvc2l0b3J5IE1hbmFnZW1lbnQgU2VydmljZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlcG9XaXRoU3RhdHVzKFxuICByZXBvSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFJlcG8+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImlkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICBpZiAoIXJlcG8pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUmVwb3NpdG9yeSBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVwbyBhcyBSZXBvIH07XG59XG5cbnR5cGUgVXBkYXRlRGF0YSA9IHtcbiAgbmFtZT86IHN0cmluZztcbiAgcmVwb191cmw/OiBzdHJpbmc7XG4gIG9iamVjdF91cmw/OiBzdHJpbmc7XG4gIGluZGV4X3N0YXR1cz86IHN0cmluZztcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVSZXBvU2V0dGluZ3MoXG4gIHJlcG9JZDogc3RyaW5nLFxuICBzZXR0aW5nczogeyBuYW1lPzogc3RyaW5nOyByZXBvX3VybD86IHN0cmluZzsgZmlsZT86IEZpbGUgfSxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFJlcG8+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gR2V0IHRoZSBjdXJyZW50IHJlcG8gdG8gY2hlY2sgaXRzIHByb3ZpZGVyIHR5cGVcbiAgY29uc3QgeyBkYXRhOiBjdXJyZW50UmVwbyB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImlkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKCFjdXJyZW50UmVwbykge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJSZXBvc2l0b3J5IG5vdCBmb3VuZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgdXBkYXRlRGF0YTogVXBkYXRlRGF0YSA9IHt9O1xuXG4gIC8vIEhhbmRsZSBuYW1lIHVwZGF0ZVxuICBpZiAoc2V0dGluZ3MubmFtZSkge1xuICAgIHVwZGF0ZURhdGEubmFtZSA9IHNldHRpbmdzLm5hbWU7XG4gIH1cblxuICAvLyBIYW5kbGUgR2l0SHViIFVSTCB1cGRhdGVcbiAgaWYgKHNldHRpbmdzLnJlcG9fdXJsICYmIGN1cnJlbnRSZXBvLnByb3ZpZGVyID09PSBcImdpdGh1YlwiKSB7XG4gICAgY29uc3QgeyBvd25lciwgcmVwbyB9ID0gcGFyc2VHaXRIdWJVcmwoc2V0dGluZ3MucmVwb191cmwpO1xuXG4gICAgaWYgKCFvd25lciB8fCAhcmVwbykge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkludmFsaWQgR2l0SHViIFVSTCBmb3JtYXQhXCIgfTtcbiAgICB9XG5cbiAgICAvLyBWZXJpZnkgYWNjZXNzIHRvIHRoZSBuZXcgcmVwb1xuICAgIGNvbnN0IHsgZGF0YTogaW5zdGFsbGF0aW9uIH0gPSBhd2FpdCBjbGllbnRcbiAgICAgIC5mcm9tKFwiZ2l0aHViX2luc3RhbGxhdGlvbnNcIilcbiAgICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgICAuZXEoXCJpbnN0YWxsZWRfYnlcIiwgdXNlci5pZClcbiAgICAgIC5zaW5nbGUoKTtcblxuICAgIGlmICghaW5zdGFsbGF0aW9uKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiR2l0SHViIEFwcCBub3QgaW5zdGFsbGVkIVwiIH07XG4gICAgfVxuXG4gICAgY29uc3QgaGFzQWNjZXNzID0gYXdhaXQgdmVyaWZ5R2l0aHViUmVwb0FjY2VzcyhcbiAgICAgIGluc3RhbGxhdGlvbi5pbnN0YWxsYXRpb25faWQudG9TdHJpbmcoKSxcbiAgICAgIG93bmVyLFxuICAgICAgcmVwbyxcbiAgICApO1xuXG4gICAgaWYgKCFoYXNBY2Nlc3MpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjpcbiAgICAgICAgICBcIkNhbm5vdCBhY2Nlc3MgdGhpcyByZXBvc2l0b3J5LiBNYWtlIHN1cmUgdGhlIEdpdEh1YiBBcHAgaXMgaW5zdGFsbGVkIGZvciB0aGlzIHJlcG9zaXRvcnkuXCIsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHVwZGF0ZURhdGEucmVwb191cmwgPSBzZXR0aW5ncy5yZXBvX3VybDtcbiAgICB1cGRhdGVEYXRhLmluZGV4X3N0YXR1cyA9IFwibm90IGluZGV4ZWRcIjsgLy8gVHJpZ2dlciByZS1pbmRleGluZ1xuICB9XG5cbiAgLy8gSGFuZGxlIGxvY2FsIGZpbGUgdXBsb2FkXG4gIGlmIChzZXR0aW5ncy5maWxlICYmIGN1cnJlbnRSZXBvLnByb3ZpZGVyID09PSBcImxvY2FsXCIpIHtcbiAgICBjb25zdCBmaWxlID0gc2V0dGluZ3MuZmlsZTtcbiAgICBjb25zdCBmaWxlRXh0ID0gZmlsZS5uYW1lLnNwbGl0KFwiLlwiKS5wb3AoKTtcblxuICAgIGlmIChmaWxlRXh0ICE9PSBcInppcFwiKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiT25seSAuemlwIGZpbGVzIGFyZSBhbGxvd2VkIVwiIH07XG4gICAgfVxuXG4gICAgLy8gVXBsb2FkIHRvIFN1cGFiYXNlIFN0b3JhZ2VcbiAgICBjb25zdCBmaWxlTmFtZSA9IGAke3JlcG9JZH0tJHtEYXRlLm5vdygpfS56aXBgO1xuICAgIGNvbnN0IHsgZGF0YTogdXBsb2FkRGF0YSwgZXJyb3I6IHVwbG9hZEVycm9yIH0gPSBhd2FpdCBjbGllbnQuc3RvcmFnZVxuICAgICAgLmZyb20oXCJsb2NhbF9yZXBvc1wiKVxuICAgICAgLnVwbG9hZChmaWxlTmFtZSwgZmlsZSk7XG5cbiAgICBpZiAodXBsb2FkRXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IodXBsb2FkRXJyb3IpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkZhaWxlZCB0byB1cGxvYWQgZmlsZSFcIiB9O1xuICAgIH1cblxuICAgIC8vIEdldCBwdWJsaWMgVVJMXG4gICAgY29uc3QgeyBkYXRhOiB1cmxEYXRhIH0gPSBjbGllbnQuc3RvcmFnZVxuICAgICAgLmZyb20oXCJsb2NhbF9yZXBvc1wiKVxuICAgICAgLmdldFB1YmxpY1VybChmaWxlTmFtZSk7XG5cbiAgICB1cGRhdGVEYXRhLm9iamVjdF91cmwgPSB1cmxEYXRhLnB1YmxpY1VybDtcbiAgICB1cGRhdGVEYXRhLmluZGV4X3N0YXR1cyA9IFwicGVuZGluZ1wiOyAvLyBUcmlnZ2VyIHJlLWluZGV4aW5nXG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIHJlcG9zaXRvcnlcbiAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAudXBkYXRlKHVwZGF0ZURhdGEpXG4gICAgLmVxKFwiaWRcIiwgcmVwb0lkKVxuICAgIC5zZWxlY3QoKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlcG8gYXMgUmVwbyB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUmVwbyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDx7IG9yZ2FuaXphdGlvbklkOiBzdHJpbmcgfT4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICAvLyBGZXRjaCB0aGUgb3JnYW5pemF0aW9uX2lkIGJlZm9yZSBkZWxldGluZ1xuICBjb25zdCB7IGRhdGE6IHJlcG8sIGVycm9yOiByZXBvRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIm9yZ2FuaXphdGlvbl9pZFwiKVxuICAgIC5lcShcImlkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKHJlcG9FcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IocmVwb0Vycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHJlcG9FcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICBpZiAoIXJlcG8pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUmVwb3NpdG9yeSBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgY2xpZW50LmZyb20oXCJyZXBvc2l0b3JpZXNcIikuZGVsZXRlKCkuZXEoXCJpZFwiLCByZXBvSWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogeyBvcmdhbml6YXRpb25JZDogcmVwby5vcmdhbml6YXRpb25faWQgfSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJpZ2dlclJlaW5kZXgoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8dm9pZD4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIGluZGV4X3N0YXR1cyB0byAncGVuZGluZycgdG8gdHJpZ2dlciByZWluZGV4aW5nXG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnVwZGF0ZSh7IGluZGV4X3N0YXR1czogXCJwZW5kaW5nXCIgfSlcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgLy8gVE9ETzogVHJpZ2dlciBhY3R1YWwgaW5kZXhpbmcgam9iL3dlYmhvb2svcXVldWUgaGVyZVxuICAvLyBUaGlzIGNvdWxkIGJlIGFuIEFQSSBjYWxsIHRvIHlvdXIgaW5kZXhpbmcgc2VydmljZVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVuZGVmaW5lZCB9O1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEb2N1bWVudGF0aW9uIFNlcnZpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2N1bWVudGF0aW9uKFxuICByZXBvSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PERvY3VtZW50YXRpb24+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBkb2N1bWVudGF0aW9uLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJkb2N1bWVudGF0aW9uXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJyZXBvX2lkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICBpZiAoIWRvY3VtZW50YXRpb24pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRG9jdW1lbnRhdGlvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogZG9jdW1lbnRhdGlvbiBhcyBEb2N1bWVudGF0aW9uIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2NQYWdlcyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2NQYWdlW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gR2V0IHRoZSBsYXRlc3QgZG9jdW1lbnRhdGlvbiB2ZXJzaW9uIGZvciB0aGlzIHJlcG9cbiAgY29uc3QgeyBkYXRhOiBkb2N1bWVudGF0aW9uLCBlcnJvcjogZG9jRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCJpZFwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5vcmRlcihcInZlcnNpb25cIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXG4gICAgLmxpbWl0KDEpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChkb2NFcnJvciB8fCAhZG9jdW1lbnRhdGlvbikge1xuICAgIGNvbnNvbGUuZXJyb3IoZG9jRXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJEb2N1bWVudGF0aW9uIG5vdCBmb3VuZFwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IHBhZ2VzLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJwYWdlc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiZG9jdW1lbnRhdGlvbl9pZFwiLCBkb2N1bWVudGF0aW9uLmlkKVxuICAgIC5vcmRlcihcIm9yZGVyX2luZGV4XCIsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKHBhZ2VzID8/IFtdKSBhcyBEb2NQYWdlW10gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERvY1BhZ2VCeUlkKFxuICBwYWdlSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PERvY1BhZ2U+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdlLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJkb2NfcGFnZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImlkXCIsIHBhZ2VJZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICBpZiAoIXBhZ2UpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUGFnZSBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcGFnZSBhcyBEb2NQYWdlIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2NQYWdlc0hpZXJhcmNoaWNhbChcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2NQYWdlW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gRmlyc3QgZ2V0IHRoZSBkb2N1bWVudGF0aW9uIElEIGZvciB0aGlzIHJlcG9cbiAgY29uc3QgeyBkYXRhOiBkb2N1bWVudGF0aW9uLCBlcnJvcjogZG9jRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCJpZFwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZG9jRXJyb3IgfHwgIWRvY3VtZW50YXRpb24pIHtcbiAgICBjb25zb2xlLmVycm9yKGRvY0Vycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRG9jdW1lbnRhdGlvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdlcywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jX3BhZ2VzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJkb2N1bWVudGF0aW9uX2lkXCIsIGRvY3VtZW50YXRpb24uaWQpXG4gICAgLm9yZGVyKFwib3JkZXJfaW5kZXhcIiwgeyBhc2NlbmRpbmc6IHRydWUgfSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICAvLyBQYWdlcyBhcmUgYWxyZWFkeSBzb3J0ZWQgYnkgb3JkZXJfaW5kZXhcbiAgLy8gVGhlIHBhcmVudF9wYWdlX2lkIGZpZWxkIG1haW50YWlucyB0aGUgaGllcmFyY2h5XG4gIC8vIEZyb250ZW5kIGNhbiB1c2UgdGhpcyB0byByZW5kZXIgdGhlIHRyZWUgc3RydWN0dXJlXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChwYWdlcyA/PyBbXSkgYXMgRG9jUGFnZVtdIH07XG59XG5cbi8qKlxuICogR2V0IGFsbCBkb2N1bWVudGF0aW9uIHZlcnNpb25zIGZvciBhIHJlcG9zaXRvcnlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERvY3VtZW50YXRpb25WZXJzaW9ucyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2N1bWVudGF0aW9uW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiB2ZXJzaW9ucywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLm9yZGVyKFwidmVyc2lvblwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiAodmVyc2lvbnMgPz8gW10pIGFzIERvY3VtZW50YXRpb25bXSB9O1xufVxuXG4vKipcbiAqIEdldCB0aGUgbGF0ZXN0IGNvbXBsZXRlZCBkb2N1bWVudGF0aW9uIHZlcnNpb24gZm9yIGEgcmVwb3NpdG9yeVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGF0ZXN0RG9jdW1lbnRhdGlvbihcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2N1bWVudGF0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogZG9jdW1lbnRhdGlvbiwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLm9yZGVyKFwidmVyc2lvblwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcbiAgICAubGltaXQoMSlcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKCFkb2N1bWVudGF0aW9uKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkRvY3VtZW50YXRpb24gbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogZG9jdW1lbnRhdGlvbiBhcyBEb2N1bWVudGF0aW9uIH07XG59XG5cbi8qKlxuICogR2V0IGRvY3VtZW50YXRpb24gcGFnZXMgZm9yIGEgc3BlY2lmaWMgdmVyc2lvblxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jUGFnZXNGb3JWZXJzaW9uKFxuICByZXBvSWQ6IHN0cmluZyxcbiAgdmVyc2lvbjogbnVtYmVyLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jUGFnZVtdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIC8vIEdldCB0aGUgZG9jdW1lbnRhdGlvbiByZWNvcmQgZm9yIHRoaXMgdmVyc2lvblxuICBjb25zdCB7IGRhdGE6IGRvY3VtZW50YXRpb24sIGVycm9yOiBkb2NFcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJkb2N1bWVudGF0aW9uXCIpXG4gICAgLnNlbGVjdChcImlkXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLmVxKFwidmVyc2lvblwiLCB2ZXJzaW9uKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZG9jRXJyb3IgfHwgIWRvY3VtZW50YXRpb24pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRG9jdW1lbnRhdGlvbiB2ZXJzaW9uIG5vdCBmb3VuZFwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IHBhZ2VzLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJwYWdlc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiZG9jdW1lbnRhdGlvbl9pZFwiLCBkb2N1bWVudGF0aW9uLmlkKVxuICAgIC5vcmRlcihcIm9yZGVyX2luZGV4XCIsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKHBhZ2VzID8/IFtdKSBhcyBEb2NQYWdlW10gfTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ29udmVyc2F0aW9uIFNlcnZpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb252ZXJzYXRpb25zKFxuICByZXBvSWQ6IHN0cmluZyxcbiAgbGltaXQ6IG51bWJlciA9IDIwLFxuICB2ZXJzaW9uOiBudW1iZXIgfCBudWxsID0gbnVsbCxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbltdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGxldCBxdWVyeSA9IGNsaWVudFxuICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKTtcblxuICAvLyBGaWx0ZXIgYnkgdmVyc2lvbiBpZiBzcGVjaWZpZWRcbiAgaWYgKHZlcnNpb24gIT09IG51bGwgJiYgdmVyc2lvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcXVlcnkgPSBxdWVyeS5lcShcInJlcG9fdmVyc2lvblwiLCB2ZXJzaW9uKTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogY29udmVyc2F0aW9ucywgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5XG4gICAgLm9yZGVyKFwidXBkYXRlZF9hdFwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcbiAgICAubGltaXQobGltaXQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKGNvbnZlcnNhdGlvbnMgPz8gW10pIGFzIENvbnZlcnNhdGlvbltdIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb252ZXJzYXRpb25CeUlkKFxuICBjb252ZXJzYXRpb25JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29udmVyc2F0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogY29udmVyc2F0aW9uLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpZFwiLCBjb252ZXJzYXRpb25JZClcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFjb252ZXJzYXRpb24pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiQ29udmVyc2F0aW9uIG5vdCBmb3VuZFwiIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjb252ZXJzYXRpb24gYXMgQ29udmVyc2F0aW9uIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDb252ZXJzYXRpb24oXG4gIHJlcG9JZDogc3RyaW5nLFxuICB0aXRsZT86IHN0cmluZyxcbiAgdmVyc2lvbj86IG51bWJlciB8IG51bGwsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxDb252ZXJzYXRpb24+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBjb252ZXJzYXRpb24sIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAuaW5zZXJ0KHtcbiAgICAgIHJlcG9faWQ6IHJlcG9JZCxcbiAgICAgIHVzZXJfaWQ6IHVzZXIuaWQsXG4gICAgICB0aXRsZTogdGl0bGUgfHwgXCJOZXcgQ29udmVyc2F0aW9uXCIsXG4gICAgICByZXBvX3ZlcnNpb246IHZlcnNpb24gPz8gbnVsbCxcbiAgICB9KVxuICAgIC5zZWxlY3QoKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGNvbnZlcnNhdGlvbiBhcyBDb252ZXJzYXRpb24gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNvbnZlcnNhdGlvbihcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PHZvaWQ+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLmRlbGV0ZSgpXG4gICAgLmVxKFwiaWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVuZGVmaW5lZCB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVuYW1lQ29udmVyc2F0aW9uKFxuICBjb252ZXJzYXRpb25JZDogc3RyaW5nLFxuICBuZXdUaXRsZTogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29udmVyc2F0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogY29udmVyc2F0aW9uLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLnVwZGF0ZSh7IHRpdGxlOiBuZXdUaXRsZSB9KVxuICAgIC5lcShcImlkXCIsIGNvbnZlcnNhdGlvbklkKVxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlci5pZClcbiAgICAuc2VsZWN0KClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjb252ZXJzYXRpb24gYXMgQ29udmVyc2F0aW9uIH07XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1lc3NhZ2UgU2VydmljZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvbnZlcnNhdGlvbk1lc3NhZ2VzKFxuICBjb252ZXJzYXRpb25JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29udmVyc2F0aW9uTWVzc2FnZVtdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogbWVzc2FnZXMsIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcIm1lc3NhZ2VzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJjb252ZXJzYXRpb25faWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgLm9yZGVyKFwiY3JlYXRlZF9hdFwiLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChtZXNzYWdlcyA/PyBbXSkgYXMgQ29udmVyc2F0aW9uTWVzc2FnZVtdIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVNZXNzYWdlKFxuICBjb252ZXJzYXRpb25JZDogc3RyaW5nLFxuICByb2xlOiBcInVzZXJcIiB8IFwiYXNzaXN0YW50XCIsXG4gIGNvbnRlbnQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbk1lc3NhZ2U+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBtZXNzYWdlLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJtZXNzYWdlc1wiKVxuICAgIC5pbnNlcnQoe1xuICAgICAgY29udmVyc2F0aW9uX2lkOiBjb252ZXJzYXRpb25JZCxcbiAgICAgIHJvbGUsXG4gICAgICBjb250ZW50LFxuICAgIH0pXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSBjb252ZXJzYXRpb24ncyB1cGRhdGVkX2F0IHRpbWVzdGFtcFxuICBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAudXBkYXRlKHsgdXBkYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpIH0pXG4gICAgLmVxKFwiaWRcIiwgY29udmVyc2F0aW9uSWQpO1xuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IG1lc3NhZ2UgYXMgQ29udmVyc2F0aW9uTWVzc2FnZSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZUNvZGVTbmlwcGV0cyhcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbiAgbWVzc2FnZUlkOiBzdHJpbmcsXG4gIHNuaXBwZXRzOiBBcnJheTx7IGZpbGU6IHN0cmluZzsgY29kZTogc3RyaW5nIH0+LFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29kZVNuaXBwZXRbXT4+IHtcbiAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCBzbmlwcGV0c1RvSW5zZXJ0ID0gc25pcHBldHMubWFwKChzbmlwcGV0KSA9PiAoe1xuICAgIGNvbnZlcnNhdGlvbl9pZDogY29udmVyc2F0aW9uSWQsXG4gICAgbWVzc2FnZV9pZDogbWVzc2FnZUlkLFxuICAgIGZpbGVfcGF0aDogc25pcHBldC5maWxlLFxuICAgIGNvZGVfY29udGVudDogc25pcHBldC5jb2RlLFxuICAgIGxhbmd1YWdlOiBzbmlwcGV0LmZpbGUuc3BsaXQoXCIuXCIpLnBvcCgpIHx8IG51bGwsXG4gIH0pKTtcblxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKFwiY29kZV9zbmlwcGV0c1wiKVxuICAgIC5pbnNlcnQoc25pcHBldHNUb0luc2VydClcbiAgICAuc2VsZWN0KCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBkYXRhIGFzIENvZGVTbmlwcGV0W10gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvZGVTbmlwcGV0c0ZvckNvbnZlcnNhdGlvbihcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvZGVTbmlwcGV0W10+PiB7XG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbShcImNvZGVfc25pcHBldHNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImNvbnZlcnNhdGlvbl9pZFwiLCBjb252ZXJzYXRpb25JZClcbiAgICAub3JkZXIoXCJjcmVhdGVkX2F0XCIsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGRhdGEgYXMgQ29kZVNuaXBwZXRbXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ29kZVNuaXBwZXQoXG4gIHNuaXBwZXRJZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8bnVsbD4+IHtcbiAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKFwiY29kZV9zbmlwcGV0c1wiKVxuICAgIC5kZWxldGUoKVxuICAgIC5lcShcImlkXCIsIHNuaXBwZXRJZCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBudWxsIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbmRleFJlcG9zaXRvcnkoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8dm9pZD4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGluc3RhbGxhdGlvbiwgZXJyb3I6IGluc3RhbGxhdGlvbkVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImdpdGh1Yl9pbnN0YWxsYXRpb25zXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpbnN0YWxsZWRfYnlcIiwgdXNlci5pZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKCFpbnN0YWxsYXRpb24gfHwgaW5zdGFsbGF0aW9uRXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiR2l0aHViIEFwcCBJbnN0YWxsYXRpb24gbm90IGZvdW5kIVwiIH07XG4gIH1cblxuICAvL2ZldGNoIHJlcG9cblxuICBjb25zdCByZXBvUmVzdWx0ID0gYXdhaXQgZ2V0UmVwb1dpdGhTdGF0dXMocmVwb0lkKTtcblxuICBpZiAoIXJlcG9SZXN1bHQuc3VjY2Vzcykge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogcmVwb1Jlc3VsdC5lcnJvciB9O1xuICB9XG5cbiAgY29uc3QgcmVwb1VybCA9IHJlcG9SZXN1bHQuZGF0YS5yZXBvX3VybDtcbiAgY29uc3QgaW5zdGFsbGF0aW9uSWQgPSBpbnN0YWxsYXRpb24uaW5zdGFsbGF0aW9uX2lkO1xuXG4gIC8vIEdldCB0aGUgbGF0ZXN0IHZlcnNpb24gbnVtYmVyIGZvciB0aGlzIHJlcG9cbiAgY29uc3QgeyBkYXRhOiBsYXRlc3REb2MgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCJ2ZXJzaW9uXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLm9yZGVyKFwidmVyc2lvblwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcbiAgICAubGltaXQoMSlcbiAgICAuc2luZ2xlKCk7XG5cbiAgLy8gSW5jcmVtZW50IHZlcnNpb24gKHN0YXJ0IGF0IDEgaWYgbm8gcHJldmlvdXMgdmVyc2lvbnMpXG4gIGNvbnN0IG5leHRWZXJzaW9uID0gKGxhdGVzdERvYz8udmVyc2lvbiA/PyAwKSArIDE7XG5cbiAgLy9tYXJrIHRoZSByZXBvc2l0b3J5IGFzIGluZGV4aW5nIGluIHN1cGFiYXNlIGZpcnN0XG4gIGNvbnN0IHsgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgIC51cGRhdGUoeyBpbmRleF9zdGF0dXM6IFwiaW5kZXhpbmdcIiB9KVxuICAgIC5lcShcImlkXCIsIHJlcG9JZCk7XG5cbiAgaWYgKHVwZGF0ZUVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcih1cGRhdGVFcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiB1cGRhdGVFcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICAvLyBDYWxsIHRoZSBiYWNrZW5kIHRvIHN0YXJ0IGluZGV4aW5nIChmaXJlLWFuZC1mb3JnZXQpXG4gIC8vIERvbid0IGF3YWl0IG9yIHRocm93IGVycm9ycyBzaW5jZSB0aGlzIGlzIGEgbG9uZy1ydW5uaW5nIG9wZXJhdGlvblxuICBmZXRjaChgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vcmVwb3MvaW5kZXhgLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHJlcG9fdXJsOiByZXBvVXJsLFxuICAgICAgcmVwb19pZDogcmVwb0lkLFxuICAgICAgdXNlcl9pZDogdXNlci5pZCxcbiAgICAgIGluc3RhbGxhdGlvbl9pZDogaW5zdGFsbGF0aW9uSWQsXG4gICAgICBicmFuY2g6IFwibWFpblwiLFxuICAgICAgdmVyc2lvbjogbmV4dFZlcnNpb24sXG4gICAgfSksXG4gIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIC8vIExvZyB0aGUgZXJyb3IgYnV0IGRvbid0IGZhaWwgdGhlIHJlcXVlc3RcbiAgICBjb25zb2xlLmVycm9yKFwiSW5kZXhpbmcgcmVxdWVzdCBmYWlsZWQ6XCIsIGVycm9yKTtcbiAgICAvLyBUaGUgYmFja2VuZCBzaG91bGQgaGFuZGxlIHVwZGF0aW5nIHRoZSByZXBvIHN0YXR1cyBvbiBmYWlsdXJlXG4gIH0pO1xuXG4gIC8vIFJldHVybiBzdWNjZXNzIGltbWVkaWF0ZWx5IC0gdGhlIGluZGV4aW5nIHdpbGwgaGFwcGVuIGluIHRoZSBiYWNrZ3JvdW5kXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVuZGVmaW5lZCB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIyU0FpNkJzQiJ9
}),
"[project]/src/lib/services/data:563c3b [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"705308f3cacbf0c56038f0d34b9ad3b7e1087a50f1":"createMessage"},"src/lib/services/repoService.ts",""] */ __turbopack_context__.s([
    "createMessage",
    ()=>createMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var createMessage = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("705308f3cacbf0c56038f0d34b9ad3b7e1087a50f1", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createMessage"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcmVwb1NlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAL3V0aWxzL3N1cGFiYXNlL3NlcnZlclwiO1xuaW1wb3J0IHtcbiAgUmVwbyxcbiAgRG9jdW1lbnRhdGlvbixcbiAgRG9jUGFnZSxcbiAgQ29udmVyc2F0aW9uLFxuICBDb252ZXJzYXRpb25NZXNzYWdlLFxuICBDb2RlU25pcHBldCxcbn0gZnJvbSBcIkAvYXBwL3R5cGVzL3N1cGFiYXNlXCI7XG5pbXBvcnQgeyBBY3Rpb25SZXN1bHQgfSBmcm9tIFwiQC9hcHAvdHlwZXMvYWN0aW9uXCI7XG5pbXBvcnQge1xuICB2ZXJpZnlHaXRodWJSZXBvQWNjZXNzLFxuICB2ZXJpZnlHaXRMYWJSZXBvQWNjZXNzLFxufSBmcm9tIFwiLi9naXRQcm92aWRlclNlcnZpY2VcIjtcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHBhcnNlIEdpdEh1YiBVUkxzXG5mdW5jdGlvbiBwYXJzZUdpdEh1YlVybCh1cmw6IHN0cmluZyk6IHsgb3duZXI6IHN0cmluZzsgcmVwbzogc3RyaW5nIH0ge1xuICB0cnkge1xuICAgIC8vIEhhbmRsZSBtdWx0aXBsZSBmb3JtYXRzOlxuICAgIC8vIC0gaHR0cHM6Ly9naXRodWIuY29tL293bmVyL3JlcG9cbiAgICAvLyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9vd25lci9yZXBvLmdpdFxuICAgIC8vIC0gZ2l0QGdpdGh1Yi5jb206b3duZXIvcmVwby5naXRcblxuICAgIHVybCA9IHVybC50cmltKCkucmVwbGFjZSgvXFwuZ2l0JC8sIFwiXCIpO1xuXG4gICAgaWYgKHVybC5pbmNsdWRlcyhcImdpdGh1Yi5jb20vXCIpKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IHVybC5zcGxpdChcImdpdGh1Yi5jb20vXCIpWzFdLnNwbGl0KFwiL1wiKTtcbiAgICAgIHJldHVybiB7IG93bmVyOiBwYXJ0c1swXSwgcmVwbzogcGFydHNbMV0gfTtcbiAgICB9XG5cbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoXCJnaXRAZ2l0aHViLmNvbTpcIikpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gdXJsLnJlcGxhY2UoXCJnaXRAZ2l0aHViLmNvbTpcIiwgXCJcIikuc3BsaXQoXCIvXCIpO1xuICAgICAgcmV0dXJuIHsgb3duZXI6IHBhcnRzWzBdLCByZXBvOiBwYXJ0c1sxXSB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IG93bmVyOiBcIlwiLCByZXBvOiBcIlwiIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgb3duZXI6IFwiXCIsIHJlcG86IFwiXCIgfTtcbiAgfVxufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gcGFyc2UgR2l0TGFiIFVSTHNcbmZ1bmN0aW9uIHBhcnNlR2l0TGFiVXJsKHVybDogc3RyaW5nKTogeyBvd25lcjogc3RyaW5nOyByZXBvOiBzdHJpbmcgfSB7XG4gIHRyeSB7XG4gICAgLy8gSGFuZGxlIG11bHRpcGxlIGZvcm1hdHM6XG4gICAgLy8gLSBodHRwczovL2dpdGxhYi5jb20vb3duZXIvcmVwb1xuICAgIC8vIC0gaHR0cHM6Ly9naXRsYWIuY29tL293bmVyL3N1Ymdyb3VwL3JlcG9cbiAgICAvLyAtIGh0dHBzOi8vZ2l0bGFiLmNvbS9vd25lci9yZXBvLmdpdFxuICAgIC8vIC0gZ2l0QGdpdGxhYi5jb206b3duZXIvcmVwby5naXRcbiAgICAvLyAtIFNlbGYtaG9zdGVkOiBodHRwczovL2dpdGxhYi5leGFtcGxlLmNvbS9vd25lci9yZXBvXG5cbiAgICB1cmwgPSB1cmwudHJpbSgpLnJlcGxhY2UoL1xcLmdpdCQvLCBcIlwiKTtcblxuICAgIC8vIEhhbmRsZSBIVFRQUyBVUkxzIChnaXRsYWIuY29tIG9yIHNlbGYtaG9zdGVkKVxuICAgIGlmICh1cmwuaW5jbHVkZXMoXCJnaXRsYWIuY29tL1wiKSB8fCAvZ2l0bGFiXFwuW14vXStcXC8vLnRlc3QodXJsKSkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgcGF0aCBhZnRlciB0aGUgZG9tYWluXG4gICAgICBjb25zdCBtYXRjaCA9IHVybC5tYXRjaCgvZ2l0bGFiW14vXSpcXC8oLispLyk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgY29uc3QgcGF0aFBhcnRzID0gbWF0Y2hbMV0uc3BsaXQoXCIvXCIpO1xuICAgICAgICAvLyBHaXRMYWIgc3VwcG9ydHMgbmVzdGVkIGdyb3Vwcywgc28gd2UgbmVlZCB0byBoYW5kbGU6XG4gICAgICAgIC8vIC0gb3duZXIvcmVwbyAoMiBwYXJ0cylcbiAgICAgICAgLy8gLSBvd25lci9zdWJncm91cC9yZXBvICgzKyBwYXJ0cylcbiAgICAgICAgaWYgKHBhdGhQYXJ0cy5sZW5ndGggPj0gMikge1xuICAgICAgICAgIC8vIFRha2UgZXZlcnl0aGluZyBleGNlcHQgdGhlIGxhc3QgcGFydCBhcyBvd25lci9ncm91cFxuICAgICAgICAgIGNvbnN0IHJlcG8gPSBwYXRoUGFydHNbcGF0aFBhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IG93bmVyID0gcGF0aFBhcnRzLnNsaWNlKDAsIC0xKS5qb2luKFwiL1wiKTtcbiAgICAgICAgICByZXR1cm4geyBvd25lciwgcmVwbyB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIFNTSCBVUkxzXG4gICAgaWYgKHVybC5zdGFydHNXaXRoKFwiZ2l0QGdpdGxhYi5jb206XCIpIHx8IC9naXRAZ2l0bGFiXFwuW146XSs6Ly50ZXN0KHVybCkpIHtcbiAgICAgIGNvbnN0IG1hdGNoID0gdXJsLm1hdGNoKC9naXRAZ2l0bGFiW146XSo6KC4rKS8pO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGNvbnN0IHBhdGhQYXJ0cyA9IG1hdGNoWzFdLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgaWYgKHBhdGhQYXJ0cy5sZW5ndGggPj0gMikge1xuICAgICAgICAgIGNvbnN0IHJlcG8gPSBwYXRoUGFydHNbcGF0aFBhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IG93bmVyID0gcGF0aFBhcnRzLnNsaWNlKDAsIC0xKS5qb2luKFwiL1wiKTtcbiAgICAgICAgICByZXR1cm4geyBvd25lciwgcmVwbyB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgb3duZXI6IFwiXCIsIHJlcG86IFwiXCIgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBvd25lcjogXCJcIiwgcmVwbzogXCJcIiB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXBvc0J5T3JnYW5pemF0aW9uSWQoXG4gIG9yZ2FuaXphdGlvbklkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHVzZXIgPSBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJvcmdhbml6YXRpb25faWRcIiwgb3JnYW5pemF0aW9uSWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKGRhdGEgPz8gW10pIGFzIFJlcG9bXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUmVwb1ZpYUdpdGh1YihcbiAgZm9ybURhdGE6IEZvcm1EYXRhLFxuICBvcmdJZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8UmVwbyB8IHVuZGVmaW5lZD4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IHByb3ZpZGVyID0gZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IHVybCA9IGZvcm1EYXRhLmdldChcImdpdGh1Yi11cmxcIikgYXMgc3RyaW5nO1xuXG4gIGlmICghbmFtZSkge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJOYW1lIGlzIHJlcXVpcmVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGluc3RhbGxhdGlvbiB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJnaXRodWJfaW5zdGFsbGF0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiaW5zdGFsbGVkX2J5XCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghaW5zdGFsbGF0aW9uKSB7XG4gICAgLy8gTm8gR2l0SHViIEFwcCBpbnN0YWxsYXRpb24gLSBwcm9tcHQgdXNlciB0byBpbnN0YWxsXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiSW5zdGFsbGF0aW9uIE5lZWRlZFwiLFxuICAgIH07XG4gIH1cblxuICAvL3BhcnNlIHVybCBmb3Igb3duZXIgYW5kIHJlcG9cbiAgY29uc3QgeyBvd25lciwgcmVwbzogcmVwb05hbWUgfSA9IHBhcnNlR2l0SHViVXJsKHVybCk7XG5cbiAgY29uc3QgaGFzQWNjZXNzID0gYXdhaXQgdmVyaWZ5R2l0aHViUmVwb0FjY2VzcyhcbiAgICBpbnN0YWxsYXRpb24uaWQsXG4gICAgb3duZXIsXG4gICAgcmVwb05hbWUsXG4gICk7XG5cbiAgaWYgKCFoYXNBY2Nlc3MpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBlcnJvcjogXCJBY2Nlc3MgRGVuaWVkXCIsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3I6IHJlcG9FcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAuaW5zZXJ0KHtcbiAgICAgIG5hbWUsXG4gICAgICBwcm92aWRlcixcbiAgICAgIHJlcG9fdXJsOiB1cmwsXG4gICAgICBvcmdhbml6YXRpb25faWQ6IG9yZ0lkLFxuICAgICAgaW5kZXhlZF9ieTogdXNlci5pZCxcbiAgICAgIGluZGV4X3N0YXR1czogXCJub3QgaW5kZXhlZFwiLFxuICAgIH0pXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChyZXBvRXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHJlcG9FcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXBvIGFzIFJlcG8gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVJlcG9WaWFHaXRsYWIoXG4gIGZvcm1EYXRhOiBGb3JtRGF0YSxcbiAgb3JnSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFJlcG8gfCB1bmRlZmluZWQ+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICBjb25zdCBwcm92aWRlciA9IGZvcm1EYXRhLmdldChcInR5cGVcIikgYXMgc3RyaW5nO1xuICBjb25zdCB1cmwgPSBmb3JtRGF0YS5nZXQoXCJnaXRsYWItdXJsXCIpIGFzIHN0cmluZztcblxuICAvLyBWYWxpZGF0ZSBpbnB1dHNcbiAgaWYgKCFuYW1lIHx8IG5hbWUudHJpbSgpID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlJlcG9zaXRvcnkgbmFtZSBpcyByZXF1aXJlZFwiIH07XG4gIH1cblxuICBpZiAoIXVybCB8fCB1cmwudHJpbSgpID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkdpdExhYiBVUkwgaXMgcmVxdWlyZWRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBpbnN0YWxsYXRpb24gfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZ2l0bGFiX2luc3RhbGxhdGlvbnNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImluc3RhbGxlZF9ieVwiLCB1c2VyLmlkKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoIWluc3RhbGxhdGlvbikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJJbnN0YWxsYXRpb24gTmVlZGVkXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgb3duZXIsIHJlcG86IHJlcG9OYW1lIH0gPSBwYXJzZUdpdExhYlVybCh1cmwpO1xuXG4gIC8vdmVyaWZ5IGFjY2Vzc1xuICBjb25zdCBoYXNBY2Nlc3MgPSBhd2FpdCB2ZXJpZnlHaXRMYWJSZXBvQWNjZXNzKFxuICAgIGluc3RhbGxhdGlvbi5hY2Nlc3NfdG9rZW4sXG4gICAgb3duZXIsXG4gICAgcmVwb05hbWUsXG4gICk7XG5cbiAgaWYgKCFoYXNBY2Nlc3MpIHtcbiAgICBpZiAoaW5zdGFsbGF0aW9uLmFjY2Vzc190b2tlbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIGVycm9yOiBcIkFjY2VzcyByZXF1aXJlZCFcIixcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiQWNjZXNzIGRlbmllZCFcIixcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvcjogcmVwb0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgIC5pbnNlcnQoe1xuICAgICAgbmFtZSxcbiAgICAgIHByb3ZpZGVyLFxuICAgICAgcmVwb191cmw6IHVybCxcbiAgICAgIG9yZ2FuaXphdGlvbl9pZDogb3JnSWQsXG4gICAgICBpbmRleGVkX2J5OiB1c2VyLmlkLFxuICAgICAgaW5kZXhfc3RhdHVzOiBcIm5vdCBpbmRleGVkXCIsXG4gICAgfSlcbiAgICAuc2VsZWN0KClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKHJlcG9FcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogcmVwb0Vycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlcG8gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVJlcG9WaWFMb2NhbEZpbGUoXG4gIGZvcm1EYXRhOiBGb3JtRGF0YSxcbiAgb3JnSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFJlcG8+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KFwiZmlsZVwiKSBhcyBGaWxlO1xuXG4gIC8vIFZhbGlkYXRlIGlucHV0c1xuICBpZiAoIW5hbWUgfHwgbmFtZS50cmltKCkgPT09IFwiXCIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUmVwb3NpdG9yeSBuYW1lIGlzIHJlcXVpcmVkXCIgfTtcbiAgfVxuXG4gIGlmICghZmlsZSkge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGaWxlIGlzIHJlcXVpcmVkXCIgfTtcbiAgfVxuXG4gIC8vIFZhbGlkYXRlIGZpbGUgdHlwZVxuICBpZiAoIWZpbGUubmFtZS5lbmRzV2l0aChcIi56aXBcIikpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiT25seSAuemlwIGZpbGVzIGFyZSBhbGxvd2VkXCIgfTtcbiAgfVxuXG4gIC8vIFZhbGlkYXRlIGZpbGUgc2l6ZSAobWF4IDEwME1CKVxuICBjb25zdCBtYXhTaXplID0gMTAwICogMTAyNCAqIDEwMjQ7IC8vIDEwME1CIGluIGJ5dGVzXG4gIGlmIChmaWxlLnNpemUgPiBtYXhTaXplKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiRmlsZSBzaXplIGV4Y2VlZHMgMTAwTUIgbGltaXRcIixcbiAgICB9O1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBHZW5lcmF0ZSBhIHVuaXF1ZSBmaWxlIG5hbWUgdG8gcHJldmVudCBjb2xsaXNpb25zXG4gICAgY29uc3QgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBzYW5pdGl6ZWROYW1lID0gbmFtZS50cmltKCkucmVwbGFjZSgvW15hLXowLTktX10vZ2ksIFwiX1wiKTtcbiAgICBjb25zdCBmaWxlTmFtZSA9IGAke3Nhbml0aXplZE5hbWV9XyR7dGltZXN0YW1wfV8ke2ZpbGUubmFtZX1gO1xuICAgIGNvbnN0IGZpbGVQYXRoID0gYCR7b3JnSWR9LyR7ZmlsZU5hbWV9YDtcblxuICAgIC8vIFVwbG9hZCBmaWxlIHRvIFN1cGFiYXNlIFN0b3JhZ2VcbiAgICBjb25zdCB7IGVycm9yOiB1cGxvYWRFcnJvciB9ID0gYXdhaXQgY2xpZW50LnN0b3JhZ2VcbiAgICAgIC5mcm9tKFwibG9jYWxfcmVwb3NcIilcbiAgICAgIC51cGxvYWQoZmlsZVBhdGgsIGZpbGUsIHtcbiAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vemlwXCIsXG4gICAgICAgIHVwc2VydDogZmFsc2UsXG4gICAgICB9KTtcblxuICAgIGlmICh1cGxvYWRFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIlVwbG9hZCBlcnJvcjpcIiwgdXBsb2FkRXJyb3IpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIGVycm9yOiBgRmlsZSB1cGxvYWQgZmFpbGVkOiAke3VwbG9hZEVycm9yLm1lc3NhZ2V9YCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gR2V0IHRoZSBwdWJsaWMgVVJMIGZvciB0aGUgdXBsb2FkZWQgZmlsZVxuICAgIGNvbnN0IHsgZGF0YTogdXJsRGF0YSB9ID0gY2xpZW50LnN0b3JhZ2VcbiAgICAgIC5mcm9tKFwibG9jYWxfcmVwb3NcIilcbiAgICAgIC5nZXRQdWJsaWNVcmwoZmlsZVBhdGgpO1xuXG4gICAgLy8gQ3JlYXRlIHJlcG9zaXRvcnkgcmVjb3JkIGluIGRhdGFiYXNlXG4gICAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvcjogcmVwb0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgICAuaW5zZXJ0KHtcbiAgICAgICAgbmFtZTogbmFtZS50cmltKCksXG4gICAgICAgIHByb3ZpZGVyOiBcImxvY2FsXCIsXG4gICAgICAgIHJlcG9fdXJsOiBudWxsLFxuICAgICAgICBvYmplY3RfdXJsOiB1cmxEYXRhLnB1YmxpY1VybCxcbiAgICAgICAgb3JnYW5pemF0aW9uX2lkOiBvcmdJZCxcbiAgICAgICAgaW5kZXhlZF9ieTogdXNlci5pZCxcbiAgICAgICAgaW5kZXhfc3RhdHVzOiBcIm5vdCBpbmRleGVkXCIsXG4gICAgICB9KVxuICAgICAgLnNlbGVjdCgpXG4gICAgICAuc2luZ2xlKCk7XG5cbiAgICBpZiAocmVwb0Vycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiUmVwb3NpdG9yeSBjcmVhdGlvbiBlcnJvcjpcIiwgcmVwb0Vycm9yKTtcbiAgICAgIC8vIEF0dGVtcHQgdG8gY2xlYW4gdXAgdXBsb2FkZWQgZmlsZVxuICAgICAgYXdhaXQgY2xpZW50LnN0b3JhZ2UuZnJvbShcImxvY2FsX3JlcG9zXCIpLnJlbW92ZShbZmlsZVBhdGhdKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogYFJlcG9zaXRvcnkgY3JlYXRpb24gZmFpbGVkOiAke3JlcG9FcnJvci5tZXNzYWdlfWAsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlcG8gYXMgUmVwbyB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJVbmV4cGVjdGVkIGVycm9yOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6XG4gICAgICAgIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkXCIsXG4gICAgfTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSZXBvc2l0b3J5IE1hbmFnZW1lbnQgU2VydmljZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlcG9XaXRoU3RhdHVzKFxuICByZXBvSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFJlcG8+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImlkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICBpZiAoIXJlcG8pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUmVwb3NpdG9yeSBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVwbyBhcyBSZXBvIH07XG59XG5cbnR5cGUgVXBkYXRlRGF0YSA9IHtcbiAgbmFtZT86IHN0cmluZztcbiAgcmVwb191cmw/OiBzdHJpbmc7XG4gIG9iamVjdF91cmw/OiBzdHJpbmc7XG4gIGluZGV4X3N0YXR1cz86IHN0cmluZztcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVSZXBvU2V0dGluZ3MoXG4gIHJlcG9JZDogc3RyaW5nLFxuICBzZXR0aW5nczogeyBuYW1lPzogc3RyaW5nOyByZXBvX3VybD86IHN0cmluZzsgZmlsZT86IEZpbGUgfSxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFJlcG8+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gR2V0IHRoZSBjdXJyZW50IHJlcG8gdG8gY2hlY2sgaXRzIHByb3ZpZGVyIHR5cGVcbiAgY29uc3QgeyBkYXRhOiBjdXJyZW50UmVwbyB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImlkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKCFjdXJyZW50UmVwbykge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJSZXBvc2l0b3J5IG5vdCBmb3VuZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgdXBkYXRlRGF0YTogVXBkYXRlRGF0YSA9IHt9O1xuXG4gIC8vIEhhbmRsZSBuYW1lIHVwZGF0ZVxuICBpZiAoc2V0dGluZ3MubmFtZSkge1xuICAgIHVwZGF0ZURhdGEubmFtZSA9IHNldHRpbmdzLm5hbWU7XG4gIH1cblxuICAvLyBIYW5kbGUgR2l0SHViIFVSTCB1cGRhdGVcbiAgaWYgKHNldHRpbmdzLnJlcG9fdXJsICYmIGN1cnJlbnRSZXBvLnByb3ZpZGVyID09PSBcImdpdGh1YlwiKSB7XG4gICAgY29uc3QgeyBvd25lciwgcmVwbyB9ID0gcGFyc2VHaXRIdWJVcmwoc2V0dGluZ3MucmVwb191cmwpO1xuXG4gICAgaWYgKCFvd25lciB8fCAhcmVwbykge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkludmFsaWQgR2l0SHViIFVSTCBmb3JtYXQhXCIgfTtcbiAgICB9XG5cbiAgICAvLyBWZXJpZnkgYWNjZXNzIHRvIHRoZSBuZXcgcmVwb1xuICAgIGNvbnN0IHsgZGF0YTogaW5zdGFsbGF0aW9uIH0gPSBhd2FpdCBjbGllbnRcbiAgICAgIC5mcm9tKFwiZ2l0aHViX2luc3RhbGxhdGlvbnNcIilcbiAgICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgICAuZXEoXCJpbnN0YWxsZWRfYnlcIiwgdXNlci5pZClcbiAgICAgIC5zaW5nbGUoKTtcblxuICAgIGlmICghaW5zdGFsbGF0aW9uKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiR2l0SHViIEFwcCBub3QgaW5zdGFsbGVkIVwiIH07XG4gICAgfVxuXG4gICAgY29uc3QgaGFzQWNjZXNzID0gYXdhaXQgdmVyaWZ5R2l0aHViUmVwb0FjY2VzcyhcbiAgICAgIGluc3RhbGxhdGlvbi5pbnN0YWxsYXRpb25faWQudG9TdHJpbmcoKSxcbiAgICAgIG93bmVyLFxuICAgICAgcmVwbyxcbiAgICApO1xuXG4gICAgaWYgKCFoYXNBY2Nlc3MpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjpcbiAgICAgICAgICBcIkNhbm5vdCBhY2Nlc3MgdGhpcyByZXBvc2l0b3J5LiBNYWtlIHN1cmUgdGhlIEdpdEh1YiBBcHAgaXMgaW5zdGFsbGVkIGZvciB0aGlzIHJlcG9zaXRvcnkuXCIsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHVwZGF0ZURhdGEucmVwb191cmwgPSBzZXR0aW5ncy5yZXBvX3VybDtcbiAgICB1cGRhdGVEYXRhLmluZGV4X3N0YXR1cyA9IFwibm90IGluZGV4ZWRcIjsgLy8gVHJpZ2dlciByZS1pbmRleGluZ1xuICB9XG5cbiAgLy8gSGFuZGxlIGxvY2FsIGZpbGUgdXBsb2FkXG4gIGlmIChzZXR0aW5ncy5maWxlICYmIGN1cnJlbnRSZXBvLnByb3ZpZGVyID09PSBcImxvY2FsXCIpIHtcbiAgICBjb25zdCBmaWxlID0gc2V0dGluZ3MuZmlsZTtcbiAgICBjb25zdCBmaWxlRXh0ID0gZmlsZS5uYW1lLnNwbGl0KFwiLlwiKS5wb3AoKTtcblxuICAgIGlmIChmaWxlRXh0ICE9PSBcInppcFwiKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiT25seSAuemlwIGZpbGVzIGFyZSBhbGxvd2VkIVwiIH07XG4gICAgfVxuXG4gICAgLy8gVXBsb2FkIHRvIFN1cGFiYXNlIFN0b3JhZ2VcbiAgICBjb25zdCBmaWxlTmFtZSA9IGAke3JlcG9JZH0tJHtEYXRlLm5vdygpfS56aXBgO1xuICAgIGNvbnN0IHsgZGF0YTogdXBsb2FkRGF0YSwgZXJyb3I6IHVwbG9hZEVycm9yIH0gPSBhd2FpdCBjbGllbnQuc3RvcmFnZVxuICAgICAgLmZyb20oXCJsb2NhbF9yZXBvc1wiKVxuICAgICAgLnVwbG9hZChmaWxlTmFtZSwgZmlsZSk7XG5cbiAgICBpZiAodXBsb2FkRXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IodXBsb2FkRXJyb3IpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkZhaWxlZCB0byB1cGxvYWQgZmlsZSFcIiB9O1xuICAgIH1cblxuICAgIC8vIEdldCBwdWJsaWMgVVJMXG4gICAgY29uc3QgeyBkYXRhOiB1cmxEYXRhIH0gPSBjbGllbnQuc3RvcmFnZVxuICAgICAgLmZyb20oXCJsb2NhbF9yZXBvc1wiKVxuICAgICAgLmdldFB1YmxpY1VybChmaWxlTmFtZSk7XG5cbiAgICB1cGRhdGVEYXRhLm9iamVjdF91cmwgPSB1cmxEYXRhLnB1YmxpY1VybDtcbiAgICB1cGRhdGVEYXRhLmluZGV4X3N0YXR1cyA9IFwicGVuZGluZ1wiOyAvLyBUcmlnZ2VyIHJlLWluZGV4aW5nXG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIHJlcG9zaXRvcnlcbiAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAudXBkYXRlKHVwZGF0ZURhdGEpXG4gICAgLmVxKFwiaWRcIiwgcmVwb0lkKVxuICAgIC5zZWxlY3QoKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlcG8gYXMgUmVwbyB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUmVwbyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDx7IG9yZ2FuaXphdGlvbklkOiBzdHJpbmcgfT4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICAvLyBGZXRjaCB0aGUgb3JnYW5pemF0aW9uX2lkIGJlZm9yZSBkZWxldGluZ1xuICBjb25zdCB7IGRhdGE6IHJlcG8sIGVycm9yOiByZXBvRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIm9yZ2FuaXphdGlvbl9pZFwiKVxuICAgIC5lcShcImlkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKHJlcG9FcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IocmVwb0Vycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHJlcG9FcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICBpZiAoIXJlcG8pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUmVwb3NpdG9yeSBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgY2xpZW50LmZyb20oXCJyZXBvc2l0b3JpZXNcIikuZGVsZXRlKCkuZXEoXCJpZFwiLCByZXBvSWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogeyBvcmdhbml6YXRpb25JZDogcmVwby5vcmdhbml6YXRpb25faWQgfSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJpZ2dlclJlaW5kZXgoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8dm9pZD4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIGluZGV4X3N0YXR1cyB0byAncGVuZGluZycgdG8gdHJpZ2dlciByZWluZGV4aW5nXG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnVwZGF0ZSh7IGluZGV4X3N0YXR1czogXCJwZW5kaW5nXCIgfSlcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgLy8gVE9ETzogVHJpZ2dlciBhY3R1YWwgaW5kZXhpbmcgam9iL3dlYmhvb2svcXVldWUgaGVyZVxuICAvLyBUaGlzIGNvdWxkIGJlIGFuIEFQSSBjYWxsIHRvIHlvdXIgaW5kZXhpbmcgc2VydmljZVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVuZGVmaW5lZCB9O1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEb2N1bWVudGF0aW9uIFNlcnZpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2N1bWVudGF0aW9uKFxuICByZXBvSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PERvY3VtZW50YXRpb24+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBkb2N1bWVudGF0aW9uLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJkb2N1bWVudGF0aW9uXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJyZXBvX2lkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICBpZiAoIWRvY3VtZW50YXRpb24pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRG9jdW1lbnRhdGlvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogZG9jdW1lbnRhdGlvbiBhcyBEb2N1bWVudGF0aW9uIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2NQYWdlcyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2NQYWdlW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gR2V0IHRoZSBsYXRlc3QgZG9jdW1lbnRhdGlvbiB2ZXJzaW9uIGZvciB0aGlzIHJlcG9cbiAgY29uc3QgeyBkYXRhOiBkb2N1bWVudGF0aW9uLCBlcnJvcjogZG9jRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCJpZFwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5vcmRlcihcInZlcnNpb25cIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXG4gICAgLmxpbWl0KDEpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChkb2NFcnJvciB8fCAhZG9jdW1lbnRhdGlvbikge1xuICAgIGNvbnNvbGUuZXJyb3IoZG9jRXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJEb2N1bWVudGF0aW9uIG5vdCBmb3VuZFwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IHBhZ2VzLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJwYWdlc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiZG9jdW1lbnRhdGlvbl9pZFwiLCBkb2N1bWVudGF0aW9uLmlkKVxuICAgIC5vcmRlcihcIm9yZGVyX2luZGV4XCIsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKHBhZ2VzID8/IFtdKSBhcyBEb2NQYWdlW10gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERvY1BhZ2VCeUlkKFxuICBwYWdlSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PERvY1BhZ2U+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdlLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJkb2NfcGFnZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImlkXCIsIHBhZ2VJZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICBpZiAoIXBhZ2UpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUGFnZSBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcGFnZSBhcyBEb2NQYWdlIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2NQYWdlc0hpZXJhcmNoaWNhbChcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2NQYWdlW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gRmlyc3QgZ2V0IHRoZSBkb2N1bWVudGF0aW9uIElEIGZvciB0aGlzIHJlcG9cbiAgY29uc3QgeyBkYXRhOiBkb2N1bWVudGF0aW9uLCBlcnJvcjogZG9jRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCJpZFwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZG9jRXJyb3IgfHwgIWRvY3VtZW50YXRpb24pIHtcbiAgICBjb25zb2xlLmVycm9yKGRvY0Vycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRG9jdW1lbnRhdGlvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdlcywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jX3BhZ2VzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJkb2N1bWVudGF0aW9uX2lkXCIsIGRvY3VtZW50YXRpb24uaWQpXG4gICAgLm9yZGVyKFwib3JkZXJfaW5kZXhcIiwgeyBhc2NlbmRpbmc6IHRydWUgfSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICAvLyBQYWdlcyBhcmUgYWxyZWFkeSBzb3J0ZWQgYnkgb3JkZXJfaW5kZXhcbiAgLy8gVGhlIHBhcmVudF9wYWdlX2lkIGZpZWxkIG1haW50YWlucyB0aGUgaGllcmFyY2h5XG4gIC8vIEZyb250ZW5kIGNhbiB1c2UgdGhpcyB0byByZW5kZXIgdGhlIHRyZWUgc3RydWN0dXJlXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChwYWdlcyA/PyBbXSkgYXMgRG9jUGFnZVtdIH07XG59XG5cbi8qKlxuICogR2V0IGFsbCBkb2N1bWVudGF0aW9uIHZlcnNpb25zIGZvciBhIHJlcG9zaXRvcnlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERvY3VtZW50YXRpb25WZXJzaW9ucyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2N1bWVudGF0aW9uW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiB2ZXJzaW9ucywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLm9yZGVyKFwidmVyc2lvblwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiAodmVyc2lvbnMgPz8gW10pIGFzIERvY3VtZW50YXRpb25bXSB9O1xufVxuXG4vKipcbiAqIEdldCB0aGUgbGF0ZXN0IGNvbXBsZXRlZCBkb2N1bWVudGF0aW9uIHZlcnNpb24gZm9yIGEgcmVwb3NpdG9yeVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGF0ZXN0RG9jdW1lbnRhdGlvbihcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2N1bWVudGF0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogZG9jdW1lbnRhdGlvbiwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLm9yZGVyKFwidmVyc2lvblwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcbiAgICAubGltaXQoMSlcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKCFkb2N1bWVudGF0aW9uKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkRvY3VtZW50YXRpb24gbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogZG9jdW1lbnRhdGlvbiBhcyBEb2N1bWVudGF0aW9uIH07XG59XG5cbi8qKlxuICogR2V0IGRvY3VtZW50YXRpb24gcGFnZXMgZm9yIGEgc3BlY2lmaWMgdmVyc2lvblxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jUGFnZXNGb3JWZXJzaW9uKFxuICByZXBvSWQ6IHN0cmluZyxcbiAgdmVyc2lvbjogbnVtYmVyLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jUGFnZVtdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIC8vIEdldCB0aGUgZG9jdW1lbnRhdGlvbiByZWNvcmQgZm9yIHRoaXMgdmVyc2lvblxuICBjb25zdCB7IGRhdGE6IGRvY3VtZW50YXRpb24sIGVycm9yOiBkb2NFcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJkb2N1bWVudGF0aW9uXCIpXG4gICAgLnNlbGVjdChcImlkXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLmVxKFwidmVyc2lvblwiLCB2ZXJzaW9uKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZG9jRXJyb3IgfHwgIWRvY3VtZW50YXRpb24pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRG9jdW1lbnRhdGlvbiB2ZXJzaW9uIG5vdCBmb3VuZFwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IHBhZ2VzLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJwYWdlc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiZG9jdW1lbnRhdGlvbl9pZFwiLCBkb2N1bWVudGF0aW9uLmlkKVxuICAgIC5vcmRlcihcIm9yZGVyX2luZGV4XCIsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKHBhZ2VzID8/IFtdKSBhcyBEb2NQYWdlW10gfTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ29udmVyc2F0aW9uIFNlcnZpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb252ZXJzYXRpb25zKFxuICByZXBvSWQ6IHN0cmluZyxcbiAgbGltaXQ6IG51bWJlciA9IDIwLFxuICB2ZXJzaW9uOiBudW1iZXIgfCBudWxsID0gbnVsbCxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbltdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGxldCBxdWVyeSA9IGNsaWVudFxuICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKTtcblxuICAvLyBGaWx0ZXIgYnkgdmVyc2lvbiBpZiBzcGVjaWZpZWRcbiAgaWYgKHZlcnNpb24gIT09IG51bGwgJiYgdmVyc2lvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcXVlcnkgPSBxdWVyeS5lcShcInJlcG9fdmVyc2lvblwiLCB2ZXJzaW9uKTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogY29udmVyc2F0aW9ucywgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5XG4gICAgLm9yZGVyKFwidXBkYXRlZF9hdFwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcbiAgICAubGltaXQobGltaXQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKGNvbnZlcnNhdGlvbnMgPz8gW10pIGFzIENvbnZlcnNhdGlvbltdIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb252ZXJzYXRpb25CeUlkKFxuICBjb252ZXJzYXRpb25JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29udmVyc2F0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogY29udmVyc2F0aW9uLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpZFwiLCBjb252ZXJzYXRpb25JZClcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFjb252ZXJzYXRpb24pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiQ29udmVyc2F0aW9uIG5vdCBmb3VuZFwiIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjb252ZXJzYXRpb24gYXMgQ29udmVyc2F0aW9uIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDb252ZXJzYXRpb24oXG4gIHJlcG9JZDogc3RyaW5nLFxuICB0aXRsZT86IHN0cmluZyxcbiAgdmVyc2lvbj86IG51bWJlciB8IG51bGwsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxDb252ZXJzYXRpb24+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBjb252ZXJzYXRpb24sIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAuaW5zZXJ0KHtcbiAgICAgIHJlcG9faWQ6IHJlcG9JZCxcbiAgICAgIHVzZXJfaWQ6IHVzZXIuaWQsXG4gICAgICB0aXRsZTogdGl0bGUgfHwgXCJOZXcgQ29udmVyc2F0aW9uXCIsXG4gICAgICByZXBvX3ZlcnNpb246IHZlcnNpb24gPz8gbnVsbCxcbiAgICB9KVxuICAgIC5zZWxlY3QoKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGNvbnZlcnNhdGlvbiBhcyBDb252ZXJzYXRpb24gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNvbnZlcnNhdGlvbihcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PHZvaWQ+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLmRlbGV0ZSgpXG4gICAgLmVxKFwiaWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVuZGVmaW5lZCB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVuYW1lQ29udmVyc2F0aW9uKFxuICBjb252ZXJzYXRpb25JZDogc3RyaW5nLFxuICBuZXdUaXRsZTogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29udmVyc2F0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogY29udmVyc2F0aW9uLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLnVwZGF0ZSh7IHRpdGxlOiBuZXdUaXRsZSB9KVxuICAgIC5lcShcImlkXCIsIGNvbnZlcnNhdGlvbklkKVxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlci5pZClcbiAgICAuc2VsZWN0KClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjb252ZXJzYXRpb24gYXMgQ29udmVyc2F0aW9uIH07XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1lc3NhZ2UgU2VydmljZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvbnZlcnNhdGlvbk1lc3NhZ2VzKFxuICBjb252ZXJzYXRpb25JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29udmVyc2F0aW9uTWVzc2FnZVtdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogbWVzc2FnZXMsIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcIm1lc3NhZ2VzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJjb252ZXJzYXRpb25faWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgLm9yZGVyKFwiY3JlYXRlZF9hdFwiLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChtZXNzYWdlcyA/PyBbXSkgYXMgQ29udmVyc2F0aW9uTWVzc2FnZVtdIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVNZXNzYWdlKFxuICBjb252ZXJzYXRpb25JZDogc3RyaW5nLFxuICByb2xlOiBcInVzZXJcIiB8IFwiYXNzaXN0YW50XCIsXG4gIGNvbnRlbnQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbk1lc3NhZ2U+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBtZXNzYWdlLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJtZXNzYWdlc1wiKVxuICAgIC5pbnNlcnQoe1xuICAgICAgY29udmVyc2F0aW9uX2lkOiBjb252ZXJzYXRpb25JZCxcbiAgICAgIHJvbGUsXG4gICAgICBjb250ZW50LFxuICAgIH0pXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSBjb252ZXJzYXRpb24ncyB1cGRhdGVkX2F0IHRpbWVzdGFtcFxuICBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAudXBkYXRlKHsgdXBkYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpIH0pXG4gICAgLmVxKFwiaWRcIiwgY29udmVyc2F0aW9uSWQpO1xuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IG1lc3NhZ2UgYXMgQ29udmVyc2F0aW9uTWVzc2FnZSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZUNvZGVTbmlwcGV0cyhcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbiAgbWVzc2FnZUlkOiBzdHJpbmcsXG4gIHNuaXBwZXRzOiBBcnJheTx7IGZpbGU6IHN0cmluZzsgY29kZTogc3RyaW5nIH0+LFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29kZVNuaXBwZXRbXT4+IHtcbiAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCBzbmlwcGV0c1RvSW5zZXJ0ID0gc25pcHBldHMubWFwKChzbmlwcGV0KSA9PiAoe1xuICAgIGNvbnZlcnNhdGlvbl9pZDogY29udmVyc2F0aW9uSWQsXG4gICAgbWVzc2FnZV9pZDogbWVzc2FnZUlkLFxuICAgIGZpbGVfcGF0aDogc25pcHBldC5maWxlLFxuICAgIGNvZGVfY29udGVudDogc25pcHBldC5jb2RlLFxuICAgIGxhbmd1YWdlOiBzbmlwcGV0LmZpbGUuc3BsaXQoXCIuXCIpLnBvcCgpIHx8IG51bGwsXG4gIH0pKTtcblxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKFwiY29kZV9zbmlwcGV0c1wiKVxuICAgIC5pbnNlcnQoc25pcHBldHNUb0luc2VydClcbiAgICAuc2VsZWN0KCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBkYXRhIGFzIENvZGVTbmlwcGV0W10gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvZGVTbmlwcGV0c0ZvckNvbnZlcnNhdGlvbihcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvZGVTbmlwcGV0W10+PiB7XG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbShcImNvZGVfc25pcHBldHNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImNvbnZlcnNhdGlvbl9pZFwiLCBjb252ZXJzYXRpb25JZClcbiAgICAub3JkZXIoXCJjcmVhdGVkX2F0XCIsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGRhdGEgYXMgQ29kZVNuaXBwZXRbXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ29kZVNuaXBwZXQoXG4gIHNuaXBwZXRJZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8bnVsbD4+IHtcbiAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKFwiY29kZV9zbmlwcGV0c1wiKVxuICAgIC5kZWxldGUoKVxuICAgIC5lcShcImlkXCIsIHNuaXBwZXRJZCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBudWxsIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbmRleFJlcG9zaXRvcnkoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8dm9pZD4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGluc3RhbGxhdGlvbiwgZXJyb3I6IGluc3RhbGxhdGlvbkVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImdpdGh1Yl9pbnN0YWxsYXRpb25zXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpbnN0YWxsZWRfYnlcIiwgdXNlci5pZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKCFpbnN0YWxsYXRpb24gfHwgaW5zdGFsbGF0aW9uRXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiR2l0aHViIEFwcCBJbnN0YWxsYXRpb24gbm90IGZvdW5kIVwiIH07XG4gIH1cblxuICAvL2ZldGNoIHJlcG9cblxuICBjb25zdCByZXBvUmVzdWx0ID0gYXdhaXQgZ2V0UmVwb1dpdGhTdGF0dXMocmVwb0lkKTtcblxuICBpZiAoIXJlcG9SZXN1bHQuc3VjY2Vzcykge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogcmVwb1Jlc3VsdC5lcnJvciB9O1xuICB9XG5cbiAgY29uc3QgcmVwb1VybCA9IHJlcG9SZXN1bHQuZGF0YS5yZXBvX3VybDtcbiAgY29uc3QgaW5zdGFsbGF0aW9uSWQgPSBpbnN0YWxsYXRpb24uaW5zdGFsbGF0aW9uX2lkO1xuXG4gIC8vIEdldCB0aGUgbGF0ZXN0IHZlcnNpb24gbnVtYmVyIGZvciB0aGlzIHJlcG9cbiAgY29uc3QgeyBkYXRhOiBsYXRlc3REb2MgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCJ2ZXJzaW9uXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLm9yZGVyKFwidmVyc2lvblwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcbiAgICAubGltaXQoMSlcbiAgICAuc2luZ2xlKCk7XG5cbiAgLy8gSW5jcmVtZW50IHZlcnNpb24gKHN0YXJ0IGF0IDEgaWYgbm8gcHJldmlvdXMgdmVyc2lvbnMpXG4gIGNvbnN0IG5leHRWZXJzaW9uID0gKGxhdGVzdERvYz8udmVyc2lvbiA/PyAwKSArIDE7XG5cbiAgLy9tYXJrIHRoZSByZXBvc2l0b3J5IGFzIGluZGV4aW5nIGluIHN1cGFiYXNlIGZpcnN0XG4gIGNvbnN0IHsgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgIC51cGRhdGUoeyBpbmRleF9zdGF0dXM6IFwiaW5kZXhpbmdcIiB9KVxuICAgIC5lcShcImlkXCIsIHJlcG9JZCk7XG5cbiAgaWYgKHVwZGF0ZUVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcih1cGRhdGVFcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiB1cGRhdGVFcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICAvLyBDYWxsIHRoZSBiYWNrZW5kIHRvIHN0YXJ0IGluZGV4aW5nIChmaXJlLWFuZC1mb3JnZXQpXG4gIC8vIERvbid0IGF3YWl0IG9yIHRocm93IGVycm9ycyBzaW5jZSB0aGlzIGlzIGEgbG9uZy1ydW5uaW5nIG9wZXJhdGlvblxuICBmZXRjaChgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vcmVwb3MvaW5kZXhgLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHJlcG9fdXJsOiByZXBvVXJsLFxuICAgICAgcmVwb19pZDogcmVwb0lkLFxuICAgICAgdXNlcl9pZDogdXNlci5pZCxcbiAgICAgIGluc3RhbGxhdGlvbl9pZDogaW5zdGFsbGF0aW9uSWQsXG4gICAgICBicmFuY2g6IFwibWFpblwiLFxuICAgICAgdmVyc2lvbjogbmV4dFZlcnNpb24sXG4gICAgfSksXG4gIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIC8vIExvZyB0aGUgZXJyb3IgYnV0IGRvbid0IGZhaWwgdGhlIHJlcXVlc3RcbiAgICBjb25zb2xlLmVycm9yKFwiSW5kZXhpbmcgcmVxdWVzdCBmYWlsZWQ6XCIsIGVycm9yKTtcbiAgICAvLyBUaGUgYmFja2VuZCBzaG91bGQgaGFuZGxlIHVwZGF0aW5nIHRoZSByZXBvIHN0YXR1cyBvbiBmYWlsdXJlXG4gIH0pO1xuXG4gIC8vIFJldHVybiBzdWNjZXNzIGltbWVkaWF0ZWx5IC0gdGhlIGluZGV4aW5nIHdpbGwgaGFwcGVuIGluIHRoZSBiYWNrZ3JvdW5kXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVuZGVmaW5lZCB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJzU0EyaENzQiJ9
}),
"[project]/src/lib/services/data:2a446f [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40ed009f0d51ce94fba83d54c82de57036f3853add":"getCodeSnippetsForConversation"},"src/lib/services/repoService.ts",""] */ __turbopack_context__.s([
    "getCodeSnippetsForConversation",
    ()=>getCodeSnippetsForConversation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var getCodeSnippetsForConversation = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40ed009f0d51ce94fba83d54c82de57036f3853add", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getCodeSnippetsForConversation"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcmVwb1NlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAL3V0aWxzL3N1cGFiYXNlL3NlcnZlclwiO1xuaW1wb3J0IHtcbiAgUmVwbyxcbiAgRG9jdW1lbnRhdGlvbixcbiAgRG9jUGFnZSxcbiAgQ29udmVyc2F0aW9uLFxuICBDb252ZXJzYXRpb25NZXNzYWdlLFxuICBDb2RlU25pcHBldCxcbn0gZnJvbSBcIkAvYXBwL3R5cGVzL3N1cGFiYXNlXCI7XG5pbXBvcnQgeyBBY3Rpb25SZXN1bHQgfSBmcm9tIFwiQC9hcHAvdHlwZXMvYWN0aW9uXCI7XG5pbXBvcnQge1xuICB2ZXJpZnlHaXRodWJSZXBvQWNjZXNzLFxuICB2ZXJpZnlHaXRMYWJSZXBvQWNjZXNzLFxufSBmcm9tIFwiLi9naXRQcm92aWRlclNlcnZpY2VcIjtcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHBhcnNlIEdpdEh1YiBVUkxzXG5mdW5jdGlvbiBwYXJzZUdpdEh1YlVybCh1cmw6IHN0cmluZyk6IHsgb3duZXI6IHN0cmluZzsgcmVwbzogc3RyaW5nIH0ge1xuICB0cnkge1xuICAgIC8vIEhhbmRsZSBtdWx0aXBsZSBmb3JtYXRzOlxuICAgIC8vIC0gaHR0cHM6Ly9naXRodWIuY29tL293bmVyL3JlcG9cbiAgICAvLyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9vd25lci9yZXBvLmdpdFxuICAgIC8vIC0gZ2l0QGdpdGh1Yi5jb206b3duZXIvcmVwby5naXRcblxuICAgIHVybCA9IHVybC50cmltKCkucmVwbGFjZSgvXFwuZ2l0JC8sIFwiXCIpO1xuXG4gICAgaWYgKHVybC5pbmNsdWRlcyhcImdpdGh1Yi5jb20vXCIpKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IHVybC5zcGxpdChcImdpdGh1Yi5jb20vXCIpWzFdLnNwbGl0KFwiL1wiKTtcbiAgICAgIHJldHVybiB7IG93bmVyOiBwYXJ0c1swXSwgcmVwbzogcGFydHNbMV0gfTtcbiAgICB9XG5cbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoXCJnaXRAZ2l0aHViLmNvbTpcIikpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gdXJsLnJlcGxhY2UoXCJnaXRAZ2l0aHViLmNvbTpcIiwgXCJcIikuc3BsaXQoXCIvXCIpO1xuICAgICAgcmV0dXJuIHsgb3duZXI6IHBhcnRzWzBdLCByZXBvOiBwYXJ0c1sxXSB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IG93bmVyOiBcIlwiLCByZXBvOiBcIlwiIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgb3duZXI6IFwiXCIsIHJlcG86IFwiXCIgfTtcbiAgfVxufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gcGFyc2UgR2l0TGFiIFVSTHNcbmZ1bmN0aW9uIHBhcnNlR2l0TGFiVXJsKHVybDogc3RyaW5nKTogeyBvd25lcjogc3RyaW5nOyByZXBvOiBzdHJpbmcgfSB7XG4gIHRyeSB7XG4gICAgLy8gSGFuZGxlIG11bHRpcGxlIGZvcm1hdHM6XG4gICAgLy8gLSBodHRwczovL2dpdGxhYi5jb20vb3duZXIvcmVwb1xuICAgIC8vIC0gaHR0cHM6Ly9naXRsYWIuY29tL293bmVyL3N1Ymdyb3VwL3JlcG9cbiAgICAvLyAtIGh0dHBzOi8vZ2l0bGFiLmNvbS9vd25lci9yZXBvLmdpdFxuICAgIC8vIC0gZ2l0QGdpdGxhYi5jb206b3duZXIvcmVwby5naXRcbiAgICAvLyAtIFNlbGYtaG9zdGVkOiBodHRwczovL2dpdGxhYi5leGFtcGxlLmNvbS9vd25lci9yZXBvXG5cbiAgICB1cmwgPSB1cmwudHJpbSgpLnJlcGxhY2UoL1xcLmdpdCQvLCBcIlwiKTtcblxuICAgIC8vIEhhbmRsZSBIVFRQUyBVUkxzIChnaXRsYWIuY29tIG9yIHNlbGYtaG9zdGVkKVxuICAgIGlmICh1cmwuaW5jbHVkZXMoXCJnaXRsYWIuY29tL1wiKSB8fCAvZ2l0bGFiXFwuW14vXStcXC8vLnRlc3QodXJsKSkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgcGF0aCBhZnRlciB0aGUgZG9tYWluXG4gICAgICBjb25zdCBtYXRjaCA9IHVybC5tYXRjaCgvZ2l0bGFiW14vXSpcXC8oLispLyk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgY29uc3QgcGF0aFBhcnRzID0gbWF0Y2hbMV0uc3BsaXQoXCIvXCIpO1xuICAgICAgICAvLyBHaXRMYWIgc3VwcG9ydHMgbmVzdGVkIGdyb3Vwcywgc28gd2UgbmVlZCB0byBoYW5kbGU6XG4gICAgICAgIC8vIC0gb3duZXIvcmVwbyAoMiBwYXJ0cylcbiAgICAgICAgLy8gLSBvd25lci9zdWJncm91cC9yZXBvICgzKyBwYXJ0cylcbiAgICAgICAgaWYgKHBhdGhQYXJ0cy5sZW5ndGggPj0gMikge1xuICAgICAgICAgIC8vIFRha2UgZXZlcnl0aGluZyBleGNlcHQgdGhlIGxhc3QgcGFydCBhcyBvd25lci9ncm91cFxuICAgICAgICAgIGNvbnN0IHJlcG8gPSBwYXRoUGFydHNbcGF0aFBhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IG93bmVyID0gcGF0aFBhcnRzLnNsaWNlKDAsIC0xKS5qb2luKFwiL1wiKTtcbiAgICAgICAgICByZXR1cm4geyBvd25lciwgcmVwbyB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIFNTSCBVUkxzXG4gICAgaWYgKHVybC5zdGFydHNXaXRoKFwiZ2l0QGdpdGxhYi5jb206XCIpIHx8IC9naXRAZ2l0bGFiXFwuW146XSs6Ly50ZXN0KHVybCkpIHtcbiAgICAgIGNvbnN0IG1hdGNoID0gdXJsLm1hdGNoKC9naXRAZ2l0bGFiW146XSo6KC4rKS8pO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGNvbnN0IHBhdGhQYXJ0cyA9IG1hdGNoWzFdLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgaWYgKHBhdGhQYXJ0cy5sZW5ndGggPj0gMikge1xuICAgICAgICAgIGNvbnN0IHJlcG8gPSBwYXRoUGFydHNbcGF0aFBhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IG93bmVyID0gcGF0aFBhcnRzLnNsaWNlKDAsIC0xKS5qb2luKFwiL1wiKTtcbiAgICAgICAgICByZXR1cm4geyBvd25lciwgcmVwbyB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgb3duZXI6IFwiXCIsIHJlcG86IFwiXCIgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBvd25lcjogXCJcIiwgcmVwbzogXCJcIiB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXBvc0J5T3JnYW5pemF0aW9uSWQoXG4gIG9yZ2FuaXphdGlvbklkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHVzZXIgPSBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJvcmdhbml6YXRpb25faWRcIiwgb3JnYW5pemF0aW9uSWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKGRhdGEgPz8gW10pIGFzIFJlcG9bXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUmVwb1ZpYUdpdGh1YihcbiAgZm9ybURhdGE6IEZvcm1EYXRhLFxuICBvcmdJZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8UmVwbyB8IHVuZGVmaW5lZD4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IHByb3ZpZGVyID0gZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IHVybCA9IGZvcm1EYXRhLmdldChcImdpdGh1Yi11cmxcIikgYXMgc3RyaW5nO1xuXG4gIGlmICghbmFtZSkge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJOYW1lIGlzIHJlcXVpcmVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGluc3RhbGxhdGlvbiB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJnaXRodWJfaW5zdGFsbGF0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiaW5zdGFsbGVkX2J5XCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghaW5zdGFsbGF0aW9uKSB7XG4gICAgLy8gTm8gR2l0SHViIEFwcCBpbnN0YWxsYXRpb24gLSBwcm9tcHQgdXNlciB0byBpbnN0YWxsXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiSW5zdGFsbGF0aW9uIE5lZWRlZFwiLFxuICAgIH07XG4gIH1cblxuICAvL3BhcnNlIHVybCBmb3Igb3duZXIgYW5kIHJlcG9cbiAgY29uc3QgeyBvd25lciwgcmVwbzogcmVwb05hbWUgfSA9IHBhcnNlR2l0SHViVXJsKHVybCk7XG5cbiAgY29uc3QgaGFzQWNjZXNzID0gYXdhaXQgdmVyaWZ5R2l0aHViUmVwb0FjY2VzcyhcbiAgICBpbnN0YWxsYXRpb24uaWQsXG4gICAgb3duZXIsXG4gICAgcmVwb05hbWUsXG4gICk7XG5cbiAgaWYgKCFoYXNBY2Nlc3MpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBlcnJvcjogXCJBY2Nlc3MgRGVuaWVkXCIsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3I6IHJlcG9FcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAuaW5zZXJ0KHtcbiAgICAgIG5hbWUsXG4gICAgICBwcm92aWRlcixcbiAgICAgIHJlcG9fdXJsOiB1cmwsXG4gICAgICBvcmdhbml6YXRpb25faWQ6IG9yZ0lkLFxuICAgICAgaW5kZXhlZF9ieTogdXNlci5pZCxcbiAgICAgIGluZGV4X3N0YXR1czogXCJub3QgaW5kZXhlZFwiLFxuICAgIH0pXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChyZXBvRXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHJlcG9FcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXBvIGFzIFJlcG8gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVJlcG9WaWFHaXRsYWIoXG4gIGZvcm1EYXRhOiBGb3JtRGF0YSxcbiAgb3JnSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFJlcG8gfCB1bmRlZmluZWQ+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICBjb25zdCBwcm92aWRlciA9IGZvcm1EYXRhLmdldChcInR5cGVcIikgYXMgc3RyaW5nO1xuICBjb25zdCB1cmwgPSBmb3JtRGF0YS5nZXQoXCJnaXRsYWItdXJsXCIpIGFzIHN0cmluZztcblxuICAvLyBWYWxpZGF0ZSBpbnB1dHNcbiAgaWYgKCFuYW1lIHx8IG5hbWUudHJpbSgpID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlJlcG9zaXRvcnkgbmFtZSBpcyByZXF1aXJlZFwiIH07XG4gIH1cblxuICBpZiAoIXVybCB8fCB1cmwudHJpbSgpID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkdpdExhYiBVUkwgaXMgcmVxdWlyZWRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBpbnN0YWxsYXRpb24gfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZ2l0bGFiX2luc3RhbGxhdGlvbnNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImluc3RhbGxlZF9ieVwiLCB1c2VyLmlkKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoIWluc3RhbGxhdGlvbikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJJbnN0YWxsYXRpb24gTmVlZGVkXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgb3duZXIsIHJlcG86IHJlcG9OYW1lIH0gPSBwYXJzZUdpdExhYlVybCh1cmwpO1xuXG4gIC8vdmVyaWZ5IGFjY2Vzc1xuICBjb25zdCBoYXNBY2Nlc3MgPSBhd2FpdCB2ZXJpZnlHaXRMYWJSZXBvQWNjZXNzKFxuICAgIGluc3RhbGxhdGlvbi5hY2Nlc3NfdG9rZW4sXG4gICAgb3duZXIsXG4gICAgcmVwb05hbWUsXG4gICk7XG5cbiAgaWYgKCFoYXNBY2Nlc3MpIHtcbiAgICBpZiAoaW5zdGFsbGF0aW9uLmFjY2Vzc190b2tlbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIGVycm9yOiBcIkFjY2VzcyByZXF1aXJlZCFcIixcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiQWNjZXNzIGRlbmllZCFcIixcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvcjogcmVwb0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgIC5pbnNlcnQoe1xuICAgICAgbmFtZSxcbiAgICAgIHByb3ZpZGVyLFxuICAgICAgcmVwb191cmw6IHVybCxcbiAgICAgIG9yZ2FuaXphdGlvbl9pZDogb3JnSWQsXG4gICAgICBpbmRleGVkX2J5OiB1c2VyLmlkLFxuICAgICAgaW5kZXhfc3RhdHVzOiBcIm5vdCBpbmRleGVkXCIsXG4gICAgfSlcbiAgICAuc2VsZWN0KClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKHJlcG9FcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogcmVwb0Vycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlcG8gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVJlcG9WaWFMb2NhbEZpbGUoXG4gIGZvcm1EYXRhOiBGb3JtRGF0YSxcbiAgb3JnSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFJlcG8+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KFwiZmlsZVwiKSBhcyBGaWxlO1xuXG4gIC8vIFZhbGlkYXRlIGlucHV0c1xuICBpZiAoIW5hbWUgfHwgbmFtZS50cmltKCkgPT09IFwiXCIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUmVwb3NpdG9yeSBuYW1lIGlzIHJlcXVpcmVkXCIgfTtcbiAgfVxuXG4gIGlmICghZmlsZSkge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGaWxlIGlzIHJlcXVpcmVkXCIgfTtcbiAgfVxuXG4gIC8vIFZhbGlkYXRlIGZpbGUgdHlwZVxuICBpZiAoIWZpbGUubmFtZS5lbmRzV2l0aChcIi56aXBcIikpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiT25seSAuemlwIGZpbGVzIGFyZSBhbGxvd2VkXCIgfTtcbiAgfVxuXG4gIC8vIFZhbGlkYXRlIGZpbGUgc2l6ZSAobWF4IDEwME1CKVxuICBjb25zdCBtYXhTaXplID0gMTAwICogMTAyNCAqIDEwMjQ7IC8vIDEwME1CIGluIGJ5dGVzXG4gIGlmIChmaWxlLnNpemUgPiBtYXhTaXplKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiRmlsZSBzaXplIGV4Y2VlZHMgMTAwTUIgbGltaXRcIixcbiAgICB9O1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBHZW5lcmF0ZSBhIHVuaXF1ZSBmaWxlIG5hbWUgdG8gcHJldmVudCBjb2xsaXNpb25zXG4gICAgY29uc3QgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBzYW5pdGl6ZWROYW1lID0gbmFtZS50cmltKCkucmVwbGFjZSgvW15hLXowLTktX10vZ2ksIFwiX1wiKTtcbiAgICBjb25zdCBmaWxlTmFtZSA9IGAke3Nhbml0aXplZE5hbWV9XyR7dGltZXN0YW1wfV8ke2ZpbGUubmFtZX1gO1xuICAgIGNvbnN0IGZpbGVQYXRoID0gYCR7b3JnSWR9LyR7ZmlsZU5hbWV9YDtcblxuICAgIC8vIFVwbG9hZCBmaWxlIHRvIFN1cGFiYXNlIFN0b3JhZ2VcbiAgICBjb25zdCB7IGVycm9yOiB1cGxvYWRFcnJvciB9ID0gYXdhaXQgY2xpZW50LnN0b3JhZ2VcbiAgICAgIC5mcm9tKFwibG9jYWxfcmVwb3NcIilcbiAgICAgIC51cGxvYWQoZmlsZVBhdGgsIGZpbGUsIHtcbiAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vemlwXCIsXG4gICAgICAgIHVwc2VydDogZmFsc2UsXG4gICAgICB9KTtcblxuICAgIGlmICh1cGxvYWRFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIlVwbG9hZCBlcnJvcjpcIiwgdXBsb2FkRXJyb3IpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIGVycm9yOiBgRmlsZSB1cGxvYWQgZmFpbGVkOiAke3VwbG9hZEVycm9yLm1lc3NhZ2V9YCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gR2V0IHRoZSBwdWJsaWMgVVJMIGZvciB0aGUgdXBsb2FkZWQgZmlsZVxuICAgIGNvbnN0IHsgZGF0YTogdXJsRGF0YSB9ID0gY2xpZW50LnN0b3JhZ2VcbiAgICAgIC5mcm9tKFwibG9jYWxfcmVwb3NcIilcbiAgICAgIC5nZXRQdWJsaWNVcmwoZmlsZVBhdGgpO1xuXG4gICAgLy8gQ3JlYXRlIHJlcG9zaXRvcnkgcmVjb3JkIGluIGRhdGFiYXNlXG4gICAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvcjogcmVwb0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgICAuaW5zZXJ0KHtcbiAgICAgICAgbmFtZTogbmFtZS50cmltKCksXG4gICAgICAgIHByb3ZpZGVyOiBcImxvY2FsXCIsXG4gICAgICAgIHJlcG9fdXJsOiBudWxsLFxuICAgICAgICBvYmplY3RfdXJsOiB1cmxEYXRhLnB1YmxpY1VybCxcbiAgICAgICAgb3JnYW5pemF0aW9uX2lkOiBvcmdJZCxcbiAgICAgICAgaW5kZXhlZF9ieTogdXNlci5pZCxcbiAgICAgICAgaW5kZXhfc3RhdHVzOiBcIm5vdCBpbmRleGVkXCIsXG4gICAgICB9KVxuICAgICAgLnNlbGVjdCgpXG4gICAgICAuc2luZ2xlKCk7XG5cbiAgICBpZiAocmVwb0Vycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiUmVwb3NpdG9yeSBjcmVhdGlvbiBlcnJvcjpcIiwgcmVwb0Vycm9yKTtcbiAgICAgIC8vIEF0dGVtcHQgdG8gY2xlYW4gdXAgdXBsb2FkZWQgZmlsZVxuICAgICAgYXdhaXQgY2xpZW50LnN0b3JhZ2UuZnJvbShcImxvY2FsX3JlcG9zXCIpLnJlbW92ZShbZmlsZVBhdGhdKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogYFJlcG9zaXRvcnkgY3JlYXRpb24gZmFpbGVkOiAke3JlcG9FcnJvci5tZXNzYWdlfWAsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlcG8gYXMgUmVwbyB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJVbmV4cGVjdGVkIGVycm9yOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6XG4gICAgICAgIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkXCIsXG4gICAgfTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSZXBvc2l0b3J5IE1hbmFnZW1lbnQgU2VydmljZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlcG9XaXRoU3RhdHVzKFxuICByZXBvSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFJlcG8+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImlkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICBpZiAoIXJlcG8pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUmVwb3NpdG9yeSBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVwbyBhcyBSZXBvIH07XG59XG5cbnR5cGUgVXBkYXRlRGF0YSA9IHtcbiAgbmFtZT86IHN0cmluZztcbiAgcmVwb191cmw/OiBzdHJpbmc7XG4gIG9iamVjdF91cmw/OiBzdHJpbmc7XG4gIGluZGV4X3N0YXR1cz86IHN0cmluZztcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVSZXBvU2V0dGluZ3MoXG4gIHJlcG9JZDogc3RyaW5nLFxuICBzZXR0aW5nczogeyBuYW1lPzogc3RyaW5nOyByZXBvX3VybD86IHN0cmluZzsgZmlsZT86IEZpbGUgfSxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFJlcG8+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gR2V0IHRoZSBjdXJyZW50IHJlcG8gdG8gY2hlY2sgaXRzIHByb3ZpZGVyIHR5cGVcbiAgY29uc3QgeyBkYXRhOiBjdXJyZW50UmVwbyB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImlkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKCFjdXJyZW50UmVwbykge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJSZXBvc2l0b3J5IG5vdCBmb3VuZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgdXBkYXRlRGF0YTogVXBkYXRlRGF0YSA9IHt9O1xuXG4gIC8vIEhhbmRsZSBuYW1lIHVwZGF0ZVxuICBpZiAoc2V0dGluZ3MubmFtZSkge1xuICAgIHVwZGF0ZURhdGEubmFtZSA9IHNldHRpbmdzLm5hbWU7XG4gIH1cblxuICAvLyBIYW5kbGUgR2l0SHViIFVSTCB1cGRhdGVcbiAgaWYgKHNldHRpbmdzLnJlcG9fdXJsICYmIGN1cnJlbnRSZXBvLnByb3ZpZGVyID09PSBcImdpdGh1YlwiKSB7XG4gICAgY29uc3QgeyBvd25lciwgcmVwbyB9ID0gcGFyc2VHaXRIdWJVcmwoc2V0dGluZ3MucmVwb191cmwpO1xuXG4gICAgaWYgKCFvd25lciB8fCAhcmVwbykge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkludmFsaWQgR2l0SHViIFVSTCBmb3JtYXQhXCIgfTtcbiAgICB9XG5cbiAgICAvLyBWZXJpZnkgYWNjZXNzIHRvIHRoZSBuZXcgcmVwb1xuICAgIGNvbnN0IHsgZGF0YTogaW5zdGFsbGF0aW9uIH0gPSBhd2FpdCBjbGllbnRcbiAgICAgIC5mcm9tKFwiZ2l0aHViX2luc3RhbGxhdGlvbnNcIilcbiAgICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgICAuZXEoXCJpbnN0YWxsZWRfYnlcIiwgdXNlci5pZClcbiAgICAgIC5zaW5nbGUoKTtcblxuICAgIGlmICghaW5zdGFsbGF0aW9uKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiR2l0SHViIEFwcCBub3QgaW5zdGFsbGVkIVwiIH07XG4gICAgfVxuXG4gICAgY29uc3QgaGFzQWNjZXNzID0gYXdhaXQgdmVyaWZ5R2l0aHViUmVwb0FjY2VzcyhcbiAgICAgIGluc3RhbGxhdGlvbi5pbnN0YWxsYXRpb25faWQudG9TdHJpbmcoKSxcbiAgICAgIG93bmVyLFxuICAgICAgcmVwbyxcbiAgICApO1xuXG4gICAgaWYgKCFoYXNBY2Nlc3MpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjpcbiAgICAgICAgICBcIkNhbm5vdCBhY2Nlc3MgdGhpcyByZXBvc2l0b3J5LiBNYWtlIHN1cmUgdGhlIEdpdEh1YiBBcHAgaXMgaW5zdGFsbGVkIGZvciB0aGlzIHJlcG9zaXRvcnkuXCIsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHVwZGF0ZURhdGEucmVwb191cmwgPSBzZXR0aW5ncy5yZXBvX3VybDtcbiAgICB1cGRhdGVEYXRhLmluZGV4X3N0YXR1cyA9IFwibm90IGluZGV4ZWRcIjsgLy8gVHJpZ2dlciByZS1pbmRleGluZ1xuICB9XG5cbiAgLy8gSGFuZGxlIGxvY2FsIGZpbGUgdXBsb2FkXG4gIGlmIChzZXR0aW5ncy5maWxlICYmIGN1cnJlbnRSZXBvLnByb3ZpZGVyID09PSBcImxvY2FsXCIpIHtcbiAgICBjb25zdCBmaWxlID0gc2V0dGluZ3MuZmlsZTtcbiAgICBjb25zdCBmaWxlRXh0ID0gZmlsZS5uYW1lLnNwbGl0KFwiLlwiKS5wb3AoKTtcblxuICAgIGlmIChmaWxlRXh0ICE9PSBcInppcFwiKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiT25seSAuemlwIGZpbGVzIGFyZSBhbGxvd2VkIVwiIH07XG4gICAgfVxuXG4gICAgLy8gVXBsb2FkIHRvIFN1cGFiYXNlIFN0b3JhZ2VcbiAgICBjb25zdCBmaWxlTmFtZSA9IGAke3JlcG9JZH0tJHtEYXRlLm5vdygpfS56aXBgO1xuICAgIGNvbnN0IHsgZGF0YTogdXBsb2FkRGF0YSwgZXJyb3I6IHVwbG9hZEVycm9yIH0gPSBhd2FpdCBjbGllbnQuc3RvcmFnZVxuICAgICAgLmZyb20oXCJsb2NhbF9yZXBvc1wiKVxuICAgICAgLnVwbG9hZChmaWxlTmFtZSwgZmlsZSk7XG5cbiAgICBpZiAodXBsb2FkRXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IodXBsb2FkRXJyb3IpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkZhaWxlZCB0byB1cGxvYWQgZmlsZSFcIiB9O1xuICAgIH1cblxuICAgIC8vIEdldCBwdWJsaWMgVVJMXG4gICAgY29uc3QgeyBkYXRhOiB1cmxEYXRhIH0gPSBjbGllbnQuc3RvcmFnZVxuICAgICAgLmZyb20oXCJsb2NhbF9yZXBvc1wiKVxuICAgICAgLmdldFB1YmxpY1VybChmaWxlTmFtZSk7XG5cbiAgICB1cGRhdGVEYXRhLm9iamVjdF91cmwgPSB1cmxEYXRhLnB1YmxpY1VybDtcbiAgICB1cGRhdGVEYXRhLmluZGV4X3N0YXR1cyA9IFwicGVuZGluZ1wiOyAvLyBUcmlnZ2VyIHJlLWluZGV4aW5nXG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIHJlcG9zaXRvcnlcbiAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAudXBkYXRlKHVwZGF0ZURhdGEpXG4gICAgLmVxKFwiaWRcIiwgcmVwb0lkKVxuICAgIC5zZWxlY3QoKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlcG8gYXMgUmVwbyB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUmVwbyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDx7IG9yZ2FuaXphdGlvbklkOiBzdHJpbmcgfT4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICAvLyBGZXRjaCB0aGUgb3JnYW5pemF0aW9uX2lkIGJlZm9yZSBkZWxldGluZ1xuICBjb25zdCB7IGRhdGE6IHJlcG8sIGVycm9yOiByZXBvRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIm9yZ2FuaXphdGlvbl9pZFwiKVxuICAgIC5lcShcImlkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKHJlcG9FcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IocmVwb0Vycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHJlcG9FcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICBpZiAoIXJlcG8pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUmVwb3NpdG9yeSBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgY2xpZW50LmZyb20oXCJyZXBvc2l0b3JpZXNcIikuZGVsZXRlKCkuZXEoXCJpZFwiLCByZXBvSWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogeyBvcmdhbml6YXRpb25JZDogcmVwby5vcmdhbml6YXRpb25faWQgfSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJpZ2dlclJlaW5kZXgoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8dm9pZD4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIGluZGV4X3N0YXR1cyB0byAncGVuZGluZycgdG8gdHJpZ2dlciByZWluZGV4aW5nXG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnVwZGF0ZSh7IGluZGV4X3N0YXR1czogXCJwZW5kaW5nXCIgfSlcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgLy8gVE9ETzogVHJpZ2dlciBhY3R1YWwgaW5kZXhpbmcgam9iL3dlYmhvb2svcXVldWUgaGVyZVxuICAvLyBUaGlzIGNvdWxkIGJlIGFuIEFQSSBjYWxsIHRvIHlvdXIgaW5kZXhpbmcgc2VydmljZVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVuZGVmaW5lZCB9O1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEb2N1bWVudGF0aW9uIFNlcnZpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2N1bWVudGF0aW9uKFxuICByZXBvSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PERvY3VtZW50YXRpb24+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBkb2N1bWVudGF0aW9uLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJkb2N1bWVudGF0aW9uXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJyZXBvX2lkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICBpZiAoIWRvY3VtZW50YXRpb24pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRG9jdW1lbnRhdGlvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogZG9jdW1lbnRhdGlvbiBhcyBEb2N1bWVudGF0aW9uIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2NQYWdlcyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2NQYWdlW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gR2V0IHRoZSBsYXRlc3QgZG9jdW1lbnRhdGlvbiB2ZXJzaW9uIGZvciB0aGlzIHJlcG9cbiAgY29uc3QgeyBkYXRhOiBkb2N1bWVudGF0aW9uLCBlcnJvcjogZG9jRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCJpZFwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5vcmRlcihcInZlcnNpb25cIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXG4gICAgLmxpbWl0KDEpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChkb2NFcnJvciB8fCAhZG9jdW1lbnRhdGlvbikge1xuICAgIGNvbnNvbGUuZXJyb3IoZG9jRXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJEb2N1bWVudGF0aW9uIG5vdCBmb3VuZFwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IHBhZ2VzLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJwYWdlc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiZG9jdW1lbnRhdGlvbl9pZFwiLCBkb2N1bWVudGF0aW9uLmlkKVxuICAgIC5vcmRlcihcIm9yZGVyX2luZGV4XCIsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKHBhZ2VzID8/IFtdKSBhcyBEb2NQYWdlW10gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERvY1BhZ2VCeUlkKFxuICBwYWdlSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PERvY1BhZ2U+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdlLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJkb2NfcGFnZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImlkXCIsIHBhZ2VJZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICBpZiAoIXBhZ2UpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUGFnZSBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcGFnZSBhcyBEb2NQYWdlIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2NQYWdlc0hpZXJhcmNoaWNhbChcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2NQYWdlW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gRmlyc3QgZ2V0IHRoZSBkb2N1bWVudGF0aW9uIElEIGZvciB0aGlzIHJlcG9cbiAgY29uc3QgeyBkYXRhOiBkb2N1bWVudGF0aW9uLCBlcnJvcjogZG9jRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCJpZFwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZG9jRXJyb3IgfHwgIWRvY3VtZW50YXRpb24pIHtcbiAgICBjb25zb2xlLmVycm9yKGRvY0Vycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRG9jdW1lbnRhdGlvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdlcywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jX3BhZ2VzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJkb2N1bWVudGF0aW9uX2lkXCIsIGRvY3VtZW50YXRpb24uaWQpXG4gICAgLm9yZGVyKFwib3JkZXJfaW5kZXhcIiwgeyBhc2NlbmRpbmc6IHRydWUgfSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICAvLyBQYWdlcyBhcmUgYWxyZWFkeSBzb3J0ZWQgYnkgb3JkZXJfaW5kZXhcbiAgLy8gVGhlIHBhcmVudF9wYWdlX2lkIGZpZWxkIG1haW50YWlucyB0aGUgaGllcmFyY2h5XG4gIC8vIEZyb250ZW5kIGNhbiB1c2UgdGhpcyB0byByZW5kZXIgdGhlIHRyZWUgc3RydWN0dXJlXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChwYWdlcyA/PyBbXSkgYXMgRG9jUGFnZVtdIH07XG59XG5cbi8qKlxuICogR2V0IGFsbCBkb2N1bWVudGF0aW9uIHZlcnNpb25zIGZvciBhIHJlcG9zaXRvcnlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERvY3VtZW50YXRpb25WZXJzaW9ucyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2N1bWVudGF0aW9uW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiB2ZXJzaW9ucywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLm9yZGVyKFwidmVyc2lvblwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiAodmVyc2lvbnMgPz8gW10pIGFzIERvY3VtZW50YXRpb25bXSB9O1xufVxuXG4vKipcbiAqIEdldCB0aGUgbGF0ZXN0IGNvbXBsZXRlZCBkb2N1bWVudGF0aW9uIHZlcnNpb24gZm9yIGEgcmVwb3NpdG9yeVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGF0ZXN0RG9jdW1lbnRhdGlvbihcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2N1bWVudGF0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogZG9jdW1lbnRhdGlvbiwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLm9yZGVyKFwidmVyc2lvblwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcbiAgICAubGltaXQoMSlcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKCFkb2N1bWVudGF0aW9uKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkRvY3VtZW50YXRpb24gbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogZG9jdW1lbnRhdGlvbiBhcyBEb2N1bWVudGF0aW9uIH07XG59XG5cbi8qKlxuICogR2V0IGRvY3VtZW50YXRpb24gcGFnZXMgZm9yIGEgc3BlY2lmaWMgdmVyc2lvblxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jUGFnZXNGb3JWZXJzaW9uKFxuICByZXBvSWQ6IHN0cmluZyxcbiAgdmVyc2lvbjogbnVtYmVyLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jUGFnZVtdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIC8vIEdldCB0aGUgZG9jdW1lbnRhdGlvbiByZWNvcmQgZm9yIHRoaXMgdmVyc2lvblxuICBjb25zdCB7IGRhdGE6IGRvY3VtZW50YXRpb24sIGVycm9yOiBkb2NFcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJkb2N1bWVudGF0aW9uXCIpXG4gICAgLnNlbGVjdChcImlkXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLmVxKFwidmVyc2lvblwiLCB2ZXJzaW9uKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZG9jRXJyb3IgfHwgIWRvY3VtZW50YXRpb24pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRG9jdW1lbnRhdGlvbiB2ZXJzaW9uIG5vdCBmb3VuZFwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IHBhZ2VzLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJwYWdlc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiZG9jdW1lbnRhdGlvbl9pZFwiLCBkb2N1bWVudGF0aW9uLmlkKVxuICAgIC5vcmRlcihcIm9yZGVyX2luZGV4XCIsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKHBhZ2VzID8/IFtdKSBhcyBEb2NQYWdlW10gfTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ29udmVyc2F0aW9uIFNlcnZpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb252ZXJzYXRpb25zKFxuICByZXBvSWQ6IHN0cmluZyxcbiAgbGltaXQ6IG51bWJlciA9IDIwLFxuICB2ZXJzaW9uOiBudW1iZXIgfCBudWxsID0gbnVsbCxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbltdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGxldCBxdWVyeSA9IGNsaWVudFxuICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKTtcblxuICAvLyBGaWx0ZXIgYnkgdmVyc2lvbiBpZiBzcGVjaWZpZWRcbiAgaWYgKHZlcnNpb24gIT09IG51bGwgJiYgdmVyc2lvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcXVlcnkgPSBxdWVyeS5lcShcInJlcG9fdmVyc2lvblwiLCB2ZXJzaW9uKTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogY29udmVyc2F0aW9ucywgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5XG4gICAgLm9yZGVyKFwidXBkYXRlZF9hdFwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcbiAgICAubGltaXQobGltaXQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKGNvbnZlcnNhdGlvbnMgPz8gW10pIGFzIENvbnZlcnNhdGlvbltdIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb252ZXJzYXRpb25CeUlkKFxuICBjb252ZXJzYXRpb25JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29udmVyc2F0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogY29udmVyc2F0aW9uLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpZFwiLCBjb252ZXJzYXRpb25JZClcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFjb252ZXJzYXRpb24pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiQ29udmVyc2F0aW9uIG5vdCBmb3VuZFwiIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjb252ZXJzYXRpb24gYXMgQ29udmVyc2F0aW9uIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDb252ZXJzYXRpb24oXG4gIHJlcG9JZDogc3RyaW5nLFxuICB0aXRsZT86IHN0cmluZyxcbiAgdmVyc2lvbj86IG51bWJlciB8IG51bGwsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxDb252ZXJzYXRpb24+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBjb252ZXJzYXRpb24sIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAuaW5zZXJ0KHtcbiAgICAgIHJlcG9faWQ6IHJlcG9JZCxcbiAgICAgIHVzZXJfaWQ6IHVzZXIuaWQsXG4gICAgICB0aXRsZTogdGl0bGUgfHwgXCJOZXcgQ29udmVyc2F0aW9uXCIsXG4gICAgICByZXBvX3ZlcnNpb246IHZlcnNpb24gPz8gbnVsbCxcbiAgICB9KVxuICAgIC5zZWxlY3QoKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGNvbnZlcnNhdGlvbiBhcyBDb252ZXJzYXRpb24gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNvbnZlcnNhdGlvbihcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PHZvaWQ+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLmRlbGV0ZSgpXG4gICAgLmVxKFwiaWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVuZGVmaW5lZCB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVuYW1lQ29udmVyc2F0aW9uKFxuICBjb252ZXJzYXRpb25JZDogc3RyaW5nLFxuICBuZXdUaXRsZTogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29udmVyc2F0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogY29udmVyc2F0aW9uLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLnVwZGF0ZSh7IHRpdGxlOiBuZXdUaXRsZSB9KVxuICAgIC5lcShcImlkXCIsIGNvbnZlcnNhdGlvbklkKVxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlci5pZClcbiAgICAuc2VsZWN0KClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjb252ZXJzYXRpb24gYXMgQ29udmVyc2F0aW9uIH07XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1lc3NhZ2UgU2VydmljZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvbnZlcnNhdGlvbk1lc3NhZ2VzKFxuICBjb252ZXJzYXRpb25JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29udmVyc2F0aW9uTWVzc2FnZVtdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogbWVzc2FnZXMsIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcIm1lc3NhZ2VzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJjb252ZXJzYXRpb25faWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgLm9yZGVyKFwiY3JlYXRlZF9hdFwiLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChtZXNzYWdlcyA/PyBbXSkgYXMgQ29udmVyc2F0aW9uTWVzc2FnZVtdIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVNZXNzYWdlKFxuICBjb252ZXJzYXRpb25JZDogc3RyaW5nLFxuICByb2xlOiBcInVzZXJcIiB8IFwiYXNzaXN0YW50XCIsXG4gIGNvbnRlbnQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbk1lc3NhZ2U+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBtZXNzYWdlLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJtZXNzYWdlc1wiKVxuICAgIC5pbnNlcnQoe1xuICAgICAgY29udmVyc2F0aW9uX2lkOiBjb252ZXJzYXRpb25JZCxcbiAgICAgIHJvbGUsXG4gICAgICBjb250ZW50LFxuICAgIH0pXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSBjb252ZXJzYXRpb24ncyB1cGRhdGVkX2F0IHRpbWVzdGFtcFxuICBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAudXBkYXRlKHsgdXBkYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpIH0pXG4gICAgLmVxKFwiaWRcIiwgY29udmVyc2F0aW9uSWQpO1xuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IG1lc3NhZ2UgYXMgQ29udmVyc2F0aW9uTWVzc2FnZSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZUNvZGVTbmlwcGV0cyhcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbiAgbWVzc2FnZUlkOiBzdHJpbmcsXG4gIHNuaXBwZXRzOiBBcnJheTx7IGZpbGU6IHN0cmluZzsgY29kZTogc3RyaW5nIH0+LFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29kZVNuaXBwZXRbXT4+IHtcbiAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCBzbmlwcGV0c1RvSW5zZXJ0ID0gc25pcHBldHMubWFwKChzbmlwcGV0KSA9PiAoe1xuICAgIGNvbnZlcnNhdGlvbl9pZDogY29udmVyc2F0aW9uSWQsXG4gICAgbWVzc2FnZV9pZDogbWVzc2FnZUlkLFxuICAgIGZpbGVfcGF0aDogc25pcHBldC5maWxlLFxuICAgIGNvZGVfY29udGVudDogc25pcHBldC5jb2RlLFxuICAgIGxhbmd1YWdlOiBzbmlwcGV0LmZpbGUuc3BsaXQoXCIuXCIpLnBvcCgpIHx8IG51bGwsXG4gIH0pKTtcblxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKFwiY29kZV9zbmlwcGV0c1wiKVxuICAgIC5pbnNlcnQoc25pcHBldHNUb0luc2VydClcbiAgICAuc2VsZWN0KCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBkYXRhIGFzIENvZGVTbmlwcGV0W10gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvZGVTbmlwcGV0c0ZvckNvbnZlcnNhdGlvbihcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvZGVTbmlwcGV0W10+PiB7XG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbShcImNvZGVfc25pcHBldHNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImNvbnZlcnNhdGlvbl9pZFwiLCBjb252ZXJzYXRpb25JZClcbiAgICAub3JkZXIoXCJjcmVhdGVkX2F0XCIsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGRhdGEgYXMgQ29kZVNuaXBwZXRbXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ29kZVNuaXBwZXQoXG4gIHNuaXBwZXRJZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8bnVsbD4+IHtcbiAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKFwiY29kZV9zbmlwcGV0c1wiKVxuICAgIC5kZWxldGUoKVxuICAgIC5lcShcImlkXCIsIHNuaXBwZXRJZCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBudWxsIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbmRleFJlcG9zaXRvcnkoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8dm9pZD4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGluc3RhbGxhdGlvbiwgZXJyb3I6IGluc3RhbGxhdGlvbkVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImdpdGh1Yl9pbnN0YWxsYXRpb25zXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpbnN0YWxsZWRfYnlcIiwgdXNlci5pZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKCFpbnN0YWxsYXRpb24gfHwgaW5zdGFsbGF0aW9uRXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiR2l0aHViIEFwcCBJbnN0YWxsYXRpb24gbm90IGZvdW5kIVwiIH07XG4gIH1cblxuICAvL2ZldGNoIHJlcG9cblxuICBjb25zdCByZXBvUmVzdWx0ID0gYXdhaXQgZ2V0UmVwb1dpdGhTdGF0dXMocmVwb0lkKTtcblxuICBpZiAoIXJlcG9SZXN1bHQuc3VjY2Vzcykge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogcmVwb1Jlc3VsdC5lcnJvciB9O1xuICB9XG5cbiAgY29uc3QgcmVwb1VybCA9IHJlcG9SZXN1bHQuZGF0YS5yZXBvX3VybDtcbiAgY29uc3QgaW5zdGFsbGF0aW9uSWQgPSBpbnN0YWxsYXRpb24uaW5zdGFsbGF0aW9uX2lkO1xuXG4gIC8vIEdldCB0aGUgbGF0ZXN0IHZlcnNpb24gbnVtYmVyIGZvciB0aGlzIHJlcG9cbiAgY29uc3QgeyBkYXRhOiBsYXRlc3REb2MgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCJ2ZXJzaW9uXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLm9yZGVyKFwidmVyc2lvblwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcbiAgICAubGltaXQoMSlcbiAgICAuc2luZ2xlKCk7XG5cbiAgLy8gSW5jcmVtZW50IHZlcnNpb24gKHN0YXJ0IGF0IDEgaWYgbm8gcHJldmlvdXMgdmVyc2lvbnMpXG4gIGNvbnN0IG5leHRWZXJzaW9uID0gKGxhdGVzdERvYz8udmVyc2lvbiA/PyAwKSArIDE7XG5cbiAgLy9tYXJrIHRoZSByZXBvc2l0b3J5IGFzIGluZGV4aW5nIGluIHN1cGFiYXNlIGZpcnN0XG4gIGNvbnN0IHsgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgIC51cGRhdGUoeyBpbmRleF9zdGF0dXM6IFwiaW5kZXhpbmdcIiB9KVxuICAgIC5lcShcImlkXCIsIHJlcG9JZCk7XG5cbiAgaWYgKHVwZGF0ZUVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcih1cGRhdGVFcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiB1cGRhdGVFcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICAvLyBDYWxsIHRoZSBiYWNrZW5kIHRvIHN0YXJ0IGluZGV4aW5nIChmaXJlLWFuZC1mb3JnZXQpXG4gIC8vIERvbid0IGF3YWl0IG9yIHRocm93IGVycm9ycyBzaW5jZSB0aGlzIGlzIGEgbG9uZy1ydW5uaW5nIG9wZXJhdGlvblxuICBmZXRjaChgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vcmVwb3MvaW5kZXhgLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHJlcG9fdXJsOiByZXBvVXJsLFxuICAgICAgcmVwb19pZDogcmVwb0lkLFxuICAgICAgdXNlcl9pZDogdXNlci5pZCxcbiAgICAgIGluc3RhbGxhdGlvbl9pZDogaW5zdGFsbGF0aW9uSWQsXG4gICAgICBicmFuY2g6IFwibWFpblwiLFxuICAgICAgdmVyc2lvbjogbmV4dFZlcnNpb24sXG4gICAgfSksXG4gIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIC8vIExvZyB0aGUgZXJyb3IgYnV0IGRvbid0IGZhaWwgdGhlIHJlcXVlc3RcbiAgICBjb25zb2xlLmVycm9yKFwiSW5kZXhpbmcgcmVxdWVzdCBmYWlsZWQ6XCIsIGVycm9yKTtcbiAgICAvLyBUaGUgYmFja2VuZCBzaG91bGQgaGFuZGxlIHVwZGF0aW5nIHRoZSByZXBvIHN0YXR1cyBvbiBmYWlsdXJlXG4gIH0pO1xuXG4gIC8vIFJldHVybiBzdWNjZXNzIGltbWVkaWF0ZWx5IC0gdGhlIGluZGV4aW5nIHdpbGwgaGFwcGVuIGluIHRoZSBiYWNrZ3JvdW5kXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVuZGVmaW5lZCB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ1VEE2bENzQiJ9
}),
"[project]/src/lib/services/data:35ea92 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7035655e9eff45fe03e6f78297bf8a12121969e07a":"saveCodeSnippets"},"src/lib/services/repoService.ts",""] */ __turbopack_context__.s([
    "saveCodeSnippets",
    ()=>saveCodeSnippets
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var saveCodeSnippets = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("7035655e9eff45fe03e6f78297bf8a12121969e07a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "saveCodeSnippets"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcmVwb1NlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAL3V0aWxzL3N1cGFiYXNlL3NlcnZlclwiO1xuaW1wb3J0IHtcbiAgUmVwbyxcbiAgRG9jdW1lbnRhdGlvbixcbiAgRG9jUGFnZSxcbiAgQ29udmVyc2F0aW9uLFxuICBDb252ZXJzYXRpb25NZXNzYWdlLFxuICBDb2RlU25pcHBldCxcbn0gZnJvbSBcIkAvYXBwL3R5cGVzL3N1cGFiYXNlXCI7XG5pbXBvcnQgeyBBY3Rpb25SZXN1bHQgfSBmcm9tIFwiQC9hcHAvdHlwZXMvYWN0aW9uXCI7XG5pbXBvcnQge1xuICB2ZXJpZnlHaXRodWJSZXBvQWNjZXNzLFxuICB2ZXJpZnlHaXRMYWJSZXBvQWNjZXNzLFxufSBmcm9tIFwiLi9naXRQcm92aWRlclNlcnZpY2VcIjtcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHBhcnNlIEdpdEh1YiBVUkxzXG5mdW5jdGlvbiBwYXJzZUdpdEh1YlVybCh1cmw6IHN0cmluZyk6IHsgb3duZXI6IHN0cmluZzsgcmVwbzogc3RyaW5nIH0ge1xuICB0cnkge1xuICAgIC8vIEhhbmRsZSBtdWx0aXBsZSBmb3JtYXRzOlxuICAgIC8vIC0gaHR0cHM6Ly9naXRodWIuY29tL293bmVyL3JlcG9cbiAgICAvLyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9vd25lci9yZXBvLmdpdFxuICAgIC8vIC0gZ2l0QGdpdGh1Yi5jb206b3duZXIvcmVwby5naXRcblxuICAgIHVybCA9IHVybC50cmltKCkucmVwbGFjZSgvXFwuZ2l0JC8sIFwiXCIpO1xuXG4gICAgaWYgKHVybC5pbmNsdWRlcyhcImdpdGh1Yi5jb20vXCIpKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IHVybC5zcGxpdChcImdpdGh1Yi5jb20vXCIpWzFdLnNwbGl0KFwiL1wiKTtcbiAgICAgIHJldHVybiB7IG93bmVyOiBwYXJ0c1swXSwgcmVwbzogcGFydHNbMV0gfTtcbiAgICB9XG5cbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoXCJnaXRAZ2l0aHViLmNvbTpcIikpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gdXJsLnJlcGxhY2UoXCJnaXRAZ2l0aHViLmNvbTpcIiwgXCJcIikuc3BsaXQoXCIvXCIpO1xuICAgICAgcmV0dXJuIHsgb3duZXI6IHBhcnRzWzBdLCByZXBvOiBwYXJ0c1sxXSB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IG93bmVyOiBcIlwiLCByZXBvOiBcIlwiIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgb3duZXI6IFwiXCIsIHJlcG86IFwiXCIgfTtcbiAgfVxufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gcGFyc2UgR2l0TGFiIFVSTHNcbmZ1bmN0aW9uIHBhcnNlR2l0TGFiVXJsKHVybDogc3RyaW5nKTogeyBvd25lcjogc3RyaW5nOyByZXBvOiBzdHJpbmcgfSB7XG4gIHRyeSB7XG4gICAgLy8gSGFuZGxlIG11bHRpcGxlIGZvcm1hdHM6XG4gICAgLy8gLSBodHRwczovL2dpdGxhYi5jb20vb3duZXIvcmVwb1xuICAgIC8vIC0gaHR0cHM6Ly9naXRsYWIuY29tL293bmVyL3N1Ymdyb3VwL3JlcG9cbiAgICAvLyAtIGh0dHBzOi8vZ2l0bGFiLmNvbS9vd25lci9yZXBvLmdpdFxuICAgIC8vIC0gZ2l0QGdpdGxhYi5jb206b3duZXIvcmVwby5naXRcbiAgICAvLyAtIFNlbGYtaG9zdGVkOiBodHRwczovL2dpdGxhYi5leGFtcGxlLmNvbS9vd25lci9yZXBvXG5cbiAgICB1cmwgPSB1cmwudHJpbSgpLnJlcGxhY2UoL1xcLmdpdCQvLCBcIlwiKTtcblxuICAgIC8vIEhhbmRsZSBIVFRQUyBVUkxzIChnaXRsYWIuY29tIG9yIHNlbGYtaG9zdGVkKVxuICAgIGlmICh1cmwuaW5jbHVkZXMoXCJnaXRsYWIuY29tL1wiKSB8fCAvZ2l0bGFiXFwuW14vXStcXC8vLnRlc3QodXJsKSkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgcGF0aCBhZnRlciB0aGUgZG9tYWluXG4gICAgICBjb25zdCBtYXRjaCA9IHVybC5tYXRjaCgvZ2l0bGFiW14vXSpcXC8oLispLyk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgY29uc3QgcGF0aFBhcnRzID0gbWF0Y2hbMV0uc3BsaXQoXCIvXCIpO1xuICAgICAgICAvLyBHaXRMYWIgc3VwcG9ydHMgbmVzdGVkIGdyb3Vwcywgc28gd2UgbmVlZCB0byBoYW5kbGU6XG4gICAgICAgIC8vIC0gb3duZXIvcmVwbyAoMiBwYXJ0cylcbiAgICAgICAgLy8gLSBvd25lci9zdWJncm91cC9yZXBvICgzKyBwYXJ0cylcbiAgICAgICAgaWYgKHBhdGhQYXJ0cy5sZW5ndGggPj0gMikge1xuICAgICAgICAgIC8vIFRha2UgZXZlcnl0aGluZyBleGNlcHQgdGhlIGxhc3QgcGFydCBhcyBvd25lci9ncm91cFxuICAgICAgICAgIGNvbnN0IHJlcG8gPSBwYXRoUGFydHNbcGF0aFBhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IG93bmVyID0gcGF0aFBhcnRzLnNsaWNlKDAsIC0xKS5qb2luKFwiL1wiKTtcbiAgICAgICAgICByZXR1cm4geyBvd25lciwgcmVwbyB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIFNTSCBVUkxzXG4gICAgaWYgKHVybC5zdGFydHNXaXRoKFwiZ2l0QGdpdGxhYi5jb206XCIpIHx8IC9naXRAZ2l0bGFiXFwuW146XSs6Ly50ZXN0KHVybCkpIHtcbiAgICAgIGNvbnN0IG1hdGNoID0gdXJsLm1hdGNoKC9naXRAZ2l0bGFiW146XSo6KC4rKS8pO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGNvbnN0IHBhdGhQYXJ0cyA9IG1hdGNoWzFdLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgaWYgKHBhdGhQYXJ0cy5sZW5ndGggPj0gMikge1xuICAgICAgICAgIGNvbnN0IHJlcG8gPSBwYXRoUGFydHNbcGF0aFBhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IG93bmVyID0gcGF0aFBhcnRzLnNsaWNlKDAsIC0xKS5qb2luKFwiL1wiKTtcbiAgICAgICAgICByZXR1cm4geyBvd25lciwgcmVwbyB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgb3duZXI6IFwiXCIsIHJlcG86IFwiXCIgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBvd25lcjogXCJcIiwgcmVwbzogXCJcIiB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXBvc0J5T3JnYW5pemF0aW9uSWQoXG4gIG9yZ2FuaXphdGlvbklkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHVzZXIgPSBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJvcmdhbml6YXRpb25faWRcIiwgb3JnYW5pemF0aW9uSWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKGRhdGEgPz8gW10pIGFzIFJlcG9bXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUmVwb1ZpYUdpdGh1YihcbiAgZm9ybURhdGE6IEZvcm1EYXRhLFxuICBvcmdJZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8UmVwbyB8IHVuZGVmaW5lZD4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IHByb3ZpZGVyID0gZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IHVybCA9IGZvcm1EYXRhLmdldChcImdpdGh1Yi11cmxcIikgYXMgc3RyaW5nO1xuXG4gIGlmICghbmFtZSkge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJOYW1lIGlzIHJlcXVpcmVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGluc3RhbGxhdGlvbiB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJnaXRodWJfaW5zdGFsbGF0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiaW5zdGFsbGVkX2J5XCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghaW5zdGFsbGF0aW9uKSB7XG4gICAgLy8gTm8gR2l0SHViIEFwcCBpbnN0YWxsYXRpb24gLSBwcm9tcHQgdXNlciB0byBpbnN0YWxsXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiSW5zdGFsbGF0aW9uIE5lZWRlZFwiLFxuICAgIH07XG4gIH1cblxuICAvL3BhcnNlIHVybCBmb3Igb3duZXIgYW5kIHJlcG9cbiAgY29uc3QgeyBvd25lciwgcmVwbzogcmVwb05hbWUgfSA9IHBhcnNlR2l0SHViVXJsKHVybCk7XG5cbiAgY29uc3QgaGFzQWNjZXNzID0gYXdhaXQgdmVyaWZ5R2l0aHViUmVwb0FjY2VzcyhcbiAgICBpbnN0YWxsYXRpb24uaWQsXG4gICAgb3duZXIsXG4gICAgcmVwb05hbWUsXG4gICk7XG5cbiAgaWYgKCFoYXNBY2Nlc3MpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBlcnJvcjogXCJBY2Nlc3MgRGVuaWVkXCIsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3I6IHJlcG9FcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAuaW5zZXJ0KHtcbiAgICAgIG5hbWUsXG4gICAgICBwcm92aWRlcixcbiAgICAgIHJlcG9fdXJsOiB1cmwsXG4gICAgICBvcmdhbml6YXRpb25faWQ6IG9yZ0lkLFxuICAgICAgaW5kZXhlZF9ieTogdXNlci5pZCxcbiAgICAgIGluZGV4X3N0YXR1czogXCJub3QgaW5kZXhlZFwiLFxuICAgIH0pXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChyZXBvRXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHJlcG9FcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXBvIGFzIFJlcG8gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVJlcG9WaWFHaXRsYWIoXG4gIGZvcm1EYXRhOiBGb3JtRGF0YSxcbiAgb3JnSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFJlcG8gfCB1bmRlZmluZWQ+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICBjb25zdCBwcm92aWRlciA9IGZvcm1EYXRhLmdldChcInR5cGVcIikgYXMgc3RyaW5nO1xuICBjb25zdCB1cmwgPSBmb3JtRGF0YS5nZXQoXCJnaXRsYWItdXJsXCIpIGFzIHN0cmluZztcblxuICAvLyBWYWxpZGF0ZSBpbnB1dHNcbiAgaWYgKCFuYW1lIHx8IG5hbWUudHJpbSgpID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlJlcG9zaXRvcnkgbmFtZSBpcyByZXF1aXJlZFwiIH07XG4gIH1cblxuICBpZiAoIXVybCB8fCB1cmwudHJpbSgpID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkdpdExhYiBVUkwgaXMgcmVxdWlyZWRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBpbnN0YWxsYXRpb24gfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZ2l0bGFiX2luc3RhbGxhdGlvbnNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImluc3RhbGxlZF9ieVwiLCB1c2VyLmlkKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoIWluc3RhbGxhdGlvbikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJJbnN0YWxsYXRpb24gTmVlZGVkXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgb3duZXIsIHJlcG86IHJlcG9OYW1lIH0gPSBwYXJzZUdpdExhYlVybCh1cmwpO1xuXG4gIC8vdmVyaWZ5IGFjY2Vzc1xuICBjb25zdCBoYXNBY2Nlc3MgPSBhd2FpdCB2ZXJpZnlHaXRMYWJSZXBvQWNjZXNzKFxuICAgIGluc3RhbGxhdGlvbi5hY2Nlc3NfdG9rZW4sXG4gICAgb3duZXIsXG4gICAgcmVwb05hbWUsXG4gICk7XG5cbiAgaWYgKCFoYXNBY2Nlc3MpIHtcbiAgICBpZiAoaW5zdGFsbGF0aW9uLmFjY2Vzc190b2tlbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIGVycm9yOiBcIkFjY2VzcyByZXF1aXJlZCFcIixcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiQWNjZXNzIGRlbmllZCFcIixcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvcjogcmVwb0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgIC5pbnNlcnQoe1xuICAgICAgbmFtZSxcbiAgICAgIHByb3ZpZGVyLFxuICAgICAgcmVwb191cmw6IHVybCxcbiAgICAgIG9yZ2FuaXphdGlvbl9pZDogb3JnSWQsXG4gICAgICBpbmRleGVkX2J5OiB1c2VyLmlkLFxuICAgICAgaW5kZXhfc3RhdHVzOiBcIm5vdCBpbmRleGVkXCIsXG4gICAgfSlcbiAgICAuc2VsZWN0KClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKHJlcG9FcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogcmVwb0Vycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlcG8gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVJlcG9WaWFMb2NhbEZpbGUoXG4gIGZvcm1EYXRhOiBGb3JtRGF0YSxcbiAgb3JnSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFJlcG8+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KFwiZmlsZVwiKSBhcyBGaWxlO1xuXG4gIC8vIFZhbGlkYXRlIGlucHV0c1xuICBpZiAoIW5hbWUgfHwgbmFtZS50cmltKCkgPT09IFwiXCIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUmVwb3NpdG9yeSBuYW1lIGlzIHJlcXVpcmVkXCIgfTtcbiAgfVxuXG4gIGlmICghZmlsZSkge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGaWxlIGlzIHJlcXVpcmVkXCIgfTtcbiAgfVxuXG4gIC8vIFZhbGlkYXRlIGZpbGUgdHlwZVxuICBpZiAoIWZpbGUubmFtZS5lbmRzV2l0aChcIi56aXBcIikpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiT25seSAuemlwIGZpbGVzIGFyZSBhbGxvd2VkXCIgfTtcbiAgfVxuXG4gIC8vIFZhbGlkYXRlIGZpbGUgc2l6ZSAobWF4IDEwME1CKVxuICBjb25zdCBtYXhTaXplID0gMTAwICogMTAyNCAqIDEwMjQ7IC8vIDEwME1CIGluIGJ5dGVzXG4gIGlmIChmaWxlLnNpemUgPiBtYXhTaXplKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiRmlsZSBzaXplIGV4Y2VlZHMgMTAwTUIgbGltaXRcIixcbiAgICB9O1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBHZW5lcmF0ZSBhIHVuaXF1ZSBmaWxlIG5hbWUgdG8gcHJldmVudCBjb2xsaXNpb25zXG4gICAgY29uc3QgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBzYW5pdGl6ZWROYW1lID0gbmFtZS50cmltKCkucmVwbGFjZSgvW15hLXowLTktX10vZ2ksIFwiX1wiKTtcbiAgICBjb25zdCBmaWxlTmFtZSA9IGAke3Nhbml0aXplZE5hbWV9XyR7dGltZXN0YW1wfV8ke2ZpbGUubmFtZX1gO1xuICAgIGNvbnN0IGZpbGVQYXRoID0gYCR7b3JnSWR9LyR7ZmlsZU5hbWV9YDtcblxuICAgIC8vIFVwbG9hZCBmaWxlIHRvIFN1cGFiYXNlIFN0b3JhZ2VcbiAgICBjb25zdCB7IGVycm9yOiB1cGxvYWRFcnJvciB9ID0gYXdhaXQgY2xpZW50LnN0b3JhZ2VcbiAgICAgIC5mcm9tKFwibG9jYWxfcmVwb3NcIilcbiAgICAgIC51cGxvYWQoZmlsZVBhdGgsIGZpbGUsIHtcbiAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vemlwXCIsXG4gICAgICAgIHVwc2VydDogZmFsc2UsXG4gICAgICB9KTtcblxuICAgIGlmICh1cGxvYWRFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIlVwbG9hZCBlcnJvcjpcIiwgdXBsb2FkRXJyb3IpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIGVycm9yOiBgRmlsZSB1cGxvYWQgZmFpbGVkOiAke3VwbG9hZEVycm9yLm1lc3NhZ2V9YCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gR2V0IHRoZSBwdWJsaWMgVVJMIGZvciB0aGUgdXBsb2FkZWQgZmlsZVxuICAgIGNvbnN0IHsgZGF0YTogdXJsRGF0YSB9ID0gY2xpZW50LnN0b3JhZ2VcbiAgICAgIC5mcm9tKFwibG9jYWxfcmVwb3NcIilcbiAgICAgIC5nZXRQdWJsaWNVcmwoZmlsZVBhdGgpO1xuXG4gICAgLy8gQ3JlYXRlIHJlcG9zaXRvcnkgcmVjb3JkIGluIGRhdGFiYXNlXG4gICAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvcjogcmVwb0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgICAuaW5zZXJ0KHtcbiAgICAgICAgbmFtZTogbmFtZS50cmltKCksXG4gICAgICAgIHByb3ZpZGVyOiBcImxvY2FsXCIsXG4gICAgICAgIHJlcG9fdXJsOiBudWxsLFxuICAgICAgICBvYmplY3RfdXJsOiB1cmxEYXRhLnB1YmxpY1VybCxcbiAgICAgICAgb3JnYW5pemF0aW9uX2lkOiBvcmdJZCxcbiAgICAgICAgaW5kZXhlZF9ieTogdXNlci5pZCxcbiAgICAgICAgaW5kZXhfc3RhdHVzOiBcIm5vdCBpbmRleGVkXCIsXG4gICAgICB9KVxuICAgICAgLnNlbGVjdCgpXG4gICAgICAuc2luZ2xlKCk7XG5cbiAgICBpZiAocmVwb0Vycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiUmVwb3NpdG9yeSBjcmVhdGlvbiBlcnJvcjpcIiwgcmVwb0Vycm9yKTtcbiAgICAgIC8vIEF0dGVtcHQgdG8gY2xlYW4gdXAgdXBsb2FkZWQgZmlsZVxuICAgICAgYXdhaXQgY2xpZW50LnN0b3JhZ2UuZnJvbShcImxvY2FsX3JlcG9zXCIpLnJlbW92ZShbZmlsZVBhdGhdKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogYFJlcG9zaXRvcnkgY3JlYXRpb24gZmFpbGVkOiAke3JlcG9FcnJvci5tZXNzYWdlfWAsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlcG8gYXMgUmVwbyB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJVbmV4cGVjdGVkIGVycm9yOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6XG4gICAgICAgIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkXCIsXG4gICAgfTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSZXBvc2l0b3J5IE1hbmFnZW1lbnQgU2VydmljZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlcG9XaXRoU3RhdHVzKFxuICByZXBvSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFJlcG8+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImlkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICBpZiAoIXJlcG8pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUmVwb3NpdG9yeSBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVwbyBhcyBSZXBvIH07XG59XG5cbnR5cGUgVXBkYXRlRGF0YSA9IHtcbiAgbmFtZT86IHN0cmluZztcbiAgcmVwb191cmw/OiBzdHJpbmc7XG4gIG9iamVjdF91cmw/OiBzdHJpbmc7XG4gIGluZGV4X3N0YXR1cz86IHN0cmluZztcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVSZXBvU2V0dGluZ3MoXG4gIHJlcG9JZDogc3RyaW5nLFxuICBzZXR0aW5nczogeyBuYW1lPzogc3RyaW5nOyByZXBvX3VybD86IHN0cmluZzsgZmlsZT86IEZpbGUgfSxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFJlcG8+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gR2V0IHRoZSBjdXJyZW50IHJlcG8gdG8gY2hlY2sgaXRzIHByb3ZpZGVyIHR5cGVcbiAgY29uc3QgeyBkYXRhOiBjdXJyZW50UmVwbyB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImlkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKCFjdXJyZW50UmVwbykge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJSZXBvc2l0b3J5IG5vdCBmb3VuZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgdXBkYXRlRGF0YTogVXBkYXRlRGF0YSA9IHt9O1xuXG4gIC8vIEhhbmRsZSBuYW1lIHVwZGF0ZVxuICBpZiAoc2V0dGluZ3MubmFtZSkge1xuICAgIHVwZGF0ZURhdGEubmFtZSA9IHNldHRpbmdzLm5hbWU7XG4gIH1cblxuICAvLyBIYW5kbGUgR2l0SHViIFVSTCB1cGRhdGVcbiAgaWYgKHNldHRpbmdzLnJlcG9fdXJsICYmIGN1cnJlbnRSZXBvLnByb3ZpZGVyID09PSBcImdpdGh1YlwiKSB7XG4gICAgY29uc3QgeyBvd25lciwgcmVwbyB9ID0gcGFyc2VHaXRIdWJVcmwoc2V0dGluZ3MucmVwb191cmwpO1xuXG4gICAgaWYgKCFvd25lciB8fCAhcmVwbykge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkludmFsaWQgR2l0SHViIFVSTCBmb3JtYXQhXCIgfTtcbiAgICB9XG5cbiAgICAvLyBWZXJpZnkgYWNjZXNzIHRvIHRoZSBuZXcgcmVwb1xuICAgIGNvbnN0IHsgZGF0YTogaW5zdGFsbGF0aW9uIH0gPSBhd2FpdCBjbGllbnRcbiAgICAgIC5mcm9tKFwiZ2l0aHViX2luc3RhbGxhdGlvbnNcIilcbiAgICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgICAuZXEoXCJpbnN0YWxsZWRfYnlcIiwgdXNlci5pZClcbiAgICAgIC5zaW5nbGUoKTtcblxuICAgIGlmICghaW5zdGFsbGF0aW9uKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiR2l0SHViIEFwcCBub3QgaW5zdGFsbGVkIVwiIH07XG4gICAgfVxuXG4gICAgY29uc3QgaGFzQWNjZXNzID0gYXdhaXQgdmVyaWZ5R2l0aHViUmVwb0FjY2VzcyhcbiAgICAgIGluc3RhbGxhdGlvbi5pbnN0YWxsYXRpb25faWQudG9TdHJpbmcoKSxcbiAgICAgIG93bmVyLFxuICAgICAgcmVwbyxcbiAgICApO1xuXG4gICAgaWYgKCFoYXNBY2Nlc3MpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjpcbiAgICAgICAgICBcIkNhbm5vdCBhY2Nlc3MgdGhpcyByZXBvc2l0b3J5LiBNYWtlIHN1cmUgdGhlIEdpdEh1YiBBcHAgaXMgaW5zdGFsbGVkIGZvciB0aGlzIHJlcG9zaXRvcnkuXCIsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHVwZGF0ZURhdGEucmVwb191cmwgPSBzZXR0aW5ncy5yZXBvX3VybDtcbiAgICB1cGRhdGVEYXRhLmluZGV4X3N0YXR1cyA9IFwibm90IGluZGV4ZWRcIjsgLy8gVHJpZ2dlciByZS1pbmRleGluZ1xuICB9XG5cbiAgLy8gSGFuZGxlIGxvY2FsIGZpbGUgdXBsb2FkXG4gIGlmIChzZXR0aW5ncy5maWxlICYmIGN1cnJlbnRSZXBvLnByb3ZpZGVyID09PSBcImxvY2FsXCIpIHtcbiAgICBjb25zdCBmaWxlID0gc2V0dGluZ3MuZmlsZTtcbiAgICBjb25zdCBmaWxlRXh0ID0gZmlsZS5uYW1lLnNwbGl0KFwiLlwiKS5wb3AoKTtcblxuICAgIGlmIChmaWxlRXh0ICE9PSBcInppcFwiKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiT25seSAuemlwIGZpbGVzIGFyZSBhbGxvd2VkIVwiIH07XG4gICAgfVxuXG4gICAgLy8gVXBsb2FkIHRvIFN1cGFiYXNlIFN0b3JhZ2VcbiAgICBjb25zdCBmaWxlTmFtZSA9IGAke3JlcG9JZH0tJHtEYXRlLm5vdygpfS56aXBgO1xuICAgIGNvbnN0IHsgZGF0YTogdXBsb2FkRGF0YSwgZXJyb3I6IHVwbG9hZEVycm9yIH0gPSBhd2FpdCBjbGllbnQuc3RvcmFnZVxuICAgICAgLmZyb20oXCJsb2NhbF9yZXBvc1wiKVxuICAgICAgLnVwbG9hZChmaWxlTmFtZSwgZmlsZSk7XG5cbiAgICBpZiAodXBsb2FkRXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IodXBsb2FkRXJyb3IpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkZhaWxlZCB0byB1cGxvYWQgZmlsZSFcIiB9O1xuICAgIH1cblxuICAgIC8vIEdldCBwdWJsaWMgVVJMXG4gICAgY29uc3QgeyBkYXRhOiB1cmxEYXRhIH0gPSBjbGllbnQuc3RvcmFnZVxuICAgICAgLmZyb20oXCJsb2NhbF9yZXBvc1wiKVxuICAgICAgLmdldFB1YmxpY1VybChmaWxlTmFtZSk7XG5cbiAgICB1cGRhdGVEYXRhLm9iamVjdF91cmwgPSB1cmxEYXRhLnB1YmxpY1VybDtcbiAgICB1cGRhdGVEYXRhLmluZGV4X3N0YXR1cyA9IFwicGVuZGluZ1wiOyAvLyBUcmlnZ2VyIHJlLWluZGV4aW5nXG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIHJlcG9zaXRvcnlcbiAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAudXBkYXRlKHVwZGF0ZURhdGEpXG4gICAgLmVxKFwiaWRcIiwgcmVwb0lkKVxuICAgIC5zZWxlY3QoKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlcG8gYXMgUmVwbyB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUmVwbyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDx7IG9yZ2FuaXphdGlvbklkOiBzdHJpbmcgfT4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICAvLyBGZXRjaCB0aGUgb3JnYW5pemF0aW9uX2lkIGJlZm9yZSBkZWxldGluZ1xuICBjb25zdCB7IGRhdGE6IHJlcG8sIGVycm9yOiByZXBvRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIm9yZ2FuaXphdGlvbl9pZFwiKVxuICAgIC5lcShcImlkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKHJlcG9FcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IocmVwb0Vycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHJlcG9FcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICBpZiAoIXJlcG8pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUmVwb3NpdG9yeSBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgY2xpZW50LmZyb20oXCJyZXBvc2l0b3JpZXNcIikuZGVsZXRlKCkuZXEoXCJpZFwiLCByZXBvSWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogeyBvcmdhbml6YXRpb25JZDogcmVwby5vcmdhbml6YXRpb25faWQgfSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJpZ2dlclJlaW5kZXgoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8dm9pZD4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIGluZGV4X3N0YXR1cyB0byAncGVuZGluZycgdG8gdHJpZ2dlciByZWluZGV4aW5nXG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnVwZGF0ZSh7IGluZGV4X3N0YXR1czogXCJwZW5kaW5nXCIgfSlcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgLy8gVE9ETzogVHJpZ2dlciBhY3R1YWwgaW5kZXhpbmcgam9iL3dlYmhvb2svcXVldWUgaGVyZVxuICAvLyBUaGlzIGNvdWxkIGJlIGFuIEFQSSBjYWxsIHRvIHlvdXIgaW5kZXhpbmcgc2VydmljZVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVuZGVmaW5lZCB9O1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEb2N1bWVudGF0aW9uIFNlcnZpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2N1bWVudGF0aW9uKFxuICByZXBvSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PERvY3VtZW50YXRpb24+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBkb2N1bWVudGF0aW9uLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJkb2N1bWVudGF0aW9uXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJyZXBvX2lkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICBpZiAoIWRvY3VtZW50YXRpb24pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRG9jdW1lbnRhdGlvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogZG9jdW1lbnRhdGlvbiBhcyBEb2N1bWVudGF0aW9uIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2NQYWdlcyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2NQYWdlW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gR2V0IHRoZSBsYXRlc3QgZG9jdW1lbnRhdGlvbiB2ZXJzaW9uIGZvciB0aGlzIHJlcG9cbiAgY29uc3QgeyBkYXRhOiBkb2N1bWVudGF0aW9uLCBlcnJvcjogZG9jRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCJpZFwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5vcmRlcihcInZlcnNpb25cIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXG4gICAgLmxpbWl0KDEpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChkb2NFcnJvciB8fCAhZG9jdW1lbnRhdGlvbikge1xuICAgIGNvbnNvbGUuZXJyb3IoZG9jRXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJEb2N1bWVudGF0aW9uIG5vdCBmb3VuZFwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IHBhZ2VzLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJwYWdlc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiZG9jdW1lbnRhdGlvbl9pZFwiLCBkb2N1bWVudGF0aW9uLmlkKVxuICAgIC5vcmRlcihcIm9yZGVyX2luZGV4XCIsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKHBhZ2VzID8/IFtdKSBhcyBEb2NQYWdlW10gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERvY1BhZ2VCeUlkKFxuICBwYWdlSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PERvY1BhZ2U+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdlLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJkb2NfcGFnZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImlkXCIsIHBhZ2VJZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICBpZiAoIXBhZ2UpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUGFnZSBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcGFnZSBhcyBEb2NQYWdlIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2NQYWdlc0hpZXJhcmNoaWNhbChcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2NQYWdlW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gRmlyc3QgZ2V0IHRoZSBkb2N1bWVudGF0aW9uIElEIGZvciB0aGlzIHJlcG9cbiAgY29uc3QgeyBkYXRhOiBkb2N1bWVudGF0aW9uLCBlcnJvcjogZG9jRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCJpZFwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZG9jRXJyb3IgfHwgIWRvY3VtZW50YXRpb24pIHtcbiAgICBjb25zb2xlLmVycm9yKGRvY0Vycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRG9jdW1lbnRhdGlvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdlcywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jX3BhZ2VzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJkb2N1bWVudGF0aW9uX2lkXCIsIGRvY3VtZW50YXRpb24uaWQpXG4gICAgLm9yZGVyKFwib3JkZXJfaW5kZXhcIiwgeyBhc2NlbmRpbmc6IHRydWUgfSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICAvLyBQYWdlcyBhcmUgYWxyZWFkeSBzb3J0ZWQgYnkgb3JkZXJfaW5kZXhcbiAgLy8gVGhlIHBhcmVudF9wYWdlX2lkIGZpZWxkIG1haW50YWlucyB0aGUgaGllcmFyY2h5XG4gIC8vIEZyb250ZW5kIGNhbiB1c2UgdGhpcyB0byByZW5kZXIgdGhlIHRyZWUgc3RydWN0dXJlXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChwYWdlcyA/PyBbXSkgYXMgRG9jUGFnZVtdIH07XG59XG5cbi8qKlxuICogR2V0IGFsbCBkb2N1bWVudGF0aW9uIHZlcnNpb25zIGZvciBhIHJlcG9zaXRvcnlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERvY3VtZW50YXRpb25WZXJzaW9ucyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2N1bWVudGF0aW9uW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiB2ZXJzaW9ucywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLm9yZGVyKFwidmVyc2lvblwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiAodmVyc2lvbnMgPz8gW10pIGFzIERvY3VtZW50YXRpb25bXSB9O1xufVxuXG4vKipcbiAqIEdldCB0aGUgbGF0ZXN0IGNvbXBsZXRlZCBkb2N1bWVudGF0aW9uIHZlcnNpb24gZm9yIGEgcmVwb3NpdG9yeVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGF0ZXN0RG9jdW1lbnRhdGlvbihcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2N1bWVudGF0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogZG9jdW1lbnRhdGlvbiwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLm9yZGVyKFwidmVyc2lvblwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcbiAgICAubGltaXQoMSlcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKCFkb2N1bWVudGF0aW9uKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkRvY3VtZW50YXRpb24gbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogZG9jdW1lbnRhdGlvbiBhcyBEb2N1bWVudGF0aW9uIH07XG59XG5cbi8qKlxuICogR2V0IGRvY3VtZW50YXRpb24gcGFnZXMgZm9yIGEgc3BlY2lmaWMgdmVyc2lvblxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jUGFnZXNGb3JWZXJzaW9uKFxuICByZXBvSWQ6IHN0cmluZyxcbiAgdmVyc2lvbjogbnVtYmVyLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jUGFnZVtdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIC8vIEdldCB0aGUgZG9jdW1lbnRhdGlvbiByZWNvcmQgZm9yIHRoaXMgdmVyc2lvblxuICBjb25zdCB7IGRhdGE6IGRvY3VtZW50YXRpb24sIGVycm9yOiBkb2NFcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJkb2N1bWVudGF0aW9uXCIpXG4gICAgLnNlbGVjdChcImlkXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLmVxKFwidmVyc2lvblwiLCB2ZXJzaW9uKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZG9jRXJyb3IgfHwgIWRvY3VtZW50YXRpb24pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRG9jdW1lbnRhdGlvbiB2ZXJzaW9uIG5vdCBmb3VuZFwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IHBhZ2VzLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJwYWdlc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiZG9jdW1lbnRhdGlvbl9pZFwiLCBkb2N1bWVudGF0aW9uLmlkKVxuICAgIC5vcmRlcihcIm9yZGVyX2luZGV4XCIsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKHBhZ2VzID8/IFtdKSBhcyBEb2NQYWdlW10gfTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ29udmVyc2F0aW9uIFNlcnZpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb252ZXJzYXRpb25zKFxuICByZXBvSWQ6IHN0cmluZyxcbiAgbGltaXQ6IG51bWJlciA9IDIwLFxuICB2ZXJzaW9uOiBudW1iZXIgfCBudWxsID0gbnVsbCxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbltdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGxldCBxdWVyeSA9IGNsaWVudFxuICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKTtcblxuICAvLyBGaWx0ZXIgYnkgdmVyc2lvbiBpZiBzcGVjaWZpZWRcbiAgaWYgKHZlcnNpb24gIT09IG51bGwgJiYgdmVyc2lvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcXVlcnkgPSBxdWVyeS5lcShcInJlcG9fdmVyc2lvblwiLCB2ZXJzaW9uKTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogY29udmVyc2F0aW9ucywgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5XG4gICAgLm9yZGVyKFwidXBkYXRlZF9hdFwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcbiAgICAubGltaXQobGltaXQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKGNvbnZlcnNhdGlvbnMgPz8gW10pIGFzIENvbnZlcnNhdGlvbltdIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb252ZXJzYXRpb25CeUlkKFxuICBjb252ZXJzYXRpb25JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29udmVyc2F0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogY29udmVyc2F0aW9uLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpZFwiLCBjb252ZXJzYXRpb25JZClcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFjb252ZXJzYXRpb24pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiQ29udmVyc2F0aW9uIG5vdCBmb3VuZFwiIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjb252ZXJzYXRpb24gYXMgQ29udmVyc2F0aW9uIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDb252ZXJzYXRpb24oXG4gIHJlcG9JZDogc3RyaW5nLFxuICB0aXRsZT86IHN0cmluZyxcbiAgdmVyc2lvbj86IG51bWJlciB8IG51bGwsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxDb252ZXJzYXRpb24+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBjb252ZXJzYXRpb24sIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAuaW5zZXJ0KHtcbiAgICAgIHJlcG9faWQ6IHJlcG9JZCxcbiAgICAgIHVzZXJfaWQ6IHVzZXIuaWQsXG4gICAgICB0aXRsZTogdGl0bGUgfHwgXCJOZXcgQ29udmVyc2F0aW9uXCIsXG4gICAgICByZXBvX3ZlcnNpb246IHZlcnNpb24gPz8gbnVsbCxcbiAgICB9KVxuICAgIC5zZWxlY3QoKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGNvbnZlcnNhdGlvbiBhcyBDb252ZXJzYXRpb24gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNvbnZlcnNhdGlvbihcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PHZvaWQ+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLmRlbGV0ZSgpXG4gICAgLmVxKFwiaWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVuZGVmaW5lZCB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVuYW1lQ29udmVyc2F0aW9uKFxuICBjb252ZXJzYXRpb25JZDogc3RyaW5nLFxuICBuZXdUaXRsZTogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29udmVyc2F0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogY29udmVyc2F0aW9uLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLnVwZGF0ZSh7IHRpdGxlOiBuZXdUaXRsZSB9KVxuICAgIC5lcShcImlkXCIsIGNvbnZlcnNhdGlvbklkKVxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlci5pZClcbiAgICAuc2VsZWN0KClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjb252ZXJzYXRpb24gYXMgQ29udmVyc2F0aW9uIH07XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1lc3NhZ2UgU2VydmljZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvbnZlcnNhdGlvbk1lc3NhZ2VzKFxuICBjb252ZXJzYXRpb25JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29udmVyc2F0aW9uTWVzc2FnZVtdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogbWVzc2FnZXMsIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcIm1lc3NhZ2VzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJjb252ZXJzYXRpb25faWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgLm9yZGVyKFwiY3JlYXRlZF9hdFwiLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChtZXNzYWdlcyA/PyBbXSkgYXMgQ29udmVyc2F0aW9uTWVzc2FnZVtdIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVNZXNzYWdlKFxuICBjb252ZXJzYXRpb25JZDogc3RyaW5nLFxuICByb2xlOiBcInVzZXJcIiB8IFwiYXNzaXN0YW50XCIsXG4gIGNvbnRlbnQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbk1lc3NhZ2U+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBtZXNzYWdlLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJtZXNzYWdlc1wiKVxuICAgIC5pbnNlcnQoe1xuICAgICAgY29udmVyc2F0aW9uX2lkOiBjb252ZXJzYXRpb25JZCxcbiAgICAgIHJvbGUsXG4gICAgICBjb250ZW50LFxuICAgIH0pXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSBjb252ZXJzYXRpb24ncyB1cGRhdGVkX2F0IHRpbWVzdGFtcFxuICBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAudXBkYXRlKHsgdXBkYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpIH0pXG4gICAgLmVxKFwiaWRcIiwgY29udmVyc2F0aW9uSWQpO1xuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IG1lc3NhZ2UgYXMgQ29udmVyc2F0aW9uTWVzc2FnZSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZUNvZGVTbmlwcGV0cyhcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbiAgbWVzc2FnZUlkOiBzdHJpbmcsXG4gIHNuaXBwZXRzOiBBcnJheTx7IGZpbGU6IHN0cmluZzsgY29kZTogc3RyaW5nIH0+LFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29kZVNuaXBwZXRbXT4+IHtcbiAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCBzbmlwcGV0c1RvSW5zZXJ0ID0gc25pcHBldHMubWFwKChzbmlwcGV0KSA9PiAoe1xuICAgIGNvbnZlcnNhdGlvbl9pZDogY29udmVyc2F0aW9uSWQsXG4gICAgbWVzc2FnZV9pZDogbWVzc2FnZUlkLFxuICAgIGZpbGVfcGF0aDogc25pcHBldC5maWxlLFxuICAgIGNvZGVfY29udGVudDogc25pcHBldC5jb2RlLFxuICAgIGxhbmd1YWdlOiBzbmlwcGV0LmZpbGUuc3BsaXQoXCIuXCIpLnBvcCgpIHx8IG51bGwsXG4gIH0pKTtcblxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKFwiY29kZV9zbmlwcGV0c1wiKVxuICAgIC5pbnNlcnQoc25pcHBldHNUb0luc2VydClcbiAgICAuc2VsZWN0KCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBkYXRhIGFzIENvZGVTbmlwcGV0W10gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvZGVTbmlwcGV0c0ZvckNvbnZlcnNhdGlvbihcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvZGVTbmlwcGV0W10+PiB7XG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbShcImNvZGVfc25pcHBldHNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImNvbnZlcnNhdGlvbl9pZFwiLCBjb252ZXJzYXRpb25JZClcbiAgICAub3JkZXIoXCJjcmVhdGVkX2F0XCIsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGRhdGEgYXMgQ29kZVNuaXBwZXRbXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ29kZVNuaXBwZXQoXG4gIHNuaXBwZXRJZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8bnVsbD4+IHtcbiAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKFwiY29kZV9zbmlwcGV0c1wiKVxuICAgIC5kZWxldGUoKVxuICAgIC5lcShcImlkXCIsIHNuaXBwZXRJZCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBudWxsIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbmRleFJlcG9zaXRvcnkoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8dm9pZD4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGluc3RhbGxhdGlvbiwgZXJyb3I6IGluc3RhbGxhdGlvbkVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImdpdGh1Yl9pbnN0YWxsYXRpb25zXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpbnN0YWxsZWRfYnlcIiwgdXNlci5pZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKCFpbnN0YWxsYXRpb24gfHwgaW5zdGFsbGF0aW9uRXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiR2l0aHViIEFwcCBJbnN0YWxsYXRpb24gbm90IGZvdW5kIVwiIH07XG4gIH1cblxuICAvL2ZldGNoIHJlcG9cblxuICBjb25zdCByZXBvUmVzdWx0ID0gYXdhaXQgZ2V0UmVwb1dpdGhTdGF0dXMocmVwb0lkKTtcblxuICBpZiAoIXJlcG9SZXN1bHQuc3VjY2Vzcykge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogcmVwb1Jlc3VsdC5lcnJvciB9O1xuICB9XG5cbiAgY29uc3QgcmVwb1VybCA9IHJlcG9SZXN1bHQuZGF0YS5yZXBvX3VybDtcbiAgY29uc3QgaW5zdGFsbGF0aW9uSWQgPSBpbnN0YWxsYXRpb24uaW5zdGFsbGF0aW9uX2lkO1xuXG4gIC8vIEdldCB0aGUgbGF0ZXN0IHZlcnNpb24gbnVtYmVyIGZvciB0aGlzIHJlcG9cbiAgY29uc3QgeyBkYXRhOiBsYXRlc3REb2MgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCJ2ZXJzaW9uXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLm9yZGVyKFwidmVyc2lvblwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcbiAgICAubGltaXQoMSlcbiAgICAuc2luZ2xlKCk7XG5cbiAgLy8gSW5jcmVtZW50IHZlcnNpb24gKHN0YXJ0IGF0IDEgaWYgbm8gcHJldmlvdXMgdmVyc2lvbnMpXG4gIGNvbnN0IG5leHRWZXJzaW9uID0gKGxhdGVzdERvYz8udmVyc2lvbiA/PyAwKSArIDE7XG5cbiAgLy9tYXJrIHRoZSByZXBvc2l0b3J5IGFzIGluZGV4aW5nIGluIHN1cGFiYXNlIGZpcnN0XG4gIGNvbnN0IHsgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgIC51cGRhdGUoeyBpbmRleF9zdGF0dXM6IFwiaW5kZXhpbmdcIiB9KVxuICAgIC5lcShcImlkXCIsIHJlcG9JZCk7XG5cbiAgaWYgKHVwZGF0ZUVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcih1cGRhdGVFcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiB1cGRhdGVFcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICAvLyBDYWxsIHRoZSBiYWNrZW5kIHRvIHN0YXJ0IGluZGV4aW5nIChmaXJlLWFuZC1mb3JnZXQpXG4gIC8vIERvbid0IGF3YWl0IG9yIHRocm93IGVycm9ycyBzaW5jZSB0aGlzIGlzIGEgbG9uZy1ydW5uaW5nIG9wZXJhdGlvblxuICBmZXRjaChgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vcmVwb3MvaW5kZXhgLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHJlcG9fdXJsOiByZXBvVXJsLFxuICAgICAgcmVwb19pZDogcmVwb0lkLFxuICAgICAgdXNlcl9pZDogdXNlci5pZCxcbiAgICAgIGluc3RhbGxhdGlvbl9pZDogaW5zdGFsbGF0aW9uSWQsXG4gICAgICBicmFuY2g6IFwibWFpblwiLFxuICAgICAgdmVyc2lvbjogbmV4dFZlcnNpb24sXG4gICAgfSksXG4gIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIC8vIExvZyB0aGUgZXJyb3IgYnV0IGRvbid0IGZhaWwgdGhlIHJlcXVlc3RcbiAgICBjb25zb2xlLmVycm9yKFwiSW5kZXhpbmcgcmVxdWVzdCBmYWlsZWQ6XCIsIGVycm9yKTtcbiAgICAvLyBUaGUgYmFja2VuZCBzaG91bGQgaGFuZGxlIHVwZGF0aW5nIHRoZSByZXBvIHN0YXR1cyBvbiBmYWlsdXJlXG4gIH0pO1xuXG4gIC8vIFJldHVybiBzdWNjZXNzIGltbWVkaWF0ZWx5IC0gdGhlIGluZGV4aW5nIHdpbGwgaGFwcGVuIGluIHRoZSBiYWNrZ3JvdW5kXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVuZGVmaW5lZCB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ5U0Fra0NzQiJ9
}),
"[project]/src/components/dashboard/chat/chat-interface.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatInterface
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useChatUIStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/useChatUIStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$chat$2f$message$2d$list$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/chat/message-list.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$chat$2f$chat$2d$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/chat/chat-input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$chat$2f$answer$2d$panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/chat/answer-panel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$chat$2f$chat$2d$empty$2d$state$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/chat/chat-empty-state.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$chat$2f$model$2d$selector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/chat/model-selector.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$chat$2f$version$2d$selector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/chat/version-selector.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$5c01a6__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/services/data:5c01a6 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$58fd98__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/services/data:58fd98 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$563c3b__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/services/data:563c3b [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$2a446f__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/services/data:2a446f [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$35ea92__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/services/data:35ea92 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
function MessageListSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 overflow-y-auto px-6 py-4 space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 flex flex-row gap-6 px-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                className: "h-8 w-3/4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/chat/chat-interface.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                className: "h-8 w-full"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/chat/chat-interface.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/chat/chat-interface.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-10 w-48 rounded-md"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/chat/chat-interface.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/chat/chat-interface.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-elevated rounded-lg border border-gray-800 p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                        className: "h-4 w-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/chat/chat-interface.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                        className: "h-4 w-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/chat/chat-interface.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                        className: "h-4 w-3/4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/chat/chat-interface.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/chat/chat-interface.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 mt-4 pt-4 border-t border-gray-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                        className: "h-8 w-8 rounded-md"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/chat/chat-interface.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                        className: "h-8 w-8 rounded-md"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/chat/chat-interface.tsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/chat/chat-interface.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/chat/chat-interface.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/chat/chat-interface.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/chat/chat-interface.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 flex flex-row gap-6 px-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 space-y-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-8 w-2/3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/chat/chat-interface.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/chat/chat-interface.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-10 w-48 rounded-md"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/chat/chat-interface.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/chat/chat-interface.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/chat/chat-interface.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
function ChatInterface() {
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [conversationTurns, setConversationTurns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [responseLoading, setResponseLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [chatInputDisabled, setChatInputDisabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const initialMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useChatUIStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatUIStore"])((state)=>state.initialMessage);
    const selectedModel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useChatUIStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatUIStore"])((state)=>state.selectedModel);
    const setSelectedModel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useChatUIStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatUIStore"])((state)=>state.setSelectedModel);
    const conversation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useChatUIStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatUIStore"])((state)=>state.conversation);
    const setConversation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useChatUIStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatUIStore"])((state)=>state.setConversation);
    const repoId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useChatUIStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatUIStore"])((state)=>state.repoId);
    const selectedVersion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useChatUIStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatUIStore"])((state)=>state.selectedVersion);
    const hasSentInitialMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Fetch messages for selected conversation
    const { data: conversationMessages, isLoading: messagesLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "messages",
            conversation?.id
        ],
        queryFn: async ()=>{
            if (!conversation?.id) return [];
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$5c01a6__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getConversationMessages"])(conversation.id);
            if (!result.success) throw new Error(result.error);
            return result.data;
        },
        enabled: !!conversation?.id,
        staleTime: 1000 * 60 * 5
    });
    // Fetch code snippets for selected conversation
    const { data: conversationCodeSnippets, isLoading: snippetsLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "codeSnippets",
            conversation?.id
        ],
        queryFn: async ()=>{
            if (!conversation?.id) return [];
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$2a446f__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getCodeSnippetsForConversation"])(conversation.id);
            if (!result.success) throw new Error(result.error);
            return result.data;
        },
        enabled: !!conversation?.id,
        staleTime: 1000 * 60 * 5
    });
    const sendMessage = async (text)=>{
        if (chatInputDisabled || !text.trim()) return;
        setChatInputDisabled(true);
        setResponseLoading(true);
        const userQuestion = text;
        const timestamp = new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit"
        });
        // If no conversation exists, create one
        let currentConversation = conversation;
        if (!currentConversation && repoId) {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$58fd98__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createConversation"])(repoId, userQuestion, selectedVersion);
            if (result.success) {
                currentConversation = result.data;
                setConversation(currentConversation);
                // Invalidate conversations query to refresh the list
                queryClient.invalidateQueries({
                    queryKey: [
                        "conversations",
                        repoId,
                        selectedVersion
                    ]
                });
            } else {
                console.error("Failed to create conversation:", result.error);
                setChatInputDisabled(false);
                setResponseLoading(false);
                return;
            }
        }
        // Save user message to database
        if (currentConversation) {
            const messageResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$563c3b__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createMessage"])(currentConversation.id, "user", userQuestion);
            if (!messageResult.success) {
                console.error("Failed to save user message:", messageResult.error);
            }
        }
        // Add user message to chat
        setMessages((prevMessages)=>[
                ...prevMessages,
                {
                    id: `temp-${Date.now()}`,
                    text: userQuestion,
                    sender: "user",
                    timestamp
                }
            ]);
        // Create a new conversation turn with loading state
        const turnId = Date.now();
        setConversationTurns((prevTurns)=>[
                ...prevTurns,
                {
                    id: turnId,
                    userQuestion,
                    timestamp,
                    codeSnippets: [],
                    loading: true
                }
            ]);
        setInputValue("");
        try {
            // Call the streaming API endpoint
            const new_conversation = [];
            //start a new conversation
            if (!conversationMessages) {}
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    query: userQuestion,
                    model: selectedModel.name,
                    conversation: conversationMessages ? conversationMessages : new_conversation,
                    repoId
                })
            });
            if (!response.ok) {
                throw new Error(`API error: ${response.statusText}`);
            }
            if (!response.body) {
                throw new Error("No response body");
            }
            // Handle the streaming response
            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let accumulatedText = "";
            let buffer = ""; // Buffer for incomplete SSE messages
            const assistantMessageId = `temp-assistant-${Date.now()}`;
            let firstContentReceived = false;
            // Read the stream
            while(true){
                const { done, value } = await reader.read();
                if (done) {
                    console.log("Stream done. Final accumulated text:", accumulatedText);
                    break;
                }
                // Decode the chunk and add to buffer
                const chunk = decoder.decode(value, {
                    stream: true
                });
                buffer += chunk;
                // Process complete SSE messages (ending with \n\n)
                const messages = buffer.split("\n\n");
                // Keep the last incomplete message in the buffer
                buffer = messages.pop() || "";
                for (const message of messages){
                    if (!message.trim()) continue;
                    // Parse SSE format: "data: {...}"
                    if (message.startsWith("data: ")) {
                        const dataStr = message.slice(6).trim();
                        // Check for stream end
                        if (dataStr === "[DONE]") {
                            console.log("Received [DONE] signal");
                            continue;
                        }
                        try {
                            const dataObj = JSON.parse(dataStr);
                            // Extract content from {"content": "..."} format
                            if (dataObj.content && typeof dataObj.content === "string") {
                                accumulatedText += dataObj.content;
                                // On first content, hide loading and create assistant message
                                if (!firstContentReceived) {
                                    firstContentReceived = true;
                                    setResponseLoading(false);
                                    setConversationTurns((prevTurns)=>prevTurns.map((turn)=>turn.id === turnId ? {
                                                ...turn,
                                                loading: false
                                            } : turn));
                                    setMessages((prevMessages)=>[
                                            ...prevMessages,
                                            {
                                                id: assistantMessageId,
                                                text: accumulatedText,
                                                sender: "assistant",
                                                timestamp: new Date().toLocaleTimeString("en-US", {
                                                    hour: "2-digit",
                                                    minute: "2-digit"
                                                })
                                            }
                                        ]);
                                } else {
                                    // Update the assistant message with accumulated text
                                    setMessages((prevMessages)=>prevMessages.map((msg)=>msg.id === assistantMessageId ? {
                                                ...msg,
                                                text: accumulatedText
                                            } : msg));
                                }
                            }
                        } catch (e) {
                            console.warn("Failed to parse SSE data:", dataStr, e);
                        }
                    }
                }
            }
            // Save assistant message to database
            if (currentConversation && accumulatedText) {
                const assistantMessageResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$563c3b__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createMessage"])(currentConversation.id, "assistant", accumulatedText);
                if (!assistantMessageResult.success) {
                    console.error("Failed to save assistant message:", assistantMessageResult.error);
                }
            }
            // Fetch code snippets from backend
            let codeSnippets = [];
            try {
                const snippetsResponse = await fetch("/api/chat/code-snippets", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        query: userQuestion,
                        response: accumulatedText,
                        repoId,
                        model: selectedModel.name
                    })
                });
                if (snippetsResponse.ok) {
                    const snippetsData = await snippetsResponse.json();
                    codeSnippets = snippetsData.snippets || [];
                    // Save code snippets to database
                    if (currentConversation && codeSnippets.length > 0) {
                        const saveResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$35ea92__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["saveCodeSnippets"])(currentConversation.id, assistantMessageId, codeSnippets);
                        if (saveResult.success) {
                            // Update React Query cache with new snippets
                            queryClient.setQueryData([
                                "codeSnippets",
                                currentConversation.id
                            ], (old)=>[
                                    ...old || [],
                                    ...saveResult.data
                                ]);
                        } else {
                            console.error("Failed to save code snippets:", saveResult.error);
                        }
                    }
                } else {
                    console.warn("Failed to fetch code snippets:", snippetsResponse.statusText);
                }
            } catch (error) {
                console.error("Error fetching code snippets:", error);
            // Continue gracefully if snippets fail
            }
            // Update conversation turn with fetched code snippets
            setConversationTurns((prevTurns)=>prevTurns.map((turn)=>turn.id === turnId ? {
                        ...turn,
                        loading: false,
                        codeSnippets: codeSnippets
                    } : turn));
        } catch (error) {
            console.error("Error sending message:", error);
            // Add error message
            setMessages((prevMessages)=>[
                    ...prevMessages,
                    {
                        id: `temp-error-${Date.now()}`,
                        text: `Sorry, I encountered an error: ${error instanceof Error ? error.message : "Unknown error"}. Please try again.`,
                        sender: "assistant",
                        timestamp: new Date().toLocaleTimeString("en-US", {
                            hour: "2-digit",
                            minute: "2-digit"
                        })
                    }
                ]);
            // Update conversation turn to show error
            setConversationTurns((prevTurns)=>prevTurns.map((turn)=>turn.id === turnId ? {
                        ...turn,
                        loading: false,
                        codeSnippets: []
                    } : turn));
        } finally{
            setResponseLoading(false);
            setChatInputDisabled(false);
        }
    };
    const handleSend = ()=>{
        sendMessage(inputValue);
    };
    // Clear messages when conversation changes (including when set to null)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMessages([]);
        setConversationTurns([]);
    }, [
        conversation?.id
    ]);
    // Load conversation messages and code snippets when they're fetched
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Wait for both queries to finish loading before building turns
        if (messagesLoading || snippetsLoading) {
            return;
        }
        if (conversationMessages && conversationMessages.length > 0) {
            const loadedMessages = conversationMessages.map((msg)=>({
                    id: msg.id,
                    text: msg.content,
                    sender: msg.role,
                    timestamp: new Date(msg.created_at).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit"
                    })
                }));
            setMessages(loadedMessages);
            // Build conversation turns from loaded messages and snippets
            const turns = [];
            for(let i = 0; i < loadedMessages.length; i += 2){
                const userMsg = loadedMessages[i];
                const assistantMsg = loadedMessages[i + 1];
                if (userMsg && assistantMsg) {
                    // Find snippets for this assistant message
                    const snippetsForMsg = (conversationCodeSnippets || []).filter((snippet)=>snippet.message_id === assistantMsg.id).map((snippet)=>({
                            file: snippet.file_path,
                            code: snippet.code_content
                        }));
                    turns.push({
                        id: i / 2,
                        userQuestion: userMsg.text,
                        timestamp: userMsg.timestamp,
                        codeSnippets: snippetsForMsg,
                        loading: false
                    });
                }
            }
            setConversationTurns(turns);
        }
    }, [
        conversationMessages,
        conversationCodeSnippets,
        messagesLoading,
        snippetsLoading
    ]);
    // Auto-send initial message when component mounts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (initialMessage && !hasSentInitialMessage.current) {
            hasSentInitialMessage.current = true;
            // Clear any existing conversation to start fresh
            setConversation(null);
            // Send the initial message
            sendMessage(initialMessage);
        }
    }, [
        initialMessage,
        setConversation
    ]);
    // Show empty state when there are no messages and no initial message
    const showEmptyState = messages.length === 0 && !initialMessage && !conversation;
    // Show loading state when fetching messages for a selected conversation
    const showMessagesLoading = messagesLoading && !!conversation;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-[calc(100vh-64px)] bg-white dark:bg-background text-gray-900 dark:text-gray-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col w-1/2 border-r border-gray-200 dark:border-gray-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-6 py-4 border-b border-border",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$chat$2f$model$2d$selector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    selectedModel: selectedModel,
                                    onSelectModel: setSelectedModel
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/chat/chat-interface.tsx",
                                    lineNumber: 523,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$chat$2f$version$2d$selector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/chat/chat-interface.tsx",
                                    lineNumber: 527,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/chat/chat-interface.tsx",
                            lineNumber: 522,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/chat/chat-interface.tsx",
                        lineNumber: 521,
                        columnNumber: 9
                    }, this),
                    showEmptyState ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$chat$2f$chat$2d$empty$2d$state$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        onSendMessage: sendMessage
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/chat/chat-interface.tsx",
                        lineNumber: 532,
                        columnNumber: 11
                    }, this) : showMessagesLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MessageListSkeleton, {}, void 0, false, {
                        fileName: "[project]/src/components/dashboard/chat/chat-interface.tsx",
                        lineNumber: 534,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$chat$2f$message$2d$list$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        messages: messages,
                        loading: responseLoading
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/chat/chat-interface.tsx",
                        lineNumber: 536,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$chat$2f$chat$2d$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        value: inputValue,
                        onChange: setInputValue,
                        onSend: handleSend,
                        disabled: chatInputDisabled
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/chat/chat-interface.tsx",
                        lineNumber: 538,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/chat/chat-interface.tsx",
                lineNumber: 519,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$chat$2f$answer$2d$panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                conversationTurns: conversationTurns
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/chat/chat-interface.tsx",
                lineNumber: 547,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/chat/chat-interface.tsx",
        lineNumber: 517,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/dashboard/chat/chat-overlay.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useChatUIStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/useChatUIStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$chat$2f$chat$2d$interface$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/chat/chat-interface.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function ChatOverlay() {
    const { isExpanded } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useChatUIStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatUIStore"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        initial: false,
        children: isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 z-50 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                layoutId: "chat-container",
                transition: {
                    duration: 0.3
                },
                style: {
                    borderRadius: 12
                },
                layout: true,
                className: "relative flex h-full w-full overflow-y-auto transform-gpu will-change-transform bg-white dark:bg-background border border-border shadow-2xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        delay: 0.15,
                        duration: 0.1
                    },
                    className: "relative z-20 w-full flex flex-col h-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-hidden px-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$chat$2f$chat$2d$interface$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/components/dashboard/chat/chat-overlay.tsx",
                            lineNumber: 34,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/chat/chat-overlay.tsx",
                        lineNumber: 33,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/chat/chat-overlay.tsx",
                    lineNumber: 25,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/chat/chat-overlay.tsx",
                lineNumber: 16,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/chat/chat-overlay.tsx",
            lineNumber: 14,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/chat/chat-overlay.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/dashboard/navbar-context-setter.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavbarContextSetter",
    ()=>NavbarContextSetter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useNavbarStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/useNavbarStore.ts [app-ssr] (ecmascript)");
"use client";
;
;
function NavbarContextSetter({ contextText, breadcrumbs, appendBreadcrumb }) {
    const setContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useNavbarStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNavBarStore"])((state)=>state.setContext);
    const setBreadcrumbs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useNavbarStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNavBarStore"])((state)=>state.setBreadcrumbs);
    const appendBreadcrumbAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useNavbarStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNavBarStore"])((state)=>state.appendBreadcrumb);
    const reset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useNavbarStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNavBarStore"])((state)=>state.reset);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (breadcrumbs) {
            setBreadcrumbs(breadcrumbs);
        } else if (appendBreadcrumb) {
            appendBreadcrumbAction(appendBreadcrumb);
        } else if (contextText) {
            setContext(contextText);
        }
        // Clean up on unmount
        return ()=>{
            reset();
        };
    }, [
        contextText,
        breadcrumbs,
        appendBreadcrumb,
        setContext,
        setBreadcrumbs,
        appendBreadcrumbAction,
        reset
    ]);
    // This component doesn't render anything
    return null;
}
}),
"[project]/src/components/dashboard/repo-context-setter.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RepoContextSetter",
    ()=>RepoContextSetter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useChatUIStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/useChatUIStore.ts [app-ssr] (ecmascript)");
"use client";
;
;
function RepoContextSetter({ repoId, version }) {
    const setRepoId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useChatUIStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatUIStore"])((state)=>state.setRepoId);
    const setSelectedVersion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useChatUIStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatUIStore"])((state)=>state.setSelectedVersion);
    const reset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useChatUIStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatUIStore"])((state)=>state.reset);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setRepoId(repoId);
        setSelectedVersion(version);
        // Cleanup when component unmounts (user navigates away)
        return ()=>{
            reset();
        };
    }, [
        repoId,
        version,
        setRepoId,
        setSelectedVersion,
        reset
    ]);
    return null;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__166f4b09._.js.map