# LUMORA

**Design System & Application Framework**

Cinematic future luxury for production web applications.

---

## Overview

LUMORA is a design system and application framework built for teams that demand award-level quality. It provides a complete foundation of design tokens, reusable components, motion systems, and architectural patterns — all tuned for dark-first, luxury interfaces.

Built on Next.js 16, React 19, TypeScript strict, and Tailwind CSS v4.

## Quick Start

```bash
# Clone the repository
git clone https://github.com/lumora-os/lumora-os.git

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Architecture

```
lumora-os/
├── app/                    # Next.js App Router pages
├── components/
│   ├── layout/             # Navigation, sidebar, footer
│   ├── sections/           # Page sections (hero, about, services)
│   └── ui/                 # Reusable primitives (button, card, badge)
├── constants/              # Design data and configuration
├── styles/                 # Global styles and design tokens
├── tokens/                 # JSON design tokens
├── docs/                   # Framework documentation
├── types/                  # TypeScript type definitions
└── utils/                  # Utility functions
```

## Design System

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#07070a` | Primary background |
| `--color-surface` | `#101018` | Card/section surfaces |
| `--color-elevated` | `#16161f` | Hover states |
| `--color-accent` | `#8a2eff` | Primary accent |
| `--color-text` | `#f5f5f7` | Primary text |
| `--color-text-muted` | `#7a7a8e` | Secondary text |

### Typography

- **Font**: Inter (sans-serif)
- **Scale**: Fluid `clamp()` sizing
- **Tracking**: Tight headlines, wide labels
- **Weight**: Bold headlines, medium body

### Spacing

- **Container**: `clamp(1.5rem, 5vw, 3rem)`
- **Section**: `clamp(6rem, 14vh, 12rem)`
- **Component**: Consistent 8px grid

### Motion

| Animation | Duration | Easing |
|-----------|----------|--------|
| Hover | 200ms | `ease-out` |
| Reveal | 600ms | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Stagger | 100ms delay | Cascading |
| Scroll | GSAP timeline | `power3.out` |

### Components

| Component | Type | Description |
|-----------|------|-------------|
| `Button` | Client | Framer Motion hover/tap |
| `Card` | Client | Hover lift with smooth transition |
| `Badge` | Server | Status indicators |
| `SectionHeader` | Server | Consistent section headings |
| `Reveal` | Client | Scroll-triggered animations |
| `Counter` | Client | Animated number counters |

## Features

- **TypeScript Strict**: `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`
- **Server Components**: Default for all sections. Client only when state/effects required
- **Accessibility**: Skip links, ARIA labels, semantic HTML, focus management
- **Performance**: Static generation, optimized fonts, minimal JavaScript
- **SEO**: JSON-LD structured data, Open Graph, sitemap, robots.txt

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Design Principles

1. **Clarity Above All** — Every element must earn its presence
2. **Motion With Purpose** — Animation guides attention, never decorates
3. **Generous Space** — Whitespace is breathing room for content
4. **Darkness as Canvas** — Deep backgrounds, luminous accents

## Documentation

- [Philosophy](./docs/philosophy.md) — Why LUMORA exists
- [Visual Language](./docs/visual-language.md) — Design decisions and patterns
- [Motion](./docs/motion.md) — Animation system and guidelines
- [Components](./docs/components.md) — Component API reference
- [Getting Started](./docs/getting-started.md) — Setup and configuration
- [Roadmap](./docs/roadmap.md) — What's coming next

## Design Tokens

JSON tokens are available in the `/tokens` directory:

- `colors.json` — Color palette and semantic tokens
- `spacing.json` — Spacing scale and layout values
- `radius.json` — Border radius tokens
- `typography.json` — Type scale and font configuration
- `motion.json` — Animation duration, easing, and keyframes
- `shadow.json` — Box shadow and elevation tokens

## Tech Stack

| Technology | Role |
|------------|------|
| Next.js 16 | Framework |
| React 19 | UI Library |
| TypeScript 5 | Language |
| Tailwind CSS 4 | Styling |
| Framer Motion | Client Animation |
| GSAP | Timeline Animation |
| Lenis | Smooth Scroll |
| Lucide | Icons |

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## License

MIT — see [LICENSE](./LICENSE)

## Acknowledgments

Built with the belief that production applications deserve production-quality design systems.
