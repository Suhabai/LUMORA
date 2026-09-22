# LUMORA Phase 0E.3 — Accessibility audit

This is an evidence-based code audit, not a WCAG conformance claim.

| Area | Finding | Severity |
|---|---|---|
| Landmarks | Global layout includes banner/header, labelled primary navigation, `main`, and `footer[role=contentinfo]`. VERIFIED STATICALLY. | PASS |
| Skip navigation | A visible-on-focus skip link targets `#hero`; global `main` has that ID. VERIFIED STATICALLY. Actual keyboard destination/focus outcome is NOT VERIFIED DUE TO TOOLING. | PASS |
| Identity controls | Identity links have accessible home labels; decorative SVG marks are `aria-hidden`. VERIFIED STATICALLY. | PASS |
| Mobile menu | Trigger has accessible open/close label, `aria-expanded`, `aria-controls`; menu is a labelled modal dialog. VERIFIED STATICALLY. Focus trap, Escape handling, focus restoration, and tab order are NOT VERIFIED DUE TO TOOLING. | MINOR |
| Link semantics | Route links are Next `Link`s; home fragments are anchors. VERIFIED STATICALLY. Fragment links are functionally incorrect from internal routes. | MAJOR |
| Focus visibility | Global `:focus-visible` outline is declared. VERIFIED STATICALLY. Color contrast and visibility against every live surface are NOT VERIFIED DUE TO TOOLING. | PASS |
| Reduced motion — HeroV2 | Active homepage variant is `living-light` / `HeroV2`; its GSAP effect has no `matchMedia('(prefers-reduced-motion: reduce)')` branch. Global CSS cannot cancel a JavaScript-created GSAP timeline. VERIFIED STATICALLY. | MAJOR |
| Reduced motion — Living Core | `LivingCoreVisual` has SMIL `<animate attributeName="d" dur="14s" repeatCount="indefinite">` without an exposed reduced-motion condition. The global CSS animation rule does not stop SVG SMIL. VERIFIED STATICALLY. | MAJOR |
| Reduced motion — navigation / reveal | Navigation and `Reveal` check reduced-motion and use zero-duration/final states. Several GSAP sections likewise include branches. VERIFIED STATICALLY. Runtime coverage is NOT VERIFIED DUE TO TOOLING. | PASS |
| Images / alt | The audited `app` asset surface contains icons and an Open Graph PNG; no content `<img>` was found in the inspected shared route/layout components. Route-wide rendered image alternatives are NOT VERIFIED DUE TO TOOLING. | PASS |

Keyboard navigation, focus order, dialogs, runtime screen-reader tree, target focus after hash navigation, contrast measurement, and hover-only interaction behavior remain **NOT VERIFIED DUE TO TOOLING**.
