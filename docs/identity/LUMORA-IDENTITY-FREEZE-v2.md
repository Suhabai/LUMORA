# LUMORA Identity Freeze v2

## Status

**Identity Foundation:** FROZEN

**Classification:** A — PRODUCTION READY

**SUPERSEDED BY:** LUMORA-IDENTITY-FREEZE-v3.md

**Date:** September 19, 2026

**Supersedes:** LUMORA-IDENTITY-FREEZE.md (marked SUPERSEDED BY v2)

---

## 1. Identity Thesis

LUMORA is a behavioral identity system.

Identity emerges from the relationship between:

- **Signature** — The visual mark that identifies LUMORA
- **Environment** — The spatial context that carries the experience
- **Living Core** — The experiential heartbeat that gives the world life

The logo is the signature.

The Living Core is the experiential heartbeat.

They share restraint and relational thinking, but they must never collapse into one visual object.

---

## 2. Primary Identity

Primary identity consists of:

- **LUMORA Wordmark** — The typographic signature (Direction C — Restrained Hybrid)
- **LUMORA M Core Micro-Mark** — The geometric symbol

Both are approved production assets.

---

## 3. Wordmark — Direction C (Canonical)

**Master:** `lumora-wordmark-master.svg`

**Source:** `lumora-wordmark-source.svg`

**Geometry Source:** `experiments/identity-reopen/restrained-hybrid-refinement.html`

**Decision:** Phase 0E.2 — Direction C Restrained Hybrid (user-approved)

**Responsive Variants:**
- `lumora-wordmark-large.svg` — Hero/display contexts (120px+)
- `lumora-wordmark-medium.svg` — Navigation/footer (24-119px)
- `lumora-wordmark-small.svg` — Compact contexts (24-47px)

**Color Variants:**
- `lumora-wordmark-black.svg` — Black on white
- `lumora-wordmark-white.svg` — White on black
- `lumora-wordmark-mono.svg` — Single-color applications
- `lumora-wordmark-print.svg` — Print-optimized

**Direction C Geometry:**
- Wordmark aspect ratio: 3.6:1 (viewBox 3600x1000)
- O counter rx=225 (tightened from Phase A rx=230)
- M junction y=375 (deeper than Phase A y=380)
- U bowl tightened ~10 units
- R counter tightened ~5 units
- A crossbar identical to Phase A
- M stem width: 258u (L80-L338)
- No responsive optical corrections needed — geometry is optically sound at all scales

**Geometry Differences from Phase A:**

| Element | Phase A | Direction C | Delta |
|---------|---------|-------------|-------|
| L stem width | 266u | 258u | -8u |
| U start x | 600 | 610 | +10u |
| U outer curve | Q670 | Q680 | +10u |
| U inner curve end | Q1110 | Q1105 | -5u |
| M junction y | 380 | 375 | -5u |
| M right foot | 1527 | 1524 | -3u |
| O outer rx | 230 | 225 | -5u |
| O outer ry | 310 | 305 | -5u |
| O inner rx | 196 | 191 | -5u |
| O inner ry | 266 | 261 | -5u |
| R bowl rx | 160 | 157 | -3u |
| R bowl ry | 170 | 167 | -3u |
| R inner rx | 125 | 122 | -3u |
| R inner ry | 135 | 132 | -3u |
| R bowl y | 480 | 478 | -2u |
| R inner bowl y | 445 | 442 | -3u |
| R leg end x | 2720 | 2718 | -2u |
| A crossbar x | 2990/3350 | 2994/3346 | +4u/-4u |
| A crossbar y | 530/580 | 530/580 | 0 |
| A crossbar width | 194u | 189u | -5u |

**Important:** No future phase may modify wordmark geometry without explicitly reopening the identity freeze.

---

## 4. M Core

**Master:** `lumora-micro-master.svg`

**Optical:** `lumora-micro-optical.svg` — Navigation/footer (20-28px)

**Small:** `lumora-micro-16.svg` — Mobile, favicon (16-24px)

**Geometry (UNCHANGED — FROZEN):**
- M258,50L328,50L328,950L258,950ZM664,50L734,50L734,922L656,950L664,950ZM328,50L540,411L664,50Z

**Characteristics:**
- Derived from the M letterform
- Bilateral left/right symmetry
- Top V-dip provides orientation (y=411)
- Simplified geometry for small-scale clarity
- Independent from Living Core

**M Core — Wordmark M Lineage:**
- M Core V-dip: y=411 (simplified for micro-scale)
- Wordmark M V-dip: y=375 (Direction C, deeper than Phase A y=380)
- Same structural DNA, different silhouette
- Lineage, not duplication

**Not:**
- No glow
- No orbital behavior
- No pulse
- No lens/orb/reactor interpretation

---

## 5. Navigation Lockup

**Desktop (>= 768px):**
```
M Core 24px + 8px gap + Wordmark 28px
```

**Tablet (>= 768px):**
```
M Core 24px + 8px gap + Wordmark 28px
```

**Mobile (< 768px):**
```
M Core 24px only
```

**Breakpoint:** 768px

**IMPORTANT:** 768px is a brand-lockup breakpoint only. It is NOT a global responsive breakpoint.

---

## 6. Footer Lockup

**Desktop (>= 768px):**
```
M Core 24px + 8px gap + Wordmark 28px
```

**Mobile (< 768px):**
```
M Core 24px + 8px gap + Wordmark 24px
```

**Note:** Footer mobile retains wordmark at 24px (unlike navigation which hides it).

---

## 7. Identity Color

**SVG Fill:** `var(--tx)`

Do not introduce identity-specific gradients, glows, shadows, or color shifts.

The identity mark inherits the existing text color token.

---

## 8. Motion Rules

The identity mark itself is **still**.

Do NOT apply:
- pulse
- glow
- orbital motion
- scale animation
- breathing animation
- distortion
- liquid deformation
- color shift

The Living Core carries experiential motion.

The logo does not.

---

## 9. Sonic Grammar

**Status:** FROZEN — No sound.

The identity system has no sonic component. No audio feedback, no brand sound, no sonic logo.

This is a deliberate architectural decision.

---

## 10. Living Core Boundary

**Logo != Living Core**

The Living Core must not:
- become the logo
- trigger logo animation
- define logo geometry
- inherit logo state
- be used as favicon
- replace the M Core
- appear inside the wordmark

The logo must not inherit:
- Core glow
- Core pulse
- Core orbital motion
- Core state changes

These are architecturally independent systems.

---

## 11. Brand Surface Rules

**PRIMARY (must use approved lockup):**
- Navigation
- Footer
- Browser icon
- Apple icon
- Manifest identity
- Open Graph image

**EDITORIAL (may use text):**
- Hero identity text
- About headings
- About narrative
- Contact signature

**LEGAL (must remain text):**
- Copyright
- Schema.org
- Metadata text constants

EDITORIAL text must not automatically be converted into logos.

---

## 12. Metadata

**Canonical Assets:**

| Context | Asset | Route |
|---------|-------|-------|
| Browser Favicon | `app/icon.svg` | `/icon.svg` |
| Apple Touch Icon | `app/apple-icon.png` | `/apple-icon.png` |
| Open Graph | `app/opengraph-image.png` | `/opengraph-image.png` |
| Manifest | `public/manifest.json` | References canonical assets |

**Status:** No legacy clock identity remains active. OG image updated to Direction C (Phase 0E.2).

---

## 13. Forbidden Legacy Patterns

The following are **NOT** part of the approved identity system:

- Clock icon
- Purple clock container
- Generic circular logo
- Orbital logo
- Glowing orb logo
- Aperture logo
- Lens logo
- Reactor logo
- Radial identity symbol
- Animated logo
- Living Core used as logo

---

## 14. Decision History

| Phase | Milestone |
|-------|-----------|
| 0C.13 | Identity readiness |
| 0C.14 | Master vector approval |
| 0C.18 | M Core selection |
| 0C.19 | M Core production approval |
| 0C.20 | Responsive identity asset package |
| 0C.22 | App icon integration |
| 0C.23 | OG integration |
| 0C.24 | Identity regression |
| 0C.26.1 | Responsive lockup freeze |
| 0C.26.2 | Navigation integration |
| 0C.27 | Footer integration |
| 0C.28 | Full brand surface regression |
| 0C.28.1 | Metadata cleanup |
| 0C.29 | Identity freeze record (v1) |
| 0E.2 | Direction C wordmark integration |

---

## 15. Identity Freeze Rule

**FUTURE FEATURE PHASES MUST NOT ALTER:**

- Logo geometry
- Wordmark geometry (Direction C)
- M Core geometry
- Identity proportions
- Responsive lockup rules
- Identity motion rules
- Identity color behavior

without explicitly reopening the identity phase.

Any request to alter the above must first create a new identity review phase.

---

*This document is the canonical identity source of truth for all future LUMORA implementation phases.*
*Supersedes: LUMORA-IDENTITY-FREEZE.md*
