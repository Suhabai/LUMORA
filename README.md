# LUMORA

> A Cinematic Digital Experience

---

[![Build](https://github.com/lumora-os/lumora-os/actions/workflows/build.yml/badge.svg)](https://github.com/lumora-os/lumora-os/actions/workflows/build.yml)
[![Lint](https://github.com/lumora-os/lumora-os/actions/workflows/lint.yml/badge.svg)](https://github.com/lumora-os/lumora-os/actions/workflows/lint.yml)
[![Typecheck](https://github.com/lumora-os/lumora-os/actions/workflows/typecheck.yml/badge.svg)](https://github.com/lumora-os/lumora-os/actions/workflows/typecheck.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

LUMORA is a personal portfolio ecosystem built with cinematic storytelling, premium identity, and intentional design. It is not a template. It is a world with a recognizable identity.

---

## Quick Start

```bash
git clone https://github.com/lumora-os/lumora-os.git
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the experience.

## Project Structure

```
LUMORA/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (metadata, fonts, providers)
│   ├── page.tsx            # Home experience
│   └── sitemap.ts          # Dynamic sitemap generation
├── components/
│   ├── layout/             # Navigation, footer, scroll, cursor
│   ├── sections/           # Experience sections
│   └── ui/                 # Reusable primitives
├── constants/              # Content and configuration
├── tokens/                 # JSON design tokens
├── docs/                   # Project documentation
├── skills/                 # AI collaboration skills
├── utils/                  # Utility functions
├── public/                 # Static assets
├── DESIGN.md               # Design constitution
├── AGENTS.md               # Working rules
└── ARCHITECTURE.md         # Technical architecture
```

## Design Philosophy

LUMORA follows five non-negotiable principles:

1. **Identity Over Trends** — Build a recognizable language, not temporary styles
2. **Meaning Over Decoration** — Every element must have purpose
3. **Experience Over Features** — Quality over quantity
4. **Consistency Creates Identity** — Repeated meaningful patterns
5. **Simplicity Creates Luxury** — Controlled simplicity

## Tech Stack

| Technology | Role |
|------------|------|
| Next.js 16 | Framework |
| React 19 | UI Library |
| TypeScript 5 | Language |
| Tailwind CSS v4 | Styling |
| Framer Motion | Client Animation |
| GSAP | Timeline Animation |
| Lenis | Smooth Scroll |
| Lucide | Icons |

## Documentation

| Document | Description |
|----------|-------------|
| [Design Constitution](./DESIGN.md) | Complete design system and vision |
| [Working Rules](./AGENTS.md) | How decisions are made |
| [Architecture](./ARCHITECTURE.md) | Technical patterns |
| [Philosophy](./docs/philosophy.md) | Why LUMORA exists |
| [Visual Language](./docs/visual-language.md) | Design patterns and rules |
| [Motion System](./docs/motion.md) | Animation system |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## License

MIT — see [LICENSE](./LICENSE) for details.
