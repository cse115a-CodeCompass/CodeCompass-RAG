module.exports = [
"[project]/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "formatRelativeTime",
    ()=>formatRelativeTime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function formatRelativeTime(dateString) {
    if (!dateString) return "";
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    if (diffInSeconds < 60) {
        return "just now";
    }
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
        return `${diffInMinutes} ${diffInMinutes === 1 ? "minute" : "minutes"} ago`;
    }
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
        return `${diffInHours} ${diffInHours === 1 ? "hour" : "hours"} ago`;
    }
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) {
        return `${diffInDays} ${diffInDays === 1 ? "day" : "days"} ago`;
    }
    const diffInWeeks = Math.floor(diffInDays / 7);
    if (diffInWeeks < 4) {
        return `${diffInWeeks} ${diffInWeeks === 1 ? "week" : "weeks"} ago`;
    }
    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths < 12) {
        return `${diffInMonths} ${diffInMonths === 1 ? "month" : "months"} ago`;
    }
    const diffInYears = Math.floor(diffInDays / 365);
    return `${diffInYears} ${diffInYears === 1 ? "year" : "years"} ago`;
}
}),
"[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground dark:text-dark:primary-foreground dark:bg-primary/70 dark:hover:bg-primary/80 dark:border border-primary/95",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 dark:hover:bg-destructive/50",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 dark:bg-secondary/70 dark:hover:bg-secondary/60",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-elevated dark:hover:text-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-7 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/lib/stores/useNavbarStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useNavBarStore",
    ()=>useNavBarStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
const useNavBarStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set)=>({
        contextText: "Dashboard",
        breadcrumbs: undefined,
        setContext: (text)=>set({
                contextText: text
            }),
        setBreadcrumbs: (breadcrumbs)=>set({
                breadcrumbs
            }),
        appendBreadcrumb: (breadcrumb)=>set((state)=>({
                    breadcrumbs: [
                        ...state.breadcrumbs || [],
                        breadcrumb
                    ]
                })),
        reset: ()=>set({
                contextText: "Dashboard",
                breadcrumbs: undefined
            })
    }));
}),
"[project]/src/lib/stores/useChatUIStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useChatUIStore",
    ()=>useChatUIStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
const DEFAULT_MODEL = {
    id: "claude-4.5-sonnet",
    name: "Claude 4.5 Sonnet",
    provider: "Anthropic"
};
const useChatUIStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set)=>({
        isExpanded: false,
        initialMessage: "",
        selectedModel: DEFAULT_MODEL,
        conversation: null,
        hasDocumentation: false,
        repoId: null,
        selectedVersion: null,
        expand: (message)=>set({
                isExpanded: true,
                initialMessage: message
            }),
        minimize: ()=>set({
                isExpanded: false,
                initialMessage: ""
            }),
        setSelectedModel: (model)=>set({
                selectedModel: model
            }),
        toggle: ()=>set((state)=>({
                    isExpanded: !state.isExpanded
                })),
        setHasDocumentation: (hasDocumentation)=>set({
                hasDocumentation
            }),
        setRepoId: (repoId)=>set({
                repoId
            }),
        setSelectedVersion: (version)=>set({
                selectedVersion: version
            }),
        startNewConversation: ()=>set({
                conversation: null,
                initialMessage: ""
            }),
        setConversation: (conversation)=>set({
                conversation
            }),
        reset: ()=>set({
                isExpanded: false,
                initialMessage: "",
                selectedModel: DEFAULT_MODEL,
                conversation: null,
                hasDocumentation: false,
                repoId: null,
                selectedVersion: null
            })
    }));
}),
"[project]/src/components/dashboard/navcontext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavContext",
    ()=>NavContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useNavbarStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/useNavbarStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useChatUIStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/useChatUIStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
// Map route patterns to display names
const routeDisplayNames = {
    "/dashboard": "Dashboard",
    "/dashboard/organizations": "Organizations",
    "/dashboard/repositories": "Repositories",
    "/dashboard/documentation": "Documentation",
    "/dashboard/chat": "Chat",
    "/dashboard/new": "New Organization"
};
function NavContext() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const { contextText, breadcrumbs } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useNavbarStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNavBarStore"])();
    const minimize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useChatUIStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatUIStore"])((state)=>state.minimize);
    const handleBreadcrumbClick = ()=>{
        // Reset chat state when navigating away
        minimize();
    };
    // Derive context from URL as fallback
    const defaultContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        // Check for exact matches first
        if (routeDisplayNames[pathname]) {
            return routeDisplayNames[pathname];
        }
        // Handle dynamic routes
        if (pathname.startsWith("/dashboard/org/")) {
            return "Organization";
        }
        if (pathname.startsWith("/dashboard/repo/")) {
            return "Repository";
        }
        if (pathname.startsWith("/dashboard/new/")) {
            return "New Repository";
        }
        // Default fallback
        return "Dashboard";
    }, [
        pathname
    ]);
    // If breadcrumbs are set, display them
    if (breadcrumbs && breadcrumbs.length > 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: breadcrumbs.map((crumb, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        crumb.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: crumb.href,
                            prefetch: true,
                            onClick: handleBreadcrumbClick,
                            className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
                            children: crumb.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/navcontext.tsx",
                            lineNumber: 58,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-semibold text-foreground text-sm",
                            children: crumb.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/navcontext.tsx",
                            lineNumber: 67,
                            columnNumber: 15
                        }, this),
                        index < breadcrumbs.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-muted-foreground",
                            children: "/"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/navcontext.tsx",
                            lineNumber: 72,
                            columnNumber: 15
                        }, this)
                    ]
                }, index, true, {
                    fileName: "[project]/src/components/dashboard/navcontext.tsx",
                    lineNumber: 56,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/navcontext.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, this);
    }
    // Use store context if it's not the default, otherwise use URL-based fallback
    const displayText = contextText !== "Dashboard" ? contextText : defaultContext;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "font-semibold text-foreground text-sm",
        children: displayText
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/navcontext.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/utils/supabase/client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-ssr] (ecmascript)");
;
function createClient() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBrowserClient"])(("TURBOPACK compile-time value", "https://owtewckegdunfpfvagrm.supabase.co"), ("TURBOPACK compile-time value", "sb_publishable_yeIL8dBuZP_-Eq6G8wIPaw_gTzOTrWN"));
}
}),
"[project]/src/app/(auth)/client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "signInWithProvider",
    ()=>signInWithProvider,
    "signOut",
    ()=>signOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/supabase/client.ts [app-ssr] (ecmascript)");
"use client";
;
async function signInWithProvider(provider) {
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
            redirectTo: `${("TURBOPACK compile-time value", "http://localhost:3000")}/api/auth/callback`
        }
    });
    if (error) {
        console.error(`Error signing in with ${provider}:`, error.message);
    } else if (data?.url) {
        window.location.href = data.url; // Redirect to the provider’s OAuth page
    }
}
async function signOut() {
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
    const { error } = await supabase.auth.signOut();
    if (error) {
        console.error("Error signing out:", error.message);
        return;
    }
    window.location.href = "/";
}
}),
"[project]/src/components/dashboard/navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardNavbar",
    ()=>DashboardNavbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$navcontext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/navcontext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(auth)/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function DashboardNavbar() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "w-full bg-background border-b border-border",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-13 *:items-center justify-between px-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center flex-row gap-5 hover:cursor-pointer",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            whileHover: {
                                scale: 1.1
                            },
                            whileTap: {
                                scale: 0.95
                            },
                            transition: {
                                type: "spring",
                                stiffness: 400,
                                damping: 17
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/codecompass.png",
                                alt: "Logo",
                                width: 40,
                                height: 40,
                                className: "h-10 w-10",
                                onClick: ()=>{
                                    router.push("/dashboard/organizations");
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/navbar.tsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/navbar.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-extralight text-lg text-input",
                            children: "/"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/navbar.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$navcontext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavContext"], {}, void 0, false, {
                            fileName: "[project]/src/components/dashboard/navbar.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/navbar.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            size: "sm",
                            onClick: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signOut"],
                            children: "Sign Out"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/navbar.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "default",
                            size: "sm",
                            children: "Profile"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/navbar.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/navbar.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/navbar.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/navbar.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropdownMenu",
    ()=>DropdownMenu,
    "DropdownMenuCheckboxItem",
    ()=>DropdownMenuCheckboxItem,
    "DropdownMenuContent",
    ()=>DropdownMenuContent,
    "DropdownMenuGroup",
    ()=>DropdownMenuGroup,
    "DropdownMenuItem",
    ()=>DropdownMenuItem,
    "DropdownMenuLabel",
    ()=>DropdownMenuLabel,
    "DropdownMenuPortal",
    ()=>DropdownMenuPortal,
    "DropdownMenuRadioGroup",
    ()=>DropdownMenuRadioGroup,
    "DropdownMenuRadioItem",
    ()=>DropdownMenuRadioItem,
    "DropdownMenuSeparator",
    ()=>DropdownMenuSeparator,
    "DropdownMenuShortcut",
    ()=>DropdownMenuShortcut,
    "DropdownMenuSub",
    ()=>DropdownMenuSub,
    "DropdownMenuSubContent",
    ()=>DropdownMenuSubContent,
    "DropdownMenuSubTrigger",
    ()=>DropdownMenuSubTrigger,
    "DropdownMenuTrigger",
    ()=>DropdownMenuTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-ssr] (ecmascript) <export default as CircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function DropdownMenu({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dropdown-menu",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
function DropdownMenuPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dropdown-menu-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
function DropdownMenuTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dropdown-menu-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
function DropdownMenuContent({ className, sideOffset = 4, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "dropdown-menu-content",
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dropdown-menu.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
function DropdownMenuGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "dropdown-menu-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
function DropdownMenuItem({ className, inset, variant = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "dropdown-menu-item",
        "data-inset": inset,
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
function DropdownMenuCheckboxItem({ className, children, checked, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckboxItem"], {
        "data-slot": "dropdown-menu-checkbox-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
function DropdownMenuRadioGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioGroup"], {
        "data-slot": "dropdown-menu-radio-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
function DropdownMenuRadioItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioItem"], {
        "data-slot": "dropdown-menu-radio-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__["CircleIcon"], {
                        className: "size-2 fill-current"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
function DropdownMenuLabel({ className, inset, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "dropdown-menu-label",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
function DropdownMenuSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "dropdown-menu-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-border -mx-1 my-1 h-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
function DropdownMenuShortcut({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "dropdown-menu-shortcut",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground ml-auto text-xs tracking-widest", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
function DropdownMenuSub({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sub"], {
        "data-slot": "dropdown-menu-sub",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 198,
        columnNumber: 10
    }, this);
}
function DropdownMenuSubTrigger({ className, inset, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTrigger"], {
        "data-slot": "dropdown-menu-sub-trigger",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                className: "ml-auto size-4"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 210,
        columnNumber: 5
    }, this);
}
function DropdownMenuSubContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubContent"], {
        "data-slot": "dropdown-menu-sub-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 230,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/components/dashboard/sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar,
    "SidebarDropdownItem",
    ()=>SidebarDropdownItem,
    "SidebarItem",
    ()=>SidebarItem,
    "useSidebar",
    ()=>useSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
"use client";
;
;
;
;
;
// Context to share sidebar state with SidebarItems
const SidebarContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    isExpanded: false
});
function Sidebar({ children }) {
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarContext.Provider, {
        value: {
            isExpanded: isHovered
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].aside, {
            onMouseEnter: ()=>setIsHovered(true),
            onMouseLeave: ()=>setIsHovered(false),
            animate: {
                width: isHovered ? 200 : 60
            },
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 25
            },
            className: "h-screen bg-background border-r border-border flex flex-col overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-1 mt-4 w-full px-2",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/sidebar.tsx",
                    lineNumber: 31,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/sidebar.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/sidebar.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/sidebar.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
function useSidebar() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(SidebarContext);
}
function SidebarItem({ icon, label, action, disabled = false }) {
    const { isExpanded } = useSidebar();
    const handleClick = ()=>{
        if (!disabled && action) {
            action();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        layout: true,
        transition: {
            duration: 0.3,
            ease: "easeInOut"
        },
        onClick: handleClick,
        className: `flex items-center gap-3 px-3 py-2 rounded-md transition-colors w-full ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-muted cursor-pointer"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shrink-0 w-6 h-6 flex items-center justify-center",
                children: icon
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/sidebar.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                whileHover: disabled ? {} : {
                    x: 4
                },
                transition: {
                    duration: 0.3
                },
                className: "text-sm text-foreground truncate whitespace-nowrap",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/sidebar.tsx",
                lineNumber: 78,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/sidebar.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
function SidebarDropdownItem({ icon, label, items }) {
    const { isExpanded: sideBarExpanded } = useSidebar();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenu"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 px-3 py-2 hover:bg-muted rounded-md cursor-pointer transition-colors w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "shrink-0 w-6 h-6 flex items-center justify-center",
                            children: icon
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/sidebar.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        sideBarExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
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
                                        duration: 0.3
                                    },
                                    whileHover: {
                                        x: 4
                                    },
                                    className: "text-sm text-foreground truncate whitespace-nowrap flex-1",
                                    children: label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/sidebar.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                        duration: 0.2
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        className: "h-4 w-4 shrink-0 opacity-50"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/sidebar.tsx",
                                        lineNumber: 134,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/sidebar.tsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/sidebar.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/sidebar.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                side: "bottom",
                align: "start",
                className: "w-48",
                children: items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        onClick: item.action,
                        children: [
                            item.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mr-2",
                                children: item.icon
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/sidebar.tsx",
                                lineNumber: 143,
                                columnNumber: 27
                            }, this),
                            item.label
                        ]
                    }, index, true, {
                        fileName: "[project]/src/components/dashboard/sidebar.tsx",
                        lineNumber: 142,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/sidebar.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/sidebar.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/separator.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Separator",
    ()=>Separator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-separator/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Separator({ className, orientation = "horizontal", decorative = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "separator",
        decorative: decorative,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/separator.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/lib/services/data:c6f70e [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7086746f18569372ffa3cfdffc9aa12e4d2f9a0dec":"getConversations"},"src/lib/services/repoService.ts",""] */ __turbopack_context__.s([
    "getConversations",
    ()=>getConversations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var getConversations = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("7086746f18569372ffa3cfdffc9aa12e4d2f9a0dec", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getConversations"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcmVwb1NlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAL3V0aWxzL3N1cGFiYXNlL3NlcnZlclwiO1xuaW1wb3J0IHtcbiAgUmVwbyxcbiAgRG9jdW1lbnRhdGlvbixcbiAgRG9jUGFnZSxcbiAgQ29udmVyc2F0aW9uLFxuICBDb252ZXJzYXRpb25NZXNzYWdlLFxuICBDb2RlU25pcHBldCxcbn0gZnJvbSBcIkAvYXBwL3R5cGVzL3N1cGFiYXNlXCI7XG5pbXBvcnQgeyBBY3Rpb25SZXN1bHQgfSBmcm9tIFwiQC9hcHAvdHlwZXMvYWN0aW9uXCI7XG5pbXBvcnQge1xuICB2ZXJpZnlHaXRodWJSZXBvQWNjZXNzLFxuICB2ZXJpZnlHaXRMYWJSZXBvQWNjZXNzLFxufSBmcm9tIFwiLi9naXRQcm92aWRlclNlcnZpY2VcIjtcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHBhcnNlIEdpdEh1YiBVUkxzXG5mdW5jdGlvbiBwYXJzZUdpdEh1YlVybCh1cmw6IHN0cmluZyk6IHsgb3duZXI6IHN0cmluZzsgcmVwbzogc3RyaW5nIH0ge1xuICB0cnkge1xuICAgIC8vIEhhbmRsZSBtdWx0aXBsZSBmb3JtYXRzOlxuICAgIC8vIC0gaHR0cHM6Ly9naXRodWIuY29tL293bmVyL3JlcG9cbiAgICAvLyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9vd25lci9yZXBvLmdpdFxuICAgIC8vIC0gZ2l0QGdpdGh1Yi5jb206b3duZXIvcmVwby5naXRcblxuICAgIHVybCA9IHVybC50cmltKCkucmVwbGFjZSgvXFwuZ2l0JC8sIFwiXCIpO1xuXG4gICAgaWYgKHVybC5pbmNsdWRlcyhcImdpdGh1Yi5jb20vXCIpKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IHVybC5zcGxpdChcImdpdGh1Yi5jb20vXCIpWzFdLnNwbGl0KFwiL1wiKTtcbiAgICAgIHJldHVybiB7IG93bmVyOiBwYXJ0c1swXSwgcmVwbzogcGFydHNbMV0gfTtcbiAgICB9XG5cbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoXCJnaXRAZ2l0aHViLmNvbTpcIikpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gdXJsLnJlcGxhY2UoXCJnaXRAZ2l0aHViLmNvbTpcIiwgXCJcIikuc3BsaXQoXCIvXCIpO1xuICAgICAgcmV0dXJuIHsgb3duZXI6IHBhcnRzWzBdLCByZXBvOiBwYXJ0c1sxXSB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IG93bmVyOiBcIlwiLCByZXBvOiBcIlwiIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgb3duZXI6IFwiXCIsIHJlcG86IFwiXCIgfTtcbiAgfVxufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gcGFyc2UgR2l0TGFiIFVSTHNcbmZ1bmN0aW9uIHBhcnNlR2l0TGFiVXJsKHVybDogc3RyaW5nKTogeyBvd25lcjogc3RyaW5nOyByZXBvOiBzdHJpbmcgfSB7XG4gIHRyeSB7XG4gICAgLy8gSGFuZGxlIG11bHRpcGxlIGZvcm1hdHM6XG4gICAgLy8gLSBodHRwczovL2dpdGxhYi5jb20vb3duZXIvcmVwb1xuICAgIC8vIC0gaHR0cHM6Ly9naXRsYWIuY29tL293bmVyL3N1Ymdyb3VwL3JlcG9cbiAgICAvLyAtIGh0dHBzOi8vZ2l0bGFiLmNvbS9vd25lci9yZXBvLmdpdFxuICAgIC8vIC0gZ2l0QGdpdGxhYi5jb206b3duZXIvcmVwby5naXRcbiAgICAvLyAtIFNlbGYtaG9zdGVkOiBodHRwczovL2dpdGxhYi5leGFtcGxlLmNvbS9vd25lci9yZXBvXG5cbiAgICB1cmwgPSB1cmwudHJpbSgpLnJlcGxhY2UoL1xcLmdpdCQvLCBcIlwiKTtcblxuICAgIC8vIEhhbmRsZSBIVFRQUyBVUkxzIChnaXRsYWIuY29tIG9yIHNlbGYtaG9zdGVkKVxuICAgIGlmICh1cmwuaW5jbHVkZXMoXCJnaXRsYWIuY29tL1wiKSB8fCAvZ2l0bGFiXFwuW14vXStcXC8vLnRlc3QodXJsKSkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgcGF0aCBhZnRlciB0aGUgZG9tYWluXG4gICAgICBjb25zdCBtYXRjaCA9IHVybC5tYXRjaCgvZ2l0bGFiW14vXSpcXC8oLispLyk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgY29uc3QgcGF0aFBhcnRzID0gbWF0Y2hbMV0uc3BsaXQoXCIvXCIpO1xuICAgICAgICAvLyBHaXRMYWIgc3VwcG9ydHMgbmVzdGVkIGdyb3Vwcywgc28gd2UgbmVlZCB0byBoYW5kbGU6XG4gICAgICAgIC8vIC0gb3duZXIvcmVwbyAoMiBwYXJ0cylcbiAgICAgICAgLy8gLSBvd25lci9zdWJncm91cC9yZXBvICgzKyBwYXJ0cylcbiAgICAgICAgaWYgKHBhdGhQYXJ0cy5sZW5ndGggPj0gMikge1xuICAgICAgICAgIC8vIFRha2UgZXZlcnl0aGluZyBleGNlcHQgdGhlIGxhc3QgcGFydCBhcyBvd25lci9ncm91cFxuICAgICAgICAgIGNvbnN0IHJlcG8gPSBwYXRoUGFydHNbcGF0aFBhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IG93bmVyID0gcGF0aFBhcnRzLnNsaWNlKDAsIC0xKS5qb2luKFwiL1wiKTtcbiAgICAgICAgICByZXR1cm4geyBvd25lciwgcmVwbyB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIFNTSCBVUkxzXG4gICAgaWYgKHVybC5zdGFydHNXaXRoKFwiZ2l0QGdpdGxhYi5jb206XCIpIHx8IC9naXRAZ2l0bGFiXFwuW146XSs6Ly50ZXN0KHVybCkpIHtcbiAgICAgIGNvbnN0IG1hdGNoID0gdXJsLm1hdGNoKC9naXRAZ2l0bGFiW146XSo6KC4rKS8pO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGNvbnN0IHBhdGhQYXJ0cyA9IG1hdGNoWzFdLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgaWYgKHBhdGhQYXJ0cy5sZW5ndGggPj0gMikge1xuICAgICAgICAgIGNvbnN0IHJlcG8gPSBwYXRoUGFydHNbcGF0aFBhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IG93bmVyID0gcGF0aFBhcnRzLnNsaWNlKDAsIC0xKS5qb2luKFwiL1wiKTtcbiAgICAgICAgICByZXR1cm4geyBvd25lciwgcmVwbyB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgb3duZXI6IFwiXCIsIHJlcG86IFwiXCIgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBvd25lcjogXCJcIiwgcmVwbzogXCJcIiB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXBvc0J5T3JnYW5pemF0aW9uSWQoXG4gIG9yZ2FuaXphdGlvbklkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHVzZXIgPSBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJvcmdhbml6YXRpb25faWRcIiwgb3JnYW5pemF0aW9uSWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKGRhdGEgPz8gW10pIGFzIFJlcG9bXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUmVwb1ZpYUdpdGh1YihcbiAgZm9ybURhdGE6IEZvcm1EYXRhLFxuICBvcmdJZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8UmVwbyB8IHVuZGVmaW5lZD4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IHByb3ZpZGVyID0gZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IHVybCA9IGZvcm1EYXRhLmdldChcImdpdGh1Yi11cmxcIikgYXMgc3RyaW5nO1xuXG4gIGlmICghbmFtZSkge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJOYW1lIGlzIHJlcXVpcmVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGluc3RhbGxhdGlvbiB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJnaXRodWJfaW5zdGFsbGF0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiaW5zdGFsbGVkX2J5XCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghaW5zdGFsbGF0aW9uKSB7XG4gICAgLy8gTm8gR2l0SHViIEFwcCBpbnN0YWxsYXRpb24gLSBwcm9tcHQgdXNlciB0byBpbnN0YWxsXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiSW5zdGFsbGF0aW9uIE5lZWRlZFwiLFxuICAgIH07XG4gIH1cblxuICAvL3BhcnNlIHVybCBmb3Igb3duZXIgYW5kIHJlcG9cbiAgY29uc3QgeyBvd25lciwgcmVwbzogcmVwb05hbWUgfSA9IHBhcnNlR2l0SHViVXJsKHVybCk7XG5cbiAgY29uc3QgaGFzQWNjZXNzID0gYXdhaXQgdmVyaWZ5R2l0aHViUmVwb0FjY2VzcyhcbiAgICBpbnN0YWxsYXRpb24uaWQsXG4gICAgb3duZXIsXG4gICAgcmVwb05hbWUsXG4gICk7XG5cbiAgaWYgKCFoYXNBY2Nlc3MpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBlcnJvcjogXCJBY2Nlc3MgRGVuaWVkXCIsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3I6IHJlcG9FcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAuaW5zZXJ0KHtcbiAgICAgIG5hbWUsXG4gICAgICBwcm92aWRlcixcbiAgICAgIHJlcG9fdXJsOiB1cmwsXG4gICAgICBvcmdhbml6YXRpb25faWQ6IG9yZ0lkLFxuICAgICAgaW5kZXhlZF9ieTogdXNlci5pZCxcbiAgICAgIGluZGV4X3N0YXR1czogXCJub3QgaW5kZXhlZFwiLFxuICAgIH0pXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChyZXBvRXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHJlcG9FcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXBvIGFzIFJlcG8gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVJlcG9WaWFHaXRsYWIoXG4gIGZvcm1EYXRhOiBGb3JtRGF0YSxcbiAgb3JnSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFJlcG8gfCB1bmRlZmluZWQ+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICBjb25zdCBwcm92aWRlciA9IGZvcm1EYXRhLmdldChcInR5cGVcIikgYXMgc3RyaW5nO1xuICBjb25zdCB1cmwgPSBmb3JtRGF0YS5nZXQoXCJnaXRsYWItdXJsXCIpIGFzIHN0cmluZztcblxuICAvLyBWYWxpZGF0ZSBpbnB1dHNcbiAgaWYgKCFuYW1lIHx8IG5hbWUudHJpbSgpID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlJlcG9zaXRvcnkgbmFtZSBpcyByZXF1aXJlZFwiIH07XG4gIH1cblxuICBpZiAoIXVybCB8fCB1cmwudHJpbSgpID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkdpdExhYiBVUkwgaXMgcmVxdWlyZWRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBpbnN0YWxsYXRpb24gfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZ2l0bGFiX2luc3RhbGxhdGlvbnNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImluc3RhbGxlZF9ieVwiLCB1c2VyLmlkKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoIWluc3RhbGxhdGlvbikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJJbnN0YWxsYXRpb24gTmVlZGVkXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgb3duZXIsIHJlcG86IHJlcG9OYW1lIH0gPSBwYXJzZUdpdExhYlVybCh1cmwpO1xuXG4gIC8vdmVyaWZ5IGFjY2Vzc1xuICBjb25zdCBoYXNBY2Nlc3MgPSBhd2FpdCB2ZXJpZnlHaXRMYWJSZXBvQWNjZXNzKFxuICAgIGluc3RhbGxhdGlvbi5hY2Nlc3NfdG9rZW4sXG4gICAgb3duZXIsXG4gICAgcmVwb05hbWUsXG4gICk7XG5cbiAgaWYgKCFoYXNBY2Nlc3MpIHtcbiAgICBpZiAoaW5zdGFsbGF0aW9uLmFjY2Vzc190b2tlbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIGVycm9yOiBcIkFjY2VzcyByZXF1aXJlZCFcIixcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiQWNjZXNzIGRlbmllZCFcIixcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvcjogcmVwb0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgIC5pbnNlcnQoe1xuICAgICAgbmFtZSxcbiAgICAgIHByb3ZpZGVyLFxuICAgICAgcmVwb191cmw6IHVybCxcbiAgICAgIG9yZ2FuaXphdGlvbl9pZDogb3JnSWQsXG4gICAgICBpbmRleGVkX2J5OiB1c2VyLmlkLFxuICAgICAgaW5kZXhfc3RhdHVzOiBcIm5vdCBpbmRleGVkXCIsXG4gICAgfSlcbiAgICAuc2VsZWN0KClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKHJlcG9FcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogcmVwb0Vycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlcG8gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVJlcG9WaWFMb2NhbEZpbGUoXG4gIGZvcm1EYXRhOiBGb3JtRGF0YSxcbiAgb3JnSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFJlcG8+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KFwiZmlsZVwiKSBhcyBGaWxlO1xuXG4gIC8vIFZhbGlkYXRlIGlucHV0c1xuICBpZiAoIW5hbWUgfHwgbmFtZS50cmltKCkgPT09IFwiXCIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUmVwb3NpdG9yeSBuYW1lIGlzIHJlcXVpcmVkXCIgfTtcbiAgfVxuXG4gIGlmICghZmlsZSkge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGaWxlIGlzIHJlcXVpcmVkXCIgfTtcbiAgfVxuXG4gIC8vIFZhbGlkYXRlIGZpbGUgdHlwZVxuICBpZiAoIWZpbGUubmFtZS5lbmRzV2l0aChcIi56aXBcIikpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiT25seSAuemlwIGZpbGVzIGFyZSBhbGxvd2VkXCIgfTtcbiAgfVxuXG4gIC8vIFZhbGlkYXRlIGZpbGUgc2l6ZSAobWF4IDEwME1CKVxuICBjb25zdCBtYXhTaXplID0gMTAwICogMTAyNCAqIDEwMjQ7IC8vIDEwME1CIGluIGJ5dGVzXG4gIGlmIChmaWxlLnNpemUgPiBtYXhTaXplKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiRmlsZSBzaXplIGV4Y2VlZHMgMTAwTUIgbGltaXRcIixcbiAgICB9O1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBHZW5lcmF0ZSBhIHVuaXF1ZSBmaWxlIG5hbWUgdG8gcHJldmVudCBjb2xsaXNpb25zXG4gICAgY29uc3QgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBzYW5pdGl6ZWROYW1lID0gbmFtZS50cmltKCkucmVwbGFjZSgvW15hLXowLTktX10vZ2ksIFwiX1wiKTtcbiAgICBjb25zdCBmaWxlTmFtZSA9IGAke3Nhbml0aXplZE5hbWV9XyR7dGltZXN0YW1wfV8ke2ZpbGUubmFtZX1gO1xuICAgIGNvbnN0IGZpbGVQYXRoID0gYCR7b3JnSWR9LyR7ZmlsZU5hbWV9YDtcblxuICAgIC8vIFVwbG9hZCBmaWxlIHRvIFN1cGFiYXNlIFN0b3JhZ2VcbiAgICBjb25zdCB7IGVycm9yOiB1cGxvYWRFcnJvciB9ID0gYXdhaXQgY2xpZW50LnN0b3JhZ2VcbiAgICAgIC5mcm9tKFwibG9jYWxfcmVwb3NcIilcbiAgICAgIC51cGxvYWQoZmlsZVBhdGgsIGZpbGUsIHtcbiAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vemlwXCIsXG4gICAgICAgIHVwc2VydDogZmFsc2UsXG4gICAgICB9KTtcblxuICAgIGlmICh1cGxvYWRFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIlVwbG9hZCBlcnJvcjpcIiwgdXBsb2FkRXJyb3IpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIGVycm9yOiBgRmlsZSB1cGxvYWQgZmFpbGVkOiAke3VwbG9hZEVycm9yLm1lc3NhZ2V9YCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gR2V0IHRoZSBwdWJsaWMgVVJMIGZvciB0aGUgdXBsb2FkZWQgZmlsZVxuICAgIGNvbnN0IHsgZGF0YTogdXJsRGF0YSB9ID0gY2xpZW50LnN0b3JhZ2VcbiAgICAgIC5mcm9tKFwibG9jYWxfcmVwb3NcIilcbiAgICAgIC5nZXRQdWJsaWNVcmwoZmlsZVBhdGgpO1xuXG4gICAgLy8gQ3JlYXRlIHJlcG9zaXRvcnkgcmVjb3JkIGluIGRhdGFiYXNlXG4gICAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvcjogcmVwb0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgICAuaW5zZXJ0KHtcbiAgICAgICAgbmFtZTogbmFtZS50cmltKCksXG4gICAgICAgIHByb3ZpZGVyOiBcImxvY2FsXCIsXG4gICAgICAgIHJlcG9fdXJsOiBudWxsLFxuICAgICAgICBvYmplY3RfdXJsOiB1cmxEYXRhLnB1YmxpY1VybCxcbiAgICAgICAgb3JnYW5pemF0aW9uX2lkOiBvcmdJZCxcbiAgICAgICAgaW5kZXhlZF9ieTogdXNlci5pZCxcbiAgICAgICAgaW5kZXhfc3RhdHVzOiBcIm5vdCBpbmRleGVkXCIsXG4gICAgICB9KVxuICAgICAgLnNlbGVjdCgpXG4gICAgICAuc2luZ2xlKCk7XG5cbiAgICBpZiAocmVwb0Vycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiUmVwb3NpdG9yeSBjcmVhdGlvbiBlcnJvcjpcIiwgcmVwb0Vycm9yKTtcbiAgICAgIC8vIEF0dGVtcHQgdG8gY2xlYW4gdXAgdXBsb2FkZWQgZmlsZVxuICAgICAgYXdhaXQgY2xpZW50LnN0b3JhZ2UuZnJvbShcImxvY2FsX3JlcG9zXCIpLnJlbW92ZShbZmlsZVBhdGhdKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogYFJlcG9zaXRvcnkgY3JlYXRpb24gZmFpbGVkOiAke3JlcG9FcnJvci5tZXNzYWdlfWAsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlcG8gYXMgUmVwbyB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJVbmV4cGVjdGVkIGVycm9yOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6XG4gICAgICAgIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkXCIsXG4gICAgfTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSZXBvc2l0b3J5IE1hbmFnZW1lbnQgU2VydmljZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlcG9XaXRoU3RhdHVzKFxuICByZXBvSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFJlcG8+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImlkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICBpZiAoIXJlcG8pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUmVwb3NpdG9yeSBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVwbyBhcyBSZXBvIH07XG59XG5cbnR5cGUgVXBkYXRlRGF0YSA9IHtcbiAgbmFtZT86IHN0cmluZztcbiAgcmVwb191cmw/OiBzdHJpbmc7XG4gIG9iamVjdF91cmw/OiBzdHJpbmc7XG4gIGluZGV4X3N0YXR1cz86IHN0cmluZztcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVSZXBvU2V0dGluZ3MoXG4gIHJlcG9JZDogc3RyaW5nLFxuICBzZXR0aW5nczogeyBuYW1lPzogc3RyaW5nOyByZXBvX3VybD86IHN0cmluZzsgZmlsZT86IEZpbGUgfSxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFJlcG8+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gR2V0IHRoZSBjdXJyZW50IHJlcG8gdG8gY2hlY2sgaXRzIHByb3ZpZGVyIHR5cGVcbiAgY29uc3QgeyBkYXRhOiBjdXJyZW50UmVwbyB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImlkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKCFjdXJyZW50UmVwbykge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJSZXBvc2l0b3J5IG5vdCBmb3VuZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgdXBkYXRlRGF0YTogVXBkYXRlRGF0YSA9IHt9O1xuXG4gIC8vIEhhbmRsZSBuYW1lIHVwZGF0ZVxuICBpZiAoc2V0dGluZ3MubmFtZSkge1xuICAgIHVwZGF0ZURhdGEubmFtZSA9IHNldHRpbmdzLm5hbWU7XG4gIH1cblxuICAvLyBIYW5kbGUgR2l0SHViIFVSTCB1cGRhdGVcbiAgaWYgKHNldHRpbmdzLnJlcG9fdXJsICYmIGN1cnJlbnRSZXBvLnByb3ZpZGVyID09PSBcImdpdGh1YlwiKSB7XG4gICAgY29uc3QgeyBvd25lciwgcmVwbyB9ID0gcGFyc2VHaXRIdWJVcmwoc2V0dGluZ3MucmVwb191cmwpO1xuXG4gICAgaWYgKCFvd25lciB8fCAhcmVwbykge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkludmFsaWQgR2l0SHViIFVSTCBmb3JtYXQhXCIgfTtcbiAgICB9XG5cbiAgICAvLyBWZXJpZnkgYWNjZXNzIHRvIHRoZSBuZXcgcmVwb1xuICAgIGNvbnN0IHsgZGF0YTogaW5zdGFsbGF0aW9uIH0gPSBhd2FpdCBjbGllbnRcbiAgICAgIC5mcm9tKFwiZ2l0aHViX2luc3RhbGxhdGlvbnNcIilcbiAgICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgICAuZXEoXCJpbnN0YWxsZWRfYnlcIiwgdXNlci5pZClcbiAgICAgIC5zaW5nbGUoKTtcblxuICAgIGlmICghaW5zdGFsbGF0aW9uKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiR2l0SHViIEFwcCBub3QgaW5zdGFsbGVkIVwiIH07XG4gICAgfVxuXG4gICAgY29uc3QgaGFzQWNjZXNzID0gYXdhaXQgdmVyaWZ5R2l0aHViUmVwb0FjY2VzcyhcbiAgICAgIGluc3RhbGxhdGlvbi5pbnN0YWxsYXRpb25faWQudG9TdHJpbmcoKSxcbiAgICAgIG93bmVyLFxuICAgICAgcmVwbyxcbiAgICApO1xuXG4gICAgaWYgKCFoYXNBY2Nlc3MpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjpcbiAgICAgICAgICBcIkNhbm5vdCBhY2Nlc3MgdGhpcyByZXBvc2l0b3J5LiBNYWtlIHN1cmUgdGhlIEdpdEh1YiBBcHAgaXMgaW5zdGFsbGVkIGZvciB0aGlzIHJlcG9zaXRvcnkuXCIsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHVwZGF0ZURhdGEucmVwb191cmwgPSBzZXR0aW5ncy5yZXBvX3VybDtcbiAgICB1cGRhdGVEYXRhLmluZGV4X3N0YXR1cyA9IFwibm90IGluZGV4ZWRcIjsgLy8gVHJpZ2dlciByZS1pbmRleGluZ1xuICB9XG5cbiAgLy8gSGFuZGxlIGxvY2FsIGZpbGUgdXBsb2FkXG4gIGlmIChzZXR0aW5ncy5maWxlICYmIGN1cnJlbnRSZXBvLnByb3ZpZGVyID09PSBcImxvY2FsXCIpIHtcbiAgICBjb25zdCBmaWxlID0gc2V0dGluZ3MuZmlsZTtcbiAgICBjb25zdCBmaWxlRXh0ID0gZmlsZS5uYW1lLnNwbGl0KFwiLlwiKS5wb3AoKTtcblxuICAgIGlmIChmaWxlRXh0ICE9PSBcInppcFwiKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiT25seSAuemlwIGZpbGVzIGFyZSBhbGxvd2VkIVwiIH07XG4gICAgfVxuXG4gICAgLy8gVXBsb2FkIHRvIFN1cGFiYXNlIFN0b3JhZ2VcbiAgICBjb25zdCBmaWxlTmFtZSA9IGAke3JlcG9JZH0tJHtEYXRlLm5vdygpfS56aXBgO1xuICAgIGNvbnN0IHsgZGF0YTogdXBsb2FkRGF0YSwgZXJyb3I6IHVwbG9hZEVycm9yIH0gPSBhd2FpdCBjbGllbnQuc3RvcmFnZVxuICAgICAgLmZyb20oXCJsb2NhbF9yZXBvc1wiKVxuICAgICAgLnVwbG9hZChmaWxlTmFtZSwgZmlsZSk7XG5cbiAgICBpZiAodXBsb2FkRXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IodXBsb2FkRXJyb3IpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkZhaWxlZCB0byB1cGxvYWQgZmlsZSFcIiB9O1xuICAgIH1cblxuICAgIC8vIEdldCBwdWJsaWMgVVJMXG4gICAgY29uc3QgeyBkYXRhOiB1cmxEYXRhIH0gPSBjbGllbnQuc3RvcmFnZVxuICAgICAgLmZyb20oXCJsb2NhbF9yZXBvc1wiKVxuICAgICAgLmdldFB1YmxpY1VybChmaWxlTmFtZSk7XG5cbiAgICB1cGRhdGVEYXRhLm9iamVjdF91cmwgPSB1cmxEYXRhLnB1YmxpY1VybDtcbiAgICB1cGRhdGVEYXRhLmluZGV4X3N0YXR1cyA9IFwicGVuZGluZ1wiOyAvLyBUcmlnZ2VyIHJlLWluZGV4aW5nXG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIHJlcG9zaXRvcnlcbiAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAudXBkYXRlKHVwZGF0ZURhdGEpXG4gICAgLmVxKFwiaWRcIiwgcmVwb0lkKVxuICAgIC5zZWxlY3QoKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlcG8gYXMgUmVwbyB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUmVwbyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDx7IG9yZ2FuaXphdGlvbklkOiBzdHJpbmcgfT4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICAvLyBGZXRjaCB0aGUgb3JnYW5pemF0aW9uX2lkIGJlZm9yZSBkZWxldGluZ1xuICBjb25zdCB7IGRhdGE6IHJlcG8sIGVycm9yOiByZXBvRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIm9yZ2FuaXphdGlvbl9pZFwiKVxuICAgIC5lcShcImlkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKHJlcG9FcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IocmVwb0Vycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHJlcG9FcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICBpZiAoIXJlcG8pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUmVwb3NpdG9yeSBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgY2xpZW50LmZyb20oXCJyZXBvc2l0b3JpZXNcIikuZGVsZXRlKCkuZXEoXCJpZFwiLCByZXBvSWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogeyBvcmdhbml6YXRpb25JZDogcmVwby5vcmdhbml6YXRpb25faWQgfSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJpZ2dlclJlaW5kZXgoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8dm9pZD4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIGluZGV4X3N0YXR1cyB0byAncGVuZGluZycgdG8gdHJpZ2dlciByZWluZGV4aW5nXG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnVwZGF0ZSh7IGluZGV4X3N0YXR1czogXCJwZW5kaW5nXCIgfSlcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgLy8gVE9ETzogVHJpZ2dlciBhY3R1YWwgaW5kZXhpbmcgam9iL3dlYmhvb2svcXVldWUgaGVyZVxuICAvLyBUaGlzIGNvdWxkIGJlIGFuIEFQSSBjYWxsIHRvIHlvdXIgaW5kZXhpbmcgc2VydmljZVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVuZGVmaW5lZCB9O1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEb2N1bWVudGF0aW9uIFNlcnZpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2N1bWVudGF0aW9uKFxuICByZXBvSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PERvY3VtZW50YXRpb24+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBkb2N1bWVudGF0aW9uLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJkb2N1bWVudGF0aW9uXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJyZXBvX2lkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICBpZiAoIWRvY3VtZW50YXRpb24pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRG9jdW1lbnRhdGlvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogZG9jdW1lbnRhdGlvbiBhcyBEb2N1bWVudGF0aW9uIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2NQYWdlcyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2NQYWdlW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gR2V0IHRoZSBsYXRlc3QgZG9jdW1lbnRhdGlvbiB2ZXJzaW9uIGZvciB0aGlzIHJlcG9cbiAgY29uc3QgeyBkYXRhOiBkb2N1bWVudGF0aW9uLCBlcnJvcjogZG9jRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCJpZFwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5vcmRlcihcInZlcnNpb25cIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXG4gICAgLmxpbWl0KDEpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChkb2NFcnJvciB8fCAhZG9jdW1lbnRhdGlvbikge1xuICAgIGNvbnNvbGUuZXJyb3IoZG9jRXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJEb2N1bWVudGF0aW9uIG5vdCBmb3VuZFwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IHBhZ2VzLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJwYWdlc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiZG9jdW1lbnRhdGlvbl9pZFwiLCBkb2N1bWVudGF0aW9uLmlkKVxuICAgIC5vcmRlcihcIm9yZGVyX2luZGV4XCIsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKHBhZ2VzID8/IFtdKSBhcyBEb2NQYWdlW10gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERvY1BhZ2VCeUlkKFxuICBwYWdlSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PERvY1BhZ2U+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdlLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJkb2NfcGFnZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImlkXCIsIHBhZ2VJZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICBpZiAoIXBhZ2UpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUGFnZSBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcGFnZSBhcyBEb2NQYWdlIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2NQYWdlc0hpZXJhcmNoaWNhbChcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2NQYWdlW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gRmlyc3QgZ2V0IHRoZSBkb2N1bWVudGF0aW9uIElEIGZvciB0aGlzIHJlcG9cbiAgY29uc3QgeyBkYXRhOiBkb2N1bWVudGF0aW9uLCBlcnJvcjogZG9jRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCJpZFwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZG9jRXJyb3IgfHwgIWRvY3VtZW50YXRpb24pIHtcbiAgICBjb25zb2xlLmVycm9yKGRvY0Vycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRG9jdW1lbnRhdGlvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdlcywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jX3BhZ2VzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJkb2N1bWVudGF0aW9uX2lkXCIsIGRvY3VtZW50YXRpb24uaWQpXG4gICAgLm9yZGVyKFwib3JkZXJfaW5kZXhcIiwgeyBhc2NlbmRpbmc6IHRydWUgfSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICAvLyBQYWdlcyBhcmUgYWxyZWFkeSBzb3J0ZWQgYnkgb3JkZXJfaW5kZXhcbiAgLy8gVGhlIHBhcmVudF9wYWdlX2lkIGZpZWxkIG1haW50YWlucyB0aGUgaGllcmFyY2h5XG4gIC8vIEZyb250ZW5kIGNhbiB1c2UgdGhpcyB0byByZW5kZXIgdGhlIHRyZWUgc3RydWN0dXJlXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChwYWdlcyA/PyBbXSkgYXMgRG9jUGFnZVtdIH07XG59XG5cbi8qKlxuICogR2V0IGFsbCBkb2N1bWVudGF0aW9uIHZlcnNpb25zIGZvciBhIHJlcG9zaXRvcnlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERvY3VtZW50YXRpb25WZXJzaW9ucyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2N1bWVudGF0aW9uW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiB2ZXJzaW9ucywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLm9yZGVyKFwidmVyc2lvblwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiAodmVyc2lvbnMgPz8gW10pIGFzIERvY3VtZW50YXRpb25bXSB9O1xufVxuXG4vKipcbiAqIEdldCB0aGUgbGF0ZXN0IGNvbXBsZXRlZCBkb2N1bWVudGF0aW9uIHZlcnNpb24gZm9yIGEgcmVwb3NpdG9yeVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGF0ZXN0RG9jdW1lbnRhdGlvbihcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2N1bWVudGF0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogZG9jdW1lbnRhdGlvbiwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLm9yZGVyKFwidmVyc2lvblwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcbiAgICAubGltaXQoMSlcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKCFkb2N1bWVudGF0aW9uKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkRvY3VtZW50YXRpb24gbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogZG9jdW1lbnRhdGlvbiBhcyBEb2N1bWVudGF0aW9uIH07XG59XG5cbi8qKlxuICogR2V0IGRvY3VtZW50YXRpb24gcGFnZXMgZm9yIGEgc3BlY2lmaWMgdmVyc2lvblxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jUGFnZXNGb3JWZXJzaW9uKFxuICByZXBvSWQ6IHN0cmluZyxcbiAgdmVyc2lvbjogbnVtYmVyLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jUGFnZVtdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIC8vIEdldCB0aGUgZG9jdW1lbnRhdGlvbiByZWNvcmQgZm9yIHRoaXMgdmVyc2lvblxuICBjb25zdCB7IGRhdGE6IGRvY3VtZW50YXRpb24sIGVycm9yOiBkb2NFcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJkb2N1bWVudGF0aW9uXCIpXG4gICAgLnNlbGVjdChcImlkXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLmVxKFwidmVyc2lvblwiLCB2ZXJzaW9uKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZG9jRXJyb3IgfHwgIWRvY3VtZW50YXRpb24pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRG9jdW1lbnRhdGlvbiB2ZXJzaW9uIG5vdCBmb3VuZFwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IHBhZ2VzLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJwYWdlc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiZG9jdW1lbnRhdGlvbl9pZFwiLCBkb2N1bWVudGF0aW9uLmlkKVxuICAgIC5vcmRlcihcIm9yZGVyX2luZGV4XCIsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKHBhZ2VzID8/IFtdKSBhcyBEb2NQYWdlW10gfTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ29udmVyc2F0aW9uIFNlcnZpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb252ZXJzYXRpb25zKFxuICByZXBvSWQ6IHN0cmluZyxcbiAgbGltaXQ6IG51bWJlciA9IDIwLFxuICB2ZXJzaW9uOiBudW1iZXIgfCBudWxsID0gbnVsbCxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbltdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGxldCBxdWVyeSA9IGNsaWVudFxuICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKTtcblxuICAvLyBGaWx0ZXIgYnkgdmVyc2lvbiBpZiBzcGVjaWZpZWRcbiAgaWYgKHZlcnNpb24gIT09IG51bGwgJiYgdmVyc2lvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcXVlcnkgPSBxdWVyeS5lcShcInJlcG9fdmVyc2lvblwiLCB2ZXJzaW9uKTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogY29udmVyc2F0aW9ucywgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5XG4gICAgLm9yZGVyKFwidXBkYXRlZF9hdFwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcbiAgICAubGltaXQobGltaXQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKGNvbnZlcnNhdGlvbnMgPz8gW10pIGFzIENvbnZlcnNhdGlvbltdIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb252ZXJzYXRpb25CeUlkKFxuICBjb252ZXJzYXRpb25JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29udmVyc2F0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogY29udmVyc2F0aW9uLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpZFwiLCBjb252ZXJzYXRpb25JZClcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFjb252ZXJzYXRpb24pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiQ29udmVyc2F0aW9uIG5vdCBmb3VuZFwiIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjb252ZXJzYXRpb24gYXMgQ29udmVyc2F0aW9uIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDb252ZXJzYXRpb24oXG4gIHJlcG9JZDogc3RyaW5nLFxuICB0aXRsZT86IHN0cmluZyxcbiAgdmVyc2lvbj86IG51bWJlciB8IG51bGwsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxDb252ZXJzYXRpb24+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBjb252ZXJzYXRpb24sIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAuaW5zZXJ0KHtcbiAgICAgIHJlcG9faWQ6IHJlcG9JZCxcbiAgICAgIHVzZXJfaWQ6IHVzZXIuaWQsXG4gICAgICB0aXRsZTogdGl0bGUgfHwgXCJOZXcgQ29udmVyc2F0aW9uXCIsXG4gICAgICByZXBvX3ZlcnNpb246IHZlcnNpb24gPz8gbnVsbCxcbiAgICB9KVxuICAgIC5zZWxlY3QoKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGNvbnZlcnNhdGlvbiBhcyBDb252ZXJzYXRpb24gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNvbnZlcnNhdGlvbihcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PHZvaWQ+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLmRlbGV0ZSgpXG4gICAgLmVxKFwiaWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVuZGVmaW5lZCB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVuYW1lQ29udmVyc2F0aW9uKFxuICBjb252ZXJzYXRpb25JZDogc3RyaW5nLFxuICBuZXdUaXRsZTogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29udmVyc2F0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogY29udmVyc2F0aW9uLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLnVwZGF0ZSh7IHRpdGxlOiBuZXdUaXRsZSB9KVxuICAgIC5lcShcImlkXCIsIGNvbnZlcnNhdGlvbklkKVxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlci5pZClcbiAgICAuc2VsZWN0KClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjb252ZXJzYXRpb24gYXMgQ29udmVyc2F0aW9uIH07XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1lc3NhZ2UgU2VydmljZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvbnZlcnNhdGlvbk1lc3NhZ2VzKFxuICBjb252ZXJzYXRpb25JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29udmVyc2F0aW9uTWVzc2FnZVtdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogbWVzc2FnZXMsIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcIm1lc3NhZ2VzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJjb252ZXJzYXRpb25faWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgLm9yZGVyKFwiY3JlYXRlZF9hdFwiLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChtZXNzYWdlcyA/PyBbXSkgYXMgQ29udmVyc2F0aW9uTWVzc2FnZVtdIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVNZXNzYWdlKFxuICBjb252ZXJzYXRpb25JZDogc3RyaW5nLFxuICByb2xlOiBcInVzZXJcIiB8IFwiYXNzaXN0YW50XCIsXG4gIGNvbnRlbnQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbk1lc3NhZ2U+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBtZXNzYWdlLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJtZXNzYWdlc1wiKVxuICAgIC5pbnNlcnQoe1xuICAgICAgY29udmVyc2F0aW9uX2lkOiBjb252ZXJzYXRpb25JZCxcbiAgICAgIHJvbGUsXG4gICAgICBjb250ZW50LFxuICAgIH0pXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSBjb252ZXJzYXRpb24ncyB1cGRhdGVkX2F0IHRpbWVzdGFtcFxuICBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAudXBkYXRlKHsgdXBkYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpIH0pXG4gICAgLmVxKFwiaWRcIiwgY29udmVyc2F0aW9uSWQpO1xuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IG1lc3NhZ2UgYXMgQ29udmVyc2F0aW9uTWVzc2FnZSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZUNvZGVTbmlwcGV0cyhcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbiAgbWVzc2FnZUlkOiBzdHJpbmcsXG4gIHNuaXBwZXRzOiBBcnJheTx7IGZpbGU6IHN0cmluZzsgY29kZTogc3RyaW5nIH0+LFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29kZVNuaXBwZXRbXT4+IHtcbiAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCBzbmlwcGV0c1RvSW5zZXJ0ID0gc25pcHBldHMubWFwKChzbmlwcGV0KSA9PiAoe1xuICAgIGNvbnZlcnNhdGlvbl9pZDogY29udmVyc2F0aW9uSWQsXG4gICAgbWVzc2FnZV9pZDogbWVzc2FnZUlkLFxuICAgIGZpbGVfcGF0aDogc25pcHBldC5maWxlLFxuICAgIGNvZGVfY29udGVudDogc25pcHBldC5jb2RlLFxuICAgIGxhbmd1YWdlOiBzbmlwcGV0LmZpbGUuc3BsaXQoXCIuXCIpLnBvcCgpIHx8IG51bGwsXG4gIH0pKTtcblxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKFwiY29kZV9zbmlwcGV0c1wiKVxuICAgIC5pbnNlcnQoc25pcHBldHNUb0luc2VydClcbiAgICAuc2VsZWN0KCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBkYXRhIGFzIENvZGVTbmlwcGV0W10gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvZGVTbmlwcGV0c0ZvckNvbnZlcnNhdGlvbihcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvZGVTbmlwcGV0W10+PiB7XG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbShcImNvZGVfc25pcHBldHNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImNvbnZlcnNhdGlvbl9pZFwiLCBjb252ZXJzYXRpb25JZClcbiAgICAub3JkZXIoXCJjcmVhdGVkX2F0XCIsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGRhdGEgYXMgQ29kZVNuaXBwZXRbXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ29kZVNuaXBwZXQoXG4gIHNuaXBwZXRJZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8bnVsbD4+IHtcbiAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKFwiY29kZV9zbmlwcGV0c1wiKVxuICAgIC5kZWxldGUoKVxuICAgIC5lcShcImlkXCIsIHNuaXBwZXRJZCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBudWxsIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbmRleFJlcG9zaXRvcnkoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8dm9pZD4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGluc3RhbGxhdGlvbiwgZXJyb3I6IGluc3RhbGxhdGlvbkVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImdpdGh1Yl9pbnN0YWxsYXRpb25zXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpbnN0YWxsZWRfYnlcIiwgdXNlci5pZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKCFpbnN0YWxsYXRpb24gfHwgaW5zdGFsbGF0aW9uRXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiR2l0aHViIEFwcCBJbnN0YWxsYXRpb24gbm90IGZvdW5kIVwiIH07XG4gIH1cblxuICAvL2ZldGNoIHJlcG9cblxuICBjb25zdCByZXBvUmVzdWx0ID0gYXdhaXQgZ2V0UmVwb1dpdGhTdGF0dXMocmVwb0lkKTtcblxuICBpZiAoIXJlcG9SZXN1bHQuc3VjY2Vzcykge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogcmVwb1Jlc3VsdC5lcnJvciB9O1xuICB9XG5cbiAgY29uc3QgcmVwb1VybCA9IHJlcG9SZXN1bHQuZGF0YS5yZXBvX3VybDtcbiAgY29uc3QgaW5zdGFsbGF0aW9uSWQgPSBpbnN0YWxsYXRpb24uaW5zdGFsbGF0aW9uX2lkO1xuXG4gIC8vIEdldCB0aGUgbGF0ZXN0IHZlcnNpb24gbnVtYmVyIGZvciB0aGlzIHJlcG9cbiAgY29uc3QgeyBkYXRhOiBsYXRlc3REb2MgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCJ2ZXJzaW9uXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLm9yZGVyKFwidmVyc2lvblwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcbiAgICAubGltaXQoMSlcbiAgICAuc2luZ2xlKCk7XG5cbiAgLy8gSW5jcmVtZW50IHZlcnNpb24gKHN0YXJ0IGF0IDEgaWYgbm8gcHJldmlvdXMgdmVyc2lvbnMpXG4gIGNvbnN0IG5leHRWZXJzaW9uID0gKGxhdGVzdERvYz8udmVyc2lvbiA/PyAwKSArIDE7XG5cbiAgLy9tYXJrIHRoZSByZXBvc2l0b3J5IGFzIGluZGV4aW5nIGluIHN1cGFiYXNlIGZpcnN0XG4gIGNvbnN0IHsgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgIC51cGRhdGUoeyBpbmRleF9zdGF0dXM6IFwiaW5kZXhpbmdcIiB9KVxuICAgIC5lcShcImlkXCIsIHJlcG9JZCk7XG5cbiAgaWYgKHVwZGF0ZUVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcih1cGRhdGVFcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiB1cGRhdGVFcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICAvLyBDYWxsIHRoZSBiYWNrZW5kIHRvIHN0YXJ0IGluZGV4aW5nIChmaXJlLWFuZC1mb3JnZXQpXG4gIC8vIERvbid0IGF3YWl0IG9yIHRocm93IGVycm9ycyBzaW5jZSB0aGlzIGlzIGEgbG9uZy1ydW5uaW5nIG9wZXJhdGlvblxuICBmZXRjaChgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vcmVwb3MvaW5kZXhgLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHJlcG9fdXJsOiByZXBvVXJsLFxuICAgICAgcmVwb19pZDogcmVwb0lkLFxuICAgICAgdXNlcl9pZDogdXNlci5pZCxcbiAgICAgIGluc3RhbGxhdGlvbl9pZDogaW5zdGFsbGF0aW9uSWQsXG4gICAgICBicmFuY2g6IFwibWFpblwiLFxuICAgICAgdmVyc2lvbjogbmV4dFZlcnNpb24sXG4gICAgfSksXG4gIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIC8vIExvZyB0aGUgZXJyb3IgYnV0IGRvbid0IGZhaWwgdGhlIHJlcXVlc3RcbiAgICBjb25zb2xlLmVycm9yKFwiSW5kZXhpbmcgcmVxdWVzdCBmYWlsZWQ6XCIsIGVycm9yKTtcbiAgICAvLyBUaGUgYmFja2VuZCBzaG91bGQgaGFuZGxlIHVwZGF0aW5nIHRoZSByZXBvIHN0YXR1cyBvbiBmYWlsdXJlXG4gIH0pO1xuXG4gIC8vIFJldHVybiBzdWNjZXNzIGltbWVkaWF0ZWx5IC0gdGhlIGluZGV4aW5nIHdpbGwgaGFwcGVuIGluIHRoZSBiYWNrZ3JvdW5kXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVuZGVmaW5lZCB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ5U0EyMUJzQiJ9
}),
"[project]/src/components/dashboard/conversation-panel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConversationPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useChatUIStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/useChatUIStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/separator.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$c6f70e__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/services/data:c6f70e [app-ssr] (ecmascript) <text/javascript>");
"use client";
;
;
;
;
;
;
;
;
function ConversationPanel() {
    const { isExpanded: sideBarExpanded } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSidebar"])();
    const { isExpanded: chatExpanded, conversation: selectedConversation, repoId, selectedVersion } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useChatUIStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatUIStore"])();
    // Fetch conversations using TanStack Query
    const { data: conversations = [], isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "conversations",
            repoId,
            selectedVersion
        ],
        queryFn: async ()=>{
            if (!repoId) return [];
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$c6f70e__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getConversations"])(repoId, 20, selectedVersion);
            if (!result.success) throw new Error(result.error);
            return result.data;
        },
        enabled: !!repoId && chatExpanded
    });
    const handleClick = (conversationId)=>{
        const selected = conversations.find((conversation)=>conversation.id === conversationId);
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useChatUIStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatUIStore"].setState({
            conversation: selected
        });
    };
    if (!chatExpanded) return null;
    if (!sideBarExpanded) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        layout: true,
        initial: {
            opacity: 0,
            scaleY: 0
        },
        animate: {
            opacity: 1,
            scaleY: 1
        },
        exit: {
            opacity: 0,
            scaleY: 0
        },
        transition: {
            duration: 0.3,
            ease: "easeInOut"
        },
        style: {
            overflow: "hidden",
            transformOrigin: "top"
        },
        children: [
            sideBarExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs mb-2 px-2 text-muted-foreground",
                        children: "Recents"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/conversation-panel.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
                        className: "mb-2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/conversation-panel.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-muted-foreground",
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/conversation-panel.tsx",
                    lineNumber: 62,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/conversation-panel.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, this) : conversations.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center py-8 px-4 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                        className: "w-8 h-8 text-muted-foreground mb-2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/conversation-panel.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-muted-foreground",
                        children: "No conversations yet"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/conversation-panel.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-muted-foreground/60 mt-1",
                        children: "Start chatting to see your history"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/conversation-panel.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/conversation-panel.tsx",
                lineNumber: 65,
                columnNumber: 9
            }, this) : conversations.map((conversation, index)=>{
                const isSelected = selectedConversation?.id === conversation.id;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        x: -20
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        duration: 0.3,
                        delay: index * 0.05,
                        ease: "easeOut"
                    },
                    onClick: ()=>handleClick(conversation.id),
                    className: `flex items-center mb-0.5 px-2 py-2 rounded-md cursor-pointer transition-colors w-full ${isSelected ? "bg-accent/10 border-l-2 border-accent" : "hover:bg-muted border-l-2 border-transparent"}`,
                    children: sideBarExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `text-xs truncate ${isSelected ? "text-accent font-medium" : ""}`,
                        children: conversation.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/conversation-panel.tsx",
                        lineNumber: 94,
                        columnNumber: 17
                    }, this)
                }, conversation.id, false, {
                    fileName: "[project]/src/components/dashboard/conversation-panel.tsx",
                    lineNumber: 77,
                    columnNumber: 13
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/conversation-panel.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/dashboard/dashboard-sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardSidebar",
    ()=>DashboardSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderCode$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-code.js [app-ssr] (ecmascript) <export default as FolderCode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquarePlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square-plus.js [app-ssr] (ecmascript) <export default as MessageSquarePlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useChatUIStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/useChatUIStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$conversation$2d$panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/conversation-panel.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function DashboardSidebar() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { hasDocumentation } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useChatUIStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatUIStore"])();
    const { toggle, isExpanded: chatExpanded } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useChatUIStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatUIStore"])();
    // Access dynamic route parameters
    const id = params.id;
    // Determine the current context based on pathname patterns
    const currentContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (pathname.startsWith("/dashboard/organizations")) {
            return {
                type: "organizations",
                id
            };
        }
        if (pathname.startsWith("/dashboard/org/") && id) {
            return {
                type: "org",
                id
            };
        }
        if (pathname.startsWith("/dashboard/repo/") && id) {
            return {
                type: "repository",
                id
            };
        }
        return {
            type: "default",
            id: null
        };
    }, [
        pathname,
        id
    ]);
    // Render different sidebar items based on context
    const renderContextualItems = ()=>{
        switch(currentContext.type){
            case "organizations":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarItem"], {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                            className: "h-4.5 w-4.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-sidebar.tsx",
                            lineNumber: 51,
                            columnNumber: 21
                        }, void 0),
                        label: "Organizations",
                        action: ()=>router.push(`/dashboard/organizations`)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/dashboard-sidebar.tsx",
                        lineNumber: 50,
                        columnNumber: 13
                    }, this)
                }, void 0, false);
            case "org":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarItem"], {
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderCode$3e$__["FolderCode"], {
                                className: "h-4.5 w-4.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-sidebar.tsx",
                                lineNumber: 62,
                                columnNumber: 21
                            }, void 0),
                            label: "Repositories",
                            action: ()=>router.push(`/dashboard/org/${currentContext.id}`)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-sidebar.tsx",
                            lineNumber: 61,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarItem"], {
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                className: "h-4.5 w-4.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-sidebar.tsx",
                                lineNumber: 67,
                                columnNumber: 21
                            }, void 0),
                            label: "Team",
                            action: ()=>router.push(`/dashboard/org/${currentContext.id}/team`)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-sidebar.tsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarItem"], {
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                className: "h-4.5 w-4.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-sidebar.tsx",
                                lineNumber: 74,
                                columnNumber: 21
                            }, void 0),
                            label: "Settings",
                            action: ()=>router.push(`/dashboard/org/${currentContext.id}/settings`)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-sidebar.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true);
            case "repository":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarItem"], {
                            icon: chatExpanded || pathname.includes("/settings") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                className: "h-4.5 w-4.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-sidebar.tsx",
                                lineNumber: 89,
                                columnNumber: 19
                            }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                className: "h-4.5 w-4.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-sidebar.tsx",
                                lineNumber: 91,
                                columnNumber: 19
                            }, void 0),
                            label: chatExpanded || pathname.includes("/settings") ? "Documentation" : "Chat",
                            action: ()=>{
                                // Navigate to repo page if not already there
                                if (pathname !== `/dashboard/repo/${currentContext.id}`) {
                                    router.push(`/dashboard/repo/${currentContext.id}`);
                                }
                                toggle();
                            },
                            disabled: !hasDocumentation && !pathname.includes("/settings")
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-sidebar.tsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, this),
                        !pathname.includes("/settings") && chatExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarItem"], {
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquarePlus$3e$__["MessageSquarePlus"], {
                                className: "h-4.5 w-4.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-sidebar.tsx",
                                lineNumber: 110,
                                columnNumber: 23
                            }, void 0),
                            label: "New Message",
                            action: ()=>{
                                const { startNewConversation } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useChatUIStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatUIStore"].getState();
                                startNewConversation();
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-sidebar.tsx",
                            lineNumber: 109,
                            columnNumber: 15
                        }, this),
                        !pathname.includes("/settings") && chatExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$conversation$2d$panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-sidebar.tsx",
                            lineNumber: 120,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarItem"], {
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                className: "h-4.5 w-4.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-sidebar.tsx",
                                lineNumber: 123,
                                columnNumber: 21
                            }, void 0),
                            label: "Settings",
                            action: ()=>router.push(`/dashboard/repo/${currentContext.id}/settings`)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-sidebar.tsx",
                            lineNumber: 122,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarItem"], {
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                className: "h-4.5 w-4.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-sidebar.tsx",
                                lineNumber: 136,
                                columnNumber: 21
                            }, void 0),
                            label: "Organizations",
                            action: ()=>router.push("/dashboard/organizations")
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-sidebar.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarItem"], {
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                className: "h-4.5 w-4.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-sidebar.tsx",
                                lineNumber: 141,
                                columnNumber: 21
                            }, void 0),
                            label: "Settings",
                            action: ()=>router.push("/dashboard/organizations")
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-sidebar.tsx",
                            lineNumber: 140,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sidebar"], {
        children: renderContextualItems()
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/dashboard-sidebar.tsx",
        lineNumber: 150,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/app/dashboard/dashboard-provider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardProvider",
    ()=>DashboardProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/supabase/client.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function DashboardProvider({ children, initialUser }) {
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: user, isLoading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "auth",
            "user"
        ],
        queryFn: async ()=>{
            const { data: { user } } = await supabase.auth.getUser();
            return user;
        },
        initialData: initialUser,
        staleTime: 5 * 60 * 1000,
        refetchOnWindowFocus: false,
        refetchOnMount: false
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            isLoading,
            error: error
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/dashboard-provider.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
function useAuth() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within DashboardProvider");
    }
    return context;
}
}),
"[project]/src/components/dashboard/scroll-area.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollArea",
    ()=>ScrollArea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function ScrollArea({ children }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const mainRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Reset scroll position when pathname changes
        if (mainRef.current) {
            mainRef.current.scrollTop = 0;
        }
    }, [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        ref: mainRef,
        className: "flex-1 overflow-y-auto",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/scroll-area.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6b86f29a._.js.map