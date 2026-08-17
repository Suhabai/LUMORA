"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown } from "lucide-react";
import { useExperience } from "@/components/layout/experience-context";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const identityRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const envResponseRef = useRef<HTMLDivElement>(null);
  const { event } = useExperience();

  // ── North Star Entrance Sequence ──
  // 0.0s  Environment already exists (GlobalCore)
  // 0.4s  Core becomes perceptible (GlobalCore handles this)
  // 1.0s  Core establishes its breathing rhythm
  // 1.5s  LUMORA identity appears
  // 2.2s  Headline emerges
  // 2.8s  Invitation appears
  //
  // The environment must not appear as a normal page fade.
  // The user should feel: "The space was already here."
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const dur = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--core-motion-duration") || "1");

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      // Environment responds to Core awakening — immediate, the space was already here
      if (envResponseRef.current) {
        tl.fromTo(
          envResponseRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1.6 * dur, ease: "power2.out" },
          0
        );
      }

      // LUMORA identity — emerges at 1.5s, above the Core
      tl.fromTo(
        identityRef.current,
        { opacity: 0, y: 6 },
        { opacity: 1, y: 0, duration: 1.2 * dur, ease: "power2.out" },
        1.5
      );

      // Headline — emerges at 2.2s, below the Core
      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 14, clipPath: "inset(100% 0 0 0)" },
        { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)", duration: 1.4 * dur, ease: "power3.out" },
        2.2
      );

      // Invitation — appears at 2.8s, quiet and unhurried
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
      className="relative min-h-screen px-[var(--spacing-container)] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* ── Focus vignette ──
          The global environment carries the atmosphere.
          This only concentrates attention inward. */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,transparent_46%,rgba(7,7,10,0.32)_100%)]" />
      </div>

      {/* ── Environment Response ──
          The Core awakens. The environment responds.
          This is the first causal effect. */}
      <div
        ref={envResponseRef}
        className="absolute inset-0 pointer-events-none opacity-0"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_48%,rgba(140,55,240,0.04)_0%,transparent_55%)]" />
      </div>

      {/* ── Emotional order: ENVIRONMENT → CORE (global) → LUMORA → HEADLINE → INVITATION ──
          The Core (global) awakens first.
          The environment responds.
          Then meaning appears. */}

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
      <div className="absolute top-[60vh] left-0 right-0 text-center px-[var(--spacing-container)]" style={{ zIndex: 10 }}>
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
