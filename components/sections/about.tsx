"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useExperience } from "@/components/layout/experience-context";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statementRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef<HTMLDivElement>(null);
  const bloomRef = useRef<HTMLDivElement>(null);
  const { event } = useExperience();

  useEffect(() => {
    if (!sectionRef.current) return;

    // Motion duration derives from Core state — slower in human phase
    const dur = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--core-motion-duration") || "1");

    const ctx = gsap.context(() => {
      // ── CORE LISTENS → ENVIRONMENT QUIETS ──
      // Before the Human moment, Core enters a listening state.
      // Core becomes smaller, slower, quieter.
      // Surrounding content loses visual intensity.
      // Then "The client never noticed." appears.
      // Then "I did." becomes the focal point.
      // Then "That's the work." settles.
      // The visual system communicates: the environment stopped performing.
      // It started listening.

      // Main content — the person, revealed calmly first
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1.6 * dur,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 65%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // ── The Human Moment ──
      // "The client never noticed. I did." is the emotional center.
      // As it approaches center, the environment becomes quiet around it:
      // the bloom warms, the statement becomes dominant.
      // The Core is listening. The environment responds by quieting.
      if (statementRef.current) {
        gsap.fromTo(
          statementRef.current,
          { opacity: 0, scale: 0.98, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: statementRef.current,
              start: "top 88%",
              end: "center center",
              scrub: 1.2 * dur,
            },
          }
        );
      }

      // Warmth bloom — the atmosphere leans closer to the person
      // This is the Core's warmth responding to human intimacy
      if (bloomRef.current) {
        gsap.fromTo(
          bloomRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: statementRef.current,
              start: "top 75%",
              end: "center center",
              scrub: 1.5 * dur,
            },
          }
        );
      }

      // Closing — quiet arrival after the moment
      // The environment settles into stillness
      if (closingRef.current) {
        gsap.fromTo(
          closingRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1.6 * dur,
            ease: "power2.out",
            scrollTrigger: {
              trigger: closingRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [event]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative px-[var(--spacing-container)] overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* ── Warmth Bloom ──
          The global environment carries the warmth of the human phase.
          This bloom gathers it around the emotional center. */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          ref={bloomRef}
          className="about-bloom absolute top-[56%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[500px] max-w-[92vw] opacity-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(205,135,255,0.10)_0%,transparent_58%)]"
        />
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        {/* ── The person — first, with space to be known ── */}
        <div ref={contentRef} className="pt-36 md:pt-48 pb-10 md:pb-14 max-w-[680px] opacity-0">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.16em] text-accent mb-5">
            The person
          </span>

          <h2
            id="about-heading"
            className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.03em] leading-[1.05] mb-10 md:mb-14 text-text/90"
          >
            Sohrab
          </h2>

          <p className="text-text text-[16px] md:text-[17px] leading-[1.8] mb-8 max-w-[520px]">
            I design and develop digital products. The thing I keep coming back to
            is timing — how a moment lands, when silence matters more than motion,
            what pace makes information feel right.
          </p>

          <p className="text-text-muted text-[15px] md:text-[16px] leading-[1.8] max-w-[520px]">
            Most interfaces rely on decoration to communicate. I&apos;ve found the quieter
            details carry more weight: negative space that breathes, transitions that
            don&apos;t ask for attention, a single color that appears only when it matters.
          </p>
        </div>

        {/* ── The Human Moment ──
            The surrounding interface is quiet.
            The Core is slow. The typography breathes.
            For a moment, it is simply a person speaking. */}
        <div ref={statementRef} className="relative min-h-[70vh] flex items-center py-20 md:py-28 opacity-0">
          <div className="max-w-[640px] core-space-inner">
            <div className="h-px w-[30px] bg-accent/[0.22] mb-10" />
            <p className="about-moment-line font-display text-[clamp(1.3rem,3vw,2rem)] font-light leading-[1.5] tracking-[-0.01em] text-text/85 core-type-calm">
              I once spent three hours on a single transition timing.
            </p>
            <p className="mt-8 font-display text-[clamp(1.7rem,4vw,2.7rem)] font-medium leading-[1.22] tracking-[-0.02em] text-text core-type-calm">
              The client never noticed.
            </p>
            <p className="mt-4 font-display text-[clamp(2.2rem,5vw,3.5rem)] font-light leading-[1.1] tracking-[-0.03em] text-accent/92 core-type-calm">
              I did.
            </p>
            <p className="mt-8 about-moment-line font-display text-[clamp(1.3rem,3vw,2rem)] font-light leading-[1.5] tracking-[-0.01em] text-text/85 core-type-calm">
              That&apos;s the work.
            </p>
          </div>
        </div>

        {/* ── LUMORA — what this place is ── */}
        <div ref={closingRef} className="pb-36 md:pb-48 opacity-0">
          <p className="text-text-muted text-[14px] leading-[1.75] max-w-[440px]">
            LUMORA is a collection of these decisions. Nothing here is accidental,
            but nothing exists to impress either.
          </p>
        </div>
      </div>
    </section>
  );
}
