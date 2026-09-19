# LUMORA Micro-Mark — Asset Specification

Phase 0C.19 — Micro-Mark Master Vector Refinement

---

## Identity

The micro-mark is the M Core — the structural essence of the LUMORA wordmark's M letterform, extracted and refined for small-scale identity use.

**DNA:** Two vertical masses + V-dip directional notch + bilateral symmetry (left-right).

The V-dip is the defining recognition feature at micro scale.

---

## Vector States

### M-MASTER — `lumora-micro-master.svg`

- Large-scale expression (64px+)
- Full structural detail preserved
- Four subpaths: left stem, left diagonal, right diagonal, right stem with undercut
- Undercut at y=922 (proportional to wordmark's -15u)
- viewBox: 0 0 1000 1000

### M-OPTICAL — `lumora-micro-optical.svg`

- Medium-scale correction (24–64px)
- Undercut preserved
- Diagonal detail simplified to single V-dip triangle
- Three subpaths: left stem, right stem with undercut, V-dip
- Cleaner rendering at smaller sizes

### M-MICRO — `lumora-micro-16.svg`

- 16px-oriented geometry
- Undercut removed for maximum clarity at micro scale
- Three subpaths: left stem, right stem, V-dip
- Purest surviving form of the identity
- **This is the production micro-mark**

---

## Color Variants

All color variants use M-MICRO geometry. Only fill color changes.

| File | Fill | Use Case |
|------|------|----------|
| `lumora-micro-black.svg` | #000000 | Light backgrounds |
| `lumora-micro-white.svg` | #ffffff | Dark backgrounds |
| `lumora-micro-mono.svg` | #333333 | Neutral single-color |

---

## Construction Geometry

### M-MICRO (Production)

viewBox: 0 0 1000 1000

| Element | Coordinates |
|---------|-------------|
| Left stem | x=240–330, y=50–950 |
| Right stem | x=670–760, y=50–950 |
| V-dip | (330,50) → (500,400) → (670,50) |

Key proportions:
- Stem width: 90u
- V-dip depth: 350u (from y=50 to y=400)
- V-dip apex: x=500 (center)
- Left stem weight: 90u
- Right stem weight: 90u (symmetric in micro; undercut in master/optical creates directional weight)

---

## Simplification Logic

| Property | M-MASTER | M-OPTICAL | M-MICRO |
|----------|----------|-----------|---------|
| Left stem | Full | Full | Full |
| Right stem | Undercut y=922 | Undercut y=922 | Aligned y=950 |
| Left diagonal | Separate subpath | Merged into V | Merged into V |
| Right diagonal | Separate subpath | Merged into V | Merged into V |
| Subpath count | 4 | 3 | 3 |

The progression removes detail only when necessary for the target scale.

---

## Target Sizes

| Size | Variant | Notes |
|------|---------|-------|
| 64px+ | M-MASTER | Full expression |
| 24–64px | M-OPTICAL | Clean rendering |
| 16–24px | M-MICRO | Essential identity |
| 12px | M-MICRO | Stress test only |

**Critical acceptance size: 16px**

---

## Clear Space

Minimum optical breathing room around the micro-mark:

| Size | Clear Space | Basis |
|------|------------|-------|
| 64px | ~8px each side | ~0.125x mark width |
| 32px | ~4px each side | ~0.125x mark width |
| 24px | ~3px each side | ~0.125x mark width |
| 16px | ~2px each side | ~0.125x mark width |

Clear space prevents the V-dip from visually merging with surrounding elements.

---

## Prohibited Use

DO NOT:

- Stretch or compress
- Skew or rotate
- Add shadow, glow, gradient
- Add outline or stroke
- Change V-dip angle
- Alter directional orientation (top notch vs bottom)
- Place inside decorative container
- Use below 12px (secondary mark required)
- Animate as default branding
- Recolor individual elements

---

## Wordmark Relationship

The micro-mark IS the M from the LUMORA wordmark. The relationship is not symbolic — it is literal. The V-dip, the two stems, and the structural weight are directly extracted from the approved wordmark geometry.

---

## File Manifest

```
experiments/logo-assets/
  lumora-micro-master.svg      — Large-scale expression
  lumora-micro-optical.svg     — Medium-scale correction
  lumora-micro-16.svg          — 16px production mark
  lumora-micro-black.svg       — Black on light
  lumora-micro-white.svg       — White on dark
  lumora-micro-mono.svg        — Neutral single-color
  micro-mark-spec.md           — This document
  micro-mark-audit.html        — Visual validation lab
```

---

## Secondary Mark Status

Secondary mark / favicon remains a separate future identity task after this micro-mark is locked.

---

*This is not the final LUMORA logo system. This is the approved micro-mark candidate becoming a production-quality vector asset.*
