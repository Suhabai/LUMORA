"use client";

import { useEffect, useRef } from "react";
import { useMounted } from "@/components/hooks/use-mounted";

/**
 * EXPERIMENT B — Directional Light
 *
 * A subtle directional light field layered between the environment
 * and the Living Core. Uses only CSS gradients and transforms.
 *
 * Concept: "light reveals presence"
 * - Not a spotlight. Not a lamp. Not decorative.
 * - An atmospheric gradient that subtly shapes the void
 *   around the Living Core, reinforcing spatial depth.
 *
 * Layer order: env-layer (z-0) → directional-light (z-1) → core (z-2)
 *
 * All motion is CSS-driven (compositor-friendly, no JS animation loop).
 * Reduced-motion: animation halted, static state preserved.
 * Mobile: significantly reduced intensity.
 */
export function DirectionalLight() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mounted = useMounted();

  // Subtle, slow position drift via CSS custom properties.
  // The container uses CSS animation for the actual transform;
  // JS only sets the initial phase offset to avoid SSR mismatch.
  useEffect(() => {
    if (!mounted || !containerRef.current) return;

    // Randomized starting phase so the light field feels organic
    // rather than perfectly synchronized with other animations.
    const phase = Math.random() * 360;
    containerRef.current.style.setProperty("--light-phase", `${phase}deg`);
  }, [mounted]);

  return (
    <div
      ref={containerRef}
      className="directional-light"
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 1,
        opacity: mounted ? 1 : 0,
        transition: "opacity 2.8s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* ── Primary directional field ──
          A soft radial gradient biased slightly upward-left of center.
          This creates the impression of ambient light falling from above,
          subtly revealing the space around the Core without competing
          with it. The gradient is extremely soft-edged. */}
      <div
        className="dl-primary"
        style={{
          position: "absolute",
          inset: "-15%",
          background: `
            radial-gradient(
              ellipse 65% 55% at 46% 42%,
              rgba(155, 72, 248, 0.045) 0%,
              rgba(140, 55, 240, 0.02) 30%,
              transparent 60%
            )
          `,
          animation: "dl-breathe 22s ease-in-out infinite",
          willChange: "opacity, transform",
        }}
      />

      {/* ── Directional sweep ──
          A faint diagonal light that slowly traverses the viewport.
          Not a beam — an atmospheric gradient shift that suggests
          the environment is spatially alive. The sweep is
          nearly imperceptible: it exists to be felt, not seen. */}
      <div
        className="dl-sweep"
        style={{
          position: "absolute",
          inset: 0,
          background: `
            linear-gradient(
              135deg,
              transparent 20%,
              rgba(155, 72, 248, 0.018) 38%,
              rgba(140, 55, 240, 0.012) 42%,
              transparent 60%
            )
          `,
          animation: "dl-sweep-drift 34s ease-in-out infinite",
          willChange: "transform, opacity",
        }}
      />

      {/* ── Ambient fill ──
          A very soft, wide radial that gently illuminates the center.
          This prevents the directional sweep from creating perceived
          darkness in the core region. It is the "presence" glow —
          the quiet assurance that the Core occupies real space. */}
      <div
        className="dl-fill"
        style={{
          position: "absolute",
          inset: "-10%",
          background: `
            radial-gradient(
              ellipse 80% 70% at 50% 48%,
              rgba(145, 58, 242, 0.025) 0%,
              transparent 55%
            )
          `,
          animation: "dl-fill-breathe 28s ease-in-out infinite",
          willChange: "opacity",
        }}
      />
    </div>
  );
}
