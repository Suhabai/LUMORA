"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown } from "lucide-react";
import { useExperience } from "@/components/layout/experience-context";

/**
 * HERO V3 — LIVING ENVIRONMENT
 *
 * A deliberately composed cinematic frame.
 * The hero is not a "page section" with effects —
 * it is a designed environment the visitor enters.
 *
 * Layer architecture:
 *   1. VOID — deep near-black with tonal character
 *   2. ATMOSPHERE — asymmetric purple spatial field
 *   3. DIRECTIONAL LIGHT — architectural beam + ambient field
 *   4. CORE GLOW — focal luminance around the Core
 *   5. LIVING CORE — unchanged (GlobalCore handles this)
 *   6. SPATIAL MARK — one vertical axis + one living node
 *   7. TYPOGRAPHY — asymmetric spatial placement
 *   8. DEPTH FRAME — two partial architectural edge fragments
 *   9. VIGNETTE — concentrates attention inward
 *
 * All layers are CSS-only (gradients, pseudo-elements, @keyframes).
 * No new JS animation libraries. No WebGL. No particles.
 * Reduced-motion: global rule halts all animations.
 */
export function HeroV3() {
  const sectionRef = useRef<HTMLElement>(null);
  const identityRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const atmosphereRef = useRef<HTMLDivElement>(null);
  const lightRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  const depthRef = useRef<HTMLDivElement>(null);
  const { event } = useExperience();

  // ── V3 Entrance Sequence ──
  // Emotional order: ENVIRONMENT → CORE → SPATIAL MARK → MEANING
  //
  // 0.0s  Void already present
  // 0.2s  Atmosphere breathes in (1.8s)
  // 0.6s  Light beam emerges (2.0s)
  // 1.0s  Core glow establishes (1.6s)
  // 1.2s  Spatial mark axis draws in (1.4s)
  // 1.5s  LUMORA identity appears (1.2s)
  // 2.2s  Headline clipPath reveal (1.4s)
  // 2.6s  Depth frame fades in (1.6s)
  // 2.8s  Invitation appears (1.6s)
  useEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set([atmosphereRef.current, lightRef.current, glowRef.current, markRef.current, identityRef.current, headingRef.current, depthRef.current, scrollRef.current].filter(Boolean), { opacity: 1, y: 0, scale: 1, scaleY: 1, clipPath: "inset(0% 0 0 0)" });
        return;
      }
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
          { opacity: 0, scale: 1.06 },
          { opacity: 1, scale: 1, duration: 1.8 * dur, ease: "power2.out" },
          0.2
        );
      }

      // Directional light — architectural framing emerges
      if (lightRef.current) {
        tl.fromTo(
          lightRef.current,
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 2.0 * dur, ease: "power2.out" },
          0.6
        );
      }

      // Core glow — focal luminance establishes around the Core
      if (glowRef.current) {
        tl.fromTo(
          glowRef.current,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 1.6 * dur, ease: "power2.out" },
          1.0
        );
      }

      // Spatial mark — the living axis draws in
      if (markRef.current) {
        tl.fromTo(
          markRef.current,
          { opacity: 0, scaleY: 0.6 },
          { opacity: 1, scaleY: 1, duration: 1.4 * dur, ease: "power2.out", transformOrigin: "center top" },
          1.2
        );
      }

      // LUMORA identity — emerges at 1.5s, left-aligned to axis
      tl.fromTo(
        identityRef.current,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 1.2 * dur, ease: "power2.out" },
        1.5
      );

      // Headline — emerges at 2.2s, clipPath reveal
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

      // Depth frame — architectural edge fragments appear
      if (depthRef.current) {
        tl.fromTo(
          depthRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1.6 * dur, ease: "power2.out" },
          2.6
        );
      }

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
      className="hero-v3 relative min-h-screen px-[var(--spacing-container)] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* ═══════════════════════════════════════════════════
          LAYER 1 — VOID
          Deep near-black foundation with tonal character.
          ═══════════════════════════════════════════════════ */}
      <div className="hero-v3-void" aria-hidden="true" />

      {/* ═══════════════════════════════════════════════════
          LAYER 2 — ATMOSPHERE
          Asymmetric purple spatial field.
          The first major visual presence: the void is alive.
          ═══════════════════════════════════════════════════ */}
      <div
        ref={atmosphereRef}
        className="hero-v3-atmosphere"
        aria-hidden="true"
      />

      {/* ═══════════════════════════════════════════════════
          LAYER 3 — DIRECTIONAL LIGHT
          Architectural light with directional flow.
          Originates from above the Core's position.
          ═══════════════════════════════════════════════════ */}
      <div
        ref={lightRef}
        className="hero-v3-light"
        aria-hidden="true"
      >
        <div className="hv3-beam" />
        <div className="hv3-ambient" />
      </div>

      {/* ═══════════════════════════════════════════════════
          LAYER 4 — CORE GLOW
          Focal luminance concentrated around the Core.
          Light gathers where the Core exists.
          ═══════════════════════════════════════════════════ */}
      <div
        ref={glowRef}
        className="hero-v3-glow"
        aria-hidden="true"
      />

      {/* ═══════════════════════════════════════════════════
          LAYER 5 — VIGNETTE
          Tighter than baseline, more deliberate.
          ═══════════════════════════════════════════════════ */}
      <div className="hero-v3-vignette" aria-hidden="true" />

      {/* ═══════════════════════════════════════════════════
          LAYER 6 — SPATIAL MARK / LIVING AXIS
          LUMORA's quiet signature.
          One vertical axis with one living node.
          Architectural precision without HUD aesthetics.
          ═══════════════════════════════════════════════════ */}
      <div
        ref={markRef}
        className="hero-v3-mark"
        aria-hidden="true"
      >
        <div className="hv3-axis-v" />
        <div className="hv3-node" />
      </div>

      {/* ═══════════════════════════════════════════════════
          LAYER 8 — PARTIAL DEPTH FRAME
          Two asymmetric architectural edge fragments.
          Creates spatial depth, not an interface frame.
          ═══════════════════════════════════════════════════ */}
      <div
        ref={depthRef}
        className="hero-v3-depth"
        aria-hidden="true"
      >
        <div className="hv3-depth-ul" />
        <div className="hv3-depth-lr" />
      </div>

      {/* ═══════════════════════════════════════════════════
          LAYER 7 — TYPOGRAPHY
          Identity, headline, invitation.
          Asymmetric placement: left-aligned to axis,
          headline extends right of axis.
          ═══════════════════════════════════════════════════ */}

      {/* Identity signal — LUMORA, left-aligned to vertical axis at 36% */}
      <div
        ref={identityRef}
        className="absolute top-[14vh] left-[36%] -translate-x-1/2 opacity-0"
        style={{ zIndex: 10 }}
      >
        <span className="inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-text-muted">
          <span className="w-8 h-px bg-accent/30" aria-hidden="true" />
          LUMORA
          <span className="w-8 h-px bg-accent/30" aria-hidden="true" />
        </span>
      </div>

      {/* Main statement — right of axis, at 52vh */}
      <div
        className="absolute top-[52vh] left-[38%] text-left px-[var(--spacing-container)]"
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

      {/* Scroll invitation — left-aligned to axis */}
      <div
        ref={scrollRef}
        className="absolute bottom-[7vh] left-[36%] -translate-x-1/2 flex flex-col items-center gap-2.5 opacity-0"
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
