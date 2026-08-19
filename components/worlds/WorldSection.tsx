"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import WorldTransition from "./WorldTransition";
import { animateWorld, createDepthParallax } from "./world-motion";
import { WorldStructuralGeometry } from "./world-geometry";
import { useExperience } from "@/components/layout/experience-context";
import { CORE_EVENT_SEMANTIC_MAP, type CoreSemanticState } from "@/components/core/core-types";
import type { World } from "./world-types";

interface WorldSectionProps {
  world: World;
  index: number;
}

export default function WorldSection({ world, index }: WorldSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { event } = useExperience();
  const coreState: CoreSemanticState = CORE_EVENT_SEMANTIC_MAP[event] ?? "present";

  useEffect(() => {
    if (!sectionRef.current) return;

    // Animate the world's causal sequence via GSAP
    const cleanup = animateWorld(sectionRef, world.sequence);

    // NEXORA: scroll-linked depth parallax on the three planes
    let parallaxCleanup: (() => void) | undefined
    if (world.id === "nexora" && sectionRef.current) {
      const section = sectionRef.current
      // createDepthParallax creates its own ScrollTrigger instances
      // We need to clean them up, so we wrap in gsap.context
      import("gsap").then(({ default: gsap }) => {
        import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
          gsap.registerPlugin(ScrollTrigger)
          const pCtx = gsap.context(() => {
            createDepthParallax(section)
          }, section)
          parallaxCleanup = () => pCtx.revert()
        })
      })
    }

    return () => {
      cleanup()
      parallaxCleanup?.()
    }
  }, [world.id, world.sequence]);

  // World-specific spatial alignment
  const spatialStyles: Record<string, { align: string; composition: string }> = {
    omnia: {
      align: "items-center text-center",
      composition: "max-w-[600px] mx-auto",
    },
    nexora: {
      align: "items-start text-left",
      composition: "max-w-[560px]",
    },
    velocity: {
      align: "items-end text-right",
      composition: "max-w-[560px] ml-auto",
    },
  };

  const spatial = spatialStyles[world.id] || spatialStyles.omnia;

  return (
    <section
      ref={sectionRef}
      id={`world-${world.id}`}
      className={`relative min-h-[85vh] flex ${spatial.align} px-[var(--spacing-container)] overflow-hidden`}
      aria-labelledby={`world-heading-${world.id}`}
    >
      {/* ── World Geometry: Spatial Signature ──
          SVG structural graphics that make each world visually distinct.
          OMNIA = axis + floor bands + crosshair
          NEXORA = 3 depth planes + hidden threads
          VELOCITY = diagonal trajectories + dash streams
          data-geometry attributes enable GSAP scroll animation.
          Core state drives intensity and rhythm. */}
      <WorldStructuralGeometry worldId={world.id} coreState={coreState} />

      {/* ── Content Layer ──
          World identity, not portfolio card content.
          The .world-content class is targeted by animation sequences. */}
      <div ref={contentRef} className={`world-content relative z-10 ${spatial.composition} py-20 md:py-32`}>
        {/* World category — quiet identity signal */}
        <p className="text-accent text-[9px] font-semibold uppercase tracking-[0.16em] mb-4 md:mb-6">
          {world.category}
        </p>

        {/* World title — the name of this universe */}
        <h2
          id={`world-heading-${world.id}`}
          className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[0.92] tracking-[-0.04em] mb-6 md:mb-8"
        >
          {world.title}
        </h2>

        {/* World description — what this place is */}
        <p className="text-text-muted text-[16px] md:text-[18px] leading-[1.7] mb-8 md:mb-10 max-w-[480px]">
          {world.description}
        </p>

        {/* Feeling signals — the texture of this world */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 mb-10 md:mb-14">
          {world.feeling.map((item) => (
            <span
              key={item}
              className="text-[10px] font-medium uppercase tracking-[0.12em] text-text-faint"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Enter World — the threshold.
            Each world's CTA has its own interaction character. */}
        <Link
          href={`/work/${world.id}`}
          className={`inline-flex items-center gap-3 group ${
            world.id === "omnia" ? "cta-omnia" :
            world.id === "nexora" ? "cta-nexora" :
            "cta-velocity"
          }`}
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-text-muted transition-colors duration-500 group-hover:text-accent">
            Enter World
          </span>
          <svg
            className={`w-4 h-4 text-text-muted transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-accent ${
              world.id === "velocity" ? "group-hover:translate-x-1.5" : "group-hover:translate-x-1"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </Link>
      </div>

      {/* ── Foreground Plane Edge (NEXORA) ──
          A layer passes in front of the content — the content exists
          partially between layers. Visible, painted above text. */}
      {world.id === "nexora" && (
        <div className="absolute inset-0 pointer-events-none z-20" aria-hidden="true">
          <div className="nexora-front absolute top-[72%] left-[2%] right-[4%] h-px bg-gradient-to-r from-accent/[0.14] via-accent/[0.06] to-transparent" />
        </div>
      )}

      {/* ── World Transition ──
          Narrative bridge into the next world.
          Structure → Discovery → Momentum. */}
      {index < 2 && <WorldTransition worldId={world.id} />}
    </section>
  );
}
