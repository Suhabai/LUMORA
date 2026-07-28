# Philosophy

LUMORA exists because production applications deserve production-quality design systems.

## Why LUMORA

Most design systems are built for dashboards and SaaS products. They optimize for information density and data display. But not every application is a dashboard.

LUMORA is built for applications that need to feel different:

- **Consumer-facing products** that compete on experience
- **Premium brands** where visual quality signals trust
- **Creative tools** where the interface inspires the work
- **Marketing sites** where every pixel communicates value

## Core Beliefs

### 1. Design Is Not Decoration

Design is how something works. The visual layer is inseparable from the functional layer. A button is not a rectangle with text — it is a promise of interaction.

### 2. Dark Mode Is Not a Theme

Dark mode is the default. It reduces eye strain, creates depth, and makes luminous accents possible. Light mode is an accessibility option, not the primary experience.

### 3. Motion Communicates State

Animation is not decoration. It tells the user what happened, what is happening, and what will happen next. A button that scales on hover confirms interactivity. A page that fades in signals navigation completion.

### 4. Typography Is the Interface

The type system carries more weight than any other design element. Scale, weight, spacing, and color of text communicate hierarchy, importance, and relationship.

### 5. Space Is Not Empty

Whitespace is not wasted space. It is the breathing room that lets content speak. Generous spacing creates luxury. Tight spacing creates stress.

## Design Decisions

### Why Purple

Purple sits between the warmth of red and the coolness of blue. It communicates creativity, luxury, and forward-thinking. The specific hue `#8a2eff` was chosen for its luminosity on dark backgrounds.

### Why Inter

Inter is designed for screens. It has excellent legibility at all sizes, comprehensive language support, and a clean aesthetic that doesn't compete with content.

### Why GSAP + Framer Motion

Framer Motion excels at component-level animations (hover, tap, enter/exit). GSAP excels at timeline animations (scroll sequences, coordinated effects). Using both gives complete control over motion at every scale.

### Why Server Components First

Server components reduce client JavaScript, improve initial load performance, and simplify data fetching. Client components are used only when browser APIs, state, or effects are required.

## What LUMORA Is Not

- **Not a component library** — It is a design system with components
- **Not a template** — It is a foundation to build upon
- **Not a UI kit** — It is an opinionated approach to interface design
- **Not beginner-focused** — It assumes knowledge of React, TypeScript, and CSS

## Success Metrics

A successful LUMORA implementation:

1. Passes Lighthouse accessibility audit at 100
2. Scores 95+ on Lighthouse performance
3. Uses TypeScript in strict mode
4. Follows server-component-first architecture
5. Respects `prefers-reduced-motion`
6. Maintains consistent spacing and typography
