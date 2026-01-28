module.exports=[20916,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"ReadonlyURLSearchParams",{enumerable:!0,get:function(){return e}});class d extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class e extends URLSearchParams{append(){throw new d}delete(){throw new d}set(){throw new d}sort(){throw new d}}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},21170,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"RedirectStatusCode",{enumerable:!0,get:function(){return e}});var d,e=((d={})[d.SeeOther=303]="SeeOther",d[d.TemporaryRedirect=307]="TemporaryRedirect",d[d.PermanentRedirect=308]="PermanentRedirect",d);("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},28859,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d,e={REDIRECT_ERROR_CODE:function(){return h},RedirectType:function(){return i},isRedirectError:function(){return j}};for(var f in e)Object.defineProperty(c,f,{enumerable:!0,get:e[f]});let g=a.r(21170),h="NEXT_REDIRECT";var i=((d={}).push="push",d.replace="replace",d);function j(a){if("object"!=typeof a||null===a||!("digest"in a)||"string"!=typeof a.digest)return!1;let b=a.digest.split(";"),[c,d]=b,e=b.slice(2,-2).join(";"),f=Number(b.at(-2));return c===h&&("replace"===d||"push"===d)&&"string"==typeof e&&!isNaN(f)&&f in g.RedirectStatusCode}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},44868,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={getRedirectError:function(){return i},getRedirectStatusCodeFromError:function(){return n},getRedirectTypeFromError:function(){return m},getURLFromRedirectError:function(){return l},permanentRedirect:function(){return k},redirect:function(){return j}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(21170),g=a.r(28859),h=a.r(20635).actionAsyncStorage;function i(a,b,c=f.RedirectStatusCode.TemporaryRedirect){let d=Object.defineProperty(Error(g.REDIRECT_ERROR_CODE),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return d.digest=`${g.REDIRECT_ERROR_CODE};${b};${a};${c};`,d}function j(a,b){throw i(a,b??=h?.getStore()?.isAction?g.RedirectType.push:g.RedirectType.replace,f.RedirectStatusCode.TemporaryRedirect)}function k(a,b=g.RedirectType.replace){throw i(a,b,f.RedirectStatusCode.PermanentRedirect)}function l(a){return(0,g.isRedirectError)(a)?a.digest.split(";").slice(2,-2).join(";"):null}function m(a){if(!(0,g.isRedirectError)(a))throw Object.defineProperty(Error("Not a redirect error"),"__NEXT_ERROR_CODE",{value:"E260",enumerable:!1,configurable:!0});return a.digest.split(";",2)[1]}function n(a){if(!(0,g.isRedirectError)(a))throw Object.defineProperty(Error("Not a redirect error"),"__NEXT_ERROR_CODE",{value:"E260",enumerable:!1,configurable:!0});return Number(a.digest.split(";").at(-2))}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},89798,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={HTTPAccessErrorStatus:function(){return f},HTTP_ERROR_FALLBACK_ERROR_CODE:function(){return h},getAccessFallbackErrorTypeByStatus:function(){return k},getAccessFallbackHTTPStatus:function(){return j},isHTTPAccessFallbackError:function(){return i}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f={NOT_FOUND:404,FORBIDDEN:403,UNAUTHORIZED:401},g=new Set(Object.values(f)),h="NEXT_HTTP_ERROR_FALLBACK";function i(a){if("object"!=typeof a||null===a||!("digest"in a)||"string"!=typeof a.digest)return!1;let[b,c]=a.digest.split(";");return b===h&&g.has(Number(c))}function j(a){return Number(a.digest.split(";")[1])}function k(a){switch(a){case 401:return"unauthorized";case 403:return"forbidden";case 404:return"not-found";default:return}}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},16155,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"notFound",{enumerable:!0,get:function(){return f}});let d=a.r(89798),e=`${d.HTTP_ERROR_FALLBACK_ERROR_CODE};404`;function f(){let a=Object.defineProperty(Error(e),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});throw a.digest=e,a}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},34557,(a,b,c)=>{"use strict";function d(){throw Object.defineProperty(Error("`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled."),"__NEXT_ERROR_CODE",{value:"E488",enumerable:!1,configurable:!0})}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"forbidden",{enumerable:!0,get:function(){return d}}),a.r(89798).HTTP_ERROR_FALLBACK_ERROR_CODE,("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},93845,(a,b,c)=>{"use strict";function d(){throw Object.defineProperty(Error("`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled."),"__NEXT_ERROR_CODE",{value:"E411",enumerable:!1,configurable:!0})}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"unauthorized",{enumerable:!0,get:function(){return d}}),a.r(89798).HTTP_ERROR_FALLBACK_ERROR_CODE,("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},13091,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={isHangingPromiseRejectionError:function(){return f},makeDevtoolsIOAwarePromise:function(){return l},makeHangingPromise:function(){return j}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});function f(a){return"object"==typeof a&&null!==a&&"digest"in a&&a.digest===g}let g="HANGING_PROMISE_REJECTION";class h extends Error{constructor(a,b){super(`During prerendering, ${b} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${b} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context. This occurred at route "${a}".`),this.route=a,this.expression=b,this.digest=g}}let i=new WeakMap;function j(a,b,c){if(a.aborted)return Promise.reject(new h(b,c));{let d=new Promise((d,e)=>{let f=e.bind(null,new h(b,c)),g=i.get(a);if(g)g.push(f);else{let b=[f];i.set(a,b),a.addEventListener("abort",()=>{for(let a=0;a<b.length;a++)b[a]()},{once:!0})}});return d.catch(k),d}}function k(){}function l(a,b,c){return b.stagedRendering?b.stagedRendering.delayUntilStage(c,void 0,a):new Promise(b=>{setTimeout(()=>{b(a)},0)})}},73808,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"isPostpone",{enumerable:!0,get:function(){return e}});let d=Symbol.for("react.postpone");function e(a){return"object"==typeof a&&null!==a&&a.$$typeof===d}},49640,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={BailoutToCSRError:function(){return g},isBailoutToCSRError:function(){return h}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f="BAILOUT_TO_CLIENT_SIDE_RENDERING";class g extends Error{constructor(a){super(`Bail out to client-side rendering: ${a}`),this.reason=a,this.digest=f}}function h(a){return"object"==typeof a&&null!==a&&"digest"in a&&a.digest===f}},1567,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"isNextRouterError",{enumerable:!0,get:function(){return f}});let d=a.r(89798),e=a.r(28859);function f(a){return(0,e.isRedirectError)(a)||(0,d.isHTTPAccessFallbackError)(a)}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},96556,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={DynamicServerError:function(){return g},isDynamicServerError:function(){return h}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f="DYNAMIC_SERVER_USAGE";class g extends Error{constructor(a){super(`Dynamic server usage: ${a}`),this.description=a,this.digest=f}}function h(a){return"object"==typeof a&&null!==a&&"digest"in a&&"string"==typeof a.digest&&a.digest===f}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},60312,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={StaticGenBailoutError:function(){return g},isStaticGenBailoutError:function(){return h}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f="NEXT_STATIC_GEN_BAILOUT";class g extends Error{constructor(...a){super(...a),this.code=f}}function h(a){return"object"==typeof a&&null!==a&&"code"in a&&a.code===f}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},17491,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={METADATA_BOUNDARY_NAME:function(){return f},OUTLET_BOUNDARY_NAME:function(){return h},ROOT_LAYOUT_BOUNDARY_NAME:function(){return i},VIEWPORT_BOUNDARY_NAME:function(){return g}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f="__next_metadata_boundary__",g="__next_viewport_boundary__",h="__next_outlet_boundary__",i="__next_root_layout_boundary__"},61933,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={atLeastOneTask:function(){return h},scheduleImmediate:function(){return g},scheduleOnNextTick:function(){return f},waitAtLeastOneReactRenderTask:function(){return i}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a=>{Promise.resolve().then(()=>{process.nextTick(a)})},g=a=>{setImmediate(a)};function h(){return new Promise(a=>g(a))}function i(){return new Promise(a=>setImmediate(a))}},50640,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"InvariantError",{enumerable:!0,get:function(){return d}});class d extends Error{constructor(a,b){super(`Invariant: ${a.endsWith(".")?a:a+"."} This is a bug in Next.js.`,b),this.name="InvariantError"}}},60384,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d,e,f={Postpone:function(){return B},PreludeState:function(){return $},abortAndThrowOnSynchronousRequestDataAccess:function(){return A},abortOnSynchronousPlatformIOAccess:function(){return z},accessedDynamicData:function(){return J},annotateDynamicAccess:function(){return O},consumeDynamicAccess:function(){return K},createDynamicTrackingState:function(){return s},createDynamicValidationState:function(){return t},createHangingInputAbortSignal:function(){return N},createRenderInBrowserAbortSignal:function(){return M},delayUntilRuntimeStage:function(){return ac},formatDynamicAPIAccesses:function(){return L},getFirstDynamicReason:function(){return u},getStaticShellDisallowedDynamicReasons:function(){return ab},isDynamicPostpone:function(){return E},isPrerenderInterruptedError:function(){return I},logDisallowedDynamicError:function(){return _},markCurrentScopeAsDynamic:function(){return v},postponeWithTracking:function(){return C},throwIfDisallowedDynamic:function(){return aa},throwToInterruptStaticGeneration:function(){return w},trackAllowedDynamicAccess:function(){return W},trackDynamicDataInDynamicRender:function(){return x},trackDynamicHoleInRuntimeShell:function(){return X},trackDynamicHoleInStaticShell:function(){return Y},useDynamicRouteParams:function(){return P},useDynamicSearchParams:function(){return Q}};for(var g in f)Object.defineProperty(c,g,{enumerable:!0,get:f[g]});let h=(d=a.r(717))&&d.__esModule?d:{default:d},i=a.r(96556),j=a.r(60312),k=a.r(32319),l=a.r(56704),m=a.r(13091),n=a.r(17491),o=a.r(61933),p=a.r(49640),q=a.r(50640),r="function"==typeof h.default.unstable_postpone;function s(a){return{isDebugDynamicAccesses:a,dynamicAccesses:[],syncDynamicErrorWithStack:null}}function t(){return{hasSuspenseAboveBody:!1,hasDynamicMetadata:!1,dynamicMetadata:null,hasDynamicViewport:!1,hasAllowedDynamic:!1,dynamicErrors:[]}}function u(a){var b;return null==(b=a.dynamicAccesses[0])?void 0:b.expression}function v(a,b,c){if(b)switch(b.type){case"cache":case"unstable-cache":case"private-cache":return}if(!a.forceDynamic&&!a.forceStatic){if(a.dynamicShouldError)throw Object.defineProperty(new j.StaticGenBailoutError(`Route ${a.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${c}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`),"__NEXT_ERROR_CODE",{value:"E553",enumerable:!1,configurable:!0});if(b)switch(b.type){case"prerender-ppr":return C(a.route,c,b.dynamicTracking);case"prerender-legacy":b.revalidate=0;let d=Object.defineProperty(new i.DynamicServerError(`Route ${a.route} couldn't be rendered statically because it used ${c}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`),"__NEXT_ERROR_CODE",{value:"E550",enumerable:!1,configurable:!0});throw a.dynamicUsageDescription=c,a.dynamicUsageStack=d.stack,d}}}function w(a,b,c){let d=Object.defineProperty(new i.DynamicServerError(`Route ${b.route} couldn't be rendered statically because it used \`${a}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`),"__NEXT_ERROR_CODE",{value:"E558",enumerable:!1,configurable:!0});throw c.revalidate=0,b.dynamicUsageDescription=a,b.dynamicUsageStack=d.stack,d}function x(a){switch(a.type){case"cache":case"unstable-cache":case"private-cache":return}}function y(a,b,c){let d=H(`Route ${a} needs to bail out of prerendering at this point because it used ${b}.`);c.controller.abort(d);let e=c.dynamicTracking;e&&e.dynamicAccesses.push({stack:e.isDebugDynamicAccesses?Error().stack:void 0,expression:b})}function z(a,b,c,d){let e=d.dynamicTracking;y(a,b,d),e&&null===e.syncDynamicErrorWithStack&&(e.syncDynamicErrorWithStack=c)}function A(a,b,c,d){if(!1===d.controller.signal.aborted){y(a,b,d);let e=d.dynamicTracking;e&&null===e.syncDynamicErrorWithStack&&(e.syncDynamicErrorWithStack=c)}throw H(`Route ${a} needs to bail out of prerendering at this point because it used ${b}.`)}function B({reason:a,route:b}){let c=k.workUnitAsyncStorage.getStore();C(b,a,c&&"prerender-ppr"===c.type?c.dynamicTracking:null)}function C(a,b,c){(function(){if(!r)throw Object.defineProperty(Error("Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js"),"__NEXT_ERROR_CODE",{value:"E224",enumerable:!1,configurable:!0})})(),c&&c.dynamicAccesses.push({stack:c.isDebugDynamicAccesses?Error().stack:void 0,expression:b}),h.default.unstable_postpone(D(a,b))}function D(a,b){return`Route ${a} needs to bail out of prerendering at this point because it used ${b}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`}function E(a){return"object"==typeof a&&null!==a&&"string"==typeof a.message&&F(a.message)}function F(a){return a.includes("needs to bail out of prerendering at this point because it used")&&a.includes("Learn more: https://nextjs.org/docs/messages/ppr-caught-error")}if(!1===F(D("%%%","^^^")))throw Object.defineProperty(Error("Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js"),"__NEXT_ERROR_CODE",{value:"E296",enumerable:!1,configurable:!0});let G="NEXT_PRERENDER_INTERRUPTED";function H(a){let b=Object.defineProperty(Error(a),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return b.digest=G,b}function I(a){return"object"==typeof a&&null!==a&&a.digest===G&&"name"in a&&"message"in a&&a instanceof Error}function J(a){return a.length>0}function K(a,b){return a.dynamicAccesses.push(...b.dynamicAccesses),a.dynamicAccesses}function L(a){return a.filter(a=>"string"==typeof a.stack&&a.stack.length>0).map(({expression:a,stack:b})=>(b=b.split("\n").slice(4).filter(a=>!(a.includes("node_modules/next/")||a.includes(" (<anonymous>)")||a.includes(" (node:"))).join("\n"),`Dynamic API Usage Debug - ${a}:
${b}`))}function M(){let a=new AbortController;return a.abort(Object.defineProperty(new p.BailoutToCSRError("Render in Browser"),"__NEXT_ERROR_CODE",{value:"E721",enumerable:!1,configurable:!0})),a.signal}function N(a){switch(a.type){case"prerender":case"prerender-runtime":let b=new AbortController;if(a.cacheSignal)a.cacheSignal.inputReady().then(()=>{b.abort()});else{let c=(0,k.getRuntimeStagePromise)(a);c?c.then(()=>(0,o.scheduleOnNextTick)(()=>b.abort())):(0,o.scheduleOnNextTick)(()=>b.abort())}return b.signal;case"prerender-client":case"prerender-ppr":case"prerender-legacy":case"request":case"cache":case"private-cache":case"unstable-cache":return}}function O(a,b){let c=b.dynamicTracking;c&&c.dynamicAccesses.push({stack:c.isDebugDynamicAccesses?Error().stack:void 0,expression:a})}function P(a){let b=l.workAsyncStorage.getStore(),c=k.workUnitAsyncStorage.getStore();if(b&&c)switch(c.type){case"prerender-client":case"prerender":{let d=c.fallbackRouteParams;d&&d.size>0&&h.default.use((0,m.makeHangingPromise)(c.renderSignal,b.route,a));break}case"prerender-ppr":{let d=c.fallbackRouteParams;if(d&&d.size>0)return C(b.route,a,c.dynamicTracking);break}case"prerender-runtime":throw Object.defineProperty(new q.InvariantError(`\`${a}\` was called during a runtime prerender. Next.js should be preventing ${a} from being included in server components statically, but did not in this case.`),"__NEXT_ERROR_CODE",{value:"E771",enumerable:!1,configurable:!0});case"cache":case"private-cache":throw Object.defineProperty(new q.InvariantError(`\`${a}\` was called inside a cache scope. Next.js should be preventing ${a} from being included in server components statically, but did not in this case.`),"__NEXT_ERROR_CODE",{value:"E745",enumerable:!1,configurable:!0})}}function Q(a){let b=l.workAsyncStorage.getStore(),c=k.workUnitAsyncStorage.getStore();if(b)switch(!c&&(0,k.throwForMissingRequestStore)(a),c.type){case"prerender-client":h.default.use((0,m.makeHangingPromise)(c.renderSignal,b.route,a));break;case"prerender-legacy":case"prerender-ppr":if(b.forceStatic)return;throw Object.defineProperty(new p.BailoutToCSRError(a),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});case"prerender":case"prerender-runtime":throw Object.defineProperty(new q.InvariantError(`\`${a}\` was called from a Server Component. Next.js should be preventing ${a} from being included in server components statically, but did not in this case.`),"__NEXT_ERROR_CODE",{value:"E795",enumerable:!1,configurable:!0});case"cache":case"unstable-cache":case"private-cache":throw Object.defineProperty(new q.InvariantError(`\`${a}\` was called inside a cache scope. Next.js should be preventing ${a} from being included in server components statically, but did not in this case.`),"__NEXT_ERROR_CODE",{value:"E745",enumerable:!1,configurable:!0});case"request":return}}let R=/\n\s+at Suspense \(<anonymous>\)/,S=RegExp(`\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at ${n.ROOT_LAYOUT_BOUNDARY_NAME} \\([^\\n]*\\)`),T=RegExp(`\\n\\s+at ${n.METADATA_BOUNDARY_NAME}[\\n\\s]`),U=RegExp(`\\n\\s+at ${n.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`),V=RegExp(`\\n\\s+at ${n.OUTLET_BOUNDARY_NAME}[\\n\\s]`);function W(a,b,c,d){if(!V.test(b)){if(T.test(b)){c.hasDynamicMetadata=!0;return}if(U.test(b)){c.hasDynamicViewport=!0;return}if(S.test(b)){c.hasAllowedDynamic=!0,c.hasSuspenseAboveBody=!0;return}else if(R.test(b)){c.hasAllowedDynamic=!0;return}else{if(d.syncDynamicErrorWithStack)return void c.dynamicErrors.push(d.syncDynamicErrorWithStack);let e=Z(`Route "${a.route}": Uncached data was accessed outside of <Suspense>. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`,b);return void c.dynamicErrors.push(e)}}}function X(a,b,c,d){if(!V.test(b)){if(T.test(b)){c.dynamicMetadata=Z(`Route "${a.route}": Uncached data or \`connection()\` was accessed inside \`generateMetadata\`. Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`,b);return}if(U.test(b)){let d=Z(`Route "${a.route}": Uncached data or \`connection()\` was accessed inside \`generateViewport\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`,b);c.dynamicErrors.push(d);return}if(S.test(b)){c.hasAllowedDynamic=!0,c.hasSuspenseAboveBody=!0;return}else if(R.test(b)){c.hasAllowedDynamic=!0;return}else{if(d.syncDynamicErrorWithStack)return void c.dynamicErrors.push(d.syncDynamicErrorWithStack);let e=Z(`Route "${a.route}": Uncached data or \`connection()\` was accessed outside of \`<Suspense>\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`,b);return void c.dynamicErrors.push(e)}}}function Y(a,b,c,d){if(!V.test(b)){if(T.test(b)){c.dynamicMetadata=Z(`Route "${a.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed inside \`generateMetadata\` or you have file-based metadata such as icons that depend on dynamic params segments. Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`,b);return}if(U.test(b)){let d=Z(`Route "${a.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed inside \`generateViewport\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`,b);c.dynamicErrors.push(d);return}if(S.test(b)){c.hasAllowedDynamic=!0,c.hasSuspenseAboveBody=!0;return}else if(R.test(b)){c.hasAllowedDynamic=!0;return}else{if(d.syncDynamicErrorWithStack)return void c.dynamicErrors.push(d.syncDynamicErrorWithStack);let e=Z(`Route "${a.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed outside of \`<Suspense>\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`,b);return void c.dynamicErrors.push(e)}}}function Z(a,b){let c=Object.defineProperty(Error(a),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return c.stack=c.name+": "+a+b,c}var $=((e={})[e.Full=0]="Full",e[e.Empty=1]="Empty",e[e.Errored=2]="Errored",e);function _(a,b){console.error(b),a.dev||(a.hasReadableErrorStacks?console.error(`To get a more detailed stack trace and pinpoint the issue, start the app in development mode by running \`next dev\`, then open "${a.route}" in your browser to investigate the error.`):console.error(`To get a more detailed stack trace and pinpoint the issue, try one of the following:
  - Start the app in development mode by running \`next dev\`, then open "${a.route}" in your browser to investigate the error.
  - Rerun the production build with \`next build --debug-prerender\` to generate better stack traces.`))}function aa(a,b,c,d){if(d.syncDynamicErrorWithStack)throw _(a,d.syncDynamicErrorWithStack),new j.StaticGenBailoutError;if(0!==b){if(c.hasSuspenseAboveBody)return;let d=c.dynamicErrors;if(d.length>0){for(let b=0;b<d.length;b++)_(a,d[b]);throw new j.StaticGenBailoutError}if(c.hasDynamicViewport)throw console.error(`Route "${a.route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) without explicitly allowing fully dynamic rendering. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`),new j.StaticGenBailoutError;if(1===b)throw console.error(`Route "${a.route}" did not produce a static shell and Next.js was unable to determine a reason. This is a bug in Next.js.`),new j.StaticGenBailoutError}else if(!1===c.hasAllowedDynamic&&c.hasDynamicMetadata)throw console.error(`Route "${a.route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) when the rest of the route does not. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`),new j.StaticGenBailoutError}function ab(a,b,c){if(c.hasSuspenseAboveBody)return[];if(0!==b){let d=c.dynamicErrors;if(d.length>0)return d;if(1===b)return[Object.defineProperty(new q.InvariantError(`Route "${a.route}" did not produce a static shell and Next.js was unable to determine a reason.`),"__NEXT_ERROR_CODE",{value:"E936",enumerable:!1,configurable:!0})]}else if(!1===c.hasAllowedDynamic&&0===c.dynamicErrors.length&&c.dynamicMetadata)return[c.dynamicMetadata];return[]}function ac(a,b){return a.runtimeStagePromise?a.runtimeStagePromise.then(()=>b):b}},94783,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"unstable_rethrow",{enumerable:!0,get:function(){return function a(b){if((0,g.isNextRouterError)(b)||(0,f.isBailoutToCSRError)(b)||(0,i.isDynamicServerError)(b)||(0,h.isDynamicPostpone)(b)||(0,e.isPostpone)(b)||(0,d.isHangingPromiseRejectionError)(b)||(0,h.isPrerenderInterruptedError)(b))throw b;b instanceof Error&&"cause"in b&&a(b.cause)}}});let d=a.r(13091),e=a.r(73808),f=a.r(49640),g=a.r(1567),h=a.r(60384),i=a.r(96556);("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},60968,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"unstable_rethrow",{enumerable:!0,get:function(){return d}});let d=a.r(94783).unstable_rethrow;("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},73727,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={ReadonlyURLSearchParams:function(){return f.ReadonlyURLSearchParams},RedirectType:function(){return h.RedirectType},forbidden:function(){return j.forbidden},notFound:function(){return i.notFound},permanentRedirect:function(){return g.permanentRedirect},redirect:function(){return g.redirect},unauthorized:function(){return k.unauthorized},unstable_isUnrecognizedActionError:function(){return m},unstable_rethrow:function(){return l.unstable_rethrow}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(20916),g=a.r(44868),h=a.r(28859),i=a.r(16155),j=a.r(34557),k=a.r(93845),l=a.r(60968);function m(){throw Object.defineProperty(Error("`unstable_isUnrecognizedActionError` can only be used on the client."),"__NEXT_ERROR_CODE",{value:"E776",enumerable:!1,configurable:!0})}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},17546,a=>{"use strict";var b=a.i(7997),c=a.i(95936),d=a.i(73727);a.i(17115);var e=a.i(22365),f=a.i(31796);let g={"pubg-mobile-tips-for-beginners":{title:"10 Essential PUBG Mobile Tips for Beginners",excerpt:"Master the basics of PUBG Mobile with these essential tips.",category:"Tips & Tricks",date:"2025-12-28",readTime:"5 min read",author:"BattleZone Team",content:`
# 10 Essential PUBG Mobile Tips for Beginners

Starting your journey in PUBG Mobile can be overwhelming. Here are 10 essential tips to help you get started and improve your gameplay.

## 1. Choose Your Landing Spot Wisely

As a beginner, avoid hot drops like Pochinki, School, or Military Base. Instead, land at medium-loot areas like:
- Gatka
- Shelter
- Farm
- Mylta

These locations have decent loot and fewer enemies, giving you time to gear up.

## 2. Master the Basic Controls

Spend time in Training Mode to understand:
- Movement mechanics
- Aiming and shooting
- Switching weapons
- Using throwables
- Prone and crouch positions

## 3. Prioritize Your Loot

Always look for these items first:
- **Level 2/3 Helmet** - Protects against headshots
- **Level 2/3 Vest** - Reduces body damage
- **AR or SMG** - Your primary weapon
- **First Aid Kits** - Health regeneration
- **Ammunition** - At least 150 rounds per weapon

## 4. Use Headphones

Audio is crucial in PUBG Mobile. With headphones, you can:
- Hear footsteps and determine direction
- Detect vehicle sounds from far away
- Hear gunshots and estimate distance
- Identify enemy reloading sounds

## 5. Stay in the Safe Zone

Always keep an eye on the map and timer. Moving early to the safe zone gives you:
- Better positioning
- Time to loot on the way
- Avoid getting caught in the blue zone

## 6. Learn to Use Cover Effectively

Never run in open fields. Always:
- Move from cover to cover
- Use trees, rocks, and buildings
- Peek and shoot, don't stand exposed
- Use vehicles as temporary cover

## 7. Communication is Key

In squad matches:
- Use the quick chat options
- Mark enemy locations on the map
- Share resources with teammates
- Coordinate pushes and retreats

## 8. Adjust Your Sensitivity Settings

Default settings might not work for everyone. Experiment with:
- Camera sensitivity for different scopes
- ADS (Aim Down Sight) sensitivity
- Gyroscope settings if you use it

## 9. Practice Different Weapons

Each weapon has unique characteristics:
- **M416** - Versatile, low recoil
- **AKM** - High damage, higher recoil
- **UMP** - Good for close range
- **AWM** - Best sniper, one-shot kill

## 10. Watch and Learn

Watch professional players and streamers to learn:
- Positioning strategies
- When to push and when to retreat
- Spray patterns and recoil control
- Game sense and decision making

---

Remember, improvement takes time. Focus on one tip at a time and gradually incorporate them into your gameplay. Good luck on your PUBG Mobile journey!
    `},"best-landing-spots-erangel":{title:"Best Landing Spots in Erangel 2025",excerpt:"Discover the top landing spots in Erangel for high-tier loot.",category:"Strategy",date:"2025-12-25",readTime:"7 min read",author:"BattleZone Team",content:`
# Best Landing Spots in Erangel 2025

Erangel remains the most popular map in PUBG Mobile. Here's our comprehensive guide to the best landing spots.

## Hot Drops (High Risk, High Reward)

### 1. Pochinki
- Central location
- High-tier loot
- Multiple buildings
- Expect heavy combat

### 2. Military Base
- Best loot on the map
- Strategic position
- Difficult to escape
- Recommended for experienced players

## Medium-Risk Locations

### 3. Georgopol
- Split into containers and city
- Good vehicle spawns
- Moderate player count
- Great for squads

### 4. Rozhok
- Central positioning
- Underground bunker nearby
- Good rotation options
- Medium loot quality

## Safe Landing Spots

### 5. Lipovka
- Often overlooked
- Decent loot for solo/duo
- Easy rotation to circle
- Low player density

### 6. Mylta
- Coastal town
- Boat spawns available
- Quiet but has enough loot
- Good for beginners

Choose your landing spot based on your playstyle and skill level. Good luck!
    `},"free-fire-character-guide":{title:"Free Fire Character Guide: Best Characters for Ranked",excerpt:"Complete guide to Free Fire characters.",category:"Guides",date:"2025-12-22",readTime:"8 min read",author:"BattleZone Team",content:`
# Free Fire Character Guide

Choosing the right character can significantly impact your performance in Free Fire ranked matches.

## Top Tier Characters

### 1. Alok (Drop the Beat)
Creates a 5m aura that increases movement speed and recovers HP.
- **Best for:** Aggressive players
- **Synergy:** Works well with any playstyle

### 2. K (Master of All)
Dual-mode ability for EP recovery and conversion.
- **Best for:** Sustained fights
- **Synergy:** Great for squad play

### 3. Skyler (Riptide Rhythm)
Unleashes a sonic wave that damages Gloo Walls.
- **Best for:** Breaking enemy defenses
- **Synergy:** Combine with aggressive teammates

## Support Characters

### 4. Moco (Hacker's Eye)
Tags enemies hit by your shots.
- **Best for:** Team intel
- **Synergy:** Snipers and scouts

### 5. Dimitri (Healing Heartbeat)
Creates a healing zone for you and allies.
- **Best for:** Squad survival
- **Synergy:** Defensive plays

Build your character combination based on your team composition and playstyle!
    `},"how-to-improve-aim-mobile":{title:"How to Improve Your Aim in Mobile Gaming",excerpt:"Professional tips to improve your aim and reflexes.",category:"Tips & Tricks",date:"2025-12-20",readTime:"6 min read",author:"BattleZone Team",content:`
# How to Improve Your Aim in Mobile Gaming

Aiming is the most fundamental skill in mobile shooters. Here's how to improve.

## Sensitivity Settings

### Finding Your Perfect Sensitivity
1. Start with medium settings
2. Adjust camera sensitivity first
3. Fine-tune ADS sensitivity
4. Test in Training Mode

### Recommended Starting Points
- Camera: 150-200%
- Red Dot: 80-100%
- 2x Scope: 60-80%
- 4x Scope: 40-60%

## Practice Routines

### Daily Training (15-20 minutes)
1. **5 min** - Moving target practice
2. **5 min** - Spray control on walls
3. **5 min** - Quick scope practice
4. **5 min** - Close-range tracking

## Hand Positioning

### Claw vs Thumbs
- **Thumbs:** Easier to learn, less control
- **3-Finger Claw:** Better movement + aim
- **4-Finger Claw:** Full control, steep learning curve

## Additional Tips
- Keep your device clean
- Use a stable grip
- Stay relaxed, don't tense up
- Take breaks to avoid fatigue

Consistency is key - practice every day!
    `},"esports-career-india":{title:"Building an Esports Career in India",excerpt:"Guide to pursuing a professional esports career in India.",category:"Esports",date:"2025-12-18",readTime:"10 min read",author:"BattleZone Team",content:`
# Building an Esports Career in India

The Indian esports industry is growing rapidly. Here's how to break into it.

## Getting Started

### 1. Choose Your Game
- Focus on ONE game
- Popular choices: BGMI, Free Fire, Valorant
- Master the meta and mechanics

### 2. Build Your Skills
- Play 6-8 hours daily
- Review your gameplay
- Learn from professionals
- Join scrims and customs

## Finding a Team

### Options
1. **Create your own team** with friends
2. **Join tryouts** for established organizations
3. **Get noticed** through ranked performance
4. **Participate** in open tournaments

## Tournament Path

### Beginner Level
- Local LAN events
- Online open qualifiers
- Community tournaments
- Platform like BattleZone

### Professional Level
- BGIS (Battlegrounds Mobile India Series)
- Free Fire India Championship
- Nodwin Gaming events

## Building Your Brand

### Social Media Presence
- Stream on YouTube/Facebook Gaming
- Create highlight clips
- Engage with the community
- Network with other players

## Financial Considerations

### Income Sources
- Tournament winnings
- Team salary
- Streaming revenue
- Sponsorships
- Content creation

Start small, stay consistent, and never give up!
    `},"bgmi-update-latest-features":{title:"BGMI Latest Update: New Features & Changes",excerpt:"Complete breakdown of the latest BGMI update.",category:"News",date:"2025-12-15",readTime:"4 min read",author:"BattleZone Team",content:`
# BGMI Latest Update: New Features & Changes

Here's everything new in the latest BGMI update.

## New Features

### 1. New Map: Nusa
- Smallest map in BGMI
- 32 players max
- Fast-paced gameplay
- New exclusive weapons

### 2. New Weapons
- **AC Val** - Silenced assault rifle
- **NS2000** - New shotgun
- **Tactical Crossbow** - Silent but deadly

### 3. Updated Mechanics
- Improved vaulting system
- New throwable trajectory preview
- Better water physics
- Enhanced graphics options

## Balance Changes

### Weapons
- M416: Slightly reduced damage
- AKM: Improved accuracy
- UMP45: Increased fire rate
- AWM: No changes

### Vehicles
- New sports car added
- Motorcycle handling improved
- UAZ durability increased

## Bug Fixes
- Fixed lobby crashes
- Improved matchmaking speed
- Resolved audio issues
- Better anti-cheat detection

Download the update and experience the new features!
    `}};async function h({params:a}){let{slug:b}=await a,c=g[b];return c?{title:`${c.title} | BattleZone Blog`,description:c.excerpt,openGraph:{title:c.title,description:c.excerpt,type:"article",publishedTime:c.date}}:{title:"Post Not Found | BattleZone Blog"}}async function i(){return Object.keys(g).map(a=>({slug:a}))}async function j({params:a}){let{slug:h}=await a,i=g[h];return i||(0,d.notFound)(),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(e.Navbar,{}),(0,b.jsx)("main",{className:"min-h-screen pt-20",children:(0,b.jsxs)("article",{className:"max-w-3xl mx-auto px-4 py-8",children:[(0,b.jsxs)(c.default,{href:"/blog",className:"inline-flex items-center text-dark-400 hover:text-white mb-6",children:[(0,b.jsx)("svg",{className:"w-5 h-5 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,b.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),"Back to Blog"]}),(0,b.jsxs)("header",{className:"mb-8",children:[(0,b.jsxs)("div",{className:"flex items-center gap-3 mb-4",children:[(0,b.jsx)("span",{className:"badge badge-primary",children:i.category}),(0,b.jsx)("span",{className:"text-dark-400 text-sm",children:i.readTime})]}),(0,b.jsx)("h1",{className:"text-3xl md:text-4xl font-bold font-display mb-4",children:i.title}),(0,b.jsxs)("div",{className:"flex items-center gap-4 text-dark-400",children:[(0,b.jsxs)("span",{children:["By ",i.author]}),(0,b.jsx)("span",{children:"•"}),(0,b.jsx)("time",{dateTime:i.date,children:i.date})]})]}),(0,b.jsx)("div",{className:"h-64 md:h-80 bg-gradient-to-br from-primary-600 to-gaming-purple rounded-lg mb-8 flex items-center justify-center",children:(0,b.jsx)("span",{className:"text-6xl",children:"🎮"})}),(0,b.jsx)("div",{className:"prose prose-invert prose-lg max-w-none",children:i.content.split("\n").map((a,c)=>{if(a.startsWith("# "))return(0,b.jsx)("h1",{className:"text-3xl font-bold mt-8 mb-4",children:a.slice(2)},c);if(a.startsWith("## "))return(0,b.jsx)("h2",{className:"text-2xl font-bold mt-6 mb-3",children:a.slice(3)},c);if(a.startsWith("### "))return(0,b.jsx)("h3",{className:"text-xl font-bold mt-4 mb-2",children:a.slice(4)},c);if(a.startsWith("- "))return(0,b.jsx)("li",{className:"text-dark-300 ml-4",children:a.slice(2)},c);if(a.startsWith("---"))return(0,b.jsx)("hr",{className:"border-dark-700 my-8"},c);if(""===a.trim())return(0,b.jsx)("br",{},c);let d=a.replace(/\*\*(.*?)\*\*/g,'<strong class="text-white">$1</strong>');return(0,b.jsx)("p",{className:"text-dark-300 mb-2",dangerouslySetInnerHTML:{__html:d}},c)})}),(0,b.jsxs)("div",{className:"mt-12 pt-8 border-t border-dark-700",children:[(0,b.jsx)("h3",{className:"font-bold mb-4",children:"Share this article"}),(0,b.jsxs)("div",{className:"flex gap-3",children:[(0,b.jsx)("button",{className:"btn-secondary px-4 py-2",children:"🐦 Twitter"}),(0,b.jsx)("button",{className:"btn-secondary px-4 py-2",children:"📘 Facebook"}),(0,b.jsx)("button",{className:"btn-secondary px-4 py-2",children:"📋 Copy Link"})]})]}),(0,b.jsxs)("div",{className:"mt-12",children:[(0,b.jsx)("h3",{className:"text-xl font-bold mb-6",children:"Related Articles"}),(0,b.jsx)("div",{className:"grid md:grid-cols-2 gap-4",children:Object.entries(g).filter(([a])=>a!==h).slice(0,2).map(([a,d])=>(0,b.jsxs)(c.default,{href:`/blog/${a}`,className:"card-hover p-4 group",children:[(0,b.jsx)("span",{className:"text-xs text-primary-400",children:d.category}),(0,b.jsx)("h4",{className:"font-medium mt-1 group-hover:text-primary-400 transition-colors line-clamp-2",children:d.title})]},a))})]})]})}),(0,b.jsx)(f.Footer,{})]})}a.s(["default",()=>j,"generateMetadata",()=>h,"generateStaticParams",()=>i],17546)}];

//# sourceMappingURL=_ae7ba3f1._.js.map