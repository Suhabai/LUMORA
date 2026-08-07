# LUMORA Design System

> The official design system specification for the LUMORA ecosystem.

> Authority Level: Visual System Document

> Status: Draft

> Version: 0.1.0

This document defines the visual language, layout system, spacing system, typography system, component principles, and design tokens used throughout LUMORA.

It transforms the principles defined in DESIGN.md into an implementation-ready design language.

This document does not describe individual pages.

It defines the reusable system behind every page.

---

# Design System Vision

LUMORA is built as a unified design system rather than a collection of independent interfaces.

Every screen should feel like part of the same experience.

Every component should belong to the same visual language.

Consistency is not repetition.

Consistency is recognition.

The Design System exists to create:

- visual consistency
- implementation efficiency
- scalability
- long-term maintainability

Every future component should inherit this language.

Nothing should feel isolated.

Everything should feel connected.
---

# Design System Principles

The LUMORA Design System follows these principles.

---

## 1. System Before Screens

Individual pages never define the design language.

The system defines the pages.

---

## 2. Reuse Before Reinvention

Existing patterns should always be preferred over creating new ones.

New components should only exist when they solve a new problem.

---

## 3. Consistency Builds Trust

Consistent spacing, typography, motion, and layout create confidence.

Users should recognize patterns naturally.

---

## 4. Simplicity Requires Discipline

Every visual decision should reduce noise.

Decoration without purpose is removed.

---

## 5. Components Tell One Story

No component exists independently.

Every component contributes to the same narrative experience.

The interface should feel like one product, not many screens.
---

# Layout System

The LUMORA layout system provides a consistent spatial structure for every page.

Layouts should create rhythm, balance, and clarity.

Every page should feel related, regardless of its content.

The layout system defines:

- page width
- content alignment
- section spacing
- visual rhythm
- responsive behavior

The layout should never compete with the content.

It should quietly support the experience.

---

# Layout Principles

## 1. Consistent Alignment

Content should align to a shared grid.

Elements should feel intentionally placed.

Random positioning should never occur.

---

## 2. Generous Whitespace

Whitespace is an active design element.

Spacing improves readability, focus, and emotional quality.

Empty space is not wasted space.

---

## 3. Clear Visual Rhythm

Sections should create a predictable reading rhythm.

Users should naturally understand where one idea ends and another begins.

Rhythm creates comfort.

---

## 4. Responsive by Design

Layouts should adapt naturally across screen sizes.

Responsiveness should preserve hierarchy rather than simply resize elements.

The experience should remain consistent on every device.
---

# Grid System

The LUMORA interface is built on a consistent grid.

The grid is invisible to users but visible in every design decision.

---

## Desktop

- 12-column grid
- Maximum content width: 1440px
- Recommended reading width: 720–840px
- Consistent gutters
- Balanced margins

---

## Tablet

- 8-column grid

---

## Mobile

- 4-column grid

---

# Grid Principles

The grid should support:

- readability
- hierarchy
- consistency
- scalability

Components should align to the grid whenever possible.

Breaking the grid requires a deliberate design reason.
---

# Spacing System

Spacing is one of the primary tools for creating clarity, rhythm, and hierarchy.

LUMORA uses a consistent spacing scale across all layouts and components.

Spacing should create visual harmony rather than arbitrary gaps.

---

## Base Unit

The design system is built on an 8px spacing unit.

Every spacing value should be a multiple of this unit whenever practical.

---

## Spacing Scale

| Token | Value |
|--------|------:|
| XS | 8px |
| SM | 16px |
| MD | 24px |
| LG | 32px |
| XL | 48px |
| 2XL | 64px |
| 3XL | 96px |
| 4XL | 128px |
| 5XL | 160px |

---

## Section Spacing

Major sections should be separated using generous spacing.

Recommended values:

- Desktop: 160px
- Tablet: 128px
- Mobile: 96px

Whitespace should communicate importance and create breathing room.

---

## Component Spacing

Components should follow consistent internal spacing.

Examples:

- Card padding
- Button padding
- Form spacing
- Navigation spacing

Internal spacing should feel balanced regardless of component size.

---

## Spacing Principles

Whitespace should never be accidental.

Every gap should communicate structure.

The absence of content is part of the experience.
---

# Container System

Containers define the readable width of the experience.

The goal is to optimize readability rather than maximize screen usage.

---

## Maximum Width

Desktop:

1440px

---

## Reading Width

Long-form content should remain between:

720px – 840px

to maximize readability.

---

## Container Principles

Content should never stretch unnecessarily.

Readable interfaces are more important than filling available space.

The layout should feel calm and balanced.

Different content types may use different container widths, but all should remain visually related.
---

# Typography System

Typography is one of the strongest expressions of the LUMORA identity.

Every typographic decision should communicate elegance, clarity, and confidence.

Typography should support storytelling rather than decoration.

---

# Typography Philosophy

The typography system combines:

- expressive display typography
- highly readable interface typography

Display typography creates emotion.

Interface typography creates clarity.

Both should work together as one visual language.

---

# Typeface System

## Display Typeface

Cormorant Garamond

Purpose:

- Hero headlines
- Section titles
- Editorial moments
- Emotional emphasis

---

## Interface Typeface

Manrope

Purpose:

- Navigation
- Body text
- UI labels
- Buttons
- Forms
- Documentation

The interface typeface should always prioritize readability.
---

# Typography Scale

Typography follows a consistent hierarchy.

Every level communicates a different degree of importance.

---

## Display XL

Purpose:

Main Hero headline

Suggested Size:

72–96px

---

## Display Large

Purpose:

Major section titles

Suggested Size:

56–64px

---

## Heading 1

Purpose:

Primary page headings

Suggested Size:

48px

---

## Heading 2

Purpose:

Major content sections

Suggested Size:

36px

---

## Heading 3

Purpose:

Subsections

Suggested Size:

28px

---

## Heading 4

Purpose:

Component titles

Suggested Size:

22px

---

## Body Large

Purpose:

Editorial paragraphs

Suggested Size:

20px

---

## Body

Purpose:

General content

Suggested Size:

18px

---

## Body Small

Purpose:

Supporting information

Suggested Size:

16px

---

## Caption

Purpose:

Metadata

Labels

Descriptions

Suggested Size:

14px
---

# Color System

Color in LUMORA exists to create atmosphere, hierarchy, and emotional clarity.

Colors should never be used only for decoration.

Every color must communicate purpose.

The palette should feel calm, premium, timeless, and intentional.

---

# Color Philosophy

The LUMORA color system is built around restraint.

Less color creates stronger meaning.

Accent colors should become memorable because they are used with intention.

Neutral colors provide structure.

Accent colors provide emotion.

---

# Core Palette

## Void

Purpose:

Primary background

The deepest visual foundation of the experience.

---

## Graphite

Purpose:

Secondary surfaces

Cards

Panels

Large containers

---

## Mist

Purpose:

Primary readable text

Important interface content

---

## Soft Mist

Purpose:

Secondary text

Supporting descriptions

Metadata

---

## Neon Purple

Purpose:

Primary accent

Interactive highlights

Living Core

Links

Focus states

Important actions

The accent color should remain rare enough to feel special.
---

# Semantic Color System

Colors should communicate meaning consistently across the entire ecosystem.

---

## Primary

Brand identity

Primary actions

---

## Secondary

Supporting actions

Secondary emphasis

---

## Success

Successful completion

Positive confirmation

---

## Warning

Important attention

Recoverable problems

---

## Error

Critical issues

Validation failures

---

## Information

Helpful guidance

Educational messages

Status communication

---

# Color Usage Rules

Meaning should always be more important than appearance.

Never use color alone to communicate information.

Color should always work together with:

- typography
- iconography
- spacing
- motion

Accessibility always takes priority over aesthetics.
---

# Motion System

Motion is a communication tool.

It exists to guide attention, create continuity, and reinforce meaning.

Motion should never exist only to impress.

Every animation should answer one question:

"Why is this moving?"

If there is no meaningful answer, the animation should not exist.

---

# Motion Philosophy

LUMORA motion should feel:

- calm
- cinematic
- intentional
- elegant
- alive

Motion should create emotional continuity between interactions.

Users should notice the experience.

They should not notice the animation.

---

# Motion Principles

## 1. Meaning Before Movement

Every movement should communicate purpose.

Animations should explain relationships rather than decorate interfaces.

---

## 2. Calm Over Fast

Motion should feel relaxed and confident.

Speed should never create stress.

---

## 3. Continuity

Every transition should feel connected to the previous experience.

Nothing should suddenly appear or disappear without reason.

---

## 4. Natural Timing

Acceleration and deceleration should feel organic.

Abrupt motion should be avoided unless intentionally communicating urgency.
---

# Motion Tokens

Motion tokens provide a consistent timing language across the ecosystem.

---

## Duration Scale

| Token | Duration |
|--------|---------:|
| Instant | 100ms |
| Fast | 180ms |
| Normal | 280ms |
| Slow | 420ms |
| Cinematic | 700ms |

---

## Easing Principles

Motion should prioritize smooth acceleration and gentle deceleration.

Abrupt easing curves should be avoided.

---

## Delay Usage

Delays should be subtle.

Delay should organize attention.

Delay should never slow productivity.

---

## Motion Rhythm

Fast interactions should remain responsive.

Large scene transitions may take longer.

The interface should always feel responsive regardless of animation length.
---

# Living Core Motion Rules

The Living Core is the emotional center of the LUMORA experience.

Its movement should communicate life without demanding attention.

---

## Core Principles

The Living Core should never feel like:

- a loading spinner
- a reactor
- a portal
- a sci-fi object
- a decorative animation

It should feel like quiet presence.

---

## Motion Characteristics

The Living Core may use:

- subtle breathing
- gentle pulse
- slow floating
- soft light transitions

Movement should remain slow and intentional.

---

## Interaction Rules

User interaction should gently influence the Living Core.

Hover, focus, or scrolling may create subtle responses.

The Living Core should never become playful or distracting.

---

## Emotional Goal

The user should feel:

"The interface feels alive."

Not:

"The animation is impressive."
---

# Interaction System

Interaction is the conversation between the user and the interface.

Every interaction should provide clear feedback while maintaining the calm and intentional character of LUMORA.

Users should never question whether the interface has received their action.

Feedback should feel immediate, subtle, and meaningful.

---

# Interaction Principles

## 1. Immediate Feedback

Every interaction should acknowledge user input.

The interface should never appear unresponsive.

---

## 2. Calm Responses

Feedback should never feel aggressive.

Hover, focus, press, and transition states should reinforce confidence rather than attract unnecessary attention.

---

## 3. Predictability

The same interaction should always produce the same result.

Consistency creates trust.

---

## 4. Progressive Disclosure

Only reveal complexity when it becomes useful.

Do not overwhelm users with unnecessary controls or information.

---

# Interaction States

Every interactive component should define:

- Default
- Hover
- Focus
- Active
- Disabled
- Loading
- Success
- Error

State changes should remain visually consistent across the entire ecosystem.

---

# Feedback Philosophy

Feedback should communicate:

- acknowledgement
- progress
- completion
- guidance

Feedback should never interrupt the user's flow unless absolutely necessary.
---

# Component Principles

Every component belongs to the LUMORA ecosystem.

Components should solve recurring interface problems through reusable patterns.

---

## Component Rules

Every component should be:

- reusable
- predictable
- accessible
- responsive
- consistent

Components should never introduce a new visual language.

They inherit the language defined by this Design System.

---

## Component Hierarchy

Components should exist in three levels:

### Foundations

Examples:

- Typography
- Color
- Icons
- Spacing
- Motion Tokens

---

### Primitive Components

Examples:

- Button
- Input
- Badge
- Divider
- Avatar

---

### Composite Components

Examples:

- Navigation
- Hero
- Project Card
- Testimonial
- Footer
- Contact Form

---

## Component Evolution

Existing components should evolve before new components are introduced.

The Design System should grow through refinement rather than expansion.
---

# Accessibility Standards

Accessibility is a fundamental quality requirement of the LUMORA Design System.

Every interface should be usable by the widest possible audience.

Accessibility is not a feature.

It is part of good design.

---

# Accessibility Principles

## 1. Readability

Text should remain readable under different viewing conditions.

Typography, spacing, and contrast should always support comprehension.

---

## 2. Keyboard Navigation

Every interactive component should be fully usable through keyboard navigation.

Focus states should always remain visible.

---

## 3. Contrast

Color combinations should provide sufficient contrast for readability.

Decorative choices should never reduce usability.

---

## 4. Motion Preferences

Users who prefer reduced motion should receive an equivalent experience with simplified animations.

Motion should enhance—not prevent—accessibility.

---

## 5. Inclusive Design

Interfaces should communicate through multiple signals.

Color should never be the only indicator of meaning.

Icons, labels, typography, and spacing should reinforce communication.
---

# Implementation Rules

The Design System serves as the single source of truth for implementation.

Every UI implementation should follow the specifications defined in this document.

---

# Implementation Principles

## 1. Design Tokens First

Spacing, colors, typography, radius, shadows, and motion should always be implemented through reusable design tokens.

Hard-coded values should be avoided whenever possible.

---

## 2. Component Reuse

Developers should reuse existing components before creating new ones.

Component duplication should be considered a design system issue.

---

## 3. Documentation Before Expansion

Every new reusable component should be documented before becoming part of the Design System.

The system grows intentionally—not accidentally.

---

## 4. Cross-Platform Consistency

The same visual language should remain consistent across all future platforms.

Design principles should outlive implementation technologies.

---

# Design System Governance

Changes to the Design System should be reviewed before adoption.

Consistency has higher priority than personal preference.

Every significant change should include:

- rationale
- expected impact
- affected components
- migration considerations

The Design System is a living system, but it evolves through deliberate decisions.