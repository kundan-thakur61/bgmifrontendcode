module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/components/seo/Schema.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BreadcrumbSchema",
    ()=>BreadcrumbSchema,
    "FAQSchema",
    ()=>FAQSchema,
    "MatchSchema",
    ()=>MatchSchema,
    "OrganizationSchema",
    ()=>OrganizationSchema,
    "TournamentSchema",
    ()=>TournamentSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function OrganizationSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'BattleZone',
        url: 'https://battlezone.com',
        logo: 'https://battlezone.com/logo.png',
        description: "India's premier esports gaming platform for PUBG Mobile and Free Fire tournaments.",
        foundingDate: '2024',
        foundingLocation: {
            '@type': 'Place',
            name: 'Dhanbad, Jharkhand, India'
        },
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'IN',
            addressLocality: 'Dhanbad',
            addressRegion: 'JH'
        },
        contact: {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            email: 'support@battlezone.com',
            url: 'https://battlezone.com/contact'
        },
        sameAs: [
            'https://twitter.com/BattleZone',
            'https://facebook.com/BattleZone',
            'https://instagram.com/BattleZone',
            'https://youtube.com/@BattleZone',
            'https://discord.gg/BattleZone'
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
            __html: JSON.stringify(schema)
        },
        suppressHydrationWarning: true
    }, void 0, false, {
        fileName: "[project]/src/components/seo/Schema.jsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
function FAQSchema({ faqs }) {
    // Use provided FAQs or default FAQs
    const defaultFAQs = [
        {
            question: 'How do I join a match on BattleZone?',
            answer: "Sign up for an account, complete KYC verification, add money to your wallet, browse available matches, and click join. You'll receive room details before the match starts."
        },
        {
            question: 'What games are available on BattleZone?',
            answer: 'BattleZone offers PUBG Mobile and Free Fire matches including solo matches, duo matches, squad matches, and special tournament formats with real money prizes.'
        },
        {
            question: 'How are match results verified?',
            answer: 'Players upload match screenshots after completion. Our anti-cheat system verifies using EXIF data analysis, duplicate image detection, and manual admin review to prevent fraud.'
        },
        {
            question: 'When can I withdraw my winnings?',
            answer: 'After KYC verification is complete and you meet the minimum withdrawal amount, withdrawals are processed within 24-48 hours via UPI or bank transfer.'
        },
        {
            question: 'Is BattleZone legal in India?',
            answer: 'Yes, BattleZone operates as a skill-based gaming platform, not gambling. All games are competitive and skill-based, compliant with Indian gaming regulations.'
        }
    ];
    const faqList = faqs || defaultFAQs;
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqList.map((faq)=>({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer
                }
            }))
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
            __html: JSON.stringify(schema)
        },
        suppressHydrationWarning: true
    }, void 0, false, {
        fileName: "[project]/src/components/seo/Schema.jsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
function BreadcrumbSchema({ items }) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index)=>({
                '@type': 'ListItem',
                position: index + 1,
                name: item.name,
                item: item.url
            }))
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
            __html: JSON.stringify(schema)
        },
        suppressHydrationWarning: true
    }, void 0, false, {
        fileName: "[project]/src/components/seo/Schema.jsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
function MatchSchema({ match }) {
    if (!match) return null;
    const slotsLeft = match.maxSlots - (match.filledSlots || match.joinedUsers?.length || 0);
    const matchId = match._id || match.id;
    const startTime = match.scheduledAt || match.startTime;
    const endTime = match.endTime || (startTime ? new Date(new Date(startTime).getTime() + 30 * 60000).toISOString() : null);
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'SportsEvent',
        name: match.title || `${match.gameType} ${match.matchType} - Prize ₹${match.prizePool}`,
        description: `Join this competitive ${match.gameType || 'BGMI'} ${match.matchType || 'match'} match. Entry fee: ₹${match.entryFee || 0}. Prize pool: ₹${match.prizePool || 0}. ${match.mode || 'Squad'} mode. Max slots: ${match.maxSlots || 100}`,
        startDate: startTime ? new Date(startTime).toISOString() : new Date().toISOString(),
        ...endTime && {
            endDate: new Date(endTime).toISOString()
        },
        eventStatus: match.status === 'live' ? 'https://schema.org/EventScheduled' : match.status === 'completed' ? 'https://schema.org/EventPostponed' : 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
        location: {
            '@type': 'VirtualLocation',
            url: 'https://battlezone.com'
        },
        offers: {
            '@type': 'Offer',
            price: match.entryFee || 0,
            priceCurrency: 'INR',
            availability: slotsLeft > 0 ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
            url: `https://battlezone.com/matches/${matchId}`
        },
        organizer: {
            '@type': 'Organization',
            name: 'BattleZone',
            url: 'https://battlezone.com'
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
            __html: JSON.stringify(schema)
        },
        suppressHydrationWarning: true
    }, void 0, false, {
        fileName: "[project]/src/components/seo/Schema.jsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
function TournamentSchema({ tournament }) {
    if (!tournament) return null;
    const tournamentId = tournament._id || tournament.id;
    const tournamentName = tournament.title || tournament.name;
    const slotsLeft = tournament.maxTeams - (tournament.registeredTeams || 0);
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'SportsEvent',
        name: tournamentName,
        description: tournament.description || `Join ${tournamentName} tournament on BattleZone. Prize pool: ₹${tournament.prizePool || 0}. Entry fee: ₹${tournament.entryFee || 0}.`,
        startDate: tournament.startAt || tournament.startDate ? new Date(tournament.startAt || tournament.startDate).toISOString() : new Date().toISOString(),
        endDate: tournament.endAt || tournament.endDate ? new Date(tournament.endAt || tournament.endDate).toISOString() : null,
        eventStatus: tournament.status === 'ongoing' ? 'https://schema.org/EventScheduled' : tournament.status === 'completed' ? 'https://schema.org/EventPostponed' : 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
        location: {
            '@type': 'VirtualLocation',
            url: 'https://battlezone.com'
        },
        offers: {
            '@type': 'Offer',
            price: tournament.entryFee || 0,
            priceCurrency: 'INR',
            availability: slotsLeft > 0 ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
            url: `https://battlezone.com/tournaments/${tournamentId}`
        },
        organizer: {
            '@type': 'Organization',
            name: 'BattleZone',
            url: 'https://battlezone.com'
        }
    };
    // Remove endDate if null
    if (!schema.endDate) {
        delete schema.endDate;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
            __html: JSON.stringify(schema)
        },
        suppressHydrationWarning: true
    }, void 0, false, {
        fileName: "[project]/src/components/seo/Schema.jsx",
        lineNumber: 204,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/seo/Analytics.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GoogleAnalytics",
    ()=>GoogleAnalytics,
    "GoogleSearchConsole",
    ()=>GoogleSearchConsole
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/script.js [app-ssr] (ecmascript)");
'use client';
;
;
function GoogleAnalytics({ gaId }) {
    if (!gaId) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                strategy: "afterInteractive",
                src: `https://www.googletagmanager.com/gtag/js?id=${gaId}`
            }, void 0, false, {
                fileName: "[project]/src/components/seo/Analytics.jsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "google-analytics",
                strategy: "afterInteractive",
                dangerouslySetInnerHTML: {
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
              page_title: document.title,
              anonymize_ip: true,
            });
          `
                }
            }, void 0, false, {
                fileName: "[project]/src/components/seo/Analytics.jsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
function GoogleSearchConsole({ verificationCode }) {
    if (!verificationCode) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
        name: "google-site-verification",
        content: verificationCode
    }, void 0, false, {
        fileName: "[project]/src/components/seo/Analytics.jsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/seo/EnhancedSchema.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArticleSchema",
    ()=>ArticleSchema,
    "HowToSchema",
    ()=>HowToSchema,
    "LocalBusinessSchema",
    ()=>LocalBusinessSchema,
    "ReviewSchema",
    ()=>ReviewSchema,
    "SoftwareApplicationSchema",
    ()=>SoftwareApplicationSchema,
    "VideoObjectSchema",
    ()=>VideoObjectSchema,
    "WebApplicationSchema",
    ()=>WebApplicationSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function WebApplicationSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'BattleZone',
        applicationCategory: 'GameApplication',
        operatingSystem: 'Android, iOS, Web',
        description: "India's premier esports platform for BGMI, PUBG Mobile, and Free Fire tournaments with real money prizes.",
        url: 'https://battlezone.com',
        browserRequirements: 'Requires JavaScript. Requires HTML5.',
        softwareVersion: '2.0.0',
        author: {
            '@type': 'Organization',
            name: 'BattleZone',
            url: 'https://battlezone.com'
        },
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'INR',
            description: 'Free to join. Entry fees start from ₹10 per match.'
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.6',
            ratingCount: '15000',
            bestRating: '5',
            worstRating: '1'
        },
        featureList: [
            'BGMI Tournaments',
            'PUBG Mobile Matches',
            'Free Fire Competitions',
            'Real Money Prizes',
            'Instant Withdrawals',
            'Anti-Cheat System',
            'KYC Verification',
            '24/7 Support'
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
            __html: JSON.stringify(schema)
        },
        suppressHydrationWarning: true
    }, void 0, false, {
        fileName: "[project]/src/components/seo/EnhancedSchema.jsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
function ArticleSchema({ article }) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.excerpt || article.description,
        image: article.image || 'https://battlezone.com/og-image.jpg',
        datePublished: article.datePublished,
        dateModified: article.dateModified || article.datePublished,
        author: {
            '@type': 'Organization',
            name: article.author || 'BattleZone Team',
            url: 'https://battlezone.com',
            logo: 'https://battlezone.com/logo.png'
        },
        publisher: {
            '@type': 'Organization',
            name: 'BattleZone',
            url: 'https://battlezone.com',
            logo: {
                '@type': 'ImageObject',
                url: 'https://battlezone.com/logo.png',
                width: '512',
                height: '512'
            }
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': article.url
        },
        articleSection: article.category || 'Gaming',
        keywords: article.keywords?.join(', ') || 'BGMI, PUBG Mobile, esports, tournaments',
        wordCount: article.wordCount || 2000,
        inLanguage: 'en-IN'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
            __html: JSON.stringify(schema)
        },
        suppressHydrationWarning: true
    }, void 0, false, {
        fileName: "[project]/src/components/seo/EnhancedSchema.jsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
function HowToSchema({ howTo }) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: howTo.name,
        description: howTo.description,
        image: howTo.image || 'https://battlezone.com/og-image.jpg',
        totalTime: howTo.totalTime || 'PT10M',
        estimatedCost: {
            '@type': 'MonetaryAmount',
            currency: 'INR',
            value: howTo.cost || '10'
        },
        supply: howTo.supplies || [
            {
                '@type': 'HowToSupply',
                name: 'Smartphone with BGMI/PUBG/Free Fire installed'
            },
            {
                '@type': 'HowToSupply',
                name: 'Internet connection'
            },
            {
                '@type': 'HowToSupply',
                name: 'Valid ID for KYC (Aadhaar/PAN)'
            }
        ],
        tool: howTo.tools || [
            {
                '@type': 'HowToTool',
                name: 'BattleZone account'
            },
            {
                '@type': 'HowToTool',
                name: 'UPI payment app'
            }
        ],
        step: howTo.steps.map((step, index)=>({
                '@type': 'HowToStep',
                position: index + 1,
                name: step.name,
                text: step.text,
                image: step.image,
                url: step.url
            }))
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
            __html: JSON.stringify(schema)
        },
        suppressHydrationWarning: true
    }, void 0, false, {
        fileName: "[project]/src/components/seo/EnhancedSchema.jsx",
        lineNumber: 136,
        columnNumber: 5
    }, this);
}
function LocalBusinessSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': 'https://battlezone.com/#business',
        name: 'BattleZone',
        image: 'https://battlezone.com/logo.png',
        description: "India's fastest-growing esports platform for BGMI, PUBG Mobile, and Free Fire tournaments.",
        url: 'https://battlezone.com',
        telephone: '+91-XXXXXXXXXX',
        email: 'support@battlezone.com',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Dhanbad',
            addressLocality: 'Dhanbad',
            addressRegion: 'Jharkhand',
            postalCode: '826001',
            addressCountry: 'IN'
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: '23.7957',
            longitude: '86.4304'
        },
        areaServed: {
            '@type': 'Country',
            name: 'India'
        },
        priceRange: '₹10 - ₹1000',
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ],
            opens: '00:00',
            closes: '23:59'
        },
        sameAs: [
            'https://twitter.com/BattleZone',
            'https://facebook.com/BattleZone',
            'https://instagram.com/BattleZone',
            'https://youtube.com/@BattleZone'
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
            __html: JSON.stringify(schema)
        },
        suppressHydrationWarning: true
    }, void 0, false, {
        fileName: "[project]/src/components/seo/EnhancedSchema.jsx",
        lineNumber: 188,
        columnNumber: 5
    }, this);
}
function SoftwareApplicationSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'BattleZone - BGMI & PUBG Tournament App',
        applicationCategory: 'GameApplication',
        operatingSystem: 'Android 6.0+, iOS 12.0+',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'INR'
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.6',
            ratingCount: '15000',
            bestRating: '5',
            worstRating: '1'
        },
        screenshot: 'https://battlezone.com/app-screenshot.jpg',
        downloadUrl: 'https://battlezone.com/download',
        featureList: 'BGMI Tournaments, PUBG Mobile Matches, Free Fire, Real Money Prizes, Instant Withdrawals',
        releaseNotes: 'Latest version with improved anti-cheat and faster withdrawals'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
            __html: JSON.stringify(schema)
        },
        suppressHydrationWarning: true
    }, void 0, false, {
        fileName: "[project]/src/components/seo/EnhancedSchema.jsx",
        lineNumber: 222,
        columnNumber: 5
    }, this);
}
function VideoObjectSchema({ video }) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: video.name,
        description: video.description,
        thumbnailUrl: video.thumbnailUrl,
        uploadDate: video.uploadDate,
        duration: video.duration,
        contentUrl: video.contentUrl,
        embedUrl: video.embedUrl,
        publisher: {
            '@type': 'Organization',
            name: 'BattleZone',
            logo: {
                '@type': 'ImageObject',
                url: 'https://battlezone.com/logo.png'
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
            __html: JSON.stringify(schema)
        },
        suppressHydrationWarning: true
    }, void 0, false, {
        fileName: "[project]/src/components/seo/EnhancedSchema.jsx",
        lineNumber: 252,
        columnNumber: 5
    }, this);
}
function ReviewSchema({ reviews }) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'BattleZone Esports Platform',
        description: 'Play BGMI, PUBG Mobile & Free Fire tournaments for real money',
        brand: {
            '@type': 'Brand',
            name: 'BattleZone'
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.6',
            reviewCount: reviews?.length || 500,
            bestRating: '5',
            worstRating: '1'
        },
        review: reviews?.slice(0, 5).map((review)=>({
                '@type': 'Review',
                author: {
                    '@type': 'Person',
                    name: review.author
                },
                reviewRating: {
                    '@type': 'Rating',
                    ratingValue: review.rating,
                    bestRating: '5',
                    worstRating: '1'
                },
                reviewBody: review.text,
                datePublished: review.date
            }))
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
            __html: JSON.stringify(schema)
        },
        suppressHydrationWarning: true
    }, void 0, false, {
        fileName: "[project]/src/components/seo/EnhancedSchema.jsx",
        lineNumber: 295,
        columnNumber: 5
    }, this);
}
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/src/lib/api.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "api",
    ()=>api,
    "clearCache",
    ()=>clearCache,
    "getMatchMessages",
    ()=>getMatchMessages,
    "getMatches",
    ()=>getMatches,
    "getMe",
    ()=>getMe,
    "getTournamentMessages",
    ()=>getTournamentMessages,
    "logout",
    ()=>logout,
    "sendMessage",
    ()=>sendMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:5000/api") || 'http://localhost:5000/api';
const axiosInstance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: API_BASE_URL,
    withCredentials: true
});
// Add request interceptor to include Authorization header
axiosInstance.interceptors.request.use((config)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return config;
}, (error)=>Promise.reject(error));
// Auth API
const getMe = async ()=>{
    const response = await axiosInstance.get('/auth/me');
    return response.data;
};
const logout = async ()=>{
    const response = await axiosInstance.post('/auth/logout');
    return response.data;
};
// Simple in-memory cache for reducing API calls
const cache = new Map();
const CACHE_TTL = 60000; // 1 minute cache
const getCachedData = (key)=>{
    const cached = cache.get(key);
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
        return cached.data;
    }
    cache.delete(key);
    return null;
};
const setCachedData = (key, data)=>{
    cache.set(key, {
        data,
        timestamp: Date.now()
    });
};
// Chat API
const sendMessage = async (matchId, tournamentId, content)=>{
    const response = await axiosInstance.post('/chat/send', {
        matchId,
        tournamentId,
        content
    });
    return response.data;
};
const getMatchMessages = async (matchId)=>{
    const response = await axiosInstance.get(`/chat/match/${matchId}`);
    return response.data;
};
const getTournamentMessages = async (tournamentId)=>{
    const response = await axiosInstance.get(`/chat/tournament/${tournamentId}`);
    return response.data;
};
// Match API with caching
const getMatches = async (filters = {})=>{
    const params = new URLSearchParams();
    Object.keys(filters).forEach((key)=>{
        if (filters[key]) {
            params.append(key, filters[key]);
        }
    });
    const cacheKey = `matches:${params.toString()}`;
    const cached = getCachedData(cacheKey);
    if (cached) {
        return cached;
    }
    const response = await axiosInstance.get(`/matches?${params.toString()}`);
    setCachedData(cacheKey, response.data);
    return response.data;
};
// Clear cache utility (useful after mutations)
const clearCache = ()=>{
    cache.clear();
};
// API object with all methods for admin and other pages
const api = {
    // Expose axios methods for direct use
    get: (url, config)=>axiosInstance.get(url, config),
    post: (url, data, config)=>axiosInstance.post(url, data, config),
    put: (url, data, config)=>axiosInstance.put(url, data, config),
    delete: (url, config)=>axiosInstance.delete(url, config),
    // Admin Stats
    getAdminStats: async ()=>{
        const response = await axiosInstance.get('/admin/stats');
        return response.data;
    },
    // Admin Users
    getAdminUsers: async (params = {})=>{
        const query = new URLSearchParams(params).toString();
        const response = await axiosInstance.get(`/admin/users?${query}`);
        return response.data;
    },
    banUser: async (userId, reason)=>{
        const response = await axiosInstance.post(`/admin/users/${userId}/ban`, {
            reason
        });
        return response.data;
    },
    unbanUser: async (userId)=>{
        const response = await axiosInstance.post(`/admin/users/${userId}/unban`);
        return response.data;
    },
    // Change user role
    changeUserRole: async (userId, role)=>{
        const response = await axiosInstance.post(`/admin/users/${userId}/role`, {
            role
        });
        return response.data;
    },
    // Adjust user wallet
    adjustUserWallet: async (userId, amount, type, reason)=>{
        const response = await axiosInstance.post(`/admin/users/${userId}/wallet`, {
            amount,
            type,
            reason
        });
        return response.data;
    },
    // Reports
    getRevenueReport: async (params = {})=>{
        const query = new URLSearchParams(params).toString();
        const response = await axiosInstance.get(`/admin/reports/revenue?${query}`);
        return response.data;
    },
    getUsersReport: async ()=>{
        const response = await axiosInstance.get('/admin/reports/users');
        return response.data;
    },
    getMatchesReport: async ()=>{
        const response = await axiosInstance.get('/admin/reports/matches');
        return response.data;
    },
    getReferralsReport: async ()=>{
        const response = await axiosInstance.get('/admin/reports/referrals');
        return response.data;
    },
    // Disputes (Admin)
    getDisputeStats: async ()=>{
        const response = await axiosInstance.get('/admin/disputes/stats');
        return response.data;
    },
    assignDispute: async (disputeId, adminId)=>{
        const response = await axiosInstance.post(`/disputes/${disputeId}/assign`, {
            adminId
        });
        return response.data;
    },
    addDisputeNote: async (disputeId, note)=>{
        const response = await axiosInstance.post(`/disputes/${disputeId}/note`, {
            note
        });
        return response.data;
    },
    addDisputeMessage: async (disputeId, message)=>{
        const response = await axiosInstance.post(`/disputes/${disputeId}/message`, {
            message
        });
        return response.data;
    },
    // Broadcast Notifications
    broadcastNotification: async (data)=>{
        const response = await axiosInstance.post('/admin/broadcast', data);
        return response.data;
    },
    // Matches
    getMatch: async (matchId)=>{
        const response = await axiosInstance.get(`/matches/${matchId}`);
        return response.data;
    },
    getMyMatchStatus: async (matchId)=>{
        const response = await axiosInstance.get(`/matches/${matchId}/my-status`);
        return response.data;
    },
    joinMatch: async (matchId, inGameId, inGameName)=>{
        const response = await axiosInstance.post(`/matches/${matchId}/join`, {
            inGameId,
            inGameName
        });
        clearCache();
        return response.data;
    },
    leaveMatch: async (matchId)=>{
        const response = await axiosInstance.post(`/matches/${matchId}/leave`);
        clearCache();
        return response.data;
    },
    getRoomCredentials: async (matchId)=>{
        const response = await axiosInstance.get(`/matches/${matchId}/room`);
        return response.data;
    },
    cancelUserMatch: async (matchId)=>{
        const response = await axiosInstance.post(`/matches/${matchId}/user-cancel`);
        clearCache();
        return response.data;
    },
    createMatch: async (data)=>{
        const response = await axiosInstance.post('/matches', data);
        clearCache();
        return response.data;
    },
    // User create their own challenge match
    createUserMatch: async (data)=>{
        const response = await axiosInstance.post('/matches/user-create', data);
        clearCache();
        return response.data;
    },
    updateMatch: async (matchId, data)=>{
        const response = await axiosInstance.put(`/matches/${matchId}`, data);
        clearCache();
        return response.data;
    },
    // User update their own challenge match
    updateUserMatch: async (matchId, data)=>{
        const response = await axiosInstance.put(`/matches/${matchId}/user-update`, data);
        clearCache();
        return response.data;
    },
    deleteMatch: async (matchId)=>{
        const response = await axiosInstance.delete(`/matches/${matchId}`);
        clearCache();
        return response.data;
    },
    startMatch: async (matchId)=>{
        const response = await axiosInstance.post(`/matches/${matchId}/start`);
        clearCache();
        return response.data;
    },
    completeMatch: async (matchId)=>{
        const response = await axiosInstance.post(`/matches/${matchId}/complete`);
        clearCache();
        return response.data;
    },
    cancelMatch: async (matchId, reason)=>{
        const response = await axiosInstance.post(`/matches/${matchId}/cancel`, {
            reason
        });
        clearCache();
        return response.data;
    },
    setRoomCredentials: async (matchId, roomId, password)=>{
        const response = await axiosInstance.post(`/matches/${matchId}/room-credentials`, {
            roomId,
            password
        });
        clearCache();
        return response.data;
    },
    declareWinners: async (matchId, winners)=>{
        const response = await axiosInstance.post(`/matches/${matchId}/declare-winners`, {
            winners
        });
        clearCache();
        return response.data;
    },
    // Tournaments
    getTournaments: async (params = {})=>{
        const query = new URLSearchParams(params).toString();
        const response = await axiosInstance.get(`/tournaments?${query}`);
        return response.data;
    },
    getTournament: async (tournamentId)=>{
        const response = await axiosInstance.get(`/tournaments/${tournamentId}`);
        return response.data;
    },
    registerForTournament: async (tournamentId, data)=>{
        const response = await axiosInstance.post(`/tournaments/${tournamentId}/register`, data);
        return response.data;
    },
    leaveTournament: async (tournamentId)=>{
        const response = await axiosInstance.post(`/tournaments/${tournamentId}/leave`);
        return response.data;
    },
    getMyTournamentStatus: async (tournamentId)=>{
        const response = await axiosInstance.get(`/tournaments/${tournamentId}/my-status`);
        return response.data;
    },
    createTournament: async (data)=>{
        const response = await axiosInstance.post('/tournaments', data);
        return response.data;
    },
    updateTournament: async (tournamentId, data)=>{
        const response = await axiosInstance.put(`/tournaments/${tournamentId}`, data);
        return response.data;
    },
    deleteTournament: async (tournamentId)=>{
        const response = await axiosInstance.delete(`/tournaments/${tournamentId}`);
        return response.data;
    },
    completeTournament: async (tournamentId)=>{
        const response = await axiosInstance.post(`/tournaments/${tournamentId}/complete`);
        return response.data;
    },
    cancelTournament: async (tournamentId, reason)=>{
        const response = await axiosInstance.post(`/tournaments/${tournamentId}/cancel`, {
            reason
        });
        return response.data;
    },
    // Withdrawals
    getPendingWithdrawals: async ()=>{
        const response = await axiosInstance.get('/withdrawals/pending');
        return response.data;
    },
    approveWithdrawal: async (withdrawalId)=>{
        const response = await axiosInstance.post(`/withdrawals/${withdrawalId}/approve`);
        return response.data;
    },
    rejectWithdrawal: async (withdrawalId, reason)=>{
        const response = await axiosInstance.post(`/withdrawals/${withdrawalId}/reject`, {
            reason
        });
        return response.data;
    },
    // KYC
    getPendingKYC: async ()=>{
        const response = await axiosInstance.get('/kyc/pending');
        return response.data;
    },
    approveKYC: async (kycId)=>{
        const response = await axiosInstance.post(`/kyc/${kycId}/approve`);
        return response.data;
    },
    rejectKYC: async (kycId, reason)=>{
        const response = await axiosInstance.post(`/kyc/${kycId}/reject`, {
            reason
        });
        return response.data;
    },
    // Tickets
    getAllTickets: async (params = {})=>{
        const query = new URLSearchParams(params).toString();
        const response = await axiosInstance.get(`/tickets/admin/all?${query}`);
        return response.data;
    },
    resolveTicket: async (ticketId, resolution)=>{
        const response = await axiosInstance.post(`/tickets/${ticketId}/resolve`, {
            resolution
        });
        return response.data;
    },
    addTicketMessage: async (ticketId, message)=>{
        const response = await axiosInstance.post(`/tickets/${ticketId}/message`, {
            message
        });
        return response.data;
    },
    // Announcements
    getAnnouncements: async ()=>{
        const response = await axiosInstance.get('/admin/announcements');
        return response.data;
    },
    createAnnouncement: async (data)=>{
        const response = await axiosInstance.post('/admin/announcements', data);
        return response.data;
    },
    deleteAnnouncement: async (announcementId)=>{
        const response = await axiosInstance.delete(`/admin/announcements/${announcementId}`);
        return response.data;
    },
    // Wallet
    getTransactions: async ()=>{
        const response = await axiosInstance.get('/wallet/transactions');
        return response.data;
    },
    getWithdrawals: async ()=>{
        const response = await axiosInstance.get('/withdrawals');
        return response.data;
    },
    requestWithdrawal: async (amount, method, details)=>{
        const data = {
            amount,
            method,
            ...details
        };
        const response = await axiosInstance.post('/withdrawals', data);
        return response.data;
    },
    // Leaderboard
    getLeaderboard: async (type = 'global', params = {})=>{
        const query = new URLSearchParams(params).toString();
        const endpoint = type === 'global' ? '/leaderboard' : `/leaderboard/${type}`;
        const response = await axiosInstance.get(`${endpoint}?${query}`);
        return response.data;
    },
    getTopEarners: async (limit = 10)=>{
        const response = await axiosInstance.get(`/leaderboard/top-earners?limit=${limit}`);
        return response.data;
    },
    // Match History
    getMatchHistory: async (params = {})=>{
        const query = new URLSearchParams(params).toString();
        const response = await axiosInstance.get(`/users/match-history?${query}`);
        return response.data;
    },
    // Referrals
    getReferralStats: async ()=>{
        const response = await axiosInstance.get('/users/referral-stats');
        return response.data;
    },
    getReferredUsers: async (params = {})=>{
        const query = new URLSearchParams(params).toString();
        const response = await axiosInstance.get(`/users/referrals?${query}`);
        return response.data;
    },
    // Profile
    updateProfile: async (data)=>{
        const response = await axiosInstance.put('/users/profile', data);
        return response.data;
    },
    // Achievements
    getAchievements: async ()=>{
        const response = await axiosInstance.get('/achievements');
        return response.data;
    },
    getUserAchievements: async ()=>{
        const response = await axiosInstance.get('/achievements/my');
        return response.data;
    },
    // Teams
    getMyTeams: async ()=>{
        const response = await axiosInstance.get('/teams/my');
        return response.data;
    },
    getTeam: async (teamId)=>{
        const response = await axiosInstance.get(`/teams/${teamId}`);
        return response.data;
    },
    createTeam: async (data)=>{
        const response = await axiosInstance.post('/teams', data);
        return response.data;
    },
    inviteToTeam: async (teamId, userId)=>{
        const response = await axiosInstance.post(`/teams/${teamId}/invite`, {
            userId
        });
        return response.data;
    },
    acceptTeamInvite: async (teamId)=>{
        const response = await axiosInstance.post(`/teams/${teamId}/accept`);
        return response.data;
    },
    declineTeamInvite: async (teamId)=>{
        const response = await axiosInstance.post(`/teams/${teamId}/decline`);
        return response.data;
    },
    leaveTeam: async (teamId)=>{
        const response = await axiosInstance.post(`/teams/${teamId}/leave`);
        return response.data;
    },
    removeTeamMember: async (teamId, userId)=>{
        const response = await axiosInstance.post(`/teams/${teamId}/remove`, {
            userId
        });
        return response.data;
    },
    disbandTeam: async (teamId)=>{
        const response = await axiosInstance.delete(`/teams/${teamId}`);
        return response.data;
    },
    getTeamInvites: async ()=>{
        const response = await axiosInstance.get('/teams/invites');
        return response.data;
    },
    // Disputes
    createDispute: async (matchId, data)=>{
        const response = await axiosInstance.post(`/disputes`, {
            matchId,
            ...data
        });
        return response.data;
    },
    getMyDisputes: async (params = {})=>{
        const query = new URLSearchParams(params).toString();
        const response = await axiosInstance.get(`/disputes/my?${query}`);
        return response.data;
    },
    getDispute: async (disputeId)=>{
        const response = await axiosInstance.get(`/disputes/${disputeId}`);
        return response.data;
    },
    // Admin disputes
    getAllDisputes: async (params = {})=>{
        const query = new URLSearchParams(params).toString();
        const response = await axiosInstance.get(`/disputes/admin/all?${query}`);
        return response.data;
    },
    resolveDispute: async (disputeId, data)=>{
        const response = await axiosInstance.post(`/disputes/${disputeId}/resolve`, data);
        return response.data;
    },
    // Global Search
    search: async (query, type = 'all')=>{
        const response = await axiosInstance.get(`/search?q=${encodeURIComponent(query)}&type=${type}`);
        return response.data;
    },
    // Push Notifications
    subscribeToPush: async (subscription)=>{
        const response = await axiosInstance.post('/users/push-subscribe', {
            subscription
        });
        return response.data;
    },
    unsubscribeFromPush: async ()=>{
        const response = await axiosInstance.post('/users/push-unsubscribe');
        return response.data;
    },
    // User search (for team invites)
    searchUsers: async (query)=>{
        const response = await axiosInstance.get(`/users/search?q=${encodeURIComponent(query)}`);
        return response.data;
    }
};
;
}),
"[project]/src/context/AuthContext.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "default",
    ()=>__TURBOPACK__default__export__,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({});
function AuthProvider({ children }) {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        checkAuth();
    }, []);
    const checkAuth = async ()=>{
        try {
            const token = localStorage.getItem('token');
            if (token) {
                const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMe"])();
                setUser(data.user);
            }
        } catch (err) {
            localStorage.removeItem('token');
            setUser(null);
        } finally{
            setLoading(false);
        }
    };
    // Send OTP to phone
    const sendOtp = async (phone)=>{
        try {
            setError(null);
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].sendOtp(phone);
            return data;
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };
    // Verify OTP and login
    const verifyOtp = async (phone, otp)=>{
        try {
            setError(null);
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].verifyOtp(phone, otp);
            if (data.token) {
                localStorage.setItem('token', data.token);
                setUser(data.user);
            }
            return data;
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };
    // Register new user (after OTP verification)
    const register = async (userData)=>{
        try {
            setError(null);
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].register(userData);
            if (data.token) {
                localStorage.setItem('token', data.token);
                setUser(data.user);
            }
            return data;
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };
    const logout = async ()=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logout"])();
        } catch (err) {
        // Ignore logout errors
        } finally{
            localStorage.removeItem('token');
            setUser(null);
        }
    };
    const updateUser = (userData)=>{
        setUser((prev)=>({
                ...prev,
                ...userData
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            loading,
            error,
            sendOtp,
            verifyOtp,
            register,
            logout,
            updateUser,
            checkAuth,
            isAuthenticated: !!user
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/AuthContext.jsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
const useAuth = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
const __TURBOPACK__default__export__ = AuthContext;
}),
"[project]/src/components/seo/PerformanceMonitor.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PerformanceMonitor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function PerformanceMonitor() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (("TURBOPACK compile-time value", "undefined") !== 'undefined' && 'performance' in window) //TURBOPACK unreachable
        ;
    }, []);
    return null;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__44335462._.js.map