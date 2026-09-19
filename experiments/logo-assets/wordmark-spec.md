# LUMORA Wordmark — Asset Specification

Phase 0C.16 — Master Asset Production

---

## Master Asset

**File:** `lumora-wordmark-master.svg`

- Pure vector SVG
- Paths only, no live text
- No font dependency
- No filters, gradients, masks
- No unnecessary groups or hidden elements
- Clean viewBox: `0 0 3600 1000`
- Deterministic rendering across browsers

### Geometry

| Parameter | Value |
|-----------|-------|
| viewBox | 3600 x 1000 |
| Cap height | 700u (y=100 to y=800) |
| Stroke width | 70u |
| Baseline | y=800 |
| Center line | y=450 |

### Identity Events

| Event | Value | Location |
|-------|-------|----------|
| M/O structural undercut | -15u | Right stem of M, y=785 |
| O/R spatial release | +200u | R leg extension, x=2720 |

These are the approved identity events from Phase 0C.14. Do not modify.

---

## Optical Size Variants

### Large — `lumora-wordmark-large.svg`

- **Use:** 120px cap-height and above
- **Behavior:** Identical to master
- **M/O undercut:** -15u
- **O/R release:** +200u
- **Rationale:** Full identity expression at display sizes

### Medium — `lumora-wordmark-medium.svg`

- **Use:** 48–119px cap-height
- **Behavior:** Optical correction for mid-range sizes
- **M/O undercut:** Reduced to -10u
- **O/R release:** +200u preserved
- **Rationale:** Undercut reduction prevents visual crowding at smaller sizes while preserving legibility of the R leg release

### Small — `lumora-wordmark-small.svg`

- **Use:** 24–47px cap-height
- **Behavior:** Silhouette simplification
- **M/O undercut:** Removed (stem aligns to baseline)
- **O/R release:** Reduced to +150u
- **Rationale:** At small sizes, micro-details disappear. The word relies on letter rhythm, spacing, and overall silhouette for recognition.

---

## Source File

**File:** `lumora-wordmark-source.svg`

- Canonical geometry, not optimized for any specific size
- Cleanest reference for future production use
- Same path data as master with descriptive comments

---

## Color Variants

All color variants use identical geometry. Only the fill color changes.

| File | Fill Color | Use Case |
|------|-----------|----------|
| `lumora-wordmark-black.svg` | `#000000` | Light backgrounds |
| `lumora-wordmark-white.svg` | `#ffffff` | Dark backgrounds |
| `lumora-wordmark-mono.svg` | `#333333` | Neutral single-color applications |

**Do not** recolor individual letters. The wordmark is always monochrome.

---

## Print

**File:** `lumora-wordmark-print.svg`

- Same geometry as master
- Optimized for clean vector output
- No rasterization
- Use for print production at any resolution

---

## Clear-Space Guidance

Clear space is based on optical breathing room, not arbitrary mathematical rules.

| Direction | Minimum | Basis |
|-----------|---------|-------|
| Left | ~40u | ~0.057 x cap height |
| Right | ~40u | ~0.057 x cap height |
| Top | ~35u | ~0.05 x cap height |
| Bottom | ~35u | ~0.05 x cap height |

The clear space is derived from half the stroke width (35u) as minimum breathing room around the wordmark geometry.

---

## Practical Minimum Sizes

| Context | Minimum Cap Height | Variant |
|---------|-------------------|---------|
| Large display | >= 96px | Large |
| Standard web header | >= 32px | Large or Medium |
| Compact navigation | >= 24px | Small |

**Below 24px:** The wordmark should not be used. A separate secondary mark is required for favicon/icon contexts.

---

## Prohibited Transformations

DO NOT:

- Stretch horizontally
- Compress vertically
- Skew
- Rotate
- Outline strokes
- Add shadow
- Add glow
- Add gradient
- Change individual letter spacing manually
- Recolor individual letters
- Animate individual letters as default branding
- Place inside a decorative container
- Use the wordmark as favicon below its usable size

---

## Optical-Size Logic

The three variants form a single system. They share:

- Same letter proportions
- Same spacing rhythm
- Same identity events (varied in degree, not kind)
- Same word structure

The progression from large to small is a reduction of detail, not a redesign.

| Property | Large | Medium | Small |
|----------|-------|--------|-------|
| M/O undercut | -15u | -10u | 0u |
| O/R release | +200u | +200u | +150u |
| Visual family | Identical | Identical | Identical |

---

## Secondary Mark

Secondary mark / favicon remains a separate future identity task.

The wordmark must not be forced into favicon usage.

---

## File Manifest

```
experiments/logo-assets/
  lumora-wordmark-master.svg      — Primary production asset
  lumora-wordmark-source.svg      — Canonical reference geometry
  lumora-wordmark-black.svg       — Black on light backgrounds
  lumora-wordmark-white.svg       — White on dark backgrounds
  lumora-wordmark-mono.svg        — Neutral single-color
  lumora-wordmark-large.svg       — 120px+ optical variant
  lumora-wordmark-medium.svg      — 48–119px optical variant
  lumora-wordmark-small.svg       — 24–47px optical variant
  lumora-wordmark-print.svg       — Print-optimized vector
  wordmark-spec.md                — This document
  asset-audit.html                — Visual validation lab
```

PNG exports are provided for practical digital use at standard sizes.

---

*This is not a final brand identity system. The secondary mark, favicon, motion behavior, sound relationship, and complete brand guidelines remain future phases.*
