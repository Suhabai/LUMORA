# LUMORA Identity Freeze

## Status

**SUPERSEDED BY v2 — See LUMORA-IDENTITY-FREEZE-v2.md**

**Identity Foundation:** FROZEN (historical record)

**Classification:** A — PRODUCTION READY (superseded)

**Date:** September 18, 2026

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

- **LUMORA Wordmark** — The typographic signature
- **LUMORA M Core Micro-Mark** — The geometric symbol

Both are approved production assets.

---

## 3. Wordmark

**Master:** `lumora-wordmark-master.svg`

**Responsive Variants:**
- `lumora-wordmark-medium.svg` — Navigation/footer (24-119px)
- `lumora-wordmark-small.svg` — Compact contexts
- `lumora-wordmark-large.svg` — Hero/display contexts

**Geometry Principles:**
- M/O undercut — The M and O share a structural relationship
- O/R spatial release — The O and R create intentional breathing room
- Relational spacing — Every letter relates to its neighbors
- Authored junction behavior — Where strokes meet is deliberate
- Controlled optical correction — Geometry is refined for visual clarity

**Frozen Geometry Values:**
- Wordmark aspect ratio: 3.6:1 (viewBox 3600×1000)
- Medium variant corrections: M/O -10u, O/R +200u
- Small variant corrections: Undercut removed, O/R +150u

**Important:** No future phase may modify wordmark geometry without explicitly reopening the identity freeze.

---

## 4. M Core

**Master:** `lumora-micro-master.svg`

**Optical:** `lumora-micro-optical.svg` — Navigation/footer (20-28px)

**Small:** `lumora-micro-16.svg` — Mobile, favicon (16-24px)

**Characteristics:**
- Derived from the M letterform
- Bilateral left/right symmetry
- Top V-dip provides orientation
- Simplified geometry for small-scale clarity
- Independent from Living Core

**Not:**
- No glow
- No orbital behavior
- No pulse
- No lens/orb/reactor interpretation

---

## 5. Navigation Lockup

**Desktop (≥ 768px):**
```
M Core 24px + 8px gap + Wordmark 28px
```

**Tablet (≥ 768px):**
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

**Desktop (≥ 768px):**
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

## 9. Living Core Boundary

**Logo ≠ Living Core**

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

## 10. Brand Surface Rules

**PRIMARY (must use approved lockup):**
- Navigation
- Footer
- Browser icon
- Apple icon
- Manifest identity

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

## 11. Metadata

**Canonical Assets:**

| Context | Asset | Route |
|---------|-------|-------|
| Browser Favicon | `app/icon.svg` | `/icon.svg` |
| Apple Touch Icon | `app/apple-icon.png` | `/apple-icon.png` |
| Open Graph | `app/opengraph-image.png` | `/opengraph-image.png` |
| Manifest | `public/manifest.json` | References canonical assets |

**Status:** No legacy clock identity remains active.

---

## 12. Forbidden Legacy Patterns

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

## 13. Legacy Cleanup

**Removed Files:**
- `public/icon.svg` — Old clock identity (shadowed, never served)
- `public/apple-touch-icon.png` — Old clock PNG (shadowed, never served)

**Status:** No active dependency remains.

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
| 0C.29 | Identity freeze record |

---

## 15. Identity Freeze Rule

**FUTURE FEATURE PHASES MUST NOT ALTER:**

- Logo geometry
- Wordmark geometry
- M Core geometry
- Identity proportions
- Responsive lockup rules
- Identity motion rules
- Identity color behavior

without explicitly reopening the identity phase.

Any request to alter the above must first create a new identity review phase.

---

*This document is the canonical identity source of truth for all future LUMORA implementation phases.*
