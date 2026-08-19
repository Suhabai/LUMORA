// ═══════════════════════════════════════════════════════
// LUMORA — Living Core Type System
//
// The Core is a material, not an effect.
// These types define its physical language:
// layers, states, events, and the transitions between them.
// ═══════════════════════════════════════════════════════


// ── Core Modes ──
// Phase-driven visual configurations.
// Each mode shapes the Core's material presence.
export type CoreMode =
  | "entry"
  | "presence"
  | "discovery"
  | "worlds"
  | "thinking"
  | "human"
  | "threshold"

// ── Core Intensities ──
// Energy modulation: how bright the internal light burns.
export type CoreIntensity =
  | "soft"
  | "medium"
  | "strong"

// ── Core Interaction ──
// Whether the material responds to cursor proximity.
export type CoreInteraction =
  | "subtle"
  | "none"

// ── Experience Phases ──
// The user's journey through LUMORA.
// Each phase has a corresponding Core expression.
export type ExperiencePhase =
  | "entry"
  | "presence"
  | "discovery"
  | "worlds"
  | "thinking"
  | "human"
  | "threshold"


// ═══════════════════════════════════════════════════════
// Conceptual Layers
//
// The Living Core is composed of 4 physical layers.
// Each layer is a distinct material region with its own
// behavior, opacity, and rhythm.
// ═══════════════════════════════════════════════════════

export type CoreLayer = "source" | "field" | "halo" | "organic"

export interface CoreLayerConfig {
  /** Layer opacity (0–1). Controls visual presence. */
  opacity: number
  /** Layer scale multiplier. Subtle breathing range. */
  scale: number
  /** Gaussian blur (px). Softens layer edges. */
  blur: number
  /** Warmth shift. Positive = warmer lilac, negative = cooler blue. */
  warmth: number
  /** Breathing period (seconds). Higher = slower rhythm. */
  breatheRate: number
}

export const CORE_LAYER_DEFAULTS: Record<CoreLayer, CoreLayerConfig> = {
  source: {
    opacity: 1,
    scale: 1,
    blur: 0,
    warmth: 0,
    breatheRate: 8,
  },
  field: {
    opacity: 0.7,
    scale: 1,
    blur: 0,
    warmth: 0,
    breatheRate: 10,
  },
  halo: {
    opacity: 0.6,
    scale: 1,
    blur: 0,
    warmth: 0,
    breatheRate: 12,
  },
  organic: {
    opacity: 1,
    scale: 1,
    blur: 0,
    warmth: 0,
    breatheRate: 14,
  },
}


// ═══════════════════════════════════════════════════════
// Semantic States
//
// The Core has emotional states, not visual presets.
// Each state describes how the material feels —
// its energy level, breathing rhythm, and presence.
// ═══════════════════════════════════════════════════════

export type CoreSemanticState =
  | "dormant"      // Resting. Slow pulse. Minimal presence.
  | "emerging"     // Awakening. Light begins to form.
  | "present"      // Established. Calm breathing rhythm.
  | "alert"        // Responsive. Faster rhythm, searching.
  | "introspective" // Internal. Quieter, more contained.
  | "intimate"     // Close. Warm, reduced distance.
  | "still"        // Final. Approaching stillness.


// ═══════════════════════════════════════════════════════
// Core Events
//
// Semantic events are the causes of state change.
// Everything else — animation, opacity, scale — is effect.
// Events are discrete. States are continuous.
// ═══════════════════════════════════════════════════════

export type CoreEvent =
  | "core-awaken"      // Entry: Core becomes perceptible
  | "core-expand"      // Presence: Core breathes outward
  | "core-focus"       // Thinking: Core concentrates inward
  | "core-settle"      // Human/Threshold: Core calms, slows
  | "core-compress"    // Thinking: Core concentrates (alias)
  | "core-drift"       // Discovery: Core shifts depth
  | "core-release"     // Velocity/World exit: Core releases energy


// ═══════════════════════════════════════════════════════
// Event → State Mapping
//
// Each event resolves to a semantic state.
// The Core's visual language is derived from these
// transitions, not from hard-coded mode classes.
// ═══════════════════════════════════════════════════════

export const CORE_EVENT_SEMANTIC_MAP: Record<CoreEvent, CoreSemanticState> = {
  "core-awaken":   "emerging",
  "core-expand":   "present",
  "core-focus":    "introspective",
  "core-settle":   "still",
  "core-compress": "introspective",
  "core-drift":    "alert",
  "core-release":  "dormant",
}

// Phase → Event mapping (derived from scroll position)
export const PHASE_EVENT_MAP: Record<ExperiencePhase, CoreEvent> = {
  entry:     "core-awaken",
  presence:  "core-expand",
  discovery: "core-drift",
  worlds:    "core-drift",
  thinking:  "core-focus",
  human:     "core-settle",
  threshold: "core-settle",
}


// ═══════════════════════════════════════════════════════
// Semantic State → Layer Configuration
//
// Each semantic state defines how each layer behaves.
// Framer Motion interpolates between these values.
// The material breathes through these configs.
// ═══════════════════════════════════════════════════════

export type CoreStateLayers = Record<CoreLayer, CoreLayerConfig>

export const CORE_SEMANTIC_LAYERS: Record<CoreSemanticState, CoreStateLayers> = {
  dormant: {
    source:  { opacity: 0.55, scale: 0.92, blur: 0,   warmth: -0.02, breatheRate: 10 },
    field:   { opacity: 0.30, scale: 0.96, blur: 0.5, warmth: 0,     breatheRate: 12 },
    halo:    { opacity: 0.40, scale: 0.98, blur: 0,   warmth: 0,     breatheRate: 14 },
    organic: { opacity: 0.85, scale: 1,    blur: 0,   warmth: 0,     breatheRate: 16 },
  },

  emerging: {
    source:  { opacity: 0,   scale: 0.70, blur: 2,   warmth: 0,     breatheRate: 12 },
    field:   { opacity: 0,   scale: 0.80, blur: 1,   warmth: 0,     breatheRate: 14 },
    halo:    { opacity: 0,   scale: 0.85, blur: 0.5, warmth: 0,     breatheRate: 16 },
    organic: { opacity: 0.4, scale: 0.90, blur: 0,   warmth: 0,     breatheRate: 14 },
  },

  present: {
    source:  { opacity: 1,   scale: 1,    blur: 0,   warmth: 0,     breatheRate: 8 },
    field:   { opacity: 0.75,scale: 1,    blur: 0,   warmth: 0,     breatheRate: 10 },
    halo:    { opacity: 0.65,scale: 1,    blur: 0,   warmth: 0,     breatheRate: 12 },
    organic: { opacity: 1,   scale: 1,    blur: 0,   warmth: 0,     breatheRate: 12 },
  },

  alert: {
    source:  { opacity: 1,   scale: 1.02, blur: 0,   warmth: 0.01,  breatheRate: 6 },
    field:   { opacity: 0.85,scale: 1.01, blur: 0,   warmth: 0,     breatheRate: 8 },
    halo:    { opacity: 0.75,scale: 1.005,blur: 0,   warmth: 0,     breatheRate: 10 },
    organic: { opacity: 1,   scale: 1,    blur: 0,   warmth: 0,     breatheRate: 10 },
  },

  introspective: {
    source:  { opacity: 0.82,scale: 0.95, blur: 0.5, warmth: -0.01, breatheRate: 12 },
    field:   { opacity: 0.45,scale: 0.97, blur: 0.5, warmth: 0,     breatheRate: 14 },
    halo:    { opacity: 0.35,scale: 0.98, blur: 0,   warmth: 0,     breatheRate: 16 },
    organic: { opacity: 0.9, scale: 1,    blur: 0,   warmth: 0,     breatheRate: 16 },
  },

  intimate: {
    source:  { opacity: 0.70,scale: 0.90, blur: 1,   warmth: 0.02,  breatheRate: 14 },
    field:   { opacity: 0.40,scale: 0.94, blur: 0.5, warmth: 0.01,  breatheRate: 16 },
    halo:    { opacity: 0.30,scale: 0.96, blur: 0,   warmth: 0.01,  breatheRate: 18 },
    organic: { opacity: 0.85,scale: 1,    blur: 0,   warmth: 0,     breatheRate: 18 },
  },

  still: {
    source:  { opacity: 0.60,scale: 0.88, blur: 0.5, warmth: 0,     breatheRate: 16 },
    field:   { opacity: 0.30,scale: 0.92, blur: 0.5, warmth: 0,     breatheRate: 18 },
    halo:    { opacity: 0.25,scale: 0.94, blur: 0,   warmth: 0,     breatheRate: 20 },
    organic: { opacity: 0.80,scale: 1,    blur: 0,   warmth: 0,     breatheRate: 22 },
  },
}


// ═══════════════════════════════════════════════════════
// Transition Configuration
//
// Defines how the Core moves between semantic states.
// Duration follows the Motion Language: cinematic (800ms+)
// for state changes, standard (300ms) for micro-adjustments.
// ═══════════════════════════════════════════════════════

export interface CoreTransition {
  /** Transition duration in seconds. */
  duration: number
  /** CSS easing or Spring config. */
  ease: string
}

/** Default transition: cinematic, controlled deceleration. */
export const CORE_TRANSITION_DEFAULT: CoreTransition = {
  duration: 1.8,
  ease: "cubic-bezier(0.16, 1, 0.3, 1)",
}

/** Fast transition: micro-interaction response. */
export const CORE_TRANSITION_FAST: CoreTransition = {
  duration: 0.6,
  ease: "cubic-bezier(0.16, 1, 0.3, 1)",
}

/** Slow transition: settling, introspection. */
export const CORE_TRANSITION_SLOW: CoreTransition = {
  duration: 2.4,
  ease: "cubic-bezier(0.16, 1, 0.3, 1)",
}


// ═══════════════════════════════════════════════════════
// Event → Transition Speed Mapping
//
// Different events demand different pacing.
// Awaken is slow (emergence). Focus is slow (contemplation).
// Expand is standard (establishing presence).
// ═══════════════════════════════════════════════════════

export const CORE_EVENT_TRANSITIONS: Record<CoreEvent, CoreTransition> = {
  "core-awaken":   { duration: 2.0, ease: "cubic-bezier(0.16, 1, 0.3, 1)" },
  "core-expand":   CORE_TRANSITION_DEFAULT,
  "core-focus":    CORE_TRANSITION_SLOW,
  "core-settle":   CORE_TRANSITION_SLOW,
  "core-compress": CORE_TRANSITION_DEFAULT,
  "core-drift":    CORE_TRANSITION_DEFAULT,
  "core-release":  CORE_TRANSITION_FAST,
}
