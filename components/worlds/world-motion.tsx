// ═══════════════════════════════════════════════════════
// LUMORA — World Motion System
//
// Causal animation engine for the three worlds.
// Core structure → OMNIA. Core layers → NEXORA. Core force → VELOCITY.
//
// The sequencer reads animation steps from world data
// and creates GSAP timelines with ScrollTrigger.
// Geometry is rendered from config. Animation is driven by data.
// ═══════════════════════════════════════════════════════

import type { RefObject } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import type {
  WorldAnimationSequence,
  WorldGeometry,
  GeometryElement,
} from "./world-types"

gsap.registerPlugin(ScrollTrigger)


// ── Shared Constants ──

export const worldMotion = {
  atmosphereFade: "700ms",
  contentTransition: "500ms",
  borderTransition: "500ms",
  easeOut: "cubic-bezier(0.16, 1, 0.3, 1)",
  hover: { borderOpacity: "accent/20", arrowTranslate: "4px" },
  atmosphere: { opacity: 0.04, hoverOpacity: 1 },
}


// ═══════════════════════════════════════════════════════
// Geometry Renderer
//
// Transforms a WorldGeometry config into JSX elements.
// Each element gets a data-geometry attribute for animation targeting.
// The attribute is derived from CSS classes — no hardcoded selectors.
// ═══════════════════════════════════════════════════════

/** Derive data-geometry attribute from CSS classes for animation targeting. */
function getDataGeometry(classes: string[]): string | undefined {
  const joined = classes.join(" ")
  if (joined.includes("axis")) return "axis"
  if (joined.includes("guide")) return "guide"
  if (joined.includes("floor")) return "floor"
  if (joined.includes("bracket")) return "bracket"
  if (joined.includes("coremark")) return "coremark"
  if (joined.includes("layer") && joined.includes("nexora")) return "layer"
  if (joined.includes("hidden")) return "hidden"
  if (joined.includes("line") && joined.includes("velocity")) return "line"
  if (joined.includes("accent")) return "accent"
  if (joined.includes("dash")) return "dash"
  if (joined.includes("dot")) return "dot"
  return undefined
}

function renderGeometryElement(el: GeometryElement, idx: number) {
  const className = el.classes.join(" ")
  const dataGeometry = getDataGeometry(el.classes)
  const children = el.children?.map((child, ci) =>
    renderGeometryElement(child, ci)
  )

  return (
    <div
      key={idx}
      className={className}
      style={el.style}
      {...(dataGeometry ? { "data-geometry": dataGeometry } : {})}
    >
      {children}
    </div>
  )
}

export function renderWorldGeometry(geometry: WorldGeometry) {
  return (
    <div className={geometry.className}>
      {geometry.elements.map((el, i) => renderGeometryElement(el, i))}
    </div>
  )
}


// ═══════════════════════════════════════════════════════
// GSAP Sequencer
//
// Reads animation steps from world data and creates
// GSAP animations with ScrollTrigger bindings.
//
// Two animation modes:
//   - Delay-based: toggleActions (play/reverse on scroll)
//   - Scrub-based: continuous scroll-linked animation
// ═══════════════════════════════════════════════════════

function getMotionDuration(): number {
  return parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--core-motion-duration"
    ) || "1"
  )
}

export function createWorldSequence(
  section: HTMLElement,
  sequence: WorldAnimationSequence
) {
  const dur = getMotionDuration()

  // ── Delay-based steps ──
  sequence.steps.forEach((step) => {
    const targets = section.querySelectorAll(step.selector)
    if (!targets.length) return

    const duration = (step.duration ?? 1.2) * dur
    const delay = (step.delay ?? 0) * dur

    gsap.fromTo(targets, step.from, {
      ...step.to,
      duration,
      ease: "power3.out",
      ...(step.stagger != null ? { stagger: step.stagger } : {}),
      ...(delay ? { delay } : {}),
      scrollTrigger: {
        trigger: section,
        start: step.scroll?.start ?? "top 78%",
        toggleActions: step.scroll?.toggleActions ?? "play none none reverse",
      },
    })
  })

  // ── Scrub-based steps ──
  sequence.scrub?.forEach((step) => {
    const targets = section.querySelectorAll(step.selector)
    if (!targets.length) return

    gsap.fromTo(targets, step.from, {
      ...step.to,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: section,
        start: step.scroll?.start ?? "top 70%",
        end: step.scroll?.end ?? "center center",
        scrub: step.scroll?.scrub ?? 1.2,
      },
    })
  })
}


// ═══════════════════════════════════════════════════════
// Scroll-linked Parallax (NEXORA-specific)
//
// Each depth plane moves at its own rate.
// The deeper the plane, the slower it moves.
// Creates spatial depth through differential scroll speed.
// ═══════════════════════════════════════════════════════

export function createDepthParallax(
  section: HTMLElement,
  rates: number[] = [0.05, 0.12, 0.22]
) {
  const wraps = section.querySelectorAll(".nexora-wrap")
  wraps.forEach((wrap, i) => {
    const rate = rates[i % rates.length]
    gsap.to(wrap, {
      y: () => -rate * 150,
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    })
  })
}


// ═══════════════════════════════════════════════════════
// Convenience: animate a world's full sequence
//
// Call this from WorldSection useEffect.
// Creates all GSAP animations for the given world's sequence.
// Returns a cleanup function (calls ctx.revert).
// ═══════════════════════════════════════════════════════

export function animateWorld(
  sectionRef: RefObject<HTMLElement | null>,
  sequence: WorldAnimationSequence
): () => void {
  const section = sectionRef.current
  if (!section) return () => {}

  const ctx = gsap.context(() => {
    createWorldSequence(section, sequence)
  }, sectionRef)

  return () => ctx.revert()
}


// ═══════════════════════════════════════════════════════
// Per-World Causal Animation Definitions
//
// These define the narrative chain for each world.
// Each step describes a cause → effect relationship.
// The sequencer executes them in order.
// ═══════════════════════════════════════════════════════

/** OMNIA — Core compresses → Structure assembles */
export const OMNIA_SEQUENCE: WorldAnimationSequence = {
  steps: [
    {
      // Core compression causes axis descent
      selector: "[data-geometry='axis']",
      from: { scaleY: 0, opacity: 0 },
      to: { scaleY: 1, opacity: 1 },
      duration: 1.6,
      scroll: { start: "top 78%" },
    },
    {
      // Axis causes structural guides to emerge
      selector: "[data-geometry='guide']",
      from: { scaleY: 0, opacity: 0 },
      to: { scaleY: 1, opacity: 1 },
      duration: 1.2,
      stagger: 0.15,
      delay: 0.3,
      scroll: { start: "top 78%" },
    },
    {
      // Guides cause floor bands to extend
      selector: "[data-geometry='floor']",
      from: { scaleX: 0, opacity: 0 },
      to: { scaleX: 1, opacity: 1 },
      duration: 1.2,
      stagger: 0.12,
      delay: 0.45,
      scroll: { start: "top 78%" },
    },
    {
      // Floors cause brackets to anchor
      selector: "[data-geometry='bracket']",
      from: { opacity: 0, scale: 0.5 },
      to: { opacity: 1, scale: 1 },
      duration: 1.0,
      stagger: 0.08,
      delay: 0.8,
      scroll: { start: "top 78%" },
    },
    {
      // Brackets cause coremark to appear
      selector: "[data-geometry='coremark']",
      from: { opacity: 0, scale: 0 },
      to: { opacity: 1, scale: 1 },
      duration: 0.9,
      delay: 1.1,
      scroll: { start: "top 78%" },
    },
    {
      // Structure complete → content appears
      selector: ".world-content",
      from: { opacity: 0, y: 30 },
      to: { opacity: 1, y: 0 },
      duration: 1.2,
      delay: 0.9,
      scroll: { start: "top 70%" },
    },
  ],
}

/** NEXORA — Core drifts → Depth unfolds */
export const NEXORA_SEQUENCE: WorldAnimationSequence = {
  steps: [
    {
      // Core drift causes depth planes to unfold progressively
      selector: "[data-geometry='layer']",
      from: { opacity: 0, y: 60, scale: 0.95 },
      to: { opacity: 1, y: 0, scale: 1 },
      duration: 1.2,
      stagger: 0.2,
      scroll: { start: "top 78%" },
    },
    {
      // Depth causes hidden threads to be revealed
      selector: "[data-geometry='hidden']",
      from: { opacity: 0, scaleY: 0.4 },
      to: { opacity: 1, scaleY: 1 },
      duration: 1.4,
      stagger: 0.25,
      delay: 0.6,
      scroll: { start: "top 65%" },
    },
    {
      // Depth resolves → content reveals
      selector: ".world-content",
      from: { opacity: 0, y: 24 },
      to: { opacity: 1, y: 0 },
      duration: 1.0,
      delay: 0.6,
      scroll: { start: "top 70%" },
    },
  ],
  scrub: [
    {
      // Foreground plane edge fades in (scrub-linked)
      selector: ".nexora-front",
      from: { opacity: 0 },
      to: { opacity: 1 },
      duration: 1.6,
      scroll: { start: "top 70%", end: "center center", scrub: 1.2 },
    },
  ],
}

/** VELOCITY — Core releases → Direction launches */
export const VELOCITY_SEQUENCE: WorldAnimationSequence = {
  steps: [
    {
      // Core release causes directional lines to launch
      selector: "[data-geometry='line']",
      from: { x: -110, opacity: 0 },
      to: { x: 0, opacity: 1 },
      duration: 1.0,
      stagger: 0.08,
      scroll: { start: "top 78%" },
    },
    {
      // Lines cause counter-tension to resolve
      selector: "[data-geometry='accent']",
      from: { x: 70, opacity: 0 },
      to: { x: 0, opacity: 1 },
      duration: 1.2,
      stagger: 0.1,
      delay: 0.2,
      scroll: { start: "top 78%" },
    },
    {
      // Trajectory draws toward content
      selector: "[data-geometry='dash']",
      from: { scaleX: 0, opacity: 0 },
      to: { scaleX: 1, opacity: 1 },
      duration: 1.3,
      delay: 0.35,
      scroll: { start: "top 75%" },
    },
    {
      // Direction stabilizes → content enters with inertial momentum
      selector: ".world-content",
      from: { opacity: 0, x: -40 },
      to: { opacity: 1, x: 0 },
      duration: 1.0,
      delay: 0.4,
      scroll: { start: "top 70%" },
    },
  ],
  scrub: [
    {
      // Momentum dot rides the trajectory as you approach
      selector: "[data-geometry='dot']",
      from: { x: 90, opacity: 0 },
      to: { x: 0, opacity: 1 },
      scroll: { start: "top 75%", end: "center center", scrub: 1.5 },
    },
  ],
}
