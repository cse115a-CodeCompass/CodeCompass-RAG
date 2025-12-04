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
"[project]/src/lib/services/data:ca0b0f [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7086746f18569372ffa3cfdffc9aa12e4d2f9a0dec":"getConversations"},"src/lib/services/repoService.ts",""] */ __turbopack_context__.s([
    "getConversations",
    ()=>getConversations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var getConversations = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("7086746f18569372ffa3cfdffc9aa12e4d2f9a0dec", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getConversations"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcmVwb1NlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAL3V0aWxzL3N1cGFiYXNlL3NlcnZlclwiO1xuaW1wb3J0IHtcbiAgUmVwbyxcbiAgRG9jdW1lbnRhdGlvbixcbiAgRG9jUGFnZSxcbiAgQ29udmVyc2F0aW9uLFxuICBDb252ZXJzYXRpb25NZXNzYWdlLFxuICBDb2RlU25pcHBldCxcbn0gZnJvbSBcIkAvYXBwL3R5cGVzL3N1cGFiYXNlXCI7XG5pbXBvcnQgeyBBY3Rpb25SZXN1bHQgfSBmcm9tIFwiQC9hcHAvdHlwZXMvYWN0aW9uXCI7XG5pbXBvcnQge1xuICB2ZXJpZnlHaXRodWJSZXBvQWNjZXNzLFxuICB2ZXJpZnlHaXRMYWJSZXBvQWNjZXNzLFxufSBmcm9tIFwiLi9naXRQcm92aWRlclNlcnZpY2VcIjtcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHBhcnNlIEdpdEh1YiBVUkxzXG5mdW5jdGlvbiBwYXJzZUdpdEh1YlVybCh1cmw6IHN0cmluZyk6IHsgb3duZXI6IHN0cmluZzsgcmVwbzogc3RyaW5nIH0ge1xuICB0cnkge1xuICAgIC8vIEhhbmRsZSBtdWx0aXBsZSBmb3JtYXRzOlxuICAgIC8vIC0gaHR0cHM6Ly9naXRodWIuY29tL293bmVyL3JlcG9cbiAgICAvLyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9vd25lci9yZXBvLmdpdFxuICAgIC8vIC0gZ2l0QGdpdGh1Yi5jb206b3duZXIvcmVwby5naXRcblxuICAgIHVybCA9IHVybC50cmltKCkucmVwbGFjZSgvXFwuZ2l0JC8sIFwiXCIpO1xuXG4gICAgaWYgKHVybC5pbmNsdWRlcyhcImdpdGh1Yi5jb20vXCIpKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IHVybC5zcGxpdChcImdpdGh1Yi5jb20vXCIpWzFdLnNwbGl0KFwiL1wiKTtcbiAgICAgIHJldHVybiB7IG93bmVyOiBwYXJ0c1swXSwgcmVwbzogcGFydHNbMV0gfTtcbiAgICB9XG5cbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoXCJnaXRAZ2l0aHViLmNvbTpcIikpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gdXJsLnJlcGxhY2UoXCJnaXRAZ2l0aHViLmNvbTpcIiwgXCJcIikuc3BsaXQoXCIvXCIpO1xuICAgICAgcmV0dXJuIHsgb3duZXI6IHBhcnRzWzBdLCByZXBvOiBwYXJ0c1sxXSB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IG93bmVyOiBcIlwiLCByZXBvOiBcIlwiIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgb3duZXI6IFwiXCIsIHJlcG86IFwiXCIgfTtcbiAgfVxufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gcGFyc2UgR2l0TGFiIFVSTHNcbmZ1bmN0aW9uIHBhcnNlR2l0TGFiVXJsKHVybDogc3RyaW5nKTogeyBvd25lcjogc3RyaW5nOyByZXBvOiBzdHJpbmcgfSB7XG4gIHRyeSB7XG4gICAgLy8gSGFuZGxlIG11bHRpcGxlIGZvcm1hdHM6XG4gICAgLy8gLSBodHRwczovL2dpdGxhYi5jb20vb3duZXIvcmVwb1xuICAgIC8vIC0gaHR0cHM6Ly9naXRsYWIuY29tL293bmVyL3N1Ymdyb3VwL3JlcG9cbiAgICAvLyAtIGh0dHBzOi8vZ2l0bGFiLmNvbS9vd25lci9yZXBvLmdpdFxuICAgIC8vIC0gZ2l0QGdpdGxhYi5jb206b3duZXIvcmVwby5naXRcbiAgICAvLyAtIFNlbGYtaG9zdGVkOiBodHRwczovL2dpdGxhYi5leGFtcGxlLmNvbS9vd25lci9yZXBvXG5cbiAgICB1cmwgPSB1cmwudHJpbSgpLnJlcGxhY2UoL1xcLmdpdCQvLCBcIlwiKTtcblxuICAgIC8vIEhhbmRsZSBIVFRQUyBVUkxzIChnaXRsYWIuY29tIG9yIHNlbGYtaG9zdGVkKVxuICAgIGlmICh1cmwuaW5jbHVkZXMoXCJnaXRsYWIuY29tL1wiKSB8fCAvZ2l0bGFiXFwuW14vXStcXC8vLnRlc3QodXJsKSkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgcGF0aCBhZnRlciB0aGUgZG9tYWluXG4gICAgICBjb25zdCBtYXRjaCA9IHVybC5tYXRjaCgvZ2l0bGFiW14vXSpcXC8oLispLyk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgY29uc3QgcGF0aFBhcnRzID0gbWF0Y2hbMV0uc3BsaXQoXCIvXCIpO1xuICAgICAgICAvLyBHaXRMYWIgc3VwcG9ydHMgbmVzdGVkIGdyb3Vwcywgc28gd2UgbmVlZCB0byBoYW5kbGU6XG4gICAgICAgIC8vIC0gb3duZXIvcmVwbyAoMiBwYXJ0cylcbiAgICAgICAgLy8gLSBvd25lci9zdWJncm91cC9yZXBvICgzKyBwYXJ0cylcbiAgICAgICAgaWYgKHBhdGhQYXJ0cy5sZW5ndGggPj0gMikge1xuICAgICAgICAgIC8vIFRha2UgZXZlcnl0aGluZyBleGNlcHQgdGhlIGxhc3QgcGFydCBhcyBvd25lci9ncm91cFxuICAgICAgICAgIGNvbnN0IHJlcG8gPSBwYXRoUGFydHNbcGF0aFBhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IG93bmVyID0gcGF0aFBhcnRzLnNsaWNlKDAsIC0xKS5qb2luKFwiL1wiKTtcbiAgICAgICAgICByZXR1cm4geyBvd25lciwgcmVwbyB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIFNTSCBVUkxzXG4gICAgaWYgKHVybC5zdGFydHNXaXRoKFwiZ2l0QGdpdGxhYi5jb206XCIpIHx8IC9naXRAZ2l0bGFiXFwuW146XSs6Ly50ZXN0KHVybCkpIHtcbiAgICAgIGNvbnN0IG1hdGNoID0gdXJsLm1hdGNoKC9naXRAZ2l0bGFiW146XSo6KC4rKS8pO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGNvbnN0IHBhdGhQYXJ0cyA9IG1hdGNoWzFdLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgaWYgKHBhdGhQYXJ0cy5sZW5ndGggPj0gMikge1xuICAgICAgICAgIGNvbnN0IHJlcG8gPSBwYXRoUGFydHNbcGF0aFBhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IG93bmVyID0gcGF0aFBhcnRzLnNsaWNlKDAsIC0xKS5qb2luKFwiL1wiKTtcbiAgICAgICAgICByZXR1cm4geyBvd25lciwgcmVwbyB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgb3duZXI6IFwiXCIsIHJlcG86IFwiXCIgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBvd25lcjogXCJcIiwgcmVwbzogXCJcIiB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXBvc0J5T3JnYW5pemF0aW9uSWQoXG4gIG9yZ2FuaXphdGlvbklkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvW10+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHVzZXIgPSBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJvcmdhbml6YXRpb25faWRcIiwgb3JnYW5pemF0aW9uSWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKGRhdGEgPz8gW10pIGFzIFJlcG9bXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUmVwb1ZpYUdpdGh1YihcbiAgZm9ybURhdGE6IEZvcm1EYXRhLFxuICBvcmdJZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8UmVwbyB8IHVuZGVmaW5lZD4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IHByb3ZpZGVyID0gZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IHVybCA9IGZvcm1EYXRhLmdldChcImdpdGh1Yi11cmxcIikgYXMgc3RyaW5nO1xuXG4gIGlmICghbmFtZSkge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJOYW1lIGlzIHJlcXVpcmVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGluc3RhbGxhdGlvbiB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJnaXRodWJfaW5zdGFsbGF0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiaW5zdGFsbGVkX2J5XCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghaW5zdGFsbGF0aW9uKSB7XG4gICAgLy8gTm8gR2l0SHViIEFwcCBpbnN0YWxsYXRpb24gLSBwcm9tcHQgdXNlciB0byBpbnN0YWxsXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiSW5zdGFsbGF0aW9uIE5lZWRlZFwiLFxuICAgIH07XG4gIH1cblxuICAvL3BhcnNlIHVybCBmb3Igb3duZXIgYW5kIHJlcG9cbiAgY29uc3QgeyBvd25lciwgcmVwbzogcmVwb05hbWUgfSA9IHBhcnNlR2l0SHViVXJsKHVybCk7XG5cbiAgY29uc3QgaGFzQWNjZXNzID0gYXdhaXQgdmVyaWZ5R2l0aHViUmVwb0FjY2VzcyhcbiAgICBpbnN0YWxsYXRpb24uaW5zdGFsbGF0aW9uX2lkLFxuICAgIG93bmVyLFxuICAgIHJlcG9OYW1lLFxuICApO1xuXG4gIGlmICghaGFzQWNjZXNzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiQWNjZXNzIERlbmllZFwiLFxuICAgIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IHJlcG8sIGVycm9yOiByZXBvRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLmluc2VydCh7XG4gICAgICBuYW1lLFxuICAgICAgcHJvdmlkZXIsXG4gICAgICByZXBvX3VybDogdXJsLFxuICAgICAgb3JnYW5pemF0aW9uX2lkOiBvcmdJZCxcbiAgICAgIGluZGV4ZWRfYnk6IHVzZXIuaWQsXG4gICAgICBpbmRleF9zdGF0dXM6IFwibm90IGluZGV4ZWRcIixcbiAgICB9KVxuICAgIC5zZWxlY3QoKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAocmVwb0Vycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiByZXBvRXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVwbyBhcyBSZXBvIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZXBvVmlhR2l0bGFiKFxuICBmb3JtRGF0YTogRm9ybURhdGEsXG4gIG9yZ0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvIHwgdW5kZWZpbmVkPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgY29uc3QgcHJvdmlkZXIgPSBmb3JtRGF0YS5nZXQoXCJ0eXBlXCIpIGFzIHN0cmluZztcbiAgY29uc3QgdXJsID0gZm9ybURhdGEuZ2V0KFwiZ2l0bGFiLXVybFwiKSBhcyBzdHJpbmc7XG5cbiAgLy8gVmFsaWRhdGUgaW5wdXRzXG4gIGlmICghbmFtZSB8fCBuYW1lLnRyaW0oKSA9PT0gXCJcIikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJSZXBvc2l0b3J5IG5hbWUgaXMgcmVxdWlyZWRcIiB9O1xuICB9XG5cbiAgaWYgKCF1cmwgfHwgdXJsLnRyaW0oKSA9PT0gXCJcIikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJHaXRMYWIgVVJMIGlzIHJlcXVpcmVkXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogaW5zdGFsbGF0aW9uIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImdpdGxhYl9pbnN0YWxsYXRpb25zXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpbnN0YWxsZWRfYnlcIiwgdXNlci5pZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKCFpbnN0YWxsYXRpb24pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiSW5zdGFsbGF0aW9uIE5lZWRlZFwiIH07XG4gIH1cblxuICBjb25zdCB7IG93bmVyLCByZXBvOiByZXBvTmFtZSB9ID0gcGFyc2VHaXRMYWJVcmwodXJsKTtcblxuICAvL3ZlcmlmeSBhY2Nlc3NcbiAgY29uc3QgaGFzQWNjZXNzID0gYXdhaXQgdmVyaWZ5R2l0TGFiUmVwb0FjY2VzcyhcbiAgICBpbnN0YWxsYXRpb24uYWNjZXNzX3Rva2VuLFxuICAgIG93bmVyLFxuICAgIHJlcG9OYW1lLFxuICApO1xuXG4gIGlmICghaGFzQWNjZXNzKSB7XG4gICAgaWYgKGluc3RhbGxhdGlvbi5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogXCJBY2Nlc3MgcmVxdWlyZWQhXCIsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yOiBcIkFjY2VzcyBkZW5pZWQhXCIsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3I6IHJlcG9FcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAuaW5zZXJ0KHtcbiAgICAgIG5hbWUsXG4gICAgICBwcm92aWRlcixcbiAgICAgIHJlcG9fdXJsOiB1cmwsXG4gICAgICBvcmdhbml6YXRpb25faWQ6IG9yZ0lkLFxuICAgICAgaW5kZXhlZF9ieTogdXNlci5pZCxcbiAgICAgIGluZGV4X3N0YXR1czogXCJub3QgaW5kZXhlZFwiLFxuICAgIH0pXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChyZXBvRXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHJlcG9FcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXBvIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZXBvVmlhTG9jYWxGaWxlKFxuICBmb3JtRGF0YTogRm9ybURhdGEsXG4gIG9yZ0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgY29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldChcImZpbGVcIikgYXMgRmlsZTtcblxuICAvLyBWYWxpZGF0ZSBpbnB1dHNcbiAgaWYgKCFuYW1lIHx8IG5hbWUudHJpbSgpID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlJlcG9zaXRvcnkgbmFtZSBpcyByZXF1aXJlZFwiIH07XG4gIH1cblxuICBpZiAoIWZpbGUpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmlsZSBpcyByZXF1aXJlZFwiIH07XG4gIH1cblxuICAvLyBWYWxpZGF0ZSBmaWxlIHR5cGVcbiAgaWYgKCFmaWxlLm5hbWUuZW5kc1dpdGgoXCIuemlwXCIpKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIk9ubHkgLnppcCBmaWxlcyBhcmUgYWxsb3dlZFwiIH07XG4gIH1cblxuICAvLyBWYWxpZGF0ZSBmaWxlIHNpemUgKG1heCAxMDBNQilcbiAgY29uc3QgbWF4U2l6ZSA9IDEwMCAqIDEwMjQgKiAxMDI0OyAvLyAxMDBNQiBpbiBieXRlc1xuICBpZiAoZmlsZS5zaXplID4gbWF4U2l6ZSkge1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yOiBcIkZpbGUgc2l6ZSBleGNlZWRzIDEwME1CIGxpbWl0XCIsXG4gICAgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gR2VuZXJhdGUgYSB1bmlxdWUgZmlsZSBuYW1lIHRvIHByZXZlbnQgY29sbGlzaW9uc1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IERhdGUubm93KCk7XG4gICAgY29uc3Qgc2FuaXRpemVkTmFtZSA9IG5hbWUudHJpbSgpLnJlcGxhY2UoL1teYS16MC05LV9dL2dpLCBcIl9cIik7XG4gICAgY29uc3QgZmlsZU5hbWUgPSBgJHtzYW5pdGl6ZWROYW1lfV8ke3RpbWVzdGFtcH1fJHtmaWxlLm5hbWV9YDtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGAke29yZ0lkfS8ke2ZpbGVOYW1lfWA7XG5cbiAgICAvLyBVcGxvYWQgZmlsZSB0byBTdXBhYmFzZSBTdG9yYWdlXG4gICAgY29uc3QgeyBlcnJvcjogdXBsb2FkRXJyb3IgfSA9IGF3YWl0IGNsaWVudC5zdG9yYWdlXG4gICAgICAuZnJvbShcImxvY2FsX3JlcG9zXCIpXG4gICAgICAudXBsb2FkKGZpbGVQYXRoLCBmaWxlLCB7XG4gICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL3ppcFwiLFxuICAgICAgICB1cHNlcnQ6IGZhbHNlLFxuICAgICAgfSk7XG5cbiAgICBpZiAodXBsb2FkRXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJVcGxvYWQgZXJyb3I6XCIsIHVwbG9hZEVycm9yKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogYEZpbGUgdXBsb2FkIGZhaWxlZDogJHt1cGxvYWRFcnJvci5tZXNzYWdlfWAsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEdldCB0aGUgcHVibGljIFVSTCBmb3IgdGhlIHVwbG9hZGVkIGZpbGVcbiAgICBjb25zdCB7IGRhdGE6IHVybERhdGEgfSA9IGNsaWVudC5zdG9yYWdlXG4gICAgICAuZnJvbShcImxvY2FsX3JlcG9zXCIpXG4gICAgICAuZ2V0UHVibGljVXJsKGZpbGVQYXRoKTtcblxuICAgIC8vIENyZWF0ZSByZXBvc2l0b3J5IHJlY29yZCBpbiBkYXRhYmFzZVxuICAgIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3I6IHJlcG9FcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgICAgLmluc2VydCh7XG4gICAgICAgIG5hbWU6IG5hbWUudHJpbSgpLFxuICAgICAgICBwcm92aWRlcjogXCJsb2NhbFwiLFxuICAgICAgICByZXBvX3VybDogbnVsbCxcbiAgICAgICAgb2JqZWN0X3VybDogdXJsRGF0YS5wdWJsaWNVcmwsXG4gICAgICAgIG9yZ2FuaXphdGlvbl9pZDogb3JnSWQsXG4gICAgICAgIGluZGV4ZWRfYnk6IHVzZXIuaWQsXG4gICAgICAgIGluZGV4X3N0YXR1czogXCJub3QgaW5kZXhlZFwiLFxuICAgICAgfSlcbiAgICAgIC5zZWxlY3QoKVxuICAgICAgLnNpbmdsZSgpO1xuXG4gICAgaWYgKHJlcG9FcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIlJlcG9zaXRvcnkgY3JlYXRpb24gZXJyb3I6XCIsIHJlcG9FcnJvcik7XG4gICAgICAvLyBBdHRlbXB0IHRvIGNsZWFuIHVwIHVwbG9hZGVkIGZpbGVcbiAgICAgIGF3YWl0IGNsaWVudC5zdG9yYWdlLmZyb20oXCJsb2NhbF9yZXBvc1wiKS5yZW1vdmUoW2ZpbGVQYXRoXSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IGBSZXBvc2l0b3J5IGNyZWF0aW9uIGZhaWxlZDogJHtyZXBvRXJyb3IubWVzc2FnZX1gLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXBvIGFzIFJlcG8gfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiVW5leHBlY3RlZCBlcnJvcjpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yOlxuICAgICAgICBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZFwiLFxuICAgIH07XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUmVwb3NpdG9yeSBNYW5hZ2VtZW50IFNlcnZpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXBvV2l0aFN0YXR1cyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFyZXBvKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlJlcG9zaXRvcnkgbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlcG8gYXMgUmVwbyB9O1xufVxuXG50eXBlIFVwZGF0ZURhdGEgPSB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHJlcG9fdXJsPzogc3RyaW5nO1xuICBvYmplY3RfdXJsPzogc3RyaW5nO1xuICBpbmRleF9zdGF0dXM/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUmVwb1NldHRpbmdzKFxuICByZXBvSWQ6IHN0cmluZyxcbiAgc2V0dGluZ3M6IHsgbmFtZT86IHN0cmluZzsgcmVwb191cmw/OiBzdHJpbmc7IGZpbGU/OiBGaWxlIH0sXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxSZXBvPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIC8vIEdldCB0aGUgY3VycmVudCByZXBvIHRvIGNoZWNrIGl0cyBwcm92aWRlciB0eXBlXG4gIGNvbnN0IHsgZGF0YTogY3VycmVudFJlcG8gfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghY3VycmVudFJlcG8pIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUmVwb3NpdG9yeSBub3QgZm91bmQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZURhdGE6IFVwZGF0ZURhdGEgPSB7fTtcblxuICAvLyBIYW5kbGUgbmFtZSB1cGRhdGVcbiAgaWYgKHNldHRpbmdzLm5hbWUpIHtcbiAgICB1cGRhdGVEYXRhLm5hbWUgPSBzZXR0aW5ncy5uYW1lO1xuICB9XG5cbiAgLy8gSGFuZGxlIEdpdEh1YiBVUkwgdXBkYXRlXG4gIGlmIChzZXR0aW5ncy5yZXBvX3VybCAmJiBjdXJyZW50UmVwby5wcm92aWRlciA9PT0gXCJnaXRodWJcIikge1xuICAgIGNvbnN0IHsgb3duZXIsIHJlcG8gfSA9IHBhcnNlR2l0SHViVXJsKHNldHRpbmdzLnJlcG9fdXJsKTtcblxuICAgIGlmICghb3duZXIgfHwgIXJlcG8pIHtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJJbnZhbGlkIEdpdEh1YiBVUkwgZm9ybWF0IVwiIH07XG4gICAgfVxuXG4gICAgLy8gVmVyaWZ5IGFjY2VzcyB0byB0aGUgbmV3IHJlcG9cbiAgICBjb25zdCB7IGRhdGE6IGluc3RhbGxhdGlvbiB9ID0gYXdhaXQgY2xpZW50XG4gICAgICAuZnJvbShcImdpdGh1Yl9pbnN0YWxsYXRpb25zXCIpXG4gICAgICAuc2VsZWN0KFwiKlwiKVxuICAgICAgLmVxKFwiaW5zdGFsbGVkX2J5XCIsIHVzZXIuaWQpXG4gICAgICAuc2luZ2xlKCk7XG5cbiAgICBpZiAoIWluc3RhbGxhdGlvbikge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkdpdEh1YiBBcHAgbm90IGluc3RhbGxlZCFcIiB9O1xuICAgIH1cblxuICAgIGNvbnN0IGhhc0FjY2VzcyA9IGF3YWl0IHZlcmlmeUdpdGh1YlJlcG9BY2Nlc3MoXG4gICAgICBpbnN0YWxsYXRpb24uaW5zdGFsbGF0aW9uX2lkLnRvU3RyaW5nKCksXG4gICAgICBvd25lcixcbiAgICAgIHJlcG8sXG4gICAgKTtcblxuICAgIGlmICghaGFzQWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6XG4gICAgICAgICAgXCJDYW5ub3QgYWNjZXNzIHRoaXMgcmVwb3NpdG9yeS4gTWFrZSBzdXJlIHRoZSBHaXRIdWIgQXBwIGlzIGluc3RhbGxlZCBmb3IgdGhpcyByZXBvc2l0b3J5LlwiLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICB1cGRhdGVEYXRhLnJlcG9fdXJsID0gc2V0dGluZ3MucmVwb191cmw7XG4gICAgdXBkYXRlRGF0YS5pbmRleF9zdGF0dXMgPSBcIm5vdCBpbmRleGVkXCI7IC8vIFRyaWdnZXIgcmUtaW5kZXhpbmdcbiAgfVxuXG4gIC8vIEhhbmRsZSBsb2NhbCBmaWxlIHVwbG9hZFxuICBpZiAoc2V0dGluZ3MuZmlsZSAmJiBjdXJyZW50UmVwby5wcm92aWRlciA9PT0gXCJsb2NhbFwiKSB7XG4gICAgY29uc3QgZmlsZSA9IHNldHRpbmdzLmZpbGU7XG4gICAgY29uc3QgZmlsZUV4dCA9IGZpbGUubmFtZS5zcGxpdChcIi5cIikucG9wKCk7XG5cbiAgICBpZiAoZmlsZUV4dCAhPT0gXCJ6aXBcIikge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIk9ubHkgLnppcCBmaWxlcyBhcmUgYWxsb3dlZCFcIiB9O1xuICAgIH1cblxuICAgIC8vIFVwbG9hZCB0byBTdXBhYmFzZSBTdG9yYWdlXG4gICAgY29uc3QgZmlsZU5hbWUgPSBgJHtyZXBvSWR9LSR7RGF0ZS5ub3coKX0uemlwYDtcbiAgICBjb25zdCB7IGRhdGE6IHVwbG9hZERhdGEsIGVycm9yOiB1cGxvYWRFcnJvciB9ID0gYXdhaXQgY2xpZW50LnN0b3JhZ2VcbiAgICAgIC5mcm9tKFwibG9jYWxfcmVwb3NcIilcbiAgICAgIC51cGxvYWQoZmlsZU5hbWUsIGZpbGUpO1xuXG4gICAgaWYgKHVwbG9hZEVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKHVwbG9hZEVycm9yKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gdXBsb2FkIGZpbGUhXCIgfTtcbiAgICB9XG5cbiAgICAvLyBHZXQgcHVibGljIFVSTFxuICAgIGNvbnN0IHsgZGF0YTogdXJsRGF0YSB9ID0gY2xpZW50LnN0b3JhZ2VcbiAgICAgIC5mcm9tKFwibG9jYWxfcmVwb3NcIilcbiAgICAgIC5nZXRQdWJsaWNVcmwoZmlsZU5hbWUpO1xuXG4gICAgdXBkYXRlRGF0YS5vYmplY3RfdXJsID0gdXJsRGF0YS5wdWJsaWNVcmw7XG4gICAgdXBkYXRlRGF0YS5pbmRleF9zdGF0dXMgPSBcInBlbmRpbmdcIjsgLy8gVHJpZ2dlciByZS1pbmRleGluZ1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSByZXBvc2l0b3J5XG4gIGNvbnN0IHsgZGF0YTogcmVwbywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpXG4gICAgLnVwZGF0ZSh1cGRhdGVEYXRhKVxuICAgIC5lcShcImlkXCIsIHJlcG9JZClcbiAgICAuc2VsZWN0KClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXBvIGFzIFJlcG8gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVJlcG8oXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8eyBvcmdhbml6YXRpb25JZDogc3RyaW5nIH0+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gRmV0Y2ggdGhlIG9yZ2FuaXphdGlvbl9pZCBiZWZvcmUgZGVsZXRpbmdcbiAgY29uc3QgeyBkYXRhOiByZXBvLCBlcnJvcjogcmVwb0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgIC5zZWxlY3QoXCJvcmdhbml6YXRpb25faWRcIilcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChyZXBvRXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKHJlcG9FcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiByZXBvRXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFyZXBvKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlJlcG9zaXRvcnkgbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IGNsaWVudC5mcm9tKFwicmVwb3NpdG9yaWVzXCIpLmRlbGV0ZSgpLmVxKFwiaWRcIiwgcmVwb0lkKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHsgb3JnYW5pemF0aW9uSWQ6IHJlcG8ub3JnYW5pemF0aW9uX2lkIH0gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRyaWdnZXJSZWluZGV4KFxuICByZXBvSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PHZvaWQ+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSBpbmRleF9zdGF0dXMgdG8gJ3BlbmRpbmcnIHRvIHRyaWdnZXIgcmVpbmRleGluZ1xuICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcInJlcG9zaXRvcmllc1wiKVxuICAgIC51cGRhdGUoeyBpbmRleF9zdGF0dXM6IFwicGVuZGluZ1wiIH0pXG4gICAgLmVxKFwiaWRcIiwgcmVwb0lkKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIC8vIFRPRE86IFRyaWdnZXIgYWN0dWFsIGluZGV4aW5nIGpvYi93ZWJob29rL3F1ZXVlIGhlcmVcbiAgLy8gVGhpcyBjb3VsZCBiZSBhbiBBUEkgY2FsbCB0byB5b3VyIGluZGV4aW5nIHNlcnZpY2VcblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1bmRlZmluZWQgfTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRG9jdW1lbnRhdGlvbiBTZXJ2aWNlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jdW1lbnRhdGlvbihcbiAgcmVwb0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2N1bWVudGF0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogZG9jdW1lbnRhdGlvbiwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwicmVwb19pZFwiLCByZXBvSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFkb2N1bWVudGF0aW9uKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkRvY3VtZW50YXRpb24gbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGRvY3VtZW50YXRpb24gYXMgRG9jdW1lbnRhdGlvbiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jUGFnZXMoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jUGFnZVtdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIC8vIEdldCB0aGUgbGF0ZXN0IGRvY3VtZW50YXRpb24gdmVyc2lvbiBmb3IgdGhpcyByZXBvXG4gIGNvbnN0IHsgZGF0YTogZG9jdW1lbnRhdGlvbiwgZXJyb3I6IGRvY0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwiaWRcIilcbiAgICAuZXEoXCJyZXBvX2lkXCIsIHJlcG9JZClcbiAgICAub3JkZXIoXCJ2ZXJzaW9uXCIsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxuICAgIC5saW1pdCgxKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZG9jRXJyb3IgfHwgIWRvY3VtZW50YXRpb24pIHtcbiAgICBjb25zb2xlLmVycm9yKGRvY0Vycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRG9jdW1lbnRhdGlvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdlcywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicGFnZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImRvY3VtZW50YXRpb25faWRcIiwgZG9jdW1lbnRhdGlvbi5pZClcbiAgICAub3JkZXIoXCJvcmRlcl9pbmRleFwiLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChwYWdlcyA/PyBbXSkgYXMgRG9jUGFnZVtdIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2NQYWdlQnlJZChcbiAgcGFnZUlkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2NQYWdlPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcGFnZSwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jX3BhZ2VzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJpZFwiLCBwYWdlSWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFwYWdlKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlBhZ2Ugbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHBhZ2UgYXMgRG9jUGFnZSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jUGFnZXNIaWVyYXJjaGljYWwoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jUGFnZVtdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIC8vIEZpcnN0IGdldCB0aGUgZG9jdW1lbnRhdGlvbiBJRCBmb3IgdGhpcyByZXBvXG4gIGNvbnN0IHsgZGF0YTogZG9jdW1lbnRhdGlvbiwgZXJyb3I6IGRvY0Vycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwiaWRcIilcbiAgICAuZXEoXCJyZXBvX2lkXCIsIHJlcG9JZClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGRvY0Vycm9yIHx8ICFkb2N1bWVudGF0aW9uKSB7XG4gICAgY29uc29sZS5lcnJvcihkb2NFcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkRvY3VtZW50YXRpb24gbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcGFnZXMsIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY19wYWdlc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiZG9jdW1lbnRhdGlvbl9pZFwiLCBkb2N1bWVudGF0aW9uLmlkKVxuICAgIC5vcmRlcihcIm9yZGVyX2luZGV4XCIsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgLy8gUGFnZXMgYXJlIGFscmVhZHkgc29ydGVkIGJ5IG9yZGVyX2luZGV4XG4gIC8vIFRoZSBwYXJlbnRfcGFnZV9pZCBmaWVsZCBtYWludGFpbnMgdGhlIGhpZXJhcmNoeVxuICAvLyBGcm9udGVuZCBjYW4gdXNlIHRoaXMgdG8gcmVuZGVyIHRoZSB0cmVlIHN0cnVjdHVyZVxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiAocGFnZXMgPz8gW10pIGFzIERvY1BhZ2VbXSB9O1xufVxuXG4vKipcbiAqIEdldCBhbGwgZG9jdW1lbnRhdGlvbiB2ZXJzaW9ucyBmb3IgYSByZXBvc2l0b3J5XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2N1bWVudGF0aW9uVmVyc2lvbnMoXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jdW1lbnRhdGlvbltdPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogdmVyc2lvbnMsIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5vcmRlcihcInZlcnNpb25cIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogKHZlcnNpb25zID8/IFtdKSBhcyBEb2N1bWVudGF0aW9uW10gfTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGxhdGVzdCBjb21wbGV0ZWQgZG9jdW1lbnRhdGlvbiB2ZXJzaW9uIGZvciBhIHJlcG9zaXRvcnlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExhdGVzdERvY3VtZW50YXRpb24oXG4gIHJlcG9JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8RG9jdW1lbnRhdGlvbj4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGRvY3VtZW50YXRpb24sIGVycm9yIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5vcmRlcihcInZlcnNpb25cIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXG4gICAgLmxpbWl0KDEpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghZG9jdW1lbnRhdGlvbikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJEb2N1bWVudGF0aW9uIG5vdCBmb3VuZFwiIH07XG4gIH1cblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGRvY3VtZW50YXRpb24gYXMgRG9jdW1lbnRhdGlvbiB9O1xufVxuXG4vKipcbiAqIEdldCBkb2N1bWVudGF0aW9uIHBhZ2VzIGZvciBhIHNwZWNpZmljIHZlcnNpb25cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERvY1BhZ2VzRm9yVmVyc2lvbihcbiAgcmVwb0lkOiBzdHJpbmcsXG4gIHZlcnNpb246IG51bWJlcixcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PERvY1BhZ2VbXT4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICAvLyBHZXQgdGhlIGRvY3VtZW50YXRpb24gcmVjb3JkIGZvciB0aGlzIHZlcnNpb25cbiAgY29uc3QgeyBkYXRhOiBkb2N1bWVudGF0aW9uLCBlcnJvcjogZG9jRXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiZG9jdW1lbnRhdGlvblwiKVxuICAgIC5zZWxlY3QoXCJpZFwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5lcShcInZlcnNpb25cIiwgdmVyc2lvbilcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGRvY0Vycm9yIHx8ICFkb2N1bWVudGF0aW9uKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkRvY3VtZW50YXRpb24gdmVyc2lvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdlcywgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwicGFnZXNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcImRvY3VtZW50YXRpb25faWRcIiwgZG9jdW1lbnRhdGlvbi5pZClcbiAgICAub3JkZXIoXCJvcmRlcl9pbmRleFwiLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChwYWdlcyA/PyBbXSkgYXMgRG9jUGFnZVtdIH07XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENvbnZlcnNhdGlvbiBTZXJ2aWNlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29udmVyc2F0aW9ucyhcbiAgcmVwb0lkOiBzdHJpbmcsXG4gIGxpbWl0OiBudW1iZXIgPSAyMCxcbiAgdmVyc2lvbjogbnVtYmVyIHwgbnVsbCA9IG51bGwsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxDb252ZXJzYXRpb25bXT4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBsZXQgcXVlcnkgPSBjbGllbnRcbiAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlci5pZCk7XG5cbiAgLy8gRmlsdGVyIGJ5IHZlcnNpb24gaWYgc3BlY2lmaWVkXG4gIGlmICh2ZXJzaW9uICE9PSBudWxsICYmIHZlcnNpb24gIT09IHVuZGVmaW5lZCkge1xuICAgIHF1ZXJ5ID0gcXVlcnkuZXEoXCJyZXBvX3ZlcnNpb25cIiwgdmVyc2lvbik7XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGNvbnZlcnNhdGlvbnMsIGVycm9yIH0gPSBhd2FpdCBxdWVyeVxuICAgIC5vcmRlcihcInVwZGF0ZWRfYXRcIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXG4gICAgLmxpbWl0KGxpbWl0KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IChjb252ZXJzYXRpb25zID8/IFtdKSBhcyBDb252ZXJzYXRpb25bXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29udmVyc2F0aW9uQnlJZChcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbj4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGNvbnZlcnNhdGlvbiwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiaWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIGlmICghY29udmVyc2F0aW9uKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkNvbnZlcnNhdGlvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY29udmVyc2F0aW9uIGFzIENvbnZlcnNhdGlvbiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ29udmVyc2F0aW9uKFxuICByZXBvSWQ6IHN0cmluZyxcbiAgdGl0bGU/OiBzdHJpbmcsXG4gIHZlcnNpb24/OiBudW1iZXIgfCBudWxsLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8Q29udmVyc2F0aW9uPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogY29udmVyc2F0aW9uLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLmluc2VydCh7XG4gICAgICByZXBvX2lkOiByZXBvSWQsXG4gICAgICB1c2VyX2lkOiB1c2VyLmlkLFxuICAgICAgdGl0bGU6IHRpdGxlIHx8IFwiTmV3IENvbnZlcnNhdGlvblwiLFxuICAgICAgcmVwb192ZXJzaW9uOiB2ZXJzaW9uID8/IG51bGwsXG4gICAgfSlcbiAgICAuc2VsZWN0KClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjb252ZXJzYXRpb24gYXMgQ29udmVyc2F0aW9uIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDb252ZXJzYXRpb24oXG4gIGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDx2b2lkPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgIC5kZWxldGUoKVxuICAgIC5lcShcImlkXCIsIGNvbnZlcnNhdGlvbklkKVxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlci5pZCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1bmRlZmluZWQgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbmFtZUNvbnZlcnNhdGlvbihcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbiAgbmV3VGl0bGU6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbj4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IGNvbnZlcnNhdGlvbiwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgIC51cGRhdGUoeyB0aXRsZTogbmV3VGl0bGUgfSlcbiAgICAuZXEoXCJpZFwiLCBjb252ZXJzYXRpb25JZClcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY29udmVyc2F0aW9uIGFzIENvbnZlcnNhdGlvbiB9O1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNZXNzYWdlIFNlcnZpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb252ZXJzYXRpb25NZXNzYWdlcyhcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvbnZlcnNhdGlvbk1lc3NhZ2VbXT4+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgY2xpZW50LmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkIVwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IG1lc3NhZ2VzLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJtZXNzYWdlc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiY29udmVyc2F0aW9uX2lkXCIsIGNvbnZlcnNhdGlvbklkKVxuICAgIC5vcmRlcihcImNyZWF0ZWRfYXRcIiwgeyBhc2NlbmRpbmc6IHRydWUgfSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiAobWVzc2FnZXMgPz8gW10pIGFzIENvbnZlcnNhdGlvbk1lc3NhZ2VbXSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTWVzc2FnZShcbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcbiAgcm9sZTogXCJ1c2VyXCIgfCBcImFzc2lzdGFudFwiLFxuICBjb250ZW50OiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxDb252ZXJzYXRpb25NZXNzYWdlPj4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBjbGllbnQuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogbWVzc2FnZSwgZXJyb3IgfSA9IGF3YWl0IGNsaWVudFxuICAgIC5mcm9tKFwibWVzc2FnZXNcIilcbiAgICAuaW5zZXJ0KHtcbiAgICAgIGNvbnZlcnNhdGlvbl9pZDogY29udmVyc2F0aW9uSWQsXG4gICAgICByb2xlLFxuICAgICAgY29udGVudCxcbiAgICB9KVxuICAgIC5zZWxlY3QoKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSB0aGUgY29udmVyc2F0aW9uJ3MgdXBkYXRlZF9hdCB0aW1lc3RhbXBcbiAgYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJjb252ZXJzYXRpb25zXCIpXG4gICAgLnVwZGF0ZSh7IHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSB9KVxuICAgIC5lcShcImlkXCIsIGNvbnZlcnNhdGlvbklkKTtcblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBtZXNzYWdlIGFzIENvbnZlcnNhdGlvbk1lc3NhZ2UgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVDb2RlU25pcHBldHMoXG4gIGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsXG4gIG1lc3NhZ2VJZDogc3RyaW5nLFxuICBzbmlwcGV0czogQXJyYXk8eyBmaWxlOiBzdHJpbmc7IGNvZGU6IHN0cmluZyB9Pixcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PENvZGVTbmlwcGV0W10+PiB7XG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qgc25pcHBldHNUb0luc2VydCA9IHNuaXBwZXRzLm1hcCgoc25pcHBldCkgPT4gKHtcbiAgICBjb252ZXJzYXRpb25faWQ6IGNvbnZlcnNhdGlvbklkLFxuICAgIG1lc3NhZ2VfaWQ6IG1lc3NhZ2VJZCxcbiAgICBmaWxlX3BhdGg6IHNuaXBwZXQuZmlsZSxcbiAgICBjb2RlX2NvbnRlbnQ6IHNuaXBwZXQuY29kZSxcbiAgICBsYW5ndWFnZTogc25pcHBldC5maWxlLnNwbGl0KFwiLlwiKS5wb3AoKSB8fCBudWxsLFxuICB9KSk7XG5cbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbShcImNvZGVfc25pcHBldHNcIilcbiAgICAuaW5zZXJ0KHNuaXBwZXRzVG9JbnNlcnQpXG4gICAgLnNlbGVjdCgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogZGF0YSBhcyBDb2RlU25pcHBldFtdIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb2RlU25pcHBldHNGb3JDb252ZXJzYXRpb24oXG4gIGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxDb2RlU25pcHBldFtdPj4ge1xuICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oXCJjb2RlX3NuaXBwZXRzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJjb252ZXJzYXRpb25faWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgLm9yZGVyKFwiY3JlYXRlZF9hdFwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBkYXRhIGFzIENvZGVTbmlwcGV0W10gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNvZGVTbmlwcGV0KFxuICBzbmlwcGV0SWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PG51bGw+PiB7XG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbShcImNvZGVfc25pcHBldHNcIilcbiAgICAuZGVsZXRlKClcbiAgICAuZXEoXCJpZFwiLCBzbmlwcGV0SWQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogbnVsbCB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5kZXhSZXBvc2l0b3J5KFxuICByZXBvSWQ6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PHZvaWQ+PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBpbnN0YWxsYXRpb24sIGVycm9yOiBpbnN0YWxsYXRpb25FcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJnaXRodWJfaW5zdGFsbGF0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiaW5zdGFsbGVkX2J5XCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICghaW5zdGFsbGF0aW9uIHx8IGluc3RhbGxhdGlvbkVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkdpdGh1YiBBcHAgSW5zdGFsbGF0aW9uIG5vdCBmb3VuZCFcIiB9O1xuICB9XG5cbiAgLy9mZXRjaCByZXBvXG5cbiAgY29uc3QgcmVwb1Jlc3VsdCA9IGF3YWl0IGdldFJlcG9XaXRoU3RhdHVzKHJlcG9JZCk7XG5cbiAgaWYgKCFyZXBvUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHJlcG9SZXN1bHQuZXJyb3IgfTtcbiAgfVxuXG4gIGNvbnN0IHJlcG9VcmwgPSByZXBvUmVzdWx0LmRhdGEucmVwb191cmw7XG4gIGNvbnN0IGluc3RhbGxhdGlvbklkID0gaW5zdGFsbGF0aW9uLmluc3RhbGxhdGlvbl9pZDtcblxuICAvLyBHZXQgdGhlIGxhdGVzdCB2ZXJzaW9uIG51bWJlciBmb3IgdGhpcyByZXBvXG4gIGNvbnN0IHsgZGF0YTogbGF0ZXN0RG9jIH0gPSBhd2FpdCBjbGllbnRcbiAgICAuZnJvbShcImRvY3VtZW50YXRpb25cIilcbiAgICAuc2VsZWN0KFwidmVyc2lvblwiKVxuICAgIC5lcShcInJlcG9faWRcIiwgcmVwb0lkKVxuICAgIC5vcmRlcihcInZlcnNpb25cIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXG4gICAgLmxpbWl0KDEpXG4gICAgLnNpbmdsZSgpO1xuXG4gIC8vIEluY3JlbWVudCB2ZXJzaW9uIChzdGFydCBhdCAxIGlmIG5vIHByZXZpb3VzIHZlcnNpb25zKVxuICBjb25zdCBuZXh0VmVyc2lvbiA9IChsYXRlc3REb2M/LnZlcnNpb24gPz8gMCkgKyAxO1xuXG4gIC8vbWFyayB0aGUgcmVwb3NpdG9yeSBhcyBpbmRleGluZyBpbiBzdXBhYmFzZSBmaXJzdFxuICBjb25zdCB7IGVycm9yOiB1cGRhdGVFcnJvciB9ID0gYXdhaXQgY2xpZW50XG4gICAgLmZyb20oXCJyZXBvc2l0b3JpZXNcIilcbiAgICAudXBkYXRlKHsgaW5kZXhfc3RhdHVzOiBcImluZGV4aW5nXCIgfSlcbiAgICAuZXEoXCJpZFwiLCByZXBvSWQpO1xuXG4gIGlmICh1cGRhdGVFcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IodXBkYXRlRXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogdXBkYXRlRXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgLy8gQ2FsbCB0aGUgYmFja2VuZCB0byBzdGFydCBpbmRleGluZyAoZmlyZS1hbmQtZm9yZ2V0KVxuICAvLyBEb24ndCBhd2FpdCBvciB0aHJvdyBlcnJvcnMgc2luY2UgdGhpcyBpcyBhIGxvbmctcnVubmluZyBvcGVyYXRpb25cbiAgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L3JlcG9zL2luZGV4YCwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICByZXBvX3VybDogcmVwb1VybCxcbiAgICAgIHJlcG9faWQ6IHJlcG9JZCxcbiAgICAgIHVzZXJfaWQ6IHVzZXIuaWQsXG4gICAgICBpbnN0YWxsYXRpb25faWQ6IGluc3RhbGxhdGlvbklkLFxuICAgICAgYnJhbmNoOiBcIm1haW5cIixcbiAgICAgIHZlcnNpb246IG5leHRWZXJzaW9uLFxuICAgIH0pLFxuICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAvLyBMb2cgdGhlIGVycm9yIGJ1dCBkb24ndCBmYWlsIHRoZSByZXF1ZXN0XG4gICAgY29uc29sZS5lcnJvcihcIkluZGV4aW5nIHJlcXVlc3QgZmFpbGVkOlwiLCBlcnJvcik7XG4gICAgLy8gVGhlIGJhY2tlbmQgc2hvdWxkIGhhbmRsZSB1cGRhdGluZyB0aGUgcmVwbyBzdGF0dXMgb24gZmFpbHVyZVxuICB9KTtcblxuICAvLyBSZXR1cm4gc3VjY2VzcyBpbW1lZGlhdGVseSAtIHRoZSBpbmRleGluZyB3aWxsIGhhcHBlbiBpbiB0aGUgYmFja2dyb3VuZFxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1bmRlZmluZWQgfTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoieVNBMjFCc0IifQ==
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$ca0b0f__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/services/data:ca0b0f [app-ssr] (ecmascript) <text/javascript>");
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$ca0b0f__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getConversations"])(repoId, 20, selectedVersion);
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

//# sourceMappingURL=%5Broot-of-the-server%5D__bff5f003._.js.map