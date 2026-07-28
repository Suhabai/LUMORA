# Visual Language

> The design patterns, tokens, and rules that define LUMORA's visual identity.

---

## Purpose

This document defines the visual rules that govern LUMORA interfaces. Every color, type scale, spacing value, and layout pattern is documented here.

## Principles

- **Consistency** — Similar elements look similar across the system
- **Hierarchy** — Visual weight communicates importance
- **Restraint** — Less is more; every element must earn its place

## Color System

### Primary Palette

| Token | Value | Role |
|-------|-------|------|
| `--color-bg` | `#07070a` | Primary canvas |
| `--color-surface` | `#101018` | Cards, sections |
| `--color-elevated` | `#16161f` | Hover states |
| `--color-border` | `rgba(255,255,255,0.06)` | Subtle dividers |

### Text Palette

| Token | Value | Role |
|-------|-------|------|
| `--color-text` | `#f5f5f7` | Primary text |
| `--color-text-muted` | `#7a7a8e` | Secondary text |
| `--color-text-faint` | `#4a4a5a` | Disabled text |

### Accent Palette

| Token | Value | Role |
|-------|-------|------|
| `--color-accent` | `#8a2eff` | Primary accent |
| `--color-accent-soft` | `rgba(138,46,255,0.08)` | Subtle backgrounds |
| `--color-accent-hover` | `#a65cff` | Hover states |
| `--color-glow` | `#b96cff` | Gradient endpoints |

### Color Rules

- **Background**: Never pure black (`#000`). Use `#07070a`.
- **Surface**: Slightly lighter than background for depth hierarchy.
- **Accent**: Use sparingly. One accent color per viewport.
- **Text**: High contrast on dark backgrounds.

## Typography

### Font Stack

```css
--font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

### Type Scale

| Element | Size | Weight | Tracking |
|---------|------|--------|----------|
| Hero | `clamp(3rem, 8vw, 6.5rem)` | Bold (700) | `-0.04em` |
| H2 | `clamp(2rem, 4.5vw, 3.5rem)` | Bold (700) | `-0.03em` |
| H3 | `1.25rem` | Semibold (600) | `-0.01em` |
| Body | `1rem` | Regular (400) | Normal |
| Small | `0.875rem` | Regular (400) | Normal |
| Label | `0.6875rem` | Semibold (600) | `0.14em` |

### Type Rules

1. **Headlines**: Bold weight, tight tracking, large size
2. **Labels**: Uppercase, wide tracking, small size
3. **Body**: Regular weight, generous line-height (1.6)
4. **Muted**: Reduced opacity or lighter color

## Spacing

### Container Width

```css
--spacing-container: clamp(1.5rem, 5vw, 3rem);
```

### Section Spacing

```css
--spacing-section: clamp(6rem, 14vh, 12rem);
```

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| xs | `0.25rem` | Icon gaps |
| sm | `0.5rem` | Inline spacing |
| md | `1rem` | Component padding |
| lg | `1.5rem` | Card padding |
| xl | `2rem` | Section gaps |
| 2xl | `3rem` | Container padding |

### Spacing Rules

1. **Sections**: Always use the section spacing scale
2. **Containers**: Use the container spacing for horizontal padding
3. **Cards**: Consistent internal padding
4. **Between elements**: Follow the 8px grid

## Border Radius

```css
--radius-sm: 0.375rem;    /* 6px */
--radius-md: 0.5rem;      /* 8px */
--radius-lg: 0.75rem;     /* 12px */
--radius-xl: 1rem;        /* 16px */
--radius-full: 9999px;    /* Pill shape */
```

### Radius Rules

- **Buttons**: `radius-full` for pill shape
- **Cards**: `radius-xl` for subtle rounding
- **Inputs**: `radius-lg` for form elements
- **Badges**: `radius-full` for status indicators

## Layout Patterns

### Full-Width Sections

```
┌─────────────────────────────────┐
│          Section Content        │
└─────────────────────────────────┘
```

### Container Sections

```
┌─────────────────────────────────┐
│ ┌─────────────────────────────┐ │
│ │      Container Content      │ │
│ └─────────────────────────────┘ │
└─────────────────────────────────┘
```

### Grid Layouts

- **Features**: 3-column grid on desktop, 1-column on mobile
- **Tech Stack**: 4-column grid on desktop, 2-column on tablet
- **Stats**: 3-column centered layout

## Responsive Breakpoints

| Breakpoint | Width | Columns |
|------------|-------|---------|
| Mobile | `< 768px` | 1 |
| Tablet | `768px - 1024px` | 2 |
| Desktop | `> 1024px` | 3-4 |

---

## Do

- Use the token system for all color, spacing, and type decisions
- Maintain consistent spacing between similar elements
- Test at all breakpoints

## Don't

- Do not use colors outside the token palette
- Do not use arbitrary spacing values
- Do not skip responsive testing

## Related

- [Colors Token](../tokens/colors.json) — Color palette data
- [Typography Token](../tokens/typography.json) — Type scale data
- [Spacing Token](../tokens/spacing.json) — Spacing scale data
- [Components](./components.md) — Component patterns
