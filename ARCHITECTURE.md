# Architecture

> The technical architecture and design patterns that power LUMORA OS.

---

## Overview

LUMORA OS is built on Next.js 16 with the App Router, React 19, TypeScript strict, and Tailwind CSS v4. The architecture prioritizes server components, type safety, and performance.

## System Architecture

```
┌─────────────────────────────────────────────────────┐
│                    Presentation                      │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐ │
│  │   Sections   │  │     UI      │  │   Layout    │ │
│  │  (Server)    │  │  (Mixed)    │  │  (Mixed)    │ │
│  └─────────────┘  └─────────────┘  └─────────────┘ │
├─────────────────────────────────────────────────────┤
│                     Application                      │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐ │
│  │   App Router │  │   Constants │  │    Types    │ │
│  │   (Server)   │  │   (Data)    │  │  (Schema)   │ │
│  └─────────────┘  └─────────────┘  └─────────────┘ │
├─────────────────────────────────────────────────────┤
│                      Foundation                       │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐ │
│  │  Tailwind    │  │  Framer     │  │    GSAP     │ │
│  │  CSS v4      │  │  Motion     │  │             │ │
│  └─────────────┘  └─────────────┘  └─────────────┘ │
└─────────────────────────────────────────────────────┘
```

## Component Model

### Server Components (Default)

Server components render on the server and send minimal HTML to the client. They cannot use state, effects, or browser APIs.

```tsx
// components/sections/about.tsx
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";

export function About() {
  return (
    <section>
      <Reveal>
        <SectionHeader label="About" title="Our Story" />
      </Reveal>
    </section>
  );
}
```

**Use for**: Static content, layout, data display

### Client Components

Client components render on the client and can use state, effects, and browser APIs. They require the `"use client"` directive.

```tsx
// components/ui/button.tsx
"use client";

import { motion } from "framer-motion";

export function Button({ children }) {
  return (
    <motion.button whileHover={{ scale: 1.02 }}>
      {children}
    </motion.button>
  );
}
```

**Use for**: Interactivity, animations, browser APIs

### Component Composition Pattern

```
Page (Server)
├── Section (Server)
│   ├── Reveal (Client)
│   │   └── Card (Client)
│   │       └── Content (Server)
│   └── SectionHeader (Server)
└── Footer (Server)
```

## Data Flow

```
constants/index.ts → Page → Section → Component
       ↓
   Static data (no runtime fetching)
```

LUMORA uses static data from `constants/index.ts`. There is no runtime data fetching in the current architecture. This simplifies the data flow and enables full static generation.

## Styling Architecture

### Design Token System

Tokens are defined in `globals.css` using the `@theme` directive:

```css
@theme {
  --color-bg: #07070a;
  --color-accent: #8a2eff;
  --spacing-container: clamp(1.5rem, 5vw, 3rem);
}
```

### Utility-First Styling

All styling uses Tailwind CSS utility classes:

```tsx
<div className="max-w-[1280px] mx-auto px-[var(--spacing-container)]">
```

### Token-Driven Design

Components reference tokens, not hardcoded values:

```tsx
// Good — uses token
<div className="bg-surface">

// Bad — hardcoded
<div className="bg-[#101018]">
```

## Animation Architecture

### Layered Animation System

| Layer | Library | Scope |
|-------|---------|-------|
| Component | Framer Motion | Button hover, card lift |
| Scroll | Reveal wrapper | Section entrance |
| Timeline | GSAP | Hero sequence |
| Smooth | Lenis | Page scroll |

### Animation Boundary

Client components form animation boundaries. When a section needs animation, it wraps content in a client component:

```tsx
// Server section with client animation wrapper
<Reveal>
  <SectionContent />
</Reveal>
```

## File Organization

### Naming Conventions

| Pattern | Example | Usage |
|---------|---------|-------|
| `kebab-case` | `smooth-scroll.tsx` | Component files |
| `PascalCase` | `SmoothScroll` | Component exports |
| `camelCase` | `getDocBySlug` | Function exports |
| `SCREAMING_SNAKE` | `SITE_CONFIG` | Constant exports |

### Directory Structure

- **components/ui/** — Reusable primitives
- **components/layout/** — Structural components
- **components/sections/** — Page sections
- **constants/** — Static data and configuration
- **tokens/** — JSON design tokens
- **types/** — TypeScript type definitions
- **utils/** — Utility functions

## Performance Strategy

### Static Generation

All pages are statically generated at build time:

```tsx
// app/page.tsx — Static, no dynamic data
export default function Home() {
  return <main>...</main>;
}
```

### Font Optimization

Inter font is loaded with `next/font` for optimal performance:

```tsx
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
```

### Image Optimization

Images use AVIF and WebP formats with long cache TTLs:

```ts
images: {
  formats: ["image/avif", "image/webp"],
  minimumCacheTTL: 31536000,
}
```

## Security Headers

```ts
headers: [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-XSS-Protection", value: "1; mode=block" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
]
```

## Accessibility Strategy

- **Skip links** — Keyboard navigation support
- **ARIA labels** — Screen reader support
- **Semantic HTML** — Proper heading hierarchy
- **Focus management** — Visible focus indicators
- **Reduced motion** — Respect user preferences

## Type Safety

Strict TypeScript configuration:

```json
{
  "strict": true,
  "noUnusedLocals": true,
  "noUnusedParameters": true,
  "noFallthroughCasesInSwitch": true,
  "forceConsistentCasingInFileNames": true
}
```

## Error Handling

- **Type errors** — Caught at build time by TypeScript
- **Lint errors** — Caught by ESLint before commit
- **Runtime errors** — Handled by Next.js error boundaries
- **Not found** — Custom 404 page

---

## Do

- Follow the server-component-first pattern
- Use the design token system for all styling
- Keep components small and focused

## Don't

- Do not add `"use client"` without reason
- Do not bypass TypeScript strict mode
- Do not use hardcoded colors or spacing

## Related

- [Decisions](./DECISIONS.md) — Architecture Decision Records
- [Components](./docs/components.md) — Component API reference
- [Getting Started](./docs/getting-started.md) — Setup guide
