(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/animations/section-entrances.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionEntrances",
    ()=>SectionEntrances
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function SectionEntrances() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SectionEntrances.useEffect": ()=>{
            if (!pathname) return;
            let disposed = false;
            let cleanup;
            async function setup() {
                const [{ gsap }, { ScrollTrigger }, { SplitText }] = await Promise.all([
                    __turbopack_context__.A("[project]/node_modules/gsap/index.js [app-client] (ecmascript, async loader)"),
                    __turbopack_context__.A("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript, async loader)"),
                    __turbopack_context__.A("[project]/node_modules/gsap/SplitText.js [app-client] (ecmascript, async loader)"),
                    document.fonts.ready
                ]);
                if (disposed) return;
                gsap.registerPlugin(ScrollTrigger, SplitText);
                ScrollTrigger.config({
                    ignoreMobileResize: true
                });
                const media = gsap.matchMedia();
                cleanup = ({
                    "SectionEntrances.useEffect.setup": ()=>media.revert()
                })["SectionEntrances.useEffect.setup"];
                media.add('(prefers-reduced-motion: no-preference)', {
                    "SectionEntrances.useEffect.setup": ()=>{
                        const splits = [];
                        document.querySelectorAll('[data-title-anim], [data-text-anim]').forEach({
                            "SectionEntrances.useEffect.setup": (element)=>{
                                const title = element.hasAttribute('data-title-anim');
                                const refined = Boolean(element.closest('.home-refined')) && !element.closest('.hero');
                                const split = SplitText.create(element, {
                                    type: 'words,chars',
                                    mask: 'chars'
                                });
                                splits.push(split);
                                gsap.set(split.chars, {
                                    yPercent: -100
                                });
                                const timeline = gsap.timeline({
                                    paused: true
                                });
                                timeline.to(split.chars, {
                                    yPercent: 0,
                                    duration: refined ? title ? 0.7 : 0.55 : title ? 1 : 0.8,
                                    stagger: {
                                        amount: refined ? title ? 0.2 : 0.12 : title ? 0.5 : 0.4
                                    },
                                    ease: refined ? 'power3.out' : title ? 'back.inOut' : 'power3.out'
                                }, title ? 0 : 0.2);
                                if (title) {
                                    const badges = element.parentElement?.querySelectorAll('[data-floating-badge]');
                                    if (badges?.length) {
                                        gsap.set(badges, {
                                            opacity: 0,
                                            scale: 0.5
                                        });
                                        timeline.to(badges, {
                                            opacity: 1,
                                            scale: 1,
                                            duration: 0.6,
                                            ease: 'back.out'
                                        }, 1);
                                    }
                                }
                                // Keep triggers until route cleanup: removing them during another
                                // trigger's refresh can invalidate ScrollTrigger's iteration.
                                ScrollTrigger.create({
                                    animation: timeline,
                                    trigger: element,
                                    start: 'clamp(top 90%)',
                                    end: 'clamp(bottom top)',
                                    toggleActions: 'play none none none',
                                    onRefresh: {
                                        "SectionEntrances.useEffect.setup": (trigger)=>{
                                            if (trigger.scroll() >= trigger.end) timeline.progress(1);
                                            else if (trigger.scroll() >= trigger.start) timeline.play();
                                        }
                                    }["SectionEntrances.useEffect.setup"]
                                });
                            }
                        }["SectionEntrances.useEffect.setup"]);
                        return ({
                            "SectionEntrances.useEffect.setup": ()=>{
                                for (const split of splits)split.revert();
                            }
                        })["SectionEntrances.useEffect.setup"];
                    }
                }["SectionEntrances.useEffect.setup"]);
                media.add('(min-width: 992px) and (prefers-reduced-motion: no-preference)', {
                    "SectionEntrances.useEffect.setup": ()=>{
                        const originalStyles = new Map();
                        document.querySelectorAll('[data-slide-cards]').forEach({
                            "SectionEntrances.useEffect.setup": (element)=>{
                                const cards = element.querySelectorAll('[data-slide-card]');
                                for (const card of cards)originalStyles.set(card, card.getAttribute('style'));
                                const rotations = Array.from(cards, {
                                    "SectionEntrances.useEffect.setup.rotations": (card)=>Number(gsap.getProperty(card, 'rotation'))
                                }["SectionEntrances.useEffect.setup.rotations"]);
                                gsap.set(cards, {
                                    transition: 'none',
                                    x: '100vw',
                                    rotation: 40,
                                    transformOrigin: '100% 100%'
                                });
                                const timeline = gsap.timeline({
                                    paused: true
                                });
                                timeline.to(cards, {
                                    x: 0,
                                    rotation: {
                                        "SectionEntrances.useEffect.setup": (index)=>rotations[index]
                                    }["SectionEntrances.useEffect.setup"],
                                    duration: 1,
                                    stagger: {
                                        amount: 0.4
                                    },
                                    ease: 'back.out',
                                    onComplete () {
                                        gsap.set(this.targets(), {
                                            clearProps: 'transform,transformOrigin,transition'
                                        });
                                    }
                                });
                                ScrollTrigger.create({
                                    animation: timeline,
                                    trigger: element,
                                    start: 'clamp(top center)',
                                    end: 'clamp(bottom top)',
                                    toggleActions: 'play none none none',
                                    onRefresh: {
                                        "SectionEntrances.useEffect.setup": (trigger)=>{
                                            if (trigger.scroll() >= trigger.end) timeline.progress(1);
                                            else if (trigger.scroll() >= trigger.start) timeline.play();
                                        }
                                    }["SectionEntrances.useEffect.setup"]
                                });
                            }
                        }["SectionEntrances.useEffect.setup"]);
                        return ({
                            "SectionEntrances.useEffect.setup": ()=>{
                                for (const [card, style] of originalStyles){
                                    if (style === null) card.removeAttribute('style');
                                    else card.setAttribute('style', style);
                                }
                            }
                        })["SectionEntrances.useEffect.setup"];
                    }
                }["SectionEntrances.useEffect.setup"]);
                ScrollTrigger.refresh();
            }
            void setup();
            return ({
                "SectionEntrances.useEffect": ()=>{
                    disposed = true;
                    cleanup?.();
                }
            })["SectionEntrances.useEffect"];
        }
    }["SectionEntrances.useEffect"], [
        pathname
    ]);
    return null;
}
_s(SectionEntrances, "V/ldUoOTYUs0Cb2F6bbxKSn7KxI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = SectionEntrances;
var _c;
__turbopack_context__.k.register(_c, "SectionEntrances");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/images/shared/fritz/fritz-mark.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/fritz-mark.1lt25aawz1c7d.png");}),
"[project]/src/assets/images/shared/fritz/fritz-mark.png.mjs { IMAGE => \"[project]/src/assets/images/shared/fritz/fritz-mark.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$shared$2f$fritz$2f$fritz$2d$mark$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/shared/fritz/fritz-mark.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$shared$2f$fritz$2f$fritz$2d$mark$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 500,
    height: 500,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA2klEQVR42l1PzQoBYRQdKX+raTIppSxElCYTSlZKslBmIT8lyt9CiWFhKIyNTBZWSjYeQN7AWpY2Vl+e5Ftc3RlSc+vW7ZzTuecwDI7FYrW6+KjdI/Rw8UaM+ZE2d7jqSXaIICk0Is0pK7YJYroI1WysTfxZBWrqGhq7FQQLM+DiXaI7oSWXkmm0uITyQoX+YQvF4R58mSlF7isYU0FSQTte4fF8g6xdgE9PDAHacGKLhPMDqMgbuN1fUBqdgBU7xgsM4uRDVW+iTgK5KW0qZ+pO9P4hzTUdppofn0tMWD93K2QAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/analytics/consent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConsentManager",
    ()=>ConsentManager,
    "PrivacyPreferences",
    ()=>PrivacyPreferences
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/tracking.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$analytics$2f$tracking$2d$runtime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/analytics/tracking-runtime.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const storageKey = 'traco-consent-v1';
const expiry = 180 * 24 * 60 * 60 * 1000;
const denied = {
    analytics: false,
    marketing: false
};
function readConsent() {
    try {
        const saved = JSON.parse(localStorage.getItem(storageKey) || 'null');
        if (saved && typeof saved.analytics === 'boolean' && typeof saved.marketing === 'boolean' && typeof saved.savedAt === 'number' && Date.now() - saved.savedAt >= 0 && Date.now() - saved.savedAt < expiry) {
            return {
                analytics: saved.analytics,
                marketing: saved.marketing
            };
        }
    } catch  {
    /* Armazenamento indisponível: pedir escolha sem ativar tags. */ }
    return null;
}
function ConsentManager() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [choice, setChoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(denied);
    const [saved, setSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConsentManager.useEffect": ()=>{
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackingAvailable"]) return;
            const previous = readConsent();
            setSaved(previous);
            setChoice(previous || denied);
            setOpen(!previous);
            if (previous) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$analytics$2f$tracking$2d$runtime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTracking"])(previous);
            const show = {
                "ConsentManager.useEffect.show": ()=>setOpen(true)
            }["ConsentManager.useEffect.show"];
            const sync = {
                "ConsentManager.useEffect.sync": (event)=>{
                    if (event.key === storageKey || event.key === null) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$analytics$2f$tracking$2d$runtime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopTracking"])();
                        window.location.reload();
                    }
                }
            }["ConsentManager.useEffect.sync"];
            window.addEventListener('traco:privacy', show);
            window.addEventListener('storage', sync);
            document.addEventListener('click', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$analytics$2f$tracking$2d$runtime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackContact"]);
            return ({
                "ConsentManager.useEffect": ()=>{
                    window.removeEventListener('traco:privacy', show);
                    window.removeEventListener('storage', sync);
                    document.removeEventListener('click', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$analytics$2f$tracking$2d$runtime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackContact"]);
                }
            })["ConsentManager.useEffect"];
        }
    }["ConsentManager.useEffect"], []);
    function save(next) {
        try {
            localStorage.setItem(storageKey, JSON.stringify({
                ...next,
                savedAt: Date.now()
            }));
        } catch  {
        /* A escolha continua válida nesta página. */ }
        setChoice(next);
        setSaved(next);
        setOpen(false);
        if (saved && (saved.analytics !== next.analytics || saved.marketing !== next.marketing)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$analytics$2f$tracking$2d$runtime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopTracking"])();
            // Recarregar remove SDKs já executados e reaplica somente as categorias permitidas.
            window.location.reload();
        } else (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$analytics$2f$tracking$2d$runtime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTracking"])(next);
    }
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackingAvailable"] || !open) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "consent-panel tw:overflow-y-auto tw:bg-paper tw:text-ink",
        "aria-labelledby": "consent-title",
        "aria-describedby": "consent-description",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                id: "consent-title",
                children: "Sua privacidade, suas escolhas."
            }, void 0, false, {
                fileName: "[project]/src/components/analytics/consent.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                id: "consent-description",
                children: "Com sua autorização, usamos Google e Meta para entender as visitas e medir anúncios. Você pode recusar ou mudar sua escolha no rodapé."
            }, void 0, false, {
                fileName: "[project]/src/components/analytics/consent.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tracking"].privacyUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                children: "Ler política de privacidade (nova aba)"
            }, void 0, false, {
                fileName: "[project]/src/components/analytics/consent.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "consent-options tw:grid tw:gap-[12px] tw:my-[18px]",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tracking"].ga4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                checked: choice.analytics,
                                onChange: (event)=>setChoice({
                                        ...choice,
                                        analytics: event.target.checked
                                    })
                            }, void 0, false, {
                                fileName: "[project]/src/components/analytics/consent.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this),
                            ' ',
                            "Estatísticas de navegação (Google Analytics)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/analytics/consent.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this),
                    (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tracking"].ads || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tracking"].meta) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                checked: choice.marketing,
                                onChange: (event)=>setChoice({
                                        ...choice,
                                        marketing: event.target.checked
                                    })
                            }, void 0, false, {
                                fileName: "[project]/src/components/analytics/consent.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this),
                            ' ',
                            "Publicidade e medição de anúncios (Google/Meta)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/analytics/consent.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/analytics/consent.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "consent-actions tw:flex tw:flex-wrap tw:gap-[8px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>save(denied),
                        children: "Recusar opcionais"
                    }, void 0, false, {
                        fileName: "[project]/src/components/analytics/consent.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>save(choice),
                        children: "Salvar escolhas"
                    }, void 0, false, {
                        fileName: "[project]/src/components/analytics/consent.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>save({
                                analytics: Boolean(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tracking"].ga4),
                                marketing: Boolean(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tracking"].ads || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tracking"].meta)
                            }),
                        children: "Aceitar todos"
                    }, void 0, false, {
                        fileName: "[project]/src/components/analytics/consent.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/analytics/consent.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/analytics/consent.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
_s(ConsentManager, "k5WTnzw4oLe2p8W9aL3tf4lyrrg=");
_c = ConsentManager;
function PrivacyPreferences() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackingAvailable"]) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "privacy-preferences tw:block tw:mt-[16px] tw:min-h-[44px]",
        type: "button",
        onClick: ()=>window.dispatchEvent(new Event('traco:privacy')),
        children: "Preferências de privacidade"
    }, void 0, false, {
        fileName: "[project]/src/components/analytics/consent.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
_c1 = PrivacyPreferences;
var _c, _c1;
__turbopack_context__.k.register(_c, "ConsentManager");
__turbopack_context__.k.register(_c1, "PrivacyPreferences");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/analytics/tracking-runtime.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "startTracking",
    ()=>startTracking,
    "stopTracking",
    ()=>stopTracking,
    "trackContact",
    ()=>trackContact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/tracking.ts [app-client] (ecmascript)");
;
let current = {
    analytics: false,
    marketing: false
};
let googleStarted = false;
let metaStarted = false;
function loadScript(id, src) {
    if (document.getElementById(id)) return;
    const script = document.createElement('script');
    script.id = id;
    script.async = true;
    script.src = src;
    document.head.append(script);
}
function startTracking(consent) {
    current = consent;
    const googleId = consent.analytics && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tracking"].ga4 || consent.marketing && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tracking"].ads;
    if (googleId && !googleStarted) {
        googleStarted = true;
        window.dataLayer = window.dataLayer || [];
        window.gtag = function() {
            // biome-ignore lint/complexity/noArguments: gtag usa a fila de Arguments do snippet oficial.
            window.dataLayer?.push(arguments);
        };
        window.gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied'
        });
        window.gtag('consent', 'update', {
            analytics_storage: consent.analytics ? 'granted' : 'denied',
            ad_storage: consent.marketing ? 'granted' : 'denied',
            ad_user_data: consent.marketing ? 'granted' : 'denied',
            ad_personalization: consent.marketing ? 'granted' : 'denied'
        });
        window.gtag('js', new Date());
        if (consent.analytics && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tracking"].ga4) window.gtag('config', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tracking"].ga4, {
            allow_google_signals: consent.marketing,
            allow_ad_personalization_signals: consent.marketing
        });
        if (consent.marketing && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tracking"].ads) window.gtag('config', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tracking"].ads);
        loadScript('traco-google-tag', `https://www.googletagmanager.com/gtag/js?id=${googleId}`);
    }
    if (consent.marketing && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tracking"].meta && !metaStarted) {
        metaStarted = true;
        const pixel = Object.assign((...args)=>{
            if (pixel.callMethod) pixel.callMethod(...args);
            else pixel.queue.push(args);
        }, {
            queue: [],
            loaded: true,
            version: '2.0'
        });
        pixel.push = pixel;
        window.fbq = pixel;
        window._fbq = pixel;
        pixel('consent', 'grant');
        pixel('init', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tracking"].meta);
        pixel('track', 'PageView');
        loadScript('traco-meta-pixel', 'https://connect.facebook.net/en_US/fbevents.js');
    }
}
function stopTracking() {
    current = {
        analytics: false,
        marketing: false
    };
    window.gtag?.('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied'
    });
    window.fbq?.('consent', 'revoke');
}
function trackContact(event) {
    if (!(event.target instanceof Element)) return;
    const link = event.target.closest('a[data-track-contact]');
    if (!link) return;
    const context = link.dataset.trackContact || 'geral';
    const section = link.closest('section[id]')?.id || (link.closest('header') ? 'header' : link.closest('footer') ? 'footer' : 'navegacao');
    if (current.analytics && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tracking"].ga4) {
        window.gtag?.('event', 'whatsapp_click', {
            send_to: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tracking"].ga4,
            contact_context: context,
            section,
            transport_type: 'beacon'
        });
    }
    if (current.marketing && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tracking"].ads && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tracking"].adsLabel) {
        window.gtag?.('event', 'conversion', {
            send_to: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tracking"].ads}/${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tracking"].adsLabel}`
        });
    }
    if (current.marketing && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tracking"].meta) {
        window.fbq?.('trackCustom', 'WhatsAppClick', {
            content_name: context,
            content_category: section
        });
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/anchor-navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnchorNavigation",
    ()=>AnchorNavigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$navigate$2d$anchor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/navigate-anchor.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$plain$2d$click$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/plain-click.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function AnchorNavigation() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnchorNavigation.useEffect": ()=>{
            const previousRestoration = history.scrollRestoration;
            const navigation = performance.getEntriesByType('navigation')[0];
            const reloadingHome = navigation?.type === 'reload' && location.pathname === '/';
            if (reloadingHome) {
                history.scrollRestoration = 'manual';
                history.replaceState(history.state, '', location.pathname + location.search);
                window.scrollTo({
                    top: 0,
                    behavior: 'instant'
                });
            }
            const click = {
                "AnchorNavigation.useEffect.click": (event)=>{
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$plain$2d$click$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainClick"])(event) || !(event.target instanceof Element)) return;
                    const link = event.target.closest('a[href]');
                    if (!link || link.target || link.hasAttribute('download') || link.closest('dialog[open]')) return;
                    const url = new URL(link.href);
                    if (url.origin !== location.origin || url.pathname !== location.pathname || url.search !== location.search || !url.hash) return;
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$navigate$2d$anchor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigateAnchor"])(url.hash)) event.preventDefault();
                }
            }["AnchorNavigation.useEffect.click"];
            let disposed = false;
            let observer;
            const restore = {
                "AnchorNavigation.useEffect.restore": ()=>requestAnimationFrame({
                        "AnchorNavigation.useEffect.restore": ()=>{
                            if (!disposed && location.hash) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$navigate$2d$anchor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigateAnchor"])(location.hash, false, 'instant');
                        }
                    }["AnchorNavigation.useEffect.restore"])
            }["AnchorNavigation.useEffect.restore"];
            const restoreInitial = {
                "AnchorNavigation.useEffect.restoreInitial": ()=>{
                    void document.fonts.ready.then({
                        "AnchorNavigation.useEffect.restoreInitial": ()=>{
                            if (disposed || !location.hash) return;
                            const curtain = document.querySelector('.page-transition');
                            if (!curtain || curtain.getAttribute('data-phase') === 'idle') {
                                restore();
                                return;
                            }
                            observer = new MutationObserver({
                                "AnchorNavigation.useEffect.restoreInitial": ()=>{
                                    if (curtain.getAttribute('data-phase') !== 'idle') return;
                                    observer?.disconnect();
                                    restore();
                                }
                            }["AnchorNavigation.useEffect.restoreInitial"]);
                            observer.observe(curtain, {
                                attributes: true,
                                attributeFilter: [
                                    'data-phase'
                                ]
                            });
                        }
                    }["AnchorNavigation.useEffect.restoreInitial"]);
                }
            }["AnchorNavigation.useEffect.restoreInitial"];
            document.addEventListener('click', click);
            window.addEventListener('popstate', restore);
            // O carregamento por hash também precisa usar o ponto anterior ao sticky.
            if (document.readyState === 'complete') restoreInitial();
            else window.addEventListener('load', restoreInitial, {
                once: true
            });
            return ({
                "AnchorNavigation.useEffect": ()=>{
                    disposed = true;
                    history.scrollRestoration = previousRestoration;
                    observer?.disconnect();
                    document.removeEventListener('click', click);
                    window.removeEventListener('popstate', restore);
                    window.removeEventListener('load', restoreInitial);
                }
            })["AnchorNavigation.useEffect"];
        }
    }["AnchorNavigation.useEffect"], []);
    return null;
}
_s(AnchorNavigation, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = AnchorNavigation;
var _c;
__turbopack_context__.k.register(_c, "AnchorNavigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/footer/footer-reveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FooterReveal",
    ()=>FooterReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function FooterReveal({ children }) {
    _s();
    const footer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FooterReveal.useEffect": ()=>{
            const element = footer.current;
            if (!element) return;
            const header = document.querySelector('.site-header');
            const update = {
                "FooterReveal.useEffect.update": ()=>{
                    const available = document.documentElement.clientHeight - (header?.offsetHeight ?? 0);
                    const bottom = Math.min(0, available - element.offsetHeight);
                    element.style.setProperty('--footer-reveal-bottom', `${bottom}px`);
                    element.dataset.reveal = 'ready';
                }
            }["FooterReveal.useEffect.update"];
            const observer = new ResizeObserver(update);
            observer.observe(element);
            if (header) observer.observe(header);
            window.addEventListener('resize', update);
            update();
            return ({
                "FooterReveal.useEffect": ()=>{
                    observer.disconnect();
                    window.removeEventListener('resize', update);
                    delete element.dataset.reveal;
                    element.style.removeProperty('--footer-reveal-bottom');
                }
            })["FooterReveal.useEffect"];
        }
    }["FooterReveal.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        ref: footer,
        className: "site-footer tw:relative tw:bg-ink tw:text-on-dark-muted",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/layout/footer/footer-reveal.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(FooterReveal, "4vdmDv5XclntLsfLGkB3kXqmfiU=");
_c = FooterReveal;
var _c;
__turbopack_context__.k.register(_c, "FooterReveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/header/brand.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Brand",
    ()=>Brand
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$shared$2f$fritz$2f$fritz$2d$mark$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$shared$2f$fritz$2f$fritz$2d$mark$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/shared/fritz/fritz-mark.png.mjs { IMAGE => "[project]/src/assets/images/shared/fritz/fritz-mark.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
;
;
function Brand() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        className: "brand tw:flex tw:items-center",
        href: "/#inicio",
        "aria-label": "Fritz — Higienização e impermeabilização — início",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$shared$2f$fritz$2f$fritz$2d$mark$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$shared$2f$fritz$2f$fritz$2d$mark$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                alt: "",
                width: 44,
                height: 44,
                className: "brand-logo"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/header/brand.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "brand-copy",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Fritz."
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/header/brand.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        children: "Higienização e impermeabilização"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/header/brand.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/header/brand.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/header/brand.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = Brand;
var _c;
__turbopack_context__.k.register(_c, "Brand");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/header/desktop-navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DesktopNavigation",
    ()=>DesktopNavigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/navigation.ts [app-client] (ecmascript)");
'use client';
;
;
function DesktopNavigation() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "desktop-nav tw:flex tw:items-center",
        "aria-label": "Navegação principal",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primaryNavigation"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: link.href,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "nav-link-circle",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/header/desktop-navigation.tsx",
                        lineNumber: 11,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "tw:sr-only",
                        children: link.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/header/desktop-navigation.tsx",
                        lineNumber: 12,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "nav-link-label",
                        "aria-hidden": "true",
                        children: [
                            false,
                            true
                        ].map((duplicate)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: Array.from(link.label).map((letter, index, letters)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        style: {
                                            transitionDelay: `${index / Math.max(1, letters.length - 1) * (duplicate ? 0.3 : 0.2)}s`
                                        },
                                        children: letter
                                    }, `${letter}-${index}`, false, {
                                        fileName: "[project]/src/components/layout/header/desktop-navigation.tsx",
                                        lineNumber: 17,
                                        columnNumber: 19
                                    }, this))
                            }, String(duplicate), false, {
                                fileName: "[project]/src/components/layout/header/desktop-navigation.tsx",
                                lineNumber: 15,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/header/desktop-navigation.tsx",
                        lineNumber: 13,
                        columnNumber: 11
                    }, this)
                ]
            }, link.href, true, {
                fileName: "[project]/src/components/layout/header/desktop-navigation.tsx",
                lineNumber: 10,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/layout/header/desktop-navigation.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = DesktopNavigation;
var _c;
__turbopack_context__.k.register(_c, "DesktopNavigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/header/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$brand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/header/brand.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$desktop$2d$navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/header/desktop-navigation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$mobile$2d$navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/header/mobile-navigation.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function Header() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const header = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrollState, setScrollState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        scrolled: false,
        visible: true,
        solid: false
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            let previous = Math.max(0, window.scrollY);
            let distance = 0;
            let frame = 0;
            const update = {
                "Header.useEffect.update": ()=>{
                    frame = 0;
                    const y = Math.max(0, window.scrollY);
                    const delta = y - previous;
                    previous = y;
                    if (Math.sign(delta) !== Math.sign(distance)) distance = 0;
                    distance += delta;
                    const scrolled = y > (header.current?.offsetHeight ?? 76) + 16;
                    const focused = header.current?.contains(document.activeElement) && document.activeElement?.matches(':focus-visible');
                    setScrollState({
                        "Header.useEffect.update": (current)=>{
                            let visible = current.visible;
                            if (!scrolled || menuOpen || focused) visible = true;
                            else if (distance <= -12) visible = true;
                            else if (distance >= 28) visible = false;
                            // Na primeira descida, sair do hero sem pintar a faixa de azul.
                            // Depois de revelado, manter o fundo durante o recolhimento.
                            const solid = scrolled && (visible || current.solid);
                            return current.scrolled === scrolled && current.visible === visible && current.solid === solid ? current : {
                                scrolled,
                                visible,
                                solid
                            };
                        }
                    }["Header.useEffect.update"]);
                }
            }["Header.useEffect.update"];
            const onScroll = {
                "Header.useEffect.onScroll": ()=>{
                    if (!frame) frame = requestAnimationFrame(update);
                }
            }["Header.useEffect.onScroll"];
            update();
            window.addEventListener('scroll', onScroll, {
                passive: true
            });
            return ({
                "Header.useEffect": ()=>{
                    window.removeEventListener('scroll', onScroll);
                    cancelAnimationFrame(frame);
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        menuOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "site-header-slot",
        "data-home": pathname === '/',
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            ref: header,
            className: "site-header",
            "data-home": pathname === '/',
            "data-scrolled": scrollState.scrolled,
            "data-visible": scrollState.visible,
            "data-solid": scrollState.solid,
            onFocusCapture: ()=>setScrollState((current)=>({
                        ...current,
                        visible: true,
                        solid: current.scrolled
                    })),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "header-inner tw:flex tw:items-center tw:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$brand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Brand"], {}, void 0, false, {
                        fileName: "[project]/src/components/layout/header/header.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$desktop$2d$navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DesktopNavigation"], {}, void 0, false, {
                        fileName: "[project]/src/components/layout/header/header.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$mobile$2d$navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MobileNavigation"], {
                        onOpenChange: setMenuOpen
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/header/header.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/header/header.tsx",
                lineNumber: 77,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/header/header.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/header/header.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_s(Header, "4RGd+z+VrXNuuAAu8Ha3SpM7R+s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/header/mobile-navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileNavigation",
    ()=>MobileNavigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/navigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/contact.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$social$2d$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/social-icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$navigate$2d$anchor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/navigate-anchor.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$plain$2d$click$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/plain-click.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$media$2d$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/media-queries.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function MobileNavigation({ onOpenChange }) {
    _s();
    const dialog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const toggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pendingAnchor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    function close() {
        const element = dialog.current;
        if (!element?.open || element.dataset.state === 'closing') return;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$media$2d$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefersReducedMotion"])()) {
            element.close();
            return;
        }
        element.dataset.state = 'closing';
        timer.current = setTimeout(()=>element.close(), 1000);
    }
    function open() {
        const element = dialog.current;
        if (!element || element.open) return;
        if (timer.current) clearTimeout(timer.current);
        element.dataset.state = 'opening';
        element.showModal();
        setIsOpen(true);
        onOpenChange?.(true);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MobileNavigation.useEffect": ()=>{
            if (!isOpen) return;
            const overflow = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
            return ({
                "MobileNavigation.useEffect": ()=>{
                    document.body.style.overflow = overflow;
                    if (timer.current) clearTimeout(timer.current);
                }
            })["MobileNavigation.useEffect"];
        }
    }["MobileNavigation.useEffect"], [
        isOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mobile-nav",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                ref: toggle,
                className: "menu-toggle",
                type: "button",
                "aria-label": "Abrir menu",
                "aria-haspopup": "dialog",
                "aria-controls": "site-menu",
                "aria-expanded": isOpen,
                onClick: open,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    "aria-hidden": "true",
                    className: "menu-toggle-lines",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                            fileName: "[project]/src/components/layout/header/mobile-navigation.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                            fileName: "[project]/src/components/layout/header/mobile-navigation.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                            fileName: "[project]/src/components/layout/header/mobile-navigation.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/header/mobile-navigation.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/header/mobile-navigation.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dialog", {
                ref: dialog,
                id: "site-menu",
                className: "mobile-dialog",
                "aria-labelledby": "mobile-menu-title",
                onCancel: (e)=>{
                    e.preventDefault();
                    close();
                },
                onClose: ()=>{
                    setIsOpen(false);
                    onOpenChange?.(false);
                    const hash = pendingAnchor.current;
                    pendingAnchor.current = null;
                    if (hash) requestAnimationFrame(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$navigate$2d$anchor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigateAnchor"])(hash));
                    else toggle.current?.focus({
                        preventScroll: true
                    });
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mobile-menu-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mobile-menu-top",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    id: "mobile-menu-title",
                                    children: [
                                        "Fritz.",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            className: "menu-brand-subtitle",
                                            children: "Higienização e impermeabilização"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/header/mobile-navigation.tsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/header/mobile-navigation.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Higienização e impermeabilização"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/header/mobile-navigation.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/header/mobile-navigation.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "mobile-links",
                            "aria-label": "Menu completo",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigation"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    scroll: false,
                                    onClick: (event)=>{
                                        const url = new URL(item.href, location.href);
                                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$plain$2d$click$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainClick"])(event.nativeEvent) && url.pathname === location.pathname) {
                                            event.preventDefault();
                                            pendingAnchor.current = url.hash;
                                        }
                                        close();
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mobile-link-label",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/header/mobile-navigation.tsx",
                                                lineNumber: 113,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": "true",
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/header/mobile-navigation.tsx",
                                                lineNumber: 114,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/header/mobile-navigation.tsx",
                                        lineNumber: 112,
                                        columnNumber: 17
                                    }, this)
                                }, item.href, false, {
                                    fileName: "[project]/src/components/layout/header/mobile-navigation.tsx",
                                    lineNumber: 96,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/header/mobile-navigation.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mobile-menu-contact",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["whatsappUrl"])(),
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: "Vamos conversar"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/header/mobile-navigation.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "mobile-menu-social",
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contact"].instagram,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Siga-nos"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/header/mobile-navigation.tsx",
                                            lineNumber: 129,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/header/mobile-navigation.tsx",
                                            lineNumber: 130,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$social$2d$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InstagramIcon"], {}, void 0, false, {
                                            fileName: "[project]/src/components/layout/header/mobile-navigation.tsx",
                                            lineNumber: 131,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/header/mobile-navigation.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `tel:+${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contact"].whatsappNumber}`,
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contact"].whatsappDisplay
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/header/mobile-navigation.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/header/mobile-navigation.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "close-menu",
                            "aria-label": "Fechar menu",
                            onClick: close,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "close-menu-lines",
                                "aria-hidden": "true",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                        fileName: "[project]/src/components/layout/header/mobile-navigation.tsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                        fileName: "[project]/src/components/layout/header/mobile-navigation.tsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/header/mobile-navigation.tsx",
                                lineNumber: 143,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/header/mobile-navigation.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/header/mobile-navigation.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/header/mobile-navigation.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/header/mobile-navigation.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(MobileNavigation, "aopAtUNLCdrpsxuOUZbNHTCKehI=");
_c = MobileNavigation;
var _c;
__turbopack_context__.k.register(_c, "MobileNavigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/page-transition/page-transition.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageTransition",
    ()=>PageTransition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$shared$2f$fritz$2f$fritz$2d$mark$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$shared$2f$fritz$2f$fritz$2d$mark$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/shared/fritz/fritz-mark.png.mjs { IMAGE => "[project]/src/assets/images/shared/fritz/fritz-mark.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$navigate$2d$anchor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/navigate-anchor.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$focus$2d$anchor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/focus-anchor.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$media$2d$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/media-queries.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$plain$2d$click$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/plain-click.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/routes.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
function PageTransition() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('initial');
    const pending = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const busy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const currentPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(pathname);
    const positions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const timers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PageTransition.useEffect": ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$media$2d$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefersReducedMotion"])()) {
                setPhase('idle');
                busy.current = false;
                return;
            }
            let cancelled = false;
            let frame = 0;
            let deadline;
            let finish;
            frame = requestAnimationFrame({
                "PageTransition.useEffect": ()=>{
                    frame = requestAnimationFrame({
                        "PageTransition.useEffect": async ()=>{
                            const image = document.querySelector('main img');
                            // Prepare the first view without waiting for lazy images farther down.
                            await Promise.race([
                                Promise.all([
                                    document.fonts.ready,
                                    image?.decode().catch({
                                        "PageTransition.useEffect": ()=>undefined
                                    }["PageTransition.useEffect"])
                                ]),
                                new Promise({
                                    "PageTransition.useEffect": (resolve)=>{
                                        deadline = setTimeout(resolve, 250);
                                    }
                                }["PageTransition.useEffect"])
                            ]);
                            if (cancelled) return;
                            clearTimeout(deadline);
                            const introduction = currentPath.current === '/';
                            if (introduction) {
                                if (!location.hash) window.scrollTo({
                                    top: 0,
                                    behavior: 'instant'
                                });
                                const curtain = document.querySelector('.page-transition');
                                if (curtain) curtain.dataset.entranceStart = String(performance.now() - 1440);
                                window.dispatchEvent(new Event('traco:entrance-ready'));
                            }
                            setPhase('revealing');
                            finish = setTimeout({
                                "PageTransition.useEffect": ()=>{
                                    setPhase('idle');
                                    busy.current = false;
                                }
                            }["PageTransition.useEffect"], currentPath.current === '/' ? 1000 : 540);
                        }
                    }["PageTransition.useEffect"]);
                }
            }["PageTransition.useEffect"]);
            return ({
                "PageTransition.useEffect": ()=>{
                    cancelled = true;
                    cancelAnimationFrame(frame);
                    clearTimeout(deadline);
                    clearTimeout(finish);
                }
            })["PageTransition.useEffect"];
        }
    }["PageTransition.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PageTransition.useEffect": ()=>{
            const prefetched = new Set();
            const destination = {
                "PageTransition.useEffect.destination": (link)=>{
                    if (link.target || link.hasAttribute('download')) return null;
                    const url = new URL(link.href);
                    return url.origin === location.origin && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routePaths"].has(url.pathname) && url.pathname !== location.pathname && !url.search ? url : null;
                }
            }["PageTransition.useEffect.destination"];
            const click = {
                "PageTransition.useEffect.click": (event)=>{
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$plain$2d$click$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainClick"])(event) || !(event.target instanceof Element)) return;
                    const link = event.target.closest('a[href]');
                    if (!link) return;
                    const samePage = new URL(link.href);
                    if (!link.target && !link.hasAttribute('download') && samePage.origin === location.origin && samePage.pathname === location.pathname && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routePaths"].has(samePage.pathname) && !samePage.hash && !samePage.search) {
                        event.preventDefault();
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$focus$2d$anchor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusAnchor"])('#conteudo');
                        window.scrollTo({
                            top: 0,
                            behavior: 'instant'
                        });
                        return;
                    }
                    const url = destination(link);
                    if (!url) return;
                    event.preventDefault();
                    if (busy.current) return;
                    positions.current.set(location.pathname + location.hash, window.scrollY);
                    const reduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$media$2d$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefersReducedMotion"])();
                    pending.current = {
                        url,
                        reduced
                    };
                    busy.current = true;
                    setPhase(reduced ? 'idle' : 'covering');
                    // The mobile dialog finishes closing before the route is replaced.
                    timers.current.push(setTimeout({
                        "PageTransition.useEffect.click": ()=>{
                            setPhase(reduced ? 'idle' : 'covered');
                            if (reduced) router.push(url.pathname + url.hash, {
                                scroll: false
                            });
                            else {
                                requestAnimationFrame({
                                    "PageTransition.useEffect.click": ()=>{
                                        requestAnimationFrame({
                                            "PageTransition.useEffect.click": ()=>{
                                                router.push(url.pathname + url.hash, {
                                                    scroll: false
                                                });
                                            }
                                        }["PageTransition.useEffect.click"]);
                                    }
                                }["PageTransition.useEffect.click"]);
                            }
                        }
                    }["PageTransition.useEffect.click"], reduced ? 0 : 360));
                    // A failed route request must never leave the visitor behind the curtain.
                    timers.current.push(setTimeout({
                        "PageTransition.useEffect.click": ()=>{
                            if (busy.current) location.assign(url.href);
                        }
                    }["PageTransition.useEffect.click"], 8000));
                }
            }["PageTransition.useEffect.click"];
            const prefetch = {
                "PageTransition.useEffect.prefetch": (event)=>{
                    if (!(event.target instanceof Element)) return;
                    const link = event.target.closest('a[href]');
                    const url = link && destination(link);
                    if (url && !prefetched.has(url.pathname)) {
                        prefetched.add(url.pathname);
                        router.prefetch(url.pathname);
                    }
                }
            }["PageTransition.useEffect.prefetch"];
            const back = {
                "PageTransition.useEffect.back": ()=>{
                    if (location.pathname === currentPath.current || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routePaths"].has(location.pathname)) return;
                    for (const timer of timers.current)clearTimeout(timer);
                    timers.current = [];
                    const reduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$media$2d$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefersReducedMotion"])();
                    pending.current = {
                        url: new URL(location.href),
                        reduced,
                        restoreScroll: positions.current.get(location.pathname + location.hash)
                    };
                    busy.current = true;
                    setPhase(reduced ? 'idle' : 'covered');
                }
            }["PageTransition.useEffect.back"];
            // Intercept before Next Link's delegated handler changes the pathname.
            // Otherwise the destination can render before pending is registered,
            // skipping the route effect that resets scroll under the curtain.
            document.addEventListener('click', click, true);
            document.addEventListener('pointerover', prefetch);
            document.addEventListener('focusin', prefetch);
            window.addEventListener('popstate', back);
            return ({
                "PageTransition.useEffect": ()=>{
                    document.removeEventListener('click', click, true);
                    document.removeEventListener('pointerover', prefetch);
                    document.removeEventListener('focusin', prefetch);
                    window.removeEventListener('popstate', back);
                    for (const timer of timers.current)clearTimeout(timer);
                }
            })["PageTransition.useEffect"];
        }
    }["PageTransition.useEffect"], [
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PageTransition.useEffect": ()=>{
            currentPath.current = pathname;
            const target = pending.current;
            if (!target || target.url.pathname !== pathname) return;
            let cancelled = false;
            let frame = 0;
            // Wait for the destination's section effects to register their scroll markers.
            frame = requestAnimationFrame({
                "PageTransition.useEffect": ()=>{
                    frame = requestAnimationFrame({
                        "PageTransition.useEffect": async ()=>{
                            const image = document.querySelector('main img');
                            if (image && !image.complete) {
                                await Promise.race([
                                    image.decode().catch({
                                        "PageTransition.useEffect": ()=>undefined
                                    }["PageTransition.useEffect"]),
                                    new Promise({
                                        "PageTransition.useEffect": (resolve)=>{
                                            timers.current.push(setTimeout(resolve, 900));
                                        }
                                    }["PageTransition.useEffect"])
                                ]);
                            }
                            if (cancelled || pending.current !== target) return;
                            if (target.url.hash) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$navigate$2d$anchor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigateAnchor"])(target.url.hash, false, 'instant');
                            else {
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$focus$2d$anchor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusAnchor"])('#conteudo');
                                window.scrollTo({
                                    top: target.restoreScroll ?? 0,
                                    behavior: 'instant'
                                });
                            }
                            for (const timer of timers.current)clearTimeout(timer);
                            timers.current = [];
                            pending.current = null;
                            if (target.reduced) {
                                setPhase('idle');
                                busy.current = false;
                                return;
                            }
                            setPhase('revealing');
                            timers.current.push(setTimeout({
                                "PageTransition.useEffect": ()=>{
                                    setPhase('idle');
                                    busy.current = false;
                                }
                            }["PageTransition.useEffect"], pathname === '/' ? 1000 : 540));
                        }
                    }["PageTransition.useEffect"]);
                }
            }["PageTransition.useEffect"]);
            return ({
                "PageTransition.useEffect": ()=>{
                    cancelled = true;
                    cancelAnimationFrame(frame);
                }
            })["PageTransition.useEffect"];
        }
    }["PageTransition.useEffect"], [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "page-transition tw:grid tw:place-items-center tw:bg-taupe tw:text-ink",
        "data-phase": phase,
        "data-home": pathname === '/',
        "aria-hidden": phase === 'idle',
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "page-transition-logo",
            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$shared$2f$fritz$2f$fritz$2d$mark$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$shared$2f$fritz$2f$fritz$2d$mark$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
            alt: "Fritz",
            width: 112,
            height: 112,
            priority: true
        }, void 0, false, {
            fileName: "[project]/src/components/layout/page-transition/page-transition.tsx",
            lineNumber: 250,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/page-transition/page-transition.tsx",
        lineNumber: 244,
        columnNumber: 5
    }, this);
}
_s(PageTransition, "OnVIGPAU/Js3v2oOG9fL8kuxYpI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = PageTransition;
var _c;
__turbopack_context__.k.register(_c, "PageTransition");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/floating-contact.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FloatingContact",
    ()=>FloatingContact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/contact.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function FloatingContact() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showTop, setShowTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FloatingContact.useEffect": ()=>{
            let frame = 0;
            const update = {
                "FloatingContact.useEffect.update": ()=>{
                    frame = 0;
                    const hero = document.querySelector('.hero');
                    const pastOpening = hero ? hero.getBoundingClientRect().bottom <= 0 : window.scrollY > 400;
                    const nearContact = Array.from(document.querySelectorAll('#contato, .site-footer')).some({
                        "FloatingContact.useEffect.update.nearContact": (element)=>{
                            const rect = element.getBoundingClientRect();
                            return rect.top < window.innerHeight + 32 && rect.bottom > -32;
                        }
                    }["FloatingContact.useEffect.update.nearContact"]);
                    setVisible(pastOpening && !nearContact && pathname !== '/contato');
                    setShowTop(nearContact && window.scrollY > 400);
                }
            }["FloatingContact.useEffect.update"];
            const schedule = {
                "FloatingContact.useEffect.schedule": ()=>{
                    if (!frame) frame = requestAnimationFrame(update);
                }
            }["FloatingContact.useEffect.schedule"];
            setVisible(false);
            setShowTop(false);
            schedule();
            window.addEventListener('scroll', schedule, {
                passive: true
            });
            window.addEventListener('resize', schedule);
            return ({
                "FloatingContact.useEffect": ()=>{
                    cancelAnimationFrame(frame);
                    window.removeEventListener('scroll', schedule);
                    window.removeEventListener('resize', schedule);
                }
            })["FloatingContact.useEffect"];
        }
    }["FloatingContact.useEffect"], [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "floating-contact",
                "data-visible": visible,
                tabIndex: visible ? 0 : -1,
                href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["whatsappUrl"])(),
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "Solicitar orçamento pelo WhatsApp (abre em nova aba)",
                "data-track-contact": "orçamento flutuante",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 24 24",
                        "aria-hidden": "true",
                        fill: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M20.52 3.48A11.91 11.91 0 0 0 12.05 0C5.46 0 .1 5.35 .1 11.94c0 2.1.55 4.16 1.6 5.97L0 24l6.26-1.64a11.95 11.95 0 0 0 5.78 1.47h.01C18.64 23.83 24 18.48 24 11.9a11.87 11.87 0 0 0-3.48-8.42ZM12.05 21.82a9.9 9.9 0 0 1-5.06-1.38l-.36-.21-3.71.97.99-3.62-.24-.37a9.86 9.86 0 0 1-1.52-5.27c0-5.48 4.46-9.94 9.94-9.94a9.87 9.87 0 0 1 7.04 2.91 9.87 9.87 0 0 1 2.91 7.04c0 5.48-4.46 9.87-9.99 9.87Zm5.45-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.5 1.71.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/floating-contact.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/floating-contact.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "tw:sr-only",
                        children: "Solicitar orçamento pelo WhatsApp"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/floating-contact.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/floating-contact.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BackToTop, {
                visible: showTop
            }, void 0, false, {
                fileName: "[project]/src/components/ui/floating-contact.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/floating-contact.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(FloatingContact, "YCROzbXZIaF3rsSSfMDZ7ItG2Ik=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = FloatingContact;
function BackToTop({ visible }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "floating-top",
        "data-visible": visible,
        tabIndex: visible ? 0 : -1,
        "aria-label": "Voltar ao topo",
        type: "button",
        onClick: ()=>{
            window.scrollTo({
                top: 0,
                behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
            });
            document.querySelector('#conteudo')?.focus({
                preventScroll: true
            });
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            "aria-hidden": "true",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m6 12 6-6 6 6M12 6v13"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/floating-contact.tsx",
                lineNumber: 93,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/floating-contact.tsx",
            lineNumber: 86,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/floating-contact.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_c1 = BackToTop;
var _c, _c1;
__turbopack_context__.k.register(_c, "FloatingContact");
__turbopack_context__.k.register(_c1, "BackToTop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/hover-label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HoverLabel",
    ()=>HoverLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function HoverLabel({ children, variant = 'link' }) {
    _s();
    const label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HoverLabel.useEffect": ()=>{
            const element = label.current;
            const control = element?.closest('a, button');
            if (!element || !control || !children.length) return;
            let disposed = false;
            let cleanup = {
                "HoverLabel.useEffect.cleanup": ()=>{}
            }["HoverLabel.useEffect.cleanup"];
            void __turbopack_context__.A("[project]/node_modules/gsap/index.js [app-client] (ecmascript, async loader)").then({
                "HoverLabel.useEffect": ({ gsap })=>{
                    if (disposed) return;
                    const media = gsap.matchMedia();
                    cleanup = ({
                        "HoverLabel.useEffect": ()=>media.revert()
                    })["HoverLabel.useEffect"];
                    media.add('(prefers-reduced-motion: no-preference)', {
                        "HoverLabel.useEffect": ()=>{
                            const rows = element.querySelectorAll('.hover-label-row');
                            const timeline = gsap.timeline({
                                paused: true
                            });
                            rows.forEach({
                                "HoverLabel.useEffect": (row, index)=>{
                                    timeline.to(row.children, {
                                        yPercent: -100,
                                        duration: variant === 'link' || variant === 'cta' ? 0.5 : 0.35,
                                        stagger: {
                                            amount: variant === 'link' ? index ? 0.3 : 0.2 : variant === 'cta' ? 0.6 : 0.5
                                        },
                                        ease: variant === 'link' || variant === 'cta' ? 'power2.out' : variant === 'primary' ? 'power4.inOut' : 'power3.inOut'
                                    }, 0);
                                }
                            }["HoverLabel.useEffect"]);
                            if (variant === 'primary' || variant === 'v2') {
                                timeline.to(control.querySelector('.hover-button-line'), variant === 'primary' ? {
                                    scaleX: 1.3,
                                    duration: 0.3,
                                    ease: 'power1.out'
                                } : {
                                    width: 16,
                                    duration: 0.5,
                                    ease: 'power1.out'
                                }, 0);
                                timeline.to(control.querySelectorAll('.hover-button-gap'), {
                                    width: 0,
                                    x: {
                                        "HoverLabel.useEffect": (index)=>index === 0 ? -20 : 20
                                    }["HoverLabel.useEffect"],
                                    duration: 0.5,
                                    ease: 'back.in'
                                }, 0);
                            }
                            if (variant === 'cta') {
                                timeline.to(control.querySelectorAll('.contact-button-gap'), {
                                    width: 0,
                                    x: {
                                        "HoverLabel.useEffect": (index)=>index === 0 ? -20 : 20
                                    }["HoverLabel.useEffect"],
                                    duration: 0.5,
                                    ease: 'back.in'
                                }, 0);
                            }
                            const enter = {
                                "HoverLabel.useEffect.enter": ()=>variant === 'link' ? timeline.restart() : timeline.play()
                            }["HoverLabel.useEffect.enter"];
                            const leave = {
                                "HoverLabel.useEffect.leave": ()=>{
                                    if (variant !== 'link' && !control.matches(':hover, :focus-within')) timeline.reverse();
                                }
                            }["HoverLabel.useEffect.leave"];
                            control.addEventListener('mouseenter', enter);
                            control.addEventListener('mouseleave', leave);
                            control.addEventListener('focusin', enter);
                            control.addEventListener('focusout', leave);
                            return ({
                                "HoverLabel.useEffect": ()=>{
                                    control.removeEventListener('mouseenter', enter);
                                    control.removeEventListener('mouseleave', leave);
                                    control.removeEventListener('focusin', enter);
                                    control.removeEventListener('focusout', leave);
                                }
                            })["HoverLabel.useEffect"];
                        }
                    }["HoverLabel.useEffect"]);
                }
            }["HoverLabel.useEffect"]);
            return ({
                "HoverLabel.useEffect": ()=>{
                    disposed = true;
                    cleanup();
                }
            })["HoverLabel.useEffect"];
        }
    }["HoverLabel.useEffect"], [
        variant,
        children
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            (variant === 'primary' || variant === 'v2') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hover-button-line",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/hover-label.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hover-button-gaps",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "hover-button-gap"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/hover-label.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "hover-button-gap"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/hover-label.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "hover-button-gap"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/hover-label.tsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/hover-label.tsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/hover-label.tsx",
                lineNumber: 107,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "tw:sr-only",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/hover-label.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                ref: label,
                className: `hover-label hover-label-${variant}`,
                "aria-hidden": "true",
                children: [
                    0,
                    1
                ].map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hover-label-row",
                        children: Array.from(children).map((letter, index)=>// biome-ignore lint/suspicious/noArrayIndexKey: Static ordered letters, rebuilt only when the label changes.
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hover-label-char",
                                children: letter === ' ' ? ' ' : letter
                            }, index, false, {
                                fileName: "[project]/src/components/ui/hover-label.tsx",
                                lineNumber: 126,
                                columnNumber: 15
                            }, this))
                    }, row, false, {
                        fileName: "[project]/src/components/ui/hover-label.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/hover-label.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/hover-label.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
_s(HoverLabel, "+TB2oXUNy109NFSmmUbhI0TmOfs=");
_c = HoverLabel;
var _c;
__turbopack_context__.k.register(_c, "HoverLabel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/social-icons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InstagramIcon",
    ()=>InstagramIcon,
    "WhatsAppIcon",
    ()=>WhatsAppIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
;
function WhatsAppIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        width: "30",
        height: "30",
        fill: "currentColor",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M20.52 3.48A11.9 11.9 0 0 0 12.05 0C5.46 0 .1 5.36.1 11.95c0 2.1.55 4.16 1.6 5.98L0 24l6.24-1.64a11.95 11.95 0 0 0 5.8 1.48h.01C18.64 23.84 24 18.48 24 11.9c0-3.19-1.24-6.18-3.48-8.42ZM12.05 21.82a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.71.97.99-3.62-.24-.37a9.89 9.89 0 0 1-1.52-5.26c0-5.47 4.45-9.92 9.93-9.92a9.85 9.85 0 0 1 7.01 2.91 9.85 9.85 0 0 1 2.9 7.02c0 5.47-4.45 9.92-9.96 9.92Zm5.45-7.43c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.09 4.5.71.3 1.26.48 1.69.62.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.34Z"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/social-icons.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/social-icons.tsx",
        lineNumber: 4,
        columnNumber: 5
    }, this);
}
_c = WhatsAppIcon;
function InstagramIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "instagram-icon tw:grid tw:place-items-center tw:w-[34px] tw:h-[34px] tw:shrink-0",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            width: "22",
            height: "22",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.8",
            "aria-hidden": "true",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "3",
                    y: "3",
                    width: "18",
                    height: "18",
                    rx: "5"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/social-icons.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "4"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/social-icons.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "17.5",
                    cy: "6.5",
                    r: "1",
                    fill: "currentColor",
                    stroke: "none"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/social-icons.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/social-icons.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/social-icons.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c1 = InstagramIcon;
var _c, _c1;
__turbopack_context__.k.register(_c, "WhatsAppIcon");
__turbopack_context__.k.register(_c1, "InstagramIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/config/contact.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "contact",
    ()=>contact,
    "contactFormUrl",
    ()=>contactFormUrl,
    "whatsappUrl",
    ()=>whatsappUrl
]);
const contact = {
    instagram: 'https://www.instagram.com/higienizacaofritz/',
    whatsappNumber: '5547999051278',
    whatsappDisplay: '+55 47 99905-1278'
};
function whatsappUrl(context) {
    const message = context ? 'Olá! Conheci o Fritz pelo site e gostaria de conversar sobre ' + context + '.' : 'Olá, equipe Fritz! Vim pelo site e gostaria de solicitar um orçamento para higienização ou impermeabilização. Posso enviar fotos do estofado e informar meu bairro e cidade?';
    return 'https://wa.me/' + contact.whatsappNumber + '?text=' + encodeURIComponent(message);
}
function contactFormUrl(data, intent) {
    const value = (key)=>String(data.get(key) ?? '').trim();
    const fields = [
        [
            'Nome',
            value('name')
        ],
        [
            'E-mail',
            value('email')
        ],
        [
            'Telefone',
            value('phone')
        ],
        [
            'Empresa',
            value('company')
        ],
        ...intent === 'quote' ? [
            [
                'Serviço desejado',
                value('service')
            ],
            [
                'Quantidade de peças',
                value('quantity')
            ]
        ] : [],
        [
            'Mensagem',
            value('message')
        ]
    ];
    const message = [
        intent === 'quote' ? 'Olá! Gostaria de solicitar um orçamento ao Fritz.' : 'Olá! Gostaria de conversar com o Fritz.',
        '',
        ...fields.filter(([, value])=>value).map(([label, value])=>`${label}: ${value}`)
    ].join('\n');
    return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/config/navigation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "environments",
    ()=>environments,
    "navigation",
    ()=>navigation,
    "primaryNavigation",
    ()=>primaryNavigation
]);
const primaryNavigation = [
    {
        label: 'Serviços',
        href: '/#servicos'
    },
    {
        label: 'Resultados',
        href: '/#antes-e-depois'
    },
    {
        label: 'Sobre',
        href: '/#sobre-a-fritz'
    },
    {
        label: 'Contato',
        href: '/#contato'
    }
];
const navigation = [
    {
        label: 'Início',
        href: '/#inicio'
    },
    {
        label: 'Benefícios',
        href: '/#beneficios'
    },
    {
        label: 'Serviços',
        href: '/#servicos'
    },
    {
        label: 'Como funciona',
        href: '/#processo'
    },
    {
        label: 'Antes e depois',
        href: '/#antes-e-depois'
    },
    {
        label: 'Avaliações',
        href: '/#avaliacoes'
    },
    {
        label: 'Sobre o Fritz',
        href: '/#sobre-a-fritz'
    },
    {
        label: 'Onde atendemos',
        href: '/#onde-atendemos'
    },
    {
        label: 'Perguntas frequentes',
        href: '/#duvidas'
    },
    {
        label: 'Contato',
        href: '/#contato'
    }
];
const environments = [
    {
        id: 'sofas',
        note: 'Consulte o atendimento',
        label: 'Sofás',
        href: '/#servicos'
    },
    {
        id: 'colchoes',
        note: 'Consulte o atendimento',
        label: 'Colchões',
        href: '/#servicos'
    },
    {
        id: 'cadeiras',
        note: 'Consulte o atendimento',
        label: 'Cadeiras',
        href: '/#servicos'
    },
    {
        id: 'tapetes',
        note: 'Consulte o atendimento',
        label: 'Tapetes',
        href: '/#servicos'
    },
    {
        id: 'impermeabilizacao',
        note: 'Consulte a indicação para o tecido',
        label: 'Impermeabilização',
        href: '/#servicos'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/config/routes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Rotas de página. Fonte única para o sitemap e a transição entre páginas. */ __turbopack_context__.s([
    "routePaths",
    ()=>routePaths,
    "routes",
    ()=>routes
]);
const routes = [
    {
        path: '/',
        priority: 1
    }
];
const routePaths = new Set(routes.map((route)=>route.path));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/config/tracking.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "tracking",
    ()=>tracking,
    "trackingAvailable",
    ()=>trackingAvailable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
function validId(value, pattern, name) {
    if (value && !pattern.test(value)) throw new Error(`${name}: formato inválido.`);
    return value || '';
}
const enabled = ("TURBOPACK compile-time value", "false") === 'true';
const tracking = {
    enabled,
    ga4: validId(("TURBOPACK compile-time value", ""), /^G-[A-Z0-9]+$/, 'GA4_ID'),
    ads: validId(("TURBOPACK compile-time value", ""), /^AW-\d+$/, 'GOOGLE_ADS_ID'),
    adsLabel: validId(("TURBOPACK compile-time value", ""), /^[A-Za-z0-9_-]+$/, 'GOOGLE_ADS_CONTACT_LABEL'),
    meta: validId(("TURBOPACK compile-time value", ""), /^\d+$/, 'META_PIXEL_ID'),
    privacyUrl: ("TURBOPACK compile-time value", "") || ''
};
const trackingAvailable = enabled && Boolean(tracking.ga4 || tracking.ads || tracking.meta);
if (trackingAvailable && (!tracking.privacyUrl.startsWith('https://') || !URL.canParse(tracking.privacyUrl))) //TURBOPACK unreachable
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/focus-anchor.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Move o foco de leitura sem interromper a rolagem nativa até a seção. */ __turbopack_context__.s([
    "focusAnchor",
    ()=>focusAnchor
]);
function focusAnchor(hash) {
    if (!hash.startsWith('#')) return;
    let id;
    try {
        id = decodeURIComponent(hash.slice(1));
    } catch  {
        return;
    }
    const target = document.getElementById(id);
    if (!target) return;
    if (!target.hasAttribute('tabindex')) {
        target.setAttribute('tabindex', '-1');
        target.addEventListener('blur', ()=>target.removeAttribute('tabindex'), {
            once: true
        });
    }
    target.focus({
        preventScroll: true
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/media-queries.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Consultas de mídia usadas no JavaScript. Manter em sincronia com o CSS. */ __turbopack_context__.s([
    "mediaQueries",
    ()=>mediaQueries,
    "prefersReducedMotion",
    ()=>prefersReducedMotion
]);
const mediaQueries = {
    mobile: '(max-width: 767px)',
    desktopNavigation: '(min-width: 1200px)',
    reducedMotion: '(prefers-reduced-motion: reduce)',
    pinnedMotion: '(min-width: 1024px) and (min-height: 651px) and (prefers-reduced-motion: no-preference)',
    servicesProcessMotion: '(min-width: 768px) and (prefers-reduced-motion: no-preference)'
};
function prefersReducedMotion() {
    return window.matchMedia(mediaQueries.reducedMotion).matches;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/navigate-anchor.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "navigateAnchor",
    ()=>navigateAnchor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$focus$2d$anchor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/focus-anchor.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$media$2d$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/media-queries.ts [app-client] (ecmascript)");
;
;
function navigateAnchor(hash, updateHistory = true, behavior = 'smooth') {
    let target;
    try {
        target = document.getElementById(decodeURIComponent(hash.slice(1)));
    } catch  {
        return false;
    }
    if (!hash.startsWith('#') || !target) return false;
    const mobilePosition = target.dataset.scrollMobile;
    const scrollPosition = target.dataset.scrollPosition;
    const position = scrollPosition ? document.getElementById(scrollPosition) : mobilePosition ? window.matchMedia(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$media$2d$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mediaQueries"].mobile).matches ? document.getElementById(mobilePosition) : target.closest('.environment-group')?.querySelector(':scope > .environment-position') : target;
    if (!position) return false;
    if (updateHistory && location.hash !== hash) {
        const oldURL = location.href;
        history.pushState(history.state, '', hash);
        window.dispatchEvent(new HashChangeEvent('hashchange', {
            oldURL,
            newURL: location.href
        }));
    }
    // Retira o foco do link de origem antes de calcular a posição de chegada.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$focus$2d$anchor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusAnchor"])(hash);
    const header = document.querySelector('.site-header');
    const headerHeight = header?.offsetHeight ?? 67;
    // Alinha o conteúdo, compensando o respiro que a própria seção já possui.
    const sectionPadding = Number.parseFloat(getComputedStyle(position).paddingTop) || 0;
    const top = Math.max(0, position.getBoundingClientRect().top + scrollY + sectionPadding - headerHeight - 20);
    window.scrollTo({
        top,
        behavior: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$media$2d$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefersReducedMotion"])() ? 'instant' : behavior
    });
    return true;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/plain-click.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Clique primário sem modificadores, ainda não tratado por outro listener. */ __turbopack_context__.s([
    "isPlainClick",
    ()=>isPlainClick
]);
function isPlainClick(event) {
    return !(event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_05nwo5j._.js.map