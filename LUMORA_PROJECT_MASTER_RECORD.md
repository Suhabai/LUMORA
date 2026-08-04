# LUMORA — Project Master Record

> Central reference for the LUMORA project.
> Aligned with DESIGN.md, AGENTS.md, and LUMORA vision.
> This file is the single source of truth for project direction.

---

## Project Identity

**Name:** LUMORA
**Tagline:** A Cinematic Digital Experience
**Core Statement:** Designing digital experiences that feel alive.

**Identity Meaning:**
Light + Presence + Memory

**Project Type:**
Personal portfolio ecosystem. Not a template. Not a framework. Not a generic website.

**Purpose:**
Transform digital interfaces into memorable experiences through cinematic storytelling, premium identity, and intentional design.

---

## Brand Personality

LUMORA always feels:

- **Intelligent** — Design shows thought and purpose
- **Cinematic** — Experience feels like a carefully directed scene
- **Premium** — Every detail is intentional and refined
- **Calm** — Interface never feels rushed or noisy
- **Human** — Technology supports emotion instead of replacing it

---

## Experience Philosophy

**Core Belief:** A website should not only be viewed. It should be experienced.

**Experience Principles:**

1. **Reveal** — Expose something meaningful
2. **Guide** — Help users understand where to go
3. **Connect** — Create an emotional relationship

**Emotional Goals:**
- Curiosity — "I want to explore more."
- Trust — "This designer understands quality."
- Connection — "This feels created by a thoughtful human."

**Design Philosophy:** Less decoration. More intention.

**Experience Hierarchy:**
1. User emotion
2. User understanding
3. Visual quality
4. Technical complexity

---

## Core Concept — The Living Core

The Living Core is the emotional center of LUMORA.

**It represents:**
- Presence
- Intelligence
- Energy
- Connection

**It is NOT:**
- A logo
- A decorative object
- A generic glowing orb
- A sci-fi reactor
- A portal effect
- A random particle animation

**Core Philosophy:**
The Core should create the feeling: "The system is alive."
It must never become distracting. It exists quietly in the environment.

**Core Structure:**
1. Outer Presence Field — Environmental awareness (soft light field, atmospheric, very subtle)
2. Glass Core — Structure and intelligence (transparent depth, refined surface)
3. Light Seed — Energy and life (internal glow, soft pulse, calm illumination)

**Core States:**
- Dormant — Default state, slow breathing light, minimal movement
- Aware — Triggered by cursor proximity or section entry, slight presence increase
- Focused — During important interactions, more defined light, controlled energy
- Rest — After transition ends, returns smoothly to Dormant

**Forbidden Core Behaviors:**
- Aggressive pulsing
- Flashing
- Excessive glow
- Random movement
- Constant attention seeking

**Core Identity Rule:**
If the Core is removed and LUMORA loses its identity, the Core system is successful.

---

## Design Principles

1. **Identity Over Trends** — Build a recognizable language, not temporary styles
2. **Meaning Over Decoration** — Every element has purpose
3. **Experience Over Features** — Quality over quantity
4. **Consistency Creates Identity** — Repeated meaningful patterns
5. **Simplicity Creates Luxury** — Controlled simplicity

---

## Visual Language System

**Foundation:** Atmosphere + Depth + Light + Presence

**Void Environment:**
- Deep dark surfaces
- Subtle gradients
- Controlled contrast
- Atmospheric layers
- Intentional empty space

**Layered System:**
1. Void — Deep foundation, create focus and depth
2. Atmosphere — Soft environmental elements, create life
3. Light — Controlled illumination, guide attention
4. Presence — Living Core, interactive response, create connection

**Material Language:** Precision + Luxury + Technology
- Glass, soft reflections, deep surfaces, subtle transparency

---

## Typography System

**Display:** Cormorant Garamond
- Purpose: Create emotional impact
- Used for: Hero statements, major introductions, important moments

**Interface:** Manrope
- Purpose: Deliver information with clarity
- Used for: Body text, navigation, metadata, labels

**Typography Philosophy:** Premium, Clear, Modern, Calm, Confident

---

## Color System

**Environment:**
- Void: #07070a (background — depth, focus, mystery)
- Graphite: #101018 (surface — precision, stability, quality)
- Mist: rgba(255, 255, 255, 0.06) (border — calm, space, lightness)

**Accent:**
- Neon Purple: #8a2eff (signature energy — presence, intelligence, creativity)
- Glow: #b96cff

**Text:**
- Primary: #f5f5f7
- Muted: #7a7a8e
- Faint: #4a4a5a

**Neon Purple Usage Rules:**
- Use for: Important interaction states, core energy, focus moments, key highlights
- Do not use for: Large decorative areas, every component, constant visual noise

---

## Motion Language System

**Philosophy:** Motion is communication, not decoration.

**Motion Principles:**
1. Intentional Movement — Every animation must answer "Why is this moving?"
2. Organic Behavior — Smooth acceleration, soft deceleration, natural rhythm
3. Spatial Awareness — Elements exist in space with depth and layer transitions

**Timing System:**
- Micro Interaction: 150ms–250ms (buttons, small responses)
- Standard Interaction: 300ms–600ms (components, reveals)
- Cinematic Transition: 800ms–1500ms+ (page transitions, major reveals)

**Preferred Easing:**
- Smooth curves, natural acceleration, controlled deceleration

**Avoid:**
- Bounce, elastic, overshoot, aggressive spring effects

**Reduced Motion:** Respect user preferences. Maintain identity without animation.

---

## Navigation System

**Three Primary Zones:**
1. **Brand Zone** — LUMORA mark, Core presence (identity)
2. **Navigation Zone** — Main navigation items, project exploration (exploration)
3. **Action Zone** — Start a project, contact (conversion)

**Navigation Behavior:** Floating, calm, intelligent, accessible

**Navigation Items:**
- Work
- System
- About
- Docs

**Single CTA:** Start a Project

---

## Hero Experience System

**Philosophy:** The Hero is not a banner. It is an entrance into the LUMORA world.

**Structure:**
1. Environment (Deep Void, atmospheric depth, controlled light)
2. Living Core Presence (introduced as central presence)
3. Main Message (short, memorable, confident)
4. Supporting Context
5. Exploration Direction

**Main Message Direction:**
"Designing Digital Experiences That Feel Alive."

**Hero CTA:** Feel like an invitation, not a command.

**Hero Success:** User thinks "This is not just a website. This is an experience."

---

## Projects Worlds System

**Philosophy:** Projects are not portfolio cards. Each is a unique digital world.

**Shared DNA:** LUMORA visual language, cinematic motion, premium spacing, Living Core relationship

**Project Worlds:**

| World | Category | Core Emotion | Motion |
|-------|----------|-------------|--------|
| OMNIA | Luxury Experience | Elegance | Slow and graceful |
| NEXORA | AI / SaaS Experience | Intelligence | Controlled and intelligent |
| VELOCITY | Automotive Experience | Energy | Energetic but controlled |

**Project Structure:** Introduction → Atmosphere → Challenge → Design Thinking → Solution → Experience Result

---

## About Experience System

**Philosophy:** Not a biography page. A connection experience.

**Structure:** Introduction → Personal Philosophy → Design Approach → Capabilities → Connection

**Human Presence Principle:** Built with technology but always feels human.

**Core Behavior in About:** More subtle, warmer, more human. Represents connection.

---

## Contact Experience System

**Philosophy:** Not a form submission. An invitation.

**Structure:** Emotional Transition → Invitation Message → Project Connection → Contact Action → Final Presence

**Contact Message:** Availability + Collaboration + Intent

**Final Question:** "Did the user feel invited to connect?"

---

## Architecture

**Framework:** Next.js 16 (App Router)
**UI:** React 19
**Language:** TypeScript 5 (strict)
**Styling:** Tailwind CSS v4
**Animation:** Framer Motion + GSAP + Lenis

**Component Categories:**
- `components/ui/` — Reusable primitives (button, card, badge, counter, reveal, section-header)
- `components/layout/` — Structural components (navigation, footer, cursor, smooth-scroll)
- `components/sections/` — Experience sections (hero, about, cta)
- `constants/` — Content and configuration
- `tokens/` — JSON design tokens
- `styles/` — Global styles and CSS variables
- `skills/` — AI collaboration skill definitions

**Route Structure:**
- `/` — Home experience (Hero + Core Experience + Selected Works + Design Philosophy + Process + About + Contact)
- `/work` — Portfolio overview
- `/work/omnia` — OMNIA project world
- `/work/nexora` — NEXORA project world
- `/work/velocity` — VELOCITY project world
- `/system` — Design system documentation
- `/docs` — Technical documentation
- `/about` — About experience
- `/contact` — Contact experience

---

## Project Phases

### Phase 1: Foundation Alignment ✓
- [x] Project audit and cleanup
- [x] Identity correction
- [x] Navigation alignment
- [x] Typography alignment
- [x] Legacy section archival
- [x] Route structure creation
- [x] Dependency cleanup

### Phase 2: Core Experience
- [ ] Living Core component implementation
- [ ] Home experience redesign
- [ ] Hero experience cinematic refinement
- [ ] Display typography applied to components
- [ ] Design token consolidation

### Phase 3: Project Worlds
- [ ] Work overview page
- [ ] OMNIA world
- [ ] NEXORA world
- [ ] VELOCITY world

### Phase 4: Supporting Pages
- [ ] System page
- [ ] Docs page
- [ ] About experience
- [ ] Contact experience

### Phase 5: Polish
- [ ] Motion refinement
- [ ] Performance optimization
- [ ] Accessibility audit
- [ ] Cross-device testing
- [ ] Production deployment

---

## Quality Gates

Before any implementation is approved, verify:

**Identity:** Does it feel like LUMORA?
**Quality:** Does it feel premium?
**Experience:** Does it create curiosity and trust?
**Motion:** Does it communicate meaning?
**Simplicity:** Does it earn its presence?

---

## Non-Negotiable Rules

1. Do not copy temporary design trends
2. Do not add elements without purpose
3. Do not sacrifice experience for features
4. Do not create random motion
5. Do not present the Core as decoration
6. Do not build generic portfolio patterns
7. Do not use hardcoded visual values
8. Do not skip accessibility considerations
9. Do not ignore reduced motion preferences
10. Do not deploy without validation

---

## Documentation References

| Document | Purpose |
|----------|---------|
| DESIGN.md | Complete design constitution (3,338 lines) |
| AGENTS.md | Working rules and principles |
| ARCHITECTURE.md | Technical architecture patterns |
| SKILL_ARCHITECTURE.md | Intelligence layer and skill system design |
| SKILL_SPECIFICATION.md | Engineering standard for all LUMORA Skills |
| This file | Central project reference |
| CLEANUP_REPORT.md | Previous cleanup sprint results |
| AUDIT_REPORT.md | Original audit findings |

---

## Review History

| Date | Action | Status |
|------|--------|--------|
| 2026-08-03 | Initial project audit | Complete |
| 2026-08-03 | Cleanup & Alignment Sprint v1 | Complete |
| 2026-08-03 | Alignment Sprint v2 | Complete |
| 2026-08-03 | Final Foundation Lock v3 | Complete |
| 2026-08-03 | Skill Architecture Design | Complete |
| 2026-08-03 | Skill Specification Standard | Complete |
