# LUMORA Launch Readiness — 0F.1A

## Status

COMPLETE — visual and technical approval recorded.

Phase 0F.1A closes technical public-launch gaps without reopening frozen
identity, motion, sonic, Living Core, or loading systems.

## Reduced-Motion Closure

`SignatureMoment` remains the approved normal-motion HANDOFF. Under
`prefers-reduced-motion`, it now resolves directly to a stable destination:

- no ScrollTrigger timeline
- no scroll-linked interpolation
- no depth-plane travel or parallax
- no animated spatial handoff
- the settled atmosphere remains visible as the semantic result

This implements the Motion Grammar requirement that HANDOFF preserve spatial
meaning through an instant final state.

## Failure-State Architecture

- `app/not-found.tsx` provides a restrained, semantic LUMORA recovery surface
  for unmatched paths, with a direct route home.
- `app/error.tsx` is the minimum client error boundary required for route
  recovery. It provides retry and home actions without exposing error details.
- `app/global-error.tsx` handles root-layout failures. It contains its own
  document structure and self-contained styling, as required by Next.js.

All failure states are static, silent, keyboard reachable, and use no identity
animation or new identity variation.

## Indexability Decision

`/docs` and `/system` are intentional public-facing LUMORA experiences:

- `/docs` is presented as “The Record,” an editorial account of the system.
- `/system` is presented as a spatial exhibition of LUMORA's rules and
  intention.

Their public metadata, robots allowance, and sitemap entries remain unchanged.

## Supported Runtime

Production is defined as Node `>=20.9.0 <21`.

This matches Next.js 16.3.5's Node requirement and the repository CI baseline
on Node 20. Existing commands remain `npm run build` and `npm start`.

## Performance Baseline

The intentional runtime surface was reviewed:

| Surface | Result |
| --- | --- |
| Lenis | Its recursive animation frame is now cancelled during cleanup. |
| GlobalCore | Its continuous frame loop no longer starts for reduced-motion users. |
| ScrollAtmosphere | Uses a single scroll-scheduled frame and removes its listener on cleanup. |
| GSAP / ScrollTrigger | Production components use scoped GSAP contexts with cleanup; SignatureMoment is now excluded for reduced motion. |
| ExperienceLoader | Timers/listener cleanup and DOM removal are retained by Loading Freeze v1. |
| Assets | The active navigation/footer identity uses the approved WebP mark; no new assets were added. |

No normal-motion cinematic system was removed. CSP was not added: a strict
policy needs deployment-aware validation for Next.js generated/inline behavior
and is deferred rather than introduced unsafely.

## Release Smoke-Test Matrix

| Area | Expected result |
| --- | --- |
| Public routes | `/`, `/about`, `/contact`, `/work`, and all three work routes render directly. |
| Not found | An invalid path receives the branded recovery surface and a home link. |
| Navigation | Desktop/mobile navigation, history, home hash links, Escape, keyboard focus, and overflow are checked in the release suite. |
| Loading | Fresh entries show the frozen loader; client navigation does not replay it. |
| Reduced motion | Loader, SignatureMoment, and global motion paths resolve to static or final states. |
| Error recovery | The route boundary offers retry and home recovery; global error provides retry without error-detail disclosure. |

## Remaining 0F.1B Requirements

The following are explicitly deferred:

- real production domain
- canonical/domain alignment
- hosting configuration
- actual contact send/receive verification
- final deployed smoke test
- production field performance and monitoring, if applicable
- deployment-safe Content Security Policy validation
