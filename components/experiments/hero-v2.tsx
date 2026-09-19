"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown } from "lucide-react";
import { useExperience } from "@/components/layout/experience-context";

/**
 * HERO V2 — LIVING LIGHT
 *
 * A visually richer variant of the LUMORA hero.
 * The baseline hero is minimal: vignette + faint radial.
 * This variant adds deliberate, visible atmospheric layers
 * that create spatial depth and frame the Living Core.
 *
 * Layer architecture:
 *   1. VOID — deep near-black foundation
 *   2. ATMOSPHERE — visible purple atmospheric field
 *   3. DIRECTIONAL LIGHT — architectural light structure
 *   4. CORE GLOW — focal luminance around the Core
 *   5. VIGNETTE — tightened, more deliberate edge control
 *   6. LIVING CORE — unchanged (GlobalCore handles this)
 *   7. TYPOGRAPHY — unchanged
 *
 * All layers are CSS-only (gradients, pseudo-elements, @keyframes).
 * No new JS animation libraries. No WebGL. No particles.
 * Reduced-motion: global rule halts all animations.
 */
export function HeroV2() {
  const sectionRef = useRef<HTMLElement>(null);
  const identityRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const atmosphereRef = useRef<HTMLDivElement>(null);
  const lightStructureRef = useRef<HTMLDivElement>(null);
  const coreGlowRef = useRef<HTMLDivElement>(null);
  const { event } = useExperience();

  // ── V2 Entrance Sequence ──
  // Same emotional order as baseline, but richer atmospheric reveal:
  // 0.0s  Void already present
  // 0.2s  Atmosphere breathes in (1.8s)
  // 0.6s  Light structure emerges (2.0s)
  // 1.0s  Core glow establishes (1.6s)
  // 1.5s  LUMORA identity appears
  // 2.2s  Headline emerges
  // 2.8s  Invitation appears
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const dur = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--core-motion-duration"
        ) || "1"
      );

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      // Atmosphere — the first visible layer, establishes spatial presence
      if (atmosphereRef.current) {
        tl.fromTo(
          atmosphereRef.current,
          { opacity: 0, scale: 1.08 },
          { opacity: 1, scale: 1, duration: 1.8 * dur, ease: "power2.out" },
          0.2
        );
      }

      // Directional light structure — architectural framing emerges
      if (lightStructureRef.current) {
        tl.fromTo(
          lightStructureRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 2.0 * dur, ease: "power2.out" },
          0.6
        );
      }

      // Core glow — focal luminance establishes around the Core
      if (coreGlowRef.current) {
        tl.fromTo(
          coreGlowRef.current,
          { opacity: 0, scale: 0.88 },
          { opacity: 1, scale: 1, duration: 1.6 * dur, ease: "power2.out" },
          1.0
        );
      }

      // LUMORA identity — emerges at 1.5s
      tl.fromTo(
        identityRef.current,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 1.2 * dur, ease: "power2.out" },
        1.5
      );

      // Headline — emerges at 2.2s
      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 16, clipPath: "inset(100% 0 0 0)" },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0% 0 0 0)",
          duration: 1.4 * dur,
          ease: "power3.out",
        },
        2.2
      );

      // Invitation — appears at 2.8s
      tl.fromTo(
        scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.6 * dur, ease: "power2.out" },
        2.8
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [event]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="hero-v2 relative min-h-screen px-[var(--spacing-container)] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* ═══════════════════════════════════════════════════
          LAYER 1 — VOID
          Deep near-black foundation.
          Richer than baseline: layered radial gradients
          that create subtle tonal variation in the darkness.
          ═══════════════════════════════════════════════════ */}
      <div className="hero-v2-void" aria-hidden="true" />

      {/* ═══════════════════════════════════════════════════
          LAYER 2 — ATMOSPHERE
          A clearly visible purple atmospheric field.
          Larger, more structured than the baseline's faint radial.
          This is the first major visual difference: the void
          now has a perceptible, living atmosphere.
          ═══════════════════════════════════════════════════ */}
      <div
        ref={atmosphereRef}
        className="hero-v2-atmosphere"
        aria-hidden="true"
      />

      {/* ═══════════════════════════════════════════════════
          LAYER 3 — DIRECTIONAL LIGHT STRUCTURE
          Architectural light that frames the Core.
          Abstract, geometric, soft-edged.
          Not a lamp. Not a beam. A spatial composition.
          Inspired by: directional light shaping focus.
          ═══════════════════════════════════════════════════ */}
      <div
        ref={lightStructureRef}
        className="hero-v2-light"
        aria-hidden="true"
      >
        {/* Upper fan — light radiating downward from above the Core */}
        <div className="dl-fan-upper" />
        {/* Lower fan — subtle counter-balance, very faint */}
        <div className="dl-fan-lower" />
        {/* Left accent — architectural edge light */}
        <div className="dl-accent-left" />
        {/* Right accent — architectural edge light */}
        <div className="dl-accent-right" />
      </div>

      {/* ═══════════════════════════════════════════════════
          LAYER 4 — CORE GLOW
          Focal luminance that concentrates around the Core.
          This makes the Core feel like it occupies real space —
          light gathers where the Core exists.
          ═══════════════════════════════════════════════════ */}
      <div
        ref={coreGlowRef}
        className="hero-v2-core-glow"
        aria-hidden="true"
      />

      {/* ═══════════════════════════════════════════════════
          LAYER 5 — VIGNETTE
          Tighter, more deliberate than baseline.
          Concentrates attention inward toward the Core.
          ═══════════════════════════════════════════════════ */}
      <div className="hero-v2-vignette" aria-hidden="true" />

      {/* ═══════════════════════════════════════════════════
          LAYER 7 — TYPOGRAPHY
          Identity, headline, invitation.
          Unchanged from baseline.
          ═══════════════════════════════════════════════════ */}

      {/* Identity signal — LUMORA, quiet, above the Core */}
      <div
        ref={identityRef}
        className="absolute top-[14vh] left-0 right-0 flex justify-center opacity-0"
        style={{ zIndex: 10 }}
      >
        <span className="inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-text-muted">
          <span className="w-8 h-px bg-accent/30" aria-hidden="true" />
          LUMORA
          <span className="w-8 h-px bg-accent/30" aria-hidden="true" />
        </span>
      </div>

      {/* Main statement — emerges from the Core's presence, below it */}
      <div
        className="absolute top-[60vh] left-0 right-0 text-center px-[var(--spacing-container)]"
        style={{ zIndex: 10 }}
      >
        <h1
          ref={headingRef}
          id="hero-heading"
          className="font-display text-[clamp(2rem,5.5vw,4.5rem)] font-light leading-[1.05] tracking-[-0.02em] mb-0 opacity-0 text-text/90 core-type-calm"
        >
          Environments that feel
          <br />
          <span className="text-accent">alive</span>.
        </h1>
      </div>

      {/* Scroll invitation — quiet, unhurried */}
      <div
        ref={scrollRef}
        className="absolute bottom-[7vh] left-0 right-0 flex flex-col items-center gap-2.5 opacity-0"
        style={{ zIndex: 10 }}
      >
        <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-text-faint">
          Begin
        </span>
        <ArrowDown size={12} className="text-text-faint" aria-hidden="true" />
      </div>
    </section>
  );
}
