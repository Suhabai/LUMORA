# Components

> The reusable primitives that form LUMORA's component library.

---

## Purpose

This document provides the API reference for every component in the system. Components are the building blocks of LUMORA interfaces.

## Principles

- **Server first** — Use server components unless client interactivity is required
- **Single responsibility** — Each component does one thing well
- **Composable** — Components combine to create complex interfaces
- **Accessible** — Every component follows WCAG guidelines

## Component Architecture

### Server vs Client

| Type | Use Case | Examples |
|------|----------|----------|
| Server | Static content, layout | SectionHeader, Badge, Footer |
| Client | Interactivity, animation | Button, Card, Reveal, Counter |

### File Structure

```
components/
├── ui/                     # Reusable primitives
│   ├── button.tsx          # Client — Framer Motion hover/tap
│   ├── card.tsx            # Client — Hover lift effect
│   ├── badge.tsx           # Server — Status indicators
│   ├── section-header.tsx  # Server — Consistent headings
│   ├── reveal.tsx          # Client — Scroll-triggered animation
│   └── counter.tsx         # Client — Animated number counters
├── layout/                 # Structural components
│   ├── navigation.tsx      # Client — Sticky nav, mobile menu
│   ├── footer.tsx          # Server — Footer with links
│   ├── scan-line.tsx       # Client — Ambient animation
│   ├── custom-cursor.tsx   # Client — Cursor dot + ring
│   └── smooth-scroll.tsx   # Client — Lenis wrapper
└── sections/               # Page sections
    ├── hero.tsx            # Client — GSAP timeline
    ├── about.tsx           # Server — Stats with counters
    ├── services.tsx        # Server — Feature grid
    ├── technology.tsx      # Server — Design principles
    ├── team.tsx            # Server — Tech stack grid
    ├── testimonials.tsx    # Server — Quote cards
    └── cta.tsx             # Server — Call to action
```

## UI Components

### Button

Client component with Framer Motion animations.

```tsx
import { Button } from "@/components/ui/button";

<Button variant="primary" size="lg">Click me</Button>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"primary" \| "ghost"` | `"primary"` | Visual style |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Button size |
| `disabled` | `boolean` | `false` | Disables the button |
| `onClick` | `() => void` | — | Click handler |

**Animations**: `whileHover: scale(1.02)`, `whileTap: scale(0.98)`

---

### Card

Client component with hover lift effect.

```tsx
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
</Card>
```

**Animations**: `whileHover: y(-4)`

---

### Badge

Server component for status indicators.

```tsx
import { Badge } from "@/components/ui/badge";

<Badge variant="accent">Status</Badge>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"accent" \| "muted"` | `"accent"` | Visual style |

---

### SectionHeader

Server component for consistent section headings.

```tsx
import { SectionHeader } from "@/components/ui/section-header";

<SectionHeader
  id="about"
  label="About Us"
  title="Our Story"
  description="Brief description."
  centered
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | — | Anchor link target |
| `label` | `string` | — | Small text above title |
| `title` | `string` | — | Main heading |
| `description` | `string` | — | Optional description |
| `centered` | `boolean` | `false` | Center alignment |

---

### Reveal

Client component for scroll-triggered animations.

```tsx
import { Reveal } from "@/components/ui/reveal";

<Reveal variant="fadeUp" delay={0.2}>
  <p>Revealed on scroll</p>
</Reveal>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"fadeUp" \| "fadeIn"` | `"fadeUp"` | Animation type |
| `delay` | `number` | `0` | Delay in seconds |
| `duration` | `number` | `0.6` | Duration in seconds |

---

### Counter

Client component for animated number counters.

```tsx
import { Counter } from "@/components/ui/counter";

<Counter target={15} suffix="K+" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `target` | `number` | — | Target value |
| `suffix` | `string` | `""` | Text after number |

**Behavior**: Animates on intersection using `IntersectionObserver`

## Layout Components

### Navigation

Client component with sticky header and mobile menu.

**Features**: Scroll-aware blur, mobile sheet, skip-to-content link

### Footer

Server component with navigation sections.

**Features**: Semantic `<footer>`, legal links, copyright

### SmoothScroll

Client component wrapping Lenis for smooth scrolling.

**Configuration**: Duration 1.2s, smooth wheel enabled

## Utility Functions

### cn()

Merges Tailwind CSS classes:

```tsx
import { cn } from "@/utils";

<div className={cn("base", condition && "conditional", className)} />
```

Uses `clsx` and `tailwind-merge` for optimal class merging.

---

## Do

- Use server components by default
- Add `"use client"` only when needed
- Follow the existing component patterns
- Test accessibility at every breakpoint

## Don't

- Do not add client-side state without reason
- Do not create components that do one thing poorly
- Do not skip TypeScript types
- Do not ignore the existing design tokens

## Related

- [Visual Language](./visual-language.md) — Design patterns
- [Motion](./motion.md) — Animation system
- [Colors Token](../tokens/colors.json) — Color palette
