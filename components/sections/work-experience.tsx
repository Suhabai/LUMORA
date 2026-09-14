"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WorldCard from "@/components/worlds/WorldCard";
import { worlds } from "@/components/worlds/world-data";
import { Reveal } from "@/components/ui/reveal";
import { useMounted } from "@/components/hooks/use-mounted";

gsap.registerPlugin(ScrollTrigger);

const INTRO_WORDS = [
  { text: "Three", delay: 0 },
  { text: "worlds,", delay: 0.08 },
  { text: "each", delay: 0.16 },
  { text: "built", delay: 0.24 },
  { text: "around", delay: 0.32 },
  { text: "a", delay: 0.40 },
  { text: "different", delay: 0.48 },
  { text: "truth.", delay: 0.56 },
];

export function WorkExperience() {
  const mounted = useMounted();
  const heroRef = useRef<HTMLElement>(null);
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const statementRef = useRef<HTMLParagraphElement>(null);
  const closingRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!mounted || !heroRef.current) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      wordsRef.current.forEach((el) => {
        if (el) el.style.opacity = "1";
      });
      if (statementRef.current) statementRef.current.style.opacity = "1";
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Staggered word reveal — each word emerges in sequence
      wordsRef.current.forEach((el, i) => {
        if (!el) return;
        tl.fromTo(
          el,
          { opacity: 0, y: 10, clipPath: "inset(100% 0 0 0)" },
          {
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0 0 0)",
            duration: 0.5,
          },
          0.15 + INTRO_WORDS[i].delay
        );
      });

      // Supporting statement — appears after words complete
      if (statementRef.current) {
        tl.fromTo(
          statementRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.7 },
          1.2
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, [mounted]);

  // Closing section entrance
  useEffect(() => {
    if (!mounted || !closingRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        closingRef.current,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: closingRef.current,
            start: "top 88%",
          },
        }
      );
    }, closingRef);

    return () => ctx.revert();
  }, [mounted]);

  return (
    <>
      {/* ═══════════════════════════════════════════════
          SECTION 01 — Introduction

          The threshold. Sets context without over-explaining.
          Typography carries the weight: the heading does the work.
          ═══════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        id="work-intro"
        className="relative min-h-[70vh] flex flex-col items-center justify-center px-[var(--spacing-container)] overflow-hidden"
        aria-labelledby="work-heading"
      >
        {/* Ambient atmosphere — concentrated center glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(138,46,255,0.03)_0%,transparent_60%)]" />
        </div>

        <div className="relative z-10 text-center max-w-[780px]">
          {/* Section label — quiet identity signal */}
          <p className="text-accent text-[10px] font-semibold uppercase tracking-[0.18em] mb-8">
            <span
              className="inline-block w-6 h-px bg-accent/30 mr-3 align-middle"
              aria-hidden="true"
            />
            Selected Worlds
            <span
              className="inline-block w-6 h-px bg-accent/30 ml-3 align-middle"
              aria-hidden="true"
            />
          </p>

          {/* Main statement — staggered word reveal */}
          <h1
            id="work-heading"
            className="font-display text-[clamp(2.2rem,6vw,4.2rem)] font-light leading-[1.12] tracking-[-0.02em] mb-8"
          >
            {INTRO_WORDS.map((word, i) => (
              <span
                key={i}
                ref={(el) => {
                  wordsRef.current[i] = el;
                }}
                className="inline-block mr-[0.3em] opacity-0"
                style={{ willChange: "opacity, transform" }}
              >
                {word.text}
              </span>
            ))}
          </h1>

          {/* Supporting statement — emerges after the main heading */}
          <p
            ref={statementRef}
            className="text-text-muted text-[15px] md:text-[17px] leading-[1.75] max-w-[520px] mx-auto opacity-0"
          >
            Each world carries its own character. Precision, intelligence,
            movement — exploring how different energies shape digital
            experiences.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 02 — World Cards

          Three destinations. Each is a gateway, not a preview.
          Hover reveals personality. Click enters the world.
          ═══════════════════════════════════════════════ */}
      <section
        id="work-worlds"
        className="relative px-[var(--spacing-container)] pb-[var(--spacing-section)]"
        aria-labelledby="worlds-heading"
      >
        <h2 id="worlds-heading" className="sr-only">
          World Destinations
        </h2>

        <div className="max-w-[1200px] mx-auto">
          {/* Section divider — visual threshold between intro and worlds */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className="w-16 h-px bg-border/30" aria-hidden="true" />
            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-text-faint">
              Explore
            </span>
            <span className="w-16 h-px bg-border/30" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {worlds.map((world, index) => (
              <Reveal
                key={world.id}
                variant="fadeUp"
                delay={index * 0.22}
                duration={0.8}
              >
                <WorldCard world={world} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 03 — Closing Invitation

          A quiet moment of reflection before the journey continues.
          No hard CTA. Just a gentle threshold.
          ═══════════════════════════════════════════════ */}
      <section
        ref={closingRef}
        id="work-closing"
        className="relative px-[var(--spacing-container)] pb-[var(--spacing-section)] opacity-0"
        aria-labelledby="closing-heading"
      >
        <div className="max-w-[640px] mx-auto text-center">
          {/* Subtle divider — the space settles */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span
              className="w-12 h-px bg-border/40"
              aria-hidden="true"
            />
            <span className="w-1.5 h-1.5 rounded-full bg-accent/20" aria-hidden="true" />
            <span
              className="w-12 h-px bg-border/40"
              aria-hidden="true"
            />
          </div>

          <p className="text-text-muted text-[14px] md:text-[15px] leading-[1.8] mb-8">
            Every project begins with a question.
            <br />
            The answer is never the same twice.
          </p>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 group"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-text-faint transition-colors duration-500 group-hover:text-accent">
              Begin a Conversation
            </span>
            <svg
              className="w-3 h-3 text-text-faint transition-all ease-[cubic-bezier(0.16,1,0.3,1)] duration-[600ms] group-hover:text-accent group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
