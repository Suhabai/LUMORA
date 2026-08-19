"use client"

import { useMounted } from "@/components/hooks/use-mounted"
import type { CoreSemanticState } from "../core/core-types"


// ═══════════════════════════════════════════════════════
// LUMORA — World Structural Graphics
//
// Each world has a unique visual signature that makes it
// recognizable WITHOUT text.
//
// OMNIA  = Structure  (axis, floor bands, crosshair)
// NEXORA = Depth      (3 parallax planes, glassy panels)
// VELOCITY = Momentum (diagonal trajectories, dash streams)
//
// SSR-safe: all SVG coordinates are static.
// Core state intensity is a simple ternary (deterministic).
// ═══════════════════════════════════════════════════════


interface WorldGeometryProps {
  coreState?: CoreSemanticState
}

/** Compute intensity multiplier from core state. Pure, deterministic. */
function getIntensity(coreState: CoreSemanticState): number {
  return coreState === "alert" ? 1.3 : coreState === "dormant" ? 0.6 : 1
}


// ═══════════════════════════════════════════════════════
// OMNIA — Structure
// Bold measured grid: axis, floor bands, crosshair coremark.
// ═══════════════════════════════════════════════════════

export function OmniaGeometry({ coreState = "present" }: WorldGeometryProps) {
  const mounted = useMounted()
  if (!mounted) return null

  const i = getIntensity(coreState)

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <svg viewBox="0 0 1200 900" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">

        {/* Central Axis */}
        <line x1="600" y1="30" x2="600" y2="870" stroke={`rgba(138, 46, 255, ${0.90 * i})`} strokeWidth="2.5" data-geometry="axis" className="omnia-axis-line" />

        {/* Floor Bands */}
        <line x1="200" y1="270" x2="1000" y2="270" stroke={`rgba(138, 46, 255, ${0.60 * i})`} strokeWidth="2" data-geometry="floor" className="omnia-floor-band" />
        <line x1="160" y1="450" x2="1040" y2="450" stroke={`rgba(138, 46, 255, ${0.45 * i})`} strokeWidth="1.8" data-geometry="floor" className="omnia-floor-band" />
        <line x1="200" y1="630" x2="1000" y2="630" stroke={`rgba(138, 46, 255, ${0.60 * i})`} strokeWidth="2" data-geometry="floor" className="omnia-floor-band" />

        {/* Measurement Ticks */}
        <line x1="592" y1="270" x2="608" y2="270" stroke={`rgba(138, 46, 255, ${0.75 * i})`} strokeWidth="2.2" data-geometry="floor" />
        <line x1="592" y1="450" x2="608" y2="450" stroke={`rgba(138, 46, 255, ${0.75 * i})`} strokeWidth="2.2" data-geometry="floor" />
        <line x1="592" y1="630" x2="608" y2="630" stroke={`rgba(138, 46, 255, ${0.75 * i})`} strokeWidth="2.2" data-geometry="floor" />

        {/* Vertical Guides */}
        <line x1="280" y1="80" x2="280" y2="820" stroke={`rgba(138, 46, 255, ${0.50 * i})`} strokeWidth="1.5" strokeDasharray="3 10" data-geometry="guide" className="omnia-guide-line" />
        <line x1="920" y1="80" x2="920" y2="820" stroke={`rgba(138, 46, 255, ${0.50 * i})`} strokeWidth="1.5" strokeDasharray="3 10" data-geometry="guide" className="omnia-guide-line" />

        {/* Corner Brackets */}
        <polyline points="240,130 240,110 260,110" fill="none" stroke={`rgba(138, 46, 255, ${0.85 * i})`} strokeWidth="2.2" data-geometry="bracket" className="omnia-bracket-el" />
        <polyline points="960,130 960,110 940,110" fill="none" stroke={`rgba(138, 46, 255, ${0.85 * i})`} strokeWidth="2.2" data-geometry="bracket" className="omnia-bracket-el" />
        <polyline points="240,770 240,790 260,790" fill="none" stroke={`rgba(138, 46, 255, ${0.85 * i})`} strokeWidth="2.2" data-geometry="bracket" className="omnia-bracket-el" />
        <polyline points="960,770 960,790 940,790" fill="none" stroke={`rgba(138, 46, 255, ${0.85 * i})`} strokeWidth="2.2" data-geometry="bracket" className="omnia-bracket-el" />

        {/* Crosshair Coremark */}
        <line x1="584" y1="450" x2="616" y2="450" stroke={`rgba(138, 46, 255, ${0.95 * i})`} strokeWidth="2.5" data-geometry="coremark" className="omnia-crosshair" />
        <line x1="600" y1="434" x2="600" y2="466" stroke={`rgba(138, 46, 255, ${0.95 * i})`} strokeWidth="2.5" data-geometry="coremark" className="omnia-crosshair" />
        <circle cx="600" cy="450" r="4" fill={`rgba(255, 235, 255, ${0.95 * i})`} data-geometry="coremark" className="omnia-coremark-dot" />
        <circle cx="600" cy="450" r="10" fill="none" stroke={`rgba(138, 46, 255, ${0.45 * i})`} strokeWidth="1.2" data-geometry="coremark" />

      </svg>
    </div>
  )
}


// ═══════════════════════════════════════════════════════
// NEXORA — Depth
// Bold glassy planes receding toward a vanishing point.
// ═══════════════════════════════════════════════════════

export function NexoraGeometry({ coreState = "present" }: WorldGeometryProps) {
  const mounted = useMounted()
  if (!mounted) return null

  const i = getIntensity(coreState)

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <svg viewBox="0 0 1200 900" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">

        {/* Deep Plane */}
        <rect x="680" y="70" width="460" height="640" rx="4" fill={`rgba(138, 46, 255, ${0.08 * i})`} stroke={`rgba(138, 46, 255, ${0.45 * i})`} strokeWidth="1.8" data-geometry="layer" className="nexora-plane-deep" />

        {/* Mid Plane */}
        <rect x="740" y="160" width="380" height="500" rx="4" fill={`rgba(138, 46, 255, ${0.12 * i})`} stroke={`rgba(138, 46, 255, ${0.55 * i})`} strokeWidth="2" data-geometry="layer" className="nexora-plane-mid" />

        {/* Near Plane */}
        <rect x="800" y="280" width="300" height="320" rx="4" fill={`rgba(138, 46, 255, ${0.18 * i})`} stroke={`rgba(138, 46, 255, ${0.70 * i})`} strokeWidth="2.2" data-geometry="layer" className="nexora-plane-near" />

        {/* Content Indicators */}
        <line x1="760" y1="240" x2="1020" y2="240" stroke={`rgba(138, 46, 255, ${0.45 * i})`} strokeWidth="1.2" data-geometry="layer" />
        <line x1="820" y1="360" x2="1040" y2="360" stroke={`rgba(138, 46, 255, ${0.55 * i})`} strokeWidth="1.2" data-geometry="layer" />
        <line x1="820" y1="440" x2="980" y2="440" stroke={`rgba(138, 46, 255, ${0.38 * i})`} strokeWidth="1" data-geometry="layer" />

        {/* Hidden Threads */}
        <line x1="980" y1="60" x2="980" y2="840" stroke={`rgba(138, 46, 255, ${0.60 * i})`} strokeWidth="1.5" data-geometry="hidden" className="nexora-thread" />
        <line x1="680" y1="480" x2="1140" y2="480" stroke={`rgba(138, 46, 255, ${0.45 * i})`} strokeWidth="1.5" data-geometry="hidden" className="nexora-thread" />

        {/* Depth Point */}
        <circle cx="980" cy="220" r="5" fill={`rgba(255, 235, 255, ${0.90 * i})`} data-geometry="layer" className="nexora-depth-point" />
        <circle cx="980" cy="220" r="12" fill="none" stroke={`rgba(138, 46, 255, ${0.50 * i})`} strokeWidth="1.2" data-geometry="layer" className="nexora-depth-ring" />

        {/* Depth Falloff */}
        <circle cx="860" cy="360" r="200" fill={`url(#nexora-falloff-${coreState})`} />
        <defs>
          <radialGradient id={`nexora-falloff-${coreState}`}>
            <stop offset="0%" stopColor={`rgba(180, 110, 255, ${0.30 * i})`} />
            <stop offset="100%" stopColor="rgba(180, 110, 255, 0)" />
          </radialGradient>
        </defs>

      </svg>
    </div>
  )
}


// ═══════════════════════════════════════════════════════
// VELOCITY — Momentum
// Bold diagonal trajectories, dashes, counter-tension.
// ═══════════════════════════════════════════════════════

export function VelocityGeometry({ coreState = "present" }: WorldGeometryProps) {
  const mounted = useMounted()
  if (!mounted) return null

  const i = coreState === "alert" ? 1.4 : coreState === "dormant" ? 0.5 : 1
  const angle = coreState === "alert" ? -18 : -14

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <svg
        viewBox="0 0 1200 900"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        style={{ transform: `rotate(${angle}deg)`, transformOrigin: "center center" }}
      >

        {/* Primary Trajectories */}
        <line x1="-60" y1="130" x2="980" y2="130" stroke={`rgba(138, 46, 255, ${0.85 * i})`} strokeWidth="2.5" data-geometry="line" className="velocity-trajectory" />
        <line x1="40" y1="240" x2="920" y2="240" stroke={`rgba(138, 46, 255, ${0.65 * i})`} strokeWidth="2.2" data-geometry="line" className="velocity-trajectory" />
        <line x1="100" y1="350" x2="820" y2="350" stroke={`rgba(138, 46, 255, ${0.50 * i})`} strokeWidth="2" data-geometry="line" className="velocity-trajectory" />
        <line x1="160" y1="460" x2="720" y2="460" stroke={`rgba(138, 46, 255, ${0.40 * i})`} strokeWidth="1.6" data-geometry="line" className="velocity-trajectory" />
        <line x1="220" y1="570" x2="620" y2="570" stroke={`rgba(138, 46, 255, ${0.30 * i})`} strokeWidth="1.2" data-geometry="line" className="velocity-trajectory" />

        {/* Counter-Tension */}
        <line x1="1160" y1="200" x2="640" y2="200" stroke={`rgba(138, 46, 255, ${0.50 * i})`} strokeWidth="2" data-geometry="accent" className="velocity-counter" />
        <line x1="1120" y1="320" x2="700" y2="320" stroke={`rgba(138, 46, 255, ${0.38 * i})`} strokeWidth="1.6" data-geometry="accent" className="velocity-counter" />

        {/* Dashed Trajectory */}
        <line x1="60" y1="410" x2="600" y2="410" stroke={`rgba(200, 140, 255, ${0.70 * i})`} strokeWidth="2.2" strokeDasharray="8 14" data-geometry="dash" className="velocity-dash-stream" />

        {/* Momentum Dot */}
        <circle cx="300" cy="410" r="5" fill={`rgba(255, 235, 255, ${0.95 * i})`} data-geometry="dot" className="velocity-momentum-dot" />
        <circle cx="300" cy="410" r="14" fill="none" stroke={`rgba(138, 46, 255, ${0.55 * i})`} strokeWidth="1.6" data-geometry="dot" className="velocity-momentum-ring" />

        {/* Direction Glow */}
        <rect x="0" y="0" width="1200" height="900" fill={`url(#velocity-glow-${coreState})`} />
        <defs>
          <linearGradient id={`velocity-glow-${coreState}`} x1="0%" y1="0%" x2="60%" y2="60%">
            <stop offset="0%" stopColor={`rgba(170, 90, 255, ${0.28 * i})`} />
            <stop offset="100%" stopColor="rgba(170, 90, 255, 0)" />
          </linearGradient>
        </defs>

      </svg>
    </div>
  )
}


// ═══════════════════════════════════════════════════════
// Geometry Dispatcher
// ═══════════════════════════════════════════════════════

export function WorldStructuralGeometry({
  worldId,
  coreState = "present",
}: {
  worldId: string
  coreState?: CoreSemanticState
}) {
  switch (worldId) {
    case "omnia":
      return <OmniaGeometry coreState={coreState} />
    case "nexora":
      return <NexoraGeometry coreState={coreState} />
    case "velocity":
      return <VelocityGeometry coreState={coreState} />
    default:
      return null
  }
}