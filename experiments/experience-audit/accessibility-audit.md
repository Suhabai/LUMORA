# LUMORA Phase 0E.3 — Accessibility audit

This is an evidence-based code audit, not a WCAG conformance claim.

| Area | Finding | Severity |
|---|---|---|
| Landmarks | Global layout includes banner/header, labelled primary navigation, `main`, and `footer[role=contentinfo]`. VERIFIED STATICALLY. | PASS |
| Skip navigation | A visible-on-focus skip link targets `#hero`; global `main` has that ID. VERIFIED STATICALLY. Actual keyboard destination/focus outcome is NOT VERIFIED DUE TO TOOLING. | PASS |
| Identity controls | Identity links have accessible home labels; decorative SVG marks are `aria-hidden`. VERIFIED STATICALLY. | PASS |
| Mobile menu | Trigger has accessible open/close label, `aria-expanded`, `aria-controls`; menu is a labelled modal dialog. VERIFIED LIVE: Enter opens it and updates `aria-expanded` to `true`. Escape did not close it (`aria-expanded` stayed `true`, dialog count stayed `1`, focus remained on the close-menu button). Focus trapping and restoration remain NOT VERIFIED. | MAJOR |
| Link semantics | Route links are Next `Link`s; home fragments are anchors. VERIFIED STATICALLY. Fragment links are functionally incorrect from internal routes. | MAJOR |
| Focus visibility | Global `:focus-visible` outline is declared. VERIFIED STATICALLY. Color contrast and visibility against every live surface are NOT VERIFIED DUE TO TOOLING. | PASS |
| Reduced motion — HeroV2 | VERIFIED LIVE: with `reducedMotion: 'reduce'`, the hero H1 changed from `opacity: 0` at 120ms to `opacity: 1` at 3420ms. HeroV2 still performs its GSAP entrance instead of presenting the meaning-preserving final state immediately. | MAJOR |
| Reduced motion — Living Core | NOT REPRODUCED in Edge: under `reducedMotion: 'reduce'`, two isolated `.core-svg` screenshots four seconds apart were byte-identical; path-length samples also did not change. The static SMIL concern remains relevant for non-Edge coverage, but is not a confirmed target-browser defect. | PASS |
| Reduced motion — navigation / reveal | Navigation and `Reveal` check reduced-motion and use zero-duration/final states. Several GSAP sections likewise include branches. VERIFIED STATICALLY. Runtime coverage is NOT VERIFIED DUE TO TOOLING. | PASS |
| Images / alt | The audited `app` asset surface contains icons and an Open Graph PNG; no content `<img>` was found in the inspected shared route/layout components. Route-wide rendered image alternatives are NOT VERIFIED DUE TO TOOLING. | PASS |

Live keyboard evidence: first Tab reaches the skip link, the next reaches the labelled LUMORA home link, and following Tabs reach navigation links with a solid focus outline. Work activates with Enter. Browser Forward and mobile Escape failures are recorded above. Full focus order, dialog focus trap/restoration, target focus after fragments, contrast measurement, and screen-reader behavior remain NOT VERIFIED.
