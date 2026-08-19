// ═══════════════════════════════════════════════════════
// LUMORA — World Type System
//
// Each world is a spatial identity, not a card.
// Geometry + Atmosphere + Animation Sequence = World.
// ═══════════════════════════════════════════════════════


export type WorldId = "omnia" | "nexora" | "velocity"

export type AtmosphereStyle = "structured" | "exploratory" | "flowing"


// ── Geometry System ──
// Defines the spatial signature of each world.
// Geometry elements are rendered from config, not hardcoded.

export type GeometryKind = "line" | "plane" | "dot"

export interface GeometryElement {
  /** CSS classes applied to this element (e.g. "omnia-axis", "velocity-line") */
  classes: string[]
  /** Inline position styles */
  style: React.CSSProperties
  /** Content children for inner elements */
  children?: GeometryElement[]
}

export interface WorldGeometry {
  kind: GeometryKind
  /** Container className for the geometry group */
  className: string
  /** Individual geometry elements */
  elements: GeometryElement[]
}


// ── Animation Sequence System ──
// Causal chain: each step is caused by the previous.
// Core structure → OMNIA. Core layers → NEXORA. Core force → VELOCITY.

export interface AnimationStep {
  /** CSS selector for target elements (relative to section) */
  selector: string
  /** GSAP fromTo: initial state */
  from: gsap.TweenVars
  /** GSAP fromTo: final state */
  to: gsap.TweenVars
  /** ScrollTrigger configuration (if omitted, uses delay-based trigger) */
  scroll?: {
    start: string
    end?: string
    scrub?: number | boolean
    toggleActions?: string
  }
  /** Stagger for multiple elements */
  stagger?: number
  /** Delay multiplier (relative to dur) */
  delay?: number
  /** Duration multiplier (relative to dur) */
  duration?: number
}

export interface WorldAnimationSequence {
  /** Steps that use delay-based timing (fromTo with scroll trigger + toggleActions) */
  steps: AnimationStep[]
  /** Optional scrub-linked animations (continuous scroll-driven) */
  scrub?: AnimationStep[]
}


// ── Atmosphere System ──

export interface WorldAtmosphere {
  style: AtmosphereStyle
  gradient: {
    type: "radial" | "linear"
    position: string
    color: string
    opacity: number
  }
  overlay?: {
    direction: "to-top" | "to-bottom" | "to-right" | "to-left"
    opacity: number
  }
  hover: {
    borderOpacity: string
    contentShift: boolean
  }
  motion: {
    atmosphereDuration: string
    contentDuration: string
    easing: string
  }
}

export interface WorldRestingAtmosphere {
  gradient: {
    type: "radial" | "linear"
    position: string
    opacity: number
  }
  alignment: "center" | "lower" | "directional"
}


// ── World ──

export interface World {
  id: WorldId
  title: string
  category: string
  description: string
  feeling: string[]
  atmosphere: WorldAtmosphere
  restingAtmosphere: WorldRestingAtmosphere
  /** Spatial signature: geometry elements rendered from config */
  geometry: WorldGeometry
  /** Causal animation sequence: geometry animates via GSAP */
  sequence: WorldAnimationSequence
}
