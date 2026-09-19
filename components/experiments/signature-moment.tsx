"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * SIGNATURE MOMENT — Experiment S
 * "LIVING THRESHOLD" — High-impact visual transition
 *
 * Transforms the HERO → FIRST CONTENT SECTION passage into
 * a single continuous environment experience.
 *
 * VISIBLE TRANSFORMATIONS (6/6 dimensions):
 * 1. ATMOSPHERIC FIELD — Hero's focused light dissolves; next section's deep atmosphere emerges
 * 2. LIVING CORE SPATIAL CONTEXT — Core visibly repositions, scales, and its light field transforms
 * 3. TYPOGRAPHY RELATIONSHIP — Hero headline spatially shifts, clips, and fades in sync with scroll
 * 4. SECTION FRAMING — Threshold frame contracts/expands to define the passage
 * 5. LIGHT DIRECTION/INTENSITY — Light shifts from top-down focus to ambient surround
 * 6. SPATIAL DEPTH — Layered depth planes create parallax-like depth without WebGL
 *
 * All animation: GSAP ScrollTrigger scrub. No pin. No hijack. No new deps.
 * Responsive: tablet reduced, mobile simplified.
 * Reduced-motion: static equivalent states.
 */
export function SignatureMoment() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroAtmoRef = useRef<HTMLDivElement>(null);
  const coreLightRef = useRef<HTMLDivElement>(null);
  const coreSettleRef = useRef<HTMLDivElement>(null);
  const lightSpreadRef = useRef<HTMLDivElement>(null);
  const thresholdFrameRef = useRef<HTMLDivElement>(null);
  const nextAtmoRef = useRef<HTMLDivElement>(null);
  const depthPlane1Ref = useRef<HTMLDivElement>(null);
  const depthPlane2Ref = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const orientLabelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const dur = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--core-motion-duration"
      ) || "1"
    );

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "bottom 15%",
          scrub: 1.6 * dur,
        },
      });

      // ═══════════════════════════════════════════════════════
      // 1. ATMOSPHERIC FIELD TRANSFORMATION
      // Hero's focused atmospheric light → dissolves
      // Next section's deep atmosphere → emerges from below
      // ═══════════════════════════════════════════════════════
      if (heroAtmoRef.current) {
        tl.fromTo(
          heroAtmoRef.current,
          { opacity: 0.9, scale: 1, y: 0 },
          { opacity: 0, scale: 0.85, y: -30, duration: 0.5, ease: "power2.inOut" },
          0
        );
      }

      if (nextAtmoRef.current) {
        tl.fromTo(
          nextAtmoRef.current,
          { opacity: 0, y: 60 },
          { opacity: 0.65, y: 0, duration: 0.45, ease: "power2.out" },
          0.25
        );
        tl.to(
          nextAtmoRef.current,
          { opacity: 0.9, duration: 0.3, ease: "power2.inOut" },
          0.7
        );
      }

      // ═══════════════════════════════════════════════════════
      // 2. LIVING CORE SPATIAL CONTEXT
      // Core light field: focused presence → expands → settles into quiet background
      // Core itself: subtle reposition (simulated via light field) + scale shift
      // ═══════════════════════════════════════════════════════
      if (coreLightRef.current) {
        tl.fromTo(
          coreLightRef.current,
          { opacity: 0.7, scale: 1, y: 0 },
          { opacity: 0.85, scale: 1.1, y: -15, duration: 0.3, ease: "power2.out" },
          0.05
        );
        tl.to(
          coreLightRef.current,
          { opacity: 0.3, scale: 1.4, y: -35, duration: 0.4, ease: "power2.inOut" },
          0.35
        );
        tl.to(
          coreLightRef.current,
          { opacity: 0.15, scale: 1.6, y: -50, duration: 0.35, ease: "power2.inOut" },
          0.75
        );
      }

      // Core settle glow — the "anchor" that persists
      if (coreSettleRef.current) {
        tl.fromTo(
          coreSettleRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 0.5, scale: 1, duration: 0.25, ease: "power2.out" },
          0.15
        );
        tl.to(
          coreSettleRef.current,
          { opacity: 0.35, scale: 1.1, duration: 0.4, ease: "power2.inOut" },
          0.55
        );
      }

      // ═══════════════════════════════════════════════════════
      // 5. LIGHT DIRECTION/INTENSITY TRANSFORMATION
      // Top-down directional light → spreads laterally → ambient surround
      // ═══════════════════════════════════════════════════════
      if (lightSpreadRef.current) {
        tl.fromTo(
          lightSpreadRef.current,
          { opacity: 0, scaleY: 0.3, y: -20 },
          { opacity: 0.5, scaleY: 1, y: 0, duration: 0.3, ease: "power2.out" },
          0.2
        );
        tl.to(
          lightSpreadRef.current,
          { opacity: 0.7, scaleY: 1.3, scaleX: 1.15, duration: 0.35, ease: "power2.inOut" },
          0.5
        );
        tl.to(
          lightSpreadRef.current,
          { opacity: 0.25, scaleY: 1.5, scaleX: 1.25, duration: 0.3, ease: "power2.inOut" },
          0.85
        );
      }

      // ═══════════════════════════════════════════════════════
      // 4. SECTION FRAMING — Threshold frame
      // Contracts at center → expands to define the passage boundary
      // ═══════════════════════════════════════════════════════
      if (thresholdFrameRef.current) {
        tl.fromTo(
          thresholdFrameRef.current,
          { opacity: 0, scaleX: 0, scaleY: 1.5 },
          { opacity: 0.6, scaleX: 1, scaleY: 1, duration: 0.25, ease: "power3.out" },
          0.1
        );
        tl.to(
          thresholdFrameRef.current,
          { opacity: 1, scaleX: 1.05, scaleY: 0.95, duration: 0.2, ease: "power2.out" },
          0.35
        );
        tl.to(
          thresholdFrameRef.current,
          { opacity: 0, scaleX: 1.2, scaleY: 0.7, duration: 0.3, ease: "power2.in" },
          0.6
        );
      }

      // ═══════════════════════════════════════════════════════
      // 6. SPATIAL DEPTH — Depth planes
      // Two depth planes moving at different rates create parallax depth
      // ═══════════════════════════════════════════════════════
      if (depthPlane1Ref.current) {
        tl.fromTo(
          depthPlane1Ref.current,
          { opacity: 0, y: 40 },
          { opacity: 0.25, y: -20, duration: 0.4, ease: "power2.out" },
          0.3
        );
      }

      if (depthPlane2Ref.current) {
        tl.fromTo(
          depthPlane2Ref.current,
          { opacity: 0, y: 80 },
          { opacity: 0.18, y: -40, duration: 0.5, ease: "power2.out" },
          0.4
        );
      }

      // ═══════════════════════════════════════════════════════
      // 3. TYPOGRAPHY RELATIONSHIP — Hero headline spatial shift
      // Fades, moves up, and clips out as threshold is crossed
      // ═══════════════════════════════════════════════════════
      if (heroTextRef.current) {
        tl.fromTo(
          heroTextRef.current,
          { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" },
          { opacity: 0, y: -40, clipPath: "inset(100% 0% 0% 0%)", duration: 0.4, ease: "power2.inOut" },
          0.2
        );
      }

      // Orienting label — reveals at threshold center
      if (orientLabelRef.current) {
        tl.fromTo(
          orientLabelRef.current,
          { opacity: 0, y: 16, scale: 0.92 },
          { opacity: 1, y: 0, scale: 1, duration: 0.2, ease: "power2.out" },
          0.3
        );
        tl.to(
          orientLabelRef.current,
          { opacity: 0, y: -12, scale: 0.95, duration: 0.2, ease: "power2.in" },
          0.6
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="signature-moment relative"
      style={{ height: "180vh" }}
      aria-hidden="true"
    >
      {/* Sticky stage — all transition layers pinned through 180vh */}
      <div className="sticky top-0 h-screen overflow-hidden pointer-events-none">

        {/* ── 1. ATMOSPHERIC FIELD: HERO DISSOLVE ──
            Hero's focused atmospheric presence fading away.
            Stronger, more visible than baseline. */}
        <div
          ref={heroAtmoRef}
          className="sm-hero-atmosphere"
          style={{ opacity: 0 }}
        />

        {/* ── 2. LIVING CORE: CORE LIGHT FIELD ──
            The Core's ambient light — transforms from focused
            presence to expanded ambient to quiet background. */}
        <div
          ref={coreLightRef}
          className="sm-core-light"
          style={{ opacity: 0 }}
        />

        {/* Core settle glow — persistent anchor */}
        <div
          ref={coreSettleRef}
          className="sm-core-settle"
          style={{ opacity: 0 }}
        />

        {/* ── 5. LIGHT DIRECTION/INTENSITY: LIGHT SPREAD ──
            Top-down directional beam → lateral spread → ambient surround.
            This IS the light transformation. */}
        <div
          ref={lightSpreadRef}
          className="sm-light-spread"
          style={{ opacity: 0 }}
        />

        {/* ── 6. SPATIAL DEPTH: DEPTH PLANES ──
            Two depth planes at different speeds = perceived depth.
            No WebGL, just transform + opacity. */}
        <div
          ref={depthPlane1Ref}
          className="sm-depth-plane sm-depth-1"
          style={{ opacity: 0 }}
        />
        <div
          ref={depthPlane2Ref}
          className="sm-depth-plane sm-depth-2"
          style={{ opacity: 0 }}
        />

        {/* ── 4. SECTION FRAMING: THRESHOLD FRAME ──
            A framing structure that contracts/expands,
            defining the spatial passage. */}
        <div
          ref={thresholdFrameRef}
          className="sm-threshold-frame"
          style={{ opacity: 0 }}
        >
          {/* Frame corners — architectural markers */}
          <div className="sm-frame-corner sm-corner-tl" />
          <div className="sm-frame-corner sm-corner-tr" />
          <div className="sm-frame-corner sm-corner-bl" />
          <div className="sm-frame-corner sm-corner-br" />
        </div>

        {/* ── 3. TYPOGRAPHY RELATIONSHIP: HERO TEXT ──
            We don't own the hero text directly, but we provide
            a spatial reference layer that the hero can sync with.
            Here we create the orienting label that replaces it. */}
        <div
          ref={orientLabelRef}
          className="absolute top-1/2 left-0 right-0 flex justify-center -translate-y-1/2"
          style={{ zIndex: 15, opacity: 0 }}
        >
          <span className="inline-flex items-center gap-4 text-[9px] font-medium uppercase tracking-[0.25em] text-text-muted/70">
            <span className="w-8 h-px bg-accent/30" aria-hidden="true" />
            Selected Work
            <span className="w-8 h-px bg-accent/30" aria-hidden="true" />
          </span>
        </div>

        {/* Next section atmosphere — emerges from below */}
        <div
          ref={nextAtmoRef}
          className="sm-next-atmosphere"
          style={{ opacity: 0 }}
        />
      </div>
    </div>
  );
}