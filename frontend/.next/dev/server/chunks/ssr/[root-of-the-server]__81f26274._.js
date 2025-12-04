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
"[project]/src/lib/services/data:87d34b [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"400db6ea304681407a6ffd627cbcd0a8a8d67d75ee":"indexRepository"},"src/lib/services/repoService.ts",""] */ __turbopack_context__.s([
    "indexRepository",
    ()=>indexRepository
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var indexRepository = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("400db6ea304681407a6ffd627cbcd0a8a8d67d75ee", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "indexRepository"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcmVwb1NlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAL3V0aWxzL3N1cGFiYXNlL3NlcnZlclwiO1xuaW1wb3J0IHtcbiAgUmVwbyxcbiAgRG9jdW1lbnRhdGlvbixcbiAgRG9jUGFnZSxcbiAgQ29udmVyc2F0aW9uLFxuICBDb252ZXJzYXRpb25NZXNzYWdlLFxuICBDb2RlU25pcHBldCxcbn0gZnJvbSBcIkAvYXBwL3R5cGVzL3N1cGFiYXNlXCI7XG5pbXBvcnQgeyBBY3Rpb25SZXN1bHQgfSBmcm9tIFwiQC9hcHAvdHlwZXMvYWN0aW9uXCI7XG5pbXBvcnQge1xuICB2ZXJpZnlHaXRodWJSZXBvQWNjZXNzLFxuICB2ZXJpZnlHaXRMYWJSZXBvQWNjZXNzLFxufSBmcm9tIFwiLi9naXRQcm92aWRlclNlcnZpY2VcIjtcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHBhcnNlIEdpdEh1YiBVUkxzXG5mdW5jdGlvbiBwYXJzZUdpdEh1YlVybCh1cmw6IHN0cmluZyk6IHsgb3duZXI6IHN0cmluZzsgcmVwbzogc3RyaW5nIH0ge1xuICB0cnkge1xuICAgIC8vIEhhbmRsZSBtdWx0aXBsZSBmb3JtYXRzOlxuICAgIC8vIC0gaHR0cHM6Ly9naXRodWIuY29tL293bmVyL3JlcG9cbiAgICAvLyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9vd25lci9yZXBvLmdpdFxuICAgIC8vIC0gZ2l0QGdpdGh1Yi5jb206b3duZXIvcmVwby5naXRcblxuICAgIHVybCA9IHVybC50cmltKCkucmVwbGFjZSgvXFwuZ2l0JC8sIFwiXCIpO1xuXG4gICAgaWYgKHVybC5pbmNsdWRlcyhcImdpdGh1Yi5jb20vXCIpKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IHVybC5zcGxpdChcImdpdGh1Yi5jb20vXCIpWzFdLnNwbGl0KFwiL1wiKTtcbiAgICAgIHJldHVybiB7IG93bmVyOiBwYXJ0c1swXSwgcmVwbzogcGFydHNbMV0gfTtcbiAgICB9XG5cbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoXCJnaXRAZ2l0aHViLmNvbTpcIikpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gdXJsLnJlcGxhY2UoXCJnaXRAZ2l0aHViLmNvbTpcIiwgXCJcIikuc3BsaXQoXCIvXCIpO1xuICAgICAgcmV0dXJuIHsgb3duZXI6IHBhcnRzWzBdLCByZXBvOiBwYXJ0c1sxXSB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IG93bmVyOiBcIlwiLCByZXBvOiBcIlwiIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgb3duZXI6IFwiXCIsIHJlcG86IFwiXCIgfTtcbiAgfVxufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gcGFyc2UgR2l0TGFiIFVSTHNcbmZ1bmN0aW9uIHBhcnNlR2l0TGFiVXJsKHVybDogc3RyaW5nKTogeyBvd25lcjogc3RyaW5nOyByZXBvOiBzdHJpbmcgfSB7XG4gIHRyeSB7XG4gICAgLy8gSGFuZGxlIG11bHRpcGxlIGZvcm1hdHM6XG4gICAgLy8gLSBodHRwczovL2dpdGxhYi5jb20vb3duZXIvcmVwb1xuICAgIC8vIC0gaHR0cHM6Ly9naXRsYWIuY29tL293bmVyL3N1Ymdyb3VwL3JlcG9cbiAgICAvLyAtIGh0dHBzOi8vZ2l0bGFiLmNvbS9vd25lci9yZXBvLmdpdFxuICAgIC8vIC0gZ2l0QGdpdGxhYi5jb206b3duZXIvcmVwby5naXRcbiAgICAvLyAtIFNlbGYtaG9zdGVkOiBodHRwczovL2dpdGxhYi5leGFtcGxlLmNvbS9vd25lci9yZXBvXG5cbiAgICB1cmwgPSB1cmwudHJpbSgpLnJlcGxhY2UoL1xcLmdpdCQvLCBcIlwiKTtcblxuICAgIC8vIEhhbmRsZSBIVFRQUyBVUkxzIChnaXRsYWIuY29tIG9yIHNlbGYtaG9zdGVkKVxuICAgIGlmICh1cmwuaW5jbHVkZXMoXCJnaXRsYWIuY29tL1wiKSB8fCAvZ2l0bGFiXFwuW14vXStcXC8vLnRlc3QodXJsKSkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgcGF0aCBhZnRlciB0aGUgZG9tYWluXG4gICAgICBjb25zdCBtYXRjaCA9IHVybC5tYXRjaCgvZ2l0bGFiW14vXSpcXC8oLispLyk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgY29uc3QgcGF0aFBhcnRzID0gbWF0Y2hbMV0uc3BsaXQoXCIvXCIpO1xuICAgICAgICAvLyBHaXRMYWIgc3VwcG9ydHMgbmVzdGVkIGdyb3Vwcywgc28gd2UgbmVlZCB0byBoYW5kbGU6XG4gICAgICAgIC8vIC0gb3duZXIvcmVwbyAoMiBwYXJ0cylcbiAgICAgICAgLy8gLSBvd25lci9zdWJncm91cC9yZXBvICgzKyBwYXJ0cylcbiAgICAgICAgaWYgKHBhdGhQYXJ0cy5sZW5ndGggPj0gMikge1xuICAgICAgICAgIC8vIFRha2UgZXZlcnl0aGluZyBleGNlcHQgdGhlIGxhc3QgcGFydCBhcyBvd25lci9ncm91cFxuICAgICAgICAgIGNvbnN0IHJlcG8gPSBwYXRoUGFydHNbcGF0aFBhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IG93bmVyID0gcGF0aFBhcnRzLnNsaWNlKDAsIC0xKS5qb2luKFwiL1wiKTtcbiAgICAgICAgICByZXR1cm4geyBvd25lciwgcmVwbyB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIFNTSCBVUkxzXG4gICAgaWYgKHVybC5zdGFydHNXaXRoKFwiZ2l0QGdpdGxhYi5jb206XCIpIHx8IC9naXRAZ2l0bGFiXFwuW146XSs6Ly50ZXN0KHVybCkpIHtcbiAgICAgIGNvbnN0IG1hdGNoID0gdXJsLm1hdGNoKC9naXRAZ2l0bGFiW146XSo6KC4rKS8pO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGNvbnN0IHBhdGhQYXJ0cyA9IG1hdGNoWzFdLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgaWYgKHBhdGhQYXJ0cy5sZW5ndGggPj0gMikge1xuICAgICAgICAgIGNvbnN0IHJlcG8gPSBwYXRoUGFydHNbcGF0aFBhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IG93bmVyID0gcGF0aFBhcnRzLnNsaWNlKDAsIC0xKS5qb2luKFwiL1wiKTtcbiAgICAgICAgICByZXR1cm4geyBvd25lciwgcmVwbyB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgb3duZXI6IFwiXCIsIHJlcG86IFwiXCIgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBvd25lcjogXCJcIiwgcmVwbzogXCJcIiB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXBvc0J5T3JnYW5pemF0aW9uSWQoXG4gIG9yZ2FuaXphdGlvbklkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHVzZXIgPSBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJvcmdhbml6YXRpb25faWRcIiwgb3JnYW5pemF0aW9uSWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKGRhdGEgPz8gW10pIGFzIFJlcG9bXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUmVwb1ZpYUdpdGh1YihcbiAgZm9ybURhdGE6IEZvcm1EYXRhLFxuICBvcmdJZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8UmVwbyB8IHVuZGVmaW5lZD4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IHByb3ZpZGVyID0gZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IHVybCA9IGZvcm1EYXRhLmdldChcImdpdGh1Yi11cmxcIikgYXMgc3RyaW5nO1xuXG4gIGlmICghbmFtZSkge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJOYW1lIGlzIHJlcXVpcmVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGluc3RhbGxhdGlvbiB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJnaXRodWJfaW5zdGFsbGF0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiaW5zdGFsbGVkX2J5XCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghaW5zdGFsbGF0aW9uKSB7XG4gICAgLy8gTm8gR2l0SHViIEFwcCBpbnN0YWxsYXRpb24gLSBwcm9tcHQgdXNlciB0byBpbnN0YWxsXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiSW5zdGFsbGF0aW9uIE5lZWRlZFwiLFxuICAgIH07XG4gIH1cblxuICAvL3BhcnNlIHVybCBmb3Igb3duZXIgYW5kIHJlcG9cbiAgY29uc3QgeyBvd25lciwgcmVwbzogcmVwb05hbWUgfSA9IHBhcnNlR2l0SHViVXJsKHVybCk7XG5cbiAgY29uc3QgaGFzQWNjZXNzID0gYXdhaXQgdmVyaWZ5R2l0aHViUmVwb0FjY2VzcyhcbiAgICBpbnN0YWxsYXRpb24uaW5zdGFsbGF0aW9uX2lkLFxuICAgIG93bmVyLFxuICAgIHJlcG9OYW1lLFxuICApO1xuXG4gIGlmICghaGFzQWNjZXNzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiQWNjZXNzIERlbmllZFwiLFxuICAgIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IHJlcG8sIGVycm9yOiByZXBvRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLmluc2VydCh7XG4gICAgICBuYW1lLFxuICAgICAgcHJvdmlkZXIsXG4gICAgICByZXBvX3VybDogdXJsLFxuICAgICAgb3JnYW5pemF0aW9uX2lkOiBvcmdJZCxcbiAgICAgIGluZGV4ZWRfYnk6IHVzZXIuaWQsXG4gICAgICBpbmRleF9zdGF0dXM6IFwibm90IGluZGV4ZWRcIixcbiAgICB9KVxuICAgIC5zZWxlY3QoKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAocmVwb0Vycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiByZXBvRXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVwbyBhcyBSZXBvIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZXBvVmlhR2l0bGFiKFxuICBmb3JtRGF0YTogRm9ybURhdGEsXG4gIG9yZ0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvIHwgdW5kZWZpbmVkPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgY29uc3QgcHJvdmlkZXIgPSBmb3JtRGF0YS5nZXQoXCJ0eXBlXCIpIGFzIHN0cmluZztcbiAgY29uc3QgdXJsID0gZm9ybURhdGEuZ2V0KFwiZ2l0bGFiLXVybFwiKSBhcyBzdHJpbmc7XG5cbiAgLy8gVmFsaWRhdGUgaW5wdXRzXG4gIGlmICghbmFtZSB8fCBuYW1lLnRyaW0oKSA9PT0gXCJcIikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJSZXBvc2l0b3J5IG5hbWUgaXMgcmVxdWlyZWRcIiB9O1xuICB9XG5cbiAgaWYgKCF1cmwgfHwgdXJsLnRyaW0oKSA9PT0gXCJcIikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJHaXRMYWIgVVJMIGlzIHJlcXVpcmVkXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogaW5zdGFsbGF0aW9uIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImdpdGxhYl9pbnN0YWxsYXRpb25zXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpbnN0YWxsZWRfYnlcIiwgdXNlci5pZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKCFpbnN0YWxsYXRpb24pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiSW5zdGFsbGF0aW9uIE5lZWRlZFwiIH07XG4gIH1cblxuICBjb25zdCB7IG93bmVyLCByZXBvOiByZXBvTmFtZSB9ID0gcGFyc2VHaXRMYWJVcmwodXJsKTtcblxuICAvL3ZlcmlmeSBhY2Nlc3NcbiAgY29uc3QgaGFzQWNjZXNzID0gYXdhaXQgdmVyaWZ5R2l0TGFiUmVwb0FjY2VzcyhcbiAgICBpbnN0YWxsYXRpb24uYWNjZXNzX3Rva2VuLFxuICAgIG93bmVyLFxuICAgIHJlcG9OYW1lLFxuICApO1xuXG4gIGlmICghaGFzQWNjZXNzKSB7XG4gICAgaWYgKGluc3RhbGxhdGlvbi5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogXCJBY2Nlc3MgcmVxdWlyZWQhXCIsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yOiBcIkFjY2VzcyBkZW5pZWQhXCIsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3I6IHJlcG9FcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAuaW5zZXJ0KHtcbiAgICAgIG5hbWUsXG4gICAgICBwcm92aWRlcixcbiAgICAgIHJlcG9fdXJsOiB1cmwsXG4gICAgICBvcmdhbml6YXRpb25faWQ6IG9yZ0lkLFxuICAgICAgaW5kZXhlZF9ieTogdXNlci5pZCxcbiAgICAgIGluZGV4X3N0YXR1czogXCJub3QgaW5kZXhlZFwiLFxuICAgIH0pXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChyZXBvRXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHJlcG9FcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXBvIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZXBvVmlhTG9jYWxGaWxlKFxuICBmb3JtRGF0YTogRm9ybURhdGEsXG4gIG9yZ0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgY29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldChcImZpbGVcIikgYXMgRmlsZTtcblxuICAvLyBWYWxpZGF0ZSBpbnB1dHNcbiAgaWYgKCFuYW1lIHx8IG5hbWUudHJpbSgpID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlJlcG9zaXRvcnkgbmFtZSBpcyByZXF1aXJlZFwiIH07XG4gIH1cblxuICBpZiAoIWZpbGUpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmlsZSBpcyByZXF1aXJlZFwiIH07XG4gIH1cblxuICAvLyBWYWxpZGF0ZSBmaWxlIHR5cGVcbiAgaWYgKCFmaWxlLm5hbWUuZW5kc1dpdGgoXCIuemlwXCIpKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIk9ubHkgLnppcCBmaWxlcyBhcmUgYWxsb3dlZFwiIH07XG4gIH1cblxuICAvLyBWYWxpZGF0ZSBmaWxlIHNpemUgKG1heCAxMDBNQilcbiAgY29uc3QgbWF4U2l6ZSA9IDEwMCAqIDEwMjQgKiAxMDI0OyAvLyAxMDBNQiBpbiBieXRlc1xuICBpZiAoZmlsZS5zaXplID4gbWF4U2l6ZSkge1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yOiBcIkZpbGUgc2l6ZSBleGNlZWRzIDEwME1CIGxpbWl0XCIsXG4gICAgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gR2VuZXJhdGUgYSB1bmlxdWUgZmlsZSBuYW1lIHRvIHByZXZlbnQgY29sbGlzaW9uc1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IERhdGUubm93KCk7XG4gICAgY29uc3Qgc2FuaXRpemVkTmFtZSA9IG5hbWUudHJpbSgpLnJlcGxhY2UoL1teYS16MC05LV9dL2dpLCBcIl9cIik7XG4gICAgY29uc3QgZmlsZU5hbWUgPSBgJHtzYW5pdGl6ZWROYW1lfV8ke3RpbWVzdGFtcH1fJHtmaWxlLm5hbWV9YDtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGAke29yZ0lkfS8ke2ZpbGVOYW1lfWA7XG5cbiAgICAvLyBVcGxvYWQgZmlsZSB0byBTdXBhYmFzZSBTdG9yYWdlXG4gICAgY29uc3QgeyBlcnJvcjogdXBsb2FkRXJyb3IgfSA9IGF3YWl0IGNsaWVudC5zdG9yYWdlXG4gICAgICAuZnJvbShcImxvY2FsX3JlcG9zXCIpXG4gICAgICAudXBsb2FkKGZpbGVQYXRoLCBmaWxlLCB7XG4gICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL3ppcFwiLFxuICAgICAgICB1cHNlcnQ6IGZhbHNlLFxuICAgICAgfSk7XG5cbiAgICBpZiAodXBsb2FkRXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJVcGxvYWQgZXJyb3I6XCIsIHVwbG9hZEVycm9yKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogYEZpbGUgdXBsb2FkIGZhaWxlZDogJHt1cGxvYWRFcnJvci5tZXNzYWdlfWAsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEdldCB0aGUgcHVibGljIFVSTCBmb3IgdGhlIHVwbG9hZGVkIGZpbGVcbiAgICBjb25zdCB7IGRhdGE6IHVybERhdGEgfSA9IGNsaWVudC5zdG9yYWdlXG4gICAgICAuZnJvbShcImxvY2FsX3JlcG9zXCIpXG4gICAgICAuZ2V0UHVibGljVXJsKGZpbGVQYXRoKTtcblxuICAgIC8vIENyZWF0ZSByZXBvc2l0b3J5IHJlY29yZCBpbiBkYXRhYmFzZVxuICAgIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3I6IHJlcG9FcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgICAgLmluc2VydCh7XG4gICAgICAgIG5hbWU6IG5hbWUudHJpbSgpLFxuICAgICAgICBwcm92aWRlcjogXCJsb2NhbFwiLFxuICAgICAgICByZXBvX3VybDogbnVsbCxcbiAgICAgICAgb2JqZWN0X3VybDogdXJsRGF0YS5wdWJsaWNVcmwsXG4gICAgICAgIG9yZ2FuaXphdGlvbl9pZDogb3JnSWQsXG4gICAgICAgIGluZGV4ZWRfYnk6IHVzZXIuaWQsXG4gICAgICAgIGluZGV4X3N0YXR1czogXCJub3QgaW5kZXhlZFwiLFxuICAgICAgfSlcbiAgICAgIC5zZWxlY3QoKVxuICAgICAgLnNpbmdsZSgpO1xuXG4gICAgaWYgKHJlcG9FcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIlJlcG9zaXRvcnkgY3JlYXRpb24gZXJyb3I6XCIsIHJlcG9FcnJvcik7XG4gICAgICAvLyBBdHRlbXB0IHRvIGNsZWFuIHVwIHVwbG9hZGVkIGZpbGVcbiAgICAgIGF3YWl0IGNsaWVudC5zdG9yYWdlLmZyb20oXCJsb2NhbF9yZXBvc1wiKS5yZW1vdmUoW2ZpbGVQYXRoXSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IGBSZXBvc2l0b3J5IGNyZWF0aW9uIGZhaWxlZDogJHtyZXBvRXJyb3IubWVzc2FnZX1gLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXBvIGFzIFJlcG8gfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiVW5leHBlY3RlZCBlcnJvcjpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yOlxuICAgICAgICBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZFwiLFxuICAgIH07XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUmVwb3NpdG9yeSBNYW5hZ2VtZW50IFNlcnZpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXBvV2l0aFN0YXR1cyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFyZXBvKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlJlcG9zaXRvcnkgbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlcG8gYXMgUmVwbyB9O1xufVxuXG50eXBlIFVwZGF0ZURhdGEgPSB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHJlcG9fdXJsPzogc3RyaW5nO1xuICBvYmplY3RfdXJsPzogc3RyaW5nO1xuICBpbmRleF9zdGF0dXM/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUmVwb1NldHRpbmdzKFxuICByZXBvSWQ6IHN0cmluZyxcbiAgc2V0dGluZ3M6IHsgbmFtZT86IHN0cmluZzsgcmVwb191cmw/OiBzdHJpbmc7IGZpbGU/OiBGaWxlIH0sXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIC8vIEdldCB0aGUgY3VycmVudCByZXBvIHRvIGNoZWNrIGl0cyBwcm92aWRlciB0eXBlXG4gIGNvbnN0IHsgZGF0YTogY3VycmVudFJlcG8gfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghY3VycmVudFJlcG8pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUmVwb3NpdG9yeSBub3QgZm91bmQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZURhdGE6IFVwZGF0ZURhdGEgPSB7fTtcblxuICAvLyBIYW5kbGUgbmFtZSB1cGRhdGVcbiAgaWYgKHNldHRpbmdzLm5hbWUpIHtcbiAgICB1cGRhdGVEYXRhLm5hbWUgPSBzZXR0aW5ncy5uYW1lO1xuICB9XG5cbiAgLy8gSGFuZGxlIEdpdEh1YiBVUkwgdXBkYXRlXG4gIGlmIChzZXR0aW5ncy5yZXBvX3VybCAmJiBjdXJyZW50UmVwby5wcm92aWRlciA9PT0gXCJnaXRodWJcIikge1xuICAgIGNvbnN0IHsgb3duZXIsIHJlcG8gfSA9IHBhcnNlR2l0SHViVXJsKHNldHRpbmdzLnJlcG9fdXJsKTtcblxuICAgIGlmICghb3duZXIgfHwgIXJlcG8pIHtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJJbnZhbGlkIEdpdEh1YiBVUkwgZm9ybWF0IVwiIH07XG4gICAgfVxuXG4gICAgLy8gVmVyaWZ5IGFjY2VzcyB0byB0aGUgbmV3IHJlcG9cbiAgICBjb25zdCB7IGRhdGE6IGluc3RhbGxhdGlvbiB9ID0gYXdhaXQgY2xpZW50XG4gICAgICAuZnJvbShcImdpdGh1Yl9pbnN0YWxsYXRpb25zXCIpXG4gICAgICAuc2VsZWN0KFwiKlwiKVxuICAgICAgLmVxKFwiaW5zdGFsbGVkX2J5XCIsIHVzZXIuaWQpXG4gICAgICAuc2luZ2xlKCk7XG5cbiAgICBpZiAoIWluc3RhbGxhdGlvbikge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkdpdEh1YiBBcHAgbm90IGluc3RhbGxlZCFcIiB9O1xuICAgIH1cblxuICAgIGNvbnN0IGhhc0FjY2VzcyA9IGF3YWl0IHZlcmlmeUdpdGh1YlJlcG9BY2Nlc3MoXG4gICAgICBpbnN0YWxsYXRpb24uaW5zdGFsbGF0aW9uX2lkLnRvU3RyaW5nKCksXG4gICAgICBvd25lcixcbiAgICAgIHJlcG8sXG4gICAgKTtcblxuICAgIGlmICghaGFzQWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6XG4gICAgICAgICAgXCJDYW5ub3QgYWNjZXNzIHRoaXMgcmVwb3NpdG9yeS4gTWFrZSBzdXJlIHRoZSBHaXRIdWIgQXBwIGlzIGluc3RhbGxlZCBmb3IgdGhpcyByZXBvc2l0b3J5LlwiLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICB1cGRhdGVEYXRhLnJlcG9fdXJsID0gc2V0dGluZ3MucmVwb191cmw7XG4gICAgdXBkYXRlRGF0YS5pbmRleF9zdGF0dXMgPSBcIm5vdCBpbmRleGVkXCI7IC8vIFRyaWdnZXIgcmUtaW5kZXhpbmdcbiAgfVxuXG4gIC8vIEhhbmRsZSBsb2NhbCBmaWxlIHVwbG9hZFxuICBpZiAoc2V0dGluZ3MuZmlsZSAmJiBjdXJyZW50UmVwby5wcm92aWRlciA9PT0gXCJsb2NhbFwiKSB7XG4gICAgY29uc3QgZmlsZSA9IHNldHRpbmdzLmZpbGU7XG4gICAgY29uc3QgZmlsZUV4dCA9IGZpbGUubmFtZS5zcGxpdChcIi5cIikucG9wKCk7XG5cbiAgICBpZiAoZmlsZUV4dCAhPT0gXCJ6aXBcIikge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIk9ubHkgLnppcCBmaWxlcyBhcmUgYWxsb3dlZCFcIiB9O1xuICAgIH1cblxuICAgIC8vIFVwbG9hZCB0byBTdXBhYmFzZSBTdG9yYWdlXG4gICAgY29uc3QgZmlsZU5hbWUgPSBgJHtyZXBvSWR9LSR7RGF0ZS5ub3coKX0uemlwYDtcbiAgICBjb25zdCB7IGRhdGE6IHVwbG9hZERhdGEsIGVycm9yOiB1cGxvYWRFcnJvciB9ID0gYXdhaXQgY2xpZW50LnN0b3JhZ2VcbiAgICAgIC5mcm9tKFwibG9jYWxfcmVwb3NcIilcbiAgICAgIC51cGxvYWQoZmlsZU5hbWUsIGZpbGUpO1xuXG4gICAgaWYgKHVwbG9hZEVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKHVwbG9hZEVycm9yKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gdXBsb2FkIGZpbGUhXCIgfTtcbiAgICB9XG5cbiAgICAvLyBHZXQgcHVibGljIFVSTFxuICAgIGNvbnN0IHsgZGF0YTogdXJsRGF0YSB9ID0gY2xpZW50LnN0b3JhZ2VcbiAgICAgIC5mcm9tKFwibG9jYWxfcmVwb3NcIilcbiAgICAgIC5nZXRQdWJsaWNVcmwoZmlsZU5hbWUpO1xuXG4gICAgdXBkYXRlRGF0YS5vYmplY3RfdXJsID0gdXJsRGF0YS5wdWJsaWNVcmw7XG4gICAgdXBkYXRlRGF0YS5pbmRleF9zdGF0dXMgPSBcInBlbmRpbmdcIjsgLy8gVHJpZ2dlciByZS1pbmRleGluZ1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSByZXBvc2l0b3J5XG4gIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnVwZGF0ZSh1cGRhdGVEYXRhKVxuICAgIC5lcShcImlkXCIsIHJlcG9JZClcbiAgICAuc2VsZWN0KClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXBvIGFzIFJlcG8gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVJlcG8oXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8eyBvcmdhbml6YXRpb25JZDogc3RyaW5nIH0+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gRmV0Y2ggdGhlIG9yZ2FuaXphdGlvbl9pZCBiZWZvcmUgZGVsZXRpbmdcbiAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvcjogcmVwb0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgIC5zZWxlY3QoXCJvcmdhbml6YXRpb25faWRcIilcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChyZXBvRXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKHJlcG9FcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiByZXBvRXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFyZXBvKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlJlcG9zaXRvcnkgbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IGNsaWVudC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpLmRlbGV0ZSgpLmVxKFwiaWRcIiwgcmVwb0lkKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHsgb3JnYW5pemF0aW9uSWQ6IHJlcG8ub3JnYW5pemF0aW9uX2lkIH0gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRyaWdnZXJSZWluZGV4KFxuICByZXBvSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PHZvaWQ+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSBpbmRleF9zdGF0dXMgdG8gJ3BlbmRpbmcnIHRvIHRyaWdnZXIgcmVpbmRleGluZ1xuICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgIC51cGRhdGUoeyBpbmRleF9zdGF0dXM6IFwicGVuZGluZ1wiIH0pXG4gICAgLmVxKFwiaWRcIiwgcmVwb0lkKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIC8vIFRPRE86IFRyaWdnZXIgYWN0dWFsIGluZGV4aW5nIGpvYi93ZWJob29rL3F1ZXVlIGhlcmVcbiAgLy8gVGhpcyBjb3VsZCBiZSBhbiBBUEkgY2FsbCB0byB5b3VyIGluZGV4aW5nIHNlcnZpY2VcblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1bmRlZmluZWQgfTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRG9jdW1lbnRhdGlvbiBTZXJ2aWNlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jdW1lbnRhdGlvbihcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2N1bWVudGF0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogZG9jdW1lbnRhdGlvbiwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFkb2N1bWVudGF0aW9uKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkRvY3VtZW50YXRpb24gbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGRvY3VtZW50YXRpb24gYXMgRG9jdW1lbnRhdGlvbiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jUGFnZXMoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jUGFnZVtdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIC8vIEdldCB0aGUgbGF0ZXN0IGRvY3VtZW50YXRpb24gdmVyc2lvbiBmb3IgdGhpcyByZXBvXG4gIGNvbnN0IHsgZGF0YTogZG9jdW1lbnRhdGlvbiwgZXJyb3I6IGRvY0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwiaWRcIilcbiAgICAuZXEoXCJyZXBvX2lkXCIsIHJlcG9JZClcbiAgICAub3JkZXIoXCJ2ZXJzaW9uXCIsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxuICAgIC5saW1pdCgxKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZG9jRXJyb3IgfHwgIWRvY3VtZW50YXRpb24pIHtcbiAgICBjb25zb2xlLmVycm9yKGRvY0Vycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRG9jdW1lbnRhdGlvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdlcywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicGFnZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImRvY3VtZW50YXRpb25faWRcIiwgZG9jdW1lbnRhdGlvbi5pZClcbiAgICAub3JkZXIoXCJvcmRlcl9pbmRleFwiLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChwYWdlcyA/PyBbXSkgYXMgRG9jUGFnZVtdIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2NQYWdlQnlJZChcbiAgcGFnZUlkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2NQYWdlPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcGFnZSwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jX3BhZ2VzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpZFwiLCBwYWdlSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFwYWdlKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlBhZ2Ugbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHBhZ2UgYXMgRG9jUGFnZSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jUGFnZXNIaWVyYXJjaGljYWwoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jUGFnZVtdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIC8vIEZpcnN0IGdldCB0aGUgZG9jdW1lbnRhdGlvbiBJRCBmb3IgdGhpcyByZXBvXG4gIGNvbnN0IHsgZGF0YTogZG9jdW1lbnRhdGlvbiwgZXJyb3I6IGRvY0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwiaWRcIilcbiAgICAuZXEoXCJyZXBvX2lkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGRvY0Vycm9yIHx8ICFkb2N1bWVudGF0aW9uKSB7XG4gICAgY29uc29sZS5lcnJvcihkb2NFcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkRvY3VtZW50YXRpb24gbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcGFnZXMsIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY19wYWdlc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiZG9jdW1lbnRhdGlvbl9pZFwiLCBkb2N1bWVudGF0aW9uLmlkKVxuICAgIC5vcmRlcihcIm9yZGVyX2luZGV4XCIsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgLy8gUGFnZXMgYXJlIGFscmVhZHkgc29ydGVkIGJ5IG9yZGVyX2luZGV4XG4gIC8vIFRoZSBwYXJlbnRfcGFnZV9pZCBmaWVsZCBtYWludGFpbnMgdGhlIGhpZXJhcmNoeVxuICAvLyBGcm9udGVuZCBjYW4gdXNlIHRoaXMgdG8gcmVuZGVyIHRoZSB0cmVlIHN0cnVjdHVyZVxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiAocGFnZXMgPz8gW10pIGFzIERvY1BhZ2VbXSB9O1xufVxuXG4vKipcbiAqIEdldCBhbGwgZG9jdW1lbnRhdGlvbiB2ZXJzaW9ucyBmb3IgYSByZXBvc2l0b3J5XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2N1bWVudGF0aW9uVmVyc2lvbnMoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jdW1lbnRhdGlvbltdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogdmVyc2lvbnMsIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5vcmRlcihcInZlcnNpb25cIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKHZlcnNpb25zID8/IFtdKSBhcyBEb2N1bWVudGF0aW9uW10gfTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGxhdGVzdCBjb21wbGV0ZWQgZG9jdW1lbnRhdGlvbiB2ZXJzaW9uIGZvciBhIHJlcG9zaXRvcnlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExhdGVzdERvY3VtZW50YXRpb24oXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jdW1lbnRhdGlvbj4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGRvY3VtZW50YXRpb24sIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5vcmRlcihcInZlcnNpb25cIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXG4gICAgLmxpbWl0KDEpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghZG9jdW1lbnRhdGlvbikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJEb2N1bWVudGF0aW9uIG5vdCBmb3VuZFwiIH07XG4gIH1cblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGRvY3VtZW50YXRpb24gYXMgRG9jdW1lbnRhdGlvbiB9O1xufVxuXG4vKipcbiAqIEdldCBkb2N1bWVudGF0aW9uIHBhZ2VzIGZvciBhIHNwZWNpZmljIHZlcnNpb25cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERvY1BhZ2VzRm9yVmVyc2lvbihcbiAgcmVwb0lkOiBzdHJpbmcsXG4gIHZlcnNpb246IG51bWJlcixcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PERvY1BhZ2VbXT4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICAvLyBHZXQgdGhlIGRvY3VtZW50YXRpb24gcmVjb3JkIGZvciB0aGlzIHZlcnNpb25cbiAgY29uc3QgeyBkYXRhOiBkb2N1bWVudGF0aW9uLCBlcnJvcjogZG9jRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCJpZFwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5lcShcInZlcnNpb25cIiwgdmVyc2lvbilcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGRvY0Vycm9yIHx8ICFkb2N1bWVudGF0aW9uKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkRvY3VtZW50YXRpb24gdmVyc2lvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdlcywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicGFnZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImRvY3VtZW50YXRpb25faWRcIiwgZG9jdW1lbnRhdGlvbi5pZClcbiAgICAub3JkZXIoXCJvcmRlcl9pbmRleFwiLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChwYWdlcyA/PyBbXSkgYXMgRG9jUGFnZVtdIH07XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENvbnZlcnNhdGlvbiBTZXJ2aWNlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29udmVyc2F0aW9ucyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4gIGxpbWl0OiBudW1iZXIgPSAyMCxcbiAgdmVyc2lvbjogbnVtYmVyIHwgbnVsbCA9IG51bGwsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxDb252ZXJzYXRpb25bXT4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBsZXQgcXVlcnkgPSBjbGllbnRcbiAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlci5pZCk7XG5cbiAgLy8gRmlsdGVyIGJ5IHZlcnNpb24gaWYgc3BlY2lmaWVkXG4gIGlmICh2ZXJzaW9uICE9PSBudWxsICYmIHZlcnNpb24gIT09IHVuZGVmaW5lZCkge1xuICAgIHF1ZXJ5ID0gcXVlcnkuZXEoXCJyZXBvX3ZlcnNpb25cIiwgdmVyc2lvbik7XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGNvbnZlcnNhdGlvbnMsIGVycm9yIH0gPSBhd2FpdCBxdWVyeVxuICAgIC5vcmRlcihcInVwZGF0ZWRfYXRcIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXG4gICAgLmxpbWl0KGxpbWl0KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChjb252ZXJzYXRpb25zID8/IFtdKSBhcyBDb252ZXJzYXRpb25bXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29udmVyc2F0aW9uQnlJZChcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbj4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGNvbnZlcnNhdGlvbiwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiaWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIGlmICghY29udmVyc2F0aW9uKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkNvbnZlcnNhdGlvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY29udmVyc2F0aW9uIGFzIENvbnZlcnNhdGlvbiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ29udmVyc2F0aW9uKFxuICByZXBvSWQ6IHN0cmluZyxcbiAgdGl0bGU/OiBzdHJpbmcsXG4gIHZlcnNpb24/OiBudW1iZXIgfCBudWxsLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29udmVyc2F0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogY29udmVyc2F0aW9uLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLmluc2VydCh7XG4gICAgICByZXBvX2lkOiByZXBvSWQsXG4gICAgICB1c2VyX2lkOiB1c2VyLmlkLFxuICAgICAgdGl0bGU6IHRpdGxlIHx8IFwiTmV3IENvbnZlcnNhdGlvblwiLFxuICAgICAgcmVwb192ZXJzaW9uOiB2ZXJzaW9uID8/IG51bGwsXG4gICAgfSlcbiAgICAuc2VsZWN0KClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjb252ZXJzYXRpb24gYXMgQ29udmVyc2F0aW9uIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDb252ZXJzYXRpb24oXG4gIGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDx2b2lkPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgIC5kZWxldGUoKVxuICAgIC5lcShcImlkXCIsIGNvbnZlcnNhdGlvbklkKVxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlci5pZCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1bmRlZmluZWQgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbmFtZUNvbnZlcnNhdGlvbihcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbiAgbmV3VGl0bGU6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbj4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGNvbnZlcnNhdGlvbiwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgIC51cGRhdGUoeyB0aXRsZTogbmV3VGl0bGUgfSlcbiAgICAuZXEoXCJpZFwiLCBjb252ZXJzYXRpb25JZClcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY29udmVyc2F0aW9uIGFzIENvbnZlcnNhdGlvbiB9O1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNZXNzYWdlIFNlcnZpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb252ZXJzYXRpb25NZXNzYWdlcyhcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbk1lc3NhZ2VbXT4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IG1lc3NhZ2VzLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJtZXNzYWdlc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiY29udmVyc2F0aW9uX2lkXCIsIGNvbnZlcnNhdGlvbklkKVxuICAgIC5vcmRlcihcImNyZWF0ZWRfYXRcIiwgeyBhc2NlbmRpbmc6IHRydWUgfSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiAobWVzc2FnZXMgPz8gW10pIGFzIENvbnZlcnNhdGlvbk1lc3NhZ2VbXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTWVzc2FnZShcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbiAgcm9sZTogXCJ1c2VyXCIgfCBcImFzc2lzdGFudFwiLFxuICBjb250ZW50OiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxDb252ZXJzYXRpb25NZXNzYWdlPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogbWVzc2FnZSwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwibWVzc2FnZXNcIilcbiAgICAuaW5zZXJ0KHtcbiAgICAgIGNvbnZlcnNhdGlvbl9pZDogY29udmVyc2F0aW9uSWQsXG4gICAgICByb2xlLFxuICAgICAgY29udGVudCxcbiAgICB9KVxuICAgIC5zZWxlY3QoKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSB0aGUgY29udmVyc2F0aW9uJ3MgdXBkYXRlZF9hdCB0aW1lc3RhbXBcbiAgYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLnVwZGF0ZSh7IHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSB9KVxuICAgIC5lcShcImlkXCIsIGNvbnZlcnNhdGlvbklkKTtcblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBtZXNzYWdlIGFzIENvbnZlcnNhdGlvbk1lc3NhZ2UgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVDb2RlU25pcHBldHMoXG4gIGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsXG4gIG1lc3NhZ2VJZDogc3RyaW5nLFxuICBzbmlwcGV0czogQXJyYXk8eyBmaWxlOiBzdHJpbmc7IGNvZGU6IHN0cmluZyB9Pixcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvZGVTbmlwcGV0W10+PiB7XG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qgc25pcHBldHNUb0luc2VydCA9IHNuaXBwZXRzLm1hcCgoc25pcHBldCkgPT4gKHtcbiAgICBjb252ZXJzYXRpb25faWQ6IGNvbnZlcnNhdGlvbklkLFxuICAgIG1lc3NhZ2VfaWQ6IG1lc3NhZ2VJZCxcbiAgICBmaWxlX3BhdGg6IHNuaXBwZXQuZmlsZSxcbiAgICBjb2RlX2NvbnRlbnQ6IHNuaXBwZXQuY29kZSxcbiAgICBsYW5ndWFnZTogc25pcHBldC5maWxlLnNwbGl0KFwiLlwiKS5wb3AoKSB8fCBudWxsLFxuICB9KSk7XG5cbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbShcImNvZGVfc25pcHBldHNcIilcbiAgICAuaW5zZXJ0KHNuaXBwZXRzVG9JbnNlcnQpXG4gICAgLnNlbGVjdCgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogZGF0YSBhcyBDb2RlU25pcHBldFtdIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb2RlU25pcHBldHNGb3JDb252ZXJzYXRpb24oXG4gIGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxDb2RlU25pcHBldFtdPj4ge1xuICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oXCJjb2RlX3NuaXBwZXRzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJjb252ZXJzYXRpb25faWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgLm9yZGVyKFwiY3JlYXRlZF9hdFwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBkYXRhIGFzIENvZGVTbmlwcGV0W10gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNvZGVTbmlwcGV0KFxuICBzbmlwcGV0SWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PG51bGw+PiB7XG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbShcImNvZGVfc25pcHBldHNcIilcbiAgICAuZGVsZXRlKClcbiAgICAuZXEoXCJpZFwiLCBzbmlwcGV0SWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogbnVsbCB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5kZXhSZXBvc2l0b3J5KFxuICByZXBvSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PHZvaWQ+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBpbnN0YWxsYXRpb24sIGVycm9yOiBpbnN0YWxsYXRpb25FcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJnaXRodWJfaW5zdGFsbGF0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiaW5zdGFsbGVkX2J5XCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghaW5zdGFsbGF0aW9uIHx8IGluc3RhbGxhdGlvbkVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkdpdGh1YiBBcHAgSW5zdGFsbGF0aW9uIG5vdCBmb3VuZCFcIiB9O1xuICB9XG5cbiAgLy9mZXRjaCByZXBvXG5cbiAgY29uc3QgcmVwb1Jlc3VsdCA9IGF3YWl0IGdldFJlcG9XaXRoU3RhdHVzKHJlcG9JZCk7XG5cbiAgaWYgKCFyZXBvUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHJlcG9SZXN1bHQuZXJyb3IgfTtcbiAgfVxuXG4gIGNvbnN0IHJlcG9VcmwgPSByZXBvUmVzdWx0LmRhdGEucmVwb191cmw7XG4gIGNvbnN0IGluc3RhbGxhdGlvbklkID0gaW5zdGFsbGF0aW9uLmluc3RhbGxhdGlvbl9pZDtcblxuICAvLyBHZXQgdGhlIGxhdGVzdCB2ZXJzaW9uIG51bWJlciBmb3IgdGhpcyByZXBvXG4gIGNvbnN0IHsgZGF0YTogbGF0ZXN0RG9jIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwidmVyc2lvblwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5vcmRlcihcInZlcnNpb25cIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXG4gICAgLmxpbWl0KDEpXG4gICAgLnNpbmdsZSgpO1xuXG4gIC8vIEluY3JlbWVudCB2ZXJzaW9uIChzdGFydCBhdCAxIGlmIG5vIHByZXZpb3VzIHZlcnNpb25zKVxuICBjb25zdCBuZXh0VmVyc2lvbiA9IChsYXRlc3REb2M/LnZlcnNpb24gPz8gMCkgKyAxO1xuXG4gIC8vbWFyayB0aGUgcmVwb3NpdG9yeSBhcyBpbmRleGluZyBpbiBzdXBhYmFzZSBmaXJzdFxuICBjb25zdCB7IGVycm9yOiB1cGRhdGVFcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAudXBkYXRlKHsgaW5kZXhfc3RhdHVzOiBcImluZGV4aW5nXCIgfSlcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpO1xuXG4gIGlmICh1cGRhdGVFcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IodXBkYXRlRXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogdXBkYXRlRXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgLy8gQ2FsbCB0aGUgYmFja2VuZCB0byBzdGFydCBpbmRleGluZyAoZmlyZS1hbmQtZm9yZ2V0KVxuICAvLyBEb24ndCBhd2FpdCBvciB0aHJvdyBlcnJvcnMgc2luY2UgdGhpcyBpcyBhIGxvbmctcnVubmluZyBvcGVyYXRpb25cbiAgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L3JlcG9zL2luZGV4YCwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICByZXBvX3VybDogcmVwb1VybCxcbiAgICAgIHJlcG9faWQ6IHJlcG9JZCxcbiAgICAgIHVzZXJfaWQ6IHVzZXIuaWQsXG4gICAgICBpbnN0YWxsYXRpb25faWQ6IGluc3RhbGxhdGlvbklkLFxuICAgICAgYnJhbmNoOiBcIm1haW5cIixcbiAgICAgIHZlcnNpb246IG5leHRWZXJzaW9uLFxuICAgIH0pLFxuICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAvLyBMb2cgdGhlIGVycm9yIGJ1dCBkb24ndCBmYWlsIHRoZSByZXF1ZXN0XG4gICAgY29uc29sZS5lcnJvcihcIkluZGV4aW5nIHJlcXVlc3QgZmFpbGVkOlwiLCBlcnJvcik7XG4gICAgLy8gVGhlIGJhY2tlbmQgc2hvdWxkIGhhbmRsZSB1cGRhdGluZyB0aGUgcmVwbyBzdGF0dXMgb24gZmFpbHVyZVxuICB9KTtcblxuICAvLyBSZXR1cm4gc3VjY2VzcyBpbW1lZGlhdGVseSAtIHRoZSBpbmRleGluZyB3aWxsIGhhcHBlbiBpbiB0aGUgYmFja2dyb3VuZFxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1bmRlZmluZWQgfTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoid1NBZ29Dc0IifQ==
}),
"[project]/src/lib/services/data:95d0cb [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"402a12e2aa2d46f9eabc580e53a6e0453753249370":"getDocumentationVersions"},"src/lib/services/repoService.ts",""] */ __turbopack_context__.s([
    "getDocumentationVersions",
    ()=>getDocumentationVersions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var getDocumentationVersions = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("402a12e2aa2d46f9eabc580e53a6e0453753249370", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getDocumentationVersions"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcmVwb1NlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAL3V0aWxzL3N1cGFiYXNlL3NlcnZlclwiO1xuaW1wb3J0IHtcbiAgUmVwbyxcbiAgRG9jdW1lbnRhdGlvbixcbiAgRG9jUGFnZSxcbiAgQ29udmVyc2F0aW9uLFxuICBDb252ZXJzYXRpb25NZXNzYWdlLFxuICBDb2RlU25pcHBldCxcbn0gZnJvbSBcIkAvYXBwL3R5cGVzL3N1cGFiYXNlXCI7XG5pbXBvcnQgeyBBY3Rpb25SZXN1bHQgfSBmcm9tIFwiQC9hcHAvdHlwZXMvYWN0aW9uXCI7XG5pbXBvcnQge1xuICB2ZXJpZnlHaXRodWJSZXBvQWNjZXNzLFxuICB2ZXJpZnlHaXRMYWJSZXBvQWNjZXNzLFxufSBmcm9tIFwiLi9naXRQcm92aWRlclNlcnZpY2VcIjtcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHBhcnNlIEdpdEh1YiBVUkxzXG5mdW5jdGlvbiBwYXJzZUdpdEh1YlVybCh1cmw6IHN0cmluZyk6IHsgb3duZXI6IHN0cmluZzsgcmVwbzogc3RyaW5nIH0ge1xuICB0cnkge1xuICAgIC8vIEhhbmRsZSBtdWx0aXBsZSBmb3JtYXRzOlxuICAgIC8vIC0gaHR0cHM6Ly9naXRodWIuY29tL293bmVyL3JlcG9cbiAgICAvLyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9vd25lci9yZXBvLmdpdFxuICAgIC8vIC0gZ2l0QGdpdGh1Yi5jb206b3duZXIvcmVwby5naXRcblxuICAgIHVybCA9IHVybC50cmltKCkucmVwbGFjZSgvXFwuZ2l0JC8sIFwiXCIpO1xuXG4gICAgaWYgKHVybC5pbmNsdWRlcyhcImdpdGh1Yi5jb20vXCIpKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IHVybC5zcGxpdChcImdpdGh1Yi5jb20vXCIpWzFdLnNwbGl0KFwiL1wiKTtcbiAgICAgIHJldHVybiB7IG93bmVyOiBwYXJ0c1swXSwgcmVwbzogcGFydHNbMV0gfTtcbiAgICB9XG5cbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoXCJnaXRAZ2l0aHViLmNvbTpcIikpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gdXJsLnJlcGxhY2UoXCJnaXRAZ2l0aHViLmNvbTpcIiwgXCJcIikuc3BsaXQoXCIvXCIpO1xuICAgICAgcmV0dXJuIHsgb3duZXI6IHBhcnRzWzBdLCByZXBvOiBwYXJ0c1sxXSB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IG93bmVyOiBcIlwiLCByZXBvOiBcIlwiIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgb3duZXI6IFwiXCIsIHJlcG86IFwiXCIgfTtcbiAgfVxufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gcGFyc2UgR2l0TGFiIFVSTHNcbmZ1bmN0aW9uIHBhcnNlR2l0TGFiVXJsKHVybDogc3RyaW5nKTogeyBvd25lcjogc3RyaW5nOyByZXBvOiBzdHJpbmcgfSB7XG4gIHRyeSB7XG4gICAgLy8gSGFuZGxlIG11bHRpcGxlIGZvcm1hdHM6XG4gICAgLy8gLSBodHRwczovL2dpdGxhYi5jb20vb3duZXIvcmVwb1xuICAgIC8vIC0gaHR0cHM6Ly9naXRsYWIuY29tL293bmVyL3N1Ymdyb3VwL3JlcG9cbiAgICAvLyAtIGh0dHBzOi8vZ2l0bGFiLmNvbS9vd25lci9yZXBvLmdpdFxuICAgIC8vIC0gZ2l0QGdpdGxhYi5jb206b3duZXIvcmVwby5naXRcbiAgICAvLyAtIFNlbGYtaG9zdGVkOiBodHRwczovL2dpdGxhYi5leGFtcGxlLmNvbS9vd25lci9yZXBvXG5cbiAgICB1cmwgPSB1cmwudHJpbSgpLnJlcGxhY2UoL1xcLmdpdCQvLCBcIlwiKTtcblxuICAgIC8vIEhhbmRsZSBIVFRQUyBVUkxzIChnaXRsYWIuY29tIG9yIHNlbGYtaG9zdGVkKVxuICAgIGlmICh1cmwuaW5jbHVkZXMoXCJnaXRsYWIuY29tL1wiKSB8fCAvZ2l0bGFiXFwuW14vXStcXC8vLnRlc3QodXJsKSkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgcGF0aCBhZnRlciB0aGUgZG9tYWluXG4gICAgICBjb25zdCBtYXRjaCA9IHVybC5tYXRjaCgvZ2l0bGFiW14vXSpcXC8oLispLyk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgY29uc3QgcGF0aFBhcnRzID0gbWF0Y2hbMV0uc3BsaXQoXCIvXCIpO1xuICAgICAgICAvLyBHaXRMYWIgc3VwcG9ydHMgbmVzdGVkIGdyb3Vwcywgc28gd2UgbmVlZCB0byBoYW5kbGU6XG4gICAgICAgIC8vIC0gb3duZXIvcmVwbyAoMiBwYXJ0cylcbiAgICAgICAgLy8gLSBvd25lci9zdWJncm91cC9yZXBvICgzKyBwYXJ0cylcbiAgICAgICAgaWYgKHBhdGhQYXJ0cy5sZW5ndGggPj0gMikge1xuICAgICAgICAgIC8vIFRha2UgZXZlcnl0aGluZyBleGNlcHQgdGhlIGxhc3QgcGFydCBhcyBvd25lci9ncm91cFxuICAgICAgICAgIGNvbnN0IHJlcG8gPSBwYXRoUGFydHNbcGF0aFBhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IG93bmVyID0gcGF0aFBhcnRzLnNsaWNlKDAsIC0xKS5qb2luKFwiL1wiKTtcbiAgICAgICAgICByZXR1cm4geyBvd25lciwgcmVwbyB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIFNTSCBVUkxzXG4gICAgaWYgKHVybC5zdGFydHNXaXRoKFwiZ2l0QGdpdGxhYi5jb206XCIpIHx8IC9naXRAZ2l0bGFiXFwuW146XSs6Ly50ZXN0KHVybCkpIHtcbiAgICAgIGNvbnN0IG1hdGNoID0gdXJsLm1hdGNoKC9naXRAZ2l0bGFiW146XSo6KC4rKS8pO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGNvbnN0IHBhdGhQYXJ0cyA9IG1hdGNoWzFdLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgaWYgKHBhdGhQYXJ0cy5sZW5ndGggPj0gMikge1xuICAgICAgICAgIGNvbnN0IHJlcG8gPSBwYXRoUGFydHNbcGF0aFBhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IG93bmVyID0gcGF0aFBhcnRzLnNsaWNlKDAsIC0xKS5qb2luKFwiL1wiKTtcbiAgICAgICAgICByZXR1cm4geyBvd25lciwgcmVwbyB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgb3duZXI6IFwiXCIsIHJlcG86IFwiXCIgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBvd25lcjogXCJcIiwgcmVwbzogXCJcIiB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXBvc0J5T3JnYW5pemF0aW9uSWQoXG4gIG9yZ2FuaXphdGlvbklkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHVzZXIgPSBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJvcmdhbml6YXRpb25faWRcIiwgb3JnYW5pemF0aW9uSWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKGRhdGEgPz8gW10pIGFzIFJlcG9bXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUmVwb1ZpYUdpdGh1YihcbiAgZm9ybURhdGE6IEZvcm1EYXRhLFxuICBvcmdJZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8UmVwbyB8IHVuZGVmaW5lZD4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IHByb3ZpZGVyID0gZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IHVybCA9IGZvcm1EYXRhLmdldChcImdpdGh1Yi11cmxcIikgYXMgc3RyaW5nO1xuXG4gIGlmICghbmFtZSkge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJOYW1lIGlzIHJlcXVpcmVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGluc3RhbGxhdGlvbiB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJnaXRodWJfaW5zdGFsbGF0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiaW5zdGFsbGVkX2J5XCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghaW5zdGFsbGF0aW9uKSB7XG4gICAgLy8gTm8gR2l0SHViIEFwcCBpbnN0YWxsYXRpb24gLSBwcm9tcHQgdXNlciB0byBpbnN0YWxsXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiSW5zdGFsbGF0aW9uIE5lZWRlZFwiLFxuICAgIH07XG4gIH1cblxuICAvL3BhcnNlIHVybCBmb3Igb3duZXIgYW5kIHJlcG9cbiAgY29uc3QgeyBvd25lciwgcmVwbzogcmVwb05hbWUgfSA9IHBhcnNlR2l0SHViVXJsKHVybCk7XG5cbiAgY29uc3QgaGFzQWNjZXNzID0gYXdhaXQgdmVyaWZ5R2l0aHViUmVwb0FjY2VzcyhcbiAgICBpbnN0YWxsYXRpb24uaW5zdGFsbGF0aW9uX2lkLFxuICAgIG93bmVyLFxuICAgIHJlcG9OYW1lLFxuICApO1xuXG4gIGlmICghaGFzQWNjZXNzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiQWNjZXNzIERlbmllZFwiLFxuICAgIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IHJlcG8sIGVycm9yOiByZXBvRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLmluc2VydCh7XG4gICAgICBuYW1lLFxuICAgICAgcHJvdmlkZXIsXG4gICAgICByZXBvX3VybDogdXJsLFxuICAgICAgb3JnYW5pemF0aW9uX2lkOiBvcmdJZCxcbiAgICAgIGluZGV4ZWRfYnk6IHVzZXIuaWQsXG4gICAgICBpbmRleF9zdGF0dXM6IFwibm90IGluZGV4ZWRcIixcbiAgICB9KVxuICAgIC5zZWxlY3QoKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAocmVwb0Vycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiByZXBvRXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVwbyBhcyBSZXBvIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZXBvVmlhR2l0bGFiKFxuICBmb3JtRGF0YTogRm9ybURhdGEsXG4gIG9yZ0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvIHwgdW5kZWZpbmVkPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgY29uc3QgcHJvdmlkZXIgPSBmb3JtRGF0YS5nZXQoXCJ0eXBlXCIpIGFzIHN0cmluZztcbiAgY29uc3QgdXJsID0gZm9ybURhdGEuZ2V0KFwiZ2l0bGFiLXVybFwiKSBhcyBzdHJpbmc7XG5cbiAgLy8gVmFsaWRhdGUgaW5wdXRzXG4gIGlmICghbmFtZSB8fCBuYW1lLnRyaW0oKSA9PT0gXCJcIikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJSZXBvc2l0b3J5IG5hbWUgaXMgcmVxdWlyZWRcIiB9O1xuICB9XG5cbiAgaWYgKCF1cmwgfHwgdXJsLnRyaW0oKSA9PT0gXCJcIikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJHaXRMYWIgVVJMIGlzIHJlcXVpcmVkXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogaW5zdGFsbGF0aW9uIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImdpdGxhYl9pbnN0YWxsYXRpb25zXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpbnN0YWxsZWRfYnlcIiwgdXNlci5pZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKCFpbnN0YWxsYXRpb24pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiSW5zdGFsbGF0aW9uIE5lZWRlZFwiIH07XG4gIH1cblxuICBjb25zdCB7IG93bmVyLCByZXBvOiByZXBvTmFtZSB9ID0gcGFyc2VHaXRMYWJVcmwodXJsKTtcblxuICAvL3ZlcmlmeSBhY2Nlc3NcbiAgY29uc3QgaGFzQWNjZXNzID0gYXdhaXQgdmVyaWZ5R2l0TGFiUmVwb0FjY2VzcyhcbiAgICBpbnN0YWxsYXRpb24uYWNjZXNzX3Rva2VuLFxuICAgIG93bmVyLFxuICAgIHJlcG9OYW1lLFxuICApO1xuXG4gIGlmICghaGFzQWNjZXNzKSB7XG4gICAgaWYgKGluc3RhbGxhdGlvbi5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogXCJBY2Nlc3MgcmVxdWlyZWQhXCIsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yOiBcIkFjY2VzcyBkZW5pZWQhXCIsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3I6IHJlcG9FcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAuaW5zZXJ0KHtcbiAgICAgIG5hbWUsXG4gICAgICBwcm92aWRlcixcbiAgICAgIHJlcG9fdXJsOiB1cmwsXG4gICAgICBvcmdhbml6YXRpb25faWQ6IG9yZ0lkLFxuICAgICAgaW5kZXhlZF9ieTogdXNlci5pZCxcbiAgICAgIGluZGV4X3N0YXR1czogXCJub3QgaW5kZXhlZFwiLFxuICAgIH0pXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChyZXBvRXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHJlcG9FcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXBvIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZXBvVmlhTG9jYWxGaWxlKFxuICBmb3JtRGF0YTogRm9ybURhdGEsXG4gIG9yZ0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgY29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldChcImZpbGVcIikgYXMgRmlsZTtcblxuICAvLyBWYWxpZGF0ZSBpbnB1dHNcbiAgaWYgKCFuYW1lIHx8IG5hbWUudHJpbSgpID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlJlcG9zaXRvcnkgbmFtZSBpcyByZXF1aXJlZFwiIH07XG4gIH1cblxuICBpZiAoIWZpbGUpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmlsZSBpcyByZXF1aXJlZFwiIH07XG4gIH1cblxuICAvLyBWYWxpZGF0ZSBmaWxlIHR5cGVcbiAgaWYgKCFmaWxlLm5hbWUuZW5kc1dpdGgoXCIuemlwXCIpKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIk9ubHkgLnppcCBmaWxlcyBhcmUgYWxsb3dlZFwiIH07XG4gIH1cblxuICAvLyBWYWxpZGF0ZSBmaWxlIHNpemUgKG1heCAxMDBNQilcbiAgY29uc3QgbWF4U2l6ZSA9IDEwMCAqIDEwMjQgKiAxMDI0OyAvLyAxMDBNQiBpbiBieXRlc1xuICBpZiAoZmlsZS5zaXplID4gbWF4U2l6ZSkge1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yOiBcIkZpbGUgc2l6ZSBleGNlZWRzIDEwME1CIGxpbWl0XCIsXG4gICAgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gR2VuZXJhdGUgYSB1bmlxdWUgZmlsZSBuYW1lIHRvIHByZXZlbnQgY29sbGlzaW9uc1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IERhdGUubm93KCk7XG4gICAgY29uc3Qgc2FuaXRpemVkTmFtZSA9IG5hbWUudHJpbSgpLnJlcGxhY2UoL1teYS16MC05LV9dL2dpLCBcIl9cIik7XG4gICAgY29uc3QgZmlsZU5hbWUgPSBgJHtzYW5pdGl6ZWROYW1lfV8ke3RpbWVzdGFtcH1fJHtmaWxlLm5hbWV9YDtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGAke29yZ0lkfS8ke2ZpbGVOYW1lfWA7XG5cbiAgICAvLyBVcGxvYWQgZmlsZSB0byBTdXBhYmFzZSBTdG9yYWdlXG4gICAgY29uc3QgeyBlcnJvcjogdXBsb2FkRXJyb3IgfSA9IGF3YWl0IGNsaWVudC5zdG9yYWdlXG4gICAgICAuZnJvbShcImxvY2FsX3JlcG9zXCIpXG4gICAgICAudXBsb2FkKGZpbGVQYXRoLCBmaWxlLCB7XG4gICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL3ppcFwiLFxuICAgICAgICB1cHNlcnQ6IGZhbHNlLFxuICAgICAgfSk7XG5cbiAgICBpZiAodXBsb2FkRXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJVcGxvYWQgZXJyb3I6XCIsIHVwbG9hZEVycm9yKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogYEZpbGUgdXBsb2FkIGZhaWxlZDogJHt1cGxvYWRFcnJvci5tZXNzYWdlfWAsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEdldCB0aGUgcHVibGljIFVSTCBmb3IgdGhlIHVwbG9hZGVkIGZpbGVcbiAgICBjb25zdCB7IGRhdGE6IHVybERhdGEgfSA9IGNsaWVudC5zdG9yYWdlXG4gICAgICAuZnJvbShcImxvY2FsX3JlcG9zXCIpXG4gICAgICAuZ2V0UHVibGljVXJsKGZpbGVQYXRoKTtcblxuICAgIC8vIENyZWF0ZSByZXBvc2l0b3J5IHJlY29yZCBpbiBkYXRhYmFzZVxuICAgIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3I6IHJlcG9FcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgICAgLmluc2VydCh7XG4gICAgICAgIG5hbWU6IG5hbWUudHJpbSgpLFxuICAgICAgICBwcm92aWRlcjogXCJsb2NhbFwiLFxuICAgICAgICByZXBvX3VybDogbnVsbCxcbiAgICAgICAgb2JqZWN0X3VybDogdXJsRGF0YS5wdWJsaWNVcmwsXG4gICAgICAgIG9yZ2FuaXphdGlvbl9pZDogb3JnSWQsXG4gICAgICAgIGluZGV4ZWRfYnk6IHVzZXIuaWQsXG4gICAgICAgIGluZGV4X3N0YXR1czogXCJub3QgaW5kZXhlZFwiLFxuICAgICAgfSlcbiAgICAgIC5zZWxlY3QoKVxuICAgICAgLnNpbmdsZSgpO1xuXG4gICAgaWYgKHJlcG9FcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIlJlcG9zaXRvcnkgY3JlYXRpb24gZXJyb3I6XCIsIHJlcG9FcnJvcik7XG4gICAgICAvLyBBdHRlbXB0IHRvIGNsZWFuIHVwIHVwbG9hZGVkIGZpbGVcbiAgICAgIGF3YWl0IGNsaWVudC5zdG9yYWdlLmZyb20oXCJsb2NhbF9yZXBvc1wiKS5yZW1vdmUoW2ZpbGVQYXRoXSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IGBSZXBvc2l0b3J5IGNyZWF0aW9uIGZhaWxlZDogJHtyZXBvRXJyb3IubWVzc2FnZX1gLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXBvIGFzIFJlcG8gfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiVW5leHBlY3RlZCBlcnJvcjpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yOlxuICAgICAgICBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZFwiLFxuICAgIH07XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUmVwb3NpdG9yeSBNYW5hZ2VtZW50IFNlcnZpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXBvV2l0aFN0YXR1cyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFyZXBvKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlJlcG9zaXRvcnkgbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlcG8gYXMgUmVwbyB9O1xufVxuXG50eXBlIFVwZGF0ZURhdGEgPSB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHJlcG9fdXJsPzogc3RyaW5nO1xuICBvYmplY3RfdXJsPzogc3RyaW5nO1xuICBpbmRleF9zdGF0dXM/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUmVwb1NldHRpbmdzKFxuICByZXBvSWQ6IHN0cmluZyxcbiAgc2V0dGluZ3M6IHsgbmFtZT86IHN0cmluZzsgcmVwb191cmw/OiBzdHJpbmc7IGZpbGU/OiBGaWxlIH0sXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIC8vIEdldCB0aGUgY3VycmVudCByZXBvIHRvIGNoZWNrIGl0cyBwcm92aWRlciB0eXBlXG4gIGNvbnN0IHsgZGF0YTogY3VycmVudFJlcG8gfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghY3VycmVudFJlcG8pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUmVwb3NpdG9yeSBub3QgZm91bmQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZURhdGE6IFVwZGF0ZURhdGEgPSB7fTtcblxuICAvLyBIYW5kbGUgbmFtZSB1cGRhdGVcbiAgaWYgKHNldHRpbmdzLm5hbWUpIHtcbiAgICB1cGRhdGVEYXRhLm5hbWUgPSBzZXR0aW5ncy5uYW1lO1xuICB9XG5cbiAgLy8gSGFuZGxlIEdpdEh1YiBVUkwgdXBkYXRlXG4gIGlmIChzZXR0aW5ncy5yZXBvX3VybCAmJiBjdXJyZW50UmVwby5wcm92aWRlciA9PT0gXCJnaXRodWJcIikge1xuICAgIGNvbnN0IHsgb3duZXIsIHJlcG8gfSA9IHBhcnNlR2l0SHViVXJsKHNldHRpbmdzLnJlcG9fdXJsKTtcblxuICAgIGlmICghb3duZXIgfHwgIXJlcG8pIHtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJJbnZhbGlkIEdpdEh1YiBVUkwgZm9ybWF0IVwiIH07XG4gICAgfVxuXG4gICAgLy8gVmVyaWZ5IGFjY2VzcyB0byB0aGUgbmV3IHJlcG9cbiAgICBjb25zdCB7IGRhdGE6IGluc3RhbGxhdGlvbiB9ID0gYXdhaXQgY2xpZW50XG4gICAgICAuZnJvbShcImdpdGh1Yl9pbnN0YWxsYXRpb25zXCIpXG4gICAgICAuc2VsZWN0KFwiKlwiKVxuICAgICAgLmVxKFwiaW5zdGFsbGVkX2J5XCIsIHVzZXIuaWQpXG4gICAgICAuc2luZ2xlKCk7XG5cbiAgICBpZiAoIWluc3RhbGxhdGlvbikge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkdpdEh1YiBBcHAgbm90IGluc3RhbGxlZCFcIiB9O1xuICAgIH1cblxuICAgIGNvbnN0IGhhc0FjY2VzcyA9IGF3YWl0IHZlcmlmeUdpdGh1YlJlcG9BY2Nlc3MoXG4gICAgICBpbnN0YWxsYXRpb24uaW5zdGFsbGF0aW9uX2lkLnRvU3RyaW5nKCksXG4gICAgICBvd25lcixcbiAgICAgIHJlcG8sXG4gICAgKTtcblxuICAgIGlmICghaGFzQWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6XG4gICAgICAgICAgXCJDYW5ub3QgYWNjZXNzIHRoaXMgcmVwb3NpdG9yeS4gTWFrZSBzdXJlIHRoZSBHaXRIdWIgQXBwIGlzIGluc3RhbGxlZCBmb3IgdGhpcyByZXBvc2l0b3J5LlwiLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICB1cGRhdGVEYXRhLnJlcG9fdXJsID0gc2V0dGluZ3MucmVwb191cmw7XG4gICAgdXBkYXRlRGF0YS5pbmRleF9zdGF0dXMgPSBcIm5vdCBpbmRleGVkXCI7IC8vIFRyaWdnZXIgcmUtaW5kZXhpbmdcbiAgfVxuXG4gIC8vIEhhbmRsZSBsb2NhbCBmaWxlIHVwbG9hZFxuICBpZiAoc2V0dGluZ3MuZmlsZSAmJiBjdXJyZW50UmVwby5wcm92aWRlciA9PT0gXCJsb2NhbFwiKSB7XG4gICAgY29uc3QgZmlsZSA9IHNldHRpbmdzLmZpbGU7XG4gICAgY29uc3QgZmlsZUV4dCA9IGZpbGUubmFtZS5zcGxpdChcIi5cIikucG9wKCk7XG5cbiAgICBpZiAoZmlsZUV4dCAhPT0gXCJ6aXBcIikge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIk9ubHkgLnppcCBmaWxlcyBhcmUgYWxsb3dlZCFcIiB9O1xuICAgIH1cblxuICAgIC8vIFVwbG9hZCB0byBTdXBhYmFzZSBTdG9yYWdlXG4gICAgY29uc3QgZmlsZU5hbWUgPSBgJHtyZXBvSWR9LSR7RGF0ZS5ub3coKX0uemlwYDtcbiAgICBjb25zdCB7IGRhdGE6IHVwbG9hZERhdGEsIGVycm9yOiB1cGxvYWRFcnJvciB9ID0gYXdhaXQgY2xpZW50LnN0b3JhZ2VcbiAgICAgIC5mcm9tKFwibG9jYWxfcmVwb3NcIilcbiAgICAgIC51cGxvYWQoZmlsZU5hbWUsIGZpbGUpO1xuXG4gICAgaWYgKHVwbG9hZEVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKHVwbG9hZEVycm9yKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gdXBsb2FkIGZpbGUhXCIgfTtcbiAgICB9XG5cbiAgICAvLyBHZXQgcHVibGljIFVSTFxuICAgIGNvbnN0IHsgZGF0YTogdXJsRGF0YSB9ID0gY2xpZW50LnN0b3JhZ2VcbiAgICAgIC5mcm9tKFwibG9jYWxfcmVwb3NcIilcbiAgICAgIC5nZXRQdWJsaWNVcmwoZmlsZU5hbWUpO1xuXG4gICAgdXBkYXRlRGF0YS5vYmplY3RfdXJsID0gdXJsRGF0YS5wdWJsaWNVcmw7XG4gICAgdXBkYXRlRGF0YS5pbmRleF9zdGF0dXMgPSBcInBlbmRpbmdcIjsgLy8gVHJpZ2dlciByZS1pbmRleGluZ1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSByZXBvc2l0b3J5XG4gIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnVwZGF0ZSh1cGRhdGVEYXRhKVxuICAgIC5lcShcImlkXCIsIHJlcG9JZClcbiAgICAuc2VsZWN0KClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXBvIGFzIFJlcG8gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVJlcG8oXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8eyBvcmdhbml6YXRpb25JZDogc3RyaW5nIH0+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gRmV0Y2ggdGhlIG9yZ2FuaXphdGlvbl9pZCBiZWZvcmUgZGVsZXRpbmdcbiAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvcjogcmVwb0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgIC5zZWxlY3QoXCJvcmdhbml6YXRpb25faWRcIilcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChyZXBvRXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKHJlcG9FcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiByZXBvRXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFyZXBvKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlJlcG9zaXRvcnkgbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IGNsaWVudC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpLmRlbGV0ZSgpLmVxKFwiaWRcIiwgcmVwb0lkKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHsgb3JnYW5pemF0aW9uSWQ6IHJlcG8ub3JnYW5pemF0aW9uX2lkIH0gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRyaWdnZXJSZWluZGV4KFxuICByZXBvSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PHZvaWQ+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSBpbmRleF9zdGF0dXMgdG8gJ3BlbmRpbmcnIHRvIHRyaWdnZXIgcmVpbmRleGluZ1xuICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgIC51cGRhdGUoeyBpbmRleF9zdGF0dXM6IFwicGVuZGluZ1wiIH0pXG4gICAgLmVxKFwiaWRcIiwgcmVwb0lkKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIC8vIFRPRE86IFRyaWdnZXIgYWN0dWFsIGluZGV4aW5nIGpvYi93ZWJob29rL3F1ZXVlIGhlcmVcbiAgLy8gVGhpcyBjb3VsZCBiZSBhbiBBUEkgY2FsbCB0byB5b3VyIGluZGV4aW5nIHNlcnZpY2VcblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1bmRlZmluZWQgfTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRG9jdW1lbnRhdGlvbiBTZXJ2aWNlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jdW1lbnRhdGlvbihcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2N1bWVudGF0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogZG9jdW1lbnRhdGlvbiwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFkb2N1bWVudGF0aW9uKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkRvY3VtZW50YXRpb24gbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGRvY3VtZW50YXRpb24gYXMgRG9jdW1lbnRhdGlvbiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jUGFnZXMoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jUGFnZVtdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIC8vIEdldCB0aGUgbGF0ZXN0IGRvY3VtZW50YXRpb24gdmVyc2lvbiBmb3IgdGhpcyByZXBvXG4gIGNvbnN0IHsgZGF0YTogZG9jdW1lbnRhdGlvbiwgZXJyb3I6IGRvY0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwiaWRcIilcbiAgICAuZXEoXCJyZXBvX2lkXCIsIHJlcG9JZClcbiAgICAub3JkZXIoXCJ2ZXJzaW9uXCIsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxuICAgIC5saW1pdCgxKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZG9jRXJyb3IgfHwgIWRvY3VtZW50YXRpb24pIHtcbiAgICBjb25zb2xlLmVycm9yKGRvY0Vycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRG9jdW1lbnRhdGlvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdlcywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicGFnZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImRvY3VtZW50YXRpb25faWRcIiwgZG9jdW1lbnRhdGlvbi5pZClcbiAgICAub3JkZXIoXCJvcmRlcl9pbmRleFwiLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChwYWdlcyA/PyBbXSkgYXMgRG9jUGFnZVtdIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2NQYWdlQnlJZChcbiAgcGFnZUlkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2NQYWdlPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcGFnZSwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jX3BhZ2VzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpZFwiLCBwYWdlSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFwYWdlKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlBhZ2Ugbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHBhZ2UgYXMgRG9jUGFnZSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jUGFnZXNIaWVyYXJjaGljYWwoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jUGFnZVtdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIC8vIEZpcnN0IGdldCB0aGUgZG9jdW1lbnRhdGlvbiBJRCBmb3IgdGhpcyByZXBvXG4gIGNvbnN0IHsgZGF0YTogZG9jdW1lbnRhdGlvbiwgZXJyb3I6IGRvY0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwiaWRcIilcbiAgICAuZXEoXCJyZXBvX2lkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGRvY0Vycm9yIHx8ICFkb2N1bWVudGF0aW9uKSB7XG4gICAgY29uc29sZS5lcnJvcihkb2NFcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkRvY3VtZW50YXRpb24gbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcGFnZXMsIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY19wYWdlc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiZG9jdW1lbnRhdGlvbl9pZFwiLCBkb2N1bWVudGF0aW9uLmlkKVxuICAgIC5vcmRlcihcIm9yZGVyX2luZGV4XCIsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgLy8gUGFnZXMgYXJlIGFscmVhZHkgc29ydGVkIGJ5IG9yZGVyX2luZGV4XG4gIC8vIFRoZSBwYXJlbnRfcGFnZV9pZCBmaWVsZCBtYWludGFpbnMgdGhlIGhpZXJhcmNoeVxuICAvLyBGcm9udGVuZCBjYW4gdXNlIHRoaXMgdG8gcmVuZGVyIHRoZSB0cmVlIHN0cnVjdHVyZVxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiAocGFnZXMgPz8gW10pIGFzIERvY1BhZ2VbXSB9O1xufVxuXG4vKipcbiAqIEdldCBhbGwgZG9jdW1lbnRhdGlvbiB2ZXJzaW9ucyBmb3IgYSByZXBvc2l0b3J5XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2N1bWVudGF0aW9uVmVyc2lvbnMoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jdW1lbnRhdGlvbltdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogdmVyc2lvbnMsIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5vcmRlcihcInZlcnNpb25cIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKHZlcnNpb25zID8/IFtdKSBhcyBEb2N1bWVudGF0aW9uW10gfTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGxhdGVzdCBjb21wbGV0ZWQgZG9jdW1lbnRhdGlvbiB2ZXJzaW9uIGZvciBhIHJlcG9zaXRvcnlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExhdGVzdERvY3VtZW50YXRpb24oXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jdW1lbnRhdGlvbj4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGRvY3VtZW50YXRpb24sIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5vcmRlcihcInZlcnNpb25cIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXG4gICAgLmxpbWl0KDEpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghZG9jdW1lbnRhdGlvbikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJEb2N1bWVudGF0aW9uIG5vdCBmb3VuZFwiIH07XG4gIH1cblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGRvY3VtZW50YXRpb24gYXMgRG9jdW1lbnRhdGlvbiB9O1xufVxuXG4vKipcbiAqIEdldCBkb2N1bWVudGF0aW9uIHBhZ2VzIGZvciBhIHNwZWNpZmljIHZlcnNpb25cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERvY1BhZ2VzRm9yVmVyc2lvbihcbiAgcmVwb0lkOiBzdHJpbmcsXG4gIHZlcnNpb246IG51bWJlcixcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PERvY1BhZ2VbXT4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICAvLyBHZXQgdGhlIGRvY3VtZW50YXRpb24gcmVjb3JkIGZvciB0aGlzIHZlcnNpb25cbiAgY29uc3QgeyBkYXRhOiBkb2N1bWVudGF0aW9uLCBlcnJvcjogZG9jRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCJpZFwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5lcShcInZlcnNpb25cIiwgdmVyc2lvbilcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGRvY0Vycm9yIHx8ICFkb2N1bWVudGF0aW9uKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkRvY3VtZW50YXRpb24gdmVyc2lvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdlcywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicGFnZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImRvY3VtZW50YXRpb25faWRcIiwgZG9jdW1lbnRhdGlvbi5pZClcbiAgICAub3JkZXIoXCJvcmRlcl9pbmRleFwiLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChwYWdlcyA/PyBbXSkgYXMgRG9jUGFnZVtdIH07XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENvbnZlcnNhdGlvbiBTZXJ2aWNlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29udmVyc2F0aW9ucyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4gIGxpbWl0OiBudW1iZXIgPSAyMCxcbiAgdmVyc2lvbjogbnVtYmVyIHwgbnVsbCA9IG51bGwsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxDb252ZXJzYXRpb25bXT4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBsZXQgcXVlcnkgPSBjbGllbnRcbiAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlci5pZCk7XG5cbiAgLy8gRmlsdGVyIGJ5IHZlcnNpb24gaWYgc3BlY2lmaWVkXG4gIGlmICh2ZXJzaW9uICE9PSBudWxsICYmIHZlcnNpb24gIT09IHVuZGVmaW5lZCkge1xuICAgIHF1ZXJ5ID0gcXVlcnkuZXEoXCJyZXBvX3ZlcnNpb25cIiwgdmVyc2lvbik7XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGNvbnZlcnNhdGlvbnMsIGVycm9yIH0gPSBhd2FpdCBxdWVyeVxuICAgIC5vcmRlcihcInVwZGF0ZWRfYXRcIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXG4gICAgLmxpbWl0KGxpbWl0KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChjb252ZXJzYXRpb25zID8/IFtdKSBhcyBDb252ZXJzYXRpb25bXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29udmVyc2F0aW9uQnlJZChcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbj4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGNvbnZlcnNhdGlvbiwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiaWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIGlmICghY29udmVyc2F0aW9uKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkNvbnZlcnNhdGlvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY29udmVyc2F0aW9uIGFzIENvbnZlcnNhdGlvbiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ29udmVyc2F0aW9uKFxuICByZXBvSWQ6IHN0cmluZyxcbiAgdGl0bGU/OiBzdHJpbmcsXG4gIHZlcnNpb24/OiBudW1iZXIgfCBudWxsLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29udmVyc2F0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogY29udmVyc2F0aW9uLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLmluc2VydCh7XG4gICAgICByZXBvX2lkOiByZXBvSWQsXG4gICAgICB1c2VyX2lkOiB1c2VyLmlkLFxuICAgICAgdGl0bGU6IHRpdGxlIHx8IFwiTmV3IENvbnZlcnNhdGlvblwiLFxuICAgICAgcmVwb192ZXJzaW9uOiB2ZXJzaW9uID8/IG51bGwsXG4gICAgfSlcbiAgICAuc2VsZWN0KClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjb252ZXJzYXRpb24gYXMgQ29udmVyc2F0aW9uIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDb252ZXJzYXRpb24oXG4gIGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDx2b2lkPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgIC5kZWxldGUoKVxuICAgIC5lcShcImlkXCIsIGNvbnZlcnNhdGlvbklkKVxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlci5pZCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1bmRlZmluZWQgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbmFtZUNvbnZlcnNhdGlvbihcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbiAgbmV3VGl0bGU6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbj4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGNvbnZlcnNhdGlvbiwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgIC51cGRhdGUoeyB0aXRsZTogbmV3VGl0bGUgfSlcbiAgICAuZXEoXCJpZFwiLCBjb252ZXJzYXRpb25JZClcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY29udmVyc2F0aW9uIGFzIENvbnZlcnNhdGlvbiB9O1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNZXNzYWdlIFNlcnZpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb252ZXJzYXRpb25NZXNzYWdlcyhcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbk1lc3NhZ2VbXT4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IG1lc3NhZ2VzLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJtZXNzYWdlc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiY29udmVyc2F0aW9uX2lkXCIsIGNvbnZlcnNhdGlvbklkKVxuICAgIC5vcmRlcihcImNyZWF0ZWRfYXRcIiwgeyBhc2NlbmRpbmc6IHRydWUgfSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiAobWVzc2FnZXMgPz8gW10pIGFzIENvbnZlcnNhdGlvbk1lc3NhZ2VbXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTWVzc2FnZShcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbiAgcm9sZTogXCJ1c2VyXCIgfCBcImFzc2lzdGFudFwiLFxuICBjb250ZW50OiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxDb252ZXJzYXRpb25NZXNzYWdlPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogbWVzc2FnZSwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwibWVzc2FnZXNcIilcbiAgICAuaW5zZXJ0KHtcbiAgICAgIGNvbnZlcnNhdGlvbl9pZDogY29udmVyc2F0aW9uSWQsXG4gICAgICByb2xlLFxuICAgICAgY29udGVudCxcbiAgICB9KVxuICAgIC5zZWxlY3QoKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSB0aGUgY29udmVyc2F0aW9uJ3MgdXBkYXRlZF9hdCB0aW1lc3RhbXBcbiAgYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLnVwZGF0ZSh7IHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSB9KVxuICAgIC5lcShcImlkXCIsIGNvbnZlcnNhdGlvbklkKTtcblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBtZXNzYWdlIGFzIENvbnZlcnNhdGlvbk1lc3NhZ2UgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVDb2RlU25pcHBldHMoXG4gIGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsXG4gIG1lc3NhZ2VJZDogc3RyaW5nLFxuICBzbmlwcGV0czogQXJyYXk8eyBmaWxlOiBzdHJpbmc7IGNvZGU6IHN0cmluZyB9Pixcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvZGVTbmlwcGV0W10+PiB7XG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qgc25pcHBldHNUb0luc2VydCA9IHNuaXBwZXRzLm1hcCgoc25pcHBldCkgPT4gKHtcbiAgICBjb252ZXJzYXRpb25faWQ6IGNvbnZlcnNhdGlvbklkLFxuICAgIG1lc3NhZ2VfaWQ6IG1lc3NhZ2VJZCxcbiAgICBmaWxlX3BhdGg6IHNuaXBwZXQuZmlsZSxcbiAgICBjb2RlX2NvbnRlbnQ6IHNuaXBwZXQuY29kZSxcbiAgICBsYW5ndWFnZTogc25pcHBldC5maWxlLnNwbGl0KFwiLlwiKS5wb3AoKSB8fCBudWxsLFxuICB9KSk7XG5cbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbShcImNvZGVfc25pcHBldHNcIilcbiAgICAuaW5zZXJ0KHNuaXBwZXRzVG9JbnNlcnQpXG4gICAgLnNlbGVjdCgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogZGF0YSBhcyBDb2RlU25pcHBldFtdIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb2RlU25pcHBldHNGb3JDb252ZXJzYXRpb24oXG4gIGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxDb2RlU25pcHBldFtdPj4ge1xuICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oXCJjb2RlX3NuaXBwZXRzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJjb252ZXJzYXRpb25faWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgLm9yZGVyKFwiY3JlYXRlZF9hdFwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBkYXRhIGFzIENvZGVTbmlwcGV0W10gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNvZGVTbmlwcGV0KFxuICBzbmlwcGV0SWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PG51bGw+PiB7XG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbShcImNvZGVfc25pcHBldHNcIilcbiAgICAuZGVsZXRlKClcbiAgICAuZXEoXCJpZFwiLCBzbmlwcGV0SWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogbnVsbCB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5kZXhSZXBvc2l0b3J5KFxuICByZXBvSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PHZvaWQ+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBpbnN0YWxsYXRpb24sIGVycm9yOiBpbnN0YWxsYXRpb25FcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJnaXRodWJfaW5zdGFsbGF0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiaW5zdGFsbGVkX2J5XCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghaW5zdGFsbGF0aW9uIHx8IGluc3RhbGxhdGlvbkVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkdpdGh1YiBBcHAgSW5zdGFsbGF0aW9uIG5vdCBmb3VuZCFcIiB9O1xuICB9XG5cbiAgLy9mZXRjaCByZXBvXG5cbiAgY29uc3QgcmVwb1Jlc3VsdCA9IGF3YWl0IGdldFJlcG9XaXRoU3RhdHVzKHJlcG9JZCk7XG5cbiAgaWYgKCFyZXBvUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHJlcG9SZXN1bHQuZXJyb3IgfTtcbiAgfVxuXG4gIGNvbnN0IHJlcG9VcmwgPSByZXBvUmVzdWx0LmRhdGEucmVwb191cmw7XG4gIGNvbnN0IGluc3RhbGxhdGlvbklkID0gaW5zdGFsbGF0aW9uLmluc3RhbGxhdGlvbl9pZDtcblxuICAvLyBHZXQgdGhlIGxhdGVzdCB2ZXJzaW9uIG51bWJlciBmb3IgdGhpcyByZXBvXG4gIGNvbnN0IHsgZGF0YTogbGF0ZXN0RG9jIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwidmVyc2lvblwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5vcmRlcihcInZlcnNpb25cIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXG4gICAgLmxpbWl0KDEpXG4gICAgLnNpbmdsZSgpO1xuXG4gIC8vIEluY3JlbWVudCB2ZXJzaW9uIChzdGFydCBhdCAxIGlmIG5vIHByZXZpb3VzIHZlcnNpb25zKVxuICBjb25zdCBuZXh0VmVyc2lvbiA9IChsYXRlc3REb2M/LnZlcnNpb24gPz8gMCkgKyAxO1xuXG4gIC8vbWFyayB0aGUgcmVwb3NpdG9yeSBhcyBpbmRleGluZyBpbiBzdXBhYmFzZSBmaXJzdFxuICBjb25zdCB7IGVycm9yOiB1cGRhdGVFcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAudXBkYXRlKHsgaW5kZXhfc3RhdHVzOiBcImluZGV4aW5nXCIgfSlcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpO1xuXG4gIGlmICh1cGRhdGVFcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IodXBkYXRlRXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogdXBkYXRlRXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgLy8gQ2FsbCB0aGUgYmFja2VuZCB0byBzdGFydCBpbmRleGluZyAoZmlyZS1hbmQtZm9yZ2V0KVxuICAvLyBEb24ndCBhd2FpdCBvciB0aHJvdyBlcnJvcnMgc2luY2UgdGhpcyBpcyBhIGxvbmctcnVubmluZyBvcGVyYXRpb25cbiAgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L3JlcG9zL2luZGV4YCwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICByZXBvX3VybDogcmVwb1VybCxcbiAgICAgIHJlcG9faWQ6IHJlcG9JZCxcbiAgICAgIHVzZXJfaWQ6IHVzZXIuaWQsXG4gICAgICBpbnN0YWxsYXRpb25faWQ6IGluc3RhbGxhdGlvbklkLFxuICAgICAgYnJhbmNoOiBcIm1haW5cIixcbiAgICAgIHZlcnNpb246IG5leHRWZXJzaW9uLFxuICAgIH0pLFxuICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAvLyBMb2cgdGhlIGVycm9yIGJ1dCBkb24ndCBmYWlsIHRoZSByZXF1ZXN0XG4gICAgY29uc29sZS5lcnJvcihcIkluZGV4aW5nIHJlcXVlc3QgZmFpbGVkOlwiLCBlcnJvcik7XG4gICAgLy8gVGhlIGJhY2tlbmQgc2hvdWxkIGhhbmRsZSB1cGRhdGluZyB0aGUgcmVwbyBzdGF0dXMgb24gZmFpbHVyZVxuICB9KTtcblxuICAvLyBSZXR1cm4gc3VjY2VzcyBpbW1lZGlhdGVseSAtIHRoZSBpbmRleGluZyB3aWxsIGhhcHBlbiBpbiB0aGUgYmFja2dyb3VuZFxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1bmRlZmluZWQgfTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiaVRBNnVCc0IifQ==
}),
"[project]/src/lib/services/data:e115eb [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"601fa169b11b6973375eb8e0dcc1c5621f47916013":"getDocPagesForVersion"},"src/lib/services/repoService.ts",""] */ __turbopack_context__.s([
    "getDocPagesForVersion",
    ()=>getDocPagesForVersion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var getDocPagesForVersion = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("601fa169b11b6973375eb8e0dcc1c5621f47916013", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getDocPagesForVersion"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcmVwb1NlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAL3V0aWxzL3N1cGFiYXNlL3NlcnZlclwiO1xuaW1wb3J0IHtcbiAgUmVwbyxcbiAgRG9jdW1lbnRhdGlvbixcbiAgRG9jUGFnZSxcbiAgQ29udmVyc2F0aW9uLFxuICBDb252ZXJzYXRpb25NZXNzYWdlLFxuICBDb2RlU25pcHBldCxcbn0gZnJvbSBcIkAvYXBwL3R5cGVzL3N1cGFiYXNlXCI7XG5pbXBvcnQgeyBBY3Rpb25SZXN1bHQgfSBmcm9tIFwiQC9hcHAvdHlwZXMvYWN0aW9uXCI7XG5pbXBvcnQge1xuICB2ZXJpZnlHaXRodWJSZXBvQWNjZXNzLFxuICB2ZXJpZnlHaXRMYWJSZXBvQWNjZXNzLFxufSBmcm9tIFwiLi9naXRQcm92aWRlclNlcnZpY2VcIjtcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHBhcnNlIEdpdEh1YiBVUkxzXG5mdW5jdGlvbiBwYXJzZUdpdEh1YlVybCh1cmw6IHN0cmluZyk6IHsgb3duZXI6IHN0cmluZzsgcmVwbzogc3RyaW5nIH0ge1xuICB0cnkge1xuICAgIC8vIEhhbmRsZSBtdWx0aXBsZSBmb3JtYXRzOlxuICAgIC8vIC0gaHR0cHM6Ly9naXRodWIuY29tL293bmVyL3JlcG9cbiAgICAvLyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9vd25lci9yZXBvLmdpdFxuICAgIC8vIC0gZ2l0QGdpdGh1Yi5jb206b3duZXIvcmVwby5naXRcblxuICAgIHVybCA9IHVybC50cmltKCkucmVwbGFjZSgvXFwuZ2l0JC8sIFwiXCIpO1xuXG4gICAgaWYgKHVybC5pbmNsdWRlcyhcImdpdGh1Yi5jb20vXCIpKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IHVybC5zcGxpdChcImdpdGh1Yi5jb20vXCIpWzFdLnNwbGl0KFwiL1wiKTtcbiAgICAgIHJldHVybiB7IG93bmVyOiBwYXJ0c1swXSwgcmVwbzogcGFydHNbMV0gfTtcbiAgICB9XG5cbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoXCJnaXRAZ2l0aHViLmNvbTpcIikpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gdXJsLnJlcGxhY2UoXCJnaXRAZ2l0aHViLmNvbTpcIiwgXCJcIikuc3BsaXQoXCIvXCIpO1xuICAgICAgcmV0dXJuIHsgb3duZXI6IHBhcnRzWzBdLCByZXBvOiBwYXJ0c1sxXSB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IG93bmVyOiBcIlwiLCByZXBvOiBcIlwiIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgb3duZXI6IFwiXCIsIHJlcG86IFwiXCIgfTtcbiAgfVxufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gcGFyc2UgR2l0TGFiIFVSTHNcbmZ1bmN0aW9uIHBhcnNlR2l0TGFiVXJsKHVybDogc3RyaW5nKTogeyBvd25lcjogc3RyaW5nOyByZXBvOiBzdHJpbmcgfSB7XG4gIHRyeSB7XG4gICAgLy8gSGFuZGxlIG11bHRpcGxlIGZvcm1hdHM6XG4gICAgLy8gLSBodHRwczovL2dpdGxhYi5jb20vb3duZXIvcmVwb1xuICAgIC8vIC0gaHR0cHM6Ly9naXRsYWIuY29tL293bmVyL3N1Ymdyb3VwL3JlcG9cbiAgICAvLyAtIGh0dHBzOi8vZ2l0bGFiLmNvbS9vd25lci9yZXBvLmdpdFxuICAgIC8vIC0gZ2l0QGdpdGxhYi5jb206b3duZXIvcmVwby5naXRcbiAgICAvLyAtIFNlbGYtaG9zdGVkOiBodHRwczovL2dpdGxhYi5leGFtcGxlLmNvbS9vd25lci9yZXBvXG5cbiAgICB1cmwgPSB1cmwudHJpbSgpLnJlcGxhY2UoL1xcLmdpdCQvLCBcIlwiKTtcblxuICAgIC8vIEhhbmRsZSBIVFRQUyBVUkxzIChnaXRsYWIuY29tIG9yIHNlbGYtaG9zdGVkKVxuICAgIGlmICh1cmwuaW5jbHVkZXMoXCJnaXRsYWIuY29tL1wiKSB8fCAvZ2l0bGFiXFwuW14vXStcXC8vLnRlc3QodXJsKSkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgcGF0aCBhZnRlciB0aGUgZG9tYWluXG4gICAgICBjb25zdCBtYXRjaCA9IHVybC5tYXRjaCgvZ2l0bGFiW14vXSpcXC8oLispLyk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgY29uc3QgcGF0aFBhcnRzID0gbWF0Y2hbMV0uc3BsaXQoXCIvXCIpO1xuICAgICAgICAvLyBHaXRMYWIgc3VwcG9ydHMgbmVzdGVkIGdyb3Vwcywgc28gd2UgbmVlZCB0byBoYW5kbGU6XG4gICAgICAgIC8vIC0gb3duZXIvcmVwbyAoMiBwYXJ0cylcbiAgICAgICAgLy8gLSBvd25lci9zdWJncm91cC9yZXBvICgzKyBwYXJ0cylcbiAgICAgICAgaWYgKHBhdGhQYXJ0cy5sZW5ndGggPj0gMikge1xuICAgICAgICAgIC8vIFRha2UgZXZlcnl0aGluZyBleGNlcHQgdGhlIGxhc3QgcGFydCBhcyBvd25lci9ncm91cFxuICAgICAgICAgIGNvbnN0IHJlcG8gPSBwYXRoUGFydHNbcGF0aFBhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IG93bmVyID0gcGF0aFBhcnRzLnNsaWNlKDAsIC0xKS5qb2luKFwiL1wiKTtcbiAgICAgICAgICByZXR1cm4geyBvd25lciwgcmVwbyB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIFNTSCBVUkxzXG4gICAgaWYgKHVybC5zdGFydHNXaXRoKFwiZ2l0QGdpdGxhYi5jb206XCIpIHx8IC9naXRAZ2l0bGFiXFwuW146XSs6Ly50ZXN0KHVybCkpIHtcbiAgICAgIGNvbnN0IG1hdGNoID0gdXJsLm1hdGNoKC9naXRAZ2l0bGFiW146XSo6KC4rKS8pO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGNvbnN0IHBhdGhQYXJ0cyA9IG1hdGNoWzFdLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgaWYgKHBhdGhQYXJ0cy5sZW5ndGggPj0gMikge1xuICAgICAgICAgIGNvbnN0IHJlcG8gPSBwYXRoUGFydHNbcGF0aFBhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IG93bmVyID0gcGF0aFBhcnRzLnNsaWNlKDAsIC0xKS5qb2luKFwiL1wiKTtcbiAgICAgICAgICByZXR1cm4geyBvd25lciwgcmVwbyB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgb3duZXI6IFwiXCIsIHJlcG86IFwiXCIgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBvd25lcjogXCJcIiwgcmVwbzogXCJcIiB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXBvc0J5T3JnYW5pemF0aW9uSWQoXG4gIG9yZ2FuaXphdGlvbklkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHVzZXIgPSBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJvcmdhbml6YXRpb25faWRcIiwgb3JnYW5pemF0aW9uSWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKGRhdGEgPz8gW10pIGFzIFJlcG9bXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUmVwb1ZpYUdpdGh1YihcbiAgZm9ybURhdGE6IEZvcm1EYXRhLFxuICBvcmdJZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8UmVwbyB8IHVuZGVmaW5lZD4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IHByb3ZpZGVyID0gZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IHVybCA9IGZvcm1EYXRhLmdldChcImdpdGh1Yi11cmxcIikgYXMgc3RyaW5nO1xuXG4gIGlmICghbmFtZSkge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJOYW1lIGlzIHJlcXVpcmVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGluc3RhbGxhdGlvbiB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJnaXRodWJfaW5zdGFsbGF0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiaW5zdGFsbGVkX2J5XCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghaW5zdGFsbGF0aW9uKSB7XG4gICAgLy8gTm8gR2l0SHViIEFwcCBpbnN0YWxsYXRpb24gLSBwcm9tcHQgdXNlciB0byBpbnN0YWxsXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiSW5zdGFsbGF0aW9uIE5lZWRlZFwiLFxuICAgIH07XG4gIH1cblxuICAvL3BhcnNlIHVybCBmb3Igb3duZXIgYW5kIHJlcG9cbiAgY29uc3QgeyBvd25lciwgcmVwbzogcmVwb05hbWUgfSA9IHBhcnNlR2l0SHViVXJsKHVybCk7XG5cbiAgY29uc3QgaGFzQWNjZXNzID0gYXdhaXQgdmVyaWZ5R2l0aHViUmVwb0FjY2VzcyhcbiAgICBpbnN0YWxsYXRpb24uaW5zdGFsbGF0aW9uX2lkLFxuICAgIG93bmVyLFxuICAgIHJlcG9OYW1lLFxuICApO1xuXG4gIGlmICghaGFzQWNjZXNzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiQWNjZXNzIERlbmllZFwiLFxuICAgIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IHJlcG8sIGVycm9yOiByZXBvRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLmluc2VydCh7XG4gICAgICBuYW1lLFxuICAgICAgcHJvdmlkZXIsXG4gICAgICByZXBvX3VybDogdXJsLFxuICAgICAgb3JnYW5pemF0aW9uX2lkOiBvcmdJZCxcbiAgICAgIGluZGV4ZWRfYnk6IHVzZXIuaWQsXG4gICAgICBpbmRleF9zdGF0dXM6IFwibm90IGluZGV4ZWRcIixcbiAgICB9KVxuICAgIC5zZWxlY3QoKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAocmVwb0Vycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiByZXBvRXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVwbyBhcyBSZXBvIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZXBvVmlhR2l0bGFiKFxuICBmb3JtRGF0YTogRm9ybURhdGEsXG4gIG9yZ0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvIHwgdW5kZWZpbmVkPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgY29uc3QgcHJvdmlkZXIgPSBmb3JtRGF0YS5nZXQoXCJ0eXBlXCIpIGFzIHN0cmluZztcbiAgY29uc3QgdXJsID0gZm9ybURhdGEuZ2V0KFwiZ2l0bGFiLXVybFwiKSBhcyBzdHJpbmc7XG5cbiAgLy8gVmFsaWRhdGUgaW5wdXRzXG4gIGlmICghbmFtZSB8fCBuYW1lLnRyaW0oKSA9PT0gXCJcIikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJSZXBvc2l0b3J5IG5hbWUgaXMgcmVxdWlyZWRcIiB9O1xuICB9XG5cbiAgaWYgKCF1cmwgfHwgdXJsLnRyaW0oKSA9PT0gXCJcIikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJHaXRMYWIgVVJMIGlzIHJlcXVpcmVkXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogaW5zdGFsbGF0aW9uIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImdpdGxhYl9pbnN0YWxsYXRpb25zXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpbnN0YWxsZWRfYnlcIiwgdXNlci5pZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKCFpbnN0YWxsYXRpb24pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiSW5zdGFsbGF0aW9uIE5lZWRlZFwiIH07XG4gIH1cblxuICBjb25zdCB7IG93bmVyLCByZXBvOiByZXBvTmFtZSB9ID0gcGFyc2VHaXRMYWJVcmwodXJsKTtcblxuICAvL3ZlcmlmeSBhY2Nlc3NcbiAgY29uc3QgaGFzQWNjZXNzID0gYXdhaXQgdmVyaWZ5R2l0TGFiUmVwb0FjY2VzcyhcbiAgICBpbnN0YWxsYXRpb24uYWNjZXNzX3Rva2VuLFxuICAgIG93bmVyLFxuICAgIHJlcG9OYW1lLFxuICApO1xuXG4gIGlmICghaGFzQWNjZXNzKSB7XG4gICAgaWYgKGluc3RhbGxhdGlvbi5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogXCJBY2Nlc3MgcmVxdWlyZWQhXCIsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yOiBcIkFjY2VzcyBkZW5pZWQhXCIsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3I6IHJlcG9FcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAuaW5zZXJ0KHtcbiAgICAgIG5hbWUsXG4gICAgICBwcm92aWRlcixcbiAgICAgIHJlcG9fdXJsOiB1cmwsXG4gICAgICBvcmdhbml6YXRpb25faWQ6IG9yZ0lkLFxuICAgICAgaW5kZXhlZF9ieTogdXNlci5pZCxcbiAgICAgIGluZGV4X3N0YXR1czogXCJub3QgaW5kZXhlZFwiLFxuICAgIH0pXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChyZXBvRXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHJlcG9FcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXBvIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZXBvVmlhTG9jYWxGaWxlKFxuICBmb3JtRGF0YTogRm9ybURhdGEsXG4gIG9yZ0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgY29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldChcImZpbGVcIikgYXMgRmlsZTtcblxuICAvLyBWYWxpZGF0ZSBpbnB1dHNcbiAgaWYgKCFuYW1lIHx8IG5hbWUudHJpbSgpID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlJlcG9zaXRvcnkgbmFtZSBpcyByZXF1aXJlZFwiIH07XG4gIH1cblxuICBpZiAoIWZpbGUpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmlsZSBpcyByZXF1aXJlZFwiIH07XG4gIH1cblxuICAvLyBWYWxpZGF0ZSBmaWxlIHR5cGVcbiAgaWYgKCFmaWxlLm5hbWUuZW5kc1dpdGgoXCIuemlwXCIpKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIk9ubHkgLnppcCBmaWxlcyBhcmUgYWxsb3dlZFwiIH07XG4gIH1cblxuICAvLyBWYWxpZGF0ZSBmaWxlIHNpemUgKG1heCAxMDBNQilcbiAgY29uc3QgbWF4U2l6ZSA9IDEwMCAqIDEwMjQgKiAxMDI0OyAvLyAxMDBNQiBpbiBieXRlc1xuICBpZiAoZmlsZS5zaXplID4gbWF4U2l6ZSkge1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yOiBcIkZpbGUgc2l6ZSBleGNlZWRzIDEwME1CIGxpbWl0XCIsXG4gICAgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gR2VuZXJhdGUgYSB1bmlxdWUgZmlsZSBuYW1lIHRvIHByZXZlbnQgY29sbGlzaW9uc1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IERhdGUubm93KCk7XG4gICAgY29uc3Qgc2FuaXRpemVkTmFtZSA9IG5hbWUudHJpbSgpLnJlcGxhY2UoL1teYS16MC05LV9dL2dpLCBcIl9cIik7XG4gICAgY29uc3QgZmlsZU5hbWUgPSBgJHtzYW5pdGl6ZWROYW1lfV8ke3RpbWVzdGFtcH1fJHtmaWxlLm5hbWV9YDtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGAke29yZ0lkfS8ke2ZpbGVOYW1lfWA7XG5cbiAgICAvLyBVcGxvYWQgZmlsZSB0byBTdXBhYmFzZSBTdG9yYWdlXG4gICAgY29uc3QgeyBlcnJvcjogdXBsb2FkRXJyb3IgfSA9IGF3YWl0IGNsaWVudC5zdG9yYWdlXG4gICAgICAuZnJvbShcImxvY2FsX3JlcG9zXCIpXG4gICAgICAudXBsb2FkKGZpbGVQYXRoLCBmaWxlLCB7XG4gICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL3ppcFwiLFxuICAgICAgICB1cHNlcnQ6IGZhbHNlLFxuICAgICAgfSk7XG5cbiAgICBpZiAodXBsb2FkRXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJVcGxvYWQgZXJyb3I6XCIsIHVwbG9hZEVycm9yKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogYEZpbGUgdXBsb2FkIGZhaWxlZDogJHt1cGxvYWRFcnJvci5tZXNzYWdlfWAsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEdldCB0aGUgcHVibGljIFVSTCBmb3IgdGhlIHVwbG9hZGVkIGZpbGVcbiAgICBjb25zdCB7IGRhdGE6IHVybERhdGEgfSA9IGNsaWVudC5zdG9yYWdlXG4gICAgICAuZnJvbShcImxvY2FsX3JlcG9zXCIpXG4gICAgICAuZ2V0UHVibGljVXJsKGZpbGVQYXRoKTtcblxuICAgIC8vIENyZWF0ZSByZXBvc2l0b3J5IHJlY29yZCBpbiBkYXRhYmFzZVxuICAgIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3I6IHJlcG9FcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgICAgLmluc2VydCh7XG4gICAgICAgIG5hbWU6IG5hbWUudHJpbSgpLFxuICAgICAgICBwcm92aWRlcjogXCJsb2NhbFwiLFxuICAgICAgICByZXBvX3VybDogbnVsbCxcbiAgICAgICAgb2JqZWN0X3VybDogdXJsRGF0YS5wdWJsaWNVcmwsXG4gICAgICAgIG9yZ2FuaXphdGlvbl9pZDogb3JnSWQsXG4gICAgICAgIGluZGV4ZWRfYnk6IHVzZXIuaWQsXG4gICAgICAgIGluZGV4X3N0YXR1czogXCJub3QgaW5kZXhlZFwiLFxuICAgICAgfSlcbiAgICAgIC5zZWxlY3QoKVxuICAgICAgLnNpbmdsZSgpO1xuXG4gICAgaWYgKHJlcG9FcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIlJlcG9zaXRvcnkgY3JlYXRpb24gZXJyb3I6XCIsIHJlcG9FcnJvcik7XG4gICAgICAvLyBBdHRlbXB0IHRvIGNsZWFuIHVwIHVwbG9hZGVkIGZpbGVcbiAgICAgIGF3YWl0IGNsaWVudC5zdG9yYWdlLmZyb20oXCJsb2NhbF9yZXBvc1wiKS5yZW1vdmUoW2ZpbGVQYXRoXSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IGBSZXBvc2l0b3J5IGNyZWF0aW9uIGZhaWxlZDogJHtyZXBvRXJyb3IubWVzc2FnZX1gLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXBvIGFzIFJlcG8gfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiVW5leHBlY3RlZCBlcnJvcjpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yOlxuICAgICAgICBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZFwiLFxuICAgIH07XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUmVwb3NpdG9yeSBNYW5hZ2VtZW50IFNlcnZpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXBvV2l0aFN0YXR1cyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFyZXBvKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlJlcG9zaXRvcnkgbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlcG8gYXMgUmVwbyB9O1xufVxuXG50eXBlIFVwZGF0ZURhdGEgPSB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHJlcG9fdXJsPzogc3RyaW5nO1xuICBvYmplY3RfdXJsPzogc3RyaW5nO1xuICBpbmRleF9zdGF0dXM/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUmVwb1NldHRpbmdzKFxuICByZXBvSWQ6IHN0cmluZyxcbiAgc2V0dGluZ3M6IHsgbmFtZT86IHN0cmluZzsgcmVwb191cmw/OiBzdHJpbmc7IGZpbGU/OiBGaWxlIH0sXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIC8vIEdldCB0aGUgY3VycmVudCByZXBvIHRvIGNoZWNrIGl0cyBwcm92aWRlciB0eXBlXG4gIGNvbnN0IHsgZGF0YTogY3VycmVudFJlcG8gfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghY3VycmVudFJlcG8pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUmVwb3NpdG9yeSBub3QgZm91bmQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZURhdGE6IFVwZGF0ZURhdGEgPSB7fTtcblxuICAvLyBIYW5kbGUgbmFtZSB1cGRhdGVcbiAgaWYgKHNldHRpbmdzLm5hbWUpIHtcbiAgICB1cGRhdGVEYXRhLm5hbWUgPSBzZXR0aW5ncy5uYW1lO1xuICB9XG5cbiAgLy8gSGFuZGxlIEdpdEh1YiBVUkwgdXBkYXRlXG4gIGlmIChzZXR0aW5ncy5yZXBvX3VybCAmJiBjdXJyZW50UmVwby5wcm92aWRlciA9PT0gXCJnaXRodWJcIikge1xuICAgIGNvbnN0IHsgb3duZXIsIHJlcG8gfSA9IHBhcnNlR2l0SHViVXJsKHNldHRpbmdzLnJlcG9fdXJsKTtcblxuICAgIGlmICghb3duZXIgfHwgIXJlcG8pIHtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJJbnZhbGlkIEdpdEh1YiBVUkwgZm9ybWF0IVwiIH07XG4gICAgfVxuXG4gICAgLy8gVmVyaWZ5IGFjY2VzcyB0byB0aGUgbmV3IHJlcG9cbiAgICBjb25zdCB7IGRhdGE6IGluc3RhbGxhdGlvbiB9ID0gYXdhaXQgY2xpZW50XG4gICAgICAuZnJvbShcImdpdGh1Yl9pbnN0YWxsYXRpb25zXCIpXG4gICAgICAuc2VsZWN0KFwiKlwiKVxuICAgICAgLmVxKFwiaW5zdGFsbGVkX2J5XCIsIHVzZXIuaWQpXG4gICAgICAuc2luZ2xlKCk7XG5cbiAgICBpZiAoIWluc3RhbGxhdGlvbikge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkdpdEh1YiBBcHAgbm90IGluc3RhbGxlZCFcIiB9O1xuICAgIH1cblxuICAgIGNvbnN0IGhhc0FjY2VzcyA9IGF3YWl0IHZlcmlmeUdpdGh1YlJlcG9BY2Nlc3MoXG4gICAgICBpbnN0YWxsYXRpb24uaW5zdGFsbGF0aW9uX2lkLnRvU3RyaW5nKCksXG4gICAgICBvd25lcixcbiAgICAgIHJlcG8sXG4gICAgKTtcblxuICAgIGlmICghaGFzQWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6XG4gICAgICAgICAgXCJDYW5ub3QgYWNjZXNzIHRoaXMgcmVwb3NpdG9yeS4gTWFrZSBzdXJlIHRoZSBHaXRIdWIgQXBwIGlzIGluc3RhbGxlZCBmb3IgdGhpcyByZXBvc2l0b3J5LlwiLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICB1cGRhdGVEYXRhLnJlcG9fdXJsID0gc2V0dGluZ3MucmVwb191cmw7XG4gICAgdXBkYXRlRGF0YS5pbmRleF9zdGF0dXMgPSBcIm5vdCBpbmRleGVkXCI7IC8vIFRyaWdnZXIgcmUtaW5kZXhpbmdcbiAgfVxuXG4gIC8vIEhhbmRsZSBsb2NhbCBmaWxlIHVwbG9hZFxuICBpZiAoc2V0dGluZ3MuZmlsZSAmJiBjdXJyZW50UmVwby5wcm92aWRlciA9PT0gXCJsb2NhbFwiKSB7XG4gICAgY29uc3QgZmlsZSA9IHNldHRpbmdzLmZpbGU7XG4gICAgY29uc3QgZmlsZUV4dCA9IGZpbGUubmFtZS5zcGxpdChcIi5cIikucG9wKCk7XG5cbiAgICBpZiAoZmlsZUV4dCAhPT0gXCJ6aXBcIikge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIk9ubHkgLnppcCBmaWxlcyBhcmUgYWxsb3dlZCFcIiB9O1xuICAgIH1cblxuICAgIC8vIFVwbG9hZCB0byBTdXBhYmFzZSBTdG9yYWdlXG4gICAgY29uc3QgZmlsZU5hbWUgPSBgJHtyZXBvSWR9LSR7RGF0ZS5ub3coKX0uemlwYDtcbiAgICBjb25zdCB7IGRhdGE6IHVwbG9hZERhdGEsIGVycm9yOiB1cGxvYWRFcnJvciB9ID0gYXdhaXQgY2xpZW50LnN0b3JhZ2VcbiAgICAgIC5mcm9tKFwibG9jYWxfcmVwb3NcIilcbiAgICAgIC51cGxvYWQoZmlsZU5hbWUsIGZpbGUpO1xuXG4gICAgaWYgKHVwbG9hZEVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKHVwbG9hZEVycm9yKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gdXBsb2FkIGZpbGUhXCIgfTtcbiAgICB9XG5cbiAgICAvLyBHZXQgcHVibGljIFVSTFxuICAgIGNvbnN0IHsgZGF0YTogdXJsRGF0YSB9ID0gY2xpZW50LnN0b3JhZ2VcbiAgICAgIC5mcm9tKFwibG9jYWxfcmVwb3NcIilcbiAgICAgIC5nZXRQdWJsaWNVcmwoZmlsZU5hbWUpO1xuXG4gICAgdXBkYXRlRGF0YS5vYmplY3RfdXJsID0gdXJsRGF0YS5wdWJsaWNVcmw7XG4gICAgdXBkYXRlRGF0YS5pbmRleF9zdGF0dXMgPSBcInBlbmRpbmdcIjsgLy8gVHJpZ2dlciByZS1pbmRleGluZ1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSByZXBvc2l0b3J5XG4gIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnVwZGF0ZSh1cGRhdGVEYXRhKVxuICAgIC5lcShcImlkXCIsIHJlcG9JZClcbiAgICAuc2VsZWN0KClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXBvIGFzIFJlcG8gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVJlcG8oXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8eyBvcmdhbml6YXRpb25JZDogc3RyaW5nIH0+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gRmV0Y2ggdGhlIG9yZ2FuaXphdGlvbl9pZCBiZWZvcmUgZGVsZXRpbmdcbiAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvcjogcmVwb0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgIC5zZWxlY3QoXCJvcmdhbml6YXRpb25faWRcIilcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChyZXBvRXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKHJlcG9FcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiByZXBvRXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFyZXBvKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlJlcG9zaXRvcnkgbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IGNsaWVudC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpLmRlbGV0ZSgpLmVxKFwiaWRcIiwgcmVwb0lkKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHsgb3JnYW5pemF0aW9uSWQ6IHJlcG8ub3JnYW5pemF0aW9uX2lkIH0gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRyaWdnZXJSZWluZGV4KFxuICByZXBvSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PHZvaWQ+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSBpbmRleF9zdGF0dXMgdG8gJ3BlbmRpbmcnIHRvIHRyaWdnZXIgcmVpbmRleGluZ1xuICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgIC51cGRhdGUoeyBpbmRleF9zdGF0dXM6IFwicGVuZGluZ1wiIH0pXG4gICAgLmVxKFwiaWRcIiwgcmVwb0lkKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIC8vIFRPRE86IFRyaWdnZXIgYWN0dWFsIGluZGV4aW5nIGpvYi93ZWJob29rL3F1ZXVlIGhlcmVcbiAgLy8gVGhpcyBjb3VsZCBiZSBhbiBBUEkgY2FsbCB0byB5b3VyIGluZGV4aW5nIHNlcnZpY2VcblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1bmRlZmluZWQgfTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRG9jdW1lbnRhdGlvbiBTZXJ2aWNlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jdW1lbnRhdGlvbihcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2N1bWVudGF0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogZG9jdW1lbnRhdGlvbiwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFkb2N1bWVudGF0aW9uKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkRvY3VtZW50YXRpb24gbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGRvY3VtZW50YXRpb24gYXMgRG9jdW1lbnRhdGlvbiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jUGFnZXMoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jUGFnZVtdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIC8vIEdldCB0aGUgbGF0ZXN0IGRvY3VtZW50YXRpb24gdmVyc2lvbiBmb3IgdGhpcyByZXBvXG4gIGNvbnN0IHsgZGF0YTogZG9jdW1lbnRhdGlvbiwgZXJyb3I6IGRvY0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwiaWRcIilcbiAgICAuZXEoXCJyZXBvX2lkXCIsIHJlcG9JZClcbiAgICAub3JkZXIoXCJ2ZXJzaW9uXCIsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxuICAgIC5saW1pdCgxKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZG9jRXJyb3IgfHwgIWRvY3VtZW50YXRpb24pIHtcbiAgICBjb25zb2xlLmVycm9yKGRvY0Vycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRG9jdW1lbnRhdGlvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdlcywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicGFnZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImRvY3VtZW50YXRpb25faWRcIiwgZG9jdW1lbnRhdGlvbi5pZClcbiAgICAub3JkZXIoXCJvcmRlcl9pbmRleFwiLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChwYWdlcyA/PyBbXSkgYXMgRG9jUGFnZVtdIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2NQYWdlQnlJZChcbiAgcGFnZUlkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2NQYWdlPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcGFnZSwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jX3BhZ2VzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpZFwiLCBwYWdlSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFwYWdlKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlBhZ2Ugbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHBhZ2UgYXMgRG9jUGFnZSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jUGFnZXNIaWVyYXJjaGljYWwoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jUGFnZVtdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIC8vIEZpcnN0IGdldCB0aGUgZG9jdW1lbnRhdGlvbiBJRCBmb3IgdGhpcyByZXBvXG4gIGNvbnN0IHsgZGF0YTogZG9jdW1lbnRhdGlvbiwgZXJyb3I6IGRvY0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwiaWRcIilcbiAgICAuZXEoXCJyZXBvX2lkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGRvY0Vycm9yIHx8ICFkb2N1bWVudGF0aW9uKSB7XG4gICAgY29uc29sZS5lcnJvcihkb2NFcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkRvY3VtZW50YXRpb24gbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcGFnZXMsIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY19wYWdlc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiZG9jdW1lbnRhdGlvbl9pZFwiLCBkb2N1bWVudGF0aW9uLmlkKVxuICAgIC5vcmRlcihcIm9yZGVyX2luZGV4XCIsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgLy8gUGFnZXMgYXJlIGFscmVhZHkgc29ydGVkIGJ5IG9yZGVyX2luZGV4XG4gIC8vIFRoZSBwYXJlbnRfcGFnZV9pZCBmaWVsZCBtYWludGFpbnMgdGhlIGhpZXJhcmNoeVxuICAvLyBGcm9udGVuZCBjYW4gdXNlIHRoaXMgdG8gcmVuZGVyIHRoZSB0cmVlIHN0cnVjdHVyZVxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiAocGFnZXMgPz8gW10pIGFzIERvY1BhZ2VbXSB9O1xufVxuXG4vKipcbiAqIEdldCBhbGwgZG9jdW1lbnRhdGlvbiB2ZXJzaW9ucyBmb3IgYSByZXBvc2l0b3J5XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2N1bWVudGF0aW9uVmVyc2lvbnMoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jdW1lbnRhdGlvbltdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogdmVyc2lvbnMsIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5vcmRlcihcInZlcnNpb25cIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKHZlcnNpb25zID8/IFtdKSBhcyBEb2N1bWVudGF0aW9uW10gfTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGxhdGVzdCBjb21wbGV0ZWQgZG9jdW1lbnRhdGlvbiB2ZXJzaW9uIGZvciBhIHJlcG9zaXRvcnlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExhdGVzdERvY3VtZW50YXRpb24oXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jdW1lbnRhdGlvbj4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGRvY3VtZW50YXRpb24sIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5vcmRlcihcInZlcnNpb25cIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXG4gICAgLmxpbWl0KDEpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghZG9jdW1lbnRhdGlvbikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJEb2N1bWVudGF0aW9uIG5vdCBmb3VuZFwiIH07XG4gIH1cblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGRvY3VtZW50YXRpb24gYXMgRG9jdW1lbnRhdGlvbiB9O1xufVxuXG4vKipcbiAqIEdldCBkb2N1bWVudGF0aW9uIHBhZ2VzIGZvciBhIHNwZWNpZmljIHZlcnNpb25cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERvY1BhZ2VzRm9yVmVyc2lvbihcbiAgcmVwb0lkOiBzdHJpbmcsXG4gIHZlcnNpb246IG51bWJlcixcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PERvY1BhZ2VbXT4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICAvLyBHZXQgdGhlIGRvY3VtZW50YXRpb24gcmVjb3JkIGZvciB0aGlzIHZlcnNpb25cbiAgY29uc3QgeyBkYXRhOiBkb2N1bWVudGF0aW9uLCBlcnJvcjogZG9jRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCJpZFwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5lcShcInZlcnNpb25cIiwgdmVyc2lvbilcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGRvY0Vycm9yIHx8ICFkb2N1bWVudGF0aW9uKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkRvY3VtZW50YXRpb24gdmVyc2lvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdlcywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicGFnZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImRvY3VtZW50YXRpb25faWRcIiwgZG9jdW1lbnRhdGlvbi5pZClcbiAgICAub3JkZXIoXCJvcmRlcl9pbmRleFwiLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChwYWdlcyA/PyBbXSkgYXMgRG9jUGFnZVtdIH07XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENvbnZlcnNhdGlvbiBTZXJ2aWNlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29udmVyc2F0aW9ucyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4gIGxpbWl0OiBudW1iZXIgPSAyMCxcbiAgdmVyc2lvbjogbnVtYmVyIHwgbnVsbCA9IG51bGwsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxDb252ZXJzYXRpb25bXT4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBsZXQgcXVlcnkgPSBjbGllbnRcbiAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlci5pZCk7XG5cbiAgLy8gRmlsdGVyIGJ5IHZlcnNpb24gaWYgc3BlY2lmaWVkXG4gIGlmICh2ZXJzaW9uICE9PSBudWxsICYmIHZlcnNpb24gIT09IHVuZGVmaW5lZCkge1xuICAgIHF1ZXJ5ID0gcXVlcnkuZXEoXCJyZXBvX3ZlcnNpb25cIiwgdmVyc2lvbik7XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGNvbnZlcnNhdGlvbnMsIGVycm9yIH0gPSBhd2FpdCBxdWVyeVxuICAgIC5vcmRlcihcInVwZGF0ZWRfYXRcIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXG4gICAgLmxpbWl0KGxpbWl0KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChjb252ZXJzYXRpb25zID8/IFtdKSBhcyBDb252ZXJzYXRpb25bXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29udmVyc2F0aW9uQnlJZChcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbj4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGNvbnZlcnNhdGlvbiwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiaWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIGlmICghY29udmVyc2F0aW9uKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkNvbnZlcnNhdGlvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY29udmVyc2F0aW9uIGFzIENvbnZlcnNhdGlvbiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ29udmVyc2F0aW9uKFxuICByZXBvSWQ6IHN0cmluZyxcbiAgdGl0bGU/OiBzdHJpbmcsXG4gIHZlcnNpb24/OiBudW1iZXIgfCBudWxsLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29udmVyc2F0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogY29udmVyc2F0aW9uLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLmluc2VydCh7XG4gICAgICByZXBvX2lkOiByZXBvSWQsXG4gICAgICB1c2VyX2lkOiB1c2VyLmlkLFxuICAgICAgdGl0bGU6IHRpdGxlIHx8IFwiTmV3IENvbnZlcnNhdGlvblwiLFxuICAgICAgcmVwb192ZXJzaW9uOiB2ZXJzaW9uID8/IG51bGwsXG4gICAgfSlcbiAgICAuc2VsZWN0KClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjb252ZXJzYXRpb24gYXMgQ29udmVyc2F0aW9uIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDb252ZXJzYXRpb24oXG4gIGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDx2b2lkPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgIC5kZWxldGUoKVxuICAgIC5lcShcImlkXCIsIGNvbnZlcnNhdGlvbklkKVxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlci5pZCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1bmRlZmluZWQgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbmFtZUNvbnZlcnNhdGlvbihcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbiAgbmV3VGl0bGU6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbj4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGNvbnZlcnNhdGlvbiwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgIC51cGRhdGUoeyB0aXRsZTogbmV3VGl0bGUgfSlcbiAgICAuZXEoXCJpZFwiLCBjb252ZXJzYXRpb25JZClcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY29udmVyc2F0aW9uIGFzIENvbnZlcnNhdGlvbiB9O1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNZXNzYWdlIFNlcnZpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb252ZXJzYXRpb25NZXNzYWdlcyhcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbk1lc3NhZ2VbXT4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IG1lc3NhZ2VzLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJtZXNzYWdlc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiY29udmVyc2F0aW9uX2lkXCIsIGNvbnZlcnNhdGlvbklkKVxuICAgIC5vcmRlcihcImNyZWF0ZWRfYXRcIiwgeyBhc2NlbmRpbmc6IHRydWUgfSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiAobWVzc2FnZXMgPz8gW10pIGFzIENvbnZlcnNhdGlvbk1lc3NhZ2VbXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTWVzc2FnZShcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbiAgcm9sZTogXCJ1c2VyXCIgfCBcImFzc2lzdGFudFwiLFxuICBjb250ZW50OiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxDb252ZXJzYXRpb25NZXNzYWdlPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogbWVzc2FnZSwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwibWVzc2FnZXNcIilcbiAgICAuaW5zZXJ0KHtcbiAgICAgIGNvbnZlcnNhdGlvbl9pZDogY29udmVyc2F0aW9uSWQsXG4gICAgICByb2xlLFxuICAgICAgY29udGVudCxcbiAgICB9KVxuICAgIC5zZWxlY3QoKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSB0aGUgY29udmVyc2F0aW9uJ3MgdXBkYXRlZF9hdCB0aW1lc3RhbXBcbiAgYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLnVwZGF0ZSh7IHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSB9KVxuICAgIC5lcShcImlkXCIsIGNvbnZlcnNhdGlvbklkKTtcblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBtZXNzYWdlIGFzIENvbnZlcnNhdGlvbk1lc3NhZ2UgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVDb2RlU25pcHBldHMoXG4gIGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsXG4gIG1lc3NhZ2VJZDogc3RyaW5nLFxuICBzbmlwcGV0czogQXJyYXk8eyBmaWxlOiBzdHJpbmc7IGNvZGU6IHN0cmluZyB9Pixcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvZGVTbmlwcGV0W10+PiB7XG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qgc25pcHBldHNUb0luc2VydCA9IHNuaXBwZXRzLm1hcCgoc25pcHBldCkgPT4gKHtcbiAgICBjb252ZXJzYXRpb25faWQ6IGNvbnZlcnNhdGlvbklkLFxuICAgIG1lc3NhZ2VfaWQ6IG1lc3NhZ2VJZCxcbiAgICBmaWxlX3BhdGg6IHNuaXBwZXQuZmlsZSxcbiAgICBjb2RlX2NvbnRlbnQ6IHNuaXBwZXQuY29kZSxcbiAgICBsYW5ndWFnZTogc25pcHBldC5maWxlLnNwbGl0KFwiLlwiKS5wb3AoKSB8fCBudWxsLFxuICB9KSk7XG5cbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbShcImNvZGVfc25pcHBldHNcIilcbiAgICAuaW5zZXJ0KHNuaXBwZXRzVG9JbnNlcnQpXG4gICAgLnNlbGVjdCgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogZGF0YSBhcyBDb2RlU25pcHBldFtdIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb2RlU25pcHBldHNGb3JDb252ZXJzYXRpb24oXG4gIGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxDb2RlU25pcHBldFtdPj4ge1xuICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oXCJjb2RlX3NuaXBwZXRzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJjb252ZXJzYXRpb25faWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgLm9yZGVyKFwiY3JlYXRlZF9hdFwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBkYXRhIGFzIENvZGVTbmlwcGV0W10gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNvZGVTbmlwcGV0KFxuICBzbmlwcGV0SWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PG51bGw+PiB7XG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbShcImNvZGVfc25pcHBldHNcIilcbiAgICAuZGVsZXRlKClcbiAgICAuZXEoXCJpZFwiLCBzbmlwcGV0SWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogbnVsbCB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5kZXhSZXBvc2l0b3J5KFxuICByZXBvSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PHZvaWQ+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBpbnN0YWxsYXRpb24sIGVycm9yOiBpbnN0YWxsYXRpb25FcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJnaXRodWJfaW5zdGFsbGF0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiaW5zdGFsbGVkX2J5XCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghaW5zdGFsbGF0aW9uIHx8IGluc3RhbGxhdGlvbkVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkdpdGh1YiBBcHAgSW5zdGFsbGF0aW9uIG5vdCBmb3VuZCFcIiB9O1xuICB9XG5cbiAgLy9mZXRjaCByZXBvXG5cbiAgY29uc3QgcmVwb1Jlc3VsdCA9IGF3YWl0IGdldFJlcG9XaXRoU3RhdHVzKHJlcG9JZCk7XG5cbiAgaWYgKCFyZXBvUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHJlcG9SZXN1bHQuZXJyb3IgfTtcbiAgfVxuXG4gIGNvbnN0IHJlcG9VcmwgPSByZXBvUmVzdWx0LmRhdGEucmVwb191cmw7XG4gIGNvbnN0IGluc3RhbGxhdGlvbklkID0gaW5zdGFsbGF0aW9uLmluc3RhbGxhdGlvbl9pZDtcblxuICAvLyBHZXQgdGhlIGxhdGVzdCB2ZXJzaW9uIG51bWJlciBmb3IgdGhpcyByZXBvXG4gIGNvbnN0IHsgZGF0YTogbGF0ZXN0RG9jIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwidmVyc2lvblwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5vcmRlcihcInZlcnNpb25cIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXG4gICAgLmxpbWl0KDEpXG4gICAgLnNpbmdsZSgpO1xuXG4gIC8vIEluY3JlbWVudCB2ZXJzaW9uIChzdGFydCBhdCAxIGlmIG5vIHByZXZpb3VzIHZlcnNpb25zKVxuICBjb25zdCBuZXh0VmVyc2lvbiA9IChsYXRlc3REb2M/LnZlcnNpb24gPz8gMCkgKyAxO1xuXG4gIC8vbWFyayB0aGUgcmVwb3NpdG9yeSBhcyBpbmRleGluZyBpbiBzdXBhYmFzZSBmaXJzdFxuICBjb25zdCB7IGVycm9yOiB1cGRhdGVFcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAudXBkYXRlKHsgaW5kZXhfc3RhdHVzOiBcImluZGV4aW5nXCIgfSlcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpO1xuXG4gIGlmICh1cGRhdGVFcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IodXBkYXRlRXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogdXBkYXRlRXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgLy8gQ2FsbCB0aGUgYmFja2VuZCB0byBzdGFydCBpbmRleGluZyAoZmlyZS1hbmQtZm9yZ2V0KVxuICAvLyBEb24ndCBhd2FpdCBvciB0aHJvdyBlcnJvcnMgc2luY2UgdGhpcyBpcyBhIGxvbmctcnVubmluZyBvcGVyYXRpb25cbiAgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L3JlcG9zL2luZGV4YCwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICByZXBvX3VybDogcmVwb1VybCxcbiAgICAgIHJlcG9faWQ6IHJlcG9JZCxcbiAgICAgIHVzZXJfaWQ6IHVzZXIuaWQsXG4gICAgICBpbnN0YWxsYXRpb25faWQ6IGluc3RhbGxhdGlvbklkLFxuICAgICAgYnJhbmNoOiBcIm1haW5cIixcbiAgICAgIHZlcnNpb246IG5leHRWZXJzaW9uLFxuICAgIH0pLFxuICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAvLyBMb2cgdGhlIGVycm9yIGJ1dCBkb24ndCBmYWlsIHRoZSByZXF1ZXN0XG4gICAgY29uc29sZS5lcnJvcihcIkluZGV4aW5nIHJlcXVlc3QgZmFpbGVkOlwiLCBlcnJvcik7XG4gICAgLy8gVGhlIGJhY2tlbmQgc2hvdWxkIGhhbmRsZSB1cGRhdGluZyB0aGUgcmVwbyBzdGF0dXMgb24gZmFpbHVyZVxuICB9KTtcblxuICAvLyBSZXR1cm4gc3VjY2VzcyBpbW1lZGlhdGVseSAtIHRoZSBpbmRleGluZyB3aWxsIGhhcHBlbiBpbiB0aGUgYmFja2dyb3VuZFxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1bmRlZmluZWQgfTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOFNBK3lCc0IifQ==
}),
"[project]/src/lib/services/data:1224e1 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"401aaf8803662d813cec876ec90d3dbc7c01409ec9":"getRepoWithStatus"},"src/lib/services/repoService.ts",""] */ __turbopack_context__.s([
    "getRepoWithStatus",
    ()=>getRepoWithStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var getRepoWithStatus = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("401aaf8803662d813cec876ec90d3dbc7c01409ec9", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getRepoWithStatus"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcmVwb1NlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAL3V0aWxzL3N1cGFiYXNlL3NlcnZlclwiO1xuaW1wb3J0IHtcbiAgUmVwbyxcbiAgRG9jdW1lbnRhdGlvbixcbiAgRG9jUGFnZSxcbiAgQ29udmVyc2F0aW9uLFxuICBDb252ZXJzYXRpb25NZXNzYWdlLFxuICBDb2RlU25pcHBldCxcbn0gZnJvbSBcIkAvYXBwL3R5cGVzL3N1cGFiYXNlXCI7XG5pbXBvcnQgeyBBY3Rpb25SZXN1bHQgfSBmcm9tIFwiQC9hcHAvdHlwZXMvYWN0aW9uXCI7XG5pbXBvcnQge1xuICB2ZXJpZnlHaXRodWJSZXBvQWNjZXNzLFxuICB2ZXJpZnlHaXRMYWJSZXBvQWNjZXNzLFxufSBmcm9tIFwiLi9naXRQcm92aWRlclNlcnZpY2VcIjtcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHBhcnNlIEdpdEh1YiBVUkxzXG5mdW5jdGlvbiBwYXJzZUdpdEh1YlVybCh1cmw6IHN0cmluZyk6IHsgb3duZXI6IHN0cmluZzsgcmVwbzogc3RyaW5nIH0ge1xuICB0cnkge1xuICAgIC8vIEhhbmRsZSBtdWx0aXBsZSBmb3JtYXRzOlxuICAgIC8vIC0gaHR0cHM6Ly9naXRodWIuY29tL293bmVyL3JlcG9cbiAgICAvLyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9vd25lci9yZXBvLmdpdFxuICAgIC8vIC0gZ2l0QGdpdGh1Yi5jb206b3duZXIvcmVwby5naXRcblxuICAgIHVybCA9IHVybC50cmltKCkucmVwbGFjZSgvXFwuZ2l0JC8sIFwiXCIpO1xuXG4gICAgaWYgKHVybC5pbmNsdWRlcyhcImdpdGh1Yi5jb20vXCIpKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IHVybC5zcGxpdChcImdpdGh1Yi5jb20vXCIpWzFdLnNwbGl0KFwiL1wiKTtcbiAgICAgIHJldHVybiB7IG93bmVyOiBwYXJ0c1swXSwgcmVwbzogcGFydHNbMV0gfTtcbiAgICB9XG5cbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoXCJnaXRAZ2l0aHViLmNvbTpcIikpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gdXJsLnJlcGxhY2UoXCJnaXRAZ2l0aHViLmNvbTpcIiwgXCJcIikuc3BsaXQoXCIvXCIpO1xuICAgICAgcmV0dXJuIHsgb3duZXI6IHBhcnRzWzBdLCByZXBvOiBwYXJ0c1sxXSB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IG93bmVyOiBcIlwiLCByZXBvOiBcIlwiIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgb3duZXI6IFwiXCIsIHJlcG86IFwiXCIgfTtcbiAgfVxufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gcGFyc2UgR2l0TGFiIFVSTHNcbmZ1bmN0aW9uIHBhcnNlR2l0TGFiVXJsKHVybDogc3RyaW5nKTogeyBvd25lcjogc3RyaW5nOyByZXBvOiBzdHJpbmcgfSB7XG4gIHRyeSB7XG4gICAgLy8gSGFuZGxlIG11bHRpcGxlIGZvcm1hdHM6XG4gICAgLy8gLSBodHRwczovL2dpdGxhYi5jb20vb3duZXIvcmVwb1xuICAgIC8vIC0gaHR0cHM6Ly9naXRsYWIuY29tL293bmVyL3N1Ymdyb3VwL3JlcG9cbiAgICAvLyAtIGh0dHBzOi8vZ2l0bGFiLmNvbS9vd25lci9yZXBvLmdpdFxuICAgIC8vIC0gZ2l0QGdpdGxhYi5jb206b3duZXIvcmVwby5naXRcbiAgICAvLyAtIFNlbGYtaG9zdGVkOiBodHRwczovL2dpdGxhYi5leGFtcGxlLmNvbS9vd25lci9yZXBvXG5cbiAgICB1cmwgPSB1cmwudHJpbSgpLnJlcGxhY2UoL1xcLmdpdCQvLCBcIlwiKTtcblxuICAgIC8vIEhhbmRsZSBIVFRQUyBVUkxzIChnaXRsYWIuY29tIG9yIHNlbGYtaG9zdGVkKVxuICAgIGlmICh1cmwuaW5jbHVkZXMoXCJnaXRsYWIuY29tL1wiKSB8fCAvZ2l0bGFiXFwuW14vXStcXC8vLnRlc3QodXJsKSkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgcGF0aCBhZnRlciB0aGUgZG9tYWluXG4gICAgICBjb25zdCBtYXRjaCA9IHVybC5tYXRjaCgvZ2l0bGFiW14vXSpcXC8oLispLyk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgY29uc3QgcGF0aFBhcnRzID0gbWF0Y2hbMV0uc3BsaXQoXCIvXCIpO1xuICAgICAgICAvLyBHaXRMYWIgc3VwcG9ydHMgbmVzdGVkIGdyb3Vwcywgc28gd2UgbmVlZCB0byBoYW5kbGU6XG4gICAgICAgIC8vIC0gb3duZXIvcmVwbyAoMiBwYXJ0cylcbiAgICAgICAgLy8gLSBvd25lci9zdWJncm91cC9yZXBvICgzKyBwYXJ0cylcbiAgICAgICAgaWYgKHBhdGhQYXJ0cy5sZW5ndGggPj0gMikge1xuICAgICAgICAgIC8vIFRha2UgZXZlcnl0aGluZyBleGNlcHQgdGhlIGxhc3QgcGFydCBhcyBvd25lci9ncm91cFxuICAgICAgICAgIGNvbnN0IHJlcG8gPSBwYXRoUGFydHNbcGF0aFBhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IG93bmVyID0gcGF0aFBhcnRzLnNsaWNlKDAsIC0xKS5qb2luKFwiL1wiKTtcbiAgICAgICAgICByZXR1cm4geyBvd25lciwgcmVwbyB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIFNTSCBVUkxzXG4gICAgaWYgKHVybC5zdGFydHNXaXRoKFwiZ2l0QGdpdGxhYi5jb206XCIpIHx8IC9naXRAZ2l0bGFiXFwuW146XSs6Ly50ZXN0KHVybCkpIHtcbiAgICAgIGNvbnN0IG1hdGNoID0gdXJsLm1hdGNoKC9naXRAZ2l0bGFiW146XSo6KC4rKS8pO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGNvbnN0IHBhdGhQYXJ0cyA9IG1hdGNoWzFdLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgaWYgKHBhdGhQYXJ0cy5sZW5ndGggPj0gMikge1xuICAgICAgICAgIGNvbnN0IHJlcG8gPSBwYXRoUGFydHNbcGF0aFBhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IG93bmVyID0gcGF0aFBhcnRzLnNsaWNlKDAsIC0xKS5qb2luKFwiL1wiKTtcbiAgICAgICAgICByZXR1cm4geyBvd25lciwgcmVwbyB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgb3duZXI6IFwiXCIsIHJlcG86IFwiXCIgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBvd25lcjogXCJcIiwgcmVwbzogXCJcIiB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXBvc0J5T3JnYW5pemF0aW9uSWQoXG4gIG9yZ2FuaXphdGlvbklkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHVzZXIgPSBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJvcmdhbml6YXRpb25faWRcIiwgb3JnYW5pemF0aW9uSWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKGRhdGEgPz8gW10pIGFzIFJlcG9bXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUmVwb1ZpYUdpdGh1YihcbiAgZm9ybURhdGE6IEZvcm1EYXRhLFxuICBvcmdJZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8UmVwbyB8IHVuZGVmaW5lZD4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IHByb3ZpZGVyID0gZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IHVybCA9IGZvcm1EYXRhLmdldChcImdpdGh1Yi11cmxcIikgYXMgc3RyaW5nO1xuXG4gIGlmICghbmFtZSkge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJOYW1lIGlzIHJlcXVpcmVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGluc3RhbGxhdGlvbiB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJnaXRodWJfaW5zdGFsbGF0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiaW5zdGFsbGVkX2J5XCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghaW5zdGFsbGF0aW9uKSB7XG4gICAgLy8gTm8gR2l0SHViIEFwcCBpbnN0YWxsYXRpb24gLSBwcm9tcHQgdXNlciB0byBpbnN0YWxsXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiSW5zdGFsbGF0aW9uIE5lZWRlZFwiLFxuICAgIH07XG4gIH1cblxuICAvL3BhcnNlIHVybCBmb3Igb3duZXIgYW5kIHJlcG9cbiAgY29uc3QgeyBvd25lciwgcmVwbzogcmVwb05hbWUgfSA9IHBhcnNlR2l0SHViVXJsKHVybCk7XG5cbiAgY29uc3QgaGFzQWNjZXNzID0gYXdhaXQgdmVyaWZ5R2l0aHViUmVwb0FjY2VzcyhcbiAgICBpbnN0YWxsYXRpb24uaW5zdGFsbGF0aW9uX2lkLFxuICAgIG93bmVyLFxuICAgIHJlcG9OYW1lLFxuICApO1xuXG4gIGlmICghaGFzQWNjZXNzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiQWNjZXNzIERlbmllZFwiLFxuICAgIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IHJlcG8sIGVycm9yOiByZXBvRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLmluc2VydCh7XG4gICAgICBuYW1lLFxuICAgICAgcHJvdmlkZXIsXG4gICAgICByZXBvX3VybDogdXJsLFxuICAgICAgb3JnYW5pemF0aW9uX2lkOiBvcmdJZCxcbiAgICAgIGluZGV4ZWRfYnk6IHVzZXIuaWQsXG4gICAgICBpbmRleF9zdGF0dXM6IFwibm90IGluZGV4ZWRcIixcbiAgICB9KVxuICAgIC5zZWxlY3QoKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAocmVwb0Vycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiByZXBvRXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVwbyBhcyBSZXBvIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZXBvVmlhR2l0bGFiKFxuICBmb3JtRGF0YTogRm9ybURhdGEsXG4gIG9yZ0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvIHwgdW5kZWZpbmVkPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgY29uc3QgcHJvdmlkZXIgPSBmb3JtRGF0YS5nZXQoXCJ0eXBlXCIpIGFzIHN0cmluZztcbiAgY29uc3QgdXJsID0gZm9ybURhdGEuZ2V0KFwiZ2l0bGFiLXVybFwiKSBhcyBzdHJpbmc7XG5cbiAgLy8gVmFsaWRhdGUgaW5wdXRzXG4gIGlmICghbmFtZSB8fCBuYW1lLnRyaW0oKSA9PT0gXCJcIikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJSZXBvc2l0b3J5IG5hbWUgaXMgcmVxdWlyZWRcIiB9O1xuICB9XG5cbiAgaWYgKCF1cmwgfHwgdXJsLnRyaW0oKSA9PT0gXCJcIikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJHaXRMYWIgVVJMIGlzIHJlcXVpcmVkXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogaW5zdGFsbGF0aW9uIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImdpdGxhYl9pbnN0YWxsYXRpb25zXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpbnN0YWxsZWRfYnlcIiwgdXNlci5pZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKCFpbnN0YWxsYXRpb24pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiSW5zdGFsbGF0aW9uIE5lZWRlZFwiIH07XG4gIH1cblxuICBjb25zdCB7IG93bmVyLCByZXBvOiByZXBvTmFtZSB9ID0gcGFyc2VHaXRMYWJVcmwodXJsKTtcblxuICAvL3ZlcmlmeSBhY2Nlc3NcbiAgY29uc3QgaGFzQWNjZXNzID0gYXdhaXQgdmVyaWZ5R2l0TGFiUmVwb0FjY2VzcyhcbiAgICBpbnN0YWxsYXRpb24uYWNjZXNzX3Rva2VuLFxuICAgIG93bmVyLFxuICAgIHJlcG9OYW1lLFxuICApO1xuXG4gIGlmICghaGFzQWNjZXNzKSB7XG4gICAgaWYgKGluc3RhbGxhdGlvbi5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogXCJBY2Nlc3MgcmVxdWlyZWQhXCIsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yOiBcIkFjY2VzcyBkZW5pZWQhXCIsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3I6IHJlcG9FcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAuaW5zZXJ0KHtcbiAgICAgIG5hbWUsXG4gICAgICBwcm92aWRlcixcbiAgICAgIHJlcG9fdXJsOiB1cmwsXG4gICAgICBvcmdhbml6YXRpb25faWQ6IG9yZ0lkLFxuICAgICAgaW5kZXhlZF9ieTogdXNlci5pZCxcbiAgICAgIGluZGV4X3N0YXR1czogXCJub3QgaW5kZXhlZFwiLFxuICAgIH0pXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChyZXBvRXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHJlcG9FcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXBvIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZXBvVmlhTG9jYWxGaWxlKFxuICBmb3JtRGF0YTogRm9ybURhdGEsXG4gIG9yZ0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgY29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldChcImZpbGVcIikgYXMgRmlsZTtcblxuICAvLyBWYWxpZGF0ZSBpbnB1dHNcbiAgaWYgKCFuYW1lIHx8IG5hbWUudHJpbSgpID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlJlcG9zaXRvcnkgbmFtZSBpcyByZXF1aXJlZFwiIH07XG4gIH1cblxuICBpZiAoIWZpbGUpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmlsZSBpcyByZXF1aXJlZFwiIH07XG4gIH1cblxuICAvLyBWYWxpZGF0ZSBmaWxlIHR5cGVcbiAgaWYgKCFmaWxlLm5hbWUuZW5kc1dpdGgoXCIuemlwXCIpKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIk9ubHkgLnppcCBmaWxlcyBhcmUgYWxsb3dlZFwiIH07XG4gIH1cblxuICAvLyBWYWxpZGF0ZSBmaWxlIHNpemUgKG1heCAxMDBNQilcbiAgY29uc3QgbWF4U2l6ZSA9IDEwMCAqIDEwMjQgKiAxMDI0OyAvLyAxMDBNQiBpbiBieXRlc1xuICBpZiAoZmlsZS5zaXplID4gbWF4U2l6ZSkge1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yOiBcIkZpbGUgc2l6ZSBleGNlZWRzIDEwME1CIGxpbWl0XCIsXG4gICAgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gR2VuZXJhdGUgYSB1bmlxdWUgZmlsZSBuYW1lIHRvIHByZXZlbnQgY29sbGlzaW9uc1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IERhdGUubm93KCk7XG4gICAgY29uc3Qgc2FuaXRpemVkTmFtZSA9IG5hbWUudHJpbSgpLnJlcGxhY2UoL1teYS16MC05LV9dL2dpLCBcIl9cIik7XG4gICAgY29uc3QgZmlsZU5hbWUgPSBgJHtzYW5pdGl6ZWROYW1lfV8ke3RpbWVzdGFtcH1fJHtmaWxlLm5hbWV9YDtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGAke29yZ0lkfS8ke2ZpbGVOYW1lfWA7XG5cbiAgICAvLyBVcGxvYWQgZmlsZSB0byBTdXBhYmFzZSBTdG9yYWdlXG4gICAgY29uc3QgeyBlcnJvcjogdXBsb2FkRXJyb3IgfSA9IGF3YWl0IGNsaWVudC5zdG9yYWdlXG4gICAgICAuZnJvbShcImxvY2FsX3JlcG9zXCIpXG4gICAgICAudXBsb2FkKGZpbGVQYXRoLCBmaWxlLCB7XG4gICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL3ppcFwiLFxuICAgICAgICB1cHNlcnQ6IGZhbHNlLFxuICAgICAgfSk7XG5cbiAgICBpZiAodXBsb2FkRXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJVcGxvYWQgZXJyb3I6XCIsIHVwbG9hZEVycm9yKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogYEZpbGUgdXBsb2FkIGZhaWxlZDogJHt1cGxvYWRFcnJvci5tZXNzYWdlfWAsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEdldCB0aGUgcHVibGljIFVSTCBmb3IgdGhlIHVwbG9hZGVkIGZpbGVcbiAgICBjb25zdCB7IGRhdGE6IHVybERhdGEgfSA9IGNsaWVudC5zdG9yYWdlXG4gICAgICAuZnJvbShcImxvY2FsX3JlcG9zXCIpXG4gICAgICAuZ2V0UHVibGljVXJsKGZpbGVQYXRoKTtcblxuICAgIC8vIENyZWF0ZSByZXBvc2l0b3J5IHJlY29yZCBpbiBkYXRhYmFzZVxuICAgIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3I6IHJlcG9FcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgICAgLmluc2VydCh7XG4gICAgICAgIG5hbWU6IG5hbWUudHJpbSgpLFxuICAgICAgICBwcm92aWRlcjogXCJsb2NhbFwiLFxuICAgICAgICByZXBvX3VybDogbnVsbCxcbiAgICAgICAgb2JqZWN0X3VybDogdXJsRGF0YS5wdWJsaWNVcmwsXG4gICAgICAgIG9yZ2FuaXphdGlvbl9pZDogb3JnSWQsXG4gICAgICAgIGluZGV4ZWRfYnk6IHVzZXIuaWQsXG4gICAgICAgIGluZGV4X3N0YXR1czogXCJub3QgaW5kZXhlZFwiLFxuICAgICAgfSlcbiAgICAgIC5zZWxlY3QoKVxuICAgICAgLnNpbmdsZSgpO1xuXG4gICAgaWYgKHJlcG9FcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIlJlcG9zaXRvcnkgY3JlYXRpb24gZXJyb3I6XCIsIHJlcG9FcnJvcik7XG4gICAgICAvLyBBdHRlbXB0IHRvIGNsZWFuIHVwIHVwbG9hZGVkIGZpbGVcbiAgICAgIGF3YWl0IGNsaWVudC5zdG9yYWdlLmZyb20oXCJsb2NhbF9yZXBvc1wiKS5yZW1vdmUoW2ZpbGVQYXRoXSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IGBSZXBvc2l0b3J5IGNyZWF0aW9uIGZhaWxlZDogJHtyZXBvRXJyb3IubWVzc2FnZX1gLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXBvIGFzIFJlcG8gfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiVW5leHBlY3RlZCBlcnJvcjpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yOlxuICAgICAgICBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZFwiLFxuICAgIH07XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUmVwb3NpdG9yeSBNYW5hZ2VtZW50IFNlcnZpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXBvV2l0aFN0YXR1cyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFyZXBvKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlJlcG9zaXRvcnkgbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlcG8gYXMgUmVwbyB9O1xufVxuXG50eXBlIFVwZGF0ZURhdGEgPSB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHJlcG9fdXJsPzogc3RyaW5nO1xuICBvYmplY3RfdXJsPzogc3RyaW5nO1xuICBpbmRleF9zdGF0dXM/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUmVwb1NldHRpbmdzKFxuICByZXBvSWQ6IHN0cmluZyxcbiAgc2V0dGluZ3M6IHsgbmFtZT86IHN0cmluZzsgcmVwb191cmw/OiBzdHJpbmc7IGZpbGU/OiBGaWxlIH0sXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIC8vIEdldCB0aGUgY3VycmVudCByZXBvIHRvIGNoZWNrIGl0cyBwcm92aWRlciB0eXBlXG4gIGNvbnN0IHsgZGF0YTogY3VycmVudFJlcG8gfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghY3VycmVudFJlcG8pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUmVwb3NpdG9yeSBub3QgZm91bmQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZURhdGE6IFVwZGF0ZURhdGEgPSB7fTtcblxuICAvLyBIYW5kbGUgbmFtZSB1cGRhdGVcbiAgaWYgKHNldHRpbmdzLm5hbWUpIHtcbiAgICB1cGRhdGVEYXRhLm5hbWUgPSBzZXR0aW5ncy5uYW1lO1xuICB9XG5cbiAgLy8gSGFuZGxlIEdpdEh1YiBVUkwgdXBkYXRlXG4gIGlmIChzZXR0aW5ncy5yZXBvX3VybCAmJiBjdXJyZW50UmVwby5wcm92aWRlciA9PT0gXCJnaXRodWJcIikge1xuICAgIGNvbnN0IHsgb3duZXIsIHJlcG8gfSA9IHBhcnNlR2l0SHViVXJsKHNldHRpbmdzLnJlcG9fdXJsKTtcblxuICAgIGlmICghb3duZXIgfHwgIXJlcG8pIHtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJJbnZhbGlkIEdpdEh1YiBVUkwgZm9ybWF0IVwiIH07XG4gICAgfVxuXG4gICAgLy8gVmVyaWZ5IGFjY2VzcyB0byB0aGUgbmV3IHJlcG9cbiAgICBjb25zdCB7IGRhdGE6IGluc3RhbGxhdGlvbiB9ID0gYXdhaXQgY2xpZW50XG4gICAgICAuZnJvbShcImdpdGh1Yl9pbnN0YWxsYXRpb25zXCIpXG4gICAgICAuc2VsZWN0KFwiKlwiKVxuICAgICAgLmVxKFwiaW5zdGFsbGVkX2J5XCIsIHVzZXIuaWQpXG4gICAgICAuc2luZ2xlKCk7XG5cbiAgICBpZiAoIWluc3RhbGxhdGlvbikge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkdpdEh1YiBBcHAgbm90IGluc3RhbGxlZCFcIiB9O1xuICAgIH1cblxuICAgIGNvbnN0IGhhc0FjY2VzcyA9IGF3YWl0IHZlcmlmeUdpdGh1YlJlcG9BY2Nlc3MoXG4gICAgICBpbnN0YWxsYXRpb24uaW5zdGFsbGF0aW9uX2lkLnRvU3RyaW5nKCksXG4gICAgICBvd25lcixcbiAgICAgIHJlcG8sXG4gICAgKTtcblxuICAgIGlmICghaGFzQWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6XG4gICAgICAgICAgXCJDYW5ub3QgYWNjZXNzIHRoaXMgcmVwb3NpdG9yeS4gTWFrZSBzdXJlIHRoZSBHaXRIdWIgQXBwIGlzIGluc3RhbGxlZCBmb3IgdGhpcyByZXBvc2l0b3J5LlwiLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICB1cGRhdGVEYXRhLnJlcG9fdXJsID0gc2V0dGluZ3MucmVwb191cmw7XG4gICAgdXBkYXRlRGF0YS5pbmRleF9zdGF0dXMgPSBcIm5vdCBpbmRleGVkXCI7IC8vIFRyaWdnZXIgcmUtaW5kZXhpbmdcbiAgfVxuXG4gIC8vIEhhbmRsZSBsb2NhbCBmaWxlIHVwbG9hZFxuICBpZiAoc2V0dGluZ3MuZmlsZSAmJiBjdXJyZW50UmVwby5wcm92aWRlciA9PT0gXCJsb2NhbFwiKSB7XG4gICAgY29uc3QgZmlsZSA9IHNldHRpbmdzLmZpbGU7XG4gICAgY29uc3QgZmlsZUV4dCA9IGZpbGUubmFtZS5zcGxpdChcIi5cIikucG9wKCk7XG5cbiAgICBpZiAoZmlsZUV4dCAhPT0gXCJ6aXBcIikge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIk9ubHkgLnppcCBmaWxlcyBhcmUgYWxsb3dlZCFcIiB9O1xuICAgIH1cblxuICAgIC8vIFVwbG9hZCB0byBTdXBhYmFzZSBTdG9yYWdlXG4gICAgY29uc3QgZmlsZU5hbWUgPSBgJHtyZXBvSWR9LSR7RGF0ZS5ub3coKX0uemlwYDtcbiAgICBjb25zdCB7IGRhdGE6IHVwbG9hZERhdGEsIGVycm9yOiB1cGxvYWRFcnJvciB9ID0gYXdhaXQgY2xpZW50LnN0b3JhZ2VcbiAgICAgIC5mcm9tKFwibG9jYWxfcmVwb3NcIilcbiAgICAgIC51cGxvYWQoZmlsZU5hbWUsIGZpbGUpO1xuXG4gICAgaWYgKHVwbG9hZEVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKHVwbG9hZEVycm9yKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gdXBsb2FkIGZpbGUhXCIgfTtcbiAgICB9XG5cbiAgICAvLyBHZXQgcHVibGljIFVSTFxuICAgIGNvbnN0IHsgZGF0YTogdXJsRGF0YSB9ID0gY2xpZW50LnN0b3JhZ2VcbiAgICAgIC5mcm9tKFwibG9jYWxfcmVwb3NcIilcbiAgICAgIC5nZXRQdWJsaWNVcmwoZmlsZU5hbWUpO1xuXG4gICAgdXBkYXRlRGF0YS5vYmplY3RfdXJsID0gdXJsRGF0YS5wdWJsaWNVcmw7XG4gICAgdXBkYXRlRGF0YS5pbmRleF9zdGF0dXMgPSBcInBlbmRpbmdcIjsgLy8gVHJpZ2dlciByZS1pbmRleGluZ1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSByZXBvc2l0b3J5XG4gIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnVwZGF0ZSh1cGRhdGVEYXRhKVxuICAgIC5lcShcImlkXCIsIHJlcG9JZClcbiAgICAuc2VsZWN0KClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXBvIGFzIFJlcG8gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVJlcG8oXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8eyBvcmdhbml6YXRpb25JZDogc3RyaW5nIH0+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gRmV0Y2ggdGhlIG9yZ2FuaXphdGlvbl9pZCBiZWZvcmUgZGVsZXRpbmdcbiAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvcjogcmVwb0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgIC5zZWxlY3QoXCJvcmdhbml6YXRpb25faWRcIilcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChyZXBvRXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKHJlcG9FcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiByZXBvRXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFyZXBvKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlJlcG9zaXRvcnkgbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IGNsaWVudC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpLmRlbGV0ZSgpLmVxKFwiaWRcIiwgcmVwb0lkKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHsgb3JnYW5pemF0aW9uSWQ6IHJlcG8ub3JnYW5pemF0aW9uX2lkIH0gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRyaWdnZXJSZWluZGV4KFxuICByZXBvSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PHZvaWQ+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSBpbmRleF9zdGF0dXMgdG8gJ3BlbmRpbmcnIHRvIHRyaWdnZXIgcmVpbmRleGluZ1xuICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgIC51cGRhdGUoeyBpbmRleF9zdGF0dXM6IFwicGVuZGluZ1wiIH0pXG4gICAgLmVxKFwiaWRcIiwgcmVwb0lkKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIC8vIFRPRE86IFRyaWdnZXIgYWN0dWFsIGluZGV4aW5nIGpvYi93ZWJob29rL3F1ZXVlIGhlcmVcbiAgLy8gVGhpcyBjb3VsZCBiZSBhbiBBUEkgY2FsbCB0byB5b3VyIGluZGV4aW5nIHNlcnZpY2VcblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1bmRlZmluZWQgfTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRG9jdW1lbnRhdGlvbiBTZXJ2aWNlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jdW1lbnRhdGlvbihcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2N1bWVudGF0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogZG9jdW1lbnRhdGlvbiwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFkb2N1bWVudGF0aW9uKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkRvY3VtZW50YXRpb24gbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGRvY3VtZW50YXRpb24gYXMgRG9jdW1lbnRhdGlvbiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jUGFnZXMoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jUGFnZVtdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIC8vIEdldCB0aGUgbGF0ZXN0IGRvY3VtZW50YXRpb24gdmVyc2lvbiBmb3IgdGhpcyByZXBvXG4gIGNvbnN0IHsgZGF0YTogZG9jdW1lbnRhdGlvbiwgZXJyb3I6IGRvY0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwiaWRcIilcbiAgICAuZXEoXCJyZXBvX2lkXCIsIHJlcG9JZClcbiAgICAub3JkZXIoXCJ2ZXJzaW9uXCIsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxuICAgIC5saW1pdCgxKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZG9jRXJyb3IgfHwgIWRvY3VtZW50YXRpb24pIHtcbiAgICBjb25zb2xlLmVycm9yKGRvY0Vycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRG9jdW1lbnRhdGlvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdlcywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicGFnZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImRvY3VtZW50YXRpb25faWRcIiwgZG9jdW1lbnRhdGlvbi5pZClcbiAgICAub3JkZXIoXCJvcmRlcl9pbmRleFwiLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChwYWdlcyA/PyBbXSkgYXMgRG9jUGFnZVtdIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2NQYWdlQnlJZChcbiAgcGFnZUlkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2NQYWdlPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcGFnZSwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jX3BhZ2VzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpZFwiLCBwYWdlSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFwYWdlKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlBhZ2Ugbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHBhZ2UgYXMgRG9jUGFnZSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jUGFnZXNIaWVyYXJjaGljYWwoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jUGFnZVtdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIC8vIEZpcnN0IGdldCB0aGUgZG9jdW1lbnRhdGlvbiBJRCBmb3IgdGhpcyByZXBvXG4gIGNvbnN0IHsgZGF0YTogZG9jdW1lbnRhdGlvbiwgZXJyb3I6IGRvY0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwiaWRcIilcbiAgICAuZXEoXCJyZXBvX2lkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGRvY0Vycm9yIHx8ICFkb2N1bWVudGF0aW9uKSB7XG4gICAgY29uc29sZS5lcnJvcihkb2NFcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkRvY3VtZW50YXRpb24gbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcGFnZXMsIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY19wYWdlc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiZG9jdW1lbnRhdGlvbl9pZFwiLCBkb2N1bWVudGF0aW9uLmlkKVxuICAgIC5vcmRlcihcIm9yZGVyX2luZGV4XCIsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgLy8gUGFnZXMgYXJlIGFscmVhZHkgc29ydGVkIGJ5IG9yZGVyX2luZGV4XG4gIC8vIFRoZSBwYXJlbnRfcGFnZV9pZCBmaWVsZCBtYWludGFpbnMgdGhlIGhpZXJhcmNoeVxuICAvLyBGcm9udGVuZCBjYW4gdXNlIHRoaXMgdG8gcmVuZGVyIHRoZSB0cmVlIHN0cnVjdHVyZVxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiAocGFnZXMgPz8gW10pIGFzIERvY1BhZ2VbXSB9O1xufVxuXG4vKipcbiAqIEdldCBhbGwgZG9jdW1lbnRhdGlvbiB2ZXJzaW9ucyBmb3IgYSByZXBvc2l0b3J5XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2N1bWVudGF0aW9uVmVyc2lvbnMoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jdW1lbnRhdGlvbltdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogdmVyc2lvbnMsIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5vcmRlcihcInZlcnNpb25cIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKHZlcnNpb25zID8/IFtdKSBhcyBEb2N1bWVudGF0aW9uW10gfTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGxhdGVzdCBjb21wbGV0ZWQgZG9jdW1lbnRhdGlvbiB2ZXJzaW9uIGZvciBhIHJlcG9zaXRvcnlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExhdGVzdERvY3VtZW50YXRpb24oXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jdW1lbnRhdGlvbj4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGRvY3VtZW50YXRpb24sIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5vcmRlcihcInZlcnNpb25cIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXG4gICAgLmxpbWl0KDEpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghZG9jdW1lbnRhdGlvbikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJEb2N1bWVudGF0aW9uIG5vdCBmb3VuZFwiIH07XG4gIH1cblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGRvY3VtZW50YXRpb24gYXMgRG9jdW1lbnRhdGlvbiB9O1xufVxuXG4vKipcbiAqIEdldCBkb2N1bWVudGF0aW9uIHBhZ2VzIGZvciBhIHNwZWNpZmljIHZlcnNpb25cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERvY1BhZ2VzRm9yVmVyc2lvbihcbiAgcmVwb0lkOiBzdHJpbmcsXG4gIHZlcnNpb246IG51bWJlcixcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PERvY1BhZ2VbXT4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICAvLyBHZXQgdGhlIGRvY3VtZW50YXRpb24gcmVjb3JkIGZvciB0aGlzIHZlcnNpb25cbiAgY29uc3QgeyBkYXRhOiBkb2N1bWVudGF0aW9uLCBlcnJvcjogZG9jRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCJpZFwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5lcShcInZlcnNpb25cIiwgdmVyc2lvbilcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGRvY0Vycm9yIHx8ICFkb2N1bWVudGF0aW9uKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkRvY3VtZW50YXRpb24gdmVyc2lvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdlcywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicGFnZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImRvY3VtZW50YXRpb25faWRcIiwgZG9jdW1lbnRhdGlvbi5pZClcbiAgICAub3JkZXIoXCJvcmRlcl9pbmRleFwiLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChwYWdlcyA/PyBbXSkgYXMgRG9jUGFnZVtdIH07XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENvbnZlcnNhdGlvbiBTZXJ2aWNlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29udmVyc2F0aW9ucyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4gIGxpbWl0OiBudW1iZXIgPSAyMCxcbiAgdmVyc2lvbjogbnVtYmVyIHwgbnVsbCA9IG51bGwsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxDb252ZXJzYXRpb25bXT4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBsZXQgcXVlcnkgPSBjbGllbnRcbiAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlci5pZCk7XG5cbiAgLy8gRmlsdGVyIGJ5IHZlcnNpb24gaWYgc3BlY2lmaWVkXG4gIGlmICh2ZXJzaW9uICE9PSBudWxsICYmIHZlcnNpb24gIT09IHVuZGVmaW5lZCkge1xuICAgIHF1ZXJ5ID0gcXVlcnkuZXEoXCJyZXBvX3ZlcnNpb25cIiwgdmVyc2lvbik7XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGNvbnZlcnNhdGlvbnMsIGVycm9yIH0gPSBhd2FpdCBxdWVyeVxuICAgIC5vcmRlcihcInVwZGF0ZWRfYXRcIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXG4gICAgLmxpbWl0KGxpbWl0KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChjb252ZXJzYXRpb25zID8/IFtdKSBhcyBDb252ZXJzYXRpb25bXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29udmVyc2F0aW9uQnlJZChcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbj4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGNvbnZlcnNhdGlvbiwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiaWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIGlmICghY29udmVyc2F0aW9uKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkNvbnZlcnNhdGlvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY29udmVyc2F0aW9uIGFzIENvbnZlcnNhdGlvbiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ29udmVyc2F0aW9uKFxuICByZXBvSWQ6IHN0cmluZyxcbiAgdGl0bGU/OiBzdHJpbmcsXG4gIHZlcnNpb24/OiBudW1iZXIgfCBudWxsLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29udmVyc2F0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogY29udmVyc2F0aW9uLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLmluc2VydCh7XG4gICAgICByZXBvX2lkOiByZXBvSWQsXG4gICAgICB1c2VyX2lkOiB1c2VyLmlkLFxuICAgICAgdGl0bGU6IHRpdGxlIHx8IFwiTmV3IENvbnZlcnNhdGlvblwiLFxuICAgICAgcmVwb192ZXJzaW9uOiB2ZXJzaW9uID8/IG51bGwsXG4gICAgfSlcbiAgICAuc2VsZWN0KClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjb252ZXJzYXRpb24gYXMgQ29udmVyc2F0aW9uIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDb252ZXJzYXRpb24oXG4gIGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDx2b2lkPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgIC5kZWxldGUoKVxuICAgIC5lcShcImlkXCIsIGNvbnZlcnNhdGlvbklkKVxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlci5pZCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1bmRlZmluZWQgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbmFtZUNvbnZlcnNhdGlvbihcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbiAgbmV3VGl0bGU6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbj4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGNvbnZlcnNhdGlvbiwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgIC51cGRhdGUoeyB0aXRsZTogbmV3VGl0bGUgfSlcbiAgICAuZXEoXCJpZFwiLCBjb252ZXJzYXRpb25JZClcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY29udmVyc2F0aW9uIGFzIENvbnZlcnNhdGlvbiB9O1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNZXNzYWdlIFNlcnZpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb252ZXJzYXRpb25NZXNzYWdlcyhcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbk1lc3NhZ2VbXT4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IG1lc3NhZ2VzLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJtZXNzYWdlc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiY29udmVyc2F0aW9uX2lkXCIsIGNvbnZlcnNhdGlvbklkKVxuICAgIC5vcmRlcihcImNyZWF0ZWRfYXRcIiwgeyBhc2NlbmRpbmc6IHRydWUgfSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiAobWVzc2FnZXMgPz8gW10pIGFzIENvbnZlcnNhdGlvbk1lc3NhZ2VbXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTWVzc2FnZShcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbiAgcm9sZTogXCJ1c2VyXCIgfCBcImFzc2lzdGFudFwiLFxuICBjb250ZW50OiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxDb252ZXJzYXRpb25NZXNzYWdlPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogbWVzc2FnZSwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwibWVzc2FnZXNcIilcbiAgICAuaW5zZXJ0KHtcbiAgICAgIGNvbnZlcnNhdGlvbl9pZDogY29udmVyc2F0aW9uSWQsXG4gICAgICByb2xlLFxuICAgICAgY29udGVudCxcbiAgICB9KVxuICAgIC5zZWxlY3QoKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSB0aGUgY29udmVyc2F0aW9uJ3MgdXBkYXRlZF9hdCB0aW1lc3RhbXBcbiAgYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLnVwZGF0ZSh7IHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSB9KVxuICAgIC5lcShcImlkXCIsIGNvbnZlcnNhdGlvbklkKTtcblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBtZXNzYWdlIGFzIENvbnZlcnNhdGlvbk1lc3NhZ2UgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVDb2RlU25pcHBldHMoXG4gIGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsXG4gIG1lc3NhZ2VJZDogc3RyaW5nLFxuICBzbmlwcGV0czogQXJyYXk8eyBmaWxlOiBzdHJpbmc7IGNvZGU6IHN0cmluZyB9Pixcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvZGVTbmlwcGV0W10+PiB7XG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qgc25pcHBldHNUb0luc2VydCA9IHNuaXBwZXRzLm1hcCgoc25pcHBldCkgPT4gKHtcbiAgICBjb252ZXJzYXRpb25faWQ6IGNvbnZlcnNhdGlvbklkLFxuICAgIG1lc3NhZ2VfaWQ6IG1lc3NhZ2VJZCxcbiAgICBmaWxlX3BhdGg6IHNuaXBwZXQuZmlsZSxcbiAgICBjb2RlX2NvbnRlbnQ6IHNuaXBwZXQuY29kZSxcbiAgICBsYW5ndWFnZTogc25pcHBldC5maWxlLnNwbGl0KFwiLlwiKS5wb3AoKSB8fCBudWxsLFxuICB9KSk7XG5cbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbShcImNvZGVfc25pcHBldHNcIilcbiAgICAuaW5zZXJ0KHNuaXBwZXRzVG9JbnNlcnQpXG4gICAgLnNlbGVjdCgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogZGF0YSBhcyBDb2RlU25pcHBldFtdIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb2RlU25pcHBldHNGb3JDb252ZXJzYXRpb24oXG4gIGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxDb2RlU25pcHBldFtdPj4ge1xuICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oXCJjb2RlX3NuaXBwZXRzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJjb252ZXJzYXRpb25faWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgLm9yZGVyKFwiY3JlYXRlZF9hdFwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBkYXRhIGFzIENvZGVTbmlwcGV0W10gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNvZGVTbmlwcGV0KFxuICBzbmlwcGV0SWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PG51bGw+PiB7XG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbShcImNvZGVfc25pcHBldHNcIilcbiAgICAuZGVsZXRlKClcbiAgICAuZXEoXCJpZFwiLCBzbmlwcGV0SWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogbnVsbCB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5kZXhSZXBvc2l0b3J5KFxuICByZXBvSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PHZvaWQ+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBpbnN0YWxsYXRpb24sIGVycm9yOiBpbnN0YWxsYXRpb25FcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJnaXRodWJfaW5zdGFsbGF0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiaW5zdGFsbGVkX2J5XCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghaW5zdGFsbGF0aW9uIHx8IGluc3RhbGxhdGlvbkVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkdpdGh1YiBBcHAgSW5zdGFsbGF0aW9uIG5vdCBmb3VuZCFcIiB9O1xuICB9XG5cbiAgLy9mZXRjaCByZXBvXG5cbiAgY29uc3QgcmVwb1Jlc3VsdCA9IGF3YWl0IGdldFJlcG9XaXRoU3RhdHVzKHJlcG9JZCk7XG5cbiAgaWYgKCFyZXBvUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHJlcG9SZXN1bHQuZXJyb3IgfTtcbiAgfVxuXG4gIGNvbnN0IHJlcG9VcmwgPSByZXBvUmVzdWx0LmRhdGEucmVwb191cmw7XG4gIGNvbnN0IGluc3RhbGxhdGlvbklkID0gaW5zdGFsbGF0aW9uLmluc3RhbGxhdGlvbl9pZDtcblxuICAvLyBHZXQgdGhlIGxhdGVzdCB2ZXJzaW9uIG51bWJlciBmb3IgdGhpcyByZXBvXG4gIGNvbnN0IHsgZGF0YTogbGF0ZXN0RG9jIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwidmVyc2lvblwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5vcmRlcihcInZlcnNpb25cIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXG4gICAgLmxpbWl0KDEpXG4gICAgLnNpbmdsZSgpO1xuXG4gIC8vIEluY3JlbWVudCB2ZXJzaW9uIChzdGFydCBhdCAxIGlmIG5vIHByZXZpb3VzIHZlcnNpb25zKVxuICBjb25zdCBuZXh0VmVyc2lvbiA9IChsYXRlc3REb2M/LnZlcnNpb24gPz8gMCkgKyAxO1xuXG4gIC8vbWFyayB0aGUgcmVwb3NpdG9yeSBhcyBpbmRleGluZyBpbiBzdXBhYmFzZSBmaXJzdFxuICBjb25zdCB7IGVycm9yOiB1cGRhdGVFcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAudXBkYXRlKHsgaW5kZXhfc3RhdHVzOiBcImluZGV4aW5nXCIgfSlcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpO1xuXG4gIGlmICh1cGRhdGVFcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IodXBkYXRlRXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogdXBkYXRlRXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgLy8gQ2FsbCB0aGUgYmFja2VuZCB0byBzdGFydCBpbmRleGluZyAoZmlyZS1hbmQtZm9yZ2V0KVxuICAvLyBEb24ndCBhd2FpdCBvciB0aHJvdyBlcnJvcnMgc2luY2UgdGhpcyBpcyBhIGxvbmctcnVubmluZyBvcGVyYXRpb25cbiAgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L3JlcG9zL2luZGV4YCwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICByZXBvX3VybDogcmVwb1VybCxcbiAgICAgIHJlcG9faWQ6IHJlcG9JZCxcbiAgICAgIHVzZXJfaWQ6IHVzZXIuaWQsXG4gICAgICBpbnN0YWxsYXRpb25faWQ6IGluc3RhbGxhdGlvbklkLFxuICAgICAgYnJhbmNoOiBcIm1haW5cIixcbiAgICAgIHZlcnNpb246IG5leHRWZXJzaW9uLFxuICAgIH0pLFxuICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAvLyBMb2cgdGhlIGVycm9yIGJ1dCBkb24ndCBmYWlsIHRoZSByZXF1ZXN0XG4gICAgY29uc29sZS5lcnJvcihcIkluZGV4aW5nIHJlcXVlc3QgZmFpbGVkOlwiLCBlcnJvcik7XG4gICAgLy8gVGhlIGJhY2tlbmQgc2hvdWxkIGhhbmRsZSB1cGRhdGluZyB0aGUgcmVwbyBzdGF0dXMgb24gZmFpbHVyZVxuICB9KTtcblxuICAvLyBSZXR1cm4gc3VjY2VzcyBpbW1lZGlhdGVseSAtIHRoZSBpbmRleGluZyB3aWxsIGhhcHBlbiBpbiB0aGUgYmFja2dyb3VuZFxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1bmRlZmluZWQgfTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiMFNBd1hzQiJ9
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$87d34b__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/services/data:87d34b [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$95d0cb__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/services/data:95d0cb [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$e115eb__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/services/data:e115eb [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$1224e1__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/services/data:1224e1 [app-ssr] (ecmascript) <text/javascript>");
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
            const repoResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$1224e1__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getRepoWithStatus"])(repoId);
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$95d0cb__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getDocumentationVersions"])(repoId);
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$e115eb__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getDocPagesForVersion"])(repoId, selectedVersion);
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$87d34b__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["indexRepository"])(repoId);
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$87d34b__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["indexRepository"])(repoId);
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/react-markdown/lib/index.js [app-ssr] (ecmascript) <export Markdown as default>");
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
                    lineNumber: 23,
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
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        "Back to documentation"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/chat/message-bubble.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/chat/message-bubble.tsx",
            lineNumber: 22,
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
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__["default"], {
                            components: {
                                h1: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-bold text-gray-800 dark:text-white mb-4 mt-2",
                                        ...props
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/chat/message-bubble.tsx",
                                        lineNumber: 43,
                                        columnNumber: 19
                                    }, void 0),
                                h2: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-semibold text-gray-800 dark:text-white mb-3 mt-6",
                                        ...props
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/chat/message-bubble.tsx",
                                        lineNumber: 49,
                                        columnNumber: 19
                                    }, void 0),
                                h3: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-gray-800 dark:text-white mb-2 mt-4",
                                        ...props
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/chat/message-bubble.tsx",
                                        lineNumber: 55,
                                        columnNumber: 19
                                    }, void 0),
                                h4: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-base font-semibold text-gray-800 dark:text-white mb-2 mt-3",
                                        ...props
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/chat/message-bubble.tsx",
                                        lineNumber: 61,
                                        columnNumber: 19
                                    }, void 0),
                                h5: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                        className: "text-sm font-semibold text-gray-800 dark:text-white mb-1 mt-2",
                                        ...props
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/chat/message-bubble.tsx",
                                        lineNumber: 67,
                                        columnNumber: 19
                                    }, void 0),
                                h6: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                        className: "text-xs font-semibold text-gray-800 dark:text-white mb-1 mt-2",
                                        ...props
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/chat/message-bubble.tsx",
                                        lineNumber: 73,
                                        columnNumber: 19
                                    }, void 0),
                                p: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-4",
                                        ...props
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/chat/message-bubble.tsx",
                                        lineNumber: 79,
                                        columnNumber: 19
                                    }, void 0),
                                ul: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-1",
                                        ...props
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/chat/message-bubble.tsx",
                                        lineNumber: 85,
                                        columnNumber: 19
                                    }, void 0),
                                ol: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                        className: "list-decimal list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-1",
                                        ...props
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/chat/message-bubble.tsx",
                                        lineNumber: 91,
                                        columnNumber: 19
                                    }, void 0),
                                li: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "text-gray-700 dark:text-gray-300",
                                        ...props
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/chat/message-bubble.tsx",
                                        lineNumber: 97,
                                        columnNumber: 19
                                    }, void 0),
                                a: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "text-teal-400 hover:text-teal-300 hover:underline",
                                        ...props
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/chat/message-bubble.tsx",
                                        lineNumber: 100,
                                        columnNumber: 19
                                    }, void 0),
                                code: ({ node, className, children, ...props })=>{
                                    const isInline = !className?.includes("language-");
                                    const match = /language-(\w+)/.exec(className || "");
                                    const language = match ? match[1] : "text";
                                    return isInline ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        className: "bg-gray-800 text-teal-400 px-1.5 py-0.5 rounded text-sm font-mono",
                                        ...props,
                                        children: children
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/chat/message-bubble.tsx",
                                        lineNumber: 111,
                                        columnNumber: 21
                                    }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$prism$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Prism$3e$__["Prism"], {
                                        language: language,
                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$styles$2f$prism$2f$vsc$2d$dark$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__vscDarkPlus$3e$__["vscDarkPlus"],
                                        showLineNumbers: true,
                                        customStyle: {
                                            background: "#1e1e1e",
                                            padding: "1rem",
                                            fontSize: "12px",
                                            borderRadius: "0.375rem",
                                            marginBottom: "1rem"
                                        },
                                        children: String(children).replace(/\n$/, "")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/chat/message-bubble.tsx",
                                        lineNumber: 118,
                                        columnNumber: 21
                                    }, void 0);
                                },
                                blockquote: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                        className: "border-l-4 border-teal-500 pl-4 italic text-gray-400 my-4",
                                        ...props
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/chat/message-bubble.tsx",
                                        lineNumber: 135,
                                        columnNumber: 19
                                    }, void 0),
                                pre: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                        className: "mb-4",
                                        ...props
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/chat/message-bubble.tsx",
                                        lineNumber: 141,
                                        columnNumber: 19
                                    }, void 0)
                            },
                            children: text
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/chat/message-bubble.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/chat/message-bubble.tsx",
                        lineNumber: 39,
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
                                    lineNumber: 150,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/chat/message-bubble.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "p-2 hover:bg-gray-800 rounded-md transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                    size: 16,
                                    className: "text-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/chat/message-bubble.tsx",
                                    lineNumber: 153,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/chat/message-bubble.tsx",
                                lineNumber: 152,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/chat/message-bubble.tsx",
                        lineNumber: 148,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/chat/message-bubble.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/chat/message-bubble.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/chat/message-bubble.tsx",
        lineNumber: 36,
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
"[project]/src/lib/services/data:116823 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40352f531d61849c10df43580aa6262b1af019a742":"getConversationMessages"},"src/lib/services/repoService.ts",""] */ __turbopack_context__.s([
    "getConversationMessages",
    ()=>getConversationMessages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var getConversationMessages = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40352f531d61849c10df43580aa6262b1af019a742", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getConversationMessages"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcmVwb1NlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAL3V0aWxzL3N1cGFiYXNlL3NlcnZlclwiO1xuaW1wb3J0IHtcbiAgUmVwbyxcbiAgRG9jdW1lbnRhdGlvbixcbiAgRG9jUGFnZSxcbiAgQ29udmVyc2F0aW9uLFxuICBDb252ZXJzYXRpb25NZXNzYWdlLFxuICBDb2RlU25pcHBldCxcbn0gZnJvbSBcIkAvYXBwL3R5cGVzL3N1cGFiYXNlXCI7XG5pbXBvcnQgeyBBY3Rpb25SZXN1bHQgfSBmcm9tIFwiQC9hcHAvdHlwZXMvYWN0aW9uXCI7XG5pbXBvcnQge1xuICB2ZXJpZnlHaXRodWJSZXBvQWNjZXNzLFxuICB2ZXJpZnlHaXRMYWJSZXBvQWNjZXNzLFxufSBmcm9tIFwiLi9naXRQcm92aWRlclNlcnZpY2VcIjtcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHBhcnNlIEdpdEh1YiBVUkxzXG5mdW5jdGlvbiBwYXJzZUdpdEh1YlVybCh1cmw6IHN0cmluZyk6IHsgb3duZXI6IHN0cmluZzsgcmVwbzogc3RyaW5nIH0ge1xuICB0cnkge1xuICAgIC8vIEhhbmRsZSBtdWx0aXBsZSBmb3JtYXRzOlxuICAgIC8vIC0gaHR0cHM6Ly9naXRodWIuY29tL293bmVyL3JlcG9cbiAgICAvLyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9vd25lci9yZXBvLmdpdFxuICAgIC8vIC0gZ2l0QGdpdGh1Yi5jb206b3duZXIvcmVwby5naXRcblxuICAgIHVybCA9IHVybC50cmltKCkucmVwbGFjZSgvXFwuZ2l0JC8sIFwiXCIpO1xuXG4gICAgaWYgKHVybC5pbmNsdWRlcyhcImdpdGh1Yi5jb20vXCIpKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IHVybC5zcGxpdChcImdpdGh1Yi5jb20vXCIpWzFdLnNwbGl0KFwiL1wiKTtcbiAgICAgIHJldHVybiB7IG93bmVyOiBwYXJ0c1swXSwgcmVwbzogcGFydHNbMV0gfTtcbiAgICB9XG5cbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoXCJnaXRAZ2l0aHViLmNvbTpcIikpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gdXJsLnJlcGxhY2UoXCJnaXRAZ2l0aHViLmNvbTpcIiwgXCJcIikuc3BsaXQoXCIvXCIpO1xuICAgICAgcmV0dXJuIHsgb3duZXI6IHBhcnRzWzBdLCByZXBvOiBwYXJ0c1sxXSB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IG93bmVyOiBcIlwiLCByZXBvOiBcIlwiIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgb3duZXI6IFwiXCIsIHJlcG86IFwiXCIgfTtcbiAgfVxufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gcGFyc2UgR2l0TGFiIFVSTHNcbmZ1bmN0aW9uIHBhcnNlR2l0TGFiVXJsKHVybDogc3RyaW5nKTogeyBvd25lcjogc3RyaW5nOyByZXBvOiBzdHJpbmcgfSB7XG4gIHRyeSB7XG4gICAgLy8gSGFuZGxlIG11bHRpcGxlIGZvcm1hdHM6XG4gICAgLy8gLSBodHRwczovL2dpdGxhYi5jb20vb3duZXIvcmVwb1xuICAgIC8vIC0gaHR0cHM6Ly9naXRsYWIuY29tL293bmVyL3N1Ymdyb3VwL3JlcG9cbiAgICAvLyAtIGh0dHBzOi8vZ2l0bGFiLmNvbS9vd25lci9yZXBvLmdpdFxuICAgIC8vIC0gZ2l0QGdpdGxhYi5jb206b3duZXIvcmVwby5naXRcbiAgICAvLyAtIFNlbGYtaG9zdGVkOiBodHRwczovL2dpdGxhYi5leGFtcGxlLmNvbS9vd25lci9yZXBvXG5cbiAgICB1cmwgPSB1cmwudHJpbSgpLnJlcGxhY2UoL1xcLmdpdCQvLCBcIlwiKTtcblxuICAgIC8vIEhhbmRsZSBIVFRQUyBVUkxzIChnaXRsYWIuY29tIG9yIHNlbGYtaG9zdGVkKVxuICAgIGlmICh1cmwuaW5jbHVkZXMoXCJnaXRsYWIuY29tL1wiKSB8fCAvZ2l0bGFiXFwuW14vXStcXC8vLnRlc3QodXJsKSkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgcGF0aCBhZnRlciB0aGUgZG9tYWluXG4gICAgICBjb25zdCBtYXRjaCA9IHVybC5tYXRjaCgvZ2l0bGFiW14vXSpcXC8oLispLyk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgY29uc3QgcGF0aFBhcnRzID0gbWF0Y2hbMV0uc3BsaXQoXCIvXCIpO1xuICAgICAgICAvLyBHaXRMYWIgc3VwcG9ydHMgbmVzdGVkIGdyb3Vwcywgc28gd2UgbmVlZCB0byBoYW5kbGU6XG4gICAgICAgIC8vIC0gb3duZXIvcmVwbyAoMiBwYXJ0cylcbiAgICAgICAgLy8gLSBvd25lci9zdWJncm91cC9yZXBvICgzKyBwYXJ0cylcbiAgICAgICAgaWYgKHBhdGhQYXJ0cy5sZW5ndGggPj0gMikge1xuICAgICAgICAgIC8vIFRha2UgZXZlcnl0aGluZyBleGNlcHQgdGhlIGxhc3QgcGFydCBhcyBvd25lci9ncm91cFxuICAgICAgICAgIGNvbnN0IHJlcG8gPSBwYXRoUGFydHNbcGF0aFBhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IG93bmVyID0gcGF0aFBhcnRzLnNsaWNlKDAsIC0xKS5qb2luKFwiL1wiKTtcbiAgICAgICAgICByZXR1cm4geyBvd25lciwgcmVwbyB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIFNTSCBVUkxzXG4gICAgaWYgKHVybC5zdGFydHNXaXRoKFwiZ2l0QGdpdGxhYi5jb206XCIpIHx8IC9naXRAZ2l0bGFiXFwuW146XSs6Ly50ZXN0KHVybCkpIHtcbiAgICAgIGNvbnN0IG1hdGNoID0gdXJsLm1hdGNoKC9naXRAZ2l0bGFiW146XSo6KC4rKS8pO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGNvbnN0IHBhdGhQYXJ0cyA9IG1hdGNoWzFdLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgaWYgKHBhdGhQYXJ0cy5sZW5ndGggPj0gMikge1xuICAgICAgICAgIGNvbnN0IHJlcG8gPSBwYXRoUGFydHNbcGF0aFBhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IG93bmVyID0gcGF0aFBhcnRzLnNsaWNlKDAsIC0xKS5qb2luKFwiL1wiKTtcbiAgICAgICAgICByZXR1cm4geyBvd25lciwgcmVwbyB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgb3duZXI6IFwiXCIsIHJlcG86IFwiXCIgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBvd25lcjogXCJcIiwgcmVwbzogXCJcIiB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXBvc0J5T3JnYW5pemF0aW9uSWQoXG4gIG9yZ2FuaXphdGlvbklkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHVzZXIgPSBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJvcmdhbml6YXRpb25faWRcIiwgb3JnYW5pemF0aW9uSWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKGRhdGEgPz8gW10pIGFzIFJlcG9bXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUmVwb1ZpYUdpdGh1YihcbiAgZm9ybURhdGE6IEZvcm1EYXRhLFxuICBvcmdJZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8UmVwbyB8IHVuZGVmaW5lZD4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IHByb3ZpZGVyID0gZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IHVybCA9IGZvcm1EYXRhLmdldChcImdpdGh1Yi11cmxcIikgYXMgc3RyaW5nO1xuXG4gIGlmICghbmFtZSkge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJOYW1lIGlzIHJlcXVpcmVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGluc3RhbGxhdGlvbiB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJnaXRodWJfaW5zdGFsbGF0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiaW5zdGFsbGVkX2J5XCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghaW5zdGFsbGF0aW9uKSB7XG4gICAgLy8gTm8gR2l0SHViIEFwcCBpbnN0YWxsYXRpb24gLSBwcm9tcHQgdXNlciB0byBpbnN0YWxsXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiSW5zdGFsbGF0aW9uIE5lZWRlZFwiLFxuICAgIH07XG4gIH1cblxuICAvL3BhcnNlIHVybCBmb3Igb3duZXIgYW5kIHJlcG9cbiAgY29uc3QgeyBvd25lciwgcmVwbzogcmVwb05hbWUgfSA9IHBhcnNlR2l0SHViVXJsKHVybCk7XG5cbiAgY29uc3QgaGFzQWNjZXNzID0gYXdhaXQgdmVyaWZ5R2l0aHViUmVwb0FjY2VzcyhcbiAgICBpbnN0YWxsYXRpb24uaW5zdGFsbGF0aW9uX2lkLFxuICAgIG93bmVyLFxuICAgIHJlcG9OYW1lLFxuICApO1xuXG4gIGlmICghaGFzQWNjZXNzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiQWNjZXNzIERlbmllZFwiLFxuICAgIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IHJlcG8sIGVycm9yOiByZXBvRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLmluc2VydCh7XG4gICAgICBuYW1lLFxuICAgICAgcHJvdmlkZXIsXG4gICAgICByZXBvX3VybDogdXJsLFxuICAgICAgb3JnYW5pemF0aW9uX2lkOiBvcmdJZCxcbiAgICAgIGluZGV4ZWRfYnk6IHVzZXIuaWQsXG4gICAgICBpbmRleF9zdGF0dXM6IFwibm90IGluZGV4ZWRcIixcbiAgICB9KVxuICAgIC5zZWxlY3QoKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAocmVwb0Vycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiByZXBvRXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVwbyBhcyBSZXBvIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZXBvVmlhR2l0bGFiKFxuICBmb3JtRGF0YTogRm9ybURhdGEsXG4gIG9yZ0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvIHwgdW5kZWZpbmVkPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgY29uc3QgcHJvdmlkZXIgPSBmb3JtRGF0YS5nZXQoXCJ0eXBlXCIpIGFzIHN0cmluZztcbiAgY29uc3QgdXJsID0gZm9ybURhdGEuZ2V0KFwiZ2l0bGFiLXVybFwiKSBhcyBzdHJpbmc7XG5cbiAgLy8gVmFsaWRhdGUgaW5wdXRzXG4gIGlmICghbmFtZSB8fCBuYW1lLnRyaW0oKSA9PT0gXCJcIikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJSZXBvc2l0b3J5IG5hbWUgaXMgcmVxdWlyZWRcIiB9O1xuICB9XG5cbiAgaWYgKCF1cmwgfHwgdXJsLnRyaW0oKSA9PT0gXCJcIikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJHaXRMYWIgVVJMIGlzIHJlcXVpcmVkXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogaW5zdGFsbGF0aW9uIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImdpdGxhYl9pbnN0YWxsYXRpb25zXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpbnN0YWxsZWRfYnlcIiwgdXNlci5pZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKCFpbnN0YWxsYXRpb24pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiSW5zdGFsbGF0aW9uIE5lZWRlZFwiIH07XG4gIH1cblxuICBjb25zdCB7IG93bmVyLCByZXBvOiByZXBvTmFtZSB9ID0gcGFyc2VHaXRMYWJVcmwodXJsKTtcblxuICAvL3ZlcmlmeSBhY2Nlc3NcbiAgY29uc3QgaGFzQWNjZXNzID0gYXdhaXQgdmVyaWZ5R2l0TGFiUmVwb0FjY2VzcyhcbiAgICBpbnN0YWxsYXRpb24uYWNjZXNzX3Rva2VuLFxuICAgIG93bmVyLFxuICAgIHJlcG9OYW1lLFxuICApO1xuXG4gIGlmICghaGFzQWNjZXNzKSB7XG4gICAgaWYgKGluc3RhbGxhdGlvbi5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogXCJBY2Nlc3MgcmVxdWlyZWQhXCIsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yOiBcIkFjY2VzcyBkZW5pZWQhXCIsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3I6IHJlcG9FcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAuaW5zZXJ0KHtcbiAgICAgIG5hbWUsXG4gICAgICBwcm92aWRlcixcbiAgICAgIHJlcG9fdXJsOiB1cmwsXG4gICAgICBvcmdhbml6YXRpb25faWQ6IG9yZ0lkLFxuICAgICAgaW5kZXhlZF9ieTogdXNlci5pZCxcbiAgICAgIGluZGV4X3N0YXR1czogXCJub3QgaW5kZXhlZFwiLFxuICAgIH0pXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChyZXBvRXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHJlcG9FcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXBvIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZXBvVmlhTG9jYWxGaWxlKFxuICBmb3JtRGF0YTogRm9ybURhdGEsXG4gIG9yZ0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgY29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldChcImZpbGVcIikgYXMgRmlsZTtcblxuICAvLyBWYWxpZGF0ZSBpbnB1dHNcbiAgaWYgKCFuYW1lIHx8IG5hbWUudHJpbSgpID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlJlcG9zaXRvcnkgbmFtZSBpcyByZXF1aXJlZFwiIH07XG4gIH1cblxuICBpZiAoIWZpbGUpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmlsZSBpcyByZXF1aXJlZFwiIH07XG4gIH1cblxuICAvLyBWYWxpZGF0ZSBmaWxlIHR5cGVcbiAgaWYgKCFmaWxlLm5hbWUuZW5kc1dpdGgoXCIuemlwXCIpKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIk9ubHkgLnppcCBmaWxlcyBhcmUgYWxsb3dlZFwiIH07XG4gIH1cblxuICAvLyBWYWxpZGF0ZSBmaWxlIHNpemUgKG1heCAxMDBNQilcbiAgY29uc3QgbWF4U2l6ZSA9IDEwMCAqIDEwMjQgKiAxMDI0OyAvLyAxMDBNQiBpbiBieXRlc1xuICBpZiAoZmlsZS5zaXplID4gbWF4U2l6ZSkge1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yOiBcIkZpbGUgc2l6ZSBleGNlZWRzIDEwME1CIGxpbWl0XCIsXG4gICAgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gR2VuZXJhdGUgYSB1bmlxdWUgZmlsZSBuYW1lIHRvIHByZXZlbnQgY29sbGlzaW9uc1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IERhdGUubm93KCk7XG4gICAgY29uc3Qgc2FuaXRpemVkTmFtZSA9IG5hbWUudHJpbSgpLnJlcGxhY2UoL1teYS16MC05LV9dL2dpLCBcIl9cIik7XG4gICAgY29uc3QgZmlsZU5hbWUgPSBgJHtzYW5pdGl6ZWROYW1lfV8ke3RpbWVzdGFtcH1fJHtmaWxlLm5hbWV9YDtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGAke29yZ0lkfS8ke2ZpbGVOYW1lfWA7XG5cbiAgICAvLyBVcGxvYWQgZmlsZSB0byBTdXBhYmFzZSBTdG9yYWdlXG4gICAgY29uc3QgeyBlcnJvcjogdXBsb2FkRXJyb3IgfSA9IGF3YWl0IGNsaWVudC5zdG9yYWdlXG4gICAgICAuZnJvbShcImxvY2FsX3JlcG9zXCIpXG4gICAgICAudXBsb2FkKGZpbGVQYXRoLCBmaWxlLCB7XG4gICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL3ppcFwiLFxuICAgICAgICB1cHNlcnQ6IGZhbHNlLFxuICAgICAgfSk7XG5cbiAgICBpZiAodXBsb2FkRXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJVcGxvYWQgZXJyb3I6XCIsIHVwbG9hZEVycm9yKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogYEZpbGUgdXBsb2FkIGZhaWxlZDogJHt1cGxvYWRFcnJvci5tZXNzYWdlfWAsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEdldCB0aGUgcHVibGljIFVSTCBmb3IgdGhlIHVwbG9hZGVkIGZpbGVcbiAgICBjb25zdCB7IGRhdGE6IHVybERhdGEgfSA9IGNsaWVudC5zdG9yYWdlXG4gICAgICAuZnJvbShcImxvY2FsX3JlcG9zXCIpXG4gICAgICAuZ2V0UHVibGljVXJsKGZpbGVQYXRoKTtcblxuICAgIC8vIENyZWF0ZSByZXBvc2l0b3J5IHJlY29yZCBpbiBkYXRhYmFzZVxuICAgIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3I6IHJlcG9FcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgICAgLmluc2VydCh7XG4gICAgICAgIG5hbWU6IG5hbWUudHJpbSgpLFxuICAgICAgICBwcm92aWRlcjogXCJsb2NhbFwiLFxuICAgICAgICByZXBvX3VybDogbnVsbCxcbiAgICAgICAgb2JqZWN0X3VybDogdXJsRGF0YS5wdWJsaWNVcmwsXG4gICAgICAgIG9yZ2FuaXphdGlvbl9pZDogb3JnSWQsXG4gICAgICAgIGluZGV4ZWRfYnk6IHVzZXIuaWQsXG4gICAgICAgIGluZGV4X3N0YXR1czogXCJub3QgaW5kZXhlZFwiLFxuICAgICAgfSlcbiAgICAgIC5zZWxlY3QoKVxuICAgICAgLnNpbmdsZSgpO1xuXG4gICAgaWYgKHJlcG9FcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIlJlcG9zaXRvcnkgY3JlYXRpb24gZXJyb3I6XCIsIHJlcG9FcnJvcik7XG4gICAgICAvLyBBdHRlbXB0IHRvIGNsZWFuIHVwIHVwbG9hZGVkIGZpbGVcbiAgICAgIGF3YWl0IGNsaWVudC5zdG9yYWdlLmZyb20oXCJsb2NhbF9yZXBvc1wiKS5yZW1vdmUoW2ZpbGVQYXRoXSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IGBSZXBvc2l0b3J5IGNyZWF0aW9uIGZhaWxlZDogJHtyZXBvRXJyb3IubWVzc2FnZX1gLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXBvIGFzIFJlcG8gfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiVW5leHBlY3RlZCBlcnJvcjpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yOlxuICAgICAgICBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZFwiLFxuICAgIH07XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUmVwb3NpdG9yeSBNYW5hZ2VtZW50IFNlcnZpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXBvV2l0aFN0YXR1cyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFyZXBvKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlJlcG9zaXRvcnkgbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlcG8gYXMgUmVwbyB9O1xufVxuXG50eXBlIFVwZGF0ZURhdGEgPSB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHJlcG9fdXJsPzogc3RyaW5nO1xuICBvYmplY3RfdXJsPzogc3RyaW5nO1xuICBpbmRleF9zdGF0dXM/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUmVwb1NldHRpbmdzKFxuICByZXBvSWQ6IHN0cmluZyxcbiAgc2V0dGluZ3M6IHsgbmFtZT86IHN0cmluZzsgcmVwb191cmw/OiBzdHJpbmc7IGZpbGU/OiBGaWxlIH0sXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIC8vIEdldCB0aGUgY3VycmVudCByZXBvIHRvIGNoZWNrIGl0cyBwcm92aWRlciB0eXBlXG4gIGNvbnN0IHsgZGF0YTogY3VycmVudFJlcG8gfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghY3VycmVudFJlcG8pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUmVwb3NpdG9yeSBub3QgZm91bmQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZURhdGE6IFVwZGF0ZURhdGEgPSB7fTtcblxuICAvLyBIYW5kbGUgbmFtZSB1cGRhdGVcbiAgaWYgKHNldHRpbmdzLm5hbWUpIHtcbiAgICB1cGRhdGVEYXRhLm5hbWUgPSBzZXR0aW5ncy5uYW1lO1xuICB9XG5cbiAgLy8gSGFuZGxlIEdpdEh1YiBVUkwgdXBkYXRlXG4gIGlmIChzZXR0aW5ncy5yZXBvX3VybCAmJiBjdXJyZW50UmVwby5wcm92aWRlciA9PT0gXCJnaXRodWJcIikge1xuICAgIGNvbnN0IHsgb3duZXIsIHJlcG8gfSA9IHBhcnNlR2l0SHViVXJsKHNldHRpbmdzLnJlcG9fdXJsKTtcblxuICAgIGlmICghb3duZXIgfHwgIXJlcG8pIHtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJJbnZhbGlkIEdpdEh1YiBVUkwgZm9ybWF0IVwiIH07XG4gICAgfVxuXG4gICAgLy8gVmVyaWZ5IGFjY2VzcyB0byB0aGUgbmV3IHJlcG9cbiAgICBjb25zdCB7IGRhdGE6IGluc3RhbGxhdGlvbiB9ID0gYXdhaXQgY2xpZW50XG4gICAgICAuZnJvbShcImdpdGh1Yl9pbnN0YWxsYXRpb25zXCIpXG4gICAgICAuc2VsZWN0KFwiKlwiKVxuICAgICAgLmVxKFwiaW5zdGFsbGVkX2J5XCIsIHVzZXIuaWQpXG4gICAgICAuc2luZ2xlKCk7XG5cbiAgICBpZiAoIWluc3RhbGxhdGlvbikge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkdpdEh1YiBBcHAgbm90IGluc3RhbGxlZCFcIiB9O1xuICAgIH1cblxuICAgIGNvbnN0IGhhc0FjY2VzcyA9IGF3YWl0IHZlcmlmeUdpdGh1YlJlcG9BY2Nlc3MoXG4gICAgICBpbnN0YWxsYXRpb24uaW5zdGFsbGF0aW9uX2lkLnRvU3RyaW5nKCksXG4gICAgICBvd25lcixcbiAgICAgIHJlcG8sXG4gICAgKTtcblxuICAgIGlmICghaGFzQWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6XG4gICAgICAgICAgXCJDYW5ub3QgYWNjZXNzIHRoaXMgcmVwb3NpdG9yeS4gTWFrZSBzdXJlIHRoZSBHaXRIdWIgQXBwIGlzIGluc3RhbGxlZCBmb3IgdGhpcyByZXBvc2l0b3J5LlwiLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICB1cGRhdGVEYXRhLnJlcG9fdXJsID0gc2V0dGluZ3MucmVwb191cmw7XG4gICAgdXBkYXRlRGF0YS5pbmRleF9zdGF0dXMgPSBcIm5vdCBpbmRleGVkXCI7IC8vIFRyaWdnZXIgcmUtaW5kZXhpbmdcbiAgfVxuXG4gIC8vIEhhbmRsZSBsb2NhbCBmaWxlIHVwbG9hZFxuICBpZiAoc2V0dGluZ3MuZmlsZSAmJiBjdXJyZW50UmVwby5wcm92aWRlciA9PT0gXCJsb2NhbFwiKSB7XG4gICAgY29uc3QgZmlsZSA9IHNldHRpbmdzLmZpbGU7XG4gICAgY29uc3QgZmlsZUV4dCA9IGZpbGUubmFtZS5zcGxpdChcIi5cIikucG9wKCk7XG5cbiAgICBpZiAoZmlsZUV4dCAhPT0gXCJ6aXBcIikge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIk9ubHkgLnppcCBmaWxlcyBhcmUgYWxsb3dlZCFcIiB9O1xuICAgIH1cblxuICAgIC8vIFVwbG9hZCB0byBTdXBhYmFzZSBTdG9yYWdlXG4gICAgY29uc3QgZmlsZU5hbWUgPSBgJHtyZXBvSWR9LSR7RGF0ZS5ub3coKX0uemlwYDtcbiAgICBjb25zdCB7IGRhdGE6IHVwbG9hZERhdGEsIGVycm9yOiB1cGxvYWRFcnJvciB9ID0gYXdhaXQgY2xpZW50LnN0b3JhZ2VcbiAgICAgIC5mcm9tKFwibG9jYWxfcmVwb3NcIilcbiAgICAgIC51cGxvYWQoZmlsZU5hbWUsIGZpbGUpO1xuXG4gICAgaWYgKHVwbG9hZEVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKHVwbG9hZEVycm9yKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gdXBsb2FkIGZpbGUhXCIgfTtcbiAgICB9XG5cbiAgICAvLyBHZXQgcHVibGljIFVSTFxuICAgIGNvbnN0IHsgZGF0YTogdXJsRGF0YSB9ID0gY2xpZW50LnN0b3JhZ2VcbiAgICAgIC5mcm9tKFwibG9jYWxfcmVwb3NcIilcbiAgICAgIC5nZXRQdWJsaWNVcmwoZmlsZU5hbWUpO1xuXG4gICAgdXBkYXRlRGF0YS5vYmplY3RfdXJsID0gdXJsRGF0YS5wdWJsaWNVcmw7XG4gICAgdXBkYXRlRGF0YS5pbmRleF9zdGF0dXMgPSBcInBlbmRpbmdcIjsgLy8gVHJpZ2dlciByZS1pbmRleGluZ1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSByZXBvc2l0b3J5XG4gIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnVwZGF0ZSh1cGRhdGVEYXRhKVxuICAgIC5lcShcImlkXCIsIHJlcG9JZClcbiAgICAuc2VsZWN0KClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXBvIGFzIFJlcG8gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVJlcG8oXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8eyBvcmdhbml6YXRpb25JZDogc3RyaW5nIH0+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gRmV0Y2ggdGhlIG9yZ2FuaXphdGlvbl9pZCBiZWZvcmUgZGVsZXRpbmdcbiAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvcjogcmVwb0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgIC5zZWxlY3QoXCJvcmdhbml6YXRpb25faWRcIilcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChyZXBvRXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKHJlcG9FcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiByZXBvRXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFyZXBvKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlJlcG9zaXRvcnkgbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IGNsaWVudC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpLmRlbGV0ZSgpLmVxKFwiaWRcIiwgcmVwb0lkKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHsgb3JnYW5pemF0aW9uSWQ6IHJlcG8ub3JnYW5pemF0aW9uX2lkIH0gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRyaWdnZXJSZWluZGV4KFxuICByZXBvSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PHZvaWQ+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSBpbmRleF9zdGF0dXMgdG8gJ3BlbmRpbmcnIHRvIHRyaWdnZXIgcmVpbmRleGluZ1xuICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgIC51cGRhdGUoeyBpbmRleF9zdGF0dXM6IFwicGVuZGluZ1wiIH0pXG4gICAgLmVxKFwiaWRcIiwgcmVwb0lkKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIC8vIFRPRE86IFRyaWdnZXIgYWN0dWFsIGluZGV4aW5nIGpvYi93ZWJob29rL3F1ZXVlIGhlcmVcbiAgLy8gVGhpcyBjb3VsZCBiZSBhbiBBUEkgY2FsbCB0byB5b3VyIGluZGV4aW5nIHNlcnZpY2VcblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1bmRlZmluZWQgfTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRG9jdW1lbnRhdGlvbiBTZXJ2aWNlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jdW1lbnRhdGlvbihcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2N1bWVudGF0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogZG9jdW1lbnRhdGlvbiwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFkb2N1bWVudGF0aW9uKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkRvY3VtZW50YXRpb24gbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGRvY3VtZW50YXRpb24gYXMgRG9jdW1lbnRhdGlvbiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jUGFnZXMoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jUGFnZVtdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIC8vIEdldCB0aGUgbGF0ZXN0IGRvY3VtZW50YXRpb24gdmVyc2lvbiBmb3IgdGhpcyByZXBvXG4gIGNvbnN0IHsgZGF0YTogZG9jdW1lbnRhdGlvbiwgZXJyb3I6IGRvY0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwiaWRcIilcbiAgICAuZXEoXCJyZXBvX2lkXCIsIHJlcG9JZClcbiAgICAub3JkZXIoXCJ2ZXJzaW9uXCIsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxuICAgIC5saW1pdCgxKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZG9jRXJyb3IgfHwgIWRvY3VtZW50YXRpb24pIHtcbiAgICBjb25zb2xlLmVycm9yKGRvY0Vycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRG9jdW1lbnRhdGlvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdlcywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicGFnZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImRvY3VtZW50YXRpb25faWRcIiwgZG9jdW1lbnRhdGlvbi5pZClcbiAgICAub3JkZXIoXCJvcmRlcl9pbmRleFwiLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChwYWdlcyA/PyBbXSkgYXMgRG9jUGFnZVtdIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2NQYWdlQnlJZChcbiAgcGFnZUlkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2NQYWdlPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcGFnZSwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jX3BhZ2VzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpZFwiLCBwYWdlSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFwYWdlKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlBhZ2Ugbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHBhZ2UgYXMgRG9jUGFnZSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jUGFnZXNIaWVyYXJjaGljYWwoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jUGFnZVtdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIC8vIEZpcnN0IGdldCB0aGUgZG9jdW1lbnRhdGlvbiBJRCBmb3IgdGhpcyByZXBvXG4gIGNvbnN0IHsgZGF0YTogZG9jdW1lbnRhdGlvbiwgZXJyb3I6IGRvY0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwiaWRcIilcbiAgICAuZXEoXCJyZXBvX2lkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGRvY0Vycm9yIHx8ICFkb2N1bWVudGF0aW9uKSB7XG4gICAgY29uc29sZS5lcnJvcihkb2NFcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkRvY3VtZW50YXRpb24gbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcGFnZXMsIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY19wYWdlc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiZG9jdW1lbnRhdGlvbl9pZFwiLCBkb2N1bWVudGF0aW9uLmlkKVxuICAgIC5vcmRlcihcIm9yZGVyX2luZGV4XCIsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgLy8gUGFnZXMgYXJlIGFscmVhZHkgc29ydGVkIGJ5IG9yZGVyX2luZGV4XG4gIC8vIFRoZSBwYXJlbnRfcGFnZV9pZCBmaWVsZCBtYWludGFpbnMgdGhlIGhpZXJhcmNoeVxuICAvLyBGcm9udGVuZCBjYW4gdXNlIHRoaXMgdG8gcmVuZGVyIHRoZSB0cmVlIHN0cnVjdHVyZVxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiAocGFnZXMgPz8gW10pIGFzIERvY1BhZ2VbXSB9O1xufVxuXG4vKipcbiAqIEdldCBhbGwgZG9jdW1lbnRhdGlvbiB2ZXJzaW9ucyBmb3IgYSByZXBvc2l0b3J5XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2N1bWVudGF0aW9uVmVyc2lvbnMoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jdW1lbnRhdGlvbltdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogdmVyc2lvbnMsIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5vcmRlcihcInZlcnNpb25cIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKHZlcnNpb25zID8/IFtdKSBhcyBEb2N1bWVudGF0aW9uW10gfTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGxhdGVzdCBjb21wbGV0ZWQgZG9jdW1lbnRhdGlvbiB2ZXJzaW9uIGZvciBhIHJlcG9zaXRvcnlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExhdGVzdERvY3VtZW50YXRpb24oXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jdW1lbnRhdGlvbj4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGRvY3VtZW50YXRpb24sIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5vcmRlcihcInZlcnNpb25cIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXG4gICAgLmxpbWl0KDEpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghZG9jdW1lbnRhdGlvbikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJEb2N1bWVudGF0aW9uIG5vdCBmb3VuZFwiIH07XG4gIH1cblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGRvY3VtZW50YXRpb24gYXMgRG9jdW1lbnRhdGlvbiB9O1xufVxuXG4vKipcbiAqIEdldCBkb2N1bWVudGF0aW9uIHBhZ2VzIGZvciBhIHNwZWNpZmljIHZlcnNpb25cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERvY1BhZ2VzRm9yVmVyc2lvbihcbiAgcmVwb0lkOiBzdHJpbmcsXG4gIHZlcnNpb246IG51bWJlcixcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PERvY1BhZ2VbXT4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICAvLyBHZXQgdGhlIGRvY3VtZW50YXRpb24gcmVjb3JkIGZvciB0aGlzIHZlcnNpb25cbiAgY29uc3QgeyBkYXRhOiBkb2N1bWVudGF0aW9uLCBlcnJvcjogZG9jRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCJpZFwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5lcShcInZlcnNpb25cIiwgdmVyc2lvbilcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGRvY0Vycm9yIHx8ICFkb2N1bWVudGF0aW9uKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkRvY3VtZW50YXRpb24gdmVyc2lvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdlcywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicGFnZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImRvY3VtZW50YXRpb25faWRcIiwgZG9jdW1lbnRhdGlvbi5pZClcbiAgICAub3JkZXIoXCJvcmRlcl9pbmRleFwiLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChwYWdlcyA/PyBbXSkgYXMgRG9jUGFnZVtdIH07XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENvbnZlcnNhdGlvbiBTZXJ2aWNlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29udmVyc2F0aW9ucyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4gIGxpbWl0OiBudW1iZXIgPSAyMCxcbiAgdmVyc2lvbjogbnVtYmVyIHwgbnVsbCA9IG51bGwsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxDb252ZXJzYXRpb25bXT4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBsZXQgcXVlcnkgPSBjbGllbnRcbiAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlci5pZCk7XG5cbiAgLy8gRmlsdGVyIGJ5IHZlcnNpb24gaWYgc3BlY2lmaWVkXG4gIGlmICh2ZXJzaW9uICE9PSBudWxsICYmIHZlcnNpb24gIT09IHVuZGVmaW5lZCkge1xuICAgIHF1ZXJ5ID0gcXVlcnkuZXEoXCJyZXBvX3ZlcnNpb25cIiwgdmVyc2lvbik7XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGNvbnZlcnNhdGlvbnMsIGVycm9yIH0gPSBhd2FpdCBxdWVyeVxuICAgIC5vcmRlcihcInVwZGF0ZWRfYXRcIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXG4gICAgLmxpbWl0KGxpbWl0KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChjb252ZXJzYXRpb25zID8/IFtdKSBhcyBDb252ZXJzYXRpb25bXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29udmVyc2F0aW9uQnlJZChcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbj4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGNvbnZlcnNhdGlvbiwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiaWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIGlmICghY29udmVyc2F0aW9uKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkNvbnZlcnNhdGlvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY29udmVyc2F0aW9uIGFzIENvbnZlcnNhdGlvbiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ29udmVyc2F0aW9uKFxuICByZXBvSWQ6IHN0cmluZyxcbiAgdGl0bGU/OiBzdHJpbmcsXG4gIHZlcnNpb24/OiBudW1iZXIgfCBudWxsLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29udmVyc2F0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogY29udmVyc2F0aW9uLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLmluc2VydCh7XG4gICAgICByZXBvX2lkOiByZXBvSWQsXG4gICAgICB1c2VyX2lkOiB1c2VyLmlkLFxuICAgICAgdGl0bGU6IHRpdGxlIHx8IFwiTmV3IENvbnZlcnNhdGlvblwiLFxuICAgICAgcmVwb192ZXJzaW9uOiB2ZXJzaW9uID8/IG51bGwsXG4gICAgfSlcbiAgICAuc2VsZWN0KClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjb252ZXJzYXRpb24gYXMgQ29udmVyc2F0aW9uIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDb252ZXJzYXRpb24oXG4gIGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDx2b2lkPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgIC5kZWxldGUoKVxuICAgIC5lcShcImlkXCIsIGNvbnZlcnNhdGlvbklkKVxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlci5pZCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1bmRlZmluZWQgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbmFtZUNvbnZlcnNhdGlvbihcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbiAgbmV3VGl0bGU6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbj4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGNvbnZlcnNhdGlvbiwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgIC51cGRhdGUoeyB0aXRsZTogbmV3VGl0bGUgfSlcbiAgICAuZXEoXCJpZFwiLCBjb252ZXJzYXRpb25JZClcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY29udmVyc2F0aW9uIGFzIENvbnZlcnNhdGlvbiB9O1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNZXNzYWdlIFNlcnZpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb252ZXJzYXRpb25NZXNzYWdlcyhcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbk1lc3NhZ2VbXT4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IG1lc3NhZ2VzLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJtZXNzYWdlc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiY29udmVyc2F0aW9uX2lkXCIsIGNvbnZlcnNhdGlvbklkKVxuICAgIC5vcmRlcihcImNyZWF0ZWRfYXRcIiwgeyBhc2NlbmRpbmc6IHRydWUgfSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiAobWVzc2FnZXMgPz8gW10pIGFzIENvbnZlcnNhdGlvbk1lc3NhZ2VbXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTWVzc2FnZShcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbiAgcm9sZTogXCJ1c2VyXCIgfCBcImFzc2lzdGFudFwiLFxuICBjb250ZW50OiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxDb252ZXJzYXRpb25NZXNzYWdlPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogbWVzc2FnZSwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwibWVzc2FnZXNcIilcbiAgICAuaW5zZXJ0KHtcbiAgICAgIGNvbnZlcnNhdGlvbl9pZDogY29udmVyc2F0aW9uSWQsXG4gICAgICByb2xlLFxuICAgICAgY29udGVudCxcbiAgICB9KVxuICAgIC5zZWxlY3QoKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSB0aGUgY29udmVyc2F0aW9uJ3MgdXBkYXRlZF9hdCB0aW1lc3RhbXBcbiAgYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLnVwZGF0ZSh7IHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSB9KVxuICAgIC5lcShcImlkXCIsIGNvbnZlcnNhdGlvbklkKTtcblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBtZXNzYWdlIGFzIENvbnZlcnNhdGlvbk1lc3NhZ2UgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVDb2RlU25pcHBldHMoXG4gIGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsXG4gIG1lc3NhZ2VJZDogc3RyaW5nLFxuICBzbmlwcGV0czogQXJyYXk8eyBmaWxlOiBzdHJpbmc7IGNvZGU6IHN0cmluZyB9Pixcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvZGVTbmlwcGV0W10+PiB7XG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qgc25pcHBldHNUb0luc2VydCA9IHNuaXBwZXRzLm1hcCgoc25pcHBldCkgPT4gKHtcbiAgICBjb252ZXJzYXRpb25faWQ6IGNvbnZlcnNhdGlvbklkLFxuICAgIG1lc3NhZ2VfaWQ6IG1lc3NhZ2VJZCxcbiAgICBmaWxlX3BhdGg6IHNuaXBwZXQuZmlsZSxcbiAgICBjb2RlX2NvbnRlbnQ6IHNuaXBwZXQuY29kZSxcbiAgICBsYW5ndWFnZTogc25pcHBldC5maWxlLnNwbGl0KFwiLlwiKS5wb3AoKSB8fCBudWxsLFxuICB9KSk7XG5cbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbShcImNvZGVfc25pcHBldHNcIilcbiAgICAuaW5zZXJ0KHNuaXBwZXRzVG9JbnNlcnQpXG4gICAgLnNlbGVjdCgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogZGF0YSBhcyBDb2RlU25pcHBldFtdIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb2RlU25pcHBldHNGb3JDb252ZXJzYXRpb24oXG4gIGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxDb2RlU25pcHBldFtdPj4ge1xuICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oXCJjb2RlX3NuaXBwZXRzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJjb252ZXJzYXRpb25faWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgLm9yZGVyKFwiY3JlYXRlZF9hdFwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBkYXRhIGFzIENvZGVTbmlwcGV0W10gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNvZGVTbmlwcGV0KFxuICBzbmlwcGV0SWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PG51bGw+PiB7XG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbShcImNvZGVfc25pcHBldHNcIilcbiAgICAuZGVsZXRlKClcbiAgICAuZXEoXCJpZFwiLCBzbmlwcGV0SWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogbnVsbCB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5kZXhSZXBvc2l0b3J5KFxuICByZXBvSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PHZvaWQ+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBpbnN0YWxsYXRpb24sIGVycm9yOiBpbnN0YWxsYXRpb25FcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJnaXRodWJfaW5zdGFsbGF0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiaW5zdGFsbGVkX2J5XCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghaW5zdGFsbGF0aW9uIHx8IGluc3RhbGxhdGlvbkVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkdpdGh1YiBBcHAgSW5zdGFsbGF0aW9uIG5vdCBmb3VuZCFcIiB9O1xuICB9XG5cbiAgLy9mZXRjaCByZXBvXG5cbiAgY29uc3QgcmVwb1Jlc3VsdCA9IGF3YWl0IGdldFJlcG9XaXRoU3RhdHVzKHJlcG9JZCk7XG5cbiAgaWYgKCFyZXBvUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHJlcG9SZXN1bHQuZXJyb3IgfTtcbiAgfVxuXG4gIGNvbnN0IHJlcG9VcmwgPSByZXBvUmVzdWx0LmRhdGEucmVwb191cmw7XG4gIGNvbnN0IGluc3RhbGxhdGlvbklkID0gaW5zdGFsbGF0aW9uLmluc3RhbGxhdGlvbl9pZDtcblxuICAvLyBHZXQgdGhlIGxhdGVzdCB2ZXJzaW9uIG51bWJlciBmb3IgdGhpcyByZXBvXG4gIGNvbnN0IHsgZGF0YTogbGF0ZXN0RG9jIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwidmVyc2lvblwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5vcmRlcihcInZlcnNpb25cIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXG4gICAgLmxpbWl0KDEpXG4gICAgLnNpbmdsZSgpO1xuXG4gIC8vIEluY3JlbWVudCB2ZXJzaW9uIChzdGFydCBhdCAxIGlmIG5vIHByZXZpb3VzIHZlcnNpb25zKVxuICBjb25zdCBuZXh0VmVyc2lvbiA9IChsYXRlc3REb2M/LnZlcnNpb24gPz8gMCkgKyAxO1xuXG4gIC8vbWFyayB0aGUgcmVwb3NpdG9yeSBhcyBpbmRleGluZyBpbiBzdXBhYmFzZSBmaXJzdFxuICBjb25zdCB7IGVycm9yOiB1cGRhdGVFcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAudXBkYXRlKHsgaW5kZXhfc3RhdHVzOiBcImluZGV4aW5nXCIgfSlcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpO1xuXG4gIGlmICh1cGRhdGVFcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IodXBkYXRlRXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogdXBkYXRlRXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgLy8gQ2FsbCB0aGUgYmFja2VuZCB0byBzdGFydCBpbmRleGluZyAoZmlyZS1hbmQtZm9yZ2V0KVxuICAvLyBEb24ndCBhd2FpdCBvciB0aHJvdyBlcnJvcnMgc2luY2UgdGhpcyBpcyBhIGxvbmctcnVubmluZyBvcGVyYXRpb25cbiAgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L3JlcG9zL2luZGV4YCwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICByZXBvX3VybDogcmVwb1VybCxcbiAgICAgIHJlcG9faWQ6IHJlcG9JZCxcbiAgICAgIHVzZXJfaWQ6IHVzZXIuaWQsXG4gICAgICBpbnN0YWxsYXRpb25faWQ6IGluc3RhbGxhdGlvbklkLFxuICAgICAgYnJhbmNoOiBcIm1haW5cIixcbiAgICAgIHZlcnNpb246IG5leHRWZXJzaW9uLFxuICAgIH0pLFxuICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAvLyBMb2cgdGhlIGVycm9yIGJ1dCBkb24ndCBmYWlsIHRoZSByZXF1ZXN0XG4gICAgY29uc29sZS5lcnJvcihcIkluZGV4aW5nIHJlcXVlc3QgZmFpbGVkOlwiLCBlcnJvcik7XG4gICAgLy8gVGhlIGJhY2tlbmQgc2hvdWxkIGhhbmRsZSB1cGRhdGluZyB0aGUgcmVwbyBzdGF0dXMgb24gZmFpbHVyZVxuICB9KTtcblxuICAvLyBSZXR1cm4gc3VjY2VzcyBpbW1lZGlhdGVseSAtIHRoZSBpbmRleGluZyB3aWxsIGhhcHBlbiBpbiB0aGUgYmFja2dyb3VuZFxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1bmRlZmluZWQgfTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiZ1RBZ2dDc0IifQ==
}),
"[project]/src/lib/services/data:0daadf [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"70eec9e0c5d7ed97577df4f40b75aa69e197b3acc7":"createConversation"},"src/lib/services/repoService.ts",""] */ __turbopack_context__.s([
    "createConversation",
    ()=>createConversation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var createConversation = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("70eec9e0c5d7ed97577df4f40b75aa69e197b3acc7", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createConversation"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcmVwb1NlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAL3V0aWxzL3N1cGFiYXNlL3NlcnZlclwiO1xuaW1wb3J0IHtcbiAgUmVwbyxcbiAgRG9jdW1lbnRhdGlvbixcbiAgRG9jUGFnZSxcbiAgQ29udmVyc2F0aW9uLFxuICBDb252ZXJzYXRpb25NZXNzYWdlLFxuICBDb2RlU25pcHBldCxcbn0gZnJvbSBcIkAvYXBwL3R5cGVzL3N1cGFiYXNlXCI7XG5pbXBvcnQgeyBBY3Rpb25SZXN1bHQgfSBmcm9tIFwiQC9hcHAvdHlwZXMvYWN0aW9uXCI7XG5pbXBvcnQge1xuICB2ZXJpZnlHaXRodWJSZXBvQWNjZXNzLFxuICB2ZXJpZnlHaXRMYWJSZXBvQWNjZXNzLFxufSBmcm9tIFwiLi9naXRQcm92aWRlclNlcnZpY2VcIjtcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHBhcnNlIEdpdEh1YiBVUkxzXG5mdW5jdGlvbiBwYXJzZUdpdEh1YlVybCh1cmw6IHN0cmluZyk6IHsgb3duZXI6IHN0cmluZzsgcmVwbzogc3RyaW5nIH0ge1xuICB0cnkge1xuICAgIC8vIEhhbmRsZSBtdWx0aXBsZSBmb3JtYXRzOlxuICAgIC8vIC0gaHR0cHM6Ly9naXRodWIuY29tL293bmVyL3JlcG9cbiAgICAvLyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9vd25lci9yZXBvLmdpdFxuICAgIC8vIC0gZ2l0QGdpdGh1Yi5jb206b3duZXIvcmVwby5naXRcblxuICAgIHVybCA9IHVybC50cmltKCkucmVwbGFjZSgvXFwuZ2l0JC8sIFwiXCIpO1xuXG4gICAgaWYgKHVybC5pbmNsdWRlcyhcImdpdGh1Yi5jb20vXCIpKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IHVybC5zcGxpdChcImdpdGh1Yi5jb20vXCIpWzFdLnNwbGl0KFwiL1wiKTtcbiAgICAgIHJldHVybiB7IG93bmVyOiBwYXJ0c1swXSwgcmVwbzogcGFydHNbMV0gfTtcbiAgICB9XG5cbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoXCJnaXRAZ2l0aHViLmNvbTpcIikpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gdXJsLnJlcGxhY2UoXCJnaXRAZ2l0aHViLmNvbTpcIiwgXCJcIikuc3BsaXQoXCIvXCIpO1xuICAgICAgcmV0dXJuIHsgb3duZXI6IHBhcnRzWzBdLCByZXBvOiBwYXJ0c1sxXSB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IG93bmVyOiBcIlwiLCByZXBvOiBcIlwiIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgb3duZXI6IFwiXCIsIHJlcG86IFwiXCIgfTtcbiAgfVxufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gcGFyc2UgR2l0TGFiIFVSTHNcbmZ1bmN0aW9uIHBhcnNlR2l0TGFiVXJsKHVybDogc3RyaW5nKTogeyBvd25lcjogc3RyaW5nOyByZXBvOiBzdHJpbmcgfSB7XG4gIHRyeSB7XG4gICAgLy8gSGFuZGxlIG11bHRpcGxlIGZvcm1hdHM6XG4gICAgLy8gLSBodHRwczovL2dpdGxhYi5jb20vb3duZXIvcmVwb1xuICAgIC8vIC0gaHR0cHM6Ly9naXRsYWIuY29tL293bmVyL3N1Ymdyb3VwL3JlcG9cbiAgICAvLyAtIGh0dHBzOi8vZ2l0bGFiLmNvbS9vd25lci9yZXBvLmdpdFxuICAgIC8vIC0gZ2l0QGdpdGxhYi5jb206b3duZXIvcmVwby5naXRcbiAgICAvLyAtIFNlbGYtaG9zdGVkOiBodHRwczovL2dpdGxhYi5leGFtcGxlLmNvbS9vd25lci9yZXBvXG5cbiAgICB1cmwgPSB1cmwudHJpbSgpLnJlcGxhY2UoL1xcLmdpdCQvLCBcIlwiKTtcblxuICAgIC8vIEhhbmRsZSBIVFRQUyBVUkxzIChnaXRsYWIuY29tIG9yIHNlbGYtaG9zdGVkKVxuICAgIGlmICh1cmwuaW5jbHVkZXMoXCJnaXRsYWIuY29tL1wiKSB8fCAvZ2l0bGFiXFwuW14vXStcXC8vLnRlc3QodXJsKSkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgcGF0aCBhZnRlciB0aGUgZG9tYWluXG4gICAgICBjb25zdCBtYXRjaCA9IHVybC5tYXRjaCgvZ2l0bGFiW14vXSpcXC8oLispLyk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgY29uc3QgcGF0aFBhcnRzID0gbWF0Y2hbMV0uc3BsaXQoXCIvXCIpO1xuICAgICAgICAvLyBHaXRMYWIgc3VwcG9ydHMgbmVzdGVkIGdyb3Vwcywgc28gd2UgbmVlZCB0byBoYW5kbGU6XG4gICAgICAgIC8vIC0gb3duZXIvcmVwbyAoMiBwYXJ0cylcbiAgICAgICAgLy8gLSBvd25lci9zdWJncm91cC9yZXBvICgzKyBwYXJ0cylcbiAgICAgICAgaWYgKHBhdGhQYXJ0cy5sZW5ndGggPj0gMikge1xuICAgICAgICAgIC8vIFRha2UgZXZlcnl0aGluZyBleGNlcHQgdGhlIGxhc3QgcGFydCBhcyBvd25lci9ncm91cFxuICAgICAgICAgIGNvbnN0IHJlcG8gPSBwYXRoUGFydHNbcGF0aFBhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IG93bmVyID0gcGF0aFBhcnRzLnNsaWNlKDAsIC0xKS5qb2luKFwiL1wiKTtcbiAgICAgICAgICByZXR1cm4geyBvd25lciwgcmVwbyB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIFNTSCBVUkxzXG4gICAgaWYgKHVybC5zdGFydHNXaXRoKFwiZ2l0QGdpdGxhYi5jb206XCIpIHx8IC9naXRAZ2l0bGFiXFwuW146XSs6Ly50ZXN0KHVybCkpIHtcbiAgICAgIGNvbnN0IG1hdGNoID0gdXJsLm1hdGNoKC9naXRAZ2l0bGFiW146XSo6KC4rKS8pO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGNvbnN0IHBhdGhQYXJ0cyA9IG1hdGNoWzFdLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgaWYgKHBhdGhQYXJ0cy5sZW5ndGggPj0gMikge1xuICAgICAgICAgIGNvbnN0IHJlcG8gPSBwYXRoUGFydHNbcGF0aFBhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IG93bmVyID0gcGF0aFBhcnRzLnNsaWNlKDAsIC0xKS5qb2luKFwiL1wiKTtcbiAgICAgICAgICByZXR1cm4geyBvd25lciwgcmVwbyB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgb3duZXI6IFwiXCIsIHJlcG86IFwiXCIgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBvd25lcjogXCJcIiwgcmVwbzogXCJcIiB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXBvc0J5T3JnYW5pemF0aW9uSWQoXG4gIG9yZ2FuaXphdGlvbklkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHVzZXIgPSBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJvcmdhbml6YXRpb25faWRcIiwgb3JnYW5pemF0aW9uSWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKGRhdGEgPz8gW10pIGFzIFJlcG9bXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUmVwb1ZpYUdpdGh1YihcbiAgZm9ybURhdGE6IEZvcm1EYXRhLFxuICBvcmdJZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8UmVwbyB8IHVuZGVmaW5lZD4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IHByb3ZpZGVyID0gZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IHVybCA9IGZvcm1EYXRhLmdldChcImdpdGh1Yi11cmxcIikgYXMgc3RyaW5nO1xuXG4gIGlmICghbmFtZSkge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJOYW1lIGlzIHJlcXVpcmVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGluc3RhbGxhdGlvbiB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJnaXRodWJfaW5zdGFsbGF0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiaW5zdGFsbGVkX2J5XCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghaW5zdGFsbGF0aW9uKSB7XG4gICAgLy8gTm8gR2l0SHViIEFwcCBpbnN0YWxsYXRpb24gLSBwcm9tcHQgdXNlciB0byBpbnN0YWxsXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiSW5zdGFsbGF0aW9uIE5lZWRlZFwiLFxuICAgIH07XG4gIH1cblxuICAvL3BhcnNlIHVybCBmb3Igb3duZXIgYW5kIHJlcG9cbiAgY29uc3QgeyBvd25lciwgcmVwbzogcmVwb05hbWUgfSA9IHBhcnNlR2l0SHViVXJsKHVybCk7XG5cbiAgY29uc3QgaGFzQWNjZXNzID0gYXdhaXQgdmVyaWZ5R2l0aHViUmVwb0FjY2VzcyhcbiAgICBpbnN0YWxsYXRpb24uaW5zdGFsbGF0aW9uX2lkLFxuICAgIG93bmVyLFxuICAgIHJlcG9OYW1lLFxuICApO1xuXG4gIGlmICghaGFzQWNjZXNzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiQWNjZXNzIERlbmllZFwiLFxuICAgIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IHJlcG8sIGVycm9yOiByZXBvRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLmluc2VydCh7XG4gICAgICBuYW1lLFxuICAgICAgcHJvdmlkZXIsXG4gICAgICByZXBvX3VybDogdXJsLFxuICAgICAgb3JnYW5pemF0aW9uX2lkOiBvcmdJZCxcbiAgICAgIGluZGV4ZWRfYnk6IHVzZXIuaWQsXG4gICAgICBpbmRleF9zdGF0dXM6IFwibm90IGluZGV4ZWRcIixcbiAgICB9KVxuICAgIC5zZWxlY3QoKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAocmVwb0Vycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiByZXBvRXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVwbyBhcyBSZXBvIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZXBvVmlhR2l0bGFiKFxuICBmb3JtRGF0YTogRm9ybURhdGEsXG4gIG9yZ0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvIHwgdW5kZWZpbmVkPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgY29uc3QgcHJvdmlkZXIgPSBmb3JtRGF0YS5nZXQoXCJ0eXBlXCIpIGFzIHN0cmluZztcbiAgY29uc3QgdXJsID0gZm9ybURhdGEuZ2V0KFwiZ2l0bGFiLXVybFwiKSBhcyBzdHJpbmc7XG5cbiAgLy8gVmFsaWRhdGUgaW5wdXRzXG4gIGlmICghbmFtZSB8fCBuYW1lLnRyaW0oKSA9PT0gXCJcIikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJSZXBvc2l0b3J5IG5hbWUgaXMgcmVxdWlyZWRcIiB9O1xuICB9XG5cbiAgaWYgKCF1cmwgfHwgdXJsLnRyaW0oKSA9PT0gXCJcIikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJHaXRMYWIgVVJMIGlzIHJlcXVpcmVkXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogaW5zdGFsbGF0aW9uIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImdpdGxhYl9pbnN0YWxsYXRpb25zXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpbnN0YWxsZWRfYnlcIiwgdXNlci5pZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKCFpbnN0YWxsYXRpb24pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiSW5zdGFsbGF0aW9uIE5lZWRlZFwiIH07XG4gIH1cblxuICBjb25zdCB7IG93bmVyLCByZXBvOiByZXBvTmFtZSB9ID0gcGFyc2VHaXRMYWJVcmwodXJsKTtcblxuICAvL3ZlcmlmeSBhY2Nlc3NcbiAgY29uc3QgaGFzQWNjZXNzID0gYXdhaXQgdmVyaWZ5R2l0TGFiUmVwb0FjY2VzcyhcbiAgICBpbnN0YWxsYXRpb24uYWNjZXNzX3Rva2VuLFxuICAgIG93bmVyLFxuICAgIHJlcG9OYW1lLFxuICApO1xuXG4gIGlmICghaGFzQWNjZXNzKSB7XG4gICAgaWYgKGluc3RhbGxhdGlvbi5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogXCJBY2Nlc3MgcmVxdWlyZWQhXCIsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yOiBcIkFjY2VzcyBkZW5pZWQhXCIsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3I6IHJlcG9FcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAuaW5zZXJ0KHtcbiAgICAgIG5hbWUsXG4gICAgICBwcm92aWRlcixcbiAgICAgIHJlcG9fdXJsOiB1cmwsXG4gICAgICBvcmdhbml6YXRpb25faWQ6IG9yZ0lkLFxuICAgICAgaW5kZXhlZF9ieTogdXNlci5pZCxcbiAgICAgIGluZGV4X3N0YXR1czogXCJub3QgaW5kZXhlZFwiLFxuICAgIH0pXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChyZXBvRXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHJlcG9FcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXBvIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZXBvVmlhTG9jYWxGaWxlKFxuICBmb3JtRGF0YTogRm9ybURhdGEsXG4gIG9yZ0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgY29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldChcImZpbGVcIikgYXMgRmlsZTtcblxuICAvLyBWYWxpZGF0ZSBpbnB1dHNcbiAgaWYgKCFuYW1lIHx8IG5hbWUudHJpbSgpID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlJlcG9zaXRvcnkgbmFtZSBpcyByZXF1aXJlZFwiIH07XG4gIH1cblxuICBpZiAoIWZpbGUpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmlsZSBpcyByZXF1aXJlZFwiIH07XG4gIH1cblxuICAvLyBWYWxpZGF0ZSBmaWxlIHR5cGVcbiAgaWYgKCFmaWxlLm5hbWUuZW5kc1dpdGgoXCIuemlwXCIpKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIk9ubHkgLnppcCBmaWxlcyBhcmUgYWxsb3dlZFwiIH07XG4gIH1cblxuICAvLyBWYWxpZGF0ZSBmaWxlIHNpemUgKG1heCAxMDBNQilcbiAgY29uc3QgbWF4U2l6ZSA9IDEwMCAqIDEwMjQgKiAxMDI0OyAvLyAxMDBNQiBpbiBieXRlc1xuICBpZiAoZmlsZS5zaXplID4gbWF4U2l6ZSkge1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yOiBcIkZpbGUgc2l6ZSBleGNlZWRzIDEwME1CIGxpbWl0XCIsXG4gICAgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gR2VuZXJhdGUgYSB1bmlxdWUgZmlsZSBuYW1lIHRvIHByZXZlbnQgY29sbGlzaW9uc1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IERhdGUubm93KCk7XG4gICAgY29uc3Qgc2FuaXRpemVkTmFtZSA9IG5hbWUudHJpbSgpLnJlcGxhY2UoL1teYS16MC05LV9dL2dpLCBcIl9cIik7XG4gICAgY29uc3QgZmlsZU5hbWUgPSBgJHtzYW5pdGl6ZWROYW1lfV8ke3RpbWVzdGFtcH1fJHtmaWxlLm5hbWV9YDtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGAke29yZ0lkfS8ke2ZpbGVOYW1lfWA7XG5cbiAgICAvLyBVcGxvYWQgZmlsZSB0byBTdXBhYmFzZSBTdG9yYWdlXG4gICAgY29uc3QgeyBlcnJvcjogdXBsb2FkRXJyb3IgfSA9IGF3YWl0IGNsaWVudC5zdG9yYWdlXG4gICAgICAuZnJvbShcImxvY2FsX3JlcG9zXCIpXG4gICAgICAudXBsb2FkKGZpbGVQYXRoLCBmaWxlLCB7XG4gICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL3ppcFwiLFxuICAgICAgICB1cHNlcnQ6IGZhbHNlLFxuICAgICAgfSk7XG5cbiAgICBpZiAodXBsb2FkRXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJVcGxvYWQgZXJyb3I6XCIsIHVwbG9hZEVycm9yKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogYEZpbGUgdXBsb2FkIGZhaWxlZDogJHt1cGxvYWRFcnJvci5tZXNzYWdlfWAsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEdldCB0aGUgcHVibGljIFVSTCBmb3IgdGhlIHVwbG9hZGVkIGZpbGVcbiAgICBjb25zdCB7IGRhdGE6IHVybERhdGEgfSA9IGNsaWVudC5zdG9yYWdlXG4gICAgICAuZnJvbShcImxvY2FsX3JlcG9zXCIpXG4gICAgICAuZ2V0UHVibGljVXJsKGZpbGVQYXRoKTtcblxuICAgIC8vIENyZWF0ZSByZXBvc2l0b3J5IHJlY29yZCBpbiBkYXRhYmFzZVxuICAgIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3I6IHJlcG9FcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgICAgLmluc2VydCh7XG4gICAgICAgIG5hbWU6IG5hbWUudHJpbSgpLFxuICAgICAgICBwcm92aWRlcjogXCJsb2NhbFwiLFxuICAgICAgICByZXBvX3VybDogbnVsbCxcbiAgICAgICAgb2JqZWN0X3VybDogdXJsRGF0YS5wdWJsaWNVcmwsXG4gICAgICAgIG9yZ2FuaXphdGlvbl9pZDogb3JnSWQsXG4gICAgICAgIGluZGV4ZWRfYnk6IHVzZXIuaWQsXG4gICAgICAgIGluZGV4X3N0YXR1czogXCJub3QgaW5kZXhlZFwiLFxuICAgICAgfSlcbiAgICAgIC5zZWxlY3QoKVxuICAgICAgLnNpbmdsZSgpO1xuXG4gICAgaWYgKHJlcG9FcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIlJlcG9zaXRvcnkgY3JlYXRpb24gZXJyb3I6XCIsIHJlcG9FcnJvcik7XG4gICAgICAvLyBBdHRlbXB0IHRvIGNsZWFuIHVwIHVwbG9hZGVkIGZpbGVcbiAgICAgIGF3YWl0IGNsaWVudC5zdG9yYWdlLmZyb20oXCJsb2NhbF9yZXBvc1wiKS5yZW1vdmUoW2ZpbGVQYXRoXSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IGBSZXBvc2l0b3J5IGNyZWF0aW9uIGZhaWxlZDogJHtyZXBvRXJyb3IubWVzc2FnZX1gLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXBvIGFzIFJlcG8gfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiVW5leHBlY3RlZCBlcnJvcjpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yOlxuICAgICAgICBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZFwiLFxuICAgIH07XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUmVwb3NpdG9yeSBNYW5hZ2VtZW50IFNlcnZpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXBvV2l0aFN0YXR1cyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFyZXBvKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlJlcG9zaXRvcnkgbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlcG8gYXMgUmVwbyB9O1xufVxuXG50eXBlIFVwZGF0ZURhdGEgPSB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHJlcG9fdXJsPzogc3RyaW5nO1xuICBvYmplY3RfdXJsPzogc3RyaW5nO1xuICBpbmRleF9zdGF0dXM/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUmVwb1NldHRpbmdzKFxuICByZXBvSWQ6IHN0cmluZyxcbiAgc2V0dGluZ3M6IHsgbmFtZT86IHN0cmluZzsgcmVwb191cmw/OiBzdHJpbmc7IGZpbGU/OiBGaWxlIH0sXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIC8vIEdldCB0aGUgY3VycmVudCByZXBvIHRvIGNoZWNrIGl0cyBwcm92aWRlciB0eXBlXG4gIGNvbnN0IHsgZGF0YTogY3VycmVudFJlcG8gfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghY3VycmVudFJlcG8pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUmVwb3NpdG9yeSBub3QgZm91bmQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZURhdGE6IFVwZGF0ZURhdGEgPSB7fTtcblxuICAvLyBIYW5kbGUgbmFtZSB1cGRhdGVcbiAgaWYgKHNldHRpbmdzLm5hbWUpIHtcbiAgICB1cGRhdGVEYXRhLm5hbWUgPSBzZXR0aW5ncy5uYW1lO1xuICB9XG5cbiAgLy8gSGFuZGxlIEdpdEh1YiBVUkwgdXBkYXRlXG4gIGlmIChzZXR0aW5ncy5yZXBvX3VybCAmJiBjdXJyZW50UmVwby5wcm92aWRlciA9PT0gXCJnaXRodWJcIikge1xuICAgIGNvbnN0IHsgb3duZXIsIHJlcG8gfSA9IHBhcnNlR2l0SHViVXJsKHNldHRpbmdzLnJlcG9fdXJsKTtcblxuICAgIGlmICghb3duZXIgfHwgIXJlcG8pIHtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJJbnZhbGlkIEdpdEh1YiBVUkwgZm9ybWF0IVwiIH07XG4gICAgfVxuXG4gICAgLy8gVmVyaWZ5IGFjY2VzcyB0byB0aGUgbmV3IHJlcG9cbiAgICBjb25zdCB7IGRhdGE6IGluc3RhbGxhdGlvbiB9ID0gYXdhaXQgY2xpZW50XG4gICAgICAuZnJvbShcImdpdGh1Yl9pbnN0YWxsYXRpb25zXCIpXG4gICAgICAuc2VsZWN0KFwiKlwiKVxuICAgICAgLmVxKFwiaW5zdGFsbGVkX2J5XCIsIHVzZXIuaWQpXG4gICAgICAuc2luZ2xlKCk7XG5cbiAgICBpZiAoIWluc3RhbGxhdGlvbikge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkdpdEh1YiBBcHAgbm90IGluc3RhbGxlZCFcIiB9O1xuICAgIH1cblxuICAgIGNvbnN0IGhhc0FjY2VzcyA9IGF3YWl0IHZlcmlmeUdpdGh1YlJlcG9BY2Nlc3MoXG4gICAgICBpbnN0YWxsYXRpb24uaW5zdGFsbGF0aW9uX2lkLnRvU3RyaW5nKCksXG4gICAgICBvd25lcixcbiAgICAgIHJlcG8sXG4gICAgKTtcblxuICAgIGlmICghaGFzQWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6XG4gICAgICAgICAgXCJDYW5ub3QgYWNjZXNzIHRoaXMgcmVwb3NpdG9yeS4gTWFrZSBzdXJlIHRoZSBHaXRIdWIgQXBwIGlzIGluc3RhbGxlZCBmb3IgdGhpcyByZXBvc2l0b3J5LlwiLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICB1cGRhdGVEYXRhLnJlcG9fdXJsID0gc2V0dGluZ3MucmVwb191cmw7XG4gICAgdXBkYXRlRGF0YS5pbmRleF9zdGF0dXMgPSBcIm5vdCBpbmRleGVkXCI7IC8vIFRyaWdnZXIgcmUtaW5kZXhpbmdcbiAgfVxuXG4gIC8vIEhhbmRsZSBsb2NhbCBmaWxlIHVwbG9hZFxuICBpZiAoc2V0dGluZ3MuZmlsZSAmJiBjdXJyZW50UmVwby5wcm92aWRlciA9PT0gXCJsb2NhbFwiKSB7XG4gICAgY29uc3QgZmlsZSA9IHNldHRpbmdzLmZpbGU7XG4gICAgY29uc3QgZmlsZUV4dCA9IGZpbGUubmFtZS5zcGxpdChcIi5cIikucG9wKCk7XG5cbiAgICBpZiAoZmlsZUV4dCAhPT0gXCJ6aXBcIikge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIk9ubHkgLnppcCBmaWxlcyBhcmUgYWxsb3dlZCFcIiB9O1xuICAgIH1cblxuICAgIC8vIFVwbG9hZCB0byBTdXBhYmFzZSBTdG9yYWdlXG4gICAgY29uc3QgZmlsZU5hbWUgPSBgJHtyZXBvSWR9LSR7RGF0ZS5ub3coKX0uemlwYDtcbiAgICBjb25zdCB7IGRhdGE6IHVwbG9hZERhdGEsIGVycm9yOiB1cGxvYWRFcnJvciB9ID0gYXdhaXQgY2xpZW50LnN0b3JhZ2VcbiAgICAgIC5mcm9tKFwibG9jYWxfcmVwb3NcIilcbiAgICAgIC51cGxvYWQoZmlsZU5hbWUsIGZpbGUpO1xuXG4gICAgaWYgKHVwbG9hZEVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKHVwbG9hZEVycm9yKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gdXBsb2FkIGZpbGUhXCIgfTtcbiAgICB9XG5cbiAgICAvLyBHZXQgcHVibGljIFVSTFxuICAgIGNvbnN0IHsgZGF0YTogdXJsRGF0YSB9ID0gY2xpZW50LnN0b3JhZ2VcbiAgICAgIC5mcm9tKFwibG9jYWxfcmVwb3NcIilcbiAgICAgIC5nZXRQdWJsaWNVcmwoZmlsZU5hbWUpO1xuXG4gICAgdXBkYXRlRGF0YS5vYmplY3RfdXJsID0gdXJsRGF0YS5wdWJsaWNVcmw7XG4gICAgdXBkYXRlRGF0YS5pbmRleF9zdGF0dXMgPSBcInBlbmRpbmdcIjsgLy8gVHJpZ2dlciByZS1pbmRleGluZ1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSByZXBvc2l0b3J5XG4gIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnVwZGF0ZSh1cGRhdGVEYXRhKVxuICAgIC5lcShcImlkXCIsIHJlcG9JZClcbiAgICAuc2VsZWN0KClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXBvIGFzIFJlcG8gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVJlcG8oXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8eyBvcmdhbml6YXRpb25JZDogc3RyaW5nIH0+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gRmV0Y2ggdGhlIG9yZ2FuaXphdGlvbl9pZCBiZWZvcmUgZGVsZXRpbmdcbiAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvcjogcmVwb0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgIC5zZWxlY3QoXCJvcmdhbml6YXRpb25faWRcIilcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChyZXBvRXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKHJlcG9FcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiByZXBvRXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFyZXBvKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlJlcG9zaXRvcnkgbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IGNsaWVudC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpLmRlbGV0ZSgpLmVxKFwiaWRcIiwgcmVwb0lkKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHsgb3JnYW5pemF0aW9uSWQ6IHJlcG8ub3JnYW5pemF0aW9uX2lkIH0gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRyaWdnZXJSZWluZGV4KFxuICByZXBvSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PHZvaWQ+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSBpbmRleF9zdGF0dXMgdG8gJ3BlbmRpbmcnIHRvIHRyaWdnZXIgcmVpbmRleGluZ1xuICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgIC51cGRhdGUoeyBpbmRleF9zdGF0dXM6IFwicGVuZGluZ1wiIH0pXG4gICAgLmVxKFwiaWRcIiwgcmVwb0lkKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIC8vIFRPRE86IFRyaWdnZXIgYWN0dWFsIGluZGV4aW5nIGpvYi93ZWJob29rL3F1ZXVlIGhlcmVcbiAgLy8gVGhpcyBjb3VsZCBiZSBhbiBBUEkgY2FsbCB0byB5b3VyIGluZGV4aW5nIHNlcnZpY2VcblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1bmRlZmluZWQgfTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRG9jdW1lbnRhdGlvbiBTZXJ2aWNlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jdW1lbnRhdGlvbihcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2N1bWVudGF0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogZG9jdW1lbnRhdGlvbiwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFkb2N1bWVudGF0aW9uKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkRvY3VtZW50YXRpb24gbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGRvY3VtZW50YXRpb24gYXMgRG9jdW1lbnRhdGlvbiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jUGFnZXMoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jUGFnZVtdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIC8vIEdldCB0aGUgbGF0ZXN0IGRvY3VtZW50YXRpb24gdmVyc2lvbiBmb3IgdGhpcyByZXBvXG4gIGNvbnN0IHsgZGF0YTogZG9jdW1lbnRhdGlvbiwgZXJyb3I6IGRvY0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwiaWRcIilcbiAgICAuZXEoXCJyZXBvX2lkXCIsIHJlcG9JZClcbiAgICAub3JkZXIoXCJ2ZXJzaW9uXCIsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxuICAgIC5saW1pdCgxKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZG9jRXJyb3IgfHwgIWRvY3VtZW50YXRpb24pIHtcbiAgICBjb25zb2xlLmVycm9yKGRvY0Vycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRG9jdW1lbnRhdGlvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdlcywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicGFnZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImRvY3VtZW50YXRpb25faWRcIiwgZG9jdW1lbnRhdGlvbi5pZClcbiAgICAub3JkZXIoXCJvcmRlcl9pbmRleFwiLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChwYWdlcyA/PyBbXSkgYXMgRG9jUGFnZVtdIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2NQYWdlQnlJZChcbiAgcGFnZUlkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2NQYWdlPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcGFnZSwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jX3BhZ2VzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpZFwiLCBwYWdlSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFwYWdlKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlBhZ2Ugbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHBhZ2UgYXMgRG9jUGFnZSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jUGFnZXNIaWVyYXJjaGljYWwoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jUGFnZVtdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIC8vIEZpcnN0IGdldCB0aGUgZG9jdW1lbnRhdGlvbiBJRCBmb3IgdGhpcyByZXBvXG4gIGNvbnN0IHsgZGF0YTogZG9jdW1lbnRhdGlvbiwgZXJyb3I6IGRvY0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwiaWRcIilcbiAgICAuZXEoXCJyZXBvX2lkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGRvY0Vycm9yIHx8ICFkb2N1bWVudGF0aW9uKSB7XG4gICAgY29uc29sZS5lcnJvcihkb2NFcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkRvY3VtZW50YXRpb24gbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcGFnZXMsIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY19wYWdlc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiZG9jdW1lbnRhdGlvbl9pZFwiLCBkb2N1bWVudGF0aW9uLmlkKVxuICAgIC5vcmRlcihcIm9yZGVyX2luZGV4XCIsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgLy8gUGFnZXMgYXJlIGFscmVhZHkgc29ydGVkIGJ5IG9yZGVyX2luZGV4XG4gIC8vIFRoZSBwYXJlbnRfcGFnZV9pZCBmaWVsZCBtYWludGFpbnMgdGhlIGhpZXJhcmNoeVxuICAvLyBGcm9udGVuZCBjYW4gdXNlIHRoaXMgdG8gcmVuZGVyIHRoZSB0cmVlIHN0cnVjdHVyZVxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiAocGFnZXMgPz8gW10pIGFzIERvY1BhZ2VbXSB9O1xufVxuXG4vKipcbiAqIEdldCBhbGwgZG9jdW1lbnRhdGlvbiB2ZXJzaW9ucyBmb3IgYSByZXBvc2l0b3J5XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2N1bWVudGF0aW9uVmVyc2lvbnMoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jdW1lbnRhdGlvbltdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogdmVyc2lvbnMsIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5vcmRlcihcInZlcnNpb25cIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKHZlcnNpb25zID8/IFtdKSBhcyBEb2N1bWVudGF0aW9uW10gfTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGxhdGVzdCBjb21wbGV0ZWQgZG9jdW1lbnRhdGlvbiB2ZXJzaW9uIGZvciBhIHJlcG9zaXRvcnlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExhdGVzdERvY3VtZW50YXRpb24oXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jdW1lbnRhdGlvbj4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGRvY3VtZW50YXRpb24sIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5vcmRlcihcInZlcnNpb25cIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXG4gICAgLmxpbWl0KDEpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghZG9jdW1lbnRhdGlvbikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJEb2N1bWVudGF0aW9uIG5vdCBmb3VuZFwiIH07XG4gIH1cblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGRvY3VtZW50YXRpb24gYXMgRG9jdW1lbnRhdGlvbiB9O1xufVxuXG4vKipcbiAqIEdldCBkb2N1bWVudGF0aW9uIHBhZ2VzIGZvciBhIHNwZWNpZmljIHZlcnNpb25cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERvY1BhZ2VzRm9yVmVyc2lvbihcbiAgcmVwb0lkOiBzdHJpbmcsXG4gIHZlcnNpb246IG51bWJlcixcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PERvY1BhZ2VbXT4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICAvLyBHZXQgdGhlIGRvY3VtZW50YXRpb24gcmVjb3JkIGZvciB0aGlzIHZlcnNpb25cbiAgY29uc3QgeyBkYXRhOiBkb2N1bWVudGF0aW9uLCBlcnJvcjogZG9jRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCJpZFwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5lcShcInZlcnNpb25cIiwgdmVyc2lvbilcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGRvY0Vycm9yIHx8ICFkb2N1bWVudGF0aW9uKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkRvY3VtZW50YXRpb24gdmVyc2lvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdlcywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicGFnZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImRvY3VtZW50YXRpb25faWRcIiwgZG9jdW1lbnRhdGlvbi5pZClcbiAgICAub3JkZXIoXCJvcmRlcl9pbmRleFwiLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChwYWdlcyA/PyBbXSkgYXMgRG9jUGFnZVtdIH07XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENvbnZlcnNhdGlvbiBTZXJ2aWNlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29udmVyc2F0aW9ucyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4gIGxpbWl0OiBudW1iZXIgPSAyMCxcbiAgdmVyc2lvbjogbnVtYmVyIHwgbnVsbCA9IG51bGwsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxDb252ZXJzYXRpb25bXT4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBsZXQgcXVlcnkgPSBjbGllbnRcbiAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlci5pZCk7XG5cbiAgLy8gRmlsdGVyIGJ5IHZlcnNpb24gaWYgc3BlY2lmaWVkXG4gIGlmICh2ZXJzaW9uICE9PSBudWxsICYmIHZlcnNpb24gIT09IHVuZGVmaW5lZCkge1xuICAgIHF1ZXJ5ID0gcXVlcnkuZXEoXCJyZXBvX3ZlcnNpb25cIiwgdmVyc2lvbik7XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGNvbnZlcnNhdGlvbnMsIGVycm9yIH0gPSBhd2FpdCBxdWVyeVxuICAgIC5vcmRlcihcInVwZGF0ZWRfYXRcIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXG4gICAgLmxpbWl0KGxpbWl0KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChjb252ZXJzYXRpb25zID8/IFtdKSBhcyBDb252ZXJzYXRpb25bXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29udmVyc2F0aW9uQnlJZChcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbj4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGNvbnZlcnNhdGlvbiwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiaWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIGlmICghY29udmVyc2F0aW9uKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkNvbnZlcnNhdGlvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY29udmVyc2F0aW9uIGFzIENvbnZlcnNhdGlvbiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ29udmVyc2F0aW9uKFxuICByZXBvSWQ6IHN0cmluZyxcbiAgdGl0bGU/OiBzdHJpbmcsXG4gIHZlcnNpb24/OiBudW1iZXIgfCBudWxsLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29udmVyc2F0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogY29udmVyc2F0aW9uLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLmluc2VydCh7XG4gICAgICByZXBvX2lkOiByZXBvSWQsXG4gICAgICB1c2VyX2lkOiB1c2VyLmlkLFxuICAgICAgdGl0bGU6IHRpdGxlIHx8IFwiTmV3IENvbnZlcnNhdGlvblwiLFxuICAgICAgcmVwb192ZXJzaW9uOiB2ZXJzaW9uID8/IG51bGwsXG4gICAgfSlcbiAgICAuc2VsZWN0KClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjb252ZXJzYXRpb24gYXMgQ29udmVyc2F0aW9uIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDb252ZXJzYXRpb24oXG4gIGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDx2b2lkPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgIC5kZWxldGUoKVxuICAgIC5lcShcImlkXCIsIGNvbnZlcnNhdGlvbklkKVxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlci5pZCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1bmRlZmluZWQgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbmFtZUNvbnZlcnNhdGlvbihcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbiAgbmV3VGl0bGU6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbj4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGNvbnZlcnNhdGlvbiwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgIC51cGRhdGUoeyB0aXRsZTogbmV3VGl0bGUgfSlcbiAgICAuZXEoXCJpZFwiLCBjb252ZXJzYXRpb25JZClcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY29udmVyc2F0aW9uIGFzIENvbnZlcnNhdGlvbiB9O1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNZXNzYWdlIFNlcnZpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb252ZXJzYXRpb25NZXNzYWdlcyhcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbk1lc3NhZ2VbXT4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IG1lc3NhZ2VzLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJtZXNzYWdlc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiY29udmVyc2F0aW9uX2lkXCIsIGNvbnZlcnNhdGlvbklkKVxuICAgIC5vcmRlcihcImNyZWF0ZWRfYXRcIiwgeyBhc2NlbmRpbmc6IHRydWUgfSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiAobWVzc2FnZXMgPz8gW10pIGFzIENvbnZlcnNhdGlvbk1lc3NhZ2VbXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTWVzc2FnZShcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbiAgcm9sZTogXCJ1c2VyXCIgfCBcImFzc2lzdGFudFwiLFxuICBjb250ZW50OiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxDb252ZXJzYXRpb25NZXNzYWdlPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogbWVzc2FnZSwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwibWVzc2FnZXNcIilcbiAgICAuaW5zZXJ0KHtcbiAgICAgIGNvbnZlcnNhdGlvbl9pZDogY29udmVyc2F0aW9uSWQsXG4gICAgICByb2xlLFxuICAgICAgY29udGVudCxcbiAgICB9KVxuICAgIC5zZWxlY3QoKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSB0aGUgY29udmVyc2F0aW9uJ3MgdXBkYXRlZF9hdCB0aW1lc3RhbXBcbiAgYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLnVwZGF0ZSh7IHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSB9KVxuICAgIC5lcShcImlkXCIsIGNvbnZlcnNhdGlvbklkKTtcblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBtZXNzYWdlIGFzIENvbnZlcnNhdGlvbk1lc3NhZ2UgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVDb2RlU25pcHBldHMoXG4gIGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsXG4gIG1lc3NhZ2VJZDogc3RyaW5nLFxuICBzbmlwcGV0czogQXJyYXk8eyBmaWxlOiBzdHJpbmc7IGNvZGU6IHN0cmluZyB9Pixcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvZGVTbmlwcGV0W10+PiB7XG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qgc25pcHBldHNUb0luc2VydCA9IHNuaXBwZXRzLm1hcCgoc25pcHBldCkgPT4gKHtcbiAgICBjb252ZXJzYXRpb25faWQ6IGNvbnZlcnNhdGlvbklkLFxuICAgIG1lc3NhZ2VfaWQ6IG1lc3NhZ2VJZCxcbiAgICBmaWxlX3BhdGg6IHNuaXBwZXQuZmlsZSxcbiAgICBjb2RlX2NvbnRlbnQ6IHNuaXBwZXQuY29kZSxcbiAgICBsYW5ndWFnZTogc25pcHBldC5maWxlLnNwbGl0KFwiLlwiKS5wb3AoKSB8fCBudWxsLFxuICB9KSk7XG5cbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbShcImNvZGVfc25pcHBldHNcIilcbiAgICAuaW5zZXJ0KHNuaXBwZXRzVG9JbnNlcnQpXG4gICAgLnNlbGVjdCgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogZGF0YSBhcyBDb2RlU25pcHBldFtdIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb2RlU25pcHBldHNGb3JDb252ZXJzYXRpb24oXG4gIGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxDb2RlU25pcHBldFtdPj4ge1xuICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oXCJjb2RlX3NuaXBwZXRzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJjb252ZXJzYXRpb25faWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgLm9yZGVyKFwiY3JlYXRlZF9hdFwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBkYXRhIGFzIENvZGVTbmlwcGV0W10gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNvZGVTbmlwcGV0KFxuICBzbmlwcGV0SWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PG51bGw+PiB7XG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbShcImNvZGVfc25pcHBldHNcIilcbiAgICAuZGVsZXRlKClcbiAgICAuZXEoXCJpZFwiLCBzbmlwcGV0SWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogbnVsbCB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5kZXhSZXBvc2l0b3J5KFxuICByZXBvSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PHZvaWQ+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBpbnN0YWxsYXRpb24sIGVycm9yOiBpbnN0YWxsYXRpb25FcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJnaXRodWJfaW5zdGFsbGF0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiaW5zdGFsbGVkX2J5XCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghaW5zdGFsbGF0aW9uIHx8IGluc3RhbGxhdGlvbkVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkdpdGh1YiBBcHAgSW5zdGFsbGF0aW9uIG5vdCBmb3VuZCFcIiB9O1xuICB9XG5cbiAgLy9mZXRjaCByZXBvXG5cbiAgY29uc3QgcmVwb1Jlc3VsdCA9IGF3YWl0IGdldFJlcG9XaXRoU3RhdHVzKHJlcG9JZCk7XG5cbiAgaWYgKCFyZXBvUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHJlcG9SZXN1bHQuZXJyb3IgfTtcbiAgfVxuXG4gIGNvbnN0IHJlcG9VcmwgPSByZXBvUmVzdWx0LmRhdGEucmVwb191cmw7XG4gIGNvbnN0IGluc3RhbGxhdGlvbklkID0gaW5zdGFsbGF0aW9uLmluc3RhbGxhdGlvbl9pZDtcblxuICAvLyBHZXQgdGhlIGxhdGVzdCB2ZXJzaW9uIG51bWJlciBmb3IgdGhpcyByZXBvXG4gIGNvbnN0IHsgZGF0YTogbGF0ZXN0RG9jIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwidmVyc2lvblwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5vcmRlcihcInZlcnNpb25cIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXG4gICAgLmxpbWl0KDEpXG4gICAgLnNpbmdsZSgpO1xuXG4gIC8vIEluY3JlbWVudCB2ZXJzaW9uIChzdGFydCBhdCAxIGlmIG5vIHByZXZpb3VzIHZlcnNpb25zKVxuICBjb25zdCBuZXh0VmVyc2lvbiA9IChsYXRlc3REb2M/LnZlcnNpb24gPz8gMCkgKyAxO1xuXG4gIC8vbWFyayB0aGUgcmVwb3NpdG9yeSBhcyBpbmRleGluZyBpbiBzdXBhYmFzZSBmaXJzdFxuICBjb25zdCB7IGVycm9yOiB1cGRhdGVFcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAudXBkYXRlKHsgaW5kZXhfc3RhdHVzOiBcImluZGV4aW5nXCIgfSlcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpO1xuXG4gIGlmICh1cGRhdGVFcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IodXBkYXRlRXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogdXBkYXRlRXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgLy8gQ2FsbCB0aGUgYmFja2VuZCB0byBzdGFydCBpbmRleGluZyAoZmlyZS1hbmQtZm9yZ2V0KVxuICAvLyBEb24ndCBhd2FpdCBvciB0aHJvdyBlcnJvcnMgc2luY2UgdGhpcyBpcyBhIGxvbmctcnVubmluZyBvcGVyYXRpb25cbiAgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L3JlcG9zL2luZGV4YCwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICByZXBvX3VybDogcmVwb1VybCxcbiAgICAgIHJlcG9faWQ6IHJlcG9JZCxcbiAgICAgIHVzZXJfaWQ6IHVzZXIuaWQsXG4gICAgICBpbnN0YWxsYXRpb25faWQ6IGluc3RhbGxhdGlvbklkLFxuICAgICAgYnJhbmNoOiBcIm1haW5cIixcbiAgICAgIHZlcnNpb246IG5leHRWZXJzaW9uLFxuICAgIH0pLFxuICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAvLyBMb2cgdGhlIGVycm9yIGJ1dCBkb24ndCBmYWlsIHRoZSByZXF1ZXN0XG4gICAgY29uc29sZS5lcnJvcihcIkluZGV4aW5nIHJlcXVlc3QgZmFpbGVkOlwiLCBlcnJvcik7XG4gICAgLy8gVGhlIGJhY2tlbmQgc2hvdWxkIGhhbmRsZSB1cGRhdGluZyB0aGUgcmVwbyBzdGF0dXMgb24gZmFpbHVyZVxuICB9KTtcblxuICAvLyBSZXR1cm4gc3VjY2VzcyBpbW1lZGlhdGVseSAtIHRoZSBpbmRleGluZyB3aWxsIGhhcHBlbiBpbiB0aGUgYmFja2dyb3VuZFxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1bmRlZmluZWQgfTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiMlNBaTZCc0IifQ==
}),
"[project]/src/lib/services/data:4d1ccc [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"705308f3cacbf0c56038f0d34b9ad3b7e1087a50f1":"createMessage"},"src/lib/services/repoService.ts",""] */ __turbopack_context__.s([
    "createMessage",
    ()=>createMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var createMessage = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("705308f3cacbf0c56038f0d34b9ad3b7e1087a50f1", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createMessage"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcmVwb1NlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAL3V0aWxzL3N1cGFiYXNlL3NlcnZlclwiO1xuaW1wb3J0IHtcbiAgUmVwbyxcbiAgRG9jdW1lbnRhdGlvbixcbiAgRG9jUGFnZSxcbiAgQ29udmVyc2F0aW9uLFxuICBDb252ZXJzYXRpb25NZXNzYWdlLFxuICBDb2RlU25pcHBldCxcbn0gZnJvbSBcIkAvYXBwL3R5cGVzL3N1cGFiYXNlXCI7XG5pbXBvcnQgeyBBY3Rpb25SZXN1bHQgfSBmcm9tIFwiQC9hcHAvdHlwZXMvYWN0aW9uXCI7XG5pbXBvcnQge1xuICB2ZXJpZnlHaXRodWJSZXBvQWNjZXNzLFxuICB2ZXJpZnlHaXRMYWJSZXBvQWNjZXNzLFxufSBmcm9tIFwiLi9naXRQcm92aWRlclNlcnZpY2VcIjtcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHBhcnNlIEdpdEh1YiBVUkxzXG5mdW5jdGlvbiBwYXJzZUdpdEh1YlVybCh1cmw6IHN0cmluZyk6IHsgb3duZXI6IHN0cmluZzsgcmVwbzogc3RyaW5nIH0ge1xuICB0cnkge1xuICAgIC8vIEhhbmRsZSBtdWx0aXBsZSBmb3JtYXRzOlxuICAgIC8vIC0gaHR0cHM6Ly9naXRodWIuY29tL293bmVyL3JlcG9cbiAgICAvLyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9vd25lci9yZXBvLmdpdFxuICAgIC8vIC0gZ2l0QGdpdGh1Yi5jb206b3duZXIvcmVwby5naXRcblxuICAgIHVybCA9IHVybC50cmltKCkucmVwbGFjZSgvXFwuZ2l0JC8sIFwiXCIpO1xuXG4gICAgaWYgKHVybC5pbmNsdWRlcyhcImdpdGh1Yi5jb20vXCIpKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IHVybC5zcGxpdChcImdpdGh1Yi5jb20vXCIpWzFdLnNwbGl0KFwiL1wiKTtcbiAgICAgIHJldHVybiB7IG93bmVyOiBwYXJ0c1swXSwgcmVwbzogcGFydHNbMV0gfTtcbiAgICB9XG5cbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoXCJnaXRAZ2l0aHViLmNvbTpcIikpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gdXJsLnJlcGxhY2UoXCJnaXRAZ2l0aHViLmNvbTpcIiwgXCJcIikuc3BsaXQoXCIvXCIpO1xuICAgICAgcmV0dXJuIHsgb3duZXI6IHBhcnRzWzBdLCByZXBvOiBwYXJ0c1sxXSB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IG93bmVyOiBcIlwiLCByZXBvOiBcIlwiIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgb3duZXI6IFwiXCIsIHJlcG86IFwiXCIgfTtcbiAgfVxufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gcGFyc2UgR2l0TGFiIFVSTHNcbmZ1bmN0aW9uIHBhcnNlR2l0TGFiVXJsKHVybDogc3RyaW5nKTogeyBvd25lcjogc3RyaW5nOyByZXBvOiBzdHJpbmcgfSB7XG4gIHRyeSB7XG4gICAgLy8gSGFuZGxlIG11bHRpcGxlIGZvcm1hdHM6XG4gICAgLy8gLSBodHRwczovL2dpdGxhYi5jb20vb3duZXIvcmVwb1xuICAgIC8vIC0gaHR0cHM6Ly9naXRsYWIuY29tL293bmVyL3N1Ymdyb3VwL3JlcG9cbiAgICAvLyAtIGh0dHBzOi8vZ2l0bGFiLmNvbS9vd25lci9yZXBvLmdpdFxuICAgIC8vIC0gZ2l0QGdpdGxhYi5jb206b3duZXIvcmVwby5naXRcbiAgICAvLyAtIFNlbGYtaG9zdGVkOiBodHRwczovL2dpdGxhYi5leGFtcGxlLmNvbS9vd25lci9yZXBvXG5cbiAgICB1cmwgPSB1cmwudHJpbSgpLnJlcGxhY2UoL1xcLmdpdCQvLCBcIlwiKTtcblxuICAgIC8vIEhhbmRsZSBIVFRQUyBVUkxzIChnaXRsYWIuY29tIG9yIHNlbGYtaG9zdGVkKVxuICAgIGlmICh1cmwuaW5jbHVkZXMoXCJnaXRsYWIuY29tL1wiKSB8fCAvZ2l0bGFiXFwuW14vXStcXC8vLnRlc3QodXJsKSkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgcGF0aCBhZnRlciB0aGUgZG9tYWluXG4gICAgICBjb25zdCBtYXRjaCA9IHVybC5tYXRjaCgvZ2l0bGFiW14vXSpcXC8oLispLyk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgY29uc3QgcGF0aFBhcnRzID0gbWF0Y2hbMV0uc3BsaXQoXCIvXCIpO1xuICAgICAgICAvLyBHaXRMYWIgc3VwcG9ydHMgbmVzdGVkIGdyb3Vwcywgc28gd2UgbmVlZCB0byBoYW5kbGU6XG4gICAgICAgIC8vIC0gb3duZXIvcmVwbyAoMiBwYXJ0cylcbiAgICAgICAgLy8gLSBvd25lci9zdWJncm91cC9yZXBvICgzKyBwYXJ0cylcbiAgICAgICAgaWYgKHBhdGhQYXJ0cy5sZW5ndGggPj0gMikge1xuICAgICAgICAgIC8vIFRha2UgZXZlcnl0aGluZyBleGNlcHQgdGhlIGxhc3QgcGFydCBhcyBvd25lci9ncm91cFxuICAgICAgICAgIGNvbnN0IHJlcG8gPSBwYXRoUGFydHNbcGF0aFBhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IG93bmVyID0gcGF0aFBhcnRzLnNsaWNlKDAsIC0xKS5qb2luKFwiL1wiKTtcbiAgICAgICAgICByZXR1cm4geyBvd25lciwgcmVwbyB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIFNTSCBVUkxzXG4gICAgaWYgKHVybC5zdGFydHNXaXRoKFwiZ2l0QGdpdGxhYi5jb206XCIpIHx8IC9naXRAZ2l0bGFiXFwuW146XSs6Ly50ZXN0KHVybCkpIHtcbiAgICAgIGNvbnN0IG1hdGNoID0gdXJsLm1hdGNoKC9naXRAZ2l0bGFiW146XSo6KC4rKS8pO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGNvbnN0IHBhdGhQYXJ0cyA9IG1hdGNoWzFdLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgaWYgKHBhdGhQYXJ0cy5sZW5ndGggPj0gMikge1xuICAgICAgICAgIGNvbnN0IHJlcG8gPSBwYXRoUGFydHNbcGF0aFBhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IG93bmVyID0gcGF0aFBhcnRzLnNsaWNlKDAsIC0xKS5qb2luKFwiL1wiKTtcbiAgICAgICAgICByZXR1cm4geyBvd25lciwgcmVwbyB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgb3duZXI6IFwiXCIsIHJlcG86IFwiXCIgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBvd25lcjogXCJcIiwgcmVwbzogXCJcIiB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXBvc0J5T3JnYW5pemF0aW9uSWQoXG4gIG9yZ2FuaXphdGlvbklkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHVzZXIgPSBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJvcmdhbml6YXRpb25faWRcIiwgb3JnYW5pemF0aW9uSWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKGRhdGEgPz8gW10pIGFzIFJlcG9bXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUmVwb1ZpYUdpdGh1YihcbiAgZm9ybURhdGE6IEZvcm1EYXRhLFxuICBvcmdJZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8UmVwbyB8IHVuZGVmaW5lZD4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IHByb3ZpZGVyID0gZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IHVybCA9IGZvcm1EYXRhLmdldChcImdpdGh1Yi11cmxcIikgYXMgc3RyaW5nO1xuXG4gIGlmICghbmFtZSkge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJOYW1lIGlzIHJlcXVpcmVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGluc3RhbGxhdGlvbiB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJnaXRodWJfaW5zdGFsbGF0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiaW5zdGFsbGVkX2J5XCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghaW5zdGFsbGF0aW9uKSB7XG4gICAgLy8gTm8gR2l0SHViIEFwcCBpbnN0YWxsYXRpb24gLSBwcm9tcHQgdXNlciB0byBpbnN0YWxsXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiSW5zdGFsbGF0aW9uIE5lZWRlZFwiLFxuICAgIH07XG4gIH1cblxuICAvL3BhcnNlIHVybCBmb3Igb3duZXIgYW5kIHJlcG9cbiAgY29uc3QgeyBvd25lciwgcmVwbzogcmVwb05hbWUgfSA9IHBhcnNlR2l0SHViVXJsKHVybCk7XG5cbiAgY29uc3QgaGFzQWNjZXNzID0gYXdhaXQgdmVyaWZ5R2l0aHViUmVwb0FjY2VzcyhcbiAgICBpbnN0YWxsYXRpb24uaW5zdGFsbGF0aW9uX2lkLFxuICAgIG93bmVyLFxuICAgIHJlcG9OYW1lLFxuICApO1xuXG4gIGlmICghaGFzQWNjZXNzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiQWNjZXNzIERlbmllZFwiLFxuICAgIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IHJlcG8sIGVycm9yOiByZXBvRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLmluc2VydCh7XG4gICAgICBuYW1lLFxuICAgICAgcHJvdmlkZXIsXG4gICAgICByZXBvX3VybDogdXJsLFxuICAgICAgb3JnYW5pemF0aW9uX2lkOiBvcmdJZCxcbiAgICAgIGluZGV4ZWRfYnk6IHVzZXIuaWQsXG4gICAgICBpbmRleF9zdGF0dXM6IFwibm90IGluZGV4ZWRcIixcbiAgICB9KVxuICAgIC5zZWxlY3QoKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAocmVwb0Vycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiByZXBvRXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVwbyBhcyBSZXBvIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZXBvVmlhR2l0bGFiKFxuICBmb3JtRGF0YTogRm9ybURhdGEsXG4gIG9yZ0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvIHwgdW5kZWZpbmVkPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgY29uc3QgcHJvdmlkZXIgPSBmb3JtRGF0YS5nZXQoXCJ0eXBlXCIpIGFzIHN0cmluZztcbiAgY29uc3QgdXJsID0gZm9ybURhdGEuZ2V0KFwiZ2l0bGFiLXVybFwiKSBhcyBzdHJpbmc7XG5cbiAgLy8gVmFsaWRhdGUgaW5wdXRzXG4gIGlmICghbmFtZSB8fCBuYW1lLnRyaW0oKSA9PT0gXCJcIikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJSZXBvc2l0b3J5IG5hbWUgaXMgcmVxdWlyZWRcIiB9O1xuICB9XG5cbiAgaWYgKCF1cmwgfHwgdXJsLnRyaW0oKSA9PT0gXCJcIikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJHaXRMYWIgVVJMIGlzIHJlcXVpcmVkXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogaW5zdGFsbGF0aW9uIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImdpdGxhYl9pbnN0YWxsYXRpb25zXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpbnN0YWxsZWRfYnlcIiwgdXNlci5pZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKCFpbnN0YWxsYXRpb24pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiSW5zdGFsbGF0aW9uIE5lZWRlZFwiIH07XG4gIH1cblxuICBjb25zdCB7IG93bmVyLCByZXBvOiByZXBvTmFtZSB9ID0gcGFyc2VHaXRMYWJVcmwodXJsKTtcblxuICAvL3ZlcmlmeSBhY2Nlc3NcbiAgY29uc3QgaGFzQWNjZXNzID0gYXdhaXQgdmVyaWZ5R2l0TGFiUmVwb0FjY2VzcyhcbiAgICBpbnN0YWxsYXRpb24uYWNjZXNzX3Rva2VuLFxuICAgIG93bmVyLFxuICAgIHJlcG9OYW1lLFxuICApO1xuXG4gIGlmICghaGFzQWNjZXNzKSB7XG4gICAgaWYgKGluc3RhbGxhdGlvbi5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogXCJBY2Nlc3MgcmVxdWlyZWQhXCIsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yOiBcIkFjY2VzcyBkZW5pZWQhXCIsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3I6IHJlcG9FcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAuaW5zZXJ0KHtcbiAgICAgIG5hbWUsXG4gICAgICBwcm92aWRlcixcbiAgICAgIHJlcG9fdXJsOiB1cmwsXG4gICAgICBvcmdhbml6YXRpb25faWQ6IG9yZ0lkLFxuICAgICAgaW5kZXhlZF9ieTogdXNlci5pZCxcbiAgICAgIGluZGV4X3N0YXR1czogXCJub3QgaW5kZXhlZFwiLFxuICAgIH0pXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChyZXBvRXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHJlcG9FcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXBvIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZXBvVmlhTG9jYWxGaWxlKFxuICBmb3JtRGF0YTogRm9ybURhdGEsXG4gIG9yZ0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgY29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldChcImZpbGVcIikgYXMgRmlsZTtcblxuICAvLyBWYWxpZGF0ZSBpbnB1dHNcbiAgaWYgKCFuYW1lIHx8IG5hbWUudHJpbSgpID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlJlcG9zaXRvcnkgbmFtZSBpcyByZXF1aXJlZFwiIH07XG4gIH1cblxuICBpZiAoIWZpbGUpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmlsZSBpcyByZXF1aXJlZFwiIH07XG4gIH1cblxuICAvLyBWYWxpZGF0ZSBmaWxlIHR5cGVcbiAgaWYgKCFmaWxlLm5hbWUuZW5kc1dpdGgoXCIuemlwXCIpKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIk9ubHkgLnppcCBmaWxlcyBhcmUgYWxsb3dlZFwiIH07XG4gIH1cblxuICAvLyBWYWxpZGF0ZSBmaWxlIHNpemUgKG1heCAxMDBNQilcbiAgY29uc3QgbWF4U2l6ZSA9IDEwMCAqIDEwMjQgKiAxMDI0OyAvLyAxMDBNQiBpbiBieXRlc1xuICBpZiAoZmlsZS5zaXplID4gbWF4U2l6ZSkge1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yOiBcIkZpbGUgc2l6ZSBleGNlZWRzIDEwME1CIGxpbWl0XCIsXG4gICAgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gR2VuZXJhdGUgYSB1bmlxdWUgZmlsZSBuYW1lIHRvIHByZXZlbnQgY29sbGlzaW9uc1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IERhdGUubm93KCk7XG4gICAgY29uc3Qgc2FuaXRpemVkTmFtZSA9IG5hbWUudHJpbSgpLnJlcGxhY2UoL1teYS16MC05LV9dL2dpLCBcIl9cIik7XG4gICAgY29uc3QgZmlsZU5hbWUgPSBgJHtzYW5pdGl6ZWROYW1lfV8ke3RpbWVzdGFtcH1fJHtmaWxlLm5hbWV9YDtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGAke29yZ0lkfS8ke2ZpbGVOYW1lfWA7XG5cbiAgICAvLyBVcGxvYWQgZmlsZSB0byBTdXBhYmFzZSBTdG9yYWdlXG4gICAgY29uc3QgeyBlcnJvcjogdXBsb2FkRXJyb3IgfSA9IGF3YWl0IGNsaWVudC5zdG9yYWdlXG4gICAgICAuZnJvbShcImxvY2FsX3JlcG9zXCIpXG4gICAgICAudXBsb2FkKGZpbGVQYXRoLCBmaWxlLCB7XG4gICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL3ppcFwiLFxuICAgICAgICB1cHNlcnQ6IGZhbHNlLFxuICAgICAgfSk7XG5cbiAgICBpZiAodXBsb2FkRXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJVcGxvYWQgZXJyb3I6XCIsIHVwbG9hZEVycm9yKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogYEZpbGUgdXBsb2FkIGZhaWxlZDogJHt1cGxvYWRFcnJvci5tZXNzYWdlfWAsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEdldCB0aGUgcHVibGljIFVSTCBmb3IgdGhlIHVwbG9hZGVkIGZpbGVcbiAgICBjb25zdCB7IGRhdGE6IHVybERhdGEgfSA9IGNsaWVudC5zdG9yYWdlXG4gICAgICAuZnJvbShcImxvY2FsX3JlcG9zXCIpXG4gICAgICAuZ2V0UHVibGljVXJsKGZpbGVQYXRoKTtcblxuICAgIC8vIENyZWF0ZSByZXBvc2l0b3J5IHJlY29yZCBpbiBkYXRhYmFzZVxuICAgIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3I6IHJlcG9FcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgICAgLmluc2VydCh7XG4gICAgICAgIG5hbWU6IG5hbWUudHJpbSgpLFxuICAgICAgICBwcm92aWRlcjogXCJsb2NhbFwiLFxuICAgICAgICByZXBvX3VybDogbnVsbCxcbiAgICAgICAgb2JqZWN0X3VybDogdXJsRGF0YS5wdWJsaWNVcmwsXG4gICAgICAgIG9yZ2FuaXphdGlvbl9pZDogb3JnSWQsXG4gICAgICAgIGluZGV4ZWRfYnk6IHVzZXIuaWQsXG4gICAgICAgIGluZGV4X3N0YXR1czogXCJub3QgaW5kZXhlZFwiLFxuICAgICAgfSlcbiAgICAgIC5zZWxlY3QoKVxuICAgICAgLnNpbmdsZSgpO1xuXG4gICAgaWYgKHJlcG9FcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIlJlcG9zaXRvcnkgY3JlYXRpb24gZXJyb3I6XCIsIHJlcG9FcnJvcik7XG4gICAgICAvLyBBdHRlbXB0IHRvIGNsZWFuIHVwIHVwbG9hZGVkIGZpbGVcbiAgICAgIGF3YWl0IGNsaWVudC5zdG9yYWdlLmZyb20oXCJsb2NhbF9yZXBvc1wiKS5yZW1vdmUoW2ZpbGVQYXRoXSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IGBSZXBvc2l0b3J5IGNyZWF0aW9uIGZhaWxlZDogJHtyZXBvRXJyb3IubWVzc2FnZX1gLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXBvIGFzIFJlcG8gfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiVW5leHBlY3RlZCBlcnJvcjpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yOlxuICAgICAgICBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZFwiLFxuICAgIH07XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUmVwb3NpdG9yeSBNYW5hZ2VtZW50IFNlcnZpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXBvV2l0aFN0YXR1cyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFyZXBvKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlJlcG9zaXRvcnkgbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlcG8gYXMgUmVwbyB9O1xufVxuXG50eXBlIFVwZGF0ZURhdGEgPSB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHJlcG9fdXJsPzogc3RyaW5nO1xuICBvYmplY3RfdXJsPzogc3RyaW5nO1xuICBpbmRleF9zdGF0dXM/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUmVwb1NldHRpbmdzKFxuICByZXBvSWQ6IHN0cmluZyxcbiAgc2V0dGluZ3M6IHsgbmFtZT86IHN0cmluZzsgcmVwb191cmw/OiBzdHJpbmc7IGZpbGU/OiBGaWxlIH0sXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIC8vIEdldCB0aGUgY3VycmVudCByZXBvIHRvIGNoZWNrIGl0cyBwcm92aWRlciB0eXBlXG4gIGNvbnN0IHsgZGF0YTogY3VycmVudFJlcG8gfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghY3VycmVudFJlcG8pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUmVwb3NpdG9yeSBub3QgZm91bmQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZURhdGE6IFVwZGF0ZURhdGEgPSB7fTtcblxuICAvLyBIYW5kbGUgbmFtZSB1cGRhdGVcbiAgaWYgKHNldHRpbmdzLm5hbWUpIHtcbiAgICB1cGRhdGVEYXRhLm5hbWUgPSBzZXR0aW5ncy5uYW1lO1xuICB9XG5cbiAgLy8gSGFuZGxlIEdpdEh1YiBVUkwgdXBkYXRlXG4gIGlmIChzZXR0aW5ncy5yZXBvX3VybCAmJiBjdXJyZW50UmVwby5wcm92aWRlciA9PT0gXCJnaXRodWJcIikge1xuICAgIGNvbnN0IHsgb3duZXIsIHJlcG8gfSA9IHBhcnNlR2l0SHViVXJsKHNldHRpbmdzLnJlcG9fdXJsKTtcblxuICAgIGlmICghb3duZXIgfHwgIXJlcG8pIHtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJJbnZhbGlkIEdpdEh1YiBVUkwgZm9ybWF0IVwiIH07XG4gICAgfVxuXG4gICAgLy8gVmVyaWZ5IGFjY2VzcyB0byB0aGUgbmV3IHJlcG9cbiAgICBjb25zdCB7IGRhdGE6IGluc3RhbGxhdGlvbiB9ID0gYXdhaXQgY2xpZW50XG4gICAgICAuZnJvbShcImdpdGh1Yl9pbnN0YWxsYXRpb25zXCIpXG4gICAgICAuc2VsZWN0KFwiKlwiKVxuICAgICAgLmVxKFwiaW5zdGFsbGVkX2J5XCIsIHVzZXIuaWQpXG4gICAgICAuc2luZ2xlKCk7XG5cbiAgICBpZiAoIWluc3RhbGxhdGlvbikge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkdpdEh1YiBBcHAgbm90IGluc3RhbGxlZCFcIiB9O1xuICAgIH1cblxuICAgIGNvbnN0IGhhc0FjY2VzcyA9IGF3YWl0IHZlcmlmeUdpdGh1YlJlcG9BY2Nlc3MoXG4gICAgICBpbnN0YWxsYXRpb24uaW5zdGFsbGF0aW9uX2lkLnRvU3RyaW5nKCksXG4gICAgICBvd25lcixcbiAgICAgIHJlcG8sXG4gICAgKTtcblxuICAgIGlmICghaGFzQWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6XG4gICAgICAgICAgXCJDYW5ub3QgYWNjZXNzIHRoaXMgcmVwb3NpdG9yeS4gTWFrZSBzdXJlIHRoZSBHaXRIdWIgQXBwIGlzIGluc3RhbGxlZCBmb3IgdGhpcyByZXBvc2l0b3J5LlwiLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICB1cGRhdGVEYXRhLnJlcG9fdXJsID0gc2V0dGluZ3MucmVwb191cmw7XG4gICAgdXBkYXRlRGF0YS5pbmRleF9zdGF0dXMgPSBcIm5vdCBpbmRleGVkXCI7IC8vIFRyaWdnZXIgcmUtaW5kZXhpbmdcbiAgfVxuXG4gIC8vIEhhbmRsZSBsb2NhbCBmaWxlIHVwbG9hZFxuICBpZiAoc2V0dGluZ3MuZmlsZSAmJiBjdXJyZW50UmVwby5wcm92aWRlciA9PT0gXCJsb2NhbFwiKSB7XG4gICAgY29uc3QgZmlsZSA9IHNldHRpbmdzLmZpbGU7XG4gICAgY29uc3QgZmlsZUV4dCA9IGZpbGUubmFtZS5zcGxpdChcIi5cIikucG9wKCk7XG5cbiAgICBpZiAoZmlsZUV4dCAhPT0gXCJ6aXBcIikge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIk9ubHkgLnppcCBmaWxlcyBhcmUgYWxsb3dlZCFcIiB9O1xuICAgIH1cblxuICAgIC8vIFVwbG9hZCB0byBTdXBhYmFzZSBTdG9yYWdlXG4gICAgY29uc3QgZmlsZU5hbWUgPSBgJHtyZXBvSWR9LSR7RGF0ZS5ub3coKX0uemlwYDtcbiAgICBjb25zdCB7IGRhdGE6IHVwbG9hZERhdGEsIGVycm9yOiB1cGxvYWRFcnJvciB9ID0gYXdhaXQgY2xpZW50LnN0b3JhZ2VcbiAgICAgIC5mcm9tKFwibG9jYWxfcmVwb3NcIilcbiAgICAgIC51cGxvYWQoZmlsZU5hbWUsIGZpbGUpO1xuXG4gICAgaWYgKHVwbG9hZEVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKHVwbG9hZEVycm9yKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gdXBsb2FkIGZpbGUhXCIgfTtcbiAgICB9XG5cbiAgICAvLyBHZXQgcHVibGljIFVSTFxuICAgIGNvbnN0IHsgZGF0YTogdXJsRGF0YSB9ID0gY2xpZW50LnN0b3JhZ2VcbiAgICAgIC5mcm9tKFwibG9jYWxfcmVwb3NcIilcbiAgICAgIC5nZXRQdWJsaWNVcmwoZmlsZU5hbWUpO1xuXG4gICAgdXBkYXRlRGF0YS5vYmplY3RfdXJsID0gdXJsRGF0YS5wdWJsaWNVcmw7XG4gICAgdXBkYXRlRGF0YS5pbmRleF9zdGF0dXMgPSBcInBlbmRpbmdcIjsgLy8gVHJpZ2dlciByZS1pbmRleGluZ1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSByZXBvc2l0b3J5XG4gIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnVwZGF0ZSh1cGRhdGVEYXRhKVxuICAgIC5lcShcImlkXCIsIHJlcG9JZClcbiAgICAuc2VsZWN0KClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXBvIGFzIFJlcG8gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVJlcG8oXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8eyBvcmdhbml6YXRpb25JZDogc3RyaW5nIH0+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gRmV0Y2ggdGhlIG9yZ2FuaXphdGlvbl9pZCBiZWZvcmUgZGVsZXRpbmdcbiAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvcjogcmVwb0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgIC5zZWxlY3QoXCJvcmdhbml6YXRpb25faWRcIilcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChyZXBvRXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKHJlcG9FcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiByZXBvRXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFyZXBvKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlJlcG9zaXRvcnkgbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IGNsaWVudC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpLmRlbGV0ZSgpLmVxKFwiaWRcIiwgcmVwb0lkKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHsgb3JnYW5pemF0aW9uSWQ6IHJlcG8ub3JnYW5pemF0aW9uX2lkIH0gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRyaWdnZXJSZWluZGV4KFxuICByZXBvSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PHZvaWQ+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSBpbmRleF9zdGF0dXMgdG8gJ3BlbmRpbmcnIHRvIHRyaWdnZXIgcmVpbmRleGluZ1xuICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgIC51cGRhdGUoeyBpbmRleF9zdGF0dXM6IFwicGVuZGluZ1wiIH0pXG4gICAgLmVxKFwiaWRcIiwgcmVwb0lkKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIC8vIFRPRE86IFRyaWdnZXIgYWN0dWFsIGluZGV4aW5nIGpvYi93ZWJob29rL3F1ZXVlIGhlcmVcbiAgLy8gVGhpcyBjb3VsZCBiZSBhbiBBUEkgY2FsbCB0byB5b3VyIGluZGV4aW5nIHNlcnZpY2VcblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1bmRlZmluZWQgfTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRG9jdW1lbnRhdGlvbiBTZXJ2aWNlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jdW1lbnRhdGlvbihcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2N1bWVudGF0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogZG9jdW1lbnRhdGlvbiwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFkb2N1bWVudGF0aW9uKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkRvY3VtZW50YXRpb24gbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGRvY3VtZW50YXRpb24gYXMgRG9jdW1lbnRhdGlvbiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jUGFnZXMoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jUGFnZVtdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIC8vIEdldCB0aGUgbGF0ZXN0IGRvY3VtZW50YXRpb24gdmVyc2lvbiBmb3IgdGhpcyByZXBvXG4gIGNvbnN0IHsgZGF0YTogZG9jdW1lbnRhdGlvbiwgZXJyb3I6IGRvY0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwiaWRcIilcbiAgICAuZXEoXCJyZXBvX2lkXCIsIHJlcG9JZClcbiAgICAub3JkZXIoXCJ2ZXJzaW9uXCIsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxuICAgIC5saW1pdCgxKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZG9jRXJyb3IgfHwgIWRvY3VtZW50YXRpb24pIHtcbiAgICBjb25zb2xlLmVycm9yKGRvY0Vycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRG9jdW1lbnRhdGlvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdlcywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicGFnZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImRvY3VtZW50YXRpb25faWRcIiwgZG9jdW1lbnRhdGlvbi5pZClcbiAgICAub3JkZXIoXCJvcmRlcl9pbmRleFwiLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChwYWdlcyA/PyBbXSkgYXMgRG9jUGFnZVtdIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2NQYWdlQnlJZChcbiAgcGFnZUlkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2NQYWdlPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcGFnZSwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jX3BhZ2VzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpZFwiLCBwYWdlSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFwYWdlKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlBhZ2Ugbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHBhZ2UgYXMgRG9jUGFnZSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jUGFnZXNIaWVyYXJjaGljYWwoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jUGFnZVtdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIC8vIEZpcnN0IGdldCB0aGUgZG9jdW1lbnRhdGlvbiBJRCBmb3IgdGhpcyByZXBvXG4gIGNvbnN0IHsgZGF0YTogZG9jdW1lbnRhdGlvbiwgZXJyb3I6IGRvY0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwiaWRcIilcbiAgICAuZXEoXCJyZXBvX2lkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGRvY0Vycm9yIHx8ICFkb2N1bWVudGF0aW9uKSB7XG4gICAgY29uc29sZS5lcnJvcihkb2NFcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkRvY3VtZW50YXRpb24gbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcGFnZXMsIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY19wYWdlc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiZG9jdW1lbnRhdGlvbl9pZFwiLCBkb2N1bWVudGF0aW9uLmlkKVxuICAgIC5vcmRlcihcIm9yZGVyX2luZGV4XCIsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgLy8gUGFnZXMgYXJlIGFscmVhZHkgc29ydGVkIGJ5IG9yZGVyX2luZGV4XG4gIC8vIFRoZSBwYXJlbnRfcGFnZV9pZCBmaWVsZCBtYWludGFpbnMgdGhlIGhpZXJhcmNoeVxuICAvLyBGcm9udGVuZCBjYW4gdXNlIHRoaXMgdG8gcmVuZGVyIHRoZSB0cmVlIHN0cnVjdHVyZVxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiAocGFnZXMgPz8gW10pIGFzIERvY1BhZ2VbXSB9O1xufVxuXG4vKipcbiAqIEdldCBhbGwgZG9jdW1lbnRhdGlvbiB2ZXJzaW9ucyBmb3IgYSByZXBvc2l0b3J5XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2N1bWVudGF0aW9uVmVyc2lvbnMoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jdW1lbnRhdGlvbltdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogdmVyc2lvbnMsIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5vcmRlcihcInZlcnNpb25cIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKHZlcnNpb25zID8/IFtdKSBhcyBEb2N1bWVudGF0aW9uW10gfTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGxhdGVzdCBjb21wbGV0ZWQgZG9jdW1lbnRhdGlvbiB2ZXJzaW9uIGZvciBhIHJlcG9zaXRvcnlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExhdGVzdERvY3VtZW50YXRpb24oXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jdW1lbnRhdGlvbj4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGRvY3VtZW50YXRpb24sIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5vcmRlcihcInZlcnNpb25cIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXG4gICAgLmxpbWl0KDEpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghZG9jdW1lbnRhdGlvbikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJEb2N1bWVudGF0aW9uIG5vdCBmb3VuZFwiIH07XG4gIH1cblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGRvY3VtZW50YXRpb24gYXMgRG9jdW1lbnRhdGlvbiB9O1xufVxuXG4vKipcbiAqIEdldCBkb2N1bWVudGF0aW9uIHBhZ2VzIGZvciBhIHNwZWNpZmljIHZlcnNpb25cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERvY1BhZ2VzRm9yVmVyc2lvbihcbiAgcmVwb0lkOiBzdHJpbmcsXG4gIHZlcnNpb246IG51bWJlcixcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PERvY1BhZ2VbXT4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICAvLyBHZXQgdGhlIGRvY3VtZW50YXRpb24gcmVjb3JkIGZvciB0aGlzIHZlcnNpb25cbiAgY29uc3QgeyBkYXRhOiBkb2N1bWVudGF0aW9uLCBlcnJvcjogZG9jRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCJpZFwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5lcShcInZlcnNpb25cIiwgdmVyc2lvbilcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGRvY0Vycm9yIHx8ICFkb2N1bWVudGF0aW9uKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkRvY3VtZW50YXRpb24gdmVyc2lvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdlcywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicGFnZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImRvY3VtZW50YXRpb25faWRcIiwgZG9jdW1lbnRhdGlvbi5pZClcbiAgICAub3JkZXIoXCJvcmRlcl9pbmRleFwiLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChwYWdlcyA/PyBbXSkgYXMgRG9jUGFnZVtdIH07XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENvbnZlcnNhdGlvbiBTZXJ2aWNlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29udmVyc2F0aW9ucyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4gIGxpbWl0OiBudW1iZXIgPSAyMCxcbiAgdmVyc2lvbjogbnVtYmVyIHwgbnVsbCA9IG51bGwsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxDb252ZXJzYXRpb25bXT4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBsZXQgcXVlcnkgPSBjbGllbnRcbiAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlci5pZCk7XG5cbiAgLy8gRmlsdGVyIGJ5IHZlcnNpb24gaWYgc3BlY2lmaWVkXG4gIGlmICh2ZXJzaW9uICE9PSBudWxsICYmIHZlcnNpb24gIT09IHVuZGVmaW5lZCkge1xuICAgIHF1ZXJ5ID0gcXVlcnkuZXEoXCJyZXBvX3ZlcnNpb25cIiwgdmVyc2lvbik7XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGNvbnZlcnNhdGlvbnMsIGVycm9yIH0gPSBhd2FpdCBxdWVyeVxuICAgIC5vcmRlcihcInVwZGF0ZWRfYXRcIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXG4gICAgLmxpbWl0KGxpbWl0KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChjb252ZXJzYXRpb25zID8/IFtdKSBhcyBDb252ZXJzYXRpb25bXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29udmVyc2F0aW9uQnlJZChcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbj4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGNvbnZlcnNhdGlvbiwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiaWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIGlmICghY29udmVyc2F0aW9uKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkNvbnZlcnNhdGlvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY29udmVyc2F0aW9uIGFzIENvbnZlcnNhdGlvbiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ29udmVyc2F0aW9uKFxuICByZXBvSWQ6IHN0cmluZyxcbiAgdGl0bGU/OiBzdHJpbmcsXG4gIHZlcnNpb24/OiBudW1iZXIgfCBudWxsLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29udmVyc2F0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogY29udmVyc2F0aW9uLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLmluc2VydCh7XG4gICAgICByZXBvX2lkOiByZXBvSWQsXG4gICAgICB1c2VyX2lkOiB1c2VyLmlkLFxuICAgICAgdGl0bGU6IHRpdGxlIHx8IFwiTmV3IENvbnZlcnNhdGlvblwiLFxuICAgICAgcmVwb192ZXJzaW9uOiB2ZXJzaW9uID8/IG51bGwsXG4gICAgfSlcbiAgICAuc2VsZWN0KClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjb252ZXJzYXRpb24gYXMgQ29udmVyc2F0aW9uIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDb252ZXJzYXRpb24oXG4gIGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDx2b2lkPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgIC5kZWxldGUoKVxuICAgIC5lcShcImlkXCIsIGNvbnZlcnNhdGlvbklkKVxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlci5pZCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1bmRlZmluZWQgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbmFtZUNvbnZlcnNhdGlvbihcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbiAgbmV3VGl0bGU6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbj4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGNvbnZlcnNhdGlvbiwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgIC51cGRhdGUoeyB0aXRsZTogbmV3VGl0bGUgfSlcbiAgICAuZXEoXCJpZFwiLCBjb252ZXJzYXRpb25JZClcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY29udmVyc2F0aW9uIGFzIENvbnZlcnNhdGlvbiB9O1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNZXNzYWdlIFNlcnZpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb252ZXJzYXRpb25NZXNzYWdlcyhcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbk1lc3NhZ2VbXT4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IG1lc3NhZ2VzLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJtZXNzYWdlc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiY29udmVyc2F0aW9uX2lkXCIsIGNvbnZlcnNhdGlvbklkKVxuICAgIC5vcmRlcihcImNyZWF0ZWRfYXRcIiwgeyBhc2NlbmRpbmc6IHRydWUgfSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiAobWVzc2FnZXMgPz8gW10pIGFzIENvbnZlcnNhdGlvbk1lc3NhZ2VbXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTWVzc2FnZShcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbiAgcm9sZTogXCJ1c2VyXCIgfCBcImFzc2lzdGFudFwiLFxuICBjb250ZW50OiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxDb252ZXJzYXRpb25NZXNzYWdlPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogbWVzc2FnZSwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwibWVzc2FnZXNcIilcbiAgICAuaW5zZXJ0KHtcbiAgICAgIGNvbnZlcnNhdGlvbl9pZDogY29udmVyc2F0aW9uSWQsXG4gICAgICByb2xlLFxuICAgICAgY29udGVudCxcbiAgICB9KVxuICAgIC5zZWxlY3QoKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSB0aGUgY29udmVyc2F0aW9uJ3MgdXBkYXRlZF9hdCB0aW1lc3RhbXBcbiAgYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLnVwZGF0ZSh7IHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSB9KVxuICAgIC5lcShcImlkXCIsIGNvbnZlcnNhdGlvbklkKTtcblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBtZXNzYWdlIGFzIENvbnZlcnNhdGlvbk1lc3NhZ2UgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVDb2RlU25pcHBldHMoXG4gIGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsXG4gIG1lc3NhZ2VJZDogc3RyaW5nLFxuICBzbmlwcGV0czogQXJyYXk8eyBmaWxlOiBzdHJpbmc7IGNvZGU6IHN0cmluZyB9Pixcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvZGVTbmlwcGV0W10+PiB7XG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qgc25pcHBldHNUb0luc2VydCA9IHNuaXBwZXRzLm1hcCgoc25pcHBldCkgPT4gKHtcbiAgICBjb252ZXJzYXRpb25faWQ6IGNvbnZlcnNhdGlvbklkLFxuICAgIG1lc3NhZ2VfaWQ6IG1lc3NhZ2VJZCxcbiAgICBmaWxlX3BhdGg6IHNuaXBwZXQuZmlsZSxcbiAgICBjb2RlX2NvbnRlbnQ6IHNuaXBwZXQuY29kZSxcbiAgICBsYW5ndWFnZTogc25pcHBldC5maWxlLnNwbGl0KFwiLlwiKS5wb3AoKSB8fCBudWxsLFxuICB9KSk7XG5cbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbShcImNvZGVfc25pcHBldHNcIilcbiAgICAuaW5zZXJ0KHNuaXBwZXRzVG9JbnNlcnQpXG4gICAgLnNlbGVjdCgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogZGF0YSBhcyBDb2RlU25pcHBldFtdIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb2RlU25pcHBldHNGb3JDb252ZXJzYXRpb24oXG4gIGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxDb2RlU25pcHBldFtdPj4ge1xuICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oXCJjb2RlX3NuaXBwZXRzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJjb252ZXJzYXRpb25faWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgLm9yZGVyKFwiY3JlYXRlZF9hdFwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBkYXRhIGFzIENvZGVTbmlwcGV0W10gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNvZGVTbmlwcGV0KFxuICBzbmlwcGV0SWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PG51bGw+PiB7XG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbShcImNvZGVfc25pcHBldHNcIilcbiAgICAuZGVsZXRlKClcbiAgICAuZXEoXCJpZFwiLCBzbmlwcGV0SWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogbnVsbCB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5kZXhSZXBvc2l0b3J5KFxuICByZXBvSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PHZvaWQ+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBpbnN0YWxsYXRpb24sIGVycm9yOiBpbnN0YWxsYXRpb25FcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJnaXRodWJfaW5zdGFsbGF0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiaW5zdGFsbGVkX2J5XCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghaW5zdGFsbGF0aW9uIHx8IGluc3RhbGxhdGlvbkVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkdpdGh1YiBBcHAgSW5zdGFsbGF0aW9uIG5vdCBmb3VuZCFcIiB9O1xuICB9XG5cbiAgLy9mZXRjaCByZXBvXG5cbiAgY29uc3QgcmVwb1Jlc3VsdCA9IGF3YWl0IGdldFJlcG9XaXRoU3RhdHVzKHJlcG9JZCk7XG5cbiAgaWYgKCFyZXBvUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHJlcG9SZXN1bHQuZXJyb3IgfTtcbiAgfVxuXG4gIGNvbnN0IHJlcG9VcmwgPSByZXBvUmVzdWx0LmRhdGEucmVwb191cmw7XG4gIGNvbnN0IGluc3RhbGxhdGlvbklkID0gaW5zdGFsbGF0aW9uLmluc3RhbGxhdGlvbl9pZDtcblxuICAvLyBHZXQgdGhlIGxhdGVzdCB2ZXJzaW9uIG51bWJlciBmb3IgdGhpcyByZXBvXG4gIGNvbnN0IHsgZGF0YTogbGF0ZXN0RG9jIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwidmVyc2lvblwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5vcmRlcihcInZlcnNpb25cIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXG4gICAgLmxpbWl0KDEpXG4gICAgLnNpbmdsZSgpO1xuXG4gIC8vIEluY3JlbWVudCB2ZXJzaW9uIChzdGFydCBhdCAxIGlmIG5vIHByZXZpb3VzIHZlcnNpb25zKVxuICBjb25zdCBuZXh0VmVyc2lvbiA9IChsYXRlc3REb2M/LnZlcnNpb24gPz8gMCkgKyAxO1xuXG4gIC8vbWFyayB0aGUgcmVwb3NpdG9yeSBhcyBpbmRleGluZyBpbiBzdXBhYmFzZSBmaXJzdFxuICBjb25zdCB7IGVycm9yOiB1cGRhdGVFcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAudXBkYXRlKHsgaW5kZXhfc3RhdHVzOiBcImluZGV4aW5nXCIgfSlcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpO1xuXG4gIGlmICh1cGRhdGVFcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IodXBkYXRlRXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogdXBkYXRlRXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgLy8gQ2FsbCB0aGUgYmFja2VuZCB0byBzdGFydCBpbmRleGluZyAoZmlyZS1hbmQtZm9yZ2V0KVxuICAvLyBEb24ndCBhd2FpdCBvciB0aHJvdyBlcnJvcnMgc2luY2UgdGhpcyBpcyBhIGxvbmctcnVubmluZyBvcGVyYXRpb25cbiAgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L3JlcG9zL2luZGV4YCwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICByZXBvX3VybDogcmVwb1VybCxcbiAgICAgIHJlcG9faWQ6IHJlcG9JZCxcbiAgICAgIHVzZXJfaWQ6IHVzZXIuaWQsXG4gICAgICBpbnN0YWxsYXRpb25faWQ6IGluc3RhbGxhdGlvbklkLFxuICAgICAgYnJhbmNoOiBcIm1haW5cIixcbiAgICAgIHZlcnNpb246IG5leHRWZXJzaW9uLFxuICAgIH0pLFxuICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAvLyBMb2cgdGhlIGVycm9yIGJ1dCBkb24ndCBmYWlsIHRoZSByZXF1ZXN0XG4gICAgY29uc29sZS5lcnJvcihcIkluZGV4aW5nIHJlcXVlc3QgZmFpbGVkOlwiLCBlcnJvcik7XG4gICAgLy8gVGhlIGJhY2tlbmQgc2hvdWxkIGhhbmRsZSB1cGRhdGluZyB0aGUgcmVwbyBzdGF0dXMgb24gZmFpbHVyZVxuICB9KTtcblxuICAvLyBSZXR1cm4gc3VjY2VzcyBpbW1lZGlhdGVseSAtIHRoZSBpbmRleGluZyB3aWxsIGhhcHBlbiBpbiB0aGUgYmFja2dyb3VuZFxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1bmRlZmluZWQgfTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoic1NBMmhDc0IifQ==
}),
"[project]/src/lib/services/data:db0924 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40ed009f0d51ce94fba83d54c82de57036f3853add":"getCodeSnippetsForConversation"},"src/lib/services/repoService.ts",""] */ __turbopack_context__.s([
    "getCodeSnippetsForConversation",
    ()=>getCodeSnippetsForConversation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var getCodeSnippetsForConversation = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40ed009f0d51ce94fba83d54c82de57036f3853add", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getCodeSnippetsForConversation"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcmVwb1NlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAL3V0aWxzL3N1cGFiYXNlL3NlcnZlclwiO1xuaW1wb3J0IHtcbiAgUmVwbyxcbiAgRG9jdW1lbnRhdGlvbixcbiAgRG9jUGFnZSxcbiAgQ29udmVyc2F0aW9uLFxuICBDb252ZXJzYXRpb25NZXNzYWdlLFxuICBDb2RlU25pcHBldCxcbn0gZnJvbSBcIkAvYXBwL3R5cGVzL3N1cGFiYXNlXCI7XG5pbXBvcnQgeyBBY3Rpb25SZXN1bHQgfSBmcm9tIFwiQC9hcHAvdHlwZXMvYWN0aW9uXCI7XG5pbXBvcnQge1xuICB2ZXJpZnlHaXRodWJSZXBvQWNjZXNzLFxuICB2ZXJpZnlHaXRMYWJSZXBvQWNjZXNzLFxufSBmcm9tIFwiLi9naXRQcm92aWRlclNlcnZpY2VcIjtcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHBhcnNlIEdpdEh1YiBVUkxzXG5mdW5jdGlvbiBwYXJzZUdpdEh1YlVybCh1cmw6IHN0cmluZyk6IHsgb3duZXI6IHN0cmluZzsgcmVwbzogc3RyaW5nIH0ge1xuICB0cnkge1xuICAgIC8vIEhhbmRsZSBtdWx0aXBsZSBmb3JtYXRzOlxuICAgIC8vIC0gaHR0cHM6Ly9naXRodWIuY29tL293bmVyL3JlcG9cbiAgICAvLyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9vd25lci9yZXBvLmdpdFxuICAgIC8vIC0gZ2l0QGdpdGh1Yi5jb206b3duZXIvcmVwby5naXRcblxuICAgIHVybCA9IHVybC50cmltKCkucmVwbGFjZSgvXFwuZ2l0JC8sIFwiXCIpO1xuXG4gICAgaWYgKHVybC5pbmNsdWRlcyhcImdpdGh1Yi5jb20vXCIpKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IHVybC5zcGxpdChcImdpdGh1Yi5jb20vXCIpWzFdLnNwbGl0KFwiL1wiKTtcbiAgICAgIHJldHVybiB7IG93bmVyOiBwYXJ0c1swXSwgcmVwbzogcGFydHNbMV0gfTtcbiAgICB9XG5cbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoXCJnaXRAZ2l0aHViLmNvbTpcIikpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gdXJsLnJlcGxhY2UoXCJnaXRAZ2l0aHViLmNvbTpcIiwgXCJcIikuc3BsaXQoXCIvXCIpO1xuICAgICAgcmV0dXJuIHsgb3duZXI6IHBhcnRzWzBdLCByZXBvOiBwYXJ0c1sxXSB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IG93bmVyOiBcIlwiLCByZXBvOiBcIlwiIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgb3duZXI6IFwiXCIsIHJlcG86IFwiXCIgfTtcbiAgfVxufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gcGFyc2UgR2l0TGFiIFVSTHNcbmZ1bmN0aW9uIHBhcnNlR2l0TGFiVXJsKHVybDogc3RyaW5nKTogeyBvd25lcjogc3RyaW5nOyByZXBvOiBzdHJpbmcgfSB7XG4gIHRyeSB7XG4gICAgLy8gSGFuZGxlIG11bHRpcGxlIGZvcm1hdHM6XG4gICAgLy8gLSBodHRwczovL2dpdGxhYi5jb20vb3duZXIvcmVwb1xuICAgIC8vIC0gaHR0cHM6Ly9naXRsYWIuY29tL293bmVyL3N1Ymdyb3VwL3JlcG9cbiAgICAvLyAtIGh0dHBzOi8vZ2l0bGFiLmNvbS9vd25lci9yZXBvLmdpdFxuICAgIC8vIC0gZ2l0QGdpdGxhYi5jb206b3duZXIvcmVwby5naXRcbiAgICAvLyAtIFNlbGYtaG9zdGVkOiBodHRwczovL2dpdGxhYi5leGFtcGxlLmNvbS9vd25lci9yZXBvXG5cbiAgICB1cmwgPSB1cmwudHJpbSgpLnJlcGxhY2UoL1xcLmdpdCQvLCBcIlwiKTtcblxuICAgIC8vIEhhbmRsZSBIVFRQUyBVUkxzIChnaXRsYWIuY29tIG9yIHNlbGYtaG9zdGVkKVxuICAgIGlmICh1cmwuaW5jbHVkZXMoXCJnaXRsYWIuY29tL1wiKSB8fCAvZ2l0bGFiXFwuW14vXStcXC8vLnRlc3QodXJsKSkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgcGF0aCBhZnRlciB0aGUgZG9tYWluXG4gICAgICBjb25zdCBtYXRjaCA9IHVybC5tYXRjaCgvZ2l0bGFiW14vXSpcXC8oLispLyk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgY29uc3QgcGF0aFBhcnRzID0gbWF0Y2hbMV0uc3BsaXQoXCIvXCIpO1xuICAgICAgICAvLyBHaXRMYWIgc3VwcG9ydHMgbmVzdGVkIGdyb3Vwcywgc28gd2UgbmVlZCB0byBoYW5kbGU6XG4gICAgICAgIC8vIC0gb3duZXIvcmVwbyAoMiBwYXJ0cylcbiAgICAgICAgLy8gLSBvd25lci9zdWJncm91cC9yZXBvICgzKyBwYXJ0cylcbiAgICAgICAgaWYgKHBhdGhQYXJ0cy5sZW5ndGggPj0gMikge1xuICAgICAgICAgIC8vIFRha2UgZXZlcnl0aGluZyBleGNlcHQgdGhlIGxhc3QgcGFydCBhcyBvd25lci9ncm91cFxuICAgICAgICAgIGNvbnN0IHJlcG8gPSBwYXRoUGFydHNbcGF0aFBhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IG93bmVyID0gcGF0aFBhcnRzLnNsaWNlKDAsIC0xKS5qb2luKFwiL1wiKTtcbiAgICAgICAgICByZXR1cm4geyBvd25lciwgcmVwbyB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIFNTSCBVUkxzXG4gICAgaWYgKHVybC5zdGFydHNXaXRoKFwiZ2l0QGdpdGxhYi5jb206XCIpIHx8IC9naXRAZ2l0bGFiXFwuW146XSs6Ly50ZXN0KHVybCkpIHtcbiAgICAgIGNvbnN0IG1hdGNoID0gdXJsLm1hdGNoKC9naXRAZ2l0bGFiW146XSo6KC4rKS8pO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGNvbnN0IHBhdGhQYXJ0cyA9IG1hdGNoWzFdLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgaWYgKHBhdGhQYXJ0cy5sZW5ndGggPj0gMikge1xuICAgICAgICAgIGNvbnN0IHJlcG8gPSBwYXRoUGFydHNbcGF0aFBhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IG93bmVyID0gcGF0aFBhcnRzLnNsaWNlKDAsIC0xKS5qb2luKFwiL1wiKTtcbiAgICAgICAgICByZXR1cm4geyBvd25lciwgcmVwbyB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgb3duZXI6IFwiXCIsIHJlcG86IFwiXCIgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBvd25lcjogXCJcIiwgcmVwbzogXCJcIiB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXBvc0J5T3JnYW5pemF0aW9uSWQoXG4gIG9yZ2FuaXphdGlvbklkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHVzZXIgPSBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJvcmdhbml6YXRpb25faWRcIiwgb3JnYW5pemF0aW9uSWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKGRhdGEgPz8gW10pIGFzIFJlcG9bXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUmVwb1ZpYUdpdGh1YihcbiAgZm9ybURhdGE6IEZvcm1EYXRhLFxuICBvcmdJZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8UmVwbyB8IHVuZGVmaW5lZD4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IHByb3ZpZGVyID0gZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IHVybCA9IGZvcm1EYXRhLmdldChcImdpdGh1Yi11cmxcIikgYXMgc3RyaW5nO1xuXG4gIGlmICghbmFtZSkge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJOYW1lIGlzIHJlcXVpcmVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGluc3RhbGxhdGlvbiB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJnaXRodWJfaW5zdGFsbGF0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiaW5zdGFsbGVkX2J5XCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghaW5zdGFsbGF0aW9uKSB7XG4gICAgLy8gTm8gR2l0SHViIEFwcCBpbnN0YWxsYXRpb24gLSBwcm9tcHQgdXNlciB0byBpbnN0YWxsXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiSW5zdGFsbGF0aW9uIE5lZWRlZFwiLFxuICAgIH07XG4gIH1cblxuICAvL3BhcnNlIHVybCBmb3Igb3duZXIgYW5kIHJlcG9cbiAgY29uc3QgeyBvd25lciwgcmVwbzogcmVwb05hbWUgfSA9IHBhcnNlR2l0SHViVXJsKHVybCk7XG5cbiAgY29uc3QgaGFzQWNjZXNzID0gYXdhaXQgdmVyaWZ5R2l0aHViUmVwb0FjY2VzcyhcbiAgICBpbnN0YWxsYXRpb24uaW5zdGFsbGF0aW9uX2lkLFxuICAgIG93bmVyLFxuICAgIHJlcG9OYW1lLFxuICApO1xuXG4gIGlmICghaGFzQWNjZXNzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiQWNjZXNzIERlbmllZFwiLFxuICAgIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IHJlcG8sIGVycm9yOiByZXBvRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLmluc2VydCh7XG4gICAgICBuYW1lLFxuICAgICAgcHJvdmlkZXIsXG4gICAgICByZXBvX3VybDogdXJsLFxuICAgICAgb3JnYW5pemF0aW9uX2lkOiBvcmdJZCxcbiAgICAgIGluZGV4ZWRfYnk6IHVzZXIuaWQsXG4gICAgICBpbmRleF9zdGF0dXM6IFwibm90IGluZGV4ZWRcIixcbiAgICB9KVxuICAgIC5zZWxlY3QoKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAocmVwb0Vycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiByZXBvRXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVwbyBhcyBSZXBvIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZXBvVmlhR2l0bGFiKFxuICBmb3JtRGF0YTogRm9ybURhdGEsXG4gIG9yZ0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvIHwgdW5kZWZpbmVkPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgY29uc3QgcHJvdmlkZXIgPSBmb3JtRGF0YS5nZXQoXCJ0eXBlXCIpIGFzIHN0cmluZztcbiAgY29uc3QgdXJsID0gZm9ybURhdGEuZ2V0KFwiZ2l0bGFiLXVybFwiKSBhcyBzdHJpbmc7XG5cbiAgLy8gVmFsaWRhdGUgaW5wdXRzXG4gIGlmICghbmFtZSB8fCBuYW1lLnRyaW0oKSA9PT0gXCJcIikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJSZXBvc2l0b3J5IG5hbWUgaXMgcmVxdWlyZWRcIiB9O1xuICB9XG5cbiAgaWYgKCF1cmwgfHwgdXJsLnRyaW0oKSA9PT0gXCJcIikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJHaXRMYWIgVVJMIGlzIHJlcXVpcmVkXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogaW5zdGFsbGF0aW9uIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImdpdGxhYl9pbnN0YWxsYXRpb25zXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpbnN0YWxsZWRfYnlcIiwgdXNlci5pZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKCFpbnN0YWxsYXRpb24pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiSW5zdGFsbGF0aW9uIE5lZWRlZFwiIH07XG4gIH1cblxuICBjb25zdCB7IG93bmVyLCByZXBvOiByZXBvTmFtZSB9ID0gcGFyc2VHaXRMYWJVcmwodXJsKTtcblxuICAvL3ZlcmlmeSBhY2Nlc3NcbiAgY29uc3QgaGFzQWNjZXNzID0gYXdhaXQgdmVyaWZ5R2l0TGFiUmVwb0FjY2VzcyhcbiAgICBpbnN0YWxsYXRpb24uYWNjZXNzX3Rva2VuLFxuICAgIG93bmVyLFxuICAgIHJlcG9OYW1lLFxuICApO1xuXG4gIGlmICghaGFzQWNjZXNzKSB7XG4gICAgaWYgKGluc3RhbGxhdGlvbi5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogXCJBY2Nlc3MgcmVxdWlyZWQhXCIsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yOiBcIkFjY2VzcyBkZW5pZWQhXCIsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3I6IHJlcG9FcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAuaW5zZXJ0KHtcbiAgICAgIG5hbWUsXG4gICAgICBwcm92aWRlcixcbiAgICAgIHJlcG9fdXJsOiB1cmwsXG4gICAgICBvcmdhbml6YXRpb25faWQ6IG9yZ0lkLFxuICAgICAgaW5kZXhlZF9ieTogdXNlci5pZCxcbiAgICAgIGluZGV4X3N0YXR1czogXCJub3QgaW5kZXhlZFwiLFxuICAgIH0pXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChyZXBvRXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHJlcG9FcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXBvIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZXBvVmlhTG9jYWxGaWxlKFxuICBmb3JtRGF0YTogRm9ybURhdGEsXG4gIG9yZ0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgY29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldChcImZpbGVcIikgYXMgRmlsZTtcblxuICAvLyBWYWxpZGF0ZSBpbnB1dHNcbiAgaWYgKCFuYW1lIHx8IG5hbWUudHJpbSgpID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlJlcG9zaXRvcnkgbmFtZSBpcyByZXF1aXJlZFwiIH07XG4gIH1cblxuICBpZiAoIWZpbGUpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmlsZSBpcyByZXF1aXJlZFwiIH07XG4gIH1cblxuICAvLyBWYWxpZGF0ZSBmaWxlIHR5cGVcbiAgaWYgKCFmaWxlLm5hbWUuZW5kc1dpdGgoXCIuemlwXCIpKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIk9ubHkgLnppcCBmaWxlcyBhcmUgYWxsb3dlZFwiIH07XG4gIH1cblxuICAvLyBWYWxpZGF0ZSBmaWxlIHNpemUgKG1heCAxMDBNQilcbiAgY29uc3QgbWF4U2l6ZSA9IDEwMCAqIDEwMjQgKiAxMDI0OyAvLyAxMDBNQiBpbiBieXRlc1xuICBpZiAoZmlsZS5zaXplID4gbWF4U2l6ZSkge1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yOiBcIkZpbGUgc2l6ZSBleGNlZWRzIDEwME1CIGxpbWl0XCIsXG4gICAgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gR2VuZXJhdGUgYSB1bmlxdWUgZmlsZSBuYW1lIHRvIHByZXZlbnQgY29sbGlzaW9uc1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IERhdGUubm93KCk7XG4gICAgY29uc3Qgc2FuaXRpemVkTmFtZSA9IG5hbWUudHJpbSgpLnJlcGxhY2UoL1teYS16MC05LV9dL2dpLCBcIl9cIik7XG4gICAgY29uc3QgZmlsZU5hbWUgPSBgJHtzYW5pdGl6ZWROYW1lfV8ke3RpbWVzdGFtcH1fJHtmaWxlLm5hbWV9YDtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGAke29yZ0lkfS8ke2ZpbGVOYW1lfWA7XG5cbiAgICAvLyBVcGxvYWQgZmlsZSB0byBTdXBhYmFzZSBTdG9yYWdlXG4gICAgY29uc3QgeyBlcnJvcjogdXBsb2FkRXJyb3IgfSA9IGF3YWl0IGNsaWVudC5zdG9yYWdlXG4gICAgICAuZnJvbShcImxvY2FsX3JlcG9zXCIpXG4gICAgICAudXBsb2FkKGZpbGVQYXRoLCBmaWxlLCB7XG4gICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL3ppcFwiLFxuICAgICAgICB1cHNlcnQ6IGZhbHNlLFxuICAgICAgfSk7XG5cbiAgICBpZiAodXBsb2FkRXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJVcGxvYWQgZXJyb3I6XCIsIHVwbG9hZEVycm9yKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogYEZpbGUgdXBsb2FkIGZhaWxlZDogJHt1cGxvYWRFcnJvci5tZXNzYWdlfWAsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEdldCB0aGUgcHVibGljIFVSTCBmb3IgdGhlIHVwbG9hZGVkIGZpbGVcbiAgICBjb25zdCB7IGRhdGE6IHVybERhdGEgfSA9IGNsaWVudC5zdG9yYWdlXG4gICAgICAuZnJvbShcImxvY2FsX3JlcG9zXCIpXG4gICAgICAuZ2V0UHVibGljVXJsKGZpbGVQYXRoKTtcblxuICAgIC8vIENyZWF0ZSByZXBvc2l0b3J5IHJlY29yZCBpbiBkYXRhYmFzZVxuICAgIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3I6IHJlcG9FcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgICAgLmluc2VydCh7XG4gICAgICAgIG5hbWU6IG5hbWUudHJpbSgpLFxuICAgICAgICBwcm92aWRlcjogXCJsb2NhbFwiLFxuICAgICAgICByZXBvX3VybDogbnVsbCxcbiAgICAgICAgb2JqZWN0X3VybDogdXJsRGF0YS5wdWJsaWNVcmwsXG4gICAgICAgIG9yZ2FuaXphdGlvbl9pZDogb3JnSWQsXG4gICAgICAgIGluZGV4ZWRfYnk6IHVzZXIuaWQsXG4gICAgICAgIGluZGV4X3N0YXR1czogXCJub3QgaW5kZXhlZFwiLFxuICAgICAgfSlcbiAgICAgIC5zZWxlY3QoKVxuICAgICAgLnNpbmdsZSgpO1xuXG4gICAgaWYgKHJlcG9FcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIlJlcG9zaXRvcnkgY3JlYXRpb24gZXJyb3I6XCIsIHJlcG9FcnJvcik7XG4gICAgICAvLyBBdHRlbXB0IHRvIGNsZWFuIHVwIHVwbG9hZGVkIGZpbGVcbiAgICAgIGF3YWl0IGNsaWVudC5zdG9yYWdlLmZyb20oXCJsb2NhbF9yZXBvc1wiKS5yZW1vdmUoW2ZpbGVQYXRoXSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IGBSZXBvc2l0b3J5IGNyZWF0aW9uIGZhaWxlZDogJHtyZXBvRXJyb3IubWVzc2FnZX1gLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXBvIGFzIFJlcG8gfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiVW5leHBlY3RlZCBlcnJvcjpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yOlxuICAgICAgICBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZFwiLFxuICAgIH07XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUmVwb3NpdG9yeSBNYW5hZ2VtZW50IFNlcnZpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXBvV2l0aFN0YXR1cyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFyZXBvKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlJlcG9zaXRvcnkgbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlcG8gYXMgUmVwbyB9O1xufVxuXG50eXBlIFVwZGF0ZURhdGEgPSB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHJlcG9fdXJsPzogc3RyaW5nO1xuICBvYmplY3RfdXJsPzogc3RyaW5nO1xuICBpbmRleF9zdGF0dXM/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUmVwb1NldHRpbmdzKFxuICByZXBvSWQ6IHN0cmluZyxcbiAgc2V0dGluZ3M6IHsgbmFtZT86IHN0cmluZzsgcmVwb191cmw/OiBzdHJpbmc7IGZpbGU/OiBGaWxlIH0sXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIC8vIEdldCB0aGUgY3VycmVudCByZXBvIHRvIGNoZWNrIGl0cyBwcm92aWRlciB0eXBlXG4gIGNvbnN0IHsgZGF0YTogY3VycmVudFJlcG8gfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghY3VycmVudFJlcG8pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUmVwb3NpdG9yeSBub3QgZm91bmQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZURhdGE6IFVwZGF0ZURhdGEgPSB7fTtcblxuICAvLyBIYW5kbGUgbmFtZSB1cGRhdGVcbiAgaWYgKHNldHRpbmdzLm5hbWUpIHtcbiAgICB1cGRhdGVEYXRhLm5hbWUgPSBzZXR0aW5ncy5uYW1lO1xuICB9XG5cbiAgLy8gSGFuZGxlIEdpdEh1YiBVUkwgdXBkYXRlXG4gIGlmIChzZXR0aW5ncy5yZXBvX3VybCAmJiBjdXJyZW50UmVwby5wcm92aWRlciA9PT0gXCJnaXRodWJcIikge1xuICAgIGNvbnN0IHsgb3duZXIsIHJlcG8gfSA9IHBhcnNlR2l0SHViVXJsKHNldHRpbmdzLnJlcG9fdXJsKTtcblxuICAgIGlmICghb3duZXIgfHwgIXJlcG8pIHtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJJbnZhbGlkIEdpdEh1YiBVUkwgZm9ybWF0IVwiIH07XG4gICAgfVxuXG4gICAgLy8gVmVyaWZ5IGFjY2VzcyB0byB0aGUgbmV3IHJlcG9cbiAgICBjb25zdCB7IGRhdGE6IGluc3RhbGxhdGlvbiB9ID0gYXdhaXQgY2xpZW50XG4gICAgICAuZnJvbShcImdpdGh1Yl9pbnN0YWxsYXRpb25zXCIpXG4gICAgICAuc2VsZWN0KFwiKlwiKVxuICAgICAgLmVxKFwiaW5zdGFsbGVkX2J5XCIsIHVzZXIuaWQpXG4gICAgICAuc2luZ2xlKCk7XG5cbiAgICBpZiAoIWluc3RhbGxhdGlvbikge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkdpdEh1YiBBcHAgbm90IGluc3RhbGxlZCFcIiB9O1xuICAgIH1cblxuICAgIGNvbnN0IGhhc0FjY2VzcyA9IGF3YWl0IHZlcmlmeUdpdGh1YlJlcG9BY2Nlc3MoXG4gICAgICBpbnN0YWxsYXRpb24uaW5zdGFsbGF0aW9uX2lkLnRvU3RyaW5nKCksXG4gICAgICBvd25lcixcbiAgICAgIHJlcG8sXG4gICAgKTtcblxuICAgIGlmICghaGFzQWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6XG4gICAgICAgICAgXCJDYW5ub3QgYWNjZXNzIHRoaXMgcmVwb3NpdG9yeS4gTWFrZSBzdXJlIHRoZSBHaXRIdWIgQXBwIGlzIGluc3RhbGxlZCBmb3IgdGhpcyByZXBvc2l0b3J5LlwiLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICB1cGRhdGVEYXRhLnJlcG9fdXJsID0gc2V0dGluZ3MucmVwb191cmw7XG4gICAgdXBkYXRlRGF0YS5pbmRleF9zdGF0dXMgPSBcIm5vdCBpbmRleGVkXCI7IC8vIFRyaWdnZXIgcmUtaW5kZXhpbmdcbiAgfVxuXG4gIC8vIEhhbmRsZSBsb2NhbCBmaWxlIHVwbG9hZFxuICBpZiAoc2V0dGluZ3MuZmlsZSAmJiBjdXJyZW50UmVwby5wcm92aWRlciA9PT0gXCJsb2NhbFwiKSB7XG4gICAgY29uc3QgZmlsZSA9IHNldHRpbmdzLmZpbGU7XG4gICAgY29uc3QgZmlsZUV4dCA9IGZpbGUubmFtZS5zcGxpdChcIi5cIikucG9wKCk7XG5cbiAgICBpZiAoZmlsZUV4dCAhPT0gXCJ6aXBcIikge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIk9ubHkgLnppcCBmaWxlcyBhcmUgYWxsb3dlZCFcIiB9O1xuICAgIH1cblxuICAgIC8vIFVwbG9hZCB0byBTdXBhYmFzZSBTdG9yYWdlXG4gICAgY29uc3QgZmlsZU5hbWUgPSBgJHtyZXBvSWR9LSR7RGF0ZS5ub3coKX0uemlwYDtcbiAgICBjb25zdCB7IGRhdGE6IHVwbG9hZERhdGEsIGVycm9yOiB1cGxvYWRFcnJvciB9ID0gYXdhaXQgY2xpZW50LnN0b3JhZ2VcbiAgICAgIC5mcm9tKFwibG9jYWxfcmVwb3NcIilcbiAgICAgIC51cGxvYWQoZmlsZU5hbWUsIGZpbGUpO1xuXG4gICAgaWYgKHVwbG9hZEVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKHVwbG9hZEVycm9yKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gdXBsb2FkIGZpbGUhXCIgfTtcbiAgICB9XG5cbiAgICAvLyBHZXQgcHVibGljIFVSTFxuICAgIGNvbnN0IHsgZGF0YTogdXJsRGF0YSB9ID0gY2xpZW50LnN0b3JhZ2VcbiAgICAgIC5mcm9tKFwibG9jYWxfcmVwb3NcIilcbiAgICAgIC5nZXRQdWJsaWNVcmwoZmlsZU5hbWUpO1xuXG4gICAgdXBkYXRlRGF0YS5vYmplY3RfdXJsID0gdXJsRGF0YS5wdWJsaWNVcmw7XG4gICAgdXBkYXRlRGF0YS5pbmRleF9zdGF0dXMgPSBcInBlbmRpbmdcIjsgLy8gVHJpZ2dlciByZS1pbmRleGluZ1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSByZXBvc2l0b3J5XG4gIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnVwZGF0ZSh1cGRhdGVEYXRhKVxuICAgIC5lcShcImlkXCIsIHJlcG9JZClcbiAgICAuc2VsZWN0KClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXBvIGFzIFJlcG8gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVJlcG8oXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8eyBvcmdhbml6YXRpb25JZDogc3RyaW5nIH0+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gRmV0Y2ggdGhlIG9yZ2FuaXphdGlvbl9pZCBiZWZvcmUgZGVsZXRpbmdcbiAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvcjogcmVwb0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgIC5zZWxlY3QoXCJvcmdhbml6YXRpb25faWRcIilcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChyZXBvRXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKHJlcG9FcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiByZXBvRXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFyZXBvKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlJlcG9zaXRvcnkgbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IGNsaWVudC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpLmRlbGV0ZSgpLmVxKFwiaWRcIiwgcmVwb0lkKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHsgb3JnYW5pemF0aW9uSWQ6IHJlcG8ub3JnYW5pemF0aW9uX2lkIH0gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRyaWdnZXJSZWluZGV4KFxuICByZXBvSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PHZvaWQ+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSBpbmRleF9zdGF0dXMgdG8gJ3BlbmRpbmcnIHRvIHRyaWdnZXIgcmVpbmRleGluZ1xuICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgIC51cGRhdGUoeyBpbmRleF9zdGF0dXM6IFwicGVuZGluZ1wiIH0pXG4gICAgLmVxKFwiaWRcIiwgcmVwb0lkKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIC8vIFRPRE86IFRyaWdnZXIgYWN0dWFsIGluZGV4aW5nIGpvYi93ZWJob29rL3F1ZXVlIGhlcmVcbiAgLy8gVGhpcyBjb3VsZCBiZSBhbiBBUEkgY2FsbCB0byB5b3VyIGluZGV4aW5nIHNlcnZpY2VcblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1bmRlZmluZWQgfTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRG9jdW1lbnRhdGlvbiBTZXJ2aWNlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jdW1lbnRhdGlvbihcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2N1bWVudGF0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogZG9jdW1lbnRhdGlvbiwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFkb2N1bWVudGF0aW9uKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkRvY3VtZW50YXRpb24gbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGRvY3VtZW50YXRpb24gYXMgRG9jdW1lbnRhdGlvbiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jUGFnZXMoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jUGFnZVtdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIC8vIEdldCB0aGUgbGF0ZXN0IGRvY3VtZW50YXRpb24gdmVyc2lvbiBmb3IgdGhpcyByZXBvXG4gIGNvbnN0IHsgZGF0YTogZG9jdW1lbnRhdGlvbiwgZXJyb3I6IGRvY0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwiaWRcIilcbiAgICAuZXEoXCJyZXBvX2lkXCIsIHJlcG9JZClcbiAgICAub3JkZXIoXCJ2ZXJzaW9uXCIsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxuICAgIC5saW1pdCgxKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZG9jRXJyb3IgfHwgIWRvY3VtZW50YXRpb24pIHtcbiAgICBjb25zb2xlLmVycm9yKGRvY0Vycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRG9jdW1lbnRhdGlvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdlcywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicGFnZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImRvY3VtZW50YXRpb25faWRcIiwgZG9jdW1lbnRhdGlvbi5pZClcbiAgICAub3JkZXIoXCJvcmRlcl9pbmRleFwiLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChwYWdlcyA/PyBbXSkgYXMgRG9jUGFnZVtdIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2NQYWdlQnlJZChcbiAgcGFnZUlkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2NQYWdlPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcGFnZSwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jX3BhZ2VzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpZFwiLCBwYWdlSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFwYWdlKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlBhZ2Ugbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHBhZ2UgYXMgRG9jUGFnZSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jUGFnZXNIaWVyYXJjaGljYWwoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jUGFnZVtdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIC8vIEZpcnN0IGdldCB0aGUgZG9jdW1lbnRhdGlvbiBJRCBmb3IgdGhpcyByZXBvXG4gIGNvbnN0IHsgZGF0YTogZG9jdW1lbnRhdGlvbiwgZXJyb3I6IGRvY0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwiaWRcIilcbiAgICAuZXEoXCJyZXBvX2lkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGRvY0Vycm9yIHx8ICFkb2N1bWVudGF0aW9uKSB7XG4gICAgY29uc29sZS5lcnJvcihkb2NFcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkRvY3VtZW50YXRpb24gbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcGFnZXMsIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY19wYWdlc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiZG9jdW1lbnRhdGlvbl9pZFwiLCBkb2N1bWVudGF0aW9uLmlkKVxuICAgIC5vcmRlcihcIm9yZGVyX2luZGV4XCIsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgLy8gUGFnZXMgYXJlIGFscmVhZHkgc29ydGVkIGJ5IG9yZGVyX2luZGV4XG4gIC8vIFRoZSBwYXJlbnRfcGFnZV9pZCBmaWVsZCBtYWludGFpbnMgdGhlIGhpZXJhcmNoeVxuICAvLyBGcm9udGVuZCBjYW4gdXNlIHRoaXMgdG8gcmVuZGVyIHRoZSB0cmVlIHN0cnVjdHVyZVxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiAocGFnZXMgPz8gW10pIGFzIERvY1BhZ2VbXSB9O1xufVxuXG4vKipcbiAqIEdldCBhbGwgZG9jdW1lbnRhdGlvbiB2ZXJzaW9ucyBmb3IgYSByZXBvc2l0b3J5XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2N1bWVudGF0aW9uVmVyc2lvbnMoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jdW1lbnRhdGlvbltdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogdmVyc2lvbnMsIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5vcmRlcihcInZlcnNpb25cIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKHZlcnNpb25zID8/IFtdKSBhcyBEb2N1bWVudGF0aW9uW10gfTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGxhdGVzdCBjb21wbGV0ZWQgZG9jdW1lbnRhdGlvbiB2ZXJzaW9uIGZvciBhIHJlcG9zaXRvcnlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExhdGVzdERvY3VtZW50YXRpb24oXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jdW1lbnRhdGlvbj4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGRvY3VtZW50YXRpb24sIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5vcmRlcihcInZlcnNpb25cIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXG4gICAgLmxpbWl0KDEpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghZG9jdW1lbnRhdGlvbikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJEb2N1bWVudGF0aW9uIG5vdCBmb3VuZFwiIH07XG4gIH1cblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGRvY3VtZW50YXRpb24gYXMgRG9jdW1lbnRhdGlvbiB9O1xufVxuXG4vKipcbiAqIEdldCBkb2N1bWVudGF0aW9uIHBhZ2VzIGZvciBhIHNwZWNpZmljIHZlcnNpb25cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERvY1BhZ2VzRm9yVmVyc2lvbihcbiAgcmVwb0lkOiBzdHJpbmcsXG4gIHZlcnNpb246IG51bWJlcixcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PERvY1BhZ2VbXT4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICAvLyBHZXQgdGhlIGRvY3VtZW50YXRpb24gcmVjb3JkIGZvciB0aGlzIHZlcnNpb25cbiAgY29uc3QgeyBkYXRhOiBkb2N1bWVudGF0aW9uLCBlcnJvcjogZG9jRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCJpZFwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5lcShcInZlcnNpb25cIiwgdmVyc2lvbilcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGRvY0Vycm9yIHx8ICFkb2N1bWVudGF0aW9uKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkRvY3VtZW50YXRpb24gdmVyc2lvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdlcywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicGFnZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImRvY3VtZW50YXRpb25faWRcIiwgZG9jdW1lbnRhdGlvbi5pZClcbiAgICAub3JkZXIoXCJvcmRlcl9pbmRleFwiLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChwYWdlcyA/PyBbXSkgYXMgRG9jUGFnZVtdIH07XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENvbnZlcnNhdGlvbiBTZXJ2aWNlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29udmVyc2F0aW9ucyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4gIGxpbWl0OiBudW1iZXIgPSAyMCxcbiAgdmVyc2lvbjogbnVtYmVyIHwgbnVsbCA9IG51bGwsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxDb252ZXJzYXRpb25bXT4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBsZXQgcXVlcnkgPSBjbGllbnRcbiAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlci5pZCk7XG5cbiAgLy8gRmlsdGVyIGJ5IHZlcnNpb24gaWYgc3BlY2lmaWVkXG4gIGlmICh2ZXJzaW9uICE9PSBudWxsICYmIHZlcnNpb24gIT09IHVuZGVmaW5lZCkge1xuICAgIHF1ZXJ5ID0gcXVlcnkuZXEoXCJyZXBvX3ZlcnNpb25cIiwgdmVyc2lvbik7XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGNvbnZlcnNhdGlvbnMsIGVycm9yIH0gPSBhd2FpdCBxdWVyeVxuICAgIC5vcmRlcihcInVwZGF0ZWRfYXRcIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXG4gICAgLmxpbWl0KGxpbWl0KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChjb252ZXJzYXRpb25zID8/IFtdKSBhcyBDb252ZXJzYXRpb25bXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29udmVyc2F0aW9uQnlJZChcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbj4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGNvbnZlcnNhdGlvbiwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiaWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIGlmICghY29udmVyc2F0aW9uKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkNvbnZlcnNhdGlvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY29udmVyc2F0aW9uIGFzIENvbnZlcnNhdGlvbiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ29udmVyc2F0aW9uKFxuICByZXBvSWQ6IHN0cmluZyxcbiAgdGl0bGU/OiBzdHJpbmcsXG4gIHZlcnNpb24/OiBudW1iZXIgfCBudWxsLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29udmVyc2F0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogY29udmVyc2F0aW9uLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLmluc2VydCh7XG4gICAgICByZXBvX2lkOiByZXBvSWQsXG4gICAgICB1c2VyX2lkOiB1c2VyLmlkLFxuICAgICAgdGl0bGU6IHRpdGxlIHx8IFwiTmV3IENvbnZlcnNhdGlvblwiLFxuICAgICAgcmVwb192ZXJzaW9uOiB2ZXJzaW9uID8/IG51bGwsXG4gICAgfSlcbiAgICAuc2VsZWN0KClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjb252ZXJzYXRpb24gYXMgQ29udmVyc2F0aW9uIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDb252ZXJzYXRpb24oXG4gIGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDx2b2lkPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgIC5kZWxldGUoKVxuICAgIC5lcShcImlkXCIsIGNvbnZlcnNhdGlvbklkKVxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlci5pZCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1bmRlZmluZWQgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbmFtZUNvbnZlcnNhdGlvbihcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbiAgbmV3VGl0bGU6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbj4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGNvbnZlcnNhdGlvbiwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgIC51cGRhdGUoeyB0aXRsZTogbmV3VGl0bGUgfSlcbiAgICAuZXEoXCJpZFwiLCBjb252ZXJzYXRpb25JZClcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY29udmVyc2F0aW9uIGFzIENvbnZlcnNhdGlvbiB9O1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNZXNzYWdlIFNlcnZpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb252ZXJzYXRpb25NZXNzYWdlcyhcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbk1lc3NhZ2VbXT4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IG1lc3NhZ2VzLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJtZXNzYWdlc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiY29udmVyc2F0aW9uX2lkXCIsIGNvbnZlcnNhdGlvbklkKVxuICAgIC5vcmRlcihcImNyZWF0ZWRfYXRcIiwgeyBhc2NlbmRpbmc6IHRydWUgfSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiAobWVzc2FnZXMgPz8gW10pIGFzIENvbnZlcnNhdGlvbk1lc3NhZ2VbXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTWVzc2FnZShcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbiAgcm9sZTogXCJ1c2VyXCIgfCBcImFzc2lzdGFudFwiLFxuICBjb250ZW50OiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxDb252ZXJzYXRpb25NZXNzYWdlPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogbWVzc2FnZSwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwibWVzc2FnZXNcIilcbiAgICAuaW5zZXJ0KHtcbiAgICAgIGNvbnZlcnNhdGlvbl9pZDogY29udmVyc2F0aW9uSWQsXG4gICAgICByb2xlLFxuICAgICAgY29udGVudCxcbiAgICB9KVxuICAgIC5zZWxlY3QoKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSB0aGUgY29udmVyc2F0aW9uJ3MgdXBkYXRlZF9hdCB0aW1lc3RhbXBcbiAgYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLnVwZGF0ZSh7IHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSB9KVxuICAgIC5lcShcImlkXCIsIGNvbnZlcnNhdGlvbklkKTtcblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBtZXNzYWdlIGFzIENvbnZlcnNhdGlvbk1lc3NhZ2UgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVDb2RlU25pcHBldHMoXG4gIGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsXG4gIG1lc3NhZ2VJZDogc3RyaW5nLFxuICBzbmlwcGV0czogQXJyYXk8eyBmaWxlOiBzdHJpbmc7IGNvZGU6IHN0cmluZyB9Pixcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvZGVTbmlwcGV0W10+PiB7XG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qgc25pcHBldHNUb0luc2VydCA9IHNuaXBwZXRzLm1hcCgoc25pcHBldCkgPT4gKHtcbiAgICBjb252ZXJzYXRpb25faWQ6IGNvbnZlcnNhdGlvbklkLFxuICAgIG1lc3NhZ2VfaWQ6IG1lc3NhZ2VJZCxcbiAgICBmaWxlX3BhdGg6IHNuaXBwZXQuZmlsZSxcbiAgICBjb2RlX2NvbnRlbnQ6IHNuaXBwZXQuY29kZSxcbiAgICBsYW5ndWFnZTogc25pcHBldC5maWxlLnNwbGl0KFwiLlwiKS5wb3AoKSB8fCBudWxsLFxuICB9KSk7XG5cbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbShcImNvZGVfc25pcHBldHNcIilcbiAgICAuaW5zZXJ0KHNuaXBwZXRzVG9JbnNlcnQpXG4gICAgLnNlbGVjdCgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogZGF0YSBhcyBDb2RlU25pcHBldFtdIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb2RlU25pcHBldHNGb3JDb252ZXJzYXRpb24oXG4gIGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxDb2RlU25pcHBldFtdPj4ge1xuICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oXCJjb2RlX3NuaXBwZXRzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJjb252ZXJzYXRpb25faWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgLm9yZGVyKFwiY3JlYXRlZF9hdFwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBkYXRhIGFzIENvZGVTbmlwcGV0W10gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNvZGVTbmlwcGV0KFxuICBzbmlwcGV0SWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PG51bGw+PiB7XG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbShcImNvZGVfc25pcHBldHNcIilcbiAgICAuZGVsZXRlKClcbiAgICAuZXEoXCJpZFwiLCBzbmlwcGV0SWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogbnVsbCB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5kZXhSZXBvc2l0b3J5KFxuICByZXBvSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PHZvaWQ+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBpbnN0YWxsYXRpb24sIGVycm9yOiBpbnN0YWxsYXRpb25FcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJnaXRodWJfaW5zdGFsbGF0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiaW5zdGFsbGVkX2J5XCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghaW5zdGFsbGF0aW9uIHx8IGluc3RhbGxhdGlvbkVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkdpdGh1YiBBcHAgSW5zdGFsbGF0aW9uIG5vdCBmb3VuZCFcIiB9O1xuICB9XG5cbiAgLy9mZXRjaCByZXBvXG5cbiAgY29uc3QgcmVwb1Jlc3VsdCA9IGF3YWl0IGdldFJlcG9XaXRoU3RhdHVzKHJlcG9JZCk7XG5cbiAgaWYgKCFyZXBvUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHJlcG9SZXN1bHQuZXJyb3IgfTtcbiAgfVxuXG4gIGNvbnN0IHJlcG9VcmwgPSByZXBvUmVzdWx0LmRhdGEucmVwb191cmw7XG4gIGNvbnN0IGluc3RhbGxhdGlvbklkID0gaW5zdGFsbGF0aW9uLmluc3RhbGxhdGlvbl9pZDtcblxuICAvLyBHZXQgdGhlIGxhdGVzdCB2ZXJzaW9uIG51bWJlciBmb3IgdGhpcyByZXBvXG4gIGNvbnN0IHsgZGF0YTogbGF0ZXN0RG9jIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwidmVyc2lvblwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5vcmRlcihcInZlcnNpb25cIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXG4gICAgLmxpbWl0KDEpXG4gICAgLnNpbmdsZSgpO1xuXG4gIC8vIEluY3JlbWVudCB2ZXJzaW9uIChzdGFydCBhdCAxIGlmIG5vIHByZXZpb3VzIHZlcnNpb25zKVxuICBjb25zdCBuZXh0VmVyc2lvbiA9IChsYXRlc3REb2M/LnZlcnNpb24gPz8gMCkgKyAxO1xuXG4gIC8vbWFyayB0aGUgcmVwb3NpdG9yeSBhcyBpbmRleGluZyBpbiBzdXBhYmFzZSBmaXJzdFxuICBjb25zdCB7IGVycm9yOiB1cGRhdGVFcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAudXBkYXRlKHsgaW5kZXhfc3RhdHVzOiBcImluZGV4aW5nXCIgfSlcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpO1xuXG4gIGlmICh1cGRhdGVFcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IodXBkYXRlRXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogdXBkYXRlRXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgLy8gQ2FsbCB0aGUgYmFja2VuZCB0byBzdGFydCBpbmRleGluZyAoZmlyZS1hbmQtZm9yZ2V0KVxuICAvLyBEb24ndCBhd2FpdCBvciB0aHJvdyBlcnJvcnMgc2luY2UgdGhpcyBpcyBhIGxvbmctcnVubmluZyBvcGVyYXRpb25cbiAgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L3JlcG9zL2luZGV4YCwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICByZXBvX3VybDogcmVwb1VybCxcbiAgICAgIHJlcG9faWQ6IHJlcG9JZCxcbiAgICAgIHVzZXJfaWQ6IHVzZXIuaWQsXG4gICAgICBpbnN0YWxsYXRpb25faWQ6IGluc3RhbGxhdGlvbklkLFxuICAgICAgYnJhbmNoOiBcIm1haW5cIixcbiAgICAgIHZlcnNpb246IG5leHRWZXJzaW9uLFxuICAgIH0pLFxuICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAvLyBMb2cgdGhlIGVycm9yIGJ1dCBkb24ndCBmYWlsIHRoZSByZXF1ZXN0XG4gICAgY29uc29sZS5lcnJvcihcIkluZGV4aW5nIHJlcXVlc3QgZmFpbGVkOlwiLCBlcnJvcik7XG4gICAgLy8gVGhlIGJhY2tlbmQgc2hvdWxkIGhhbmRsZSB1cGRhdGluZyB0aGUgcmVwbyBzdGF0dXMgb24gZmFpbHVyZVxuICB9KTtcblxuICAvLyBSZXR1cm4gc3VjY2VzcyBpbW1lZGlhdGVseSAtIHRoZSBpbmRleGluZyB3aWxsIGhhcHBlbiBpbiB0aGUgYmFja2dyb3VuZFxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1bmRlZmluZWQgfTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoidVRBNmxDc0IifQ==
}),
"[project]/src/lib/services/data:03130b [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7035655e9eff45fe03e6f78297bf8a12121969e07a":"saveCodeSnippets"},"src/lib/services/repoService.ts",""] */ __turbopack_context__.s([
    "saveCodeSnippets",
    ()=>saveCodeSnippets
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var saveCodeSnippets = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("7035655e9eff45fe03e6f78297bf8a12121969e07a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "saveCodeSnippets"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcmVwb1NlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAL3V0aWxzL3N1cGFiYXNlL3NlcnZlclwiO1xuaW1wb3J0IHtcbiAgUmVwbyxcbiAgRG9jdW1lbnRhdGlvbixcbiAgRG9jUGFnZSxcbiAgQ29udmVyc2F0aW9uLFxuICBDb252ZXJzYXRpb25NZXNzYWdlLFxuICBDb2RlU25pcHBldCxcbn0gZnJvbSBcIkAvYXBwL3R5cGVzL3N1cGFiYXNlXCI7XG5pbXBvcnQgeyBBY3Rpb25SZXN1bHQgfSBmcm9tIFwiQC9hcHAvdHlwZXMvYWN0aW9uXCI7XG5pbXBvcnQge1xuICB2ZXJpZnlHaXRodWJSZXBvQWNjZXNzLFxuICB2ZXJpZnlHaXRMYWJSZXBvQWNjZXNzLFxufSBmcm9tIFwiLi9naXRQcm92aWRlclNlcnZpY2VcIjtcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHBhcnNlIEdpdEh1YiBVUkxzXG5mdW5jdGlvbiBwYXJzZUdpdEh1YlVybCh1cmw6IHN0cmluZyk6IHsgb3duZXI6IHN0cmluZzsgcmVwbzogc3RyaW5nIH0ge1xuICB0cnkge1xuICAgIC8vIEhhbmRsZSBtdWx0aXBsZSBmb3JtYXRzOlxuICAgIC8vIC0gaHR0cHM6Ly9naXRodWIuY29tL293bmVyL3JlcG9cbiAgICAvLyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9vd25lci9yZXBvLmdpdFxuICAgIC8vIC0gZ2l0QGdpdGh1Yi5jb206b3duZXIvcmVwby5naXRcblxuICAgIHVybCA9IHVybC50cmltKCkucmVwbGFjZSgvXFwuZ2l0JC8sIFwiXCIpO1xuXG4gICAgaWYgKHVybC5pbmNsdWRlcyhcImdpdGh1Yi5jb20vXCIpKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IHVybC5zcGxpdChcImdpdGh1Yi5jb20vXCIpWzFdLnNwbGl0KFwiL1wiKTtcbiAgICAgIHJldHVybiB7IG93bmVyOiBwYXJ0c1swXSwgcmVwbzogcGFydHNbMV0gfTtcbiAgICB9XG5cbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoXCJnaXRAZ2l0aHViLmNvbTpcIikpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gdXJsLnJlcGxhY2UoXCJnaXRAZ2l0aHViLmNvbTpcIiwgXCJcIikuc3BsaXQoXCIvXCIpO1xuICAgICAgcmV0dXJuIHsgb3duZXI6IHBhcnRzWzBdLCByZXBvOiBwYXJ0c1sxXSB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IG93bmVyOiBcIlwiLCByZXBvOiBcIlwiIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgb3duZXI6IFwiXCIsIHJlcG86IFwiXCIgfTtcbiAgfVxufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gcGFyc2UgR2l0TGFiIFVSTHNcbmZ1bmN0aW9uIHBhcnNlR2l0TGFiVXJsKHVybDogc3RyaW5nKTogeyBvd25lcjogc3RyaW5nOyByZXBvOiBzdHJpbmcgfSB7XG4gIHRyeSB7XG4gICAgLy8gSGFuZGxlIG11bHRpcGxlIGZvcm1hdHM6XG4gICAgLy8gLSBodHRwczovL2dpdGxhYi5jb20vb3duZXIvcmVwb1xuICAgIC8vIC0gaHR0cHM6Ly9naXRsYWIuY29tL293bmVyL3N1Ymdyb3VwL3JlcG9cbiAgICAvLyAtIGh0dHBzOi8vZ2l0bGFiLmNvbS9vd25lci9yZXBvLmdpdFxuICAgIC8vIC0gZ2l0QGdpdGxhYi5jb206b3duZXIvcmVwby5naXRcbiAgICAvLyAtIFNlbGYtaG9zdGVkOiBodHRwczovL2dpdGxhYi5leGFtcGxlLmNvbS9vd25lci9yZXBvXG5cbiAgICB1cmwgPSB1cmwudHJpbSgpLnJlcGxhY2UoL1xcLmdpdCQvLCBcIlwiKTtcblxuICAgIC8vIEhhbmRsZSBIVFRQUyBVUkxzIChnaXRsYWIuY29tIG9yIHNlbGYtaG9zdGVkKVxuICAgIGlmICh1cmwuaW5jbHVkZXMoXCJnaXRsYWIuY29tL1wiKSB8fCAvZ2l0bGFiXFwuW14vXStcXC8vLnRlc3QodXJsKSkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgcGF0aCBhZnRlciB0aGUgZG9tYWluXG4gICAgICBjb25zdCBtYXRjaCA9IHVybC5tYXRjaCgvZ2l0bGFiW14vXSpcXC8oLispLyk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgY29uc3QgcGF0aFBhcnRzID0gbWF0Y2hbMV0uc3BsaXQoXCIvXCIpO1xuICAgICAgICAvLyBHaXRMYWIgc3VwcG9ydHMgbmVzdGVkIGdyb3Vwcywgc28gd2UgbmVlZCB0byBoYW5kbGU6XG4gICAgICAgIC8vIC0gb3duZXIvcmVwbyAoMiBwYXJ0cylcbiAgICAgICAgLy8gLSBvd25lci9zdWJncm91cC9yZXBvICgzKyBwYXJ0cylcbiAgICAgICAgaWYgKHBhdGhQYXJ0cy5sZW5ndGggPj0gMikge1xuICAgICAgICAgIC8vIFRha2UgZXZlcnl0aGluZyBleGNlcHQgdGhlIGxhc3QgcGFydCBhcyBvd25lci9ncm91cFxuICAgICAgICAgIGNvbnN0IHJlcG8gPSBwYXRoUGFydHNbcGF0aFBhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IG93bmVyID0gcGF0aFBhcnRzLnNsaWNlKDAsIC0xKS5qb2luKFwiL1wiKTtcbiAgICAgICAgICByZXR1cm4geyBvd25lciwgcmVwbyB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIFNTSCBVUkxzXG4gICAgaWYgKHVybC5zdGFydHNXaXRoKFwiZ2l0QGdpdGxhYi5jb206XCIpIHx8IC9naXRAZ2l0bGFiXFwuW146XSs6Ly50ZXN0KHVybCkpIHtcbiAgICAgIGNvbnN0IG1hdGNoID0gdXJsLm1hdGNoKC9naXRAZ2l0bGFiW146XSo6KC4rKS8pO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGNvbnN0IHBhdGhQYXJ0cyA9IG1hdGNoWzFdLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgaWYgKHBhdGhQYXJ0cy5sZW5ndGggPj0gMikge1xuICAgICAgICAgIGNvbnN0IHJlcG8gPSBwYXRoUGFydHNbcGF0aFBhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IG93bmVyID0gcGF0aFBhcnRzLnNsaWNlKDAsIC0xKS5qb2luKFwiL1wiKTtcbiAgICAgICAgICByZXR1cm4geyBvd25lciwgcmVwbyB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgb3duZXI6IFwiXCIsIHJlcG86IFwiXCIgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBvd25lcjogXCJcIiwgcmVwbzogXCJcIiB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXBvc0J5T3JnYW5pemF0aW9uSWQoXG4gIG9yZ2FuaXphdGlvbklkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHVzZXIgPSBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJvcmdhbml6YXRpb25faWRcIiwgb3JnYW5pemF0aW9uSWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKGRhdGEgPz8gW10pIGFzIFJlcG9bXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUmVwb1ZpYUdpdGh1YihcbiAgZm9ybURhdGE6IEZvcm1EYXRhLFxuICBvcmdJZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8UmVwbyB8IHVuZGVmaW5lZD4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IHByb3ZpZGVyID0gZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IHVybCA9IGZvcm1EYXRhLmdldChcImdpdGh1Yi11cmxcIikgYXMgc3RyaW5nO1xuXG4gIGlmICghbmFtZSkge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJOYW1lIGlzIHJlcXVpcmVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGluc3RhbGxhdGlvbiB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJnaXRodWJfaW5zdGFsbGF0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiaW5zdGFsbGVkX2J5XCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghaW5zdGFsbGF0aW9uKSB7XG4gICAgLy8gTm8gR2l0SHViIEFwcCBpbnN0YWxsYXRpb24gLSBwcm9tcHQgdXNlciB0byBpbnN0YWxsXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiSW5zdGFsbGF0aW9uIE5lZWRlZFwiLFxuICAgIH07XG4gIH1cblxuICAvL3BhcnNlIHVybCBmb3Igb3duZXIgYW5kIHJlcG9cbiAgY29uc3QgeyBvd25lciwgcmVwbzogcmVwb05hbWUgfSA9IHBhcnNlR2l0SHViVXJsKHVybCk7XG5cbiAgY29uc3QgaGFzQWNjZXNzID0gYXdhaXQgdmVyaWZ5R2l0aHViUmVwb0FjY2VzcyhcbiAgICBpbnN0YWxsYXRpb24uaW5zdGFsbGF0aW9uX2lkLFxuICAgIG93bmVyLFxuICAgIHJlcG9OYW1lLFxuICApO1xuXG4gIGlmICghaGFzQWNjZXNzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiQWNjZXNzIERlbmllZFwiLFxuICAgIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IHJlcG8sIGVycm9yOiByZXBvRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLmluc2VydCh7XG4gICAgICBuYW1lLFxuICAgICAgcHJvdmlkZXIsXG4gICAgICByZXBvX3VybDogdXJsLFxuICAgICAgb3JnYW5pemF0aW9uX2lkOiBvcmdJZCxcbiAgICAgIGluZGV4ZWRfYnk6IHVzZXIuaWQsXG4gICAgICBpbmRleF9zdGF0dXM6IFwibm90IGluZGV4ZWRcIixcbiAgICB9KVxuICAgIC5zZWxlY3QoKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAocmVwb0Vycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiByZXBvRXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVwbyBhcyBSZXBvIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZXBvVmlhR2l0bGFiKFxuICBmb3JtRGF0YTogRm9ybURhdGEsXG4gIG9yZ0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvIHwgdW5kZWZpbmVkPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgY29uc3QgcHJvdmlkZXIgPSBmb3JtRGF0YS5nZXQoXCJ0eXBlXCIpIGFzIHN0cmluZztcbiAgY29uc3QgdXJsID0gZm9ybURhdGEuZ2V0KFwiZ2l0bGFiLXVybFwiKSBhcyBzdHJpbmc7XG5cbiAgLy8gVmFsaWRhdGUgaW5wdXRzXG4gIGlmICghbmFtZSB8fCBuYW1lLnRyaW0oKSA9PT0gXCJcIikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJSZXBvc2l0b3J5IG5hbWUgaXMgcmVxdWlyZWRcIiB9O1xuICB9XG5cbiAgaWYgKCF1cmwgfHwgdXJsLnRyaW0oKSA9PT0gXCJcIikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJHaXRMYWIgVVJMIGlzIHJlcXVpcmVkXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogaW5zdGFsbGF0aW9uIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImdpdGxhYl9pbnN0YWxsYXRpb25zXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpbnN0YWxsZWRfYnlcIiwgdXNlci5pZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKCFpbnN0YWxsYXRpb24pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiSW5zdGFsbGF0aW9uIE5lZWRlZFwiIH07XG4gIH1cblxuICBjb25zdCB7IG93bmVyLCByZXBvOiByZXBvTmFtZSB9ID0gcGFyc2VHaXRMYWJVcmwodXJsKTtcblxuICAvL3ZlcmlmeSBhY2Nlc3NcbiAgY29uc3QgaGFzQWNjZXNzID0gYXdhaXQgdmVyaWZ5R2l0TGFiUmVwb0FjY2VzcyhcbiAgICBpbnN0YWxsYXRpb24uYWNjZXNzX3Rva2VuLFxuICAgIG93bmVyLFxuICAgIHJlcG9OYW1lLFxuICApO1xuXG4gIGlmICghaGFzQWNjZXNzKSB7XG4gICAgaWYgKGluc3RhbGxhdGlvbi5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogXCJBY2Nlc3MgcmVxdWlyZWQhXCIsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yOiBcIkFjY2VzcyBkZW5pZWQhXCIsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3I6IHJlcG9FcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAuaW5zZXJ0KHtcbiAgICAgIG5hbWUsXG4gICAgICBwcm92aWRlcixcbiAgICAgIHJlcG9fdXJsOiB1cmwsXG4gICAgICBvcmdhbml6YXRpb25faWQ6IG9yZ0lkLFxuICAgICAgaW5kZXhlZF9ieTogdXNlci5pZCxcbiAgICAgIGluZGV4X3N0YXR1czogXCJub3QgaW5kZXhlZFwiLFxuICAgIH0pXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChyZXBvRXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHJlcG9FcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXBvIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZXBvVmlhTG9jYWxGaWxlKFxuICBmb3JtRGF0YTogRm9ybURhdGEsXG4gIG9yZ0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgY29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldChcImZpbGVcIikgYXMgRmlsZTtcblxuICAvLyBWYWxpZGF0ZSBpbnB1dHNcbiAgaWYgKCFuYW1lIHx8IG5hbWUudHJpbSgpID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlJlcG9zaXRvcnkgbmFtZSBpcyByZXF1aXJlZFwiIH07XG4gIH1cblxuICBpZiAoIWZpbGUpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmlsZSBpcyByZXF1aXJlZFwiIH07XG4gIH1cblxuICAvLyBWYWxpZGF0ZSBmaWxlIHR5cGVcbiAgaWYgKCFmaWxlLm5hbWUuZW5kc1dpdGgoXCIuemlwXCIpKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIk9ubHkgLnppcCBmaWxlcyBhcmUgYWxsb3dlZFwiIH07XG4gIH1cblxuICAvLyBWYWxpZGF0ZSBmaWxlIHNpemUgKG1heCAxMDBNQilcbiAgY29uc3QgbWF4U2l6ZSA9IDEwMCAqIDEwMjQgKiAxMDI0OyAvLyAxMDBNQiBpbiBieXRlc1xuICBpZiAoZmlsZS5zaXplID4gbWF4U2l6ZSkge1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yOiBcIkZpbGUgc2l6ZSBleGNlZWRzIDEwME1CIGxpbWl0XCIsXG4gICAgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gR2VuZXJhdGUgYSB1bmlxdWUgZmlsZSBuYW1lIHRvIHByZXZlbnQgY29sbGlzaW9uc1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IERhdGUubm93KCk7XG4gICAgY29uc3Qgc2FuaXRpemVkTmFtZSA9IG5hbWUudHJpbSgpLnJlcGxhY2UoL1teYS16MC05LV9dL2dpLCBcIl9cIik7XG4gICAgY29uc3QgZmlsZU5hbWUgPSBgJHtzYW5pdGl6ZWROYW1lfV8ke3RpbWVzdGFtcH1fJHtmaWxlLm5hbWV9YDtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGAke29yZ0lkfS8ke2ZpbGVOYW1lfWA7XG5cbiAgICAvLyBVcGxvYWQgZmlsZSB0byBTdXBhYmFzZSBTdG9yYWdlXG4gICAgY29uc3QgeyBlcnJvcjogdXBsb2FkRXJyb3IgfSA9IGF3YWl0IGNsaWVudC5zdG9yYWdlXG4gICAgICAuZnJvbShcImxvY2FsX3JlcG9zXCIpXG4gICAgICAudXBsb2FkKGZpbGVQYXRoLCBmaWxlLCB7XG4gICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL3ppcFwiLFxuICAgICAgICB1cHNlcnQ6IGZhbHNlLFxuICAgICAgfSk7XG5cbiAgICBpZiAodXBsb2FkRXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJVcGxvYWQgZXJyb3I6XCIsIHVwbG9hZEVycm9yKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogYEZpbGUgdXBsb2FkIGZhaWxlZDogJHt1cGxvYWRFcnJvci5tZXNzYWdlfWAsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEdldCB0aGUgcHVibGljIFVSTCBmb3IgdGhlIHVwbG9hZGVkIGZpbGVcbiAgICBjb25zdCB7IGRhdGE6IHVybERhdGEgfSA9IGNsaWVudC5zdG9yYWdlXG4gICAgICAuZnJvbShcImxvY2FsX3JlcG9zXCIpXG4gICAgICAuZ2V0UHVibGljVXJsKGZpbGVQYXRoKTtcblxuICAgIC8vIENyZWF0ZSByZXBvc2l0b3J5IHJlY29yZCBpbiBkYXRhYmFzZVxuICAgIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3I6IHJlcG9FcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgICAgLmluc2VydCh7XG4gICAgICAgIG5hbWU6IG5hbWUudHJpbSgpLFxuICAgICAgICBwcm92aWRlcjogXCJsb2NhbFwiLFxuICAgICAgICByZXBvX3VybDogbnVsbCxcbiAgICAgICAgb2JqZWN0X3VybDogdXJsRGF0YS5wdWJsaWNVcmwsXG4gICAgICAgIG9yZ2FuaXphdGlvbl9pZDogb3JnSWQsXG4gICAgICAgIGluZGV4ZWRfYnk6IHVzZXIuaWQsXG4gICAgICAgIGluZGV4X3N0YXR1czogXCJub3QgaW5kZXhlZFwiLFxuICAgICAgfSlcbiAgICAgIC5zZWxlY3QoKVxuICAgICAgLnNpbmdsZSgpO1xuXG4gICAgaWYgKHJlcG9FcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIlJlcG9zaXRvcnkgY3JlYXRpb24gZXJyb3I6XCIsIHJlcG9FcnJvcik7XG4gICAgICAvLyBBdHRlbXB0IHRvIGNsZWFuIHVwIHVwbG9hZGVkIGZpbGVcbiAgICAgIGF3YWl0IGNsaWVudC5zdG9yYWdlLmZyb20oXCJsb2NhbF9yZXBvc1wiKS5yZW1vdmUoW2ZpbGVQYXRoXSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IGBSZXBvc2l0b3J5IGNyZWF0aW9uIGZhaWxlZDogJHtyZXBvRXJyb3IubWVzc2FnZX1gLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXBvIGFzIFJlcG8gfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiVW5leHBlY3RlZCBlcnJvcjpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yOlxuICAgICAgICBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZFwiLFxuICAgIH07XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUmVwb3NpdG9yeSBNYW5hZ2VtZW50IFNlcnZpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXBvV2l0aFN0YXR1cyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFyZXBvKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlJlcG9zaXRvcnkgbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlcG8gYXMgUmVwbyB9O1xufVxuXG50eXBlIFVwZGF0ZURhdGEgPSB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHJlcG9fdXJsPzogc3RyaW5nO1xuICBvYmplY3RfdXJsPzogc3RyaW5nO1xuICBpbmRleF9zdGF0dXM/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUmVwb1NldHRpbmdzKFxuICByZXBvSWQ6IHN0cmluZyxcbiAgc2V0dGluZ3M6IHsgbmFtZT86IHN0cmluZzsgcmVwb191cmw/OiBzdHJpbmc7IGZpbGU/OiBGaWxlIH0sXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIC8vIEdldCB0aGUgY3VycmVudCByZXBvIHRvIGNoZWNrIGl0cyBwcm92aWRlciB0eXBlXG4gIGNvbnN0IHsgZGF0YTogY3VycmVudFJlcG8gfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghY3VycmVudFJlcG8pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUmVwb3NpdG9yeSBub3QgZm91bmQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZURhdGE6IFVwZGF0ZURhdGEgPSB7fTtcblxuICAvLyBIYW5kbGUgbmFtZSB1cGRhdGVcbiAgaWYgKHNldHRpbmdzLm5hbWUpIHtcbiAgICB1cGRhdGVEYXRhLm5hbWUgPSBzZXR0aW5ncy5uYW1lO1xuICB9XG5cbiAgLy8gSGFuZGxlIEdpdEh1YiBVUkwgdXBkYXRlXG4gIGlmIChzZXR0aW5ncy5yZXBvX3VybCAmJiBjdXJyZW50UmVwby5wcm92aWRlciA9PT0gXCJnaXRodWJcIikge1xuICAgIGNvbnN0IHsgb3duZXIsIHJlcG8gfSA9IHBhcnNlR2l0SHViVXJsKHNldHRpbmdzLnJlcG9fdXJsKTtcblxuICAgIGlmICghb3duZXIgfHwgIXJlcG8pIHtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJJbnZhbGlkIEdpdEh1YiBVUkwgZm9ybWF0IVwiIH07XG4gICAgfVxuXG4gICAgLy8gVmVyaWZ5IGFjY2VzcyB0byB0aGUgbmV3IHJlcG9cbiAgICBjb25zdCB7IGRhdGE6IGluc3RhbGxhdGlvbiB9ID0gYXdhaXQgY2xpZW50XG4gICAgICAuZnJvbShcImdpdGh1Yl9pbnN0YWxsYXRpb25zXCIpXG4gICAgICAuc2VsZWN0KFwiKlwiKVxuICAgICAgLmVxKFwiaW5zdGFsbGVkX2J5XCIsIHVzZXIuaWQpXG4gICAgICAuc2luZ2xlKCk7XG5cbiAgICBpZiAoIWluc3RhbGxhdGlvbikge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkdpdEh1YiBBcHAgbm90IGluc3RhbGxlZCFcIiB9O1xuICAgIH1cblxuICAgIGNvbnN0IGhhc0FjY2VzcyA9IGF3YWl0IHZlcmlmeUdpdGh1YlJlcG9BY2Nlc3MoXG4gICAgICBpbnN0YWxsYXRpb24uaW5zdGFsbGF0aW9uX2lkLnRvU3RyaW5nKCksXG4gICAgICBvd25lcixcbiAgICAgIHJlcG8sXG4gICAgKTtcblxuICAgIGlmICghaGFzQWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6XG4gICAgICAgICAgXCJDYW5ub3QgYWNjZXNzIHRoaXMgcmVwb3NpdG9yeS4gTWFrZSBzdXJlIHRoZSBHaXRIdWIgQXBwIGlzIGluc3RhbGxlZCBmb3IgdGhpcyByZXBvc2l0b3J5LlwiLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICB1cGRhdGVEYXRhLnJlcG9fdXJsID0gc2V0dGluZ3MucmVwb191cmw7XG4gICAgdXBkYXRlRGF0YS5pbmRleF9zdGF0dXMgPSBcIm5vdCBpbmRleGVkXCI7IC8vIFRyaWdnZXIgcmUtaW5kZXhpbmdcbiAgfVxuXG4gIC8vIEhhbmRsZSBsb2NhbCBmaWxlIHVwbG9hZFxuICBpZiAoc2V0dGluZ3MuZmlsZSAmJiBjdXJyZW50UmVwby5wcm92aWRlciA9PT0gXCJsb2NhbFwiKSB7XG4gICAgY29uc3QgZmlsZSA9IHNldHRpbmdzLmZpbGU7XG4gICAgY29uc3QgZmlsZUV4dCA9IGZpbGUubmFtZS5zcGxpdChcIi5cIikucG9wKCk7XG5cbiAgICBpZiAoZmlsZUV4dCAhPT0gXCJ6aXBcIikge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIk9ubHkgLnppcCBmaWxlcyBhcmUgYWxsb3dlZCFcIiB9O1xuICAgIH1cblxuICAgIC8vIFVwbG9hZCB0byBTdXBhYmFzZSBTdG9yYWdlXG4gICAgY29uc3QgZmlsZU5hbWUgPSBgJHtyZXBvSWR9LSR7RGF0ZS5ub3coKX0uemlwYDtcbiAgICBjb25zdCB7IGRhdGE6IHVwbG9hZERhdGEsIGVycm9yOiB1cGxvYWRFcnJvciB9ID0gYXdhaXQgY2xpZW50LnN0b3JhZ2VcbiAgICAgIC5mcm9tKFwibG9jYWxfcmVwb3NcIilcbiAgICAgIC51cGxvYWQoZmlsZU5hbWUsIGZpbGUpO1xuXG4gICAgaWYgKHVwbG9hZEVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKHVwbG9hZEVycm9yKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gdXBsb2FkIGZpbGUhXCIgfTtcbiAgICB9XG5cbiAgICAvLyBHZXQgcHVibGljIFVSTFxuICAgIGNvbnN0IHsgZGF0YTogdXJsRGF0YSB9ID0gY2xpZW50LnN0b3JhZ2VcbiAgICAgIC5mcm9tKFwibG9jYWxfcmVwb3NcIilcbiAgICAgIC5nZXRQdWJsaWNVcmwoZmlsZU5hbWUpO1xuXG4gICAgdXBkYXRlRGF0YS5vYmplY3RfdXJsID0gdXJsRGF0YS5wdWJsaWNVcmw7XG4gICAgdXBkYXRlRGF0YS5pbmRleF9zdGF0dXMgPSBcInBlbmRpbmdcIjsgLy8gVHJpZ2dlciByZS1pbmRleGluZ1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSByZXBvc2l0b3J5XG4gIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnVwZGF0ZSh1cGRhdGVEYXRhKVxuICAgIC5lcShcImlkXCIsIHJlcG9JZClcbiAgICAuc2VsZWN0KClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXBvIGFzIFJlcG8gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVJlcG8oXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8eyBvcmdhbml6YXRpb25JZDogc3RyaW5nIH0+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gRmV0Y2ggdGhlIG9yZ2FuaXphdGlvbl9pZCBiZWZvcmUgZGVsZXRpbmdcbiAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvcjogcmVwb0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgIC5zZWxlY3QoXCJvcmdhbml6YXRpb25faWRcIilcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChyZXBvRXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKHJlcG9FcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiByZXBvRXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFyZXBvKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlJlcG9zaXRvcnkgbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IGNsaWVudC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpLmRlbGV0ZSgpLmVxKFwiaWRcIiwgcmVwb0lkKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHsgb3JnYW5pemF0aW9uSWQ6IHJlcG8ub3JnYW5pemF0aW9uX2lkIH0gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRyaWdnZXJSZWluZGV4KFxuICByZXBvSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PHZvaWQ+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSBpbmRleF9zdGF0dXMgdG8gJ3BlbmRpbmcnIHRvIHRyaWdnZXIgcmVpbmRleGluZ1xuICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgIC51cGRhdGUoeyBpbmRleF9zdGF0dXM6IFwicGVuZGluZ1wiIH0pXG4gICAgLmVxKFwiaWRcIiwgcmVwb0lkKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIC8vIFRPRE86IFRyaWdnZXIgYWN0dWFsIGluZGV4aW5nIGpvYi93ZWJob29rL3F1ZXVlIGhlcmVcbiAgLy8gVGhpcyBjb3VsZCBiZSBhbiBBUEkgY2FsbCB0byB5b3VyIGluZGV4aW5nIHNlcnZpY2VcblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1bmRlZmluZWQgfTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRG9jdW1lbnRhdGlvbiBTZXJ2aWNlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jdW1lbnRhdGlvbihcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2N1bWVudGF0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogZG9jdW1lbnRhdGlvbiwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFkb2N1bWVudGF0aW9uKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkRvY3VtZW50YXRpb24gbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGRvY3VtZW50YXRpb24gYXMgRG9jdW1lbnRhdGlvbiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jUGFnZXMoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jUGFnZVtdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIC8vIEdldCB0aGUgbGF0ZXN0IGRvY3VtZW50YXRpb24gdmVyc2lvbiBmb3IgdGhpcyByZXBvXG4gIGNvbnN0IHsgZGF0YTogZG9jdW1lbnRhdGlvbiwgZXJyb3I6IGRvY0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwiaWRcIilcbiAgICAuZXEoXCJyZXBvX2lkXCIsIHJlcG9JZClcbiAgICAub3JkZXIoXCJ2ZXJzaW9uXCIsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxuICAgIC5saW1pdCgxKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZG9jRXJyb3IgfHwgIWRvY3VtZW50YXRpb24pIHtcbiAgICBjb25zb2xlLmVycm9yKGRvY0Vycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRG9jdW1lbnRhdGlvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdlcywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicGFnZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImRvY3VtZW50YXRpb25faWRcIiwgZG9jdW1lbnRhdGlvbi5pZClcbiAgICAub3JkZXIoXCJvcmRlcl9pbmRleFwiLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChwYWdlcyA/PyBbXSkgYXMgRG9jUGFnZVtdIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2NQYWdlQnlJZChcbiAgcGFnZUlkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2NQYWdlPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcGFnZSwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jX3BhZ2VzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpZFwiLCBwYWdlSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFwYWdlKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlBhZ2Ugbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHBhZ2UgYXMgRG9jUGFnZSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jUGFnZXNIaWVyYXJjaGljYWwoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jUGFnZVtdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIC8vIEZpcnN0IGdldCB0aGUgZG9jdW1lbnRhdGlvbiBJRCBmb3IgdGhpcyByZXBvXG4gIGNvbnN0IHsgZGF0YTogZG9jdW1lbnRhdGlvbiwgZXJyb3I6IGRvY0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwiaWRcIilcbiAgICAuZXEoXCJyZXBvX2lkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGRvY0Vycm9yIHx8ICFkb2N1bWVudGF0aW9uKSB7XG4gICAgY29uc29sZS5lcnJvcihkb2NFcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkRvY3VtZW50YXRpb24gbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcGFnZXMsIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY19wYWdlc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiZG9jdW1lbnRhdGlvbl9pZFwiLCBkb2N1bWVudGF0aW9uLmlkKVxuICAgIC5vcmRlcihcIm9yZGVyX2luZGV4XCIsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgLy8gUGFnZXMgYXJlIGFscmVhZHkgc29ydGVkIGJ5IG9yZGVyX2luZGV4XG4gIC8vIFRoZSBwYXJlbnRfcGFnZV9pZCBmaWVsZCBtYWludGFpbnMgdGhlIGhpZXJhcmNoeVxuICAvLyBGcm9udGVuZCBjYW4gdXNlIHRoaXMgdG8gcmVuZGVyIHRoZSB0cmVlIHN0cnVjdHVyZVxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiAocGFnZXMgPz8gW10pIGFzIERvY1BhZ2VbXSB9O1xufVxuXG4vKipcbiAqIEdldCBhbGwgZG9jdW1lbnRhdGlvbiB2ZXJzaW9ucyBmb3IgYSByZXBvc2l0b3J5XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2N1bWVudGF0aW9uVmVyc2lvbnMoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jdW1lbnRhdGlvbltdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogdmVyc2lvbnMsIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5vcmRlcihcInZlcnNpb25cIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKHZlcnNpb25zID8/IFtdKSBhcyBEb2N1bWVudGF0aW9uW10gfTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGxhdGVzdCBjb21wbGV0ZWQgZG9jdW1lbnRhdGlvbiB2ZXJzaW9uIGZvciBhIHJlcG9zaXRvcnlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExhdGVzdERvY3VtZW50YXRpb24oXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jdW1lbnRhdGlvbj4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGRvY3VtZW50YXRpb24sIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5vcmRlcihcInZlcnNpb25cIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXG4gICAgLmxpbWl0KDEpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghZG9jdW1lbnRhdGlvbikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJEb2N1bWVudGF0aW9uIG5vdCBmb3VuZFwiIH07XG4gIH1cblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGRvY3VtZW50YXRpb24gYXMgRG9jdW1lbnRhdGlvbiB9O1xufVxuXG4vKipcbiAqIEdldCBkb2N1bWVudGF0aW9uIHBhZ2VzIGZvciBhIHNwZWNpZmljIHZlcnNpb25cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERvY1BhZ2VzRm9yVmVyc2lvbihcbiAgcmVwb0lkOiBzdHJpbmcsXG4gIHZlcnNpb246IG51bWJlcixcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PERvY1BhZ2VbXT4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICAvLyBHZXQgdGhlIGRvY3VtZW50YXRpb24gcmVjb3JkIGZvciB0aGlzIHZlcnNpb25cbiAgY29uc3QgeyBkYXRhOiBkb2N1bWVudGF0aW9uLCBlcnJvcjogZG9jRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCJpZFwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5lcShcInZlcnNpb25cIiwgdmVyc2lvbilcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGRvY0Vycm9yIHx8ICFkb2N1bWVudGF0aW9uKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkRvY3VtZW50YXRpb24gdmVyc2lvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdlcywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicGFnZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImRvY3VtZW50YXRpb25faWRcIiwgZG9jdW1lbnRhdGlvbi5pZClcbiAgICAub3JkZXIoXCJvcmRlcl9pbmRleFwiLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChwYWdlcyA/PyBbXSkgYXMgRG9jUGFnZVtdIH07XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENvbnZlcnNhdGlvbiBTZXJ2aWNlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29udmVyc2F0aW9ucyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4gIGxpbWl0OiBudW1iZXIgPSAyMCxcbiAgdmVyc2lvbjogbnVtYmVyIHwgbnVsbCA9IG51bGwsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxDb252ZXJzYXRpb25bXT4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBsZXQgcXVlcnkgPSBjbGllbnRcbiAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlci5pZCk7XG5cbiAgLy8gRmlsdGVyIGJ5IHZlcnNpb24gaWYgc3BlY2lmaWVkXG4gIGlmICh2ZXJzaW9uICE9PSBudWxsICYmIHZlcnNpb24gIT09IHVuZGVmaW5lZCkge1xuICAgIHF1ZXJ5ID0gcXVlcnkuZXEoXCJyZXBvX3ZlcnNpb25cIiwgdmVyc2lvbik7XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGNvbnZlcnNhdGlvbnMsIGVycm9yIH0gPSBhd2FpdCBxdWVyeVxuICAgIC5vcmRlcihcInVwZGF0ZWRfYXRcIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXG4gICAgLmxpbWl0KGxpbWl0KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChjb252ZXJzYXRpb25zID8/IFtdKSBhcyBDb252ZXJzYXRpb25bXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29udmVyc2F0aW9uQnlJZChcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbj4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGNvbnZlcnNhdGlvbiwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiaWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIGlmICghY29udmVyc2F0aW9uKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkNvbnZlcnNhdGlvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY29udmVyc2F0aW9uIGFzIENvbnZlcnNhdGlvbiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ29udmVyc2F0aW9uKFxuICByZXBvSWQ6IHN0cmluZyxcbiAgdGl0bGU/OiBzdHJpbmcsXG4gIHZlcnNpb24/OiBudW1iZXIgfCBudWxsLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29udmVyc2F0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogY29udmVyc2F0aW9uLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLmluc2VydCh7XG4gICAgICByZXBvX2lkOiByZXBvSWQsXG4gICAgICB1c2VyX2lkOiB1c2VyLmlkLFxuICAgICAgdGl0bGU6IHRpdGxlIHx8IFwiTmV3IENvbnZlcnNhdGlvblwiLFxuICAgICAgcmVwb192ZXJzaW9uOiB2ZXJzaW9uID8/IG51bGwsXG4gICAgfSlcbiAgICAuc2VsZWN0KClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjb252ZXJzYXRpb24gYXMgQ29udmVyc2F0aW9uIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDb252ZXJzYXRpb24oXG4gIGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDx2b2lkPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgIC5kZWxldGUoKVxuICAgIC5lcShcImlkXCIsIGNvbnZlcnNhdGlvbklkKVxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlci5pZCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1bmRlZmluZWQgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbmFtZUNvbnZlcnNhdGlvbihcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbiAgbmV3VGl0bGU6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbj4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGNvbnZlcnNhdGlvbiwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgIC51cGRhdGUoeyB0aXRsZTogbmV3VGl0bGUgfSlcbiAgICAuZXEoXCJpZFwiLCBjb252ZXJzYXRpb25JZClcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY29udmVyc2F0aW9uIGFzIENvbnZlcnNhdGlvbiB9O1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNZXNzYWdlIFNlcnZpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb252ZXJzYXRpb25NZXNzYWdlcyhcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbk1lc3NhZ2VbXT4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IG1lc3NhZ2VzLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJtZXNzYWdlc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiY29udmVyc2F0aW9uX2lkXCIsIGNvbnZlcnNhdGlvbklkKVxuICAgIC5vcmRlcihcImNyZWF0ZWRfYXRcIiwgeyBhc2NlbmRpbmc6IHRydWUgfSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiAobWVzc2FnZXMgPz8gW10pIGFzIENvbnZlcnNhdGlvbk1lc3NhZ2VbXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTWVzc2FnZShcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbiAgcm9sZTogXCJ1c2VyXCIgfCBcImFzc2lzdGFudFwiLFxuICBjb250ZW50OiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxDb252ZXJzYXRpb25NZXNzYWdlPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogbWVzc2FnZSwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwibWVzc2FnZXNcIilcbiAgICAuaW5zZXJ0KHtcbiAgICAgIGNvbnZlcnNhdGlvbl9pZDogY29udmVyc2F0aW9uSWQsXG4gICAgICByb2xlLFxuICAgICAgY29udGVudCxcbiAgICB9KVxuICAgIC5zZWxlY3QoKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSB0aGUgY29udmVyc2F0aW9uJ3MgdXBkYXRlZF9hdCB0aW1lc3RhbXBcbiAgYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLnVwZGF0ZSh7IHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSB9KVxuICAgIC5lcShcImlkXCIsIGNvbnZlcnNhdGlvbklkKTtcblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBtZXNzYWdlIGFzIENvbnZlcnNhdGlvbk1lc3NhZ2UgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVDb2RlU25pcHBldHMoXG4gIGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsXG4gIG1lc3NhZ2VJZDogc3RyaW5nLFxuICBzbmlwcGV0czogQXJyYXk8eyBmaWxlOiBzdHJpbmc7IGNvZGU6IHN0cmluZyB9Pixcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvZGVTbmlwcGV0W10+PiB7XG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qgc25pcHBldHNUb0luc2VydCA9IHNuaXBwZXRzLm1hcCgoc25pcHBldCkgPT4gKHtcbiAgICBjb252ZXJzYXRpb25faWQ6IGNvbnZlcnNhdGlvbklkLFxuICAgIG1lc3NhZ2VfaWQ6IG1lc3NhZ2VJZCxcbiAgICBmaWxlX3BhdGg6IHNuaXBwZXQuZmlsZSxcbiAgICBjb2RlX2NvbnRlbnQ6IHNuaXBwZXQuY29kZSxcbiAgICBsYW5ndWFnZTogc25pcHBldC5maWxlLnNwbGl0KFwiLlwiKS5wb3AoKSB8fCBudWxsLFxuICB9KSk7XG5cbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbShcImNvZGVfc25pcHBldHNcIilcbiAgICAuaW5zZXJ0KHNuaXBwZXRzVG9JbnNlcnQpXG4gICAgLnNlbGVjdCgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogZGF0YSBhcyBDb2RlU25pcHBldFtdIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb2RlU25pcHBldHNGb3JDb252ZXJzYXRpb24oXG4gIGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxDb2RlU25pcHBldFtdPj4ge1xuICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oXCJjb2RlX3NuaXBwZXRzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJjb252ZXJzYXRpb25faWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgLm9yZGVyKFwiY3JlYXRlZF9hdFwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBkYXRhIGFzIENvZGVTbmlwcGV0W10gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNvZGVTbmlwcGV0KFxuICBzbmlwcGV0SWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PG51bGw+PiB7XG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbShcImNvZGVfc25pcHBldHNcIilcbiAgICAuZGVsZXRlKClcbiAgICAuZXEoXCJpZFwiLCBzbmlwcGV0SWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogbnVsbCB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5kZXhSZXBvc2l0b3J5KFxuICByZXBvSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PHZvaWQ+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBpbnN0YWxsYXRpb24sIGVycm9yOiBpbnN0YWxsYXRpb25FcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJnaXRodWJfaW5zdGFsbGF0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiaW5zdGFsbGVkX2J5XCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghaW5zdGFsbGF0aW9uIHx8IGluc3RhbGxhdGlvbkVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkdpdGh1YiBBcHAgSW5zdGFsbGF0aW9uIG5vdCBmb3VuZCFcIiB9O1xuICB9XG5cbiAgLy9mZXRjaCByZXBvXG5cbiAgY29uc3QgcmVwb1Jlc3VsdCA9IGF3YWl0IGdldFJlcG9XaXRoU3RhdHVzKHJlcG9JZCk7XG5cbiAgaWYgKCFyZXBvUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHJlcG9SZXN1bHQuZXJyb3IgfTtcbiAgfVxuXG4gIGNvbnN0IHJlcG9VcmwgPSByZXBvUmVzdWx0LmRhdGEucmVwb191cmw7XG4gIGNvbnN0IGluc3RhbGxhdGlvbklkID0gaW5zdGFsbGF0aW9uLmluc3RhbGxhdGlvbl9pZDtcblxuICAvLyBHZXQgdGhlIGxhdGVzdCB2ZXJzaW9uIG51bWJlciBmb3IgdGhpcyByZXBvXG4gIGNvbnN0IHsgZGF0YTogbGF0ZXN0RG9jIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwidmVyc2lvblwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5vcmRlcihcInZlcnNpb25cIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXG4gICAgLmxpbWl0KDEpXG4gICAgLnNpbmdsZSgpO1xuXG4gIC8vIEluY3JlbWVudCB2ZXJzaW9uIChzdGFydCBhdCAxIGlmIG5vIHByZXZpb3VzIHZlcnNpb25zKVxuICBjb25zdCBuZXh0VmVyc2lvbiA9IChsYXRlc3REb2M/LnZlcnNpb24gPz8gMCkgKyAxO1xuXG4gIC8vbWFyayB0aGUgcmVwb3NpdG9yeSBhcyBpbmRleGluZyBpbiBzdXBhYmFzZSBmaXJzdFxuICBjb25zdCB7IGVycm9yOiB1cGRhdGVFcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAudXBkYXRlKHsgaW5kZXhfc3RhdHVzOiBcImluZGV4aW5nXCIgfSlcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpO1xuXG4gIGlmICh1cGRhdGVFcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IodXBkYXRlRXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogdXBkYXRlRXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgLy8gQ2FsbCB0aGUgYmFja2VuZCB0byBzdGFydCBpbmRleGluZyAoZmlyZS1hbmQtZm9yZ2V0KVxuICAvLyBEb24ndCBhd2FpdCBvciB0aHJvdyBlcnJvcnMgc2luY2UgdGhpcyBpcyBhIGxvbmctcnVubmluZyBvcGVyYXRpb25cbiAgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L3JlcG9zL2luZGV4YCwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICByZXBvX3VybDogcmVwb1VybCxcbiAgICAgIHJlcG9faWQ6IHJlcG9JZCxcbiAgICAgIHVzZXJfaWQ6IHVzZXIuaWQsXG4gICAgICBpbnN0YWxsYXRpb25faWQ6IGluc3RhbGxhdGlvbklkLFxuICAgICAgYnJhbmNoOiBcIm1haW5cIixcbiAgICAgIHZlcnNpb246IG5leHRWZXJzaW9uLFxuICAgIH0pLFxuICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAvLyBMb2cgdGhlIGVycm9yIGJ1dCBkb24ndCBmYWlsIHRoZSByZXF1ZXN0XG4gICAgY29uc29sZS5lcnJvcihcIkluZGV4aW5nIHJlcXVlc3QgZmFpbGVkOlwiLCBlcnJvcik7XG4gICAgLy8gVGhlIGJhY2tlbmQgc2hvdWxkIGhhbmRsZSB1cGRhdGluZyB0aGUgcmVwbyBzdGF0dXMgb24gZmFpbHVyZVxuICB9KTtcblxuICAvLyBSZXR1cm4gc3VjY2VzcyBpbW1lZGlhdGVseSAtIHRoZSBpbmRleGluZyB3aWxsIGhhcHBlbiBpbiB0aGUgYmFja2dyb3VuZFxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1bmRlZmluZWQgfTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoieVNBa2tDc0IifQ==
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$116823__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/services/data:116823 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$0daadf__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/services/data:0daadf [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$4d1ccc__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/services/data:4d1ccc [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$db0924__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/services/data:db0924 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$03130b__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/services/data:03130b [app-ssr] (ecmascript) <text/javascript>");
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$116823__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getConversationMessages"])(conversation.id);
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$db0924__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getCodeSnippetsForConversation"])(conversation.id);
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$0daadf__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createConversation"])(repoId, userQuestion, selectedVersion);
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
            const messageResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$4d1ccc__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createMessage"])(currentConversation.id, "user", userQuestion);
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
            const codeSnippets = []; // Accumulate snippets from stream
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
                            // Handle content events: {"type": "content", "content": "..."}
                            if (dataObj.type === "content" && dataObj.content) {
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
                            } else if (dataObj.type === "snippet" && dataObj.file && dataObj.code) {
                                const newSnippet = {
                                    file: dataObj.file,
                                    code: dataObj.code
                                };
                                codeSnippets.push(newSnippet);
                                // Update conversation turn with new snippet in real-time
                                setConversationTurns((prevTurns)=>prevTurns.map((turn)=>turn.id === turnId ? {
                                            ...turn,
                                            codeSnippets: [
                                                ...codeSnippets
                                            ]
                                        } : turn));
                            } else if (dataObj.content && typeof dataObj.content === "string" && !dataObj.type) {
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
            // Save assistant message to database first to get the real message ID
            let realMessageId = assistantMessageId;
            if (currentConversation && accumulatedText) {
                const assistantMessageResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$4d1ccc__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createMessage"])(currentConversation.id, "assistant", accumulatedText);
                if (assistantMessageResult.success) {
                    realMessageId = assistantMessageResult.data.id;
                } else {
                    console.error("Failed to save assistant message:", assistantMessageResult.error);
                }
            }
            // Save code snippets to database with the real message ID
            if (currentConversation && codeSnippets.length > 0) {
                const saveResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$03130b__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["saveCodeSnippets"])(currentConversation.id, realMessageId, codeSnippets);
                if (saveResult.success) {
                    queryClient.invalidateQueries({
                        queryKey: [
                            "codeSnippets",
                            currentConversation.id
                        ]
                    });
                    queryClient.invalidateQueries({
                        queryKey: [
                            "messages",
                            currentConversation.id
                        ]
                    });
                } else {
                    console.error("Failed to save code snippets:", saveResult.error);
                }
            }
            // Ensure final state is updated (in case no snippets were received)
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
                                    lineNumber: 568,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$chat$2f$version$2d$selector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/chat/chat-interface.tsx",
                                    lineNumber: 572,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/chat/chat-interface.tsx",
                            lineNumber: 567,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/chat/chat-interface.tsx",
                        lineNumber: 566,
                        columnNumber: 9
                    }, this),
                    showEmptyState ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$chat$2f$chat$2d$empty$2d$state$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        onSendMessage: sendMessage
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/chat/chat-interface.tsx",
                        lineNumber: 577,
                        columnNumber: 11
                    }, this) : showMessagesLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MessageListSkeleton, {}, void 0, false, {
                        fileName: "[project]/src/components/dashboard/chat/chat-interface.tsx",
                        lineNumber: 579,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$chat$2f$message$2d$list$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        messages: messages,
                        loading: responseLoading
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/chat/chat-interface.tsx",
                        lineNumber: 581,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$chat$2f$chat$2d$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        value: inputValue,
                        onChange: setInputValue,
                        onSend: handleSend,
                        disabled: chatInputDisabled
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/chat/chat-interface.tsx",
                        lineNumber: 583,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/chat/chat-interface.tsx",
                lineNumber: 564,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$chat$2f$answer$2d$panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                conversationTurns: conversationTurns
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/chat/chat-interface.tsx",
                lineNumber: 592,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/chat/chat-interface.tsx",
        lineNumber: 562,
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

//# sourceMappingURL=%5Broot-of-the-server%5D__81f26274._.js.map