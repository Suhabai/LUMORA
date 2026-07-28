# LUMORA OS

> Build Once. Create Forever.

---

[![Build](https://github.com/lumora-os/lumora-os/actions/workflows/build.yml/badge.svg)](https://github.com/lumora-os/lumora-os/actions/workflows/build.yml)
[![Lint](https://github.com/lumora-os/lumora-os/actions/workflows/lint.yml/badge.svg)](https://github.com/lumora-os/lumora-os/actions/workflows/lint.yml)
[![Typecheck](https://github.com/lumora-os/lumora-os/actions/workflows/typecheck.yml/badge.svg)](https://github.com/lumora-os/lumora-os/actions/workflows/typecheck.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)

A design system and application framework built for production web applications. Cinematic future luxury for interfaces that need to feel different.

---

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

## Repository Structure

```
lumora-os/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (metadata, fonts, providers)
│   ├── page.tsx            # Home page (hero, features, sections)
│   ├── globals.css         # Design tokens and base styles
│   └── sitemap.ts          # Dynamic sitemap generation
├── components/
│   ├── layout/             # Navigation, footer, scroll, cursor
│   ├── sections/           # Page sections (hero, about, services)
│   └── ui/                 # Reusable primitives (button, card, badge)
├── constants/              # Design data, site config, navigation
├── tokens/                 # JSON design tokens
├── docs/                   # Framework documentation
├── types/                  # TypeScript type definitions
├── utils/                  # Utility functions (cn)
├── public/                 # Static assets
├── .github/                # GitHub Actions and templates
├── ARCHITECTURE.md         # Architectural decisions
├── DECISIONS.md            # Architecture Decision Records
├── CONTRIBUTING.md         # Contribution guidelines
├── CHANGELOG.md            # Version history
├── CODE_OF_CONDUCT.md      # Community guidelines
└── LICENSE                 # MIT License
```

## Design System

LUMORA includes a complete design token system:

| Token | Description |
|-------|-------------|
| [Colors](./tokens/colors.json) | Color palette and semantic tokens |
| [Spacing](./tokens/spacing.json) | Spacing scale and layout values |
| [Radius](./tokens/radius.json) | Border radius tokens |
| [Typography](./tokens/typography.json) | Type scale and font configuration |
| [Motion](./tokens/motion.json) | Animation tokens |
| [Shadow](./tokens/shadow.json) | Elevation and shadow tokens |
| [Blur](./tokens/blur.json) | Blur and glassmorphism tokens |
| [Z-Index](./tokens/z-index.json) | Layering and stacking tokens |
| [Duration](./tokens/duration.json) | Animation duration tokens |
| [Opacity](./tokens/opacity.json) | Opacity level tokens |

## Features

- **TypeScript Strict** — Maximum type safety
- **Server Components** — Default for all sections
- **Framer Motion** — Component-level animations
- **GSAP** — Timeline animations
- **Lenis** — Smooth scrolling
- **Tailwind CSS v4** — Utility-first styling
- **Accessibility** — WCAG compliant
- **Performance** — 95+ Lighthouse score

## Documentation

| Document | Description |
|----------|-------------|
| [Getting Started](./docs/getting-started.md) | Installation and setup |
| [Philosophy](./docs/philosophy.md) | Why LUMORA exists |
| [Visual Language](./docs/visual-language.md) | Design patterns and rules |
| [Motion](./docs/motion.md) | Animation system |
| [Components](./docs/components.md) | Component API reference |
| [Architecture](./ARCHITECTURE.md) | Technical architecture |
| [Decisions](./DECISIONS.md) | Architecture Decision Records |
| [Roadmap](./docs/roadmap.md) | Development timeline |

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

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Contributing

We welcome contributions! Please read our [Contributing Guide](./CONTRIBUTING.md) before submitting a pull request.

## Roadmap

See the [Roadmap](./docs/roadmap.md) for planned features and development timeline.

## License

MIT — see [LICENSE](./LICENSE) for details.
