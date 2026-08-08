"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown } from "lucide-react";
import LivingCore from "@/components/core/LivingCore";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const identityRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const statementRef = useRef<HTMLParagraphElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.4,
      });

      // Core presence — slow emergence, establishes identity
      tl.fromTo(
        coreRef.current,
        { opacity: 0, scale: 0.85 },
        { opacity: 1, scale: 1, duration: 2.8, ease: "power2.out" }
      );

      // Identity signal — quiet, small
      tl.fromTo(
        identityRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.4, ease: "power2.out" },
        "-=1.8"
      );

      // Main heading — cinematic clip-path reveal
      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 40, clipPath: "inset(100% 0 0 0)" },
        { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)", duration: 1.6, ease: "power3.out" },
        "-=0.8"
      );

      // Supporting statement
      tl.fromTo(
        statementRef.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
        "-=0.6"
      );

      // Scroll invitation — last, very quiet
      tl.fromTo(
        scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2.0, ease: "power2.out" },
        "-=0.4"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-[var(--spacing-container)] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* ── Atmosphere Layers ──
          Deep environmental presence, not decoration.
          Reduced opacity to ensure headline is the primary visual signal. */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Primary depth — radial from center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(138,46,255,0.025)_0%,transparent_65%)]" />
        {/* Soft ambient wash — broader, quieter */}
        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[600px] md:h-[600px] rounded-full bg-accent/[0.015] blur-[150px]" />
        {/* Edge vignette — focus inward */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,transparent_40%,rgba(7,7,10,0.4)_100%)]" />
      </div>

      {/* ── Living Core ──
          The quiet center of LUMORA.
          Desktop: experienced. Mobile: sensed. */}
      <div
        ref={coreRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.0] md:scale-[1.8] lg:scale-[2.2] opacity-0 pointer-events-none"
        aria-hidden="true"
      >
        <LivingCore mode="hero" intensity="soft" interaction="none" />
      </div>

      {/* ── Content Hierarchy ──
          CORE → identity signal → main statement → supporting → invitation */}
      <div className="max-w-[800px] text-center relative z-10">
        {/* Identity signal — small, quiet, establishes context */}
        <div ref={identityRef} className="opacity-0 mb-8 md:mb-10">
          <span className="inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-text-muted">
            <span className="w-8 h-px bg-accent/30" aria-hidden="true" />
            Independent Designer &amp; Creative Developer
            <span className="w-8 h-px bg-accent/30" aria-hidden="true" />
          </span>
        </div>

        {/* Main statement — the visual anchor, the entrance moment */}
        <h1
          ref={headingRef}
          id="hero-heading"
          className="font-display text-[clamp(2.25rem,7vw,6rem)] font-bold leading-[0.92] tracking-[-0.04em] mb-8 md:mb-10 opacity-0"
        >
          Designing Digital Experiences
          <br />
          That Feel <span className="text-accent">Alive</span>.
        </h1>

        {/* Supporting statement — calm, confident, brief */}
        <p
          ref={statementRef}
          className="text-[15px] md:text-[16px] leading-[1.75] text-text-muted max-w-[460px] mx-auto opacity-0"
        >
          I create cinematic digital experiences where design, motion, and technology form something memorable.
        </p>

        {/* Scroll invitation — subtle, unhurried, tighter on mobile */}
        <div ref={scrollRef} className="mt-14 md:mt-24 flex flex-col items-center gap-2.5 opacity-0">
          <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-text-faint">
            Scroll to explore
          </span>
          <ArrowDown size={12} className="text-text-faint" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
