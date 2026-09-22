# Roadmap

> What has been built, what is in progress, and what comes next.

---

## Purpose

This document outlines the LUMORA development timeline. It provides visibility into current status, planned features, and long-term vision.

## Principles

- **Transparent** — Public roadmap with clear status
- **Actionable** — Every item has a clear definition
- **Prioritized** — Items ordered by impact and effort

## Current Status

**Version**: 1.0.0
**Status**: Stable release

### Completed

- [x] Core design system (tokens, typography, colors)
- [x] Reusable UI components (Button, Card, Badge, SectionHeader, Reveal, Counter)
- [x] Layout components (Navigation, Footer, SmoothScroll, CustomCursor)
- [x] Section components (Hero, TrustBar, About, Services, Technology, Team, Testimonials, CTA)
- [x] GSAP and Framer Motion integration
- [x] TypeScript strict mode
- [x] Accessibility (skip links, ARIA labels, semantic HTML)
- [x] SEO (JSON-LD, Open Graph, sitemap, robots.txt)
- [x] Performance optimization (server components, font loading)
- [x] Documentation with consistent template
- [x] Design token system (colors, spacing, radius, typography, motion, shadow, blur, z-index, duration, opacity)
- [x] GitHub Actions (build, lint, typecheck)
- [x] Repository standards (.editorconfig, .gitattributes, prettier, commitlint)
- [x] Architecture documentation
- [x] Architecture Decision Records

## Planned

### v1.1 — Component Expansion

- [ ] Dialog / Modal component
- [ ] Tooltip component
- [ ] Tabs component
- [ ] Accordion component
- [ ] Toast / Notification system
- [ ] Form components (Input, Select, Checkbox, Radio)
- [ ] Data table component
- [ ] Pagination component
- [ ] Breadcrumb component

### v1.2 — Theme System

- [ ] Light mode support
- [ ] System preference detection
- [ ] Theme switcher component
- [ ] CSS variable theming
- [ ] Custom theme creation
- [ ] Theme documentation

### v1.3 — Animation Library

- [ ] Page transition animations
- [ ] Scroll-triggered sequences
- [ ] Parallax effects
- [ ] Text reveal animations
- [ ] Magnetic button effects
- [ ] Cursor follower component
- [ ] Animation presets

### v1.4 — Layout System

- [ ] Grid system
- [ ] Container variants
- [ ] Sidebar layouts
- [ ] Dashboard layouts
- [ ] Authentication layouts
- [ ] Documentation layouts

### Phase 0E.6 — Signature Loading Experience

**Status**: Planned — controlled future phase

**Placement**: After the Eclipse Core logo decision/refinement and before final public-launch readiness.

**Purpose**: Design a dedicated LUMORA loading surface for the state before first entry, while the homepage experience is loading, and during slow network conditions. This is a cinematic branded prelude, not a generic spinner or utility loader.

**Dependencies**:

- Direction A / Eclipse Core refinement and explicit identity approval, if the selected mark is used
- Frozen Identity, Motion Grammar, and Sonic Grammar review
- Homepage readiness and route-loading behavior understood
- Reduced-motion architecture available
- Launch-readiness and slow-network testing plan

**Experience requirements**:

- Feel cinematic, premium, calm, intelligent, memorable, and distinctly LUMORA
- Explore whether the selected logo mark, wordmark, or both carry the prelude
- Explore threshold, eclipse, and reveal language without turning the identity into a generic loader
- Transition cleanly into the homepage once the experience is ready
- Remain useful and visually coherent under slow network conditions
- Avoid blocking longer than necessary; never add a forced delay after readiness
- Provide a reduced-motion treatment that preserves orientation and meaning

**Non-negotiable constraints**:

- No generic spinner as the final solution
- No loud glitch, gamer/HUD, crypto, SaaS, or decorative-chaos treatment
- No sound, ambience, audio feedback, or sonic branding; LUMORA remains intentionally silent
- No Living Core substitution, logo-as-heartbeat behavior, or transfer of Living Core state into the identity
- The identity mark remains still unless a separate, explicitly approved identity-motion review reopens that rule
- Any logo animation exploration must be isolated as a controlled identity-motion review and cannot silently override frozen identity constraints
- Motion must follow the canonical Motion Grammar and include reduced-motion behavior

**Evaluation criteria**:

- LUMORA distinctiveness and emotional authorship
- Cinematic presence without spectacle
- Premium restraint and calm pacing
- Immediate comprehension of loading/readiness state
- Clean handoff into the homepage
- Slow-network resilience and perceived performance
- Reduced-motion clarity and accessibility
- No unnecessary blocking or layout shift
- Separation between identity, Living Core, and loading surface
- Avoidance of generic loader conventions

**Definition of ready for implementation planning**:

- One approved loading direction with documented entry, hold, error/slow-network, and handoff states
- Static and motion review against the frozen systems
- Reduced-motion behavior explicitly approved
- Performance and maximum-blocking behavior defined
- Separate implementation phase authorized by the user

### v2.0 — Framework Features

- [ ] CLI for project scaffolding
- [ ] Component marketplace
- [ ] Design token editor
- [ ] Figma integration
- [ ] Storybook integration
- [ ] Visual regression testing
- [ ] Performance monitoring

## Long Term

### Documentation

- [ ] Interactive component playground
- [ ] Video tutorials
- [ ] Migration guides
- [ ] Accessibility audit tools
- [ ] Internationalization support

### Ecosystem

- [ ] React Native components
- [ ] Vue.js adapter
- [ ] Svelte adapter
- [ ] Figma design kit
- [ ] Sketch plugin
- [ ] VS Code extension

### Community

- [ ] Contribution rewards program
- [ ] Community component submissions
- [ ] Design token marketplace
- [ ] Template gallery
- [ ] Showcase page

---

## Do

- Check the roadmap before proposing new features
- Reference issue numbers in pull requests
- Update this document when features are completed

## Don't

- Do not promise delivery dates
- Do not add features without discussion
- Do not skip the review process

## Related

- [Architecture](../ARCHITECTURE.md) — Technical decisions
- [Decisions](../DECISIONS.md) — Architecture Decision Records
- [Contributing](../CONTRIBUTING.md) — How to contribute
