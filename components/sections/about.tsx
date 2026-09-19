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
  const focusGlowRef = useRef<HTMLDivElement>(null);
  const listenRef = useRef<HTMLDivElement>(null);
  const revelationRef = useRef<HTMLParagraphElement>(null);
  const { event } = useExperience();

  useEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const dur = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--core-motion-duration") || "1");

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set([contentRef.current, statementRef.current, closingRef.current, bloomRef.current, focusGlowRef.current, listenRef.current, revelationRef.current].filter(Boolean), { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" });
        gsap.set(".principle-line, .about-beat-1, .about-beat-2, .about-beat-3", { opacity: 1, y: 0, scaleX: 1, filter: "blur(0px)" });
        return;
      }
      // ── CORE LISTENS → ENVIRONMENT QUIETS ──
      // Before the Human moment, Core enters a listening state.
      // Core becomes smaller, slower, quieter, warmer, softer.
      // The surroundings recede; the world stops performing.
      // Then "The client never noticed." appears.
      // Then "I did." becomes the sole focal point.
      // Then "That's the work." settles.
      // The environment is listening to a single voice.

      // Main content — the person, revealed calmly.
      // Scrubbed, so it continues directly from the pinned philosophy
      // without a hard cut. The thinking never stops; it becomes human.
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              end: "top 40%",
              scrub: 1.2 * dur,
            },
          }
        );
      }

      // ── The Environment Listens ──
      // A soft veil dims the edges of the world as the statement approaches.
      // The center stays clear — only the person remains in the light.
      if (listenRef.current) {
        gsap.fromTo(
          listenRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: statementRef.current,
              start: "top 82%",
              end: "center 45%",
              scrub: 1.4 * dur,
            },
          }
        );
      }

      // Warmth bloom — the atmosphere leans closer to the person
      // This is the Core's warmth responding to human intimacy
      if (bloomRef.current) {
        gsap.fromTo(
          bloomRef.current,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            scrollTrigger: {
              trigger: statementRef.current,
              start: "top 80%",
              end: "center center",
              scrub: 1.5 * dur,
            },
          }
        );
      }

      // ── The Focal Glow ──
      // A warm light gathers behind the revelation. The world focuses
      // on exactly one thing: "The client never noticed. I did."
      if (focusGlowRef.current) {
        gsap.fromTo(
          focusGlowRef.current,
          { opacity: 0, scale: 0.85 },
          {
            opacity: 1,
            scale: 1,
            scrollTrigger: {
              trigger: statementRef.current,
              start: "top 80%",
              end: "center 40%",
              scrub: 1.3 * dur,
            },
          }
        );
      }

      // ── The Human Moment ──
      // Three deliberate beats, scrubbed and continuous:
      // 1. "I once spent three hours..." — the setup, quieter
      // 2. "The client never noticed. I did." — the revelation, dominant
      // 3. "That's the work." — the settlement, the weight
      if (statementRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: statementRef.current,
            start: "top 88%",
            end: "center 42%",
            scrub: 1.2 * dur,
          },
        });

        // Statement container — rises from intimacy
        tl.fromTo(
          statementRef.current,
          { opacity: 0, scale: 0.98, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "power2.out" },
          0
        );

        // The line — a breath before the thought
        const line = statementRef.current.querySelector(".principle-line");
        if (line) {
          tl.fromTo(
            line,
            { scaleX: 0, opacity: 0 },
            { scaleX: 1, opacity: 1, duration: 0.3, ease: "power3.out" },
            0.05
          );
        }

        // Beat 1 — the setup, quieter
        const beat1 = statementRef.current.querySelector(".about-beat-1");
        if (beat1) {
          tl.fromTo(
            beat1,
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
            0.1
          );
        }

        // Beat 2 — the setup line of the revelation
        const beat2 = statementRef.current.querySelector(".about-beat-2");
        if (beat2) {
          tl.fromTo(
            beat2,
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
            0.22
          );
        }

        // THE PEAK — "I did." becomes the sole focal point.
        // It grows, it glows, and the world listens.
        if (revelationRef.current) {
          tl.fromTo(
            revelationRef.current,
            { opacity: 0, scale: 0.94 },
            { opacity: 1, scale: 1.05, duration: 0.42, ease: "power3.out" },
            0.28
          ).to(
            revelationRef.current,
            {
              textShadow: "0 0 28px rgba(228, 150, 255, 0.38), 0 0 60px rgba(190, 110, 250, 0.18)",
              duration: 0.4,
              ease: "power2.out",
            },
            0.3
          );
        }

        // The world listens — the setup recedes into the background
        if (beat1) {
          tl.to(beat1, { opacity: 0.42, duration: 0.3, ease: "power1.inOut" }, 0.34);
        }

        // Beat 3 — the settlement, blurred in
        const beat3 = statementRef.current.querySelector(".about-beat-3");
        if (beat3) {
          tl.fromTo(
            beat3,
            { opacity: 0, filter: "blur(4px)" },
            { opacity: 1, filter: "blur(0px)", duration: 0.45, ease: "power2.out" },
            0.4
          );
        }

        // The peak cools into the whole — the moment becomes memory
        if (revelationRef.current) {
          tl.to(
            revelationRef.current,
            {
              scale: 1,
              textShadow: "0 0 16px rgba(210, 130, 245, 0.22)",
              duration: 0.35,
              ease: "power2.inOut",
            },
            0.62
          );
        }
      }

      // Closing — quiet arrival after the moment.
      // Scrubbed, continuous. The environment settles into stillness.
      if (closingRef.current) {
        gsap.fromTo(
          closingRef.current,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: closingRef.current,
              start: "top 92%",
              end: "bottom 60%",
              scrub: 1.2 * dur,
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
      {/* ── The Environment Listens ──
          As the emotional peak approaches, the edges of the world recede.
          The center stays clear. Only the person remains in the light.
          This is the transition out of the pinned philosophy:
          the dark, sharp void quietly becomes a warm, intimate space. */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div ref={listenRef} className="about-listen absolute inset-0 opacity-0" />

        {/* Warmth Bloom — the atmosphere leans closer to the person */}
        <div
          ref={bloomRef}
          className="about-bloom absolute top-[56%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] max-w-[92vw] opacity-0"
          style={{
            background: "radial-gradient(ellipse at 50% 50%, rgba(205, 135, 255, 0.12) 0%, rgba(170, 90, 255, 0.05) 35%, transparent 60%)",
          }}
        />
        {/* Secondary warmth — the intimate distance */}
        <div
          className="absolute top-[62%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] max-w-[80vw] opacity-0"
          style={{
            background: "radial-gradient(ellipse at 50% 50%, rgba(220, 180, 255, 0.08) 0%, transparent 55%)",
          }}
        />
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        {/* ── The person — first, with space to be known ── */}
        <div ref={contentRef} className="pt-36 md:pt-48 pb-10 md:pb-14 max-w-[680px] opacity-0">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.16em] text-accent mb-5 font-sans">
            The person
          </span>

          <h2
            id="about-heading"
            className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.03em] leading-[1.05] mb-10 md:mb-14 text-text/90"
          >
            Sohrab
          </h2>

          <p className="font-sans text-text text-[16px] md:text-[17px] leading-[1.8] mb-8 max-w-[520px]">
            I design and develop digital products. The thing I keep coming back to
            is timing — how a moment lands, when silence matters more than motion,
            what pace makes information feel right.
          </p>

          <p className="font-sans text-text-muted text-[15px] md:text-[16px] leading-[1.8] max-w-[520px]">
            Most interfaces rely on decoration to communicate. I&apos;ve found the quieter
            details carry more weight: negative space that breathes, transitions that
            don&apos;t ask for attention, a single color that appears only when it matters.
          </p>
        </div>

        {/* ── The Human Moment ──
            The surrounding interface is quiet.
            The Core is slow, warm, and soft. The typography breathes.
            For a moment, it is simply a person speaking.
            The environment is listening. */}
        <div ref={statementRef} className="relative min-h-[70vh] flex items-center py-20 md:py-28 opacity-0">
          {/* The focal glow — the world gathers behind one voice */}
          <div
            ref={focusGlowRef}
            className="about-focal-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[360px] max-w-[90vw] opacity-0"
            aria-hidden="true"
          />

          <div className="max-w-[640px] core-space-inner relative mx-auto text-center">
            {/* The breath before the thought */}
            <div className="principle-line h-px w-[30px] bg-accent/[0.22] mb-10 origin-left" />

            {/* Beat 1 — the setup */}
            <p className="about-beat-1 font-display text-[clamp(1.3rem,3vw,2rem)] font-light leading-[1.5] tracking-[-0.01em] text-text/85 core-type-calm">
              I once spent three hours on a single transition timing.
            </p>

            {/* Beat 2 — the revelation */}
            <div className="mt-8">
              <p className="about-beat-2 font-display text-[clamp(1.7rem,4vw,2.7rem)] font-medium leading-[1.22] tracking-[-0.02em] text-text core-type-calm">
                The client never noticed.
              </p>
              <p
                ref={revelationRef}
                className="about-beat-2 mt-4 font-display text-[clamp(2.2rem,5vw,3.5rem)] font-light leading-[1.1] tracking-[-0.03em] text-accent/92 core-type-calm"
              >
                I did.
              </p>
            </div>

            {/* Beat 3 — the settlement */}
            <p className="about-beat-3 mt-8 font-display text-[clamp(1.3rem,3vw,2rem)] font-light leading-[1.5] tracking-[-0.01em] text-text/85 core-type-calm">
              That&apos;s the work.
            </p>
          </div>
        </div>

        {/* ── LUMORA — what this place is ── */}
        <div ref={closingRef} className="pb-36 md:pb-48 opacity-0">
          <p className="font-sans text-text-muted text-[14px] leading-[1.75] max-w-[440px] mx-auto text-center">
            LUMORA is a collection of these decisions. Nothing here is accidental,
            but nothing exists to impress either.
          </p>
        </div>
      </div>
    </section>
  );
}