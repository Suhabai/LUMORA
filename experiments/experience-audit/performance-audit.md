# LUMORA Phase 0E.3 — Performance audit

No Lighthouse or dedicated profiler was used. Live Edge observation complements this code/runtime risk review but does not establish CPU or field-performance metrics.

| Area | Finding | Severity |
|---|---|---|
| Route runtime | All required routes returned successful local HTTP responses; no server response failure was observed. VERIFIED LIVE. | PASS |
| Fonts | `next/font/google` supplies Manrope and Cormorant Garamond with `display: 'swap'`. VERIFIED STATICALLY — a reasonable layout-shift mitigation. Real font timing is NOT VERIFIED DUE TO TOOLING. | PASS |
| Image payload | `app/opengraph-image.png` is ~23.8 KB; no large public raster assets were found in the inspected app/public surface. VERIFIED STATICALLY. | PASS |
| Client animation surface | Global layout mounts SmoothScroll, ScrollAtmosphere, ExperienceProvider, GlobalCore, navigation, and multiple animated home experience components. GSAP, Framer Motion, Lenis, CSS keyframes, and SMIL are all present. VERIFIED STATICALLY — this establishes scope for measurement, but does not prove a launch-impacting performance defect. | NOT VERIFIED DUE TO TOOLING — pending live profiling |
| Perpetual work | GlobalCore schedules a continuous `requestAnimationFrame` loop and multiple environment/Core CSS/SMIL animations are continuous. VERIFIED STATICALLY. Motion Grammar permits environmental motion but requires low competition and reduced-motion safety; the separately confirmed SMIL reduced-motion gap is recorded in the accessibility audit. | NOT VERIFIED DUE TO TOOLING — pending live profiling |
| Active experiment selection | Homepage statically selects `HeroV2` and `SignatureMoment` experimental variants, while importing alternatives. VERIFIED STATICALLY — launch ownership and runtime cost should be consciously validated, not assumed. | MINOR |
| Route loading | No route-level `loading.tsx` was found. VERIFIED STATICALLY. Real routes rendered successfully in Edge; transition/loading behavior is NOT VERIFIED / REQUIRES DEDICATED PROFILING, not a confirmed defect. | NOT VERIFIED |

Live Edge produced no uncaught page errors or failed requests across the audited routes. The sole console error was the expected 404 response for the intentionally nonexistent URL. Animation/hydration cost remains **NOT VERIFIED / REQUIRES DEDICATED PROFILING**; it is not a confirmed launch defect.
