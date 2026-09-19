"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * LIVING THRESHOLD — Experiment T
 *
 * A cinematic transition between Hero and first content section.
 * The hero doesn't just "end" — it settles into the next experience.
 *
 * Architecture:
 *   LAYER 1 — Hero Dissolve: the hero's atmosphere fades downward
 *   LAYER 2 — Core Settle: the Living Core's ambient light shifts
 *   LAYER 3 — Threshold Line: a single horizontal threshold marker
 *   LAYER 4 — Next Atmosphere: the next section's space emerges
 *   LAYER 5 — Breath: a subtle atmospheric pulse at the threshold
 *
 * All animation is scroll-linked (GSAP ScrollTrigger, scrub).
 * No pin. No scroll hijacking. No new dependencies.
 * Responsive: reduced intensity on tablet/mobile.
 * Reduced-motion: static readable state.
 */
export function LivingThreshold() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroDissolveRef = useRef<HTMLDivElement>(null);
  const coreSettleRef = useRef<HTMLDivElement>(null);
  const thresholdLineRef = useRef<HTMLDivElement>(null);
  const nextAtmoRef = useRef<HTMLDivElement>(null);
  const breathRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const dur = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--core-motion-duration"
      ) || "1"
    );

    const ctx = gsap.context(() => {
      // Master scrub timeline — tied to scroll position of this container
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          end: "bottom 10%",
          scrub: 1.4 * dur,
        },
      });

      // ── Hero Dissolve ──
      // The hero's atmospheric presence fades as we scroll through.
      // Starts visible, dissolves to nothing.
      if (heroDissolveRef.current) {
        tl.fromTo(
          heroDissolveRef.current,
          { opacity: 0.7 },
          { opacity: 0, duration: 0.4, ease: "power2.inOut" },
          0
        );
      }

      // ── Core Settle ──
      // The Living Core's ambient light shifts — it was "present" in the hero,
      // now it settles into a quieter, wider state for the content section.
      // A soft radial that expands and dims.
      if (coreSettleRef.current) {
        tl.fromTo(
          coreSettleRef.current,
          { opacity: 0, scale: 0.85 },
          {
            opacity: 0.6,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          },
          0.05
        );
        tl.to(
          coreSettleRef.current,
          {
            opacity: 0.2,
            scale: 1.15,
            duration: 0.35,
            ease: "power2.inOut",
          },
          0.35
        );
      }

      // ── Threshold Line ──
      // A single horizontal line — the threshold between worlds.
      // Grows from center, holds, then fades.
      if (thresholdLineRef.current) {
        tl.fromTo(
          thresholdLineRef.current,
          { scaleX: 0, opacity: 0 },
          {
            scaleX: 1,
            opacity: 1,
            duration: 0.25,
            ease: "power3.out",
          },
          0.15
        );
        tl.to(
          thresholdLineRef.current,
          {
            opacity: 0,
            duration: 0.2,
            ease: "power2.in",
          },
          0.55
        );
      }

      // ── Next Atmosphere ──
      // The next section's atmospheric space emerges from below.
      // Creates the feeling that we're entering a new depth.
      if (nextAtmoRef.current) {
        tl.fromTo(
          nextAtmoRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 0.5,
            y: 0,
            duration: 0.35,
            ease: "power2.out",
          },
          0.3
        );
        tl.to(
          nextAtmoRef.current,
          {
            opacity: 0.8,
            duration: 0.25,
            ease: "power2.inOut",
          },
          0.65
        );
      }

      // ── Breath ──
      // A subtle atmospheric pulse at the threshold moment.
      // The environment "breathes" as we cross the threshold.
      if (breathRef.current) {
        tl.fromTo(
          breathRef.current,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 0.35,
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          },
          0.2
        );
        tl.to(
          breathRef.current,
          {
            opacity: 0,
            scale: 1.1,
            duration: 0.3,
            ease: "power2.in",
          },
          0.5
        );
      }

      // ── Text Reveal ──
      // A quiet label that reveals during the threshold moment.
      // "Selected Work" — orienting the visitor.
      if (textRef.current) {
        tl.fromTo(
          textRef.current,
          { opacity: 0, y: 12 },
          {
            opacity: 1,
            y: 0,
            duration: 0.2,
            ease: "power2.out",
          },
          0.3
        );
        tl.to(
          textRef.current,
          {
            opacity: 0,
            y: -8,
            duration: 0.2,
            ease: "power2.in",
          },
          0.55
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="living-threshold relative"
      style={{ height: "160vh" }}
      aria-hidden="true"
    >
      {/* ── Sticky stage ──
          All transition layers are pinned within this container
          as the user scrolls through the 160vh transition zone. */}
      <div className="sticky top-0 h-screen overflow-hidden pointer-events-none">
        {/* LAYER 1 — Hero Dissolve
            The hero's atmospheric presence fading away.
            Deep purple radial that dissolves as we scroll. */}
        <div
          ref={heroDissolveRef}
          className="lt-hero-dissolve"
          style={{ opacity: 0 }}
        />

        {/* LAYER 2 — Core Settle
            The Living Core's ambient light shifting state.
            A soft radial that expands and dims — presence → rest. */}
        <div
          ref={coreSettleRef}
          className="lt-core-settle"
          style={{ opacity: 0 }}
        />

        {/* LAYER 5 — Breath
            Atmospheric pulse at the threshold moment.
            The environment "breathes" as we cross. */}
        <div
          ref={breathRef}
          className="lt-breath"
          style={{ opacity: 0 }}
        />

        {/* LAYER 4 — Next Atmosphere
            The next section's space emerging from below.
            Creates the feeling of entering a new depth. */}
        <div
          ref={nextAtmoRef}
          className="lt-next-atmosphere"
          style={{ opacity: 0 }}
        />

        {/* LAYER 3 — Threshold Line
            A single horizontal line marking the threshold.
            Grows from center, holds, then fades. */}
        <div
          ref={thresholdLineRef}
          className="lt-threshold-line"
          style={{ opacity: 0 }}
        />

        {/* Text — quiet orienting label */}
        <div
          ref={textRef}
          className="absolute top-1/2 left-0 right-0 flex justify-center -translate-y-1/2"
          style={{ zIndex: 10, opacity: 0 }}
        >
          <span className="inline-flex items-center gap-3 text-[9px] font-medium uppercase tracking-[0.22em] text-text-muted/60">
            <span className="w-6 h-px bg-accent/20" aria-hidden="true" />
            Selected Work
            <span className="w-6 h-px bg-accent/20" aria-hidden="true" />
          </span>
        </div>
      </div>
    </div>
  );
}
