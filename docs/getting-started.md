# Getting Started

> Set up LUMORA in your environment and run your first build.

---

## Purpose

This guide walks through installing, configuring, and running LUMORA. By the end, you will have a working development environment and understand the project structure.

## Principles

- **Start fast** — Minimal steps from clone to running server
- **Understand the structure** — Know where everything lives before changing anything
- **Configure intentionally** — Every setting has a reason

## Prerequisites

| Requirement | Version | Purpose |
|-------------|---------|---------|
| Node.js | 18.17+ | Runtime |
| npm | 9+ | Package management |
| Git | 2.30+ | Version control |

## Installation

```bash
# Clone the repository
# TODO: Update with correct repository URL
git clone https://github.com/Suhabai/LUMORA.git

# Navigate to project
cd lumora

# Install dependencies
npm install
```

## Development

```bash
# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
lumora/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (metadata, fonts, providers)
│   ├── page.tsx            # Home page (hero, sections)
│   └── sitemap.ts          # Dynamic sitemap generation
├── components/
│   ├── layout/             # Navigation, footer, scroll
│   ├── sections/           # Page sections (hero, about, contact)
│   └── ui/                 # Reusable primitives (button, card, badge)
├── constants/              # Design data, site config, navigation
├── tokens/                 # JSON design tokens
├── styles/                 # Global styles and CSS variables
├── docs/                   # Project documentation
├── types/                  # TypeScript type definitions
├── utils/                  # Utility functions (cn)
├── skills/                 # AI collaboration skill definitions
└── public/                 # Static assets
```

## Configuration

### TypeScript

Strict TypeScript configuration in `tsconfig.json`:

```json
{
  "strict": true,
  "noUnusedLocals": true,
  "noUnusedParameters": true,
  "noFallthroughCasesInSwitch": true
}
```

### Tailwind CSS

Design tokens in `globals.css`:

```css
@theme {
  --color-bg: #07070a;
  --color-accent: #8a2eff;
  --color-text: #f5f5f7;
}
```

### Components

Server components by default. Client components only when state, effects, or browser APIs are required:

```tsx
"use client";

import { motion } from "framer-motion";

export function Button() {
  return <motion.button whileHover={{ scale: 1.02 }}>...</motion.button>;
}
```

## Build

```bash
# Production build
npm run build

# Start production server
npm run start
```

## Linting

```bash
npm run lint
```

---

## Do

- Use server components when possible
- Follow the existing file naming conventions
- Keep components small and focused

## Don't

- Don't add `"use client"` unless necessary
- Don't modify `globals.css` tokens without understanding the design system
- Don't skip linting before committing

## Related

- [Philosophy](./philosophy.md) — Why LUMORA exists
- [Architecture](../ARCHITECTURE.md) — Architectural decisions
- [Components](./components.md) — Component API reference
