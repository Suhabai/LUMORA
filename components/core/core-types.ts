export type CoreMode =
  | "entry"
  | "presence"
  | "discovery"
  | "worlds"
  | "thinking"
  | "human"
  | "threshold"
  | "hero"
  | "ambient"
  | "minimal"

export type CoreIntensity =
  | "soft"
  | "medium"
  | "strong"

export type CoreInteraction =
  | "subtle"
  | "none"

export type ExperiencePhase =
  | "entry"
  | "presence"
  | "discovery"
  | "worlds"
  | "thinking"
  | "human"
  | "threshold"

// ── Core Event Model ──
// Semantic events derived from Core state changes.
// These are the causes. Everything else is effect.
export type CoreEvent =
  | "core-awaken"      // Entry: Core becomes perceptible
  | "core-settle"      // Human/Threshold: Core calms, slows
  | "core-expand"      // Presence: Core breathes outward
  | "core-compress"    // Thinking: Core concentrates inward
  | "core-drift"       // Discovery: Core shifts depth
  | "core-focus"       // Philosophy: Core thinks
  | "core-release"     // Velocity/World exit: Core releases energy

// Phase-to-event mapping
export const PHASE_EVENT_MAP: Record<ExperiencePhase, CoreEvent> = {
  entry: "core-awaken",
  presence: "core-expand",
  discovery: "core-drift",
  worlds: "core-drift",
  thinking: "core-focus",
  human: "core-settle",
  threshold: "core-settle",
}
