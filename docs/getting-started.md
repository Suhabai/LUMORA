# Getting Started

This guide walks through setting up LUMORA for your project.

## Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm
- Git (recommended)

## Installation

```bash
# Clone the repository
git clone https://github.com/lumora-os/lumora-os.git

# Navigate to project
cd lumora-os

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
lumora-os/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── styles/             # Global styles
├── components/
│   ├── layout/             # Navigation, footer
│   ├── sections/           # Page sections
│   └── ui/                 # Reusable primitives
├── constants/              # Design data
├── tokens/                 # JSON design tokens
├── docs/                   # Documentation
├── types/                  # TypeScript types
└── utils/                  # Utilities
```

## Configuration

### TypeScript

The project uses strict TypeScript. Key settings in `tsconfig.json`:

- `strict: true`
- `noUnusedLocals: true`
- `noUnusedParameters: true`
- `noFallthroughCasesInSwitch: true`

### Tailwind CSS

Design tokens are defined in `styles/globals.css` using the `@theme` directive:

```css
@theme {
  --color-bg: #07070a;
  --color-accent: #8a2eff;
  --color-text: #f5f5f7;
  /* ... */
}
```

### Components

Components are in `components/ui/`. Client components use `"use client"` directive:

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

## Next Steps

- Read the [Philosophy](./philosophy.md) to understand design decisions
- Review the [Visual Language](./visual-language.md) for design patterns
- Explore the [Components](./components.md) API reference
