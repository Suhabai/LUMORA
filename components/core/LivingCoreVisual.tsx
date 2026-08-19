"use client"

import { motion, type Transition } from "framer-motion"
import { useMounted } from "@/components/hooks/use-mounted"
import "./living-core.css"
import type {
  CoreMode,
  CoreIntensity,
  CoreInteraction,
  CoreSemanticState,
  CoreStateLayers,
  CoreTransition,
} from "./core-types"


// ═══════════════════════════════════════════════════════
// Pre-computed trace tick positions.
// NO Math in render — these are static constants.
// Server and client will always produce identical output.
// ═══════════════════════════════════════════════════════

interface TickPos { x1: number; y1: number; x2: number; y2: number }

const TICK_POSITIONS: TickPos[] = (() => {
  const cx = 120
  const cy = 120
  const inner = 104
  const outer = 114
  const angles = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330]
  return angles.map((deg) => {
    const rad = (deg * Math.PI) / 180
    const cos = Math.cos(rad)
    const sin = Math.sin(rad)
    return {
      x1: Math.round((cx + cos * inner) * 1000) / 1000,
      y1: Math.round((cy + sin * inner) * 1000) / 1000,
      x2: Math.round((cx + cos * outer) * 1000) / 1000,
      y2: Math.round((cy + sin * outer) * 1000) / 1000,
    }
  })
})()


interface LivingCoreVisualProps {
  mode?: CoreMode
  intensity?: CoreIntensity
  interaction?: CoreInteraction
  semanticState?: CoreSemanticState
  layerConfigs?: CoreStateLayers
  transition?: CoreTransition
}

function resolveTransition(t: CoreTransition): Transition {
  return {
    duration: t.duration,
    ease: [0.16, 1, 0.3, 1],
  }
}


/**
 * LivingCoreVisual — The physical body of the Core.
 *
 * This is NOT a glowing orb. This is a living material.
 *
 * Visual systems:
 *   1. Organic    — asymmetric surface with clip-path deformation
 *   2. Membrane   — SVG morphing path, the skin of the material
 *   3. Field      — concentric SVG energy rings
 *   4. Source     — sharp SVG point of light, distinctly brighter
 *   5. Traces     — SVG orbital linework, rotating and pulsing
 *
 * SSR-safe: all SVG coordinates are static constants.
 * Dynamic behavior (clip-path, morphing) is CSS/SMIL only.
 */
export default function LivingCoreVisual({
  mode = "presence",
  intensity = "medium",
  interaction = "none",
  semanticState = "present",
  layerConfigs,
  transition = { duration: 1.8, ease: "cubic-bezier(0.16, 1, 0.3, 1)" },
}: LivingCoreVisualProps) {

  const mounted = useMounted()
  const t = resolveTransition(transition)
  const organic = layerConfigs?.organic ?? { opacity: 1, scale: 1, blur: 0, warmth: 0, breatheRate: 14 }

  const classNames = [
    "living-core",
    `core-${mode}`,
    `core-intensity-${intensity}`,
    `core-interaction-${interaction}`,
    `core-state-${semanticState}`,
  ].join(" ")

  return (
    <div className={classNames}>

      {/* ── Atmosphere ── */}
      <div className="core-atmosphere" />

      {/* ── Organic Layer ── */}
      <motion.div
        className="core-organic"
        animate={{
          opacity: organic.opacity,
          scale: organic.scale,
        }}
        transition={t}
      />

      {/* ── SVG Physical Layer ──
          Rendered identically on server and client.
          All coordinates are static constants (TICK_POSITIONS).
          SMIL <animate> handles morphing — no JS in render. */}
      {mounted && (
        <div className="core-svg-layer" aria-hidden="true">
          <svg
            viewBox="0 0 240 240"
            className="core-svg"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Source radial gradient — vibrant, bright center, lilac bloom */}
              <radialGradient id="core-source-grad" cx="48%" cy="46%" r="50%">
                <stop offset="0%" stopColor="rgba(255,255,255,1)" />
                <stop offset="12%" stopColor="rgba(250,235,255,1)" />
                <stop offset="30%" stopColor="rgba(232,190,255,0.95)" />
                <stop offset="52%" stopColor="rgba(200,140,255,0.75)" />
                <stop offset="75%" stopColor="rgba(170,90,255,0.45)" />
                <stop offset="100%" stopColor="rgba(138,46,255,0.05)" />
              </radialGradient>

              {/* Membrane stroke gradient — strong lilac skin */}
              <linearGradient id="core-membrane-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(150,60,255,0.95)" />
                <stop offset="35%" stopColor="rgba(230,185,255,0.75)" />
                <stop offset="65%" stopColor="rgba(150,60,255,0.85)" />
                <stop offset="100%" stopColor="rgba(190,120,255,0.60)" />
              </linearGradient>

              {/* Membrane interior fill — physical body beneath the skin */}
              <radialGradient id="core-membrane-fill" cx="50%" cy="50%" r="55%">
                <stop offset="0%" stopColor="rgba(150,70,255,0.14)" />
                <stop offset="60%" stopColor="rgba(120,50,230,0.07)" />
                <stop offset="100%" stopColor="rgba(138,46,255,0.03)" />
              </radialGradient>
            </defs>

            {/* ── Traces ── */}
            <g className="core-traces-group">
              <ellipse cx="120" cy="120" rx="114" ry="98" fill="none" stroke="rgba(138, 46, 255, 0.45)" strokeWidth="1.2" className="trace-orbit trace-orbit-1" />
              <ellipse cx="120" cy="120" rx="90" ry="74" fill="none" stroke="rgba(138, 46, 255, 0.35)" strokeWidth="1" className="trace-orbit trace-orbit-2" />
              <ellipse cx="120" cy="120" rx="66" ry="54" fill="none" stroke="rgba(138, 46, 255, 0.28)" strokeWidth="0.9" className="trace-orbit trace-orbit-3" />
              <line x1="120" y1="8" x2="120" y2="232" stroke="rgba(138, 46, 255, 0.30)" strokeWidth="1" className="trace-meridian" />
              <line x1="8" y1="120" x2="232" y2="120" stroke="rgba(138, 46, 255, 0.30)" strokeWidth="1" className="trace-equator" />
              {TICK_POSITIONS.map((tick, idx) => (
                <line
                  key={idx}
                  x1={tick.x1}
                  y1={tick.y1}
                  x2={tick.x2}
                  y2={tick.y2}
                  stroke="rgba(138, 46, 255, 0.42)"
                  strokeWidth="1"
                  className="trace-tick"
                />
              ))}
              <circle cx="120" cy="120" r="55" fill="none" stroke="rgba(138, 46, 255, 0.25)" strokeWidth="0.9" className="trace-pulse" />
            </g>

            {/* ── Membrane ──
                The pressure boundary. Bold lilac skin with
                an interior fill so it reads as physical material. */}
            <path
              d="M120,28 C152,26 184,42 198,68 C212,94 216,124 210,150 C204,176 188,198 168,208 C148,218 128,216 112,210 C96,204 76,192 62,174 C48,156 42,132 44,112 C46,92 56,68 72,52 C88,36 104,28 120,28 Z"
              fill="url(#core-membrane-fill)"
              stroke="url(#core-membrane-grad)"
              strokeWidth="2.4"
              strokeLinecap="round"
              className="core-membrane-path"
            >
              <animate
                attributeName="d"
                dur="14s"
                repeatCount="indefinite"
                values="
                  M120,28 C152,26 184,42 198,68 C212,94 216,124 210,150 C204,176 188,198 168,208 C148,218 128,216 112,210 C96,204 76,192 62,174 C48,156 42,132 44,112 C46,92 56,68 72,52 C88,36 104,28 120,28 Z;
                  M120,32 C148,28 178,46 194,72 C210,98 218,128 212,154 C206,180 190,200 170,210 C150,220 130,218 114,212 C98,206 78,194 64,176 C50,158 44,134 46,114 C48,94 58,70 74,54 C90,38 106,32 120,32 Z;
                  M120,30 C150,24 182,44 200,70 C218,96 214,126 208,152 C202,178 186,196 166,206 C146,216 126,220 110,214 C94,208 74,196 60,178 C46,160 40,136 42,116 C44,96 54,72 70,56 C86,40 102,30 120,30 Z;
                  M120,28 C152,26 184,42 198,68 C212,94 216,124 210,150 C204,176 188,198 168,208 C148,218 128,216 112,210 C96,204 76,192 62,174 C48,156 42,132 44,112 C46,92 56,68 72,52 C88,36 104,28 120,28 Z
                "
                calcMode="spline"
                keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
              />
            </path>

            {/* ── Field Rings ── */}
            <g className="core-field-rings">
              <circle cx="120" cy="120" r="82" fill="none" stroke="rgba(138, 46, 255, 0.40)" strokeWidth="1.2" className="core-ring core-ring-1" />
              <circle cx="120" cy="120" r="66" fill="none" stroke="rgba(138, 46, 255, 0.32)" strokeWidth="1" className="core-ring core-ring-2" />
              <circle cx="120" cy="120" r="50" fill="none" stroke="rgba(138, 46, 255, 0.25)" strokeWidth="0.9" className="core-ring core-ring-3" />
            </g>

            {/* ── Source ──
                Sharp, bright, concentrated. The heartbeat of the material. */}
            <circle cx="120" cy="120" r="28" fill="url(#core-source-grad)" className="core-source-circle" />
            <circle cx="120" cy="120" r="28" fill="none" stroke="rgba(255, 248, 255, 0.60)" strokeWidth="1.2" className="core-source-edge" />
            <circle cx="118" cy="117" r="8" fill="rgba(255, 252, 255, 0.95)" className="core-source-highlight" />

          </svg>
        </div>
      )}

    </div>
  )
}