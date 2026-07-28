# Components

LUMORA components are built with React, TypeScript, and Framer Motion.

## Component Architecture

### Server vs Client

| Type | Use Case | Examples |
|------|----------|----------|
| Server | Static content, layout | SectionHeader, Badge, Footer |
| Client | Interactivity, animation | Button, Card, Reveal, Counter |

### File Structure

```
components/
├── ui/
│   ├── button.tsx        # Client
│   ├── card.tsx          # Client
│   ├── badge.tsx         # Server
│   ├── section-header.tsx # Server
│   ├── reveal.tsx        # Client
│   └── counter.tsx       # Client
├── layout/
│   ├── navigation.tsx    # Client
│   ├── footer.tsx        # Server
│   ├── scan-line.tsx     # Client
│   ├── custom-cursor.tsx # Client
│   └── smooth-scroll.tsx # Client
└── sections/
    ├── hero.tsx          # Client
    ├── about.tsx         # Server
    ├── services.tsx      # Server
    ├── technology.tsx    # Server
    ├── team.tsx          # Server
    ├── testimonials.tsx  # Server
    └── cta.tsx           # Server
```

## UI Components

### Button

Client component with Framer Motion animations.

```tsx
import { Button } from "@/components/ui/button";

<Button variant="primary" size="lg">
  Click me
</Button>
```

**Props**:
- `variant`: `"primary" | "ghost"` (default: `"primary"`)
- `size`: `"sm" | "md" | "lg"` (default: `"md"`)
- `disabled`: `boolean`
- `onClick`: `() => void`
- `children`: `ReactNode`

**Animations**:
- `whileHover`: `{ scale: 1.02 }`
- `whileTap`: `{ scale: 0.98 }`

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

**Props**:
- `children`: `ReactNode`
- `className`: `string`

**Animations**:
- `whileHover`: `{ y: -4 }`

---

### Badge

Server component for status indicators.

```tsx
import { Badge } from "@/components/ui/badge";

<Badge variant="accent">Status</Badge>
```

**Props**:
- `variant`: `"accent" | "muted"` (default: `"accent"`)
- `children`: `ReactNode`
- `className`: `string`

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

**Props**:
- `id`: `string` (for anchor links)
- `label`: `string` (small text above title)
- `title`: `string` (main heading)
- `description`: `string` (optional)
- `centered`: `boolean` (default: `false`)
- `className`: `string`

---

### Reveal

Client component for scroll-triggered animations.

```tsx
import { Reveal } from "@/components/ui/reveal";

<Reveal variant="fadeUp" delay={0.2}>
  <p>Revealed on scroll</p>
</Reveal>
```

**Props**:
- `variant`: `"fadeUp" | "fadeIn"` (default: `"fadeUp"`)
- `delay`: `number` (default: `0`)
- `duration`: `number` (default: `0.6`)
- `children`: `ReactNode`
- `className`: `string`

**Animations**:
- `initial`: `{ opacity: 0, y: 24 }` (fadeUp) or `{ opacity: 0 }` (fadeIn)
- `whileInView`: `{ opacity: 1, y: 0 }` or `{ opacity: 1 }`
- `viewport`: `{ once: true, margin: "-80px" }`

---

### Counter

Client component for animated number counters.

```tsx
import { Counter } from "@/components/ui/counter";

<Counter target={15} suffix="K+" />
```

**Props**:
- `target`: `number` (target value)
- `suffix`: `string` (default: `""`)

**Behavior**:
- Animates from 0 to target on intersection
- Uses `IntersectionObserver` with 50% threshold
- Easing: `1 - Math.pow(1 - progress, 3)`
- Duration: 2000ms

## Layout Components

### Navigation

Client component with sticky header and mobile menu.

```tsx
import { Navigation } from "@/components/layout/navigation";

<Navigation />
```

**Features**:
- Scroll-aware background blur
- Mobile menu with Framer Motion animations
- Skip-to-content link
- ARIA labels for accessibility

---

### Footer

Server component with navigation links.

```tsx
import { Footer } from "@/components/layout/footer";

<Footer />
```

**Features**:
- Semantic `<footer>` element
- Navigation sections
- Copyright notice

---

### SmoothScroll

Client component wrapping Lenis for smooth scrolling.

```tsx
import { SmoothScroll } from "@/components/layout/smooth-scroll";

<SmoothScroll>{children}</SmoothScroll>
```

**Configuration**:
- Duration: 1.2s
- Smooth wheel: true

## Section Components

### Hero

Client component with GSAP timeline animation.

**Features**:
- Staggered text reveal
- Background radial gradient
- Animated call-to-action buttons
- Scroll indicator

---

### TrustBar

Server component with Reveal wrappers.

**Features**:
- 4-column grid
- Icon + text pairs
- Scroll-triggered reveal

---

### About

Server component with Counter islands.

**Features**:
- Section header
- 3-column stats grid
- Animated counters

---

### Services

Server component with Card grid.

**Features**:
- 3-column responsive grid
- Icon + number + title + description
- Staggered reveal

---

### Technology

Server component with split layout.

**Features**:
- 2-column layout
- Section header on left
- Feature cards on right

---

### Team

Server component with avatar cards.

**Features**:
- 4-column responsive grid
- Initials avatar
- Name and role

---

### Testimonials

Server component with quote cards.

**Features**:
- Star rating
- Quote text
- Author info

---

### CTA

Server component with centered layout.

**Features**:
- Section header (centered)
- Call-to-action buttons

## Utility Functions

### cn()

Merges Tailwind CSS classes:

```tsx
import { cn } from "@/utils";

<div className={cn("base-class", condition && "conditional", className)} />
```

Uses `clsx` and `tailwind-merge` for optimal class merging.
