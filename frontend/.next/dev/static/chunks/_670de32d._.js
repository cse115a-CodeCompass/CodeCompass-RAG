(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Label;
;
var _c;
__turbopack_context__.k.register(_c, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/field.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Field",
    ()=>Field,
    "FieldContent",
    ()=>FieldContent,
    "FieldDescription",
    ()=>FieldDescription,
    "FieldError",
    ()=>FieldError,
    "FieldGroup",
    ()=>FieldGroup,
    "FieldLabel",
    ()=>FieldLabel,
    "FieldLegend",
    ()=>FieldLegend,
    "FieldSeparator",
    ()=>FieldSeparator,
    "FieldSet",
    ()=>FieldSet,
    "FieldTitle",
    ()=>FieldTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/separator.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function FieldSet({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
        "data-slot": "field-set",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-6", "has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/field.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = FieldSet;
function FieldLegend({ className, variant = "legend", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
        "data-slot": "field-legend",
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mb-3 font-medium", "data-[variant=legend]:text-base", "data-[variant=label]:text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/field.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c1 = FieldLegend;
function FieldGroup({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "field-group",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/field.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_c2 = FieldGroup;
const fieldVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("group/field flex w-full gap-3 data-[invalid=true]:text-destructive", {
    variants: {
        orientation: {
            vertical: [
                "flex-col [&>*]:w-full [&>.sr-only]:w-auto"
            ],
            horizontal: [
                "flex-row items-center",
                "[&>[data-slot=field-label]]:flex-auto",
                "has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
            ],
            responsive: [
                "flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto",
                "@md/field-group:[&>[data-slot=field-label]]:flex-auto",
                "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
            ]
        }
    },
    defaultVariants: {
        orientation: "vertical"
    }
});
function Field({ className, orientation = "vertical", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "group",
        "data-slot": "field",
        "data-orientation": orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(fieldVariants({
            orientation
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/field.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
_c3 = Field;
function FieldContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "field-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group/field-content flex flex-1 flex-col gap-1.5 leading-snug", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/field.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_c4 = FieldContent;
function FieldLabel({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "field-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50", "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4", "has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/field.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_c5 = FieldLabel;
function FieldTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "field-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex w-fit items-center gap-2 text-sm leading-snug font-medium group-data-[disabled=true]/field:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/field.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
_c6 = FieldTitle;
function FieldDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        "data-slot": "field-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm leading-normal font-normal group-has-[[data-orientation=horizontal]]/field:text-balance", "last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5", "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/field.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
_c7 = FieldDescription;
function FieldSeparator({ children, className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "field-separator",
        "data-content": !!children,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
                className: "absolute inset-0 top-1/2"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/field.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this),
            children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "bg-background text-muted-foreground relative mx-auto block w-fit px-2",
                "data-slot": "field-separator-content",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/field.tsx",
                lineNumber: 175,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/field.tsx",
        lineNumber: 164,
        columnNumber: 5
    }, this);
}
_c8 = FieldSeparator;
function FieldError({ className, children, errors, ...props }) {
    _s();
    const content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FieldError.useMemo[content]": ()=>{
            if (children) {
                return children;
            }
            if (!errors?.length) {
                return null;
            }
            if (errors?.length == 1) {
                return errors[0]?.message;
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "ml-4 flex list-disc flex-col gap-1",
                children: errors.map({
                    "FieldError.useMemo[content]": (error, index)=>error?.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: error.message
                        }, index, false, {
                            fileName: "[project]/src/components/ui/field.tsx",
                            lineNumber: 211,
                            columnNumber: 31
                        }, this)
                }["FieldError.useMemo[content]"])
            }, void 0, false, {
                fileName: "[project]/src/components/ui/field.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, this);
        }
    }["FieldError.useMemo[content]"], [
        children,
        errors
    ]);
    if (!content) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "alert",
        "data-slot": "field-error",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-destructive text-sm font-normal", className),
        ...props,
        children: content
    }, void 0, false, {
        fileName: "[project]/src/components/ui/field.tsx",
        lineNumber: 222,
        columnNumber: 5
    }, this);
}
_s(FieldError, "nOKcCO/DZR7PO8GpYaNDiNh8hVA=");
_c9 = FieldError;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "FieldSet");
__turbopack_context__.k.register(_c1, "FieldLegend");
__turbopack_context__.k.register(_c2, "FieldGroup");
__turbopack_context__.k.register(_c3, "Field");
__turbopack_context__.k.register(_c4, "FieldContent");
__turbopack_context__.k.register(_c5, "FieldLabel");
__turbopack_context__.k.register(_c6, "FieldTitle");
__turbopack_context__.k.register(_c7, "FieldDescription");
__turbopack_context__.k.register(_c8, "FieldSeparator");
__turbopack_context__.k.register(_c9, "FieldError");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/services/data:ea2522 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40daa9c9a31e4b9e3f17ba924ae68919c41650a3af":"createOrg"},"src/lib/services/orgService.ts",""] */ __turbopack_context__.s([
    "createOrg",
    ()=>createOrg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var createOrg = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40daa9c9a31e4b9e3f17ba924ae68919c41650a3af", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createOrg"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vb3JnU2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgY3JlYXRlQ2xpZW50LCBjcmVhdGVBZG1pbkNsaWVudCB9IGZyb20gXCJAL3V0aWxzL3N1cGFiYXNlL3NlcnZlclwiO1xuaW1wb3J0IHtcbiAgT3JnYW5pemF0aW9uLFxuICBPcmdhbml6YXRpb25XaXRoUm9sZSxcbiAgT3JnYW5pemF0aW9uTWVtYmVyLFxufSBmcm9tIFwiQC9hcHAvdHlwZXMvc3VwYWJhc2VcIjtcbmltcG9ydCB7IEFjdGlvblJlc3VsdCB9IGZyb20gXCJAL2FwcC90eXBlcy9hY3Rpb25cIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE9yZ3MoKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8T3JnYW5pemF0aW9uV2l0aFJvbGVbXT4+IHtcbiAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIC8vIFF1ZXJ5IGZyb20gdXNlcl9vcmdhbml6YXRpb25zIHRhYmxlIHRvIHByb3Blcmx5IGZpbHRlciBieSB1c2VyX2lkXG4gIGNvbnN0IHsgZGF0YTogdXNlck9yZ3MsIGVycm9yOiBvcmdhbml6YXRpb25zRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oXCJ1c2VyX29yZ2FuaXphdGlvbnNcIilcbiAgICAuc2VsZWN0KFwicm9sZSxqb2luZWRfYXQsb3JnYW5pemF0aW9ucyhpZCxuYW1lLGNyZWF0ZWRfYXQpXCIpXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKTtcblxuICBpZiAob3JnYW5pemF0aW9uc0Vycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBvcmdhbml6YXRpb25zRXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgLy8gVHJhbnNmb3JtIHRoZSBkYXRhIHRvIG1hdGNoIE9yZ2FuaXphdGlvbldpdGhSb2xlIHN0cnVjdHVyZVxuICBjb25zdCBvcmdhbml6YXRpb25zOiBPcmdhbml6YXRpb25XaXRoUm9sZVtdID0gKHVzZXJPcmdzID8/IFtdKS5tYXAoKHVvKSA9PiB7XG4gICAgY29uc3Qgb3JnID0gdW8ub3JnYW5pemF0aW9ucyBhcyBPcmdhbml6YXRpb24gfCBPcmdhbml6YXRpb25bXTtcbiAgICAvLyBIYW5kbGUgY2FzZSB3aGVyZSBvcmdhbml6YXRpb25zIG1pZ2h0IGJlIGFuIGFycmF5IChzaG91bGRuJ3QgaGFwcGVuIHdpdGggcHJvcGVyIEZLKVxuICAgIGNvbnN0IG9yZ0RhdGEgPSBBcnJheS5pc0FycmF5KG9yZykgPyBvcmdbMF0gOiBvcmc7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IG9yZ0RhdGEuaWQsXG4gICAgICBuYW1lOiBvcmdEYXRhLm5hbWUsXG4gICAgICBjcmVhdGVkX2F0OiBvcmdEYXRhLmNyZWF0ZWRfYXQsXG4gICAgICByb2xlOiB1by5yb2xlLFxuICAgICAgam9pbmVkX2F0OiB1by5qb2luZWRfYXQsXG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBzdWNjZXNzOiB0cnVlLFxuICAgIGRhdGE6IG9yZ2FuaXphdGlvbnMsXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPcmdCeUlkKFxuICBvcmdJZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8T3JnYW5pemF0aW9uPj4ge1xuICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBmb3VuZFwiIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IG9yZ2FuaXphdGlvbiwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oXCJvcmdhbml6YXRpb25zXCIpXG4gICAgLnNlbGVjdChcImlkLG5hbWUsY3JlYXRlZF9hdFwiKVxuICAgIC5lcShcImlkXCIsIG9yZ0lkKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIGlmICghb3JnYW5pemF0aW9uKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIk9yZ2FuaXphdGlvbiBub3QgZm91bmRcIiB9O1xuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogb3JnYW5pemF0aW9uIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPcmdNZW1iZXJzKFxuICBvcmdJZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8T3JnYW5pemF0aW9uTWVtYmVyW10+PiB7XG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWRcIiB9O1xuICB9XG5cbiAgLy8gVmVyaWZ5IHVzZXIgaGFzIGFjY2VzcyB0byB0aGlzIG9yZ2FuaXphdGlvblxuICBjb25zdCB7IGRhdGE6IHVzZXJPcmcsIGVycm9yOiBhY2Nlc3NFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbShcInVzZXJfb3JnYW5pemF0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCJvcmdhbml6YXRpb25faWRcIilcbiAgICAuZXEoXCJvcmdhbml6YXRpb25faWRcIiwgb3JnSWQpXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoYWNjZXNzRXJyb3IgfHwgIXVzZXJPcmcpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiQWNjZXNzIGRlbmllZCB0byB0aGlzIG9yZ2FuaXphdGlvblwiIH07XG4gIH1cblxuICAvLyBGZXRjaCBhbGwgbWVtYmVycyBvZiB0aGUgb3JnYW5pemF0aW9uIHdpdGggdGhlaXIgdXNlciBkZXRhaWxzXG4gIC8vIEpvaW4gd2l0aCB1c2VycyB0YWJsZSB0byBnZXQgZW1haWwgYWRkcmVzc2VzXG4gIGNvbnN0IHsgZGF0YTogbWVtYmVycywgZXJyb3I6IG1lbWJlcnNFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbShcInVzZXJfb3JnYW5pemF0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCJ1c2VyX2lkLCBvcmdhbml6YXRpb25faWQsIHJvbGUsIGpvaW5lZF9hdCwgdXNlcnMoZW1haWwpXCIpXG4gICAgLmVxKFwib3JnYW5pemF0aW9uX2lkXCIsIG9yZ0lkKVxuICAgIC5vcmRlcihcImpvaW5lZF9hdFwiLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcblxuICBpZiAobWVtYmVyc0Vycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBtZW1iZXJzRXJyb3IubWVzc2FnZSB9O1xuICB9XG5cbiAgaWYgKCFtZW1iZXJzIHx8IG1lbWJlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogW10gfTtcbiAgfVxuXG4gIC8vIFRyYW5zZm9ybSB0aGUgam9pbmVkIGRhdGEgdG8gbWF0Y2ggT3JnYW5pemF0aW9uTWVtYmVyIHR5cGVcbiAgY29uc3QgbWVtYmVyc1dpdGhFbWFpbHM6IE9yZ2FuaXphdGlvbk1lbWJlcltdID0gbWVtYmVycy5tYXAoKG0pID0+IHtcbiAgICAvLyBIYW5kbGUgdGhlIHVzZXJzIGZpZWxkIHdoaWNoIGNvdWxkIGJlIGFuIG9iamVjdCBvciBhcnJheSBkdWUgdG8gdGhlIGpvaW5cbiAgICBjb25zdCB1c2VyRGF0YSA9IG0udXNlcnMgYXMgeyBlbWFpbDogc3RyaW5nIH0gfCB7IGVtYWlsOiBzdHJpbmcgfVtdIHwgbnVsbDtcbiAgICBjb25zdCBlbWFpbCA9IEFycmF5LmlzQXJyYXkodXNlckRhdGEpXG4gICAgICA/IHVzZXJEYXRhWzBdPy5lbWFpbCB8fCBcIlVua25vd25cIlxuICAgICAgOiB1c2VyRGF0YT8uZW1haWwgfHwgXCJVbmtub3duXCI7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdXNlcl9pZDogbS51c2VyX2lkLFxuICAgICAgb3JnYW5pemF0aW9uX2lkOiBtLm9yZ2FuaXphdGlvbl9pZCxcbiAgICAgIHJvbGU6IG0ucm9sZSBhcyBcIm93bmVyXCIgfCBcInRlYW1tYXRlXCIsXG4gICAgICBqb2luZWRfYXQ6IG0uam9pbmVkX2F0LFxuICAgICAgdXNlcl9lbWFpbDogZW1haWwsXG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogbWVtYmVyc1dpdGhFbWFpbHMgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZU9yZyhcbiAgZm9ybURhdGE6IEZvcm1EYXRhLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8T3JnYW5pemF0aW9uPj4ge1xuICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBmb3VuZFwiIH07XG4gIH1cblxuICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XG5cbiAgaWYgKCFuYW1lIHx8IG5hbWUudHJpbSgpID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIk9yZ2FuaXphdGlvbiBuYW1lIGlzIHJlcXVpcmVkXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogb3JnYW5pemF0aW9uLCBlcnJvcjogb3JnYW5pemF0aW9uRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oXCJvcmdhbml6YXRpb25zXCIpXG4gICAgLmluc2VydCh7XG4gICAgICBuYW1lOiBuYW1lLnRyaW0oKSxcbiAgICB9KVxuICAgIC5zZWxlY3QoKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAob3JnYW5pemF0aW9uRXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IG9yZ2FuaXphdGlvbkVycm9yLm1lc3NhZ2UgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZXJyb3I6IHVzZXJPcmdhbml6YXRpb25FcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbShcInVzZXJfb3JnYW5pemF0aW9uc1wiKVxuICAgIC5pbnNlcnQoe1xuICAgICAgdXNlcl9pZDogdXNlci5pZCxcbiAgICAgIG9yZ2FuaXphdGlvbl9pZDogb3JnYW5pemF0aW9uLmlkLFxuICAgICAgcm9sZTogXCJvd25lclwiLFxuICAgIH0pXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICh1c2VyT3JnYW5pemF0aW9uRXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHVzZXJPcmdhbml6YXRpb25FcnJvci5tZXNzYWdlIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBvcmdhbml6YXRpb24gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUludml0ZUxpbmsoXG4gIG9yZ2FuaXphdGlvbklkOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDx7IHRva2VuOiBzdHJpbmc7IGV4cGlyZXNBdDogc3RyaW5nIH0+PiB7XG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgLy9hdXRoZW50aWNhdGUgdXNlclxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZCFcIiB9O1xuICB9XG5cbiAgLy9jaGVjayBtZW1iZXJzaGlwXG4gIGNvbnN0IHsgZGF0YTogdXNlck9yZywgZXJyb3I6IGFjY2Vzc0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKFwidXNlcl9vcmdhbml6YXRpb25zXCIpXG4gICAgLnNlbGVjdChcIm9yZ2FuaXphdGlvbl9pZCwgcm9sZVwiKVxuICAgIC5lcShcIm9yZ2FuaXphdGlvbl9pZFwiLCBvcmdhbml6YXRpb25JZClcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChhY2Nlc3NFcnJvciB8fCAhdXNlck9yZykge1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yOiBcIlVzZXIgZG9lcyBub3QgaGF2ZSBhY2Nlc3MgdG8gdGhpcyBvcmdhbml6YXRpb24hXCIsXG4gICAgfTtcbiAgfVxuXG4gIC8vZ2VuZXJhdGUgYSBzZWN1cmUgdG9rZW5cblxuICBjb25zdCB0b2tlbiA9IGNyeXB0by5yYW5kb21VVUlEKCk7XG5cbiAgLy9jYWxjdWxhdGUgZXhwaXJ5IGRhdGVcbiAgY29uc3QgZXhwaXJlc0F0ID0gbmV3IERhdGUoKTtcbiAgZXhwaXJlc0F0LnNldERhdGUoZXhwaXJlc0F0LmdldERhdGUoKSArIDcpO1xuXG4gIC8vc3RvcmUgdGhlIGludml0ZSBpbiBzdXBhXG5cbiAgY29uc3QgeyBlcnJvcjogaW52aXRlRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oXCJvcmdhbml6YXRpb25faW52aXRlc1wiKVxuICAgIC5pbnNlcnQoe1xuICAgICAgb3JnYW5pemF0aW9uX2lkOiBvcmdhbml6YXRpb25JZCxcbiAgICAgIGNyZWF0ZWRfYnk6IHVzZXIuaWQsXG4gICAgICB0b2tlbixcbiAgICAgIGV4cGlyZXNfYXQ6IGV4cGlyZXNBdC50b0lTT1N0cmluZygpLFxuICAgIH0pO1xuXG4gIGlmIChpbnZpdGVFcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gY3JlYXRlIGludml0ZTpcIiwgaW52aXRlRXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gY3JlYXRlIGludml0ZSBsaW5rXCIgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc3VjY2VzczogdHJ1ZSxcbiAgICBkYXRhOiB7XG4gICAgICB0b2tlbixcbiAgICAgIGV4cGlyZXNBdDogZXhwaXJlc0F0LnRvSVNPU3RyaW5nKCksXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFjY2VwdEludml0ZShcbiAgdG9rZW46IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PHsgb3JnYW5pemF0aW9uSWQ6IHN0cmluZyB9Pj4ge1xuICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuXG4gIC8vIDEuIEF1dGhlbnRpY2F0ZSB1c2VyXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yOiBcIllvdSBtdXN0IGJlIGxvZ2dlZCBpbiB0byBhY2NlcHQgYW4gaW52aXRlXCIsXG4gICAgfTtcbiAgfVxuXG4gIC8vIDIuIEZldGNoIGFuZCB2YWxpZGF0ZSBpbnZpdGUgKHdpdGggbG9ja2luZyB0byBwcmV2ZW50IHJhY2UgY29uZGl0aW9ucylcbiAgY29uc3QgeyBkYXRhOiBpbnZpdGUsIGVycm9yOiBpbnZpdGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbShcIm9yZ2FuaXphdGlvbl9pbnZpdGVzXCIpXG4gICAgLnNlbGVjdChcIipcIilcbiAgICAuZXEoXCJ0b2tlblwiLCB0b2tlbilcbiAgICAuaXMoXCJ1c2VkX2F0XCIsIG51bGwpIC8vIE9ubHkgZ2V0IHVudXNlZCBpbnZpdGVzXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChpbnZpdGVFcnJvciB8fCAhaW52aXRlKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkludmFsaWQgb3IgZXhwaXJlZCBpbnZpdGUgbGlua1wiIH07XG4gIH1cblxuICAvLyAzLiBDaGVjayBleHBpcmF0aW9uXG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGV4cGlyZXNBdCA9IG5ldyBEYXRlKGludml0ZS5leHBpcmVzX2F0KTtcbiAgaWYgKG5vdyA+IGV4cGlyZXNBdCkge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJUaGlzIGludml0ZSBoYXMgZXhwaXJlZFwiIH07XG4gIH1cblxuICAvLyA0LiBDaGVjayBpZiB1c2VyIGlzIGFscmVhZHkgYSBtZW1iZXJcbiAgY29uc3QgeyBkYXRhOiBleGlzdGluZ01lbWJlcnNoaXAgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oXCJ1c2VyX29yZ2FuaXphdGlvbnNcIilcbiAgICAuc2VsZWN0KFwib3JnYW5pemF0aW9uX2lkXCIpXG4gICAgLmVxKFwib3JnYW5pemF0aW9uX2lkXCIsIGludml0ZS5vcmdhbml6YXRpb25faWQpXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZXhpc3RpbmdNZW1iZXJzaGlwKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiWW91IGFyZSBhbHJlYWR5IGEgbWVtYmVyIG9mIHRoaXMgb3JnYW5pemF0aW9uXCIsXG4gICAgfTtcbiAgfVxuXG4gIC8vIDUuIEFkZCB1c2VyIHRvIG9yZ2FuaXphdGlvblxuICBjb25zdCB7IGVycm9yOiBtZW1iZXJzaGlwRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oXCJ1c2VyX29yZ2FuaXphdGlvbnNcIilcbiAgICAuaW5zZXJ0KHtcbiAgICAgIHVzZXJfaWQ6IHVzZXIuaWQsXG4gICAgICBvcmdhbml6YXRpb25faWQ6IGludml0ZS5vcmdhbml6YXRpb25faWQsXG4gICAgICByb2xlOiBcInRlYW1tYXRlXCIsIC8vIERlZmF1bHQgcm9sZSBmb3IgaW52aXRlZCB1c2Vyc1xuICAgIH0pO1xuXG4gIGlmIChtZW1iZXJzaGlwRXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGFkZCB1c2VyIHRvIG9yZ2FuaXphdGlvbjpcIiwgbWVtYmVyc2hpcEVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIGpvaW4gb3JnYW5pemF0aW9uXCIgfTtcbiAgfVxuXG4gIC8vIDYuIE1hcmsgaW52aXRlIGFzIHVzZWQgKHVzaW5nIGFkbWluIGNsaWVudCB3aXRoIHNlY3JldCBrZXkgdG8gYnlwYXNzIFJMUylcbiAgY29uc3QgYWRtaW5DbGllbnQgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xuICBjb25zdCB7IGVycm9yOiB1cGRhdGVFcnJvciB9ID0gYXdhaXQgYWRtaW5DbGllbnRcbiAgICAuZnJvbShcIm9yZ2FuaXphdGlvbl9pbnZpdGVzXCIpXG4gICAgLnVwZGF0ZSh7XG4gICAgICB1c2VkX2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICB1c2VkX2J5OiB1c2VyLmlkLFxuICAgIH0pXG4gICAgLmVxKFwidG9rZW5cIiwgdG9rZW4pO1xuXG4gIGlmICh1cGRhdGVFcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbWFyayBpbnZpdGUgYXMgdXNlZDpcIiwgdXBkYXRlRXJyb3IpO1xuICAgIC8vIERvbid0IHJldHVybiBlcnJvciAtIHVzZXIgd2FzIGFscmVhZHkgYWRkZWQgc3VjY2Vzc2Z1bGx5XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgZGF0YTogeyBvcmdhbml6YXRpb25JZDogaW52aXRlLm9yZ2FuaXphdGlvbl9pZCB9LFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVtb3ZlTWVtYmVyRnJvbU9yZyhcbiAgb3JnYW5pemF0aW9uSWQ6IHN0cmluZyxcbiAgdXNlcklkVG9SZW1vdmU6IHN0cmluZyxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PHZvaWQ+PiB7XG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgLy8gMS4gQXV0aGVudGljYXRlIHVzZXJcbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWRcIiB9O1xuICB9XG5cbiAgLy8gMi4gVmVyaWZ5IGN1cnJlbnQgdXNlciBpcyBhbiBvd25lciAoUkxTIHdpbGwgYWxzbyBlbmZvcmNlIHRoaXMpXG4gIGNvbnN0IHsgZGF0YTogY3VycmVudFVzZXJSb2xlLCBlcnJvcjogcm9sZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKFwidXNlcl9vcmdhbml6YXRpb25zXCIpXG4gICAgLnNlbGVjdChcInJvbGVcIilcbiAgICAuZXEoXCJvcmdhbml6YXRpb25faWRcIiwgb3JnYW5pemF0aW9uSWQpXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAocm9sZUVycm9yIHx8ICFjdXJyZW50VXNlclJvbGUgfHwgY3VycmVudFVzZXJSb2xlLnJvbGUgIT09IFwib3duZXJcIikge1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yOiBcIk9ubHkgb3JnYW5pemF0aW9uIG93bmVycyBjYW4gcmVtb3ZlIG1lbWJlcnNcIixcbiAgICB9O1xuICB9XG5cbiAgLy8gMy4gQ2hlY2sgaWYgdGhlIHVzZXIgYmVpbmcgcmVtb3ZlZCBpcyB0aGUgbGFzdCBvd25lclxuICBpZiAodXNlcklkVG9SZW1vdmUgPT09IHVzZXIuaWQpIHtcbiAgICBjb25zdCB7IGRhdGE6IG93bmVycywgZXJyb3I6IG93bmVyc0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgLmZyb20oXCJ1c2VyX29yZ2FuaXphdGlvbnNcIilcbiAgICAgIC5zZWxlY3QoXCJ1c2VyX2lkXCIpXG4gICAgICAuZXEoXCJvcmdhbml6YXRpb25faWRcIiwgb3JnYW5pemF0aW9uSWQpXG4gICAgICAuZXEoXCJyb2xlXCIsIFwib3duZXJcIik7XG5cbiAgICBpZiAob3duZXJzRXJyb3IpIHtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gdmVyaWZ5IG93bmVyc2hpcCBzdGF0dXNcIiB9O1xuICAgIH1cblxuICAgIGlmIChvd25lcnMgJiYgb3duZXJzLmxlbmd0aCA8PSAxKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IFwiQ2Fubm90IHJlbW92ZSB0aGUgbGFzdCBvd25lciBmcm9tIHRoZSBvcmdhbml6YXRpb25cIixcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgLy8gNC4gUmVtb3ZlIHRoZSBtZW1iZXIgKFJMUyBwb2xpY3kgd2lsbCBlbmZvcmNlIG93bmVyIHBlcm1pc3Npb24pXG4gIGNvbnN0IHsgZXJyb3I6IGRlbGV0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKFwidXNlcl9vcmdhbml6YXRpb25zXCIpXG4gICAgLmRlbGV0ZSgpXG4gICAgLmVxKFwib3JnYW5pemF0aW9uX2lkXCIsIG9yZ2FuaXphdGlvbklkKVxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlcklkVG9SZW1vdmUpO1xuXG4gIGlmIChkZWxldGVFcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gcmVtb3ZlIG1lbWJlclwiIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1bmRlZmluZWQgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxlYXZlT3JnYW5pemF0aW9uKFxuICBvcmdhbml6YXRpb25JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8dm9pZD4+IHtcbiAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICAvLyAxLiBBdXRoZW50aWNhdGUgdXNlclxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZFwiIH07XG4gIH1cblxuICAvLyAyLiBWZXJpZnkgdXNlciBpcyBhIG1lbWJlciBvZiB0aGlzIG9yZ2FuaXphdGlvblxuICBjb25zdCB7IGRhdGE6IG1lbWJlcnNoaXAsIGVycm9yOiBtZW1iZXJzaGlwRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oXCJ1c2VyX29yZ2FuaXphdGlvbnNcIilcbiAgICAuc2VsZWN0KFwicm9sZVwiKVxuICAgIC5lcShcIm9yZ2FuaXphdGlvbl9pZFwiLCBvcmdhbml6YXRpb25JZClcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmIChtZW1iZXJzaGlwRXJyb3IgfHwgIW1lbWJlcnNoaXApIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBlcnJvcjogXCJZb3UgYXJlIG5vdCBhIG1lbWJlciBvZiB0aGlzIG9yZ2FuaXphdGlvblwiLFxuICAgIH07XG4gIH1cblxuICAvLyAzLiBJZiB1c2VyIGlzIGFuIG93bmVyLCBjaGVjayBpZiB0aGV5J3JlIHRoZSBsYXN0IG93bmVyXG4gIGlmIChtZW1iZXJzaGlwLnJvbGUgPT09IFwib3duZXJcIikge1xuICAgIGNvbnN0IHsgZGF0YTogb3duZXJzLCBlcnJvcjogb3duZXJzRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAuZnJvbShcInVzZXJfb3JnYW5pemF0aW9uc1wiKVxuICAgICAgLnNlbGVjdChcInVzZXJfaWRcIilcbiAgICAgIC5lcShcIm9yZ2FuaXphdGlvbl9pZFwiLCBvcmdhbml6YXRpb25JZClcbiAgICAgIC5lcShcInJvbGVcIiwgXCJvd25lclwiKTtcblxuICAgIGlmIChvd25lcnNFcnJvcikge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkZhaWxlZCB0byB2ZXJpZnkgb3duZXJzaGlwIHN0YXR1c1wiIH07XG4gICAgfVxuXG4gICAgaWYgKG93bmVycyAmJiBvd25lcnMubGVuZ3RoIDw9IDEpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogXCJDYW5ub3QgbGVhdmUgYXMgdGhlIGxhc3Qgb3duZXIuIFRyYW5zZmVyIG93bmVyc2hpcCBmaXJzdC5cIixcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgLy8gNC4gUmVtb3ZlIHRoZSB1c2VyIGZyb20gdGhlIG9yZ2FuaXphdGlvblxuICBjb25zdCB7IGVycm9yOiBkZWxldGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbShcInVzZXJfb3JnYW5pemF0aW9uc1wiKVxuICAgIC5kZWxldGUoKVxuICAgIC5lcShcIm9yZ2FuaXphdGlvbl9pZFwiLCBvcmdhbml6YXRpb25JZClcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpO1xuXG4gIGlmIChkZWxldGVFcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gbGVhdmUgb3JnYW5pemF0aW9uXCIgfTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVuZGVmaW5lZCB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlTWVtYmVyUm9sZShcbiAgb3JnYW5pemF0aW9uSWQ6IHN0cmluZyxcbiAgdXNlcklkVG9VcGRhdGU6IHN0cmluZyxcbiAgbmV3Um9sZTogXCJvd25lclwiIHwgXCJ0ZWFtbWF0ZVwiLFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8dm9pZD4+IHtcbiAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICAvLyAxLiBBdXRoZW50aWNhdGUgdXNlclxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZFwiIH07XG4gIH1cblxuICAvLyAyLiBWZXJpZnkgY3VycmVudCB1c2VyIGlzIGFuIG93bmVyXG4gIGNvbnN0IHsgZGF0YTogY3VycmVudFVzZXJSb2xlLCBlcnJvcjogcm9sZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKFwidXNlcl9vcmdhbml6YXRpb25zXCIpXG4gICAgLnNlbGVjdChcInJvbGVcIilcbiAgICAuZXEoXCJvcmdhbml6YXRpb25faWRcIiwgb3JnYW5pemF0aW9uSWQpXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAocm9sZUVycm9yIHx8ICFjdXJyZW50VXNlclJvbGUgfHwgY3VycmVudFVzZXJSb2xlLnJvbGUgIT09IFwib3duZXJcIikge1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yOiBcIk9ubHkgb3JnYW5pemF0aW9uIG93bmVycyBjYW4gY2hhbmdlIG1lbWJlciByb2xlc1wiLFxuICAgIH07XG4gIH1cblxuICAvLyAzLiBHZXQgY3VycmVudCByb2xlIG9mIHVzZXIgYmVpbmcgdXBkYXRlZFxuICBjb25zdCB7IGRhdGE6IHRhcmdldFVzZXIsIGVycm9yOiB0YXJnZXRFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbShcInVzZXJfb3JnYW5pemF0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCJyb2xlXCIpXG4gICAgLmVxKFwib3JnYW5pemF0aW9uX2lkXCIsIG9yZ2FuaXphdGlvbklkKVxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlcklkVG9VcGRhdGUpXG4gICAgLnNpbmdsZSgpO1xuXG4gIGlmICh0YXJnZXRFcnJvciB8fCAhdGFyZ2V0VXNlcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJNZW1iZXIgbm90IGZvdW5kXCIgfTtcbiAgfVxuXG4gIC8vIDQuIElmIGRlbW90aW5nIGZyb20gb3duZXIgdG8gdGVhbW1hdGUsIGNoZWNrIGlmIHRoZXkncmUgdGhlIGxhc3Qgb3duZXJcbiAgaWYgKHRhcmdldFVzZXIucm9sZSA9PT0gXCJvd25lclwiICYmIG5ld1JvbGUgPT09IFwidGVhbW1hdGVcIikge1xuICAgIGNvbnN0IHsgZGF0YTogb3duZXJzLCBlcnJvcjogb3duZXJzRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAuZnJvbShcInVzZXJfb3JnYW5pemF0aW9uc1wiKVxuICAgICAgLnNlbGVjdChcInVzZXJfaWRcIilcbiAgICAgIC5lcShcIm9yZ2FuaXphdGlvbl9pZFwiLCBvcmdhbml6YXRpb25JZClcbiAgICAgIC5lcShcInJvbGVcIiwgXCJvd25lclwiKTtcblxuICAgIGlmIChvd25lcnNFcnJvcikge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkZhaWxlZCB0byB2ZXJpZnkgb3duZXJzaGlwIHN0YXR1c1wiIH07XG4gICAgfVxuXG4gICAgaWYgKG93bmVycyAmJiBvd25lcnMubGVuZ3RoIDw9IDEpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogXCJDYW5ub3QgZGVtb3RlIHRoZSBsYXN0IG93bmVyLiBQcm9tb3RlIGFub3RoZXIgbWVtYmVyIGZpcnN0LlwiLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICAvLyA1LiBVcGRhdGUgdGhlIHJvbGVcbiAgY29uc3QgeyBlcnJvcjogdXBkYXRlRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oXCJ1c2VyX29yZ2FuaXphdGlvbnNcIilcbiAgICAudXBkYXRlKHsgcm9sZTogbmV3Um9sZSB9KVxuICAgIC5lcShcIm9yZ2FuaXphdGlvbl9pZFwiLCBvcmdhbml6YXRpb25JZClcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXJJZFRvVXBkYXRlKTtcblxuICBpZiAodXBkYXRlRXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBtZW1iZXIgcm9sZVwiIH07XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1bmRlZmluZWQgfTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiaVNBOElzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/dashboard/organizations/new-organization-form.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NewOrganizationForm",
    ()=>NewOrganizationForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/separator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$field$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/field.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$ea2522__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/services/data:ea2522 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function NewOrganizationForm() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        try {
            const formData = new FormData(e.currentTarget);
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$ea2522__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createOrg"])(formData);
            if (!result.success) {
                setError(result.error);
                return;
            }
            // Invalidate organizations query to refetch fresh data
            queryClient.invalidateQueries({
                queryKey: [
                    "organizations"
                ]
            });
            // Redirect to organizations page after creation
            router.push("/dashboard/organizations");
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to create organization");
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col bg-elevated",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "space-y-6 px-5 py-5 border rounded-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-foreground",
                            children: "Create a new Organization"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/organizations/new-organization-form.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-muted-foreground text-xs",
                            children: "Organizations are a way to group repositories together. Each organization can be accessed by different team members."
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/organizations/new-organization-form.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/organizations/new-organization-form.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                    fileName: "[project]/src/components/dashboard/organizations/new-organization-form.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$field$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$field$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldLabel"], {
                            htmlFor: "name",
                            children: "Name"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/organizations/new-organization-form.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "name",
                            name: "name",
                            type: "text",
                            value: name,
                            onChange: (e)=>setName(e.target.value),
                            placeholder: "Organization name",
                            required: true,
                            className: "w-full px-3 py-2 border border-input rounded-md bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/organizations/new-organization-form.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$field$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldDescription"], {
                            children: "Choose a unique name for your organization"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/organizations/new-organization-form.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$field$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldError"], {
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/organizations/new-organization-form.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/organizations/new-organization-form.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                    fileName: "[project]/src/components/dashboard/organizations/new-organization-form.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "submit",
                            size: "sm",
                            disabled: isLoading || !name.trim(),
                            children: isLoading ? "Creating..." : "Create Organization"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/organizations/new-organization-form.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            variant: "outline",
                            size: "sm",
                            onClick: ()=>router.back(),
                            disabled: isLoading,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/organizations/new-organization-form.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/organizations/new-organization-form.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/organizations/new-organization-form.tsx",
            lineNumber: 53,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/organizations/new-organization-form.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_s(NewOrganizationForm, "UYKfxGNbjIjloSNdiZQw8Q7NZpo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"]
    ];
});
_c = NewOrganizationForm;
var _c;
__turbopack_context__.k.register(_c, "NewOrganizationForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/@radix-ui/react-label/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/primitive.tsx
__turbopack_context__.s([
    "Primitive",
    ()=>Primitive,
    "Root",
    ()=>Root,
    "dispatchDiscreteCustomEvent",
    ()=>dispatchDiscreteCustomEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
;
var NODES = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul"
];
var Primitive = NODES.reduce((primitive, node)=>{
    const Slot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSlot"])(`Primitive.${node}`);
    const Node = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { asChild, ...primitiveProps } = props;
        const Comp = asChild ? Slot : node;
        if (typeof window !== "undefined") {
            window[Symbol.for("radix-ui")] = true;
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Comp, {
            ...primitiveProps,
            ref: forwardedRef
        });
    });
    Node.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node
    };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
    if (target) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"](()=>target.dispatchEvent(event));
}
var Root = Primitive;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label,
    "Root",
    ()=>Root
]);
// src/label.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
var NAME = "Label";
var Label = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].label, {
        ...props,
        ref: forwardedRef,
        onMouseDown: (event)=>{
            const target = event.target;
            if (target.closest("button, input, select, textarea")) return;
            props.onMouseDown?.(event);
            if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
        }
    });
});
Label.displayName = NAME;
var Root = Label;
;
 //# sourceMappingURL=index.mjs.map
}),
]);

//# sourceMappingURL=_670de32d._.js.map