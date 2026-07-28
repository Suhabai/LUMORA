# Visual Language

LUMORA follows a specific visual language rooted in cinematic aesthetics and luxury design.

## Color System

### Primary Palette

| Name | Value | Role |
|------|-------|------|
| Background | `#07070a` | Primary canvas |
| Surface | `#101018` | Cards, sections |
| Elevated | `#16161f` | Hover states, active elements |
| Border | `rgba(255,255,255,0.06)` | Subtle dividers |

### Text Palette

| Name | Value | Role |
|------|-------|------|
| Text | `#f5f5f7` | Primary text |
| Muted | `#7a7a8e` | Secondary text |
| Faint | `#4a4a5a` | Disabled, placeholders |

### Accent Palette

| Name | Value | Role |
|------|-------|------|
| Accent | `#8a2eff` | Primary accent |
| Accent Soft | `rgba(138,46,255,0.08)` | Subtle accent backgrounds |
| Accent Hover | `#a65cff` | Accent hover states |
| Glow | `#b96cff` | Gradient endpoints |
| Glow Soft | `rgba(185,108,255,0.06)` | Subtle glow effects |

### Color Usage

- **Background**: Never pure black (`#000`). Use `#07070a` for softer darkness.
- **Surface**: Slightly lighter than background for depth hierarchy.
- **Accent**: Use sparingly. One accent color per viewport.
- **Text**: High contrast on dark backgrounds. Muted text for secondary information.

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

## Shadows

LUMORA uses minimal shadows. Depth is communicated through:

1. **Background layering**: Background → Surface → Elevated
2. **Border opacity**: Subtle borders at `0.06` opacity
3. **Glow effects**: Accent-colored radial gradients

When shadows are used:

```css
box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
```

## Layout Patterns

### Full-Width Sections

```
┌─────────────────────────────────┐
│                                 │
│          Section Content        │
│                                 │
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

- **Services**: 3-column grid on desktop, 1-column on mobile
- **Team**: 4-column grid on desktop, 2-column on tablet, 1-column on mobile
- **Stats**: 3-column centered layout

## Component Patterns

### Cards

```
┌────────────────────────────┐
│ Icon  Number               │
│                            │
│ Title                      │
│ Description text that      │
│ spans multiple lines       │
└────────────────────────────┘
```

### Section Headers

```
───────── Label
Heading Text
Description paragraph
```

## Responsive Breakpoints

| Breakpoint | Width | Columns |
|------------|-------|---------|
| Mobile | `< 768px` | 1 |
| Tablet | `768px - 1024px` | 2 |
| Desktop | `> 1024px` | 3-4 |
