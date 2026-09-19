# LUMORA — Motion Grammar

## Status

**Phase:** 0D.1 — Motion Identity Grammar

**Classification:** SYSTEM DESIGN + LAB

**Date:** September 18, 2026

---

## 1. Motion Thesis

LUMORA motion is a behavioral identity system.

Motion does not decorate the experience. Motion reveals structure, communicates relationship, and establishes spatial continuity. The LUMORA world moves with intention. Every movement answers a question: "Why does this exist?"

Motion should feel like a designed physical environment, not a collection of animation effects.

### Core Principle

> "Motion reveals structure; it does not decorate structure."

### LUMORA Motion Should Feel

- **Cinematic** — Carefully directed timing and spacing
- **Calm** — Perceptual quiet, even during movement
- **Intelligent** — Every motion communicates something
- **Human** — Natural deceleration, organic rhythm
- **Precise** — Controlled movement along intentional axes
- **Premium** — Restrained elegance over spectacle
- **Alive** — Environmental presence without perpetual motion

### LUMORA Motion Should NOT Feel

- Excessive cinematic spectacle
- Constant movement
- Generic SaaS motion
- Aggressive UI transitions
- Flashy tech animations
- Animation-for-animation's-sake
- Trendy scroll effects
- Excessive parallax
- Elastic/bouncy interactions
- Perpetual motion everywhere

---

## 2. Identity and Motion Relationship

The LUMORA identity system has a strict separation between signature and environment.

### Architectural Boundaries

| System | Role | Motion Behavior |
|--------|------|-----------------|
| **LUMORA Identity** | Signature | Still / composed |
| **M Core** | Compact identity expression | Still / composed |
| **Future B2 Symbol** | Relational symbol | Separate future track |
| **Living Core** | Experience heartbeat | Own temporal behavior |
| **Motion** | Shared environmental grammar | Environmental movement |
| **Sound** | Future sensory grammar | Future phase |

### Critical Rule

The environment moves.
The identity remains composed.

Do NOT:
- Turn the M Core into an animated "living logo"
- Animate the wordmark as a personality effect
- Make the logo pulse
- Add glow trails, energy waves, orbiting particles, lens effects, reactor effects, liquid morphing, portals, apertures, or other generic AI/tech visual language

Motion enhances the environment.
It does not make the identity recognizable.

---

## 3. Motion Hierarchy

LUMORA motion is organized into six levels. Each level has distinct duration ranges, easing families, and semantic purposes.

### LEVEL 0 — STATIC

No motion necessary. The default state.

**Duration:** 0ms
**Easing:** N/A
**Use:** Most content at rest. Typography. Spacing. Composition.

---

### LEVEL 1 — MICRO INTERACTION

Hover, focus, press, selection, cursor proximity.

**Duration:** 80ms – 200ms
**Primary easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (deceleration)
**Properties:** scale, opacity, color, border-opacity
**Use:** Button hover/tap, card lift, link highlight, focus ring, cursor state change
**Stagger:** Never
**Reduced motion:** Preserve final state without transition

---

### LEVEL 2 — LOCAL REVEAL

Component or section-level appearance.

**Duration:** 400ms – 800ms
**Primary easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (deceleration)
**Properties:** opacity, y (up to 24px), clip-path, filter(blur)
**Use:** Scroll reveals, content entrance, element appearance
**Stagger:** Up to 120ms between related siblings. Never exceed 8 items.
**Reduced motion:** Jump to final state (opacity: 1, y: 0, clip-path: none)

---

### LEVEL 3 — COMPOSITIONAL MOVEMENT

Multiple elements establishing spatial relationships.

**Duration:** 600ms – 1400ms
**Primary easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (deceleration) or `power3.out` (GSAP)
**Properties:** opacity, y, x, scaleX, scaleY, clip-path, spacing
**Use:** Hero entrance sequences, world assembly, threshold arrivals, section transitions
**Stagger:** 80ms – 140ms. Maximum 6 staggered elements before grouping.
**Reduced motion:** All elements appear simultaneously. Opacity-only transitions preferred.

---

### LEVEL 4 — ENVIRONMENTAL MOVEMENT

Page/atmosphere/Living Core/world-level motion.

**Duration:** 10s – 80s (continuous), 1.6s – 3.6s (state transitions)
**Primary easing:** `ease-in-out` (continuous breathing), `cubic-bezier(0.16, 1, 0.3, 1)` (state changes)
**Properties:** clip-path, opacity, r (radius), rotate, scale, stroke-opacity, filter
**Use:** Living Core breathing, directional light drift, atmosphere breathing, world ambient keyframes
**Loop:** Yes (continuous). Speed modulation via semantic state.
**Reduced motion:** Halt all continuous animation via global CSS rule. Living Core: display static frame.

---

### LEVEL 5 — TRANSITIONAL CONTINUITY

Motion connecting meaningful states across sections or pages.

**Duration:** Not primarily time-defined. Scroll-linked handoff maps scroll progress to spatial position. Temporal handoff: 1200ms – 2400ms.
**Primary easing:** `power2.inOut` (scroll interpolation), `power3.out` (temporal settling)
**Properties:** opacity, scale, x, y, scaleX, scaleY, clip-path
**Use:** Section transitions, world transitions, scroll-linked continuity, page transitions (future)
**Stagger:** Never (continuous spatial mapping)
**Reduced motion:** Instant state change. Spatial position preserved without transition.

---

## 4. Motion Vocabulary

LUMORA uses six primary motion behaviors. Each has a distinct semantic purpose and visual signature.

### REVEAL

Something becomes perceptually available.

**Semantic meaning:** "This exists and is now visible to you."

**Properties:** opacity, y (up to 24px), clip-path (inset from bottom)
**Duration:** 400ms – 800ms
**Easing:** `cubic-bezier(0.16, 1, 0.3, 1)`
**Trigger:** Scroll intersection (once), mount with delay
**Use cases:**
- Text entering the visual hierarchy
- Section becoming readable
- Image becoming present
- Card appearing in viewport

**Reduced motion:** Jump to final state (opacity: 1, translate: none, clip-path: none)

---

### ALIGN

Separate elements establish a spatial relationship.

**Semantic meaning:** "These elements belong together."

**Properties:** opacity, y, x, spacing, scale
**Duration:** 600ms – 1200ms
**Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` or `power3.out`
**Trigger:** Mount, scroll intersection, state change
**Use cases:**
- Title + supporting text settling into composition
- Cards arranging into a grid
- Navigation elements becoming spatially resolved
- World structure elements assembling

**Stagger:** 80ms – 120ms between related groups
**Reduced motion:** All elements appear simultaneously at final position

---

### RELEASE

An element stops being constrained and resolves into its final state.

**Semantic meaning:** "The constraint is lifted. Here is the complete form."

**Properties:** clip-path, scaleY, scaleX, spacing, opacity
**Duration:** 800ms – 1400ms
**Easing:** `power3.out` (GSAP) or `cubic-bezier(0.16, 1, 0.3, 1)`
**Trigger:** Scroll threshold, timeline position, mount sequence
**Use cases:**
- Clip-path reveal of masked typography
- Compressed composition opening into final spacing
- Headline emerging from constrained clip
- World frame expanding into full view

**Reduced motion:** Display final unclipped state immediately

---

### DRIFT

Very subtle environmental movement. Used for atmosphere rather than information.

**Semantic meaning:** "The environment is alive."

**Properties:** opacity, scale (0.98 – 1.02), x/y (±4px), rotate (±1deg)
**Duration:** 14s – 34s (continuous)
**Easing:** `ease-in-out` (CSS), `sine.inOut` (GSAP)
**Trigger:** Always active
**Use cases:**
- Atmosphere layer breathing
- Directional light sweep
- Mist/ambient movement
- Environmental field pulsing

**Restraint rule:** Maximum 3 drift layers active simultaneously per viewport. Each at different rates to prevent rhythmic synchronization.

**Reduced motion:** Halt all drift. Display static frame.

---

### HANDOFF

A spatial relationship continues from one state/page/section into another.

**Semantic meaning:** "The world continues beyond what you see."

HANDOFF has two distinct temporal modes:

#### A. Temporal Handoff

A time-based transition where an element moves from one spatial position to another across a meaningful boundary.

**Trigger:** Mount sequence, timeline position, state change
**Duration:** 1200ms – 2400ms (time-based)
**Easing:** `power3.out` or `cubic-bezier(0.16, 1, 0.3, 1)`
**Properties:** x, y, scale, opacity
**Behavior:** Deterministic time-based interpolation. Element reaches final position regardless of user scroll.
**Use cases:**
- Hero-to-content spatial continuity
- World entrance frame settling
- Post-reveal compositional adjustment

#### B. Scroll-Linked / Spatial Handoff

A scroll-driven transition where element position is a function of scroll progress, not time.

**Trigger:** Scroll position across section boundaries
**Duration:** Not the primary semantic definition. Scroll range determines the mapping, not clock time.
**Easing:** `power2.inOut` (applied to progress interpolation)
**Properties:** x, y, scale, opacity, clip-path
**Behavior:** Continuous spatial mapping. Element position tracks scroll progress 1:1. At scroll position 0%, element is at start state. At scroll position 100%, element is at end state. Between, element interpolates spatially.
**Interpolation:** Linear mapping from scroll progress to property values. Optional easing applied to the interpolation curve, not the scroll itself.
**Settling behavior:** At scroll boundaries (section entry/exit), elements may use a brief settling adjustment (200ms–400ms) to lock into their final composition position. This settling is time-based and uses `power2.out`.
**Use cases:**
- Section transition lines and dots
- Scroll-linked depth parallax
- Atmosphere layer continuity between sections
- World transition structural elements

**Reduced motion (both modes):** Instant position change. Spatial position preserved without transition.

---

### PRESENCE

A behavioral category describing how the Living Core system maintains continuous perceptual aliveness.

**Semantic meaning:** "This system is conscious."

PRESENCE is primarily Living Core behavior. It is NOT itself a global timing token. It should not be used as a generic term for "continuous animation" outside the Living Core context.

#### Temporal Character

PRESENCE is characterized by:

- **Multi-rate oscillation** — Multiple properties animate at different frequencies simultaneously (e.g., 8s pulse, 10s ring, 12s field, 14s trace). This prevents rhythmic predictability.
- **Rate variation** — Semantic states modulate animation-duration. Dormant: slowest (14s–22s). Focused: fastest (6s–8s). The rate is a function of system state, not a fixed value.
- **Amplitude control** — Movement amplitude is small and property-dependent. Opacity: ±0.3 range. Scale: ±5% range. Radius: ±10% range. Amplitude increases slightly in Focused state, decreases in Dormant.
- **State dependency** — PRESENCE behavior is not constant. It responds to 7 semantic states (Dormant, Aware, Focused, Rest, etc.) by modulating rate, amplitude, and which layers are active.
- **Continuity** — PRESENCE animations are infinite-loop by nature. They do not start or stop in response to user interaction. They are always running, representing the system's ongoing consciousness.
- **Organic non-repetition** — Because multiple rates run simultaneously, the combined pattern never exactly repeats within human-perceptible timeframes.

#### Properties

r (radius), opacity, stroke-opacity, clip-path (organic morph), rotate

#### Reduced-Motion Equivalent

PRESENCE has a specific reduced-motion behavior:

1. Halt all continuous CSS keyframe animations
2. Halt all GSAP-driven continuous movement
3. Display a static, representative frame of the Living Core (the Dormant state visual)
4. Preserve semantic state color/filter changes (these are informational, not decorative)

This is NOT the same as "remove all animation." The static frame communicates that the system exists. The color/filter changes communicate state.

#### Critical Rule

PRESENCE must NOT become generic infinite animation. It is exclusively for the Living Core system. Do not use PRESENCE behavior (multi-rate oscillation, organic morphing, state-dependent amplitude) for standard UI elements.

**Reduced motion:** Display static Living Core frame. Preserve state color/filter changes. Halt all continuous animation.

---

## 5. Timing Grammar

LUMORA timing is designed around perception, not arbitrary scales.

### Duration Scale

| Token | Duration | Intended Use | Forbidden Use |
|-------|----------|--------------|---------------|
| `--motion-instant` | 0ms | State snap | — |
| `--motion-micro` | 80ms – 200ms | Hover, focus, press, cursor | Page transitions, reveals |
| `--motion-short` | 400ms – 600ms | Local reveals, component entrance | Hero sequences, environmental |
| `--motion-medium` | 800ms – 1200ms | Compositional movement, world assembly | Micro interactions |
| `--motion-long` | 1400ms – 2400ms | Transitional continuity, threshold | Hover states, button feedback |
| `--motion-ambient` | 10s – 80s | Environmental breathing (DRIFT) | UI transitions, reveals |

Note: PRESENCE is a behavioral category (Section 4), not a timing token. Its temporal characteristics are defined by multi-rate oscillation, not a single duration value.

### Duration Principles

1. **Perceptual calm** — LUMORA does not feel fast. It feels deliberate.
2. **Maximum recommended duration** — 2400ms for any non-continuous animation. Beyond this, the user perceives lag.
3. **Minimum recommended duration** — 80ms for micro interactions. Below this, the motion feels instantaneous and loses its communicative value.
4. **Continuous animation** — Duration is not meaningful. Frequency and amplitude matter instead.

### Stagger Rules

**Appropriate stagger:**
- 80ms – 120ms between related siblings in a group
- Up to 140ms for hero entrance sequences (cinematic pacing)
- Maximum 8 staggered elements before grouping into waves

**When stagger becomes excessive:**
- More than 10 items staggered individually
- Stagger delay exceeding 1000ms total sequence
- Stagger applied to unrelated elements

**When movement should be replaced by opacity/clip/scale:**
- When translation distance exceeds 40px, prefer opacity + clip-path
- When the movement is purely decorative, use opacity-only
- When the element has no spatial relationship to its origin

**When movement should not occur at all:**
- When the content is already visible and stable
- When the user did not trigger the change
- When the motion communicates no meaning
- When reduced-motion is active

---

## 6. Easing Grammar

LUMORA uses a compact easing system. Four named curves cover all needs.

### Composed Enter

**Name:** `ease-out`
**Value:** `cubic-bezier(0.16, 1, 0.3, 1)`
**GSAP equivalent:** `power3.out`
**Feeling:** Deceleration. Elements arrive with controlled momentum and settle naturally.
**Use:** All reveals, entrances, content appearance, scroll-linked transitions

---

### Composed Exit

**Name:** `ease-in`
**Value:** `cubic-bezier(0.55, 0.085, 0.68, 0.53)`
**GSAP equivalent:** `power2.in`
**Feeling:** Acceleration. Elements depart with gathering speed.
**Use:** Departure transitions, menu closing, element dismissal

---

### Structural Settle

**Name:** `ease-in-out`
**Value:** `cubic-bezier(0.65, 0, 0.35, 1)`
**GSAP equivalent:** `power2.inOut`
**Feeling:** Balanced transition. Symmetrical acceleration and deceleration.
**Use:** Layout shifts, compositional adjustments, world assembly, threshold transitions

---

### Environmental Drift

**Name:** `drift`
**Value:** `cubic-bezier(0.37, 0, 0.63, 1)` (CSS) or `sine.inOut` (GSAP)
**Feeling:** Organic, continuous, unhurried. No sharp acceleration.
**Use:** Atmosphere breathing, directional light, environmental continuous animation

---

### Easing Anti-Patterns

The following easing curves are **forbidden** in LUMORA:

- **Bounce** — `cubic-bezier(0.68, -0.55, 0.27, 1.55)` or similar overshoot
- **Elastic** — Spring physics with overshoot
- **Cartoon spring** — High stiffness, low damping
- **Exaggerated overshoot** — Any curve that passes beyond the target value
- **"Tech" easing** — Sharp acceleration curves mimicking digital/tech aesthetics

The feeling should be "controlled physicality" rather than "animated UI."

---

## 7. Movement Principles

LUMORA establishes a priority order for how elements move.

### Movement Priority

1. **Relationship** — Does the motion communicate how elements relate?
2. **Opacity** — Can the change be communicated through visibility alone?
3. **Clip** — Can a clip-path reveal communicate the emergence?
4. **Small translation** — Does a subtle shift (≤24px) clarify hierarchy?
5. **Scale** — Does a small scale change (0.95–1.05) communicate depth or focus?
6. **Rotation** — Does a slight rotation communicate spatial orientation? (Use sparingly)

### When to Use Each Type

**Opacity only:**
- Content appearing or disappearing
- State changes where position is stable
- Atmospheric layer changes
- Reduced-motion fallback

**Clip-path:**
- Typography reveal (masked text emerging)
- Image reveal (constrained becoming unconstrained)
- Section transition (opening a new spatial zone)
- World entrance (frame expanding)

**Translation (y/x):**
- Hierarchical relationship (elements entering from different directions)
- Scroll-linked movement
- Compositional settling (elements finding their spatial position)
- Never exceed 40px translation for standard UI

**Scale:**
- Depth communication (foreground/background relationship)
- Focus state (element gaining importance)
- Environmental response (Living Core scale modulation)
- Range: 0.95 – 1.05 for standard UI. Living Core除外.

**Rotation:**
- Spatial orientation in world experiences (OMNIA, NEXORA, VELOCITY)
- Environmental trace movement
- Never for standard UI elements
- Range: ±2deg maximum for standard UI

---

## 8. Anti-Patterns

The following are explicitly forbidden in LUMORA motion.

### Cinematic Anti-Patterns

- **Huge zooms** — Scale changes exceeding 2x
- **Camera shake** — Random position oscillation
- **Constant parallax** — Every layer at different scroll speeds
- **Dramatic wipes** — Full-screen clip-path transitions
- **Particle explosions** — Burst particle systems
- **Excessive blur** — Filter blur exceeding 20px
- **Heavy glow** — Box-shadow or drop-shadow with large spread
- **Rapid cuts** — Quick sequential scene changes
- **Fake 3D camera movement** — Perspective transforms mimicking 3D space

### Technical Anti-Patterns

- **Generic bounce** — Elastic overshoot easing
- **Elastic/spring** — Physics-based springs with overshoot
- **Cartoon spring** — High stiffness, underdamped oscillation
- **Exaggerated overshoot** — Any easing passing beyond target
- **"Tech" easing gimmicks** — Sharp curves mimicking digital aesthetics
- **Glow trails** — Animated shadow following movement
- **Energy waves** — Radiating ring effects
- **Orbiting particles** — Circular particle motion around identity
- **Lens effects** — Faux optical lens flare
- **Reactor effects** — Glowing core with energy emission
- **Liquid morphing** — Organic blob transitions
- **Portal effects** — Warp/tunnel transitions
- **Aperture effects** — Camera iris animations

### Identity Anti-Patterns

- Logo pulse
- Logo breathing
- Logo glow
- Logo morphing
- Logo distortion
- Logo particle emission
- Logo waveform behavior
- M Core orbital motion
- Wordmark personality animation
- Identity color shift through animation

### UI Anti-Patterns

- Animation everywhere (perpetual motion)
- Decorative movement without meaning
- Scroll effects without purpose
- Parallax on every layer
- Elastic/bouncy button interactions
- Aggressive UI transitions
- Flash attention-seeking effects
- Loading spinners without purpose

---

## 9. Living Core Boundary

The Living Core is architecturally independent from all other systems.

### Motion Ownership

| Motion Type | Belongs To | Notes |
|-------------|-----------|-------|
| Organic clip-path morphing | Living Core | 12s cycle, unique to Core |
| Source light breathing | Living Core | 8s cycle |
| Ring field breathing | Living Core | 10s–14s cycles, multi-rate |
| Trace rotation | Living Core | 40s–65s cycles |
| Atmosphere scale/opacity | Living Core | 10s cycle |
| Semantic state modulation | Living Core | Speed changes via phase |
| Scroll velocity drift | Living Core | Continuous, RAF-linked |
| Event-driven scale/position | Living Core | 1.4s–3.0s transitions |

### Environmental Motion (Shared)

| Motion Type | Belongs To | Notes |
|-------------|-----------|-------|
| Atmosphere layer drift | Environment | 14s–34s cycles |
| Directional light breathing | Environment | 22s–28s cycles |
| Section transition lines | Environment | Scroll-linked |
| World ambient keyframes | Environment | 6s–16s cycles per world |
| Scroll atmosphere phase | Environment | Continuous RAF |

### Standard UI Motion (Shared)

| Motion Type | Belongs To | Notes |
|-------------|-----------|-------|
| Hover/tap micro interactions | UI | 80ms–200ms |
| Scroll reveals | UI | 400ms–800ms |
| Navigation transitions | UI | 500ms–700ms |
| Card interactions | UI | 400ms–1200ms |
| Button feedback | UI | 80ms–200ms |

### Anti-Imitation Rules

Do NOT use Living Core's pulse behavior as a universal LUMORA animation motif.

The Living Core may have its own temporal behavior (organic morphing, multi-rate breathing, orbital traces). The rest of LUMORA should not imitate it.

Do NOT:
- Apply organic clip-path morphing to standard UI
- Apply multi-rate breathing to navigation or cards
- Apply orbital rotation to environmental decoration
- Use Core's pulse rhythm for other components

---

## 10. Logo Motion Boundary

### Default State

WORDMARK: Composed/static.
M CORE: Composed/static.

### Interaction Response

Only minimal state response if genuinely necessary:
- Hover: Opacity shift only (if needed)
- Focus: Focus ring (standard accessibility)
- No continuous pulse, breathing, orbiting, glow, morphing, distortion, liquid deformation, particle emission, or waveform behavior

### Identity Recognition

The identity should remain recognizable when motion is removed entirely.

Motion enhances the environment.
It does not make the identity recognizable.

---

## 11. Reduced-Motion Policy

Accessibility is part of the grammar, not a late patch.

### Core Principle

**Preserve meaning. Remove unnecessary movement.**

Not every animation should simply disappear when reduced motion is active. The policy classifies motion by its semantic role, then applies the appropriate reduction strategy.

### Motion Classification for Reduced-Motion

Every production animation falls into one of two categories:

#### Decorative Motion

Motion that exists for atmosphere, aesthetic pleasure, or environmental aliveness. It does not communicate information. Removing it does not harm understanding.

**Examples:**
- Atmosphere drift layers
- Directional light breathing
- Environmental field pulsing
- Living Core continuous traces
- Ambient keyframe loops

**Reduced-motion behavior:** Remove or freeze. Display the static frame at the animation's midpoint or end state. The experience loses atmospheric richness but retains all information.

#### Informational / Structural Motion

Motion that communicates state, hierarchy, spatial relationship, or content presence. Removing it without replacement would harm understanding.

**Examples:**
- Scroll reveals (content becoming visible)
- World assembly sequences (establishing spatial composition)
- Section transitions (communicating spatial continuity)
- Hero entrance (establishing visual hierarchy)
- Navigation state changes (communicating interaction state)
- Counter animation (communicating quantitative change)

**Reduced-motion behavior:** Preserve the state change while minimizing or eliminating movement. The final state must still be reached. The information must still be communicated. Only the transitional movement is reduced.

**Strategies by motion type:**
- **Opacity changes:** Preserve. Opacity is informational, not movement.
- **Position changes:** Jump to final position. No transition.
- **Clip-path changes:** Jump to final clip state. No transition.
- **Scale changes:** Jump to final scale. No transition.
- **Stagger:** All elements appear simultaneously. Remove sequential delay.
- **Scroll-linked:** Jump to final state at scroll threshold. No interpolation.

### Implementation Architecture

The current LUMORA implementation uses a two-layer approach:

**Layer 1 — Global CSS safeguard:**

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

This is a safety net, not the primary strategy. It catches any animation not individually handled.

**Layer 2 — Per-component semantic handling:**

```tsx
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (prefersReducedMotion) {
  // Set immediate visible state — preserve meaning, remove movement
  gsap.set(element, { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" });
} else {
  // Proceed with animation
}
```

This is the primary strategy for informational motion. It preserves the final state while eliminating the transition.

### Per-Vocabulary Reduced-Motion Behavior

| Vocabulary | Category | Reduced-Motion Behavior |
|------------|----------|------------------------|
| **REVEAL** | Informational | Jump to final state (opacity 1, no translate, no clip) |
| **ALIGN** | Informational | All elements appear simultaneously at final position |
| **RELEASE** | Informational | Display final unclipped state immediately |
| **DRIFT** | Decorative | Halt all drift. Display static frame. |
| **HANDOFF** | Informational | Instant position change. Spatial position preserved. |
| **PRESENCE** | Decorative | Display static Living Core frame. Preserve state color/filter. |

### Living Core Reduced Motion

The Living Core requires special handling because it mixes decorative and informational elements:

1. Halt all CSS keyframe animations (organic morph, breathing, traces) — **decorative**
2. Halt all GSAP-driven environmental movement — **decorative**
3. Display a static, representative frame of the Core — preserves presence
4. **Maintain** semantic state color/filter changes — these are **informational**, not decorative

### Flash Prevention

The global CSS rule (`animation-duration: 0.01ms`) may cause brief visual flash for elements transitioning from opacity 0 to 1. JS-level handling is more graceful for critical entrance sequences. Both layers should coexist.

---

## 12. Mobile Motion Policy

Mobile is not a degraded desktop. It is a focused expression.

### Mobile Motion Grammar Principles

Mobile motion follows the same six vocabulary behaviors (REVEAL, ALIGN, RELEASE, DRIFT, HANDOFF, PRESENCE). The grammar does not change on mobile. The expression adapts.

The core principles are:

- **Fewer simultaneous motions** — Reduce the number of concurrent animations to maintain clarity on smaller viewports
- **Shorter travel** — Translation distances decrease because spatial hierarchy is tighter
- **Shallower stagger** — Fewer staggered elements because compositional groups are smaller
- **Fewer environmental layers** — Drift and atmosphere layers reduce to prevent visual competition with content
- **Lower visual competition** — Content must win. Motion must yield.

### Initial Implementation Constraints

The following numerical constraints are starting points for 0D.3 production integration. They are not immutable grammar laws. They should be validated through visual testing and adjusted if the experience requires it.

| Constraint | Starting Value | Notes |
|------------|---------------|-------|
| Fewer animations | 40–60% reduction from desktop count | Validated per-component |
| Max staggered elements | 4 (vs 8 desktop) | Adjust based on group size |
| Max translation distance | 16px (vs 24px desktop) | Tighter spatial hierarchy |
| Max concurrent animations | 2 | Prevent visual competition |
| Max drift layers | 1 (vs 3 desktop) | Content wins over atmosphere |

### Grammar-Level Mobile Adaptation

The motion grammar itself defines adaptation through principle, not prescription:

| Level | Desktop Behavior | Mobile Principle |
|-------|-----------------|------------------|
| **LEVEL 1 (Micro)** | 80–200ms hover/tap | Same timing. Response remains immediate. |
| **LEVEL 2 (Local Reveal)** | 400–800ms scroll reveals | Same duration range. Translation distance reduces. |
| **LEVEL 3 (Compositional)** | 600–1400ms multi-element | Fewer elements. Shorter stagger. Simpler compositions. |
| **LEVEL 4 (Environmental)** | 10s–80s continuous | Fewer layers. Same temporal character. Reduced amplitude. |
| **LEVEL 5 (Transitional)** | Scroll-linked spatial | Same spatial mapping. Reduced scroll range. |

### Specific Component Guidance

- **Hero:** Atmosphere simplified, depth frame hidden, spatial mark centered, Core scaled to 196px
- **Worlds:** Assembly sequences simplified, depth parallax removed, ambient keyframes reduced
- **Navigation:** Menu transitions retained but simplified
- **Reveals:** Same timing but reduced translation distance
- **Living Core:** Scaled to 196px, simplified particle/trace behavior

### Mobile Anti-Patterns

- Don't shrink desktop and ship it
- Don't remove all motion (mobile should still feel alive)
- Don't use identical stagger counts
- Don't maintain complex parallax on low-end devices

---

## 13. Cinematic Identity

### How LUMORA Achieves Cinematic Feel

LUMORA feels cinematic through:

- **Timing** — Deliberate pacing, not rushed
- **Spacing** — Generous pauses between movements
- **Anticipation** — Brief stillness before significant reveal
- **Release** — Controlled deceleration to rest
- **Continuity** — Spatial relationships maintained across transitions
- **Silence** — Restraint. Not everything moves.
- **Composition** — Motion reinforces visual hierarchy

### How LUMORA Does NOT Achieve Cinematic Feel

- Huge zooms
- Camera shake
- Constant parallax
- Dramatic wipes
- Particle explosions
- Excessive blur
- Heavy glow
- Rapid cuts
- Fake 3D camera movement

The distinction is critical: cinematic through restraint, not through spectacle.

---

## 14. Motion Lab Reference

The motion lab is located at `experiments/motion-lab/`.

### Lab Structure

```
experiments/motion-lab/
├── index.html          # Main lab page
├── styles.css          # Lab-specific styles
├── reveal.html         # REVEAL vocabulary demo
├── align.html          # ALIGN vocabulary demo
├── release.html        # RELEASE vocabulary demo
├── drift.html          # DRIFT vocabulary demo
├── handoff.html        # HANDOFF vocabulary demo
└── presence.html       # PRESENCE vocabulary demo
```

### Lab Usage

Each demo page contains:
- Visual example of the motion behavior
- Trigger mechanism (button, scroll, automatic)
- Duration and easing documentation
- Motion level classification
- Intended semantic purpose
- Reduced-motion behavior demonstration
- Desktop vs mobile comparison

### Lab Rules

1. The lab is a research environment. It does not replace production components.
2. The lab demonstrates candidate grammar visually.
3. The lab allows comparison without requiring main website changes.
4. Visual language is consistent with LUMORA: dark, quiet, editorial, precise.
5. No decorative UI unrelated to the system.

---

## 15. Production Integration Strategy

### Phase 0D.1 — Grammar + Lab (Current)

Define the motion language. Build the lab. Validate candidates.

### Phase 0D.2 — Sonic Identity Grammar

Define how sound and motion create a shared sensory grammar.

### Phase 0D.3 — Experience Surface Integration

Production component-by-component integration.

### Integration Priority

| Priority | Component | Motion Level | Notes |
|----------|-----------|--------------|-------|
| 1 | Reveal system (ui/reveal.tsx) | LEVEL 2 | Already aligns. Refine to grammar tokens. |
| 2 | Navigation transitions | LEVEL 1–2 | Already aligns. Verify reduced-motion. |
| 3 | Button/Card interactions | LEVEL 1 | Already aligns. Verify easing consistency. |
| 4 | Hero entrance sequences | LEVEL 3 | Already aligns. Refine timing to grammar. |
| 5 | World assemblies | LEVEL 3 | Already aligns. Refine stagger to grammar. |
| 6 | Section transitions | LEVEL 5 | Already aligns. Refine scrub to grammar. |
| 7 | Living Core | LEVEL 4 | Preserve existing. Document boundary. |
| 8 | Atmospheric layers | LEVEL 4 | Already aligns. Reduce drift count if needed. |
| 9 | Counter animation | LEVEL 2 | Refine easing to canonical curve. |
| 10 | Page transitions | LEVEL 5 | Future phase. |

### Existing Animation Refinement List

During 0D.3, revisit:

1. `counter.tsx` — Replace custom easing `1 - Math.pow(1 - progress, 3)` with canonical `cubic-bezier(0.16, 1, 0.3, 1)`
2. Remove unused token keyframes (`pulse-soft`, `float`) from production CSS or integrate them intentionally
3. Remove disabled custom cursor component (`custom-cursor.tsx`)
4. Verify all JS-level reduced-motion checks use consistent pattern
5. Audit hero-v3 mobile simplification for completeness

---

## 16. What is NOT Part of LUMORA Motion

The following are explicitly excluded from LUMORA's motion identity:

### Not Motion Identity

- Logo animation
- Living Core used as universal animation motif
- Particle systems
- Physics-based springs with overshoot
- Elastic/bouncy interactions
- Scroll-triggered parallax on every element
- Continuous rotation of UI elements
- Card flip animations
- Page curl effects
- 3D transforms for decoration
- Morphing shapes (except Living Core organic)
- Liquid/wave effects
- Energy/reaction effects
- Orbiting elements (except Living Core traces)
- Pulsing UI elements (except Living Core)
- Breathing UI elements (except Living Core and atmospheric layers)

### Not Part of This Phase

- Page transition system
- Sound design
- Production component rewriting
- Logo redesign
- Living Core redesign
- New animation library installation
- Global motion token deployment to production CSS

---

## 17. Evaluation Criteria

Every candidate motion behavior is evaluated against:

1. Does it communicate relationship?
2. Does it feel human?
3. Does it feel cinematic without feeling theatrical?
4. Does it feel calm?
5. Does it feel premium?
6. Does it resist generic tech aesthetics?
7. Does it work without glow?
8. Does it work without blur?
9. Does it remain meaningful when reduced?
10. Does it work on mobile?
11. Does it scale across pages?
12. Does it remain coherent after many interactions?
13. Does it age well?
14. Does it depend on the Living Core?
15. Does it accidentally imitate the logo?

Any effect that scores poorly conceptually is rejected. No numerical scoring. Qualitative reasoning only.

---

## Appendix A: Existing Motion Audit Summary

### Classification Results

| Class | Count | Description |
|-------|-------|-------------|
| **A (KEEP/ALIGNS)** | 141 | Aligns with LUMORA motion identity |
| **B (KEEP BUT REFINEMENT)** | 3 | Token keyframes unused, counter easing non-canonical |
| **C (REPLACE LATER)** | 0 | None found |
| **D (REMOVE LATER)** | 2 | Custom cursor (experimental, disabled) |
| **E (OUTSIDE IDENTITY)** | 1 | Archived ScanLine |

### Key Strengths

1. Consistent easing language — `cubic-bezier(0.16, 1, 0.3, 1)` used universally
2. Robust reduced-motion — CSS global rule + JS per-component checks
3. Semantic Core system — 7 states with 4 layers, driving animation-duration modulation
4. Data-driven world animation — `world-motion.tsx` reusable sequencer
5. No WebGL/canvas — All CSS transforms, opacity, clip-path, SVG. GPU-friendly.
6. Adaptive duration — `--core-motion-duration` scales timing based on journey phase

---

## Appendix B: Semantic Mapping Model

### Distinction: Implementation Decision vs Semantic Membership

The audit classification (A/B/C/D/E) is an **implementation decision** — it determines what to keep, refine, or remove in production code.

Vocabulary membership is a **semantic decision** — it determines what communicative role a motion plays in the LUMORA experience.

These are not the same thing. A motion can be correctly implemented (Class A) but not yet mapped to a vocabulary category. A motion can be implementation-specific and not belong to any vocabulary at all.

### Semantic Categories

Every production animation must ultimately belong to one of eight categories:

| Category | Definition | Examples |
|----------|-----------|----------|
| **REVEAL** | Element becomes perceptually available | Scroll reveals, content entrance, image appearance |
| **ALIGN** | Elements establish spatial relationship | Card grid settling, title + body composition, nav assembly |
| **RELEASE** | Constraint lifts, form resolves | Clip-path headline, compressed layout opening, world frame |
| **DRIFT** | Atmospheric environmental movement | Atmosphere breathing, directional light, mist layers |
| **HANDOFF** | Spatial continuity across boundaries | Section transition lines, scroll-linked parallax, world continuity |
| **PRESENCE** | Living Core continuous aliveness | Core morphing, ring breathing, trace rotation, source pulse |
| **STATIC / NO MOTION** | No animation. Default state. | Typography, spacing, composition at rest |
| **IMPLEMENTATION-SPECIFIC** | Motion that serves a local purpose and does not generalize to the vocabulary | Loading indicators, specific counter easing, debug visualizations, experimental components |

### Mapping Rules

1. **Not every animation must map to a vocabulary category.** IMPLEMENTATION-SPECIFIC is a valid category. It acknowledges that some motion serves a local purpose without contributing to the global grammar.

2. **Vocabulary membership is aspirational, not mandatory.** An existing animation classified as A (KEEP/ALIGNS) may not yet have a clear vocabulary assignment. That is acceptable. The vocabulary is a design target, not a compliance requirement.

3. **Multiple categories may apply.** A world entrance sequence may combine REVEAL (content appearing), ALIGN (elements settling), and RELEASE (frame expanding). This is expected for compositional animations.

4. **STATIC is a legitimate choice.** Many elements should never move. Explicitly categorizing them as STATIC reinforces the principle that LUMORA's default state is composed stillness.

### Semantic Mapping Template

For future production integration (0D.3), each significant animation instance should be documented:

```
Component: [name]
File: [path]
Animation: [description]
Current Class: [A/B/C/D/E]
Semantic Category: [REVEAL/ALIGN/RELEASE/DRIFT/HANDOFF/PRESENCE/STATIC/IMPLEMENTATION-SPECIFIC]
Vocabulary Aligned: [yes/no/partial]
Notes: [any refinement needed]
```

This mapping bridges the gap between the audit (what exists) and the grammar (what it means).

---

*This document is the canonical motion grammar source of truth for all future LUMORA motion implementation phases.*
