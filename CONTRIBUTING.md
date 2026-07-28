# Contributing to LUMORA

Thank you for your interest in contributing to LUMORA. This document provides guidelines for contributing to the project.

## Getting Started

1. Fork the repository
2. Clone your fork
3. Create a feature branch: `git checkout -b feature/your-feature`
4. Make your changes
5. Run tests and linting
6. Commit your changes
7. Push to your fork
8. Submit a pull request

## Development Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run linter
npm run lint

# Build for production
npm run build
```

## Code Standards

### TypeScript

- Use strict TypeScript configuration
- Avoid `any` types
- Use interfaces for object shapes
- Export types that are used across files

### React

- Prefer server components when possible
- Use client components only when state, effects, or browser APIs are required
- Keep components small and focused on one responsibility
- Use composition over inheritance

### Styling

- Use Tailwind CSS utility classes
- Follow the LUMORA design token system
- Maintain consistent spacing and typography
- Support dark mode by default

### Animation

- Use Framer Motion for client-side animations
- Use GSAP for complex timeline animations
- Always respect `prefers-reduced-motion`
- Keep animations purposeful and subtle

## Commit Messages

Use clear, descriptive commit messages:

- `feat: add new button variant`
- `fix: resolve hover state issue`
- `docs: update component documentation`
- `style: adjust spacing tokens`
- `refactor: extract animation logic`

## Pull Request Process

1. Update documentation if needed
2. Ensure all checks pass
3. Request review from maintainers
4. Address feedback promptly
5. Merge after approval

## Design Principles

When contributing, keep these principles in mind:

1. **Clarity Above All** — Every element must earn its presence
2. **Motion With Purpose** — Animation guides attention, never decorates
3. **Generous Space** — Whitespace is breathing room for content
4. **Darkness as Canvas** — Deep backgrounds, luminous accents

## Questions?

Open an issue with the label `question` if you need help.
