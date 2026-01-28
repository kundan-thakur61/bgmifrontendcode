module.exports = [
"[project]/src/app/tournaments/[id]/layout.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TournamentLayout,
    "generateMetadata",
    ()=>generateMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/seo.js [app-rsc] (ecmascript)");
;
async function generateMetadata({ params }) {
    const { id } = await params;
    // Fetch tournament data for metadata
    const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:5000/api") || 'http://localhost:5000/api';
    try {
        const response = await fetch(`${API_BASE_URL}/tournaments/${id}`, {
            next: {
                revalidate: 60
            }
        });
        if (!response.ok) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateMetadata"])({
                title: 'Tournament Details',
                description: 'View tournament details on BattleZone',
                url: `/tournaments/${id}`
            });
        }
        const data = await response.json();
        const tournament = data.tournament;
        if (!tournament) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateMetadata"])({
                title: 'Tournament Details',
                description: 'View tournament details on BattleZone',
                url: `/tournaments/${id}`
            });
        }
        const title = `${tournament.title || tournament.name} - Register Now | BattleZone`;
        const description = `Join ${tournament.title || tournament.name} tournament on BattleZone. Prize Pool: ₹${tournament.prizePool}, Entry: ₹${tournament.entryFee}. ${tournament.mode} ${tournament.format} format. Register now!`;
        const keywords = [
            tournament.title || tournament.name,
            'BGMI tournament',
            'Free Fire tournament',
            'esports tournament',
            `${tournament.mode} tournament`,
            'real money gaming',
            'competitive gaming'
        ].filter(Boolean).join(', ');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateMetadata"])({
            title,
            description,
            keywords,
            url: `/tournaments/${id}`,
            image: tournament.banner?.url || '/og-tournaments.jpg',
            type: 'website'
        });
    } catch (error) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateMetadata"])({
            title: 'Tournament Details',
            description: 'View tournament details on BattleZone',
            url: `/tournaments/${id}`
        });
    }
}
function TournamentLayout({ children }) {
    return children;
}
}),
];

//# sourceMappingURL=src_app_tournaments_%5Bid%5D_layout_jsx_b6a4324c._.js.map