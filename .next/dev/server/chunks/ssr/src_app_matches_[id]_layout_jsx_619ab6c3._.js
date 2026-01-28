module.exports = [
"[project]/src/app/matches/[id]/layout.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MatchLayout,
    "generateMetadata",
    ()=>generateMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/seo.js [app-rsc] (ecmascript)");
;
async function generateMetadata({ params }) {
    const { id } = await params;
    // Fetch match data for metadata
    const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:5000/api") || 'http://localhost:5000/api';
    try {
        const response = await fetch(`${API_BASE_URL}/matches/${id}`, {
            next: {
                revalidate: 60
            }
        });
        if (!response.ok) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateMetadata"])({
                title: 'Match Details',
                description: 'View match details on BattleZone',
                url: `/matches/${id}`
            });
        }
        const data = await response.json();
        const match = data.match;
        if (!match) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateMetadata"])({
                title: 'Match Details',
                description: 'View match details on BattleZone',
                url: `/matches/${id}`
            });
        }
        const title = `${match.title} - Join Now | BattleZone`;
        const description = `Join ${match.title} on BattleZone. Entry: ₹${match.entryFee}, Prize: ₹${match.prizePool}. ${match.mode} ${match.matchType} match. ${match.gameType?.replace('_', ' ')}. Register now!`;
        const keywords = [
            match.title,
            `${match.gameType} match`,
            `${match.mode} match`,
            'BGMI tournament',
            'Free Fire tournament',
            'esports match',
            'real money gaming'
        ].filter(Boolean).join(', ');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateMetadata"])({
            title,
            description,
            keywords,
            url: `/matches/${id}`,
            image: match.banner?.url || '/og-matches.jpg',
            type: 'website'
        });
    } catch (error) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateMetadata"])({
            title: 'Match Details',
            description: 'View match details on BattleZone',
            url: `/matches/${id}`
        });
    }
}
function MatchLayout({ children }) {
    return children;
}
}),
];

//# sourceMappingURL=src_app_matches_%5Bid%5D_layout_jsx_619ab6c3._.js.map