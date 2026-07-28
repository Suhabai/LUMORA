# Architecture Decision Records

> Record significant architectural decisions made in the LUMORA OS project.

---

## Overview

This document contains Architecture Decision Records (ADRs) for LUMORA OS. Each ADR captures a significant architectural decision, its context, and its consequences.

## Format

Each ADR follows this structure:

- **Title** — Short name of the decision
- **Status** — Proposed, Accepted, Deprecated, or Superseded
- **Context** — The situation that prompted the decision
- **Decision** — What was decided
- **Consequences** — The outcomes of the decision

---

## ADR-001: Use Next.js App Router

**Status**: Accepted

**Context**: We need a React framework that supports server components, static generation, and modern patterns.

**Decision**: Use Next.js with the App Router (not Pages Router).

**Consequences**:
- Server components by default
- File-based routing with layouts
- Built-in optimization (fonts, images, scripts)
- Steeper learning curve than Pages Router

---

## ADR-002: Server Components by Default

**Status**: Accepted

**Context**: We want to minimize client JavaScript and maximize performance.

**Decision**: Use server components by default. Add `"use client"` only when state, effects, or browser APIs are required.

**Consequences**:
- Reduced bundle size
- Faster initial page loads
- Clear boundary between server and client code
- Must think carefully about component boundaries

---

## ADR-003: Dark-First Design

**Status**: Accepted

**Context**: Most interfaces default to light mode. We want a different approach.

**Decision**: Design for dark mode first. Light mode is an accessibility option, not the default.

**Consequences**:
- Reduced eye strain for users
- Better contrast for luminous accents
- Depth through background layering
- Must ensure accessibility in both modes

---

## ADR-004: Use TypeScript Strict Mode

**Status**: Accepted

**Context**: We want maximum type safety and code quality.

**Decision**: Enable strict TypeScript with `noUnusedLocals`, `noUnusedParameters`, and `noFallthroughCasesInSwitch`.

**Consequences**:
- Catches bugs at compile time
- Better IDE support and autocompletion
- More verbose code in some cases
- Requires discipline in type definitions

---

## ADR-005: Tailwind CSS for Styling

**Status**: Accepted

**Context**: We need a styling system that is fast, consistent, and maintainable.

**Decision**: Use Tailwind CSS v4 with the `@theme` directive for design tokens.

**Consequences**:
- Utility-first approach reduces CSS bloat
- Design tokens are first-class citizens
- Consistent spacing and color system
- Requires learning Tailwind syntax

---

## ADR-006: Framer Motion + GSAP for Animation

**Status**: Accepted

**Context**: We need animation at two scales: component-level and timeline-level.

**Decision**: Use Framer Motion for component animations (hover, tap, enter/exit) and GSAP for timeline animations (scroll sequences, hero).

**Consequences**:
- Complete control over motion at every scale
- Two animation libraries to maintain
- Clear separation of concerns
- Team must learn both libraries

---

## ADR-007: Static Data from Constants

**Status**: Accepted

**Context**: We want to avoid runtime data fetching for the initial version.

**Decision**: Store all data in `constants/index.ts` as static exports.

**Consequences**:
- Full static generation
- No database or API dependencies
- Simple data flow
- Data changes require rebuild

---

## ADR-008: Reusable Primitive Components

**Status**: Accepted

**Context**: We need components that are flexible, composable, and maintainable.

**Decision**: Build small, focused primitives (Button, Card, Badge) that compose into larger patterns.

**Consequences**:
- High reusability
- Clear component API
- Easy to test and maintain
- Requires more composition for complex UIs

---

## ADR-009: Lenis for Smooth Scrolling

**Status**: Accepted

**Context**: We want smooth scrolling that works across all browsers and respects user preferences.

**Decision**: Use Lenis for smooth scrolling with a global wrapper.

**Consequences**:
- Consistent scrolling experience
- Respect for `prefers-reduced-motion`
- Additional dependency
- Must handle scroll position for anchor links

---

## ADR-010: JSON Design Tokens

**Status**: Accepted

**Context**: We want design tokens to be accessible to non-CSS tools and formats.

**Decision**: Maintain JSON token files alongside CSS custom properties.

**Consequences**:
- Tokens are tool-agnostic
- Can be used in Figma, Style Dictionary, etc.
- Requires keeping JSON and CSS in sync
- Single source of truth for design values

---

## Do

- Create an ADR for significant architectural changes
- Update this document when decisions are made
- Reference ADRs in pull requests

## Don't

- Do not make architectural decisions without discussion
- Do not skip the ADR process for significant changes
- Do not modify accepted ADRs without a new ADR

## Related

- [Architecture](./ARCHITECTURE.md) — Technical architecture
- [Roadmap](./docs/roadmap.md) — Development timeline
- [Contributing](./CONTRIBUTING.md) — How to contribute
